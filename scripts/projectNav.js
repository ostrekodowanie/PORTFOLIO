const navDots = document.querySelectorAll('.dot')
const slider = document.querySelector('.slider')

const translateImage = () => {

    const imageWidth = document.querySelector('.project-images').clientWidth

    // translating based on the active dot

    const removeActive = () => {
        let activeDot = document.querySelector('.active')
        activeDot.classList.remove('active')
    }

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            removeActive()
            dot.classList.add('active')
            slider.style.transform = `translateX(calc((${imageWidth}px + 3rem)*(-${index})))`
        })
    })

    let changePosition = () => {
        removeActive()
        navDots[position].classList.add('active')
        slider.style.transform = `translateX(calc((${imageWidth}px + 3rem)*(-${position})))`
    }

    let position = 0;

    var startX, 
        endX;

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    })
    slider.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
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
    })

    const automatic = () => {
        position++
        if(position === 3) position = 0
        changePosition()
    }

    setInterval(automatic, 3000)
}

export default translateImage;