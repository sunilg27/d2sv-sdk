"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2138],{8988:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var n=a(6540),r=a(4586),s=a(1402),c=a(5260),l=a(5489),u=a(6347),o=a(8193);const m=function(){const e=(0,u.W6)(),t=(0,u.zy)(),{siteConfig:{baseUrl:a}}=(0,r.A)();return{searchValue:o.A.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var h=a(5891),i=a(2384),d=a(6841),p=a(3810),_=a(7674),f=a(2849),g=a(4766);function E(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,((e,a)=>Object.prototype.hasOwnProperty.call(t,a)?String(t[a]):e))}const y={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};var I=a(4471);function S(e){let{searchResult:{document:t,type:a,page:r,tokens:s,metadata:c}}=e;const u=0===a,o=2===a,m=(u?t.b:r.b).slice(),h=o?t.s:t.t;return u||m.push(r.t),n.createElement("article",{className:y.searchResultItem},n.createElement("h2",null,n.createElement(l.A,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,d.Z)(h,s):(0,p.C)(h,(0,_.g)(c,"t"),s,100)}})),m.length>0&&n.createElement("p",{className:y.searchResultItemPath},(0,I.$)(m)),o&&n.createElement("p",{className:y.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,p.C)(t.t,(0,_.g)(c,"t"),s,100)}}))}const P=function(){const{siteConfig:{baseUrl:e}}=(0,r.A)(),{searchValue:t,updateSearchPath:a}=m(),[l,u]=(0,n.useState)(t),[o,d]=(0,n.useState)(),[p,_]=(0,n.useState)(),I=(0,n.useMemo)((()=>l?E(g.P9.search_results_for,{keyword:l}):g.P9.search_the_documentation),[l]);(0,n.useEffect)((()=>{a(l),o&&(l?o(l,(e=>{_(e)})):_(void 0))}),[l,o]);const P=(0,n.useCallback)((e=>{u(e.target.value)}),[]);return(0,n.useEffect)((()=>{t&&t!==l&&u(t)}),[t]),(0,n.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await(0,h.Z)(e);d((()=>(0,i.m)(t,a,100)))}()}),[e]),n.createElement(s.A,null,n.createElement(c.A,null,n.createElement("meta",{property:"robots",content:"noindex, follow"}),n.createElement("title",null,I)),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("h1",null,I),n.createElement("input",{type:"search",name:"q",className:y.searchQueryInput,"aria-label":"Search",onChange:P,value:l,autoComplete:"off",autoFocus:!0}),!o&&l&&n.createElement("div",null,n.createElement(f.A,null)),p&&(p.length>0?n.createElement("p",null,E(1===p.length?g.P9.count_documents_found:g.P9.count_documents_found_plural,{count:p.length})):n.createElement("p",null,g.P9.no_documents_were_found)),n.createElement("section",null,p&&p.map((e=>n.createElement(S,{key:e.document.i,searchResult:e}))))))}}}]);