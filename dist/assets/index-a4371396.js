(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Wr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const J={},wt=[],Ce=()=>{},so=()=>!1,oo=/^on[^a-z]/,Wn=e=>oo.test(e),Yr=e=>e.startsWith("onUpdate:"),ie=Object.assign,Kr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},lo=Object.prototype.hasOwnProperty,$=(e,t)=>lo.call(e,t),R=Array.isArray,kt=e=>Yn(e)==="[object Map]",Li=e=>Yn(e)==="[object Set]",z=e=>typeof e=="function",ne=e=>typeof e=="string",Vr=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",Fi=e=>(Z(e)||z(e))&&z(e.then)&&z(e.catch),zi=Object.prototype.toString,Yn=e=>zi.call(e),fo=e=>Yn(e).slice(8,-1),ji=e=>Yn(e)==="[object Object]",qr=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pn=Wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},co=/-(\w)/g,Re=Kn(e=>e.replace(co,(t,n)=>n?n.toUpperCase():"")),uo=/\B([A-Z])/g,Nt=Kn(e=>e.replace(uo,"-$1").toLowerCase()),Vn=Kn(e=>e.charAt(0).toUpperCase()+e.slice(1)),lr=Kn(e=>e?`on${Vn(e)}`:""),mt=(e,t)=>!Object.is(e,t),fr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Rn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},mo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ia;const xr=()=>Ia||(Ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?vo(r):Xr(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(ne(e)||Z(e))return e}const ho=/;(?![^(]*\))/g,po=/:([^]+)/,go=/\/\*[^]*?\*\//g;function vo(e){const t={};return e.replace(go,"").split(ho).forEach(n=>{if(n){const r=n.split(po);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function qn(e){let t="";if(ne(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=qn(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yo=Wr(bo);function Hi(e){return!!e||e===""}const xo=e=>ne(e)?e:e==null?"":R(e)||Z(e)&&(e.toString===zi||!z(e.toString))?JSON.stringify(e,Di,2):String(e),Di=(e,t)=>t&&t.__v_isRef?Di(e,t.value):kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Li(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!R(t)&&!ji(t)?String(t):t;let we;class _o{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function wo(e,t=we){t&&t.active&&t.effects.push(e)}function ko(){return we}const Jr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},$i=e=>(e.w&Ze)>0,Ui=e=>(e.n&Ze)>0,Ao=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},Oo=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];$i(a)&&!Ui(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},_r=new WeakMap;let Dt=0,Ze=1;const wr=30;let ke;const ut=Symbol(""),kr=Symbol("");class Zr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wo(this,r)}run(){if(!this.active)return this.fn();let t=ke,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ke,ke=this,Xe=!0,Ze=1<<++Dt,Dt<=wr?Ao(this):Ta(this),this.fn()}finally{Dt<=wr&&Oo(this),Ze=1<<--Dt,ke=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ke===this?this.deferStop=!0:this.active&&(Ta(this),this.onStop&&this.onStop(),this.active=!1)}}function Ta(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const Bi=[];function Rt(){Bi.push(Xe),Xe=!1}function Lt(){const e=Bi.pop();Xe=e===void 0?!0:e}function pe(e,t,n){if(Xe&&ke){let r=_r.get(e);r||_r.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Jr()),Wi(a)}}function Wi(e,t){let n=!1;Dt<=wr?Ui(e)||(e.n|=Ze,n=!$i(e)):n=!e.has(ke),n&&(e.add(ke),ke.deps.push(e))}function He(e,t,n,r,a,i){const s=_r.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&R(e)){const l=Number(r);s.forEach((c,d)=>{(d==="length"||d>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":R(e)?qr(n)&&o.push(s.get("length")):(o.push(s.get(ut)),kt(e)&&o.push(s.get(kr)));break;case"delete":R(e)||(o.push(s.get(ut)),kt(e)&&o.push(s.get(kr)));break;case"set":kt(e)&&o.push(s.get(ut));break}if(o.length===1)o[0]&&Ar(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Ar(Jr(l))}}function Ar(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Ma(r);for(const r of n)r.computed||Ma(r)}function Ma(e,t){(e!==ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Co=Wr("__proto__,__v_isRef,__isVue"),Yi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vr)),Na=Eo();function Eo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,s=this.length;i<s;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Rt();const r=B(this)[t].apply(this,n);return Lt(),r}}),e}function Po(e){const t=B(this);return pe(t,"has",e),t.hasOwnProperty(e)}class Ki{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?$o:Ji:i?Xi:qi).get(t))return t;const s=R(t);if(!a){if(s&&$(Na,n))return Reflect.get(Na,n,r);if(n==="hasOwnProperty")return Po}const o=Reflect.get(t,n,r);return(Vr(n)?Yi.has(n):Co(n))||(a||pe(t,"get",n),i)?o:fe(o)?s&&qr(n)?o:o.value:Z(o)?a?Zi(o):ea(o):o}}class Vi extends Ki{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Pt(i)&&fe(i)&&!fe(r))return!1;if(!this._shallow&&(!Ln(r)&&!Pt(r)&&(i=B(i),r=B(r)),!R(t)&&fe(i)&&!fe(r)))return i.value=r,!0;const s=R(t)&&qr(n)?Number(n)<t.length:$(t,n),o=Reflect.set(t,n,r,a);return t===B(a)&&(s?mt(r,i)&&He(t,"set",n,r):He(t,"add",n,r)),o}deleteProperty(t,n){const r=$(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&He(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Vr(n)||!Yi.has(n))&&pe(t,"has",n),r}ownKeys(t){return pe(t,"iterate",R(t)?"length":ut),Reflect.ownKeys(t)}}class So extends Ki{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Io=new Vi,To=new So,Mo=new Vi(!0),Gr=e=>e,Xn=e=>Reflect.getPrototypeOf(e);function mn(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(mt(t,i)&&pe(a,"get",t),pe(a,"get",i));const{has:s}=Xn(a),o=r?Gr:n?na:Xt;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function hn(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(mt(e,a)&&pe(r,"has",e),pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function pn(e,t=!1){return e=e.__v_raw,!t&&pe(B(e),"iterate",ut),Reflect.get(e,"size",e)}function Ra(e){e=B(e);const t=B(this);return Xn(t).has.call(t,e)||(t.add(e),He(t,"add",e,e)),this}function La(e,t){t=B(t);const n=B(this),{has:r,get:a}=Xn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?mt(t,s)&&He(n,"set",e,t):He(n,"add",e,t),this}function Fa(e){const t=B(this),{has:n,get:r}=Xn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&He(t,"delete",e,void 0),i}function za(){const e=B(this),t=e.size!==0,n=e.clear();return t&&He(e,"clear",void 0,void 0),n}function gn(e,t){return function(r,a){const i=this,s=i.__v_raw,o=B(s),l=t?Gr:e?na:Xt;return!e&&pe(o,"iterate",ut),s.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function vn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),s=kt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=a[e](...r),d=n?Gr:t?na:Xt;return!t&&pe(i,"iterate",l?kr:ut),{next(){const{value:m,done:b}=c.next();return b?{value:m,done:b}:{value:o?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function No(){const e={get(i){return mn(this,i)},get size(){return pn(this)},has:hn,add:Ra,set:La,delete:Fa,clear:za,forEach:gn(!1,!1)},t={get(i){return mn(this,i,!1,!0)},get size(){return pn(this)},has:hn,add:Ra,set:La,delete:Fa,clear:za,forEach:gn(!1,!0)},n={get(i){return mn(this,i,!0)},get size(){return pn(this,!0)},has(i){return hn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:gn(!0,!1)},r={get(i){return mn(this,i,!0,!0)},get size(){return pn(this,!0)},has(i){return hn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=vn(i,!1,!1),n[i]=vn(i,!0,!1),t[i]=vn(i,!1,!0),r[i]=vn(i,!0,!0)}),[e,n,t,r]}const[Ro,Lo,Fo,zo]=No();function Qr(e,t){const n=t?e?zo:Fo:e?Lo:Ro;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const jo={get:Qr(!1,!1)},Ho={get:Qr(!1,!0)},Do={get:Qr(!0,!1)},qi=new WeakMap,Xi=new WeakMap,Ji=new WeakMap,$o=new WeakMap;function Uo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bo(e){return e.__v_skip||!Object.isExtensible(e)?0:Uo(fo(e))}function ea(e){return Pt(e)?e:ta(e,!1,Io,jo,qi)}function Wo(e){return ta(e,!1,Mo,Ho,Xi)}function Zi(e){return ta(e,!0,To,Do,Ji)}function ta(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=Bo(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function At(e){return Pt(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function Ln(e){return!!(e&&e.__v_isShallow)}function Gi(e){return At(e)||Pt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Qi(e){return Rn(e,"__v_skip",!0),e}const Xt=e=>Z(e)?ea(e):e,na=e=>Z(e)?Zi(e):e;function es(e){Xe&&ke&&(e=B(e),Wi(e.dep||(e.dep=Jr())))}function ts(e,t){e=B(e);const n=e.dep;n&&Ar(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function rt(e){return Yo(e,!1)}function Yo(e,t){return fe(e)?e:new Ko(e,t)}class Ko{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:B(t),this._value=n?t:Xt(t)}get value(){return es(this),this._value}set value(t){const n=this.__v_isShallow||Ln(t)||Pt(t);t=n?t:B(t),mt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Xt(t),ts(this))}}function Vo(e){return fe(e)?e.value:e}const qo={get:(e,t,n)=>Vo(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ns(e){return At(e)?e:new Proxy(e,qo)}class Xo{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Zr(t,()=>{this._dirty||(this._dirty=!0,ts(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return es(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Jo(e,t,n=!1){let r,a;const i=z(e);return i?(r=e,a=Ce):(r=e.get,a=e.set),new Xo(r,a,i||!a,n)}function Je(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Jn(i,t,n)}return a}function Ee(e,t,n,r){if(z(e)){const i=Je(e,t,n,r);return i&&Fi(i)&&i.catch(s=>{Jn(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function Jn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Je(l,null,10,[e,s,o]);return}}Zo(e,n,a,r)}function Zo(e,t,n,r=!0){console.error(e)}let Jt=!1,Or=!1;const le=[];let Me=0;const Ot=[];let ze=null,ot=0;const rs=Promise.resolve();let ra=null;function Go(e){const t=ra||rs;return e?t.then(this?e.bind(this):e):t}function Qo(e){let t=Me+1,n=le.length;for(;t<n;){const r=t+n>>>1;Zt(le[r])<e?t=r+1:n=r}return t}function aa(e){(!le.length||!le.includes(e,Jt&&e.allowRecurse?Me+1:Me))&&(e.id==null?le.push(e):le.splice(Qo(e.id),0,e),as())}function as(){!Jt&&!Or&&(Or=!0,ra=rs.then(ss))}function el(e){const t=le.indexOf(e);t>Me&&le.splice(t,1)}function tl(e){R(e)?Ot.push(...e):(!ze||!ze.includes(e,e.allowRecurse?ot+1:ot))&&Ot.push(e),as()}function ja(e,t=Jt?Me+1:0){for(;t<le.length;t++){const n=le[t];n&&n.pre&&(le.splice(t,1),t--,n())}}function is(e){if(Ot.length){const t=[...new Set(Ot)];if(Ot.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((n,r)=>Zt(n)-Zt(r)),ot=0;ot<ze.length;ot++)ze[ot]();ze=null,ot=0}}const Zt=e=>e.id==null?1/0:e.id,nl=(e,t)=>{const n=Zt(e)-Zt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ss(e){Or=!1,Jt=!0,le.sort(nl);const t=Ce;try{for(Me=0;Me<le.length;Me++){const n=le[Me];n&&n.active!==!1&&Je(n,null,14)}}finally{Me=0,le.length=0,is(),Jt=!1,ra=null,(le.length||Ot.length)&&ss()}}function rl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:b}=r[d]||J;b&&(a=n.map(k=>ne(k)?k.trim():k)),m&&(a=n.map(mo))}let o,l=r[o=lr(t)]||r[o=lr(Re(t))];!l&&i&&(l=r[o=lr(Nt(t))]),l&&Ee(l,e,6,a);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ee(c,e,6,a)}}function os(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!z(e)){const l=c=>{const d=os(c,t,!0);d&&(o=!0,ie(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(Z(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>s[l]=null):ie(s,i),Z(e)&&r.set(e,s),s)}function Zn(e,t){return!e||!Wn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Nt(t))||$(e,t))}let de=null,ls=null;function Fn(e){const t=de;return de=e,ls=e&&e.type.__scopeId||null,t}function Ve(e,t=de,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ja(-1);const i=Fn(t);let s;try{s=e(...a)}finally{Fn(i),r._d&&Ja(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function cr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:d,renderCache:m,data:b,setupState:k,ctx:j,inheritAttrs:N}=e;let D,A;const C=Fn(e);try{if(n.shapeFlag&4){const I=a||r;D=Te(d.call(I,I,m,i,k,b,j)),A=l}else{const I=t;D=Te(I.length>1?I(i,{attrs:l,slots:o,emit:c}):I(i,null)),A=t.props?l:al(l)}}catch(I){Yt.length=0,Jn(I,e,1),D=U(St)}let L=D;if(A&&N!==!1){const I=Object.keys(A),{shapeFlag:W}=L;I.length&&W&7&&(s&&I.some(Yr)&&(A=il(A,s)),L=It(L,A))}return n.dirs&&(L=It(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),D=L,Fn(C),D}const al=e=>{let t;for(const n in e)(n==="class"||n==="style"||Wn(n))&&((t||(t={}))[n]=e[n]);return t},il=(e,t)=>{const n={};for(const r in e)(!Yr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function sl(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ha(r,s,c):!!s;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(s[b]!==r[b]&&!Zn(c,b))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Ha(r,s,c):!0:!!s;return!1}function Ha(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Zn(n,i))return!0}return!1}function ol({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ll=e=>e.__isSuspense;function fl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):tl(e)}const bn={};function Sn(e,t,n){return fs(e,t,n)}function fs(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=J){var o;const l=ko()===((o=ae)==null?void 0:o.scope)?ae:null;let c,d=!1,m=!1;if(fe(e)?(c=()=>e.value,d=Ln(e)):At(e)?(c=()=>e,r=!0):R(e)?(m=!0,d=e.some(I=>At(I)||Ln(I)),c=()=>e.map(I=>{if(fe(I))return I.value;if(At(I))return yt(I);if(z(I))return Je(I,l,2)})):z(e)?t?c=()=>Je(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return b&&b(),Ee(e,l,3,[k])}:c=Ce,t&&r){const I=c;c=()=>yt(I())}let b,k=I=>{b=C.onStop=()=>{Je(I,l,4)}},j;if(Qt)if(k=Ce,t?n&&Ee(t,l,3,[c(),m?[]:void 0,k]):c(),a==="sync"){const I=ff();j=I.__watcherHandles||(I.__watcherHandles=[])}else return Ce;let N=m?new Array(e.length).fill(bn):bn;const D=()=>{if(C.active)if(t){const I=C.run();(r||d||(m?I.some((W,se)=>mt(W,N[se])):mt(I,N)))&&(b&&b(),Ee(t,l,3,[I,N===bn?void 0:m&&N[0]===bn?[]:N,k]),N=I)}else C.run()};D.allowRecurse=!!t;let A;a==="sync"?A=D:a==="post"?A=()=>he(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),A=()=>aa(D));const C=new Zr(c,A);t?n?D():N=C.run():a==="post"?he(C.run.bind(C),l&&l.suspense):C.run();const L=()=>{C.stop(),l&&l.scope&&Kr(l.scope.effects,C)};return j&&j.push(L),L}function cl(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?cs(r,e):()=>r[e]:e.bind(r,r);let i;z(t)?i=t:(i=t.handler,n=t);const s=ae;Tt(this);const o=fs(a,i.bind(r),n);return s?Tt(s):dt(),o}function cs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function yt(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))yt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)yt(e[n],t);else if(Li(e)||kt(e))e.forEach(n=>{yt(n,t)});else if(ji(e))for(const n in e)yt(e[n],t);return e}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Rt(),Ee(l,n,8,[e.el,o,e,t]),Lt())}}/*! #__NO_SIDE_EFFECTS__ */function ul(e,t){return z(e)?(()=>ie({name:e.name},t,{setup:e}))():e}const Bt=e=>!!e.type.__asyncLoader,us=e=>e.type.__isKeepAlive;function dl(e,t){ds(e,"a",t)}function ml(e,t){ds(e,"da",t)}function ds(e,t,n=ae){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Gn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)us(a.parent.vnode)&&hl(r,t,n,a),a=a.parent}}function hl(e,t,n,r){const a=Gn(t,e,r,!0);ms(()=>{Kr(r[t],a)},n)}function Gn(e,t,n=ae,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Rt(),Tt(n);const o=Ee(t,n,e,s);return dt(),Lt(),o});return r?a.unshift(i):a.push(i),i}}const Be=e=>(t,n=ae)=>(!Qt||e==="sp")&&Gn(e,(...r)=>t(...r),n),pl=Be("bm"),gl=Be("m"),vl=Be("bu"),bl=Be("u"),yl=Be("bum"),ms=Be("um"),xl=Be("sp"),_l=Be("rtg"),wl=Be("rtc");function kl(e,t=ae){Gn("ec",e,t)}const hs="components";function Da(e,t){return Ol(hs,e,!0,t)||e}const Al=Symbol.for("v-ndc");function Ol(e,t,n=!0,r=!1){const a=de||ae;if(a){const i=a.type;if(e===hs){const o=af(i,!1);if(o&&(o===t||o===Re(t)||o===Vn(Re(t))))return i}const s=$a(a[e]||i[e],t)||$a(a.appContext[e],t);return!s&&r?i:s}}function $a(e,t){return e&&(e[t]||e[Re(t)]||e[Vn(Re(t))])}function Cl(e,t,n,r){let a;const i=n&&n[r];if(R(e)||ne(e)){a=new Array(e.length);for(let s=0,o=e.length;s<o;s++)a[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i&&i[s])}else if(Z(e))if(e[Symbol.iterator])a=Array.from(e,(s,o)=>t(s,o,void 0,i&&i[o]));else{const s=Object.keys(e);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const c=s[o];a[o]=t(e[c],c,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}function El(e,t,n={},r,a){if(de.isCE||de.parent&&Bt(de.parent)&&de.parent.isCE)return t!=="default"&&(n.name=t),U("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),Ct();const s=i&&ps(i(n)),o=Vl(ye,{key:n.key||s&&s.key||`_${t}`},s||(r?r():[]),s&&e._===1?64:-2);return!a&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),i&&i._c&&(i._d=!0),o}function ps(e){return e.some(t=>Hn(t)?!(t.type===St||t.type===ye&&!ps(t.children)):!0)?e:null}const Cr=e=>e?Cs(e)?fa(e)||e.proxy:Cr(e.parent):null,Wt=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cr(e.parent),$root:e=>Cr(e.root),$emit:e=>e.emit,$options:e=>ia(e),$forceUpdate:e=>e.f||(e.f=()=>aa(e.update)),$nextTick:e=>e.n||(e.n=Go.bind(e.proxy)),$watch:e=>cl.bind(e)}),ur=(e,t)=>e!==J&&!e.__isScriptSetup&&$(e,t),Pl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const k=s[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(ur(r,t))return s[t]=1,r[t];if(a!==J&&$(a,t))return s[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return s[t]=3,i[t];if(n!==J&&$(n,t))return s[t]=4,n[t];Er&&(s[t]=0)}}const d=Wt[t];let m,b;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==J&&$(n,t))return s[t]=4,n[t];if(b=l.config.globalProperties,$(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return ur(a,t)?(a[t]=n,!0):r!==J&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==J&&$(e,s)||ur(t,s)||(o=i[0])&&$(o,s)||$(r,s)||$(Wt,s)||$(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ua(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Er=!0;function Sl(e){const t=ia(e),n=e.proxy,r=e.ctx;Er=!1,t.beforeCreate&&Ba(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:c,created:d,beforeMount:m,mounted:b,beforeUpdate:k,updated:j,activated:N,deactivated:D,beforeDestroy:A,beforeUnmount:C,destroyed:L,unmounted:I,render:W,renderTracked:se,renderTriggered:oe,errorCaptured:xe,serverPrefetch:be,expose:Le,inheritAttrs:zt,components:fn,directives:cn,filters:ir}=t;if(c&&Il(c,r,null),s)for(const G in s){const K=s[G];z(K)&&(r[G]=K.bind(n))}if(a){const G=a.call(n,n);Z(G)&&(e.data=ea(G))}if(Er=!0,i)for(const G in i){const K=i[G],tt=z(K)?K.bind(n,n):z(K.get)?K.get.bind(n,n):Ce,un=!z(K)&&z(K.set)?K.set.bind(n):Ce,nt=st({get:tt,set:un});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Pe=>nt.value=Pe})}if(o)for(const G in o)gs(o[G],r,n,G);if(l){const G=z(l)?l.call(n):l;Reflect.ownKeys(G).forEach(K=>{Fl(K,G[K])})}d&&Ba(d,e,"c");function ce(G,K){R(K)?K.forEach(tt=>G(tt.bind(n))):K&&G(K.bind(n))}if(ce(pl,m),ce(gl,b),ce(vl,k),ce(bl,j),ce(dl,N),ce(ml,D),ce(kl,xe),ce(wl,se),ce(_l,oe),ce(yl,C),ce(ms,I),ce(xl,be),R(Le))if(Le.length){const G=e.exposed||(e.exposed={});Le.forEach(K=>{Object.defineProperty(G,K,{get:()=>n[K],set:tt=>n[K]=tt})})}else e.exposed||(e.exposed={});W&&e.render===Ce&&(e.render=W),zt!=null&&(e.inheritAttrs=zt),fn&&(e.components=fn),cn&&(e.directives=cn)}function Il(e,t,n=Ce){R(e)&&(e=Pr(e));for(const r in e){const a=e[r];let i;Z(a)?"default"in a?i=In(a.from||r,a.default,!0):i=In(a.from||r):i=In(a),fe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function Ba(e,t,n){Ee(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function gs(e,t,n,r){const a=r.includes(".")?cs(n,r):()=>n[r];if(ne(e)){const i=t[e];z(i)&&Sn(a,i)}else if(z(e))Sn(a,e.bind(n));else if(Z(e))if(R(e))e.forEach(i=>gs(i,t,n,r));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&Sn(a,i,e)}}function ia(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>zn(l,c,s,!0)),zn(l,t,s)),Z(t)&&i.set(t,l),l}function zn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&zn(e,i,n,!0),a&&a.forEach(s=>zn(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Tl[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Tl={data:Wa,props:Ya,emits:Ya,methods:$t,computed:$t,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:$t,directives:$t,watch:Nl,provide:Wa,inject:Ml};function Wa(e,t){return t?e?function(){return ie(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function Ml(e,t){return $t(Pr(e),Pr(t))}function Pr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function $t(e,t){return e?ie(Object.create(null),e,t):t}function Ya(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:ie(Object.create(null),Ua(e),Ua(t??{})):t}function Nl(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const r in t)n[r]=ue(e[r],t[r]);return n}function vs(){return{app:null,config:{isNativeTag:so,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rl=0;function Ll(e,t){return function(r,a=null){z(r)||(r=ie({},r)),a!=null&&!Z(a)&&(a=null);const i=vs(),s=new WeakSet;let o=!1;const l=i.app={_uid:Rl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:cf,get config(){return i.config},set config(c){},use(c,...d){return s.has(c)||(c&&z(c.install)?(s.add(c),c.install(l,...d)):z(c)&&(s.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!o){const b=U(r,a);return b.appContext=i,d&&t?t(b,c):e(b,c,m),o=!0,l._container=c,c.__vue_app__=l,fa(b.component)||b.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){jn=l;try{return c()}finally{jn=null}}};return l}}let jn=null;function Fl(e,t){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[e]=t}}function In(e,t,n=!1){const r=ae||de;if(r||jn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:jn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&z(t)?t.call(r&&r.proxy):t}}function zl(e,t,n,r=!1){const a={},i={};Rn(i,er,1),e.propsDefaults=Object.create(null),bs(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:Wo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function jl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=B(a),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Zn(e.emitsOptions,b))continue;const k=t[b];if(l)if($(i,b))k!==i[b]&&(i[b]=k,c=!0);else{const j=Re(b);a[j]=Sr(l,o,j,k,e,!1)}else k!==i[b]&&(i[b]=k,c=!0)}}}else{bs(e,t,a,i)&&(c=!0);let d;for(const m in o)(!t||!$(t,m)&&((d=Nt(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Sr(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&He(e,"set","$attrs")}function bs(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(Pn(l))continue;const c=t[l];let d;a&&$(a,d=Re(l))?!i||!i.includes(d)?n[d]=c:(o||(o={}))[d]=c:Zn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=B(n),c=o||J;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Sr(a,l,m,c[m],e,!$(c,m))}}return s}function Sr(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=$(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&z(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Tt(a),r=c[n]=l.call(null,t),dt())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===Nt(n))&&(r=!0))}return r}function ys(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!z(e)){const d=m=>{l=!0;const[b,k]=ys(m,t,!0);ie(s,b),k&&o.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return Z(e)&&r.set(e,wt),wt;if(R(i))for(let d=0;d<i.length;d++){const m=Re(i[d]);Ka(m)&&(s[m]=J)}else if(i)for(const d in i){const m=Re(d);if(Ka(m)){const b=i[d],k=s[m]=R(b)||z(b)?{type:b}:ie({},b);if(k){const j=Xa(Boolean,k.type),N=Xa(String,k.type);k[0]=j>-1,k[1]=N<0||j<N,(j>-1||$(k,"default"))&&o.push(m)}}}const c=[s,o];return Z(e)&&r.set(e,c),c}function Ka(e){return e[0]!=="$"}function Va(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function qa(e,t){return Va(e)===Va(t)}function Xa(e,t){return R(t)?t.findIndex(n=>qa(n,e)):z(t)&&qa(t,e)?0:-1}const xs=e=>e[0]==="_"||e==="$stable",sa=e=>R(e)?e.map(Te):[Te(e)],Hl=(e,t,n)=>{if(t._n)return t;const r=Ve((...a)=>sa(t(...a)),n);return r._c=!1,r},_s=(e,t,n)=>{const r=e._ctx;for(const a in e){if(xs(a))continue;const i=e[a];if(z(i))t[a]=Hl(a,i,r);else if(i!=null){const s=sa(i);t[a]=()=>s}}},ws=(e,t)=>{const n=sa(t);e.slots.default=()=>n},Dl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),Rn(t,"_",n)):_s(t,e.slots={})}else e.slots={},t&&ws(e,t);Rn(e.slots,er,1)},$l=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=J;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(ie(a,t),!n&&o===1&&delete a._):(i=!t.$stable,_s(t,a)),s=t}else t&&(ws(e,t),s={default:1});if(i)for(const o in a)!xs(o)&&s[o]==null&&delete a[o]};function Ir(e,t,n,r,a=!1){if(R(e)){e.forEach((b,k)=>Ir(b,t&&(R(t)?t[k]:t),n,r,a));return}if(Bt(r)&&!a)return;const i=r.shapeFlag&4?fa(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,c=t&&t.r,d=o.refs===J?o.refs={}:o.refs,m=o.setupState;if(c!=null&&c!==l&&(ne(c)?(d[c]=null,$(m,c)&&(m[c]=null)):fe(c)&&(c.value=null)),z(l))Je(l,o,12,[s,d]);else{const b=ne(l),k=fe(l);if(b||k){const j=()=>{if(e.f){const N=b?$(m,l)?m[l]:d[l]:l.value;a?R(N)&&Kr(N,i):R(N)?N.includes(i)||N.push(i):b?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=s,$(m,l)&&(m[l]=s)):k&&(l.value=s,e.k&&(d[e.k]=s))};s?(j.id=-1,he(j,n)):j()}}}const he=fl;function Ul(e){return Bl(e)}function Bl(e,t){const n=xr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:b,setScopeId:k=Ce,insertStaticContent:j}=e,N=(f,u,h,v=null,g=null,_=null,O=!1,x=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Ht(f,u)&&(v=dn(f),Pe(f,g,_,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:y,ref:T,shapeFlag:P}=u;switch(y){case Qn:D(f,u,h,v);break;case St:A(f,u,h,v);break;case dr:f==null&&C(u,h,v,O);break;case ye:fn(f,u,h,v,g,_,O,x,w);break;default:P&1?W(f,u,h,v,g,_,O,x,w):P&6?cn(f,u,h,v,g,_,O,x,w):(P&64||P&128)&&y.process(f,u,h,v,g,_,O,x,w,gt)}T!=null&&g&&Ir(T,f&&f.ref,_,u||f,!u)},D=(f,u,h,v)=>{if(f==null)r(u.el=o(u.children),h,v);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},A=(f,u,h,v)=>{f==null?r(u.el=l(u.children||""),h,v):u.el=f.el},C=(f,u,h,v)=>{[f.el,f.anchor]=j(f.children,u,h,v,f.el,f.anchor)},L=({el:f,anchor:u},h,v)=>{let g;for(;f&&f!==u;)g=b(f),r(f,h,v),f=g;r(u,h,v)},I=({el:f,anchor:u})=>{let h;for(;f&&f!==u;)h=b(f),a(f),f=h;a(u)},W=(f,u,h,v,g,_,O,x,w)=>{O=O||u.type==="svg",f==null?se(u,h,v,g,_,O,x,w):be(f,u,g,_,O,x,w)},se=(f,u,h,v,g,_,O,x)=>{let w,y;const{type:T,props:P,shapeFlag:M,transition:F,dirs:H}=f;if(w=f.el=s(f.type,_,P&&P.is,P),M&8?d(w,f.children):M&16&&xe(f.children,w,null,v,g,_&&T!=="foreignObject",O,x),H&&at(f,null,v,"created"),oe(w,f,f.scopeId,O,v),P){for(const Y in P)Y!=="value"&&!Pn(Y)&&i(w,Y,null,P[Y],_,f.children,v,g,Fe);"value"in P&&i(w,"value",null,P.value),(y=P.onVnodeBeforeMount)&&Ie(y,v,f)}H&&at(f,null,v,"beforeMount");const V=(!g||g&&!g.pendingBranch)&&F&&!F.persisted;V&&F.beforeEnter(w),r(w,u,h),((y=P&&P.onVnodeMounted)||V||H)&&he(()=>{y&&Ie(y,v,f),V&&F.enter(w),H&&at(f,null,v,"mounted")},g)},oe=(f,u,h,v,g)=>{if(h&&k(f,h),v)for(let _=0;_<v.length;_++)k(f,v[_]);if(g){let _=g.subTree;if(u===_){const O=g.vnode;oe(f,O,O.scopeId,O.slotScopeIds,g.parent)}}},xe=(f,u,h,v,g,_,O,x,w=0)=>{for(let y=w;y<f.length;y++){const T=f[y]=x?qe(f[y]):Te(f[y]);N(null,T,u,h,v,g,_,O,x)}},be=(f,u,h,v,g,_,O)=>{const x=u.el=f.el;let{patchFlag:w,dynamicChildren:y,dirs:T}=u;w|=f.patchFlag&16;const P=f.props||J,M=u.props||J;let F;h&&it(h,!1),(F=M.onVnodeBeforeUpdate)&&Ie(F,h,u,f),T&&at(u,f,h,"beforeUpdate"),h&&it(h,!0);const H=g&&u.type!=="foreignObject";if(y?Le(f.dynamicChildren,y,x,h,v,H,_):O||K(f,u,x,null,h,v,H,_,!1),w>0){if(w&16)zt(x,u,P,M,h,v,g);else if(w&2&&P.class!==M.class&&i(x,"class",null,M.class,g),w&4&&i(x,"style",P.style,M.style,g),w&8){const V=u.dynamicProps;for(let Y=0;Y<V.length;Y++){const te=V[Y],_e=P[te],vt=M[te];(vt!==_e||te==="value")&&i(x,te,_e,vt,g,f.children,h,v,Fe)}}w&1&&f.children!==u.children&&d(x,u.children)}else!O&&y==null&&zt(x,u,P,M,h,v,g);((F=M.onVnodeUpdated)||T)&&he(()=>{F&&Ie(F,h,u,f),T&&at(u,f,h,"updated")},v)},Le=(f,u,h,v,g,_,O)=>{for(let x=0;x<u.length;x++){const w=f[x],y=u[x],T=w.el&&(w.type===ye||!Ht(w,y)||w.shapeFlag&70)?m(w.el):h;N(w,y,T,null,v,g,_,O,!0)}},zt=(f,u,h,v,g,_,O)=>{if(h!==v){if(h!==J)for(const x in h)!Pn(x)&&!(x in v)&&i(f,x,h[x],null,O,u.children,g,_,Fe);for(const x in v){if(Pn(x))continue;const w=v[x],y=h[x];w!==y&&x!=="value"&&i(f,x,y,w,O,u.children,g,_,Fe)}"value"in v&&i(f,"value",h.value,v.value)}},fn=(f,u,h,v,g,_,O,x,w)=>{const y=u.el=f?f.el:o(""),T=u.anchor=f?f.anchor:o("");let{patchFlag:P,dynamicChildren:M,slotScopeIds:F}=u;F&&(x=x?x.concat(F):F),f==null?(r(y,h,v),r(T,h,v),xe(u.children,h,T,g,_,O,x,w)):P>0&&P&64&&M&&f.dynamicChildren?(Le(f.dynamicChildren,M,h,g,_,O,x),(u.key!=null||g&&u===g.subTree)&&ks(f,u,!0)):K(f,u,h,T,g,_,O,x,w)},cn=(f,u,h,v,g,_,O,x,w)=>{u.slotScopeIds=x,f==null?u.shapeFlag&512?g.ctx.activate(u,h,v,O,w):ir(u,h,v,g,_,O,w):Aa(f,u,w)},ir=(f,u,h,v,g,_,O)=>{const x=f.component=Ql(f,v,g);if(us(f)&&(x.ctx.renderer=gt),ef(x),x.asyncDep){if(g&&g.registerDep(x,ce),!f.el){const w=x.subTree=U(St);A(null,w,u,h)}return}ce(x,f,u,h,g,_,O)},Aa=(f,u,h)=>{const v=u.component=f.component;if(sl(f,u,h))if(v.asyncDep&&!v.asyncResolved){G(v,u,h);return}else v.next=u,el(v.update),v.update();else u.el=f.el,v.vnode=u},ce=(f,u,h,v,g,_,O)=>{const x=()=>{if(f.isMounted){let{next:T,bu:P,u:M,parent:F,vnode:H}=f,V=T,Y;it(f,!1),T?(T.el=H.el,G(f,T,O)):T=H,P&&fr(P),(Y=T.props&&T.props.onVnodeBeforeUpdate)&&Ie(Y,F,T,H),it(f,!0);const te=cr(f),_e=f.subTree;f.subTree=te,N(_e,te,m(_e.el),dn(_e),f,g,_),T.el=te.el,V===null&&ol(f,te.el),M&&he(M,g),(Y=T.props&&T.props.onVnodeUpdated)&&he(()=>Ie(Y,F,T,H),g)}else{let T;const{el:P,props:M}=u,{bm:F,m:H,parent:V}=f,Y=Bt(u);if(it(f,!1),F&&fr(F),!Y&&(T=M&&M.onVnodeBeforeMount)&&Ie(T,V,u),it(f,!0),P&&or){const te=()=>{f.subTree=cr(f),or(P,f.subTree,f,g,null)};Y?u.type.__asyncLoader().then(()=>!f.isUnmounted&&te()):te()}else{const te=f.subTree=cr(f);N(null,te,h,v,f,g,_),u.el=te.el}if(H&&he(H,g),!Y&&(T=M&&M.onVnodeMounted)){const te=u;he(()=>Ie(T,V,te),g)}(u.shapeFlag&256||V&&Bt(V.vnode)&&V.vnode.shapeFlag&256)&&f.a&&he(f.a,g),f.isMounted=!0,u=h=v=null}},w=f.effect=new Zr(x,()=>aa(y),f.scope),y=f.update=()=>w.run();y.id=f.uid,it(f,!0),y()},G=(f,u,h)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,jl(f,u.props,v,h),$l(f,u.children,h),Rt(),ja(),Lt()},K=(f,u,h,v,g,_,O,x,w=!1)=>{const y=f&&f.children,T=f?f.shapeFlag:0,P=u.children,{patchFlag:M,shapeFlag:F}=u;if(M>0){if(M&128){un(y,P,h,v,g,_,O,x,w);return}else if(M&256){tt(y,P,h,v,g,_,O,x,w);return}}F&8?(T&16&&Fe(y,g,_),P!==y&&d(h,P)):T&16?F&16?un(y,P,h,v,g,_,O,x,w):Fe(y,g,_,!0):(T&8&&d(h,""),F&16&&xe(P,h,v,g,_,O,x,w))},tt=(f,u,h,v,g,_,O,x,w)=>{f=f||wt,u=u||wt;const y=f.length,T=u.length,P=Math.min(y,T);let M;for(M=0;M<P;M++){const F=u[M]=w?qe(u[M]):Te(u[M]);N(f[M],F,h,null,g,_,O,x,w)}y>T?Fe(f,g,_,!0,!1,P):xe(u,h,v,g,_,O,x,w,P)},un=(f,u,h,v,g,_,O,x,w)=>{let y=0;const T=u.length;let P=f.length-1,M=T-1;for(;y<=P&&y<=M;){const F=f[y],H=u[y]=w?qe(u[y]):Te(u[y]);if(Ht(F,H))N(F,H,h,null,g,_,O,x,w);else break;y++}for(;y<=P&&y<=M;){const F=f[P],H=u[M]=w?qe(u[M]):Te(u[M]);if(Ht(F,H))N(F,H,h,null,g,_,O,x,w);else break;P--,M--}if(y>P){if(y<=M){const F=M+1,H=F<T?u[F].el:v;for(;y<=M;)N(null,u[y]=w?qe(u[y]):Te(u[y]),h,H,g,_,O,x,w),y++}}else if(y>M)for(;y<=P;)Pe(f[y],g,_,!0),y++;else{const F=y,H=y,V=new Map;for(y=H;y<=M;y++){const ge=u[y]=w?qe(u[y]):Te(u[y]);ge.key!=null&&V.set(ge.key,y)}let Y,te=0;const _e=M-H+1;let vt=!1,Ea=0;const jt=new Array(_e);for(y=0;y<_e;y++)jt[y]=0;for(y=F;y<=P;y++){const ge=f[y];if(te>=_e){Pe(ge,g,_,!0);continue}let Se;if(ge.key!=null)Se=V.get(ge.key);else for(Y=H;Y<=M;Y++)if(jt[Y-H]===0&&Ht(ge,u[Y])){Se=Y;break}Se===void 0?Pe(ge,g,_,!0):(jt[Se-H]=y+1,Se>=Ea?Ea=Se:vt=!0,N(ge,u[Se],h,null,g,_,O,x,w),te++)}const Pa=vt?Wl(jt):wt;for(Y=Pa.length-1,y=_e-1;y>=0;y--){const ge=H+y,Se=u[ge],Sa=ge+1<T?u[ge+1].el:v;jt[y]===0?N(null,Se,h,Sa,g,_,O,x,w):vt&&(Y<0||y!==Pa[Y]?nt(Se,h,Sa,2):Y--)}}},nt=(f,u,h,v,g=null)=>{const{el:_,type:O,transition:x,children:w,shapeFlag:y}=f;if(y&6){nt(f.component.subTree,u,h,v);return}if(y&128){f.suspense.move(u,h,v);return}if(y&64){O.move(f,u,h,gt);return}if(O===ye){r(_,u,h);for(let P=0;P<w.length;P++)nt(w[P],u,h,v);r(f.anchor,u,h);return}if(O===dr){L(f,u,h);return}if(v!==2&&y&1&&x)if(v===0)x.beforeEnter(_),r(_,u,h),he(()=>x.enter(_),g);else{const{leave:P,delayLeave:M,afterLeave:F}=x,H=()=>r(_,u,h),V=()=>{P(_,()=>{H(),F&&F()})};M?M(_,H,V):V()}else r(_,u,h)},Pe=(f,u,h,v=!1,g=!1)=>{const{type:_,props:O,ref:x,children:w,dynamicChildren:y,shapeFlag:T,patchFlag:P,dirs:M}=f;if(x!=null&&Ir(x,null,h,f,!0),T&256){u.ctx.deactivate(f);return}const F=T&1&&M,H=!Bt(f);let V;if(H&&(V=O&&O.onVnodeBeforeUnmount)&&Ie(V,u,f),T&6)io(f.component,h,v);else{if(T&128){f.suspense.unmount(h,v);return}F&&at(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,h,g,gt,v):y&&(_!==ye||P>0&&P&64)?Fe(y,u,h,!1,!0):(_===ye&&P&384||!g&&T&16)&&Fe(w,u,h),v&&Oa(f)}(H&&(V=O&&O.onVnodeUnmounted)||F)&&he(()=>{V&&Ie(V,u,f),F&&at(f,null,u,"unmounted")},h)},Oa=f=>{const{type:u,el:h,anchor:v,transition:g}=f;if(u===ye){ao(h,v);return}if(u===dr){I(f);return}const _=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:O,delayLeave:x}=g,w=()=>O(h,_);x?x(f.el,_,w):w()}else _()},ao=(f,u)=>{let h;for(;f!==u;)h=b(f),a(f),f=h;a(u)},io=(f,u,h)=>{const{bum:v,scope:g,update:_,subTree:O,um:x}=f;v&&fr(v),g.stop(),_&&(_.active=!1,Pe(O,f,u,h)),x&&he(x,u),he(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Fe=(f,u,h,v=!1,g=!1,_=0)=>{for(let O=_;O<f.length;O++)Pe(f[O],u,h,v,g)},dn=f=>f.shapeFlag&6?dn(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),Ca=(f,u,h)=>{f==null?u._vnode&&Pe(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,h),ja(),is(),u._vnode=f},gt={p:N,um:Pe,m:nt,r:Oa,mt:ir,mc:xe,pc:K,pbc:Le,n:dn,o:e};let sr,or;return t&&([sr,or]=t(gt)),{render:Ca,hydrate:sr,createApp:Ll(Ca,sr)}}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ks(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=qe(a[i]),o.el=s.el),n||ks(s,o)),o.type===Qn&&(o.el=s.el)}}function Wl(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<c?i=o+1:s=o;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const Yl=e=>e.__isTeleport,ye=Symbol.for("v-fgt"),Qn=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),dr=Symbol.for("v-stc"),Yt=[];let Ae=null;function Ct(e=!1){Yt.push(Ae=e?null:[])}function Kl(){Yt.pop(),Ae=Yt[Yt.length-1]||null}let Gt=1;function Ja(e){Gt+=e}function As(e){return e.dynamicChildren=Gt>0?Ae||wt:null,Kl(),Gt>0&&Ae&&Ae.push(e),e}function Kt(e,t,n,r,a,i){return As(p(e,t,n,r,a,i,!0))}function Vl(e,t,n,r,a){return As(U(e,t,n,r,a,!0))}function Hn(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const er="__vInternal",Os=({key:e})=>e??null,Tn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ne(e)||fe(e)||z(e)?{i:de,r:e,k:t,f:!!n}:e:null);function p(e,t=null,n=null,r=0,a=null,i=e===ye?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Os(t),ref:t&&Tn(t),scopeId:ls,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:de};return o?(oa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Gt>0&&!s&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const U=ql;function ql(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Al)&&(e=St),Hn(e)){const o=It(e,t,!0);return n&&oa(o,n),Gt>0&&!i&&Ae&&(o.shapeFlag&6?Ae[Ae.indexOf(e)]=o:Ae.push(o)),o.patchFlag|=-2,o}if(sf(e)&&(e=e.__vccOpts),t){t=Xl(t);let{class:o,style:l}=t;o&&!ne(o)&&(t.class=qn(o)),Z(l)&&(Gi(l)&&!R(l)&&(l=ie({},l)),t.style=Xr(l))}const s=ne(e)?1:ll(e)?128:Yl(e)?64:Z(e)?4:z(e)?2:0;return p(e,t,n,r,a,s,i,!0)}function Xl(e){return e?Gi(e)||er in e?ie({},e):e:null}function It(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?Jl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Os(o),ref:t&&t.ref?n&&a?R(a)?a.concat(Tn(t)):[a,Tn(t)]:Tn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&It(e.ssContent),ssFallback:e.ssFallback&&It(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ee(e=" ",t=0){return U(Qn,null,e,t)}function Te(e){return e==null||typeof e=="boolean"?U(St):R(e)?U(ye,null,e.slice()):typeof e=="object"?qe(e):U(Qn,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:It(e)}function oa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),oa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(er in t)?t._ctx=de:a===3&&de&&(de.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:de},n=32):(t=String(t),r&64?(n=16,t=[ee(t)]):n=8);e.children=t,e.shapeFlag|=n}function Jl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=qn([t.class,r.class]));else if(a==="style")t.style=Xr([t.style,r.style]);else if(Wn(a)){const i=t[a],s=r[a];s&&i!==s&&!(R(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){Ee(e,t,7,[n,r])}const Zl=vs();let Gl=0;function Ql(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Zl,i={uid:Gl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new _o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ys(r,a),emitsOptions:os(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=rl.bind(null,i),e.ce&&e.ce(i),i}let ae=null,la,bt,Za="__VUE_INSTANCE_SETTERS__";(bt=xr()[Za])||(bt=xr()[Za]=[]),bt.push(e=>ae=e),la=e=>{bt.length>1?bt.forEach(t=>t(e)):bt[0](e)};const Tt=e=>{la(e),e.scope.on()},dt=()=>{ae&&ae.scope.off(),la(null)};function Cs(e){return e.vnode.shapeFlag&4}let Qt=!1;function ef(e,t=!1){Qt=t;const{props:n,children:r}=e.vnode,a=Cs(e);zl(e,n,a,t),Dl(e,r);const i=a?tf(e,t):void 0;return Qt=!1,i}function tf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Qi(new Proxy(e.ctx,Pl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?rf(e):null;Tt(e),Rt();const i=Je(r,e,0,[e.props,a]);if(Lt(),dt(),Fi(i)){if(i.then(dt,dt),t)return i.then(s=>{Ga(e,s,t)}).catch(s=>{Jn(s,e,0)});e.asyncDep=i}else Ga(e,i,t)}else Es(e,t)}function Ga(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=ns(t)),Es(e,n)}let Qa;function Es(e,t,n){const r=e.type;if(!e.render){if(!t&&Qa&&!r.render){const a=r.template||ia(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=ie(ie({isCustomElement:i,delimiters:o},s),l);r.render=Qa(a,c)}}e.render=r.render||Ce}{Tt(e),Rt();try{Sl(e)}finally{Lt(),dt()}}}function nf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}}))}function rf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return nf(e)},slots:e.slots,emit:e.emit,expose:t}}function fa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ns(Qi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wt)return Wt[n](e)},has(t,n){return n in t||n in Wt}}))}function af(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function sf(e){return z(e)&&"__vccOpts"in e}const st=(e,t)=>Jo(e,t,Qt);function of(e,t,n){const r=arguments.length;return r===2?Z(t)&&!R(t)?Hn(t)?U(e,null,[t]):U(e,t):U(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hn(n)&&(n=[n]),U(e,t,n))}const lf=Symbol.for("v-scx"),ff=()=>In(lf),cf="3.3.6",uf="http://www.w3.org/2000/svg",lt=typeof document<"u"?document:null,ei=lt&&lt.createElement("template"),df={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?lt.createElementNS(uf,e):lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ei.innerHTML=r?`<svg>${e}</svg>`:e;const o=ei.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},mf=Symbol("_vtc");function hf(e,t,n){const r=e[mf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const pf=Symbol("_vod");function gf(e,t,n){const r=e.style,a=ne(n);if(n&&!a){if(t&&!ne(t))for(const i in t)n[i]==null&&Tr(r,i,"");for(const i in n)Tr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),pf in e&&(r.display=i)}}const ti=/\s*!important$/;function Tr(e,t,n){if(R(n))n.forEach(r=>Tr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=vf(e,t);ti.test(n)?e.setProperty(Nt(r),n.replace(ti,""),"important"):e[r]=n}}const ni=["Webkit","Moz","ms"],mr={};function vf(e,t){const n=mr[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return mr[t]=r;r=Vn(r);for(let a=0;a<ni.length;a++){const i=ni[a]+r;if(i in e)return mr[t]=i}return t}const ri="http://www.w3.org/1999/xlink";function bf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ri,t.slice(6,t.length)):e.setAttributeNS(ri,t,n);else{const i=yo(t);n==null||i&&!Hi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function yf(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const c=o==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Hi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function xf(e,t,n,r){e.addEventListener(t,n,r)}function _f(e,t,n,r){e.removeEventListener(t,n,r)}const ai=Symbol("_vei");function wf(e,t,n,r,a=null){const i=e[ai]||(e[ai]={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=kf(t);if(r){const c=i[t]=Cf(r,a);xf(e,o,c,l)}else s&&(_f(e,o,s,l),i[t]=void 0)}}const ii=/(?:Once|Passive|Capture)$/;function kf(e){let t;if(ii.test(e)){t={};let r;for(;r=e.match(ii);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Nt(e.slice(2)),t]}let hr=0;const Af=Promise.resolve(),Of=()=>hr||(Af.then(()=>hr=0),hr=Date.now());function Cf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(Ef(r,n.value),t,5,[r])};return n.value=e,n.attached=Of(),n}function Ef(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const si=/^on[a-z]/,Pf=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?hf(e,r,a):t==="style"?gf(e,n,r):Wn(t)?Yr(t)||wf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sf(e,t,r,a))?yf(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),bf(e,t,r,a))};function Sf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&si.test(t)&&z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||si.test(t)&&ne(n)?!1:t in e}const If=ie({patchProp:Pf},df);let oi;function Tf(){return oi||(oi=Ul(If))}const Mf=(...e)=>{const t=Tf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Nf(r);if(!a)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function Nf(e){return ne(e)?document.querySelector(e):e}const ca=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Rf={props:{color:{type:String,default:"secondary"},title:{type:String,default:"title"},decorations:{type:Number,default:0}}},Lf={class:"p-2 flex items-center border-b-2 gap-2 border-black"},Ff={class:"w-5 h-5 border-2 border-black bg-white rounded-xl"},zf={class:"grow text-center font-bold"},jf={class:"p-2"};function Hf(e,t,n,r,a,i){return Ct(),Kt("div",{class:qn(`bg-[var(--color-${n.color})] slottedBox rounded-xl border-4 border-black shadow-solid`)},[p("div",Lf,[(Ct(!0),Kt(ye,null,Cl(n.decorations,s=>(Ct(),Kt("div",Ff))),256)),p("div",zf,xo(n.title),1)]),p("div",jf,[El(e.$slots,"default")])],2)}const Df=ca(Rf,[["render",Hf]]),$f={data(){return{ps1:"[you@larei.is-a.dev ~]$&nbsp;",terminal:rt(null),input:rt(null),history:rt(null),prompt:rt(null),cmd_history:rt([""]),audio:rt(null),count:rt(0)}},mounted(){this.terminal=this.$parent.$el.children.item(1).children.item(0),this.input=this.$refs.input,this.history=this.$refs.history,this.prompt=this.$refs.prompt,this.history.innerHTML='get started with typing "help"<br>',this.prompt.innerHTML=this.ps1,this.audio=new AudioContext,this.terminal.addEventListener("click",()=>{this.input.focus()}),this.terminal.addEventListener("keydown",e=>{let t=e.which;t==38&&(this.count>-this.cmd_history.length+1?this.count-=1:this.beep(),this.input.value=this.cmd_history.at(this.count)),t==40&&(this.count<0?(this.count+=1,this.input.value=this.cmd_history.at(this.count)):this.beep()),t==8&&this.input.value==""&&this.beep()})},methods:{append_history(e,t){this.history.innerHTML+=t,this.history.innerHTML+="<br>",this.cmd_history.push(e)},beep(){let e=this.audio.createOscillator(),t=this.audio.createGain();e.connect(t),t.connect(this.audio.destination),t.gain.value=.07,e.start(this.audio.currentTime),e.stop(this.audio.currentTime+.1)},cmdin(e){e.key==="Enter"&&(this.history.innerHTML+=this.ps1+this.input.value+"<br>",this.cmdout(this.input.value),this.input.value="",this.terminal.scrollTo(0,this.terminal.scrollHeight))},cmdout(e){if(e!="")if(e=="clear")this.history.innerHTML="",this.append_history(e,"");else if(e=="help")this.append_history(e,"help: guess what?<br>ls: lists directory contents.<br>cat: prints the file content.<br>clear: clears the terminal history.<br>");else if(e=="whoami")this.append_history(e,"you");else if(e=="ls")this.append_history(e,"about_me.md&nbsp;&nbsp;&nbsp;&nbsp;todo_list.md");else if(e.startsWith("cat")){let t=e.split(" ")[1];t?t=="about_me.md"?this.append_history(e,"it's emirhan!<br>emirhan (aka larei), 18 years-old. mathematics student, self-taught developer, open-source enthusiast. programming, music, math. *insert here some lorem ipsum*"):t=="todo_list.md"?this.append_history(e,"- birth<br><br>- learn<br>- explore<br>- study<br>- university<br>- career<br>- work<br>- love<br>- die"):this.append_history(e,"error: file not found."):this.append_history(e,"error: file not specified.")}else this.append_history(e,"command not found: "+e)}}},Uf={class:"font-mono"},Bf={ref:"history",class:"flex items-center text-sm"},Wf={class:"flex items-center text-sm"},Yf={ref:"prompt",id:"prompt"};function Kf(e,t,n,r,a,i){return Ct(),Kt("div",Uf,[p("div",Bf,null,512),p("div",Wf,[p("div",Yf,null,512),p("input",{onKeydown:t[0]||(t[0]=(...s)=>i.cmdin&&i.cmdin(...s)),ref:"input",class:"w-full bg-transparent outline-none",type:"text"},null,544)])])}const Vf=ca($f,[["render",Kf]]),qf={components:{TheWindow:Df,TheTerminal:Vf}},Xf={class:"sm:pt-20 relative max-w-screen-xl mx-auto p-5"},Jf=p("div",{class:"font-black text-3xl content-center"},[ee(" It's "),p("span",{class:"bg-[var(--color-quinary)]"},"ARJUN S!"),ee(" ✨ ")],-1),Zf=p("div",{class:"font-bold text-lg mb-2"},[ee(" Arjun (aka admiralarjun), from Chennai, India. I write and talk about "),p("span",{class:"bg-[var(--color-quaternary)]"},"Cybersecurity"),ee(" and "),p("span",{class:"bg-[var(--color-quaternary)]"},"Pentesting"),ee(". I'm the Founder of "),p("a",{href:"https://hacklido.com"},[p("span",{class:"bg-[var(--color-senary)]"},"hacklido.com")])],-1),Gf={class:"flex max-sm:flex-col align-middle justify-between items-center gap-3"},Qf={class:"flex flex-wrap justify-center text-lg gap-2"},ec={class:"flex items-center justify-center h-12 px-2 font-bold bg-red-300 shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100",href:"https://aspen.eccouncil.org/VerifyBadge?type=certification&a=94PTX2Xd3BcWpeAcZNkVUym9iaEPeU9lgRDOSo2/QBc=",target:"_blank"},tc={class:"flex items-center justify-center h-12 px-2 font-bold bg-lime-300 shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100",href:"https://www.credly.com/badges/1ae54c95-a86e-4b6b-9e59-9245e61b558e/linked_in_profile",target:"_blank"},nc={class:"flex items-center justify-center h-12 px-2 font-bold bg-emerald-300 shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100",href:"https://www.credly.com/badges/37c04d0a-d864-4eb2-9341-c0869e89a2b7/linked_in_profile",target:"_blank"},rc=p("a",{class:"flex items-center justify-center h-12 px-2 font-bold bg-red-400 shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100",href:"https://www.linkedin.com/in/admiralarjun/details/certifications/",target:"_blank"}," More... ⭐ ",-1),ac=p("br",null,null,-1),ic={class:"mb-3"},sc=p("div",{class:"font-bold h-max overflow-y-auto no-scrollbar"},[p("ul",{class:"flex flex-col space-y-2"},[p("li",{class:"flex justify-between"},[p("div",null,[p("h3",{class:"text-xl"},"Product Security Manager"),p("p",{class:"text-sky-950"},"TogetherEd | USA - Remote")]),p("p",{class:"text-right text-slate-300 text-sm"},"2023 - Present")]),p("li",{class:"flex justify-between"},[p("div",null,[p("h3",{class:"text-xl"},"Student Peer Mentor & Teaching Assistant"),p("p",{class:"text-sky-950"},"KL University | IN")]),p("p",{class:"text-right text-slate-300 text-sm"},"2021 - 2024")]),p("li",{class:"flex justify-between"},[p("div",null,[p("h3",{class:"text-xl"},"Founder & CEO, HACKLIDO"),p("p",{class:"text-sky-950"},"Chennai | IN")]),p("p",{class:"text-right text-slate-300 text-sm"},"2020 - Present")])])],-1),oc={class:"flex max-sm:flex-col gap-3 mb-3"},lc={class:"h-max w-full whitespace-wrap p-4"},fc={class:"text-2xl text-purple-600"},cc=p("br",null,null,-1),uc=p("b",{class:"text-lg"},"Web Application, Network, Host, AD, Cloud (Azure / AWS), API, Mobile App, and infrastructure. Code review, DAST and SAST.",-1),dc={class:"text-2xl text-amber-600"},mc=p("br",null,null,-1),hc=p("b",{class:"text-lg"},"(Apache/Nginx) Administration (Hosting, Deployment and maintenance) & Firewall Rules writing (WAF).",-1),pc={class:"text-2xl text-pink-600"},gc=p("br",null,null,-1),vc=p("b",{class:"text-lg"},"Proficient in cybersecurity tools including Burp Suite, SQLMap, Metasploit, Nessus, Nmap, Hashcat, OWASP Zap, Wireshark, Snort, OpenVAS, with expertise in automating these through scripting using Bash and Python.",-1),bc={class:"text-2xl text-rose-600"},yc=p("br",null,null,-1),xc=p("b",{class:"text-lg"},"Good understanding about OWASP, OS internals, AD, Cybersecurity frameworks (NIST, ISO 27001), Governance, Risk management, Compliance (GDPR, PCI DSS, HIPPA, SOC2) & Regulatory (DMCA, FISMA), Industrial best-practices & concepts. ",-1),_c=p("div",{class:"font-bold h-max overflow-y-auto no-scrollbar p-4"},[p("ul",null,[p("li",{class:"relative mb-4"},[p("b",{class:"text-xl"},"The Dark Facets Of LLMs Hallucination and Deception"),p("p",{class:"text-md text-slate-700"},"November 2023 | IEEE TBD")]),p("li",{class:"relative mb-4"},[p("b",{class:"text-xl"},"Strategic Contextualization for Improved Security in Large Language Model-Driven Code Generation"),p("p",{class:"text-md text-slate-700"},"January 2024 | ICETITE'24")]),p("li",{class:"relative mb-4"},[p("b",{class:"text-xl"},"Ransomware Containment for Windows based environment"),p("p",{class:"text-md text-slate-700"},"Work in progress")]),p("li",{class:"relative mb-4"},[p("b",{class:"text-xl"},"Memory foresnics using Machine Learning to combat malwares"),p("p",{class:"text-md text-slate-700"},"Work in progress")])])],-1),wc=p("div",{class:"font-bold h-max overflow-y-auto no-scrollbar"},[p("ul",{class:"flex flex-col space-y-2"},[p("li",{class:"flex justify-between items-start"},[p("div",null,[p("h3",{class:"text-lg"},"hacklido.com - Infosec focused blogging & publishing platform")]),p("p",{class:"text-sky-950 text-sm text-right"},"Laravel + MithrilJs")]),p("li",{class:"flex justify-between items-start"},[p("div",null,[p("h3",{class:"text-lg"},"codelido.com - Developer's community for discussions")]),p("p",{class:"text-sky-950 text-sm text-right"},"Laravel + MithrilJs")]),p("li",{class:"flex justify-between items-start"},[p("div",null,[p("h3",{class:"text-lg"},"dorkit - Automated google dorking tool for pentesters' OSINT")]),p("p",{class:"text-sky-950 text-sm text-right"},"ReactJs + Firebase")]),p("li",{class:"flex justify-between items-start"},[p("div",null,[p("h3",{class:"text-lg"},"Phishing Detection Solution - Kavach 2023 - Cybersecurity Hackathon")]),p("p",{class:"text-sky-950 text-sm text-right"},"Django + ReactJs")]),p("li",{class:"flex justify-between items-start"},[p("div",null,[p("h3",{class:"text-lg"},"IT Log Analyzer - SIH 2023 - India’s Biggest hackathon")]),p("p",{class:"text-sky-950 text-sm text-right"},"Django + ReactJs")]),p("li",{class:"flex justify-between items-start"},[p("div",null,[p("h3",{class:"text-lg"},"Reconator - Automated Web Application Recon Tool")]),p("p",{class:"text-sky-950 text-sm text-right"},"Python + Bash")])])],-1),kc=p("br",null,null,-1),Ac={class:"flex max-sm:flex-col justify-between items-center gap-3"},Oc={class:"flex flex-wrap justify-center text-2xl gap-2"},Cc={class:"flex items-center justify-center w-12 h-12 text-2xl bg-[var(--color-secondary)] shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100",href:"https://github.com/admiralarjun",target:"_blank"},Ec={class:"flex items-center justify-center w-12 h-12 text-2xl bg-[var(--color-tertiary)] shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100",href:"https://www.linkedin.com/in/admiralarjun/",target:"_blank"},Pc={class:"flex items-center justify-center w-12 h-12 text-2xl bg-[var(--color-quinary)] shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100",href:"https://discord.com/users/736528716662046771",target:"_blank"},Sc={class:"flex items-center justify-center w-12 h-12 text-2xl bg-[var(--color-quaternary)] shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100",href:"https://t.me/admiralarjun",target:"_blank"},Ic={class:"flex items-center justify-center w-12 h-12 text-2xl bg-[var(--color-septenary)] shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100",href:"https://x.com/admiralarjun",target:"_blank"},Tc=p("a",{class:"flex items-center justify-center h-12 px-2 font-bold bg-white shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100",href:"https://linkedin.com/in/admiralarjun",target:"_blank"}," Let's get 🤝 connected in LinkedIn ",-1),Mc=p("br",null,null,-1),Nc={class:"flex max-sm:flex-col gap-3 mb-3"},Rc=p("div",{class:"font-bold h-max overflow-y-auto no-scrollbar p-2"},[p("ul",{class:"flex flex-col list-disc"},[p("li",{class:"text-lg mb-4"},"Founded hacklido.com - It has grew into one of the biggest Infosec focused blogging & publishing platform."),p("li",{class:"text-lg mb-4"},"TryHackMe - Top 1% Global Ranking in the leaderboard."),p("li",{class:"text-lg mb-4"},"EC-Council Cybersecurity Career Mentor"),p("li",{class:"text-lg mb-4"},"Technical Director of White Hat Hackers Club"),p("li",{class:"text-lg mb-4"},"Finalist in Smart India Hackathon 2023 - SIH 2023: India’s biggest hackathon")])],-1),Lc=p("iframe",{src:"https://admiralarjun.substack.com/embed",width:"100%",height:"400",style:{background:"none"},frameborder:"0",scrolling:"no"},null,-1);function Fc(e,t,n,r,a,i){const s=Da("TheWindow"),o=Da("font-awesome-icon");return Ct(),Kt("main",Xf,[U(s,{class:"mb-3",color:"septenary",title:"AboutMe.md",decorations:3},{default:Ve(()=>[Jf,Zf]),_:1}),p("div",Gf,[p("div",Qf,[p("a",ec,[U(o,{icon:"fa-solid fa-user-secret"}),ee(" CEH ")]),p("a",tc,[U(o,{icon:"fa-solid fa-network-wired"}),ee(" JNCIA ")]),p("a",nc,[U(o,{icon:"fa-solid fa-globe"}),ee(" ISC2: CC ")])]),rc]),ac,p("div",ic,[U(s,{class:"",decorations:1,color:"quaternary",title:"Experience.txt"},{default:Ve(()=>[sc]),_:1})]),p("div",oc,[U(s,{class:"sm:basis-2/3 sm:w-0",color:"tertiary",title:"Skills.list",decorations:3},{default:Ve(()=>[p("div",lc,[p("ul",null,[p("li",null,[p("b",fc,[U(o,{icon:"fa-solid fa-user-secret"}),ee(" | Penetration Testing")]),ee(),cc,ee(),uc]),p("li",null,[p("b",dc,[U(o,{icon:"fa-solid fa-server"}),ee(" | Web Server")]),ee(),mc,ee(),hc]),p("li",null,[p("b",pc,[U(o,{icon:"fa-solid fa-screwdriver-wrench"}),ee(" | Tooling")]),ee(),gc,ee(),vc]),p("li",null,[p("b",bc,[U(o,{icon:"fa-solid fa-landmark"}),ee(" | Concepts")]),ee(),yc,ee(),xc])])])]),_:1}),U(s,{class:"sm:basis-1/3",decorations:1,color:"senary",title:"Research.pubs"},{default:Ve(()=>[_c]),_:1})]),U(s,{class:"",decorations:2,color:"secondary",title:"Projects.diy"},{default:Ve(()=>[wc]),_:1}),kc,p("div",Ac,[p("div",Oc,[p("a",Cc,[U(o,{icon:"fa-brands fa-github"})]),p("a",Ec,[U(o,{icon:"fa-brands fa-linkedin"})]),p("a",Pc,[U(o,{icon:"fa-brands fa-discord"})]),p("a",Sc,[U(o,{icon:"fa-brands fa-telegram-plane"})]),p("a",Ic,[U(o,{icon:"fa-brands fa-twitter"})])]),Tc]),Mc,p("div",Nc,[U(s,{class:"sm:basis-1/3",decorations:1,color:"senary",title:"Research.pubs"},{default:Ve(()=>[Rc]),_:1}),U(s,{class:"sm:basis-2/3",decorations:1,color:"septenary",title:"Newsletter.subs"},{default:Ve(()=>[Lc]),_:1})])])}const zc=ca(qf,[["render",Fc]]);function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(r){re(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dn(e){"@babel/helpers - typeof";return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dn(e)}function jc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Hc(e,t,n){return t&&fi(e.prototype,t),n&&fi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ua(e,t){return $c(e)||Bc(e,t)||Ps(e,t)||Yc()}function sn(e){return Dc(e)||Uc(e)||Ps(e)||Wc()}function Dc(e){if(Array.isArray(e))return Mr(e)}function $c(e){if(Array.isArray(e))return e}function Uc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Bc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function Ps(e,t){if(e){if(typeof e=="string")return Mr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mr(e,t)}}function Mr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Wc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ci=function(){},da={},Ss={},Is=null,Ts={mark:ci,measure:ci};try{typeof window<"u"&&(da=window),typeof document<"u"&&(Ss=document),typeof MutationObserver<"u"&&(Is=MutationObserver),typeof performance<"u"&&(Ts=performance)}catch{}var Kc=da.navigator||{},ui=Kc.userAgent,di=ui===void 0?"":ui,Ge=da,X=Ss,mi=Is,yn=Ts;Ge.document;var We=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Ms=~di.indexOf("MSIE")||~di.indexOf("Trident/"),xn,_n,wn,kn,An,De="___FONT_AWESOME___",Nr=16,Ns="fa",Rs="svg-inline--fa",ht="data-fa-i2svg",Rr="data-fa-pseudo-element",Vc="data-fa-pseudo-element-pending",ma="data-prefix",ha="data-icon",hi="fontawesome-i2svg",qc="async",Xc=["HTML","HEAD","STYLE","SCRIPT"],Ls=function(){try{return!0}catch{return!1}}(),q="classic",Q="sharp",pa=[q,Q];function on(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var en=on((xn={},re(xn,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),re(xn,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),xn)),tn=on((_n={},re(_n,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),re(_n,Q,{solid:"fass",regular:"fasr",light:"fasl"}),_n)),nn=on((wn={},re(wn,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),re(wn,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),wn)),Jc=on((kn={},re(kn,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),re(kn,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),kn)),Zc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Fs="fa-layers-text",Gc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Qc=on((An={},re(An,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),re(An,Q,{900:"fass",400:"fasr",300:"fasl"}),An)),zs=[1,2,3,4,5,6,7,8,9,10],eu=zs.concat([11,12,13,14,15,16,17,18,19,20]),tu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rn=new Set;Object.keys(tn[q]).map(rn.add.bind(rn));Object.keys(tn[Q]).map(rn.add.bind(rn));var nu=[].concat(pa,sn(rn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(zs.map(function(e){return"".concat(e,"x")})).concat(eu.map(function(e){return"w-".concat(e)})),Vt=Ge.FontAwesomeConfig||{};function ru(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function au(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var iu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];iu.forEach(function(e){var t=ua(e,2),n=t[0],r=t[1],a=au(ru(n));a!=null&&(Vt[r]=a)})}var js={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ns,replacementClass:Rs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Vt.familyPrefix&&(Vt.cssPrefix=Vt.familyPrefix);var Mt=E(E({},js),Vt);Mt.autoReplaceSvg||(Mt.observeMutations=!1);var S={};Object.keys(js).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Mt[e]=n,qt.forEach(function(r){return r(S)})},get:function(){return Mt[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Mt.cssPrefix=t,qt.forEach(function(n){return n(S)})},get:function(){return Mt.cssPrefix}});Ge.FontAwesomeConfig=S;var qt=[];function su(e){return qt.push(e),function(){qt.splice(qt.indexOf(e),1)}}var Ke=Nr,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ou(e){if(!(!e||!We)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var lu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function an(){for(var e=12,t="";e-- >0;)t+=lu[Math.random()*62|0];return t}function Ft(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ga(e){return e.classList?Ft(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Hs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Hs(e[n]),'" ')},"").trim()}function tr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function va(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function cu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function uu(e){var t=e.transform,n=e.width,r=n===void 0?Nr:n,a=e.height,i=a===void 0?Nr:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Ms?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var du=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ds(){var e=Ns,t=Rs,n=S.cssPrefix,r=S.replacementClass,a=du;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var pi=!1;function pr(){S.autoAddCss&&!pi&&(ou(Ds()),pi=!0)}var mu={mixout:function(){return{dom:{css:Ds,insertCss:pr}}},hooks:function(){return{beforeDOMElementCreation:function(){pr()},beforeI2svg:function(){pr()}}}},$e=Ge||{};$e[De]||($e[De]={});$e[De].styles||($e[De].styles={});$e[De].hooks||($e[De].hooks={});$e[De].shims||($e[De].shims=[]);var Oe=$e[De],$s=[],hu=function e(){X.removeEventListener("DOMContentLoaded",e),$n=1,$s.map(function(t){return t()})},$n=!1;We&&($n=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),$n||X.addEventListener("DOMContentLoaded",hu));function pu(e){We&&($n?setTimeout(e,0):$s.push(e))}function ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Hs(e):"<".concat(t," ").concat(fu(r),">").concat(i.map(ln).join(""),"</").concat(t,">")}function gi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var gu=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},gr=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?gu(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<s;l++)c=i[l],d=o(d,t[c],c,t);return d};function vu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Lr(e){var t=vu(e);return t.length===1?t[0].toString(16):null}function bu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Fr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=vi(t);typeof Oe.hooks.addPack=="function"&&!a?Oe.hooks.addPack(e,vi(t)):Oe.styles[e]=E(E({},Oe.styles[e]||{}),i),e==="fas"&&Fr("fa",t)}var On,Cn,En,xt=Oe.styles,yu=Oe.shims,xu=(On={},re(On,q,Object.values(nn[q])),re(On,Q,Object.values(nn[Q])),On),ba=null,Us={},Bs={},Ws={},Ys={},Ks={},_u=(Cn={},re(Cn,q,Object.keys(en[q])),re(Cn,Q,Object.keys(en[Q])),Cn);function wu(e){return~nu.indexOf(e)}function ku(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!wu(a)?a:null}var Vs=function(){var t=function(i){return gr(xt,function(s,o,l){return s[l]=gr(o,i,{}),s},{})};Us=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),Bs=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),Ks=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in xt||S.autoFetchSvg,r=gr(yu,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Ws=r.names,Ys=r.unicodes,ba=nr(S.styleDefault,{family:S.familyDefault})};su(function(e){ba=nr(e.styleDefault,{family:S.familyDefault})});Vs();function ya(e,t){return(Us[e]||{})[t]}function Au(e,t){return(Bs[e]||{})[t]}function ct(e,t){return(Ks[e]||{})[t]}function qs(e){return Ws[e]||{prefix:null,iconName:null}}function Ou(e){var t=Ys[e],n=ya("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qe(){return ba}var xa=function(){return{prefix:null,iconName:null,rest:[]}};function nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=en[r][e],i=tn[r][e]||tn[r][a],s=e in Oe.styles?e:null;return i||s||null}var bi=(En={},re(En,q,Object.keys(nn[q])),re(En,Q,Object.keys(nn[Q])),En);function rr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},re(t,q,"".concat(S.cssPrefix,"-").concat(q)),re(t,Q,"".concat(S.cssPrefix,"-").concat(Q)),t),s=null,o=q;(e.includes(i[q])||e.some(function(c){return bi[q].includes(c)}))&&(o=q),(e.includes(i[Q])||e.some(function(c){return bi[Q].includes(c)}))&&(o=Q);var l=e.reduce(function(c,d){var m=ku(S.cssPrefix,d);if(xt[d]?(d=xu[o].includes(d)?Jc[o][d]:d,s=d,c.prefix=d):_u[o].indexOf(d)>-1?(s=d,c.prefix=nr(d,{family:o})):m?c.iconName=m:d!==S.replacementClass&&d!==i[q]&&d!==i[Q]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var b=s==="fa"?qs(c.iconName):{},k=ct(c.prefix,c.iconName);b.prefix&&(s=null),c.iconName=b.iconName||k||c.iconName,c.prefix=b.prefix||c.prefix,c.prefix==="far"&&!xt.far&&xt.fas&&!S.autoFetchSvg&&(c.prefix="fas")}return c},xa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Q&&(xt.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Qe()||"fas"),l}var Cu=function(){function e(){jc(this,e),this.definitions={}}return Hc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=E(E({},n.definitions[o]||{}),s[o]),Fr(o,s[o]);var l=nn[q][o];l&&Fr(l,s[o]),Vs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,c=s.icon,d=c[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=c)}),n[o][l]=c}),n}}]),e}(),yi=[],_t={},Et={},Eu=Object.keys(Et);function Pu(e,t){var n=t.mixoutsTo;return yi=e,_t={},Object.keys(Et).forEach(function(r){Eu.indexOf(r)===-1&&delete Et[r]}),yi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Dn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){_t[s]||(_t[s]=[]),_t[s].push(i[s])})}r.provides&&r.provides(Et)}),n}function zr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=_t[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=_t[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Et[e]?Et[e].apply(null,t):void 0}function jr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qe();if(t)return t=ct(n,t)||t,gi(Xs.definitions,n,t)||gi(Oe.styles,n,t)}var Xs=new Cu,Su=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,pt("noAuto")},Iu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(pt("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,pu(function(){Mu({autoReplaceSvgRoot:n}),pt("watch",t)})}},Tu={icon:function(t){if(t===null)return null;if(Dn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=nr(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(Zc))){var a=rr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qe(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Qe();return{prefix:i,iconName:ct(i,t)||t}}}},ve={noAuto:Su,config:S,dom:Iu,parse:Tu,library:Xs,findIconDefinition:jr,toHtml:ln},Mu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Oe.styles).length>0||S.autoFetchSvg)&&We&&S.autoReplaceSvg&&ve.dom.i2svg({node:r})};function ar(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(We){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Nu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(va(s)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};a.style=tr(E(E({},i),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ru(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:s}),children:r}]}]}function _a(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,k=b===void 0?!1:b,j=r.found?r:n,N=j.width,D=j.height,A=a==="fak",C=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(be){return m.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(m.classes).join(" "),L={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},I=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};k&&(L.attributes[ht]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(d||an())},children:[l]}),delete L.attributes.title);var W=E(E({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:s,symbol:o,styles:E(E({},I),m.styles)}),se=r.found&&n.found?Ue("generateAbstractMask",W)||{children:[],attributes:{}}:Ue("generateAbstractIcon",W)||{children:[],attributes:{}},oe=se.children,xe=se.attributes;return W.children=oe,W.attributes=xe,o?Ru(W):Nu(W)}function xi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,c=E(E(E({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(c[ht]="");var d=E({},s.styles);va(a)&&(d.transform=uu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=tr(d);m.length>0&&(c.style=m);var b=[];return b.push({tag:"span",attributes:c,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Lu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=tr(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var vr=Oe.styles;function Hr(e){var t=e[0],n=e[1],r=e.slice(4),a=ua(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var Fu={found:!1,width:512,height:512};function zu(e,t){!Ls&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Dr(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=Qe()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=qs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&vr[t]&&vr[t][e]){var s=vr[t][e];return r(Hr(s))}zu(e,t),r(E(E({},Fu),{},{icon:S.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var _i=function(){},$r=S.measurePerformance&&yn&&yn.mark&&yn.measure?yn:{mark:_i,measure:_i},Ut='FA "6.4.2"',ju=function(t){return $r.mark("".concat(Ut," ").concat(t," begins")),function(){return Js(t)}},Js=function(t){$r.mark("".concat(Ut," ").concat(t," ends")),$r.measure("".concat(Ut," ").concat(t),"".concat(Ut," ").concat(t," begins"),"".concat(Ut," ").concat(t," ends"))},wa={begin:ju,end:Js},Mn=function(){};function wi(e){var t=e.getAttribute?e.getAttribute(ht):null;return typeof t=="string"}function Hu(e){var t=e.getAttribute?e.getAttribute(ma):null,n=e.getAttribute?e.getAttribute(ha):null;return t&&n}function Du(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function $u(){if(S.autoReplaceSvg===!0)return Nn.replace;var e=Nn[S.autoReplaceSvg];return e||Nn.replace}function Uu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Bu(e){return X.createElement(e)}function Zs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Uu:Bu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(Zs(s,{ceFn:r}))}),a}function Wu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Nn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Zs(a),n)}),n.getAttribute(ht)===null&&S.keepOriginalSource){var r=X.createComment(Wu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ga(n).indexOf(S.replacementClass))return Nn.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===S.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return ln(o)}).join(`
`);n.setAttribute(ht,""),n.innerHTML=s}};function ki(e){e()}function Gs(e,t){var n=typeof t=="function"?t:Mn;if(e.length===0)n();else{var r=ki;S.mutateApproach===qc&&(r=Ge.requestAnimationFrame||ki),r(function(){var a=$u(),i=wa.begin("mutate");e.map(a),i(),n()})}}var ka=!1;function Qs(){ka=!0}function Ur(){ka=!1}var Un=null;function Ai(e){if(mi&&S.observeMutations){var t=e.treeCallback,n=t===void 0?Mn:t,r=e.nodeCallback,a=r===void 0?Mn:r,i=e.pseudoElementsCallback,s=i===void 0?Mn:i,o=e.observeMutationsRoot,l=o===void 0?X:o;Un=new mi(function(c){if(!ka){var d=Qe();Ft(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!wi(m.addedNodes[0])&&(S.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&wi(m.target)&&~tu.indexOf(m.attributeName))if(m.attributeName==="class"&&Hu(m.target)){var b=rr(ga(m.target)),k=b.prefix,j=b.iconName;m.target.setAttribute(ma,k||d),j&&m.target.setAttribute(ha,j)}else Du(m.target)&&a(m.target)})}}),We&&Un.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Yu(){Un&&Un.disconnect()}function Ku(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Vu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=rr(ga(e));return a.prefix||(a.prefix=Qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Au(a.prefix,e.innerText)||ya(a.prefix,Lr(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function qu(e){var t=Ft(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||an()):(t["aria-hidden"]="true",t.focusable="false")),t}function Xu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Vu(e),r=n.iconName,a=n.prefix,i=n.rest,s=qu(e),o=zr("parseNodeAttributes",{},e),l=t.styleParser?Ku(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var Ju=Oe.styles;function eo(e){var t=S.autoReplaceSvg==="nest"?Oi(e,{styleParser:!1}):Oi(e);return~t.extra.classes.indexOf(Fs)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var et=new Set;pa.map(function(e){et.add("fa-".concat(e))});Object.keys(en[q]).map(et.add.bind(et));Object.keys(en[Q]).map(et.add.bind(et));et=sn(et);function Ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(hi,"-").concat(m))},a=function(m){return n.remove("".concat(hi,"-").concat(m))},i=S.autoFetchSvg?et:pa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Ju));i.includes("fa")||i.push("fa");var s=[".".concat(Fs,":not([").concat(ht,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ht,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Ft(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=wa.begin("onTree"),c=o.reduce(function(d,m){try{var b=eo(m);b&&d.push(b)}catch(k){Ls||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(b){Gs(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function Zu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;eo(e).then(function(n){n&&Gs([n],t)})}function Gu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:jr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:jr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Qu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,c=n.maskId,d=c===void 0?null:c,m=n.title,b=m===void 0?null:m,k=n.titleId,j=k===void 0?null:k,N=n.classes,D=N===void 0?[]:N,A=n.attributes,C=A===void 0?{}:A,L=n.styles,I=L===void 0?{}:L;if(t){var W=t.prefix,se=t.iconName,oe=t.icon;return ar(E({type:"icon"},t),function(){return pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(b?C["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(j||an()):(C["aria-hidden"]="true",C.focusable="false")),_a({icons:{main:Hr(oe),mask:l?Hr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:se,transform:E(E({},Ne),a),symbol:s,title:b,maskId:d,titleId:j,extra:{attributes:C,styles:I,classes:D}})})}},ed={mixout:function(){return{icon:Gu(Qu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ci,n.nodeCallback=Zu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,s=i===void 0?function(){}:i;return Ci(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(k,j){Promise.all([Dr(a,o),d.iconName?Dr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=ua(N,2),A=D[0],C=D[1];k([n,_a({icons:{main:A,mask:C},prefix:o,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:s,extra:b,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=tr(o);l.length>0&&(a.style=l);var c;return va(s)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},td={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ar({type:"layer"},function(){pt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(sn(i)).join(" ")},children:s}]})}}}},nd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return ar({type:"counter",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),Lu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(sn(o))}})})}}}},rd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,s=r.title,o=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,k=b===void 0?{}:b;return ar({type:"text",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),xi({content:n,transform:E(E({},Ne),i),title:o,extra:{attributes:m,styles:k,classes:["".concat(S.cssPrefix,"-layers-text")].concat(sn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Ms){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/c,l=d.height/c}return S.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,xi({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},ad=new RegExp('"',"ug"),Ei=[1105920,1112319];function id(e){var t=e.replace(ad,""),n=bu(t,0),r=n>=Ei[0]&&n<=Ei[1],a=t.length===2?t[0]===t[1]:!1;return{value:Lr(a?t[0]:t),isSecondary:r||a}}function Pi(e,t){var n="".concat(Vc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ft(e.children),s=i.filter(function(oe){return oe.getAttribute(Rr)===t})[0],o=Ge.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Gc),c=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),b=~["Sharp"].indexOf(l[2])?Q:q,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?tn[b][l[2].toLowerCase()]:Qc[b][c],j=id(m),N=j.value,D=j.isSecondary,A=l[0].startsWith("FontAwesome"),C=ya(k,N),L=C;if(A){var I=Ou(N);I.iconName&&I.prefix&&(C=I.iconName,k=I.prefix)}if(C&&!D&&(!s||s.getAttribute(ma)!==k||s.getAttribute(ha)!==L)){e.setAttribute(n,L),s&&e.removeChild(s);var W=Xu(),se=W.extra;se.attributes[Rr]=t,Dr(C,k).then(function(oe){var xe=_a(E(E({},W),{},{icons:{main:oe,mask:xa()},prefix:k,iconName:L,extra:se,watchable:!0})),be=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=xe.map(function(Le){return ln(Le)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function sd(e){return Promise.all([Pi(e,"::before"),Pi(e,"::after")])}function od(e){return e.parentNode!==document.head&&!~Xc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Rr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Si(e){if(We)return new Promise(function(t,n){var r=Ft(e.querySelectorAll("*")).filter(od).map(sd),a=wa.begin("searchPseudoElements");Qs(),Promise.all(r).then(function(){a(),Ur(),t()}).catch(function(){a(),Ur(),n()})})}var ld={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Si,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;S.searchPseudoElements&&Si(a)}}},Ii=!1,fd={mixout:function(){return{dom:{unwatch:function(){Qs(),Ii=!0}}}},hooks:function(){return{bootstrap:function(){Ai(zr("mutationObserverCallbacks",{}))},noAuto:function(){Yu()},watch:function(n){var r=n.observeMutationsRoot;Ii?Ur():Ai(zr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ti=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},cd={mixout:function(){return{parse:{transform:function(n){return Ti(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ti(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},b={transform:"translate(".concat(s/2*-1," -256)")},k={outer:o,inner:m,path:b};return{tag:"g",attributes:E({},k.outer),children:[{tag:"g",attributes:E({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),k.path)}]}]}}}},br={x:0,y:0,width:"100%",height:"100%"};function Mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ud(e){return e.tag==="g"?e.children:[e]}var dd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?rr(a.split(" ").map(function(s){return s.trim()})):xa();return i.prefix||(i.prefix=Qe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,c=i.width,d=i.icon,m=s.width,b=s.icon,k=cu({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:E(E({},br),{},{fill:"white"})},N=d.children?{children:d.children.map(Mi)}:{},D={tag:"g",attributes:E({},k.inner),children:[Mi(E({tag:d.tag,attributes:E(E({},d.attributes),k.path)},N))]},A={tag:"g",attributes:E({},k.outer),children:[D]},C="mask-".concat(o||an()),L="clip-".concat(o||an()),I={tag:"mask",attributes:E(E({},br),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,A]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:ud(b)},I]};return r.push(W,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(C,")")},br)}),{children:r,attributes:a}}}},md={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=E(E({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},hd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},pd=[mu,ed,td,nd,rd,ld,fd,cd,dd,md,hd];Pu(pd,{mixoutsTo:ve});ve.noAuto;ve.config;var gd=ve.library;ve.dom;var Br=ve.parse;ve.findIconDefinition;ve.toHtml;var vd=ve.icon;ve.layer;ve.text;ve.counter;function Ni(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ni(Object(n),!0).forEach(function(r){me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ni(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bn(e){"@babel/helpers - typeof";return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(e)}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function yd(e,t){if(e==null)return{};var n=bd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},to={exports:{}};(function(e){(function(t){var n=function(A,C,L){if(!c(C)||m(C)||b(C)||k(C)||l(C))return C;var I,W=0,se=0;if(d(C))for(I=[],se=C.length;W<se;W++)I.push(n(A,C[W],L));else{I={};for(var oe in C)Object.prototype.hasOwnProperty.call(C,oe)&&(I[A(oe,L)]=n(A,C[oe],L))}return I},r=function(A,C){C=C||{};var L=C.separator||"_",I=C.split||/(?=[A-Z])/;return A.split(I).join(L)},a=function(A){return j(A)?A:(A=A.replace(/[\-_\s]+(.)?/g,function(C,L){return L?L.toUpperCase():""}),A.substr(0,1).toLowerCase()+A.substr(1))},i=function(A){var C=a(A);return C.substr(0,1).toUpperCase()+C.substr(1)},s=function(A,C){return r(A,C).toLowerCase()},o=Object.prototype.toString,l=function(A){return typeof A=="function"},c=function(A){return A===Object(A)},d=function(A){return o.call(A)=="[object Array]"},m=function(A){return o.call(A)=="[object Date]"},b=function(A){return o.call(A)=="[object RegExp]"},k=function(A){return o.call(A)=="[object Boolean]"},j=function(A){return A=A-0,A===A},N=function(A,C){var L=C&&"process"in C?C.process:C;return typeof L!="function"?A:function(I,W){return L(I,A,W)}},D={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(A,C){return n(N(a,C),A)},decamelizeKeys:function(A,C){return n(N(s,C),A,C)},pascalizeKeys:function(A,C){return n(N(i,C),A)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(xd)})(to);var _d=to.exports,wd=["class","style"];function kd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=_d.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Ad(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function no(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return no(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Ad(d);break;case"style":l.style=kd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=yd(n,wd);return of(e.tag,je(je(je({},t),{},{class:a.class,style:je(je({},a.style),s)},a.attrs),o),r)}var ro=!1;try{ro=!0}catch{}function Od(){if(!ro&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function yr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?me({},e,t):{}}function Cd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},me(t,"fa-".concat(e.size),e.size!==null),me(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),me(t,"fa-pull-".concat(e.pull),e.pull!==null),me(t,"fa-swap-opacity",e.swapOpacity),me(t,"fa-bounce",e.bounce),me(t,"fa-shake",e.shake),me(t,"fa-beat",e.beat),me(t,"fa-fade",e.fade),me(t,"fa-beat-fade",e.beatFade),me(t,"fa-flash",e.flash),me(t,"fa-spin-pulse",e.spinPulse),me(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ri(e){if(e&&Bn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Br.icon)return Br.icon(e);if(e===null)return null;if(Bn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ed=ul({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=st(function(){return Ri(t.icon)}),i=st(function(){return yr("classes",Cd(t))}),s=st(function(){return yr("transform",typeof t.transform=="string"?Br.transform(t.transform):t.transform)}),o=st(function(){return yr("mask",Ri(t.mask))}),l=st(function(){return vd(a.value,je(je(je(je({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title}))});Sn(l,function(d){if(!d)return Od("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var c=st(function(){return l.value?no(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Pd={prefix:"fab",iconName:"reddit",icon:[512,512,[],"f1a1","M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"]},Sd={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},Id={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},Td={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Md={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Nd={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},Rd={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]},Ld=Rd,Fd={prefix:"fab",iconName:"mastodon",icon:[448,512,[],"f4f6","M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"]},zd={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},jd={prefix:"fas",iconName:"server",icon:[512,512,[],"f233","M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},Hd={prefix:"fas",iconName:"screwdriver-wrench",icon:[512,512,["tools"],"f7d9","M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},Dd={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},$d={prefix:"fas",iconName:"landmark",icon:[512,512,[127963],"f66f","M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8H32c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9V104l4.4-1.6L240.1 4.2zM64 224h64V416h40V224h64V416h48V224h64V416h40V224h64V420.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512H32c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1V224z"]},Ud={prefix:"fas",iconName:"network-wired",icon:[640,512,[],"f6ff","M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"]};gd.add(Id,Sd,Td,Pd,Md,Fd,Dd,Ud,zd,jd,$d,Hd,Ld,Nd);Mf(zc).component("font-awesome-icon",Ed).mount("#app");
