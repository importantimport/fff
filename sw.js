if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>n(e,r),f={module:{uri:r},exports:a,require:t};s[r]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(l(...e),a)))}}define(["./workbox-eb0071cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"34ecf281e88306b63d35fc8d160a763b"},{url:"assets/app.84a5aa78.js",revision:null},{url:"assets/CHANGELOG.md.f57e75e5.js",revision:null},{url:"assets/CHANGELOG.md.f57e75e5.lean.js",revision:null},{url:"assets/chunks/pwa.b88bf4ed.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.4bcfe1a8.js",revision:null},{url:"assets/index.md.9bf235f0.js",revision:null},{url:"assets/index.md.9bf235f0.lean.js",revision:null},{url:"assets/intro_contributing.md.783e186e.js",revision:null},{url:"assets/intro_contributing.md.783e186e.lean.js",revision:null},{url:"assets/intro_implementing.md.c3e5fd69.js",revision:null},{url:"assets/intro_implementing.md.c3e5fd69.lean.js",revision:null},{url:"assets/intro_showcase.md.c88b218e.js",revision:null},{url:"assets/intro_showcase.md.c88b218e.lean.js",revision:null},{url:"assets/intro_what-is-fff.md.183f3d8f.js",revision:null},{url:"assets/intro_what-is-fff.md.183f3d8f.lean.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.700f7a99.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.700f7a99.lean.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.5ebefa25.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.5ebefa25.lean.js",revision:null},{url:"assets/packages_markdown-it-fff.md.f9c329e0.js",revision:null},{url:"assets/packages_markdown-it-fff.md.f9c329e0.lean.js",revision:null},{url:"assets/packages_remark-fff.md.f267a3fc.js",revision:null},{url:"assets/packages_remark-fff.md.f267a3fc.lean.js",revision:null},{url:"assets/style.864b2d19.css",revision:null},{url:"assets/version_0.1.md.d79eacb1.js",revision:null},{url:"assets/version_0.1.md.d79eacb1.lean.js",revision:null},{url:"assets/version_0.2.md.17be61c5.js",revision:null},{url:"assets/version_0.2.md.17be61c5.lean.js",revision:null},{url:"assets/version_0.3.md.34ff598e.js",revision:null},{url:"assets/version_0.3.md.34ff598e.lean.js",revision:null},{url:"assets/version_0.4.md.bdfd2b2f.js",revision:null},{url:"assets/version_0.4.md.bdfd2b2f.lean.js",revision:null},{url:"assets/version_0.5.md.23f58ded.js",revision:null},{url:"assets/version_0.5.md.23f58ded.lean.js",revision:null},{url:"assets/version_changelog.md.ffacfaa3.js",revision:null},{url:"assets/version_changelog.md.ffacfaa3.lean.js",revision:null},{url:"CHANGELOG.html",revision:"164c8e5859af7673e5d6913e4a8d056a"},{url:"index.html",revision:"ce387cc9f47e55a2dd44b2a63844a0d1"},{url:"intro/contributing.html",revision:"a8d12b150201ab9a35d8c0997bb111e5"},{url:"intro/implementing.html",revision:"eaa39ce907534b8d99adbf013997cfc0"},{url:"intro/showcase.html",revision:"36403aa3f89a9dc5d946a0570333a099"},{url:"intro/what-is-fff.html",revision:"54df48ca19e023474e379bd0a73b5435"},{url:"packages/fff-flavored-frontmatter.html",revision:"bfd3263935e846075432fe1f24a800fc"},{url:"packages/indiekit-preset-fff.html",revision:"5f7d656618d827f398307831080a3257"},{url:"packages/markdown-it-fff.html",revision:"e5b56928f29c5646d98b8208b8d6a852"},{url:"packages/remark-fff.html",revision:"4bb9a221023bfdc22f09cb7747c623ce"},{url:"version/0.1.html",revision:"7e3270cdc9eb5c662e6074a08ed79859"},{url:"version/0.2.html",revision:"aebf9f5e743193ff8359cb1c7c5c64ed"},{url:"version/0.3.html",revision:"97f70f2245056e8df6fb04504d8fe0eb"},{url:"version/0.4.html",revision:"366902c1d6a9e9261bf9e051eed3f257"},{url:"version/0.5.html",revision:"339f3af96550d1970e2499c1cd052b34"},{url:"version/changelog.html",revision:"fd8a24fb191085c063b308e833a66091"},{url:"manifest.webmanifest",revision:"bfd146a9c9881882d4d1899c9c310813"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
