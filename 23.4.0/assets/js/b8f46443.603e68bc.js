"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[515],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?i.createElement(h,r(r({ref:n},c),{},{components:t})):i.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=t(7462),o=(t(7294),t(3905));const a={},r="RulesMatchingMixin",s={unversionedId:"api/nuc/models/mixins/rules.matching/rules.matching.mixin",id:"api/nuc/models/mixins/rules.matching/rules.matching.mixin",title:"RulesMatchingMixin",description:"Helps implementing a collection of rule models. which are supposed to select",source:"@site/articles/api/nuc/models/mixins/rules.matching/rules.matching.mixin.md",sourceDirName:"api/nuc/models/mixins/rules.matching",slug:"/api/nuc/models/mixins/rules.matching/rules.matching.mixin",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/mixins/rules.matching/rules.matching.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"ResourceMixin",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/mixins/resource/resource.mixin"},next:{title:"StateCarrierMixin",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/mixins/state.carrier/state.carrier.mixin"}},l={},p=[{value:"How to apply the mixin to a model",id:"how-to-apply-the-mixin-to-a-model",level:3},{value:"How use the mixin",id:"how-use-the-mixin",level:3},{value:"makeRulesMatching(options) : this",id:"makerulesmatchingoptions--this",level:2},{value:"Conditions",id:"conditions",level:2},{value:"Properties",id:"properties",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rulesmatchingmixin"},"RulesMatchingMixin"),(0,o.kt)("p",null,"Helps implementing a collection of rule models. which are supposed to select\none model, which rules match the input object. For example, choose an icon\nor the default click-action for a particular node."),(0,o.kt)("h3",{id:"how-to-apply-the-mixin-to-a-model"},"How to apply the mixin to a model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var NodeActionSelectingModel = Backbone.Model.extend({\n  idAttribute: 'signature',\n\n  defaults: {\n    sequence: 100,\n    signature: null\n  },\n\n  constructor: function NodeActionSelectingModel(attributes, options) {\n    Backbone.Model.prototype.constructor.apply(this, arguments);\n    this.makeRulesMatching(options);\n  },\n\n  enabled: function (node, options) {\n    return this.matchRules(node, this.attributes, options);\n  }\n});\n\nRulesMatchingMixin.mixin(NodeActionSelectingModel.prototype);\n\nvar NodeActionSelectingCollection = Backbone.Collection.extend({\n  model: NodeActionSelectingModel,\n\n  comparator: 'sequence',\n\n  constructor: function NodeActionSelectingCollection(models, options) {\n    Backbone.Collection.prototype.constructor.apply(this, arguments);\n  },\n\n  findByNode: function (node, options) {\n    return this.find(function (rule) {\n      return rule.enabled(node, options);\n    });\n  }\n});\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," parameter in ",(0,o.kt)("inlineCode",{parentName:"p"},"findByNode")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," methods is optional. You can use it for special cases. For example, if you expect the developers to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"decides")," rule, you can allow them access other data than just the subject of the decision (NodeModel in this example). For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," instance. You can set such data to an object and pass via that optional ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," parameter."),(0,o.kt)("h3",{id:"how-use-the-mixin"},"How use the mixin"),(0,o.kt)("p",null,"Populate a collection of rule models. Whenever you need to find, which rule\nmodels matches the object of the selection, use the method exposed for this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var nodeActions = new NodeActionSelectingCollection([\n  {\n    equals: {\n      container: true\n    },\n    signature: \'Browse\'\n  },\n  {\n    equals: {\n      type: [144, 749]\n    },\n    signature: \'Open\'\n  },\n  {\n    and: [\n      equals: {\n        type: 144\n      },\n      containsNoCase: {\n        mime_type: [\n          "application/msword",\n          "application/vnd.ms-word",\n          "application/vnd.msword",\n          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",\n          "application/vnd.wordprocessing-openxml",\n          "application/vnd.ces-quickword",\n          "application/vnd.ms-word.document.macroEnabled.12",\n          "application/vnd.ms-word.document.12",\n          "application/mspowerpoint",\n          "application/vnd.ms-powerpoint",\n          "application/vnd.openxmlformats-officedocument.presentationml.presentation",\n          "application/vnd.ces-quickpoint",\n          "application/vnd.presentation-openxml",\n          "application/vnd.presentation-openxmlm",\n          "application/vnd.ms-powerpoint.presentation.macroEnabled.12",\n          "application/msexcel",\n          "application/vnd.ms-excel",\n          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",\n          "application/vnd.ces-quicksheet",\n          "application/vnd.spreadsheet-openxml",\n          "application/vnd.ms-excel.sheet.macroEnabled.12",\n        ]\n      }\n    },\n    signature: \'Edit\',\n    sequence: 50\n  },\n  {\n    and: {\n      equals: {\n        type: 144\n      },\n      or: {\n        startsWithNoCase: {\n          mime_type: \'image/\'\n        },\n        equalsNoCase: {\n          mime_type: [\'application/pdf\', \'application/x-pdf\']\n        }\n      }\n    },\n    signature: \'Convert\',\n    sequence: 50\n  },\n  {\n    and: [\n      {\n        equals: {\n          type: 144\n        }\n      },\n      {\n        equalsNoCase: {\n          mime_type: \'text/plain\'\n        }\n      }\n    ],\n    signature: \'Read\',\n    sequence: 50\n  },\n  {\n    signature: \'Properties\',\n    sequence: 200\n  }\n]);\n\nvar node = new NodeModel(...),\n    action = nodeActions.findByNode(node);\n')),(0,o.kt)("h2",{id:"makerulesmatchingoptions--this"},"makeRulesMatching(options) : this"),(0,o.kt)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Model constructor options passed in."),(0,o.kt)("h2",{id:"conditions"},"Conditions"),(0,o.kt)("p",null,"Conditions from ",(0,o.kt)("inlineCode",{parentName:"p"},"equals")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"includes"),' below are case-sensitive, if their\noperands are strings. They have their case-insensitive couterparts ending\nwith "NoCase". For example, ',(0,o.kt)("inlineCode",{parentName:"p"},"equalsNoCase")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"includesNoCase"),". "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"equals")," - the value of the selected property has to equal at least one\nof the specified values. Strings comparisons are case-insensitive."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"contains"),' - the value of the selected property has to be a part of at least\none of the specified values. String case-insensitive "indexOf" operation is\napplied.'),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"startsWith"),' - the value of the selected property has to be at the beginning\nof at least one of the specified values. String case-insensitive "startsWith"\noperation is applied.'),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"endsWith"),' - the value of the selected property has to be at the end of\nat least one of the specified values. String case-insensitive "endsWith"\noperation is applied.'),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"matches")," - the regular expression has to match at least one of the specified\nvalues. The operation is case-insensitive."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"includes")," - if the value of the selected property is an object, it has to\ninclude at least one the specified keys; if the value of the selected property\nis an array, it has to include at least one the specified items. The standard\nequal operator is applied when comparing keys and items."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"has")," - at least one of the specified properties must exist and not be null."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"decides")," - the function has to return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," at least for one of the\nspecified values."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"or")," - at least one of the sub-conditions in the arry or object has to return\n",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"all")," - all of the sub-conditions in the arry or object has to return ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"not")," - negates the result of the sub-condition."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("p",null,"Conditions are performed on properties of the scenario-controlling object -\non attributes of the controlling model. Property name is the key in the\nobject, which is the value of the operation: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  equals: {\n    type: 144\n  },\n  signature: 'Open'\n}\n\n")),(0,o.kt)("p",null,"The key can be a dot-separated expression, which would evaluate like when\na nested object is accessed in JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  equals: {\n    'id_expand.type': 5574\n  },\n  signature: 'OpenWikiPageVersion'\n}\n\n")),(0,o.kt)("p",null,"The object passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"matchRules")," can be either an object literal,\nwhich will become the direct source of the properties to test,\nor a ",(0,o.kt)("inlineCode",{parentName:"p"},"Backbone.Model")," instance, which ",(0,o.kt)("inlineCode",{parentName:"p"},"aatributes")," will be used of."))}d.isMDXComponent=!0}}]);