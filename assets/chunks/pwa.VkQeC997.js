import{Y as m}from"./framework.ekaVIUcx.js";function p(t={}){const{immediate:d=!1,onNeedRefresh:u,onOfflineReady:r,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=t;let i,n;const l=async(c=!0)=>{await n};async function w(){if("serviceWorker"in navigator){const{Workbox:c}=await m(()=>import("./workbox-window.prod.es5.prqDwDSL.js"),__vite__mapDeps([]));i=new c("/sw.js",{scope:"/",type:"classic"}),i.addEventListener("activated",e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),i.addEventListener("installed",e=>{e.isUpdate||r==null||r()}),i.register({immediate:d}).then(e=>{o?o("/sw.js",e):a==null||a(e)}).catch(e=>{s==null||s(e)})}}return n=w(),l}p({immediate:!0,onRegisterError:t=>console.error(t),onRegistered:t=>t&&setInterval(async()=>await t.update(),198964)});
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}