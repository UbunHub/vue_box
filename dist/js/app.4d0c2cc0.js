(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ae981":"28c9a93c","chunk-2d0b5e12":"91dd4cff","chunk-321a16df":"65ae54fa","chunk-a72ad40c":"d7911688","chunk-ad71df96":"ec770537"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-321a16df":1,"chunk-a72ad40c":1,"chunk-ad71df96":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0ae981":"31d6cfe0","chunk-2d0b5e12":"31d6cfe0","chunk-321a16df":"06b6107f","chunk-a72ad40c":"5533db53","chunk-ad71df96":"fd35307f"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],d=l.getAttribute("data-href");if(d===r||d===o)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],s.parentNode.removeChild(s),n(c)},s.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var s=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1467:function(e,t,n){"use strict";var r=n("4e1d"),a=n.n(r);a.a},"4e1d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=(n("5c0b"),n("2877")),u={},i=Object(c["a"])(u,a,o,!1,null,null,null),l=i.exports,d=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("router-view",{staticClass:"tabba-router-view"}),n("van-tabbar",{attrs:{route:""}},[n("van-tabbar-item",{attrs:{replace:"",to:"/",icon:"home-o"}},[e._v("首页 ")]),n("van-tabbar-item",{attrs:{replace:"",to:"/menu",icon:"home-o"}},[e._v("菜单 ")]),n("van-tabbar-item",{attrs:{replace:"",to:"/hot",icon:"home-o"}},[e._v("潮品 ")]),n("van-tabbar-item",{attrs:{replace:"",to:"/cart",icon:"home-o"}},[e._v("购物车 ")]),n("van-tabbar-item",{attrs:{replace:"",to:"/about",icon:"search"}},[e._v(" 我的 ")])],1)],1)},s=[],p={name:"Tabbar",data:function(){return{active:0}}},h=p,b=(n("1467"),Object(c["a"])(h,f,s,!1,null,null,null)),m=b.exports;r["a"].use(d["a"]);var v=[{path:"/",name:"Tabbar",component:m,children:[{path:"/",name:"home",component:function(){return n.e("chunk-ad71df96").then(n.bind(null,"16c0"))}},{path:"/menu",name:"menu",component:function(){return n.e("chunk-a72ad40c").then(n.bind(null,"9a0b"))}},{path:"/hot",name:"hot",component:function(){return n.e("chunk-2d0ae981").then(n.bind(null,"0b70"))}},{path:"/cart",name:"cart",component:function(){return n.e("chunk-2d0b5e12").then(n.bind(null,"1b7b"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-321a16df").then(n.bind(null,"f820"))}}]}],g=new d["a"]({routes:v}),y=g,k=n("b970"),w=n("343b");n("157a");r["a"].use(k["a"]),r["a"].use(w["a"],{lazyComponent:!0}),r["a"].config.productionTip=!1,new r["a"]({router:y,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.4d0c2cc0.js.map