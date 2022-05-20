const slider = document.querySelector('.slider')

const translateImage = (project, direction) => {

    let position = 0    // current position
    let timer;
    let imageWidth = document.querySelector('.project-images').clientWidth
    
    const slider = document.querySelector(`.slider.${project}`)
    const navDots = document.querySelectorAll(`.dot.${project}`)

    slider.style.transform = `translateX(0)`

    const removeActive = () => {
        let activeDot = document.querySelector(`.active.${project}`)
        activeDot.classList.remove('active')
        navDots[position].classList.add('active')
    }

    const changePosition = () => {
        removeActive()
        slider.style.transform = `translateX(calc((${imageWidth}px + 3rem)*${position}*${direction}))`
        console.log(position)
    }

    const stopTimer = () => {
        clearInterval(timer)
    }

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            position = index
            changePosition()
            stopTimer()
            setTimer() 
        })
    })

    // swiper

    var startX, 
        endX;

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        stopTimer()
        window.addEventListener('scroll', e => {
            e.preventDefault()
        })
    })
    slider.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
        stopTimer()
    })
    slider.addEventListener('touchend', (e) => {
        
        if (startX > endX) {
            position++;
            if (position === 3) position = 0
        }

        if (endX > startX) {
            position--;
            if(position === -1 ) position = 2
        }

        changePosition()
        setTimer()
    })

    // constant changing

    const automatic = () => {
        position++
        if(position === 3) position = 0
        changePosition()
    }

    const setTimer = () => {
        timer = setInterval(automatic, 3000)
    }

    setTimer()

    window.addEventListener('resize', () => {
        stopTimer()
        setTimer()
        removeActive()
        imageWidth = document.querySelector('.project-images').clientWidth
        position = 0
        slider.style.transform = `translateX(0)`
    })
}



window.addEventListener('load', () => {
    // business project slider
    translateImage('business', -1)

    //gift center project slider
    translateImage('gift-center', -1)
})