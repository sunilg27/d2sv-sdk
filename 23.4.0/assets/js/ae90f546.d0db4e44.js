"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[1669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={},l="CSS",s={unversionedId:"api/nuc/lib/css",id:"api/nuc/lib/css",title:"CSS",description:"Bundles and loads CSS stylesheets referred from JavaScript module dependendencies.",source:"@site/articles/api/nuc/lib/css.md",sourceDirName:"api/nuc/lib",slug:"/api/nuc/lib/css",permalink:"/d2sv-sdk/23.4.0/api/nuc/lib/css",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"PageContext",permalink:"/d2sv-sdk/23.4.0/api/nuc/contexts/page/page.context"},next:{title:"I18n",permalink:"/d2sv-sdk/23.4.0/api/nuc/lib/i18n"}},o={},d=[{value:"Load CSS bundle",id:"load-css-bundle",level:2},{value:"styleLoad(require, bundleName, separateRTLCSS?)",id:"styleloadrequire-bundlename-separatertlcss",level:3}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"css"},"CSS"),(0,a.kt)("p",null,"Bundles and loads CSS stylesheets referred from JavaScript module dependendencies."),(0,a.kt)("p",null,"TODO: Write the documentation."),(0,a.kt)("h2",{id:"load-css-bundle"},"Load CSS bundle"),(0,a.kt)("p",null,"Stylesheet bundles are loaded by a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"styleLoad")," in bundle indexes, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"define([\n  ...\n], {});\n\nrequire(['require', 'css'], function (require, css) {\n  css.styleLoad(require, 'csui/bundles/csui-browse');\n});\n")),(0,a.kt)("h3",{id:"styleloadrequire-bundlename-separatertlcss"},"styleLoad(require, bundleName, separateRTLCSS?)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"require")," - the ",(0,a.kt)("inlineCode",{parentName:"li"},"require")," function required for the module, where the ",(0,a.kt)("inlineCode",{parentName:"li"},"styleLoad")," is going to be called"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bundleName")," - the name of the module bundle, for which the stylesheet will be loaded"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"separateRTLCSS")," - if the stylesheet for the RTL text-writing direction is in the same or in a separate file (default is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),")")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"separateRTLCSS")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or not specified and the selected UI language requires the RTL text-writing direction, the stylesheet name will include the suffix ",(0,a.kt)("inlineCode",{parentName:"p"},"-rtl"),". The RTL stylesheet will be used instead of the default one:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Bundle name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"LTR text-writing direction"),(0,a.kt)("th",{parentName:"tr",align:"left"},"RTL text-writing direction"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"csui/bundles/csui-browse")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"csui/bundles/csui-browse.css")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"csui/bundles/csui-browse-rtl.css"))))),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"separateRTLCSS")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," and the selected UI language requires the RTL text-writing direction, the default stylesheet name will be used. The default stylesheet is supposed to contain styles supporting both LTR and RTL text-writing direction:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Bundle name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"LTR text-writing direction"),(0,a.kt)("th",{parentName:"tr",align:"left"},"RTL text-writing direction"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"csui/bundles/csui-browse")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"csui/bundles/csui-browse.css")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"csui/bundles/csui-browse.css"))))))}c.isMDXComponent=!0}}]);