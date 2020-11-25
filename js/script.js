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
    clubsList.addEventListener('click', () => {
        if(clubList.style.display ===''){
            getMeny()
        } else if (clubList.style.display ==='block'){
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
                if(target.matches('.overlay') || target.matches('.close_icon')){
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
    const popup = document.querySelectorAll('.form-content>form'),
        thanksModal = document.getElementById('thanks');
    popup.forEach((elem, i) => {
        elem.addEventListener('submit', (e) => {
            e.preventDefault();
            //тут можно указать что идет загрузка
            const formData = new FormData(elem);
            let body = {};
            for(let val of formData.entries()){
                body[val[0]] = val[1]
            }
            
            // условия при которых будет отправка

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
        // elem.forEach(item => {
        //     item.value ='';
        // })

            
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
            
            thanksModal.style.display = 'block';
            const formContent = thanksModal.querySelector('.form-content');
            console.log(formContent);
            formContent.innerHTML = `
                <h4>Спасибо!</h4>
                <p>Ваша заявка отправлена.
                <br> ${statis}</p>
                <button class="btn close-btn">OK</button>
            `;
            thanksModal.querySelector('.form-wrapper').append(formContent);
            removePopup()
        }
    })
    
}
sendForm()

