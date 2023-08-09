"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[8494],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?i.createElement(h,a(a({ref:n},c),{},{components:t})):i.createElement(h,a({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7369:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const o={},a="AdditionalResourcesV2Mixin",s={unversionedId:"api/nuc/models/mixins/v2.additional.resources/v2.additional.resources.mixin",id:"api/nuc/models/mixins/v2.additional.resources/v2.additional.resources.mixin",title:"AdditionalResourcesV2Mixin",description:"Provides support for the setting URL query parameter flags as introduced by the",source:"@site/articles/api/nuc/models/mixins/v2.additional.resources/v2.additional.resources.mixin.md",sourceDirName:"api/nuc/models/mixins/v2.additional.resources",slug:"/api/nuc/models/mixins/v2.additional.resources/v2.additional.resources.mixin",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/mixins/v2.additional.resources/v2.additional.resources.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"UploadableMixin",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/mixins/uploadable/uploadable.mixin"},next:{title:"CommandableMixin",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/mixins/v2.commandable/v2.commandable.mixin"}},l={},d=[{value:"How to apply the mixin to a model",id:"how-to-apply-the-mixin-to-a-model",level:3},{value:"How to use the mixin",id:"how-to-use-the-mixin",level:3},{value:"makeAdditionalResourcesV2Mixin(options) : this",id:"makeadditionalresourcesv2mixinoptions--this",level:2},{value:"_additionalResources",id:"_additionalresources",level:2},{value:"includeResources(names) : void",id:"includeresourcesnames--void",level:2},{value:"excludeResources(names) : void",id:"excluderesourcesnames--void",level:2},{value:"getAdditionalResourcesUrlQuery() : string",id:"getadditionalresourcesurlquery--string",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"additionalresourcesv2mixin"},"AdditionalResourcesV2Mixin"),(0,r.kt)("p",null,"Provides support for the setting URL query parameter flags as introduced by the\n",(0,r.kt)("inlineCode",{parentName:"p"},"api/v2/nodes/:id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"api/v2/nodes/:id/nodes")," (V2) resources."),(0,r.kt)("p",null,"Server responses can contain associated resources to avoid requesting every\nassociated resource by an additional server call, or other data, which may\nnot be needed every time.  For example:"),(0,r.kt)("p",null,"perspective\n: Include the perspective configuration, if the resource can carry one."),(0,r.kt)("p",null,"metadata\n: Include the definitions of object properties."),(0,r.kt)("h3",{id:"how-to-apply-the-mixin-to-a-model"},"How to apply the mixin to a model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var MyModel = Backbone.Model.extend({\n\n  constructor: function MyModel(attributes, options) {\n    Backbone.Model.prototype.constructor.apply(this, arguments);\n    this\n      .makeConnectable(options)\n      .makeAdditionalResourcesV2Mixin(options);\n  },\n\n  url: function () {\n    var url = Url.combine(this.connector.connection.url, 'myresource'),\n        query = Url.combineQueryString(\n          this.getAdditionalResourcesUrlQuery()\n        );\n    return query ? url + '?' + query : url;\n  }\n  \n});\n\nConnectableMixin.mixin(MyModel.prototype);\nAdditionalResourcesV2Mixin.mixin(MyModel.prototype);\n")),(0,r.kt)("p",null,"This mixin us usually combined together with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectableMixin"),"\nor with another cumulated mixin which includes it."),(0,r.kt)("h3",{id:"how-to-use-the-mixin"},"How to use the mixin"),(0,r.kt)("p",null,"Set up the URL parameters by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"includeResources")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"excludeResources")," and fetch the model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Set the inclusion when creating the model\nvar model = new MyModel(undefined, {\n      connector: connector,\n      includeResources: ['perspective']\n    });\nmodel.fetch();\n\n// Set the inclusion after creating the model\nmodel.includeResources('perspective');\nmodel.fetch();\n")),(0,r.kt)("h2",{id:"makeadditionalresourcesv2mixinoptions--this"},"makeAdditionalResourcesV2Mixin(options) : this"),(0,r.kt)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Model or Backbone.Collection constructor options passed in."),(0,r.kt)("p",null,"Recognized option properties:"),(0,r.kt)("p",null,"includeResources\n: One or more resources to include.  The value is handled the same way as the\n",(0,r.kt)("inlineCode",{parentName:"p"},"includeResources")," method does it.  An empty array is the default."),(0,r.kt)("h2",{id:"_additionalresources"},"_additionalResources"),(0,r.kt)("p",null,"Resources to get included in the response in the response (array of strings,\nempty by default, read-only)."),(0,r.kt)("h2",{id:"includeresourcesnames--void"},"includeResources(names) : void"),(0,r.kt)("p",null,"Makes one or more resources included.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"names")," parameter can be either\nstring, or an array of strings.  The string can contain a comma-delimited list,\nin which case it will be split to an array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Have a resources included, option 1\nmodel.includeResources('perspective');\n// Have a resource included, option 2\nmodel.includeResources(['perspective']);\n")),(0,r.kt)("h2",{id:"excluderesourcesnames--void"},"excludeResources(names) : void"),(0,r.kt)("p",null,"Prevents one or more resources from being included.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"names")," parameter can be either\nstring, or an array of strings, or nothing.  The string can contain a comma-delimited list,\nin which case it will be split to an array.  If nothing is specified, all inclusions will\nbe removed (disabled)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Cancel all inclusions and fetch the fresh data\nmodel.excludeResources();\nmodel.fetch();\n")),(0,r.kt)("h2",{id:"getadditionalresourcesurlquery--string"},"getAdditionalResourcesUrlQuery() : string"),(0,r.kt)("p",null,"Formats the URL query parameters for the resource inclusion.  They can be concatenated\nwith other URL query parts (both object literals and strings) by ",(0,r.kt)("inlineCode",{parentName:"p"},"Url.combineQueryString"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var url = ...,\n    query = Url.combineQueryString(\n      ...,\n      this.getAdditionalResourcesUrlQuery()\n    );\nif (query) {\n  url = Url.appendQuery(url, query);\n}\n")),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ConnectableMixin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceMixin")))}p.isMDXComponent=!0}}]);