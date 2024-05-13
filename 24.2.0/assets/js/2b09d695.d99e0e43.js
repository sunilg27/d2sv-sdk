"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[7082],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var o=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return t?o.createElement(h,r(r({ref:n},d),{},{components:t})):o.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(8168),a=(t(6540),t(5680));const i={},r="UploadableMixin",l={unversionedId:"api/nuc/models/mixins/uploadable/uploadable.mixin",id:"api/nuc/models/mixins/uploadable/uploadable.mixin",title:"UploadableMixin",description:"Enables creating and modifying the resource behind a Backbone.Model.",source:"@site/articles/api/nuc/models/mixins/uploadable/uploadable.mixin.md",sourceDirName:"api/nuc/models/mixins/uploadable",slug:"/api/nuc/models/mixins/uploadable/uploadable.mixin",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/mixins/uploadable/uploadable.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"SyncableFromMultipleSourcesMixin",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/mixins/syncable.from.multiple.sources/"},next:{title:"AdditionalResourcesV2Mixin",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/mixins/v2.additional.resources/v2.additional.resources.mixin"}},s={},p=[{value:"How to apply the mixin to a model",id:"how-to-apply-the-mixin-to-a-model",level:3},{value:"How to use the mixin",id:"how-to-use-the-mixin",level:3},{value:"makeUploadable(options) : this",id:"makeuploadableoptions--this",level:2},{value:"prepare(data, options) : object",id:"preparedata-options--object",level:2},{value:"See Also",id:"see-also",level:2},{value:"Motivation",id:"motivation",level:2},{value:"PATCH Semantics Support",id:"patch-semantics-support",level:3},{value:"File Upload Support",id:"file-upload-support",level:3}],d={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,o.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"uploadablemixin"},"UploadableMixin"),(0,a.yg)("p",null,"Enables creating and modifying the resource behind a ",(0,a.yg)("inlineCode",{parentName:"p"},"Backbone.Model"),'.\nSimplifies requests with multi-part content, enables mocking by mockjax\nand supports pasing the JSON body as form-encoded parameter "body".\nAlso introduces the ',(0,a.yg)("inlineCode",{parentName:"p"},"prepare"),' method to "massage" request body similarly\nto the ',(0,a.yg)("inlineCode",{parentName:"p"},"parse")," method for the response body."),(0,a.yg)("h3",{id:"how-to-apply-the-mixin-to-a-model"},"How to apply the mixin to a model"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"var MyModel = Backbone.Model.extend({\n  constructor: function MyModel(attributes, options) {\n    Backbone.Model.prototype.constructor.apply(this, arguments);\n    this.makeConnectable(options)\n        .makeUploadable(options);\n  },\n\n  url: function () {\n    return Url.combine(this.connector.connection.url, 'myresource')\n  }\n});\n\nConnectableMixin.mixin(MyModel.prototype);\nUploadableMixin.mixin(MyModel.prototype);\n")),(0,a.yg)("p",null,"This mixin us usually combined together with the ",(0,a.yg)("inlineCode",{parentName:"p"},"ConnectableMixin"),"\nor with another cumulated mixin which includes it."),(0,a.yg)("h3",{id:"how-to-use-the-mixin"},"How to use the mixin"),(0,a.yg)("p",null,"It just works whenever you call the ",(0,a.yg)("inlineCode",{parentName:"p"},"save")," method of the model."),(0,a.yg)("h2",{id:"makeuploadableoptions--this"},"makeUploadable(options) : this"),(0,a.yg)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Model or Backbone.Collection constructor options passed in."),(0,a.yg)("h2",{id:"preparedata-options--object"},"prepare(data, options) : object"),(0,a.yg)("p",null,'Can be overridden to "massage" the data, which are going to be sent to the\nserver in the request body. If not overridden, the unchanged input of the\n',(0,a.yg)("inlineCode",{parentName:"p"},"save")," method, or ",(0,a.yg)("inlineCode",{parentName:"p"},"this.attributes"),", will be sent to the server as-is.\nThe ",(0,a.yg)("inlineCode",{parentName:"p"},"prepare")," method converts model attributes to the request body object,\nso that the server accepts it, like the ",(0,a.yg)("inlineCode",{parentName:"p"},"parse")," method converts the response\nbody object to model attributes, so that the client understands them."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"// For example, the server sends and receives resource attributes wrapped\n// in an object with a `data` property.\nvar MyModel = Backbone.Model.extend({\n  constructor: function MyModel(attributes, options) {\n    Backbone.Model.prototype.constructor.apply(this, arguments);\n    this.makeUploadable(options);\n  },\n\n  prepare: function (data, options) {\n    return {data: data};\n  },\n\n  parse: function (response, options) {\n    return response.data;\n  }\n});\n\nUploadableMixin.mixin(MyModel.prototype);\n")),(0,a.yg)("p",null,"Calling the ",(0,a.yg)("inlineCode",{parentName:"p"},"prepare")," method can be prevented by setting the ",(0,a.yg)("inlineCode",{parentName:"p"},"prepare"),"\noption to ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),", similarly to preventing the ",(0,a.yg)("inlineCode",{parentName:"p"},"parse")," method from being\ncalled by setting the ",(0,a.yg)("inlineCode",{parentName:"p"},"parse")," option to ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,a.yg)("h2",{id:"see-also"},"See Also"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ConnectableMixin"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"ResourceMixin")),(0,a.yg)("h2",{id:"motivation"},"Motivation"),(0,a.yg)("h3",{id:"patch-semantics-support"},"PATCH Semantics Support"),(0,a.yg)("p",null,"The CS REST API implements neither PUT nor PATCH semantics correctly, which\nmakes usage of high-level JavaScript frameworks like Backbone impossible.\nThe resource modification request has to be built in a custom way, so that\nit follows the PATCH semantics, but uses the PUT verb.  This mixin allows\nusage of the Backbone in the usual way - with patch-mode for modifications."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"// Rename a concrete node\nvar connector = new Connector({\n      connection: {\n        url: '//server/instance/cs/api/v1',\n        supportPath: '/instancesupport'\n      }\n    }),\n    node = new NodeModel({\n      id: 12345\n    }, {\n      connector: connector\n    });\nnode.save({\n      // properties to change on the server and in the model\n      name: 'New name'\n    }, {\n      patch: true, // send only properties specified above;\n                   // not everything from this.attributes\n      wait: true   // set the properties to this.attributes\n                   // only if and after the request succeeds\n    })\n    .done(function () {\n      console.log('New name:', node.get('name'));\n    })\n    .fail(function () {\n      console.log('Renaming the node failed.',\n        'Old name:', node.get('name'));\n    });\n")),(0,a.yg)("p",null,"Another missing feature in the CS REST API is returning the created and\nmodified properties from the POST and PUT responses.  If you need the\nmodel complete after a modification, you need to fetch it again, wasting\na server call:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"// Rename a concrete node and refresh other properties like `modify_date`\nnode.save({\n      name: 'New name'\n    }, {\n      patch: true,\n      wait: true\n    })\n    .then(function () {\n      return node.fetch();\n    })\n    .done(function () {\n      console.log('New name:', node.get('name'));\n    })\n    .fail(function () {\n      console.log('Renaming the node failed.');\n    });\n")),(0,a.yg)("h3",{id:"file-upload-support"},"File Upload Support"),(0,a.yg)("p",null,"If the newly created resource needs a raw file content, you can pass the\nfields of the file type via options and let the mixin build the right request\npayload and set ist content type."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"// Upload a new document\nvar connector = new Connector({\n      connection: {\n        url: '//server/instance/cs/api/v1',\n        supportPath: '/instancesupport'\n      }\n    }),\n    node = new NodeModel({\n      type: 144\n    }, {\n      connector: connector\n    }),\n    file = ...; // a File or Blob object\nnode.save({\n      name: 'New document',\n      parent_id: 2000\n    }, {\n      files: {\n        file: file\n      }\n    })\n    .done(function () {\n      console.log('New document ID:', node.get('id'));\n    })\n    .fail(function (request) {\n      var error = new base.Error(request);\n      console.log('Uploading document failed:', error);\n    });\n")),(0,a.yg)("p",null,"Because the CS REST API is not friendly to clients expecting RESTful APIs,\nyou will need to fetch the newly created node to get all properties,\nwasting another server call:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"// Upload a new document and get all common properties\nvar node = new NodeModel(undefined, {connector: connector}),\n    file = ...; // a File or Blob object\nnode.save({\n      type: 144,\n      name: 'New document',\n      parent_id: 2000\n    }, {\n      files: {\n        file: file\n      }\n    })\n    .then(function () {\n      return node.fetch();\n    })\n    .done(function () {\n      console.log('New document ID:', node.get('id'));\n    })\n    .fail(function (request) {\n      var error = new base.Error(request);\n      console.log('Uploading document failed:', error);\n    });\n")))}u.isMDXComponent=!0}}]);