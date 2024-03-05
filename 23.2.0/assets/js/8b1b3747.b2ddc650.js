"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[3721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={slug:"/"},i="Documentum D2 Smartview SDK",l={unversionedId:"index",id:"index",title:"Documentum D2 Smartview SDK",description:"The D2 Smart View SDK consists of sources, binaries, documentation, and samples for -",source:"@site/articles/index.md",sourceDirName:".",slug:"/",permalink:"/d2sv-sdk/23.2.0/",draft:!1,tags:[],version:"current",frontMatter:{slug:"/"}},s={},p=[{value:"How to prepare and start with the development environment",id:"how-to-prepare-and-start-with-the-development-environment",level:2},{value:"1. Download the developer tools for your OS:",id:"1-download-the-developer-tools-for-your-os",level:3},{value:"2. Install the developer tools for your OS",id:"2-install-the-developer-tools-for-your-os",level:3},{value:"3. Create the development workspace:",id:"3-create-the-development-workspace",level:3},{value:"4. Get familiar with Workspace assistant",id:"4-get-familiar-with-workspace-assistant",level:3},{value:"5. Create a plugin project:",id:"5-create-a-plugin-project",level:3},{value:"6. Start coding",id:"6-start-coding",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"documentum-d2-smartview-sdk"},"Documentum D2 Smartview SDK"),(0,r.kt)("p",null,"The D2 Smart View SDK consists of sources, binaries, documentation, and samples for - "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"D2 Smartview UI extension enviornment."),(0,r.kt)("li",{parentName:"ul"},"D2-REST services extension enviornment."),(0,r.kt)("li",{parentName:"ul"},"D2 plugin development enviornment.")),(0,r.kt)("p",null,"It also includes a few tools to create and maintain a development workspace."),(0,r.kt)("p",null,"With the D2 Smart View SDK  you can build enterprise-ready software components for Documentum D2 Smartview runtime to cater custom business needs."),(0,r.kt)("p",null,"Out of the box, D2 Smart View landing page looks like:\n",(0,r.kt)("img",{alt:"Landing page",src:n(6785).Z,width:"1920",height:"942"})),(0,r.kt)("h2",{id:"how-to-prepare-and-start-with-the-development-environment"},"How to prepare and start with the development environment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download developer tools"),(0,r.kt)("li",{parentName:"ol"},"Install developer tools"),(0,r.kt)("li",{parentName:"ol"},"Create the development workspace"),(0,r.kt)("li",{parentName:"ol"},"Get familiar with SDK tools"),(0,r.kt)("li",{parentName:"ol"},"Create a plugin project"),(0,r.kt)("li",{parentName:"ol"},"Start coding")),(0,r.kt)("h3",{id:"1-download-the-developer-tools-for-your-os"},"1. Download the developer tools for your OS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JDK         - JDK is required to compile Java code present within a development workspace. \n              Use JDK 1.8 or later.\n              See https://openjdk.java.net\nMaven       - Apache maven is the secondary build tool used in this SDK development workspace. \n              Recommended version is 3.8.2. A different version may not be fully compatible.\n              See https://maven.apache.org\nNodeJS      - JavaScript VM to execute the SDK tools, build tools and to run the development web server for UI code. \n              Recommended version is 16 LTS. A different version may not be fully compatible.\n              See http://nodejs.org.\nGrunt       - JavaScript task runner for building and testing UI code.\n              See http://gruntjs.com. Nothing to be downloaded from this URL though.\n")),(0,r.kt)("h3",{id:"2-install-the-developer-tools-for-your-os"},"2. Install the developer tools for your OS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JDK         - Run installer. Set the JAVA_HOME path variable to point to the JDK root directory.\nMaven       - Unzip & extract to a directory. Set MAVEN_HOME environment variable pointing to the directory. \n              Update PATH variable accordingly so that Maven commands can be executed from command-line/terminal.\nNodeJS      - Install the package for your OS. Set NPM_HOME path variable pointing to the NodeJS \n              installation directory. Update PATH variable so that Node & NPM commands can be executed from\n              command-line.\n              It is recommended to avoid installing NodeJS under 'Program Files' as doing that has been known to create \n              problem some times.\nNPM         - Update the NPM module management tool to the latest version:\n                npm install -g npm@latest\n              \nGrunt       - Install the command line task runner client as a global NPM module\n                npm install -g grunt-cli\n")),(0,r.kt)("h3",{id:"3-create-the-development-workspace"},"3. Create the development workspace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# 1. Extract the SDK\n# 2. Open a command prompt at the extracted folder\n\n# Execute batch script ws-init.bat\n>ws-init.bat\n\n# It will take a while to fully initialize the workspace.\n# Once initialization completes successfully, the workspace assistant starts automatically. Select "Check out documentation" option to open documentation in default browser.\n# \n# The directory where SDK was extracted becomes the root of the development workspace.\n# It doesn\'t require to run ws-init.bat inside the initialized workspace again, unless some other instructions specifically says to do so.\n# If you want to run the workspace assistant anytime later, open a command prompt/terminal at workspace root directory and run\n>npm start\n\n# Select "Nothing", to terminate the workspace assitant, if wanted.\n\n# To access the documentation without the workspace assistant, you can run the following command in a command prompt/terminal at the workspace root.\n>npm run documentation\n')),(0,r.kt)("h3",{id:"4-get-familiar-with-workspace-assistant"},"4. Get familiar with Workspace assistant"),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"./general/ws_assistant/2_00_ws_overview"},"Workspace assistant"),". It's a good idea to familiarize yourself with the general aspects of the ",(0,r.kt)("a",{parentName:"p",href:"./general/architecture"},"SDK"),", this can be done later though."),(0,r.kt)("h3",{id:"5-create-a-plugin-project"},"5. Create a plugin project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Open command prompt at workspace root and run\n>npm start\n\n# Select "Create a new plugin project" from the workspace assistant options.\n# Follow on-screen instruction and anser questions to create your first plugin project.\n# Once done, type and run-\n>npm run build\n\n# Or, alternatively run the workspace assistant again and select "Build all plugins in this workspace" option.\n# This will build all projects in the workspace\n')),(0,r.kt)("h3",{id:"6-start-coding"},"6. Start coding"),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"./api_overview"},"API documentation")," and start coding as per business requirement."))}u.isMDXComponent=!0},6785:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/D2SV_Landing-d2725b9d9cc54f2594e1586b2153c9d4.png"}}]);