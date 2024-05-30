"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[4864],{5680:(n,e,t)=>{t.d(e,{xA:()=>g,yg:()=>p});var o=t(6540);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,o,l=function(n,e){if(null==n)return{};var t,o,l={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var a=o.createContext({}),s=function(n){var e=o.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},g=function(n){var e=s(n.components);return o.createElement(a.Provider,{value:e},n.children)},y="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var t=n.components,l=n.mdxType,i=n.originalType,a=n.parentName,g=r(n,["components","mdxType","originalType","parentName"]),y=s(t),d=l,p=y["".concat(a,".").concat(d)]||y[d]||u[d]||i;return t?o.createElement(p,c(c({ref:e},g),{},{components:t})):o.createElement(p,c({ref:e},g))}));function p(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var i=t.length,c=new Array(i);c[0]=d;var r={};for(var a in e)hasOwnProperty.call(e,a)&&(r[a]=e[a]);r.originalType=n,r[y]="string"==typeof n?n:l,c[1]=r;for(var s=2;s<i;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1988:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var o=t(8168),l=(t(6540),t(5680));const i={},c=void 0,r={unversionedId:"api/d2/controls/action.icons/action.icons",id:"api/d2/controls/action.icons/action.icons",title:"action.icons",description:"ActionIconRegistry : d2/sdk/controls/action.icons/action.icons",source:"@site/articles/api/d2/controls/action.icons/action.icons.md",sourceDirName:"api/d2/controls/action.icons",slug:"/api/d2/controls/action.icons/",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/action.icons/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"progressive.nodes.command",permalink:"/d2sv-sdk/24.2.0/api/d2/commands/progressive.nodes.command"},next:{title:"customizable.content.modal.alert",permalink:"/d2sv-sdk/24.2.0/api/d2/controls/alerts/customizable.content.modal.alert"}},a={},s=[{value:"ActionIconRegistry : <code>d2/sdk/controls/action.icons/action.icons</code>",id:"actioniconregistry--d2sdkcontrolsactioniconsactionicons",level:2},{value:"ActionIconRegistry.registerIcons(icons) \u21d2 <code>void</code>",id:"actioniconregistryregistericonsicons--void",level:3},{value:"ActionIconRegistry.getIconByName(iconName) \u21d2 <code>string</code>",id:"actioniconregistrygeticonbynameiconname--string",level:3},{value:"ActionIconRegistry.getIconByNameWithOptions(iconOptions) \u21d2 <code>string</code>",id:"actioniconregistrygeticonbynamewithoptionsiconoptions--string",level:3}],g={toc:s},y="wrapper";function u(n){let{components:e,...t}=n;return(0,l.yg)(y,(0,o.A)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("a",{name:"module_ActionIconRegistry"}),(0,l.yg)("h2",{id:"actioniconregistry--d2sdkcontrolsactioniconsactionicons"},"ActionIconRegistry : ",(0,l.yg)("code",null,"d2/sdk/controls/action.icons/action.icons")),(0,l.yg)("p",null,"Action icon registry. Allows registering new action icons through extension.\nAlso provides managed API to look up a registered action icon given its name."),(0,l.yg)("p",null,"New action icons can be registered through extension"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Extends"),": ",(0,l.yg)("a",{parentName:"p",href:"https://backbonejs.org/#Collection"},(0,l.yg)("code",null,"Backbone.Collection")),(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(to register an extension, add in extension.json)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'\n{\n  "d2/sdk/controls/action.icons/action.icons": {\n     "extensions": {\n        "mybundle": {\n           "mybundle/utils/theme/action.icons"\n        }\n     }\n   }\n}\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(whereas action.icons.js is defined as)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'\ndefine([], function(){\n   \'use strict\';\n\n   return {\n     \'mybundle_action_1\': \'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32" class="csui-icon-v2 csui-icon-v2__d2_action_abort_workflow"><path d="M16,30c7.732,0,14-6.268,14-14c0-7.732-6.268-14-14-14C8.268,2,2,8.268,2,16 C2,23.732,8.268,30,16,30z" fill="none" class="csui-icon-v2-state"/><path d="M16,8c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8s8-3.582,8-8C24,11.582,20.418,8,16,8z M9.778,16 c0-3.436,2.786-6.222,6.222-6.222c1.373,0,2.641,0.444,3.67,1.197l-8.695,8.695C10.222,18.641,9.778,17.372,9.778,16z M16,22.222 c-1.423,0-2.734-0.478-3.783-1.281l8.724-8.724c0.804,1.049,1.281,2.36,1.281,3.783C22.222,19.436,19.436,22.222,16,22.222z" fill="#333333" class="csui-icon-v2-metaphor0"/><path d="M16,31.5c8.56,0,15.5-6.94,15.5-15.5c0-8.56-6.94-15.5-15.5-15.5C7.44,0.5,0.5,7.44,0.5,16 C0.5,24.56,7.44,31.5,16,31.5z" fill="none" stroke="#2E3D98" class="csui-icon-v2-focus"/></svg>\',\n     \'mybunle_action_2\': \'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32" class="csui-icon-v2 csui-icon-v2__d2_action_view_notes"><circle cx="16" cy="16" r="14" fill="none" class="csui-icon-v2-state"/><g><path d="M20,7h-9C9.897,7,9,7.888,9,8.98v13.859c0,1.092,0.897,1.979,2,1.979h10c1.103,0,2-0.888,2-1.979V9.97L20,7z M22,22.839c0,0.54-0.448,0.979-1,0.979H11c-0.551,0-1-0.439-1-0.979V8.98C10,8.439,10.449,8,11,8h8.588L22,10.387V22.839z" fill-rule="evenodd" clip-rule="evenodd" fill="#333333" class="csui-icon-v2-metaphor0"/><path d="M12.5,11.75c-0.414,0-0.75,0.336-0.75,0.75s0.336,0.75,0.75,0.75h7c0.414,0,0.75-0.336,0.75-0.75 s-0.336-0.75-0.75-0.75H12.5z" fill-rule="evenodd" clip-rule="evenodd" fill="#333333" class="csui-icon-v2-metaphor0"/><path d="M19.5,15.75h-7c-0.414,0-0.75,0.336-0.75,0.75s0.336,0.75,0.75,0.75h7c0.414,0,0.75-0.336,0.75-0.75 S19.914,15.75,19.5,15.75z" fill-rule="evenodd" clip-rule="evenodd" fill="#333333" class="csui-icon-v2-metaphor0"/><path d="M18,19.75h-5.5c-0.414,0-0.75,0.336-0.75,0.75s0.336,0.75,0.75,0.75H18c0.414,0,0.75-0.336,0.75-0.75 S18.414,19.75,18,19.75z" fill-rule="evenodd" clip-rule="evenodd" fill="#333333" class="csui-icon-v2-metaphor0"/></g><circle cx="16" cy="16" r="15.5" fill="none" stroke="#2E3D98" class="csui-icon-v2-focus"/></svg>\'\n   };\n});\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#module_ActionIconRegistry"},"ActionIconRegistry")," : ",(0,l.yg)("code",null,"d2/sdk/controls/action.icons/action.icons"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#module_ActionIconRegistry.registerIcons"},".registerIcons(icons)")," \u21d2 ",(0,l.yg)("code",null,"void")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#module_ActionIconRegistry.getIconByName"},".getIconByName(iconName)")," \u21d2 ",(0,l.yg)("code",null,"string")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#module_ActionIconRegistry.getIconByNameWithOptions"},".getIconByNameWithOptions(iconOptions)")," \u21d2 ",(0,l.yg)("code",null,"string"))))),(0,l.yg)("a",{name:"module_ActionIconRegistry.registerIcons"}),(0,l.yg)("h3",{id:"actioniconregistryregistericonsicons--void"},"ActionIconRegistry.registerIcons(icons) \u21d2 ",(0,l.yg)("code",null,"void")),(0,l.yg)("p",null,"Register action icons."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.yg)("a",{parentName:"p",href:"#module_ActionIconRegistry"},(0,l.yg)("code",null,"ActionIconRegistry")),(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("strong",{parentName:"p"},"Throws"),":"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Error If an icon name matches with any of already registered icons.")),(0,l.yg)("table",null,(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",null,"Param"),(0,l.yg)("th",null,"Type"),(0,l.yg)("th",null,"Description"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,"icons"),(0,l.yg)("td",null,(0,l.yg)("code",null,"object")),(0,l.yg)("td",null,(0,l.yg)("p",null,"A hash of key value pairs, such that key represents an icon name and value is the string serialized svg content."))),"  ")),(0,l.yg)("a",{name:"module_ActionIconRegistry.getIconByName"}),(0,l.yg)("h3",{id:"actioniconregistrygeticonbynameiconname--string"},"ActionIconRegistry.getIconByName(iconName) \u21d2 ",(0,l.yg)("code",null,"string")),(0,l.yg)("p",null,"Find an action icon by name."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.yg)("a",{parentName:"p",href:"#module_ActionIconRegistry"},(0,l.yg)("code",null,"ActionIconRegistry")),(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("strong",{parentName:"p"},"Returns"),": ",(0,l.yg)("code",null,"string")," - Matched icon content or a generalized missing icon if given name is not found in the registry.  "),(0,l.yg)("table",null,(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",null,"Param"),(0,l.yg)("th",null,"Type"),(0,l.yg)("th",null,"Description"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,"iconName"),(0,l.yg)("td",null,(0,l.yg)("code",null,"string")),(0,l.yg)("td",null,(0,l.yg)("p",null,"Name of the action icon being looked up."))),"  ")),(0,l.yg)("a",{name:"module_ActionIconRegistry.getIconByNameWithOptions"}),(0,l.yg)("h3",{id:"actioniconregistrygeticonbynamewithoptionsiconoptions--string"},"ActionIconRegistry.getIconByNameWithOptions(iconOptions) \u21d2 ",(0,l.yg)("code",null,"string")),(0,l.yg)("p",null,"Find an icon and return decored copy with supplied options"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.yg)("a",{parentName:"p",href:"#module_ActionIconRegistry"},(0,l.yg)("code",null,"ActionIconRegistry")),(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("strong",{parentName:"p"},"Returns"),": ",(0,l.yg)("code",null,"string")," - Matched icon content or the missin icon after decorating it with given options.  "),(0,l.yg)("table",null,(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",null,"Param"),(0,l.yg)("th",null,"Type"),(0,l.yg)("th",null,"Description"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,"iconOptions"),(0,l.yg)("td",null,(0,l.yg)("code",null,"object")),(0,l.yg)("td",null)),(0,l.yg)("tr",null,(0,l.yg)("td",null,"iconOptions.iconName"),(0,l.yg)("td",null,(0,l.yg)("code",null,"string")),(0,l.yg)("td",null,(0,l.yg)("p",null,"Find the icon by this name."))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"iconOptions.theme"),(0,l.yg)("td",null,(0,l.yg)("code",null,"string")),(0,l.yg)("td",null,(0,l.yg)("p",null,"Decorate found icon with css class ",(0,l.yg)("code",null,"csui-icon-v2-theme-<theme>")))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"iconOptions.allStateByElement"),(0,l.yg)("td",null,(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",null,(0,l.yg)("p",null,"Whether to decorate icon with all possible state CSS classes."))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"iconOptions.hoverStateByElement"),(0,l.yg)("td",null,(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",null,(0,l.yg)("p",null,"Decorate with mouse hover state CSS class."))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"iconOptions.activeStateByElement"),(0,l.yg)("td",null,(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",null,(0,l.yg)("p",null,"Decorate with mosue left button down state CSS class."))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"iconOptions.focusStateByElement"),(0,l.yg)("td",null,(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",null,(0,l.yg)("p",null,"Decorate with keyboard focus state CSS class."))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"iconOptions.disabledStateByElement"),(0,l.yg)("td",null,(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",null,(0,l.yg)("p",null,"Decorate with disabled state CSS class."))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"iconOptions.states"),(0,l.yg)("td",null,(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",null,(0,l.yg)("p",null,"Whether the icon is capable of showing different states."))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"iconOptions.handleRTL"),(0,l.yg)("td",null,(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",null,(0,l.yg)("p",null,"Whether the icon is capable of handling RTL."))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"iconOptions.on"),(0,l.yg)("td",null,(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",null,(0,l.yg)("p",null,"Decorate icon with on state CSS class."))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"iconOptions.filter"),(0,l.yg)("td",null,(0,l.yg)("code",null,"string")),(0,l.yg)("td",null,(0,l.yg)("p",null,"Apply filter. Only supported value is ",(0,l.yg)("code",null,"grayscale"),". ",(0,l.yg)("code",null,"theme"),", ",(0,l.yg)("code",null,"states")," & ",(0,l.yg)("code",null,"on")," must be false."))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"iconOptions.colorTheme"),(0,l.yg)("td",null,(0,l.yg)("code",null,"string")),(0,l.yg)("td",null,(0,l.yg)("p",null,"Apply a coloring scheme. Applies only when ",(0,l.yg)("code",null,"theme"),", ",(0,l.yg)("code",null,"states")," & ",(0,l.yg)("code",null,"on")," are ",(0,l.yg)("code",null,"false"),". Possible values are",(0,l.yg)("code",null,"'tree', 'outline-light', 'outline-dark', 'ot-navy', 'ot-indigo', 'ot-plum', 'ot-teal', 'ot-light-blue', 'ot-steal', 'ot-cloud'"),"."))),"  ")))}u.isMDXComponent=!0}}]);