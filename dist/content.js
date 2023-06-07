(()=>{"use strict";var t=function(t,n,e,o){return new(e||(e=Promise))((function(i,r){function a(t){try{s(o.next(t))}catch(t){r(t)}}function c(t){try{s(o.throw(t))}catch(t){r(t)}}function s(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,c)}s((o=o.apply(t,n||[])).next())}))};function n(n,e){return t(this,void 0,void 0,(function*(){try{const t=yield fetch(n,Object.assign({headers:{"Content-Type":"application/json",Accept:"application/json"}},e));return t.ok?yield t.json():Promise.reject()}catch(t){return Promise.reject()}}))}function e(t){return+t<10?`0${t}`:`${t}`}function o(t){return[31,28,31,30,31,30,31,31,30,31,30,31][t-1]}function i(t){const n=t.split("/");return{d:+n[0],m:+n[1],y:+n[2]}}function r(t,n,e=document.body){const o=document.createElement(t);for(const t in n)o.setAttribute(t,n[t]);return null==e||e.appendChild(o),o}var a=function(t,n,e,o){return new(e||(e=Promise))((function(i,r){function a(t){try{s(o.next(t))}catch(t){r(t)}}function c(t){try{s(o.throw(t))}catch(t){r(t)}}function s(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,c)}s((o=o.apply(t,n||[])).next())}))};function c({date_range:t,buttonData:r}){return a(this,void 0,void 0,(function*(){let c,s;if(!1===t.default)c=t.first_date,s=t.last_date;else{const t=function(){const{d:t,m:n,y:o}=i(function(t){const{d:n,m:e,y:o}=i(t);return`${e}/${n}/${o}`}((new Date).toLocaleDateString())),r=`01/${e(n+3)}/${o}`;return[`${e(t)}/${e(n)}/${o}`,r]}();c=t[0],s=t[1]}try{const t=(new Date).toLocaleString().split(",")[1].trim(),u=function(t,n){const{d:r,m:a,y:c}=i(t),{d:s,m:u}=i(n),l=[],d=[...Array(o(a)-r).keys()].map((t=>`${c}-${e(a)}-${e(t+r+1)}`)),f=a<u?[...Array(s).keys()].map((t=>`${c}-${e(u)}-${e(t+1)}`)):[];for(let t=a+1;t<u;t++)l.push(...[...Array(o(t)).keys()].map((n=>`${c}-${e(t)}-${e(n+1)}`)));return[`${c}-${e(a)}-${e(r)}`,...d,...l,...f]}(c,s),l=(yield function(t){return a(this,void 0,void 0,(function*(){const{start:e,end:o,buttonData:i}=t,{IDtypology:r,idCategory:a}=i,c=`https://eg.almaviva-visa.services/api/sites/disabled-dates/?start=${e}&end=${o}&siteId=22&persons=1&IDtypology=${r}&IdCategory=${a}`;return yield n(c,{method:"GET"})}))}({start:c,end:s,buttonData:r})).map((t=>t.date)),d=u.filter((t=>!l.includes(t)));return void(0===d.length?console.log(`%c [${t}] No Available Appointments On Range [${c} - ${s}] `,"color: orange;font-size: 15px;font-weight: bold;"):(console.log(`%c [${t}] There Are ${d.length} Appointment Available On Range [${c} - ${s}] `,"color: #0f0;font-size: 15px;font-weight: bold;"),console.table(d)))}catch(t){console.log(t),console.log("%c Service Unavailable","color: #f00;font-size: 17px;font-weight: bold;"),yield(3e5,new Promise((t=>setTimeout(t,3e5))))}}))}!function(){a(this,void 0,void 0,(function*(){try{const{buttons:t,date_range:e}=yield function(){return a(this,void 0,void 0,(function*(){try{const t=chrome.runtime.getURL("config.json");return yield n(t,{method:"GET"})}catch(t){return Promise.reject(t)}}))}();!function({buttonsData:t,date_range:n}){const e=r("div",{id:"myApp",style:"position: absolute;top: 0;left: 0;padding: 10px;background: #FFF;z-index:999999;display: flex;flex-flow: row wrap;gap: 10px;"});for(const o of t){const t=r("button",{},e);t.addEventListener("click",(()=>{c({buttonData:o,date_range:n})})),t.textContent=o.label}}({buttonsData:t,date_range:e})}catch(t){console.error(t)}}))}()})();