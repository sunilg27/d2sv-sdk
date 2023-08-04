"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[258],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>g});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?t.createElement(g,i(i({ref:r},d),{},{components:n})):t.createElement(g,i({ref:r},d))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3533:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"api/d2/controls/dialogs/generic/dialog.schema.builders",id:"api/d2/controls/dialogs/generic/dialog.schema.builders",title:"dialog.schema.builders",description:"DialogSchemaBuilders : d2/sdk/controls/dialogs/generic/dialog.schema.builders",source:"@site/articles/api/d2/controls/dialogs/generic/dialog.schema.builders.md",sourceDirName:"api/d2/controls/dialogs/generic",slug:"/api/d2/controls/dialogs/generic/dialog.schema.builders",permalink:"/api/d2/controls/dialogs/generic/dialog.schema.builders",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"dialog.content.views",permalink:"/api/d2/controls/dialogs/generic/dialog.content.views"},next:{title:"dialog.state.method",permalink:"/api/d2/controls/dialogs/generic/dialog.state.method"}},s={},c=[{value:"DialogSchemaBuilders : <code>d2/sdk/controls/dialogs/generic/dialog.schema.builders</code>",id:"dialogschemabuilders--d2sdkcontrolsdialogsgenericdialogschemabuilders",level:2}],d={toc:c},m="wrapper";function u(e){let{components:r,...n}=e;return(0,a.kt)(m,(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"module_DialogSchemaBuilders"}),(0,a.kt)("h2",{id:"dialogschemabuilders--d2sdkcontrolsdialogsgenericdialogschemabuilders"},"DialogSchemaBuilders : ",(0,a.kt)("code",null,"d2/sdk/controls/dialogs/generic/dialog.schema.builders")),(0,a.kt)("p",null,"D2SV offers registration of custom transformers that work to transform a D2FS dialog structure into\nUI compatible form schema. This DialogSchemaBuilders collection holds all such registered transformers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends"),": ",(0,a.kt)("a",{parentName:"p",href:"https://backbonejs.org/#Collection"},(0,a.kt)("code",null,"Backbone.Collection")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(To register a new transformer extensions.json is to be modified as below)"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n "d2/sdk/controls/dialog/generic/dialog.schema.builder": {\n   "extensions": {\n     "mybundle": [\n       "mybundle/extensions/dialog.transformers"\n     ]\n   }\n }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(whereas dialog.transformers.js may be defined as )"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"define([\n  'mybundle/dialogs/generic/my.dialog.transformer'\n], function(MyDialogTransformer){\n return [{\n   sequence: 1, //defines order of execution across all registered plugins of D2SV, transformers with same sequence number will get executed as per their corresponding D2SV plugin discovery order which is indeterministic in nature.\n   builderClass: MyDialogTransformer\n }];\n});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(whereas my.dialog.transformer.js may be defined as )"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import DialogSchemaBuilder from 'd2/sdk/controls/dialogs/generic/dialog.schema.builder';\n\nclass MyDialogTransformer extends DialogSchemaBuilder {\n  buildSchema(formName, formData) {\n    //formName: D2FS dialog name\n     //formData: The dialog structure after its initial conversion into UI compatible schema\n     //this function should return the modified 'formData' after applying its own logic\n     //this function can also return a Promise which could later be resolve with the formData post transformation.\n  }\n}\n\nexport default MyDialogTransformer;\n")))}u.isMDXComponent=!0}}]);