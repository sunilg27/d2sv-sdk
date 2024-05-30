"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5713],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,y=u["".concat(a,".").concat(m)]||u[m]||d[m]||l;return t?r.createElement(y,c(c({ref:n},s),{},{components:t})):r.createElement(y,c({ref:n},s))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,c=new Array(l);c[0]=m;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<l;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1456:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(8168),o=(t(6540),t(5680));const l={},c="NodeColumn2Collection",i={unversionedId:"api/nuc/models/node.columns2",id:"api/nuc/models/node.columns2",title:"NodeColumn2Collection",description:"Collects schemas of node properties:",source:"@site/articles/api/nuc/models/node.columns2.md",sourceDirName:"api/nuc/models",slug:"/api/nuc/models/node.columns2",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/node.columns2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"NodeChildren2Collection",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/node.children2/"},next:{title:"ToolItemMaskCollection",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/tool.item.mask/tool.item.mask.collection"}},a={},p=[],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"nodecolumn2collection"},"NodeColumn2Collection"),(0,o.yg)("p",null,"Collects schemas of node properties:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n  "column_key": "...",\n  "name": "...",\n  "type" ...,\n  "sort": ...\n}\n')),(0,o.yg)("p",null," or keys of custom columns:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n  "column_key": "..."\n}\n')),(0,o.yg)("p",null,"See ",(0,o.yg)("inlineCode",{parentName:"p"},"node.definitions")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"node.columns")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"NodeModel"),"."))}d.isMDXComponent=!0}}]);