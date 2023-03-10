import{_ as s,o as a,c as n,a as l}from"./app.9a5966fb.js";const E=JSON.parse('{"title":"Flags","description":"","frontmatter":{"title":"Flags"},"headers":[{"level":2,"title":"Post Status","slug":"post-status","link":"#post-status","children":[]},{"level":2,"title":"Visibility","slug":"visibility","link":"#visibility","children":[]}],"relativePath":"concepts/flags.md","lastUpdated":1678439305000}'),p={name:"concepts/flags.md"},e=l(`<h1 id="flags" tabindex="-1">Flags <a class="header-anchor" href="#flags" aria-hidden="true">#</a></h1><p>flags is an array that allows you to add additional functionality without adding variable names.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-darker vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F07178;">draft</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">visibility</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unlisted</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;"># equal</span></span>
<span class="line"><span style="color:#F07178;">flags</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">draft</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">unlised</span></span>
<span class="line"></span></code></pre><pre class="shiki material-theme-lighter vp-code-light" tabindex="0"><code><span class="line"><span style="color:#E53935;">draft</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> </span><span style="color:#FF5370;">true</span></span>
<span class="line"><span style="color:#E53935;">visibility</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&#39;</span><span style="color:#91B859;">unlisted</span><span style="color:#39ADB5;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;"># equal</span></span>
<span class="line"><span style="color:#E53935;">flags</span><span style="color:#39ADB5;">:</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">draft</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">unlised</span></span>
<span class="line"></span></code></pre></div><p>What content it supports is entirely up to the developer, but the following are some recommended:</p><h2 id="post-status" tabindex="-1"><a href="https://indieweb.org/Micropub-extensions#Post_Status" target="_blank" rel="noreferrer">Post Status</a> <a class="header-anchor" href="#post-status" aria-hidden="true">#</a></h2><p>Consistent with Micropub Extensions.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-darker vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F07178;">flags</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">published</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># The post is published, or when the published date is in the future.</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">draft</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># The post is a draft, and should not be shown in lists.</span></span>
<span class="line"></span></code></pre><pre class="shiki material-theme-lighter vp-code-light" tabindex="0"><code><span class="line"><span style="color:#E53935;">flags</span><span style="color:#39ADB5;">:</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">published</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;"># The post is published, or when the published date is in the future.</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">draft</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;"># The post is a draft, and should not be shown in lists.</span></span>
<span class="line"></span></code></pre></div><h2 id="visibility" tabindex="-1"><a href="https://indieweb.org/Micropub-extensions#Visibility" target="_blank" rel="noreferrer">Visibility</a> <a class="header-anchor" href="#visibility" aria-hidden="true">#</a></h2><p>Consistent with Micropub Extensions.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-darker vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F07178;">flags</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">public</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">unlisted</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">private</span></span>
<span class="line"></span></code></pre><pre class="shiki material-theme-lighter vp-code-light" tabindex="0"><code><span class="line"><span style="color:#E53935;">flags</span><span style="color:#39ADB5;">:</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">public</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">unlisted</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">private</span></span>
<span class="line"></span></code></pre></div>`,10),o=[e];function t(c,i,r,y,F,d){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{E as __pageData,u as default};
