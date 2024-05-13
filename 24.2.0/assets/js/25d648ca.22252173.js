"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[9698],{5680:(e,t,i)=>{i.d(t,{xA:()=>c,yg:()=>y});var n=i(6540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(i),g=r,y=d["".concat(o,".").concat(g)]||d[g]||u[g]||a;return i?n.createElement(y,s(s({ref:t},c),{},{components:i})):n.createElement(y,s({ref:t},c))}));function y(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,s=new Array(a);s[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<a;p++)s[p]=i[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},7372:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=i(8168),r=(i(6540),i(5680));const a={sidebar_position:2.1},s="Add smartview list tile",l={unversionedId:"general/ws_assistant/2_10_add.sv.tile.list",id:"general/ws_assistant/2_10_add.sv.tile.list",title:"Add smartview list tile",description:"Using this option of the assistant, a new list type of tile a.k.a widget tile definition could be",source:"@site/articles/general/ws_assistant/2_10_add.sv.tile.list.md",sourceDirName:"general/ws_assistant",slug:"/general/ws_assistant/2_10_add.sv.tile.list",permalink:"/d2sv-sdk/24.2.0/general/ws_assistant/2_10_add.sv.tile.list",draft:!1,tags:[],version:"current",sidebarPosition:2.1,frontMatter:{sidebar_position:2.1},sidebar:"general",previous:{title:"Add smartview shortcut behavior",permalink:"/d2sv-sdk/24.2.0/general/ws_assistant/2_09_add.sv.shortcut.behavior"},next:{title:"Add smartview shortcut tile",permalink:"/d2sv-sdk/24.2.0/general/ws_assistant/2_11_add.sv.tile.shortcut"}},o={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.yg)(d,(0,n.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"add-smartview-list-tile"},"Add smartview list tile"),(0,r.yg)("p",null,"Using this option of the assistant, a new list type of tile a.k.a widget tile definition could be\nadded."),(0,r.yg)("p",null,"All widget tiles shown in D2 Smartview landing perspective are visually similar, however they are backed\nby different type of widget conifiguration and display data evaluated in the context of that\nwidget."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Use this option when at least one plugin project exists in the workspace.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Associated questions and their meanings")," -"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"This shortcut goes to plugin"),(0,r.yg)("p",null,"To select the plugin project where to create boilerplate associated with creating a widget tile.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Name of Widget type to associate"),(0,r.yg)("p",null,"Specify which type of widget configuration will drive this list tile data.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"CSS class name for the icon"),(0,r.yg)("p",null,"CSS class selector to put in the HTML element hosting the icon for this widget tile. Later this same class name could be used to render a specific icon for this tile.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Directory name where generated code will be put into"),(0,r.yg)("p",null,"Relative location of the boilerplate code w.r.t selected plugin projects widget source directory")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Default title of this tile"),(0,r.yg)("p",null,"Specifies an optional default name for the tile which is shown at the header region of this tile incase the underlying widget configuration is not able to provide a name for it.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"How would you describe this tile?"),(0,r.yg)("p",null,"Description metadata for this tile.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Will it expand to own perspective?"),(0,r.yg)("p",null,"Whether this tile will expand to its own application scope perspective. If anwered with ",(0,r.yg)("code",null,"yes")," then a bunch of followup question related to the application scope perspective are asked.",(0,r.yg)("a",{href:"./2_02_add.sv.app.scope.perspective"}," Add smartview application scope perspective")," can be referred for meaning of such questions."))))}u.isMDXComponent=!0}}]);