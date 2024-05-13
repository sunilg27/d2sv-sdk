"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[4406],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var o=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),g=s(t),u=r,m=g["".concat(l,".").concat(u)]||g[u]||p[u]||a;return t?o.createElement(m,i(i({ref:n},d),{},{components:t})):o.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[g]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=t(8168),r=(t(6540),t(5680));const a={},i=void 0,c={unversionedId:"api/d2/controls/dialogs/generic/dialog.actions",id:"api/d2/controls/dialogs/generic/dialog.actions",title:"dialog.actions",description:"DialogActions : d2/sdk/controls/dialogs/generic/dialog.actions",source:"@site/articles/api/d2/controls/dialogs/generic/dialog.actions.md",sourceDirName:"api/d2/controls/dialogs/generic",slug:"/api/d2/controls/dialogs/generic/dialog.actions",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/dialogs/generic/dialog.actions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"dialog.action",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/dialogs/generic/dialog.action"},next:{title:"dialog.content.view",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/dialogs/generic/dialog.content.view"}},l={},s=[{value:"DialogActions : <code>d2/sdk/controls/dialogs/generic/dialog.actions</code>",id:"dialogactions--d2sdkcontrolsdialogsgenericdialogactions",level:2}],d={toc:s},g="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,o.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("a",{name:"module_DialogActions"}),(0,r.yg)("h2",{id:"dialogactions--d2sdkcontrolsdialogsgenericdialogactions"},"DialogActions : ",(0,r.yg)("code",null,"d2/sdk/controls/dialogs/generic/dialog.actions")),(0,r.yg)("p",null,"Collection of actionables for D2SV generic dialogs. Each screens of D2SV generic dialog offers a few footer buttons for the end user to\ninteract with in order to change state of the dialog. Items from this collection acts as handler of button clicks for D2SV generic dialog\nsuch that each item could be loosely attached to any of generic dialog's footer button after evaluating the action's matching conditions."),(0,r.yg)("p",null,"By default, D2SV runtime registers actions that matches buttons with id 'buttonOk', 'buttonCancel', 'cancel' & 'previous'. New actions could\nbe registered by means of extensions."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Extends"),": ",(0,r.yg)("a",{parentName:"p",href:"https://backbonejs.org/#Collection"},(0,r.yg)("code",null,"Backbone.Collection")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"See"),": ",(0,r.yg)("a",{parentName:"p",href:"./dialog.action"},"DialogAction"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"Example")," ",(0,r.yg)("em",{parentName:"p"},"(To register new actions, in extensions.json)"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'{\n "d2/sdk/controls/dialogs/generic/dialog.actions": {\n   "extensions": {\n     "mybundle": [\n       "mybundle/extensions/generic.dialog.actions"\n     ]\n   }\n }\n}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")," ",(0,r.yg)("em",{parentName:"p"},"(whereas generic.dialog.actions.js could be defined as)"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'import ActionA from \'mybundle/generic.dialog/action.a\';\nimport ActionB from \'mybundle/generic.dialog/action.b\';\n\nconst actionRules = [\n {equals: {"button.id": "custom1"}, action: ActionA},\n {equals: {"button.id": "custom2"}, action: ActionB}\n];\n\nexport default actionRules;\n')))}p.isMDXComponent=!0}}]);