"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2822],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r=a.createContext({}),s=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(r.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,d=e.originalType,r=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(t),u=o,h=c["".concat(r,".").concat(u)]||c[u]||p[u]||d;return t?a.createElement(h,i(i({ref:n},m),{},{components:t})):a.createElement(h,i({ref:n},m))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var d=t.length,i=new Array(d);i[0]=u;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<d;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3711:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>s});var a=t(7462),o=(t(7294),t(3905));const d={},i="DelayedCommandableV2Mixin",l={unversionedId:"api/nuc/models/mixins/v2.delayed.commandable/v2.delayed.commandable.mixin",id:"api/nuc/models/mixins/v2.delayed.commandable/v2.delayed.commandable.mixin",title:"DelayedCommandableV2Mixin",description:"Provides support for fetching permitted actions by an extra call after",source:"@site/articles/api/nuc/models/mixins/v2.delayed.commandable/v2.delayed.commandable.mixin.md",sourceDirName:"api/nuc/models/mixins/v2.delayed.commandable",slug:"/api/nuc/models/mixins/v2.delayed.commandable/v2.delayed.commandable.mixin",permalink:"/23.2.0/api/nuc/models/mixins/v2.delayed.commandable/v2.delayed.commandable.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"CommandableMixin",permalink:"/23.2.0/api/nuc/models/mixins/v2.commandable/v2.commandable.mixin"},next:{title:"ExpandableV2Mixin",permalink:"/23.2.0/api/nuc/models/mixins/v2.expandable/v2.expandable.mixin"}},r={},s=[{value:"How to apply the mixin to a model",id:"how-to-apply-the-mixin-to-a-model",level:3},{value:"How to use the mixin",id:"how-to-use-the-mixin",level:3},{value:"makeDelayedCommandableV2(options) : this",id:"makedelayedcommandablev2options--this",level:2},{value:"commands",id:"commands",level:2},{value:"defaultActionCommands",id:"defaultactioncommands",level:2},{value:"delayRestCommands",id:"delayrestcommands",level:2},{value:"delayRestCommandsForModels",id:"delayrestcommandsformodels",level:2},{value:"promoteSomeRestCommands",id:"promotesomerestcommands",level:2},{value:"delayedActions",id:"delayedactions",level:2},{value:"setCommands(names) : void",id:"setcommandsnames--void",level:2},{value:"resetCommands(names) : void",id:"resetcommandsnames--void",level:2},{value:"setDefaultActionCommands(names) : void",id:"setdefaultactioncommandsnames--void",level:2},{value:"resetDefaultActionCommands(names) : void",id:"resetdefaultactioncommandsnames--void",level:2},{value:"getRequestedCommandsUrlQuery() : string",id:"getrequestedcommandsurlquery--string",level:2},{value:"setEnabledDelayRestCommands(enabled, promoted) : void",id:"setenableddelayrestcommandsenabled-promoted--void",level:2},{value:"See Also",id:"see-also",level:2}],m={toc:s},c="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"delayedcommandablev2mixin"},"DelayedCommandableV2Mixin"),(0,o.kt)("p",null,"Provides support for fetching permitted actions by an extra call after\nthe primary node model or collection has been fetched.  It depends on setting\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," URL query parameter as introduced by the ",(0,o.kt)("inlineCode",{parentName:"p"},"api/v2/nodes/:id")," (V2)\nresource to specify just the default actions. After the main call has finished.\nan additional ",(0,o.kt)("inlineCode",{parentName:"p"},"api/v2/actions/nodes")," call will be issued to enquire about the\nrest of the actions."),(0,o.kt)("p",null,"Server responses can contain ",(0,o.kt)("em",{parentName:"p"},"permitted actions")," to be able to support\nenabling and disabling in the corresponding UI; how many and which ones\nshould be checked by the server, it can be specified."),(0,o.kt)("h3",{id:"how-to-apply-the-mixin-to-a-model"},"How to apply the mixin to a model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"var MyModel = Backbone.Model.extend({\n\n  constructor: function MyModel(attributes, options) {\n    Backbone.Model.prototype.constructor.apply(this, arguments);\n    this\n      .makeConnectable(options)\n      .makeDelayedCommandableV2(options);\n  },\n\n  url: function () {\n    var url = Url.combine(this.connector.connection.url, 'myresource'),\n        query = Url.combineQueryString(\n          this.getRequestedCommandsUrlQuery()\n        );\n    return query ? url + '?' + query : url;\n  }\n\n});\n\nConnectableMixin.mixin(MyModel.prototype);\nDelayedCommandableV2Mixin.mixin(MyModel.prototype);\n")),(0,o.kt)("p",null,"This mixin us usually combined together with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectableMixin"),"\nor with another cumulated mixin which includes it."),(0,o.kt)("h3",{id:"how-to-use-the-mixin"},"How to use the mixin"),(0,o.kt)("p",null,"Set up the URL parameters by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"setDefaultActionCommands"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"resetDefaultActionCommands"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"setCommands")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"resetCommands")," and\nfetch the model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Set the commands for requesting when creating the model\nvar model = new MyModel(undefined, {\n      connector: connector,\n      commands: ['download', 'delete', 'reserve']\n      defaultActionCommands: ['download'],\n      delayRestCommands: true\n    });\nmodel.fetch();\n\n// Set the commands for requesting after creating the model\nmodel.setCommands(['download', 'delete', 'reserve']);\nmodel.setDefaultActionCommands(['download']);\nmodel.fetch();\n")),(0,o.kt)("h2",{id:"makedelayedcommandablev2options--this"},"makeDelayedCommandableV2(options) : this"),(0,o.kt)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Model or Backbone.Collection constructor options passed in."),(0,o.kt)("p",null,"Recognized option properties:"),(0,o.kt)("p",null,"commands\n: One or more command signatures to be requested for being checked.  The value\nis handled the same way as the ",(0,o.kt)("inlineCode",{parentName:"p"},"setCommands")," method does it.  An empty array\nis the default."),(0,o.kt)("p",null,"defaultActionCommands\n: One or more command signatures to be requested for being checked immediately\nby the first call.  The rest of commands specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"commands")," parameter\nwill be fetched later by the second call.  The value is handled the same way as\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"setDefaultActionCommands")," method does it.  An empty array is the default."),(0,o.kt)("p",null,"delayRestCommands\n: Enables delayed fetching of the non-default actions by a second server call.\n",(0,o.kt)("inlineCode",{parentName:"p"},"False")," is the default."),(0,o.kt)("p",null,"delayRestCommandsForModels\n: Enables delayed fetching of the non-default actions by a second server call\nfor child models, which are created automatically by adding attribute objects\nto the collection; if the mixin is aplied to a collection, the parameter\n",(0,o.kt)("inlineCode",{parentName:"p"},"delayRestCommands")," does not apply to the child models; the\n",(0,o.kt)("inlineCode",{parentName:"p"},"delayRestCommandsForModels")," does. ",(0,o.kt)("inlineCode",{parentName:"p"},"False")," is the default."),(0,o.kt)("p",null,"promoteSomeRestCommands\n: Forces delayed fetching of only some non-default actions listed by ",(0,o.kt)("inlineCode",{parentName:"p"},"nuc/utils/promoted.actionitems"),", if ",(0,o.kt)("inlineCode",{parentName:"p"},"delayRestCommands")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"True")," is the default."),(0,o.kt)("h2",{id:"commands"},"commands"),(0,o.kt)("p",null,"Command signatures to be requested for being checked (array of strings, empty\nby default, read-only)."),(0,o.kt)("h2",{id:"defaultactioncommands"},"defaultActionCommands"),(0,o.kt)("p",null,"Command signatures for being checked to be requested immediately by the first\nserver call (array of strings, empty by default, read-only)."),(0,o.kt)("h2",{id:"delayrestcommands"},"delayRestCommands"),(0,o.kt)("p",null,": Says, if delayed fetching of the non-default actions by a second server call\nis enabled (boolean, ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," by default, read-only)."),(0,o.kt)("h2",{id:"delayrestcommandsformodels"},"delayRestCommandsForModels"),(0,o.kt)("p",null,": Says, if delayed fetching of the non-default actions by a second server call\nis enabled for child models, which are created automatically by adding\nattribute objects to the collection; if the mixin is aplied to a collection,\nthe parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"delayRestCommands")," does not apply to the child models; the\n",(0,o.kt)("inlineCode",{parentName:"p"},"delayRestCommandsForModels")," does (boolean, ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," by default, read-only)."),(0,o.kt)("h2",{id:"promotesomerestcommands"},"promoteSomeRestCommands"),(0,o.kt)("p",null,": Says, if only non-default actions listed by ",(0,o.kt)("inlineCode",{parentName:"p"},"nuc/utils/promoted.actionitems"),"\nwill be fetche delayed, if ",(0,o.kt)("inlineCode",{parentName:"p"},"delayRestCommands")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," (boolean, ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," by\ndefault, read-only)."),(0,o.kt)("h2",{id:"delayedactions"},"delayedActions"),(0,o.kt)("p",null,"A collection fetching the rest of non-default actions. If you need to wait until\nall permitted actions are received, you need to check the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetched")," status of this\ncollection, or listen to the 'sync' even of this collection.  The target collection,\nwhich you applied this mixin too will report that it is fetched immediately after\nthe first server call is finished with the default actions only."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"var model = new MyModel(undefined, {\n      connector: connector,\n      commands: ['download', 'delete', 'reserve']\n      defaultActionCommands: ['download'],\n      delayRestCommands: true\n    });\nmodel\n    .once('sync', function () {\n      // nodes with permitted default actions are available\n    })\n    .delayedActions.once('sync', function () {\n      // nodes with all permitted actions are available\n    })\n    .fetch();\n")),(0,o.kt)("h2",{id:"setcommandsnames--void"},"setCommands(names) : void"),(0,o.kt)("p",null,"Asks for one or more commands to be checked.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"names")," parameter can be\neither string, or an array of strings.  The string can contain a comma-delimited\nlist, in which case it will be split to an array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Have two commands checked, option 1\nmodel.setCommands(['delete', 'reserve']);\n// Have two commands checked, option 2\nmodel.setCommands('delete');\nmodel.setCommands('reserve');\n// Have two commands checked, option 3\nmodel.setCommands('delete,reserve');\n")),(0,o.kt)("h2",{id:"resetcommandsnames--void"},"resetCommands(names) : void"),(0,o.kt)("p",null,"Prevents one or more commands from being checked.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"names")," parameter can be either\nstring, or an array of strings, or nothing.  The string can contain a comma-delimited list,\nin which case it will be split to an array.  If nothing is specified, all commands will\nbe removed (not to be checked)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Cancel all command checks and fetch the fresh data\nmodel.resetCommands();\nmodel.fetch();\n")),(0,o.kt)("h2",{id:"setdefaultactioncommandsnames--void"},"setDefaultActionCommands(names) : void"),(0,o.kt)("p",null,"Asks for one or more commands to be checked immediately by the first server\ncall.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"names")," parameter can be either string, or an array of strings.\nThe string can contain a comma-delimited list, in which case it will be split\nto an array.  The rest of commands specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"setCommands")," method\nwill be fetched later by the second call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Have two commands checked, option 1\nmodel.setCommands(['browse', 'download']);\n// Have two commands checked, option 2\nmodel.setCommands('browse');\nmodel.setCommands('download');\n// Have two commands checked, option 3\nmodel.setCommands('browse,download');\n")),(0,o.kt)("h2",{id:"resetdefaultactioncommandsnames--void"},"resetDefaultActionCommands(names) : void"),(0,o.kt)("p",null,"Prevents one or more commands from being checked immediatley by the first\nserver call.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"names")," parameter can be either string, or an array of\nstrings, or nothing.  The string can contain a comma-delimited list, in\nwhich case it will be split to an array.  If nothing is specified, all\ncommands will be removed (not to be checked by the first server call)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Have all commands fetched delayed by the second server call\nmodel.setCommands(['browse', 'download']);\nmodel.resetDefaultActionCommands();\nmodel.fetch();\n")),(0,o.kt)("h2",{id:"getrequestedcommandsurlquery--string"},"getRequestedCommandsUrlQuery() : string"),(0,o.kt)("p",null,"Formats the URL query parameters for the command investigation.  They can be concatenated\nwith other URL query parts (both object literals and strings) by ",(0,o.kt)("inlineCode",{parentName:"p"},"Url.combineQueryString"),".\nIf delayed action fetching is enabled, only the default actions will be returned by this\nmethod; the rest of specified actions fill be fetched by an additional server call later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"var url = ...,\n    query = Url.combineQueryString(\n      ...,\n      this.getRequestedCommandsUrlQuery()\n    );\nif (query) {\n  url = Url.appendQuery(url, query);\n}\n")),(0,o.kt)("h2",{id:"setenableddelayrestcommandsenabled-promoted--void"},"setEnabledDelayRestCommands(enabled, promoted) : void"),(0,o.kt)("p",null,"Enables or disables the delayed command fetching and promoted actions. The current\nstate can be seen by ",(0,o.kt)("inlineCode",{parentName:"p"},"delayRestCommands")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"promoteSomeRestCommands")," properties."),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ConnectableMixin"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CommandableV2Mixin")))}p.isMDXComponent=!0}}]);