
import removePopup from './removePopup';

const sendForm = () => {
    const errorMessege = 'Что то пошло не так',
        loadMessege  = 'Загрузка...',
        successMessege = "Спасибо! Мы с вами скоро свяжимся",
        requestSend = 'Ваша заявка отправлена.',
        answerThanks = 'Спасибо',
        answerPhone = 'Некорректно данные',
        answerCheck = 'Дайте согласие на обработку ваших данных',
        invalidPhoneNumber = 'Неверный номер телефона',
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
                item.value = item.value.replace(/[^0-9+][а-я\s]/gi, '');
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
                cardType = elem.querySelectorAll('[name="card-type"]'),
                clubName = elem.querySelectorAll('[name="club-name"]');

                if(phone.value.length < 6 || !phone.value.match(/^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$/ig)){
                    getThanksModal(invalidPhoneNumber, answerPhone);
                    return;
                };
                
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
                    console.log(formData);
                    formData.forEach((val, key) => body[key] = val);
                    console.log(body);
                    // fetch
                    postData(body)
                        .then((response) => {
                        if(response.status !== 200){
                            throw new Error('error')
                        }
                        getThanksModal(successMessege, answerThanks, requestSend);
                        timeOut();
                        })
                        .catch((error) => {
                            getThanksModal(answerThanks, errorMessege);
                            timeOut();
                            console.log(error);
                        }) 
                }else{
                    getThanksModal(answerCheck, answerPhone)
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
            if(application){
                clearForm();
            };
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
            item.style.display ='';
            const valueForm = document.querySelectorAll('input');
            valueForm.forEach((elem) => {
                        elem.value = '';
                        elem.checked = false;     
            })
        })
        };
        let timeOut = () => {
            setTimeout(() => {
               clearForm()
            }, 3000);
        };
    }) 
}
export default sendForm;