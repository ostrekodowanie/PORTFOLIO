const loadingScreen = document.querySelector('.loading-screen')

export default function hideLoadingScreen() {
    setTimeout(() => {
        loadingScreen.classList.add('loading-inactive')
    }, 1000)
}