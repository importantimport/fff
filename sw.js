if(!self.define){let e,f={};const s=(s,r)=>(s=new URL(s+".js",r).href,f[s]||new Promise((f=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=f,document.head.appendChild(e)}else e=s,importScripts(s),f()})).then((()=>{let e=f[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(f[i])return;let t={};const l=e=>s(e,i),a={module:{uri:i},exports:t,require:l};f[i]=Promise.all(r.map((e=>a[e]||l(e)))).then((e=>(n(...e),t)))}}define(["./workbox-f275fa96"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"38e8ae643c3760f96fe873ef9420d5f9"},{url:"assets/app.0a02f0df.js",revision:null},{url:"assets/CHANGELOG.md.c58fa3f6.js",revision:null},{url:"assets/CHANGELOG.md.c58fa3f6.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.35b64973.js",revision:null},{url:"assets/chunks/framework.8f17d1d7.js",revision:null},{url:"assets/chunks/pwa.a79bf4e1.js",revision:null},{url:"assets/chunks/theme.cb23315e.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.f6045d2c.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.dc90f814.js",revision:null},{url:"assets/concepts_flags.md.e777386d.js",revision:null},{url:"assets/concepts_flags.md.e777386d.lean.js",revision:null},{url:"assets/concepts_flavor-transform.md.c9c58d7a.js",revision:null},{url:"assets/concepts_flavor-transform.md.c9c58d7a.lean.js",revision:null},{url:"assets/concepts_object-media.md.34725825.js",revision:null},{url:"assets/concepts_object-media.md.34725825.lean.js",revision:null},{url:"assets/index.md.5efbccdb.js",revision:null},{url:"assets/index.md.5efbccdb.lean.js",revision:null},{url:"assets/intro_contributing.md.eff5393c.js",revision:null},{url:"assets/intro_contributing.md.eff5393c.lean.js",revision:null},{url:"assets/intro_implementing.md.571277d9.js",revision:null},{url:"assets/intro_implementing.md.571277d9.lean.js",revision:null},{url:"assets/intro_showcase.md.7938f9df.js",revision:null},{url:"assets/intro_showcase.md.7938f9df.lean.js",revision:null},{url:"assets/intro_what-is-fff.md.71830eee.js",revision:null},{url:"assets/intro_what-is-fff.md.71830eee.lean.js",revision:null},{url:"assets/packages_create-fff.md.092870a0.js",revision:null},{url:"assets/packages_create-fff.md.092870a0.lean.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.a9154c54.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.a9154c54.lean.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.50e1dbdf.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.50e1dbdf.lean.js",revision:null},{url:"assets/packages_markdown-it-fff.md.0fb256f6.js",revision:null},{url:"assets/packages_markdown-it-fff.md.0fb256f6.lean.js",revision:null},{url:"assets/packages_remark-fff.md.9a4f10e5.js",revision:null},{url:"assets/packages_remark-fff.md.9a4f10e5.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffaudio.md.f61834e4.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffaudio.md.f61834e4.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffauthor.md.97b946f6.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffauthor.md.97b946f6.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffbase.md.e22f1b5f.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffbase.md.e22f1b5f.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffdatetime.md.223618fd.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffdatetime.md.223618fd.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffextra.md.9b700756.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffextra.md.9b700756.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffflavoredfrontmatter.md.e6136c41.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffflavoredfrontmatter.md.e6136c41.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffimage.md.8ca7a8ef.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffimage.md.8ca7a8ef.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmedia.md.38e93825.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmedia.md.38e93825.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmention.md.8465f12b.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmention.md.8465f12b.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpreset.md.716e3b91.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpreset.md.716e3b91.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpresetreverse.md.03c147d8.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpresetreverse.md.03c147d8.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpresetvalue.md.177b298e.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpresetvalue.md.177b298e.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffvideo.md.f191be89.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffvideo.md.f191be89.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.md.1692a455.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.md.1692a455.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strict.md.53db0c0f.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strict.md.53db0c0f.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strictpresetoptions.md.f3497483.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strictpresetoptions.md.f3497483.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.tojsonfeeditem.md.9b6f6ea7.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.tojsonfeeditem.md.9b6f6ea7.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.transform.md.473acd9f.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.transform.md.473acd9f.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.typediscovery.md.e3503525.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.typediscovery.md.e3503525.lean.js",revision:null},{url:"assets/references_fff-transform-presets.hexo.md.7f6cd3be.js",revision:null},{url:"assets/references_fff-transform-presets.hexo.md.7f6cd3be.lean.js",revision:null},{url:"assets/references_fff-transform-presets.hugo.md.dfa02fd8.js",revision:null},{url:"assets/references_fff-transform-presets.hugo.md.dfa02fd8.lean.js",revision:null},{url:"assets/references_fff-transform-presets.jekyll.md.cbaf1cac.js",revision:null},{url:"assets/references_fff-transform-presets.jekyll.md.cbaf1cac.lean.js",revision:null},{url:"assets/references_fff-transform-presets.md.bf549333.js",revision:null},{url:"assets/references_fff-transform-presets.md.bf549333.lean.js",revision:null},{url:"assets/references_fff-transform-presets.mditvue.md.be17a094.js",revision:null},{url:"assets/references_fff-transform-presets.mditvue.md.be17a094.lean.js",revision:null},{url:"assets/references_fff-transform-presets.mditvuereverse.md.a47ea76d.js",revision:null},{url:"assets/references_fff-transform-presets.mditvuereverse.md.a47ea76d.lean.js",revision:null},{url:"assets/references_fff-transform-presets.nuxt.md.b9fa11f4.js",revision:null},{url:"assets/references_fff-transform-presets.nuxt.md.b9fa11f4.lean.js",revision:null},{url:"assets/references_index.md.d10ce8b9.js",revision:null},{url:"assets/references_index.md.d10ce8b9.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff._constructor_.md.ce2db55f.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff._constructor_.md.ce2db55f.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.id.md.7c616cc5.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.id.md.7c616cc5.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.info.md.f5062083.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.info.md.f5062083.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.init.md.52f62144.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.init.md.52f62144.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.md.31600bdd.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.md.31600bdd.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.meta.md.60335090.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.meta.md.60335090.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.name.md.1c4f50f7.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.name.md.1c4f50f7.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.options.md.9bc2fadb.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.options.md.9bc2fadb.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttemplate.md.69340a90.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttemplate.md.69340a90.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttypes.md.dfb92b21.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttypes.md.dfb92b21.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.prompts.md.9e2633b8.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.prompts.md.9e2633b8.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfffoptions.md.4d797140.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfffoptions.md.4d797140.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.md.ba28f1c3.js",revision:null},{url:"assets/references_indiekit-preset-fff.md.ba28f1c3.lean.js",revision:null},{url:"assets/references_markdown-it-fff.fffplugin.md.d1977c37.js",revision:null},{url:"assets/references_markdown-it-fff.fffplugin.md.d1977c37.lean.js",revision:null},{url:"assets/references_markdown-it-fff.fffpluginoptions.md.0592f356.js",revision:null},{url:"assets/references_markdown-it-fff.fffpluginoptions.md.0592f356.lean.js",revision:null},{url:"assets/references_markdown-it-fff.md.fa61132f.js",revision:null},{url:"assets/references_markdown-it-fff.md.fa61132f.lean.js",revision:null},{url:"assets/references_remark-fff.fs.md.15eaa7ec.js",revision:null},{url:"assets/references_remark-fff.fs.md.15eaa7ec.lean.js",revision:null},{url:"assets/references_remark-fff.git.md.61f7301c.js",revision:null},{url:"assets/references_remark-fff.git.md.61f7301c.lean.js",revision:null},{url:"assets/references_remark-fff.md.bf5d942d.js",revision:null},{url:"assets/references_remark-fff.md.bf5d942d.lean.js",revision:null},{url:"assets/references_remark-fff.path.md.3d8eb0e1.js",revision:null},{url:"assets/references_remark-fff.path.md.3d8eb0e1.lean.js",revision:null},{url:"assets/references_remark-fff.remarkfff.md.e2792c24.js",revision:null},{url:"assets/references_remark-fff.remarkfff.md.e2792c24.lean.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.md.82082317.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.md.82082317.lean.js",revision:null},{url:"assets/style.ebb4c266.css",revision:null},{url:"assets/version_0.1.md.9e16a55b.js",revision:null},{url:"assets/version_0.1.md.9e16a55b.lean.js",revision:null},{url:"assets/version_0.2.md.8c9e9c35.js",revision:null},{url:"assets/version_0.2.md.8c9e9c35.lean.js",revision:null},{url:"assets/version_0.3.md.2a40f345.js",revision:null},{url:"assets/version_0.3.md.2a40f345.lean.js",revision:null},{url:"assets/version_0.4.md.525a3652.js",revision:null},{url:"assets/version_0.4.md.525a3652.lean.js",revision:null},{url:"assets/version_0.5.md.4ba54f0b.js",revision:null},{url:"assets/version_0.5.md.4ba54f0b.lean.js",revision:null},{url:"assets/version_0.6.md.fc2c4975.js",revision:null},{url:"assets/version_0.6.md.fc2c4975.lean.js",revision:null},{url:"assets/version_changelog.md.439272c0.js",revision:null},{url:"assets/version_changelog.md.439272c0.lean.js",revision:null},{url:"CHANGELOG.html",revision:"cb9d0c54e9abbd46776ed5bfd82ac92d"},{url:"concepts/flags.html",revision:"0a38f645b5112854d791d84cc9395b94"},{url:"concepts/flavor-transform.html",revision:"411ba5dfc7a6237379cc23a4ea5ef408"},{url:"concepts/object-media.html",revision:"d93e30327f91ef7ac1f68e5fe31e5c79"},{url:"index.html",revision:"113e78f833dad00b8e5d44ec65bb3d36"},{url:"intro/contributing.html",revision:"2d1c881077ba2bc549a30d6d1c233f08"},{url:"intro/implementing.html",revision:"caabc377727b968c2748c4ed27d69559"},{url:"intro/showcase.html",revision:"0feb19c18ff503619c59f53e57455cb1"},{url:"intro/what-is-fff.html",revision:"e3a8f4035d487de9ed4fe8a21d6d4c9e"},{url:"packages/create-fff.html",revision:"e7a848e48d9d0a2708112161d3a7dc10"},{url:"packages/fff-flavored-frontmatter.html",revision:"2390f269abcfced9aeeb0005530207db"},{url:"packages/indiekit-preset-fff.html",revision:"c6acac90187a4515ca62f84d1539d744"},{url:"packages/markdown-it-fff.html",revision:"5a240b6352cad949e9792dcd459fe30f"},{url:"packages/remark-fff.html",revision:"ce35bdda713fbe64bdc5ede0da08d8fc"},{url:"references/fff-flavored-frontmatter.fffaudio.html",revision:"d8055636897dcd55d9cfa01058006ce0"},{url:"references/fff-flavored-frontmatter.fffauthor.html",revision:"942b47acce458178c5df4821c1051493"},{url:"references/fff-flavored-frontmatter.fffbase.html",revision:"7873030f6f4543ea9a3dc7577b1f7968"},{url:"references/fff-flavored-frontmatter.fffdatetime.html",revision:"9271142206fabaff86ae30a8e3dd1fc6"},{url:"references/fff-flavored-frontmatter.fffextra.html",revision:"b70863f5236c6f50d5585cd648973996"},{url:"references/fff-flavored-frontmatter.fffflavoredfrontmatter.html",revision:"14de812c7ff58ae890825b04369afcbc"},{url:"references/fff-flavored-frontmatter.fffimage.html",revision:"d924cb1339629e8299d3f71813841cde"},{url:"references/fff-flavored-frontmatter.fffmedia.html",revision:"cb5dfc441e8abc18a9fae9a0982d3fdf"},{url:"references/fff-flavored-frontmatter.fffmention.html",revision:"5fa388dd6c61fb15461e3b0ee710dc51"},{url:"references/fff-flavored-frontmatter.ffftransformpreset.html",revision:"1bb6a42d9755c8277ae84389adb483f0"},{url:"references/fff-flavored-frontmatter.ffftransformpresetreverse.html",revision:"30e106547242ab8022bb1042e7feee8d"},{url:"references/fff-flavored-frontmatter.ffftransformpresetvalue.html",revision:"f10a5d11fafbb45becdc311cea5e8378"},{url:"references/fff-flavored-frontmatter.fffvideo.html",revision:"04930c4c06954e3ad1bed421233d3153"},{url:"references/fff-flavored-frontmatter.html",revision:"935926aae7a85917fb999ab3bc18aca2"},{url:"references/fff-flavored-frontmatter.strict.html",revision:"ebcf50c0a6ce9e9174c64a1eb6f13946"},{url:"references/fff-flavored-frontmatter.strictpresetoptions.html",revision:"c837508c0e90ce84be8451b2b2e32719"},{url:"references/fff-flavored-frontmatter.tojsonfeeditem.html",revision:"f4077bf6e6dde37a079410af53ad4c53"},{url:"references/fff-flavored-frontmatter.transform.html",revision:"862689f5eb9e02e3beba2614dc971549"},{url:"references/fff-flavored-frontmatter.typediscovery.html",revision:"68c5be576f82313a7784e23df8b04e87"},{url:"references/fff-transform-presets.hexo.html",revision:"3cc5d80dac46b5f25de7db58dbed20c0"},{url:"references/fff-transform-presets.html",revision:"d3ee270105b8da917e4751238f3b4cbb"},{url:"references/fff-transform-presets.hugo.html",revision:"478399124a611ac887c31610ffae8997"},{url:"references/fff-transform-presets.jekyll.html",revision:"1b06d03462b7ddd665a0aa4ab97483d9"},{url:"references/fff-transform-presets.mditvue.html",revision:"3de6b0361e41680599f691c278a37697"},{url:"references/fff-transform-presets.mditvuereverse.html",revision:"e81cb28467c5e32f451ded2b83ff99fe"},{url:"references/fff-transform-presets.nuxt.html",revision:"56e841d3b6f9760caf5d1e3d4658dda4"},{url:"references/index.html",revision:"80cdbf1146a1068053cd2e2fb0840eb6"},{url:"references/indiekit-preset-fff.html",revision:"32be41e4af34cc95cb17145a68d91db3"},{url:"references/indiekit-preset-fff.indiekitpresetfff._constructor_.html",revision:"0b00a686b9c68c6c8ceb5f112c23ca66"},{url:"references/indiekit-preset-fff.indiekitpresetfff.html",revision:"314f91a1ae87efcbe7a1b689a117f720"},{url:"references/indiekit-preset-fff.indiekitpresetfff.id.html",revision:"3965462e98b125ff6ec66662e2736ff7"},{url:"references/indiekit-preset-fff.indiekitpresetfff.info.html",revision:"45ab039e5dd8fc4cc2520f88fa55aef4"},{url:"references/indiekit-preset-fff.indiekitpresetfff.init.html",revision:"1d257397d05a03c6aef7d2f92a71d2c0"},{url:"references/indiekit-preset-fff.indiekitpresetfff.meta.html",revision:"8db7f8f0209f18ab5376de395515ecbd"},{url:"references/indiekit-preset-fff.indiekitpresetfff.name.html",revision:"c810cf77967069ddae8bb40318090c86"},{url:"references/indiekit-preset-fff.indiekitpresetfff.options.html",revision:"85a717f247ff3329d0f11bc51e8a4a18"},{url:"references/indiekit-preset-fff.indiekitpresetfff.posttemplate.html",revision:"3ea5bb61f3dda0f914214cc956d6eaf0"},{url:"references/indiekit-preset-fff.indiekitpresetfff.posttypes.html",revision:"5f6a1e5ed41f288019845b4b8a5d3e93"},{url:"references/indiekit-preset-fff.indiekitpresetfff.prompts.html",revision:"382219f969f2734be704bdf9ffea8e35"},{url:"references/indiekit-preset-fff.indiekitpresetfffoptions.html",revision:"ade51e9872dd5ad801293f83fabaf556"},{url:"references/markdown-it-fff.fffplugin.html",revision:"ddfe2671918b51192e6614947955b60e"},{url:"references/markdown-it-fff.fffpluginoptions.html",revision:"79255bc95bfc6d5d99be6b000eaae8b6"},{url:"references/markdown-it-fff.html",revision:"52817a1283f47ac62f789373ce3d1c91"},{url:"references/remark-fff.fs.html",revision:"635ec9361c3fbed7ffd9c7bf8e010593"},{url:"references/remark-fff.git.html",revision:"258a7a75305faef73e9fbf7a3f5522a7"},{url:"references/remark-fff.html",revision:"4a8d194c7893411892d5a6ce9584b6cb"},{url:"references/remark-fff.path.html",revision:"ac9b56e74e0b12258e86ecf7384c3b89"},{url:"references/remark-fff.remarkfff.html",revision:"bef6efdf946683f8b510246cbec578ed"},{url:"references/remark-fff.remarkfffoptions.html",revision:"43c076a5abe6b356ffe7795ef202dc50"},{url:"version/0.1.html",revision:"cf54f2e04a32bbf70f65bae045c82c93"},{url:"version/0.2.html",revision:"f5fc68ba4707aaccfee5ac0f4ee582bd"},{url:"version/0.3.html",revision:"5a2ad07d8ffe29d81e01e8ba025754e5"},{url:"version/0.4.html",revision:"892a293621ce7415d9564caac976fb10"},{url:"version/0.5.html",revision:"92521b5bf68dc9d5328fe1044e61127a"},{url:"version/0.6.html",revision:"24c4ba4533a5b045e53403081053b46a"},{url:"version/changelog.html",revision:"844e56970f834fb52d560dafddbf6b81"},{url:"manifest.webmanifest",revision:"bfc13fa9b61ca7cf80d86e016a851524"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:10})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:10})]}),"GET")}));
