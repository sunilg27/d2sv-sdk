"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[4258],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var o=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),d=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(a.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,y=u["".concat(a,".").concat(m)]||u[m]||p[m]||l;return t?o.createElement(y,i(i({ref:n},s),{},{components:t})):o.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var d=2;d<l;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9743:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=t(8168),r=(t(6540),t(5680));const l={},i=void 0,c={unversionedId:"api/d2/models/module.collection",id:"api/d2/models/module.collection",title:"module.collection",description:"ModuleCollection : d2/sdk/models/module.collection",source:"@site/articles/api/d2/models/module.collection.md",sourceDirName:"api/d2/models",slug:"/api/d2/models/module.collection",permalink:"/d2sv-sdk/24.2.0/api/d2/models/module.collection",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"resource.mixin",permalink:"/d2sv-sdk/24.2.0/api/d2/models/mixins/resource.mixin"},next:{title:"node.collection",permalink:"/d2sv-sdk/24.2.0/api/d2/models/node.collection"}},a={},d=[{value:"ModuleCollection : <code>d2/sdk/models/module.collection</code>",id:"modulecollection--d2sdkmodelsmodulecollection",level:2}],s={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("a",{name:"module_ModuleCollection"}),(0,r.yg)("h2",{id:"modulecollection--d2sdkmodelsmodulecollection"},"ModuleCollection : ",(0,r.yg)("code",null,"d2/sdk/models/module.collection")),(0,r.yg)("p",null,"Server module collection. Lists all the plugins registered with the D2 Smartview runtime as well as the underlying framework."),(0,r.yg)("p",null,"By convention it is required for any new dynamic component(plugins), that adds functionalities to the D2SV runtime, is required to register itself\nwith the runtime by declaring itself as an extension."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Extends"),": ",(0,r.yg)("a",{parentName:"p",href:"https://backbonejs.org/#Collection"},(0,r.yg)("code",null,"Backbone.Collection")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"Example")," ",(0,r.yg)("em",{parentName:"p"},"(To declare a D2SV extension component named ",'"',"someplugin",'"',", add in extension.json)"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'{\n  "d2/sdk/models/module.collection": {\n     "modules": {\n       "someplugin": { //Javascript namespace of the D2 Plugin which is supplying the D2SV component\n         "title": "This is a new cool plugin that shows hello world in an iframe",\n         "version": "1.0.0"\n       }\n     }\n   }\n}\n')))}p.isMDXComponent=!0}}]);