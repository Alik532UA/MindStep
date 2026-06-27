var _v=Object.defineProperty;var Nd=n=>{throw TypeError(n)};var yv=(n,e,t)=>e in n?_v(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var kt=(n,e,t)=>yv(n,typeof e!="symbol"?e+"":e,t),Ev=(n,e,t)=>e.has(n)||Nd("Cannot "+t);var Nt=(n,e,t)=>(Ev(n,e,"read from private field"),t?t.call(n):e.get(n)),wi=(n,e,t)=>e.has(n)?Nd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);import{l as W,s as de}from"./C7hzWu7F.js";import{o as bn,n as qt,s as Ke,h as cn,r as vv,u as wv,i as it,_ as Iv,g as Dd,d as Tv}from"./RM-e2dow.js";import{aB as oa,aE as aa,J as ca,a9 as la}from"./cc4ydY4x.js";import{_ as Av}from"./Dp1pzeXC.js";import{w as um}from"./D1F_VR5a.js";const Sv=bn({id:Ke(),unlockedAt:qt()}),Rv=bn({unlockedRewards:vv(Ke(),Sv),hasUnseenRewards:cn()}),Cv=()=>{};var Od={};/**
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
 */const hm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const D=function(n,e){if(!n)throw zs(e)},zs=function(n){return new Error("Firebase Database ("+hm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const dm=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},bv=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],c=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,c=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,f=r>>2,p=(r&3)<<4|c>>4;let m=(c&15)<<2|u>>6,T=u&63;l||(T=64,o||(m=64)),s.push(t[f],t[p],t[m],t[T])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(dm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||c==null||u==null||p==null)throw new Pv;const m=r<<2|c>>4;if(s.push(m),u!==64){const T=c<<4&240|u>>2;if(s.push(T),p!==64){const C=u<<6&192|p;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fm=function(n){const e=dm(n);return $l.encodeByteArray(e,!0)},Ro=function(n){return fm(n).replace(/\./g,"")},Co=function(n){try{return $l.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kv(n){return pm(void 0,n)}function pm(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Nv(t)||(n[t]=pm(n[t],e[t]));return n}function Nv(n){return n!=="__proto__"}/**
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
 */function Dv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ov=()=>Dv().__FIREBASE_DEFAULTS__,Mv=()=>{if(typeof process>"u"||typeof Od>"u")return;const n=Od.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Co(n[1]);return e&&JSON.parse(e)},ua=()=>{try{return Cv()||Ov()||Mv()||Vv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},mm=n=>{var e,t;return(t=(e=ua())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},gm=n=>{const e=mm(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},_m=()=>{var n;return(n=ua())==null?void 0:n.config},ym=n=>{var e;return(e=ua())==null?void 0:e[`_${n}`]};/**
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
 */class Ot{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wl(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Em(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ro(JSON.stringify(t)),Ro(JSON.stringify(o)),""].join(".")}const Bi={};function Lv(){const n={prod:[],emulator:[]};for(const e of Object.keys(Bi))Bi[e]?n.emulator.push(e):n.prod.push(e);return n}function xv(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Md=!1;function jl(n,e){if(typeof window>"u"||typeof document>"u"||!Pn(window.location.host)||Bi[n]===e||Bi[n]||Md)return;Bi[n]=e;function t(m){return`__firebase__banner__${m}`}const s="__firebase__banner",r=Lv().prod.length>0;function o(){const m=document.getElementById(s);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,T){m.setAttribute("width","24"),m.setAttribute("id",T),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Md=!0,o()},m}function f(m,T){m.setAttribute("id",T),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=xv(s),T=t("text"),C=document.getElementById(T)||document.createElement("span"),N=t("learnmore"),k=document.getElementById(N)||document.createElement("a"),$=t("preprendIcon"),j=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const Z=m.element;c(Z),f(k,N);const ge=u();l(j,$),Z.append(j,C,k,ge),document.body.appendChild(Z)}r?(C.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function Fv(){var e;const n=(e=ua())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Uv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bv(){const n=Ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qv(){return hm.NODE_ADMIN===!0}function $v(){return!Fv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Im(){try{return typeof indexedDB=="object"}catch{return!1}}function Tm(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}function Wv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const jv="FirebaseError";class _t extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=jv,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rs.prototype.create)}}class rs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Hv(r,s):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new _t(i,c,s)}}function Hv(n,e){return n.replace(Gv,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Gv=/\{\$([^}]+)}/g;/**
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
 */function Ji(n){return JSON.parse(n)}function ke(n){return JSON.stringify(n)}/**
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
 */const Am=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Ji(Co(r[0])||""),t=Ji(Co(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},zv=function(n){const e=Am(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Kv=function(n){const e=Am(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Pt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ms(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function bo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Po(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function _n(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Vd(r)&&Vd(o)){if(!_n(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Vd(n){return n!==null&&typeof n=="object"}/**
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
 */function Ks(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Oi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Mi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class Qv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)s[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const m=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],c=this.chain_[3],l=this.chain_[4],u,f;for(let p=0;p<80;p++){p<40?p<20?(u=c^r&(o^c),f=1518500249):(u=r^o^c,f=1859775393):p<60?(u=r&o|c&(r|o),f=2400959708):(u=r^o^c,f=3395469782);const m=(i<<5|i>>>27)+u+l+f+s[p]&4294967295;l=c,c=o,o=(r<<30|r>>>2)&4294967295,r=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Yv(n,e){const t=new Xv(n,e);return t.subscribe.bind(t)}class Xv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Jv(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Ec),i.error===void 0&&(i.error=Ec),i.complete===void 0&&(i.complete=Ec);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ec(){}function Vs(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Zv=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,D(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ha=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const ew=1e3,tw=2,nw=14400*1e3,sw=.5;function Ld(n,e=ew,t=tw){const s=e*Math.pow(t,n),i=Math.round(sw*s*(Math.random()-.5)*2);return Math.min(nw,s+i)}/**
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
 */function te(n){return n&&n._delegate?n._delegate:n}class lt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qn="[DEFAULT]";/**
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
 */class iw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Ot;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ow(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rw(n){return n===qn?void 0:n}function ow(n){return n.instantiationMode==="EAGER"}/**
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
 */class aw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new iw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const cw={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},lw=Q.INFO,uw={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},hw=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=uw[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ir{constructor(e){this.name=e,this._logLevel=lw,this._logHandler=hw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const dw=(n,e)=>e.some(t=>n instanceof t);let xd,Fd;function fw(){return xd||(xd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pw(){return Fd||(Fd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sm=new WeakMap,zc=new WeakMap,Rm=new WeakMap,vc=new WeakMap,Gl=new WeakMap;function mw(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(un(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Sm.set(t,n)}).catch(()=>{}),Gl.set(e,n),e}function gw(n){if(zc.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});zc.set(n,e)}let Kc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Rm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return un(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _w(n){Kc=n(Kc)}function yw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(wc(this),e,...t);return Rm.set(s,e.sort?e.sort():[e]),un(s)}:pw().includes(n)?function(...e){return n.apply(wc(this),e),un(Sm.get(this))}:function(...e){return un(n.apply(wc(this),e))}}function Ew(n){return typeof n=="function"?yw(n):(n instanceof IDBTransaction&&gw(n),dw(n,fw())?new Proxy(n,Kc):n)}function un(n){if(n instanceof IDBRequest)return mw(n);if(vc.has(n))return vc.get(n);const e=Ew(n);return e!==n&&(vc.set(n,e),Gl.set(e,n)),e}const wc=n=>Gl.get(n);function Cm(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),c=un(o);return s&&o.addEventListener("upgradeneeded",l=>{s(un(o.result),l.oldVersion,l.newVersion,un(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const vw=["get","getKey","getAll","getAllKeys","count"],ww=["put","add","delete","clear"],Ic=new Map;function Ud(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ic.get(e))return Ic.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=ww.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||vw.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),i&&l.done]))[0]};return Ic.set(e,r),r}_w(n=>({...n,get:(e,t,s)=>Ud(e,t)||n.get(e,t,s),has:(e,t)=>!!Ud(e,t)||n.has(e,t)}));/**
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
 */class Iw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Tw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Tw(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qc="@firebase/app",Bd="0.14.6";/**
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
 */const Ht=new Ir("@firebase/app"),Aw="@firebase/app-compat",Sw="@firebase/analytics-compat",Rw="@firebase/analytics",Cw="@firebase/app-check-compat",bw="@firebase/app-check",Pw="@firebase/auth",kw="@firebase/auth-compat",Nw="@firebase/database",Dw="@firebase/data-connect",Ow="@firebase/database-compat",Mw="@firebase/functions",Vw="@firebase/functions-compat",Lw="@firebase/installations",xw="@firebase/installations-compat",Fw="@firebase/messaging",Uw="@firebase/messaging-compat",Bw="@firebase/performance",qw="@firebase/performance-compat",$w="@firebase/remote-config",Ww="@firebase/remote-config-compat",jw="@firebase/storage",Hw="@firebase/storage-compat",Gw="@firebase/firestore",zw="@firebase/ai",Kw="@firebase/firestore-compat",Qw="firebase",Yw="12.6.0";/**
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
 */const Yc="[DEFAULT]",Xw={[Qc]:"fire-core",[Aw]:"fire-core-compat",[Rw]:"fire-analytics",[Sw]:"fire-analytics-compat",[bw]:"fire-app-check",[Cw]:"fire-app-check-compat",[Pw]:"fire-auth",[kw]:"fire-auth-compat",[Nw]:"fire-rtdb",[Dw]:"fire-data-connect",[Ow]:"fire-rtdb-compat",[Mw]:"fire-fn",[Vw]:"fire-fn-compat",[Lw]:"fire-iid",[xw]:"fire-iid-compat",[Fw]:"fire-fcm",[Uw]:"fire-fcm-compat",[Bw]:"fire-perf",[qw]:"fire-perf-compat",[$w]:"fire-rc",[Ww]:"fire-rc-compat",[jw]:"fire-gcs",[Hw]:"fire-gcs-compat",[Gw]:"fire-fst",[Kw]:"fire-fst-compat",[zw]:"fire-vertex","fire-js":"fire-js",[Qw]:"fire-js-all"};/**
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
 */const Zi=new Map,Jw=new Map,Xc=new Map;function qd(n,e){try{n.container.addComponent(e)}catch(t){Ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pt(n){const e=n.name;if(Xc.has(e))return Ht.debug(`There were multiple attempts to register component ${e}.`),!1;Xc.set(e,n);for(const t of Zi.values())qd(t,n);for(const t of Jw.values())qd(t,n);return!0}function Qs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Zw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hn=new rs("app","Firebase",Zw);/**
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
 */class eI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
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
 */const os=Yw;function bm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Yc,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw hn.create("bad-app-name",{appName:String(i)});if(t||(t=_m()),!t)throw hn.create("no-options");const r=Zi.get(i);if(r){if(_n(t,r.options)&&_n(s,r.config))return r;throw hn.create("duplicate-app",{appName:i})}const o=new aw(i);for(const l of Xc.values())o.addComponent(l);const c=new eI(t,s,o);return Zi.set(i,c),c}function zl(n=Yc){const e=Zi.get(n);if(!e&&n===Yc&&_m())return bm();if(!e)throw hn.create("no-app",{appName:n});return e}function tI(){return Array.from(Zi.values())}function Xe(n,e,t){let s=Xw[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ht.warn(o.join(" "));return}pt(new lt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const nI="firebase-heartbeat-database",sI=1,er="firebase-heartbeat-store";let Tc=null;function Pm(){return Tc||(Tc=Cm(nI,sI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(er)}catch(t){console.warn(t)}}}}).catch(n=>{throw hn.create("idb-open",{originalErrorMessage:n.message})})),Tc}async function iI(n){try{const t=(await Pm()).transaction(er),s=await t.objectStore(er).get(km(n));return await t.done,s}catch(e){if(e instanceof _t)Ht.warn(e.message);else{const t=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ht.warn(t.message)}}}async function $d(n,e){try{const s=(await Pm()).transaction(er,"readwrite");await s.objectStore(er).put(e,km(n)),await s.done}catch(t){if(t instanceof _t)Ht.warn(t.message);else{const s=hn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ht.warn(s.message)}}}function km(n){return`${n.name}!${n.options.appId}`}/**
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
 */const rI=1024,oI=30;class aI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>oI){const o=uI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ht.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wd(),{heartbeatsToSend:s,unsentEntries:i}=cI(this._heartbeatsCache.heartbeats),r=Ro(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Ht.warn(t),""}}}function Wd(){return new Date().toISOString().substring(0,10)}function cI(n,e=rI){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),jd(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),jd(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class lI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Im()?Tm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await iI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $d(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $d(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jd(n){return Ro(JSON.stringify({version:2,heartbeats:n})).length}function uI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function hI(n){pt(new lt("platform-logger",e=>new Iw(e),"PRIVATE")),pt(new lt("heartbeat",e=>new aI(e),"PRIVATE")),Xe(Qc,Bd,n),Xe(Qc,Bd,"esm2020"),Xe("fire-js","")}hI("");var Hd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dn,Nm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function E(){}E.prototype=_.prototype,w.F=_.prototype,w.prototype=new E,w.prototype.constructor=w,w.D=function(I,v,S){for(var y=Array(arguments.length-2),je=2;je<arguments.length;je++)y[je-2]=arguments[je];return _.prototype[v].apply(I,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,E){E||(E=0);const I=Array(16);if(typeof _=="string")for(var v=0;v<16;++v)I[v]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(v=0;v<16;++v)I[v]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=w.g[0],E=w.g[1],v=w.g[2];let S=w.g[3],y;y=_+(S^E&(v^S))+I[0]+3614090360&4294967295,_=E+(y<<7&4294967295|y>>>25),y=S+(v^_&(E^v))+I[1]+3905402710&4294967295,S=_+(y<<12&4294967295|y>>>20),y=v+(E^S&(_^E))+I[2]+606105819&4294967295,v=S+(y<<17&4294967295|y>>>15),y=E+(_^v&(S^_))+I[3]+3250441966&4294967295,E=v+(y<<22&4294967295|y>>>10),y=_+(S^E&(v^S))+I[4]+4118548399&4294967295,_=E+(y<<7&4294967295|y>>>25),y=S+(v^_&(E^v))+I[5]+1200080426&4294967295,S=_+(y<<12&4294967295|y>>>20),y=v+(E^S&(_^E))+I[6]+2821735955&4294967295,v=S+(y<<17&4294967295|y>>>15),y=E+(_^v&(S^_))+I[7]+4249261313&4294967295,E=v+(y<<22&4294967295|y>>>10),y=_+(S^E&(v^S))+I[8]+1770035416&4294967295,_=E+(y<<7&4294967295|y>>>25),y=S+(v^_&(E^v))+I[9]+2336552879&4294967295,S=_+(y<<12&4294967295|y>>>20),y=v+(E^S&(_^E))+I[10]+4294925233&4294967295,v=S+(y<<17&4294967295|y>>>15),y=E+(_^v&(S^_))+I[11]+2304563134&4294967295,E=v+(y<<22&4294967295|y>>>10),y=_+(S^E&(v^S))+I[12]+1804603682&4294967295,_=E+(y<<7&4294967295|y>>>25),y=S+(v^_&(E^v))+I[13]+4254626195&4294967295,S=_+(y<<12&4294967295|y>>>20),y=v+(E^S&(_^E))+I[14]+2792965006&4294967295,v=S+(y<<17&4294967295|y>>>15),y=E+(_^v&(S^_))+I[15]+1236535329&4294967295,E=v+(y<<22&4294967295|y>>>10),y=_+(v^S&(E^v))+I[1]+4129170786&4294967295,_=E+(y<<5&4294967295|y>>>27),y=S+(E^v&(_^E))+I[6]+3225465664&4294967295,S=_+(y<<9&4294967295|y>>>23),y=v+(_^E&(S^_))+I[11]+643717713&4294967295,v=S+(y<<14&4294967295|y>>>18),y=E+(S^_&(v^S))+I[0]+3921069994&4294967295,E=v+(y<<20&4294967295|y>>>12),y=_+(v^S&(E^v))+I[5]+3593408605&4294967295,_=E+(y<<5&4294967295|y>>>27),y=S+(E^v&(_^E))+I[10]+38016083&4294967295,S=_+(y<<9&4294967295|y>>>23),y=v+(_^E&(S^_))+I[15]+3634488961&4294967295,v=S+(y<<14&4294967295|y>>>18),y=E+(S^_&(v^S))+I[4]+3889429448&4294967295,E=v+(y<<20&4294967295|y>>>12),y=_+(v^S&(E^v))+I[9]+568446438&4294967295,_=E+(y<<5&4294967295|y>>>27),y=S+(E^v&(_^E))+I[14]+3275163606&4294967295,S=_+(y<<9&4294967295|y>>>23),y=v+(_^E&(S^_))+I[3]+4107603335&4294967295,v=S+(y<<14&4294967295|y>>>18),y=E+(S^_&(v^S))+I[8]+1163531501&4294967295,E=v+(y<<20&4294967295|y>>>12),y=_+(v^S&(E^v))+I[13]+2850285829&4294967295,_=E+(y<<5&4294967295|y>>>27),y=S+(E^v&(_^E))+I[2]+4243563512&4294967295,S=_+(y<<9&4294967295|y>>>23),y=v+(_^E&(S^_))+I[7]+1735328473&4294967295,v=S+(y<<14&4294967295|y>>>18),y=E+(S^_&(v^S))+I[12]+2368359562&4294967295,E=v+(y<<20&4294967295|y>>>12),y=_+(E^v^S)+I[5]+4294588738&4294967295,_=E+(y<<4&4294967295|y>>>28),y=S+(_^E^v)+I[8]+2272392833&4294967295,S=_+(y<<11&4294967295|y>>>21),y=v+(S^_^E)+I[11]+1839030562&4294967295,v=S+(y<<16&4294967295|y>>>16),y=E+(v^S^_)+I[14]+4259657740&4294967295,E=v+(y<<23&4294967295|y>>>9),y=_+(E^v^S)+I[1]+2763975236&4294967295,_=E+(y<<4&4294967295|y>>>28),y=S+(_^E^v)+I[4]+1272893353&4294967295,S=_+(y<<11&4294967295|y>>>21),y=v+(S^_^E)+I[7]+4139469664&4294967295,v=S+(y<<16&4294967295|y>>>16),y=E+(v^S^_)+I[10]+3200236656&4294967295,E=v+(y<<23&4294967295|y>>>9),y=_+(E^v^S)+I[13]+681279174&4294967295,_=E+(y<<4&4294967295|y>>>28),y=S+(_^E^v)+I[0]+3936430074&4294967295,S=_+(y<<11&4294967295|y>>>21),y=v+(S^_^E)+I[3]+3572445317&4294967295,v=S+(y<<16&4294967295|y>>>16),y=E+(v^S^_)+I[6]+76029189&4294967295,E=v+(y<<23&4294967295|y>>>9),y=_+(E^v^S)+I[9]+3654602809&4294967295,_=E+(y<<4&4294967295|y>>>28),y=S+(_^E^v)+I[12]+3873151461&4294967295,S=_+(y<<11&4294967295|y>>>21),y=v+(S^_^E)+I[15]+530742520&4294967295,v=S+(y<<16&4294967295|y>>>16),y=E+(v^S^_)+I[2]+3299628645&4294967295,E=v+(y<<23&4294967295|y>>>9),y=_+(v^(E|~S))+I[0]+4096336452&4294967295,_=E+(y<<6&4294967295|y>>>26),y=S+(E^(_|~v))+I[7]+1126891415&4294967295,S=_+(y<<10&4294967295|y>>>22),y=v+(_^(S|~E))+I[14]+2878612391&4294967295,v=S+(y<<15&4294967295|y>>>17),y=E+(S^(v|~_))+I[5]+4237533241&4294967295,E=v+(y<<21&4294967295|y>>>11),y=_+(v^(E|~S))+I[12]+1700485571&4294967295,_=E+(y<<6&4294967295|y>>>26),y=S+(E^(_|~v))+I[3]+2399980690&4294967295,S=_+(y<<10&4294967295|y>>>22),y=v+(_^(S|~E))+I[10]+4293915773&4294967295,v=S+(y<<15&4294967295|y>>>17),y=E+(S^(v|~_))+I[1]+2240044497&4294967295,E=v+(y<<21&4294967295|y>>>11),y=_+(v^(E|~S))+I[8]+1873313359&4294967295,_=E+(y<<6&4294967295|y>>>26),y=S+(E^(_|~v))+I[15]+4264355552&4294967295,S=_+(y<<10&4294967295|y>>>22),y=v+(_^(S|~E))+I[6]+2734768916&4294967295,v=S+(y<<15&4294967295|y>>>17),y=E+(S^(v|~_))+I[13]+1309151649&4294967295,E=v+(y<<21&4294967295|y>>>11),y=_+(v^(E|~S))+I[4]+4149444226&4294967295,_=E+(y<<6&4294967295|y>>>26),y=S+(E^(_|~v))+I[11]+3174756917&4294967295,S=_+(y<<10&4294967295|y>>>22),y=v+(_^(S|~E))+I[2]+718787259&4294967295,v=S+(y<<15&4294967295|y>>>17),y=E+(S^(v|~_))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+v&4294967295,w.g[3]=w.g[3]+S&4294967295}s.prototype.v=function(w,_){_===void 0&&(_=w.length);const E=_-this.blockSize,I=this.C;let v=this.h,S=0;for(;S<_;){if(v==0)for(;S<=E;)i(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<_;)if(I[v++]=w.charCodeAt(S++),v==this.blockSize){i(this,I),v=0;break}}else for(;S<_;)if(I[v++]=w[S++],v==this.blockSize){i(this,I),v=0;break}}this.h=v,this.o+=_},s.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var E=w.length-8;E<w.length;++E)w[E]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,E=0;E<4;++E)for(let I=0;I<32;I+=8)w[_++]=this.g[E]>>>I&255;return w};function r(w,_){var E=c;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=_(w)}function o(w,_){this.h=_;const E=[];let I=!0;for(let v=w.length-1;v>=0;v--){const S=w[v]|0;I&&S==_||(E[v]=S,I=!1)}this.g=E}var c={};function l(w){return-128<=w&&w<128?r(w,function(_){return new o([_|0],_<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return k(u(-w));const _=[];let E=1;for(let I=0;w>=E;I++)_[I]=w/E|0,E*=4294967296;return new o(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return k(f(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=u(Math.pow(_,8));let I=p;for(let S=0;S<w.length;S+=8){var v=Math.min(8,w.length-S);const y=parseInt(w.substring(S,S+v),_);v<8?(v=u(Math.pow(_,v)),I=I.j(v).add(u(y))):(I=I.j(E),I=I.add(u(y)))}return I}var p=l(0),m=l(1),T=l(16777216);n=o.prototype,n.m=function(){if(N(this))return-k(this).m();let w=0,_=1;for(let E=0;E<this.g.length;E++){const I=this.i(E);w+=(I>=0?I:4294967296+I)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(N(this))return"-"+k(this).toString(w);const _=u(Math.pow(w,6));var E=this;let I="";for(;;){const v=ge(E,_).g;E=$(E,v.j(_));let S=((E.g.length>0?E.g[0]:E.h)>>>0).toString(w);if(E=v,C(E))return S+I;for(;S.length<6;)S="0"+S;I=S+I}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function N(w){return w.h==-1}n.l=function(w){return w=$(this,w),N(w)?-1:C(w)?0:1};function k(w){const _=w.g.length,E=[];for(let I=0;I<_;I++)E[I]=~w.g[I];return new o(E,~w.h).add(m)}n.abs=function(){return N(this)?k(this):this},n.add=function(w){const _=Math.max(this.g.length,w.g.length),E=[];let I=0;for(let v=0;v<=_;v++){let S=I+(this.i(v)&65535)+(w.i(v)&65535),y=(S>>>16)+(this.i(v)>>>16)+(w.i(v)>>>16);I=y>>>16,S&=65535,y&=65535,E[v]=y<<16|S}return new o(E,E[E.length-1]&-2147483648?-1:0)};function $(w,_){return w.add(k(_))}n.j=function(w){if(C(this)||C(w))return p;if(N(this))return N(w)?k(this).j(k(w)):k(k(this).j(w));if(N(w))return k(this.j(k(w)));if(this.l(T)<0&&w.l(T)<0)return u(this.m()*w.m());const _=this.g.length+w.g.length,E=[];for(var I=0;I<2*_;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(let v=0;v<w.g.length;v++){const S=this.i(I)>>>16,y=this.i(I)&65535,je=w.i(v)>>>16,Vn=w.i(v)&65535;E[2*I+2*v]+=y*Vn,j(E,2*I+2*v),E[2*I+2*v+1]+=S*Vn,j(E,2*I+2*v+1),E[2*I+2*v+1]+=y*je,j(E,2*I+2*v+1),E[2*I+2*v+2]+=S*je,j(E,2*I+2*v+2)}for(w=0;w<_;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=_;w<2*_;w++)E[w]=0;return new o(E,0)};function j(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function Z(w,_){this.g=w,this.h=_}function ge(w,_){if(C(_))throw Error("division by zero");if(C(w))return new Z(p,p);if(N(w))return _=ge(k(w),_),new Z(k(_.g),k(_.h));if(N(_))return _=ge(w,k(_)),new Z(k(_.g),_.h);if(w.g.length>30){if(N(w)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=_;I.l(w)<=0;)E=et(E),I=et(I);var v=Te(E,1),S=Te(I,1);for(I=Te(I,2),E=Te(E,2);!C(I);){var y=S.add(I);y.l(w)<=0&&(v=v.add(E),S=y),I=Te(I,1),E=Te(E,1)}return _=$(w,v.j(_)),new Z(v,_)}for(v=p;w.l(_)>=0;){for(E=Math.max(1,Math.floor(w.m()/_.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),S=u(E),y=S.j(_);N(y)||y.l(w)>0;)E-=I,S=u(E),y=S.j(_);C(S)&&(S=m),v=v.add(S),w=$(w,y)}return new Z(v,w)}n.B=function(w){return ge(this,w).h},n.and=function(w){const _=Math.max(this.g.length,w.g.length),E=[];for(let I=0;I<_;I++)E[I]=this.i(I)&w.i(I);return new o(E,this.h&w.h)},n.or=function(w){const _=Math.max(this.g.length,w.g.length),E=[];for(let I=0;I<_;I++)E[I]=this.i(I)|w.i(I);return new o(E,this.h|w.h)},n.xor=function(w){const _=Math.max(this.g.length,w.g.length),E=[];for(let I=0;I<_;I++)E[I]=this.i(I)^w.i(I);return new o(E,this.h^w.h)};function et(w){const _=w.g.length+1,E=[];for(let I=0;I<_;I++)E[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(E,w.h)}function Te(w,_){const E=_>>5;_%=32;const I=w.g.length-E,v=[];for(let S=0;S<I;S++)v[S]=_>0?w.i(S+E)>>>_|w.i(S+E+1)<<32-_:w.i(S+E);return new o(v,w.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Nm=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,dn=o}).apply(typeof Hd<"u"?Hd:typeof self<"u"?self:typeof window<"u"?window:{});var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dm,Vi,Om,po,Jc,Mm,Vm,Lm;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof to=="object"&&to];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function i(a,h){if(h)e:{var d=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var A=a[g];if(!(A in d))break e;d=d[A]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,A,R){for(var O=Array(arguments.length-2),H=2;H<arguments.length;H++)O[H-2]=arguments[H];return h.prototype[A].apply(g,O)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function T(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function C(a,h){for(let g=1;g<arguments.length;g++){const A=arguments[g];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=a.length||0;const R=A.length||0;a.length=d+R;for(let O=0;O<R;O++)a[d+O]=A[O]}else a.push(A)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){o.setTimeout(()=>{throw a},0)}function $(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class j{constructor(){this.h=this.g=null}add(h,d){const g=Z.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Z=new N(()=>new ge,a=>a.reset());class ge{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let et,Te=!1,w=new j,_=()=>{const a=Promise.resolve(void 0);et=()=>{a.then(E)}};function E(){for(var a;a=$();){try{a.h.call(a.g)}catch(d){k(d)}var h=Z;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}Te=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function je(a,h){v.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(je,v),je.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&je.Z.h.call(this)},je.prototype.h=function(){je.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vn="closure_listenable_"+(Math.random()*1e6|0),UE=0;function BE(a,h,d,g,A){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=A,this.key=++UE,this.da=this.fa=!1}function Br(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function qr(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function qE(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function kh(a){const h={};for(const d in a)h[d]=a[d];return h}const Nh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dh(a,h){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)a[d]=g[d];for(let R=0;R<Nh.length;R++)d=Nh[R],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function $r(a){this.src=a,this.g={},this.h=0}$r.prototype.add=function(a,h,d,g,A){const R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);const O=Ya(a,h,g,A);return O>-1?(h=a[O],d||(h.fa=!1)):(h=new BE(h,this.src,R,!!g,A),h.fa=d,a.push(h)),h};function Qa(a,h){const d=h.type;if(d in a.g){var g=a.g[d],A=Array.prototype.indexOf.call(g,h,void 0),R;(R=A>=0)&&Array.prototype.splice.call(g,A,1),R&&(Br(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Ya(a,h,d,g){for(let A=0;A<a.length;++A){const R=a[A];if(!R.da&&R.listener==h&&R.capture==!!d&&R.ha==g)return A}return-1}var Xa="closure_lm_"+(Math.random()*1e6|0),Ja={};function Oh(a,h,d,g,A){if(Array.isArray(h)){for(let R=0;R<h.length;R++)Oh(a,h[R],d,g,A);return null}return d=Lh(d),a&&a[Vn]?a.J(h,d,c(g)?!!g.capture:!1,A):$E(a,h,d,!1,g,A)}function $E(a,h,d,g,A,R){if(!h)throw Error("Invalid event type");const O=c(A)?!!A.capture:!!A;let H=ec(a);if(H||(a[Xa]=H=new $r(a)),d=H.add(h,d,g,O,R),d.proxy)return d;if(g=WE(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)S||(A=O),A===void 0&&(A=!1),a.addEventListener(h.toString(),g,A);else if(a.attachEvent)a.attachEvent(Vh(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function WE(){function a(d){return h.call(a.src,a.listener,d)}const h=jE;return a}function Mh(a,h,d,g,A){if(Array.isArray(h))for(var R=0;R<h.length;R++)Mh(a,h[R],d,g,A);else g=c(g)?!!g.capture:!!g,d=Lh(d),a&&a[Vn]?(a=a.i,R=String(h).toString(),R in a.g&&(h=a.g[R],d=Ya(h,d,g,A),d>-1&&(Br(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[R],a.h--)))):a&&(a=ec(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ya(h,d,g,A)),(d=a>-1?h[a]:null)&&Za(d))}function Za(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Vn])Qa(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(Vh(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=ec(h))?(Qa(d,a),d.h==0&&(d.src=null,h[Xa]=null)):Br(a)}}}function Vh(a){return a in Ja?Ja[a]:Ja[a]="on"+a}function jE(a,h){if(a.da)a=!0;else{h=new je(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&Za(a),a=d.call(g,h)}return a}function ec(a){return a=a[Xa],a instanceof $r?a:null}var tc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Lh(a){return typeof a=="function"?a:(a[tc]||(a[tc]=function(h){return a.handleEvent(h)}),a[tc])}function Ve(){I.call(this),this.i=new $r(this),this.M=this,this.G=null}p(Ve,I),Ve.prototype[Vn]=!0,Ve.prototype.removeEventListener=function(a,h,d,g){Mh(this,a,h,d,g)};function qe(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new v(h,a);else if(h instanceof v)h.target=h.target||a;else{var A=h;h=new v(g,a),Dh(h,A)}A=!0;let R,O;if(d)for(O=d.length-1;O>=0;O--)R=h.g=d[O],A=Wr(R,g,!0,h)&&A;if(R=h.g=a,A=Wr(R,g,!0,h)&&A,A=Wr(R,g,!1,h)&&A,d)for(O=0;O<d.length;O++)R=h.g=d[O],A=Wr(R,g,!1,h)&&A}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)Br(d[g]);delete a.g[h],a.h--}}this.G=null},Ve.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},Ve.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Wr(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let A=!0;for(let R=0;R<h.length;++R){const O=h[R];if(O&&!O.da&&O.capture==d){const H=O.listener,Ae=O.ha||O.src;O.fa&&Qa(a.i,O),A=H.call(Ae,g)!==!1&&A}}return A&&!g.defaultPrevented}function HE(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function xh(a){a.g=HE(()=>{a.g=null,a.i&&(a.i=!1,xh(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class GE extends I{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:xh(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ri(a){I.call(this),this.h=a,this.g={}}p(ri,I);var Fh=[];function Uh(a){qr(a.g,function(h,d){this.g.hasOwnProperty(d)&&Za(h)},a),a.g={}}ri.prototype.N=function(){ri.Z.N.call(this),Uh(this)},ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nc=o.JSON.stringify,zE=o.JSON.parse,KE=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Bh(){}function qh(){}var oi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function sc(){v.call(this,"d")}p(sc,v);function ic(){v.call(this,"c")}p(ic,v);var Ln={},$h=null;function jr(){return $h=$h||new Ve}Ln.Ia="serverreachability";function Wh(a){v.call(this,Ln.Ia,a)}p(Wh,v);function ai(a){const h=jr();qe(h,new Wh(h))}Ln.STAT_EVENT="statevent";function jh(a,h){v.call(this,Ln.STAT_EVENT,a),this.stat=h}p(jh,v);function $e(a){const h=jr();qe(h,new jh(h,a))}Ln.Ja="timingevent";function Hh(a,h){v.call(this,Ln.Ja,a),this.size=h}p(Hh,v);function ci(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function li(){this.g=!0}li.prototype.ua=function(){this.g=!1};function QE(a,h,d,g,A,R){a.info(function(){if(a.g)if(R){var O="",H=R.split("&");for(let ie=0;ie<H.length;ie++){var Ae=H[ie].split("=");if(Ae.length>1){const Re=Ae[0];Ae=Ae[1];const vt=Re.split("_");O=vt.length>=2&&vt[1]=="type"?O+(Re+"="+Ae+"&"):O+(Re+"=redacted&")}}}else O=null;else O=R;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+h+`
`+d+`
`+O})}function YE(a,h,d,g,A,R,O){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+h+`
`+d+`
`+R+" "+O})}function hs(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+JE(a,d)+(g?" "+g:"")})}function XE(a,h){a.info(function(){return"TIMEOUT: "+h})}li.prototype.info=function(){};function JE(a,h){if(!a.g)return h;if(!h)return null;try{const R=JSON.parse(h);if(R){for(a=0;a<R.length;a++)if(Array.isArray(R[a])){var d=R[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let O=1;O<g.length;O++)g[O]=""}}}}return nc(R)}catch{return h}}var Hr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},zh;function rc(){}p(rc,Bh),rc.prototype.g=function(){return new XMLHttpRequest},zh=new rc;function ui(a){return encodeURIComponent(String(a))}function ZE(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function en(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new ri(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Kh}function Kh(){this.i=null,this.g="",this.h=!1}var Qh={},oc={};function ac(a,h,d){a.M=1,a.A=zr(Et(h)),a.u=d,a.R=!0,Yh(a,null)}function Yh(a,h){a.F=Date.now(),Gr(a),a.B=Et(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),ld(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Kh,a.g=Cd(a.j,d?h:null,!a.u),a.P>0&&(a.O=new GE(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(Fh[0]=A.toString()),A=Fh);for(let R=0;R<A.length;R++){const O=Oh(d,A[R],g||h.handleEvent,!1,h.h||h);if(!O)break;h.g[O.key]=O}h=a.J?kh(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ai(),QE(a.i,a.v,a.B,a.l,a.S,a.u)}en.prototype.ba=function(a){a=a.target;const h=this.O;h&&sn(a)==3?h.j():this.Y(a)},en.prototype.Y=function(a){try{if(a==this.g)e:{const H=sn(this.g),Ae=this.g.ya(),ie=this.g.ca();if(!(H<3)&&(H!=3||this.g&&(this.h.h||this.g.la()||gd(this.g)))){this.K||H!=4||Ae==7||(Ae==8||ie<=0?ai(3):ai(2)),cc(this);var h=this.g.ca();this.X=h;var d=ev(this);if(this.o=h==200,YE(this.i,this.v,this.B,this.l,this.S,H,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var R=g;break t}}R=null}if(a=R)hs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,lc(this,a);else{this.o=!1,this.m=3,$e(12),xn(this),hi(this);break e}}if(this.R){a=!0;let Re;for(;!this.K&&this.C<d.length;)if(Re=tv(this,d),Re==oc){H==4&&(this.m=4,$e(14),a=!1),hs(this.i,this.l,null,"[Incomplete Response]");break}else if(Re==Qh){this.m=4,$e(15),hs(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else hs(this.i,this.l,Re,null),lc(this,Re);if(Xh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||d.length!=0||this.h.h||(this.m=1,$e(16),a=!1),this.o=this.o&&a,!a)hs(this.i,this.l,d,"[Invalid Chunked Response]"),xn(this),hi(this);else if(d.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),_c(O),O.P=!0,$e(11))}}else hs(this.i,this.l,d,null),lc(this,d);H==4&&xn(this),this.o&&!this.K&&(H==4?Td(this.j,this):(this.o=!1,Gr(this)))}else mv(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,$e(12)):(this.m=0,$e(13)),xn(this),hi(this)}}}catch{}finally{}};function ev(a){if(!Xh(a))return a.g.la();const h=gd(a.g);if(h==="")return"";let d="";const g=h.length,A=sn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return xn(a),hi(a),"";a.h.i=new o.TextDecoder}for(let R=0;R<g;R++)a.h.h=!0,d+=a.h.i.decode(h[R],{stream:!(A&&R==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Xh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function tv(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?oc:(d=Number(h.substring(d,g)),isNaN(d)?Qh:(g+=1,g+d>h.length?oc:(h=h.slice(g,g+d),a.C=g+d,h)))}en.prototype.cancel=function(){this.K=!0,xn(this)};function Gr(a){a.T=Date.now()+a.H,Jh(a,a.H)}function Jh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ci(u(a.aa,a),h)}function cc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}en.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(XE(this.i,this.B),this.M!=2&&(ai(),$e(17)),xn(this),this.m=2,hi(this)):Jh(this,this.T-a)};function hi(a){a.j.I==0||a.K||Td(a.j,a)}function xn(a){cc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Uh(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function lc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||uc(d.h,a))){if(!a.L&&uc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Jr(d),Yr(d);else break e;gc(d),$e(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ci(u(d.Va,d),6e3));td(d.h)<=1&&d.ta&&(d.ta=void 0)}else Un(d,11)}else if((a.L||d.g==a)&&Jr(d),!y(h))for(A=d.Ba.g.parse(h),h=0;h<A.length;h++){let ie=A[h];const Re=ie[0];if(!(Re<=d.K))if(d.K=Re,ie=ie[1],d.I==2)if(ie[0]=="c"){d.M=ie[1],d.ba=ie[2];const vt=ie[3];vt!=null&&(d.ka=vt,d.j.info("VER="+d.ka));const Bn=ie[4];Bn!=null&&(d.za=Bn,d.j.info("SVER="+d.za));const rn=ie[5];rn!=null&&typeof rn=="number"&&rn>0&&(g=1.5*rn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const on=a.g;if(on){const eo=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var R=g.h;R.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(hc(R,R.h),R.h=null))}if(g.G){const yc=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;yc&&(g.wa=yc,ae(g.J,g.G,yc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var O=a;if(g.na=Rd(g,g.L?g.ba:null,g.W),O.L){nd(g.h,O);var H=O,Ae=g.O;Ae&&(H.H=Ae),H.D&&(cc(H),Gr(H)),g.g=O}else wd(g);d.i.length>0&&Xr(d)}else ie[0]!="stop"&&ie[0]!="close"||Un(d,7);else d.I==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Un(d,7):mc(d):ie[0]!="noop"&&d.l&&d.l.qa(ie),d.A=0)}}ai(4)}catch{}}var nv=class{constructor(a,h){this.g=a,this.map=h}};function Zh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ed(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function td(a){return a.h?1:a.g?a.g.size:0}function uc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function hc(a,h){a.g?a.g.add(h):a.h=h}function nd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Zh.prototype.cancel=function(){if(this.i=sd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sd(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return T(a.i)}var id=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sv(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let A,R=null;g>=0?(A=a[d].substring(0,g),R=a[d].substring(g+1)):A=a[d],h(A,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function tn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof tn?(this.l=a.l,di(this,a.j),this.o=a.o,this.g=a.g,fi(this,a.u),this.h=a.h,dc(this,ud(a.i)),this.m=a.m):a&&(h=String(a).match(id))?(this.l=!1,di(this,h[1]||"",!0),this.o=pi(h[2]||""),this.g=pi(h[3]||"",!0),fi(this,h[4]),this.h=pi(h[5]||"",!0),dc(this,h[6]||"",!0),this.m=pi(h[7]||"")):(this.l=!1,this.i=new gi(null,this.l))}tn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(mi(h,rd,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(mi(h,rd,!0),"@"),a.push(ui(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(mi(d,d.charAt(0)=="/"?ov:rv,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",mi(d,cv)),a.join("")},tn.prototype.resolve=function(a){const h=Et(this);let d=!!a.j;d?di(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)fi(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=h.h.lastIndexOf("/");A!=-1&&(g=h.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const R=[];for(let O=0;O<A.length;){const H=A[O++];H=="."?g&&O==A.length&&R.push(""):H==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),g&&O==A.length&&R.push("")):(R.push(H),g=!0)}g=R.join("/")}else g=A}return d?h.h=g:d=a.i.toString()!=="",d?dc(h,ud(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Et(a){return new tn(a)}function di(a,h,d){a.j=d?pi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function fi(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function dc(a,h,d){h instanceof gi?(a.i=h,lv(a.i,a.l)):(d||(h=mi(h,av)),a.i=new gi(h,a.l))}function ae(a,h,d){a.i.set(h,d)}function zr(a){return ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function pi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function mi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,iv),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var rd=/[#\/\?@]/g,rv=/[#\?:]/g,ov=/[#\?]/g,av=/[#\?@]/g,cv=/#/g;function gi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Fn(a){a.g||(a.g=new Map,a.h=0,a.i&&sv(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}n=gi.prototype,n.add=function(a,h){Fn(this),this.i=null,a=ds(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function od(a,h){Fn(a),h=ds(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ad(a,h){return Fn(a),h=ds(a,h),a.g.has(h)}n.forEach=function(a,h){Fn(this),this.g.forEach(function(d,g){d.forEach(function(A){a.call(h,A,g,this)},this)},this)};function cd(a,h){Fn(a);let d=[];if(typeof h=="string")ad(a,h)&&(d=d.concat(a.g.get(ds(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}n.set=function(a,h){return Fn(this),this.i=null,a=ds(this,a),ad(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=cd(this,a),a.length>0?String(a[0]):h):h};function ld(a,h,d){od(a,h),d.length>0&&(a.i=null,a.g.set(ds(a,h),T(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const A=ui(d);d=cd(this,d);for(let R=0;R<d.length;R++){let O=A;d[R]!==""&&(O+="="+ui(d[R])),a.push(O)}}return this.i=a.join("&")};function ud(a){const h=new gi;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ds(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function lv(a,h){h&&!a.j&&(Fn(a),a.i=null,a.g.forEach(function(d,g){const A=g.toLowerCase();g!=A&&(od(this,g),ld(this,A,d))},a)),a.j=h}function uv(a,h){const d=new li;if(o.Image){const g=new Image;g.onload=f(nn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(nn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(nn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(nn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function hv(a,h){const d=new li,g=new AbortController,A=setTimeout(()=>{g.abort(),nn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(R=>{clearTimeout(A),R.ok?nn(d,"TestPingServer: ok",!0,h):nn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(A),nn(d,"TestPingServer: error",!1,h)})}function nn(a,h,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch{}}function dv(){this.g=new KE}function fc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(fc,Bh),fc.prototype.g=function(){return new Kr(this.i,this.h)};function Kr(a,h){Ve.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Kr,Ve),n=Kr.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,yi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hd(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function hd(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?_i(this):yi(this),this.readyState==3&&hd(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,_i(this))},n.Na=function(a){this.g&&(this.response=a,_i(this))},n.ga=function(){this.g&&_i(this)};function _i(a){a.readyState=4,a.l=null,a.j=null,a.B=null,yi(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function yi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Kr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dd(a){let h="";return qr(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function pc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=dd(d),typeof a=="string"?d!=null&&ui(d):ae(a,h,d))}function he(a){Ve.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(he,Ve);var fv=/^https?$/i,pv=["POST","PUT"];n=he.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():zh.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(R){fd(this,R);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const R of g.keys())d.set(R,g.get(R));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(pv,h,void 0)>=0)||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,O]of d)this.g.setRequestHeader(R,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(R){fd(this,R)}};function fd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,pd(a),Qr(a)}function pd(a){a.A||(a.A=!0,qe(a,"complete"),qe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,qe(this,"complete"),qe(this,"abort"),Qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qr(this,!0)),he.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?md(this):this.Xa())},n.Xa=function(){md(this)};function md(a){if(a.h&&typeof r<"u"){if(a.v&&sn(a)==4)setTimeout(a.Ca.bind(a),0);else if(qe(a,"readystatechange"),sn(a)==4){a.h=!1;try{const R=a.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=R===0){let O=String(a.D).match(id)[1]||null;!O&&o.self&&o.self.location&&(O=o.self.location.protocol.slice(0,-1)),g=!fv.test(O?O.toLowerCase():"")}d=g}if(d)qe(a,"complete"),qe(a,"success");else{a.o=6;try{var A=sn(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",pd(a)}}finally{Qr(a)}}}}function Qr(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||qe(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function sn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return sn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),zE(h)}};function gd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mv(a){const h={};a=(a.g&&sn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var d=ZE(a[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=h[A]||[];h[A]=R,R.push(d)}qE(h,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function _d(a){this.za=0,this.i=[],this.j=new li,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ei("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ei("baseRetryDelayMs",5e3,a),this.Za=Ei("retryDelaySeedMs",1e4,a),this.Ta=Ei("forwardChannelMaxRetries",2,a),this.va=Ei("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Zh(a&&a.concurrentRequestLimit),this.Ba=new dv,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=_d.prototype,n.ka=8,n.I=1,n.connect=function(a,h,d,g){$e(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Rd(this,null,this.W),Xr(this)};function mc(a){if(yd(a),a.I==3){var h=a.V++,d=Et(a.J);if(ae(d,"SID",a.M),ae(d,"RID",h),ae(d,"TYPE","terminate"),vi(a,d),h=new en(a,a.j,h),h.M=2,h.A=zr(Et(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Cd(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Gr(h)}Sd(a)}function Yr(a){a.g&&(_c(a),a.g.cancel(),a.g=null)}function yd(a){Yr(a),a.v&&(o.clearTimeout(a.v),a.v=null),Jr(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Xr(a){if(!ed(a.h)&&!a.m){a.m=!0;var h=a.Ea;et||_(),Te||(et(),Te=!0),w.add(h,a),a.D=0}}function gv(a,h){return td(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ci(u(a.Ea,a,h),Ad(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new en(this,this.j,a);let R=this.o;if(this.U&&(R?(R=kh(R),Dh(R,this.U)):R=this.U),this.u!==null||this.R||(A.J=R,R=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=vd(this,A,h),d=Et(this.J),ae(d,"RID",a),ae(d,"CVER",22),this.G&&ae(d,"X-HTTP-Session-Id",this.G),vi(this,d),R&&(this.R?h="headers="+ui(dd(R))+"&"+h:this.u&&pc(d,this.u,R)),hc(this.h,A),this.Ra&&ae(d,"TYPE","init"),this.S?(ae(d,"$req",h),ae(d,"SID","null"),A.U=!0,ac(A,d,null)):ac(A,d,h),this.I=2}}else this.I==3&&(a?Ed(this,a):this.i.length==0||ed(this.h)||Ed(this))};function Ed(a,h){var d;h?d=h.l:d=a.V++;const g=Et(a.J);ae(g,"SID",a.M),ae(g,"RID",d),ae(g,"AID",a.K),vi(a,g),a.u&&a.o&&pc(g,a.u,a.o),d=new en(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=vd(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),hc(a.h,d),ac(d,g,h)}function vi(a,h){a.H&&qr(a.H,function(d,g){ae(h,g,d)}),a.l&&qr({},function(d,g){ae(h,g,d)})}function vd(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var A=a.i;let H=-1;for(;;){const Ae=["count="+d];H==-1?d>0?(H=A[0].g,Ae.push("ofs="+H)):H=0:Ae.push("ofs="+H);let ie=!0;for(let Re=0;Re<d;Re++){var R=A[Re].g;const vt=A[Re].map;if(R-=H,R<0)H=Math.max(0,A[Re].g-100),ie=!1;else try{R="req"+R+"_"||"";try{var O=vt instanceof Map?vt:Object.entries(vt);for(const[Bn,rn]of O){let on=rn;c(rn)&&(on=nc(rn)),Ae.push(R+Bn+"="+encodeURIComponent(on))}}catch(Bn){throw Ae.push(R+"type="+encodeURIComponent("_badmap")),Bn}}catch{g&&g(vt)}}if(ie){O=Ae.join("&");break e}}O=void 0}return a=a.i.splice(0,d),h.G=a,O}function wd(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;et||_(),Te||(et(),Te=!0),w.add(h,a),a.A=0}}function gc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ci(u(a.Da,a),Ad(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Id(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ci(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,$e(10),Yr(this),Id(this))};function _c(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Id(a){a.g=new en(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Et(a.na);ae(h,"RID","rpc"),ae(h,"SID",a.M),ae(h,"AID",a.K),ae(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ae(h,"TO",a.ia),ae(h,"TYPE","xmlhttp"),vi(a,h),a.u&&a.o&&pc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=zr(Et(h)),d.u=null,d.R=!0,Yh(d,a)}n.Va=function(){this.C!=null&&(this.C=null,Yr(this),gc(this),$e(19))};function Jr(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Td(a,h){var d=null;if(a.g==h){Jr(a),_c(a),a.g=null;var g=2}else if(uc(a.h,h))d=h.G,nd(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var A=a.D;g=jr(),qe(g,new Hh(g,d)),Xr(a)}else wd(a);else if(A=h.m,A==3||A==0&&h.X>0||!(g==1&&gv(a,h)||g==2&&gc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),A){case 1:Un(a,5);break;case 4:Un(a,10);break;case 3:Un(a,6);break;default:Un(a,2)}}}function Ad(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Un(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const A=!g;g=new tn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||di(g,"https"),zr(g),A?uv(g.toString(),d):hv(g.toString(),d)}else $e(2);a.I=0,a.l&&a.l.pa(h),Sd(a),yd(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function Sd(a){if(a.I=0,a.ja=[],a.l){const h=sd(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.oa()}}function Rd(a,h,d){var g=d instanceof tn?Et(d):new tn(d);if(g.g!="")h&&(g.g=h+"."+g.g),fi(g,g.u);else{var A=o.location;g=A.protocol,h=h?h+"."+A.hostname:A.hostname,A=+A.port;const R=new tn(null);g&&di(R,g),h&&(R.g=h),A&&fi(R,A),d&&(R.h=d),g=R}return d=a.G,h=a.wa,d&&h&&ae(g,d,h),ae(g,"VER",a.ka),vi(a,g),g}function Cd(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new he(new fc({ab:d})):new he(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bd(){}n=bd.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Zr(){}Zr.prototype.g=function(a,h){return new tt(a,h)};function tt(a,h){Ve.call(this),this.g=new _d(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!y(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new fs(this)}p(tt,Ve),tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){mc(this.g)},tt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=nc(a),a=d);h.i.push(new nv(h.Ya++,a)),h.I==3&&Xr(h)},tt.prototype.N=function(){this.g.l=null,delete this.j,mc(this.g),delete this.g,tt.Z.N.call(this)};function Pd(a){sc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Pd,sc);function kd(){ic.call(this),this.status=1}p(kd,ic);function fs(a){this.g=a}p(fs,bd),fs.prototype.ra=function(){qe(this.g,"a")},fs.prototype.qa=function(a){qe(this.g,new Pd(a))},fs.prototype.pa=function(a){qe(this.g,new kd)},fs.prototype.oa=function(){qe(this.g,"b")},Zr.prototype.createWebChannel=Zr.prototype.g,tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,Lm=function(){return new Zr},Vm=function(){return jr()},Mm=Ln,Jc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Hr.NO_ERROR=0,Hr.TIMEOUT=8,Hr.HTTP_ERROR=6,po=Hr,Gh.COMPLETE="complete",Om=Gh,qh.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,Vi=qh,he.prototype.listenOnce=he.prototype.K,he.prototype.getLastError=he.prototype.Ha,he.prototype.getLastErrorCode=he.prototype.ya,he.prototype.getStatus=he.prototype.ca,he.prototype.getResponseJson=he.prototype.La,he.prototype.getResponseText=he.prototype.la,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Fa,Dm=he}).apply(typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{});const Gd="@firebase/firestore",zd="4.9.2";/**
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
 */class xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
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
 */let Ys="12.3.0";/**
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
 */const Yn=new Ir("@firebase/firestore");function _s(){return Yn.logLevel}function V(n,...e){if(Yn.logLevel<=Q.DEBUG){const t=e.map(Kl);Yn.debug(`Firestore (${Ys}): ${n}`,...t)}}function Gt(n,...e){if(Yn.logLevel<=Q.ERROR){const t=e.map(Kl);Yn.error(`Firestore (${Ys}): ${n}`,...t)}}function Ls(n,...e){if(Yn.logLevel<=Q.WARN){const t=e.map(Kl);Yn.warn(`Firestore (${Ys}): ${n}`,...t)}}function Kl(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function F(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,xm(n,s,t)}function xm(n,e,t){let s=`FIRESTORE (${Ys}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Gt(s),new Error(s)}function ne(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||xm(e,i,s)}function q(n,e){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $t{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Fm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(xe.UNAUTHENTICATED)))}shutdown(){}}class fI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class pI{constructor(e){this.t=e,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let s=this.i;const i=l=>this.i!==s?(s=this.i,t(l)):Promise.resolve();let r=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new $t,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await i(this.currentUser)}))},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new $t)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ne(typeof s.accessToken=="string",31837,{l:s}),new Fm(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new xe(e)}}class mI{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gI{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new mI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(xe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Kd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _I{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const s=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Kd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Kd(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Ql{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=yI(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function Y(n,e){return n<e?-1:n>e?1:0}function Zc(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const i=n.charAt(s),r=e.charAt(s);if(i!==r)return Ac(i)===Ac(r)?Y(i,r):Ac(i)?1:-1}return Y(n.length,e.length)}const EI=55296,vI=57343;function Ac(n){const e=n.charCodeAt(0);return e>=EI&&e<=vI}function xs(n,e,t){return n.length===e.length&&n.every(((s,i)=>t(s,e[i])))}/**
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
 */const Qd="__name__";class wt{constructor(e,t,s){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&F(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return wt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wt?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=wt.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return Y(e.length,t.length)}static compareSegments(e,t){const s=wt.isNumericId(e),i=wt.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?wt.extractNumericId(e).compare(wt.extractNumericId(t)):Zc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dn.fromString(e.substring(4,e.length-2))}}class oe extends wt{construct(e,t,s){return new oe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((i=>i.length>0)))}return new oe(t)}static emptyPath(){return new oe([])}}const wI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends wt{construct(e,t,s){return new Oe(e,t,s)}static isValidIdentifier(e){return wI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qd}static keyField(){return new Oe([Qd])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new M(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new M(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(s+=c,i++):(r(),i++)}if(r(),o)throw new M(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(t)}static emptyPath(){return new Oe([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(oe.fromString(e))}static fromName(e){return new L(oe.fromString(e).popFirst(5))}static empty(){return new L(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new oe(e.slice()))}}/**
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
 */function Um(n,e,t){if(!t)throw new M(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function II(n,e,t,s){if(e===!0&&s===!0)throw new M(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Yd(n){if(!L.isDocumentKey(n))throw new M(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Xd(n){if(L.isDocumentKey(n))throw new M(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bm(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function da(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function Je(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=da(n);throw new M(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function TI(n,e){if(e<=0)throw new M(b.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,e){const t={typeString:n};return e&&(t.value=e),t}function Tr(n,e){if(!Bm(n))throw new M(b.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(i&&typeof o!==i){t=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${s}' field to equal '${r.value}'`;break}}if(t)throw new M(b.INVALID_ARGUMENT,t);return!0}/**
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
 */const Jd=-62135596800,Zd=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Zd);return new le(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Jd)throw new M(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zd}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Tr(e,le._jsonSchema))return new le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:we("string",le._jsonSchemaVersion),seconds:we("number"),nanoseconds:we("number")};/**
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
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new le(0,0))}static max(){return new B(new le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const tr=-1;function AI(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(s===1e9?new le(t+1,0):new le(t,s));return new yn(i,L.empty(),e)}function SI(n){return new yn(n.readTime,n.key,tr)}class yn{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new yn(B.min(),L.empty(),tr)}static max(){return new yn(B.max(),L.empty(),tr)}}function RI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
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
 */const CI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Xs(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==CI)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,s)=>{t(e)}))}static reject(e){return new P(((t,s)=>{s(e)}))}static waitFor(e){return new P(((t,s)=>{let i=0,r=0,o=!1;e.forEach((c=>{++i,c.next((()=>{++r,o&&r===i&&t()}),(l=>s(l)))})),o=!0,r===i&&t()}))}static or(e){let t=P.resolve(!1);for(const s of e)t=t.next((i=>i?P.resolve(i):s()));return t}static forEach(e,t){const s=[];return e.forEach(((i,r)=>{s.push(t.call(this,i,r))})),this.waitFor(s)}static mapArray(e,t){return new P(((s,i)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const u=l;t(e[u]).next((f=>{o[u]=f,++c,c===r&&s(o)}),(f=>i(f)))}}))}static doWhile(e,t){return new P(((s,i)=>{const r=()=>{e()===!0?t().next((()=>{r()}),i):s()};r()}))}}function PI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Js(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class fa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}fa.ce=-1;/**
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
 */const Yl=-1;function pa(n){return n==null}function ko(n){return n===0&&1/n==-1/0}function kI(n){return typeof n=="number"&&Number.isInteger(n)&&!ko(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const qm="";function NI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ef(e)),e=DI(n.get(t),e);return ef(e)}function DI(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case qm:t+="";break;default:t+=r}}return t}function ef(n){return n+qm+""}/**
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
 */function tf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function kn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $m(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let Ie=class el{constructor(e,t){this.comparator=e,this.root=t||fn.EMPTY}insert(e,t){return new el(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fn.BLACK,null,null))}remove(e){return new el(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new no(this.root,e,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new no(this.root,e,this.comparator,!0)}},no=class{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},fn=class Dt{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Dt.RED,this.left=i??Dt.EMPTY,this.right=r??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new Dt(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Dt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}};fn.EMPTY=null,fn.RED=!0,fn.BLACK=!1;fn.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,s,i,r){return this}insert(e,t,s){return new fn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Se{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nf(this.data.getIterator())}getIteratorFrom(e){return new nf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class nf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class st{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new st([])}unionWith(e){let t=new Se(Oe.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new st(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Wm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Wm("Invalid base64 string: "+r):r}})(e);return new Me(t)}static fromUint8Array(e){const t=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(e);return new Me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const OI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function En(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=OI.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:pe(n.seconds),nanos:pe(n.nanos)}}function pe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function vn(n){return typeof n=="string"?Me.fromBase64String(n):Me.fromUint8Array(n)}/**
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
 */const jm="server_timestamp",Hm="__type__",Gm="__previous_value__",zm="__local_write_time__";function Xl(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Hm])==null?void 0:s.stringValue)===jm}function ma(n){const e=n.mapValue.fields[Gm];return Xl(e)?ma(e):e}function nr(n){const e=En(n.mapValue.fields[zm].timestampValue);return new le(e.seconds,e.nanos)}/**
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
 */class MI{constructor(e,t,s,i,r,o,c,l,u,f){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const No="(default)";class sr{constructor(e,t){this.projectId=e,this.database=t||No}static empty(){return new sr("","")}get isDefaultDatabase(){return this.database===No}isEqual(e){return e instanceof sr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Km="__type__",VI="__max__",so={mapValue:{}},Qm="__vector__",Do="value";function wn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Xl(n)?4:xI(n)?9007199254740991:LI(n)?10:11:F(28295,{value:n})}function bt(n,e){if(n===e)return!0;const t=wn(n);if(t!==wn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return nr(n).isEqual(nr(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=En(i.timestampValue),c=En(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,r){return vn(i.bytesValue).isEqual(vn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,r){return pe(i.geoPointValue.latitude)===pe(r.geoPointValue.latitude)&&pe(i.geoPointValue.longitude)===pe(r.geoPointValue.longitude)})(n,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return pe(i.integerValue)===pe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=pe(i.doubleValue),c=pe(r.doubleValue);return o===c?ko(o)===ko(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return xs(n.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},c=r.mapValue.fields||{};if(tf(o)!==tf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!bt(o[l],c[l])))return!1;return!0})(n,e);default:return F(52216,{left:n})}}function ir(n,e){return(n.values||[]).find((t=>bt(t,e)))!==void 0}function Fs(n,e){if(n===e)return 0;const t=wn(n),s=wn(e);if(t!==s)return Y(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=pe(r.integerValue||r.doubleValue),l=pe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return sf(n.timestampValue,e.timestampValue);case 4:return sf(nr(n),nr(e));case 5:return Zc(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=vn(r),l=vn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=Y(c[u],l[u]);if(f!==0)return f}return Y(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=Y(pe(r.latitude),pe(o.latitude));return c!==0?c:Y(pe(r.longitude),pe(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return rf(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var m,T,C,N;const c=r.fields||{},l=o.fields||{},u=(m=c[Do])==null?void 0:m.arrayValue,f=(T=l[Do])==null?void 0:T.arrayValue,p=Y(((C=u==null?void 0:u.values)==null?void 0:C.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return p!==0?p:rf(u,f)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===so.mapValue&&o===so.mapValue)return 0;if(r===so.mapValue)return 1;if(o===so.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Zc(l[p],f[p]);if(m!==0)return m;const T=Fs(c[l[p]],u[f[p]]);if(T!==0)return T}return Y(l.length,f.length)})(n.mapValue,e.mapValue);default:throw F(23264,{he:t})}}function sf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=En(n),s=En(e),i=Y(t.seconds,s.seconds);return i!==0?i:Y(t.nanos,s.nanos)}function rf(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=Fs(t[i],s[i]);if(r)return r}return Y(t.length,s.length)}function Us(n){return tl(n)}function tl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=En(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return vn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return L.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=tl(r);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${tl(t.fields[o])}`;return i+"}"})(n.mapValue):F(61005,{value:n})}function mo(n){switch(wn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ma(n);return e?16+mo(e):16;case 5:return 2*n.stringValue.length;case 6:return vn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+mo(r)),0)})(n.arrayValue);case 10:case 11:return(function(s){let i=0;return kn(s.fields,((r,o)=>{i+=r.length+mo(o)})),i})(n.mapValue);default:throw F(13486,{value:n})}}function of(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function nl(n){return!!n&&"integerValue"in n}function Jl(n){return!!n&&"arrayValue"in n}function af(n){return!!n&&"nullValue"in n}function cf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function go(n){return!!n&&"mapValue"in n}function LI(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Km])==null?void 0:s.stringValue)===Qm}function qi(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return kn(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=qi(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qi(n.arrayValue.values[t]);return e}return{...n}}function xI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===VI}/**
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
 */class Ge{constructor(e){this.value=e}static empty(){return new Ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!go(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qi(t)}setAll(e){let t=Oe.emptyPath(),s={},i=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,s,i),s={},i=[],t=c.popLast()}o?s[c.lastSegment()]=qi(o):i.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());go(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];go(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){kn(t,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new Ge(qi(this.value))}}function Ym(n){const e=[];return kn(n.fields,((t,s)=>{const i=new Oe([t]);if(go(s)){const r=Ym(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)})),new st(e)}/**
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
 */class Fe{constructor(e,t,s,i,r,o,c){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Fe(e,0,B.min(),B.min(),B.min(),Ge.empty(),0)}static newFoundDocument(e,t,s,i){return new Fe(e,1,t,B.min(),s,i,0)}static newNoDocument(e,t){return new Fe(e,2,t,B.min(),B.min(),Ge.empty(),0)}static newUnknownDocument(e,t){return new Fe(e,3,t,B.min(),B.min(),Ge.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oo{constructor(e,t){this.position=e,this.inclusive=t}}function lf(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=L.comparator(L.fromName(o.referenceValue),t.key):s=Fs(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function uf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!bt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class rr{constructor(e,t="asc"){this.field=e,this.dir=t}}function FI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Xm{}class ve extends Xm{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new BI(e,t,s):t==="array-contains"?new WI(e,s):t==="in"?new jI(e,s):t==="not-in"?new HI(e,s):t==="array-contains-any"?new GI(e,s):new ve(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new qI(e,s):new $I(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Fs(t,this.value)):t!==null&&wn(this.value)===wn(t)&&this.matchesComparison(Fs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mt extends Xm{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new mt(e,t)}matches(e){return Jm(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Jm(n){return n.op==="and"}function Zm(n){return UI(n)&&Jm(n)}function UI(n){for(const e of n.filters)if(e instanceof mt)return!1;return!0}function sl(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+Us(n.value);if(Zm(n))return n.filters.map((e=>sl(e))).join(",");{const e=n.filters.map((t=>sl(t))).join(",");return`${n.op}(${e})`}}function eg(n,e){return n instanceof ve?(function(s,i){return i instanceof ve&&s.op===i.op&&s.field.isEqual(i.field)&&bt(s.value,i.value)})(n,e):n instanceof mt?(function(s,i){return i instanceof mt&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,c)=>r&&eg(o,i.filters[c])),!0):!1})(n,e):void F(19439)}function tg(n){return n instanceof ve?(function(t){return`${t.field.canonicalString()} ${t.op} ${Us(t.value)}`})(n):n instanceof mt?(function(t){return t.op.toString()+" {"+t.getFilters().map(tg).join(" ,")+"}"})(n):"Filter"}class BI extends ve{constructor(e,t,s){super(e,t,s),this.key=L.fromName(s.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class qI extends ve{constructor(e,t){super(e,"in",t),this.keys=ng("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class $I extends ve{constructor(e,t){super(e,"not-in",t),this.keys=ng("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ng(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>L.fromName(s.referenceValue)))}class WI extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jl(t)&&ir(t.arrayValue,this.value)}}class jI extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ir(this.value.arrayValue,t)}}class HI extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ir(this.value.arrayValue,t)}}class GI extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ir(this.value.arrayValue,s)))}}/**
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
 */class zI{constructor(e,t=null,s=[],i=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function hf(n,e=null,t=[],s=[],i=null,r=null,o=null){return new zI(n,e,t,s,i,r,o)}function Zl(n){const e=q(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>sl(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),pa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Us(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Us(s))).join(",")),e.Te=t}return e.Te}function eu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!FI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!eg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!uf(n.startAt,e.startAt)&&uf(n.endAt,e.endAt)}function il(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Zs{constructor(e,t=null,s=[],i=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function KI(n,e,t,s,i,r,o,c){return new Zs(n,e,t,s,i,r,o,c)}function ga(n){return new Zs(n)}function df(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sg(n){return n.collectionGroup!==null}function $i(n){const e=q(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Se(Oe.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new rr(r,s))})),t.has(Oe.keyField().canonicalString())||e.Ie.push(new rr(Oe.keyField(),s))}return e.Ie}function It(n){const e=q(n);return e.Ee||(e.Ee=QI(e,$i(n))),e.Ee}function QI(n,e){if(n.limitType==="F")return hf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new rr(i.field,r)}));const t=n.endAt?new Oo(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Oo(n.startAt.position,n.startAt.inclusive):null;return hf(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function rl(n,e){const t=n.filters.concat([e]);return new Zs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Mo(n,e,t){return new Zs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _a(n,e){return eu(It(n),It(e))&&n.limitType===e.limitType}function ig(n){return`${Zl(It(n))}|lt:${n.limitType}`}function ys(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((i=>tg(i))).join(", ")}]`),pa(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((i=>Us(i))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((i=>Us(i))).join(",")),`Target(${s})`})(It(n))}; limitType=${n.limitType})`}function ya(n,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):L.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(n,e)&&(function(s,i){for(const r of $i(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(n,e)&&(function(s,i){return!(s.startAt&&!(function(o,c,l){const u=lf(o,c,l);return o.inclusive?u<=0:u<0})(s.startAt,$i(s),i)||s.endAt&&!(function(o,c,l){const u=lf(o,c,l);return o.inclusive?u>=0:u>0})(s.endAt,$i(s),i))})(n,e)}function YI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rg(n){return(e,t)=>{let s=!1;for(const i of $i(n)){const r=XI(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function XI(n,e,t){const s=n.field.isKeyField()?L.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),u=c.data.field(r);return l!==null&&u!==null?Fs(l,u):F(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return F(19790,{direction:n.dir})}}/**
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
 */class as{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){kn(this.inner,((t,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return $m(this.inner)}size(){return this.innerSize}}/**
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
 */const JI=new Ie(L.comparator);function zt(){return JI}const og=new Ie(L.comparator);function Li(...n){let e=og;for(const t of n)e=e.insert(t.key,t);return e}function ag(n){let e=og;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function jn(){return Wi()}function cg(){return Wi()}function Wi(){return new as((n=>n.toString()),((n,e)=>n.isEqual(e)))}const ZI=new Ie(L.comparator),eT=new Se(L.comparator);function X(...n){let e=eT;for(const t of n)e=e.add(t);return e}const tT=new Se(Y);function nT(){return tT}/**
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
 */function tu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ko(e)?"-0":e}}function lg(n){return{integerValue:""+n}}function ug(n,e){return kI(e)?lg(e):tu(n,e)}/**
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
 */class Ea{constructor(){this._=void 0}}function sT(n,e,t){return n instanceof or?(function(i,r){const o={fields:{[Hm]:{stringValue:jm},[zm]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Xl(r)&&(r=ma(r)),r&&(o.fields[Gm]=r),{mapValue:o}})(t,e):n instanceof ar?dg(n,e):n instanceof cr?fg(n,e):(function(i,r){const o=hg(i,r),c=ff(o)+ff(i.Ae);return nl(o)&&nl(i.Ae)?lg(c):tu(i.serializer,c)})(n,e)}function iT(n,e,t){return n instanceof ar?dg(n,e):n instanceof cr?fg(n,e):t}function hg(n,e){return n instanceof lr?(function(s){return nl(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class or extends Ea{}class ar extends Ea{constructor(e){super(),this.elements=e}}function dg(n,e){const t=pg(e);for(const s of n.elements)t.some((i=>bt(i,s)))||t.push(s);return{arrayValue:{values:t}}}class cr extends Ea{constructor(e){super(),this.elements=e}}function fg(n,e){let t=pg(e);for(const s of n.elements)t=t.filter((i=>!bt(i,s)));return{arrayValue:{values:t}}}class lr extends Ea{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ff(n){return pe(n.integerValue||n.doubleValue)}function pg(n){return Jl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class mg{constructor(e,t){this.field=e,this.transform=t}}function rT(n,e){return n.field.isEqual(e.field)&&(function(s,i){return s instanceof ar&&i instanceof ar||s instanceof cr&&i instanceof cr?xs(s.elements,i.elements,bt):s instanceof lr&&i instanceof lr?bt(s.Ae,i.Ae):s instanceof or&&i instanceof or})(n.transform,e.transform)}class oT{constructor(e,t){this.version=e,this.transformResults=t}}class at{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new at}static exists(e){return new at(void 0,e)}static updateTime(e){return new at(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _o(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class va{}function gg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new nu(n.key,at.none()):new Ar(n.key,n.data,at.none());{const t=n.data,s=Ge.empty();let i=new Se(Oe.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Nn(n.key,s,new st(i.toArray()),at.none())}}function aT(n,e,t){n instanceof Ar?(function(i,r,o){const c=i.value.clone(),l=mf(i.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Nn?(function(i,r,o){if(!_o(i.precondition,r))return void r.convertToUnknownDocument(o.version);const c=mf(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(_g(i)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ji(n,e,t,s){return n instanceof Ar?(function(r,o,c,l){if(!_o(r.precondition,o))return c;const u=r.value.clone(),f=gf(r.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,s):n instanceof Nn?(function(r,o,c,l){if(!_o(r.precondition,o))return c;const u=gf(r.fieldTransforms,l,o),f=o.data;return f.setAll(_g(r)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((p=>p.field)))})(n,e,t,s):(function(r,o,c){return _o(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function cT(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=hg(s.transform,i||null);r!=null&&(t===null&&(t=Ge.empty()),t.set(s.field,r))}return t||null}function pf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&xs(s,i,((r,o)=>rT(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ar extends va{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nn extends va{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function _g(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function mf(n,e,t){const s=new Map;ne(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,c=e.data.field(r.field);s.set(r.field,iT(o,c,t[i]))}return s}function gf(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,sT(r,o,e))}return s}class nu extends va{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lT extends va{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uT{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&aT(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ji(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ji(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=cg();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(i.key)?null:c;const l=gg(o,c);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),X())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,((t,s)=>pf(t,s)))&&xs(this.baseMutations,e.baseMutations,((t,s)=>pf(t,s)))}}class su{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){ne(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let i=(function(){return ZI})();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new su(e,t,s,i)}}/**
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
 */class hT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var _e,J;function fT(n){switch(n){case b.OK:return F(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function yg(n){if(n===void 0)return Gt("GRPC error has no .code"),b.UNKNOWN;switch(n){case _e.OK:return b.OK;case _e.CANCELLED:return b.CANCELLED;case _e.UNKNOWN:return b.UNKNOWN;case _e.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case _e.INTERNAL:return b.INTERNAL;case _e.UNAVAILABLE:return b.UNAVAILABLE;case _e.UNAUTHENTICATED:return b.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case _e.NOT_FOUND:return b.NOT_FOUND;case _e.ALREADY_EXISTS:return b.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return b.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case _e.ABORTED:return b.ABORTED;case _e.OUT_OF_RANGE:return b.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return b.UNIMPLEMENTED;case _e.DATA_LOSS:return b.DATA_LOSS;default:return F(39323,{code:n})}}(J=_e||(_e={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pT(){return new TextEncoder}/**
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
 */const mT=new dn([4294967295,4294967295],0);function _f(n){const e=pT().encode(n),t=new Nm;return t.update(e),new Uint8Array(t.digest())}function yf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new dn([t,s],0),new dn([i,r],0)]}class iu{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new xi(`Invalid padding: ${t}`);if(s<0)throw new xi(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new xi(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new xi(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=dn.fromNumber(this.ge)}ye(e,t,s){let i=e.add(t.multiply(dn.fromNumber(s)));return i.compare(mT)===1&&(i=new dn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=_f(e),[s,i]=yf(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new iu(r,i,t);return s.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=_f(e),[s,i]=yf(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.Se(o)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class xi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wa{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,Sr.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new wa(B.min(),i,new Ie(Y),zt(),X())}}class Sr{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Sr(s,t,X(),X(),X())}}/**
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
 */class yo{constructor(e,t,s,i){this.be=e,this.removedTargetIds=t,this.key=s,this.De=i}}class Eg{constructor(e,t){this.targetId=e,this.Ce=t}}class vg{constructor(e,t,s=Me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Ef{constructor(){this.ve=0,this.Fe=vf(),this.Me=Me.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=X(),t=X(),s=X();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:F(38017,{changeType:r})}})),new Sr(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=vf()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ne(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class gT{constructor(e){this.Ge=e,this.ze=new Map,this.je=zt(),this.Je=io(),this.He=io(),this.Ye=new Ie(Y)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:F(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,s=e.Ce.count,i=this.ot(t);if(i){const r=i.target;if(il(r))if(s===0){const o=new L(r.path);this.et(t,o,Fe.newNoDocument(o,B.min()))}else ne(s===1,20013,{expectedCount:s});else{const o=this._t(t);if(o!==s){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let o,c;try{o=vn(s).toUint8Array()}catch(l){if(l instanceof Wm)return Ls("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new iu(o,i,r)}catch(l){return Ls(l instanceof xi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&il(c.target)){const l=new L(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Fe.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.qe())}}));let s=X();this.He.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const i=new wa(e,t,this.Ye,this.je,s);return this.je=zt(),this.Je=io(),this.He=io(),this.Ye=new Ie(Y),i}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Ef,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Se(Y),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Se(Y),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ef),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function io(){return new Ie(L.comparator)}function vf(){return new Ie(L.comparator)}const _T={asc:"ASCENDING",desc:"DESCENDING"},yT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ET={and:"AND",or:"OR"};class vT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ol(n,e){return n.useProto3Json||pa(e)?e:{value:e}}function Vo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function wT(n,e){return Vo(n,e.toTimestamp())}function Tt(n){return ne(!!n,49232),B.fromTimestamp((function(t){const s=En(t);return new le(s.seconds,s.nanos)})(n))}function ru(n,e){return al(n,e).canonicalString()}function al(n,e){const t=(function(i){return new oe(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Ig(n){const e=oe.fromString(n);return ne(Cg(e),10190,{key:e.toString()}),e}function cl(n,e){return ru(n.databaseId,e.path)}function Sc(n,e){const t=Ig(e);if(t.get(1)!==n.databaseId.projectId)throw new M(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Ag(t))}function Tg(n,e){return ru(n.databaseId,e)}function IT(n){const e=Ig(n);return e.length===4?oe.emptyPath():Ag(e)}function ll(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ag(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function wf(n,e,t){return{name:cl(n,e),fields:t.value.mapValue.fields}}function TT(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:F(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(u,f){return u.useProto3Json?(ne(f===void 0||typeof f=="string",58123),Me.fromBase64String(f||"")):(ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Me.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?b.UNKNOWN:yg(u.code);return new M(f,u.message||"")})(o);t=new vg(s,i,r,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Sc(n,s.document.name),r=Tt(s.document.updateTime),o=s.document.createTime?Tt(s.document.createTime):B.min(),c=new Ge({mapValue:{fields:s.document.fields}}),l=Fe.newFoundDocument(i,r,o,c),u=s.targetIds||[],f=s.removedTargetIds||[];t=new yo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Sc(n,s.document),r=s.readTime?Tt(s.readTime):B.min(),o=Fe.newNoDocument(i,r),c=s.removedTargetIds||[];t=new yo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Sc(n,s.document),r=s.removedTargetIds||[];t=new yo([],r,i,null)}else{if(!("filter"in e))return F(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new dT(i,r),c=s.targetId;t=new Eg(c,o)}}return t}function AT(n,e){let t;if(e instanceof Ar)t={update:wf(n,e.key,e.value)};else if(e instanceof nu)t={delete:cl(n,e.key)};else if(e instanceof Nn)t={update:wf(n,e.key,e.data),updateMask:OT(e.fieldMask)};else{if(!(e instanceof lT))return F(16599,{Vt:e.type});t={verify:cl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(r,o){const c=o.transform;if(c instanceof or)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ar)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof cr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof lr)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw F(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(i,r){return r.updateTime!==void 0?{updateTime:wT(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:F(27497)})(n,e.precondition)),t}function ST(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map((t=>(function(i,r){let o=i.updateTime?Tt(i.updateTime):Tt(r);return o.isEqual(B.min())&&(o=Tt(r)),new oT(o,i.transformResults||[])})(t,e)))):[]}function RT(n,e){return{documents:[Tg(n,e.path)]}}function CT(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Tg(n,i);const r=(function(u){if(u.length!==0)return Rg(mt.create(u,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Es(m.field),direction:kT(m.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=ol(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:i}}function bT(n){let e=IT(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){ne(s===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let r=[];t.where&&(r=(function(p){const m=Sg(p);return m instanceof mt&&Zm(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((m=>(function(C){return new rr(vs(C.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,pa(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(p){const m=!!p.before,T=p.values||[];return new Oo(T,m)})(t.startAt));let u=null;return t.endAt&&(u=(function(p){const m=!p.before,T=p.values||[];return new Oo(T,m)})(t.endAt)),KI(e,i,o,r,c,"F",l,u)}function PT(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sg(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=vs(t.unaryFilter.field);return ve.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=vs(t.unaryFilter.field);return ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=vs(t.unaryFilter.field);return ve.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(t.unaryFilter.field);return ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ve.create(vs(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return mt.create(t.compositeFilter.filters.map((s=>Sg(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(t.compositeFilter.op))})(n):F(30097,{filter:n})}function kT(n){return _T[n]}function NT(n){return yT[n]}function DT(n){return ET[n]}function Es(n){return{fieldPath:n.canonicalString()}}function vs(n){return Oe.fromServerFormat(n.fieldPath)}function Rg(n){return n instanceof ve?(function(t){if(t.op==="=="){if(cf(t.value))return{unaryFilter:{field:Es(t.field),op:"IS_NAN"}};if(af(t.value))return{unaryFilter:{field:Es(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cf(t.value))return{unaryFilter:{field:Es(t.field),op:"IS_NOT_NAN"}};if(af(t.value))return{unaryFilter:{field:Es(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Es(t.field),op:NT(t.op),value:t.value}}})(n):n instanceof mt?(function(t){const s=t.getFilters().map((i=>Rg(i)));return s.length===1?s[0]:{compositeFilter:{op:DT(t.op),filters:s}}})(n):F(54877,{filter:n})}function OT(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Cg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ln{constructor(e,t,s,i,r=B.min(),o=B.min(),c=Me.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class MT{constructor(e){this.yt=e}}function VT(n){const e=bT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Mo(e,e.limit,"L"):e}/**
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
 */class LT{constructor(){this.Cn=new xT}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(yn.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(yn.min())}updateCollectionGroup(e,t,s){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class xT{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new Se(oe.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Se(oe.comparator)).toArray()}}/**
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
 */const If={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bg=41943040;class He{static withCacheSize(e){return new He(e,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */He.DEFAULT_COLLECTION_PERCENTILE=10,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,He.DEFAULT=new He(bg,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),He.DISABLED=new He(-1,0,0);/**
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
 */class Bs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Bs(0)}static cr(){return new Bs(-1)}}/**
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
 */const Tf="LruGarbageCollector",FT=1048576;function Af([n,e],[t,s]){const i=Y(n,t);return i===0?Y(e,s):i}class UT{constructor(e){this.Ir=e,this.buffer=new Se(Af),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Af(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class BT{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){V(Tf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Js(t)?V(Tf,"Ignoring IndexedDB error during garbage collection: ",t):await Xs(t)}await this.Vr(3e5)}))}}class qT{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(fa.ce);const s=new UT(t);return this.mr.forEachTarget(e,(i=>s.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>s.Ar(i))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(If)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),If):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,i,r,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(s=p,c=Date.now(),this.removeTargets(e,s,t)))).next((p=>(r=p,l=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(u=Date.now(),_s()<=Q.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:p}))))}}function $T(n,e){return new qT(n,e)}/**
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
 */class WT{constructor(){this.changes=new as((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?P.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class HT{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(s!==null&&ji(s.mutation,i,st.empty(),le.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,X()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=X()){const i=jn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,s).next((r=>{let o=Li();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=jn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,X())))}populateOverlays(e,t,s){const i=[];return s.forEach((r=>{t.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,s,i){let r=zt();const o=Wi(),c=(function(){return Wi()})();return t.forEach(((l,u)=>{const f=s.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof Nn)?r=r.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),ji(f.mutation,u,f.mutation.getFieldMask(),le.now())):o.set(u.key,st.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((u,f)=>o.set(u,f))),t.forEach(((u,f)=>c.set(u,new jT(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=Wi();let i=new Ie(((o,c)=>o-c)),r=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let f=s.get(l)||st.empty();f=c.applyToLocalView(u,f),s.set(l,f);const p=(i.get(c.batchId)||X()).add(l);i=i.insert(c.batchId,p)}))})).next((()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=cg();f.forEach((m=>{if(!r.has(m)){const T=gg(t.get(m),s.get(m));T!==null&&p.set(m,T),r=r.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return P.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,i){return(function(o){return L.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):P.resolve(jn());let c=tr,l=r;return o.next((u=>P.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),r.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,r))).next((()=>this.computeViews(e,l,u,X()))).next((f=>({batchId:c,changes:ag(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next((s=>{let i=Li();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let o=Li();return this.indexManager.getCollectionParents(e,r).next((c=>P.forEach(c,(l=>{const u=(function(p,m){return new Zs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i)))).next((o=>{r.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Fe.newInvalidDocument(f)))}));let c=Li();return o.forEach(((l,u)=>{const f=r.get(l);f!==void 0&&ji(f.mutation,u,st.empty(),le.now()),ya(t,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class GT{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return P.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Tt(i.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:VT(i.bundledQuery),readTime:Tt(i.readTime)}})(t)),P.resolve()}}/**
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
 */class zT{constructor(){this.overlays=new Ie(L.comparator),this.qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const s=jn();return P.forEach(t,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((i,r)=>{this.St(e,t,r)})),P.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.qr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.qr.delete(s)),P.resolve()}getOverlaysForCollection(e,t,s){const i=jn(),r=t.length+1,o=new L(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new Ie(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let f=r.get(u.largestBatchId);f===null&&(f=jn(),r=r.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=jn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=i)););return P.resolve(c)}St(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(s.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new hT(t,s));let r=this.qr.get(t);r===void 0&&(r=X(),this.qr.set(t,r)),this.qr.set(t,r.add(s.key))}}/**
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
 */class KT{constructor(){this.sessionToken=Me.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class ou{constructor(){this.Qr=new Se(be.$r),this.Ur=new Se(be.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new be(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new be(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new L(new oe([])),s=new be(t,e),i=new be(t,e+1),r=[];return this.Ur.forEachInRange([s,i],(o=>{this.Gr(o),r.push(o.key)})),r}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new L(new oe([])),s=new be(t,e),i=new be(t,e+1);let r=X();return this.Ur.forEachInRange([s,i],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new be(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return L.comparator(e.key,t.key)||Y(e.Yr,t.Yr)}static Kr(e,t){return Y(e.Yr,t.Yr)||L.comparator(e.key,t.key)}}/**
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
 */class QT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Se(be.$r)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uT(r,t,s,i);this.mutationQueue.push(o);for(const c of i)this.Zr=this.Zr.add(new be(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ei(s),r=i<0?0:i;return P.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Yl:this.tr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new be(t,0),i=new be(t,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([s,i],(o=>{const c=this.Xr(o.Yr);r.push(c)})),P.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Se(Y);return t.forEach((i=>{const r=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([r,o],(c=>{s=s.add(c.Yr)}))})),P.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;L.isDocumentKey(r)||(r=r.child(""));const o=new be(new L(r),0);let c=new Se(Y);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(c=c.add(l.Yr)),!0)}),o),P.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((s=>{const i=this.Xr(s);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){ne(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return P.forEach(t.mutations,(i=>{const r=new be(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new be(t,0),i=this.Zr.firstAfterOrEqual(s);return P.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class YT{constructor(e){this.ri=e,this.docs=(function(){return new Ie(L.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return P.resolve(s?s.document.mutableCopy():Fe.newInvalidDocument(t))}getEntries(e,t){let s=zt();return t.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Fe.newInvalidDocument(i))})),P.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=zt();const o=t.path,c=new L(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||RI(SI(f),s)<=0||(i.has(f.key)||ya(t,f))&&(r=r.insert(f.key,f.mutableCopy()))}return P.resolve(r)}getAllFromCollectionGroup(e,t,s,i){F(9500)}ii(e,t){return P.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new XT(this)}getSize(e){return P.resolve(this.size)}}class XT extends WT{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(s)})),P.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class JT{constructor(e){this.persistence=e,this.si=new as((t=>Zl(t)),eu),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.oi=0,this._i=new ou,this.targetCount=0,this.ai=Bs.ur()}forEachTarget(e,t){return this.si.forEach(((s,i)=>t(i))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),P.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Bs(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Pr(t),P.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.si.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),P.waitFor(r).next((()=>i))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return P.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),P.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((o=>{r.push(i.markPotentiallyOrphaned(e,o))})),P.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return P.resolve(s)}containsKey(e,t){return P.resolve(this._i.containsKey(t))}}/**
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
 */class Pg{constructor(e,t){this.ui={},this.overlays={},this.ci=new fa(0),this.li=!1,this.li=!0,this.hi=new KT,this.referenceDelegate=e(this),this.Pi=new JT(this),this.indexManager=new LT,this.remoteDocumentCache=(function(i){return new YT(i)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new MT(t),this.Ii=new GT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new QT(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){V("MemoryPersistence","Starting transaction:",e);const i=new ZT(this.ci.next());return this.referenceDelegate.Ei(),s(i).next((r=>this.referenceDelegate.di(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ai(e,t){return P.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class ZT extends bI{constructor(e){super(),this.currentSequenceNumber=e}}class au{constructor(e){this.persistence=e,this.Ri=new ou,this.Vi=null}static mi(e){return new au(e)}get fi(){if(this.Vi)return this.Vi;throw F(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),P.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((r=>this.fi.add(r.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,(s=>{const i=L.fromPath(s);return this.gi(e,i).next((r=>{r||t.removeEntry(i,B.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Lo{constructor(e,t){this.persistence=e,this.pi=new as((s=>NI(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=$T(this,t)}static mi(e,t){return new Lo(e,t)}Ei(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((i=>s+i))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return P.forEach(this.pi,((s,i)=>this.br(e,s,i).next((r=>r?P.resolve():t(i)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ii(e,(o=>this.br(e,o,t).next((c=>{c||(s++,r.removeEntry(o,B.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),P.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=mo(e.data.value)),t}br(e,t,s){return P.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return P.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class cu{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=i}static As(e,t){let s=X(),i=X();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new cu(e,t.fromCache,s,i)}}/**
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
 */class eA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tA{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return $v()?8:PI(Ue())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.ys(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ws(e,t,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new eA;return this.Ss(e,t,o).next((c=>{if(r.result=c,this.Vs)return this.bs(e,t,o,c.size)}))})).next((()=>r.result))}bs(e,t,s,i){return s.documentReadCount<this.fs?(_s()<=Q.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",ys(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(_s()<=Q.DEBUG&&V("QueryEngine","Query:",ys(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.gs*i?(_s()<=Q.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",ys(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,It(t))):P.resolve())}ys(e,t){if(df(t))return P.resolve(null);let s=It(t);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Mo(t,null,"F"),s=It(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const o=X(...r);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,s).next((l=>{const u=this.Ds(t,c);return this.Cs(t,u,o,l.readTime)?this.ys(e,Mo(t,null,"F")):this.vs(e,u,t,l)}))))})))))}ws(e,t,s,i){return df(t)||i.isEqual(B.min())?P.resolve(null):this.ps.getDocuments(e,s).next((r=>{const o=this.Ds(t,r);return this.Cs(t,o,s,i)?P.resolve(null):(_s()<=Q.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ys(t)),this.vs(e,o,t,AI(i,tr)).next((c=>c)))}))}Ds(e,t){let s=new Se(rg(e));return t.forEach(((i,r)=>{ya(e,r)&&(s=s.add(r))})),s}Cs(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(e,t,s){return _s()<=Q.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ys(t)),this.ps.getDocumentsMatchingQuery(e,t,yn.min(),s)}vs(e,t,s,i){return this.ps.getDocumentsMatchingQuery(e,s,i).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const lu="LocalStore",nA=3e8;class sA{constructor(e,t,s,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new Ie(Y),this.xs=new as((r=>Zl(r)),eu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HT(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function iA(n,e,t,s){return new sA(n,e,t,s)}async function kg(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],c=[];let l=X();for(const u of i){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of r){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(s,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function rA(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const i=e.batch.keys(),r=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let T=P.resolve();return m.forEach((C=>{T=T.next((()=>f.getEntry(l,C))).next((N=>{const k=u.docVersions.get(C);ne(k!==null,48541),N.version.compareTo(k)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),f.addEntry(N)))}))})),T.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,s,e,r).next((()=>r.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let l=X();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(s,i)))}))}function Ng(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function oA(n,e){const t=q(n),s=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=i.get(p);if(!m)return;c.push(t.Pi.removeMatchingKeys(r,f.removedDocuments,p).next((()=>t.Pi.addMatchingKeys(r,f.addedDocuments,p))));let T=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Me.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,s)),i=i.insert(p,T),(function(N,k,$){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=nA?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(m,T,f)&&c.push(t.Pi.updateTargetData(r,T))}));let l=zt(),u=X();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,f))})),c.push(aA(r,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!s.isEqual(B.min())){const f=t.Pi.getLastRemoteSnapshotVersion(r).next((p=>t.Pi.setTargetsMetadata(r,r.currentSequenceNumber,s)));c.push(f)}return P.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,u))).next((()=>l))})).then((r=>(t.Ms=i,r)))}function aA(n,e,t){let s=X(),i=X();return t.forEach((r=>s=s.add(r))),e.getEntries(n,s).next((r=>{let o=zt();return t.forEach(((c,l)=>{const u=r.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V(lu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:i}}))}function cA(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Yl),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function lA(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return t.Pi.getTargetData(s,e).next((r=>r?(i=r,P.resolve(i)):t.Pi.allocateTargetId(s).next((o=>(i=new ln(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=t.Ms.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function ul(n,e,t){const s=q(n),i=s.Ms.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!Js(o))throw o;V(lu,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(i.target)}function Sf(n,e,t){const s=q(n);let i=B.min(),r=X();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=q(l),m=p.xs.get(f);return m!==void 0?P.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(s,o,It(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,t?i:B.min(),t?r:X()))).next((c=>(uA(s,YI(e),c),{documents:c,Qs:r})))))}function uA(n,e,t){let s=n.Os.get(e)||B.min();t.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),n.Os.set(e,s)}class Rf{constructor(){this.activeTargetIds=nT()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hA{constructor(){this.Mo=new Rf,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Rf,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dA{Oo(e){}shutdown(){}}/**
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
 */const Cf="ConnectivityMonitor";class bf{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(Cf,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){V(Cf,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ro=null;function hl(){return ro===null?ro=(function(){return 268435456+Math.round(2147483648*Math.random())})():ro++,"0x"+ro.toString(16)}/**
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
 */const Rc="RestConnection",fA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pA{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${i}`,this.Wo=this.databaseId.database===No?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Go(e,t,s,i,r){const o=hl(),c=this.zo(e,t.toUriEncodedString());V(Rc,`Sending RPC '${e}' ${o}:`,c,s);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,i,r);const{host:u}=new URL(c),f=Pn(u);return this.Jo(e,c,l,s,f).then((p=>(V(Rc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Ls(Rc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",s),p}))}Ho(e,t,s,i,r,o){return this.Go(e,t,s,i,r)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ys})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}zo(e,t){const s=fA[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class mA{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Le="WebChannelConnection";class gA extends pA{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,i,r){const o=hl();return new Promise(((c,l)=>{const u=new Dm;u.setWithCredentials(!0),u.listenOnce(Om.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case po.NO_ERROR:const p=u.getResponseJson();V(Le,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case po.TIMEOUT:V(Le,`RPC '${e}' ${o} timed out`),l(new M(b.DEADLINE_EXCEEDED,"Request time out"));break;case po.HTTP_ERROR:const m=u.getStatus();if(V(Le,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);const C=T==null?void 0:T.error;if(C&&C.status&&C.message){const N=(function($){const j=$.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(j)>=0?j:b.UNKNOWN})(C.status);l(new M(N,C.message))}else l(new M(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new M(b.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{V(Le,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(i);V(Le,`RPC '${e}' ${o} sending request:`,i),u.send(t,"POST",f,s,15)}))}T_(e,t,s){const i=hl(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Lm(),c=Vm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const f=r.join("");V(Le,`Creating RPC '${e}' stream ${i}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,T=!1;const C=new mA({Yo:k=>{T?V(Le,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(m||(V(Le,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),V(Le,`RPC '${e}' stream ${i} sending:`,k),p.send(k))},Zo:()=>p.close()}),N=(k,$,j)=>{k.listen($,(Z=>{try{j(Z)}catch(ge){setTimeout((()=>{throw ge}),0)}}))};return N(p,Vi.EventType.OPEN,(()=>{T||(V(Le,`RPC '${e}' stream ${i} transport opened.`),C.o_())})),N(p,Vi.EventType.CLOSE,(()=>{T||(T=!0,V(Le,`RPC '${e}' stream ${i} transport closed`),C.a_(),this.E_(p))})),N(p,Vi.EventType.ERROR,(k=>{T||(T=!0,Ls(Le,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),C.a_(new M(b.UNAVAILABLE,"The operation could not be completed")))})),N(p,Vi.EventType.MESSAGE,(k=>{var $;if(!T){const j=k.data[0];ne(!!j,16349);const Z=j,ge=(Z==null?void 0:Z.error)||(($=Z[0])==null?void 0:$.error);if(ge){V(Le,`RPC '${e}' stream ${i} received error:`,ge);const et=ge.status;let Te=(function(E){const I=_e[E];if(I!==void 0)return yg(I)})(et),w=ge.message;Te===void 0&&(Te=b.INTERNAL,w="Unknown error status: "+et+" with message "+ge.message),T=!0,C.a_(new M(Te,w)),p.close()}else V(Le,`RPC '${e}' stream ${i} received:`,j),C.u_(j)}})),N(c,Mm.STAT_EVENT,(k=>{k.stat===Jc.PROXY?V(Le,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Jc.NOPROXY&&V(Le,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Cc(){return typeof document<"u"?document:null}/**
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
 */function Ia(n){return new vT(n,!0)}/**
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
 */class Dg{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=i,this.R_=r,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-s);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Pf="PersistentStream";class Og{constructor(e,t,s,i,r,o,c,l){this.Mi=e,this.S_=s,this.b_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Dg(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(Gt(t.toString()),Gt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===t&&this.G_(s,i)}),(s=>{e((()=>{const i=new M(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return V(Pf,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(V(Pf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class _A extends Og{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=TT(this.serializer,e),s=(function(r){if(!("targetChange"in r))return B.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?Tt(o.readTime):B.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=ll(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=il(l)?{documents:RT(r,l)}:{query:CT(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=wg(r,o.resumeToken);const u=ol(r,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(B.min())>0){c.readTime=Vo(r,o.snapshotVersion.toTimestamp());const u=ol(r,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const s=PT(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=ll(this.serializer),t.removeTarget=e,this.q_(t)}}class yA extends Og{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=ST(e.writeResults,e.commitTime),s=Tt(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=ll(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>AT(this.serializer,s)))};this.q_(t)}}/**
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
 */class EA{}class vA extends EA{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new M(b.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Go(e,al(t,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(b.UNKNOWN,r.toString())}))}Ho(e,t,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,al(t,s),i,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(b.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class wA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gt(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Xn="RemoteStore";class IA{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{cs(this)&&(V(Xn,"Restarting streams for network reachability change."),await(async function(l){const u=q(l);u.Ea.add(4),await Rr(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Ta(u)})(this))}))})),this.Ra=new wA(s,i)}}async function Ta(n){if(cs(n))for(const e of n.da)await e(!0)}async function Rr(n){for(const e of n.da)await e(!1)}function Mg(n,e){const t=q(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),fu(t)?du(t):ei(t).O_()&&hu(t,e))}function uu(n,e){const t=q(n),s=ei(t);t.Ia.delete(e),s.O_()&&Vg(t,e),t.Ia.size===0&&(s.O_()?s.L_():cs(t)&&t.Ra.set("Unknown"))}function hu(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ei(n).Y_(e)}function Vg(n,e){n.Va.Ue(e),ei(n).Z_(e)}function du(n){n.Va=new gT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ei(n).start(),n.Ra.ua()}function fu(n){return cs(n)&&!ei(n).x_()&&n.Ia.size>0}function cs(n){return q(n).Ea.size===0}function Lg(n){n.Va=void 0}async function TA(n){n.Ra.set("Online")}async function AA(n){n.Ia.forEach(((e,t)=>{hu(n,e)}))}async function SA(n,e){Lg(n),fu(n)?(n.Ra.ha(e),du(n)):n.Ra.set("Unknown")}async function RA(n,e,t){if(n.Ra.set("Online"),e instanceof vg&&e.state===2&&e.cause)try{await(async function(i,r){const o=r.cause;for(const c of r.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ia.delete(c),i.Va.removeTarget(c))})(n,e)}catch(s){V(Xn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await xo(n,s)}else if(e instanceof yo?n.Va.Ze(e):e instanceof Eg?n.Va.st(e):n.Va.tt(e),!t.isEqual(B.min()))try{const s=await Ng(n.localStore);t.compareTo(s)>=0&&await(function(r,o){const c=r.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=r.Ia.get(u);f&&r.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=r.Ia.get(l);if(!f)return;r.Ia.set(l,f.withResumeToken(Me.EMPTY_BYTE_STRING,f.snapshotVersion)),Vg(r,l);const p=new ln(f.target,l,u,f.sequenceNumber);hu(r,p)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){V(Xn,"Failed to raise snapshot:",s),await xo(n,s)}}async function xo(n,e,t){if(!Js(e))throw e;n.Ea.add(1),await Rr(n),n.Ra.set("Offline"),t||(t=()=>Ng(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(Xn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ta(n)}))}function xg(n,e){return e().catch((t=>xo(n,t,e)))}async function Aa(n){const e=q(n),t=In(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Yl;for(;CA(e);)try{const i=await cA(e.localStore,s);if(i===null){e.Ta.length===0&&t.L_();break}s=i.batchId,bA(e,i)}catch(i){await xo(e,i)}Fg(e)&&Ug(e)}function CA(n){return cs(n)&&n.Ta.length<10}function bA(n,e){n.Ta.push(e);const t=In(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Fg(n){return cs(n)&&!In(n).x_()&&n.Ta.length>0}function Ug(n){In(n).start()}async function PA(n){In(n).ra()}async function kA(n){const e=In(n);for(const t of n.Ta)e.ea(t.mutations)}async function NA(n,e,t){const s=n.Ta.shift(),i=su.from(s,e,t);await xg(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Aa(n)}async function DA(n,e){e&&In(n).X_&&await(async function(s,i){if((function(o){return fT(o)&&o!==b.ABORTED})(i.code)){const r=s.Ta.shift();In(s).B_(),await xg(s,(()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i))),await Aa(s)}})(n,e),Fg(n)&&Ug(n)}async function kf(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),V(Xn,"RemoteStore received new credentials");const s=cs(t);t.Ea.add(3),await Rr(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ta(t)}async function OA(n,e){const t=q(n);e?(t.Ea.delete(2),await Ta(t)):e||(t.Ea.add(2),await Rr(t),t.Ra.set("Unknown"))}function ei(n){return n.ma||(n.ma=(function(t,s,i){const r=q(t);return r.sa(),new _A(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Xo:TA.bind(null,n),t_:AA.bind(null,n),r_:SA.bind(null,n),H_:RA.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),fu(n)?du(n):n.Ra.set("Unknown")):(await n.ma.stop(),Lg(n))}))),n.ma}function In(n){return n.fa||(n.fa=(function(t,s,i){const r=q(t);return r.sa(),new yA(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:PA.bind(null,n),r_:DA.bind(null,n),ta:kA.bind(null,n),na:NA.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Aa(n)):(await n.fa.stop(),n.Ta.length>0&&(V(Xn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class pu{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,c=new pu(e,t,o,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mu(n,e){if(Gt("AsyncQueue",`${e}: ${n}`),Js(n))return new M(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ss{static emptySet(e){return new Ss(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||L.comparator(t.key,s.key):(t,s)=>L.comparator(t.key,s.key),this.keyedMap=Li(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ss;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Nf{constructor(){this.ga=new Ie(L.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):F(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class qs{constructor(e,t,s,i,r,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new qs(e,t,Ss.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class MA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class VA{constructor(){this.queries=Df(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const i=q(t),r=i.queries;i.queries=Df(),r.forEach(((o,c)=>{for(const l of c.Sa)l.onError(s)}))})(this,new M(b.ABORTED,"Firestore shutting down"))}}function Df(){return new as((n=>ig(n)),_a)}async function gu(n,e){const t=q(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.ba()&&e.Da()&&(s=2):(r=new MA,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await t.onListen(i,!0);break;case 1:r.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=mu(o,`Initialization of query '${ys(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,r),r.Sa.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&yu(t)}async function _u(n,e){const t=q(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const o=r.Sa.indexOf(e);o>=0&&(r.Sa.splice(o,1),r.Sa.length===0?i=e.Da()?0:1:!r.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function LA(n,e){const t=q(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const c of o.Sa)c.Fa(i)&&(s=!0);o.wa=i}}s&&yu(t)}function xA(n,e,t){const s=q(n),i=s.queries.get(e);if(i)for(const r of i.Sa)r.onError(t);s.queries.delete(e)}function yu(n){n.Ca.forEach((e=>{e.next()}))}var dl,Of;(Of=dl||(dl={})).Ma="default",Of.Cache="cache";class Eu{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new qs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==dl.Cache}}/**
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
 */class Bg{constructor(e){this.key=e}}class qg{constructor(e){this.key=e}}class FA{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=X(),this.mutatedKeys=X(),this.eu=rg(e),this.tu=new Ss(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Nf,i=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,p)=>{const m=i.get(f),T=ya(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),N=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let k=!1;m&&T?m.data.isEqual(T.data)?C!==N&&(s.track({type:3,doc:T}),k=!0):this.su(m,T)||(s.track({type:2,doc:T}),k=!0,(l&&this.eu(T,l)>0||u&&this.eu(T,u)<0)&&(c=!0)):!m&&T?(s.track({type:0,doc:T}),k=!0):m&&!T&&(s.track({type:1,doc:m}),k=!0,(l||u)&&(c=!0)),k&&(T?(o=o.add(T),r=N?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{tu:o,iu:s,Cs:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(T,C){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Rt:k})}};return N(T)-N(C)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(s),i=i??!1;const c=t&&!i?this._u():[],l=this.Xa.size===0&&this.current&&!i?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new qs(this.query,e.tu,r,o,e.mutatedKeys,l===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Nf,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=X(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new qg(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Bg(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=X();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return qs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const vu="SyncEngine";class UA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class BA{constructor(e){this.key=e,this.hu=!1}}class qA{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new as((c=>ig(c)),_a),this.Iu=new Map,this.Eu=new Set,this.du=new Ie(L.comparator),this.Au=new Map,this.Ru=new ou,this.Vu={},this.mu=new Map,this.fu=Bs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $A(n,e,t=!0){const s=zg(n);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await $g(s,e,t,!0),i}async function WA(n,e){const t=zg(n);await $g(t,e,!0,!1)}async function $g(n,e,t,s){const i=await lA(n.localStore,It(e)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return s&&(c=await jA(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Mg(n.remoteStore,i),c}async function jA(n,e,t,s,i){n.pu=(p,m,T)=>(async function(N,k,$,j){let Z=k.view.ru($);Z.Cs&&(Z=await Sf(N.localStore,k.query,!1).then((({documents:w})=>k.view.ru(w,Z))));const ge=j&&j.targetChanges.get(k.targetId),et=j&&j.targetMismatches.get(k.targetId)!=null,Te=k.view.applyChanges(Z,N.isPrimaryClient,ge,et);return Vf(N,k.targetId,Te.au),Te.snapshot})(n,p,m,T);const r=await Sf(n.localStore,e,!0),o=new FA(e,r.Qs),c=o.ru(r.documents),l=Sr.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),u=o.applyChanges(c,n.isPrimaryClient,l);Vf(n,t,u.au);const f=new UA(e,t,o);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),u.snapshot}async function HA(n,e,t){const s=q(n),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!_a(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await ul(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),t&&uu(s.remoteStore,i.targetId),fl(s,i.targetId)})).catch(Xs)):(fl(s,i.targetId),await ul(s.localStore,i.targetId,!0))}async function GA(n,e){const t=q(n),s=t.Tu.get(e),i=t.Iu.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),uu(t.remoteStore,s.targetId))}async function zA(n,e,t){const s=eS(n);try{const i=await(function(o,c){const l=q(o),u=le.now(),f=c.reduce(((T,C)=>T.add(C.key)),X());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(T=>{let C=zt(),N=X();return l.Ns.getEntries(T,f).next((k=>{C=k,C.forEach((($,j)=>{j.isValidDocument()||(N=N.add($))}))})).next((()=>l.localDocuments.getOverlayedDocuments(T,C))).next((k=>{p=k;const $=[];for(const j of c){const Z=cT(j,p.get(j.key).overlayedDocument);Z!=null&&$.push(new Nn(j.key,Z,Ym(Z.value.mapValue),at.exists(!0)))}return l.mutationQueue.addMutationBatch(T,u,$,c)})).next((k=>{m=k;const $=k.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(T,k.batchId,$)}))})).then((()=>({batchId:m.batchId,changes:ag(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Ie(Y)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(s,i.batchId,t),await Cr(s,i.changes),await Aa(s.remoteStore)}catch(i){const r=mu(i,"Failed to persist write");t.reject(r)}}async function Wg(n,e){const t=q(n);try{const s=await oA(t.localStore,e);e.targetChanges.forEach(((i,r)=>{const o=t.Au.get(r);o&&(ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ne(o.hu,14607):i.removedDocuments.size>0&&(ne(o.hu,42227),o.hu=!1))})),await Cr(t,s,e)}catch(s){await Xs(s)}}function Mf(n,e,t){const s=q(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(o,c){const l=q(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&yu(l)})(s.eventManager,e),i.length&&s.Pu.H_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function KA(n,e,t){const s=q(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Au.get(e),r=i&&i.key;if(r){let o=new Ie(L.comparator);o=o.insert(r,Fe.newNoDocument(r,B.min()));const c=X().add(r),l=new wa(B.min(),new Map,new Ie(Y),o,c);await Wg(s,l),s.du=s.du.remove(r),s.Au.delete(e),wu(s)}else await ul(s.localStore,e,!1).then((()=>fl(s,e,t))).catch(Xs)}async function QA(n,e){const t=q(n),s=e.batch.batchId;try{const i=await rA(t.localStore,e);Hg(t,s,null),jg(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Cr(t,i)}catch(i){await Xs(i)}}async function YA(n,e,t){const s=q(n);try{const i=await(function(o,c){const l=q(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(ne(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(s.localStore,e);Hg(s,e,t),jg(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Cr(s,i)}catch(i){await Xs(i)}}function jg(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Hg(n,e,t){const s=q(n);let i=s.Vu[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.Vu[s.currentUser.toKey()]=i}}function fl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||Gg(n,s)}))}function Gg(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(uu(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),wu(n))}function Vf(n,e,t){for(const s of t)s instanceof Bg?(n.Ru.addReference(s.key,e),XA(n,s)):s instanceof qg?(V(vu,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||Gg(n,s.key)):F(19791,{wu:s})}function XA(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(V(vu,"New document in limbo: "+t),n.Eu.add(s),wu(n))}function wu(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new L(oe.fromString(e)),s=n.fu.next();n.Au.set(s,new BA(t)),n.du=n.du.insert(t,s),Mg(n.remoteStore,new ln(It(ga(t.path)),s,"TargetPurposeLimboResolution",fa.ce))}}async function Cr(n,e,t){const s=q(n),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,l)=>{o.push(s.pu(l,e,t).then((u=>{var f;if((u||t)&&s.isPrimaryClient){const p=u?!u.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;s.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){i.push(u);const p=cu.As(l.targetId,u);r.push(p)}})))})),await Promise.all(o),s.Pu.H_(i),await(async function(l,u){const f=q(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>P.forEach(u,(m=>P.forEach(m.Es,(T=>f.persistence.referenceDelegate.addReference(p,m.targetId,T))).next((()=>P.forEach(m.ds,(T=>f.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))))))}catch(p){if(!Js(p))throw p;V(lu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const T=f.Ms.get(m),C=T.snapshotVersion,N=T.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(m,N)}}})(s.localStore,r))}async function JA(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){V(vu,"User change. New user:",e.toKey());const s=await kg(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new M(b.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Cr(t,s.Ls)}}function ZA(n,e){const t=q(n),s=t.Au.get(e);if(s&&s.hu)return X().add(s.key);{let i=X();const r=t.Iu.get(e);if(!r)return i;for(const o of r){const c=t.Tu.get(o);i=i.unionWith(c.view.nu)}return i}}function zg(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KA.bind(null,e),e.Pu.H_=LA.bind(null,e.eventManager),e.Pu.yu=xA.bind(null,e.eventManager),e}function eS(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YA.bind(null,e),e}class Fo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ia(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return iA(this.persistence,new tA,e.initialUser,this.serializer)}Cu(e){return new Pg(au.mi,this.serializer)}Du(e){return new hA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fo.provider={build:()=>new Fo};class tS extends Fo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ne(this.persistence.referenceDelegate instanceof Lo,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new BT(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?He.withCacheSize(this.cacheSizeBytes):He.DEFAULT;return new Pg((s=>Lo.mi(s,t)),this.serializer)}}class pl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Mf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=JA.bind(null,this.syncEngine),await OA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new VA})()}createDatastore(e){const t=Ia(e.databaseInfo.databaseId),s=(function(r){return new gA(r)})(e.databaseInfo);return(function(r,o,c,l){return new vA(r,o,c,l)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,i,r,o,c){return new IA(s,i,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Mf(this.syncEngine,t,0)),(function(){return bf.v()?new bf:new dA})())}createSyncEngine(e,t){return(function(i,r,o,c,l,u,f){const p=new qA(i,r,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const r=q(i);V(Xn,"RemoteStore shutting down."),r.Ea.add(5),await Rr(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}pl.provider={build:()=>new pl};/**
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
 */class Iu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Gt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Tn="FirestoreClient";class nS{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=xe.UNAUTHENTICATED,this.clientId=Ql.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{V(Tn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(V(Tn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=mu(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function bc(n,e){n.asyncQueue.verifyOperationInProgress(),V(Tn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async i=>{s.isEqual(i)||(await kg(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Lf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await sS(n);V(Tn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>kf(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,i)=>kf(e.remoteStore,i))),n._onlineComponents=e}async function sS(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Tn,"Using user provided OfflineComponentProvider");try{await bc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Ls("Error using user provided cache. Falling back to memory cache: "+t),await bc(n,new Fo)}}else V(Tn,"Using default OfflineComponentProvider"),await bc(n,new tS(void 0));return n._offlineComponents}async function Kg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Tn,"Using user provided OnlineComponentProvider"),await Lf(n,n._uninitializedComponentsProvider._online)):(V(Tn,"Using default OnlineComponentProvider"),await Lf(n,new pl))),n._onlineComponents}function iS(n){return Kg(n).then((e=>e.syncEngine))}async function Uo(n){const e=await Kg(n),t=e.eventManager;return t.onListen=$A.bind(null,e.syncEngine),t.onUnlisten=HA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=WA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=GA.bind(null,e.syncEngine),t}function rS(n,e,t={}){const s=new $t;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,c,l,u){const f=new Iu({next:m=>{f.Nu(),o.enqueueAndForget((()=>_u(r,p)));const T=m.docs.has(c);!T&&m.fromCache?u.reject(new M(b.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&l&&l.source==="server"?u.reject(new M(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Eu(ga(c.path),f,{includeMetadataChanges:!0,qa:!0});return gu(r,p)})(await Uo(n),n.asyncQueue,e,t,s))),s.promise}function oS(n,e,t={}){const s=new $t;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,c,l,u){const f=new Iu({next:m=>{f.Nu(),o.enqueueAndForget((()=>_u(r,p))),m.fromCache&&l.source==="server"?u.reject(new M(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Eu(c,f,{includeMetadataChanges:!0,qa:!0});return gu(r,p)})(await Uo(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function Qg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const xf=new Map;/**
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
 */const Yg="firestore.googleapis.com",Ff=!0;class Uf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new M(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yg,this.ssl=Ff}else this.host=e.host,this.ssl=e.ssl??Ff;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=bg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<FT)throw new M(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}II("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qg(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sa{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new dI;switch(s.type){case"firstParty":return new gI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new M(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=xf.get(t);s&&(V("ComponentProvider","Removing Datastore"),xf.delete(t),s.terminate())})(this),Promise.resolve()}}function Xg(n,e,t,s={}){var u;n=Je(n,Sa);const i=Pn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&(Wl(`https://${c}`),jl("Firestore",!0)),r.host!==Yg&&r.host!==c&&Ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:i,emulatorOptions:s};if(!_n(l,o)&&(n._setSettings(l),s.mockUserToken)){let f,p;if(typeof s.mockUserToken=="string")f=s.mockUserToken,p=xe.MOCK_USER;else{f=Em(s.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const m=s.mockUserToken.sub||s.mockUserToken.user_id;if(!m)throw new M(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new xe(m)}n._authCredentials=new fI(new Fm(f,p))}}/**
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
 */class Jt{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Jt(this.firestore,e,this._query)}}class fe{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fe(this.firestore,e,this._key)}toJSON(){return{type:fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Tr(t,fe._jsonSchema))return new fe(e,s||null,new L(oe.fromString(t.referencePath)))}}fe._jsonSchemaVersion="firestore/documentReference/1.0",fe._jsonSchema={type:we("string",fe._jsonSchemaVersion),referencePath:we("string")};class pn extends Jt{constructor(e,t,s){super(e,t,ga(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fe(this.firestore,null,new L(e))}withConverter(e){return new pn(this.firestore,e,this._path)}}function Hi(n,e,...t){if(n=te(n),Um("collection","path",e),n instanceof Sa){const s=oe.fromString(e,...t);return Xd(s),new pn(n,null,s)}{if(!(n instanceof fe||n instanceof pn))throw new M(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(oe.fromString(e,...t));return Xd(s),new pn(n.firestore,null,s)}}function ze(n,e,...t){if(n=te(n),arguments.length===1&&(e=Ql.newId()),Um("doc","path",e),n instanceof Sa){const s=oe.fromString(e,...t);return Yd(s),new fe(n,null,new L(s))}{if(!(n instanceof fe||n instanceof pn))throw new M(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(oe.fromString(e,...t));return Yd(s),new fe(n.firestore,n instanceof pn?n.converter:null,new L(s))}}/**
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
 */const Bf="AsyncQueue";class qf{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Dg(this,"async_queue_retry"),this._c=()=>{const s=Cc();s&&V(Bf,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Cc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Cc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new $t;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Js(e))throw e;V(Bf,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Gt("INTERNAL UNHANDLED ERROR: ",$f(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=pu.createAndSchedule(this,e,t,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&F(47125,{Pc:$f(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function $f(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function Wf(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const i=t;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1})(n,["next","error","complete"])}class Kt extends Sa{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new qf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qf(e),this._firestoreClient=void 0,await e}}}function aS(n,e){const t=typeof n=="object"?n:zl(),s=typeof n=="string"?n:No,i=Qs(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=gm("firestore");r&&Xg(i,...r)}return i}function Ra(n){if(n._terminated)throw new M(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||cS(n),n._firestoreClient}function cS(n){var s,i,r;const e=n._freezeSettings(),t=(function(c,l,u,f){return new MI(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Qg(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((r=e.localCache)!=null&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new nS(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rt(Me.fromBase64String(e))}catch(t){throw new M(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new rt(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Tr(e,rt._jsonSchema))return rt.fromBase64String(e.bytes)}}rt._jsonSchemaVersion="firestore/bytes/1.0",rt._jsonSchema={type:we("string",rt._jsonSchemaVersion),bytes:we("string")};/**
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
 */class Ca{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class br{constructor(e){this._methodName=e}}/**
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
 */class At{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:At._jsonSchemaVersion}}static fromJSON(e){if(Tr(e,At._jsonSchema))return new At(e.latitude,e.longitude)}}At._jsonSchemaVersion="firestore/geoPoint/1.0",At._jsonSchema={type:we("string",At._jsonSchemaVersion),latitude:we("number"),longitude:we("number")};/**
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
 */class St{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:St._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Tr(e,St._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new St(e.vectorValues);throw new M(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}St._jsonSchemaVersion="firestore/vectorValue/1.0",St._jsonSchema={type:we("string",St._jsonSchemaVersion),vectorValues:we("object")};/**
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
 */const lS=/^__.*__$/;class uS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Nn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ar(e,this.data,t,this.fieldTransforms)}}class Jg{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Nn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ac:n})}}class Tu{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Tu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Bo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Zg(this.Ac)&&lS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class hS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ia(e)}Cc(e,t,s,i=!1){return new Tu({Ac:e,methodName:t,Dc:s,path:Oe.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ba(n){const e=n._freezeSettings(),t=Ia(n._databaseId);return new hS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function e_(n,e,t,s,i,r={}){const o=n.Cc(r.merge||r.mergeFields?2:0,e,t,i);Ru("Data must be an object, but it was:",o,s);const c=t_(s,o);let l,u;if(r.merge)l=new st(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const p of r.mergeFields){const m=ml(e,p,t);if(!o.contains(m))throw new M(b.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);s_(f,m)||f.push(m)}l=new st(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new uS(new Ge(c),l,u)}class Pr extends br{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pr}}class Au extends br{_toFieldTransform(e){return new mg(e.path,new or)}isEqual(e){return e instanceof Au}}class Su extends br{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new lr(e.serializer,ug(e.serializer,this.Fc));return new mg(e.path,t)}isEqual(e){return e instanceof Su&&this.Fc===e.Fc}}function dS(n,e,t,s){const i=n.Cc(1,e,t);Ru("Data must be an object, but it was:",i,s);const r=[],o=Ge.empty();kn(s,((l,u)=>{const f=Cu(e,l,t);u=te(u);const p=i.yc(f);if(u instanceof Pr)r.push(f);else{const m=kr(u,p);m!=null&&(r.push(f),o.set(f,m))}}));const c=new st(r);return new Jg(o,c,i.fieldTransforms)}function fS(n,e,t,s,i,r){const o=n.Cc(1,e,t),c=[ml(e,s,t)],l=[i];if(r.length%2!=0)throw new M(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)c.push(ml(e,r[m])),l.push(r[m+1]);const u=[],f=Ge.empty();for(let m=c.length-1;m>=0;--m)if(!s_(u,c[m])){const T=c[m];let C=l[m];C=te(C);const N=o.yc(T);if(C instanceof Pr)u.push(T);else{const k=kr(C,N);k!=null&&(u.push(T),f.set(T,k))}}const p=new st(u);return new Jg(f,p,o.fieldTransforms)}function pS(n,e,t,s=!1){return kr(t,n.Cc(s?4:3,e))}function kr(n,e){if(n_(n=te(n)))return Ru("Unsupported field value:",e,n),t_(n,e);if(n instanceof br)return(function(s,i){if(!Zg(i.Ac))throw i.Sc(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,i){const r=[];let o=0;for(const c of s){let l=kr(c,i.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}})(n,e)}return(function(s,i){if((s=te(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ug(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=le.fromDate(s);return{timestampValue:Vo(i.serializer,r)}}if(s instanceof le){const r=new le(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Vo(i.serializer,r)}}if(s instanceof At)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof rt)return{bytesValue:wg(i.serializer,s._byteString)};if(s instanceof fe){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ru(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof St)return(function(o,c){return{mapValue:{fields:{[Km]:{stringValue:Qm},[Do]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return tu(c.serializer,u)}))}}}}}})(s,i);throw i.Sc(`Unsupported field value: ${da(s)}`)})(n,e)}function t_(n,e){const t={};return $m(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kn(n,((s,i)=>{const r=kr(i,e.mc(s));r!=null&&(t[s]=r)})),{mapValue:{fields:t}}}function n_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof At||n instanceof rt||n instanceof fe||n instanceof br||n instanceof St)}function Ru(n,e,t){if(!n_(t)||!Bm(t)){const s=da(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function ml(n,e,t){if((e=te(e))instanceof Ca)return e._internalPath;if(typeof e=="string")return Cu(n,e);throw Bo("Field path arguments must be of type string or ",n,!1,void 0,t)}const mS=new RegExp("[~\\*/\\[\\]]");function Cu(n,e,t){if(e.search(mS)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ca(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bo(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new M(b.INVALID_ARGUMENT,c+n+l)}function s_(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class i_{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gS extends i_{data(){return super.data()}}function Pa(n,e){return typeof e=="string"?Cu(n,e):e instanceof Ca?e._internalPath:e._delegate._internalPath}/**
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
 */function r_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bu{}class Pu extends bu{}function gl(n,e,...t){let s=[];e instanceof bu&&s.push(e),s=s.concat(t),(function(r){const o=r.filter((l=>l instanceof ku)).length,c=r.filter((l=>l instanceof ka)).length;if(o>1||o>0&&c>0)throw new M(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const i of s)n=i._apply(n);return n}class ka extends Pu{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ka(e,t,s)}_apply(e){const t=this._parse(e);return o_(e._query,t),new Jt(e.firestore,e.converter,rl(e._query,t))}_parse(e){const t=ba(e.firestore);return(function(r,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new M(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Gf(p,f);const C=[];for(const N of p)C.push(Hf(l,r,N));m={arrayValue:{values:C}}}else m=Hf(l,r,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Gf(p,f),m=pS(c,o,p,f==="in"||f==="not-in");return ve.create(u,f,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function jf(n,e,t){const s=e,i=Pa("where",n);return ka._create(i,s,t)}class ku extends bu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ku(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:mt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,r){let o=i;const c=r.getFlattenedFilters();for(const l of c)o_(o,l),o=rl(o,l)})(e._query,t),new Jt(e.firestore,e.converter,rl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Nu extends Pu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Nu(e,t)}_apply(e){const t=(function(i,r,o){if(i.startAt!==null)throw new M(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new M(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rr(r,o)})(e._query,this._field,this._direction);return new Jt(e.firestore,e.converter,(function(i,r){const o=i.explicitOrderBy.concat([r]);return new Zs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function _l(n,e="asc"){const t=e,s=Pa("orderBy",n);return Nu._create(s,t)}class Du extends Pu{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Du(e,t,s)}_apply(e){return new Jt(e.firestore,e.converter,Mo(e._query,this._limit,this._limitType))}}function _S(n){return TI("limit",n),Du._create("limit",n,"F")}function Hf(n,e,t){if(typeof(t=te(t))=="string"){if(t==="")throw new M(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sg(e)&&t.indexOf("/")!==-1)throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(oe.fromString(t));if(!L.isDocumentKey(s))throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return of(n,new L(s))}if(t instanceof fe)return of(n,t._key);throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${da(t)}.`)}function Gf(n,e){if(!Array.isArray(n)||n.length===0)throw new M(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function o_(n,e){const t=(function(i,r){for(const o of i)for(const c of o.getFlattenedFilters())if(r.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new M(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class yS{convertValue(e,t="none"){switch(wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return kn(e,((i,r)=>{s[i]=this.convertValue(r,t)})),s}convertVectorValue(e){var s,i,r;const t=(r=(i=(s=e.fields)==null?void 0:s[Do].arrayValue)==null?void 0:i.values)==null?void 0:r.map((o=>pe(o.doubleValue)));return new St(t)}convertGeoPoint(e){return new At(pe(e.latitude),pe(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ma(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(nr(e));default:return null}}convertTimestamp(e){const t=En(e);return new le(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=oe.fromString(e);ne(Cg(s),9688,{name:e});const i=new sr(s.get(1),s.get(3)),r=new L(s.popFirst(5));return i.isEqual(t)||Gt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function a_(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Fi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kn extends i_{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Pa("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Kn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Kn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Kn._jsonSchema={type:we("string",Kn._jsonSchemaVersion),bundleSource:we("string","DocumentSnapshot"),bundleName:we("string"),bundle:we("string")};class Eo extends Kn{data(e={}){return super.data(e)}}class Qn{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Fi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Eo(this._firestore,this._userDataWriter,s.key,s,new Fi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((c=>{const l=new Eo(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Fi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new Eo(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Fi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:ES(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Qn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ql.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ES(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
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
 */function Rs(n){n=Je(n,fe);const e=Je(n.firestore,Kt);return rS(Ra(e),n._key).then((t=>c_(e,n,t)))}Qn._jsonSchemaVersion="firestore/querySnapshot/1.0",Qn._jsonSchema={type:we("string",Qn._jsonSchemaVersion),bundleSource:we("string","QuerySnapshot"),bundleName:we("string"),bundle:we("string")};class Ou extends yS{constructor(e){super(),this.firestore=e}convertBytes(e){return new rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fe(this.firestore,null,t)}}function vS(n){n=Je(n,Jt);const e=Je(n.firestore,Kt),t=Ra(e),s=new Ou(e);return r_(n._query),oS(t,n._query).then((i=>new Qn(e,s,n,i)))}function mn(n,e,t){n=Je(n,fe);const s=Je(n.firestore,Kt),i=a_(n.converter,e,t);return Na(s,[e_(ba(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,at.none())])}function ws(n,e,t,...s){n=Je(n,fe);const i=Je(n.firestore,Kt),r=ba(i);let o;return o=typeof(e=te(e))=="string"||e instanceof Ca?fS(r,"updateDoc",n._key,e,t,s):dS(r,"updateDoc",n._key,e),Na(i,[o.toMutation(n._key,at.exists(!0))])}function yl(n){return Na(Je(n.firestore,Kt),[new nu(n._key,at.none())])}function wS(n,e){const t=Je(n.firestore,Kt),s=ze(n),i=a_(n.converter,e);return Na(t,[e_(ba(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,at.exists(!1))]).then((()=>s))}function vo(n,...e){var l,u,f;n=te(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Wf(e[s])||(t=e[s++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Wf(e[s])){const p=e[s];e[s]=(l=p.next)==null?void 0:l.bind(p),e[s+1]=(u=p.error)==null?void 0:u.bind(p),e[s+2]=(f=p.complete)==null?void 0:f.bind(p)}let r,o,c;if(n instanceof fe)o=Je(n.firestore,Kt),c=ga(n._key.path),r={next:p=>{e[s]&&e[s](c_(o,n,p))},error:e[s+1],complete:e[s+2]};else{const p=Je(n,Jt);o=Je(p.firestore,Kt),c=p._query;const m=new Ou(o);r={next:T=>{e[s]&&e[s](new Qn(o,m,p,T))},error:e[s+1],complete:e[s+2]},r_(n._query)}return(function(m,T,C,N){const k=new Iu(N),$=new Eu(T,k,C);return m.asyncQueue.enqueueAndForget((async()=>gu(await Uo(m),$))),()=>{k.Nu(),m.asyncQueue.enqueueAndForget((async()=>_u(await Uo(m),$)))}})(Ra(o),c,i,r)}function Na(n,e){return(function(s,i){const r=new $t;return s.asyncQueue.enqueueAndForget((async()=>zA(await iS(s),i,r))),r.promise})(Ra(n),e)}function c_(n,e,t){const s=t.docs.get(e._key),i=new Ou(n);return new Kn(n,i,e._key,s,new Fi(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */function IS(){return new Pr("deleteField")}function TS(){return new Au("serverTimestamp")}function sD(n){return new Su("increment",n)}(function(e,t=!0){(function(i){Ys=i})(os),pt(new lt("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),c=new Kt(new pI(s.getProvider("auth-internal")),new _I(o,s.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new M(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sr(u.options.projectId,f)})(o,i),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),Xe(Gd,zd,e),Xe(Gd,zd,"esm2020")})();var AS="firebase",SS="12.6.0";/**
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
 */Xe(AS,SS,"app");var zf={};const Kf="@firebase/database",Qf="1.1.0";/**
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
 */let l_="";function RS(n){l_=n}/**
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
 */class CS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ji(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class bS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const u_=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CS(e)}}catch{}return new bS},Hn=u_("localStorage"),PS=u_("sessionStorage");/**
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
 */const Cs=new Ir("@firebase/database"),kS=(function(){let n=1;return function(){return n++}})(),h_=function(n){const e=Zv(n),t=new Qv;t.update(e);const s=t.digest();return $l.encodeByteArray(s)},Nr=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Nr.apply(null,s):typeof s=="object"?e+=ke(s):e+=s,e+=" "}return e};let Gi=null,Yf=!0;const NS=function(n,e){D(!0,"Can't turn on custom loggers persistently."),Cs.logLevel=Q.VERBOSE,Gi=Cs.log.bind(Cs)},De=function(...n){if(Yf===!0&&(Yf=!1,Gi===null&&PS.get("logging_enabled")===!0&&NS()),Gi){const e=Nr.apply(null,n);Gi(e)}},Dr=function(n){return function(...e){De(n,...e)}},El=function(...n){const e="FIREBASE INTERNAL ERROR: "+Nr(...n);Cs.error(e)},Qt=function(...n){const e=`FIREBASE FATAL ERROR: ${Nr(...n)}`;throw Cs.error(e),new Error(e)},Ze=function(...n){const e="FIREBASE WARNING: "+Nr(...n);Cs.warn(e)},DS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Da=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},OS=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},$s="[MIN_NAME]",Jn="[MAX_NAME]",ls=function(n,e){if(n===e)return 0;if(n===$s||e===Jn)return-1;if(e===$s||n===Jn)return 1;{const t=Xf(n),s=Xf(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},MS=function(n,e){return n===e?0:n<e?-1:1},Ii=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ke(e))},Mu=function(n){if(typeof n!="object"||n===null)return ke(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ke(e[s]),t+=":",t+=Mu(n[e[s]]);return t+="}",t},d_=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Be(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const f_=function(n){D(!Da(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,c,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(c=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=c+s,o=Math.round(n*Math.pow(2,t-c)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const f=u.join("");let p="";for(l=0;l<64;l+=8){let m=parseInt(f.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},VS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},LS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xS(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const FS=new RegExp("^-?(0*)\\d{1,10}$"),US=-2147483648,BS=2147483647,Xf=function(n){if(FS.test(n)){const e=Number(n);if(e>=US&&e<=BS)return e}return null},ti=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ze("Exception was thrown by user callback.",t),e},Math.floor(0))}},qS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class $S{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,nt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ze(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class WS{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(De("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ze(e)}}class wo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wo.OWNER="owner";/**
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
 */const Vu="5",p_="v",m_="s",g_="r",__="f",y_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,E_="ls",v_="p",vl="ac",w_="websocket",I_="long_polling";/**
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
 */class T_{constructor(e,t,s,i,r=!1,o="",c=!1,l=!1,u=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function jS(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function A_(n,e,t){D(typeof e=="string","typeof type must == string"),D(typeof t=="object","typeof params must == object");let s;if(e===w_)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===I_)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jS(n)&&(t.ns=n.namespace);const i=[];return Be(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class HS{constructor(){this.counters_={}}incrementCounter(e,t=1){Pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return kv(this.counters_)}}/**
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
 */const Pc={},kc={};function Lu(n){const e=n.toString();return Pc[e]||(Pc[e]=new HS),Pc[e]}function GS(n,e){const t=n.toString();return kc[t]||(kc[t]=e()),kc[t]}/**
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
 */class zS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ti(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Jf="start",KS="close",QS="pLPCommand",YS="pRTLPCB",S_="id",R_="pw",C_="ser",XS="cb",JS="seg",ZS="ts",eR="d",tR="dframe",b_=1870,P_=30,nR=b_-P_,sR=25e3,iR=3e4;class Ts{constructor(e,t,s,i,r,o,c){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Dr(e),this.stats_=Lu(t),this.urlFn=l=>(this.appCheckToken&&(l[vl]=this.appCheckToken),A_(t,I_,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new zS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(iR)),OS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xu((...r)=>{const[o,c,l,u,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jf)this.id=c,this.password=l;else if(o===KS)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,c]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,c)},()=>{this.onClosed_()},this.urlFn);const s={};s[Jf]="t",s[C_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[XS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[p_]=Vu,this.transportSessionId&&(s[m_]=this.transportSessionId),this.lastSessionId&&(s[E_]=this.lastSessionId),this.applicationId&&(s[v_]=this.applicationId),this.appCheckToken&&(s[vl]=this.appCheckToken),typeof location<"u"&&location.hostname&&y_.test(location.hostname)&&(s[g_]=__);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ts.forceAllow_=!0}static forceDisallow(){Ts.forceDisallow_=!0}static isAvailable(){return Ts.forceAllow_?!0:!Ts.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!VS()&&!LS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ke(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=fm(t),i=d_(s,nR);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[tR]="t",s[S_]=e,s[R_]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ke(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class xu{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kS(),window[QS+this.uniqueCallbackIdentifier]=e,window[YS+this.uniqueCallbackIdentifier]=t,this.myIFrame=xu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(c){De("frame writing exception"),c.stack&&De(c.stack),De(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||De("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[S_]=this.myID,e[R_]=this.myPW,e[C_]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+P_+s.length<=b_;){const o=this.pendingSegs.shift();s=s+"&"+JS+i+"="+o.seg+"&"+ZS+i+"="+o.ts+"&"+eR+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(sR)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{De("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const rR=16384,oR=45e3;let qo=null;typeof MozWebSocket<"u"?qo=MozWebSocket:typeof WebSocket<"u"&&(qo=WebSocket);class ut{constructor(e,t,s,i,r,o,c){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Dr(this.connId),this.stats_=Lu(t),this.connURL=ut.connectionURL_(t,o,c,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[p_]=Vu,typeof location<"u"&&location.hostname&&y_.test(location.hostname)&&(o[g_]=__),t&&(o[m_]=t),s&&(o[E_]=s),i&&(o[vl]=i),r&&(o[v_]=r),A_(e,w_,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hn.set("previous_websocket_failure",!0);try{let s;qv(),this.mySock=new qo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ut.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&qo!==null&&!ut.forceDisallow_}static previouslyFailed(){return Hn.isInMemoryStorage||Hn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ji(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ke(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=d_(t,rR);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oR))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ut.responsesRequiredToBeHealthy=2;ut.healthyTimeout=3e4;/**
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
 */class ur{static get ALL_TRANSPORTS(){return[Ts,ut]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ut&&ut.isAvailable();let s=t&&!ut.previouslyFailed();if(e.webSocketOnly&&(t||Ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ut];else{const i=this.transports_=[];for(const r of ur.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ur.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ur.globalTransportInitialized_=!1;/**
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
 */const aR=6e4,cR=5e3,lR=10*1024,uR=100*1024,Nc="t",Zf="d",hR="s",ep="r",dR="e",tp="o",np="a",sp="n",ip="p",fR="h";class pR{constructor(e,t,s,i,r,o,c,l,u,f){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=c,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Dr("c:"+this.id+":"),this.transportManager_=new ur(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=zi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nc in e){const t=e[Nc];t===np?this.upgradeIfSecondaryHealthy_():t===ep?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===tp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ii("t",e),s=Ii("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ip,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:np,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:sp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ii("t",e),s=Ii("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ii(Nc,e);if(Zf in e){const s=e[Zf];if(t===fR){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===sp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===hR?this.onConnectionShutdown_(s):t===ep?this.onReset_(s):t===dR?El("Server Error: "+s):t===tp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):El("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Vu!==s&&Ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),zi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ip,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class k_{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class N_{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class $o extends N_{static getInstance(){return new $o}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const rp=32,op=768;class se{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ee(){return new se("")}function G(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function An(n){return n.pieces_.length-n.pieceNum_}function re(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new se(n.pieces_,e)}function Fu(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function mR(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function hr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function D_(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new se(e,0)}function me(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new se(t,0)}function z(n){return n.pieceNum_>=n.pieces_.length}function Qe(n,e){const t=G(n),s=G(e);if(t===null)return e;if(t===s)return Qe(re(n),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function gR(n,e){const t=hr(n,0),s=hr(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=ls(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Uu(n,e){if(An(n)!==An(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ot(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(An(n)>An(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class _R{constructor(e,t){this.errorPrefix_=t,this.parts_=hr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ha(this.parts_[s]);O_(this)}}function yR(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ha(e),O_(n)}function ER(n){const e=n.parts_.pop();n.byteLength_-=ha(e),n.parts_.length>0&&(n.byteLength_-=1)}function O_(n){if(n.byteLength_>op)throw new Error(n.errorPrefix_+"has a key path longer than "+op+" bytes ("+n.byteLength_+").");if(n.parts_.length>rp)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rp+") or object contains a cycle "+$n(n))}function $n(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Bu extends N_{static getInstance(){return new Bu}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ti=1e3,vR=300*1e3,ap=30*1e3,wR=1.3,IR=3e4,TR="server_kill",cp=3;class Wt extends k_{constructor(e,t,s,i,r,o,c,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=c,this.authOverride_=l,this.id=Wt.nextPersistentConnectionId_++,this.log_=Dr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ti,this.maxReconnectDelay_=vR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$o.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ke(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Ot,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const c=o.d;o.s==="ok"?t.resolve(c):t.reject(c)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const c={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,c=>{const l=c.d,u=c.s;Wt.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",c),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Pt(e,"w")){const s=Ms(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Kv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ap)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=zv(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):El("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ti,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ti,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>IR&&(this.reconnectDelay_=Ti),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wt.nextConnectionId_++,r=this.lastSessionId;let o=!1,c=null;const l=function(){c?c.close():(o=!0,s())},u=function(p){D(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(p)};this.realtime_={close:l,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?De("getToken() completed but was canceled"):(De("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,c=new pR(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,T=>{Ze(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(TR)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Ze(p),l())}}}interrupt(e){De("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){De("Resuming connection for reason: "+e),delete this.interruptReasons_[e],bo(this.interruptReasons_)&&(this.reconnectDelay_=Ti,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Mu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){De("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=cp&&(this.reconnectDelay_=ap,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){De("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=cp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+l_.replace(/\./g,"-")]=1,Hl()?e["framework.cordova"]=1:wm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$o.getInstance().currentlyOnline();return bo(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
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
 */class K{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new K(e,t)}}/**
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
 */class Oa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new K($s,e),i=new K($s,t);return this.compare(s,i)!==0}minPost(){return K.MIN}}/**
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
 */let oo;class M_ extends Oa{static get __EMPTY_NODE(){return oo}static set __EMPTY_NODE(e){oo=e}compare(e,t){return ls(e.name,t.name)}isDefinedOn(e){throw zs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return K.MIN}maxPost(){return new K(Jn,oo)}makePost(e,t){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,oo)}toString(){return".key"}}const bs=new M_;/**
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
 */class ao{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Pe.RED,this.left=i??Ye.EMPTY_NODE,this.right=r??Ye.EMPTY_NODE}copy(e,t,s,i,r){return new Pe(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ye.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class AR{copy(e,t,s,i,r){return this}insert(e,t,s){return new Pe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ye{constructor(e,t=Ye.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ye(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new Ye(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ao(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ao(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ao(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ao(this.root_,null,this.comparator_,!0,e)}}Ye.EMPTY_NODE=new AR;/**
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
 */function SR(n,e){return ls(n.name,e.name)}function qu(n,e){return ls(n,e)}/**
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
 */let wl;function RR(n){wl=n}const V_=function(n){return typeof n=="number"?"number:"+f_(n):"string:"+n},L_=function(n){if(n.isLeafNode()){const e=n.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pt(e,".sv"),"Priority must be a string or number.")}else D(n===wl||n.isEmpty(),"priority of unexpected type.");D(n===wl||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let lp;class Ce{static set __childrenNodeConstructor(e){lp=e}static get __childrenNodeConstructor(){return lp}constructor(e,t=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),L_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:G(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=G(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||An(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+V_(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=f_(this.value_):e+=this.value_,this.lazyHash_=h_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(t),r=Ce.VALUE_TYPE_ORDER.indexOf(s);return D(i>=0,"Unknown leaf type: "+t),D(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let x_,F_;function CR(n){x_=n}function bR(n){F_=n}class PR extends Oa{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?ls(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return K.MIN}maxPost(){return new K(Jn,new Ce("[PRIORITY-POST]",F_))}makePost(e,t){const s=x_(e);return new K(t,new Ce("[PRIORITY-POST]",s))}toString(){return".priority"}}const ue=new PR;/**
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
 */const kR=Math.log(2);class NR{constructor(e){const t=r=>parseInt(Math.log(r)/kR,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wo=function(n,e,t,s){n.sort(e);const i=function(l,u){const f=u-l;let p,m;if(f===0)return null;if(f===1)return p=n[l],m=t?t(p):p,new Pe(m,p.node,Pe.BLACK,null,null);{const T=parseInt(f/2,10)+l,C=i(l,T),N=i(T+1,u);return p=n[T],m=t?t(p):p,new Pe(m,p.node,Pe.BLACK,C,N)}},r=function(l){let u=null,f=null,p=n.length;const m=function(C,N){const k=p-C,$=p;p-=C;const j=i(k+1,$),Z=n[k],ge=t?t(Z):Z;T(new Pe(ge,Z.node,N,null,j))},T=function(C){u?(u.left=C,u=C):(f=C,u=C)};for(let C=0;C<l.count;++C){const N=l.nextBitIsOne(),k=Math.pow(2,l.count-(C+1));N?m(k,Pe.BLACK):(m(k,Pe.BLACK),m(k,Pe.RED))}return f},o=new NR(n.length),c=r(o);return new Ye(s||e,c)};/**
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
 */let Dc;const ps={};class Ft{static get Default(){return D(ps&&ue,"ChildrenNode.ts has not been loaded"),Dc=Dc||new Ft({".priority":ps},{".priority":ue}),Dc}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ms(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ye?t:null}hasIndex(e){return Pt(this.indexSet_,e.toString())}addIndex(e,t){D(e!==bs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(K.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let c;i?c=Wo(s,e.getCompare()):c=ps;const l=e.toString(),u={...this.indexSet_};u[l]=e;const f={...this.indexes_};return f[l]=c,new Ft(f,u)}addToIndexes(e,t){const s=Po(this.indexes_,(i,r)=>{const o=Ms(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),i===ps)if(o.isDefinedOn(e.node)){const c=[],l=t.getIterator(K.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&c.push(u),u=l.getNext();return c.push(e),Wo(c,o.getCompare())}else return ps;else{const c=t.get(e.name);let l=i;return c&&(l=l.remove(new K(e.name,c))),l.insert(e,e.node)}});return new Ft(s,this.indexSet_)}removeFromIndexes(e,t){const s=Po(this.indexes_,i=>{if(i===ps)return i;{const r=t.get(e.name);return r?i.remove(new K(e.name,r)):i}});return new Ft(s,this.indexSet_)}}/**
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
 */let Ai;class U{static get EMPTY_NODE(){return Ai||(Ai=new U(new Ye(qu),null,Ft.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&L_(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ai}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ai:t}}getChild(e){const t=G(e);return t===null?this:this.getImmediateChild(t).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(D(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new K(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ai:this.priorityNode_;return new U(i,o,r)}}updateChild(e,t){const s=G(e);if(s===null)return t;{D(G(e)!==".priority"||An(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(re(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(ue,(o,c)=>{t[o]=c.val(e),s++,r&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const c in t)o[c]=t[c];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+V_(this.getPriority().val())+":"),this.forEachChild(ue,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":h_(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new K(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new K(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new K(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Or?-1:0}withIndex(e){if(e===bs||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===bs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(ue),i=t.getIterator(ue);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bs?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DR extends U{constructor(){super(new Ye(qu),U.EMPTY_NODE,Ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const Or=new DR;Object.defineProperties(K,{MIN:{value:new K($s,U.EMPTY_NODE)},MAX:{value:new K(Jn,Or)}});M_.__EMPTY_NODE=U.EMPTY_NODE;Ce.__childrenNodeConstructor=U;RR(Or);bR(Or);/**
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
 */const OR=!0;function Ee(n,e=null){if(n===null)return U.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ce(t,Ee(e))}if(!(n instanceof Array)&&OR){const t=[];let s=!1;if(Be(n,(o,c)=>{if(o.substring(0,1)!=="."){const l=Ee(c);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new K(o,l)))}}),t.length===0)return U.EMPTY_NODE;const r=Wo(t,SR,o=>o.name,qu);if(s){const o=Wo(t,ue.getCompare());return new U(r,Ee(e),new Ft({".priority":o},{".priority":ue}))}else return new U(r,Ee(e),Ft.Default)}else{let t=U.EMPTY_NODE;return Be(n,(s,i)=>{if(Pt(n,s)&&s.substring(0,1)!=="."){const r=Ee(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Ee(e))}}CR(Ee);/**
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
 */class MR extends Oa{constructor(e){super(),this.indexPath_=e,D(!z(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?ls(e.name,t.name):r}makePost(e,t){const s=Ee(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,s);return new K(t,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,Or);return new K(Jn,e)}toString(){return hr(this.indexPath_,0).join("/")}}/**
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
 */class VR extends Oa{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ls(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,t){const s=Ee(e);return new K(t,s)}toString(){return".value"}}const LR=new VR;/**
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
 */function U_(n){return{type:"value",snapshotNode:n}}function Ws(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function dr(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function fr(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function xR(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class $u{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const c=e.getImmediateChild(t);return c.getChild(i).equals(s.getChild(i))&&c.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(dr(t,c)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):c.isEmpty()?o.trackChildChange(Ws(t,s)):o.trackChildChange(fr(t,s,c))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,r)=>{t.hasChild(i)||s.trackChildChange(dr(i,r))}),t.isLeafNode()||t.forEachChild(ue,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(fr(i,r,o))}else s.trackChildChange(Ws(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class pr{constructor(e){this.indexedFilter_=new $u(e.getIndex()),this.index_=e.getIndex(),this.startPost_=pr.getStartPost_(e),this.endPost_=pr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new K(t,s))||(s=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=U.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const r=this;return t.forEachChild(ue,(o,c)=>{r.matches(new K(o,c))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class FR{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new pr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new K(t,s))||(s=U.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const c=r.getNext();if(this.withinDirectionalStart(c))if(this.withinDirectionalEnd(c))i=i.updateImmediateChild(c.name,c.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const c=r.getNext();o<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?o++:i=i.updateImmediateChild(c.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(m,T)=>p(T,m)}else o=this.index_.getCompare();const c=e;D(c.numChildren()===this.limit_,"");const l=new K(t,s),u=this.reverse_?c.getFirstChild(this.index_):c.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(c.hasChild(t)){const p=c.getImmediateChild(t);let m=i.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===t||c.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const T=m==null?1:o(m,l);if(f&&!s.isEmpty()&&T>=0)return r!=null&&r.trackChildChange(fr(t,s,p)),c.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(dr(t,p));const N=c.updateImmediateChild(t,U.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(r!=null&&r.trackChildChange(Ws(m.name,m.node)),N.updateImmediateChild(m.name,m.node)):N}}else return s.isEmpty()?e:f&&o(u,l)>=0?(r!=null&&(r.trackChildChange(dr(u.name,u.node)),r.trackChildChange(Ws(t,s))),c.updateImmediateChild(t,s).updateImmediateChild(u.name,U.EMPTY_NODE)):e}}/**
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
 */class Wu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$s}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new Wu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function UR(n){return n.loadsAllData()?new $u(n.getIndex()):n.hasLimit()?new FR(n):new pr(n)}function up(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ue?t="$priority":n.index_===LR?t="$value":n.index_===bs?t="$key":(D(n.index_ instanceof MR,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ke(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ke(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ke(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ke(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ke(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function hp(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ue&&(e.i=n.index_.toString()),e}/**
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
 */class jo extends k_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Dr("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=jo.getListenId_(e,s),c={};this.listens_[o]=c;const l=up(e._queryParams);this.restRequest_(r+".json",l,(u,f)=>{let p=f;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(r,p,!1,s),Ms(this.listens_,o)===c){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",i(m,null)}})}unlisten(e,t){const s=jo.getListenId_(e,t);delete this.listens_[s]}get(e){const t=up(e._queryParams),s=e._path.toString(),i=new Ot;return this.restRequest_(s+".json",t,(r,o)=>{let c=o;r===404&&(c=null,r=null),r===null?(this.onDataUpdate_(s,c,!1,null),i.resolve(c)):i.reject(new Error(c))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ks(t);this.log_("Sending REST request for "+o);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(s&&c.readyState===4){this.log_("REST Response for "+o+" received. status:",c.status,"response:",c.responseText);let l=null;if(c.status>=200&&c.status<300){try{l=Ji(c.responseText)}catch{Ze("Failed to parse JSON response for "+o+": "+c.responseText)}s(null,l)}else c.status!==401&&c.status!==404&&Ze("Got unsuccessful REST response for "+o+" Status: "+c.status),s(c.status);s=null}},c.open("GET",o,!0),c.send()})}}/**
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
 */class BR{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ho(){return{value:null,children:new Map}}function ni(n,e,t){if(z(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=G(e);n.children.has(s)||n.children.set(s,Ho());const i=n.children.get(s);e=re(e),ni(i,e,t)}}function Il(n,e){if(z(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(ue,(s,i)=>{ni(n,new se(s),i)}),Il(n,e)}}else if(n.children.size>0){const t=G(e);return e=re(e),n.children.has(t)&&Il(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Tl(n,e,t){n.value!==null?t(e,n.value):qR(n,(s,i)=>{const r=new se(e.toString()+"/"+s);Tl(i,r,t)})}function qR(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class $R{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Be(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const dp=10*1e3,WR=30*1e3,jR=300*1e3;class HR{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new $R(e);const s=dp+(WR-dp)*Math.random();zi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Be(e,(i,r)=>{r>0&&Pt(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),zi(this.reportStats_.bind(this),Math.floor(Math.random()*2*jR))}}/**
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
 */var ht;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ht||(ht={}));function B_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ju(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hu(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Go{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ht.ACK_USER_WRITE,this.source=B_()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new se(e));return new Go(ee(),t,this.revert)}}else return D(G(this.path)===e,"operationForChild called for unrelated child."),new Go(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class mr{constructor(e,t){this.source=e,this.path=t,this.type=ht.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new mr(this.source,ee()):new mr(this.source,re(this.path))}}/**
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
 */class Zn{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ht.OVERWRITE}operationForChild(e){return z(this.path)?new Zn(this.source,ee(),this.snap.getImmediateChild(e)):new Zn(this.source,re(this.path),this.snap)}}/**
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
 */class gr{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ht.MERGE}operationForChild(e){if(z(this.path)){const t=this.children.subtree(new se(e));return t.isEmpty()?null:t.value?new Zn(this.source,ee(),t.value):new gr(this.source,ee(),t)}else return D(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gr(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class es{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const t=G(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class GR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zR(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(xR(o.childName,o.snapshotNode))}),Si(n,i,"child_removed",e,s,t),Si(n,i,"child_added",e,s,t),Si(n,i,"child_moved",r,s,t),Si(n,i,"child_changed",e,s,t),Si(n,i,"value",e,s,t),i}function Si(n,e,t,s,i,r){const o=s.filter(c=>c.type===t);o.sort((c,l)=>QR(n,c,l)),o.forEach(c=>{const l=KR(n,c,r);i.forEach(u=>{u.respondsTo(c.type)&&e.push(u.createEvent(l,n.query_))})})}function KR(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function QR(n,e,t){if(e.childName==null||t.childName==null)throw zs("Should only compare child_ events.");const s=new K(e.childName,e.snapshotNode),i=new K(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Ma(n,e){return{eventCache:n,serverCache:e}}function Ki(n,e,t,s){return Ma(new es(e,t,s),n.serverCache)}function q_(n,e,t,s){return Ma(n.eventCache,new es(e,t,s))}function Al(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ts(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Oc;const YR=()=>(Oc||(Oc=new Ye(MS)),Oc);class ce{static fromObject(e){let t=new ce(null);return Be(e,(s,i)=>{t=t.set(new se(s),i)}),t}constructor(e,t=YR()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ee(),value:this.value};if(z(e))return null;{const s=G(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(re(e),t);return r!=null?{path:me(new se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const t=G(e),s=this.children.get(t);return s!==null?s.subtree(re(e)):new ce(null)}}set(e,t){if(z(e))return new ce(t,this.children);{const s=G(e),r=(this.children.get(s)||new ce(null)).set(re(e),t),o=this.children.insert(s,r);return new ce(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const t=G(e),s=this.children.get(t);if(s){const i=s.remove(re(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new ce(null):new ce(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const t=G(e),s=this.children.get(t);return s?s.get(re(e)):null}}setTree(e,t){if(z(e))return t;{const s=G(e),r=(this.children.get(s)||new ce(null)).setTree(re(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ce(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(me(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ee(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(z(e))return null;{const r=G(e),o=this.children.get(r);return o?o.findOnPath_(re(e),me(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ee(),t)}foreachOnPath_(e,t,s){if(z(e))return this;{this.value&&s(t,this.value);const i=G(e),r=this.children.get(i);return r?r.foreachOnPath_(re(e),me(t,i),s):new ce(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(me(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new ce(null))}}function Qi(n,e,t){if(z(e))return new ft(new ce(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Qe(i,e);return r=r.updateChild(o,t),new ft(n.writeTree_.set(i,r))}else{const i=new ce(t),r=n.writeTree_.setTree(e,i);return new ft(r)}}}function fp(n,e,t){let s=n;return Be(t,(i,r)=>{s=Qi(s,me(e,i),r)}),s}function pp(n,e){if(z(e))return ft.empty();{const t=n.writeTree_.setTree(e,new ce(null));return new ft(t)}}function Sl(n,e){return us(n,e)!=null}function us(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Qe(t.path,e)):null}function mp(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ue,(s,i)=>{e.push(new K(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new K(s,i.value))}),e}function gn(n,e){if(z(e))return n;{const t=us(n,e);return t!=null?new ft(new ce(t)):new ft(n.writeTree_.subtree(e))}}function Rl(n){return n.writeTree_.isEmpty()}function js(n,e){return $_(ee(),n.writeTree_,e)}function $_(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=$_(me(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(me(n,".priority"),s)),t}}/**
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
 */function Gu(n,e){return G_(e,n)}function XR(n,e,t,s,i){D(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Qi(n.visibleWrites,e,t)),n.lastWriteId=s}function JR(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function ZR(n,e){const t=n.allWrites.findIndex(c=>c.writeId===e);D(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const c=n.allWrites[o];c.visible&&(o>=t&&eC(c,s.path)?i=!1:ot(s.path,c.path)&&(r=!0)),o--}if(i){if(r)return tC(n),!0;if(s.snap)n.visibleWrites=pp(n.visibleWrites,s.path);else{const c=s.children;Be(c,l=>{n.visibleWrites=pp(n.visibleWrites,me(s.path,l))})}return!0}else return!1}function eC(n,e){if(n.snap)return ot(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ot(me(n.path,t),e))return!0;return!1}function tC(n){n.visibleWrites=W_(n.allWrites,nC,ee()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function nC(n){return n.visible}function W_(n,e,t){let s=ft.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let c;if(r.snap)ot(t,o)?(c=Qe(t,o),s=Qi(s,c,r.snap)):ot(o,t)&&(c=Qe(o,t),s=Qi(s,ee(),r.snap.getChild(c)));else if(r.children){if(ot(t,o))c=Qe(t,o),s=fp(s,c,r.children);else if(ot(o,t))if(c=Qe(o,t),z(c))s=fp(s,ee(),r.children);else{const l=Ms(r.children,G(c));if(l){const u=l.getChild(re(c));s=Qi(s,ee(),u)}}}else throw zs("WriteRecord should have .snap or .children")}}return s}function j_(n,e,t,s,i){if(!s&&!i){const r=us(n.visibleWrites,e);if(r!=null)return r;{const o=gn(n.visibleWrites,e);if(Rl(o))return t;if(t==null&&!Sl(o,ee()))return null;{const c=t||U.EMPTY_NODE;return js(o,c)}}}else{const r=gn(n.visibleWrites,e);if(!i&&Rl(r))return t;if(!i&&t==null&&!Sl(r,ee()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(ot(u.path,e)||ot(e,u.path))},c=W_(n.allWrites,o,e),l=t||U.EMPTY_NODE;return js(c,l)}}}function sC(n,e,t){let s=U.EMPTY_NODE;const i=us(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=gn(n.visibleWrites,e);return t.forEachChild(ue,(o,c)=>{const l=js(gn(r,new se(o)),c);s=s.updateImmediateChild(o,l)}),mp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=gn(n.visibleWrites,e);return mp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function iC(n,e,t,s,i){D(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=me(e,t);if(Sl(n.visibleWrites,r))return null;{const o=gn(n.visibleWrites,r);return Rl(o)?i.getChild(t):js(o,i.getChild(t))}}function rC(n,e,t,s){const i=me(e,t),r=us(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=gn(n.visibleWrites,i);return js(o,s.getNode().getImmediateChild(t))}else return null}function oC(n,e){return us(n.visibleWrites,e)}function aC(n,e,t,s,i,r,o){let c;const l=gn(n.visibleWrites,e),u=us(l,ee());if(u!=null)c=u;else if(t!=null)c=js(l,t);else return[];if(c=c.withIndex(o),!c.isEmpty()&&!c.isLeafNode()){const f=[],p=o.getCompare(),m=r?c.getReverseIteratorFrom(s,o):c.getIteratorFrom(s,o);let T=m.getNext();for(;T&&f.length<i;)p(T,s)!==0&&f.push(T),T=m.getNext();return f}else return[]}function cC(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function zo(n,e,t,s){return j_(n.writeTree,n.treePath,e,t,s)}function zu(n,e){return sC(n.writeTree,n.treePath,e)}function gp(n,e,t,s){return iC(n.writeTree,n.treePath,e,t,s)}function Ko(n,e){return oC(n.writeTree,me(n.treePath,e))}function lC(n,e,t,s,i,r){return aC(n.writeTree,n.treePath,e,t,s,i,r)}function Ku(n,e,t){return rC(n.writeTree,n.treePath,e,t)}function H_(n,e){return G_(me(n.treePath,e),n.writeTree)}function G_(n,e){return{treePath:n,writeTree:e}}/**
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
 */class uC{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;D(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,fr(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,dr(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Ws(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,fr(s,e.snapshotNode,i.oldSnap));else throw zs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class hC{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const z_=new hC;class Qu{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new es(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ku(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ts(this.viewCache_),r=lC(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function dC(n){return{filter:n}}function fC(n,e){D(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function pC(n,e,t,s,i){const r=new uC;let o,c;if(t.type===ht.OVERWRITE){const u=t;u.source.fromUser?o=Cl(n,e,u.path,u.snap,s,i,r):(D(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=Qo(n,e,u.path,u.snap,s,i,c,r))}else if(t.type===ht.MERGE){const u=t;u.source.fromUser?o=gC(n,e,u.path,u.children,s,i,r):(D(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered(),o=bl(n,e,u.path,u.children,s,i,c,r))}else if(t.type===ht.ACK_USER_WRITE){const u=t;u.revert?o=EC(n,e,u.path,s,i,r):o=_C(n,e,u.path,u.affectedTree,s,i,r)}else if(t.type===ht.LISTEN_COMPLETE)o=yC(n,e,t.path,s,r);else throw zs("Unknown operation type: "+t.type);const l=r.getChanges();return mC(e,o,l),{viewCache:o,changes:l}}function mC(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Al(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(U_(Al(e)))}}function K_(n,e,t,s,i,r){const o=e.eventCache;if(Ko(s,t)!=null)return e;{let c,l;if(z(t))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ts(e),f=u instanceof U?u:U.EMPTY_NODE,p=zu(s,f);c=n.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const u=zo(s,ts(e));c=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=G(t);if(u===".priority"){D(An(t)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const p=gp(s,t,f,l);p!=null?c=n.filter.updatePriority(f,p):c=o.getNode()}else{const f=re(t);let p;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const m=gp(s,t,o.getNode(),l);m!=null?p=o.getNode().getImmediateChild(u).updateChild(f,m):p=o.getNode().getImmediateChild(u)}else p=Ku(s,u,e.serverCache);p!=null?c=n.filter.updateChild(o.getNode(),u,p,f,i,r):c=o.getNode()}}return Ki(e,c,o.isFullyInitialized()||z(t),n.filter.filtersNodes())}}function Qo(n,e,t,s,i,r,o,c){const l=e.serverCache;let u;const f=o?n.filter:n.filter.getIndexedFilter();if(z(t))u=f.updateFullNode(l.getNode(),s,null);else if(f.filtersNodes()&&!l.isFiltered()){const T=l.getNode().updateChild(t,s);u=f.updateFullNode(l.getNode(),T,null)}else{const T=G(t);if(!l.isCompleteForPath(t)&&An(t)>1)return e;const C=re(t),k=l.getNode().getImmediateChild(T).updateChild(C,s);T===".priority"?u=f.updatePriority(l.getNode(),k):u=f.updateChild(l.getNode(),T,k,C,z_,null)}const p=q_(e,u,l.isFullyInitialized()||z(t),f.filtersNodes()),m=new Qu(i,p,r);return K_(n,p,t,i,m,c)}function Cl(n,e,t,s,i,r,o){const c=e.eventCache;let l,u;const f=new Qu(i,e,r);if(z(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ki(e,u,!0,n.filter.filtersNodes());else{const p=G(t);if(p===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),l=Ki(e,u,c.isFullyInitialized(),c.isFiltered());else{const m=re(t),T=c.getNode().getImmediateChild(p);let C;if(z(m))C=s;else{const N=f.getCompleteChild(p);N!=null?Fu(m)===".priority"&&N.getChild(D_(m)).isEmpty()?C=N:C=N.updateChild(m,s):C=U.EMPTY_NODE}if(T.equals(C))l=e;else{const N=n.filter.updateChild(c.getNode(),p,C,m,f,o);l=Ki(e,N,c.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function _p(n,e){return n.eventCache.isCompleteForChild(e)}function gC(n,e,t,s,i,r,o){let c=e;return s.foreach((l,u)=>{const f=me(t,l);_p(e,G(f))&&(c=Cl(n,c,f,u,i,r,o))}),s.foreach((l,u)=>{const f=me(t,l);_p(e,G(f))||(c=Cl(n,c,f,u,i,r,o))}),c}function yp(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function bl(n,e,t,s,i,r,o,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;z(t)?u=s:u=new ce(null).setTree(t,s);const f=e.serverCache.getNode();return u.children.inorderTraversal((p,m)=>{if(f.hasChild(p)){const T=e.serverCache.getNode().getImmediateChild(p),C=yp(n,T,m);l=Qo(n,l,new se(p),C,i,r,o,c)}}),u.children.inorderTraversal((p,m)=>{const T=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!f.hasChild(p)&&!T){const C=e.serverCache.getNode().getImmediateChild(p),N=yp(n,C,m);l=Qo(n,l,new se(p),N,i,r,o,c)}}),l}function _C(n,e,t,s,i,r,o){if(Ko(i,t)!=null)return e;const c=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(z(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Qo(n,e,t,l.getNode().getChild(t),i,r,c,o);if(z(t)){let u=new ce(null);return l.getNode().forEachChild(bs,(f,p)=>{u=u.set(new se(f),p)}),bl(n,e,t,u,i,r,c,o)}else return e}else{let u=new ce(null);return s.foreach((f,p)=>{const m=me(t,f);l.isCompleteForPath(m)&&(u=u.set(f,l.getNode().getChild(m)))}),bl(n,e,t,u,i,r,c,o)}}function yC(n,e,t,s,i){const r=e.serverCache,o=q_(e,r.getNode(),r.isFullyInitialized()||z(t),r.isFiltered());return K_(n,o,t,s,z_,i)}function EC(n,e,t,s,i,r){let o;if(Ko(s,t)!=null)return e;{const c=new Qu(s,e,i),l=e.eventCache.getNode();let u;if(z(t)||G(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=zo(s,ts(e));else{const p=e.serverCache.getNode();D(p instanceof U,"serverChildren would be complete if leaf node"),f=zu(s,p)}f=f,u=n.filter.updateFullNode(l,f,r)}else{const f=G(t);let p=Ku(s,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=l.getImmediateChild(f)),p!=null?u=n.filter.updateChild(l,f,p,re(t),c,r):e.eventCache.getNode().hasChild(f)?u=n.filter.updateChild(l,f,U.EMPTY_NODE,re(t),c,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zo(s,ts(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Ko(s,ee())!=null,Ki(e,u,o,n.filter.filtersNodes())}}/**
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
 */class vC{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new $u(s.getIndex()),r=UR(s);this.processor_=dC(r);const o=t.serverCache,c=t.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(U.EMPTY_NODE,c.getNode(),null),f=new es(l,o.isFullyInitialized(),i.filtersNodes()),p=new es(u,c.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ma(p,f),this.eventGenerator_=new GR(this.query_)}get query(){return this.query_}}function wC(n){return n.viewCache_.serverCache.getNode()}function IC(n,e){const t=ts(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!z(e)&&!t.getImmediateChild(G(e)).isEmpty())?t.getChild(e):null}function Ep(n){return n.eventRegistrations_.length===0}function TC(n,e){n.eventRegistrations_.push(e)}function vp(n,e,t){const s=[];if(t){D(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function wp(n,e,t,s){e.type===ht.MERGE&&e.source.queryId!==null&&(D(ts(n.viewCache_),"We should always have a full cache before handling merges"),D(Al(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=pC(n.processor_,i,e,t,s);return fC(n.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Q_(n,r.changes,r.viewCache.eventCache.getNode(),null)}function AC(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ue,(r,o)=>{s.push(Ws(r,o))}),t.isFullyInitialized()&&s.push(U_(t.getNode())),Q_(n,s,t.getNode(),e)}function Q_(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return zR(n.eventGenerator_,e,t,i)}/**
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
 */let Yo;class SC{constructor(){this.views=new Map}}function RC(n){D(!Yo,"__referenceConstructor has already been defined"),Yo=n}function CC(){return D(Yo,"Reference.ts has not been loaded"),Yo}function bC(n){return n.views.size===0}function Yu(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return D(r!=null,"SyncTree gave us an op for an invalid query."),wp(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(wp(o,e,t,s));return r}}function PC(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let c=zo(t,i?s:null),l=!1;c?l=!0:s instanceof U?(c=zu(t,s),l=!1):(c=U.EMPTY_NODE,l=!1);const u=Ma(new es(c,l,!1),new es(s,i,!1));return new vC(e,u)}return o}function kC(n,e,t,s,i,r){const o=PC(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),TC(o,t),AC(o,t)}function NC(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const c=Sn(n);if(i==="default")for(const[l,u]of n.views.entries())o=o.concat(vp(u,t,s)),Ep(u)&&(n.views.delete(l),u.query._queryParams.loadsAllData()||r.push(u.query));else{const l=n.views.get(i);l&&(o=o.concat(vp(l,t,s)),Ep(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return c&&!Sn(n)&&r.push(new(CC())(e._repo,e._path)),{removed:r,events:o}}function Y_(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ps(n,e){let t=null;for(const s of n.views.values())t=t||IC(s,e);return t}function X_(n,e){if(e._queryParams.loadsAllData())return Va(n);{const s=e._queryIdentifier;return n.views.get(s)}}function J_(n,e){return X_(n,e)!=null}function Sn(n){return Va(n)!=null}function Va(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Xo;function DC(n){D(!Xo,"__referenceConstructor has already been defined"),Xo=n}function OC(){return D(Xo,"Reference.ts has not been loaded"),Xo}let MC=1;class Ip{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=cC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Z_(n,e,t,s,i){return XR(n.pendingWriteTree_,e,t,s,i),i?Mr(n,new Zn(B_(),e,t)):[]}function Gn(n,e,t=!1){const s=JR(n.pendingWriteTree_,e);if(ZR(n.pendingWriteTree_,e)){let r=new ce(null);return s.snap!=null?r=r.set(ee(),!0):Be(s.children,o=>{r=r.set(new se(o),!0)}),Mr(n,new Go(s.path,r,t))}else return[]}function La(n,e,t){return Mr(n,new Zn(ju(),e,t))}function VC(n,e,t){const s=ce.fromObject(t);return Mr(n,new gr(ju(),e,s))}function LC(n,e){return Mr(n,new mr(ju(),e))}function xC(n,e,t){const s=Ju(n,t);if(s){const i=Zu(s),r=i.path,o=i.queryId,c=Qe(r,e),l=new mr(Hu(o),c);return eh(n,r,l)}else return[]}function Pl(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let c=[];if(o&&(e._queryIdentifier==="default"||J_(o,e))){const l=NC(o,e,t,s);bC(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const u=l.removed;if(c=l.events,!i){const f=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,p=n.syncPointTree_.findOnPath(r,(m,T)=>Sn(T));if(f&&!p){const m=n.syncPointTree_.subtree(r);if(!m.isEmpty()){const T=BC(m);for(let C=0;C<T.length;++C){const N=T[C],k=N.query,$=ny(n,N);n.listenProvider_.startListening(Yi(k),Jo(n,k),$.hashFn,$.onComplete)}}}!p&&u.length>0&&!s&&(f?n.listenProvider_.stopListening(Yi(e),null):u.forEach(m=>{const T=n.queryToTagMap.get(xa(m));n.listenProvider_.stopListening(Yi(m),T)}))}qC(n,u)}return c}function FC(n,e,t,s){const i=Ju(n,s);if(i!=null){const r=Zu(i),o=r.path,c=r.queryId,l=Qe(o,e),u=new Zn(Hu(c),l,t);return eh(n,o,u)}else return[]}function UC(n,e,t,s){const i=Ju(n,s);if(i){const r=Zu(i),o=r.path,c=r.queryId,l=Qe(o,e),u=ce.fromObject(t),f=new gr(Hu(c),l,u);return eh(n,o,f)}else return[]}function Tp(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(m,T)=>{const C=Qe(m,i);r=r||Ps(T,C),o=o||Sn(T)});let c=n.syncPointTree_.get(i);c?(o=o||Sn(c),r=r||Ps(c,ee())):(c=new SC,n.syncPointTree_=n.syncPointTree_.set(i,c));let l;r!=null?l=!0:(l=!1,r=U.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((T,C)=>{const N=Ps(C,ee());N&&(r=r.updateImmediateChild(T,N))}));const u=J_(c,e);if(!u&&!e._queryParams.loadsAllData()){const m=xa(e);D(!n.queryToTagMap.has(m),"View does not exist, but we have a tag");const T=$C();n.queryToTagMap.set(m,T),n.tagToQueryMap.set(T,m)}const f=Gu(n.pendingWriteTree_,i);let p=kC(c,e,t,f,r,l);if(!u&&!o&&!s){const m=X_(c,e);p=p.concat(WC(n,e,m))}return p}function Xu(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,c)=>{const l=Qe(o,e),u=Ps(c,l);if(u)return u});return j_(i,e,r,t,!0)}function Mr(n,e){return ey(e,n.syncPointTree_,null,Gu(n.pendingWriteTree_,ee()))}function ey(n,e,t,s){if(z(n.path))return ty(n,e,t,s);{const i=e.get(ee());t==null&&i!=null&&(t=Ps(i,ee()));let r=[];const o=G(n.path),c=n.operationForChild(o),l=e.children.get(o);if(l&&c){const u=t?t.getImmediateChild(o):null,f=H_(s,o);r=r.concat(ey(c,l,u,f))}return i&&(r=r.concat(Yu(i,n,s,t))),r}}function ty(n,e,t,s){const i=e.get(ee());t==null&&i!=null&&(t=Ps(i,ee()));let r=[];return e.children.inorderTraversal((o,c)=>{const l=t?t.getImmediateChild(o):null,u=H_(s,o),f=n.operationForChild(o);f&&(r=r.concat(ty(f,c,l,u)))}),i&&(r=r.concat(Yu(i,n,s,t))),r}function ny(n,e){const t=e.query,s=Jo(n,t);return{hashFn:()=>(wC(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?xC(n,t._path,s):LC(n,t._path);{const r=xS(i,t);return Pl(n,t,null,r)}}}}function Jo(n,e){const t=xa(e);return n.queryToTagMap.get(t)}function xa(n){return n._path.toString()+"$"+n._queryIdentifier}function Ju(n,e){return n.tagToQueryMap.get(e)}function Zu(n){const e=n.indexOf("$");return D(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new se(n.substr(0,e))}}function eh(n,e,t){const s=n.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const i=Gu(n.pendingWriteTree_,e);return Yu(s,t,i,null)}function BC(n){return n.fold((e,t,s)=>{if(t&&Sn(t))return[Va(t)];{let i=[];return t&&(i=Y_(t)),Be(s,(r,o)=>{i=i.concat(o)}),i}})}function Yi(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(OC())(n._repo,n._path):n}function qC(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=xa(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function $C(){return MC++}function WC(n,e,t){const s=e._path,i=Jo(n,e),r=ny(n,t),o=n.listenProvider_.startListening(Yi(e),i,r.hashFn,r.onComplete),c=n.syncPointTree_.subtree(s);if(i)D(!Sn(c.value),"If we're adding a query, it shouldn't be shadowed");else{const l=c.fold((u,f,p)=>{if(!z(u)&&f&&Sn(f))return[Va(f).query];{let m=[];return f&&(m=m.concat(Y_(f).map(T=>T.query))),Be(p,(T,C)=>{m=m.concat(C)}),m}});for(let u=0;u<l.length;++u){const f=l[u];n.listenProvider_.stopListening(Yi(f),Jo(n,f))}}return o}/**
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
 */class th{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new th(t)}node(){return this.node_}}class nh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=me(this.path_,e);return new nh(this.syncTree_,t)}node(){return Xu(this.syncTree_,this.path_)}}const jC=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ap=function(n,e,t){if(!n||typeof n!="object")return n;if(D(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return HC(n[".sv"],e,t);if(typeof n[".sv"]=="object")return GC(n[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},HC=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:D(!1,"Unexpected server value: "+n)}},GC=function(n,e,t){n.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},zC=function(n,e,t,s){return sh(e,new nh(t,n),s)},sy=function(n,e,t){return sh(n,new th(e),t)};function sh(n,e,t){const s=n.getPriority().val(),i=Ap(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,c=Ap(o.getValue(),e,t);return c!==o.getValue()||i!==o.getPriority().val()?new Ce(c,Ee(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ce(i))),o.forEachChild(ue,(c,l)=>{const u=sh(l,e.getImmediateChild(c),t);u!==l&&(r=r.updateImmediateChild(c,u))}),r}}/**
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
 */class ih{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function rh(n,e){let t=e instanceof se?e:new se(e),s=n,i=G(t);for(;i!==null;){const r=Ms(s.node.children,i)||{children:{},childCount:0};s=new ih(i,s,r),t=re(t),i=G(t)}return s}function si(n){return n.node.value}function iy(n,e){n.node.value=e,kl(n)}function ry(n){return n.node.childCount>0}function KC(n){return si(n)===void 0&&!ry(n)}function Fa(n,e){Be(n.node.children,(t,s)=>{e(new ih(t,n,s))})}function oy(n,e,t,s){t&&e(n),Fa(n,i=>{oy(i,e,!0)})}function QC(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Vr(n){return new se(n.parent===null?n.name:Vr(n.parent)+"/"+n.name)}function kl(n){n.parent!==null&&YC(n.parent,n.name,n)}function YC(n,e,t){const s=KC(t),i=Pt(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,kl(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,kl(n))}/**
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
 */const XC=/[\[\].#$\/\u0000-\u001F\u007F]/,JC=/[\[\].#$\u0000-\u001F\u007F]/,Mc=10*1024*1024,oh=function(n){return typeof n=="string"&&n.length!==0&&!XC.test(n)},ay=function(n){return typeof n=="string"&&n.length!==0&&!JC.test(n)},ZC=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ay(n)},cy=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Da(n)||n&&typeof n=="object"&&Pt(n,".sv")},Nl=function(n,e,t,s){Ua(Vs(n,"value"),e,t)},Ua=function(n,e,t){const s=t instanceof se?new _R(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+$n(s));if(typeof e=="function")throw new Error(n+"contains a function "+$n(s)+" with contents = "+e.toString());if(Da(e))throw new Error(n+"contains "+e.toString()+" "+$n(s));if(typeof e=="string"&&e.length>Mc/3&&ha(e)>Mc)throw new Error(n+"contains a string greater than "+Mc+" utf8 bytes "+$n(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Be(e,(o,c)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!oh(o)))throw new Error(n+" contains an invalid key ("+o+") "+$n(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yR(s,o),Ua(n,c,s),ER(s)}),i&&r)throw new Error(n+' contains ".value" child '+$n(s)+" in addition to actual children.")}},eb=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=hr(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!oh(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(gR);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&ot(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},tb=function(n,e,t,s){const i=Vs(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Be(e,(o,c)=>{const l=new se(o);if(Ua(i,c,me(t,l)),Fu(l)===".priority"&&!cy(c))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),eb(i,r)},nb=function(n,e,t){if(Da(e))throw new Error(Vs(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!cy(e))throw new Error(Vs(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},ly=function(n,e,t,s){if(!ay(t))throw new Error(Vs(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sb=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ly(n,e,t)},Ui=function(n,e){if(G(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ib=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!oh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ZC(t))throw new Error(Vs(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class rb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ah(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Uu(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function uy(n,e,t){ah(n,t),hy(n,s=>Uu(s,e))}function Yt(n,e,t){ah(n,t),hy(n,s=>ot(s,e)||ot(e,s))}function hy(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(ob(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function ob(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Gi&&De("event: "+t.toString()),ti(s)}}}/**
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
 */const ab="repo_interrupt",cb=25;class lb{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ho(),this.transactionQueueTree_=new ih,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ub(n,e,t){if(n.stats_=Lu(n.repoInfo_),n.forceRestClient_||qS())n.server_=new jo(n.repoInfo_,(s,i,r,o)=>{Sp(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Rp(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Wt(n.repoInfo_,e,(s,i,r,o)=>{Sp(n,s,i,r,o)},s=>{Rp(n,s)},s=>{db(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=GS(n.repoInfo_,()=>new HR(n.stats_,n.server_)),n.infoData_=new BR,n.infoSyncTree_=new Ip({startListening:(s,i,r,o)=>{let c=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(c=La(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),c},stopListening:()=>{}}),lh(n,"connected",!1),n.serverSyncTree_=new Ip({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(c,l)=>{const u=o(c,l);Yt(n.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function hb(n){const t=n.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ch(n){return jC({timestamp:hb(n)})}function Sp(n,e,t,s,i){n.dataUpdateCount++;const r=new se(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=Po(t,u=>Ee(u));o=UC(n.serverSyncTree_,r,l,i)}else{const l=Ee(t);o=FC(n.serverSyncTree_,r,l,i)}else if(s){const l=Po(t,u=>Ee(u));o=VC(n.serverSyncTree_,r,l)}else{const l=Ee(t);o=La(n.serverSyncTree_,r,l)}let c=r;o.length>0&&(c=Ba(n,r)),Yt(n.eventQueue_,c,o)}function Rp(n,e){lh(n,"connected",e),e===!1&&pb(n)}function db(n,e){Be(e,(t,s)=>{lh(n,t,s)})}function lh(n,e,t){const s=new se("/.info/"+e),i=Ee(t);n.infoData_.updateSnapshot(s,i);const r=La(n.infoSyncTree_,s,i);Yt(n.eventQueue_,s,r)}function dy(n){return n.nextWriteId_++}function fb(n,e,t,s,i){uh(n,"set",{path:e.toString(),value:t,priority:s});const r=ch(n),o=Ee(t,s),c=Xu(n.serverSyncTree_,e),l=sy(o,c,r),u=dy(n),f=Z_(n.serverSyncTree_,e,l,u,!0);ah(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(m,T)=>{const C=m==="ok";C||Ze("set at "+e+" failed: "+m);const N=Gn(n.serverSyncTree_,u,!C);Yt(n.eventQueue_,e,N),Hs(n,i,m,T)});const p=_y(n,e);Ba(n,p),Yt(n.eventQueue_,p,[])}function pb(n){uh(n,"onDisconnectEvents");const e=ch(n),t=Ho();Tl(n.onDisconnect_,ee(),(i,r)=>{const o=zC(i,r,n.serverSyncTree_,e);ni(t,i,o)});let s=[];Tl(t,ee(),(i,r)=>{s=s.concat(La(n.serverSyncTree_,i,r));const o=_y(n,i);Ba(n,o)}),n.onDisconnect_=Ho(),Yt(n.eventQueue_,ee(),s)}function mb(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Il(n.onDisconnect_,e),Hs(n,t,s,i)})}function Cp(n,e,t,s){const i=Ee(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&ni(n.onDisconnect_,e,i),Hs(n,s,r,o)})}function gb(n,e,t,s,i){const r=Ee(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,c)=>{o==="ok"&&ni(n.onDisconnect_,e,r),Hs(n,i,o,c)})}function _b(n,e,t,s){if(bo(t)){De("onDisconnect().update() called with empty data.  Don't do anything."),Hs(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&Be(t,(o,c)=>{const l=Ee(c);ni(n.onDisconnect_,me(e,o),l)}),Hs(n,s,i,r)})}function yb(n,e,t){let s;G(e._path)===".info"?s=Tp(n.infoSyncTree_,e,t):s=Tp(n.serverSyncTree_,e,t),uy(n.eventQueue_,e._path,s)}function Eb(n,e,t){let s;G(e._path)===".info"?s=Pl(n.infoSyncTree_,e,t):s=Pl(n.serverSyncTree_,e,t),uy(n.eventQueue_,e._path,s)}function vb(n){n.persistentConnection_&&n.persistentConnection_.interrupt(ab)}function uh(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),De(t,...e)}function Hs(n,e,t,s){e&&ti(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function fy(n,e,t){return Xu(n.serverSyncTree_,e,t)||U.EMPTY_NODE}function hh(n,e=n.transactionQueueTree_){if(e||qa(n,e),si(e)){const t=my(n,e);D(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&wb(n,Vr(e),t)}else ry(e)&&Fa(e,t=>{hh(n,t)})}function wb(n,e,t){const s=t.map(u=>u.currentWriteId),i=fy(n,e,s);let r=i;const o=i.hash();for(let u=0;u<t.length;u++){const f=t[u];D(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=Qe(e,f.path);r=r.updateChild(p,f.currentOutputSnapshotRaw)}const c=r.val(!0),l=e;n.server_.put(l.toString(),c,u=>{uh(n,"transaction put response",{path:l.toString(),status:u});let f=[];if(u==="ok"){const p=[];for(let m=0;m<t.length;m++)t[m].status=2,f=f.concat(Gn(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&p.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();qa(n,rh(n.transactionQueueTree_,e)),hh(n,n.transactionQueueTree_),Yt(n.eventQueue_,e,f);for(let m=0;m<p.length;m++)ti(p[m])}else{if(u==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{Ze("transaction at "+l.toString()+" failed: "+u);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=u}Ba(n,e)}},o)}function Ba(n,e){const t=py(n,e),s=Vr(t),i=my(n,t);return Ib(n,i,s),s}function Ib(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const l=e[c],u=Qe(t,l.path);let f=!1,p;if(D(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,p=l.abortReason,i=i.concat(Gn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=cb)f=!0,p="maxretry",i=i.concat(Gn(n.serverSyncTree_,l.currentWriteId,!0));else{const m=fy(n,l.path,o);l.currentInputSnapshot=m;const T=e[c].update(m.val());if(T!==void 0){Ua("transaction failed: Data returned ",T,l.path);let C=Ee(T);typeof T=="object"&&T!=null&&Pt(T,".priority")||(C=C.updatePriority(m.getPriority()));const k=l.currentWriteId,$=ch(n),j=sy(C,m,$);l.currentOutputSnapshotRaw=C,l.currentOutputSnapshotResolved=j,l.currentWriteId=dy(n),o.splice(o.indexOf(k),1),i=i.concat(Z_(n.serverSyncTree_,l.path,j,l.currentWriteId,l.applyLocally)),i=i.concat(Gn(n.serverSyncTree_,k,!0))}else f=!0,p="nodata",i=i.concat(Gn(n.serverSyncTree_,l.currentWriteId,!0))}Yt(n.eventQueue_,t,i),i=[],f&&(e[c].status=2,(function(m){setTimeout(m,Math.floor(0))})(e[c].unwatcher),e[c].onComplete&&(p==="nodata"?s.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):s.push(()=>e[c].onComplete(new Error(p),!1,null))))}qa(n,n.transactionQueueTree_);for(let c=0;c<s.length;c++)ti(s[c]);hh(n,n.transactionQueueTree_)}function py(n,e){let t,s=n.transactionQueueTree_;for(t=G(e);t!==null&&si(s)===void 0;)s=rh(s,t),e=re(e),t=G(e);return s}function my(n,e){const t=[];return gy(n,e,t),t.sort((s,i)=>s.order-i.order),t}function gy(n,e,t){const s=si(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Fa(e,i=>{gy(n,i,t)})}function qa(n,e){const t=si(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,iy(e,t.length>0?t:void 0)}Fa(e,s=>{qa(n,s)})}function _y(n,e){const t=Vr(py(n,e)),s=rh(n.transactionQueueTree_,e);return QC(s,i=>{Vc(n,i)}),Vc(n,s),oy(s,i=>{Vc(n,i)}),t}function Vc(n,e){const t=si(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(D(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Gn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?iy(e,void 0):t.length=r+1,Yt(n.eventQueue_,Vr(e),i);for(let o=0;o<s.length;o++)ti(s[o])}}/**
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
 */function Tb(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ab(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ze(`Invalid query segment '${t}' in query '${n}'`)}return e}const bp=function(n,e){const t=Sb(n),s=t.namespace;t.domain==="firebase.com"&&Qt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||DS();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new T_(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new se(t.pathString)}},Sb=function(n){let e="",t="",s="",i="",r="",o=!0,c="https",l=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(c=n.substring(0,u-1),n=n.substring(u+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(i=Tb(n.substring(f,p)));const m=Ab(n.substring(Math.min(n.length,p)));u=e.indexOf(":"),u>=0?(o=c==="https"||c==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const T=e.slice(0,u);if(T.toLowerCase()==="localhost")t="localhost";else if(T.split(".").length<=2)t=T;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),t=e.substring(C+1),r=s}"ns"in m&&(r=m.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:c,pathString:i,namespace:r}};/**
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
 */class Rb{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ke(this.snapshot.exportVal())}}class Cb{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class bb{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Pb{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Ot;return mb(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ui("OnDisconnect.remove",this._path);const e=new Ot;return Cp(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ui("OnDisconnect.set",this._path),Nl("OnDisconnect.set",e,this._path);const t=new Ot;return Cp(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Ui("OnDisconnect.setWithPriority",this._path),Nl("OnDisconnect.setWithPriority",e,this._path),nb("OnDisconnect.setWithPriority",t);const s=new Ot;return gb(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Ui("OnDisconnect.update",this._path),tb("OnDisconnect.update",e,this._path);const t=new Ot;return _b(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class dh{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return z(this._path)?null:Fu(this._path)}get ref(){return new Dn(this._repo,this._path)}get _queryIdentifier(){const e=hp(this._queryParams),t=Mu(e);return t==="{}"?"default":t}get _queryObject(){return hp(this._queryParams)}isEqual(e){if(e=te(e),!(e instanceof dh))return!1;const t=this._repo===e._repo,s=Uu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mR(this._path)}}class Dn extends dh{constructor(e,t){super(e,t,new Wu,!1)}get parent(){const e=D_(this._path);return e===null?null:new Dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Zo{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new se(e),s=Dl(this.ref,e);return new Zo(this._node.getChild(t),s,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Zo(i,Dl(this.ref,s),ue)))}hasChild(e){const t=new se(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function co(n,e){return n=te(n),n._checkNotDeleted("ref"),e!==void 0?Dl(n._root,e):n._root}function Dl(n,e){return n=te(n),G(n._path)===null?sb("child","path",e):ly("child","path",e),new Dn(n._repo,me(n._path,e))}function kb(n){return n=te(n),new Pb(n._repo,n._path)}function Pp(n,e){n=te(n),Ui("set",n._path),Nl("set",e,n._path);const t=new Ot;return fb(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class fh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Rb("value",this,new Zo(e.snapshotNode,new Dn(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Cb(this,e,t):null}matches(e){return e instanceof fh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Nb(n,e,t,s,i){const r=new bb(t,void 0),o=new fh(r);return yb(n._repo,n,o),()=>Eb(n._repo,n,o)}function kp(n,e,t,s){return Nb(n,"value",e)}RC(Dn);DC(Dn);/**
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
 */const Db="FIREBASE_DATABASE_EMULATOR_HOST",Ol={};let Ob=!1;function Mb(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=Pn(r);n.repoInfo_=new T_(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Vb(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),De("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=bp(r,i),c=o.repoInfo,l;typeof process<"u"&&zf&&(l=zf[Db]),l?(r=`http://${l}?ns=${c.namespace}`,o=bp(r,i),c=o.repoInfo):o.repoInfo.secure;const u=new WS(n.name,n.options,e);ib("Invalid Firebase Database URL",o),z(o.path)||Qt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=xb(c,n,u,new $S(n,t));return new Fb(f,n)}function Lb(n,e){const t=Ol[e];(!t||t[n.key]!==n)&&Qt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),vb(n),delete t[n.key]}function xb(n,e,t,s){let i=Ol[e.name];i||(i={},Ol[e.name]=i);let r=i[n.toURLString()];return r&&Qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new lb(n,Ob,t,s),i[n.toURLString()]=r,r}class Fb{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ub(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dn(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Lb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qt("Cannot call "+e+" on a deleted database.")}}function Ub(n=zl(),e){const t=Qs(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=gm("database");s&&yy(t,...s)}return t}function yy(n,e,t,s={}){n=te(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&_n(s,r.repoInfo_.emulatorOptions))return;Qt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new wo(wo.OWNER);else if(s.mockUserToken){const c=typeof s.mockUserToken=="string"?s.mockUserToken:Em(s.mockUserToken,n.app.options.projectId);o=new wo(c)}Pn(e)&&(Wl(e),jl("Database",!0)),Mb(r,i,s,o)}/**
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
 */function Bb(n){RS(os),pt(new lt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Vb(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Xe(Kf,Qf,n),Xe(Kf,Qf,"esm2020")}/**
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
 */const qb={".sv":"timestamp"};function Lc(){return qb}Wt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Wt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Bb();function Ey(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vy=Ey,wy=new rs("auth","Firebase",Ey());/**
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
 */const ea=new Ir("@firebase/auth");function $b(n,...e){ea.logLevel<=Q.WARN&&ea.warn(`Auth (${os}): ${n}`,...e)}function Io(n,...e){ea.logLevel<=Q.ERROR&&ea.error(`Auth (${os}): ${n}`,...e)}/**
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
 */function gt(n,...e){throw ph(n,...e)}function Rt(n,...e){return ph(n,...e)}function Iy(n,e,t){const s={...vy(),[e]:t};return new rs("auth","Firebase",s).create(e,{appName:n.name})}function jt(n){return Iy(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ph(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return wy.create(n,...e)}function x(n,e,...t){if(!n)throw ph(e,...t)}function Ut(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Io(e),new Error(e)}function Xt(n,e){n||Ut(e)}/**
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
 */function Ml(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Wb(){return Np()==="http:"||Np()==="https:"}function Np(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function jb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wb()||vm()||"connection"in navigator)?navigator.onLine:!0}function Hb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Lr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Xt(t>e,"Short delay should be less than long delay!"),this.isMobile=Hl()||wm()}get(){return jb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mh(n,e){Xt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ty{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Gb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Kb=new Lr(3e4,6e4);function Zt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function yt(n,e,t,s,i={}){return Ay(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const c=Ks({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...r};return Uv()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Pn(n.emulatorConfig.host)&&(u.credentials="include"),Ty.fetch()(await Sy(n,n.config.apiHost,t,c),u)})}async function Ay(n,e,t){n._canInitEmulator=!1;const s={...Gb,...e};try{const i=new Yb(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw lo(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw lo(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw lo(n,"user-disabled",o);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Iy(n,f,u);gt(n,f)}}catch(i){if(i instanceof _t)throw i;gt(n,"network-request-failed",{message:String(i)})}}async function xr(n,e,t,s,i={}){const r=await yt(n,e,t,s,i);return"mfaPendingCredential"in r&&gt(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Sy(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?mh(n.config,i):`${n.config.apiScheme}://${i}`;return zb.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Qb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Yb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Rt(this.auth,"network-request-failed")),Kb.get())})}}function lo(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Rt(n,e,s);return i.customData._tokenResponse=t,i}function Dp(n){return n!==void 0&&n.enterprise!==void 0}class Xb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Qb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Jb(n,e){return yt(n,"GET","/v2/recaptchaConfig",Zt(n,e))}/**
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
 */async function Zb(n,e){return yt(n,"POST","/v1/accounts:delete",e)}async function ta(n,e){return yt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ry(n,e=!1){const t=te(n),s=await t.getIdToken(e),i=gh(s);x(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Xi(xc(i.auth_time)),issuedAtTime:Xi(xc(i.iat)),expirationTime:Xi(xc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xc(n){return Number(n)*1e3}function gh(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Io("JWT malformed, contained fewer than 3 sections"),null;try{const i=Co(t);return i?JSON.parse(i):(Io("Failed to decode base64 JWT payload"),null)}catch(i){return Io("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Op(n){const e=gh(n);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ns(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof _t&&eP(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function eP({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class tP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _r(n){var p;const e=n.auth,t=await n.getIdToken(),s=await ns(n,ta(e,{idToken:t}));x(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(p=i.providerUserInfo)!=null&&p.length?by(i.providerUserInfo):[],o=nP(n.providerData,r),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Vl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,f)}async function Cy(n){const e=te(n);await _r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nP(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function by(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function sP(n,e){const t=await Ay(n,{},async()=>{const s=Ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await Sy(n,i,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return n.emulatorConfig&&Pn(n.emulatorConfig.host)&&(l.credentials="include"),Ty.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iP(n,e){return yt(n,"POST","/v2/accounts:revokeToken",Zt(n,e))}/**
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
 */class ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Op(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){x(e.length!==0,"internal-error");const t=Op(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await sP(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new ks;return s&&(x(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(x(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ks,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
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
 */function an(n,e){x(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class dt{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new tP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ns(this,this.stsTokenManager.getToken(this.auth,e));return x(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ry(this,e)}reload(){return Cy(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new dt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await _r(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(jt(this.auth));const e=await this.getIdToken();return await ns(this,Zb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:T,providerData:C,stsTokenManager:N}=t;x(p&&N,e,"internal-error");const k=ks.fromJSON(this.name,N);x(typeof p=="string",e,"internal-error"),an(s,e.name),an(i,e.name),x(typeof m=="boolean",e,"internal-error"),x(typeof T=="boolean",e,"internal-error"),an(r,e.name),an(o,e.name),an(c,e.name),an(l,e.name),an(u,e.name),an(f,e.name);const $=new dt({uid:p,auth:e,email:i,emailVerified:m,displayName:s,isAnonymous:T,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:k,createdAt:u,lastLoginAt:f});return C&&Array.isArray(C)&&($.providerData=C.map(j=>({...j}))),l&&($._redirectEventId=l),$}static async _fromIdTokenResponse(e,t,s=!1){const i=new ks;i.updateFromServerResponse(t);const r=new dt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await _r(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];x(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?by(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),c=new ks;c.updateFromIdToken(s);const l=new dt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Vl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
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
 */const Mp=new Map;function Bt(n){Xt(n instanceof Function,"Expected a class definition");let e=Mp.get(n);return e?(Xt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Mp.set(n,e),e)}/**
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
 */class Py{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Py.type="NONE";const Ll=Py;/**
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
 */function To(n,e,t){return`firebase:${n}:${e}:${t}`}class Ns{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=To(this.userKey,i.apiKey,r),this.fullPersistenceKey=To("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ta(this.auth,{idToken:e}).catch(()=>{});return t?dt._fromGetAccountInfoResponse(this.auth,t,e):null}return dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Ns(Bt(Ll),e,s);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Bt(Ll);const o=To(s,e.config.apiKey,e.name);let c=null;for(const u of t)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await ta(e,{idToken:f}).catch(()=>{});if(!m)break;p=await dt._fromGetAccountInfoResponse(e,m,f)}else p=dt._fromJSON(e,f);u!==r&&(c=p),r=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ns(r,e,s):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Ns(r,e,s))}}/**
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
 */function Vp(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Oy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ky(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vy(e))return"Blackberry";if(Ly(e))return"Webos";if(Ny(e))return"Safari";if((e.includes("chrome/")||Dy(e))&&!e.includes("edge/"))return"Chrome";if(My(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ky(n=Ue()){return/firefox\//i.test(n)}function Ny(n=Ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dy(n=Ue()){return/crios\//i.test(n)}function Oy(n=Ue()){return/iemobile/i.test(n)}function My(n=Ue()){return/android/i.test(n)}function Vy(n=Ue()){return/blackberry/i.test(n)}function Ly(n=Ue()){return/webos/i.test(n)}function _h(n=Ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rP(n=Ue()){var e;return _h(n)&&!!((e=window.navigator)!=null&&e.standalone)}function oP(){return Bv()&&document.documentMode===10}function xy(n=Ue()){return _h(n)||My(n)||Ly(n)||Vy(n)||/windows phone/i.test(n)||Oy(n)}/**
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
 */function Fy(n,e=[]){let t;switch(n){case"Browser":t=Vp(Ue());break;case"Worker":t=`${Vp(Ue())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${os}/${s}`}/**
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
 */class aP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function cP(n,e={}){return yt(n,"GET","/v2/passwordPolicy",Zt(n,e))}/**
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
 */const lP=6;class uP{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??lP,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class hP{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lp(this),this.idTokenSubscription=new Lp(this),this.beforeStateQueue=new aP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Bt(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await Ns.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ta(this,{idToken:e}),s=await dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _r(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nt(this.app))return Promise.reject(jt(this));const t=e?te(e):null;return t&&x(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nt(this.app)?Promise.reject(jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cP(this),t=new uP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new rs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await iP(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Bt(e)||this._popupRedirectResolver;x(t,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[Bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&$b(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function On(n){return te(n)}class Lp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yv(t=>this.observer=t)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $a={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dP(n){$a=n}function Uy(n){return $a.loadJS(n)}function fP(){return $a.recaptchaEnterpriseScript}function pP(){return $a.gapiScript}function mP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class gP{constructor(){this.enterprise=new _P}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _P{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const yP="recaptcha-enterprise",By="NO_RECAPTCHA";class EP{constructor(e){this.type=yP,this.auth=On(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{Jb(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Xb(l);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function i(r,o,c){const l=window.grecaptcha;Dp(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(By)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gP().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(c=>{if(!t&&Dp(window.grecaptcha))i(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=fP();l.length!==0&&(l+=c),Uy(l).then(()=>{i(c,r,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function xp(n,e,t,s=!1,i=!1){const r=new EP(n);let o;if(i)o=By;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function xl(n,e,t,s,i){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await xp(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await xp(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(o)})}/**
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
 */function qy(n,e){const t=Qs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(_n(r,e??{}))return i;gt(i,"already-initialized")}return t.initialize({options:e})}function vP(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Bt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function yh(n,e,t){const s=On(n);x(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=$y(e),{host:o,port:c}=wP(e),l=c===null?"":`:${c}`,u={url:`${r}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){x(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),x(_n(u,s.config.emulator)&&_n(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,Pn(o)?(Wl(`${r}//${o}${l}`),jl("Auth",!0)):i||IP()}function $y(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function wP(n){const e=$y(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Fp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Fp(o)}}}function Fp(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function IP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Wa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,t){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}async function TP(n,e){return yt(n,"POST","/v1/accounts:update",e)}async function AP(n,e){return yt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function SP(n,e){return xr(n,"POST","/v1/accounts:signInWithPassword",Zt(n,e))}async function RP(n,e){return yt(n,"POST","/v1/accounts:sendOobCode",Zt(n,e))}async function CP(n,e){return RP(n,e)}/**
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
 */async function bP(n,e){return xr(n,"POST","/v1/accounts:signInWithEmailLink",Zt(n,e))}async function PP(n,e){return xr(n,"POST","/v1/accounts:signInWithEmailLink",Zt(n,e))}/**
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
 */class Gs extends Wa{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Gs(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Gs(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xl(e,t,"signInWithPassword",SP);case"emailLink":return bP(e,{email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xl(e,s,"signUpPassword",AP);case"emailLink":return PP(e,{idToken:t,email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ds(n,e){return xr(n,"POST","/v1/accounts:signInWithIdp",Zt(n,e))}/**
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
 */const kP="http://localhost";class Rn extends Wa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):gt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const o=new Rn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ds(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ds(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ds(e,t)}buildRequest(){const e={requestUri:kP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ks(t)}return e}}/**
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
 */function NP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function DP(n){const e=Oi(Mi(n)).link,t=e?Oi(Mi(e)).deep_link_id:null,s=Oi(Mi(n)).deep_link_id;return(s?Oi(Mi(s)).link:null)||s||t||e||n}class ja{constructor(e){const t=Oi(Mi(e)),s=t.apiKey??null,i=t.oobCode??null,r=NP(t.mode??null);x(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=DP(e);try{return new ja(t)}catch{return null}}}/**
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
 */class Mn{constructor(){this.providerId=Mn.PROVIDER_ID}static credential(e,t){return Gs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ja.parseLink(t);return x(s,"argument-error"),Gs._fromEmailAndCode(e,s.code,s.tenantId)}}Mn.PROVIDER_ID="password";Mn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Wy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fr extends Wy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Mt extends Fr{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
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
 */class Vt extends Fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Vt.credential(t,s)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
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
 */class Lt extends Fr{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
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
 */class xt extends Fr{constructor(){super("twitter.com")}static credential(e,t){return Rn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return xt.credential(t,s)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
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
 */async function OP(n,e){return xr(n,"POST","/v1/accounts:signUp",Zt(n,e))}/**
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
 */class Cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await dt._fromIdTokenResponse(e,s,i),o=Up(s);return new Cn({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Up(s);return new Cn({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Up(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function jy(n){var i;if(nt(n.app))return Promise.reject(jt(n));const e=On(n);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new Cn({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await OP(e,{returnSecureToken:!0}),s=await Cn._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class na extends _t{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new na(e,t,s,i)}}function Hy(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(n,r,e,s):r})}/**
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
 */function MP(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}async function Gy(n,e,t=!1){const s=await ns(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Cn._forOperation(n,"link",s)}async function VP(n,e,t){await _r(e);const s=MP(e.providerData);x(s.has(t)===n,e.auth,"provider-already-linked")}/**
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
 */async function LP(n,e,t=!1){const{auth:s}=n;if(nt(s.app))return Promise.reject(jt(s));const i="reauthenticate";try{const r=await ns(n,Hy(s,i,e,n),t);x(r.idToken,s,"internal-error");const o=gh(r.idToken);x(o,s,"internal-error");const{sub:c}=o;return x(n.uid===c,s,"user-mismatch"),Cn._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&gt(s,"user-mismatch"),r}}/**
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
 */async function zy(n,e,t=!1){if(nt(n.app))return Promise.reject(jt(n));const s="signIn",i=await Hy(n,s,e),r=await Cn._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function Ky(n,e){return zy(On(n),e)}async function Qy(n,e){const t=te(n);return await VP(!1,t,e.providerId),Gy(t,e)}/**
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
 */async function xP(n){const e=On(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Yy(n,e,t){const s=On(n);await xl(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",CP)}function Xy(n,e,t){return nt(n.app)?Promise.reject(jt(n)):Ky(te(n),Mn.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&xP(n),s})}/**
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
 */async function FP(n,e){return yt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function UP(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=te(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ns(s,FP(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const c=s.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=s.displayName,c.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Jy(n,e){return BP(te(n),null,e)}async function BP(n,e,t){const{auth:s}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(r.password=t);const o=await ns(n,TP(s,r));await n._updateTokensIfNecessary(o,!0)}function Zy(n,e,t,s){return te(n).onIdTokenChanged(e,t,s)}function eE(n,e,t){return te(n).beforeAuthStateChanged(e,t)}function tE(n,e,t,s){return te(n).onAuthStateChanged(e,t,s)}function nE(n){return te(n).signOut()}async function sE(n){return te(n).delete()}const sa="__sak";/**
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
 */class iE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(sa,"1"),this.storage.removeItem(sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qP=1e3,$P=10;class rE extends iE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);oP()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$P):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},qP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rE.type="LOCAL";const oE=rE;/**
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
 */class aE extends iE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}aE.type="SESSION";const Eh=aE;/**
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
 */function WP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ha{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Ha(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(o).map(async u=>u(t.origin,r)),l=await WP(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ha.receivers=[];/**
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
 */function vh(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class jP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const u=vh("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(m.data.response);break;default:clearTimeout(f),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ct(){return window}function HP(n){Ct().location.href=n}/**
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
 */function cE(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function GP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function KP(){return cE()?self:null}/**
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
 */const lE="firebaseLocalStorageDb",QP=1,ia="firebaseLocalStorage",uE="fbase_key";class Ur{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ga(n,e){return n.transaction([ia],e?"readwrite":"readonly").objectStore(ia)}function YP(){const n=indexedDB.deleteDatabase(lE);return new Ur(n).toPromise()}function Fl(){const n=indexedDB.open(lE,QP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ia,{keyPath:uE})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ia)?e(s):(s.close(),await YP(),e(await Fl()))})})}async function Bp(n,e,t){const s=Ga(n,!0).put({[uE]:e,value:t});return new Ur(s).toPromise()}async function XP(n,e){const t=Ga(n,!1).get(e),s=await new Ur(t).toPromise();return s===void 0?null:s.value}function qp(n,e){const t=Ga(n,!0).delete(e);return new Ur(t).toPromise()}const JP=800,ZP=3;class hE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>ZP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ha._getInstance(KP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await GP(),!this.activeServiceWorker)return;this.sender=new jP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fl();return await Bp(e,sa,"1"),await qp(e,sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Bp(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>XP(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ga(i,!1).getAll();return new Ur(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hE.type="LOCAL";const dE=hE;new Lr(3e4,6e4);/**
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
 */function e0(n,e){return e?Bt(e):(x(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class wh extends Wa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ds(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ds(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function t0(n){return zy(n.auth,new wh(n),n.bypassAuthState)}function n0(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),LP(t,new wh(n),n.bypassAuthState)}async function s0(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),Gy(t,new wh(n),n.bypassAuthState)}/**
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
 */class fE{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t0;case"linkViaPopup":case"linkViaRedirect":return s0;case"reauthViaPopup":case"reauthViaRedirect":return n0;default:gt(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const i0=new Lr(2e3,1e4);class As extends fE{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i0.get())};e()}}As.currentPopupAction=null;/**
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
 */const r0="pendingRedirect",Ao=new Map;class o0 extends fE{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ao.get(this.auth._key());if(!e){try{const s=await a0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ao.set(this.auth._key(),e)}return this.bypassAuthState||Ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a0(n,e){const t=u0(e),s=l0(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function c0(n,e){Ao.set(n._key(),e)}function l0(n){return Bt(n._redirectPersistence)}function u0(n){return To(r0,n.config.apiKey,n.name)}async function h0(n,e,t=!1){if(nt(n.app))return Promise.reject(jt(n));const s=On(n),i=e0(s,e),o=await new o0(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const d0=600*1e3;class f0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!pE(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Rt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d0&&this.cachedEventUids.clear(),this.cachedEventUids.has($p(e))}saveEventToCache(e){this.cachedEventUids.add($p(e)),this.lastProcessedEventTime=Date.now()}}function $p(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function pE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pE(n);default:return!1}}/**
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
 */async function m0(n,e={}){return yt(n,"GET","/v1/projects",e)}/**
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
 */const g0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_0=/^https?/;async function y0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await m0(n);for(const t of e)try{if(E0(t))return}catch{}gt(n,"unauthorized-domain")}function E0(n){const e=Ml(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!_0.test(t))return!1;if(g0.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const v0=new Lr(3e4,6e4);function Wp(){const n=Ct().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function w0(n){return new Promise((e,t)=>{var i,r,o;function s(){Wp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wp(),t(Rt(n,"network-request-failed"))},timeout:v0.get()})}if((r=(i=Ct().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=Ct().gapi)!=null&&o.load)s();else{const c=mP("iframefcb");return Ct()[c]=()=>{gapi.load?s():t(Rt(n,"network-request-failed"))},Uy(`${pP()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw So=null,e})}let So=null;function I0(n){return So=So||w0(n),So}/**
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
 */const T0=new Lr(5e3,15e3),A0="__/auth/iframe",S0="emulator/auth/iframe",R0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},C0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function b0(n){const e=n.config;x(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?mh(e,S0):`https://${n.config.authDomain}/${A0}`,s={apiKey:e.apiKey,appName:n.name,v:os},i=C0.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Ks(s).slice(1)}`}async function P0(n){const e=await I0(n),t=Ct().gapi;return x(t,n,"internal-error"),e.open({where:document.body,url:b0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R0,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Rt(n,"network-request-failed"),c=Ct().setTimeout(()=>{r(o)},T0.get());function l(){Ct().clearTimeout(c),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const k0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},N0=500,D0=600,O0="_blank",M0="http://localhost";class jp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V0(n,e,t,s=N0,i=D0){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l={...k0,width:s.toString(),height:i.toString(),top:r,left:o},u=Ue().toLowerCase();t&&(c=Dy(u)?O0:t),ky(u)&&(e=e||M0,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[T,C])=>`${m}${T}=${C},`,"");if(rP(u)&&c!=="_self")return L0(e||"",c),new jp(null);const p=window.open(e||"",c,f);x(p,n,"popup-blocked");try{p.focus()}catch{}return new jp(p)}function L0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const x0="__/auth/handler",F0="emulator/auth/handler",U0=encodeURIComponent("fac");async function Hp(n,e,t,s,i,r){x(n.config.authDomain,n,"auth-domain-config-required"),x(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:os,eventId:i};if(e instanceof Wy){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",bo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Fr){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),u=l?`#${U0}=${encodeURIComponent(l)}`:"";return`${B0(n)}?${Ks(c).slice(1)}${u}`}function B0({config:n}){return n.emulator?mh(n,F0):`https://${n.authDomain}/${x0}`}/**
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
 */const Fc="webStorageSupport";class q0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Eh,this._completeRedirectFn=h0,this._overrideRedirectResult=c0}async _openPopup(e,t,s,i){var o;Xt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Hp(e,t,s,Ml(),i);return V0(e,r,vh())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Hp(e,t,s,Ml(),i);return HP(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Xt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await P0(e),s=new f0(e);return t.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fc,{type:Fc},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[Fc];r!==void 0&&t(!!r),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=y0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xy()||Ny()||_h()}}const mE=q0;var Gp="@firebase/auth",zp="1.11.1";/**
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
 */class $0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function W0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function j0(n){pt(new lt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fy(n)},u=new hP(s,i,r,l);return vP(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),pt(new lt("auth-internal",e=>{const t=On(e.getProvider("auth").getImmediate());return(s=>new $0(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(Gp,zp,W0(n)),Xe(Gp,zp,"esm2020")}/**
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
 */const H0=300,G0=ym("authIdTokenMaxAge")||H0;let Kp=null;const z0=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>G0)return;const i=t==null?void 0:t.token;Kp!==i&&(Kp=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gE(n=zl()){const e=Qs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=qy(n,{popupRedirectResolver:mE,persistence:[dE,oE,Eh]}),s=ym("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=z0(r.toString());eE(t,o,()=>o(t.currentUser)),Zy(t,c=>o(c))}}const i=mm("auth");return i&&yh(t,`http://${i}`),t}function K0(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}dP({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Rt("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",K0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});j0("Browser");const Q0=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeURL:ja,AuthCredential:Wa,EmailAuthCredential:Gs,EmailAuthProvider:Mn,FacebookAuthProvider:Mt,GithubAuthProvider:Lt,GoogleAuthProvider:Vt,OAuthCredential:Rn,TwitterAuthProvider:xt,beforeAuthStateChanged:eE,browserLocalPersistence:oE,browserPopupRedirectResolver:mE,browserSessionPersistence:Eh,connectAuthEmulator:yh,deleteUser:sE,getAuth:gE,getIdTokenResult:Ry,inMemoryPersistence:Ll,indexedDBLocalPersistence:dE,initializeAuth:qy,linkWithCredential:Qy,onAuthStateChanged:tE,onIdTokenChanged:Zy,prodErrorMap:vy,reload:Cy,sendPasswordResetEmail:Yy,signInAnonymously:jy,signInWithCredential:Ky,signInWithEmailAndPassword:Xy,signOut:nE,updatePassword:Jy,updateProfile:UP},Symbol.toStringTag,{value:"Module"})),_E="@firebase/installations",Ih="0.6.19";/**
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
 */const yE=1e4,EE=`w:${Ih}`,vE="FIS_v2",Y0="https://firebaseinstallations.googleapis.com/v1",X0=3600*1e3,J0="installations",Z0="Installations";/**
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
 */const ek={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ss=new rs(J0,Z0,ek);function wE(n){return n instanceof _t&&n.code.includes("request-failed")}/**
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
 */function IE({projectId:n}){return`${Y0}/projects/${n}/installations`}function TE(n){return{token:n.token,requestStatus:2,expiresIn:nk(n.expiresIn),creationTime:Date.now()}}async function AE(n,e){const s=(await e.json()).error;return ss.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function SE({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function tk(n,{refreshToken:e}){const t=SE(n);return t.append("Authorization",sk(e)),t}async function RE(n){const e=await n();return e.status>=500&&e.status<600?n():e}function nk(n){return Number(n.replace("s","000"))}function sk(n){return`${vE} ${n}`}/**
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
 */async function ik({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=IE(n),i=SE(n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:t,authVersion:vE,appId:n.appId,sdkVersion:EE},c={method:"POST",headers:i,body:JSON.stringify(o)},l=await RE(()=>fetch(s,c));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:TE(u.authToken)}}else throw await AE("Create Installation",l)}/**
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
 */function CE(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function rk(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ok=/^[cdef][\w-]{21}$/,Ul="";function ak(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=ck(n);return ok.test(t)?t:Ul}catch{return Ul}}function ck(n){return rk(n).substr(0,22)}/**
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
 */function za(n){return`${n.appName}!${n.appId}`}/**
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
 */const bE=new Map;function PE(n,e){const t=za(n);kE(t,e),lk(t,e)}function kE(n,e){const t=bE.get(n);if(t)for(const s of t)s(e)}function lk(n,e){const t=uk();t&&t.postMessage({key:n,fid:e}),hk()}let zn=null;function uk(){return!zn&&"BroadcastChannel"in self&&(zn=new BroadcastChannel("[Firebase] FID Change"),zn.onmessage=n=>{kE(n.data.key,n.data.fid)}),zn}function hk(){bE.size===0&&zn&&(zn.close(),zn=null)}/**
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
 */const dk="firebase-installations-database",fk=1,is="firebase-installations-store";let Uc=null;function Th(){return Uc||(Uc=Cm(dk,fk,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(is)}}})),Uc}async function ra(n,e){const t=za(n),i=(await Th()).transaction(is,"readwrite"),r=i.objectStore(is),o=await r.get(t);return await r.put(e,t),await i.done,(!o||o.fid!==e.fid)&&PE(n,e.fid),e}async function NE(n){const e=za(n),s=(await Th()).transaction(is,"readwrite");await s.objectStore(is).delete(e),await s.done}async function Ka(n,e){const t=za(n),i=(await Th()).transaction(is,"readwrite"),r=i.objectStore(is),o=await r.get(t),c=e(o);return c===void 0?await r.delete(t):await r.put(c,t),await i.done,c&&(!o||o.fid!==c.fid)&&PE(n,c.fid),c}/**
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
 */async function Ah(n){let e;const t=await Ka(n.appConfig,s=>{const i=pk(s),r=mk(n,i);return e=r.registrationPromise,r.installationEntry});return t.fid===Ul?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function pk(n){const e=n||{fid:ak(),registrationStatus:0};return DE(e)}function mk(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ss.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=gk(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_k(n)}:{installationEntry:e}}async function gk(n,e){try{const t=await ik(n,e);return ra(n.appConfig,t)}catch(t){throw wE(t)&&t.customData.serverCode===409?await NE(n.appConfig):await ra(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function _k(n){let e=await Qp(n.appConfig);for(;e.registrationStatus===1;)await CE(100),e=await Qp(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Ah(n);return s||t}return e}function Qp(n){return Ka(n,e=>{if(!e)throw ss.create("installation-not-found");return DE(e)})}function DE(n){return yk(n)?{fid:n.fid,registrationStatus:0}:n}function yk(n){return n.registrationStatus===1&&n.registrationTime+yE<Date.now()}/**
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
 */async function Ek({appConfig:n,heartbeatServiceProvider:e},t){const s=vk(n,t),i=tk(n,t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:EE,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(o)},l=await RE(()=>fetch(s,c));if(l.ok){const u=await l.json();return TE(u)}else throw await AE("Generate Auth Token",l)}function vk(n,{fid:e}){return`${IE(n)}/${e}/authTokens:generate`}/**
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
 */async function Sh(n,e=!1){let t;const s=await Ka(n.appConfig,r=>{if(!OE(r))throw ss.create("not-registered");const o=r.authToken;if(!e&&Tk(o))return r;if(o.requestStatus===1)return t=wk(n,e),r;{if(!navigator.onLine)throw ss.create("app-offline");const c=Sk(r);return t=Ik(n,c),c}});return t?await t:s.authToken}async function wk(n,e){let t=await Yp(n.appConfig);for(;t.authToken.requestStatus===1;)await CE(100),t=await Yp(n.appConfig);const s=t.authToken;return s.requestStatus===0?Sh(n,e):s}function Yp(n){return Ka(n,e=>{if(!OE(e))throw ss.create("not-registered");const t=e.authToken;return Rk(t)?{...e,authToken:{requestStatus:0}}:e})}async function Ik(n,e){try{const t=await Ek(n,e),s={...e,authToken:t};return await ra(n.appConfig,s),t}catch(t){if(wE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await NE(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await ra(n.appConfig,s)}throw t}}function OE(n){return n!==void 0&&n.registrationStatus===2}function Tk(n){return n.requestStatus===2&&!Ak(n)}function Ak(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+X0}function Sk(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Rk(n){return n.requestStatus===1&&n.requestTime+yE<Date.now()}/**
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
 */async function Ck(n){const e=n,{installationEntry:t,registrationPromise:s}=await Ah(e);return s?s.catch(console.error):Sh(e).catch(console.error),t.fid}/**
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
 */async function bk(n,e=!1){const t=n;return await Pk(t),(await Sh(t,e)).token}async function Pk(n){const{registrationPromise:e}=await Ah(n);e&&await e}/**
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
 */function kk(n){if(!n||!n.options)throw Bc("App Configuration");if(!n.name)throw Bc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Bc(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Bc(n){return ss.create("missing-app-config-values",{valueName:n})}/**
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
 */const ME="installations",Nk="installations-internal",Dk=n=>{const e=n.getProvider("app").getImmediate(),t=kk(e),s=Qs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Ok=n=>{const e=n.getProvider("app").getImmediate(),t=Qs(e,ME).getImmediate();return{getId:()=>Ck(t),getToken:i=>bk(t,i)}};function Mk(){pt(new lt(ME,Dk,"PUBLIC")),pt(new lt(Nk,Ok,"PRIVATE"))}Mk();Xe(_E,Ih);Xe(_E,Ih,"esm2020");/**
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
 */const Xp="analytics",Vk="firebase_id",Lk="origin",xk=60*1e3,Fk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rh="https://www.googletagmanager.com/gtag/js";/**
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
 */const We=new Ir("@firebase/analytics");/**
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
 */const Uk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ct=new rs("analytics","Analytics",Uk);/**
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
 */function Bk(n){if(!n.startsWith(Rh)){const e=ct.create("invalid-gtag-resource",{gtagURL:n});return We.warn(e.message),""}return n}function VE(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function qk(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function $k(n,e){const t=qk("firebase-js-sdk-policy",{createScriptURL:Bk}),s=document.createElement("script"),i=`${Rh}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Wk(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function jk(n,e,t,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await VE(t)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(c){We.error(c)}n("config",i,r)}async function Hk(n,e,t,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const c=await VE(t);for(const l of o){const u=c.find(p=>p.measurementId===l),f=u&&e[u.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",s,i||{})}catch(r){We.error(r)}}function Gk(n,e,t,s){async function i(r,...o){try{if(r==="event"){const[c,l]=o;await Hk(n,e,t,c,l)}else if(r==="config"){const[c,l]=o;await jk(n,e,t,s,c,l)}else if(r==="consent"){const[c,l]=o;n("consent",c,l)}else if(r==="get"){const[c,l,u]=o;n("get",c,l,u)}else if(r==="set"){const[c]=o;n("set",c)}else n(r,...o)}catch(c){We.error(c)}}return i}function zk(n,e,t,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Gk(r,n,e,t),{gtagCore:r,wrappedGtag:window[i]}}function Kk(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Rh)&&t.src.includes(n))return t;return null}/**
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
 */const Qk=30,Yk=1e3;class Xk{constructor(e={},t=Yk){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const LE=new Xk;function Jk(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Zk(n){var o;const{appId:e,apiKey:t}=n,s={method:"GET",headers:Jk(t)},i=Fk.replace("{app-id}",e),r=await fetch(i,s);if(r.status!==200&&r.status!==304){let c="";try{const l=await r.json();(o=l.error)!=null&&o.message&&(c=l.error.message)}catch{}throw ct.create("config-fetch-failed",{httpStatus:r.status,responseMessage:c})}return r.json()}async function eN(n,e=LE,t){const{appId:s,apiKey:i,measurementId:r}=n.options;if(!s)throw ct.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw ct.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new sN;return setTimeout(async()=>{c.abort()},xk),xE({appId:s,apiKey:i,measurementId:r},o,c,e)}async function xE(n,{throttleEndTimeMillis:e,backoffCount:t},s,i=LE){var c;const{appId:r,measurementId:o}=n;try{await tN(s,e)}catch(l){if(o)return We.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:r,measurementId:o};throw l}try{const l=await Zk(n);return i.deleteThrottleMetadata(r),l}catch(l){const u=l;if(!nN(u)){if(i.deleteThrottleMetadata(r),o)return We.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:r,measurementId:o};throw l}const f=Number((c=u==null?void 0:u.customData)==null?void 0:c.httpStatus)===503?Ld(t,i.intervalMillis,Qk):Ld(t,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return i.setThrottleMetadata(r,p),We.debug(`Calling attemptFetch again in ${f} millis`),xE(n,p,s,i)}}function tN(n,e){return new Promise((t,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(r),s(ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nN(n){if(!(n instanceof _t)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class sN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iN(n,e,t,s,i){if(i&&i.global){n("event",t,s);return}else{const r=await e,o={...s,send_to:r};n("event",t,o)}}async function rN(n,e,t,s){if(s&&s.global){const i={};for(const r of Object.keys(t))i[`user_properties.${r}`]=t[r];return n("set",i),Promise.resolve()}else{const i=await e;n("config",i,{update:!0,user_properties:t})}}/**
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
 */async function oN(){if(Im())try{await Tm()}catch(n){return We.warn(ct.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return We.warn(ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function aN(n,e,t,s,i,r,o){const c=eN(n);c.then(m=>{t[m.measurementId]=m.appId,n.options.measurementId&&m.measurementId!==n.options.measurementId&&We.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>We.error(m)),e.push(c);const l=oN().then(m=>{if(m)return s.getId()}),[u,f]=await Promise.all([c,l]);Kk(r)||$k(r,u.measurementId),i("js",new Date);const p=(o==null?void 0:o.config)??{};return p[Lk]="firebase",p.update=!0,f!=null&&(p[Vk]=f),i("config",u.measurementId,p),u.measurementId}/**
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
 */class cN{constructor(e){this.app=e}_delete(){return delete Os[this.app.options.appId],Promise.resolve()}}let Os={},Jp=[];const Zp={};let qc="dataLayer",lN="gtag",em,Ch,tm=!1;function uN(){const n=[];if(vm()&&n.push("This is a browser extension environment."),Wv()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,i)=>`(${i+1}) ${s}`).join(" "),t=ct.create("invalid-analytics-context",{errorInfo:e});We.warn(t.message)}}function hN(n,e,t){uN();const s=n.options.appId;if(!s)throw ct.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)We.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ct.create("no-api-key");if(Os[s]!=null)throw ct.create("already-exists",{id:s});if(!tm){Wk(qc);const{wrappedGtag:r,gtagCore:o}=zk(Os,Jp,Zp,qc,lN);Ch=r,em=o,tm=!0}return Os[s]=aN(n,Jp,Zp,e,em,qc,t),new cN(n)}function dN(n,e,t){n=te(n),rN(Ch,Os[n.app.options.appId],e,t).catch(s=>We.error(s))}function fN(n,e,t,s){n=te(n),iN(Ch,Os[n.app.options.appId],e,t,s).catch(i=>We.error(i))}const nm="@firebase/analytics",sm="0.10.19";function pN(){pt(new lt(Xp,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return hN(s,i,t)},"PUBLIC")),pt(new lt("analytics-internal",n,"PRIVATE")),Xe(nm,sm),Xe(nm,sm,"esm2020");function n(e){try{const t=e.getProvider(Xp).getImmediate();return{logEvent:(s,i,r)=>fN(t,s,i,r),setUserProperties:(s,i)=>dN(t,s,i)}}catch(t){throw ct.create("interop-component-reg-failed",{reason:t})}}}pN();const mN=typeof window<"u",Bl={apiKey:"AIzaSyAbHjX0oyy9aCU8WDn9x3i-_T7hRMCSfRA",authDomain:"stay-on-the-board.firebaseapp.com",projectId:"stay-on-the-board",storageBucket:"ay-on-the-board.firebasestorage.app",messagingSenderId:"939636937442",appId:"1:939636937442:web:714e1a4566703fed8604bb",measurementId:"G-CPGNM62XZW",databaseURL:void 0},bh=mN&&window.__playwright_test__;let Ri=null,Ci=null,bi=null,Pi=null;function iD(){return!!(Bl.apiKey&&Bl.projectId)}function Ph(){if(Ri)return Ri;const n=tI();return n.length>0?Ri=n[0]:Ri=bm(Bl),Ri}function ii(){if(Ci)return Ci;const n=Ph();return Ci=aS(n),bh&&(W.init("[FirebaseService] Connecting to Firestore Emulator (127.0.0.1:8080)"),Xg(Ci,"127.0.0.1",8080)),Ci}function gN(){if(bi)return bi;const n=Ph();return bi=Ub(n),bh&&(W.init("[FirebaseService] Connecting to Realtime DB Emulator (127.0.0.1:9000)"),yy(bi,"127.0.0.1",9e3)),bi}function _N(){if(Pi)return Pi;const n=Ph();return Pi=gE(n),bh&&(W.init("[FirebaseService] Connecting to Auth Emulator (127.0.0.1:9099)"),yh(Pi,"http://127.0.0.1:9099",{disableWarnings:!0})),Pi}const $c="rewards",yN={unlockedRewards:{},hasUnseenRewards:!1};var yr;class EN{constructor(){wi(this,yr,oa(aa(yN)));kt(this,"subscribers",new Set);this.loadLocal()}get _state(){return ca(Nt(this,yr))}set _state(e){la(Nt(this,yr),e,!0)}get state(){return this._state}init(){this.loadLocal()}loadLocal(){if(!(typeof window>"u")){try{const e=de.getJSON($c);if(e){const t=Rv.safeParse(e);t.success?(this._state=t.data,W.info("[RewardsStore] Loaded validated state from storageService")):(W.error("[RewardsStore] Invalid state in storageService, resetting to defaults.",t.error.format()),this.reset())}}catch(e){W.error("[RewardsStore] Failed to load from storageService",e)}this.notifySubscribers()}}saveLocal(){typeof window<"u"&&de.setJSON($c,this._state)}unlock(e){this._state.unlockedRewards[e]||(this._state.unlockedRewards[e]={id:e,unlockedAt:Date.now()},this._state.hasUnseenRewards=!0,this.saveLocal(),this.notifySubscribers(),W.info(`[RewardsStore] Unlocked reward: ${e}`))}markAllAsSeen(){this._state.hasUnseenRewards=!1,this.saveLocal(),this.notifySubscribers()}async syncWithCloud(e){const t=ii(),s=ze(t,"rewards",e);try{const i=await Rs(s);if(i.exists()){const o=i.data().unlockedRewards||{},c={...this._state.unlockedRewards,...o};this._state.unlockedRewards=c,this.saveLocal(),await mn(s,{unlockedRewards:c},{merge:!0})}else await mn(s,this._state)}catch(i){W.error("[RewardsStore] Sync error",i)}this.notifySubscribers()}reset(){this._state={unlockedRewards:{},hasUnseenRewards:!1},typeof window<"u"&&de.remove($c),this.notifySubscribers()}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}yr=new WeakMap;const vN=new EN,Ne=[];for(let n=0;n<256;++n)Ne.push((n+256).toString(16).slice(1));function wN(n,e=0){return(Ne[n[e+0]]+Ne[n[e+1]]+Ne[n[e+2]]+Ne[n[e+3]]+"-"+Ne[n[e+4]]+Ne[n[e+5]]+"-"+Ne[n[e+6]]+Ne[n[e+7]]+"-"+Ne[n[e+8]]+Ne[n[e+9]]+"-"+Ne[n[e+10]]+Ne[n[e+11]]+Ne[n[e+12]]+Ne[n[e+13]]+Ne[n[e+14]]+Ne[n[e+15]]).toLowerCase()}let Wc;const IN=new Uint8Array(16);function TN(){if(!Wc){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Wc=crypto.getRandomValues.bind(crypto)}return Wc(IN)}const AN=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),im={randomUUID:AN};function SN(n,e,t){var i;n=n||{};const s=n.random??((i=n.rng)==null?void 0:i.call(n))??TN();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,wN(s)}function RN(n,e,t){return im.randomUUID&&!n?im.randomUUID():SN(n)}var Er;class CN{constructor(){wi(this,Er,oa(aa([])));kt(this,"subscribers",new Set)}get _state(){return ca(Nt(this,Er))}set _state(e){la(Nt(this,Er),e,!0)}get state(){return this._state}set state(e){this._state=e,this.notifySubscribers()}add(e){const t=RN(),s={...e,id:t};this._state=[...this._state,s],this.notifySubscribers();const i=s.duration??5e3;return i>0&&setTimeout(()=>{this.remove(t)},i),t}remove(e){this._state=this._state.filter(t=>t.id!==e),this.notifySubscribers()}clear(){this._state=[],this.notifySubscribers()}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}Er=new WeakMap;const bN=new CN;var vr;class PN{constructor(){wi(this,vr,oa(aa({current:null,minRequired:null,updateAvailable:!1})));kt(this,"subscribers",new Set)}get _state(){return ca(Nt(this,vr))}set _state(e){la(Nt(this,vr),e,!0)}get state(){return this._state}setVersion(e){this._state.current=e,this.notifySubscribers()}setMinVersion(e){this._state.minRequired=e,this.notifySubscribers()}setUpdateAvailable(e){this._state.updateAvailable=e,this.notifySubscribers()}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}vr=new WeakMap;const kN=new PN;class NN{get db(){return ii()}async sendMessage(e,t,s,i){const r=Hi(this.db,"rooms",e,"messages");await wS(r,{senderId:t,senderName:s,text:i,createdAt:TS()})}subscribeToChat(e,t){const s=Hi(this.db,"rooms",e,"messages"),i=gl(s,_l("createdAt","asc"),_S(50));return vo(i,r=>{const o=[];r.forEach(c=>{const l=c.data();o.push({id:c.id,senderId:l.senderId,senderName:l.senderName,text:l.text,createdAt:l.createdAt?l.createdAt.toMillis():Date.now()})}),t(o)})}}const rm=new NN,DN=bn({roomId:Ke().nullable(),playerId:Ke().nullable()}),ms={ROOM_ID:"online_roomId",PLAYER_ID:"online_playerId"};class ON{saveSession(e,t){de.set(ms.ROOM_ID,e),de.set(ms.PLAYER_ID,t)}getSession(){const e={roomId:de.get(ms.ROOM_ID),playerId:de.get(ms.PLAYER_ID)},t=DN.safeParse(e);return t.success?t.data:{roomId:null,playerId:null}}clearSession(){de.remove(ms.ROOM_ID),de.remove(ms.PLAYER_ID)}}const Wn=new ON,jc={reads:0,writes:0,bytesReceived:0,bytesSent:0,lastActivity:null,recentEvents:[],elapsedSeconds:0,isTracking:!1};var wr;class MN{constructor(){wi(this,wr,oa(aa({...jc})));kt(this,"timerInterval",null);kt(this,"subscribers",new Set)}get _state(){return ca(Nt(this,wr))}set _state(e){la(Nt(this,wr),e,!0)}get state(){return this._state}set state(e){this._state=e,this.notifySubscribers()}update(e){this._state=e(this._state),this.notifySubscribers()}reset(){this._state={...jc,isTracking:this._state.isTracking,elapsedSeconds:0},this.notifySubscribers()}startSession(){this.timerInterval&&clearInterval(this.timerInterval),this._state={...jc,isTracking:!0},this.notifySubscribers(),this.timerInterval=setInterval(()=>{this._state.elapsedSeconds++,this.notifySubscribers()},1e3)}stopSession(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),this._state.isTracking=!1,this.notifySubscribers()}recordRead(e,t){const s=this.estimateSize(t),i={type:"read",size:s,source:e,timestamp:Date.now()};this._state.reads++,this._state.bytesReceived+=s,this._state.lastActivity=Date.now(),this._state.recentEvents=[i,...this._state.recentEvents].slice(0,20),this.notifySubscribers()}recordWrite(e,t){const s=this.estimateSize(t),i={type:"write",size:s,source:e,timestamp:Date.now()};this._state.writes++,this._state.bytesSent+=s,this._state.lastActivity=Date.now(),this._state.recentEvents=[i,...this._state.recentEvents].slice(0,20),this.notifySubscribers()}estimateSize(e){try{return new TextEncoder().encode(JSON.stringify(e)).length}catch{return 0}}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}wr=new WeakMap;const Is=new MN;function uo(n,e,t){let s;const i=new Promise((r,o)=>{s=setTimeout(()=>{o(new Error(t))},e)});return Promise.race([n.then(r=>(clearTimeout(s),r)),i])}const VN=bn({seconds:qt(),nanoseconds:qt()});wv([qt(),VN]);const LN=Ke().min(2).max(20).trim();bn({id:Ke(),name:LN,color:Ke().regex(/^#[0-9A-Fa-f]{6}$/).default("#4A90E2"),isReady:cn().default(!1),joinedAt:it(),isOnline:cn().default(!0),isWatchingReplay:cn().optional(),lastSeen:it().optional(),isDisconnected:cn().optional(),disconnectStartedAt:it().optional()}).passthrough();const xN=Iv(["waiting","playing","finished"]);bn({boardSize:qt().min(2).max(20).default(4),blockModeEnabled:cn().default(!1),blockOnVisitCount:qt().min(0).default(0),gameMode:Ke().nullable().optional(),turnDuration:qt().optional(),settingsLocked:cn().optional()}).passthrough();bn({id:Ke(),name:Ke().min(1).max(100),hostId:Ke(),status:Ke(),createdAt:it(),lastActivity:it(),isPrivate:it(),settingsLocked:it(),allowGuestSettings:it(),gameState:it().nullable(),players:it(),settings:it(),maxPlayers:it().optional()}).passthrough();bn({id:Ke(),name:Ke(),status:xN,playerCount:qt(),maxPlayers:qt(),isPrivate:cn()});const ho=3e4;class FN{get db(){return ii()}getRoomRef(e){return ze(this.db,"rooms",e)}validateRoom(e,t){return{...e,id:t}}async createRoomDoc(e,t){await uo(mn(this.getRoomRef(e),t),ho,"Timeout: Failed to connect to Firebase Firestore.")}async getStatsDoc(){const e=ze(this.db,"general","stats"),t=await Rs(e);return t.exists()?t.data():null}async updateStatsDoc(e){const t=ze(this.db,"general","stats");await mn(t,e,{merge:!0})}async getPublicRoomsQuerySnapshot(){const e=gl(Hi(this.db,"rooms"),jf("isPrivate","==",!1),_l("lastActivity","desc")),[t,s]=await Promise.all([uo(vS(e),ho,"Timeout fetching rooms"),this.getStatsDoc().catch(()=>null)]);return[t,s]}subscribeToPublicRooms(e,t){const s=gl(Hi(this.db,"rooms"),jf("isPrivate","==",!1),_l("lastActivity","desc"));return vo(s,e,t)}async deleteRoomDoc(e){await yl(e)}async getRoomDoc(e){const t=await uo(Rs(this.getRoomRef(e)),ho,"Timeout connecting to room");return t.exists()?this.validateRoom(t.data(),t.id):null}async getRoomDocSimple(e){const t=await Rs(this.getRoomRef(e));return t.exists()?this.validateRoom(t.data(),t.id):null}async updatePresenceDoc(e,t,s){const i=ze(this.db,"rooms",e,"presence",t);await mn(i,{...s,updatedAt:Date.now()},{merge:!0})}async deletePresenceDoc(e,t){const s=ze(this.db,"rooms",e,"presence",t);await yl(s)}subscribeToPresence(e,t){const s=Hi(this.db,"rooms",e,"presence");return vo(s,i=>{const r={};i.forEach(o=>{r[o.id]=o.data()}),t(r)})}async updateRoomDoc(e,t,s=!1){const i=ws(this.getRoomRef(e),t);s?await uo(i,ho,"Timeout updating room"):await i}subscribeToRoom(e,t,s){return vo(this.getRoomRef(e),i=>{if(i.exists()){const r=i.data();Is.recordRead("RoomSubscription",r),t(this.validateRoom(r,i.id))}else t(null)},s)}}const ye=new FN;class UN{get rtdb(){return gN()}trackPresence(e,t){const s=co(this.rtdb,`/status/${e}/${t}`),i=co(this.rtdb,".info/connected");W.init(`[PresenceService] Setting up presence tracking for ${t} in ${e}`),kp(i,r=>{if(r.val()===!1){W.presence(`[PresenceService] RTDB connection lost for ${t}. Setting disconnected in Firestore.`),ye.updatePresenceDoc(e,t,{isDisconnected:!0});return}W.presence(`[PresenceService] RTDB connected for ${t}. Setting up onDisconnect and online status.`),kb(s).set({state:"offline",last_changed:Lc()}).then(()=>{Pp(s,{state:"online",last_changed:Lc()}),ye.updatePresenceDoc(e,t,{isDisconnected:!1,lastSeen:Date.now()}),W.presence(`[PresenceService] Presence tracking active for ${t}`)})})}async setOffline(e,t){const s=co(this.rtdb,`/status/${e}/${t}`);await Pp(s,{state:"offline",last_changed:Lc()}),await ye.updatePresenceDoc(e,t,{isDisconnected:!0})}subscribeToRoomPresence(e,t){const s=co(this.rtdb,`/status/${e}`);return kp(s,r=>{const o=r.val();t(o||{})})}}const BN=new UN;class qN{get db(){return ii()}async updatePlayer(e,t,s){const i=ze(this.db,"rooms",e),r={};for(const o in s)r[`players.${t}.${o}`]=s[o];await ws(i,r),Is.recordWrite("RoomPlayer:updatePlayer",r)}async toggleReady(e,t,s){const i=ze(this.db,"rooms",e),r={[`players.${t}.isReady`]:s,lastActivity:Date.now()};await ws(i,r),Is.recordWrite("RoomPlayer:toggleReady",r)}async setWatchingReplay(e,t,s){const i=ze(this.db,"rooms",e),r={[`players.${t}.isWatchingReplay`]:s,lastActivity:Date.now()};await ws(i,r),Is.recordWrite("RoomPlayer:setWatchingReplay",r)}async sendHeartbeat(e,t){await ye.updatePresenceDoc(e,t,{lastSeen:Date.now(),isDisconnected:!1}),Is.recordWrite("RoomPlayer:FastHeartbeat",{lastSeen:Date.now()})}async updateLobbyPresence(e,t){const s=ze(this.db,"rooms",e),i={[`players.${t}.lastSeen`]:Date.now()};await ws(s,i),Is.recordWrite("RoomPlayer:LobbyHeartbeat",i)}async leaveRoom(e,t){W.init(`[RoomPlayerService] leaveRoom CALLED for ${e} by ${t}`);const s=ze(this.db,"rooms",e);await BN.setOffline(e,t).catch(i=>{W.presence(`[RoomPlayerService] Failed to set offline: ${i}`)}),Wn.clearSession();try{const i=await Rs(s);if(!i.exists()){W.init(`[RoomPlayerService] Room ${e} does not exist.`);return}const r=i.data(),o={...r.players};if(o[t]){delete o[t],W.init("[RoomPlayerService] Removed player from map. Checking remaining...");const c=Object.values(o),l=c.filter(u=>!u.isDisconnected);if(W.init(`[RoomPlayerService] Remaining: ${c.length}, Active: ${l.length}`),c.length===0)W.init("[RoomPlayerService] Room empty, deleting room."),await yl(s);else{const u={[`players.${t}`]:IS(),lastActivity:Date.now()};if(r.hostId===t){const p=l[0]||c[0];p&&(u.hostId=p.id,W.init(`[RoomPlayerService] Host migrated to ${p.id}`))}c.length>0&&c.every(p=>p.isReady)&&r.status==="finished"&&(u.status="waiting"),await ws(s,u)}}}catch(i){W.error("[RoomPlayerService] Failed to leave room:",i)}}}const ki=new qN,om=["FIFA","SIMS","NFS","GTA","Peek","CS2","TrackMania","RoadRash","Minecraft","Tetris","Doom","Zelda","Mario","Portal","Halo","Cyberpunk","Witcher","Skyrim","Fortnite","Dota","Sonic","Metroid","PacMan","Diablo","StarCraft"],am=["Alik","Noah","Jack","Mateo","Lucas","Sofia","Olivia","Nora","Lucia","Emilia","Liam","Oliver","Elijah","James","William","Benjamin","Henry","Mia","Evelyn","Harper"];function $N(){return om[Math.floor(Math.random()*om.length)]}function rD(){return am[Math.floor(Math.random()*am.length)]}const WN=()=>{if(typeof window>"u")return{uid:"local",displayName:null,bestTimeScore:0,isAnonymous:!0};const n=de.get("online_playerName");return{uid:"local",displayName:n==="Player"||!n?null:n,bestTimeScore:parseInt(de.get("local_best_time_score")||"0"),isAnonymous:!0}},Ni=um(WN());class jN{constructor(){kt(this,"db");this.db=ii()}async syncUserProfile(e){const t=ze(this.db,"users",e.uid);vN.syncWithCloud(e.uid);try{const s=await Rs(t),i=parseInt(de.get("local_best_time_score")||"0"),r=de.get("online_playerName"),o=r==="Player"?null:r;if(s.exists()){const c=s.data(),l=c.bestTimeScore||0,u=c.displayName||null,f=Math.max(i,l),p={lastActive:Date.now()};i>l&&(p.bestTimeScore=i),!u&&o&&(p.displayName=o),await mn(t,p,{merge:!0}),l>i&&de.set("local_best_time_score",l.toString()),u&&de.set("online_playerName",u),Ni.set({uid:e.uid,displayName:u||o,bestTimeScore:f,isAnonymous:e.isAnonymous})}else{const c=kN.state.current,l={displayName:o,bestTimeScore:i,createdAt:Date.now(),lastActive:Date.now(),createdVersion:c||"unknown"};await mn(t,l),Ni.set({uid:e.uid,displayName:o,bestTimeScore:i,isAnonymous:e.isAnonymous})}}catch(s){W.error("[UserProfileService] Sync profile failed",s);const i=parseInt(de.get("local_best_time_score")||"0"),r=de.get("online_playerName");Ni.set({uid:e.uid,displayName:r==="Player"?null:r,bestTimeScore:i,isAnonymous:e.isAnonymous})}}async updateNickname(e,t){const s=e&&e.trim()!==""&&e!=="Player"?e:null;if(Ni.update(i=>i?{...i,displayName:s}:null),s?de.set("online_playerName",s):de.remove("online_playerName"),!!t)try{const{updateProfile:i}=await Av(async()=>{const{updateProfile:o}=await Promise.resolve().then(()=>Q0);return{updateProfile:o}},void 0,import.meta.url);await i(t,{displayName:s});const r=ze(this.db,"users",t.uid);await mn(r,{displayName:s,lastActive:Date.now()},{merge:!0}),W.action(`[UserProfileService] Nickname updated to ${s}`)}catch(i){W.error("[UserProfileService] Update profile error",i)}}clearLocalUserData(){W.init("[UserProfileService] Clearing local user data..."),de.remove("local_best_time_score"),de.remove("sotb_rewards"),de.remove("online_playerName")}resetLocalProfile(){Ni.set({uid:"local",displayName:null,bestTimeScore:0,isAnonymous:!0})}}const cm=new jN,ql=um(null),oD=ql;class HN{constructor(){kt(this,"auth");kt(this,"db");this.auth=_N(),this.db=ii()}async init(){tE(this.auth,async e=>{e?(W.init(`[AuthService] User logged in: ${e.uid} (Anon: ${e.isAnonymous})`),ql.set(e),await cm.syncUserProfile(e)):(W.init("[AuthService] No user logged in. Signing in anonymously..."),ql.set(null),await this.signInAnonymously())})}async signInAnonymously(){try{return(await jy(this.auth)).user}catch(e){throw W.error("[AuthService:SignInAnonymously] Firebase:",e),e}}async linkEmailPassword(e,t){const s=this.auth.currentUser;if(!s)return!1;try{const i=Mn.credential(e,t);return await Qy(s,i),!0}catch(i){return W.error("[AuthService] Link error",i),!1}}async loginEmailPassword(e,t){try{return await Xy(this.auth,e,t),!0}catch(s){return W.error("[AuthService] Login error",s),!1}}async resetPassword(e){try{return await Yy(this.auth,e),!0}catch(t){return W.error("[AuthService] Reset error",t),!1}}async deleteAccount(e){const t=this.auth.currentUser;if(!t)return!1;try{return await sE(t),!0}catch(s){return W.error("[AuthService] Delete error",s),!1}}async changePassword(e){const t=this.auth.currentUser;if(!t)return!1;try{return await Jy(t,e),!0}catch(s){return W.error("[AuthService] Change password error",s),!1}}async updateNickname(e){const t=this.auth.currentUser;return cm.updateNickname(e,t)}async logout(){try{await nE(this.auth)}catch(e){W.error("[AuthService:Logout] Firebase:",e)}}getCurrentUser(){return this.auth.currentUser}}const fo=new HN;class GN{handle(e,t={}){const{context:s,showToast:i=!0,userMessageKey:r="common.errorOccurred",userMessageRaw:o}=t,c=e instanceof Error?e.message:String(e),l=e instanceof Error?e.stack:void 0;W.error(`${s?"["+s+"] ":""}${c}`,{error:e,stack:l}),i&&bN.add({type:"error",messageKey:o?void 0:r,messageRaw:o,duration:7e3})}initGlobalHandlers(){typeof window>"u"||(window.onerror=(e,t,s,i,r)=>{this.handle(r||e,{context:"WindowOnError"})},window.onunhandledrejection=e=>{this.handle(e.reason,{context:"UnhandledRejection"})})}}const gs=new GN;class FE extends Error{constructor(e,t="APP_ERROR",s){super(e),this.message=e,this.code=t,this.context=s,this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}class Di extends FE{constructor(e,t="ROOM_ERROR",s){super(e,t,s)}}class lm extends FE{constructor(e,t="AUTH_ERROR",s){super(e,t,s)}}function Hc(n){return n==null?0:typeof n=="number"?n:n&&typeof n=="object"&&"seconds"in n&&"nanoseconds"in n?n.seconds*1e3+Math.floor(n.nanoseconds/1e6):0}const zN=6e5,Gc=8;class KN{async createRoom(e,t=!1,s){W.init(`[RoomService] createRoom START. Host: ${e}`);let i=fo.getCurrentUser();i||(W.init("[RoomService] Not authenticated. Performing quick sign-in..."),i=await fo.signInAnonymously());const r=i.uid,o=Dd([]),c={id:r,name:e,color:o,isReady:!0,joinedAt:Date.now(),isOnline:!0,isWatchingReplay:!1},l=s&&s.trim()!==""?s.trim():$N(),u={...Tv,boardSize:2,turnDuration:1e3,autoHideBoard:!1,blockModeEnabled:!0,blockOnVisitCount:0,settingsLocked:!1},f={name:l,hostId:r,status:"waiting",createdAt:Date.now(),lastActivity:Date.now(),isPrivate:t,settingsLocked:!1,allowGuestSettings:!0,gameState:null,players:{[r]:c},settings:u,maxPlayers:Gc};try{const p=this.generateTimestampId();return await ye.createRoomDoc(p,f),t||ye.updateStatsDoc({lastRoomCreatedAt:Date.now()}).catch(m=>console.warn("Failed to update global stats",m)),Wn.saveSession(p,r),p}catch(p){throw gs.handle(p,{context:"RoomService:CreateRoom"}),new Di("Failed to create room","CREATE_FAILED",{originalError:p})}}generateTimestampId(){const e=new Date,t=m=>m.toString().padStart(2,"0"),s=m=>m.toString().padStart(3,"0"),i=e.getFullYear(),r=t(e.getMonth()+1),o=t(e.getDate()),c=t(e.getHours()),l=t(e.getMinutes()),u=t(e.getSeconds()),f=s(e.getMilliseconds()),p=Math.floor(Math.random()*1e3).toString().padStart(3,"0");return`${i}-${r}-${o}_${c}-${l}-${u}_${f}_${p}`}processRoomsSnapshot(e){const t=[],s=Date.now(),i=[];let r=0;return e.forEach(o=>{const c=o.data(),l=Hc(c.createdAt),u=Hc(c.lastActivity);if(l>r&&(r=l),s-u>zN){i.push(ye.deleteRoomDoc(o.ref));return}const f=Object.values(c.players||{}),p=f.filter(m=>{const T=Hc(m.lastSeen||m.joinedAt),C=s-T<12e4;return!m.isDisconnected&&C});c.status==="playing"&&p.length===0||f.length>0&&t.push({id:o.id,name:c.name,status:c.status,playerCount:f.length,maxPlayers:c.maxPlayers||Gc,isPrivate:c.isPrivate})}),i.length>0&&Promise.allSettled(i).catch(o=>console.error(o)),{rooms:t,latestCreatedAt:r>0?r:void 0}}async getPublicRooms(){try{const[e,t]=await ye.getPublicRoomsQuerySnapshot(),s=this.processRoomsSnapshot(e);let i=(t==null?void 0:t.lastRoomCreatedAt)||0;const r=Math.max(s.latestCreatedAt||0,i);return{rooms:s.rooms,latestCreatedAt:r>0?r:void 0}}catch(e){return gs.handle(e,{context:"RoomService:GetPublicRooms",showToast:!1}),{rooms:[]}}}subscribeToPublicRooms(e){return ye.subscribeToPublicRooms(t=>{const s=this.processRoomsSnapshot(t);e(s)},t=>{gs.handle(t,{context:"RoomService:SubscribePublicRooms",showToast:!1}),e({rooms:[]})})}async joinRoom(e,t){W.init(`[RoomService] joinRoom START. Room: ${e}`);let s=fo.getCurrentUser();s||(W.init("[RoomService] joinRoom: Not authenticated. Performing quick sign-in..."),s=await fo.signInAnonymously());const i=s.uid;try{const r=await ye.getRoomDoc(e);if(!r)throw new Di("Room not found","NOT_FOUND",{roomId:e});const o=Wn.getSession();if(o.roomId===e&&o.playerId&&r.players[o.playerId]){const f=Object.values(r.players).filter(p=>p.id!==o.playerId);if(r.status!=="waiting"&&f.length===0)throw W.init("[RoomService] Reconnect aborted: Room is empty (only me left) and game started/finished."),Wn.clearSession(),await ki.leaveRoom(e,o.playerId),new lm("Game ended because all opponents left.","RECONNECT_ABORTED");return W.init("[RoomService] Reconnecting as existing player"),r.players[o.playerId].name!==t&&await ye.updateRoomDoc(e,{[`players.${o.playerId}.name`]:t,lastActivity:Date.now()}),o.playerId}if(Object.keys(r.players).length>=Gc)throw new Di("Room is full","FULL");if(r.status==="playing")throw new Di("Game already started","ALREADY_STARTED");const c=Object.values(r.players).map(f=>f.color),l=Dd(c),u={id:i,name:t,color:l,isReady:!1,joinedAt:Date.now(),isOnline:!0,isWatchingReplay:!1};return await ye.updateRoomDoc(e,{[`players.${i}`]:u,lastActivity:Date.now()},!0),Wn.saveSession(e,i),i}catch(r){throw r instanceof Di||r instanceof lm||gs.handle(r,{context:"RoomService:JoinRoom"}),r}}async getRoom(e){try{return await ye.getRoomDocSimple(e)}catch(t){return gs.handle(t,{context:"RoomService:GetRoom",showToast:!1}),null}}subscribeToRoom(e,t){return ye.subscribeToRoom(e,s=>{s||W.init(`[RoomService] Room ${e} deleted or not found`),t(s)},s=>{gs.handle(s,{context:"RoomService:SubscribeRoom",showToast:!1})})}async startGame(e){const t=await ye.getRoomDocSimple(e);if(!t)return;const s={...t.players};Object.keys(s).forEach(i=>{s[i].isReady=!1,s[i].isWatchingReplay=!1}),await ye.updateRoomDoc(e,{status:"playing",gameState:null,players:s,lastActivity:Date.now()})}async returnToLobby(e,t){const s=await ye.getRoomDocSimple(e);if(!s)return;const i={[`players.${t}.isReady`]:!0,[`players.${t}.isWatchingReplay`]:!1,lastActivity:Date.now()},r={...s.players};r[t]&&(r[t]={...r[t],isReady:!0}),Object.values(r).every(c=>c.isReady)?i.status="waiting":s.status==="playing"&&(i.status="finished"),await ye.updateRoomDoc(e,i)}async updateRoomSettings(e,t){const s={lastActivity:Date.now()};for(const[i,r]of Object.entries(t))i==="allowGuestSettings"?s.allowGuestSettings=r:s[`settings.${i}`]=r;t.settingsLocked!==void 0&&(s.settingsLocked=t.settingsLocked),await ye.updateRoomDoc(e,s)}async renameRoom(e,t){await ye.updateRoomDoc(e,{name:t,lastActivity:Date.now()})}getSession(){return Wn.getSession()}clearSession(){Wn.clearSession()}async updatePlayer(e,t,s){return ki.updatePlayer(e,t,s)}async toggleReady(e,t,s){return ki.toggleReady(e,t,s)}async setWatchingReplay(e,t,s){return ki.setWatchingReplay(e,t,s)}async leaveRoom(e,t){return ki.leaveRoom(e,t)}async sendMessage(e,t,s,i){return rm.sendMessage(e,t,s,i)}subscribeToChat(e,t){return rm.subscribeToChat(e,t)}}const aD=new KN;export{Is as A,vo as B,BN as C,Hc as D,LN as P,vN as a,vS as b,Hi as c,fo as d,ze as e,TS as f,ii as g,rD as h,Ni as i,ws as j,$N as k,_S as l,gs as m,bN as n,_l as o,ki as p,gl as q,aD as r,mn as s,iD as t,oD as u,kN as v,jf as w,Rs as x,wS as y,sD as z};
//# sourceMappingURL=DFZDF7HS.js.map
