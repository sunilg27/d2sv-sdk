"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[9423],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var s=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,s,o=function(t,e){if(null==t)return{};var n,s,o={},i=Object.keys(t);for(s=0;s<i.length;s++)n=i[s],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)n=i[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var a=s.createContext({}),u=function(t){var e=s.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return s.createElement(a.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,a=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),p=u(n),k=o,m=p["".concat(a,".").concat(k)]||p[k]||d[k]||i;return n?s.createElement(m,l(l({ref:e},c),{},{components:n})):s.createElement(m,l({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,l=new Array(i);l[0]=k;var r={};for(var a in e)hasOwnProperty.call(e,a)&&(r[a]=e[a]);r.originalType=t,r[p]="string"==typeof t?t:o,l[1]=r;for(var u=2;u<i;u++)l[u]=n[u];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5455:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var s=n(7462),o=(n(7294),n(3905));const i={},l=void 0,r={unversionedId:"api/d2/utils/content.assist",id:"api/d2/utils/content.assist",title:"content.assist",description:"ContentAssistDialogUtil : d2/sdk/utils/content.assist",source:"@site/articles/api/d2/utils/content.assist.md",sourceDirName:"api/d2/utils",slug:"/api/d2/utils/content.assist",permalink:"/d2sv-sdk/23.4.0/api/d2/utils/content.assist",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"constants",permalink:"/d2sv-sdk/23.4.0/api/d2/utils/constants"},next:{title:"context.utils",permalink:"/d2sv-sdk/23.4.0/api/d2/utils/contexts/context.utils"}},a={},u=[{value:"ContentAssistDialogUtil : <code>d2/sdk/utils/content.assist</code>",id:"contentassistdialogutil--d2sdkutilscontentassist",level:2},{value:"ContentAssistDialogUtil.getContentAssistConfig(options) \u21d2 <code>jQuery.Promise</code>",id:"contentassistdialogutilgetcontentassistconfigoptions--jquerypromise",level:3},{value:"ContentAssistDialogUtil.getContentAssistOptions(options) \u21d2 <code>jQuery.Promise</code>",id:"contentassistdialogutilgetcontentassistoptionsoptions--jquerypromise",level:3}],c={toc:u},p="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,s.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"module_ContentAssistDialogUtil"}),(0,o.kt)("h2",{id:"contentassistdialogutil--d2sdkutilscontentassist"},"ContentAssistDialogUtil : ",(0,o.kt)("code",null,"d2/sdk/utils/content.assist")),(0,o.kt)("p",null,"Utility to fetch ContentAssist dialog related options"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Extends"),": ",(0,o.kt)("code",null,"Object"),"  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_ContentAssistDialogUtil"},"ContentAssistDialogUtil")," : ",(0,o.kt)("code",null,"d2/sdk/utils/content.assist"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_ContentAssistDialogUtil.getContentAssistConfig"},".getContentAssistConfig(options)")," \u21d2 ",(0,o.kt)("code",null,"jQuery.Promise")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_ContentAssistDialogUtil.getContentAssistOptions"},".getContentAssistOptions(options)")," \u21d2 ",(0,o.kt)("code",null,"jQuery.Promise"))))),(0,o.kt)("a",{name:"module_ContentAssistDialogUtil.getContentAssistConfig"}),(0,o.kt)("h3",{id:"contentassistdialogutilgetcontentassistconfigoptions--jquerypromise"},"ContentAssistDialogUtil.getContentAssistConfig(options) \u21d2 ",(0,o.kt)("code",null,"jQuery.Promise")),(0,o.kt)("p",null,"Get content assist dialog configuration"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.kt)("a",{parentName:"p",href:"#module_ContentAssistDialogUtil"},(0,o.kt)("code",null,"ContentAssistDialogUtil")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"jQuery.Promise")," - resolves & invokes ",(0,o.kt)("inlineCode",{parentName:"p"},"ContentAssistConfigCallback")," on success, rejects otherwise.  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"options"),(0,o.kt)("td",null,(0,o.kt)("code",null,"object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"options holder"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"options.context"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Context")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Application runtime context. See ",(0,o.kt)("a",{href:"./contexts/context.utils#Context"},"Context"),"."))),"  ")),(0,o.kt)("a",{name:"module_ContentAssistDialogUtil.getContentAssistOptions"}),(0,o.kt)("h3",{id:"contentassistdialogutilgetcontentassistoptionsoptions--jquerypromise"},"ContentAssistDialogUtil.getContentAssistOptions(options) \u21d2 ",(0,o.kt)("code",null,"jQuery.Promise")),(0,o.kt)("p",null,"Gets and caches the configuration for Content Assist dialog."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.kt)("a",{parentName:"p",href:"#module_ContentAssistDialogUtil"},(0,o.kt)("code",null,"ContentAssistDialogUtil")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"jQuery.Promise")," - resolves & invokes ",(0,o.kt)("inlineCode",{parentName:"p"},"ContentAssistOptionsCallback")," on success, rejects otherwise.  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"options"),(0,o.kt)("td",null,(0,o.kt)("code",null,"object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"options holder"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"options.context"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Context")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Application runtime context. See ",(0,o.kt)("a",{href:"./contexts/context.utils#Context"},"Context"),"."))),"  ")))}d.isMDXComponent=!0}}]);