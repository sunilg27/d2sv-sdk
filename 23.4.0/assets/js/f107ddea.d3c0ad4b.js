"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[4023],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,sidebar_label:"Use IDE for plugin development"},i="Setup SDK workspace in IDE",l={unversionedId:"general/howto/1_00_setup_ide",id:"general/howto/1_00_setup_ide",title:"Setup SDK workspace in IDE",description:"Preface",source:"@site/articles/general/howto/1_00_setup_ide.md",sourceDirName:"general/howto",slug:"/general/howto/1_00_setup_ide",permalink:"/d2sv-sdk/23.4.0/general/howto/1_00_setup_ide",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Use IDE for plugin development"},sidebar:"general",previous:{title:"Architecture",permalink:"/d2sv-sdk/23.4.0/general/architecture"},next:{title:"Debug Smartview code",permalink:"/d2sv-sdk/23.4.0/general/howto/1_01_debug_sv_ui"}},s={},p=[{value:"Preface",id:"preface",level:3},{value:"Steps to setup workspace in IntelliJ IDE",id:"steps-to-setup-workspace-in-intellij-ide",level:2},{value:"Steps to setup workspace in Eclipse IDE",id:"steps-to-setup-workspace-in-eclipse-ide",level:2},{value:"To detect newly added project, in Eclipse <strong>Project Explorer</strong>",id:"to-detect-newly-added-project-in-eclipse-project-explorer",level:6},{value:"To detect removed project, in Eclipse <strong>Project Explorer</strong>",id:"to-detect-removed-project-in-eclipse-project-explorer",level:6}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-sdk-workspace-in-ide"},"Setup SDK workspace in IDE"),(0,o.kt)("h3",{id:"preface"},"Preface"),(0,o.kt)("p",null,"All D2SV plugin projects are made of Java & Javascript source codes. Naturally the project setup\nalso has to be hybrid to compile and package all parts of the source code. This is the reason the SDK\nuses a mixed tooling approach towards the same. "),(0,o.kt)("p",null,"All the plugins inside the workspace, are layed out in a Maven project structure where the ",(0,o.kt)("code",null,"pom.xml"),"\nfound at the workspace root directory serves as the aggregator-parent and each plugin is linked to it as Maven module. "),(0,o.kt)("p",null,"The NodeJS specific portion does not require a parent-child relationship between the plugins and the workspace.\nHowever to optimize dependency management, the workspace declares itself as a NodeJS project through its "),(0,o.kt)("code",null,"package.json")," and each plugin in turn uses directory shortcuts to refer to the same set of dependencies even though the plugin declares a separate NodeJS project for its Javascript code through",(0,o.kt)("code",null,"package.json")," found in its ",(0,o.kt)("code",null,"src/main/smartview")," directory.",(0,o.kt)("p",null,"While building, Maven is used as the primary tool to trigger it. Internally Maven uses ",(0,o.kt)("code",null,"maven-antrun-plugin"),"\nto execute NodeJS script through shell and that builds the Javascript portion."),(0,o.kt)("p",null,"Any IDE that works with Maven projects, can recognize this hybrid setup. All that it takes is the support to be able to import\na Maven project from existing source code."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Before trying any of the following steps to setup IDE, make sure to either create a plugin project or extract\na packaged sample in the SDK workspace by running either ",(0,o.kt)("a",{parentName:"p",href:"../ws_assistant/2_01_create.plugin"},"Create a plugin project")," or\n",(0,o.kt)("a",{parentName:"p",href:"../ws_assistant/2_08_extract.sample"},"Checkout some samples")," option from ",(0,o.kt)("a",{parentName:"p",href:"../ws_assistant/2_00_ws_overview"},"Workspace Assistant"),".")),(0,o.kt)("h2",{id:"steps-to-setup-workspace-in-intellij-ide"},"Steps to setup workspace in IntelliJ IDE"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"File -> New -> Project from Existing Sources")," from menu.",(0,o.kt)("p",null,"Note. If starting with a fresh IDE installation select ",(0,o.kt)("b",null,"Import Project")," option from welcome screen.")),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"Select File or Directory to Import")," dialog, locate and select ",(0,o.kt)("code",null,"pom.xml")," from the workspace root."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"Import Project from Maven")," dialog, keep the default values and deselect ",(0,o.kt)("i",null,"Search for projects recursively"),"\ncheckbox if it is selected. Then, click ",(0,o.kt)("strong",{parentName:"li"},"Next")," button to go to next screen."),(0,o.kt)("li",{parentName:"ul"},"In the current screen select the checkbox against a group-id and artifact-id combination that correctly represents\nthe workspace root pom. By default it may look something like ",(0,o.kt)("i",null,"com.opentext.d2.smartview:D2-Plugin-Projects:1.0.0"),".\nAfter selection, click ",(0,o.kt)("strong",{parentName:"li"},"Next")," button to proceed to the next screen."),(0,o.kt)("li",{parentName:"ul"},"Select an available JDK to use for the imported projects and click ",(0,o.kt)("strong",{parentName:"li"},"Next")," to proceed."),(0,o.kt)("li",{parentName:"ul"},"In current screen keep default values for ",(0,o.kt)("strong",{parentName:"li"},"Project name")," and ",(0,o.kt)("strong",{parentName:"li"},"Project file location")," input fields and click ",(0,o.kt)("strong",{parentName:"li"},"Finish"),"\nto start import.",(0,o.kt)("p",null,"Note. It might ask whether to open the project in current window or new window, please select an appropriate option. ",(0,o.kt)("b",null,"New window")," is could be a preferred option.")),(0,o.kt)("li",{parentName:"ul"},"After the project import completes, it might take a while for the IDE to index files from the workspace. To cut short on the indexing time, it is advised\nto mark all directories from workspace root except ",(0,o.kt)("strong",{parentName:"li"},"plugins"),"(or whichever directory you chose to store plugins) as ",(0,o.kt)("strong",{parentName:"li"},"Excluded"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"As you keep adding/removing new plugin projects in the workspace using the workspace assistant, the IDE automatically catches up with the change.")),(0,o.kt)("h2",{id:"steps-to-setup-workspace-in-eclipse-ide"},"Steps to setup workspace in Eclipse IDE"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"File -> Import")," from menu."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"Import")," dialog, expand ",(0,o.kt)("strong",{parentName:"li"},"Maven")," and select ",(0,o.kt)("strong",{parentName:"li"},"Existing Maven Projects")," and click ",(0,o.kt)("strong",{parentName:"li"},"Next"),"."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"Import Maven Projects")," dialog, Click ",(0,o.kt)("strong",{parentName:"li"},"Browse...")," button beside the ",(0,o.kt)("strong",{parentName:"li"},"Root Directory")," field."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"Select Root Folder")," file-selection dialog, navigate to SDK workspace root directory and click ",(0,o.kt)("strong",{parentName:"li"},"Select Folder")," button to go back to ",(0,o.kt)("strong",{parentName:"li"},"Import Maven Projects")," dialog."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"Import Maven Projects")," dialog, click ",(0,o.kt)("strong",{parentName:"li"},"Select All")," to select all discovered projects. Then click ",(0,o.kt)("strong",{parentName:"li"},"Finish")," to close the dialog and start importing the projects."),(0,o.kt)("li",{parentName:"ul"},"Once the project import completes, right-click on root project's ",(0,o.kt)("strong",{parentName:"li"},"pom.xml")," and select ",(0,o.kt)("strong",{parentName:"li"},"Run as -> Maven build")," from the menu to open ",(0,o.kt)("strong",{parentName:"li"},"Edit Configuration")," dialog."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"Edit Configuration")," dialog type ",(0,o.kt)("code",null,"clean install")," in ",(0,o.kt)("strong",{parentName:"li"},"Goals")," field then click ",(0,o.kt)("strong",{parentName:"li"},"Run")," button to start building the plugins in the workspace.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Eclipse is unable to automatically detect plugin projects added to/removed from the workspace using the workspace assistant.")),(0,o.kt)("h6",{id:"to-detect-newly-added-project-in-eclipse-project-explorer"},"To detect newly added project, in Eclipse ",(0,o.kt)("strong",{parentName:"h6"},"Project Explorer")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On the root project, ",(0,o.kt)("strong",{parentName:"li"},"right click -> Refresh"),"."),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"plugins")," folder(or whichever folder you're using to store plugins) and select ",(0,o.kt)("strong",{parentName:"li"},"Right click -> New -> Project")),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"New Project")," dialog, select ",(0,o.kt)("strong",{parentName:"li"},"General -> Project")," and click ",(0,o.kt)("strong",{parentName:"li"},"Next"),"."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"New Project")," dialog, deselect ",(0,o.kt)("strong",{parentName:"li"},"Use default location")," checkbox and click ",(0,o.kt)("strong",{parentName:"li"},"Browse")),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"Select Folder")," dialog, navigate inside the root folder of newly created plugin project on disk and click\n",(0,o.kt)("strong",{parentName:"li"},"Select Folder")," button"),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"New Project")," dialog, copy the last part of path value from ",(0,o.kt)("strong",{parentName:"li"},"Location")," field and paste it into ",(0,o.kt)("strong",{parentName:"li"},"Project name")," field."),(0,o.kt)("li",{parentName:"ul"},"Select the chekcbox ",(0,o.kt)("strong",{parentName:"li"},"Add project to working sets")," and select value ",(0,o.kt)("strong",{parentName:"li"},"D2-Plugin-Projects")," for the field ",(0,o.kt)("strong",{parentName:"li"},"Working sets"),"\nthen click ",(0,o.kt)("strong",{parentName:"li"},"Finish")," to close the dialog."),(0,o.kt)("li",{parentName:"ul"},"Once the project creation completes, in ",(0,o.kt)("strong",{parentName:"li"},"Project Explorer")," of Eclipse, expand the ",(0,o.kt)("strong",{parentName:"li"},"plugins"),"(or whichever folder you're using)\nfolder and gesture ",(0,o.kt)("strong",{parentName:"li"},"Right-click -> Configure -> Convert to Maven Project")," to finish setting up the new plugin project.")),(0,o.kt)("h6",{id:"to-detect-removed-project-in-eclipse-project-explorer"},"To detect removed project, in Eclipse ",(0,o.kt)("strong",{parentName:"h6"},"Project Explorer")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gesture ",(0,o.kt)("strong",{parentName:"li"},"Right-click -> Maven -> Update Project")," on the root project's ",(0,o.kt)("strong",{parentName:"li"},"pom.xml")),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Update Maven Project")," dialog, deselect every project except the root one and click ",(0,o.kt)("strong",{parentName:"li"},"OK")),(0,o.kt)("li",{parentName:"ul"},"If the above steps do not automatically remove the plugin project entry, then you can safely ",(0,o.kt)("strong",{parentName:"li"},"Right-click -> Delete")," the project.")))}u.isMDXComponent=!0}}]);