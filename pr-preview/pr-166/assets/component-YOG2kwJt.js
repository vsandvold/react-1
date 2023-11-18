import{j as t,l as o,w as e,i as y}from"./index-b4egwufL.js";import{r as L,R as i}from"./index-Ainc_9Qe.js";import{a as w,i as H}from"./i18n-G6_82uWZ.js";import{r as u}from"./index.m-0-FAh1ao.js";import{u as W}from"./useId-fJNbyo74.js";const _=JSON.parse('{"textfield.label.optional":"(valgfritt)"}'),F=JSON.parse('{"textfield.label.optional":"(optional)"}'),I=JSON.parse('{"textfield.label.optional":"(vapaaehtoinen)"}'),v=L.forwardRef((r,x)=>{const{className:g,disabled:p,id:T,children:m,invalid:q,error:V,helpText:d,label:h,readOnly:c,type:S="text",style:N,optional:M,...E}=r;w(F,_,I);const s=W(T),n=d?`${s}__hint`:void 0,a=q||V,f=i.Children.toArray(m).find(l=>i.isValidElement(l)&&l.props.suffix),b=i.Children.toArray(m).find(l=>i.isValidElement(l)&&l.props.prefix);return t.jsxs("div",{className:g,style:N,children:[h&&t.jsxs("label",{htmlFor:s,className:u({[o.label]:!0,[o.labelInvalid]:a}),children:[h,M&&t.jsx("span",{className:o.optional,children:H._({id:"textfield.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),t.jsxs("div",{className:e.wrapper,children:[b,t.jsx("input",{className:u({[e.default]:!0,[e.invalid]:a,[e.disabled]:p,[e.readOnly]:c,[e.placeholder]:!!r.placeholder,[e.suffix]:!!f,[e.prefix]:!!b}),...E,"aria-describedby":n,"aria-errormessage":a&&n?n:void 0,"aria-invalid":a,disabled:p,id:s,readOnly:c,ref:x,type:S}),f]}),d&&t.jsx("div",{className:u({[y.helpText]:!0,[y.helpTextInvalid]:a}),id:n,children:d})]})});try{v.displayName="TextField",v.__docgenInfo={description:"",displayName:"TextField",props:{autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class for the container.",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string | (string & readonly string[])"}},disabled:{defaultValue:null,description:"Whether the input is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.\n@deprecated use `invalid` instead.",name:"error",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",required:!1,type:{name:"boolean"}},helpText:{defaultValue:null,description:"The content to display as the help text.",name:"helpText",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The content to display as the label.",name:"label",required:!1,type:{name:"ReactNode"}},max:{defaultValue:null,description:'Standard `input` max attribute, to be used with `type="number".` See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmax).',name:"max",required:!1,type:{name:"string | number"}},min:{defaultValue:null,description:'Standard `input` min attribute, to be used with `type="number".` See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmin).',name:"min",required:!1,type:{name:"string | number"}},maxLength:{defaultValue:null,description:"The maximum number of characters supported by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).",name:"maxLength",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"The minimum number of characters required by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).",name:"minLength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},pattern:{defaultValue:null,description:"Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).",name:"pattern",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Text hint that occupies the text input when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"required",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}},type:{defaultValue:null,description:"The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"password"'}]}},children:{defaultValue:null,description:"For affix use",name:"children",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Mark label to indicate that filling in this field is optional",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}export{v as T};
//# sourceMappingURL=component-YOG2kwJt.js.map
