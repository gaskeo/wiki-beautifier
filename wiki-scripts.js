function textSizeChanged(e) {
    const newSize = e.target.value - 0;
    let style = document.getElementById('new-styles');
    style.innerHTML = `#content p:not(.t), #content ul, #content div:not(#tools) {font-size: ${1 + newSize}em}
     #firstHeading {font-size: ${2.4 + newSize}em} 
     .mw-headline {font-size: ${1.2 + newSize}em`
}

window.onload = () => {
    hidePanels();
    clearAll();
    createTools();
    createMenuButton()
}

function menuToggle() {
    document.documentElement.style.setProperty('--hidden-elements-opacity',
        document.documentElement.style.getPropertyValue('--hidden-elements-opacity') === '0' ? '1' : '0');

    const content = document.getElementById('content');
    content.style.opacity = '0';
    setTimeout(() => {
            document.documentElement.style.setProperty('--sup-display',
                document.documentElement.style.getPropertyValue('--sup-display') === 'none' ? 'inline' : 'none');
            content.style.opacity = '1';
        },
        200);


    const leftPanel = document.getElementById('mw-panel');
    leftPanel.style.marginLeft = (leftPanel.style.marginLeft ? '' : -leftPanel.offsetWidth + 'px');

    const topPanel = document.getElementById('mw-head');
    topPanel.style.marginTop = (topPanel.style.marginTop ? '' : -topPanel.offsetHeight + 'px');
}

function clearAll() {
    document.documentElement.style.setProperty('--hidden-elements-opacity', '0');
    document.documentElement.style.setProperty('--sup-display', 'none');

}

function createMenuButton() {
    const menuToggleButton = document.createElement('div');
    menuToggleButton.classList.add('menu-btn');
    menuToggleButton.onclick = (_) => menuToggle();
    document.body.appendChild(menuToggleButton);

}

function createTools() {
    const content = document.getElementById('firstHeading');
    let elem = document.createElement('div');
    elem.id = 'tools';

    const style = document.createElement('style');
    style.id = 'new-styles';
    elem.appendChild(style);

    const textSizeP = document.createElement('p');
    textSizeP.innerText = 'Размер текста';
    textSizeP.classList.add('t');
    elem.appendChild(textSizeP);

    const textSizeRange = document.createElement('input')
    textSizeRange.min = '-0.5';
    textSizeRange.max = '0.5';
    textSizeRange.step = '0.1';
    textSizeRange.value = '0';
    textSizeRange.type = 'range';
    textSizeRange.onchange = (e) => textSizeChanged(e);
    textSizeRange.oninput = (e) => textSizeChanged(e);
    elem.appendChild(textSizeRange);

    const parent = content.parentNode;
    parent.insertBefore(elem, content);
}

function hidePanels() {
    const leftPanel = document.getElementById('mw-panel');
    leftPanel.style.marginLeft = -leftPanel.offsetWidth + 'px';
    leftPanel.style.transition = 'margin-left 0.2s';

    const topPanel = document.getElementById('mw-head');
    topPanel.style.marginTop = -topPanel.offsetHeight + 'px';
    topPanel.style.transition = 'margin-top 0.2s';
}