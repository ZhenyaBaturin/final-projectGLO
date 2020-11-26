import removePopup from './removePopup';
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
export default sendForm;