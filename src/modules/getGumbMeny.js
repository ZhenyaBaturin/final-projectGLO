const getGumbMeny = () => {
    const hiddenLarge = document.querySelector('.hidden-large'),
        popupMenu = document.querySelector('.popup-menu'),
        topMenu = document.querySelector('.top-menu');
    //  фиксация к верху экрана при скроле
    const stickCss = () => {
        topMenu.style.top = '0';
        topMenu.style.left = '0';
        topMenu.style.width = '100%';
        topMenu.style.position = 'fixed'
    };
    const nostickCss = () => {
        topMenu.style.top = '';
        topMenu.style.left = '';
        topMenu.style.width = '';
        topMenu.style.position = '';
    }
    const toggleMenu = () => {
        document.addEventListener('scroll', () => {
            if(topMenu.clientHeight < window.scrollY / 3){
                stickCss();
            } else if(topMenu.clientHeight >= window.scrollY / 3){
                nostickCss();
            }
        })
    }
    window.addEventListener('scroll', () => {
        if(window.innerWidth < 768){
            toggleMenu();
        }else if(window.innerWidth >= 768){
            nostickCss();
            return;
        }
    })
    // открытие меню
    hiddenLarge.querySelector('img').addEventListener('click', () => {
        popupMenu.style.display = 'flex'
    })
    // закрытие меню
    popupMenu.addEventListener('click', (e) => {
        let target = e.target;
        if(target.matches('img') || target.matches('li') || target.matches('a')){
            popupMenu.style.display = ''
        }
    })
}
export default getGumbMeny;