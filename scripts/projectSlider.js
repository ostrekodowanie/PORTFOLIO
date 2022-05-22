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

    const setTimer = () => {
        timer = setInterval(() => {
            if(!isPaused) automatic()
        }, 3000)
    }

    const changePosition = () => {
        removeActive()
        slider.style.transform = `translateX(calc((${imageWidth}px + 3rem)*${position}*${direction}))`
        let deletePause = () => {
            isPaused = false
            clearTimeout(deletePause)
        }
        setTimeout(deletePause, 6000)
    }

    var isPaused = false;

    setTimer()

    // changing through dots

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            isPaused = true
            position = index
            changePosition()
        })
    })

    // changing through arrows

    const arrows = document.querySelectorAll(`.project.${project} .arrow`)

    arrows.forEach((arrow, index) => {
        arrow.addEventListener('click', () => {
            isPaused = true
            if (index === 1) {
                position--
            }
            if (index === 0 ) {
                position++
            }

            if (position === -1) position = 2
            if(position === 3) position = 0
            changePosition()
        })
    })

    // swiper

    var startX, 
        endX;

    slider.addEventListener('touchstart', e => {
        isPaused = true
        startX = e.touches[0].clientX;
    })
    slider.addEventListener('touchmove', e => {
        isPaused = true
        endX = e.touches[0].clientX;
    })
    slider.addEventListener('touchend', () => {
        isPaused = true
        if (startX > endX) {
            position++;
        }

        if (endX > startX) {
            position--;
        }
        if (position === -1) position = 2
        if (position === 3) position = 0
        changePosition()
    })

    // constant changing

    const automatic = () => {
        position++
        if(position === 3) position = 0
        imageWidth = document.querySelector('.project-images').clientWidth
        changePosition()
    }

    let callback = () => {
        imageWidth = document.querySelector('.project-images').clientWidth
        changePosition()
        window.removeEventListener('resize', callback)
    }

    window.addEventListener('resize', callback)
}



window.addEventListener('load', () => {
    // business project slider
    translateImage('business', -1)

    //gift center project slider
    translateImage('gift-center', -1)
})