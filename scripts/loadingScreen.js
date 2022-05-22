const loadingScreen = document.querySelector('.loading-screen')

export default function hideLoadingScreen() {
    let docBody = document.querySelector('body')
    docBody.style.removeProperty('visibility')

    setTimeout(() => {
        loadingScreen.classList.add('loading-inactive')
    }, 600)
}