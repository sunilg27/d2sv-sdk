"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2839],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(c,".").concat(d)]||u[d]||g[d]||i;return t?a.createElement(m,l(l({ref:n},s),{},{components:t})):a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={},l="I18n",o={unversionedId:"api/nuc/lib/i18n",id:"api/nuc/lib/i18n",title:"I18n",description:"Carries language settings and loads language modules for the selected locale.",source:"@site/articles/api/nuc/lib/i18n.md",sourceDirName:"api/nuc/lib",slug:"/api/nuc/lib/i18n",permalink:"/d2sv-sdk/23.4.0/api/nuc/lib/i18n",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"SynchronizedContext",permalink:"/d2sv-sdk/23.4.0/api/nuc/contexts/synchronized.context"},next:{title:"RequireJS",permalink:"/d2sv-sdk/23.4.0/api/nuc/lib/require"}},c={},p=[{value:"Accept-Language in AJAX Calls",id:"accept-language-in-ajax-calls",level:2}],s={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"i18n"},"I18n"),(0,r.kt)("p",null,"Carries language settings and loads language modules for the selected locale."),(0,r.kt)("p",null,"TODO: Write the documentation."),(0,r.kt)("h2",{id:"accept-language-in-ajax-calls"},"Accept-Language in AJAX Calls"),(0,r.kt)("p",null,"Smart UI has always set the chosen UI language to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header, when making AJAX calls via ",(0,r.kt)("inlineCode",{parentName:"p"},"Connector"),". It ensures a consistent language of static assets (language pack) and the data (REST API responses). The UI language is chosen by the ",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," setting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"require(['i18n'], function (i18n) {\n  console.log('locale:', i18n.settings.locale);\n});\n")),(0,r.kt)("p",null,"If you want to use a different locale for the data, you can set the property ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptLanguage"),", which will be sent to the server instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"locale"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"require.config({\n  config: {\n    i18n: {\n      locale: 'en-US',\n      acceptLanguage: 'en-AU'\n    }\n  }\n});\n")),(0,r.kt)("p",null,"The values of both ",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptLanguage")," have to comply with ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/search/bcp47"},"BCP 47"),". They are case-insensitive and Smart UI will normalize them to lower-case before using them for loading static assets or sending in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header."),(0,r.kt)("p",null,"CS uses the property ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n.settings.userMetadataLanguage")," to support multi-lingual UI. Unfortunately, this property does not follow BCP 47. If ",(0,r.kt)("inlineCode",{parentName:"p"},"userMetadataLanguage")," is set and ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptLanguage")," is unset, Smart UI will convert the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"userMetadataLanguage")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptLanguage"),". If both ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptLanguage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"userMetadataLanguage")," are unset, Smart UI will set the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptLanguage")," to stay compatible with previous versions."),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptLanguage")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," will stop Smart UI from setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header in AJAX calls:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"require.config({\n  config: {\n    i18n: {\n      locale: 'en',\n      acceptLanguage: null\n    }\n  }\n});\n")))}g.isMDXComponent=!0}}]);