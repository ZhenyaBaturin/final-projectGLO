'use strict';

const menyClub = () => {
    const clubsList = document.querySelector('.clubs-list'),
        clubList = clubsList.querySelector('ul'),
        body = document.querySelector('body');
        const getMeny = () => {
            clubList.style.display ='block';
        }
        const removeMeny = () => {
            clubList.style.display ='';
        }
        body.addEventListener('click', (e) => {
        let target = e.target;
        if(clubList.style.display ==='' && target.matches('p')){
            getMeny()
        } else if (clubList.style.display ==='block' && !target.matches('ul') && !target.matches('li')){
            removeMeny()
        }  

    })
}
menyClub()
const removePopup = () => {
    const popup = document.querySelectorAll('.popup');
    popup.forEach((item) => {
        item.addEventListener('click', (e) => {
            const target = e.target;
                if(target.matches('.overlay') || target.matches('.close_icon') || target.matches('.close-btn')){
                    item.style.display = '';
                }
        })
    })
} 

 const freeSession = () => {
     const openPopup = document.querySelector('.open-popup'),
        freeVisitForm = document.getElementById('free_visit_form');
    
    openPopup.addEventListener('click', () => {
        freeVisitForm.style.display = 'block';
    })
    removePopup()
 }
 freeSession()

const calbackPhone = () => {
    const callbackBtn = document.querySelector('.callback-btn'),
        callbackForm = document.getElementById('callback_form');   
    callbackBtn.addEventListener('click', () => {
        callbackForm.style.display = 'block';
    })
    removePopup()
}
calbackPhone()

const sendForm = () => {
    const errorMessege = 'Что то пошло не так',
        loadMessege  = 'Загрузка...',
        successMessege = "Спасибо! Мы с вами скоро свяжимся",
        requestSend = 'Ваша заявка отправлена.',
        answerThanks = 'Спасибо',
        answerPhone = 'Некорректно данные',
        answerCheck = 'Дайте согласие на обработку ваших данных',
        chooseClub = 'Выберите клуб',
        chooseCart = 'Выберите карту';
    const form = document.querySelectorAll('form'),
        thanksModal = document.getElementById('thanks'),
        formName = document.querySelectorAll('[name="name"]'),
        formPhone =document.querySelectorAll('[name="phone"]'),
        promoСode = document.querySelector('.price-message>[name="name"]');
        // регуляки
    formName.forEach((item) => {
        if (item === promoСode){
            item.addEventListener('input', () => {
                promoСode.value = promoСode.value.replace(/\s/gi, '');
                promoСode.removeAttribute('required');
            })
        } else{
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^а-я\s]/gi, '');
            })
        }  
    });
    formPhone.forEach((item) => {
        item.addEventListener('input', () => {
            item.setAttribute('maxlength', '11');
            item.value = item.value.replace(/[^0-9+]/g, '');         
        })
    });
    // отправка 
    form.forEach((elem, i) => {
            elem.addEventListener('submit', (e) => {
                e.preventDefault();
                const checbox = elem.querySelector('[type="checkbox"]');
                const phone =elem.querySelector('[type="tel"]'),
                inputs = elem.querySelectorAll('input'),
                cardType = elem.querySelectorAll('[name="card-type"]'),
                clubName = elem.querySelectorAll('[name="club-name"]'),
                label = elem.querySelector('p>label');

                if(phone.value.length < 6 || !phone.value.match(/^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$/ig)){
                    phone.style.border = 'solid 1px red';
                    return;
                };
                phone.style.border = '';
                
                if (elem.id === 'card_order' || elem.id === 'footer_form') {
                    const type = [...cardType],
                      club = [...clubName];
                    const item = element => element.checked === true;
                    if (club.length && club.some(item) === false) {
                        getThanksModal(chooseClub, answerPhone);
                        return;
                    }
                    if (type.length && type.some(item) === false) {
                        getThanksModal(chooseCart, answerPhone);
                        return;
                    }  
                  }
                //тут можно указать что идет загрузка
                getThanksModal(loadMessege, answerThanks);

                // проверка на указан чек или нет
                if(!checbox || checbox.checked === true){
                    const formData = new FormData(elem);
                    let body = {};
                    formData.forEach((val, key) => body[key] = val);
                    console.log(body);
                    // fetch
                    postData(body)
                        .then((response) => {
                        if(response.status !== 200){
                            throw new Error('error')
                        }
                        getThanksModal(successMessege, answerThanks, requestSend);
                        label.classList.remove('red');
                        clearForm();
                        timeOut();
                        })
                        .catch((error) => {
                            getThanksModal(answerThanks, errorMessege);
                            timeOut();
                            
                            console.log(error);
                        })
                        .finally(() => {
                            inputs.forEach(input => {
                                if (input.type === 'checkbox' || input.name === 'radio') {
                                  input.checked = false;
                                }
                                if (input.type === 'tel' || input.name === 'name' || input.name === 'promocode') {
                                  input.value = '';
                                }
                                if(input.id === 'card_leto_mozaika' || input.id === 'm1' || input.id === 't1'){
                                    input.checked = true;
                                }
                              });
                        })
                }else{
                    getThanksModal(answerCheck, answerPhone);
                    label.classList.add('red');
                }
            });
        
        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
        }
        const getThanksModal = (statis, answer, application = '') => {
            thanksModal.style.display = 'block';
            const formContent = thanksModal.querySelector('.form-content');
            formContent.innerHTML = `
                <h4>${answer}!</h4>
                <p>${application}
                <br> ${statis}</p>
                <button class="btn close-btn">OK</button>
            `;
            thanksModal.querySelector('.form-wrapper').append(formContent);
            removePopup()
        };
        const clearForm = () => {
            const popup = document.querySelectorAll('.popup');
            popup.forEach((item) => {
                if(item.id === 'callback_form' || item.id === 'free_visit_form'){
                    item.style.display ='';
                }
            })
        };

        let timeOut = () => {
            setTimeout(() => {
                const popup = document.querySelectorAll('.popup');
                     popup.forEach((item) => {
                     item.style.display ='';
                     })
            }, 2000);
        };
    }) 
}
sendForm()

