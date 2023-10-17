"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5893],{3905:(t,n,e)=>{e.d(n,{Zo:()=>d,kt:()=>g});var l=e(7294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(t,n){if(null==t)return{};var e,l,o=function(t,n){if(null==t)return{};var e,l,o={},s=Object.keys(t);for(l=0;l<s.length;l++)e=s[l],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(l=0;l<s.length;l++)e=s[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var r=l.createContext({}),c=function(t){var n=l.useContext(r),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=c(t.components);return l.createElement(r.Provider,{value:n},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(t,n){var e=t.components,o=t.mdxType,s=t.originalType,r=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),u=c(e),p=o,g=u["".concat(r,".").concat(p)]||u[p]||k[p]||s;return e?l.createElement(g,i(i({ref:n},d),{},{components:e})):l.createElement(g,i({ref:n},d))}));function g(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var s=e.length,i=new Array(s);i[0]=p;var a={};for(var r in n)hasOwnProperty.call(n,r)&&(a[r]=n[r]);a.originalType=t,a[u]="string"==typeof t?t:o,i[1]=a;for(var c=2;c<s;c++)i[c]=e[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,e)}p.displayName="MDXCreateElement"},1500:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var l=e(7462),o=(e(7294),e(3905));const s={},i=void 0,a={unversionedId:"api/d2/controls/dialogs/content.assist.dialog",id:"api/d2/controls/dialogs/content.assist.dialog",title:"content.assist.dialog",description:"ContentAssistDialog : d2/sdk/controls/dialogs/content.assist.dialog",source:"@site/articles/api/d2/controls/dialogs/content.assist.dialog.md",sourceDirName:"api/d2/controls/dialogs",slug:"/api/d2/controls/dialogs/content.assist.dialog",permalink:"/d2sv-sdk/23.4.0/api/d2/controls/dialogs/content.assist.dialog",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"blocker",permalink:"/d2sv-sdk/23.4.0/api/d2/controls/blocker/"},next:{title:"d2fs.state.method",permalink:"/d2sv-sdk/23.4.0/api/d2/controls/dialogs/generic/d2fs.state.method"}},r={},c=[{value:"ContentAssistDialog : <code>d2/sdk/controls/dialogs/content.assist.dialog</code>",id:"contentassistdialog--d2sdkcontrolsdialogscontentassistdialog",level:2},{value:"contentAssistDialog.show() \u21d2 <code>jQuery.Promise</code>",id:"contentassistdialogshow--jquerypromise",level:3},{value:"ContentAssistDialog~ContentAssistDialog",id:"contentassistdialogcontentassistdialog",level:3},{value:"new ContentAssistDialog(options)",id:"new-contentassistdialogoptions",level:4},{value:"ContentAssistDialog~ContentAssistFinishCallback : <code>function</code>",id:"contentassistdialogcontentassistfinishcallback--function",level:3}],d={toc:c},u="wrapper";function k(t){let{components:n,...e}=t;return(0,o.kt)(u,(0,l.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"module_ContentAssistDialog"}),(0,o.kt)("h2",{id:"contentassistdialog--d2sdkcontrolsdialogscontentassistdialog"},"ContentAssistDialog : ",(0,o.kt)("code",null,"d2/sdk/controls/dialogs/content.assist.dialog")),(0,o.kt)("p",null,"Content Assist Dialog. Helps navigating through the repository while selecting an object."),(0,o.kt)("p",null,"Content assist configuration is to be fetched first to control constructor options. See ",(0,o.kt)("a",{parentName:"p",href:"../../utils/content.assist"},"ContentAssistDialogUtil"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Extends"),": ",(0,o.kt)("code",null,"Object"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Example")," ",(0,o.kt)("em",{parentName:"p"},"(A typical usage example)"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"define([\n 'nuc/lib/underscore',\n 'd2/sdk/controls/dialogs/content.assist.dialog',\n 'd2/sdk/models/node.model',\n 'd2/sdk/utils/contexts/context.utils',\n 'd2/sdk/utils/contexts/factories/connector',\n 'd2/sdk/utils/content.assist'\n], function(_, NodePicker, NodeModel, contextUtils, ConnectorFactory, contentAssistUtil){\n 'use strict';\n\n  var context = contextUtils.getPerspectiveContext(),\n   connector = context.getObject(ConnectorFactory),\n   container = new NodeModel({id: '0c0015fa8000291e'}, {connector: connector});\n\n   container.fetch()\n     .done(function(){\n       showNodePicker(context, connector, container);\n     })\n     .fail(function(){\n       console.log('failed fetching container');\n     });\n\n   function showNodePicker(context, connector, container) {\n     contentAssistUtil.getContentAssistOptions({context: context})\n     .done(function(config){\n       var title = config ? config.label_value : \"\",\n         includeBrowse = (config && config.properties) ? config.properties.has_browse_assist : true,\n         includeFavorites = (config && config.properties) ? config.properties.has_favorites_assist : false,\n         globalSearch = (config && config.properties) ? config.properties.has_search_assist : false;\n\n       // Enable browsing if nothing is enabled\n       if (!includeBrowse && !includeFavorites && !globalSearch) {\n         includeBrowse = true;\n       }\n\n       var nodePicker = new NodePicker({\n         dialogTitle: title,\n         startLocations: [],\n         includeBrowse: includeBrowse,\n         includeFavorites: includeFavorites,\n         globalSearch: globalSearch,\n         context: context,\n         connector: connector,\n         initialContainer: container,\n         selectMultiple: false\n       });\n\n       nodePicker.show()\n         .done(function(selection){\n           console.log('Selected ' + selection.nodes.length + ' items.');\n         })\n         .fail(function(){\n           console.log('User cancelled');\n         });\n     })\n     .fail(function(){\n       console.log('failed to load options for the node picker');\n     });\n   }\n\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_ContentAssistDialog"},"ContentAssistDialog")," : ",(0,o.kt)("code",null,"d2/sdk/controls/dialogs/content.assist.dialog"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"instance"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_ContentAssistDialog+show"},".show()")," \u21d2 ",(0,o.kt)("code",null,"jQuery.Promise")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"inner"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_ContentAssistDialog..ContentAssistDialog"},"~ContentAssistDialog"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#new_module_ContentAssistDialog..ContentAssistDialog_new"},"new ContentAssistDialog(options)")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_ContentAssistDialog..ContentAssistFinishCallback"},"~ContentAssistFinishCallback")," : ",(0,o.kt)("code",null,"function"))))))),(0,o.kt)("a",{name:"module_ContentAssistDialog+show"}),(0,o.kt)("h3",{id:"contentassistdialogshow--jquerypromise"},"contentAssistDialog.show() \u21d2 ",(0,o.kt)("code",null,"jQuery.Promise")),(0,o.kt)("p",null,"Shows the dialog"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"#module_ContentAssistDialog"},(0,o.kt)("code",null,"ContentAssistDialog")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"jQuery.Promise")," - resolves & invokes ",(0,o.kt)("inlineCode",{parentName:"p"},"ContentAssistFinishCallback")," on positive (select/add) user interaction, rejects otherwise (user cancels).  "),(0,o.kt)("a",{name:"module_ContentAssistDialog..ContentAssistDialog"}),(0,o.kt)("h3",{id:"contentassistdialogcontentassistdialog"},"ContentAssistDialog~ContentAssistDialog"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,o.kt)("a",{parentName:"p",href:"#module_ContentAssistDialog"},(0,o.kt)("code",null,"ContentAssistDialog")),"  "),(0,o.kt)("a",{name:"new_module_ContentAssistDialog..ContentAssistDialog_new"}),(0,o.kt)("h4",{id:"new-contentassistdialogoptions"},"new ContentAssistDialog(options)"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"options"),(0,o.kt)("td",null,(0,o.kt)("code",null,"object")),(0,o.kt)("td",null),(0,o.kt)("td",null,(0,o.kt)("p",null,"Construction options holder"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.dialogTitle]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null),(0,o.kt)("td",null,(0,o.kt)("p",null,"Title of the dialog."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"options.connector"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Connector")),(0,o.kt)("td",null),(0,o.kt)("td",null,(0,o.kt)("p",null,"The connector instance. See ",(0,o.kt)("a",{href:"../../utils/contexts/factories/connector"},"ConnectorFactory"),"."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"options.initialContainer"),(0,o.kt)("td",null,(0,o.kt)("code",null,(0,o.kt)("a",{href:"../../models/node.model"},"NodeModel"))),(0,o.kt)("td",null),(0,o.kt)("td",null,(0,o.kt)("p",null,"Begin browsing from this folder/cabinet. The passed object must be fetched before hand."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"options.context"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Context")),(0,o.kt)("td",null),(0,o.kt)("td",null,(0,o.kt)("p",null,"Active application context. See ",(0,o.kt)("a",{href:"../../utils/contexts/context.utils"},"ContextUtils")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"options.startLocations"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Array.<string>")),(0,o.kt)("td",null),(0,o.kt)("td",null,(0,o.kt)("p",null,"Set the supported content display locations. Supported values are ",(0,o.kt)("code",null,"'search.location', 'current.location', 'favorites'. At least an empty array must be passed if following shorthand flags "),"globalSearch",(0,o.kt)("code",null,", "),"includeBrowse",(0,o.kt)("code",null,", "),"includeFavorites` are used to control the start locations."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.globalSearch]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("code",null,"false")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Show searchable locations. Short hand for setting ",(0,o.kt)("code",null,"search.location")," as part of ",(0,o.kt)("code",null,"startLocations"),"."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.includeBrowse]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("code",null,"true")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Show browsable locations from Documentum repository. Short hand for setting ",(0,o.kt)("code",null,"current.location")," as part of ",(0,o.kt)("code",null,"startLocations"),"."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.includeFavorites]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("code",null,"false")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Show favorited contents. Short hand for setting ",(0,o.kt)("code",null,"favorites")," as part of ",(0,o.kt)("code",null,"startLocations"),"."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.selectMultiple]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("code",null,"false")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Enable multiple selection."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.selectType]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("code",null,"null")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Attribute to check while enabling/diabling selectability of a node. ",(0,o.kt)("code",null,"'typeName'")," could be used as a value."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.selectTypeValue]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null),(0,o.kt)("td",null,(0,o.kt)("p",null,"A node is selectable only if its ",(0,o.kt)("code",null,"selectType")," attribute's value mathes with this value."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.excludeTypes]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Array.<string>")),(0,o.kt)("td",null),(0,o.kt)("td",null,(0,o.kt)("p",null,"Exclude these node types from display."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.url_filter]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("code",null,"null")),(0,o.kt)("td",null,(0,o.kt)("p",null,"An additional fileter query parameter to be used while populating content assist dialog with objects."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.selectButtonLabel]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null),(0,o.kt)("td",null,(0,o.kt)("p",null,"Text to be shown on the affirmative button."))),"  ")),(0,o.kt)("a",{name:"module_ContentAssistDialog..ContentAssistFinishCallback"}),(0,o.kt)("h3",{id:"contentassistdialogcontentassistfinishcallback--function"},"ContentAssistDialog~ContentAssistFinishCallback : ",(0,o.kt)("code",null,"function")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,o.kt)("a",{parentName:"p",href:"#module_ContentAssistDialog"},(0,o.kt)("code",null,"ContentAssistDialog")),"  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"selectedNodes"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Selected nodes holder"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"selectedNodes.nodes"),(0,o.kt)("td",null,(0,o.kt)("code",null,(0,o.kt)("a",{href:"../../models/node.model"},"Array.<NodeModel>"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Collection of nodes that were selected."))),"  ")))}k.isMDXComponent=!0}}]);