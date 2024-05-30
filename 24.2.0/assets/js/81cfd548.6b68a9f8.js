"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5968],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var o=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(n),g=l,d=s["".concat(c,".").concat(g)]||s[g]||x[g]||r;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=g;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:l,i[1]=a;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=n(8168),l=(n(6540),n(5680));const r={},i=void 0,a={unversionedId:"api/d2/utils/contexts/context.utils",id:"api/d2/utils/contexts/context.utils",title:"context.utils",description:"ContextUtil : d2/sdk/utils/contexts/context.utils",source:"@site/articles/api/d2/utils/contexts/context.utils.md",sourceDirName:"api/d2/utils/contexts",slug:"/api/d2/utils/contexts/context.utils",permalink:"/d2sv-sdk/24.2.0/api/d2/utils/contexts/context.utils",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"content.assist",permalink:"/d2sv-sdk/24.2.0/api/d2/utils/content.assist"},next:{title:"connector",permalink:"/d2sv-sdk/24.2.0/api/d2/utils/contexts/factories/connector"}},c={},p=[{value:"ContextUtil : <code>d2/sdk/utils/contexts/context.utils</code>",id:"contextutil--d2sdkutilscontextscontextutils",level:2},{value:"ContextUtil.createPageContext() \u21d2 <code>PageContext</code>",id:"contextutilcreatepagecontext--pagecontext",level:3},{value:"ContextUtil.getPerspectiveContext() \u21d2 <code>PerspectiveContext</code>",id:"contextutilgetperspectivecontext--perspectivecontext",level:3},{value:"ContextUtil~PageContext \u21d0 <code>Context</code>",id:"contextutilpagecontext--context",level:3},{value:"ContextUtil~PerspectiveContext \u21d0 <code>Context</code>",id:"contextutilperspectivecontext--context",level:3},{value:"ContextUtil~Context \u21d0 <code>IContext</code>",id:"contextutilcontext--icontext",level:3}],u={toc:p},s="wrapper";function x(e){let{components:t,...n}=e;return(0,l.yg)(s,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("a",{name:"module_ContextUtil"}),(0,l.yg)("h2",{id:"contextutil--d2sdkutilscontextscontextutils"},"ContextUtil : ",(0,l.yg)("code",null,"d2/sdk/utils/contexts/context.utils")),(0,l.yg)("p",null,"Utility to access ",(0,l.yg)("inlineCode",{parentName:"p"},"Context")," object(s) associated with runtime."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Extends"),": ",(0,l.yg)("code",null,"Object"),(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("strong",{parentName:"p"},"Todo")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Examples regular & unit test.")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#module_ContextUtil"},"ContextUtil")," : ",(0,l.yg)("code",null,"d2/sdk/utils/contexts/context.utils"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"static"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#module_ContextUtil.createPageContext"},".createPageContext()")," \u21d2 ",(0,l.yg)("code",null,"PageContext")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#module_ContextUtil.getPerspectiveContext"},".getPerspectiveContext()")," \u21d2 ",(0,l.yg)("code",null,"PerspectiveContext")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"inner"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#module_ContextUtil..PageContext"},"~PageContext")," \u21d0 ",(0,l.yg)("code",null,"Context")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#module_ContextUtil..PerspectiveContext"},"~PerspectiveContext")," \u21d0 ",(0,l.yg)("code",null,"Context")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#module_ContextUtil..Context"},"~Context")," \u21d0 ",(0,l.yg)("code",null,"IContext"))))))),(0,l.yg)("a",{name:"module_ContextUtil.createPageContext"}),(0,l.yg)("h3",{id:"contextutilcreatepagecontext--pagecontext"},"ContextUtil.createPageContext() \u21d2 ",(0,l.yg)("code",null,"PageContext")),(0,l.yg)("p",null,"Create and return a new ",(0,l.yg)("inlineCode",{parentName:"p"},"PageContext"),". Useful while writing unit tests, where settin-up a ",(0,l.yg)("inlineCode",{parentName:"p"},"PerspectiveContext")," is superflous."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.yg)("a",{parentName:"p",href:"#module_ContextUtil"},(0,l.yg)("code",null,"ContextUtil")),"  "),(0,l.yg)("a",{name:"module_ContextUtil.getPerspectiveContext"}),(0,l.yg)("h3",{id:"contextutilgetperspectivecontext--perspectivecontext"},"ContextUtil.getPerspectiveContext() \u21d2 ",(0,l.yg)("code",null,"PerspectiveContext")),(0,l.yg)("p",null,"Get the ",(0,l.yg)("inlineCode",{parentName:"p"},"PerspectiveContext")," instance associated with runtime."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.yg)("a",{parentName:"p",href:"#module_ContextUtil"},(0,l.yg)("code",null,"ContextUtil")),"  "),(0,l.yg)("a",{name:"module_ContextUtil..PageContext"}),(0,l.yg)("h3",{id:"contextutilpagecontext--context"},"ContextUtil~PageContext \u21d0 ",(0,l.yg)("code",null,"Context")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Kind"),": inner interface of ",(0,l.yg)("a",{parentName:"p",href:"#module_ContextUtil"},(0,l.yg)("code",null,"ContextUtil")),(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("strong",{parentName:"p"},"Extends"),": ",(0,l.yg)("code",null,"Context"),"  "),(0,l.yg)("a",{name:"module_ContextUtil..PerspectiveContext"}),(0,l.yg)("h3",{id:"contextutilperspectivecontext--context"},"ContextUtil~PerspectiveContext \u21d0 ",(0,l.yg)("code",null,"Context")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Kind"),": inner interface of ",(0,l.yg)("a",{parentName:"p",href:"#module_ContextUtil"},(0,l.yg)("code",null,"ContextUtil")),(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("strong",{parentName:"p"},"Extends"),": ",(0,l.yg)("code",null,"Context"),"  "),(0,l.yg)("a",{name:"module_ContextUtil..Context"}),(0,l.yg)("h3",{id:"contextutilcontext--icontext"},"ContextUtil~Context \u21d0 ",(0,l.yg)("code",null,"IContext")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Kind"),": inner interface of ",(0,l.yg)("a",{parentName:"p",href:"#module_ContextUtil"},(0,l.yg)("code",null,"ContextUtil")),(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("strong",{parentName:"p"},"Extends"),": ",(0,l.yg)("code",null,"IContext")))}x.isMDXComponent=!0}}]);