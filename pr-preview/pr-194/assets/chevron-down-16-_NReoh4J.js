import{R as d}from"./index-pMVFT59f.js";import{i as n}from"./index-XwI9xEnt.js";var v={},p=Object.defineProperty,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&l(e,t,r[t]);if(a)for(var t of a(r))w.call(r,t)&&l(e,t,r[t]);return e},m=JSON.parse('{"icon.title.chevron-down":"Nedoverpil"}'),_=JSON.parse('{"icon.title.chevron-down":"Downward arrow"}'),h=JSON.parse('{"icon.title.chevron-down":"Nuoli alaspäin"}'),g=["en","nb","fi"],i="en",s=e=>g.find(r=>e===r||e.toLowerCase().includes(r))||i;function O(){if(typeof window>"u"){const e=v.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return s(e)}try{const e=document.documentElement.lang;return s(e)}catch(e){return console.warn("could not detect locale, falling back to source locale",e),i}}var y=(e,r,t,o)=>e==="nb"?t:e==="fi"?o:r,L=(e,r,t)=>{const o=O(),c=y(o,e,r,t);n.load(o,c),n.activate(o)};L(_,m,h);var N=n.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"}),P=e=>d.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${N}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 5.5 8 11l5.5-5.5"></path>`}},e)),b=P;export{b as c};
