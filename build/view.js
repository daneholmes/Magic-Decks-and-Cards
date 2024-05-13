document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".mtg-tools-container").forEach((t=>{const e=t.querySelector(".mtg-tools-image-column .mtg-tools-image");let a=!1,o=null;const n=()=>{const t=e.nextElementSibling;t&&t.classList.contains("mtg-tools-gradient-overlay")&&t.remove()},r=t=>{n();const e=document.createElement("div");e.className="mtg-tools-gradient-overlay",t.parentNode.appendChild(e)},i=()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0||window.innerWidth<=768,l=t=>{let e="";t.backImage&&(e=`\n\t\t\t\t\t<button id="flip-card-button" class="swal2-confirm swal2-styled" style="display: inline-block; margin-top: 10px;">\n\t\t\t\t\t\t${a?"Show Front":"Show Back"}\n\t\t\t\t\t</button>\n\t\t\t\t`),Swal.fire({html:`\n\t\t\t\t\t<img src="${a?t.backImage:t.frontImage}"\n\t\t\t\t\t\t class="mtg-tools-popup-image"\n\t\t\t\t\t\t style="width: 100%; height: auto;"\n\t\t\t\t\t\t alt="${t.name}">\n\t\t\t\t\t<p><a href="${t.scryfallURI}" target="_blank">View ${t.name} on Scryfall</a></p>\n\t\t\t\t\t${e}\n\t\t\t\t`,showCloseButton:!0,showConfirmButton:!1,background:"#fff",width:"auto",customClass:{popup:"wordpress-default-popup"},didRender:()=>{t.backImage&&document.getElementById("flip-card-button").addEventListener("click",(()=>{a=!a,l(t)})),t.foil&&r(document.querySelector(".swal2-image"))},showClass:{popup:"animate__animated animate__fadeIn"},hideClass:{popup:"animate__animated animate__fadeOut"}})};t.querySelectorAll(".mtg-tools-card").forEach((t=>{const s={frontImage:t.getAttribute("data-card-front-image-uri"),backImage:t.getAttribute("data-card-back-image-uri"),name:t.getAttribute("data-card-name")||"Magic: The Gathering Card",scryfallURI:t.querySelector(".mtg-tools-card-name").getAttribute("href"),foil:"Yes"===t.getAttribute("data-card-foil")},c=t.querySelector(".mtg-tools-flip-button button");c&&c.addEventListener("click",(t=>{t.stopPropagation(),a=!a,(t=>{e&&(e.src=a?t.backImage:t.frontImage)})(s)})),t.addEventListener("mouseenter",(()=>{i()||(o=s,a=!1,e.src=s.frontImage,s.foil?r(e):n())})),t.addEventListener("click",(t=>{i()?(t.preventDefault(),a=!1,l(s)):(o=s,a=!1,e.src=s.frontImage,s.foil?r(e):n())}))})),"Yes"===e.dataset.foil?r(e):n(),document.addEventListener("mouseleave",(()=>{o&&(e.src=a?o.backImage:o.frontImage)}))}))}));