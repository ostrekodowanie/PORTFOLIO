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

    // automatic translating in every 3 seconds

    // let counter = 0;

    // let automatic = () => {
    //     window.setTimeout(() => {
    //         removeActive()
    //         counter++;
    //         slider.style.transform = `translateX(calc((${imageWidth}px + 3rem)*(-${counter})))`
    //         navDots[counter].classList.add('active')
    //         if (counter === 2) counter = -1
    //         automatic()
    //     }, 3000)
    // }
    // automatic()

    let changePosition = () => {
        removeActive()
        navDots[position].classList.add('active')
        slider.style.transform = `translateX(calc((${imageWidth}px + 3rem)*(-${position})))`
    }

    let position = 0;

    var check_if_swiped = false;

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
            check_if_swiped = true
        }

        if (endX > startX) {
            position--;
            if(position === -1 ) position = 2
            check_if_swiped = true
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