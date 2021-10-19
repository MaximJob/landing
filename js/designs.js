const designsDesktop = document.querySelector('#designsDesktop').style
const designsMobile = document.querySelector('#designsMobile').style
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    designsDesktop.display = 'none'
} else {
    designsMobile.display = 'none'
}