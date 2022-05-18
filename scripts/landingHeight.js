const landingPage = document.querySelector('.landing-wrapper')
const loadingScreen = document.querySelector('.loading-screen')

const pageHeight = () => {
    let windowHeight = window.document.documentElement.clientHeight
    let headerHeight = document.querySelector('.header').clientHeight
    landingPage.style.minHeight = `calc(${windowHeight}px - ${headerHeight}px)`
}

const loadingHeight = () => {
    let windowHeight = window.document.documentElement.clientHeight
    loadingScreen.style.minHeight = `${windowHeight}px`
}

const setHeight = () => {
    window.addEventListener('resize', () => {
        pageHeight()
        loadingHeight()
    })
    pageHeight()
    loadingHeight()
}

export default setHeight;