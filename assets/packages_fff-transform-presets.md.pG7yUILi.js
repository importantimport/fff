import{_ as l,o as s,c as i,R as h,I as k,m as e}from"./chunks/framework.ekaVIUcx.js";JSON.parse('{"title":"FFF Transform Presets","description":"","frontmatter":{},"headers":[],"relativePath":"../packages/fff-transform-presets/README.md","filePath":"../packages/fff-transform-presets/README.md","lastUpdated":1685804639000}');const p={name:"../packages/fff-transform-presets/README.md"},r=h(`<h1 id="fff-transform-presets" tabindex="-1">FFF Transform Presets <a class="header-anchor" href="#fff-transform-presets" aria-label="Permalink to &quot;FFF Transform Presets&quot;">​</a></h1><p><a href="https://npmjs.com/package/fff-transform-presets" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/fff-transform-presets?color=yellow" alt="npm"></a><img src="https://img.shields.io/bundlephobia/min/fff-transform-presets?color=yellow" alt="minified size"><img src="https://img.shields.io/npm/dt/fff-transform-presets?color=yellow" alt="downloads"></p><p>🌟 Predefined transform presets for FFF Flavored Frontmatter.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes material-theme-darker material-theme-lighter vp-code"><code><span class="line"><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;">pnpm</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;"> add</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;"> fff-transform-presets</span><span style="--shiki-dark:#545454;--shiki-light:#90A4AE;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;"> # pnpm</span></span>
<span class="line"><span style="--shiki-dark:#545454;--shiki-light:#90A4AE;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;"># yarn add fff-transform-presets # yarn</span></span>
<span class="line"><span style="--shiki-dark:#545454;--shiki-light:#90A4AE;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;"># npm i fff-transform-presets # npm</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>You can use it with the transform function or the remark / markdown-it plugin.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes material-theme-darker material-theme-lighter vp-code"><code><span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">import</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> {</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> transform</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> }</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;"> from</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">fff-flavored-frontmatter</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">import</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> {</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> hexo</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">,</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> hexoReverse</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> }</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;"> from</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">fff-transform-presets</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#545454;--shiki-light:#90A4AE;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">// original frontmatter</span></span>
<span class="line"><span style="--shiki-dark:#C792EA;--shiki-light:#9C3EDA;">let</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> fm </span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">=</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> {</span></span>
<span class="line"><span style="--shiki-dark:#545454;--shiki-light:#90A4AE;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">  // ...</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#545454;--shiki-light:#90A4AE;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">// hexo =&gt; fff</span></span>
<span class="line"><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">fm </span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">=</span><span style="--shiki-dark:#82AAFF;--shiki-light:#6182B8;"> transform</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">(fm</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">,</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> [hexo])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#545454;--shiki-light:#90A4AE;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">// fff =&gt; hexo</span></span>
<span class="line"><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">fm </span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">=</span><span style="--shiki-dark:#82AAFF;--shiki-light:#6182B8;"> transform</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">(fm</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">,</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> [hexoReverse])</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes material-theme-darker material-theme-lighter vp-code"><code><span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">import</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> {</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> hugo</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> }</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;"> from</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">fff-transform-presets</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">import</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> remarkFFF </span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">from</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">remark-fff</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">export</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;"> default</span><span style="--shiki-dark:#82AAFF;--shiki-light:#6182B8;"> defineConfig</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">(</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">{</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E53935;">  remarkPlugins</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">:</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> [</span></span>
<span class="line"><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">    [remarkFFF</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">,</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> {</span><span style="--shiki-dark:#F07178;--shiki-light:#E53935;"> presets</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">:</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> [hugo]</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">,</span><span style="--shiki-dark:#F07178;--shiki-light:#E53935;"> target</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">astro</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> }</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">]</span></span>
<span class="line"><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">  ]</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">,</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">}</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">)</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes material-theme-darker material-theme-lighter vp-code"><code><span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">import</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> {</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> frontmatterPlugin</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> }</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;"> from</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">@mdit-vue/plugin-frontmatter</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">import</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> {</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> hugo</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">,</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> mditVue</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> }</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;"> from</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">fff-transform-presets</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">import</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> MarkdownIt </span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">from</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">markdown-it</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;">import</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> {</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> fffPlugin</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> }</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;"> from</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">markdown-it-fff</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C792EA;--shiki-light:#9C3EDA;">const</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> md </span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">=</span><span style="--shiki-dark:#82AAFF;--shiki-light:#6182B8;"> MarkdownIt</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">()</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">.</span><span style="--shiki-dark:#82AAFF;--shiki-light:#6182B8;">use</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">(frontmatterPlugin</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">,</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E53935;">  grayMatterOptions</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E53935;">    excerpt</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">:</span><span style="--shiki-dark:#FF9CAC;--shiki-light:#FF5370;"> true</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">,</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">  },</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">}</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">)</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">.</span><span style="--shiki-dark:#82AAFF;--shiki-light:#6182B8;">use</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">(fffPlugin</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">,</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E53935;">  presets</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">:</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> [</span></span>
<span class="line"><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">    hugo</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">,</span></span>
<span class="line"><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">    mditVue</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">,</span></span>
<span class="line"><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">  ]</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">,</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">}</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">)</span></span></code></pre></div>`,10),F=[r];function D(a,t,n,o,y,f){return s(),i("div",null,F)}const d=l(p,[["render",D]]),c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"packages/fff-transform-presets.md","filePath":"packages/fff-transform-presets.md","lastUpdated":1684860169000}'),g={name:"packages/fff-transform-presets.md"},E=Object.assign(g,{setup(a){return(t,n)=>(s(),i("div",null,[k(e(d))]))}});export{c as __pageData,E as default};
