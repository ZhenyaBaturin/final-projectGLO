!function(e){var t={};function l(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=t,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/dist",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);var r=()=>{document.querySelectorAll(".popup").forEach(e=>{e.addEventListener("click",t=>{const l=t.target;(l.matches(".overlay")||l.matches(".close_icon")||l.matches(".close-btn"))&&(e.style.display="")})})};var n=()=>{const e=document.querySelector(".open-popup"),t=document.getElementById("free_visit_form");e.addEventListener("click",()=>{t.style.display="block"}),r()};var o=()=>{const e=document.querySelector(".callback-btn"),t=document.getElementById("callback_form");e.addEventListener("click",()=>{t.style.display="block"}),r()};var c=()=>{const e=document.querySelectorAll("form"),t=document.getElementById("thanks"),l=document.querySelectorAll('[name="name"]'),n=document.querySelectorAll('[name="phone"]'),o=document.querySelector('.price-message>[name="name"]');l.forEach(e=>{e===o?e.addEventListener("input",()=>{o.value=o.value.replace(/\s/gi,""),o.removeAttribute("required")}):e.addEventListener("input",()=>{e.value=e.value.replace(/[^а-я\s]/gi,"")})}),n.forEach(e=>{e.addEventListener("input",()=>{e.setAttribute("maxlength","11"),e.value=e.value.replace(/[^0-9+]/g,"")})}),e.forEach((e,l)=>{e.addEventListener("submit",t=>{t.preventDefault();const l=e.querySelector('[type="checkbox"]'),r=e.querySelector('[type="tel"]'),a=e.querySelectorAll("input"),d=e.querySelectorAll('[name="card-type"]'),i=e.querySelectorAll('[name="club-name"]'),u=e.querySelector("p>label");if(r.value.length<6||!r.value.match(/^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$/gi))r.style.border="solid 1px red";else{if(r.style.border="","card_order"===e.id||"footer_form"===e.id){const e=[...d],t=[...i],l=e=>!0===e.checked;if(t.length&&!1===t.some(l))return void o("Выберите клуб","Некорректно данные");if(e.length&&!1===e.some(l))return void o("Выберите карту","Некорректно данные")}if(o("Загрузка...","Спасибо"),l&&!0!==l.checked)o("Дайте согласие на обработку ваших данных","Некорректно данные"),u.classList.add("red");else{const t=new FormData(e);let l={};t.forEach((e,t)=>l[t]=e),console.log(l),n(l).then(e=>{if(200!==e.status)throw new Error("error");o("Спасибо! Мы с вами скоро свяжимся","Спасибо","Ваша заявка отправлена."),u.classList.remove("red"),c(),s()}).catch(e=>{o("Что то пошло не так","Спасибо"),s(),u.classList.remove("red"),console.log(e)}).finally(()=>{a.forEach(e=>{"checkbox"!==e.type&&"radio"!==e.name||(e.checked=!1),"tel"!==e.type&&"name"!==e.name&&"promocode"!==e.name||(e.value=""),"card_leto_mozaika"!==e.id&&"m1"!==e.id&&"t1"!==e.id||(e.checked=!0)})})}}});const n=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),o=(e,l,n="")=>{t.style.display="block";const o=t.querySelector(".form-content");o.innerHTML=`\n                <h4>${l}!</h4>\n                <p>${n}\n                <br> ${e}</p>\n                <button class="btn close-btn">OK</button>\n            `,t.querySelector(".form-wrapper").append(o),r()},c=()=>{document.querySelectorAll(".popup").forEach(e=>{"callback_form"!==e.id&&"free_visit_form"!==e.id||(e.style.display="")})};let s=()=>{setTimeout(()=>{document.querySelectorAll(".popup").forEach(e=>{e.style.display=""})},3e3)}})};var s=()=>{const e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");e&&e.addEventListener("click",()=>{t.style.display="block",e.style.display="none",r()})};var a=()=>{const e=document.querySelectorAll(".main-slider>.slide");let t=0;setInterval(()=>{e[t].style.display="none",t++,t===e.length&&(t=0),e[t].style.display="flex"},3e3)};var d=()=>{const e=document.querySelector(".hidden-large"),t=document.querySelector(".popup-menu"),l=document.querySelector(".top-menu"),r=()=>{l.style.top="",l.style.left="",l.style.width="",l.style.position=""},n=()=>{document.addEventListener("scroll",()=>{l.clientHeight<window.scrollY/3?(l.style.top="0",l.style.left="0",l.style.width="100%",l.style.position="fixed"):l.clientHeight>=window.scrollY/3&&r()})};window.addEventListener("scroll",()=>{if(window.innerWidth<768)n();else if(window.innerWidth>=768)return void r()}),e.querySelector("img").addEventListener("click",()=>{t.style.display="flex"}),t.addEventListener("click",e=>{let l=e.target;(l.matches("img")||l.matches("li")||l.matches("a"))&&(t.style.display="")})};var i=()=>{const e=document.getElementById("totop");e.style.display="none",window.addEventListener("scroll",()=>{window.scrollY>=document.documentElement.clientHeight?e.style.display="block":window.scrollY<document.documentElement.clientHeight&&(e.style.display="none")}),e.addEventListener("click",t=>{t.preventDefault();const l=e.getAttribute("href");document.querySelector(l).scrollIntoView({behavior:"smooth",block:"start"})})};var u=()=>{const e=document.querySelector(".gallery-slider"),t=document.querySelector("#services").querySelector(".services-slider");(()=>{const t=document.createElement("div");e.style.position="relative",t.classList.add("prev"),t.classList.add("slider-arrow"),t.innerHTML="\n            <span>\n                <i class='fa fa-angel-left'>\n                    <\n                </i>\n            </span>\n    ",e.append(t)})();(()=>{const e=document.createElement("div");t.style.position="relative",e.classList.add("prev"),e.classList.add("slider-arrow"),e.innerHTML="\n            <span>\n                <i class='fa fa-angel-left'>\n                    < \n                </i>\n            </span>\n    ",t.append(e)})();(()=>{const t=document.createElement("div");t.classList.add("next"),t.classList.add("slider-arrow"),t.innerHTML="\n            <span>\n                <i class='fa fa-angel-right'>\n                   > \n                </i>\n            </span>\n    ",e.append(t)})();(()=>{const e=document.createElement("div");e.classList.add("next"),e.classList.add("slider-arrow"),e.innerHTML="\n            <span>\n                <i class='fa fa-angel-right'>\n                    >\n                </i>\n            </span>\n        ",t.append(e)})()};var y=()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide");document.querySelector(".prev"),document.querySelector(".next");t.forEach(e=>{e.style.display="none"});let l=0,r=0;const n=(e,t,l)=>{e[t].style.display=l},o=(e,t,l)=>{e[t].style.display=l};o(t,l,"flex");const c=()=>{n(t,l,"none"),l++,l>=t.length&&(l=0),o(t,l,"flex")};e.addEventListener("click",e=>{let r=e.target;r.closest("arrow")||(n(t,l,"none"),r.closest(".slider-arrow")?l++:r.closest(".prev")&&l--,l>=t.length&&(l=0),l<0&&(l=t.length-1),o(t,l,"flex"))}),e.addEventListener("mouseover",e=>{e.target.closest(".slider-arrow")&&a()}),e.addEventListener("mouseout",e=>{e.target.closest(".slider-arrow")&&s()});const s=()=>{r=setInterval(c,3e3)},a=()=>{clearInterval(r)};s()};var p=()=>{const e=document.querySelector(".services-slider"),t=e.querySelectorAll(".slide"),l=e.querySelector(".prev"),r=e.querySelector(".next");let n=1115;t[0].style.transition="0.5s all",e.style.overflow="hidden",t.forEach(e=>{e.style.minWidth="210px"}),t[0].style.marginLeft=`-${n}px`,r.addEventListener("click",()=>{n+=222,n>1110&&(n=0),t[0].style.marginLeft=`-${n}px`}),l.addEventListener("click",()=>{n-=222,n<=0&&(n=1110),t[0].style.marginLeft=`-${n}px`})};var m=()=>{const e=document.querySelector("#card_order"),t=e.querySelectorAll('[name="card-type"]'),l=e.querySelector("#card_leto_mozaika"),r=e.querySelector("#card_leto_schelkovo"),n=e.querySelector('[name="name"]'),o=e.querySelector("#price-total");let c=0;e.addEventListener("change",()=>{l.checked&&(c=!0===t[0].checked?1999:!0===t[1].checked?9900:!0===t[2].checked?13900:!0===t[3].checked?19900:0),r.checked&&(c=!0===t[0].checked?2999:!0===t[1].checked?14900:!0===t[2].checked?21990:!0===t[3].checked?24990:0),"ТЕЛО2019"===n.value&&(c=Math.ceil(.7*c)),o.innerHTML=""+c})};(()=>{const e=document.querySelector(".clubs-list").querySelector("ul"),t=document.querySelector("body");t.addEventListener("click",t=>{let l=t.target;""===e.style.display&&l.matches("p")?e.style.display="block":"block"!==e.style.display||l.matches("ul")||l.matches("li")||(e.style.display="")})})(),r(),n(),o(),c(),s(),a(),d(),i(),u(),y(),p(),m()}]);