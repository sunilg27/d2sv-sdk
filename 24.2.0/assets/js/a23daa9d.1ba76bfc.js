"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2566],{5680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>p});var l=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=l.createContext({}),c=function(e){var t=l.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},y=function(e){var t=c(e.components);return l.createElement(r.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,y=d(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,p=s["".concat(r,".").concat(m)]||s[m]||u[m]||i;return n?l.createElement(p,o(o({ref:t},y),{},{components:n})):l.createElement(p,o({ref:t},y))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d[s]="string"==typeof e?e:a,o[1]=d;for(var c=2;c<i;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var l=n(8168),a=(n(6540),n(5680));const i={},o=void 0,d={unversionedId:"api/d2/models/mixins/collection.delayed.data.mixin",id:"api/d2/models/mixins/collection.delayed.data.mixin",title:"collection.delayed.data.mixin",description:"DelayedCollectionDataMixin : d2/sdk/models/mixins/collection.delayed.data.mixin",source:"@site/articles/api/d2/models/mixins/collection.delayed.data.mixin.md",sourceDirName:"api/d2/models/mixins",slug:"/api/d2/models/mixins/collection.delayed.data.mixin",permalink:"/d2sv-sdk/24.2.0/api/d2/models/mixins/collection.delayed.data.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"browsable.collection.mixin",permalink:"/d2sv-sdk/24.2.0/api/d2/models/mixins/browsable.collection.mixin"},next:{title:"collection.resource.mixin",permalink:"/d2sv-sdk/24.2.0/api/d2/models/mixins/collection.resource.mixin"}},r={},c=[{value:"DelayedCollectionDataMixin : <code>d2/sdk/models/mixins/collection.delayed.data.mixin</code>",id:"delayedcollectiondatamixin--d2sdkmodelsmixinscollectiondelayeddatamixin",level:2},{value:"delayedCollectionDataMixin.enableDelayedDataFetch(options) \u21d2 <code>*</code>",id:"delayedcollectiondatamixinenabledelayeddatafetchoptions--",level:3},{value:"<em>delayedCollectionDataMixin.fetchDelayedData(options) \u21d2 <code>jQuery.Promise</code></em>",id:"delayedcollectiondatamixinfetchdelayeddataoptions--codejquerypromisecode",level:3},{value:"DelayedCollectionDataMixin.mixin(prototype) \u21d2 <code>void</code>",id:"delayedcollectiondatamixinmixinprototype--void",level:3}],y={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,l.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("a",{name:"module_DelayedCollectionDataMixin"}),(0,a.yg)("h2",{id:"delayedcollectiondatamixin--d2sdkmodelsmixinscollectiondelayeddatamixin"},"DelayedCollectionDataMixin : ",(0,a.yg)("code",null,"d2/sdk/models/mixins/collection.delayed.data.mixin")),(0,a.yg)("p",null,"DelayedCollectionData mixin. Can be mixed with any ",(0,a.yg)("inlineCode",{parentName:"p"},"Backbone.Collection")," to create an interface that can be used to\nretrieve additional data like permission, favorited status, location, etc. and associated those with each model to fully\nrepresent them in any view context.\nThis additional data retrieval happens only after the primary collection data has been fetched and thus the name DelayedCollectionData."),(0,a.yg)("p",null,"Collections using this mixin must override ",(0,a.yg)("inlineCode",{parentName:"p"},"fetchDelayedData()")," method to actually fetch the additional data and must call ",(0,a.yg)("inlineCode",{parentName:"p"},"enableDelayedDataFetch()"),"\npost construction to enable the lifycycle hooks associated with this mixin."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Extends"),": ",(0,a.yg)("code",null,"Object"),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"See"),": ",(0,a.yg)("a",{parentName:"p",href:"../../utils/server.query.utils"},"ServerQueryUtils"),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"Example")," ",(0,a.yg)("em",{parentName:"p"},"(A typical collection using this mixin may look like)"),"  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"define([\n 'nuc/lib/jquery',\n 'nuc/lib/backbone',\n 'd2/sdk/models/mixins/collection.delayed.data.mixin'\n], function($, Backbone, DelayedCollectionDataMixin){\n 'use strict';\n\n var MyCollection = Backbone.Collection.extend({\n   constructor: function MyCollection(models, options) {\n     options = options || {};\n     MyCollection.__super__.constructor.call(this, models, options);\n\n     this.enableDelayedDataFetch(options);\n   },\n\n   fetchDelayedData: function(options) {\n     var dfd = $.Deferred();\n\n     //Custom logic to fetch the delayed data\n     //once done, `dfd` should be resolved with the retrieved data.\n\n     return dfd.promise();\n   }\n });\n\n DelayedCollectionDataMixin.mixin(MyCollection.ptototype);\n\n return MyCollection;\n});\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#module_DelayedCollectionDataMixin"},"DelayedCollectionDataMixin")," : ",(0,a.yg)("code",null,"d2/sdk/models/mixins/collection.delayed.data.mixin"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"instance"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#module_DelayedCollectionDataMixin+enableDelayedDataFetch"},".enableDelayedDataFetch(options)")," \u21d2 ",(0,a.yg)("code",null,"*")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},(0,a.yg)("a",{parentName:"em",href:"#module_DelayedCollectionDataMixin+fetchDelayedData"},".fetchDelayedData(options)")," \u21d2 ",(0,a.yg)("code",null,"jQuery.Promise"))))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"static"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#module_DelayedCollectionDataMixin.mixin"},".mixin(prototype)")," \u21d2 ",(0,a.yg)("code",null,"void"))))))),(0,a.yg)("a",{name:"module_DelayedCollectionDataMixin+enableDelayedDataFetch"}),(0,a.yg)("h3",{id:"delayedcollectiondatamixinenabledelayeddatafetchoptions--"},"delayedCollectionDataMixin.enableDelayedDataFetch(options) \u21d2 ",(0,a.yg)("code",null,"*")),(0,a.yg)("p",null,"To enable binding on the collection lifecyle hooks that will later trigger ",(0,a.yg)("inlineCode",{parentName:"p"},"fetchDelayedData()")," on every collection sync."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.yg)("a",{parentName:"p",href:"#module_DelayedCollectionDataMixin"},(0,a.yg)("code",null,"DelayedCollectionDataMixin")),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"Returns"),": ",(0,a.yg)("code",null,"*")," - Reference to the same instance of the collection on which it is called.  "),(0,a.yg)("table",null,(0,a.yg)("thead",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"Param"),(0,a.yg)("th",null,"Type"),(0,a.yg)("th",null,"Description"))),(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("td",null,"options"),(0,a.yg)("td",null,(0,a.yg)("code",null,"object")),(0,a.yg)("td",null,(0,a.yg)("p",null,"constructor options as created and passed during instantiation of the collection."))),(0,a.yg)("tr",null,(0,a.yg)("td",null,"options.mergeDelayedDataSilently"),(0,a.yg)("td",null,(0,a.yg)("code",null,"boolean")),(0,a.yg)("td",null,(0,a.yg)("p",null,"This controls whether or not to merge the additional data on individual models in silent manner."))),"  ")),(0,a.yg)("a",{name:"module_DelayedCollectionDataMixin+fetchDelayedData"}),(0,a.yg)("h3",{id:"delayedcollectiondatamixinfetchdelayeddataoptions--codejquerypromisecode"},(0,a.yg)("em",{parentName:"h3"},"delayedCollectionDataMixin.fetchDelayedData(options) \u21d2 ",(0,a.yg)("code",null,"jQuery.Promise"))),(0,a.yg)("p",null,"Triggered every time the collection fetches its primary data. An implementation of this function enables the actual additional data fetch.\nThe default implementation basically does nothing."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Kind"),": instance abstract method of ",(0,a.yg)("a",{parentName:"p",href:"#module_DelayedCollectionDataMixin"},(0,a.yg)("code",null,"DelayedCollectionDataMixin")),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"Returns"),": ",(0,a.yg)("code",null,"jQuery.Promise")," - The returned promise should be resolved with fetched additional data to indicate successful retrieval or should be rejected otherwise.  "),(0,a.yg)("table",null,(0,a.yg)("thead",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"Param"),(0,a.yg)("th",null,"Type"),(0,a.yg)("th",null,"Description"))),(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("td",null,"options"),(0,a.yg)("td",null,(0,a.yg)("code",null,"object")),(0,a.yg)("td",null,(0,a.yg)("p",null,"Input paramters for the invocation."))),(0,a.yg)("tr",null,(0,a.yg)("td",null,"options.nodes"),(0,a.yg)("td",null,(0,a.yg)("code",null,"Array.<string>")),(0,a.yg)("td",null,(0,a.yg)("p",null,"The list of id of all the models currently inside this collection."))),"  ")),(0,a.yg)("a",{name:"module_DelayedCollectionDataMixin.mixin"}),(0,a.yg)("h3",{id:"delayedcollectiondatamixinmixinprototype--void"},"DelayedCollectionDataMixin.mixin(prototype) \u21d2 ",(0,a.yg)("code",null,"void")),(0,a.yg)("p",null,"Fuse the mixin methods to a collection prototype"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.yg)("a",{parentName:"p",href:"#module_DelayedCollectionDataMixin"},(0,a.yg)("code",null,"DelayedCollectionDataMixin")),"  "),(0,a.yg)("table",null,(0,a.yg)("thead",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"Param"),(0,a.yg)("th",null,"Type"),(0,a.yg)("th",null,"Description"))),(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("td",null,"prototype"),(0,a.yg)("td",null,(0,a.yg)("code",null,"Object")),(0,a.yg)("td",null,(0,a.yg)("p",null,"Target collection prototype where the mixin methods will be fused."))),"  ")))}u.isMDXComponent=!0}}]);