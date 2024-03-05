"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[8615],{3905:(e,l,t)=>{t.d(l,{Zo:()=>c,kt:()=>k});var n=t(7294);function a(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function i(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?i(Object(t),!0).forEach((function(l){a(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function o(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=n.createContext({}),d=function(e){var l=n.useContext(m),t=l;return e&&(t="function"==typeof e?e(l):r(r({},l),e)),t},c=function(e){var l=d(e.components);return n.createElement(m.Provider,{value:l},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},p=n.forwardRef((function(e,l){var t=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,k=u["".concat(m,".").concat(p)]||u[p]||s[p]||i;return t?n.createElement(k,r(r({ref:l},c),{},{components:t})):n.createElement(k,r({ref:l},c))}));function k(e,l){var t=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var o={};for(var m in l)hasOwnProperty.call(l,m)&&(o[m]=l[m]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var d=2;d<i;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8682:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>m,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(7462),a=(t(7294),t(3905));const i={},r=void 0,o={unversionedId:"api/d2/controls/table/cells/templated.cell.view",id:"api/d2/controls/table/cells/templated.cell.view",title:"templated.cell.view",description:"TableCellView : d2/sdk/controls/table/cells/templated.cell.view",source:"@site/articles/api/d2/controls/table/cells/templated.cell.view.md",sourceDirName:"api/d2/controls/table/cells",slug:"/api/d2/controls/table/cells/templated.cell.view",permalink:"/d2sv-sdk/23.2.0/api/d2/controls/table/cells/templated.cell.view",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"cell.registry",permalink:"/d2sv-sdk/23.2.0/api/d2/controls/table/cells/cell.registry"},next:{title:"table.view",permalink:"/d2sv-sdk/23.2.0/api/d2/controls/table/table.view"}},m={},d=[{value:"TableCellView : <code>d2/sdk/controls/table/cells/templated.cell.view</code>",id:"tablecellview--d2sdkcontrolstablecellstemplatedcellview",level:2},{value:"TableCellView.columnClassName : <code>string</code>",id:"tablecellviewcolumnclassname--string",level:3},{value:"TableCellView.getValue(model, column)",id:"tablecellviewgetvaluemodel-column",level:3},{value:"TableCellView~TemplatedCellView",id:"tablecellviewtemplatedcellview",level:3},{value:"new TemplatedCellView(options)",id:"new-templatedcellviewoptions",level:4},{value:"<em>TableCellView~renderValue() \u21d2 <code>void</code></em>",id:"tablecellviewrendervalue--codevoidcode",level:3},{value:"<em>TableCellView~getValueText() \u21d2 <code>string</code></em>",id:"tablecellviewgetvaluetext--codestringcode",level:3}],c={toc:d},u="wrapper";function s(e){let{components:l,...t}=e;return(0,a.kt)(u,(0,n.Z)({},c,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"module_TableCellView"}),(0,a.kt)("h2",{id:"tablecellview--d2sdkcontrolstablecellstemplatedcellview"},"TableCellView : ",(0,a.kt)("code",null,"d2/sdk/controls/table/cells/templated.cell.view")),(0,a.kt)("p",null,"Interface for classes that want to implement a table's cell view."),(0,a.kt)("p",null,"After defining a new cell implementation, it has to be registered with ",(0,a.kt)("inlineCode",{parentName:"p"},"CellRegistry"),".\nIf column is an attribute of custom type, then use custom type prefix before the column name(Example: custom_type.modified_info) and use the same for registering the cell view.\nCreated custom cell implementation module need to be included manually in other modules."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends"),": ",(0,a.kt)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.view.html"},(0,a.kt)("code",null,"Marionette.View")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"See"),": ",(0,a.kt)("a",{parentName:"p",href:"./cell.registry"},"TableCellRegistry")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'Limitation in table "List" mode'),(0,a.kt)("p",{parentName:"admonition"},"When table is having more column, then columns which fits in viewport will be shown in the table row.\nRest of the columns will wrapped and shown as read only form. If the column is wrapped, then custom cell view won't be  rendered inside the form.\nCustom Table cell will be rendered only in the visible table column.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//In mybundle/table/cells/template/my.cell.hbs define the template as\n<div class=\"my-cell-wrapper\">\n  <a class=\"my-cell-container\" title=\"{{title}}\">\n     <span class=\"my-cell-data\">{{data}}</span>\n  </a>\n</div>\n\n//Then in a cell implementation module\ndefine([\n 'nuc/lib/underscore',\n 'd2/sdk/controls/table/cells/cell.registry',\n 'd2/sdk/controls/table/cells/templated.cell.view',\n 'hbs!mybundle/table/cells/my.cell'\n], function(_, CellRegistry, TemplatedCellView, template){\n 'use strict';\n\n var MyCellView = TemplatedCellView.extend({\n   template: template,\n   renderValue: function() {\n     var tmplData = {\n       data: this.options.column ? TemplatedCellView.getValue(this.model, this.options.column): '',\n       title: this.getValueText()\n     };\n\n     var html = '';\n     if(!_.isEmpty(tmplData.data)) {\n       tmplData.data = '' + tmplData.data;\n       html = this.template(tmplData);\n     }\n\n     this.$el.html(html);\n   }\n });\n //Whenever a table is rendered where the backing collection has 'd2_custom_column' in its column definition, this cell view implementation willl be linked.\n CellRegistry.registerByColumnKey('d2_custom_column', MyCellView);\n //Use custom type prefix before the column name for custom type columns.\n CellRegistry.registerByColumnKey('cust_type.d2_custom_column', MyCellView);\n return MyCellView;\n});\n\n// Then add Cell implementation module in startup.js\ndefine([\n  'mybundle/table/cell/modified.by/modified.by.view'\n], function(){\n  'use strict';\n\n  return {\n    beforeStartup: function() {},\n    afterStartup: function() {}\n  };\n});\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_TableCellView"},"TableCellView")," : ",(0,a.kt)("code",null,"d2/sdk/controls/table/cells/templated.cell.view"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"static"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_TableCellView.columnClassName"},".columnClassName")," : ",(0,a.kt)("code",null,"string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_TableCellView.getValue"},".getValue(model, column)")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"inner"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_TableCellView..TemplatedCellView"},"~TemplatedCellView"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#new_module_TableCellView..TemplatedCellView_new"},"new TemplatedCellView(options)")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"#module_TableCellView..renderValue"},"~renderValue()")," \u21d2 ",(0,a.kt)("code",null,"void"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"#module_TableCellView..getValueText"},"~getValueText()")," \u21d2 ",(0,a.kt)("code",null,"string")))))))),(0,a.kt)("a",{name:"module_TableCellView.columnClassName"}),(0,a.kt)("h3",{id:"tablecellviewcolumnclassname--string"},"TableCellView.columnClassName : ",(0,a.kt)("code",null,"string")),(0,a.kt)("p",null,"CSS classname to be added for this column"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,a.kt)("a",{parentName:"p",href:"#module_TableCellView"},(0,a.kt)("code",null,"TableCellView")),"  "),(0,a.kt)("a",{name:"module_TableCellView.getValue"}),(0,a.kt)("h3",{id:"tablecellviewgetvaluemodel-column"},"TableCellView.getValue(model, column)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#module_TableCellView"},(0,a.kt)("code",null,"TableCellView")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Decription"),": Get value of this cell  "),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"model"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Backbone.Model")),(0,a.kt)("td",null,(0,a.kt)("p",null,"The model holding data for this cell"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"column"),(0,a.kt)("td",null,(0,a.kt)("code",null,"*")),(0,a.kt)("td",null,(0,a.kt)("p",null,"Column definition of this cell."))),"  ")),(0,a.kt)("a",{name:"module_TableCellView..TemplatedCellView"}),(0,a.kt)("h3",{id:"tablecellviewtemplatedcellview"},"TableCellView~TemplatedCellView"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,a.kt)("a",{parentName:"p",href:"#module_TableCellView"},(0,a.kt)("code",null,"TableCellView")),"  "),(0,a.kt)("a",{name:"new_module_TableCellView..TemplatedCellView_new"}),(0,a.kt)("h4",{id:"new-templatedcellviewoptions"},"new TemplatedCellView(options)"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"options"),(0,a.kt)("td",null,(0,a.kt)("code",null,"object")),(0,a.kt)("td",null,(0,a.kt)("p",null,"Constructor options. Following are the options specifically supported by the list apart from those from its supertype."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"options.column"),(0,a.kt)("td",null,(0,a.kt)("code",null,"*")),(0,a.kt)("td",null,(0,a.kt)("p",null,"Column definition for this table cell."))),"  ")),(0,a.kt)("a",{name:"module_TableCellView..renderValue"}),(0,a.kt)("h3",{id:"tablecellviewrendervalue--codevoidcode"},(0,a.kt)("em",{parentName:"h3"},"TableCellView~renderValue() \u21d2 ",(0,a.kt)("code",null,"void"))),(0,a.kt)("p",null,"Render the value associated with this cell. Contains logic to render and sytlize the corresponding DOM element"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": inner abstract method of ",(0,a.kt)("a",{parentName:"p",href:"#module_TableCellView"},(0,a.kt)("code",null,"TableCellView")),"  "),(0,a.kt)("a",{name:"module_TableCellView..getValueText"}),(0,a.kt)("h3",{id:"tablecellviewgetvaluetext--codestringcode"},(0,a.kt)("em",{parentName:"h3"},"TableCellView~getValueText() \u21d2 ",(0,a.kt)("code",null,"string"))),(0,a.kt)("p",null,"Get renderable formatted value for this table cell. Same value will be considered while performing inline filter on the table. When Columns are wrapped, the same value will be displayed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": inner abstract method of ",(0,a.kt)("a",{parentName:"p",href:"#module_TableCellView"},(0,a.kt)("code",null,"TableCellView"))))}s.isMDXComponent=!0}}]);