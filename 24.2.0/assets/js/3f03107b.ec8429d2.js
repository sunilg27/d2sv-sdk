"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[1747],{5680:(e,l,t)=>{t.d(l,{xA:()=>u,yg:()=>c});var n=t(6540);function s(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function o(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?o(Object(t),!0).forEach((function(l){s(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function g(e,l){if(null==e)return{};var t,n,s=function(e,l){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],l.indexOf(t)>=0||(s[t]=e[t]);return s}(e,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var r=n.createContext({}),i=function(e){var l=n.useContext(r),t=l;return e&&(t="function"==typeof e?e(l):a(a({},l),e)),t},u=function(e){var l=i(e.components);return n.createElement(r.Provider,{value:l},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},p=n.forwardRef((function(e,l){var t=e.components,s=e.mdxType,o=e.originalType,r=e.parentName,u=g(e,["components","mdxType","originalType","parentName"]),d=i(t),p=s,c=d["".concat(r,".").concat(p)]||d[p]||y[p]||o;return t?n.createElement(c,a(a({ref:l},u),{},{components:t})):n.createElement(c,a({ref:l},u))}));function c(e,l){var t=arguments,s=l&&l.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=p;var g={};for(var r in l)hasOwnProperty.call(l,r)&&(g[r]=l[r]);g.originalType=e,g[d]="string"==typeof e?e:s,a[1]=g;for(var i=2;i<o;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6578:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>r,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>g,toc:()=>i});var n=t(8168),s=(t(6540),t(5680));const o={},a=void 0,g={unversionedId:"api/d2/controls/globalmessage/globalmessage",id:"api/d2/controls/globalmessage/globalmessage",title:"globalmessage",description:"GlobalMessage : d2/sdk/controls/globalmessage/globalmessage",source:"@site/articles/api/d2/controls/globalmessage/globalmessage.md",sourceDirName:"api/d2/controls/globalmessage",slug:"/api/d2/controls/globalmessage/",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/globalmessage/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"form.view",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/form/form.view"},next:{title:"node.icon.sprites",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/icon.sprites/node.icon.sprites"}},r={},i=[{value:"GlobalMessage : <code>d2/sdk/controls/globalmessage/globalmessage</code>",id:"globalmessage--d2sdkcontrolsglobalmessageglobalmessage",level:2},{value:"GlobalMessage.showMessage(type, message, details, options) \u21d2 <code>Marionette.View</code>",id:"globalmessageshowmessagetype-message-details-options--codemarionetteviewcode",level:3},{value:"GlobalMessage.showSuccessMessageWithLink(options)",id:"globalmessageshowsuccessmessagewithlinkoptions",level:3},{value:"GlobalMessage~GMConfigOptions : <code>Object</code>",id:"globalmessagegmconfigoptions--object",level:3}],u={toc:i},d="wrapper";function y(e){let{components:l,...t}=e;return(0,s.yg)(d,(0,n.A)({},u,t,{components:l,mdxType:"MDXLayout"}),(0,s.yg)("a",{name:"module_GlobalMessage"}),(0,s.yg)("h2",{id:"globalmessage--d2sdkcontrolsglobalmessageglobalmessage"},"GlobalMessage : ",(0,s.yg)("code",null,"d2/sdk/controls/globalmessage/globalmessage")),(0,s.yg)("p",null,"UI component used to show different types of toast messages."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Extends"),": ",(0,s.yg)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.view.html"},(0,s.yg)("code",null,"Marionette.View")),"  "),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"#module_GlobalMessage"},"GlobalMessage")," : ",(0,s.yg)("code",null,"d2/sdk/controls/globalmessage/globalmessage"),(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("em",{parentName:"li"},"static"),(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"#module_GlobalMessage.showMessage"},".showMessage(type, message, [details], [options])")," \u21d2 ",(0,s.yg)("a",{parentName:"li",href:"https://marionettejs.com/docs/v2.4.7/marionette.view.html"},(0,s.yg)("code",null,"Marionette.View"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"#module_GlobalMessage.showSuccessMessageWithLink"},".showSuccessMessageWithLink(options)")))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("em",{parentName:"li"},"inner"),(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"#module_GlobalMessage..GMConfigOptions"},"~GMConfigOptions")," : ",(0,s.yg)("code",null,"Object"))))))),(0,s.yg)("a",{name:"module_GlobalMessage.showMessage"}),(0,s.yg)("h3",{id:"globalmessageshowmessagetype-message-details-options--codemarionetteviewcode"},"GlobalMessage.showMessage(type, message, ","[details]",", ","[options]",") \u21d2 ",(0,s.yg)("a",{parentName:"h3",href:"https://marionettejs.com/docs/v2.4.7/marionette.view.html"},(0,s.yg)("code",null,"Marionette.View"))),(0,s.yg)("p",null,"Show a toast message of particular type"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Kind"),": static method of ",(0,s.yg)("a",{parentName:"p",href:"#module_GlobalMessage"},(0,s.yg)("code",null,"GlobalMessage")),(0,s.yg)("br",{parentName:"p"}),"\n",(0,s.yg)("strong",{parentName:"p"},"Returns"),": ",(0,s.yg)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.view.html"},(0,s.yg)("code",null,"Marionette.View"))," - The toast message view instance.",(0,s.yg)("br",{parentName:"p"}),"\n",(0,s.yg)("strong",{parentName:"p"},"Note"),": ",(0,s.yg)("inlineCode",{parentName:"p"},"success")," messages automatically disappear after some timeout.  "),(0,s.yg)("table",null,(0,s.yg)("thead",null,(0,s.yg)("tr",null,(0,s.yg)("th",null,"Param"),(0,s.yg)("th",null,"Type"),(0,s.yg)("th",null,"Description"))),(0,s.yg)("tbody",null,(0,s.yg)("tr",null,(0,s.yg)("td",null,"type"),(0,s.yg)("td",null,(0,s.yg)("code",null,"string")),(0,s.yg)("td",null,(0,s.yg)("p",null,"Type of the message. Possible values are ",(0,s.yg)("code",null,"'info', 'success', 'warning', 'error'"),"."))),(0,s.yg)("tr",null,(0,s.yg)("td",null,"message"),(0,s.yg)("td",null,(0,s.yg)("code",null,"string")),(0,s.yg)("td",null,(0,s.yg)("p",null,"The message to be shown."))),(0,s.yg)("tr",null,(0,s.yg)("td",null,"[details]"),(0,s.yg)("td",null,(0,s.yg)("code",null,"string")),(0,s.yg)("td",null,(0,s.yg)("p",null,"Details associated with the message."))),(0,s.yg)("tr",null,(0,s.yg)("td",null,"[options]"),(0,s.yg)("td",null,(0,s.yg)("code",null,"object")),(0,s.yg)("td",null,(0,s.yg)("p",null,"Control options"))),(0,s.yg)("tr",null,(0,s.yg)("td",null,"[options.configOption]"),(0,s.yg)("td",null,(0,s.yg)("code",null,"GMConfigOptions")),(0,s.yg)("td",null,(0,s.yg)("p",null,"Message display configuration."))),"  ")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Example"),"  "),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},"define([\n 'd2/sdk/controls/globalmessage/globalmessage'\n], function(GlobalMessage){\n 'use strict';\n\n //To show information message\n GlobalMessage.showMessage('info', 'Hello world!');\n\n //To show success message\n GlobalMessage.showMessage('success', 'This is a sample success message');\n});\n")),(0,s.yg)("a",{name:"module_GlobalMessage.showSuccessMessageWithLink"}),(0,s.yg)("h3",{id:"globalmessageshowsuccessmessagewithlinkoptions"},"GlobalMessage.showSuccessMessageWithLink(options)"),(0,s.yg)("p",null,"Show a success toast message with a clickable link that can execute a command model implementaion."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Kind"),": static method of ",(0,s.yg)("a",{parentName:"p",href:"#module_GlobalMessage"},(0,s.yg)("code",null,"GlobalMessage")),"  "),(0,s.yg)("table",null,(0,s.yg)("thead",null,(0,s.yg)("tr",null,(0,s.yg)("th",null,"Param"),(0,s.yg)("th",null,"Type"),(0,s.yg)("th",null,"Description"))),(0,s.yg)("tbody",null,(0,s.yg)("tr",null,(0,s.yg)("td",null,"options"),(0,s.yg)("td",null,(0,s.yg)("code",null,"object")),(0,s.yg)("td",null,(0,s.yg)("p",null,"Message options"))),(0,s.yg)("tr",null,(0,s.yg)("td",null,"options.showLink"),(0,s.yg)("td",null,(0,s.yg)("code",null,"Boolean")),(0,s.yg)("td",null,(0,s.yg)("p",null,"Whether to show a link"))),(0,s.yg)("tr",null,(0,s.yg)("td",null,"options.node"),(0,s.yg)("td",null,(0,s.yg)("code",null,(0,s.yg)("a",{href:"../../models/node.model"},"NodeModel"))),(0,s.yg)("td",null,(0,s.yg)("p",null,"A NodeModel instance whose details is used to format the message. Also used later to execute the linked command when user clicks on the link."))),(0,s.yg)("tr",null,(0,s.yg)("td",null,"options.context"),(0,s.yg)("td",null,(0,s.yg)("code",null,"Context")),(0,s.yg)("td",null,(0,s.yg)("p",null,"Reference to the application context."))),(0,s.yg)("tr",null,(0,s.yg)("td",null,"options.messageFormat"),(0,s.yg)("td",null,(0,s.yg)("code",null,"string")),(0,s.yg)("td",null,(0,s.yg)("p",null,"A string template. First placeholder in the string will be replaced with the name attribute value from ",(0,s.yg)("code",null,"options.node"),". Can also be used to pass a complete message disregarding the fact that it will try to interpret as a template."))),(0,s.yg)("tr",null,(0,s.yg)("td",null,"options.linkLabel"),(0,s.yg)("td",null,(0,s.yg)("code",null,"string")),(0,s.yg)("td",null,(0,s.yg)("p",null,"Text to be shown as link."))),(0,s.yg)("tr",null,(0,s.yg)("td",null,"options.linkCommandSignature"),(0,s.yg)("td",null,(0,s.yg)("code",null,"string")),(0,s.yg)("td",null,(0,s.yg)("p",null,"Signature of the command to be executed when user clicks on the displayed link."))),"  ")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Example"),"  "),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},"define([\n   'd2/sdk/controls/globalmessage/globalmessage',\n   'd2/sdk/models/node.model',\n   'd2/sdk/utils/contexts/context.utils'\n], function(GlobalMessage, NodeModel, contextUtil){\n 'use strict';\n\n GlobalMessage.showSuccessMessageWithLink({\n   showLink: true,\n   node: new NodeModel({id: '090015fa80002d49', name: 'SampleDocument'}),\n   context: contextUtil.getPerspectiveContext(),\n   messageFormat: 'Hello \"{0}\"',\n   linkLabel: 'click to open overview',\n   linkCommandSignature: 'Browse'\n });\n});\n")),(0,s.yg)("a",{name:"module_GlobalMessage..GMConfigOptions"}),(0,s.yg)("h3",{id:"globalmessagegmconfigoptions--object"},"GlobalMessage~GMConfigOptions : ",(0,s.yg)("code",null,"Object")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,s.yg)("a",{parentName:"p",href:"#module_GlobalMessage"},(0,s.yg)("code",null,"GlobalMessage")),(0,s.yg)("br",{parentName:"p"}),"\n",(0,s.yg)("strong",{parentName:"p"},"Properties")),(0,s.yg)("table",null,(0,s.yg)("thead",null,(0,s.yg)("tr",null,(0,s.yg)("th",null,"Name"),(0,s.yg)("th",null,"Type"),(0,s.yg)("th",null,"Description"))),(0,s.yg)("tbody",null,(0,s.yg)("tr",null,(0,s.yg)("td",null,"enablePermanentHeaderMessages"),(0,s.yg)("td",null,(0,s.yg)("code",null,"Boolean")),(0,s.yg)("td",null,(0,s.yg)("p",null,"Whether to show the toast message without auto-dismiss. Defaults to ",(0,s.yg)("code",null,"false"),"."))),"  ")))}y.isMDXComponent=!0}}]);