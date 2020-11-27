const getArrow = () => {
    // создать стрелочки
    const gallerySlider = document.querySelector('.gallery-slider'),
        servicesSlider = document.querySelector('.services-slider')
    const prev = document.createElement("div");
    gallerySlider.style.position = 'relative';
    servicesSlider.style.position = 'relative';
    prev.classList.add('prev');
    prev.classList.add('slider-arrow');
    prev.innerHTML = `
            <span>
                <i class='fa fa-angel-left'></i>
            </span>
    `;
    gallerySlider.append(prev);
    // servicesSlider.append(prev);
    const next = document.createElement("div");
    next.classList.add('next');
    next.classList.add('slider-arrow');
    next.innerHTML = `
            <span>
                <i class='fa fa-angel-right'></i>
            </span>
    `;
    gallerySlider.append(next);
    // servicesSlider.append(next);
    };
    export default getArrow;