import{_ as a,o as e,c as s,R as t}from"./chunks/framework.4ewtxVQd.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"references/fff-flavored-frontmatter.fffschema.md","filePath":"references/fff-flavored-frontmatter.fffschema.md","lastUpdated":null}'),i={name:"references/fff-flavored-frontmatter.fffschema.md"},h=t(`<p><a href="./">Home</a> &gt; <a href="./fff-flavored-frontmatter.html">fff-flavored-frontmatter</a> &gt; <a href="./fff-flavored-frontmatter.fffschema.html">FFFSchema</a></p><h2 id="fffschema-type" tabindex="-1">FFFSchema type <a class="header-anchor" href="#fffschema-type" aria-label="Permalink to &quot;FFFSchema type&quot;">​</a></h2><p>Type used to generate the schema. It doesn&#39;t support object media due to generator limitations.</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes material-theme-darker material-theme-lighter vp-code"><code><span class="line"><span style="--shiki-dark:#C792EA;--shiki-light:#9C3EDA;">type</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> FFFSchema</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> =</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> FFFBase</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &amp;</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> FFFDateTime</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &amp;</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> FFFSchemaMedia</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &amp;</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> FFFMention</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &amp;</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> FFFExtra</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">;</span></span></code></pre></div><p><strong>References:</strong> <a href="./fff-flavored-frontmatter.fffbase.html">FFFBase</a>, <a href="./fff-flavored-frontmatter.fffdatetime.html">FFFDateTime</a>, <a href="./fff-flavored-frontmatter.fffmention.html">FFFMention</a>, <a href="./fff-flavored-frontmatter.fffextra.html">FFFExtra</a></p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes material-theme-darker material-theme-lighter vp-code"><code><span class="line"><span style="--shiki-dark:#545454;--shiki-light:#90A4AE;--shiki-dark-font-style:italic;--shiki-light-font-style:italic;"># generate json schema</span></span>
<span class="line"><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;">npx</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;"> ts-json-schema-generator</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;"> --path</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">packages/fff-flavored-frontmatter/src/schema.ts</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;"> --type</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#91B859;">FFFSchema</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">&#39;</span></span></code></pre></div>`,8),r=[h];function n(l,p,f,o,k,d){return e(),s("div",null,r)}const c=a(i,[["render",n]]);export{m as __pageData,c as default};
