"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=l.createContext({}),s=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=s(n),k=o,b=c["".concat(d,".").concat(k)]||c[k]||u[k]||a;return n?l.createElement(b,i(i({ref:t},p),{},{components:n})):l.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[c]="string"==typeof e?e:o,i[1]=r;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var l=n(7462),o=(n(7294),n(3905));const a={},i=void 0,r={unversionedId:"api/d2/widgets/nodestable/nodestable.view",id:"api/d2/widgets/nodestable/nodestable.view",title:"nodestable.view",description:"NodesTableView : d2/sdk/widgets/nodestable/nodestable.view",source:"@site/articles/api/d2/widgets/nodestable/nodestable.view.md",sourceDirName:"api/d2/widgets/nodestable",slug:"/api/d2/widgets/nodestable/nodestable.view",permalink:"/d2sv-sdk/23.2.0/api/d2/widgets/nodestable/nodestable.view",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"metadata.panel.views",permalink:"/d2sv-sdk/23.2.0/api/d2/widgets/metadata.panel/metadata.panel.views"},next:{title:"shortcut.tile.behavior",permalink:"/d2sv-sdk/23.2.0/api/d2/widgets/shortcut.tile/shortcut.tile.behavior"}},d={},s=[{value:"NodesTableView : <code>d2/sdk/widgets/nodestable/nodestable.view</code>",id:"nodestableview--d2sdkwidgetsnodestablenodestableview",level:2},{value:"nodesTableView.getZeroRecordText() \u21d2 <code>string</code>",id:"nodestableviewgetzerorecordtext--string",level:3},{value:"nodesTableView.getTitle() \u21d2 <code>string</code>",id:"nodestableviewgettitle--string",level:3},{value:"nodesTableView.getContainerNode() \u21d2 <code>NodeModel</code>",id:"nodestableviewgetcontainernode--codenodemodelcode",level:3},{value:"nodesTableView.getExtraIconConfig() \u21d2 <code>object</code>",id:"nodestableviewgetextraiconconfig--object",level:3},{value:"nodesTableView.getCollectionOptions() \u21d2 <code>object</code>",id:"nodestableviewgetcollectionoptions--object",level:3},{value:"NodesTableView.extend(protoProperties, staticProperties) \u21d2 <code>function</code>",id:"nodestableviewextendprotoproperties-staticproperties--function",level:3},{value:"NodesTableView~NodesTableView",id:"nodestableviewnodestableview",level:3},{value:"new NodesTableView(options)",id:"new-nodestableviewoptions",level:4},{value:"NodesTableView~NodesTableToolbar : <code>Object</code>",id:"nodestableviewnodestabletoolbar--object",level:3}],p={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"module_NodesTableView"}),(0,o.kt)("h2",{id:"nodestableview--d2sdkwidgetsnodestablenodestableview"},"NodesTableView : ",(0,o.kt)("code",null,"d2/sdk/widgets/nodestable/nodestable.view")),(0,o.kt)("p",null,"Base class for all table-like widgets. Typically a subclass of this type is used whenever an\n",(0,o.kt)("a",{parentName:"p",href:"../../utils/perspectives/app.scope.perspectives"},"ApplicationScopePerspective")," requires a table-like rendering."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Extends"),": ",(0,o.kt)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.collectionview.html"},(0,o.kt)("code",null,"Marionette.CollectionView")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Example")," ",(0,o.kt)("em",{parentName:"p"},"(A minimum sample derivative may look like)"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//In mybundle/widgets/sample.table/sample.table.view.js\n\ndefine([\n 'd2/sdk/widgets/nodestable/nodestable.view',\n 'mybundle/utils/contexts/factories/sample.table.collection.factory'\n], function(NodesTableView, SampleTableCollectionFactory){\n   'use strict';\n\n   var SampleTableView = NodesTableView.extend({\n     constructor: function SampleTableView(options) {\n       options = options || {};\n       options.className = 'my-table-view';\n       options.d2collectionFactory = SampleTableCollectionFactory;\n\n       SampleTableView.__super__.constructor.call(this, options);\n     }\n   });\n\n   return SampleTableView;\n});\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")," ",(0,o.kt)("em",{parentName:"p"},"(To link it to a perspective)"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'//In mybundle/utils/perspectives/table.perspecitve.json\n\n {\n     "type": "left-center-right",\n     "options": {\n       "center": {\n         "type": "mybundle/widgets/sample.table"\n       }\n     }\n }\n\n\n//In mybundle/extensions/perspectives.js\ndefine([], function(){\n \'use strict\';\n\n return [{\n   ...,\n   perspectiveJson: \'mybundle/utils/perspectives/table.perspecitve.json\',\n   ...\n }];\n});\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")," ",(0,o.kt)("em",{parentName:"p"},"(Finally, to register the perspective definition as an application scope perspective)"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'//In extensions.json\n{\n  "d2/sdk/utils/perspectives/app.scope.perspectives": {\n     "extensions": {\n        "mybundle": {\n           "mybundle/extensions/perspectives"\n        }\n     }\n   }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_NodesTableView"},"NodesTableView")," : ",(0,o.kt)("code",null,"d2/sdk/widgets/nodestable/nodestable.view"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"instance"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_NodesTableView+getZeroRecordText"},".getZeroRecordText()")," \u21d2 ",(0,o.kt)("code",null,"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_NodesTableView+getTitle"},".getTitle()")," \u21d2 ",(0,o.kt)("code",null,"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_NodesTableView+getContainerNode"},".getContainerNode()")," \u21d2 ",(0,o.kt)("a",{parentName:"li",href:"../../models/node.model"},(0,o.kt)("code",null,"NodeModel"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_NodesTableView+getExtraIconConfig"},".getExtraIconConfig()")," \u21d2 ",(0,o.kt)("code",null,"object")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_NodesTableView+getCollectionOptions"},".getCollectionOptions()")," \u21d2 ",(0,o.kt)("code",null,"object")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"static"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_NodesTableView.extend"},".extend(protoProperties, staticProperties)")," \u21d2 ",(0,o.kt)("code",null,"function")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"inner"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_NodesTableView..NodesTableView"},"~NodesTableView"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#new_module_NodesTableView..NodesTableView_new"},"new NodesTableView([options])")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_NodesTableView..NodesTableToolbar"},"~NodesTableToolbar")," : ",(0,o.kt)("code",null,"Object"))))))),(0,o.kt)("a",{name:"module_NodesTableView+getZeroRecordText"}),(0,o.kt)("h3",{id:"nodestableviewgetzerorecordtext--string"},"nodesTableView.getZeroRecordText() \u21d2 ",(0,o.kt)("code",null,"string")),(0,o.kt)("p",null,"Hizibizi"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"#module_NodesTableView"},(0,o.kt)("code",null,"NodesTableView")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"string")," - Text to be shown when there are no items in the data holder collection.  "),(0,o.kt)("a",{name:"module_NodesTableView+getTitle"}),(0,o.kt)("h3",{id:"nodestableviewgettitle--string"},"nodesTableView.getTitle() \u21d2 ",(0,o.kt)("code",null,"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"#module_NodesTableView"},(0,o.kt)("code",null,"NodesTableView")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"string")," - Title to show at header of this table  "),(0,o.kt)("a",{name:"module_NodesTableView+getContainerNode"}),(0,o.kt)("h3",{id:"nodestableviewgetcontainernode--codenodemodelcode"},"nodesTableView.getContainerNode() \u21d2 ",(0,o.kt)("a",{parentName:"h3",href:"../../models/node.model"},(0,o.kt)("code",null,"NodeModel"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"#module_NodesTableView"},(0,o.kt)("code",null,"NodesTableView")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("a",{parentName:"p",href:"../../models/node.model"},(0,o.kt)("code",null,"NodeModel"))," - A node model to hold represenation data for the table header.  "),(0,o.kt)("a",{name:"module_NodesTableView+getExtraIconConfig"}),(0,o.kt)("h3",{id:"nodestableviewgetextraiconconfig--object"},"nodesTableView.getExtraIconConfig() \u21d2 ",(0,o.kt)("code",null,"object")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"#module_NodesTableView"},(0,o.kt)("code",null,"NodesTableView")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"object")," - Additional attributes to be merged with the NodeModel returned from ",(0,o.kt)("inlineCode",{parentName:"p"},"getContainerNode()"),".  "),(0,o.kt)("a",{name:"module_NodesTableView+getCollectionOptions"}),(0,o.kt)("h3",{id:"nodestableviewgetcollectionoptions--object"},"nodesTableView.getCollectionOptions() \u21d2 ",(0,o.kt)("code",null,"object")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"#module_NodesTableView"},(0,o.kt)("code",null,"NodesTableView")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"object")," - Additional option to be used while constructing the collection from ",(0,o.kt)("inlineCode",{parentName:"p"},"collectionClass")," constructor option.  "),(0,o.kt)("a",{name:"module_NodesTableView.extend"}),(0,o.kt)("h3",{id:"nodestableviewextendprotoproperties-staticproperties--function"},"NodesTableView.extend(protoProperties, staticProperties) \u21d2 ",(0,o.kt)("code",null,"function")),(0,o.kt)("p",null,"To define a derived type from ",(0,o.kt)("inlineCode",{parentName:"p"},"NodesTableView"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.kt)("a",{parentName:"p",href:"#module_NodesTableView"},(0,o.kt)("code",null,"NodesTableView")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"function")," - The derived type.  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"protoProperties"),(0,o.kt)("td",null,(0,o.kt)("code",null,"object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Properties attached to the prototype of derived type."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"protoProperties.constructor"),(0,o.kt)("td",null,(0,o.kt)("code",null,"function")),(0,o.kt)("td",null,(0,o.kt)("p",null,"The function to be used to construct instance of the derived type."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"staticProperties"),(0,o.kt)("td",null,(0,o.kt)("code",null,"object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Properties statically attached to the derived type."))),"  ")),(0,o.kt)("a",{name:"module_NodesTableView..NodesTableView"}),(0,o.kt)("h3",{id:"nodestableviewnodestableview"},"NodesTableView~NodesTableView"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,o.kt)("a",{parentName:"p",href:"#module_NodesTableView"},(0,o.kt)("code",null,"NodesTableView")),"  "),(0,o.kt)("a",{name:"new_module_NodesTableView..NodesTableView_new"}),(0,o.kt)("h4",{id:"new-nodestableviewoptions"},"new NodesTableView(","[options]",")"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Constructor options"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.cssClass]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"CSS class name to be added to HTML element representing this whole table view. ",(0,o.kt)("code",null,"options.className")," will have a higher precedence over the same purpose."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.d2collectionFactory]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Factory")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Collection factory to be used to instantiate the collection that will hold data for this table."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.collectionClass]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"function")),(0,o.kt)("td",null,(0,o.kt)("p",null,"A constructor type to be used to instantiate the data holder collection."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.collection]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Backbone.Collection")),(0,o.kt)("td",null,(0,o.kt)("p",null,"A collection instance to be used as data holder for the table. One of ",(0,o.kt)("code",null,"d2collectionFactory"),", ",(0,o.kt)("code",null,"collectionClass")," or",(0,o.kt)("code",null,"collection")," has to be provided as part of constructor options. Otherwise, it fails with error."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.toolbarItems]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"NodesTableToolbar")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Menu configuration for the table view."))),"  ")),(0,o.kt)("a",{name:"module_NodesTableView..NodesTableToolbar"}),(0,o.kt)("h3",{id:"nodestableviewnodestabletoolbar--object"},"NodesTableView~NodesTableToolbar : ",(0,o.kt)("code",null,"Object")),(0,o.kt)("p",null,"Toolbar type for NodesTable."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,o.kt)("a",{parentName:"p",href:"#module_NodesTableView"},(0,o.kt)("code",null,"NodesTableView")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Properties")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"inlineActionbar"),(0,o.kt)("td",null,(0,o.kt)("code",null,(0,o.kt)("a",{href:"../../controls/toolbar/toolitems.factory"},"ToolitemsFactory"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Menu configuration used at inidividual item level."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"tableHeaderToolbar"),(0,o.kt)("td",null,(0,o.kt)("code",null,(0,o.kt)("a",{href:"../../controls/toolbar/toolitems.factory"},"ToolitemsFactory"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Menu configuration for the header."))),"  ")))}u.isMDXComponent=!0}}]);