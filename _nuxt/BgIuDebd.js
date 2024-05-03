import{_ as D}from"./Dxh9gRZY.js";import{_ as F,r as i,s as _,o as x,v as L,w as N,a as M,x as I,n as b,y as R,z as V,A as X,h as T,j as G,B as q,c as E,q as j,F as B,C as H,b as U}from"./CYOQva3E.js";import{u as J}from"./POxzFXBk.js";const K=["src","width"],Q={__name:"CardMenu",props:["options","data"],setup(e){const t=e;i(null);const a=i(!1),n=_(()=>(window.innerWidth-100-4*50)/5);return(r,c)=>{const u=D;return x(),L(u,{to:t.data.link},{default:N(()=>[M("img",{src:t.data.pic,class:I({fullSize:b(a)}),width:b(n)},null,10,K)]),_:1},8,["to"])}}},Z=F(Q,[["__scopeId","data-v-9b0ed3f1"]]);function ee(e){return R()?(V(e),!0):!1}function $(e){return typeof e=="function"?e():b(e)}const te=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ne=Object.prototype.toString,oe=e=>ne.call(e)==="[object Object]",ae=()=>{};function P(e){var t;const a=$(e);return(t=a==null?void 0:a.$el)!=null?t:a}const O=te?window:void 0;function k(...e){let t,a,n,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,n,r]=e,t=O):[t,a,n,r]=e,!t)return ae;Array.isArray(a)||(a=[a]),Array.isArray(n)||(n=[n]);const c=[],u=()=>{c.forEach(p=>p()),c.length=0},s=(p,d,v,h)=>(p.addEventListener(d,v,h),()=>p.removeEventListener(d,v,h)),f=T(()=>[P(t),$(r)],([p,d])=>{if(u(),!p)return;const v=oe(d)?{...d}:d;c.push(...a.flatMap(h=>n.map(w=>s(p,h,w,v))))},{immediate:!0,flush:"post"}),m=()=>{f(),u()};return ee(m),m}function se(){const e=i(!1),t=G();return t&&q(()=>{e.value=!0},t),e}function z(e){const t=se();return _(()=>(t.value,!!e()))}function re(e={}){const{window:t=O}=e,a=z(()=>t&&"DeviceOrientationEvent"in t),n=i(!1),r=i(null),c=i(null),u=i(null);return t&&a.value&&k(t,"deviceorientation",s=>{n.value=s.absolute,r.value=s.alpha,c.value=s.beta,u.value=s.gamma}),{isSupported:a,isAbsolute:n,alpha:r,beta:c,gamma:u}}const le={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function ce(e={}){const{type:t="page",touch:a=!0,resetOnTouchEnds:n=!1,initialValue:r={x:0,y:0},window:c=O,target:u=c,scroll:s=!0,eventFilter:f}=e;let m=null;const p=i(r.x),d=i(r.y),v=i(null),h=typeof t=="function"?t:le[t],w=l=>{const y=h(l);m=l,y&&([p.value,d.value]=y,v.value="mouse")},g=l=>{if(l.touches.length>0){const y=h(l.touches[0]);y&&([p.value,d.value]=y,v.value="touch")}},o=()=>{if(!m||!c)return;const l=h(m);m instanceof MouseEvent&&l&&(p.value=l[0]+c.scrollX,d.value=l[1]+c.scrollY)},Y=()=>{p.value=r.x,d.value=r.y},W=f?l=>f(()=>w(l),{}):l=>w(l),A=f?l=>f(()=>g(l),{}):l=>g(l),S=f?()=>f(()=>o(),{}):()=>o();if(u){const l={passive:!0};k(u,["mousemove","dragover"],W,l),a&&t!=="movement"&&(k(u,["touchstart","touchmove"],A,l),n&&k(u,"touchend",Y,l)),s&&t==="page"&&k(c,"scroll",S,{passive:!0})}return{x:p,y:d,sourceType:v}}function ue(e,t={}){const{handleOutside:a=!0,window:n=O}=t,r=t.type||"page",{x:c,y:u,sourceType:s}=ce(t),f=i(e??(n==null?void 0:n.document.body)),m=i(0),p=i(0),d=i(0),v=i(0),h=i(0),w=i(0),g=i(!0);let o=()=>{};return n&&(o=T([f,c,u],()=>{const Y=P(f);if(!Y)return;const{left:W,top:A,width:S,height:l}=Y.getBoundingClientRect();d.value=W+(r==="page"?n.pageXOffset:0),v.value=A+(r==="page"?n.pageYOffset:0),h.value=l,w.value=S;const y=c.value-d.value,C=u.value-v.value;g.value=S===0||l===0||y<0||C<0||y>S||C>l,(a||!g.value)&&(m.value=y,p.value=C)},{immediate:!0}),k(document,"mouseleave",()=>{g.value=!0})),{x:c,y:u,sourceType:s,elementX:m,elementY:p,elementPositionX:d,elementPositionY:v,elementHeight:h,elementWidth:w,isOutside:g,stop:o}}function ie(e={}){const{window:t=O}=e,a=z(()=>t&&"screen"in t&&"orientation"in t.screen),n=a.value?t.screen.orientation:{},r=i(n.type),c=i(n.angle||0);return a.value&&k(t,"orientationchange",()=>{r.value=n.type,c.value=n.angle}),{isSupported:a,orientation:r,angle:c,lockOrientation:f=>a.value&&typeof n.lock=="function"?n.lock(f):Promise.reject(new Error("Not supported")),unlockOrientation:()=>{a.value&&typeof n.unlock=="function"&&n.unlock()}}}function de(e,t={}){const{deviceOrientationTiltAdjust:a=o=>o,deviceOrientationRollAdjust:n=o=>o,mouseTiltAdjust:r=o=>o,mouseRollAdjust:c=o=>o,window:u=O}=t,s=X(re({window:u})),f=X(ie({window:u})),{elementX:m,elementY:p,elementWidth:d,elementHeight:v}=ue(e,{handleOutside:!1,window:u}),h=_(()=>s.isSupported&&(s.alpha!=null&&s.alpha!==0||s.gamma!=null&&s.gamma!==0)?"deviceOrientation":"mouse"),w=_(()=>{if(h.value==="deviceOrientation"){let o;switch(f.orientation){case"landscape-primary":o=s.gamma/90;break;case"landscape-secondary":o=-s.gamma/90;break;case"portrait-primary":o=-s.beta/90;break;case"portrait-secondary":o=s.beta/90;break;default:o=-s.beta/90}return n(o)}else{const o=-(p.value-v.value/2)/v.value;return c(o)}}),g=_(()=>{if(h.value==="deviceOrientation"){let o;switch(f.orientation){case"landscape-primary":o=s.beta/90;break;case"landscape-secondary":o=-s.beta/90;break;case"portrait-primary":o=s.gamma/90;break;case"portrait-secondary":o=-s.gamma/90;break;default:o=s.gamma/90}return a(o)}else{const o=(m.value-d.value/2)/d.value;return r(o)}});return{roll:w,tilt:g,source:h}}const pe={class:"testFlexCol"},he={__name:"index",setup(e){const t=J(),a=i(null),n=X(de(a));let r=i(1);const c=function(m){(m.deltaY==-100&&r.value<1.25||m.deltaY==100&&r.value>.75)&&(r.value=r.value-m.deltaY/1e3)},u=_(()=>({transform:`translateX(calc(-50% + ${-n.tilt*100}px)) translateY(calc(-100% + ${n.roll*100}px))`})),s=_(()=>({transform:`translateX(${-n.tilt*200}px) translateY(${n.roll*200}px)`,scale:r.value})),f=_(()=>(window.innerWidth-100-4*50)/5);return(m,p)=>{const d=Z;return x(),E("div",{ref_key:"menu",ref:a,class:"menu",onWheel:c},[M("div",{class:"background",style:j(b(u))},"BEST DESIGN",4),M("div",{class:"testFlex",style:j(b(s))},[(x(!0),E(B,null,H(b(t).getPages,v=>(x(),E("div",pe,[(x(!0),E(B,null,H(v,h=>(x(),E("div",null,[U(d,{data:h,width:b(f)},null,8,["data","width"])]))),256))]))),256))],4)],544)}}};export{he as default};