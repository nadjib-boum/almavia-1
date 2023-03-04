(()=>{"use strict";var t=function(t,n,e,o){return new(e||(e=Promise))((function(i,r){function c(t){try{u(o.next(t))}catch(t){r(t)}}function a(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,a)}u((o=o.apply(t,n||[])).next())}))};function n(n,e){return t(this,void 0,void 0,(function*(){try{const t=yield fetch(n,Object.assign({headers:{"Content-Type":"application/json",Accept:"application/json"}},e));if(!t.ok)throw new Error(t.statusText);return yield t.json()}catch(t){throw t}}))}function e(t){return new Promise((n=>setTimeout(n,t)))}function o(t){return+t<10?`0${t}`:`${t}`}function i(t){return[31,28,31,30,31,30,31,31,30,31,30,31][t-1]}function r(t){const n=t.split("/");return{d:+n[0],m:+n[1],y:+n[2]}}var c=function(t,n,e,o){return new(e||(e=Promise))((function(i,r){function c(t){try{u(o.next(t))}catch(t){r(t)}}function a(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,a)}u((o=o.apply(t,n||[])).next())}))};function a(t,u=1){return c(this,void 0,void 0,(function*(){let s,d;if(!1===t.default)s=t.first_date,d=t.last_date;else{const t=function(){const{d:t,m:n,y:e}=r(function(t){const{d:n,m:e,y:o}=r(t);return`${e}/${n}/${o}`}((new Date).toLocaleDateString())),i=`01/${o(n+3)}/${e}`;return[`${o(t)}/${o(n)}/${e}`,i]}();s=t[0],d=t[1]}try{const l=(new Date).toLocaleString().split(",")[1].trim(),f=function(t,n){const{d:e,m:c,y:a}=r(t),{d:u,m:s}=r(n),d=[],l=[...Array(i(c)-e).keys()].map((t=>`${a}-${o(c)}-${o(t+e+1)}`)),f=c<s?[...Array(u).keys()].map((t=>`${a}-${o(s)}-${o(t+1)}`)):[];for(let t=c+1;t<s;t++)d.push(...[...Array(i(t)).keys()].map((n=>`${a}-${o(t)}-${o(n+1)}`)));return[`${a}-${o(c)}-${o(e)}`,...l,...d,...f]}(s,d),m=(yield function(t,e){return c(this,void 0,void 0,(function*(){const o=`https://eg.almaviva-visa.services/api/sites/disabled-dates/?start=${t}&end=${e}&siteId=22&persons=1&IDtypology=1&IdCategory=8`;return yield n(o,{method:"GET"})}))}(s,d)).map((t=>t.date)),p=f.filter((t=>!m.includes(t)));return void(0===p.length?(console.log(`%c [${l}] No Available Appointments On Range [${s} - ${d}] `,"color: orange;font-size: 15px;font-weight: bold;"),yield e(3e5),a(t,u+1)):(console.log(`%c [${l}] There Are ${p.length} Appointment Available On Range [${s} - ${d}] `,"color: #0f0;font-size: 15px;font-weight: bold;"),console.table(p),function(){const t=document.querySelector("audio#alarm");t&&(t.setAttribute("loop",""),navigator.mediaDevices.getUserMedia({audio:!0}).then((function(n){return c(this,void 0,void 0,(function*(){yield t.play(),n.getTracks().forEach((function(t){t.stop()}))}))})))}()))}catch(n){console.log("%c Service Unavailable","color: #f00;font-size: 17px;font-weight: bold;"),yield e(3e5),a(t,u+1)}}))}!function(){c(this,void 0,void 0,(function*(){!function(){const t=`\n    <audio hidden id='alarm'>\n      <source src="${chrome.runtime.getURL("alarm.mp3")}" type="audio/mpeg">\n    </audio>\n  `;document.body.insertAdjacentHTML("afterbegin",t)}(),chrome.runtime.onMessage.addListener((function(t,n,e){const{source:o,command:i}=t;"popup"===o&&"pause-alarm"===i&&(function(){c(this,void 0,void 0,(function*(){const t=document.querySelector("audio#alarm");t&&(yield t.pause(),t.currentTime=0)}))}(),e({source:o,command:i,response:{success:!0}}))}));const{date_range:t}=yield function(){return c(this,void 0,void 0,(function*(){try{const t=chrome.runtime.getURL("input.json");return yield n(t,{method:"GET"})}catch(t){return t}}))}();yield a(t)}))}()})();