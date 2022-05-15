const landingPage = document.querySelector('.landing-wrapper')

const height = () => {
    let windowHeight = window.innerHeight
    let headerHeight = document.querySelector('.header').clientHeight
    landingPage.style.minHeight = `calc(${windowHeight}px - ${headerHeight}px)`
}

const setHeight = () => {
    window.addEventListener('resize', () => {
        height()
    })
    height()
}

export default setHeight;