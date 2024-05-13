"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[9210],{5680:(e,t,l)=>{l.d(t,{xA:()=>m,yg:()=>c});var r=l(6540);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),o=u(l),g=n,c=o["".concat(p,".").concat(g)]||o[g]||d[g]||a;return l?r.createElement(c,i(i({ref:t},m),{},{components:l})):r.createElement(c,i({ref:t},m))}));function c(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,i=new Array(a);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[o]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=l[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}g.displayName="MDXCreateElement"},8003:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=l(8168),n=(l(6540),l(5680));const a={},i=void 0,s={unversionedId:"api/d2/utils/uri.templates",id:"api/d2/utils/uri.templates",title:"uri.templates",description:"UriTemplates : d2/sdk/utils/uri.templates",source:"@site/articles/api/d2/utils/uri.templates.md",sourceDirName:"api/d2/utils",slug:"/api/d2/utils/uri.templates",permalink:"/d2sv-sdk/24.2.0/api/d2/utils/uri.templates",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"common.mock",permalink:"/d2sv-sdk/24.2.0/api/d2/utils/test/common.mock"},next:{title:"widget.constants",permalink:"/d2sv-sdk/24.2.0/api/d2/utils/widget.constants"}},p={},u=[{value:"UriTemplates : <code>d2/sdk/utils/uri.templates</code>",id:"uritemplates--d2sdkutilsuritemplates",level:2},{value:"uriTemplates.fill(templateParams) \u21d2 <code>String</code>",id:"uritemplatesfilltemplateparams--string",level:3},{value:"UriTemplates~UriTemplates",id:"uritemplatesuritemplates",level:3},{value:"new UriTemplates(templatizedUri)",id:"new-uritemplatestemplatizeduri",level:4}],m={toc:u},o="wrapper";function d(e){let{components:t,...l}=e;return(0,n.yg)(o,(0,r.A)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("a",{name:"module_UriTemplates"}),(0,n.yg)("h2",{id:"uritemplates--d2sdkutilsuritemplates"},"UriTemplates : ",(0,n.yg)("code",null,"d2/sdk/utils/uri.templates")),(0,n.yg)("p",null,"Utility to help with parameter substiution for templatized URIs while turning it into an\naccessible URI."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")," ",(0,n.yg)("em",{parentName:"p"},"(Sample use)"),"  "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"define([\n 'd2/sdk/utils/rest.linkrels',\n 'd2/sdk/utils/rest.resources',\n 'd2/sdk/utils/uri.templates'\n], function(RestLinkrels, RestResources, UriTemplates){\n 'use strict';\n\n var LINKREL_SEND_MAIL_CFG = 'http://identifiers.emc.com/linkrel/d2-sendmail-config';\n\n function getMailConfigURL() {\n   var templateUrl = RestLinkrels.getLinkTemplate(RestResources.getCurrentRepository().get('links'), LINKREL_SEND_MAIL_CFG);\n   if (templateUrl) {\n     var params = {\n       'id': \"default?\"\n     }, template = new UriTemplates(templateUrl);\n\n     return template.fill(params);\n   }\n }\n\n return {\n   getMailConfigURL: getMailConfigURL\n };\n});\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#module_UriTemplates"},"UriTemplates")," : ",(0,n.yg)("code",null,"d2/sdk/utils/uri.templates"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"instance"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#module_UriTemplates+fill"},".fill(templateParams)")," \u21d2 ",(0,n.yg)("code",null,"String")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"inner"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#module_UriTemplates..UriTemplates"},"~UriTemplates"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#new_module_UriTemplates..UriTemplates_new"},"new UriTemplates(templatizedUri)"))))))))),(0,n.yg)("a",{name:"module_UriTemplates+fill"}),(0,n.yg)("h3",{id:"uritemplatesfilltemplateparams--string"},"uriTemplates.fill(templateParams) \u21d2 ",(0,n.yg)("code",null,"String")),(0,n.yg)("p",null,"Substitute template parameters with their values."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.yg)("a",{parentName:"p",href:"#module_UriTemplates"},(0,n.yg)("code",null,"UriTemplates")),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("strong",{parentName:"p"},"Returns"),": ",(0,n.yg)("code",null,"String")," - Returns the accessible URI.  "),(0,n.yg)("table",null,(0,n.yg)("thead",null,(0,n.yg)("tr",null,(0,n.yg)("th",null,"Param"),(0,n.yg)("th",null,"Type"),(0,n.yg)("th",null,"Description"))),(0,n.yg)("tbody",null,(0,n.yg)("tr",null,(0,n.yg)("td",null,"templateParams"),(0,n.yg)("td",null,(0,n.yg)("code",null,"object")),(0,n.yg)("td",null,(0,n.yg)("p",null,"An object hash containing key-value pairs. All matching keys from the URI is replaced with the key's corresponding value."))),"  ")),(0,n.yg)("a",{name:"module_UriTemplates..UriTemplates"}),(0,n.yg)("h3",{id:"uritemplatesuritemplates"},"UriTemplates~UriTemplates"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,n.yg)("a",{parentName:"p",href:"#module_UriTemplates"},(0,n.yg)("code",null,"UriTemplates")),"  "),(0,n.yg)("a",{name:"new_module_UriTemplates..UriTemplates_new"}),(0,n.yg)("h4",{id:"new-uritemplatestemplatizeduri"},"new UriTemplates(templatizedUri)"),(0,n.yg)("table",null,(0,n.yg)("thead",null,(0,n.yg)("tr",null,(0,n.yg)("th",null,"Param"),(0,n.yg)("th",null,"Type"),(0,n.yg)("th",null,"Description"))),(0,n.yg)("tbody",null,(0,n.yg)("tr",null,(0,n.yg)("td",null,"templatizedUri"),(0,n.yg)("td",null,(0,n.yg)("code",null,"string")),(0,n.yg)("td",null,(0,n.yg)("p",null,"Templatized URI, which will later be turned into accessible URI."))),"  ")))}d.isMDXComponent=!0}}]);