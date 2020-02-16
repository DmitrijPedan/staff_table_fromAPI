renderHeaderNode();
renderMainSectionNode();
renderFooterNode();

let info = [];
let stuff = [];

const selectPerPage = document.getElementById('selectPerPage');
const btnPagePrev = document.getElementById('pagePrev');
const btnPageNext = document.getElementById('pageNext');

selectPerPage.addEventListener('change', () => getDataFromAPI(`https://thawing-depths-65790.herokuapp.com/api?perPage=${selectPerPage.value}`));
btnPagePrev.addEventListener('click', () => info.prev ? getDataFromAPI(`https://thawing-depths-65790.herokuapp.com${info.prev}&perPage=${selectPerPage.value}`) : null);
btnPageNext.addEventListener('click', () => info.next ? getDataFromAPI(`https://thawing-depths-65790.herokuapp.com${info.next}&perPage=${selectPerPage.value}`) : null);

const getListPerPage = res => {
    if (!selectPerPage.firstChild) { 
    for (let i = res.data.info.perPage; i < res.data.info.count; i *= 2) {
        selectPerPage.appendChild(createHTMLNode('option', [{name: 'value', value:[i]}], `${i}`));
    }
    selectPerPage.appendChild(createHTMLNode('option', [{name: 'value', value:[res.data.info.count]}], 'Все'));
}}

const updateResponseInfo = res => {
    document.getElementById('pagesInfo').innerHTML = `Найдено <span>${res.data.info.count}</span> результатов, на <span>${res.data.info.pages}</span> страницах. <br>Текущая страница: <span>${res.data.info.currentPage}</span>.`
    res.data.info.prev ? btnPagePrev.classList.remove('disabled') : btnPagePrev.classList.add('disabled');
    res.data.info.next ? btnPageNext.classList.remove('disabled') : btnPageNext.classList.add('disabled');
}

const getDataFromAPI = (url = `https://thawing-depths-65790.herokuapp.com/api`) => {
    document.getElementById('outputData').innerHTML = '';
    renderSpinner();
    axios
        .get(url)
        .then(response => {
            stuff = response.data.results;
            info = response.data.info;
            updateResponseInfo(response);
            getListPerPage(response);
            renderTableNode(columns,stuff);
            addEvListenerToTable();
        })
        .catch(error => console.log('Error in main Promise', error));
    };



getDataFromAPI();

