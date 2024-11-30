(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"body {\n  background-repeat: no-repeat;\n  height: 100vh;\n  width: 100%;\n  margin: 0px;\n  background-color: #9898988a;\n}\n\nheader {\n  background-color: black;\n  height: 10vh;\n  color: aliceblue;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\nheader input {\n  width: 60vw;\n}\n\n.icon img {\n  font-size: 1.5vw;\n}\n\n.icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon_button {\n  border: medium none;\n  background-image: none;\n  background: transparent;\n  float: left;\n  background-color: transparent;\n}\n\n.name {\n  padding-left: 20px;\n}\n\n.text-field__icon {\n  position: relative;\n}\n.text-field__icon input {\n  padding-right: 2.5rem;\n  height: 4vh;\n  border-radius: 7px;\n}\n.text-field__aicon {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  top: 0;\n  bottom: 0;\n  right: 0.875rem;\n  width: 1rem;\n  cursor: pointer;\n  color: #bdbdbd;\n  transition: color 0.35s ease-in-out;\n}\n.text-field__aicon:hover {\n  color: red;\n}\n\n.sidebarAndCards {\n  height: 100%;\n  width: 100vw;\n  display: flex;\n}\n\n.sidenav {\n  max-width: 20vw;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  padding-top: 20px;\n  background-color: #262626;\n}\n\n.sidenav a,\n.dropdown-btn {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 20px;\n  color: #818181;\n  display: block;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  outline: none;\n}\n\n.sidenav a:hover,\n.dropdown-btn:hover {\n  color: rgb(241, 90, 90);\n  transition: color 0.35s ease-in-out;\n}\n\n.coincidences {\n  color: #6c6767;\n  font-size: 5vh;\n  display: none;\n}\n\n.main {\n  margin-left: 200px;\n  font-size: 20px;\n  padding: 0px 10px;\n}\n\n.dropdown-container {\n  display: none;\n  padding-left: 8px;\n}\n\n.containerCards {\n  display: flex;\n  align-content: flex-start;\n  flex-wrap: wrap;\n  flex-direction: row;\n  height: 100%;\n}\n\n.card {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  margin: 35px;\n  padding: 20px;\n  width: 18vw;\n  height: 23vh;\n  transition: transform 0.3s;\n}\n\n.card:hover {\n  transform: scale(1.05);\n  box-shadow: 0 2px 10px rgba(237, 81, 81, 0.396);\n}\n\n.card h2 {\n  display: flex;\n  align-items: center;\n  color: #333;\n  font-size: 1.25vh;\n  font-size: 1.25vw;\n}\n\n.name {\n  margin-right: 10px;\n}\n\n.card p {\n  margin: 5px 0;\n  color: #555;\n  font-size: 1.25vh;\n  font-size: 1.25vw;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 10;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.809);\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  max-width: 600px; /* Максимальная ширина окна */\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: red;\n  text-decoration: none;\n  cursor: pointer;\n}\n",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),c=t(659),s=t.n(c),d=t(56),l=t.n(d),u=t(540),p=t.n(u),m=t(113),f=t.n(m),v=t(208),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),r()(v.A,h),v.A&&v.A.locals&&v.A.locals;const g=JSON.parse('{"u":[{"filter_name":"Город","value":["Москва","Оренбург","Волгоград"]},{"filter_name":"Роль","value":["Дизайнер","руководство","Роль"]},{"filter_name":"Подразделение 1","value":["Центральный офис","Филиал в Оренбургской области","Филиал в Волгоградской области"]},{"filter_name":"Подразделение 1","value":["Центральный офис","Филиал в Оренбургской области","Филиал в Волгоградской области","Филиал в Волгоградской области","Филиал в Волгоградской области"]}],"B":[{"Subdivision_1":"Центральный офис","Function_block":"Корпоративный блок","Subdivision_2":"онлайн-банкинг для бизнеса","Subdivision_3":"команда 1","Subdivision_4":"-","Job_title":"Председатель банка","Role":"руководство","Surname":"Смирнов","Name":"Вася","Telephone":"79699822593","City":"Оренбург","Address":"проспект Мира, 14, 3 этаж, офис 301"},{"Subdivision_1":"oфис","Function_block":"Корпоративный блок","Subdivision_2":"онлайн-банкинг для бизнеса","Subdivision_3":"команда 1","Subdivision_4":"-","Job_title":"Председатель банка","Role":"Дизайнер","Surname":"Иванович","Name":"Петя","Telephone":"79699822593","City":"Москва","Address":"проспект Мира, 14, 3 этаж, офис 301"},{"Subdivision_1":"Центральный офис","Function_block":"Корпоративный блок","Subdivision_2":"онлайн-банкинг для бизнеса","Subdivision_3":"команда 1","Subdivision_4":"-","Job_title":"Председатель банка","Role":"Роль","Surname":"Смирнов","Name":"Александр","Telephone":"79699822593","City":"Волгоград","Address":"проспект Мира, 14, 3 этаж, офис 301"},{"Subdivision_1":"Центральный офис","Function_block":"Корпоративный блок","Subdivision_2":"онлайн-банкинг для бизнеса","Subdivision_3":"команда 1","Subdivision_4":"-","Job_title":"Председатель банка","Role":"Роль","Surname":"Смирнов","Name":"Александр","Telephone":"79699822593","City":"Москва","Address":"проспект Мира, 14, 3 этаж, офис 301"}]}');function b(){const n=document.querySelectorAll(".card"),e=Array.from(document.querySelectorAll("input[type='checkbox'][name='Роль']:checked")).map((n=>n.value)),t=Array.from(document.querySelectorAll("input[type='checkbox'][name='Город']:checked")).map((n=>n.value));n.forEach((n=>{const o=n.querySelector(".role").textContent,r=n.querySelector(".city").textContent,i=e.includes(o)&&"none"!==n.style.display,a=t.includes(r)&&"none"!==n.style.display,c=(0===e.length||i)&&(0===t.length||a);n.style.display=c?"block":"none"}))}document.getElementById("close").addEventListener("click",(()=>{document.getElementById("modal").style.display="none"})),window.onclick=function(n){const e=document.getElementById("modal");n.target==e&&(e.style.display="none")};const y=document.createElement("header"),x=document.createElement("div"),_=document.createElement("div"),w=document.createElement("div");var S;_.className="sidenav",w.className="containerCards",x.className="sidebarAndCards",x.append(_),x.append(w),document.body.append(y),document.body.append(x),y.innerHTML='\n        <div class="icon"><img src="https://design.mts.ru/img/mts-logo.svg" alt=""><div class="name">LENDING</div></div>\n        <div class="text-field__icon">\n            <input class="text-field__input" type="search" name="search" id="search" placeholder="Введите имя или фамилию сотрудника">\n            <button class = "icon_button"><span class="text-field__aicon">\n              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>\n            </span></button>\n          </div>\n    ',document.querySelector(".icon_button").addEventListener("click",(()=>{!function(){const n=document.querySelector(".text-field__input"),e=n.value.toLowerCase();n.value="";const t=document.querySelectorAll(".card");let o=0;t.forEach((n=>{const t=n.querySelector(".name").textContent.toLowerCase(),r=n.querySelector(".surname").textContent.toLowerCase(),i=t+" "+r;t.includes(e)||r.includes(e)||i.includes(e)?(o++,n.style.display="block"):n.style.display="none"})),document.querySelector(".coincidences").style.display=o?"none":"block"}()})),S=_,g.u.forEach((n=>{S.appendChild(function(n){const e=document.createElement("div");return e.className="filter",e.innerHTML=`\n        <button class="dropdown-btn">${n.filter_name}</button>\n    `,e.appendChild(function(n){const e=document.createElement("div");return e.className="dropdown-container",n.value.forEach((t=>{const o=document.createElement("input");o.type="checkbox",o.value=t,o.name=n.filter_name;const r=document.createElement("label");r.textContent=t,r.prepend(o);const i=document.createElement("a");i.href="#",i.appendChild(r),o.addEventListener("change",b),e.appendChild(i)})),e}(n)),e}(n))})),document.querySelectorAll(".filter").forEach((function(n){let e=n.querySelector(".dropdown-container");n.addEventListener("click",(function(){"block"===e.style.display?e.style.display="none":e.style.display="block"}))})),function(n){n.innerHTML+='<div class="coincidences">Совпадения не найдены :(</div>',g.B.forEach((e=>{const t=document.createElement("div");t.className="card",t.innerHTML=`\n            <h2><div class="name">${e.Name}</div><div class="surname">${e.Surname}</div></h2>\n            <p><strong>Должность:</strong> ${e.Job_title}</p>\n            <p><strong>Телефон:</strong> ${e.Telephone}</p>\n            <p><strong>Город:</strong> <div class="city">${e.City}</div></p>\n            <p><strong>Роль:</strong> <div class="role">${e.Role}</div></p>\n        `,t.addEventListener("click",(()=>{!function(n){const e=document.querySelector(".modal");document.getElementById("modalBody").innerHTML=`\n        <p><strong>Имя:</strong> ${n.Name}</p>\n        <p><strong>Фамилия:</strong> ${n.Surname}</p>\n        <p><strong>Должность:</strong> ${n.Job_title}</p>\n        <p><strong>Телефон:</strong> ${n.Telephone}</p>\n        <p><strong>Город:</strong> ${n.City}</p>\n        <p><strong>Адрес:</strong> ${n.Address}</p>\n        <p><strong>Подразделение:</strong> ${n.Subdivision_1}</p>\n        <p><strong>Функциональный блок:</strong> ${n.Function_block}</p>\n        <p><strong>Подразделение 2:</strong> ${n.Subdivision_2}</p>\n        <p><strong>Команда:</strong> ${n.Subdivision_3}</p>\n        <p><strong>Роль:</strong> ${n.Role}</p>\n    `,e.style.display="block"}(e)})),n.appendChild(t)}))}(w)})();