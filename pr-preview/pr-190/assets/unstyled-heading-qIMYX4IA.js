import{j as i,y as m,z as r,A as P,B as j}from"./index-Gxlyw2hQ.js";import{R as d,r as c}from"./index-eK40FDle.js";import{r as o}from"./index.m-0-FAh1ao.js";import{I as N}from"./item-JlvXiD2w.js";import{u as T}from"./useId-FMy5KOLz.js";import{c as R}from"./close-16-vO5FIqKW.js";import{i as p}from"./index-0JAKyHEX.js";function h({children:e,radio:a,checkbox:t,value:l,...n}){const s=T(),u=a?"radio":"checkbox";return a||t?i.jsx(N,{labelClassName:o(n.labelClassName),className:m.toggle,type:u,controlled:!1,onChange:n.onClick?n.onClick:()=>{},value:l,name:`${n.name||s}:toggle`,children:e}):d.createElement(n.href?"a":"button",{...n,className:o(m.buttonOrLink,n.className),type:n.href?void 0:n.type||"button"},i.jsxs(i.Fragment,{children:[i.jsx("span",{className:m.buttonOrLinkStretch,"aria-hidden":"true"}),e]}))}try{h.displayName="Clickable",h.__docgenInfo={description:"",displayName:"Clickable",props:{radio:{defaultValue:null,description:"Passes radio type to the underlying toggle",name:"radio",required:!1,type:{name:"boolean"}},checkbox:{defaultValue:null,description:"Passes checkbox type to the underlying toggle",name:"checkbox",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Value of the dead toggle
Sets or retrieves the default or selected value of the control.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/value)`,name:"value",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Clickable element children",name:"children",required:!0,type:{name:"string | Element | Element[]"}},href:{defaultValue:null,description:`Redirect to url on click
If passed, clickable renders as an anchor tag allowing you to pass properties such as target, rel, etc.
Returns the hyperlink's URL.

Can be set, to change the URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/href)`,name:"href",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"Additional classnames to the toggle label",name:"labelClassName",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}function y(e){const a=e.radio?"radio":"checkbox",t=o(e.labelClassName,{[r.label]:!0,[r.focusable]:!0,[r.noContent]:!0,[`${r.radio} ${r.labelRadioBorder} ${r.radioChecked}`]:e.radio,[`${r.checkbox} ${r.labelCheckboxBorder} ${r.checkboxChecked}`]:e.checkbox,[r.icon]:e.checkbox}),l=o({[r.input]:!0,[r.a11y]:!0,[r.deadToggleInput]:!0}),n={[r.wrapper]:!0,[r.deadToggleWrapper]:!0};return i.jsx("div",{className:o(e.className,n),"aria-hidden":"true",children:i.jsx(N,{type:a,className:l,labelClassName:t,name:"dead-toggle",controlled:!0,onChange:()=>{},value:e.value,checked:e.checked})})}try{y.displayName="DeadToggle",y.__docgenInfo={description:"",displayName:"DeadToggle",props:{radio:{defaultValue:null,description:"Passes radio type to the underlying toggle",name:"radio",required:!1,type:{name:"boolean"}},checkbox:{defaultValue:null,description:"Passes checkbox type to the underlying toggle",name:"checkbox",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Value for the input",name:"value",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"Whether the toggle is checked",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional classnames to the toggle wrapper",name:"className",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"Additional classnames to the toggle label",name:"labelClassName",required:!1,type:{name:"string"}}}}}catch{}var S={},M=Object.defineProperty,b=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,v=(e,a,t)=>a in e?M(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,F=(e,a)=>{for(var t in a||(a={}))O.call(a,t)&&v(e,t,a[t]);if(b)for(var t of b(a))D.call(a,t)&&v(e,t,a[t]);return e},H=JSON.parse('{"icon.title.search":"Forstørrelsesglass"}'),$=JSON.parse('{"icon.title.search":"Magnifying glass"}'),B=JSON.parse('{"icon.title.search":"Suurennuslasi"}'),U=["en","nb","fi"],w="en",_=e=>U.find(a=>e===a||e.toLowerCase().includes(a))||w;function W(){if(typeof window>"u"){const e=S.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return _(e)}try{const e=document.documentElement.lang;return _(e)}catch(e){return console.warn("could not detect locale, falling back to source locale",e),w}}var z=(e,a,t,l)=>e==="nb"?t:e==="fi"?l:a,J=(e,a,t)=>{const l=W(),n=z(l,e,a,t);p.load(l,n),p.activate(l)};J($,H,B);var G=p.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"}),Z=e=>d.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${G}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.796 11.803A5.684 5.684 0 1 0 4.349 1.341a5.684 5.684 0 0 0 4.447 10.462ZM11 11l4 4"></path>`}},e)),K=Z;function x(e){const a=e.prefix?P:j;return d.createElement(e.label?"div":"button",{"aria-label":e.label?void 0:e["aria-label"],type:e.search?"submit":e.clear?"reset":void 0,onClick:e.onClick,className:o({[a.wrapper]:!0,[a.wrapperWithLabel]:e.label,[a.wrapperWithIcon]:!e.label})},i.jsxs(i.Fragment,{children:[e.clear&&i.jsx(R,{}),e.search&&i.jsx(K,{}),e.label&&i.jsx("span",{className:a.label,children:e.label})]}))}try{x.displayName="Affix",x.__docgenInfo={description:"",displayName:"Affix",props:{"aria-label":{defaultValue:null,description:"Defines a string value that labels the affix element.",name:"aria-label",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"Affix added at the beginning of input",name:"prefix",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"Affix added at the end of input",name:"suffix",required:!1,type:{name:"boolean"}},clear:{defaultValue:null,description:"Displays a clear icon",name:"clear",required:!1,type:{name:"boolean"}},search:{defaultValue:null,description:"Displays a search icon",name:"search",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Displays a string",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler paired with clear or search",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const g=typeof window<"u";let E=!0;if(g){const e=window.matchMedia("(prefers-reduced-motion: reduce)"),a=({matches:t})=>E=!t;e.addEventListener&&e.addEventListener("change",a),a(e)}const q=e=>{e.style.transition=null,e.style.backfaceVisibility=null,e.style.overflow=null},V=e=>{const a=E?"var(--f-expansion-duration, 0.3s)":"0.01s";e.style.transition=`height ${a}`,e.style.backfaceVisibility="hidden",e.style.overflow="hidden"},Q=(e,a)=>()=>{e.style.height="auto",e.style.overflow=null,a&&a()},X=e=>()=>{e&&e()},Y=(e,a)=>{const t=(()=>{if(!a)return new Promise(s=>{a=s})})(),l=Q(e,a);q(e),e.style.height="auto";let n=e.scrollHeight;if(g&&requestAnimationFrame(()=>{e.addEventListener("transitionend",l,{once:!0}),e.style.height="0px",e.style.transitionTimingFunction="ease-out",V(e),requestAnimationFrame(()=>e.style.height=n+"px")}),t)return t},ee=(e,a)=>{const t=(()=>{if(!a)return new Promise(s=>{a=s})})(),l=X(a);q(e);let n=e.scrollHeight;if(g&&requestAnimationFrame(()=>{e.addEventListener("transitionend",l,{once:!0}),e.style.height=n+"px",e.style.transitionTimingFunction="ease-in",V(e),requestAnimationFrame(()=>e.style.height="0px")}),t)return t};function k({show:e,children:a}){const[t,l]=c.useState(!e),n=c.useRef(null),s=c.useRef(!1),u=c.useRef(e===!0);function A(f){ee(f,()=>l(!0))}function I(f){Y(f)}e&&t&&l(!1),c.useEffect(()=>{if(!s.current){s.current=!0;return}n.current&&(e?I(n.current):A(n.current))},[e]);const L=u.current?void 0:"overflow-hidden h-0";return i.jsx("div",{className:L,ref:n,"aria-hidden":e?void 0:!0,children:t?null:a})}try{k.displayName="ExpandTransition",k.__docgenInfo={description:"",displayName:"ExpandTransition",props:{show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"Boolean"}}}}}catch{}const C=({level:e,children:a,...t})=>{if(!e)return i.jsx(d.Fragment,{children:a});const l=`h${e}`;return i.jsx(l,{style:{margin:0,fontWeight:"unset",fontSize:"unset",lineHeight:"unset"},...t,children:a})};try{C.displayName="UnstyledHeading",C.__docgenInfo={description:"",displayName:"UnstyledHeading",props:{level:{defaultValue:null,description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}}}}}catch{}export{x as A,h as C,y as D,k as E,C as U};
//# sourceMappingURL=unstyled-heading-qIMYX4IA.js.map