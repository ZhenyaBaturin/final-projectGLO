'use strict';


import menyClub from './modules/menyClub';
import removePopup from './modules/removePopup';
import freeSession from './modules/freeSession';
import calbackPhone from './modules/calbackPhone';
import sendForm from './modules/sendForm';
import getSurprise from './modules/getSurprise';
import toggleTitleSlider from './modules/toggleTitleSlider';
import getGumbMeny from './modules/getGumbMeny';
import arrowScroll from './modules/arrowScroll';
import getArrow from './modules/getArrow';
import mainSlider from './modules/mainSlider';
import slideCarousel from './modules/slideCarousel';
import calc from './modules/calc';

// выбор сверху клубы
menyClub()
// удаление попап
removePopup()
// бесплатный звонок
freeSession()
// обратная связь, форма
calbackPhone()
// отправка формы
sendForm()
// сюрприз
getSurprise();
// слайдер на заголовке
toggleTitleSlider();
// гамбургур меню
getGumbMeny();
// скролл стрелочки
arrowScroll()
// стрелки 
getArrow()
//галерея
mainSlider();
// карусель
slideCarousel()
// калькулятор
calc()