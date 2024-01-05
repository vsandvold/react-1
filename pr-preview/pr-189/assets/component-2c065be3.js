import{j as t,l as o,x as e,k as y}from"./index-b8083c12.js";import{r as w,R as r}from"./index-b75aab2a.js";import{a as L,i as H}from"./i18n-ff9a8b3f.js";import{r as u}from"./index.m-73ef1fbe.js";import{u as W}from"./useId-906286da.js";const _=JSON.parse('{"textfield.label.optional":"(valgfritt)"}'),F=JSON.parse('{"textfield.label.optional":"(optional)"}'),I=JSON.parse('{"textfield.label.optional":"(vapaaehtoinen)"}'),v=w.forwardRef((d,x)=>{const{className:g,disabled:p,id:T,children:m,invalid:q,error:V,helpText:s,label:h,readOnly:c,type:S="text",style:N,optional:M,...E}=d;L(F,_,I);const a=W(T),i=s?`${a}__hint`:void 0,l=q||V,f=r.Children.toArray(m).find(n=>r.isValidElement(n)&&n.props.suffix),b=r.Children.toArray(m).find(n=>r.isValidElement(n)&&n.props.prefix);return t.jsxs("div",{className:g,style:N,children:[t.jsx("style",{children:`
              div+#${a}, button+#${a} {
                padding-left:var(--w-prefix-width, 40px);
              }
            `}),h&&t.jsxs("label",{htmlFor:a,className:u({[o.label]:!0,[o.labelInvalid]:l}),children:[h,M&&t.jsx("span",{className:o.optional,children:H._({id:"textfield.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),t.jsxs("div",{className:e.wrapper,children:[b,t.jsx("input",{className:u({[e.default]:!0,[e.invalid]:l,[e.disabled]:p,[e.readOnly]:c,[e.placeholder]:!!d.placeholder,[e.suffix]:!!f,[e.prefix]:!!b}),...E,"aria-describedby":i,"aria-errormessage":l&&i?i:void 0,"aria-invalid":l,disabled:p,id:a,readOnly:c,ref:x,type:S}),f]}),s&&t.jsx("div",{className:u({[y.helpText]:!0,[y.helpTextInvalid]:l}),id:i,children:s})]})});try{v.displayName="TextField",v.__docgenInfo={description:"",displayName:"TextField",props:{autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class for the container.",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string | (string & readonly string[])"}},disabled:{defaultValue:null,description:"Whether the input is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.\n@deprecated use `invalid` instead.",name:"error",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",required:!1,type:{name:"boolean"}},helpText:{defaultValue:null,description:"The content to display as the help text.",name:"helpText",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The content to display as the label.",name:"label",required:!1,type:{name:"ReactNode"}},max:{defaultValue:null,description:'Standard `input` max attribute, to be used with `type="number".` See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmax).',name:"max",required:!1,type:{name:"string | number"}},min:{defaultValue:null,description:'Standard `input` min attribute, to be used with `type="number".` See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmin).',name:"min",required:!1,type:{name:"string | number"}},maxLength:{defaultValue:null,description:"The maximum number of characters supported by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).",name:"maxLength",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"The minimum number of characters required by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).",name:"minLength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},pattern:{defaultValue:null,description:"Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).",name:"pattern",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Text hint that occupies the text input when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"required",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}},type:{defaultValue:null,description:"The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"password"'}]}},children:{defaultValue:null,description:"For affix use",name:"children",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Mark label to indicate that filling in this field is optional",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}export{v as T};
//# sourceMappingURL=component-2c065be3.js.map
