(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{5:function(t,e,n){"use strict";n.r(e);var c=n(0);function s(t){if(Object(c.l)(this,t),this._state=Object(c.b)({},t.data),this._intro=!0,document.getElementById("svelte-gnxal1-style")||function(){var t=Object(c.g)("style");t.id="svelte-gnxal1-style",t.textContent=".content.svelte-gnxal1 h2{font-size:1.4em;font-weight:500}.content.svelte-gnxal1 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0,0,0,0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-gnxal1 pre code{background-color:transparent;padding:0}.content.svelte-gnxal1 ul{line-height:1.5}.content.svelte-gnxal1 li{margin:0 0 0.5em 0}",Object(c.a)(document.head,t)}(),this._fragment=function(t,e){var n,s,o,a,r,i,l=e.post.title,b=e.post.html;return document.title=n=e.post.title,{c(){s=Object(c.h)("\n\n"),o=Object(c.g)("h1"),a=Object(c.h)(l),r=Object(c.h)("\n\n"),i=Object(c.g)("div"),this.h()},l(t){s=Object(c.f)(t,"\n\n"),o=Object(c.e)(t,"H1",{},!1);var e=Object(c.d)(o);a=Object(c.f)(e,l),e.forEach(c.j),r=Object(c.f)(t,"\n\n"),i=Object(c.e)(t,"DIV",{class:!0},!1),Object(c.d)(i).forEach(c.j),this.h()},h(){i.className="content svelte-gnxal1"},m(t,e){Object(c.m)(t,s,e),Object(c.m)(t,o,e),Object(c.a)(o,a),Object(c.m)(t,r,e),Object(c.m)(t,i,e),i.innerHTML=b},p(t,e){t.post&&n!==(n=e.post.title)&&(document.title=n),t.post&&l!==(l=e.post.title)&&Object(c.q)(a,l),t.post&&b!==(b=e.post.html)&&(i.innerHTML=b)},d(t){t&&(Object(c.j)(s),Object(c.j)(o),Object(c.j)(r),Object(c.j)(i))}}}(0,this._state),t.target){var e=Object(c.d)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(c.j),this._mount(t.target,t.anchor)}}Object(c.b)(s.prototype,c.o),s.preload=async function({params:t,query:e}){const n=await this.fetch(`blog/${t.slug}.json`),c=await n.json();if(200===n.status)return{post:c};this.error(n.status,c.message)},e.default=s}}]);