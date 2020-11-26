const menyClub = () => {
    const clubsList = document.querySelector('.clubs-list'),
        clubList = clubsList.querySelector('ul');
        const getMeny = () => {
            clubList.style.display ='block';
        }
        const removeMeny = () => {
            clubList.style.display ='';
        }
    clubsList.addEventListener('click', (e) => {
        let target = e.target;
        if(clubList.style.display ==='' && target.matches('p')){
            getMeny()
        } else if (clubList.style.display ==='block' && target.matches('p')){
            removeMeny()
        }  
    })
}
export default menyClub;
