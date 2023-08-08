"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[6530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(n),p=a,f=c["".concat(s,".").concat(p)]||c[p]||m[p]||o;return n?i.createElement(f,l(l({ref:t},u),{},{components:n})):i.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1.04,sidebar_label:"Use Delta Menus"},l="Delta Menus in D2",r={unversionedId:"general/howto/1_04_delta_menus",id:"general/howto/1_04_delta_menus",title:"Delta Menus in D2",description:"Developers can create default menus as part of any context from the plugin.",source:"@site/articles/general/howto/1_04_delta_menus.md",sourceDirName:"general/howto",slug:"/general/howto/1_04_delta_menus",permalink:"/d2sv-sdk/23.2.0/general/howto/1_04_delta_menus",draft:!1,tags:[],version:"current",sidebarPosition:1.04,frontMatter:{sidebar_position:1.04,sidebar_label:"Use Delta Menus"},sidebar:"general",previous:{title:"Declare custom widget types for D2SV",permalink:"/d2sv-sdk/23.2.0/general/howto/1_03_custom.widget.type"},next:{title:"Use icons in D2SV",permalink:"/d2sv-sdk/23.2.0/general/howto/1_05_use_icons"}},s={},d=[],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delta-menus-in-d2"},"Delta Menus in D2"),(0,a.kt)("p",null,"Developers can create default menus as part of any context from the plugin.\nAny menu item can be appended in context."),(0,a.kt)("p",null,"Following are the currently supported contexts in D2 Smartview."),(0,a.kt)("ul",null,(0,a.kt)("li",null,"MenuContext"),(0,a.kt)("li",null,"MenuContextDetailRelations"),(0,a.kt)("li",null,"MenuContextDetailRenditions"),(0,a.kt)("li",null,"MenuContextDetailVersions"),(0,a.kt)("li",null,"MenuContextSavedSearchObject"),(0,a.kt)("li",null,"MenuContextTaskDocument"),(0,a.kt)("li",null,"MenuContextTaskPriority"),(0,a.kt)("li",null,"MenuContextTasksList"),(0,a.kt)("li",null,"MenuContextVD"),(0,a.kt)("li",null,"MenuContextVDAddChildOption"),(0,a.kt)("li",null,"MenuContextVDReplaceChildOption"),(0,a.kt)("li",null,"MenuContextWorkflowOverview"),(0,a.kt)("li",null,"MenuDocumentD2LifeCycleAttach"),(0,a.kt)("li",null,"MenuDocumentLifeCycle"),(0,a.kt)("li",null,"MenuDocumentLifeCycleAttach"),(0,a.kt)("li",null,"MenuDocumentShare"),(0,a.kt)("li",null,"MenuDocumentWorkflow"),(0,a.kt)("li",null,"MenuNewObject"),(0,a.kt)("li",null,"MenuToolsMassUpdate"),(0,a.kt)("li",null,"MenuUser")),(0,a.kt)("p",null,"If the develop wants to define a OOTB default menu in the following path and format.\n",(0,a.kt)("inlineCode",{parentName:"p"},"resources/xml/unitymenu/<context_name>Delta.xml"),"."),(0,a.kt)("p",null," Menu item in the D2 will follow the below structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<menuitem id="MenuId">\n     <dynamic-action class="ClassName"/>\n     <condition class="ClassName" equals="value"/>\n  </menuitem>\n')),(0,a.kt)("p",null,"Here we have mainly 3 part for the menu as follows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"menuitem"),": define the menu item which will have a id attribute. The id attribute can be used\nto define label and is also a unique identifier."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dynamic-action"),":  developer can define a class which is extended from the ",(0,a.kt)("inlineCode",{parentName:"li"},"IDynamicAction"),".\nThis tag is used to define the action that has to be performed when the menu item is clicked."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"condition"),": developer can define condition which has to be extended from ",(0,a.kt)("inlineCode",{parentName:"li"},"ICondition"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Depending on the class custom attributes can be passed to the tag for both ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamic-action"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"condition"))),(0,a.kt)("p",null,"In order to define the menu item we need to understand the root tag as ",(0,a.kt)("inlineCode",{parentName:"p"},"delta")," tag.\nThere are mainly 3 types of operation done on the menu item"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"insert")," - This will be used to insert a new item. There are a couple of attribute\nwhich are ",(0,a.kt)("inlineCode",{parentName:"li"},"position-before")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"position-after")," which will contain attribute value to\nmenu id before or after which the current node has to be placed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"append")," - This will be used to append item to the end of the."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"modify")," - this will need an id attribute which is a reference to any\nexisting menu id which has to be modified. This can can be used to ",(0,a.kt)("inlineCode",{parentName:"li"},"delete"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"insert"),",\n",(0,a.kt)("inlineCode",{parentName:"li"},"append")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"insert-before"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"delete")," - This will need an id attribute which will refer to the menu id that has to deleted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"insert-before")," - This can be used along with the ",(0,a.kt)("inlineCode",{parentName:"li"},"modify")," to add new conditions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"move"),"- This can be used to move and  exiting menu by using the menu id and\n",(0,a.kt)("inlineCode",{parentName:"li"},"position-before")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"position-after"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"position-before")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"position-after")," attributes containes the menu id of other menus"),(0,a.kt)("li",{parentName:"ol"},"menu id, class names for the dynamic actions and conditions can be identified by\ncreating menu items in D2-Config and exporting the menus."))),(0,a.kt)("p",null,"Find below some of the ways to use delta menus:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Insert new menu",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'<delta>\n  <insert position-before="menuToolsMassUpdate">\n    <menuitem id="menuContextViewPermission">\n      <dynamic-action class="com.emc.d2fs.dctm.ui.dynamicactions.actions.U4Generic" eMethod="getPermissions" eMode="SINGLE" eService="PermissionActionService" rAction="${pluginNamespace}/dialogs/permissions/permissions.dialog:showPermissions" rType="JS"/>\n      <condition class="com.emc.d2fs.dctm.ui.conditions.interfaces.IsMultipleSelection" equals="false"/>\n      <condition class="com.emc.d2fs.dctm.ui.conditions.options.IsPluginActivated" value="${pluginName}"/>\n    </menuitem>\n  </insert>\n  <insert position-before="menuToolsMassUpdate">\n    <separator/>\n  </insert>\n</delta>\n'))),(0,a.kt)("li",{parentName:"ol"},"Modify an existing menu with new conditions",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'<delta>\n    <modify id="menuDocumentEdit">\n        <insert-before>\n            <condition class="com.emc.d2fs.dctm.ui.conditions.typeparts.IsObjectType" value="d2c_bin_deleted_document\xacd2c_bin_deleted_folder\xacd2c_bin_deleted_folder_dump\xacd2c_bin_deleted_rendition" equals="false"/>\n        </insert-before>\n    </modify>\n</delta>\n')))))}m.isMDXComponent=!0}}]);