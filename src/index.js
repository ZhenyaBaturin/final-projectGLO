'use strict';


import menyClub from './modules/menyClub';
import removePopup from './modules/removePopup';
import freeSession from './modules/freeSession';
import calbackPhone from './modules/calbackPhone';
import sendForm from './modules/sendForm';
import getSurprise from './modules/getSurprise';
import toggleTitleSlider from './modules/toggleTitleSlider';
import getGumbMeny from './modules/getGumbMeny';

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