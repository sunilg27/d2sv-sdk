"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[3757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i="Module nuc/util/connector",l={unversionedId:"api/nuc/utils/connector",id:"api/nuc/utils/connector",title:"Module nuc/util/connector",description:"This module contains a utility object for the Content Server connection - Connector.",source:"@site/articles/api/nuc/utils/connector.md",sourceDirName:"api/nuc/utils",slug:"/api/nuc/utils/connector",permalink:"/d2sv-sdk/23.4.0/api/nuc/utils/connector",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Base",permalink:"/d2sv-sdk/23.4.0/api/nuc/utils/base"},next:{title:"Load extensions",permalink:"/d2sv-sdk/23.4.0/api/nuc/utils/load-extensions/"}},c={},s=[{value:"Connector",id:"connector",level:2},{value:"Constructor",id:"constructor",level:3},{value:"makeAjaxCall(options) : promise",id:"makeajaxcalloptions--promise",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"module-nucutilconnector"},"Module nuc/util/connector"),(0,r.kt)("p",null,"This module contains a utility object for the Content Server connection - ",(0,r.kt)("inlineCode",{parentName:"p"},"Connector"),"."),(0,r.kt)("h2",{id:"connector"},"Connector"),(0,r.kt)("p",null,"Utility object for the Content Server connection."),(0,r.kt)("p",null,"Widgets create this object internally to establish a connection to the Content Server, but it can be created and passed to the widget from the client code too, if there are multiple widgets on the page and they should share the same server connection."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Ensure initialization of the framework.\ncsui.onReady(function() {\n\n  // Specify the server connection settings.\n  var connection = {\n        url: "//server/otcs/cs/api/v1",\n        supportPath: "/otcssupport"\n      },\n      // Create the server connecting object.\n      connector = new csui.util.Connector({\n        connection: connection\n      }),\n      // Pass the connector to a widget.\n      folderbrowser = new csui.widget.FolderBrowserWidget({\n        connector: connector,\n        start: {id: 2000}\n      }),\n  // Display the widget.\n  folderbrowser.show({placeholder: \'#target\'});\n\n});\n')),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"Creates a new connector instance."),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"options - object literal with initial settings")),(0,r.kt)("p",null,"Properties of ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"connection  - object with the API url and other parameters of the server connection"),(0,r.kt)("li",{parentName:"ul"},"headers     - object with HTTP headers to add to every request")),(0,r.kt)("p",null,"Properties of ",(0,r.kt)("inlineCode",{parentName:"p"},"connection"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"url         - string pointing to the URL root of the REST API, for example: //server/otcs/cs/api/v1/"),(0,r.kt)("li",{parentName:"ul"},'supportPath - string with the URL path to the static resources, usually the CGI path with the "support" suffix: "/otcssupport" here //server/otcs/cs/api/v1/'),(0,r.kt)("li",{parentName:"ul"},"session     - object with ",(0,r.kt)("inlineCode",{parentName:"li"},"ticket")," property containing a string obtained from the server to authenticate the API requests"),(0,r.kt)("li",{parentName:"ul"},"credentials - object with ",(0,r.kt)("inlineCode",{parentName:"li"},"username"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"password")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"domain")," properties to authenticate the API requests with"),(0,r.kt)("li",{parentName:"ul"},"authenticationHeaders - object with properties for HTTP headers which are provide the authentication information")),(0,r.kt)("p",null,"The minimum connection settings include the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"supportPath")," properties. The authentication will take place interactively as soon as the first server call will take place:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"connection: {\n  url: '//server/otcs/cs/api/v1',\n  supportPath: '/otcssupport'\n}\n")),(0,r.kt)("p",null,"The connection settings can contain an access token (ticket) to use an already pre-authenticated session. The ticket can be obtained by the ",(0,r.kt)("inlineCode",{parentName:"p"},"/auth")," API request handler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"connection: {\n  url: '//server/otcs/cs/api/v1',\n  supportPath: '/otcssupport',\n  session: {\n    ticket: '...'\n  }\n}\n")),(0,r.kt)("p",null,"The connection settings can also contain user credentials for the automatic authentication:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"connection: {\n  url: '//server/otcs/cs/api/v1',\n  supportPath: '/otcssupport',\n  credentials: {\n    username: 'guest',\n    password: 'opentext',\n    domain: '' // optional\n  }\n}\n")),(0,r.kt)("p",null,"At last, the connection settings can contain HTTP headers which are acepted by a server side login callback to authenticate the API request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"connection: {\n  url: '//server/otcs/cs/api/v1',\n  supportPath: '/otcssupport',\n  authenticationHeaders: {\n    OTDSTicket: '...'\n  }\n}\n")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,"  The newly created object instance."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,"  See the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connector")," object for an example."),(0,r.kt)("h3",{id:"makeajaxcalloptions--promise"},"makeAjaxCall(options) : promise"),(0,r.kt)("p",null,"Replacement for the direct usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"$.ajax")," in Smart UI."),(0,r.kt)("p",null,'The best practice to exchange the data with the server is using Backbone and implementing the communication by overriding methods "url" and "parse". But sometimes it is difficult to find a CRUD mapping for a functional API request. In that case, use ',(0,r.kt)("inlineCode",{parentName:"p"},"connector.makeAjaxCall")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"$.ajax"),". It will take care of the following scenarios, which ",(0,r.kt)("inlineCode",{parentName:"p"},"$.ajax")," does not cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Refresh the authentication ticket automatically, once it expires."),(0,r.kt)("li",{parentName:"ul"},"Support mocking with mockjax."),(0,r.kt)("li",{parentName:"ul"},"Enable running on other platforms, than CS.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Force GET requests to pass their data always as URL parameters."),(0,r.kt)("li",{parentName:"ul"},'Ensure content type "multipart/form-data" if ',(0,r.kt)("inlineCode",{parentName:"li"},"FormData")," is used."),(0,r.kt)("li",{parentName:"ul"},'Change content type "application/json" to "application/x-www-form-urlencoded" and wrap request body to satisfy the non-standard CS REST API request format.')))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter and the returned promise are the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"$.ajax")," describes them. Structured request and respone data are supposed to be handled always as JSON objects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Get basic node information\nconnector.makeAjaxCall({\n  url: '.../api/v1/nodes/123',\n  data: {\n    fields: ['properties']\n  }\n}).then(function (response) {\n  console.log(response);\n}).catch(function (error) {\n  console.error(error);\n});\n\n// Get current user information\nconnector.makeAjaxCall({\n  url: '.../api/v1/auth'\n});\n\n// Get user picture\nconnector.makeAjaxCall({\n  url: '.../api/v1/members/123/photo',\n  dataType: 'binary'\n});\n\n// Rename a node\nconnector.makeAjaxCall({\n  type: 'PUT'\n  url: '.../api/v1/nodes/123',\n  data: {name: 'New name'}\n})\n\n// Add a new version\nvar data = new FormData();\ndata.append('file', file);\nconnector.makeAjaxCall({\n  type: 'POST'\n  url: '.../api/v1/nodes/123/versions',\n  data: data\n})\n")))}d.isMDXComponent=!0}}]);