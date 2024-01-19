import{b as A,j as u}from"./index-A_SBFfKp.js";import{r as L,R as E}from"./index-pMVFT59f.js";import{r as le}from"./index.m-0-FAh1ao.js";import{a as tt,i as D}from"./i18n-G6_82uWZ.js";import{c as nt}from"./close-16-V2HhT-Rw.js";import{B as ne}from"./component-23fHbaXW.js";import{B as oe}from"./component-7RLsnp6C.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-XwI9xEnt.js";function W(e){return e.split("-")[0]}function ie(e){return e.split("-")[1]}function M(e){return["top","bottom"].includes(W(e))?"x":"y"}function de(e){return e==="y"?"height":"width"}function ge(e,t,n){let{reference:o,floating:a}=e;const r=o.x+o.width/2-a.width/2,l=o.y+o.height/2-a.height/2,i=M(t),s=de(i),d=o[s]/2-a[s]/2,f=i==="x";let c;switch(W(t)){case"top":c={x:r,y:o.y-a.height};break;case"bottom":c={x:r,y:o.y+o.height};break;case"right":c={x:o.x+o.width,y:l};break;case"left":c={x:o.x-a.width,y:l};break;default:c={x:o.x,y:o.y}}switch(ie(t)){case"start":c[i]-=d*(n&&f?-1:1);break;case"end":c[i]+=d*(n&&f?-1:1)}return c}const ot=async(e,t,n)=>{const{placement:o="bottom",strategy:a="absolute",middleware:r=[],platform:l}=n,i=await(l.isRTL==null?void 0:l.isRTL(t));let s=await l.getElementRects({reference:e,floating:t,strategy:a}),{x:d,y:f}=ge(s,o,i),c=o,m={},h=0;for(let p=0;p<r.length;p++){const{name:g,fn:b}=r[p],{x,y:v,data:R,reset:y}=await b({x:d,y:f,initialPlacement:o,placement:c,strategy:a,middlewareData:m,rects:s,platform:l,elements:{reference:e,floating:t}});d=x??d,f=v??f,m={...m,[g]:{...m[g],...R}},y&&h<=50&&(h++,typeof y=="object"&&(y.placement&&(c=y.placement),y.rects&&(s=y.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:a}):y.rects),{x:d,y:f}=ge(s,c,i)),p=-1)}return{x:d,y:f,placement:c,strategy:a,middlewareData:m}};function qe(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function Y(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function Fe(e,t){var n;t===void 0&&(t={});const{x:o,y:a,platform:r,rects:l,elements:i,strategy:s}=e,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:c="floating",altBoundary:m=!1,padding:h=0}=t,p=qe(h),g=i[m?c==="floating"?"reference":"floating":c],b=Y(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(g)))==null||n?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(i.floating)),boundary:d,rootBoundary:f,strategy:s})),x=Y(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:c==="floating"?{...l.floating,x:o,y:a}:l.reference,offsetParent:await(r.getOffsetParent==null?void 0:r.getOffsetParent(i.floating)),strategy:s}):l[c]);return{top:b.top-x.top+p.top,bottom:x.bottom-b.bottom+p.bottom,left:b.left-x.left+p.left,right:x.right-b.right+p.right}}const it=Math.min,at=Math.max;function se(e,t,n){return at(e,it(t,n))}const rt=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:o=0}=e??{},{x:a,y:r,placement:l,rects:i,platform:s}=t;if(n==null)return{};const d=qe(o),f={x:a,y:r},c=M(l),m=ie(l),h=de(c),p=await s.getDimensions(n),g=c==="y"?"top":"left",b=c==="y"?"bottom":"right",x=i.reference[h]+i.reference[c]-f[c]-i.floating[h],v=f[c]-i.reference[c],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(n));let y=R?c==="y"?R.clientHeight||0:R.clientWidth||0:0;y===0&&(y=i.floating[h]);const H=x/2-v/2,k=d[g],V=y-p[h]-d[b],w=y/2-p[h]/2+H,S=se(k,w,V),I=(m==="start"?d[g]:d[b])>0&&w!==S&&i.reference[h]<=i.floating[h];return{[c]:f[c]-(I?w<k?k-w:V-w:0),data:{[c]:S,centerOffset:w-S}}}}),lt={left:"right",right:"left",bottom:"top",top:"bottom"};function Q(e){return e.replace(/left|right|bottom|top/g,t=>lt[t])}function st(e,t,n){n===void 0&&(n=!1);const o=ie(e),a=M(e),r=de(a);let l=a==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(l=Q(l)),{main:l,cross:Q(l)}}const ct={start:"end",end:"start"};function be(e){return e.replace(/start|end/g,t=>ct[t])}const ut=["top","right","bottom","left"];ut.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);const ft=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:o,middlewareData:a,rects:r,initialPlacement:l,platform:i,elements:s}=t,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:c,fallbackStrategy:m="bestFit",flipAlignment:h=!0,...p}=e,g=W(o),b=c||(g===l||!h?[Q(l)]:function(w){const S=Q(w);return[be(w),S,be(S)]}(l)),x=[l,...b],v=await Fe(t,p),R=[];let y=((n=a.flip)==null?void 0:n.overflows)||[];if(d&&R.push(v[g]),f){const{main:w,cross:S}=st(o,r,await(i.isRTL==null?void 0:i.isRTL(s.floating)));R.push(v[w],v[S])}if(y=[...y,{placement:o,overflows:R}],!R.every(w=>w<=0)){var H,k;const w=((H=(k=a.flip)==null?void 0:k.index)!=null?H:0)+1,S=x[w];if(S)return{data:{index:w,overflows:y},reset:{placement:S}};let I="bottom";switch(m){case"bestFit":{var V;const pe=(V=y.map(F=>[F,F.overflows.filter(P=>P>0).reduce((P,et)=>P+et,0)]).sort((F,P)=>F[1]-P[1])[0])==null?void 0:V[0].placement;pe&&(I=pe);break}case"initialPlacement":I=l}if(o!==I)return{reset:{placement:I}}}return{}}}},dt=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:o}=t,a=await async function(r,l){const{placement:i,platform:s,elements:d}=r,f=await(s.isRTL==null?void 0:s.isRTL(d.floating)),c=W(i),m=ie(i),h=M(i)==="x",p=["left","top"].includes(c)?-1:1,g=f&&h?-1:1,b=typeof l=="function"?l(r):l;let{mainAxis:x,crossAxis:v,alignmentAxis:R}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...b};return m&&typeof R=="number"&&(v=m==="end"?-1*R:R),h?{x:v*g,y:x*p}:{x:x*p,y:v*g}}(t,e);return{x:n+a.x,y:o+a.y,data:a}}}};function ht(e){return e==="x"?"y":"x"}const mt=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:a}=t,{mainAxis:r=!0,crossAxis:l=!1,limiter:i={fn:b=>{let{x,y:v}=b;return{x,y:v}}},...s}=e,d={x:n,y:o},f=await Fe(t,s),c=M(W(a)),m=ht(c);let h=d[c],p=d[m];if(r){const b=c==="y"?"bottom":"right";h=se(h+f[c==="y"?"top":"left"],h,h-f[b])}if(l){const b=m==="y"?"bottom":"right";p=se(p+f[m==="y"?"top":"left"],p,p-f[b])}const g=i.fn({...t,[c]:h,[m]:p});return{...g,data:{x:g.x-n,y:g.y-o}}}}};function Ue(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function C(e){if(e==null)return window;if(!Ue(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function q(e){return C(e).getComputedStyle(e)}function N(e){return Ue(e)?"":e?(e.nodeName||"").toLowerCase():""}function Je(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function j(e){return e instanceof C(e).HTMLElement}function O(e){return e instanceof C(e).Element}function he(e){return typeof ShadowRoot>"u"?!1:e instanceof C(e).ShadowRoot||e instanceof ShadowRoot}function ae(e){const{overflow:t,overflowX:n,overflowY:o}=q(e);return/auto|scroll|overlay|hidden/.test(t+o+n)}function pt(e){return["table","td","th"].includes(N(e))}function we(e){const t=/firefox/i.test(Je()),n=q(e);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"}function ze(){return!/^((?!chrome|android).)*safari/i.test(Je())}const xe=Math.min,_=Math.max,Z=Math.round;function $(e,t,n){var o,a,r,l;t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect();let s=1,d=1;t&&j(e)&&(s=e.offsetWidth>0&&Z(i.width)/e.offsetWidth||1,d=e.offsetHeight>0&&Z(i.height)/e.offsetHeight||1);const f=O(e)?C(e):window,c=!ze()&&n,m=(i.left+(c&&(o=(a=f.visualViewport)==null?void 0:a.offsetLeft)!=null?o:0))/s,h=(i.top+(c&&(r=(l=f.visualViewport)==null?void 0:l.offsetTop)!=null?r:0))/d,p=i.width/s,g=i.height/d;return{width:p,height:g,top:h,right:m+p,bottom:h+g,left:m,x:m,y:h}}function T(e){return(t=e,(t instanceof C(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function re(e){return O(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ge(e){return $(T(e)).left+re(e).scrollLeft}function gt(e,t,n){const o=j(t),a=T(t),r=$(e,o&&function(s){const d=$(s);return Z(d.width)!==s.offsetWidth||Z(d.height)!==s.offsetHeight}(t),n==="fixed");let l={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if(o||!o&&n!=="fixed")if((N(t)!=="body"||ae(a))&&(l=re(t)),j(t)){const s=$(t,!0);i.x=s.x+t.clientLeft,i.y=s.y+t.clientTop}else a&&(i.x=Ge(a));return{x:r.left+l.scrollLeft-i.x,y:r.top+l.scrollTop-i.y,width:r.width,height:r.height}}function Ke(e){return N(e)==="html"?e:e.assignedSlot||e.parentNode||(he(e)?e.host:null)||T(e)}function ye(e){return j(e)&&getComputedStyle(e).position!=="fixed"?e.offsetParent:null}function ce(e){const t=C(e);let n=ye(e);for(;n&&pt(n)&&getComputedStyle(n).position==="static";)n=ye(n);return n&&(N(n)==="html"||N(n)==="body"&&getComputedStyle(n).position==="static"&&!we(n))?t:n||function(o){let a=Ke(o);for(he(a)&&(a=a.host);j(a)&&!["html","body"].includes(N(a));){if(we(a))return a;a=a.parentNode}return null}(e)||t}function ve(e){if(j(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=$(e);return{width:t.width,height:t.height}}function Xe(e){const t=Ke(e);return["html","body","#document"].includes(N(t))?e.ownerDocument.body:j(t)&&ae(t)?t:Xe(t)}function Ye(e,t){var n;t===void 0&&(t=[]);const o=Xe(e),a=o===((n=e.ownerDocument)==null?void 0:n.body),r=C(o),l=a?[r].concat(r.visualViewport||[],ae(o)?o:[]):o,i=t.concat(l);return a?i:i.concat(Ye(l))}function Re(e,t,n){return t==="viewport"?Y(function(o,a){const r=C(o),l=T(o),i=r.visualViewport;let s=l.clientWidth,d=l.clientHeight,f=0,c=0;if(i){s=i.width,d=i.height;const m=ze();(m||!m&&a==="fixed")&&(f=i.offsetLeft,c=i.offsetTop)}return{width:s,height:d,x:f,y:c}}(e,n)):O(t)?function(o,a){const r=$(o,!1,a==="fixed"),l=r.top+o.clientTop,i=r.left+o.clientLeft;return{top:l,left:i,x:i,y:l,right:i+o.clientWidth,bottom:l+o.clientHeight,width:o.clientWidth,height:o.clientHeight}}(t,n):Y(function(o){var a;const r=T(o),l=re(o),i=(a=o.ownerDocument)==null?void 0:a.body,s=_(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),d=_(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let f=-l.scrollLeft+Ge(o);const c=-l.scrollTop;return q(i||r).direction==="rtl"&&(f+=_(r.clientWidth,i?i.clientWidth:0)-s),{width:s,height:d,x:f,y:c}}(T(e)))}function bt(e){const t=Ye(e),n=["absolute","fixed"].includes(q(e).position)&&j(e)?ce(e):e;return O(n)?t.filter(o=>O(o)&&function(a,r){const l=r.getRootNode==null?void 0:r.getRootNode();if(a.contains(r))return!0;if(l&&he(l)){let i=r;do{if(i&&a===i)return!0;i=i.parentNode||i.host}while(i)}return!1}(o,n)&&N(o)!=="body"):[]}const wt={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:a}=e;const r=[...n==="clippingAncestors"?bt(t):[].concat(n),o],l=r[0],i=r.reduce((s,d)=>{const f=Re(t,d,a);return s.top=_(f.top,s.top),s.right=xe(f.right,s.right),s.bottom=xe(f.bottom,s.bottom),s.left=_(f.left,s.left),s},Re(t,l,a));return{width:i.right-i.left,height:i.bottom-i.top,x:i.left,y:i.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:o}=e;const a=j(n),r=T(n);if(n===r)return t;let l={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if((a||!a&&o!=="fixed")&&((N(n)!=="body"||ae(r))&&(l=re(n)),j(n))){const s=$(n,!0);i.x=s.x+n.clientLeft,i.y=s.y+n.clientTop}return{...t,x:t.x-l.scrollLeft+i.x,y:t.y-l.scrollTop+i.y}},isElement:O,getDimensions:ve,getOffsetParent:ce,getDocumentElement:T,getElementRects:e=>{let{reference:t,floating:n,strategy:o}=e;return{reference:gt(t,ce(n),o),floating:{...ve(n),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>q(e).direction==="rtl"},xt=(e,t,n)=>ot(e,t,{platform:wt,...n}),ee="top",te="bottom",ue="left",fe="right",Qe={[ee]:te,[te]:ee,[ue]:fe,[fe]:ue},yt={[ue]:-45,[ee]:45,[fe]:135,[te]:-135},Ae="calc(50% - 7px)",vt=e=>[ee,te].includes(e);function Rt({actualDirection:e,directionName:t,arrowEl:n}){if(!n)return;e=t;const o=vt(t);n.style.left=o?Ae:"",n.style.top=o?"":Ae}async function At(e){var a,r;if(!e.isShowing)return;if(await((a=e==null?void 0:e.waitForDOM)==null?void 0:a.call(e)),e.isCallout)return Rt(e);const t=await xt(e.targetEl,e.attentionEl,{placement:e.directionName,middleware:[ft(),dt(8),mt({padding:16}),rt({element:e.noArrow?void 0:e.arrowEl})]});e.actualDirection=t.placement,Object.assign(((r=e.attentionEl)==null?void 0:r.style)||{},{left:"0",top:"0",transform:`translate3d(${Math.round(t.x)}px, ${Math.round(t.y)}px, 0)`});let{x:n,y:o}=t.middlewareData.arrow;e.arrowEl&&(e.arrowEl.style.left=n?n+"px":"",e.arrowEl.style.top=o?o+"px":"")}const St=JSON.parse('{"attention.aria.callout":"Grønn taleboble som introduserer noe nytt","attention.aria.close":"Lukk","attention.aria.highlight":"En uthevet taleboble med viktig informasjon","attention.aria.pointingDown":"peker ned","attention.aria.pointingLeft":"peker til venstre","attention.aria.pointingRight":"peker til høyre","attention.aria.pointingUp":"peker opp","attention.aria.popover":"En hvit taleboble som gir tilleggsinformasjon","attention.aria.tooltip":"En svart taleboble som forklarer konteksten"}'),Et=JSON.parse('{"attention.aria.callout":"A green speech bubble introducing something new","attention.aria.close":"Close","attention.aria.highlight":"An attention speech bubble with important information","attention.aria.pointingDown":"pointing down","attention.aria.pointingLeft":"pointing left","attention.aria.pointingRight":"pointing right","attention.aria.pointingUp":"pointing up","attention.aria.popover":"A white speech bubble providing additional information","attention.aria.tooltip":"A black speech bubble providing complementary information"}'),jt=JSON.parse('{"attention.aria.callout":"Vihreä puhekupla, joka esittelee jotain uutta","attention.aria.close":"Sulje","attention.aria.highlight":"Puhekupla, joka sisältää tärkeää tietoa","attention.aria.pointingDown":"osoittaa alas","attention.aria.pointingLeft":"osoittaa vasemmalle","attention.aria.pointingRight":"osoittaa oikealle","attention.aria.pointingUp":"osoittaa ylös","attention.aria.popover":"Valkoinen puhekupla, joka tarjoaa lisätietoa","attention.aria.tooltip":"Musta puhekupla, joka tarjoaa täydentävää tietoa"}'),me={callout:{wrapper:A.callout,arrow:A.arrowCallout},highlight:{wrapper:A.highlight,arrow:A.arrowHighlight},tooltip:{wrapper:A.tooltip,arrow:A.arrowTooltip},popover:{wrapper:A.popover,arrow:A.arrowPopover}},Ze=e=>Object.keys(me).find(t=>!!e[t])||"";function B(e){const{noArrow:t,isShowing:n,children:o,role:a,"aria-label":r,placement:l,targetEl:i,className:s,canClose:d,onDismiss:f,...c}=e;tt(Et,St,jt);const m=le(A.base,me[Ze(c)].wrapper),[h,p]=L.useState(l),[g,b]=L.useState(!1),x=L.useRef(!0),v=L.useRef(null),R=L.useRef(null),y={get isShowing(){return n},get isCallout(){return c.callout},get actualDirection(){return h},set actualDirection(w){p(w)},get directionName(){return l},get arrowEl(){return R.current},get attentionEl(){return v.current},set attentionEl(w){v.current=w},get targetEl(){return i==null?void 0:i.current},get noArrow(){return e.noArrow}},H=(()=>{switch(Qe[h]){case"top":return D._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right":return D._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom":return D._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left":return D._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}})(),k=(()=>{switch(!0){case e.tooltip:return D._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case e.callout:return D._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case e.popover:return D._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case e.highlight:return D._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}})(),V=()=>`${k} ${e.noArrow?"":H}`;return L.useEffect(()=>{At(y)}),L.useEffect(()=>{x.current?(x.current=!1,(n===!0||e.callout)&&b(n)):b(n)},[n,e.callout]),u.jsx("div",{className:le({[A.notCallout]:!e.callout,invisible:!g&&!e.callout,hidden:!g&&!e.tooltip},s),ref:v,children:u.jsxs("div",{role:e.role===""?void 0:e.tooltip?"tooltip":"img","aria-label":r===""?void 0:r??V(),className:m,id:e.id,children:[!e.noArrow&&u.jsx(Dt,{...e,ref:R,direction:l}),u.jsx("div",{className:A.content,children:e.children}),d&&u.jsx("button",{type:"button","aria-label":D._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"}),onClick:f,onKeyDown:w=>{e.onDismiss&&w.key==="Escape"&&e.onDismiss()},className:A.closeBtn,children:u.jsx(nt,{})})]})})}const Se=e=>`arrowDirection${e.charAt(0).toUpperCase()+e.slice(1)}`,Dt=L.forwardRef(({direction:e,...t},n)=>{const o=Qe[e],a=le(A.arrowBase,A[Se(o)],me[Ze(t)].arrow);return u.jsx("div",{ref:n,className:a,style:{borderTopLeftRadius:"4px",zIndex:1,[`margin${Se(o)}`]:"-0.5px",transform:`rotate(${yt[o]}deg)`}})});try{B.displayName="Attention",B.__docgenInfo={description:"",displayName:"Attention",props:{noArrow:{defaultValue:null,description:"Render Attention element without arrow",name:"noArrow",required:!1,type:{name:"Boolean"}},isShowing:{defaultValue:null,description:`Whether Attention element is shown
Used for tooltip`,name:"isShowing",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Elements inside of the Attention component",name:"children",required:!1,type:{name:"Element | Element[]"}},"aria-label":{defaultValue:null,description:"Sets the aria-label attribute for the Attention component",name:"aria-label",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"Sets the role attribute for the Attention component",name:"role",required:!1,type:{name:"string"}},placement:{defaultValue:null,description:`Placement according to the target element
Arrow would be on the opposite side of this position`,name:"placement",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},targetEl:{defaultValue:null,description:"Container the Attention component is rendered relatively to",name:"targetEl",required:!1,type:{name:"MutableRefObject<unknown>"}},className:{defaultValue:null,description:"Extend the Attention component container styling",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"id used for relationship ARIA attributes",name:"id",required:!1,type:{name:"string"}},canClose:{defaultValue:null,description:"Whether a close button is shown",name:"canClose",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"Handler that is called when the close button is clicked",name:"onDismiss",required:!1,type:{name:"(() => void)"}},tooltip:{defaultValue:null,description:"Render tooltip",name:"tooltip",required:!1,type:{name:"boolean"}},callout:{defaultValue:null,description:"Render callout",name:"callout",required:!1,type:{name:"boolean"}},popover:{defaultValue:null,description:"Render popover",name:"popover",required:!1,type:{name:"boolean"}},highlight:{defaultValue:null,description:"Render highlight",name:"highlight",required:!1,type:{name:"boolean"}}}}}catch{}const It={title:"Overlays/Attention"};function U(){return u.jsxs("div",{className:"flex items-center",children:[u.jsx(ne,{info:!0,children:u.jsx("h1",{"aria-details":"callout-bubbletext",children:"I am a box full of info"})}),u.jsx(B,{callout:!0,placement:"right",isShowing:!0,children:u.jsx("p",{id:"callout-bubbletext",style:{width:200},children:"I'm a callout because that box over there is new or something"})})]})}function J(){return u.jsxs("div",{className:"flex items-center",children:[u.jsx(ne,{info:!0,children:u.jsx("h1",{"aria-details":"callout-reset-bubbletext",children:"I am a box full of info"})}),u.jsx(B,{callout:!0,role:"","aria-label":"",placement:"right",isShowing:!0,children:u.jsx("p",{id:"callout-reset-bubbletext",role:"img",style:{width:200},children:"I'm a callout speech bubble with resetted role and aria-label attributes pointing left."})})]})}function z(){const[e,t]=E.useState(!1),n=E.useRef();return u.jsxs("div",{className:"flex flex-col justify-between h-[200]",children:[u.jsx(oe,{small:!0,"aria-expanded":e,"aria-controls":"highlight-attention-example",utility:!0,onClick:()=>t(!e),className:"w-max mb-0",children:"Show an onboarding hint"}),u.jsxs("div",{children:[u.jsx("div",{ref:n,className:"w-2/3",children:u.jsx(ne,{info:!0,children:u.jsx("h1",{children:"I am a box full of info"})})}),u.jsx(B,{highlight:!0,placement:"top",isShowing:e,targetEl:n,id:"highlight-attention-example",children:u.jsx("p",{children:"I'm a highlight because that box over there is new or something"})})]})]})}function G(){const[e,t]=E.useState(!1),n=E.useRef();return u.jsxs("div",{className:"flex flex-col justify-between h-[200]",children:[u.jsx(oe,{small:!0,"aria-expanded":e,"aria-controls":"highlight-attention-example",utility:!0,onClick:()=>t(!e),className:"w-max mb-0",children:"Show an onboarding hint"}),u.jsxs("div",{children:[u.jsx("div",{ref:n,className:"w-2/3",children:u.jsx(ne,{info:!0,children:u.jsx("h1",{children:"I am a box full of info"})})}),u.jsx(B,{highlight:!0,canClose:!0,onDismiss:()=>t(!1),placement:"top",isShowing:e,targetEl:n,id:"highlight-attention-example",children:u.jsx("p",{children:"I'm a highlight that can dismiss itself"})})]})]})}function K(){const[e,t]=E.useState(!1),n=E.useRef();return u.jsxs("div",{children:[u.jsx("h1",{className:"w-max mb-0",ref:n,children:u.jsx(oe,{"aria-describedby":"tooltip-bubbletext","aria-expanded":"true",type:"button",className:"bg-transparent",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),onFocus:()=>t(!0),onBlur:()=>t(!1),children:"hover this for useless info"})}),u.jsx(B,{tooltip:!0,placement:"bottom",targetEl:n,isShowing:e,children:u.jsx("p",{id:"tooltip-bubbletext",children:"lol i am a tooltip"})})]})}function X(){const[e,t]=E.useState(!1),n=E.useRef(),o=E.useRef();return E.useEffect(()=>{function a(r){n.current&&!n.current.contains(r.target)&&t(!1)}return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}}),u.jsxs("div",{ref:n,children:[u.jsx(oe,{small:!0,"aria-expanded":e,"aria-controls":"popover-attention-example",utility:!0,onClick:()=>t(!e),className:"w-max mb-0",ref:o,children:"Open menu"}),u.jsx(B,{popover:!0,placement:"bottom",targetEl:o,isShowing:e,children:u.jsxs("ul",{className:"bg-white w-full text-center",children:[u.jsx("li",{tabIndex:0,className:"p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer",children:"Hello"}),u.jsx("li",{tabIndex:0,className:"p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer",children:"World"})]})})]})}var Ee,je,De;U.parameters={...U.parameters,docs:{...(Ee=U.parameters)==null?void 0:Ee.docs,source:{originalSource:`function Callout() {
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
}`,...(De=(je=U.parameters)==null?void 0:je.docs)==null?void 0:De.source}}};var Ne,Ce,ke;J.parameters={...J.parameters,docs:{...(Ne=J.parameters)==null?void 0:Ne.docs,source:{originalSource:`function CalloutResettingRoleAndAriaLabel() {
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
}`,...(ke=(Ce=J.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var Le,Te,Be;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`function Highlight() {
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
}`,...(Be=(Te=z.parameters)==null?void 0:Te.docs)==null?void 0:Be.source}}};var Ve,$e,He;G.parameters={...G.parameters,docs:{...(Ve=G.parameters)==null?void 0:Ve.docs,source:{originalSource:`function DismissibleHighlight() {
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
}`,...(He=($e=G.parameters)==null?void 0:$e.docs)==null?void 0:He.source}}};var Ie,Oe,Pe;K.parameters={...K.parameters,docs:{...(Ie=K.parameters)==null?void 0:Ie.docs,source:{originalSource:`function Tooltip() {
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
}`,...(Pe=(Oe=K.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var _e,We,Me;X.parameters={...X.parameters,docs:{...(_e=X.parameters)==null?void 0:_e.docs,source:{originalSource:`function Popover() {
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
}`,...(Me=(We=X.parameters)==null?void 0:We.docs)==null?void 0:Me.source}}};const Ot=["Callout","CalloutResettingRoleAndAriaLabel","Highlight","DismissibleHighlight","Tooltip","Popover"];export{U as Callout,J as CalloutResettingRoleAndAriaLabel,G as DismissibleHighlight,z as Highlight,X as Popover,K as Tooltip,Ot as __namedExportsOrder,It as default};
