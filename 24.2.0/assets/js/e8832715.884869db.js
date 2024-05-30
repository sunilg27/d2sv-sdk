"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[4524],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=o,m=u["".concat(s,".").concat(c)]||u[c]||g[c]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(8168),o=(n(6540),n(5680));const i={sidebar_position:2.12},r="Add D2FS dialog to a plugin",l={unversionedId:"general/ws_assistant/2_12_add.d2fs.dialog",id:"general/ws_assistant/2_12_add.d2fs.dialog",title:"Add D2FS dialog to a plugin",description:"If a D2SV plugin intends to define a property-page like form then this assistant option could be used to create the boilerplate",source:"@site/articles/general/ws_assistant/2_12_add.d2fs.dialog.md",sourceDirName:"general/ws_assistant",slug:"/general/ws_assistant/2_12_add.d2fs.dialog",permalink:"/d2sv-sdk/24.2.0/general/ws_assistant/2_12_add.d2fs.dialog",draft:!1,tags:[],version:"current",sidebarPosition:2.12,frontMatter:{sidebar_position:2.12},sidebar:"general",previous:{title:"Add smartview shortcut tile",permalink:"/d2sv-sdk/24.2.0/general/ws_assistant/2_11_add.sv.tile.shortcut"},next:{title:"Add new metadata view to plugin",permalink:"/d2sv-sdk/24.2.0/general/ws_assistant/2_13_add.metadata.view"}},s={},d=[],p={toc:d},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"add-d2fs-dialog-to-a-plugin"},"Add D2FS dialog to a plugin"),(0,o.yg)("p",null,"If a D2SV plugin intends to define a property-page like form then this assistant option could be used to create the boilerplate\nassociated with such form, which is also known as D2FS dialog."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Use this option when at least one plugin project exists in the workspace.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Associated questions and their meanings")," -"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Select plugin to add new D2FS dialog",(0,o.yg)("p",null,"Specify the plugin project where to add boilerplate for this dialog")),(0,o.yg)("li",{parentName:"ul"},"Enter name of the dialog",(0,o.yg)("p",null,"A unique name of the dialog. It is also used as an ID to refer to the dialog from other part of D2SV runtime."))),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Known Issue: D2SV-SDK 23.2 allowed dialog name to start with lowercase or number and have '_' & '-' in them.\nThis causes server error when opening the dialogs on Smartview UI. Dialog name is validated in D2SV-SDK-23.4 to avoid this.")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Title of the dialog"),(0,o.yg)("p",null,"The title to be displayed when the dialog is visible on screen. It defaults to the given name of the dialog.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Select form mode for the dialog"),(0,o.yg)("p",null,"Whether to show the dialog in ",(0,o.yg)("code",null,"read-only")," or ",(0,o.yg)("code",null,"editable")," mode.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Select view mode for the dialog"),(0,o.yg)("p",null,"Whether to show the dialog in ",(0,o.yg)("code",null,"center")," or ",(0,o.yg)("code",null,"side")," panel mode.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Create a menu to open the dialog?"),(0,o.yg)("p",null,"Whether to also define a menu item in D2SV context menu so that clicking that menu would show the dialog. Defaults to ",(0,o.yg)("code",null,"Yes"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Label for the menu"),(0,o.yg)("p",null,"Define an English label for the menu. This question is asked only if the previous question was answered with an ",(0,o.yg)("code",null,"Yes"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Pick a toolbar to add this menu to"),(0,o.yg)("p",null,"D2-Smartview UI shows different type of menu bars depending on the application context. By answering this option we can specify the menubar where this menu is going to be added. This question is asked only if 'Create menu to open the dialog?' was answered with ",(0,o.yg)("code",null,"Yes"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Specify selection mode for the menu"),(0,o.yg)("p",null,"Whether the menu should support ",(0,o.yg)("code",null,"single")," or ",(0,o.yg)("code",null,"multiple")," object selection."))))}g.isMDXComponent=!0}}]);