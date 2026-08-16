var TT=Object.defineProperty;var Ef=n=>{throw TypeError(n)};var vT=(n,e,t)=>e in n?TT(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Vt=(n,e,t)=>vT(n,typeof e!="symbol"?e+"":e,t),wT=(n,e,t)=>e.has(n)||Ef("Cannot "+t);var xt=(n,e,t)=>(wT(n,e,"read from private field"),t?t.call(n):e.get(n)),Ds=(n,e,t)=>e.has(n)?Ef("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);import{l as j,s as me}from"./8WUWKfKG.js";import{o as xn,n as zt,s as tt,h as _n,r as AT,u as RT,i as ht,_ as ST,g as Tf,d as CT}from"./RM-e2dow.js";import{am as ba,as as Pa,g as Na,s as ka}from"./Db0k6a-t.js";import{_ as bT}from"./Dp1pzeXC.js";import{w as tg}from"./p_5_CWcy.js";const PT=xn({id:tt(),unlockedAt:zt()}),NT=xn({unlockedRewards:AT(tt(),PT),hasUnseenRewards:_n()}),kT=()=>{};var vf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(n,e){if(!n)throw ns(e)},ns=function(n){return new Error("Firebase Database ("+ng.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},DT=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,f=r>>2,p=(r&3)<<4|c>>4;let m=(c&15)<<2|u>>6,w=u&63;l||(w=64,o||(m=64)),i.push(t[f],t[p],t[m],t[w])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ig(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):DT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||u==null||p==null)throw new OT;const m=r<<2|c>>4;if(i.push(m),u!==64){const w=c<<4&240|u>>2;if(i.push(w),p!==64){const C=u<<6&192|p;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class OT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sg=function(n){const e=ig(n);return yu.encodeByteArray(e,!0)},zo=function(n){return sg(n).replace(/\./g,"")},Ko=function(n){try{return yu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(n){return rg(void 0,n)}function rg(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!LT(t)||(n[t]=rg(n[t],e[t]));return n}function LT(n){return n!=="__proto__"}/**
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
 */function VT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xT=()=>VT().__FIREBASE_DEFAULTS__,FT=()=>{if(typeof process>"u"||typeof vf>"u")return;const n=vf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},UT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ko(n[1]);return e&&JSON.parse(e)},Da=()=>{try{return kT()||xT()||FT()||UT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},og=n=>{var e,t;return(t=(e=Da())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},ag=n=>{const e=og(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},cg=()=>{var n;return(n=Da())==null?void 0:n.config},lg=n=>{var e;return(e=Da())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Fn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Iu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function ug(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[zo(JSON.stringify(t)),zo(JSON.stringify(o)),""].join(".")}const Zs={};function qT(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zs))Zs[e]?n.emulator.push(e):n.prod.push(e);return n}function BT(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let wf=!1;function Eu(n,e){if(typeof window>"u"||typeof document>"u"||!Fn(window.location.host)||Zs[n]===e||Zs[n]||wf)return;Zs[n]=e;function t(m){return`__firebase__banner__${m}`}const i="__firebase__banner",r=qT().prod.length>0;function o(){const m=document.getElementById(i);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{wf=!0,o()},m}function f(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=BT(i),w=t("text"),C=document.getElementById(w)||document.createElement("span"),k=t("learnmore"),N=document.getElementById(k)||document.createElement("a"),$=t("preprendIcon"),H=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const ee=m.element;c(ee),f(N,k);const Ee=u();l(H,$),ee.append(H,C,N,Ee),document.body.appendChild(ee)}r?(C.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function WT(){var e;const n=(e=Da())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $T(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jT(){const n=He();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function HT(){return ng.NODE_ADMIN===!0}function GT(){return!WT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fg(){try{return typeof indexedDB=="object"}catch{return!1}}function pg(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}function zT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="FirebaseError";class At extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=KT,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?QT(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new At(s,c,i)}}function QT(n,e){return n.replace(YT,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const YT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n){return JSON.parse(n)}function Le(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=pr(Ko(r[0])||""),t=pr(Ko(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},XT=function(n){const e=mg(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},JT=function(n){const e=mg(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function $i(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Qo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yo(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function bn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Af(r)&&Af(o)){if(!bn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Af(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Hs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Gs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)i[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)i[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const m=i[p-3]^i[p-8]^i[p-14]^i[p-16];i[p]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],c=this.chain_[3],l=this.chain_[4],u,f;for(let p=0;p<80;p++){p<40?p<20?(u=c^r&(o^c),f=1518500249):(u=r^o^c,f=1859775393):p<60?(u=r&o|c&(r|o),f=2400959708):(u=r^o^c,f=3395469782);const m=(s<<5|s>>>27)+u+l+f+i[p]&4294967295;l=c,c=o,o=(r<<30|r>>>2)&4294967295,r=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function ev(n,e){const t=new tv(n,e);return t.subscribe.bind(t)}class tv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");nv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Gc),s.error===void 0&&(s.error=Gc),s.complete===void 0&&(s.complete=Gc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gc(){}function ji(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,O(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Oa=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const sv=1e3,rv=2,ov=14400*1e3,av=.5;function Rf(n,e=sv,t=rv){const i=e*Math.pow(t,n),s=Math.round(av*i*(Math.random()-.5)*2);return Math.min(ov,i+s)}/**
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
 */function x(n){return n&&n._delegate?n._delegate:n}class gt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kn="[DEFAULT]";/**
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
 */class cv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ut;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uv(e))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kn){return this.instances.has(e)}getOptions(e=Kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:lv(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Kn){return this.component?this.component.multipleInstances?e:Kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lv(n){return n===Kn?void 0:n}function uv(n){return n.instantiationMode==="EAGER"}/**
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
 */class hv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const dv={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},fv=Y.INFO,pv={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},mv=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=pv[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Br{constructor(e){this.name=e,this._logLevel=fv,this._logHandler=mv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const gv=(n,e)=>e.some(t=>n instanceof t);let Sf,Cf;function _v(){return Sf||(Sf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yv(){return Cf||(Cf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gg=new WeakMap,Rl=new WeakMap,_g=new WeakMap,zc=new WeakMap,vu=new WeakMap;function Iv(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(In(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&gg.set(t,n)}).catch(()=>{}),vu.set(e,n),e}function Ev(n){if(Rl.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Rl.set(n,e)}let Sl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Rl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_g.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return In(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Tv(n){Sl=n(Sl)}function vv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Kc(this),e,...t);return _g.set(i,e.sort?e.sort():[e]),In(i)}:yv().includes(n)?function(...e){return n.apply(Kc(this),e),In(gg.get(this))}:function(...e){return In(n.apply(Kc(this),e))}}function wv(n){return typeof n=="function"?vv(n):(n instanceof IDBTransaction&&Ev(n),gv(n,_v())?new Proxy(n,Sl):n)}function In(n){if(n instanceof IDBRequest)return Iv(n);if(zc.has(n))return zc.get(n);const e=wv(n);return e!==n&&(zc.set(n,e),vu.set(e,n)),e}const Kc=n=>vu.get(n);function yg(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),c=In(o);return i&&o.addEventListener("upgradeneeded",l=>{i(In(o.result),l.oldVersion,l.newVersion,In(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Av=["get","getKey","getAll","getAllKeys","count"],Rv=["put","add","delete","clear"],Qc=new Map;function bf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Rv.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Av.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return Qc.set(e,r),r}Tv(n=>({...n,get:(e,t,i)=>bf(e,t)||n.get(e,t,i),has:(e,t)=>!!bf(e,t)||n.has(e,t)}));/**
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
 */class Sv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cv(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Cv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cl="@firebase/app",Pf="0.14.6";/**
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
 */const Xt=new Br("@firebase/app"),bv="@firebase/app-compat",Pv="@firebase/analytics-compat",Nv="@firebase/analytics",kv="@firebase/app-check-compat",Dv="@firebase/app-check",Ov="@firebase/auth",Mv="@firebase/auth-compat",Lv="@firebase/database",Vv="@firebase/data-connect",xv="@firebase/database-compat",Fv="@firebase/functions",Uv="@firebase/functions-compat",qv="@firebase/installations",Bv="@firebase/installations-compat",Wv="@firebase/messaging",$v="@firebase/messaging-compat",jv="@firebase/performance",Hv="@firebase/performance-compat",Gv="@firebase/remote-config",zv="@firebase/remote-config-compat",Kv="@firebase/storage",Qv="@firebase/storage-compat",Yv="@firebase/firestore",Xv="@firebase/ai",Jv="@firebase/firestore-compat",Zv="firebase",ew="12.6.0";/**
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
 */const bl="[DEFAULT]",tw={[Cl]:"fire-core",[bv]:"fire-core-compat",[Nv]:"fire-analytics",[Pv]:"fire-analytics-compat",[Dv]:"fire-app-check",[kv]:"fire-app-check-compat",[Ov]:"fire-auth",[Mv]:"fire-auth-compat",[Lv]:"fire-rtdb",[Vv]:"fire-data-connect",[xv]:"fire-rtdb-compat",[Fv]:"fire-fn",[Uv]:"fire-fn-compat",[qv]:"fire-iid",[Bv]:"fire-iid-compat",[Wv]:"fire-fcm",[$v]:"fire-fcm-compat",[jv]:"fire-perf",[Hv]:"fire-perf-compat",[Gv]:"fire-rc",[zv]:"fire-rc-compat",[Kv]:"fire-gcs",[Qv]:"fire-gcs-compat",[Yv]:"fire-fst",[Jv]:"fire-fst-compat",[Xv]:"fire-vertex","fire-js":"fire-js",[Zv]:"fire-js-all"};/**
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
 */const mr=new Map,nw=new Map,Pl=new Map;function Nf(n,e){try{n.container.addComponent(e)}catch(t){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vt(n){const e=n.name;if(Pl.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;Pl.set(e,n);for(const t of mr.values())Nf(t,n);for(const t of nw.values())Nf(t,n);return!0}function is(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function de(n){return n==null?!1:n.settings!==void 0}/**
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
 */const iw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},En=new fi("app","Firebase",iw);/**
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
 */class sw{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
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
 */const mi=ew;function Ig(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:bl,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw En.create("bad-app-name",{appName:String(s)});if(t||(t=cg()),!t)throw En.create("no-options");const r=mr.get(s);if(r){if(bn(t,r.options)&&bn(i,r.config))return r;throw En.create("duplicate-app",{appName:s})}const o=new hv(s);for(const l of Pl.values())o.addComponent(l);const c=new sw(t,i,o);return mr.set(s,c),c}function wu(n=bl){const e=mr.get(n);if(!e&&n===bl&&cg())return Ig();if(!e)throw En.create("no-app",{appName:n});return e}function rw(){return Array.from(mr.values())}function st(n,e,t){let i=tw[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(o.join(" "));return}vt(new gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ow="firebase-heartbeat-database",aw=1,gr="firebase-heartbeat-store";let Yc=null;function Eg(){return Yc||(Yc=yg(ow,aw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(gr)}catch(t){console.warn(t)}}}}).catch(n=>{throw En.create("idb-open",{originalErrorMessage:n.message})})),Yc}async function cw(n){try{const t=(await Eg()).transaction(gr),i=await t.objectStore(gr).get(Tg(n));return await t.done,i}catch(e){if(e instanceof At)Xt.warn(e.message);else{const t=En.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(t.message)}}}async function kf(n,e){try{const i=(await Eg()).transaction(gr,"readwrite");await i.objectStore(gr).put(e,Tg(n)),await i.done}catch(t){if(t instanceof At)Xt.warn(t.message);else{const i=En.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xt.warn(i.message)}}}function Tg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const lw=1024,uw=30;class hw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fw(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Df();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>uw){const o=pw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Xt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Df(),{heartbeatsToSend:i,unsentEntries:s}=dw(this._heartbeatsCache.heartbeats),r=zo(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Xt.warn(t),""}}}function Df(){return new Date().toISOString().substring(0,10)}function dw(n,e=lw){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Of(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Of(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class fw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fg()?pg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Of(n){return zo(JSON.stringify({version:2,heartbeats:n})).length}function pw(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function mw(n){vt(new gt("platform-logger",e=>new Sv(e),"PRIVATE")),vt(new gt("heartbeat",e=>new hw(e),"PRIVATE")),st(Cl,Pf,n),st(Cl,Pf,"esm2020"),st("fire-js","")}mw("");var Mf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tn,vg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function I(){}I.prototype=_.prototype,T.F=_.prototype,T.prototype=new I,T.prototype.constructor=T,T.D=function(v,E,R){for(var y=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)y[Xe-2]=arguments[Xe];return _.prototype[E].apply(v,y)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,I){I||(I=0);const v=Array(16);if(typeof _=="string")for(var E=0;E<16;++E)v[E]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(E=0;E<16;++E)v[E]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=T.g[0],I=T.g[1],E=T.g[2];let R=T.g[3],y;y=_+(R^I&(E^R))+v[0]+3614090360&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(E^_&(I^E))+v[1]+3905402710&4294967295,R=_+(y<<12&4294967295|y>>>20),y=E+(I^R&(_^I))+v[2]+606105819&4294967295,E=R+(y<<17&4294967295|y>>>15),y=I+(_^E&(R^_))+v[3]+3250441966&4294967295,I=E+(y<<22&4294967295|y>>>10),y=_+(R^I&(E^R))+v[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(E^_&(I^E))+v[5]+1200080426&4294967295,R=_+(y<<12&4294967295|y>>>20),y=E+(I^R&(_^I))+v[6]+2821735955&4294967295,E=R+(y<<17&4294967295|y>>>15),y=I+(_^E&(R^_))+v[7]+4249261313&4294967295,I=E+(y<<22&4294967295|y>>>10),y=_+(R^I&(E^R))+v[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(E^_&(I^E))+v[9]+2336552879&4294967295,R=_+(y<<12&4294967295|y>>>20),y=E+(I^R&(_^I))+v[10]+4294925233&4294967295,E=R+(y<<17&4294967295|y>>>15),y=I+(_^E&(R^_))+v[11]+2304563134&4294967295,I=E+(y<<22&4294967295|y>>>10),y=_+(R^I&(E^R))+v[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(E^_&(I^E))+v[13]+4254626195&4294967295,R=_+(y<<12&4294967295|y>>>20),y=E+(I^R&(_^I))+v[14]+2792965006&4294967295,E=R+(y<<17&4294967295|y>>>15),y=I+(_^E&(R^_))+v[15]+1236535329&4294967295,I=E+(y<<22&4294967295|y>>>10),y=_+(E^R&(I^E))+v[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^E&(_^I))+v[6]+3225465664&4294967295,R=_+(y<<9&4294967295|y>>>23),y=E+(_^I&(R^_))+v[11]+643717713&4294967295,E=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(E^R))+v[0]+3921069994&4294967295,I=E+(y<<20&4294967295|y>>>12),y=_+(E^R&(I^E))+v[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^E&(_^I))+v[10]+38016083&4294967295,R=_+(y<<9&4294967295|y>>>23),y=E+(_^I&(R^_))+v[15]+3634488961&4294967295,E=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(E^R))+v[4]+3889429448&4294967295,I=E+(y<<20&4294967295|y>>>12),y=_+(E^R&(I^E))+v[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^E&(_^I))+v[14]+3275163606&4294967295,R=_+(y<<9&4294967295|y>>>23),y=E+(_^I&(R^_))+v[3]+4107603335&4294967295,E=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(E^R))+v[8]+1163531501&4294967295,I=E+(y<<20&4294967295|y>>>12),y=_+(E^R&(I^E))+v[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^E&(_^I))+v[2]+4243563512&4294967295,R=_+(y<<9&4294967295|y>>>23),y=E+(_^I&(R^_))+v[7]+1735328473&4294967295,E=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(E^R))+v[12]+2368359562&4294967295,I=E+(y<<20&4294967295|y>>>12),y=_+(I^E^R)+v[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^E)+v[8]+2272392833&4294967295,R=_+(y<<11&4294967295|y>>>21),y=E+(R^_^I)+v[11]+1839030562&4294967295,E=R+(y<<16&4294967295|y>>>16),y=I+(E^R^_)+v[14]+4259657740&4294967295,I=E+(y<<23&4294967295|y>>>9),y=_+(I^E^R)+v[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^E)+v[4]+1272893353&4294967295,R=_+(y<<11&4294967295|y>>>21),y=E+(R^_^I)+v[7]+4139469664&4294967295,E=R+(y<<16&4294967295|y>>>16),y=I+(E^R^_)+v[10]+3200236656&4294967295,I=E+(y<<23&4294967295|y>>>9),y=_+(I^E^R)+v[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^E)+v[0]+3936430074&4294967295,R=_+(y<<11&4294967295|y>>>21),y=E+(R^_^I)+v[3]+3572445317&4294967295,E=R+(y<<16&4294967295|y>>>16),y=I+(E^R^_)+v[6]+76029189&4294967295,I=E+(y<<23&4294967295|y>>>9),y=_+(I^E^R)+v[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^E)+v[12]+3873151461&4294967295,R=_+(y<<11&4294967295|y>>>21),y=E+(R^_^I)+v[15]+530742520&4294967295,E=R+(y<<16&4294967295|y>>>16),y=I+(E^R^_)+v[2]+3299628645&4294967295,I=E+(y<<23&4294967295|y>>>9),y=_+(E^(I|~R))+v[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~E))+v[7]+1126891415&4294967295,R=_+(y<<10&4294967295|y>>>22),y=E+(_^(R|~I))+v[14]+2878612391&4294967295,E=R+(y<<15&4294967295|y>>>17),y=I+(R^(E|~_))+v[5]+4237533241&4294967295,I=E+(y<<21&4294967295|y>>>11),y=_+(E^(I|~R))+v[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~E))+v[3]+2399980690&4294967295,R=_+(y<<10&4294967295|y>>>22),y=E+(_^(R|~I))+v[10]+4293915773&4294967295,E=R+(y<<15&4294967295|y>>>17),y=I+(R^(E|~_))+v[1]+2240044497&4294967295,I=E+(y<<21&4294967295|y>>>11),y=_+(E^(I|~R))+v[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~E))+v[15]+4264355552&4294967295,R=_+(y<<10&4294967295|y>>>22),y=E+(_^(R|~I))+v[6]+2734768916&4294967295,E=R+(y<<15&4294967295|y>>>17),y=I+(R^(E|~_))+v[13]+1309151649&4294967295,I=E+(y<<21&4294967295|y>>>11),y=_+(E^(I|~R))+v[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~E))+v[11]+3174756917&4294967295,R=_+(y<<10&4294967295|y>>>22),y=E+(_^(R|~I))+v[2]+718787259&4294967295,E=R+(y<<15&4294967295|y>>>17),y=I+(R^(E|~_))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+R&4294967295}i.prototype.v=function(T,_){_===void 0&&(_=T.length);const I=_-this.blockSize,v=this.C;let E=this.h,R=0;for(;R<_;){if(E==0)for(;R<=I;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<_;)if(v[E++]=T.charCodeAt(R++),E==this.blockSize){s(this,v),E=0;break}}else for(;R<_;)if(v[E++]=T[R++],E==this.blockSize){s(this,v),E=0;break}}this.h=E,this.o+=_},i.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var I=T.length-8;I<T.length;++I)T[I]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,I=0;I<4;++I)for(let v=0;v<32;v+=8)T[_++]=this.g[I]>>>v&255;return T};function r(T,_){var I=c;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=_(T)}function o(T,_){this.h=_;const I=[];let v=!0;for(let E=T.length-1;E>=0;E--){const R=T[E]|0;v&&R==_||(I[E]=R,v=!1)}this.g=I}var c={};function l(T){return-128<=T&&T<128?r(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return N(u(-T));const _=[];let I=1;for(let v=0;T>=I;v++)_[v]=T/I|0,I*=4294967296;return new o(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return N(f(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=u(Math.pow(_,8));let v=p;for(let R=0;R<T.length;R+=8){var E=Math.min(8,T.length-R);const y=parseInt(T.substring(R,R+E),_);E<8?(E=u(Math.pow(_,E)),v=v.j(E).add(u(y))):(v=v.j(I),v=v.add(u(y)))}return v}var p=l(0),m=l(1),w=l(16777216);n=o.prototype,n.m=function(){if(k(this))return-N(this).m();let T=0,_=1;for(let I=0;I<this.g.length;I++){const v=this.i(I);T+=(v>=0?v:4294967296+v)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(k(this))return"-"+N(this).toString(T);const _=u(Math.pow(T,6));var I=this;let v="";for(;;){const E=Ee(I,_).g;I=$(I,E.j(_));let R=((I.g.length>0?I.g[0]:I.h)>>>0).toString(T);if(I=E,C(I))return R+v;for(;R.length<6;)R="0"+R;v=R+v}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=$(this,T),k(T)?-1:C(T)?0:1};function N(T){const _=T.g.length,I=[];for(let v=0;v<_;v++)I[v]=~T.g[v];return new o(I,~T.h).add(m)}n.abs=function(){return k(this)?N(this):this},n.add=function(T){const _=Math.max(this.g.length,T.g.length),I=[];let v=0;for(let E=0;E<=_;E++){let R=v+(this.i(E)&65535)+(T.i(E)&65535),y=(R>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);v=y>>>16,R&=65535,y&=65535,I[E]=y<<16|R}return new o(I,I[I.length-1]&-2147483648?-1:0)};function $(T,_){return T.add(N(_))}n.j=function(T){if(C(this)||C(T))return p;if(k(this))return k(T)?N(this).j(N(T)):N(N(this).j(T));if(k(T))return N(this.j(N(T)));if(this.l(w)<0&&T.l(w)<0)return u(this.m()*T.m());const _=this.g.length+T.g.length,I=[];for(var v=0;v<2*_;v++)I[v]=0;for(v=0;v<this.g.length;v++)for(let E=0;E<T.g.length;E++){const R=this.i(v)>>>16,y=this.i(v)&65535,Xe=T.i(E)>>>16,Wn=T.i(E)&65535;I[2*v+2*E]+=y*Wn,H(I,2*v+2*E),I[2*v+2*E+1]+=R*Wn,H(I,2*v+2*E+1),I[2*v+2*E+1]+=y*Xe,H(I,2*v+2*E+1),I[2*v+2*E+2]+=R*Xe,H(I,2*v+2*E+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new o(I,0)};function H(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function ee(T,_){this.g=T,this.h=_}function Ee(T,_){if(C(_))throw Error("division by zero");if(C(T))return new ee(p,p);if(k(T))return _=Ee(N(T),_),new ee(N(_.g),N(_.h));if(k(_))return _=Ee(T,N(_)),new ee(N(_.g),_.h);if(T.g.length>30){if(k(T)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,v=_;v.l(T)<=0;)I=ct(I),v=ct(v);var E=be(I,1),R=be(v,1);for(v=be(v,2),I=be(I,2);!C(v);){var y=R.add(v);y.l(T)<=0&&(E=E.add(I),R=y),v=be(v,1),I=be(I,1)}return _=$(T,E.j(_)),new ee(E,_)}for(E=p;T.l(_)>=0;){for(I=Math.max(1,Math.floor(T.m()/_.m())),v=Math.ceil(Math.log(I)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),R=u(I),y=R.j(_);k(y)||y.l(T)>0;)I-=v,R=u(I),y=R.j(_);C(R)&&(R=m),E=E.add(R),T=$(T,y)}return new ee(E,T)}n.B=function(T){return Ee(this,T).h},n.and=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let v=0;v<_;v++)I[v]=this.i(v)&T.i(v);return new o(I,this.h&T.h)},n.or=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let v=0;v<_;v++)I[v]=this.i(v)|T.i(v);return new o(I,this.h|T.h)},n.xor=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let v=0;v<_;v++)I[v]=this.i(v)^T.i(v);return new o(I,this.h^T.h)};function ct(T){const _=T.g.length+1,I=[];for(let v=0;v<_;v++)I[v]=T.i(v)<<1|T.i(v-1)>>>31;return new o(I,T.h)}function be(T,_){const I=_>>5;_%=32;const v=T.g.length-I,E=[];for(let R=0;R<v;R++)E[R]=_>0?T.i(R+I)>>>_|T.i(R+I+1)<<32-_:T.i(R+I);return new o(E,T.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,vg=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Tn=o}).apply(typeof Mf<"u"?Mf:typeof self<"u"?self:typeof window<"u"?window:{});var vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wg,zs,Ag,Lo,Nl,Rg,Sg,Cg;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof vo=="object"&&vo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=t(this);function s(a,h){if(h)e:{var d=i;a=a.split(".");for(var g=0;g<a.length-1;g++){var A=a[g];if(!(A in d))break e;d=d[A]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,A,S){for(var M=Array(arguments.length-2),G=2;G<arguments.length;G++)M[G-2]=arguments[G];return h.prototype[A].apply(g,M)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function C(a,h){for(let g=1;g<arguments.length;g++){const A=arguments[g];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=a.length||0;const S=A.length||0;a.length=d+S;for(let M=0;M<S;M++)a[d+M]=A[M]}else a.push(A)}}class k{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){o.setTimeout(()=>{throw a},0)}function $(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class H{constructor(){this.h=this.g=null}add(h,d){const g=ee.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var ee=new k(()=>new Ee,a=>a.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,be=!1,T=new H,_=()=>{const a=Promise.resolve(void 0);ct=()=>{a.then(I)}};function I(){for(var a;a=$();){try{a.h.call(a.g)}catch(d){N(d)}var h=ee;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}be=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function Xe(a,h){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Xe,E),Xe.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Xe.Z.h.call(this)},Xe.prototype.h=function(){Xe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Wn="closure_listenable_"+(Math.random()*1e6|0),$E=0;function jE(a,h,d,g,A){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=A,this.key=++$E,this.da=this.fa=!1}function oo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ao(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function HE(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function yd(a){const h={};for(const d in a)h[d]=a[d];return h}const Id="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ed(a,h){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)a[d]=g[d];for(let S=0;S<Id.length;S++)d=Id[S],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function co(a){this.src=a,this.g={},this.h=0}co.prototype.add=function(a,h,d,g,A){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const M=wc(a,h,g,A);return M>-1?(h=a[M],d||(h.fa=!1)):(h=new jE(h,this.src,S,!!g,A),h.fa=d,a.push(h)),h};function vc(a,h){const d=h.type;if(d in a.g){var g=a.g[d],A=Array.prototype.indexOf.call(g,h,void 0),S;(S=A>=0)&&Array.prototype.splice.call(g,A,1),S&&(oo(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function wc(a,h,d,g){for(let A=0;A<a.length;++A){const S=a[A];if(!S.da&&S.listener==h&&S.capture==!!d&&S.ha==g)return A}return-1}var Ac="closure_lm_"+(Math.random()*1e6|0),Rc={};function Td(a,h,d,g,A){if(Array.isArray(h)){for(let S=0;S<h.length;S++)Td(a,h[S],d,g,A);return null}return d=Ad(d),a&&a[Wn]?a.J(h,d,c(g)?!!g.capture:!1,A):GE(a,h,d,!1,g,A)}function GE(a,h,d,g,A,S){if(!h)throw Error("Invalid event type");const M=c(A)?!!A.capture:!!A;let G=Cc(a);if(G||(a[Ac]=G=new co(a)),d=G.add(h,d,g,M,S),d.proxy)return d;if(g=zE(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)R||(A=M),A===void 0&&(A=!1),a.addEventListener(h.toString(),g,A);else if(a.attachEvent)a.attachEvent(wd(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function zE(){function a(d){return h.call(a.src,a.listener,d)}const h=KE;return a}function vd(a,h,d,g,A){if(Array.isArray(h))for(var S=0;S<h.length;S++)vd(a,h[S],d,g,A);else g=c(g)?!!g.capture:!!g,d=Ad(d),a&&a[Wn]?(a=a.i,S=String(h).toString(),S in a.g&&(h=a.g[S],d=wc(h,d,g,A),d>-1&&(oo(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[S],a.h--)))):a&&(a=Cc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=wc(h,d,g,A)),(d=a>-1?h[a]:null)&&Sc(d))}function Sc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Wn])vc(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(wd(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Cc(h))?(vc(d,a),d.h==0&&(d.src=null,h[Ac]=null)):oo(a)}}}function wd(a){return a in Rc?Rc[a]:Rc[a]="on"+a}function KE(a,h){if(a.da)a=!0;else{h=new Xe(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&Sc(a),a=d.call(g,h)}return a}function Cc(a){return a=a[Ac],a instanceof co?a:null}var bc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ad(a){return typeof a=="function"?a:(a[bc]||(a[bc]=function(h){return a.handleEvent(h)}),a[bc])}function Be(){v.call(this),this.i=new co(this),this.M=this,this.G=null}p(Be,v),Be.prototype[Wn]=!0,Be.prototype.removeEventListener=function(a,h,d,g){vd(this,a,h,d,g)};function ze(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new E(h,a);else if(h instanceof E)h.target=h.target||a;else{var A=h;h=new E(g,a),Ed(h,A)}A=!0;let S,M;if(d)for(M=d.length-1;M>=0;M--)S=h.g=d[M],A=lo(S,g,!0,h)&&A;if(S=h.g=a,A=lo(S,g,!0,h)&&A,A=lo(S,g,!1,h)&&A,d)for(M=0;M<d.length;M++)S=h.g=d[M],A=lo(S,g,!1,h)&&A}Be.prototype.N=function(){if(Be.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)oo(d[g]);delete a.g[h],a.h--}}this.G=null},Be.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},Be.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function lo(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let A=!0;for(let S=0;S<h.length;++S){const M=h[S];if(M&&!M.da&&M.capture==d){const G=M.listener,Pe=M.ha||M.src;M.fa&&vc(a.i,M),A=G.call(Pe,g)!==!1&&A}}return A&&!g.defaultPrevented}function QE(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Rd(a){a.g=QE(()=>{a.g=null,a.i&&(a.i=!1,Rd(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class YE extends v{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Rd(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(a){v.call(this),this.h=a,this.g={}}p(gs,v);var Sd=[];function Cd(a){ao(a.g,function(h,d){this.g.hasOwnProperty(d)&&Sc(h)},a),a.g={}}gs.prototype.N=function(){gs.Z.N.call(this),Cd(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pc=o.JSON.stringify,XE=o.JSON.parse,JE=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function bd(){}function Pd(){}var _s={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Nc(){E.call(this,"d")}p(Nc,E);function kc(){E.call(this,"c")}p(kc,E);var $n={},Nd=null;function uo(){return Nd=Nd||new Be}$n.Ia="serverreachability";function kd(a){E.call(this,$n.Ia,a)}p(kd,E);function ys(a){const h=uo();ze(h,new kd(h))}$n.STAT_EVENT="statevent";function Dd(a,h){E.call(this,$n.STAT_EVENT,a),this.stat=h}p(Dd,E);function Ke(a){const h=uo();ze(h,new Dd(h,a))}$n.Ja="timingevent";function Od(a,h){E.call(this,$n.Ja,a),this.size=h}p(Od,E);function Is(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Es(){this.g=!0}Es.prototype.ua=function(){this.g=!1};function ZE(a,h,d,g,A,S){a.info(function(){if(a.g)if(S){var M="",G=S.split("&");for(let se=0;se<G.length;se++){var Pe=G[se].split("=");if(Pe.length>1){const ke=Pe[0];Pe=Pe[1];const St=ke.split("_");M=St.length>=2&&St[1]=="type"?M+(ke+"="+Pe+"&"):M+(ke+"=redacted&")}}}else M=null;else M=S;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+h+`
`+d+`
`+M})}function eT(a,h,d,g,A,S,M){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+h+`
`+d+`
`+S+" "+M})}function Ti(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+nT(a,d)+(g?" "+g:"")})}function tT(a,h){a.info(function(){return"TIMEOUT: "+h})}Es.prototype.info=function(){};function nT(a,h){if(!a.g)return h;if(!h)return null;try{const S=JSON.parse(h);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var d=S[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let M=1;M<g.length;M++)g[M]=""}}}}return Pc(S)}catch{return h}}var ho={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Md={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ld;function Dc(){}p(Dc,bd),Dc.prototype.g=function(){return new XMLHttpRequest},Ld=new Dc;function Ts(a){return encodeURIComponent(String(a))}function iT(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function un(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new gs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vd}function Vd(){this.i=null,this.g="",this.h=!1}var xd={},Oc={};function Mc(a,h,d){a.M=1,a.A=po(Rt(h)),a.u=d,a.R=!0,Fd(a,null)}function Fd(a,h){a.F=Date.now(),fo(a),a.B=Rt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Xd(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Vd,a.g=gf(a.j,d?h:null,!a.u),a.P>0&&(a.O=new YE(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(Sd[0]=A.toString()),A=Sd);for(let S=0;S<A.length;S++){const M=Td(d,A[S],g||h.handleEvent,!1,h.h||h);if(!M)break;h.g[M.key]=M}h=a.J?yd(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ys(),ZE(a.i,a.v,a.B,a.l,a.S,a.u)}un.prototype.ba=function(a){a=a.target;const h=this.O;h&&fn(a)==3?h.j():this.Y(a)},un.prototype.Y=function(a){try{if(a==this.g)e:{const G=fn(this.g),Pe=this.g.ya(),se=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||rf(this.g)))){this.K||G!=4||Pe==7||(Pe==8||se<=0?ys(3):ys(2)),Lc(this);var h=this.g.ca();this.X=h;var d=sT(this);if(this.o=h==200,eT(this.i,this.v,this.B,this.l,this.S,G,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var S=g;break t}}S=null}if(a=S)Ti(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Vc(this,a);else{this.o=!1,this.m=3,Ke(12),jn(this),vs(this);break e}}if(this.R){a=!0;let ke;for(;!this.K&&this.C<d.length;)if(ke=rT(this,d),ke==Oc){G==4&&(this.m=4,Ke(14),a=!1),Ti(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==xd){this.m=4,Ke(15),Ti(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Ti(this.i,this.l,ke,null),Vc(this,ke);if(Ud(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||d.length!=0||this.h.h||(this.m=1,Ke(16),a=!1),this.o=this.o&&a,!a)Ti(this.i,this.l,d,"[Invalid Chunked Response]"),jn(this),vs(this);else if(d.length>0&&!this.W){this.W=!0;var M=this.j;M.g==this&&M.aa&&!M.P&&(M.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),jc(M),M.P=!0,Ke(11))}}else Ti(this.i,this.l,d,null),Vc(this,d);G==4&&jn(this),this.o&&!this.K&&(G==4?df(this.j,this):(this.o=!1,fo(this)))}else IT(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ke(12)):(this.m=0,Ke(13)),jn(this),vs(this)}}}catch{}finally{}};function sT(a){if(!Ud(a))return a.g.la();const h=rf(a.g);if(h==="")return"";let d="";const g=h.length,A=fn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return jn(a),vs(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<g;S++)a.h.h=!0,d+=a.h.i.decode(h[S],{stream:!(A&&S==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Ud(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function rT(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Oc:(d=Number(h.substring(d,g)),isNaN(d)?xd:(g+=1,g+d>h.length?Oc:(h=h.slice(g,g+d),a.C=g+d,h)))}un.prototype.cancel=function(){this.K=!0,jn(this)};function fo(a){a.T=Date.now()+a.H,qd(a,a.H)}function qd(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Is(u(a.aa,a),h)}function Lc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}un.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(tT(this.i,this.B),this.M!=2&&(ys(),Ke(17)),jn(this),this.m=2,vs(this)):qd(this,this.T-a)};function vs(a){a.j.I==0||a.K||df(a.j,a)}function jn(a){Lc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Cd(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Vc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||xc(d.h,a))){if(!a.L&&xc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Io(d),_o(d);else break e;$c(d),Ke(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Is(u(d.Va,d),6e3));$d(d.h)<=1&&d.ta&&(d.ta=void 0)}else Gn(d,11)}else if((a.L||d.g==a)&&Io(d),!y(h))for(A=d.Ba.g.parse(h),h=0;h<A.length;h++){let se=A[h];const ke=se[0];if(!(ke<=d.K))if(d.K=ke,se=se[1],d.I==2)if(se[0]=="c"){d.M=se[1],d.ba=se[2];const St=se[3];St!=null&&(d.ka=St,d.j.info("VER="+d.ka));const zn=se[4];zn!=null&&(d.za=zn,d.j.info("SVER="+d.za));const pn=se[5];pn!=null&&typeof pn=="number"&&pn>0&&(g=1.5*pn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const mn=a.g;if(mn){const To=mn.g?mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(To){var S=g.h;S.g||To.indexOf("spdy")==-1&&To.indexOf("quic")==-1&&To.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Fc(S,S.h),S.h=null))}if(g.G){const Hc=mn.g?mn.g.getResponseHeader("X-HTTP-Session-Id"):null;Hc&&(g.wa=Hc,ae(g.J,g.G,Hc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var M=a;if(g.na=mf(g,g.L?g.ba:null,g.W),M.L){jd(g.h,M);var G=M,Pe=g.O;Pe&&(G.H=Pe),G.D&&(Lc(G),fo(G)),g.g=M}else uf(g);d.i.length>0&&yo(d)}else se[0]!="stop"&&se[0]!="close"||Gn(d,7);else d.I==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Gn(d,7):Wc(d):se[0]!="noop"&&d.l&&d.l.qa(se),d.A=0)}}ys(4)}catch{}}var oT=class{constructor(a,h){this.g=a,this.map=h}};function Bd(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Wd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function $d(a){return a.h?1:a.g?a.g.size:0}function xc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Fc(a,h){a.g?a.g.add(h):a.h=h}function jd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Bd.prototype.cancel=function(){if(this.i=Hd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Hd(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return w(a.i)}var Gd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aT(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let A,S=null;g>=0?(A=a[d].substring(0,g),S=a[d].substring(g+1)):A=a[d],h(A,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function hn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof hn?(this.l=a.l,ws(this,a.j),this.o=a.o,this.g=a.g,As(this,a.u),this.h=a.h,Uc(this,Jd(a.i)),this.m=a.m):a&&(h=String(a).match(Gd))?(this.l=!1,ws(this,h[1]||"",!0),this.o=Rs(h[2]||""),this.g=Rs(h[3]||"",!0),As(this,h[4]),this.h=Rs(h[5]||"",!0),Uc(this,h[6]||"",!0),this.m=Rs(h[7]||"")):(this.l=!1,this.i=new Cs(null,this.l))}hn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ss(h,zd,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ss(h,zd,!0),"@"),a.push(Ts(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ss(d,d.charAt(0)=="/"?uT:lT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ss(d,dT)),a.join("")},hn.prototype.resolve=function(a){const h=Rt(this);let d=!!a.j;d?ws(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)As(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=h.h.lastIndexOf("/");A!=-1&&(g=h.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const S=[];for(let M=0;M<A.length;){const G=A[M++];G=="."?g&&M==A.length&&S.push(""):G==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),g&&M==A.length&&S.push("")):(S.push(G),g=!0)}g=S.join("/")}else g=A}return d?h.h=g:d=a.i.toString()!=="",d?Uc(h,Jd(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Rt(a){return new hn(a)}function ws(a,h,d){a.j=d?Rs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function As(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Uc(a,h,d){h instanceof Cs?(a.i=h,fT(a.i,a.l)):(d||(h=Ss(h,hT)),a.i=new Cs(h,a.l))}function ae(a,h,d){a.i.set(h,d)}function po(a){return ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Rs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ss(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,cT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function cT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zd=/[#\/\?@]/g,lT=/[#\?:]/g,uT=/[#\?]/g,hT=/[#\?@]/g,dT=/#/g;function Cs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&aT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}n=Cs.prototype,n.add=function(a,h){Hn(this),this.i=null,a=vi(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Kd(a,h){Hn(a),h=vi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Qd(a,h){return Hn(a),h=vi(a,h),a.g.has(h)}n.forEach=function(a,h){Hn(this),this.g.forEach(function(d,g){d.forEach(function(A){a.call(h,A,g,this)},this)},this)};function Yd(a,h){Hn(a);let d=[];if(typeof h=="string")Qd(a,h)&&(d=d.concat(a.g.get(vi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}n.set=function(a,h){return Hn(this),this.i=null,a=vi(this,a),Qd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=Yd(this,a),a.length>0?String(a[0]):h):h};function Xd(a,h,d){Kd(a,h),d.length>0&&(a.i=null,a.g.set(vi(a,h),w(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const A=Ts(d);d=Yd(this,d);for(let S=0;S<d.length;S++){let M=A;d[S]!==""&&(M+="="+Ts(d[S])),a.push(M)}}return this.i=a.join("&")};function Jd(a){const h=new Cs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function vi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function fT(a,h){h&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(d,g){const A=g.toLowerCase();g!=A&&(Kd(this,g),Xd(this,A,d))},a)),a.j=h}function pT(a,h){const d=new Es;if(o.Image){const g=new Image;g.onload=f(dn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(dn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(dn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(dn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function mT(a,h){const d=new Es,g=new AbortController,A=setTimeout(()=>{g.abort(),dn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(S=>{clearTimeout(A),S.ok?dn(d,"TestPingServer: ok",!0,h):dn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(A),dn(d,"TestPingServer: error",!1,h)})}function dn(a,h,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch{}}function gT(){this.g=new JE}function qc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(qc,bd),qc.prototype.g=function(){return new mo(this.i,this.h)};function mo(a,h){Be.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(mo,Be),n=mo.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ps(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Zd(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Zd(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?bs(this):Ps(this),this.readyState==3&&Zd(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,bs(this))},n.Na=function(a){this.g&&(this.response=a,bs(this))},n.ga=function(){this.g&&bs(this)};function bs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ps(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ef(a){let h="";return ao(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Bc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=ef(d),typeof a=="string"?d!=null&&Ts(d):ae(a,h,d))}function pe(a){Be.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(pe,Be);var _T=/^https?$/i,yT=["POST","PUT"];n=pe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ld.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(S){tf(this,S);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const S of g.keys())d.set(S,g.get(S));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(yT,h,void 0)>=0)||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,M]of d)this.g.setRequestHeader(S,M);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){tf(this,S)}};function tf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,nf(a),go(a)}function nf(a){a.A||(a.A=!0,ze(a,"complete"),ze(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ze(this,"complete"),ze(this,"abort"),go(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),go(this,!0)),pe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?sf(this):this.Xa())},n.Xa=function(){sf(this)};function sf(a){if(a.h&&typeof r<"u"){if(a.v&&fn(a)==4)setTimeout(a.Ca.bind(a),0);else if(ze(a,"readystatechange"),fn(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=S===0){let M=String(a.D).match(Gd)[1]||null;!M&&o.self&&o.self.location&&(M=o.self.location.protocol.slice(0,-1)),g=!_T.test(M?M.toLowerCase():"")}d=g}if(d)ze(a,"complete"),ze(a,"success");else{a.o=6;try{var A=fn(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",nf(a)}}finally{go(a)}}}}function go(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||ze(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return fn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),XE(h)}};function rf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function IT(a){const h={};a=(a.g&&fn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var d=iT(a[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=h[A]||[];h[A]=S,S.push(d)}HE(h,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ns(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function of(a){this.za=0,this.i=[],this.j=new Es,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ns("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ns("baseRetryDelayMs",5e3,a),this.Za=Ns("retryDelaySeedMs",1e4,a),this.Ta=Ns("forwardChannelMaxRetries",2,a),this.va=Ns("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Bd(a&&a.concurrentRequestLimit),this.Ba=new gT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=of.prototype,n.ka=8,n.I=1,n.connect=function(a,h,d,g){Ke(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=mf(this,null,this.W),yo(this)};function Wc(a){if(af(a),a.I==3){var h=a.V++,d=Rt(a.J);if(ae(d,"SID",a.M),ae(d,"RID",h),ae(d,"TYPE","terminate"),ks(a,d),h=new un(a,a.j,h),h.M=2,h.A=po(Rt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=gf(h.j,null),h.g.ea(h.A)),h.F=Date.now(),fo(h)}pf(a)}function _o(a){a.g&&(jc(a),a.g.cancel(),a.g=null)}function af(a){_o(a),a.v&&(o.clearTimeout(a.v),a.v=null),Io(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function yo(a){if(!Wd(a.h)&&!a.m){a.m=!0;var h=a.Ea;ct||_(),be||(ct(),be=!0),T.add(h,a),a.D=0}}function ET(a,h){return $d(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Is(u(a.Ea,a,h),ff(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new un(this,this.j,a);let S=this.o;if(this.U&&(S?(S=yd(S),Ed(S,this.U)):S=this.U),this.u!==null||this.R||(A.J=S,S=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=lf(this,A,h),d=Rt(this.J),ae(d,"RID",a),ae(d,"CVER",22),this.G&&ae(d,"X-HTTP-Session-Id",this.G),ks(this,d),S&&(this.R?h="headers="+Ts(ef(S))+"&"+h:this.u&&Bc(d,this.u,S)),Fc(this.h,A),this.Ra&&ae(d,"TYPE","init"),this.S?(ae(d,"$req",h),ae(d,"SID","null"),A.U=!0,Mc(A,d,null)):Mc(A,d,h),this.I=2}}else this.I==3&&(a?cf(this,a):this.i.length==0||Wd(this.h)||cf(this))};function cf(a,h){var d;h?d=h.l:d=a.V++;const g=Rt(a.J);ae(g,"SID",a.M),ae(g,"RID",d),ae(g,"AID",a.K),ks(a,g),a.u&&a.o&&Bc(g,a.u,a.o),d=new un(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=lf(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Fc(a.h,d),Mc(d,g,h)}function ks(a,h){a.H&&ao(a.H,function(d,g){ae(h,g,d)}),a.l&&ao({},function(d,g){ae(h,g,d)})}function lf(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var A=a.i;let G=-1;for(;;){const Pe=["count="+d];G==-1?d>0?(G=A[0].g,Pe.push("ofs="+G)):G=0:Pe.push("ofs="+G);let se=!0;for(let ke=0;ke<d;ke++){var S=A[ke].g;const St=A[ke].map;if(S-=G,S<0)G=Math.max(0,A[ke].g-100),se=!1;else try{S="req"+S+"_"||"";try{var M=St instanceof Map?St:Object.entries(St);for(const[zn,pn]of M){let mn=pn;c(pn)&&(mn=Pc(pn)),Pe.push(S+zn+"="+encodeURIComponent(mn))}}catch(zn){throw Pe.push(S+"type="+encodeURIComponent("_badmap")),zn}}catch{g&&g(St)}}if(se){M=Pe.join("&");break e}}M=void 0}return a=a.i.splice(0,d),h.G=a,M}function uf(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;ct||_(),be||(ct(),be=!0),T.add(h,a),a.A=0}}function $c(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Is(u(a.Da,a),ff(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,hf(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Is(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ke(10),_o(this),hf(this))};function jc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function hf(a){a.g=new un(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Rt(a.na);ae(h,"RID","rpc"),ae(h,"SID",a.M),ae(h,"AID",a.K),ae(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ae(h,"TO",a.ia),ae(h,"TYPE","xmlhttp"),ks(a,h),a.u&&a.o&&Bc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=po(Rt(h)),d.u=null,d.R=!0,Fd(d,a)}n.Va=function(){this.C!=null&&(this.C=null,_o(this),$c(this),Ke(19))};function Io(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function df(a,h){var d=null;if(a.g==h){Io(a),jc(a),a.g=null;var g=2}else if(xc(a.h,h))d=h.G,jd(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var A=a.D;g=uo(),ze(g,new Od(g,d)),yo(a)}else uf(a);else if(A=h.m,A==3||A==0&&h.X>0||!(g==1&&ET(a,h)||g==2&&$c(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),A){case 1:Gn(a,5);break;case 4:Gn(a,10);break;case 3:Gn(a,6);break;default:Gn(a,2)}}}function ff(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Gn(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const A=!g;g=new hn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ws(g,"https"),po(g),A?pT(g.toString(),d):mT(g.toString(),d)}else Ke(2);a.I=0,a.l&&a.l.pa(h),pf(a),af(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function pf(a){if(a.I=0,a.ja=[],a.l){const h=Hd(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function mf(a,h,d){var g=d instanceof hn?Rt(d):new hn(d);if(g.g!="")h&&(g.g=h+"."+g.g),As(g,g.u);else{var A=o.location;g=A.protocol,h=h?h+"."+A.hostname:A.hostname,A=+A.port;const S=new hn(null);g&&ws(S,g),h&&(S.g=h),A&&As(S,A),d&&(S.h=d),g=S}return d=a.G,h=a.wa,d&&h&&ae(g,d,h),ae(g,"VER",a.ka),ks(a,g),g}function gf(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new pe(new qc({ab:d})):new pe(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _f(){}n=_f.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Eo(){}Eo.prototype.g=function(a,h){return new lt(a,h)};function lt(a,h){Be.call(this),this.g=new of(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!y(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new wi(this)}p(lt,Be),lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},lt.prototype.close=function(){Wc(this.g)},lt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Pc(a),a=d);h.i.push(new oT(h.Ya++,a)),h.I==3&&yo(h)},lt.prototype.N=function(){this.g.l=null,delete this.j,Wc(this.g),delete this.g,lt.Z.N.call(this)};function yf(a){Nc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(yf,Nc);function If(){kc.call(this),this.status=1}p(If,kc);function wi(a){this.g=a}p(wi,_f),wi.prototype.ra=function(){ze(this.g,"a")},wi.prototype.qa=function(a){ze(this.g,new yf(a))},wi.prototype.pa=function(a){ze(this.g,new If)},wi.prototype.oa=function(){ze(this.g,"b")},Eo.prototype.createWebChannel=Eo.prototype.g,lt.prototype.send=lt.prototype.o,lt.prototype.open=lt.prototype.m,lt.prototype.close=lt.prototype.close,Cg=function(){return new Eo},Sg=function(){return uo()},Rg=$n,Nl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ho.NO_ERROR=0,ho.TIMEOUT=8,ho.HTTP_ERROR=6,Lo=ho,Md.COMPLETE="complete",Ag=Md,Pd.EventType=_s,_s.OPEN="a",_s.CLOSE="b",_s.ERROR="c",_s.MESSAGE="d",Be.prototype.listen=Be.prototype.J,zs=Pd,pe.prototype.listenOnce=pe.prototype.K,pe.prototype.getLastError=pe.prototype.Ha,pe.prototype.getLastErrorCode=pe.prototype.ya,pe.prototype.getStatus=pe.prototype.ca,pe.prototype.getResponseJson=pe.prototype.La,pe.prototype.getResponseText=pe.prototype.la,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Fa,wg=pe}).apply(typeof vo<"u"?vo:typeof self<"u"?self:typeof window<"u"?window:{});const Lf="@firebase/firestore",Vf="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new Br("@firebase/firestore");function Ci(){return ri.logLevel}function V(n,...e){if(ri.logLevel<=Y.DEBUG){const t=e.map(Au);ri.debug(`Firestore (${ss}): ${n}`,...t)}}function Jt(n,...e){if(ri.logLevel<=Y.ERROR){const t=e.map(Au);ri.error(`Firestore (${ss}): ${n}`,...t)}}function Hi(n,...e){if(ri.logLevel<=Y.WARN){const t=e.map(Au);ri.warn(`Firestore (${ss}): ${n}`,...t)}}function Au(n){if(typeof n=="string")return n;try{/**
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
 */function U(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,bg(n,i,t)}function bg(n,e,t){let i=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Jt(i),new Error(i)}function ne(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||bg(e,s,i)}function W(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends At{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t($e.UNAUTHENTICATED)))}shutdown(){}}class _w{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class yw{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Kt,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Kt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ne(typeof i.accessToken=="string",31837,{l:i}),new Pg(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new $e(e)}}class Iw{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ew{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new Iw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t($e.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,de(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const i=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new xf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new xf(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function vw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=vw(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function X(n,e){return n<e?-1:n>e?1:0}function kl(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return Xc(s)===Xc(r)?X(s,r):Xc(s)?1:-1}return X(n.length,e.length)}const ww=55296,Aw=57343;function Xc(n){const e=n.charCodeAt(0);return e>=ww&&e<=Aw}function Gi(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="__name__";class Ct{constructor(e,t,i){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&U(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Ct.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ct?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=Ct.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return X(e.length,t.length)}static compareSegments(e,t){const i=Ct.isNumericId(e),s=Ct.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?Ct.extractNumericId(e).compare(Ct.extractNumericId(t)):kl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tn.fromString(e.substring(4,e.length-2))}}class oe extends Ct{construct(e,t,i){return new oe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new L(b.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new oe(t)}static emptyPath(){return new oe([])}}const Rw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends Ct{construct(e,t,i){return new Ue(e,t,i)}static isValidIdentifier(e){return Rw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ff}static keyField(){return new Ue([Ff])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new L(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new L(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(t)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(oe.fromString(e))}static fromName(e){return new F(oe.fromString(e).popFirst(5))}static empty(){return new F(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(n,e,t){if(!t)throw new L(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Sw(n,e,t,i){if(e===!0&&i===!0)throw new L(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Uf(n){if(!F.isDocumentKey(n))throw new L(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function qf(n){if(F.isDocumentKey(n))throw new L(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function kg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ma(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function rt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ma(n);throw new L(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Cw(n,e){if(e<=0)throw new L(b.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Se(n,e){const t={typeString:n};return e&&(t.value=e),t}function Wr(n,e){if(!kg(n))throw new L(b.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new L(b.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=-62135596800,Wf=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Wf);return new le(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Bf)throw new L(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wf}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wr(e,le._jsonSchema))return new le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Bf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:Se("string",le._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _r=-1;function bw(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=B.fromTimestamp(i===1e9?new le(t+1,0):new le(t,i));return new Pn(s,F.empty(),e)}function Pw(n){return new Pn(n.readTime,n.key,_r)}class Pn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Pn(B.min(),F.empty(),_r)}static max(){return new Pn(B.max(),F.empty(),_r)}}function Nw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
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
 */const kw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==kw)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,i)=>{t(e)}))}static reject(e){return new P(((t,i)=>{i(e)}))}static waitFor(e){return new P(((t,i)=>{let s=0,r=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++r,o&&r===s&&t()}),(l=>i(l)))})),o=!0,r===s&&t()}))}static or(e){let t=P.resolve(!1);for(const i of e)t=t.next((s=>s?P.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new P(((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const u=l;t(e[u]).next((f=>{o[u]=f,++c,c===r&&i(o)}),(f=>s(f)))}}))}static doWhile(e,t){return new P(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function Ow(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function os(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class La{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}La.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=-1;function Va(n){return n==null}function Xo(n){return n===0&&1/n==-1/0}function Mw(n){return typeof n=="number"&&Number.isInteger(n)&&!Xo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="";function Lw(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=$f(e)),e=Vw(n.get(t),e);return $f(e)}function Vw(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case Dg:t+="";break;default:t+=r}}return t}function $f(n){return n+Dg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Un(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Og(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ce=class Dl{constructor(e,t){this.comparator=e,this.root=t||vn.EMPTY}insert(e,t){return new Dl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,vn.BLACK,null,null))}remove(e){return new Dl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wo(this.root,e,this.comparator,!0)}},wo=class{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},vn=class Ft{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Ft.RED,this.left=s??Ft.EMPTY,this.right=r??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Ft(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ft.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}};vn.EMPTY=null,vn.RED=!0,vn.BLACK=!1;vn.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new vn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Hf(this.data.getIterator())}getIteratorFrom(e){return new Hf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Ne)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ne(this.comparator);return t.data=e,t}}class Hf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ut{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new ut([])}unionWith(e){let t=new Ne(Ue.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Gi(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Mg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Mg("Invalid base64 string: "+r):r}})(e);return new qe(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const xw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nn(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=xw.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function kn(n){return typeof n=="string"?qe.fromBase64String(n):qe.fromUint8Array(n)}/**
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
 */const Lg="server_timestamp",Vg="__type__",xg="__previous_value__",Fg="__local_write_time__";function Cu(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Vg])==null?void 0:i.stringValue)===Lg}function xa(n){const e=n.mapValue.fields[xg];return Cu(e)?xa(e):e}function yr(n){const e=Nn(n.mapValue.fields[Fg].timestampValue);return new le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,t,i,s,r,o,c,l,u,f){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const Jo="(default)";class Ir{constructor(e,t){this.projectId=e,this.database=t||Jo}static empty(){return new Ir("","")}get isDefaultDatabase(){return this.database===Jo}isEqual(e){return e instanceof Ir&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ug="__type__",Uw="__max__",Ao={mapValue:{}},qg="__vector__",Zo="value";function Dn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Cu(n)?4:Bw(n)?9007199254740991:qw(n)?10:11:U(28295,{value:n})}function Ot(n,e){if(n===e)return!0;const t=Dn(n);if(t!==Dn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return yr(n).isEqual(yr(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Nn(s.timestampValue),c=Nn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return kn(s.bytesValue).isEqual(kn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return ye(s.geoPointValue.latitude)===ye(r.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return ye(s.integerValue)===ye(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=ye(s.doubleValue),c=ye(r.doubleValue);return o===c?Xo(o)===Xo(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Gi(n.arrayValue.values||[],e.arrayValue.values||[],Ot);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(jf(o)!==jf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Ot(o[l],c[l])))return!1;return!0})(n,e);default:return U(52216,{left:n})}}function Er(n,e){return(n.values||[]).find((t=>Ot(t,e)))!==void 0}function zi(n,e){if(n===e)return 0;const t=Dn(n),i=Dn(e);if(t!==i)return X(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=ye(r.integerValue||r.doubleValue),l=ye(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Gf(n.timestampValue,e.timestampValue);case 4:return Gf(yr(n),yr(e));case 5:return kl(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=kn(r),l=kn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=X(c[u],l[u]);if(f!==0)return f}return X(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=X(ye(r.latitude),ye(o.latitude));return c!==0?c:X(ye(r.longitude),ye(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return zf(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var m,w,C,k;const c=r.fields||{},l=o.fields||{},u=(m=c[Zo])==null?void 0:m.arrayValue,f=(w=l[Zo])==null?void 0:w.arrayValue,p=X(((C=u==null?void 0:u.values)==null?void 0:C.length)||0,((k=f==null?void 0:f.values)==null?void 0:k.length)||0);return p!==0?p:zf(u,f)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===Ao.mapValue&&o===Ao.mapValue)return 0;if(r===Ao.mapValue)return 1;if(o===Ao.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=kl(l[p],f[p]);if(m!==0)return m;const w=zi(c[l[p]],u[f[p]]);if(w!==0)return w}return X(l.length,f.length)})(n.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function Gf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=Nn(n),i=Nn(e),s=X(t.seconds,i.seconds);return s!==0?s:X(t.nanos,i.nanos)}function zf(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=zi(t[s],i[s]);if(r)return r}return X(t.length,i.length)}function Ki(n){return Ol(n)}function Ol(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Nn(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return kn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return F.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Ol(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Ol(t.fields[o])}`;return s+"}"})(n.mapValue):U(61005,{value:n})}function Vo(n){switch(Dn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xa(n);return e?16+Vo(e):16;case 5:return 2*n.stringValue.length;case 6:return kn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Vo(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return Un(i.fields,((r,o)=>{s+=r.length+Vo(o)})),s})(n.mapValue);default:throw U(13486,{value:n})}}function Kf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ml(n){return!!n&&"integerValue"in n}function bu(n){return!!n&&"arrayValue"in n}function Qf(n){return!!n&&"nullValue"in n}function Yf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xo(n){return!!n&&"mapValue"in n}function qw(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ug])==null?void 0:i.stringValue)===qg}function er(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Un(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=er(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=er(n.arrayValue.values[t]);return e}return{...n}}function Bw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Uw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!xo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=er(t)}setAll(e){let t=Ue.emptyPath(),i={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=c.popLast()}o?i[c.lastSegment()]=er(o):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());xo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];xo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Un(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new Ze(er(this.value))}}function Bg(n){const e=[];return Un(n.fields,((t,i)=>{const s=new Ue([t]);if(xo(i)){const r=Bg(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)})),new ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,i,s,r,o,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new je(e,0,B.min(),B.min(),B.min(),Ze.empty(),0)}static newFoundDocument(e,t,i,s){return new je(e,1,t,B.min(),i,s,0)}static newNoDocument(e,t){return new je(e,2,t,B.min(),B.min(),Ze.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,B.min(),B.min(),Ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ea{constructor(e,t){this.position=e,this.inclusive=t}}function Xf(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=F.comparator(F.fromName(o.referenceValue),t.key):i=zi(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Jf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ot(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Tr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ww(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Wg{}class Re extends Wg{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new jw(e,t,i):t==="array-contains"?new zw(e,i):t==="in"?new Kw(e,i):t==="not-in"?new Qw(e,i):t==="array-contains-any"?new Yw(e,i):new Re(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Hw(e,i):new Gw(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zi(t,this.value)):t!==null&&Dn(this.value)===Dn(t)&&this.matchesComparison(zi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wt extends Wg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new wt(e,t)}matches(e){return $g(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function $g(n){return n.op==="and"}function jg(n){return $w(n)&&$g(n)}function $w(n){for(const e of n.filters)if(e instanceof wt)return!1;return!0}function Ll(n){if(n instanceof Re)return n.field.canonicalString()+n.op.toString()+Ki(n.value);if(jg(n))return n.filters.map((e=>Ll(e))).join(",");{const e=n.filters.map((t=>Ll(t))).join(",");return`${n.op}(${e})`}}function Hg(n,e){return n instanceof Re?(function(i,s){return s instanceof Re&&i.op===s.op&&i.field.isEqual(s.field)&&Ot(i.value,s.value)})(n,e):n instanceof wt?(function(i,s){return s instanceof wt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,c)=>r&&Hg(o,s.filters[c])),!0):!1})(n,e):void U(19439)}function Gg(n){return n instanceof Re?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ki(t.value)}`})(n):n instanceof wt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Gg).join(" ,")+"}"})(n):"Filter"}class jw extends Re{constructor(e,t,i){super(e,t,i),this.key=F.fromName(i.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hw extends Re{constructor(e,t){super(e,"in",t),this.keys=zg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Gw extends Re{constructor(e,t){super(e,"not-in",t),this.keys=zg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function zg(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>F.fromName(i.referenceValue)))}class zw extends Re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bu(t)&&Er(t.arrayValue,this.value)}}class Kw extends Re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Er(this.value.arrayValue,t)}}class Qw extends Re{constructor(e,t){super(e,"not-in",t)}matches(e){if(Er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Er(this.value.arrayValue,t)}}class Yw extends Re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Er(this.value.arrayValue,i)))}}/**
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
 */class Xw{constructor(e,t=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function Zf(n,e=null,t=[],i=[],s=null,r=null,o=null){return new Xw(n,e,t,i,s,r,o)}function Pu(n){const e=W(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Ll(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),Va(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Ki(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Ki(i))).join(",")),e.Te=t}return e.Te}function Nu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ww(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Jf(n.startAt,e.startAt)&&Jf(n.endAt,e.endAt)}function Vl(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t=null,i=[],s=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Jw(n,e,t,i,s,r,o,c){return new as(n,e,t,i,s,r,o,c)}function Fa(n){return new as(n)}function ep(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kg(n){return n.collectionGroup!==null}function tr(n){const e=W(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ne(Ue.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Tr(r,i))})),t.has(Ue.keyField().canonicalString())||e.Ie.push(new Tr(Ue.keyField(),i))}return e.Ie}function Pt(n){const e=W(n);return e.Ee||(e.Ee=Zw(e,tr(n))),e.Ee}function Zw(n,e){if(n.limitType==="F")return Zf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new Tr(s.field,r)}));const t=n.endAt?new ea(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new ea(n.startAt.position,n.startAt.inclusive):null;return Zf(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function xl(n,e){const t=n.filters.concat([e]);return new as(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ta(n,e,t){return new as(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ua(n,e){return Nu(Pt(n),Pt(e))&&n.limitType===e.limitType}function Qg(n){return`${Pu(Pt(n))}|lt:${n.limitType}`}function bi(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>Gg(s))).join(", ")}]`),Va(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>Ki(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>Ki(s))).join(",")),`Target(${i})`})(Pt(n))}; limitType=${n.limitType})`}function qa(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):F.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of tr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(o,c,l){const u=Xf(o,c,l);return o.inclusive?u<=0:u<0})(i.startAt,tr(i),s)||i.endAt&&!(function(o,c,l){const u=Xf(o,c,l);return o.inclusive?u>=0:u>0})(i.endAt,tr(i),s))})(n,e)}function eA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yg(n){return(e,t)=>{let i=!1;for(const s of tr(n)){const r=tA(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function tA(n,e,t){const i=n.field.isKeyField()?F.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),u=c.data.field(r);return l!==null&&u!==null?zi(l,u):U(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return U(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Un(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return Og(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=new Ce(F.comparator);function Zt(){return nA}const Xg=new Ce(F.comparator);function Ks(...n){let e=Xg;for(const t of n)e=e.insert(t.key,t);return e}function Jg(n){let e=Xg;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Xn(){return nr()}function Zg(){return nr()}function nr(){return new gi((n=>n.toString()),((n,e)=>n.isEqual(e)))}const iA=new Ce(F.comparator),sA=new Ne(F.comparator);function J(...n){let e=sA;for(const t of n)e=e.add(t);return e}const rA=new Ne(X);function oA(){return rA}/**
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
 */function ku(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xo(e)?"-0":e}}function e_(n){return{integerValue:""+n}}function t_(n,e){return Mw(e)?e_(e):ku(n,e)}/**
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
 */class Ba{constructor(){this._=void 0}}function aA(n,e,t){return n instanceof vr?(function(s,r){const o={fields:{[Vg]:{stringValue:Lg},[Fg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Cu(r)&&(r=xa(r)),r&&(o.fields[xg]=r),{mapValue:o}})(t,e):n instanceof wr?i_(n,e):n instanceof Ar?s_(n,e):(function(s,r){const o=n_(s,r),c=tp(o)+tp(s.Ae);return Ml(o)&&Ml(s.Ae)?e_(c):ku(s.serializer,c)})(n,e)}function cA(n,e,t){return n instanceof wr?i_(n,e):n instanceof Ar?s_(n,e):t}function n_(n,e){return n instanceof Rr?(function(i){return Ml(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class vr extends Ba{}class wr extends Ba{constructor(e){super(),this.elements=e}}function i_(n,e){const t=r_(e);for(const i of n.elements)t.some((s=>Ot(s,i)))||t.push(i);return{arrayValue:{values:t}}}class Ar extends Ba{constructor(e){super(),this.elements=e}}function s_(n,e){let t=r_(e);for(const i of n.elements)t=t.filter((s=>!Ot(s,i)));return{arrayValue:{values:t}}}class Rr extends Ba{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function tp(n){return ye(n.integerValue||n.doubleValue)}function r_(n){return bu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t){this.field=e,this.transform=t}}function lA(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof wr&&s instanceof wr||i instanceof Ar&&s instanceof Ar?Gi(i.elements,s.elements,Ot):i instanceof Rr&&s instanceof Rr?Ot(i.Ae,s.Ae):i instanceof vr&&s instanceof vr})(n.transform,e.transform)}class uA{constructor(e,t){this.version=e,this.transformResults=t}}class pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pt}static exists(e){return new pt(void 0,e)}static updateTime(e){return new pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Wa{}function a_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Du(n.key,pt.none()):new $r(n.key,n.data,pt.none());{const t=n.data,i=Ze.empty();let s=new Ne(Ue.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new qn(n.key,i,new ut(s.toArray()),pt.none())}}function hA(n,e,t){n instanceof $r?(function(s,r,o){const c=s.value.clone(),l=ip(s.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof qn?(function(s,r,o){if(!Fo(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=ip(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(c_(s)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ir(n,e,t,i){return n instanceof $r?(function(r,o,c,l){if(!Fo(r.precondition,o))return c;const u=r.value.clone(),f=sp(r.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,i):n instanceof qn?(function(r,o,c,l){if(!Fo(r.precondition,o))return c;const u=sp(r.fieldTransforms,l,o),f=o.data;return f.setAll(c_(r)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((p=>p.field)))})(n,e,t,i):(function(r,o,c){return Fo(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function dA(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=n_(i.transform,s||null);r!=null&&(t===null&&(t=Ze.empty()),t.set(i.field,r))}return t||null}function np(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Gi(i,s,((r,o)=>lA(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class $r extends Wa{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qn extends Wa{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function c_(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function ip(n,e,t){const i=new Map;ne(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,cA(o,c,t[s]))}return i}function sp(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,aA(r,o,e))}return i}class Du extends Wa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fA extends Wa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&hA(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ir(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ir(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Zg();return this.mutations.forEach((s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(s.key)?null:c;const l=a_(o,c);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),J())}isEqual(e){return this.batchId===e.batchId&&Gi(this.mutations,e.mutations,((t,i)=>np(t,i)))&&Gi(this.baseMutations,e.baseMutations,((t,i)=>np(t,i)))}}class Ou{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){ne(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let s=(function(){return iA})();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Ou(e,t,i,s)}}/**
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
 */class mA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,Z;function _A(n){switch(n){case b.OK:return U(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return U(15467,{code:n})}}function l_(n){if(n===void 0)return Jt("GRPC error has no .code"),b.UNKNOWN;switch(n){case Te.OK:return b.OK;case Te.CANCELLED:return b.CANCELLED;case Te.UNKNOWN:return b.UNKNOWN;case Te.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Te.INTERNAL:return b.INTERNAL;case Te.UNAVAILABLE:return b.UNAVAILABLE;case Te.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Te.NOT_FOUND:return b.NOT_FOUND;case Te.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Te.ABORTED:return b.ABORTED;case Te.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Te.DATA_LOSS:return b.DATA_LOSS;default:return U(39323,{code:n})}}(Z=Te||(Te={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yA(){return new TextEncoder}/**
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
 */const IA=new Tn([4294967295,4294967295],0);function rp(n){const e=yA().encode(n),t=new vg;return t.update(e),new Uint8Array(t.digest())}function op(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Tn([t,i],0),new Tn([s,r],0)]}class Mu{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Qs(`Invalid padding: ${t}`);if(i<0)throw new Qs(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Qs(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Qs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Tn.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(Tn.fromNumber(i)));return s.compare(IA)===1&&(s=new Tn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=rp(e),[i,s]=op(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Mu(r,s,t);return i.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=rp(e),[i,s]=op(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.Se(o)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,jr.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new $a(B.min(),s,new Ce(X),Zt(),J())}}class jr{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new jr(i,t,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t,i,s){this.be=e,this.removedTargetIds=t,this.key=i,this.De=s}}class u_{constructor(e,t){this.targetId=e,this.Ce=t}}class h_{constructor(e,t,i=qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class ap{constructor(){this.ve=0,this.Fe=cp(),this.Me=qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=J(),t=J(),i=J();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:U(38017,{changeType:r})}})),new jr(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=cp()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ne(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class EA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Zt(),this.Je=Ro(),this.He=Ro(),this.Ye=new Ce(X)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:U(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(Vl(r))if(i===0){const o=new F(r.path);this.et(t,o,je.newNoDocument(o,B.min()))}else ne(i===1,20013,{expectedCount:i});else{const o=this._t(t);if(o!==i){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,c;try{o=kn(i).toUint8Array()}catch(l){if(l instanceof Mg)return Hi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Mu(o,s,r)}catch(l){return Hi(l instanceof Qs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&Vl(c.target)){const l=new F(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,je.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.qe())}}));let i=J();this.He.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const s=new $a(e,t,this.Ye,this.je,i);return this.je=Zt(),this.Je=Ro(),this.He=Ro(),this.Ye=new Ce(X),s}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new ap,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ne(X),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ne(X),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ap),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ro(){return new Ce(F.comparator)}function cp(){return new Ce(F.comparator)}const TA={asc:"ASCENDING",desc:"DESCENDING"},vA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wA={and:"AND",or:"OR"};class AA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Fl(n,e){return n.useProto3Json||Va(e)?e:{value:e}}function na(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function d_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function RA(n,e){return na(n,e.toTimestamp())}function Nt(n){return ne(!!n,49232),B.fromTimestamp((function(t){const i=Nn(t);return new le(i.seconds,i.nanos)})(n))}function Lu(n,e){return Ul(n,e).canonicalString()}function Ul(n,e){const t=(function(s){return new oe(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function f_(n){const e=oe.fromString(n);return ne(y_(e),10190,{key:e.toString()}),e}function ql(n,e){return Lu(n.databaseId,e.path)}function Jc(n,e){const t=f_(e);if(t.get(1)!==n.databaseId.projectId)throw new L(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(m_(t))}function p_(n,e){return Lu(n.databaseId,e)}function SA(n){const e=f_(n);return e.length===4?oe.emptyPath():m_(e)}function Bl(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function m_(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function lp(n,e,t){return{name:ql(n,e),fields:t.value.mapValue.fields}}function CA(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(u,f){return u.useProto3Json?(ne(f===void 0||typeof f=="string",58123),qe.fromBase64String(f||"")):(ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),qe.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?b.UNKNOWN:l_(u.code);return new L(f,u.message||"")})(o);t=new h_(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Jc(n,i.document.name),r=Nt(i.document.updateTime),o=i.document.createTime?Nt(i.document.createTime):B.min(),c=new Ze({mapValue:{fields:i.document.fields}}),l=je.newFoundDocument(s,r,o,c),u=i.targetIds||[],f=i.removedTargetIds||[];t=new Uo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Jc(n,i.document),r=i.readTime?Nt(i.readTime):B.min(),o=je.newNoDocument(s,r),c=i.removedTargetIds||[];t=new Uo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Jc(n,i.document),r=i.removedTargetIds||[];t=new Uo([],r,s,null)}else{if(!("filter"in e))return U(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new gA(s,r),c=i.targetId;t=new u_(c,o)}}return t}function bA(n,e){let t;if(e instanceof $r)t={update:lp(n,e.key,e.value)};else if(e instanceof Du)t={delete:ql(n,e.key)};else if(e instanceof qn)t={update:lp(n,e.key,e.data),updateMask:xA(e.fieldMask)};else{if(!(e instanceof fA))return U(16599,{Vt:e.type});t={verify:ql(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(r,o){const c=o.transform;if(c instanceof vr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof wr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ar)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Rr)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw U(20930,{transform:o.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(s,r){return r.updateTime!==void 0?{updateTime:RA(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:U(27497)})(n,e.precondition)),t}function PA(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map((t=>(function(s,r){let o=s.updateTime?Nt(s.updateTime):Nt(r);return o.isEqual(B.min())&&(o=Nt(r)),new uA(o,s.transformResults||[])})(t,e)))):[]}function NA(n,e){return{documents:[p_(n,e.path)]}}function kA(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=p_(n,s);const r=(function(u){if(u.length!==0)return __(wt.create(u,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Pi(m.field),direction:MA(m.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Fl(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:s}}function DA(n){let e=SA(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){ne(i===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let r=[];t.where&&(r=(function(p){const m=g_(p);return m instanceof wt&&jg(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((m=>(function(C){return new Tr(Ni(C.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,Va(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(p){const m=!!p.before,w=p.values||[];return new ea(w,m)})(t.startAt));let u=null;return t.endAt&&(u=(function(p){const m=!p.before,w=p.values||[];return new ea(w,m)})(t.endAt)),Jw(e,s,o,r,c,"F",l,u)}function OA(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function g_(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Ni(t.unaryFilter.field);return Re.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Ni(t.unaryFilter.field);return Re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ni(t.unaryFilter.field);return Re.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ni(t.unaryFilter.field);return Re.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Re.create(Ni(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return wt.create(t.compositeFilter.filters.map((i=>g_(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U(1026)}})(t.compositeFilter.op))})(n):U(30097,{filter:n})}function MA(n){return TA[n]}function LA(n){return vA[n]}function VA(n){return wA[n]}function Pi(n){return{fieldPath:n.canonicalString()}}function Ni(n){return Ue.fromServerFormat(n.fieldPath)}function __(n){return n instanceof Re?(function(t){if(t.op==="=="){if(Yf(t.value))return{unaryFilter:{field:Pi(t.field),op:"IS_NAN"}};if(Qf(t.value))return{unaryFilter:{field:Pi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Yf(t.value))return{unaryFilter:{field:Pi(t.field),op:"IS_NOT_NAN"}};if(Qf(t.value))return{unaryFilter:{field:Pi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pi(t.field),op:LA(t.op),value:t.value}}})(n):n instanceof wt?(function(t){const i=t.getFilters().map((s=>__(s)));return i.length===1?i[0]:{compositeFilter:{op:VA(t.op),filters:i}}})(n):U(54877,{filter:n})}function xA(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function y_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,i,s,r=B.min(),o=B.min(),c=qe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.yt=e}}function UA(n){const e=DA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ta(e,e.limit,"L"):e}/**
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
 */class qA{constructor(){this.Cn=new BA}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Pn.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Pn.min())}updateCollectionGroup(e,t,i){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class BA{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Ne(oe.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ne(oe.comparator)).toArray()}}/**
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
 */const up={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},I_=41943040;class Je{static withCacheSize(e){return new Je(e,Je.DEFAULT_COLLECTION_PERCENTILE,Je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je.DEFAULT_COLLECTION_PERCENTILE=10,Je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Je.DEFAULT=new Je(I_,Je.DEFAULT_COLLECTION_PERCENTILE,Je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Je.DISABLED=new Je(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Qi(0)}static cr(){return new Qi(-1)}}/**
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
 */const hp="LruGarbageCollector",WA=1048576;function dp([n,e],[t,i]){const s=X(n,t);return s===0?X(e,i):s}class $A{constructor(e){this.Ir=e,this.buffer=new Ne(dp),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();dp(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class jA{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){V(hp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){os(t)?V(hp,"Ignoring IndexedDB error during garbage collection: ",t):await rs(t)}await this.Vr(3e5)}))}}class HA{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(La.ce);const i=new $A(t);return this.mr.forEachTarget(e,(s=>i.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>i.Ar(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(up)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),up):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,s,r,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(i=p,c=Date.now(),this.removeTargets(e,i,t)))).next((p=>(r=p,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((p=>(u=Date.now(),Ci()<=Y.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:p}))))}}function GA(n,e){return new HA(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.changes=new gi((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?P.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class KA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&ir(i.mutation,s,ut.empty(),le.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,J()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=J()){const s=Xn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let o=Ks();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const i=Xn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,J())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,i,s){let r=Zt();const o=nr(),c=(function(){return nr()})();return t.forEach(((l,u)=>{const f=i.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof qn)?r=r.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),ir(f.mutation,u,f.mutation.getFieldMask(),le.now())):o.set(u.key,ut.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((u,f)=>o.set(u,f))),t.forEach(((u,f)=>c.set(u,new KA(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=nr();let s=new Ce(((o,c)=>o-c)),r=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let f=i.get(l)||ut.empty();f=c.applyToLocalView(u,f),i.set(l,f);const p=(s.get(c.batchId)||J()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=Zg();f.forEach((m=>{if(!r.has(m)){const w=a_(t.get(m),i.get(m));w!==null&&p.set(m,w),r=r.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return P.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return(function(o){return F.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Kg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):P.resolve(Xn());let c=_r,l=r;return o.next((u=>P.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),r.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,r))).next((()=>this.computeViews(e,l,u,J()))).next((f=>({batchId:c,changes:Jg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next((i=>{let s=Ks();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=Ks();return this.indexManager.getCollectionParents(e,r).next((c=>P.forEach(c,(l=>{const u=(function(p,m){return new as(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,i,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((o=>{r.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,je.newInvalidDocument(f)))}));let c=Ks();return o.forEach(((l,u)=>{const f=r.get(l);f!==void 0&&ir(f.mutation,u,ut.empty(),le.now()),qa(t,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class YA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return P.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Nt(s.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:UA(s.bundledQuery),readTime:Nt(s.readTime)}})(t)),P.resolve()}}/**
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
 */class XA{constructor(){this.overlays=new Ce(F.comparator),this.qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Xn();return P.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.St(e,t,r)})),P.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.qr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.qr.delete(i)),P.resolve()}getOverlaysForCollection(e,t,i){const s=Xn(),r=t.length+1,o=new F(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new Ce(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>i){let f=r.get(u.largestBatchId);f===null&&(f=Xn(),r=r.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Xn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return P.resolve(c)}St(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(i.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new mA(t,i));let r=this.qr.get(t);r===void 0&&(r=J(),this.qr.set(t,r)),this.qr.set(t,r.add(i.key))}}/**
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
 */class JA{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.Qr=new Ne(Oe.$r),this.Ur=new Ne(Oe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new Oe(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new Oe(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new F(new oe([])),i=new Oe(t,e),s=new Oe(t,e+1),r=[];return this.Ur.forEachInRange([i,s],(o=>{this.Gr(o),r.push(o.key)})),r}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new F(new oe([])),i=new Oe(t,e),s=new Oe(t,e+1);let r=J();return this.Ur.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new Oe(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Oe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return F.comparator(e.key,t.key)||X(e.Yr,t.Yr)}static Kr(e,t){return X(e.Yr,t.Yr)||F.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ne(Oe.$r)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pA(r,t,i,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new Oe(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.ei(i),r=s<0?0:s;return P.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Su:this.tr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Oe(t,0),s=new Oe(t,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([i,s],(o=>{const c=this.Xr(o.Yr);r.push(c)})),P.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ne(X);return t.forEach((s=>{const r=new Oe(s,0),o=new Oe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([r,o],(c=>{i=i.add(c.Yr)}))})),P.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;F.isDocumentKey(r)||(r=r.child(""));const o=new Oe(new F(r),0);let c=new Ne(X);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),P.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((i=>{const s=this.Xr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){ne(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return P.forEach(t.mutations,(s=>{const r=new Oe(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new Oe(t,0),s=this.Zr.firstAfterOrEqual(i);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.ri=e,this.docs=(function(){return new Ce(F.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return P.resolve(i?i.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let i=Zt();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():je.newInvalidDocument(s))})),P.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=Zt();const o=t.path,c=new F(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Nw(Pw(f),i)<=0||(s.has(f.key)||qa(t,f))&&(r=r.insert(f.key,f.mutableCopy()))}return P.resolve(r)}getAllFromCollectionGroup(e,t,i,s){U(9500)}ii(e,t){return P.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new tR(this)}getSize(e){return P.resolve(this.size)}}class tR extends zA{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(i)})),P.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.persistence=e,this.si=new gi((t=>Pu(t)),Nu),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.oi=0,this._i=new Vu,this.targetCount=0,this.ai=Qi.ur()}forEachTarget(e,t){return this.si.forEach(((i,s)=>t(s))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),P.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Qi(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Pr(t),P.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.si.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),P.waitFor(r).next((()=>s))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return P.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),P.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((o=>{r.push(s.markPotentiallyOrphaned(e,o))})),P.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return P.resolve(i)}containsKey(e,t){return P.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t){this.ui={},this.overlays={},this.ci=new La(0),this.li=!1,this.li=!0,this.hi=new JA,this.referenceDelegate=e(this),this.Pi=new nR(this),this.indexManager=new qA,this.remoteDocumentCache=(function(s){return new eR(s)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new FA(t),this.Ii=new YA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new XA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new ZA(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){V("MemoryPersistence","Starting transaction:",e);const s=new iR(this.ci.next());return this.referenceDelegate.Ei(),i(s).next((r=>this.referenceDelegate.di(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ai(e,t){return P.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class iR extends Dw{constructor(e){super(),this.currentSequenceNumber=e}}class xu{constructor(e){this.persistence=e,this.Ri=new Vu,this.Vi=null}static mi(e){return new xu(e)}get fi(){if(this.Vi)return this.Vi;throw U(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),P.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.fi.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,(i=>{const s=F.fromPath(i);return this.gi(e,s).next((r=>{r||t.removeEntry(s,B.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ia{constructor(e,t){this.persistence=e,this.pi=new gi((i=>Lw(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=GA(this,t)}static mi(e,t){return new ia(e,t)}Ei(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return P.forEach(this.pi,((i,s)=>this.br(e,i,s).next((r=>r?P.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,t).next((c=>{c||(i++,r.removeEntry(o,B.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),P.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vo(e.data.value)),t}br(e,t,i){return P.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return P.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Es=i,this.ds=s}static As(e,t){let i=J(),s=J();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Fu(e,t.fromCache,i,s)}}/**
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
 */class sR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return GT()?8:Ow(He())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.ys(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ws(e,t,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new sR;return this.Ss(e,t,o).next((c=>{if(r.result=c,this.Vs)return this.bs(e,t,o,c.size)}))})).next((()=>r.result))}bs(e,t,i,s){return i.documentReadCount<this.fs?(Ci()<=Y.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",bi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(Ci()<=Y.DEBUG&&V("QueryEngine","Query:",bi(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.gs*s?(Ci()<=Y.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",bi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pt(t))):P.resolve())}ys(e,t){if(ep(t))return P.resolve(null);let i=Pt(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=ta(t,null,"F"),i=Pt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const o=J(...r);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const u=this.Ds(t,c);return this.Cs(t,u,o,l.readTime)?this.ys(e,ta(t,null,"F")):this.vs(e,u,t,l)}))))})))))}ws(e,t,i,s){return ep(t)||s.isEqual(B.min())?P.resolve(null):this.ps.getDocuments(e,i).next((r=>{const o=this.Ds(t,r);return this.Cs(t,o,i,s)?P.resolve(null):(Ci()<=Y.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bi(t)),this.vs(e,o,t,bw(s,_r)).next((c=>c)))}))}Ds(e,t){let i=new Ne(Yg(e));return t.forEach(((s,r)=>{qa(e,r)&&(i=i.add(r))})),i}Cs(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ss(e,t,i){return Ci()<=Y.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",bi(t)),this.ps.getDocumentsMatchingQuery(e,t,Pn.min(),i)}vs(e,t,i,s){return this.ps.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const Uu="LocalStore",oR=3e8;class aR{constructor(e,t,i,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Ce(X),this.xs=new gi((r=>Pu(r)),Nu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function cR(n,e,t,i){return new aR(n,e,t,i)}async function T_(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],c=[];let l=J();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of r){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(i,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function lR(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const s=e.batch.keys(),r=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let w=P.resolve();return m.forEach((C=>{w=w.next((()=>f.getEntry(l,C))).next((k=>{const N=u.docVersions.get(C);ne(N!==null,48541),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))}))})),w.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,i,e,r).next((()=>r.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(c){let l=J();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(i,s)))}))}function v_(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function uR(n,e){const t=W(n),i=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(t.Pi.removeMatchingKeys(r,f.removedDocuments,p).next((()=>t.Pi.addMatchingKeys(r,f.addedDocuments,p))));let w=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(qe.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,i)),s=s.insert(p,w),(function(k,N,$){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=oR?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(m,w,f)&&c.push(t.Pi.updateTargetData(r,w))}));let l=Zt(),u=J();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,f))})),c.push(hR(r,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!i.isEqual(B.min())){const f=t.Pi.getLastRemoteSnapshotVersion(r).next((p=>t.Pi.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(f)}return P.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,u))).next((()=>l))})).then((r=>(t.Ms=s,r)))}function hR(n,e,t){let i=J(),s=J();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let o=Zt();return t.forEach(((c,l)=>{const u=r.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V(Uu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function dR(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Su),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function fR(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.Pi.getTargetData(i,e).next((r=>r?(s=r,P.resolve(s)):t.Pi.allocateTargetId(i).next((o=>(s=new yn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.Ms.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function Wl(n,e,t){const i=W(n),s=i.Ms.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!os(o))throw o;V(Uu,`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ms=i.Ms.remove(e),i.xs.delete(s.target)}function fp(n,e,t){const i=W(n);let s=B.min(),r=J();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=W(l),m=p.xs.get(f);return m!==void 0?P.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(i,o,Pt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>i.Fs.getDocumentsMatchingQuery(o,e,t?s:B.min(),t?r:J()))).next((c=>(pR(i,eA(e),c),{documents:c,Qs:r})))))}function pR(n,e,t){let i=n.Os.get(e)||B.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Os.set(e,i)}class pp{constructor(){this.activeTargetIds=oA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mR{constructor(){this.Mo=new pp,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new pp,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gR{Oo(e){}shutdown(){}}/**
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
 */const mp="ConnectivityMonitor";class gp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(mp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){V(mp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let So=null;function $l(){return So===null?So=(function(){return 268435456+Math.round(2147483648*Math.random())})():So++,"0x"+So.toString(16)}/**
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
 */const Zc="RestConnection",_R={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${s}`,this.Wo=this.databaseId.database===Jo?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Go(e,t,i,s,r){const o=$l(),c=this.zo(e,t.toUriEncodedString());V(Zc,`Sending RPC '${e}' ${o}:`,c,i);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,r);const{host:u}=new URL(c),f=Fn(u);return this.Jo(e,c,l,i,f).then((p=>(V(Zc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Hi(Zc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",i),p}))}Ho(e,t,i,s,r,o){return this.Go(e,t,i,s,r)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ss})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}zo(e,t){const i=_R[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection";class ER extends yR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,s,r){const o=$l();return new Promise(((c,l)=>{const u=new wg;u.setWithCredentials(!0),u.listenOnce(Ag.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Lo.NO_ERROR:const p=u.getResponseJson();V(We,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Lo.TIMEOUT:V(We,`RPC '${e}' ${o} timed out`),l(new L(b.DEADLINE_EXCEEDED,"Request time out"));break;case Lo.HTTP_ERROR:const m=u.getStatus();if(V(We,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const C=w==null?void 0:w.error;if(C&&C.status&&C.message){const k=(function($){const H=$.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(H)>=0?H:b.UNKNOWN})(C.status);l(new L(k,C.message))}else l(new L(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new L(b.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{V(We,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);V(We,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",f,i,15)}))}T_(e,t,i){const s=$l(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Cg(),c=Sg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,i),l.encodeInitMessageHeaders=!0;const f=r.join("");V(We,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,w=!1;const C=new IR({Yo:N=>{w?V(We,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(V(We,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),V(We,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},Zo:()=>p.close()}),k=(N,$,H)=>{N.listen($,(ee=>{try{H(ee)}catch(Ee){setTimeout((()=>{throw Ee}),0)}}))};return k(p,zs.EventType.OPEN,(()=>{w||(V(We,`RPC '${e}' stream ${s} transport opened.`),C.o_())})),k(p,zs.EventType.CLOSE,(()=>{w||(w=!0,V(We,`RPC '${e}' stream ${s} transport closed`),C.a_(),this.E_(p))})),k(p,zs.EventType.ERROR,(N=>{w||(w=!0,Hi(We,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),C.a_(new L(b.UNAVAILABLE,"The operation could not be completed")))})),k(p,zs.EventType.MESSAGE,(N=>{var $;if(!w){const H=N.data[0];ne(!!H,16349);const ee=H,Ee=(ee==null?void 0:ee.error)||(($=ee[0])==null?void 0:$.error);if(Ee){V(We,`RPC '${e}' stream ${s} received error:`,Ee);const ct=Ee.status;let be=(function(I){const v=Te[I];if(v!==void 0)return l_(v)})(ct),T=Ee.message;be===void 0&&(be=b.INTERNAL,T="Unknown error status: "+ct+" with message "+Ee.message),w=!0,C.a_(new L(be,T)),p.close()}else V(We,`RPC '${e}' stream ${s} received:`,H),C.u_(H)}})),k(c,Rg.STAT_EVENT,(N=>{N.stat===Nl.PROXY?V(We,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Nl.NOPROXY&&V(We,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function el(){return typeof document<"u"?document:null}/**
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
 */function ja(n){return new AA(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=s,this.R_=r,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="PersistentStream";class A_{constructor(e,t,i,s,r,o,c,l){this.Mi=e,this.S_=i,this.b_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new w_(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(Jt(t.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new L(b.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return V(_p,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(V(_p,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class TR extends A_{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=CA(this.serializer,e),i=(function(r){if(!("targetChange"in r))return B.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?Nt(o.readTime):B.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=Bl(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=Vl(l)?{documents:NA(r,l)}:{query:kA(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=d_(r,o.resumeToken);const u=Fl(r,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(B.min())>0){c.readTime=na(r,o.snapshotVersion.toTimestamp());const u=Fl(r,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const i=OA(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=Bl(this.serializer),t.removeTarget=e,this.q_(t)}}class vR extends A_{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=PA(e.writeResults,e.commitTime),i=Nt(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Bl(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>bA(this.serializer,i)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{}class AR extends wR{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new L(b.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Go(e,Ul(t,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(b.UNKNOWN,r.toString())}))}Ho(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,Ul(t,i),s,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(b.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class RR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Jt(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="RemoteStore";class SR{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo((o=>{i.enqueueAndForget((async()=>{_i(this)&&(V(oi,"Restarting streams for network reachability change."),await(async function(l){const u=W(l);u.Ea.add(4),await Hr(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Ha(u)})(this))}))})),this.Ra=new RR(i,s)}}async function Ha(n){if(_i(n))for(const e of n.da)await e(!0)}async function Hr(n){for(const e of n.da)await e(!1)}function R_(n,e){const t=W(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),$u(t)?Wu(t):cs(t).O_()&&Bu(t,e))}function qu(n,e){const t=W(n),i=cs(t);t.Ia.delete(e),i.O_()&&S_(t,e),t.Ia.size===0&&(i.O_()?i.L_():_i(t)&&t.Ra.set("Unknown"))}function Bu(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}cs(n).Y_(e)}function S_(n,e){n.Va.Ue(e),cs(n).Z_(e)}function Wu(n){n.Va=new EA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),cs(n).start(),n.Ra.ua()}function $u(n){return _i(n)&&!cs(n).x_()&&n.Ia.size>0}function _i(n){return W(n).Ea.size===0}function C_(n){n.Va=void 0}async function CR(n){n.Ra.set("Online")}async function bR(n){n.Ia.forEach(((e,t)=>{Bu(n,e)}))}async function PR(n,e){C_(n),$u(n)?(n.Ra.ha(e),Wu(n)):n.Ra.set("Unknown")}async function NR(n,e,t){if(n.Ra.set("Online"),e instanceof h_&&e.state===2&&e.cause)try{await(async function(s,r){const o=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(n,e)}catch(i){V(oi,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await sa(n,i)}else if(e instanceof Uo?n.Va.Ze(e):e instanceof u_?n.Va.st(e):n.Va.tt(e),!t.isEqual(B.min()))try{const i=await v_(n.localStore);t.compareTo(i)>=0&&await(function(r,o){const c=r.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=r.Ia.get(u);f&&r.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=r.Ia.get(l);if(!f)return;r.Ia.set(l,f.withResumeToken(qe.EMPTY_BYTE_STRING,f.snapshotVersion)),S_(r,l);const p=new yn(f.target,l,u,f.sequenceNumber);Bu(r,p)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){V(oi,"Failed to raise snapshot:",i),await sa(n,i)}}async function sa(n,e,t){if(!os(e))throw e;n.Ea.add(1),await Hr(n),n.Ra.set("Offline"),t||(t=()=>v_(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(oi,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ha(n)}))}function b_(n,e){return e().catch((t=>sa(n,t,e)))}async function Ga(n){const e=W(n),t=On(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Su;for(;kR(e);)try{const s=await dR(e.localStore,i);if(s===null){e.Ta.length===0&&t.L_();break}i=s.batchId,DR(e,s)}catch(s){await sa(e,s)}P_(e)&&N_(e)}function kR(n){return _i(n)&&n.Ta.length<10}function DR(n,e){n.Ta.push(e);const t=On(n);t.O_()&&t.X_&&t.ea(e.mutations)}function P_(n){return _i(n)&&!On(n).x_()&&n.Ta.length>0}function N_(n){On(n).start()}async function OR(n){On(n).ra()}async function MR(n){const e=On(n);for(const t of n.Ta)e.ea(t.mutations)}async function LR(n,e,t){const i=n.Ta.shift(),s=Ou.from(i,e,t);await b_(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Ga(n)}async function VR(n,e){e&&On(n).X_&&await(async function(i,s){if((function(o){return _A(o)&&o!==b.ABORTED})(s.code)){const r=i.Ta.shift();On(i).B_(),await b_(i,(()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s))),await Ga(i)}})(n,e),P_(n)&&N_(n)}async function yp(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),V(oi,"RemoteStore received new credentials");const i=_i(t);t.Ea.add(3),await Hr(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ha(t)}async function xR(n,e){const t=W(n);e?(t.Ea.delete(2),await Ha(t)):e||(t.Ea.add(2),await Hr(t),t.Ra.set("Unknown"))}function cs(n){return n.ma||(n.ma=(function(t,i,s){const r=W(t);return r.sa(),new TR(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Xo:CR.bind(null,n),t_:bR.bind(null,n),r_:PR.bind(null,n),H_:NR.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),$u(n)?Wu(n):n.Ra.set("Unknown")):(await n.ma.stop(),C_(n))}))),n.ma}function On(n){return n.fa||(n.fa=(function(t,i,s){const r=W(t);return r.sa(),new vR(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:OR.bind(null,n),r_:VR.bind(null,n),ta:MR.bind(null,n),na:LR.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Ga(n)):(await n.fa.stop(),n.Ta.length>0&&(V(oi,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,c=new ju(e,t,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hu(n,e){if(Jt("AsyncQueue",`${e}: ${n}`),os(n))return new L(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{static emptySet(e){return new Mi(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||F.comparator(t.key,i.key):(t,i)=>F.comparator(t.key,i.key),this.keyedMap=Ks(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Mi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.ga=new Ce(F.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Yi{constructor(e,t,i,s,r,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Yi(e,t,Mi.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ua(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class UR{constructor(){this.queries=Ep(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=W(t),r=s.queries;s.queries=Ep(),r.forEach(((o,c)=>{for(const l of c.Sa)l.onError(i)}))})(this,new L(b.ABORTED,"Firestore shutting down"))}}function Ep(){return new gi((n=>Qg(n)),Ua)}async function Gu(n,e){const t=W(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.ba()&&e.Da()&&(i=2):(r=new FR,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Hu(o,`Initialization of query '${bi(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.Sa.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Ku(t)}async function zu(n,e){const t=W(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.Sa.indexOf(e);o>=0&&(r.Sa.splice(o,1),r.Sa.length===0?s=e.Da()?0:1:!r.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function qR(n,e){const t=W(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const c of o.Sa)c.Fa(s)&&(i=!0);o.wa=s}}i&&Ku(t)}function BR(n,e,t){const i=W(n),s=i.queries.get(e);if(s)for(const r of s.Sa)r.onError(t);i.queries.delete(e)}function Ku(n){n.Ca.forEach((e=>{e.next()}))}var jl,Tp;(Tp=jl||(jl={})).Ma="default",Tp.Cache="cache";class Qu{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Yi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==jl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.key=e}}class D_{constructor(e){this.key=e}}class WR{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=J(),this.mutatedKeys=J(),this.eu=Yg(e),this.tu=new Mi(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new Ip,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),w=qa(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let N=!1;m&&w?m.data.isEqual(w.data)?C!==k&&(i.track({type:3,doc:w}),N=!0):this.su(m,w)||(i.track({type:2,doc:w}),N=!0,(l&&this.eu(w,l)>0||u&&this.eu(w,u)<0)&&(c=!0)):!m&&w?(i.track({type:0,doc:w}),N=!0):m&&!w&&(i.track({type:1,doc:m}),N=!0,(l||u)&&(c=!0)),N&&(w?(o=o.add(w),r=k?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),i.track({type:1,doc:f})}return{tu:o,iu:i,Cs:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(w,C){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Rt:N})}};return k(w)-k(C)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Yi(this.query,e.tu,r,o,e.mutatedKeys,l===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ip,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=J(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new D_(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new k_(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=J();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Yi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Yu="SyncEngine";class $R{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class jR{constructor(e){this.key=e,this.hu=!1}}class HR{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new gi((c=>Qg(c)),Ua),this.Iu=new Map,this.Eu=new Set,this.du=new Ce(F.comparator),this.Au=new Map,this.Ru=new Vu,this.Vu={},this.mu=new Map,this.fu=Qi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function GR(n,e,t=!0){const i=F_(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await O_(i,e,t,!0),s}async function zR(n,e){const t=F_(n);await O_(t,e,!0,!1)}async function O_(n,e,t,i){const s=await fR(n.localStore,Pt(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await KR(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&R_(n.remoteStore,s),c}async function KR(n,e,t,i,s){n.pu=(p,m,w)=>(async function(k,N,$,H){let ee=N.view.ru($);ee.Cs&&(ee=await fp(k.localStore,N.query,!1).then((({documents:T})=>N.view.ru(T,ee))));const Ee=H&&H.targetChanges.get(N.targetId),ct=H&&H.targetMismatches.get(N.targetId)!=null,be=N.view.applyChanges(ee,k.isPrimaryClient,Ee,ct);return wp(k,N.targetId,be.au),be.snapshot})(n,p,m,w);const r=await fp(n.localStore,e,!0),o=new WR(e,r.Qs),c=o.ru(r.documents),l=jr.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);wp(n,t,u.au);const f=new $R(e,t,o);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),u.snapshot}async function QR(n,e,t){const i=W(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!Ua(o,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Wl(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&qu(i.remoteStore,s.targetId),Hl(i,s.targetId)})).catch(rs)):(Hl(i,s.targetId),await Wl(i.localStore,s.targetId,!0))}async function YR(n,e){const t=W(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),qu(t.remoteStore,i.targetId))}async function XR(n,e,t){const i=sS(n);try{const s=await(function(o,c){const l=W(o),u=le.now(),f=c.reduce(((w,C)=>w.add(C.key)),J());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let C=Zt(),k=J();return l.Ns.getEntries(w,f).next((N=>{C=N,C.forEach((($,H)=>{H.isValidDocument()||(k=k.add($))}))})).next((()=>l.localDocuments.getOverlayedDocuments(w,C))).next((N=>{p=N;const $=[];for(const H of c){const ee=dA(H,p.get(H.key).overlayedDocument);ee!=null&&$.push(new qn(H.key,ee,Bg(ee.value.mapValue),pt.exists(!0)))}return l.mutationQueue.addMutationBatch(w,u,$,c)})).next((N=>{m=N;const $=N.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(w,N.batchId,$)}))})).then((()=>({batchId:m.batchId,changes:Jg(p)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Ce(X)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(i,s.batchId,t),await Gr(i,s.changes),await Ga(i.remoteStore)}catch(s){const r=Hu(s,"Failed to persist write");t.reject(r)}}async function M_(n,e){const t=W(n);try{const i=await uR(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const o=t.Au.get(r);o&&(ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ne(o.hu,14607):s.removedDocuments.size>0&&(ne(o.hu,42227),o.hu=!1))})),await Gr(t,i,e)}catch(i){await rs(i)}}function vp(n,e,t){const i=W(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=W(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&Ku(l)})(i.eventManager,e),s.length&&i.Pu.H_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function JR(n,e,t){const i=W(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let o=new Ce(F.comparator);o=o.insert(r,je.newNoDocument(r,B.min()));const c=J().add(r),l=new $a(B.min(),new Map,new Ce(X),o,c);await M_(i,l),i.du=i.du.remove(r),i.Au.delete(e),Xu(i)}else await Wl(i.localStore,e,!1).then((()=>Hl(i,e,t))).catch(rs)}async function ZR(n,e){const t=W(n),i=e.batch.batchId;try{const s=await lR(t.localStore,e);V_(t,i,null),L_(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Gr(t,s)}catch(s){await rs(s)}}async function eS(n,e,t){const i=W(n);try{const s=await(function(o,c){const l=W(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(ne(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(i.localStore,e);V_(i,e,t),L_(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Gr(i,s)}catch(s){await rs(s)}}function L_(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function V_(n,e,t){const i=W(n);let s=i.Vu[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.Vu[i.currentUser.toKey()]=s}}function Hl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((i=>{n.Ru.containsKey(i)||x_(n,i)}))}function x_(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(qu(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Xu(n))}function wp(n,e,t){for(const i of t)i instanceof k_?(n.Ru.addReference(i.key,e),tS(n,i)):i instanceof D_?(V(Yu,"Document no longer in limbo: "+i.key),n.Ru.removeReference(i.key,e),n.Ru.containsKey(i.key)||x_(n,i.key)):U(19791,{wu:i})}function tS(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Eu.has(i)||(V(Yu,"New document in limbo: "+t),n.Eu.add(i),Xu(n))}function Xu(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new F(oe.fromString(e)),i=n.fu.next();n.Au.set(i,new jR(t)),n.du=n.du.insert(t,i),R_(n.remoteStore,new yn(Pt(Fa(t.path)),i,"TargetPurposeLimboResolution",La.ce))}}async function Gr(n,e,t){const i=W(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{o.push(i.pu(l,e,t).then((u=>{var f;if((u||t)&&i.isPrimaryClient){const p=u?!u.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;i.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Fu.As(l.targetId,u);r.push(p)}})))})),await Promise.all(o),i.Pu.H_(s),await(async function(l,u){const f=W(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>P.forEach(u,(m=>P.forEach(m.Es,(w=>f.persistence.referenceDelegate.addReference(p,m.targetId,w))).next((()=>P.forEach(m.ds,(w=>f.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))))))}catch(p){if(!os(p))throw p;V(Uu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const w=f.Ms.get(m),C=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(m,k)}}})(i.localStore,r))}async function nS(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){V(Yu,"User change. New user:",e.toKey());const i=await T_(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new L(b.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Gr(t,i.Ls)}}function iS(n,e){const t=W(n),i=t.Au.get(e);if(i&&i.hu)return J().add(i.key);{let s=J();const r=t.Iu.get(e);if(!r)return s;for(const o of r){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function F_(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=M_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JR.bind(null,e),e.Pu.H_=qR.bind(null,e.eventManager),e.Pu.yu=BR.bind(null,e.eventManager),e}function sS(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eS.bind(null,e),e}class ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ja(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return cR(this.persistence,new rR,e.initialUser,this.serializer)}Cu(e){return new E_(xu.mi,this.serializer)}Du(e){return new mR}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ra.provider={build:()=>new ra};class rS extends ra{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ne(this.persistence.referenceDelegate instanceof ia,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new jA(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Je.withCacheSize(this.cacheSizeBytes):Je.DEFAULT;return new E_((i=>ia.mi(i,t)),this.serializer)}}class Gl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>vp(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=nS.bind(null,this.syncEngine),await xR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new UR})()}createDatastore(e){const t=ja(e.databaseInfo.databaseId),i=(function(r){return new ER(r)})(e.databaseInfo);return(function(r,o,c,l){return new AR(r,o,c,l)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,o,c){return new SR(i,s,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>vp(this.syncEngine,t,0)),(function(){return gp.v()?new gp:new gR})())}createSyncEngine(e,t){return(function(s,r,o,c,l,u,f){const p=new HR(s,r,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=W(s);V(oi,"RemoteStore shutting down."),r.Ea.add(5),await Hr(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Gl.provider={build:()=>new Gl};/**
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
 */class Ju{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Jt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="FirestoreClient";class oS{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=$e.UNAUTHENTICATED,this.clientId=Ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{V(Mn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(V(Mn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Hu(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function tl(n,e){n.asyncQueue.verifyOperationInProgress(),V(Mn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await T_(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Ap(n,e){n.asyncQueue.verifyOperationInProgress();const t=await aS(n);V(Mn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>yp(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>yp(e.remoteStore,s))),n._onlineComponents=e}async function aS(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Mn,"Using user provided OfflineComponentProvider");try{await tl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Hi("Error using user provided cache. Falling back to memory cache: "+t),await tl(n,new ra)}}else V(Mn,"Using default OfflineComponentProvider"),await tl(n,new rS(void 0));return n._offlineComponents}async function U_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Mn,"Using user provided OnlineComponentProvider"),await Ap(n,n._uninitializedComponentsProvider._online)):(V(Mn,"Using default OnlineComponentProvider"),await Ap(n,new Gl))),n._onlineComponents}function cS(n){return U_(n).then((e=>e.syncEngine))}async function oa(n){const e=await U_(n),t=e.eventManager;return t.onListen=GR.bind(null,e.syncEngine),t.onUnlisten=QR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=YR.bind(null,e.syncEngine),t}function lS(n,e,t={}){const i=new Kt;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,c,l,u){const f=new Ju({next:m=>{f.Nu(),o.enqueueAndForget((()=>zu(r,p)));const w=m.docs.has(c);!w&&m.fromCache?u.reject(new L(b.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&l&&l.source==="server"?u.reject(new L(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Qu(Fa(c.path),f,{includeMetadataChanges:!0,qa:!0});return Gu(r,p)})(await oa(n),n.asyncQueue,e,t,i))),i.promise}function uS(n,e,t={}){const i=new Kt;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,c,l,u){const f=new Ju({next:m=>{f.Nu(),o.enqueueAndForget((()=>zu(r,p))),m.fromCache&&l.source==="server"?u.reject(new L(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Qu(c,f,{includeMetadataChanges:!0,qa:!0});return Gu(r,p)})(await oa(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function q_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Rp=new Map;/**
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
 */const B_="firestore.googleapis.com",Sp=!0;class Cp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new L(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=B_,this.ssl=Sp}else this.host=e.host,this.ssl=e.ssl??Sp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=I_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<WA)throw new L(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=q_(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class za{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new gw;switch(i.type){case"firstParty":return new Ew(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new L(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Rp.get(t);i&&(V("ComponentProvider","Removing Datastore"),Rp.delete(t),i.terminate())})(this),Promise.resolve()}}function W_(n,e,t,i={}){var u;n=rt(n,za);const s=Fn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Iu(`https://${c}`),Eu("Firestore",!0)),r.host!==B_&&r.host!==c&&Hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:s,emulatorOptions:i};if(!bn(l,o)&&(n._setSettings(l),i.mockUserToken)){let f,p;if(typeof i.mockUserToken=="string")f=i.mockUserToken,p=$e.MOCK_USER;else{f=ug(i.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const m=i.mockUserToken.sub||i.mockUserToken.user_id;if(!m)throw new L(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new $e(m)}n._authCredentials=new _w(new Pg(f,p))}}/**
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
 */class on{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new on(this.firestore,e,this._query)}}class ge{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ge(this.firestore,e,this._key)}toJSON(){return{type:ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Wr(t,ge._jsonSchema))return new ge(e,i||null,new F(oe.fromString(t.referencePath)))}}ge._jsonSchemaVersion="firestore/documentReference/1.0",ge._jsonSchema={type:Se("string",ge._jsonSchemaVersion),referencePath:Se("string")};class wn extends on{constructor(e,t,i){super(e,t,Fa(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ge(this.firestore,null,new F(e))}withConverter(e){return new wn(this.firestore,e,this._path)}}function sr(n,e,...t){if(n=x(n),Ng("collection","path",e),n instanceof za){const i=oe.fromString(e,...t);return qf(i),new wn(n,null,i)}{if(!(n instanceof ge||n instanceof wn))throw new L(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(oe.fromString(e,...t));return qf(i),new wn(n.firestore,null,i)}}function et(n,e,...t){if(n=x(n),arguments.length===1&&(e=Ru.newId()),Ng("doc","path",e),n instanceof za){const i=oe.fromString(e,...t);return Uf(i),new ge(n,null,new F(i))}{if(!(n instanceof ge||n instanceof wn))throw new L(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(oe.fromString(e,...t));return Uf(i),new ge(n.firestore,n instanceof wn?n.converter:null,new F(i))}}/**
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
 */const bp="AsyncQueue";class Pp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new w_(this,"async_queue_retry"),this._c=()=>{const i=el();i&&V(bp,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=el();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=el();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Kt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!os(e))throw e;V(bp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Jt("INTERNAL UNHANDLED ERROR: ",Np(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=ju.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&U(47125,{Pc:Np(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Np(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function kp(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}class en extends za{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new Pp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Pp(e),this._firestoreClient=void 0,await e}}}function hS(n,e){const t=typeof n=="object"?n:wu(),i=typeof n=="string"?n:Jo,s=is(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=ag("firestore");r&&W_(s,...r)}return s}function Ka(n){if(n._terminated)throw new L(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||dS(n),n._firestoreClient}function dS(n){var i,s,r;const e=n._freezeSettings(),t=(function(c,l,u,f){return new Fw(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,q_(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((r=e.localCache)!=null&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new oS(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dt(qe.fromBase64String(e))}catch(t){throw new L(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dt(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wr(e,dt._jsonSchema))return dt.fromBase64String(e.bytes)}}dt._jsonSchemaVersion="firestore/bytes/1.0",dt._jsonSchema={type:Se("string",dt._jsonSchemaVersion),bytes:Se("string")};/**
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
 */class Qa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kt._jsonSchemaVersion}}static fromJSON(e){if(Wr(e,kt._jsonSchema))return new kt(e.latitude,e.longitude)}}kt._jsonSchemaVersion="firestore/geoPoint/1.0",kt._jsonSchema={type:Se("string",kt._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};/**
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
 */class Dt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Dt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wr(e,Dt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Dt(e.vectorValues);throw new L(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dt._jsonSchemaVersion="firestore/vectorValue/1.0",Dt._jsonSchema={type:Se("string",Dt._jsonSchemaVersion),vectorValues:Se("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=/^__.*__$/;class pS{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new qn(e,this.data,this.fieldMask,t,this.fieldTransforms):new $r(e,this.data,t,this.fieldTransforms)}}class $_{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new qn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function j_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{Ac:n})}}class Zu{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Zu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return aa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(j_(this.Ac)&&fS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class mS{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||ja(e)}Cc(e,t,i,s=!1){return new Zu({Ac:e,methodName:t,Dc:i,path:Ue.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ya(n){const e=n._freezeSettings(),t=ja(n._databaseId);return new mS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function H_(n,e,t,i,s,r={}){const o=n.Cc(r.merge||r.mergeFields?2:0,e,t,s);nh("Data must be an object, but it was:",o,i);const c=G_(i,o);let l,u;if(r.merge)l=new ut(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const p of r.mergeFields){const m=zl(e,p,t);if(!o.contains(m))throw new L(b.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);K_(f,m)||f.push(m)}l=new ut(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new pS(new Ze(c),l,u)}class Kr extends zr{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Kr}}class eh extends zr{_toFieldTransform(e){return new o_(e.path,new vr)}isEqual(e){return e instanceof eh}}class th extends zr{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Rr(e.serializer,t_(e.serializer,this.Fc));return new o_(e.path,t)}isEqual(e){return e instanceof th&&this.Fc===e.Fc}}function gS(n,e,t,i){const s=n.Cc(1,e,t);nh("Data must be an object, but it was:",s,i);const r=[],o=Ze.empty();Un(i,((l,u)=>{const f=ih(e,l,t);u=x(u);const p=s.yc(f);if(u instanceof Kr)r.push(f);else{const m=Qr(u,p);m!=null&&(r.push(f),o.set(f,m))}}));const c=new ut(r);return new $_(o,c,s.fieldTransforms)}function _S(n,e,t,i,s,r){const o=n.Cc(1,e,t),c=[zl(e,i,t)],l=[s];if(r.length%2!=0)throw new L(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)c.push(zl(e,r[m])),l.push(r[m+1]);const u=[],f=Ze.empty();for(let m=c.length-1;m>=0;--m)if(!K_(u,c[m])){const w=c[m];let C=l[m];C=x(C);const k=o.yc(w);if(C instanceof Kr)u.push(w);else{const N=Qr(C,k);N!=null&&(u.push(w),f.set(w,N))}}const p=new ut(u);return new $_(f,p,o.fieldTransforms)}function yS(n,e,t,i=!1){return Qr(t,n.Cc(i?4:3,e))}function Qr(n,e){if(z_(n=x(n)))return nh("Unsupported field value:",e,n),G_(n,e);if(n instanceof zr)return(function(i,s){if(!j_(s.Ac))throw s.Sc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,s){const r=[];let o=0;for(const c of i){let l=Qr(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}})(n,e)}return(function(i,s){if((i=x(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return t_(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=le.fromDate(i);return{timestampValue:na(s.serializer,r)}}if(i instanceof le){const r=new le(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:na(s.serializer,r)}}if(i instanceof kt)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof dt)return{bytesValue:d_(s.serializer,i._byteString)};if(i instanceof ge){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Lu(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Dt)return(function(o,c){return{mapValue:{fields:{[Ug]:{stringValue:qg},[Zo]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return ku(c.serializer,u)}))}}}}}})(i,s);throw s.Sc(`Unsupported field value: ${Ma(i)}`)})(n,e)}function G_(n,e){const t={};return Og(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Un(n,((i,s)=>{const r=Qr(s,e.mc(i));r!=null&&(t[i]=r)})),{mapValue:{fields:t}}}function z_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof kt||n instanceof dt||n instanceof ge||n instanceof zr||n instanceof Dt)}function nh(n,e,t){if(!z_(t)||!kg(t)){const i=Ma(t);throw i==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+i)}}function zl(n,e,t){if((e=x(e))instanceof Qa)return e._internalPath;if(typeof e=="string")return ih(n,e);throw aa("Field path arguments must be of type string or ",n,!1,void 0,t)}const IS=new RegExp("[~\\*/\\[\\]]");function ih(n,e,t){if(e.search(IS)>=0)throw aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qa(...e.split("."))._internalPath}catch{throw aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function aa(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new L(b.INVALID_ARGUMENT,c+n+l)}function K_(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Q_{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ES(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ES extends Q_{data(){return super.data()}}function Xa(n,e){return typeof e=="string"?ih(n,e):e instanceof Qa?e._internalPath:e._delegate._internalPath}/**
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
 */function Y_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sh{}class rh extends sh{}function Kl(n,e,...t){let i=[];e instanceof sh&&i.push(e),i=i.concat(t),(function(r){const o=r.filter((l=>l instanceof oh)).length,c=r.filter((l=>l instanceof Ja)).length;if(o>1||o>0&&c>0)throw new L(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const s of i)n=s._apply(n);return n}class Ja extends rh{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Ja(e,t,i)}_apply(e){const t=this._parse(e);return X_(e._query,t),new on(e.firestore,e.converter,xl(e._query,t))}_parse(e){const t=Ya(e.firestore);return(function(r,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Mp(p,f);const C=[];for(const k of p)C.push(Op(l,r,k));m={arrayValue:{values:C}}}else m=Op(l,r,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Mp(p,f),m=yS(c,o,p,f==="in"||f==="not-in");return Re.create(u,f,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Dp(n,e,t){const i=e,s=Xa("where",n);return Ja._create(s,i,t)}class oh extends sh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new oh(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:wt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,r){let o=s;const c=r.getFlattenedFilters();for(const l of c)X_(o,l),o=xl(o,l)})(e._query,t),new on(e.firestore,e.converter,xl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ah extends rh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ah(e,t)}_apply(e){const t=(function(s,r,o){if(s.startAt!==null)throw new L(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Tr(r,o)})(e._query,this._field,this._direction);return new on(e.firestore,e.converter,(function(s,r){const o=s.explicitOrderBy.concat([r]);return new as(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Ql(n,e="asc"){const t=e,i=Xa("orderBy",n);return ah._create(i,t)}class ch extends rh{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new ch(e,t,i)}_apply(e){return new on(e.firestore,e.converter,ta(e._query,this._limit,this._limitType))}}function TS(n){return Cw("limit",n),ch._create("limit",n,"F")}function Op(n,e,t){if(typeof(t=x(t))=="string"){if(t==="")throw new L(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kg(e)&&t.indexOf("/")!==-1)throw new L(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(oe.fromString(t));if(!F.isDocumentKey(i))throw new L(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Kf(n,new F(i))}if(t instanceof ge)return Kf(n,t._key);throw new L(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ma(t)}.`)}function Mp(n,e){if(!Array.isArray(n)||n.length===0)throw new L(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function X_(n,e){const t=(function(s,r){for(const o of s)for(const c of o.getFlattenedFilters())if(r.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class vS{convertValue(e,t="none"){switch(Dn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(kn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Un(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[Zo].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>ye(o.doubleValue)));return new Dt(t)}convertGeoPoint(e){return new kt(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=xa(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(yr(e));default:return null}}convertTimestamp(e){const t=Nn(e);return new le(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=oe.fromString(e);ne(y_(i),9688,{name:e});const s=new Ir(i.get(1),i.get(3)),r=new F(i.popFirst(5));return s.isEqual(t)||Jt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function J_(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class Ys{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ni extends Q_{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Xa("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ni._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ni._jsonSchemaVersion="firestore/documentSnapshot/1.0",ni._jsonSchema={type:Se("string",ni._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class qo extends ni{data(e={}){return super.data(e)}}class ii{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ys(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new qo(this._firestore,this._userDataWriter,i.key,i,new Ys(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new qo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ys(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new qo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ys(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:wS(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ii._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ru.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function wS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}/**
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
 */function Li(n){n=rt(n,ge);const e=rt(n.firestore,en);return lS(Ka(e),n._key).then((t=>Z_(e,n,t)))}ii._jsonSchemaVersion="firestore/querySnapshot/1.0",ii._jsonSchema={type:Se("string",ii._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};class lh extends vS{constructor(e){super(),this.firestore=e}convertBytes(e){return new dt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ge(this.firestore,null,t)}}function AS(n){n=rt(n,on);const e=rt(n.firestore,en),t=Ka(e),i=new lh(e);return Y_(n._query),uS(t,n._query).then((s=>new ii(e,i,n,s)))}function An(n,e,t){n=rt(n,ge);const i=rt(n.firestore,en),s=J_(n.converter,e,t);return Za(i,[H_(Ya(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,pt.none())])}function ki(n,e,t,...i){n=rt(n,ge);const s=rt(n.firestore,en),r=Ya(s);let o;return o=typeof(e=x(e))=="string"||e instanceof Qa?_S(r,"updateDoc",n._key,e,t,i):gS(r,"updateDoc",n._key,e),Za(s,[o.toMutation(n._key,pt.exists(!0))])}function Yl(n){return Za(rt(n.firestore,en),[new Du(n._key,pt.none())])}function RS(n,e){const t=rt(n.firestore,en),i=et(n),s=J_(n.converter,e);return Za(t,[H_(Ya(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,pt.exists(!1))]).then((()=>i))}function Bo(n,...e){var l,u,f;n=x(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||kp(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(kp(e[i])){const p=e[i];e[i]=(l=p.next)==null?void 0:l.bind(p),e[i+1]=(u=p.error)==null?void 0:u.bind(p),e[i+2]=(f=p.complete)==null?void 0:f.bind(p)}let r,o,c;if(n instanceof ge)o=rt(n.firestore,en),c=Fa(n._key.path),r={next:p=>{e[i]&&e[i](Z_(o,n,p))},error:e[i+1],complete:e[i+2]};else{const p=rt(n,on);o=rt(p.firestore,en),c=p._query;const m=new lh(o);r={next:w=>{e[i]&&e[i](new ii(o,m,p,w))},error:e[i+1],complete:e[i+2]},Y_(n._query)}return(function(m,w,C,k){const N=new Ju(k),$=new Qu(w,N,C);return m.asyncQueue.enqueueAndForget((async()=>Gu(await oa(m),$))),()=>{N.Nu(),m.asyncQueue.enqueueAndForget((async()=>zu(await oa(m),$)))}})(Ka(o),c,s,r)}function Za(n,e){return(function(i,s){const r=new Kt;return i.asyncQueue.enqueueAndForget((async()=>XR(await cS(i),s,r))),r.promise})(Ka(n),e)}function Z_(n,e,t){const i=t.docs.get(e._key),s=new lh(n);return new ni(n,s,e._key,i,new Ys(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */function SS(){return new Kr("deleteField")}function CS(){return new eh("serverTimestamp")}function AM(n){return new th("increment",n)}(function(e,t=!0){(function(s){ss=s})(mi),vt(new gt("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new en(new yw(i.getProvider("auth-internal")),new Tw(o,i.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new L(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ir(u.options.projectId,f)})(o,s),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),st(Lf,Vf,e),st(Lf,Vf,"esm2020")})();var bS="firebase",PS="12.6.0";/**
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
 */st(bS,PS,"app");var Lp={};const Vp="@firebase/database",xp="1.1.0";/**
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
 */let ey="";function NS(n){ey=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Le(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:pr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kS(e)}}catch{}return new DS},Jn=ty("localStorage"),OS=ty("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Br("@firebase/database"),MS=(function(){let n=1;return function(){return n++}})(),ny=function(n){const e=iv(n),t=new ZT;t.update(e);const i=t.digest();return yu.encodeByteArray(i)},Yr=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Yr.apply(null,i):typeof i=="object"?e+=Le(i):e+=i,e+=" "}return e};let rr=null,Fp=!0;const LS=function(n,e){O(!0,"Can't turn on custom loggers persistently."),Vi.logLevel=Y.VERBOSE,rr=Vi.log.bind(Vi)},Fe=function(...n){if(Fp===!0&&(Fp=!1,rr===null&&OS.get("logging_enabled")===!0&&LS()),rr){const e=Yr.apply(null,n);rr(e)}},Xr=function(n){return function(...e){Fe(n,...e)}},Xl=function(...n){const e="FIREBASE INTERNAL ERROR: "+Yr(...n);Vi.error(e)},tn=function(...n){const e=`FIREBASE FATAL ERROR: ${Yr(...n)}`;throw Vi.error(e),new Error(e)},ot=function(...n){const e="FIREBASE WARNING: "+Yr(...n);Vi.warn(e)},VS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ec=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},xS=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Xi="[MIN_NAME]",ai="[MAX_NAME]",yi=function(n,e){if(n===e)return 0;if(n===Xi||e===ai)return-1;if(e===Xi||n===ai)return 1;{const t=Up(n),i=Up(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},FS=function(n,e){return n===e?0:n<e?-1:1},Os=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Le(e))},uh=function(n){if(typeof n!="object"||n===null)return Le(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Le(e[i]),t+=":",t+=uh(n[e[i]]);return t+="}",t},iy=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Ge(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const sy=function(n){O(!ec(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,c,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=c+i,o=Math.round(n*Math.pow(2,t-c)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const f=u.join("");let p="";for(l=0;l<64;l+=8){let m=parseInt(f.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},US=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function BS(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const WS=new RegExp("^-?(0*)\\d{1,10}$"),$S=-2147483648,jS=2147483647,Up=function(n){if(WS.test(n)){const e=Number(n);if(e>=$S&&e<=jS)return e}return null},ls=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ot("Exception was thrown by user callback.",t),e},Math.floor(0))}},HS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},or=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class GS{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,de(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ot(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ot(e)}}class Wo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="5",ry="v",oy="s",ay="r",cy="f",ly=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uy="ls",hy="p",Jl="ac",dy="websocket",fy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,t,i,s,r=!1,o="",c=!1,l=!1,u=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function KS(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function my(n,e,t){O(typeof e=="string","typeof type must == string"),O(typeof t=="object","typeof params must == object");let i;if(e===dy)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===fy)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);KS(n)&&(t.ns=n.namespace);const s=[];return Ge(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this.counters_={}}incrementCounter(e,t=1){Lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return MT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl={},il={};function dh(n){const e=n.toString();return nl[e]||(nl[e]=new QS),nl[e]}function YS(n,e){const t=n.toString();return il[t]||(il[t]=e()),il[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ls(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="start",JS="close",ZS="pLPCommand",eC="pRTLPCB",gy="id",_y="pw",yy="ser",tC="cb",nC="seg",iC="ts",sC="d",rC="dframe",Iy=1870,Ey=30,oC=Iy-Ey,aC=25e3,cC=3e4;class Oi{constructor(e,t,i,s,r,o,c){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xr(e),this.stats_=dh(t),this.urlFn=l=>(this.appCheckToken&&(l[Jl]=this.appCheckToken),my(t,fy,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new XS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cC)),xS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fh((...r)=>{const[o,c,l,u,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qp)this.id=c,this.password=l;else if(o===JS)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,c]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,c)},()=>{this.onClosed_()},this.urlFn);const i={};i[qp]="t",i[yy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[tC]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ry]=hh,this.transportSessionId&&(i[oy]=this.transportSessionId),this.lastSessionId&&(i[uy]=this.lastSessionId),this.applicationId&&(i[hy]=this.applicationId),this.appCheckToken&&(i[Jl]=this.appCheckToken),typeof location<"u"&&location.hostname&&ly.test(location.hostname)&&(i[ay]=cy);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Oi.forceAllow_=!0}static forceDisallow(){Oi.forceDisallow_=!0}static isAvailable(){return Oi.forceAllow_?!0:!Oi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!US()&&!qS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=sg(t),s=iy(i,oC);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[rC]="t",i[gy]=e,i[_y]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Le(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class fh{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=MS(),window[ZS+this.uniqueCallbackIdentifier]=e,window[eC+this.uniqueCallbackIdentifier]=t,this.myIFrame=fh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(c){Fe("frame writing exception"),c.stack&&Fe(c.stack),Fe(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Fe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gy]=this.myID,e[_y]=this.myPW,e[yy]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ey+i.length<=Iy;){const o=this.pendingSegs.shift();i=i+"&"+nC+s+"="+o.seg+"&"+iC+s+"="+o.ts+"&"+sC+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(aC)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=16384,uC=45e3;let ca=null;typeof MozWebSocket<"u"?ca=MozWebSocket:typeof WebSocket<"u"&&(ca=WebSocket);class yt{constructor(e,t,i,s,r,o,c){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xr(this.connId),this.stats_=dh(t),this.connURL=yt.connectionURL_(t,o,c,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[ry]=hh,typeof location<"u"&&location.hostname&&ly.test(location.hostname)&&(o[ay]=cy),t&&(o[oy]=t),i&&(o[uy]=i),s&&(o[Jl]=s),r&&(o[hy]=r),my(e,dy,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jn.set("previous_websocket_failure",!0);try{let i;HT(),this.mySock=new ca(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){yt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ca!==null&&!yt.forceDisallow_}static previouslyFailed(){return Jn.isInMemoryStorage||Jn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=pr(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=iy(t,lC);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(uC))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yt.responsesRequiredToBeHealthy=2;yt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{static get ALL_TRANSPORTS(){return[Oi,yt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=yt&&yt.isAvailable();let i=t&&!yt.previouslyFailed();if(e.webSocketOnly&&(t||ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[yt];else{const s=this.transports_=[];for(const r of Sr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Sr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Sr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=6e4,dC=5e3,fC=10*1024,pC=100*1024,sl="t",Bp="d",mC="s",Wp="r",gC="e",$p="o",jp="a",Hp="n",Gp="p",_C="h";class yC{constructor(e,t,i,s,r,o,c,l,u,f){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=c,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xr("c:"+this.id+":"),this.transportManager_=new Sr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=or(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sl in e){const t=e[sl];t===jp?this.upgradeIfSecondaryHealthy_():t===Wp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===$p&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Os("t",e),i=Os("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Gp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Os("t",e),i=Os("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Os(sl,e);if(Bp in e){const i=e[Bp];if(t===_C){const s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Hp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===mC?this.onConnectionShutdown_(i):t===Wp?this.onReset_(i):t===gC?Xl("Server Error: "+i):t===$p?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xl("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),hh!==i&&ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),or(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):or(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Gp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){O(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends vy{static getInstance(){return new la}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Tu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=32,Kp=768;class ie{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function te(){return new ie("")}function z(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ln(n){return n.pieces_.length-n.pieceNum_}function re(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ie(n.pieces_,e)}function ph(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function IC(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Cr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function wy(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ie(e,0)}function Ie(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof ie)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new ie(t,0)}function K(n){return n.pieceNum_>=n.pieces_.length}function nt(n,e){const t=z(n),i=z(e);if(t===null)return e;if(t===i)return nt(re(n),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function EC(n,e){const t=Cr(n,0),i=Cr(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=yi(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function mh(n,e){if(Ln(n)!==Ln(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ft(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ln(n)>Ln(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class TC{constructor(e,t){this.errorPrefix_=t,this.parts_=Cr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Oa(this.parts_[i]);Ay(this)}}function vC(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Oa(e),Ay(n)}function wC(n){const e=n.parts_.pop();n.byteLength_-=Oa(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ay(n){if(n.byteLength_>Kp)throw new Error(n.errorPrefix_+"has a key path longer than "+Kp+" bytes ("+n.byteLength_+").");if(n.parts_.length>zp)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zp+") or object contains a cycle "+Qn(n))}function Qn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends vy{static getInstance(){return new gh}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=1e3,AC=300*1e3,Qp=30*1e3,RC=1.3,SC=3e4,CC="server_kill",Yp=3;class Qt extends Ty{constructor(e,t,i,s,r,o,c,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=c,this.authOverride_=l,this.id=Qt.nextPersistentConnectionId_++,this.log_=Xr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ms,this.maxReconnectDelay_=AC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&la.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Le(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Ut,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const c=o.d;o.s==="ok"?t.resolve(c):t.reject(c)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const c={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,c=>{const l=c.d,u=c.s;Qt.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",c),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Lt(e,"w")){const i=$i(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||JT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Qp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=XT(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Le(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Xl("Unrecognized action received from server: "+Le(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>SC&&(this.reconnectDelay_=Ms),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*RC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Qt.nextConnectionId_++,r=this.lastSessionId;let o=!1,c=null;const l=function(){c?c.close():(o=!0,i())},u=function(p){O(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(p)};this.realtime_={close:l,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Fe("getToken() completed but was canceled"):(Fe("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,c=new yC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,w=>{ot(w+" ("+this.repoInfo_.toString()+")"),this.interrupt(CC)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&ot(p),l())}}}interrupt(e){Fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qo(this.interruptReasons_)&&(this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>uh(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new ie(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Fe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Yp&&(this.reconnectDelay_=Qp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Fe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Yp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ey.replace(/\./g,"-")]=1,Tu()?e["framework.cordova"]=1:dg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=la.getInstance().currentlyOnline();return Qo(this.interruptReasons_)&&e}}Qt.nextPersistentConnectionId_=0;Qt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Q(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Q(Xi,e),s=new Q(Xi,t);return this.compare(i,s)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co;class Ry extends tc{static get __EMPTY_NODE(){return Co}static set __EMPTY_NODE(e){Co=e}compare(e,t){return yi(e.name,t.name)}isDefinedOn(e){throw ns("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Q.MIN}maxPost(){return new Q(ai,Co)}makePost(e,t){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,Co)}toString(){return".key"}}const xi=new Ry;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Me{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Me.RED,this.left=s??it.EMPTY_NODE,this.right=r??it.EMPTY_NODE}copy(e,t,i,s,r){return new Me(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return it.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class bC{copy(e,t,i,s,r){return this}insert(e,t,i){return new Me(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class it{constructor(e,t=it.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new it(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(e){return new it(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new bo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new bo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new bo(this.root_,null,this.comparator_,!0,e)}}it.EMPTY_NODE=new bC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(n,e){return yi(n.name,e.name)}function _h(n,e){return yi(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl;function NC(n){Zl=n}const Sy=function(n){return typeof n=="number"?"number:"+sy(n):"string:"+n},Cy=function(n){if(n.isLeafNode()){const e=n.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lt(e,".sv"),"Priority must be a string or number.")}else O(n===Zl||n.isEmpty(),"priority of unexpected type.");O(n===Zl||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xp;class De{static set __childrenNodeConstructor(e){Xp=e}static get __childrenNodeConstructor(){return Xp}constructor(e,t=De.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Cy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new De(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:z(e)===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:De.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=z(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(O(i!==".priority"||Ln(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,De.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Sy(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=sy(this.value_):e+=this.value_,this.lazyHash_=ny(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===De.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof De.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=De.VALUE_TYPE_ORDER.indexOf(t),r=De.VALUE_TYPE_ORDER.indexOf(i);return O(s>=0,"Unknown leaf type: "+t),O(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}De.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let by,Py;function kC(n){by=n}function DC(n){Py=n}class OC extends tc{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?yi(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(ai,new De("[PRIORITY-POST]",Py))}makePost(e,t){const i=by(e);return new Q(t,new De("[PRIORITY-POST]",i))}toString(){return".priority"}}const fe=new OC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=Math.log(2);class LC{constructor(e){const t=r=>parseInt(Math.log(r)/MC,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ua=function(n,e,t,i){n.sort(e);const s=function(l,u){const f=u-l;let p,m;if(f===0)return null;if(f===1)return p=n[l],m=t?t(p):p,new Me(m,p.node,Me.BLACK,null,null);{const w=parseInt(f/2,10)+l,C=s(l,w),k=s(w+1,u);return p=n[w],m=t?t(p):p,new Me(m,p.node,Me.BLACK,C,k)}},r=function(l){let u=null,f=null,p=n.length;const m=function(C,k){const N=p-C,$=p;p-=C;const H=s(N+1,$),ee=n[N],Ee=t?t(ee):ee;w(new Me(Ee,ee.node,k,null,H))},w=function(C){u?(u.left=C,u=C):(f=C,u=C)};for(let C=0;C<l.count;++C){const k=l.nextBitIsOne(),N=Math.pow(2,l.count-(C+1));k?m(N,Me.BLACK):(m(N,Me.BLACK),m(N,Me.RED))}return f},o=new LC(n.length),c=r(o);return new it(i||e,c)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl;const Ai={};class jt{static get Default(){return O(Ai&&fe,"ChildrenNode.ts has not been loaded"),rl=rl||new jt({".priority":Ai},{".priority":fe}),rl}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=$i(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof it?t:null}hasIndex(e){return Lt(this.indexSet_,e.toString())}addIndex(e,t){O(e!==xi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(Q.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let c;s?c=ua(i,e.getCompare()):c=Ai;const l=e.toString(),u={...this.indexSet_};u[l]=e;const f={...this.indexes_};return f[l]=c,new jt(f,u)}addToIndexes(e,t){const i=Yo(this.indexes_,(s,r)=>{const o=$i(this.indexSet_,r);if(O(o,"Missing index implementation for "+r),s===Ai)if(o.isDefinedOn(e.node)){const c=[],l=t.getIterator(Q.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&c.push(u),u=l.getNext();return c.push(e),ua(c,o.getCompare())}else return Ai;else{const c=t.get(e.name);let l=s;return c&&(l=l.remove(new Q(e.name,c))),l.insert(e,e.node)}});return new jt(i,this.indexSet_)}removeFromIndexes(e,t){const i=Yo(this.indexes_,s=>{if(s===Ai)return s;{const r=t.get(e.name);return r?s.remove(new Q(e.name,r)):s}});return new jt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;class q{static get EMPTY_NODE(){return Ls||(Ls=new q(new it(_h),null,jt.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Cy(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ls}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ls:t}}getChild(e){const t=z(e);return t===null?this:this.getImmediateChild(t).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(O(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Q(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ls:this.priorityNode_;return new q(s,o,r)}}updateChild(e,t){const i=z(e);if(i===null)return t;{O(z(e)!==".priority"||Ln(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(re(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(fe,(o,c)=>{t[o]=c.val(e),i++,r&&q.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const c in t)o[c]=t[c];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Sy(this.getPriority().val())+":"),this.forEachChild(fe,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":ny(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Q(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Q(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Q(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Q.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jr?-1:0}withIndex(e){if(e===xi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===xi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(fe),s=t.getIterator(fe);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xi?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class VC extends q{constructor(){super(new it(_h),q.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const Jr=new VC;Object.defineProperties(Q,{MIN:{value:new Q(Xi,q.EMPTY_NODE)},MAX:{value:new Q(ai,Jr)}});Ry.__EMPTY_NODE=q.EMPTY_NODE;De.__childrenNodeConstructor=q;NC(Jr);DC(Jr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=!0;function Ae(n,e=null){if(n===null)return q.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new De(t,Ae(e))}if(!(n instanceof Array)&&xC){const t=[];let i=!1;if(Ge(n,(o,c)=>{if(o.substring(0,1)!=="."){const l=Ae(c);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new Q(o,l)))}}),t.length===0)return q.EMPTY_NODE;const r=ua(t,PC,o=>o.name,_h);if(i){const o=ua(t,fe.getCompare());return new q(r,Ae(e),new jt({".priority":o},{".priority":fe}))}else return new q(r,Ae(e),jt.Default)}else{let t=q.EMPTY_NODE;return Ge(n,(i,s)=>{if(Lt(n,i)&&i.substring(0,1)!=="."){const r=Ae(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(Ae(e))}}kC(Ae);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC extends tc{constructor(e){super(),this.indexPath_=e,O(!K(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?yi(e.name,t.name):r}makePost(e,t){const i=Ae(e),s=q.EMPTY_NODE.updateChild(this.indexPath_,i);return new Q(t,s)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,Jr);return new Q(ai,e)}toString(){return Cr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC extends tc{compare(e,t){const i=e.node.compareTo(t.node);return i===0?yi(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,t){const i=Ae(e);return new Q(t,i)}toString(){return".value"}}const qC=new UC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(n){return{type:"value",snapshotNode:n}}function Ji(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function br(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Pr(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function BC(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const c=e.getImmediateChild(t);return c.getChild(s).equals(i.getChild(s))&&c.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(br(t,c)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):c.isEmpty()?o.trackChildChange(Ji(t,i)):o.trackChildChange(Pr(t,i,c))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(fe,(s,r)=>{t.hasChild(s)||i.trackChildChange(br(s,r))}),t.isLeafNode()||t.forEachChild(fe,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Pr(s,r,o))}else i.trackChildChange(Ji(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.indexedFilter_=new yh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nr.getStartPost_(e),this.endPost_=Nr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new Q(t,i))||(i=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=q.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(q.EMPTY_NODE);const r=this;return t.forEachChild(fe,(o,c)=>{r.matches(new Q(o,c))||(s=s.updateImmediateChild(o,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Nr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new Q(t,i))||(i=q.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=q.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const c=r.getNext();if(this.withinDirectionalStart(c))if(this.withinDirectionalEnd(c))s=s.updateImmediateChild(c.name,c.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(q.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const c=r.getNext();o<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?o++:s=s.updateImmediateChild(c.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(m,w)=>p(w,m)}else o=this.index_.getCompare();const c=e;O(c.numChildren()===this.limit_,"");const l=new Q(t,i),u=this.reverse_?c.getFirstChild(this.index_):c.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(c.hasChild(t)){const p=c.getImmediateChild(t);let m=s.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===t||c.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const w=m==null?1:o(m,l);if(f&&!i.isEmpty()&&w>=0)return r!=null&&r.trackChildChange(Pr(t,i,p)),c.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(br(t,p));const k=c.updateImmediateChild(t,q.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(r!=null&&r.trackChildChange(Ji(m.name,m.node)),k.updateImmediateChild(m.name,m.node)):k}}else return i.isEmpty()?e:f&&o(u,l)>=0?(r!=null&&(r.trackChildChange(br(u.name,u.node)),r.trackChildChange(Ji(t,i))),c.updateImmediateChild(t,i).updateImmediateChild(u.name,q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xi}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ai}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Ih;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $C(n){return n.loadsAllData()?new yh(n.getIndex()):n.hasLimit()?new WC(n):new Nr(n)}function Jp(n){const e={};if(n.isDefault())return e;let t;if(n.index_===fe?t="$priority":n.index_===qC?t="$value":n.index_===xi?t="$key":(O(n.index_ instanceof FC,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Le(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Le(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Le(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Le(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Le(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Zp(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==fe&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends Ty{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Xr("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ha.getListenId_(e,i),c={};this.listens_[o]=c;const l=Jp(e._queryParams);this.restRequest_(r+".json",l,(u,f)=>{let p=f;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(r,p,!1,i),$i(this.listens_,o)===c){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",s(m,null)}})}unlisten(e,t){const i=ha.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Jp(e._queryParams),i=e._path.toString(),s=new Ut;return this.restRequest_(i+".json",t,(r,o)=>{let c=o;r===404&&(c=null,r=null),r===null?(this.onDataUpdate_(i,c,!1,null),s.resolve(c)):s.reject(new Error(c))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pi(t);this.log_("Sending REST request for "+o);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(i&&c.readyState===4){this.log_("REST Response for "+o+" received. status:",c.status,"response:",c.responseText);let l=null;if(c.status>=200&&c.status<300){try{l=pr(c.responseText)}catch{ot("Failed to parse JSON response for "+o+": "+c.responseText)}i(null,l)}else c.status!==401&&c.status!==404&&ot("Got unsuccessful REST response for "+o+" Status: "+c.status),i(c.status);i=null}},c.open("GET",o,!0),c.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(){return{value:null,children:new Map}}function us(n,e,t){if(K(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=z(e);n.children.has(i)||n.children.set(i,da());const s=n.children.get(i);e=re(e),us(s,e,t)}}function eu(n,e){if(K(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(fe,(i,s)=>{us(n,new ie(i),s)}),eu(n,e)}}else if(n.children.size>0){const t=z(e);return e=re(e),n.children.has(t)&&eu(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function tu(n,e,t){n.value!==null?t(e,n.value):HC(n,(i,s)=>{const r=new ie(e.toString()+"/"+i);tu(s,r,t)})}function HC(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Ge(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=10*1e3,zC=30*1e3,KC=300*1e3;class QC{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new GC(e);const i=em+(zC-em)*Math.random();or(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ge(e,(s,r)=>{r>0&&Lt(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),or(this.reportStats_.bind(this),Math.floor(Math.random()*2*KC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(It||(It={}));function ky(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Eh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Th(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=It.ACK_USER_WRITE,this.source=ky()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ie(e));return new fa(te(),t,this.revert)}}else return O(z(this.path)===e,"operationForChild called for unrelated child."),new fa(re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.source=e,this.path=t,this.type=It.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new kr(this.source,te()):new kr(this.source,re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=It.OVERWRITE}operationForChild(e){return K(this.path)?new ci(this.source,te(),this.snap.getImmediateChild(e)):new ci(this.source,re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=It.MERGE}operationForChild(e){if(K(this.path)){const t=this.children.subtree(new ie(e));return t.isEmpty()?null:t.value?new ci(this.source,te(),t.value):new Dr(this.source,te(),t)}else return O(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Dr(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const t=z(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function XC(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(BC(o.childName,o.snapshotNode))}),Vs(n,s,"child_removed",e,i,t),Vs(n,s,"child_added",e,i,t),Vs(n,s,"child_moved",r,i,t),Vs(n,s,"child_changed",e,i,t),Vs(n,s,"value",e,i,t),s}function Vs(n,e,t,i,s,r){const o=i.filter(c=>c.type===t);o.sort((c,l)=>ZC(n,c,l)),o.forEach(c=>{const l=JC(n,c,r);s.forEach(u=>{u.respondsTo(c.type)&&e.push(u.createEvent(l,n.query_))})})}function JC(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ZC(n,e,t){if(e.childName==null||t.childName==null)throw ns("Should only compare child_ events.");const i=new Q(e.childName,e.snapshotNode),s=new Q(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n,e){return{eventCache:n,serverCache:e}}function ar(n,e,t,i){return nc(new li(e,t,i),n.serverCache)}function Dy(n,e,t,i){return nc(n.eventCache,new li(e,t,i))}function nu(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ui(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol;const eb=()=>(ol||(ol=new it(FS)),ol);class ce{static fromObject(e){let t=new ce(null);return Ge(e,(i,s)=>{t=t.set(new ie(i),s)}),t}constructor(e,t=eb()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:te(),value:this.value};if(K(e))return null;{const i=z(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(re(e),t);return r!=null?{path:Ie(new ie(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const t=z(e),i=this.children.get(t);return i!==null?i.subtree(re(e)):new ce(null)}}set(e,t){if(K(e))return new ce(t,this.children);{const i=z(e),r=(this.children.get(i)||new ce(null)).set(re(e),t),o=this.children.insert(i,r);return new ce(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const t=z(e),i=this.children.get(t);if(i){const s=i.remove(re(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new ce(null):new ce(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const t=z(e),i=this.children.get(t);return i?i.get(re(e)):null}}setTree(e,t){if(K(e))return t;{const i=z(e),r=(this.children.get(i)||new ce(null)).setTree(re(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ce(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ie(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,te(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(K(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(re(e),Ie(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,te(),t)}foreachOnPath_(e,t,i){if(K(e))return this;{this.value&&i(t,this.value);const s=z(e),r=this.children.get(s);return r?r.foreachOnPath_(re(e),Ie(t,s),i):new ce(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Ie(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.writeTree_=e}static empty(){return new Tt(new ce(null))}}function cr(n,e,t){if(K(e))return new Tt(new ce(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=nt(s,e);return r=r.updateChild(o,t),new Tt(n.writeTree_.set(s,r))}else{const s=new ce(t),r=n.writeTree_.setTree(e,s);return new Tt(r)}}}function tm(n,e,t){let i=n;return Ge(t,(s,r)=>{i=cr(i,Ie(e,s),r)}),i}function nm(n,e){if(K(e))return Tt.empty();{const t=n.writeTree_.setTree(e,new ce(null));return new Tt(t)}}function iu(n,e){return Ii(n,e)!=null}function Ii(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(nt(t.path,e)):null}function im(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(fe,(i,s)=>{e.push(new Q(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Q(i,s.value))}),e}function Rn(n,e){if(K(e))return n;{const t=Ii(n,e);return t!=null?new Tt(new ce(t)):new Tt(n.writeTree_.subtree(e))}}function su(n){return n.writeTree_.isEmpty()}function Zi(n,e){return Oy(te(),n.writeTree_,e)}function Oy(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Oy(Ie(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Ie(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(n,e){return xy(e,n)}function tb(n,e,t,i,s){O(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=cr(n.visibleWrites,e,t)),n.lastWriteId=i}function nb(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function ib(n,e){const t=n.allWrites.findIndex(c=>c.writeId===e);O(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const c=n.allWrites[o];c.visible&&(o>=t&&sb(c,i.path)?s=!1:ft(i.path,c.path)&&(r=!0)),o--}if(s){if(r)return rb(n),!0;if(i.snap)n.visibleWrites=nm(n.visibleWrites,i.path);else{const c=i.children;Ge(c,l=>{n.visibleWrites=nm(n.visibleWrites,Ie(i.path,l))})}return!0}else return!1}function sb(n,e){if(n.snap)return ft(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ft(Ie(n.path,t),e))return!0;return!1}function rb(n){n.visibleWrites=My(n.allWrites,ob,te()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function ob(n){return n.visible}function My(n,e,t){let i=Tt.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let c;if(r.snap)ft(t,o)?(c=nt(t,o),i=cr(i,c,r.snap)):ft(o,t)&&(c=nt(o,t),i=cr(i,te(),r.snap.getChild(c)));else if(r.children){if(ft(t,o))c=nt(t,o),i=tm(i,c,r.children);else if(ft(o,t))if(c=nt(o,t),K(c))i=tm(i,te(),r.children);else{const l=$i(r.children,z(c));if(l){const u=l.getChild(re(c));i=cr(i,te(),u)}}}else throw ns("WriteRecord should have .snap or .children")}}return i}function Ly(n,e,t,i,s){if(!i&&!s){const r=Ii(n.visibleWrites,e);if(r!=null)return r;{const o=Rn(n.visibleWrites,e);if(su(o))return t;if(t==null&&!iu(o,te()))return null;{const c=t||q.EMPTY_NODE;return Zi(o,c)}}}else{const r=Rn(n.visibleWrites,e);if(!s&&su(r))return t;if(!s&&t==null&&!iu(r,te()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(ft(u.path,e)||ft(e,u.path))},c=My(n.allWrites,o,e),l=t||q.EMPTY_NODE;return Zi(c,l)}}}function ab(n,e,t){let i=q.EMPTY_NODE;const s=Ii(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(fe,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Rn(n.visibleWrites,e);return t.forEachChild(fe,(o,c)=>{const l=Zi(Rn(r,new ie(o)),c);i=i.updateImmediateChild(o,l)}),im(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Rn(n.visibleWrites,e);return im(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function cb(n,e,t,i,s){O(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ie(e,t);if(iu(n.visibleWrites,r))return null;{const o=Rn(n.visibleWrites,r);return su(o)?s.getChild(t):Zi(o,s.getChild(t))}}function lb(n,e,t,i){const s=Ie(e,t),r=Ii(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Rn(n.visibleWrites,s);return Zi(o,i.getNode().getImmediateChild(t))}else return null}function ub(n,e){return Ii(n.visibleWrites,e)}function hb(n,e,t,i,s,r,o){let c;const l=Rn(n.visibleWrites,e),u=Ii(l,te());if(u!=null)c=u;else if(t!=null)c=Zi(l,t);else return[];if(c=c.withIndex(o),!c.isEmpty()&&!c.isLeafNode()){const f=[],p=o.getCompare(),m=r?c.getReverseIteratorFrom(i,o):c.getIteratorFrom(i,o);let w=m.getNext();for(;w&&f.length<s;)p(w,i)!==0&&f.push(w),w=m.getNext();return f}else return[]}function db(){return{visibleWrites:Tt.empty(),allWrites:[],lastWriteId:-1}}function pa(n,e,t,i){return Ly(n.writeTree,n.treePath,e,t,i)}function wh(n,e){return ab(n.writeTree,n.treePath,e)}function sm(n,e,t,i){return cb(n.writeTree,n.treePath,e,t,i)}function ma(n,e){return ub(n.writeTree,Ie(n.treePath,e))}function fb(n,e,t,i,s,r){return hb(n.writeTree,n.treePath,e,t,i,s,r)}function Ah(n,e,t){return lb(n.writeTree,n.treePath,e,t)}function Vy(n,e){return xy(Ie(n.treePath,e),n.writeTree)}function xy(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;O(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),O(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Pr(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,br(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Ji(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Pr(i,e.snapshotNode,s.oldSnap));else throw ns("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Fy=new mb;class Rh{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new li(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ah(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ui(this.viewCache_),r=fb(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(n){return{filter:n}}function _b(n,e){O(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function yb(n,e,t,i,s){const r=new pb;let o,c;if(t.type===It.OVERWRITE){const u=t;u.source.fromUser?o=ru(n,e,u.path,u.snap,i,s,r):(O(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered()&&!K(u.path),o=ga(n,e,u.path,u.snap,i,s,c,r))}else if(t.type===It.MERGE){const u=t;u.source.fromUser?o=Eb(n,e,u.path,u.children,i,s,r):(O(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered(),o=ou(n,e,u.path,u.children,i,s,c,r))}else if(t.type===It.ACK_USER_WRITE){const u=t;u.revert?o=wb(n,e,u.path,i,s,r):o=Tb(n,e,u.path,u.affectedTree,i,s,r)}else if(t.type===It.LISTEN_COMPLETE)o=vb(n,e,t.path,i,r);else throw ns("Unknown operation type: "+t.type);const l=r.getChanges();return Ib(e,o,l),{viewCache:o,changes:l}}function Ib(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=nu(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Ny(nu(e)))}}function Uy(n,e,t,i,s,r){const o=e.eventCache;if(ma(i,t)!=null)return e;{let c,l;if(K(t))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ui(e),f=u instanceof q?u:q.EMPTY_NODE,p=wh(i,f);c=n.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const u=pa(i,ui(e));c=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=z(t);if(u===".priority"){O(Ln(t)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const p=sm(i,t,f,l);p!=null?c=n.filter.updatePriority(f,p):c=o.getNode()}else{const f=re(t);let p;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const m=sm(i,t,o.getNode(),l);m!=null?p=o.getNode().getImmediateChild(u).updateChild(f,m):p=o.getNode().getImmediateChild(u)}else p=Ah(i,u,e.serverCache);p!=null?c=n.filter.updateChild(o.getNode(),u,p,f,s,r):c=o.getNode()}}return ar(e,c,o.isFullyInitialized()||K(t),n.filter.filtersNodes())}}function ga(n,e,t,i,s,r,o,c){const l=e.serverCache;let u;const f=o?n.filter:n.filter.getIndexedFilter();if(K(t))u=f.updateFullNode(l.getNode(),i,null);else if(f.filtersNodes()&&!l.isFiltered()){const w=l.getNode().updateChild(t,i);u=f.updateFullNode(l.getNode(),w,null)}else{const w=z(t);if(!l.isCompleteForPath(t)&&Ln(t)>1)return e;const C=re(t),N=l.getNode().getImmediateChild(w).updateChild(C,i);w===".priority"?u=f.updatePriority(l.getNode(),N):u=f.updateChild(l.getNode(),w,N,C,Fy,null)}const p=Dy(e,u,l.isFullyInitialized()||K(t),f.filtersNodes()),m=new Rh(s,p,r);return Uy(n,p,t,s,m,c)}function ru(n,e,t,i,s,r,o){const c=e.eventCache;let l,u;const f=new Rh(s,e,r);if(K(t))u=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ar(e,u,!0,n.filter.filtersNodes());else{const p=z(t);if(p===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),i),l=ar(e,u,c.isFullyInitialized(),c.isFiltered());else{const m=re(t),w=c.getNode().getImmediateChild(p);let C;if(K(m))C=i;else{const k=f.getCompleteChild(p);k!=null?ph(m)===".priority"&&k.getChild(wy(m)).isEmpty()?C=k:C=k.updateChild(m,i):C=q.EMPTY_NODE}if(w.equals(C))l=e;else{const k=n.filter.updateChild(c.getNode(),p,C,m,f,o);l=ar(e,k,c.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function rm(n,e){return n.eventCache.isCompleteForChild(e)}function Eb(n,e,t,i,s,r,o){let c=e;return i.foreach((l,u)=>{const f=Ie(t,l);rm(e,z(f))&&(c=ru(n,c,f,u,s,r,o))}),i.foreach((l,u)=>{const f=Ie(t,l);rm(e,z(f))||(c=ru(n,c,f,u,s,r,o))}),c}function om(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ou(n,e,t,i,s,r,o,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;K(t)?u=i:u=new ce(null).setTree(t,i);const f=e.serverCache.getNode();return u.children.inorderTraversal((p,m)=>{if(f.hasChild(p)){const w=e.serverCache.getNode().getImmediateChild(p),C=om(n,w,m);l=ga(n,l,new ie(p),C,s,r,o,c)}}),u.children.inorderTraversal((p,m)=>{const w=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!f.hasChild(p)&&!w){const C=e.serverCache.getNode().getImmediateChild(p),k=om(n,C,m);l=ga(n,l,new ie(p),k,s,r,o,c)}}),l}function Tb(n,e,t,i,s,r,o){if(ma(s,t)!=null)return e;const c=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(K(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ga(n,e,t,l.getNode().getChild(t),s,r,c,o);if(K(t)){let u=new ce(null);return l.getNode().forEachChild(xi,(f,p)=>{u=u.set(new ie(f),p)}),ou(n,e,t,u,s,r,c,o)}else return e}else{let u=new ce(null);return i.foreach((f,p)=>{const m=Ie(t,f);l.isCompleteForPath(m)&&(u=u.set(f,l.getNode().getChild(m)))}),ou(n,e,t,u,s,r,c,o)}}function vb(n,e,t,i,s){const r=e.serverCache,o=Dy(e,r.getNode(),r.isFullyInitialized()||K(t),r.isFiltered());return Uy(n,o,t,i,Fy,s)}function wb(n,e,t,i,s,r){let o;if(ma(i,t)!=null)return e;{const c=new Rh(i,e,s),l=e.eventCache.getNode();let u;if(K(t)||z(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=pa(i,ui(e));else{const p=e.serverCache.getNode();O(p instanceof q,"serverChildren would be complete if leaf node"),f=wh(i,p)}f=f,u=n.filter.updateFullNode(l,f,r)}else{const f=z(t);let p=Ah(i,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=l.getImmediateChild(f)),p!=null?u=n.filter.updateChild(l,f,p,re(t),c,r):e.eventCache.getNode().hasChild(f)?u=n.filter.updateChild(l,f,q.EMPTY_NODE,re(t),c,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=pa(i,ui(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||ma(i,te())!=null,ar(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new yh(i.getIndex()),r=$C(i);this.processor_=gb(r);const o=t.serverCache,c=t.eventCache,l=s.updateFullNode(q.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(q.EMPTY_NODE,c.getNode(),null),f=new li(l,o.isFullyInitialized(),s.filtersNodes()),p=new li(u,c.isFullyInitialized(),r.filtersNodes());this.viewCache_=nc(p,f),this.eventGenerator_=new YC(this.query_)}get query(){return this.query_}}function Rb(n){return n.viewCache_.serverCache.getNode()}function Sb(n,e){const t=ui(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!K(e)&&!t.getImmediateChild(z(e)).isEmpty())?t.getChild(e):null}function am(n){return n.eventRegistrations_.length===0}function Cb(n,e){n.eventRegistrations_.push(e)}function cm(n,e,t){const i=[];if(t){O(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function lm(n,e,t,i){e.type===It.MERGE&&e.source.queryId!==null&&(O(ui(n.viewCache_),"We should always have a full cache before handling merges"),O(nu(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=yb(n.processor_,s,e,t,i);return _b(n.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,qy(n,r.changes,r.viewCache.eventCache.getNode(),null)}function bb(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(fe,(r,o)=>{i.push(Ji(r,o))}),t.isFullyInitialized()&&i.push(Ny(t.getNode())),qy(n,i,t.getNode(),e)}function qy(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return XC(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a;class Pb{constructor(){this.views=new Map}}function Nb(n){O(!_a,"__referenceConstructor has already been defined"),_a=n}function kb(){return O(_a,"Reference.ts has not been loaded"),_a}function Db(n){return n.views.size===0}function Sh(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return O(r!=null,"SyncTree gave us an op for an invalid query."),lm(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(lm(o,e,t,i));return r}}function Ob(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let c=pa(t,s?i:null),l=!1;c?l=!0:i instanceof q?(c=wh(t,i),l=!1):(c=q.EMPTY_NODE,l=!1);const u=nc(new li(c,l,!1),new li(i,s,!1));return new Ab(e,u)}return o}function Mb(n,e,t,i,s,r){const o=Ob(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Cb(o,t),bb(o,t)}function Lb(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const c=Vn(n);if(s==="default")for(const[l,u]of n.views.entries())o=o.concat(cm(u,t,i)),am(u)&&(n.views.delete(l),u.query._queryParams.loadsAllData()||r.push(u.query));else{const l=n.views.get(s);l&&(o=o.concat(cm(l,t,i)),am(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return c&&!Vn(n)&&r.push(new(kb())(e._repo,e._path)),{removed:r,events:o}}function By(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Fi(n,e){let t=null;for(const i of n.views.values())t=t||Sb(i,e);return t}function Wy(n,e){if(e._queryParams.loadsAllData())return ic(n);{const i=e._queryIdentifier;return n.views.get(i)}}function $y(n,e){return Wy(n,e)!=null}function Vn(n){return ic(n)!=null}function ic(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya;function Vb(n){O(!ya,"__referenceConstructor has already been defined"),ya=n}function xb(){return O(ya,"Reference.ts has not been loaded"),ya}let Fb=1;class um{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=db(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function jy(n,e,t,i,s){return tb(n.pendingWriteTree_,e,t,i,s),s?Zr(n,new ci(ky(),e,t)):[]}function Zn(n,e,t=!1){const i=nb(n.pendingWriteTree_,e);if(ib(n.pendingWriteTree_,e)){let r=new ce(null);return i.snap!=null?r=r.set(te(),!0):Ge(i.children,o=>{r=r.set(new ie(o),!0)}),Zr(n,new fa(i.path,r,t))}else return[]}function sc(n,e,t){return Zr(n,new ci(Eh(),e,t))}function Ub(n,e,t){const i=ce.fromObject(t);return Zr(n,new Dr(Eh(),e,i))}function qb(n,e){return Zr(n,new kr(Eh(),e))}function Bb(n,e,t){const i=bh(n,t);if(i){const s=Ph(i),r=s.path,o=s.queryId,c=nt(r,e),l=new kr(Th(o),c);return Nh(n,r,l)}else return[]}function au(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let c=[];if(o&&(e._queryIdentifier==="default"||$y(o,e))){const l=Lb(o,e,t,i);Db(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const u=l.removed;if(c=l.events,!s){const f=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,p=n.syncPointTree_.findOnPath(r,(m,w)=>Vn(w));if(f&&!p){const m=n.syncPointTree_.subtree(r);if(!m.isEmpty()){const w=jb(m);for(let C=0;C<w.length;++C){const k=w[C],N=k.query,$=zy(n,k);n.listenProvider_.startListening(lr(N),Ia(n,N),$.hashFn,$.onComplete)}}}!p&&u.length>0&&!i&&(f?n.listenProvider_.stopListening(lr(e),null):u.forEach(m=>{const w=n.queryToTagMap.get(rc(m));n.listenProvider_.stopListening(lr(m),w)}))}Hb(n,u)}return c}function Wb(n,e,t,i){const s=bh(n,i);if(s!=null){const r=Ph(s),o=r.path,c=r.queryId,l=nt(o,e),u=new ci(Th(c),l,t);return Nh(n,o,u)}else return[]}function $b(n,e,t,i){const s=bh(n,i);if(s){const r=Ph(s),o=r.path,c=r.queryId,l=nt(o,e),u=ce.fromObject(t),f=new Dr(Th(c),l,u);return Nh(n,o,f)}else return[]}function hm(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(m,w)=>{const C=nt(m,s);r=r||Fi(w,C),o=o||Vn(w)});let c=n.syncPointTree_.get(s);c?(o=o||Vn(c),r=r||Fi(c,te())):(c=new Pb,n.syncPointTree_=n.syncPointTree_.set(s,c));let l;r!=null?l=!0:(l=!1,r=q.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((w,C)=>{const k=Fi(C,te());k&&(r=r.updateImmediateChild(w,k))}));const u=$y(c,e);if(!u&&!e._queryParams.loadsAllData()){const m=rc(e);O(!n.queryToTagMap.has(m),"View does not exist, but we have a tag");const w=Gb();n.queryToTagMap.set(m,w),n.tagToQueryMap.set(w,m)}const f=vh(n.pendingWriteTree_,s);let p=Mb(c,e,t,f,r,l);if(!u&&!o&&!i){const m=Wy(c,e);p=p.concat(zb(n,e,m))}return p}function Ch(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,c)=>{const l=nt(o,e),u=Fi(c,l);if(u)return u});return Ly(s,e,r,t,!0)}function Zr(n,e){return Hy(e,n.syncPointTree_,null,vh(n.pendingWriteTree_,te()))}function Hy(n,e,t,i){if(K(n.path))return Gy(n,e,t,i);{const s=e.get(te());t==null&&s!=null&&(t=Fi(s,te()));let r=[];const o=z(n.path),c=n.operationForChild(o),l=e.children.get(o);if(l&&c){const u=t?t.getImmediateChild(o):null,f=Vy(i,o);r=r.concat(Hy(c,l,u,f))}return s&&(r=r.concat(Sh(s,n,i,t))),r}}function Gy(n,e,t,i){const s=e.get(te());t==null&&s!=null&&(t=Fi(s,te()));let r=[];return e.children.inorderTraversal((o,c)=>{const l=t?t.getImmediateChild(o):null,u=Vy(i,o),f=n.operationForChild(o);f&&(r=r.concat(Gy(f,c,l,u)))}),s&&(r=r.concat(Sh(s,n,i,t))),r}function zy(n,e){const t=e.query,i=Ia(n,t);return{hashFn:()=>(Rb(e)||q.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Bb(n,t._path,i):qb(n,t._path);{const r=BS(s,t);return au(n,t,null,r)}}}}function Ia(n,e){const t=rc(e);return n.queryToTagMap.get(t)}function rc(n){return n._path.toString()+"$"+n._queryIdentifier}function bh(n,e){return n.tagToQueryMap.get(e)}function Ph(n){const e=n.indexOf("$");return O(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ie(n.substr(0,e))}}function Nh(n,e,t){const i=n.syncPointTree_.get(e);O(i,"Missing sync point for query tag that we're tracking");const s=vh(n.pendingWriteTree_,e);return Sh(i,t,s,null)}function jb(n){return n.fold((e,t,i)=>{if(t&&Vn(t))return[ic(t)];{let s=[];return t&&(s=By(t)),Ge(i,(r,o)=>{s=s.concat(o)}),s}})}function lr(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(xb())(n._repo,n._path):n}function Hb(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=rc(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Gb(){return Fb++}function zb(n,e,t){const i=e._path,s=Ia(n,e),r=zy(n,t),o=n.listenProvider_.startListening(lr(e),s,r.hashFn,r.onComplete),c=n.syncPointTree_.subtree(i);if(s)O(!Vn(c.value),"If we're adding a query, it shouldn't be shadowed");else{const l=c.fold((u,f,p)=>{if(!K(u)&&f&&Vn(f))return[ic(f).query];{let m=[];return f&&(m=m.concat(By(f).map(w=>w.query))),Ge(p,(w,C)=>{m=m.concat(C)}),m}});for(let u=0;u<l.length;++u){const f=l[u];n.listenProvider_.stopListening(lr(f),Ia(n,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new kh(t)}node(){return this.node_}}class Dh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ie(this.path_,e);return new Dh(this.syncTree_,t)}node(){return Ch(this.syncTree_,this.path_)}}const Kb=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},dm=function(n,e,t){if(!n||typeof n!="object")return n;if(O(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Qb(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Yb(n[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Qb=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:O(!1,"Unexpected server value: "+n)}},Yb=function(n,e,t){n.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&O(!1,"Unexpected increment value: "+i);const s=e.node();if(O(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Xb=function(n,e,t,i){return Oh(e,new Dh(t,n),i)},Ky=function(n,e,t){return Oh(n,new kh(e),t)};function Oh(n,e,t){const i=n.getPriority().val(),s=dm(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,c=dm(o.getValue(),e,t);return c!==o.getValue()||s!==o.getPriority().val()?new De(c,Ae(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new De(s))),o.forEachChild(fe,(c,l)=>{const u=Oh(l,e.getImmediateChild(c),t);u!==l&&(r=r.updateImmediateChild(c,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Lh(n,e){let t=e instanceof ie?e:new ie(e),i=n,s=z(t);for(;s!==null;){const r=$i(i.node.children,s)||{children:{},childCount:0};i=new Mh(s,i,r),t=re(t),s=z(t)}return i}function hs(n){return n.node.value}function Qy(n,e){n.node.value=e,cu(n)}function Yy(n){return n.node.childCount>0}function Jb(n){return hs(n)===void 0&&!Yy(n)}function oc(n,e){Ge(n.node.children,(t,i)=>{e(new Mh(t,n,i))})}function Xy(n,e,t,i){t&&e(n),oc(n,s=>{Xy(s,e,!0)})}function Zb(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function eo(n){return new ie(n.parent===null?n.name:eo(n.parent)+"/"+n.name)}function cu(n){n.parent!==null&&eP(n.parent,n.name,n)}function eP(n,e,t){const i=Jb(t),s=Lt(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,cu(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,cu(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=/[\[\].#$\/\u0000-\u001F\u007F]/,nP=/[\[\].#$\u0000-\u001F\u007F]/,al=10*1024*1024,Vh=function(n){return typeof n=="string"&&n.length!==0&&!tP.test(n)},Jy=function(n){return typeof n=="string"&&n.length!==0&&!nP.test(n)},iP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Jy(n)},Zy=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ec(n)||n&&typeof n=="object"&&Lt(n,".sv")},lu=function(n,e,t,i){ac(ji(n,"value"),e,t)},ac=function(n,e,t){const i=t instanceof ie?new TC(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Qn(i));if(typeof e=="function")throw new Error(n+"contains a function "+Qn(i)+" with contents = "+e.toString());if(ec(e))throw new Error(n+"contains "+e.toString()+" "+Qn(i));if(typeof e=="string"&&e.length>al/3&&Oa(e)>al)throw new Error(n+"contains a string greater than "+al+" utf8 bytes "+Qn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ge(e,(o,c)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Vh(o)))throw new Error(n+" contains an invalid key ("+o+") "+Qn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vC(i,o),ac(n,c,i),wC(i)}),s&&r)throw new Error(n+' contains ".value" child '+Qn(i)+" in addition to actual children.")}},sP=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=Cr(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Vh(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(EC);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&ft(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},rP=function(n,e,t,i){const s=ji(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Ge(e,(o,c)=>{const l=new ie(o);if(ac(s,c,Ie(t,l)),ph(l)===".priority"&&!Zy(c))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),sP(s,r)},oP=function(n,e,t){if(ec(e))throw new Error(ji(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Zy(e))throw new Error(ji(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},eI=function(n,e,t,i){if(!Jy(t))throw new Error(ji(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},aP=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),eI(n,e,t)},Xs=function(n,e){if(z(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},cP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!iP(t))throw new Error(ji(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xh(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!mh(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function tI(n,e,t){xh(n,t),nI(n,i=>mh(i,e))}function nn(n,e,t){xh(n,t),nI(n,i=>ft(i,e)||ft(e,i))}function nI(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(uP(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function uP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();rr&&Fe("event: "+t.toString()),ls(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP="repo_interrupt",dP=25;class fP{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=da(),this.transactionQueueTree_=new Mh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pP(n,e,t){if(n.stats_=dh(n.repoInfo_),n.forceRestClient_||HS())n.server_=new ha(n.repoInfo_,(i,s,r,o)=>{fm(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>pm(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Le(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Qt(n.repoInfo_,e,(i,s,r,o)=>{fm(n,i,s,r,o)},i=>{pm(n,i)},i=>{gP(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=YS(n.repoInfo_,()=>new QC(n.stats_,n.server_)),n.infoData_=new jC,n.infoSyncTree_=new um({startListening:(i,s,r,o)=>{let c=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(c=sc(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),c},stopListening:()=>{}}),Uh(n,"connected",!1),n.serverSyncTree_=new um({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(c,l)=>{const u=o(c,l);nn(n.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function mP(n){const t=n.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Fh(n){return Kb({timestamp:mP(n)})}function fm(n,e,t,i,s){n.dataUpdateCount++;const r=new ie(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Yo(t,u=>Ae(u));o=$b(n.serverSyncTree_,r,l,s)}else{const l=Ae(t);o=Wb(n.serverSyncTree_,r,l,s)}else if(i){const l=Yo(t,u=>Ae(u));o=Ub(n.serverSyncTree_,r,l)}else{const l=Ae(t);o=sc(n.serverSyncTree_,r,l)}let c=r;o.length>0&&(c=cc(n,r)),nn(n.eventQueue_,c,o)}function pm(n,e){Uh(n,"connected",e),e===!1&&yP(n)}function gP(n,e){Ge(e,(t,i)=>{Uh(n,t,i)})}function Uh(n,e,t){const i=new ie("/.info/"+e),s=Ae(t);n.infoData_.updateSnapshot(i,s);const r=sc(n.infoSyncTree_,i,s);nn(n.eventQueue_,i,r)}function iI(n){return n.nextWriteId_++}function _P(n,e,t,i,s){qh(n,"set",{path:e.toString(),value:t,priority:i});const r=Fh(n),o=Ae(t,i),c=Ch(n.serverSyncTree_,e),l=Ky(o,c,r),u=iI(n),f=jy(n.serverSyncTree_,e,l,u,!0);xh(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(m,w)=>{const C=m==="ok";C||ot("set at "+e+" failed: "+m);const k=Zn(n.serverSyncTree_,u,!C);nn(n.eventQueue_,e,k),es(n,s,m,w)});const p=cI(n,e);cc(n,p),nn(n.eventQueue_,p,[])}function yP(n){qh(n,"onDisconnectEvents");const e=Fh(n),t=da();tu(n.onDisconnect_,te(),(s,r)=>{const o=Xb(s,r,n.serverSyncTree_,e);us(t,s,o)});let i=[];tu(t,te(),(s,r)=>{i=i.concat(sc(n.serverSyncTree_,s,r));const o=cI(n,s);cc(n,o)}),n.onDisconnect_=da(),nn(n.eventQueue_,te(),i)}function IP(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&eu(n.onDisconnect_,e),es(n,t,i,s)})}function mm(n,e,t,i){const s=Ae(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&us(n.onDisconnect_,e,s),es(n,i,r,o)})}function EP(n,e,t,i,s){const r=Ae(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,c)=>{o==="ok"&&us(n.onDisconnect_,e,r),es(n,s,o,c)})}function TP(n,e,t,i){if(Qo(t)){Fe("onDisconnect().update() called with empty data.  Don't do anything."),es(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&Ge(t,(o,c)=>{const l=Ae(c);us(n.onDisconnect_,Ie(e,o),l)}),es(n,i,s,r)})}function vP(n,e,t){let i;z(e._path)===".info"?i=hm(n.infoSyncTree_,e,t):i=hm(n.serverSyncTree_,e,t),tI(n.eventQueue_,e._path,i)}function wP(n,e,t){let i;z(e._path)===".info"?i=au(n.infoSyncTree_,e,t):i=au(n.serverSyncTree_,e,t),tI(n.eventQueue_,e._path,i)}function AP(n){n.persistentConnection_&&n.persistentConnection_.interrupt(hP)}function qh(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Fe(t,...e)}function es(n,e,t,i){e&&ls(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function sI(n,e,t){return Ch(n.serverSyncTree_,e,t)||q.EMPTY_NODE}function Bh(n,e=n.transactionQueueTree_){if(e||lc(n,e),hs(e)){const t=oI(n,e);O(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&RP(n,eo(e),t)}else Yy(e)&&oc(e,t=>{Bh(n,t)})}function RP(n,e,t){const i=t.map(u=>u.currentWriteId),s=sI(n,e,i);let r=s;const o=s.hash();for(let u=0;u<t.length;u++){const f=t[u];O(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=nt(e,f.path);r=r.updateChild(p,f.currentOutputSnapshotRaw)}const c=r.val(!0),l=e;n.server_.put(l.toString(),c,u=>{qh(n,"transaction put response",{path:l.toString(),status:u});let f=[];if(u==="ok"){const p=[];for(let m=0;m<t.length;m++)t[m].status=2,f=f.concat(Zn(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&p.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();lc(n,Lh(n.transactionQueueTree_,e)),Bh(n,n.transactionQueueTree_),nn(n.eventQueue_,e,f);for(let m=0;m<p.length;m++)ls(p[m])}else{if(u==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{ot("transaction at "+l.toString()+" failed: "+u);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=u}cc(n,e)}},o)}function cc(n,e){const t=rI(n,e),i=eo(t),s=oI(n,t);return SP(n,s,i),i}function SP(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const l=e[c],u=nt(t,l.path);let f=!1,p;if(O(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,p=l.abortReason,s=s.concat(Zn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=dP)f=!0,p="maxretry",s=s.concat(Zn(n.serverSyncTree_,l.currentWriteId,!0));else{const m=sI(n,l.path,o);l.currentInputSnapshot=m;const w=e[c].update(m.val());if(w!==void 0){ac("transaction failed: Data returned ",w,l.path);let C=Ae(w);typeof w=="object"&&w!=null&&Lt(w,".priority")||(C=C.updatePriority(m.getPriority()));const N=l.currentWriteId,$=Fh(n),H=Ky(C,m,$);l.currentOutputSnapshotRaw=C,l.currentOutputSnapshotResolved=H,l.currentWriteId=iI(n),o.splice(o.indexOf(N),1),s=s.concat(jy(n.serverSyncTree_,l.path,H,l.currentWriteId,l.applyLocally)),s=s.concat(Zn(n.serverSyncTree_,N,!0))}else f=!0,p="nodata",s=s.concat(Zn(n.serverSyncTree_,l.currentWriteId,!0))}nn(n.eventQueue_,t,s),s=[],f&&(e[c].status=2,(function(m){setTimeout(m,Math.floor(0))})(e[c].unwatcher),e[c].onComplete&&(p==="nodata"?i.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):i.push(()=>e[c].onComplete(new Error(p),!1,null))))}lc(n,n.transactionQueueTree_);for(let c=0;c<i.length;c++)ls(i[c]);Bh(n,n.transactionQueueTree_)}function rI(n,e){let t,i=n.transactionQueueTree_;for(t=z(e);t!==null&&hs(i)===void 0;)i=Lh(i,t),e=re(e),t=z(e);return i}function oI(n,e){const t=[];return aI(n,e,t),t.sort((i,s)=>i.order-s.order),t}function aI(n,e,t){const i=hs(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);oc(e,s=>{aI(n,s,t)})}function lc(n,e){const t=hs(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Qy(e,t.length>0?t:void 0)}oc(e,i=>{lc(n,i)})}function cI(n,e){const t=eo(rI(n,e)),i=Lh(n.transactionQueueTree_,e);return Zb(i,s=>{cl(n,s)}),cl(n,i),Xy(i,s=>{cl(n,s)}),t}function cl(n,e){const t=hs(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(O(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(O(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Zn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Qy(e,void 0):t.length=r+1,nn(n.eventQueue_,eo(e),s);for(let o=0;o<i.length;o++)ls(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function bP(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ot(`Invalid query segment '${t}' in query '${n}'`)}return e}const gm=function(n,e){const t=PP(n),i=t.namespace;t.domain==="firebase.com"&&tn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||VS();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new py(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new ie(t.pathString)}},PP=function(n){let e="",t="",i="",s="",r="",o=!0,c="https",l=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(c=n.substring(0,u-1),n=n.substring(u+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(s=CP(n.substring(f,p)));const m=bP(n.substring(Math.min(n.length,p)));u=e.indexOf(":"),u>=0?(o=c==="https"||c==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const w=e.slice(0,u);if(w.toLowerCase()==="localhost")t="localhost";else if(w.split(".").length<=2)t=w;else{const C=e.indexOf(".");i=e.substring(0,C).toLowerCase(),t=e.substring(C+1),r=i}"ns"in m&&(r=m.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:c,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Le(this.snapshot.exportVal())}}class kP{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class OP{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Ut;return IP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Xs("OnDisconnect.remove",this._path);const e=new Ut;return mm(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Xs("OnDisconnect.set",this._path),lu("OnDisconnect.set",e,this._path);const t=new Ut;return mm(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Xs("OnDisconnect.setWithPriority",this._path),lu("OnDisconnect.setWithPriority",e,this._path),oP("OnDisconnect.setWithPriority",t);const i=new Ut;return EP(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){Xs("OnDisconnect.update",this._path),rP("OnDisconnect.update",e,this._path);const t=new Ut;return TP(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class Wh{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return K(this._path)?null:ph(this._path)}get ref(){return new Bn(this._repo,this._path)}get _queryIdentifier(){const e=Zp(this._queryParams),t=uh(e);return t==="{}"?"default":t}get _queryObject(){return Zp(this._queryParams)}isEqual(e){if(e=x(e),!(e instanceof Wh))return!1;const t=this._repo===e._repo,i=mh(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+IC(this._path)}}class Bn extends Wh{constructor(e,t){super(e,t,new Ih,!1)}get parent(){const e=wy(this._path);return e===null?null:new Bn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ea{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ie(e),i=uu(this.ref,e);return new Ea(this._node.getChild(t),i,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Ea(s,uu(this.ref,i),fe)))}hasChild(e){const t=new ie(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Po(n,e){return n=x(n),n._checkNotDeleted("ref"),e!==void 0?uu(n._root,e):n._root}function uu(n,e){return n=x(n),z(n._path)===null?aP("child","path",e):eI("child","path",e),new Bn(n._repo,Ie(n._path,e))}function MP(n){return n=x(n),new OP(n._repo,n._path)}function _m(n,e){n=x(n),Xs("set",n._path),lu("set",e,n._path);const t=new Ut;return _P(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class $h{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new NP("value",this,new Ea(e.snapshotNode,new Bn(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new kP(this,e,t):null}matches(e){return e instanceof $h?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function LP(n,e,t,i,s){const r=new DP(t,void 0),o=new $h(r);return vP(n._repo,n,o),()=>wP(n._repo,n,o)}function ym(n,e,t,i){return LP(n,"value",e)}Nb(Bn);Vb(Bn);/**
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
 */const VP="FIREBASE_DATABASE_EMULATOR_HOST",hu={};let xP=!1;function FP(n,e,t,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=Fn(r);n.repoInfo_=new py(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function UP(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Fe("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=gm(r,s),c=o.repoInfo,l;typeof process<"u"&&Lp&&(l=Lp[VP]),l?(r=`http://${l}?ns=${c.namespace}`,o=gm(r,s),c=o.repoInfo):o.repoInfo.secure;const u=new zS(n.name,n.options,e);cP("Invalid Firebase Database URL",o),K(o.path)||tn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=BP(c,n,u,new GS(n,t));return new WP(f,n)}function qP(n,e){const t=hu[e];(!t||t[n.key]!==n)&&tn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),AP(n),delete t[n.key]}function BP(n,e,t,i){let s=hu[e.name];s||(s={},hu[e.name]=s);let r=s[n.toURLString()];return r&&tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new fP(n,xP,t,i),s[n.toURLString()]=r,r}class WP{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bn(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(qP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tn("Cannot call "+e+" on a deleted database.")}}function $P(n=wu(),e){const t=is(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=ag("database");i&&lI(t,...i)}return t}function lI(n,e,t,i={}){n=x(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&bn(i,r.repoInfo_.emulatorOptions))return;tn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Wo(Wo.OWNER);else if(i.mockUserToken){const c=typeof i.mockUserToken=="string"?i.mockUserToken:ug(i.mockUserToken,n.app.options.projectId);o=new Wo(c)}Fn(e)&&(Iu(e),Eu("Database",!0)),FP(r,s,i,o)}/**
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
 */function jP(n){NS(mi),vt(new gt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return UP(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),st(Vp,xp,n),st(Vp,xp,"esm2020")}/**
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
 */const HP={".sv":"timestamp"};function ll(){return HP}Qt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Qt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};jP();/**
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
 */const GP={PHONE:"phone",TOTP:"totp"},zP={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},KP={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},QP={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},YP={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function XP(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function uI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JP=XP,hI=uI,dI=new fi("auth","Firebase",uI()),ZP={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
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
 */const Ta=new Br("@firebase/auth");function eN(n,...e){Ta.logLevel<=Y.WARN&&Ta.warn(`Auth (${mi}): ${n}`,...e)}function $o(n,...e){Ta.logLevel<=Y.ERROR&&Ta.error(`Auth (${mi}): ${n}`,...e)}/**
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
 */function at(n,...e){throw Hh(n,...e)}function Qe(n,...e){return Hh(n,...e)}function jh(n,e,t){const i={...hI(),[e]:t};return new fi("auth","Firebase",i).create(e,{appName:n.name})}function Ve(n){return jh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ds(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&at(n,"argument-error"),jh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hh(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return dI.create(n,...e)}function D(n,e,...t){if(!n)throw Hh(e,...t)}function bt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $o(e),new Error(e)}function sn(n,e){n||bt(e)}/**
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
 */function Or(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Gh(){return Im()==="http:"||Im()==="https:"}function Im(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function tN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gh()||hg()||"connection"in navigator)?navigator.onLine:!0}function nN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class to{constructor(e,t){this.shortDelay=e,this.longDelay=t,sn(t>e,"Short delay should be less than long delay!"),this.isMobile=Tu()||dg()}get(){return tN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zh(n,e){sn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class fI{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rN=new to(3e4,6e4);function ue(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function he(n,e,t,i,s={}){return pI(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=pi({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...r};return $T()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Fn(n.emulatorConfig.host)&&(u.credentials="include"),fI.fetch()(await mI(n,n.config.apiHost,t,c),u)})}async function pI(n,e,t){n._canInitEmulator=!1;const i={...iN,...e};try{const s=new aN(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Js(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Js(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Js(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Js(n,"user-disabled",o);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jh(n,f,u);at(n,f)}}catch(s){if(s instanceof At)throw s;at(n,"network-request-failed",{message:String(s)})}}async function an(n,e,t,i,s={}){const r=await he(n,e,t,i,s);return"mfaPendingCredential"in r&&at(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function mI(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?zh(n.config,s):`${n.config.apiScheme}://${s}`;return sN.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function oN(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Qe(this.auth,"network-request-failed")),rN.get())})}}function Js(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Qe(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */function Em(n){return n!==void 0&&n.getResponse!==void 0}function Tm(n){return n!==void 0&&n.enterprise!==void 0}class gI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return oN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function cN(n){return(await he(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function _I(n,e){return he(n,"GET","/v2/recaptchaConfig",ue(n,e))}/**
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
 */async function lN(n,e){return he(n,"POST","/v1/accounts:delete",e)}async function uN(n,e){return he(n,"POST","/v1/accounts:update",e)}async function va(n,e){return he(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ur(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function hN(n,e=!1){return x(n).getIdToken(e)}async function yI(n,e=!1){const t=x(n),i=await t.getIdToken(e),s=uc(i);D(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ur(ul(s.auth_time)),issuedAtTime:ur(ul(s.iat)),expirationTime:ur(ul(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ul(n){return Number(n)*1e3}function uc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ko(t);return s?JSON.parse(s):($o("Failed to decode base64 JWT payload"),null)}catch(s){return $o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vm(n){const e=uc(n);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof At&&dN(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function dN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class fN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class du{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ur(this.lastLoginAt),this.creationTime=ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mr(n){var p;const e=n.auth,t=await n.getIdToken(),i=await rn(n,va(e,{idToken:t}));D(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(p=s.providerUserInfo)!=null&&p.length?EI(s.providerUserInfo):[],o=pN(n.providerData,r),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new du(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,f)}async function II(n){const e=x(n);await Mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pN(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function EI(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function mN(n,e){const t=await pI(n,{},async()=>{const i=pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await mI(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&Fn(n.emulatorConfig.host)&&(l.credentials="include"),fI.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function gN(n,e){return he(n,"POST","/v2/accounts:revokeToken",ue(n,e))}/**
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
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){D(e.length!==0,"internal-error");const t=vm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await mN(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Ui;return i&&(D(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(D(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(D(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
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
 */function gn(n,e){D(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Et{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new fN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new du(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await rn(this,this.stsTokenManager.getToken(this.auth,e));return D(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yI(this,e)}reload(){return II(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Et({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Mr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(de(this.auth.app))return Promise.reject(Ve(this.auth));const e=await this.getIdToken();return await rn(this,lN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:w,providerData:C,stsTokenManager:k}=t;D(p&&k,e,"internal-error");const N=Ui.fromJSON(this.name,k);D(typeof p=="string",e,"internal-error"),gn(i,e.name),gn(s,e.name),D(typeof m=="boolean",e,"internal-error"),D(typeof w=="boolean",e,"internal-error"),gn(r,e.name),gn(o,e.name),gn(c,e.name),gn(l,e.name),gn(u,e.name),gn(f,e.name);const $=new Et({uid:p,auth:e,email:s,emailVerified:m,displayName:i,isAnonymous:w,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:N,createdAt:u,lastLoginAt:f});return C&&Array.isArray(C)&&($.providerData=C.map(H=>({...H}))),l&&($._redirectEventId=l),$}static async _fromIdTokenResponse(e,t,i=!1){const s=new Ui;s.updateFromServerResponse(t);const r=new Et({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Mr(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];D(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?EI(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new Ui;c.updateFromIdToken(i);const l=new Et({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new du(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
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
 */const wm=new Map;function Ht(n){sn(n instanceof Function,"Expected a class definition");let e=wm.get(n);return e?(sn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,wm.set(n,e),e)}/**
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
 */class TI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}TI.type="NONE";const fu=TI;/**
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
 */function jo(n,e,t){return`firebase:${n}:${e}:${t}`}class qi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=jo(this.userKey,s.apiKey,r),this.fullPersistenceKey=jo("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await va(this.auth,{idToken:e}).catch(()=>{});return t?Et._fromGetAccountInfoResponse(this.auth,t,e):null}return Et._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new qi(Ht(fu),e,i);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||Ht(fu);const o=jo(i,e.config.apiKey,e.name);let c=null;for(const u of t)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await va(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Et._fromGetAccountInfoResponse(e,m,f)}else p=Et._fromJSON(e,f);u!==r&&(c=p),r=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new qi(r,e,i):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new qi(r,e,i))}}/**
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
 */function Am(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(RI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CI(e))return"Blackberry";if(bI(e))return"Webos";if(wI(e))return"Safari";if((e.includes("chrome/")||AI(e))&&!e.includes("edge/"))return"Chrome";if(SI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function vI(n=He()){return/firefox\//i.test(n)}function wI(n=He()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AI(n=He()){return/crios\//i.test(n)}function RI(n=He()){return/iemobile/i.test(n)}function SI(n=He()){return/android/i.test(n)}function CI(n=He()){return/blackberry/i.test(n)}function bI(n=He()){return/webos/i.test(n)}function Kh(n=He()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _N(n=He()){var e;return Kh(n)&&!!((e=window.navigator)!=null&&e.standalone)}function yN(){return jT()&&document.documentMode===10}function PI(n=He()){return Kh(n)||SI(n)||bI(n)||CI(n)||/windows phone/i.test(n)||RI(n)}/**
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
 */function NI(n,e=[]){let t;switch(n){case"Browser":t=Am(He());break;case"Worker":t=`${Am(He())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mi}/${i}`}/**
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
 */class IN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function EN(n,e={}){return he(n,"GET","/v2/passwordPolicy",ue(n,e))}/**
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
 */const TN=6;class vN{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??TN,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class wN{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rm(this),this.idTokenSubscription=new Rm(this),this.beforeStateQueue=new IN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ht(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await qi.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await va(this,{idToken:e}),i=await Et._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(de(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(de(this.app))return Promise.reject(Ve(this));const t=e?x(e):null;return t&&D(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return de(this.app)?Promise.reject(Ve(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return de(this.app)?Promise.reject(Ve(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EN(this),t=new vN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await gN(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ht(e)||this._popupRedirectResolver;D(t,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[Ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=NI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(de(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&eN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _e(n){return x(n)}class Rm{constructor(e){this.auth=e,this.observer=null,this.addObserver=ev(t=>this.observer=t)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let no={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AN(n){no=n}function Qh(n){return no.loadJS(n)}function RN(){return no.recaptchaV2Script}function SN(){return no.recaptchaEnterpriseScript}function CN(){return no.gapiScript}function kI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const bN=500,PN=6e4,No=1e12;class NN{constructor(e){this.auth=e,this.counter=No,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new ON(e,this.auth.name,t||{})),this.counter++,i}reset(e){var i;const t=e||No;(i=this._widgets.get(t))==null||i.delete(),this._widgets.delete(t)}getResponse(e){var i;const t=e||No;return((i=this._widgets.get(t))==null?void 0:i.getResponse())||""}async execute(e){var i;const t=e||No;return(i=this._widgets.get(t))==null||i.execute(),""}}class kN{constructor(){this.enterprise=new DN}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class DN{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ON{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;D(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=MN(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},PN)},bN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function MN(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const LN="recaptcha-enterprise",hr="NO_RECAPTCHA";class DI{constructor(e){this.type=LN,this.auth=_e(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{_I(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new gI(l);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(r,o,c){const l=window.grecaptcha;Tm(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(hr)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kN().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!t&&Tm(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=SN();l.length!==0&&(l+=c),Qh(l).then(()=>{s(c,r,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function xs(n,e,t,i=!1,s=!1){const r=new DI(n);let o;if(s)o=hr;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Sn(n,e,t,i,s){var r,o;if(s==="EMAIL_PASSWORD_PROVIDER")if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await xs(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await xs(n,e,t,t==="getOobCode");return i(n,l)}else return Promise.reject(c)});else if(s==="PHONE_PROVIDER")if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const c=await xs(n,e,t);return i(n,c).catch(async l=>{var u;if(((u=n._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const f=await xs(n,e,t,!1,!0);return i(n,f)}return Promise.reject(l)})}else{const c=await xs(n,e,t,!1,!0);return i(n,c)}else return Promise.reject(s+" provider is not supported.")}async function OI(n){const e=_e(n),t=await _I(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new gI(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new DI(e).verify()}/**
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
 */function MI(n,e){const t=is(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(bn(r,e??{}))return s;at(s,"already-initialized")}return t.initialize({options:e})}function VN(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ht);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Yh(n,e,t){const i=_e(n);D(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=LI(e),{host:o,port:c}=xN(e),l=c===null?"":`:${c}`,u={url:`${r}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){D(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),D(bn(u,i.config.emulator)&&bn(f,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=u,i.emulatorConfig=f,i.settings.appVerificationDisabledForTesting=!0,Fn(o)?(Iu(`${r}//${o}${l}`),Eu("Auth",!0)):s||FN()}function LI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function xN(n){const e=LI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Sm(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Sm(o)}}}function Sm(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function FN(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class fs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,t){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}/**
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
 */async function VI(n,e){return he(n,"POST","/v1/accounts:resetPassword",ue(n,e))}async function UN(n,e){return he(n,"POST","/v1/accounts:update",e)}async function qN(n,e){return he(n,"POST","/v1/accounts:signUp",e)}async function BN(n,e){return he(n,"POST","/v1/accounts:update",ue(n,e))}/**
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
 */async function WN(n,e){return an(n,"POST","/v1/accounts:signInWithPassword",ue(n,e))}async function hc(n,e){return he(n,"POST","/v1/accounts:sendOobCode",ue(n,e))}async function $N(n,e){return hc(n,e)}async function jN(n,e){return hc(n,e)}async function HN(n,e){return hc(n,e)}async function GN(n,e){return hc(n,e)}/**
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
 */async function zN(n,e){return an(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}async function KN(n,e){return an(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}/**
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
 */class ts extends fs{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ts(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ts(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sn(e,t,"signInWithPassword",WN,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return zN(e,{email:this._email,oobCode:this._password});default:at(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sn(e,i,"signUpPassword",qN,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return KN(e,{idToken:t,email:this._email,oobCode:this._password});default:at(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Yt(n,e){return an(n,"POST","/v1/accounts:signInWithIdp",ue(n,e))}/**
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
 */const QN="http://localhost";class Mt extends fs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):at("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new Mt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Yt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Yt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yt(e,t)}buildRequest(){const e={requestUri:QN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pi(t)}return e}}/**
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
 */async function Cm(n,e){return he(n,"POST","/v1/accounts:sendVerificationCode",ue(n,e))}async function YN(n,e){return an(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,e))}async function XN(n,e){const t=await an(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,e));if(t.temporaryProof)throw Js(n,"account-exists-with-different-credential",t);return t}const JN={USER_NOT_FOUND:"user-not-found"};async function ZN(n,e){const t={...e,operation:"REAUTH"};return an(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,t),JN)}/**
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
 */class Cn extends fs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Cn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Cn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return YN(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return XN(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return ZN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:r}=e;return!i&&!t&&!s&&!r?null:new Cn({verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:r})}}/**
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
 */function ek(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tk(n){const e=Hs(Gs(n)).link,t=e?Hs(Gs(e)).deep_link_id:null,i=Hs(Gs(n)).deep_link_id;return(i?Hs(Gs(i)).link:null)||i||t||e||n}class ps{constructor(e){const t=Hs(Gs(e)),i=t.apiKey??null,s=t.oobCode??null,r=ek(t.mode??null);D(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=tk(e);try{return new ps(t)}catch{return null}}}function nk(n){return ps.parseLink(n)}/**
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
 */class cn{constructor(){this.providerId=cn.PROVIDER_ID}static credential(e,t){return ts._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ps.parseLink(t);return D(i,"argument-error"),ts._fromEmailAndCode(e,i.code,i.tenantId)}}cn.PROVIDER_ID="password";cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ln{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ms extends ln{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class dr extends ms{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return D("providerId"in t&&"signInMethod"in t,"argument-error"),Mt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return D(e.idToken||e.accessToken,"argument-error"),Mt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return dr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return dr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new dr(c)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
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
 */class qt extends ms{constructor(){super("facebook.com")}static credential(e){return Mt._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
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
 */class Bt extends ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mt._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Bt.credential(t,i)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
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
 */class Wt extends ms{constructor(){super("github.com")}static credential(e){return Mt._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
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
 */const ik="http://localhost";class Lr extends fs{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Yt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Yt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,pendingToken:r}=t;return!i||!s||!r||i!==s?null:new Lr(i,r)}static _create(e,t){return new Lr(e,t)}buildRequest(){return{requestUri:ik,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const sk="saml.";class wa extends ln{constructor(e){D(e.startsWith(sk),"argument-error"),super(e)}static credentialFromResult(e){return wa.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return wa.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Lr.fromJSON(e);return D(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return Lr._create(i,t)}catch{return null}}}/**
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
 */class $t extends ms{constructor(){super("twitter.com")}static credential(e,t){return Mt._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return $t.credential(t,i)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
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
 */async function xI(n,e){return an(n,"POST","/v1/accounts:signUp",ue(n,e))}/**
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
 */class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Et._fromIdTokenResponse(e,i,s),o=bm(i);return new _t({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=bm(i);return new _t({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function bm(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function FI(n){var s;if(de(n.app))return Promise.reject(Ve(n));const e=_e(n);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new _t({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await xI(e,{returnSecureToken:!0}),i=await _t._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
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
 */class Aa extends At{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Aa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Aa(e,t,i,s)}}function UI(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Aa._fromErrorAndOperation(n,r,e,i):r})}/**
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
 */function qI(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function rk(n,e){const t=x(n);await dc(!0,t,e);const{providerUserInfo:i}=await uN(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),s=qI(i||[]);return t.providerData=t.providerData.filter(r=>s.has(r.providerId)),s.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Xh(n,e,t=!1){const i=await rn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return _t._forOperation(n,"link",i)}async function dc(n,e,t){await Mr(e);const i=qI(e.providerData),s=n===!1?"provider-already-linked":"no-such-provider";D(i.has(t)===n,e.auth,s)}/**
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
 */async function BI(n,e,t=!1){const{auth:i}=n;if(de(i.app))return Promise.reject(Ve(i));const s="reauthenticate";try{const r=await rn(n,UI(i,s,e,n),t);D(r.idToken,i,"internal-error");const o=uc(r.idToken);D(o,i,"internal-error");const{sub:c}=o;return D(n.uid===c,i,"user-mismatch"),_t._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&at(i,"user-mismatch"),r}}/**
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
 */async function WI(n,e,t=!1){if(de(n.app))return Promise.reject(Ve(n));const i="signIn",s=await UI(n,i,e),r=await _t._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function fc(n,e){return WI(_e(n),e)}async function Jh(n,e){const t=x(n);return await dc(!1,t,e.providerId),Xh(t,e)}async function $I(n,e){return BI(x(n),e)}/**
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
 */async function ok(n,e){return an(n,"POST","/v1/accounts:signInWithCustomToken",ue(n,e))}/**
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
 */async function ak(n,e){if(de(n.app))return Promise.reject(Ve(n));const t=_e(n),i=await ok(t,{token:e,returnSecureToken:!0}),s=await _t._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(s.user),s}/**
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
 */class io{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Zh._fromServerResponse(e,t):"totpInfo"in t?ed._fromServerResponse(e,t):at(e,"internal-error")}}class Zh extends io{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Zh(t)}}class ed extends io{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new ed(t)}}/**
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
 */function pc(n,e,t){var i;D(((i=t.url)==null?void 0:i.length)>0,n,"invalid-continue-uri"),D(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),D(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(D(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(D(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function td(n){const e=_e(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jI(n,e,t){const i=_e(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&pc(i,s,t),await Sn(i,s,"getOobCode",jN,"EMAIL_PASSWORD_PROVIDER")}async function ck(n,e,t){await VI(x(n),{oobCode:e,newPassword:t}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&td(n),i})}async function lk(n,e){await BN(x(n),{oobCode:e})}async function HI(n,e){const t=x(n),i=await VI(t,{oobCode:e}),s=i.requestType;switch(D(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":D(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":D(i.mfaInfo,t,"internal-error");default:D(i.email,t,"internal-error")}let r=null;return i.mfaInfo&&(r=io._fromServerResponse(_e(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:r},operation:s}}async function uk(n,e){const{data:t}=await HI(x(n),e);return t.email}async function hk(n,e,t){if(de(n.app))return Promise.reject(Ve(n));const i=_e(n),o=await Sn(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xI,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&td(n),l}),c=await _t._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function GI(n,e,t){return de(n.app)?Promise.reject(Ve(n)):fc(x(n),cn.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&td(n),i})}/**
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
 */async function dk(n,e,t){const i=_e(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function r(o,c){D(c.handleCodeInApp,i,"argument-error"),c&&pc(i,o,c)}r(s,t),await Sn(i,s,"getOobCode",HN,"EMAIL_PASSWORD_PROVIDER")}function fk(n,e){const t=ps.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function pk(n,e,t){if(de(n.app))return Promise.reject(Ve(n));const i=x(n),s=cn.credentialWithLink(e,t||Or());return D(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),fc(i,s)}/**
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
 */async function mk(n,e){return he(n,"POST","/v1/accounts:createAuthUri",ue(n,e))}/**
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
 */async function gk(n,e){const t=Gh()?Or():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:s}=await mk(x(n),i);return s||[]}async function _k(n,e){const t=x(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&pc(t.auth,s,e);const{email:r}=await $N(t.auth,s);r!==n.email&&await n.reload()}async function yk(n,e,t){const i=x(n),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&pc(i.auth,r,t);const{email:o}=await GN(i.auth,r);o!==n.email&&await n.reload()}/**
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
 */async function Ik(n,e){return he(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Ek(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=x(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await rn(i,Ik(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Tk(n,e){const t=x(n);return de(t.auth.app)?Promise.reject(Ve(t.auth)):KI(t,e,null)}function zI(n,e){return KI(x(n),null,e)}async function KI(n,e,t){const{auth:i}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(r.email=e),t&&(r.password=t);const o=await rn(n,UN(i,r));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function vk(n){var s,r;if(!n)return null;const{providerId:e}=n,t=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},i=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(n!=null&&n.idToken)){const o=(r=(s=uc(n.idToken))==null?void 0:s.firebase)==null?void 0:r.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new Bi(i,c)}}if(!e)return null;switch(e){case"facebook.com":return new wk(i,t);case"github.com":return new Ak(i,t);case"google.com":return new Rk(i,t);case"twitter.com":return new Sk(i,t,n.screenName||null);case"custom":case"anonymous":return new Bi(i,null);default:return new Bi(i,e,t)}}class Bi{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class QI extends Bi{constructor(e,t,i,s){super(e,t,i),this.username=s}}class wk extends Bi{constructor(e,t){super(e,"facebook.com",t)}}class Ak extends QI{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Rk extends Bi{constructor(e,t){super(e,"google.com",t)}}class Sk extends QI{constructor(e,t,i){super(e,"twitter.com",t,i)}}function Ck(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:vk(t)}/**
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
 */function bk(n,e){return x(n).setPersistence(e)}function Pk(n){return OI(n)}async function Nk(n,e){return _e(n).validatePassword(e)}function YI(n,e,t,i){return x(n).onIdTokenChanged(e,t,i)}function XI(n,e,t){return x(n).beforeAuthStateChanged(e,t)}function JI(n,e,t,i){return x(n).onAuthStateChanged(e,t,i)}function kk(n){x(n).useDeviceLanguage()}function Dk(n,e){return x(n).updateCurrentUser(e)}function ZI(n){return x(n).signOut()}function Ok(n,e){return _e(n).revokeAccessToken(e)}async function eE(n){return x(n).delete()}/**
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
 */class ei{constructor(e,t,i){this.type=e,this.credential=t,this.user=i}static _fromIdtoken(e,t){return new ei("enroll",e,t)}static _fromMfaPendingCredential(e){return new ei("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return ei._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((i=e.multiFactorSession)!=null&&i.idToken)return ei._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class nd{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=_e(e),s=t.customData._serverResponse,r=(s.mfaInfo||[]).map(c=>io._fromServerResponse(i,c));D(s.mfaPendingCredential,i,"internal-error");const o=ei._fromMfaPendingCredential(s.mfaPendingCredential);return new nd(o,r,async c=>{const l=await c._process(i,o);delete s.mfaInfo,delete s.mfaPendingCredential;const u={...s,idToken:l.idToken,refreshToken:l.refreshToken};switch(t.operationType){case"signIn":const f=await _t._fromIdTokenResponse(i,t.operationType,u);return await i._updateCurrentUser(f.user),f;case"reauthenticate":return D(t.user,i,"internal-error"),_t._forOperation(t.user,t.operationType,u);default:at(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Mk(n,e){var s;const t=x(n),i=e;return D(e.customData.operationType,t,"argument-error"),D((s=i.customData._serverResponse)==null?void 0:s.mfaPendingCredential,t,"argument-error"),nd._fromError(t,i)}/**
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
 */function Pm(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:start",ue(n,e))}function Lk(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:finalize",ue(n,e))}function Vk(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:start",ue(n,e))}function xk(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:finalize",ue(n,e))}function Fk(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:withdraw",ue(n,e))}class id{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>io._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new id(e)}async getSession(){return ei._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const i=e,s=await this.getSession(),r=await rn(this.user,i._process(this.user.auth,s,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const s=await rn(this.user,Fk(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:r})=>r!==t),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const hl=new WeakMap;function Uk(n){const e=x(n);return hl.has(e)||hl.set(e,id._fromUser(e)),hl.get(e)}const Ra="__sak";/**
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
 */class tE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qk=1e3,Bk=10;class nE extends tE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=PI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);yN()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Bk):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},qk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nE.type="LOCAL";const iE=nE;/**
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
 */const Wk=1e3;function dl(n){var i;const e=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return((i=document.cookie.match(t))==null?void 0:i[1])??null}function fl(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}class sE{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=fl(e);if(window.cookieStore){const i=await window.cookieStore.get(t);return i==null?void 0:i.value}return dl(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const i=fl(e);document.cookie=`${i}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const i=fl(e);if(window.cookieStore){const c=(u=>{const f=u.changed.find(m=>m.name===i);f&&t(f.value),u.deleted.find(m=>m.name===i)&&t(null)}),l=()=>window.cookieStore.removeEventListener("change",c);return this.listenerUnsubscribes.set(t,l),window.cookieStore.addEventListener("change",c)}let s=dl(i);const r=setInterval(()=>{const c=dl(i);c!==s&&(t(c),s=c)},Wk),o=()=>clearInterval(r);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){const i=this.listenerUnsubscribes.get(t);i&&(i(),this.listenerUnsubscribes.delete(t))}}sE.type="COOKIE";const $k=sE;/**
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
 */class rE extends tE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rE.type="SESSION";const sd=rE;/**
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
 */function jk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new mc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,r)),l=await jk(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mc.receivers=[];/**
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
 */function gc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Hk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const u=gc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(m.data.response);break;default:clearTimeout(f),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function we(){return window}function Gk(n){we().location.href=n}/**
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
 */function rd(){return typeof we().WorkerGlobalScope<"u"&&typeof we().importScripts=="function"}async function zk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Qk(){return rd()?self:null}/**
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
 */const oE="firebaseLocalStorageDb",Yk=1,Sa="firebaseLocalStorage",aE="fbase_key";class so{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _c(n,e){return n.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function Xk(){const n=indexedDB.deleteDatabase(oE);return new so(n).toPromise()}function pu(){const n=indexedDB.open(oE,Yk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Sa,{keyPath:aE})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Sa)?e(i):(i.close(),await Xk(),e(await pu()))})})}async function Nm(n,e,t){const i=_c(n,!0).put({[aE]:e,value:t});return new so(i).toPromise()}async function Jk(n,e){const t=_c(n,!1).get(e),i=await new so(t).toPromise();return i===void 0?null:i.value}function km(n,e){const t=_c(n,!0).delete(e);return new so(t).toPromise()}const Zk=800,eD=3;class cE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>eD)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mc._getInstance(Qk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await zk(),!this.activeServiceWorker)return;this.sender=new Hk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pu();return await Nm(e,Ra,"1"),await km(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Nm(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Jk(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>km(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=_c(s,!1).getAll();return new so(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cE.type="LOCAL";const lE=cE;/**
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
 */function Dm(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:start",ue(n,e))}function tD(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:finalize",ue(n,e))}function nD(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:finalize",ue(n,e))}/**
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
 */const pl=kI("rcb"),iD=new to(3e4,6e4);class sD{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=we().grecaptcha)!=null&&e.render)}load(e,t=""){return D(rD(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Em(we().grecaptcha)?Promise.resolve(we().grecaptcha):new Promise((i,s)=>{const r=we().setTimeout(()=>{s(Qe(e,"network-request-failed"))},iD.get());we()[pl]=()=>{we().clearTimeout(r),delete we()[pl];const c=we().grecaptcha;if(!c||!Em(c)){s(Qe(e,"internal-error"));return}const l=c.render;c.render=(u,f)=>{const p=l(u,f);return this.counter++,p},this.hostLanguage=t,i(c)};const o=`${RN()}?${pi({onload:pl,render:"explicit",hl:t})}`;Qh(o).catch(()=>{clearTimeout(r),s(Qe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=we().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function rD(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class oD{async load(e){return new NN(e)}clearedOneInstance(){}}/**
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
 */const fr="recaptcha",aD={theme:"light",type:"image"};class cD{constructor(e,t,i={...aD}){this.parameters=i,this.type=fr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=_e(e),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;D(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new oD:new sD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(s=>{const r=o=>{o&&(this.tokenChangeListeners.delete(r),s(o))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=we()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(Gh()&&!rd(),this.auth,"internal-error"),await lD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await cN(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function lD(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class od{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Cn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function uD(n,e,t){if(de(n.app))return Promise.reject(Ve(n));const i=_e(n),s=await yc(i,e,x(t));return new od(s,r=>fc(i,r))}async function hD(n,e,t){const i=x(n);await dc(!1,i,"phone");const s=await yc(i.auth,e,x(t));return new od(s,r=>Jh(i,r))}async function dD(n,e,t){const i=x(n);if(de(i.auth.app))return Promise.reject(Ve(i.auth));const s=await yc(i.auth,e,x(t));return new od(s,r=>$I(i,r))}async function yc(n,e,t){var i;if(!n._getRecaptchaConfig())try{await OI(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const r=s.session;if("phoneNumber"in s){D(r.type==="enroll",n,"internal-error");const o={idToken:r.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Sn(n,o,"mfaSmsEnrollment",async(f,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===hr){D((t==null?void 0:t.type)===fr,f,"argument-error");const m=await ml(f,p,t);return Pm(f,m)}return Pm(f,p)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{D(r.type==="signin",n,"internal-error");const o=((i=s.multiFactorHint)==null?void 0:i.uid)||s.multiFactorUid;D(o,n,"missing-multi-factor-info");const c={mfaPendingCredential:r.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Sn(n,c,"mfaSmsSignIn",async(p,m)=>{if(m.phoneSignInInfo.captchaResponse===hr){D((t==null?void 0:t.type)===fr,p,"argument-error");const w=await ml(p,m,t);return Dm(p,w)}return Dm(p,m)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const r={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Sn(n,r,"sendVerificationCode",async(u,f)=>{if(f.captchaResponse===hr){D((t==null?void 0:t.type)===fr,u,"argument-error");const p=await ml(u,f,t);return Cm(u,p)}return Cm(u,f)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{t==null||t._reset()}}async function fD(n,e){const t=x(n);if(de(t.auth.app))return Promise.reject(Ve(t.auth));await Xh(t,e)}async function ml(n,e,t){D(t.type===fr,n,"argument-error");const i=await t.verify();D(typeof i=="string",n,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const r=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,c=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:r,recaptchaToken:i,captchaResponse:o,clientType:c,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){const r=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,c=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:r,clientType:o,recaptchaVersion:c}}),s}else return Object.assign(s,{recaptchaToken:i}),s}/**
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
 */class si{constructor(e){this.providerId=si.PROVIDER_ID,this.auth=_e(e)}verifyPhoneNumber(e,t){return yc(this.auth,e,x(t))}static credential(e,t){return Cn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return si.credentialFromTaggedObject(t)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?Cn._fromTokenResponse(t,i):null}}si.PROVIDER_ID="phone";si.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ei(n,e){return e?Ht(e):(D(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ad extends fs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pD(n){return WI(n.auth,new ad(n),n.bypassAuthState)}function mD(n){const{auth:e,user:t}=n;return D(t,e,"internal-error"),BI(t,new ad(n),n.bypassAuthState)}async function gD(n){const{auth:e,user:t}=n;return D(t,e,"internal-error"),Xh(t,new ad(n),n.bypassAuthState)}/**
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
 */class uE{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pD;case"linkViaPopup":case"linkViaRedirect":return gD;case"reauthViaPopup":case"reauthViaRedirect":return mD;default:at(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _D=new to(2e3,1e4);async function yD(n,e,t){if(de(n.app))return Promise.reject(Qe(n,"operation-not-supported-in-this-environment"));const i=_e(n);ds(n,e,ln);const s=Ei(i,t);return new Gt(i,"signInViaPopup",e,s).executeNotNull()}async function ID(n,e,t){const i=x(n);if(de(i.auth.app))return Promise.reject(Qe(i.auth,"operation-not-supported-in-this-environment"));ds(i.auth,e,ln);const s=Ei(i.auth,t);return new Gt(i.auth,"reauthViaPopup",e,s,i).executeNotNull()}async function ED(n,e,t){const i=x(n);ds(i.auth,e,ln);const s=Ei(i.auth,t);return new Gt(i.auth,"linkViaPopup",e,s,i).executeNotNull()}class Gt extends uE{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Gt.currentPopupAction&&Gt.currentPopupAction.cancel(),Gt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_D.get())};e()}}Gt.currentPopupAction=null;/**
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
 */const TD="pendingRedirect",Ho=new Map;class vD extends uE{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ho.get(this.auth._key());if(!e){try{const i=await wD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ho.set(this.auth._key(),e)}return this.bypassAuthState||Ho.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wD(n,e){const t=dE(e),i=hE(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function cd(n,e){return hE(n)._set(dE(e),"true")}function AD(n,e){Ho.set(n._key(),e)}function hE(n){return Ht(n._redirectPersistence)}function dE(n){return jo(TD,n.config.apiKey,n.name)}/**
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
 */function RD(n,e,t){return SD(n,e,t)}async function SD(n,e,t){if(de(n.app))return Promise.reject(Ve(n));const i=_e(n);ds(n,e,ln),await i._initializationPromise;const s=Ei(i,t);return await cd(s,i),s._openRedirect(i,e,"signInViaRedirect")}function CD(n,e,t){return bD(n,e,t)}async function bD(n,e,t){const i=x(n);if(ds(i.auth,e,ln),de(i.auth.app))return Promise.reject(Ve(i.auth));await i.auth._initializationPromise;const s=Ei(i.auth,t);await cd(s,i.auth);const r=await pE(i);return s._openRedirect(i.auth,e,"reauthViaRedirect",r)}function PD(n,e,t){return ND(n,e,t)}async function ND(n,e,t){const i=x(n);ds(i.auth,e,ln),await i.auth._initializationPromise;const s=Ei(i.auth,t);await dc(!1,i,e.providerId),await cd(s,i.auth);const r=await pE(i);return s._openRedirect(i.auth,e,"linkViaRedirect",r)}async function kD(n,e){return await _e(n)._initializationPromise,fE(n,e,!1)}async function fE(n,e,t=!1){if(de(n.app))return Promise.reject(Ve(n));const i=_e(n),s=Ei(i,e),o=await new vD(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function pE(n){const e=gc(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const DD=600*1e3;class OD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!mE(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Om(e))}saveEventToCache(e){this.cachedEventUids.add(Om(e)),this.lastProcessedEventTime=Date.now()}}function Om(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function mE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MD(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mE(n);default:return!1}}/**
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
 */async function LD(n,e={}){return he(n,"GET","/v1/projects",e)}/**
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
 */const VD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xD=/^https?/;async function FD(n){if(n.config.emulator)return;const{authorizedDomains:e}=await LD(n);for(const t of e)try{if(UD(t))return}catch{}at(n,"unauthorized-domain")}function UD(n){const e=Or(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!xD.test(t))return!1;if(VD.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const qD=new to(3e4,6e4);function Mm(){const n=we().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function BD(n){return new Promise((e,t)=>{var s,r,o;function i(){Mm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mm(),t(Qe(n,"network-request-failed"))},timeout:qD.get()})}if((r=(s=we().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=we().gapi)!=null&&o.load)i();else{const c=kI("iframefcb");return we()[c]=()=>{gapi.load?i():t(Qe(n,"network-request-failed"))},Qh(`${CN()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Go=null,e})}let Go=null;function WD(n){return Go=Go||BD(n),Go}/**
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
 */const $D=new to(5e3,15e3),jD="__/auth/iframe",HD="emulator/auth/iframe",GD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KD(n){const e=n.config;D(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zh(e,HD):`https://${n.config.authDomain}/${jD}`,i={apiKey:e.apiKey,appName:n.name,v:mi},s=zD.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${pi(i).slice(1)}`}async function QD(n){const e=await WD(n),t=we().gapi;return D(t,n,"internal-error"),e.open({where:document.body,url:KD(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GD,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Qe(n,"network-request-failed"),c=we().setTimeout(()=>{r(o)},$D.get());function l(){we().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const YD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XD=500,JD=600,ZD="_blank",e0="http://localhost";class Lm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function t0(n,e,t,i=XD,s=JD){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...YD,width:i.toString(),height:s.toString(),top:r,left:o},u=He().toLowerCase();t&&(c=AI(u)?ZD:t),vI(u)&&(e=e||e0,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[w,C])=>`${m}${w}=${C},`,"");if(_N(u)&&c!=="_self")return n0(e||"",c),new Lm(null);const p=window.open(e||"",c,f);D(p,n,"popup-blocked");try{p.focus()}catch{}return new Lm(p)}function n0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const i0="__/auth/handler",s0="emulator/auth/handler",r0=encodeURIComponent("fac");async function Vm(n,e,t,i,s,r){D(n.config.authDomain,n,"auth-domain-config-required"),D(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:mi,eventId:s};if(e instanceof ln){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Qo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ms){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),u=l?`#${r0}=${encodeURIComponent(l)}`:"";return`${o0(n)}?${pi(c).slice(1)}${u}`}function o0({config:n}){return n.emulator?zh(n,s0):`https://${n.authDomain}/${i0}`}/**
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
 */const gl="webStorageSupport";class a0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sd,this._completeRedirectFn=fE,this._overrideRedirectResult=AD}async _openPopup(e,t,i,s){var o;sn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Vm(e,t,i,Or(),s);return t0(e,r,gc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Vm(e,t,i,Or(),s);return Gk(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(sn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await QD(e),i=new OD(e);return t.register("authEvent",s=>(D(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gl,{type:gl},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[gl];r!==void 0&&t(!!r),at(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=FD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return PI()||wI()||Kh()}}const gE=a0;class _E{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return bt("unexpected MultiFactorSessionType")}}}class ld extends _E{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ld(e)}_finalizeEnroll(e,t,i){return Lk(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return tD(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class yE{constructor(){}static assertion(e){return ld._fromCredential(e)}}yE.FACTOR_ID="phone";class IE{static assertionForEnrollment(e,t){return Vr._fromSecret(e,t)}static assertionForSignIn(e,t){return Vr._fromEnrollmentId(e,t)}static async generateSecret(e){var s;const t=e;D(typeof((s=t.user)==null?void 0:s.auth)<"u","internal-error");const i=await Vk(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Ic._fromStartTotpMfaEnrollmentResponse(i,t.user.auth)}}IE.FACTOR_ID="totp";class Vr extends _E{constructor(e,t,i){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=i}static _fromSecret(e,t){return new Vr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Vr(t,e)}async _finalizeEnroll(e,t,i){return D(typeof this.secret<"u",e,"argument-error"),xk(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){D(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const i={verificationCode:this.otp};return nD(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i})}}class Ic{constructor(e,t,i,s,r,o,c){this.sessionInfo=o,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Ic(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var s;let i=!1;return(ko(e)||ko(t))&&(i=!0),i&&(ko(e)&&(e=((s=this.auth.currentUser)==null?void 0:s.email)||"unknownuser"),ko(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ko(n){return typeof n>"u"||(n==null?void 0:n.length)===0}var xm="@firebase/auth",Fm="1.11.1";/**
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
 */class c0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function l0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function u0(n){vt(new gt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:NI(n)},u=new wN(i,s,r,l);return VN(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),vt(new gt("auth-internal",e=>{const t=_e(e.getProvider("auth").getImmediate());return(i=>new c0(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),st(xm,Fm,l0(n)),st(xm,Fm,"esm2020")}/**
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
 */const h0=300,d0=lg("authIdTokenMaxAge")||h0;let Um=null;const f0=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>d0)return;const s=t==null?void 0:t.token;Um!==s&&(Um=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function EE(n=wu()){const e=is(n,"auth");if(e.isInitialized())return e.getImmediate();const t=MI(n,{popupRedirectResolver:gE,persistence:[lE,iE,sd]}),i=lg("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=f0(r.toString());XI(t,o,()=>o(t.currentUser)),YI(t,c=>o(c))}}const s=og("auth");return s&&Yh(t,`http://${s}`),t}function p0(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}AN({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Qe("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",p0().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});u0("Browser");const m0=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:YP,ActionCodeURL:ps,AuthCredential:fs,AuthErrorCodes:ZP,EmailAuthCredential:ts,EmailAuthProvider:cn,FacebookAuthProvider:qt,FactorId:GP,GithubAuthProvider:Wt,GoogleAuthProvider:Bt,OAuthCredential:Mt,OAuthProvider:dr,OperationType:QP,PhoneAuthCredential:Cn,PhoneAuthProvider:si,PhoneMultiFactorGenerator:yE,ProviderId:zP,RecaptchaVerifier:cD,SAMLAuthProvider:wa,SignInMethod:KP,TotpMultiFactorGenerator:IE,TotpSecret:Ic,TwitterAuthProvider:$t,applyActionCode:lk,beforeAuthStateChanged:XI,browserCookiePersistence:$k,browserLocalPersistence:iE,browserPopupRedirectResolver:gE,browserSessionPersistence:sd,checkActionCode:HI,confirmPasswordReset:ck,connectAuthEmulator:Yh,createUserWithEmailAndPassword:hk,debugErrorMap:JP,deleteUser:eE,fetchSignInMethodsForEmail:gk,getAdditionalUserInfo:Ck,getAuth:EE,getIdToken:hN,getIdTokenResult:yI,getMultiFactorResolver:Mk,getRedirectResult:kD,inMemoryPersistence:fu,indexedDBLocalPersistence:lE,initializeAuth:MI,initializeRecaptchaConfig:Pk,isSignInWithEmailLink:fk,linkWithCredential:Jh,linkWithPhoneNumber:hD,linkWithPopup:ED,linkWithRedirect:PD,multiFactor:Uk,onAuthStateChanged:JI,onIdTokenChanged:YI,parseActionCodeURL:nk,prodErrorMap:hI,reauthenticateWithCredential:$I,reauthenticateWithPhoneNumber:dD,reauthenticateWithPopup:ID,reauthenticateWithRedirect:CD,reload:II,revokeAccessToken:Ok,sendEmailVerification:_k,sendPasswordResetEmail:jI,sendSignInLinkToEmail:dk,setPersistence:bk,signInAnonymously:FI,signInWithCredential:fc,signInWithCustomToken:ak,signInWithEmailAndPassword:GI,signInWithEmailLink:pk,signInWithPhoneNumber:uD,signInWithPopup:yD,signInWithRedirect:RD,signOut:ZI,unlink:rk,updateCurrentUser:Dk,updateEmail:Tk,updatePassword:zI,updatePhoneNumber:fD,updateProfile:Ek,useDeviceLanguage:kk,validatePassword:Nk,verifyBeforeUpdateEmail:yk,verifyPasswordResetCode:uk},Symbol.toStringTag,{value:"Module"})),TE="@firebase/installations",ud="0.6.19";/**
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
 */const vE=1e4,wE=`w:${ud}`,AE="FIS_v2",g0="https://firebaseinstallations.googleapis.com/v1",_0=3600*1e3,y0="installations",I0="Installations";/**
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
 */const E0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},hi=new fi(y0,I0,E0);function RE(n){return n instanceof At&&n.code.includes("request-failed")}/**
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
 */function SE({projectId:n}){return`${g0}/projects/${n}/installations`}function CE(n){return{token:n.token,requestStatus:2,expiresIn:v0(n.expiresIn),creationTime:Date.now()}}async function bE(n,e){const i=(await e.json()).error;return hi.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function PE({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function T0(n,{refreshToken:e}){const t=PE(n);return t.append("Authorization",w0(e)),t}async function NE(n){const e=await n();return e.status>=500&&e.status<600?n():e}function v0(n){return Number(n.replace("s","000"))}function w0(n){return`${AE} ${n}`}/**
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
 */async function A0({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=SE(n),s=PE(n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:AE,appId:n.appId,sdkVersion:wE},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await NE(()=>fetch(i,c));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:CE(u.authToken)}}else throw await bE("Create Installation",l)}/**
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
 */function kE(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function R0(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const S0=/^[cdef][\w-]{21}$/,mu="";function C0(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=b0(n);return S0.test(t)?t:mu}catch{return mu}}function b0(n){return R0(n).substr(0,22)}/**
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
 */function Ec(n){return`${n.appName}!${n.appId}`}/**
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
 */const DE=new Map;function OE(n,e){const t=Ec(n);ME(t,e),P0(t,e)}function ME(n,e){const t=DE.get(n);if(t)for(const i of t)i(e)}function P0(n,e){const t=N0();t&&t.postMessage({key:n,fid:e}),k0()}let ti=null;function N0(){return!ti&&"BroadcastChannel"in self&&(ti=new BroadcastChannel("[Firebase] FID Change"),ti.onmessage=n=>{ME(n.data.key,n.data.fid)}),ti}function k0(){DE.size===0&&ti&&(ti.close(),ti=null)}/**
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
 */const D0="firebase-installations-database",O0=1,di="firebase-installations-store";let _l=null;function hd(){return _l||(_l=yg(D0,O0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(di)}}})),_l}async function Ca(n,e){const t=Ec(n),s=(await hd()).transaction(di,"readwrite"),r=s.objectStore(di),o=await r.get(t);return await r.put(e,t),await s.done,(!o||o.fid!==e.fid)&&OE(n,e.fid),e}async function LE(n){const e=Ec(n),i=(await hd()).transaction(di,"readwrite");await i.objectStore(di).delete(e),await i.done}async function Tc(n,e){const t=Ec(n),s=(await hd()).transaction(di,"readwrite"),r=s.objectStore(di),o=await r.get(t),c=e(o);return c===void 0?await r.delete(t):await r.put(c,t),await s.done,c&&(!o||o.fid!==c.fid)&&OE(n,c.fid),c}/**
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
 */async function dd(n){let e;const t=await Tc(n.appConfig,i=>{const s=M0(i),r=L0(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===mu?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function M0(n){const e=n||{fid:C0(),registrationStatus:0};return VE(e)}function L0(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(hi.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=V0(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:x0(n)}:{installationEntry:e}}async function V0(n,e){try{const t=await A0(n,e);return Ca(n.appConfig,t)}catch(t){throw RE(t)&&t.customData.serverCode===409?await LE(n.appConfig):await Ca(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function x0(n){let e=await qm(n.appConfig);for(;e.registrationStatus===1;)await kE(100),e=await qm(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await dd(n);return i||t}return e}function qm(n){return Tc(n,e=>{if(!e)throw hi.create("installation-not-found");return VE(e)})}function VE(n){return F0(n)?{fid:n.fid,registrationStatus:0}:n}function F0(n){return n.registrationStatus===1&&n.registrationTime+vE<Date.now()}/**
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
 */async function U0({appConfig:n,heartbeatServiceProvider:e},t){const i=q0(n,t),s=T0(n,t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:wE,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await NE(()=>fetch(i,c));if(l.ok){const u=await l.json();return CE(u)}else throw await bE("Generate Auth Token",l)}function q0(n,{fid:e}){return`${SE(n)}/${e}/authTokens:generate`}/**
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
 */async function fd(n,e=!1){let t;const i=await Tc(n.appConfig,r=>{if(!xE(r))throw hi.create("not-registered");const o=r.authToken;if(!e&&$0(o))return r;if(o.requestStatus===1)return t=B0(n,e),r;{if(!navigator.onLine)throw hi.create("app-offline");const c=H0(r);return t=W0(n,c),c}});return t?await t:i.authToken}async function B0(n,e){let t=await Bm(n.appConfig);for(;t.authToken.requestStatus===1;)await kE(100),t=await Bm(n.appConfig);const i=t.authToken;return i.requestStatus===0?fd(n,e):i}function Bm(n){return Tc(n,e=>{if(!xE(e))throw hi.create("not-registered");const t=e.authToken;return G0(t)?{...e,authToken:{requestStatus:0}}:e})}async function W0(n,e){try{const t=await U0(n,e),i={...e,authToken:t};return await Ca(n.appConfig,i),t}catch(t){if(RE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await LE(n.appConfig);else{const i={...e,authToken:{requestStatus:0}};await Ca(n.appConfig,i)}throw t}}function xE(n){return n!==void 0&&n.registrationStatus===2}function $0(n){return n.requestStatus===2&&!j0(n)}function j0(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+_0}function H0(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function G0(n){return n.requestStatus===1&&n.requestTime+vE<Date.now()}/**
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
 */async function z0(n){const e=n,{installationEntry:t,registrationPromise:i}=await dd(e);return i?i.catch(console.error):fd(e).catch(console.error),t.fid}/**
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
 */async function K0(n,e=!1){const t=n;return await Q0(t),(await fd(t,e)).token}async function Q0(n){const{registrationPromise:e}=await dd(n);e&&await e}/**
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
 */function Y0(n){if(!n||!n.options)throw yl("App Configuration");if(!n.name)throw yl("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw yl(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function yl(n){return hi.create("missing-app-config-values",{valueName:n})}/**
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
 */const FE="installations",X0="installations-internal",J0=n=>{const e=n.getProvider("app").getImmediate(),t=Y0(e),i=is(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Z0=n=>{const e=n.getProvider("app").getImmediate(),t=is(e,FE).getImmediate();return{getId:()=>z0(t),getToken:s=>K0(t,s)}};function eO(){vt(new gt(FE,J0,"PUBLIC")),vt(new gt(X0,Z0,"PRIVATE"))}eO();st(TE,ud);st(TE,ud,"esm2020");/**
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
 */const Wm="analytics",tO="firebase_id",nO="origin",iO=60*1e3,sO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",pd="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ye=new Br("@firebase/analytics");/**
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
 */const rO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},mt=new fi("analytics","Analytics",rO);/**
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
 */function oO(n){if(!n.startsWith(pd)){const e=mt.create("invalid-gtag-resource",{gtagURL:n});return Ye.warn(e.message),""}return n}function UE(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function aO(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function cO(n,e){const t=aO("firebase-js-sdk-policy",{createScriptURL:oO}),i=document.createElement("script"),s=`${pd}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function lO(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function uO(n,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await UE(t)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Ye.error(c)}n("config",s,r)}async function hO(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await UE(t);for(const l of o){const u=c.find(p=>p.measurementId===l),f=u&&e[u.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){Ye.error(r)}}function dO(n,e,t,i){async function s(r,...o){try{if(r==="event"){const[c,l]=o;await hO(n,e,t,c,l)}else if(r==="config"){const[c,l]=o;await uO(n,e,t,i,c,l)}else if(r==="consent"){const[c,l]=o;n("consent",c,l)}else if(r==="get"){const[c,l,u]=o;n("get",c,l,u)}else if(r==="set"){const[c]=o;n("set",c)}else n(r,...o)}catch(c){Ye.error(c)}}return s}function fO(n,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=dO(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function pO(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(pd)&&t.src.includes(n))return t;return null}/**
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
 */const mO=30,gO=1e3;class _O{constructor(e={},t=gO){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const qE=new _O;function yO(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function IO(n){var o;const{appId:e,apiKey:t}=n,i={method:"GET",headers:yO(t)},s=sO.replace("{app-id}",e),r=await fetch(s,i);if(r.status!==200&&r.status!==304){let c="";try{const l=await r.json();(o=l.error)!=null&&o.message&&(c=l.error.message)}catch{}throw mt.create("config-fetch-failed",{httpStatus:r.status,responseMessage:c})}return r.json()}async function EO(n,e=qE,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw mt.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw mt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new wO;return setTimeout(async()=>{c.abort()},iO),BE({appId:i,apiKey:s,measurementId:r},o,c,e)}async function BE(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=qE){var c;const{appId:r,measurementId:o}=n;try{await TO(i,e)}catch(l){if(o)return Ye.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:r,measurementId:o};throw l}try{const l=await IO(n);return s.deleteThrottleMetadata(r),l}catch(l){const u=l;if(!vO(u)){if(s.deleteThrottleMetadata(r),o)return Ye.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:r,measurementId:o};throw l}const f=Number((c=u==null?void 0:u.customData)==null?void 0:c.httpStatus)===503?Rf(t,s.intervalMillis,mO):Rf(t,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return s.setThrottleMetadata(r,p),Ye.debug(`Calling attemptFetch again in ${f} millis`),BE(n,p,i,s)}}function TO(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(mt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function vO(n){if(!(n instanceof At)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class wO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function AO(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,o={...i,send_to:r};n("event",t,o)}}async function RO(n,e,t,i){if(i&&i.global){const s={};for(const r of Object.keys(t))s[`user_properties.${r}`]=t[r];return n("set",s),Promise.resolve()}else{const s=await e;n("config",s,{update:!0,user_properties:t})}}/**
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
 */async function SO(){if(fg())try{await pg()}catch(n){return Ye.warn(mt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ye.warn(mt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function CO(n,e,t,i,s,r,o){const c=EO(n);c.then(m=>{t[m.measurementId]=m.appId,n.options.measurementId&&m.measurementId!==n.options.measurementId&&Ye.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ye.error(m)),e.push(c);const l=SO().then(m=>{if(m)return i.getId()}),[u,f]=await Promise.all([c,l]);pO(r)||cO(r,u.measurementId),s("js",new Date);const p=(o==null?void 0:o.config)??{};return p[nO]="firebase",p.update=!0,f!=null&&(p[tO]=f),s("config",u.measurementId,p),u.measurementId}/**
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
 */class bO{constructor(e){this.app=e}_delete(){return delete Wi[this.app.options.appId],Promise.resolve()}}let Wi={},$m=[];const jm={};let Il="dataLayer",PO="gtag",Hm,md,Gm=!1;function NO(){const n=[];if(hg()&&n.push("This is a browser extension environment."),zT()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=mt.create("invalid-analytics-context",{errorInfo:e});Ye.warn(t.message)}}function kO(n,e,t){NO();const i=n.options.appId;if(!i)throw mt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ye.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mt.create("no-api-key");if(Wi[i]!=null)throw mt.create("already-exists",{id:i});if(!Gm){lO(Il);const{wrappedGtag:r,gtagCore:o}=fO(Wi,$m,jm,Il,PO);md=r,Hm=o,Gm=!0}return Wi[i]=CO(n,$m,jm,e,Hm,Il,t),new bO(n)}function DO(n,e,t){n=x(n),RO(md,Wi[n.app.options.appId],e,t).catch(i=>Ye.error(i))}function OO(n,e,t,i){n=x(n),AO(md,Wi[n.app.options.appId],e,t,i).catch(s=>Ye.error(s))}const zm="@firebase/analytics",Km="0.10.19";function MO(){vt(new gt(Wm,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return kO(i,s,t)},"PUBLIC")),vt(new gt("analytics-internal",n,"PRIVATE")),st(zm,Km),st(zm,Km,"esm2020");function n(e){try{const t=e.getProvider(Wm).getImmediate();return{logEvent:(i,s,r)=>OO(t,i,s,r),setUserProperties:(i,s)=>DO(t,i,s)}}catch(t){throw mt.create("interop-component-reg-failed",{reason:t})}}}MO();const LO=typeof window<"u",gu={apiKey:"AIzaSyAbHjX0oyy9aCU8WDn9x3i-_T7hRMCSfRA",authDomain:"stay-on-the-board.firebaseapp.com",projectId:"stay-on-the-board",storageBucket:"ay-on-the-board.firebasestorage.app",messagingSenderId:"939636937442",appId:"1:939636937442:web:714e1a4566703fed8604bb",measurementId:"G-CPGNM62XZW",databaseURL:void 0},gd=LO&&window.__playwright_test__;let Fs=null,Us=null,qs=null,Bs=null;function RM(){return!!(gu.apiKey&&gu.projectId)}function _d(){if(Fs)return Fs;const n=rw();return n.length>0?Fs=n[0]:Fs=Ig(gu),Fs}function ro(){if(Us)return Us;const n=_d();return Us=hS(n),gd&&(j.init("[FirebaseService] Connecting to Firestore Emulator (127.0.0.1:8080)"),W_(Us,"127.0.0.1",8080)),Us}function VO(){if(qs)return qs;const n=_d();return qs=$P(n),gd&&(j.init("[FirebaseService] Connecting to Realtime DB Emulator (127.0.0.1:9000)"),lI(qs,"127.0.0.1",9e3)),qs}function xO(){if(Bs)return Bs;const n=_d();return Bs=EE(n),gd&&(j.init("[FirebaseService] Connecting to Auth Emulator (127.0.0.1:9099)"),Yh(Bs,"http://127.0.0.1:9099",{disableWarnings:!0})),Bs}const El="rewards",FO={unlockedRewards:{},hasUnseenRewards:!1};var xr;class UO{constructor(){Ds(this,xr,ba(Pa(FO)));Vt(this,"subscribers",new Set);this.loadLocal()}get _state(){return Na(xt(this,xr))}set _state(e){ka(xt(this,xr),e,!0)}get state(){return this._state}init(){this.loadLocal()}loadLocal(){if(!(typeof window>"u")){try{const e=me.getJSON(El);if(e){const t=NT.safeParse(e);t.success?(this._state=t.data,j.info("[RewardsStore] Loaded validated state from storageService")):(j.error("[RewardsStore] Invalid state in storageService, resetting to defaults.",t.error.format()),this.reset())}}catch(e){j.error("[RewardsStore] Failed to load from storageService",e)}this.notifySubscribers()}}saveLocal(){typeof window<"u"&&me.setJSON(El,this._state)}unlock(e){this._state.unlockedRewards[e]||(this._state.unlockedRewards[e]={id:e,unlockedAt:Date.now()},this._state.hasUnseenRewards=!0,this.saveLocal(),this.notifySubscribers(),j.info(`[RewardsStore] Unlocked reward: ${e}`))}markAllAsSeen(){this._state.hasUnseenRewards=!1,this.saveLocal(),this.notifySubscribers()}async syncWithCloud(e){const t=ro(),i=et(t,"rewards",e);try{const s=await Li(i);if(s.exists()){const o=s.data().unlockedRewards||{},c={...this._state.unlockedRewards,...o};this._state.unlockedRewards=c,this.saveLocal(),await An(i,{unlockedRewards:c},{merge:!0})}else await An(i,this._state)}catch(s){j.error("[RewardsStore] Sync error",s)}this.notifySubscribers()}reset(){this._state={unlockedRewards:{},hasUnseenRewards:!1},typeof window<"u"&&me.remove(El),this.notifySubscribers()}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}xr=new WeakMap;const qO=new UO,xe=[];for(let n=0;n<256;++n)xe.push((n+256).toString(16).slice(1));function BO(n,e=0){return(xe[n[e+0]]+xe[n[e+1]]+xe[n[e+2]]+xe[n[e+3]]+"-"+xe[n[e+4]]+xe[n[e+5]]+"-"+xe[n[e+6]]+xe[n[e+7]]+"-"+xe[n[e+8]]+xe[n[e+9]]+"-"+xe[n[e+10]]+xe[n[e+11]]+xe[n[e+12]]+xe[n[e+13]]+xe[n[e+14]]+xe[n[e+15]]).toLowerCase()}let Tl;const WO=new Uint8Array(16);function $O(){if(!Tl){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Tl=crypto.getRandomValues.bind(crypto)}return Tl(WO)}const jO=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Qm={randomUUID:jO};function HO(n,e,t){var s;n=n||{};const i=n.random??((s=n.rng)==null?void 0:s.call(n))??$O();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,BO(i)}function GO(n,e,t){return Qm.randomUUID&&!n?Qm.randomUUID():HO(n)}const zO=4;var Fr;class KO{constructor(){Ds(this,Fr,ba(Pa([])));Vt(this,"timers",new Map);Vt(this,"subscribers",new Set)}get _state(){return Na(xt(this,Fr))}set _state(e){ka(xt(this,Fr),e,!0)}get state(){return this._state}set state(e){this._state=e,this.notifySubscribers()}_arm(e){const t=Math.max(0,e.duration-e.elapsed);e.startTime=Date.now(),e.timerId=setTimeout(()=>this.remove(e.id),t)}add(e){const t=GO(),i=e.duration??4e3,s={...e,id:t,duration:i};if(this._state=[...this._state,s],this._state.length>zO&&this.remove(this._state[0].id),this.notifySubscribers(),i>0){const r={id:t,timerId:null,startTime:0,elapsed:0,duration:i,holds:0};this.timers.set(t,r),this._arm(r)}return t}pause(e){const t=this.timers.get(e);t&&(t.holds+=1,!(t.holds>1||t.timerId===null)&&(clearTimeout(t.timerId),t.elapsed=Math.min(t.elapsed+(Date.now()-t.startTime),t.duration),t.timerId=null))}resume(e){const t=this.timers.get(e);t&&(t.holds>0&&(t.holds-=1),!(t.holds>0||t.timerId!==null)&&this._arm(t))}remove(e){const t=this.timers.get(e);t!=null&&t.timerId&&clearTimeout(t.timerId),this.timers.delete(e),this._state=this._state.filter(i=>i.id!==e),this.notifySubscribers()}clear(){for(const e of this.timers.values())e.timerId&&clearTimeout(e.timerId);this.timers.clear(),this._state=[],this.notifySubscribers()}success(e,t=4e3,i){return this.add({type:"success",messageRaw:e,duration:t,anchor:i})}info(e,t=3e3,i){return this.add({type:"info",messageRaw:e,duration:t,anchor:i})}warning(e,t=5e3,i){return this.add({type:"warning",messageRaw:e,duration:t,anchor:i})}error(e,t=7e3,i){return this.add({type:"error",messageRaw:e,duration:t,anchor:i})}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}Fr=new WeakMap;const QO=new KO;var Ur;class YO{constructor(){Ds(this,Ur,ba(Pa({current:null,minRequired:null,updateAvailable:!1})));Vt(this,"subscribers",new Set)}get _state(){return Na(xt(this,Ur))}set _state(e){ka(xt(this,Ur),e,!0)}get state(){return this._state}setVersion(e){this._state.current=e,this.notifySubscribers()}setMinVersion(e){this._state.minRequired=e,this.notifySubscribers()}setUpdateAvailable(e){this._state.updateAvailable=e,this.notifySubscribers()}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}Ur=new WeakMap;const XO=new YO;class JO{get db(){return ro()}async sendMessage(e,t,i,s){const r=sr(this.db,"rooms",e,"messages");await RS(r,{senderId:t,senderName:i,text:s,createdAt:CS()})}subscribeToChat(e,t){const i=sr(this.db,"rooms",e,"messages"),s=Kl(i,Ql("createdAt","asc"),TS(50));return Bo(s,r=>{const o=[];r.forEach(c=>{const l=c.data();o.push({id:c.id,senderId:l.senderId,senderName:l.senderName,text:l.text,createdAt:l.createdAt?l.createdAt.toMillis():Date.now()})}),t(o)})}}const Ym=new JO,ZO=xn({roomId:tt().nullable(),playerId:tt().nullable()}),Ri={ROOM_ID:"online_roomId",PLAYER_ID:"online_playerId"};class eM{saveSession(e,t){me.set(Ri.ROOM_ID,e),me.set(Ri.PLAYER_ID,t)}getSession(){const e={roomId:me.get(Ri.ROOM_ID),playerId:me.get(Ri.PLAYER_ID)},t=ZO.safeParse(e);return t.success?t.data:{roomId:null,playerId:null}}clearSession(){me.remove(Ri.ROOM_ID),me.remove(Ri.PLAYER_ID)}}const Yn=new eM,vl={reads:0,writes:0,bytesReceived:0,bytesSent:0,lastActivity:null,recentEvents:[],elapsedSeconds:0,isTracking:!1};var qr;class tM{constructor(){Ds(this,qr,ba(Pa({...vl})));Vt(this,"timerInterval",null);Vt(this,"subscribers",new Set)}get _state(){return Na(xt(this,qr))}set _state(e){ka(xt(this,qr),e,!0)}get state(){return this._state}set state(e){this._state=e,this.notifySubscribers()}update(e){this._state=e(this._state),this.notifySubscribers()}reset(){this._state={...vl,isTracking:this._state.isTracking,elapsedSeconds:0},this.notifySubscribers()}startSession(){this.timerInterval&&clearInterval(this.timerInterval),this._state={...vl,isTracking:!0},this.notifySubscribers(),this.timerInterval=setInterval(()=>{this._state.elapsedSeconds++,this.notifySubscribers()},1e3)}stopSession(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),this._state.isTracking=!1,this.notifySubscribers()}recordRead(e,t){const i=this.estimateSize(t),s={type:"read",size:i,source:e,timestamp:Date.now()};this._state.reads++,this._state.bytesReceived+=i,this._state.lastActivity=Date.now(),this._state.recentEvents=[s,...this._state.recentEvents].slice(0,20),this.notifySubscribers()}recordWrite(e,t){const i=this.estimateSize(t),s={type:"write",size:i,source:e,timestamp:Date.now()};this._state.writes++,this._state.bytesSent+=i,this._state.lastActivity=Date.now(),this._state.recentEvents=[s,...this._state.recentEvents].slice(0,20),this.notifySubscribers()}estimateSize(e){try{return new TextEncoder().encode(JSON.stringify(e)).length}catch{return 0}}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}qr=new WeakMap;const Di=new tM;function Do(n,e,t){let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{o(new Error(t))},e)});return Promise.race([n.then(r=>(clearTimeout(i),r)),s])}const nM=xn({seconds:zt(),nanoseconds:zt()});RT([zt(),nM]);const iM=tt().min(2).max(20).trim();xn({id:tt(),name:iM,color:tt().regex(/^#[0-9A-Fa-f]{6}$/).default("#4A90E2"),isReady:_n().default(!1),joinedAt:ht(),isOnline:_n().default(!0),isWatchingReplay:_n().optional(),lastSeen:ht().optional(),isDisconnected:_n().optional(),disconnectStartedAt:ht().optional()}).passthrough();const sM=ST(["waiting","playing","finished"]);xn({boardSize:zt().min(2).max(20).default(4),blockModeEnabled:_n().default(!1),blockOnVisitCount:zt().min(0).default(0),gameMode:tt().nullable().optional(),turnDuration:zt().optional(),settingsLocked:_n().optional()}).passthrough();xn({id:tt(),name:tt().min(1).max(100),hostId:tt(),status:tt(),createdAt:ht(),lastActivity:ht(),isPrivate:ht(),settingsLocked:ht(),allowGuestSettings:ht(),gameState:ht().nullable(),players:ht(),settings:ht(),maxPlayers:ht().optional()}).passthrough();xn({id:tt(),name:tt(),status:sM,playerCount:zt(),maxPlayers:zt(),isPrivate:_n()});const Oo=3e4;class rM{get db(){return ro()}getRoomRef(e){return et(this.db,"rooms",e)}validateRoom(e,t){return{...e,id:t}}async createRoomDoc(e,t){await Do(An(this.getRoomRef(e),t),Oo,"Timeout: Failed to connect to Firebase Firestore.")}async getStatsDoc(){const e=et(this.db,"general","stats"),t=await Li(e);return t.exists()?t.data():null}async updateStatsDoc(e){const t=et(this.db,"general","stats");await An(t,e,{merge:!0})}async getPublicRoomsQuerySnapshot(){const e=Kl(sr(this.db,"rooms"),Dp("isPrivate","==",!1),Ql("lastActivity","desc")),[t,i]=await Promise.all([Do(AS(e),Oo,"Timeout fetching rooms"),this.getStatsDoc().catch(()=>null)]);return[t,i]}subscribeToPublicRooms(e,t){const i=Kl(sr(this.db,"rooms"),Dp("isPrivate","==",!1),Ql("lastActivity","desc"));return Bo(i,e,t)}async deleteRoomDoc(e){await Yl(e)}async getRoomDoc(e){const t=await Do(Li(this.getRoomRef(e)),Oo,"Timeout connecting to room");return t.exists()?this.validateRoom(t.data(),t.id):null}async getRoomDocSimple(e){const t=await Li(this.getRoomRef(e));return t.exists()?this.validateRoom(t.data(),t.id):null}async updatePresenceDoc(e,t,i){const s=et(this.db,"rooms",e,"presence",t);await An(s,{...i,updatedAt:Date.now()},{merge:!0})}async deletePresenceDoc(e,t){const i=et(this.db,"rooms",e,"presence",t);await Yl(i)}subscribeToPresence(e,t){const i=sr(this.db,"rooms",e,"presence");return Bo(i,s=>{const r={};s.forEach(o=>{r[o.id]=o.data()}),t(r)})}async updateRoomDoc(e,t,i=!1){const s=ki(this.getRoomRef(e),t);i?await Do(s,Oo,"Timeout updating room"):await s}subscribeToRoom(e,t,i){return Bo(this.getRoomRef(e),s=>{if(s.exists()){const r=s.data();Di.recordRead("RoomSubscription",r),t(this.validateRoom(r,s.id))}else t(null)},i)}}const ve=new rM;class oM{get rtdb(){return VO()}trackPresence(e,t){const i=Po(this.rtdb,`/status/${e}/${t}`),s=Po(this.rtdb,".info/connected");j.init(`[PresenceService] Setting up presence tracking for ${t} in ${e}`),ym(s,r=>{if(r.val()===!1){j.presence(`[PresenceService] RTDB connection lost for ${t}. Setting disconnected in Firestore.`),ve.updatePresenceDoc(e,t,{isDisconnected:!0});return}j.presence(`[PresenceService] RTDB connected for ${t}. Setting up onDisconnect and online status.`),MP(i).set({state:"offline",last_changed:ll()}).then(()=>{_m(i,{state:"online",last_changed:ll()}),ve.updatePresenceDoc(e,t,{isDisconnected:!1,lastSeen:Date.now()}),j.presence(`[PresenceService] Presence tracking active for ${t}`)})})}async setOffline(e,t){const i=Po(this.rtdb,`/status/${e}/${t}`);await _m(i,{state:"offline",last_changed:ll()}),await ve.updatePresenceDoc(e,t,{isDisconnected:!0})}subscribeToRoomPresence(e,t){const i=Po(this.rtdb,`/status/${e}`);return ym(i,r=>{const o=r.val();t(o||{})})}}const aM=new oM;class cM{get db(){return ro()}async updatePlayer(e,t,i){const s=et(this.db,"rooms",e),r={};for(const o in i)r[`players.${t}.${o}`]=i[o];await ki(s,r),Di.recordWrite("RoomPlayer:updatePlayer",r)}async toggleReady(e,t,i){const s=et(this.db,"rooms",e),r={[`players.${t}.isReady`]:i,lastActivity:Date.now()};await ki(s,r),Di.recordWrite("RoomPlayer:toggleReady",r)}async setWatchingReplay(e,t,i){const s=et(this.db,"rooms",e),r={[`players.${t}.isWatchingReplay`]:i,lastActivity:Date.now()};await ki(s,r),Di.recordWrite("RoomPlayer:setWatchingReplay",r)}async sendHeartbeat(e,t){await ve.updatePresenceDoc(e,t,{lastSeen:Date.now(),isDisconnected:!1}),Di.recordWrite("RoomPlayer:FastHeartbeat",{lastSeen:Date.now()})}async updateLobbyPresence(e,t){const i=et(this.db,"rooms",e),s={[`players.${t}.lastSeen`]:Date.now()};await ki(i,s),Di.recordWrite("RoomPlayer:LobbyHeartbeat",s)}async leaveRoom(e,t){j.init(`[RoomPlayerService] leaveRoom CALLED for ${e} by ${t}`);const i=et(this.db,"rooms",e);await aM.setOffline(e,t).catch(s=>{j.presence(`[RoomPlayerService] Failed to set offline: ${s}`)}),Yn.clearSession();try{const s=await Li(i);if(!s.exists()){j.init(`[RoomPlayerService] Room ${e} does not exist.`);return}const r=s.data(),o={...r.players};if(o[t]){delete o[t],j.init("[RoomPlayerService] Removed player from map. Checking remaining...");const c=Object.values(o),l=c.filter(u=>!u.isDisconnected);if(j.init(`[RoomPlayerService] Remaining: ${c.length}, Active: ${l.length}`),c.length===0)j.init("[RoomPlayerService] Room empty, deleting room."),await Yl(i);else{const u={[`players.${t}`]:SS(),lastActivity:Date.now()};if(r.hostId===t){const p=l[0]||c[0];p&&(u.hostId=p.id,j.init(`[RoomPlayerService] Host migrated to ${p.id}`))}c.length>0&&c.every(p=>p.isReady)&&r.status==="finished"&&(u.status="waiting"),await ki(i,u)}}}catch(s){j.error("[RoomPlayerService] Failed to leave room:",s)}}}const Ws=new cM,Xm=["FIFA","SIMS","NFS","GTA","Peek","CS2","TrackMania","RoadRash","Minecraft","Tetris","Doom","Zelda","Mario","Portal","Halo","Cyberpunk","Witcher","Skyrim","Fortnite","Dota","Sonic","Metroid","PacMan","Diablo","StarCraft"],Jm=["Alik","Noah","Jack","Mateo","Lucas","Sofia","Olivia","Nora","Lucia","Emilia","Liam","Oliver","Elijah","James","William","Benjamin","Henry","Mia","Evelyn","Harper"];function lM(){return Xm[Math.floor(Math.random()*Xm.length)]}function SM(){return Jm[Math.floor(Math.random()*Jm.length)]}const uM=()=>{if(typeof window>"u")return{uid:"local",displayName:null,bestTimeScore:0,isAnonymous:!0};const n=me.get("online_playerName");return{uid:"local",displayName:n==="Player"||!n?null:n,bestTimeScore:parseInt(me.get("local_best_time_score")||"0"),isAnonymous:!0}},$s=tg(uM());class hM{constructor(){Vt(this,"db");this.db=ro()}async syncUserProfile(e){const t=et(this.db,"users",e.uid);qO.syncWithCloud(e.uid);try{const i=await Li(t),s=parseInt(me.get("local_best_time_score")||"0"),r=me.get("online_playerName"),o=r==="Player"?null:r;if(i.exists()){const c=i.data(),l=c.bestTimeScore||0,u=c.displayName||null,f=Math.max(s,l),p={lastActive:Date.now()};s>l&&(p.bestTimeScore=s),!u&&o&&(p.displayName=o),await An(t,p,{merge:!0}),l>s&&me.set("local_best_time_score",l.toString()),u&&me.set("online_playerName",u),$s.set({uid:e.uid,displayName:u||o,bestTimeScore:f,isAnonymous:e.isAnonymous})}else{const c=XO.state.current,l={displayName:o,bestTimeScore:s,createdAt:Date.now(),lastActive:Date.now(),createdVersion:c||"unknown"};await An(t,l),$s.set({uid:e.uid,displayName:o,bestTimeScore:s,isAnonymous:e.isAnonymous})}}catch(i){j.error("[UserProfileService] Sync profile failed",i);const s=parseInt(me.get("local_best_time_score")||"0"),r=me.get("online_playerName");$s.set({uid:e.uid,displayName:r==="Player"?null:r,bestTimeScore:s,isAnonymous:e.isAnonymous})}}async updateNickname(e,t){const i=e&&e.trim()!==""&&e!=="Player"?e:null;if($s.update(s=>s?{...s,displayName:i}:null),i?me.set("online_playerName",i):me.remove("online_playerName"),!!t)try{const{updateProfile:s}=await bT(async()=>{const{updateProfile:o}=await Promise.resolve().then(()=>m0);return{updateProfile:o}},void 0,import.meta.url);await s(t,{displayName:i});const r=et(this.db,"users",t.uid);await An(r,{displayName:i,lastActive:Date.now()},{merge:!0}),j.action(`[UserProfileService] Nickname updated to ${i}`)}catch(s){j.error("[UserProfileService] Update profile error",s)}}clearLocalUserData(){j.init("[UserProfileService] Clearing local user data..."),me.remove("local_best_time_score"),me.remove("sotb_rewards"),me.remove("online_playerName")}resetLocalProfile(){$s.set({uid:"local",displayName:null,bestTimeScore:0,isAnonymous:!0})}}const Zm=new hM,_u=tg(null),CM=_u;class dM{constructor(){Vt(this,"authInstance",null)}get auth(){return this.authInstance||(this.authInstance=xO()),this.authInstance}async init(){JI(this.auth,async e=>{e?(j.init(`[AuthService] User logged in: ${e.uid} (Anon: ${e.isAnonymous})`),_u.set(e),await Zm.syncUserProfile(e)):(j.init("[AuthService] No user logged in. Signing in anonymously..."),_u.set(null),await this.signInAnonymously())})}async signInAnonymously(){try{return(await FI(this.auth)).user}catch(e){throw j.error("[AuthService:SignInAnonymously] Firebase:",e),e}}async linkEmailPassword(e,t){const i=this.auth.currentUser;if(!i)return!1;try{const s=cn.credential(e,t);return await Jh(i,s),!0}catch(s){return j.error("[AuthService] Link error",s),!1}}async loginEmailPassword(e,t){try{return await GI(this.auth,e,t),!0}catch(i){return j.error("[AuthService] Login error",i),!1}}async resetPassword(e){try{return await jI(this.auth,e),!0}catch(t){return j.error("[AuthService] Reset error",t),!1}}async deleteAccount(e){const t=this.auth.currentUser;if(!t)return!1;try{return await eE(t),!0}catch(i){return j.error("[AuthService] Delete error",i),!1}}async changePassword(e){const t=this.auth.currentUser;if(!t)return!1;try{return await zI(t,e),!0}catch(i){return j.error("[AuthService] Change password error",i),!1}}async updateNickname(e){const t=this.auth.currentUser;return Zm.updateNickname(e,t)}async logout(){try{await ZI(this.auth)}catch(e){j.error("[AuthService:Logout] Firebase:",e)}}getCurrentUser(){return this.auth.currentUser}}const Mo=new dM;class fM{handle(e,t={}){const{context:i,showToast:s=!0,userMessageKey:r="common.errorOccurred",userMessageRaw:o}=t,c=e instanceof Error?e.message:String(e),l=e instanceof Error?e.stack:void 0;j.error(`${i?"["+i+"] ":""}${c}`,{error:e,stack:l}),s&&QO.add({type:"error",messageKey:o?void 0:r,messageRaw:o,duration:7e3})}initGlobalHandlers(){typeof window>"u"||(window.onerror=(e,t,i,s,r)=>{this.handle(r||e,{context:"WindowOnError"})},window.onunhandledrejection=e=>{this.handle(e.reason,{context:"UnhandledRejection"})})}}const Si=new fM;class WE extends Error{constructor(e,t="APP_ERROR",i){super(e),this.message=e,this.code=t,this.context=i,this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}class js extends WE{constructor(e,t="ROOM_ERROR",i){super(e,t,i)}}class eg extends WE{constructor(e,t="AUTH_ERROR",i){super(e,t,i)}}function wl(n){return n==null?0:typeof n=="number"?n:n&&typeof n=="object"&&"seconds"in n&&"nanoseconds"in n?n.seconds*1e3+Math.floor(n.nanoseconds/1e6):0}const pM=6e5,Al=8;class mM{async createRoom(e,t=!1,i){j.init(`[RoomService] createRoom START. Host: ${e}`);let s=Mo.getCurrentUser();s||(j.init("[RoomService] Not authenticated. Performing quick sign-in..."),s=await Mo.signInAnonymously());const r=s.uid,o=Tf([]),c={id:r,name:e,color:o,isReady:!0,joinedAt:Date.now(),isOnline:!0,isWatchingReplay:!1},l=i&&i.trim()!==""?i.trim():lM(),u={...CT,boardSize:2,turnDuration:1e3,autoHideBoard:!1,blockModeEnabled:!0,blockOnVisitCount:0,settingsLocked:!1},f={name:l,hostId:r,status:"waiting",createdAt:Date.now(),lastActivity:Date.now(),isPrivate:t,settingsLocked:!1,allowGuestSettings:!0,gameState:null,players:{[r]:c},settings:u,maxPlayers:Al};try{const p=this.generateTimestampId();return await ve.createRoomDoc(p,f),t||ve.updateStatsDoc({lastRoomCreatedAt:Date.now()}).catch(m=>console.warn("Failed to update global stats",m)),Yn.saveSession(p,r),p}catch(p){throw Si.handle(p,{context:"RoomService:CreateRoom"}),new js("Failed to create room","CREATE_FAILED",{originalError:p})}}generateTimestampId(){const e=new Date,t=m=>m.toString().padStart(2,"0"),i=m=>m.toString().padStart(3,"0"),s=e.getFullYear(),r=t(e.getMonth()+1),o=t(e.getDate()),c=t(e.getHours()),l=t(e.getMinutes()),u=t(e.getSeconds()),f=i(e.getMilliseconds()),p=Math.floor(Math.random()*1e3).toString().padStart(3,"0");return`${s}-${r}-${o}_${c}-${l}-${u}_${f}_${p}`}processRoomsSnapshot(e){const t=[],i=Date.now(),s=[];let r=0;return e.forEach(o=>{const c=o.data(),l=wl(c.createdAt),u=wl(c.lastActivity);if(l>r&&(r=l),i-u>pM){s.push(ve.deleteRoomDoc(o.ref));return}const f=Object.values(c.players||{}),p=f.filter(m=>{const w=wl(m.lastSeen||m.joinedAt),C=i-w<12e4;return!m.isDisconnected&&C});c.status==="playing"&&p.length===0||f.length>0&&t.push({id:o.id,name:c.name,status:c.status,playerCount:f.length,maxPlayers:c.maxPlayers||Al,isPrivate:c.isPrivate})}),s.length>0&&Promise.allSettled(s).catch(o=>console.error(o)),{rooms:t,latestCreatedAt:r>0?r:void 0}}async getPublicRooms(){try{const[e,t]=await ve.getPublicRoomsQuerySnapshot(),i=this.processRoomsSnapshot(e),s=(t==null?void 0:t.lastRoomCreatedAt)||0,r=Math.max(i.latestCreatedAt||0,s);return{rooms:i.rooms,latestCreatedAt:r>0?r:void 0}}catch(e){return Si.handle(e,{context:"RoomService:GetPublicRooms",showToast:!1}),{rooms:[]}}}subscribeToPublicRooms(e){return ve.subscribeToPublicRooms(t=>{const i=this.processRoomsSnapshot(t);e(i)},t=>{Si.handle(t,{context:"RoomService:SubscribePublicRooms",showToast:!1}),e({rooms:[]})})}async joinRoom(e,t){j.init(`[RoomService] joinRoom START. Room: ${e}`);let i=Mo.getCurrentUser();i||(j.init("[RoomService] joinRoom: Not authenticated. Performing quick sign-in..."),i=await Mo.signInAnonymously());const s=i.uid;try{const r=await ve.getRoomDoc(e);if(!r)throw new js("Room not found","NOT_FOUND",{roomId:e});const o=Yn.getSession();if(o.roomId===e&&o.playerId&&r.players[o.playerId]){const f=Object.values(r.players).filter(p=>p.id!==o.playerId);if(r.status!=="waiting"&&f.length===0)throw j.init("[RoomService] Reconnect aborted: Room is empty (only me left) and game started/finished."),Yn.clearSession(),await Ws.leaveRoom(e,o.playerId),new eg("Game ended because all opponents left.","RECONNECT_ABORTED");return j.init("[RoomService] Reconnecting as existing player"),r.players[o.playerId].name!==t&&await ve.updateRoomDoc(e,{[`players.${o.playerId}.name`]:t,lastActivity:Date.now()}),o.playerId}if(Object.keys(r.players).length>=Al)throw new js("Room is full","FULL");if(r.status==="playing")throw new js("Game already started","ALREADY_STARTED");const c=Object.values(r.players).map(f=>f.color),l=Tf(c),u={id:s,name:t,color:l,isReady:!1,joinedAt:Date.now(),isOnline:!0,isWatchingReplay:!1};return await ve.updateRoomDoc(e,{[`players.${s}`]:u,lastActivity:Date.now()},!0),Yn.saveSession(e,s),s}catch(r){throw r instanceof js||r instanceof eg||Si.handle(r,{context:"RoomService:JoinRoom"}),r}}async getRoom(e){try{return await ve.getRoomDocSimple(e)}catch(t){return Si.handle(t,{context:"RoomService:GetRoom",showToast:!1}),null}}subscribeToRoom(e,t){return ve.subscribeToRoom(e,i=>{i||j.init(`[RoomService] Room ${e} deleted or not found`),t(i)},i=>{Si.handle(i,{context:"RoomService:SubscribeRoom",showToast:!1})})}async startGame(e){const t=await ve.getRoomDocSimple(e);if(!t)return;const i={...t.players};Object.keys(i).forEach(s=>{i[s].isReady=!1,i[s].isWatchingReplay=!1}),await ve.updateRoomDoc(e,{status:"playing",gameState:null,players:i,lastActivity:Date.now()})}async returnToLobby(e,t){const i=await ve.getRoomDocSimple(e);if(!i)return;const s={[`players.${t}.isReady`]:!0,[`players.${t}.isWatchingReplay`]:!1,lastActivity:Date.now()},r={...i.players};r[t]&&(r[t]={...r[t],isReady:!0}),Object.values(r).every(c=>c.isReady)?s.status="waiting":i.status==="playing"&&(s.status="finished"),await ve.updateRoomDoc(e,s)}async updateRoomSettings(e,t){const i={lastActivity:Date.now()};for(const[s,r]of Object.entries(t))s==="allowGuestSettings"?i.allowGuestSettings=r:i[`settings.${s}`]=r;t.settingsLocked!==void 0&&(i.settingsLocked=t.settingsLocked),await ve.updateRoomDoc(e,i)}async renameRoom(e,t){await ve.updateRoomDoc(e,{name:t,lastActivity:Date.now()})}getSession(){return Yn.getSession()}clearSession(){Yn.clearSession()}async updatePlayer(e,t,i){return Ws.updatePlayer(e,t,i)}async toggleReady(e,t,i){return Ws.toggleReady(e,t,i)}async setWatchingReplay(e,t,i){return Ws.setWatchingReplay(e,t,i)}async leaveRoom(e,t){return Ws.leaveRoom(e,t)}async sendMessage(e,t,i,s){return Ym.sendMessage(e,t,i,s)}subscribeToChat(e,t){return Ym.subscribeToChat(e,t)}}const bM=new mM;export{Di as A,Bo as B,aM as C,wl as D,iM as P,qO as a,AS as b,sr as c,Mo as d,et as e,CS as f,ro as g,SM as h,$s as i,ki as j,lM as k,TS as l,Si as m,QO as n,Ql as o,Ws as p,Kl as q,bM as r,An as s,RM as t,CM as u,XO as v,Dp as w,Li as x,RS as y,AM as z};
//# sourceMappingURL=CCKVFDPE.js.map
