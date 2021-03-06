///////// render HTML Nodes /////////

const createHTMLNode = (tag, attrs, inner) => {
    const element = document.createElement(tag);
    attrs.map(attr => {element.setAttribute(attr.name, attr.value.join(' '))});
    inner ? (Array.isArray(inner) ? inner.map(el => element.appendChild(el)) : element.innerHTML=inner) : null;
    return element;
};


const slug = text => text.trim().split(' ').map(el => el.toLowerCase()).join('-');

const columns = ['ID', 'Full Name', 'Position', 'Tech', 'Exp', 'Sex', 'Salary'];

const renderHeaderNode = () => {
    const logo = createHTMLNode ('div', [{name: 'class', value:['header-info']}], [createHTMLNode ('p', [{name: 'id', value:['pagesInfo']}], null)]);
    const inp = createHTMLNode ('div', [{name: 'class', value:['form-group']}], [
        createHTMLNode ('label', [{name: 'for', value:['inpPerPage']}], 'Результатов на странице:'),
        createHTMLNode ('select', [{name: 'class', value:['form-control']}, {name: 'id', value:['selectPerPage']}], null),
    ]);
    const col = createHTMLNode ('div', [{name: 'class', value:['col', 'header-col']}], [logo, inp])
    const row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    const container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    const header = createHTMLNode ('header', [], [container]);
    document.getElementById('app').appendChild(header);
};

const renderMainSectionNode = () => {
    const outpPagin = createHTMLNode ('div', [{name: 'id', value:['outputPagination']}, {name: 'class', value: ['pagination-wrap']}], null);
    const outpData = createHTMLNode ('div', [{name: 'id', value:['outputData']}], null);
    const col = createHTMLNode ('div', [{name: 'class', value:['col']}], [outpData, outpPagin])
    const row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    const container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    const main = createHTMLNode ('main', [], [container]);
    document.getElementById('app').appendChild(main);
}

const renderFooterNode = () => {
    const span = createHTMLNode ('span', [], `&#169 dmitrijpedan.github.io, ${new Date().getFullYear()}`);
    const col = createHTMLNode ('div', [{name: 'class', value:['col']}], [span])
    const row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    const container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    const footer = createHTMLNode ('footer', [], [container]);
    document.getElementById('app').appendChild(footer);
};

const renderTableNode = (headCols, dataRows) => {
    document.getElementById('outputData').innerHTML = '';
    const trHead = createHTMLNode('tr', [], null);
    headCols.map(el => trHead.appendChild(createHTMLNode('th', [{ name: 'id', value: [slug(el)]}, { name: 'class', value: ['th-cols-flat']}], el)));
    const thead = createHTMLNode('thead', [], [trHead]);
    const tbody = createHTMLNode('tbody', [], null);
    dataRows.map(el => {
        const trTbody = createHTMLNode('tr', [], null);
        Object.keys(el).map(elName => trTbody.appendChild(createHTMLNode('td', [], el[elName])))
        tbody.appendChild(trTbody);
    })
    const table = createHTMLNode('table', [{ name: 'class', value: ['table'] }], [thead, tbody]);
    const title = createHTMLNode('div', [{ name: 'class', value: ['table-title']}], [
        createHTMLNode('h1', [], 'Staff table')
    ]);
    const div = createHTMLNode('div', [{ name: 'class', value: ['table-responsive-sm'] }], [title, table]);
    const container = createHTMLNode('div', [{ name: 'class', value: ['container'] }], [
        createHTMLNode('div', [{ name: 'class', value: ['row'] }], [
            createHTMLNode('div', [{ name: 'class', value: ['col'] }], [div])
        ]),
    ]);
    document.getElementById('outputData').appendChild(container);
}

const renderPaginationButtons = () => {
    const nav = createHTMLNode('nav', [{name: 'aria-label', value: ['Page navigation example'] }], [
        createHTMLNode('ul', [{name: 'class', value: ['pagination', 'justify-content-center'] }], [
            createHTMLNode('li', [{name: 'class', value: ['page-item', 'disabled']}, {name: 'id', value: ['pagePrev']}], [
                createHTMLNode('a', [{name: 'class', value: ['page-link']}, {name: 'href', value: ['#']}], 'Previous')]),
            createHTMLNode('li', [{name: 'class', value: ['page-item', 'disabled']}, {name: 'id', value: ['pageNext']}], [
                createHTMLNode('a', [{name: 'class', value: ['page-link']}, {name: 'href', value: ['#']}], 'Next')]),
        ])
    ]);
    document.getElementById('outputPagination').appendChild(nav);
};

const renderSpinner = () => {
    const div = createHTMLNode ('div', [{name: 'class', value:['spinner-border', 'text-info']}, {name: 'role', value:['status']}], [
        createHTMLNode ('span', [{name: 'class', value:['sr-only']}], 'Loading...')
    ])
    const box = createHTMLNode ('div', [{name: 'class', value:['spinner-box']}], [div]);
    document.getElementById('outputData').prepend(box);
};
