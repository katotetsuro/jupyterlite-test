var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,o,i,a,u,l,s,f,d,c,p,h,v,b,g,m={299:(e,r,t)=>{var n={"./index":()=>t.e(895).then((()=>()=>t(895))),"./extension":()=>t.e(895).then((()=>()=>t(895))),"./style":()=>t.e(747).then((()=>()=>t(747)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),i=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>i})}},y={};function w(e){var r=y[e];if(void 0!==r)return r.exports;var t=y[e]={id:e,exports:{}};return m[e](t,t.exports,w),t.exports}w.m=m,w.c=y,w.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return w.d(r,{a:r}),r},w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>e+"."+{213:"8aaac7ad731027476a9d",747:"10a6f744ae4fc802a94c",895:"7cb441ab57069eb8f09d"}[e]+".js?v="+{213:"8aaac7ad731027476a9d",747:"10a6f744ae4fc802a94c",895:"7cb441ab57069eb8f09d"}[e],w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@jupyterlite/xeus-sqlite-kernel:",w.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){a=f;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,w.nc&&a.setAttribute("nonce",w.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var d=(r,n)=>{a.onerror=a.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),u&&document.head.appendChild(a)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{w.S={};var e={},r={};w.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var i=w.S[t],a="@jupyterlite/xeus-sqlite-kernel",u=[];return"default"===t&&((e,r,t,n)=>{var o=i[e]=i[e]||{},u=o[r];(!u||!u.loaded&&(1!=!u.eager?n:a>u.from))&&(o[r]={get:()=>w.e(895).then((()=>()=>w(895))),from:a,eager:!1})})("@jupyterlite/xeus-sqlite-kernel","0.1.2"),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var r=w.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],i=(typeof o)[0];if(n>=r.length)return"u"==i;var a=r[n],u=(typeof a)[0];if(i!=u)return"o"==i&&"n"==u||"s"==u||"u"==i;if("o"!=i&&"u"!=i&&o!=a)return o<a;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,i=1;i<e.length;i++)n--,t+="u"==(typeof(u=e[i]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var a=[];for(i=1;i<e.length;i++){var u=e[i];a.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?a.pop()+" "+a.pop():o(u))}return l();function l(){return a.pop().replace(/^\((.+)\)$/,"$1")}},i=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var a=0,u=1,l=!0;;u++,a++){var s,f,d=u<e.length?(typeof e[u])[0]:"";if(a>=r.length||"o"==(f=(typeof(s=r[a]))[0]))return!l||("u"==d?u>n&&!o:""==d!=o);if("u"==f){if(!l||"u"!=d)return!1}else if(l)if(d==f)if(u<=n){if(s!=e[u])return!1}else{if(o?s>e[u]:s<e[u])return!1;s!=e[u]&&(l=!1)}else if("s"!=d&&"n"!=d){if(o||u<=n)return!1;l=!1,u--}else{if(u<=n||f<d!=o)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,u--)}}var c=[],p=c.pop.bind(c);for(a=1;a<e.length;a++){var h=e[a];c.push(1==h?p()|p():2==h?p()&p():h?i(h,r):!p())}return!!p()},a=(e,r)=>{var t=w.S[e];if(!t||!w.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",s=(e,r,t,n)=>{var o=u(e,t);return d(e[t][o])},f=(e,r,t,n)=>{var o=u(e,t);return i(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(l(e,t,o,n)),d(e[t][o])},d=e=>(e.loaded=1,e.get()),p=(c=e=>function(r,t,n,o){var i=w.I(r);return i&&i.then?i.then(e.bind(e,r,w.S[r],t,n,o)):e(r,w.S[r],t,n,o)})(((e,r,t)=>(a(e,t),s(r,0,t)))),h=c(((e,r,t,n)=>(a(e,t),f(r,0,t,n)))),v={},b={168:()=>h("default","@lumino/signaling",[1,1,4,3]),635:()=>p("default","@jupyterlite/kernel"),797:()=>h("default","@lumino/coreutils",[1,1,5,3])},g={895:[168,635,797]},w.f.consumes=(e,r)=>{w.o(g,e)&&g[e].forEach((e=>{if(w.o(v,e))return r.push(v[e]);var t=r=>{v[e]=0,w.m[e]=t=>{delete w.c[e],t.exports=r()}},n=r=>{delete v[e],w.m[e]=t=>{throw delete w.c[e],r}};try{var o=b[e]();o.then?r.push(v[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{w.b=document.baseURI||self.location.href;var e={108:0};w.f.j=(r,t)=>{var n=w.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=w.p+w.u(r),a=new Error;w.l(i,(t=>{if(w.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[i,a,u]=t,l=0;if(i.some((r=>0!==e[r]))){for(n in a)w.o(a,n)&&(w.m[n]=a[n]);u&&u(w)}for(r&&r(t);l<i.length;l++)o=i[l],w.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_jupyterlite_xeus_sqlite_kernel=self.webpackChunk_jupyterlite_xeus_sqlite_kernel||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var k=w(299);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyterlite/xeus-sqlite-kernel"]=k})();