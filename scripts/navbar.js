const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')

const navMove = () => {
    burger.addEventListener('click', () => {
        navbar.classList.toggle('nav-active')
        burger.classList.toggle('burger-active')
    })
}

export default navMove;