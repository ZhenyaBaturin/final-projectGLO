import removePopup from './removePopup';
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
export default getSurprise;