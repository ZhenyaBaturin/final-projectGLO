import removePopup from './removePopup';
const getSurprise =() => {
    const fixedGift = document.querySelector('.fixed-gift'),
        giftModal = document.getElementById('gift');
    fixedGift.addEventListener('click', () => {
        giftModal.style.display = 'block';
        fixedGift.style.display  = 'none';
        removePopup();
    })
};
export default getSurprise;