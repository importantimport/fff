import{_ as e,o as i,c as a,a as r}from"./app.84a5aa78.js";const f=JSON.parse('{"title":"Changelog","description":"","frontmatter":{"title":"Changelog","outline":"deep"},"headers":[{"level":2,"title":"Version 0.5 (2023-01-01)","slug":"version-0-5-2023-01-01","link":"#version-0-5-2023-01-01","children":[{"level":3,"title":"Version 0.5.1 (2023-03-01)","slug":"version-0-5-1-2023-03-01","link":"#version-0-5-1-2023-03-01","children":[]}]},{"level":2,"title":"Version 0.4 (2022-11-11)","slug":"version-0-4-2022-11-11","link":"#version-0-4-2022-11-11","children":[{"level":3,"title":"Version 0.4.2 (2022-11-23)","slug":"version-0-4-2-2022-11-23","link":"#version-0-4-2-2022-11-23","children":[]},{"level":3,"title":"Version 0.4.1 (2022-11-14)","slug":"version-0-4-1-2022-11-14","link":"#version-0-4-1-2022-11-14","children":[]}]},{"level":2,"title":"Version 0.3 (2022-08-31)","slug":"version-0-3-2022-08-31","link":"#version-0-3-2022-08-31","children":[]},{"level":2,"title":"Version 0.2 (2022-07-21)","slug":"version-0-2-2022-07-21","link":"#version-0-2-2022-07-21","children":[{"level":3,"title":"Version 0.2.2 (2022-08-17)","slug":"version-0-2-2-2022-08-17","link":"#version-0-2-2-2022-08-17","children":[]},{"level":3,"title":"Version 0.2.1 (2022-07-23)","slug":"version-0-2-1-2022-07-23","link":"#version-0-2-1-2022-07-23","children":[]}]},{"level":2,"title":"Version 0.1 (2022-07-18)","slug":"version-0-1-2022-07-18","link":"#version-0-1-2022-07-18","children":[]}],"relativePath":"version/changelog.md","lastUpdated":1677672968000}'),o={name:"version/changelog.md"},l=r('<h1 id="changelog" tabindex="-1">Changelog <a class="header-anchor" href="#changelog" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>For non-version-related changes, please refer to the <a href="https://github.com/importantimport/fff/commits/main" target="_blank" rel="noreferrer">git commit history</a>.</p></div><h2 id="version-0-5-2023-01-01" tabindex="-1"><a href="/version/0.5.html">Version 0.5</a> (2023-01-01) <a class="header-anchor" href="#version-0-5-2023-01-01" aria-hidden="true">#</a></h2><ul><li>Add: <a href="/version/0.5.html#images"><code>images</code></a></li><li>Rename: <ul><li>(Object Media) <a href="/version/0.5.html#additional"><code>source =&gt; sources</code></a></li></ul></li><li>Improve: <ul><li>Refinement of classification</li><li>Improved <a href="/version/0.5.html#datetime">DateTime</a> type</li><li><a href="/version/0.5.html#image"><code>image</code></a> no longer accepts arrays (multi-photo[^multi-photo])</li><li><a href="/version/0.5.html#in_reply_to"><code>in_reply_to</code></a> no longer accepts arrays (multiple-reply[^multiple-reply])</li></ul></li></ul><h3 id="version-0-5-1-2023-03-01" tabindex="-1">Version 0.5.1 (2023-03-01) <a class="header-anchor" href="#version-0-5-1-2023-03-01" aria-hidden="true">#</a></h3><ul><li>Bug fixes, no type change</li></ul><h2 id="version-0-4-2022-11-11" tabindex="-1"><a href="/version/0.4.html">Version 0.4</a> (2022-11-11) <a class="header-anchor" href="#version-0-4-2022-11-11" aria-hidden="true">#</a></h2><ul><li>Add: <a href="/version/0.4.html#checkin"><code>checkin</code></a> <a href="/version/0.4.html#rsvp"><code>rsvp</code></a> <a href="/version/0.4.html#start"><code>start</code></a> <a href="/version/0.4.html#end"><code>end</code></a></li></ul><h3 id="version-0-4-2-2022-11-23" tabindex="-1">Version 0.4.2 (2022-11-23) <a class="header-anchor" href="#version-0-4-2-2022-11-23" aria-hidden="true">#</a></h3><ul><li>Chore: add <code>autoDiscovery</code> and <code>toJSONFeedItem</code> utils</li></ul><h3 id="version-0-4-1-2022-11-14" tabindex="-1">Version 0.4.1 (2022-11-14) <a class="header-anchor" href="#version-0-4-1-2022-11-14" aria-hidden="true">#</a></h3><ul><li>Bug fixes, no type change</li></ul><h2 id="version-0-3-2022-08-31" tabindex="-1"><a href="/version/0.3.html">Version 0.3</a> (2022-08-31) <a class="header-anchor" href="#version-0-3-2022-08-31" aria-hidden="true">#</a></h2><ul><li>Improve: <a href="/version/0.3.html#image"><code>image</code></a> type: <code>(string | FFFImage | (string | FFFImage)[]) =&gt; (string | FFFImage | string[] | FFFImage[])</code></li></ul><h2 id="version-0-2-2022-07-21" tabindex="-1"><a href="/version/0.2.html">Version 0.2</a> (2022-07-21) <a class="header-anchor" href="#version-0-2-2022-07-21" aria-hidden="true">#</a></h2><ul><li>Remove: <code>alt</code></li><li>Add: <a href="/version/0.2.html#authors"><code>authors</code></a> <a href="/version/0.2.html#lang"><code>lang</code></a> <a href="/version/0.2.html#location"><code>location</code></a></li><li>Rename: <a href="/version/0.2.html#image"><code>photo =&gt; image</code></a></li><li>Improve: <ul><li>optional advanced type for <a href="/version/0.2.html#image"><code>image</code></a> <a href="/version/0.2.html#audio"><code>audio</code></a> <a href="/version/0.2.html#video"><code>video</code></a></li><li>optional type for <a href="/version/0.2.html#created"><code>created</code></a> <a href="/version/0.2.html#updated"><code>updated</code></a> <a href="/version/0.2.html#published"><code>published</code></a></li></ul></li><li>Chore: <ul><li>make <a href="/version/0.2.html#audio"><code>audio</code></a> <a href="/version/0.2.html#video"><code>video</code></a> as base variables</li><li>more accurate descriptions</li></ul></li></ul><h3 id="version-0-2-2-2022-08-17" tabindex="-1">Version 0.2.2 (2022-08-17) <a class="header-anchor" href="#version-0-2-2-2022-08-17" aria-hidden="true">#</a></h3><ul><li>Improve: <ul><li>make <a href="/version/0.2.html#additional"><code>author.name</code></a> optional</li></ul></li><li>Chore: <ul><li>fix yaml install command in package <a href="http://README.md" target="_blank" rel="noreferrer">README.md</a></li><li>update package description</li></ul></li></ul><h3 id="version-0-2-1-2022-07-23" tabindex="-1">Version 0.2.1 (2022-07-23) <a class="header-anchor" href="#version-0-2-1-2022-07-23" aria-hidden="true">#</a></h3><ul><li>Chore: <ul><li>add <a href="http://README.md" target="_blank" rel="noreferrer">README.md</a> for package</li><li>add <code>// deno-fmt-ignore-file</code> in fff.ts</li><li>update keywords &amp; homepage in package.json</li><li>Published as a deno module to <a href="https://deno.land/x/fff" target="_blank" rel="noreferrer">deno.land/x</a></li></ul></li></ul><h2 id="version-0-1-2022-07-18" tabindex="-1"><a href="/version/0.1.html">Version 0.1</a> (2022-07-18) <a class="header-anchor" href="#version-0-1-2022-07-18" aria-hidden="true">#</a></h2><ul><li>Initial version</li></ul>',22),n=[l];function t(s,d,h,c,v,m){return i(),a("div",null,n)}const g=e(o,[["render",t]]);export{f as __pageData,g as default};
