import{R as p}from"./index-b75aab2a.js";import{i as a}from"./index-5bf8ef4b.js";var u=Object.defineProperty,n=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&s(e,r,t[r]);if(n)for(var r of n(t))d.call(t,r)&&s(e,r,t[r]);return e},v=JSON.parse('{"icon.title.close":"Kryss"}'),g=JSON.parse('{"icon.title.close":"Cross"}'),_=JSON.parse('{"icon.title.close":"Rasti"}'),w=["en","nb","fi"],c="en",l=e=>w.find(t=>e===t||e.toLowerCase().includes(t))||c;function h(){if(typeof window>"u"){const e={}.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return l(e)}try{const e=document.documentElement.lang;return l(e)}catch(e){return console.warn("could not detect locale, falling back to source locale",e),c}}var O=(e,t,r,o)=>e==="nb"?r:e==="fi"?o:t,y=(e,t,r)=>{const o=h(),i=O(o,e,t,r);a.load(o,i),a.activate(o)};y(g,v,_);var L=a.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"}),P=e=>p.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${L}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9M3.5 3.5l9 9"></path>`}},e)),N=P;export{N as c};
//# sourceMappingURL=close-16-43675e2b.js.map
