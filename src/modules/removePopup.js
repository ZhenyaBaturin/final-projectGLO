
const removePopup = () => {
    const popup = document.querySelectorAll('.popup');
    popup.forEach((item) => {
        item.addEventListener('click', (e) => {
            const target = e.target;
                if(target.matches('.overlay') || target.matches('.close_icon') || target.matches('.close-btn')){
                    item.style.display = '';
                    clearForm();
                }
        })
    })
    const clearForm = () => {
        popup.forEach((item) => {
        item.style.display ='';
        const valueForm = document.querySelectorAll('input');
        valueForm.forEach((elem) => {
                    elem.value = '';
                    elem.checked = false;     
        })
    })
    };
};
export default removePopup;