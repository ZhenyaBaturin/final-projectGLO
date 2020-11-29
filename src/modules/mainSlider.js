
const mainSlider = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        slide = gallerySlider.querySelectorAll('.slide'),
        btnPrev = document.querySelector('.prev'),
        btnNext = document.querySelector('.next');
    slide.forEach((item) => {
        item.style.display = 'none'
    })
    let currentSlide = 0,
        interval = 0;

    const prevSlide = (elem, index, strDisplay) => {
        elem[index].style.display =strDisplay;
    }
    const nextSlide = (elem, index, strDisplay) => {
        elem[index].style.display = strDisplay;
    }
    nextSlide(slide, currentSlide, 'flex');

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'none');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'flex');
    }

    gallerySlider.addEventListener('click', (e) => {
        let target = e.target;
        if(target.closest('arrow')){
            return;
        }
        prevSlide(slide, currentSlide, 'none');
        if(target.closest('.slider-arrow')){
            currentSlide++;
        }else if(target.closest('.prev')){
            currentSlide--;
        } 
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'flex');
    });
    gallerySlider.addEventListener('mouseover', (e) => {
        let target = e.target;
        
        if(target.closest(".slider-arrow") ){
            stoptSlide();
        }
    });
    gallerySlider.addEventListener('mouseout', (e) => {
        let target = e.target;
        
        if(target.closest(".slider-arrow") ){
            startSlide();
        }
    })

    const startSlide = () => {
        interval = setInterval(autoPlaySlide, 3000)
    }
    const stoptSlide = () => {
        clearInterval(interval)
    }

    startSlide();
}
export default mainSlider;