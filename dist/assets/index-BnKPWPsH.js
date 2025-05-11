const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-BaBPNx75.js","assets/HomeView-DFG5Khyd.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Kl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},ds=[],un=()=>{},kv=()=>!1,ba=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gl=t=>t.startsWith("onUpdate:"),Je=Object.assign,Ql=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ov=Object.prototype.hasOwnProperty,Re=(t,e)=>Ov.call(t,e),ae=Array.isArray,ps=t=>Ra(t)==="[object Map]",Np=t=>Ra(t)==="[object Set]",fe=t=>typeof t=="function",Be=t=>typeof t=="string",Mn=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Lp=t=>(Ne(t)||fe(t))&&fe(t.then)&&fe(t.catch),Mp=Object.prototype.toString,Ra=t=>Mp.call(t),Dv=t=>Ra(t).slice(8,-1),xp=t=>Ra(t)==="[object Object]",Jl=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ci=Kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vv=/-(\w)/g,$t=Sa(t=>t.replace(Vv,(e,n)=>n?n.toUpperCase():"")),Nv=/\B([A-Z])/g,Kr=Sa(t=>t.replace(Nv,"-$1").toLowerCase()),Ca=Sa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vo=Sa(t=>t?`on${Ca(t)}`:""),sr=(t,e)=>!Object.is(t,e),No=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Fp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},nl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Lv=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let Yh;const Pa=()=>Yh||(Yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hi(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?Uv(r):Hi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||Ne(t))return t}const Mv=/;(?![^(]*\))/g,xv=/:([^]+)/,Fv=/\/\*[^]*?\*\//g;function Uv(t){const e={};return t.replace(Fv,"").split(Mv).forEach(n=>{if(n){const r=n.split(xv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xt(t){let e="";if(Be(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=Xt(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$v=Kl(Bv);function Up(t){return!!t||t===""}const Bp=t=>!!(t&&t.__v_isRef===!0),ka=t=>Be(t)?t:t==null?"":ae(t)||Ne(t)&&(t.toString===Mp||!fe(t.toString))?Bp(t)?ka(t.value):JSON.stringify(t,$p,2):String(t),$p=(t,e)=>Bp(e)?$p(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ac(r,i)+" =>"]=s,n),{})}:Np(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ac(n))}:Mn(e)?Ac(e):Ne(e)&&!ae(e)&&!xp(e)?String(e):e,Ac=(t,e="")=>{var n;return Mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vt;class jp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=vt,!e&&vt&&(this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=vt;try{return vt=this,e()}finally{vt=n}}}on(){vt=this}off(){vt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Hp(t){return new jp(t)}function Xl(){return vt}function qp(t,e=!1){vt&&vt.cleanups.push(t)}let De;const bc=new WeakSet;class Wp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,vt&&vt.active&&vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bc.has(this)&&(bc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zh(this),Gp(this);const e=De,n=Qt;De=this,Qt=!0;try{return this.fn()}finally{Qp(this),De=e,Qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)eu(e);this.deps=this.depsTail=void 0,Zh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rl(this)&&this.run()}get dirty(){return rl(this)}}let zp=0,li,ui;function Kp(t,e=!1){if(t.flags|=8,e){t.next=ui,ui=t;return}t.next=li,li=t}function Yl(){zp++}function Zl(){if(--zp>0)return;if(ui){let e=ui;for(ui=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;li;){let e=li;for(li=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Gp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),eu(r),jv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function rl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Jp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ii))return;t.globalVersion=Ii;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!rl(t)){t.flags&=-3;return}const n=De,r=Qt;De=t,Qt=!0;try{Gp(t);const s=t.fn(t._value);(e.version===0||sr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,Qt=r,Qp(t),t.flags&=-3}}function eu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)eu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function jv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qt=!0;const Xp=[];function vr(){Xp.push(Qt),Qt=!1}function Er(){const t=Xp.pop();Qt=t===void 0?!0:t}function Zh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let Ii=0;class Hv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!De||!Qt||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new Hv(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,Yp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,Ii++,this.notify(e)}notify(e){Yl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zl()}}}function Yp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Yp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Jo=new WeakMap,Lr=Symbol(""),sl=Symbol(""),wi=Symbol("");function dt(t,e,n){if(Qt&&De){let r=Jo.get(t);r||Jo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new tu),s.map=r,s.key=n),s.track()}}function wn(t,e,n,r,s,i){const o=Jo.get(t);if(!o){Ii++;return}const c=l=>{l&&l.trigger()};if(Yl(),e==="clear")o.forEach(c);else{const l=ae(t),u=l&&Jl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===wi||!Mn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(wi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Lr)),ps(t)&&c(o.get(sl)));break;case"delete":l||(c(o.get(Lr)),ps(t)&&c(o.get(sl)));break;case"set":ps(t)&&c(o.get(Lr));break}}Zl()}function qv(t,e){const n=Jo.get(t);return n&&n.get(e)}function rs(t){const e=ve(t);return e===t?e:(dt(e,"iterate",wi),Ut(t)?e:e.map(pt))}function Oa(t){return dt(t=ve(t),"iterate",wi),t}const Wv={__proto__:null,[Symbol.iterator](){return Rc(this,Symbol.iterator,pt)},concat(...t){return rs(this).concat(...t.map(e=>ae(e)?rs(e):e))},entries(){return Rc(this,"entries",t=>(t[1]=pt(t[1]),t))},every(t,e){return En(this,"every",t,e,void 0,arguments)},filter(t,e){return En(this,"filter",t,e,n=>n.map(pt),arguments)},find(t,e){return En(this,"find",t,e,pt,arguments)},findIndex(t,e){return En(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return En(this,"findLast",t,e,pt,arguments)},findLastIndex(t,e){return En(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return En(this,"forEach",t,e,void 0,arguments)},includes(...t){return Sc(this,"includes",t)},indexOf(...t){return Sc(this,"indexOf",t)},join(t){return rs(this).join(t)},lastIndexOf(...t){return Sc(this,"lastIndexOf",t)},map(t,e){return En(this,"map",t,e,void 0,arguments)},pop(){return Zs(this,"pop")},push(...t){return Zs(this,"push",t)},reduce(t,...e){return ef(this,"reduce",t,e)},reduceRight(t,...e){return ef(this,"reduceRight",t,e)},shift(){return Zs(this,"shift")},some(t,e){return En(this,"some",t,e,void 0,arguments)},splice(...t){return Zs(this,"splice",t)},toReversed(){return rs(this).toReversed()},toSorted(t){return rs(this).toSorted(t)},toSpliced(...t){return rs(this).toSpliced(...t)},unshift(...t){return Zs(this,"unshift",t)},values(){return Rc(this,"values",pt)}};function Rc(t,e,n){const r=Oa(t),s=r[e]();return r!==t&&!Ut(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const zv=Array.prototype;function En(t,e,n,r,s,i){const o=Oa(t),c=o!==t&&!Ut(t),l=o[e];if(l!==zv[e]){const p=l.apply(t,i);return c?pt(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,pt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function ef(t,e,n,r){const s=Oa(t);let i=n;return s!==t&&(Ut(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,pt(c),l,t)}),s[e](i,...r)}function Sc(t,e,n){const r=ve(t);dt(r,"iterate",wi);const s=r[e](...n);return(s===-1||s===!1)&&su(n[0])?(n[0]=ve(n[0]),r[e](...n)):s}function Zs(t,e,n=[]){vr(),Yl();const r=ve(t)[e].apply(t,n);return Zl(),Er(),r}const Kv=Kl("__proto__,__v_isRef,__isVue"),Zp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mn));function Gv(t){Mn(t)||(t=String(t));const e=ve(this);return dt(e,"has",t),e.hasOwnProperty(t)}class em{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?sE:sm:i?rm:nm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){let l;if(o&&(l=Wv[n]))return l;if(n==="hasOwnProperty")return Gv}const c=Reflect.get(e,n,He(e)?e:r);return(Mn(n)?Zp.has(n):Kv(n))||(s||dt(e,"get",n),i)?c:He(c)?o&&Jl(n)?c:c.value:Ne(c)?s?om(c):qi(c):c}}class tm extends em{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Br(i);if(!Ut(r)&&!Br(r)&&(i=ve(i),r=ve(r)),!ae(e)&&He(i)&&!He(r))return l?!1:(i.value=r,!0)}const o=ae(e)&&Jl(n)?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,He(e)?e:s);return e===ve(s)&&(o?sr(r,i)&&wn(e,"set",n,r):wn(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&wn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Mn(n)||!Zp.has(n))&&dt(e,"has",n),r}ownKeys(e){return dt(e,"iterate",ae(e)?"length":Lr),Reflect.ownKeys(e)}}class Qv extends em{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Jv=new tm,Xv=new Qv,Yv=new tm(!0);const il=t=>t,wo=t=>Reflect.getPrototypeOf(t);function Zv(t,e,n){return function(...r){const s=this.__v_raw,i=ve(s),o=ps(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?il:e?ol:pt;return!e&&dt(i,"iterate",l?sl:Lr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function eE(t,e){const n={get(s){const i=this.__v_raw,o=ve(i),c=ve(s);t||(sr(s,c)&&dt(o,"get",s),dt(o,"get",c));const{has:l}=wo(o),u=e?il:t?ol:pt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&dt(ve(s),"iterate",Lr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=ve(i),c=ve(s);return t||(sr(s,c)&&dt(o,"has",s),dt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=ve(c),u=e?il:t?ol:pt;return!t&&dt(l,"iterate",Lr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Je(n,t?{add:Ao("add"),set:Ao("set"),delete:Ao("delete"),clear:Ao("clear")}:{add(s){!e&&!Ut(s)&&!Br(s)&&(s=ve(s));const i=ve(this);return wo(i).has.call(i,s)||(i.add(s),wn(i,"add",s,s)),this},set(s,i){!e&&!Ut(i)&&!Br(i)&&(i=ve(i));const o=ve(this),{has:c,get:l}=wo(o);let u=c.call(o,s);u||(s=ve(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?sr(i,f)&&wn(o,"set",s,i):wn(o,"add",s,i),this},delete(s){const i=ve(this),{has:o,get:c}=wo(i);let l=o.call(i,s);l||(s=ve(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&wn(i,"delete",s,void 0),u},clear(){const s=ve(this),i=s.size!==0,o=s.clear();return i&&wn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Zv(s,t,e)}),n}function nu(t,e){const n=eE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const tE={get:nu(!1,!1)},nE={get:nu(!1,!0)},rE={get:nu(!0,!1)};const nm=new WeakMap,rm=new WeakMap,sm=new WeakMap,sE=new WeakMap;function iE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oE(t){return t.__v_skip||!Object.isExtensible(t)?0:iE(Dv(t))}function qi(t){return Br(t)?t:ru(t,!1,Jv,tE,nm)}function im(t){return ru(t,!1,Yv,nE,rm)}function om(t){return ru(t,!0,Xv,rE,sm)}function ru(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=oE(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function ir(t){return Br(t)?ir(t.__v_raw):!!(t&&t.__v_isReactive)}function Br(t){return!!(t&&t.__v_isReadonly)}function Ut(t){return!!(t&&t.__v_isShallow)}function su(t){return t?!!t.__v_raw:!1}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function iu(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Fp(t,"__v_skip",!0),t}const pt=t=>Ne(t)?qi(t):t,ol=t=>Ne(t)?om(t):t;function He(t){return t?t.__v_isRef===!0:!1}function Da(t){return am(t,!1)}function Mr(t){return am(t,!0)}function am(t,e){return He(t)?t:new aE(t,e)}class aE{constructor(e,n){this.dep=new tu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ve(e),this._value=n?e:pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ut(e)||Br(e);e=r?e:ve(e),sr(e,n)&&(this._rawValue=e,this._value=r?e:pt(e),this.dep.trigger())}}function Sn(t){return He(t)?t.value:t}function ms(t){return fe(t)?t():Sn(t)}const cE={get:(t,e,n)=>e==="__v_raw"?t:Sn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return He(s)&&!He(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function cm(t){return ir(t)?t:new Proxy(t,cE)}function lE(t){const e=ae(t)?new Array(t.length):{};for(const n in t)e[n]=hE(t,n);return e}class uE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return qv(ve(this._object),this._key)}}function hE(t,e,n){const r=t[e];return He(r)?r:new uE(t,e,n)}class fE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ii-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Kp(this,!0),!0}get value(){const e=this.dep.track();return Jp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dE(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new fE(r,s,n)}const bo={},Xo=new WeakMap;let kr;function pE(t,e=!1,n=kr){if(n){let r=Xo.get(n);r||Xo.set(n,r=[]),r.push(t)}}function mE(t,e,n=Oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=H=>s?H:Ut(H)||s===!1||s===0?An(H,1):An(H);let f,p,m,v,P=!1,O=!1;if(He(t)?(p=()=>t.value,P=Ut(t)):ir(t)?(p=()=>u(t),P=!0):ae(t)?(O=!0,P=t.some(H=>ir(H)||Ut(H)),p=()=>t.map(H=>{if(He(H))return H.value;if(ir(H))return u(H);if(fe(H))return l?l(H,2):H()})):fe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){vr();try{m()}finally{Er()}}const H=kr;kr=f;try{return l?l(t,3,[v]):t(v)}finally{kr=H}}:p=un,e&&s){const H=p,Z=s===!0?1/0:s;p=()=>An(H(),Z)}const D=Xl(),j=()=>{f.stop(),D&&D.active&&Ql(D.effects,f)};if(i&&e){const H=e;e=(...Z)=>{H(...Z),j()}}let F=O?new Array(t.length).fill(bo):bo;const $=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const Z=f.run();if(s||P||(O?Z.some((oe,b)=>sr(oe,F[b])):sr(Z,F))){m&&m();const oe=kr;kr=f;try{const b=[Z,F===bo?void 0:O&&F[0]===bo?[]:F,v];l?l(e,3,b):e(...b),F=Z}finally{kr=oe}}}else f.run()};return c&&c($),f=new Wp(p),f.scheduler=o?()=>o($,!1):$,v=H=>pE(H,!1,f),m=f.onStop=()=>{const H=Xo.get(f);if(H){if(l)l(H,4);else for(const Z of H)Z();Xo.delete(f)}},e?r?$(!0):F=f.run():o?o($.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function An(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,He(t))An(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)An(t[r],e,n);else if(Np(t)||ps(t))t.forEach(r=>{An(r,e,n)});else if(xp(t)){for(const r in t)An(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&An(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wi(t,e,n,r){try{return r?t(...r):t()}catch(s){Va(s,e,n)}}function Yt(t,e,n,r){if(fe(t)){const s=Wi(t,e,n,r);return s&&Lp(s)&&s.catch(i=>{Va(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Yt(t[i],e,n,r));return s}}function Va(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Oe;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){vr(),Wi(i,null,10,[t,l,u]),Er();return}}gE(t,n,s,r,o)}function gE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Et=[];let an=-1;const gs=[];let Qn=null,is=0;const lm=Promise.resolve();let Yo=null;function zi(t){const e=Yo||lm;return t?e.then(this?t.bind(this):t):e}function _E(t){let e=an+1,n=Et.length;for(;e<n;){const r=e+n>>>1,s=Et[r],i=Ai(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ou(t){if(!(t.flags&1)){const e=Ai(t),n=Et[Et.length-1];!n||!(t.flags&2)&&e>=Ai(n)?Et.push(t):Et.splice(_E(e),0,t),t.flags|=1,um()}}function um(){Yo||(Yo=lm.then(fm))}function yE(t){ae(t)?gs.push(...t):Qn&&t.id===-1?Qn.splice(is+1,0,t):t.flags&1||(gs.push(t),t.flags|=1),um()}function tf(t,e,n=an+1){for(;n<Et.length;n++){const r=Et[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Et.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function hm(t){if(gs.length){const e=[...new Set(gs)].sort((n,r)=>Ai(n)-Ai(r));if(gs.length=0,Qn){Qn.push(...e);return}for(Qn=e,is=0;is<Qn.length;is++){const n=Qn[is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Qn=null,is=0}}const Ai=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fm(t){try{for(an=0;an<Et.length;an++){const e=Et[an];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;an<Et.length;an++){const e=Et[an];e&&(e.flags&=-2)}an=-1,Et.length=0,hm(),Yo=null,(Et.length||gs.length)&&fm()}}let ze=null,dm=null;function Zo(t){const e=ze;return ze=t,dm=t&&t.type.__scopeId||null,e}function hr(t,e=ze,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&df(-1);const i=Zo(e);let o;try{o=t(...s)}finally{Zo(i),r._d&&df(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Yk(t,e){if(ze===null)return t;const n=$a(ze),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Oe]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&An(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Sr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(vr(),Yt(l,n,8,[t.el,c,t,e]),Er())}}const vE=Symbol("_vte"),pm=t=>t.__isTeleport,Jn=Symbol("_leaveCb"),Ro=Symbol("_enterCb");function mm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ki(()=>{t.isMounted=!0}),wm(()=>{t.isUnmounting=!0}),t}const Lt=[Function,Array],gm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt},_m=t=>{const e=t.subTree;return e.component?_m(e.component):e},EE={name:"BaseTransition",props:gm,setup(t,{slots:e}){const n=Gi(),r=mm();return()=>{const s=e.default&&au(e.default(),!0);if(!s||!s.length)return;const i=ym(s),o=ve(t),{mode:c}=o;if(r.isLeaving)return Cc(i);const l=nf(i);if(!l)return Cc(i);let u=bi(l,o,r,n,p=>u=p);l.type!==Tt&&$r(l,u);let f=n.subTree&&nf(n.subTree);if(f&&f.type!==Tt&&!Dr(l,f)&&_m(n).type!==Tt){let p=bi(f,o,r,n);if($r(f,p),c==="out-in"&&l.type!==Tt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Cc(i);c==="in-out"&&l.type!==Tt?p.delayLeave=(m,v,P)=>{const O=vm(r,f);O[String(f.key)]=f,m[Jn]=()=>{v(),m[Jn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{P(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function ym(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Tt){e=n;break}}return e}const TE=EE;function vm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function bi(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:v,onAfterLeave:P,onLeaveCancelled:O,onBeforeAppear:D,onAppear:j,onAfterAppear:F,onAppearCancelled:$}=e,H=String(t.key),Z=vm(n,t),oe=(_,I)=>{_&&Yt(_,r,9,I)},b=(_,I)=>{const R=I[1];oe(_,I),ae(_)?_.every(A=>A.length<=1)&&R():_.length<=1&&R()},y={mode:o,persisted:c,beforeEnter(_){let I=l;if(!n.isMounted)if(i)I=D||l;else return;_[Jn]&&_[Jn](!0);const R=Z[H];R&&Dr(t,R)&&R.el[Jn]&&R.el[Jn](),oe(I,[_])},enter(_){let I=u,R=f,A=p;if(!n.isMounted)if(i)I=j||u,R=F||f,A=$||p;else return;let E=!1;const Ae=_[Ro]=$e=>{E||(E=!0,$e?oe(A,[_]):oe(R,[_]),y.delayedLeave&&y.delayedLeave(),_[Ro]=void 0)};I?b(I,[_,Ae]):Ae()},leave(_,I){const R=String(t.key);if(_[Ro]&&_[Ro](!0),n.isUnmounting)return I();oe(m,[_]);let A=!1;const E=_[Jn]=Ae=>{A||(A=!0,I(),Ae?oe(O,[_]):oe(P,[_]),_[Jn]=void 0,Z[R]===t&&delete Z[R])};Z[R]=t,v?b(v,[_,E]):E()},clone(_){const I=bi(_,e,n,r,s);return s&&s(I),I}};return y}function Cc(t){if(Na(t))return t=fr(t),t.children=null,t}function nf(t){if(!Na(t))return pm(t.type)&&t.children?ym(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function $r(t,e){t.shapeFlag&6&&t.component?(t.transition=e,$r(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function au(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ye?(o.patchFlag&128&&s++,r=r.concat(au(o.children,e,c))):(e||o.type!==Tt)&&r.push(c!=null?fr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function nn(t,e){return fe(t)?Je({name:t.name},e,{setup:t}):t}function Em(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ea(t,e,n,r,s=!1){if(ae(t)){t.forEach((P,O)=>ea(P,e&&(ae(e)?e[O]:e),n,r,s));return}if(_s(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ea(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?$a(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Oe?c.refs={}:c.refs,p=c.setupState,m=ve(p),v=p===Oe?()=>!1:P=>Re(m,P);if(u!=null&&u!==l&&(Be(u)?(f[u]=null,v(u)&&(p[u]=null)):He(u)&&(u.value=null)),fe(l))Wi(l,c,12,[o,f]);else{const P=Be(l),O=He(l);if(P||O){const D=()=>{if(t.f){const j=P?v(l)?p[l]:f[l]:l.value;s?ae(j)&&Ql(j,i):ae(j)?j.includes(i)||j.push(i):P?(f[l]=[i],v(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else P?(f[l]=o,v(l)&&(p[l]=o)):O&&(l.value=o,t.k&&(f[t.k]=o))};o?(D.id=-1,Ct(D,n)):D()}}}Pa().requestIdleCallback;Pa().cancelIdleCallback;const _s=t=>!!t.type.__asyncLoader,Na=t=>t.type.__isKeepAlive;function IE(t,e){Tm(t,"a",e)}function wE(t,e){Tm(t,"da",e)}function Tm(t,e,n=Ze){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(La(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Na(s.parent.vnode)&&AE(r,e,n,s),s=s.parent}}function AE(t,e,n,r){const s=La(e,t,r,!0);Am(()=>{Ql(r[e],s)},n)}function La(t,e,n=Ze,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{vr();const c=Qi(n),l=Yt(e,n,t,o);return c(),Er(),l});return r?s.unshift(i):s.push(i),i}}const xn=t=>(e,n=Ze)=>{(!Ci||t==="sp")&&La(t,(...r)=>e(...r),n)},bE=xn("bm"),Ki=xn("m"),RE=xn("bu"),Im=xn("u"),wm=xn("bum"),Am=xn("um"),SE=xn("sp"),CE=xn("rtg"),PE=xn("rtc");function kE(t,e=Ze){La("ec",t,e)}const bm="components";function xr(t,e){return Sm(bm,t,!0,e)||t}const Rm=Symbol.for("v-ndc");function Ma(t){return Be(t)?Sm(bm,t,!1)||t:t||Rm}function Sm(t,e,n=!0,r=!1){const s=ze||Ze;if(s){const i=s.type;{const c=yT(i,!1);if(c&&(c===e||c===$t(e)||c===Ca($t(e))))return i}const o=rf(s[t]||i[t],e)||rf(s.appContext[t],e);return!o&&r?i:o}}function rf(t,e){return t&&(t[e]||t[$t(e)]||t[Ca($t(e))])}function al(t,e,n,r){let s;const i=n,o=ae(t);if(o||Be(t)){const c=o&&ir(t);let l=!1;c&&(l=!Ut(t),t=Oa(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?pt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}function OE(t,e,n={},r,s){if(ze.ce||ze.parent&&_s(ze.parent)&&ze.parent.ce)return Pe(),bt(Ye,null,[Ke("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Pe();const o=i&&Cm(i(n)),c=n.key||o&&o.key,l=bt(Ye,{key:(c&&!Mn(c)?c:`_${e}`)+""},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Cm(t){return t.some(e=>Si(e)?!(e.type===Tt||e.type===Ye&&!Cm(e.children)):!0)?t:null}function DE(t,e){const n={};for(const r in t)n[Vo(r)]=t[r];return n}const cl=t=>t?Gm(t)?$a(t):cl(t.parent):null,hi=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cl(t.parent),$root:t=>cl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>km(t),$forceUpdate:t=>t.f||(t.f=()=>{ou(t.update)}),$nextTick:t=>t.n||(t.n=zi.bind(t.proxy)),$watch:t=>eT.bind(t)}),Pc=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Re(t,e),VE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Pc(r,e))return o[e]=1,r[e];if(s!==Oe&&Re(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Re(u,e))return o[e]=3,i[e];if(n!==Oe&&Re(n,e))return o[e]=4,n[e];ll&&(o[e]=0)}}const f=hi[e];let p,m;if(f)return e==="$attrs"&&dt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&Re(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Re(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Pc(s,e)?(s[e]=n,!0):r!==Oe&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Oe&&Re(t,o)||Pc(e,o)||(c=i[0])&&Re(c,o)||Re(r,o)||Re(hi,o)||Re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sf(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ll=!0;function NE(t){const e=km(t),n=t.proxy,r=t.ctx;ll=!1,e.beforeCreate&&of(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:v,updated:P,activated:O,deactivated:D,beforeDestroy:j,beforeUnmount:F,destroyed:$,unmounted:H,render:Z,renderTracked:oe,renderTriggered:b,errorCaptured:y,serverPrefetch:_,expose:I,inheritAttrs:R,components:A,directives:E,filters:Ae}=e;if(u&&LE(u,r,null),o)for(const le in o){const ge=o[le];fe(ge)&&(r[le]=ge.bind(n))}if(s){const le=s.call(n,n);Ne(le)&&(t.data=qi(le))}if(ll=!0,i)for(const le in i){const ge=i[le],Rt=fe(ge)?ge.bind(n,n):fe(ge.get)?ge.get.bind(n,n):un,Ht=!fe(ge)&&fe(ge.set)?ge.set.bind(n):un,Dt=st({get:Rt,set:Ht});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:Le=>Dt.value=Le})}if(c)for(const le in c)Pm(c[le],r,n,le);if(l){const le=fe(l)?l.call(n):l;Reflect.ownKeys(le).forEach(ge=>{Lo(ge,le[ge])})}f&&of(f,t,"c");function Ce(le,ge){ae(ge)?ge.forEach(Rt=>le(Rt.bind(n))):ge&&le(ge.bind(n))}if(Ce(bE,p),Ce(Ki,m),Ce(RE,v),Ce(Im,P),Ce(IE,O),Ce(wE,D),Ce(kE,y),Ce(PE,oe),Ce(CE,b),Ce(wm,F),Ce(Am,H),Ce(SE,_),ae(I))if(I.length){const le=t.exposed||(t.exposed={});I.forEach(ge=>{Object.defineProperty(le,ge,{get:()=>n[ge],set:Rt=>n[ge]=Rt})})}else t.exposed||(t.exposed={});Z&&t.render===un&&(t.render=Z),R!=null&&(t.inheritAttrs=R),A&&(t.components=A),E&&(t.directives=E),_&&Em(t)}function LE(t,e,n=un){ae(t)&&(t=ul(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=Jt(s.from||r,s.default,!0):i=Jt(s.from||r):i=Jt(s),He(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function of(t,e,n){Yt(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pm(t,e,n,r){let s=r.includes(".")?Hm(n,r):()=>n[r];if(Be(t)){const i=e[t];fe(i)&&Ur(s,i)}else if(fe(t))Ur(s,t.bind(n));else if(Ne(t))if(ae(t))t.forEach(i=>Pm(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Ur(s,i,t)}}function km(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ta(l,u,o,!0)),ta(l,e,o)),Ne(e)&&i.set(e,l),l}function ta(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ta(t,i,n,!0),s&&s.forEach(o=>ta(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=ME[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const ME={data:af,props:cf,emits:cf,methods:ni,computed:ni,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:ni,directives:ni,watch:FE,provide:af,inject:xE};function af(t,e){return e?t?function(){return Je(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function xE(t,e){return ni(ul(t),ul(e))}function ul(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function ni(t,e){return t?Je(Object.create(null),t,e):e}function cf(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:Je(Object.create(null),sf(t),sf(e??{})):e}function FE(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=yt(t[r],e[r]);return n}function Om(){return{app:null,config:{isNativeTag:kv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let UE=0;function BE(t,e){return function(r,s=null){fe(r)||(r=Je({},r)),s!=null&&!Ne(s)&&(s=null);const i=Om(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:UE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ET,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(u,...p)):fe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const v=u._ceVNode||Ke(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(v,f,m),l=!0,u._container=f,f.__vue_app__=u,$a(v.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Yt(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Fr;Fr=u;try{return f()}finally{Fr=p}}};return u}}let Fr=null;function Lo(t,e){if(Ze){let n=Ze.provides;const r=Ze.parent&&Ze.parent.provides;r===n&&(n=Ze.provides=Object.create(r)),n[t]=e}}function Jt(t,e,n=!1){const r=Ze||ze;if(r||Fr){const s=Fr?Fr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function cu(){return!!(Ze||ze||Fr)}const Dm={},Vm=()=>Object.create(Dm),Nm=t=>Object.getPrototypeOf(t)===Dm;function $E(t,e,n,r=!1){const s={},i=Vm();t.propsDefaults=Object.create(null),Lm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:im(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function jE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=ve(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(xa(t.emitsOptions,m))continue;const v=e[m];if(l)if(Re(i,m))v!==i[m]&&(i[m]=v,u=!0);else{const P=$t(m);s[P]=hl(l,c,P,v,t,!1)}else v!==i[m]&&(i[m]=v,u=!0)}}}else{Lm(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=Kr(p))===p||!Re(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=hl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],u=!0)}u&&wn(t.attrs,"set","")}function Lm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ci(l))continue;const u=e[l];let f;s&&Re(s,f=$t(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:xa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=ve(n),u=c||Oe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=hl(s,l,p,u[p],t,!Re(u,p))}}return o}function hl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Qi(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Kr(n))&&(r=!0))}return r}const HE=new WeakMap;function Mm(t,e,n=!1){const r=n?HE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const f=p=>{l=!0;const[m,v]=Mm(p,e,!0);Je(o,m),v&&c.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ne(t)&&r.set(t,ds),ds;if(ae(i))for(let f=0;f<i.length;f++){const p=$t(i[f]);lf(p)&&(o[p]=Oe)}else if(i)for(const f in i){const p=$t(f);if(lf(p)){const m=i[f],v=o[p]=ae(m)||fe(m)?{type:m}:Je({},m),P=v.type;let O=!1,D=!0;if(ae(P))for(let j=0;j<P.length;++j){const F=P[j],$=fe(F)&&F.name;if($==="Boolean"){O=!0;break}else $==="String"&&(D=!1)}else O=fe(P)&&P.name==="Boolean";v[0]=O,v[1]=D,(O||Re(v,"default"))&&c.push(p)}}const u=[o,c];return Ne(t)&&r.set(t,u),u}function lf(t){return t[0]!=="$"&&!ci(t)}const xm=t=>t[0]==="_"||t==="$stable",lu=t=>ae(t)?t.map(ln):[ln(t)],qE=(t,e,n)=>{if(e._n)return e;const r=hr((...s)=>lu(e(...s)),n);return r._c=!1,r},Fm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(xm(s))continue;const i=t[s];if(fe(i))e[s]=qE(s,i,r);else if(i!=null){const o=lu(i);e[s]=()=>o}}},Um=(t,e)=>{const n=lu(e);t.slots.default=()=>n},Bm=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},WE=(t,e,n)=>{const r=t.slots=Vm();if(t.vnode.shapeFlag&32){const s=e._;s?(Bm(r,e,n),n&&Fp(r,"_",s,!0)):Fm(e,r)}else e&&Um(t,e)},zE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Bm(s,e,n):(i=!e.$stable,Fm(e,s)),o=e}else e&&(Um(t,e),o={default:1});if(i)for(const c in s)!xm(c)&&o[c]==null&&delete s[c]},Ct=aT;function KE(t){return GE(t)}function GE(t,e){const n=Pa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:v=un,insertStaticContent:P}=t,O=(T,w,S,N=null,x=null,L=null,K=void 0,W=null,q=!!w.dynamicChildren)=>{if(T===w)return;T&&!Dr(T,w)&&(N=V(T),Le(T,x,L,!0),T=null),w.patchFlag===-2&&(q=!1,w.dynamicChildren=null);const{type:U,ref:te,shapeFlag:Q}=w;switch(U){case Fa:D(T,w,S,N);break;case Tt:j(T,w,S,N);break;case Mo:T==null&&F(w,S,N,K);break;case Ye:A(T,w,S,N,x,L,K,W,q);break;default:Q&1?Z(T,w,S,N,x,L,K,W,q):Q&6?E(T,w,S,N,x,L,K,W,q):(Q&64||Q&128)&&U.process(T,w,S,N,x,L,K,W,q,Y)}te!=null&&x&&ea(te,T&&T.ref,L,w||T,!w)},D=(T,w,S,N)=>{if(T==null)r(w.el=c(w.children),S,N);else{const x=w.el=T.el;w.children!==T.children&&u(x,w.children)}},j=(T,w,S,N)=>{T==null?r(w.el=l(w.children||""),S,N):w.el=T.el},F=(T,w,S,N)=>{[T.el,T.anchor]=P(T.children,w,S,N,T.el,T.anchor)},$=({el:T,anchor:w},S,N)=>{let x;for(;T&&T!==w;)x=m(T),r(T,S,N),T=x;r(w,S,N)},H=({el:T,anchor:w})=>{let S;for(;T&&T!==w;)S=m(T),s(T),T=S;s(w)},Z=(T,w,S,N,x,L,K,W,q)=>{w.type==="svg"?K="svg":w.type==="math"&&(K="mathml"),T==null?oe(w,S,N,x,L,K,W,q):_(T,w,x,L,K,W,q)},oe=(T,w,S,N,x,L,K,W)=>{let q,U;const{props:te,shapeFlag:Q,transition:ee,dirs:ce}=T;if(q=T.el=o(T.type,L,te&&te.is,te),Q&8?f(q,T.children):Q&16&&y(T.children,q,null,N,x,kc(T,L),K,W),ce&&Sr(T,null,N,"created"),b(q,T,T.scopeId,K,N),te){for(const pe in te)pe!=="value"&&!ci(pe)&&i(q,pe,null,te[pe],L,N);"value"in te&&i(q,"value",null,te.value,L),(U=te.onVnodeBeforeMount)&&sn(U,N,T)}ce&&Sr(T,null,N,"beforeMount");const ne=QE(x,ee);ne&&ee.beforeEnter(q),r(q,w,S),((U=te&&te.onVnodeMounted)||ne||ce)&&Ct(()=>{U&&sn(U,N,T),ne&&ee.enter(q),ce&&Sr(T,null,N,"mounted")},x)},b=(T,w,S,N,x)=>{if(S&&v(T,S),N)for(let L=0;L<N.length;L++)v(T,N[L]);if(x){let L=x.subTree;if(w===L||Wm(L.type)&&(L.ssContent===w||L.ssFallback===w)){const K=x.vnode;b(T,K,K.scopeId,K.slotScopeIds,x.parent)}}},y=(T,w,S,N,x,L,K,W,q=0)=>{for(let U=q;U<T.length;U++){const te=T[U]=W?Xn(T[U]):ln(T[U]);O(null,te,w,S,N,x,L,K,W)}},_=(T,w,S,N,x,L,K)=>{const W=w.el=T.el;let{patchFlag:q,dynamicChildren:U,dirs:te}=w;q|=T.patchFlag&16;const Q=T.props||Oe,ee=w.props||Oe;let ce;if(S&&Cr(S,!1),(ce=ee.onVnodeBeforeUpdate)&&sn(ce,S,w,T),te&&Sr(w,T,S,"beforeUpdate"),S&&Cr(S,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f(W,""),U?I(T.dynamicChildren,U,W,S,N,kc(w,x),L):K||ge(T,w,W,null,S,N,kc(w,x),L,!1),q>0){if(q&16)R(W,Q,ee,S,x);else if(q&2&&Q.class!==ee.class&&i(W,"class",null,ee.class,x),q&4&&i(W,"style",Q.style,ee.style,x),q&8){const ne=w.dynamicProps;for(let pe=0;pe<ne.length;pe++){const Ee=ne[pe],at=Q[Ee],et=ee[Ee];(et!==at||Ee==="value")&&i(W,Ee,at,et,x,S)}}q&1&&T.children!==w.children&&f(W,w.children)}else!K&&U==null&&R(W,Q,ee,S,x);((ce=ee.onVnodeUpdated)||te)&&Ct(()=>{ce&&sn(ce,S,w,T),te&&Sr(w,T,S,"updated")},N)},I=(T,w,S,N,x,L,K)=>{for(let W=0;W<w.length;W++){const q=T[W],U=w[W],te=q.el&&(q.type===Ye||!Dr(q,U)||q.shapeFlag&70)?p(q.el):S;O(q,U,te,null,N,x,L,K,!0)}},R=(T,w,S,N,x)=>{if(w!==S){if(w!==Oe)for(const L in w)!ci(L)&&!(L in S)&&i(T,L,w[L],null,x,N);for(const L in S){if(ci(L))continue;const K=S[L],W=w[L];K!==W&&L!=="value"&&i(T,L,W,K,x,N)}"value"in S&&i(T,"value",w.value,S.value,x)}},A=(T,w,S,N,x,L,K,W,q)=>{const U=w.el=T?T.el:c(""),te=w.anchor=T?T.anchor:c("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:ce}=w;ce&&(W=W?W.concat(ce):ce),T==null?(r(U,S,N),r(te,S,N),y(w.children||[],S,te,x,L,K,W,q)):Q>0&&Q&64&&ee&&T.dynamicChildren?(I(T.dynamicChildren,ee,S,x,L,K,W),(w.key!=null||x&&w===x.subTree)&&$m(T,w,!0)):ge(T,w,S,te,x,L,K,W,q)},E=(T,w,S,N,x,L,K,W,q)=>{w.slotScopeIds=W,T==null?w.shapeFlag&512?x.ctx.activate(w,S,N,K,q):Ae(w,S,N,x,L,K,q):$e(T,w,q)},Ae=(T,w,S,N,x,L,K)=>{const W=T.component=dT(T,N,x);if(Na(T)&&(W.ctx.renderer=Y),pT(W,!1,K),W.asyncDep){if(x&&x.registerDep(W,Ce,K),!T.el){const q=W.subTree=Ke(Tt);j(null,q,w,S)}}else Ce(W,T,w,S,x,L,K)},$e=(T,w,S)=>{const N=w.component=T.component;if(iT(T,w,S))if(N.asyncDep&&!N.asyncResolved){le(N,w,S);return}else N.next=w,N.update();else w.el=T.el,N.vnode=w},Ce=(T,w,S,N,x,L,K)=>{const W=()=>{if(T.isMounted){let{next:Q,bu:ee,u:ce,parent:ne,vnode:pe}=T;{const ct=jm(T);if(ct){Q&&(Q.el=pe.el,le(T,Q,K)),ct.asyncDep.then(()=>{T.isUnmounted||W()});return}}let Ee=Q,at;Cr(T,!1),Q?(Q.el=pe.el,le(T,Q,K)):Q=pe,ee&&No(ee),(at=Q.props&&Q.props.onVnodeBeforeUpdate)&&sn(at,ne,Q,pe),Cr(T,!0);const et=hf(T),Vt=T.subTree;T.subTree=et,O(Vt,et,p(Vt.el),V(Vt),T,x,L),Q.el=et.el,Ee===null&&oT(T,et.el),ce&&Ct(ce,x),(at=Q.props&&Q.props.onVnodeUpdated)&&Ct(()=>sn(at,ne,Q,pe),x)}else{let Q;const{el:ee,props:ce}=w,{bm:ne,m:pe,parent:Ee,root:at,type:et}=T,Vt=_s(w);Cr(T,!1),ne&&No(ne),!Vt&&(Q=ce&&ce.onVnodeBeforeMount)&&sn(Q,Ee,w),Cr(T,!0);{at.ce&&at.ce._injectChildStyle(et);const ct=T.subTree=hf(T);O(null,ct,S,N,T,x,L),w.el=ct.el}if(pe&&Ct(pe,x),!Vt&&(Q=ce&&ce.onVnodeMounted)){const ct=w;Ct(()=>sn(Q,Ee,ct),x)}(w.shapeFlag&256||Ee&&_s(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&T.a&&Ct(T.a,x),T.isMounted=!0,w=S=N=null}};T.scope.on();const q=T.effect=new Wp(W);T.scope.off();const U=T.update=q.run.bind(q),te=T.job=q.runIfDirty.bind(q);te.i=T,te.id=T.uid,q.scheduler=()=>ou(te),Cr(T,!0),U()},le=(T,w,S)=>{w.component=T;const N=T.vnode.props;T.vnode=w,T.next=null,jE(T,w.props,N,S),zE(T,w.children,S),vr(),tf(T),Er()},ge=(T,w,S,N,x,L,K,W,q=!1)=>{const U=T&&T.children,te=T?T.shapeFlag:0,Q=w.children,{patchFlag:ee,shapeFlag:ce}=w;if(ee>0){if(ee&128){Ht(U,Q,S,N,x,L,K,W,q);return}else if(ee&256){Rt(U,Q,S,N,x,L,K,W,q);return}}ce&8?(te&16&&wt(U,x,L),Q!==U&&f(S,Q)):te&16?ce&16?Ht(U,Q,S,N,x,L,K,W,q):wt(U,x,L,!0):(te&8&&f(S,""),ce&16&&y(Q,S,N,x,L,K,W,q))},Rt=(T,w,S,N,x,L,K,W,q)=>{T=T||ds,w=w||ds;const U=T.length,te=w.length,Q=Math.min(U,te);let ee;for(ee=0;ee<Q;ee++){const ce=w[ee]=q?Xn(w[ee]):ln(w[ee]);O(T[ee],ce,S,null,x,L,K,W,q)}U>te?wt(T,x,L,!0,!1,Q):y(w,S,N,x,L,K,W,q,Q)},Ht=(T,w,S,N,x,L,K,W,q)=>{let U=0;const te=w.length;let Q=T.length-1,ee=te-1;for(;U<=Q&&U<=ee;){const ce=T[U],ne=w[U]=q?Xn(w[U]):ln(w[U]);if(Dr(ce,ne))O(ce,ne,S,null,x,L,K,W,q);else break;U++}for(;U<=Q&&U<=ee;){const ce=T[Q],ne=w[ee]=q?Xn(w[ee]):ln(w[ee]);if(Dr(ce,ne))O(ce,ne,S,null,x,L,K,W,q);else break;Q--,ee--}if(U>Q){if(U<=ee){const ce=ee+1,ne=ce<te?w[ce].el:N;for(;U<=ee;)O(null,w[U]=q?Xn(w[U]):ln(w[U]),S,ne,x,L,K,W,q),U++}}else if(U>ee)for(;U<=Q;)Le(T[U],x,L,!0),U++;else{const ce=U,ne=U,pe=new Map;for(U=ne;U<=ee;U++){const tt=w[U]=q?Xn(w[U]):ln(w[U]);tt.key!=null&&pe.set(tt.key,U)}let Ee,at=0;const et=ee-ne+1;let Vt=!1,ct=0;const Bn=new Array(et);for(U=0;U<et;U++)Bn[U]=0;for(U=ce;U<=Q;U++){const tt=T[U];if(at>=et){Le(tt,x,L,!0);continue}let Nt;if(tt.key!=null)Nt=pe.get(tt.key);else for(Ee=ne;Ee<=ee;Ee++)if(Bn[Ee-ne]===0&&Dr(tt,w[Ee])){Nt=Ee;break}Nt===void 0?Le(tt,x,L,!0):(Bn[Nt-ne]=U+1,Nt>=ct?ct=Nt:Vt=!0,O(tt,w[Nt],S,null,x,L,K,W,q),at++)}const Bs=Vt?JE(Bn):ds;for(Ee=Bs.length-1,U=et-1;U>=0;U--){const tt=ne+U,Nt=w[tt],oo=tt+1<te?w[tt+1].el:N;Bn[U]===0?O(null,Nt,S,oo,x,L,K,W,q):Vt&&(Ee<0||U!==Bs[Ee]?Dt(Nt,S,oo,2):Ee--)}}},Dt=(T,w,S,N,x=null)=>{const{el:L,type:K,transition:W,children:q,shapeFlag:U}=T;if(U&6){Dt(T.component.subTree,w,S,N);return}if(U&128){T.suspense.move(w,S,N);return}if(U&64){K.move(T,w,S,Y);return}if(K===Ye){r(L,w,S);for(let Q=0;Q<q.length;Q++)Dt(q[Q],w,S,N);r(T.anchor,w,S);return}if(K===Mo){$(T,w,S);return}if(N!==2&&U&1&&W)if(N===0)W.beforeEnter(L),r(L,w,S),Ct(()=>W.enter(L),x);else{const{leave:Q,delayLeave:ee,afterLeave:ce}=W,ne=()=>r(L,w,S),pe=()=>{Q(L,()=>{ne(),ce&&ce()})};ee?ee(L,ne,pe):pe()}else r(L,w,S)},Le=(T,w,S,N=!1,x=!1)=>{const{type:L,props:K,ref:W,children:q,dynamicChildren:U,shapeFlag:te,patchFlag:Q,dirs:ee,cacheIndex:ce}=T;if(Q===-2&&(x=!1),W!=null&&ea(W,null,S,T,!0),ce!=null&&(w.renderCache[ce]=void 0),te&256){w.ctx.deactivate(T);return}const ne=te&1&&ee,pe=!_s(T);let Ee;if(pe&&(Ee=K&&K.onVnodeBeforeUnmount)&&sn(Ee,w,T),te&6)rn(T.component,S,N);else{if(te&128){T.suspense.unmount(S,N);return}ne&&Sr(T,null,w,"beforeUnmount"),te&64?T.type.remove(T,w,S,Y,N):U&&!U.hasOnce&&(L!==Ye||Q>0&&Q&64)?wt(U,w,S,!1,!0):(L===Ye&&Q&384||!x&&te&16)&&wt(q,w,S),N&&Me(T)}(pe&&(Ee=K&&K.onVnodeUnmounted)||ne)&&Ct(()=>{Ee&&sn(Ee,w,T),ne&&Sr(T,null,w,"unmounted")},S)},Me=T=>{const{type:w,el:S,anchor:N,transition:x}=T;if(w===Ye){Un(S,N);return}if(w===Mo){H(T);return}const L=()=>{s(S),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(T.shapeFlag&1&&x&&!x.persisted){const{leave:K,delayLeave:W}=x,q=()=>K(S,L);W?W(T.el,L,q):q()}else L()},Un=(T,w)=>{let S;for(;T!==w;)S=m(T),s(T),T=S;s(w)},rn=(T,w,S)=>{const{bum:N,scope:x,job:L,subTree:K,um:W,m:q,a:U}=T;uf(q),uf(U),N&&No(N),x.stop(),L&&(L.flags|=8,Le(K,T,w,S)),W&&Ct(W,w),Ct(()=>{T.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},wt=(T,w,S,N=!1,x=!1,L=0)=>{for(let K=L;K<T.length;K++)Le(T[K],w,S,N,x)},V=T=>{if(T.shapeFlag&6)return V(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const w=m(T.anchor||T.el),S=w&&w[vE];return S?m(S):w};let J=!1;const G=(T,w,S)=>{T==null?w._vnode&&Le(w._vnode,null,null,!0):O(w._vnode||null,T,w,null,null,null,S),w._vnode=T,J||(J=!0,tf(),hm(),J=!1)},Y={p:O,um:Le,m:Dt,r:Me,mt:Ae,mc:y,pc:ge,pbc:I,n:V,o:t};return{render:G,hydrate:void 0,createApp:BE(G)}}function kc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Cr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function QE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $m(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Xn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&$m(o,c)),c.type===Fa&&(c.el=o.el)}}function JE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function jm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jm(e)}function uf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const XE=Symbol.for("v-scx"),YE=()=>Jt(XE);function ZE(t,e){return uu(t,null,e)}function Ur(t,e,n){return uu(t,e,n)}function uu(t,e,n=Oe){const{immediate:r,deep:s,flush:i,once:o}=n,c=Je({},n),l=e&&r||!e&&i!=="post";let u;if(Ci){if(i==="sync"){const v=YE();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=un,v.resume=un,v.pause=un,v}}const f=Ze;c.call=(v,P,O)=>Yt(v,f,P,O);let p=!1;i==="post"?c.scheduler=v=>{Ct(v,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(v,P)=>{P?v():ou(v)}),c.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const m=mE(t,e,c);return Ci&&(u?u.push(m):l&&m()),m}function eT(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?Hm(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Qi(this),c=uu(s,i.bind(r),n);return o(),c}function Hm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const tT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$t(e)}Modifiers`]||t[`${Kr(e)}Modifiers`];function nT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&tT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Be(f)?f.trim():f)),o.number&&(s=n.map(nl)));let c,l=r[c=Vo(e)]||r[c=Vo($t(e))];!l&&i&&(l=r[c=Vo(Kr(e))]),l&&Yt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Yt(u,t,6,s)}}function qm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=u=>{const f=qm(u,e,!0);f&&(c=!0,Je(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ne(t)&&r.set(t,null),null):(ae(i)?i.forEach(l=>o[l]=null):Je(o,i),Ne(t)&&r.set(t,o),o)}function xa(t,e){return!t||!ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Kr(e))||Re(t,e))}function hf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:v,ctx:P,inheritAttrs:O}=t,D=Zo(t);let j,F;try{if(n.shapeFlag&4){const H=s||r,Z=H;j=ln(u.call(Z,H,f,p,v,m,P)),F=c}else{const H=e;j=ln(H.length>1?H(p,{attrs:c,slots:o,emit:l}):H(p,null)),F=e.props?c:rT(c)}}catch(H){fi.length=0,Va(H,t,1),j=Ke(Tt)}let $=j;if(F&&O!==!1){const H=Object.keys(F),{shapeFlag:Z}=$;H.length&&Z&7&&(i&&H.some(Gl)&&(F=sT(F,i)),$=fr($,F,!1,!0))}return n.dirs&&($=fr($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&$r($,n.transition),j=$,Zo(D),j}const rT=t=>{let e;for(const n in t)(n==="class"||n==="style"||ba(n))&&((e||(e={}))[n]=t[n]);return e},sT=(t,e)=>{const n={};for(const r in t)(!Gl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function iT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ff(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!xa(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?ff(r,o,u):!0:!!o;return!1}function ff(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!xa(n,i))return!0}return!1}function oT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wm=t=>t.__isSuspense;function aT(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):yE(t)}const Ye=Symbol.for("v-fgt"),Fa=Symbol.for("v-txt"),Tt=Symbol.for("v-cmt"),Mo=Symbol.for("v-stc"),fi=[];let Ot=null;function Pe(t=!1){fi.push(Ot=t?null:[])}function cT(){fi.pop(),Ot=fi[fi.length-1]||null}let Ri=1;function df(t,e=!1){Ri+=t,t<0&&Ot&&e&&(Ot.hasOnce=!0)}function zm(t){return t.dynamicChildren=Ri>0?Ot||ds:null,cT(),Ri>0&&Ot&&Ot.push(t),t}function It(t,e,n,r,s,i){return zm(Zt(t,e,n,r,s,i,!0))}function bt(t,e,n,r,s){return zm(Ke(t,e,n,r,s,!0))}function Si(t){return t?t.__v_isVNode===!0:!1}function Dr(t,e){return t.type===e.type&&t.key===e.key}const Km=({key:t})=>t??null,xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||He(t)||fe(t)?{i:ze,r:t,k:e,f:!!n}:t:null);function Zt(t,e=null,n=null,r=0,s=null,i=t===Ye?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Km(e),ref:e&&xo(e),scopeId:dm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ze};return c?(hu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),Ri>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const Ke=lT;function lT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Rm)&&(t=Tt),Si(t)){const c=fr(t,e,!0);return n&&hu(c,n),Ri>0&&!i&&Ot&&(c.shapeFlag&6?Ot[Ot.indexOf(t)]=c:Ot.push(c)),c.patchFlag=-2,c}if(vT(t)&&(t=t.__vccOpts),e){e=uT(e);let{class:c,style:l}=e;c&&!Be(c)&&(e.class=Xt(c)),Ne(l)&&(su(l)&&!ae(l)&&(l=Je({},l)),e.style=Hi(l))}const o=Be(t)?1:Wm(t)?128:pm(t)?64:Ne(t)?4:fe(t)?2:0;return Zt(t,e,n,r,s,o,i,!0)}function uT(t){return t?su(t)||Nm(t)?Je({},t):t:null}function fr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?Ba(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Km(u),ref:e&&e.ref?n&&i?ae(i)?i.concat(xo(e)):[i,xo(e)]:xo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fr(t.ssContent),ssFallback:t.ssFallback&&fr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&$r(f,l.clone(f)),f}function Ua(t=" ",e=0){return Ke(Fa,null,t,e)}function Zk(t,e){const n=Ke(Mo,null,t);return n.staticCount=e,n}function di(t="",e=!1){return e?(Pe(),bt(Tt,null,t)):Ke(Tt,null,t)}function ln(t){return t==null||typeof t=="boolean"?Ke(Tt):ae(t)?Ke(Ye,null,t.slice()):Si(t)?Xn(t):Ke(Fa,null,String(t))}function Xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fr(t)}function hu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),hu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Nm(e)?e._ctx=ze:s===3&&ze&&(ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:ze},n=32):(e=String(e),r&64?(n=16,e=[Ua(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ba(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Xt([e.class,r.class]));else if(s==="style")e.style=Hi([e.style,r.style]);else if(ba(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){Yt(t,e,7,[n,r])}const hT=Om();let fT=0;function dT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||hT,i={uid:fT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mm(r,s),emitsOptions:qm(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=nT.bind(null,i),t.ce&&t.ce(i),i}let Ze=null;const Gi=()=>Ze||ze;let na,fl;{const t=Pa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};na=e("__VUE_INSTANCE_SETTERS__",n=>Ze=n),fl=e("__VUE_SSR_SETTERS__",n=>Ci=n)}const Qi=t=>{const e=Ze;return na(t),t.scope.on(),()=>{t.scope.off(),na(e)}},pf=()=>{Ze&&Ze.scope.off(),na(null)};function Gm(t){return t.vnode.shapeFlag&4}let Ci=!1;function pT(t,e=!1,n=!1){e&&fl(e);const{props:r,children:s}=t.vnode,i=Gm(t);$E(t,r,i,e),WE(t,s,n);const o=i?mT(t,e):void 0;return e&&fl(!1),o}function mT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,VE);const{setup:r}=n;if(r){vr();const s=t.setupContext=r.length>1?_T(t):null,i=Qi(t),o=Wi(r,t,0,[t.props,s]),c=Lp(o);if(Er(),i(),(c||t.sp)&&!_s(t)&&Em(t),c){if(o.then(pf,pf),e)return o.then(l=>{mf(t,l)}).catch(l=>{Va(l,t,0)});t.asyncDep=o}else mf(t,o)}else Qm(t)}function mf(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=cm(e)),Qm(t)}function Qm(t,e,n){const r=t.type;t.render||(t.render=r.render||un);{const s=Qi(t);vr();try{NE(t)}finally{Er(),s()}}}const gT={get(t,e){return dt(t,"get",""),t[e]}};function _T(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gT),slots:t.slots,emit:t.emit,expose:e}}function $a(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(cm(iu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hi)return hi[n](t)},has(e,n){return n in e||n in hi}})):t.proxy}function yT(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function vT(t){return fe(t)&&"__vccOpts"in t}const st=(t,e)=>dE(t,e,Ci);function fu(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!ae(e)?Si(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Si(n)&&(n=[n]),Ke(t,e,n))}const ET="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dl;const gf=typeof window<"u"&&window.trustedTypes;if(gf)try{dl=gf.createPolicy("vue",{createHTML:t=>t})}catch{}const Jm=dl?t=>dl.createHTML(t):t=>t,TT="http://www.w3.org/2000/svg",IT="http://www.w3.org/1998/Math/MathML",In=typeof document<"u"?document:null,_f=In&&In.createElement("template"),wT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?In.createElementNS(TT,t):e==="mathml"?In.createElementNS(IT,t):n?In.createElement(t,{is:n}):In.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>In.createTextNode(t),createComment:t=>In.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>In.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{_f.innerHTML=Jm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=_f.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qn="transition",ei="animation",Is=Symbol("_vtc"),Xm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ym=Je({},gm,Xm),AT=t=>(t.displayName="Transition",t.props=Ym,t),bT=AT((t,{slots:e})=>fu(TE,Zm(t),e)),Pr=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},yf=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function Zm(t){const e={};for(const A in t)A in Xm||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,P=RT(s),O=P&&P[0],D=P&&P[1],{onBeforeEnter:j,onEnter:F,onEnterCancelled:$,onLeave:H,onLeaveCancelled:Z,onBeforeAppear:oe=j,onAppear:b=F,onAppearCancelled:y=$}=e,_=(A,E,Ae,$e)=>{A._enterCancelled=$e,Kn(A,E?f:c),Kn(A,E?u:o),Ae&&Ae()},I=(A,E)=>{A._isLeaving=!1,Kn(A,p),Kn(A,v),Kn(A,m),E&&E()},R=A=>(E,Ae)=>{const $e=A?b:F,Ce=()=>_(E,A,Ae);Pr($e,[E,Ce]),vf(()=>{Kn(E,A?l:i),on(E,A?f:c),yf($e)||Ef(E,r,O,Ce)})};return Je(e,{onBeforeEnter(A){Pr(j,[A]),on(A,i),on(A,o)},onBeforeAppear(A){Pr(oe,[A]),on(A,l),on(A,u)},onEnter:R(!1),onAppear:R(!0),onLeave(A,E){A._isLeaving=!0;const Ae=()=>I(A,E);on(A,p),A._enterCancelled?(on(A,m),pl()):(pl(),on(A,m)),vf(()=>{A._isLeaving&&(Kn(A,p),on(A,v),yf(H)||Ef(A,r,D,Ae))}),Pr(H,[A,Ae])},onEnterCancelled(A){_(A,!1,void 0,!0),Pr($,[A])},onAppearCancelled(A){_(A,!0,void 0,!0),Pr(y,[A])},onLeaveCancelled(A){I(A),Pr(Z,[A])}})}function RT(t){if(t==null)return null;if(Ne(t))return[Oc(t.enter),Oc(t.leave)];{const e=Oc(t);return[e,e]}}function Oc(t){return Lv(t)}function on(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Is]||(t[Is]=new Set)).add(e)}function Kn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Is];n&&(n.delete(e),n.size||(t[Is]=void 0))}function vf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ST=0;function Ef(t,e,n,r){const s=t._endId=++ST,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=eg(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),i()},m=v=>{v.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,m)}function eg(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${qn}Delay`),i=r(`${qn}Duration`),o=Tf(s,i),c=r(`${ei}Delay`),l=r(`${ei}Duration`),u=Tf(c,l);let f=null,p=0,m=0;e===qn?o>0&&(f=qn,p=o,m=i.length):e===ei?u>0&&(f=ei,p=u,m=l.length):(p=Math.max(o,u),f=p>0?o>u?qn:ei:null,m=f?f===qn?i.length:l.length:0);const v=f===qn&&/\b(transform|all)(,|$)/.test(r(`${qn}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:v}}function Tf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>If(n)+If(t[r])))}function If(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function pl(){return document.body.offsetHeight}function CT(t,e,n){const r=t[Is];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wf=Symbol("_vod"),PT=Symbol("_vsh"),kT=Symbol(""),OT=/(^|;)\s*display\s*:/;function DT(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Fo(r,c,"")}else for(const o in e)n[o]==null&&Fo(r,o,"");for(const o in n)o==="display"&&(i=!0),Fo(r,o,n[o])}else if(s){if(e!==n){const o=r[kT];o&&(n+=";"+o),r.cssText=n,i=OT.test(n)}}else e&&t.removeAttribute("style");wf in t&&(t[wf]=i?r.display:"",t[PT]&&(r.display="none"))}const Af=/\s*!important$/;function Fo(t,e,n){if(ae(n))n.forEach(r=>Fo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=VT(t,e);Af.test(n)?t.setProperty(Kr(r),n.replace(Af,""),"important"):t[r]=n}}const bf=["Webkit","Moz","ms"],Dc={};function VT(t,e){const n=Dc[e];if(n)return n;let r=$t(e);if(r!=="filter"&&r in t)return Dc[e]=r;r=Ca(r);for(let s=0;s<bf.length;s++){const i=bf[s]+r;if(i in t)return Dc[e]=i}return e}const Rf="http://www.w3.org/1999/xlink";function Sf(t,e,n,r,s,i=$v(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Rf,e.slice(6,e.length)):t.setAttributeNS(Rf,e,n):n==null||i&&!Up(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Mn(n)?String(n):n)}function Cf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Up(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function os(t,e,n,r){t.addEventListener(e,n,r)}function NT(t,e,n,r){t.removeEventListener(e,n,r)}const Pf=Symbol("_vei");function LT(t,e,n,r,s=null){const i=t[Pf]||(t[Pf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=MT(e);if(r){const u=i[e]=UT(r,s);os(t,c,u,l)}else o&&(NT(t,c,o,l),i[e]=void 0)}}const kf=/(?:Once|Passive|Capture)$/;function MT(t){let e;if(kf.test(t)){e={};let r;for(;r=t.match(kf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kr(t.slice(2)),e]}let Vc=0;const xT=Promise.resolve(),FT=()=>Vc||(xT.then(()=>Vc=0),Vc=Date.now());function UT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Yt(BT(r,n.value),e,5,[r])};return n.value=t,n.attached=FT(),n}function BT(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Of=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$T=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?CT(t,r,o):e==="style"?DT(t,n,r):ba(e)?Gl(e)||LT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jT(t,e,r,o))?(Cf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?Cf(t,$t(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Sf(t,e,r,o))};function jT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Of(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Of(e)&&Be(n)?!1:e in t}const tg=new WeakMap,ng=new WeakMap,ra=Symbol("_moveCb"),Df=Symbol("_enterCb"),HT=t=>(delete t.props.mode,t),qT=HT({name:"TransitionGroup",props:Je({},Ym,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Gi(),r=mm();let s,i;return Im(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!QT(s[0].el,n.vnode.el,o))return;s.forEach(zT),s.forEach(KT);const c=s.filter(GT);pl(),c.forEach(l=>{const u=l.el,f=u.style;on(u,o),f.transform=f.webkitTransform=f.transitionDuration="";const p=u[ra]=m=>{m&&m.target!==u||(!m||/transform$/.test(m.propertyName))&&(u.removeEventListener("transitionend",p),u[ra]=null,Kn(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=ve(t),c=Zm(o);let l=o.tag||Ye;if(s=[],i)for(let u=0;u<i.length;u++){const f=i[u];f.el&&f.el instanceof Element&&(s.push(f),$r(f,bi(f,c,r,n)),tg.set(f,f.el.getBoundingClientRect()))}i=e.default?au(e.default()):[];for(let u=0;u<i.length;u++){const f=i[u];f.key!=null&&$r(f,bi(f,c,r,n))}return Ke(l,null,i)}}}),WT=qT;function zT(t){const e=t.el;e[ra]&&e[ra](),e[Df]&&e[Df]()}function KT(t){ng.set(t,t.el.getBoundingClientRect())}function GT(t){const e=tg.get(t),n=ng.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function QT(t,e,n){const r=t.cloneNode(),s=t[Is];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=eg(r);return i.removeChild(r),o}const Vf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>No(e,n):e};function JT(t){t.target.composing=!0}function Nf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Nc=Symbol("_assign"),eO={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Nc]=Vf(s);const i=r||s.props&&s.props.type==="number";os(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=nl(c)),t[Nc](c)}),n&&os(t,"change",()=>{t.value=t.value.trim()}),e||(os(t,"compositionstart",JT),os(t,"compositionend",Nf),os(t,"change",Nf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Nc]=Vf(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?nl(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},XT=["ctrl","shift","alt","meta"],YT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>XT.some(n=>t[`${n}Key`]&&!e.includes(n))},ZT=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=YT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},eI=Je({patchProp:$T},wT);let Lf;function tI(){return Lf||(Lf=KE(eI))}const rg=(...t)=>{const e=tI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=rI(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,nI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rI(t){return Be(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let sg;const ja=t=>sg=t,ig=Symbol();function ml(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var pi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(pi||(pi={}));function sI(){const t=Hp(!0),e=t.run(()=>Da({}));let n=[],r=[];const s=iu({install(i){ja(s),s._a=i,i.provide(ig,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const og=()=>{};function Mf(t,e,n,r=og){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Xl()&&qp(s),s}function ss(t,...e){t.slice().forEach(n=>{n(...e)})}const iI=t=>t(),xf=Symbol(),Lc=Symbol();function gl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ml(s)&&ml(r)&&t.hasOwnProperty(n)&&!He(r)&&!ir(r)?t[n]=gl(s,r):t[n]=r}return t}const oI=Symbol();function aI(t){return!ml(t)||!t.hasOwnProperty(oI)}const{assign:Gn}=Object;function cI(t){return!!(He(t)&&t.effect)}function lI(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=lE(n.state.value[t]);return Gn(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=iu(st(()=>{ja(n);const v=n._s.get(t);return o[m].call(v,v)})),p),{}))}return l=ag(t,u,e,n,r,!0),l}function ag(t,e,n={},r,s,i){let o;const c=Gn({actions:{}},n),l={deep:!0};let u,f,p=[],m=[],v;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),Da({});let O;function D(y){let _;u=f=!1,typeof y=="function"?(y(r.state.value[t]),_={type:pi.patchFunction,storeId:t,events:v}):(gl(r.state.value[t],y),_={type:pi.patchObject,payload:y,storeId:t,events:v});const I=O=Symbol();zi().then(()=>{O===I&&(u=!0)}),f=!0,ss(p,_,r.state.value[t])}const j=i?function(){const{state:_}=n,I=_?_():{};this.$patch(R=>{Gn(R,I)})}:og;function F(){o.stop(),p=[],m=[],r._s.delete(t)}const $=(y,_="")=>{if(xf in y)return y[Lc]=_,y;const I=function(){ja(r);const R=Array.from(arguments),A=[],E=[];function Ae(le){A.push(le)}function $e(le){E.push(le)}ss(m,{args:R,name:I[Lc],store:Z,after:Ae,onError:$e});let Ce;try{Ce=y.apply(this&&this.$id===t?this:Z,R)}catch(le){throw ss(E,le),le}return Ce instanceof Promise?Ce.then(le=>(ss(A,le),le)).catch(le=>(ss(E,le),Promise.reject(le))):(ss(A,Ce),Ce)};return I[xf]=!0,I[Lc]=_,I},H={_p:r,$id:t,$onAction:Mf.bind(null,m),$patch:D,$reset:j,$subscribe(y,_={}){const I=Mf(p,y,_.detached,()=>R()),R=o.run(()=>Ur(()=>r.state.value[t],A=>{(_.flush==="sync"?f:u)&&y({storeId:t,type:pi.direct,events:v},A)},Gn({},l,_)));return I},$dispose:F},Z=qi(H);r._s.set(t,Z);const b=(r._a&&r._a.runWithContext||iI)(()=>r._e.run(()=>(o=Hp()).run(()=>e({action:$}))));for(const y in b){const _=b[y];if(He(_)&&!cI(_)||ir(_))i||(P&&aI(_)&&(He(_)?_.value=P[y]:gl(_,P[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const I=$(_,y);b[y]=I,c.actions[y]=_}}return Gn(Z,b),Gn(ve(Z),b),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:y=>{D(_=>{Gn(_,y)})}}),r._p.forEach(y=>{Gn(Z,o.run(()=>y({store:Z,app:r._a,pinia:r,options:c})))}),P&&i&&n.hydrate&&n.hydrate(Z.$state,P),u=!0,f=!0,Z}/*! #__NO_SIDE_EFFECTS__ */function uI(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(c,l){const u=cu();return c=c||(u?Jt(ig,null):null),c&&ja(c),c=sg,c._s.has(r)||(i?ag(r,e,s,c):lI(r,s,c)),c._s.get(r)}return o.$id=r,o}const hI="/assets/background-CwWA47oH.jpg",fI=()=>{};var Ff={};/**
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
 */const cg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(n[f],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new pI;const m=i<<2|c>>4;if(r.push(m),u!==64){const v=c<<4&240|u>>2;if(r.push(v),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mI=function(t){const e=cg(t);return lg.encodeByteArray(e,!0)},sa=function(t){return mI(t).replace(/\./g,"")},ug=function(t){try{return lg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _I=()=>gI().__FIREBASE_DEFAULTS__,yI=()=>{if(typeof process>"u"||typeof Ff>"u")return;const t=Ff.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ug(t[1]);return e&&JSON.parse(e)},Ha=()=>{try{return fI()||_I()||yI()||vI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hg=t=>{var e,n;return(n=(e=Ha())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},EI=t=>{const e=hg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fg=()=>{var t;return(t=Ha())===null||t===void 0?void 0:t.config},dg=t=>{var e;return(e=Ha())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class TI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function II(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[sa(JSON.stringify(n)),sa(JSON.stringify(o)),""].join(".")}/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function AI(){var t;const e=(t=Ha())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CI(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PI(){return!AI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kI(){try{return typeof indexedDB=="object"}catch{return!1}}function OI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const DI="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DI,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?VI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Fn(s,c,r)}}function VI(t,e){return t.replace(NI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const NI=/\{\$([^}]+)}/g;function LI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Uf(i)&&Uf(o)){if(!jr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Uf(t){return t!==null&&typeof t=="object"}/**
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
 */function Xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function si(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function MI(t,e){const n=new xI(t,e);return n.subscribe.bind(n)}class xI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Mc),s.error===void 0&&(s.error=Mc),s.complete===void 0&&(s.complete=Mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mc(){}/**
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
 */function jt(t){return t&&t._delegate?t._delegate:t}class Hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Or="[DEFAULT]";/**
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
 */class UI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new TI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($I(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BI(t){return t===Or?void 0:t}function $I(t){return t.instantiationMode==="EAGER"}/**
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
 */class jI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new UI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const HI={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},qI=_e.INFO,WI={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},zI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=WI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class du{constructor(e){this.name=e,this._logLevel=qI,this._logHandler=zI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const KI=(t,e)=>e.some(n=>t instanceof n);let Bf,$f;function GI(){return Bf||(Bf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QI(){return $f||($f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pg=new WeakMap,_l=new WeakMap,mg=new WeakMap,xc=new WeakMap,pu=new WeakMap;function JI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(or(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pg.set(n,t)}).catch(()=>{}),pu.set(e,t),e}function XI(t){if(_l.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_l.set(t,e)}let yl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _l.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YI(t){yl=t(yl)}function ZI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fc(this),e,...n);return mg.set(r,e.sort?e.sort():[e]),or(r)}:QI().includes(t)?function(...e){return t.apply(Fc(this),e),or(pg.get(this))}:function(...e){return or(t.apply(Fc(this),e))}}function ew(t){return typeof t=="function"?ZI(t):(t instanceof IDBTransaction&&XI(t),KI(t,GI())?new Proxy(t,yl):t)}function or(t){if(t instanceof IDBRequest)return JI(t);if(xc.has(t))return xc.get(t);const e=ew(t);return e!==t&&(xc.set(t,e),pu.set(e,t)),e}const Fc=t=>pu.get(t);function tw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(or(o.result),l.oldVersion,l.newVersion,or(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const nw=["get","getKey","getAll","getAllKeys","count"],rw=["put","add","delete","clear"],Uc=new Map;function jf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=rw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Uc.set(e,i),i}YI(t=>({...t,get:(e,n,r)=>jf(e,n)||t.get(e,n,r),has:(e,n)=>!!jf(e,n)||t.has(e,n)}));/**
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
 */class sw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vl="@firebase/app",Hf="0.11.4";/**
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
 */const On=new du("@firebase/app"),ow="@firebase/app-compat",aw="@firebase/analytics-compat",cw="@firebase/analytics",lw="@firebase/app-check-compat",uw="@firebase/app-check",hw="@firebase/auth",fw="@firebase/auth-compat",dw="@firebase/database",pw="@firebase/data-connect",mw="@firebase/database-compat",gw="@firebase/functions",_w="@firebase/functions-compat",yw="@firebase/installations",vw="@firebase/installations-compat",Ew="@firebase/messaging",Tw="@firebase/messaging-compat",Iw="@firebase/performance",ww="@firebase/performance-compat",Aw="@firebase/remote-config",bw="@firebase/remote-config-compat",Rw="@firebase/storage",Sw="@firebase/storage-compat",Cw="@firebase/firestore",Pw="@firebase/vertexai",kw="@firebase/firestore-compat",Ow="firebase",Dw="11.6.0";/**
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
 */const El="[DEFAULT]",Vw={[vl]:"fire-core",[ow]:"fire-core-compat",[cw]:"fire-analytics",[aw]:"fire-analytics-compat",[uw]:"fire-app-check",[lw]:"fire-app-check-compat",[hw]:"fire-auth",[fw]:"fire-auth-compat",[dw]:"fire-rtdb",[pw]:"fire-data-connect",[mw]:"fire-rtdb-compat",[gw]:"fire-fn",[_w]:"fire-fn-compat",[yw]:"fire-iid",[vw]:"fire-iid-compat",[Ew]:"fire-fcm",[Tw]:"fire-fcm-compat",[Iw]:"fire-perf",[ww]:"fire-perf-compat",[Aw]:"fire-rc",[bw]:"fire-rc-compat",[Rw]:"fire-gcs",[Sw]:"fire-gcs-compat",[Cw]:"fire-fst",[kw]:"fire-fst-compat",[Pw]:"fire-vertex","fire-js":"fire-js",[Ow]:"fire-js-all"};/**
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
 */const ia=new Map,Nw=new Map,Tl=new Map;function qf(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ws(t){const e=t.name;if(Tl.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;Tl.set(e,t);for(const n of ia.values())qf(n,t);for(const n of Nw.values())qf(n,t);return!0}function mu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Lw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new Ji("app","Firebase",Lw);/**
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
 */class Mw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const Vs=Dw;function gg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:El,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ar.create("bad-app-name",{appName:String(s)});if(n||(n=fg()),!n)throw ar.create("no-options");const i=ia.get(s);if(i){if(jr(n,i.options)&&jr(r,i.config))return i;throw ar.create("duplicate-app",{appName:s})}const o=new jI(s);for(const l of Tl.values())o.addComponent(l);const c=new Mw(n,r,o);return ia.set(s,c),c}function _g(t=El){const e=ia.get(t);if(!e&&t===El&&fg())return gg();if(!e)throw ar.create("no-app",{appName:t});return e}function cr(t,e,n){var r;let s=(r=Vw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(c.join(" "));return}ws(new Hr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const xw="firebase-heartbeat-database",Fw=1,Pi="firebase-heartbeat-store";let Bc=null;function yg(){return Bc||(Bc=tw(xw,Fw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Pi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),Bc}async function Uw(t){try{const n=(await yg()).transaction(Pi),r=await n.objectStore(Pi).get(vg(t));return await n.done,r}catch(e){if(e instanceof Fn)On.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});On.warn(n.message)}}}async function Wf(t,e){try{const r=(await yg()).transaction(Pi,"readwrite");await r.objectStore(Pi).put(e,vg(t)),await r.done}catch(n){if(n instanceof Fn)On.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});On.warn(r.message)}}}function vg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Bw=1024,$w=30;class jw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>$w){const o=Ww(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){On.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zf(),{heartbeatsToSend:r,unsentEntries:s}=Hw(this._heartbeatsCache.heartbeats),i=sa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return On.warn(n),""}}}function zf(){return new Date().toISOString().substring(0,10)}function Hw(t,e=Bw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Kf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Kf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kI()?OI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Uw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Kf(t){return sa(JSON.stringify({version:2,heartbeats:t})).length}function Ww(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function zw(t){ws(new Hr("platform-logger",e=>new sw(e),"PRIVATE")),ws(new Hr("heartbeat",e=>new jw(e),"PRIVATE")),cr(vl,Hf,t),cr(vl,Hf,"esm2017"),cr("fire-js","")}zw("");function gu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Eg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kw=Eg,Tg=new Ji("auth","Firebase",Eg());/**
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
 */const oa=new du("@firebase/auth");function Gw(t,...e){oa.logLevel<=_e.WARN&&oa.warn(`Auth (${Vs}): ${t}`,...e)}function Uo(t,...e){oa.logLevel<=_e.ERROR&&oa.error(`Auth (${Vs}): ${t}`,...e)}/**
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
 */function en(t,...e){throw _u(t,...e)}function hn(t,...e){return _u(t,...e)}function Ig(t,e,n){const r=Object.assign(Object.assign({},Kw()),{[e]:n});return new Ji("auth","Firebase",r).create(e,{appName:t.name})}function Cn(t){return Ig(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _u(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tg.create(t,...e)}function re(t,e,...n){if(!t)throw _u(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uo(e),new Error(e)}function Dn(t,e){t||bn(e)}/**
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
 */function Il(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qw(){return Gf()==="http:"||Gf()==="https:"}function Gf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Jw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qw()||RI()||"connection"in navigator)?navigator.onLine:!0}function Xw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=wI()||SI()}get(){return Jw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yu(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Yw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Zw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],eA=new Yi(3e4,6e4);function Tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ir(t,e,n,r,s={}){return Ag(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Xi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return bI()||(u.referrerPolicy="no-referrer"),wg.fetch()(await bg(t,t.config.apiHost,n,c),u)})}async function Ag(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yw),e);try{const s=new nA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw So(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw So(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw So(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw So(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ig(t,f,u);en(t,f)}}catch(s){if(s instanceof Fn)throw s;en(t,"network-request-failed",{message:String(s)})}}async function Zi(t,e,n,r,s={}){const i=await Ir(t,e,n,r,s);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function bg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?yu(t.config,s):`${t.config.apiScheme}://${s}`;return Zw.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function tA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),eA.get())})}}function So(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=hn(t,e,r);return s.customData._tokenResponse=n,s}function Qf(t){return t!==void 0&&t.enterprise!==void 0}class rA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return tA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sA(t,e){return Ir(t,"GET","/v2/recaptchaConfig",Tr(t,e))}/**
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
 */async function iA(t,e){return Ir(t,"POST","/v1/accounts:delete",e)}async function aa(t,e){return Ir(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oA(t,e=!1){const n=jt(t),r=await n.getIdToken(e),s=vu(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:mi($c(s.auth_time)),issuedAtTime:mi($c(s.iat)),expirationTime:mi($c(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $c(t){return Number(t)*1e3}function vu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=ug(n);return s?JSON.parse(s):(Uo("Failed to decode base64 JWT payload"),null)}catch(s){return Uo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jf(t){const e=vu(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ki(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&aA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function aA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class cA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mi(this.lastLoginAt),this.creationTime=mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ca(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ki(t,aa(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rg(i.providerUserInfo):[],c=uA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new wl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function lA(t){const e=jt(t);await ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Rg(t){return t.map(e=>{var{providerId:n}=e,r=gu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hA(t,e){const n=await Ag(t,{},async()=>{const r=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await bg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",wg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fA(t,e){return Ir(t,"POST","/v2/accounts:revokeToken",Tr(t,e))}/**
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
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=Jf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ys;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
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
 */function Wn(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ki(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oA(this,e)}reload(){return lA(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(Cn(this.auth));const e=await this.getIdToken();return await ki(this,iA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,j=(u=n.createdAt)!==null&&u!==void 0?u:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:$,emailVerified:H,isAnonymous:Z,providerData:oe,stsTokenManager:b}=n;re($&&b,e,"internal-error");const y=ys.fromJSON(this.name,b);re(typeof $=="string",e,"internal-error"),Wn(p,e.name),Wn(m,e.name),re(typeof H=="boolean",e,"internal-error"),re(typeof Z=="boolean",e,"internal-error"),Wn(v,e.name),Wn(P,e.name),Wn(O,e.name),Wn(D,e.name),Wn(j,e.name),Wn(F,e.name);const _=new zt({uid:$,auth:e,email:m,emailVerified:H,displayName:p,isAnonymous:Z,photoURL:P,phoneNumber:v,tenantId:O,stsTokenManager:y,createdAt:j,lastLoginAt:F});return oe&&Array.isArray(oe)&&(_.providerData=oe.map(I=>Object.assign({},I))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new ys;s.updateFromServerResponse(n);const i=new zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ca(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Rg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ys;c.updateFromIdToken(r);const l=new zt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new wl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const Xf=new Map;function Rn(t){Dn(t instanceof Function,"Expected a class definition");let e=Xf.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xf.set(t,e),e)}/**
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
 */class Sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sg.type="NONE";const Yf=Sg;/**
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
 */function Bo(t,e,n){return`firebase:${t}:${e}:${n}`}class vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await aa(this.auth,{idToken:e}).catch(()=>{});return n?zt._fromGetAccountInfoResponse(this.auth,n,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vs(Rn(Yf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Rn(Yf);const o=Bo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await aa(e,{idToken:f}).catch(()=>{});if(!m)break;p=await zt._fromGetAccountInfoResponse(e,m,f)}else p=zt._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new vs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new vs(i,e,r))}}/**
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
 */function Zf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Og(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vg(e))return"Blackberry";if(Ng(e))return"Webos";if(Pg(e))return"Safari";if((e.includes("chrome/")||kg(e))&&!e.includes("edge/"))return"Chrome";if(Dg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cg(t=gt()){return/firefox\//i.test(t)}function Pg(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kg(t=gt()){return/crios\//i.test(t)}function Og(t=gt()){return/iemobile/i.test(t)}function Dg(t=gt()){return/android/i.test(t)}function Vg(t=gt()){return/blackberry/i.test(t)}function Ng(t=gt()){return/webos/i.test(t)}function Eu(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dA(t=gt()){var e;return Eu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pA(){return CI()&&document.documentMode===10}function Lg(t=gt()){return Eu(t)||Dg(t)||Ng(t)||Vg(t)||/windows phone/i.test(t)||Og(t)}/**
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
 */function Mg(t,e=[]){let n;switch(t){case"Browser":n=Zf(gt());break;case"Worker":n=`${Zf(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
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
 */class mA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gA(t,e={}){return Ir(t,"GET","/v2/passwordPolicy",Tr(t,e))}/**
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
 */const _A=6;class yA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:_A,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class vA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ed(this),this.idTokenSubscription=new ed(this),this.beforeStateQueue=new mA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await aa(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(Cn(this));const n=e?jt(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(Cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(Cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gA(this),n=new yA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gr(t){return jt(t)}class ed{constructor(e){this.auth=e,this.observer=null,this.addObserver=MI(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let qa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function EA(t){qa=t}function xg(t){return qa.loadJS(t)}function TA(){return qa.recaptchaEnterpriseScript}function IA(){return qa.gapiScript}function wA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class AA{constructor(){this.enterprise=new bA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class bA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const RA="recaptcha-enterprise",Fg="NO_RECAPTCHA";class SA{constructor(e){this.type=RA,this.auth=Gr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{sA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new rA(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Qf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Fg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new AA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Qf(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=TA();l.length!==0&&(l+=c),xg(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function td(t,e,n,r=!1,s=!1){const i=new SA(t);let o;if(s)o=Fg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Al(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await td(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await td(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function CA(t,e){const n=mu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(jr(i,e??{}))return s;en(s,"already-initialized")}return n.initialize({options:e})}function PA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kA(t,e,n){const r=Gr(t);re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ug(e),{host:o,port:c}=OA(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),re(jr(u,r.config.emulator)&&jr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,DA()}function Ug(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OA(t){const e=Ug(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:nd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:nd(o)}}}function nd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Tu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function VA(t,e){return Ir(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function NA(t,e){return Zi(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}/**
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
 */async function LA(t,e){return Zi(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}async function MA(t,e){return Zi(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}/**
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
 */class Oi extends Tu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Oi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Al(e,n,"signInWithPassword",NA);case"emailLink":return LA(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Al(e,r,"signUpPassword",VA);case"emailLink":return MA(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Es(t,e){return Zi(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}/**
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
 */const xA="http://localhost";class Vn extends Tu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:xA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
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
 */function FA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UA(t){const e=ri(si(t)).link,n=e?ri(si(e)).deep_link_id:null,r=ri(si(t)).deep_link_id;return(r?ri(si(r)).link:null)||r||n||e||t}class Iu{constructor(e){var n,r,s,i,o,c;const l=ri(si(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=FA((s=l.mode)!==null&&s!==void 0?s:null);re(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=UA(e);try{return new Iu(n)}catch{return null}}}/**
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
 */class Ns{constructor(){this.providerId=Ns.PROVIDER_ID}static credential(e,n){return Oi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Iu.parseLink(n);return re(r,"argument-error"),Oi._fromEmailAndCode(e,r.code,r.tenantId)}}Ns.PROVIDER_ID="password";Ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Bg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ls extends Bg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class $o extends Ls{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return re("providerId"in n&&"signInMethod"in n,"argument-error"),Vn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return re(e.idToken||e.accessToken,"argument-error"),Vn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return $o.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return $o.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:c}=e;if(!r&&!s&&!n&&!i||!c)return null;try{return new $o(c)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
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
 */class Zn extends Ls{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
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
 */class er extends Ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vn._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
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
 */class tr extends Ls{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
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
 */class nr extends Ls{constructor(){super("twitter.com")}static credential(e,n){return Vn._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
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
 */async function BA(t,e){return Zi(t,"POST","/v1/accounts:signUp",Tr(t,e))}/**
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
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await zt._fromIdTokenResponse(e,r,s),o=rd(r);return new qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=rd(r);return new qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function rd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class la extends Fn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,la.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new la(e,n,r,s)}}function $g(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?la._fromErrorAndOperation(t,i,e,r):i})}async function $A(t,e,n=!1){const r=await ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
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
 */async function jA(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject(Cn(r));const s="reauthenticate";try{const i=await ki(t,$g(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=vu(i.idToken);re(o,r,"internal-error");const{sub:c}=o;return re(t.uid===c,r,"user-mismatch"),qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
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
 */async function jg(t,e,n=!1){if(xt(t.app))return Promise.reject(Cn(t));const r="signIn",s=await $g(t,r,e),i=await qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function HA(t,e){return jg(Gr(t),e)}/**
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
 */async function Hg(t){const e=Gr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qA(t,e,n){if(xt(t.app))return Promise.reject(Cn(t));const r=Gr(t),o=await Al(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",BA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Hg(t),l}),c=await qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function WA(t,e,n){return xt(t.app)?Promise.reject(Cn(t)):HA(jt(t),Ns.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hg(t),r})}function zA(t,e,n,r){return jt(t).onIdTokenChanged(e,n,r)}function KA(t,e,n){return jt(t).beforeAuthStateChanged(e,n)}function GA(t){return jt(t).signOut()}const ua="__sak";/**
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
 */class qg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ua,"1"),this.storage.removeItem(ua),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const QA=1e3,JA=10;class Wg extends qg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wg.type="LOCAL";const XA=Wg;/**
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
 */class zg extends qg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zg.type="SESSION";const Kg=zg;/**
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
 */function YA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await YA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wa.receivers=[];/**
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
 */function wu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ZA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=wu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fn(){return window}function eb(t){fn().location.href=t}/**
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
 */function Gg(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function tb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rb(){return Gg()?self:null}/**
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
 */const Qg="firebaseLocalStorageDb",sb=1,ha="firebaseLocalStorage",Jg="fbase_key";class eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function za(t,e){return t.transaction([ha],e?"readwrite":"readonly").objectStore(ha)}function ib(){const t=indexedDB.deleteDatabase(Qg);return new eo(t).toPromise()}function bl(){const t=indexedDB.open(Qg,sb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ha,{keyPath:Jg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ha)?e(r):(r.close(),await ib(),e(await bl()))})})}async function sd(t,e,n){const r=za(t,!0).put({[Jg]:e,value:n});return new eo(r).toPromise()}async function ob(t,e){const n=za(t,!1).get(e),r=await new eo(n).toPromise();return r===void 0?null:r.value}function id(t,e){const n=za(t,!0).delete(e);return new eo(n).toPromise()}const ab=800,cb=3;class Xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wa._getInstance(rb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tb(),!this.activeServiceWorker)return;this.sender=new ZA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bl();return await sd(e,ua,"1"),await id(e,ua),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ob(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>id(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=za(s,!1).getAll();return new eo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xg.type="LOCAL";const lb=Xg;new Yi(3e4,6e4);/**
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
 */function ub(t,e){return e?Rn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Au extends Tu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hb(t){return jg(t.auth,new Au(t),t.bypassAuthState)}function fb(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),jA(n,new Au(t),t.bypassAuthState)}async function db(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),$A(n,new Au(t),t.bypassAuthState)}/**
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
 */class Yg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hb;case"linkViaPopup":case"linkViaRedirect":return db;case"reauthViaPopup":case"reauthViaRedirect":return fb;default:en(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pb=new Yi(2e3,1e4);class fs extends Yg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=wu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pb.get())};e()}}fs.currentPopupAction=null;/**
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
 */const mb="pendingRedirect",jo=new Map;class gb extends Yg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jo.get(this.auth._key());if(!e){try{const r=await _b(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jo.set(this.auth._key(),e)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _b(t,e){const n=Eb(e),r=vb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function yb(t,e){jo.set(t._key(),e)}function vb(t){return Rn(t._redirectPersistence)}function Eb(t){return Bo(mb,t.config.apiKey,t.name)}async function Tb(t,e,n=!1){if(xt(t.app))return Promise.reject(Cn(t));const r=Gr(t),s=ub(r,e),o=await new gb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Ib=10*60*1e3;class wb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ab(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ib&&this.cachedEventUids.clear(),this.cachedEventUids.has(od(e))}saveEventToCache(e){this.cachedEventUids.add(od(e)),this.lastProcessedEventTime=Date.now()}}function od(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ab(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zg(t);default:return!1}}/**
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
 */async function bb(t,e={}){return Ir(t,"GET","/v1/projects",e)}/**
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
 */const Rb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sb=/^https?/;async function Cb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bb(t);for(const n of e)try{if(Pb(n))return}catch{}en(t,"unauthorized-domain")}function Pb(t){const e=Il(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Sb.test(n))return!1;if(Rb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const kb=new Yi(3e4,6e4);function ad(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ob(t){return new Promise((e,n)=>{var r,s,i;function o(){ad(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ad(),n(hn(t,"network-request-failed"))},timeout:kb.get()})}if(!((s=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=fn().gapi)===null||i===void 0)&&i.load)o();else{const c=wA("iframefcb");return fn()[c]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},xg(`${IA()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Ho=null,e})}let Ho=null;function Db(t){return Ho=Ho||Ob(t),Ho}/**
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
 */const Vb=new Yi(5e3,15e3),Nb="__/auth/iframe",Lb="emulator/auth/iframe",Mb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fb(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yu(e,Lb):`https://${t.config.authDomain}/${Nb}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},s=xb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Xi(r).slice(1)}`}async function Ub(t){const e=await Db(t),n=fn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:Fb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),c=fn().setTimeout(()=>{i(o)},Vb.get());function l(){fn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Bb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$b=500,jb=600,Hb="_blank",qb="http://localhost";class cd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wb(t,e,n,r=$b,s=jb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Bb),{width:r.toString(),height:s.toString(),top:i,left:o}),u=gt().toLowerCase();n&&(c=kg(u)?Hb:n),Cg(u)&&(e=e||qb,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[v,P])=>`${m}${v}=${P},`,"");if(dA(u)&&c!=="_self")return zb(e||"",c),new cd(null);const p=window.open(e||"",c,f);re(p,t,"popup-blocked");try{p.focus()}catch{}return new cd(p)}function zb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Kb="__/auth/handler",Gb="emulator/auth/handler",Qb=encodeURIComponent("fac");async function ld(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:s};if(e instanceof Bg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",LI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ls){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${Qb}=${encodeURIComponent(l)}`:"";return`${Jb(t)}?${Xi(c).slice(1)}${u}`}function Jb({config:t}){return t.emulator?yu(t,Gb):`https://${t.authDomain}/${Kb}`}/**
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
 */const jc="webStorageSupport";class Xb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kg,this._completeRedirectFn=Tb,this._overrideRedirectResult=yb}async _openPopup(e,n,r,s){var i;Dn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ld(e,n,r,Il(),s);return Wb(e,o,wu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ld(e,n,r,Il(),s);return eb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ub(e),r=new wb(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[jc];o!==void 0&&n(!!o),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lg()||Pg()||Eu()}}const Yb=Xb;var ud="@firebase/auth",hd="1.10.0";/**
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
 */class Zb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function e0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function t0(t){ws(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mg(t)},u=new vA(r,s,i,l);return PA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ws(new Hr("auth-internal",e=>{const n=Gr(e.getProvider("auth").getImmediate());return(r=>new Zb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(ud,hd,e0(t)),cr(ud,hd,"esm2017")}/**
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
 */const n0=5*60,r0=dg("authIdTokenMaxAge")||n0;let fd=null;const s0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>r0)return;const s=n==null?void 0:n.token;fd!==s&&(fd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Hc(t=_g()){const e=mu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CA(t,{popupRedirectResolver:Yb,persistence:[lb,XA,Kg]}),r=dg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=s0(i.toString());KA(n,o,()=>o(n.currentUser)),zA(n,c=>o(c))}}const s=hg("auth");return s&&kA(n,`http://${s}`),n}function i0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}EA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=hn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",i0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});t0("Browser");var dd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lr,e_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.D=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(I,R,A){for(var E=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)E[Ae-2]=arguments[Ae];return y.prototype[R].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,_){_||(_=0);var I=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)I[R]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(R=0;16>R;++R)I[R]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],R=b.g[2];var A=b.g[3],E=y+(A^_&(R^A))+I[0]+3614090360&4294967295;y=_+(E<<7&4294967295|E>>>25),E=A+(R^y&(_^R))+I[1]+3905402710&4294967295,A=y+(E<<12&4294967295|E>>>20),E=R+(_^A&(y^_))+I[2]+606105819&4294967295,R=A+(E<<17&4294967295|E>>>15),E=_+(y^R&(A^y))+I[3]+3250441966&4294967295,_=R+(E<<22&4294967295|E>>>10),E=y+(A^_&(R^A))+I[4]+4118548399&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(R^y&(_^R))+I[5]+1200080426&4294967295,A=y+(E<<12&4294967295|E>>>20),E=R+(_^A&(y^_))+I[6]+2821735955&4294967295,R=A+(E<<17&4294967295|E>>>15),E=_+(y^R&(A^y))+I[7]+4249261313&4294967295,_=R+(E<<22&4294967295|E>>>10),E=y+(A^_&(R^A))+I[8]+1770035416&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(R^y&(_^R))+I[9]+2336552879&4294967295,A=y+(E<<12&4294967295|E>>>20),E=R+(_^A&(y^_))+I[10]+4294925233&4294967295,R=A+(E<<17&4294967295|E>>>15),E=_+(y^R&(A^y))+I[11]+2304563134&4294967295,_=R+(E<<22&4294967295|E>>>10),E=y+(A^_&(R^A))+I[12]+1804603682&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(R^y&(_^R))+I[13]+4254626195&4294967295,A=y+(E<<12&4294967295|E>>>20),E=R+(_^A&(y^_))+I[14]+2792965006&4294967295,R=A+(E<<17&4294967295|E>>>15),E=_+(y^R&(A^y))+I[15]+1236535329&4294967295,_=R+(E<<22&4294967295|E>>>10),E=y+(R^A&(_^R))+I[1]+4129170786&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^R&(y^_))+I[6]+3225465664&4294967295,A=y+(E<<9&4294967295|E>>>23),E=R+(y^_&(A^y))+I[11]+643717713&4294967295,R=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(R^A))+I[0]+3921069994&4294967295,_=R+(E<<20&4294967295|E>>>12),E=y+(R^A&(_^R))+I[5]+3593408605&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^R&(y^_))+I[10]+38016083&4294967295,A=y+(E<<9&4294967295|E>>>23),E=R+(y^_&(A^y))+I[15]+3634488961&4294967295,R=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(R^A))+I[4]+3889429448&4294967295,_=R+(E<<20&4294967295|E>>>12),E=y+(R^A&(_^R))+I[9]+568446438&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^R&(y^_))+I[14]+3275163606&4294967295,A=y+(E<<9&4294967295|E>>>23),E=R+(y^_&(A^y))+I[3]+4107603335&4294967295,R=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(R^A))+I[8]+1163531501&4294967295,_=R+(E<<20&4294967295|E>>>12),E=y+(R^A&(_^R))+I[13]+2850285829&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^R&(y^_))+I[2]+4243563512&4294967295,A=y+(E<<9&4294967295|E>>>23),E=R+(y^_&(A^y))+I[7]+1735328473&4294967295,R=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(R^A))+I[12]+2368359562&4294967295,_=R+(E<<20&4294967295|E>>>12),E=y+(_^R^A)+I[5]+4294588738&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^R)+I[8]+2272392833&4294967295,A=y+(E<<11&4294967295|E>>>21),E=R+(A^y^_)+I[11]+1839030562&4294967295,R=A+(E<<16&4294967295|E>>>16),E=_+(R^A^y)+I[14]+4259657740&4294967295,_=R+(E<<23&4294967295|E>>>9),E=y+(_^R^A)+I[1]+2763975236&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^R)+I[4]+1272893353&4294967295,A=y+(E<<11&4294967295|E>>>21),E=R+(A^y^_)+I[7]+4139469664&4294967295,R=A+(E<<16&4294967295|E>>>16),E=_+(R^A^y)+I[10]+3200236656&4294967295,_=R+(E<<23&4294967295|E>>>9),E=y+(_^R^A)+I[13]+681279174&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^R)+I[0]+3936430074&4294967295,A=y+(E<<11&4294967295|E>>>21),E=R+(A^y^_)+I[3]+3572445317&4294967295,R=A+(E<<16&4294967295|E>>>16),E=_+(R^A^y)+I[6]+76029189&4294967295,_=R+(E<<23&4294967295|E>>>9),E=y+(_^R^A)+I[9]+3654602809&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^R)+I[12]+3873151461&4294967295,A=y+(E<<11&4294967295|E>>>21),E=R+(A^y^_)+I[15]+530742520&4294967295,R=A+(E<<16&4294967295|E>>>16),E=_+(R^A^y)+I[2]+3299628645&4294967295,_=R+(E<<23&4294967295|E>>>9),E=y+(R^(_|~A))+I[0]+4096336452&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~R))+I[7]+1126891415&4294967295,A=y+(E<<10&4294967295|E>>>22),E=R+(y^(A|~_))+I[14]+2878612391&4294967295,R=A+(E<<15&4294967295|E>>>17),E=_+(A^(R|~y))+I[5]+4237533241&4294967295,_=R+(E<<21&4294967295|E>>>11),E=y+(R^(_|~A))+I[12]+1700485571&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~R))+I[3]+2399980690&4294967295,A=y+(E<<10&4294967295|E>>>22),E=R+(y^(A|~_))+I[10]+4293915773&4294967295,R=A+(E<<15&4294967295|E>>>17),E=_+(A^(R|~y))+I[1]+2240044497&4294967295,_=R+(E<<21&4294967295|E>>>11),E=y+(R^(_|~A))+I[8]+1873313359&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~R))+I[15]+4264355552&4294967295,A=y+(E<<10&4294967295|E>>>22),E=R+(y^(A|~_))+I[6]+2734768916&4294967295,R=A+(E<<15&4294967295|E>>>17),E=_+(A^(R|~y))+I[13]+1309151649&4294967295,_=R+(E<<21&4294967295|E>>>11),E=y+(R^(_|~A))+I[4]+4149444226&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~R))+I[11]+3174756917&4294967295,A=y+(E<<10&4294967295|E>>>22),E=R+(y^(A|~_))+I[2]+718787259&4294967295,R=A+(E<<15&4294967295|E>>>17),E=_+(A^(R|~y))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var _=y-this.blockSize,I=this.B,R=this.h,A=0;A<y;){if(R==0)for(;A<=_;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<y;)if(I[R++]=b.charCodeAt(A++),R==this.blockSize){s(this,I),R=0;break}}else for(;A<y;)if(I[R++]=b[A++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var _=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=_&255,_/=256;for(this.u(b),b=Array(16),y=_=0;4>y;++y)for(var I=0;32>I;I+=8)b[_++]=this.g[y]>>>I&255;return b};function i(b,y){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function o(b,y){this.h=y;for(var _=[],I=!0,R=b.length-1;0<=R;R--){var A=b[R]|0;I&&A==y||(_[R]=A,I=!1)}this.g=_}var c={};function l(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return D(u(-b));for(var y=[],_=1,I=0;b>=_;I++)y[I]=b/_|0,_*=4294967296;return new o(y,0)}function f(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return D(f(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),I=p,R=0;R<b.length;R+=8){var A=Math.min(8,b.length-R),E=parseInt(b.substring(R,R+A),y);8>A?(A=u(Math.pow(y,A)),I=I.j(A).add(u(E))):(I=I.j(_),I=I.add(u(E)))}return I}var p=l(0),m=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(O(this))return-D(this).m();for(var b=0,y=1,_=0;_<this.g.length;_++){var I=this.i(_);b+=(0<=I?I:4294967296+I)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(P(this))return"0";if(O(this))return"-"+D(this).toString(b);for(var y=u(Math.pow(b,6)),_=this,I="";;){var R=H(_,y).g;_=j(_,R.j(y));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=R,P(_))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function P(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function O(b){return b.h==-1}t.l=function(b){return b=j(this,b),O(b)?-1:P(b)?0:1};function D(b){for(var y=b.g.length,_=[],I=0;I<y;I++)_[I]=~b.g[I];return new o(_,~b.h).add(m)}t.abs=function(){return O(this)?D(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],I=0,R=0;R<=y;R++){var A=I+(this.i(R)&65535)+(b.i(R)&65535),E=(A>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);I=E>>>16,A&=65535,E&=65535,_[R]=E<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function j(b,y){return b.add(D(y))}t.j=function(b){if(P(this)||P(b))return p;if(O(this))return O(b)?D(this).j(D(b)):D(D(this).j(b));if(O(b))return D(this.j(D(b)));if(0>this.l(v)&&0>b.l(v))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,_=[],I=0;I<2*y;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<b.g.length;R++){var A=this.i(I)>>>16,E=this.i(I)&65535,Ae=b.i(R)>>>16,$e=b.i(R)&65535;_[2*I+2*R]+=E*$e,F(_,2*I+2*R),_[2*I+2*R+1]+=A*$e,F(_,2*I+2*R+1),_[2*I+2*R+1]+=E*Ae,F(_,2*I+2*R+1),_[2*I+2*R+2]+=A*Ae,F(_,2*I+2*R+2)}for(I=0;I<y;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=y;I<2*y;I++)_[I]=0;return new o(_,0)};function F(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function $(b,y){this.g=b,this.h=y}function H(b,y){if(P(y))throw Error("division by zero");if(P(b))return new $(p,p);if(O(b))return y=H(D(b),y),new $(D(y.g),D(y.h));if(O(y))return y=H(b,D(y)),new $(D(y.g),y.h);if(30<b.g.length){if(O(b)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,I=y;0>=I.l(b);)_=Z(_),I=Z(I);var R=oe(_,1),A=oe(I,1);for(I=oe(I,2),_=oe(_,2);!P(I);){var E=A.add(I);0>=E.l(b)&&(R=R.add(_),A=E),I=oe(I,1),_=oe(_,1)}return y=j(b,R.j(y)),new $(R,y)}for(R=p;0<=b.l(y);){for(_=Math.max(1,Math.floor(b.m()/y.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=u(_),E=A.j(y);O(E)||0<E.l(b);)_-=I,A=u(_),E=A.j(y);P(A)&&(A=m),R=R.add(A),b=j(b,E)}return new $(R,b)}t.A=function(b){return H(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)&b.i(I);return new o(_,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)|b.i(I);return new o(_,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)^b.i(I);return new o(_,this.h^b.h)};function Z(b){for(var y=b.g.length+1,_=[],I=0;I<y;I++)_[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(_,b.h)}function oe(b,y){var _=y>>5;y%=32;for(var I=b.g.length-_,R=[],A=0;A<I;A++)R[A]=0<y?b.i(A+_)>>>y|b.i(A+_+1)<<32-y:b.i(A+_);return new o(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,e_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,lr=o}).apply(typeof dd<"u"?dd:typeof self<"u"?self:typeof window<"u"?window:{});var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var t_,ii,n_,qo,Rl,r_,s_,i_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Co=="object"&&Co];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,C={next:function(){if(!g&&d<a.length){var k=d++;return{value:h(k,a[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function v(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,C,k){for(var z=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)z[ke-2]=arguments[ke];return h.prototype[C].apply(g,z)}}function O(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function D(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const C=a.length||0,k=g.length||0;a.length=C+k;for(let z=0;z<k;z++)a[C+z]=g[z]}else a.push(g)}}class j{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function F(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var Z=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function oe(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function b(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let k=0;k<_.length;k++)d=_[k],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function A(a){c.setTimeout(()=>{throw a},0)}function E(){var a=Rt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ae{constructor(){this.h=this.g=null}add(h,d){const g=$e.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var $e=new j(()=>new Ce,a=>a.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ge=!1,Rt=new Ae,Ht=()=>{const a=c.Promise.resolve(void 0);le=()=>{a.then(Dt)}};var Dt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){A(d)}var h=$e;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ge=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var Un=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a}();function rn(a,h){if(Me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{H(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:wt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&rn.aa.h.call(this)}}P(rn,Me);var wt={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),J=0;function G(a,h,d,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=C,this.key=++J,this.da=this.fa=!1}function Y(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ie(a){this.src=a,this.g={},this.h=0}Ie.prototype.add=function(a,h,d,g,C){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var z=w(a,h,g,C);return-1<z?(h=a[z],d||(h.fa=!1)):(h=new G(h,this.src,k,!!g,C),h.fa=d,a.push(h)),h};function T(a,h){var d=h.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,h,void 0),k;(k=0<=C)&&Array.prototype.splice.call(g,C,1),k&&(Y(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function w(a,h,d,g){for(var C=0;C<a.length;++C){var k=a[C];if(!k.da&&k.listener==h&&k.capture==!!d&&k.ha==g)return C}return-1}var S="closure_lm_"+(1e6*Math.random()|0),N={};function x(a,h,d,g,C){if(Array.isArray(h)){for(var k=0;k<h.length;k++)x(a,h[k],d,g,C);return null}return d=ce(d),a&&a[V]?a.K(h,d,u(g)?!!g.capture:!1,C):L(a,h,d,!1,g,C)}function L(a,h,d,g,C,k){if(!h)throw Error("Invalid event type");var z=u(C)?!!C.capture:!!C,ke=Q(a);if(ke||(a[S]=ke=new Ie(a)),d=ke.add(h,d,g,z,k),d.proxy)return d;if(g=K(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Un||(C=z),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(U(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function K(){function a(d){return h.call(a.src,a.listener,d)}const h=te;return a}function W(a,h,d,g,C){if(Array.isArray(h))for(var k=0;k<h.length;k++)W(a,h[k],d,g,C);else g=u(g)?!!g.capture:!!g,d=ce(d),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(k=a.g[h],d=w(k,d,g,C),-1<d&&(Y(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=w(h,d,g,C)),(d=-1<a?h[a]:null)&&q(d))}function q(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])T(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(U(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Q(h))?(T(d,a),d.h==0&&(d.src=null,h[S]=null)):Y(a)}}}function U(a){return a in N?N[a]:N[a]="on"+a}function te(a,h){if(a.da)a=!0;else{h=new rn(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&q(a),a=d.call(g,h)}return a}function Q(a){return a=a[S],a instanceof Ie?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(h){return a.handleEvent(h)}),a[ee])}function ne(){Le.call(this),this.i=new Ie(this),this.M=this,this.F=null}P(ne,Le),ne.prototype[V]=!0,ne.prototype.removeEventListener=function(a,h,d,g){W(this,a,h,d,g)};function pe(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Me(h,a);else if(h instanceof Me)h.target=h.target||a;else{var C=h;h=new Me(g,a),I(h,C)}if(C=!0,d)for(var k=d.length-1;0<=k;k--){var z=h.g=d[k];C=Ee(z,g,!0,h)&&C}if(z=h.g=a,C=Ee(z,g,!0,h)&&C,C=Ee(z,g,!1,h)&&C,d)for(k=0;k<d.length;k++)z=h.g=d[k],C=Ee(z,g,!1,h)&&C}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)Y(d[g]);delete a.g[h],a.h--}}this.F=null},ne.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ne.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Ee(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,k=0;k<h.length;++k){var z=h[k];if(z&&!z.da&&z.capture==d){var ke=z.listener,nt=z.ha||z.src;z.fa&&T(a.i,z),C=ke.call(nt,g)!==!1&&C}}return C&&!g.defaultPrevented}function at(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function et(a){a.g=at(()=>{a.g=null,a.i&&(a.i=!1,et(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Vt extends Le{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ct(a){Le.call(this),this.h=a,this.g={}}P(ct,Le);var Bn=[];function Bs(a){oe(a.g,function(h,d){this.g.hasOwnProperty(d)&&q(h)},a),a.g={}}ct.prototype.N=function(){ct.aa.N.call(this),Bs(this)},ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=c.JSON.stringify,Nt=c.JSON.parse,oo=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function lc(){}lc.prototype.h=null;function ah(a){return a.h||(a.h=a.i())}function ch(){}var $s={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function uc(){Me.call(this,"d")}P(uc,Me);function hc(){Me.call(this,"c")}P(hc,Me);var wr={},lh=null;function ao(){return lh=lh||new ne}wr.La="serverreachability";function uh(a){Me.call(this,wr.La,a)}P(uh,Me);function js(a){const h=ao();pe(h,new uh(h))}wr.STAT_EVENT="statevent";function hh(a,h){Me.call(this,wr.STAT_EVENT,a),this.stat=h}P(hh,Me);function _t(a){const h=ao();pe(h,new hh(h,a))}wr.Ma="timingevent";function fh(a,h){Me.call(this,wr.Ma,a),this.size=h}P(fh,Me);function Hs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function qs(){this.g=!0}qs.prototype.xa=function(){this.g=!1};function av(a,h,d,g,C,k){a.info(function(){if(a.g)if(k)for(var z="",ke=k.split("&"),nt=0;nt<ke.length;nt++){var we=ke[nt].split("=");if(1<we.length){var lt=we[0];we=we[1];var ut=lt.split("_");z=2<=ut.length&&ut[1]=="type"?z+(lt+"="+we+"&"):z+(lt+"=redacted&")}}else z=null;else z=k;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+d+`
`+z})}function cv(a,h,d,g,C,k,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+d+`
`+k+" "+z})}function Zr(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+uv(a,d)+(g?" "+g:"")})}function lv(a,h){a.info(function(){return"TIMEOUT: "+h})}qs.prototype.info=function(){};function uv(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var k=C[0];if(k!="noop"&&k!="stop"&&k!="close")for(var z=1;z<C.length;z++)C[z]=""}}}}return tt(d)}catch{return h}}var co={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fc;function lo(){}P(lo,lc),lo.prototype.g=function(){return new XMLHttpRequest},lo.prototype.i=function(){return{}},fc=new lo;function $n(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ph}function ph(){this.i=null,this.g="",this.h=!1}var mh={},dc={};function pc(a,h,d){a.L=1,a.v=po(yn(h)),a.m=d,a.P=!0,gh(a,null)}function gh(a,h){a.F=Date.now(),uo(a),a.A=yn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),kh(d.i,"t",g),a.C=0,d=a.j.J,a.h=new ph,a.g=Gh(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Vt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Bn[0]=C.toString()),C=Bn);for(var k=0;k<C.length;k++){var z=x(d,C[k],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),js(),av(a.i,a.u,a.A,a.l,a.R,a.m)}$n.prototype.ca=function(a){a=a.target;const h=this.M;h&&vn(a)==3?h.j():this.Y(a)},$n.prototype.Y=function(a){try{if(a==this.g)e:{const ut=vn(this.g);var h=this.g.Ba();const ns=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||xh(this.g)))){this.J||ut!=4||h==7||(h==8||0>=ns?js(3):js(2)),mc(this);var d=this.g.Z();this.X=d;t:if(_h(this)){var g=xh(this.g);a="";var C=g.length,k=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ar(this),Ws(this);var z="";break t}this.h.i=new c.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(k&&h==C-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,cv(this.i,this.u,this.A,this.l,this.R,ut,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,nt=this.g;if((ke=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(ke)){var we=ke;break t}}we=null}if(d=we)Zr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gc(this,d);else{this.o=!1,this.s=3,_t(12),Ar(this),Ws(this);break e}}if(this.P){d=!0;let qt;for(;!this.J&&this.C<z.length;)if(qt=hv(this,z),qt==dc){ut==4&&(this.s=4,_t(14),d=!1),Zr(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==mh){this.s=4,_t(15),Zr(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Zr(this.i,this.l,qt,null),gc(this,qt);if(_h(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||z.length!=0||this.h.h||(this.s=1,_t(16),d=!1),this.o=this.o&&d,!d)Zr(this.i,this.l,z,"[Invalid Chunked Response]"),Ar(this),Ws(this);else if(0<z.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ic(lt),lt.M=!0,_t(11))}}else Zr(this.i,this.l,z,null),gc(this,z);ut==4&&Ar(this),this.o&&!this.J&&(ut==4?qh(this.j,this):(this.o=!1,uo(this)))}else Cv(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Ar(this),Ws(this)}}}catch{}finally{}};function _h(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function hv(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?dc:(d=Number(h.substring(d,g)),isNaN(d)?mh:(g+=1,g+d>h.length?dc:(h=h.slice(g,g+d),a.C=g+d,h)))}$n.prototype.cancel=function(){this.J=!0,Ar(this)};function uo(a){a.S=Date.now()+a.I,yh(a,a.I)}function yh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Hs(m(a.ba,a),h)}function mc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}$n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(lv(this.i,this.A),this.L!=2&&(js(),_t(17)),Ar(this),this.s=2,Ws(this)):yh(this,this.S-a)};function Ws(a){a.j.G==0||a.J||qh(a.j,a)}function Ar(a){mc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Bs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function gc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||_c(d.h,a))){if(!a.K&&_c(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Eo(d),yo(d);else break e;Tc(d),_t(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Hs(m(d.Za,d),6e3));if(1>=Th(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Rr(d,11)}else if((a.K||d.g==a)&&Eo(d),!F(h))for(C=d.Da.g.parse(h),h=0;h<C.length;h++){let we=C[h];if(d.T=we[0],we=we[1],d.G==2)if(we[0]=="c"){d.K=we[1],d.ia=we[2];const lt=we[3];lt!=null&&(d.la=lt,d.j.info("VER="+d.la));const ut=we[4];ut!=null&&(d.Aa=ut,d.j.info("SVER="+d.Aa));const ns=we[5];ns!=null&&typeof ns=="number"&&0<ns&&(g=1.5*ns,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const qt=a.g;if(qt){const Io=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Io){var k=g.h;k.g||Io.indexOf("spdy")==-1&&Io.indexOf("quic")==-1&&Io.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(yc(k,k.h),k.h=null))}if(g.D){const wc=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;wc&&(g.ya=wc,Ve(g.I,g.D,wc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=a;if(g.qa=Kh(g,g.J?g.ia:null,g.W),z.K){Ih(g.h,z);var ke=z,nt=g.L;nt&&(ke.I=nt),ke.B&&(mc(ke),uo(ke)),g.g=z}else jh(g);0<d.i.length&&vo(d)}else we[0]!="stop"&&we[0]!="close"||Rr(d,7);else d.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?Rr(d,7):Ec(d):we[0]!="noop"&&d.l&&d.l.ta(we),d.v=0)}}js(4)}catch{}}var fv=class{constructor(a,h){this.g=a,this.map=h}};function vh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Th(a){return a.h?1:a.g?a.g.size:0}function _c(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function yc(a,h){a.g?a.g.add(h):a.h=h}function Ih(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}vh.prototype.cancel=function(){if(this.i=wh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return O(a.i)}function dv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function pv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Ah(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=pv(a),g=dv(a),C=g.length,k=0;k<C;k++)h.call(void 0,g[k],d&&d[k],a)}var bh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mv(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),C=null;if(0<=g){var k=a[d].substring(0,g);C=a[d].substring(g+1)}else k=a[d];h(k,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof br){this.h=a.h,ho(this,a.j),this.o=a.o,this.g=a.g,fo(this,a.s),this.l=a.l;var h=a.i,d=new Gs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Rh(this,d),this.m=a.m}else a&&(h=String(a).match(bh))?(this.h=!1,ho(this,h[1]||"",!0),this.o=zs(h[2]||""),this.g=zs(h[3]||"",!0),fo(this,h[4]),this.l=zs(h[5]||"",!0),Rh(this,h[6]||"",!0),this.m=zs(h[7]||"")):(this.h=!1,this.i=new Gs(null,this.h))}br.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ks(h,Sh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ks(h,Sh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ks(d,d.charAt(0)=="/"?yv:_v,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ks(d,Ev)),a.join("")};function yn(a){return new br(a)}function ho(a,h,d){a.j=d?zs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function fo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Rh(a,h,d){h instanceof Gs?(a.i=h,Tv(a.i,a.h)):(d||(h=Ks(h,vv)),a.i=new Gs(h,a.h))}function Ve(a,h,d){a.i.set(h,d)}function po(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function zs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ks(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,gv),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function gv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Sh=/[#\/\?@]/g,_v=/[#\?:]/g,yv=/[#\?]/g,vv=/[#\?@]/g,Ev=/#/g;function Gs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function jn(a){a.g||(a.g=new Map,a.h=0,a.i&&mv(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Gs.prototype,t.add=function(a,h){jn(this),this.i=null,a=es(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Ch(a,h){jn(a),h=es(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ph(a,h){return jn(a),h=es(a,h),a.g.has(h)}t.forEach=function(a,h){jn(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(h,C,g,this)},this)},this)},t.na=function(){jn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const C=a[g];for(let k=0;k<C.length;k++)d.push(h[g])}return d},t.V=function(a){jn(this);let h=[];if(typeof a=="string")Ph(this,a)&&(h=h.concat(this.g.get(es(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return jn(this),this.i=null,a=es(this,a),Ph(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function kh(a,h,d){Ch(a,h),0<d.length&&(a.i=null,a.g.set(es(a,h),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const k=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var C=k;z[g]!==""&&(C+="="+encodeURIComponent(String(z[g]))),a.push(C)}}return this.i=a.join("&")};function es(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Tv(a,h){h&&!a.j&&(jn(a),a.i=null,a.g.forEach(function(d,g){var C=g.toLowerCase();g!=C&&(Ch(this,g),kh(this,C,d))},a)),a.j=h}function Iv(a,h){const d=new qs;if(c.Image){const g=new Image;g.onload=v(Hn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=v(Hn,d,"TestLoadImage: error",!1,h,g),g.onabort=v(Hn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=v(Hn,d,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function wv(a,h){const d=new qs,g=new AbortController,C=setTimeout(()=>{g.abort(),Hn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(C),k.ok?Hn(d,"TestPingServer: ok",!0,h):Hn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Hn(d,"TestPingServer: error",!1,h)})}function Hn(a,h,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function Av(){this.g=new oo}function bv(a,h,d){const g=d||"";try{Ah(a,function(C,k){let z=C;u(C)&&(z=tt(C)),h.push(g+k+"="+encodeURIComponent(z))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function mo(a){this.l=a.Ub||null,this.j=a.eb||!1}P(mo,lc),mo.prototype.g=function(){return new go(this.l,this.j)},mo.prototype.i=function(a){return function(){return a}}({});function go(a,h){ne.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(go,ne),t=go.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Js(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Js(this)),this.g&&(this.readyState=3,Js(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Oh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Oh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Qs(this):Js(this),this.readyState==3&&Oh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Qs(this))},t.Qa=function(a){this.g&&(this.response=a,Qs(this))},t.ga=function(){this.g&&Qs(this)};function Qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Js(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Js(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(go.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Dh(a){let h="";return oe(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function vc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Dh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ve(a,h,d))}function Fe(a){ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Fe,ne);var Rv=/^https?$/i,Sv=["POST","PUT"];t=Fe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fc.g(),this.v=this.o?ah(this.o):ah(fc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(k){Vh(this,k);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())d.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Sv,h,void 0))||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,z]of d)this.g.setRequestHeader(k,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mh(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){Vh(this,k)}};function Vh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Nh(a),_o(a)}function Nh(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),_o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_o(this,!0)),Fe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Lh(this):this.bb())},t.bb=function(){Lh(this)};function Lh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||vn(a)!=4||a.Z()!=2)){if(a.u&&vn(a)==4)at(a.Ea,0,a);else if(pe(a,"readystatechange"),vn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=z===0){var C=String(a.D).match(bh)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!Rv.test(C?C.toLowerCase():"")}d=g}if(d)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var k=2<vn(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",Nh(a)}}finally{_o(a)}}}}function _o(a,h){if(a.g){Mh(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pe(a,"ready");try{d.onreadystatechange=g}catch{}}}function Mh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Nt(h)}};function xh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Cv(a){const h={};a=(a.g&&2<=vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(F(a[g]))continue;var d=R(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=h[C]||[];h[C]=k,k.push(d)}b(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Fh(a){this.Aa=0,this.i=[],this.j=new qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xs("baseRetryDelayMs",5e3,a),this.cb=Xs("retryDelaySeedMs",1e4,a),this.Wa=Xs("forwardChannelMaxRetries",2,a),this.wa=Xs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new vh(a&&a.concurrentRequestLimit),this.Da=new Av,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Fh.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){_t(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Kh(this,null,this.W),vo(this)};function Ec(a){if(Uh(a),a.G==3){var h=a.U++,d=yn(a.I);if(Ve(d,"SID",a.K),Ve(d,"RID",h),Ve(d,"TYPE","terminate"),Ys(a,d),h=new $n(a,a.j,h),h.L=2,h.v=po(yn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=Gh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),uo(h)}zh(a)}function yo(a){a.g&&(Ic(a),a.g.cancel(),a.g=null)}function Uh(a){yo(a),a.u&&(c.clearTimeout(a.u),a.u=null),Eo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function vo(a){if(!Eh(a.h)&&!a.s){a.s=!0;var h=a.Ga;le||Ht(),ge||(le(),ge=!0),Rt.add(h,a),a.B=0}}function Pv(a,h){return Th(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Hs(m(a.Ga,a,h),Wh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new $n(this,this.j,a);let k=this.o;if(this.S&&(k?(k=y(k),I(k,this.S)):k=this.S),this.m!==null||this.O||(C.H=k,k=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=$h(this,C,h),d=yn(this.I),Ve(d,"RID",a),Ve(d,"CVER",22),this.D&&Ve(d,"X-HTTP-Session-Id",this.D),Ys(this,d),k&&(this.O?h="headers="+encodeURIComponent(String(Dh(k)))+"&"+h:this.m&&vc(d,this.m,k)),yc(this.h,C),this.Ua&&Ve(d,"TYPE","init"),this.P?(Ve(d,"$req",h),Ve(d,"SID","null"),C.T=!0,pc(C,d,null)):pc(C,d,h),this.G=2}}else this.G==3&&(a?Bh(this,a):this.i.length==0||Eh(this.h)||Bh(this))};function Bh(a,h){var d;h?d=h.l:d=a.U++;const g=yn(a.I);Ve(g,"SID",a.K),Ve(g,"RID",d),Ve(g,"AID",a.T),Ys(a,g),a.m&&a.o&&vc(g,a.m,a.o),d=new $n(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=$h(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),yc(a.h,d),pc(d,g,h)}function Ys(a,h){a.H&&oe(a.H,function(d,g){Ve(h,g,d)}),a.l&&Ah({},function(d,g){Ve(h,g,d)})}function $h(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let k=-1;for(;;){const z=["count="+d];k==-1?0<d?(k=C[0].g,z.push("ofs="+k)):k=0:z.push("ofs="+k);let ke=!0;for(let nt=0;nt<d;nt++){let we=C[nt].g;const lt=C[nt].map;if(we-=k,0>we)k=Math.max(0,C[nt].g-100),ke=!1;else try{bv(lt,z,"req"+we+"_")}catch{g&&g(lt)}}if(ke){g=z.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function jh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;le||Ht(),ge||(le(),ge=!0),Rt.add(h,a),a.v=0}}function Tc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Hs(m(a.Fa,a),Wh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Hh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Hs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),yo(this),Hh(this))};function Ic(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Hh(a){a.g=new $n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=yn(a.qa);Ve(h,"RID","rpc"),Ve(h,"SID",a.K),Ve(h,"AID",a.T),Ve(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(h,"TO",a.ja),Ve(h,"TYPE","xmlhttp"),Ys(a,h),a.m&&a.o&&vc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=po(yn(h)),d.m=null,d.P=!0,gh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,yo(this),Tc(this),_t(19))};function Eo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function qh(a,h){var d=null;if(a.g==h){Eo(a),Ic(a),a.g=null;var g=2}else if(_c(a.h,h))d=h.D,Ih(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;g=ao(),pe(g,new fh(g,d)),vo(a)}else jh(a);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&Pv(a,h)||g==2&&Tc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),C){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function Wh(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Rr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const C=!g;g=new br(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ho(g,"https"),po(g),C?Iv(g.toString(),d):wv(g.toString(),d)}else _t(2);a.G=0,a.l&&a.l.sa(h),zh(a),Uh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function zh(a){if(a.G=0,a.ka=[],a.l){const h=wh(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Kh(a,h,d){var g=d instanceof br?yn(d):new br(d);if(g.g!="")h&&(g.g=h+"."+g.g),fo(g,g.s);else{var C=c.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var k=new br(null);g&&ho(k,g),h&&(k.g=h),C&&fo(k,C),d&&(k.l=d),g=k}return d=a.D,h=a.ya,d&&h&&Ve(g,d,h),Ve(g,"VER",a.la),Ys(a,g),g}function Gh(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Fe(new mo({eb:d})):new Fe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qh(){}t=Qh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function To(){}To.prototype.g=function(a,h){return new St(a,h)};function St(a,h){ne.call(this),this.g=new Fh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!F(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!F(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ts(this)}P(St,ne),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Ec(this.g)},St.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=tt(a),a=d);h.i.push(new fv(h.Ya++,a)),h.G==3&&vo(h)},St.prototype.N=function(){this.g.l=null,delete this.j,Ec(this.g),delete this.g,St.aa.N.call(this)};function Jh(a){uc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(Jh,uc);function Xh(){hc.call(this),this.status=1}P(Xh,hc);function ts(a){this.g=a}P(ts,Qh),ts.prototype.ua=function(){pe(this.g,"a")},ts.prototype.ta=function(a){pe(this.g,new Jh(a))},ts.prototype.sa=function(a){pe(this.g,new Xh)},ts.prototype.ra=function(){pe(this.g,"b")},To.prototype.createWebChannel=To.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,i_=function(){return new To},s_=function(){return ao()},r_=wr,Rl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},co.NO_ERROR=0,co.TIMEOUT=8,co.HTTP_ERROR=6,qo=co,dh.COMPLETE="complete",n_=dh,ch.EventType=$s,$s.OPEN="a",$s.CLOSE="b",$s.ERROR="c",$s.MESSAGE="d",ne.prototype.listen=ne.prototype.K,ii=ch,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,t_=Fe}).apply(typeof Co<"u"?Co:typeof self<"u"?self:typeof window<"u"?window:{});const pd="@firebase/firestore",md="4.7.10";/**
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
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let Ms="11.5.0";/**
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
 */const Wr=new du("@firebase/firestore");function as(){return Wr.logLevel}function X(t,...e){if(Wr.logLevel<=_e.DEBUG){const n=e.map(bu);Wr.debug(`Firestore (${Ms}): ${t}`,...n)}}function Nn(t,...e){if(Wr.logLevel<=_e.ERROR){const n=e.map(bu);Wr.error(`Firestore (${Ms}): ${t}`,...n)}}function As(t,...e){if(Wr.logLevel<=_e.WARN){const n=e.map(bu);Wr.warn(`Firestore (${Ms}): ${t}`,...n)}}function bu(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+t;throw Nn(e),new Error(e)}function Se(t,e){t||ue()}function de(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ur{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class o_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class o0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class a0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class c0{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ur,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ur)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new o_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new ft(e)}}class l0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class u0{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new l0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class h0{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,xt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new gd(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new gd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function f0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function a_(){return new TextEncoder}/**
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
 */class c_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=f0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function Sl(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return me(r,s);{const i=a_(),o=d0(i.encode(_d(t,n)),i.encode(_d(e,n)));return o!==0?o:me(r,s)}}n+=r>65535?2:1}return me(t.length,e.length)}function _d(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function d0(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return me(t[n],e[n]);return me(t.length,e.length)}function bs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const yd=-62135596800,vd=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*vd);return new Ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<yd)throw new se(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vd}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-yd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new Ge(0,0))}static max(){return new he(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ed="__name__";class cn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=cn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return me(e.length,n.length)}static compareSegments(e,n){const r=cn.isNumericId(e),s=cn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?cn.extractNumericId(e).compare(cn.extractNumericId(n)):Sl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return lr.fromString(e.substring(4,e.length-2))}}class Ue extends cn{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const p0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends cn{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return p0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ed}static keyField(){return new it([Ed])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new se(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new se(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new se(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new se(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Ue.fromString(e))}static fromName(e){return new ie(Ue.fromString(e).popFirst(5))}static empty(){return new ie(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Ue(e.slice()))}}/**
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
 */const Di=-1;function m0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new dr(s,ie.empty(),e)}function g0(t){return new dr(t.readTime,t.key,Di)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(he.min(),ie.empty(),Di)}static max(){return new dr(he.max(),ie.empty(),Di)}}function _0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const y0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class v0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xs(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==y0)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function E0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ka{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ka.ae=-1;/**
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
 */const Ru=-1;function Ga(t){return t==null}function fa(t){return t===0&&1/t==-1/0}function T0(t){return typeof t=="number"&&Number.isInteger(t)&&!fa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const l_="";function I0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Td(e)),e=w0(t.get(n),e);return Td(e)}function w0(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case l_:n+="";break;default:n+=i}}return n}function Td(t){return t+l_+""}/**
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
 */function Id(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function u_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Po(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Po(this.root,e,this.comparator,!1)}getReverseIterator(){return new Po(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Po(this.root,e,this.comparator,!0)}}class Po{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wd(this.data.getIterator())}getIteratorFrom(e){return new wd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class wd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new Qe(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class h_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new h_("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const A0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(Se(!!t),typeof t=="string"){let e=0;const n=A0.exec(t);if(Se(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */const f_="server_timestamp",d_="__type__",p_="__previous_value__",m_="__local_write_time__";function Su(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[d_])===null||n===void 0?void 0:n.stringValue)===f_}function Qa(t){const e=t.mapValue.fields[p_];return Su(e)?Qa(e):e}function Vi(t){const e=pr(t.mapValue.fields[m_].timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class b0{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}const da="(default)";class Ni{constructor(e,n){this.projectId=e,this.database=n||da}static empty(){return new Ni("","")}get isDefaultDatabase(){return this.database===da}isEqual(e){return e instanceof Ni&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const g_="__type__",R0="__max__",ko={mapValue:{}},__="__vector__",pa="value";function gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Su(t)?4:C0(t)?9007199254740991:S0(t)?10:11:ue()}function gn(t,e){if(t===e)return!0;const n=gr(t);if(n!==gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vi(t).isEqual(Vi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=pr(s.timestampValue),c=pr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return mr(s.bytesValue).isEqual(mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),c=je(i.doubleValue);return o===c?fa(o)===fa(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return bs(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Id(o)!==Id(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!gn(o[l],c[l])))return!1;return!0}(t,e);default:return ue()}}function Li(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=gr(t),r=gr(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=je(i.integerValue||i.doubleValue),l=je(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Ad(t.timestampValue,e.timestampValue);case 4:return Ad(Vi(t),Vi(e));case 5:return Sl(t.stringValue,e.stringValue);case 6:return function(i,o){const c=mr(i),l=mr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=me(c[u],l[u]);if(f!==0)return f}return me(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=me(je(i.latitude),je(o.latitude));return c!==0?c:me(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return bd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,f;const p=i.fields||{},m=o.fields||{},v=(c=p[pa])===null||c===void 0?void 0:c.arrayValue,P=(l=m[pa])===null||l===void 0?void 0:l.arrayValue,O=me(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:bd(v,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ko.mapValue&&o===ko.mapValue)return 0;if(i===ko.mapValue)return 1;if(o===ko.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Sl(l[p],f[p]);if(m!==0)return m;const v=Rs(c[l[p]],u[f[p]]);if(v!==0)return v}return me(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ue()}}function Ad(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=pr(t),r=pr(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function bd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Rs(n[s],r[s]);if(i)return i}return me(n.length,r.length)}function Ss(t){return Cl(t)}function Cl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Cl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Cl(n.fields[o])}`;return s+"}"}(t.mapValue):ue()}function Wo(t){switch(gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qa(t);return e?16+Wo(e):16;case 5:return 2*t.stringValue.length;case 6:return mr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Wo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Qr(r.fields,(i,o)=>{s+=i.length+Wo(o)}),s}(t.mapValue);default:throw ue()}}function Pl(t){return!!t&&"integerValue"in t}function Cu(t){return!!t&&"arrayValue"in t}function Rd(t){return!!t&&"nullValue"in t}function Sd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zo(t){return!!t&&"mapValue"in t}function S0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[g_])===null||n===void 0?void 0:n.stringValue)===__}function gi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function C0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===R0}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gi(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=gi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());zo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];zo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Qr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(gi(this.value))}}function y_(t){const e=[];return Qr(t.fields,(n,r)=>{const s=new it([n]);if(zo(r)){const i=y_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
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
 */class mt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new mt(e,0,he.min(),he.min(),he.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,he.min(),he.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,he.min(),he.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ma{constructor(e,n){this.position=e,this.inclusive=n}}function Cd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ga{constructor(e,n="asc"){this.field=e,this.dir=n}}function P0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class v_{}class We extends v_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new O0(e,n,r):n==="array-contains"?new N0(e,r):n==="in"?new L0(e,r):n==="not-in"?new M0(e,r):n==="array-contains-any"?new x0(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new D0(e,r):new V0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&gr(this.value)===gr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _n extends v_{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new _n(e,n)}matches(e){return E_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function E_(t){return t.op==="and"}function T_(t){return k0(t)&&E_(t)}function k0(t){for(const e of t.filters)if(e instanceof _n)return!1;return!0}function kl(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if(T_(t))return t.filters.map(e=>kl(e)).join(",");{const e=t.filters.map(n=>kl(n)).join(",");return`${t.op}(${e})`}}function I_(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&gn(r.value,s.value)}(t,e):t instanceof _n?function(r,s){return s instanceof _n&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&I_(o,s.filters[c]),!0):!1}(t,e):void ue()}function w_(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Ss(n.value)}`}(t):t instanceof _n?function(n){return n.op.toString()+" {"+n.getFilters().map(w_).join(" ,")+"}"}(t):"Filter"}class O0 extends We{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class D0 extends We{constructor(e,n){super(e,"in",n),this.keys=A_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class V0 extends We{constructor(e,n){super(e,"not-in",n),this.keys=A_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function A_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class N0 extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cu(n)&&Li(n.arrayValue,this.value)}}class L0 extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Li(this.value.arrayValue,n)}}class M0 extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Li(this.value.arrayValue,n)}}class x0 extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Li(this.value.arrayValue,r))}}/**
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
 */class F0{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.le=null}}function kd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new F0(t,e,n,r,s,i,o)}function Pu(t){const e=de(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ga(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.le=n}return e.le}function ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!P0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!I_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pd(t.startAt,e.startAt)&&Pd(t.endAt,e.endAt)}function Ol(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ja{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function U0(t,e,n,r,s,i,o,c){return new Ja(t,e,n,r,s,i,o,c)}function Ou(t){return new Ja(t)}function Od(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function B0(t){return t.collectionGroup!==null}function _i(t){const e=de(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Qe(it.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new ga(i,r))}),n.has(it.keyField().canonicalString())||e.he.push(new ga(it.keyField(),r))}return e.he}function dn(t){const e=de(t);return e.Pe||(e.Pe=$0(e,_i(t))),e.Pe}function $0(t,e){if(t.limitType==="F")return kd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ga(s.field,i)});const n=t.endAt?new ma(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ma(t.startAt.position,t.startAt.inclusive):null;return kd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Dl(t,e,n){return new Ja(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xa(t,e){return ku(dn(t),dn(e))&&t.limitType===e.limitType}function b_(t){return`${Pu(dn(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>w_(s)).join(", ")}]`),Ga(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ss(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ss(s)).join(",")),`Target(${r})`}(dn(t))}; limitType=${t.limitType})`}function Ya(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of _i(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Cd(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,_i(r),s)||r.endAt&&!function(o,c,l){const u=Cd(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,_i(r),s))}(t,e)}function j0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function R_(t){return(e,n)=>{let r=!1;for(const s of _i(t)){const i=H0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function H0(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Rs(l,u):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
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
 */class Jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return u_(this.inner)}size(){return this.innerSize}}/**
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
 */const q0=new xe(ie.comparator);function Ln(){return q0}const S_=new xe(ie.comparator);function oi(...t){let e=S_;for(const n of t)e=e.insert(n.key,n);return e}function C_(t){let e=S_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vr(){return yi()}function P_(){return yi()}function yi(){return new Jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const W0=new xe(ie.comparator),z0=new Qe(ie.comparator);function ye(...t){let e=z0;for(const n of t)e=e.add(n);return e}const K0=new Qe(me);function G0(){return K0}/**
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
 */function Du(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fa(e)?"-0":e}}function k_(t){return{integerValue:""+t}}function Q0(t,e){return T0(e)?k_(e):Du(t,e)}/**
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
 */class Za{constructor(){this._=void 0}}function J0(t,e,n){return t instanceof _a?function(s,i){const o={fields:{[d_]:{stringValue:f_},[m_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Su(i)&&(i=Qa(i)),i&&(o.fields[p_]=i),{mapValue:o}}(n,e):t instanceof Mi?D_(t,e):t instanceof xi?V_(t,e):function(s,i){const o=O_(s,i),c=Dd(o)+Dd(s.Ie);return Pl(o)&&Pl(s.Ie)?k_(c):Du(s.serializer,c)}(t,e)}function X0(t,e,n){return t instanceof Mi?D_(t,e):t instanceof xi?V_(t,e):n}function O_(t,e){return t instanceof ya?function(r){return Pl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class _a extends Za{}class Mi extends Za{constructor(e){super(),this.elements=e}}function D_(t,e){const n=N_(e);for(const r of t.elements)n.some(s=>gn(s,r))||n.push(r);return{arrayValue:{values:n}}}class xi extends Za{constructor(e){super(),this.elements=e}}function V_(t,e){let n=N_(e);for(const r of t.elements)n=n.filter(s=>!gn(s,r));return{arrayValue:{values:n}}}class ya extends Za{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Dd(t){return je(t.integerValue||t.doubleValue)}function N_(t){return Cu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Y0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Mi&&s instanceof Mi||r instanceof xi&&s instanceof xi?bs(r.elements,s.elements,gn):r instanceof ya&&s instanceof ya?gn(r.Ie,s.Ie):r instanceof _a&&s instanceof _a}(t.transform,e.transform)}class Z0{constructor(e,n){this.version=e,this.transformResults=n}}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ko(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ec{}function L_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new x_(t.key,Pn.none()):new to(t.key,t.data,Pn.none());{const n=t.data,r=Ft.empty();let s=new Qe(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Xr(t.key,r,new Kt(s.toArray()),Pn.none())}}function eR(t,e,n){t instanceof to?function(s,i,o){const c=s.value.clone(),l=Nd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Xr?function(s,i,o){if(!Ko(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Nd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(M_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vi(t,e,n,r){return t instanceof to?function(i,o,c,l){if(!Ko(i.precondition,o))return c;const u=i.value.clone(),f=Ld(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xr?function(i,o,c,l){if(!Ko(i.precondition,o))return c;const u=Ld(i.fieldTransforms,l,o),f=o.data;return f.setAll(M_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Ko(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function tR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=O_(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function Vd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&bs(r,s,(i,o)=>Y0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class to extends ec{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xr extends ec{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function M_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Nd(t,e,n){const r=new Map;Se(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,X0(o,c,n[s]))}return r}function Ld(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,J0(i,o,e))}return r}class x_ extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nR extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&eR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=P_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=L_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&bs(this.mutations,e.mutations,(n,r)=>Vd(n,r))&&bs(this.baseMutations,e.baseMutations,(n,r)=>Vd(n,r))}}class Vu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length);let s=function(){return W0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Vu(e,n,r,s)}}/**
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
 */class sR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class iR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var qe,Te;function oR(t){switch(t){case B.OK:return ue();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ue()}}function F_(t){if(t===void 0)return Nn("GRPC error has no .code"),B.UNKNOWN;switch(t){case qe.OK:return B.OK;case qe.CANCELLED:return B.CANCELLED;case qe.UNKNOWN:return B.UNKNOWN;case qe.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case qe.INTERNAL:return B.INTERNAL;case qe.UNAVAILABLE:return B.UNAVAILABLE;case qe.UNAUTHENTICATED:return B.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case qe.NOT_FOUND:return B.NOT_FOUND;case qe.ALREADY_EXISTS:return B.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return B.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case qe.ABORTED:return B.ABORTED;case qe.OUT_OF_RANGE:return B.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return B.UNIMPLEMENTED;case qe.DATA_LOSS:return B.DATA_LOSS;default:return ue()}}(Te=qe||(qe={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const aR=new lr([4294967295,4294967295],0);function Md(t){const e=a_().encode(t),n=new e_;return n.update(e),new Uint8Array(n.digest())}function xd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new lr([n,r],0),new lr([s,i],0)]}class Nu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ai(`Invalid padding: ${n}`);if(r<0)throw new ai(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ai(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ai(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=lr.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(lr.fromNumber(r)));return s.compare(aR)===1&&(s=new lr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Md(e),[r,s]=xd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ee===0)return;const n=Md(e),[r,s]=xd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ai extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,no.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tc(he.min(),s,new xe(me),Ln(),ye())}}class no{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new no(r,n,ye(),ye(),ye())}}/**
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
 */class Go{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class U_{constructor(e,n){this.targetId=e,this.ge=n}}class B_{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Fd{constructor(){this.pe=0,this.ye=Ud(),this.we=ot.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=ye(),n=ye(),r=ye();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new no(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=Ud()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Se(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class cR{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Ln(),this.$e=Oo(),this.Ue=Oo(),this.Ke=new xe(me)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(Ol(i))if(r===0){const o=new ie(i.path);this.ze(n,o,mt.newNoDocument(o,he.min()))}else Se(r===1);else{const o=this.et(n);if(o!==r){const c=this.tt(e),l=c?this.nt(c,e,o):1;if(l!==0){this.Ye(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=mr(r).toUint8Array()}catch(l){if(l instanceof h_)return As("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Nu(o,s,i)}catch(l){return As(l instanceof ai?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ee===0?null:c}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const c=this.Xe(o);if(c){if(i.current&&Ol(c.target)){const l=new ie(c.target.path);this._t(l).has(o)||this.ut(o,l)||this.ze(o,l,mt.newNoDocument(l,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=ye();this.Ue.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new tc(e,n,this.Ke,this.Qe,r);return this.Qe=Ln(),this.$e=Oo(),this.Ue=Oo(),this.Ke=new xe(me),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Fd,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Qe(me),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Qe(me),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Fd),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Oo(){return new xe(ie.comparator)}function Ud(){return new xe(ie.comparator)}const lR={asc:"ASCENDING",desc:"DESCENDING"},uR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hR={and:"AND",or:"OR"};class fR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vl(t,e){return t.useProto3Json||Ga(e)?e:{value:e}}function va(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dR(t,e){return va(t,e.toTimestamp())}function pn(t){return Se(!!t),he.fromTimestamp(function(n){const r=pr(n);return new Ge(r.seconds,r.nanos)}(t))}function Lu(t,e){return Nl(t,e).canonicalString()}function Nl(t,e){const n=function(s){return new Ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function j_(t){const e=Ue.fromString(t);return Se(K_(e)),e}function Ll(t,e){return Lu(t.databaseId,e.path)}function qc(t,e){const n=j_(e);if(n.get(1)!==t.databaseId.projectId)throw new se(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(q_(n))}function H_(t,e){return Lu(t.databaseId,e)}function pR(t){const e=j_(t);return e.length===4?Ue.emptyPath():q_(e)}function Ml(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function q_(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bd(t,e,n){return{name:Ll(t,e),fields:n.value.mapValue.fields}}function mR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Se(f===void 0||typeof f=="string"),ot.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ot.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?B.UNKNOWN:F_(u.code);return new se(f,u.message||"")}(o);n=new B_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=qc(t,r.document.name),i=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):he.min(),c=new Ft({mapValue:{fields:r.document.fields}}),l=mt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Go(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=qc(t,r.document),i=r.readTime?pn(r.readTime):he.min(),o=mt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Go([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=qc(t,r.document),i=r.removedTargetIds||[];n=new Go([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new iR(s,i),c=r.targetId;n=new U_(c,o)}}return n}function gR(t,e){let n;if(e instanceof to)n={update:Bd(t,e.key,e.value)};else if(e instanceof x_)n={delete:Ll(t,e.key)};else if(e instanceof Xr)n={update:Bd(t,e.key,e.data),updateMask:bR(e.fieldMask)};else{if(!(e instanceof nR))return ue();n={verify:Ll(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof _a)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Mi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof xi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ya)return{fieldPath:o.field.canonicalString(),increment:c.Ie};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:dR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function _R(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?pn(s.updateTime):pn(i);return o.isEqual(he.min())&&(o=pn(i)),new Z0(o,s.transformResults||[])}(n,e))):[]}function yR(t,e){return{documents:[H_(t,e.path)]}}function vR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=H_(t,s);const i=function(u){if(u.length!==0)return z_(_n.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:ls(m.field),direction:IR(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Vl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:s}}function ER(t){let e=pR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=W_(p);return m instanceof _n&&T_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new ga(us(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Ga(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,v=p.values||[];return new ma(v,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,v=p.values||[];return new ma(v,m)}(n.endAt)),U0(e,s,o,i,c,"F",l,u)}function TR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function W_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=us(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=us(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return We.create(us(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _n.create(n.compositeFilter.filters.map(r=>W_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function IR(t){return lR[t]}function wR(t){return uR[t]}function AR(t){return hR[t]}function ls(t){return{fieldPath:t.canonicalString()}}function us(t){return it.fromServerFormat(t.fieldPath)}function z_(t){return t instanceof We?function(n){if(n.op==="=="){if(Sd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(Rd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Sd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(Rd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:wR(n.op),value:n.value}}}(t):t instanceof _n?function(n){const r=n.getFilters().map(s=>z_(s));return r.length===1?r[0]:{compositeFilter:{op:AR(n.op),filters:r}}}(t):ue()}function bR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function K_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class rr{constructor(e,n,r,s,i=he.min(),o=he.min(),c=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class RR{constructor(e){this.Tt=e}}function SR(t){const e=ER({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dl(e,e.limit,"L"):e}/**
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
 */class CR{constructor(){this.Tn=new PR}addToCollectionParentIndex(e,n){return this.Tn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(dr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class PR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Ue.comparator)).toArray()}}/**
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
 */const $d={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},G_=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(G_,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
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
 */class Cs{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Cs(0)}static Kn(){return new Cs(-1)}}/**
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
 */const jd="LruGarbageCollector",kR=1048576;function Hd([t,e],[n,r]){const s=me(t,n);return s===0?me(e,r):s}class OR{constructor(e){this.Hn=e,this.buffer=new Qe(Hd),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Hd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){X(jd,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Fs(n)?X(jd,"Ignoring IndexedDB error during garbage collection: ",n):await xs(n)}await this.er(3e5)})}}class VR{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Ka.ae);const r=new OR(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve($d)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$d):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),as()<=_e.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function NR(t,e){return new VR(t,e)}/**
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
 */class LR{constructor(){this.changes=new Jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class MR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class xR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&vi(r.mutation,s,Kt.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Vr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=oi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Ln();const o=yi(),c=function(){return yi()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Xr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),vi(f.mutation,u,f.mutation.getFieldMask(),Ge.now())):o.set(u.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return c.set(u,new MR(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=yi();let s=new xe((o,c)=>o-c),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Kt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||ye()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=P_();f.forEach(m=>{if(!i.has(m)){const v=L_(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):B0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Vr());let c=Di,l=i;return o.next(u=>M.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ye())).next(f=>({batchId:c,changes:C_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=oi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=oi();return this.indexManager.getCollectionParents(e,i).next(c=>M.forEach(c,l=>{const u=function(p,m){return new Ja(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,mt.newInvalidDocument(f)))});let c=oi();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&vi(f.mutation,u,Kt.empty(),Ge.now()),Ya(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class FR{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return M.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:pn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:SR(s.bundledQuery),readTime:pn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class UR{constructor(){this.overlays=new xe(ie.comparator),this.Rr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Vr(),i=n.length+1,o=new ie(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Vr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Vr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return M.resolve(c)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new sR(n,r));let i=this.Rr.get(n);i===void 0&&(i=ye(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
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
 */class BR{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Mu{constructor(){this.Vr=new Qe(Xe.mr),this.gr=new Qe(Xe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Xe(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new ie(new Ue([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new ie(new Ue([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=ye();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return ie.comparator(e.key,n.key)||me(e.Cr,n.Cr)}static pr(e,n){return me(e.Cr,n.Cr)||ie.comparator(e.key,n.key)}}/**
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
 */class $R{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Qe(Xe.mr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Mr=this.Mr.add(new Xe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Ru:this.Fr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const c=this.Or(o.Cr);i.push(c)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(me);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],c=>{r=r.add(c.Cr)})}),M.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new ie(i),0);let c=new Qe(me);return this.Mr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Cr)),!0)},o),M.resolve(this.Br(c))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return M.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Xe(n,0),s=this.Mr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class jR{constructor(e){this.kr=e,this.docs=function(){return new xe(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Ln();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ln();const o=n.path,c=new ie(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_0(g0(f),r)<=0||(s.has(f.key)||Ya(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}qr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HR(this)}getSize(e){return M.resolve(this.size)}}class HR extends LR{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class qR{constructor(e){this.persistence=e,this.Qr=new Jr(n=>Pu(n),ku),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Mu,this.targetCount=0,this.Kr=Cs.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),M.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new Cs(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.zn(n),M.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Ur.containsKey(n))}}/**
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
 */class Q_{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Ka(0),this.zr=!1,this.zr=!0,this.jr=new BR,this.referenceDelegate=e(this),this.Hr=new qR(this),this.indexManager=new CR,this.remoteDocumentCache=function(s){return new jR(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new RR(n),this.Yr=new FR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new $R(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new WR(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return M.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class WR extends v0{constructor(e){super(),this.currentSequenceNumber=e}}class xu{constructor(e){this.persistence=e,this.ti=new Mu,this.ni=null}static ri(e){return new xu(e)}get ii(){if(this.ni)return this.ni;throw ue()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),M.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.ii,r=>{const s=ie.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return M.or([()=>M.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Ea{constructor(e,n){this.persistence=e,this.oi=new Jr(r=>I0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=NR(this,n)}static ri(e,n){return new Ea(e,n)}Zr(){}Xr(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return M.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(c=>{c||(r++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),M.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Wo(e.data.value)),n}ar(e,n,r){return M.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Fu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fu(e,n.fromCache,r,s)}}/**
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
 */class zR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class KR{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return PI()?8:E0(gt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new zR;return this._s(e,n,o).next(c=>{if(i.result=c,this.Xi)return this.us(e,n,o,c.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(as()<=_e.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),M.resolve()):(as()<=_e.DEBUG&&X("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(as()<=_e.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dn(n))):M.resolve())}rs(e,n){if(Od(n))return M.resolve(null);let r=dn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Dl(n,null,"F"),r=dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.ns.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.cs(n,c);return this.ls(n,u,o,l.readTime)?this.rs(e,Dl(n,null,"F")):this.hs(e,u,n,l)}))})))}ss(e,n,r,s){return Od(n)||s.isEqual(he.min())?M.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?M.resolve(null):(as()<=_e.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cs(n)),this.hs(e,o,n,m0(s,Di)).next(c=>c))})}cs(e,n){let r=new Qe(R_(e));return n.forEach((s,i)=>{Ya(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return as()<=_e.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",cs(n)),this.ns.getDocumentsMatchingQuery(e,n,dr.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Uu="LocalStore",GR=3e8;class QR{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new xe(me),this.Is=new Jr(i=>Pu(i),ku),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xR(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function JR(t,e,n,r){return new QR(t,e,n,r)}async function J_(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ye();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:c}))})})}function XR(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const p=u.batch,m=p.keys();let v=M.resolve();return m.forEach(P=>{v=v.next(()=>f.getEntry(l,P)).next(O=>{const D=u.docVersions.get(P);Se(D!==null),O.version.compareTo(D)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),f.addEntry(O)))})}),v.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ye();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function X_(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function YR(t,e){const n=de(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Hr.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,f.addedDocuments,p)));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(ot.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),function(O,D,j){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=GR?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(m,v,f)&&c.push(n.Hr.updateTargetData(i,v))});let l=Ln(),u=ye();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(ZR(i,o,e.documentUpdates).next(f=>{l=f.Vs,u=f.fs})),!r.isEqual(he.min())){const f=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return M.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ts=s,i))}function ZR(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Ln();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(Uu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Vs:o,fs:s}})}function eS(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ru),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function tS(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function xl(t,e,n){const r=de(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fs(o))throw o;X(Uu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function qd(t,e,n){const r=de(t);let s=he.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=de(l),m=p.Is.get(f);return m!==void 0?M.resolve(p.Ts.get(m)):p.Hr.getTargetData(u,f)}(r,o,dn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:ye())).next(c=>(nS(r,j0(e),c),{documents:c,gs:i})))}function nS(t,e,n){let r=t.Es.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class Wd{constructor(){this.activeTargetIds=G0()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rS{constructor(){this.ho=new Wd,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Wd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sS{To(e){}shutdown(){}}/**
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
 */const zd="ConnectivityMonitor";class Kd{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){X(zd,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){X(zd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Do=null;function Fl(){return Do===null?Do=function(){return 268435456+Math.round(2147483648*Math.random())}():Do++,"0x"+Do.toString(16)}/**
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
 */const Wc="RestConnection",iS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class oS{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===da?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const o=Fl(),c=this.bo(e,n.toUriEncodedString());X(Wc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,s,i),this.vo(e,c,l,r).then(u=>(X(Wc,`Received RPC '${e}' ${o}: `,u),u),u=>{throw As(Wc,`RPC '${e}' ${o} failed with error: `,u,"url: ",c,"request:",r),u})}Co(e,n,r,s,i,o){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ms}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=iS[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class aS{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const ht="WebChannelConnection";class cS extends oS{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Fl();return new Promise((o,c)=>{const l=new t_;l.setWithCredentials(!0),l.listenOnce(n_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qo.NO_ERROR:const f=l.getResponseJson();X(ht,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case qo.TIMEOUT:X(ht,`RPC '${e}' ${i} timed out`),c(new se(B.DEADLINE_EXCEEDED,"Request time out"));break;case qo.HTTP_ERROR:const p=l.getStatus();if(X(ht,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const P=function(D){const j=D.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(j)>=0?j:B.UNKNOWN}(v.status);c(new se(P,v.message))}else c(new se(B.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new se(B.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{X(ht,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);X(ht,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Wo(e,n,r){const s=Fl(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=i_(),c=s_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(ht,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let m=!1,v=!1;const P=new aS({Fo:D=>{v?X(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(X(ht,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(ht,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Mo:()=>p.close()}),O=(D,j,F)=>{D.listen(j,$=>{try{F($)}catch(H){setTimeout(()=>{throw H},0)}})};return O(p,ii.EventType.OPEN,()=>{v||(X(ht,`RPC '${e}' stream ${s} transport opened.`),P.Qo())}),O(p,ii.EventType.CLOSE,()=>{v||(v=!0,X(ht,`RPC '${e}' stream ${s} transport closed`),P.Uo())}),O(p,ii.EventType.ERROR,D=>{v||(v=!0,As(ht,`RPC '${e}' stream ${s} transport errored:`,D),P.Uo(new se(B.UNAVAILABLE,"The operation could not be completed")))}),O(p,ii.EventType.MESSAGE,D=>{var j;if(!v){const F=D.data[0];Se(!!F);const $=F,H=($==null?void 0:$.error)||((j=$[0])===null||j===void 0?void 0:j.error);if(H){X(ht,`RPC '${e}' stream ${s} received error:`,H);const Z=H.status;let oe=function(_){const I=qe[_];if(I!==void 0)return F_(I)}(Z),b=H.message;oe===void 0&&(oe=B.INTERNAL,b="Unknown error status: "+Z+" with message "+H.message),v=!0,P.Uo(new se(oe,b)),p.close()}else X(ht,`RPC '${e}' stream ${s} received:`,F),P.Ko(F)}}),O(c,r_.STAT_EVENT,D=>{D.stat===Rl.PROXY?X(ht,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Rl.NOPROXY&&X(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}function zc(){return typeof document<"u"?document:null}/**
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
 */function nc(t){return new fR(t,!0)}/**
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
 */class Y_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Gd="PersistentStream";class Z_{constructor(e,n,r,s,i,o,c,l){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Y_(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new se(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return X(Gd,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(X(Gd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lS extends Z_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=mR(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?pn(o.readTime):he.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Ml(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Ol(l)?{documents:yR(i,l)}:{query:vR(i,l).ht},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=$_(i,o.resumeToken);const u=Vl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=va(i,o.snapshotVersion.toTimestamp());const u=Vl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=TR(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Ml(this.serializer),n.removeTarget=e,this.I_(n)}}class uS extends Z_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=_R(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Ml(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gR(this.serializer,r))};this.I_(n)}}/**
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
 */class hS{}class fS extends hS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new se(B.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Nl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se(B.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Co(e,Nl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se(B.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class dS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Nn(n),this.N_=!1):X("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const zr="RemoteStore";class pS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(X(zr,"Restarting streams for network reachability change."),await async function(l){const u=de(l);u.W_.add(4),await ro(u),u.j_.set("Unknown"),u.W_.delete(4),await rc(u)}(this))})}),this.j_=new dS(r,s)}}async function rc(t){if(Yr(t))for(const e of t.G_)await e(!0)}async function ro(t){for(const e of t.G_)await e(!1)}function ey(t,e){const n=de(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),Hu(n)?ju(n):Us(n).c_()&&$u(n,e))}function Bu(t,e){const n=de(t),r=Us(n);n.K_.delete(e),r.c_()&&ty(n,e),n.K_.size===0&&(r.c_()?r.P_():Yr(n)&&n.j_.set("Unknown"))}function $u(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Us(t).y_(e)}function ty(t,e){t.H_.Ne(e),Us(t).w_(e)}function ju(t){t.H_=new cR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Us(t).start(),t.j_.B_()}function Hu(t){return Yr(t)&&!Us(t).u_()&&t.K_.size>0}function Yr(t){return de(t).W_.size===0}function ny(t){t.H_=void 0}async function mS(t){t.j_.set("Online")}async function gS(t){t.K_.forEach((e,n)=>{$u(t,e)})}async function _S(t,e){ny(t),Hu(t)?(t.j_.q_(e),ju(t)):t.j_.set("Unknown")}async function yS(t,e,n){if(t.j_.set("Online"),e instanceof B_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.K_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.K_.delete(c),s.H_.removeTarget(c))}(t,e)}catch(r){X(zr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ta(t,r)}else if(e instanceof Go?t.H_.We(e):e instanceof U_?t.H_.Ze(e):t.H_.je(e),!n.isEqual(he.min()))try{const r=await X_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.H_.ot(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.K_.get(u);f&&i.K_.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.K_.get(l);if(!f)return;i.K_.set(l,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),ty(i,l);const p=new rr(f.target,l,u,f.sequenceNumber);$u(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X(zr,"Failed to raise snapshot:",r),await Ta(t,r)}}async function Ta(t,e,n){if(!Fs(e))throw e;t.W_.add(1),await ro(t),t.j_.set("Offline"),n||(n=()=>X_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(zr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await rc(t)})}function ry(t,e){return e().catch(n=>Ta(t,n,e))}async function sc(t){const e=de(t),n=_r(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Ru;for(;vS(e);)try{const s=await eS(e.localStore,r);if(s===null){e.U_.length===0&&n.P_();break}r=s.batchId,ES(e,s)}catch(s){await Ta(e,s)}sy(e)&&iy(e)}function vS(t){return Yr(t)&&t.U_.length<10}function ES(t,e){t.U_.push(e);const n=_r(t);n.c_()&&n.S_&&n.b_(e.mutations)}function sy(t){return Yr(t)&&!_r(t).u_()&&t.U_.length>0}function iy(t){_r(t).start()}async function TS(t){_r(t).C_()}async function IS(t){const e=_r(t);for(const n of t.U_)e.b_(n.mutations)}async function wS(t,e,n){const r=t.U_.shift(),s=Vu.from(r,e,n);await ry(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await sc(t)}async function AS(t,e){e&&_r(t).S_&&await async function(r,s){if(function(o){return oR(o)&&o!==B.ABORTED}(s.code)){const i=r.U_.shift();_r(r).h_(),await ry(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await sc(r)}}(t,e),sy(t)&&iy(t)}async function Qd(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),X(zr,"RemoteStore received new credentials");const r=Yr(n);n.W_.add(3),await ro(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await rc(n)}async function bS(t,e){const n=de(t);e?(n.W_.delete(2),await rc(n)):e||(n.W_.add(2),await ro(n),n.j_.set("Unknown"))}function Us(t){return t.J_||(t.J_=function(n,r,s){const i=de(n);return i.M_(),new lS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:mS.bind(null,t),No:gS.bind(null,t),Lo:_S.bind(null,t),p_:yS.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),Hu(t)?ju(t):t.j_.set("Unknown")):(await t.J_.stop(),ny(t))})),t.J_}function _r(t){return t.Y_||(t.Y_=function(n,r,s){const i=de(n);return i.M_(),new uS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:TS.bind(null,t),Lo:AS.bind(null,t),D_:IS.bind(null,t),v_:wS.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await sc(t)):(await t.Y_.stop(),t.U_.length>0&&(X(zr,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
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
 */class qu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new qu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wu(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),Fs(t))return new se(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ts{static emptySet(e){return new Ts(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=oi(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Jd{constructor(){this.Z_=new xe(ie.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):ue():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ps{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ps(e,n,Ts.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class RS{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class SS{constructor(){this.queries=Xd(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Xd(),i.forEach((o,c)=>{for(const l of c.ta)l.onError(r)})})(this,new se(B.ABORTED,"Firestore shutting down"))}}function Xd(){return new Jr(t=>b_(t),Xa)}async function CS(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new RS,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Wu(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&zu(n)}async function PS(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function kS(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.ta)c.oa(s)&&(r=!0);o.ea=s}}r&&zu(n)}function OS(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function zu(t){t.ia.forEach(e=>{e.next()})}var Ul,Yd;(Yd=Ul||(Ul={}))._a="default",Yd.Cache="cache";class DS{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Ul.Cache}}/**
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
 */class oy{constructor(e){this.key=e}}class ay{constructor(e){this.key=e}}class VS{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ye(),this.mutatedKeys=ye(),this.ya=R_(e),this.wa=new Ts(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new Jd,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),v=Ya(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),O=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let D=!1;m&&v?m.data.isEqual(v.data)?P!==O&&(r.track({type:3,doc:v}),D=!0):this.va(m,v)||(r.track({type:2,doc:v}),D=!0,(l&&this.ya(v,l)>0||u&&this.ya(v,u)<0)&&(c=!0)):!m&&v?(r.track({type:0,doc:v}),D=!0):m&&!v&&(r.track({type:1,doc:m}),D=!0,(l||u)&&(c=!0)),D&&(v?(o=o.add(v),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{wa:o,Da:r,ls:c,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((f,p)=>function(v,P){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return O(v)-O(P)}(f.type,p.type)||this.ya(f.doc,p.doc)),this.Ca(r),s=s!=null&&s;const c=n&&!s?this.Fa():[],l=this.pa.size===0&&this.current&&!s?1:0,u=l!==this.ga;return this.ga=l,o.length!==0||u?{snapshot:new Ps(this.query,e.wa,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Jd,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ye(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new ay(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new oy(r))}),n}Oa(e){this.fa=e.gs,this.pa=ye();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return Ps.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Ku="SyncEngine";class NS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LS{constructor(e){this.key=e,this.Ba=!1}}class MS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Jr(c=>b_(c),Xa),this.qa=new Map,this.Qa=new Set,this.$a=new xe(ie.comparator),this.Ua=new Map,this.Ka=new Mu,this.Wa={},this.Ga=new Map,this.za=Cs.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function xS(t,e,n=!0){const r=dy(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await cy(r,e,n,!0),s}async function FS(t,e){const n=dy(t);await cy(n,e,!0,!1)}async function cy(t,e,n,r){const s=await tS(t.localStore,dn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await US(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ey(t.remoteStore,s),c}async function US(t,e,n,r,s){t.Ha=(p,m,v)=>async function(O,D,j,F){let $=D.view.ba(j);$.ls&&($=await qd(O.localStore,D.query,!1).then(({documents:b})=>D.view.ba(b,$)));const H=F&&F.targetChanges.get(D.targetId),Z=F&&F.targetMismatches.get(D.targetId)!=null,oe=D.view.applyChanges($,O.isPrimaryClient,H,Z);return ep(O,D.targetId,oe.Ma),oe.snapshot}(t,p,m,v);const i=await qd(t.localStore,e,!0),o=new VS(e,i.gs),c=o.ba(i.documents),l=no.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);ep(t,n,u.Ma);const f=new NS(e,n,o);return t.ka.set(e,f),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function BS(t,e,n){const r=de(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!Xa(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Bu(r.remoteStore,s.targetId),Bl(r,s.targetId)}).catch(xs)):(Bl(r,s.targetId),await xl(r.localStore,s.targetId,!0))}async function $S(t,e){const n=de(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bu(n.remoteStore,r.targetId))}async function jS(t,e,n){const r=QS(t);try{const s=await function(o,c){const l=de(o),u=Ge.now(),f=c.reduce((v,P)=>v.add(P.key),ye());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let P=Ln(),O=ye();return l.ds.getEntries(v,f).next(D=>{P=D,P.forEach((j,F)=>{F.isValidDocument()||(O=O.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,P)).next(D=>{p=D;const j=[];for(const F of c){const $=tR(F,p.get(F.key).overlayedDocument);$!=null&&j.push(new Xr(F.key,$,y_($.value.mapValue),Pn.exists(!0)))}return l.mutationQueue.addMutationBatch(v,u,j,c)}).next(D=>{m=D;const j=D.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(v,D.batchId,j)})}).then(()=>({batchId:m.batchId,changes:C_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Wa[o.currentUser.toKey()];u||(u=new xe(me)),u=u.insert(c,l),o.Wa[o.currentUser.toKey()]=u}(r,s.batchId,n),await so(r,s.changes),await sc(r.remoteStore)}catch(s){const i=Wu(s,"Failed to persist write");n.reject(i)}}async function ly(t,e){const n=de(t);try{const r=await YR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ua.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Se(o.Ba):s.removedDocuments.size>0&&(Se(o.Ba),o.Ba=!1))}),await so(n,r,e)}catch(r){await xs(r)}}function Zd(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const c=o.view.sa(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=de(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const m of p.ta)m.sa(c)&&(u=!0)}),u&&zu(l)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HS(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ua.get(e),i=s&&s.key;if(i){let o=new xe(ie.comparator);o=o.insert(i,mt.newNoDocument(i,he.min()));const c=ye().add(i),l=new tc(he.min(),new Map,new xe(me),o,c);await ly(r,l),r.$a=r.$a.remove(i),r.Ua.delete(e),Gu(r)}else await xl(r.localStore,e,!1).then(()=>Bl(r,e,n)).catch(xs)}async function qS(t,e){const n=de(t),r=e.batch.batchId;try{const s=await XR(n.localStore,e);hy(n,r,null),uy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await so(n,s)}catch(s){await xs(s)}}async function WS(t,e,n){const r=de(t);try{const s=await function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Se(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);hy(r,e,n),uy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await so(r,s)}catch(s){await xs(s)}}function uy(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function hy(t,e,n){const r=de(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function Bl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||fy(t,r)})}function fy(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Bu(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),Gu(t))}function ep(t,e,n){for(const r of n)r instanceof oy?(t.Ka.addReference(r.key,e),zS(t,r)):r instanceof ay?(X(Ku,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||fy(t,r.key)):ue()}function zS(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(X(Ku,"New document in limbo: "+n),t.Qa.add(r),Gu(t))}function Gu(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new ie(Ue.fromString(e)),r=t.za.next();t.Ua.set(r,new LS(n)),t.$a=t.$a.insert(n,r),ey(t.remoteStore,new rr(dn(Ou(n.path)),r,"TargetPurposeLimboResolution",Ka.ae))}}async function so(t,e,n){const r=de(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((c,l)=>{o.push(r.Ha(l,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Fu.Yi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.La.p_(s),await async function(l,u){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(u,m=>M.forEach(m.Hi,v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>M.forEach(m.Ji,v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!Fs(p))throw p;X(Uu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const v=f.Ts.get(m),P=v.snapshotVersion,O=v.withLastLimboFreeSnapshotVersion(P);f.Ts=f.Ts.insert(m,O)}}}(r.localStore,i))}async function KS(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){X(Ku,"User change. New user:",e.toKey());const r=await J_(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(c=>{c.forEach(l=>{l.reject(new se(B.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await so(n,r.Rs)}}function GS(t,e){const n=de(t),r=n.Ua.get(e);if(r&&r.Ba)return ye().add(r.key);{let s=ye();const i=n.qa.get(e);if(!i)return s;for(const o of i){const c=n.ka.get(o);s=s.unionWith(c.view.Sa)}return s}}function dy(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ly.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HS.bind(null,e),e.La.p_=kS.bind(null,e.eventManager),e.La.Ja=OS.bind(null,e.eventManager),e}function QS(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WS.bind(null,e),e}class Ia{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return JR(this.persistence,new KR,e.initialUser,this.serializer)}Xa(e){return new Q_(xu.ri,this.serializer)}Za(e){return new rS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ia.provider={build:()=>new Ia};class JS extends Ia{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Se(this.persistence.referenceDelegate instanceof Ea);const r=this.persistence.referenceDelegate.garbageCollector;return new DR(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new Q_(r=>Ea.ri(r,n),this.serializer)}}class $l{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KS.bind(null,this.syncEngine),await bS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SS}()}createDatastore(e){const n=nc(e.databaseInfo.databaseId),r=function(i){return new cS(i)}(e.databaseInfo);return function(i,o,c,l){return new fS(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new pS(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Zd(this.syncEngine,n,0),function(){return Kd.D()?new Kd:new sS}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const p=new MS(s,i,o,c,l,u);return f&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);X(zr,"RemoteStore shutting down."),i.W_.add(5),await ro(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}$l.provider={build:()=>new $l};/**
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
 */class XS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const yr="FirestoreClient";class YS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=c_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(yr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(yr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress(),X(yr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await J_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZS(t);X(yr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Qd(e.remoteStore,s)),t._onlineComponents=e}async function ZS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(yr,"Using user provided OfflineComponentProvider");try{await Kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;As("Error using user provided cache. Falling back to memory cache: "+n),await Kc(t,new Ia)}}else X(yr,"Using default OfflineComponentProvider"),await Kc(t,new JS(void 0));return t._offlineComponents}async function py(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(yr,"Using user provided OnlineComponentProvider"),await tp(t,t._uninitializedComponentsProvider._online)):(X(yr,"Using default OnlineComponentProvider"),await tp(t,new $l))),t._onlineComponents}function eC(t){return py(t).then(e=>e.syncEngine)}async function tC(t){const e=await py(t),n=e.eventManager;return n.onListen=xS.bind(null,e.syncEngine),n.onUnlisten=BS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=FS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$S.bind(null,e.syncEngine),n}function nC(t,e,n={}){const r=new ur;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new XS({next:m=>{f.su(),o.enqueueAndForget(()=>PS(i,p));const v=m.docs.has(c);!v&&m.fromCache?u.reject(new se(B.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?u.reject(new se(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new DS(Ou(c.path),f,{includeMetadataChanges:!0,Ta:!0});return CS(i,p)}(await tC(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function my(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const np=new Map;/**
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
 */function rC(t,e,n){if(!n)throw new se(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sC(t,e,n,r){if(e===!0&&r===!0)throw new se(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rp(t){if(!ie.isDocumentKey(t))throw new se(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Fi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qu(t);throw new se(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const gy="firestore.googleapis.com",sp=!0;class ip{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gy,this.ssl=sp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:sp;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=G_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kR)throw new se(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=my((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new se(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new se(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new se(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ju{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ip({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ip(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new o0;switch(r.type){case"firstParty":return new u0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=np.get(n);r&&(X("ComponentProvider","Removing Datastore"),np.delete(n),r.terminate())}(this),Promise.resolve()}}function iC(t,e,n,r={}){var s;const i=(t=Fi(t,Ju))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i.host!==gy&&i.host!==c&&As("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!jr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=ft.MOCK_USER;else{u=II(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new se(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ft(p)}t._authCredentials=new a0(new o_(u,f))}}/**
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
 */class Xu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xu(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Ui extends Xu{constructor(e,n,r){super(e,n,Ou(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new ie(e))}withConverter(e){return new Ui(this.firestore,e,this._path)}}function Gc(t,e,...n){if(t=jt(t),arguments.length===1&&(e=c_.newId()),rC("doc","path",e),t instanceof Ju){const r=Ue.fromString(e,...n);return rp(r),new Bt(t,null,new ie(r))}{if(!(t instanceof Bt||t instanceof Ui))throw new se(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return rp(r),new Bt(t.firestore,t instanceof Ui?t.converter:null,new ie(r))}}/**
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
 */const op="AsyncQueue";class ap{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Y_(this,"async_queue_retry"),this.Su=()=>{const r=zc();r&&X(op,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=zc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new ur;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Fs(e))throw e;X(op,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Nn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=qu.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&ue()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Yu extends Ju{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ap,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ap(e),this._firestoreClient=void 0,await e}}}function Qc(t,e){const n=_g(),r=da,s=mu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=EI("firestore");i&&iC(s,...i)}return s}function _y(t){if(t._terminated)throw new se(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||oC(t),t._firestoreClient}function oC(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,f){return new b0(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,my(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new YS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ks(ot.fromBase64String(e))}catch(n){throw new se(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ks(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Zu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yy{constructor(e){this._methodName=e}}/**
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
 */class eh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */class th{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const aC=/^__.*__$/;class cC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new to(e,this.data,n,this.fieldTransforms)}}function vy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class nh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new nh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return wa(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(vy(this.Lu)&&aC.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class lC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nc(e)}ju(e,n,r,s=!1){return new nh({Lu:e,methodName:n,zu:r,path:it.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uC(t){const e=t._freezeSettings(),n=nc(t._databaseId);return new lC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hC(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);wy("Data must be an object, but it was:",o,r);const c=Ty(r,o);let l,u;if(i.merge)l=new Kt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=fC(e,p,n);if(!o.contains(m))throw new se(B.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);pC(f,m)||f.push(m)}l=new Kt(f),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new cC(new Ft(c),l,u)}function Ey(t,e){if(Iy(t=jt(t)))return wy("Unsupported field value:",e,t),Ty(t,e);if(t instanceof yy)return function(r,s){if(!vy(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Ey(c,s.Ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=jt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Q0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:va(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:va(s.serializer,i)}}if(r instanceof eh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ks)return{bytesValue:$_(s.serializer,r._byteString)};if(r instanceof Bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof th)return function(o,c){return{mapValue:{fields:{[g_]:{stringValue:__},[pa]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Wu("VectorValues must only contain numeric values.");return Du(c.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Qu(r)}`)}(t,e)}function Ty(t,e){const n={};return u_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,(r,s)=>{const i=Ey(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Iy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof eh||t instanceof ks||t instanceof Bt||t instanceof yy||t instanceof th)}function wy(t,e,n){if(!Iy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Qu(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function fC(t,e,n){if((e=jt(e))instanceof Zu)return e._internalPath;if(typeof e=="string")return Ay(t,e);throw wa("Field path arguments must be of type string or ",t,!1,void 0,n)}const dC=new RegExp("[~\\*/\\[\\]]");function Ay(t,e,n){if(e.search(dC)>=0)throw wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zu(...e.split("."))._internalPath}catch{throw wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new se(B.INVALID_ARGUMENT,c+t+l)}function pC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class by{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ry("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mC extends by{data(){return super.data()}}function Ry(t,e){return typeof e=="string"?Ay(t,e):e instanceof Zu?e._internalPath:e._delegate._internalPath}class gC{convertValue(e,n="none"){switch(gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[pa].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>je(o.doubleValue));return new th(i)}convertGeoPoint(e){return new eh(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vi(e));default:return null}}convertTimestamp(e){const n=pr(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);Se(K_(r));const s=new Ni(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||Nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function _C(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class yC{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sy extends by{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vC(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ry("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class vC extends Sy{data(e={}){return super.data(e)}}/**
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
 */function EC(t){t=Fi(t,Bt);const e=Fi(t.firestore,Yu);return nC(_y(e),t._key).then(n=>wC(e,t,n))}class TC extends gC{constructor(e){super(),this.firestore=e}convertBytes(e){return new ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function cp(t,e,n){t=Fi(t,Bt);const r=Fi(t.firestore,Yu),s=_C(t.converter,e,n);return IC(r,[hC(uC(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Pn.none())])}function IC(t,e){return function(r,s){const i=new ur;return r.asyncQueue.enqueueAndForget(async()=>jS(await eC(r),s,i)),i.promise}(_y(t),e)}function wC(t,e,n){const r=n.docs.get(e._key),s=new TC(t);return new Sy(t,s,e._key,r,new yC(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ms=s})(Vs),ws(new Hr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Yu(new c0(r.getProvider("auth-internal")),new h0(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new se(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),cr(pd,md,e),cr(pd,md,"esm2017")})();const Cy=uI("auth",{state:()=>({user:null,loading:!1,error:null}),getters:{isAuthenticated:t=>!!t.user,userRole:t=>{var e;return(e=t.user)==null?void 0:e.role},isVerified:t=>{var e;return(e=t.user)==null?void 0:e.verificationStatus}},actions:{async login(t,e){this.loading=!0,this.error=null;try{const n=Hc(),r=await WA(n,t,e),s=await EC(Gc(Qc(),"users",r.user.uid));s.exists()&&(this.user={uid:r.user.uid,email:r.user.email,...s.data()})}catch(n){throw this.error=n.message,n}finally{this.loading=!1}},async register(t,e,n,r){this.loading=!0,this.error=null;try{const s=Hc(),i=await qA(s,t,e),o={uid:i.user.uid,email:t,name:n,role:r,verificationStatus:!1,createdAt:new Date};await cp(Gc(Qc(),"users",i.user.uid),o),this.user=o}catch(s){throw this.error=s.message,s}finally{this.loading=!1}},async logout(){this.loading=!0;try{const t=Hc();await GA(t),this.user=null}catch(t){throw this.error=t.message,t}finally{this.loading=!1}},async updateProfile(t){if(this.user)try{await cp(Gc(Qc(),"users",this.user.uid),{...t},{merge:!0}),this.user={...this.user,...t}}catch(e){throw this.error=e.message,e}}}}),AC=nn({__name:"MobileNav",setup(t){const e=Cy(),n=[{path:"/search",label:"검색",icon:"bi bi-search"},{path:"/events",label:"이벤트 관리",icon:"bi bi-calendar-event"},{path:"/spaces",label:"매장 관리",icon:"bi bi-shop"},{path:"/community",label:"커뮤니티",icon:"bi bi-people"},{path:"/profile",label:"프로필",icon:"bi bi-person"}],r=[{path:"/search",label:"검색",icon:"bi bi-search"},{path:"/events",label:"이벤트 관리",icon:"bi bi-calendar-event"},{path:"/portfolio",label:"작품 관리",icon:"bi bi-collection"},{path:"/community",label:"커뮤니티",icon:"bi bi-people"},{path:"/profile",label:"프로필",icon:"bi bi-person"}],s=[{path:"/search",label:"검색",icon:"bi bi-search"},{path:"/wishlist",label:"위시리스트",icon:"bi bi-heart"},{path:"/bookings",label:"예약 확인",icon:"bi bi-ticket"},{path:"/community",label:"커뮤니티",icon:"bi bi-people"},{path:"/profile",label:"프로필",icon:"bi bi-person"}],i=st(()=>{switch(e.userRole){case"host":return n;case"artist":return r;case"consumer":return s;default:return[]}}),o=st(()=>{switch(e.userRole){case"host":return"host-theme";case"artist":return"artist-theme";case"consumer":return"consumer-theme";default:return""}});return(c,l)=>{const u=xr("router-link");return Pe(),It("nav",{class:Xt(["mobile-nav",o.value])},[(Pe(!0),It(Ye,null,al(i.value,f=>(Pe(),bt(u,{key:f.path,to:f.path,class:"nav-item"},{default:hr(()=>[Zt("i",{class:Xt(f.icon)},null,2),Zt("span",null,ka(f.label),1)]),_:2},1032,["to"]))),128))],2)}}}),Py=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},bC=Py(AC,[["__scopeId","data-v-83f66418"]]);function RC(t){return Xl()?(qp(t),!0):!1}const Jc=new WeakMap,SC=(...t)=>{var e;const n=t[0],r=(e=Gi())==null?void 0:e.proxy;if(r==null&&!cu())throw new Error("injectLocal must be called in setup");return r&&Jc.has(r)&&n in Jc.get(r)?Jc.get(r)[n]:Jt(...t)},CC=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const PC=Object.prototype.toString,kC=t=>PC.call(t)==="[object Object]";function lp(t){return t.endsWith("rem")?Number.parseFloat(t)*16:Number.parseFloat(t)}function Xc(t){return Array.isArray(t)?t:[t]}function OC(t){return Gi()}function DC(t,e=!0,n){OC()?Ki(t,n):e?t():zi(t)}function VC(t,e,n){return Ur(t,e,{...n,immediate:!0})}const rh=CC?window:void 0;function NC(t){var e;const n=ms(t);return(e=n==null?void 0:n.$el)!=null?e:n}function jl(...t){const e=[],n=()=>{e.forEach(c=>c()),e.length=0},r=(c,l,u,f)=>(c.addEventListener(l,u,f),()=>c.removeEventListener(l,u,f)),s=st(()=>{const c=Xc(ms(t[0])).filter(l=>l!=null);return c.every(l=>typeof l!="string")?c:void 0}),i=VC(()=>{var c,l;return[(l=(c=s.value)==null?void 0:c.map(u=>NC(u)))!=null?l:[rh].filter(u=>u!=null),Xc(ms(s.value?t[1]:t[0])),Xc(Sn(s.value?t[2]:t[1])),ms(s.value?t[3]:t[2])]},([c,l,u,f])=>{if(n(),!(c!=null&&c.length)||!(l!=null&&l.length)||!(u!=null&&u.length))return;const p=kC(f)?{...f}:f;e.push(...c.flatMap(m=>l.flatMap(v=>u.map(P=>r(m,v,P,p)))))},{flush:"post"}),o=()=>{i(),n()};return RC(n),o}function LC(){const t=Mr(!1),e=Gi();return e&&Ki(()=>{t.value=!0},e),t}function MC(t){const e=LC();return st(()=>(e.value,!!t()))}const xC=Symbol("vueuse-ssr-width");function FC(){const t=cu()?SC(xC,null):null;return typeof t=="number"?t:void 0}function UC(t,e={}){const{window:n=rh,ssrWidth:r=FC()}=e,s=MC(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function"),i=Mr(typeof r=="number"),o=Mr(),c=Mr(!1),l=u=>{c.value=u.matches};return ZE(()=>{if(i.value){i.value=!s.value;const u=ms(t).split(",");c.value=u.some(f=>{const p=f.includes("not all"),m=f.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),v=f.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let P=!!(m||v);return m&&P&&(P=r>=lp(m[1])),v&&P&&(P=r<=lp(v[1])),p?!P:P});return}s.value&&(o.value=n.matchMedia(ms(t)),c.value=o.value.matches)}),jl(o,"change",l,{passive:!0}),st(()=>c.value)}function BC(t={}){const{window:e=rh,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:r=Number.POSITIVE_INFINITY,listenOrientation:s=!0,includeScrollbar:i=!0,type:o="inner"}=t,c=Mr(n),l=Mr(r),u=()=>{if(e)if(o==="outer")c.value=e.outerWidth,l.value=e.outerHeight;else if(o==="visual"&&e.visualViewport){const{width:p,height:m,scale:v}=e.visualViewport;c.value=Math.round(p*v),l.value=Math.round(m*v)}else i?(c.value=e.innerWidth,l.value=e.innerHeight):(c.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight)};u(),DC(u);const f={passive:!0};if(jl("resize",u,f),e&&o==="visual"&&e.visualViewport&&jl(e.visualViewport,"resize",u,f),s){const p=UC("(orientation: portrait)");Ur(p,()=>u())}return{width:c,height:l}}const $C={class:"app-container"},jC={key:0,class:"background-area"},HC=nn({__name:"App",setup(t){const{width:e}=BC(),n=Da(!1);return Ki(()=>{n.value=e.value<=768}),(r,s)=>{const i=xr("router-view");return Pe(),It("div",$C,[n.value?di("",!0):(Pe(),It("div",jC,s[0]||(s[0]=[Zt("img",{src:hI,alt:"Background",class:"background-image"},null,-1)]))),Zt("div",{class:Xt(["main-content",{"mobile-view":n.value}])},[Ke(i,null,{default:hr(({Component:o})=>[Ke(bT,{name:"fade",mode:"out-in"},{default:hr(()=>[(Pe(),bt(Ma(o)))]),_:2},1024)]),_:1})],2),n.value?(Pe(),bt(bC,{key:1})):di("",!0)])}}}),qC=Py(HC,[["__scopeId","data-v-c1ede1af"]]),WC="modulepreload",zC=function(t){return"/"+t},up={},Mt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(u=>{if(u=zC(u),u in up)return;up[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":WC,f||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),f)return new Promise((v,P)=>{m.addEventListener("load",v),m.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const hs=typeof document<"u";function ky(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function KC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ky(t.default)}const be=Object.assign;function Yc(t,e){const n={};for(const r in e){const s=e[r];n[r]=tn(s)?s.map(t):t(s)}return n}const Ei=()=>{},tn=Array.isArray,Oy=/#/g,GC=/&/g,QC=/\//g,JC=/=/g,XC=/\?/g,Dy=/\+/g,YC=/%5B/g,ZC=/%5D/g,Vy=/%5E/g,eP=/%60/g,Ny=/%7B/g,tP=/%7C/g,Ly=/%7D/g,nP=/%20/g;function sh(t){return encodeURI(""+t).replace(tP,"|").replace(YC,"[").replace(ZC,"]")}function rP(t){return sh(t).replace(Ny,"{").replace(Ly,"}").replace(Vy,"^")}function Hl(t){return sh(t).replace(Dy,"%2B").replace(nP,"+").replace(Oy,"%23").replace(GC,"%26").replace(eP,"`").replace(Ny,"{").replace(Ly,"}").replace(Vy,"^")}function sP(t){return Hl(t).replace(JC,"%3D")}function iP(t){return sh(t).replace(Oy,"%23").replace(XC,"%3F")}function oP(t){return t==null?"":iP(t).replace(QC,"%2F")}function Bi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const aP=/\/$/,cP=t=>t.replace(aP,"");function Zc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=fP(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Bi(o)}}function lP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Os(e.matched[r],n.matched[s])&&My(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Os(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function My(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hP(t[n],e[n]))return!1;return!0}function hP(t,e){return tn(t)?fp(t,e):tn(e)?fp(e,t):t===e}function fp(t,e){return tn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function fP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var $i;(function(t){t.pop="pop",t.push="push"})($i||($i={}));var Ti;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ti||(Ti={}));function dP(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cP(t)}const pP=/^[^#]+#/;function mP(t,e){return t.replace(pP,"#")+e}function gP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ic=()=>({left:window.scrollX,top:window.scrollY});function _P(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=gP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function dp(t,e){return(history.state?history.state.position-e:-1)+t}const ql=new Map;function yP(t,e){ql.set(t,e)}function vP(t){const e=ql.get(t);return ql.delete(t),e}let EP=()=>location.protocol+"//"+location.host;function xy(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),hp(l,"")}return hp(n,t)+r+s}function TP(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const v=xy(t,location),P=n.value,O=e.value;let D=0;if(m){if(n.value=v,e.value=m,o&&o===P){o=null;return}D=O?m.position-O.position:0}else r(v);s.forEach(j=>{j(n.value,P,{delta:D,type:$i.pop,direction:D?D>0?Ti.forward:Ti.back:Ti.unknown})})};function l(){o=n.value}function u(m){s.push(m);const v=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(v),v}function f(){const{history:m}=window;m.state&&m.replaceState(be({},m.state,{scroll:ic()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function pp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ic():null}}function IP(t){const{history:e,location:n}=window,r={value:xy(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:EP()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(v){console.error(v),n[f?"replace":"assign"](m)}}function o(l,u){const f=be({},e.state,pp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=be({},s.value,e.state,{forward:l,scroll:ic()});i(f.current,f,!0);const p=be({},pp(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function wP(t){t=dP(t);const e=IP(t),n=TP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:mP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function AP(t){return typeof t=="string"||t&&typeof t=="object"}function Fy(t){return typeof t=="string"||typeof t=="symbol"}const Uy=Symbol("");var mp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mp||(mp={}));function Ds(t,e){return be(new Error,{type:t,[Uy]:!0},e)}function Tn(t,e){return t instanceof Error&&Uy in t&&(e==null||!!(t.type&e))}const gp="[^/]+?",bP={sensitive:!1,strict:!1,start:!0,end:!0},RP=/[.+*?^${}()[\]/\\]/g;function SP(t,e){const n=be({},bP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let v=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(RP,"\\$&"),v+=40;else if(m.type===1){const{value:P,repeatable:O,optional:D,regexp:j}=m;i.push({name:P,repeatable:O,optional:D});const F=j||gp;if(F!==gp){v+=10;try{new RegExp(`(${F})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${P}" (${F}): `+H.message)}}let $=O?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||($=D&&u.length<2?`(?:/${$})`:"/"+$),D&&($+="?"),s+=$,v+=20,D&&(v+=-8),O&&(v+=-20),F===".*"&&(v+=-50)}f.push(v)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const v=f[m]||"",P=i[m-1];p[P.name]=v&&P.repeatable?v.split("/"):v}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of m)if(v.type===0)f+=v.value;else if(v.type===1){const{value:P,repeatable:O,optional:D}=v,j=P in u?u[P]:"";if(tn(j)&&!O)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const F=tn(j)?j.join("/"):j;if(!F)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);f+=F}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function CP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function By(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=CP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(_p(r))return 1;if(_p(s))return-1}return s.length-r.length}function _p(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const PP={type:0,value:""},kP=/[a-zA-Z0-9_]/;function OP(t){if(!t)return[[]];if(t==="/")return[[PP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:kP.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function DP(t,e,n){const r=SP(OP(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function VP(t,e){const n=[],r=new Map;e=Tp({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,v){const P=!v,O=vp(p);O.aliasOf=v&&v.record;const D=Tp(e,p),j=[O];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of H)j.push(vp(be({},O,{components:v?v.record.components:O.components,path:Z,aliasOf:v?v.record:O})))}let F,$;for(const H of j){const{path:Z}=H;if(m&&Z[0]!=="/"){const oe=m.record.path,b=oe[oe.length-1]==="/"?"":"/";H.path=m.record.path+(Z&&b+Z)}if(F=DP(H,m,D),v?v.alias.push(F):($=$||F,$!==F&&$.alias.push(F),P&&p.name&&!Ep(F)&&o(p.name)),$y(F)&&l(F),O.children){const oe=O.children;for(let b=0;b<oe.length;b++)i(oe[b],F,v&&v.children[b])}v=v||F}return $?()=>{o($)}:Ei}function o(p){if(Fy(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=MP(p,n);n.splice(m,0,p),p.record.name&&!Ep(p)&&r.set(p.record.name,p)}function u(p,m){let v,P={},O,D;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw Ds(1,{location:p});D=v.record.name,P=be(yp(m.params,v.keys.filter($=>!$.optional).concat(v.parent?v.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&yp(p.params,v.keys.map($=>$.name))),O=v.stringify(P)}else if(p.path!=null)O=p.path,v=n.find($=>$.re.test(O)),v&&(P=v.parse(O),D=v.record.name);else{if(v=m.name?r.get(m.name):n.find($=>$.re.test(m.path)),!v)throw Ds(1,{location:p,currentLocation:m});D=v.record.name,P=be({},m.params,p.params),O=v.stringify(P)}const j=[];let F=v;for(;F;)j.unshift(F.record),F=F.parent;return{name:D,path:O,params:P,matched:j,meta:LP(j)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function yp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function vp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:NP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function NP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ep(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function LP(t){return t.reduce((e,n)=>be(e,n.meta),{})}function Tp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function MP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;By(t,e[i])<0?r=i:n=i+1}const s=xP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function xP(t){let e=t;for(;e=e.parent;)if($y(e)&&By(t,e)===0)return e}function $y({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function FP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Dy," "),o=i.indexOf("="),c=Bi(o<0?i:i.slice(0,o)),l=o<0?null:Bi(i.slice(o+1));if(c in e){let u=e[c];tn(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function Ip(t){let e="";for(let n in t){const r=t[n];if(n=sP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(tn(r)?r.map(i=>i&&Hl(i)):[r&&Hl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function UP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=tn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const BP=Symbol(""),wp=Symbol(""),ih=Symbol(""),jy=Symbol(""),Wl=Symbol("");function ti(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Yn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Ds(4,{from:n,to:e})):m instanceof Error?l(m):AP(m)?l(Ds(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function el(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(ky(l)){const f=(l.__vccOpts||l)[e];f&&i.push(Yn(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=KC(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const v=(p.__vccOpts||p)[e];return v&&Yn(v,n,r,o,c,s)()}))}}return i}function Ap(t){const e=Jt(ih),n=Jt(jy),r=st(()=>{const l=Sn(t.to);return e.resolve(l)}),s=st(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Os.bind(null,f));if(m>-1)return m;const v=bp(l[u-2]);return u>1&&bp(f)===v&&p[p.length-1].path!==v?p.findIndex(Os.bind(null,l[u-2])):m}),i=st(()=>s.value>-1&&WP(n.params,r.value.params)),o=st(()=>s.value>-1&&s.value===n.matched.length-1&&My(n.params,r.value.params));function c(l={}){if(qP(l)){const u=e[Sn(t.replace)?"replace":"push"](Sn(t.to)).catch(Ei);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:st(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function $P(t){return t.length===1?t[0]:t}const jP=nn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ap,setup(t,{slots:e}){const n=qi(Ap(t)),{options:r}=Jt(ih),s=st(()=>({[Rp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Rp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&$P(e.default(n));return t.custom?i:fu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),HP=jP;function qP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!tn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function bp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Rp=(t,e,n)=>t??e??n,zP=nn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Jt(Wl),s=st(()=>t.route||r.value),i=Jt(wp,0),o=st(()=>{let u=Sn(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=st(()=>s.value.matched[o.value]);Lo(wp,st(()=>o.value+1)),Lo(BP,c),Lo(Wl,s);const l=Da();return Ur(()=>[l.value,c.value,t.name],([u,f,p],[m,v,P])=>{f&&(f.instances[p]=u,v&&v!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!Os(f,v)||!m)&&(f.enterCallbacks[p]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Sp(n.default,{Component:m,route:u});const v=p.props[f],P=v?v===!0?u.params:typeof v=="function"?v(u):v:null,D=fu(m,be({},P,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Sp(n.default,{Component:D,route:u})||D}}});function Sp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const KP=zP;function GP(t){const e=VP(t.routes,t),n=t.parseQuery||FP,r=t.stringifyQuery||Ip,s=t.history,i=ti(),o=ti(),c=ti(),l=Mr(zn);let u=zn;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Yc.bind(null,V=>""+V),p=Yc.bind(null,oP),m=Yc.bind(null,Bi);function v(V,J){let G,Y;return Fy(V)?(G=e.getRecordMatcher(V),Y=J):Y=V,e.addRoute(Y,G)}function P(V){const J=e.getRecordMatcher(V);J&&e.removeRoute(J)}function O(){return e.getRoutes().map(V=>V.record)}function D(V){return!!e.getRecordMatcher(V)}function j(V,J){if(J=be({},J||l.value),typeof V=="string"){const S=Zc(n,V,J.path),N=e.resolve({path:S.path},J),x=s.createHref(S.fullPath);return be(S,N,{params:m(N.params),hash:Bi(S.hash),redirectedFrom:void 0,href:x})}let G;if(V.path!=null)G=be({},V,{path:Zc(n,V.path,J.path).path});else{const S=be({},V.params);for(const N in S)S[N]==null&&delete S[N];G=be({},V,{params:p(S)}),J.params=p(J.params)}const Y=e.resolve(G,J),Ie=V.hash||"";Y.params=f(m(Y.params));const T=lP(r,be({},V,{hash:rP(Ie),path:Y.path})),w=s.createHref(T);return be({fullPath:T,hash:Ie,query:r===Ip?UP(V.query):V.query||{}},Y,{redirectedFrom:void 0,href:w})}function F(V){return typeof V=="string"?Zc(n,V,l.value.path):be({},V)}function $(V,J){if(u!==V)return Ds(8,{from:J,to:V})}function H(V){return b(V)}function Z(V){return H(be(F(V),{replace:!0}))}function oe(V){const J=V.matched[V.matched.length-1];if(J&&J.redirect){const{redirect:G}=J;let Y=typeof G=="function"?G(V):G;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=F(Y):{path:Y},Y.params={}),be({query:V.query,hash:V.hash,params:Y.path!=null?{}:V.params},Y)}}function b(V,J){const G=u=j(V),Y=l.value,Ie=V.state,T=V.force,w=V.replace===!0,S=oe(G);if(S)return b(be(F(S),{state:typeof S=="object"?be({},Ie,S.state):Ie,force:T,replace:w}),J||G);const N=G;N.redirectedFrom=J;let x;return!T&&uP(r,Y,G)&&(x=Ds(16,{to:N,from:Y}),Dt(Y,Y,!0,!1)),(x?Promise.resolve(x):I(N,Y)).catch(L=>Tn(L)?Tn(L,2)?L:Ht(L):ge(L,N,Y)).then(L=>{if(L){if(Tn(L,2))return b(be({replace:w},F(L.to),{state:typeof L.to=="object"?be({},Ie,L.to.state):Ie,force:T}),J||N)}else L=A(N,Y,!0,w,Ie);return R(N,Y,L),L})}function y(V,J){const G=$(V,J);return G?Promise.reject(G):Promise.resolve()}function _(V){const J=Un.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(V):V()}function I(V,J){let G;const[Y,Ie,T]=QP(V,J);G=el(Y.reverse(),"beforeRouteLeave",V,J);for(const S of Y)S.leaveGuards.forEach(N=>{G.push(Yn(N,V,J))});const w=y.bind(null,V,J);return G.push(w),wt(G).then(()=>{G=[];for(const S of i.list())G.push(Yn(S,V,J));return G.push(w),wt(G)}).then(()=>{G=el(Ie,"beforeRouteUpdate",V,J);for(const S of Ie)S.updateGuards.forEach(N=>{G.push(Yn(N,V,J))});return G.push(w),wt(G)}).then(()=>{G=[];for(const S of T)if(S.beforeEnter)if(tn(S.beforeEnter))for(const N of S.beforeEnter)G.push(Yn(N,V,J));else G.push(Yn(S.beforeEnter,V,J));return G.push(w),wt(G)}).then(()=>(V.matched.forEach(S=>S.enterCallbacks={}),G=el(T,"beforeRouteEnter",V,J,_),G.push(w),wt(G))).then(()=>{G=[];for(const S of o.list())G.push(Yn(S,V,J));return G.push(w),wt(G)}).catch(S=>Tn(S,8)?S:Promise.reject(S))}function R(V,J,G){c.list().forEach(Y=>_(()=>Y(V,J,G)))}function A(V,J,G,Y,Ie){const T=$(V,J);if(T)return T;const w=J===zn,S=hs?history.state:{};G&&(Y||w?s.replace(V.fullPath,be({scroll:w&&S&&S.scroll},Ie)):s.push(V.fullPath,Ie)),l.value=V,Dt(V,J,G,w),Ht()}let E;function Ae(){E||(E=s.listen((V,J,G)=>{if(!rn.listening)return;const Y=j(V),Ie=oe(Y);if(Ie){b(be(Ie,{replace:!0,force:!0}),Y).catch(Ei);return}u=Y;const T=l.value;hs&&yP(dp(T.fullPath,G.delta),ic()),I(Y,T).catch(w=>Tn(w,12)?w:Tn(w,2)?(b(be(F(w.to),{force:!0}),Y).then(S=>{Tn(S,20)&&!G.delta&&G.type===$i.pop&&s.go(-1,!1)}).catch(Ei),Promise.reject()):(G.delta&&s.go(-G.delta,!1),ge(w,Y,T))).then(w=>{w=w||A(Y,T,!1),w&&(G.delta&&!Tn(w,8)?s.go(-G.delta,!1):G.type===$i.pop&&Tn(w,20)&&s.go(-1,!1)),R(Y,T,w)}).catch(Ei)}))}let $e=ti(),Ce=ti(),le;function ge(V,J,G){Ht(V);const Y=Ce.list();return Y.length?Y.forEach(Ie=>Ie(V,J,G)):console.error(V),Promise.reject(V)}function Rt(){return le&&l.value!==zn?Promise.resolve():new Promise((V,J)=>{$e.add([V,J])})}function Ht(V){return le||(le=!V,Ae(),$e.list().forEach(([J,G])=>V?G(V):J()),$e.reset()),V}function Dt(V,J,G,Y){const{scrollBehavior:Ie}=t;if(!hs||!Ie)return Promise.resolve();const T=!G&&vP(dp(V.fullPath,0))||(Y||!G)&&history.state&&history.state.scroll||null;return zi().then(()=>Ie(V,J,T)).then(w=>w&&_P(w)).catch(w=>ge(w,V,J))}const Le=V=>s.go(V);let Me;const Un=new Set,rn={currentRoute:l,listening:!0,addRoute:v,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:O,resolve:j,options:t,push:H,replace:Z,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Ce.add,isReady:Rt,install(V){const J=this;V.component("RouterLink",HP),V.component("RouterView",KP),V.config.globalProperties.$router=J,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Sn(l)}),hs&&!Me&&l.value===zn&&(Me=!0,H(s.location).catch(Ie=>{}));const G={};for(const Ie in zn)Object.defineProperty(G,Ie,{get:()=>l.value[Ie],enumerable:!0});V.provide(ih,J),V.provide(jy,im(G)),V.provide(Wl,l);const Y=V.unmount;Un.add(V),V.unmount=function(){Un.delete(V),Un.size<1&&(u=zn,E&&E(),E=null,l.value=zn,Me=!1,le=!1),Y()}}};function wt(V){return V.reduce((J,G)=>J.then(()=>_(G)),Promise.resolve())}return rn}function QP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Os(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Os(u,l))||s.push(l))}return[n,r,s]}const Hy=GP({history:wP(),routes:[{path:"/",name:"home",component:()=>Mt(()=>import("./HomeView-BaBPNx75.js"),__vite__mapDeps([0,1]))},{path:"/login",name:"login",component:()=>Mt(()=>import("./LoginView-DUGoO6xh.js"),[]),meta:{requiresGuest:!0}},{path:"/register",name:"register",component:()=>Mt(()=>import("./RegisterView-DUGoO6xh.js"),[]),meta:{requiresGuest:!0}},{path:"/search",name:"search",component:()=>Mt(()=>import("./SearchView-CLOo4OAl.js"),[]),meta:{requiresAuth:!0}},{path:"/events",name:"events",component:()=>Mt(()=>import("./EventsView-C4izzZxH.js"),[]),meta:{requiresAuth:!0}},{path:"/spaces",name:"spaces",component:()=>Mt(()=>import("./SpacesView-kgkWgUx3.js"),[]),meta:{requiresAuth:!0,allowedRoles:["host"]}},{path:"/portfolio",name:"portfolio",component:()=>Mt(()=>import("./PortfolioView-Ce68UB8s.js"),[]),meta:{requiresAuth:!0,allowedRoles:["artist"]}},{path:"/wishlist",name:"wishlist",component:()=>Mt(()=>import("./WishlistView-N4t2XGgx.js"),[]),meta:{requiresAuth:!0,allowedRoles:["consumer"]}},{path:"/bookings",name:"bookings",component:()=>Mt(()=>import("./BookingsView-Cbz8fCwD.js"),[]),meta:{requiresAuth:!0,allowedRoles:["consumer"]}},{path:"/community",name:"community",component:()=>Mt(()=>import("./CommunityView-CtwapE8J.js"),[]),meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:()=>Mt(()=>import("./ProfileView-wNjvUVWG.js"),[]),meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>Mt(()=>import("./NotFoundView-CvVOMrFN.js"),[])}]});Hy.beforeEach((t,e,n)=>{const r=Cy(),s=t.matched.some(c=>c.meta.requiresAuth),i=t.matched.some(c=>c.meta.requiresGuest),o=t.meta.allowedRoles;s&&!r.isAuthenticated?n({name:"login",query:{redirect:t.fullPath}}):i&&r.isAuthenticated?n({name:"home"}):o&&!o.includes(r.userRole||"")?n({name:"home"}):n()});var JP="firebase",XP="11.6.0";/**
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
 */cr(JP,XP,"app");var YP=Object.defineProperty,Cp=Object.getOwnPropertySymbols,ZP=Object.prototype.hasOwnProperty,ek=Object.prototype.propertyIsEnumerable,Pp=(t,e,n)=>e in t?YP(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,qy=(t,e)=>{for(var n in e||(e={}))ZP.call(e,n)&&Pp(t,n,e[n]);if(Cp)for(var n of Cp(e))ek.call(e,n)&&Pp(t,n,e[n]);return t},oc=t=>typeof t=="function",ac=t=>typeof t=="string",Wy=t=>ac(t)&&t.trim().length>0,tk=t=>typeof t=="number",Nr=t=>typeof t>"u",ji=t=>typeof t=="object"&&t!==null,nk=t=>mn(t,"tag")&&Wy(t.tag),zy=t=>window.TouchEvent&&t instanceof TouchEvent,Ky=t=>mn(t,"component")&&Gy(t.component),rk=t=>oc(t)||ji(t),Gy=t=>!Nr(t)&&(ac(t)||rk(t)||Ky(t)),kp=t=>ji(t)&&["height","width","right","left","top","bottom"].every(e=>tk(t[e])),mn=(t,e)=>(ji(t)||oc(t))&&e in t,sk=(t=>()=>t++)(0);function tl(t){return zy(t)?t.targetTouches[0].clientX:t.clientX}function Op(t){return zy(t)?t.targetTouches[0].clientY:t.clientY}var ik=t=>{Nr(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},io=t=>Ky(t)?io(t.component):nk(t)?nn({render(){return t}}):typeof t=="string"?t:ve(Sn(t)),ok=t=>{if(typeof t=="string")return t;const e=mn(t,"props")&&ji(t.props)?t.props:{},n=mn(t,"listeners")&&ji(t.listeners)?t.listeners:{};return{component:io(t),props:e,listeners:n}},ak=()=>typeof window<"u",oh=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(r=>r(e))}},ck=t=>["on","off","emit"].every(e=>mn(t,e)&&oc(t[e])),Pt;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(Pt||(Pt={}));var Aa;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(Aa||(Aa={}));var kt;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(kt||(kt={}));var Gt="Vue-Toastification",Wt={type:{type:String,default:Pt.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},Qy={type:Wt.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},Qo={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:Wt.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},zl={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},Jy={transition:{type:[Object,String],default:`${Gt}__bounce`}},lk={position:{type:String,default:Aa.TOP_RIGHT},draggable:Wt.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:Wt.trueBoolean,pauseOnHover:Wt.trueBoolean,closeOnClick:Wt.trueBoolean,timeout:zl.timeout,hideProgressBar:zl.hideProgressBar,toastClassName:Wt.classNames,bodyClassName:Wt.classNames,icon:Qy.customIcon,closeButton:Qo.component,closeButtonClassName:Qo.classNames,showCloseButtonOnHover:Qo.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new oh}},uk={id:{type:[String,Number],required:!0,default:0},type:Wt.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},hk={container:{type:[Object,Function],default:()=>document.body},newestOnTop:Wt.trueBoolean,maxToasts:{type:Number,default:20},transition:Jy.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:Wt.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},kn={CORE_TOAST:lk,TOAST:uk,CONTAINER:hk,PROGRESS_BAR:zl,ICON:Qy,TRANSITION:Jy,CLOSE_BUTTON:Qo},Xy=nn({name:"VtProgressBar",props:kn.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${Gt}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function fk(t,e){return Pe(),It("div",{style:Hi(t.style),class:Xt(t.cpClass)},null,6)}Xy.render=fk;var dk=Xy,Yy=nn({name:"VtCloseButton",props:kn.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?io(this.component):"button"},classes(){const t=[`${Gt}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),pk=Ua(" × ");function mk(t,e){return Pe(),bt(Ma(t.buttonComponent),Ba({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:hr(()=>[pk]),_:1},16,["aria-label","class"])}Yy.render=mk;var gk=Yy,Zy={},_k={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},yk=Zt("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),vk=[yk];function Ek(t,e){return Pe(),It("svg",_k,vk)}Zy.render=Ek;var Tk=Zy,ev={},Ik={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wk=Zt("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),Ak=[wk];function bk(t,e){return Pe(),It("svg",Ik,Ak)}ev.render=bk;var Dp=ev,tv={},Rk={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Sk=Zt("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),Ck=[Sk];function Pk(t,e){return Pe(),It("svg",Rk,Ck)}tv.render=Pk;var kk=tv,nv={},Ok={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},Dk=Zt("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),Vk=[Dk];function Nk(t,e){return Pe(),It("svg",Ok,Vk)}nv.render=Nk;var Lk=nv,rv=nn({name:"VtIcon",props:kn.ICON,computed:{customIconChildren(){return mn(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return ac(this.customIcon)?this.trimValue(this.customIcon):mn(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return mn(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:Gy(this.customIcon)?io(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Pt.DEFAULT]:Dp,[Pt.INFO]:Dp,[Pt.SUCCESS]:Tk,[Pt.ERROR]:Lk,[Pt.WARNING]:kk}[this.type]},iconClasses(){const t=[`${Gt}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return Wy(t)?t.trim():e}}});function Mk(t,e){return Pe(),bt(Ma(t.component),{class:Xt(t.iconClasses)},{default:hr(()=>[Ua(ka(t.customIconChildren),1)]),_:1},8,["class"])}rv.render=Mk;var xk=rv,sv=nn({name:"VtToast",components:{ProgressBar:dk,CloseButton:gk,Icon:xk},inheritAttrs:!1,props:Object.assign({},kn.CORE_TOAST,kn.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${Gt}__toast`,`${Gt}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${Gt}__toast--rtl`),t},bodyClasses(){return[`${Gt}__toast-${ac(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return kp(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:mn,getVueComponentFromObj:io,closeToast(){this.eventBus.emit(kt.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:tl(t),y:Op(t)},this.dragStart=tl(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:tl(t),y:Op(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,kp(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),Fk=["role"];function Uk(t,e){const n=xr("Icon"),r=xr("CloseButton"),s=xr("ProgressBar");return Pe(),It("div",{class:Xt(t.classes),style:Hi(t.draggableStyle),onClick:e[0]||(e[0]=(...i)=>t.clickHandler&&t.clickHandler(...i)),onMouseenter:e[1]||(e[1]=(...i)=>t.hoverPause&&t.hoverPause(...i)),onMouseleave:e[2]||(e[2]=(...i)=>t.hoverPlay&&t.hoverPlay(...i))},[t.icon?(Pe(),bt(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):di("v-if",!0),Zt("div",{role:t.accessibility.toastRole||"alert",class:Xt(t.bodyClasses)},[typeof t.content=="string"?(Pe(),It(Ye,{key:0},[Ua(ka(t.content),1)],2112)):(Pe(),bt(Ma(t.getVueComponentFromObj(t.content)),Ba({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},DE(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,Fk),t.closeButton?(Pe(),bt(r,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:ZT(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):di("v-if",!0),t.timeout?(Pe(),bt(s,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):di("v-if",!0)],38)}sv.render=Uk;var Bk=sv,iv=nn({name:"VtTransition",props:kn.TRANSITION,emits:["leave"],methods:{hasProp:mn,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function $k(t,e){return Pe(),bt(WT,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:hr(()=>[OE(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}iv.render=$k;var jk=iv,ov=nn({name:"VueToastification",devtools:{hide:!0},components:{Toast:Bk,VtTransition:jk},props:Object.assign({},kn.CORE_TOAST,kn.CONTAINER,kn.TRANSITION),data(){return{count:0,positions:Object.values(Aa),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(kt.ADD,this.addToast),t.on(kt.CLEAR,this.clearToasts),t.on(kt.DISMISS,this.dismissToast),t.on(kt.UPDATE,this.updateToast),t.on(kt.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){oc(t)&&(t=await t()),ik(this.$el),t.appendChild(this.$el)},setToast(t){Nr(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=ok(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!Nr(e)&&!Nr(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){Nr(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${Gt}__container`,t].concat(this.defaults.containerClassName)}}});function Hk(t,e){const n=xr("Toast"),r=xr("VtTransition");return Pe(),It("div",null,[(Pe(!0),It(Ye,null,al(t.positions,s=>(Pe(),It("div",{key:s},[Ke(r,{transition:t.defaults.transition,class:Xt(t.getClasses(s))},{default:hr(()=>[(Pe(!0),It(Ye,null,al(t.getPositionToasts(s),i=>(Pe(),bt(n,Ba({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}ov.render=Hk;var qk=ov,Vp=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new oh;e&&zi(()=>{const i=rg(qk,qy({},t)),o=i.mount(document.createElement("div")),c=t.onMounted;if(Nr(c)||c(o,i),t.shareAppContext){const l=t.shareAppContext;l===!0?console.warn(`[${Gt}] App to share context with was not provided.`):(i._context.components=l._context.components,i._context.directives=l._context.directives,i._context.mixins=l._context.mixins,i._context.provides=l._context.provides,i.config.globalProperties=l.config.globalProperties)}});const r=(i,o)=>{const c=Object.assign({},{id:sk(),type:Pt.DEFAULT},o,{content:i});return n.emit(kt.ADD,c),c.id};r.clear=()=>n.emit(kt.CLEAR,void 0),r.updateDefaults=i=>{n.emit(kt.UPDATE_DEFAULTS,i)},r.dismiss=i=>{n.emit(kt.DISMISS,i)};function s(i,{content:o,options:c},l=!1){const u=Object.assign({},c,{content:o});n.emit(kt.UPDATE,{id:i,options:u,create:l})}return r.update=s,r.success=(i,o)=>r(i,Object.assign({},o,{type:Pt.SUCCESS})),r.info=(i,o)=>r(i,Object.assign({},o,{type:Pt.INFO})),r.error=(i,o)=>r(i,Object.assign({},o,{type:Pt.ERROR})),r.warning=(i,o)=>r(i,Object.assign({},o,{type:Pt.WARNING})),r},Wk=()=>{const t=()=>console.warn(`[${Gt}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function zk(t){return ak()?ck(t)?Vp({eventBus:t},!1):Vp(t,!0):Wk()}var Kk=Symbol("VueToastification"),Gk=new oh,Qk=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=zk(qy({eventBus:Gk},e));t.provide(Kk,n)},Jk=Qk;const Xk={apiKey:"AIzaSyDKPlCJVzXjcs8hkahk7nyI2WriTRfWSXY",authDomain:"bead-asia.firebaseapp.com",projectId:"bead-asia",storageBucket:"bead-asia.firebasestorage.app",messagingSenderId:"597698103699",appId:"1:597698103699:web:25a9c20003cdc810b50066"};gg(Xk);const cc=rg(qC);cc.use(sI());cc.use(Hy);cc.use(Jk,{position:"top-right",timeout:3e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1});cc.mount("#app");export{Zn as F,er as G,$o as O,Py as _,Zk as a,Zt as b,It as c,nn as d,qA as e,Ki as f,Hc as g,Am as h,gg as i,st as j,Ke as k,bt as l,di as m,ZT as n,Pe as o,Da as r,ka as t,eO as v,Yk as w};
//# sourceMappingURL=index-BnKPWPsH.js.map
