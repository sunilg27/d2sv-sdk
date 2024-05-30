"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2504],{5680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>m});var t=n(6540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=t.createContext({}),d=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=d(e.components);return t.createElement(a.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),g=o,m=p["".concat(a,".").concat(g)]||p[g]||c[g]||l;return n?t.createElement(m,i(i({ref:r},u),{},{components:n})):t.createElement(m,i({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=g;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},672:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var t=n(8168),o=(n(6540),n(5680));const l={},i=void 0,s={unversionedId:"api/d2/integration/folder.browser.id.rules",id:"api/d2/integration/folder.browser.id.rules",title:"folder.browser.id.rules",description:"FolderBrowserIDRules : d2/sdk/integration/folder.browser.id.rules",source:"@site/articles/api/d2/integration/folder.browser.id.rules.md",sourceDirName:"api/d2/integration",slug:"/api/d2/integration/folder.browser.id.rules",permalink:"/d2sv-sdk/24.2.0/api/d2/integration/folder.browser.id.rules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"tree.view",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/tree/tree.view"},next:{title:"browsable.collection.mixin",permalink:"/d2sv-sdk/24.2.0/api/d2/models/mixins/browsable.collection.mixin"}},a={},d=[{value:"FolderBrowserIDRules : <code>d2/sdk/integration/folder.browser.id.rules</code>",id:"folderbrowseridrules--d2sdkintegrationfolderbrowseridrules",level:2},{value:"FolderBrowserIDRules~IDRuleFetcher \u21d2 <code>jQuery.Promise</code>",id:"folderbrowseridrulesidrulefetcher--jquerypromise",level:3}],u={toc:d},p="wrapper";function c(e){let{components:r,...n}=e;return(0,o.yg)(p,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("a",{name:"module_FolderBrowserIDRules"}),(0,o.yg)("h2",{id:"folderbrowseridrules--d2sdkintegrationfolderbrowseridrules"},"FolderBrowserIDRules : ",(0,o.yg)("code",null,"d2/sdk/integration/folder.browser.id.rules")),(0,o.yg)("p",null,"A rule collection that defines how to parse id attribute for the FolderBrowser widget in D2SV embedded mode."),(0,o.yg)("p",null,"This collection allows extension registrations and each of those extensions are treated as root object's id provider\nfor the FolderBrowser widget."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Extends"),": ",(0,o.yg)("code",null,"Array"),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Note"),": Each rule is supposed to define a ",(0,o.yg)("inlineCode",{parentName:"p"},"fetcher")," callback function that should return a ",(0,o.yg)("inlineCode",{parentName:"p"},"jquery.Promise")," object. See ",(0,o.yg)("inlineCode",{parentName:"p"},"IDRuleFetcher")," below.\nThe returned promise should be resolved with a Documentum ID which will be used as the root container for FolderBrowser. Or, alternatively\nthe returned promise could be rejected to inidate an error.",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"See"),": ",(0,o.yg)("a",{parentName:"p",href:"../../nuc/models/mixins/rules.matching/rules.matching.mixin"},"RulesMatchingMixin")," for a complete guide on how to write rules.",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Example")," ",(0,o.yg)("em",{parentName:"p"},"(To register a new type of id provider)"),"  "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"//in src/extensions/embed/folder.browser.id.rules.js\ndefine([\n 'nuc/lib/jquery'\n], function($){\n 'use strict';\n\n return [{\n   equals: {\n     id_source: 'abcd' //Match this rule when id_source=abcd is present as part of query parameters while accessing FolderBrowser widget using iURL\n   },\n   fetcher: function(options) {\n     var dfd = $.Deferred();\n\n     var nodeId = options.params.my_id;\n     if(!!nodeId) {\n       dfd.resolve(nodeId);\n       //This example shows a very trivial case where 'my_id' parameter itself holds the Documentum ID.\n       //However, depending on requirement complex business integration logic could also be written here to\n       //retrieve the Documentum ID from an external system\n     } else {\n       dfd.reject('my_id is missing from url');\n     }\n\n     return dfd.promise();\n   }\n }];\n});\n")),(0,o.yg)("a",{name:"module_FolderBrowserIDRules..IDRuleFetcher"}),(0,o.yg)("h3",{id:"folderbrowseridrulesidrulefetcher--jquerypromise"},"FolderBrowserIDRules~IDRuleFetcher \u21d2 ",(0,o.yg)("code",null,"jQuery.Promise")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,o.yg)("a",{parentName:"p",href:"#module_FolderBrowserIDRules"},(0,o.yg)("code",null,"FolderBrowserIDRules")),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Returns"),": ",(0,o.yg)("code",null,"jQuery.Promise")," - The promise should be either resolved with a Documentum ID(r_object_id) or rejected with an error string.",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"Properties")),(0,o.yg)("table",null,(0,o.yg)("thead",null,(0,o.yg)("tr",null,(0,o.yg)("th",null,"Name"),(0,o.yg)("th",null,"Type"),(0,o.yg)("th",null,"Description"))),(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",null,"options"),(0,o.yg)("td",null,(0,o.yg)("code",null,"Object")),(0,o.yg)("td",null)),(0,o.yg)("tr",null,(0,o.yg)("td",null,"options.params"),(0,o.yg)("td",null,(0,o.yg)("code",null,"Object")),(0,o.yg)("td",null,(0,o.yg)("p",null,"JSON object representing query params."))),"  ")))}c.isMDXComponent=!0}}]);