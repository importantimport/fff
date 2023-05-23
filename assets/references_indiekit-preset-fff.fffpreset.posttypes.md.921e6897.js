import{_ as s,o as n,c as a,O as p}from"./chunks/framework.227b99ed.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"references/indiekit-preset-fff.fffpreset.posttypes.md","filePath":"references/indiekit-preset-fff.fffpreset.posttypes.md","lastUpdated":null}'),l={name:"references/indiekit-preset-fff.fffpreset.posttypes.md"},e=p(`<p><a href="./">Home</a> &gt; <a href="./indiekit-preset-fff.html">indiekit-preset-fff</a> &gt; <a href="./indiekit-preset-fff.fffpreset.html">FFFPreset</a> &gt; <a href="./indiekit-preset-fff.fffpreset.posttypes.html">postTypes</a></p><h2 id="fffpreset-posttypes-property" tabindex="-1">FFFPreset.postTypes property <a class="header-anchor" href="#fffpreset-posttypes-property" aria-label="Permalink to &quot;FFFPreset.postTypes property&quot;">​</a></h2><p>Post types</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-darker vp-code-dark"><code><span class="line"><span style="color:#EEFFFF;">get </span><span style="color:#82AAFF;">postTypes</span><span style="color:#EEFFFF;">(): (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#F07178;">media</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">            </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> string;</span></span>
<span class="line"><span style="color:#EEFFFF;">            url: string;</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">        name: string;</span></span>
<span class="line"><span style="color:#EEFFFF;">        post: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">            </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> string;</span></span>
<span class="line"><span style="color:#EEFFFF;">            url: string;</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">        type: string;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> string;</span></span>
<span class="line"><span style="color:#EEFFFF;">        post: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">            </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> string;</span></span>
<span class="line"><span style="color:#EEFFFF;">            url: string;</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">        type: string;</span></span>
<span class="line"><span style="color:#EEFFFF;">        media</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;">)[]</span><span style="color:#89DDFF;">;</span></span></code></pre><pre class="shiki material-theme-lighter vp-code-light"><code><span class="line"><span style="color:#90A4AE;">get </span><span style="color:#6182B8;">postTypes</span><span style="color:#90A4AE;">(): (</span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#E53935;">media</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#E53935;">path</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> string;</span></span>
<span class="line"><span style="color:#90A4AE;">            url: string;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;">;</span></span>
<span class="line"><span style="color:#90A4AE;">        name: string;</span></span>
<span class="line"><span style="color:#90A4AE;">        post: </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#E53935;">path</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> string;</span></span>
<span class="line"><span style="color:#90A4AE;">            url: string;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;">;</span></span>
<span class="line"><span style="color:#90A4AE;">        type: string;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">|</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#E53935;">name</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> string;</span></span>
<span class="line"><span style="color:#90A4AE;">        post: </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#E53935;">path</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> string;</span></span>
<span class="line"><span style="color:#90A4AE;">            url: string;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;">;</span></span>
<span class="line"><span style="color:#90A4AE;">        type: string;</span></span>
<span class="line"><span style="color:#90A4AE;">        media</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">undefined</span><span style="color:#90A4AE;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;">)[]</span><span style="color:#39ADB5;">;</span></span></code></pre></div>`,5),o=[e];function t(r,c,F,y,i,E){return n(),a("div",null,o)}const D=s(l,[["render",t]]);export{f as __pageData,D as default};
