if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const o=s=>n(s,r),a={module:{uri:r},exports:t,require:o};e[r]=Promise.all(i.map((s=>a[s]||o(s)))).then((s=>(l(...s),t)))}}define(["./workbox-75ff5049"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.584be535.js",revision:null},{url:"assets/chunks/pwa.69f5f4fd.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.4bcfe1a8.js",revision:null},{url:"assets/index.md.e96bb077.js",revision:null},{url:"assets/index.md.e96bb077.lean.js",revision:null},{url:"assets/intro_contributing.md.88763acf.js",revision:null},{url:"assets/intro_contributing.md.88763acf.lean.js",revision:null},{url:"assets/intro_implementation.md.7829a635.js",revision:null},{url:"assets/intro_implementation.md.7829a635.lean.js",revision:null},{url:"assets/intro_what-is-fff.md.baa18a60.js",revision:null},{url:"assets/intro_what-is-fff.md.baa18a60.lean.js",revision:null},{url:"assets/style.1b261c97.css",revision:null},{url:"assets/version_0.1.md.72f92ba6.js",revision:null},{url:"assets/version_0.1.md.72f92ba6.lean.js",revision:null},{url:"assets/version_0.2.md.61a9d4b9.js",revision:null},{url:"assets/version_0.2.md.61a9d4b9.lean.js",revision:null},{url:"assets/version_0.3.md.dd417a9b.js",revision:null},{url:"assets/version_0.3.md.dd417a9b.lean.js",revision:null},{url:"assets/version_0.4.md.46e901f9.js",revision:null},{url:"assets/version_0.4.md.46e901f9.lean.js",revision:null},{url:"assets/version_changelog.md.027f7f7b.js",revision:null},{url:"assets/version_changelog.md.027f7f7b.lean.js",revision:null},{url:"glowing_star.svg",revision:"be698b88356d324a89466c184856846d"},{url:"manifest.webmanifest",revision:"bfd146a9c9881882d4d1899c9c310813"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
