const loadingScreen = document.querySelector('.loading-screen')

export default function hideLoadingScreen() {
    let doc = document.querySelector('html')
    doc.classList.add('overflow-disabled')
    setTimeout(() => {
        doc.classList.remove('overflow-disabled')
        loadingScreen.classList.add('loading-inactive')
    }, 1000)
}