"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[7499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=r,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2.01},o="Creating a plugin",s={unversionedId:"general/ws_assistant/2_01_create.plugin",id:"general/ws_assistant/2_01_create.plugin",title:"Creating a plugin",description:"This option is used to initiate a fresh D2SV plugin project.",source:"@site/articles/general/ws_assistant/2_01_create.plugin.md",sourceDirName:"general/ws_assistant",slug:"/general/ws_assistant/2_01_create.plugin",permalink:"/d2sv-sdk/23.4.0/general/ws_assistant/2_01_create.plugin",draft:!1,tags:[],version:"current",sidebarPosition:2.01,frontMatter:{sidebar_position:2.01},sidebar:"general",previous:{title:"Overview",permalink:"/d2sv-sdk/23.4.0/general/ws_assistant/2_00_ws_overview"},next:{title:"Add Smartview application scope perspective",permalink:"/d2sv-sdk/23.4.0/general/ws_assistant/2_02_add.sv.app.scope.perspective"}},l={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-plugin"},"Creating a plugin"),(0,r.kt)("p",null,"This option is used to initiate a fresh D2SV plugin project.\nA plugin project is basically a maven project with all its dependencies pre-declared from the workspace ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," folder.\nBased on selected options a plugin project may optionally have a Smartview UI component.\nIf there is a D2SV UI component in a plugin, it requires NodeJS runtime to compile and package that specific component.\nAll the relevant NodeJS and Javascript dependencies will be initialized upon plugin project creation."),(0,r.kt)("p",null,"To create a new plugin, a developer has to choose the ",(0,r.kt)("strong",{parentName:"p"},"Create a new plugin project")," option from the\nD2SV SDK workspace assistant."),(0,r.kt)("p",null,"Upon selecting the specific option in workspace assistant, a developer has to answer a few questions before the assistant can\ncreate and initialize the plugin project. For some of these questions asked, the workspace assistant will provide\na meaningful contextual default answer based on usage, the default answer is enclosed within a pair of\nparentheses ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),", to choose the default value, one has to only press ",(0,r.kt)("em",{parentName:"p"},"Enter")," key on the keyboard.\nThese questions are self-explanatory however, here are a list of those questions and their meaning -"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Directory name to save this plugin project in",(0,r.kt)("br",null),(0,r.kt)("p",null,"Where to save the newly created project, defaults to `plugins` directory within the workspace.")),(0,r.kt)("li",{parentName:"ul"},"Maven group-id of the plugin",(0,r.kt)("br",null),(0,r.kt)("p",null,"Since all the plugin projects are maven projects, each project requires a group-id to be specified."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Known Issue: D2SV-SDK-23.2 allowed maven group id to be left empty. This causes error\nwhen building the plugin. Maven group id is validated in D2SV-SDK-23.4 to avoid this.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name(maven artifact-id) of the plugin",(0,r.kt)("br",null),(0,r.kt)("p",null,"Artifact identifier of the maven project to uniquely identify this plugin within the provided maven group ID."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Known Issue: D2SV-SDK 23.2 allowed plugin name to start with numeric character. This causes error\nwhen building the plugin. Plugin name is validated in D2SV-SDK-23.4 to avoid this.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Version of the plugin",(0,r.kt)("br",null),(0,r.kt)("p",null,"Version of the plugin project.")),(0,r.kt)("li",{parentName:"ul"},"One liner description",(0,r.kt)("br",null),(0,r.kt)("p",null,"Used as the name and description for the underlying maven project. This is also shown as part of installed plugin data in D2 runtime.")),(0,r.kt)("li",{parentName:"ul"},"Package namespace",(0,r.kt)("br",null),(0,r.kt)("p",null,"A unique name used as prefix/suffix for generating the source code & properties in the maven project. The lowercase version of the given package name is used as part of the Java package name and also used as unique identifier for the Smartview UI code in the project, if any. For an example, if a Plugin project is created with Maven group-id `a.b.c` and it is given a package name `MyPlugin` then the base package for all Java source code becomes `a.b.c.myplugin` and the Smartview specific UI code is identified by `myplugin`.")),(0,r.kt)("li",{parentName:"ul"},"Include support for D2SV UI",(0,r.kt)("br",null),(0,r.kt)("p",null,"Whether to include D2 Smartview UI specific code infrastructure in the created plugin project. This question should be answered with an `Yes (Y)` only if the plugin is meant to develop, override or complement any D2SV front-end functionality. However, even for a plugin project initially created to develop or complement back-end oriented functionality, D2SV UI support can be added later through ",(0,r.kt)("a",{href:"./2_03_add.sv.ui"}," Add smartview UI support to an existing plugin project")," option."))))}d.isMDXComponent=!0}}]);