"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5157],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var o=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,l=function(t,e){if(null==t)return{};var n,o,l={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=o.createContext({}),p=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return o.createElement(c.Provider,{value:e},t.children)},s="mdxType",x={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,c=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),s=p(n),d=l,k=s["".concat(c,".").concat(d)]||s[d]||x[d]||r;return n?o.createElement(k,i(i({ref:e},u),{},{components:n})):o.createElement(k,i({ref:e},u))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=d;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a[s]="string"==typeof t?t:l,i[1]=a;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6087:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=n(7462),l=(n(7294),n(3905));const r={},i=void 0,a={unversionedId:"api/d2/utils/contexts/context.utils",id:"api/d2/utils/contexts/context.utils",title:"context.utils",description:"ContextUtil : d2/sdk/utils/contexts/context.utils",source:"@site/articles/api/d2/utils/contexts/context.utils.md",sourceDirName:"api/d2/utils/contexts",slug:"/api/d2/utils/contexts/context.utils",permalink:"/d2sv-sdk/23.2.0/api/d2/utils/contexts/context.utils",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"content.assist",permalink:"/d2sv-sdk/23.2.0/api/d2/utils/content.assist"},next:{title:"connector",permalink:"/d2sv-sdk/23.2.0/api/d2/utils/contexts/factories/connector"}},c={},p=[{value:"ContextUtil : <code>d2/sdk/utils/contexts/context.utils</code>",id:"contextutil--d2sdkutilscontextscontextutils",level:2},{value:"ContextUtil.createPageContext() \u21d2 <code>PageContext</code>",id:"contextutilcreatepagecontext--pagecontext",level:3},{value:"ContextUtil.getPerspectiveContext() \u21d2 <code>PerspectiveContext</code>",id:"contextutilgetperspectivecontext--perspectivecontext",level:3},{value:"ContextUtil~PageContext \u21d0 <code>Context</code>",id:"contextutilpagecontext--context",level:3},{value:"ContextUtil~PerspectiveContext \u21d0 <code>Context</code>",id:"contextutilperspectivecontext--context",level:3},{value:"ContextUtil~Context \u21d0 <code>IContext</code>",id:"contextutilcontext--icontext",level:3}],u={toc:p},s="wrapper";function x(t){let{components:e,...n}=t;return(0,l.kt)(s,(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"module_ContextUtil"}),(0,l.kt)("h2",{id:"contextutil--d2sdkutilscontextscontextutils"},"ContextUtil : ",(0,l.kt)("code",null,"d2/sdk/utils/contexts/context.utils")),(0,l.kt)("p",null,"Utility to access ",(0,l.kt)("inlineCode",{parentName:"p"},"Context")," object(s) associated with runtime."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Extends"),": ",(0,l.kt)("code",null,"Object"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Todo")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Examples regular & unit test.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_ContextUtil"},"ContextUtil")," : ",(0,l.kt)("code",null,"d2/sdk/utils/contexts/context.utils"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"static"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_ContextUtil.createPageContext"},".createPageContext()")," \u21d2 ",(0,l.kt)("code",null,"PageContext")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_ContextUtil.getPerspectiveContext"},".getPerspectiveContext()")," \u21d2 ",(0,l.kt)("code",null,"PerspectiveContext")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"inner"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_ContextUtil..PageContext"},"~PageContext")," \u21d0 ",(0,l.kt)("code",null,"Context")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_ContextUtil..PerspectiveContext"},"~PerspectiveContext")," \u21d0 ",(0,l.kt)("code",null,"Context")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_ContextUtil..Context"},"~Context")," \u21d0 ",(0,l.kt)("code",null,"IContext"))))))),(0,l.kt)("a",{name:"module_ContextUtil.createPageContext"}),(0,l.kt)("h3",{id:"contextutilcreatepagecontext--pagecontext"},"ContextUtil.createPageContext() \u21d2 ",(0,l.kt)("code",null,"PageContext")),(0,l.kt)("p",null,"Create and return a new ",(0,l.kt)("inlineCode",{parentName:"p"},"PageContext"),". Useful while writing unit tests, where settin-up a ",(0,l.kt)("inlineCode",{parentName:"p"},"PerspectiveContext")," is superflous."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#module_ContextUtil"},(0,l.kt)("code",null,"ContextUtil")),"  "),(0,l.kt)("a",{name:"module_ContextUtil.getPerspectiveContext"}),(0,l.kt)("h3",{id:"contextutilgetperspectivecontext--perspectivecontext"},"ContextUtil.getPerspectiveContext() \u21d2 ",(0,l.kt)("code",null,"PerspectiveContext")),(0,l.kt)("p",null,"Get the ",(0,l.kt)("inlineCode",{parentName:"p"},"PerspectiveContext")," instance associated with runtime."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#module_ContextUtil"},(0,l.kt)("code",null,"ContextUtil")),"  "),(0,l.kt)("a",{name:"module_ContextUtil..PageContext"}),(0,l.kt)("h3",{id:"contextutilpagecontext--context"},"ContextUtil~PageContext \u21d0 ",(0,l.kt)("code",null,"Context")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": inner interface of ",(0,l.kt)("a",{parentName:"p",href:"#module_ContextUtil"},(0,l.kt)("code",null,"ContextUtil")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Extends"),": ",(0,l.kt)("code",null,"Context"),"  "),(0,l.kt)("a",{name:"module_ContextUtil..PerspectiveContext"}),(0,l.kt)("h3",{id:"contextutilperspectivecontext--context"},"ContextUtil~PerspectiveContext \u21d0 ",(0,l.kt)("code",null,"Context")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": inner interface of ",(0,l.kt)("a",{parentName:"p",href:"#module_ContextUtil"},(0,l.kt)("code",null,"ContextUtil")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Extends"),": ",(0,l.kt)("code",null,"Context"),"  "),(0,l.kt)("a",{name:"module_ContextUtil..Context"}),(0,l.kt)("h3",{id:"contextutilcontext--icontext"},"ContextUtil~Context \u21d0 ",(0,l.kt)("code",null,"IContext")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": inner interface of ",(0,l.kt)("a",{parentName:"p",href:"#module_ContextUtil"},(0,l.kt)("code",null,"ContextUtil")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Extends"),": ",(0,l.kt)("code",null,"IContext")))}x.isMDXComponent=!0}}]);