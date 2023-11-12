import{s as pe,D as Q,a as H,f as T,c as R,g as y,h as w,d as c,j as f,i as U,u as d,I as ee,J as te,K as le,A as fe,S as xe,T as Xe,o as oe,l as se,m as re,C as ie,L as Ke,R as Ye,n as ue,B as Ee,q as de,p as _e,x,y as X,W as we,v as Te,z as Qe}from"./scheduler.4207298b.js";import{S as he,i as me,b as z,d as q,m as F,a as D,t as P,e as W,g as G,c as K}from"./index.04247e75.js";import{p as et}from"./stores.e192deef.js";import{A as tt}from"./Ads.5197d52d.js";import{C as lt}from"./ComponentFooter.939eb3a6.js";import{S as st}from"./SEO.efa866a5.js";import{S as rt}from"./Sponsors.fe853181.js";import{t as Ge}from"./i18n.c4b717bd.js";import{_ as nt}from"./preload-helper.a4192956.js";import{T as ne}from"./Translate.5cdc3d78.js";import{e as ye}from"./each.e59479a4.js";import{w as at}from"./index.222697e7.js";import{c as ce,g as ot}from"./_commonjsHelpers.725317a4.js";function je(r){let e,l,s=r[3](r[1])+"";return{c(){e=T("h1"),l=new xe(!1),this.h()},l(t){e=y(t,"H1",{});var n=w(e);l=Xe(n,!1),n.forEach(c),this.h()},h(){l.a=null},m(t,n){U(t,e,n),l.m(s,e)},p(t,n){n&10&&s!==(s=t[3](t[1])+"")&&l.p(s)},d(t){t&&c(e)}}}function Ce(r){let e,l,s=r[3](r[2])+"";return{c(){e=T("p"),l=new xe(!1),this.h()},l(t){e=y(t,"P",{});var n=w(e);l=Xe(n,!1),n.forEach(c),this.h()},h(){l.a=null},m(t,n){U(t,e,n),l.m(s,e)},p(t,n){n&12&&s!==(s=t[3](t[2])+"")&&l.p(s)},d(t){t&&c(e)}}}function it(r){let e,l,s,t,n,o,a,i,_,p,b,V,M,B;e=new st({props:{title:`Tailwind ${r[1]} ${r[3]("Component")}`,desc:`Tailwind ${r[1]} examples: ${r[2]} component`,img:`/images${r[4].url.pathname.replace(/\/$/,"")}.jpg`}});let j=r[1]&&je(r),m=r[2]&&Ce(r);const C=r[6].default,$=Q(C,r,r[5],null);return i=new lt({props:{pages:r[0].pages}}),b=new rt({props:{wrapperClasses:"flex-col sm:flex-row"}}),M=new tt({props:{slot:"carbon2"}}),{c(){z(e.$$.fragment),l=H(),s=T("div"),t=T("div"),j&&j.c(),n=H(),m&&m.c(),o=H(),$&&$.c(),a=H(),z(i.$$.fragment),_=H(),p=T("div"),z(b.$$.fragment),V=H(),z(M.$$.fragment),this.h()},l(u){q(e.$$.fragment,u),l=R(u),s=y(u,"DIV",{class:!0});var L=w(s);t=y(L,"DIV",{class:!0});var h=w(t);j&&j.l(h),n=R(h),m&&m.l(h),o=R(h),$&&$.l(h),a=R(h),q(i.$$.fragment,h),_=R(h),p=y(h,"DIV",{class:!0});var g=w(p);q(b.$$.fragment,g),g.forEach(c),h.forEach(c),V=R(L),q(M.$$.fragment,L),L.forEach(c),this.h()},h(){f(p,"class","not-prose flex justify-center xl:hidden"),f(t,"class","prose prose-sm md:prose-base w-full max-w-4xl flex-grow pt-10"),f(s,"class","flex flex-col-reverse justify-between gap-6 xl:flex-row")},m(u,L){F(e,u,L),U(u,l,L),U(u,s,L),d(s,t),j&&j.m(t,null),d(t,n),m&&m.m(t,null),d(t,o),$&&$.m(t,null),d(t,a),F(i,t,null),d(t,_),d(t,p),F(b,p,null),d(s,V),F(M,s,null),B=!0},p(u,[L]){const h={};L&10&&(h.title=`Tailwind ${u[1]} ${u[3]("Component")}`),L&6&&(h.desc=`Tailwind ${u[1]} examples: ${u[2]} component`),L&16&&(h.img=`/images${u[4].url.pathname.replace(/\/$/,"")}.jpg`),e.$set(h),u[1]?j?j.p(u,L):(j=je(u),j.c(),j.m(t,n)):j&&(j.d(1),j=null),u[2]?m?m.p(u,L):(m=Ce(u),m.c(),m.m(t,o)):m&&(m.d(1),m=null),$&&$.p&&(!B||L&32)&&ee($,C,u,u[5],B?le(C,u[5],L,null):te(u[5]),null);const g={};L&1&&(g.pages=u[0].pages),i.$set(g)},i(u){B||(D(e.$$.fragment,u),D($,u),D(i.$$.fragment,u),D(b.$$.fragment,u),D(M.$$.fragment,u),B=!0)},o(u){P(e.$$.fragment,u),P($,u),P(i.$$.fragment,u),P(b.$$.fragment,u),P(M.$$.fragment,u),B=!1},d(u){u&&(c(l),c(s)),W(e,u),j&&j.d(),m&&m.d(),$&&$.d(u),W(i),W(b),W(M)}}}function ft(r,e,l){let s,t;fe(r,Ge,p=>l(3,s=p)),fe(r,et,p=>l(4,t=p));let{$$slots:n={},$$scope:o}=e,{data:a}=e,{title:i}=e,{desc:_}=e;return r.$$set=p=>{"data"in p&&l(0,a=p.data),"title"in p&&l(1,i=p.title),"desc"in p&&l(2,_=p.desc),"$$scope"in p&&l(5,o=p.$$scope)},[a,i,_,s,t,o,n]}class ul extends he{constructor(e){super(),me(this,e,ft,it,pe,{data:0,title:1,desc:2})}}function dl(r,e={}){const l=r.textContent??"",s={search:"$$",to:""};function t(n){const{search:o,to:a}={...s,...n};r.textContent=l.replaceAll(o,a)}return t(e),{update:t}}function ke(r){const e=r.textContent??"",l={"onclick=":"onClick=",'"0"':"{0}","<!--":"{/*","-->":"*/}","clip-rule=":"clipRule=","fill-opacity=":"fillOpacity=","fill-rule=":"fillRule=","stroke-dasharray=":"strokeDasharray=","stroke-dashoffset=":"strokeDashoffset=","stroke-linecap=":"strokeLinecap=","stroke-linejoin=":"strokeLinejoin=","stroke-opacity=":"strokeOpacity=","stroke-width=":"strokeWidth=","class=":"className=","for=":"htmlFor=","tabindex=":"tabIndex="},s=new RegExp(Object.keys(l).join("|"),"gi");function t(){r.textContent=e.replace(s,function(n){return l[n.toLowerCase()]})}return t(),{update:t}}const ct=r=>({}),Ie=r=>({}),ut=r=>({}),De=r=>({}),dt=r=>({}),Ve=r=>({}),pt=r=>({}),Me=r=>({}),ht=r=>({}),Se=r=>({}),mt=r=>({}),Be=r=>({});function Oe(r){let e,l,s,t,n,o,a;return{c(){e=T("div"),l=T("a"),s=se("#"),n=H(),o=T("span"),a=se(r[0]),this.h()},l(i){e=y(i,"DIV",{class:!0});var _=w(e);l=y(_,"A",{class:!0,href:!0});var p=w(l);s=re(p,"#"),p.forEach(c),n=R(_),o=y(_,"SPAN",{class:!0});var b=w(o);a=re(b,r[0]),b.forEach(c),_.forEach(c),this.h()},h(){f(l,"class","opacity-20 hover:opacity-60"),f(l,"href",t=`#${r[11]}`),f(o,"class","component-preview-title"),f(e,"class","pb-2 text-sm font-bold")},m(i,_){U(i,e,_),d(e,l),d(l,s),d(e,n),d(e,o),d(o,a)},p(i,_){_&2048&&t!==(t=`#${i[11]}`)&&f(l,"href",t),_&1&&ue(a,i[0])},d(i){i&&c(e)}}}function Pe(r){let e,l;return{c(){e=T("div"),l=se(r[1]),this.h()},l(s){e=y(s,"DIV",{class:!0});var t=w(e);l=re(t,r[1]),t.forEach(c),this.h()},h(){f(e,"class","pb-2 text-xs opacity-70")},m(s,t){U(s,e,t),d(e,l)},p(s,t){t&2&&ue(l,s[1])},d(s){s&&c(e)}}}function Ae(r){let e,l,s,t,n;const o=r[15].default,a=Q(o,r,r[24],null);return{c(){e=T("div"),l=T("div"),a&&a.c(),this.h()},l(i){e=y(i,"DIV",{class:!0});var _=w(e);l=y(_,"DIV",{class:!0,style:!0});var p=w(l);a&&a.l(p),p.forEach(c),_.forEach(c),this.h()},h(){f(l,"class",s="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)] "+r[3]),f(l,"style",t=r[2]?`background-image: url(${r[2]})`:""),Ee(l,"resize-x",r[4]),f(e,"class","bg-base-300 rounded-b-box rounded-se-box relative overflow-x-auto")},m(i,_){U(i,e,_),d(e,l),a&&a.m(l,null),n=!0},p(i,_){a&&a.p&&(!n||_&16777216)&&ee(a,o,i,i[24],n?le(o,i[24],_,null):te(i[24]),null),(!n||_&8&&s!==(s="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)] "+i[3]))&&f(l,"class",s),(!n||_&4&&t!==(t=i[2]?`background-image: url(${i[2]})`:""))&&f(l,"style",t),(!n||_&24)&&Ee(l,"resize-x",i[4])},i(i){n||(D(a,i),n=!0)},o(i){P(a,i),n=!1},d(i){i&&c(e),a&&a.d(i)}}}function Ne(r){let e,l,s,t,n,o,a,i,_,p,b,V,M;const B=r[15].html,j=Q(B,r,r[24],Be);var m=r[5];function C(h,g){return{props:{language:"html",$$slots:{default:[_t]},$$scope:{ctx:h}}}}m&&(n=de(m,C(r)));function $(h,g){return h[10]?bt:vt}let u=$(r),L=u(r);return{c(){e=T("div"),l=T("div"),j&&j.c(),s=H(),t=T("div"),n&&z(n.$$.fragment),o=H(),a=T("div"),i=T("div"),_=T("button"),L.c(),this.h()},l(h){e=y(h,"DIV",{class:!0});var g=w(e);l=y(g,"DIV",{class:!0});var k=w(l);j&&j.l(k),k.forEach(c),s=R(g),t=y(g,"DIV",{class:!0});var O=w(t);n&&q(n.$$.fragment,O),O.forEach(c),o=R(g),a=y(g,"DIV",{class:!0});var v=w(a);i=y(v,"DIV",{"data-tip":!0,class:!0});var S=w(i);_=y(S,"BUTTON",{class:!0});var E=w(_);L.l(E),E.forEach(c),S.forEach(c),v.forEach(c),g.forEach(c),this.h()},h(){f(l,"class","hidden"),f(t,"class","code-wrapper col-start-1 row-start-1"),f(_,"class","btn btn-square btn-sm btn-neutral"),f(i,"data-tip",p=r[10]?"copied":"copy"),f(i,"class","tooltip tooltip-left tooltip-accent"),f(a,"class","col-start-1 row-start-1 flex items-start justify-end p-2 rtl:justify-start"),f(e,"class","grid")},m(h,g){U(h,e,g),d(e,l),j&&j.m(l,null),r[19](l),d(e,s),d(e,t),n&&F(n,t,null),d(e,o),d(e,a),d(a,i),d(i,_),L.m(_,null),b=!0,V||(M=ie(_,"click",r[20]),V=!0)},p(h,g){if(j&&j.p&&(!b||g&16777216)&&ee(j,B,h,h[24],b?le(B,h[24],g,mt):te(h[24]),Be),g&32&&m!==(m=h[5])){if(n){G();const k=n;P(k.$$.fragment,1,0,()=>{W(k,1)}),K()}m?(n=de(m,C(h)),z(n.$$.fragment),D(n.$$.fragment,1),F(n,t,null)):n=null}else if(m){const k={};g&16777216&&(k.$$scope={dirty:g,ctx:h}),n.$set(k)}u!==(u=$(h))&&(L.d(1),L=u(h),L&&(L.c(),L.m(_,null))),(!b||g&1024&&p!==(p=h[10]?"copied":"copy"))&&f(i,"data-tip",p)},i(h){b||(D(j,h),n&&D(n.$$.fragment,h),b=!0)},o(h){P(j,h),n&&P(n.$$.fragment,h),b=!1},d(h){h&&c(e),j&&j.d(h),r[19](null),n&&W(n),L.d(),V=!1,M()}}}function _t(r){let e;const l=r[15].html,s=Q(l,r,r[24],Se);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),e=!0},p(t,n){s&&s.p&&(!e||n&16777216)&&ee(s,l,t,t[24],e?le(l,t[24],n,ht):te(t[24]),Se)},i(t){e||(D(s,t),e=!0)},o(t){P(s,t),e=!1},d(t){s&&s.d(t)}}}function vt(r){let e,l;return{c(){e=x("svg"),l=x("path"),this.h()},l(s){e=X(s,"svg",{class:!0,xmlns:!0,viewBox:!0});var t=w(e);l=X(t,"path",{d:!0}),w(l).forEach(c),t.forEach(c),this.h()},h(){f(l,"d","M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z"),f(e,"class","h-5 w-5 fill-current"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"viewBox","0 0 32 32")},m(s,t){U(s,e,t),d(e,l)},d(s){s&&c(e)}}}function bt(r){let e,l;return{c(){e=x("svg"),l=x("path"),this.h()},l(s){e=X(s,"svg",{class:!0,xmlns:!0,viewBox:!0});var t=w(e);l=X(t,"path",{d:!0}),w(l).forEach(c),t.forEach(c),this.h()},h(){f(l,"d","M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z"),f(e,"class","h-5 w-5 fill-current"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"viewBox","0 0 32 32")},m(s,t){U(s,e,t),d(e,l)},d(s){s&&c(e)}}}function He(r){let e,l,s,t,n,o,a,i,_,p,b,V,M,B,j;const m=[wt,gt],C=[];function $(O,v){return O[14].jsx?0:1}s=$(r),t=C[s]=m[s](r);var u=r[5];function L(O,v){return{props:{language:"svelte",$$slots:{default:[$t]},$$scope:{ctx:O}}}}u&&(a=de(u,L(r)));function h(O,v){return O[10]?Tt:Et}let g=h(r),k=g(r);return{c(){e=T("div"),l=T("div"),t.c(),n=H(),o=T("div"),a&&z(a.$$.fragment),i=H(),_=T("div"),p=T("div"),b=T("button"),k.c(),this.h()},l(O){e=y(O,"DIV",{class:!0});var v=w(e);l=y(v,"DIV",{class:!0});var S=w(l);t.l(S),S.forEach(c),n=R(v),o=y(v,"DIV",{class:!0});var E=w(o);a&&q(a.$$.fragment,E),E.forEach(c),i=R(v),_=y(v,"DIV",{class:!0});var I=w(_);p=y(I,"DIV",{"data-tip":!0,class:!0});var N=w(p);b=y(N,"BUTTON",{class:!0});var A=w(b);k.l(A),A.forEach(c),N.forEach(c),I.forEach(c),v.forEach(c),this.h()},h(){f(l,"class","hidden"),f(o,"class","code-wrapper col-start-1 row-start-1"),f(b,"class","btn btn-square btn-sm btn-neutral"),f(p,"data-tip",V=r[10]?"copied":"copy"),f(p,"class","tooltip tooltip-left tooltip-accent"),f(_,"class","col-start-1 row-start-1 flex items-start justify-end p-2"),f(e,"class","grid")},m(O,v){U(O,e,v),d(e,l),C[s].m(l,null),r[21](l),d(e,n),d(e,o),a&&F(a,o,null),d(e,i),d(e,_),d(_,p),d(p,b),k.m(b,null),M=!0,B||(j=ie(b,"click",r[22]),B=!0)},p(O,v){let S=s;if(s=$(O),s===S?C[s].p(O,v):(G(),P(C[S],1,1,()=>{C[S]=null}),K(),t=C[s],t?t.p(O,v):(t=C[s]=m[s](O),t.c()),D(t,1),t.m(l,null)),v&32&&u!==(u=O[5])){if(a){G();const E=a;P(E.$$.fragment,1,0,()=>{W(E,1)}),K()}u?(a=de(u,L(O)),z(a.$$.fragment),D(a.$$.fragment,1),F(a,o,null)):a=null}else if(u){const E={};v&16793600&&(E.$$scope={dirty:v,ctx:O}),a.$set(E)}g!==(g=h(O))&&(k.d(1),k=g(O),k&&(k.c(),k.m(b,null))),(!M||v&1024&&V!==(V=O[10]?"copied":"copy"))&&f(p,"data-tip",V)},i(O){M||(D(t),a&&D(a.$$.fragment,O),M=!0)},o(O){P(t),a&&P(a.$$.fragment,O),M=!1},d(O){O&&c(e),C[s].d(),r[21](null),a&&W(a),k.d(),B=!1,j()}}}function gt(r){let e,l,s,t;const n=r[15].html,o=Q(n,r,r[24],Ve);return{c(){e=T("pre"),o&&o.c()},l(a){e=y(a,"PRE",{});var i=w(e);o&&o.l(i),i.forEach(c)},m(a,i){U(a,e,i),o&&o.m(e,null),l=!0,s||(t=we(ke.call(null,e)),s=!0)},p(a,i){o&&o.p&&(!l||i&16777216)&&ee(o,n,a,a[24],l?le(n,a[24],i,dt):te(a[24]),Ve)},i(a){l||(D(o,a),l=!0)},o(a){P(o,a),l=!1},d(a){a&&c(e),o&&o.d(a),s=!1,t()}}}function wt(r){let e,l,s,t;const n=r[15].jsx,o=Q(n,r,r[24],Me);return{c(){e=T("pre"),o&&o.c()},l(a){e=y(a,"PRE",{});var i=w(e);o&&o.l(i),i.forEach(c)},m(a,i){U(a,e,i),o&&o.m(e,null),l=!0,s||(t=we(ke.call(null,e)),s=!0)},p(a,i){o&&o.p&&(!l||i&16777216)&&ee(o,n,a,a[24],l?le(n,a[24],i,pt):te(a[24]),Me)},i(a){l||(D(o,a),l=!0)},o(a){P(o,a),l=!1},d(a){a&&c(e),o&&o.d(a),s=!1,t()}}}function kt(r){let e;const l=r[15].html,s=Q(l,r,r[24],Ie);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),e=!0},p(t,n){s&&s.p&&(!e||n&16777216)&&ee(s,l,t,t[24],e?le(l,t[24],n,ct):te(t[24]),Ie)},i(t){e||(D(s,t),e=!0)},o(t){P(s,t),e=!1},d(t){s&&s.d(t)}}}function Lt(r){let e;const l=r[15].jsx,s=Q(l,r,r[24],De);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),e=!0},p(t,n){s&&s.p&&(!e||n&16777216)&&ee(s,l,t,t[24],e?le(l,t[24],n,ut):te(t[24]),De)},i(t){e||(D(s,t),e=!0)},o(t){P(s,t),e=!1},d(t){s&&s.d(t)}}}function $t(r){let e,l,s,t,n,o;const a=[Lt,kt],i=[];function _(p,b){return p[14].jsx?0:1}return l=_(r),s=i[l]=a[l](r),{c(){e=T("div"),s.c()},l(p){e=y(p,"DIV",{});var b=w(e);s.l(b),b.forEach(c)},m(p,b){U(p,e,b),i[l].m(e,null),t=!0,n||(o=we(ke.call(null,e)),n=!0)},p(p,b){let V=l;l=_(p),l===V?i[l].p(p,b):(G(),P(i[V],1,1,()=>{i[V]=null}),K(),s=i[l],s?s.p(p,b):(s=i[l]=a[l](p),s.c()),D(s,1),s.m(e,null))},i(p){t||(D(s),t=!0)},o(p){P(s),t=!1},d(p){p&&c(e),i[l].d(),n=!1,o()}}}function Et(r){let e,l;return{c(){e=x("svg"),l=x("path"),this.h()},l(s){e=X(s,"svg",{class:!0,xmlns:!0,viewBox:!0});var t=w(e);l=X(t,"path",{d:!0}),w(l).forEach(c),t.forEach(c),this.h()},h(){f(l,"d","M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z"),f(e,"class","h-5 w-5 fill-current"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"viewBox","0 0 32 32")},m(s,t){U(s,e,t),d(e,l)},d(s){s&&c(e)}}}function Tt(r){let e,l;return{c(){e=x("svg"),l=x("path"),this.h()},l(s){e=X(s,"svg",{class:!0,xmlns:!0,viewBox:!0});var t=w(e);l=X(t,"path",{d:!0}),w(l).forEach(c),t.forEach(c),this.h()},h(){f(l,"d","M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z"),f(e,"class","h-5 w-5 fill-current"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"viewBox","0 0 32 32")},m(s,t){U(s,e,t),d(e,l)},d(s){s&&c(e)}}}function yt(r){let e,l,s,t,n,o,a,i,_,p,b,V,M,B,j,m,C,$,u,L,h,g,k,O,v=r[0]&&Oe(r),S=r[1]&&Pe(r);a=new ne({props:{text:"Preview"}});let E=r[7]=="preview"&&Ae(r),I=oe&&r[7]=="html"&&Ne(r),N=oe&&r[7]=="jsx"&&He(r);return{c(){e=T("div"),v&&v.c(),l=H(),S&&S.c(),s=H(),t=T("div"),n=T("div"),o=T("button"),z(a.$$.fragment),_=H(),p=T("button"),b=se("HTML"),M=H(),B=T("button"),j=se("JSX"),C=H(),$=T("div"),u=H(),E&&E.c(),L=H(),I&&I.c(),h=H(),N&&N.c(),this.h()},l(A){e=y(A,"DIV",{class:!0,id:!0});var Z=w(e);v&&v.l(Z),l=R(Z),S&&S.l(Z),s=R(Z),t=y(Z,"DIV",{class:!0});var Y=w(t);n=y(Y,"DIV",{class:!0});var J=w(n);o=y(J,"BUTTON",{class:!0});var ae=w(o);q(a.$$.fragment,ae),ae.forEach(c),_=R(J),p=y(J,"BUTTON",{class:!0});var Le=w(p);b=re(Le,"HTML"),Le.forEach(c),M=R(J),B=y(J,"BUTTON",{class:!0});var $e=w(B);j=re($e,"JSX"),$e.forEach(c),C=R(J),$=y(J,"DIV",{class:!0}),w($).forEach(c),J.forEach(c),u=R(Y),E&&E.l(Y),L=R(Y),I&&I.l(Y),h=R(Y),N&&N.l(Y),Y.forEach(c),Z.forEach(c),this.h()},h(){f(o,"class",i=`tab ${r[7]=="preview"?"tab-active [--tab-bg:var(--fallback-b1,oklch(var(--b1)))]":"[--tab-border-color:transparent]"}`),f(p,"class",V=`tab ${r[7]=="html"?"tab-active [--tab-bg:var(--fallback-n,oklch(var(--n)))] [--tab-border-color:var(--fallback-n,oklch(var(--n)))] [--tab-color:var(--fallback-nc,oklch(var(--nc)))]":"[--tab-border-color:transparent]"}`),f(B,"class",m=`tab ${r[7]=="jsx"?"tab-active [--tab-bg:var(--fallback-n,oklch(var(--n)))] [--tab-border-color:var(--fallback-n,oklch(var(--n)))] [--tab-color:var(--fallback-nc,oklch(var(--nc)))]":"[--tab-border-color:transparent]"}`),f($,"class","tab [--tab-border-color:transparent]"),f(n,"class","tabs tabs-lifted z-10 -mb-[var(--tab-border)] justify-self-start"),f(t,"class","grid"),f(e,"class","component-preview not-prose text-base-content my-6 lg:my-12"),f(e,"id",r[11])},m(A,Z){U(A,e,Z),v&&v.m(e,null),d(e,l),S&&S.m(e,null),d(e,s),d(e,t),d(t,n),d(n,o),F(a,o,null),d(n,_),d(n,p),d(p,b),d(n,M),d(n,B),d(B,j),d(n,C),d(n,$),d(t,u),E&&E.m(t,null),d(t,L),I&&I.m(t,null),d(t,h),N&&N.m(t,null),r[23](e),g=!0,k||(O=[ie(o,"click",r[16]),ie(p,"click",r[17]),ie(B,"click",r[18])],k=!0)},p(A,[Z]){A[0]?v?v.p(A,Z):(v=Oe(A),v.c(),v.m(e,l)):v&&(v.d(1),v=null),A[1]?S?S.p(A,Z):(S=Pe(A),S.c(),S.m(e,s)):S&&(S.d(1),S=null),(!g||Z&128&&i!==(i=`tab ${A[7]=="preview"?"tab-active [--tab-bg:var(--fallback-b1,oklch(var(--b1)))]":"[--tab-border-color:transparent]"}`))&&f(o,"class",i),(!g||Z&128&&V!==(V=`tab ${A[7]=="html"?"tab-active [--tab-bg:var(--fallback-n,oklch(var(--n)))] [--tab-border-color:var(--fallback-n,oklch(var(--n)))] [--tab-color:var(--fallback-nc,oklch(var(--nc)))]":"[--tab-border-color:transparent]"}`))&&f(p,"class",V),(!g||Z&128&&m!==(m=`tab ${A[7]=="jsx"?"tab-active [--tab-bg:var(--fallback-n,oklch(var(--n)))] [--tab-border-color:var(--fallback-n,oklch(var(--n)))] [--tab-color:var(--fallback-nc,oklch(var(--nc)))]":"[--tab-border-color:transparent]"}`))&&f(B,"class",m),A[7]=="preview"?E?(E.p(A,Z),Z&128&&D(E,1)):(E=Ae(A),E.c(),D(E,1),E.m(t,L)):E&&(G(),P(E,1,1,()=>{E=null}),K()),oe&&A[7]=="html"?I?(I.p(A,Z),Z&128&&D(I,1)):(I=Ne(A),I.c(),D(I,1),I.m(t,h)):I&&(G(),P(I,1,1,()=>{I=null}),K()),oe&&A[7]=="jsx"?N?(N.p(A,Z),Z&128&&D(N,1)):(N=He(A),N.c(),D(N,1),N.m(t,null)):N&&(G(),P(N,1,1,()=>{N=null}),K()),(!g||Z&2048)&&f(e,"id",A[11])},i(A){g||(D(a.$$.fragment,A),D(E),D(I),D(N),g=!0)},o(A){P(a.$$.fragment,A),P(E),P(I),P(N),g=!1},d(A){A&&c(e),v&&v.d(),S&&S.d(),W(a),E&&E.d(),I&&I.d(),N&&N.d(),r[23](null),k=!1,Ke(O)}}}function jt(r,e,l){let s,{$$slots:t={},$$scope:n}=e;const o=Ye(t);let a;oe(async()=>{l(5,a=(await nt(()=>import("./Prism.0b62153c.js"),["./Prism.0b62153c.js","./scheduler.4207298b.js","./index.04247e75.js","./_commonjsHelpers.725317a4.js"],import.meta.url)).default)});let{title:i=void 0}=e,{desc:_=void 0}=e,{bg:p=void 0}=e,{classes:b=void 0}=e,{responsive:V=!1}=e,M,B="preview",j,m,C=!1;const $=I=>{navigator.clipboard.writeText(I),l(10,C=!0),setTimeout(()=>{l(10,C=!1)},2e3)},u=I=>{var N=document.createElement("textarea");return N.innerHTML=I,N.value};oe(()=>{document.getElementById(location.hash.slice(1))&&location.hash.slice(1)==s&&document.getElementById(location.hash.slice(1)).click()});const L=()=>l(7,B="preview"),h=()=>l(7,B="html"),g=()=>l(7,B="jsx");function k(I){_e[I?"unshift":"push"](()=>{j=I,l(8,j)})}const O=()=>$(u(j.firstChild.innerHTML));function v(I){_e[I?"unshift":"push"](()=>{m=I,l(9,m)})}const S=()=>$(u(m.firstChild.innerHTML));function E(I){_e[I?"unshift":"push"](()=>{M=I,l(6,M)})}return r.$$set=I=>{"title"in I&&l(0,i=I.title),"desc"in I&&l(1,_=I.desc),"bg"in I&&l(2,p=I.bg),"classes"in I&&l(3,b=I.classes),"responsive"in I&&l(4,V=I.responsive),"$$scope"in I&&l(24,n=I.$$scope)},r.$$.update=()=>{r.$$.dirty&1&&l(11,s=i?i.replace(/[ ]/g,"-").replace(/[^A-Za-z0-9-]/g,"").toLowerCase():"")},[i,_,p,b,V,a,M,B,j,m,C,s,$,u,o,t,L,h,g,k,O,v,S,E,n]}class pl extends he{constructor(e){super(),me(this,e,jt,yt,pe,{title:0,desc:1,bg:2,classes:3,responsive:4})}}const be=at("");var Ct="Expected a function",Re=0/0,It="[object Symbol]",Dt=/^\s+|\s+$/g,Vt=/^[-+]0x[0-9a-f]+$/i,Mt=/^0b[01]+$/i,St=/^0o[0-7]+$/i,Bt=parseInt,Ot=typeof ce=="object"&&ce&&ce.Object===Object&&ce,Pt=typeof self=="object"&&self&&self.Object===Object&&self,At=Ot||Pt||Function("return this")(),Nt=Object.prototype,Ht=Nt.toString,Rt=Math.max,Zt=Math.min,ve=function(){return At.Date.now()};function Ut(r,e,l){var s,t,n,o,a,i,_=0,p=!1,b=!1,V=!0;if(typeof r!="function")throw new TypeError(Ct);e=Ze(e)||0,ge(l)&&(p=!!l.leading,b="maxWait"in l,n=b?Rt(Ze(l.maxWait)||0,e):n,V="trailing"in l?!!l.trailing:V);function M(g){var k=s,O=t;return s=t=void 0,_=g,o=r.apply(O,k),o}function B(g){return _=g,a=setTimeout(C,e),p?M(g):o}function j(g){var k=g-i,O=g-_,v=e-k;return b?Zt(v,n-O):v}function m(g){var k=g-i,O=g-_;return i===void 0||k>=e||k<0||b&&O>=n}function C(){var g=ve();if(m(g))return $(g);a=setTimeout(C,j(g))}function $(g){return a=void 0,V&&s?M(g):(s=t=void 0,o)}function u(){a!==void 0&&clearTimeout(a),_=0,s=i=t=a=void 0}function L(){return a===void 0?o:$(ve())}function h(){var g=ve(),k=m(g);if(s=arguments,t=this,i=g,k){if(a===void 0)return B(i);if(b)return a=setTimeout(C,e),M(i)}return a===void 0&&(a=setTimeout(C,e)),o}return h.cancel=u,h.flush=L,h}function ge(r){var e=typeof r;return!!r&&(e=="object"||e=="function")}function zt(r){return!!r&&typeof r=="object"}function Ft(r){return typeof r=="symbol"||zt(r)&&Ht.call(r)==It}function Ze(r){if(typeof r=="number")return r;if(Ft(r))return Re;if(ge(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=ge(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=r.replace(Dt,"");var l=Mt.test(r);return l||St.test(r)?Bt(r.slice(2),l?2:8):Vt.test(r)?Re:+r}var Wt=Ut;const qt=ot(Wt);function Jt(r){let e,l,s,t;return{c(){e=T("div"),l=T("input"),this.h()},l(n){e=y(n,"DIV",{class:!0,"data-tip":!0});var o=w(e);l=y(o,"INPUT",{class:!0,type:!0,placeholder:!0}),o.forEach(c),this.h()},h(){f(l,"class","input input-bordered input-xs w-min max-w-[3.8rem]"),f(l,"type","text"),f(l,"placeholder","prefix–"),l.value=r[0],f(e,"class","tooltip tooltip-right rtl:tooltip-left font-normal"),f(e,"data-tip","Add custom prefix")},m(n,o){U(n,e,o),d(e,l),s||(t=ie(l,"input",r[1]),s=!0)},p(n,[o]){o&1&&l.value!==n[0]&&(l.value=n[0])},i:Te,o:Te,d(n){n&&c(e),s=!1,t()}}}function xt(r,e,l){let s;fe(r,be,n=>l(0,s=n));const t=qt(n=>{n.target.value!==s&&be.set(n.target.value)},500);return[s,t]}class Xt extends he{constructor(e){super(),me(this,e,xt,Jt,pe,{})}}function Ue(r,e,l){const s=r.slice();return s[3]=e[l],s[5]=l,s}function ze(r){let e,l,s,t,n,o,a,i,_,p,b,V;return b=new ne({props:{text:"To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>"}}),{c(){e=T("tr"),l=T("td"),s=T("div"),t=x("svg"),n=x("polygon"),o=H(),a=x("svg"),i=x("path"),_=H(),p=T("div"),z(b.$$.fragment),this.h()},l(M){e=y(M,"TR",{});var B=w(e);l=y(B,"TD",{colspan:!0,class:!0});var j=w(l);s=y(j,"DIV",{class:!0});var m=w(s);t=X(m,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0});var C=w(t);n=X(C,"polygon",{points:!0}),w(n).forEach(c),C.forEach(c),o=R(m),a=X(m,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var $=w(a);i=X($,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),w(i).forEach(c),$.forEach(c),_=R(m),p=y(m,"DIV",{class:!0});var u=w(p);q(b.$$.fragment,u),u.forEach(c),m.forEach(c),j.forEach(c),B.forEach(c),this.h()},h(){f(n,"points","256 32 20 464 492 464 256 32"),f(t,"class","fill-info absolute -top-1.5 left-8 scale-x-150"),f(t,"xmlns","http://www.w3.org/2000/svg"),f(t,"width","8"),f(t,"height","8"),f(t,"viewBox","0 0 512 512"),f(i,"stroke-linecap","round"),f(i,"stroke-linejoin","round"),f(i,"stroke-width","2"),f(i,"d","M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),f(a,"xmlns","http://www.w3.org/2000/svg"),f(a,"fill","none"),f(a,"viewBox","0 0 24 24"),f(a,"class","stroke-info-content h-4 w-4 flex-shrink-0"),f(p,"class","text-xs"),f(s,"class","text-info-content bg-info relative inline-flex items-center gap-2 rounded-lg p-2 px-3"),f(l,"colspan","3"),f(l,"class","!px-0")},m(M,B){U(M,e,B),d(e,l),d(l,s),d(s,t),d(t,n),d(s,o),d(s,a),d(a,i),d(s,_),d(s,p),F(b,p,null),V=!0},i(M){V||(D(b.$$.fragment,M),V=!0)},o(M){P(b.$$.fragment,M),V=!1},d(M){M&&c(e),W(b)}}}function Fe(r){let e,l,s;return l=new ne({props:{text:"Component"}}),{c(){e=T("span"),z(l.$$.fragment),this.h()},l(t){e=y(t,"SPAN",{class:!0});var n=w(e);q(l.$$.fragment,n),n.forEach(c),this.h()},h(){f(e,"class","badge badge-sm badge-ghost w-24 whitespace-nowrap")},m(t,n){U(t,e,n),F(l,e,null),s=!0},i(t){s||(D(l.$$.fragment,t),s=!0)},o(t){P(l.$$.fragment,t),s=!1},d(t){t&&c(e),W(l)}}}function We(r){let e,l,s,t,n;return s=new ne({props:{text:"Modifier"}}),{c(){e=T("div"),l=T("span"),z(s.$$.fragment),this.h()},l(o){e=y(o,"DIV",{class:!0,"data-tip":!0});var a=w(e);l=y(a,"SPAN",{class:!0});var i=w(l);q(s.$$.fragment,i),i.forEach(c),a.forEach(c),this.h()},h(){f(l,"class","badge badge-sm badge-outline w-24 whitespace-nowrap"),f(e,"class","tooltip cursor-help"),f(e,"data-tip",t=r[2]("Changes the style of a component"))},m(o,a){U(o,e,a),d(e,l),F(s,l,null),n=!0},p(o,a){(!n||a&4&&t!==(t=o[2]("Changes the style of a component")))&&f(e,"data-tip",t)},i(o){n||(D(s.$$.fragment,o),n=!0)},o(o){P(s.$$.fragment,o),n=!1},d(o){o&&c(e),W(s)}}}function qe(r){let e,l,s,t,n;return s=new ne({props:{text:"Responsive"}}),{c(){e=T("div"),l=T("span"),z(s.$$.fragment),this.h()},l(o){e=y(o,"DIV",{class:!0,"data-tip":!0});var a=w(e);l=y(a,"SPAN",{class:!0});var i=w(l);q(s.$$.fragment,i),i.forEach(c),a.forEach(c),this.h()},h(){f(l,"class","badge badge-sm badge-success w-24 whitespace-nowrap"),f(e,"class","tooltip cursor-help"),f(e,"data-tip",t=r[2]("Supports responsive prefixes (sm:, lg:, …)"))},m(o,a){U(o,e,a),d(e,l),F(s,l,null),n=!0},p(o,a){(!n||a&4&&t!==(t=o[2]("Supports responsive prefixes (sm:, lg:, …)")))&&f(e,"data-tip",t)},i(o){n||(D(s.$$.fragment,o),n=!0)},o(o){P(s.$$.fragment,o),n=!1},d(o){o&&c(e),W(s)}}}function Je(r){let e,l,s,t=`${r[3].prefix!==!1?r[1]:""}${r[3].class}`,n,o,a,i,_,p,b,V=r[3].desc+"",M,B,j,m=r[3].type=="component"&&Fe(),C=r[3].type=="modifier"&&We(r),$=r[3].type=="responsive"&&qe(r);return{c(){e=T("tr"),l=T("th"),s=T("span"),n=se(t),o=H(),a=T("td"),m&&m.c(),i=H(),C&&C.c(),_=H(),$&&$.c(),p=H(),b=T("td"),M=se(V),B=H(),this.h()},l(u){e=y(u,"TR",{});var L=w(e);l=y(L,"TH",{class:!0});var h=w(l);s=y(h,"SPAN",{class:!0});var g=w(s);n=re(g,t),g.forEach(c),h.forEach(c),o=R(L),a=y(L,"TD",{class:!0});var k=w(a);m&&m.l(k),i=R(k),C&&C.l(k),_=R(k),$&&$.l(k),k.forEach(c),p=R(L),b=y(L,"TD",{class:!0});var O=w(b);M=re(O,V),O.forEach(c),B=R(L),L.forEach(c),this.h()},h(){f(s,"class","whitespace-nowrap font-mono lowercase"),f(l,"class","w-3/12 font-normal"),f(a,"class","w-1/12"),f(b,"class","w-8/12 min-w-[20rem]")},m(u,L){U(u,e,L),d(e,l),d(l,s),d(s,n),d(e,o),d(e,a),m&&m.m(a,null),d(a,i),C&&C.m(a,null),d(a,_),$&&$.m(a,null),d(e,p),d(e,b),d(b,M),d(e,B),j=!0},p(u,L){(!j||L&3)&&t!==(t=`${u[3].prefix!==!1?u[1]:""}${u[3].class}`)&&ue(n,t),u[3].type=="component"?m?L&1&&D(m,1):(m=Fe(),m.c(),D(m,1),m.m(a,i)):m&&(G(),P(m,1,1,()=>{m=null}),K()),u[3].type=="modifier"?C?(C.p(u,L),L&1&&D(C,1)):(C=We(u),C.c(),D(C,1),C.m(a,_)):C&&(G(),P(C,1,1,()=>{C=null}),K()),u[3].type=="responsive"?$?($.p(u,L),L&1&&D($,1)):($=qe(u),$.c(),D($,1),$.m(a,null)):$&&(G(),P($,1,1,()=>{$=null}),K()),(!j||L&1)&&V!==(V=u[3].desc+"")&&ue(M,V)},i(u){j||(D(m),D(C),D($),j=!0)},o(u){P(m),P(C),P($),j=!1},d(u){u&&c(e),m&&m.d(),C&&C.d(),$&&$.d()}}}function Gt(r){let e,l,s,t,n,o,a,i,_,p,b,V,M,B,j,m,C,$,u,L;o=new Xt({}),_=new ne({props:{text:"Class name"}}),V=new ne({props:{text:"Type"}});let h=r[1]&&ze(),g=ye(r[0]),k=[];for(let v=0;v<g.length;v+=1)k[v]=Je(Ue(r,g,v));const O=v=>P(k[v],1,1,()=>{k[v]=null});return{c(){e=T("div"),l=T("table"),s=T("thead"),t=T("tr"),n=T("th"),z(o.$$.fragment),a=H(),i=T("span"),z(_.$$.fragment),p=H(),b=T("th"),z(V.$$.fragment),M=H(),B=T("th"),j=H(),m=T("tbody"),h&&h.c(),C=H();for(let v=0;v<k.length;v+=1)k[v].c();$=H(),u=T("div"),this.h()},l(v){e=y(v,"DIV",{class:!0});var S=w(e);l=y(S,"TABLE",{class:!0});var E=w(l);s=y(E,"THEAD",{});var I=w(s);t=y(I,"TR",{class:!0});var N=w(t);n=y(N,"TH",{class:!0});var A=w(n);q(o.$$.fragment,A),a=R(A),i=y(A,"SPAN",{});var Z=w(i);q(_.$$.fragment,Z),Z.forEach(c),A.forEach(c),p=R(N),b=y(N,"TH",{class:!0});var Y=w(b);q(V.$$.fragment,Y),Y.forEach(c),M=R(N),B=y(N,"TH",{class:!0}),w(B).forEach(c),N.forEach(c),I.forEach(c),j=R(E),m=y(E,"TBODY",{});var J=w(m);h&&h.l(J),C=R(J);for(let ae=0;ae<k.length;ae+=1)k[ae].l(J);J.forEach(c),E.forEach(c),$=R(S),u=y(S,"DIV",{class:!0}),w(u).forEach(c),S.forEach(c),this.h()},h(){f(n,"class","bg-base-200 rounded-s-box flex items-center gap-2 lg:py-3"),f(b,"class","bg-base-200 lg:py-3"),f(B,"class","bg-base-200 rounded-e-box lg:py-3"),f(t,"class","border-b-0"),f(l,"class","table-xs md:table-sm table-pin-rows table w-full"),f(u,"class","bg-base-100 pointer-events-none sticky bottom-0 -mt-6 flex h-16 [mask-image:linear-gradient(transparent,#000000)]"),f(e,"class","not-prose relative mb-10 mt-6 max-h-[25rem] overflow-x-auto")},m(v,S){U(v,e,S),d(e,l),d(l,s),d(s,t),d(t,n),F(o,n,null),d(n,a),d(n,i),F(_,i,null),d(t,p),d(t,b),F(V,b,null),d(t,M),d(t,B),d(l,j),d(l,m),h&&h.m(m,null),d(m,C);for(let E=0;E<k.length;E+=1)k[E]&&k[E].m(m,null);d(e,$),d(e,u),L=!0},p(v,[S]){if(v[1]?h?S&2&&D(h,1):(h=ze(),h.c(),D(h,1),h.m(m,C)):h&&(G(),P(h,1,1,()=>{h=null}),K()),S&7){g=ye(v[0]);let E;for(E=0;E<g.length;E+=1){const I=Ue(v,g,E);k[E]?(k[E].p(I,S),D(k[E],1)):(k[E]=Je(I),k[E].c(),D(k[E],1),k[E].m(m,null))}for(G(),E=g.length;E<k.length;E+=1)O(E);K()}},i(v){if(!L){D(o.$$.fragment,v),D(_.$$.fragment,v),D(V.$$.fragment,v),D(h);for(let S=0;S<g.length;S+=1)D(k[S]);L=!0}},o(v){P(o.$$.fragment,v),P(_.$$.fragment,v),P(V.$$.fragment,v),P(h),k=k.filter(Boolean);for(let S=0;S<k.length;S+=1)P(k[S]);L=!1},d(v){v&&c(e),W(o),W(_),W(V),h&&h.d(),Qe(k,v)}}}function Kt(r,e,l){let s,t;fe(r,be,o=>l(1,s=o)),fe(r,Ge,o=>l(2,t=o));let{data:n}=e;return r.$$set=o=>{"data"in o&&l(0,n=o.data)},[n,s,t]}class hl extends he{constructor(e){super(),me(this,e,Kt,Gt,pe,{data:0})}}export{hl as C,ul as M,pl as a,be as p,dl as r};