const getSurprise =() => {
    const fixedGift = document.querySelector('.fixed-gift'),
        giftModal = document.getElementById('gift');
        if(fixedGift){
            fixedGift.addEventListener('click', () => {
                giftModal.style.display = 'block';
                fixedGift.style.display  = 'none';
                removePopup();
            })
        } else {
            return;
        }
    
   
}
getSurprise();

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
}
toggleTitleSlider();

const getGumbMeny = () => {
    const hiddenLarge = document.querySelector('.hidden-large'),
        popupMenu = document.querySelector('.popup-menu'),
        topMenu = document.querySelector('.top-menu');
    //  фиксация к верху экрана при скроле
    const stickCss = () => {
        topMenu.style.top = '0';
        topMenu.style.left = '0';
        topMenu.style.width = '100%';
        topMenu.style.position = 'fixed'
    };
    const nostickCss = () => {
        topMenu.style.top = '';
        topMenu.style.left = '';
        topMenu.style.width = '';
        topMenu.style.position = '';
    }
    const toggleMenu = () => {
        document.addEventListener('scroll', () => {
            if(topMenu.clientHeight < window.scrollY / 3){
                stickCss();
            } else if(topMenu.clientHeight >= window.scrollY / 3){
                nostickCss();
            }
        })
    }
    window.addEventListener('scroll', () => {
        if(window.innerWidth < 768){
            toggleMenu();
        }else if(window.innerWidth >= 768){
            nostickCss();
            return;
        }
    })
    // открытие меню
    hiddenLarge.querySelector('img').addEventListener('click', () => {
        popupMenu.style.display = 'flex'
    })
    // закрытие меню
    popupMenu.addEventListener('click', (e) => {
        let target = e.target;
        if(target.matches('img') || target.matches('li') || target.matches('a')){
            popupMenu.style.display = ''
        }
    })
}
getGumbMeny();

const arrowScroll = () => {
    const totop = document.getElementById('totop');
    totop.style.display = 'none';
    window.addEventListener('scroll', () => {
        if(window.scrollY >= document.documentElement.clientHeight){
            totop.style.display = 'block';
        } else if(window.scrollY < document.documentElement.clientHeight) {
            totop.style.display = 'none';
        }
    });
    totop.addEventListener('click', (e) => {
        e.preventDefault();
        const idBlock = totop.getAttribute('href');
        document.querySelector(idBlock).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
} 
arrowScroll();

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
            <i class='fa fa-angel-left'></i>
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
            <i class='fa fa-angel-left'></i>
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
            <i class='fa fa-angel-right'></i>
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
            <i class='fa fa-angel-right'></i>
        </span>
    `;

servicesSlider.append(next);
}
serviseNext();

}
getArrow()

const mainSlider = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        slide = gallerySlider.querySelectorAll('.slide');
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
mainSlider()
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
slideCarousel()
const calc = () => {
    const formCalc = document.querySelector('.right>#card_order');
    if(formCalc){
        const cardType = formCalc.querySelectorAll('[name="card-type"]'),
        mozaika = formCalc.querySelector('#card_leto_mozaika'),
        schelkovo = formCalc.querySelector('#card_leto_schelkovo'),
        promoCode = formCalc.querySelector('[name="name"]'),
        priceTotal = formCalc.querySelector('#price-total');
    let count = 0;
        if(priceTotal){
            priceTotal.innerHTML = `1999`
        }
        formCalc.addEventListener('input', () => {
            if (mozaika.checked) {
                count = (cardType[0].checked === true) ? 1999 :
                (cardType[1].checked === true) ? 9900 :
                (cardType[2].checked === true) ? 13900 :
                (cardType[3].checked === true) ? 19900 : 0;
              }
              if (schelkovo.checked) {
                count = (cardType[0].checked === true) ? 2999 :
                (cardType[1].checked === true) ? 14900 :
                (cardType[2].checked === true) ? 21990 :
                (cardType[3].checked === true) ? 24990 : 0;
              }
              if(promoCode.value === 'ТЕЛО2019'){
                count = Math.ceil(count * 0.7);
              }
              priceTotal.innerHTML = `${count}`;
        })
    }
    
}
calc()


