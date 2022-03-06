const entry = document.querySelector('.entryScreen')

let entrySlide = entry

entrySlide.addEventListener('click',() =>{

    entrySlide.classList.add('inactive')
    for (const slide of slides){
        setInterval(() => {slide.classList.remove('inactive')}, 1000)
        clearInterval()
    }
})



const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')

    })
}

function clearActiveClasses(){
    slides.forEach((slide) =>{
        slide.classList.remove('active')
    })
}