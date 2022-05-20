const loadingScreen = document.querySelector('.loading-screen')

export default function hideLoadingScreen() {
    let doc = document.querySelector('html')
    let docBody = document.querySelector('body')
    docBody.style.removeProperty('visibility')
    setTimeout(() => {
        doc.classList.remove('overflow-disabled')
        loadingScreen.classList.add('loading-inactive')
    }, 1000)
}