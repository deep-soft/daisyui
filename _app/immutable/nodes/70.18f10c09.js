import{s as St,E as pt,O as Lt,a,l as Tt,f as s,S as Et,c as n,m as Mt,g as l,h as I,T as Ut,d as h,w as k,j as C,i as ce,u as t,v as qt}from"../chunks/scheduler.4207298b.js";import{S as Pt,i as jt,b as i,d as p,m as d,a as c,t as m,e as f}from"../chunks/index.04247e75.js";import{g as Bt,a as It}from"../chunks/spread.8a54911c.js";import{M as Rt}from"../chunks/mdsvex.10f137c3.js";import{T as $}from"../chunks/Translate.5cdc3d78.js";function zt(me){let r,L,x,P,o,_,He=`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>

  <span class="token comment">// add daisyUI plugin</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// daisyUI config (optional - here are the default values)</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]</span>
    <span class="token literal-property property">darkTheme</span><span class="token operator">:</span> <span class="token string">"dark"</span><span class="token punctuation">,</span> <span class="token comment">// name of one of the included themes for dark mode</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// applies background color and foreground color for root element by default</span>
    <span class="token literal-property property">styled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// include daisyUI colors and design decisions for all components</span>
    <span class="token literal-property property">utils</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// adds responsive and modifier utility classes</span>
    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)</span>
    <span class="token literal-property property">logs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Shows info about daisyUI version and used config in the console when building your CSS</span>
    <span class="token literal-property property">themeRoot</span><span class="token operator">:</span> <span class="token string">":root"</span><span class="token punctuation">,</span> <span class="token comment">// The element that receives theme color CSS variables</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

  <span class="token comment">//...</span>
<span class="token punctuation">&#125;</span></code>`,Le,j,z,Ie,Te,u,T,A,dt='<a aria-hidden="true" tabindex="-1" href="#styled"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>styled',Ce,fe,ct="<code>Boolean (default: true)</code>",Se,W,Ee,D,Ue,v,F,mt='<a aria-hidden="true" tabindex="-1" href="#themes"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>themes',qe,ue,ft="<code>Boolean or array (default: false)</code>",Pe,N,je,O,Be,G,Re,J,ze,S,K,ut='<a aria-hidden="true" tabindex="-1" href="#base"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>base',Ae,$e,$t="<code>Boolean (default: true)</code>",We,Q,De,E,V,ht='<a aria-hidden="true" tabindex="-1" href="#utils"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>utils',Fe,he,gt="<code>Boolean (default: true)</code>",Ne,X,Oe,U,Y,yt='<a aria-hidden="true" tabindex="-1" href="#logs"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>logs',Ge,ge,kt="<code>Boolean (default: true)</code>",Je,Z,Ke,q,ee,vt='<a aria-hidden="true" tabindex="-1" href="#darktheme"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>darkTheme',Qe,ye,bt="<code>String (default: &quot;dark&quot;)</code>",Ve,te,Xe,g,ae,xt='<a aria-hidden="true" tabindex="-1" href="#prefix"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>prefix',Ye,ke,_t="<code>String (default: &quot;&quot;)</code>",Ze,ne,et,se,tt,le,at,re,nt,oe,st,M,ie,wt='<a aria-hidden="true" tabindex="-1" href="#themeroot"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>themeRoot',lt,ve,Ht="<code>String (default: &quot;:root&quot;)</code>",rt,pe,ot,de,Me;return r=new $({props:{text:"daisyUI can be configured from your <code>tailwind.config.js</code> file."}}),x=new $({props:{text:"Default config"}}),z=new $({props:{text:"Config values explained"}}),W=new $({props:{text:"If it's true, components will have colors and style so you won't need to design anything."}}),D=new $({props:{text:"If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton."}}),N=new $({props:{text:"If it's true, all themes will be included."}}),O=new $({props:{text:"If it's false, only light and dark themes will be available."}}),G=new $({props:{text:"If it's an array, only themes in the array will be included and the first theme will be the default theme."}}),J=new $({props:{text:"Read more about <a href='/docs/themes/'>themes</a>."}}),Q=new $({props:{text:"If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added."}}),X=new $({props:{text:"If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added."}}),Z=new $({props:{text:"If it's true, daisyUI shows logs in the terminal while CSS is building."}}),te=new $({props:{text:"Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme."}}),ne=new $({props:{text:"Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes)."}}),se=new $({props:{text:"For example: <code>btn</code> will become <code>prefix-btn</code>."}}),le=new $({props:{text:"If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts."}}),re=new $({props:{text:"Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes."}}),oe=new $({props:{text:"If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>."}}),pe=new $({props:{text:"Which element to attach the theme CSS variables to."}}),de=new $({props:{text:"In certain situations (such as embedding daisyUI in a shadow root) it may be useful to set this to e.g. <code>*</code>, so all components will have access to the required CSS variables."}}),{c(){i(r.$$.fragment),L=a(),i(x.$$.fragment),P=Tt(`:
`),o=s("pre"),_=new Et(!1),Le=a(),j=s("h2"),i(z.$$.fragment),Ie=Tt(":"),Te=a(),u=s("ul"),T=s("li"),A=s("h3"),A.innerHTML=dt,Ce=a(),fe=s("p"),fe.innerHTML=ct,Se=a(),i(W.$$.fragment),Ee=a(),i(D.$$.fragment),Ue=a(),v=s("li"),F=s("h3"),F.innerHTML=mt,qe=a(),ue=s("p"),ue.innerHTML=ft,Pe=a(),i(N.$$.fragment),je=a(),i(O.$$.fragment),Be=a(),i(G.$$.fragment),Re=a(),i(J.$$.fragment),ze=a(),S=s("li"),K=s("h3"),K.innerHTML=ut,Ae=a(),$e=s("p"),$e.innerHTML=$t,We=a(),i(Q.$$.fragment),De=a(),E=s("li"),V=s("h3"),V.innerHTML=ht,Fe=a(),he=s("p"),he.innerHTML=gt,Ne=a(),i(X.$$.fragment),Oe=a(),U=s("li"),Y=s("h3"),Y.innerHTML=yt,Ge=a(),ge=s("p"),ge.innerHTML=kt,Je=a(),i(Z.$$.fragment),Ke=a(),q=s("li"),ee=s("h3"),ee.innerHTML=vt,Qe=a(),ye=s("p"),ye.innerHTML=bt,Ve=a(),i(te.$$.fragment),Xe=a(),g=s("li"),ae=s("h3"),ae.innerHTML=xt,Ye=a(),ke=s("p"),ke.innerHTML=_t,Ze=a(),i(ne.$$.fragment),et=a(),i(se.$$.fragment),tt=a(),i(le.$$.fragment),at=a(),i(re.$$.fragment),nt=a(),i(oe.$$.fragment),st=a(),M=s("li"),ie=s("h3"),ie.innerHTML=wt,lt=a(),ve=s("p"),ve.innerHTML=Ht,rt=a(),i(pe.$$.fragment),ot=a(),i(de.$$.fragment),this.h()},l(e){p(r.$$.fragment,e),L=n(e),p(x.$$.fragment,e),P=Mt(e,`:
`),o=l(e,"PRE",{class:!0});var w=I(o);_=Ut(w,!1),w.forEach(h),Le=n(e),j=l(e,"H2",{id:!0});var it=I(j);p(z.$$.fragment,it),Ie=Mt(it,":"),it.forEach(h),Te=n(e),u=l(e,"UL",{});var y=I(u);T=l(y,"LI",{});var B=I(T);A=l(B,"H3",{id:!0,"data-svelte-h":!0}),k(A)!=="svelte-12wdwo8"&&(A.innerHTML=dt),Ce=n(B),fe=l(B,"P",{"data-svelte-h":!0}),k(fe)!=="svelte-140327"&&(fe.innerHTML=ct),Se=n(B),p(W.$$.fragment,B),Ee=n(B),p(D.$$.fragment,B),B.forEach(h),Ue=n(y),v=l(y,"LI",{});var H=I(v);F=l(H,"H3",{id:!0,"data-svelte-h":!0}),k(F)!=="svelte-473dtf"&&(F.innerHTML=mt),qe=n(H),ue=l(H,"P",{"data-svelte-h":!0}),k(ue)!=="svelte-b41uyo"&&(ue.innerHTML=ft),Pe=n(H),p(N.$$.fragment,H),je=n(H),p(O.$$.fragment,H),Be=n(H),p(G.$$.fragment,H),Re=n(H),p(J.$$.fragment,H),H.forEach(h),ze=n(y),S=l(y,"LI",{});var be=I(S);K=l(be,"H3",{id:!0,"data-svelte-h":!0}),k(K)!=="svelte-19o1rvq"&&(K.innerHTML=ut),Ae=n(be),$e=l(be,"P",{"data-svelte-h":!0}),k($e)!=="svelte-140327"&&($e.innerHTML=$t),We=n(be),p(Q.$$.fragment,be),be.forEach(h),De=n(y),E=l(y,"LI",{});var xe=I(E);V=l(xe,"H3",{id:!0,"data-svelte-h":!0}),k(V)!=="svelte-17zsfny"&&(V.innerHTML=ht),Fe=n(xe),he=l(xe,"P",{"data-svelte-h":!0}),k(he)!=="svelte-140327"&&(he.innerHTML=gt),Ne=n(xe),p(X.$$.fragment,xe),xe.forEach(h),Oe=n(y),U=l(y,"LI",{});var _e=I(U);Y=l(_e,"H3",{id:!0,"data-svelte-h":!0}),k(Y)!=="svelte-u4mmx4"&&(Y.innerHTML=yt),Ge=n(_e),ge=l(_e,"P",{"data-svelte-h":!0}),k(ge)!=="svelte-140327"&&(ge.innerHTML=kt),Je=n(_e),p(Z.$$.fragment,_e),_e.forEach(h),Ke=n(y),q=l(y,"LI",{});var we=I(q);ee=l(we,"H3",{id:!0,"data-svelte-h":!0}),k(ee)!=="svelte-o47ygu"&&(ee.innerHTML=vt),Qe=n(we),ye=l(we,"P",{"data-svelte-h":!0}),k(ye)!=="svelte-1s7einc"&&(ye.innerHTML=bt),Ve=n(we),p(te.$$.fragment,we),we.forEach(h),Xe=n(y),g=l(y,"LI",{});var b=I(g);ae=l(b,"H3",{id:!0,"data-svelte-h":!0}),k(ae)!=="svelte-13fjxyp"&&(ae.innerHTML=xt),Ye=n(b),ke=l(b,"P",{"data-svelte-h":!0}),k(ke)!=="svelte-1pou1ww"&&(ke.innerHTML=_t),Ze=n(b),p(ne.$$.fragment,b),et=n(b),p(se.$$.fragment,b),tt=n(b),p(le.$$.fragment,b),at=n(b),p(re.$$.fragment,b),nt=n(b),p(oe.$$.fragment,b),b.forEach(h),st=n(y),M=l(y,"LI",{});var R=I(M);ie=l(R,"H3",{id:!0,"data-svelte-h":!0}),k(ie)!=="svelte-rjjd9y"&&(ie.innerHTML=wt),lt=n(R),ve=l(R,"P",{"data-svelte-h":!0}),k(ve)!=="svelte-zy7ecw"&&(ve.innerHTML=Ht),rt=n(R),p(pe.$$.fragment,R),ot=n(R),p(de.$$.fragment,R),R.forEach(h),y.forEach(h),this.h()},h(){_.a=null,C(o,"class","language-js"),C(j,"id",""),C(A,"id","styled"),C(F,"id","themes"),C(K,"id","base"),C(V,"id","utils"),C(Y,"id","logs"),C(ee,"id","darktheme"),C(ae,"id","prefix"),C(ie,"id","themeroot")},m(e,w){d(r,e,w),ce(e,L,w),d(x,e,w),ce(e,P,w),ce(e,o,w),_.m(He,o),ce(e,Le,w),ce(e,j,w),d(z,j,null),t(j,Ie),ce(e,Te,w),ce(e,u,w),t(u,T),t(T,A),t(T,Ce),t(T,fe),t(T,Se),d(W,T,null),t(T,Ee),d(D,T,null),t(u,Ue),t(u,v),t(v,F),t(v,qe),t(v,ue),t(v,Pe),d(N,v,null),t(v,je),d(O,v,null),t(v,Be),d(G,v,null),t(v,Re),d(J,v,null),t(u,ze),t(u,S),t(S,K),t(S,Ae),t(S,$e),t(S,We),d(Q,S,null),t(u,De),t(u,E),t(E,V),t(E,Fe),t(E,he),t(E,Ne),d(X,E,null),t(u,Oe),t(u,U),t(U,Y),t(U,Ge),t(U,ge),t(U,Je),d(Z,U,null),t(u,Ke),t(u,q),t(q,ee),t(q,Qe),t(q,ye),t(q,Ve),d(te,q,null),t(u,Xe),t(u,g),t(g,ae),t(g,Ye),t(g,ke),t(g,Ze),d(ne,g,null),t(g,et),d(se,g,null),t(g,tt),d(le,g,null),t(g,at),d(re,g,null),t(g,nt),d(oe,g,null),t(u,st),t(u,M),t(M,ie),t(M,lt),t(M,ve),t(M,rt),d(pe,M,null),t(M,ot),d(de,M,null),Me=!0},p:qt,i(e){Me||(c(r.$$.fragment,e),c(x.$$.fragment,e),c(z.$$.fragment,e),c(W.$$.fragment,e),c(D.$$.fragment,e),c(N.$$.fragment,e),c(O.$$.fragment,e),c(G.$$.fragment,e),c(J.$$.fragment,e),c(Q.$$.fragment,e),c(X.$$.fragment,e),c(Z.$$.fragment,e),c(te.$$.fragment,e),c(ne.$$.fragment,e),c(se.$$.fragment,e),c(le.$$.fragment,e),c(re.$$.fragment,e),c(oe.$$.fragment,e),c(pe.$$.fragment,e),c(de.$$.fragment,e),Me=!0)},o(e){m(r.$$.fragment,e),m(x.$$.fragment,e),m(z.$$.fragment,e),m(W.$$.fragment,e),m(D.$$.fragment,e),m(N.$$.fragment,e),m(O.$$.fragment,e),m(G.$$.fragment,e),m(J.$$.fragment,e),m(Q.$$.fragment,e),m(X.$$.fragment,e),m(Z.$$.fragment,e),m(te.$$.fragment,e),m(ne.$$.fragment,e),m(se.$$.fragment,e),m(le.$$.fragment,e),m(re.$$.fragment,e),m(oe.$$.fragment,e),m(pe.$$.fragment,e),m(de.$$.fragment,e),Me=!1},d(e){e&&(h(L),h(P),h(o),h(Le),h(j),h(Te),h(u)),f(r,e),f(x,e),f(z),f(W),f(D),f(N),f(O),f(G),f(J),f(Q),f(X),f(Z),f(te),f(ne),f(se),f(le),f(re),f(oe),f(pe),f(de)}}}function At(me){let r,L;const x=[me[0],Ct];let P={$$slots:{default:[zt]},$$scope:{ctx:me}};for(let o=0;o<x.length;o+=1)P=pt(P,x[o]);return r=new Rt({props:P}),{c(){i(r.$$.fragment)},l(o){p(r.$$.fragment,o)},m(o,_){d(r,o,_),L=!0},p(o,[_]){const He=_&1?Bt(x,[_&1&&It(o[0]),_&0&&It(Ct)]):{};_&2&&(He.$$scope={dirty:_,ctx:o}),r.$set(He)},i(o){L||(c(r.$$.fragment,o),L=!0)},o(o){m(r.$$.fragment,o),L=!1},d(o){f(r,o)}}}const Ct={title:"Config",desc:"How to change the default configuration of daisyUI?",published:!0};function Wt(me,r,L){return me.$$set=x=>{L(0,r=pt(pt({},r),Lt(x)))},r=Lt(r),[r]}class Jt extends Pt{constructor(r){super(),jt(this,r,Wt,At,St,{})}}export{Jt as component};
