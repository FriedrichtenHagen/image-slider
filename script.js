const slide1 = document.querySelector("#slide1")
const slide2 = document.querySelector("#slide2")
const slide3 = document.querySelector("#slide3")
const slide4 = document.querySelector("#slide4")

const slides = document.querySelectorAll(".slide")

// https://alvarotrigo.com/blog/javascript-slider-how-to-make-one/

let slideIndex = 0;
slides[slideIndex].classList.add("active")

function pushSlides(num){
    slides[slideIndex].classList.remove("active")
    // moving right
    if(num){
        if(slideIndex===slides.length){
            slideIndex=0
        }
        slideIndex++
        slides[slideIndex].classList.add("active")
    } 
    else{ // moving left
        if(slideIndex===0){
            slideIndex=slideIndex.length
        }
        slideIndex--
        slides[slideIndex].classList.add("active")

    }
}

const moveLeft = document.querySelector(".moveLeft")
const moveRight = document.querySelector(".moveRight")

moveLeft.addEventListener("click", () => {
    pushSlides(-1)
})
moveRight.addEventListener("click", () => {
    pushSlides(1)
})