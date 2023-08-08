"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[3015],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=l(t),u=r,h=c["".concat(s,".").concat(u)]||c[u]||p[u]||a;return t?o.createElement(h,i(i({ref:n},d),{},{components:t})):o.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var m={};for(var s in n)hasOwnProperty.call(n,s)&&(m[s]=n[s]);m.originalType=e,m[c]="string"==typeof e?e:r,i[1]=m;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2889:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const a={},i="CommandableMixin",m={unversionedId:"api/nuc/models/mixins/v2.commandable/v2.commandable.mixin",id:"api/nuc/models/mixins/v2.commandable/v2.commandable.mixin",title:"CommandableMixin",description:"Provides support for the setting actions URL query parameter as introduced",source:"@site/articles/api/nuc/models/mixins/v2.commandable/v2.commandable.mixin.md",sourceDirName:"api/nuc/models/mixins/v2.commandable",slug:"/api/nuc/models/mixins/v2.commandable/v2.commandable.mixin",permalink:"/d2sv-sdk/23.2.0/api/nuc/models/mixins/v2.commandable/v2.commandable.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"AdditionalResourcesV2Mixin",permalink:"/d2sv-sdk/23.2.0/api/nuc/models/mixins/v2.additional.resources/v2.additional.resources.mixin"},next:{title:"DelayedCommandableV2Mixin",permalink:"/d2sv-sdk/23.2.0/api/nuc/models/mixins/v2.delayed.commandable/v2.delayed.commandable.mixin"}},s={},l=[{value:"How to apply the mixin to a model",id:"how-to-apply-the-mixin-to-a-model",level:3},{value:"How to use the mixin",id:"how-to-use-the-mixin",level:3},{value:"makeCommandable(options) : this",id:"makecommandableoptions--this",level:2},{value:"commands",id:"commands",level:2},{value:"setCommands(names) : void",id:"setcommandsnames--void",level:2},{value:"resetCommands(names) : void",id:"resetcommandsnames--void",level:2},{value:"getRequestedCommandsUrlQuery() : string",id:"getrequestedcommandsurlquery--string",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:l},c="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"commandablemixin"},"CommandableMixin"),(0,r.kt)("p",null,"Provides support for the setting ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," URL query parameter as introduced\nby the ",(0,r.kt)("inlineCode",{parentName:"p"},"api/v2/members/favorites")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"api/v2/members/accessed")," (V2) resources."),(0,r.kt)("p",null,"Server responses can contain ",(0,r.kt)("em",{parentName:"p"},"permitted actions")," to be able to support\nenabling and disabling in the corresponding UI; how many and which ones\nshould be checked by the server can be specified."),(0,r.kt)("h3",{id:"how-to-apply-the-mixin-to-a-model"},"How to apply the mixin to a model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var MyModel = Backbone.Model.extend({\n\n  constructor: function MyModel(attributes, options) {\n    Backbone.Model.prototype.constructor.apply(this, arguments);\n    this\n      .makeConnectable(options)\n      .makeCommandable(options);\n  },\n\n  url: function () {\n    var url = Url.combine(this.connector.connection.url, 'myresource'),\n        query = Url.combineQueryString(\n          this.getRequestedCommandsUrlQuery()\n        );\n    return query ? url + '?' + query : url;\n  }\n\n});\n\nConnectableMixin.mixin(MyModel.prototype);\nCommandableMixin.mixin(MyModel.prototype);\n")),(0,r.kt)("p",null,"This mixin us usually combined together with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectableMixin"),"\nor with another cumulated mixin which includes it."),(0,r.kt)("h3",{id:"how-to-use-the-mixin"},"How to use the mixin"),(0,r.kt)("p",null,"Set up the URL parameters by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"setCommands")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"resetCommands")," and fetch the model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Set the commands for requesting when creating the model\nvar model = new MyModel(undefined, {\n      connector: connector,\n      commands: ['delete', 'reserve']\n    });\nmodel.fetch();\n\n// Set the commands for requesting after creating the model\nmodel.setCommands(['delete', 'reserve']);\nmodel.fetch();\n")),(0,r.kt)("h2",{id:"makecommandableoptions--this"},"makeCommandable(options) : this"),(0,r.kt)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Model or Backbone.Collection constructor options passed in."),(0,r.kt)("p",null,"Recognized option properties:"),(0,r.kt)("p",null,"commands\n: One or more command signatures to be requested for being checked.  The value\nis handled the same way as the ",(0,r.kt)("inlineCode",{parentName:"p"},"setCommands")," method does it.  An empty array\nis the default."),(0,r.kt)("h2",{id:"commands"},"commands"),(0,r.kt)("p",null,"Command signatures to be requested for being checked (array of strings, empty\nby default, read-only)."),(0,r.kt)("h2",{id:"setcommandsnames--void"},"setCommands(names) : void"),(0,r.kt)("p",null,"Asks for one or more commands to be checked.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"names")," parameter can be\neither string, or an array of strings.  The string can contain a comma-delimited\nlist, in which case it will be split to an array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Have two commands checked, option 1\nmodel.setCommands(['delete', 'reserve']);\n// Have two commands checked, option 2\nmodel.setCommands('delete');\nmodel.setCommands('reserve');\n// Have two commands checked, option 3\nmodel.setCommands('delete,reserve');\n")),(0,r.kt)("h2",{id:"resetcommandsnames--void"},"resetCommands(names) : void"),(0,r.kt)("p",null,"Prevents one or more commands from being checked.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"names")," parameter can be either\nstring, or an array of strings, or nothing.  The string can contain a comma-delimited list,\nin which case it will be split to an array.  If nothing is specified, all commands will\nbe removed (not to be checked)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Cancel all command checks and fetch the fresh data\nmodel.resetCommands();\nmodel.fetch();\n")),(0,r.kt)("h2",{id:"getrequestedcommandsurlquery--string"},"getRequestedCommandsUrlQuery() : string"),(0,r.kt)("p",null,"Formats the URL query parameters for the command investigation.  They can be concatenated\nwith other URL query parts (both object literals and strings) by ",(0,r.kt)("inlineCode",{parentName:"p"},"Url.combineQueryString"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var url = ...,\n    query = Url.combineQueryString(\n      ...,\n      this.getRequestedCommandsUrlQuery()\n    );\nif (query) {\n  url = Url.appendQuery(url, query);\n}\n")),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ConnectableMixin")))}p.isMDXComponent=!0}}]);