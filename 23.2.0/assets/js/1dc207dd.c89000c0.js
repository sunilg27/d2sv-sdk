"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[7742],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},y=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),y=r,f=s["".concat(i,".").concat(y)]||s[y]||u[y]||a;return t?o.createElement(f,d(d({ref:n},p),{},{components:t})):o.createElement(f,d({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,d=new Array(a);d[0]=y;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[s]="string"==typeof e?e:r,d[1]=l;for(var c=2;c<a;c++)d[c]=t[c];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const a={},d="NodeAddableTypeCollection",l={unversionedId:"api/nuc/models/node/node.addable.type",id:"api/nuc/models/node/node.addable.type",title:"NodeAddableTypeCollection",description:"Loads types of nodes, which can be added to the specified container by the",source:"@site/articles/api/nuc/models/node/node.addable.type.md",sourceDirName:"api/nuc/models/node",slug:"/api/nuc/models/node/node.addable.type",permalink:"/23.2.0/api/nuc/models/node/node.addable.type",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"FieldsV2Mixin",permalink:"/23.2.0/api/nuc/models/mixins/v2.fields/v2.fields.mixin"},next:{title:"NodeModel",permalink:"/23.2.0/api/nuc/models/node/node.model"}},i={},c=[{value:"AddableTypeModel Attributes",id:"addabletypemodel-attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"See Also",id:"see-also",level:3}],p={toc:c},s="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nodeaddabletypecollection"},"NodeAddableTypeCollection"),(0,r.kt)("p",null,"Loads types of nodes, which can be added to the specified container by the\nauthenticated user.  When creating a new instance, you need to pass an\ninstance of the `",(0,r.kt)("a",{parentName:"p",href:"node.children.md"},"NodeModel")," to the constructor to specify\nthe target container."),(0,r.kt)("h2",{id:"addabletypemodel-attributes"},"AddableTypeModel Attributes"),(0,r.kt)("p",null,"type (integer)\n: Subtype number of the node type"),(0,r.kt)("p",null,"type_name (string)\n: Displayable name of the node type"),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Fetch node types which can be added to the specific container\nvar connector = new Connector({\n      connection: {\n        url: '//server/instance/cs/api/v1',\n        supportPath: '/instancesupport'\n      }\n    }),\n    parent = new NodeModel({\n      id: 12345\n    }, {\n      connector: connector\n    }),\n    addableTypes = new NodeAddableTypeCollection(undefined, {\n      node: parent\n    });\naddableTypes.fetch()\n    .done(function () {\n      console.log(addableTypes.pluck('type_name'));\n    });\n")),(0,r.kt)("h3",{id:"see-also"},"See Also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/23.2.0/api/nuc/models/node/node.model"},"Node Model"),","))}u.isMDXComponent=!0}}]);