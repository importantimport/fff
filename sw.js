if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let r={};const o=s=>n(s,t),a={module:{uri:t},exports:r,require:o};e[t]=Promise.all(i.map((s=>a[s]||o(s)))).then((s=>(l(...s),r)))}}define(["./workbox-a7aed9cb"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.3160d9c2.js",revision:null},{url:"assets/chunks/pwa.0db7b733.js",revision:null},{url:"assets/index.md.ee3147f0.js",revision:null},{url:"assets/index.md.ee3147f0.lean.js",revision:null},{url:"assets/intro_contributing.md.65a71366.js",revision:null},{url:"assets/intro_contributing.md.65a71366.lean.js",revision:null},{url:"assets/intro_implementation.md.4d693a06.js",revision:null},{url:"assets/intro_implementation.md.4d693a06.lean.js",revision:null},{url:"assets/intro_what-is-fff.md.59d1741e.js",revision:null},{url:"assets/intro_what-is-fff.md.59d1741e.lean.js",revision:null},{url:"assets/style.31cd26c6.css",revision:null},{url:"assets/version_0.1.md.31567159.js",revision:null},{url:"assets/version_0.1.md.31567159.lean.js",revision:null},{url:"assets/version_0.2.md.de3b0619.js",revision:null},{url:"assets/version_0.2.md.de3b0619.lean.js",revision:null},{url:"assets/version_changelog.md.b57523a2.js",revision:null},{url:"assets/version_changelog.md.b57523a2.lean.js",revision:null},{url:"glowing_star.svg",revision:"be698b88356d324a89466c184856846d"},{url:"manifest.webmanifest",revision:"438b8680b876d7d4b802fb091b334573"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
