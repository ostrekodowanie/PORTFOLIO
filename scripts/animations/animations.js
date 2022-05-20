const titleLines = gsap.utils.toArray('.main-titles h1 span')
const subtitle = document.querySelector('.main-titles h2')

let titleDelay = 1.4;

function titleAnimation() {
    titleLines.forEach((title, index) => {
        if (index === 2) {
            gsap.from(title, {
                x: '-10%',
                duration: 0.6,
                ease: Power1.easeOut,
                opacity: 0,
                delay: titleDelay + 0.05
            })
            return
        }
        gsap.from(title, {
            x: '-20%',
            duration: 0.6,
            ease: Power1.easeOut,
            opacity: 0,
            delay: titleDelay
        })
        titleDelay = titleDelay + 0.4
    })
}
    
titleAnimation()

const timeline = gsap.timeline({ defaults: {
    duration: 1,
    ease: Power1.easeInOut
}})

timeline
    .from(subtitle, {
        duration: 1,
        delay: 2.5,
        opacity: 0
    })

gsap.from('.portfolio-paragraph p', {
    duration: 1,
    y: '-10px',
    opacity: 0,
    ease: Power1.easeInOut,
    scrollTrigger: {
        trigger: '.portfolio-paragraph p',
        start: 'top 80%'
    }
})

gsap.to(':root', {
    '--custom-width': '100%',
    duration: .8,
    ease: Power1.easeOut,
    scrollTrigger: {
        trigger: '.description p',
        start: 'top 80%'
    } 
})