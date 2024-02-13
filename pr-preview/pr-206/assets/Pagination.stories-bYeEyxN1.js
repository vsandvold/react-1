import{j as r,A as s}from"./index-nHMqKp_t.js";import{R as c,r as W}from"./index-4g5l5LRQ.js";import{a as X}from"./i18n-RORRLZQ_.js";import{r as m}from"./index.m-0-FAh1ao.js";import{i as o}from"./index-XwI9xEnt.js";import{B as Y}from"./component-RYf_gKLY.js";import"./_commonjsHelpers-4gQjN7DL.js";const Z=JSON.parse('{"pagination.aria.first-page":"First page","pagination.aria.next-page":"Next page","pagination.button.next-page":"Next page","pagination.label.current-page":["Page ",["currentPage"]],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":"Pages","pagination.aria.prev-page":"Previous page"}'),ee=JSON.parse('{"pagination.aria.first-page":"Ensimmäinen sivu","pagination.aria.next-page":"Seuraava sivu","pagination.button.next-page":"Seuraava sivu","pagination.label.current-page":["Sivu ",["currentPage"]],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":"Sivut","pagination.aria.prev-page":"Edellinen sivu"}'),ae=JSON.parse('{"pagination.aria.first-page":"Første side","pagination.aria.next-page":"Neste side","pagination.button.next-page":"Neste side","pagination.label.current-page":["Side ",["currentPage"]],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":"Sider","pagination.aria.prev-page":"Forrige side"}'),R=c.createContext({currentPage:0,lastPage:0}),v=()=>c.useContext(R),w=c.forwardRef(({children:e,className:a,currentPage:t,lastPage:n,"aria-labelledby":i="pagination-heading",...l},u)=>{if(!Number.isInteger(t))throw new TypeError(`Invalid currentPage: ${JSON.stringify(t)}`);if(!Number.isInteger(n))throw new TypeError(`Invalid lastPage: ${JSON.stringify(n)}`);const d=c.useMemo(()=>({currentPage:Math.max(1,Math.min(t,n)),lastPage:Math.max(1,n)}),[t,n]),p=l["aria-label"]??o._({id:"pagination.aria.pagination",message:"Pages",comment:"Default screenreader message for pagination container in the pagination component"});return r.jsxs("nav",{...l,className:m(s.containerNav,a),"aria-labelledby":i,ref:u,children:[r.jsx("h1",{className:s.heading,id:i,children:p}),r.jsx(R.Provider,{value:d,children:e})]})});try{w.displayName="PaginationContainer",w.__docgenInfo={description:"",displayName:"PaginationContainer",props:{"aria-label":{defaultValue:{value:"Pages"},description:`Defines a string value that labels the current element.
@see aria-labelledby.`,name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class for the container.",name:"className",required:!1,type:{name:"string"}},currentPage:{defaultValue:null,description:"The current page number. Adjusted so it's never below `1`, and never above `lastPage`.",name:"currentPage",required:!0,type:{name:"number"}},lastPage:{defaultValue:null,description:"The number of the last page.",name:"lastPage",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const N=c.forwardRef(({children:e,className:a,...t},n)=>{const{currentPage:i}=v();if(i<=1)return null;const l=e??o._({id:"pagination.label.current-page",message:"Page {currentPage}",values:{currentPage:i},comment:"Default message for current page label in the pagination component"});return r.jsx("span",{...t,className:m(s.currentPage,a),ref:n,children:l})});try{N.displayName="CurrentPage",N.__docgenInfo={description:"",displayName:"CurrentPage",props:{children:{defaultValue:null,description:"Label to render on mobile",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}var te={},ne=Object.defineProperty,j=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,I=(e,a,t)=>a in e?ne(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,le=(e,a)=>{for(var t in a||(a={}))re.call(a,t)&&I(e,t,a[t]);if(j)for(var t of j(a))ie.call(a,t)&&I(e,t,a[t]);return e},oe=JSON.parse('{"icon.title.chevron-double-left":"Dobbel pil til venstre"}'),se=JSON.parse('{"icon.title.chevron-double-left":"Double leftward arrow"}'),ce=JSON.parse('{"icon.title.chevron-double-left":"Kaksi nuolta vasemmalle"}'),M=["en","nb","fi","da","sv"],D="en",ue=()=>{let e;switch(te.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},F=()=>{var e;const a=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return a.includes("finn")?"nb":a.includes("tori")?"fi":a.includes("blocket")?"sv":a.includes("dba")?"da":D},b=e=>M.find(a=>e===a||e.toLowerCase().includes(a))||F();function de(){var e;if(typeof window>"u"){const a=ue();return b(a)}try{const a=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,t=F();return M.includes(a)?b(a??t):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),b(t))}catch(a){return console.warn("could not detect locale, falling back to source locale",a),D}}var pe=(e,a,t,n)=>e==="nb"?t:e==="fi"?n:a,me=(e,a,t)=>{const n=de(),i=pe(n,e,a,t);o.load(n,i),o.activate(n)};me(se,oe,ce);var ge=o.t({message:"Double leftward arrow",id:"icon.title.chevron-double-left",comment:"Title for chevron-double-left icon"}),fe=e=>c.createElement("svg",le({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${ge}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 13 2 8l5-5m7 10L9 8l5-5"></path>`}},e)),ve=fe;const x=c.forwardRef(({className:e,...a},t)=>{const{currentPage:n}=v();if(n<=2)return null;const i=a["aria-label"]??o._({id:"pagination.aria.first-page",message:"First page",comment:"Default screenreader message for first page button in the pagination component"});return r.jsx("a",{ref:t,...a,"aria-label":i,className:m(e,s.button,s.icon),rel:"start",role:"button",children:r.jsx(ve,{})})});try{x.displayName="FirstPage",x.__docgenInfo={description:"",displayName:"FirstPage",props:{"aria-label":{defaultValue:{value:"First page"},description:"",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class for the element.",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"The href for the anchor element.",name:"href",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"Additional CSS styles for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"onClick function",name:"onClick",required:!0,type:{name:"(event: UIEvent<HTMLElement, UIEvent>) => void"}}}}}catch{}var he={},be=Object.defineProperty,L=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,V=(e,a,t)=>a in e?be(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,Pe=(e,a)=>{for(var t in a||(a={}))ye.call(a,t)&&V(e,t,a[t]);if(L)for(var t of L(a))_e.call(a,t)&&V(e,t,a[t]);return e},we=JSON.parse('{"icon.title.chevron-right":"Pil til høyre"}'),Ne=JSON.parse('{"icon.title.chevron-right":"Rightward arrow"}'),xe=JSON.parse('{"icon.title.chevron-right":"Nuoli oikealle"}'),J=["en","nb","fi","da","sv"],H="en",Se=()=>{let e;switch(he.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},U=()=>{var e;const a=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return a.includes("finn")?"nb":a.includes("tori")?"fi":a.includes("blocket")?"sv":a.includes("dba")?"da":H},y=e=>J.find(a=>e===a||e.toLowerCase().includes(a))||U();function Ce(){var e;if(typeof window>"u"){const a=Se();return y(a)}try{const a=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,t=U();return J.includes(a)?y(a??t):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),y(t))}catch(a){return console.warn("could not detect locale, falling back to source locale",a),H}}var ke=(e,a,t,n)=>e==="nb"?t:e==="fi"?n:a,$e=(e,a,t)=>{const n=Ce(),i=ke(n,e,a,t);o.load(n,i),o.activate(n)};$e(Ne,we,xe);var Oe=o.t({message:"Rightward arrow",id:"icon.title.chevron-right",comment:"Title for chevron-right icon"}),je=e=>c.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Oe}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.5 13.75 5.5-5.5-5.5-5.5"></path>`}},e)),Ie=je;const S=c.forwardRef(({children:e,className:a,...t},n)=>{const{currentPage:i,lastPage:l}=v();if(i>=l)return null;const u=t["aria-label"]??o._({id:"pagination.aria.next-page",message:"Next page",comment:"Default screenreader message for next page button in the pagination component"}),d=e??o._({id:"pagination.button.next-page",message:"Next page",comment:"Default message for next page button in the pagination component"});return r.jsxs(r.Fragment,{children:[i<=1&&r.jsx(Y,{link:!0,...t,ref:n,rel:"next nofollow",className:m(s.firstPageButton,a),children:r.jsx("span",{className:s.firstPageLabel,children:d})}),r.jsx("a",{"aria-label":u,...t,ref:n,rel:"next nofollow",role:"button",className:m(a,s.button,s.icon),children:r.jsx(Ie,{})})]})});try{S.displayName="NextPage",S.__docgenInfo={description:"",displayName:"NextPage",props:{"aria-label":{defaultValue:{value:"Next page"},description:"",name:"aria-label",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Butto label to render on mobile",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS class for the element.",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"The href for the anchor element.",name:"href",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"Additional CSS styles for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"onClick function",name:"onClick",required:!0,type:{name:"(event: UIEvent<HTMLElement, UIEvent>) => void"}}}}}catch{}const C=c.forwardRef(({page:e=0,className:a,currentPage:t,...n},i)=>{if(e<1)return null;const l=e===t,u=n["aria-label"]??o._({id:"pagination.aria.page",message:"Page {currentPage}",values:{currentPage:t},comment:"Default screenreader message for page button in the pagination component"});return r.jsx("a",{"aria-label":u,...n,ref:i,rel:"nofollow",role:"button","aria-current":l?"page":void 0,className:m(a,s.button,[l?s.active:s.notActive]),children:e})});try{C.displayName="Page",C.__docgenInfo={description:"",displayName:"Page",props:{"aria-label":{defaultValue:{value:"Page ${page}"},description:"",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class for the element.",name:"className",required:!1,type:{name:"string"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"The href for the anchor element.",name:"href",required:!0,type:{name:"string"}},page:{defaultValue:{value:"0"},description:"",name:"page",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"Additional CSS styles for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"onClick function",name:"onClick",required:!0,type:{name:"(event: UIEvent<HTMLElement, UIEvent>) => void"}}}}}catch{}const k=c.forwardRef(({children:e,numPages:a=7,className:t,...n},i)=>{const{currentPage:l,lastPage:u}=v(),d=Math.max(l-3,0),p=Math.min(d+a,u),g=Array.from(Array(p-d).keys()).map((f,Q)=>d+Q+1);return r.jsx("div",{...n,className:m(s.pages,t),ref:i,children:g.map(f=>c.cloneElement(e(f),{key:f,page:f,currentPage:l}))})});try{k.displayName="Pages",k.__docgenInfo={description:"",displayName:"Pages",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},numPages:{defaultValue:{value:"7"},description:"",name:"numPages",required:!1,type:{name:"number"}}}}}catch{}var Le={},Ve=Object.defineProperty,E=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,q=(e,a,t)=>a in e?Ve(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,Te=(e,a)=>{for(var t in a||(a={}))Ee.call(a,t)&&q(e,t,a[t]);if(E)for(var t of E(a))qe.call(a,t)&&q(e,t,a[t]);return e},Ae=JSON.parse('{"icon.title.chevron-left":"Pil til venstre"}'),Be=JSON.parse('{"icon.title.chevron-left":"Leftward arrow"}'),Re=JSON.parse('{"icon.title.chevron-left":"Nuoli vasemmalle"}'),K=["en","nb","fi","da","sv"],G="en",Me=()=>{let e;switch(Le.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},z=()=>{var e;const a=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return a.includes("finn")?"nb":a.includes("tori")?"fi":a.includes("blocket")?"sv":a.includes("dba")?"da":G},_=e=>K.find(a=>e===a||e.toLowerCase().includes(a))||z();function De(){var e;if(typeof window>"u"){const a=Me();return _(a)}try{const a=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,t=z();return K.includes(a)?_(a??t):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),_(t))}catch(a){return console.warn("could not detect locale, falling back to source locale",a),G}}var Fe=(e,a,t,n)=>e==="nb"?t:e==="fi"?n:a,Je=(e,a,t)=>{const n=De(),i=Fe(n,e,a,t);o.load(n,i),o.activate(n)};Je(Be,Ae,Re);var He=o.t({message:"Leftward arrow",id:"icon.title.chevron-left",comment:"Title for chevron-left icon"}),Ue=e=>c.createElement("svg",Te({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${He}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 13.75 5 8.25l5.5-5.5"></path>`}},e)),Ke=Ue;const $=c.forwardRef(({className:e,...a},t)=>{const{currentPage:n}=v();if(n<=1)return null;const i=o._({id:"pagination.aria.prev-page",message:"Previous page",comment:"Default screenreader message for previous page button in the pagination component"});return r.jsx("a",{"aria-label":i,...a,ref:t,className:m(e,s.button,s.icon),rel:"prev nofollow",role:"button",children:r.jsx(Ke,{})})});try{$.displayName="PrevPage",$.__docgenInfo={description:"",displayName:"PrevPage",props:{"aria-label":{defaultValue:{value:"Previous page"},description:"",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class for the element.",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"The href for the anchor element.",name:"href",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"Additional CSS styles for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"onClick function",name:"onClick",required:!0,type:{name:"(event: UIEvent<HTMLElement, UIEvent>) => void"}}}}}catch{}const O=c.forwardRef(({currentPage:e,numPages:a,lastPage:t,createHref:n,className:i,onChange:l,...u},d)=>{if(X(Z,ae,ee),!n)throw new TypeError("createHref is undefined");const p=g=>f=>{l&&(f.preventDefault(),l(g))};return r.jsxs(w,{...u,ref:d,currentPage:e,lastPage:t,className:i,children:[r.jsx(x,{href:n(1),onClick:p(1)}),r.jsx($,{href:n(e-1),onClick:p(e-1)}),r.jsx(k,{numPages:a,children:g=>r.jsx(C,{href:n(g),onClick:p(g)})}),r.jsx(N,{}),r.jsx(S,{href:n(e+1),onClick:p(e+1)})]})});try{O.displayName="Pagination",O.__docgenInfo={description:"",displayName:"Pagination",props:{className:{defaultValue:null,description:"Additional CSS class for the container.",name:"className",required:!1,type:{name:"string"}},createHref:{defaultValue:null,description:"Given a page number, should return a valid href string.",name:"createHref",required:!0,type:{name:"(page: number) => string"}},currentPage:{defaultValue:null,description:"The current page number. Adjusted so it's never below `1`, and never above `lastPage`.",name:"currentPage",required:!0,type:{name:"number"}},numPages:{defaultValue:null,description:"The number of pages to show.",name:"numPages",required:!1,type:{name:"number"}},lastPage:{defaultValue:null,description:"The number of the last page.",name:"lastPage",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"Handler that is called with the page number to navigate to. `event.preventDefault` is called for you. Fallbacks to default browser behavior if undefined.",name:"onChange",required:!1,type:{name:"((page: number) => void)"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ea={title:"Navigation/Pagination"},P=({initialPage:e=1,lastPage:a=30,...t})=>{const[n,i]=W.useState(e);return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{textAlign:"center",marginTop:"50px"},children:["currentPage: ",n,", lastPage: ",a]}),r.jsx(O,{...t,currentPage:n,numPages:3,lastPage:a,createHref:l=>`?page=${l}`,onChange:l=>i(l)})]})},h=()=>r.jsxs(r.Fragment,{children:[r.jsx(P,{initialPage:1,lastPage:10,"aria-labelledby":"pagination-1"}),r.jsx(P,{initialPage:10,lastPage:20,"aria-labelledby":"pagination-2"}),r.jsx(P,{initialPage:30,lastPage:30,"aria-labelledby":"pagination-3"})]});var T,A,B;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`() => <>
    <Example initialPage={1} lastPage={10} aria-labelledby="pagination-1" />
    <Example initialPage={10} lastPage={20} aria-labelledby="pagination-2" />
    <Example initialPage={30} lastPage={30} aria-labelledby="pagination-3" />
  </>`,...(B=(A=h.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const aa=["Normal"];export{h as Normal,aa as __namedExportsOrder,ea as default};