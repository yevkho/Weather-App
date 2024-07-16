(()=>{"use strict";var n={365:(n,e,o)=>{o.d(e,{A:()=>a});var t=o(354),r=o.n(t),i=o(314),A=o.n(i)()(r());A.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  line-height: 1.5;\n  font-family: system-ui;\n  --green-color: #059669;\n  --grey-color: #e2e8f0;\n  --gold-color: #f7ad2d;\n  --boxshadow: 2px 2px 4px 1px rgb(0 0 0 / 10%);\n}\n\nheader {\n  background-color: var(--green-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  font-size: 2rem;\n  padding: 15px 30px;\n}\n\n.dropdown {\n  position: relative;\n}\n\n.dropdown button {\n  background-color: var(--green-color);\n  border: none;\n  cursor: pointer;\n  display: block;\n}\n\n.dropdown button:hover,\nbutton:focus {\n  background-color: rgba(148, 148, 148, 0.383);\n}\n\n.dropdown img {\n  width: 40px;\n  display: block;\n}\n\n.dropdown .menuItems {\n  font-size: 1.1rem;\n  color: rgba(0, 0, 0, 0.466);\n  background-color: var(--grey-color);\n  padding: 5px 10px;\n  box-shadow: var(--boxshadow);\n\n  position: absolute;\n  left: -40%;\n  /* display: none; */\n  visibility: hidden;\n  opacity: 0;\n}\n\n.dropdown p:hover {\n  background-color: #ddd;\n  cursor: pointer;\n}\n\n.dropdown .show {\n  visibility: visible;\n  opacity: 1;\n}\n\n/* CAROUSEL */\n\n.slidesFrame {\n  width: 400px;\n  overflow: hidden;\n  position: relative;\n  margin: auto;\n}\n\n.slidesContainer {\n  display: flex;\n}\n\n.slide {\n  width: 400px;\n  flex-shrink: 0;\n}\n\n.slide img {\n  width: 100%;\n  vertical-align: middle;\n}\n\n.slidesFrame button {\n  width: 25px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: rgba(255, 255, 255, 0.5);\n  border: none;\n  cursor: pointer;\n  z-index: 1;\n}\n\nbutton.right {\n  right: 0;\n}\n\n.navigation {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px 0;\n}\n\n.navigation .placementIndicator {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: 0;\n  background: rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n}\n\n.placementIndicator.current {\n  background: rgba(0, 0, 0, 0.7);\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;EACrB,6CAA6C;AAC/C;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,eAAe;EACf,cAAc;AAChB;;AAEA;;EAEE,4CAA4C;AAC9C;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,2BAA2B;EAC3B,mCAAmC;EACnC,iBAAiB;EACjB,4BAA4B;;EAE5B,kBAAkB;EAClB,UAAU;EACV,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,UAAU;AACZ;;AAEA,aAAa;;AAEb;EACE,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;EAC3B,0CAA0C;EAC1C,YAAY;EACZ,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  line-height: 1.5;\n  font-family: system-ui;\n  --green-color: #059669;\n  --grey-color: #e2e8f0;\n  --gold-color: #f7ad2d;\n  --boxshadow: 2px 2px 4px 1px rgb(0 0 0 / 10%);\n}\n\nheader {\n  background-color: var(--green-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  font-size: 2rem;\n  padding: 15px 30px;\n}\n\n.dropdown {\n  position: relative;\n}\n\n.dropdown button {\n  background-color: var(--green-color);\n  border: none;\n  cursor: pointer;\n  display: block;\n}\n\n.dropdown button:hover,\nbutton:focus {\n  background-color: rgba(148, 148, 148, 0.383);\n}\n\n.dropdown img {\n  width: 40px;\n  display: block;\n}\n\n.dropdown .menuItems {\n  font-size: 1.1rem;\n  color: rgba(0, 0, 0, 0.466);\n  background-color: var(--grey-color);\n  padding: 5px 10px;\n  box-shadow: var(--boxshadow);\n\n  position: absolute;\n  left: -40%;\n  /* display: none; */\n  visibility: hidden;\n  opacity: 0;\n}\n\n.dropdown p:hover {\n  background-color: #ddd;\n  cursor: pointer;\n}\n\n.dropdown .show {\n  visibility: visible;\n  opacity: 1;\n}\n\n/* CAROUSEL */\n\n.slidesFrame {\n  width: 400px;\n  overflow: hidden;\n  position: relative;\n  margin: auto;\n}\n\n.slidesContainer {\n  display: flex;\n}\n\n.slide {\n  width: 400px;\n  flex-shrink: 0;\n}\n\n.slide img {\n  width: 100%;\n  vertical-align: middle;\n}\n\n.slidesFrame button {\n  width: 25px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: rgba(255, 255, 255, 0.5);\n  border: none;\n  cursor: pointer;\n  z-index: 1;\n}\n\nbutton.right {\n  right: 0;\n}\n\n.navigation {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px 0;\n}\n\n.navigation .placementIndicator {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: 0;\n  background: rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n}\n\n.placementIndicator.current {\n  background: rgba(0, 0, 0, 0.7);\n}\n"],sourceRoot:""}]);const a=A},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var o="",t=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),t&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=n(e),t&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(n,o,t,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(t)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(A[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);t&&A[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],o=n[3];if(!o)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(r," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function o(n){for(var o=-1,t=0;t<e.length;t++)if(e[t].identifier===n){o=t;break}return o}function t(n,t){for(var i={},A=[],a=0;a<n.length;a++){var c=n[a],s=t.base?c[0]+t.base:c[0],d=i[s]||0,l="".concat(s," ").concat(d);i[s]=d+1;var p=o(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var E=r(u,t);t.byIndex=a,e.splice(a,0,{identifier:l,updater:E,references:1})}A.push(l)}return A}function r(n,e){var o=e.domAPI(e);return o.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;o.update(n=e)}else o.remove()}}n.exports=function(n,r){var i=t(n=n||[],r=r||{});return function(n){n=n||[];for(var A=0;A<i.length;A++){var a=o(i[A]);e[a].references--}for(var c=t(n,r),s=0;s<i.length;s++){var d=o(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{var e={};n.exports=function(n,o){var t=function(n){if(void 0===e[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,o)=>{n.exports=function(n){var e=o.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(o){!function(n,e,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,r&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function o(t){var r=e[t];if(void 0!==r)return r.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,o),i.exports}o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),o.nc=void 0;var t=o(72),r=o.n(t),i=o(825),A=o.n(i),a=o(659),c=o.n(a),s=o(56),d=o.n(s),l=o(540),p=o.n(l),u=o(113),E=o.n(u),f=o(365),C={};C.styleTagTransform=E(),C.setAttributes=d(),C.insert=c().bind(null,"head"),C.domAPI=A(),C.insertStyleElement=p(),r()(f.A,C),f.A&&f.A.locals&&f.A.locals,function(n,e){const o=function(){e.classList.toggle("show")};n.addEventListener("click",(function(n){n.stopPropagation(),o()})),document.documentElement.addEventListener("click",(function(){e.classList.contains("show")&&o()}))}(document.querySelector(".hamb"),document.querySelector(".menuItems"));const g=document.querySelector(".slidesContainer"),b=document.querySelectorAll(".slide"),m=document.querySelector(".right"),h=document.querySelector(".left"),v=document.querySelector(".navigation"),B=document.querySelectorAll(".placementIndicator");let y=0;const x=function(){y++,y>=b.length&&(y=0),g.style.transform=`translateX(${400*-y}px)`},w=function(){B.forEach((function(n){n.classList.remove("current")})),B[y].classList.add("current")};m.addEventListener("click",(()=>{x(),w()})),h.addEventListener("click",(()=>{y--,y<0&&(y=b.length-1),g.style.transform=`translateX(${400*-y}px)`,w()})),v.addEventListener("click",(n=>{n.target!==v&&(y=[...B].indexOf(n.target),w(),g.style.transform=`translateX(${400*-y}px)`)})),setInterval((function(){x(),w()}),5e3)})();
//# sourceMappingURL=main.js.map