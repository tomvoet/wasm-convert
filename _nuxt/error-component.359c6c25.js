import{o as l,c as m,n as E,g as f,u as s,d as n,_ as o}from"./entry.82a6af79.js";const g={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:t}=c;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),a=r===404,u=t.statusMessage??(a?"Page Not Found":"Internal Server Error"),i=t.message||t.toString(),p=void 0,_=a?n(()=>o(()=>import("./error-404.8406d4ed.js"),["./error-404.8406d4ed.js","./entry.82a6af79.js","./entry.53aba2d4.css","./error-404.a441f75b.css"],import.meta.url).then(e=>e.default||e)):n(()=>o(()=>import("./error-500.f1e96cd3.js"),["./error-500.f1e96cd3.js","./entry.82a6af79.js","./entry.53aba2d4.css","./error-500.b4e85b33.css"],import.meta.url).then(e=>e.default||e));return(e,d)=>(l(),m(s(_),E(f({statusCode:s(r),statusMessage:s(u),description:s(i),stack:s(p)})),null,16))}},x=g;export{x as default};
