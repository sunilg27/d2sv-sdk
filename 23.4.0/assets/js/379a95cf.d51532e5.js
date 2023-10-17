"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),d=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(a,".").concat(m)]||u[m]||p[m]||l;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var d=2;d<l;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const l={},i=void 0,c={unversionedId:"api/d2/models/module.collection",id:"api/d2/models/module.collection",title:"module.collection",description:"ModuleCollection : d2/sdk/models/module.collection",source:"@site/articles/api/d2/models/module.collection.md",sourceDirName:"api/d2/models",slug:"/api/d2/models/module.collection",permalink:"/d2sv-sdk/23.4.0/api/d2/models/module.collection",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"resource.mixin",permalink:"/d2sv-sdk/23.4.0/api/d2/models/mixins/resource.mixin"},next:{title:"node.collection",permalink:"/d2sv-sdk/23.4.0/api/d2/models/node.collection"}},a={},d=[{value:"ModuleCollection : <code>d2/sdk/models/module.collection</code>",id:"modulecollection--d2sdkmodelsmodulecollection",level:2}],s={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"module_ModuleCollection"}),(0,r.kt)("h2",{id:"modulecollection--d2sdkmodelsmodulecollection"},"ModuleCollection : ",(0,r.kt)("code",null,"d2/sdk/models/module.collection")),(0,r.kt)("p",null,"Server module collection. Lists all the plugins registered with the D2 Smartview runtime as well as the underlying framework."),(0,r.kt)("p",null,"By convention it is required for any new dynamic component(plugins), that adds functionalities to the D2SV runtime, is required to register itself\nwith the runtime by declaring itself as an extension."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends"),": ",(0,r.kt)("a",{parentName:"p",href:"https://backbonejs.org/#Collection"},(0,r.kt)("code",null,"Backbone.Collection")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(To declare a D2SV extension component named ",'"',"someplugin",'"',", add in extension.json)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "d2/sdk/models/module.collection": {\n     "modules": {\n       "someplugin": { //Javascript namespace of the D2 Plugin which is supplying the D2SV component\n         "title": "This is a new cool plugin that shows hello world in an iframe",\n         "version": "1.0.0"\n       }\n     }\n   }\n}\n')))}p.isMDXComponent=!0}}]);