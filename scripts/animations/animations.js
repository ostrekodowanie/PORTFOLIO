const titleLines = gsap.utils.toArray('.main-titles h1 span')
const subtitle = document.querySelector('.main-titles h2')

const timeline = gsap.timeline({ defaults: {
    duration: 1,
    ease: Power1.easeInOut
}})

let titleDelay = 0.4;

function titleAnimation() {
    titleLines.forEach((title, index) => {
        if (index === 2) {
            gsap.from(title, {
                x: '-10%',
                duration: 0.4,
                ease: Power1.easeOut,
                opacity: 0,
                delay: titleDelay + 0.05
            })
            return
        }
        gsap.from(title, {
            x: '-20%',
            duration: 0.4,
            ease: Power1.easeOut,
            opacity: 0,
            delay: titleDelay
        })
        titleDelay = titleDelay + 0.2
    })
}
    
titleAnimation()

timeline
    .from(subtitle, {
        duration: 1,
        opacity: 0
    })