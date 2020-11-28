const calc = () => {
    const formCalc = document.querySelector('#card_order'),
        cardType = formCalc.querySelectorAll('[name="card-type"]'),
        mozaika = formCalc.querySelector('#card_leto_mozaika'),
        schelkovo = formCalc.querySelector('#card_leto_schelkovo'),
        promoCode = formCalc.querySelector('[name="name"]'),
        priceTotal = formCalc.querySelector('#price-total');
    let count = 0;
        formCalc.addEventListener('change', () => {
            if (mozaika.checked) {
                count = (cardType[0].checked === true) ? 1999 :
                (cardType[1].checked === true) ? 9900 :
                (cardType[2].checked === true) ? 13900 :
                (cardType[3].checked === true) ? 19900 : 0;
              }
              if (schelkovo.checked) {
                count = (cardType[0].checked === true) ? 2999 :
                (cardType[1].checked === true) ? 14900 :
                (cardType[2].checked === true) ? 21990 :
                (cardType[3].checked === true) ? 24990 : 0;
              }
              if(promoCode.value === 'ТЕЛО2019'){
                count = Math.ceil(count * 0.7);
              }
              priceTotal.innerHTML = `${count}`;
        })
};
export default calc;