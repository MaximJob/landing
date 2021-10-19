const statisticsCurrent = [0, 0, 0, 0, 0]
const statistics = [42, 123, 15, 99, 24]
const statisticsDom = [
    document.querySelector('#statistics__1'),
    document.querySelector('#statistics__2'),
    document.querySelector('#statistics__3'),
    document.querySelector('#statistics__4'),
    document.querySelector('#statistics__5')
]
let firstShowing = true
let height = document.querySelector('header').clientHeight + document.querySelector('#story').clientHeight

function animateStatistics(i) {
    setTimeout(() => {
        statisticsDom[i].innerHTML = '' + statisticsCurrent[i]
        statisticsCurrent[i]++
        if (statistics[i] >= statisticsCurrent[i]) animateStatistics(i)
    }, 10)
}

document.addEventListener('scroll', () => {
    if (
        firstShowing
        && (
            (
                (height - window.innerWidth + 160) < window.pageYOffset &&
                window.pageYOffset < height + document.querySelector('#statistics').clientHeight
            )
        )
    ) {
        firstShowing = false
        for (let i = 0; i < 5; i++) animateStatistics(i)
    }
})
