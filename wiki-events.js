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
    const newSize = parseFloat(e.target.value);
    window.localStorage.setItem('text-size', String(newSize))
    let style = document.getElementById('new-styles');
    style.innerHTML = `#content p:not(.t), #content ul, #content div:not(#tools) {font-size: ${1 + newSize}em}
     #firstHeading {font-size: ${2.4 + newSize}em} 
     .mw-headline {font-size: ${1.2 + newSize}em`
}

function menuToggleEvent() {
    for (let elem of actions) document.documentElement.style.setProperty(
        elem.name,
        document.documentElement.style.getPropertyValue(elem.name) === elem.value1 ? elem.value2 : elem.value1)

    togglePanelsEvent();
}

function togglePanelsEvent() {
    const leftPanel = document.getElementById('mw-panel');
    if (leftPanel?.style) {
        leftPanel.style.marginLeft = (leftPanel?.style?.marginLeft ? '' : -leftPanel.offsetWidth + 'px');
    }

    const topPanel = document.getElementById('mw-head');
    if (topPanel?.style) {
        topPanel.style.marginTop = (topPanel.style.marginTop ? '' : -topPanel.offsetHeight + 'px');
    }

    const rightPanel = document.getElementById('tools');
    if (rightPanel?.style) {
        rightPanel.style.right = (rightPanel.style.right !== '0px' ? '0px' : -rightPanel.offsetWidth + 'px');
    }
}

function setDefaultTextSize() {
    const defaultTextSize = window.localStorage.getItem('text-size')
    if (defaultTextSize) {
        textSizeChangedEvent({target: {value: defaultTextSize}})
    }
}