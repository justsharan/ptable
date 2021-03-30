var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function c(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t){return null==t?"":t}function i(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let b;function $(t){b=t}function g(){if(!b)throw new Error("Function called outside component initialization");return b}const y=[],k=[],v=[],_=[],x=Promise.resolve();let w=!1;function j(t){v.push(t)}let z=!1;const E=new Set;function C(){if(!z){z=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];$(n),N(n.$$)}for($(null),y.length=0;k.length;)k.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];E.has(n)||(E.add(n),n())}v.length=0}while(y.length);for(;_.length;)_.pop()();w=!1,z=!1,E.clear()}}function N(t){if(null!==t.fragment){t.update(),c(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const A=new Set;let F;function O(){F={r:0,c:[],p:F}}function P(){F.r||c(F.c),F=F.p}function B(t,n){t&&t.i&&(A.delete(t),t.i(n))}function L(t,n,e,o){if(t&&t.o){if(A.has(t))return;A.add(t),F.c.push((()=>{A.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function S(t,n){const e=n.token={};function o(t,o,c,r){if(n.token!==e)return;n.resolved=r;let l=n.ctx;void 0!==c&&(l=l.slice(),l[c]=r);const s=t&&(n.current=t)(l);let i=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(O(),L(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),P())})):n.block.d(1),s.c(),B(s,1),s.m(n.mount(),n.anchor),i=!0),n.block=s,n.blocks&&(n.blocks[o]=s),i&&C()}if((c=t)&&"object"==typeof c&&"function"==typeof c.then){const e=g();if(t.then((t=>{$(e),o(n.then,1,n.value,t),$(null)}),(t=>{if($(e),o(n.catch,2,n.error,t),$(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var c}function T(t,n,o){const{fragment:l,on_mount:s,on_destroy:i,after_update:u}=t.$$;l&&l.m(n,o),j((()=>{const n=s.map(e).filter(r);i?i.push(...n):c(n),t.$$.on_mount=[]})),u.forEach(j)}function q(t,n){const e=t.$$;null!==e.fragment&&(c(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function M(t,n){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,x.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function D(n,e,r,l,s,i,u=[-1]){const f=b;$(n);const d=e.props||{},m=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:u,skip_bound:!1};let h=!1;if(m.ctx=r?r(n,d,((t,e,...o)=>{const c=o.length?o[0]:e;return m.ctx&&s(m.ctx[t],m.ctx[t]=c)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](c),h&&M(n,t)),e})):[],m.update(),h=!0,c(m.before_update),m.fragment=!!l&&l(m.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();e.intro&&B(n.$$.fragment),T(n,e.target,e.anchor),C()}$(f)}class G{$destroy(){q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(n){let e,o,c,r,l,b,$,g,y,k,v,_,x,w,j=Number.parseFloat(n[4]).toPrecision(3)+"";return{c(){e=f("section"),o=f("div"),c=d(n[0]),r=m(),l=f("div"),b=d(n[1]),$=m(),g=f("div"),y=d(n[2]),k=m(),v=f("div"),_=d(j),h(o,"id","atomic"),h(o,"class","svelte-a3bz5b"),h(l,"id","symbol"),h(l,"class","svelte-a3bz5b"),h(g,"id","name"),h(g,"class","svelte-a3bz5b"),h(v,"id","mass"),h(v,"class","svelte-a3bz5b"),h(e,"id",x=n[2].toLowerCase()),h(e,"class",w=s(n[3])+" svelte-a3bz5b")},m(t,n){u(t,e,n),i(e,o),i(o,c),i(e,r),i(e,l),i(l,b),i(e,$),i(e,g),i(g,y),i(e,k),i(e,v),i(v,_)},p(t,[n]){1&n&&p(c,t[0]),2&n&&p(b,t[1]),4&n&&p(y,t[2]),16&n&&j!==(j=Number.parseFloat(t[4]).toPrecision(3)+"")&&p(_,j),4&n&&x!==(x=t[2].toLowerCase())&&h(e,"id",x),8&n&&w!==(w=s(t[3])+" svelte-a3bz5b")&&h(e,"class",w)},i:t,o:t,d(t){t&&a(e)}}}function I(t,n,e){let{atomic:o}=n,{symbol:c}=n,{name:r}=n,{type:l}=n,{atomic_mass:s}=n;return t.$$set=t=>{"atomic"in t&&e(0,o=t.atomic),"symbol"in t&&e(1,c=t.symbol),"name"in t&&e(2,r=t.name),"type"in t&&e(3,l=t.type),"atomic_mass"in t&&e(4,s=t.atomic_mass)},[o,c,r,l,s]}class J extends G{constructor(t){super(),D(this,t,I,H,l,{atomic:0,symbol:1,name:2,type:3,atomic_mass:4})}}function K(t,n,e){const o=t.slice();return o[2]=n[e],o}function Q(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function R(t){let n,e,o=t[1],c=[];for(let n=0;n<o.length;n+=1)c[n]=U(K(t,o,n));const r=t=>L(c[t],1,1,(()=>{c[t]=null}));return{c(){for(let t=0;t<c.length;t+=1)c[t].c();n=d("")},m(t,o){for(let n=0;n<c.length;n+=1)c[n].m(t,o);u(t,n,o),e=!0},p(t,e){if(1&e){let l;for(o=t[1],l=0;l<o.length;l+=1){const r=K(t,o,l);c[l]?(c[l].p(r,e),B(c[l],1)):(c[l]=U(r),c[l].c(),B(c[l],1),c[l].m(n.parentNode,n))}for(O(),l=o.length;l<c.length;l+=1)r(l);P()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)B(c[t]);e=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)L(c[t]);e=!1},d(t){!function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(c,t),t&&a(n)}}}function U(t){let e,o;const c=[t[2]];let r={};for(let t=0;t<c.length;t+=1)r=n(r,c[t]);return e=new J({props:r}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,n){T(e,t,n),o=!0},p(t,n){const o=1&n?function(t,n){const e={},o={},c={$$scope:1};let r=t.length;for(;r--;){const l=t[r],s=n[r];if(s){for(const t in l)t in s||(o[t]=1);for(const t in s)c[t]||(e[t]=s[t],c[t]=1);t[r]=s}else for(const t in l)c[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(c,[(r=t[2],"object"==typeof r&&null!==r?r:{})]):{};var r;e.$set(o)},i(t){o||(B(e.$$.fragment,t),o=!0)},o(t){L(e.$$.fragment,t),o=!1},d(t){q(e,t)}}}function V(n){let e;return{c(){e=f("br")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e)}}}function W(t){let n,e,o={ctx:t,current:null,token:null,hasCatch:!1,pending:V,then:R,catch:Q,value:1,blocks:[,,,]};return S(t[0],o),{c(){n=f("main"),o.block.c(),h(n,"class","svelte-18v8t9k")},m(t,c){u(t,n,c),o.block.m(n,o.anchor=null),o.mount=()=>n,o.anchor=null,e=!0},p(n,[e]){{const c=(t=n).slice();c[1]=o.resolved,o.block.p(c,e)}},i(t){e||(B(o.block),e=!0)},o(t){for(let t=0;t<3;t+=1){L(o.blocks[t])}e=!1},d(t){t&&a(n),o.block.d(),o.token=null,o=null}}}function X(t){return[fetch("assets/data.json").then((t=>t.json()))]}return new class extends G{constructor(t){super(),D(this,t,X,W,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
