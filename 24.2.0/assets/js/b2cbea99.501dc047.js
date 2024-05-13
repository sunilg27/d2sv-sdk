"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[9040],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6895:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(8168),o=(r(6540),r(5680));const a={},i="Where to start?",l={unversionedId:"general/where.to.start",id:"general/where.to.start",title:"Where to start?",description:"Well, D2 Smartview UI has many UI constructs like command, shotcut tile, list tile, application scope",source:"@site/articles/general/where.to.start.md",sourceDirName:"general",slug:"/general/where.to.start",permalink:"/d2sv-sdk/24.2.0/general/where.to.start",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"general",previous:{title:"Understanding D2SV plugin project",permalink:"/d2sv-sdk/24.2.0/general/understand.d2sv.plugin"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"where-to-start"},"Where to start?"),(0,o.yg)("p",null,"Well, D2 Smartview UI has many UI constructs like command, shotcut tile, list tile, application scope\nperspective, rest-controller etc. Answer to the question, depends on what you're trying to accomplish."),(0,o.yg)("p",null,"A good starting point might be to look at the packaged samples. ",(0,o.yg)("inlineCode",{parentName:"p"},"D2-AdminGroups")," sample specifically covers all\nof the above stated constructs."),(0,o.yg)("p",null,"After extracting the sample, go thorugh ",(0,o.yg)("a",{parentName:"p",href:"./samples/3_01_admin_groups"},"D2 Admin Groups Sample")," documentation to know about\nthe key concepts and strctures implemented in the sample. Then -"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Build it once"),(0,o.yg)("li",{parentName:"ol"},"Deploy the compiled artifact in ",(0,o.yg)("inlineCode",{parentName:"li"},"WEB-INF\\lib")," folder of a running D2-Smartview"),(0,o.yg)("li",{parentName:"ol"},"Follow ",(0,o.yg)("a",{parentName:"li",href:"./howto/1_01_debug_sv_ui"},"How to debug")," to run the sample in debug mode and put break points(in internet browser's developer console) at\nat different javascript modules in the project.")),(0,o.yg)("p",null,"Once familiarized, try exploring different workspace assistant options to add new components to the sample\nor create a fresh plugin project and add it there to see how it works."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},'Familiarize yourself with the rest of "How to" topics.\nThe ',(0,o.yg)("a",{parentName:"p",href:"../api_overview"},"API documentation")," helps getting to know different parts of the front-end & back-end components.")))}d.isMDXComponent=!0}}]);