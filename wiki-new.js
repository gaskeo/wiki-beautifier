function createMenuButton() {
    const menuToggleButton = document.createElement('div');
    menuToggleButton.classList.add('menu-btn');
    menuToggleButton.onclick = (_) => menuToggleEvent();
    document.body.appendChild(menuToggleButton);

}

function createTools() {
    const parent = document.getElementById('mw-navigation');
    if (!parent) {
        return
    }
    let elem = document.createElement('div');
    elem.id = 'tools';
    elem.style.right = '0';

    const style = document.createElement('style');
    style.id = 'new-styles';
    elem.appendChild(style);

    const textSizeP = document.createElement('p');
    textSizeP.innerText = 'text size';
    textSizeP.classList.add('t');
    textSizeP.classList.add('right-menu-elems');
    elem.appendChild(textSizeP);

    const textSizeRange = document.createElement('input')
    textSizeRange.min = '-0.5';
    textSizeRange.max = '0.5';
    textSizeRange.step = '0.02';
    textSizeRange.value = '0';
    textSizeRange.type = 'range';
    textSizeRange.onchange = (e) => textSizeChangedEvent(e);
    textSizeRange.oninput = (e) => textSizeChangedEvent(e);
    elem.appendChild(textSizeRange);
    textSizeRange.classList.add('right-menu-elems');

    parent.appendChild(elem);
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