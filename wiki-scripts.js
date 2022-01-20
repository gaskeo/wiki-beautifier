const header = document.getElementById('firstHeading');

const actions = [
    {
        name: '--hidden-elements-opacity',
        value1: '0',
        value2: '1'
    },
    {
        name: '--sup-anim-f',
        value1: 'ease-in',
        value2: 'ease-out'
    },
    {
        name: '-sup-width',
        value1: '0',
        value2: 'auto'
    },
    {
        name: '--a-color',
        value1: '#000',
        value2: '#0645AD'
    }
]

window.addEventListener('scroll', function () {
    const rect = header.getBoundingClientRect();
    const ph = document.getElementById('pseudo-header')
    if (rect.y < 10) {
        ph.style.opacity = '1'
    } else if (document.getElementById('pseudo-header').style.opacity === '1') {
        ph.style.opacity = '0';
    }
})

function textSizeChanged(e) {
    const newSize = e.target.value - 0;
    let style = document.getElementById('new-styles');
    style.innerHTML = `#content p:not(.t), #content ul, #content div:not(#tools) {font-size: ${1 + newSize}em}
     #firstHeading {font-size: ${2.4 + newSize}em} 
     .mw-headline {font-size: ${1.2 + newSize}em`
}

window.onload = () => {
    createPseudoHeader();
    createTools();
    clearAll();
    createMenuButton();
    togglePanels();
}

function menuToggle() {
    for (let elem of actions) {
        document.documentElement.style.setProperty(elem.name,
            document.documentElement.style.getPropertyValue(elem.name) === elem.value1 ? elem.value2 : elem.value1)
    }
    togglePanels();
}

function clearAll() {
    for (let elem of actions) {
        document.documentElement.style.setProperty(elem.name, elem.value1);
    }
}

function createMenuButton() {
    const menuToggleButton = document.createElement('div');
    menuToggleButton.classList.add('menu-btn');
    menuToggleButton.onclick = (_) => menuToggle();
    document.body.appendChild(menuToggleButton);

}

function createTools() {
    const parent = document.getElementById('mw-navigation');
    let elem = document.createElement('div');
    elem.id = 'tools';
    elem.style.right = '0';

    const style = document.createElement('style');
    style.id = 'new-styles';
    elem.appendChild(style);

    const textSizeP = document.createElement('p');
    textSizeP.innerText = 'Размер текста';
    textSizeP.classList.add('t');
    textSizeP.classList.add('right-menu-elems');
    elem.appendChild(textSizeP);

    const textSizeRange = document.createElement('input')
    textSizeRange.min = '-0.5';
    textSizeRange.max = '0.5';
    textSizeRange.step = '0.02';
    textSizeRange.value = '0';
    textSizeRange.type = 'range';
    textSizeRange.onchange = (e) => textSizeChanged(e);
    textSizeRange.oninput = (e) => textSizeChanged(e);
    elem.appendChild(textSizeRange);
    textSizeRange.classList.add('right-menu-elems');

    parent.appendChild(elem);
}

function togglePanels() {
    const leftPanel = document.getElementById('mw-panel');
    leftPanel.style.marginLeft = (leftPanel.style.marginLeft ? '' : -leftPanel.offsetWidth + 'px');

    const topPanel = document.getElementById('mw-head');
    topPanel.style.marginTop = (topPanel.style.marginTop ? '' : -topPanel.offsetHeight + 'px');

    const rightPanel = document.getElementById('tools');
    rightPanel.style.right = (rightPanel.style.right !== '0px' ? '0px' : -rightPanel.offsetWidth + 'px');

}

function createPseudoHeader() {
    const pseudoHeader = document.getElementById('firstHeading').cloneNode(true);
    pseudoHeader.setAttribute('id', 'pseudo-header');
    pseudoHeader.classList.add('header');
    pseudoHeader.classList.add('pseudo-header');

    const upButton = document.createElement(`button`);
    upButton.appendChild(document.createElement('div'))
    upButton.classList.add('up-btn')

    upButton.onclick = () => document.getElementById('mw-head').scrollIntoView({block: 'start', behavior: 'smooth'});

    pseudoHeader.appendChild(upButton);
    document.getElementById('content').appendChild(pseudoHeader);
}