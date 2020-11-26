'use strict';

const menyClub = () => {
    const clubsList = document.querySelector('.clubs-list'),
        clubList = clubsList.querySelector('ul');
        const getMeny = () => {
            clubList.style.display ='block';
        }
        const removeMeny = () => {
            clubList.style.display ='';
        }
    clubsList.addEventListener('click', (e) => {
        let target = e.target;
        if(clubList.style.display ==='' && target.matches('p')){
            getMeny()
        } else if (clubList.style.display ==='block' && target.matches('p')){
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
        successMessege = "Спасибо! Мы с вами скоро свяжимся";
    const form = document.querySelectorAll('form'),
        thanksModal = document.getElementById('thanks'),
        formName = document.querySelectorAll('[name="name"]'),
        formPhone =document.querySelectorAll('[name="phone"]');
        // регуляки
    formName.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-я\s]/gi, '');
        })
    });
    formPhone.forEach((item) => {
        item.addEventListener('input', () => {
            item.setAttribute('maxlength', '11');
            item.value = item.value.replace(/[^0-9+]/g, '');  
                   
        })
    })
    // отправка 
    form.forEach((elem, i) => {
            elem.addEventListener('submit', (e) => {
                e.preventDefault();
                //тут можно указать что идет загрузка
                const checbox = elem.querySelector('[type="checkbox"]');
                    // проверка на указан чек или нет
                if(!checbox || checbox.checked === true){
                    const formData = new FormData(elem);
                    let body = {};
                    for(let val of formData.entries()){
                        body[val[0]] = val[1]
                    }
                    // fetch
                    postData(body)
                        .then((response) => {
                        if(response.status !== 200){
                            throw new Error('error')
                        }
                        console.log(response.status);
                        getThanksModal(successMessege)
                        })
                        .catch((error) => {
                            getThanksModal(errorMessege)
                            console.log(error);
                        }) 
                }else{
                    alert('Установите галочку на обработке данных')
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
        const getThanksModal = (statis) => {
            clearForm();
            thanksModal.style.display = 'block';
            const formContent = thanksModal.querySelector('.form-content');
            formContent.innerHTML = `
                <h4>Спасибо!</h4>
                <p>Ваша заявка отправлена.
                <br> ${statis}</p>
                <button class="btn close-btn">OK</button>
            `;
            thanksModal.querySelector('.form-wrapper').append(formContent);
            removePopup()
        }
        const clearForm = () => {
            const popup = document.querySelectorAll('.popup');
            popup.forEach((item) => {
                item.style.display ='';
                const valueForm = document.querySelectorAll('input');
                valueForm.forEach((elem) => {
                    elem.value = '';
                })
            })
        }
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




