"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[9109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=i.createContext({}),p=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(a.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,y=c["".concat(a,".").concat(u)]||c[u]||m[u]||r;return n?i.createElement(y,l(l({ref:t},d),{},{components:n})):i.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const r={},l=void 0,s={unversionedId:"api/d2/controls/list/listitem.type.node.view",id:"api/d2/controls/list/listitem.type.node.view",title:"listitem.type.node.view",description:"ListItemTypeNode : d2/sdk/controls/list/listitem.type.node.view",source:"@site/articles/api/d2/controls/list/listitem.type.node.view.md",sourceDirName:"api/d2/controls/list",slug:"/api/d2/controls/list/listitem.type.node.view",permalink:"/d2sv-sdk/23.4.0/api/d2/controls/list/listitem.type.node.view",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"listitem.type.model.view",permalink:"/d2sv-sdk/23.4.0/api/d2/controls/list/listitem.type.model.view"},next:{title:"simple.list.view",permalink:"/d2sv-sdk/23.4.0/api/d2/controls/list/simple.list.view"}},a={},p=[{value:"ListItemTypeNode : <code>d2/sdk/controls/list/listitem.type.node.view</code>",id:"listitemtypenode--d2sdkcontrolslistlistitemtypenodeview",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"module_ListItemTypeNode"}),(0,o.kt)("h2",{id:"listitemtypenode--d2sdkcontrolslistlistitemtypenodeview"},"ListItemTypeNode : ",(0,o.kt)("code",null,"d2/sdk/controls/list/listitem.type.node.view")),(0,o.kt)("p",null,"A list item view that can work with any ",(0,o.kt)("a",{parentName:"p",href:"../../models/node.model"},"NodeModel"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Extends"),": ",(0,o.kt)("a",{parentName:"p",href:"./listitem.type.model.view"},(0,o.kt)("code",null,"ListItemTypeModel")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"See"),": ",(0,o.kt)("a",{parentName:"p",href:"./listitem.type.model.view"},"ListItemTypeNode"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Example")," ",(0,o.kt)("em",{parentName:"p"},"(Sample usage)"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"define([\n 'nuc/lib/backbone',\n 'nuc/lib/marionette',\n 'd2/sdk/controls/list/simple.list.view',\n 'd2/sdk/controls/list/listitem.type.node.view',\n 'd2/sdk/models/node.model'\n], function(Backbone, Marionette, ListView, ListItemTypeNodeView, NodeModel){\n 'use strict';\n\n  var MyListView = ListView.extend({\n   childView: ListItemTypeNodeView,\n   constructor: function MyListView(options) {\n     options = options || {};\n     MyListView.__super__.constructor.call(this, options);\n   }\n });\n\n var MyCollection = Backbone.Collection.extend({\n   model: NodeModel\n });\n\n var collection = new MyCollection([\n   {id: '1', name: 'One', mime_type: 'application/pdf'},\n   {id: '2', name: 'Two', mime_type: 'image/jpg'}\n ]);\n\n new Marionette.Region({el: '.host-el'}).show(new MyListView({\n   collection: collection\n }));\n});\n")))}m.isMDXComponent=!0}}]);