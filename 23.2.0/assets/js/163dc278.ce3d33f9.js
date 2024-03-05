"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5459],{3905:(t,e,l)=>{l.d(e,{Zo:()=>c,kt:()=>g});var n=l(7294);function i(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){i(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function r(t,e){if(null==t)return{};var l,n,i=function(t,e){if(null==t)return{};var l,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||(i[l]=t[l]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(i[l]=t[l])}return i}var u=n.createContext({}),d=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},c=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),s=d(l),p=i,g=s["".concat(u,".").concat(p)]||s[p]||k[p]||o;return l?n.createElement(g,a(a({ref:e},c),{},{components:l})):n.createElement(g,a({ref:e},c))}));function g(t,e){var l=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=l.length,a=new Array(o);a[0]=p;var r={};for(var u in e)hasOwnProperty.call(e,u)&&(r[u]=e[u]);r.originalType=t,r[s]="string"==typeof t?t:i,a[1]=r;for(var d=2;d<o;d++)a[d]=l[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},9460:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>k,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=l(7462),i=(l(7294),l(3905));const o={},a=void 0,r={unversionedId:"api/d2/utils/landingpage/tiles",id:"api/d2/utils/landingpage/tiles",title:"tiles",description:"TileCollection : d2/sdk/utils/landingpage/tiles",source:"@site/articles/api/d2/utils/landingpage/tiles.md",sourceDirName:"api/d2/utils/landingpage",slug:"/api/d2/utils/landingpage/tiles",permalink:"/d2sv-sdk/23.2.0/api/d2/utils/landingpage/tiles",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"default.widget.types.map",permalink:"/d2sv-sdk/23.2.0/api/d2/utils/landingpage/default.widget.types.map"},next:{title:"oauth.login.dialog",permalink:"/d2sv-sdk/23.2.0/api/d2/utils/oauth.login.dialog"}},u={},d=[{value:"TileCollection : <code>d2/sdk/utils/landingpage/tiles</code>",id:"tilecollection--d2sdkutilslandingpagetiles",level:2},{value:"TileCollection~ShortcutType : <code>enum</code>",id:"tilecollectionshortcuttype--enum",level:3},{value:"TileCollection~LandingTile : <code>Object</code>",id:"tilecollectionlandingtile--object",level:3},{value:"TileCollection~ConfigValidatorCallback \u21d2 <code>ConfigValidatorReturnType</code>",id:"tilecollectionconfigvalidatorcallback--configvalidatorreturntype",level:3},{value:"TileCollection~ConfigValidatorReturnType : <code>Object</code>",id:"tilecollectionconfigvalidatorreturntype--object",level:3},{value:"TileCollection~TileOptionBuilderCallback \u21d2 <code>void</code>",id:"tilecollectiontileoptionbuildercallback--void",level:3},{value:"TileCollection~ShortcutClickHandler \u21d2 <code>void</code>",id:"tilecollectionshortcutclickhandler--void",level:3}],c={toc:d},s="wrapper";function k(t){let{components:e,...l}=t;return(0,i.kt)(s,(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"module_TileCollection"}),(0,i.kt)("h2",{id:"tilecollection--d2sdkutilslandingpagetiles"},"TileCollection : ",(0,i.kt)("code",null,"d2/sdk/utils/landingpage/tiles")),(0,i.kt)("p",null,"Tile definition collection. Each tile definition describes its priority, association type, pre-requisite and finally a view that is used as the\nrepresentation of the tile. Based on priority a particular definition is picked from this collection to finally render D2 Smart View landing page."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Extends"),": ",(0,i.kt)("a",{parentName:"p",href:"https://backbonejs.org/#Collection"},(0,i.kt)("code",null,"Backbone.Collection")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"See"),": ",(0,i.kt)("a",{parentName:"p",href:"../widget.constants"},"WidgetConstants")," for some related pre-defined constants."),(0,i.kt)("p",null,"New definitions could be added to this collection by means of extension.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Example")," ",(0,i.kt)("em",{parentName:"p"},"(to register an extension, add in extension.json)"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "d2/sdk/utils/landingpage/tiles": {\n     "extensions": {\n        "mybundle": {\n           "mybundle/utils/landingpage/my.tiles"\n        }\n     }\n   }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," ",(0,i.kt)("em",{parentName:"p"},"(whereas my.tiles.js is defined as)"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"define(['d2/sdk/utils/widget.constants', 'i18n!mybundle/utils/landingpage/impl/nls/lang'], function(widgetConstants, lang){\n   'use strict';\n\n   function validateURLShortcutConfig(widgetConfig, options) {\n       var validation = {status: true};\n       if (!widgetConfig.widgetParams && !widgetConfig.widgetParams.open_url) {\n         validation.status = false; // It will be considered as a validation error\n         validation.errorMessage = lang.openUrlWidgetMissing;\n       }\n       return validation;\n   }\n\n   // See 'LandingTile' documentation for all possible properties with their usage\n   return [\n     {type: 'CreateFile', icon: 'icon-new', isShortcut: true, tileConfigType: widgetConstants.TileConfigTypes.NONE}, // widget configuration-less shortcut tile\n     {type: 'OpenURLWidget', icon: 'icon-url', isShortcut: true, validateConfig: validateURLShortcutConfig}, // shortcut tile that needs & validates a widget configuration\n     {\n       // A widget tile that relies on the default widget validation\n       type: 'CheckoutDocumentWidget',\n       icon: 'title-checkout',\n       tileView: 'mybundle/widgets/newcheckout',\n       errMissingWidgetConfig: lang.checkoutWidgetMissing,\n       applicationScope: 'checkedout'\n     }\n     // Any other definition\n   ];\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_TileCollection"},"TileCollection")," : ",(0,i.kt)("code",null,"d2/sdk/utils/landingpage/tiles"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_TileCollection..ShortcutType"},"~ShortcutType")," : ",(0,i.kt)("code",null,"enum")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_TileCollection..LandingTile"},"~LandingTile")," : ",(0,i.kt)("code",null,"Object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_TileCollection..ConfigValidatorCallback"},"~ConfigValidatorCallback")," \u21d2 ",(0,i.kt)("code",null,"ConfigValidatorReturnType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_TileCollection..ConfigValidatorReturnType"},"~ConfigValidatorReturnType")," : ",(0,i.kt)("code",null,"Object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_TileCollection..TileOptionBuilderCallback"},"~TileOptionBuilderCallback")," \u21d2 ",(0,i.kt)("code",null,"void")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_TileCollection..ShortcutClickHandler"},"~ShortcutClickHandler")," \u21d2 ",(0,i.kt)("code",null,"void"))))),(0,i.kt)("a",{name:"module_TileCollection..ShortcutType"}),(0,i.kt)("h3",{id:"tilecollectionshortcuttype--enum"},"TileCollection~ShortcutType : ",(0,i.kt)("code",null,"enum")),(0,i.kt)("p",null,"OOTB D2SV shortcut types"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": inner enum of ",(0,i.kt)("a",{parentName:"p",href:"#module_TileCollection"},(0,i.kt)("code",null,"TileCollection")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Properties")),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Name"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"CreateFile"),(0,i.kt)("td",null,(0,i.kt)("p",null,"New file shortcut"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"UploadFile"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Import files shortcut"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"CreateUploadFile"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Combined New/Import file shortcut"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"UploadFolder"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Import folder shortcut"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"QueryFormObject"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Query form shortcur"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"QueryObject"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Saved query/search shortcut"))),"  ")),(0,i.kt)("a",{name:"module_TileCollection..LandingTile"}),(0,i.kt)("h3",{id:"tilecollectionlandingtile--object"},"TileCollection~LandingTile : ",(0,i.kt)("code",null,"Object")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,i.kt)("a",{parentName:"p",href:"#module_TileCollection"},(0,i.kt)("code",null,"TileCollection")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Properties")),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Name"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Default"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"[sequence]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",null,(0,i.kt)("code",null,"1000")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Priority of this definition. For matching ",(0,i.kt)("code",null,"type")," property values, the definition with least value for ",(0,i.kt)("code",null,"sequence")," will be used."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"type"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"Association type of this tile. It should be set with a value from the enumeration ",(0,i.kt)("code",null,"ShortcutType"),", or any D2 widget type name. Additional shortcut types or widget types declared by a D2 plugin also could be used."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"icon"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"CSS class name of the icon to be shown on the tile. For non-shortcut tiles, the icon is shown in the tile header."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[isShortcut]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",null,(0,i.kt)("code",null,"false")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Whether it's shortcut tile or widget tile? ",(0,i.kt)("code",null,"true")," indicates a shortcut."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[tileConfigType]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"TileConfigTypes")),(0,i.kt)("td",null,(0,i.kt)("code",null,"TileConfigTypes.WIDGET")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Tiles that don't require a widget config should set it to ",(0,i.kt)("code",null,"TileConfigTypes.NONE"),". See ",(0,i.kt)("a",{href:"../widget.constants#TileConfigTypes"},"TileConfigTypes"),"."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[tileView]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"Not required for shortcut tiles. For other tiles it should point to a folder implementing the view to be associated with this tile. E.g For a path ",(0,i.kt)("code",null,"mybundle/widget/somefolder")," the runtime will look for a ",(0,i.kt)("code",null,"somefolder.view.js")," within the ",(0,i.kt)("code",null,"somefolder")," directory. Alternatively it can be specified as just a name like ",(0,i.kt)("code",null,"mytile"),", in that case the tile's view will be resolved as",(0,i.kt)("code",null,"<bundle_src_folder>/widgets/mytile/mytile.view.js"),"."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[clickHandler]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"ShortcutClickHandler")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"Callback to be executed only for those shortcut tiles that neither specifies an ",(0,i.kt)("code",null,"applicationScope")," (see below) nor a matching shortcut behavior is found in the registry. See ",(0,i.kt)("a",{href:"../../widgets/shortcut.tile/shortcut.tile.behaviors"},"ShortcutBehaviors"),"."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[validateConfig]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"ConfigValidatorCallback")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"Callback to validate the resolved widget config."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[buildTileOptions]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"TileOptionBuilderCallback")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"Callback to build tile options that would be passed to the ",(0,i.kt)("code",null,"tileView")," while constructing."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[errMissingWidgetName]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"The error to be shown if a tile definition requires a widget config but the corresponding D2 Smart View landing page configuraiton fails to specify a name for it. If unspecified, a generic error message is shown."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[errMissingWidgetConfig]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"The error to be shown if a tile definition requires a widget config but a suitable widget configuration could not be resolved for some reason."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[applicationScope]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"The application scope in which this tile will expand into. Tile expansion is enabled only if this value matches one of the registered application scope perspectives's id. See ",(0,i.kt)("a",{href:"../perspectives/app.scope.perspectives"},"ApplicationScopePerspectives"),". For shortcut tiles, clicking anywhere in the tile activates the expansion. For list type of tiles, the tile header or a dedicated 'Expand' button could be clicked to activate the expansion."))),"  ")),(0,i.kt)("a",{name:"module_TileCollection..ConfigValidatorCallback"}),(0,i.kt)("h3",{id:"tilecollectionconfigvalidatorcallback--configvalidatorreturntype"},"TileCollection~ConfigValidatorCallback \u21d2 ",(0,i.kt)("code",null,"ConfigValidatorReturnType")),(0,i.kt)("p",null,"Callback function that validates a widget configuration for a tile"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,i.kt)("a",{parentName:"p",href:"#module_TileCollection"},(0,i.kt)("code",null,"TileCollection")),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Param"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"widgetConfig"),(0,i.kt)("td",null,(0,i.kt)("code",null,"Object")),(0,i.kt)("td",null,(0,i.kt)("p",null,"The widget configuration being validated"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[options]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"Object")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Any additional context specific data that is not part of ",(0,i.kt)("code",null,"widgetConfig")," but might be relevant for validation"))),"  ")),(0,i.kt)("a",{name:"module_TileCollection..ConfigValidatorReturnType"}),(0,i.kt)("h3",{id:"tilecollectionconfigvalidatorreturntype--object"},"TileCollection~ConfigValidatorReturnType : ",(0,i.kt)("code",null,"Object")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,i.kt)("a",{parentName:"p",href:"#module_TileCollection"},(0,i.kt)("code",null,"TileCollection")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Properties")),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Name"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"status"),(0,i.kt)("td",null,(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("code",null,"true")," indicates validation succeeded, ",(0,i.kt)("code",null,"false")," otherwise."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[errorMessage]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Error message to be shown in UI if the validation failed."))),"  ")),(0,i.kt)("a",{name:"module_TileCollection..TileOptionBuilderCallback"}),(0,i.kt)("h3",{id:"tilecollectiontileoptionbuildercallback--void"},"TileCollection~TileOptionBuilderCallback \u21d2 ",(0,i.kt)("code",null,"void")),(0,i.kt)("p",null,"Callback function that builds options for a tile"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,i.kt)("a",{parentName:"p",href:"#module_TileCollection"},(0,i.kt)("code",null,"TileCollection")),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Param"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"tile"),(0,i.kt)("td",null,(0,i.kt)("code",null,"Object")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Parsed tile object from D2 Smart View landing page configuration. New properties could be attached to this object as part of forming additional option."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[widgetConfig]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"Object")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Any relevant wieget configuration, applicable only if the tile requires a widget configuration."))),"  ")),(0,i.kt)("a",{name:"module_TileCollection..ShortcutClickHandler"}),(0,i.kt)("h3",{id:"tilecollectionshortcutclickhandler--void"},"TileCollection~ShortcutClickHandler \u21d2 ",(0,i.kt)("code",null,"void")),(0,i.kt)("p",null,"Callback to handle click event for a shortcut tile"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,i.kt)("a",{parentName:"p",href:"#module_TileCollection"},(0,i.kt)("code",null,"TileCollection")),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Param"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"options"),(0,i.kt)("td",null,(0,i.kt)("code",null,"object")),(0,i.kt)("td",null,(0,i.kt)("p",null,"The options container."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"options.context"),(0,i.kt)("td",null,(0,i.kt)("code",null,"Context")),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("code",null,"context")," object associated with the runtime. See ",(0,i.kt)("a",{href:"../contexts/context.utils#Context"},"Context"),"."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"options.widgetName"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Name of the widget configuration if the shortcut is of type ",(0,i.kt)("code",null,"TileConfigTypes.WIDGET"),". See ",(0,i.kt)("a",{href:"../widget.constants#module_WidgetConstants.TileConfigTypes"},"TileConfigTypes"),"."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"options.widgetParams"),(0,i.kt)("td",null,(0,i.kt)("code",null,"object")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Any parameters associated with the resolved widget configuration. Applicable only if the shortcut is of type ",(0,i.kt)("code",null,"TileConfigTypes.WIDGET"),". See ",(0,i.kt)("a",{href:"../widget.constants#TileConfigTypes"},"TileConfigTypes"),"."))),"  ")))}k.isMDXComponent=!0}}]);