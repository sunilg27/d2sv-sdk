"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[3396],{5680:(e,r,n)=>{n.d(r,{xA:()=>d,yg:()=>p});var a=n(6540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,a,o=function(e,r){if(null==e)return{};var n,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var r=a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var n=e.components,o=e.mdxType,t=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=c(n),u=o,p=g["".concat(l,".").concat(u)]||g[u]||m[u]||t;return n?a.createElement(p,i(i({ref:r},d),{},{components:n})):a.createElement(p,i({ref:r},d))}));function p(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=n.length,i=new Array(t);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[g]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<t;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5040:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var a=n(8168),o=(n(6540),n(5680));const t={},i=void 0,s={unversionedId:"api/d2/controls/dialogs/generic/dialog.schema.builders",id:"api/d2/controls/dialogs/generic/dialog.schema.builders",title:"dialog.schema.builders",description:"DialogSchemaBuilders : d2/sdk/controls/dialogs/generic/dialog.schema.builders",source:"@site/articles/api/d2/controls/dialogs/generic/dialog.schema.builders.md",sourceDirName:"api/d2/controls/dialogs/generic",slug:"/api/d2/controls/dialogs/generic/dialog.schema.builders",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/dialogs/generic/dialog.schema.builders",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"dialog.content.views",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/dialogs/generic/dialog.content.views"},next:{title:"dialog.state.method",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/dialogs/generic/dialog.state.method"}},l={},c=[{value:"DialogSchemaBuilders : <code>d2/sdk/controls/dialogs/generic/dialog.schema.builders</code>",id:"dialogschemabuilders--d2sdkcontrolsdialogsgenericdialogschemabuilders",level:2}],d={toc:c},g="wrapper";function m(e){let{components:r,...n}=e;return(0,o.yg)(g,(0,a.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("a",{name:"module_DialogSchemaBuilders"}),(0,o.yg)("h2",{id:"dialogschemabuilders--d2sdkcontrolsdialogsgenericdialogschemabuilders"},"DialogSchemaBuilders : ",(0,o.yg)("code",null,"d2/sdk/controls/dialogs/generic/dialog.schema.builders")),(0,o.yg)("p",null,"D2SV offers registration of custom transformers that work to transform a D2FS dialog structure into\nUI compatible form schema. This DialogSchemaBuilders collection holds all such registered transformers."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Extends"),": ",(0,o.yg)("a",{parentName:"p",href:"https://backbonejs.org/#Collection"},(0,o.yg)("code",null,"Backbone.Collection")),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Example")," ",(0,o.yg)("em",{parentName:"p"},"(To register a new transformer extensions.json is to be modified as below)"),"  "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'{\n "d2/sdk/controls/dialog/generic/dialog.schema.builder": {\n   "extensions": {\n     "mybundle": [\n       "mybundle/extensions/dialog.transformers"\n     ]\n   }\n }\n}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example")," ",(0,o.yg)("em",{parentName:"p"},"(whereas dialog.transformers.js may be defined as )"),"  "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"define([\n  'mybundle/dialogs/generic/my.dialog.transformer'\n], function(MyDialogTransformer){\n return [{\n   sequence: 1, //defines order of execution across all registered plugins of D2SV, transformers with same sequence number will get executed as per their corresponding D2SV plugin discovery order which is indeterministic in nature.\n   builderClass: MyDialogTransformer\n }];\n});\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example")," ",(0,o.yg)("em",{parentName:"p"},"(whereas my.dialog.transformer.js may be defined as )"),"  "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import DialogSchemaBuilder from 'd2/sdk/controls/dialogs/generic/dialog.schema.builder';\n\nclass MyDialogTransformer extends DialogSchemaBuilder {\n  buildSchema(formName, formData) {\n    //formName: D2FS dialog name\n     //formData: The dialog structure after its initial conversion into UI compatible schema\n     //this function should return the modified 'formData' after applying its own logic\n     //this function can also return a Promise which could later be resolve with the formData post transformation.\n  }\n}\n\nexport default MyDialogTransformer;\n")))}m.isMDXComponent=!0}}]);