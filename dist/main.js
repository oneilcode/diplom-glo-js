(()=>{"use strict";document.querySelector(".top-menu").querySelectorAll("ul>li>a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))})),(()=>{const e=document.querySelector(".btn-open"),t=document.querySelector(".modal-callback"),l=document.querySelector(".modal-overlay");e.addEventListener("click",(()=>{t.style.display="block",l.style.display="block"}))})(),(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay"),l=document.querySelector(".modal-close");function o(){e.style.display="none",t.style.display="none"}t.addEventListener("click",o),l.addEventListener("click",o)})(),(()=>{const e=document.querySelector(".up"),t=document.querySelector(".top-slider");e.style.visibility="hidden",e.style.transition="all .3s ease-in-out",window.onscroll=function(){window.pageYOffset>700?e.style.visibility="visible":e.style.visibility="hidden"},e.addEventListener("click",(()=>{t.scrollIntoView({block:"start",behavior:"smooth"})}))})(),(()=>{const e=document.querySelector(".button-services"),t=document.querySelector(".modal-callback"),l=document.querySelector(".modal-overlay"),o=document.querySelector(".modal-close"),n=document.querySelectorAll(".fancyboxModal"),c=document.querySelector(".up");function r(){t.style.display="none",l.style.display="none",c.style.display="block"}n.forEach((e=>{e.addEventListener("click",(function(){t.style.display="block",l.style.display="block",c.style.display="none"}))})),e.addEventListener("click",(function(){t.style.display="block",l.style.display="block",c.style.display="none"})),l.addEventListener("click",r),o.addEventListener("click",r)})(),(()=>{const e=document.querySelectorAll(".accordeon .element"),t=document.querySelectorAll(".element-content");e.forEach((l=>{l.addEventListener("click",(l=>{e.forEach((e=>{e.classList.remove("active")})),t.forEach((e=>{e.classList.remove("active")}));const o=l.currentTarget,n=o.querySelector(".element-content");o.classList.toggle("active"),o.classList.contains("active")&&n.classList.add("active")}))}))})(),new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:30,loop:!0,navigation:{nextEl:".arrow-right",prevEl:".arrow-left"},breakpoints:{768:{slidesPerView:2},1200:{slidesPerView:3}}}),new Swiper(".swiper",{slidesPerView:1,spaceBetween:30,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),(()=>{const e=document.querySelector("form"),t=document.createElement("div"),l="Ошибка...",o=e.querySelector("input[name=fio]"),n=e.querySelector("input[name=tel]"),c=e.querySelector(".button");try{if(!e)throw new Error("Верните форму на место!");e.addEventListener("submit",(r=>{r.preventDefault(),(()=>{const r=e.querySelectorAll("input"),a=new FormData(e),i={};var s;t.textContent="Идет отправка...",e.append(t),c.value="Отправить",a.forEach(((e,t)=>{i[t]=e})),(e=>{let r=!0;return 0===o.value.length&&(r=!1,t.textContent=l,c.value="Отправить"),(n.value.match(/[^0-9\+]/g,"")||n.value.length<11)&&(r=!1,t.textContent=l,c.value="Отправить"),r})()&&(s=i,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{t.textContent="Отправлено",c.value="Отправить",setTimeout((()=>{t.textContent=""}),3e3),r.forEach((e=>{e.value="",c.value="Отправить"}))})).catch((e=>{t.textContent=l,c.value="Отправить"}))})()}))}catch(e){console.log(e.message)}})(),(()=>{const e=document.querySelector("form"),t=e.querySelector("input[name=fio]"),l=e.querySelector("input[name=tel]");e.addEventListener("submit",(e=>{e.preventDefault()})),t.addEventListener("input",(()=>{t.value=t.value.replace(/[^а-я\s]/gi,"")})),l.addEventListener("input",(()=>{l.value=l.value.replace(/[^0-9\+]/g,"")}))})()})();