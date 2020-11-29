const menyClub = () => {
    const clubsList = document.querySelector('.clubs-list'),
        clubList = clubsList.querySelector('ul'),
        body = document.querySelector('body');
        const getMeny = () => {
            clubList.style.display ='block';
        }
        const removeMeny = () => {
            clubList.style.display ='';
        }
        body.addEventListener('click', (e) => {
        let target = e.target;
        if(clubList.style.display ==='' && target.matches('p')){
            getMeny()
        } else if (clubList.style.display ==='block' && !target.matches('ul') && !target.matches('li')){
            removeMeny()
        }  

    })
}
export default menyClub;
