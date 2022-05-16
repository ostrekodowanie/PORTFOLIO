const navDots = document.querySelectorAll('.dot')
const slider = document.querySelector('.slider')

const translateImage = () => {
    let removeActive = () => {
        let activeDot = document.querySelector('.active')
        activeDot.classList.remove('active')
    }
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            removeActive()
            let imageWidth = document.querySelector('.project-images').offsetWidth
            dot.classList.add('active')
            slider.style.transform = `translateX(calc((${imageWidth}px + 3rem)*(-${index})))`
            console.log(index)
        })
    })

    let counter = 0;

    let automatic = () => {
        setTimeout(() => {
            removeActive()
            counter++;
            let imageWidth = document.querySelector('.project-images').offsetWidth
            slider.style.transform = `translateX(calc((${imageWidth}px + 3rem)*(-${counter})))`
            navDots[counter].classList.add('active')
            if (counter === 2) counter = -1
            automatic()
        }, 3000)
    }
    automatic()
}

export default translateImage;