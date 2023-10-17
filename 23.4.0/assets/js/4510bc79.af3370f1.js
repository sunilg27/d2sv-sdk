"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5663],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>f});var n=l(7294);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function p(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?p(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):p(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,i=function(e,t){if(null==e)return{};var l,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)l=p[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)l=p[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var r=n.createContext({}),s=function(e){var t=n.useContext(r),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},c=function(e){var t=s(e.components);return n.createElement(r.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,i=e.mdxType,p=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(l),k=i,f=d["".concat(r,".").concat(k)]||d[k]||u[k]||p;return l?n.createElement(f,a(a({ref:t},c),{},{components:l})):n.createElement(f,a({ref:t},c))}));function f(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=l.length,a=new Array(p);a[0]=k;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<p;s++)a[s]=l[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},7841:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=l(7462),i=(l(7294),l(3905));const p={},a=void 0,o={unversionedId:"api/d2/utils/perspectives/app.scope.perspectives",id:"api/d2/utils/perspectives/app.scope.perspectives",title:"app.scope.perspectives",description:"ApplicationScopePerspectives : d2/sdk/utils/perspectives/app.scope.perspectives",source:"@site/articles/api/d2/utils/perspectives/app.scope.perspectives.md",sourceDirName:"api/d2/utils/perspectives",slug:"/api/d2/utils/perspectives/app.scope.perspectives",permalink:"/d2sv-sdk/23.4.0/api/d2/utils/perspectives/app.scope.perspectives",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"oauth.login.dialog",permalink:"/d2sv-sdk/23.4.0/api/d2/utils/oauth.login.dialog"},next:{title:"rest.linkrels",permalink:"/d2sv-sdk/23.4.0/api/d2/utils/rest.linkrels"}},r={},s=[{value:"ApplicationScopePerspectives : <code>d2/sdk/utils/perspectives/app.scope.perspectives</code>",id:"applicationscopeperspectives--d2sdkutilsperspectivesappscopeperspectives",level:2},{value:"ApplicationScopePerspectives~AppScope : <code>Object</code>",id:"applicationscopeperspectivesappscope--object",level:3},{value:"ApplicationScopePerspectives~ConfigValidatorCallback \u21d2 <code>ConfigValidatorReturnType</code>",id:"applicationscopeperspectivesconfigvalidatorcallback--configvalidatorreturntype",level:3},{value:"ApplicationScopePerspectives~ConfigValidatorReturnType : <code>Object</code>",id:"applicationscopeperspectivesconfigvalidatorreturntype--object",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...l}=e;return(0,i.kt)(d,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"module_ApplicationScopePerspectives"}),(0,i.kt)("h2",{id:"applicationscopeperspectives--d2sdkutilsperspectivesappscopeperspectives"},"ApplicationScopePerspectives : ",(0,i.kt)("code",null,"d2/sdk/utils/perspectives/app.scope.perspectives")),(0,i.kt)("p",null,"Application scope collection. Each navigable area within the D2 Smart View application page is called a perspective.\nE.g the area shown immediate after a user login is called landing perpsective."),(0,i.kt)("p",null,"An application scope is the immediate next navigable area from the landing perspective. It can be activated by user interacting with a tile\nin landing perspective or by direct URL. Once activated, depending on how the application scope is defined, one or several view components are going to take over\nthe screen space and provide a holistic UI with related functional features for the perspective."),(0,i.kt)("p",null,"This collection is a registry of all such scope definitions and could be extended by extension"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Extends"),": ",(0,i.kt)("a",{parentName:"p",href:"https://backbonejs.org/#Collection"},(0,i.kt)("code",null,"Backbone.Collection")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Example")," ",(0,i.kt)("em",{parentName:"p"},"(to register an extension, add in extension.json)"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "d2/sdk/utils/perspectives/app.scope.perspectives": {\n     "extensions": {\n        "mybundle": {\n           "mybundle/utils/perspectives/my.app.scopes"\n        }\n     }\n   }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," ",(0,i.kt)("em",{parentName:"p"},"(whereas my.app.scopes.js is defined as)"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"define(['i18n!mybundle/utils/landingpage/impl/nls/lang'], function(lang){\n   'use strict';\n\n   function openURLWidgetConfigValidator(widgetConfig, options) {\n       var validation = {status: true};\n       if (!widgetConfig.widgetParams && !widgetConfig.widgetParams.open_url) {\n         validation.status = false; // It will be considered as a validation error\n         validation.errorMessage = lang.openUrlWidgetValidationFailed;\n       }\n       return validation;\n   }\n\n   // See 'AppScope' documentation for all possible properties with their usage\n   return [\n     {applicationScope: 'sample1'}, // widget-less application scope where the perspective descriptor location is inferred\n     {applicationScope: 'sample2', perspectiveJson: 'sample2.perspective.json'}, // widget-less application scope where the perspective descriptor location is partially inferred\n     {\n       // scope that requires widget config and declares explicit location of perspective descriptor\n       applicationScope: 'sample3',\n       perspectiveJson: 'mybundle/utils/perspectives/sample3.perspective.json',\n       widgetType: 'OpenURLWidget',\n       validateConfig: openURLWidgetConfigValidator\n     }\n     // Any other definition\n   ];\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_ApplicationScopePerspectives"},"ApplicationScopePerspectives")," : ",(0,i.kt)("code",null,"d2/sdk/utils/perspectives/app.scope.perspectives"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_ApplicationScopePerspectives..AppScope"},"~AppScope")," : ",(0,i.kt)("code",null,"Object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_ApplicationScopePerspectives..ConfigValidatorCallback"},"~ConfigValidatorCallback")," \u21d2 ",(0,i.kt)("code",null,"ConfigValidatorReturnType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_ApplicationScopePerspectives..ConfigValidatorReturnType"},"~ConfigValidatorReturnType")," : ",(0,i.kt)("code",null,"Object"))))),(0,i.kt)("a",{name:"module_ApplicationScopePerspectives..AppScope"}),(0,i.kt)("h3",{id:"applicationscopeperspectivesappscope--object"},"ApplicationScopePerspectives~AppScope : ",(0,i.kt)("code",null,"Object")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,i.kt)("a",{parentName:"p",href:"#module_ApplicationScopePerspectives"},(0,i.kt)("code",null,"ApplicationScopePerspectives")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Properties")),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Name"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Default"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"[sequence]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",null,(0,i.kt)("code",null,"1000")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Priority of this definition. For matching ",(0,i.kt)("code",null,"applicationScope")," property values, the definition with least value for ",(0,i.kt)("code",null,"sequence")," will be used."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"applicationScope"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"ID of this scope. Also used in forming the URL that links to this application scope directly."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[perspectiveJson]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"Path to the descriptor JSON file for this perspective. It can be specified explicitly as ",(0,i.kt)("code",null,"mybundle/utils/perspectives/abc.json")," or partially as ",(0,i.kt)("code",null,"a.perspective.json"),". If specified partially then the complete path is resolved as ",(0,i.kt)("code",null,"<bundle_src_folder>/utils/perspectives/a.perspective.json"),". As another alternative, this property can be omitted altogether, in that case the value of ",(0,i.kt)("code",null,"applicationScope")," property is used to resolve e.g if ",(0,i.kt)("code",null,"applicationScope")," is specified as ",(0,i.kt)("code",null,"sample")," then, ",(0,i.kt)("code",null,"perspectiveJson")," defaults to ",(0,i.kt)("code",null,"sample.json")," and that in-turn gets expanded into the complete path ",(0,i.kt)("code",null,"<bundle_src_folder>/utils/perspectives/sample.json"),"."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[defaultTitle]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"The value to be passed as ",(0,i.kt)("code",null,"title")," to the outermost view component of this perspective. Ignored if this application scope is driven by a widget configuration, in that case the label/name of the widget config is used as title."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[defaultWidgetType]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"If activating this application scope demands a default widget configuration, then specify the type in this property. This should be specified only if an application scope requires a widget configuration and allows direct URL navigation. A value from the OOTB default widget types could be used, see ",(0,i.kt)("a",{href:"../widget.constants#DEFAULT"},"DEFAULT")," or any new default widget types introduced by a D2 plugin could be used."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[widgetType]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"Type of the D2-Config widget associated with this application scope. Needs to be specified only if this scope requires a widget configuration. If omitted even when this scope requires a widget configuration, value for this property is deduced from ",(0,i.kt)("code",null,"defaultWidgetType")," property. A value from the OOTB widget types could be used, ",(0,i.kt)("a",{href:"../widget.constants#D2"},"D2")," or any valid widget type from D2-Config could be used."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[validateConfig]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"ConfigValidatorCallback")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"Callback to validate the resolved config for this scope. Applicable only if this scope has specified one of ",(0,i.kt)("code",null,"defaultWidgetType")," or ",(0,i.kt)("code",null,"widgetType"),"."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[beforeActivateScope]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"callback")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"A no-argument callback invoked right before this application scope is just about to get activated. The callback should return ",(0,i.kt)("code",null,"false")," if it does not want to get activated."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[afterDeactivateScope]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"callback")),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)("p",null,"A no-argument callback invoked if this application scope was enabled earlier and now being swapped out because a different application scope has been activated."))),"  ")),(0,i.kt)("a",{name:"module_ApplicationScopePerspectives..ConfigValidatorCallback"}),(0,i.kt)("h3",{id:"applicationscopeperspectivesconfigvalidatorcallback--configvalidatorreturntype"},"ApplicationScopePerspectives~ConfigValidatorCallback \u21d2 ",(0,i.kt)("code",null,"ConfigValidatorReturnType")),(0,i.kt)("p",null,"Callback function that validates widget configuration for an application scope"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,i.kt)("a",{parentName:"p",href:"#module_ApplicationScopePerspectives"},(0,i.kt)("code",null,"ApplicationScopePerspectives")),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Param"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"widgetConfig"),(0,i.kt)("td",null,(0,i.kt)("code",null,"Object")),(0,i.kt)("td",null,(0,i.kt)("p",null,"The widget configuration being validated"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[options]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"Object")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Any additional context specific data that is not part of ",(0,i.kt)("code",null,"widgetConfig")," but might be relevant for validation"))),"  ")),(0,i.kt)("a",{name:"module_ApplicationScopePerspectives..ConfigValidatorReturnType"}),(0,i.kt)("h3",{id:"applicationscopeperspectivesconfigvalidatorreturntype--object"},"ApplicationScopePerspectives~ConfigValidatorReturnType : ",(0,i.kt)("code",null,"Object")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,i.kt)("a",{parentName:"p",href:"#module_ApplicationScopePerspectives"},(0,i.kt)("code",null,"ApplicationScopePerspectives")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Properties")),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Name"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"status"),(0,i.kt)("td",null,(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("code",null,"true")," indicates validation succeeded, ",(0,i.kt)("code",null,"false")," otherwise."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[errorMessage]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Error message to be shown in UI if the validation failed."))),"  ")))}u.isMDXComponent=!0}}]);