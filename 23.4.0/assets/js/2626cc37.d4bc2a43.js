"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[6703],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?i.createElement(f,l(l({ref:n},p),{},{components:t})):i.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[c]="string"==typeof e?e:r,l[1]=a;for(var d=2;d<o;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const o={},l="FieldsV2Mixin",a={unversionedId:"api/nuc/models/mixins/v2.fields/v2.fields.mixin",id:"api/nuc/models/mixins/v2.fields/v2.fields.mixin",title:"FieldsV2Mixin",description:"Provides support for the setting fields URL query parameter as introduced",source:"@site/articles/api/nuc/models/mixins/v2.fields/v2.fields.mixin.md",sourceDirName:"api/nuc/models/mixins/v2.fields",slug:"/api/nuc/models/mixins/v2.fields/v2.fields.mixin",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/mixins/v2.fields/v2.fields.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"ExpandableV2Mixin",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/mixins/v2.expandable/v2.expandable.mixin"},next:{title:"NodeAddableTypeCollection",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/node/node.addable.type"}},s={},d=[{value:"How to apply the mixin to a model",id:"how-to-apply-the-mixin-to-a-model",level:3},{value:"How to use the mixin",id:"how-to-use-the-mixin",level:3},{value:"makeFieldsV2(options) : this",id:"makefieldsv2options--this",level:2},{value:"fields",id:"fields",level:2},{value:"hasFields(role) : boolean",id:"hasfieldsrole--boolean",level:2},{value:"setFields(role, names) : void",id:"setfieldsrole-names--void",level:2},{value:"resetFields(role, names) : void",id:"resetfieldsrole-names--void",level:2},{value:"getResourceFieldsUrlQuery() : string",id:"getresourcefieldsurlquery--string",level:2},{value:"See Also",id:"see-also",level:2}],p={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fieldsv2mixin"},"FieldsV2Mixin"),(0,r.kt)("p",null,"Provides support for the setting ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," URL query parameter as introduced\nby the ",(0,r.kt)("inlineCode",{parentName:"p"},"api/v2/members/favorites")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"api/v2/members/accessed")," (V2) resources."),(0,r.kt)("p",null,"Server responses can contain various properties, which can increase the\nresponse size, if all of them were always returned."),(0,r.kt)("p",null,"Adding a field needs the role, which contains them (",(0,r.kt)("inlineCode",{parentName:"p"},"properties"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"versions"),"\netc.), and optionally their names too (",(0,r.kt)("inlineCode",{parentName:"p"},"parent_id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"create_user_id")," etc.)."),(0,r.kt)("h3",{id:"how-to-apply-the-mixin-to-a-model"},"How to apply the mixin to a model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var MyModel = Backbone.Model.extend({\n\n  constructor: function MyModel(attributes, options) {\n    Backbone.Model.prototype.constructor.apply(this, arguments);\n    this\n      .makeConnectable(options)\n      .makeFieldsV2(options);\n  },\n\n  url: function () {\n    var url = Url.combine(this.connector.connection.url, 'myresource'),\n        query = Url.combineQueryString(\n          this.getResourceFieldsUrlQuery()\n        );\n    return query ? url + '?' + query : url;\n  }\n  \n});\n\nConnectableMixin.mixin(MyModel.prototype);\nFieldsV2Mixin.mixin(MyModel.prototype);\n")),(0,r.kt)("p",null,"This mixin us usually combined together with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectableMixin"),"\nor with another cumulated mixin which includes it."),(0,r.kt)("h3",{id:"how-to-use-the-mixin"},"How to use the mixin"),(0,r.kt)("p",null,"Set up the URL parameters by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"setFields")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"resetFields")," and fetch the model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Set the expansion when creating the model\nvar model = new MyModel(undefined, {\n      connector: connector,\n      fields: {\n        properties: ['parent_id', 'create_user_id']\n      }\n    });\nmodel.fetch();\n\n// Set the expansion after creating the model\nmodel.setFields('properties', ['parent_id', 'create_user_id']);\nmodel.fetch();\n")),(0,r.kt)("h2",{id:"makefieldsv2options--this"},"makeFieldsV2(options) : this"),(0,r.kt)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Model or Backbone.Collection constructor options passed in."),(0,r.kt)("p",null,"Recognized option properties:"),(0,r.kt)("p",null,"fields\n: One or more properties to include.  Keys and values from the object literal\nare handled the same way as the ",(0,r.kt)("inlineCode",{parentName:"p"},"setFields")," method does the key and value\n(role and properties).  An empty object literal is the default."),(0,r.kt)("h2",{id:"fields"},"fields"),(0,r.kt)("p",null,"Fields to include in the response (object literal of strings pointing\nto arrays of strings, empty by default, read-only)."),(0,r.kt)("h2",{id:"hasfieldsrole--boolean"},"hasFields(role) : boolean"),(0,r.kt)("p",null,"Checks if a specific field or any fields will be included.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"role")," parameter\nis a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Checks if any fields are included\nvar anyFields = model.hasFields();\n// Checks if any common property fields are included\nvar propertyFields = model.hasFields('properties');\n")),(0,r.kt)("h2",{id:"setfieldsrole-names--void"},"setFields(role, names) : void"),(0,r.kt)("p",null,"Adds one or more fields to the response.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"role")," parameter is a string.  The\n",(0,r.kt)("inlineCode",{parentName:"p"},"names")," parameter can be either string, or an array of strings.  The string can\ncontain a comma-delimited list, in which case it will be split to an array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Have two fields added, option 1\nmodel.setFields('properties', ['parent_id', 'create_user_id']);\n// Have two fields added, option 2\nmodel.setFields('properties', 'parent_id');\nmodel.setFields('properties', 'create_user_id');\n// Have two fields added, option 3\nmodel.setFields('properties', 'parent_id,create_user_id');\n")),(0,r.kt)("h2",{id:"resetfieldsrole-names--void"},"resetFields(role, names) : void"),(0,r.kt)("p",null,"Removes one or more fields from the response.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"role")," parameter is a\nstring.  If nothing is specified, all roles will be removed (not returned).  The\n",(0,r.kt)("inlineCode",{parentName:"p"},"names")," parameter can be either string, or an array of strings.  The string can\ncontain a comma-delimited list, in which case it will be split to an array.  If\nnothing is specified, all properties from the role  will be removed (not returned)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Cancel all expansions and fetch the fresh data\nmodel.resetFields();\nmodel.fetch();\n")),(0,r.kt)("h2",{id:"getresourcefieldsurlquery--string"},"getResourceFieldsUrlQuery() : string"),(0,r.kt)("p",null,"Formats the URL query parameters for the field addition.  They can be concatenated\nwith other URL query parts (both object literals and strings) by ",(0,r.kt)("inlineCode",{parentName:"p"},"Url.combineQueryString"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var url = ...,\n    query = Url.combineQueryString(\n      ...,\n      this.getResourceFieldsUrlQuery()\n    );\nif (query) {\n  url = Url.appendQuery(url, query);\n}\n")),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ConnectableMixin")))}u.isMDXComponent=!0}}]);