import{j as e,l as _,w as c,i as L}from"./index-b4egwufL.js";import{r as o}from"./index-Ainc_9Qe.js";import{a as Re,i as je}from"./i18n-G6_82uWZ.js";import{r as I}from"./index.m-0-FAh1ao.js";import{a as P,u as Ee}from"./useId-fJNbyo74.js";function Fe({ref:a,value:l,minimumRows:n,maximumRows:i}){const m=o.useRef(-1/0),u=o.useRef(1/0),h=l!==void 0;function f(r){r.style.setProperty("height","auto");let s=Math.max(m.current,r.scrollHeight);s=Math.min(u.current,s),r.style.setProperty("height",s+"px")}P(()=>{if(a.current&&(n||i)){const r=getComputedStyle(a.current),s=parseFloat(r.getPropertyValue("line-height")),F=parseFloat(r.getPropertyValue("padding-top")),x=parseFloat(r.getPropertyValue("padding-bottom")),N=parseFloat(r.getPropertyValue("border-bottom-width")),d=F+x+N;n&&(m.current=s*n+d),i&&(u.current=s*i+d)}},[a,i,n]),P(()=>{a.current&&f(a.current)},[a,l]),o.useEffect(()=>{if(!a.current&&h)return;const r=a.current,s=()=>{f(r)};return r.addEventListener("input",s),()=>r.removeEventListener("input",s)},[a,h])}const Ne=JSON.parse('{"textarea.label.optional":"(valgfritt)"}'),He=JSON.parse('{"textarea.label.optional":"(optional)"}'),Oe=JSON.parse('{"textarea.label.optional":"(valinnainen)"}'),t=o.forwardRef((a,l)=>{const{className:n,disabled:i,error:m,helpText:u,id:h,invalid:f,label:r,maximumRows:s,minimumRows:F,readOnly:x,style:N,value:d,optional:we,placeholder:C,...Ae}=a;Re(He,Ne,Oe);const H=Ee(h),M=o.useRef(null),b=u?`${H}__hint`:void 0,p=f??m;return Fe({ref:M,value:d,maximumRows:s,minimumRows:F}),e.jsxs("div",{className:n,style:N,children:[r&&e.jsxs("label",{htmlFor:H,className:I({[_.label]:!0,[_.labelInvalid]:p}),children:[r,we&&e.jsx("span",{className:_.optional,children:je._({id:"textarea.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),e.jsx("textarea",{className:I({[`${c.default} ${c.textArea}`]:!0,[c.placeholder]:!!C,[c.invalid]:p,[c.disabled]:i,[c.readOnly]:x}),...Ae,placeholder:C,"aria-describedby":b,"aria-errormessage":p&&b?b:void 0,"aria-invalid":p,disabled:i,id:H,ref:O=>{M.current=O,l&&(typeof l=="function"?l(O):l.current=O)},readOnly:x,value:d}),u&&e.jsx("div",{className:I({[L.helpText]:!0,[L.helpTextInvalid]:p}),id:b,children:u})]})});try{t.displayName="TextArea",t.__docgenInfo={description:"A textarea component that automatically resizes as content changes.",displayName:"TextArea",props:{autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether the input is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.\n@deprecated use `invalid` instead.",name:"error",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",required:!1,type:{name:"boolean"}},helpText:{defaultValue:null,description:"The content to display as the help text.",name:"helpText",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The content to display as the label.",name:"label",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLTextAreaElement>) => void)"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},maximumRows:{defaultValue:null,description:"Maximum number of text rows upto which the input can grow.",name:"maximumRows",required:!1,type:{name:"number"}},minimumRows:{defaultValue:null,description:"Minimum number of text rows to show for the input.",name:"minimumRows",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Text hint that occupies the text input when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"required",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Whether to show optional text",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}const Pe={title:"Forms/TextArea"},g=()=>e.jsx(t,{label:"Description",helpText:"Hint message"}),v=()=>e.jsx(t,{label:"Description",defaultValue:"Test"}),y=()=>{const[a,l]=o.useState("Test");return e.jsx(t,{label:"Description",value:a,onChange:n=>l(n.target.value),minimumRows:4,maximumRows:6})},T=()=>{const a=o.useRef(null);return o.useEffect(()=>{console.log(a.current)}),e.jsx(t,{label:"Description",value:"hey",ref:a})},V=()=>e.jsx(t,{label:"Description",required:!0}),D=()=>e.jsx(t,{label:"Description",placeholder:"Lorem ipsum"}),S=()=>e.jsx(t,{label:"Description",readOnly:!0}),q=()=>e.jsx(t,{label:"Description",autoFocus:!0}),w=()=>e.jsx(t,{label:"Description",disabled:!0}),A=()=>e.jsxs("div",{className:"flex flex-col space-y-48",children:[e.jsx(t,{label:"Description",invalid:!0}),e.jsx(t,{label:"Description",invalid:!0,helpText:"Invalid text"})]}),R=()=>e.jsx(t,{label:"Description",minimumRows:3}),j=()=>e.jsx(t,{label:"Description",maximumRows:3}),E=()=>e.jsx(t,{label:"Description",optional:!0});var W,$,z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:'() => <TextArea label="Description" helpText="Hint message" />',...(z=($=g.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var U,k,B;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:'() => <TextArea label="Description" defaultValue="Test" />',...(B=(k=v.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var J,G,K;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('Test');
  return <TextArea label="Description" value={value} onChange={e => setValue(e.target.value)} minimumRows={4} maximumRows={6} />;
}`,...(K=(G=y.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,Y;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    console.log(ref.current);
  });
  return <TextArea label="Description" value="hey" ref={ref} />;
}`,...(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:'() => <TextArea label="Description" required />',...(ae=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,se;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:'() => <TextArea label="Description" placeholder="Lorem ipsum" />',...(se=(re=D.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,ne,oe;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:'() => <TextArea label="Description" readOnly />',...(oe=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,ue,ce;q.parameters={...q.parameters,docs:{...(ie=q.parameters)==null?void 0:ie.docs,source:{originalSource:'() => <TextArea label="Description" autoFocus />',...(ce=(ue=q.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,pe,me;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:'() => <TextArea label="Description" disabled />',...(me=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,fe,xe;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`() => <div className="flex flex-col space-y-48">
    <TextArea label="Description" invalid />
    <TextArea label="Description" invalid helpText="Invalid text" />
  </div>`,...(xe=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var be,ge,ve;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:'() => <TextArea label="Description" minimumRows={3} />',...(ve=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var ye,Te,Ve;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:'() => <TextArea label="Description" maximumRows={3} />',...(Ve=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:Ve.source}}};var De,Se,qe;E.parameters={...E.parameters,docs:{...(De=E.parameters)==null?void 0:De.docs,source:{originalSource:'() => <TextArea label="Description" optional />',...(qe=(Se=E.parameters)==null?void 0:Se.docs)==null?void 0:qe.source}}};const We=["standard","valueUncontrolled","ValueControlled","TextFieldWithRef","required","placeholder","readOnly","autoFocus","disabled","invalid","minimumRows3","maximumRows3","optional"];export{T as TextFieldWithRef,y as ValueControlled,We as __namedExportsOrder,q as autoFocus,Pe as default,w as disabled,A as invalid,j as maximumRows3,R as minimumRows3,E as optional,D as placeholder,S as readOnly,V as required,g as standard,v as valueUncontrolled};
//# sourceMappingURL=TextArea.stories-0LJ3INql.js.map
