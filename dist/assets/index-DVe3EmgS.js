const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ArtistDetailView-Bi0ofN-g.js","assets/ArtistDetailView-Cw0GINF_.css","assets/PlaceDetailView-DFP0d1sL.js","assets/PlaceDetailView-CxYEO0XT.css","assets/EventDetailView-DSw5VcV7.js","assets/EventDetailView-BDZC6Fg2.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Jc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},As=[],gn=()=>{},Ry=()=>!1,Oa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Yc=t=>t.startsWith("onUpdate:"),rt=Object.assign,Xc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sy=Object.prototype.hasOwnProperty,ke=(t,e)=>Sy.call(t,e),ce=Array.isArray,Ts=t=>Va(t)==="[object Map]",Kp=t=>Va(t)==="[object Set]",pe=t=>typeof t=="function",qe=t=>typeof t=="string",qn=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",Fp=t=>(Le(t)||pe(t))&&pe(t.then)&&pe(t.catch),Up=Object.prototype.toString,Va=t=>Up.call(t),Py=t=>Va(t).slice(8,-1),Bp=t=>Va(t)==="[object Object]",Zc=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_i=Jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ky=/-(\w)/g,zt=Na(t=>t.replace(ky,(e,n)=>n?n.toUpperCase():"")),Dy=/\B([A-Z])/g,Xr=Na(t=>t.replace(Dy,"-$1").toLowerCase()),Ma=Na(t=>t.charAt(0).toUpperCase()+t.slice(1)),Uo=Na(t=>t?`on${Ma(t)}`:""),ur=(t,e)=>!Object.is(t,e),Bo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$p=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ic=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Oy=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let rd;const xa=()=>rd||(rd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xi(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?xy(r):Xi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||Le(t))return t}const Vy=/;(?![^(]*\))/g,Ny=/:([^]+)/,My=/\/\*[^]*?\*\//g;function xy(t){const e={};return t.replace(My,"").split(Vy).forEach(n=>{if(n){const r=n.split(Ny);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Gt(t){let e="";if(qe(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Gt(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ly="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ky=Jc(Ly);function jp(t){return!!t||t===""}const Hp=t=>!!(t&&t.__v_isRef===!0),it=t=>qe(t)?t:t==null?"":ce(t)||Le(t)&&(t.toString===Up||!pe(t.toString))?Hp(t)?it(t.value):JSON.stringify(t,qp,2):String(t),qp=(t,e)=>Hp(e)?qp(t,e.value):Ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Pl(r,i)+" =>"]=s,n),{})}:Kp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pl(n))}:qn(e)?Pl(e):Le(e)&&!ce(e)&&!Bp(e)?String(e):e,Pl=(t,e="")=>{var n;return qn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class Wp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function zp(t){return new Wp(t)}function eu(){return Ct}function Gp(t,e=!1){Ct&&Ct.cleanups.push(t)}let Me;const kl=new WeakSet;class Qp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,kl.has(this)&&(kl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sd(this),Xp(this);const e=Me,n=nn;Me=this,nn=!0;try{return this.fn()}finally{Zp(this),Me=e,nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ru(e);this.deps=this.depsTail=void 0,sd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?kl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oc(this)&&this.run()}get dirty(){return oc(this)}}let Jp=0,vi,yi;function Yp(t,e=!1){if(t.flags|=8,e){t.next=yi,yi=t;return}t.next=vi,vi=t}function tu(){Jp++}function nu(){if(--Jp>0)return;if(yi){let e=yi;for(yi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vi;){let e=vi;for(vi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Xp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ru(r),Fy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function oc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(eg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function eg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Di))return;t.globalVersion=Di;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!oc(t)){t.flags&=-3;return}const n=Me,r=nn;Me=t,nn=!0;try{Xp(t);const s=t.fn(t._value);(e.version===0||ur(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,nn=r,Zp(t),t.flags&=-3}}function ru(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ru(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Fy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nn=!0;const tg=[];function Ir(){tg.push(nn),nn=!1}function wr(){const t=tg.pop();nn=t===void 0?!0:t}function sd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Di=0;class Uy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class su{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Me||!nn||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new Uy(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,ng(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Di++,this.notify(e)}notify(e){tu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{nu()}}}function ng(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ng(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ra=new WeakMap,Kr=Symbol(""),ac=Symbol(""),Oi=Symbol("");function yt(t,e,n){if(nn&&Me){let r=ra.get(t);r||ra.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new su),s.map=r,s.key=n),s.track()}}function Pn(t,e,n,r,s,i){const o=ra.get(t);if(!o){Di++;return}const l=c=>{c&&c.trigger()};if(tu(),e==="clear")o.forEach(l);else{const c=ce(t),u=c&&Zc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===Oi||!qn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Oi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Kr)),Ts(t)&&l(o.get(ac)));break;case"delete":c||(l(o.get(Kr)),Ts(t)&&l(o.get(ac)));break;case"set":Ts(t)&&l(o.get(Kr));break}}nu()}function By(t,e){const n=ra.get(t);return n&&n.get(e)}function cs(t){const e=we(t);return e===t?e:(yt(e,"iterate",Oi),qt(t)?e:e.map(Et))}function La(t){return yt(t=we(t),"iterate",Oi),t}const $y={__proto__:null,[Symbol.iterator](){return Dl(this,Symbol.iterator,Et)},concat(...t){return cs(this).concat(...t.map(e=>ce(e)?cs(e):e))},entries(){return Dl(this,"entries",t=>(t[1]=Et(t[1]),t))},every(t,e){return Cn(this,"every",t,e,void 0,arguments)},filter(t,e){return Cn(this,"filter",t,e,n=>n.map(Et),arguments)},find(t,e){return Cn(this,"find",t,e,Et,arguments)},findIndex(t,e){return Cn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Cn(this,"findLast",t,e,Et,arguments)},findLastIndex(t,e){return Cn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Cn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ol(this,"includes",t)},indexOf(...t){return Ol(this,"indexOf",t)},join(t){return cs(this).join(t)},lastIndexOf(...t){return Ol(this,"lastIndexOf",t)},map(t,e){return Cn(this,"map",t,e,void 0,arguments)},pop(){return li(this,"pop")},push(...t){return li(this,"push",t)},reduce(t,...e){return id(this,"reduce",t,e)},reduceRight(t,...e){return id(this,"reduceRight",t,e)},shift(){return li(this,"shift")},some(t,e){return Cn(this,"some",t,e,void 0,arguments)},splice(...t){return li(this,"splice",t)},toReversed(){return cs(this).toReversed()},toSorted(t){return cs(this).toSorted(t)},toSpliced(...t){return cs(this).toSpliced(...t)},unshift(...t){return li(this,"unshift",t)},values(){return Dl(this,"values",Et)}};function Dl(t,e,n){const r=La(t),s=r[e]();return r!==t&&!qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const jy=Array.prototype;function Cn(t,e,n,r,s,i){const o=La(t),l=o!==t&&!qt(t),c=o[e];if(c!==jy[e]){const p=c.apply(t,i);return l?Et(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,Et(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function id(t,e,n,r){const s=La(t);let i=n;return s!==t&&(qt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Et(l),c,t)}),s[e](i,...r)}function Ol(t,e,n){const r=we(t);yt(r,"iterate",Oi);const s=r[e](...n);return(s===-1||s===!1)&&au(n[0])?(n[0]=we(n[0]),r[e](...n)):s}function li(t,e,n=[]){Ir(),tu();const r=we(t)[e].apply(t,n);return nu(),wr(),r}const Hy=Jc("__proto__,__v_isRef,__isVue"),rg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qn));function qy(t){qn(t)||(t=String(t));const e=we(this);return yt(e,"has",t),e.hasOwnProperty(t)}class sg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?tE:lg:i?ag:og).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let c;if(o&&(c=$y[n]))return c;if(n==="hasOwnProperty")return qy}const l=Reflect.get(e,n,Ge(e)?e:r);return(qn(n)?rg.has(n):Hy(n))||(s||yt(e,"get",n),i)?l:Ge(l)?o&&Zc(n)?l:l.value:Le(l)?s?ug(l):Zi(l):l}}class ig extends sg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=jr(i);if(!qt(r)&&!jr(r)&&(i=we(i),r=we(r)),!ce(e)&&Ge(i)&&!Ge(r))return c?!1:(i.value=r,!0)}const o=ce(e)&&Zc(n)?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,r,Ge(e)?e:s);return e===we(s)&&(o?ur(r,i)&&Pn(e,"set",n,r):Pn(e,"add",n,r)),l}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Pn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!qn(n)||!rg.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",ce(e)?"length":Kr),Reflect.ownKeys(e)}}class Wy extends sg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zy=new ig,Gy=new Wy,Qy=new ig(!0);const lc=t=>t,ko=t=>Reflect.getPrototypeOf(t);function Jy(t,e,n){return function(...r){const s=this.__v_raw,i=we(s),o=Ts(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?lc:e?cc:Et;return!e&&yt(i,"iterate",c?ac:Kr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Do(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Yy(t,e){const n={get(s){const i=this.__v_raw,o=we(i),l=we(s);t||(ur(s,l)&&yt(o,"get",s),yt(o,"get",l));const{has:c}=ko(o),u=e?lc:t?cc:Et;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&yt(we(s),"iterate",Kr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=we(i),l=we(s);return t||(ur(s,l)&&yt(o,"has",s),yt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=we(l),u=e?lc:t?cc:Et;return!t&&yt(c,"iterate",Kr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return rt(n,t?{add:Do("add"),set:Do("set"),delete:Do("delete"),clear:Do("clear")}:{add(s){!e&&!qt(s)&&!jr(s)&&(s=we(s));const i=we(this);return ko(i).has.call(i,s)||(i.add(s),Pn(i,"add",s,s)),this},set(s,i){!e&&!qt(i)&&!jr(i)&&(i=we(i));const o=we(this),{has:l,get:c}=ko(o);let u=l.call(o,s);u||(s=we(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?ur(i,d)&&Pn(o,"set",s,i):Pn(o,"add",s,i),this},delete(s){const i=we(this),{has:o,get:l}=ko(i);let c=o.call(i,s);c||(s=we(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Pn(i,"delete",s,void 0),u},clear(){const s=we(this),i=s.size!==0,o=s.clear();return i&&Pn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Jy(s,t,e)}),n}function iu(t,e){const n=Yy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const Xy={get:iu(!1,!1)},Zy={get:iu(!1,!0)},eE={get:iu(!0,!1)};const og=new WeakMap,ag=new WeakMap,lg=new WeakMap,tE=new WeakMap;function nE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rE(t){return t.__v_skip||!Object.isExtensible(t)?0:nE(Py(t))}function Zi(t){return jr(t)?t:ou(t,!1,zy,Xy,og)}function cg(t){return ou(t,!1,Qy,Zy,ag)}function ug(t){return ou(t,!0,Gy,eE,lg)}function ou(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=rE(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function hr(t){return jr(t)?hr(t.__v_raw):!!(t&&t.__v_isReactive)}function jr(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function au(t){return t?!!t.__v_raw:!1}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function lu(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&$p(t,"__v_skip",!0),t}const Et=t=>Le(t)?Zi(t):t,cc=t=>Le(t)?ug(t):t;function Ge(t){return t?t.__v_isRef===!0:!1}function Tt(t){return hg(t,!1)}function Fr(t){return hg(t,!0)}function hg(t,e){return Ge(t)?t:new sE(t,e)}class sE{constructor(e,n){this.dep=new su,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:we(e),this._value=n?e:Et(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qt(e)||jr(e);e=r?e:we(e),ur(e,n)&&(this._rawValue=e,this._value=r?e:Et(e),this.dep.trigger())}}function rn(t){return Ge(t)?t.value:t}function Is(t){return pe(t)?t():rn(t)}const iE={get:(t,e,n)=>e==="__v_raw"?t:rn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ge(s)&&!Ge(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dg(t){return hr(t)?t:new Proxy(t,iE)}function oE(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=lE(t,n);return e}class aE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return By(we(this._object),this._key)}}function lE(t,e,n){const r=t[e];return Ge(r)?r:new aE(t,e,n)}class cE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new su(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Di-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Yp(this,!0),!0}get value(){const e=this.dep.track();return eg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function uE(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new cE(r,s,n)}const Oo={},sa=new WeakMap;let Nr;function hE(t,e=!1,n=Nr){if(n){let r=sa.get(n);r||sa.set(n,r=[]),r.push(t)}}function dE(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=$=>s?$:qt($)||s===!1||s===0?kn($,1):kn($);let d,p,g,y,P=!1,O=!1;if(Ge(t)?(p=()=>t.value,P=qt(t)):hr(t)?(p=()=>u(t),P=!0):ce(t)?(O=!0,P=t.some($=>hr($)||qt($)),p=()=>t.map($=>{if(Ge($))return $.value;if(hr($))return u($);if(pe($))return c?c($,2):$()})):pe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Ir();try{g()}finally{wr()}}const $=Nr;Nr=d;try{return c?c(t,3,[y]):t(y)}finally{Nr=$}}:p=gn,e&&s){const $=p,Z=s===!0?1/0:s;p=()=>kn($(),Z)}const k=eu(),F=()=>{d.stop(),k&&k.active&&Xc(k.effects,d)};if(i&&e){const $=e;e=(...Z)=>{$(...Z),F()}}let U=O?new Array(t.length).fill(Oo):Oo;const B=$=>{if(!(!(d.flags&1)||!d.dirty&&!$))if(e){const Z=d.run();if(s||P||(O?Z.some((ae,b)=>ur(ae,U[b])):ur(Z,U))){g&&g();const ae=Nr;Nr=d;try{const b=[Z,U===Oo?void 0:O&&U[0]===Oo?[]:U,y];c?c(e,3,b):e(...b),U=Z}finally{Nr=ae}}}else d.run()};return l&&l(B),d=new Qp(p),d.scheduler=o?()=>o(B,!1):B,y=$=>hE($,!1,d),g=d.onStop=()=>{const $=sa.get(d);if($){if(c)c($,4);else for(const Z of $)Z();sa.delete(d)}},e?r?B(!0):U=d.run():o?o(B.bind(null,!0),!0):d.run(),F.pause=d.pause.bind(d),F.resume=d.resume.bind(d),F.stop=F,F}function kn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ge(t))kn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if(Kp(t)||Ts(t))t.forEach(r=>{kn(r,e,n)});else if(Bp(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function eo(t,e,n,r){try{return r?t(...r):t()}catch(s){Ka(s,e,n)}}function sn(t,e,n,r){if(pe(t)){const s=eo(t,e,n,r);return s&&Fp(s)&&s.catch(i=>{Ka(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(sn(t[i],e,n,r));return s}}function Ka(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Ir(),eo(i,null,10,[t,c,u]),wr();return}}fE(t,n,s,r,o)}function fE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let dn=-1;const ws=[];let sr=null,ds=0;const fg=Promise.resolve();let ia=null;function to(t){const e=ia||fg;return t?e.then(this?t.bind(this):t):e}function pE(t){let e=dn+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=Vi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function cu(t){if(!(t.flags&1)){const e=Vi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=Vi(n)?Rt.push(t):Rt.splice(pE(e),0,t),t.flags|=1,pg()}}function pg(){ia||(ia=fg.then(mg))}function gE(t){ce(t)?ws.push(...t):sr&&t.id===-1?sr.splice(ds+1,0,t):t.flags&1||(ws.push(t),t.flags|=1),pg()}function od(t,e,n=dn+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function gg(t){if(ws.length){const e=[...new Set(ws)].sort((n,r)=>Vi(n)-Vi(r));if(ws.length=0,sr){sr.push(...e);return}for(sr=e,ds=0;ds<sr.length;ds++){const n=sr[ds];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}sr=null,ds=0}}const Vi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function mg(t){try{for(dn=0;dn<Rt.length;dn++){const e=Rt[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),eo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<Rt.length;dn++){const e=Rt[dn];e&&(e.flags&=-2)}dn=-1,Rt.length=0,gg(),ia=null,(Rt.length||ws.length)&&mg()}}let et=null,_g=null;function oa(t){const e=et;return et=t,_g=t&&t.type.__scopeId||null,e}function Je(t,e=et,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&md(-1);const i=oa(e);let o;try{o=t(...s)}finally{oa(i),r._d&&md(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Hr(t,e){if(et===null)return t;const n=qa(et),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ne]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Ir(),sn(c,n,8,[t.el,l,t,e]),wr())}}const mE=Symbol("_vte"),_E=t=>t.__isTeleport,us=Symbol("_leaveCb"),Vo=Symbol("_enterCb");function vE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bs(()=>{t.isMounted=!0}),Ig(()=>{t.isUnmounting=!0}),t}const Bt=[Function,Array],yE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt};function EE(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function uc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:y,onAfterLeave:P,onLeaveCancelled:O,onBeforeAppear:k,onAppear:F,onAfterAppear:U,onAppearCancelled:B}=e,$=String(t.key),Z=EE(n,t),ae=(_,I)=>{_&&sn(_,r,9,I)},b=(_,I)=>{const C=I[1];ae(_,I),ce(_)?_.every(w=>w.length<=1)&&C():_.length<=1&&C()},v={mode:o,persisted:l,beforeEnter(_){let I=c;if(!n.isMounted)if(i)I=k||c;else return;_[us]&&_[us](!0);const C=Z[$];C&&fs(t,C)&&C.el[us]&&C.el[us](),ae(I,[_])},enter(_){let I=u,C=d,w=p;if(!n.isMounted)if(i)I=F||u,C=U||d,w=B||p;else return;let E=!1;const Se=_[Vo]=We=>{E||(E=!0,We?ae(w,[_]):ae(C,[_]),v.delayedLeave&&v.delayedLeave(),_[Vo]=void 0)};I?b(I,[_,Se]):Se()},leave(_,I){const C=String(t.key);if(_[Vo]&&_[Vo](!0),n.isUnmounting)return I();ae(g,[_]);let w=!1;const E=_[us]=Se=>{w||(w=!0,I(),Se?ae(O,[_]):ae(P,[_]),_[us]=void 0,Z[C]===t&&delete Z[C])};Z[C]=t,y?b(y,[_,E]):E()},clone(_){return uc(_,e,n,r)}};return v}function Ni(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ni(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ke?(o.patchFlag&128&&s++,r=r.concat(vg(o.children,e,l))):(e||o.type!==Fn)&&r.push(l!=null?qr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Xe(t,e){return pe(t)?rt({name:t.name},e,{setup:t}):t}function yg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function aa(t,e,n,r,s=!1){if(ce(t)){t.forEach((P,O)=>aa(P,e&&(ce(e)?e[O]:e),n,r,s));return}if(bs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&aa(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?qa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Ne?l.refs={}:l.refs,p=l.setupState,g=we(p),y=p===Ne?()=>!1:P=>ke(g,P);if(u!=null&&u!==c&&(qe(u)?(d[u]=null,y(u)&&(p[u]=null)):Ge(u)&&(u.value=null)),pe(c))eo(c,l,12,[o,d]);else{const P=qe(c),O=Ge(c);if(P||O){const k=()=>{if(t.f){const F=P?y(c)?p[c]:d[c]:c.value;s?ce(F)&&Xc(F,i):ce(F)?F.includes(i)||F.push(i):P?(d[c]=[i],y(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else P?(d[c]=o,y(c)&&(p[c]=o)):O&&(c.value=o,t.k&&(d[t.k]=o))};o?(k.id=-1,Vt(k,n)):k()}}}xa().requestIdleCallback;xa().cancelIdleCallback;const bs=t=>!!t.type.__asyncLoader,Eg=t=>t.type.__isKeepAlive;function AE(t,e){Ag(t,"a",e)}function TE(t,e){Ag(t,"da",e)}function Ag(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Fa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Eg(s.parent.vnode)&&IE(r,e,n,s),s=s.parent}}function IE(t,e,n,r){const s=Fa(e,t,r,!0);uu(()=>{Xc(r[e],s)},n)}function Fa(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ir();const l=no(n),c=sn(e,n,t,o);return l(),wr(),c});return r?s.unshift(i):s.push(i),i}}const Wn=t=>(e,n=ot)=>{(!Li||t==="sp")&&Fa(t,(...r)=>e(...r),n)},wE=Wn("bm"),Bs=Wn("m"),bE=Wn("bu"),Tg=Wn("u"),Ig=Wn("bum"),uu=Wn("um"),CE=Wn("sp"),RE=Wn("rtg"),SE=Wn("rtc");function PE(t,e=ot){Fa("ec",t,e)}const wg="components";function mn(t,e){return Cg(wg,t,!0,e)||t}const bg=Symbol.for("v-ndc");function hu(t){return qe(t)?Cg(wg,t,!1)||t:t||bg}function Cg(t,e,n=!0,r=!1){const s=et||ot;if(s){const i=s.type;{const l=_A(i,!1);if(l&&(l===e||l===zt(e)||l===Ma(zt(e))))return i}const o=ad(s[t]||i[t],e)||ad(s.appContext[t],e);return!o&&r?i:o}}function ad(t,e){return t&&(t[e]||t[zt(e)]||t[Ma(zt(e))])}function Vn(t,e,n,r){let s;const i=n,o=ce(t);if(o||qe(t)){const l=o&&hr(t);let c=!1;l&&(c=!qt(t),t=La(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?Et(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function kE(t,e,n={},r,s){if(et.ce||et.parent&&bs(et.parent)&&et.parent.ce)return le(),kt(Ke,null,[be("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),le();const o=i&&Rg(i(n)),l=n.key||o&&o.key,c=kt(Ke,{key:(l&&!qn(l)?l:`_${e}`)+""},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Rg(t){return t.some(e=>xi(e)?!(e.type===Fn||e.type===Ke&&!Rg(e.children)):!0)?t:null}function DE(t,e){const n={};for(const r in t)n[Uo(r)]=t[r];return n}const hc=t=>t?zg(t)?qa(t):hc(t.parent):null,Ei=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hc(t.parent),$root:t=>hc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Pg(t),$forceUpdate:t=>t.f||(t.f=()=>{cu(t.update)}),$nextTick:t=>t.n||(t.n=to.bind(t.proxy)),$watch:t=>ZE.bind(t)}),Vl=(t,e)=>t!==Ne&&!t.__isScriptSetup&&ke(t,e),OE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Vl(r,e))return o[e]=1,r[e];if(s!==Ne&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Ne&&ke(n,e))return o[e]=4,n[e];dc&&(o[e]=0)}}const d=Ei[e];let p,g;if(d)return e==="$attrs"&&yt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&ke(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,ke(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Vl(s,e)?(s[e]=n,!0):r!==Ne&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ne&&ke(t,o)||Vl(e,o)||(l=i[0])&&ke(l,o)||ke(r,o)||ke(Ei,o)||ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ld(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dc=!0;function VE(t){const e=Pg(t),n=t.proxy,r=t.ctx;dc=!1,e.beforeCreate&&cd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:y,updated:P,activated:O,deactivated:k,beforeDestroy:F,beforeUnmount:U,destroyed:B,unmounted:$,render:Z,renderTracked:ae,renderTriggered:b,errorCaptured:v,serverPrefetch:_,expose:I,inheritAttrs:C,components:w,directives:E,filters:Se}=e;if(u&&NE(u,r,null),o)for(const he in o){const ve=o[he];pe(ve)&&(r[he]=ve.bind(n))}if(s){const he=s.call(n,n);Le(he)&&(t.data=Zi(he))}if(dc=!0,i)for(const he in i){const ve=i[he],Dt=pe(ve)?ve.bind(n,n):pe(ve.get)?ve.get.bind(n,n):gn,Jt=!pe(ve)&&pe(ve.set)?ve.set.bind(n):gn,Kt=Ye({get:Dt,set:Jt});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:Fe=>Kt.value=Fe})}if(l)for(const he in l)Sg(l[he],r,n,he);if(c){const he=pe(c)?c.call(n):c;Reflect.ownKeys(he).forEach(ve=>{$o(ve,he[ve])})}d&&cd(d,t,"c");function Oe(he,ve){ce(ve)?ve.forEach(Dt=>he(Dt.bind(n))):ve&&he(ve.bind(n))}if(Oe(wE,p),Oe(Bs,g),Oe(bE,y),Oe(Tg,P),Oe(AE,O),Oe(TE,k),Oe(PE,v),Oe(SE,ae),Oe(RE,b),Oe(Ig,U),Oe(uu,$),Oe(CE,_),ce(I))if(I.length){const he=t.exposed||(t.exposed={});I.forEach(ve=>{Object.defineProperty(he,ve,{get:()=>n[ve],set:Dt=>n[ve]=Dt})})}else t.exposed||(t.exposed={});Z&&t.render===gn&&(t.render=Z),C!=null&&(t.inheritAttrs=C),w&&(t.components=w),E&&(t.directives=E),_&&yg(t)}function NE(t,e,n=gn){ce(t)&&(t=fc(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=Lt(s.from||r,s.default,!0):i=Lt(s.from||r):i=Lt(s),Ge(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function cd(t,e,n){sn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sg(t,e,n,r){let s=r.includes(".")?$g(n,r):()=>n[r];if(qe(t)){const i=e[t];pe(i)&&Br(s,i)}else if(pe(t))Br(s,t.bind(n));else if(Le(t))if(ce(t))t.forEach(i=>Sg(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Br(s,i,t)}}function Pg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>la(c,u,o,!0)),la(c,e,o)),Le(e)&&i.set(e,c),c}function la(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&la(t,i,n,!0),s&&s.forEach(o=>la(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=ME[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const ME={data:ud,props:hd,emits:hd,methods:hi,computed:hi,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:hi,directives:hi,watch:LE,provide:ud,inject:xE};function ud(t,e){return e?t?function(){return rt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function xE(t,e){return hi(fc(t),fc(e))}function fc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function hi(t,e){return t?rt(Object.create(null),t,e):e}function hd(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:rt(Object.create(null),ld(t),ld(e??{})):e}function LE(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function kg(){return{app:null,config:{isNativeTag:Ry,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let KE=0;function FE(t,e){return function(r,s=null){pe(r)||(r=rt({},r)),s!=null&&!Le(s)&&(s=null);const i=kg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:KE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yA,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&pe(d.install)?(o.add(d),d.install(u,...p)):pe(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!c){const y=u._ceVNode||be(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(y,d,g),c=!0,u._container=d,d.__vue_app__=u,qa(y.component)}},onUnmount(d){l.push(d)},unmount(){c&&(sn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Ur;Ur=u;try{return d()}finally{Ur=p}}};return u}}let Ur=null;function $o(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function Lt(t,e,n=!1){const r=ot||et;if(r||Ur){const s=Ur?Ur._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function du(){return!!(ot||et||Ur)}const Dg={},Og=()=>Object.create(Dg),Vg=t=>Object.getPrototypeOf(t)===Dg;function UE(t,e,n,r=!1){const s={},i=Og();t.propsDefaults=Object.create(null),Ng(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:cg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function BE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=we(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(Ua(t.emitsOptions,g))continue;const y=e[g];if(c)if(ke(i,g))y!==i[g]&&(i[g]=y,u=!0);else{const P=zt(g);s[P]=pc(c,l,P,y,t,!1)}else y!==i[g]&&(i[g]=y,u=!0)}}}else{Ng(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!ke(e,p)&&((d=Xr(p))===p||!ke(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=pc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&Pn(t.attrs,"set","")}function Ng(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(_i(c))continue;const u=e[c];let d;s&&ke(s,d=zt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Ua(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=we(n),u=l||Ne;for(let d=0;d<i.length;d++){const p=i[d];n[p]=pc(s,c,p,u[p],t,!ke(u,p))}}return o}function pc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=ke(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=no(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Xr(n))&&(r=!0))}return r}const $E=new WeakMap;function Mg(t,e,n=!1){const r=n?$E:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const d=p=>{c=!0;const[g,y]=Mg(p,e,!0);rt(o,g),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Le(t)&&r.set(t,As),As;if(ce(i))for(let d=0;d<i.length;d++){const p=zt(i[d]);dd(p)&&(o[p]=Ne)}else if(i)for(const d in i){const p=zt(d);if(dd(p)){const g=i[d],y=o[p]=ce(g)||pe(g)?{type:g}:rt({},g),P=y.type;let O=!1,k=!0;if(ce(P))for(let F=0;F<P.length;++F){const U=P[F],B=pe(U)&&U.name;if(B==="Boolean"){O=!0;break}else B==="String"&&(k=!1)}else O=pe(P)&&P.name==="Boolean";y[0]=O,y[1]=k,(O||ke(y,"default"))&&l.push(p)}}const u=[o,l];return Le(t)&&r.set(t,u),u}function dd(t){return t[0]!=="$"&&!_i(t)}const xg=t=>t[0]==="_"||t==="$stable",fu=t=>ce(t)?t.map(pn):[pn(t)],jE=(t,e,n)=>{if(e._n)return e;const r=Je((...s)=>fu(e(...s)),n);return r._c=!1,r},Lg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(xg(s))continue;const i=t[s];if(pe(i))e[s]=jE(s,i,r);else if(i!=null){const o=fu(i);e[s]=()=>o}}},Kg=(t,e)=>{const n=fu(e);t.slots.default=()=>n},Fg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},HE=(t,e,n)=>{const r=t.slots=Og();if(t.vnode.shapeFlag&32){const s=e._;s?(Fg(r,e,n),n&&$p(r,"_",s,!0)):Lg(e,r)}else e&&Kg(t,e)},qE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Fg(s,e,n):(i=!e.$stable,Lg(e,s)),o=e}else e&&(Kg(t,e),o={default:1});if(i)for(const l in s)!xg(l)&&o[l]==null&&delete s[l]},Vt=oA;function WE(t){return zE(t)}function zE(t,e){const n=xa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:y=gn,insertStaticContent:P}=t,O=(A,T,R,N=null,L=null,M=null,G=void 0,W=null,q=!!T.dynamicChildren)=>{if(A===T)return;A&&!fs(A,T)&&(N=V(A),Fe(A,L,M,!0),A=null),T.patchFlag===-2&&(q=!1,T.dynamicChildren=null);const{type:j,ref:ne,shapeFlag:J}=T;switch(j){case Ba:k(A,T,R,N);break;case Fn:F(A,T,R,N);break;case jo:A==null&&U(T,R,N,G);break;case Ke:w(A,T,R,N,L,M,G,W,q);break;default:J&1?Z(A,T,R,N,L,M,G,W,q):J&6?E(A,T,R,N,L,M,G,W,q):(J&64||J&128)&&j.process(A,T,R,N,L,M,G,W,q,ee)}ne!=null&&L&&aa(ne,A&&A.ref,M,T||A,!T)},k=(A,T,R,N)=>{if(A==null)r(T.el=l(T.children),R,N);else{const L=T.el=A.el;T.children!==A.children&&u(L,T.children)}},F=(A,T,R,N)=>{A==null?r(T.el=c(T.children||""),R,N):T.el=A.el},U=(A,T,R,N)=>{[A.el,A.anchor]=P(A.children,T,R,N,A.el,A.anchor)},B=({el:A,anchor:T},R,N)=>{let L;for(;A&&A!==T;)L=g(A),r(A,R,N),A=L;r(T,R,N)},$=({el:A,anchor:T})=>{let R;for(;A&&A!==T;)R=g(A),s(A),A=R;s(T)},Z=(A,T,R,N,L,M,G,W,q)=>{T.type==="svg"?G="svg":T.type==="math"&&(G="mathml"),A==null?ae(T,R,N,L,M,G,W,q):_(A,T,L,M,G,W,q)},ae=(A,T,R,N,L,M,G,W)=>{let q,j;const{props:ne,shapeFlag:J,transition:te,dirs:ue}=A;if(q=A.el=o(A.type,M,ne&&ne.is,ne),J&8?d(q,A.children):J&16&&v(A.children,q,null,N,L,Nl(A,M),G,W),ue&&Dr(A,null,N,"created"),b(q,A,A.scopeId,G,N),ne){for(const me in ne)me!=="value"&&!_i(me)&&i(q,me,null,ne[me],M,N);"value"in ne&&i(q,"value",null,ne.value,M),(j=ne.onVnodeBeforeMount)&&un(j,N,A)}ue&&Dr(A,null,N,"beforeMount");const re=GE(L,te);re&&te.beforeEnter(q),r(q,T,R),((j=ne&&ne.onVnodeMounted)||re||ue)&&Vt(()=>{j&&un(j,N,A),re&&te.enter(q),ue&&Dr(A,null,N,"mounted")},L)},b=(A,T,R,N,L)=>{if(R&&y(A,R),N)for(let M=0;M<N.length;M++)y(A,N[M]);if(L){let M=L.subTree;if(T===M||Hg(M.type)&&(M.ssContent===T||M.ssFallback===T)){const G=L.vnode;b(A,G,G.scopeId,G.slotScopeIds,L.parent)}}},v=(A,T,R,N,L,M,G,W,q=0)=>{for(let j=q;j<A.length;j++){const ne=A[j]=W?ir(A[j]):pn(A[j]);O(null,ne,T,R,N,L,M,G,W)}},_=(A,T,R,N,L,M,G)=>{const W=T.el=A.el;let{patchFlag:q,dynamicChildren:j,dirs:ne}=T;q|=A.patchFlag&16;const J=A.props||Ne,te=T.props||Ne;let ue;if(R&&Or(R,!1),(ue=te.onVnodeBeforeUpdate)&&un(ue,R,T,A),ne&&Dr(T,A,R,"beforeUpdate"),R&&Or(R,!0),(J.innerHTML&&te.innerHTML==null||J.textContent&&te.textContent==null)&&d(W,""),j?I(A.dynamicChildren,j,W,R,N,Nl(T,L),M):G||ve(A,T,W,null,R,N,Nl(T,L),M,!1),q>0){if(q&16)C(W,J,te,R,L);else if(q&2&&J.class!==te.class&&i(W,"class",null,te.class,L),q&4&&i(W,"style",J.style,te.style,L),q&8){const re=T.dynamicProps;for(let me=0;me<re.length;me++){const Te=re[me],ft=J[Te],at=te[Te];(at!==ft||Te==="value")&&i(W,Te,ft,at,L,R)}}q&1&&A.children!==T.children&&d(W,T.children)}else!G&&j==null&&C(W,J,te,R,L);((ue=te.onVnodeUpdated)||ne)&&Vt(()=>{ue&&un(ue,R,T,A),ne&&Dr(T,A,R,"updated")},N)},I=(A,T,R,N,L,M,G)=>{for(let W=0;W<T.length;W++){const q=A[W],j=T[W],ne=q.el&&(q.type===Ke||!fs(q,j)||q.shapeFlag&70)?p(q.el):R;O(q,j,ne,null,N,L,M,G,!0)}},C=(A,T,R,N,L)=>{if(T!==R){if(T!==Ne)for(const M in T)!_i(M)&&!(M in R)&&i(A,M,T[M],null,L,N);for(const M in R){if(_i(M))continue;const G=R[M],W=T[M];G!==W&&M!=="value"&&i(A,M,W,G,L,N)}"value"in R&&i(A,"value",T.value,R.value,L)}},w=(A,T,R,N,L,M,G,W,q)=>{const j=T.el=A?A.el:l(""),ne=T.anchor=A?A.anchor:l("");let{patchFlag:J,dynamicChildren:te,slotScopeIds:ue}=T;ue&&(W=W?W.concat(ue):ue),A==null?(r(j,R,N),r(ne,R,N),v(T.children||[],R,ne,L,M,G,W,q)):J>0&&J&64&&te&&A.dynamicChildren?(I(A.dynamicChildren,te,R,L,M,G,W),(T.key!=null||L&&T===L.subTree)&&Ug(A,T,!0)):ve(A,T,R,ne,L,M,G,W,q)},E=(A,T,R,N,L,M,G,W,q)=>{T.slotScopeIds=W,A==null?T.shapeFlag&512?L.ctx.activate(T,R,N,G,q):Se(T,R,N,L,M,G,q):We(A,T,q)},Se=(A,T,R,N,L,M,G)=>{const W=A.component=dA(A,N,L);if(Eg(A)&&(W.ctx.renderer=ee),fA(W,!1,G),W.asyncDep){if(L&&L.registerDep(W,Oe,G),!A.el){const q=W.subTree=be(Fn);F(null,q,T,R)}}else Oe(W,A,T,R,L,M,G)},We=(A,T,R)=>{const N=T.component=A.component;if(sA(A,T,R))if(N.asyncDep&&!N.asyncResolved){he(N,T,R);return}else N.next=T,N.update();else T.el=A.el,N.vnode=T},Oe=(A,T,R,N,L,M,G)=>{const W=()=>{if(A.isMounted){let{next:J,bu:te,u:ue,parent:re,vnode:me}=A;{const pt=Bg(A);if(pt){J&&(J.el=me.el,he(A,J,G)),pt.asyncDep.then(()=>{A.isUnmounted||W()});return}}let Te=J,ft;Or(A,!1),J?(J.el=me.el,he(A,J,G)):J=me,te&&Bo(te),(ft=J.props&&J.props.onVnodeBeforeUpdate)&&un(ft,re,J,me),Or(A,!0);const at=pd(A),Ft=A.subTree;A.subTree=at,O(Ft,at,p(Ft.el),V(Ft),A,L,M),J.el=at.el,Te===null&&iA(A,at.el),ue&&Vt(ue,L),(ft=J.props&&J.props.onVnodeUpdated)&&Vt(()=>un(ft,re,J,me),L)}else{let J;const{el:te,props:ue}=T,{bm:re,m:me,parent:Te,root:ft,type:at}=A,Ft=bs(T);Or(A,!1),re&&Bo(re),!Ft&&(J=ue&&ue.onVnodeBeforeMount)&&un(J,Te,T),Or(A,!0);{ft.ce&&ft.ce._injectChildStyle(at);const pt=A.subTree=pd(A);O(null,pt,R,N,A,L,M),T.el=pt.el}if(me&&Vt(me,L),!Ft&&(J=ue&&ue.onVnodeMounted)){const pt=T;Vt(()=>un(J,Te,pt),L)}(T.shapeFlag&256||Te&&bs(Te.vnode)&&Te.vnode.shapeFlag&256)&&A.a&&Vt(A.a,L),A.isMounted=!0,T=R=N=null}};A.scope.on();const q=A.effect=new Qp(W);A.scope.off();const j=A.update=q.run.bind(q),ne=A.job=q.runIfDirty.bind(q);ne.i=A,ne.id=A.uid,q.scheduler=()=>cu(ne),Or(A,!0),j()},he=(A,T,R)=>{T.component=A;const N=A.vnode.props;A.vnode=T,A.next=null,BE(A,T.props,N,R),qE(A,T.children,R),Ir(),od(A),wr()},ve=(A,T,R,N,L,M,G,W,q=!1)=>{const j=A&&A.children,ne=A?A.shapeFlag:0,J=T.children,{patchFlag:te,shapeFlag:ue}=T;if(te>0){if(te&128){Jt(j,J,R,N,L,M,G,W,q);return}else if(te&256){Dt(j,J,R,N,L,M,G,W,q);return}}ue&8?(ne&16&&St(j,L,M),J!==j&&d(R,J)):ne&16?ue&16?Jt(j,J,R,N,L,M,G,W,q):St(j,L,M,!0):(ne&8&&d(R,""),ue&16&&v(J,R,N,L,M,G,W,q))},Dt=(A,T,R,N,L,M,G,W,q)=>{A=A||As,T=T||As;const j=A.length,ne=T.length,J=Math.min(j,ne);let te;for(te=0;te<J;te++){const ue=T[te]=q?ir(T[te]):pn(T[te]);O(A[te],ue,R,null,L,M,G,W,q)}j>ne?St(A,L,M,!0,!1,J):v(T,R,N,L,M,G,W,q,J)},Jt=(A,T,R,N,L,M,G,W,q)=>{let j=0;const ne=T.length;let J=A.length-1,te=ne-1;for(;j<=J&&j<=te;){const ue=A[j],re=T[j]=q?ir(T[j]):pn(T[j]);if(fs(ue,re))O(ue,re,R,null,L,M,G,W,q);else break;j++}for(;j<=J&&j<=te;){const ue=A[J],re=T[te]=q?ir(T[te]):pn(T[te]);if(fs(ue,re))O(ue,re,R,null,L,M,G,W,q);else break;J--,te--}if(j>J){if(j<=te){const ue=te+1,re=ue<ne?T[ue].el:N;for(;j<=te;)O(null,T[j]=q?ir(T[j]):pn(T[j]),R,re,L,M,G,W,q),j++}}else if(j>te)for(;j<=J;)Fe(A[j],L,M,!0),j++;else{const ue=j,re=j,me=new Map;for(j=re;j<=te;j++){const lt=T[j]=q?ir(T[j]):pn(T[j]);lt.key!=null&&me.set(lt.key,j)}let Te,ft=0;const at=te-re+1;let Ft=!1,pt=0;const Qn=new Array(at);for(j=0;j<at;j++)Qn[j]=0;for(j=ue;j<=J;j++){const lt=A[j];if(ft>=at){Fe(lt,L,M,!0);continue}let Ut;if(lt.key!=null)Ut=me.get(lt.key);else for(Te=re;Te<=te;Te++)if(Qn[Te-re]===0&&fs(lt,T[Te])){Ut=Te;break}Ut===void 0?Fe(lt,L,M,!0):(Qn[Ut-re]=j+1,Ut>=pt?pt=Ut:Ft=!0,O(lt,T[Ut],R,null,L,M,G,W,q),ft++)}const Qs=Ft?QE(Qn):As;for(Te=Qs.length-1,j=at-1;j>=0;j--){const lt=re+j,Ut=T[lt],po=lt+1<ne?T[lt+1].el:N;Qn[j]===0?O(null,Ut,R,po,L,M,G,W,q):Ft&&(Te<0||j!==Qs[Te]?Kt(Ut,R,po,2):Te--)}}},Kt=(A,T,R,N,L=null)=>{const{el:M,type:G,transition:W,children:q,shapeFlag:j}=A;if(j&6){Kt(A.component.subTree,T,R,N);return}if(j&128){A.suspense.move(T,R,N);return}if(j&64){G.move(A,T,R,ee);return}if(G===Ke){r(M,T,R);for(let J=0;J<q.length;J++)Kt(q[J],T,R,N);r(A.anchor,T,R);return}if(G===jo){B(A,T,R);return}if(N!==2&&j&1&&W)if(N===0)W.beforeEnter(M),r(M,T,R),Vt(()=>W.enter(M),L);else{const{leave:J,delayLeave:te,afterLeave:ue}=W,re=()=>r(M,T,R),me=()=>{J(M,()=>{re(),ue&&ue()})};te?te(M,re,me):me()}else r(M,T,R)},Fe=(A,T,R,N=!1,L=!1)=>{const{type:M,props:G,ref:W,children:q,dynamicChildren:j,shapeFlag:ne,patchFlag:J,dirs:te,cacheIndex:ue}=A;if(J===-2&&(L=!1),W!=null&&aa(W,null,R,A,!0),ue!=null&&(T.renderCache[ue]=void 0),ne&256){T.ctx.deactivate(A);return}const re=ne&1&&te,me=!bs(A);let Te;if(me&&(Te=G&&G.onVnodeBeforeUnmount)&&un(Te,T,A),ne&6)cn(A.component,R,N);else{if(ne&128){A.suspense.unmount(R,N);return}re&&Dr(A,null,T,"beforeUnmount"),ne&64?A.type.remove(A,T,R,ee,N):j&&!j.hasOnce&&(M!==Ke||J>0&&J&64)?St(j,T,R,!1,!0):(M===Ke&&J&384||!L&&ne&16)&&St(q,T,R),N&&Ue(A)}(me&&(Te=G&&G.onVnodeUnmounted)||re)&&Vt(()=>{Te&&un(Te,T,A),re&&Dr(A,null,T,"unmounted")},R)},Ue=A=>{const{type:T,el:R,anchor:N,transition:L}=A;if(T===Ke){Gn(R,N);return}if(T===jo){$(A);return}const M=()=>{s(R),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(A.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:W}=L,q=()=>G(R,M);W?W(A.el,M,q):q()}else M()},Gn=(A,T)=>{let R;for(;A!==T;)R=g(A),s(A),A=R;s(T)},cn=(A,T,R)=>{const{bum:N,scope:L,job:M,subTree:G,um:W,m:q,a:j}=A;fd(q),fd(j),N&&Bo(N),L.stop(),M&&(M.flags|=8,Fe(G,A,T,R)),W&&Vt(W,T),Vt(()=>{A.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},St=(A,T,R,N=!1,L=!1,M=0)=>{for(let G=M;G<A.length;G++)Fe(A[G],T,R,N,L)},V=A=>{if(A.shapeFlag&6)return V(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const T=g(A.anchor||A.el),R=T&&T[mE];return R?g(R):T};let Y=!1;const Q=(A,T,R)=>{A==null?T._vnode&&Fe(T._vnode,null,null,!0):O(T._vnode||null,A,T,null,null,null,R),T._vnode=A,Y||(Y=!0,od(),gg(),Y=!1)},ee={p:O,um:Fe,m:Kt,r:Ue,mt:Se,mc:v,pc:ve,pbc:I,n:V,o:t};return{render:Q,hydrate:void 0,createApp:FE(Q)}}function Nl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Or({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function GE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ug(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=ir(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Ug(o,l)),l.type===Ba&&(l.el=o.el)}}function QE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Bg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bg(e)}function fd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const JE=Symbol.for("v-scx"),YE=()=>Lt(JE);function XE(t,e){return pu(t,null,e)}function Br(t,e,n){return pu(t,e,n)}function pu(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,l=rt({},n),c=e&&r||!e&&i!=="post";let u;if(Li){if(i==="sync"){const y=YE();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=gn,y.resume=gn,y.pause=gn,y}}const d=ot;l.call=(y,P,O)=>sn(y,d,P,O);let p=!1;i==="post"?l.scheduler=y=>{Vt(y,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,P)=>{P?y():cu(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const g=dE(t,e,l);return Li&&(u?u.push(g):c&&g()),g}function ZE(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?$g(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=no(this),l=pu(s,i.bind(r),n);return o(),l}function $g(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const eA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zt(e)}Modifiers`]||t[`${Xr(e)}Modifiers`];function tA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&eA(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>qe(d)?d.trim():d)),o.number&&(s=n.map(ic)));let l,c=r[l=Uo(e)]||r[l=Uo(zt(e))];!c&&i&&(c=r[l=Uo(Xr(e))]),c&&sn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,sn(u,t,6,s)}}function jg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=u=>{const d=jg(u,e,!0);d&&(l=!0,rt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Le(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):rt(o,i),Le(t)&&r.set(t,o),o)}function Ua(t,e){return!t||!Oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Xr(e))||ke(t,e))}function pd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:g,setupState:y,ctx:P,inheritAttrs:O}=t,k=oa(t);let F,U;try{if(n.shapeFlag&4){const $=s||r,Z=$;F=pn(u.call(Z,$,d,p,y,g,P)),U=l}else{const $=e;F=pn($.length>1?$(p,{attrs:l,slots:o,emit:c}):$(p,null)),U=e.props?l:nA(l)}}catch($){Ai.length=0,Ka($,t,1),F=be(Fn)}let B=F;if(U&&O!==!1){const $=Object.keys(U),{shapeFlag:Z}=B;$.length&&Z&7&&(i&&$.some(Yc)&&(U=rA(U,i)),B=qr(B,U,!1,!0))}return n.dirs&&(B=qr(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&Ni(B,n.transition),F=B,oa(k),F}const nA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oa(n))&&((e||(e={}))[n]=t[n]);return e},rA=(t,e)=>{const n={};for(const r in t)(!Yc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function sA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?gd(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!Ua(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?gd(r,o,u):!0:!!o;return!1}function gd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ua(n,i))return!0}return!1}function iA({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hg=t=>t.__isSuspense;function oA(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):gE(t)}const Ke=Symbol.for("v-fgt"),Ba=Symbol.for("v-txt"),Fn=Symbol.for("v-cmt"),jo=Symbol.for("v-stc"),Ai=[];let xt=null;function le(t=!1){Ai.push(xt=t?null:[])}function aA(){Ai.pop(),xt=Ai[Ai.length-1]||null}let Mi=1;function md(t,e=!1){Mi+=t,t<0&&xt&&e&&(xt.hasOnce=!0)}function qg(t){return t.dynamicChildren=Mi>0?xt||As:null,aA(),Mi>0&&xt&&xt.push(t),t}function Ae(t,e,n,r,s,i){return qg(K(t,e,n,r,s,i,!0))}function kt(t,e,n,r,s){return qg(be(t,e,n,r,s,!0))}function xi(t){return t?t.__v_isVNode===!0:!1}function fs(t,e){return t.type===e.type&&t.key===e.key}const Wg=({key:t})=>t??null,Ho=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||Ge(t)||pe(t)?{i:et,r:t,k:e,f:!!n}:t:null);function K(t,e=null,n=null,r=0,s=null,i=t===Ke?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wg(e),ref:e&&Ho(e),scopeId:_g,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:et};return l?(gu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Mi>0&&!o&&xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xt.push(c),c}const be=lA;function lA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===bg)&&(t=Fn),xi(t)){const l=qr(t,e,!0);return n&&gu(l,n),Mi>0&&!i&&xt&&(l.shapeFlag&6?xt[xt.indexOf(t)]=l:xt.push(l)),l.patchFlag=-2,l}if(vA(t)&&(t=t.__vccOpts),e){e=cA(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=Gt(l)),Le(c)&&(au(c)&&!ce(c)&&(c=rt({},c)),e.style=Xi(c))}const o=qe(t)?1:Hg(t)?128:_E(t)?64:Le(t)?4:pe(t)?2:0;return K(t,e,n,r,s,o,i,!0)}function cA(t){return t?au(t)||Vg(t)?rt({},t):t:null}function qr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?ja(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Wg(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(Ho(e)):[i,Ho(e)]:Ho(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qr(t.ssContent),ssFallback:t.ssFallback&&qr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ni(d,c.clone(d)),d}function je(t=" ",e=0){return be(Ba,null,t,e)}function $a(t,e){const n=be(jo,null,t);return n.staticCount=e,n}function $r(t="",e=!1){return e?(le(),kt(Fn,null,t)):be(Fn,null,t)}function pn(t){return t==null||typeof t=="boolean"?be(Fn):ce(t)?be(Ke,null,t.slice()):xi(t)?ir(t):be(Ba,null,String(t))}function ir(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qr(t)}function gu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),gu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Vg(e)?e._ctx=et:s===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:et},n=32):(e=String(e),r&64?(n=16,e=[je(e)]):n=8);t.children=e,t.shapeFlag|=n}function ja(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Gt([e.class,r.class]));else if(s==="style")e.style=Xi([e.style,r.style]);else if(Oa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function un(t,e,n,r=null){sn(t,e,7,[n,r])}const uA=kg();let hA=0;function dA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||uA,i={uid:hA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mg(r,s),emitsOptions:jg(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=tA.bind(null,i),t.ce&&t.ce(i),i}let ot=null;const Ha=()=>ot||et;let ca,gc;{const t=xa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ca=e("__VUE_INSTANCE_SETTERS__",n=>ot=n),gc=e("__VUE_SSR_SETTERS__",n=>Li=n)}const no=t=>{const e=ot;return ca(t),t.scope.on(),()=>{t.scope.off(),ca(e)}},_d=()=>{ot&&ot.scope.off(),ca(null)};function zg(t){return t.vnode.shapeFlag&4}let Li=!1;function fA(t,e=!1,n=!1){e&&gc(e);const{props:r,children:s}=t.vnode,i=zg(t);UE(t,r,i,e),HE(t,s,n);const o=i?pA(t,e):void 0;return e&&gc(!1),o}function pA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,OE);const{setup:r}=n;if(r){Ir();const s=t.setupContext=r.length>1?mA(t):null,i=no(t),o=eo(r,t,0,[t.props,s]),l=Fp(o);if(wr(),i(),(l||t.sp)&&!bs(t)&&yg(t),l){if(o.then(_d,_d),e)return o.then(c=>{vd(t,c)}).catch(c=>{Ka(c,t,0)});t.asyncDep=o}else vd(t,o)}else Gg(t)}function vd(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=dg(e)),Gg(t)}function Gg(t,e,n){const r=t.type;t.render||(t.render=r.render||gn);{const s=no(t);Ir();try{VE(t)}finally{wr(),s()}}}const gA={get(t,e){return yt(t,"get",""),t[e]}};function mA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gA),slots:t.slots,emit:t.emit,expose:e}}function qa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(dg(lu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ei)return Ei[n](t)},has(e,n){return n in e||n in Ei}})):t.proxy}function _A(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function vA(t){return pe(t)&&"__vccOpts"in t}const Ye=(t,e)=>uE(t,e,Li);function Qg(t,e,n){const r=arguments.length;return r===2?Le(e)&&!ce(e)?xi(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xi(n)&&(n=[n]),be(t,e,n))}const yA="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mc;const yd=typeof window<"u"&&window.trustedTypes;if(yd)try{mc=yd.createPolicy("vue",{createHTML:t=>t})}catch{}const Jg=mc?t=>mc.createHTML(t):t=>t,EA="http://www.w3.org/2000/svg",AA="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,Ed=Sn&&Sn.createElement("template"),TA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Sn.createElementNS(EA,t):e==="mathml"?Sn.createElementNS(AA,t):n?Sn.createElement(t,{is:n}):Sn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Sn.createTextNode(t),createComment:t=>Sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ed.innerHTML=Jg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Ed.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Zn="transition",ci="animation",ks=Symbol("_vtc"),Yg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},IA=rt({},yE,Yg),Vr=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ad=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function wA(t){const e={};for(const w in t)w in Yg||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,P=bA(s),O=P&&P[0],k=P&&P[1],{onBeforeEnter:F,onEnter:U,onEnterCancelled:B,onLeave:$,onLeaveCancelled:Z,onBeforeAppear:ae=F,onAppear:b=U,onAppearCancelled:v=B}=e,_=(w,E,Se,We)=>{w._enterCancelled=We,nr(w,E?d:l),nr(w,E?u:o),Se&&Se()},I=(w,E)=>{w._isLeaving=!1,nr(w,p),nr(w,y),nr(w,g),E&&E()},C=w=>(E,Se)=>{const We=w?b:U,Oe=()=>_(E,w,Se);Vr(We,[E,Oe]),Td(()=>{nr(E,w?c:i),hn(E,w?d:l),Ad(We)||Id(E,r,O,Oe)})};return rt(e,{onBeforeEnter(w){Vr(F,[w]),hn(w,i),hn(w,o)},onBeforeAppear(w){Vr(ae,[w]),hn(w,c),hn(w,u)},onEnter:C(!1),onAppear:C(!0),onLeave(w,E){w._isLeaving=!0;const Se=()=>I(w,E);hn(w,p),w._enterCancelled?(hn(w,g),_c()):(_c(),hn(w,g)),Td(()=>{w._isLeaving&&(nr(w,p),hn(w,y),Ad($)||Id(w,r,k,Se))}),Vr($,[w,Se])},onEnterCancelled(w){_(w,!1,void 0,!0),Vr(B,[w])},onAppearCancelled(w){_(w,!0,void 0,!0),Vr(v,[w])},onLeaveCancelled(w){I(w),Vr(Z,[w])}})}function bA(t){if(t==null)return null;if(Le(t))return[Ml(t.enter),Ml(t.leave)];{const e=Ml(t);return[e,e]}}function Ml(t){return Oy(t)}function hn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ks]||(t[ks]=new Set)).add(e)}function nr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ks];n&&(n.delete(e),n.size||(t[ks]=void 0))}function Td(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let CA=0;function Id(t,e,n,r){const s=t._endId=++CA,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=Xg(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,g),i()},g=y=>{y.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,g)}function Xg(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${Zn}Delay`),i=r(`${Zn}Duration`),o=wd(s,i),l=r(`${ci}Delay`),c=r(`${ci}Duration`),u=wd(l,c);let d=null,p=0,g=0;e===Zn?o>0&&(d=Zn,p=o,g=i.length):e===ci?u>0&&(d=ci,p=u,g=c.length):(p=Math.max(o,u),d=p>0?o>u?Zn:ci:null,g=d?d===Zn?i.length:c.length:0);const y=d===Zn&&/\b(transform|all)(,|$)/.test(r(`${Zn}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:y}}function wd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>bd(n)+bd(t[r])))}function bd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function _c(){return document.body.offsetHeight}function RA(t,e,n){const r=t[ks];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Cd=Symbol("_vod"),SA=Symbol("_vsh"),PA=Symbol(""),kA=/(^|;)\s*display\s*:/;function DA(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&qo(r,l,"")}else for(const o in e)n[o]==null&&qo(r,o,"");for(const o in n)o==="display"&&(i=!0),qo(r,o,n[o])}else if(s){if(e!==n){const o=r[PA];o&&(n+=";"+o),r.cssText=n,i=kA.test(n)}}else e&&t.removeAttribute("style");Cd in t&&(t[Cd]=i?r.display:"",t[SA]&&(r.display="none"))}const Rd=/\s*!important$/;function qo(t,e,n){if(ce(n))n.forEach(r=>qo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=OA(t,e);Rd.test(n)?t.setProperty(Xr(r),n.replace(Rd,""),"important"):t[r]=n}}const Sd=["Webkit","Moz","ms"],xl={};function OA(t,e){const n=xl[e];if(n)return n;let r=zt(e);if(r!=="filter"&&r in t)return xl[e]=r;r=Ma(r);for(let s=0;s<Sd.length;s++){const i=Sd[s]+r;if(i in t)return xl[e]=i}return e}const Pd="http://www.w3.org/1999/xlink";function kd(t,e,n,r,s,i=Ky(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Pd,e.slice(6,e.length)):t.setAttributeNS(Pd,e,n):n==null||i&&!jp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":qn(n)?String(n):n)}function Dd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=jp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ps(t,e,n,r){t.addEventListener(e,n,r)}function VA(t,e,n,r){t.removeEventListener(e,n,r)}const Od=Symbol("_vei");function NA(t,e,n,r,s=null){const i=t[Od]||(t[Od]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=MA(e);if(r){const u=i[e]=KA(r,s);ps(t,l,u,c)}else o&&(VA(t,l,o,c),i[e]=void 0)}}const Vd=/(?:Once|Passive|Capture)$/;function MA(t){let e;if(Vd.test(t)){e={};let r;for(;r=t.match(Vd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xr(t.slice(2)),e]}let Ll=0;const xA=Promise.resolve(),LA=()=>Ll||(xA.then(()=>Ll=0),Ll=Date.now());function KA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sn(FA(r,n.value),e,5,[r])};return n.value=t,n.attached=LA(),n}function FA(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Nd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,UA=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?RA(t,r,o):e==="style"?DA(t,n,r):Oa(e)?Yc(e)||NA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):BA(t,e,r,o))?(Dd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&kd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?Dd(t,zt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),kd(t,e,r,o))};function BA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nd(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Nd(e)&&qe(n)?!1:e in t}const Zg=new WeakMap,em=new WeakMap,ua=Symbol("_moveCb"),Md=Symbol("_enterCb"),$A=t=>(delete t.props.mode,t),jA=$A({name:"TransitionGroup",props:rt({},IA,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ha(),r=vE();let s,i;return Tg(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!GA(s[0].el,n.vnode.el,o))return;s.forEach(qA),s.forEach(WA);const l=s.filter(zA);_c(),l.forEach(c=>{const u=c.el,d=u.style;hn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[ua]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[ua]=null,nr(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=we(t),l=wA(o);let c=o.tag||Ke;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),Ni(d,uc(d,l,r,n)),Zg.set(d,d.el.getBoundingClientRect()))}i=e.default?vg(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&Ni(d,uc(d,l,r,n))}return be(c,null,i)}}}),HA=jA;function qA(t){const e=t.el;e[ua]&&e[ua](),e[Md]&&e[Md]()}function WA(t){em.set(t,t.el.getBoundingClientRect())}function zA(t){const e=Zg.get(t),n=em.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function GA(t,e,n){const r=t.cloneNode(),s=t[ks];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=Xg(r);return i.removeChild(r),o}const xd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>Bo(e,n):e};function QA(t){t.target.composing=!0}function Ld(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kl=Symbol("_assign"),Wr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Kl]=xd(s);const i=r||s.props&&s.props.type==="number";ps(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ic(l)),t[Kl](l)}),n&&ps(t,"change",()=>{t.value=t.value.trim()}),e||(ps(t,"compositionstart",QA),ps(t,"compositionend",Ld),ps(t,"change",Ld))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Kl]=xd(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ic(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},JA=["ctrl","shift","alt","meta"],YA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>JA.some(n=>t[`${n}Key`]&&!e.includes(n))},XA=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=YA[e[o]];if(l&&l(s,e))return}return t(s,...i)})},ZA=rt({patchProp:UA},TA);let Kd;function eT(){return Kd||(Kd=WE(ZA))}const tm=(...t)=>{const e=eT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=nT(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,tT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function tT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function nT(t){return qe(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let nm;const Wa=t=>nm=t,rm=Symbol();function vc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ti;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ti||(Ti={}));function rT(){const t=zp(!0),e=t.run(()=>Tt({}));let n=[],r=[];const s=lu({install(i){Wa(s),s._a=i,i.provide(rm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const sm=()=>{};function Fd(t,e,n,r=sm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&eu()&&Gp(s),s}function hs(t,...e){t.slice().forEach(n=>{n(...e)})}const sT=t=>t(),Ud=Symbol(),Fl=Symbol();function yc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];vc(s)&&vc(r)&&t.hasOwnProperty(n)&&!Ge(r)&&!hr(r)?t[n]=yc(s,r):t[n]=r}return t}const iT=Symbol();function oT(t){return!vc(t)||!t.hasOwnProperty(iT)}const{assign:rr}=Object;function aT(t){return!!(Ge(t)&&t.effect)}function lT(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const d=oE(n.state.value[t]);return rr(d,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=lu(Ye(()=>{Wa(n);const y=n._s.get(t);return o[g].call(y,y)})),p),{}))}return c=im(t,u,e,n,r,!0),c}function im(t,e,n={},r,s,i){let o;const l=rr({actions:{}},n),c={deep:!0};let u,d,p=[],g=[],y;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),Tt({});let O;function k(v){let _;u=d=!1,typeof v=="function"?(v(r.state.value[t]),_={type:Ti.patchFunction,storeId:t,events:y}):(yc(r.state.value[t],v),_={type:Ti.patchObject,payload:v,storeId:t,events:y});const I=O=Symbol();to().then(()=>{O===I&&(u=!0)}),d=!0,hs(p,_,r.state.value[t])}const F=i?function(){const{state:_}=n,I=_?_():{};this.$patch(C=>{rr(C,I)})}:sm;function U(){o.stop(),p=[],g=[],r._s.delete(t)}const B=(v,_="")=>{if(Ud in v)return v[Fl]=_,v;const I=function(){Wa(r);const C=Array.from(arguments),w=[],E=[];function Se(he){w.push(he)}function We(he){E.push(he)}hs(g,{args:C,name:I[Fl],store:Z,after:Se,onError:We});let Oe;try{Oe=v.apply(this&&this.$id===t?this:Z,C)}catch(he){throw hs(E,he),he}return Oe instanceof Promise?Oe.then(he=>(hs(w,he),he)).catch(he=>(hs(E,he),Promise.reject(he))):(hs(w,Oe),Oe)};return I[Ud]=!0,I[Fl]=_,I},$={_p:r,$id:t,$onAction:Fd.bind(null,g),$patch:k,$reset:F,$subscribe(v,_={}){const I=Fd(p,v,_.detached,()=>C()),C=o.run(()=>Br(()=>r.state.value[t],w=>{(_.flush==="sync"?d:u)&&v({storeId:t,type:Ti.direct,events:y},w)},rr({},c,_)));return I},$dispose:U},Z=Zi($);r._s.set(t,Z);const b=(r._a&&r._a.runWithContext||sT)(()=>r._e.run(()=>(o=zp()).run(()=>e({action:B}))));for(const v in b){const _=b[v];if(Ge(_)&&!aT(_)||hr(_))i||(P&&oT(_)&&(Ge(_)?_.value=P[v]:yc(_,P[v])),r.state.value[t][v]=_);else if(typeof _=="function"){const I=B(_,v);b[v]=I,l.actions[v]=_}}return rr(Z,b),rr(we(Z),b),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:v=>{k(_=>{rr(_,v)})}}),r._p.forEach(v=>{rr(Z,o.run(()=>v({store:Z,app:r._a,pinia:r,options:l})))}),P&&i&&n.hydrate&&n.hydrate(Z.$state,P),u=!0,d=!0,Z}/*! #__NO_SIDE_EFFECTS__ */function cT(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(l,c){const u=du();return l=l||(u?Lt(rm,null):null),l&&Wa(l),l=nm,l._s.has(r)||(i?im(r,e,s,l):lT(r,s,l)),l._s.get(r)}return o.$id=r,o}const uT="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAC3ANwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z",hT=()=>{};var Bd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},am={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(g=64)),r.push(n[d],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(om(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new fT;const g=i<<2|l>>4;if(r.push(g),u!==64){const y=l<<4&240|u>>2;if(r.push(y),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pT=function(t){const e=om(t);return am.encodeByteArray(e,!0)},ha=function(t){return pT(t).replace(/\./g,"")},lm=function(t){try{return am.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=()=>gT().__FIREBASE_DEFAULTS__,_T=()=>{if(typeof process>"u"||typeof Bd>"u")return;const t=Bd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lm(t[1]);return e&&JSON.parse(e)},za=()=>{try{return hT()||mT()||_T()||vT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cm=t=>{var e,n;return(n=(e=za())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yT=t=>{const e=cm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},um=()=>{var t;return(t=za())===null||t===void 0?void 0:t.config},hm=t=>{var e;return(e=za())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ha(JSON.stringify(n)),ha(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function IT(){var t;const e=(t=za())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function CT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RT(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ST(){return!IT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function PT(){try{return typeof indexedDB=="object"}catch{return!1}}function kT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DT,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ro.prototype.create)}}class ro{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?OT(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new zn(s,l,r)}}function OT(t,e){return t.replace(VT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const VT=/\{\$([^}]+)}/g;function NT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if($d(i)&&$d(o)){if(!zr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function $d(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function MT(t,e){const n=new xT(t,e);return n.subscribe.bind(n)}class xT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ul),s.error===void 0&&(s.error=Ul),s.complete===void 0&&(s.complete=Ul);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ul(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t){return t&&t._delegate?t._delegate:t}class Gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ET;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UT(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FT(t){return t===Mr?void 0:t}function UT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const $T={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},jT=ye.INFO,HT={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},qT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=HT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mu{constructor(e){this.name=e,this._logLevel=jT,this._logHandler=qT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$T[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const WT=(t,e)=>e.some(n=>t instanceof n);let jd,Hd;function zT(){return jd||(jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GT(){return Hd||(Hd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dm=new WeakMap,Ec=new WeakMap,fm=new WeakMap,Bl=new WeakMap,_u=new WeakMap;function QT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dm.set(n,t)}).catch(()=>{}),_u.set(e,t),e}function JT(t){if(Ec.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ec.set(t,e)}let Ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ec.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YT(t){Ac=t(Ac)}function XT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($l(this),e,...n);return fm.set(r,e.sort?e.sort():[e]),dr(r)}:GT().includes(t)?function(...e){return t.apply($l(this),e),dr(dm.get(this))}:function(...e){return dr(t.apply($l(this),e))}}function ZT(t){return typeof t=="function"?XT(t):(t instanceof IDBTransaction&&JT(t),WT(t,zT())?new Proxy(t,Ac):t)}function dr(t){if(t instanceof IDBRequest)return QT(t);if(Bl.has(t))return Bl.get(t);const e=ZT(t);return e!==t&&(Bl.set(t,e),_u.set(e,t)),e}const $l=t=>_u.get(t);function eI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=dr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(dr(o.result),c.oldVersion,c.newVersion,dr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const tI=["get","getKey","getAll","getAllKeys","count"],nI=["put","add","delete","clear"],jl=new Map;function qd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jl.get(e))return jl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=nI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return jl.set(e,i),i}YT(t=>({...t,get:(e,n,r)=>qd(e,n)||t.get(e,n,r),has:(e,n)=>!!qd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tc="@firebase/app",Wd="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new mu("@firebase/app"),iI="@firebase/app-compat",oI="@firebase/analytics-compat",aI="@firebase/analytics",lI="@firebase/app-check-compat",cI="@firebase/app-check",uI="@firebase/auth",hI="@firebase/auth-compat",dI="@firebase/database",fI="@firebase/data-connect",pI="@firebase/database-compat",gI="@firebase/functions",mI="@firebase/functions-compat",_I="@firebase/installations",vI="@firebase/installations-compat",yI="@firebase/messaging",EI="@firebase/messaging-compat",AI="@firebase/performance",TI="@firebase/performance-compat",II="@firebase/remote-config",wI="@firebase/remote-config-compat",bI="@firebase/storage",CI="@firebase/storage-compat",RI="@firebase/firestore",SI="@firebase/vertexai",PI="@firebase/firestore-compat",kI="firebase",DI="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="[DEFAULT]",OI={[Tc]:"fire-core",[iI]:"fire-core-compat",[aI]:"fire-analytics",[oI]:"fire-analytics-compat",[cI]:"fire-app-check",[lI]:"fire-app-check-compat",[uI]:"fire-auth",[hI]:"fire-auth-compat",[dI]:"fire-rtdb",[fI]:"fire-data-connect",[pI]:"fire-rtdb-compat",[gI]:"fire-fn",[mI]:"fire-fn-compat",[_I]:"fire-iid",[vI]:"fire-iid-compat",[yI]:"fire-fcm",[EI]:"fire-fcm-compat",[AI]:"fire-perf",[TI]:"fire-perf-compat",[II]:"fire-rc",[wI]:"fire-rc-compat",[bI]:"fire-gcs",[CI]:"fire-gcs-compat",[RI]:"fire-fst",[PI]:"fire-fst-compat",[SI]:"fire-vertex","fire-js":"fire-js",[kI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new Map,VI=new Map,wc=new Map;function zd(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ds(t){const e=t.name;if(wc.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;wc.set(e,t);for(const n of da.values())zd(n,t);for(const n of VI.values())zd(n,t);return!0}function vu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new ro("app","Firebase",NI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=DI;function yu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ic,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw fr.create("bad-app-name",{appName:String(s)});if(n||(n=um()),!n)throw fr.create("no-options");const i=da.get(s);if(i){if(zr(n,i.options)&&zr(r,i.config))return i;throw fr.create("duplicate-app",{appName:s})}const o=new BT(s);for(const c of wc.values())o.addComponent(c);const l=new MI(n,r,o);return da.set(s,l),l}function pm(t=Ic){const e=da.get(t);if(!e&&t===Ic&&um())return yu();if(!e)throw fr.create("no-app",{appName:t});return e}function pr(t,e,n){var r;let s=(r=OI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(l.join(" "));return}Ds(new Gr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="firebase-heartbeat-database",LI=1,Ki="firebase-heartbeat-store";let Hl=null;function gm(){return Hl||(Hl=eI(xI,LI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ki)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),Hl}async function KI(t){try{const n=(await gm()).transaction(Ki),r=await n.objectStore(Ki).get(mm(t));return await n.done,r}catch(e){if(e instanceof zn)Un.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function Gd(t,e){try{const r=(await gm()).transaction(Ki,"readwrite");await r.objectStore(Ki).put(e,mm(t)),await r.done}catch(n){if(n instanceof zn)Un.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function mm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=1024,UI=30;class BI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Qd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>UI){const o=HI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qd(),{heartbeatsToSend:r,unsentEntries:s}=$I(this._heartbeatsCache.heartbeats),i=ha(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Un.warn(n),""}}}function Qd(){return new Date().toISOString().substring(0,10)}function $I(t,e=FI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Jd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return PT()?kT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await KI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jd(t){return ha(JSON.stringify({version:2,heartbeats:t})).length}function HI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t){Ds(new Gr("platform-logger",e=>new rI(e),"PRIVATE")),Ds(new Gr("heartbeat",e=>new BI(e),"PRIVATE")),pr(Tc,Wd,t),pr(Tc,Wd,"esm2017"),pr("fire-js","")}qI("");function Eu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function _m(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WI=_m,vm=new ro("auth","Firebase",_m());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new mu("@firebase/auth");function zI(t,...e){fa.logLevel<=ye.WARN&&fa.warn(`Auth (${$s}): ${t}`,...e)}function Wo(t,...e){fa.logLevel<=ye.ERROR&&fa.error(`Auth (${$s}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,...e){throw Au(t,...e)}function _n(t,...e){return Au(t,...e)}function ym(t,e,n){const r=Object.assign(Object.assign({},WI()),{[e]:n});return new ro("auth","Firebase",r).create(e,{appName:t.name})}function xn(t){return ym(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Au(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vm.create(t,...e)}function se(t,e,...n){if(!t)throw Au(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wo(e),new Error(e)}function Bn(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function GI(){return Yd()==="http:"||Yd()==="https:"}function Yd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GI()||bT()||"connection"in navigator)?navigator.onLine:!0}function JI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=TT()||CT()}get(){return QI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ZI=new io(3e4,6e4);function br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cr(t,e,n,r,s={}){return Am(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=so(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return wT()||(u.referrerPolicy="no-referrer"),Em.fetch()(await Tm(t,t.config.apiHost,n,l),u)})}async function Am(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YI),e);try{const s=new tw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw No(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw No(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw No(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw No(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ym(t,d,u);on(t,d)}}catch(s){if(s instanceof zn)throw s;on(t,"network-request-failed",{message:String(s)})}}async function oo(t,e,n,r,s={}){const i=await Cr(t,e,n,r,s);return"mfaPendingCredential"in i&&on(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Tm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Tu(t.config,s):`${t.config.apiScheme}://${s}`;return XI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function ew(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),ZI.get())})}}function No(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=_n(t,e,r);return s.customData._tokenResponse=n,s}function Xd(t){return t!==void 0&&t.enterprise!==void 0}class nw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ew(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rw(t,e){return Cr(t,"GET","/v2/recaptchaConfig",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(t,e){return Cr(t,"POST","/v1/accounts:delete",e)}async function pa(t,e){return Cr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iw(t,e=!1){const n=Qt(t),r=await n.getIdToken(e),s=Iu(r);se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ii(ql(s.auth_time)),issuedAtTime:Ii(ql(s.iat)),expirationTime:Ii(ql(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ql(t){return Number(t)*1e3}function Iu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wo("JWT malformed, contained fewer than 3 sections"),null;try{const s=lm(n);return s?JSON.parse(s):(Wo("Failed to decode base64 JWT payload"),null)}catch(s){return Wo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zd(t){const e=Iu(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&ow(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ow({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ii(this.lastLoginAt),this.creationTime=Ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fi(t,pa(n,{idToken:r}));se(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Im(i.providerUserInfo):[],l=cw(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Cc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function lw(t){const e=Qt(t);await ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Im(t){return t.map(e=>{var{providerId:n}=e,r=Eu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(t,e){const n=await Am(t,{},async()=>{const r=so({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Tm(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Em.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hw(t,e){return Cr(t,"POST","/v2/accounts:revokeToken",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=Zd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await uw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Cs;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cs,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Eu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Cc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fi(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iw(this,e)}reload(){return lw(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ga(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(xn(this.auth));const e=await this.getIdToken();return await Fi(this,sw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:B,emailVerified:$,isAnonymous:Z,providerData:ae,stsTokenManager:b}=n;se(B&&b,e,"internal-error");const v=Cs.fromJSON(this.name,b);se(typeof B=="string",e,"internal-error"),er(p,e.name),er(g,e.name),se(typeof $=="boolean",e,"internal-error"),se(typeof Z=="boolean",e,"internal-error"),er(y,e.name),er(P,e.name),er(O,e.name),er(k,e.name),er(F,e.name),er(U,e.name);const _=new Zt({uid:B,auth:e,email:g,emailVerified:$,displayName:p,isAnonymous:Z,photoURL:P,phoneNumber:y,tenantId:O,stsTokenManager:v,createdAt:F,lastLoginAt:U});return ae&&Array.isArray(ae)&&(_.providerData=ae.map(I=>Object.assign({},I))),k&&(_._redirectEventId=k),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Cs;s.updateFromServerResponse(n);const i=new Zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ga(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Im(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Cs;l.updateFromIdToken(r);const c=new Zt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Cc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=new Map;function Mn(t){Bn(t instanceof Function,"Expected a class definition");let e=ef.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ef.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wm.type="NONE";const tf=wm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=zo(this.userKey,s.apiKey,i),this.fullPersistenceKey=zo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await pa(this.auth,{idToken:e}).catch(()=>{});return n?Zt._fromGetAccountInfoResponse(this.auth,n,e):null}return Zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(Mn(tf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Mn(tf);const o=zo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const g=await pa(e,{idToken:d}).catch(()=>{});if(!g)break;p=await Zt._fromGetAccountInfoResponse(e,g,d)}else p=Zt._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Rs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Rs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(km(e))return"Blackberry";if(Dm(e))return"Webos";if(Cm(e))return"Safari";if((e.includes("chrome/")||Rm(e))&&!e.includes("edge/"))return"Chrome";if(Pm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bm(t=It()){return/firefox\//i.test(t)}function Cm(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rm(t=It()){return/crios\//i.test(t)}function Sm(t=It()){return/iemobile/i.test(t)}function Pm(t=It()){return/android/i.test(t)}function km(t=It()){return/blackberry/i.test(t)}function Dm(t=It()){return/webos/i.test(t)}function wu(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dw(t=It()){var e;return wu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fw(){return RT()&&document.documentMode===10}function Om(t=It()){return wu(t)||Pm(t)||Dm(t)||km(t)||/windows phone/i.test(t)||Sm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e=[]){let n;switch(t){case"Browser":n=nf(It());break;case"Worker":n=`${nf(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(t,e={}){return Cr(t,"GET","/v2/passwordPolicy",br(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=6;class _w{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rf(this),this.idTokenSubscription=new rf(this),this.beforeStateQueue=new pw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pa(this,{idToken:e}),r=await Zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ga(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jt(this.app))return Promise.reject(xn(this));const n=e?Qt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jt(this.app)?Promise.reject(xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gw(this),n=new _w(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ro("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zr(t){return Qt(t)}class rf{constructor(e){this.auth=e,this.observer=null,this.addObserver=MT(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yw(t){Ga=t}function Nm(t){return Ga.loadJS(t)}function Ew(){return Ga.recaptchaEnterpriseScript}function Aw(){return Ga.gapiScript}function Tw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Iw{constructor(){this.enterprise=new ww}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ww{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const bw="recaptcha-enterprise",Mm="NO_RECAPTCHA";class Cw{constructor(e){this.type=bw,this.auth=Zr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{rw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new nw(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Xd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Mm)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Iw().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Xd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Ew();c.length!==0&&(c+=l),Nm(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function sf(t,e,n,r=!1,s=!1){const i=new Cw(t);let o;if(s)o=Mm;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Rc(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await sf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await sf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t,e){const n=vu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zr(i,e??{}))return s;on(s,"already-initialized")}return n.initialize({options:e})}function Sw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Pw(t,e,n){const r=Zr(t);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=xm(e),{host:o,port:l}=kw(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(zr(u,r.config.emulator)&&zr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Dw()}function xm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kw(t){const e=xm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:of(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:of(o)}}}function of(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function Ow(t,e){return Cr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw(t,e){return oo(t,"POST","/v1/accounts:signInWithPassword",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(t,e){return oo(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}async function Mw(t,e){return oo(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends bu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ui(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ui(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rc(e,n,"signInWithPassword",Vw);case"emailLink":return Nw(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rc(e,r,"signUpPassword",Ow);case"emailLink":return Mw(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t,e){return oo(t,"POST","/v1/accounts:signInWithIdp",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="http://localhost";class $n extends bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Eu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $n(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ss(e,n)}buildRequest(){const e={requestUri:xw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=so(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kw(t){const e=di(fi(t)).link,n=e?di(fi(e)).deep_link_id:null,r=di(fi(t)).deep_link_id;return(r?di(fi(r)).link:null)||r||n||e||t}class Cu{constructor(e){var n,r,s,i,o,l;const c=di(fi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Lw((s=c.mode)!==null&&s!==void 0?s:null);se(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Kw(e);try{return new Cu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.providerId=js.PROVIDER_ID}static credential(e,n){return Ui._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cu.parseLink(n);return se(r,"argument-error"),Ui._fromEmailAndCode(e,r.code,r.tenantId)}}js.PROVIDER_ID="password";js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Lm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class wi extends Hs{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return se("providerId"in n&&"signInMethod"in n,"argument-error"),$n._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return se(e.idToken||e.accessToken,"argument-error"),$n._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return wi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return wi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:l}=e;if(!r&&!s&&!n&&!i||!l)return null;try{return new wi(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Hs{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Hs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Hs{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Hs{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(t,e){return oo(t,"POST","/v1/accounts:signUp",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Zt._fromIdTokenResponse(e,r,s),o=af(r);return new Qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=af(r);return new Qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function af(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends zn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ma.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ma(e,n,r,s)}}function Km(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ma._fromErrorAndOperation(t,i,e,r):i})}async function Uw(t,e,n=!1){const r=await Fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(t,e,n=!1){const{auth:r}=t;if(jt(r.app))return Promise.reject(xn(r));const s="reauthenticate";try{const i=await Fi(t,Km(r,s,e,t),n);se(i.idToken,r,"internal-error");const o=Iu(i.idToken);se(o,r,"internal-error");const{sub:l}=o;return se(t.uid===l,r,"user-mismatch"),Qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&on(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fm(t,e,n=!1){if(jt(t.app))return Promise.reject(xn(t));const r="signIn",s=await Km(t,r,e),i=await Qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function $w(t,e){return Fm(Zr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Um(t){const e=Zr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jw(t,e,n){if(jt(t.app))return Promise.reject(xn(t));const r=Zr(t),o=await Rc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Fw).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Um(t),c}),l=await Qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Bm(t,e,n){return jt(t.app)?Promise.reject(xn(t)):$w(Qt(t),js.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Um(t),r})}function Hw(t,e,n,r){return Qt(t).onIdTokenChanged(e,n,r)}function qw(t,e,n){return Qt(t).beforeAuthStateChanged(e,n)}function Ww(t){return Qt(t).signOut()}const _a="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_a,"1"),this.storage.removeItem(_a),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=1e3,Gw=10;class jm extends $m{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Om(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Gw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jm.type="LOCAL";const Qw=jm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm extends $m{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hm.type="SESSION";const qm=Hm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Qa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await Jw(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Ru("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function Xw(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function Zw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tb(){return Wm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="firebaseLocalStorageDb",nb=1,va="firebaseLocalStorage",Gm="fbase_key";class ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ja(t,e){return t.transaction([va],e?"readwrite":"readonly").objectStore(va)}function rb(){const t=indexedDB.deleteDatabase(zm);return new ao(t).toPromise()}function Sc(){const t=indexedDB.open(zm,nb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(va,{keyPath:Gm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(va)?e(r):(r.close(),await rb(),e(await Sc()))})})}async function lf(t,e,n){const r=Ja(t,!0).put({[Gm]:e,value:n});return new ao(r).toPromise()}async function sb(t,e){const n=Ja(t,!1).get(e),r=await new ao(n).toPromise();return r===void 0?null:r.value}function cf(t,e){const n=Ja(t,!0).delete(e);return new ao(n).toPromise()}const ib=800,ob=3;class Qm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ob)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qa._getInstance(tb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Zw(),!this.activeServiceWorker)return;this.sender=new Yw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sc();return await lf(e,_a,"1"),await cf(e,_a),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ja(s,!1).getAll();return new ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ib)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qm.type="LOCAL";const ab=Qm;new io(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t,e){return e?Mn(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends bu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cb(t){return Fm(t.auth,new Su(t),t.bypassAuthState)}function ub(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),Bw(n,new Su(t),t.bypassAuthState)}async function hb(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),Uw(n,new Su(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cb;case"linkViaPopup":case"linkViaRedirect":return hb;case"reauthViaPopup":case"reauthViaRedirect":return ub;default:on(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=new io(2e3,1e4);class Es extends Jm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Es.currentPopupAction&&Es.currentPopupAction.cancel(),Es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,db.get())};e()}}Es.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="pendingRedirect",Go=new Map;class pb extends Jm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Go.get(this.auth._key());if(!e){try{const r=await gb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Go.set(this.auth._key(),e)}return this.bypassAuthState||Go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gb(t,e){const n=vb(e),r=_b(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function mb(t,e){Go.set(t._key(),e)}function _b(t){return Mn(t._redirectPersistence)}function vb(t){return zo(fb,t.config.apiKey,t.name)}async function yb(t,e,n=!1){if(jt(t.app))return Promise.reject(xn(t));const r=Zr(t),s=lb(r,e),o=await new pb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=10*60*1e3;class Ab{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ym(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Eb&&this.cachedEventUids.clear(),this.cachedEventUids.has(uf(e))}saveEventToCache(e){this.cachedEventUids.add(uf(e)),this.lastProcessedEventTime=Date.now()}}function uf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ym({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ym(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(t,e={}){return Cr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bb=/^https?/;async function Cb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ib(t);for(const n of e)try{if(Rb(n))return}catch{}on(t,"unauthorized-domain")}function Rb(t){const e=bc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bb.test(n))return!1;if(wb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=new io(3e4,6e4);function hf(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Pb(t){return new Promise((e,n)=>{var r,s,i;function o(){hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hf(),n(_n(t,"network-request-failed"))},timeout:Sb.get()})}if(!((s=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=vn().gapi)===null||i===void 0)&&i.load)o();else{const l=Tw("iframefcb");return vn()[l]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},Nm(`${Aw()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Qo=null,e})}let Qo=null;function kb(t){return Qo=Qo||Pb(t),Qo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=new io(5e3,15e3),Ob="__/auth/iframe",Vb="emulator/auth/iframe",Nb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xb(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tu(e,Vb):`https://${t.config.authDomain}/${Ob}`,r={apiKey:e.apiKey,appName:t.name,v:$s},s=Mb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${so(r).slice(1)}`}async function Lb(t){const e=await kb(t),n=vn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:xb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),l=vn().setTimeout(()=>{i(o)},Db.get());function c(){vn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fb=500,Ub=600,Bb="_blank",$b="http://localhost";class df{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jb(t,e,n,r=Fb,s=Ub){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Kb),{width:r.toString(),height:s.toString(),top:i,left:o}),u=It().toLowerCase();n&&(l=Rm(u)?Bb:n),bm(u)&&(e=e||$b,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[y,P])=>`${g}${y}=${P},`,"");if(dw(u)&&l!=="_self")return Hb(e||"",l),new df(null);const p=window.open(e||"",l,d);se(p,t,"popup-blocked");try{p.focus()}catch{}return new df(p)}function Hb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="__/auth/handler",Wb="emulator/auth/handler",zb=encodeURIComponent("fac");async function ff(t,e,n,r,s,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$s,eventId:s};if(e instanceof Lm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",NT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Hs){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${zb}=${encodeURIComponent(c)}`:"";return`${Gb(t)}?${so(l).slice(1)}${u}`}function Gb({config:t}){return t.emulator?Tu(t,Wb):`https://${t.authDomain}/${qb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="webStorageSupport";class Qb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qm,this._completeRedirectFn=yb,this._overrideRedirectResult=mb}async _openPopup(e,n,r,s){var i;Bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ff(e,n,r,bc(),s);return jb(e,o,Ru())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ff(e,n,r,bc(),s);return Xw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Lb(e),r=new Ab(e);return n.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wl,{type:Wl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Wl];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Om()||Cm()||wu()}}const Jb=Qb;var pf="@firebase/auth",gf="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zb(t){Ds(new Gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vm(t)},u=new vw(r,s,i,c);return Sw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ds(new Gr("auth-internal",e=>{const n=Zr(e.getProvider("auth").getImmediate());return(r=>new Yb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(pf,gf,Xb(t)),pr(pf,gf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=5*60,t0=hm("authIdTokenMaxAge")||e0;let mf=null;const n0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>t0)return;const s=n==null?void 0:n.token;mf!==s&&(mf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jo(t=pm()){const e=vu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Rw(t,{popupRedirectResolver:Jb,persistence:[ab,Qw,qm]}),r=hm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=n0(i.toString());qw(n,o,()=>o(n.currentUser)),Hw(n,l=>o(l))}}const s=cm("auth");return s&&Pw(n,`http://${s}`),n}function r0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}yw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=_n("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",r0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zb("Browser");var _f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gr,Xm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function _(){}_.prototype=v.prototype,b.D=v.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(I,C,w){for(var E=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)E[Se-2]=arguments[Se];return v.prototype[C].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,_){_||(_=0);var I=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)I[C]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(C=0;16>C;++C)I[C]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=b.g[0],_=b.g[1],C=b.g[2];var w=b.g[3],E=v+(w^_&(C^w))+I[0]+3614090360&4294967295;v=_+(E<<7&4294967295|E>>>25),E=w+(C^v&(_^C))+I[1]+3905402710&4294967295,w=v+(E<<12&4294967295|E>>>20),E=C+(_^w&(v^_))+I[2]+606105819&4294967295,C=w+(E<<17&4294967295|E>>>15),E=_+(v^C&(w^v))+I[3]+3250441966&4294967295,_=C+(E<<22&4294967295|E>>>10),E=v+(w^_&(C^w))+I[4]+4118548399&4294967295,v=_+(E<<7&4294967295|E>>>25),E=w+(C^v&(_^C))+I[5]+1200080426&4294967295,w=v+(E<<12&4294967295|E>>>20),E=C+(_^w&(v^_))+I[6]+2821735955&4294967295,C=w+(E<<17&4294967295|E>>>15),E=_+(v^C&(w^v))+I[7]+4249261313&4294967295,_=C+(E<<22&4294967295|E>>>10),E=v+(w^_&(C^w))+I[8]+1770035416&4294967295,v=_+(E<<7&4294967295|E>>>25),E=w+(C^v&(_^C))+I[9]+2336552879&4294967295,w=v+(E<<12&4294967295|E>>>20),E=C+(_^w&(v^_))+I[10]+4294925233&4294967295,C=w+(E<<17&4294967295|E>>>15),E=_+(v^C&(w^v))+I[11]+2304563134&4294967295,_=C+(E<<22&4294967295|E>>>10),E=v+(w^_&(C^w))+I[12]+1804603682&4294967295,v=_+(E<<7&4294967295|E>>>25),E=w+(C^v&(_^C))+I[13]+4254626195&4294967295,w=v+(E<<12&4294967295|E>>>20),E=C+(_^w&(v^_))+I[14]+2792965006&4294967295,C=w+(E<<17&4294967295|E>>>15),E=_+(v^C&(w^v))+I[15]+1236535329&4294967295,_=C+(E<<22&4294967295|E>>>10),E=v+(C^w&(_^C))+I[1]+4129170786&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^C&(v^_))+I[6]+3225465664&4294967295,w=v+(E<<9&4294967295|E>>>23),E=C+(v^_&(w^v))+I[11]+643717713&4294967295,C=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(C^w))+I[0]+3921069994&4294967295,_=C+(E<<20&4294967295|E>>>12),E=v+(C^w&(_^C))+I[5]+3593408605&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^C&(v^_))+I[10]+38016083&4294967295,w=v+(E<<9&4294967295|E>>>23),E=C+(v^_&(w^v))+I[15]+3634488961&4294967295,C=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(C^w))+I[4]+3889429448&4294967295,_=C+(E<<20&4294967295|E>>>12),E=v+(C^w&(_^C))+I[9]+568446438&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^C&(v^_))+I[14]+3275163606&4294967295,w=v+(E<<9&4294967295|E>>>23),E=C+(v^_&(w^v))+I[3]+4107603335&4294967295,C=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(C^w))+I[8]+1163531501&4294967295,_=C+(E<<20&4294967295|E>>>12),E=v+(C^w&(_^C))+I[13]+2850285829&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^C&(v^_))+I[2]+4243563512&4294967295,w=v+(E<<9&4294967295|E>>>23),E=C+(v^_&(w^v))+I[7]+1735328473&4294967295,C=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(C^w))+I[12]+2368359562&4294967295,_=C+(E<<20&4294967295|E>>>12),E=v+(_^C^w)+I[5]+4294588738&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^C)+I[8]+2272392833&4294967295,w=v+(E<<11&4294967295|E>>>21),E=C+(w^v^_)+I[11]+1839030562&4294967295,C=w+(E<<16&4294967295|E>>>16),E=_+(C^w^v)+I[14]+4259657740&4294967295,_=C+(E<<23&4294967295|E>>>9),E=v+(_^C^w)+I[1]+2763975236&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^C)+I[4]+1272893353&4294967295,w=v+(E<<11&4294967295|E>>>21),E=C+(w^v^_)+I[7]+4139469664&4294967295,C=w+(E<<16&4294967295|E>>>16),E=_+(C^w^v)+I[10]+3200236656&4294967295,_=C+(E<<23&4294967295|E>>>9),E=v+(_^C^w)+I[13]+681279174&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^C)+I[0]+3936430074&4294967295,w=v+(E<<11&4294967295|E>>>21),E=C+(w^v^_)+I[3]+3572445317&4294967295,C=w+(E<<16&4294967295|E>>>16),E=_+(C^w^v)+I[6]+76029189&4294967295,_=C+(E<<23&4294967295|E>>>9),E=v+(_^C^w)+I[9]+3654602809&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^C)+I[12]+3873151461&4294967295,w=v+(E<<11&4294967295|E>>>21),E=C+(w^v^_)+I[15]+530742520&4294967295,C=w+(E<<16&4294967295|E>>>16),E=_+(C^w^v)+I[2]+3299628645&4294967295,_=C+(E<<23&4294967295|E>>>9),E=v+(C^(_|~w))+I[0]+4096336452&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~C))+I[7]+1126891415&4294967295,w=v+(E<<10&4294967295|E>>>22),E=C+(v^(w|~_))+I[14]+2878612391&4294967295,C=w+(E<<15&4294967295|E>>>17),E=_+(w^(C|~v))+I[5]+4237533241&4294967295,_=C+(E<<21&4294967295|E>>>11),E=v+(C^(_|~w))+I[12]+1700485571&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~C))+I[3]+2399980690&4294967295,w=v+(E<<10&4294967295|E>>>22),E=C+(v^(w|~_))+I[10]+4293915773&4294967295,C=w+(E<<15&4294967295|E>>>17),E=_+(w^(C|~v))+I[1]+2240044497&4294967295,_=C+(E<<21&4294967295|E>>>11),E=v+(C^(_|~w))+I[8]+1873313359&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~C))+I[15]+4264355552&4294967295,w=v+(E<<10&4294967295|E>>>22),E=C+(v^(w|~_))+I[6]+2734768916&4294967295,C=w+(E<<15&4294967295|E>>>17),E=_+(w^(C|~v))+I[13]+1309151649&4294967295,_=C+(E<<21&4294967295|E>>>11),E=v+(C^(_|~w))+I[4]+4149444226&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~C))+I[11]+3174756917&4294967295,w=v+(E<<10&4294967295|E>>>22),E=C+(v^(w|~_))+I[2]+718787259&4294967295,C=w+(E<<15&4294967295|E>>>17),E=_+(w^(C|~v))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(C+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+C&4294967295,b.g[3]=b.g[3]+w&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var _=v-this.blockSize,I=this.B,C=this.h,w=0;w<v;){if(C==0)for(;w<=_;)s(this,b,w),w+=this.blockSize;if(typeof b=="string"){for(;w<v;)if(I[C++]=b.charCodeAt(w++),C==this.blockSize){s(this,I),C=0;break}}else for(;w<v;)if(I[C++]=b[w++],C==this.blockSize){s(this,I),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var _=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=_&255,_/=256;for(this.u(b),b=Array(16),v=_=0;4>v;++v)for(var I=0;32>I;I+=8)b[_++]=this.g[v]>>>I&255;return b};function i(b,v){var _=l;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=v(b)}function o(b,v){this.h=v;for(var _=[],I=!0,C=b.length-1;0<=C;C--){var w=b[C]|0;I&&w==v||(_[C]=w,I=!1)}this.g=_}var l={};function c(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return k(u(-b));for(var v=[],_=1,I=0;b>=_;I++)v[I]=b/_|0,_*=4294967296;return new o(v,0)}function d(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return k(d(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(v,8)),I=p,C=0;C<b.length;C+=8){var w=Math.min(8,b.length-C),E=parseInt(b.substring(C,C+w),v);8>w?(w=u(Math.pow(v,w)),I=I.j(w).add(u(E))):(I=I.j(_),I=I.add(u(E)))}return I}var p=c(0),g=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-k(this).m();for(var b=0,v=1,_=0;_<this.g.length;_++){var I=this.i(_);b+=(0<=I?I:4294967296+I)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(P(this))return"0";if(O(this))return"-"+k(this).toString(b);for(var v=u(Math.pow(b,6)),_=this,I="";;){var C=$(_,v).g;_=F(_,C.j(v));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=C,P(_))return w+I;for(;6>w.length;)w="0"+w;I=w+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function P(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function O(b){return b.h==-1}t.l=function(b){return b=F(this,b),O(b)?-1:P(b)?0:1};function k(b){for(var v=b.g.length,_=[],I=0;I<v;I++)_[I]=~b.g[I];return new o(_,~b.h).add(g)}t.abs=function(){return O(this)?k(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),_=[],I=0,C=0;C<=v;C++){var w=I+(this.i(C)&65535)+(b.i(C)&65535),E=(w>>>16)+(this.i(C)>>>16)+(b.i(C)>>>16);I=E>>>16,w&=65535,E&=65535,_[C]=E<<16|w}return new o(_,_[_.length-1]&-2147483648?-1:0)};function F(b,v){return b.add(k(v))}t.j=function(b){if(P(this)||P(b))return p;if(O(this))return O(b)?k(this).j(k(b)):k(k(this).j(b));if(O(b))return k(this.j(k(b)));if(0>this.l(y)&&0>b.l(y))return u(this.m()*b.m());for(var v=this.g.length+b.g.length,_=[],I=0;I<2*v;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var C=0;C<b.g.length;C++){var w=this.i(I)>>>16,E=this.i(I)&65535,Se=b.i(C)>>>16,We=b.i(C)&65535;_[2*I+2*C]+=E*We,U(_,2*I+2*C),_[2*I+2*C+1]+=w*We,U(_,2*I+2*C+1),_[2*I+2*C+1]+=E*Se,U(_,2*I+2*C+1),_[2*I+2*C+2]+=w*Se,U(_,2*I+2*C+2)}for(I=0;I<v;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=v;I<2*v;I++)_[I]=0;return new o(_,0)};function U(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function B(b,v){this.g=b,this.h=v}function $(b,v){if(P(v))throw Error("division by zero");if(P(b))return new B(p,p);if(O(b))return v=$(k(b),v),new B(k(v.g),k(v.h));if(O(v))return v=$(b,k(v)),new B(k(v.g),v.h);if(30<b.g.length){if(O(b)||O(v))throw Error("slowDivide_ only works with positive integers.");for(var _=g,I=v;0>=I.l(b);)_=Z(_),I=Z(I);var C=ae(_,1),w=ae(I,1);for(I=ae(I,2),_=ae(_,2);!P(I);){var E=w.add(I);0>=E.l(b)&&(C=C.add(_),w=E),I=ae(I,1),_=ae(_,1)}return v=F(b,C.j(v)),new B(C,v)}for(C=p;0<=b.l(v);){for(_=Math.max(1,Math.floor(b.m()/v.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),w=u(_),E=w.j(v);O(E)||0<E.l(b);)_-=I,w=u(_),E=w.j(v);P(w)&&(w=g),C=C.add(w),b=F(b,E)}return new B(C,b)}t.A=function(b){return $(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)&b.i(I);return new o(_,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)|b.i(I);return new o(_,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)^b.i(I);return new o(_,this.h^b.h)};function Z(b){for(var v=b.g.length+1,_=[],I=0;I<v;I++)_[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(_,b.h)}function ae(b,v){var _=v>>5;v%=32;for(var I=b.g.length-_,C=[],w=0;w<I;w++)C[w]=0<v?b.i(w+_)>>>v|b.i(w+_+1)<<32-v:b.i(w+_);return new o(C,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Xm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,gr=o}).apply(typeof _f<"u"?_f:typeof self<"u"?self:typeof window<"u"?window:{});var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zm,pi,e_,Yo,Pc,t_,n_,r_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mo=="object"&&Mo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in f))break e;f=f[S]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,m=!1,S={next:function(){if(!m&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),a.apply(h,S)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function y(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function P(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,S,D){for(var z=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)z[Ve-2]=arguments[Ve];return h.prototype[S].apply(m,z)}}function O(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function k(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const S=a.length||0,D=m.length||0;a.length=S+D;for(let z=0;z<D;z++)a[S+z]=m[z]}else a.push(m)}}class F{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function U(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var Z=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function ae(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(f in m)a[f]=m[f];for(let D=0;D<_.length;D++)f=_[D],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function C(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function w(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Dt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Se{constructor(){this.h=this.g=null}add(h,f){const m=We.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var We=new F(()=>new Oe,a=>a.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let he,ve=!1,Dt=new Se,Jt=()=>{const a=l.Promise.resolve(void 0);he=()=>{a.then(Kt)}};var Kt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){w(f)}var h=We;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ve=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Gn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function cn(a,h){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{$(h.nodeName);var S=!0;break e}catch{}S=!1}S||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:St[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&cn.aa.h.call(this)}}P(cn,Ue);var St={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(a,h,f,m,S){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=S,this.key=++Y,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ce(a){this.src=a,this.g={},this.h=0}Ce.prototype.add=function(a,h,f,m,S){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=T(a,h,m,S);return-1<z?(h=a[z],f||(h.fa=!1)):(h=new Q(h,this.src,D,!!m,S),h.fa=f,a.push(h)),h};function A(a,h){var f=h.type;if(f in a.g){var m=a.g[f],S=Array.prototype.indexOf.call(m,h,void 0),D;(D=0<=S)&&Array.prototype.splice.call(m,S,1),D&&(ee(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function T(a,h,f,m){for(var S=0;S<a.length;++S){var D=a[S];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==m)return S}return-1}var R="closure_lm_"+(1e6*Math.random()|0),N={};function L(a,h,f,m,S){if(Array.isArray(h)){for(var D=0;D<h.length;D++)L(a,h[D],f,m,S);return null}return f=ue(f),a&&a[V]?a.K(h,f,u(m)?!!m.capture:!1,S):M(a,h,f,!1,m,S)}function M(a,h,f,m,S,D){if(!h)throw Error("Invalid event type");var z=u(S)?!!S.capture:!!S,Ve=J(a);if(Ve||(a[R]=Ve=new Ce(a)),f=Ve.add(h,f,m,z,D),f.proxy)return f;if(m=G(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Gn||(S=z),S===void 0&&(S=!1),a.addEventListener(h.toString(),m,S);else if(a.attachEvent)a.attachEvent(j(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function a(f){return h.call(a.src,a.listener,f)}const h=ne;return a}function W(a,h,f,m,S){if(Array.isArray(h))for(var D=0;D<h.length;D++)W(a,h[D],f,m,S);else m=u(m)?!!m.capture:!!m,f=ue(f),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=T(D,f,m,S),-1<f&&(ee(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=J(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,f,m,S)),(f=-1<a?h[a]:null)&&q(f))}function q(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])A(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(j(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=J(h))?(A(f,a),f.h==0&&(f.src=null,h[R]=null)):ee(a)}}}function j(a){return a in N?N[a]:N[a]="on"+a}function ne(a,h){if(a.da)a=!0;else{h=new cn(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&q(a),a=f.call(m,h)}return a}function J(a){return a=a[R],a instanceof Ce?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function re(){Fe.call(this),this.i=new Ce(this),this.M=this,this.F=null}P(re,Fe),re.prototype[V]=!0,re.prototype.removeEventListener=function(a,h,f,m){W(this,a,h,f,m)};function me(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new Ue(h,a);else if(h instanceof Ue)h.target=h.target||a;else{var S=h;h=new Ue(m,a),I(h,S)}if(S=!0,f)for(var D=f.length-1;0<=D;D--){var z=h.g=f[D];S=Te(z,m,!0,h)&&S}if(z=h.g=a,S=Te(z,m,!0,h)&&S,S=Te(z,m,!1,h)&&S,f)for(D=0;D<f.length;D++)z=h.g=f[D],S=Te(z,m,!1,h)&&S}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)ee(f[m]);delete a.g[h],a.h--}}this.F=null},re.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},re.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function Te(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var S=!0,D=0;D<h.length;++D){var z=h[D];if(z&&!z.da&&z.capture==f){var Ve=z.listener,ct=z.ha||z.src;z.fa&&A(a.i,z),S=Ve.call(ct,m)!==!1&&S}}return S&&!m.defaultPrevented}function ft(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function at(a){a.g=ft(()=>{a.g=null,a.i&&(a.i=!1,at(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ft extends Fe{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:at(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pt(a){Fe.call(this),this.h=a,this.g={}}P(pt,Fe);var Qn=[];function Qs(a){ae(a.g,function(h,f){this.g.hasOwnProperty(f)&&q(h)},a),a.g={}}pt.prototype.N=function(){pt.aa.N.call(this),Qs(this)},pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lt=l.JSON.stringify,Ut=l.JSON.parse,po=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function pl(){}pl.prototype.h=null;function dh(a){return a.h||(a.h=a.i())}function fh(){}var Js={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gl(){Ue.call(this,"d")}P(gl,Ue);function ml(){Ue.call(this,"c")}P(ml,Ue);var Rr={},ph=null;function go(){return ph=ph||new re}Rr.La="serverreachability";function gh(a){Ue.call(this,Rr.La,a)}P(gh,Ue);function Ys(a){const h=go();me(h,new gh(h))}Rr.STAT_EVENT="statevent";function mh(a,h){Ue.call(this,Rr.STAT_EVENT,a),this.stat=h}P(mh,Ue);function wt(a){const h=go();me(h,new mh(h,a))}Rr.Ma="timingevent";function _h(a,h){Ue.call(this,Rr.Ma,a),this.size=h}P(_h,Ue);function Xs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Zs(){this.g=!0}Zs.prototype.xa=function(){this.g=!1};function sy(a,h,f,m,S,D){a.info(function(){if(a.g)if(D)for(var z="",Ve=D.split("&"),ct=0;ct<Ve.length;ct++){var Re=Ve[ct].split("=");if(1<Re.length){var gt=Re[0];Re=Re[1];var mt=gt.split("_");z=2<=mt.length&&mt[1]=="type"?z+(gt+"="+Re+"&"):z+(gt+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+h+`
`+f+`
`+z})}function iy(a,h,f,m,S,D,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+h+`
`+f+`
`+D+" "+z})}function is(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ay(a,f)+(m?" "+m:"")})}function oy(a,h){a.info(function(){return"TIMEOUT: "+h})}Zs.prototype.info=function(){};function ay(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var D=S[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<S.length;z++)S[z]=""}}}}return lt(f)}catch{return h}}var mo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_l;function _o(){}P(_o,pl),_o.prototype.g=function(){return new XMLHttpRequest},_o.prototype.i=function(){return{}},_l=new _o;function Jn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yh}function yh(){this.i=null,this.g="",this.h=!1}var Eh={},vl={};function yl(a,h,f){a.L=1,a.v=Ao(wn(h)),a.m=f,a.P=!0,Ah(a,null)}function Ah(a,h){a.F=Date.now(),vo(a),a.A=wn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Mh(f.i,"t",m),a.C=0,f=a.j.J,a.h=new yh,a.g=Zh(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Ft(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(Qn[0]=S.toString()),S=Qn);for(var D=0;D<S.length;D++){var z=L(f,S[D],m||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ys(),sy(a.i,a.u,a.A,a.l,a.R,a.m)}Jn.prototype.ca=function(a){a=a.target;const h=this.M;h&&bn(a)==3?h.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const mt=bn(this.g);var h=this.g.Ba();const ls=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||$h(this.g)))){this.J||mt!=4||h==7||(h==8||0>=ls?Ys(3):Ys(2)),El(this);var f=this.g.Z();this.X=f;t:if(Th(this)){var m=$h(this.g);a="";var S=m.length,D=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sr(this),ei(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<S;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(D&&h==S-1)});m.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,iy(this.i,this.u,this.A,this.l,this.R,mt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,ct=this.g;if((Ve=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Ve)){var Re=Ve;break t}}Re=null}if(f=Re)is(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Al(this,f);else{this.o=!1,this.s=3,wt(12),Sr(this),ei(this);break e}}if(this.P){f=!0;let Yt;for(;!this.J&&this.C<z.length;)if(Yt=ly(this,z),Yt==vl){mt==4&&(this.s=4,wt(14),f=!1),is(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Eh){this.s=4,wt(15),is(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else is(this.i,this.l,Yt,null),Al(this,Yt);if(Th(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||z.length!=0||this.h.h||(this.s=1,wt(16),f=!1),this.o=this.o&&f,!f)is(this.i,this.l,z,"[Invalid Chunked Response]"),Sr(this),ei(this);else if(0<z.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Rl(gt),gt.M=!0,wt(11))}}else is(this.i,this.l,z,null),Al(this,z);mt==4&&Sr(this),this.o&&!this.J&&(mt==4?Qh(this.j,this):(this.o=!1,vo(this)))}else by(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),Sr(this),ei(this)}}}catch{}finally{}};function Th(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ly(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?vl:(f=Number(h.substring(f,m)),isNaN(f)?Eh:(m+=1,m+f>h.length?vl:(h=h.slice(m,m+f),a.C=m+f,h)))}Jn.prototype.cancel=function(){this.J=!0,Sr(this)};function vo(a){a.S=Date.now()+a.I,Ih(a,a.I)}function Ih(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Xs(g(a.ba,a),h)}function El(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(oy(this.i,this.A),this.L!=2&&(Ys(),wt(17)),Sr(this),this.s=2,ei(this)):Ih(this,this.S-a)};function ei(a){a.j.G==0||a.J||Qh(a.j,a)}function Sr(a){El(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Qs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Al(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Tl(f.h,a))){if(!a.K&&Tl(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ro(f),bo(f);else break e;Cl(f),wt(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Xs(g(f.Za,f),6e3));if(1>=Ch(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else kr(f,11)}else if((a.K||f.g==a)&&Ro(f),!U(h))for(S=f.Da.g.parse(h),h=0;h<S.length;h++){let Re=S[h];if(f.T=Re[0],Re=Re[1],f.G==2)if(Re[0]=="c"){f.K=Re[1],f.ia=Re[2];const gt=Re[3];gt!=null&&(f.la=gt,f.j.info("VER="+f.la));const mt=Re[4];mt!=null&&(f.Aa=mt,f.j.info("SVER="+f.Aa));const ls=Re[5];ls!=null&&typeof ls=="number"&&0<ls&&(m=1.5*ls,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Yt=a.g;if(Yt){const Po=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Po){var D=m.h;D.g||Po.indexOf("spdy")==-1&&Po.indexOf("quic")==-1&&Po.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Il(D,D.h),D.h=null))}if(m.D){const Sl=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Sl&&(m.ya=Sl,xe(m.I,m.D,Sl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var z=a;if(m.qa=Xh(m,m.J?m.ia:null,m.W),z.K){Rh(m.h,z);var Ve=z,ct=m.L;ct&&(Ve.I=ct),Ve.B&&(El(Ve),vo(Ve)),m.g=z}else zh(m);0<f.i.length&&Co(f)}else Re[0]!="stop"&&Re[0]!="close"||kr(f,7);else f.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?kr(f,7):bl(f):Re[0]!="noop"&&f.l&&f.l.ta(Re),f.v=0)}}Ys(4)}catch{}}var cy=class{constructor(a,h){this.g=a,this.map=h}};function wh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ch(a){return a.h?1:a.g?a.g.size:0}function Tl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Il(a,h){a.g?a.g.add(h):a.h=h}function Rh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}wh.prototype.cancel=function(){if(this.i=Sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Sh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return O(a.i)}function uy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function hy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function Ph(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=hy(a),m=uy(a),S=m.length,D=0;D<S;D++)h.call(void 0,m[D],f&&f[D],a)}var kh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dy(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),S=null;if(0<=m){var D=a[f].substring(0,m);S=a[f].substring(m+1)}else D=a[f];h(D,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Pr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Pr){this.h=a.h,yo(this,a.j),this.o=a.o,this.g=a.g,Eo(this,a.s),this.l=a.l;var h=a.i,f=new ri;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Dh(this,f),this.m=a.m}else a&&(h=String(a).match(kh))?(this.h=!1,yo(this,h[1]||"",!0),this.o=ti(h[2]||""),this.g=ti(h[3]||"",!0),Eo(this,h[4]),this.l=ti(h[5]||"",!0),Dh(this,h[6]||"",!0),this.m=ti(h[7]||"")):(this.h=!1,this.i=new ri(null,this.h))}Pr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ni(h,Oh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ni(h,Oh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ni(f,f.charAt(0)=="/"?gy:py,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ni(f,_y)),a.join("")};function wn(a){return new Pr(a)}function yo(a,h,f){a.j=f?ti(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Eo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Dh(a,h,f){h instanceof ri?(a.i=h,vy(a.i,a.h)):(f||(h=ni(h,my)),a.i=new ri(h,a.h))}function xe(a,h,f){a.i.set(h,f)}function Ao(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ti(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ni(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,fy),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Oh=/[#\/\?@]/g,py=/[#\?:]/g,gy=/[#\?]/g,my=/[#\?@]/g,_y=/#/g;function ri(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Yn(a){a.g||(a.g=new Map,a.h=0,a.i&&dy(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ri.prototype,t.add=function(a,h){Yn(this),this.i=null,a=os(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Vh(a,h){Yn(a),h=os(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Nh(a,h){return Yn(a),h=os(a,h),a.g.has(h)}t.forEach=function(a,h){Yn(this),this.g.forEach(function(f,m){f.forEach(function(S){a.call(h,S,m,this)},this)},this)},t.na=function(){Yn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const S=a[m];for(let D=0;D<S.length;D++)f.push(h[m])}return f},t.V=function(a){Yn(this);let h=[];if(typeof a=="string")Nh(this,a)&&(h=h.concat(this.g.get(os(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Yn(this),this.i=null,a=os(this,a),Nh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Mh(a,h,f){Vh(a,h),0<f.length&&(a.i=null,a.g.set(os(a,h),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const D=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var S=D;z[m]!==""&&(S+="="+encodeURIComponent(String(z[m]))),a.push(S)}}return this.i=a.join("&")};function os(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function vy(a,h){h&&!a.j&&(Yn(a),a.i=null,a.g.forEach(function(f,m){var S=m.toLowerCase();m!=S&&(Vh(this,m),Mh(this,S,f))},a)),a.j=h}function yy(a,h){const f=new Zs;if(l.Image){const m=new Image;m.onload=y(Xn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=y(Xn,f,"TestLoadImage: error",!1,h,m),m.onabort=y(Xn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=y(Xn,f,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Ey(a,h){const f=new Zs,m=new AbortController,S=setTimeout(()=>{m.abort(),Xn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(S),D.ok?Xn(f,"TestPingServer: ok",!0,h):Xn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(S),Xn(f,"TestPingServer: error",!1,h)})}function Xn(a,h,f,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(f)}catch{}}function Ay(){this.g=new po}function Ty(a,h,f){const m=f||"";try{Ph(a,function(S,D){let z=S;u(S)&&(z=lt(S)),h.push(m+D+"="+encodeURIComponent(z))})}catch(S){throw h.push(m+"type="+encodeURIComponent("_badmap")),S}}function To(a){this.l=a.Ub||null,this.j=a.eb||!1}P(To,pl),To.prototype.g=function(){return new Io(this.l,this.j)},To.prototype.i=function(a){return function(){return a}}({});function Io(a,h){re.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Io,re),t=Io.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ii(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,si(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?si(this):ii(this),this.readyState==3&&xh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,si(this))},t.Qa=function(a){this.g&&(this.response=a,si(this))},t.ga=function(){this.g&&si(this)};function si(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ii(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ii(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Lh(a){let h="";return ae(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function wl(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=Lh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):xe(a,h,f))}function $e(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P($e,re);var Iy=/^https?$/i,wy=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_l.g(),this.v=this.o?dh(this.o):dh(_l),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Kh(this,D);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)f.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())f.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),S=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(wy,h,void 0))||m||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of f)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bh(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Kh(this,D)}};function Kh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Fh(a),wo(a)}function Fh(a){a.A||(a.A=!0,me(a,"complete"),me(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,me(this,"complete"),me(this,"abort"),wo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wo(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Uh(this):this.bb())},t.bb=function(){Uh(this)};function Uh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||bn(a)!=4||a.Z()!=2)){if(a.u&&bn(a)==4)ft(a.Ea,0,a);else if(me(a,"readystatechange"),bn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=z===0){var S=String(a.D).match(kh)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),m=!Iy.test(S?S.toLowerCase():"")}f=m}if(f)me(a,"complete"),me(a,"success");else{a.m=6;try{var D=2<bn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Fh(a)}}finally{wo(a)}}}}function wo(a,h){if(a.g){Bh(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||me(a,"ready");try{f.onreadystatechange=m}catch{}}}function Bh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function bn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ut(h)}};function $h(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function by(a){const h={};a=(a.g&&2<=bn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(U(a[m]))continue;var f=C(a[m]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[S]||[];h[S]=D,D.push(f)}b(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function oi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function jh(a){this.Aa=0,this.i=[],this.j=new Zs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=oi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=oi("baseRetryDelayMs",5e3,a),this.cb=oi("retryDelaySeedMs",1e4,a),this.Wa=oi("forwardChannelMaxRetries",2,a),this.wa=oi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new wh(a&&a.concurrentRequestLimit),this.Da=new Ay,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jh.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,m){wt(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Xh(this,null,this.W),Co(this)};function bl(a){if(Hh(a),a.G==3){var h=a.U++,f=wn(a.I);if(xe(f,"SID",a.K),xe(f,"RID",h),xe(f,"TYPE","terminate"),ai(a,f),h=new Jn(a,a.j,h),h.L=2,h.v=Ao(wn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Zh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),vo(h)}Yh(a)}function bo(a){a.g&&(Rl(a),a.g.cancel(),a.g=null)}function Hh(a){bo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ro(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Co(a){if(!bh(a.h)&&!a.s){a.s=!0;var h=a.Ga;he||Jt(),ve||(he(),ve=!0),Dt.add(h,a),a.B=0}}function Cy(a,h){return Ch(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Xs(g(a.Ga,a,h),Jh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new Jn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(S.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Wh(this,S,h),f=wn(this.I),xe(f,"RID",a),xe(f,"CVER",22),this.D&&xe(f,"X-HTTP-Session-Id",this.D),ai(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Lh(D)))+"&"+h:this.m&&wl(f,this.m,D)),Il(this.h,S),this.Ua&&xe(f,"TYPE","init"),this.P?(xe(f,"$req",h),xe(f,"SID","null"),S.T=!0,yl(S,f,null)):yl(S,f,h),this.G=2}}else this.G==3&&(a?qh(this,a):this.i.length==0||bh(this.h)||qh(this))};function qh(a,h){var f;h?f=h.l:f=a.U++;const m=wn(a.I);xe(m,"SID",a.K),xe(m,"RID",f),xe(m,"AID",a.T),ai(a,m),a.m&&a.o&&wl(m,a.m,a.o),f=new Jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Wh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Il(a.h,f),yl(f,m,h)}function ai(a,h){a.H&&ae(a.H,function(f,m){xe(h,m,f)}),a.l&&Ph({},function(f,m){xe(h,m,f)})}function Wh(a,h,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var S=a.i;let D=-1;for(;;){const z=["count="+f];D==-1?0<f?(D=S[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let Ve=!0;for(let ct=0;ct<f;ct++){let Re=S[ct].g;const gt=S[ct].map;if(Re-=D,0>Re)D=Math.max(0,S[ct].g-100),Ve=!1;else try{Ty(gt,z,"req"+Re+"_")}catch{m&&m(gt)}}if(Ve){m=z.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function zh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;he||Jt(),ve||(he(),ve=!0),Dt.add(h,a),a.v=0}}function Cl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Xs(g(a.Fa,a),Jh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Gh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Xs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),bo(this),Gh(this))};function Rl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Gh(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wn(a.qa);xe(h,"RID","rpc"),xe(h,"SID",a.K),xe(h,"AID",a.T),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(h,"TO",a.ja),xe(h,"TYPE","xmlhttp"),ai(a,h),a.m&&a.o&&wl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ao(wn(h)),f.m=null,f.P=!0,Ah(f,a)}t.Za=function(){this.C!=null&&(this.C=null,bo(this),Cl(this),wt(19))};function Ro(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Qh(a,h){var f=null;if(a.g==h){Ro(a),Rl(a),a.g=null;var m=2}else if(Tl(a.h,h))f=h.D,Rh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var S=a.B;m=go(),me(m,new _h(m,f)),Co(a)}else zh(a);else if(S=h.s,S==3||S==0&&0<h.X||!(m==1&&Cy(a,h)||m==2&&Cl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),S){case 1:kr(a,5);break;case 4:kr(a,10);break;case 3:kr(a,6);break;default:kr(a,2)}}}function Jh(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function kr(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),m=a.Xa;const S=!m;m=new Pr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||yo(m,"https"),Ao(m),S?yy(m.toString(),f):Ey(m.toString(),f)}else wt(2);a.G=0,a.l&&a.l.sa(h),Yh(a),Hh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function Yh(a){if(a.G=0,a.ka=[],a.l){const h=Sh(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ka,h),k(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Xh(a,h,f){var m=f instanceof Pr?wn(f):new Pr(f);if(m.g!="")h&&(m.g=h+"."+m.g),Eo(m,m.s);else{var S=l.location;m=S.protocol,h=h?h+"."+S.hostname:S.hostname,S=+S.port;var D=new Pr(null);m&&yo(D,m),h&&(D.g=h),S&&Eo(D,S),f&&(D.l=f),m=D}return f=a.D,h=a.ya,f&&h&&xe(m,f,h),xe(m,"VER",a.la),ai(a,m),m}function Zh(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new $e(new To({eb:f})):new $e(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ed(){}t=ed.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function So(){}So.prototype.g=function(a,h){return new Ot(a,h)};function Ot(a,h){re.call(this),this.g=new jh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!U(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!U(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new as(this)}P(Ot,re),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){bl(this.g)},Ot.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=lt(a),a=f);h.i.push(new cy(h.Ya++,a)),h.G==3&&Co(h)},Ot.prototype.N=function(){this.g.l=null,delete this.j,bl(this.g),delete this.g,Ot.aa.N.call(this)};function td(a){gl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(td,gl);function nd(){ml.call(this),this.status=1}P(nd,ml);function as(a){this.g=a}P(as,ed),as.prototype.ua=function(){me(this.g,"a")},as.prototype.ta=function(a){me(this.g,new td(a))},as.prototype.sa=function(a){me(this.g,new nd)},as.prototype.ra=function(){me(this.g,"b")},So.prototype.createWebChannel=So.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,r_=function(){return new So},n_=function(){return go()},t_=Rr,Pc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mo.NO_ERROR=0,mo.TIMEOUT=8,mo.HTTP_ERROR=6,Yo=mo,vh.COMPLETE="complete",e_=vh,fh.EventType=Js,Js.OPEN="a",Js.CLOSE="b",Js.ERROR="c",Js.MESSAGE="d",re.prototype.listen=re.prototype.K,pi=fh,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,Zm=$e}).apply(typeof Mo<"u"?Mo:typeof self<"u"?self:typeof window<"u"?window:{});const vf="@firebase/firestore",yf="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new mu("@firebase/firestore");function gs(){return Jr.logLevel}function X(t,...e){if(Jr.logLevel<=ye.DEBUG){const n=e.map(Pu);Jr.debug(`Firestore (${qs}): ${t}`,...n)}}function jn(t,...e){if(Jr.logLevel<=ye.ERROR){const n=e.map(Pu);Jr.error(`Firestore (${qs}): ${t}`,...n)}}function Os(t,...e){if(Jr.logLevel<=ye.WARN){const n=e.map(Pu);Jr.warn(`Firestore (${qs}): ${t}`,...n)}}function Pu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t="Unexpected state"){const e=`FIRESTORE (${qs}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function De(t,e){t||de()}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class i0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class o0{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new s_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new vt(e)}}class a0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class l0{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new a0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ef{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c0{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,jt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){De(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ef(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new Ef(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=u0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function kc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return _e(r,s);{const i=i_(),o=h0(i.encode(Af(t,n)),i.encode(Af(e,n)));return o!==0?o:_e(r,s)}}n+=r>65535?2:1}return _e(t.length,e.length)}function Af(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function h0(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return _e(t[n],e[n]);return _e(t.length,e.length)}function Vs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=-62135596800,If=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*If);return new tt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Tf)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/If}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Tf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new tt(0,0))}static max(){return new fe(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="__name__";class fn{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=fn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return _e(e.length,n.length)}static compareSegments(e,n){const r=fn.isNumericId(e),s=fn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?fn.extractNumericId(e).compare(fn.extractNumericId(n)):kc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gr.fromString(e.substring(4,e.length-2))}}class He extends fn{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const d0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends fn{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return d0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wf}static keyField(){return new ht([wf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ie(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ie(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(He.fromString(e))}static fromName(e){return new oe(He.fromString(e).popFirst(5))}static empty(){return new oe(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new He(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=-1;function f0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new _r(s,oe.empty(),e)}function p0(t){return new _r(t.readTime,t.key,Bi)}class _r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _r(fe.min(),oe.empty(),Bi)}static max(){return new _r(fe.max(),oe.empty(),Bi)}}function g0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==m0)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new x((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new x((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function v0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ya.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=-1;function Xa(t){return t==null}function ya(t){return t===0&&1/t==-1/0}function y0(t){return typeof t=="number"&&Number.isInteger(t)&&!ya(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="";function E0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=bf(e)),e=A0(t.get(n),e);return bf(e)}function A0(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case a_:n+="";break;default:n+=i}}return n}function bf(t){return t+a_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function l_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xo(this.root,e,this.comparator,!0)}}class xo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rf(this.data.getIterator())}getIteratorFrom(e){return new Rf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class Rf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new en([])}unionWith(e){let n=new nt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new c_("Invalid base64 string: "+i):i}}(e);return new dt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const T0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(De(!!t),typeof t=="string"){let e=0;const n=T0.exec(t);if(De(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="server_timestamp",h_="__type__",d_="__previous_value__",f_="__local_write_time__";function Du(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[h_])===null||n===void 0?void 0:n.stringValue)===u_}function Za(t){const e=t.mapValue.fields[d_];return Du(e)?Za(e):e}function $i(t){const e=vr(t.mapValue.fields[f_].timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}const Ea="(default)";class ji{constructor(e,n){this.projectId=e,this.database=n||Ea}static empty(){return new ji("","")}get isDefaultDatabase(){return this.database===Ea}isEqual(e){return e instanceof ji&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="__type__",w0="__max__",Lo={mapValue:{}},g_="__vector__",Aa="value";function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Du(t)?4:C0(t)?9007199254740991:b0(t)?10:11:de()}function Tn(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $i(t).isEqual($i(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=vr(s.timestampValue),l=vr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return yr(s.bytesValue).isEqual(yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),l=ze(i.doubleValue);return o===l?ya(o)===ya(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Vs(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Cf(o)!==Cf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Tn(o[c],l[c])))return!1;return!0}(t,e);default:return de()}}function Hi(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function Ns(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ze(i.integerValue||i.doubleValue),c=ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Sf(t.timestampValue,e.timestampValue);case 4:return Sf($i(t),$i(e));case 5:return kc(t.stringValue,e.stringValue);case 6:return function(i,o){const l=yr(i),c=yr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=_e(l[u],c[u]);if(d!==0)return d}return _e(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=_e(ze(i.latitude),ze(o.latitude));return l!==0?l:_e(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Pf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},g=o.fields||{},y=(l=p[Aa])===null||l===void 0?void 0:l.arrayValue,P=(c=g[Aa])===null||c===void 0?void 0:c.arrayValue,O=_e(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:Pf(y,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Lo.mapValue&&o===Lo.mapValue)return 0;if(i===Lo.mapValue)return 1;if(o===Lo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=kc(c[p],d[p]);if(g!==0)return g;const y=Ns(l[c[p]],u[d[p]]);if(y!==0)return y}return _e(c.length,d.length)}(t.mapValue,e.mapValue);default:throw de()}}function Sf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=vr(t),r=vr(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function Pf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ns(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function Ms(t){return Dc(t)}function Dc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Dc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Dc(n.fields[o])}`;return s+"}"}(t.mapValue):de()}function Xo(t){switch(Er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Za(t);return e?16+Xo(e):16;case 5:return 2*t.stringValue.length;case 6:return yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Xo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return es(r.fields,(i,o)=>{s+=i.length+Xo(o)}),s}(t.mapValue);default:throw de()}}function Oc(t){return!!t&&"integerValue"in t}function Ou(t){return!!t&&"arrayValue"in t}function kf(t){return!!t&&"nullValue"in t}function Df(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zo(t){return!!t&&"mapValue"in t}function b0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[p_])===null||n===void 0?void 0:n.stringValue)===g_}function bi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function C0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===w0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bi(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=bi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Zo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Zo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){es(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ht(bi(this.value))}}function m_(t){const e=[];return es(t.fields,(n,r)=>{const s=new ht([n]);if(Zo(r)){const i=m_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new en(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new At(e,0,fe.min(),fe.min(),fe.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,s){return new At(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new At(e,2,n,fe.min(),fe.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,fe.min(),fe.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n){this.position=e,this.inclusive=n}}function Of(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=Ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n="asc"){this.field=e,this.dir=n}}function R0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{}class Ze extends __{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new P0(e,n,r):n==="array-contains"?new O0(e,r):n==="in"?new V0(e,r):n==="not-in"?new N0(e,r):n==="array-contains-any"?new M0(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new k0(e,r):new D0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ns(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class In extends __{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new In(e,n)}matches(e){return v_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function v_(t){return t.op==="and"}function y_(t){return S0(t)&&v_(t)}function S0(t){for(const e of t.filters)if(e instanceof In)return!1;return!0}function Vc(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(y_(t))return t.filters.map(e=>Vc(e)).join(",");{const e=t.filters.map(n=>Vc(n)).join(",");return`${t.op}(${e})`}}function E_(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&Tn(r.value,s.value)}(t,e):t instanceof In?function(r,s){return s instanceof In&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&E_(o,s.filters[l]),!0):!1}(t,e):void de()}function A_(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof In?function(n){return n.op.toString()+" {"+n.getFilters().map(A_).join(" ,")+"}"}(t):"Filter"}class P0 extends Ze{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class k0 extends Ze{constructor(e,n){super(e,"in",n),this.keys=T_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class D0 extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=T_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function T_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class O0 extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ou(n)&&Hi(n.arrayValue,this.value)}}class V0 extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hi(this.value.arrayValue,n)}}class N0 extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Hi(this.value.arrayValue,n)}}class M0 extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ou(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.le=null}}function Nf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new x0(t,e,n,r,s,i,o)}function Vu(t){const e=ge(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Vc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.le=n}return e.le}function Nu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!R0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!E_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vf(t.startAt,e.startAt)&&Vf(t.endAt,e.endAt)}function Nc(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function L0(t,e,n,r,s,i,o,l){return new el(t,e,n,r,s,i,o,l)}function Mu(t){return new el(t)}function Mf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function K0(t){return t.collectionGroup!==null}function Ci(t){const e=ge(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(ht.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Ia(i,r))}),n.has(ht.keyField().canonicalString())||e.he.push(new Ia(ht.keyField(),r))}return e.he}function yn(t){const e=ge(t);return e.Pe||(e.Pe=F0(e,Ci(t))),e.Pe}function F0(t,e){if(t.limitType==="F")return Nf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ia(s.field,i)});const n=t.endAt?new Ta(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ta(t.startAt.position,t.startAt.inclusive):null;return Nf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mc(t,e,n){return new el(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tl(t,e){return Nu(yn(t),yn(e))&&t.limitType===e.limitType}function I_(t){return`${Vu(yn(t))}|lt:${t.limitType}`}function ms(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>A_(s)).join(", ")}]`),Xa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ms(s)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function nl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Of(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Ci(r),s)||r.endAt&&!function(o,l,c){const u=Of(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Ci(r),s))}(t,e)}function U0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function w_(t){return(e,n)=>{let r=!1;for(const s of Ci(t)){const i=B0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function B0(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ns(c,u):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return l_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=new Be(oe.comparator);function Hn(){return $0}const b_=new Be(oe.comparator);function gi(...t){let e=b_;for(const n of t)e=e.insert(n.key,n);return e}function C_(t){let e=b_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xr(){return Ri()}function R_(){return Ri()}function Ri(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const j0=new Be(oe.comparator),H0=new nt(oe.comparator);function Ee(...t){let e=H0;for(const n of t)e=e.add(n);return e}const q0=new nt(_e);function W0(){return q0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ya(e)?"-0":e}}function S_(t){return{integerValue:""+t}}function z0(t,e){return y0(e)?S_(e):xu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this._=void 0}}function G0(t,e,n){return t instanceof wa?function(s,i){const o={fields:{[h_]:{stringValue:u_},[f_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Du(i)&&(i=Za(i)),i&&(o.fields[d_]=i),{mapValue:o}}(n,e):t instanceof qi?k_(t,e):t instanceof Wi?D_(t,e):function(s,i){const o=P_(s,i),l=xf(o)+xf(s.Ie);return Oc(o)&&Oc(s.Ie)?S_(l):xu(s.serializer,l)}(t,e)}function Q0(t,e,n){return t instanceof qi?k_(t,e):t instanceof Wi?D_(t,e):n}function P_(t,e){return t instanceof ba?function(r){return Oc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class wa extends rl{}class qi extends rl{constructor(e){super(),this.elements=e}}function k_(t,e){const n=O_(e);for(const r of t.elements)n.some(s=>Tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Wi extends rl{constructor(e){super(),this.elements=e}}function D_(t,e){let n=O_(e);for(const r of t.elements)n=n.filter(s=>!Tn(s,r));return{arrayValue:{values:n}}}class ba extends rl{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function xf(t){return ze(t.integerValue||t.doubleValue)}function O_(t){return Ou(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function J0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof qi&&s instanceof qi||r instanceof Wi&&s instanceof Wi?Vs(r.elements,s.elements,Tn):r instanceof ba&&s instanceof ba?Tn(r.Ie,s.Ie):r instanceof wa&&s instanceof wa}(t.transform,e.transform)}class Y0{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ea(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sl{}function V_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new M_(t.key,Ln.none()):new lo(t.key,t.data,Ln.none());{const n=t.data,r=Ht.empty();let s=new nt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ns(t.key,r,new en(s.toArray()),Ln.none())}}function X0(t,e,n){t instanceof lo?function(s,i,o){const l=s.value.clone(),c=Kf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ns?function(s,i,o){if(!ea(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Kf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(N_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Si(t,e,n,r){return t instanceof lo?function(i,o,l,c){if(!ea(i.precondition,o))return l;const u=i.value.clone(),d=Ff(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ns?function(i,o,l,c){if(!ea(i.precondition,o))return l;const u=Ff(i.fieldTransforms,c,o),d=o.data;return d.setAll(N_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return ea(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Z0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=P_(r.transform,s||null);i!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,i))}return n||null}function Lf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vs(r,s,(i,o)=>J0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class lo extends sl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ns extends sl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function N_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kf(t,e,n){const r=new Map;De(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Q0(o,l,n[s]))}return r}function Ff(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,G0(i,o,e))}return r}class M_ extends sl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eC extends sl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&X0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=R_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=V_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,(n,r)=>Lf(n,r))&&Vs(this.baseMutations,e.baseMutations,(n,r)=>Lf(n,r))}}class Lu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length);let s=function(){return j0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Lu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,Ie;function sC(t){switch(t){case H.OK:return de();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return de()}}function x_(t){if(t===void 0)return jn("GRPC error has no .code"),H.UNKNOWN;switch(t){case Qe.OK:return H.OK;case Qe.CANCELLED:return H.CANCELLED;case Qe.UNKNOWN:return H.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return H.INTERNAL;case Qe.UNAVAILABLE:return H.UNAVAILABLE;case Qe.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Qe.NOT_FOUND:return H.NOT_FOUND;case Qe.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Qe.ABORTED:return H.ABORTED;case Qe.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Qe.DATA_LOSS:return H.DATA_LOSS;default:return de()}}(Ie=Qe||(Qe={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=new gr([4294967295,4294967295],0);function Uf(t){const e=i_().encode(t),n=new Xm;return n.update(e),new Uint8Array(n.digest())}function Bf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new gr([n,r],0),new gr([s,i],0)]}class Ku{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mi(`Invalid padding: ${n}`);if(r<0)throw new mi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new mi(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=gr.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(gr.fromNumber(r)));return s.compare(iC)===1&&(s=new gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Uf(e),[r,s]=Bf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ku(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const n=Uf(e),[r,s]=Bf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,co.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new il(fe.min(),s,new Be(_e),Hn(),Ee())}}class co{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new co(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class L_{constructor(e,n){this.targetId=e,this.ge=n}}class K_{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $f{constructor(){this.pe=0,this.ye=jf(),this.we=dt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Ee(),n=Ee(),r=Ee();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de()}}),new co(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=jf()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,De(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class oC{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Hn(),this.$e=Ko(),this.Ue=Ko(),this.Ke=new Be(_e)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(Nc(i))if(r===0){const o=new oe(i.path);this.ze(n,o,At.newNoDocument(o,fe.min()))}else De(r===1);else{const o=this.et(n);if(o!==r){const l=this.tt(e),c=l?this.nt(l,e,o):1;if(c!==0){this.Ye(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=yr(r).toUint8Array()}catch(c){if(c instanceof c_)return Os("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ku(o,s,i)}catch(c){return Os(c instanceof mi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const l=this.Xe(o);if(l){if(i.current&&Nc(l.target)){const c=new oe(l.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,At.newNoDocument(c,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=Ee();this.Ue.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new il(e,n,this.Ke,this.Qe,r);return this.Qe=Hn(),this.$e=Ko(),this.Ue=Ko(),this.Ke=new Be(_e),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new $f,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new nt(_e),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new nt(_e),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new $f),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Ko(){return new Be(oe.comparator)}function jf(){return new Be(oe.comparator)}const aC={asc:"ASCENDING",desc:"DESCENDING"},lC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cC={and:"AND",or:"OR"};class uC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xc(t,e){return t.useProto3Json||Xa(e)?e:{value:e}}function Ca(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function F_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hC(t,e){return Ca(t,e.toTimestamp())}function En(t){return De(!!t),fe.fromTimestamp(function(n){const r=vr(n);return new tt(r.seconds,r.nanos)}(t))}function Fu(t,e){return Lc(t,e).canonicalString()}function Lc(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function U_(t){const e=He.fromString(t);return De(q_(e)),e}function Kc(t,e){return Fu(t.databaseId,e.path)}function zl(t,e){const n=U_(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe($_(n))}function B_(t,e){return Fu(t.databaseId,e)}function dC(t){const e=U_(t);return e.length===4?He.emptyPath():$_(e)}function Fc(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $_(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hf(t,e,n){return{name:Kc(t,e),fields:n.value.mapValue.fields}}function fC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(De(d===void 0||typeof d=="string"),dt.fromBase64String(d||"")):(De(d===void 0||d instanceof Buffer||d instanceof Uint8Array),dt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?H.UNKNOWN:x_(u.code);return new ie(d,u.message||"")}(o);n=new K_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=zl(t,r.document.name),i=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):fe.min(),l=new Ht({mapValue:{fields:r.document.fields}}),c=At.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new ta(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=zl(t,r.document),i=r.readTime?En(r.readTime):fe.min(),o=At.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ta([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=zl(t,r.document),i=r.removedTargetIds||[];n=new ta([],i,s,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new rC(s,i),l=r.targetId;n=new L_(l,o)}}return n}function pC(t,e){let n;if(e instanceof lo)n={update:Hf(t,e.key,e.value)};else if(e instanceof M_)n={delete:Kc(t,e.key)};else if(e instanceof ns)n={update:Hf(t,e.key,e.data),updateMask:IC(e.fieldMask)};else{if(!(e instanceof eC))return de();n={verify:Kc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof wa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ba)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function gC(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?En(s.updateTime):En(i);return o.isEqual(fe.min())&&(o=En(i)),new Y0(o,s.transformResults||[])}(n,e))):[]}function mC(t,e){return{documents:[B_(t,e.path)]}}function _C(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=B_(t,s);const i=function(u){if(u.length!==0)return H_(In.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:_s(g.field),direction:EC(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=xc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:s}}function vC(t){let e=dC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=j_(p);return g instanceof In&&y_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new Ia(vs(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Xa(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,y=p.values||[];return new Ta(y,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,y=p.values||[];return new Ta(y,g)}(n.endAt)),L0(e,s,o,i,l,"F",c,u)}function yC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function j_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vs(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=vs(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vs(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return In.create(n.compositeFilter.filters.map(r=>j_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function EC(t){return aC[t]}function AC(t){return lC[t]}function TC(t){return cC[t]}function _s(t){return{fieldPath:t.canonicalString()}}function vs(t){return ht.fromServerFormat(t.fieldPath)}function H_(t){return t instanceof Ze?function(n){if(n.op==="=="){if(Df(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NAN"}};if(kf(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Df(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NAN"}};if(kf(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(n.field),op:AC(n.op),value:n.value}}}(t):t instanceof In?function(n){const r=n.getFilters().map(s=>H_(s));return r.length===1?r[0]:{compositeFilter:{op:TC(n.op),filters:r}}}(t):de()}function IC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function q_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,r,s,i=fe.min(),o=fe.min(),l=dt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.Tt=e}}function bC(t){const e=vC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(){this.Tn=new RC}addToCollectionParentIndex(e,n){return this.Tn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(_r.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(_r.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class RC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},W_=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(W_,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new xs(0)}static Kn(){return new xs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="LruGarbageCollector",SC=1048576;function zf([t,e],[n,r]){const s=_e(t,n);return s===0?_e(e,r):s}class PC{constructor(e){this.Hn=e,this.buffer=new nt(zf),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();zf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){X(Wf,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){zs(n)?X(Wf,"Ignoring IndexedDB error during garbage collection: ",n):await Ws(n)}await this.er(3e5)})}}class DC{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(Ya.ae);const r=new PC(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(qf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qf):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),gs()<=ye.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function OC(t,e){return new DC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Si(r.mutation,s,en.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=xr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=gi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Hn();const o=Ri(),l=function(){return Ri()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof ns)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Si(d.mutation,u,d.mutation.getFieldMask(),tt.now())):o.set(u.key,en.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new NC(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ri();let s=new Be((o,l)=>o-l),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||en.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Ee()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=R_();d.forEach(g=>{if(!i.has(g)){const y=V_(n.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):K0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):x.resolve(xr());let l=Bi,c=i;return o.next(u=>x.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?x.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ee())).next(d=>({batchId:l,changes:C_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=gi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=gi();return this.indexManager.getCollectionParents(e,i).next(l=>x.forEach(l,c=>{const u=function(p,g){return new el(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,At.newInvalidDocument(d)))});let l=gi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Si(d.mutation,u,en.empty(),tt.now()),nl(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return x.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:En(s.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:bC(s.bundledQuery),readTime:En(s.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.overlays=new Be(oe.comparator),this.Rr=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xr();return x.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const s=xr(),i=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=xr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=xr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return x.resolve(l)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nC(n,r));let i=this.Rr.get(n);i===void 0&&(i=Ee(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this.Vr=new nt(st.mr),this.gr=new nt(st.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new st(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new oe(new He([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new oe(new He([])),r=new st(n,e),s=new st(n,e+1);let i=Ee();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return oe.comparator(e.key,n.key)||_e(e.Cr,n.Cr)}static pr(e,n){return _e(e.Cr,n.Cr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new nt(st.mr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Mr=this.Mr.add(new st(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?ku:this.Fr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const l=this.Or(o.Cr);i.push(l)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(_e);return n.forEach(s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],l=>{r=r.add(l.Cr)})}),x.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new st(new oe(i),0);let l=new nt(_e);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Cr)),!0)},o),x.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return x.forEach(n.mutations,s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new st(n,0),s=this.Mr.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.kr=e,this.docs=function(){return new Be(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=Hn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():At.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Hn();const o=n.path,l=new oe(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||g0(p0(d),r)<=0||(s.has(d.key)||nl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}qr(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BC(this)}getSize(e){return x.resolve(this.size)}}class BC extends VC{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.persistence=e,this.Qr=new ts(n=>Vu(n),Nu),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Uu,this.targetCount=0,this.Kr=xs.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),x.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new xs(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.zn(n),x.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Ya(0),this.zr=!1,this.zr=!0,this.jr=new KC,this.referenceDelegate=e(this),this.Hr=new $C(this),this.indexManager=new CC,this.remoteDocumentCache=function(s){return new UC(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new wC(n),this.Yr=new xC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new FC(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new jC(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return x.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class jC extends _0{constructor(e){super(),this.currentSequenceNumber=e}}class Bu{constructor(e){this.persistence=e,this.ti=new Uu,this.ni=null}static ri(e){return new Bu(e)}get ii(){if(this.ni)return this.ni;throw de()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),x.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.ii,r=>{const s=oe.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,fe.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return x.or([()=>x.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Ra{constructor(e,n){this.persistence=e,this.oi=new ts(r=>E0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=OC(this,n)}static ri(e,n){return new Ra(e,n)}Zr(){}Xr(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return x.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?x.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(l=>{l||(r++,i.removeEntry(o,fe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),x.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Xo(e.data.value)),n}ar(e,n,r){return x.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new $u(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return ST()?8:v0(It())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new HC;return this._s(e,n,o).next(l=>{if(i.result=l,this.Xi)return this.us(e,n,o,l.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(gs()<=ye.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",ms(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),x.resolve()):(gs()<=ye.DEBUG&&X("QueryEngine","Query:",ms(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(gs()<=ye.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",ms(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):x.resolve())}rs(e,n){if(Mf(n))return x.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Mc(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.cs(n,l);return this.ls(n,u,o,c.readTime)?this.rs(e,Mc(n,null,"F")):this.hs(e,u,n,c)}))})))}ss(e,n,r,s){return Mf(n)||s.isEqual(fe.min())?x.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?x.resolve(null):(gs()<=ye.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ms(n)),this.hs(e,o,n,f0(s,Bi)).next(l=>l))})}cs(e,n){let r=new nt(w_(e));return n.forEach((s,i)=>{nl(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return gs()<=ye.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ms(n)),this.ns.getDocumentsMatchingQuery(e,n,_r.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="LocalStore",WC=3e8;class zC{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Be(_e),this.Is=new ts(i=>Vu(i),Nu),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MC(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function GC(t,e,n,r){return new zC(t,e,n,r)}async function G_(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ee();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:l}))})})}function QC(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,g=p.keys();let y=x.resolve();return g.forEach(P=>{y=y.next(()=>d.getEntry(c,P)).next(O=>{const k=u.docVersions.get(P);De(k!==null),O.version.compareTo(k)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),d.addEntry(O)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ee();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Q_(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function JC(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,p)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(dt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),function(O,k,F){return O.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=WC?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(g,y,d)&&l.push(n.Hr.updateTargetData(i,y))});let c=Hn(),u=Ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(YC(i,o,e.documentUpdates).next(d=>{c=d.Vs,u=d.fs})),!r.isEqual(fe.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return x.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ts=s,i))}function YC(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Hn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X(ju,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Vs:o,fs:s}})}function XC(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ku),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZC(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Uc(t,e,n){const r=ge(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!zs(o))throw o;X(ju,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function Gf(t,e,n){const r=ge(t);let s=fe.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=ge(c),g=p.Is.get(d);return g!==void 0?x.resolve(p.Ts.get(g)):p.Hr.getTargetData(u,d)}(r,o,yn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:Ee())).next(l=>(eR(r,U0(e),l),{documents:l,gs:i})))}function eR(t,e,n){let r=t.Es.get(e)||fe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class Qf{constructor(){this.activeTargetIds=W0()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tR{constructor(){this.ho=new Qf,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Qf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="ConnectivityMonitor";class Yf{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){X(Jf,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){X(Jf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo=null;function Bc(){return Fo===null?Fo=function(){return 268435456+Math.round(2147483648*Math.random())}():Fo++,"0x"+Fo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="RestConnection",rR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sR{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Ea?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const o=Bc(),l=this.bo(e,n.toUriEncodedString());X(Gl,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(u=>(X(Gl,`Received RPC '${e}' ${o}: `,u),u),u=>{throw Os(Gl,`RPC '${e}' ${o} failed with error: `,u,"url: ",l,"request:",r),u})}Co(e,n,r,s,i,o){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=rR[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class oR extends sR{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Bc();return new Promise((o,l)=>{const c=new Zm;c.setWithCredentials(!0),c.listenOnce(e_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Yo.NO_ERROR:const d=c.getResponseJson();X(_t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Yo.TIMEOUT:X(_t,`RPC '${e}' ${i} timed out`),l(new ie(H.DEADLINE_EXCEEDED,"Request time out"));break;case Yo.HTTP_ERROR:const p=c.getStatus();if(X(_t,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const P=function(k){const F=k.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(F)>=0?F:H.UNKNOWN}(y.status);l(new ie(P,y.message))}else l(new ie(H.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ie(H.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{X(_t,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);X(_t,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Wo(e,n,r){const s=Bc(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=r_(),l=n_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(_t,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let g=!1,y=!1;const P=new iR({Fo:k=>{y?X(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(X(_t,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(_t,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},Mo:()=>p.close()}),O=(k,F,U)=>{k.listen(F,B=>{try{U(B)}catch($){setTimeout(()=>{throw $},0)}})};return O(p,pi.EventType.OPEN,()=>{y||(X(_t,`RPC '${e}' stream ${s} transport opened.`),P.Qo())}),O(p,pi.EventType.CLOSE,()=>{y||(y=!0,X(_t,`RPC '${e}' stream ${s} transport closed`),P.Uo())}),O(p,pi.EventType.ERROR,k=>{y||(y=!0,Os(_t,`RPC '${e}' stream ${s} transport errored:`,k),P.Uo(new ie(H.UNAVAILABLE,"The operation could not be completed")))}),O(p,pi.EventType.MESSAGE,k=>{var F;if(!y){const U=k.data[0];De(!!U);const B=U,$=(B==null?void 0:B.error)||((F=B[0])===null||F===void 0?void 0:F.error);if($){X(_t,`RPC '${e}' stream ${s} received error:`,$);const Z=$.status;let ae=function(_){const I=Qe[_];if(I!==void 0)return x_(I)}(Z),b=$.message;ae===void 0&&(ae=H.INTERNAL,b="Unknown error status: "+Z+" with message "+$.message),y=!0,P.Uo(new ie(ae,b)),p.close()}else X(_t,`RPC '${e}' stream ${s} received:`,U),P.Ko(U)}}),O(l,t_.STAT_EVENT,k=>{k.stat===Pc.PROXY?X(_t,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Pc.NOPROXY&&X(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}function Ql(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t){return new uC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="PersistentStream";class Y_{constructor(e,n,r,s,i,o,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new J_(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new ie(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return X(Xf,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(X(Xf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aR extends Y_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=fC(this.serializer,e),r=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?En(o.readTime):fe.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Fc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Nc(c)?{documents:mC(i,c)}:{query:_C(i,c).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=F_(i,o.resumeToken);const u=xc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){l.readTime=Ca(i,o.snapshotVersion.toTimestamp());const u=xc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=yC(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Fc(this.serializer),n.removeTarget=e,this.I_(n)}}class lR extends Y_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return De(!!e.streamToken),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=gC(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Fc(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pC(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{}class uR extends cR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Lc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(H.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,Lc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(H.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class hR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(jn(n),this.N_=!1):X("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="RemoteStore";class dR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{rs(this)&&(X(Yr,"Restarting streams for network reachability change."),await async function(c){const u=ge(c);u.W_.add(4),await uo(u),u.j_.set("Unknown"),u.W_.delete(4),await al(u)}(this))})}),this.j_=new hR(r,s)}}async function al(t){if(rs(t))for(const e of t.G_)await e(!0)}async function uo(t){for(const e of t.G_)await e(!1)}function X_(t,e){const n=ge(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),zu(n)?Wu(n):Gs(n).c_()&&qu(n,e))}function Hu(t,e){const n=ge(t),r=Gs(n);n.K_.delete(e),r.c_()&&Z_(n,e),n.K_.size===0&&(r.c_()?r.P_():rs(n)&&n.j_.set("Unknown"))}function qu(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gs(t).y_(e)}function Z_(t,e){t.H_.Ne(e),Gs(t).w_(e)}function Wu(t){t.H_=new oC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Gs(t).start(),t.j_.B_()}function zu(t){return rs(t)&&!Gs(t).u_()&&t.K_.size>0}function rs(t){return ge(t).W_.size===0}function ev(t){t.H_=void 0}async function fR(t){t.j_.set("Online")}async function pR(t){t.K_.forEach((e,n)=>{qu(t,e)})}async function gR(t,e){ev(t),zu(t)?(t.j_.q_(e),Wu(t)):t.j_.set("Unknown")}async function mR(t,e,n){if(t.j_.set("Online"),e instanceof K_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.K_.delete(l),s.H_.removeTarget(l))}(t,e)}catch(r){X(Yr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sa(t,r)}else if(e instanceof ta?t.H_.We(e):e instanceof L_?t.H_.Ze(e):t.H_.je(e),!n.isEqual(fe.min()))try{const r=await Q_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.H_.ot(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.K_.get(u);d&&i.K_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.K_.get(c);if(!d)return;i.K_.set(c,d.withResumeToken(dt.EMPTY_BYTE_STRING,d.snapshotVersion)),Z_(i,c);const p=new cr(d.target,c,u,d.sequenceNumber);qu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X(Yr,"Failed to raise snapshot:",r),await Sa(t,r)}}async function Sa(t,e,n){if(!zs(e))throw e;t.W_.add(1),await uo(t),t.j_.set("Offline"),n||(n=()=>Q_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(Yr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await al(t)})}function tv(t,e){return e().catch(n=>Sa(t,n,e))}async function ll(t){const e=ge(t),n=Ar(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:ku;for(;_R(e);)try{const s=await XC(e.localStore,r);if(s===null){e.U_.length===0&&n.P_();break}r=s.batchId,vR(e,s)}catch(s){await Sa(e,s)}nv(e)&&rv(e)}function _R(t){return rs(t)&&t.U_.length<10}function vR(t,e){t.U_.push(e);const n=Ar(t);n.c_()&&n.S_&&n.b_(e.mutations)}function nv(t){return rs(t)&&!Ar(t).u_()&&t.U_.length>0}function rv(t){Ar(t).start()}async function yR(t){Ar(t).C_()}async function ER(t){const e=Ar(t);for(const n of t.U_)e.b_(n.mutations)}async function AR(t,e,n){const r=t.U_.shift(),s=Lu.from(r,e,n);await tv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ll(t)}async function TR(t,e){e&&Ar(t).S_&&await async function(r,s){if(function(o){return sC(o)&&o!==H.ABORTED}(s.code)){const i=r.U_.shift();Ar(r).h_(),await tv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ll(r)}}(t,e),nv(t)&&rv(t)}async function Zf(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),X(Yr,"RemoteStore received new credentials");const r=rs(n);n.W_.add(3),await uo(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await al(n)}async function IR(t,e){const n=ge(t);e?(n.W_.delete(2),await al(n)):e||(n.W_.add(2),await uo(n),n.j_.set("Unknown"))}function Gs(t){return t.J_||(t.J_=function(n,r,s){const i=ge(n);return i.M_(),new aR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:fR.bind(null,t),No:pR.bind(null,t),Lo:gR.bind(null,t),p_:mR.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),zu(t)?Wu(t):t.j_.set("Unknown")):(await t.J_.stop(),ev(t))})),t.J_}function Ar(t){return t.Y_||(t.Y_=function(n,r,s){const i=ge(n);return i.M_(),new lR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:yR.bind(null,t),Lo:TR.bind(null,t),D_:ER.bind(null,t),v_:AR.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await ll(t)):(await t.Y_.stop(),t.U_.length>0&&(X(Yr,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Gu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qu(t,e){if(jn("AsyncQueue",`${e}: ${t}`),zs(t))return new ie(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{static emptySet(e){return new Ps(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=gi(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.Z_=new Be(oe.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):de():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ls{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ls(e,n,Ps.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class bR{constructor(){this.queries=tp(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=tp(),i.forEach((o,l)=>{for(const c of l.ta)c.onError(r)})})(this,new ie(H.ABORTED,"Firestore shutting down"))}}function tp(){return new ts(t=>I_(t),tl)}async function CR(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new wR,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Qu(o,`Initialization of query '${ms(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&Ju(n)}async function RR(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SR(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ta)l.oa(s)&&(r=!0);o.ea=s}}r&&Ju(n)}function PR(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function Ju(t){t.ia.forEach(e=>{e.next()})}var $c,np;(np=$c||($c={}))._a="default",np.Cache="cache";class kR{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==$c.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.key=e}}class iv{constructor(e){this.key=e}}class DR{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ee(),this.mutatedKeys=Ee(),this.ya=w_(e),this.wa=new Ps(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new ep,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),y=nl(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),O=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let k=!1;g&&y?g.data.isEqual(y.data)?P!==O&&(r.track({type:3,doc:y}),k=!0):this.va(g,y)||(r.track({type:2,doc:y}),k=!0,(c&&this.ya(y,c)>0||u&&this.ya(y,u)<0)&&(l=!0)):!g&&y?(r.track({type:0,doc:y}),k=!0):g&&!y&&(r.track({type:1,doc:g}),k=!0,(c||u)&&(l=!0)),k&&(y?(o=o.add(y),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:o,Da:r,ls:l,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((d,p)=>function(y,P){const O=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return O(y)-O(P)}(d.type,p.type)||this.ya(d.doc,p.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,u=c!==this.ga;return this.ga=c,o.length!==0||u?{snapshot:new Ls(this.query,e.wa,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ep,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ee(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new iv(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new sv(r))}),n}Oa(e){this.fa=e.gs,this.pa=Ee();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return Ls.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Yu="SyncEngine";class OR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VR{constructor(e){this.key=e,this.Ba=!1}}class NR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new ts(l=>I_(l),tl),this.qa=new Map,this.Qa=new Set,this.$a=new Be(oe.comparator),this.Ua=new Map,this.Ka=new Uu,this.Wa={},this.Ga=new Map,this.za=xs.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function MR(t,e,n=!0){const r=hv(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await ov(r,e,n,!0),s}async function xR(t,e){const n=hv(t);await ov(n,e,!0,!1)}async function ov(t,e,n,r){const s=await ZC(t.localStore,yn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await LR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&X_(t.remoteStore,s),l}async function LR(t,e,n,r,s){t.Ha=(p,g,y)=>async function(O,k,F,U){let B=k.view.ba(F);B.ls&&(B=await Gf(O.localStore,k.query,!1).then(({documents:b})=>k.view.ba(b,B)));const $=U&&U.targetChanges.get(k.targetId),Z=U&&U.targetMismatches.get(k.targetId)!=null,ae=k.view.applyChanges(B,O.isPrimaryClient,$,Z);return sp(O,k.targetId,ae.Ma),ae.snapshot}(t,p,g,y);const i=await Gf(t.localStore,e,!0),o=new DR(e,i.gs),l=o.ba(i.documents),c=co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);sp(t,n,u.Ma);const d=new OR(e,n,o);return t.ka.set(e,d),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function KR(t,e,n){const r=ge(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!tl(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Uc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Hu(r.remoteStore,s.targetId),jc(r,s.targetId)}).catch(Ws)):(jc(r,s.targetId),await Uc(r.localStore,s.targetId,!0))}async function FR(t,e){const n=ge(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hu(n.remoteStore,r.targetId))}async function UR(t,e,n){const r=zR(t);try{const s=await function(o,l){const c=ge(o),u=tt.now(),d=l.reduce((y,P)=>y.add(P.key),Ee());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let P=Hn(),O=Ee();return c.ds.getEntries(y,d).next(k=>{P=k,P.forEach((F,U)=>{U.isValidDocument()||(O=O.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,P)).next(k=>{p=k;const F=[];for(const U of l){const B=Z0(U,p.get(U.key).overlayedDocument);B!=null&&F.push(new ns(U.key,B,m_(B.value.mapValue),Ln.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,F,l)}).next(k=>{g=k;const F=k.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(y,k.batchId,F)})}).then(()=>({batchId:g.batchId,changes:C_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Wa[o.currentUser.toKey()];u||(u=new Be(_e)),u=u.insert(l,c),o.Wa[o.currentUser.toKey()]=u}(r,s.batchId,n),await ho(r,s.changes),await ll(r.remoteStore)}catch(s){const i=Qu(s,"Failed to persist write");n.reject(i)}}async function av(t,e){const n=ge(t);try{const r=await JC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ua.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?De(o.Ba):s.removedDocuments.size>0&&(De(o.Ba),o.Ba=!1))}),await ho(n,r,e)}catch(r){await Ws(r)}}function rp(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const l=o.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ge(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const g of p.ta)g.sa(l)&&(u=!0)}),u&&Ju(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BR(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ua.get(e),i=s&&s.key;if(i){let o=new Be(oe.comparator);o=o.insert(i,At.newNoDocument(i,fe.min()));const l=Ee().add(i),c=new il(fe.min(),new Map,new Be(_e),o,l);await av(r,c),r.$a=r.$a.remove(i),r.Ua.delete(e),Xu(r)}else await Uc(r.localStore,e,!1).then(()=>jc(r,e,n)).catch(Ws)}async function $R(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await QC(n.localStore,e);cv(n,r,null),lv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ho(n,s)}catch(s){await Ws(s)}}async function jR(t,e,n){const r=ge(t);try{const s=await function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(De(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);cv(r,e,n),lv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ho(r,s)}catch(s){await Ws(s)}}function lv(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function cv(t,e,n){const r=ge(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||uv(t,r)})}function uv(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Hu(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),Xu(t))}function sp(t,e,n){for(const r of n)r instanceof sv?(t.Ka.addReference(r.key,e),HR(t,r)):r instanceof iv?(X(Yu,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||uv(t,r.key)):de()}function HR(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(X(Yu,"New document in limbo: "+n),t.Qa.add(r),Xu(t))}function Xu(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new oe(He.fromString(e)),r=t.za.next();t.Ua.set(r,new VR(n)),t.$a=t.$a.insert(n,r),X_(t.remoteStore,new cr(yn(Mu(n.path)),r,"TargetPurposeLimboResolution",Ya.ae))}}async function ho(t,e,n){const r=ge(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{o.push(r.Ha(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=$u.Yi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.La.p_(s),await async function(c,u){const d=ge(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(u,g=>x.forEach(g.Hi,y=>d.persistence.referenceDelegate.addReference(p,g.targetId,y)).next(()=>x.forEach(g.Ji,y=>d.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))}catch(p){if(!zs(p))throw p;X(ju,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const y=d.Ts.get(g),P=y.snapshotVersion,O=y.withLastLimboFreeSnapshotVersion(P);d.Ts=d.Ts.insert(g,O)}}}(r.localStore,i))}async function qR(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){X(Yu,"User change. New user:",e.toKey());const r=await G_(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new ie(H.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ho(n,r.Rs)}}function WR(t,e){const n=ge(t),r=n.Ua.get(e);if(r&&r.Ba)return Ee().add(r.key);{let s=Ee();const i=n.qa.get(e);if(!i)return s;for(const o of i){const l=n.ka.get(o);s=s.unionWith(l.view.Sa)}return s}}function hv(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=av.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BR.bind(null,e),e.La.p_=SR.bind(null,e.eventManager),e.La.Ja=PR.bind(null,e.eventManager),e}function zR(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$R.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jR.bind(null,e),e}class Pa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ol(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return GC(this.persistence,new qC,e.initialUser,this.serializer)}Xa(e){return new z_(Bu.ri,this.serializer)}Za(e){return new tR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pa.provider={build:()=>new Pa};class GR extends Pa{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){De(this.persistence.referenceDelegate instanceof Ra);const r=this.persistence.referenceDelegate.garbageCollector;return new kC(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new z_(r=>Ra.ri(r,n),this.serializer)}}class Hc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qR.bind(null,this.syncEngine),await IR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bR}()}createDatastore(e){const n=ol(e.databaseInfo.databaseId),r=function(i){return new oR(i)}(e.databaseInfo);return function(i,o,l,c){return new uR(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new dR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>rp(this.syncEngine,n,0),function(){return Yf.D()?new Yf:new nR}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new NR(s,i,o,l,c,u);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);X(Yr,"RemoteStore shutting down."),i.W_.add(5),await uo(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Hc.provider={build:()=>new Hc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="FirestoreClient";class JR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=o_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(Tr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(Tr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jl(t,e){t.asyncQueue.verifyOperationInProgress(),X(Tr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await G_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ip(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YR(t);X(Tr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Zf(e.remoteStore,s)),t._onlineComponents=e}async function YR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(Tr,"Using user provided OfflineComponentProvider");try{await Jl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Os("Error using user provided cache. Falling back to memory cache: "+n),await Jl(t,new Pa)}}else X(Tr,"Using default OfflineComponentProvider"),await Jl(t,new GR(void 0));return t._offlineComponents}async function dv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(Tr,"Using user provided OnlineComponentProvider"),await ip(t,t._uninitializedComponentsProvider._online)):(X(Tr,"Using default OnlineComponentProvider"),await ip(t,new Hc))),t._onlineComponents}function XR(t){return dv(t).then(e=>e.syncEngine)}async function ZR(t){const e=await dv(t),n=e.eventManager;return n.onListen=MR.bind(null,e.syncEngine),n.onUnlisten=KR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=FR.bind(null,e.syncEngine),n}function eS(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new QR({next:g=>{d.su(),o.enqueueAndForget(()=>RR(i,p));const y=g.docs.has(l);!y&&g.fromCache?u.reject(new ie(H.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&c&&c.source==="server"?u.reject(new ie(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new kR(Mu(l.path),d,{includeMetadataChanges:!0,Ta:!0});return CR(i,p)}(await ZR(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t,e,n){if(!n)throw new ie(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nS(t,e,n,r){if(e===!0&&r===!0)throw new ie(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ap(t){if(!oe.isDocumentKey(t))throw new ie(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function zi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zu(t);throw new ie(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="firestore.googleapis.com",lp=!0;class cp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pv,this.ssl=lp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:lp;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=W_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<SC)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class eh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new s0;switch(r.type){case"firstParty":return new l0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=op.get(n);r&&(X("ComponentProvider","Removing Datastore"),op.delete(n),r.terminate())}(this),Promise.resolve()}}function rS(t,e,n,r={}){var s;const i=(t=zi(t,eh))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==pv&&i.host!==l&&Os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!zr(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=vt.MOCK_USER;else{u=AT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ie(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new vt(p)}t._authCredentials=new i0(new s_(u,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new th(this.firestore,e,this._query)}}class Wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}}class Gi extends th{constructor(e,n,r){super(e,n,Mu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new oe(e))}withConverter(e){return new Gi(this.firestore,e,this._path)}}function Yl(t,e,...n){if(t=Qt(t),arguments.length===1&&(e=o_.newId()),tS("doc","path",e),t instanceof eh){const r=He.fromString(e,...n);return ap(r),new Wt(t,null,new oe(r))}{if(!(t instanceof Wt||t instanceof Gi))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return ap(r),new Wt(t.firestore,t instanceof Gi?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="AsyncQueue";class hp{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new J_(this,"async_queue_retry"),this.Su=()=>{const r=Ql();r&&X(up,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=Ql();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Ql();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new mr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!zs(e))throw e;X(up,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=Gu.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&de()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class nh extends eh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new hp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hp(e),this._firestoreClient=void 0,await e}}}function Xl(t,e){const n=pm(),r=Ea,s=vu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=yT("firestore");i&&rS(s,...i)}return s}function gv(t){if(t._terminated)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||sS(t),t._firestoreClient}function sS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new I0(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,fv(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new JR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ks(dt.fromBase64String(e))}catch(n){throw new ie(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ks(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=/^__.*__$/;class oS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ns(e,this.data,this.fieldMask,n,this.fieldTransforms):new lo(e,this.data,n,this.fieldTransforms)}}function _v(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class oh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new oh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return ka(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(_v(this.Lu)&&iS.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class aS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ol(e)}ju(e,n,r,s=!1){return new oh({Lu:e,methodName:n,zu:r,path:ht.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lS(t){const e=t._freezeSettings(),n=ol(t._databaseId);return new aS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cS(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);Av("Data must be an object, but it was:",o,r);const l=yv(r,o);let c,u;if(i.merge)c=new en(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=uS(e,p,n);if(!o.contains(g))throw new ie(H.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);dS(d,g)||d.push(g)}c=new en(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new oS(new Ht(l),c,u)}function vv(t,e){if(Ev(t=Qt(t)))return Av("Unsupported field value:",e,t),yv(t,e);if(t instanceof mv)return function(r,s){if(!_v(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=vv(l,s.Ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return z0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:Ca(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ca(s.serializer,i)}}if(r instanceof sh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ks)return{bytesValue:F_(s.serializer,r._byteString)};if(r instanceof Wt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ih)return function(o,l){return{mapValue:{fields:{[p_]:{stringValue:g_},[Aa]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Wu("VectorValues must only contain numeric values.");return xu(l.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Zu(r)}`)}(t,e)}function yv(t,e){const n={};return l_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(r,s)=>{const i=vv(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ev(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof sh||t instanceof Ks||t instanceof Wt||t instanceof mv||t instanceof ih)}function Av(t,e,n){if(!Ev(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Zu(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function uS(t,e,n){if((e=Qt(e))instanceof rh)return e._internalPath;if(typeof e=="string")return Tv(t,e);throw ka("Field path arguments must be of type string or ",t,!1,void 0,n)}const hS=new RegExp("[~\\*/\\[\\]]");function Tv(t,e,n){if(e.search(hS)>=0)throw ka(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rh(...e.split("."))._internalPath}catch{throw ka(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ka(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ie(H.INVALID_ARGUMENT,l+t+c)}function dS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fS extends Iv{data(){return super.data()}}function wv(t,e){return typeof e=="string"?Tv(t,e):e instanceof rh?e._internalPath:e._delegate._internalPath}class pS{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return es(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Aa].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ze(o.doubleValue));return new ih(i)}convertGeoPoint(e){return new sh(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Za(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($i(e));default:return null}}convertTimestamp(e){const n=vr(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);De(q_(r));const s=new ji(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bv extends Iv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _S(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class _S extends bv{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t){t=zi(t,Wt);const e=zi(t.firestore,nh);return eS(gv(e),t._key).then(n=>AS(e,t,n))}class yS extends pS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,n)}}function dp(t,e,n){t=zi(t,Wt);const r=zi(t.firestore,nh),s=gS(t.converter,e,n);return ES(r,[cS(lS(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ln.none())])}function ES(t,e){return function(r,s){const i=new mr;return r.asyncQueue.enqueueAndForget(async()=>UR(await XR(r),s,i)),i.promise}(gv(t),e)}function AS(t,e,n){const r=n.docs.get(e._key),s=new yS(t);return new bv(t,s,e._key,r,new mS(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){qs=s})($s),Ds(new Gr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new nh(new o0(r.getProvider("auth-internal")),new c0(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ji(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),pr(vf,yf,e),pr(vf,yf,"esm2017")})();const Cv=cT("auth",{state:()=>({user:null,loading:!1,error:null}),getters:{isAuthenticated:t=>!!t.user,userRole:t=>{var e;return(e=t.user)==null?void 0:e.role},isVerified:t=>{var e;return(e=t.user)==null?void 0:e.verificationStatus}},actions:{async login(t,e){this.loading=!0,this.error=null;try{const n=Jo(),r=await Bm(n,t,e),s=await vS(Yl(Xl(),"users",r.user.uid));s.exists()&&(this.user={uid:r.user.uid,email:r.user.email,...s.data()})}catch(n){throw this.error=n.message,n}finally{this.loading=!1}},async register(t,e,n,r){this.loading=!0,this.error=null;try{const s=Jo(),i=await jw(s,t,e),o={uid:i.user.uid,email:t,name:n,role:r,verificationStatus:!1,createdAt:new Date};await dp(Yl(Xl(),"users",i.user.uid),o),this.user=o}catch(s){throw this.error=s.message,s}finally{this.loading=!1}},async logout(){this.loading=!0;try{const t=Jo();await Ww(t),this.user=null}catch(t){throw this.error=t.message,t}finally{this.loading=!1}},async updateProfile(t){if(this.user)try{await dp(Yl(Xl(),"users",this.user.uid),{...t},{merge:!0}),this.user={...this.user,...t}}catch(e){throw this.error=e.message,e}}}}),TS=Xe({__name:"MobileNav",setup(t){const e=Cv(),n=[{path:"/search",label:"검색",icon:"bi bi-search"},{path:"/events",label:"이벤트 관리",icon:"bi bi-calendar-event"},{path:"/spaces",label:"매장 관리",icon:"bi bi-shop"},{path:"/community",label:"커뮤니티",icon:"bi bi-people"},{path:"/profile",label:"프로필",icon:"bi bi-person"}],r=[{path:"/search",label:"검색",icon:"bi bi-search"},{path:"/events",label:"이벤트 관리",icon:"bi bi-calendar-event"},{path:"/portfolio",label:"작품 관리",icon:"bi bi-collection"},{path:"/community",label:"커뮤니티",icon:"bi bi-people"},{path:"/profile",label:"프로필",icon:"bi bi-person"}],s=[{path:"/search",label:"검색",icon:"bi bi-search"},{path:"/wishlist",label:"위시리스트",icon:"bi bi-heart"},{path:"/bookings",label:"예약 확인",icon:"bi bi-ticket"},{path:"/community",label:"커뮤니티",icon:"bi bi-people"},{path:"/profile",label:"프로필",icon:"bi bi-person"}],i=Ye(()=>{switch(e.userRole){case"host":return n;case"artist":return r;case"consumer":return s;default:return[]}}),o=Ye(()=>{switch(e.userRole){case"host":return"host-theme";case"artist":return"artist-theme";case"consumer":return"consumer-theme";default:return""}});return(l,c)=>{const u=mn("router-link");return le(),Ae("nav",{class:Gt(["mobile-nav",o.value])},[(le(!0),Ae(Ke,null,Vn(i.value,d=>(le(),kt(u,{key:d.path,to:d.path,class:"nav-item"},{default:Je(()=>[K("i",{class:Gt(d.icon)},null,2),K("span",null,it(d.label),1)]),_:2},1032,["to"]))),128))],2)}}}),ln=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},IS=ln(TS,[["__scopeId","data-v-83f66418"]]);function wS(t){return eu()?(Gp(t),!0):!1}const Zl=new WeakMap,bS=(...t)=>{var e;const n=t[0],r=(e=Ha())==null?void 0:e.proxy;if(r==null&&!du())throw new Error("injectLocal must be called in setup");return r&&Zl.has(r)&&n in Zl.get(r)?Zl.get(r)[n]:Lt(...t)},CS=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const RS=Object.prototype.toString,SS=t=>RS.call(t)==="[object Object]";function fp(t){return t.endsWith("rem")?Number.parseFloat(t)*16:Number.parseFloat(t)}function ec(t){return Array.isArray(t)?t:[t]}function PS(t){return Ha()}function kS(t,e=!0,n){PS()?Bs(t,n):e?t():to(t)}function DS(t,e,n){return Br(t,e,{...n,immediate:!0})}const ah=CS?window:void 0;function OS(t){var e;const n=Is(t);return(e=n==null?void 0:n.$el)!=null?e:n}function qc(...t){const e=[],n=()=>{e.forEach(l=>l()),e.length=0},r=(l,c,u,d)=>(l.addEventListener(c,u,d),()=>l.removeEventListener(c,u,d)),s=Ye(()=>{const l=ec(Is(t[0])).filter(c=>c!=null);return l.every(c=>typeof c!="string")?l:void 0}),i=DS(()=>{var l,c;return[(c=(l=s.value)==null?void 0:l.map(u=>OS(u)))!=null?c:[ah].filter(u=>u!=null),ec(Is(s.value?t[1]:t[0])),ec(rn(s.value?t[2]:t[1])),Is(s.value?t[3]:t[2])]},([l,c,u,d])=>{if(n(),!(l!=null&&l.length)||!(c!=null&&c.length)||!(u!=null&&u.length))return;const p=SS(d)?{...d}:d;e.push(...l.flatMap(g=>c.flatMap(y=>u.map(P=>r(g,y,P,p)))))},{flush:"post"}),o=()=>{i(),n()};return wS(n),o}function VS(){const t=Fr(!1),e=Ha();return e&&Bs(()=>{t.value=!0},e),t}function NS(t){const e=VS();return Ye(()=>(e.value,!!t()))}const MS=Symbol("vueuse-ssr-width");function xS(){const t=du()?bS(MS,null):null;return typeof t=="number"?t:void 0}function LS(t,e={}){const{window:n=ah,ssrWidth:r=xS()}=e,s=NS(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function"),i=Fr(typeof r=="number"),o=Fr(),l=Fr(!1),c=u=>{l.value=u.matches};return XE(()=>{if(i.value){i.value=!s.value;const u=Is(t).split(",");l.value=u.some(d=>{const p=d.includes("not all"),g=d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),y=d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let P=!!(g||y);return g&&P&&(P=r>=fp(g[1])),y&&P&&(P=r<=fp(y[1])),p?!P:P});return}s.value&&(o.value=n.matchMedia(Is(t)),l.value=o.value.matches)}),qc(o,"change",c,{passive:!0}),Ye(()=>l.value)}function KS(t={}){const{window:e=ah,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:r=Number.POSITIVE_INFINITY,listenOrientation:s=!0,includeScrollbar:i=!0,type:o="inner"}=t,l=Fr(n),c=Fr(r),u=()=>{if(e)if(o==="outer")l.value=e.outerWidth,c.value=e.outerHeight;else if(o==="visual"&&e.visualViewport){const{width:p,height:g,scale:y}=e.visualViewport;l.value=Math.round(p*y),c.value=Math.round(g*y)}else i?(l.value=e.innerWidth,c.value=e.innerHeight):(l.value=e.document.documentElement.clientWidth,c.value=e.document.documentElement.clientHeight)};u(),kS(u);const d={passive:!0};if(qc("resize",u,d),e&&o==="visual"&&e.visualViewport&&qc(e.visualViewport,"resize",u,d),s){const p=LS("(orientation: portrait)");Br(p,()=>u())}return{width:l,height:c}}const FS={class:"footer"},US=Xe({__name:"Footer",setup(t){return(e,n)=>(le(),Ae("footer",FS,n[0]||(n[0]=[$a('<div class="footer-content" data-v-670ec04d><div class="footer-left" data-v-670ec04d><div class="footer-links" data-v-670ec04d><a href="#" data-v-670ec04d>Contact Us</a><span data-v-670ec04d>|</span><a href="#" data-v-670ec04d>Legal Notice</a><span data-v-670ec04d>|</span><a href="#" data-v-670ec04d>Image Information Processing Equipment Operation &amp; Management Policy</a><span data-v-670ec04d>|</span><a href="#" data-v-670ec04d>Prohibition of Unauthorized Collection of Email Addresses</a><a href="#" class="privacy" data-v-670ec04d>Privacy Policy</a></div><div class="footer-company" data-v-670ec04d><div data-v-670ec04d>Bead Co., Ltd | CEO : Ham Hyungbin</div><div data-v-670ec04d>Address : South Korea, Seoul</div><div data-v-670ec04d>Business Registration No. : xxx-xx-xxxxx | Personal Information Manager : Cheong Anyong</div></div><div class="footer-copy" data-v-670ec04d>© BEAD. All Rights Reserved.</div></div><div class="footer-right" data-v-670ec04d><div class="footer-family" data-v-670ec04d>Family Site +</div><div class="footer-subsidiaries" data-v-670ec04d>Subsidiaries +</div></div></div>',1)])))}}),BS=ln(US,[["__scopeId","data-v-670ec04d"]]);var $S="firebase",jS="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pr($S,jS,"app");const HS=yu({apiKey:"AIzaSyDKPlCJVzXjcs8hkahk7nyI2WriTRfWSXY",authDomain:"bead-asia.firebaseapp.com",projectId:"bead-asia",storageBucket:"bead-asia.firebasestorage.app",messagingSenderId:"597698103699",appId:"1:597698103699:web:25a9c20003cdc810b50066"}),lh=Jo(HS);new On;new Dn;new wi("apple.com");const qS={class:"main-header"},WS={class:"main-nav desktop-nav"},zS={key:1,class:"user-name"},GS={key:0,class:"mobile-menu"},QS=Xe({__name:"Header",props:{user:{}},emits:["logout"],setup(t,{emit:e}){const n=t,r=e,s=Ye(()=>{var c;return(c=n.user)!=null&&c.email?n.user.email.split("@")[0]:""}),i=async()=>{await lh.signOut(),r("logout")},o=Tt(!1);function l(){o.value=!1}return(c,u)=>{const d=mn("router-link");return le(),Ae("header",qS,[u[14]||(u[14]=K("div",{class:"logo"},"BEAD",-1)),K("nav",WS,[be(d,{to:"/"},{default:Je(()=>u[1]||(u[1]=[je("Home")])),_:1}),be(d,{to:"/events"},{default:Je(()=>u[2]||(u[2]=[je("Events")])),_:1}),be(d,{to:"/artists"},{default:Je(()=>u[3]||(u[3]=[je("Artists")])),_:1}),be(d,{to:"/places"},{default:Je(()=>u[4]||(u[4]=[je("Places")])),_:1}),be(d,{to:"/community"},{default:Je(()=>u[5]||(u[5]=[je("Community")])),_:1}),n.user?(le(),Ae("span",zS,it(s.value),1)):(le(),kt(d,{key:0,to:"/login",class:"login-link"},{default:Je(()=>u[6]||(u[6]=[je("Log In")])),_:1})),n.user?(le(),Ae("button",{key:2,class:"logout-btn",onClick:i},"Log Out")):$r("",!0)]),K("button",{class:"hamburger",onClick:u[0]||(u[0]=p=>o.value=!o.value)},u[7]||(u[7]=[K("span",null,null,-1),K("span",null,null,-1),K("span",null,null,-1)])),o.value?(le(),Ae("div",GS,[be(d,{to:"/",onClick:l},{default:Je(()=>u[8]||(u[8]=[je("Home")])),_:1}),be(d,{to:"/events",onClick:l},{default:Je(()=>u[9]||(u[9]=[je("Events")])),_:1}),be(d,{to:"/artists",onClick:l},{default:Je(()=>u[10]||(u[10]=[je("Artists")])),_:1}),be(d,{to:"/places",onClick:l},{default:Je(()=>u[11]||(u[11]=[je("Places")])),_:1}),be(d,{to:"/community",onClick:l},{default:Je(()=>u[12]||(u[12]=[je("Community")])),_:1}),be(d,{to:"/login",onClick:l},{default:Je(()=>u[13]||(u[13]=[je("Log In")])),_:1})])):$r("",!0)])}}}),JS=ln(QS,[["__scopeId","data-v-8444e09e"]]),YS={class:"app-container"},XS={key:0,class:"background-area"},ZS=Xe({__name:"App",setup(t){const{width:e}=KS(),n=Tt(!1),r=Tt(void 0);Bs(()=>{n.value=e.value<=768,lh.onAuthStateChanged(o=>{r.value=o})});function s(o){r.value=o}function i(){r.value=null}return(o,l)=>{const c=mn("router-view");return le(),Ae("div",YS,[n.value?$r("",!0):(le(),Ae("div",XS,l[0]||(l[0]=[K("img",{src:uT,alt:"Background",class:"background-image"},null,-1)]))),K("div",{class:Gt(["main-content",{"mobile-view":n.value}])},[be(JS,{user:r.value,onLogout:i},null,8,["user"]),be(c,{onLogin:s}),be(BS)],2),n.value?(le(),kt(IS,{key:1})):$r("",!0)])}}}),eP=ln(ZS,[["__scopeId","data-v-8caeb256"]]),tP="modulepreload",nP=function(t){return"/"+t},pp={},$t=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(n.map(u=>{if(u=nP(u),u in pp)return;pp[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":tP,d||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),d)return new Promise((y,P)=>{g.addEventListener("load",y),g.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ys=typeof document<"u";function Rv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function rP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Rv(t.default)}const Pe=Object.assign;function tc(t,e){const n={};for(const r in e){const s=e[r];n[r]=an(s)?s.map(t):t(s)}return n}const Pi=()=>{},an=Array.isArray,Sv=/#/g,sP=/&/g,iP=/\//g,oP=/=/g,aP=/\?/g,Pv=/\+/g,lP=/%5B/g,cP=/%5D/g,kv=/%5E/g,uP=/%60/g,Dv=/%7B/g,hP=/%7C/g,Ov=/%7D/g,dP=/%20/g;function ch(t){return encodeURI(""+t).replace(hP,"|").replace(lP,"[").replace(cP,"]")}function fP(t){return ch(t).replace(Dv,"{").replace(Ov,"}").replace(kv,"^")}function Wc(t){return ch(t).replace(Pv,"%2B").replace(dP,"+").replace(Sv,"%23").replace(sP,"%26").replace(uP,"`").replace(Dv,"{").replace(Ov,"}").replace(kv,"^")}function pP(t){return Wc(t).replace(oP,"%3D")}function gP(t){return ch(t).replace(Sv,"%23").replace(aP,"%3F")}function mP(t){return t==null?"":gP(t).replace(iP,"%2F")}function Qi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const _P=/\/$/,vP=t=>t.replace(_P,"");function nc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=TP(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Qi(o)}}function yP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function gp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function EP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fs(e.matched[r],n.matched[s])&&Vv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!AP(t[n],e[n]))return!1;return!0}function AP(t,e){return an(t)?mp(t,e):an(e)?mp(e,t):t===e}function mp(t,e){return an(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function TP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const tr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ji;(function(t){t.pop="pop",t.push="push"})(Ji||(Ji={}));var ki;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ki||(ki={}));function IP(t){if(!t)if(ys){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vP(t)}const wP=/^[^#]+#/;function bP(t,e){return t.replace(wP,"#")+e}function CP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const cl=()=>({left:window.scrollX,top:window.scrollY});function RP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=CP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function _p(t,e){return(history.state?history.state.position-e:-1)+t}const zc=new Map;function SP(t,e){zc.set(t,e)}function PP(t){const e=zc.get(t);return zc.delete(t),e}let kP=()=>location.protocol+"//"+location.host;function Nv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),gp(c,"")}return gp(n,t)+r+s}function DP(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const y=Nv(t,location),P=n.value,O=e.value;let k=0;if(g){if(n.value=y,e.value=g,o&&o===P){o=null;return}k=O?g.position-O.position:0}else r(y);s.forEach(F=>{F(n.value,P,{delta:k,type:Ji.pop,direction:k?k>0?ki.forward:ki.back:ki.unknown})})};function c(){o=n.value}function u(g){s.push(g);const y=()=>{const P=s.indexOf(g);P>-1&&s.splice(P,1)};return i.push(y),y}function d(){const{history:g}=window;g.state&&g.replaceState(Pe({},g.state,{scroll:cl()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function vp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?cl():null}}function OP(t){const{history:e,location:n}=window,r={value:Nv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:kP()+t+c;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(y){console.error(y),n[d?"replace":"assign"](g)}}function o(c,u){const d=Pe({},e.state,vp(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=Pe({},s.value,e.state,{forward:c,scroll:cl()});i(d.current,d,!0);const p=Pe({},vp(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function VP(t){t=IP(t);const e=OP(t),n=DP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:bP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function NP(t){return typeof t=="string"||t&&typeof t=="object"}function Mv(t){return typeof t=="string"||typeof t=="symbol"}const xv=Symbol("");var yp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yp||(yp={}));function Us(t,e){return Pe(new Error,{type:t,[xv]:!0},e)}function Rn(t,e){return t instanceof Error&&xv in t&&(e==null||!!(t.type&e))}const Ep="[^/]+?",MP={sensitive:!1,strict:!1,start:!0,end:!0},xP=/[.+*?^${}()[\]/\\]/g;function LP(t,e){const n=Pe({},MP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let y=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(xP,"\\$&"),y+=40;else if(g.type===1){const{value:P,repeatable:O,optional:k,regexp:F}=g;i.push({name:P,repeatable:O,optional:k});const U=F||Ep;if(U!==Ep){y+=10;try{new RegExp(`(${U})`)}catch($){throw new Error(`Invalid custom RegExp for param "${P}" (${U}): `+$.message)}}let B=O?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(B=k&&u.length<2?`(?:/${B})`:"/"+B),k&&(B+="?"),s+=B,y+=20,k&&(y+=-8),O&&(y+=-20),U===".*"&&(y+=-50)}d.push(y)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const y=d[g]||"",P=i[g-1];p[P.name]=y&&P.repeatable?y.split("/"):y}return p}function c(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of g)if(y.type===0)d+=y.value;else if(y.type===1){const{value:P,repeatable:O,optional:k}=y,F=P in u?u[P]:"";if(an(F)&&!O)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const U=an(F)?F.join("/"):F;if(!U)if(k)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=U}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function KP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Lv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=KP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ap(r))return 1;if(Ap(s))return-1}return s.length-r.length}function Ap(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const FP={type:0,value:""},UP=/[a-zA-Z0-9_]/;function BP(t){if(!t)return[[]];if(t==="/")return[[FP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:UP.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function $P(t,e,n){const r=LP(BP(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function jP(t,e){const n=[],r=new Map;e=bp({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,y){const P=!y,O=Ip(p);O.aliasOf=y&&y.record;const k=bp(e,p),F=[O];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of $)F.push(Ip(Pe({},O,{components:y?y.record.components:O.components,path:Z,aliasOf:y?y.record:O})))}let U,B;for(const $ of F){const{path:Z}=$;if(g&&Z[0]!=="/"){const ae=g.record.path,b=ae[ae.length-1]==="/"?"":"/";$.path=g.record.path+(Z&&b+Z)}if(U=$P($,g,k),y?y.alias.push(U):(B=B||U,B!==U&&B.alias.push(U),P&&p.name&&!wp(U)&&o(p.name)),Kv(U)&&c(U),O.children){const ae=O.children;for(let b=0;b<ae.length;b++)i(ae[b],U,y&&y.children[b])}y=y||U}return B?()=>{o(B)}:Pi}function o(p){if(Mv(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=WP(p,n);n.splice(g,0,p),p.record.name&&!wp(p)&&r.set(p.record.name,p)}function u(p,g){let y,P={},O,k;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Us(1,{location:p});k=y.record.name,P=Pe(Tp(g.params,y.keys.filter(B=>!B.optional).concat(y.parent?y.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),p.params&&Tp(p.params,y.keys.map(B=>B.name))),O=y.stringify(P)}else if(p.path!=null)O=p.path,y=n.find(B=>B.re.test(O)),y&&(P=y.parse(O),k=y.record.name);else{if(y=g.name?r.get(g.name):n.find(B=>B.re.test(g.path)),!y)throw Us(1,{location:p,currentLocation:g});k=y.record.name,P=Pe({},g.params,p.params),O=y.stringify(P)}const F=[];let U=y;for(;U;)F.unshift(U.record),U=U.parent;return{name:k,path:O,params:P,matched:F,meta:qP(F)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Tp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ip(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:HP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function HP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function wp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qP(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function bp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function WP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Lv(t,e[i])<0?r=i:n=i+1}const s=zP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function zP(t){let e=t;for(;e=e.parent;)if(Kv(e)&&Lv(t,e)===0)return e}function Kv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function GP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Pv," "),o=i.indexOf("="),l=Qi(o<0?i:i.slice(0,o)),c=o<0?null:Qi(i.slice(o+1));if(l in e){let u=e[l];an(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Cp(t){let e="";for(let n in t){const r=t[n];if(n=pP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(an(r)?r.map(i=>i&&Wc(i)):[r&&Wc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function QP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=an(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const JP=Symbol(""),Rp=Symbol(""),ul=Symbol(""),uh=Symbol(""),Gc=Symbol("");function ui(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function or(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(Us(4,{from:n,to:e})):g instanceof Error?c(g):NP(g)?c(Us(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function rc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Rv(c)){const d=(c.__vccOpts||c)[e];d&&i.push(or(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=rP(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const y=(p.__vccOpts||p)[e];return y&&or(y,n,r,o,l,s)()}))}}return i}function Sp(t){const e=Lt(ul),n=Lt(uh),r=Ye(()=>{const c=rn(t.to);return e.resolve(c)}),s=Ye(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Fs.bind(null,d));if(g>-1)return g;const y=Pp(c[u-2]);return u>1&&Pp(d)===y&&p[p.length-1].path!==y?p.findIndex(Fs.bind(null,c[u-2])):g}),i=Ye(()=>s.value>-1&&tk(n.params,r.value.params)),o=Ye(()=>s.value>-1&&s.value===n.matched.length-1&&Vv(n.params,r.value.params));function l(c={}){if(ek(c)){const u=e[rn(t.replace)?"replace":"push"](rn(t.to)).catch(Pi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ye(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function YP(t){return t.length===1?t[0]:t}const XP=Xe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sp,setup(t,{slots:e}){const n=Zi(Sp(t)),{options:r}=Lt(ul),s=Ye(()=>({[kp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[kp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&YP(e.default(n));return t.custom?i:Qg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ZP=XP;function ek(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function tk(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!an(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Pp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kp=(t,e,n)=>t??e??n,nk=Xe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Lt(Gc),s=Ye(()=>t.route||r.value),i=Lt(Rp,0),o=Ye(()=>{let u=rn(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Ye(()=>s.value.matched[o.value]);$o(Rp,Ye(()=>o.value+1)),$o(JP,l),$o(Gc,s);const c=Tt();return Br(()=>[c.value,l.value,t.name],([u,d,p],[g,y,P])=>{d&&(d.instances[p]=u,y&&y!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),u&&d&&(!y||!Fs(d,y)||!g)&&(d.enterCallbacks[p]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return Dp(n.default,{Component:g,route:u});const y=p.props[d],P=y?y===!0?u.params:typeof y=="function"?y(u):y:null,k=Qg(g,Pe({},P,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Dp(n.default,{Component:k,route:u})||k}}});function Dp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rk=nk;function sk(t){const e=jP(t.routes,t),n=t.parseQuery||GP,r=t.stringifyQuery||Cp,s=t.history,i=ui(),o=ui(),l=ui(),c=Fr(tr);let u=tr;ys&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=tc.bind(null,V=>""+V),p=tc.bind(null,mP),g=tc.bind(null,Qi);function y(V,Y){let Q,ee;return Mv(V)?(Q=e.getRecordMatcher(V),ee=Y):ee=V,e.addRoute(ee,Q)}function P(V){const Y=e.getRecordMatcher(V);Y&&e.removeRoute(Y)}function O(){return e.getRoutes().map(V=>V.record)}function k(V){return!!e.getRecordMatcher(V)}function F(V,Y){if(Y=Pe({},Y||c.value),typeof V=="string"){const R=nc(n,V,Y.path),N=e.resolve({path:R.path},Y),L=s.createHref(R.fullPath);return Pe(R,N,{params:g(N.params),hash:Qi(R.hash),redirectedFrom:void 0,href:L})}let Q;if(V.path!=null)Q=Pe({},V,{path:nc(n,V.path,Y.path).path});else{const R=Pe({},V.params);for(const N in R)R[N]==null&&delete R[N];Q=Pe({},V,{params:p(R)}),Y.params=p(Y.params)}const ee=e.resolve(Q,Y),Ce=V.hash||"";ee.params=d(g(ee.params));const A=yP(r,Pe({},V,{hash:fP(Ce),path:ee.path})),T=s.createHref(A);return Pe({fullPath:A,hash:Ce,query:r===Cp?QP(V.query):V.query||{}},ee,{redirectedFrom:void 0,href:T})}function U(V){return typeof V=="string"?nc(n,V,c.value.path):Pe({},V)}function B(V,Y){if(u!==V)return Us(8,{from:Y,to:V})}function $(V){return b(V)}function Z(V){return $(Pe(U(V),{replace:!0}))}function ae(V){const Y=V.matched[V.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let ee=typeof Q=="function"?Q(V):Q;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=U(ee):{path:ee},ee.params={}),Pe({query:V.query,hash:V.hash,params:ee.path!=null?{}:V.params},ee)}}function b(V,Y){const Q=u=F(V),ee=c.value,Ce=V.state,A=V.force,T=V.replace===!0,R=ae(Q);if(R)return b(Pe(U(R),{state:typeof R=="object"?Pe({},Ce,R.state):Ce,force:A,replace:T}),Y||Q);const N=Q;N.redirectedFrom=Y;let L;return!A&&EP(r,ee,Q)&&(L=Us(16,{to:N,from:ee}),Kt(ee,ee,!0,!1)),(L?Promise.resolve(L):I(N,ee)).catch(M=>Rn(M)?Rn(M,2)?M:Jt(M):ve(M,N,ee)).then(M=>{if(M){if(Rn(M,2))return b(Pe({replace:T},U(M.to),{state:typeof M.to=="object"?Pe({},Ce,M.to.state):Ce,force:A}),Y||N)}else M=w(N,ee,!0,T,Ce);return C(N,ee,M),M})}function v(V,Y){const Q=B(V,Y);return Q?Promise.reject(Q):Promise.resolve()}function _(V){const Y=Gn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(V):V()}function I(V,Y){let Q;const[ee,Ce,A]=ik(V,Y);Q=rc(ee.reverse(),"beforeRouteLeave",V,Y);for(const R of ee)R.leaveGuards.forEach(N=>{Q.push(or(N,V,Y))});const T=v.bind(null,V,Y);return Q.push(T),St(Q).then(()=>{Q=[];for(const R of i.list())Q.push(or(R,V,Y));return Q.push(T),St(Q)}).then(()=>{Q=rc(Ce,"beforeRouteUpdate",V,Y);for(const R of Ce)R.updateGuards.forEach(N=>{Q.push(or(N,V,Y))});return Q.push(T),St(Q)}).then(()=>{Q=[];for(const R of A)if(R.beforeEnter)if(an(R.beforeEnter))for(const N of R.beforeEnter)Q.push(or(N,V,Y));else Q.push(or(R.beforeEnter,V,Y));return Q.push(T),St(Q)}).then(()=>(V.matched.forEach(R=>R.enterCallbacks={}),Q=rc(A,"beforeRouteEnter",V,Y,_),Q.push(T),St(Q))).then(()=>{Q=[];for(const R of o.list())Q.push(or(R,V,Y));return Q.push(T),St(Q)}).catch(R=>Rn(R,8)?R:Promise.reject(R))}function C(V,Y,Q){l.list().forEach(ee=>_(()=>ee(V,Y,Q)))}function w(V,Y,Q,ee,Ce){const A=B(V,Y);if(A)return A;const T=Y===tr,R=ys?history.state:{};Q&&(ee||T?s.replace(V.fullPath,Pe({scroll:T&&R&&R.scroll},Ce)):s.push(V.fullPath,Ce)),c.value=V,Kt(V,Y,Q,T),Jt()}let E;function Se(){E||(E=s.listen((V,Y,Q)=>{if(!cn.listening)return;const ee=F(V),Ce=ae(ee);if(Ce){b(Pe(Ce,{replace:!0,force:!0}),ee).catch(Pi);return}u=ee;const A=c.value;ys&&SP(_p(A.fullPath,Q.delta),cl()),I(ee,A).catch(T=>Rn(T,12)?T:Rn(T,2)?(b(Pe(U(T.to),{force:!0}),ee).then(R=>{Rn(R,20)&&!Q.delta&&Q.type===Ji.pop&&s.go(-1,!1)}).catch(Pi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ve(T,ee,A))).then(T=>{T=T||w(ee,A,!1),T&&(Q.delta&&!Rn(T,8)?s.go(-Q.delta,!1):Q.type===Ji.pop&&Rn(T,20)&&s.go(-1,!1)),C(ee,A,T)}).catch(Pi)}))}let We=ui(),Oe=ui(),he;function ve(V,Y,Q){Jt(V);const ee=Oe.list();return ee.length?ee.forEach(Ce=>Ce(V,Y,Q)):console.error(V),Promise.reject(V)}function Dt(){return he&&c.value!==tr?Promise.resolve():new Promise((V,Y)=>{We.add([V,Y])})}function Jt(V){return he||(he=!V,Se(),We.list().forEach(([Y,Q])=>V?Q(V):Y()),We.reset()),V}function Kt(V,Y,Q,ee){const{scrollBehavior:Ce}=t;if(!ys||!Ce)return Promise.resolve();const A=!Q&&PP(_p(V.fullPath,0))||(ee||!Q)&&history.state&&history.state.scroll||null;return to().then(()=>Ce(V,Y,A)).then(T=>T&&RP(T)).catch(T=>ve(T,V,Y))}const Fe=V=>s.go(V);let Ue;const Gn=new Set,cn={currentRoute:c,listening:!0,addRoute:y,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:O,resolve:F,options:t,push:$,replace:Z,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Oe.add,isReady:Dt,install(V){const Y=this;V.component("RouterLink",ZP),V.component("RouterView",rk),V.config.globalProperties.$router=Y,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>rn(c)}),ys&&!Ue&&c.value===tr&&(Ue=!0,$(s.location).catch(Ce=>{}));const Q={};for(const Ce in tr)Object.defineProperty(Q,Ce,{get:()=>c.value[Ce],enumerable:!0});V.provide(ul,Y),V.provide(uh,cg(Q)),V.provide(Gc,c);const ee=V.unmount;Gn.add(V),V.unmount=function(){Gn.delete(V),Gn.size<1&&(u=tr,E&&E(),E=null,c.value=tr,Ue=!1,he=!1),ee()}}};function St(V){return V.reduce((Y,Q)=>Y.then(()=>_(Q)),Promise.resolve())}return cn}function ik(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Fs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Fs(u,c))||s.push(c))}return[n,r,s]}function ss(){return Lt(ul)}function ok(t){return Lt(uh)}const ak="/assets/Artists-B7wL3C7l.png",lk="/assets/Spaces-Dh34nGwL.png",ck="/assets/Community-BmVPxDQm.png",uk="/assets/float1-B-EcbCq8.jpg",hk="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAC3ANwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z",dk="/assets/Featured-1-zO3avben.jpg",fk="/assets/Featured-2-DGr03GcW.jpg",pk="/assets/Featured-3-BMrtHBtz.jpg",gk={class:"main-page"},mk={class:"main-hero"},_k={class:"hero-slider"},vk=["src"],yk={class:"featured"},Ek={class:"featured-list"},Ak={class:"featured-item"},Tk=["src"],Ik={class:"featured-item"},wk=["src"],bk={class:"featured-item"},Ck=["src"],Rk=Xe({__name:"HomeView",setup(t){const e=[uk,hk],n=[dk,fk,pk],r=Tt(0),s=ss(),i=()=>{r.value=(r.value+1)%e.length},o=()=>{r.value=(r.value-1+e.length)%e.length};function l(){s.push("/events")}function c(){s.push("/places")}Bs(()=>{}),uu(()=>{});const u=Ye(()=>e[r.value]);return(d,p)=>(le(),Ae("div",gk,[K("section",mk,[K("div",_k,[K("button",{class:"arrow left",onClick:o},"◀"),K("img",{src:u.value,alt:"Main Slide",class:"hero-img"},null,8,vk),K("button",{class:"arrow right",onClick:i},"▶"),K("div",{class:"hero-text-overlay"},[p[0]||(p[0]=K("h1",null,"예술과 공간을 연결합니다",-1)),p[1]||(p[1]=K("h2",null,"Space Meets Art",-1)),K("div",{class:"hero-buttons"},[K("button",{onClick:l,class:"discover-btn"},"Discover Event"),K("button",{onClick:c,class:"find-space-btn"},"Find a Space")])])])]),p[3]||(p[3]=$a('<section class="about-bead" data-v-96dce9d4><h2 data-v-96dce9d4>About BEAD</h2><div class="about-items" data-v-96dce9d4><div class="about-item" data-v-96dce9d4><img src="'+ak+'" alt="Artists Icon" class="about-icon" data-v-96dce9d4><h3 data-v-96dce9d4>Artists</h3><p data-v-96dce9d4>Independent artists can easily find audiences and venues for their performances.</p></div><div class="about-item" data-v-96dce9d4><img src="'+lk+'" alt="Spaces Icon" class="about-icon" data-v-96dce9d4><h3 data-v-96dce9d4>Spaces</h3><p data-v-96dce9d4><em data-v-96dce9d4>Unused spaces are utilized for</em> exhibitions and performances.</p></div><div class="about-item" data-v-96dce9d4><img src="'+ck+'" alt="Community Icon" class="about-icon" data-v-96dce9d4><h3 data-v-96dce9d4>Community</h3><p data-v-96dce9d4>We foster a vibrant community for both artists and art-lovers.</p></div></div></section>',1)),K("section",yk,[p[2]||(p[2]=K("h2",null,"Featured Events/Artists",-1)),K("div",Ek,[K("div",Ak,[K("img",{src:n[0],alt:"Featured 1"},null,8,Tk)]),K("div",Ik,[K("img",{src:n[1],alt:"Featured 2"},null,8,wk)]),K("div",bk,[K("img",{src:n[2],alt:"Featured 3"},null,8,Ck)])])])]))}}),Fv=ln(Rk,[["__scopeId","data-v-96dce9d4"]]),Sk=Object.freeze(Object.defineProperty({__proto__:null,default:Fv},Symbol.toStringTag,{value:"Module"})),Pk={class:"auth-page"},kk={class:"auth-box"},Dk={class:"links"},Ok={class:"error"},Vk=Xe({__name:"LoginView",emits:["login"],setup(t,{emit:e}){const n=Tt(""),r=Tt(""),s=Tt(""),i=ss(),o=e,l=async()=>{if(!n.value||!r.value){s.value="이메일과 비밀번호를 입력하세요.";return}s.value="";try{const c=await Bm(lh,n.value,r.value);o("login",c.user),i.push("/")}catch(c){s.value="로그인 실패: "+c.message}};return(c,u)=>{const d=mn("router-link");return le(),Ae("div",Pk,[K("div",kk,[u[5]||(u[5]=K("h2",null,"로그인",-1)),Hr(K("input",{"onUpdate:modelValue":u[0]||(u[0]=p=>n.value=p),type:"email",placeholder:"이메일을 입력하세요"},null,512),[[Wr,n.value]]),Hr(K("input",{"onUpdate:modelValue":u[1]||(u[1]=p=>r.value=p),type:"password",placeholder:"비밀번호를 입력하세요"},null,512),[[Wr,r.value]]),K("button",{class:"main-btn",onClick:l},"이메일로 로그인"),K("div",Dk,[be(d,{to:"/register"},{default:Je(()=>u[2]||(u[2]=[je("회원가입")])),_:1}),u[3]||(u[3]=K("span",null,"|",-1)),u[4]||(u[4]=K("a",{href:"#"},"이메일 찾기",-1))]),u[6]||(u[6]=$a('<div class="social-section" data-v-5564d280><div class="social-title" data-v-5564d280>간편로그인</div><div class="social-icons" data-v-5564d280><span class="icon naver" data-v-5564d280></span><span class="icon kakao" data-v-5564d280></span><span class="icon google" data-v-5564d280></span><span class="icon apple" data-v-5564d280></span><span class="icon facebook" data-v-5564d280></span></div></div><div class="desc" data-v-5564d280> 브라우저를 닫아도 로그인이 유지될 수 있습니다. 개인정보 보호를 위해<br data-v-5564d280> 공공장소에서 이용 시에는 꼭 로그아웃 해주세요. </div>',2)),K("div",Ok,it(s.value),1)])])}}}),Nk=ln(Vk,[["__scopeId","data-v-5564d280"]]),Mk={class:"auth-page"},xk={class:"auth-box"},Lk={class:"links"},Kk={class:"error"},Fk=Xe({__name:"RegisterView",setup(t){const e=Tt(""),n=Tt(""),r=Tt(""),s=ss(),i=()=>{if(!e.value||!n.value){r.value="이메일과 비밀번호를 입력하세요.";return}r.value="",s.push({name:"register-verify",query:{email:e.value}})};return(o,l)=>{const c=mn("router-link");return le(),Ae("div",Mk,[K("div",xk,[l[4]||(l[4]=K("h2",null,"회원가입",-1)),l[5]||(l[5]=K("div",{class:"desc"},"회원가입을 위해 인증 가능한 이메일을 입력해 주세요.",-1)),Hr(K("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>e.value=u),type:"email",placeholder:"이메일을 입력하세요"},null,512),[[Wr,e.value]]),Hr(K("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>n.value=u),type:"password",placeholder:"비밀번호를 입력하세요"},null,512),[[Wr,n.value]]),l[6]||(l[6]=$a('<div class="terms" data-v-3758b136><label data-v-3758b136><input type="checkbox" data-v-3758b136> 모두 동의합니다.</label><label data-v-3758b136><input type="checkbox" data-v-3758b136> 만 14세 이상입니다. (필수)</label><label data-v-3758b136><input type="checkbox" data-v-3758b136> 이용약관 (필수)</label><label data-v-3758b136><input type="checkbox" data-v-3758b136> 개인정보 수집 및 이용 (필수)</label><label data-v-3758b136><input type="checkbox" data-v-3758b136> 혜택 및 이벤트 정보 수신 동의 (선택)</label><label data-v-3758b136><input type="checkbox" data-v-3758b136> 본인확인 정보 수집 및 저장 (선택)</label></div>',1)),K("button",{class:"main-btn",onClick:i},"가입하기"),K("div",Lk,[l[3]||(l[3]=je(" 이미 회원이신가요? ")),be(c,{to:"/login"},{default:Je(()=>l[2]||(l[2]=[je("로그인")])),_:1})]),K("div",Kk,it(r.value),1)])])}}}),Uk=ln(Fk,[["__scopeId","data-v-3758b136"]]),Bk={class:"auth-page"},$k={class:"auth-box"},jk={class:"email-box"},Hk=Xe({__name:"RegisterVerifyView",setup(t){const e=ok(),n=ss(),r=e.query.email||"",s=Ye(()=>r?r.replace(/(.{2}).+(@.+)/,"$1xxxxx$2"):""),i=()=>n.push("/login"),o=()=>n.push("/register");return(l,c)=>(le(),Ae("div",Bk,[K("div",$k,[c[1]||(c[1]=K("h2",null,"인증 메일이 발송 되었습니다.",-1)),c[2]||(c[2]=K("div",{class:"desc"},[je(" 회원 가입을 위해"),K("br"),je(" 메일함을 확인 후 24시간 이내에"),K("br"),je(" 인증을 완료해주세요. ")],-1)),K("div",jk,[c[0]||(c[0]=K("div",null,"대표이메일",-1)),K("b",null,it(s.value),1)]),K("button",{class:"main-btn",onClick:i},"로그인"),K("button",{class:"sub-btn",onClick:o},"돌아가기"),c[3]||(c[3]=K("div",{class:"resend"},[K("span",null,"이메일을 받지 못하셨나요?"),K("a",{href:"#"},"이메일 재발송")],-1))])]))}}),qk=ln(Hk,[["__scopeId","data-v-7f7f9dc6"]]),Wk={class:"events-page"},zk={class:"search-box"},Gk={class:"calendar-section"},Qk={class:"calendar-table"},Jk={class:"event-list"},Yk=["onClick"],Xk={class:"event-date"},Zk={class:"event-info"},e1={class:"event-title"},t1={class:"event-location"},n1=Xe({__name:"EventsView",setup(t){const e=new Date,n=e.getFullYear(),r=e.getMonth(),s=e.getDate(),o=`${["January","February","March","April","May","June","July","August","September","October","November","December"][r]} ${n}`,l=["S","M","T","W","T","F","S"];function c(O,k){const F=new Date(O,k,1).getDay(),U=new Date(O,k+1,0).getDate(),B=[];let $=Array(F).fill(null);for(let Z=1;Z<=U;Z++)$.push(Z),$.length===7&&(B.push($),$=[]);if($.length){for(;$.length<7;)$.push(null);B.push($)}return B}const u=c(n,r);function d(O){const k=new Date;k.setDate(k.getDate()+O);const F=k.getFullYear(),U=String(k.getMonth()+1).padStart(2,"0"),B=String(k.getDate()).padStart(2,"0");return`${F}-${U}-${B}`}const p=[{id:"1",date:d(1),place:"Loft Studio",artist:"Emily Johnson"},{id:"2",date:d(2),place:"Harmony Cafe",artist:"David Kim"}],g=ss();function y(O){g.push(`/events/${O.id}`)}const P=Tt("");return(O,k)=>(le(),Ae("div",Wk,[k[2]||(k[2]=K("h1",null,"Events",-1)),K("div",zk,[Hr(K("input",{type:"text",placeholder:"Search events","onUpdate:modelValue":k[0]||(k[0]=F=>P.value=F)},null,512),[[Wr,P.value]])]),K("div",Gk,[K("div",{class:"calendar-header"},[K("span",{class:"calendar-month"},it(o)),k[1]||(k[1]=K("span",{class:"calendar-arrow"},">",-1))]),K("table",Qk,[K("thead",null,[K("tr",null,[(le(),Ae(Ke,null,Vn(l,F=>K("th",{key:F},it(F),1)),64))])]),K("tbody",null,[(le(!0),Ae(Ke,null,Vn(rn(u),(F,U)=>(le(),Ae("tr",{key:U},[(le(!0),Ae(Ke,null,Vn(F,(B,$)=>(le(),Ae("td",{key:$},[K("span",{class:Gt({today:B===rn(s)})},it(B||""),3)]))),128))]))),128))])])]),k[3]||(k[3]=K("hr",{class:"divider"},null,-1)),k[4]||(k[4]=K("h2",{class:"upcoming-title"},"Upcoming Events",-1)),K("div",Jk,[(le(),Ae(Ke,null,Vn(p,F=>K("div",{class:"event-card",key:F.id,onClick:U=>y(F)},[K("div",Xk,[K("div",null,it(F.date),1)]),K("div",Zk,[K("div",e1,it(F.artist),1),K("div",t1,it(F.place),1)])],8,Yk)),64))])]))}}),r1=ln(n1,[["__scopeId","data-v-725c495f"]]),s1={class:"places-page"},i1={class:"search-box"},o1={class:"places-list"},a1=["onClick"],l1=["src"],c1={class:"place-info"},u1={class:"place-name"},h1={class:"place-location"},d1=Xe({__name:"PlacesView",setup(t){const e=Tt(""),n=[{id:"1",name:"Loft Studio",location:"Seoul",img:"/place icon.png"},{id:"2",name:"Harmony Cafe",location:"Busan",img:"/place icon.png"},{id:"3",name:"Blue Hall",location:"Incheon",img:"/place icon.png"}],r=ss();function s(i){r.push(`/places/${i.id}`)}return(i,o)=>(le(),Ae("div",s1,[o[1]||(o[1]=K("h1",null,"Places",-1)),K("div",i1,[Hr(K("input",{type:"text",placeholder:"Search places","onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l)},null,512),[[Wr,e.value]])]),K("div",o1,[(le(),Ae(Ke,null,Vn(n,l=>K("div",{class:"place-card",key:l.name,onClick:c=>s(l)},[K("img",{src:l.img,alt:"place"},null,8,l1),K("div",c1,[K("div",u1,it(l.name),1),K("div",h1,it(l.location),1)])],8,a1)),64))])]))}}),f1=ln(d1,[["__scopeId","data-v-d407c659"]]),p1="/person%20icon.png",g1={class:"artists-page"},m1={class:"search-box"},_1={class:"artists-list"},v1=["onClick"],y1={class:"artist-info"},E1={class:"artist-name"},A1={class:"artist-type"},T1=Xe({__name:"ArtistsView",setup(t){const e=Tt(""),n=ss(),r=[{id:1,name:"Emily Johnson",type:"Visual Art",img:"/person icon.png"},{id:2,name:"David Kim",type:"Music",img:"/person icon.png"},{id:3,name:"Sarah Lee",type:"Theater",img:"/person icon.png"}];function s(i){n.push(`/artists/${i.id}`)}return(i,o)=>(le(),Ae("div",g1,[o[2]||(o[2]=K("h1",null,"Artists",-1)),K("div",m1,[Hr(K("input",{type:"text",placeholder:"Search artists","onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l)},null,512),[[Wr,e.value]])]),K("div",_1,[(le(),Ae(Ke,null,Vn(r,l=>K("div",{key:l.id,class:"artist-card",onClick:c=>s(l)},[o[1]||(o[1]=K("img",{src:p1,alt:"artist"},null,-1)),K("div",y1,[K("div",E1,it(l.name),1),K("div",A1,it(l.type),1)])],8,v1)),64))])]))}}),I1=ln(T1,[["__scopeId","data-v-cba84c86"]]),w1=[{path:"/",component:Fv},{path:"/login",component:Nk},{path:"/register",component:Uk},{path:"/register/verify",name:"register-verify",component:qk},{path:"/",name:"home",component:()=>$t(()=>Promise.resolve().then(()=>Sk),void 0)},{path:"/search",name:"search",component:()=>$t(()=>import("./SearchView-Dlez5lca.js"),[])},{path:"/events",name:"events",component:r1},{path:"/places",name:"places",component:f1},{path:"/artists",name:"artists",component:I1},{path:"/spaces",name:"spaces",component:()=>$t(()=>import("./SpacesView-BsClmfEy.js"),[])},{path:"/portfolio",name:"portfolio",component:()=>$t(()=>import("./PortfolioView-kqpJZ7Ii.js"),[])},{path:"/wishlist",name:"wishlist",component:()=>$t(()=>import("./WishlistView-Cn_2EJjW.js"),[]),meta:{requiresAuth:!0,allowedRoles:["consumer"]}},{path:"/bookings",name:"bookings",component:()=>$t(()=>import("./BookingsView-xKhAtBoG.js"),[]),meta:{requiresAuth:!0,allowedRoles:["consumer"]}},{path:"/community",name:"community",component:()=>$t(()=>import("./CommunityView-BscfQPqZ.js"),[]),meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:()=>$t(()=>import("./ProfileView-BDeA2x6m.js"),[]),meta:{requiresAuth:!0}},{path:"/artists/:id",name:"ArtistDetail",component:()=>$t(()=>import("./ArtistDetailView-Bi0ofN-g.js"),__vite__mapDeps([0,1]))},{path:"/places/:id",name:"PlaceDetail",component:()=>$t(()=>import("./PlaceDetailView-DFP0d1sL.js"),__vite__mapDeps([2,3]))},{path:"/events/:id",name:"EventDetail",component:()=>$t(()=>import("./EventDetailView-DSw5VcV7.js"),__vite__mapDeps([4,5]))},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>$t(()=>import("./NotFoundView-Cbksj6sJ.js"),[])}],Uv=sk({history:VP(),routes:w1});Uv.beforeEach((t,e,n)=>{const r=Cv(),s=t.matched.some(l=>l.meta.requiresAuth),i=t.matched.some(l=>l.meta.requiresGuest),o=t.meta.allowedRoles;s&&!r.isAuthenticated?n("/login"):i&&r.isAuthenticated?n({name:"home"}):o&&!o.includes(r.userRole||"")?n({name:"home"}):n()});var b1=Object.defineProperty,Op=Object.getOwnPropertySymbols,C1=Object.prototype.hasOwnProperty,R1=Object.prototype.propertyIsEnumerable,Vp=(t,e,n)=>e in t?b1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Bv=(t,e)=>{for(var n in e||(e={}))C1.call(e,n)&&Vp(t,n,e[n]);if(Op)for(var n of Op(e))R1.call(e,n)&&Vp(t,n,e[n]);return t},hl=t=>typeof t=="function",dl=t=>typeof t=="string",$v=t=>dl(t)&&t.trim().length>0,S1=t=>typeof t=="number",Lr=t=>typeof t>"u",Yi=t=>typeof t=="object"&&t!==null,P1=t=>An(t,"tag")&&$v(t.tag),jv=t=>window.TouchEvent&&t instanceof TouchEvent,Hv=t=>An(t,"component")&&qv(t.component),k1=t=>hl(t)||Yi(t),qv=t=>!Lr(t)&&(dl(t)||k1(t)||Hv(t)),Np=t=>Yi(t)&&["height","width","right","left","top","bottom"].every(e=>S1(t[e])),An=(t,e)=>(Yi(t)||hl(t))&&e in t,D1=(t=>()=>t++)(0);function sc(t){return jv(t)?t.targetTouches[0].clientX:t.clientX}function Mp(t){return jv(t)?t.targetTouches[0].clientY:t.clientY}var O1=t=>{Lr(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},fo=t=>Hv(t)?fo(t.component):P1(t)?Xe({render(){return t}}):typeof t=="string"?t:we(rn(t)),V1=t=>{if(typeof t=="string")return t;const e=An(t,"props")&&Yi(t.props)?t.props:{},n=An(t,"listeners")&&Yi(t.listeners)?t.listeners:{};return{component:fo(t),props:e,listeners:n}},N1=()=>typeof window<"u",hh=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(r=>r(e))}},M1=t=>["on","off","emit"].every(e=>An(t,e)&&hl(t[e])),Nt;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(Nt||(Nt={}));var Da;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(Da||(Da={}));var Mt;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(Mt||(Mt={}));var tn="Vue-Toastification",Xt={type:{type:String,default:Nt.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},Wv={type:Xt.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},na={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:Xt.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},Qc={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},zv={transition:{type:[Object,String],default:`${tn}__bounce`}},x1={position:{type:String,default:Da.TOP_RIGHT},draggable:Xt.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:Xt.trueBoolean,pauseOnHover:Xt.trueBoolean,closeOnClick:Xt.trueBoolean,timeout:Qc.timeout,hideProgressBar:Qc.hideProgressBar,toastClassName:Xt.classNames,bodyClassName:Xt.classNames,icon:Wv.customIcon,closeButton:na.component,closeButtonClassName:na.classNames,showCloseButtonOnHover:na.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new hh}},L1={id:{type:[String,Number],required:!0,default:0},type:Xt.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},K1={container:{type:[Object,Function],default:()=>document.body},newestOnTop:Xt.trueBoolean,maxToasts:{type:Number,default:20},transition:zv.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:Xt.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},Kn={CORE_TOAST:x1,TOAST:L1,CONTAINER:K1,PROGRESS_BAR:Qc,ICON:Wv,TRANSITION:zv,CLOSE_BUTTON:na},Gv=Xe({name:"VtProgressBar",props:Kn.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${tn}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function F1(t,e){return le(),Ae("div",{style:Xi(t.style),class:Gt(t.cpClass)},null,6)}Gv.render=F1;var U1=Gv,Qv=Xe({name:"VtCloseButton",props:Kn.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?fo(this.component):"button"},classes(){const t=[`${tn}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),B1=je(" × ");function $1(t,e){return le(),kt(hu(t.buttonComponent),ja({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:Je(()=>[B1]),_:1},16,["aria-label","class"])}Qv.render=$1;var j1=Qv,Jv={},H1={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},q1=K("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),W1=[q1];function z1(t,e){return le(),Ae("svg",H1,W1)}Jv.render=z1;var G1=Jv,Yv={},Q1={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},J1=K("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),Y1=[J1];function X1(t,e){return le(),Ae("svg",Q1,Y1)}Yv.render=X1;var xp=Yv,Xv={},Z1={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},eD=K("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),tD=[eD];function nD(t,e){return le(),Ae("svg",Z1,tD)}Xv.render=nD;var rD=Xv,Zv={},sD={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},iD=K("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),oD=[iD];function aD(t,e){return le(),Ae("svg",sD,oD)}Zv.render=aD;var lD=Zv,ey=Xe({name:"VtIcon",props:Kn.ICON,computed:{customIconChildren(){return An(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return dl(this.customIcon)?this.trimValue(this.customIcon):An(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return An(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:qv(this.customIcon)?fo(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Nt.DEFAULT]:xp,[Nt.INFO]:xp,[Nt.SUCCESS]:G1,[Nt.ERROR]:lD,[Nt.WARNING]:rD}[this.type]},iconClasses(){const t=[`${tn}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return $v(t)?t.trim():e}}});function cD(t,e){return le(),kt(hu(t.component),{class:Gt(t.iconClasses)},{default:Je(()=>[je(it(t.customIconChildren),1)]),_:1},8,["class"])}ey.render=cD;var uD=ey,ty=Xe({name:"VtToast",components:{ProgressBar:U1,CloseButton:j1,Icon:uD},inheritAttrs:!1,props:Object.assign({},Kn.CORE_TOAST,Kn.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${tn}__toast`,`${tn}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${tn}__toast--rtl`),t},bodyClasses(){return[`${tn}__toast-${dl(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return Np(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:An,getVueComponentFromObj:fo,closeToast(){this.eventBus.emit(Mt.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:sc(t),y:Mp(t)},this.dragStart=sc(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:sc(t),y:Mp(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,Np(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),hD=["role"];function dD(t,e){const n=mn("Icon"),r=mn("CloseButton"),s=mn("ProgressBar");return le(),Ae("div",{class:Gt(t.classes),style:Xi(t.draggableStyle),onClick:e[0]||(e[0]=(...i)=>t.clickHandler&&t.clickHandler(...i)),onMouseenter:e[1]||(e[1]=(...i)=>t.hoverPause&&t.hoverPause(...i)),onMouseleave:e[2]||(e[2]=(...i)=>t.hoverPlay&&t.hoverPlay(...i))},[t.icon?(le(),kt(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):$r("v-if",!0),K("div",{role:t.accessibility.toastRole||"alert",class:Gt(t.bodyClasses)},[typeof t.content=="string"?(le(),Ae(Ke,{key:0},[je(it(t.content),1)],2112)):(le(),kt(hu(t.getVueComponentFromObj(t.content)),ja({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},DE(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,hD),t.closeButton?(le(),kt(r,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:XA(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):$r("v-if",!0),t.timeout?(le(),kt(s,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):$r("v-if",!0)],38)}ty.render=dD;var fD=ty,ny=Xe({name:"VtTransition",props:Kn.TRANSITION,emits:["leave"],methods:{hasProp:An,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function pD(t,e){return le(),kt(HA,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:Je(()=>[kE(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}ny.render=pD;var gD=ny,ry=Xe({name:"VueToastification",devtools:{hide:!0},components:{Toast:fD,VtTransition:gD},props:Object.assign({},Kn.CORE_TOAST,Kn.CONTAINER,Kn.TRANSITION),data(){return{count:0,positions:Object.values(Da),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(Mt.ADD,this.addToast),t.on(Mt.CLEAR,this.clearToasts),t.on(Mt.DISMISS,this.dismissToast),t.on(Mt.UPDATE,this.updateToast),t.on(Mt.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){hl(t)&&(t=await t()),O1(this.$el),t.appendChild(this.$el)},setToast(t){Lr(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=V1(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!Lr(e)&&!Lr(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){Lr(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${tn}__container`,t].concat(this.defaults.containerClassName)}}});function mD(t,e){const n=mn("Toast"),r=mn("VtTransition");return le(),Ae("div",null,[(le(!0),Ae(Ke,null,Vn(t.positions,s=>(le(),Ae("div",{key:s},[be(r,{transition:t.defaults.transition,class:Gt(t.getClasses(s))},{default:Je(()=>[(le(!0),Ae(Ke,null,Vn(t.getPositionToasts(s),i=>(le(),kt(n,ja({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}ry.render=mD;var _D=ry,Lp=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new hh;e&&to(()=>{const i=tm(_D,Bv({},t)),o=i.mount(document.createElement("div")),l=t.onMounted;if(Lr(l)||l(o,i),t.shareAppContext){const c=t.shareAppContext;c===!0?console.warn(`[${tn}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const r=(i,o)=>{const l=Object.assign({},{id:D1(),type:Nt.DEFAULT},o,{content:i});return n.emit(Mt.ADD,l),l.id};r.clear=()=>n.emit(Mt.CLEAR,void 0),r.updateDefaults=i=>{n.emit(Mt.UPDATE_DEFAULTS,i)},r.dismiss=i=>{n.emit(Mt.DISMISS,i)};function s(i,{content:o,options:l},c=!1){const u=Object.assign({},l,{content:o});n.emit(Mt.UPDATE,{id:i,options:u,create:c})}return r.update=s,r.success=(i,o)=>r(i,Object.assign({},o,{type:Nt.SUCCESS})),r.info=(i,o)=>r(i,Object.assign({},o,{type:Nt.INFO})),r.error=(i,o)=>r(i,Object.assign({},o,{type:Nt.ERROR})),r.warning=(i,o)=>r(i,Object.assign({},o,{type:Nt.WARNING})),r},vD=()=>{const t=()=>console.warn(`[${tn}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function yD(t){return N1()?M1(t)?Lp({eventBus:t},!1):Lp(t,!0):vD()}var ED=Symbol("VueToastification"),AD=new hh,TD=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=yD(Bv({eventBus:AD},e));t.provide(ED,n)},ID=TD;const wD={apiKey:"AIzaSyDKPlCJVzXjcs8hkahk7nyI2WriTRfWSXY",authDomain:"bead-asia.firebaseapp.com",projectId:"bead-asia",storageBucket:"bead-asia.firebasestorage.app",messagingSenderId:"597698103699",appId:"1:597698103699:web:25a9c20003cdc810b50066"};yu(wD);const fl=tm(eP);fl.use(rT());fl.use(Uv);fl.use(ID,{position:"top-right",timeout:3e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1});fl.mount("#app");export{Ke as F,ln as _,rn as a,K as b,Ae as c,Xe as d,p1 as e,je as f,$r as g,le as o,Vn as r,it as t,ok as u};
//# sourceMappingURL=index-DVe3EmgS.js.map
