const w="modulepreload",v=function(u){return"/"+u},h={},p=function(l,c,d){let f=Promise.resolve();if(c&&c.length>0){const a=document.getElementsByTagName("link");f=Promise.all(c.map(n=>{if(n=v(n),n in h)return;h[n]=!0;const t=n.endsWith(".css"),e=t?'[rel="stylesheet"]':"";if(!!d)for(let i=a.length-1;i>=0;i--){const s=a[i];if(s.href===n&&(!t||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${e}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":w,t||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),t)return new Promise((i,s)=>{o.addEventListener("load",i),o.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${n}`)))})}))}return f.then(()=>l()).catch(a=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a})};setTimeout(async()=>{const u={player:"light",loop:!0,autoplay:"visible",visibleThreshold:0},l=[...document.querySelectorAll("[data-lottie]")].map(t=>{try{return[t,{...u,...JSON.parse(t.getAttribute("data-lottie-data")||"")}]}catch{console.warn("Cannot parse lottie animation data",t)}}).filter(t=>!!t);if(l.length===0)return;const c=l.some(([,t])=>t.player==="full"),d=await p(c?()=>import("./lottie.929YJHsK.js").then(t=>t.l):()=>import("./lottie_light.abT3iUE9.js").then(t=>t.l),__vite__mapDeps([2,1])).then(t=>t.default).catch(t=>{console.warn("Cannot load lottie-web script",t)});if(!d)return;const f=new Map((await Promise.all([...new Set(l.map(([t,e])=>e.src))].map(async t=>{const e=await fetch(t).catch(()=>{});if(!e||e.status>=400){console.warn("Cannot load animation(%s)",t);return}const r=await e.json().catch(()=>{});if(!r){console.warn("Cannot load animation(%s)",t);return}return[t,r]}))).filter(t=>!!t)),a=l.map(([t,e])=>{const r=e.id||`A${Math.random().toFixed(6).substring(2)}`,o=f.get(e.src);let i;if(o){const{loop:s,autoplay:m}=e;i=d.loadAnimation({container:t,loop:s,autoplay:m==="visible"?!1:m,animationData:o,rendererSettings:{viewBoxOnly:!0}})}return Object.freeze({id:r,config:e,container:t,isLoaded:!!i,player:i})}),n=a.filter(t=>t.isLoaded&&t.config.autoplay==="visible");if(n.length>0){const t=n.reduce((r,o)=>Math.max(0,Math.min(o.config.visibleThreshold||0,r)),1),e=new IntersectionObserver(r=>{r.forEach(o=>{const i=a.find(s=>s.container===o.target);i&&i.isLoaded&&(o.isIntersecting&&o.intersectionRatio>=t?i.player.play():i.player.pause())})},{threshold:t});n.forEach(r=>{e.observe(r.container)})}window.lottie=d,window.astroLottie={getAllAnimations(){return a.slice()},getAnimation(t){if(typeof t=="string")return a.find(e=>e.id===t);if(typeof t=="object"){if("container"in t)return a.find(e=>e.container===t.container);if("elementId"in t)return a.find(e=>e.container.id===t.elementId)}throw new Error("Invalid LottieAnimation source: "+t)}},document.dispatchEvent(new CustomEvent("astro-lottie-loaded",{detail:window.astroLottie}))},0);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/lottie.929YJHsK.js","_astro/_commonjsHelpers.5-cIlDoe.js","_astro/lottie_light.abT3iUE9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}