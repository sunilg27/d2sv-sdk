"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[6371],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=l.createContext({}),p=function(e){var t=l.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return l.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(d,".").concat(m)]||c[m]||s[m]||a;return r?l.createElement(f,o(o({ref:t},u),{},{components:r})):l.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=r(7462),n=(r(7294),r(3905));const a={},o=void 0,i={unversionedId:"api/d2/commands/create.folder.type.filters",id:"api/d2/commands/create.folder.type.filters",title:"create.folder.type.filters",description:"CreateFolderTypeFilter : d2/sdk/commands/create.folder.type.filters",source:"@site/articles/api/d2/commands/create.folder.type.filters.md",sourceDirName:"api/d2/commands",slug:"/api/d2/commands/create.folder.type.filters",permalink:"/api/d2/commands/create.folder.type.filters",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"command",permalink:"/api/d2/commands/command"},next:{title:"default.actions.rules",permalink:"/api/d2/commands/default.actions.rules"}},d={},p=[{value:"CreateFolderTypeFilter : <code>d2/sdk/commands/create.folder.type.filters</code>",id:"createfoldertypefilter--d2sdkcommandscreatefoldertypefilters",level:2},{value:"CreateFolderTypeFilter.addFilters(newFilters)",id:"createfoldertypefilteraddfiltersnewfilters",level:3},{value:"CreateFolderTypeFilter.filter(types) \u21d2 <code>Array.&lt;object&gt;</code>",id:"createfoldertypefilterfiltertypes--arrayobject",level:3},{value:"CreateFolderTypeFilter~FolderTypeFilterCondition \u21d2 <code>boolean</code>",id:"createfoldertypefilterfoldertypefiltercondition--boolean",level:3}],u={toc:p},c="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,l.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{name:"module_CreateFolderTypeFilter"}),(0,n.kt)("h2",{id:"createfoldertypefilter--d2sdkcommandscreatefoldertypefilters"},"CreateFolderTypeFilter : ",(0,n.kt)("code",null,"d2/sdk/commands/create.folder.type.filters")),(0,n.kt)("p",null,"Type filter collection. Defines which Documentum types should be considered while creating a folder."),(0,n.kt)("p",null,"This collection augments the default functionality of ",(0,n.kt)("inlineCode",{parentName:"p"},"D2-CreateFolder")," command."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"dm_folder")," is the root Documentum type that represents a folder, any sub-type of it can also represent a folder."),(0,n.kt)("p",null,"New types could be introduced by extension"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends"),": ",(0,n.kt)("code",null,"Object"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(to register an extension, add in extension.json)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'\n{\n  "d2/sdk/commands/create.folder.type.filters": {\n     "extensions": {\n        "mybundle": {\n           "mybundle/commands/my.folder.type.filter"\n        }\n     }\n   }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(whereas my.folder.type.filter.js is defined as)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"\ndefine([], function(){\n   'use strict';\n\n   return function(typeData) {\n     // This is the function that implements a custom filter condition\n     return typeData.name === 'my_dctm_custom_folder_type';\n   };\n});\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_CreateFolderTypeFilter"},"CreateFolderTypeFilter")," : ",(0,n.kt)("code",null,"d2/sdk/commands/create.folder.type.filters"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"static"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_CreateFolderTypeFilter.addFilters"},".addFilters(newFilters)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_CreateFolderTypeFilter.filter"},".filter(types)")," \u21d2 ",(0,n.kt)("code",null,"Array.","<","object",">")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"inner"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_CreateFolderTypeFilter..FolderTypeFilterCondition"},"~FolderTypeFilterCondition")," \u21d2 ",(0,n.kt)("code",null,"boolean"))))))),(0,n.kt)("a",{name:"module_CreateFolderTypeFilter.addFilters"}),(0,n.kt)("h3",{id:"createfoldertypefilteraddfiltersnewfilters"},"CreateFolderTypeFilter.addFilters(newFilters)"),(0,n.kt)("p",null,"To manually register new type filters without using the 'extension' way."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_CreateFolderTypeFilter"},(0,n.kt)("code",null,"CreateFolderTypeFilter")),"  "),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"newFilters"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Array.<FolderTypeFilterCondition>")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Array of callbacks that returns ",(0,n.kt)("code",null,"true")," or ",(0,n.kt)("code",null,"false")," to include or exclude a type respectively."))),"  ")),(0,n.kt)("a",{name:"module_CreateFolderTypeFilter.filter"}),(0,n.kt)("h3",{id:"createfoldertypefilterfiltertypes--arrayobject"},"CreateFolderTypeFilter.filter(types) \u21d2 ",(0,n.kt)("code",null,"Array.","<","object",">")),(0,n.kt)("p",null,"To retrieve the list of filtered types that can be used while creating a folder."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_CreateFolderTypeFilter"},(0,n.kt)("code",null,"CreateFolderTypeFilter")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("code",null,"Array.","<","object",">")," - The filtered types.  "),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"types"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Array.<object>")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Documentum types."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"types[].name"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Name of a Documentum type."))),"  ")),(0,n.kt)("a",{name:"module_CreateFolderTypeFilter..FolderTypeFilterCondition"}),(0,n.kt)("h3",{id:"createfoldertypefilterfoldertypefiltercondition--boolean"},"CreateFolderTypeFilter~FolderTypeFilterCondition \u21d2 ",(0,n.kt)("code",null,"boolean")),(0,n.kt)("p",null,"This is a callback type that implements the condition of a filter."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,n.kt)("a",{parentName:"p",href:"#module_CreateFolderTypeFilter"},(0,n.kt)("code",null,"CreateFolderTypeFilter")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("code",null,"boolean")," - Should return ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the type should be included, ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," otherwise.  "),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"typeData"),(0,n.kt)("td",null,(0,n.kt)("code",null,"object")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Data representing a Documentum type"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"typeData.name"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Name of the documentum type"))),"  ")))}s.isMDXComponent=!0}}]);