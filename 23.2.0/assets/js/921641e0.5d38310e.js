"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[6207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(k,l(l({ref:t},u),{},{components:n})):o.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[m]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={},l=void 0,a={unversionedId:"api/d2/models/mixins/resource.mixin",id:"api/d2/models/mixins/resource.mixin",title:"resource.mixin",description:"ResourceMixin : d2/sdk/models/mixins/resource.mixin",source:"@site/articles/api/d2/models/mixins/resource.mixin.md",sourceDirName:"api/d2/models/mixins",slug:"/api/d2/models/mixins/resource.mixin",permalink:"/d2sv-sdk/23.2.0/api/d2/models/mixins/resource.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"commandable.mixin",permalink:"/d2sv-sdk/23.2.0/api/d2/models/mixins/commandable.mixin"},next:{title:"module.collection",permalink:"/d2sv-sdk/23.2.0/api/d2/models/module.collection"}},c={},s=[{value:"ResourceMixin : <code>d2/sdk/models/mixins/resource.mixin</code>",id:"resourcemixin--d2sdkmodelsmixinsresourcemixin",level:2},{value:"resourceMixin.makeResource(options) \u21d2 <code>*</code>",id:"resourcemixinmakeresourceoptions--",level:3},{value:"ResourceMixin.mixin(prototype) \u21d2 <code>void</code>",id:"resourcemixinmixinprototype--void",level:3}],u={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"module_ResourceMixin"}),(0,r.kt)("h2",{id:"resourcemixin--d2sdkmodelsmixinsresourcemixin"},"ResourceMixin : ",(0,r.kt)("code",null,"d2/sdk/models/mixins/resource.mixin")),(0,r.kt)("p",null,"Resource mixin. Can be mixed with any ",(0,r.kt)("inlineCode",{parentName:"p"},"Backbone.Model")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Backbone.Collection")," to make it AJAX worthy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends"),": ",(0,r.kt)("code",null,"Object"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(A typical collection using this mixin may look like)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"define([\n 'nuc/lib/backbone',\n 'd2/sdk/models/mixins/resource.mixin'\n], function(Backbone, ResourceMixin){\n 'use strict';\n\n var MyModel = Backbone.Model.extend({\n   constructor: function MyModel(attr, options) {\n     options = options || {};\n     MyModel.__super__.constructor.call(this, attr, options);\n\n     this.makeResource(options);\n   }\n });\n\n ResourceMixin.mixin(MyModel.ptototype); //Can be equally mixed with a Backbone.Collection prototype\n\n return MyModel;\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_ResourceMixin"},"ResourceMixin")," : ",(0,r.kt)("code",null,"d2/sdk/models/mixins/resource.mixin"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"instance"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_ResourceMixin+makeResource"},".makeResource(options)")," \u21d2 ",(0,r.kt)("code",null,"*")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"static"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_ResourceMixin.mixin"},".mixin(prototype)")," \u21d2 ",(0,r.kt)("code",null,"void"))))))),(0,r.kt)("a",{name:"module_ResourceMixin+makeResource"}),(0,r.kt)("h3",{id:"resourcemixinmakeresourceoptions--"},"resourceMixin.makeResource(options) \u21d2 ",(0,r.kt)("code",null,"*")),(0,r.kt)("p",null,"Does the necessary setup on an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Backbone.Model")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Backbone.Collection")," so that it can connect & fetch\nresource from server using AJAX."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#module_ResourceMixin"},(0,r.kt)("code",null,"ResourceMixin")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"*")," - the model/collection instance itself.  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"options"),(0,r.kt)("td",null,(0,r.kt)("code",null,"object")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Options hash"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"options.connector"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Connector")),(0,r.kt)("td",null,(0,r.kt)("p",null,"The transport that lets the model or collection to connect to server. See ",(0,r.kt)("a",{href:"../../utils/contexts/factories/connector"},"ConnectorFactory")))),"  ")),(0,r.kt)("a",{name:"module_ResourceMixin.mixin"}),(0,r.kt)("h3",{id:"resourcemixinmixinprototype--void"},"ResourceMixin.mixin(prototype) \u21d2 ",(0,r.kt)("code",null,"void")),(0,r.kt)("p",null,"Fuse the mixin methods to a prototype"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_ResourceMixin"},(0,r.kt)("code",null,"ResourceMixin")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Mixes"),": ",(0,r.kt)("a",{parentName:"p",href:"../../../nuc/models/mixins/connectable/connectable.mixin"},(0,r.kt)("code",null,"ConnectableMixin")),", ",(0,r.kt)("a",{parentName:"p",href:"../../../nuc/models/mixins/fetchable/fetchable.mixin"},(0,r.kt)("code",null,"FetchableMixin")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"prototype"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Object")),(0,r.kt)("td",null,(0,r.kt)("p",null,"The target prototype where the mixin methods will be fused."))),"  ")))}p.isMDXComponent=!0}}]);