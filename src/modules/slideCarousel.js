const slideCarousel = () => {
    const servicesSlider = document.querySelector('.services-slider'),
        slide = servicesSlider.querySelectorAll('.slide'),
        btnPrev = servicesSlider.querySelector('.prev'),
        btnNext = servicesSlider.querySelector('.next');
        
    let offset = 1115;

    slide[0].style.transition = '0.5s all';
    servicesSlider.style.overflow = 'hidden';
    slide.forEach(item =>{
        item.style.minWidth = '210px';
    });
    slide[0].style.marginLeft = `-${offset}px`;
    btnNext.addEventListener('click', () => {
        offset += 222;
        if(offset > 1110){
            offset = 0;
        }
        slide[0].style.marginLeft = `-${offset}px`;
    });
    btnPrev.addEventListener('click', () => {
        offset -= 222;
        if(offset <= 0){
            offset = 1110;
        }
        slide[0].style.marginLeft = `-${offset}px`;
    });
}
export default slideCarousel;