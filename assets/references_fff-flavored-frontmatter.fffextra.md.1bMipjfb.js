import{_ as s,o as i,c as a,R as t}from"./chunks/framework.ekaVIUcx.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"references/fff-flavored-frontmatter.fffextra.md","filePath":"references/fff-flavored-frontmatter.fffextra.md","lastUpdated":null}'),h={name:"references/fff-flavored-frontmatter.fffextra.md"},n=t(`<p><a href="./">Home</a> &gt; <a href="./fff-flavored-frontmatter.html">fff-flavored-frontmatter</a> &gt; <a href="./fff-flavored-frontmatter.fffextra.html">FFFExtra</a></p><h2 id="fffextra-type" tabindex="-1">FFFExtra type <a class="header-anchor" href="#fffextra-type" aria-label="Permalink to &quot;FFFExtra type&quot;">​</a></h2><p>Extra Variables</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes material-theme-darker material-theme-lighter vp-code"><code><span class="line"><span style="--shiki-dark:#C792EA;--shiki-light:#9C3EDA;">type</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> FFFExtra</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> =</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E53935;">    authors</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">?:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> FFFAuthor</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">[]</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">;</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E53935;">    checkin</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">?:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> string</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">;</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E53935;">    draft</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">?:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> boolean</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">;</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E53935;">    lang</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">?:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> string</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> |</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> string</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">[]</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">;</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E53935;">    location</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">?:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> string</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">;</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E53935;">    rsvp</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">?:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">interested</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> |</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">maybe</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> |</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">no</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> |</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">yes</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">;</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E53935;">    syndication</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">?:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> string</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> |</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> string</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">[]</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">;</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E53935;">    visibility</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">?:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">private</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> |</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">public</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> |</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">unlisted</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> |</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;"> (</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;">string</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &amp;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> {}</span><span style="--shiki-dark:#EEFFFF;--shiki-light:#90A4AE;">)</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">;</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">};</span></span></code></pre></div><p><strong>References:</strong> <a href="./fff-flavored-frontmatter.fffauthor.html">FFFAuthor</a></p>`,6),k=[n];function l(p,e,r,F,D,d){return i(),a("div",null,k)}const f=s(h,[["render",l]]);export{y as __pageData,f as default};
