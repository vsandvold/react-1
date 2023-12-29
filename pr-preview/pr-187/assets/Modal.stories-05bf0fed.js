import{j as a,m as v}from"./index-cd9b396d.js";import{r as s,R as Ke}from"./index-b75aab2a.js";import{r as E}from"./index.m-73ef1fbe.js";import{u as Ut}from"./useId-906286da.js";import{a as qt,i as xe}from"./i18n-ff9a8b3f.js";import{c as Vt}from"./close-16-2dd7d545.js";import{i as te}from"./index-ea31d059.js";import{B as h}from"./component-30b9742e.js";import{T as Gt}from"./component-5fecc73b.js";import"./item-cb04bd42.js";function $t(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}var ne="data-focus-lock",Qe="data-focus-lock-disabled",Yt="data-no-focus-lock",Jt="data-autofocus-inside",Kt="data-no-autofocus";function Qt(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function zt(e,t){var n=s.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}function Xt(e,t){return zt(t||null,function(n){return e.forEach(function(r){return Qt(r,n)})})}var z={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},re=function(){return re=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},re.apply(this,arguments)};function ze(e){return e}function Xe(e,t){t===void 0&&(t=ze);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var u=t(i,r);return n.push(u),function(){n=n.filter(function(l){return l!==u})}},assignSyncMedium:function(i){for(r=!0;n.length;){var u=n;n=[],u.forEach(i)}n={push:function(l){return i(l)},filter:function(){return n}}},assignMedium:function(i){r=!0;var u=[];if(n.length){var l=n;n=[],l.forEach(i),u=n}var m=function(){var c=u;u=[],c.forEach(i)},d=function(){return Promise.resolve().then(m)};d(),n={push:function(c){u.push(c),d()},filter:function(c){return u=u.filter(c),n}}}};return o}function se(e,t){return t===void 0&&(t=ze),Xe(e,t)}function Zt(e){e===void 0&&(e={});var t=Xe(null);return t.options=re({async:!0,ssr:!1},e),t}var Ze=se({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),et=se(),en=se(),tn=Zt({async:!0}),nn=[],le=s.forwardRef(function(t,n){var r,o=s.useState(),i=o[0],u=o[1],l=s.useRef(),m=s.useRef(!1),d=s.useRef(null),c=t.children,f=t.disabled,g=t.noFocusGuards,p=t.persistentFocus,b=t.crossFrame,y=t.autoFocus;t.allowTextSelection;var C=t.group,k=t.className,N=t.whiteList,Et=t.hasPositiveIndices,ge=t.shards,Ft=ge===void 0?nn:ge,be=t.as,Rt=be===void 0?"div":be,ye=t.lockProps,St=ye===void 0?{}:ye,wt=t.sideCar,D=t.returnFocus,Tt=t.focusOptions,J=t.onActivation,K=t.onDeactivation,Bt=s.useState({}),jt=Bt[0],It=s.useCallback(function(){d.current=d.current||document&&document.activeElement,l.current&&J&&J(l.current),m.current=!0},[J]),At=s.useCallback(function(){m.current=!1,K&&K(l.current)},[K]);s.useEffect(function(){f||(d.current=null)},[]);var _t=s.useCallback(function(M){var T=d.current;if(T&&T.focus){var Q=typeof D=="function"?D(T):D;if(Q){var Ce=typeof Q=="object"?Q:void 0;d.current=null,M?Promise.resolve().then(function(){return T.focus(Ce)}):T.focus(Ce)}}},[D]),Nt=s.useCallback(function(M){m.current&&Ze.useMedium(M)},[]),Dt=et.useMedium,Pt=s.useCallback(function(M){l.current!==M&&(l.current=M,u(M))},[]),Lt=j((r={},r[Qe]=f&&"disabled",r[ne]=C,r),St),Oe=g!==!0,Ht=Oe&&g!=="tail",Wt=Xt([n,Pt]);return s.createElement(s.Fragment,null,Oe&&[s.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:f?-1:0,style:z}),Et?s.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:f?-1:1,style:z}):null],!f&&s.createElement(wt,{id:jt,sideCar:tn,observed:i,disabled:f,persistentFocus:p,crossFrame:b,autoFocus:y,whiteList:N,shards:Ft,onActivation:It,onDeactivation:At,returnFocus:_t,focusOptions:Tt}),s.createElement(Rt,j({ref:Wt},Lt,{className:k,onBlur:Dt,onFocus:Nt}),c),Ht&&s.createElement("div",{"data-focus-guard":!0,tabIndex:f?-1:0,style:z}))});le.propTypes={};le.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};const tt=le;function oe(e,t){return oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},oe(e,t)}function rn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,oe(e,t)}function I(e){return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}function on(e,t){if(I(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(I(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function an(e){var t=on(e,"string");return I(t)==="symbol"?t:String(t)}function un(e,t,n){return t=an(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sn(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var i=[],u;function l(){u=e(i.map(function(d){return d.props})),t(u)}var m=function(d){rn(c,d);function c(){return d.apply(this,arguments)||this}c.peek=function(){return u};var f=c.prototype;return f.componentDidMount=function(){i.push(this),l()},f.componentDidUpdate=function(){l()},f.componentWillUnmount=function(){var p=i.indexOf(this);i.splice(p,1),l()},f.render=function(){return Ke.createElement(o,this.props)},c}(s.PureComponent);return un(m,"displayName","SideEffect("+n(o)+")"),m}}var O=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},V=function(e){return Array.isArray(e)?e:[e]},nt=function(e){return Array.isArray(e)?e[0]:e},ln=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},rt=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},ot=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},cn=function(e,t){return!e||ot(e)||!ln(e)&&t(rt(e))},at=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=cn(t,at.bind(void 0,e));return e.set(t,r),r},fn=function(e,t){return e&&!ot(e)?vn(e)?t(rt(e)):!1:!0},it=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=fn(t,it.bind(void 0,e));return e.set(t,r),r},ut=function(e){return e.dataset},dn=function(e){return e.tagName==="BUTTON"},st=function(e){return e.tagName==="INPUT"},lt=function(e){return st(e)&&e.type==="radio"},mn=function(e){return!((st(e)||dn(e))&&(e.type==="hidden"||e.disabled))},vn=function(e){var t=e.getAttribute(Kt);return![!0,"true",""].includes(t)},ce=function(e){var t;return!!(e&&(!((t=ut(e))===null||t===void 0)&&t.focusGuard))},G=function(e){return!ce(e)},pn=function(e){return!!e},hn=function(e,t){var n=e.tabIndex-t.tabIndex,r=e.index-t.index;if(n){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return n||r},ct=function(e,t,n){return O(e).map(function(r,o){return{node:r,index:o,tabIndex:n&&r.tabIndex===-1?(r.dataset||{}).focusGuard?0:-1:r.tabIndex}}).filter(function(r){return!t||r.tabIndex>=0}).sort(hn)},gn=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],fe=gn.join(","),bn="".concat(fe,", [data-focus-guard]"),ft=function(e,t){return O((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?bn:fe)?[r]:[],ft(r))},[])},yn=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?Y([e.contentDocument.body],t):[e]},Y=function(e,t){return e.reduce(function(n,r){var o,i=ft(r,t),u=(o=[]).concat.apply(o,i.map(function(l){return yn(l,t)}));return n.concat(u,r.parentNode?O(r.parentNode.querySelectorAll(fe)).filter(function(l){return l===r}):[])},[])},On=function(e){var t=e.querySelectorAll("[".concat(Jt,"]"));return O(t).map(function(n){return Y([n])}).reduce(function(n,r){return n.concat(r)},[])},de=function(e,t){return O(e).filter(function(n){return at(t,n)}).filter(function(n){return mn(n)})},Me=function(e,t){return t===void 0&&(t=new Map),O(e).filter(function(n){return it(t,n)})},ae=function(e,t,n){return ct(de(Y(e,n),t),!0,n)},ke=function(e,t){return ct(de(Y(e),t),!1)},Cn=function(e,t){return de(On(e),t)},R=function(e,t){return e.shadowRoot?R(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:O(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?R(o,t):!1}return R(n,t)})},xn=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var i=e[r].compareDocumentPosition(e[o]);(i&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(i&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(u,l){return!t.has(l)})},dt=function(e){return e.parentNode?dt(e.parentNode):e},me=function(e){var t=V(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(ne);return n.push.apply(n,o?xn(O(dt(r).querySelectorAll("[".concat(ne,'="').concat(o,'"]:not([').concat(Qe,'="disabled"])')))):[r]),n},[])},Mn=function(e){try{return e()}catch{return}},A=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?A(t.shadowRoot):t instanceof HTMLIFrameElement&&Mn(function(){return t.contentWindow.document})?A(t.contentWindow.document):t}},kn=function(e,t){return e===t},En=function(e,t){return!!O(e.querySelectorAll("iframe")).some(function(n){return kn(n,t)})},mt=function(e,t){return t===void 0&&(t=A(nt(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:me(e).some(function(n){return R(n,t)||En(n,t)})},Fn=function(e){e===void 0&&(e=document);var t=A(e);return t?O(e.querySelectorAll("[".concat(Yt,"]"))).some(function(n){return R(n,t)}):!1},Rn=function(e,t){return t.filter(lt).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},ve=function(e,t){return lt(e)&&e.name?Rn(e,t):e},Sn=function(e){var t=new Set;return e.forEach(function(n){return t.add(ve(n,e))}),e.filter(function(n){return t.has(n)})},Ee=function(e){return e[0]&&e.length>1?ve(e[0],e):e[0]},Fe=function(e,t){return e.length>1?e.indexOf(ve(e[t],e)):t},vt="NEW_FOCUS",wn=function(e,t,n,r){var o=e.length,i=e[0],u=e[o-1],l=ce(n);if(!(n&&e.indexOf(n)>=0)){var m=n!==void 0?t.indexOf(n):-1,d=r?t.indexOf(r):m,c=r?e.indexOf(r):-1,f=m-d,g=t.indexOf(i),p=t.indexOf(u),b=Sn(t),y=n!==void 0?b.indexOf(n):-1,C=y-(r?b.indexOf(r):m),k=Fe(e,0),N=Fe(e,o-1);if(m===-1||c===-1)return vt;if(!f&&c>=0)return c;if(m<=g&&l&&Math.abs(f)>1)return N;if(m>=p&&l&&Math.abs(f)>1)return k;if(f&&Math.abs(C)>1)return c;if(m<=g)return N;if(m>p)return k;if(f)return Math.abs(f)>1?c:(o+c+f)%o}},Tn=function(e){return function(t){var n,r=(n=ut(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},Bn=function(e,t,n){var r=e.map(function(i){var u=i.node;return u}),o=Me(r.filter(Tn(n)));return o&&o.length?Ee(o):Ee(Me(t))},ie=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&ie(e.parentNode.host||e.parentNode,t),t},X=function(e,t){for(var n=ie(e),r=ie(t),o=0;o<n.length;o+=1){var i=n[o];if(r.indexOf(i)>=0)return i}return!1},pt=function(e,t,n){var r=V(e),o=V(t),i=r[0],u=!1;return o.filter(Boolean).forEach(function(l){u=X(u||l,l)||u,n.filter(Boolean).forEach(function(m){var d=X(i,m);d&&(!u||R(d,u)?u=d:u=X(d,u))})}),u},jn=function(e,t){return e.reduce(function(n,r){return n.concat(Cn(r,t))},[])},In=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(pn)},An=function(e,t){var n=A(V(e).length>0?document:nt(e).ownerDocument),r=me(e).filter(G),o=pt(n||e,e,r),i=new Map,u=ke(r,i),l=ae(r,i).filter(function(p){var b=p.node;return G(b)});if(!(!l[0]&&(l=u,!l[0]))){var m=ke([o],i).map(function(p){var b=p.node;return b}),d=In(m,l),c=d.map(function(p){var b=p.node;return b}),f=wn(c,m,n,t);if(f===vt){var g=Bn(u,c,jn(r,i));if(g)return{node:g};console.warn("focus-lock: cannot find any node to move focus into");return}return f===void 0?f:d[f]}},_n=function(e){var t=me(e).filter(G),n=pt(e,e,t),r=new Map,o=ae([n],r,!0),i=ae(t,r).filter(function(u){var l=u.node;return G(l)}).map(function(u){var l=u.node;return l});return o.map(function(u){var l=u.node,m=u.index;return{node:l,index:m,lockItem:i.indexOf(l)>=0,guard:ce(l)}})},Nn=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},Z=0,ee=!1,ht=function(e,t,n){n===void 0&&(n={});var r=An(e,t);if(!ee&&r){if(Z>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),ee=!0,setTimeout(function(){ee=!1},1);return}Z++,Nn(r.node,n.focusOptions),Z--}};function pe(e){setTimeout(e,1)}var Dn=function(){return document&&document.activeElement===document.body},Pn=function(){return Dn()||Fn()},S=null,F=null,w=null,_=!1,Ln=function(){return!0},Hn=function(t){return(S.whiteList||Ln)(t)},Wn=function(t,n){w={observerNode:t,portaledElement:n}},Un=function(t){return w&&w.portaledElement===t};function Re(e,t,n,r){var o=null,i=e;do{var u=r[i];if(u.guard)u.node.dataset.focusAutoGuard&&(o=u);else if(u.lockItem){if(i!==e)return;o=null}else break}while((i+=n)!==t);o&&(o.node.tabIndex=0)}var qn=function(t){return t&&"current"in t?t.current:t},Vn=function(t){return t?!!_:_==="meanwhile"},Gn=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},$n=function(t,n){return n.some(function(r){return Gn(t,r,r)})},$=function(){var t=!1;if(S){var n=S,r=n.observed,o=n.persistentFocus,i=n.autoFocus,u=n.shards,l=n.crossFrame,m=n.focusOptions,d=r||w&&w.portaledElement,c=document&&document.activeElement;if(d){var f=[d].concat(u.map(qn).filter(Boolean));if((!c||Hn(c))&&(o||Vn(l)||!Pn()||!F&&i)&&(d&&!(mt(f)||c&&$n(c,f)||Un(c))&&(document&&!F&&c&&!i?(c.blur&&c.blur(),document.body.focus()):(t=ht(f,F,{focusOptions:m}),w={})),_=!1,F=document&&document.activeElement),document){var g=document&&document.activeElement,p=_n(f),b=p.map(function(y){var C=y.node;return C}).indexOf(g);b>-1&&(p.filter(function(y){var C=y.guard,k=y.node;return C&&k.dataset.focusAutoGuard}).forEach(function(y){var C=y.node;return C.removeAttribute("tabIndex")}),Re(b,p.length,1,p),Re(b,-1,-1,p))}}}return t},gt=function(t){$()&&t&&(t.stopPropagation(),t.preventDefault())},he=function(){return pe($)},Yn=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||Wn(r,n)},Jn=function(){return null},bt=function(){_="just",pe(function(){_="meanwhile"})},Kn=function(){document.addEventListener("focusin",gt),document.addEventListener("focusout",he),window.addEventListener("blur",bt)},Qn=function(){document.removeEventListener("focusin",gt),document.removeEventListener("focusout",he),window.removeEventListener("blur",bt)};function zn(e){return e.filter(function(t){var n=t.disabled;return!n})}function Xn(e){var t=e.slice(-1)[0];t&&!S&&Kn();var n=S,r=n&&t&&t.id===n.id;S=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var i=o.id;return i===n.id}).length||n.returnFocus(!t)),t?(F=null,(!r||n.observed!==t.observed)&&t.onActivation(),$(),pe($)):(Qn(),F=null)}Ze.assignSyncMedium(Yn);et.assignMedium(he);en.assignMedium(function(e){return e({moveFocusInside:ht,focusInside:mt})});const Zn=sn(zn,Xn)(Jn);var yt=s.forwardRef(function(t,n){return s.createElement(tt,j({sideCar:Zn,ref:n},t))}),Ot=tt.propTypes||{};Ot.sideCar;$t(Ot,["sideCar"]);yt.propTypes={};const er=yt;let B=[];const Ct={},xt=Object.freeze({overflow:"hidden",position:"relative",height:"100%"}),ue=e=>{const t=e||window.event;return t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},tr=([e,t])=>{Ct[e]=document.body.style[e],document.body.style[e]=t},nr=()=>Object.entries(xt).forEach(tr),rr=e=>document.body.style[e]=Ct[e],or=()=>Object.keys(xt).forEach(rr),ar=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function ir(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||ar(e)&&o<0?ue(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function ur(e){e.ontouchstart=null,e.ontouchmove=null}const Mt=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",ue,{passive:!1}),sr=Mt(!0),lr=Mt();function cr(e){if(!e)throw Error("Could not run setup, an element must be provided");B.some(t=>t===e)||(B.length||(nr(),sr()),ir(e),B.push(e))}function fr(){B.forEach(ur),lr(),or(),B=[]}const dr=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),mr=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),vr=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}');var pr=Object.defineProperty,Se=Object.getOwnPropertySymbols,hr=Object.prototype.hasOwnProperty,gr=Object.prototype.propertyIsEnumerable,we=(e,t,n)=>t in e?pr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,br=(e,t)=>{for(var n in t||(t={}))hr.call(t,n)&&we(e,n,t[n]);if(Se)for(var n of Se(t))gr.call(t,n)&&we(e,n,t[n]);return e},yr=JSON.parse('{"icon.title.table-sort-down":"Pil som peker nedover"}'),Or=JSON.parse('{"icon.title.table-sort-down":"Downward-pointing arrow"}'),Cr=JSON.parse('{"icon.title.table-sort-down":"Alaspäin osoittava nuoli"}'),xr=["en","nb","fi"],kt="en",Te=e=>xr.find(t=>e===t||e.toLowerCase().includes(t))||kt;function Mr(){if(typeof window>"u"){const e={}.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return Te(e)}try{const e=document.documentElement.lang;return Te(e)}catch(e){return console.warn("could not detect locale, falling back to source locale",e),kt}}var kr=(e,t,n,r)=>e==="nb"?n:e==="fi"?r:t,Er=(e,t,n)=>{const r=Mr(),o=kr(r,e,t,n);te.load(r,o),te.activate(r)};Er(Or,yr,Cr);var Fr=te.t({message:"Downward-pointing arrow",id:"icon.title.table-sort-down",comment:"Title for table sort down icon"}),Rr=e=>Ke.createElement("svg",br({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Fr}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 10.778V4.11"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.25 8.556 8 11.889l3.75-3.333"></path>`}},e)),Sr=Rr;const x=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=s.useRef(null),o=Ut(n.id),i=s.useRef(null);return qt(mr,dr,vr),s.useEffect(()=>{fr(),r.current&&n.open&&cr(r.current)},[n.open,r]),s.useEffect(()=>{var u,l;n.initialFocusRef?(l=n.initialFocusRef.current)==null||l.focus():n.right&&((u=i.current)==null||u.focus())},[n.open,n.initialFocusRef,n.right]),n.open?a.jsx(er,{children:a.jsx("div",{onClick:n.onDismiss,className:E(n.className,v.backdrop,v.transparentBg),style:{...n.style},children:a.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:u=>{u.stopPropagation()},"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:u=>{n.onDismiss&&u.key==="Escape"&&n.onDismiss()},className:v.modal,tabIndex:-1,children:[a.jsxs("div",{className:E(v.title,n.headerClasses),children:[typeof n.left=="boolean"&&n.left?a.jsx("button",{type:"button","aria-label":xe._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:E(v.transitionTitle,v.titleButton,v.titleButtonLeft),onClick:n.onDismiss,children:a.jsx(Sr,{className:E(v.titleButtonIcon,v.titleButtonIconRotated)})}):n.left,a.jsx("div",{id:`${o}__title`,className:E(v.transitionTitle,v.transitionTitleMaxWidth,n.left?[v.transitionTitleCenter,v.transitionTitleColSpan]:v.transitionTitleColSpan),children:typeof n.title=="string"?a.jsx("h1",{className:v.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?a.jsx("button",{ref:i,type:"button","aria-label":xe._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:E(v.transitionTitle,v.titleButton,v.titleButtonRight),children:a.jsx(Vt,{className:v.titleButtonIcon})}):n.right]}),a.jsx("div",{ref:r,className:v.content,children:n.children}),!!n.footer&&a.jsx("div",{className:v.footer,children:n.footer})]})})}):a.jsx(a.Fragment,{})};try{x.displayName="Modal",x.__docgenInfo={description:"A Modal dialog that renders on top the page",displayName:"Modal",props:{title:{defaultValue:null,description:"A string or your own custom elements",name:"title",required:!1,type:{name:"string | Element | Element[]"}},open:{defaultValue:null,description:"Whether the modal is open or not",name:"open",required:!0,type:{name:"boolean"}},left:{defaultValue:null,description:"A default back button or your own custom elements",name:"left",required:!1,type:{name:"boolean | Element | Element[]"}},right:{defaultValue:null,description:"A default close button or your own custom elements",name:"right",required:!1,type:{name:"boolean | Element | Element[]"}},footer:{defaultValue:null,description:"Buttons passed to the footer",name:"footer",required:!1,type:{name:"Element | Element[]"}},className:{defaultValue:null,description:"Additional classes added to the container",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"An id for the container and ARIA attributes. A random id is generated if none is provided.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional styles to the contianer",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The modal contents",name:"children",required:!0,type:{name:"Element | Element[]"}},onDismiss:{defaultValue:null,description:"Handler that is called when the user presses *esc* or clicks outside the modal",name:"onDismiss",required:!1,type:{name:"(() => void)"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.",name:"aria-labelledby",required:!1,type:{name:"string"}},initialFocusRef:{defaultValue:null,description:"A reference to the element that should be focused. By default it'll be the first interactive element.",name:"initialFocusRef",required:!1,type:{name:"RefObject<any>"}},headerClasses:{defaultValue:null,description:"Classes here will be set on the wrapper for the header.",name:"headerClasses",required:!1,type:{name:"string | Element"}}}}}catch{}const Lr={title:"Overlays/Modal"},P=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),a.jsxs(a.Fragment,{children:[a.jsx(h,{ref:r,utility:!0,onClick:n,children:"Open modal"}),a.jsxs(x,{open:e,onDismiss:n,title:"Title of the content goes here",footer:a.jsxs(a.Fragment,{children:[a.jsx(h,{onClick:n,className:"mr-12",children:"Cancel"}),a.jsx(h,{primary:!0,onClick:n,children:"Accept"})]}),children:[a.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),a.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},L=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),a.jsxs(a.Fragment,{children:[a.jsx(h,{ref:r,utility:!0,onClick:n,children:"Open modal"}),a.jsxs(x,{open:e,left:!0,right:!0,onDismiss:n,title:"Title of the content goes here",footer:a.jsxs(a.Fragment,{children:[a.jsx(h,{onClick:n,className:"mr-12",children:"Cancel"}),a.jsx(h,{primary:!0,onClick:n,children:"Accept"})]}),children:[a.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),a.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},H=()=>{const[e,t]=s.useState(!1),[n,r]=s.useState(!1),o=s.useRef(null);s.useEffect(()=>{var u;e||(r(!1),(u=o.current)==null||u.focus())},[e]);const i=()=>t(!e);return a.jsxs(a.Fragment,{children:[a.jsx(h,{ref:o,utility:!0,onClick:i,children:"Open modal"}),a.jsxs(x,{open:e,onDismiss:i,title:"Do you agree to these terms?",footer:a.jsx(h,{primary:!0,onClick:i,disabled:!n,children:"Accept"}),children:[a.jsx("p",{children:"1. You must give me 10 pushups right now"}),a.jsx(Gt,{type:"checkbox",label:"I agree",onChange:r})]})]})},W=()=>{const[e,t]=s.useState(!1),n=()=>t(!e),r=s.useRef(),o=s.useRef(null);return s.useEffect(()=>{var i;e||(i=o.current)==null||i.focus()},[e]),a.jsxs(a.Fragment,{children:[a.jsx(h,{ref:o,utility:!0,onClick:n,children:"Open modal"}),a.jsxs(x,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:a.jsxs(a.Fragment,{children:[a.jsx(h,{onClick:n,className:"mr-12",children:"Cancel"}),a.jsx(h,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[a.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),a.jsx("a",{href:"#",onClick:i=>i.preventDefault(),children:"Optional link to read more."})]})]})},U=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),a.jsxs(a.Fragment,{children:[a.jsx(h,{ref:r,utility:!0,onClick:n,children:"Open modal"}),a.jsx(x,{open:e,onDismiss:n,title:"Title of the content goes here",footer:a.jsxs(a.Fragment,{children:[a.jsx(h,{onClick:n,className:"mr-12",children:"Cancel"}),a.jsx(h,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,i)=>a.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},i))})]})},q=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),a.jsxs(a.Fragment,{children:[a.jsx(h,{ref:r,utility:!0,onClick:n,children:"Open modal"}),a.jsxs(x,{open:e,right:!0,onDismiss:n,title:"Title of the content goes here, and here we have chosen a long title!",headerClasses:"h-full sm:h-full",footer:a.jsxs(a.Fragment,{children:[a.jsx(h,{onClick:n,className:"mr-12",children:"Cancel"}),a.jsx(h,{primary:!0,onClick:n,children:"Accept"})]}),children:[a.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),a.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})};var Be,je,Ie;P.parameters={...P.parameters,docs:{...(Be=P.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>
          Content information goes here. Optional illustration on top. Can
          contain links.
        </p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(Ie=(je=P.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var Ae,_e,Ne;L.parameters={...L.parameters,docs:{...(Ae=L.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} left right onDismiss={toggleModal} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>
          Content information goes here. Optional illustration on top. Can
          contain links.
        </p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(Ne=(_e=L.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};var De,Pe,Le;H.parameters={...H.parameters,docs:{...(De=H.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      setChecked(false);
      openModalRef.current?.focus();
    }
  }, [open]);
  const toggleModal = () => setOpen(!open);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Do you agree to these terms?" footer={<Button primary onClick={toggleModal} disabled={!checked}>
            Accept
          </Button>}>
        <p>1. You must give me 10 pushups right now</p>
        <Toggle type="checkbox" label="I agree" onChange={setChecked} />
      </Modal>
    </>;
}`,...(Le=(Pe=H.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var He,We,Ue;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => setOpen(!open);
  const focusRef = React.useRef<HTMLButtonElement>();
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} initialFocusRef={focusRef} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button ref={focusRef} primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>
          Content information goes here. Optional illustration on top. Can
          contain links.
        </p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(Ue=(We=W.parameters)==null?void 0:We.docs)==null?void 0:Ue.source}}};var qe,Ve,Ge;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        {[...new Array(10)].map((e, i) => <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>)}
      </Modal>
    </>;
}`,...(Ge=(Ve=U.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var $e,Ye,Je;q.parameters={...q.parameters,docs:{...($e=q.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} right onDismiss={toggleModal} title="Title of the content goes here, and here we have chosen a long title!" headerClasses={"h-full sm:h-full"} footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>
          Content information goes here. Optional illustration on top. Can
          contain links.
        </p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(Je=(Ye=q.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};const Hr=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing","ExampleWithLongTitle"];export{P as Example,q as ExampleWithLongTitle,W as InitialFocus,H as MustConfirmToProceed,U as Overflowing,L as WithBackAndCloseButton,Hr as __namedExportsOrder,Lr as default};
//# sourceMappingURL=Modal.stories-05bf0fed.js.map