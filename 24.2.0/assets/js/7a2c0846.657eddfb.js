"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2444],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(8168),i=(n(6540),n(5680));const o={sidebar_position:2.06},a="Build all plugins in the workspace",s={unversionedId:"general/ws_assistant/2_06_build.plugins",id:"general/ws_assistant/2_06_build.plugins",title:"Build all plugins in the workspace",description:"This option builds all the plugin projects in the workspace whose entries are found in the aggregator",source:"@site/articles/general/ws_assistant/2_06_build.plugins.md",sourceDirName:"general/ws_assistant",slug:"/general/ws_assistant/2_06_build.plugins",permalink:"/d2sv-sdk/24.2.0/general/ws_assistant/2_06_build.plugins",draft:!1,tags:[],version:"current",sidebarPosition:2.06,frontMatter:{sidebar_position:2.06},sidebar:"general",previous:{title:"Add D2-REST controller support to a plugin project",permalink:"/d2sv-sdk/24.2.0/general/ws_assistant/2_05_add.rest.controller"},next:{title:"Checkout documentation",permalink:"/d2sv-sdk/24.2.0/general/ws_assistant/2_07_open.sdk.documentation"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"build-all-plugins-in-the-workspace"},"Build all plugins in the workspace"),(0,i.yg)("p",null,"This option builds all the plugin projects in the workspace whose entries are found in the aggregator\n",(0,i.yg)("inlineCode",{parentName:"p"},"pom.xml")," file in the workspace."),(0,i.yg)("p",null,"Basically it runs ",(0,i.yg)("inlineCode",{parentName:"p"},"mvn clean package")," command in the workspace root directory. As part of this option,\nfinal build output from each of the plugin project is collected in the ",(0,i.yg)("inlineCode",{parentName:"p"},"dist")," directory right under the\nworkspace root directory."),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"Use this option when at least one plugin project exists in the workspace.")))}d.isMDXComponent=!0}}]);