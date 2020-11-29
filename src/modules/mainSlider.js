
const mainSlider = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        slide = gallerySlider.querySelectorAll('.slide'),
        dots = gallerySlider.querySelector('.slider-dots');
    slide.forEach((item) => {
        item.style.display = 'none';
        const doti = document.createElement('li');
            doti.innerHTML = `<button></button>`
            dots.appendChild(doti);

    });
    const li = gallerySlider.querySelectorAll('li');
    const button = gallerySlider.querySelectorAll('button');
    let currentSlide = 0,
        interval = 0;
    
    const prevSlide = (elem, index, strDisplay) => {
            elem[index].style.display =strDisplay;
    }
    const nextSlide = (elem, index, strDisplay) => {
            elem[index].style.display = strDisplay;   
    }
    nextSlide(slide, currentSlide, 'flex');
    li[currentSlide].classList.add('slick-active');
    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'none');
        li[currentSlide].classList.remove('slick-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'flex');
        li[currentSlide].classList.add('slick-active');
    }

    gallerySlider.addEventListener('click', (e) => {
        let target = e.target;
        if(target.closest('arrow')){
            return;
        }
        prevSlide(slide, currentSlide, 'none');
        li[currentSlide].classList.remove('slick-active');
        if(target.closest('.slider-arrow')){
            currentSlide++;
        }else if(target.closest('.prev')){
            currentSlide--;
        } else if(target.matches('button')){
            button.forEach((item, i) => {
                if(item === target){
                    currentSlide = i;
                }
            })
        }
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'flex');
        li[currentSlide].classList.add('slick-active');
    });
    gallerySlider.addEventListener('mouseover', (e) => {
        let target = e.target;
        
        if(target.closest(".slider-arrow") || target.matches('li') ){
            stoptSlide();
        }
    });
    gallerySlider.addEventListener('mouseout', (e) => {
        let target = e.target;
        
        if(target.closest(".slider-arrow")|| target.matches('li') ){
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