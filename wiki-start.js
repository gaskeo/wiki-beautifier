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
        name: '--sup-width',
        value1: '0',
        value2: 'auto'
    },
    {
        name: '--a-color',
        value1: '#000',
        value2: '#0645AD'
    }
]

function setProps() {
    for (let elem of actions) {
        document.documentElement.style.setProperty(elem.name, elem.value1);
    }
}