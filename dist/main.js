(()=>{"use strict";document.querySelector(".top-menu").querySelectorAll("ul > li > a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))}))})();