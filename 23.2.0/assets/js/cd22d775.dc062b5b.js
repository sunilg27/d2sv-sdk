"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[3959],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=a.createContext({}),i=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=i(e.components);return a.createElement(m.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=i(t),p=l,k=s["".concat(m,".").concat(p)]||s[p]||u[p]||r;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=p;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c[s]="string"==typeof e?e:l,o[1]=c;for(var i=2;i<r;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var a=t(7462),l=(t(7294),t(3905));const r={},o=void 0,c={unversionedId:"api/d2/commands/call.service.command",id:"api/d2/commands/call.service.command",title:"call.service.command",description:"CallServiceCommand : d2/sdk/commands/call.service.command",source:"@site/articles/api/d2/commands/call.service.command.md",sourceDirName:"api/d2/commands",slug:"/api/d2/commands/call.service.command",permalink:"/d2sv-sdk/23.2.0/api/d2/commands/call.service.command",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Number Formatting (nuc/utils/types/number)",permalink:"/d2sv-sdk/23.2.0/api/nuc/utils/types/number"},next:{title:"command",permalink:"/d2sv-sdk/23.2.0/api/d2/commands/command"}},m={},i=[{value:"CallServiceCommand : <code>d2/sdk/commands/call.service.command</code>",id:"callservicecommand--d2sdkcommandscallservicecommand",level:2},{value:"CallServiceCommand~beforeServiceCall(nodes, commandData) \u21d2 <code>Object</code>",id:"callservicecommandbeforeservicecallnodes-commanddata--object",level:3},{value:"CallServiceCommand~afterServiceCall(nodes, commandData, responseProperties) \u21d2",id:"callservicecommandafterservicecallnodes-commanddata-responseproperties-",level:3}],d={toc:i},s="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(s,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"module_CallServiceCommand"}),(0,l.kt)("h2",{id:"callservicecommand--d2sdkcommandscallservicecommand"},"CallServiceCommand : ",(0,l.kt)("code",null,"d2/sdk/commands/call.service.command")),(0,l.kt)("p",null,"Base class for implementing command/menu that invokes a D2FS serive method. D2 Smartview runtime already provides an OOTB binding\nfor such a command implementation. However, to suit particular business needs where an OOTB binding does not suffice, a new implementation\nextending from this module can be used to define such custom bindings."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Extends"),": ",(0,l.kt)("code",null,"CommandModel"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"See")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./command"},"CommandModel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./node.actions.rules"},"NodeActionsRules"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")," ",(0,l.kt)("em",{parentName:"p"},"(to register binding for a custom implementation, add in extension.json)"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'\n{\n  "d2/sdk/commands/node.actions.rules": {\n     "extensions": {\n        "mybundle": {\n           "mybundle/commands/my.node.actions.rules"\n        }\n     }\n   }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")," ",(0,l.kt)("em",{parentName:"p"},"(whereas my.node.actions.rules.js is defined similar to)"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\ndefine([], function(){\n   'use strict';\n\n   return [\n     {\n       command_key: 'D2-CustomCallService',\n       decides: function(item) {\n         return item.action === 'D2_ACTION_EXECUTE' &&\n           item.actionParameters && item.actionParameters.eService === 'PermissionActionService';\n       }\n       iconName: 'some_icon'\n     }\n   ];\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")," ",(0,l.kt)("em",{parentName:"p"},"( to register an implementation with command collection, in extension.json )"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "d2/sdk/utils/commands": {\n     "extensions": {\n       "mybundle": {\n         "mybundle/commands/my.custom.call.service"\n       }\n     }\n   }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")," ",(0,l.kt)("em",{parentName:"p"},"(module mybundle/commands/my.custom.call.service can be defined as)"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\ndefine([\n   'nuc/lib/jquery',\n   'd2/sdk/commands/call.service.command'\n], function($, CallServiceCommandImpl){\n var MyCustomCallService = CallServiceCommandImpl.extend({\n    defaults: {\n       command_key: 'D2-CustomCallService',\n       signature: 'D2-CustomCallService',\n       name: 'Custom call service'\n    },\n\n    constructor: function MyCustomCallService(attr, options) {\n       MyCustomCallService.__super__.constructor.call(this, attr, options);\n    }\n\n    beforeServiceCall: function(nodes, commandData) {\n       var requestProperties = {};\n       //Custom logic to populate\n       return requestProperties; //It will be mixed with other default properties as part of request body while sending d2-generic-action-service\n    },\n\n    afterServiceCall: function(nodes, commandData, responseProperties) {\n       //Custom logic to modify responseProperties\n       //Later this modified responseProperties becomes input for final JS action invocation.\n    }\n });\n\n return MyCustomCallService;\n});\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_CallServiceCommand"},"CallServiceCommand")," : ",(0,l.kt)("code",null,"d2/sdk/commands/call.service.command"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_CallServiceCommand..beforeServiceCall"},"~beforeServiceCall(nodes, commandData)")," \u21d2 ",(0,l.kt)("code",null,"Object")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_CallServiceCommand..afterServiceCall"},"~afterServiceCall(nodes, commandData, responseProperties)")," \u21d2")))),(0,l.kt)("a",{name:"module_CallServiceCommand..beforeServiceCall"}),(0,l.kt)("h3",{id:"callservicecommandbeforeservicecallnodes-commanddata--object"},"CallServiceCommand~beforeServiceCall(nodes, commandData) \u21d2 ",(0,l.kt)("code",null,"Object")),(0,l.kt)("p",null,"Make changes to the request properties sent out for underlying D2-REST API call."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": inner method of ",(0,l.kt)("a",{parentName:"p",href:"#module_CallServiceCommand"},(0,l.kt)("code",null,"CallServiceCommand")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Object")," - Returns the final propoerties set to be used as part of request body. Will also be mixed with the default properties.  "),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"nodes"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Array.<NodeModel>")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Selected NodeModel objects upon which the command is being run."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"commandData"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Object")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Object hash containing the default invocation properties"))),"  ")),(0,l.kt)("a",{name:"module_CallServiceCommand..afterServiceCall"}),(0,l.kt)("h3",{id:"callservicecommandafterservicecallnodes-commanddata-responseproperties-"},"CallServiceCommand~afterServiceCall(nodes, commandData, responseProperties) \u21d2"),(0,l.kt)("p",null,"Change invocation data for final JS action"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": inner method of ",(0,l.kt)("a",{parentName:"p",href:"#module_CallServiceCommand"},(0,l.kt)("code",null,"CallServiceCommand")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": void  "),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"nodes"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Array.<NodeModel>")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Selected NodeModel objects upon which the command is being run."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"commandData"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Object")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Object hash containing the default invocation properties"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"responseProperties"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Object")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Raw response from underlying D2-REST API call. The same object is also used to invoke final JS action."))),"  ")))}u.isMDXComponent=!0}}]);