(function(){"use strict";var p=(n=>(n[n.PROGRESS=0]="PROGRESS",n[n.DONE=1]="DONE",n[n.ERROR=2]="ERROR",n))(p||{});let o;const S=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&S.decode();let b=null;function m(){return(b===null||b.byteLength===0)&&(b=new Uint8Array(o.memory.buffer)),b}function A(n,e){return n=n>>>0,S.decode(m().subarray(n,n+e))}const a=new Array(128).fill(void 0);a.push(void 0,null,!0,!1);function s(n){return a[n]}let w=0;const R=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},j=typeof R.encodeInto=="function"?function(n,e){return R.encodeInto(n,e)}:function(n,e){const t=R.encode(n);return e.set(t),{read:n.length,written:t.length}};function E(n,e,t){if(t===void 0){const f=R.encode(n),u=e(f.length,1)>>>0;return m().subarray(u,u+f.length).set(f),w=f.length,u}let r=n.length,i=e(r,1)>>>0;const l=m();let c=0;for(;c<r;c++){const f=n.charCodeAt(c);if(f>127)break;l[i+c]=f}if(c!==r){c!==0&&(n=n.slice(c)),i=t(i,r,r=c+n.length*3,1)>>>0;const f=m().subarray(i+c,i+r),u=j(n,f);c+=u.written,i=t(i,r,c,1)>>>0}return w=c,i}function I(n){return n==null}let g=null;function y(){return(g===null||g.byteLength===0)&&(g=new Int32Array(o.memory.buffer)),g}let h=a.length;function L(n){n<132||(a[n]=h,h=n)}function O(n){const e=s(n);return L(n),e}function _(n){h===a.length&&a.push(a.length+1);const e=h;return h=a[e],a[e]=n,e}function T(n,e){try{return n.apply(this,e)}catch(t){o.__wbindgen_exn_store(_(t))}}let d=128;function v(n){if(d==1)throw new Error("out of js stack");return a[--d]=n,d}function U(n,e,t,r,i){try{const u=o.__wbindgen_add_to_stack_pointer(-16),k=E(e,o.__wbindgen_malloc,o.__wbindgen_realloc),B=w,F=E(t,o.__wbindgen_malloc,o.__wbindgen_realloc),C=w;o.convertImage(u,v(n),k,B,F,C,v(r),v(i));var l=y()[u/4+0],c=y()[u/4+1],f=y()[u/4+2];if(f)throw O(c);return O(l)}finally{o.__wbindgen_add_to_stack_pointer(16),a[d++]=void 0,a[d++]=void 0,a[d++]=void 0}}async function D(n,e){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,e)}catch(r){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}function N(){const n={};return n.wbg={},n.wbg.__wbg_call_8e7cb608789c2528=function(){return T(function(e,t,r,i){const l=s(e).call(s(t),s(r),s(i));return _(l)},arguments)},n.wbg.__wbindgen_throw=function(e,t){throw new Error(A(e,t))},n.wbg.__wbindgen_is_undefined=function(e){return s(e)===void 0},n.wbg.__wbg_stringify_8887fe74e1c50d81=function(){return T(function(e){const t=JSON.stringify(s(e));return _(t)},arguments)},n.wbg.__wbindgen_string_get=function(e,t){const r=s(t),i=typeof r=="string"?r:void 0;var l=I(i)?0:E(i,o.__wbindgen_malloc,o.__wbindgen_realloc),c=w;y()[e/4+1]=c,y()[e/4+0]=l},n.wbg.__wbindgen_object_drop_ref=function(e){O(e)},n.wbg.__wbindgen_number_new=function(e){return _(e)},n.wbg.__wbindgen_string_new=function(e,t){const r=A(e,t);return _(r)},n.wbg.__wbg_length_c20a40f15020d68a=function(e){return s(e).length},n.wbg.__wbindgen_memory=function(){const e=o.memory;return _(e)},n.wbg.__wbg_buffer_12d079cc21e14bdb=function(e){const t=s(e).buffer;return _(t)},n.wbg.__wbg_new_63b92bc8671ed464=function(e){const t=new Uint8Array(s(e));return _(t)},n.wbg.__wbg_set_a47bac70306a19a7=function(e,t,r){s(e).set(s(t),r>>>0)},n.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb=function(e,t,r){const i=new Uint8Array(s(e),t>>>0,r>>>0);return _(i)},n}function M(n,e){return o=n.exports,x.__wbindgen_wasm_module=e,g=null,b=null,o}async function x(n){if(o!==void 0)return o;typeof n>"u"&&(n=new URL(""+new URL("wasm_convert_bg-BWlNjKcR.wasm",self.location.href).href,self.location.href));const e=N();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:t,module:r}=await D(await n,e);return M(t,r)}globalThis.addEventListener("message",async n=>{await x();try{const t={success:!0,data:U(n.data.inputFile,n.data.inputType,n.data.outputType,W,n.data.settings)};globalThis.postMessage({type:p.DONE,payload:t})}catch(e){const t={success:!1,error:String(e)};globalThis.postMessage({type:p.ERROR,payload:t})}},!1);function W(n,e){globalThis.postMessage({type:p.PROGRESS,payload:{progress:n,message:e}})}})();
