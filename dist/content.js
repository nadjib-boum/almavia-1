(()=>{"use strict";var t=function(t,n,e,o){return new(e||(e=Promise))((function(i,c){function r(t){try{u(o.next(t))}catch(t){c(t)}}function a(t){try{u(o.throw(t))}catch(t){c(t)}}function u(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(r,a)}u((o=o.apply(t,n||[])).next())}))};function n(n,e){return t(this,void 0,void 0,(function*(){try{const t=yield fetch(n,Object.assign({headers:{"Content-Type":"application/json",Accept:"application/json"}},e));if(!t.ok)throw new Error(t.statusText);return yield t.json()}catch(t){throw t}}))}function e(t){return+t<10?`0${t}`:`${t}`}function o(t){return[31,28,31,30,31,30,31,31,30,31,30,31][t-1]}function i(t){const n=t.split("/");return{d:+n[0],m:+n[1],y:+n[2]}}function c(t){const{d:n,m:e,y:o}=i(t);return`${e}/${n}/${o}`}var r=function(t,n,e,o){return new(e||(e=Promise))((function(i,c){function r(t){try{u(o.next(t))}catch(t){c(t)}}function a(t){try{u(o.throw(t))}catch(t){c(t)}}function u(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(r,a)}u((o=o.apply(t,n||[])).next())}))};function a(t,u=1){return r(this,void 0,void 0,(function*(){let s,d;if(!1===t.default)s=t.first_date,d=t.last_date;else{const t=function(){const{d:t,m:n,y:o}=i(c((new Date).toLocaleDateString())),r=`01/${e(n+3)}/${o}`;return[`${e(t)}/${e(n)}/${o}`,r]}();s=t[0],d=t[1]}try{const t=(new Date).toLocaleString();console.log(`%c [${e(u)}] Script is running on: ${c(t.includes(",")?t.split(",")[0]:t)}`,"font-weight: bold;");const a=function(t,n){const{d:c,m:r,y:a}=i(t),{d:u,m:s}=i(n),d=[],l=[...Array(o(r)-c).keys()].map((t=>`${a}-${e(r)}-${e(t+c+1)}`)),f=r<s?[...Array(u).keys()].map((t=>`${a}-${e(s)}-${e(t+1)}`)):[];for(let t=r+1;t<s;t++)d.push(...[...Array(o(t)).keys()].map((n=>`${a}-${e(t)}-${e(n+1)}`)));return[`${a}-${e(r)}-${e(c)}`,...l,...d,...f]}(s,d),l=(yield function(t,e){return r(this,void 0,void 0,(function*(){const o=`https://eg.almaviva-visa.services/api/sites/disabled-dates/?start=${t}&end=${e}&siteId=22&persons=1&IDtypology=1&IdCategory=8`;return yield n(o,{method:"GET"})}))}(s,d)).map((t=>t.date)),f=a.filter((t=>!l.includes(t)));return console.log("%c Service Available","color: #0f0;font-size: 17px;font-weight: bold;"),console.table(f),void(f.length>0&&function(){const t=document.querySelector("audio#alarm");t&&(t.setAttribute("loop",""),navigator.mediaDevices.getUserMedia({audio:!0}).then((function(n){return r(this,void 0,void 0,(function*(){yield t.play(),n.getTracks().forEach((function(t){t.stop()}))}))})))}())}catch(n){console.log("%c Service Unavailable","color: #f00;font-size: 17px;font-weight: bold;"),yield(3e5,new Promise((t=>setTimeout(t,3e5)))),a(t,u+1)}}))}!function(){r(this,void 0,void 0,(function*(){!function(){const t=`\n    <audio hidden id='alarm'>\n      <source src="${chrome.runtime.getURL("alarm.mp3")}" type="audio/mpeg">\n    </audio>\n  `;document.body.insertAdjacentHTML("afterbegin",t)}(),chrome.runtime.onMessage.addListener((function(t,n,e){const{source:o,command:i}=t;"popup"===o&&"pause-alarm"===i&&(function(){r(this,void 0,void 0,(function*(){const t=document.querySelector("audio#alarm");t&&(yield t.pause(),t.currentTime=0)}))}(),e({source:o,command:i,response:{success:!0}}))}));const{date_range:t}=yield function(){return r(this,void 0,void 0,(function*(){try{const t=chrome.runtime.getURL("input.json");return yield n(t,{method:"GET"})}catch(t){return t}}))}();yield a(t)}))}()})();