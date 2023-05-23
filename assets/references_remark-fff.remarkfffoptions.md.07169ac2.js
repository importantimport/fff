import{_ as s,o as a,c as n,V as p}from"./chunks/framework.8f17d1d7.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"references/remark-fff.remarkfffoptions.md","filePath":"references/remark-fff.remarkfffoptions.md","lastUpdated":null}'),o={name:"references/remark-fff.remarkfffoptions.md"},l=p(`<p><a href="./">Home</a> &gt; <a href="./remark-fff.html">remark-fff</a> &gt; <a href="./remark-fff.remarkfffoptions.html">RemarkFFFOptions</a></p><h2 id="remarkfffoptions-type" tabindex="-1">RemarkFFFOptions type <a class="header-anchor" href="#remarkfffoptions-type" aria-label="Permalink to &quot;RemarkFFFOptions type&quot;">​</a></h2><p>Remark FFF Plugin Options.</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-darker vp-code-dark"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">RemarkFFFOptions</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mdsvex</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">astro</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nuxt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> (</span><span style="color:#FFCB6B;">string</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">presets</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> (</span><span style="color:#89DDFF;">keyof</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#EEFFFF;"> presets </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">FFFTransformPreset</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">FFFTransformPresetReverse</span><span style="color:#EEFFFF;">)[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">autofill</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#F07178;">provider</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#EEFFFF;"> path </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> (</span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;font-style:italic;">path</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">strict</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">StrictPresetOptions</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><pre class="shiki material-theme-lighter vp-code-light"><code><span class="line"><span style="color:#9C3EDA;">type</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">RemarkFFFOptions</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">target</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&#39;</span><span style="color:#91B859;">mdsvex</span><span style="color:#39ADB5;">&#39;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">|</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&#39;</span><span style="color:#91B859;">astro</span><span style="color:#39ADB5;">&#39;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">|</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&#39;</span><span style="color:#91B859;">nuxt</span><span style="color:#39ADB5;">&#39;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">|</span><span style="color:#90A4AE;"> (</span><span style="color:#E2931D;">string</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&amp;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{}</span><span style="color:#90A4AE;">)</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">presets</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> (</span><span style="color:#39ADB5;">keyof</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">typeof</span><span style="color:#90A4AE;"> presets </span><span style="color:#39ADB5;">|</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">FFFTransformPreset</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">|</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">FFFTransformPresetReverse</span><span style="color:#90A4AE;">)[]</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">autofill</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#E53935;">provider</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&#39;</span><span style="color:#91B859;">fs</span><span style="color:#39ADB5;">&#39;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">|</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&#39;</span><span style="color:#91B859;">git</span><span style="color:#39ADB5;">&#39;</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#E53935;">path</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">keyof</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">typeof</span><span style="color:#90A4AE;"> path </span><span style="color:#39ADB5;">|</span><span style="color:#90A4AE;"> (</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;font-style:italic;">path</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">string</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">=&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">string</span><span style="color:#90A4AE;">)</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">};</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">strict</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">StrictPresetOptions</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#39ADB5;">};</span></span></code></pre></div><p><strong>References:</strong> <a href="./fff-flavored-frontmatter.ffftransformpreset.html">FFFTransformPreset</a>, <a href="./fff-flavored-frontmatter.ffftransformpresetreverse.html">FFFTransformPresetReverse</a>, <a href="./remark-fff.path.html">path</a>, <a href="./fff-flavored-frontmatter.strictpresetoptions.html">StrictPresetOptions</a></p>`,6),e=[l];function t(r,F,c,y,E,D){return a(),n("div",null,e)}const i=s(o,[["render",t]]);export{f as __pageData,i as default};
