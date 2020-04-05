renderHeaderNode();
renderMainSectionNode();
renderPaginationButtons();
renderFooterNode();

let info = [];
let stuff = [];

const selectPerPage = document.getElementById('selectPerPage');
const btnPagePrev = document.getElementById('pagePrev');
const btnPageNext = document.getElementById('pageNext');

const getSelectPerPage = res => {
    if (!selectPerPage.firstChild) { 
    for (let i = res.data.info.perPage; i < res.data.info.count; i *= 2) {
        selectPerPage.appendChild(createHTMLNode('option', [{name: 'value', value:[i]}], `${i}`));
    }
    selectPerPage.appendChild(createHTMLNode('option', [{name: 'value', value:[res.data.info.count]}], 'Все'));
}}

const updatePaginationInfo = res => {
    document.getElementById('pagesInfo').innerHTML = `Найдено <span>${res.data.info.count}</span> результатов, на <span>${res.data.info.pages}</span> страницах. <br>Текущая страница: <span>${res.data.info.currentPage}</span>.`
    res.data.info.prev ? btnPagePrev.classList.remove('disabled') : btnPagePrev.classList.add('disabled');
    res.data.info.next ? btnPageNext.classList.remove('disabled') : btnPageNext.classList.add('disabled');
}

const getDataFromAPI = (url = `https://salary-server.herokuapp.com/api`) => {
    document.getElementById('outputData').innerHTML = '';
    renderSpinner();
    axios
        .get(url)
        .then(response => {
            stuff = response.data.results;
            info = response.data.info;
            renderTableNode(columns,stuff);
            addEvListenerToTable();
            updatePaginationInfo(response);
            getSelectPerPage(response);
        })
        .catch(error => console.log('Error in main Promise', error));
    };

selectPerPage.addEventListener('change', () => getDataFromAPI(`https://salary-server.herokuapp.com/api?perPage=${selectPerPage.value}`));
btnPagePrev.addEventListener('click', () => info.prev ? getDataFromAPI(`https://salary-server.herokuapp.com${info.prev}&perPage=${selectPerPage.value}`) : null);
btnPageNext.addEventListener('click', () => info.next ? getDataFromAPI(`https://salary-server.herokuapp.com${info.next}&perPage=${selectPerPage.value}`) : null);

getDataFromAPI();