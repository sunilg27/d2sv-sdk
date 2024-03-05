"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[4734],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>h});var n=o(7294);function p(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){p(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,p=function(e,t){if(null==e)return{};var o,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(p[o]=e[o]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(p[o]=e[o])}return p}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(o),d=p,h=u["".concat(l,".").concat(d)]||u[d]||v[d]||r;return o?n.createElement(h,a(a({ref:t},s),{},{components:o})):n.createElement(h,a({ref:t},s))}));function h(e,t){var o=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=o.length,a=new Array(r);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:p,a[1]=i;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},45:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(7462),p=(o(7294),o(3905));const r={},a=void 0,i={unversionedId:"api/d2/controls/behaviors/open.app.scope.behavior",id:"api/d2/controls/behaviors/open.app.scope.behavior",title:"open.app.scope.behavior",description:"OpenAppScopeBehavior : d2/sdk/controls/behaviors/open.app.scope.behavior",source:"@site/articles/api/d2/controls/behaviors/open.app.scope.behavior.md",sourceDirName:"api/d2/controls/behaviors",slug:"/api/d2/controls/behaviors/open.app.scope.behavior",permalink:"/d2sv-sdk/23.2.0/api/d2/controls/behaviors/open.app.scope.behavior",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"clientside.infinite.scrolling.behavior",permalink:"/d2sv-sdk/23.2.0/api/d2/controls/behaviors/clientside.infinite.scrolling.behavior"},next:{title:"blocker",permalink:"/d2sv-sdk/23.2.0/api/d2/controls/blocker/"}},l={},c=[{value:"OpenAppScopeBehavior : <code>d2/sdk/controls/behaviors/open.app.scope.behavior</code>",id:"openappscopebehavior--d2sdkcontrolsbehaviorsopenappscopebehavior",level:2},{value:"OpenAppScopeBehavior~OpenAppScopeBehavior",id:"openappscopebehavioropenappscopebehavior",level:3},{value:"new OpenAppScopeBehavior(options, view)",id:"new-openappscopebehavioroptions-view",level:4}],s={toc:c},u="wrapper";function v(e){let{components:t,...o}=e;return(0,p.kt)(u,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("a",{name:"module_OpenAppScopeBehavior"}),(0,p.kt)("h2",{id:"openappscopebehavior--d2sdkcontrolsbehaviorsopenappscopebehavior"},"OpenAppScopeBehavior : ",(0,p.kt)("code",null,"d2/sdk/controls/behaviors/open.app.scope.behavior")),(0,p.kt)("p",null,"A ",(0,p.kt)("inlineCode",{parentName:"p"},"Marionette.view")," behavior to navigate to an application scope perspective. Whichever view uses\nthis behavior, waits for a click event to happen. As a reponse to the click event, it opens the application\nscope perspective."),(0,p.kt)("p",null,"A view that has already mixed this behavior, can set a Boolean flag ",(0,p.kt)("inlineCode",{parentName:"p"},"disableAppScopeBehavior=true")," to disbale the behavior."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Extends"),": ",(0,p.kt)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.behavior.html"},(0,p.kt)("code",null,"Marionette.Behavior")),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("strong",{parentName:"p"},"Example")," ",(0,p.kt)("em",{parentName:"p"},"(To use this behavior in a sample view)"),"  "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"\ndefine([\n 'nuc/lib/marionette',\n 'd2/sdk/controls/behaviors/open.app.scope.behavior',\n 'd2/sdk/utils/contexts/context.utils'\n], function(Marionette, OpenAppScopeBehavior, contextUtil){\n 'use strict';\n\n var context = contextUtil.getPerspectiveContext();\n\n var MyView = Marionette.LayoutView.extend({\n   behaviors: {\n     AppScope: {\n       behaviorClass: OpenAppScopeBehavior,\n       context: context,\n       applicationScope: 'favorites'\n     }\n   },\n   template: false,\n   onRender: function() {\n     this.$el.text('Click me to open favorites');\n   }\n });\n});\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#module_OpenAppScopeBehavior"},"OpenAppScopeBehavior")," : ",(0,p.kt)("code",null,"d2/sdk/controls/behaviors/open.app.scope.behavior"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#module_OpenAppScopeBehavior..OpenAppScopeBehavior"},"~OpenAppScopeBehavior"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#new_module_OpenAppScopeBehavior..OpenAppScopeBehavior_new"},"new OpenAppScopeBehavior(options, view)"))))))),(0,p.kt)("a",{name:"module_OpenAppScopeBehavior..OpenAppScopeBehavior"}),(0,p.kt)("h3",{id:"openappscopebehavioropenappscopebehavior"},"OpenAppScopeBehavior~OpenAppScopeBehavior"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,p.kt)("a",{parentName:"p",href:"#module_OpenAppScopeBehavior"},(0,p.kt)("code",null,"OpenAppScopeBehavior")),"  "),(0,p.kt)("a",{name:"new_module_OpenAppScopeBehavior..OpenAppScopeBehavior_new"}),(0,p.kt)("h4",{id:"new-openappscopebehavioroptions-view"},"new OpenAppScopeBehavior(options, view)"),(0,p.kt)("table",null,(0,p.kt)("thead",null,(0,p.kt)("tr",null,(0,p.kt)("th",null,"Param"),(0,p.kt)("th",null,"Type"),(0,p.kt)("th",null,"Description"))),(0,p.kt)("tbody",null,(0,p.kt)("tr",null,(0,p.kt)("td",null,"options"),(0,p.kt)("td",null,(0,p.kt)("code",null,"object")),(0,p.kt)("td",null,(0,p.kt)("p",null,"Constructor options, automatically passed by Marionette from behavior configuration of a view"))),(0,p.kt)("tr",null,(0,p.kt)("td",null,"options.applicationScope"),(0,p.kt)("td",null,(0,p.kt)("code",null,"string")),(0,p.kt)("td",null,(0,p.kt)("p",null,"Name of the application scope to be opened on click."))),(0,p.kt)("tr",null,(0,p.kt)("td",null,"options.context"),(0,p.kt)("td",null,(0,p.kt)("code",null,"Context")),(0,p.kt)("td",null,(0,p.kt)("p",null,"Reference to the runtime context. See ",(0,p.kt)("a",{href:"../../utils/contexts/context.utils#Context"},"Context"),"."))),(0,p.kt)("tr",null,(0,p.kt)("td",null,"[options.registerClickEventListener]"),(0,p.kt)("td",null,(0,p.kt)("code",null,"Boolean")),(0,p.kt)("td",null,(0,p.kt)("p",null,"Whether the view should add a separate ",(0,p.kt)("code",null,"click")," event listener. Defaults to ",(0,p.kt)("code",null,"true"),". Some views which has already added a click event listener on self element for some purpose, can be reused automatically for this behavior, in that case this flag needs to be set to ",(0,p.kt)("code",null,"false")," explicitly."))),(0,p.kt)("tr",null,(0,p.kt)("td",null,"view"),(0,p.kt)("td",null,(0,p.kt)("code",null,"Marionette.View")),(0,p.kt)("td",null,(0,p.kt)("p",null,"The view instance associated with this behavior instance. Automatically set by Marionette."))),"  ")))}v.isMDXComponent=!0}}]);