"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[3461],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var o=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<r;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=t(8168),i=(t(6540),t(5680));const r={sidebar_position:3.07,sidebar_label:"D2SV Object On Click Sample"},a="D2SV Object On Click Sample",c={unversionedId:"general/samples/3_07_object_onclick_actions",id:"general/samples/3_07_object_onclick_actions",title:"D2SV Object On Click Sample",description:"Object on click actions extension provides option override the default action on the object. With this default action for an object can be controlled with a predicate condition.",source:"@site/articles/general/samples/3_07_object_onclick_actions.md",sourceDirName:"general/samples",slug:"/general/samples/3_07_object_onclick_actions",permalink:"/d2sv-sdk/24.2.0/general/samples/3_07_object_onclick_actions",draft:!1,tags:[],version:"current",sidebarPosition:3.07,frontMatter:{sidebar_position:3.07,sidebar_label:"D2SV Object On Click Sample"},sidebar:"general",previous:{title:"Custom Table Cell View",permalink:"/d2sv-sdk/24.2.0/general/samples/3_06_custom_table_cell"},next:{title:"Open a cabinet/folder in Doclist",permalink:"/d2sv-sdk/24.2.0/general/samples/3_08_open_folder_in_doclist"}},l={},s=[{value:"Instruction to try out the sample",id:"instruction-to-try-out-the-sample",level:3},{value:"Source code structure",id:"source-code-structure",level:3},{value:"Files and their purpose",id:"files-and-their-purpose",level:4},{value:"D2SV Custom Default Actions Sample",id:"d2sv-custom-default-actions-sample",level:6}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"d2sv-object-on-click-sample"},"D2SV Object On Click Sample"),(0,i.yg)("p",null,"Object on click actions extension provides option override the default action on the object. With this default action for an object can be controlled with a predicate condition.\nSo default action can be defined based on rules."),(0,i.yg)("p",null,"This sample shows"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"How to customize the default action for an object.")),(0,i.yg)("h3",{id:"instruction-to-try-out-the-sample"},"Instruction to try out the sample"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Build the plugin using ",(0,i.yg)("inlineCode",{parentName:"li"},"npm run build")," from SDK workspace root."),(0,i.yg)("li",{parentName:"ul"},"Copy ",(0,i.yg)("inlineCode",{parentName:"li"},"D2SV-Object-OnClick-Actions-1.0.0.jar")," from 'dist' folder in workspace root and paste it inside ",(0,i.yg)("inlineCode",{parentName:"li"},"WEB-INF/lib")," folder of a deployed D2 Smartview application."),(0,i.yg)("li",{parentName:"ul"},"Restart application server on which D2 Smartview is deployed."),(0,i.yg)("li",{parentName:"ul"},"Login into D2-Smartview and navigate to any Doclist widget view."),(0,i.yg)("li",{parentName:"ul"},"Execute default action for PDF file and content less object."),(0,i.yg)("li",{parentName:"ul"},"While executing default action for .txt document, Modal alert will be shown."),(0,i.yg)("li",{parentName:"ul"},"While executing default action for .png document, Toast message will be shown.")),(0,i.yg)("h3",{id:"source-code-structure"},"Source code structure"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"D2SV-Object-OnClick-Actions\n|   pom.xml\n|   \n+---src\n|   \\---main\n|       +---java\n|       |   \\---com\n|       |       +---emc\n|       |       |       D2PluginVersion.java\n|       |       |       \n|       |       \\---opentext\n|       |           \\---d2\n|       |               +---rest\n|       |               |   \\---context\n|       |               |       \\---jc\n|       |               |               PluginRestConfig_ObjectOnClickActions.javations.javal.java\n|       |               |               \n|       |               \\---smartview\n|       |                   \\---objectonclickactions\n|       |                       |   ObjectOnClickActionsPlugin.java\n|       |                       |   \n|       |                       +---api\n|       |                       |       ObjectOnClickActionsVersion.java\n|       |                       |       \n|       |                       \\---rest\n|       |                               package-info.java\n|       |                               \n|       +---resources\n|       |   |   D2Plugin.properties\n|       |   |   objectonclickactions-version.properties\n|       |   |   \n|       |   \\---smartview\n|       |           SmartView.properties\n|       |           \n|       \\---smartview\n|           |   .csslintrc\n|           |   .eslintrc-html.yml\n|           |   .eslintrc.yml\n|           |   .npmrc\n|           |   config-editor.js\n|           |   Gruntfile.js\n|           |   objectonclickactions.setup.js\n|           |   package.json\n|           |   server.conf.js\n|           |   \n|           +---src\n|           |   |   component.js\n|           |   |   config-build.js\n|           |   |   Gruntfile.js\n|           |   |   objectonclickactions-extensions.json\n|           |   |   objectonclickactions-init.js\n|           |   |   \n|           |   +---bundles\n|           |   |       objectonclickactions-bundle.js\n|           |   |       \n|           |   +---commands\n|           |   |   |   open.modal.alert.js\n|           |   |   |   open.toast.message.js\n|           |   |   |   \n|           |   |   \\---nls\n|           |   |       |   lang.js\n|           |   |       |   \n|           |   |       \\---root\n|           |   |               lang.js\n|           |   |               \n|           |   +---extensions\n|           |   |       object.onclick.actions.rules.js\n|           |   |       \n|           |   +---test\n|           |   |       extensions.spec.js\n|           |   |       \n|           |   \\---utils\n|           |       |   startup.js\n|           |       |   \n|           |       \\---theme\n|           |           |   action.icons.js\n|           |           |   \n|           |           \\---action_icons\n|           |                   action_sample_icon.svg\n")),(0,i.yg)("h4",{id:"files-and-their-purpose"},"Files and their purpose"),(0,i.yg)("p",null,"Following are the list of function oriented source files and their purpose. Other source files present within the plugin are part of\ncommon infrastructure code and explained in ",(0,i.yg)("a",{parentName:"p",href:"../understand.d2sv.plugin"},"Understanding D2SV plugin project"),"."),(0,i.yg)("h6",{id:"d2sv-custom-default-actions-sample"},"D2SV Custom Default Actions Sample"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"src/main/smartview/src/extensions/object.onclick.actions.rules.js - Defined ruled for on click action of a document."),(0,i.yg)("li",{parentName:"ul"},"src/main/smartview/src/commands/open.modal.alert.js - Sample command for executing object on-click action with modal alert."),(0,i.yg)("li",{parentName:"ul"},"src/main/smartview/src/commands/open.toast.message.js - Sample command for executing object on-click action with toast message.")))}d.isMDXComponent=!0}}]);