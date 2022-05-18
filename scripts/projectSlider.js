const navDots = document.querySelectorAll('.dot')
const slider = document.querySelector('.slider')

const translateImage = (imageWidth) => {

    let position = 0    // current position
    let timer;

    // translating based on the active dot

    const removeActive = () => {
        let activeDot = document.querySelector('.active')
        activeDot.classList.remove('active')
    }

    const changePosition = () => {
        removeActive()
        navDots[position].classList.add('active')
        slider.style.transform = `translateX(calc((${imageWidth}px + 3rem)*(-${position})))`
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
    })
    slider.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
        stopTimer()
    })
    slider.addEventListener('touchend', () => {
        
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
}



window.addEventListener('load', () => {
    let projectWidth = document.querySelector('.project-images').clientWidth
    translateImage(projectWidth)
})