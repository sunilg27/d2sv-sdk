"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2075],{5680:(e,t,l)=>{l.d(t,{xA:()=>y,yg:()=>c});var n=l(6540);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,n,o=function(e,t){if(null==e)return{};var l,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},y=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var l=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,y=a(e,["components","mdxType","originalType","parentName"]),d=p(l),u=o,c=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return l?n.createElement(c,r(r({ref:t},y),{},{components:l})):n.createElement(c,r({ref:t},y))}));function c(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=l.length,r=new Array(i);r[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:o,r[1]=a;for(var p=2;p<i;p++)r[p]=l[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}u.displayName="MDXCreateElement"},6043:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=l(8168),o=(l(6540),l(5680));const i={},r=void 0,a={unversionedId:"api/d2/controls/list/listitem.type.model.view",id:"api/d2/controls/list/listitem.type.model.view",title:"listitem.type.model.view",description:"ListItemTypeModel : d2/sdk/controls/list/listitem.type.model.view",source:"@site/articles/api/d2/controls/list/listitem.type.model.view.md",sourceDirName:"api/d2/controls/list",slug:"/api/d2/controls/list/listitem.type.model.view",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/list/listitem.type.model.view",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"tree.icon.sprites",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/icon.sprites/tree.icon.sprites"},next:{title:"listitem.type.node.view",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/list/listitem.type.node.view"}},s={},p=[{value:"ListItemTypeModel : <code>d2/sdk/controls/list/listitem.type.model.view</code>",id:"listitemtypemodel--d2sdkcontrolslistlistitemtypemodelview",level:2},{value:"listItemTypeModel.templateHelpers() \u21d2 <code>TemplateOptions</code>",id:"listitemtypemodeltemplatehelpers--templateoptions",level:3},{value:"ListItemTypeModel~ListItemTypeModel",id:"listitemtypemodellistitemtypemodel",level:3},{value:"new ListItemTypeModel(options)",id:"new-listitemtypemodeloptions",level:4},{value:"ListItemTypeModel~TemplateOptions : <code>object</code>",id:"listitemtypemodeltemplateoptions--object",level:3}],y={toc:p},d="wrapper";function m(e){let{components:t,...l}=e;return(0,o.yg)(d,(0,n.A)({},y,l,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("a",{name:"module_ListItemTypeModel"}),(0,o.yg)("h2",{id:"listitemtypemodel--d2sdkcontrolslistlistitemtypemodelview"},"ListItemTypeModel : ",(0,o.yg)("code",null,"d2/sdk/controls/list/listitem.type.model.view")),(0,o.yg)("p",null,"A list item view that can work with any ",(0,o.yg)("a",{parentName:"p",href:"https://backbonejs.org/#Model"},"Backbone.Model"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Extends"),": ",(0,o.yg)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.itemview.html"},(0,o.yg)("code",null,"Marionette.ItemView")),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Example")," ",(0,o.yg)("em",{parentName:"p"},"(Typical usage)"),"  "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"define([\n 'nuc/lib/backbone',\n 'nuc/lib/marionette',\n 'd2/sdk/controls/list/simple.list.view',\n 'd2/sdk/controls/list/listitem.type.model.view',\n 'd2/sdk/utils/contexts/context.utils',\n], function(Backbone, Marionette, ListView, ListItemTypeModelView, contextUtils){\n 'use strict';\n\n var collection = new Backbone.Collection([\n   {\n     id: 1,\n     name: 'One'\n   },\n   {\n     id: 2,\n     name: 'Two'\n   },\n   {\n     id: 3,\n     name: 'Three'\n   }\n ]), context = contextUtils.getPerspectiveContext();\n\n var MyListView = ListView.extend({\n   childView: ListItemTypeModelView,\n   childViewOptions: function() {\n     var opts = _.extend({}, this.options);\n     opts.templateHelpers = function () {\n       return {\n         name: this.model.get('name'),\n         itemLabel: this.model.get('name'),\n         enableIcon: false,\n         showInlineActionBar: false\n       };\n     };\n     return opts;\n   },\n   constructor: function MyListView(options) {\n     options = options || {};\n     MyListView.__super__.constructor.call(this, options);\n   }\n });\n\n var myList = new MyListView({collection: collection, context: context});\n new Marionette.Region({el: '.host-el'}).show(myList);\n});\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#module_ListItemTypeModel"},"ListItemTypeModel")," : ",(0,o.yg)("code",null,"d2/sdk/controls/list/listitem.type.model.view"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"instance"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#module_ListItemTypeModel+templateHelpers"},".templateHelpers()")," \u21d2 ",(0,o.yg)("code",null,"TemplateOptions")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"inner"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#module_ListItemTypeModel..ListItemTypeModel"},"~ListItemTypeModel"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#new_module_ListItemTypeModel..ListItemTypeModel_new"},"new ListItemTypeModel(options)")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#module_ListItemTypeModel..TemplateOptions"},"~TemplateOptions")," : ",(0,o.yg)("code",null,"object"))))))),(0,o.yg)("a",{name:"module_ListItemTypeModel+templateHelpers"}),(0,o.yg)("h3",{id:"listitemtypemodeltemplatehelpers--templateoptions"},"listItemTypeModel.templateHelpers() \u21d2 ",(0,o.yg)("code",null,"TemplateOptions")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.yg)("a",{parentName:"p",href:"#module_ListItemTypeModel"},(0,o.yg)("code",null,"ListItemTypeModel")),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Returns"),": ",(0,o.yg)("code",null,"TemplateOptions")," - That controls how each item is rendered.  "),(0,o.yg)("a",{name:"module_ListItemTypeModel..ListItemTypeModel"}),(0,o.yg)("h3",{id:"listitemtypemodellistitemtypemodel"},"ListItemTypeModel~ListItemTypeModel"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,o.yg)("a",{parentName:"p",href:"#module_ListItemTypeModel"},(0,o.yg)("code",null,"ListItemTypeModel")),"  "),(0,o.yg)("a",{name:"new_module_ListItemTypeModel..ListItemTypeModel_new"}),(0,o.yg)("h4",{id:"new-listitemtypemodeloptions"},"new ListItemTypeModel(options)"),(0,o.yg)("table",null,(0,o.yg)("thead",null,(0,o.yg)("tr",null,(0,o.yg)("th",null,"Param"),(0,o.yg)("th",null,"Type"),(0,o.yg)("th",null,"Description"))),(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",null,"options"),(0,o.yg)("td",null,(0,o.yg)("code",null,"object")),(0,o.yg)("td",null,(0,o.yg)("p",null,"Constructor options"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"[options.context]"),(0,o.yg)("td",null,(0,o.yg)("code",null,"Context")),(0,o.yg)("td",null,(0,o.yg)("p",null,"Reference to the active application context. Needed only if the listitem is going to have a dropdown menu."))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"[options.toolbarData]"),(0,o.yg)("td",null,(0,o.yg)("code",null,"object")),(0,o.yg)("td",null)),(0,o.yg)("tr",null,(0,o.yg)("td",null,"[options.toolbarData.toolbaritems]"),(0,o.yg)("td",null,(0,o.yg)("code",null,(0,o.yg)("a",{href:"../toolbar/toolitems.factory"},"ToolitemsFactory"))),(0,o.yg)("td",null,(0,o.yg)("p",null,"Menu configuration"))),"  ")),(0,o.yg)("a",{name:"module_ListItemTypeModel..TemplateOptions"}),(0,o.yg)("h3",{id:"listitemtypemodeltemplateoptions--object"},"ListItemTypeModel~TemplateOptions : ",(0,o.yg)("code",null,"object")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,o.yg)("a",{parentName:"p",href:"#module_ListItemTypeModel"},(0,o.yg)("code",null,"ListItemTypeModel")),"  "),(0,o.yg)("table",null,(0,o.yg)("thead",null,(0,o.yg)("tr",null,(0,o.yg)("th",null,"Param"),(0,o.yg)("th",null,"Type"),(0,o.yg)("th",null,"Default"),(0,o.yg)("th",null,"Description"))),(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",null,"name"),(0,o.yg)("td",null,(0,o.yg)("code",null,"string")),(0,o.yg)("td",null),(0,o.yg)("td",null,(0,o.yg)("p",null,"Displayable text for the item"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"itemLabel"),(0,o.yg)("td",null,(0,o.yg)("code",null,"string")),(0,o.yg)("td",null),(0,o.yg)("td",null,(0,o.yg)("p",null,"Aria-label associated with the item"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"[enableIcon]"),(0,o.yg)("td",null,(0,o.yg)("code",null,"Boolean")),(0,o.yg)("td",null,(0,o.yg)("code",null,"false")),(0,o.yg)("td",null,(0,o.yg)("p",null,"Whether to show an icon for the item"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"[icon]"),(0,o.yg)("td",null,(0,o.yg)("code",null,"string")),(0,o.yg)("td",null),(0,o.yg)("td",null,(0,o.yg)("p",null,"CSS class name of an icon to be shown for the item. Ignored if ",(0,o.yg)("code",null,"enableIcon")," is set to ",(0,o.yg)("code",null,"false"),"."))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"[showInlineActionBar]"),(0,o.yg)("td",null,(0,o.yg)("code",null,"Boolean")),(0,o.yg)("td",null,(0,o.yg)("code",null,"false")),(0,o.yg)("td",null,(0,o.yg)("p",null,"Whether the item will have a dropdown menu"))),"  ")))}m.isMDXComponent=!0}}]);