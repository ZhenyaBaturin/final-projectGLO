const menyClub = () => {
    const clubsList = document.querySelector('.clubs-list'),
        clubList = clubsList.querySelector('ul');
        const getMeny = () => {
            clubList.style.display ='block';
        }
        const removeMeny = () => {
            clubList.style.display ='';
        }
    clubsList.addEventListener('click', () => {
        if(clubList.style.display ===''){
            getMeny()
        } else if (clubList.style.display ==='block'){
            removeMeny()
        }
        
    })
    
};
export default menyClub;
