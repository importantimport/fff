import{Q as s,M as r,a5 as p,a6 as u,a7 as c,a8 as l,a9 as d,aa as f,ab as m,ac as h,ad as A,ae as _,d as g,u as P,q as v,k as y,af as C,ag as E,ah as w,ai as R}from"./chunks/framework.8f17d1d7.js";import{t as b}from"./chunks/theme.11d37914.js";s&&r(()=>import("./chunks/pwa.a79bf4e1.js"),["assets/chunks/pwa.a79bf4e1.js","assets/chunks/framework.8f17d1d7.js"]);function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=i(b),D=g({name:"VitePressApp",setup(){const{site:e}=P();return v(()=>{y(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),C(),E(),w(),n.setup&&n.setup(),()=>R(n.Layout)}});async function O(){const e=L(),a=T();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",d),a.component("ClientOnly",f),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function T(){return h(D)}function L(){let e=s,a;return A(t=>{let o=_(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),r(()=>import(o),[])},n.NotFound)}s&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{O as createApp};
