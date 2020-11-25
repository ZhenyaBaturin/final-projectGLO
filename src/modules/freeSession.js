import removePopup from './removePopup';
const freeSession = () => {
    const openPopup = document.querySelector('.open-popup'),
       freeVisitForm = document.getElementById('free_visit_form');
   
   openPopup.addEventListener('click', () => {
       freeVisitForm.style.display = 'block';
   });
  
   removePopup()
   
};
export default freeSession;
