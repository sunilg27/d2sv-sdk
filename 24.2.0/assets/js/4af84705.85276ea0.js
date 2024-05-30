"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[4174],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var i=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?i.createElement(g,l(l({ref:n},c),{},{components:t})):i.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:r,l[1]=a;for(var d=2;d<o;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8056:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(8168),r=(t(6540),t(5680));const o={sidebar_position:3.08,sidebar_label:"Open a cabinet/folder in Doclist"},l="Open a cabinet/folder in Doclist",a={unversionedId:"general/samples/3_08_open_folder_in_doclist",id:"general/samples/3_08_open_folder_in_doclist",title:"Open a cabinet/folder in Doclist",description:"This sample shows how to open the default Doclist widget in D2 Smartview at a specific cabinet or folder. This sample",source:"@site/articles/general/samples/3_08_open_folder_in_doclist.md",sourceDirName:"general/samples",slug:"/general/samples/3_08_open_folder_in_doclist",permalink:"/d2sv-sdk/24.2.0/general/samples/3_08_open_folder_in_doclist",draft:!1,tags:[],version:"current",sidebarPosition:3.08,frontMatter:{sidebar_position:3.08,sidebar_label:"Open a cabinet/folder in Doclist"},sidebar:"general",previous:{title:"D2SV Object On Click Sample",permalink:"/d2sv-sdk/24.2.0/general/samples/3_07_object_onclick_actions"},next:{title:"Override search tile with tree view",permalink:"/d2sv-sdk/24.2.0/general/samples/3_09_override_search_tile_with_tree_view"}},s={},d=[{value:"Instruction to try out the sample",id:"instruction-to-try-out-the-sample",level:3},{value:"Source code structure",id:"source-code-structure",level:3},{value:"Files and their purpose",id:"files-and-their-purpose",level:4},{value:"Utility to open Doclist widget at a given folder",id:"utility-to-open-doclist-widget-at-a-given-folder",level:5},{value:"D2FS dialog to collect folder ID",id:"d2fs-dialog-to-collect-folder-id",level:5}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"open-a-cabinetfolder-in-doclist"},"Open a cabinet/folder in Doclist"),(0,r.yg)("p",null,"This sample shows how to open the default Doclist widget in D2 Smartview at a specific cabinet or folder. This sample\nleverages a command implementation named ",(0,r.yg)("inlineCode",{parentName:"p"},"Browse")," from D2 Smartview runtime to do so."),(0,r.yg)("h3",{id:"instruction-to-try-out-the-sample"},"Instruction to try out the sample"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Build the plugin using ",(0,r.yg)("inlineCode",{parentName:"li"},"npm run build")," from SDK workspace root."),(0,r.yg)("li",{parentName:"ul"},"Copy ",(0,r.yg)("inlineCode",{parentName:"li"},"D2SV-OpenFolder-Doclist-1.0.0.jar")," from 'dist' folder in workspace root and paste it inside ",(0,r.yg)("inlineCode",{parentName:"li"},"WEB-INF/lib")," folder of a deployed D2 Smartview application."),(0,r.yg)("li",{parentName:"ul"},"Restart application server on which D2 Smartview is deployed."),(0,r.yg)("li",{parentName:"ul"},"Login into D2-Smartview and navigate to any cabinet or folder of choice in Doclist widget."),(0,r.yg)("li",{parentName:"ul"},"Copy the Documentum Object ID of cabinet/folder from browser address bar."),(0,r.yg)("li",{parentName:"ul"},"Navigate to landing page."),(0,r.yg)("li",{parentName:"ul"},"Click user profile icon and select ",(0,r.yg)("inlineCode",{parentName:"li"},"OpenFolder")," menu item."),(0,r.yg)("li",{parentName:"ul"},"Paste the copied Object ID in ",(0,r.yg)("inlineCode",{parentName:"li"},"Enter folder ID")," field of ",(0,r.yg)("inlineCode",{parentName:"li"},"OpenFolder")," dialog."),(0,r.yg)("li",{parentName:"ul"},"Click ",(0,r.yg)("inlineCode",{parentName:"li"},"Open")," button in the dialog footer to close the dialog and open Doclist at the cabinet/folder identified by the pasted value.")),(0,r.yg)("h3",{id:"source-code-structure"},"Source code structure"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"D2SV-OpenFolder-Doclist\n|\n|   pom.xml\n|   \n+---src\n|   \\---main\n|       +---java\n|       |   \\---com\n|       |       +---emc\n|       |       |       D2PluginVersion.java\n|       |       |       \n|       |       \\---opentext\n|       |           \\---d2\n|       |               +---rest\n|       |               |   \\---context\n|       |               |       \\---jc\n|       |               |               PluginRestConfig_D2SVOFDoclist.java\n|       |               |               \n|       |               \\---smartview\n|       |                   \\---d2svofdoclist\n|       |                       |   D2SVOFDoclistPlugin.java\n|       |                       |   \n|       |                       +---api\n|       |                       |       D2SVOFDoclistVersion.java\n|       |                       |       \n|       |                       +---dialogs\n|       |                       |       OpenFolder.java\n|       |                       |       \n|       |                       \\---rest\n|       |                               package-info.java\n|       |                               \n|       +---resources\n|       |   |   D2Plugin.properties\n|       |   |   d2svofdoclist-version.properties\n|       |   |   \n|       |   +---smartview\n|       |   |       SmartView.properties\n|       |   |       \n|       |   +---strings\n|       |   |   +---dialog\n|       |   |   |   \\---OpenFolder\n|       |   |   |           OpenFolder_en.properties\n|       |   |   |           \n|       |   |   \\---menu\n|       |   |       \\---MenuUser\n|       |   |               MenuUser_en.properties\n|       |   |               \n|       |   \\---xml\n|       |       +---dialog\n|       |       |       OpenFolder.xml\n|       |       |       \n|       |       \\---unitymenu\n|       |               MenuUserDelta.xml\n|       |               \n|       \\---smartview\n|           |   .csslintrc\n|           |   .eslintrc-html.yml\n|           |   .eslintrc.yml\n|           |   .npmrc\n|           |   config-editor.js\n|           |   d2svofdoclist.setup.js\n|           |   Gruntfile.js\n|           |   package.json\n|           |   server.conf.js\n|           |   \n|           +---src\n|           |   |   component.js\n|           |   |   config-build.js\n|           |   |   d2svofdoclist-extensions.json\n|           |   |   d2svofdoclist-init.js\n|           |   |   Gruntfile.js\n|           |   |   \n|           |   +---bundles\n|           |   |       d2svofdoclist-bundle.js\n|           |   |       \n|           |   +---extensions\n|           |   |       dialog.actions.js\n|           |   |       \n|           |   +---test\n|           |   |       extensions.spec.js\n|           |   |       \n|           |   \\---utils\n|           |       |   startup.js\n|           |       |   utils.js\n|           |       |   \n|           |       \\---theme\n|           |           |   action.icons.js\n|           |           |   \n|           |           \\---action_icons\n|           |                   action_sample_icon.svg\n|           |                   \n|           \\---test\n|                   Gruntfile.js\n|                   karma.conf.js\n|                   \n\\---target\n")),(0,r.yg)("h4",{id:"files-and-their-purpose"},"Files and their purpose"),(0,r.yg)("p",null,"Following are the list of function oriented source files and their purpose. Other source files present within the plugin are part of\ncommon infrastructure code and explained in ",(0,r.yg)("a",{parentName:"p",href:"../understand.d2sv.plugin"},"Understanding D2SV plugin project"),"."),(0,r.yg)("h5",{id:"utility-to-open-doclist-widget-at-a-given-folder"},"Utility to open Doclist widget at a given folder"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"src/main/smartview/src/utils/utils.js - Defines a function ",(0,r.yg)("inlineCode",{parentName:"li"},"openFolder")," that in turn executes ",(0,r.yg)("inlineCode",{parentName:"li"},"Browse")," command instance\nwith a given folder ID set as an attribute to a ",(0,r.yg)("inlineCode",{parentName:"li"},"NodeModel")," instance.",(0,r.yg)("admonition",{parentName:"li",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Browse")," command has a multi-faceted implementation i.e. it behaves diffrently based on type of the object. E.g Instead of cabinet/folder, if a document's object ID is used then it opens the Overview perspective for it.")))),(0,r.yg)("h5",{id:"d2fs-dialog-to-collect-folder-id"},"D2FS dialog to collect folder ID"),(0,r.yg)("p",null,"The remaining part of the sample defines a user profile menu item which shows a D2FS dialog having a single text field to collect cabinet/folder ID."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/d2svofdoclist/dialogs/OpenFolder.java - Java class file behind the ",(0,r.yg)("inlineCode",{parentName:"li"},"OpenFolder")," dialog."),(0,r.yg)("li",{parentName:"ul"},"src/main/resources/strings/dialog/OpenFolder/OpenFolder_en.properties - Defines labels used in ",(0,r.yg)("inlineCode",{parentName:"li"},"OpenFolder")," dialog."),(0,r.yg)("li",{parentName:"ul"},"src/main/resources/strings/menu/MenuUser/MenuUser_en.properties - Defines label for the menu item in user profile."),(0,r.yg)("li",{parentName:"ul"},"src/main/resources/xml/dialog/OpenFolder.xml - Form definition for the ",(0,r.yg)("inlineCode",{parentName:"li"},"OpenFolder")," dialog."),(0,r.yg)("li",{parentName:"ul"},"src/main/resources/xml/unitymenu/MenuUserDelta.xml - Defines the ",(0,r.yg)("inlineCode",{parentName:"li"},"OpenFolder")," menu item under user profile through delta menu concept."),(0,r.yg)("li",{parentName:"ul"},"src/main/smartview/src/extensions/dialog.actions.js - Defines the code to be executed for ",(0,r.yg)("inlineCode",{parentName:"li"},"Open")," button in the dialog footer. Invokes ",(0,r.yg)("inlineCode",{parentName:"li"},"openFolder")," in\n",(0,r.yg)("inlineCode",{parentName:"li"},"src/main/smartview/src/utils/utils.js")," with collected ID.")))}u.isMDXComponent=!0}}]);