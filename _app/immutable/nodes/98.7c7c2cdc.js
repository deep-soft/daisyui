import{s as X,f,a as g,l as Z,g as u,h as p,d as s,c as q,m as j,j as l,X as C,i as o,u as z,n as H,v as M}from"../chunks/scheduler.4207298b.js";import{S as k,i as B}from"../chunks/index.04247e75.js";function G(r){let d,i,n,m,_,h,a,I,v,E=r[0].videos.find(r[2]).snippet.title+"",D,V,b,$,c,w,y=r[0].videos.find(r[3]).snippet.description+"",A;return{c(){d=f("div"),i=f("iframe"),h=g(),a=f("div"),I=g(),v=f("h1"),D=Z(E),V=g(),b=f("div"),$=g(),c=f("div"),w=f("p"),A=Z(y),this.h()},l(e){d=u(e,"DIV",{class:!0,style:!0});var t=p(d);i=u(t,"IFRAME",{title:!0,src:!0,frameborder:!0,class:!0});var R=p(i);R.forEach(s),t.forEach(s),h=q(e),a=u(e,"DIV",{class:!0}),p(a).forEach(s),I=q(e),v=u(e,"H1",{class:!0});var F=p(v);D=j(F,E),F.forEach(s),V=q(e),b=u(e,"DIV",{class:!0}),p(b).forEach(s),$=q(e),c=u(e,"DIV",{class:!0});var P=p(c);w=u(P,"P",{class:!0});var S=p(w);A=j(S,y),S.forEach(s),P.forEach(s),this.h()},h(){l(i,"title",n=r[0].videos.find(r[1]).snippet.title),C(i.src,m=`https://www.youtube.com/embed/${r[0].video.id}`)||l(i,"src",m),l(i,"frameborder","0"),i.allowFullscreen=!0,l(i,"class","svelte-19d3ctr"),l(d,"class","embed-container rounded-box svelte-19d3ctr"),l(d,"style",_=`view-transition-name: ${r[0].video.id.replace(/[^a-zA-Z]/g,"")}-img`),l(a,"class","h-10"),l(v,"class","text-3xl font-bold"),l(b,"class","h-10"),l(w,"class","mx-auto max-w-2xl text-sm"),l(c,"class","text-base-content/60 bg-base-200 rounded-box p-6")},m(e,t){o(e,d,t),z(d,i),o(e,h,t),o(e,a,t),o(e,I,t),o(e,v,t),z(v,D),o(e,V,t),o(e,b,t),o(e,$,t),o(e,c,t),z(c,w),z(w,A)},p(e,[t]){t&1&&n!==(n=e[0].videos.find(e[1]).snippet.title)&&l(i,"title",n),t&1&&!C(i.src,m=`https://www.youtube.com/embed/${e[0].video.id}`)&&l(i,"src",m),t&1&&_!==(_=`view-transition-name: ${e[0].video.id.replace(/[^a-zA-Z]/g,"")}-img`)&&l(d,"style",_),t&1&&E!==(E=e[0].videos.find(e[2]).snippet.title+"")&&H(D,E),t&1&&y!==(y=e[0].videos.find(e[3]).snippet.description+"")&&H(A,y)},i:M,o:M,d(e){e&&(s(d),s(h),s(a),s(I),s(v),s(V),s(b),s($),s(c))}}}function J(r,d,i){let{data:n}=d;const m=a=>a.id==n.video.id,_=a=>a.id==n.video.id,h=a=>a.id==n.video.id;return r.$$set=a=>{"data"in a&&i(0,n=a.data)},[n,m,_,h]}class N extends k{constructor(d){super(),B(this,d,J,G,X,{data:0})}}export{N as component};
