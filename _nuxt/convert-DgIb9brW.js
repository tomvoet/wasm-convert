(function(){"use strict";var h=(n=>(n[n.PROGRESS=0]="PROGRESS",n[n.DONE=1]="DONE",n[n.ERROR=2]="ERROR",n))(h||{});let c;const O=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&O.decode();let d=null;function m(){return(d===null||d.byteLength===0)&&(d=new Uint8Array(c.memory.buffer)),d}function S(n,e){return n=n>>>0,O.decode(m().subarray(n,n+e))}const a=new Array(128).fill(void 0);a.push(void 0,null,!0,!1);function s(n){return a[n]}let w=0;const p=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},I=typeof p.encodeInto=="function"?function(n,e){return p.encodeInto(n,e)}:function(n,e){const t=p.encode(n);return e.set(t),{read:n.length,written:t.length}};function R(n,e,t){if(t===void 0){const f=p.encode(n),_=e(f.length,1)>>>0;return m().subarray(_,_+f.length).set(f),w=f.length,_}let r=n.length,o=e(r,1)>>>0;const l=m();let i=0;for(;i<r;i++){const f=n.charCodeAt(i);if(f>127)break;l[o+i]=f}if(i!==r){i!==0&&(n=n.slice(i)),o=t(o,r,r=i+n.length*3,1)>>>0;const f=m().subarray(o+i,o+r),_=I(n,f);i+=_.written,o=t(o,r,i,1)>>>0}return w=i,o}function L(n){return n==null}let g=null;function A(){return(g===null||g.byteLength===0)&&(g=new Int32Array(c.memory.buffer)),g}let y=a.length;function U(n){n<132||(a[n]=y,y=n)}function T(n){const e=s(n);return U(n),e}function u(n){y===a.length&&a.push(a.length+1);const e=y;return y=a[e],a[e]=n,e}function v(n,e){try{return n.apply(this,e)}catch(t){c.__wbindgen_exn_store(u(t))}}let b=128;function E(n){if(b==1)throw new Error("out of js stack");return a[--b]=n,b}function j(n,e,t,r,o){try{const l=R(e,c.__wbindgen_malloc,c.__wbindgen_realloc),i=w,f=R(t,c.__wbindgen_malloc,c.__wbindgen_realloc),_=w,C=c.convertImage(E(n),l,i,f,_,E(r),E(o));return T(C)}finally{a[b++]=void 0,a[b++]=void 0,a[b++]=void 0}}async function D(n,e){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,e)}catch(r){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}function M(){const n={};return n.wbg={},n.wbg.__wbg_call_8e7cb608789c2528=function(){return v(function(e,t,r,o){const l=s(e).call(s(t),s(r),s(o));return u(l)},arguments)},n.wbg.__wbindgen_throw=function(e,t){throw new Error(S(e,t))},n.wbg.__wbindgen_is_undefined=function(e){return s(e)===void 0},n.wbg.__wbindgen_is_null=function(e){return s(e)===null},n.wbg.__wbg_stringify_8887fe74e1c50d81=function(){return v(function(e){const t=JSON.stringify(s(e));return u(t)},arguments)},n.wbg.__wbindgen_string_get=function(e,t){const r=s(t),o=typeof r=="string"?r:void 0;var l=L(o)?0:R(o,c.__wbindgen_malloc,c.__wbindgen_realloc),i=w;A()[e/4+1]=i,A()[e/4+0]=l},n.wbg.__wbindgen_object_drop_ref=function(e){T(e)},n.wbg.__wbindgen_number_new=function(e){return u(e)},n.wbg.__wbindgen_string_new=function(e,t){const r=S(e,t);return u(r)},n.wbg.__wbg_length_c20a40f15020d68a=function(e){return s(e).length},n.wbg.__wbindgen_memory=function(){const e=c.memory;return u(e)},n.wbg.__wbg_buffer_12d079cc21e14bdb=function(e){const t=s(e).buffer;return u(t)},n.wbg.__wbg_new_63b92bc8671ed464=function(e){const t=new Uint8Array(s(e));return u(t)},n.wbg.__wbg_set_a47bac70306a19a7=function(e,t,r){s(e).set(s(t),r>>>0)},n.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb=function(e,t,r){const o=new Uint8Array(s(e),t>>>0,r>>>0);return u(o)},n}function N(n,e){return c=n.exports,x.__wbindgen_wasm_module=e,g=null,d=null,c}async function x(n){if(c!==void 0)return c;typeof n>"u"&&(n=new URL(""+new URL("wasm_convert_bg-CcobrQRG.wasm",self.location.href).href,self.location.href));const e=M();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:t,module:r}=await D(await n,e);return N(t,r)}globalThis.addEventListener("message",async n=>{await x();try{const t={success:!0,data:j(n.data.inputFile,n.data.inputType,n.data.outputType,W,n.data.settings)};globalThis.postMessage({type:h.DONE,payload:t})}catch(e){const t={success:!1,error:String(e)};globalThis.postMessage({type:h.ERROR,payload:t})}},!1);function W(n,e){globalThis.postMessage({type:h.PROGRESS,payload:{progress:n,message:e}})}})();
