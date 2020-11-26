const arrowScroll = () => {
    const totop = document.getElementById('totop');
    totop.style.display = 'none';
    window.addEventListener('scroll', () => {
        if(window.scrollY >= document.documentElement.clientHeight){
            totop.style.display = 'block';
        } else if(window.scrollY < document.documentElement.clientHeight) {
            totop.style.display = 'none';
        }
    });
    totop.addEventListener('click', (e) => {
        e.preventDefault();
        const idBlock = totop.getAttribute('href');
        document.querySelector(idBlock).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
} 
export default arrowScroll;