"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2844],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var i=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?i.createElement(h,a(a({ref:n},p),{},{components:t})):i.createElement(h,a({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3918:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(8168),r=(t(6540),t(5680));const o={},a="ResourceMixin",l={unversionedId:"api/nuc/models/mixins/resource/resource.mixin",id:"api/nuc/models/mixins/resource/resource.mixin",title:"ResourceMixin",description:"Helps implementing a model for a typical server resource, which has an identifier",source:"@site/articles/api/nuc/models/mixins/resource/resource.mixin.md",sourceDirName:"api/nuc/models/mixins/resource",slug:"/api/nuc/models/mixins/resource/resource.mixin",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/mixins/resource/resource.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"NodeResourceMixin",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/mixins/node.resource/node.resource.mixin"},next:{title:"RulesMatchingMixin",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/mixins/rules.matching/rules.matching.mixin"}},c={},s=[{value:"How to apply the mixin to a model",id:"how-to-apply-the-mixin-to-a-model",level:3},{value:"Remarks",id:"remarks",level:2},{value:"How use the mixin",id:"how-use-the-mixin",level:3},{value:"makeResource(options) : this",id:"makeresourceoptions--this",level:2},{value:"See Also",id:"see-also",level:2}],p={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,i.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"resourcemixin"},"ResourceMixin"),(0,r.yg)("p",null,"Helps implementing a model for a typical server resource, which has an identifier\n(the property 'id' by default), by combining the following three mixins:\n",(0,r.yg)("inlineCode",{parentName:"p"},"ConnectableMixin"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"FetchableMixin")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"AutoFetchableMixin"),"."),(0,r.yg)("h3",{id:"how-to-apply-the-mixin-to-a-model"},"How to apply the mixin to a model"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"var MyModel = Backbone.Model.extend({\n\n  constructor: function MyModel(attributes, options) {\n    Backbone.Model.prototype.constructor.apply(this, arguments);\n    this.makeResource(options);\n  },\n\n  urlRoot: function () {\n    return Url.combine(this.connector.connection.url, 'myresources');\n  }\n  \n});\n\nResourceMixin.mixin(MyModel.prototype);\n")),(0,r.yg)("h2",{id:"remarks"},"Remarks"),(0,r.yg)("p",null,"The included ",(0,r.yg)("inlineCode",{parentName:"p"},"FetchableMixin")," overrides the ",(0,r.yg)("inlineCode",{parentName:"p"},"fetch")," method and calls the original\nimplementation from it.  If you supply your own custom implementation of this method,\nor use another mixin which overrides it, you should apply this mixin after yours."),(0,r.yg)("h3",{id:"how-use-the-mixin"},"How use the mixin"),(0,r.yg)("p",null,"Specify the model attributes, the connector and fetch the model:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"// Specify the attributes and the connector when creating the model\nvar connector = new Connector(...),\n    model = new MyModel({\n      id: 2000\n    }, {\n      connector: connector\n    });\nmodel.fetch();\n\n// Set the attributes and the connector after creating the model\nmodel.set('id', 2000);\nconnector.assignTo(model);\nmodel.fetch();\n")),(0,r.yg)("h2",{id:"makeresourceoptions--this"},"makeResource(options) : this"),(0,r.yg)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Model constructor options passed in."),(0,r.yg)("p",null,"See the ",(0,r.yg)("inlineCode",{parentName:"p"},"make")," methods of ",(0,r.yg)("inlineCode",{parentName:"p"},"ConnectableMixin"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"FetchableMixin")," and\n",(0,r.yg)("inlineCode",{parentName:"p"},"AutoFetchableMixin")," for the properties recognized by this method."),(0,r.yg)("p",null,"See also the properties and methods exposed by these three mixins to learn\nwhat this convenience mixin provides"),(0,r.yg)("h2",{id:"see-also"},"See Also"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ConnectableMixin"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"FetchableMixin"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"AutoFetchableMixin")))}m.isMDXComponent=!0}}]);