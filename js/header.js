let header = document.querySelector('header')
let lineBg = document.querySelector('#header__line1__bg').style

function modifyLine() {
    lineBg.width = (window.pageYOffset / header.clientHeight * 100).toFixed() + '%'
}

modifyLine()
addEventListener('scroll', modifyLine)