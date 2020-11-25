const getGumbMeny = () => {
    const hiddenLarge = document.querySelector('.hidden-large'),
        popupMenu = document.querySelector('.popup-menu'),
        topMenu = document.querySelector('.top-menu');
    //  фиксация к верху экрана при скроле
    window.addEventListener('scroll', () => {
        if(topMenu.clientHeight < window.scrollY / 3){
            topMenu.style.top = '0';
            topMenu.style.left = '0';
            topMenu.style.width = '100%';
            topMenu.style.position = 'fixed';
        } else if(topMenu.clientHeight >= window.scrollY / 3){
            topMenu.style.top = '';
            topMenu.style.left = '';
            topMenu.style.width = '';
            topMenu.style.position = '';
        }
    })
    // открытие меню
    hiddenLarge.addEventListener('click', () => {
        popupMenu.style.display = 'flex'
    })
    // закрытие меню
    popupMenu.addEventListener('click', (e) => {
        let target = e.target;
        if(target.matches('img') || target.matches('li') || target.matches('a')){
            popupMenu.style.display = ''
        }
    })
};
export default getGumbMeny;