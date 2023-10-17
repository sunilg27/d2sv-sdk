"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[6779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=o.createContext({}),i=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=i(e.components);return o.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,a=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=i(n),c=l,k=u["".concat(a,".").concat(c)]||u[c]||p[c]||s;return n?o.createElement(k,r(r({ref:t},m),{},{components:n})):o.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,r=new Array(s);r[0]=c;var d={};for(var a in t)hasOwnProperty.call(t,a)&&(d[a]=t[a]);d.originalType=e,d[u]="string"==typeof e?e:l,r[1]=d;for(var i=2;i<s;i++)r[i]=n[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var o=n(7462),l=(n(7294),n(3905));const s={},r=void 0,d={unversionedId:"api/d2/commands/progressive.nodes.command",id:"api/d2/commands/progressive.nodes.command",title:"progressive.nodes.command",description:"ProgressiveNodesCommand : d2/sdk/commands/progressive.nodes.command",source:"@site/articles/api/d2/commands/progressive.nodes.command.md",sourceDirName:"api/d2/commands",slug:"/api/d2/commands/progressive.nodes.command",permalink:"/d2sv-sdk/23.4.0/api/d2/commands/progressive.nodes.command",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"node.actions.rules",permalink:"/d2sv-sdk/23.4.0/api/d2/commands/node.actions.rules"},next:{title:"action.icons",permalink:"/d2sv-sdk/23.4.0/api/d2/controls/action.icons/"}},a={},i=[{value:"ProgressiveNodesCommand : <code>d2/sdk/commands/progressive.nodes.command</code>",id:"progressivenodescommand--d2sdkcommandsprogressivenodescommand",level:2},{value:"<em>progressiveNodesCommand.preProcess(status, options) \u21d2 <code>PromiseReturnType</code></em>",id:"progressivenodescommandpreprocessstatus-options--codepromisereturntypecode",level:3},{value:"<em>progressiveNodesCommand.doAction(node, options) \u21d2 <code>PromiseReturnType</code></em>",id:"progressivenodescommanddoactionnode-options--codepromisereturntypecode",level:3},{value:"<em>progressiveNodesCommand.handleResults(results, options) \u21d2 <code>PromiseReturnType</code></em>",id:"progressivenodescommandhandleresultsresults-options--codepromisereturntypecode",level:3},{value:"<em>progressiveNodesCommand.getMessageOptions(options) \u21d2 <code>MessageOptionsType</code></em>",id:"progressivenodescommandgetmessageoptionsoptions--codemessageoptionstypecode",level:3},{value:"ProgressiveNodesCommand.extend(protoProperties, staticProperties) \u21d2 <code>function</code>",id:"progressivenodescommandextendprotoproperties-staticproperties--function",level:3},{value:"ProgressiveNodesCommand~DoneCommandOption : <code>Object</code>",id:"progressivenodescommanddonecommandoption--object",level:3},{value:"ProgressiveNodesCommand~CommandStatus : <code>Object</code>",id:"progressivenodescommandcommandstatus--object",level:3},{value:"ProgressiveNodesCommand~PromiseReturnType : <code>jQuery.Promise</code>",id:"progressivenodescommandpromisereturntype--jquerypromise",level:3},{value:"ProgressiveNodesCommand~MessageOptionsType : <code>Object</code>",id:"progressivenodescommandmessageoptionstype--object",level:3}],m={toc:i},u="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"module_ProgressiveNodesCommand"}),(0,l.kt)("h2",{id:"progressivenodescommand--d2sdkcommandsprogressivenodescommand"},"ProgressiveNodesCommand : ",(0,l.kt)("code",null,"d2/sdk/commands/progressive.nodes.command")),(0,l.kt)("p",null,"Interface for classes that implements business actions over one or more ",(0,l.kt)("a",{parentName:"p",href:"../models/node.model"},"NodeModel")," such that\nprogress of the action is collectively portrayed on a UI component called ProgressPanel."),(0,l.kt)("p",null,"Normal behavior flow is as follows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The progress panel is displayed, and progress gets updated based on the completion of individual node processing."),(0,l.kt)("li",{parentName:"ol"},"In case the processing for any node fails, or if user aborts the processing (either using ",(0,l.kt)("em",{parentName:"li"},"Stop")," button for all pending items, or using Cancel icon against each item), or if ",(0,l.kt)("inlineCode",{parentName:"li"},"doneCommand")," options are enabled and there are multiple nodes and at least one node is not within the ",(0,l.kt)("inlineCode",{parentName:"li"},"commandContainer"),", then the progress panel will remain visible after all processing is complete. User can expand it to see individual item status."),(0,l.kt)("li",{parentName:"ol"},"In case the processing is successful, then progress panel is removed, and toast message is displayed with success details. If it was a single node and ",(0,l.kt)("inlineCode",{parentName:"li"},"doneCommand")," was applicable, then the toast message will also include done command link.")),(0,l.kt)("p",null,"An implementation should be registered with the command collection."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Extends"),": ",(0,l.kt)("a",{parentName:"p",href:"./command"},(0,l.kt)("code",null,"CommandModel")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example")," ",(0,l.kt)("em",{parentName:"p"},"(A sample implementation delete.js could look like)"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"define([\n   'nuc/lib/jquery',\n   'd2/sdk/commands/progressive.nodes.command',\n   'i18n!mybundle/commands/commands.lang'\n], function($, ProgressiveNodesCommand, lang){\n   var DeleteCommand = ProgressiveNodesCommand.extend({\n     defaults: {\n       signature: 'Delete',\n       command_key: 'Delete',\n       name: lang.CommandNameDelete,\n       pageLeavingWarning: lang.DeletePageLeavingWarning,\n       scope: 'multiple'\n     },\n\n     preProcess: function (status, options) {\n       options || (options = {});\n       var me = this,\n       deferred = $.Deferred();\n\n       // Do something...\n\n       me._confirmAction(status, options).done(function (deleteOptions) {\n         options.deleteOptions = deleteOptions;\n         deferred.resolve();\n       }).fail(function () {\n         deferred.reject();\n       });\n\n       return deferred.promise();\n    },\n\n    doAction: function (node, options) {\n       var deferred = $.Deferred();\n       node.destroy({\n         wait: true,\n         deleteOptions: options.deleteOptions,\n         container: options.container\n       }).done(function () {\n         deferred.resolve(node);\n       }).fail(deferred.reject);\n\n       return deferred.promise();\n     },\n\n     handleResults: function (results, options) {\n       var sourceCollection = options.originatingView && options.originatingView.collection,\n       deletedIds = _.compact(_.map(results || [], function (result) {\n         if (result instanceof Backbone.Model) {\n           return result.get('id');\n         }\n       }));\n\n       if (deletedIds.length > 0) {\n         options.context.trigger('d2:objects:deleted', deletedIds);\n       }\n\n       return sourceCollection.fetch({reload: true});\n     },\n\n     getMessageOptions: function () {\n       return {\n         oneFilePending: lang.DeletingOneItem,\n         multiFilePending: lang.DeletingManyItems,\n         oneFileSuccess: lang.DeleteOneItemSuccessMessage,\n         multiFileSuccess: lang.DeleteManyItemsSuccessMessage,\n         oneFileFailure: lang.DeleteOneItemFailMessage,\n         multiFileOneFailure: lang.DeleteManyItemsOneFailMessage,\n         multiFileFailure: lang.DeleteManyItemsFailMessage,\n         someItemsStopped: lang.DeleteStopped,\n         actionType: 'DELETE'\n       };\n     },\n\n     // Other methods...\n   });\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")," ",(0,l.kt)("em",{parentName:"p"},"( to register the command with command collection, in extension.json )"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "d2/sdk/utils/commands": {\n     "extensions": {\n       "mybundle": {\n         "mybundle/commands/delete"\n       }\n     }\n   }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_ProgressiveNodesCommand"},"ProgressiveNodesCommand")," : ",(0,l.kt)("code",null,"d2/sdk/commands/progressive.nodes.command"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"instance"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("a",{parentName:"em",href:"#module_ProgressiveNodesCommand+preProcess"},".preProcess(status, options)")," \u21d2 ",(0,l.kt)("code",null,"PromiseReturnType"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("a",{parentName:"em",href:"#module_ProgressiveNodesCommand+doAction"},".doAction(node, options)")," \u21d2 ",(0,l.kt)("code",null,"PromiseReturnType"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("a",{parentName:"em",href:"#module_ProgressiveNodesCommand+handleResults"},".handleResults(results, options)")," \u21d2 ",(0,l.kt)("code",null,"PromiseReturnType"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("a",{parentName:"em",href:"#module_ProgressiveNodesCommand+getMessageOptions"},".getMessageOptions(options)")," \u21d2 ",(0,l.kt)("code",null,"MessageOptionsType"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"static"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_ProgressiveNodesCommand.extend"},".extend(protoProperties, staticProperties)")," \u21d2 ",(0,l.kt)("code",null,"function")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"inner"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_ProgressiveNodesCommand..DoneCommandOption"},"~DoneCommandOption")," : ",(0,l.kt)("code",null,"Object")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_ProgressiveNodesCommand..CommandStatus"},"~CommandStatus")," : ",(0,l.kt)("code",null,"Object")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_ProgressiveNodesCommand..PromiseReturnType"},"~PromiseReturnType")," : ",(0,l.kt)("code",null,"jQuery.Promise")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_ProgressiveNodesCommand..MessageOptionsType"},"~MessageOptionsType")," : ",(0,l.kt)("code",null,"Object"))))))),(0,l.kt)("a",{name:"module_ProgressiveNodesCommand+preProcess"}),(0,l.kt)("h3",{id:"progressivenodescommandpreprocessstatus-options--codepromisereturntypecode"},(0,l.kt)("em",{parentName:"h3"},"progressiveNodesCommand.preProcess(status, options) \u21d2 ",(0,l.kt)("code",null,"PromiseReturnType"))),(0,l.kt)("p",null,"Apply a preprocessing logic before starting off the actual business action to any node"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance abstract method of ",(0,l.kt)("a",{parentName:"p",href:"#module_ProgressiveNodesCommand"},(0,l.kt)("code",null,"ProgressiveNodesCommand")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"See"),": ",(0,l.kt)("a",{parentName:"p",href:"external:CommandModel#execute"},"CommandModel#execute"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"status"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CommandStatus")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Object hash containing the contextual data"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"options"),(0,l.kt)("td",null,(0,l.kt)("code",null,"object")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Additional options that are not part of contextual data like settings"))),"  ")),(0,l.kt)("a",{name:"module_ProgressiveNodesCommand+doAction"}),(0,l.kt)("h3",{id:"progressivenodescommanddoactionnode-options--codepromisereturntypecode"},(0,l.kt)("em",{parentName:"h3"},"progressiveNodesCommand.doAction(node, options) \u21d2 ",(0,l.kt)("code",null,"PromiseReturnType"))),(0,l.kt)("p",null,"Execute the business action on a single ",(0,l.kt)("inlineCode",{parentName:"p"},"node")," from within the ",(0,l.kt)("inlineCode",{parentName:"p"},"status.nodes")," of ",(0,l.kt)("a",{parentName:"p",href:"#module_ProgressiveNodesCommand+preProcess"},"preProcess")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance abstract method of ",(0,l.kt)("a",{parentName:"p",href:"#module_ProgressiveNodesCommand"},(0,l.kt)("code",null,"ProgressiveNodesCommand")),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"node"),(0,l.kt)("td",null,(0,l.kt)("code",null,"NodeModel")),(0,l.kt)("td",null,(0,l.kt)("p",null,"The curent NodeModel being processed"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"options"),(0,l.kt)("td",null,(0,l.kt)("code",null,"object")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Combined ",(0,l.kt)("code",null,"status")," and ",(0,l.kt)("code",null,"options")," from ",(0,l.kt)("a",{href:"#module_ProgressiveNodesCommand+preProcess"},"preProcess")))),"  ")),(0,l.kt)("a",{name:"module_ProgressiveNodesCommand+handleResults"}),(0,l.kt)("h3",{id:"progressivenodescommandhandleresultsresults-options--codepromisereturntypecode"},(0,l.kt)("em",{parentName:"h3"},"progressiveNodesCommand.handleResults(results, options) \u21d2 ",(0,l.kt)("code",null,"PromiseReturnType"))),(0,l.kt)("p",null,"Apply post processing"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance abstract method of ",(0,l.kt)("a",{parentName:"p",href:"#module_ProgressiveNodesCommand"},(0,l.kt)("code",null,"ProgressiveNodesCommand")),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"results"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Array.<object>")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Elements of the argument correspond to each input node. The element is of type ",(0,l.kt)("code",null,"NodeModel")," if the command execution for this node was successful. It is ",(0,l.kt)("code",null,"undefined")," if the command execution was aborted. In case of failure the type depends on whatever type was used to ",(0,l.kt)("code",null,"reject()")," the associated ",(0,l.kt)("code",null,"jQuery.Promise")," from ",(0,l.kt)("a",{href:"#module_ProgressiveNodesCommand+doAction"},"doAction")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"options"),(0,l.kt)("td",null,(0,l.kt)("code",null,"object")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Combined ",(0,l.kt)("code",null,"status")," and ",(0,l.kt)("code",null,"options")," from ",(0,l.kt)("a",{href:"#module_ProgressiveNodesCommand+preProcess"},"preProcess")))),"  ")),(0,l.kt)("a",{name:"module_ProgressiveNodesCommand+getMessageOptions"}),(0,l.kt)("h3",{id:"progressivenodescommandgetmessageoptionsoptions--codemessageoptionstypecode"},(0,l.kt)("em",{parentName:"h3"},"progressiveNodesCommand.getMessageOptions(options) \u21d2 ",(0,l.kt)("code",null,"MessageOptionsType"))),(0,l.kt)("p",null,"Customize different messages shown in the progress panel UI."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance abstract method of ",(0,l.kt)("a",{parentName:"p",href:"#module_ProgressiveNodesCommand"},(0,l.kt)("code",null,"ProgressiveNodesCommand")),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"options"),(0,l.kt)("td",null,(0,l.kt)("code",null,"object")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Combined ",(0,l.kt)("code",null,"status")," and ",(0,l.kt)("code",null,"options")," from ",(0,l.kt)("a",{href:"#module_ProgressiveNodesCommand+preProcess"},"preProcess")))),"  ")),(0,l.kt)("a",{name:"module_ProgressiveNodesCommand.extend"}),(0,l.kt)("h3",{id:"progressivenodescommandextendprotoproperties-staticproperties--function"},"ProgressiveNodesCommand.extend(protoProperties, staticProperties) \u21d2 ",(0,l.kt)("code",null,"function")),(0,l.kt)("p",null,"To define a derived type from ",(0,l.kt)("inlineCode",{parentName:"p"},"ProgressiveNodesCommand"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#module_ProgressiveNodesCommand"},(0,l.kt)("code",null,"ProgressiveNodesCommand")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"function")," - The derived type.  "),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"protoProperties"),(0,l.kt)("td",null,(0,l.kt)("code",null,"object")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Properties attached to the prototype of derived type."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"protoProperties.constructor"),(0,l.kt)("td",null,(0,l.kt)("code",null,"function")),(0,l.kt)("td",null,(0,l.kt)("p",null,"The function to be used to construct instance of the derived type."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"staticProperties"),(0,l.kt)("td",null,(0,l.kt)("code",null,"object")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Properties statically attached to the derived type."))),"  ")),(0,l.kt)("a",{name:"module_ProgressiveNodesCommand..DoneCommandOption"}),(0,l.kt)("h3",{id:"progressivenodescommanddonecommandoption--object"},"ProgressiveNodesCommand~DoneCommandOption : ",(0,l.kt)("code",null,"Object")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,l.kt)("a",{parentName:"p",href:"#module_ProgressiveNodesCommand"},(0,l.kt)("code",null,"ProgressiveNodesCommand")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"signature"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Signature of command to execute on click"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"label"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Label to be shown for the link."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"tooltip"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Tooltip for the link."))),"  ")),(0,l.kt)("a",{name:"module_ProgressiveNodesCommand..CommandStatus"}),(0,l.kt)("h3",{id:"progressivenodescommandcommandstatus--object"},"ProgressiveNodesCommand~CommandStatus : ",(0,l.kt)("code",null,"Object")),(0,l.kt)("p",null,"Type of data passed as first argument for any command execution."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,l.kt)("a",{parentName:"p",href:"#module_ProgressiveNodesCommand"},(0,l.kt)("code",null,"ProgressiveNodesCommand")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Default"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"[hideSuccessMessage]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,(0,l.kt)("code",null,"false")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Setting it to ",(0,l.kt)("code",null,"true")," suppresses display of a success toast when this command execution completes successfully."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[hideFailureMessage]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,(0,l.kt)("code",null,"false")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Setting it to ",(0,l.kt)("code",null,"true")," suppresses display of any error toast even if the command completes with error."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[suppressProgress]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,(0,l.kt)("code",null,"false")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Setting it to ",(0,l.kt)("code",null,"true")," hides the progress panel UI."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[doneCommand]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"DoneCommandOption")),(0,l.kt)("td",null),(0,l.kt)("td",null,(0,l.kt)("p",null,"To show additional link on the success toast message upon command completion."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[commandContainer]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"NodeModel")),(0,l.kt)("td",null),(0,l.kt)("td",null,(0,l.kt)("p",null,"This must be provided if ",(0,l.kt)("code",null,"doneCommand")," link has to be shown. The link is displayed if given node is not within this container."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"nodes"),(0,l.kt)("td",null,(0,l.kt)("code",null,"NodeCollection")),(0,l.kt)("td",null),(0,l.kt)("td",null,(0,l.kt)("p",null,"Instance of ",(0,l.kt)("a",{href:"../models/node.collection"},"NodeCollection"),", on which node object(s) this command is being executed."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[context]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Context")),(0,l.kt)("td",null),(0,l.kt)("td",null,(0,l.kt)("p",null,"Active application context"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[toolitem]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"ToolitemModel")),(0,l.kt)("td",null),(0,l.kt)("td",null,(0,l.kt)("p",null,"The menu behind this action, if any."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[originatingView]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Marionette.View")),(0,l.kt)("td",null),(0,l.kt)("td",null,(0,l.kt)("p",null,"The associated UI component where this command is being executed."))),"  ")),(0,l.kt)("a",{name:"module_ProgressiveNodesCommand..PromiseReturnType"}),(0,l.kt)("h3",{id:"progressivenodescommandpromisereturntype--jquerypromise"},"ProgressiveNodesCommand~PromiseReturnType : ",(0,l.kt)("code",null,"jQuery.Promise")),(0,l.kt)("p",null,"Return type. Associated ",(0,l.kt)("inlineCode",{parentName:"p"},"jQuery.Promise")," instance should be ",(0,l.kt)("inlineCode",{parentName:"p"},"resolve()"),"-ed or ",(0,l.kt)("inlineCode",{parentName:"p"},"reject()"),"-ed to mark either successful completion or failed completion respectively."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,l.kt)("a",{parentName:"p",href:"#module_ProgressiveNodesCommand"},(0,l.kt)("code",null,"ProgressiveNodesCommand")),"  "),(0,l.kt)("a",{name:"module_ProgressiveNodesCommand..MessageOptionsType"}),(0,l.kt)("h3",{id:"progressivenodescommandmessageoptionstype--object"},"ProgressiveNodesCommand~MessageOptionsType : ",(0,l.kt)("code",null,"Object")),(0,l.kt)("p",null,"Formattable message to be used in progress panel."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,l.kt)("a",{parentName:"p",href:"#module_ProgressiveNodesCommand"},(0,l.kt)("code",null,"ProgressiveNodesCommand")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"oneFilePending"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Message to be shown for ",(0,l.kt)("code",null,"single")," scoped command during processing, {0} is substituted with node name."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"actionType"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,(0,l.kt)("p",null,"To group several executions of the same command into a single progress panel UI whereever applicable. It is a future scoped option."))),"  ")))}p.isMDXComponent=!0}}]);