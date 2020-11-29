const getArrow = () => {
    // создать стрелочки
    const gallerySlider = document.querySelector('.gallery-slider'),
        services = document.querySelector('#services'),
        servicesSlider = services.querySelector('.services-slider');
    
    const galleryPrev = () => {
        const prev = document.createElement("div");
        gallerySlider.style.position = 'relative';
        prev.classList.add('prev');
        prev.classList.add('slider-arrow');
        prev.innerHTML = `
            <span>
                <i class='fa fa-angel-left'>
                    <
                </i>
            </span>
    `;
        gallerySlider.append(prev);
    }
    galleryPrev();
    const servisePrev = () => {
        const prev = document.createElement("div");
        servicesSlider.style.position = 'relative';
        prev.classList.add('prev');
        prev.classList.add('slider-arrow');
        prev.innerHTML = `
            <span>
                <i class='fa fa-angel-left'>
                    < 
                </i>
            </span>
    `;
        servicesSlider.append(prev);
    }
    servisePrev();
    
    const galleryNext = () => {
        const next = document.createElement("div");
        next.classList.add('next');
        next.classList.add('slider-arrow');
        next.innerHTML = `
            <span>
                <i class='fa fa-angel-right'>
                   > 
                </i>
            </span>
    `;
        gallerySlider.append(next);
    }
    galleryNext();
    const serviseNext = () => {
        const next = document.createElement("div");
        next.classList.add('next');
        next.classList.add('slider-arrow');
        next.innerHTML = `
            <span>
                <i class='fa fa-angel-right'>
                    >
                </i>
            </span>
        `;
    
    servicesSlider.append(next);
    }
    serviseNext();
    
    }
    export default getArrow;