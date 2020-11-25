
const toggleTitleSlider = () => {
    const slide = document.querySelectorAll('.main-slider>.slide');
    let currentSlide = 0,
        interval = 0;

    const autoPlaySlide = () => {
        slide[currentSlide].style.display = 'none';
        currentSlide++;
        if(currentSlide === slide.length){
            currentSlide = 0
        }
        slide[currentSlide].style.display = 'flex';
    }
    const startSlide = () => {
        setInterval(autoPlaySlide, 3000)
    }
    startSlide();   
};
export default toggleTitleSlider;