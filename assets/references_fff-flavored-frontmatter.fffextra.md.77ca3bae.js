import{_ as s,o as a,c as n,O as l}from"./chunks/framework.227b99ed.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"references/fff-flavored-frontmatter.fffextra.md","filePath":"references/fff-flavored-frontmatter.fffextra.md","lastUpdated":null}'),p={name:"references/fff-flavored-frontmatter.fffextra.md"},o=l(`<p><a href="./">Home</a> &gt; <a href="./fff-flavored-frontmatter.html">fff-flavored-frontmatter</a> &gt; <a href="./fff-flavored-frontmatter.fffextra.html">FFFExtra</a></p><h2 id="fffextra-type" tabindex="-1">FFFExtra type <a class="header-anchor" href="#fffextra-type" aria-label="Permalink to &quot;FFFExtra type&quot;">​</a></h2><p>Extra Variables</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-darker vp-code-dark"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">FFFExtra</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">authors</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">FFFAuthor</span><span style="color:#EEFFFF;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">lang</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">location</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">syndication</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#EEFFFF;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">checkin</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">rsvp</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">yes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">no</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">maybe</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">interested</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><pre class="shiki material-theme-lighter vp-code-light"><code><span class="line"><span style="color:#9C3EDA;">type</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">FFFExtra</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">authors</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">FFFAuthor</span><span style="color:#90A4AE;">[]</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">lang</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">string</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">location</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">string</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">syndication</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">string</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">|</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">string</span><span style="color:#90A4AE;">[]</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">checkin</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">string</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">rsvp</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&#39;</span><span style="color:#91B859;">yes</span><span style="color:#39ADB5;">&#39;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">|</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&#39;</span><span style="color:#91B859;">no</span><span style="color:#39ADB5;">&#39;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">|</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&#39;</span><span style="color:#91B859;">maybe</span><span style="color:#39ADB5;">&#39;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">|</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&#39;</span><span style="color:#91B859;">interested</span><span style="color:#39ADB5;">&#39;</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#39ADB5;">};</span></span></code></pre></div><p><strong>References:</strong> <a href="./fff-flavored-frontmatter.fffauthor.html">FFFAuthor</a></p>`,6),e=[o];function t(r,c,F,y,E,D){return a(),n("div",null,e)}const i=s(p,[["render",t]]);export{f as __pageData,i as default};
