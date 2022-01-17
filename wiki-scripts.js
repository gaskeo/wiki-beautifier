function textSizeChanged(e) {
    const newSize = e.target.value - 0;
    let style = document.getElementById('new-styles');
    style.innerHTML = `#content p:not(.t), #content ul, #content div:not(#tools) {font-size: ${1 + newSize}em}
     #firstHeading {font-size: ${2.4 + newSize}em} 
     .mw-headline {font-size: ${1.2 + newSize}em`
}

window.onload = () => {
    createTools();
    hidePanels();
    clearAll();
    createMenuButton()
}

function menuToggle() {
    document.documentElement.style.setProperty('--hidden-elements-opacity',
        document.documentElement.style.getPropertyValue('--hidden-elements-opacity') === '0' ? '1' : '0');

    document.documentElement.style.setProperty('--sup-anim-f',
        document.documentElement.style.getPropertyValue('--sup-anim-f') === 'ease-in' ? 'ease-out' : 'ease-in');

    document.documentElement.style.setProperty('--sup-width',
        document.documentElement.style.getPropertyValue('--sup-width') === '0' ? 'auto' : '0');


    const leftPanel = document.getElementById('mw-panel');
    leftPanel.style.marginLeft = (leftPanel.style.marginLeft ? '' : -leftPanel.offsetWidth + 'px');

    const topPanel = document.getElementById('mw-head');
    topPanel.style.marginTop = (topPanel.style.marginTop ? '' : -topPanel.offsetHeight + 'px');

    const rightPanel = document.getElementById('tools');
    console.log(rightPanel.style.right)
    rightPanel.style.right = (rightPanel.style.right !== '0px' ? '0px' : -rightPanel.offsetWidth + 'px');
}

function clearAll() {
    document.documentElement.style.setProperty('--hidden-elements-opacity', '0');
    document.documentElement.style.setProperty('--sup-width', '0');
    document.documentElement.style.setProperty('--sup-anim-f', 'ease-out');
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

function hidePanels() {
    const leftPanel = document.getElementById('mw-panel');
    leftPanel.style.marginLeft = -leftPanel.offsetWidth + 'px';
    leftPanel.style.transition = 'margin-left 0.2s';

    const topPanel = document.getElementById('mw-head');
    topPanel.style.marginTop = -topPanel.offsetHeight + 'px';
    topPanel.style.transition = 'margin-top 0.2s';

    const rightPanel = document.getElementById('tools');
    rightPanel.style.right = -rightPanel.offsetWidth + 'px';
    rightPanel.style.transition = 'right 0.2s';

}