import removePopup from './removePopup';
const calbackPhone = () => {
    const callbackBtn = document.querySelector('.callback-btn'),
        callbackForm = document.getElementById('callback_form');   
    callbackBtn.addEventListener('click', () => {
        callbackForm.style.display = 'block';
    });
   
    removePopup()
};
export default calbackPhone;