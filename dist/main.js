!function(e){var t={};function l(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/dist",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);var n=()=>{document.querySelectorAll(".popup").forEach(e=>{e.addEventListener("click",t=>{const l=t.target;(l.matches(".overlay")||l.matches(".close_icon")||l.matches(".close-btn"))&&(e.style.display="")})})};var o=()=>{const e=document.querySelector(".open-popup"),t=document.getElementById("free_visit_form");e.addEventListener("click",()=>{t.style.display="block"}),n()};var r=()=>{const e=document.querySelector(".callback-btn"),t=document.getElementById("callback_form");e.addEventListener("click",()=>{t.style.display="block"}),n()};var s=()=>{const e=document.querySelectorAll("form"),t=document.getElementById("thanks"),l=document.querySelectorAll('[name="name"]'),o=document.querySelectorAll('[name="phone"]');l.forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^а-я\s]/gi,"")})}),o.forEach(e=>{e.addEventListener("input",()=>{e.setAttribute("maxlength","11"),e.value=e.value.replace(/[^0-9+]/g,"")})}),e.forEach((e,l)=>{e.addEventListener("submit",t=>{t.preventDefault();const l=e.querySelector('[type="checkbox"]');if(l&&!0!==l.checked)alert("Установите галочку на обработке данных");else{const t=new FormData(e);let l={};for(let e of t.entries())l[e[0]]=e[1];o(l).then(e=>{if(200!==e.status)throw new Error("error");console.log(e.status),r("Спасибо! Мы с вами скоро свяжимся")}).catch(e=>{r("Что то пошло не так"),console.log(e)})}});const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=e=>{s(),t.style.display="block";const l=t.querySelector(".form-content");l.innerHTML=`\n                <h4>Спасибо!</h4>\n                <p>Ваша заявка отправлена.\n                <br> ${e}</p>\n                <button class="btn close-btn">OK</button>\n            `,t.querySelector(".form-wrapper").append(l),n()},s=()=>{document.querySelectorAll(".popup").forEach(e=>{e.style.display="";document.querySelectorAll("input").forEach(e=>{e.value=""})})}})};var c=()=>{const e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");e&&e.addEventListener("click",()=>{t.style.display="block",e.style.display="none",n()})};var i=()=>{const e=document.querySelectorAll(".main-slider>.slide");let t=0;setInterval(()=>{e[t].style.display="none",t++,t===e.length&&(t=0),e[t].style.display="flex"},3e3)};var a=()=>{const e=document.querySelector(".hidden-large"),t=document.querySelector(".popup-menu"),l=document.querySelector(".top-menu"),n=()=>{l.style.top="",l.style.left="",l.style.width="",l.style.position=""},o=()=>{document.addEventListener("scroll",()=>{l.clientHeight<window.scrollY/3?(l.style.top="0",l.style.left="0",l.style.width="100%",l.style.position="fixed"):l.clientHeight>=window.scrollY/3&&n()})};window.addEventListener("scroll",()=>{if(window.innerWidth<768)o();else if(window.innerWidth>=768)return void n()}),e.querySelector("img").addEventListener("click",()=>{t.style.display="flex"}),t.addEventListener("click",e=>{let l=e.target;(l.matches("img")||l.matches("li")||l.matches("a"))&&(t.style.display="")})};var d=()=>{const e=document.getElementById("totop");e.style.display="none",window.addEventListener("scroll",()=>{window.scrollY>=document.documentElement.clientHeight?e.style.display="block":window.scrollY<document.documentElement.clientHeight&&(e.style.display="none")}),e.addEventListener("click",t=>{t.preventDefault();const l=e.getAttribute("href");document.querySelector(l).scrollIntoView({behavior:"smooth",block:"start"})})};var u=()=>{const e=document.querySelector(".gallery-slider"),t=document.querySelector(".services-slider"),l=document.createElement("div");e.style.position="relative",t.style.position="relative",l.classList.add("prev"),l.classList.add("slider-arrow"),l.innerHTML="\n            <span>\n                <i class='fa fa-angel-left'></i>\n            </span>\n    ",e.append(l);const n=document.createElement("div");n.classList.add("next"),n.classList.add("slider-arrow"),n.innerHTML="\n            <span>\n                <i class='fa fa-angel-right'></i>\n            </span>\n    ",e.append(n)};var y=()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide");document.querySelector(".prev"),document.querySelector(".next");t.forEach(e=>{e.style.display="none"});let l=0,n=0;const o=(e,t,l)=>{e[t].style.display=l},r=(e,t,l)=>{e[t].style.display=l};r(t,l,"flex");const s=()=>{o(t,l,"none"),l++,l>=t.length&&(l=0),r(t,l,"flex")};e.addEventListener("click",e=>{let n=e.target;n.closest("arrow")||(o(t,l,"none"),n.closest(".slider-arrow")?l++:n.closest(".prev")&&l--,l>=t.length&&(l=0),l<0&&(l=t.length-1),r(t,l,"flex"))}),e.addEventListener("mouseover",e=>{let t=e.target;t.closest(".slider-arrow")&&(console.log(t),i())}),e.addEventListener("mouseout",e=>{e.target.closest(".slider-arrow")&&c()});const c=()=>{n=setInterval(s,3e3)},i=()=>{clearInterval(n)};c()};(()=>{const e=document.querySelector(".clubs-list").querySelector("ul"),t=document.querySelector("body");t.addEventListener("click",t=>{let l=t.target;console.log(t),""===e.style.display&&l.matches("p")?e.style.display="block":"block"!==e.style.display||l.matches("ul")||l.matches("li")||(e.style.display="")})})(),n(),o(),r(),s(),c(),i(),a(),d(),u(),y()}]);