"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),s=i,f=m["".concat(d,".").concat(s)]||m[s]||c[s]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={},o="RequireJS",l={unversionedId:"api/nuc/lib/require",id:"api/nuc/lib/require",title:"RequireJS",description:"This document describes changes to the original RequireJS. See the [RequireJS website] for the original documentation.",source:"@site/articles/api/nuc/lib/require.md",sourceDirName:"api/nuc/lib",slug:"/api/nuc/lib/require",permalink:"/d2sv-sdk/23.4.0/api/nuc/lib/require",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"I18n",permalink:"/d2sv-sdk/23.4.0/api/nuc/lib/i18n"},next:{title:"Browsable Support for Backbone.Collections",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/browsable/"}},d={},u=[{value:"Changes",id:"changes",level:2},{value:"<code>pkgs</code> mergeable",id:"pkgs-mergeable",level:2},{value:"Attribute <code>data-csui-required</code>",id:"attribute-data-csui-required",level:2},{value:"<code>rename</code> map",id:"rename-map",level:2},{value:"Merged module configuration",id:"merged-module-configuration",level:2},{value:"<code>moduleConfig</code> method",id:"moduleconfig-method",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"requirejs"},"RequireJS"),(0,i.kt)("p",null,"This document describes changes to the original RequireJS. See the ",(0,i.kt)("a",{parentName:"p",href:"https://requirejs.org/"},"RequireJS website")," for the original documentation."),(0,i.kt)("h2",{id:"changes"},"Changes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make the ",(0,i.kt)("inlineCode",{parentName:"li"},"pkgs")," configuration object mergeable."),(0,i.kt)("li",{parentName:"ol"},"Add an attribute ",(0,i.kt)("inlineCode",{parentName:"li"},"data-csui-required")," to to every element added to document head."),(0,i.kt)("li",{parentName:"ol"},"Recognise ",(0,i.kt)("inlineCode",{parentName:"li"},"rename")," in the configuration to implement module name mapping\nin addition to the ",(0,i.kt)("inlineCode",{parentName:"li"},"starMap")," for an additional module compatibility layer."),(0,i.kt)("li",{parentName:"ol"},"Return module configuration merged from the mapped original names and new ones."),(0,i.kt)("li",{parentName:"ol"},"Introduce a method ",(0,i.kt)("inlineCode",{parentName:"li"},"moduleConfig(id)")," on the local require function.")),(0,i.kt)("h2",{id:"pkgs-mergeable"},(0,i.kt)("inlineCode",{parentName:"h2"},"pkgs")," mergeable"),(0,i.kt)("p",null,"Allows calling ",(0,i.kt)("inlineCode",{parentName:"p"},"require.config({ pkgs: ... })")," multiple times to configure packages step-by-step. Kind of misused by the original version of the mobile app to remap modules."),(0,i.kt)("h2",{id:"attribute-data-csui-required"},"Attribute ",(0,i.kt)("inlineCode",{parentName:"h2"},"data-csui-required")),(0,i.kt)("p",null,"Allows detecting all scripts and links inserted by RequireJs and the ",(0,i.kt)("inlineCode",{parentName:"p"},"css")," plugin to ",(0,i.kt)("inlineCode",{parentName:"p"},"document.head")," to be able to remove them later. Used to wipe out all modules loaded from one server, before another version can be loaded from a different server."),(0,i.kt)("h2",{id:"rename-map"},(0,i.kt)("inlineCode",{parentName:"h2"},"rename")," map"),(0,i.kt)("p",null,"The RequireJS ",(0,i.kt)("inlineCode",{parentName:"p"},"starMap")," can be used for remapping modules to be able to load different functionality on different pages. It can be used to implement product-specific features, if a RequireJS library is reused in multiple products."),(0,i.kt)("p",null,"Another need for module remapping comes from refactoring, which moves a module to a different library, with or without deprecating the original module name. If a module needs to be remapped for compatibility, which was earlier remapped for product adaptation, the two map entries will conflict."),(0,i.kt)("p",null,"A direct conflict means that either the compatibility mapping, or the product adaptation will not work, depending on the order of the configuration statements:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"csui/original -> nuc/moved      // keep compatibility with a moved module\ncsui/original -> custom/adapted // adapt a module for a new product\n")),(0,i.kt)("p",null,"An direct conflict means that dependencies on the original module will not be adapted, if the adaptation maps only the new module name, because the ",(0,i.kt)("inlineCode",{parentName:"p"},"starMap")," is not processed recursively:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"csui/original -> nuc/moved      // keep compatibility with a moved module\nnuc/moved     -> custom/adapted // adapt a module for a new product\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rename")," map is separate from ",(0,i.kt)("inlineCode",{parentName:"p"},"starMap"),' and solves the direct conflict. Modules remapped for compatibility are called "renamed" and have to be added to the ',(0,i.kt)("inlineCode",{parentName:"p"},"rename")," map. The ",(0,i.kt)("inlineCode",{parentName:"p"},"starMap")," continues to support product adapting. The module name normalisation makes use of both maps. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"rename")," map is configured alone, it will work like ",(0,i.kt)("inlineCode",{parentName:"p"},"starMap")," alone."),(0,i.kt)("p",null,"When this configuration is used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rename:  csui/original -> nuc/moved\n")),(0,i.kt)("p",null,"The module names will be normalised like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"csui/original -> nuc/moved // using rename\nnuc/moved                  // just loaded\n")),(0,i.kt)("p",null,"When this configuration is used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rename:  csui/original -> nuc/moved\nstarMap: csui/original -> custom/adapted\n")),(0,i.kt)("p",null,"The module names will be normalised like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"custom/adapted                  // just loaded\ncsui/original -> custom/adapted // using starMap\nnuc/moved     -> custom/adapted // using rename backwards and starMap\n")),(0,i.kt)("p",null,"When this configuration is used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rename:  csui/original -> nuc/moved\nstarMap: nuc/original  -> custom/adapted\n")),(0,i.kt)("p",null,"The module names will be normalised like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"custom/adapted                  // just loaded\ncsui/original -> custom/adapted // using rename backwards and starMap\nnuc/moved     -> custom/adapted // using starMap\n")),(0,i.kt)("h2",{id:"merged-module-configuration"},"Merged module configuration"),(0,i.kt)("p",null,"This is a feature supporting module renaming and remapping as discussed in the previous chapter."),(0,i.kt)("p",null,"An example of a situation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The original module csui/original supported configuration."),(0,i.kt)("li",{parentName:"ol"},"The original module was adapted in a new product and the new module might need additional configuration."),(0,i.kt)("li",{parentName:"ol"},"The original module was renamed in the library and parts of the configuration started to be set using the new name.")),(0,i.kt)("p",null,"An example of RequireJS configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rename:  csui/original -> nuc/moved\nstarMap: csui/original -> custom/adapted\n")),(0,i.kt)("p",null,"The result of ",(0,i.kt)("inlineCode",{parentName:"p"},"module.config()")," called in custom/adapted will contain an object merged from configurations set for all three module names. Forward and backward ",(0,i.kt)("inlineCode",{parentName:"p"},"rename")," map and ",(0,i.kt)("inlineCode",{parentName:"p"},"starMap")," are used to discover the other module names."),(0,i.kt)("h2",{id:"moduleconfig-method"},(0,i.kt)("inlineCode",{parentName:"h2"},"moduleConfig")," method"),(0,i.kt)("p",null,"The configuration of a RequireJS module may be needed in another module. It can be used to keep compatibility after refactoring the module tree. The functionality of ",(0,i.kt)("inlineCode",{parentName:"p"},"require.moduleConfig")," is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"module.config"),", the difference is that you have to supply the module name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"define(['require', 'module'], function (require, module) {\n  // merge the old and new module configurations\n  var config = _.extend({},\n    require.moduleConfig('other-module'), // configuration of other module\n    module.config()                       // configuration of this module\n  );\n});\n")))}c.isMDXComponent=!0}}]);