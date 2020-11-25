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
 const freeSession = () => {
     const openPopup = document.querySelector('.open-popup'),
        freeVisitForm = document.getElementById('free_visit_form'),
        formCloseIcon = freeVisitForm.querySelector('.close_icon');
    
    openPopup.addEventListener('click', () => {
        freeVisitForm.style.display = 'block';
    })
    freeVisitForm.addEventListener('click', (e) => {
        const target = e.target;
        if(target.matches('.overlay') || target.matches('.close_icon')){
            freeVisitForm.style.display = '';
        }
    })
 }
 freeSession()

const calbackPhone = () => {
    const callbackBtn = document.querySelector('.callback-btn'),
        callbackForm = document.getElementById('callback_form');
        
        
    callbackBtn.addEventListener('click', () => {
        callbackForm.style.display = 'block';
    })
    callbackForm.addEventListener('click', (e) => {
        const target = e.target;
        if(target.matches('.overlay') || target.matches('.close_icon')){
            callbackForm.style.display = '';
        }
    })
        
}
calbackPhone()
