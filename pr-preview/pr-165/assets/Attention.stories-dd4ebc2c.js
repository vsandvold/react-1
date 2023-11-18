import{b as S,j as u}from"./index-a71f5096.js";import{r as T,R as E}from"./index-b75aab2a.js";import{r as le}from"./index.m-73ef1fbe.js";import{a as tt,i as D}from"./i18n-ff9a8b3f.js";import{a as nt}from"./index-fd482ad2.js";import{B as ne}from"./component-8f6ca20d.js";import{B as oe}from"./component-3af07842.js";function _(e){return e.split("-")[0]}function ie(e){return e.split("-")[1]}function M(e){return["top","bottom"].includes(_(e))?"x":"y"}function he(e){return e==="y"?"height":"width"}function ge(e,t,n){let{reference:o,floating:r}=e;const a=o.x+o.width/2-r.width/2,l=o.y+o.height/2-r.height/2,i=M(t),s=he(i),h=o[s]/2-r[s]/2,f=i==="x";let c;switch(_(t)){case"top":c={x:a,y:o.y-r.height};break;case"bottom":c={x:a,y:o.y+o.height};break;case"right":c={x:o.x+o.width,y:l};break;case"left":c={x:o.x-r.width,y:l};break;default:c={x:o.x,y:o.y}}switch(ie(t)){case"start":c[i]-=h*(n&&f?-1:1);break;case"end":c[i]+=h*(n&&f?-1:1)}return c}const ot=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:l}=n,i=await(l.isRTL==null?void 0:l.isRTL(t));let s=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:h,y:f}=ge(s,o,i),c=o,p={},d=0;for(let m=0;m<a.length;m++){const{name:g,fn:b}=a[m],{x,y:v,data:R,reset:y}=await b({x:h,y:f,initialPlacement:o,placement:c,strategy:r,middlewareData:p,rects:s,platform:l,elements:{reference:e,floating:t}});h=x??h,f=v??f,p={...p,[g]:{...p[g],...R}},y&&d<=50&&(d++,typeof y=="object"&&(y.placement&&(c=y.placement),y.rects&&(s=y.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):y.rects),{x:h,y:f}=ge(s,c,i)),m=-1)}return{x:h,y:f,placement:c,strategy:r,middlewareData:p}};function qe(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function G(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function Fe(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:a,rects:l,elements:i,strategy:s}=e,{boundary:h="clippingAncestors",rootBoundary:f="viewport",elementContext:c="floating",altBoundary:p=!1,padding:d=0}=t,m=qe(d),g=i[p?c==="floating"?"reference":"floating":c],b=G(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(g)))==null||n?g:g.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(i.floating)),boundary:h,rootBoundary:f,strategy:s})),x=G(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:c==="floating"?{...l.floating,x:o,y:r}:l.reference,offsetParent:await(a.getOffsetParent==null?void 0:a.getOffsetParent(i.floating)),strategy:s}):l[c]);return{top:b.top-x.top+m.top,bottom:x.bottom-b.bottom+m.bottom,left:b.left-x.left+m.left,right:x.right-b.right+m.right}}const it=Math.min,rt=Math.max;function se(e,t,n){return rt(e,it(t,n))}const at=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:o=0}=e??{},{x:r,y:a,placement:l,rects:i,platform:s}=t;if(n==null)return{};const h=qe(o),f={x:r,y:a},c=M(l),p=ie(l),d=he(c),m=await s.getDimensions(n),g=c==="y"?"top":"left",b=c==="y"?"bottom":"right",x=i.reference[d]+i.reference[c]-f[c]-i.floating[d],v=f[c]-i.reference[c],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(n));let y=R?c==="y"?R.clientHeight||0:R.clientWidth||0:0;y===0&&(y=i.floating[d]);const V=x/2-v/2,L=h[g],H=y-m[d]-h[b],w=y/2-m[d]/2+V,A=se(L,w,H),O=(p==="start"?h[g]:h[b])>0&&w!==A&&i.reference[d]<=i.floating[d];return{[c]:f[c]-(O?w<L?L-w:H-w:0),data:{[c]:A,centerOffset:w-A}}}}),lt={left:"right",right:"left",bottom:"top",top:"bottom"};function Q(e){return e.replace(/left|right|bottom|top/g,t=>lt[t])}function st(e,t,n){n===void 0&&(n=!1);const o=ie(e),r=M(e),a=he(r);let l=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=Q(l)),{main:l,cross:Q(l)}}const ct={start:"end",end:"start"};function be(e){return e.replace(/start|end/g,t=>ct[t])}const ut=["top","right","bottom","left"];ut.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);const ft=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:o,middlewareData:r,rects:a,initialPlacement:l,platform:i,elements:s}=t,{mainAxis:h=!0,crossAxis:f=!0,fallbackPlacements:c,fallbackStrategy:p="bestFit",flipAlignment:d=!0,...m}=e,g=_(o),b=c||(g===l||!d?[Q(l)]:function(w){const A=Q(w);return[be(w),A,be(A)]}(l)),x=[l,...b],v=await Fe(t,m),R=[];let y=((n=r.flip)==null?void 0:n.overflows)||[];if(h&&R.push(v[g]),f){const{main:w,cross:A}=st(o,a,await(i.isRTL==null?void 0:i.isRTL(s.floating)));R.push(v[w],v[A])}if(y=[...y,{placement:o,overflows:R}],!R.every(w=>w<=0)){var V,L;const w=((V=(L=r.flip)==null?void 0:L.index)!=null?V:0)+1,A=x[w];if(A)return{data:{index:w,overflows:y},reset:{placement:A}};let O="bottom";switch(p){case"bestFit":{var H;const me=(H=y.map(F=>[F,F.overflows.filter(k=>k>0).reduce((k,et)=>k+et,0)]).sort((F,k)=>F[1]-k[1])[0])==null?void 0:H[0].placement;me&&(O=me);break}case"initialPlacement":O=l}if(o!==O)return{reset:{placement:O}}}return{}}}},ht=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:o}=t,r=await async function(a,l){const{placement:i,platform:s,elements:h}=a,f=await(s.isRTL==null?void 0:s.isRTL(h.floating)),c=_(i),p=ie(i),d=M(i)==="x",m=["left","top"].includes(c)?-1:1,g=f&&d?-1:1,b=typeof l=="function"?l(a):l;let{mainAxis:x,crossAxis:v,alignmentAxis:R}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...b};return p&&typeof R=="number"&&(v=p==="end"?-1*R:R),d?{x:v*g,y:x*m}:{x:x*m,y:v*g}}(t,e);return{x:n+r.x,y:o+r.y,data:r}}}};function dt(e){return e==="x"?"y":"x"}const pt=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:a=!0,crossAxis:l=!1,limiter:i={fn:b=>{let{x,y:v}=b;return{x,y:v}}},...s}=e,h={x:n,y:o},f=await Fe(t,s),c=M(_(r)),p=dt(c);let d=h[c],m=h[p];if(a){const b=c==="y"?"bottom":"right";d=se(d+f[c==="y"?"top":"left"],d,d-f[b])}if(l){const b=p==="y"?"bottom":"right";m=se(m+f[p==="y"?"top":"left"],m,m-f[b])}const g=i.fn({...t,[c]:d,[p]:m});return{...g,data:{x:g.x-n,y:g.y-o}}}}};function Ue(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function C(e){if(e==null)return window;if(!Ue(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function q(e){return C(e).getComputedStyle(e)}function N(e){return Ue(e)?"":e?(e.nodeName||"").toLowerCase():""}function Je(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function j(e){return e instanceof C(e).HTMLElement}function P(e){return e instanceof C(e).Element}function de(e){return typeof ShadowRoot>"u"?!1:e instanceof C(e).ShadowRoot||e instanceof ShadowRoot}function re(e){const{overflow:t,overflowX:n,overflowY:o}=q(e);return/auto|scroll|overlay|hidden/.test(t+o+n)}function mt(e){return["table","td","th"].includes(N(e))}function we(e){const t=/firefox/i.test(Je()),n=q(e);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"}function ze(){return!/^((?!chrome|android).)*safari/i.test(Je())}const xe=Math.min,W=Math.max,Z=Math.round;function I(e,t,n){var o,r,a,l;t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect();let s=1,h=1;t&&j(e)&&(s=e.offsetWidth>0&&Z(i.width)/e.offsetWidth||1,h=e.offsetHeight>0&&Z(i.height)/e.offsetHeight||1);const f=P(e)?C(e):window,c=!ze()&&n,p=(i.left+(c&&(o=(r=f.visualViewport)==null?void 0:r.offsetLeft)!=null?o:0))/s,d=(i.top+(c&&(a=(l=f.visualViewport)==null?void 0:l.offsetTop)!=null?a:0))/h,m=i.width/s,g=i.height/h;return{width:m,height:g,top:d,right:p+m,bottom:d+g,left:p,x:p,y:d}}function B(e){return(t=e,(t instanceof C(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function ae(e){return P(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ke(e){return I(B(e)).left+ae(e).scrollLeft}function gt(e,t,n){const o=j(t),r=B(t),a=I(e,o&&function(s){const h=I(s);return Z(h.width)!==s.offsetWidth||Z(h.height)!==s.offsetHeight}(t),n==="fixed");let l={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if(o||!o&&n!=="fixed")if((N(t)!=="body"||re(r))&&(l=ae(t)),j(t)){const s=I(t,!0);i.x=s.x+t.clientLeft,i.y=s.y+t.clientTop}else r&&(i.x=Ke(r));return{x:a.left+l.scrollLeft-i.x,y:a.top+l.scrollTop-i.y,width:a.width,height:a.height}}function Xe(e){return N(e)==="html"?e:e.assignedSlot||e.parentNode||(de(e)?e.host:null)||B(e)}function ye(e){return j(e)&&getComputedStyle(e).position!=="fixed"?e.offsetParent:null}function ce(e){const t=C(e);let n=ye(e);for(;n&&mt(n)&&getComputedStyle(n).position==="static";)n=ye(n);return n&&(N(n)==="html"||N(n)==="body"&&getComputedStyle(n).position==="static"&&!we(n))?t:n||function(o){let r=Xe(o);for(de(r)&&(r=r.host);j(r)&&!["html","body"].includes(N(r));){if(we(r))return r;r=r.parentNode}return null}(e)||t}function ve(e){if(j(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=I(e);return{width:t.width,height:t.height}}function Ye(e){const t=Xe(e);return["html","body","#document"].includes(N(t))?e.ownerDocument.body:j(t)&&re(t)?t:Ye(t)}function Ge(e,t){var n;t===void 0&&(t=[]);const o=Ye(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),a=C(o),l=r?[a].concat(a.visualViewport||[],re(o)?o:[]):o,i=t.concat(l);return r?i:i.concat(Ge(l))}function Re(e,t,n){return t==="viewport"?G(function(o,r){const a=C(o),l=B(o),i=a.visualViewport;let s=l.clientWidth,h=l.clientHeight,f=0,c=0;if(i){s=i.width,h=i.height;const p=ze();(p||!p&&r==="fixed")&&(f=i.offsetLeft,c=i.offsetTop)}return{width:s,height:h,x:f,y:c}}(e,n)):P(t)?function(o,r){const a=I(o,!1,r==="fixed"),l=a.top+o.clientTop,i=a.left+o.clientLeft;return{top:l,left:i,x:i,y:l,right:i+o.clientWidth,bottom:l+o.clientHeight,width:o.clientWidth,height:o.clientHeight}}(t,n):G(function(o){var r;const a=B(o),l=ae(o),i=(r=o.ownerDocument)==null?void 0:r.body,s=W(a.scrollWidth,a.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),h=W(a.scrollHeight,a.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let f=-l.scrollLeft+Ke(o);const c=-l.scrollTop;return q(i||a).direction==="rtl"&&(f+=W(a.clientWidth,i?i.clientWidth:0)-s),{width:s,height:h,x:f,y:c}}(B(e)))}function bt(e){const t=Ge(e),n=["absolute","fixed"].includes(q(e).position)&&j(e)?ce(e):e;return P(n)?t.filter(o=>P(o)&&function(r,a){const l=a.getRootNode==null?void 0:a.getRootNode();if(r.contains(a))return!0;if(l&&de(l)){let i=a;do{if(i&&r===i)return!0;i=i.parentNode||i.host}while(i)}return!1}(o,n)&&N(o)!=="body"):[]}const wt={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const a=[...n==="clippingAncestors"?bt(t):[].concat(n),o],l=a[0],i=a.reduce((s,h)=>{const f=Re(t,h,r);return s.top=W(f.top,s.top),s.right=xe(f.right,s.right),s.bottom=xe(f.bottom,s.bottom),s.left=W(f.left,s.left),s},Re(t,l,r));return{width:i.right-i.left,height:i.bottom-i.top,x:i.left,y:i.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:o}=e;const r=j(n),a=B(n);if(n===a)return t;let l={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if((r||!r&&o!=="fixed")&&((N(n)!=="body"||re(a))&&(l=ae(n)),j(n))){const s=I(n,!0);i.x=s.x+n.clientLeft,i.y=s.y+n.clientTop}return{...t,x:t.x-l.scrollLeft+i.x,y:t.y-l.scrollTop+i.y}},isElement:P,getDimensions:ve,getOffsetParent:ce,getDocumentElement:B,getElementRects:e=>{let{reference:t,floating:n,strategy:o}=e;return{reference:gt(t,ce(n),o),floating:{...ve(n),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>q(e).direction==="rtl"},xt=(e,t,n)=>ot(e,t,{platform:wt,...n}),ee="top",te="bottom",ue="left",fe="right",Qe={[ee]:te,[te]:ee,[ue]:fe,[fe]:ue},yt={[ue]:-45,[ee]:45,[fe]:135,[te]:-135},Se="calc(50% - 7px)",vt=e=>[ee,te].includes(e);function Rt({actualDirection:e,directionName:t,arrowEl:n}){if(!n)return;e=t;const o=vt(t);n.style.left=o?Se:"",n.style.top=o?"":Se}async function St(e){var r,a;if(!e.isShowing)return;if(await((r=e==null?void 0:e.waitForDOM)==null?void 0:r.call(e)),e.isCallout)return Rt(e);const t=await xt(e.targetEl,e.attentionEl,{placement:e.directionName,middleware:[ft(),ht(8),pt({padding:16}),at({element:e.noArrow?void 0:e.arrowEl})]});e.actualDirection=t.placement,Object.assign(((a=e.attentionEl)==null?void 0:a.style)||{},{left:"0",top:"0",transform:`translate3d(${Math.round(t.x)}px, ${Math.round(t.y)}px, 0)`});let{x:n,y:o}=t.middlewareData.arrow;e.arrowEl&&(e.arrowEl.style.left=n?n+"px":"",e.arrowEl.style.top=o?o+"px":"")}const At=JSON.parse('{"attention.aria.callout":"callout speech bubble","attention.aria.close":"Lukk","attention.aria.highlight":"highlighted speech bubble","attention.aria.pointingDown":"pointing down","attention.aria.pointingLeft":"pointing left","attention.aria.pointingRight":"pointing right","attention.aria.pointingUp":"pointing up","attention.aria.popover":"popover speech bubble","attention.aria.tooltip":"tooltip"}'),Et=JSON.parse('{"attention.aria.callout":"callout speech bubble","attention.aria.close":"Close","attention.aria.highlight":"highlighted speech bubble","attention.aria.pointingDown":"pointing down","attention.aria.pointingLeft":"pointing left","attention.aria.pointingRight":"pointing right","attention.aria.pointingUp":"pointing up","attention.aria.popover":"popover speech bubble","attention.aria.tooltip":"tooltip"}'),jt=JSON.parse('{"attention.aria.callout":"callout speech bubble","attention.aria.close":"Sulje","attention.aria.highlight":"highlighted speech bubble","attention.aria.pointingDown":"pointing down","attention.aria.pointingLeft":"pointing left","attention.aria.pointingRight":"pointing right","attention.aria.pointingUp":"pointing up","attention.aria.popover":"popover speech bubble","attention.aria.tooltip":"tooltip"}'),pe={callout:{wrapper:S.callout,arrow:S.arrowCallout},highlight:{wrapper:S.highlight,arrow:S.arrowHighlight},tooltip:{wrapper:S.tooltip,arrow:S.arrowTooltip},popover:{wrapper:S.popover,arrow:S.arrowPopover}},Ze=e=>Object.keys(pe).find(t=>!!e[t])||"";function $(e){const{noArrow:t,isShowing:n,children:o,role:r,"aria-label":a,placement:l,targetEl:i,className:s,canClose:h,onDismiss:f,...c}=e;tt(Et,At,jt);const p=le(S.base,pe[Ze(c)].wrapper),[d,m]=T.useState(l),[g,b]=T.useState(!1),x=T.useRef(!0),v=T.useRef(null),R=T.useRef(null),y={get isShowing(){return n},get isCallout(){return c.callout},get actualDirection(){return d},set actualDirection(w){m(w)},get directionName(){return l},get arrowEl(){return R.current},get attentionEl(){return v.current},set attentionEl(w){v.current=w},get targetEl(){return i==null?void 0:i.current},get noArrow(){return e.noArrow}},V=(()=>{switch(Qe[d]){case"top":return D._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right":return D._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom":return D._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left":return D._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}})(),L=(()=>{switch(!0){case e.tooltip:return D._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case e.callout:return D._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case e.popover:return D._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case e.highlight:return D._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}})(),H=()=>`${L} ${e.noArrow?"":V}`;return T.useEffect(()=>{St(y)}),T.useEffect(()=>{x.current?(x.current=!1,(n===!0||e.callout)&&b(n)):b(n)},[n,e.callout]),u.jsx("div",{className:le({[S.notCallout]:!e.callout,invisible:!g&&!e.callout,hidden:!g&&!e.tooltip},s),ref:v,children:u.jsxs("div",{role:e.role===""?void 0:e.tooltip?"tooltip":"img","aria-label":a===""?void 0:a??H(),className:p,id:e.id,children:[!e.noArrow&&u.jsx(Dt,{...e,ref:R,direction:l}),u.jsx("div",{className:S.content,children:e.children}),h&&u.jsx("button",{type:"button","aria-label":D._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"}),onClick:f,onKeyDown:w=>{e.onDismiss&&w.key==="Escape"&&e.onDismiss()},className:S.closeBtn,children:u.jsx(nt,{})})]})})}const Ae=e=>`arrowDirection${e.charAt(0).toUpperCase()+e.slice(1)}`,Dt=T.forwardRef(({direction:e,...t},n)=>{const o=Qe[e],r=le(S.arrowBase,S[Ae(o)],pe[Ze(t)].arrow);return u.jsx("div",{ref:n,className:r,style:{borderTopLeftRadius:"4px",zIndex:1,[`margin${Ae(o)}`]:"-0.5px",transform:`rotate(${yt[o]}deg)`}})});try{$.displayName="Attention",$.__docgenInfo={description:"",displayName:"Attention",props:{noArrow:{defaultValue:null,description:"Render Attention element without arrow",name:"noArrow",required:!1,type:{name:"Boolean"}},isShowing:{defaultValue:null,description:`Whether Attention element is shown
Used for tooltip`,name:"isShowing",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Elements inside of the Attention component",name:"children",required:!1,type:{name:"Element | Element[]"}},"aria-label":{defaultValue:null,description:"Sets the aria-label attribute for the Attention component",name:"aria-label",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"Sets the role attribute for the Attention component",name:"role",required:!1,type:{name:"string"}},placement:{defaultValue:null,description:`Placement according to the target element
Arrow would be on the opposite side of this position`,name:"placement",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},targetEl:{defaultValue:null,description:"Container the Attention component is rendered relatively to",name:"targetEl",required:!1,type:{name:"MutableRefObject<unknown>"}},className:{defaultValue:null,description:"Extend the Attention component container styling",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"id used for relationship ARIA attributes",name:"id",required:!1,type:{name:"string"}},canClose:{defaultValue:null,description:"Whether a close button is shown",name:"canClose",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"Handler that is called when the close button is clicked",name:"onDismiss",required:!1,type:{name:"(() => void)"}},tooltip:{defaultValue:null,description:"Render tooltip",name:"tooltip",required:!1,type:{name:"boolean"}},callout:{defaultValue:null,description:"Render callout",name:"callout",required:!1,type:{name:"boolean"}},popover:{defaultValue:null,description:"Render popover",name:"popover",required:!1,type:{name:"boolean"}},highlight:{defaultValue:null,description:"Render highlight",name:"highlight",required:!1,type:{name:"boolean"}}}}}catch{}const It={title:"Overlays/Attention"};function U(){return u.jsxs("div",{className:"flex items-center",children:[u.jsx(ne,{info:!0,children:u.jsx("h1",{"aria-details":"callout-bubbletext",children:"I am a box full of info"})}),u.jsx($,{callout:!0,placement:"right",isShowing:!0,children:u.jsx("p",{id:"callout-bubbletext",style:{width:200},children:"I'm a callout because that box over there is new or something"})})]})}function J(){return u.jsxs("div",{className:"flex items-center",children:[u.jsx(ne,{info:!0,children:u.jsx("h1",{"aria-details":"callout-reset-bubbletext",children:"I am a box full of info"})}),u.jsx($,{callout:!0,role:"","aria-label":"",placement:"right",isShowing:!0,children:u.jsx("p",{id:"callout-reset-bubbletext",role:"img",style:{width:200},children:"I'm a callout speech bubble with resetted role and aria-label attributes pointing left."})})]})}function z(){const[e,t]=E.useState(!1),n=E.useRef();return u.jsxs("div",{className:"flex flex-col justify-between h-[200]",children:[u.jsx(oe,{small:!0,"aria-expanded":e,"aria-controls":"highlight-attention-example",utility:!0,onClick:()=>t(!e),className:"w-max mb-0",children:"Show an onboarding hint"}),u.jsxs("div",{children:[u.jsx("div",{ref:n,className:"w-2/3",children:u.jsx(ne,{info:!0,children:u.jsx("h1",{children:"I am a box full of info"})})}),u.jsx($,{highlight:!0,placement:"top",isShowing:e,targetEl:n,id:"highlight-attention-example",children:u.jsx("p",{children:"I'm a highlight because that box over there is new or something"})})]})]})}function K(){const[e,t]=E.useState(!1),n=E.useRef();return u.jsxs("div",{className:"flex flex-col justify-between h-[200]",children:[u.jsx(oe,{small:!0,"aria-expanded":e,"aria-controls":"highlight-attention-example",utility:!0,onClick:()=>t(!e),className:"w-max mb-0",children:"Show an onboarding hint"}),u.jsxs("div",{children:[u.jsx("div",{ref:n,className:"w-2/3",children:u.jsx(ne,{info:!0,children:u.jsx("h1",{children:"I am a box full of info"})})}),u.jsx($,{highlight:!0,canClose:!0,onDismiss:()=>t(!1),placement:"top",isShowing:e,targetEl:n,id:"highlight-attention-example",children:u.jsx("p",{children:"I'm a highlight that can dismiss itself"})})]})]})}function X(){const[e,t]=E.useState(!1),n=E.useRef();return u.jsxs("div",{children:[u.jsx("h1",{className:"w-max mb-0",ref:n,children:u.jsx(oe,{"aria-describedby":"tooltip-bubbletext","aria-expanded":"true",type:"button",className:"bg-transparent",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),onFocus:()=>t(!0),onBlur:()=>t(!1),children:"hover this for useless info"})}),u.jsx($,{tooltip:!0,placement:"bottom",targetEl:n,isShowing:e,children:u.jsx("p",{id:"tooltip-bubbletext",children:"lol i am a tooltip"})})]})}function Y(){const[e,t]=E.useState(!1),n=E.useRef(),o=E.useRef();return E.useEffect(()=>{function r(a){n.current&&!n.current.contains(a.target)&&t(!1)}return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}}),u.jsxs("div",{ref:n,children:[u.jsx(oe,{small:!0,"aria-expanded":e,"aria-controls":"popover-attention-example",utility:!0,onClick:()=>t(!e),className:"w-max mb-0",ref:o,children:"Open menu"}),u.jsx($,{popover:!0,placement:"bottom",targetEl:o,isShowing:e,children:u.jsxs("ul",{className:"bg-white w-full text-center",children:[u.jsx("li",{tabIndex:0,className:"p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer",children:"Hello"}),u.jsx("li",{tabIndex:0,className:"p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer",children:"World"})]})})]})}var Ee,je,De;U.parameters={...U.parameters,docs:{...(Ee=U.parameters)==null?void 0:Ee.docs,source:{originalSource:`function Callout() {
  return <div className='flex items-center'>
      <Box info>
        <h1 aria-details='callout-bubbletext'>I am a box full of info</h1>
      </Box>
      <Attention callout placement='right' isShowing={true}>
        <p id='callout-bubbletext' style={{
        width: 200
      }}>
          I'm a callout because that box over there is new or something
        </p>
      </Attention>
    </div>;
}`,...(De=(je=U.parameters)==null?void 0:je.docs)==null?void 0:De.source}}};var Ne,Ce,Le;J.parameters={...J.parameters,docs:{...(Ne=J.parameters)==null?void 0:Ne.docs,source:{originalSource:`function CalloutResettingRoleAndAriaLabel() {
  return <div className='flex items-center'>
      <Box info>
        <h1 aria-details='callout-reset-bubbletext'>I am a box full of info</h1>
      </Box>
      <Attention callout role='' aria-label='' placement='right' isShowing={true}>
        <p id='callout-reset-bubbletext' role='img' style={{
        width: 200
      }}>
          I'm a callout speech bubble with resetted role and aria-label
          attributes pointing left.
        </p>
      </Attention>
    </div>;
}`,...(Le=(Ce=J.parameters)==null?void 0:Ce.docs)==null?void 0:Le.source}}};var Te,Be,$e;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`function Highlight() {
  const [show, setShow] = React.useState(false);
  const targetEl = React.useRef();
  return <div className='flex flex-col justify-between h-[200]'>
      <Button small aria-expanded={show} aria-controls='highlight-attention-example' utility onClick={() => setShow(!show)} className='w-max mb-0'>
        Show an onboarding hint
      </Button>
      <div>
        <div ref={targetEl} className="w-2/3">
          <Box info>
            <h1>I am a box full of info</h1>
          </Box>
        </div>
        <Attention highlight placement='top' isShowing={show} targetEl={targetEl} id='highlight-attention-example'>
          <p>
            I'm a highlight because that box over there is new or something
          </p>
        </Attention>
      </div>
    </div>;
}`,...($e=(Be=z.parameters)==null?void 0:Be.docs)==null?void 0:$e.source}}};var He,Ie,Ve;K.parameters={...K.parameters,docs:{...(He=K.parameters)==null?void 0:He.docs,source:{originalSource:`function DismissibleHighlight() {
  const [show, setShow] = React.useState(false);
  const targetEl = React.useRef();
  return <div className='flex flex-col justify-between h-[200]'>
      <Button small aria-expanded={show} aria-controls='highlight-attention-example' utility onClick={() => setShow(!show)} className='w-max mb-0'>
        Show an onboarding hint
      </Button>
      <div>
        <div ref={targetEl} className="w-2/3">
          <Box info>
            <h1>I am a box full of info</h1>
          </Box>
        </div>
        <Attention highlight canClose onDismiss={() => setShow(false)} placement='top' isShowing={show} targetEl={targetEl} id='highlight-attention-example'>
          <p>
            I'm a highlight that can dismiss itself
          </p>
        </Attention>
      </div>
    </div>;
}`,...(Ve=(Ie=K.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Oe,Pe,ke;X.parameters={...X.parameters,docs:{...(Oe=X.parameters)==null?void 0:Oe.docs,source:{originalSource:`function Tooltip() {
  const [show, setShow] = React.useState(false);
  const targetEl = React.useRef();
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setShow(false);
    }
  };
  return <div>
      <h1 className='w-max mb-0' ref={targetEl}>
        <Button aria-describedby='tooltip-bubbletext' aria-expanded='true' type='button' className='bg-transparent' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onFocus={() => setShow(true)} onBlur={() => setShow(false)}>
          hover this for useless info
        </Button>
      </h1>
      <Attention tooltip placement='bottom' targetEl={targetEl} isShowing={show}>
        <p id='tooltip-bubbletext'>lol i am a tooltip</p>
      </Attention>
    </div>;
}`,...(ke=(Pe=X.parameters)==null?void 0:Pe.docs)==null?void 0:ke.source}}};var We,_e,Me;Y.parameters={...Y.parameters,docs:{...(We=Y.parameters)==null?void 0:We.docs,source:{originalSource:`function Popover() {
  const [show, setShow] = React.useState(false);
  const containerRef = React.useRef();
  const targetEl = React.useRef();
  React.useEffect(() => {
    function onBlurHandler(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShow(false);
      }
    }
    document.addEventListener('mousedown', onBlurHandler);
    return () => {
      document.removeEventListener('mousedown', onBlurHandler);
    };
  });
  return <div ref={containerRef}>
      <Button small aria-expanded={show} aria-controls='popover-attention-example' utility onClick={() => setShow(!show)} className='w-max mb-0' ref={targetEl}>
        Open menu
      </Button>
      <Attention popover placement='bottom' targetEl={targetEl} isShowing={show}>
        <ul className='bg-white w-full text-center'>
          <li tabIndex={0} className='p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer'>
            Hello
          </li>
          <li tabIndex={0} className='p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer'>
            World
          </li>
        </ul>
      </Attention>
    </div>;
}`,...(Me=(_e=Y.parameters)==null?void 0:_e.docs)==null?void 0:Me.source}}};const Vt=["Callout","CalloutResettingRoleAndAriaLabel","Highlight","DismissibleHighlight","Tooltip","Popover"];export{U as Callout,J as CalloutResettingRoleAndAriaLabel,K as DismissibleHighlight,z as Highlight,Y as Popover,X as Tooltip,Vt as __namedExportsOrder,It as default};
//# sourceMappingURL=Attention.stories-dd4ebc2c.js.map
