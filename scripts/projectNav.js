const navDots = document.querySelectorAll('.dot')
const slider = document.querySelector('.slider')

const translateImage = () => {

    // translating based on the active dot

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
        })
    })

    // automatic translating in every 3 seconds

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

    // swiping event

    

    const setSwipe = () => {
        let startX = 0;
        let endX = 0;

        slider.addEventListener('touchstart', (e) => {
            let touch = e.changedTouches
            startX = touch[0].screenX
        })

        slider.addEventListener('touchend', (e) => {
            let touches = [...e.changedTouches]
            touches.forEach((touch) => {
                endX = touch.screenX
                if (startX > endX) {
                    removeActive()
                    counter++;
                    navDots[counter].classList.add('active')
                    let imageWidth = document.querySelector('.project-images').offsetWidth
                    slider.style.transform = `translateX(calc((${imageWidth}px + 3rem)*(-1)))`
                }
            })
            setSwipe()
        })
    }
    setSwipe()
}

export default translateImage;