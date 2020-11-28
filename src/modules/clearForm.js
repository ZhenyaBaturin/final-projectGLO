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
export default clearForm;