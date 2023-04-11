const nextBtn = document.querySelector('#right')
const prevBtn = document.querySelector('#left')

const slider = document.querySelector('.slider__main')
const sliderItems = Array.from(slider.children)

sliderItems.forEach(function(slide, index){

    if (index !== 0){
        slide.classList.add('hidden')
    }

    slide.dataset.index = index
    sliderItems[0].setAttribute('data-active', '')

})



nextBtn.onclick = function(){
    showNextSlide('next')
}


prevBtn.onclick = function(){
    showNextSlide('prev')
}


function showNextSlide(direction){
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index
    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')

    let nextSlideIndex
    if(direction === 'next'){
        if(currentSlideIndex + 1 === sliderItems.length){
            nextSlideIndex = 0
        }
        else{
            nextSlideIndex = currentSlideIndex + 1
        }
    }
    else if(direction === 'prev'){
        if(currentSlideIndex === 0){
            nextSlideIndex = sliderItems.length - 1
        }
        else{
            nextSlideIndex = currentSlideIndex - 1
        }
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')
}



const item = document.querySelector('#dishes__rating-item-5')

item.addEventListener('click', function(){
    console.log(item) 
    document.querySelector('#rating-value').innerHTML = item.value
})
