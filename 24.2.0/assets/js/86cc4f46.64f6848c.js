"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[8171],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>c});var l=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,l,o=function(e,n){if(null==e)return{};var t,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r=l.createContext({}),u=function(e){var n=l.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(r.Provider,{value:n},e.children)},i="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},g=l.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),i=u(t),g=o,c=i["".concat(r,".").concat(g)]||i[g]||y[g]||a;return t?l.createElement(c,d(d({ref:n},s),{},{components:t})):l.createElement(c,d({ref:n},s))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,d=new Array(a);d[0]=g;var m={};for(var r in n)hasOwnProperty.call(n,r)&&(m[r]=n[r]);m.originalType=e,m[i]="string"==typeof e?e:o,d[1]=m;for(var u=2;u<a;u++)d[u]=t[u];return l.createElement.apply(null,d)}return l.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>y,frontMatter:()=>a,metadata:()=>m,toc:()=>u});var l=t(8168),o=(t(6540),t(5680));const a={},d=void 0,m={unversionedId:"api/d2/commands/command",id:"api/d2/commands/command",title:"command",description:"CommandModel : d2/sdk/commands/command",source:"@site/articles/api/d2/commands/command.md",sourceDirName:"api/d2/commands",slug:"/api/d2/commands/command",permalink:"/d2sv-sdk/24.2.0/api/d2/commands/command",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"call.service.command",permalink:"/d2sv-sdk/24.2.0/api/d2/commands/call.service.command"},next:{title:"create.folder.type.filters",permalink:"/d2sv-sdk/24.2.0/api/d2/commands/create.folder.type.filters"}},r={},u=[{value:"CommandModel : <code>d2/sdk/commands/command</code>",id:"commandmodel--d2sdkcommandscommand",level:2},{value:"commandModel.attributes : <code>AttributeType</code>",id:"commandmodelattributes--attributetype",level:3},{value:"commandModel.getCommandKey() \u21d2 <code>string</code>",id:"commandmodelgetcommandkey--string",level:3},{value:"commandModel.isNonPromoted() \u21d2 <code>boolean</code>",id:"commandmodelisnonpromoted--boolean",level:3},{value:"commandModel.enabled(status, options) \u21d2 <code>boolean</code>",id:"commandmodelenabledstatus-options--boolean",level:3},{value:"<em>commandModel.execute(status, options) \u21d2 <code>jQuery.Promise</code></em>",id:"commandmodelexecutestatus-options--codejquerypromisecode",level:3},{value:"CommandModel.extend(protoProperties, staticProperties) \u21d2 <code>function</code>",id:"commandmodelextendprotoproperties-staticproperties--function",level:3},{value:"CommandModel~CommandStatus : <code>Object</code>",id:"commandmodelcommandstatus--object",level:3},{value:"CommandModel~AttributeType : <code>Object</code>",id:"commandmodelattributetype--object",level:3}],s={toc:u},i="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(i,(0,l.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("a",{name:"module_CommandModel"}),(0,o.yg)("h2",{id:"commandmodel--d2sdkcommandscommand"},"CommandModel : ",(0,o.yg)("code",null,"d2/sdk/commands/command")),(0,o.yg)("p",null,"Interface for classes that implement a business action over one or more ",(0,o.yg)("a",{parentName:"p",href:"../models/node.model"},"NodeModel"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Extends"),": ",(0,o.yg)("a",{parentName:"p",href:"https://backbonejs.org/#Model"},(0,o.yg)("code",null,"Backbone.Model")),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"See"),": ",(0,o.yg)("a",{parentName:"p",href:"./progressive.nodes.command"},"ProgressiveNodesComamnd")),(0,o.yg)("p",null,"An implementation should be registered with the ",(0,o.yg)("a",{parentName:"p",href:"../utils/commands"},"CommandCollection")," by an extension configuration.",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Example")," ",(0,o.yg)("em",{parentName:"p"},"(module mybundle/commands/my.command.js can be defined as)"),"  "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"\ndefine([\n   'nuc/lib/jquery',\n   'd2/sdk/commands/command'\n], function($, CommandModel){\n var MyCommandModel = CommandModel.extend({\n    defaults: {\n       signature: 'MyCommand',\n       name: 'Example name',\n       scope: 'single' // Indicates that this action could be executed on a selection of atmost one node, other possible value is 'multiple'\n    },\n\n    enabled: function(status, options) {\n       return true; // enabled always\n    },\n\n    execute: function(status, options) {\n       var firstNode = status.nodes.get(0);\n       console.log(\"The first node object is: \" + firstNode.get('name');\n       return $.Deferred().resolve().promise(); // Here this command execution will be considered complete as soon as execute() returns\n    }\n });\n\n return MyCommandModel;\n});\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example")," ",(0,o.yg)("em",{parentName:"p"},"( to register the command with command collection, in extension.json )"),"  "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'{\n  "d2/sdk/utils/commands": {\n     "extensions": {\n       "mybundle": {\n         "mybundle/commands/my.command"\n       }\n     }\n   }\n}\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#module_CommandModel"},"CommandModel")," : ",(0,o.yg)("code",null,"d2/sdk/commands/command"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"instance"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#module_CommandModel+attributes"},".attributes")," : ",(0,o.yg)("code",null,"AttributeType")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#module_CommandModel+getCommandKey"},".getCommandKey()")," \u21d2 ",(0,o.yg)("code",null,"string")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#module_CommandModel+isNonPromoted"},".isNonPromoted()")," \u21d2 ",(0,o.yg)("code",null,"boolean")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#module_CommandModel+enabled"},".enabled(status, [options])")," \u21d2 ",(0,o.yg)("code",null,"boolean")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},(0,o.yg)("a",{parentName:"em",href:"#module_CommandModel+execute"},".execute(status, [options])")," \u21d2 ",(0,o.yg)("code",null,"jQuery.Promise"))))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"static"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#module_CommandModel.extend"},".extend(protoProperties, staticProperties)")," \u21d2 ",(0,o.yg)("code",null,"function")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"inner"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#module_CommandModel..CommandStatus"},"~CommandStatus")," : ",(0,o.yg)("code",null,"Object")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#module_CommandModel..AttributeType"},"~AttributeType")," : ",(0,o.yg)("code",null,"Object"))))))),(0,o.yg)("a",{name:"module_CommandModel+attributes"}),(0,o.yg)("h3",{id:"commandmodelattributes--attributetype"},"commandModel.attributes : ",(0,o.yg)("code",null,"AttributeType")),(0,o.yg)("p",null,"Required attributes. Can be defined using ",(0,o.yg)("inlineCode",{parentName:"p"},"defaults")," hash, checkout the example."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,o.yg)("a",{parentName:"p",href:"#module_CommandModel"},(0,o.yg)("code",null,"CommandModel")),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"See"),": ",(0,o.yg)("a",{parentName:"p",href:"https://backbonejs.org/#Model-attributes"},"Backbone.Model#attributes")," for more details.  "),(0,o.yg)("a",{name:"module_CommandModel+getCommandKey"}),(0,o.yg)("h3",{id:"commandmodelgetcommandkey--string"},"commandModel.getCommandKey() \u21d2 ",(0,o.yg)("code",null,"string")),(0,o.yg)("p",null,"Get key associated wtih this command instance."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.yg)("a",{parentName:"p",href:"#module_CommandModel"},(0,o.yg)("code",null,"CommandModel")),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Returns"),": ",(0,o.yg)("code",null,"string")," - The key/signature of this command.  "),(0,o.yg)("a",{name:"module_CommandModel+isNonPromoted"}),(0,o.yg)("h3",{id:"commandmodelisnonpromoted--boolean"},"commandModel.isNonPromoted() \u21d2 ",(0,o.yg)("code",null,"boolean")),(0,o.yg)("p",null,"Whether this command is non-promoted."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.yg)("a",{parentName:"p",href:"#module_CommandModel"},(0,o.yg)("code",null,"CommandModel")),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Returns"),": ",(0,o.yg)("code",null,"boolean")," - ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," if non-promoted, ",(0,o.yg)("inlineCode",{parentName:"p"},"false")," otherwise.  "),(0,o.yg)("a",{name:"module_CommandModel+enabled"}),(0,o.yg)("h3",{id:"commandmodelenabledstatus-options--boolean"},"commandModel.enabled(status, ","[options]",") \u21d2 ",(0,o.yg)("code",null,"boolean")),(0,o.yg)("p",null,"Whether this command should be enabled for a particular toolbar."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.yg)("a",{parentName:"p",href:"#module_CommandModel"},(0,o.yg)("code",null,"CommandModel")),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Returns"),": ",(0,o.yg)("code",null,"boolean")," - ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," if the command should be considered as enabled, ",(0,o.yg)("inlineCode",{parentName:"p"},"false")," otherwise  "),(0,o.yg)("table",null,(0,o.yg)("thead",null,(0,o.yg)("tr",null,(0,o.yg)("th",null,"Param"),(0,o.yg)("th",null,"Type"),(0,o.yg)("th",null,"Description"))),(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",null,"status"),(0,o.yg)("td",null,(0,o.yg)("code",null,"CommandStatus")),(0,o.yg)("td",null,(0,o.yg)("p",null,"Object hash containing the contextual data"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"[options]"),(0,o.yg)("td",null,(0,o.yg)("code",null,"object")),(0,o.yg)("td",null,(0,o.yg)("p",null,"Additional options that are not part of contextual data like settings"))),"  ")),(0,o.yg)("a",{name:"module_CommandModel+execute"}),(0,o.yg)("h3",{id:"commandmodelexecutestatus-options--codejquerypromisecode"},(0,o.yg)("em",{parentName:"h3"},"commandModel.execute(status, ","[options]",") \u21d2 ",(0,o.yg)("code",null,"jQuery.Promise"))),(0,o.yg)("p",null,"Business logic that executes as part of user interacting with this command (usually through a toolbar action)."),(0,o.yg)("p",null,"A toast message is usually (unless suppressed) shown in the UI when execution completes and based on the state of the returned promise it can either be a success or an error taost."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Kind"),": instance abstract method of ",(0,o.yg)("a",{parentName:"p",href:"#module_CommandModel"},(0,o.yg)("code",null,"CommandModel")),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Returns"),": ",(0,o.yg)("code",null,"jQuery.Promise")," - The return promise object should be resolved to mark completion of the command execution successfully, whereas a rejection would indicate otherwise  "),(0,o.yg)("table",null,(0,o.yg)("thead",null,(0,o.yg)("tr",null,(0,o.yg)("th",null,"Param"),(0,o.yg)("th",null,"Type"),(0,o.yg)("th",null,"Description"))),(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",null,"status"),(0,o.yg)("td",null,(0,o.yg)("code",null,"CommandStatus")),(0,o.yg)("td",null,(0,o.yg)("p",null,"Object hash containing the contextual data"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"[options]"),(0,o.yg)("td",null,(0,o.yg)("code",null,"object")),(0,o.yg)("td",null,(0,o.yg)("p",null,"Additional options that are not part of contextual data like settings"))),"  ")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example")," ",(0,o.yg)("em",{parentName:"p"},"(Sample implementation of ","`","execute","`"," could look like)"),"  "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"var MyCommand = CommandModel.extend({\n ...\n\n execute: function(status, options) {\n   var promise = $.Deferred().promise();\n   if(status.say === 'hello') {\n     console.log('I completed successfully');\n     promise.resolve();\n   } else {\n     console.log('I completed with failure');\n     promise.reject();\n   }\n\n   return promise;\n }\n});\n")),(0,o.yg)("a",{name:"module_CommandModel.extend"}),(0,o.yg)("h3",{id:"commandmodelextendprotoproperties-staticproperties--function"},"CommandModel.extend(protoProperties, staticProperties) \u21d2 ",(0,o.yg)("code",null,"function")),(0,o.yg)("p",null,"To define a derived type from ",(0,o.yg)("inlineCode",{parentName:"p"},"CommandModel"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.yg)("a",{parentName:"p",href:"#module_CommandModel"},(0,o.yg)("code",null,"CommandModel")),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Returns"),": ",(0,o.yg)("code",null,"function")," - The derived type.  "),(0,o.yg)("table",null,(0,o.yg)("thead",null,(0,o.yg)("tr",null,(0,o.yg)("th",null,"Param"),(0,o.yg)("th",null,"Type"),(0,o.yg)("th",null,"Description"))),(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",null,"protoProperties"),(0,o.yg)("td",null,(0,o.yg)("code",null,"object")),(0,o.yg)("td",null,(0,o.yg)("p",null,"Properties attached to the prototype of derived type."))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"protoProperties.constructor"),(0,o.yg)("td",null,(0,o.yg)("code",null,"function")),(0,o.yg)("td",null,(0,o.yg)("p",null,"The function to be used to construct instance of the derived type."))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"staticProperties"),(0,o.yg)("td",null,(0,o.yg)("code",null,"object")),(0,o.yg)("td",null,(0,o.yg)("p",null,"Properties statically attached to the derived type."))),"  ")),(0,o.yg)("a",{name:"module_CommandModel..CommandStatus"}),(0,o.yg)("h3",{id:"commandmodelcommandstatus--object"},"CommandModel~CommandStatus : ",(0,o.yg)("code",null,"Object")),(0,o.yg)("p",null,"Type of data passed as first argument for any command execution."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,o.yg)("a",{parentName:"p",href:"#module_CommandModel"},(0,o.yg)("code",null,"CommandModel")),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Properties")),(0,o.yg)("table",null,(0,o.yg)("thead",null,(0,o.yg)("tr",null,(0,o.yg)("th",null,"Name"),(0,o.yg)("th",null,"Type"),(0,o.yg)("th",null,"Default"),(0,o.yg)("th",null,"Description"))),(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",null,"[suppressSuccessMessage]"),(0,o.yg)("td",null,(0,o.yg)("code",null,"boolean")),(0,o.yg)("td",null,(0,o.yg)("code",null,"false")),(0,o.yg)("td",null,(0,o.yg)("p",null,"Setting it to ",(0,o.yg)("code",null,"true")," suppresses display of a success toast when this command execution completes successfully."))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"[suppressFailMessage]"),(0,o.yg)("td",null,(0,o.yg)("code",null,"boolean")),(0,o.yg)("td",null,(0,o.yg)("code",null,"false")),(0,o.yg)("td",null,(0,o.yg)("p",null,"Setting it to ",(0,o.yg)("code",null,"true")," suppresses display of any error toast even if the command completes with error."))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"nodes"),(0,o.yg)("td",null,(0,o.yg)("code",null,"NodeCollection")),(0,o.yg)("td",null),(0,o.yg)("td",null,(0,o.yg)("p",null,"instance of ",(0,o.yg)("a",{href:"../models/node.collection"},"NodeCollection"),", on which node object(s) this command is being executed."))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"[context]"),(0,o.yg)("td",null,(0,o.yg)("code",null,"Context")),(0,o.yg)("td",null),(0,o.yg)("td",null,(0,o.yg)("p",null,"Active application context"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"[toolitem]"),(0,o.yg)("td",null,(0,o.yg)("code",null,"ToolitemModel")),(0,o.yg)("td",null),(0,o.yg)("td",null,(0,o.yg)("p",null,"The menu behind this action, if any."))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"[originatingView]"),(0,o.yg)("td",null,(0,o.yg)("code",null,"Marionette.View")),(0,o.yg)("td",null),(0,o.yg)("td",null,(0,o.yg)("p",null,"The associated UI component where this command is being executed."))),"  ")),(0,o.yg)("a",{name:"module_CommandModel..AttributeType"}),(0,o.yg)("h3",{id:"commandmodelattributetype--object"},"CommandModel~AttributeType : ",(0,o.yg)("code",null,"Object")),(0,o.yg)("p",null,"Attribute types."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,o.yg)("a",{parentName:"p",href:"#module_CommandModel"},(0,o.yg)("code",null,"CommandModel")),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Properties")),(0,o.yg)("table",null,(0,o.yg)("thead",null,(0,o.yg)("tr",null,(0,o.yg)("th",null,"Name"),(0,o.yg)("th",null,"Type"),(0,o.yg)("th",null,"Default"),(0,o.yg)("th",null,"Description"))),(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",null,"signature"),(0,o.yg)("td",null,(0,o.yg)("code",null,"string")),(0,o.yg)("td",null),(0,o.yg)("td",null,(0,o.yg)("p",null,"A unique identifier."))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"name"),(0,o.yg)("td",null,(0,o.yg)("code",null,"string")),(0,o.yg)("td",null),(0,o.yg)("td",null,(0,o.yg)("p",null,"Display name. Usually gets overriden by menu item's label if this ",(0,o.yg)("code",null,"CommandModel")," is bound to a toolbar menu item."))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"[scope]"),(0,o.yg)("td",null,(0,o.yg)("code",null,"string")),(0,o.yg)("td",null,(0,o.yg)("code",null,'"single"')),(0,o.yg)("td",null,(0,o.yg)("p",null,"How many ",(0,o.yg)("code",null,"NodeModel"),"s this command can execute on simultaneously. Possible values ",(0,o.yg)("code",null,"single")," and ",(0,o.yg)("code",null,"multi"),"."))),"  ")))}y.isMDXComponent=!0}}]);