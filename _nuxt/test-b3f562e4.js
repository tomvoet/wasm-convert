(function(){"use strict";let a;const c=new Array(128).fill(void 0);c.push(void 0,null,!0,!1);function f(e){return c[e]}let u=c.length;function W(e){e<132||(c[e]=u,u=e)}function p(e){const n=f(e);return W(e),n}const A=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});A.decode();let b=null;function w(){return(b===null||b.byteLength===0)&&(b=new Uint8Array(a.memory.buffer)),b}function m(e,n){return A.decode(w().subarray(e,e+n))}function _(e){u===c.length&&c.push(c.length+1);const n=u;return u=c[n],c[n]=e,n}let d=0;const g=new TextEncoder("utf-8"),S=typeof g.encodeInto=="function"?function(e,n){return g.encodeInto(e,n)}:function(e,n){const t=g.encode(e);return n.set(t),{read:e.length,written:t.length}};function R(e,n,t){if(t===void 0){const s=g.encode(e),l=n(s.length);return w().subarray(l,l+s.length).set(s),d=s.length,l}let r=e.length,i=n(r);const h=w();let o=0;for(;o<r;o++){const s=e.charCodeAt(o);if(s>127)break;h[i+o]=s}if(o!==r){o!==0&&(e=e.slice(o)),i=t(i,r,r=o+e.length*3);const s=w().subarray(i+o,i+r),l=S(e,s);o+=l.written}return d=o,i}let y=128;function T(e){if(y==1)throw new Error("out of js stack");return c[--y]=e,y}function E(e,n,t){try{const r=R(n,a.__wbindgen_malloc,a.__wbindgen_realloc),i=d,h=R(t,a.__wbindgen_malloc,a.__wbindgen_realloc),o=d,s=a.convert_image(T(e),r,i,h,o);return p(s)}finally{c[y++]=void 0}}async function O(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}else{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}function j(){const e={};return e.wbg={},e.wbg.__wbg_alert_e63a4c41bbd7a3e9=function(n,t){alert(m(n,t))},e.wbg.__wbg_log_12af4e1f5b304c40=function(n,t){console.log(m(n,t))},e.wbg.__wbindgen_object_drop_ref=function(n){p(n)},e.wbg.__wbg_buffer_cf65c07de34b9a08=function(n){const t=f(n).buffer;return _(t)},e.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5=function(n,t,r){const i=new Uint8Array(f(n),t>>>0,r>>>0);return _(i)},e.wbg.__wbg_new_537b7341ce90bb31=function(n){const t=new Uint8Array(f(n));return _(t)},e.wbg.__wbg_set_17499e8aa4003ebd=function(n,t,r){f(n).set(f(t),r>>>0)},e.wbg.__wbg_length_27a2afe8ab42b09f=function(n){return f(n).length},e.wbg.__wbindgen_throw=function(n,t){throw new Error(m(n,t))},e.wbg.__wbindgen_memory=function(){const n=a.memory;return _(n)},e}function I(e,n){return a=e.exports,U.__wbindgen_wasm_module=n,b=null,a}async function U(e){typeof e>"u"&&(e=new URL(""+new URL("wasm_bg-8c8dcbb8.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href,self.location));const n=j();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await O(await e,n);return I(t,r)}self.addEventListener("message",async function(e){console.log("worker started"),await U();const n=E(e.data.inputFile,e.data.inputType,e.data.outputType);self.postMessage(n)},!1)})();
