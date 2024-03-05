"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=l.createContext({}),m=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return l.createElement(i.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),k=m(n),c=o,p=k["".concat(i,".").concat(c)]||k[c]||s[c]||a;return n?l.createElement(p,r(r({ref:t},u),{},{components:n})):l.createElement(p,r({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=c;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[k]="string"==typeof e?e:o,r[1]=d;for(var m=2;m<a;m++)r[m]=n[m];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>d,toc:()=>m});var l=n(7462),o=(n(7294),n(3905));const a={},r=void 0,d={unversionedId:"api/d2/utils/commandhelper",id:"api/d2/utils/commandhelper",title:"commandhelper",description:"CommandHelper : d2/sdk/utils/commandhelper",source:"@site/articles/api/d2/utils/commandhelper.md",sourceDirName:"api/d2/utils",slug:"/api/d2/utils/commandhelper",permalink:"/d2sv-sdk/23.2.0/api/d2/utils/commandhelper",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"utils",permalink:"/d2sv-sdk/23.2.0/api/d2/utils/"},next:{title:"commands",permalink:"/d2sv-sdk/23.2.0/api/d2/utils/commands"}},i={},m=[{value:"CommandHelper : <code>d2/sdk/utils/commandhelper</code>",id:"commandhelper--d2sdkutilscommandhelper",level:2},{value:"CommandHelper.getJustOneNode(status) \u21d2 <code>NodeModel</code>",id:"commandhelpergetjustonenodestatus--codenodemodelcode",level:3},{value:"CommandHelper.getOriginalAction(node, signature, commandData) \u21d2 <code>ActionModel</code>",id:"commandhelpergetoriginalactionnode-signature-commanddata--actionmodel",level:3},{value:"CommandHelper.getOriginalActionLink(node, signature, linkrel, params, commandData) \u21d2 <code>String</code>",id:"commandhelpergetoriginalactionlinknode-signature-linkrel-params-commanddata--string",level:3},{value:"CommandHelper.refreshNode(node, widgetConfig) \u21d2 <code>jQuery.Promise</code>",id:"commandhelperrefreshnodenode-widgetconfig--jquerypromise",level:3},{value:"CommandHelper.showErrorPanel(node, errMessage, detailMessage) \u21d2 <code>*</code>",id:"commandhelpershowerrorpanelnode-errmessage-detailmessage--",level:3},{value:"CommandHelper.blockD2ViewActions(view) \u21d2 <code>void</code>",id:"commandhelperblockd2viewactionsview--void",level:3},{value:"CommandHelper.unblockD2ViewActions(view) \u21d2 <code>void</code>",id:"commandhelperunblockd2viewactionsview--void",level:3}],u={toc:m},k="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"module_CommandHelper"}),(0,o.kt)("h2",{id:"commandhelper--d2sdkutilscommandhelper"},"CommandHelper : ",(0,o.kt)("code",null,"d2/sdk/utils/commandhelper")),(0,o.kt)("p",null,"A few frequetnly used functions that helps reduce code duplication across ",(0,o.kt)("a",{parentName:"p",href:"../commands/command"},"CommandModel")," implementations."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Extends"),": ",(0,o.kt)("code",null,"Object"),"  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_CommandHelper"},"CommandHelper")," : ",(0,o.kt)("code",null,"d2/sdk/utils/commandhelper"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_CommandHelper.getJustOneNode"},".getJustOneNode(status)")," \u21d2 ",(0,o.kt)("a",{parentName:"li",href:"../models/node.model"},(0,o.kt)("code",null,"NodeModel"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_CommandHelper.getOriginalAction"},".getOriginalAction(node, signature, [commandData])")," \u21d2 ",(0,o.kt)("code",null,"ActionModel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_CommandHelper.getOriginalActionLink"},".getOriginalActionLink(node, signature, linkrel, [params], [commandData])")," \u21d2 ",(0,o.kt)("code",null,"String")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_CommandHelper.refreshNode"},".refreshNode(node, [widgetConfig])")," \u21d2 ",(0,o.kt)("code",null,"jQuery.Promise")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_CommandHelper.showErrorPanel"},".showErrorPanel(node, errMessage, detailMessage)")," \u21d2 ",(0,o.kt)("code",null,"*")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_CommandHelper.blockD2ViewActions"},".blockD2ViewActions(view)")," \u21d2 ",(0,o.kt)("code",null,"void")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_CommandHelper.unblockD2ViewActions"},".unblockD2ViewActions(view)")," \u21d2 ",(0,o.kt)("code",null,"void"))))),(0,o.kt)("a",{name:"module_CommandHelper.getJustOneNode"}),(0,o.kt)("h3",{id:"commandhelpergetjustonenodestatus--codenodemodelcode"},"CommandHelper.getJustOneNode(status) \u21d2 ",(0,o.kt)("a",{parentName:"h3",href:"../models/node.model"},(0,o.kt)("code",null,"NodeModel"))),(0,o.kt)("p",null,"Get exactly one node from the given ",(0,o.kt)("inlineCode",{parentName:"p"},"status")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.kt)("a",{parentName:"p",href:"#module_CommandHelper"},(0,o.kt)("code",null,"CommandHelper")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("a",{parentName:"p",href:"../models/node.model"},(0,o.kt)("code",null,"NodeModel"))," - Returns the first node from ",(0,o.kt)("inlineCode",{parentName:"p"},"status.nodes"),".  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"status"),(0,o.kt)("td",null,(0,o.kt)("code",null,"object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"The ",(0,o.kt)("code",null,"status")," parameter from ",(0,o.kt)("a",{href:"../commands/command"},"CommandModel"),"'s ",(0,o.kt)("code",null,"enabled")," or ",(0,o.kt)("code",null,"execute")," methods."))),"  ")),(0,o.kt)("a",{name:"module_CommandHelper.getOriginalAction"}),(0,o.kt)("h3",{id:"commandhelpergetoriginalactionnode-signature-commanddata--actionmodel"},"CommandHelper.getOriginalAction(node, signature, ","[commandData]",") \u21d2 ",(0,o.kt)("code",null,"ActionModel")),(0,o.kt)("p",null,"Get the most matching action of a node for a given command signature. Usued for disambigutation of an action when it may be present multiple times due to repetitive menu config."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.kt)("a",{parentName:"p",href:"#module_CommandHelper"},(0,o.kt)("code",null,"CommandHelper")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"ActionModel")," - Returns the action that matches most. if ",(0,o.kt)("inlineCode",{parentName:"p"},"commandData")," is not passed, the first action matching the ",(0,o.kt)("inlineCode",{parentName:"p"},"signature")," is returned.  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"node"),(0,o.kt)("td",null,(0,o.kt)("code",null,(0,o.kt)("a",{href:"../models/node.model"},"NodeModel"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"The node whose actions are being looked up"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"signature"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"The command singnature being looked up"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[commandData]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"object")),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"commandData")," associated with the ",(0,o.kt)("code",null,"status")," parameter from ",(0,o.kt)("a",{href:"../commands/command"},"CommandModel"),"'s ",(0,o.kt)("code",null,"enabled")," or ",(0,o.kt)("code",null,"execute")," methods."))),"  ")),(0,o.kt)("a",{name:"module_CommandHelper.getOriginalActionLink"}),(0,o.kt)("h3",{id:"commandhelpergetoriginalactionlinknode-signature-linkrel-params-commanddata--string"},"CommandHelper.getOriginalActionLink(node, signature, linkrel, ","[params]",", ","[commandData]",") \u21d2 ",(0,o.kt)("code",null,"String")),(0,o.kt)("p",null,"Get the URL for given linkrel ID from the most matching action of a node. Internally calls ",(0,o.kt)("a",{parentName:"p",href:"#module_CommandHelper.getOriginalAction"},"getOriginalAction")," to lookup the matching action."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.kt)("a",{parentName:"p",href:"#module_CommandHelper"},(0,o.kt)("code",null,"CommandHelper")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"String")," - the URL  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"node"),(0,o.kt)("td",null,(0,o.kt)("code",null,(0,o.kt)("a",{href:"../models/node.model"},"NodeModel"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"The node whose actions are being looked up"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"signature"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"The command singnature being looked up"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"linkrel"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Linkrel identifier being looked up."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[params]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"If the link relation points to an href-template, then resolve the template using these params."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[commandData]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"object")),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"commandData")," associated with the ",(0,o.kt)("code",null,"status")," parameter from ",(0,o.kt)("a",{href:"../commands/command"},"CommandModel"),"'s ",(0,o.kt)("code",null,"enabled")," or ",(0,o.kt)("code",null,"execute")," methods."))),"  ")),(0,o.kt)("a",{name:"module_CommandHelper.refreshNode"}),(0,o.kt)("h3",{id:"commandhelperrefreshnodenode-widgetconfig--jquerypromise"},"CommandHelper.refreshNode(node, ","[widgetConfig]",") \u21d2 ",(0,o.kt)("code",null,"jQuery.Promise")),(0,o.kt)("p",null,"Refresh the attributes of a node from server in the context of a widget"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.kt)("a",{parentName:"p",href:"#module_CommandHelper"},(0,o.kt)("code",null,"CommandHelper")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"jQuery.Promise")," - it is ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve()"),"-ed only if the refresh is successful, ",(0,o.kt)("inlineCode",{parentName:"p"},"reject()"),"-ed otherwise.  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"node"),(0,o.kt)("td",null,(0,o.kt)("code",null,(0,o.kt)("a",{href:"../models/node.model"},"NodeModel"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"The node being refreshed"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[widgetConfig]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Widet configuration to set the context of refresh"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"widgetConfig.widgetName"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Name of the widget"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"widgetConfig.widgetType"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Type of the widget"))),"  ")),(0,o.kt)("a",{name:"module_CommandHelper.showErrorPanel"}),(0,o.kt)("h3",{id:"commandhelpershowerrorpanelnode-errmessage-detailmessage--"},"CommandHelper.showErrorPanel(node, errMessage, detailMessage) \u21d2 ",(0,o.kt)("code",null,"*")),(0,o.kt)("p",null,"Show an error toast associated with a node."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.kt)("a",{parentName:"p",href:"#module_CommandHelper"},(0,o.kt)("code",null,"CommandHelper")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"*")," - the toast instance  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"node"),(0,o.kt)("td",null,(0,o.kt)("code",null,(0,o.kt)("a",{href:"../models/node.model"},"NodeModel"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"The node to associate the message with"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"errMessage"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Brief message to be shown"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"detailMessage"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Verbose detail of the ",(0,o.kt)("code",null,"errMessage"),". The detail is shown in an expandable region of the toast."))),"  ")),(0,o.kt)("a",{name:"module_CommandHelper.blockD2ViewActions"}),(0,o.kt)("h3",{id:"commandhelperblockd2viewactionsview--void"},"CommandHelper.blockD2ViewActions(view) \u21d2 ",(0,o.kt)("code",null,"void")),(0,o.kt)("p",null,"Enable blocker UI."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.kt)("a",{parentName:"p",href:"#module_CommandHelper"},(0,o.kt)("code",null,"CommandHelper")),"  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"view"),(0,o.kt)("td",null,(0,o.kt)("code",null,(0,o.kt)("a",{href:"https://marionettejs.com/docs/v2.4.7/marionette.view.html"},"Marionette.View"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"A view instance infused with the progress blocker API. See ",(0,o.kt)("a",{href:"../controls/blocker/blocker"},"BlockingView"),"."))),"  ")),(0,o.kt)("a",{name:"module_CommandHelper.unblockD2ViewActions"}),(0,o.kt)("h3",{id:"commandhelperunblockd2viewactionsview--void"},"CommandHelper.unblockD2ViewActions(view) \u21d2 ",(0,o.kt)("code",null,"void")),(0,o.kt)("p",null,"Disable blocker UI."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.kt)("a",{parentName:"p",href:"#module_CommandHelper"},(0,o.kt)("code",null,"CommandHelper")),"  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"view"),(0,o.kt)("td",null,(0,o.kt)("code",null,(0,o.kt)("a",{href:"https://marionettejs.com/docs/v2.4.7/marionette.view.html"},"Marionette.View"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"A view instance infused with the progress blocker API. See ",(0,o.kt)("a",{href:"../controls/blocker/blocker"},"BlockingView"),"."))),"  ")))}s.isMDXComponent=!0}}]);