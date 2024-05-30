"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[740],{5680:(e,t,l)=>{l.d(t,{xA:()=>g,yg:()=>c});var i=l(6540);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,i,n=function(e,t){if(null==e)return{};var l,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)l=o[i],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)l=o[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},g=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var l=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),u=d(l),p=n,c=u["".concat(s,".").concat(p)]||u[p]||y[p]||o;return l?i.createElement(c,a(a({ref:t},g),{},{components:l})):i.createElement(c,a({ref:t},g))}));function c(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=l.length,a=new Array(o);a[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:n,a[1]=r;for(var d=2;d<o;d++)a[d]=l[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,l)}p.displayName="MDXCreateElement"},5560:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=l(8168),n=(l(6540),l(5680));const o={},a=void 0,r={unversionedId:"api/d2/widgets/list.tile/list.tile.view",id:"api/d2/widgets/list.tile/list.tile.view",title:"list.tile.view",description:"ListTileView : d2/sdk/widget/list.tile/list.tile.view",source:"@site/articles/api/d2/widgets/list.tile/list.tile.view.md",sourceDirName:"api/d2/widgets/list.tile",slug:"/api/d2/widgets/list.tile/list.tile.view",permalink:"/d2sv-sdk/24.2.0/api/d2/widgets/list.tile/list.tile.view",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"widget.constants",permalink:"/d2sv-sdk/24.2.0/api/d2/utils/widget.constants"},next:{title:"metadata.panel.view",permalink:"/d2sv-sdk/24.2.0/api/d2/widgets/metadata.panel/metadata.panel.view"}},s={},d=[{value:"ListTileView : <code>d2/sdk/widget/list.tile/list.tile.view</code>",id:"listtileview--d2sdkwidgetlisttilelisttileview",level:2},{value:"listTileView.getFactoryParam() \u21d2 <code>string</code>",id:"listtileviewgetfactoryparam--string",level:3},{value:"listTileView.onClickItem(target) \u21d2 <code>void</code>",id:"listtileviewonclickitemtarget--void",level:3},{value:"listTileView.onClickHeader() \u21d2 <code>void</code>",id:"listtileviewonclickheader--void",level:3},{value:"ListTileView.extend(protoProperties, staticProperties) \u21d2 <code>function</code>",id:"listtileviewextendprotoproperties-staticproperties--function",level:3},{value:"ListTileView~ListTileView",id:"listtileviewlisttileview",level:3},{value:"new ListTileView(options)",id:"new-listtileviewoptions",level:4},{value:"ListTileView~ListTileData : <code>Object</code>",id:"listtileviewlisttiledata--object",level:3}],g={toc:d},u="wrapper";function y(e){let{components:t,...l}=e;return(0,n.yg)(u,(0,i.A)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("a",{name:"module_ListTileView"}),(0,n.yg)("h2",{id:"listtileview--d2sdkwidgetlisttilelisttileview"},"ListTileView : ",(0,n.yg)("code",null,"d2/sdk/widget/list.tile/list.tile.view")),(0,n.yg)("p",null,"Base class for all list type of tiles in D2 Smart View landing perspective."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Extends"),": ",(0,n.yg)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.collectionview.html"},(0,n.yg)("code",null,"Marionette.CollectionView")),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("strong",{parentName:"p"},"Example")," ",(0,n.yg)("em",{parentName:"p"},"(A minimum sample list derivative may look like)"),"  "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"//In mybundle/widgets/my.tile/my.tile.view.js\ndefine([\n 'd2/sdk/widgets/list.tile/list.tile.view',\n 'mybundle/utils/contexts/factories/sample.tile.collection.factory'\n], function(ListTileView, SampleTileCollectionFactory){\n   'use strict';\n\n   var SampleListTileView = ListTileView.extend({\n     constructor: function SampleListTileView(options) {\n       options = options || {};\n       options.collectionFactory = SampleTileCollectionFactory;\n\n       SampleListTileView.__super__.constructor.call(this, options);\n     }\n   });\n\n   return SampleListTileView;\n});\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")," ",(0,n.yg)("em",{parentName:"p"},"(To link this definition to the list of tiles looked up at landing page resolution time)"),"  "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"//in mybundle/extensions/landing.tiles.js\ndefine([], function(){\n 'use strict';\n\n return [{\n   ...\n   tileView: 'mybundle/widgets/my.tile/my.tile.view',\n   ...\n }];\n});\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")," ",(0,n.yg)("em",{parentName:"p"},"(Then finally the extension is registered in extension.json as)"),"  "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'{\n  "d2/sdk/utils/landingpage/tiles": {\n     "extensions": {\n        "mybundle": {\n           "mybundle/extensions/landing.tiles"\n        }\n     }\n   }\n}\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#module_ListTileView"},"ListTileView")," : ",(0,n.yg)("code",null,"d2/sdk/widget/list.tile/list.tile.view"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"instance"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#module_ListTileView+getFactoryParam"},".getFactoryParam()")," \u21d2 ",(0,n.yg)("code",null,"string")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#module_ListTileView+onClickItem"},".onClickItem(target)")," \u21d2 ",(0,n.yg)("code",null,"void")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#module_ListTileView+onClickHeader"},".onClickHeader()")," \u21d2 ",(0,n.yg)("code",null,"void")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"static"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#module_ListTileView.extend"},".extend(protoProperties, staticProperties)")," \u21d2 ",(0,n.yg)("code",null,"function")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"inner"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#module_ListTileView..ListTileView"},"~ListTileView"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#new_module_ListTileView..ListTileView_new"},"new ListTileView(options)")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#module_ListTileView..ListTileData"},"~ListTileData")," : ",(0,n.yg)("code",null,"Object"))))))),(0,n.yg)("a",{name:"module_ListTileView+getFactoryParam"}),(0,n.yg)("h3",{id:"listtileviewgetfactoryparam--string"},"listTileView.getFactoryParam() \u21d2 ",(0,n.yg)("code",null,"string")),(0,n.yg)("p",null,"Get the name of factory param if this list view is backed by a collection factory.\nFor easy coupling factory param should be given a name same as the ",(0,n.yg)("inlineCode",{parentName:"p"},"propertyPrefix")," of the backing collection facatory."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.yg)("a",{parentName:"p",href:"#module_ListTileView"},(0,n.yg)("code",null,"ListTileView")),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("strong",{parentName:"p"},"Returns"),": ",(0,n.yg)("code",null,"string")," - Should return the factory param name.  "),(0,n.yg)("a",{name:"module_ListTileView+onClickItem"}),(0,n.yg)("h3",{id:"listtileviewonclickitemtarget--void"},"listTileView.onClickItem(target) \u21d2 ",(0,n.yg)("code",null,"void")),(0,n.yg)("p",null,"Handles what happens when a list item is clicked or equivalne user interaction happens.\nThe default implementation executes default action associated with the list item."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.yg)("a",{parentName:"p",href:"#module_ListTileView"},(0,n.yg)("code",null,"ListTileView")),"  "),(0,n.yg)("table",null,(0,n.yg)("thead",null,(0,n.yg)("tr",null,(0,n.yg)("th",null,"Param"),(0,n.yg)("th",null,"Type"),(0,n.yg)("th",null,"Description"))),(0,n.yg)("tbody",null,(0,n.yg)("tr",null,(0,n.yg)("td",null,"target"),(0,n.yg)("td",null,(0,n.yg)("code",null,"Marionette.View")),(0,n.yg)("td",null,(0,n.yg)("p",null,"View instance associated with the item being clicked."))),"  ")),(0,n.yg)("a",{name:"module_ListTileView+onClickHeader"}),(0,n.yg)("h3",{id:"listtileviewonclickheader--void"},"listTileView.onClickHeader() \u21d2 ",(0,n.yg)("code",null,"void")),(0,n.yg)("p",null,"Handles what happens when the tile's header is clicked. The default implementation tries to open\nup linked application scope perspective, if any. Setting a special constructor option ",(0,n.yg)("inlineCode",{parentName:"p"},"avoidOpenPerspectiveOnHeader")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"true")," prevents the\ndefault behavior from happening."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.yg)("a",{parentName:"p",href:"#module_ListTileView"},(0,n.yg)("code",null,"ListTileView")),"  "),(0,n.yg)("a",{name:"module_ListTileView.extend"}),(0,n.yg)("h3",{id:"listtileviewextendprotoproperties-staticproperties--function"},"ListTileView.extend(protoProperties, staticProperties) \u21d2 ",(0,n.yg)("code",null,"function")),(0,n.yg)("p",null,"To define a derived type from ",(0,n.yg)("inlineCode",{parentName:"p"},"ListTileView"),"."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.yg)("a",{parentName:"p",href:"#module_ListTileView"},(0,n.yg)("code",null,"ListTileView")),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("strong",{parentName:"p"},"Returns"),": ",(0,n.yg)("code",null,"function")," - The derived type.  "),(0,n.yg)("table",null,(0,n.yg)("thead",null,(0,n.yg)("tr",null,(0,n.yg)("th",null,"Param"),(0,n.yg)("th",null,"Type"),(0,n.yg)("th",null,"Description"))),(0,n.yg)("tbody",null,(0,n.yg)("tr",null,(0,n.yg)("td",null,"protoProperties"),(0,n.yg)("td",null,(0,n.yg)("code",null,"object")),(0,n.yg)("td",null,(0,n.yg)("p",null,"Properties attached to the prototype of derived type."))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"protoProperties.constructor"),(0,n.yg)("td",null,(0,n.yg)("code",null,"function")),(0,n.yg)("td",null,(0,n.yg)("p",null,"The function to be used to construct instance of the derived type."))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"staticProperties"),(0,n.yg)("td",null,(0,n.yg)("code",null,"object")),(0,n.yg)("td",null,(0,n.yg)("p",null,"Properties statically attached to the derived type."))),"  ")),(0,n.yg)("a",{name:"module_ListTileView..ListTileView"}),(0,n.yg)("h3",{id:"listtileviewlisttileview"},"ListTileView~ListTileView"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,n.yg)("a",{parentName:"p",href:"#module_ListTileView"},(0,n.yg)("code",null,"ListTileView")),"  "),(0,n.yg)("a",{name:"new_module_ListTileView..ListTileView_new"}),(0,n.yg)("h4",{id:"new-listtileviewoptions"},"new ListTileView(options)"),(0,n.yg)("table",null,(0,n.yg)("thead",null,(0,n.yg)("tr",null,(0,n.yg)("th",null,"Param"),(0,n.yg)("th",null,"Type"),(0,n.yg)("th",null,"Description"))),(0,n.yg)("tbody",null,(0,n.yg)("tr",null,(0,n.yg)("td",null,"options"),(0,n.yg)("td",null,(0,n.yg)("code",null,"object")),(0,n.yg)("td",null,(0,n.yg)("p",null,"constructor options"))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"[options.data]"),(0,n.yg)("td",null,(0,n.yg)("code",null,"ListTileData")),(0,n.yg)("td",null,(0,n.yg)("p",null,"Generic purpose data. Defaults to nothing."))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"[options.collectionFactory]"),(0,n.yg)("td",null,(0,n.yg)("code",null,"Factory")),(0,n.yg)("td",null,(0,n.yg)("p",null,"A collection factory reference that will be used to create the collection that holds the data for this tile. See ",(0,n.yg)("a",{href:"../../utils/contexts/factories/factory"},"Factory")))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"[options.collection]"),(0,n.yg)("td",null,(0,n.yg)("code",null,"Backbone.Collection")),(0,n.yg)("td",null,(0,n.yg)("p",null,"Reference to a collection instance to be used as data holder. Either one of ",(0,n.yg)("code",null,"collectionFactory")," or ",(0,n.yg)("code",null,"collection")," is required If both are present in ",(0,n.yg)("code",null,"options")," then precedence is given to ",(0,n.yg)("code",null,"collection"),"."))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"[options.lang]"),(0,n.yg)("td",null,(0,n.yg)("code",null,"object")),(0,n.yg)("td",null,(0,n.yg)("p",null,"Translation keys to be used for displaying labels associated with this tile."))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"[options.orderBy]"),(0,n.yg)("td",null,(0,n.yg)("code",null,"string")),(0,n.yg)("td",null,(0,n.yg)("p",null,"Default sorting order for the data to be displayed in this tile. Defaults to ",(0,n.yg)("code",null,"name asc")," i.e sort by item names in ascending order."))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"[options.showTitleIcon]"),(0,n.yg)("td",null,(0,n.yg)("code",null,"Boolean")),(0,n.yg)("td",null,(0,n.yg)("p",null,"Whether to show/hide icon for this tile. Defaults to ",(0,n.yg)("code",null,"true"),"."))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"[options.context]"),(0,n.yg)("td",null,(0,n.yg)("code",null,"Context")),(0,n.yg)("td",null,(0,n.yg)("p",null,"The application context. See ",(0,n.yg)("a",{href:"../../utils/contexts/context.utils#Context"},"Context")))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"[options.showInlineActionBar]"),(0,n.yg)("td",null,(0,n.yg)("code",null,"Boolean")),(0,n.yg)("td",null,(0,n.yg)("p",null,"Whether to show menu actions on this tile's items. Defaults to ",(0,n.yg)("code",null,"true"),". However, actual display of menu depends on ",(0,n.yg)("code",null,"toolbarItems")," configuration and availability of actions against each list item."))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"[options.toolbarItems]"),(0,n.yg)("td",null,(0,n.yg)("code",null,"ToolItemsFactory")),(0,n.yg)("td",null,(0,n.yg)("p",null,"The menu configuration for this tile's items. Default to Doclist menu configuration. See ",(0,n.yg)("a",{href:"../../controls/toolbar/toolitems.factory"},"ToolItemsFactory")))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"[options.applicationScope]"),(0,n.yg)("td",null,(0,n.yg)("code",null,"string")),(0,n.yg)("td",null,(0,n.yg)("p",null,"Name of the application scope perspective which this tile may expand into. The value for this property will be matched against all the registered application scopes. The relevant header button is enabled only if a match is found."))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"[options.hideOpenPerspective]"),(0,n.yg)("td",null,(0,n.yg)("code",null,"Boolean")),(0,n.yg)("td",null,(0,n.yg)("p",null,"Whether to hide the header button that makes this tile expand into the linked application scope perspective. Defaults to ",(0,n.yg)("code",null,"false"),"."))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"[options.hideSearch]"),(0,n.yg)("td",null,(0,n.yg)("code",null,"Boolean")),(0,n.yg)("td",null,(0,n.yg)("p",null,"Whether to hide the search box from tile header. Defaults to ",(0,n.yg)("code",null,"false"),"."))),"  ")),(0,n.yg)("a",{name:"module_ListTileView..ListTileData"}),(0,n.yg)("h3",{id:"listtileviewlisttiledata--object"},"ListTileView~ListTileData : ",(0,n.yg)("code",null,"Object")),(0,n.yg)("p",null,"Generic purpose data for the tile. Properties other than ",(0,n.yg)("inlineCode",{parentName:"p"},"icon")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"title")," are directly merged with other constructor options."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,n.yg)("a",{parentName:"p",href:"#module_ListTileView"},(0,n.yg)("code",null,"ListTileView")),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("strong",{parentName:"p"},"Properties")),(0,n.yg)("table",null,(0,n.yg)("thead",null,(0,n.yg)("tr",null,(0,n.yg)("th",null,"Name"),(0,n.yg)("th",null,"Type"),(0,n.yg)("th",null,"Description"))),(0,n.yg)("tbody",null,(0,n.yg)("tr",null,(0,n.yg)("td",null,"icon"),(0,n.yg)("td",null,(0,n.yg)("code",null,"string")),(0,n.yg)("td",null,(0,n.yg)("p",null,"CSS class name of the tile header icon"))),(0,n.yg)("tr",null,(0,n.yg)("td",null,"title"),(0,n.yg)("td",null,(0,n.yg)("code",null,"string")),(0,n.yg)("td",null,(0,n.yg)("p",null,"Header label for the tile"))),"  ")))}y.isMDXComponent=!0}}]);