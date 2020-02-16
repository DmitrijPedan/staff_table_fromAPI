///////// sorting functions /////////

const changeArrowInSortedTh = (el, key) => {
    document.getElementById(el).classList.remove('th-cols-flat');
    key ? document.getElementById(el).classList.add('th-cols-down') : document.getElementById(el).classList.add('th-cols-up') ;
}

const idHandleClick = () => {
    const flag = (stuff[0].id > stuff[1].id);
    stuff.sort((a,b) => flag ? a.id - b.id : b.id - a.id);
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
    changeArrowInSortedTh('id', flag)
}

const fullNameHandleClick = () => {
    const flag = (stuff[0].fullName > stuff[stuff.length - 1].fullName);
    stuff.sort((a,b) => {
        if (flag) {
            return a.fullName.toLowerCase() < b.fullName.toLowerCase() ? -1 : a.fullName.toLowerCase() > b.fullName.toLowerCase() ? 1 : 0;  
        }
        else {
            return a.fullName.toLowerCase() < b.fullName.toLowerCase() ? 1 : a.fullName.toLowerCase() > b.fullName.toLowerCase() ? -1 : 0;
        }
    });
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
    changeArrowInSortedTh('full-name', flag)
}

const positionHandleClick = () => {
    const flag = (stuff[0].position > stuff[stuff.length - 1].position);
    stuff.sort((a,b) => {
        if (flag) {
            return a.position.toLowerCase() < b.position.toLowerCase() ? -1 : a.position.toLowerCase() > b.position.toLowerCase() ? 1 : 0;
        }
        else {
            return a.position.toLowerCase() < b.position.toLowerCase() ? 1 : a.position.toLowerCase() > b.position.toLowerCase() ? -1 : 0;
        }
    });
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
    changeArrowInSortedTh('position', flag);
}

const genderHandleClick = () => {
    const flag = (stuff[0].sex > stuff[stuff.length - 1].sex);
    stuff.sort((a,b) => {
        if (flag) {
            return a.sex.toLowerCase() < b.sex.toLowerCase() ? -1 : a.sex.toLowerCase() > b.sex.toLowerCase() ? 1 : 0;
        }
        else {
            return a.sex.toLowerCase() < b.sex.toLowerCase() ? 1 : a.sex.toLowerCase() > b.sex.toLowerCase() ? -1 : 0;
        }
    });
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
    changeArrowInSortedTh('sex', flag);
}

const techHandleClick = () => {
    const flag = (stuff[0].skill > stuff[stuff.length - 1].skill);
    stuff.sort((a,b) => {
        if (flag) {
            return a.skill.toLowerCase() < b.skill.toLowerCase() ? -1 : a.skill.toLowerCase() > b.skill.toLowerCase() ? 1 : 0;
        }
        else {
            return a.skill.toLowerCase() < b.skill.toLowerCase() ? 1 : a.skill.toLowerCase() > b.skill.toLowerCase() ? -1 : 0;
        }
    });
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
    changeArrowInSortedTh('tech', flag);
}

const expHandleClick = () => {
    const flag = (stuff[0].exp > stuff[1].exp);
    stuff.sort((a,b) => (flag) ? a.exp - b.exp : b.exp - a.exp);
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
    changeArrowInSortedTh('exp', flag);
}

const salaryHandleClick = () => {
    const flag = (stuff[0].salary > stuff[1].salary);
    stuff.sort((a,b) => flag ? a.salary - b.salary : b.salary - a.salary);
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
    changeArrowInSortedTh('salary', flag);
}

///////// Events Listeners functions /////////

const addEvListenerToTable = () => {
    document.getElementById('id').addEventListener('click', idHandleClick);
    document.getElementById('full-name').addEventListener('click', fullNameHandleClick);
    document.getElementById('position').addEventListener('click', positionHandleClick);
    document.getElementById('tech').addEventListener('click', techHandleClick);
    document.getElementById('exp').addEventListener('click', expHandleClick);
    document.getElementById('sex').addEventListener('click', genderHandleClick);
    document.getElementById('salary').addEventListener('click', salaryHandleClick);
}

const removeEvListenerFromTable = () => {
    document.getElementById('id').removeEventListener('click', idHandleClick);
    document.getElementById('full-name').removeEventListener('click', fullNameHandleClick);
    document.getElementById('position').removeEventListener('click', positionHandleClick);
    document.getElementById('tech').removeEventListener('click', techHandleClick);
    document.getElementById('exp').removeEventListener('click', idHandleClick);
    document.getElementById('sex').removeEventListener('click', genderHandleClick);
    document.getElementById('salary').removeEventListener('click', salaryHandleClick);
}
