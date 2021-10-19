const mapDom = document.querySelector("#map")
const map = document.querySelector("#yandex")
const mapClose = document.querySelector("#mapClose")
mapDom.addEventListener('click', (e) => {
    if (e.target.id !== 'mapClose') {
        mapClose.style.display = 'block'
        map.style.display = 'block'
    }
})
mapClose.addEventListener('click', () => {
    mapClose.style.display = 'none'
    map.style.display = 'none'
})