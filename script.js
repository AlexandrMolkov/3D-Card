"use strict"
const card = document.querySelectorAll('.card')

card.forEach((c) => {
    const cardWrapper = c.querySelector('.card__wrapper')
    const vAngle = document.querySelector('.control__value-angle')
    const vTrans = document.querySelector('.control__value-transition')
    
    
    let deg = parseInt(c.dataset.deg)
    let tr = parseFloat(c.dataset.transition)
    
    vAngle.innerText = deg
    vTrans.innerText = tr

    c.addEventListener('mousemove', (e) => {
        let h = c.clientHeight / (deg * 2)
        let w = c.clientWidth / (deg * 2)
        h = -h; w = -w
    
        let x = ((e.clientY - c.getBoundingClientRect().y) / h) + deg
        let y = ((e.clientX - c.getBoundingClientRect().x) / w) + deg
        y *= -1
        cardWrapper.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
        cardWrapper.style.transition = `${tr}s linear`
    })

    c.addEventListener('mouseleave', () => cardWrapper.style.transform = `rotateX(0deg) rotateY(0deg)`)




    //  range

    const inpAngle = document.querySelector('#range-angle')
    const inpTrans = document.querySelector('#range-trans')

    inpAngle.value = parseInt(card[0].dataset.deg)
    inpTrans.value = parseFloat(card[0].dataset.transition)

    inpAngle.addEventListener('input', (e) => {
        deg = parseInt(e.target.value)
        vAngle.innerText = deg
    })
    inpTrans.addEventListener('input', (e) => {
        tr = parseFloat(e.target.value)
        vTrans.innerText = tr
    })
})




