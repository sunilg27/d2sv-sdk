"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[8479],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var l=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?l.createElement(y,a(a({ref:t},u),{},{components:n})):l.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=n(8168),i=(n(6540),n(5680));const r={sidebar_position:3.06,sidebar_label:"Custom Table Cell View"},a="Custom Table Cell View sample",o={unversionedId:"general/samples/3_06_custom_table_cell",id:"general/samples/3_06_custom_table_cell",title:"Custom Table Cell View sample",description:"Custom Table cell view provides option to render column specific custom cell layout. With this cell view can be visually improved.",source:"@site/articles/general/samples/3_06_custom_table_cell.md",sourceDirName:"general/samples",slug:"/general/samples/3_06_custom_table_cell",permalink:"/d2sv-sdk/24.2.0/general/samples/3_06_custom_table_cell",draft:!1,tags:[],version:"current",sidebarPosition:3.06,frontMatter:{sidebar_position:3.06,sidebar_label:"Custom Table Cell View"},sidebar:"general",previous:{title:"D2SV Custom Widget Type Tile",permalink:"/d2sv-sdk/24.2.0/general/samples/3_05_custom_widget_tile"},next:{title:"D2SV Object On Click Sample",permalink:"/d2sv-sdk/24.2.0/general/samples/3_07_object_onclick_actions"}},s={},c=[{value:"Instruction to try out the sample",id:"instruction-to-try-out-the-sample",level:3},{value:"Source code structure",id:"source-code-structure",level:3},{value:"Files and their purpose",id:"files-and-their-purpose",level:4},{value:"Custom table cell view",id:"custom-table-cell-view",level:6}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(m,(0,l.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"custom-table-cell-view-sample"},"Custom Table Cell View sample"),(0,i.yg)("p",null,"Custom Table cell view provides option to render column specific custom cell layout. With this cell view can be visually improved.\nAs out of the box, document modified user column shows information only in text. In this sample modified user information is shown with initials."),(0,i.yg)("p",null,"This sample shows"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"How to define a Custom table cell view implementation.")),(0,i.yg)("h3",{id:"instruction-to-try-out-the-sample"},"Instruction to try out the sample"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Build the plugin using ",(0,i.yg)("inlineCode",{parentName:"li"},"npm run build")," from SDK workspace root."),(0,i.yg)("li",{parentName:"ul"},"Copy ",(0,i.yg)("inlineCode",{parentName:"li"},"D2-CustomTableCell-1.0.0.jar")," from 'dist' folder in workspace root and paste it inside ",(0,i.yg)("inlineCode",{parentName:"li"},"WEB-INF/lib")," folder of a deployed D2 Smartview application."),(0,i.yg)("li",{parentName:"ul"},"Restart application server on which D2 Smartview is deployed."),(0,i.yg)("li",{parentName:"ul"},"Login into D2-Smartview and navigate to any Doclist widget view."),(0,i.yg)("li",{parentName:"ul"},"Using the 'Table settings' add column ",(0,i.yg)("inlineCode",{parentName:"li"},"Modified By")," to display, if not already added."),(0,i.yg)("li",{parentName:"ul"},"Check, the ",(0,i.yg)("inlineCode",{parentName:"li"},"Modified By")," column shows with a colored letter-avatar-icon along with the textual username(only username is shown without this plugin). ")),(0,i.yg)("h3",{id:"source-code-structure"},"Source code structure"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"D2-CustomTableCell\n|\n|   pom.xml\n|   \n+---src\n|   \\---main\n|       +---java\n|       |   \\---com\n|       |       +---emc\n|       |       |       D2PluginVersion.java\n|       |       |       \n|       |       \\---opentext\n|       |           \\---d2\n|       |               +---rest\n|       |               |   \\---context\n|       |               |       \\---jc\n|       |               |               PluginRestConfig_CustomTableCell.java\n|       |               |               \n|       |               \\---smartview\n|       |                   \\---customtablecell\n|       |                       |   CustomTableCellPlugin.java\n|       |                       |   \n|       |                       +---api\n|       |                       |       CustomTableCellVersion.java\n|       |                       |       \n|       |                       \\---rest\n|       |                               package-info.java\n|       |                               \n|       +---resources\n|       |   |   customtablecell-version.properties\n|       |   |   D2Plugin.properties\n|       |   |   \n|       |   \\---smartview\n|       |           SmartView.properties\n|       |           \n|       \\---smartview\n|           |   .csslintrc\n|           |   .eslintrc-html.yml\n|           |   .eslintrc.yml\n|           |   .npmrc\n|           |   config-editor.js\n|           |   customtablecell.setup.js\n|           |   Gruntfile.js\n|           |   package.json\n|           |   server.conf.js\n|           |   \n|           +---src\n|           |   |   component.js\n|           |   |   config-build.js\n|           |   |   customtablecell-extensions.json\n|           |   |   customtablecell-init.js\n|           |   |   Gruntfile.js\n|           |   |   \n|           |   +---bundles\n|           |   |       customtablecell-bundle.js\n|           |   |       \n|           |   +---table\n|           |   |   \\---cell\n|           |   |       \\---modified.by\n|           |   |           |   modified.by.view.js\n|           |   |           |   \n|           |   |           \\---impl\n|           |   |                   modified.by.css\n|           |   |                   modified.by.hbs\n|           |   |                   \n|           |   +---test\n|           |   |       extensions.spec.js\n|           |   |       \n|           |   \\---utils\n|           |       |   startup.js\n|           |       |   \n|           |       \\---theme\n|           |           |   action.icons.js\n|           |           |   \n|           |           \\---action_icons\n|           |                   action_sample_icon.svg\n|           |                   \n|           \\---test\n|                   Gruntfile.js\n|                   karma.conf.js\n|                   \n\\---target\n")),(0,i.yg)("h4",{id:"files-and-their-purpose"},"Files and their purpose"),(0,i.yg)("p",null,"Following are the list of function oriented source files and their purpose. Other source files present within the plugin are part of\ncommon infrastructure code and explained in ",(0,i.yg)("a",{parentName:"p",href:"../understand.d2sv.plugin"},"Understanding D2SV plugin project"),"."),(0,i.yg)("h6",{id:"custom-table-cell-view"},"Custom table cell view"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"src/main/smartview/src/table/cell/modified.by/modified.by.view.js - Define the custom cell view implementation."),(0,i.yg)("li",{parentName:"ul"},"src/main/smartview/src/table/cell/modified.by/impl/modified.by.hbs - Handlebar template for custom cell view."),(0,i.yg)("li",{parentName:"ul"},"src/main/smartview/src/table/cell/modified.by/impl/modified.by.css - CSS for styling custom cell view."),(0,i.yg)("li",{parentName:"ul"},'src/main/smartview/src/utils/startup.js - Loaded "modified.by.view.js" in "startup.js".')))}p.isMDXComponent=!0}}]);