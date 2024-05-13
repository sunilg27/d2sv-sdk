"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[883],{5680:(e,l,n)=>{n.d(l,{xA:()=>d,yg:()=>g});var o=n(6540);function t(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function i(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);l&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?i(Object(n),!0).forEach((function(l){t(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function a(e,l){if(null==e)return{};var n,o,t=function(e,l){if(null==e)return{};var n,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],l.indexOf(n)>=0||(t[n]=e[n]);return t}(e,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=o.createContext({}),c=function(e){var l=o.useContext(s),n=l;return e&&(n="function"==typeof e?e(l):r(r({},l),e)),n},d=function(e){var l=c(e.components);return o.createElement(s.Provider,{value:l},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var l=e.children;return o.createElement(o.Fragment,{},l)}},y=o.forwardRef((function(e,l){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),y=t,g=p["".concat(s,".").concat(y)]||p[y]||u[y]||i;return n?o.createElement(g,r(r({ref:l},d),{},{components:n})):o.createElement(g,r({ref:l},d))}));function g(e,l){var n=arguments,t=l&&l.mdxType;if("string"==typeof e||t){var i=n.length,r=new Array(i);r[0]=y;var a={};for(var s in l)hasOwnProperty.call(l,s)&&(a[s]=l[s]);a.originalType=e,a[p]="string"==typeof e?e:t,r[1]=a;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1602:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(8168),t=(n(6540),n(5680));const i={},r=void 0,a={unversionedId:"api/d2/models/mixins/browsable.collection.mixin",id:"api/d2/models/mixins/browsable.collection.mixin",title:"browsable.collection.mixin",description:"BrowsableCollectionMixin : d2/sdk/models/mixins/browsable.collection.mixin",source:"@site/articles/api/d2/models/mixins/browsable.collection.mixin.md",sourceDirName:"api/d2/models/mixins",slug:"/api/d2/models/mixins/browsable.collection.mixin",permalink:"/d2sv-sdk/24.2.0/api/d2/models/mixins/browsable.collection.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"folder.browser.id.rules",permalink:"/d2sv-sdk/24.2.0/api/d2/integration/folder.browser.id.rules"},next:{title:"collection.delayed.data.mixin",permalink:"/d2sv-sdk/24.2.0/api/d2/models/mixins/collection.delayed.data.mixin"}},s={},c=[{value:"BrowsableCollectionMixin : <code>d2/sdk/models/mixins/browsable.collection.mixin</code>",id:"browsablecollectionmixin--d2sdkmodelsmixinsbrowsablecollectionmixin",level:2},{value:"browsableCollectionMixin.makeBrowsableCollection(options) \u21d2 <code>*</code>",id:"browsablecollectionmixinmakebrowsablecollectionoptions--",level:3},{value:"BrowsableCollectionMixin.mixin(prototype) \u21d2 <code>void</code>",id:"browsablecollectionmixinmixinprototype--void",level:3}],d={toc:c},p="wrapper";function u(e){let{components:l,...n}=e;return(0,t.yg)(p,(0,o.A)({},d,n,{components:l,mdxType:"MDXLayout"}),(0,t.yg)("a",{name:"module_BrowsableCollectionMixin"}),(0,t.yg)("h2",{id:"browsablecollectionmixin--d2sdkmodelsmixinsbrowsablecollectionmixin"},"BrowsableCollectionMixin : ",(0,t.yg)("code",null,"d2/sdk/models/mixins/browsable.collection.mixin")),(0,t.yg)("p",null,"BrowsableCollection mixin. Can be mixed with any ",(0,t.yg)("inlineCode",{parentName:"p"},"Backbone.Collection")," to make it paginated. Pagination happens on the client\nside by slicing & maintaining the models in it. But when it syncs to the server, it always fetches the full list of available objects."),(0,t.yg)("p",null,"Besides pagination it also enables sorting & filtering."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Extends"),": ",(0,t.yg)("code",null,"Object"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("strong",{parentName:"p"},"See"),": ",(0,t.yg)("a",{parentName:"p",href:"../../../nuc/models/browsable/browsable"},"Browsable Support"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("strong",{parentName:"p"},"Example")," ",(0,t.yg)("em",{parentName:"p"},"(A typical usage infuses the mixin with a collection prototype)"),"  "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"define([\n 'nuc/lib/backbone',\n 'd2/sdk/models/mixins/browsable.collection.mixin'\n], function(Backbone, BrowsableCollectionMixin){\n 'use strict';\n\n var MyCollection = Backbone.Collection.extend({\n   constructor: function MyCollection(models, options) {\n     options = options || {};\n     MyCollection.__super__.constructor.call(this, models, options);\n\n     this.makeBrowsableCollection(options);\n   }\n });\n\n BrowsableCollectionMixin.mixin(MyCollection.ptototype);\n\n return MyCollection;\n});\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#module_BrowsableCollectionMixin"},"BrowsableCollectionMixin")," : ",(0,t.yg)("code",null,"d2/sdk/models/mixins/browsable.collection.mixin"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("em",{parentName:"li"},"instance"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#module_BrowsableCollectionMixin+makeBrowsableCollection"},".makeBrowsableCollection(options)")," \u21d2 ",(0,t.yg)("code",null,"*")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("em",{parentName:"li"},"static"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#module_BrowsableCollectionMixin.mixin"},".mixin(prototype)")," \u21d2 ",(0,t.yg)("code",null,"void"))))))),(0,t.yg)("a",{name:"module_BrowsableCollectionMixin+makeBrowsableCollection"}),(0,t.yg)("h3",{id:"browsablecollectionmixinmakebrowsablecollectionoptions--"},"browsableCollectionMixin.makeBrowsableCollection(options) \u21d2 ",(0,t.yg)("code",null,"*")),(0,t.yg)("p",null,"Does the necessary setup so that a ",(0,t.yg)("inlineCode",{parentName:"p"},"Backbone.Collection")," instance could become client-side paginated along with support for property based sorting & filtering."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,t.yg)("a",{parentName:"p",href:"#module_BrowsableCollectionMixin"},(0,t.yg)("code",null,"BrowsableCollectionMixin")),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("strong",{parentName:"p"},"Returns"),": ",(0,t.yg)("code",null,"*")," - the collection instance itself.  "),(0,t.yg)("table",null,(0,t.yg)("thead",null,(0,t.yg)("tr",null,(0,t.yg)("th",null,"Param"),(0,t.yg)("th",null,"Type"),(0,t.yg)("th",null,"Default"),(0,t.yg)("th",null,"Description"))),(0,t.yg)("tbody",null,(0,t.yg)("tr",null,(0,t.yg)("td",null,"options"),(0,t.yg)("td",null,(0,t.yg)("code",null,"Object")),(0,t.yg)("td",null),(0,t.yg)("td",null,(0,t.yg)("p",null,"The options hash."))),(0,t.yg)("tr",null,(0,t.yg)("td",null,"[options.skip]"),(0,t.yg)("td",null,(0,t.yg)("code",null,"number")),(0,t.yg)("td",null),(0,t.yg)("td",null,(0,t.yg)("p",null,"Number of elements to skip from original collection. Needs to be set only if the collection needs to start from a page other the page-1."))),(0,t.yg)("tr",null,(0,t.yg)("td",null,"options.top"),(0,t.yg)("td",null,(0,t.yg)("code",null,"number")),(0,t.yg)("td",null),(0,t.yg)("td",null,(0,t.yg)("p",null,"Number of elements per page."))),(0,t.yg)("tr",null,(0,t.yg)("td",null,"[options.filter]"),(0,t.yg)("td",null,(0,t.yg)("code",null,"string")),(0,t.yg)("td",null),(0,t.yg)("td",null,(0,t.yg)("p",null,"Any filter expression that the collection should begin with. Can be changed later with ",(0,t.yg)("code",null,"setFilter"),"."))),(0,t.yg)("tr",null,(0,t.yg)("td",null,"[options.orderBy]"),(0,t.yg)("td",null,(0,t.yg)("code",null,"string")),(0,t.yg)("td",null),(0,t.yg)("td",null,(0,t.yg)("p",null,"Any sorting criteria that the collection should begin with. Can be changed later with ",(0,t.yg)("code",null,"serOrderBy"),"."))),(0,t.yg)("tr",null,(0,t.yg)("td",null,"[options.responseMediaType]"),(0,t.yg)("td",null,(0,t.yg)("code",null,"string")),(0,t.yg)("td",null,(0,t.yg)("code",null,'"application/vnd.emc.documentum+json"')),(0,t.yg)("td",null,(0,t.yg)("p",null,"Controls the ",(0,t.yg)("code",null,"Accept")," header's value while requesting data through AJAX."))),"  ")),(0,t.yg)("a",{name:"module_BrowsableCollectionMixin.mixin"}),(0,t.yg)("h3",{id:"browsablecollectionmixinmixinprototype--void"},"BrowsableCollectionMixin.mixin(prototype) \u21d2 ",(0,t.yg)("code",null,"void")),(0,t.yg)("p",null,"Fuse the mixin methods to a prototype"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Kind"),": static method of ",(0,t.yg)("a",{parentName:"p",href:"#module_BrowsableCollectionMixin"},(0,t.yg)("code",null,"BrowsableCollectionMixin")),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("strong",{parentName:"p"},"Mixes"),": ",(0,t.yg)("a",{parentName:"p",href:"../../../nuc/models/browsable/client-side.mixin"},(0,t.yg)("code",null,"ClientSideBrowsableMixin")),", ",(0,t.yg)("a",{parentName:"p",href:"../../../nuc/models/browsable/browsable.mixin"},(0,t.yg)("code",null,"BrowsableMixin")),", ",(0,t.yg)("code",null,"module:DelayedCollectionDataMixin"),"  "),(0,t.yg)("table",null,(0,t.yg)("thead",null,(0,t.yg)("tr",null,(0,t.yg)("th",null,"Param"),(0,t.yg)("th",null,"Type"),(0,t.yg)("th",null,"Description"))),(0,t.yg)("tbody",null,(0,t.yg)("tr",null,(0,t.yg)("td",null,"prototype"),(0,t.yg)("td",null,(0,t.yg)("code",null,"Object")),(0,t.yg)("td",null,(0,t.yg)("p",null,"The target prototype where the mixin methods will be fused."))),"  ")))}u.isMDXComponent=!0}}]);