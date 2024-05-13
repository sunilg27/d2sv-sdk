"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[1981],{5680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>y});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),s=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),u=t,y=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return r?a.createElement(y,i(i({ref:n},d),{},{components:r})):a.createElement(y,i({ref:n},d))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:t,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},136:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(8168),t=(r(6540),r(5680));const o={},i="ExpandableV2Mixin",l={unversionedId:"api/nuc/models/mixins/v2.expandable/v2.expandable.mixin",id:"api/nuc/models/mixins/v2.expandable/v2.expandable.mixin",title:"ExpandableV2Mixin",description:"Provides support for the setting expand URL query parameter as introduced by the",source:"@site/articles/api/nuc/models/mixins/v2.expandable/v2.expandable.mixin.md",sourceDirName:"api/nuc/models/mixins/v2.expandable",slug:"/api/nuc/models/mixins/v2.expandable/v2.expandable.mixin",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/mixins/v2.expandable/v2.expandable.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"DelayedCommandableV2Mixin",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/mixins/v2.delayed.commandable/v2.delayed.commandable.mixin"},next:{title:"FieldsV2Mixin",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/mixins/v2.fields/v2.fields.mixin"}},p={},s=[{value:"How to apply the mixin to a model",id:"how-to-apply-the-mixin-to-a-model",level:3},{value:"How to use the mixin",id:"how-to-use-the-mixin",level:3},{value:"makeExpandableV2(options) : this",id:"makeexpandablev2options--this",level:2},{value:"expand",id:"expand",level:2},{value:"hasExpand(role) : boolean",id:"hasexpandrole--boolean",level:2},{value:"setExpand(role, names) : void",id:"setexpandrole-names--void",level:2},{value:"resetExpand(role, names) : void",id:"resetexpandrole-names--void",level:2},{value:"getExpandableResourcesUrlQuery() : string",id:"getexpandableresourcesurlquery--string",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:s},c="wrapper";function m(e){let{components:n,...r}=e;return(0,t.yg)(c,(0,a.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"expandablev2mixin"},"ExpandableV2Mixin"),(0,t.yg)("p",null,"Provides support for the setting ",(0,t.yg)("inlineCode",{parentName:"p"},"expand")," URL query parameter as introduced by the\n",(0,t.yg)("inlineCode",{parentName:"p"},"api/v2/nodes/:id")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"api/v2/nodes/:id/nodes")," (V2) resources."),(0,t.yg)("p",null,"Server responses can contain references to other resources; typically IDs or URLs.\nThe ",(0,t.yg)("em",{parentName:"p"},"expansion")," means replacing them with object literals containing the resource\ninformation, so that the caller does not have to request every associated resource\nby an additional server call."),(0,t.yg)("p",null,"Expanding needs the role to expand from (",(0,t.yg)("inlineCode",{parentName:"p"},"properties"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"versions")," etc.)\nand optionally the name or names of properties to expand (",(0,t.yg)("inlineCode",{parentName:"p"},"parent_id"),",\n",(0,t.yg)("inlineCode",{parentName:"p"},"create_user_id")," etc.)."),(0,t.yg)("h3",{id:"how-to-apply-the-mixin-to-a-model"},"How to apply the mixin to a model"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"var MyModel = Backbone.Model.extend({\n\n  constructor: function MyModel(attributes, options) {\n    Backbone.Model.prototype.constructor.apply(this, arguments);\n    this\n      .makeConnectable(options)\n      .makeExpandableV2(options);\n  },\n\n  url: function () {\n    var url = Url.combine(this.connector.connection.url, 'myresource'),\n        query = Url.combineQueryString(\n          this.getExpandableResourcesUrlQuery()\n        );\n    return query ? url + '?' + query : url;\n  }\n  \n});\n\nConnectableMixin.mixin(MyModel.prototype);\nExpandableV2Mixin.mixin(MyModel.prototype);\n")),(0,t.yg)("p",null,"This mixin us usually combined together with the ",(0,t.yg)("inlineCode",{parentName:"p"},"ConnectableMixin"),"\nor with another cumulated mixin which includes it."),(0,t.yg)("h3",{id:"how-to-use-the-mixin"},"How to use the mixin"),(0,t.yg)("p",null,"Set up the URL parameters by calling ",(0,t.yg)("inlineCode",{parentName:"p"},"setExpand")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"resetExpand")," and fetch the model:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"// Set the expansion when creating the model\nvar model = new MyModel(undefined, {\n      connector: connector,\n      expand: {\n        properties: ['parent_id', 'create_user_id']\n      }\n    });\nmodel.fetch();\n\n// Set the expansion after creating the model\nmodel.setExpand('properties', ['parent_id', 'create_user_id']);\nmodel.fetch();\n")),(0,t.yg)("h2",{id:"makeexpandablev2options--this"},"makeExpandableV2(options) : this"),(0,t.yg)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Model or Backbone.Collection constructor options passed in."),(0,t.yg)("p",null,"Recognized option properties:"),(0,t.yg)("p",null,"expand\n: One or more resources to expand.  Keys and values from the object literal\nare handled the same way as the ",(0,t.yg)("inlineCode",{parentName:"p"},"setExpand")," method does the key and value\n(role and properties).  An empty object literal is the default."),(0,t.yg)("h2",{id:"expand"},"expand"),(0,t.yg)("p",null,"Resources to get expanded in the response (object literal of strings pointing\nto arrays of strings, empty by default, read-only)."),(0,t.yg)("h2",{id:"hasexpandrole--boolean"},"hasExpand(role) : boolean"),(0,t.yg)("p",null,"Checks if a specific or any resource will be expanded.  The ",(0,t.yg)("inlineCode",{parentName:"p"},"role")," parameter\nis a string."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"// Checks if any resource is expanded\nvar anythingExpanded = model.hasExpand();\n// Checks if any common properties are expancded\nvar propertiesExpanded = model.hasExpand('properties');\n")),(0,t.yg)("h2",{id:"setexpandrole-names--void"},"setExpand(role, names) : void"),(0,t.yg)("p",null,"Makes one or more resources expanded.  The ",(0,t.yg)("inlineCode",{parentName:"p"},"role")," parameter is a string.  The\n",(0,t.yg)("inlineCode",{parentName:"p"},"names")," parameter can be either string, or an array of strings.  The string can\ncontain a comma-delimited list, in which case it will be split to an array."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"// Have two resources expanded, option 1\nmodel.setExpand('properties', ['parent_id', 'create_user_id']);\n// Have two resources expanded, option 2\nmodel.setExpand('properties', 'parent_id');\nmodel.setExpand('properties', 'create_user_id');\n// Have two resource types expanded, option 3\nmodel.setExpand('properties', 'parent_id,create_user_id');\n")),(0,t.yg)("h2",{id:"resetexpandrole-names--void"},"resetExpand(role, names) : void"),(0,t.yg)("p",null,"Prevents one or more resources from being expanded.  The ",(0,t.yg)("inlineCode",{parentName:"p"},"role")," parameter is a\nstring.  If nothing is specified, all roles will be removed (disabled).  The\n",(0,t.yg)("inlineCode",{parentName:"p"},"names")," parameter can be either string, or an array of strings.  The string can\ncontain a comma-delimited list, in which case it will be split to an array.  If\nnothing is specified, all properties from the role  will be removed (disabled)."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"// Cancel all expansions and fetch the fresh data\nmodel.resetExpand();\nmodel.fetch();\n")),(0,t.yg)("h2",{id:"getexpandableresourcesurlquery--string"},"getExpandableResourcesUrlQuery() : string"),(0,t.yg)("p",null,"Formats the URL query parameters for the resource expansion.  They can be concatenated\nwith other URL query parts (both object literals and strings) by ",(0,t.yg)("inlineCode",{parentName:"p"},"Url.combineQueryString"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"var url = ...,\n    query = Url.combineQueryString(\n      ...,\n      this.getExpandableResourcesUrlQuery()\n    );\nif (query) {\n  url = Url.appendQuery(url, query);\n}\n")),(0,t.yg)("h2",{id:"see-also"},"See Also"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ConnectableMixin"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"ResourceMixin")))}m.isMDXComponent=!0}}]);