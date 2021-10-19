const phone = document.querySelector('#phone')
const tablet = document.querySelector('#tablet')

function animateDesign() {
    phone.style.transform = 'translateX(1000px)'
    tablet.style.transform = 'translateX(-1000px)'
    setTimeout(() => {
        phone.style.transform = null
        tablet.style.transform = null
    }, 1000)
}

animateDesign()
