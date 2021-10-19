const infoBlocks = [
    document.querySelector('#weDoInfo1'),
    document.querySelector('#weDoInfo2'),
    document.querySelector('#weDoInfo3')
]
const buttons = [
    document.querySelector('#weDoBtn1'),
    document.querySelector('#weDoBtn2'),
    document.querySelector('#weDoBtn3')
]

let previousShow = 1

window.showInfo = showInfo

function reset() {
    for (let i = 1; i <= 3; i++) {
        infoBlocks[i - 1].style.height = '0'
        infoBlocks[i - 1].style.borderTop = null
        infoBlocks[i - 1].style.padding = null
        buttons[i - 1].style.transform = null
    }
}

function showInfo(number) {
    if (previousShow === number && infoBlocks[number - 1].style.height === '160px') {
        reset()
    } else {
        previousShow = number
        reset()
        buttons[number - 1].style.transform = 'rotate(180deg)'
        infoBlocks[number - 1].style.height = '160px'
        infoBlocks[number - 1].style.padding = '10px'
        infoBlocks[number - 1].style.borderTop = '1px solid #cccccc'
    }
}

showInfo(1)