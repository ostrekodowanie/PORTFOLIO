const loadingScreen = document.querySelector('.loading-screen')

export default function hideLoadingScreen() {
    let doc = document.querySelector('html')
    let docBody = document.querySelector('body')
    doc.classList.remove('overflow-disabled')
    docBody.classList.remove('hidden')
    setTimeout(() => {
        loadingScreen.classList.add('loading-inactive')
    }, 1000)
}