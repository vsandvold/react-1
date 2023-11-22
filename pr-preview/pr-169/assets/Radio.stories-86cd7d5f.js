import{j as t}from"./index-a71f5096.js";import{T as r}from"./component-9ee3c024.js";import"./index-b75aab2a.js";import"./i18n-ff9a8b3f.js";import"./useId-906286da.js";import"./index.m-73ef1fbe.js";import"./item-4067f961.js";const _={title:"Forms/Toggle/Radio"},o=[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"}],l=()=>t.jsx(r,{type:"radio",options:o,onChange:e=>console.log(e)}),s=()=>t.jsx(r,{type:"radio",title:"Favorite color",options:o,onChange:e=>console.log(e)}),a=()=>t.jsx(r,{optional:!0,type:"radio",title:"Favorite color",options:o,onChange:e=>console.log(e)}),n=()=>t.jsx(r,{type:"radio",title:"Favorite color",helpText:"Choose your absolute favorite color",options:o,onChange:e=>console.log(e)}),c=()=>t.jsx(r,{type:"radio",title:"Favorite color",helpText:"No way you like blue",invalid:!0,selected:[o[1]],options:o,onChange:e=>console.log(e)}),i=()=>t.jsx(r,{type:"radio",title:"Favorite color",helpText:"Last selected by default",selected:[o[o.length-1]],options:o,onChange:e=>console.log(e)}),p=()=>t.jsx(r,{type:"radio",title:"Favorite color",helpText:"Last selected by default",defaultSelected:[o[o.length-1]],options:o,onChange:e=>console.log(e)});var d,u,g;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Toggle type="radio" options={options} onChange={selected => console.log(selected)} />;
}`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,h,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <Toggle type="radio" title="Favorite color" options={options} onChange={selected => console.log(selected)} />;
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,v,x;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Toggle optional type="radio" title="Favorite color" options={options} onChange={selected => console.log(selected)} />;
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,f,F;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <Toggle type="radio" title="Favorite color" helpText="Choose your absolute favorite color" options={options} onChange={selected => console.log(selected)} />;
}`,...(F=(f=n.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var S,b,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Toggle type="radio" title="Favorite color" helpText="No way you like blue" invalid selected={[options[1]]} options={options} onChange={selected => console.log(selected)} />;
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var O,D,L;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Toggle type="radio" title="Favorite color" helpText="Last selected by default" selected={[options[options.length - 1]]} options={options} onChange={selected => console.log(selected)} />;
}`,...(L=(D=i.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var R,k,w;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Toggle type="radio" title="Favorite color" helpText="Last selected by default" defaultSelected={[options[options.length - 1]]} options={options} onChange={selected => console.log(selected)} />;
}`,...(w=(k=p.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const B=["MultipleOptions","WithTitle","Optional","HelpText","Invalid","SelectedDefaultControlled","SelectedDefaultUncontrolled"];export{n as HelpText,c as Invalid,l as MultipleOptions,a as Optional,i as SelectedDefaultControlled,p as SelectedDefaultUncontrolled,s as WithTitle,B as __namedExportsOrder,_ as default};
//# sourceMappingURL=Radio.stories-86cd7d5f.js.map
