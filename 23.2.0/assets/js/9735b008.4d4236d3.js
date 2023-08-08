"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[4323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const r={},o="Localizable Strings",i={unversionedId:"api/nuc/utils/types/localizable",id:"api/nuc/utils/types/localizable",title:"Localizable Strings",description:'This module holds functions for performing string operations with localized strings or multi-lingual objects. They use the current application\'s locale, which is accessible via the "nuc/lib/i18n" module.',source:"@site/articles/api/nuc/utils/types/localizable.md",sourceDirName:"api/nuc/utils/types",slug:"/api/nuc/utils/types/localizable",permalink:"/d2sv-sdk/23.2.0/api/nuc/utils/types/localizable",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Date Parsing and Formatting",permalink:"/d2sv-sdk/23.2.0/api/nuc/utils/types/date"},next:{title:"Member Name Formatting (nuc/utils/types/member)",permalink:"/d2sv-sdk/23.2.0/api/nuc/utils/types/member"}},s={},c=[{value:"getClosestLocalizedString(value, fallback) : string",id:"getclosestlocalizedstringvalue-fallback--string",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Result",id:"result",level:3},{value:"Example",id:"example",level:3},{value:"locale*String (...) : ...",id:"localestring---",level:2},{value:"localeCompareString(left, right, options): -1|0|1",id:"localecomparestringleft-right-options--101",level:3},{value:"localeContainsString(hay, needle): boolean",id:"localecontainsstringhay-needle-boolean",level:3},{value:"localeEndsWithString(full, end): boolean",id:"localeendswithstringfull-end-boolean",level:3},{value:"localeIndexOfString(hay, needle): number",id:"localeindexofstringhay-needle-number",level:3},{value:"localeStartsWithString(full, start): boolean",id:"localestartswithstringfull-start-boolean",level:3},{value:"formatMessage (count, messages, ...) : string",id:"formatmessage-count-messages---string",level:2},{value:"Example",id:"example-1",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"localizable-strings"},"Localizable Strings"),(0,l.kt)("p",null,'This module holds functions for performing string operations with localized strings or multi-lingual objects. They use the current application\'s locale, which is accessible via the "nuc/lib/i18n" module.'),(0,l.kt)("h2",{id:"getclosestlocalizedstringvalue-fallback--string"},"getClosestLocalizedString(value, fallback) : string"),(0,l.kt)("p",null,"Returns a localized text picked from the multilingual value for the closest\nlanguage to the current locale settings."),(0,l.kt)("p",null,"The multilingual value is an object literal where keys are locales or\nlanguages and values are localized texts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "<locale or language>": "<localized text>",\n  ...\n}\n')),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "en":    "carbon-fiber",\n  "en-br": "carbon-fibre",\n  "de":    "Kohlefaser"\n}\n')),(0,l.kt)("p",null,"Locale identifier has the format ",(0,l.kt)("inlineCode",{parentName:"p"},"<language>-<country>")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"language")," is\na two-letter code from ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"ISO-639-1"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"country"),"is a two-letter code from ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_3166-1"},"ISO-3166-1"),".\nLocale matching is case-insensitive."),(0,l.kt)("p",null,"The CS REST API uses different format for locale identifiers, which occur\nin multilingual metadata - underscore server as the separator instead of\nhyphen (",(0,l.kt)("inlineCode",{parentName:"p"},"<language>_<country>"),").  It is recognized by this method as well\nto allow easy integration, but do not use such locale identifiers in your\ncode and configugarion.  They are invalid for components which parse locale\nidentifiers using ",(0,l.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5646"},"RFC-5646"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc4647"},"RFC-4647")," standards.  You would\nhave to convert your identifiers all the time."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"value (object literal or any)\n: Multilingual value as a map, where keys are locales or languages and values\nare localized texts, or any value which woudl be converted to a string\n(optional; an empty string - ",(0,l.kt)("inlineCode",{parentName:"p"},"''")," - is the default)"),(0,l.kt)("p",null,"fallback (any)\n: A string to return if no fitting locale can be found in the ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," map."),(0,l.kt)("h3",{id:"result"},"Result"),(0,l.kt)("p",null,"The function returns always a string; if you do not pass an object literal\nas the ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),", it will return ",(0,l.kt)("inlineCode",{parentName:"p"},"value.toString()")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"''")," if the value\nis ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),".  You do not need to check if the input ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"\nis multilingual; you can pass normal strings to the function as well."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var multilingualLabel = {\n      'en': 'carbon-fiber',\n      'de': 'Kohlenfaser'\n    },\n    // Receives 'carbon-fiber' for the 'en-US' locale\n    label = base.getClosestLocalizedString(multilingualLabel);\n")),(0,l.kt)("h2",{id:"localestring---"},"locale*String (...) : ..."),(0,l.kt)("p",null,"These string operations work similarly to comparison operators and function in the ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," prototype, but they use rules for character comparing, changing case and transliterating as expected for the current application's locale."),(0,l.kt)("h3",{id:"localecomparestringleft-right-options--101"},"localeCompareString(left, right, options): -1|0|1"),(0,l.kt)("p",null,"Compares two strings according to the current locale and returns the result of the following operation: ",(0,l.kt)("inlineCode",{parentName:"p"},"left < right ? -1 : left > right ? 1 : 0"),"."),(0,l.kt)("p",null,"String comparisons may use different rules, depending on the usage scenario; like searching or sorting, for example. Specify your intention using the ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," parameter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"{usage: 'search'} - you are searching or filtering\n{usage: 'sort'}   - your are sorting\n")),(0,l.kt)("h3",{id:"localecontainsstringhay-needle-boolean"},"localeContainsString(hay, needle): boolean"),(0,l.kt)("p",null,"Works like a locale-specific ",(0,l.kt)("inlineCode",{parentName:"p"},"String.prototype.contains"),"."),(0,l.kt)("h3",{id:"localeendswithstringfull-end-boolean"},"localeEndsWithString(full, end): boolean"),(0,l.kt)("p",null,"Works like a locale-specific ",(0,l.kt)("inlineCode",{parentName:"p"},"String.prototype.endsWith"),"."),(0,l.kt)("h3",{id:"localeindexofstringhay-needle-number"},"localeIndexOfString(hay, needle): number"),(0,l.kt)("p",null,"Works like a locale-specific ",(0,l.kt)("inlineCode",{parentName:"p"},"String.prototype.indexOf"),"."),(0,l.kt)("h3",{id:"localestartswithstringfull-start-boolean"},"localeStartsWithString(full, start): boolean"),(0,l.kt)("p",null,"Works like a locale-specific ",(0,l.kt)("inlineCode",{parentName:"p"},"String.prototype.startsWith"),"."),(0,l.kt)("h2",{id:"formatmessage-count-messages---string"},"formatMessage (count, messages, ...) : string"),(0,l.kt)("p",null,"Chooses a string format from ",(0,l.kt)("inlineCode",{parentName:"p"},"messages")," according to the supplied ",(0,l.kt)("inlineCode",{parentName:"p"},"count")," and formats a string with ",(0,l.kt)("inlineCode",{parentName:"p"},"sformat"),' from "nuc/lib/underscore.string" using the ',(0,l.kt)("inlineCode",{parentName:"p"},"count")," and optionally other arguments. The argument ",(0,l.kt)("inlineCode",{parentName:"p"},"messages")," is expected to have the following structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"  {\n    formatForNone: 'expression for count == 0',\n    formatForOne: 'expression for count == 1',\n    formatForTwo: 'expression for 2 <= count <= 4',\n    formatForFive: 'expression for count >= 5'\n  }\n")),(0,l.kt)("p",null,"If the key ",(0,l.kt)("inlineCode",{parentName:"p"},"formatForNone")," is missing, ",(0,l.kt)("inlineCode",{parentName:"p"},"formatForFive")," will be used instead of it."),(0,l.kt)("p",null,"Grammars of different languages use different rules how to declinate a substantive, which comes after a number representing a count. The count value usually changes the extension of the substantive, related adjectives, or sometimes the entire expression."),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"English     Czech           Format\n----------------------------------------------------------\nno file     \u017e\xe1dn\xfd soubor    none (formatForNone, optional)\n 1 file     1 soubor        one  (formatForOne)\n 2 files    2 soubory       some (formatForTwo)\n 3 files    3 soubory\n 4 files    4 soubory\n 5 files    5 soubor\u016f       many (formatForFive)\n 6 files    6 soubor\u016f\n ...\n N files    N soubor\u016f       many (formatForFive)\n 0 files    0 soubor\u016f       many (formatForFive, fallback)\n")))}d.isMDXComponent=!0}}]);