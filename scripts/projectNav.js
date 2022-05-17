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

    let multiplier = 0;

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
            multiplier++;
            if (multiplier === 3) multiplier = 0
        }

        if (endX > startX) {
            multiplier--;
            if(multiplier === -1 ) multiplier = 2
        }

        removeActive()
        navDots[multiplier].classList.add('active')
        slider.style.transform = `translateX(calc((${imageWidth}px + 3rem)*(-${multiplier})))`
    })

    
}

export default translateImage;