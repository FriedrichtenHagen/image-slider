const slides = document.querySelectorAll(".slide")
let slideIndex = 0;
slides[slideIndex].classList.add("active")
createCircles()
updateActiveCircle()

function pushSlides(num){
    slides[slideIndex].classList.remove("active")
    // moving right
    if(num>0){
        if(slideIndex===slides.length-1){
            slideIndex=0
        } 
        else{
            slideIndex++
        }
        slides[slideIndex].classList.add("active")
    } 
    else{ // moving left
        if(slideIndex===0){
            slideIndex=slides.length -1
        }
        else{
            slideIndex--
        }
        slides[slideIndex].classList.add("active")

    }
}

// event listeners for arrows
const moveLeft = document.querySelector(".moveLeft")
moveLeft.addEventListener("click", () => {
    removeActiveCircle()
    pushSlides(-1)
    updateActiveCircle()
})
const moveRight = document.querySelector(".moveRight")
moveRight.addEventListener("click", () => {
    removeActiveCircle()
    pushSlides(1)
    updateActiveCircle()
})


function createCircles(){
    const progressCircles = document.querySelector(".progressCircles")
    let numberOfImages = slides.length
    for(let i=0; i<numberOfImages; i++){
        const newCircle = document.createElement("div")
        newCircle.classList.add("circle")
        newCircle.setAttribute("aria-id", `${i}`)
        progressCircles.append(newCircle)
    }
}


function updateActiveCircle(){
    const circles = document.querySelectorAll(".circle")
    // add active status to new circle
    circles[slideIndex].classList.add("activeCircle")
}
function removeActiveCircle(){
    const circles = document.querySelectorAll(".circle")
    // remove active status from previous cirlce
    circles[slideIndex].classList.remove("activeCircle")
}

const circles = document.querySelectorAll(".circle")
circles.forEach((element, index) => element.addEventListener("click", function(){
    updateSlide(element, index)
}))

function updateSlide(element, index){
    // deactive current slide and circle
    slides[slideIndex].classList.remove("active")
    removeActiveCircle()

    // active chosen slide and circle
    slides[index].classList.add("active")
    slideIndex = index
    updateActiveCircle()
}

// make slider continuosly slide to the right
setTimeout(moveToTheRight, 2000)
function moveToTheRight(){
    removeActiveCircle()
    pushSlides(1)
    updateActiveCircle()
    setTimeout(moveToTheRight, 2000)
}