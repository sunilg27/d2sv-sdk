"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[6953],{5680:(e,l,t)=>{t.d(l,{xA:()=>d,yg:()=>p});var n=t(6540);function i(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function o(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?o(Object(t),!0).forEach((function(l){i(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function r(e,l){if(null==e)return{};var t,n,i=function(e,l){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],l.indexOf(t)>=0||(i[t]=e[t]);return i}(e,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var g=n.createContext({}),u=function(e){var l=n.useContext(g),t=l;return e&&(t="function"==typeof e?e(l):a(a({},l),e)),t},d=function(e){var l=u(e.components);return n.createElement(g.Provider,{value:l},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},s=n.forwardRef((function(e,l){var t=e.components,i=e.mdxType,o=e.originalType,g=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),y=u(t),s=i,p=y["".concat(g,".").concat(s)]||y[s]||c[s]||o;return t?n.createElement(p,a(a({ref:l},d),{},{components:t})):n.createElement(p,a({ref:l},d))}));function p(e,l){var t=arguments,i=l&&l.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=s;var r={};for(var g in l)hasOwnProperty.call(l,g)&&(r[g]=l[g]);r.originalType=e,r[y]="string"==typeof e?e:i,a[1]=r;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},714:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>g,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var n=t(8168),i=(t(6540),t(5680));const o={},a=void 0,r={unversionedId:"api/d2/utils/landingpage/tiles",id:"api/d2/utils/landingpage/tiles",title:"tiles",description:"TileCollection : d2/sdk/utils/landingpage/tiles",source:"@site/articles/api/d2/utils/landingpage/tiles.md",sourceDirName:"api/d2/utils/landingpage",slug:"/api/d2/utils/landingpage/tiles",permalink:"/d2sv-sdk/24.2.0/api/d2/utils/landingpage/tiles",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"default.widget.types.map",permalink:"/d2sv-sdk/24.2.0/api/d2/utils/landingpage/default.widget.types.map"},next:{title:"oauth.login.dialog",permalink:"/d2sv-sdk/24.2.0/api/d2/utils/oauth.login.dialog"}},g={},u=[{value:"TileCollection : <code>d2/sdk/utils/landingpage/tiles</code>",id:"tilecollection--d2sdkutilslandingpagetiles",level:2},{value:"TileCollection~ShortcutType : <code>enum</code>",id:"tilecollectionshortcuttype--enum",level:3},{value:"TileCollection~LandingTile : <code>Object</code>",id:"tilecollectionlandingtile--object",level:3},{value:"TileCollection~ConfigValidatorCallback \u21d2 <code>ConfigValidatorReturnType</code>",id:"tilecollectionconfigvalidatorcallback--configvalidatorreturntype",level:3},{value:"TileCollection~ConfigValidatorReturnType : <code>Object</code>",id:"tilecollectionconfigvalidatorreturntype--object",level:3},{value:"TileCollection~TileOptionBuilderCallback \u21d2 <code>void</code>",id:"tilecollectiontileoptionbuildercallback--void",level:3},{value:"TileCollection~ShortcutClickHandler \u21d2 <code>void</code>",id:"tilecollectionshortcutclickhandler--void",level:3}],d={toc:u},y="wrapper";function c(e){let{components:l,...t}=e;return(0,i.yg)(y,(0,n.A)({},d,t,{components:l,mdxType:"MDXLayout"}),(0,i.yg)("a",{name:"module_TileCollection"}),(0,i.yg)("h2",{id:"tilecollection--d2sdkutilslandingpagetiles"},"TileCollection : ",(0,i.yg)("code",null,"d2/sdk/utils/landingpage/tiles")),(0,i.yg)("p",null,"Tile definition collection. Each tile definition describes its priority, association type, pre-requisite and finally a view that is used as the\nrepresentation of the tile. Based on priority a particular definition is picked from this collection to finally render D2 Smart View landing page."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Extends"),": ",(0,i.yg)("a",{parentName:"p",href:"https://backbonejs.org/#Collection"},(0,i.yg)("code",null,"Backbone.Collection")),(0,i.yg)("br",{parentName:"p"}),"\n",(0,i.yg)("strong",{parentName:"p"},"See"),": ",(0,i.yg)("a",{parentName:"p",href:"../widget.constants"},"WidgetConstants")," for some related pre-defined constants."),(0,i.yg)("p",null,"New definitions could be added to this collection by means of extension.",(0,i.yg)("br",{parentName:"p"}),"\n",(0,i.yg)("strong",{parentName:"p"},"Example")," ",(0,i.yg)("em",{parentName:"p"},"(to register an extension, add in extension.json)"),"  "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},'{\n  "d2/sdk/utils/landingpage/tiles": {\n     "extensions": {\n        "mybundle": {\n           "mybundle/utils/landingpage/my.tiles"\n        }\n     }\n   }\n}\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Example")," ",(0,i.yg)("em",{parentName:"p"},"(whereas my.tiles.js is defined as)"),"  "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"define(['d2/sdk/utils/widget.constants', 'i18n!mybundle/utils/landingpage/impl/nls/lang'], function(widgetConstants, lang){\n   'use strict';\n\n   function validateURLShortcutConfig(widgetConfig, options) {\n       var validation = {status: true};\n       if (!widgetConfig.widgetParams && !widgetConfig.widgetParams.open_url) {\n         validation.status = false; // It will be considered as a validation error\n         validation.errorMessage = lang.openUrlWidgetMissing;\n       }\n       return validation;\n   }\n\n   // See 'LandingTile' documentation for all possible properties with their usage\n   return [\n     {type: 'CreateFile', icon: 'icon-new', isShortcut: true, tileConfigType: widgetConstants.TileConfigTypes.NONE}, // widget configuration-less shortcut tile\n     {type: 'OpenURLWidget', icon: 'icon-url', isShortcut: true, validateConfig: validateURLShortcutConfig}, // shortcut tile that needs & validates a widget configuration\n     {\n       // A widget tile that relies on the default widget validation\n       type: 'CheckoutDocumentWidget',\n       icon: 'title-checkout',\n       tileView: 'mybundle/widgets/newcheckout',\n       errMissingWidgetConfig: lang.checkoutWidgetMissing,\n       applicationScope: 'checkedout'\n     }\n     // Any other definition\n   ];\n});\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#module_TileCollection"},"TileCollection")," : ",(0,i.yg)("code",null,"d2/sdk/utils/landingpage/tiles"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#module_TileCollection..ShortcutType"},"~ShortcutType")," : ",(0,i.yg)("code",null,"enum")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#module_TileCollection..LandingTile"},"~LandingTile")," : ",(0,i.yg)("code",null,"Object")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#module_TileCollection..ConfigValidatorCallback"},"~ConfigValidatorCallback")," \u21d2 ",(0,i.yg)("code",null,"ConfigValidatorReturnType")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#module_TileCollection..ConfigValidatorReturnType"},"~ConfigValidatorReturnType")," : ",(0,i.yg)("code",null,"Object")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#module_TileCollection..TileOptionBuilderCallback"},"~TileOptionBuilderCallback")," \u21d2 ",(0,i.yg)("code",null,"void")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#module_TileCollection..ShortcutClickHandler"},"~ShortcutClickHandler")," \u21d2 ",(0,i.yg)("code",null,"void"))))),(0,i.yg)("a",{name:"module_TileCollection..ShortcutType"}),(0,i.yg)("h3",{id:"tilecollectionshortcuttype--enum"},"TileCollection~ShortcutType : ",(0,i.yg)("code",null,"enum")),(0,i.yg)("p",null,"OOTB D2SV shortcut types"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Kind"),": inner enum of ",(0,i.yg)("a",{parentName:"p",href:"#module_TileCollection"},(0,i.yg)("code",null,"TileCollection")),(0,i.yg)("br",{parentName:"p"}),"\n",(0,i.yg)("strong",{parentName:"p"},"Properties")),(0,i.yg)("table",null,(0,i.yg)("thead",null,(0,i.yg)("tr",null,(0,i.yg)("th",null,"Name"),(0,i.yg)("th",null,"Description"))),(0,i.yg)("tbody",null,(0,i.yg)("tr",null,(0,i.yg)("td",null,"CreateFile"),(0,i.yg)("td",null,(0,i.yg)("p",null,"New file shortcut"))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"UploadFile"),(0,i.yg)("td",null,(0,i.yg)("p",null,"Import files shortcut"))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"CreateUploadFile"),(0,i.yg)("td",null,(0,i.yg)("p",null,"Combined New/Import file shortcut"))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"UploadFolder"),(0,i.yg)("td",null,(0,i.yg)("p",null,"Import folder shortcut"))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"QueryFormObject"),(0,i.yg)("td",null,(0,i.yg)("p",null,"Query form shortcur"))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"QueryObject"),(0,i.yg)("td",null,(0,i.yg)("p",null,"Saved query/search shortcut"))),"  ")),(0,i.yg)("a",{name:"module_TileCollection..LandingTile"}),(0,i.yg)("h3",{id:"tilecollectionlandingtile--object"},"TileCollection~LandingTile : ",(0,i.yg)("code",null,"Object")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,i.yg)("a",{parentName:"p",href:"#module_TileCollection"},(0,i.yg)("code",null,"TileCollection")),(0,i.yg)("br",{parentName:"p"}),"\n",(0,i.yg)("strong",{parentName:"p"},"Properties")),(0,i.yg)("table",null,(0,i.yg)("thead",null,(0,i.yg)("tr",null,(0,i.yg)("th",null,"Name"),(0,i.yg)("th",null,"Type"),(0,i.yg)("th",null,"Default"),(0,i.yg)("th",null,"Description"))),(0,i.yg)("tbody",null,(0,i.yg)("tr",null,(0,i.yg)("td",null,"[sequence]"),(0,i.yg)("td",null,(0,i.yg)("code",null,"number")),(0,i.yg)("td",null,(0,i.yg)("code",null,"1000")),(0,i.yg)("td",null,(0,i.yg)("p",null,"Priority of this definition. For matching ",(0,i.yg)("code",null,"type")," property values, the definition with least value for ",(0,i.yg)("code",null,"sequence")," will be used."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"type"),(0,i.yg)("td",null,(0,i.yg)("code",null,"string")),(0,i.yg)("td",null),(0,i.yg)("td",null,(0,i.yg)("p",null,"Association type of this tile. It should be set with a value from the enumeration ",(0,i.yg)("code",null,"ShortcutType"),", or any D2 widget type name. Additional shortcut types or widget types declared by a D2 plugin also could be used."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"icon"),(0,i.yg)("td",null,(0,i.yg)("code",null,"string")),(0,i.yg)("td",null),(0,i.yg)("td",null,(0,i.yg)("p",null,"CSS class name of the icon to be shown on the tile. For non-shortcut tiles, the icon is shown in the tile header."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"[isShortcut]"),(0,i.yg)("td",null,(0,i.yg)("code",null,"boolean")),(0,i.yg)("td",null,(0,i.yg)("code",null,"false")),(0,i.yg)("td",null,(0,i.yg)("p",null,"Whether it's shortcut tile or widget tile? ",(0,i.yg)("code",null,"true")," indicates a shortcut."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"[tileConfigType]"),(0,i.yg)("td",null,(0,i.yg)("code",null,"TileConfigTypes")),(0,i.yg)("td",null,(0,i.yg)("code",null,"TileConfigTypes.WIDGET")),(0,i.yg)("td",null,(0,i.yg)("p",null,"Tiles that don't require a widget config should set it to ",(0,i.yg)("code",null,"TileConfigTypes.NONE"),". See ",(0,i.yg)("a",{href:"../widget.constants#TileConfigTypes"},"TileConfigTypes"),"."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"[tileView]"),(0,i.yg)("td",null,(0,i.yg)("code",null,"string")),(0,i.yg)("td",null),(0,i.yg)("td",null,(0,i.yg)("p",null,"Not required for shortcut tiles. For other tiles it should point to a folder implementing the view to be associated with this tile. E.g For a path ",(0,i.yg)("code",null,"mybundle/widget/somefolder")," the runtime will look for a ",(0,i.yg)("code",null,"somefolder.view.js")," within the ",(0,i.yg)("code",null,"somefolder")," directory. Alternatively it can be specified as just a name like ",(0,i.yg)("code",null,"mytile"),", in that case the tile's view will be resolved as",(0,i.yg)("code",null,"<bundle_src_folder>/widgets/mytile/mytile.view.js"),"."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"[clickHandler]"),(0,i.yg)("td",null,(0,i.yg)("code",null,"ShortcutClickHandler")),(0,i.yg)("td",null),(0,i.yg)("td",null,(0,i.yg)("p",null,"Callback to be executed only for those shortcut tiles that neither specifies an ",(0,i.yg)("code",null,"applicationScope")," (see below) nor a matching shortcut behavior is found in the registry. See ",(0,i.yg)("a",{href:"../../widgets/shortcut.tile/shortcut.tile.behaviors"},"ShortcutBehaviors"),"."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"[validateConfig]"),(0,i.yg)("td",null,(0,i.yg)("code",null,"ConfigValidatorCallback")),(0,i.yg)("td",null),(0,i.yg)("td",null,(0,i.yg)("p",null,"Callback to validate the resolved widget config."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"[buildTileOptions]"),(0,i.yg)("td",null,(0,i.yg)("code",null,"TileOptionBuilderCallback")),(0,i.yg)("td",null),(0,i.yg)("td",null,(0,i.yg)("p",null,"Callback to build tile options that would be passed to the ",(0,i.yg)("code",null,"tileView")," while constructing."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"[errMissingWidgetName]"),(0,i.yg)("td",null,(0,i.yg)("code",null,"string")),(0,i.yg)("td",null),(0,i.yg)("td",null,(0,i.yg)("p",null,"The error to be shown if a tile definition requires a widget config but the corresponding D2 Smart View landing page configuraiton fails to specify a name for it. If unspecified, a generic error message is shown."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"[errMissingWidgetConfig]"),(0,i.yg)("td",null,(0,i.yg)("code",null,"string")),(0,i.yg)("td",null),(0,i.yg)("td",null,(0,i.yg)("p",null,"The error to be shown if a tile definition requires a widget config but a suitable widget configuration could not be resolved for some reason."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"[applicationScope]"),(0,i.yg)("td",null,(0,i.yg)("code",null,"string")),(0,i.yg)("td",null),(0,i.yg)("td",null,(0,i.yg)("p",null,"The application scope in which this tile will expand into. Tile expansion is enabled only if this value matches one of the registered application scope perspectives's id. See ",(0,i.yg)("a",{href:"../perspectives/app.scope.perspectives"},"ApplicationScopePerspectives"),". For shortcut tiles, clicking anywhere in the tile activates the expansion. For list type of tiles, the tile header or a dedicated 'Expand' button could be clicked to activate the expansion."))),"  ")),(0,i.yg)("a",{name:"module_TileCollection..ConfigValidatorCallback"}),(0,i.yg)("h3",{id:"tilecollectionconfigvalidatorcallback--configvalidatorreturntype"},"TileCollection~ConfigValidatorCallback \u21d2 ",(0,i.yg)("code",null,"ConfigValidatorReturnType")),(0,i.yg)("p",null,"Callback function that validates a widget configuration for a tile"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,i.yg)("a",{parentName:"p",href:"#module_TileCollection"},(0,i.yg)("code",null,"TileCollection")),"  "),(0,i.yg)("table",null,(0,i.yg)("thead",null,(0,i.yg)("tr",null,(0,i.yg)("th",null,"Param"),(0,i.yg)("th",null,"Type"),(0,i.yg)("th",null,"Description"))),(0,i.yg)("tbody",null,(0,i.yg)("tr",null,(0,i.yg)("td",null,"widgetConfig"),(0,i.yg)("td",null,(0,i.yg)("code",null,"Object")),(0,i.yg)("td",null,(0,i.yg)("p",null,"The widget configuration being validated"))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"[options]"),(0,i.yg)("td",null,(0,i.yg)("code",null,"Object")),(0,i.yg)("td",null,(0,i.yg)("p",null,"Any additional context specific data that is not part of ",(0,i.yg)("code",null,"widgetConfig")," but might be relevant for validation"))),"  ")),(0,i.yg)("a",{name:"module_TileCollection..ConfigValidatorReturnType"}),(0,i.yg)("h3",{id:"tilecollectionconfigvalidatorreturntype--object"},"TileCollection~ConfigValidatorReturnType : ",(0,i.yg)("code",null,"Object")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,i.yg)("a",{parentName:"p",href:"#module_TileCollection"},(0,i.yg)("code",null,"TileCollection")),(0,i.yg)("br",{parentName:"p"}),"\n",(0,i.yg)("strong",{parentName:"p"},"Properties")),(0,i.yg)("table",null,(0,i.yg)("thead",null,(0,i.yg)("tr",null,(0,i.yg)("th",null,"Name"),(0,i.yg)("th",null,"Type"),(0,i.yg)("th",null,"Description"))),(0,i.yg)("tbody",null,(0,i.yg)("tr",null,(0,i.yg)("td",null,"status"),(0,i.yg)("td",null,(0,i.yg)("code",null,"boolean")),(0,i.yg)("td",null,(0,i.yg)("p",null,(0,i.yg)("code",null,"true")," indicates validation succeeded, ",(0,i.yg)("code",null,"false")," otherwise."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"[errorMessage]"),(0,i.yg)("td",null,(0,i.yg)("code",null,"string")),(0,i.yg)("td",null,(0,i.yg)("p",null,"Error message to be shown in UI if the validation failed."))),"  ")),(0,i.yg)("a",{name:"module_TileCollection..TileOptionBuilderCallback"}),(0,i.yg)("h3",{id:"tilecollectiontileoptionbuildercallback--void"},"TileCollection~TileOptionBuilderCallback \u21d2 ",(0,i.yg)("code",null,"void")),(0,i.yg)("p",null,"Callback function that builds options for a tile"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,i.yg)("a",{parentName:"p",href:"#module_TileCollection"},(0,i.yg)("code",null,"TileCollection")),"  "),(0,i.yg)("table",null,(0,i.yg)("thead",null,(0,i.yg)("tr",null,(0,i.yg)("th",null,"Param"),(0,i.yg)("th",null,"Type"),(0,i.yg)("th",null,"Description"))),(0,i.yg)("tbody",null,(0,i.yg)("tr",null,(0,i.yg)("td",null,"tile"),(0,i.yg)("td",null,(0,i.yg)("code",null,"Object")),(0,i.yg)("td",null,(0,i.yg)("p",null,"Parsed tile object from D2 Smart View landing page configuration. New properties could be attached to this object as part of forming additional option."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"[widgetConfig]"),(0,i.yg)("td",null,(0,i.yg)("code",null,"Object")),(0,i.yg)("td",null,(0,i.yg)("p",null,"Any relevant wieget configuration, applicable only if the tile requires a widget configuration."))),"  ")),(0,i.yg)("a",{name:"module_TileCollection..ShortcutClickHandler"}),(0,i.yg)("h3",{id:"tilecollectionshortcutclickhandler--void"},"TileCollection~ShortcutClickHandler \u21d2 ",(0,i.yg)("code",null,"void")),(0,i.yg)("p",null,"Callback to handle click event for a shortcut tile"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,i.yg)("a",{parentName:"p",href:"#module_TileCollection"},(0,i.yg)("code",null,"TileCollection")),"  "),(0,i.yg)("table",null,(0,i.yg)("thead",null,(0,i.yg)("tr",null,(0,i.yg)("th",null,"Param"),(0,i.yg)("th",null,"Type"),(0,i.yg)("th",null,"Description"))),(0,i.yg)("tbody",null,(0,i.yg)("tr",null,(0,i.yg)("td",null,"options"),(0,i.yg)("td",null,(0,i.yg)("code",null,"object")),(0,i.yg)("td",null,(0,i.yg)("p",null,"The options container."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"options.context"),(0,i.yg)("td",null,(0,i.yg)("code",null,"Context")),(0,i.yg)("td",null,(0,i.yg)("p",null,(0,i.yg)("code",null,"context")," object associated with the runtime. See ",(0,i.yg)("a",{href:"../contexts/context.utils#Context"},"Context"),"."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"options.widgetName"),(0,i.yg)("td",null,(0,i.yg)("code",null,"string")),(0,i.yg)("td",null,(0,i.yg)("p",null,"Name of the widget configuration if the shortcut is of type ",(0,i.yg)("code",null,"TileConfigTypes.WIDGET"),". See ",(0,i.yg)("a",{href:"../widget.constants#module_WidgetConstants.TileConfigTypes"},"TileConfigTypes"),"."))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"options.widgetParams"),(0,i.yg)("td",null,(0,i.yg)("code",null,"object")),(0,i.yg)("td",null,(0,i.yg)("p",null,"Any parameters associated with the resolved widget configuration. Applicable only if the shortcut is of type ",(0,i.yg)("code",null,"TileConfigTypes.WIDGET"),". See ",(0,i.yg)("a",{href:"../widget.constants#TileConfigTypes"},"TileConfigTypes"),"."))),"  ")))}c.isMDXComponent=!0}}]);