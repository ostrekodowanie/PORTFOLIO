const navDots = document.querySelectorAll('.dot')
const slider = document.querySelector('.slider')

const changeActive = () => {
    let counter;    
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            let activeDot = document.querySelector('.active')
            let imageWidth = document.querySelector('.project-images').offsetWidth
            activeDot.classList.remove('active')
            dot.classList.add('active')
            counter = index;
            slider.style.transform = `translateX(calc((${imageWidth}px + 3rem)*(-${counter})))`
        })
    })
}

changeActive()