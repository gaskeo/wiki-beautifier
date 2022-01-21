window.addEventListener('scroll', function () {
    const rect = header.getBoundingClientRect();
    const ph = document.getElementById('pseudo-header');
    if (ph === null) return;

    if (rect.y < 10) {
        ph.style.opacity = '1'
    } else if (document.getElementById('pseudo-header').style.opacity === '1') {
        ph.style.opacity = '0';
    }
})

function textSizeChangedEvent(e) {
    const newSize = e.target.value - 0;
    let style = document.getElementById('new-styles');
    style.innerHTML = `#content p:not(.t), #content ul, #content div:not(#tools) {font-size: ${1 + newSize}em}
     #firstHeading {font-size: ${2.4 + newSize}em} 
     .mw-headline {font-size: ${1.2 + newSize}em`
}

function menuToggleEvent() {
    for (let elem of actions) {
        document.documentElement.style.setProperty(elem.name,
            document.documentElement.style.getPropertyValue(elem.name) === elem.value1 ? elem.value2 : elem.value1)
    }
    togglePanelsEvent();
}

function togglePanelsEvent() {
    const leftPanel = document.getElementById('mw-panel');
    leftPanel.style.marginLeft = (leftPanel.style.marginLeft ? '' : -leftPanel.offsetWidth + 'px');

    const topPanel = document.getElementById('mw-head');
    topPanel.style.marginTop = (topPanel.style.marginTop ? '' : -topPanel.offsetHeight + 'px');

    const rightPanel = document.getElementById('tools');
    rightPanel.style.right = (rightPanel.style.right !== '0px' ? '0px' : -rightPanel.offsetWidth + 'px');
}