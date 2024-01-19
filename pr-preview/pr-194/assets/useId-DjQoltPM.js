import{r as f}from"./index-pMVFT59f.js";var w=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];n.call(r,s[1],s[0])}},t}()}(),b=typeof window<"u"&&typeof document<"u"&&window.document===document,h=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),x=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(h):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),A=2;function z(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function s(){x(o)}function a(){var u=Date.now();if(n){if(u-i<A)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=u}return a}var T=20,S=["top","right","bottom","left","width","height","size","weight"],C=typeof MutationObserver<"u",D=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=z(this.refresh.bind(this),T)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!b||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),C?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!b||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=S.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),O=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},c=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||h},E=l(0,0,0,0);function d(e){return parseFloat(e)||0}function y(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+d(o)},0)}function I(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],s=e["padding-"+o];n[o]=d(s)}return n}function L(e){var t=e.getBBox();return l(0,0,t.width,t.height)}function G(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return E;var r=c(e).getComputedStyle(e),i=I(r),o=i.left+i.right,s=i.top+i.bottom,a=d(r.width),u=d(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=y(r,"left","right")+o),Math.round(u+s)!==n&&(u-=y(r,"top","bottom")+s)),!H(e)){var _=Math.round(a+o)-t,m=Math.round(u+s)-n;Math.abs(_)!==1&&(a-=_),Math.abs(m)!==1&&(u-=m)}return l(i.left,i.top,a,u)}var P=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof c(e).SVGGraphicsElement}:function(e){return e instanceof c(e).SVGElement&&typeof e.getBBox=="function"}}();function H(e){return e===c(e).document.documentElement}function W(e){return b?P(e)?L(e):G(e):E}function j(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return O(s,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),s}function l(e,t,n,r){return{x:e,y:t,width:n,height:r}}var F=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=l(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=W(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),k=function(){function e(t,n){var r=j(n);O(this,{target:t,contentRect:r})}return e}(),q=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new w,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof c(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new F(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof c(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new k(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),R=typeof WeakMap<"u"?new WeakMap:new w,M=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=D.getInstance(),r=new q(t,n,this);R.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){M.prototype[e]=function(){var t;return(t=R.get(this))[e].apply(t,arguments)}});(function(){return typeof h.ResizeObserver<"u"?h.ResizeObserver:M})();const B=typeof window<"u"?f.useLayoutEffect:f.useEffect;let v=!1;const V=N();let p=0;const g=()=>(p=p+1,V+p),K=e=>{const t=e||(v?g():null),[n,r]=f.useState(t);return B(()=>{n===null&&r(g())},[]),f.useEffect(()=>{v===!1&&(v=!0)},[]),n};function N(){return Date.now().toString(36)+Math.random().toString(36).slice(2,5)}export{B as a,N as g,K as u};
