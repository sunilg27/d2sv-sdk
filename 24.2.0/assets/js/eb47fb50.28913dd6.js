"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[1782],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(8168),o=(t(6540),t(5680));const i={},a="BrowsableV1RequestMixin",l={unversionedId:"api/nuc/models/browsable/v1.request.mixin",id:"api/nuc/models/browsable/v1.request.mixin",title:"BrowsableV1RequestMixin",description:"Serializes URL and parses response according to the V1 of the REST API",source:"@site/articles/api/nuc/models/browsable/v1.request.mixin.md",sourceDirName:"api/nuc/models/browsable",slug:"/api/nuc/models/browsable/v1.request.mixin",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/browsable/v1.request.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"ClientSideBrowsableMixin",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/browsable/client-side.mixin"},next:{title:"BrowsableV1ResponseMixin",permalink:"/d2sv-sdk/24.2.0/api/nuc/models/browsable/v1.response.mixin"}},s={},p=[{value:"Example",id:"example",level:3},{value:"makeBrowsableV1Request(options) : this",id:"makebrowsablev1requestoptions--this",level:2},{value:"getBrowsableUrlQuery(options) : object literal or string",id:"getbrowsableurlqueryoptions--object-literal-or-string",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:p},u="wrapper";function b(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"browsablev1requestmixin"},"BrowsableV1RequestMixin"),(0,o.yg)("p",null,"Serializes URL and parses response according to the V1 of the REST API\n(",(0,o.yg)("inlineCode",{parentName:"p"},"/api/v1/nodes/:id/nodes"),"), for example) using the collection state\nmaintained by ",(0,o.yg)("inlineCode",{parentName:"p"},"BrowsableMixin"),".  The ",(0,o.yg)("inlineCode",{parentName:"p"},"BrowsableMixin")," or a mixin\nincluding it must be applied with this mixin together."),(0,o.yg)("p",null,"Browsing implementation and response parsing is supposed to be added\nby other mixins, according to the specifics of the server resource."),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"var MyCollection = Backbone.Collection.extend({\n\n  constructor: function MyCollection(models, options) {\n    Backbone.Collection.prototype.constructor.apply(this, arguments);\n\n    this\n      .makeBrowsable(options)\n      .makeBrowsableV1Request(options);\n  },\n\n  url: function () {\n    // use `getBrowsableUrlQuery` to format the URL query or its part\n  }\n\n});\n\nBrowsableMixin.mixin(MyCollection.prototype);\nBrowsableV1RequestMixin.mixin(MyCollection.prototype);\n")),(0,o.yg)("h2",{id:"makebrowsablev1requestoptions--this"},"makeBrowsableV1Request(options) : this"),(0,o.yg)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Collection constructor options passed in.  It calls\n",(0,o.yg)("inlineCode",{parentName:"p"},"makeBrowsable")," from ",(0,o.yg)("inlineCode",{parentName:"p"},"BrowsableMixin")," too."),(0,o.yg)("h2",{id:"getbrowsableurlqueryoptions--object-literal-or-string"},"getBrowsableUrlQuery(options) : object literal or string"),(0,o.yg)("p",null,"Formats the URL query parameters for paging, sorting and filtering.\nThey can be concatenated with other URL query parts (both object lierals\nand strings) by ",(0,o.yg)("inlineCode",{parentName:"p"},"Url.combineQueryString"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"query = Url.combineQueryString(\n  ...,\n  this.getBrowsableUrlQuery()\n);\n")),(0,o.yg)("h2",{id:"see-also"},"See Also"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"BrowsableMixin"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"BrowsableV1ResponseMixin")))}b.isMDXComponent=!0}}]);