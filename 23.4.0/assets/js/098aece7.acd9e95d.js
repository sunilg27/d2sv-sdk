"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[9998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return n?o.createElement(m,l(l({ref:t},s),{},{components:n})):o.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=n(7462),i=(n(7294),n(3905));const a={},l="NodeAutoFetchableMixin",r={unversionedId:"api/nuc/models/mixins/node.autofetchable/node.autofetchable.mixin",id:"api/nuc/models/mixins/node.autofetchable/node.autofetchable.mixin",title:"NodeAutoFetchableMixin",description:"Makes use of the identifier of the related node to:",source:"@site/articles/api/nuc/models/mixins/node.autofetchable/node.autofetchable.mixin.md",sourceDirName:"api/nuc/models/mixins/node.autofetchable",slug:"/api/nuc/models/mixins/node.autofetchable/node.autofetchable.mixin",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/mixins/node.autofetchable/node.autofetchable.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Mixins for Models",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/mixins/models.mixins"},next:{title:"NodeConnectableMixin",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/mixins/node.connectable/node.connectable.mixin"}},c={},d=[{value:"How to apply the mixin to a model",id:"how-to-apply-the-mixin-to-a-model",level:3},{value:"How use the mixin",id:"how-use-the-mixin",level:3},{value:"makeNodeAutoFetchable(options) : this",id:"makenodeautofetchableoptions--this",level:2},{value:"automateFetch(boolean) : void",id:"automatefetchboolean--void",level:2},{value:"isFetchable() : boolean",id:"isfetchable--boolean",level:2},{value:"See Also",id:"see-also",level:2}],s={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nodeautofetchablemixin"},"NodeAutoFetchableMixin"),(0,i.kt)("p",null,"Makes use of the identifier of the related node to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check if the model or collection can be fetched; it checks only if the\nrelated node is fetchable by default "),(0,i.kt)("li",{parentName:"ul"},"fetch the model or collection automatically when the identifier of the\nrelated node changes (if requested); the default event to listen to is\n'change:id'")),(0,i.kt)("h3",{id:"how-to-apply-the-mixin-to-a-model"},"How to apply the mixin to a model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var MyCollection = Backbone.Collection.extend({\n\n  constructor: function MyCollection(models, options) {\n    Backbone.Collection.prototype.constructor.apply(this, arguments);\n    this\n      .makeNodeConnectable(options)\n      .makeFetchable(options)\n      .makeNodeAutoFetchable(options);\n  }\n  \n});\n\nNodeConnectableMixin.mixin(MyCollection.prototype);\nFetchableMixin.mixin(MyCollection.prototype);\nNodeAutoFetchableMixin.mixin(MyCollection.prototype);\n")),(0,i.kt)("p",null,"This mixin us usually comined together with the ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeConnectableMixin"),"\nor with another cumulated mixin which includes it and also with the\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"FetchableMixin")," to prevent parallel fetches.  If you need\nall these three mixins, have a look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeResourceMixin"),", which\ncombines these three together."),(0,i.kt)("h3",{id:"how-use-the-mixin"},"How use the mixin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Enable watching for the model identifier changes\nvar connector = new Connector(...),\n    node = new NodeModel({id: 2000}, {connector: connector}),\n    collection = new MyCollection(undefined, {\n      node: node,\n      autofetch: true\n    });\n\n// A fetch of the collection will take place, notifying the event\n// listeners about its progress\nnode.set('id', 2000);\n")),(0,i.kt)("h2",{id:"makenodeautofetchableoptions--this"},"makeNodeAutoFetchable(options) : this"),(0,i.kt)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Model constructor options passed in."),(0,i.kt)("p",null,"Recognized option properies:"),(0,i.kt)("p",null,"autofetch\n: If set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", it executes the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," method whenever the node model identifier changes\n(boolean, ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," is the default)"),(0,i.kt)("p",null,"autofetchEvent\n: Can override the event to listen to on the node model for the automatic fetching\n(string, 'change:id' by default)"),(0,i.kt)("h2",{id:"automatefetchboolean--void"},"automateFetch(boolean) : void"),(0,i.kt)("p",null,"Truns on or off the automatic fetching depending if you pass ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in.\nIt can be used to change the behaviour set up by the constructor."),(0,i.kt)("h2",{id:"isfetchable--boolean"},"isFetchable() : boolean"),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the model or collection is fetchable, otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".\nIt requires the related node not only fetchable, but also having the 'id'\nproperty set.  (While nodes can be fetched using other properties, like\nvolumes by 'type', for example, other resources related to the node may\nnot.)  If the model or collection is not fetchable, the automatic fetching\nwill not take place."),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NodeConnectableMixin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"FetchableMixin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeResourceMixin")))}p.isMDXComponent=!0}}]);