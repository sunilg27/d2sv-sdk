"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[774],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(t),m=o,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:3.02,sidebar_label:"D2SV client to server logging"},a="D2SV client to server logging",l={unversionedId:"general/samples/3_02_client_to_server_logging",id:"general/samples/3_02_client_to_server_logging",title:"D2SV client to server logging",description:"D2SV UI uses log4javascript to enable logging for UI components. By default, the library is configured to channel log output to web browser",source:"@site/articles/general/samples/3_02_client_to_server_logging.md",sourceDirName:"general/samples",slug:"/general/samples/3_02_client_to_server_logging",permalink:"/d2sv-sdk/23.2.0/general/samples/3_02_client_to_server_logging",draft:!1,tags:[],version:"current",sidebarPosition:3.02,frontMatter:{sidebar_position:3.02,sidebar_label:"D2SV client to server logging"},sidebar:"general",previous:{title:"D2SV Read-Only Permission View Sample",permalink:"/d2sv-sdk/23.2.0/general/samples/3_04_read_only_permission"},next:{title:"D2SV Cutom Dialogs(D2FS) sample",permalink:"/d2sv-sdk/23.2.0/general/samples/3_03_custom_dialog"}},s={},p=[{value:"Instruction to try out the sample",id:"instruction-to-try-out-the-sample",level:3},{value:"Source code structure",id:"source-code-structure",level:3},{value:"Files and their purpose",id:"files-and-their-purpose",level:4},{value:"REST Controller",id:"rest-controller",level:6},{value:"RequireJS module configuration",id:"requirejs-module-configuration",level:6}],c={toc:p},g="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(g,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"d2sv-client-to-server-logging"},"D2SV client to server logging"),(0,o.kt)("p",null,"D2SV UI uses ",(0,o.kt)("inlineCode",{parentName:"p"},"log4javascript"),' to enable logging for UI components. By default, the library is configured to channel log output to web browser\nconsole. In the past while debugging for some issue in D2 Smartview, we felt the need to correlate this client-side log output with server-side log\noutput generated by back-end components and usually saved in "D2-Smartview.log" file. Driven by this need, we\'ve created this sample plugin which\nre-configures the ',(0,o.kt)("inlineCode",{parentName:"p"},"log4javascript")," and channels the log output to the same server-side log file. Key concepts explored in this plugin are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"REST endpoint with un-conventional input/output."),(0,o.kt)("li",{parentName:"ul"},"RequireJS module re-configuration")),(0,o.kt)("h3",{id:"instruction-to-try-out-the-sample"},"Instruction to try out the sample"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build the plugin using ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run build")," from SDK workspace root."),(0,o.kt)("li",{parentName:"ul"},"Copy ",(0,o.kt)("inlineCode",{parentName:"li"},"D2SV-Client2Server-Logging-1.0.0.jar"),' from "dist" folder in workspace root and paste it inside ',(0,o.kt)("inlineCode",{parentName:"li"},"WEB-INF/lib")," folder of a deployed D2 Smartview application."),(0,o.kt)("li",{parentName:"ul"},'Edit D2 Smartview logging configuration file "logback.xml" and set the root logging level to ',(0,o.kt)("inlineCode",{parentName:"li"},"INFO"),"."),(0,o.kt)("li",{parentName:"ul"},"Restart application server on which D2 Smartview is deployed."),(0,o.kt)("li",{parentName:"ul"},"Reload D2-Smartview application in web-browser with additional query parameter ",(0,o.kt)("inlineCode",{parentName:"li"},"loglevel=info"),". ",(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Complete URL might look like ",(0,o.kt)("inlineCode",{parentName:"p"},"https://mydomain.com/D2-Smartview/ui?loglevel=info#d2")))),(0,o.kt)("li",{parentName:"ul"},"Open console for the web-browser and check if some INFO level log output is present."),(0,o.kt)("li",{parentName:"ul"},"On the server-side open ",(0,o.kt)("strong",{parentName:"li"},"D2-Smartview.log")," file and check for the same statements as from web-browser console.")),(0,o.kt)("h3",{id:"source-code-structure"},"Source code structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"D2SV-Client2Server-Logging\n|\n|   pom.xml\n|   \n+---src\n|   \\---main\n|       +---java\n|       |   \\---com\n|       |       +---emc\n|       |       |       D2PluginVersion.java\n|       |       |       \n|       |       \\---opentext\n|       |           \\---d2\n|       |               +---rest\n|       |               |   \\---context\n|       |               |       \\---jc\n|       |               |               PluginRestConfig_C2SLogging.java\n|       |               |               \n|       |               \\---smartview\n|       |                   \\---c2slogging\n|       |                       |   C2SLoggingPlugin.java\n|       |                       |   \n|       |                       +---api\n|       |                       |       C2SLoggingVersion.java\n|       |                       |       \n|       |                       \\---rest\n|       |                           |   package-info.java\n|       |                           |   \n|       |                           +---api\n|       |                           |   |   IClientLogManager.java\n|       |                           |   |   \n|       |                           |   \\---impl\n|       |                           |           ClientLogManager.java\n|       |                           |           \n|       |                           +---controller\n|       |                           |       InboundExternalLogController.java\n|       |                           |       \n|       |                           \\---model\n|       |                                   HelpModel.java\n|       |                                   LogEntry.java\n|       |                                   LogLevel.java\n|       |                                   LogRequest.java\n|       |                                   \n|       +---resources\n|       |   |   c2slogging-version.properties\n|       |   |   D2Plugin.properties\n|       |   |   \n|       |   \\---smartview\n|       |           SmartView.properties\n|       |           \n|       \\---smartview\n|           |   .csslintrc\n|           |   .eslintrc-html.yml\n|           |   .eslintrc.yml\n|           |   .npmrc\n|           |   c2slogging.setup.js\n|           |   config-editor.js\n|           |   esmhelper.js\n|           |   Gruntfile.js\n|           |   package.json\n|           |   proxy.js\n|           |   server.conf.js\n|           |   server.js\n|           |           \n|           +---pages\n|           |   |   config-d2.js\n|           |   |   config-dev.js\n|           |   |   favicon.ico\n|           |   |   initialize.js\n|           |   |   loader.css\n|           |   |   otds.html\n|           |   |   redirect.html\n|           |   |   \n|           |   +---debug\n|           |   |       app.html\n|           |   |       \n|           |   \\---release\n|           |           app.html\n|           |           \n|           +---src\n|           |   |   c2slogging-init.js\n|           |   |   component.js\n|           |   |   config-build.js\n|           |   |   extensions.json\n|           |   |   Gruntfile.js\n|           |   |   \n|           |   +---bundles\n|           |   |       c2slogging-bundle.js\n|           |   |       \n|           |   +---test\n|           |   |       extensions.spec.js\n|           |   |       \n|           |   \\---utils\n|           |       |   startup.js\n|           |       |   \n|           |       \\---theme\n|           |           |   action.icons.js\n|           |           |   \n|           |           \\---action_icons\n|           |                   action_sample_icon.svg\n|           |                   \n|           \\---test\n|                   Gruntfile.js\n|                   karma.js\n|                   test-common.js\n|                   \n\\---target\n")),(0,o.kt)("h4",{id:"files-and-their-purpose"},"Files and their purpose"),(0,o.kt)("p",null,"Following are the list of function oriented source files and their purpose. Other source files present within the plugin are part of\ncommon infrastructure code and explained in ",(0,o.kt)("a",{parentName:"p",href:"../understand.d2sv.plugin"},"Understanding D2SV plugin project"),"."),(0,o.kt)("h6",{id:"rest-controller"},"REST Controller"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/rest/context/jc/PluginRestConfig_C2SLogging.java - Declares Spring Bean ",(0,o.kt)("inlineCode",{parentName:"li"},"IClientLogManager")," through ",(0,o.kt)("inlineCode",{parentName:"li"},"ClientLogManager"),"."),(0,o.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/c2slogging/rest/api/IClientLogManager.java - Declares log manager interface for REST controllers to use."),(0,o.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/c2slogging/rest/api/impl/ClientLogManager.java - Log manager implementation that parses and maps input log\nstatements and relays those statements into server side log."),(0,o.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/c2slogging/rest/controller/InboundExternalLogController.java - Defines two REST endpoints, one receives HTTP POST request\nwith log statements as part of request body, the other responds to HTTP GET requests with help information on how to use the first endpoint."),(0,o.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/c2slogging/rest/model/HelpModel.java - Serializable POJO that holds help information."),(0,o.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/c2slogging/rest/model/LogEntry.java - Serializable POJO that represents a single log statement."),(0,o.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/c2slogging/rest/model/LogLevel.java - Enum that represents D2SV client-side log levels."),(0,o.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/c2slogging/rest/model/LogRequest.java - Serializable POJO that holds a bunch of log statements together.")),(0,o.kt)("h6",{id:"requirejs-module-configuration"},"RequireJS module configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"src/main/smartview/src/c2slogging-init.js - This file is used to re-configure module ",(0,o.kt)("inlineCode",{parentName:"li"},"nuc/utils/log")," so that it channels log statements to the endpoint\ncreated by Java code from above. It also configures ",(0,o.kt)("inlineCode",{parentName:"li"},"nuc/lib/log4javascript")," to customize the request body format sent to the REST endpoint.",(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The module ",(0,o.kt)("inlineCode",{parentName:"p"},"nuc/utils/log")," encapsulates the ",(0,o.kt)("inlineCode",{parentName:"p"},"log4javascript")," library and provides managed logging API to D2SV UI components.")))))}u.isMDXComponent=!0}}]);