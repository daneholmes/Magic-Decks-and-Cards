({11:function(){document.addEventListener("DOMContentLoaded",(()=>{let t=[];const e=()=>{t.forEach((t=>t.destroy())),t=[];const e="ontouchstart"in window||navigator.maxTouchPoints>0,o=window.innerWidth<768;(e||o)&&document.querySelectorAll(".mtg-tools-card-name").forEach((e=>{const o=e.closest(".mtg-tools-card"),a=o.getAttribute("data-card-front-image-uri"),r=o.getAttribute("data-card-back-image-uri"),n=o.getAttribute("data-card-name")||"Magic: The Gathering Card",i="Yes"===o.getAttribute("data-card-foil");let c=!1;const l=document.createElement("div");if(l.innerHTML=`\n\t\t\t\t\t<div class="tooltip-card-wrapper">\n\t\t\t\t\t\t<div class="tooltip-image-wrapper">\n\t\t\t\t\t\t\t<img src="${a}" alt="${n}" class="tooltip-card-image">\n\t\t\t\t\t\t\t${i?'<div class="tooltip-gradient-overlay"></div>':""}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t${r?'<button class="tooltip-flip-button wp-element-button">Show Back</button>':""}\n\t\t\t\t\t</div>\n\t\t\t\t`,r){const t=l.querySelector(".tooltip-flip-button");t.addEventListener("click",(()=>{const e=l.querySelector(".tooltip-card-image");c=!c,e.src=c?r:a,t.textContent=c?"Show Front":"Show Back"}))}const d=tippy(e,{content:l,allowHTML:!0,interactive:!0,placement:"bottom",followCursor:"horizontal"});t.push(d)}))};document.querySelectorAll(".mtg-tools-container").forEach((t=>{(t=>{const e=t.querySelector(".mtg-tools-image-column .mtg-tools-image");let o=!1,a=null;const r=t=>{const e=t.parentNode.querySelector(".mtg-tools-gradient-overlay");e&&e.remove()},n=t=>{r(t);const e=document.createElement("div");e.className="mtg-tools-gradient-overlay",t.parentNode.style.position="relative",t.parentNode.appendChild(e)};t.querySelectorAll(".mtg-tools-card").forEach((t=>{const i={frontImage:t.getAttribute("data-card-front-image-uri"),backImage:t.getAttribute("data-card-back-image-uri"),name:t.getAttribute("data-card-name")||"Magic: The Gathering Card",scryfallURI:t.querySelector(".mtg-tools-card-name").getAttribute("href"),foil:"Yes"===t.getAttribute("data-card-foil")},c=t.querySelector(".mtg-tools-flip-button button");c&&c.addEventListener("click",(t=>{t.stopPropagation(),o=!o,(t=>{e&&(e.src=o?t.backImage:t.frontImage)})(i)})),t.addEventListener("mouseenter",(()=>{a=i,o=!1,e.src=i.frontImage,i.foil?n(e):r(e)}))})),"Yes"===e.dataset.foil?n(e):r(e),document.addEventListener("mouseleave",(()=>{a&&(e.src=o?a.backImage:a.frontImage)}))})(t)})),e();const o=((t,e)=>{let o;return(...e)=>{clearTimeout(o),o=setTimeout((()=>{t.apply(this,e)}),300)}})((()=>{const o=window.innerWidth<768,a=t.length>0;(o&&!a||!o&&a)&&e()}));new ResizeObserver(o).observe(document.body),window.addEventListener("resize",o)}))}})[11]();