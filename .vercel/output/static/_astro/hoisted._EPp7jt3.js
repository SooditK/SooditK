var w,P,he,x,pe=-1,E=function(e){addEventListener("pageshow",function(t){t.persisted&&(pe=t.timeStamp,e(t))},!0)},V=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},F=function(){var e=V();return e&&e.activationStart||0},p=function(e,t){var n=V(),r="navigate";return pe>=0?r="back-forward-cache":n&&(document.prerendering||F()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:e,value:t===void 0?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},H=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver(function(o){Promise.resolve().then(function(){t(o.getEntries())})});return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch{}},v=function(e,t,n,r){var o,a;return function(s){t.value>=0&&(s||r)&&((a=t.value-(o||0))||o===void 0)&&(o=t.value,t.delta=a,t.rating=function(c,i){return c>i[1]?"poor":c>i[0]?"needs-improvement":"good"}(t.value,n),e(t))}},X=function(e){requestAnimationFrame(function(){return requestAnimationFrame(function(){return e()})})},Y=function(e){var t=function(n){n.type!=="pagehide"&&document.visibilityState!=="hidden"||e(n)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},W=function(e){var t=!1;return function(n){t||(e(n),t=!0)}},b=-1,z=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},I=function(e){document.visibilityState==="hidden"&&b>-1&&(b=e.type==="visibilitychange"?e.timeStamp:0,Ce())},Q=function(){addEventListener("visibilitychange",I,!0),addEventListener("prerenderingchange",I,!0)},Ce=function(){removeEventListener("visibilitychange",I,!0),removeEventListener("prerenderingchange",I,!0)},j=function(){return b<0&&(b=z(),Q(),E(function(){setTimeout(function(){b=z(),Q()},0)})),{get firstHiddenTime(){return b}}},N=function(e){document.prerendering?addEventListener("prerenderingchange",function(){return e()},!0):e()},ee=[1800,3e3],ve=function(e,t){t=t||{},N(function(){var n,r=j(),o=p("FCP"),a=H("paint",function(s){s.forEach(function(c){c.name==="first-contentful-paint"&&(a.disconnect(),c.startTime<r.firstHiddenTime&&(o.value=Math.max(c.startTime-F(),0),o.entries.push(c),n(!0)))})});a&&(n=v(e,o,ee,t.reportAllChanges),E(function(s){o=p("FCP"),n=v(e,o,ee,t.reportAllChanges),X(function(){o.value=performance.now()-s.timeStamp,n(!0)})}))})},te=[.1,.25],Oe=function(e,t){t=t||{},ve(W(function(){var n,r=p("CLS",0),o=0,a=[],s=function(i){i.forEach(function(u){if(!u.hadRecentInput){var g=a[0],l=a[a.length-1];o&&u.startTime-l.startTime<1e3&&u.startTime-g.startTime<5e3?(o+=u.value,a.push(u)):(o=u.value,a=[u])}}),o>r.value&&(r.value=o,r.entries=a,n())},c=H("layout-shift",s);c&&(n=v(e,r,te,t.reportAllChanges),Y(function(){s(c.takeRecords()),n(!0)}),E(function(){o=0,r=p("CLS",0),n=v(e,r,te,t.reportAllChanges),X(function(){return n()})}),setTimeout(n,0))}))},D={passive:!0,capture:!0},Me=new Date,ne=function(e,t){w||(w=t,P=e,he=new Date,ye(removeEventListener),ge())},ge=function(){if(P>=0&&P<he-Me){var e={entryType:"first-input",name:w.type,target:w.target,cancelable:w.cancelable,startTime:w.timeStamp,processingStart:w.timeStamp+P};x.forEach(function(t){t(e)}),x=[]}},Fe=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;e.type=="pointerdown"?function(n,r){var o=function(){ne(n,r),s()},a=function(){s()},s=function(){removeEventListener("pointerup",o,D),removeEventListener("pointercancel",a,D)};addEventListener("pointerup",o,D),addEventListener("pointercancel",a,D)}(t,e):ne(t,e)}},ye=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,Fe,D)})},re=[100,300],He=function(e,t){t=t||{},N(function(){var n,r=j(),o=p("FID"),a=function(i){i.startTime<r.firstHiddenTime&&(o.value=i.processingStart-i.startTime,o.entries.push(i),n(!0))},s=function(i){i.forEach(a)},c=H("first-input",s);n=v(e,o,re,t.reportAllChanges),c&&Y(W(function(){s(c.takeRecords()),c.disconnect()})),c&&E(function(){var i;o=p("FID"),n=v(e,o,re,t.reportAllChanges),x=[],P=-1,w=null,ye(addEventListener),i=a,x.push(i),ge()})})},oe=[2500,4e3],$={},Ne=function(e,t){t=t||{},N(function(){var n,r=j(),o=p("LCP"),a=function(i){var u=i[i.length-1];u&&u.startTime<r.firstHiddenTime&&(o.value=Math.max(u.startTime-F(),0),o.entries=[u],n())},s=H("largest-contentful-paint",a);if(s){n=v(e,o,oe,t.reportAllChanges);var c=W(function(){$[o.id]||(a(s.takeRecords()),s.disconnect(),$[o.id]=!0,n(!0))});["keydown","click"].forEach(function(i){addEventListener(i,function(){return setTimeout(c,0)},!0)}),Y(c),E(function(i){o=p("LCP"),n=v(e,o,oe,t.reportAllChanges),X(function(){o.value=performance.now()-i.timeStamp,$[o.id]=!0,n(!0)})})}})},ie=[800,1800],_e=function e(t){document.prerendering?N(function(){return e(t)}):document.readyState!=="complete"?addEventListener("load",function(){return e(t)},!0):setTimeout(t,0)},Be=function(e,t){t=t||{};var n=p("TTFB"),r=v(e,n,ie,t.reportAllChanges);_e(function(){var o=V();if(o){var a=o.responseStart;if(a<=0||a>performance.now())return;n.value=Math.max(a-F(),0),n.entries=[o],r(!0),E(function(){n=p("TTFB",0),(r=v(e,n,ie,t.reportAllChanges))(!0)})}})};const ae="https://vitals.vercel-analytics.com/v1/vitals";function Ue(){return"connection"in navigator&&navigator.connection&&"effectiveType"in navigator.connection?navigator.connection.effectiveType:""}function L(e,t){const n=Object.entries(t.params).reduce((a,[s,c])=>a.replace(c,`[${s}]`),t.path),r={dsn:t.analyticsId,id:e.id,page:n,href:location.href,event_name:e.name,value:e.value.toString(),speed:Ue()};t.debug&&console.log("[Analytics]",e.name,JSON.stringify(r,null,2));const o=new Blob([new URLSearchParams(r).toString()],{type:"application/x-www-form-urlencoded"});navigator.sendBeacon?navigator.sendBeacon(ae,o):fetch(ae,{body:o,method:"POST",credentials:"omit",keepalive:!0})}function $e(e){try{He(t=>L(t,e)),Be(t=>L(t,e)),Ne(t=>L(t,e)),Oe(t=>L(t,e)),ve(t=>L(t,e))}catch(t){console.error("[Analytics]",t)}}const se={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"http://localhost:3000",ASSETS_PREFIX:void 0}.PUBLIC_VERCEL_ANALYTICS_ID;se&&$e({path:window.location.pathname,analyticsId:se,debug:!1,params:{}});const qe="astro:before-preparation",Ve="astro:after-preparation",Xe="astro:before-swap",Ye="astro:after-swap",We=e=>document.dispatchEvent(new Event(e));class we extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,n,r,o,a,s,c,i,u){super(t,n),this.from=r,this.to=o,this.direction=a,this.navigationType=s,this.sourceElement=c,this.info=i,this.newDocument=u,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class je extends we{formData;loader;constructor(t,n,r,o,a,s,c,i,u){super(qe,{cancelable:!0},t,n,r,o,a,s,c),this.formData=i,this.loader=u.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class Ke extends we{direction;viewTransition;swap;constructor(t,n,r){super(Xe,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=n,this.swap=r.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function Ge(e,t,n,r,o,a,s,c){const i=new je(e,t,n,r,o,a,window.document,s,c);return document.dispatchEvent(i)&&(await i.loader(),i.defaultPrevented||(We(Ve),i.navigationType!=="traverse"&&K({scrollX,scrollY}))),i}async function Je(e,t,n){const r=new Ke(e,t,n);return document.dispatchEvent(r),r.swap(),r}const Ze=history.pushState.bind(history),C=history.replaceState.bind(history),K=e=>{history.state&&(history.scrollRestoration="manual",C({...history.state,...e},""))},G=!!document.startViewTransition,J=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Te=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let _,T,O=!1,be;const Ee=e=>document.dispatchEvent(new Event(e)),Ae=()=>Ee("astro:page-load"),ze=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},y="data-astro-transition-persist",Se="data-astro-transition",Le="data-astro-transition-fallback";let ce,R=0;history.state?(R=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):J()&&(C({index:R,scrollX,scrollY},""),history.scrollRestoration="manual");const Qe=(e,t)=>{let n=!1,r=!1;return(...o)=>{if(n){r=!0;return}e(...o),n=!0,setTimeout(()=>{r&&(r=!1,e(...o)),n=!1},t)}};async function et(e,t){try{const n=await fetch(e,t),o=(n.headers.get("content-type")??"").split(";",1)[0].trim();return o!=="text/html"&&o!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:o}}catch{return null}}function De(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function tt(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const r=document.createElement("script");r.innerHTML=t.innerHTML;for(const o of t.attributes){if(o.name==="src"){const a=new Promise(s=>{r.onload=r.onerror=s});e=e.then(()=>a)}r.setAttribute(o.name,o.value)}r.dataset.astroExec="",t.replaceWith(r)}return e}const Pe=(e,t,n,r,o)=>{const a=Te(t,e),s=document.title;document.title=r;let c=!1;if(e.href!==location.href&&!o)if(n.history==="replace"){const i=history.state;C({...n.state,index:i.index,scrollX:i.scrollX,scrollY:i.scrollY},"",e.href)}else Ze({...n.state,index:++R,scrollX:0,scrollY:0},"",e.href);if(_=e,a||(scrollTo({left:0,top:0,behavior:"instant"}),c=!0),o)scrollTo(o.scrollX,o.scrollY);else{if(e.hash){history.scrollRestoration="auto";const i=history.state;location.href=e.href,history.state||C(i,"")}else c||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}document.title=s};function nt(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${y}="${n.getAttribute(y)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const r=document.createElement("link");r.setAttribute("rel","preload"),r.setAttribute("as","style"),r.setAttribute("href",n.getAttribute("href")),t.push(new Promise(o=>{["load","error"].forEach(a=>r.addEventListener(a,o)),document.head.append(r)}))}return t}async function le(e,t,n,r){const o=(l,m)=>{const h=l.getAttribute(y),A=h&&m.head.querySelector(`[${y}="${h}"]`);if(A)return A;if(l.matches("link[rel=stylesheet]")){const S=l.getAttribute("href");return m.head.querySelector(`link[rel=stylesheet][href="${S}"]`)}return null},a=()=>{const l=document.activeElement;if(l?.closest(`[${y}]`)){if(l instanceof HTMLInputElement||l instanceof HTMLTextAreaElement){const m=l.selectionStart,h=l.selectionEnd;return{activeElement:l,start:m,end:h}}return{activeElement:l}}else return{activeElement:null}},s=({activeElement:l,start:m,end:h})=>{l&&(l.focus(),(l instanceof HTMLInputElement||l instanceof HTMLTextAreaElement)&&(l.selectionStart=m,l.selectionEnd=h))},c=l=>{const m=document.documentElement,h=[...m.attributes].filter(({name:f})=>(m.removeAttribute(f),f.startsWith("data-astro-")));[...l.newDocument.documentElement.attributes,...h].forEach(({name:f,value:d})=>m.setAttribute(f,d));for(const f of document.scripts)for(const d of l.newDocument.scripts)if(!f.src&&f.textContent===d.textContent||f.src&&f.type===d.type&&f.src===d.src){d.dataset.astroExec="";break}for(const f of Array.from(document.head.children)){const d=o(f,l.newDocument);d?d.remove():f.remove()}document.head.append(...l.newDocument.head.children);const A=document.body,S=a();document.body.replaceWith(l.newDocument.body);for(const f of A.querySelectorAll(`[${y}]`)){const d=f.getAttribute(y),U=document.querySelector(`[${y}="${d}"]`);U&&U.replaceWith(f)}s(S)};async function i(l){function m(f){const d=f.effect;return!d||!(d instanceof KeyframeEffect)||!d.target?!1:window.getComputedStyle(d.target,d.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();document.documentElement.setAttribute(Le,l);const S=document.getAnimations().filter(f=>!h.includes(f)&&!m(f));return Promise.all(S.map(f=>f.finished))}if(!O)document.documentElement.setAttribute(Se,e.direction),r==="animate"&&await i("old");else throw new DOMException("Transition was skipped");const u=document.title,g=await Je(e,T,c);Pe(g.to,g.from,t,u,n),Ee(Ye),r==="animate"&&!O&&i("new").then(()=>be())}async function Re(e,t,n,r,o){if(!J()||location.origin!==n.origin){location.href=n.href;return}const a=o?"traverse":r.history==="replace"?"replace":"push";if(a!=="traverse"&&K({scrollX,scrollY}),Te(t,n)&&n.hash){Pe(n,t,r,document.title,o);return}const s=await Ge(t,n,e,a,r.sourceElement,r.info,r.formData,c);if(s.defaultPrevented){location.href=n.href;return}async function c(i){const u=i.to.href,g={};if(i.formData){g.method="POST";const h=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");g.body=h?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const l=await et(u,g);if(l===null){i.preventDefault();return}if(l.redirected&&(i.to=new URL(l.redirected)),ce??=new DOMParser,i.newDocument=ce.parseFromString(l.html,l.mediaType),i.newDocument.querySelectorAll("noscript").forEach(h=>h.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const m=nt(i.newDocument);m.length&&await Promise.all(m)}if(O=!1,G)T=document.startViewTransition(async()=>await le(s,r,o));else{const i=(async()=>{await new Promise(u=>setTimeout(u)),await le(s,r,o,De())})();T={updateCallbackDone:i,ready:i,finished:new Promise(u=>be=u),skipTransition:()=>{O=!0}}}T.ready.then(async()=>{await tt(),Ae(),ze()}),T.finished.then(()=>{document.documentElement.removeAttribute(Se),document.documentElement.removeAttribute(Le)}),await T.ready}async function ue(e,t){await Re("forward",_,new URL(e,location.href),t??{})}function rt(e){if(!J()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,r=n>R?"forward":"back";R=n,Re(r,_,new URL(location.href),{},t)}const fe=()=>{K({scrollX,scrollY})};{(G||De()!=="none")&&(_=new URL(location.href),addEventListener("popstate",rt),addEventListener("load",Ae),"onscrollend"in window?addEventListener("scrollend",fe):addEventListener("scroll",Qe(fe,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}const ke=new Set,M=new WeakSet;let q,xe,de=!1;function ot(e){de||(de=!0,q??=e?.prefetchAll??!1,xe??=e?.defaultStrategy??"hover",it(),at(),st(),lt())}function it(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{k(t.target,"tap")&&B(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function at(){let e;document.body.addEventListener("focusin",r=>{k(r.target,"hover")&&t(r)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),Z(()=>{for(const r of document.getElementsByTagName("a"))M.has(r)||k(r,"hover")&&(M.add(r),r.addEventListener("mouseenter",t,{passive:!0}),r.addEventListener("mouseleave",n,{passive:!0}))});function t(r){const o=r.target.href;e&&clearTimeout(e),e=setTimeout(()=>{B(o,{with:"fetch"})},80)}function n(){e&&(clearTimeout(e),e=0)}}function st(){let e;Z(()=>{for(const t of document.getElementsByTagName("a"))M.has(t)||k(t,"viewport")&&(M.add(t),e??=ct(),e.observe(t))})}function ct(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const r of t){const o=r.target,a=e.get(o);r.isIntersecting?(a&&clearTimeout(a),e.set(o,setTimeout(()=>{n.unobserve(o),e.delete(o),B(o.href,{with:"link"})},300))):a&&(clearTimeout(a),e.delete(o))}})}function lt(){Z(()=>{for(const e of document.getElementsByTagName("a"))k(e,"load")&&B(e.href,{with:"link"})})}function B(e,t){const n=t?.ignoreSlowConnection??!1;if(!ut(e,n))return;if(ke.add(e),(t?.with??"link")==="link"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e).catch(o=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(o)})}function ut(e,t){if(!navigator.onLine||!t&&Ie())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!ke.has(e)}catch{}return!1}function k(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||q)&&Ie()?!0:n==null&&q||n===""?t===xe:n===t}function Ie(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function Z(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function ft(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function me(e){return e.dataset.astroReload!==void 0}(G||ft()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,r=t instanceof HTMLElement?t.href:t.href.baseVal,o=new URL(r,location.href).origin;me(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||o!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),ue(r,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||me(t))return;const n=t,r=e.submitter,o=new FormData(n,r);let a=r?.getAttribute("formaction")??n.action??location.pathname;const s=r?.getAttribute("formmethod")??n.method;if(s==="dialog"||location.origin!==new URL(a,location.href).origin)return;const c={sourceElement:r??n};if(s==="get"){const i=new URLSearchParams(o),u=new URL(a);u.search=i.toString(),a=u.toString()}else c.formData=o;e.preventDefault(),ue(a,c)}),ot({prefetchAll:!0}));