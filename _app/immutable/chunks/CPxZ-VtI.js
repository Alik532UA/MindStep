const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BCsAOeWA.js","./CPR87gmE.js","./B30SJgZU.js","./Df96DYUQ.js","./BQcJDNPr.js","./DlAccrPC.js"])))=>i.map(i=>d[i]);
var OI=Object.defineProperty;var cf=n=>{throw TypeError(n)};var LI=(n,e,t)=>e in n?OI(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ht=(n,e,t)=>LI(n,typeof e!="symbol"?e+"":e,t),VI=(n,e,t)=>e.has(n)||cf("Cannot "+t);var ct=(n,e,t)=>(VI(n,e,"read from private field"),t?t.call(n):e.get(n)),Qn=(n,e,t)=>e.has(n)?cf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);import{l as U,s as de}from"./CPR87gmE.js";import{g as lf,d as MI}from"./B7xiuc-I.js";import{o as Fn,n as zt,s as tt,b as gn,r as xI,u as FI,d as mt,_ as UI}from"./DF5Zd2Wl.js";import{am as ts,as as La,g as ns,s as is}from"./B30SJgZU.js";import{_ as Ci}from"./Dp1pzeXC.js";const qI=Fn({id:tt(),unlockedAt:zt()}),BI=Fn({unlockedRewards:xI(tt(),qI),hasUnseenRewards:gn()}),WI=()=>{};var uf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(n,e){if(!n)throw ss(e)},ss=function(n){return new Error("Firebase Database ("+Dm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},jI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,f=r>>2,p=(r&3)<<4|c>>4;let m=(c&15)<<2|u>>6,w=u&63;l||(w=64,o||(m=64)),i.push(t[f],t[p],t[m],t[w])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Om(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||u==null||p==null)throw new HI;const m=r<<2|c>>4;if(i.push(m),u!==64){const w=c<<4&240|u>>2;if(i.push(w),p!==64){const C=u<<6&192|p;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class HI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lm=function(n){const e=Om(n);return mu.encodeByteArray(e,!0)},Yo=function(n){return Lm(n).replace(/\./g,"")},Xo=function(n){try{return mu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(n){return Vm(void 0,n)}function Vm(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!GI(t)||(n[t]=Vm(n[t],e[t]));return n}function GI(n){return n!=="__proto__"}/**
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
 */function zI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KI=()=>zI().__FIREBASE_DEFAULTS__,QI=()=>{if(typeof process>"u"||typeof uf>"u")return;const n=uf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},YI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xo(n[1]);return e&&JSON.parse(e)},Va=()=>{try{return WI()||KI()||QI()||YI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mm=n=>{var e,t;return(t=(e=Va())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},xm=n=>{const e=Mm(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Fm=()=>{var n;return(n=Va())==null?void 0:n.config},Um=n=>{var e;return(e=Va())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Un(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _u(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function qm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Yo(JSON.stringify(t)),Yo(JSON.stringify(o)),""].join(".")}const Zs={};function XI(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zs))Zs[e]?n.emulator.push(e):n.prod.push(e);return n}function JI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let hf=!1;function gu(n,e){if(typeof window>"u"||typeof document>"u"||!Un(window.location.host)||Zs[n]===e||Zs[n]||hf)return;Zs[n]=e;function t(m){return`__firebase__banner__${m}`}const i="__firebase__banner",r=XI().prod.length>0;function o(){const m=document.getElementById(i);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{hf=!0,o()},m}function f(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=JI(i),w=t("text"),C=document.getElementById(w)||document.createElement("span"),k=t("learnmore"),N=document.getElementById(k)||document.createElement("a"),H=t("preprendIcon"),$=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const ee=m.element;c(ee),f(N,k);const Ie=u();l($,H),ee.append($,C,N,Ie),document.body.appendChild(ee)}r?(C.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function ZI(){var e;const n=(e=Va())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ev(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nv(){const n=$e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function iv(){return Dm.NODE_ADMIN===!0}function sv(){return!ZI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rv(){try{return typeof indexedDB=="object"}catch{return!1}}function ov(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="FirebaseError";class on extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=av,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?cv(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new on(s,c,i)}}function cv(n,e){return n.replace(lv,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const lv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Wm=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=pr(Xo(r[0])||""),t=pr(Xo(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},uv=function(n){const e=Wm(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},hv=function(n){const e=Wm(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Wi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Jo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Zo(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function bn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(df(r)&&df(o)){if(!bn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function df(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function $s(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Gs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)i[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)i[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const m=i[p-3]^i[p-8]^i[p-14]^i[p-16];i[p]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],c=this.chain_[3],l=this.chain_[4],u,f;for(let p=0;p<80;p++){p<40?p<20?(u=c^r&(o^c),f=1518500249):(u=r^o^c,f=1859775393):p<60?(u=r&o|c&(r|o),f=2400959708):(u=r^o^c,f=3395469782);const m=(s<<5|s>>>27)+u+l+f+i[p]&4294967295;l=c,c=o,o=(r<<30|r>>>2)&4294967295,r=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function fv(n,e){const t=new pv(n,e);return t.subscribe.bind(t)}class pv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");mv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Yc),s.error===void 0&&(s.error=Yc),s.complete===void 0&&(s.complete=Yc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yc(){}function ji(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,O(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ma=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function x(n){return n&&n._delegate?n._delegate:n}class Pn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yn="[DEFAULT]";/**
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
 */class gv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ut;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ev(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:yv(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yv(n){return n===Yn?void 0:n}function Ev(n){return n.instantiationMode==="EAGER"}/**
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
 */class Iv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const vv={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Tv=Y.INFO,wv={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Av=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=wv[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xa{constructor(e){this.name=e,this._logLevel=Tv,this._logHandler=Av,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Rv=(n,e)=>e.some(t=>n instanceof t);let ff,pf;function Sv(){return ff||(ff=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cv(){return pf||(pf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jm=new WeakMap,Sl=new WeakMap,Hm=new WeakMap,Xc=new WeakMap,Eu=new WeakMap;function bv(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(En(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&jm.set(t,n)}).catch(()=>{}),Eu.set(e,n),e}function Pv(n){if(Sl.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Sl.set(n,e)}let Cl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return En(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Nv(n){Cl=n(Cl)}function kv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Jc(this),e,...t);return Hm.set(i,e.sort?e.sort():[e]),En(i)}:Cv().includes(n)?function(...e){return n.apply(Jc(this),e),En(jm.get(this))}:function(...e){return En(n.apply(Jc(this),e))}}function Dv(n){return typeof n=="function"?kv(n):(n instanceof IDBTransaction&&Pv(n),Rv(n,Sv())?new Proxy(n,Cl):n)}function En(n){if(n instanceof IDBRequest)return bv(n);if(Xc.has(n))return Xc.get(n);const e=Dv(n);return e!==n&&(Xc.set(n,e),Eu.set(e,n)),e}const Jc=n=>Eu.get(n);function Ov(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),c=En(o);return i&&o.addEventListener("upgradeneeded",l=>{i(En(o.result),l.oldVersion,l.newVersion,En(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Lv=["get","getKey","getAll","getAllKeys","count"],Vv=["put","add","delete","clear"],Zc=new Map;function mf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Zc.get(e))return Zc.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Vv.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Lv.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return Zc.set(e,r),r}Nv(n=>({...n,get:(e,t,i)=>mf(e,t)||n.get(e,t,i),has:(e,t)=>!!mf(e,t)||n.has(e,t)}));/**
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
 */class Mv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xv(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function xv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bl="@firebase/app",_f="0.14.6";/**
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
 */const Jt=new xa("@firebase/app"),Fv="@firebase/app-compat",Uv="@firebase/analytics-compat",qv="@firebase/analytics",Bv="@firebase/app-check-compat",Wv="@firebase/app-check",jv="@firebase/auth",Hv="@firebase/auth-compat",$v="@firebase/database",Gv="@firebase/data-connect",zv="@firebase/database-compat",Kv="@firebase/functions",Qv="@firebase/functions-compat",Yv="@firebase/installations",Xv="@firebase/installations-compat",Jv="@firebase/messaging",Zv="@firebase/messaging-compat",eT="@firebase/performance",tT="@firebase/performance-compat",nT="@firebase/remote-config",iT="@firebase/remote-config-compat",sT="@firebase/storage",rT="@firebase/storage-compat",oT="@firebase/firestore",aT="@firebase/ai",cT="@firebase/firestore-compat",lT="firebase",uT="12.6.0";/**
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
 */const Pl="[DEFAULT]",hT={[bl]:"fire-core",[Fv]:"fire-core-compat",[qv]:"fire-analytics",[Uv]:"fire-analytics-compat",[Wv]:"fire-app-check",[Bv]:"fire-app-check-compat",[jv]:"fire-auth",[Hv]:"fire-auth-compat",[$v]:"fire-rtdb",[Gv]:"fire-data-connect",[zv]:"fire-rtdb-compat",[Kv]:"fire-fn",[Qv]:"fire-fn-compat",[Yv]:"fire-iid",[Xv]:"fire-iid-compat",[Jv]:"fire-fcm",[Zv]:"fire-fcm-compat",[eT]:"fire-perf",[tT]:"fire-perf-compat",[nT]:"fire-rc",[iT]:"fire-rc-compat",[sT]:"fire-gcs",[rT]:"fire-gcs-compat",[oT]:"fire-fst",[cT]:"fire-fst-compat",[aT]:"fire-vertex","fire-js":"fire-js",[lT]:"fire-js-all"};/**
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
 */const mr=new Map,dT=new Map,Nl=new Map;function gf(n,e){try{n.container.addComponent(e)}catch(t){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function oi(n){const e=n.name;if(Nl.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;Nl.set(e,n);for(const t of mr.values())gf(t,n);for(const t of dT.values())gf(t,n);return!0}function Fa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function fe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const fT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},In=new jr("app","Firebase",fT);/**
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
 */class pT{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
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
 */const mi=uT;function $m(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Pl,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw In.create("bad-app-name",{appName:String(s)});if(t||(t=Fm()),!t)throw In.create("no-options");const r=mr.get(s);if(r){if(bn(t,r.options)&&bn(i,r.config))return r;throw In.create("duplicate-app",{appName:s})}const o=new Iv(s);for(const l of Nl.values())o.addComponent(l);const c=new pT(t,i,o);return mr.set(s,c),c}function Iu(n=Pl){const e=mr.get(n);if(!e&&n===Pl&&Fm())return $m();if(!e)throw In.create("no-app",{appName:n});return e}function mT(){return Array.from(mr.values())}function bt(n,e,t){let i=hT[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(o.join(" "));return}oi(new Pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _T="firebase-heartbeat-database",gT=1,_r="firebase-heartbeat-store";let el=null;function Gm(){return el||(el=Ov(_T,gT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_r)}catch(t){console.warn(t)}}}}).catch(n=>{throw In.create("idb-open",{originalErrorMessage:n.message})})),el}async function yT(n){try{const t=(await Gm()).transaction(_r),i=await t.objectStore(_r).get(zm(n));return await t.done,i}catch(e){if(e instanceof on)Jt.warn(e.message);else{const t=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(t.message)}}}async function yf(n,e){try{const i=(await Gm()).transaction(_r,"readwrite");await i.objectStore(_r).put(e,zm(n)),await i.done}catch(t){if(t instanceof on)Jt.warn(t.message);else{const i=In.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(i.message)}}}function zm(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ET=1024,IT=30;class vT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wT(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ef();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>IT){const o=AT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Jt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ef(),{heartbeatsToSend:i,unsentEntries:s}=TT(this._heartbeatsCache.heartbeats),r=Yo(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Jt.warn(t),""}}}function Ef(){return new Date().toISOString().substring(0,10)}function TT(n,e=ET){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),If(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),If(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class wT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rv()?ov().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return yf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return yf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function If(n){return Yo(JSON.stringify({version:2,heartbeats:n})).length}function AT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function RT(n){oi(new Pn("platform-logger",e=>new Mv(e),"PRIVATE")),oi(new Pn("heartbeat",e=>new vT(e),"PRIVATE")),bt(bl,_f,n),bt(bl,_f,"esm2020"),bt("fire-js","")}RT("");var vf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vn,Km;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function E(){}E.prototype=g.prototype,v.F=g.prototype,v.prototype=new E,v.prototype.constructor=v,v.D=function(T,I,R){for(var y=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)y[Je-2]=arguments[Je];return g.prototype[I].apply(T,y)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,E){E||(E=0);const T=Array(16);if(typeof g=="string")for(var I=0;I<16;++I)T[I]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(I=0;I<16;++I)T[I]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=v.g[0],E=v.g[1],I=v.g[2];let R=v.g[3],y;y=g+(R^E&(I^R))+T[0]+3614090360&4294967295,g=E+(y<<7&4294967295|y>>>25),y=R+(I^g&(E^I))+T[1]+3905402710&4294967295,R=g+(y<<12&4294967295|y>>>20),y=I+(E^R&(g^E))+T[2]+606105819&4294967295,I=R+(y<<17&4294967295|y>>>15),y=E+(g^I&(R^g))+T[3]+3250441966&4294967295,E=I+(y<<22&4294967295|y>>>10),y=g+(R^E&(I^R))+T[4]+4118548399&4294967295,g=E+(y<<7&4294967295|y>>>25),y=R+(I^g&(E^I))+T[5]+1200080426&4294967295,R=g+(y<<12&4294967295|y>>>20),y=I+(E^R&(g^E))+T[6]+2821735955&4294967295,I=R+(y<<17&4294967295|y>>>15),y=E+(g^I&(R^g))+T[7]+4249261313&4294967295,E=I+(y<<22&4294967295|y>>>10),y=g+(R^E&(I^R))+T[8]+1770035416&4294967295,g=E+(y<<7&4294967295|y>>>25),y=R+(I^g&(E^I))+T[9]+2336552879&4294967295,R=g+(y<<12&4294967295|y>>>20),y=I+(E^R&(g^E))+T[10]+4294925233&4294967295,I=R+(y<<17&4294967295|y>>>15),y=E+(g^I&(R^g))+T[11]+2304563134&4294967295,E=I+(y<<22&4294967295|y>>>10),y=g+(R^E&(I^R))+T[12]+1804603682&4294967295,g=E+(y<<7&4294967295|y>>>25),y=R+(I^g&(E^I))+T[13]+4254626195&4294967295,R=g+(y<<12&4294967295|y>>>20),y=I+(E^R&(g^E))+T[14]+2792965006&4294967295,I=R+(y<<17&4294967295|y>>>15),y=E+(g^I&(R^g))+T[15]+1236535329&4294967295,E=I+(y<<22&4294967295|y>>>10),y=g+(I^R&(E^I))+T[1]+4129170786&4294967295,g=E+(y<<5&4294967295|y>>>27),y=R+(E^I&(g^E))+T[6]+3225465664&4294967295,R=g+(y<<9&4294967295|y>>>23),y=I+(g^E&(R^g))+T[11]+643717713&4294967295,I=R+(y<<14&4294967295|y>>>18),y=E+(R^g&(I^R))+T[0]+3921069994&4294967295,E=I+(y<<20&4294967295|y>>>12),y=g+(I^R&(E^I))+T[5]+3593408605&4294967295,g=E+(y<<5&4294967295|y>>>27),y=R+(E^I&(g^E))+T[10]+38016083&4294967295,R=g+(y<<9&4294967295|y>>>23),y=I+(g^E&(R^g))+T[15]+3634488961&4294967295,I=R+(y<<14&4294967295|y>>>18),y=E+(R^g&(I^R))+T[4]+3889429448&4294967295,E=I+(y<<20&4294967295|y>>>12),y=g+(I^R&(E^I))+T[9]+568446438&4294967295,g=E+(y<<5&4294967295|y>>>27),y=R+(E^I&(g^E))+T[14]+3275163606&4294967295,R=g+(y<<9&4294967295|y>>>23),y=I+(g^E&(R^g))+T[3]+4107603335&4294967295,I=R+(y<<14&4294967295|y>>>18),y=E+(R^g&(I^R))+T[8]+1163531501&4294967295,E=I+(y<<20&4294967295|y>>>12),y=g+(I^R&(E^I))+T[13]+2850285829&4294967295,g=E+(y<<5&4294967295|y>>>27),y=R+(E^I&(g^E))+T[2]+4243563512&4294967295,R=g+(y<<9&4294967295|y>>>23),y=I+(g^E&(R^g))+T[7]+1735328473&4294967295,I=R+(y<<14&4294967295|y>>>18),y=E+(R^g&(I^R))+T[12]+2368359562&4294967295,E=I+(y<<20&4294967295|y>>>12),y=g+(E^I^R)+T[5]+4294588738&4294967295,g=E+(y<<4&4294967295|y>>>28),y=R+(g^E^I)+T[8]+2272392833&4294967295,R=g+(y<<11&4294967295|y>>>21),y=I+(R^g^E)+T[11]+1839030562&4294967295,I=R+(y<<16&4294967295|y>>>16),y=E+(I^R^g)+T[14]+4259657740&4294967295,E=I+(y<<23&4294967295|y>>>9),y=g+(E^I^R)+T[1]+2763975236&4294967295,g=E+(y<<4&4294967295|y>>>28),y=R+(g^E^I)+T[4]+1272893353&4294967295,R=g+(y<<11&4294967295|y>>>21),y=I+(R^g^E)+T[7]+4139469664&4294967295,I=R+(y<<16&4294967295|y>>>16),y=E+(I^R^g)+T[10]+3200236656&4294967295,E=I+(y<<23&4294967295|y>>>9),y=g+(E^I^R)+T[13]+681279174&4294967295,g=E+(y<<4&4294967295|y>>>28),y=R+(g^E^I)+T[0]+3936430074&4294967295,R=g+(y<<11&4294967295|y>>>21),y=I+(R^g^E)+T[3]+3572445317&4294967295,I=R+(y<<16&4294967295|y>>>16),y=E+(I^R^g)+T[6]+76029189&4294967295,E=I+(y<<23&4294967295|y>>>9),y=g+(E^I^R)+T[9]+3654602809&4294967295,g=E+(y<<4&4294967295|y>>>28),y=R+(g^E^I)+T[12]+3873151461&4294967295,R=g+(y<<11&4294967295|y>>>21),y=I+(R^g^E)+T[15]+530742520&4294967295,I=R+(y<<16&4294967295|y>>>16),y=E+(I^R^g)+T[2]+3299628645&4294967295,E=I+(y<<23&4294967295|y>>>9),y=g+(I^(E|~R))+T[0]+4096336452&4294967295,g=E+(y<<6&4294967295|y>>>26),y=R+(E^(g|~I))+T[7]+1126891415&4294967295,R=g+(y<<10&4294967295|y>>>22),y=I+(g^(R|~E))+T[14]+2878612391&4294967295,I=R+(y<<15&4294967295|y>>>17),y=E+(R^(I|~g))+T[5]+4237533241&4294967295,E=I+(y<<21&4294967295|y>>>11),y=g+(I^(E|~R))+T[12]+1700485571&4294967295,g=E+(y<<6&4294967295|y>>>26),y=R+(E^(g|~I))+T[3]+2399980690&4294967295,R=g+(y<<10&4294967295|y>>>22),y=I+(g^(R|~E))+T[10]+4293915773&4294967295,I=R+(y<<15&4294967295|y>>>17),y=E+(R^(I|~g))+T[1]+2240044497&4294967295,E=I+(y<<21&4294967295|y>>>11),y=g+(I^(E|~R))+T[8]+1873313359&4294967295,g=E+(y<<6&4294967295|y>>>26),y=R+(E^(g|~I))+T[15]+4264355552&4294967295,R=g+(y<<10&4294967295|y>>>22),y=I+(g^(R|~E))+T[6]+2734768916&4294967295,I=R+(y<<15&4294967295|y>>>17),y=E+(R^(I|~g))+T[13]+1309151649&4294967295,E=I+(y<<21&4294967295|y>>>11),y=g+(I^(E|~R))+T[4]+4149444226&4294967295,g=E+(y<<6&4294967295|y>>>26),y=R+(E^(g|~I))+T[11]+3174756917&4294967295,R=g+(y<<10&4294967295|y>>>22),y=I+(g^(R|~E))+T[2]+718787259&4294967295,I=R+(y<<15&4294967295|y>>>17),y=E+(R^(I|~g))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+R&4294967295}i.prototype.v=function(v,g){g===void 0&&(g=v.length);const E=g-this.blockSize,T=this.C;let I=this.h,R=0;for(;R<g;){if(I==0)for(;R<=E;)s(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<g;)if(T[I++]=v.charCodeAt(R++),I==this.blockSize){s(this,T),I=0;break}}else for(;R<g;)if(T[I++]=v[R++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=g},i.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;g=this.o*8;for(var E=v.length-8;E<v.length;++E)v[E]=g&255,g/=256;for(this.v(v),v=Array(16),g=0,E=0;E<4;++E)for(let T=0;T<32;T+=8)v[g++]=this.g[E]>>>T&255;return v};function r(v,g){var E=c;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=g(v)}function o(v,g){this.h=g;const E=[];let T=!0;for(let I=v.length-1;I>=0;I--){const R=v[I]|0;T&&R==g||(E[I]=R,T=!1)}this.g=E}var c={};function l(v){return-128<=v&&v<128?r(v,function(g){return new o([g|0],g<0?-1:0)}):new o([v|0],v<0?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return N(u(-v));const g=[];let E=1;for(let T=0;v>=E;T++)g[T]=v/E|0,E*=4294967296;return new o(g,0)}function f(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return N(f(v.substring(1),g));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=u(Math.pow(g,8));let T=p;for(let R=0;R<v.length;R+=8){var I=Math.min(8,v.length-R);const y=parseInt(v.substring(R,R+I),g);I<8?(I=u(Math.pow(g,I)),T=T.j(I).add(u(y))):(T=T.j(E),T=T.add(u(y)))}return T}var p=l(0),m=l(1),w=l(16777216);n=o.prototype,n.m=function(){if(k(this))return-N(this).m();let v=0,g=1;for(let E=0;E<this.g.length;E++){const T=this.i(E);v+=(T>=0?T:4294967296+T)*g,g*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(k(this))return"-"+N(this).toString(v);const g=u(Math.pow(v,6));var E=this;let T="";for(;;){const I=Ie(E,g).g;E=H(E,I.j(g));let R=((E.g.length>0?E.g[0]:E.h)>>>0).toString(v);if(E=I,C(E))return R+T;for(;R.length<6;)R="0"+R;T=R+T}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(let g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=H(this,v),k(v)?-1:C(v)?0:1};function N(v){const g=v.g.length,E=[];for(let T=0;T<g;T++)E[T]=~v.g[T];return new o(E,~v.h).add(m)}n.abs=function(){return k(this)?N(this):this},n.add=function(v){const g=Math.max(this.g.length,v.g.length),E=[];let T=0;for(let I=0;I<=g;I++){let R=T+(this.i(I)&65535)+(v.i(I)&65535),y=(R>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);T=y>>>16,R&=65535,y&=65535,E[I]=y<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function H(v,g){return v.add(N(g))}n.j=function(v){if(C(this)||C(v))return p;if(k(this))return k(v)?N(this).j(N(v)):N(N(this).j(v));if(k(v))return N(this.j(N(v)));if(this.l(w)<0&&v.l(w)<0)return u(this.m()*v.m());const g=this.g.length+v.g.length,E=[];for(var T=0;T<2*g;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(let I=0;I<v.g.length;I++){const R=this.i(T)>>>16,y=this.i(T)&65535,Je=v.i(I)>>>16,jn=v.i(I)&65535;E[2*T+2*I]+=y*jn,$(E,2*T+2*I),E[2*T+2*I+1]+=R*jn,$(E,2*T+2*I+1),E[2*T+2*I+1]+=y*Je,$(E,2*T+2*I+1),E[2*T+2*I+2]+=R*Je,$(E,2*T+2*I+2)}for(v=0;v<g;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=g;v<2*g;v++)E[v]=0;return new o(E,0)};function $(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function ee(v,g){this.g=v,this.h=g}function Ie(v,g){if(C(g))throw Error("division by zero");if(C(v))return new ee(p,p);if(k(v))return g=Ie(N(v),g),new ee(N(g.g),N(g.h));if(k(g))return g=Ie(v,N(g)),new ee(N(g.g),g.h);if(v.g.length>30){if(k(v)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var E=m,T=g;T.l(v)<=0;)E=ot(E),T=ot(T);var I=Ce(E,1),R=Ce(T,1);for(T=Ce(T,2),E=Ce(E,2);!C(T);){var y=R.add(T);y.l(v)<=0&&(I=I.add(E),R=y),T=Ce(T,1),E=Ce(E,1)}return g=H(v,I.j(g)),new ee(I,g)}for(I=p;v.l(g)>=0;){for(E=Math.max(1,Math.floor(v.m()/g.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),R=u(E),y=R.j(g);k(y)||y.l(v)>0;)E-=T,R=u(E),y=R.j(g);C(R)&&(R=m),I=I.add(R),v=H(v,y)}return new ee(I,v)}n.B=function(v){return Ie(this,v).h},n.and=function(v){const g=Math.max(this.g.length,v.g.length),E=[];for(let T=0;T<g;T++)E[T]=this.i(T)&v.i(T);return new o(E,this.h&v.h)},n.or=function(v){const g=Math.max(this.g.length,v.g.length),E=[];for(let T=0;T<g;T++)E[T]=this.i(T)|v.i(T);return new o(E,this.h|v.h)},n.xor=function(v){const g=Math.max(this.g.length,v.g.length),E=[];for(let T=0;T<g;T++)E[T]=this.i(T)^v.i(T);return new o(E,this.h^v.h)};function ot(v){const g=v.g.length+1,E=[];for(let T=0;T<g;T++)E[T]=v.i(T)<<1|v.i(T-1)>>>31;return new o(E,v.h)}function Ce(v,g){const E=g>>5;g%=32;const T=v.g.length-E,I=[];for(let R=0;R<T;R++)I[R]=g>0?v.i(R+E)>>>g|v.i(R+E+1)<<32-g:v.i(R+E);return new o(I,v.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Km=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,vn=o}).apply(typeof vf<"u"?vf:typeof self<"u"?self:typeof window<"u"?window:{});var bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qm,zs,Ym,qo,kl,Xm,Jm,Zm;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof bo=="object"&&bo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=t(this);function s(a,h){if(h)e:{var d=i;a=a.split(".");for(var _=0;_<a.length-1;_++){var A=a[_];if(!(A in d))break e;d=d[A]}a=a[a.length-1],_=d[a],h=h(_),h!=_&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&d.push([_,h[_]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(_,A,S){for(var L=Array(arguments.length-2),G=2;G<arguments.length;G++)L[G-2]=arguments[G];return h.prototype[A].apply(_,L)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const d=Array(h);for(let _=0;_<h;_++)d[_]=a[_];return d}return[]}function C(a,h){for(let _=1;_<arguments.length;_++){const A=arguments[_];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=a.length||0;const S=A.length||0;a.length=d+S;for(let L=0;L<S;L++)a[d+L]=A[L]}else a.push(A)}}class k{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){o.setTimeout(()=>{throw a},0)}function H(){var a=v;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ${constructor(){this.h=this.g=null}add(h,d){const _=ee.get();_.set(h,d),this.h?this.h.next=_:this.g=_,this.h=_}}var ee=new k(()=>new Ie,a=>a.reset());class Ie{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ot,Ce=!1,v=new $,g=()=>{const a=Promise.resolve(void 0);ot=()=>{a.then(E)}};function E(){for(var a;a=H();){try{a.h.call(a.g)}catch(d){N(d)}var h=ee;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}Ce=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function Je(a,h){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Je,I),Je.prototype.init=function(a,h){const d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Je.Z.h.call(this)},Je.prototype.h=function(){Je.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var jn="closure_listenable_"+(Math.random()*1e6|0),tI=0;function nI(a,h,d,_,A){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!_,this.ha=A,this.key=++tI,this.da=this.fa=!1}function fo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function po(a,h,d){for(const _ in a)h.call(d,a[_],_,a)}function iI(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function od(a){const h={};for(const d in a)h[d]=a[d];return h}const ad="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cd(a,h){let d,_;for(let A=1;A<arguments.length;A++){_=arguments[A];for(d in _)a[d]=_[d];for(let S=0;S<ad.length;S++)d=ad[S],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function mo(a){this.src=a,this.g={},this.h=0}mo.prototype.add=function(a,h,d,_,A){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const L=Cc(a,h,_,A);return L>-1?(h=a[L],d||(h.fa=!1)):(h=new nI(h,this.src,S,!!_,A),h.fa=d,a.push(h)),h};function Sc(a,h){const d=h.type;if(d in a.g){var _=a.g[d],A=Array.prototype.indexOf.call(_,h,void 0),S;(S=A>=0)&&Array.prototype.splice.call(_,A,1),S&&(fo(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Cc(a,h,d,_){for(let A=0;A<a.length;++A){const S=a[A];if(!S.da&&S.listener==h&&S.capture==!!d&&S.ha==_)return A}return-1}var bc="closure_lm_"+(Math.random()*1e6|0),Pc={};function ld(a,h,d,_,A){if(Array.isArray(h)){for(let S=0;S<h.length;S++)ld(a,h[S],d,_,A);return null}return d=dd(d),a&&a[jn]?a.J(h,d,c(_)?!!_.capture:!1,A):sI(a,h,d,!1,_,A)}function sI(a,h,d,_,A,S){if(!h)throw Error("Invalid event type");const L=c(A)?!!A.capture:!!A;let G=kc(a);if(G||(a[bc]=G=new mo(a)),d=G.add(h,d,_,L,S),d.proxy)return d;if(_=rI(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)R||(A=L),A===void 0&&(A=!1),a.addEventListener(h.toString(),_,A);else if(a.attachEvent)a.attachEvent(hd(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function rI(){function a(d){return h.call(a.src,a.listener,d)}const h=oI;return a}function ud(a,h,d,_,A){if(Array.isArray(h))for(var S=0;S<h.length;S++)ud(a,h[S],d,_,A);else _=c(_)?!!_.capture:!!_,d=dd(d),a&&a[jn]?(a=a.i,S=String(h).toString(),S in a.g&&(h=a.g[S],d=Cc(h,d,_,A),d>-1&&(fo(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[S],a.h--)))):a&&(a=kc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Cc(h,d,_,A)),(d=a>-1?h[a]:null)&&Nc(d))}function Nc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[jn])Sc(h.i,a);else{var d=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(d,_,a.capture):h.detachEvent?h.detachEvent(hd(d),_):h.addListener&&h.removeListener&&h.removeListener(_),(d=kc(h))?(Sc(d,a),d.h==0&&(d.src=null,h[bc]=null)):fo(a)}}}function hd(a){return a in Pc?Pc[a]:Pc[a]="on"+a}function oI(a,h){if(a.da)a=!0;else{h=new Je(h,this);const d=a.listener,_=a.ha||a.src;a.fa&&Nc(a),a=d.call(_,h)}return a}function kc(a){return a=a[bc],a instanceof mo?a:null}var Dc="__closure_events_fn_"+(Math.random()*1e9>>>0);function dd(a){return typeof a=="function"?a:(a[Dc]||(a[Dc]=function(h){return a.handleEvent(h)}),a[Dc])}function qe(){T.call(this),this.i=new mo(this),this.M=this,this.G=null}p(qe,T),qe.prototype[jn]=!0,qe.prototype.removeEventListener=function(a,h,d,_){ud(this,a,h,d,_)};function ze(a,h){var d,_=a.G;if(_)for(d=[];_;_=_.G)d.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new I(h,a);else if(h instanceof I)h.target=h.target||a;else{var A=h;h=new I(_,a),cd(h,A)}A=!0;let S,L;if(d)for(L=d.length-1;L>=0;L--)S=h.g=d[L],A=_o(S,_,!0,h)&&A;if(S=h.g=a,A=_o(S,_,!0,h)&&A,A=_o(S,_,!1,h)&&A,d)for(L=0;L<d.length;L++)S=h.g=d[L],A=_o(S,_,!1,h)&&A}qe.prototype.N=function(){if(qe.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let _=0;_<d.length;_++)fo(d[_]);delete a.g[h],a.h--}}this.G=null},qe.prototype.J=function(a,h,d,_){return this.i.add(String(a),h,!1,d,_)},qe.prototype.K=function(a,h,d,_){return this.i.add(String(a),h,!0,d,_)};function _o(a,h,d,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let A=!0;for(let S=0;S<h.length;++S){const L=h[S];if(L&&!L.da&&L.capture==d){const G=L.listener,be=L.ha||L.src;L.fa&&Sc(a.i,L),A=G.call(be,_)!==!1&&A}}return A&&!_.defaultPrevented}function aI(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function fd(a){a.g=aI(()=>{a.g=null,a.i&&(a.i=!1,fd(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class cI extends T{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:fd(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(a){T.call(this),this.h=a,this.g={}}p(gs,T);var pd=[];function md(a){po(a.g,function(h,d){this.g.hasOwnProperty(d)&&Nc(h)},a),a.g={}}gs.prototype.N=function(){gs.Z.N.call(this),md(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oc=o.JSON.stringify,lI=o.JSON.parse,uI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function _d(){}function gd(){}var ys={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Lc(){I.call(this,"d")}p(Lc,I);function Vc(){I.call(this,"c")}p(Vc,I);var Hn={},yd=null;function go(){return yd=yd||new qe}Hn.Ia="serverreachability";function Ed(a){I.call(this,Hn.Ia,a)}p(Ed,I);function Es(a){const h=go();ze(h,new Ed(h))}Hn.STAT_EVENT="statevent";function Id(a,h){I.call(this,Hn.STAT_EVENT,a),this.stat=h}p(Id,I);function Ke(a){const h=go();ze(h,new Id(h,a))}Hn.Ja="timingevent";function vd(a,h){I.call(this,Hn.Ja,a),this.size=h}p(vd,I);function Is(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function vs(){this.g=!0}vs.prototype.ua=function(){this.g=!1};function hI(a,h,d,_,A,S){a.info(function(){if(a.g)if(S){var L="",G=S.split("&");for(let se=0;se<G.length;se++){var be=G[se].split("=");if(be.length>1){const Ne=be[0];be=be[1];const At=Ne.split("_");L=At.length>=2&&At[1]=="type"?L+(Ne+"="+be+"&"):L+(Ne+"=redacted&")}}}else L=null;else L=S;return"XMLHTTP REQ ("+_+") [attempt "+A+"]: "+h+`
`+d+`
`+L})}function dI(a,h,d,_,A,S,L){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+A+"]: "+h+`
`+d+`
`+S+" "+L})}function vi(a,h,d,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+pI(a,d)+(_?" "+_:"")})}function fI(a,h){a.info(function(){return"TIMEOUT: "+h})}vs.prototype.info=function(){};function pI(a,h){if(!a.g)return h;if(!h)return null;try{const S=JSON.parse(h);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var d=S[a];if(!(d.length<2)){var _=d[1];if(Array.isArray(_)&&!(_.length<1)){var A=_[0];if(A!="noop"&&A!="stop"&&A!="close")for(let L=1;L<_.length;L++)_[L]=""}}}}return Oc(S)}catch{return h}}var yo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Td={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},wd;function Mc(){}p(Mc,_d),Mc.prototype.g=function(){return new XMLHttpRequest},wd=new Mc;function Ts(a){return encodeURIComponent(String(a))}function mI(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function ln(a,h,d,_){this.j=a,this.i=h,this.l=d,this.S=_||1,this.V=new gs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ad}function Ad(){this.i=null,this.g="",this.h=!1}var Rd={},xc={};function Fc(a,h,d){a.M=1,a.A=Io(wt(h)),a.u=d,a.R=!0,Sd(a,null)}function Sd(a,h){a.F=Date.now(),Eo(a),a.B=wt(a.A);var d=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),Ud(d.i,"t",_),a.C=0,d=a.j.L,a.h=new Ad,a.g=sf(a.j,d?h:null,!a.u),a.P>0&&(a.O=new cI(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,_=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(pd[0]=A.toString()),A=pd);for(let S=0;S<A.length;S++){const L=ld(d,A[S],_||h.handleEvent,!1,h.h||h);if(!L)break;h.g[L.key]=L}h=a.J?od(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Es(),hI(a.i,a.v,a.B,a.l,a.S,a.u)}ln.prototype.ba=function(a){a=a.target;const h=this.O;h&&dn(a)==3?h.j():this.Y(a)},ln.prototype.Y=function(a){try{if(a==this.g)e:{const G=dn(this.g),be=this.g.ya(),se=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||Gd(this.g)))){this.K||G!=4||be==7||(be==8||se<=0?Es(3):Es(2)),Uc(this);var h=this.g.ca();this.X=h;var d=_I(this);if(this.o=h==200,dI(this.i,this.v,this.B,this.l,this.S,G,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,A=this.g;if((_=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(_)){var S=_;break t}}S=null}if(a=S)vi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,qc(this,a);else{this.o=!1,this.m=3,Ke(12),$n(this),ws(this);break e}}if(this.R){a=!0;let Ne;for(;!this.K&&this.C<d.length;)if(Ne=gI(this,d),Ne==xc){G==4&&(this.m=4,Ke(14),a=!1),vi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==Rd){this.m=4,Ke(15),vi(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else vi(this.i,this.l,Ne,null),qc(this,Ne);if(Cd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||d.length!=0||this.h.h||(this.m=1,Ke(16),a=!1),this.o=this.o&&a,!a)vi(this.i,this.l,d,"[Invalid Chunked Response]"),$n(this),ws(this);else if(d.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Kc(L),L.P=!0,Ke(11))}}else vi(this.i,this.l,d,null),qc(this,d);G==4&&$n(this),this.o&&!this.K&&(G==4?Zd(this.j,this):(this.o=!1,Eo(this)))}else kI(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ke(12)):(this.m=0,Ke(13)),$n(this),ws(this)}}}catch{}finally{}};function _I(a){if(!Cd(a))return a.g.la();const h=Gd(a.g);if(h==="")return"";let d="";const _=h.length,A=dn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return $n(a),ws(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<_;S++)a.h.h=!0,d+=a.h.i.decode(h[S],{stream:!(A&&S==_-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Cd(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function gI(a,h){var d=a.C,_=h.indexOf(`
`,d);return _==-1?xc:(d=Number(h.substring(d,_)),isNaN(d)?Rd:(_+=1,_+d>h.length?xc:(h=h.slice(_,_+d),a.C=_+d,h)))}ln.prototype.cancel=function(){this.K=!0,$n(this)};function Eo(a){a.T=Date.now()+a.H,bd(a,a.H)}function bd(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Is(u(a.aa,a),h)}function Uc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}ln.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(fI(this.i,this.B),this.M!=2&&(Es(),Ke(17)),$n(this),this.m=2,ws(this)):bd(this,this.T-a)};function ws(a){a.j.I==0||a.K||Zd(a.j,a)}function $n(a){Uc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,md(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function qc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Bc(d.h,a))){if(!a.L&&Bc(d.h,a)&&d.I==3){try{var _=d.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var A=_;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Ro(d),wo(d);else break e;zc(d),Ke(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Is(u(d.Va,d),6e3));kd(d.h)<=1&&d.ta&&(d.ta=void 0)}else zn(d,11)}else if((a.L||d.g==a)&&Ro(d),!y(h))for(A=d.Ba.g.parse(h),h=0;h<A.length;h++){let se=A[h];const Ne=se[0];if(!(Ne<=d.K))if(d.K=Ne,se=se[1],d.I==2)if(se[0]=="c"){d.M=se[1],d.ba=se[2];const At=se[3];At!=null&&(d.ka=At,d.j.info("VER="+d.ka));const Kn=se[4];Kn!=null&&(d.za=Kn,d.j.info("SVER="+d.za));const fn=se[5];fn!=null&&typeof fn=="number"&&fn>0&&(_=1.5*fn,d.O=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const pn=a.g;if(pn){const Co=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Co){var S=_.h;S.g||Co.indexOf("spdy")==-1&&Co.indexOf("quic")==-1&&Co.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Wc(S,S.h),S.h=null))}if(_.G){const Qc=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;Qc&&(_.wa=Qc,ce(_.J,_.G,Qc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),_=d;var L=a;if(_.na=nf(_,_.L?_.ba:null,_.W),L.L){Dd(_.h,L);var G=L,be=_.O;be&&(G.H=be),G.D&&(Uc(G),Eo(G)),_.g=L}else Xd(_);d.i.length>0&&Ao(d)}else se[0]!="stop"&&se[0]!="close"||zn(d,7);else d.I==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?zn(d,7):Gc(d):se[0]!="noop"&&d.l&&d.l.qa(se),d.A=0)}}Es(4)}catch{}}var yI=class{constructor(a,h){this.g=a,this.map=h}};function Pd(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Nd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function kd(a){return a.h?1:a.g?a.g.size:0}function Bc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Wc(a,h){a.g?a.g.add(h):a.h=h}function Dd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Pd.prototype.cancel=function(){if(this.i=Od(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Od(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return w(a.i)}var Ld=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function EI(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const _=a[d].indexOf("=");let A,S=null;_>=0?(A=a[d].substring(0,_),S=a[d].substring(_+1)):A=a[d],h(A,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function un(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof un?(this.l=a.l,As(this,a.j),this.o=a.o,this.g=a.g,Rs(this,a.u),this.h=a.h,jc(this,qd(a.i)),this.m=a.m):a&&(h=String(a).match(Ld))?(this.l=!1,As(this,h[1]||"",!0),this.o=Ss(h[2]||""),this.g=Ss(h[3]||"",!0),Rs(this,h[4]),this.h=Ss(h[5]||"",!0),jc(this,h[6]||"",!0),this.m=Ss(h[7]||"")):(this.l=!1,this.i=new bs(null,this.l))}un.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Cs(h,Vd,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Cs(h,Vd,!0),"@"),a.push(Ts(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Cs(d,d.charAt(0)=="/"?TI:vI,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Cs(d,AI)),a.join("")},un.prototype.resolve=function(a){const h=wt(this);let d=!!a.j;d?As(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var _=a.h;if(d)Rs(h,a.u);else if(d=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var A=h.h.lastIndexOf("/");A!=-1&&(_=h.h.slice(0,A+1)+_)}if(A=_,A==".."||A==".")_="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){_=A.lastIndexOf("/",0)==0,A=A.split("/");const S=[];for(let L=0;L<A.length;){const G=A[L++];G=="."?_&&L==A.length&&S.push(""):G==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),_&&L==A.length&&S.push("")):(S.push(G),_=!0)}_=S.join("/")}else _=A}return d?h.h=_:d=a.i.toString()!=="",d?jc(h,qd(a.i)):d=!!a.m,d&&(h.m=a.m),h};function wt(a){return new un(a)}function As(a,h,d){a.j=d?Ss(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Rs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function jc(a,h,d){h instanceof bs?(a.i=h,RI(a.i,a.l)):(d||(h=Cs(h,wI)),a.i=new bs(h,a.l))}function ce(a,h,d){a.i.set(h,d)}function Io(a){return ce(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ss(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Cs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,II),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function II(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Vd=/[#\/\?@]/g,vI=/[#\?:]/g,TI=/[#\?]/g,wI=/[#\?@]/g,AI=/#/g;function bs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&EI(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}n=bs.prototype,n.add=function(a,h){Gn(this),this.i=null,a=Ti(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Md(a,h){Gn(a),h=Ti(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function xd(a,h){return Gn(a),h=Ti(a,h),a.g.has(h)}n.forEach=function(a,h){Gn(this),this.g.forEach(function(d,_){d.forEach(function(A){a.call(h,A,_,this)},this)},this)};function Fd(a,h){Gn(a);let d=[];if(typeof h=="string")xd(a,h)&&(d=d.concat(a.g.get(Ti(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}n.set=function(a,h){return Gn(this),this.i=null,a=Ti(this,a),xd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=Fd(this,a),a.length>0?String(a[0]):h):h};function Ud(a,h,d){Md(a,h),d.length>0&&(a.i=null,a.g.set(Ti(a,h),w(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var d=h[_];const A=Ts(d);d=Fd(this,d);for(let S=0;S<d.length;S++){let L=A;d[S]!==""&&(L+="="+Ts(d[S])),a.push(L)}}return this.i=a.join("&")};function qd(a){const h=new bs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ti(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function RI(a,h){h&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(d,_){const A=_.toLowerCase();_!=A&&(Md(this,_),Ud(this,A,d))},a)),a.j=h}function SI(a,h){const d=new vs;if(o.Image){const _=new Image;_.onload=f(hn,d,"TestLoadImage: loaded",!0,h,_),_.onerror=f(hn,d,"TestLoadImage: error",!1,h,_),_.onabort=f(hn,d,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(hn,d,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function CI(a,h){const d=new vs,_=new AbortController,A=setTimeout(()=>{_.abort(),hn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(S=>{clearTimeout(A),S.ok?hn(d,"TestPingServer: ok",!0,h):hn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(A),hn(d,"TestPingServer: error",!1,h)})}function hn(a,h,d,_,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),_(d)}catch{}}function bI(){this.g=new uI}function Hc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Hc,_d),Hc.prototype.g=function(){return new vo(this.i,this.h)};function vo(a,h){qe.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(vo,qe),n=vo.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ns(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ps(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Bd(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Bd(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ps(this):Ns(this),this.readyState==3&&Bd(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Ps(this))},n.Na=function(a){this.g&&(this.response=a,Ps(this))},n.ga=function(){this.g&&Ps(this)};function Ps(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ns(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(vo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Wd(a){let h="";return po(a,function(d,_){h+=_,h+=":",h+=d,h+=`\r
`}),h}function $c(a,h,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=Wd(d),typeof a=="string"?d!=null&&Ts(d):ce(a,h,d))}function _e(a){qe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(_e,qe);var PI=/^https?$/i,NI=["POST","PUT"];n=_e.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():wd.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(S){jd(this,S);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var A in _)d.set(A,_[A]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const S of _.keys())d.set(S,_.get(S));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(NI,h,void 0)>=0)||_||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,L]of d)this.g.setRequestHeader(S,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){jd(this,S)}};function jd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Hd(a),To(a)}function Hd(a){a.A||(a.A=!0,ze(a,"complete"),ze(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ze(this,"complete"),ze(this,"abort"),To(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),To(this,!0)),_e.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?$d(this):this.Xa())},n.Xa=function(){$d(this)};function $d(a){if(a.h&&typeof r<"u"){if(a.v&&dn(a)==4)setTimeout(a.Ca.bind(a),0);else if(ze(a,"readystatechange"),dn(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var _;if(_=S===0){let L=String(a.D).match(Ld)[1]||null;!L&&o.self&&o.self.location&&(L=o.self.location.protocol.slice(0,-1)),_=!PI.test(L?L.toLowerCase():"")}d=_}if(d)ze(a,"complete"),ze(a,"success");else{a.o=6;try{var A=dn(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",Hd(a)}}finally{To(a)}}}}function To(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||ze(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function dn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return dn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),lI(h)}};function Gd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function kI(a){const h={};a=(a.g&&dn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(y(a[_]))continue;var d=mI(a[_]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=h[A]||[];h[A]=S,S.push(d)}iI(h,function(_){return _.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ks(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function zd(a){this.za=0,this.i=[],this.j=new vs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ks("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ks("baseRetryDelayMs",5e3,a),this.Za=ks("retryDelaySeedMs",1e4,a),this.Ta=ks("forwardChannelMaxRetries",2,a),this.va=ks("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Pd(a&&a.concurrentRequestLimit),this.Ba=new bI,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=zd.prototype,n.ka=8,n.I=1,n.connect=function(a,h,d,_){Ke(0),this.W=a,this.H=h||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.J=nf(this,null,this.W),Ao(this)};function Gc(a){if(Kd(a),a.I==3){var h=a.V++,d=wt(a.J);if(ce(d,"SID",a.M),ce(d,"RID",h),ce(d,"TYPE","terminate"),Ds(a,d),h=new ln(a,a.j,h),h.M=2,h.A=Io(wt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=sf(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Eo(h)}tf(a)}function wo(a){a.g&&(Kc(a),a.g.cancel(),a.g=null)}function Kd(a){wo(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ro(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ao(a){if(!Nd(a.h)&&!a.m){a.m=!0;var h=a.Ea;ot||g(),Ce||(ot(),Ce=!0),v.add(h,a),a.D=0}}function DI(a,h){return kd(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Is(u(a.Ea,a,h),ef(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new ln(this,this.j,a);let S=this.o;if(this.U&&(S?(S=od(S),cd(S,this.U)):S=this.U),this.u!==null||this.R||(A.J=S,S=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Yd(this,A,h),d=wt(this.J),ce(d,"RID",a),ce(d,"CVER",22),this.G&&ce(d,"X-HTTP-Session-Id",this.G),Ds(this,d),S&&(this.R?h="headers="+Ts(Wd(S))+"&"+h:this.u&&$c(d,this.u,S)),Wc(this.h,A),this.Ra&&ce(d,"TYPE","init"),this.S?(ce(d,"$req",h),ce(d,"SID","null"),A.U=!0,Fc(A,d,null)):Fc(A,d,h),this.I=2}}else this.I==3&&(a?Qd(this,a):this.i.length==0||Nd(this.h)||Qd(this))};function Qd(a,h){var d;h?d=h.l:d=a.V++;const _=wt(a.J);ce(_,"SID",a.M),ce(_,"RID",d),ce(_,"AID",a.K),Ds(a,_),a.u&&a.o&&$c(_,a.u,a.o),d=new ln(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Yd(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Wc(a.h,d),Fc(d,_,h)}function Ds(a,h){a.H&&po(a.H,function(d,_){ce(h,_,d)}),a.l&&po({},function(d,_){ce(h,_,d)})}function Yd(a,h,d){d=Math.min(a.i.length,d);const _=a.l?u(a.l.Ka,a.l,a):null;e:{var A=a.i;let G=-1;for(;;){const be=["count="+d];G==-1?d>0?(G=A[0].g,be.push("ofs="+G)):G=0:be.push("ofs="+G);let se=!0;for(let Ne=0;Ne<d;Ne++){var S=A[Ne].g;const At=A[Ne].map;if(S-=G,S<0)G=Math.max(0,A[Ne].g-100),se=!1;else try{S="req"+S+"_"||"";try{var L=At instanceof Map?At:Object.entries(At);for(const[Kn,fn]of L){let pn=fn;c(fn)&&(pn=Oc(fn)),be.push(S+Kn+"="+encodeURIComponent(pn))}}catch(Kn){throw be.push(S+"type="+encodeURIComponent("_badmap")),Kn}}catch{_&&_(At)}}if(se){L=be.join("&");break e}}L=void 0}return a=a.i.splice(0,d),h.G=a,L}function Xd(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;ot||g(),Ce||(ot(),Ce=!0),v.add(h,a),a.A=0}}function zc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Is(u(a.Da,a),ef(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Jd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Is(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ke(10),wo(this),Jd(this))};function Kc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Jd(a){a.g=new ln(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=wt(a.na);ce(h,"RID","rpc"),ce(h,"SID",a.M),ce(h,"AID",a.K),ce(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ce(h,"TO",a.ia),ce(h,"TYPE","xmlhttp"),Ds(a,h),a.u&&a.o&&$c(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Io(wt(h)),d.u=null,d.R=!0,Sd(d,a)}n.Va=function(){this.C!=null&&(this.C=null,wo(this),zc(this),Ke(19))};function Ro(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Zd(a,h){var d=null;if(a.g==h){Ro(a),Kc(a),a.g=null;var _=2}else if(Bc(a.h,h))d=h.G,Dd(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var A=a.D;_=go(),ze(_,new vd(_,d)),Ao(a)}else Xd(a);else if(A=h.m,A==3||A==0&&h.X>0||!(_==1&&DI(a,h)||_==2&&zc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),A){case 1:zn(a,5);break;case 4:zn(a,10);break;case 3:zn(a,6);break;default:zn(a,2)}}}function ef(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function zn(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),_=a.Ua;const A=!_;_=new un(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||As(_,"https"),Io(_),A?SI(_.toString(),d):CI(_.toString(),d)}else Ke(2);a.I=0,a.l&&a.l.pa(h),tf(a),Kd(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function tf(a){if(a.I=0,a.ja=[],a.l){const h=Od(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function nf(a,h,d){var _=d instanceof un?wt(d):new un(d);if(_.g!="")h&&(_.g=h+"."+_.g),Rs(_,_.u);else{var A=o.location;_=A.protocol,h=h?h+"."+A.hostname:A.hostname,A=+A.port;const S=new un(null);_&&As(S,_),h&&(S.g=h),A&&Rs(S,A),d&&(S.h=d),_=S}return d=a.G,h=a.wa,d&&h&&ce(_,d,h),ce(_,"VER",a.ka),Ds(a,_),_}function sf(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new _e(new Hc({ab:d})):new _e(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rf(){}n=rf.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function So(){}So.prototype.g=function(a,h){return new at(a,h)};function at(a,h){qe.call(this),this.g=new zd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!y(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new wi(this)}p(at,qe),at.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},at.prototype.close=function(){Gc(this.g)},at.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Oc(a),a=d);h.i.push(new yI(h.Ya++,a)),h.I==3&&Ao(h)},at.prototype.N=function(){this.g.l=null,delete this.j,Gc(this.g),delete this.g,at.Z.N.call(this)};function of(a){Lc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(of,Lc);function af(){Vc.call(this),this.status=1}p(af,Vc);function wi(a){this.g=a}p(wi,rf),wi.prototype.ra=function(){ze(this.g,"a")},wi.prototype.qa=function(a){ze(this.g,new of(a))},wi.prototype.pa=function(a){ze(this.g,new af)},wi.prototype.oa=function(){ze(this.g,"b")},So.prototype.createWebChannel=So.prototype.g,at.prototype.send=at.prototype.o,at.prototype.open=at.prototype.m,at.prototype.close=at.prototype.close,Zm=function(){return new So},Jm=function(){return go()},Xm=Hn,kl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},yo.NO_ERROR=0,yo.TIMEOUT=8,yo.HTTP_ERROR=6,qo=yo,Td.COMPLETE="complete",Ym=Td,gd.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",qe.prototype.listen=qe.prototype.J,zs=gd,_e.prototype.listenOnce=_e.prototype.K,_e.prototype.getLastError=_e.prototype.Ha,_e.prototype.getLastErrorCode=_e.prototype.ya,_e.prototype.getStatus=_e.prototype.ca,_e.prototype.getResponseJson=_e.prototype.La,_e.prototype.getResponseText=_e.prototype.la,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Fa,Qm=_e}).apply(typeof bo<"u"?bo:typeof self<"u"?self:typeof window<"u"?window:{});const Tf="@firebase/firestore",wf="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new xa("@firebase/firestore");function bi(){return ai.logLevel}function M(n,...e){if(ai.logLevel<=Y.DEBUG){const t=e.map(vu);ai.debug(`Firestore (${rs}): ${n}`,...t)}}function Zt(n,...e){if(ai.logLevel<=Y.ERROR){const t=e.map(vu);ai.error(`Firestore (${rs}): ${n}`,...t)}}function ci(n,...e){if(ai.logLevel<=Y.WARN){const t=e.map(vu);ai.warn(`Firestore (${rs}): ${n}`,...t)}}function vu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function q(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,e_(n,i,t)}function e_(n,e,t){let i=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Zt(i),new Error(i)}function ne(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||e_(e,s,i)}function j(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends on{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class t_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class n_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(We.UNAUTHENTICATED)))}shutdown(){}}class ST{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class CT{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Kt,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Kt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ne(typeof i.accessToken=="string",31837,{l:i}),new t_(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new We(e)}}class bT{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=We.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class PT{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new bT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(We.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Af{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,fe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const i=r=>{r.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Af(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Af(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=kT(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function X(n,e){return n<e?-1:n>e?1:0}function Dl(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return tl(s)===tl(r)?X(s,r):tl(s)?1:-1}return X(n.length,e.length)}const DT=55296,OT=57343;function tl(n){const e=n.charCodeAt(0);return e>=DT&&e<=OT}function Hi(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="__name__";class Rt{constructor(e,t,i){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&q(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Rt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Rt?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=Rt.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return X(e.length,t.length)}static compareSegments(e,t){const i=Rt.isNumericId(e),s=Rt.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?Rt.extractNumericId(e).compare(Rt.extractNumericId(t)):Dl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vn.fromString(e.substring(4,e.length-2))}}class oe extends Rt{construct(e,t,i){return new oe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new V(b.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new oe(t)}static emptyPath(){return new oe([])}}const LT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Rt{construct(e,t,i){return new Ve(e,t,i)}static isValidIdentifier(e){return LT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rf}static keyField(){return new Ve([Rf])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new V(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new V(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new V(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function i_(n,e,t){if(!t)throw new V(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function s_(n,e,t,i){if(e===!0&&i===!0)throw new V(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sf(n){if(!F.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Cf(n){if(F.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function r_(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function qa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Ye(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qa(n);throw new V(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function VT(n,e){if(e<=0)throw new V(b.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Re(n,e){const t={typeString:n};return e&&(t.value=e),t}function Hr(n,e){if(!r_(n))throw new V(b.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new V(b.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=-62135596800,Pf=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Pf);return new ae(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<bf)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pf}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Hr(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:Re("string",ae._jsonSchemaVersion),seconds:Re("number"),nanoseconds:Re("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new ae(0,0))}static max(){return new W(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const gr=-1;function MT(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(i===1e9?new ae(t+1,0):new ae(t,i));return new Nn(s,F.empty(),e)}function xT(n){return new Nn(n.readTime,n.key,gr)}class Nn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Nn(W.min(),F.empty(),gr)}static max(){return new Nn(W.max(),F.empty(),gr)}}function FT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==UT)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,i)=>{t(e)}))}static reject(e){return new P(((t,i)=>{i(e)}))}static waitFor(e){return new P(((t,i)=>{let s=0,r=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++r,o&&r===s&&t()}),(l=>i(l)))})),o=!0,r===s&&t()}))}static or(e){let t=P.resolve(!1);for(const i of e)t=t.next((s=>s?P.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new P(((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const u=l;t(e[u]).next((f=>{o[u]=f,++c,c===r&&i(o)}),(f=>s(f)))}}))}static doWhile(e,t){return new P(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function BT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function as(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ba{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ba.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=-1;function Wa(n){return n==null}function ea(n){return n===0&&1/n==-1/0}function WT(n){return typeof n=="number"&&Number.isInteger(n)&&!ea(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="";function jT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Nf(e)),e=HT(n.get(t),e);return Nf(e)}function HT(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case o_:t+="";break;default:t+=r}}return t}function Nf(n){return n+o_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function a_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Se=class Ol{constructor(e,t){this.comparator=e,this.root=t||Tn.EMPTY}insert(e,t){return new Ol(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Tn.BLACK,null,null))}remove(e){return new Ol(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Po(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Po(this.root,e,this.comparator,!1)}getReverseIterator(){return new Po(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Po(this.root,e,this.comparator,!0)}},Po=class{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Tn=class xt{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??xt.RED,this.left=s??xt.EMPTY,this.right=r??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new xt(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return xt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}};Tn.EMPTY=null,Tn.RED=!0,Tn.BLACK=!1;Tn.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new Tn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Df(this.data.getIterator())}getIteratorFrom(e){return new Df(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Pe(this.comparator);return t.data=e,t}}class Df{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new ut([])}unionWith(e){let t=new Pe(Ve.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new c_("Invalid base64 string: "+r):r}})(e);return new xe(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const $T=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=$T.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Dn(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="server_timestamp",u_="__type__",h_="__previous_value__",d_="__local_write_time__";function wu(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[u_])==null?void 0:i.stringValue)===l_}function ja(n){const e=n.mapValue.fields[h_];return wu(e)?ja(e):e}function yr(n){const e=kn(n.mapValue.fields[d_].timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,t,i,s,r,o,c,l,u,f){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const ta="(default)";class $i{constructor(e,t){this.projectId=e,this.database=t||ta}static empty(){return new $i("","")}get isDefaultDatabase(){return this.database===ta}isEqual(e){return e instanceof $i&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="__type__",zT="__max__",No={mapValue:{}},p_="__vector__",na="value";function On(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wu(n)?4:QT(n)?9007199254740991:KT(n)?10:11:q(28295,{value:n})}function kt(n,e){if(n===e)return!0;const t=On(n);if(t!==On(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return yr(n).isEqual(yr(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=kn(s.timestampValue),c=kn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return Dn(s.bytesValue).isEqual(Dn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return ye(s.geoPointValue.latitude)===ye(r.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return ye(s.integerValue)===ye(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=ye(s.doubleValue),c=ye(r.doubleValue);return o===c?ea(o)===ea(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Hi(n.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(kf(o)!==kf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!kt(o[l],c[l])))return!1;return!0})(n,e);default:return q(52216,{left:n})}}function Er(n,e){return(n.values||[]).find((t=>kt(t,e)))!==void 0}function Gi(n,e){if(n===e)return 0;const t=On(n),i=On(e);if(t!==i)return X(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=ye(r.integerValue||r.doubleValue),l=ye(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Of(n.timestampValue,e.timestampValue);case 4:return Of(yr(n),yr(e));case 5:return Dl(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=Dn(r),l=Dn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=X(c[u],l[u]);if(f!==0)return f}return X(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=X(ye(r.latitude),ye(o.latitude));return c!==0?c:X(ye(r.longitude),ye(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Lf(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var m,w,C,k;const c=r.fields||{},l=o.fields||{},u=(m=c[na])==null?void 0:m.arrayValue,f=(w=l[na])==null?void 0:w.arrayValue,p=X(((C=u==null?void 0:u.values)==null?void 0:C.length)||0,((k=f==null?void 0:f.values)==null?void 0:k.length)||0);return p!==0?p:Lf(u,f)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===No.mapValue&&o===No.mapValue)return 0;if(r===No.mapValue)return 1;if(o===No.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Dl(l[p],f[p]);if(m!==0)return m;const w=Gi(c[l[p]],u[f[p]]);if(w!==0)return w}return X(l.length,f.length)})(n.mapValue,e.mapValue);default:throw q(23264,{he:t})}}function Of(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=kn(n),i=kn(e),s=X(t.seconds,i.seconds);return s!==0?s:X(t.nanos,i.nanos)}function Lf(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=Gi(t[s],i[s]);if(r)return r}return X(t.length,i.length)}function zi(n){return Ll(n)}function Ll(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=kn(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Dn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return F.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Ll(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Ll(t.fields[o])}`;return s+"}"})(n.mapValue):q(61005,{value:n})}function Bo(n){switch(On(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ja(n);return e?16+Bo(e):16;case 5:return 2*n.stringValue.length;case 6:return Dn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Bo(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return qn(i.fields,((r,o)=>{s+=r.length+Bo(o)})),s})(n.mapValue);default:throw q(13486,{value:n})}}function Vf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Vl(n){return!!n&&"integerValue"in n}function Au(n){return!!n&&"arrayValue"in n}function Mf(n){return!!n&&"nullValue"in n}function xf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wo(n){return!!n&&"mapValue"in n}function KT(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[f_])==null?void 0:i.stringValue)===p_}function er(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return qn(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=er(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=er(n.arrayValue.values[t]);return e}return{...n}}function QT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===zT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Wo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=er(t)}setAll(e){let t=Ve.emptyPath(),i={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=c.popLast()}o?i[c.lastSegment()]=er(o):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());Wo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return kt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Wo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){qn(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new et(er(this.value))}}function m_(n){const e=[];return qn(n.fields,((t,i)=>{const s=new Ve([t]);if(Wo(i)){const r=m_(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)})),new ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,i,s,r,o,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new je(e,0,W.min(),W.min(),W.min(),et.empty(),0)}static newFoundDocument(e,t,i,s){return new je(e,1,t,W.min(),i,s,0)}static newNoDocument(e,t){return new je(e,2,t,W.min(),W.min(),et.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,W.min(),W.min(),et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ia{constructor(e,t){this.position=e,this.inclusive=t}}function Ff(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=F.comparator(F.fromName(o.referenceValue),t.key):i=Gi(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Uf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!kt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ir{constructor(e,t="asc"){this.field=e,this.dir=t}}function YT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class __{}class Ae extends __{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new JT(e,t,i):t==="array-contains"?new tw(e,i):t==="in"?new nw(e,i):t==="not-in"?new iw(e,i):t==="array-contains-any"?new sw(e,i):new Ae(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new ZT(e,i):new ew(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Gi(t,this.value)):t!==null&&On(this.value)===On(t)&&this.matchesComparison(Gi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tt extends __{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Tt(e,t)}matches(e){return g_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function g_(n){return n.op==="and"}function y_(n){return XT(n)&&g_(n)}function XT(n){for(const e of n.filters)if(e instanceof Tt)return!1;return!0}function Ml(n){if(n instanceof Ae)return n.field.canonicalString()+n.op.toString()+zi(n.value);if(y_(n))return n.filters.map((e=>Ml(e))).join(",");{const e=n.filters.map((t=>Ml(t))).join(",");return`${n.op}(${e})`}}function E_(n,e){return n instanceof Ae?(function(i,s){return s instanceof Ae&&i.op===s.op&&i.field.isEqual(s.field)&&kt(i.value,s.value)})(n,e):n instanceof Tt?(function(i,s){return s instanceof Tt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,c)=>r&&E_(o,s.filters[c])),!0):!1})(n,e):void q(19439)}function I_(n){return n instanceof Ae?(function(t){return`${t.field.canonicalString()} ${t.op} ${zi(t.value)}`})(n):n instanceof Tt?(function(t){return t.op.toString()+" {"+t.getFilters().map(I_).join(" ,")+"}"})(n):"Filter"}class JT extends Ae{constructor(e,t,i){super(e,t,i),this.key=F.fromName(i.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class ZT extends Ae{constructor(e,t){super(e,"in",t),this.keys=v_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ew extends Ae{constructor(e,t){super(e,"not-in",t),this.keys=v_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function v_(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>F.fromName(i.referenceValue)))}class tw extends Ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Au(t)&&Er(t.arrayValue,this.value)}}class nw extends Ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Er(this.value.arrayValue,t)}}class iw extends Ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(Er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Er(this.value.arrayValue,t)}}class sw extends Ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Au(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Er(this.value.arrayValue,i)))}}/**
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
 */class rw{constructor(e,t=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function qf(n,e=null,t=[],i=[],s=null,r=null,o=null){return new rw(n,e,t,i,s,r,o)}function Ru(n){const e=j(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Ml(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),Wa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>zi(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>zi(i))).join(",")),e.Te=t}return e.Te}function Su(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!YT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!E_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uf(n.startAt,e.startAt)&&Uf(n.endAt,e.endAt)}function xl(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t=null,i=[],s=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ow(n,e,t,i,s,r,o,c){return new cs(n,e,t,i,s,r,o,c)}function Ha(n){return new cs(n)}function Bf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function T_(n){return n.collectionGroup!==null}function tr(n){const e=j(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Pe(Ve.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Ir(r,i))})),t.has(Ve.keyField().canonicalString())||e.Ie.push(new Ir(Ve.keyField(),i))}return e.Ie}function Pt(n){const e=j(n);return e.Ee||(e.Ee=aw(e,tr(n))),e.Ee}function aw(n,e){if(n.limitType==="F")return qf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new Ir(s.field,r)}));const t=n.endAt?new ia(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new ia(n.startAt.position,n.startAt.inclusive):null;return qf(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Fl(n,e){const t=n.filters.concat([e]);return new cs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function sa(n,e,t){return new cs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $a(n,e){return Su(Pt(n),Pt(e))&&n.limitType===e.limitType}function w_(n){return`${Ru(Pt(n))}|lt:${n.limitType}`}function Pi(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>I_(s))).join(", ")}]`),Wa(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>zi(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>zi(s))).join(",")),`Target(${i})`})(Pt(n))}; limitType=${n.limitType})`}function Ga(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):F.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of tr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(o,c,l){const u=Ff(o,c,l);return o.inclusive?u<=0:u<0})(i.startAt,tr(i),s)||i.endAt&&!(function(o,c,l){const u=Ff(o,c,l);return o.inclusive?u>=0:u>0})(i.endAt,tr(i),s))})(n,e)}function cw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function A_(n){return(e,t)=>{let i=!1;for(const s of tr(n)){const r=lw(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function lw(n,e,t){const i=n.field.isKeyField()?F.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),u=c.data.field(r);return l!==null&&u!==null?Gi(l,u):q(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qn(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return a_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new Se(F.comparator);function en(){return uw}const R_=new Se(F.comparator);function Ks(...n){let e=R_;for(const t of n)e=e.insert(t.key,t);return e}function S_(n){let e=R_;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ei(){return nr()}function C_(){return nr()}function nr(){return new _i((n=>n.toString()),((n,e)=>n.isEqual(e)))}const hw=new Se(F.comparator),dw=new Pe(F.comparator);function J(...n){let e=dw;for(const t of n)e=e.add(t);return e}const fw=new Pe(X);function pw(){return fw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ea(e)?"-0":e}}function b_(n){return{integerValue:""+n}}function mw(n,e){return WT(e)?b_(e):Cu(n,e)}/**
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
 */class za{constructor(){this._=void 0}}function _w(n,e,t){return n instanceof vr?(function(s,r){const o={fields:{[u_]:{stringValue:l_},[d_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&wu(r)&&(r=ja(r)),r&&(o.fields[h_]=r),{mapValue:o}})(t,e):n instanceof Tr?N_(n,e):n instanceof wr?k_(n,e):(function(s,r){const o=P_(s,r),c=Wf(o)+Wf(s.Ae);return Vl(o)&&Vl(s.Ae)?b_(c):Cu(s.serializer,c)})(n,e)}function gw(n,e,t){return n instanceof Tr?N_(n,e):n instanceof wr?k_(n,e):t}function P_(n,e){return n instanceof ra?(function(i){return Vl(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class vr extends za{}class Tr extends za{constructor(e){super(),this.elements=e}}function N_(n,e){const t=D_(e);for(const i of n.elements)t.some((s=>kt(s,i)))||t.push(i);return{arrayValue:{values:t}}}class wr extends za{constructor(e){super(),this.elements=e}}function k_(n,e){let t=D_(e);for(const i of n.elements)t=t.filter((s=>!kt(s,i)));return{arrayValue:{values:t}}}class ra extends za{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Wf(n){return ye(n.integerValue||n.doubleValue)}function D_(n){return Au(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t){this.field=e,this.transform=t}}function Ew(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof Tr&&s instanceof Tr||i instanceof wr&&s instanceof wr?Hi(i.elements,s.elements,kt):i instanceof ra&&s instanceof ra?kt(i.Ae,s.Ae):i instanceof vr&&s instanceof vr})(n.transform,e.transform)}class Iw{constructor(e,t){this.version=e,this.transformResults=t}}class ft{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ft}static exists(e){return new ft(void 0,e)}static updateTime(e){return new ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ka{}function O_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new bu(n.key,ft.none()):new $r(n.key,n.data,ft.none());{const t=n.data,i=et.empty();let s=new Pe(Ve.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Bn(n.key,i,new ut(s.toArray()),ft.none())}}function vw(n,e,t){n instanceof $r?(function(s,r,o){const c=s.value.clone(),l=Hf(s.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Bn?(function(s,r,o){if(!jo(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=Hf(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(L_(s)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ir(n,e,t,i){return n instanceof $r?(function(r,o,c,l){if(!jo(r.precondition,o))return c;const u=r.value.clone(),f=$f(r.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,i):n instanceof Bn?(function(r,o,c,l){if(!jo(r.precondition,o))return c;const u=$f(r.fieldTransforms,l,o),f=o.data;return f.setAll(L_(r)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((p=>p.field)))})(n,e,t,i):(function(r,o,c){return jo(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function Tw(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=P_(i.transform,s||null);r!=null&&(t===null&&(t=et.empty()),t.set(i.field,r))}return t||null}function jf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Hi(i,s,((r,o)=>Ew(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class $r extends Ka{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Bn extends Ka{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function L_(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Hf(n,e,t){const i=new Map;ne(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,gw(o,c,t[s]))}return i}function $f(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,_w(r,o,e))}return i}class bu extends Ka{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ww extends Ka{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&vw(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ir(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ir(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=C_();return this.mutations.forEach((s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(s.key)?null:c;const l=O_(o,c);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),J())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,((t,i)=>jf(t,i)))&&Hi(this.baseMutations,e.baseMutations,((t,i)=>jf(t,i)))}}class Pu{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){ne(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let s=(function(){return hw})();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Pu(e,t,i,s)}}/**
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
 */class Rw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Sw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,Z;function Cw(n){switch(n){case b.OK:return q(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function V_(n){if(n===void 0)return Zt("GRPC error has no .code"),b.UNKNOWN;switch(n){case ve.OK:return b.OK;case ve.CANCELLED:return b.CANCELLED;case ve.UNKNOWN:return b.UNKNOWN;case ve.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ve.INTERNAL:return b.INTERNAL;case ve.UNAVAILABLE:return b.UNAVAILABLE;case ve.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ve.NOT_FOUND:return b.NOT_FOUND;case ve.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ve.ABORTED:return b.ABORTED;case ve.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ve.DATA_LOSS:return b.DATA_LOSS;default:return q(39323,{code:n})}}(Z=ve||(ve={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bw(){return new TextEncoder}/**
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
 */const Pw=new vn([4294967295,4294967295],0);function Gf(n){const e=bw().encode(n),t=new Km;return t.update(e),new Uint8Array(t.digest())}function zf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new vn([t,i],0),new vn([s,r],0)]}class Nu{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Qs(`Invalid padding: ${t}`);if(i<0)throw new Qs(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Qs(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Qs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vn.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(vn.fromNumber(i)));return s.compare(Pw)===1&&(s=new vn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Gf(e),[i,s]=zf(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Nu(r,s,t);return i.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Gf(e),[i,s]=zf(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.Se(o)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Gr.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Qa(W.min(),s,new Se(X),en(),J())}}class Gr{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Gr(i,t,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t,i,s){this.be=e,this.removedTargetIds=t,this.key=i,this.De=s}}class M_{constructor(e,t){this.targetId=e,this.Ce=t}}class x_{constructor(e,t,i=xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Kf{constructor(){this.ve=0,this.Fe=Qf(),this.Me=xe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=J(),t=J(),i=J();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:q(38017,{changeType:r})}})),new Gr(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=Qf()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ne(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Nw{constructor(e){this.Ge=e,this.ze=new Map,this.je=en(),this.Je=ko(),this.He=ko(),this.Ye=new Se(X)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:q(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(xl(r))if(i===0){const o=new F(r.path);this.et(t,o,je.newNoDocument(o,W.min()))}else ne(i===1,20013,{expectedCount:i});else{const o=this._t(t);if(o!==i){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,c;try{o=Dn(i).toUint8Array()}catch(l){if(l instanceof c_)return ci("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Nu(o,s,r)}catch(l){return ci(l instanceof Qs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&xl(c.target)){const l=new F(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,je.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.qe())}}));let i=J();this.He.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const s=new Qa(e,t,this.Ye,this.je,i);return this.je=en(),this.Je=ko(),this.He=ko(),this.Ye=new Se(X),s}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Kf,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Pe(X),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Pe(X),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Kf),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ko(){return new Se(F.comparator)}function Qf(){return new Se(F.comparator)}const kw={asc:"ASCENDING",desc:"DESCENDING"},Dw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ow={and:"AND",or:"OR"};class Lw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ul(n,e){return n.useProto3Json||Wa(e)?e:{value:e}}function oa(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function F_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Vw(n,e){return oa(n,e.toTimestamp())}function Nt(n){return ne(!!n,49232),W.fromTimestamp((function(t){const i=kn(t);return new ae(i.seconds,i.nanos)})(n))}function ku(n,e){return ql(n,e).canonicalString()}function ql(n,e){const t=(function(s){return new oe(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function U_(n){const e=oe.fromString(n);return ne(H_(e),10190,{key:e.toString()}),e}function Bl(n,e){return ku(n.databaseId,e.path)}function nl(n,e){const t=U_(e);if(t.get(1)!==n.databaseId.projectId)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(B_(t))}function q_(n,e){return ku(n.databaseId,e)}function Mw(n){const e=U_(n);return e.length===4?oe.emptyPath():B_(e)}function Wl(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function B_(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Yf(n,e,t){return{name:Bl(n,e),fields:t.value.mapValue.fields}}function xw(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:q(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(u,f){return u.useProto3Json?(ne(f===void 0||typeof f=="string",58123),xe.fromBase64String(f||"")):(ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),xe.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?b.UNKNOWN:V_(u.code);return new V(f,u.message||"")})(o);t=new x_(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=nl(n,i.document.name),r=Nt(i.document.updateTime),o=i.document.createTime?Nt(i.document.createTime):W.min(),c=new et({mapValue:{fields:i.document.fields}}),l=je.newFoundDocument(s,r,o,c),u=i.targetIds||[],f=i.removedTargetIds||[];t=new Ho(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=nl(n,i.document),r=i.readTime?Nt(i.readTime):W.min(),o=je.newNoDocument(s,r),c=i.removedTargetIds||[];t=new Ho([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=nl(n,i.document),r=i.removedTargetIds||[];t=new Ho([],r,s,null)}else{if(!("filter"in e))return q(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new Sw(s,r),c=i.targetId;t=new M_(c,o)}}return t}function Fw(n,e){let t;if(e instanceof $r)t={update:Yf(n,e.key,e.value)};else if(e instanceof bu)t={delete:Bl(n,e.key)};else if(e instanceof Bn)t={update:Yf(n,e.key,e.data),updateMask:zw(e.fieldMask)};else{if(!(e instanceof ww))return q(16599,{Vt:e.type});t={verify:Bl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(r,o){const c=o.transform;if(c instanceof vr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Tr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof wr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ra)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw q(20930,{transform:o.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(s,r){return r.updateTime!==void 0?{updateTime:Vw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:q(27497)})(n,e.precondition)),t}function Uw(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map((t=>(function(s,r){let o=s.updateTime?Nt(s.updateTime):Nt(r);return o.isEqual(W.min())&&(o=Nt(r)),new Iw(o,s.transformResults||[])})(t,e)))):[]}function qw(n,e){return{documents:[q_(n,e.path)]}}function Bw(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=q_(n,s);const r=(function(u){if(u.length!==0)return j_(Tt.create(u,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Ni(m.field),direction:Hw(m.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Ul(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:s}}function Ww(n){let e=Mw(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){ne(i===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let r=[];t.where&&(r=(function(p){const m=W_(p);return m instanceof Tt&&y_(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((m=>(function(C){return new Ir(ki(C.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,Wa(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(p){const m=!!p.before,w=p.values||[];return new ia(w,m)})(t.startAt));let u=null;return t.endAt&&(u=(function(p){const m=!p.before,w=p.values||[];return new ia(w,m)})(t.endAt)),ow(e,s,o,r,c,"F",l,u)}function jw(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function W_(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=ki(t.unaryFilter.field);return Ae.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ki(t.unaryFilter.field);return Ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ki(t.unaryFilter.field);return Ae.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ki(t.unaryFilter.field);return Ae.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ae.create(ki(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Tt.create(t.compositeFilter.filters.map((i=>W_(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}})(t.compositeFilter.op))})(n):q(30097,{filter:n})}function Hw(n){return kw[n]}function $w(n){return Dw[n]}function Gw(n){return Ow[n]}function Ni(n){return{fieldPath:n.canonicalString()}}function ki(n){return Ve.fromServerFormat(n.fieldPath)}function j_(n){return n instanceof Ae?(function(t){if(t.op==="=="){if(xf(t.value))return{unaryFilter:{field:Ni(t.field),op:"IS_NAN"}};if(Mf(t.value))return{unaryFilter:{field:Ni(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xf(t.value))return{unaryFilter:{field:Ni(t.field),op:"IS_NOT_NAN"}};if(Mf(t.value))return{unaryFilter:{field:Ni(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ni(t.field),op:$w(t.op),value:t.value}}})(n):n instanceof Tt?(function(t){const i=t.getFilters().map((s=>j_(s)));return i.length===1?i[0]:{compositeFilter:{op:Gw(t.op),filters:i}}})(n):q(54877,{filter:n})}function zw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function H_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,i,s,r=W.min(),o=W.min(),c=xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.yt=e}}function Qw(n){const e=Ww({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?sa(e,e.limit,"L"):e}/**
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
 */class Yw{constructor(){this.Cn=new Xw}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Nn.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Nn.min())}updateCollectionGroup(e,t,i){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class Xw{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Pe(oe.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Pe(oe.comparator)).toArray()}}/**
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
 */const Xf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$_=41943040;class Ze{static withCacheSize(e){return new Ze(e,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze.DEFAULT_COLLECTION_PERCENTILE=10,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ze.DEFAULT=new Ze($_,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ze.DISABLED=new Ze(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ki(0)}static cr(){return new Ki(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="LruGarbageCollector",Jw=1048576;function Zf([n,e],[t,i]){const s=X(n,t);return s===0?X(e,i):s}class Zw{constructor(e){this.Ir=e,this.buffer=new Pe(Zf),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Zf(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class eA{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){M(Jf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){as(t)?M(Jf,"Ignoring IndexedDB error during garbage collection: ",t):await os(t)}await this.Vr(3e5)}))}}class tA{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Ba.ce);const i=new Zw(t);return this.mr.forEachTarget(e,(s=>i.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>i.Ar(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Xf)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xf):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,s,r,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(i=p,c=Date.now(),this.removeTargets(e,i,t)))).next((p=>(r=p,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((p=>(u=Date.now(),bi()<=Y.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:p}))))}}function nA(n,e){return new tA(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(){this.changes=new _i((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?P.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&ir(i.mutation,s,ut.empty(),ae.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,J()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=J()){const s=ei();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let o=Ks();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const i=ei();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,J())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,i,s){let r=en();const o=nr(),c=(function(){return nr()})();return t.forEach(((l,u)=>{const f=i.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Bn)?r=r.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),ir(f.mutation,u,f.mutation.getFieldMask(),ae.now())):o.set(u.key,ut.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((u,f)=>o.set(u,f))),t.forEach(((u,f)=>c.set(u,new sA(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=nr();let s=new Se(((o,c)=>o-c)),r=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let f=i.get(l)||ut.empty();f=c.applyToLocalView(u,f),i.set(l,f);const p=(s.get(c.batchId)||J()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=C_();f.forEach((m=>{if(!r.has(m)){const w=O_(t.get(m),i.get(m));w!==null&&p.set(m,w),r=r.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return P.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return(function(o){return F.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):T_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):P.resolve(ei());let c=gr,l=r;return o.next((u=>P.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),r.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,r))).next((()=>this.computeViews(e,l,u,J()))).next((f=>({batchId:c,changes:S_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next((i=>{let s=Ks();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=Ks();return this.indexManager.getCollectionParents(e,r).next((c=>P.forEach(c,(l=>{const u=(function(p,m){return new cs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,i,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((o=>{r.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,je.newInvalidDocument(f)))}));let c=Ks();return o.forEach(((l,u)=>{const f=r.get(l);f!==void 0&&ir(f.mutation,u,ut.empty(),ae.now()),Ga(t,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return P.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Nt(s.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:Qw(s.bundledQuery),readTime:Nt(s.readTime)}})(t)),P.resolve()}}/**
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
 */class aA{constructor(){this.overlays=new Se(F.comparator),this.qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ei();return P.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.St(e,t,r)})),P.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.qr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.qr.delete(i)),P.resolve()}getOverlaysForCollection(e,t,i){const s=ei(),r=t.length+1,o=new F(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new Se(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>i){let f=r.get(u.largestBatchId);f===null&&(f=ei(),r=r.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=ei(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return P.resolve(c)}St(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(i.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Rw(t,i));let r=this.qr.get(t);r===void 0&&(r=J(),this.qr.set(t,r)),this.qr.set(t,r.add(i.key))}}/**
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
 */class cA{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.Qr=new Pe(De.$r),this.Ur=new Pe(De.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new De(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new De(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new F(new oe([])),i=new De(t,e),s=new De(t,e+1),r=[];return this.Ur.forEachInRange([i,s],(o=>{this.Gr(o),r.push(o.key)})),r}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new F(new oe([])),i=new De(t,e),s=new De(t,e+1);let r=J();return this.Ur.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new De(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class De{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return F.comparator(e.key,t.key)||X(e.Yr,t.Yr)}static Kr(e,t){return X(e.Yr,t.Yr)||F.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Pe(De.$r)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Aw(r,t,i,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new De(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.ei(i),r=s<0?0:s;return P.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Tu:this.tr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new De(t,0),s=new De(t,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([i,s],(o=>{const c=this.Xr(o.Yr);r.push(c)})),P.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Pe(X);return t.forEach((s=>{const r=new De(s,0),o=new De(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([r,o],(c=>{i=i.add(c.Yr)}))})),P.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;F.isDocumentKey(r)||(r=r.child(""));const o=new De(new F(r),0);let c=new Pe(X);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),P.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((i=>{const s=this.Xr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){ne(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return P.forEach(t.mutations,(s=>{const r=new De(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new De(t,0),s=this.Zr.firstAfterOrEqual(i);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.ri=e,this.docs=(function(){return new Se(F.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return P.resolve(i?i.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let i=en();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():je.newInvalidDocument(s))})),P.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=en();const o=t.path,c=new F(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||FT(xT(f),i)<=0||(s.has(f.key)||Ga(t,f))&&(r=r.insert(f.key,f.mutableCopy()))}return P.resolve(r)}getAllFromCollectionGroup(e,t,i,s){q(9500)}ii(e,t){return P.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new hA(this)}getSize(e){return P.resolve(this.size)}}class hA extends iA{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(i)})),P.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.persistence=e,this.si=new _i((t=>Ru(t)),Su),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new Du,this.targetCount=0,this.ai=Ki.ur()}forEachTarget(e,t){return this.si.forEach(((i,s)=>t(s))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),P.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Ki(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Pr(t),P.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.si.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),P.waitFor(r).next((()=>s))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return P.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),P.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((o=>{r.push(s.markPotentiallyOrphaned(e,o))})),P.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return P.resolve(i)}containsKey(e,t){return P.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ba(0),this.li=!1,this.li=!0,this.hi=new cA,this.referenceDelegate=e(this),this.Pi=new dA(this),this.indexManager=new Yw,this.remoteDocumentCache=(function(s){return new uA(s)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new Kw(t),this.Ii=new oA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new lA(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){M("MemoryPersistence","Starting transaction:",e);const s=new fA(this.ci.next());return this.referenceDelegate.Ei(),i(s).next((r=>this.referenceDelegate.di(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ai(e,t){return P.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class fA extends qT{constructor(e){super(),this.currentSequenceNumber=e}}class Ou{constructor(e){this.persistence=e,this.Ri=new Du,this.Vi=null}static mi(e){return new Ou(e)}get fi(){if(this.Vi)return this.Vi;throw q(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),P.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.fi.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,(i=>{const s=F.fromPath(i);return this.gi(e,s).next((r=>{r||t.removeEntry(s,W.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class aa{constructor(e,t){this.persistence=e,this.pi=new _i((i=>jT(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=nA(this,t)}static mi(e,t){return new aa(e,t)}Ei(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return P.forEach(this.pi,((i,s)=>this.br(e,i,s).next((r=>r?P.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,t).next((c=>{c||(i++,r.removeEntry(o,W.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),P.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Bo(e.data.value)),t}br(e,t,i){return P.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return P.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Es=i,this.ds=s}static As(e,t){let i=J(),s=J();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Lu(e,t.fromCache,i,s)}}/**
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
 */class pA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mA{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return sv()?8:BT($e())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.ys(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ws(e,t,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new pA;return this.Ss(e,t,o).next((c=>{if(r.result=c,this.Vs)return this.bs(e,t,o,c.size)}))})).next((()=>r.result))}bs(e,t,i,s){return i.documentReadCount<this.fs?(bi()<=Y.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Pi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(bi()<=Y.DEBUG&&M("QueryEngine","Query:",Pi(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.gs*s?(bi()<=Y.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Pi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pt(t))):P.resolve())}ys(e,t){if(Bf(t))return P.resolve(null);let i=Pt(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=sa(t,null,"F"),i=Pt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const o=J(...r);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const u=this.Ds(t,c);return this.Cs(t,u,o,l.readTime)?this.ys(e,sa(t,null,"F")):this.vs(e,u,t,l)}))))})))))}ws(e,t,i,s){return Bf(t)||s.isEqual(W.min())?P.resolve(null):this.ps.getDocuments(e,i).next((r=>{const o=this.Ds(t,r);return this.Cs(t,o,i,s)?P.resolve(null):(bi()<=Y.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pi(t)),this.vs(e,o,t,MT(s,gr)).next((c=>c)))}))}Ds(e,t){let i=new Pe(A_(e));return t.forEach(((s,r)=>{Ga(e,r)&&(i=i.add(r))})),i}Cs(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ss(e,t,i){return bi()<=Y.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Pi(t)),this.ps.getDocumentsMatchingQuery(e,t,Nn.min(),i)}vs(e,t,i,s){return this.ps.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="LocalStore",_A=3e8;class gA{constructor(e,t,i,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Se(X),this.xs=new _i((r=>Ru(r)),Su),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function yA(n,e,t,i){return new gA(n,e,t,i)}async function z_(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],c=[];let l=J();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of r){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(i,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function EA(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const s=e.batch.keys(),r=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let w=P.resolve();return m.forEach((C=>{w=w.next((()=>f.getEntry(l,C))).next((k=>{const N=u.docVersions.get(C);ne(N!==null,48541),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))}))})),w.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,i,e,r).next((()=>r.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(c){let l=J();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(i,s)))}))}function K_(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function IA(n,e){const t=j(n),i=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(t.Pi.removeMatchingKeys(r,f.removedDocuments,p).next((()=>t.Pi.addMatchingKeys(r,f.addedDocuments,p))));let w=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(xe.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,i)),s=s.insert(p,w),(function(k,N,H){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=_A?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(m,w,f)&&c.push(t.Pi.updateTargetData(r,w))}));let l=en(),u=J();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,f))})),c.push(vA(r,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!i.isEqual(W.min())){const f=t.Pi.getLastRemoteSnapshotVersion(r).next((p=>t.Pi.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(f)}return P.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,u))).next((()=>l))})).then((r=>(t.Ms=s,r)))}function vA(n,e,t){let i=J(),s=J();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let o=en();return t.forEach(((c,l)=>{const u=r.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):M(Vu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function TA(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Tu),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function wA(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.Pi.getTargetData(i,e).next((r=>r?(s=r,P.resolve(s)):t.Pi.allocateTargetId(i).next((o=>(s=new yn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.Ms.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function jl(n,e,t){const i=j(n),s=i.Ms.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!as(o))throw o;M(Vu,`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ms=i.Ms.remove(e),i.xs.delete(s.target)}function ep(n,e,t){const i=j(n);let s=W.min(),r=J();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=j(l),m=p.xs.get(f);return m!==void 0?P.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(i,o,Pt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>i.Fs.getDocumentsMatchingQuery(o,e,t?s:W.min(),t?r:J()))).next((c=>(AA(i,cw(e),c),{documents:c,Qs:r})))))}function AA(n,e,t){let i=n.Os.get(e)||W.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Os.set(e,i)}class tp{constructor(){this.activeTargetIds=pw()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RA{constructor(){this.Mo=new tp,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new tp,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class SA{Oo(e){}shutdown(){}}/**
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
 */const np="ConnectivityMonitor";class ip{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){M(np,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){M(np,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Do=null;function Hl(){return Do===null?Do=(function(){return 268435456+Math.round(2147483648*Math.random())})():Do++,"0x"+Do.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="RestConnection",CA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bA{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${s}`,this.Wo=this.databaseId.database===ta?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Go(e,t,i,s,r){const o=Hl(),c=this.zo(e,t.toUriEncodedString());M(il,`Sending RPC '${e}' ${o}:`,c,i);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,r);const{host:u}=new URL(c),f=Un(u);return this.Jo(e,c,l,i,f).then((p=>(M(il,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw ci(il,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",i),p}))}Ho(e,t,i,s,r,o){return this.Go(e,t,i,s,r)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+rs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}zo(e,t){const i=CA[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="WebChannelConnection";class NA extends bA{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,s,r){const o=Hl();return new Promise(((c,l)=>{const u=new Qm;u.setWithCredentials(!0),u.listenOnce(Ym.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case qo.NO_ERROR:const p=u.getResponseJson();M(Be,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case qo.TIMEOUT:M(Be,`RPC '${e}' ${o} timed out`),l(new V(b.DEADLINE_EXCEEDED,"Request time out"));break;case qo.HTTP_ERROR:const m=u.getStatus();if(M(Be,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const C=w==null?void 0:w.error;if(C&&C.status&&C.message){const k=(function(H){const $=H.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf($)>=0?$:b.UNKNOWN})(C.status);l(new V(k,C.message))}else l(new V(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new V(b.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{M(Be,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);M(Be,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",f,i,15)}))}T_(e,t,i){const s=Hl(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Zm(),c=Jm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,i),l.encodeInitMessageHeaders=!0;const f=r.join("");M(Be,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,w=!1;const C=new PA({Yo:N=>{w?M(Be,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(M(Be,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),M(Be,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},Zo:()=>p.close()}),k=(N,H,$)=>{N.listen(H,(ee=>{try{$(ee)}catch(Ie){setTimeout((()=>{throw Ie}),0)}}))};return k(p,zs.EventType.OPEN,(()=>{w||(M(Be,`RPC '${e}' stream ${s} transport opened.`),C.o_())})),k(p,zs.EventType.CLOSE,(()=>{w||(w=!0,M(Be,`RPC '${e}' stream ${s} transport closed`),C.a_(),this.E_(p))})),k(p,zs.EventType.ERROR,(N=>{w||(w=!0,ci(Be,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),C.a_(new V(b.UNAVAILABLE,"The operation could not be completed")))})),k(p,zs.EventType.MESSAGE,(N=>{var H;if(!w){const $=N.data[0];ne(!!$,16349);const ee=$,Ie=(ee==null?void 0:ee.error)||((H=ee[0])==null?void 0:H.error);if(Ie){M(Be,`RPC '${e}' stream ${s} received error:`,Ie);const ot=Ie.status;let Ce=(function(E){const T=ve[E];if(T!==void 0)return V_(T)})(ot),v=Ie.message;Ce===void 0&&(Ce=b.INTERNAL,v="Unknown error status: "+ot+" with message "+Ie.message),w=!0,C.a_(new V(Ce,v)),p.close()}else M(Be,`RPC '${e}' stream ${s} received:`,$),C.u_($)}})),k(c,Xm.STAT_EVENT,(N=>{N.stat===kl.PROXY?M(Be,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===kl.NOPROXY&&M(Be,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function sl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n){return new Lw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=s,this.R_=r,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="PersistentStream";class Y_{constructor(e,t,i,s,r,o,c,l){this.Mi=e,this.S_=i,this.b_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Q_(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(Zt(t.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new V(b.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return M(sp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(M(sp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class kA extends Y_{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=xw(this.serializer,e),i=(function(r){if(!("targetChange"in r))return W.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?Nt(o.readTime):W.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=Wl(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=xl(l)?{documents:qw(r,l)}:{query:Bw(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=F_(r,o.resumeToken);const u=Ul(r,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(W.min())>0){c.readTime=oa(r,o.snapshotVersion.toTimestamp());const u=Ul(r,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const i=jw(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=Wl(this.serializer),t.removeTarget=e,this.q_(t)}}class DA extends Y_{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Uw(e.writeResults,e.commitTime),i=Nt(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Wl(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>Fw(this.serializer,i)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{}class LA extends OA{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Go(e,ql(t,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(b.UNKNOWN,r.toString())}))}Ho(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,ql(t,i),s,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(b.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class VA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Zt(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li="RemoteStore";class MA{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo((o=>{i.enqueueAndForget((async()=>{gi(this)&&(M(li,"Restarting streams for network reachability change."),await(async function(l){const u=j(l);u.Ea.add(4),await zr(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Xa(u)})(this))}))})),this.Ra=new VA(i,s)}}async function Xa(n){if(gi(n))for(const e of n.da)await e(!0)}async function zr(n){for(const e of n.da)await e(!1)}function X_(n,e){const t=j(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Uu(t)?Fu(t):ls(t).O_()&&xu(t,e))}function Mu(n,e){const t=j(n),i=ls(t);t.Ia.delete(e),i.O_()&&J_(t,e),t.Ia.size===0&&(i.O_()?i.L_():gi(t)&&t.Ra.set("Unknown"))}function xu(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ls(n).Y_(e)}function J_(n,e){n.Va.Ue(e),ls(n).Z_(e)}function Fu(n){n.Va=new Nw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ls(n).start(),n.Ra.ua()}function Uu(n){return gi(n)&&!ls(n).x_()&&n.Ia.size>0}function gi(n){return j(n).Ea.size===0}function Z_(n){n.Va=void 0}async function xA(n){n.Ra.set("Online")}async function FA(n){n.Ia.forEach(((e,t)=>{xu(n,e)}))}async function UA(n,e){Z_(n),Uu(n)?(n.Ra.ha(e),Fu(n)):n.Ra.set("Unknown")}async function qA(n,e,t){if(n.Ra.set("Online"),e instanceof x_&&e.state===2&&e.cause)try{await(async function(s,r){const o=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(n,e)}catch(i){M(li,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ca(n,i)}else if(e instanceof Ho?n.Va.Ze(e):e instanceof M_?n.Va.st(e):n.Va.tt(e),!t.isEqual(W.min()))try{const i=await K_(n.localStore);t.compareTo(i)>=0&&await(function(r,o){const c=r.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=r.Ia.get(u);f&&r.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=r.Ia.get(l);if(!f)return;r.Ia.set(l,f.withResumeToken(xe.EMPTY_BYTE_STRING,f.snapshotVersion)),J_(r,l);const p=new yn(f.target,l,u,f.sequenceNumber);xu(r,p)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){M(li,"Failed to raise snapshot:",i),await ca(n,i)}}async function ca(n,e,t){if(!as(e))throw e;n.Ea.add(1),await zr(n),n.Ra.set("Offline"),t||(t=()=>K_(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(li,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Xa(n)}))}function eg(n,e){return e().catch((t=>ca(n,t,e)))}async function Ja(n){const e=j(n),t=Ln(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Tu;for(;BA(e);)try{const s=await TA(e.localStore,i);if(s===null){e.Ta.length===0&&t.L_();break}i=s.batchId,WA(e,s)}catch(s){await ca(e,s)}tg(e)&&ng(e)}function BA(n){return gi(n)&&n.Ta.length<10}function WA(n,e){n.Ta.push(e);const t=Ln(n);t.O_()&&t.X_&&t.ea(e.mutations)}function tg(n){return gi(n)&&!Ln(n).x_()&&n.Ta.length>0}function ng(n){Ln(n).start()}async function jA(n){Ln(n).ra()}async function HA(n){const e=Ln(n);for(const t of n.Ta)e.ea(t.mutations)}async function $A(n,e,t){const i=n.Ta.shift(),s=Pu.from(i,e,t);await eg(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Ja(n)}async function GA(n,e){e&&Ln(n).X_&&await(async function(i,s){if((function(o){return Cw(o)&&o!==b.ABORTED})(s.code)){const r=i.Ta.shift();Ln(i).B_(),await eg(i,(()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s))),await Ja(i)}})(n,e),tg(n)&&ng(n)}async function rp(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),M(li,"RemoteStore received new credentials");const i=gi(t);t.Ea.add(3),await zr(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Xa(t)}async function zA(n,e){const t=j(n);e?(t.Ea.delete(2),await Xa(t)):e||(t.Ea.add(2),await zr(t),t.Ra.set("Unknown"))}function ls(n){return n.ma||(n.ma=(function(t,i,s){const r=j(t);return r.sa(),new kA(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Xo:xA.bind(null,n),t_:FA.bind(null,n),r_:UA.bind(null,n),H_:qA.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Uu(n)?Fu(n):n.Ra.set("Unknown")):(await n.ma.stop(),Z_(n))}))),n.ma}function Ln(n){return n.fa||(n.fa=(function(t,i,s){const r=j(t);return r.sa(),new DA(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:jA.bind(null,n),r_:GA.bind(null,n),ta:HA.bind(null,n),na:$A.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Ja(n)):(await n.fa.stop(),n.Ta.length>0&&(M(li,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,c=new qu(e,t,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bu(n,e){if(Zt("AsyncQueue",`${e}: ${n}`),as(n))return new V(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{static emptySet(e){return new Vi(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||F.comparator(t.key,i.key):(t,i)=>F.comparator(t.key,i.key),this.keyedMap=Ks(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Vi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.ga=new Se(F.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):q(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Qi{constructor(e,t,i,s,r,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Qi(e,t,Vi.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class QA{constructor(){this.queries=ap(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=j(t),r=s.queries;s.queries=ap(),r.forEach(((o,c)=>{for(const l of c.Sa)l.onError(i)}))})(this,new V(b.ABORTED,"Firestore shutting down"))}}function ap(){return new _i((n=>w_(n)),$a)}async function Wu(n,e){const t=j(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.ba()&&e.Da()&&(i=2):(r=new KA,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Bu(o,`Initialization of query '${Pi(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.Sa.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Hu(t)}async function ju(n,e){const t=j(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.Sa.indexOf(e);o>=0&&(r.Sa.splice(o,1),r.Sa.length===0?s=e.Da()?0:1:!r.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function YA(n,e){const t=j(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const c of o.Sa)c.Fa(s)&&(i=!0);o.wa=s}}i&&Hu(t)}function XA(n,e,t){const i=j(n),s=i.queries.get(e);if(s)for(const r of s.Sa)r.onError(t);i.queries.delete(e)}function Hu(n){n.Ca.forEach((e=>{e.next()}))}var $l,cp;(cp=$l||($l={})).Ma="default",cp.Cache="cache";class $u{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Qi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$l.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.key=e}}class sg{constructor(e){this.key=e}}class JA{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=J(),this.mutatedKeys=J(),this.eu=A_(e),this.tu=new Vi(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new op,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),w=Ga(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let N=!1;m&&w?m.data.isEqual(w.data)?C!==k&&(i.track({type:3,doc:w}),N=!0):this.su(m,w)||(i.track({type:2,doc:w}),N=!0,(l&&this.eu(w,l)>0||u&&this.eu(w,u)<0)&&(c=!0)):!m&&w?(i.track({type:0,doc:w}),N=!0):m&&!w&&(i.track({type:1,doc:m}),N=!0,(l||u)&&(c=!0)),N&&(w?(o=o.add(w),r=k?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),i.track({type:1,doc:f})}return{tu:o,iu:i,Cs:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(w,C){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Rt:N})}};return k(w)-k(C)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Qi(this.query,e.tu,r,o,e.mutatedKeys,l===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new op,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=J(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new sg(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new ig(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=J();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Qi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Gu="SyncEngine";class ZA{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class eR{constructor(e){this.key=e,this.hu=!1}}class tR{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new _i((c=>w_(c)),$a),this.Iu=new Map,this.Eu=new Set,this.du=new Se(F.comparator),this.Au=new Map,this.Ru=new Du,this.Vu={},this.mu=new Map,this.fu=Ki.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function nR(n,e,t=!0){const i=ug(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await rg(i,e,t,!0),s}async function iR(n,e){const t=ug(n);await rg(t,e,!0,!1)}async function rg(n,e,t,i){const s=await wA(n.localStore,Pt(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await sR(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&X_(n.remoteStore,s),c}async function sR(n,e,t,i,s){n.pu=(p,m,w)=>(async function(k,N,H,$){let ee=N.view.ru(H);ee.Cs&&(ee=await ep(k.localStore,N.query,!1).then((({documents:v})=>N.view.ru(v,ee))));const Ie=$&&$.targetChanges.get(N.targetId),ot=$&&$.targetMismatches.get(N.targetId)!=null,Ce=N.view.applyChanges(ee,k.isPrimaryClient,Ie,ot);return up(k,N.targetId,Ce.au),Ce.snapshot})(n,p,m,w);const r=await ep(n.localStore,e,!0),o=new JA(e,r.Qs),c=o.ru(r.documents),l=Gr.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);up(n,t,u.au);const f=new ZA(e,t,o);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),u.snapshot}async function rR(n,e,t){const i=j(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!$a(o,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await jl(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Mu(i.remoteStore,s.targetId),Gl(i,s.targetId)})).catch(os)):(Gl(i,s.targetId),await jl(i.localStore,s.targetId,!0))}async function oR(n,e){const t=j(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Mu(t.remoteStore,i.targetId))}async function aR(n,e,t){const i=pR(n);try{const s=await(function(o,c){const l=j(o),u=ae.now(),f=c.reduce(((w,C)=>w.add(C.key)),J());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let C=en(),k=J();return l.Ns.getEntries(w,f).next((N=>{C=N,C.forEach(((H,$)=>{$.isValidDocument()||(k=k.add(H))}))})).next((()=>l.localDocuments.getOverlayedDocuments(w,C))).next((N=>{p=N;const H=[];for(const $ of c){const ee=Tw($,p.get($.key).overlayedDocument);ee!=null&&H.push(new Bn($.key,ee,m_(ee.value.mapValue),ft.exists(!0)))}return l.mutationQueue.addMutationBatch(w,u,H,c)})).next((N=>{m=N;const H=N.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(w,N.batchId,H)}))})).then((()=>({batchId:m.batchId,changes:S_(p)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Se(X)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(i,s.batchId,t),await Kr(i,s.changes),await Ja(i.remoteStore)}catch(s){const r=Bu(s,"Failed to persist write");t.reject(r)}}async function og(n,e){const t=j(n);try{const i=await IA(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const o=t.Au.get(r);o&&(ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ne(o.hu,14607):s.removedDocuments.size>0&&(ne(o.hu,42227),o.hu=!1))})),await Kr(t,i,e)}catch(i){await os(i)}}function lp(n,e,t){const i=j(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=j(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&Hu(l)})(i.eventManager,e),s.length&&i.Pu.H_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function cR(n,e,t){const i=j(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let o=new Se(F.comparator);o=o.insert(r,je.newNoDocument(r,W.min()));const c=J().add(r),l=new Qa(W.min(),new Map,new Se(X),o,c);await og(i,l),i.du=i.du.remove(r),i.Au.delete(e),zu(i)}else await jl(i.localStore,e,!1).then((()=>Gl(i,e,t))).catch(os)}async function lR(n,e){const t=j(n),i=e.batch.batchId;try{const s=await EA(t.localStore,e);cg(t,i,null),ag(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Kr(t,s)}catch(s){await os(s)}}async function uR(n,e,t){const i=j(n);try{const s=await(function(o,c){const l=j(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(ne(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(i.localStore,e);cg(i,e,t),ag(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Kr(i,s)}catch(s){await os(s)}}function ag(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function cg(n,e,t){const i=j(n);let s=i.Vu[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.Vu[i.currentUser.toKey()]=s}}function Gl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((i=>{n.Ru.containsKey(i)||lg(n,i)}))}function lg(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Mu(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),zu(n))}function up(n,e,t){for(const i of t)i instanceof ig?(n.Ru.addReference(i.key,e),hR(n,i)):i instanceof sg?(M(Gu,"Document no longer in limbo: "+i.key),n.Ru.removeReference(i.key,e),n.Ru.containsKey(i.key)||lg(n,i.key)):q(19791,{wu:i})}function hR(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Eu.has(i)||(M(Gu,"New document in limbo: "+t),n.Eu.add(i),zu(n))}function zu(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new F(oe.fromString(e)),i=n.fu.next();n.Au.set(i,new eR(t)),n.du=n.du.insert(t,i),X_(n.remoteStore,new yn(Pt(Ha(t.path)),i,"TargetPurposeLimboResolution",Ba.ce))}}async function Kr(n,e,t){const i=j(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{o.push(i.pu(l,e,t).then((u=>{var f;if((u||t)&&i.isPrimaryClient){const p=u?!u.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;i.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Lu.As(l.targetId,u);r.push(p)}})))})),await Promise.all(o),i.Pu.H_(s),await(async function(l,u){const f=j(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>P.forEach(u,(m=>P.forEach(m.Es,(w=>f.persistence.referenceDelegate.addReference(p,m.targetId,w))).next((()=>P.forEach(m.ds,(w=>f.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))))))}catch(p){if(!as(p))throw p;M(Vu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const w=f.Ms.get(m),C=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(m,k)}}})(i.localStore,r))}async function dR(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){M(Gu,"User change. New user:",e.toKey());const i=await z_(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new V(b.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Kr(t,i.Ls)}}function fR(n,e){const t=j(n),i=t.Au.get(e);if(i&&i.hu)return J().add(i.key);{let s=J();const r=t.Iu.get(e);if(!r)return s;for(const o of r){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function ug(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=og.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cR.bind(null,e),e.Pu.H_=YA.bind(null,e.eventManager),e.Pu.yu=XA.bind(null,e.eventManager),e}function pR(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uR.bind(null,e),e}class la{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ya(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return yA(this.persistence,new mA,e.initialUser,this.serializer)}Cu(e){return new G_(Ou.mi,this.serializer)}Du(e){return new RA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}la.provider={build:()=>new la};class mR extends la{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ne(this.persistence.referenceDelegate instanceof aa,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new eA(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ze.withCacheSize(this.cacheSizeBytes):Ze.DEFAULT;return new G_((i=>aa.mi(i,t)),this.serializer)}}class zl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>lp(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=dR.bind(null,this.syncEngine),await zA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new QA})()}createDatastore(e){const t=Ya(e.databaseInfo.databaseId),i=(function(r){return new NA(r)})(e.databaseInfo);return(function(r,o,c,l){return new LA(r,o,c,l)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,o,c){return new MA(i,s,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>lp(this.syncEngine,t,0)),(function(){return ip.v()?new ip:new SA})())}createSyncEngine(e,t){return(function(s,r,o,c,l,u,f){const p=new tR(s,r,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=j(s);M(li,"RemoteStore shutting down."),r.Ea.add(5),await zr(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}zl.provider={build:()=>new zl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ku{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Zt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="FirestoreClient";class _R{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=We.UNAUTHENTICATED,this.clientId=Ua.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{M(Vn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(M(Vn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Bu(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function rl(n,e){n.asyncQueue.verifyOperationInProgress(),M(Vn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await z_(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function hp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await gR(n);M(Vn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>rp(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>rp(e.remoteStore,s))),n._onlineComponents=e}async function gR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(Vn,"Using user provided OfflineComponentProvider");try{await rl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;ci("Error using user provided cache. Falling back to memory cache: "+t),await rl(n,new la)}}else M(Vn,"Using default OfflineComponentProvider"),await rl(n,new mR(void 0));return n._offlineComponents}async function hg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(Vn,"Using user provided OnlineComponentProvider"),await hp(n,n._uninitializedComponentsProvider._online)):(M(Vn,"Using default OnlineComponentProvider"),await hp(n,new zl))),n._onlineComponents}function yR(n){return hg(n).then((e=>e.syncEngine))}async function ua(n){const e=await hg(n),t=e.eventManager;return t.onListen=nR.bind(null,e.syncEngine),t.onUnlisten=rR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=iR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=oR.bind(null,e.syncEngine),t}function ER(n,e,t={}){const i=new Kt;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,c,l,u){const f=new Ku({next:m=>{f.Nu(),o.enqueueAndForget((()=>ju(r,p)));const w=m.docs.has(c);!w&&m.fromCache?u.reject(new V(b.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&l&&l.source==="server"?u.reject(new V(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new $u(Ha(c.path),f,{includeMetadataChanges:!0,qa:!0});return Wu(r,p)})(await ua(n),n.asyncQueue,e,t,i))),i.promise}function IR(n,e,t={}){const i=new Kt;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,c,l,u){const f=new Ku({next:m=>{f.Nu(),o.enqueueAndForget((()=>ju(r,p))),m.fromCache&&l.source==="server"?u.reject(new V(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new $u(c,f,{includeMetadataChanges:!0,qa:!0});return Wu(r,p)})(await ua(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function dg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="firestore.googleapis.com",fp=!0;class pp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fg,this.ssl=fp}else this.host=e.host,this.ssl=e.ssl??fp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Jw)throw new V(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}s_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dg(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Za{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new n_;switch(i.type){case"firstParty":return new PT(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new V(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=dp.get(t);i&&(M("ComponentProvider","Removing Datastore"),dp.delete(t),i.terminate())})(this),Promise.resolve()}}function Qu(n,e,t,i={}){var u;n=Ye(n,Za);const s=Un(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(_u(`https://${c}`),gu("Firestore",!0)),r.host!==fg&&r.host!==c&&ci("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:s,emulatorOptions:i};if(!bn(l,o)&&(n._setSettings(l),i.mockUserToken)){let f,p;if(typeof i.mockUserToken=="string")f=i.mockUserToken,p=We.MOCK_USER;else{f=qm(i.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const m=i.mockUserToken.sub||i.mockUserToken.user_id;if(!m)throw new V(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new We(m)}n._authCredentials=new ST(new t_(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Mt(this.firestore,e,this._query)}}class pe{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pe(this.firestore,e,this._key)}toJSON(){return{type:pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Hr(t,pe._jsonSchema))return new pe(e,i||null,new F(oe.fromString(t.referencePath)))}}pe._jsonSchemaVersion="firestore/documentReference/1.0",pe._jsonSchema={type:Re("string",pe._jsonSchemaVersion),referencePath:Re("string")};class Qt extends Mt{constructor(e,t,i){super(e,t,Ha(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new F(e))}withConverter(e){return new Qt(this.firestore,e,this._path)}}function Ar(n,e,...t){if(n=x(n),i_("collection","path",e),n instanceof Za){const i=oe.fromString(e,...t);return Cf(i),new Qt(n,null,i)}{if(!(n instanceof pe||n instanceof Qt))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(oe.fromString(e,...t));return Cf(i),new Qt(n.firestore,null,i)}}function He(n,e,...t){if(n=x(n),arguments.length===1&&(e=Ua.newId()),i_("doc","path",e),n instanceof Za){const i=oe.fromString(e,...t);return Sf(i),new pe(n,null,new F(i))}{if(!(n instanceof pe||n instanceof Qt))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(oe.fromString(e,...t));return Sf(i),new pe(n.firestore,n instanceof Qt?n.converter:null,new F(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="AsyncQueue";class _p{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Q_(this,"async_queue_retry"),this._c=()=>{const i=sl();i&&M(mp,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=sl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=sl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Kt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!as(e))throw e;M(mp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Zt("INTERNAL UNHANDLED ERROR: ",gp(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=qu.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&q(47125,{Pc:gp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function gp(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function yp(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}class Dt extends Za{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new _p,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _p(e),this._firestoreClient=void 0,await e}}}function pg(n,e){const t=typeof n=="object"?n:Iu(),i=typeof n=="string"?n:ta,s=Fa(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=xm("firestore");r&&Qu(s,...r)}return s}function Qr(n){if(n._terminated)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||vR(n),n._firestoreClient}function vR(n){var i,s,r;const e=n._freezeSettings(),t=(function(c,l,u,f){return new GT(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,dg(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((r=e.localCache)!=null&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new _R(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lt(xe.fromBase64String(e))}catch(t){throw new V(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new lt(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Hr(e,lt._jsonSchema))return lt.fromBase64String(e.bytes)}}lt._jsonSchemaVersion="firestore/bytes/1.0",lt._jsonSchema={type:Re("string",lt._jsonSchemaVersion),bytes:Re("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Et._jsonSchemaVersion}}static fromJSON(e){if(Hr(e,Et._jsonSchema))return new Et(e.latitude,e.longitude)}}Et._jsonSchemaVersion="firestore/geoPoint/1.0",Et._jsonSchema={type:Re("string",Et._jsonSchemaVersion),latitude:Re("number"),longitude:Re("number")};/**
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
 */class It{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:It._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Hr(e,It._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new It(e.vectorValues);throw new V(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}It._jsonSchemaVersion="firestore/vectorValue/1.0",It._jsonSchema={type:Re("string",It._jsonSchemaVersion),vectorValues:Re("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=/^__.*__$/;class wR{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Bn(e,this.data,this.fieldMask,t,this.fieldTransforms):new $r(e,this.data,t,this.fieldTransforms)}}class mg{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Bn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function _g(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ac:n})}}class Yu{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Yu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ha(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(_g(this.Ac)&&TR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class AR{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Ya(e)}Cc(e,t,i,s=!1){return new Yu({Ac:e,methodName:t,Dc:i,path:Ve.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ec(n){const e=n._freezeSettings(),t=Ya(n._databaseId);return new AR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gg(n,e,t,i,s,r={}){const o=n.Cc(r.merge||r.mergeFields?2:0,e,t,s);Ju("Data must be an object, but it was:",o,i);const c=yg(i,o);let l,u;if(r.merge)l=new ut(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const p of r.mergeFields){const m=Kl(e,p,t);if(!o.contains(m))throw new V(b.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Ig(f,m)||f.push(m)}l=new ut(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new wR(new et(c),l,u)}class Jr extends Xr{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jr}}class Xu extends Xr{_toFieldTransform(e){return new yw(e.path,new vr)}isEqual(e){return e instanceof Xu}}function RR(n,e,t,i){const s=n.Cc(1,e,t);Ju("Data must be an object, but it was:",s,i);const r=[],o=et.empty();qn(i,((l,u)=>{const f=Zu(e,l,t);u=x(u);const p=s.yc(f);if(u instanceof Jr)r.push(f);else{const m=Zr(u,p);m!=null&&(r.push(f),o.set(f,m))}}));const c=new ut(r);return new mg(o,c,s.fieldTransforms)}function SR(n,e,t,i,s,r){const o=n.Cc(1,e,t),c=[Kl(e,i,t)],l=[s];if(r.length%2!=0)throw new V(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)c.push(Kl(e,r[m])),l.push(r[m+1]);const u=[],f=et.empty();for(let m=c.length-1;m>=0;--m)if(!Ig(u,c[m])){const w=c[m];let C=l[m];C=x(C);const k=o.yc(w);if(C instanceof Jr)u.push(w);else{const N=Zr(C,k);N!=null&&(u.push(w),f.set(w,N))}}const p=new ut(u);return new mg(f,p,o.fieldTransforms)}function CR(n,e,t,i=!1){return Zr(t,n.Cc(i?4:3,e))}function Zr(n,e){if(Eg(n=x(n)))return Ju("Unsupported field value:",e,n),yg(n,e);if(n instanceof Xr)return(function(i,s){if(!_g(s.Ac))throw s.Sc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,s){const r=[];let o=0;for(const c of i){let l=Zr(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}})(n,e)}return(function(i,s){if((i=x(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return mw(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=ae.fromDate(i);return{timestampValue:oa(s.serializer,r)}}if(i instanceof ae){const r=new ae(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:oa(s.serializer,r)}}if(i instanceof Et)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof lt)return{bytesValue:F_(s.serializer,i._byteString)};if(i instanceof pe){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ku(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof It)return(function(o,c){return{mapValue:{fields:{[f_]:{stringValue:p_},[na]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return Cu(c.serializer,u)}))}}}}}})(i,s);throw s.Sc(`Unsupported field value: ${qa(i)}`)})(n,e)}function yg(n,e){const t={};return a_(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qn(n,((i,s)=>{const r=Zr(s,e.mc(i));r!=null&&(t[i]=r)})),{mapValue:{fields:t}}}function Eg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof Et||n instanceof lt||n instanceof pe||n instanceof Xr||n instanceof It)}function Ju(n,e,t){if(!Eg(t)||!r_(t)){const i=qa(t);throw i==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+i)}}function Kl(n,e,t){if((e=x(e))instanceof Yr)return e._internalPath;if(typeof e=="string")return Zu(n,e);throw ha("Field path arguments must be of type string or ",n,!1,void 0,t)}const bR=new RegExp("[~\\*/\\[\\]]");function Zu(n,e,t){if(e.search(bR)>=0)throw ha(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yr(...e.split("."))._internalPath}catch{throw ha(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ha(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new V(b.INVALID_ARGUMENT,c+n+l)}function Ig(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(tc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class PR extends vg{data(){return super.data()}}function tc(n,e){return typeof e=="string"?Zu(n,e):e instanceof Yr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eh{}class nc extends eh{}function da(n,e,...t){let i=[];e instanceof eh&&i.push(e),i=i.concat(t),(function(r){const o=r.filter((l=>l instanceof ic)).length,c=r.filter((l=>l instanceof eo)).length;if(o>1||o>0&&c>0)throw new V(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const s of i)n=s._apply(n);return n}class eo extends nc{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new eo(e,t,i)}_apply(e){const t=this._parse(e);return wg(e._query,t),new Mt(e.firestore,e.converter,Fl(e._query,t))}_parse(e){const t=ec(e.firestore);return(function(r,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ip(p,f);const C=[];for(const k of p)C.push(Ep(l,r,k));m={arrayValue:{values:C}}}else m=Ep(l,r,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ip(p,f),m=CR(c,o,p,f==="in"||f==="not-in");return Ae.create(u,f,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ql(n,e,t){const i=e,s=tc("where",n);return eo._create(s,i,t)}class ic extends eh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ic(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,r){let o=s;const c=r.getFlattenedFilters();for(const l of c)wg(o,l),o=Fl(o,l)})(e._query,t),new Mt(e.firestore,e.converter,Fl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sc extends nc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new sc(e,t)}_apply(e){const t=(function(s,r,o){if(s.startAt!==null)throw new V(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ir(r,o)})(e._query,this._field,this._direction);return new Mt(e.firestore,e.converter,(function(s,r){const o=s.explicitOrderBy.concat([r]);return new cs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function fa(n,e="asc"){const t=e,i=tc("orderBy",n);return sc._create(i,t)}class rc extends nc{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new rc(e,t,i)}_apply(e){return new Mt(e.firestore,e.converter,sa(e._query,this._limit,this._limitType))}}function pa(n){return VT("limit",n),rc._create("limit",n,"F")}function Ep(n,e,t){if(typeof(t=x(t))=="string"){if(t==="")throw new V(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!T_(e)&&t.indexOf("/")!==-1)throw new V(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(oe.fromString(t));if(!F.isDocumentKey(i))throw new V(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Vf(n,new F(i))}if(t instanceof pe)return Vf(n,t._key);throw new V(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qa(t)}.`)}function Ip(n,e){if(!Array.isArray(n)||n.length===0)throw new V(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wg(n,e){const t=(function(s,r){for(const o of s)for(const c of o.getFlattenedFilters())if(r.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new V(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ag{convertValue(e,t="none"){switch(On(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return qn(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[na].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>ye(o.doubleValue)));return new It(t)}convertGeoPoint(e){return new Et(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=ja(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(yr(e));default:return null}}convertTimestamp(e){const t=kn(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=oe.fromString(e);ne(H_(i),9688,{name:e});const s=new $i(i.get(1),i.get(3)),r=new F(i.popFirst(5));return s.isEqual(t)||Zt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class Oi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wn extends vg{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(tc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=wn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}wn._jsonSchemaVersion="firestore/documentSnapshot/1.0",wn._jsonSchema={type:Re("string",wn._jsonSchemaVersion),bundleSource:Re("string","DocumentSnapshot"),bundleName:Re("string"),bundle:Re("string")};class sr extends wn{data(e={}){return super.data(e)}}class An{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Oi(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new sr(this._firestore,this._userDataWriter,i.key,i,new Oi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new sr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Oi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new sr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Oi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:NR(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=An._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ua.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function NR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(n){n=Ye(n,pe);const e=Ye(n.firestore,Dt);return ER(Qr(e),n._key).then((t=>bg(e,n,t)))}An._jsonSchemaVersion="firestore/querySnapshot/1.0",An._jsonSchema={type:Re("string",An._jsonSchemaVersion),bundleSource:Re("string","QuerySnapshot"),bundleName:Re("string"),bundle:Re("string")};class th extends Ag{constructor(e){super(),this.firestore=e}convertBytes(e){return new lt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}function Sg(n){n=Ye(n,Mt);const e=Ye(n.firestore,Dt),t=Qr(e),i=new th(e);return Tg(n._query),IR(t,n._query).then((s=>new An(e,i,n,s)))}function jt(n,e,t){n=Ye(n,pe);const i=Ye(n.firestore,Dt),s=Rg(n.converter,e,t);return to(i,[gg(ec(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ft.none())])}function Zn(n,e,t,...i){n=Ye(n,pe);const s=Ye(n.firestore,Dt),r=ec(s);let o;return o=typeof(e=x(e))=="string"||e instanceof Yr?SR(r,"updateDoc",n._key,e,t,i):RR(r,"updateDoc",n._key,e),to(s,[o.toMutation(n._key,ft.exists(!0))])}function nh(n){return to(Ye(n.firestore,Dt),[new bu(n._key,ft.none())])}function Cg(n,e){const t=Ye(n.firestore,Dt),i=He(n),s=Rg(n.converter,e);return to(t,[gg(ec(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,ft.exists(!1))]).then((()=>i))}function Rr(n,...e){var l,u,f;n=x(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||yp(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(yp(e[i])){const p=e[i];e[i]=(l=p.next)==null?void 0:l.bind(p),e[i+1]=(u=p.error)==null?void 0:u.bind(p),e[i+2]=(f=p.complete)==null?void 0:f.bind(p)}let r,o,c;if(n instanceof pe)o=Ye(n.firestore,Dt),c=Ha(n._key.path),r={next:p=>{e[i]&&e[i](bg(o,n,p))},error:e[i+1],complete:e[i+2]};else{const p=Ye(n,Mt);o=Ye(p.firestore,Dt),c=p._query;const m=new th(o);r={next:w=>{e[i]&&e[i](new An(o,m,p,w))},error:e[i+1],complete:e[i+2]},Tg(n._query)}return(function(m,w,C,k){const N=new Ku(k),H=new $u(w,N,C);return m.asyncQueue.enqueueAndForget((async()=>Wu(await ua(m),H))),()=>{N.Nu(),m.asyncQueue.enqueueAndForget((async()=>ju(await ua(m),H)))}})(Qr(o),c,s,r)}function to(n,e){return(function(i,s){const r=new Kt;return i.asyncQueue.enqueueAndForget((async()=>aR(await yR(i),s,r))),r.promise})(Qr(n),e)}function bg(n,e,t){const i=t.docs.get(e._key),s=new th(n);return new wn(n,s,e._key,i,new Oi(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(){return new Jr("deleteField")}function Ng(){return new Xu("serverTimestamp")}(function(e,t=!0){(function(s){rs=s})(mi),oi(new Pn("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new Dt(new CT(i.getProvider("auth-internal")),new NT(o,i.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new V(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $i(u.options.projectId,f)})(o,s),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),bt(Tf,wf,e),bt(Tf,wf,"esm2020")})();const kR=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Ag,Bytes:lt,CollectionReference:Qt,DocumentReference:pe,DocumentSnapshot:wn,FieldPath:Yr,FieldValue:Xr,Firestore:Dt,FirestoreError:V,GeoPoint:Et,Query:Mt,QueryCompositeFilterConstraint:ic,QueryConstraint:nc,QueryDocumentSnapshot:sr,QueryFieldFilterConstraint:eo,QueryLimitConstraint:rc,QueryOrderByConstraint:sc,QuerySnapshot:An,SnapshotMetadata:Oi,Timestamp:ae,VectorValue:It,_AutoId:Ua,_ByteString:xe,_DatabaseId:$i,_DocumentKey:F,_EmptyAuthCredentialsProvider:n_,_FieldPath:Ve,_cast:Ye,_logWarn:ci,_validateIsNotUsedTogether:s_,addDoc:Cg,collection:Ar,connectFirestoreEmulator:Qu,deleteDoc:nh,deleteField:Pg,doc:He,ensureFirestoreConfigured:Qr,executeWrite:to,getDoc:si,getDocs:Sg,getFirestore:pg,limit:pa,onSnapshot:Rr,orderBy:fa,query:da,serverTimestamp:Ng,setDoc:jt,updateDoc:Zn,where:Ql},Symbol.toStringTag,{value:"Module"}));var DR="firebase",OR="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(DR,OR,"app");var vp={};const Tp="@firebase/database",wp="1.1.0";/**
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
 */let kg="";function LR(n){kg=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Le(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:pr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new VR(e)}}catch{}return new MR},ti=Dg("localStorage"),xR=Dg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new xa("@firebase/database"),FR=(function(){let n=1;return function(){return n++}})(),Og=function(n){const e=_v(n),t=new dv;t.update(e);const i=t.digest();return mu.encodeByteArray(i)},no=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=no.apply(null,i):typeof i=="object"?e+=Le(i):e+=i,e+=" "}return e};let rr=null,Ap=!0;const UR=function(n,e){O(!0,"Can't turn on custom loggers persistently."),Mi.logLevel=Y.VERBOSE,rr=Mi.log.bind(Mi)},Ue=function(...n){if(Ap===!0&&(Ap=!1,rr===null&&xR.get("logging_enabled")===!0&&UR()),rr){const e=no.apply(null,n);rr(e)}},io=function(n){return function(...e){Ue(n,...e)}},Yl=function(...n){const e="FIREBASE INTERNAL ERROR: "+no(...n);Mi.error(e)},tn=function(...n){const e=`FIREBASE FATAL ERROR: ${no(...n)}`;throw Mi.error(e),new Error(e)},st=function(...n){const e="FIREBASE WARNING: "+no(...n);Mi.warn(e)},qR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&st("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},oc=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},BR=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Yi="[MIN_NAME]",ui="[MAX_NAME]",yi=function(n,e){if(n===e)return 0;if(n===Yi||e===ui)return-1;if(e===Yi||n===ui)return 1;{const t=Rp(n),i=Rp(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},WR=function(n,e){return n===e?0:n<e?-1:1},Os=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Le(e))},ih=function(n){if(typeof n!="object"||n===null)return Le(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Le(e[i]),t+=":",t+=ih(n[e[i]]);return t+="}",t},Lg=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Ge(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Vg=function(n){O(!oc(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,c,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=c+i,o=Math.round(n*Math.pow(2,t-c)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const f=u.join("");let p="";for(l=0;l<64;l+=8){let m=parseInt(f.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},jR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},HR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $R(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const GR=new RegExp("^-?(0*)\\d{1,10}$"),zR=-2147483648,KR=2147483647,Rp=function(n){if(GR.test(n)){const e=Number(n);if(e>=zR&&e<=KR)return e}return null},us=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw st("Exception was thrown by user callback.",t),e},Math.floor(0))}},QR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},or=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class YR{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,fe(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){st(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',st(e)}}class $o{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$o.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="5",Mg="v",xg="s",Fg="r",Ug="f",qg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Bg="ls",Wg="p",Xl="ac",jg="websocket",Hg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t,i,s,r=!1,o="",c=!1,l=!1,u=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ti.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ti.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function JR(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Gg(n,e,t){O(typeof e=="string","typeof type must == string"),O(typeof t=="object","typeof params must == object");let i;if(e===jg)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Hg)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);JR(n)&&(t.ns=n.namespace);const s=[];return Ge(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.counters_={}}incrementCounter(e,t=1){Vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return $I(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol={},al={};function rh(n){const e=n.toString();return ol[e]||(ol[e]=new ZR),ol[e]}function eS(n,e){const t=n.toString();return al[t]||(al[t]=e()),al[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&us(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="start",nS="close",iS="pLPCommand",sS="pRTLPCB",zg="id",Kg="pw",Qg="ser",rS="cb",oS="seg",aS="ts",cS="d",lS="dframe",Yg=1870,Xg=30,uS=Yg-Xg,hS=25e3,dS=3e4;class Li{constructor(e,t,i,s,r,o,c){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=io(e),this.stats_=rh(t),this.urlFn=l=>(this.appCheckToken&&(l[Xl]=this.appCheckToken),Gg(t,Hg,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new tS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dS)),BR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new oh((...r)=>{const[o,c,l,u,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sp)this.id=c,this.password=l;else if(o===nS)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,c]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,c)},()=>{this.onClosed_()},this.urlFn);const i={};i[Sp]="t",i[Qg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[rS]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Mg]=sh,this.transportSessionId&&(i[xg]=this.transportSessionId),this.lastSessionId&&(i[Bg]=this.lastSessionId),this.applicationId&&(i[Wg]=this.applicationId),this.appCheckToken&&(i[Xl]=this.appCheckToken),typeof location<"u"&&location.hostname&&qg.test(location.hostname)&&(i[Fg]=Ug);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Li.forceAllow_=!0}static forceDisallow(){Li.forceDisallow_=!0}static isAvailable(){return Li.forceAllow_?!0:!Li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jR()&&!HR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Lm(t),s=Lg(i,uS);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[lS]="t",i[zg]=e,i[Kg]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Le(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class oh{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=FR(),window[iS+this.uniqueCallbackIdentifier]=e,window[sS+this.uniqueCallbackIdentifier]=t,this.myIFrame=oh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(c){Ue("frame writing exception"),c.stack&&Ue(c.stack),Ue(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ue("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zg]=this.myID,e[Kg]=this.myPW,e[Qg]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Xg+i.length<=Yg;){const o=this.pendingSegs.shift();i=i+"&"+oS+s+"="+o.seg+"&"+aS+s+"="+o.ts+"&"+cS+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(hS)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=16384,pS=45e3;let ma=null;typeof MozWebSocket<"u"?ma=MozWebSocket:typeof WebSocket<"u"&&(ma=WebSocket);class _t{constructor(e,t,i,s,r,o,c){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=io(this.connId),this.stats_=rh(t),this.connURL=_t.connectionURL_(t,o,c,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Mg]=sh,typeof location<"u"&&location.hostname&&qg.test(location.hostname)&&(o[Fg]=Ug),t&&(o[xg]=t),i&&(o[Bg]=i),s&&(o[Xl]=s),r&&(o[Wg]=r),Gg(e,jg,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ti.set("previous_websocket_failure",!0);try{let i;iv(),this.mySock=new ma(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ma!==null&&!_t.forceDisallow_}static previouslyFailed(){return ti.isInMemoryStorage||ti.get("previous_websocket_failure")===!0}markConnectionHealthy(){ti.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=pr(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Lg(t,fS);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pS))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{static get ALL_TRANSPORTS(){return[Li,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=_t&&_t.isAvailable();let i=t&&!_t.previouslyFailed();if(e.webSocketOnly&&(t||st("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[_t];else{const s=this.transports_=[];for(const r of Sr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Sr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Sr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=6e4,_S=5e3,gS=10*1024,yS=100*1024,cl="t",Cp="d",ES="s",bp="r",IS="e",Pp="o",Np="a",kp="n",Dp="p",vS="h";class TS{constructor(e,t,i,s,r,o,c,l,u,f){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=c,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=io("c:"+this.id+":"),this.transportManager_=new Sr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=or(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cl in e){const t=e[cl];t===Np?this.upgradeIfSecondaryHealthy_():t===bp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Pp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Os("t",e),i=Os("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Dp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Np,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Os("t",e),i=Os("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Os(cl,e);if(Cp in e){const i=e[Cp];if(t===vS){const s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===kp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===ES?this.onConnectionShutdown_(i):t===bp?this.onReset_(i):t===IS?Yl("Server Error: "+i):t===Pp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yl("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),sh!==i&&st("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),or(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):or(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_S))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Dp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ti.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){O(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends Zg{static getInstance(){return new _a}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!yu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=32,Lp=768;class ie{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function te(){return new ie("")}function z(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Mn(n){return n.pieces_.length-n.pieceNum_}function re(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ie(n.pieces_,e)}function ah(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function wS(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Cr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ey(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ie(e,0)}function Ee(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof ie)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new ie(t,0)}function K(n){return n.pieceNum_>=n.pieces_.length}function nt(n,e){const t=z(n),i=z(e);if(t===null)return e;if(t===i)return nt(re(n),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function AS(n,e){const t=Cr(n,0),i=Cr(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=yi(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function ch(n,e){if(Mn(n)!==Mn(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function dt(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Mn(n)>Mn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class RS{constructor(e,t){this.errorPrefix_=t,this.parts_=Cr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ma(this.parts_[i]);ty(this)}}function SS(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ma(e),ty(n)}function CS(n){const e=n.parts_.pop();n.byteLength_-=Ma(e),n.parts_.length>0&&(n.byteLength_-=1)}function ty(n){if(n.byteLength_>Lp)throw new Error(n.errorPrefix_+"has a key path longer than "+Lp+" bytes ("+n.byteLength_+").");if(n.parts_.length>Op)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Op+") or object contains a cycle "+Xn(n))}function Xn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends Zg{static getInstance(){return new lh}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=1e3,bS=300*1e3,Vp=30*1e3,PS=1.3,NS=3e4,kS="server_kill",Mp=3;class Yt extends Jg{constructor(e,t,i,s,r,o,c,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=c,this.authOverride_=l,this.id=Yt.nextPersistentConnectionId_++,this.log_=io("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ls,this.maxReconnectDelay_=bS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");lh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_a.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Le(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Ut,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const c=o.d;o.s==="ok"?t.resolve(c):t.reject(c)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const c={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,c=>{const l=c.d,u=c.s;Yt.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",c),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Vt(e,"w")){const i=Wi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();st(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=uv(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Le(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Yl("Unrecognized action received from server: "+Le(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>NS&&(this.reconnectDelay_=Ls),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*PS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Yt.nextConnectionId_++,r=this.lastSessionId;let o=!1,c=null;const l=function(){c?c.close():(o=!0,i())},u=function(p){O(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(p)};this.realtime_={close:l,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Ue("getToken() completed but was canceled"):(Ue("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,c=new TS(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,w=>{st(w+" ("+this.repoInfo_.toString()+")"),this.interrupt(kS)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&st(p),l())}}}interrupt(e){Ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jo(this.interruptReasons_)&&(this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>ih(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new ie(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Ue("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mp&&(this.reconnectDelay_=Vp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ue("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+kg.replace(/\./g,"-")]=1,yu()?e["framework.cordova"]=1:Bm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_a.getInstance().currentlyOnline();return Jo(this.interruptReasons_)&&e}}Yt.nextPersistentConnectionId_=0;Yt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ac{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Q(Yi,e),s=new Q(Yi,t);return this.compare(i,s)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo;class ny extends ac{static get __EMPTY_NODE(){return Oo}static set __EMPTY_NODE(e){Oo=e}compare(e,t){return yi(e.name,t.name)}isDefinedOn(e){throw ss("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Q.MIN}maxPost(){return new Q(ui,Oo)}makePost(e,t){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,Oo)}toString(){return".key"}}const xi=new ny;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Oe{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Oe.RED,this.left=s??it.EMPTY_NODE,this.right=r??it.EMPTY_NODE}copy(e,t,i,s,r){return new Oe(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return it.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Oe.RED=!0;Oe.BLACK=!1;class DS{copy(e,t,i,s,r){return this}insert(e,t,i){return new Oe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class it{constructor(e,t=it.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new it(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Oe.BLACK,null,null))}remove(e){return new it(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oe.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Lo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Lo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Lo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Lo(this.root_,null,this.comparator_,!0,e)}}it.EMPTY_NODE=new DS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(n,e){return yi(n.name,e.name)}function uh(n,e){return yi(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jl;function LS(n){Jl=n}const iy=function(n){return typeof n=="number"?"number:"+Vg(n):"string:"+n},sy=function(n){if(n.isLeafNode()){const e=n.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vt(e,".sv"),"Priority must be a string or number.")}else O(n===Jl||n.isEmpty(),"priority of unexpected type.");O(n===Jl||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xp;class ke{static set __childrenNodeConstructor(e){xp=e}static get __childrenNodeConstructor(){return xp}constructor(e,t=ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:z(e)===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=z(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(O(i!==".priority"||Mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+iy(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Vg(this.value_):e+=this.value_,this.lazyHash_=Og(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ke.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ke.VALUE_TYPE_ORDER.indexOf(t),r=ke.VALUE_TYPE_ORDER.indexOf(i);return O(s>=0,"Unknown leaf type: "+t),O(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ry,oy;function VS(n){ry=n}function MS(n){oy=n}class xS extends ac{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?yi(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(ui,new ke("[PRIORITY-POST]",oy))}makePost(e,t){const i=ry(e);return new Q(t,new ke("[PRIORITY-POST]",i))}toString(){return".priority"}}const me=new xS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=Math.log(2);class US{constructor(e){const t=r=>parseInt(Math.log(r)/FS,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ga=function(n,e,t,i){n.sort(e);const s=function(l,u){const f=u-l;let p,m;if(f===0)return null;if(f===1)return p=n[l],m=t?t(p):p,new Oe(m,p.node,Oe.BLACK,null,null);{const w=parseInt(f/2,10)+l,C=s(l,w),k=s(w+1,u);return p=n[w],m=t?t(p):p,new Oe(m,p.node,Oe.BLACK,C,k)}},r=function(l){let u=null,f=null,p=n.length;const m=function(C,k){const N=p-C,H=p;p-=C;const $=s(N+1,H),ee=n[N],Ie=t?t(ee):ee;w(new Oe(Ie,ee.node,k,null,$))},w=function(C){u?(u.left=C,u=C):(f=C,u=C)};for(let C=0;C<l.count;++C){const k=l.nextBitIsOne(),N=Math.pow(2,l.count-(C+1));k?m(N,Oe.BLACK):(m(N,Oe.BLACK),m(N,Oe.RED))}return f},o=new US(n.length),c=r(o);return new it(i||e,c)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll;const Ai={};class Ht{static get Default(){return O(Ai&&me,"ChildrenNode.ts has not been loaded"),ll=ll||new Ht({".priority":Ai},{".priority":me}),ll}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Wi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof it?t:null}hasIndex(e){return Vt(this.indexSet_,e.toString())}addIndex(e,t){O(e!==xi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(Q.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let c;s?c=ga(i,e.getCompare()):c=Ai;const l=e.toString(),u={...this.indexSet_};u[l]=e;const f={...this.indexes_};return f[l]=c,new Ht(f,u)}addToIndexes(e,t){const i=Zo(this.indexes_,(s,r)=>{const o=Wi(this.indexSet_,r);if(O(o,"Missing index implementation for "+r),s===Ai)if(o.isDefinedOn(e.node)){const c=[],l=t.getIterator(Q.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&c.push(u),u=l.getNext();return c.push(e),ga(c,o.getCompare())}else return Ai;else{const c=t.get(e.name);let l=s;return c&&(l=l.remove(new Q(e.name,c))),l.insert(e,e.node)}});return new Ht(i,this.indexSet_)}removeFromIndexes(e,t){const i=Zo(this.indexes_,s=>{if(s===Ai)return s;{const r=t.get(e.name);return r?s.remove(new Q(e.name,r)):s}});return new Ht(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs;class B{static get EMPTY_NODE(){return Vs||(Vs=new B(new it(uh),null,Ht.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&sy(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vs}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Vs:t}}getChild(e){const t=z(e);return t===null?this:this.getImmediateChild(t).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(O(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Q(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Vs:this.priorityNode_;return new B(s,o,r)}}updateChild(e,t){const i=z(e);if(i===null)return t;{O(z(e)!==".priority"||Mn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(re(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(me,(o,c)=>{t[o]=c.val(e),i++,r&&B.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const c in t)o[c]=t[c];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+iy(this.getPriority().val())+":"),this.forEachChild(me,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Og(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Q(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Q(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Q(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Q.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===so?-1:0}withIndex(e){if(e===xi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===xi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(me),s=t.getIterator(me);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xi?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qS extends B{constructor(){super(new it(uh),B.EMPTY_NODE,Ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const so=new qS;Object.defineProperties(Q,{MIN:{value:new Q(Yi,B.EMPTY_NODE)},MAX:{value:new Q(ui,so)}});ny.__EMPTY_NODE=B.EMPTY_NODE;ke.__childrenNodeConstructor=B;LS(so);MS(so);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=!0;function we(n,e=null){if(n===null)return B.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ke(t,we(e))}if(!(n instanceof Array)&&BS){const t=[];let i=!1;if(Ge(n,(o,c)=>{if(o.substring(0,1)!=="."){const l=we(c);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new Q(o,l)))}}),t.length===0)return B.EMPTY_NODE;const r=ga(t,OS,o=>o.name,uh);if(i){const o=ga(t,me.getCompare());return new B(r,we(e),new Ht({".priority":o},{".priority":me}))}else return new B(r,we(e),Ht.Default)}else{let t=B.EMPTY_NODE;return Ge(n,(i,s)=>{if(Vt(n,i)&&i.substring(0,1)!=="."){const r=we(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(we(e))}}VS(we);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS extends ac{constructor(e){super(),this.indexPath_=e,O(!K(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?yi(e.name,t.name):r}makePost(e,t){const i=we(e),s=B.EMPTY_NODE.updateChild(this.indexPath_,i);return new Q(t,s)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,so);return new Q(ui,e)}toString(){return Cr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS extends ac{compare(e,t){const i=e.node.compareTo(t.node);return i===0?yi(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,t){const i=we(e);return new Q(t,i)}toString(){return".value"}}const HS=new jS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n){return{type:"value",snapshotNode:n}}function Xi(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function br(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Pr(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function $S(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const c=e.getImmediateChild(t);return c.getChild(s).equals(i.getChild(s))&&c.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(br(t,c)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):c.isEmpty()?o.trackChildChange(Xi(t,i)):o.trackChildChange(Pr(t,i,c))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(me,(s,r)=>{t.hasChild(s)||i.trackChildChange(br(s,r))}),t.isLeafNode()||t.forEachChild(me,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Pr(s,r,o))}else i.trackChildChange(Xi(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.indexedFilter_=new hh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nr.getStartPost_(e),this.endPost_=Nr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new Q(t,i))||(i=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=B.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(B.EMPTY_NODE);const r=this;return t.forEachChild(me,(o,c)=>{r.matches(new Q(o,c))||(s=s.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Nr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new Q(t,i))||(i=B.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const c=r.getNext();if(this.withinDirectionalStart(c))if(this.withinDirectionalEnd(c))s=s.updateImmediateChild(c.name,c.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const c=r.getNext();o<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?o++:s=s.updateImmediateChild(c.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(m,w)=>p(w,m)}else o=this.index_.getCompare();const c=e;O(c.numChildren()===this.limit_,"");const l=new Q(t,i),u=this.reverse_?c.getFirstChild(this.index_):c.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(c.hasChild(t)){const p=c.getImmediateChild(t);let m=s.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===t||c.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const w=m==null?1:o(m,l);if(f&&!i.isEmpty()&&w>=0)return r!=null&&r.trackChildChange(Pr(t,i,p)),c.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(br(t,p));const k=c.updateImmediateChild(t,B.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(r!=null&&r.trackChildChange(Xi(m.name,m.node)),k.updateImmediateChild(m.name,m.node)):k}}else return i.isEmpty()?e:f&&o(u,l)>=0?(r!=null&&(r.trackChildChange(br(u.name,u.node)),r.trackChildChange(Xi(t,i))),c.updateImmediateChild(t,i).updateImmediateChild(u.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yi}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ui}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new dh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zS(n){return n.loadsAllData()?new hh(n.getIndex()):n.hasLimit()?new GS(n):new Nr(n)}function Fp(n){const e={};if(n.isDefault())return e;let t;if(n.index_===me?t="$priority":n.index_===HS?t="$value":n.index_===xi?t="$key":(O(n.index_ instanceof WS,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Le(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Le(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Le(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Le(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Le(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Up(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==me&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends Jg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=io("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ya.getListenId_(e,i),c={};this.listens_[o]=c;const l=Fp(e._queryParams);this.restRequest_(r+".json",l,(u,f)=>{let p=f;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(r,p,!1,i),Wi(this.listens_,o)===c){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",s(m,null)}})}unlisten(e,t){const i=ya.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Fp(e._queryParams),i=e._path.toString(),s=new Ut;return this.restRequest_(i+".json",t,(r,o)=>{let c=o;r===404&&(c=null,r=null),r===null?(this.onDataUpdate_(i,c,!1,null),s.resolve(c)):s.reject(new Error(c))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pi(t);this.log_("Sending REST request for "+o);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(i&&c.readyState===4){this.log_("REST Response for "+o+" received. status:",c.status,"response:",c.responseText);let l=null;if(c.status>=200&&c.status<300){try{l=pr(c.responseText)}catch{st("Failed to parse JSON response for "+o+": "+c.responseText)}i(null,l)}else c.status!==401&&c.status!==404&&st("Got unsuccessful REST response for "+o+" Status: "+c.status),i(c.status);i=null}},c.open("GET",o,!0),c.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){return{value:null,children:new Map}}function hs(n,e,t){if(K(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=z(e);n.children.has(i)||n.children.set(i,Ea());const s=n.children.get(i);e=re(e),hs(s,e,t)}}function Zl(n,e){if(K(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(me,(i,s)=>{hs(n,new ie(i),s)}),Zl(n,e)}}else if(n.children.size>0){const t=z(e);return e=re(e),n.children.has(t)&&Zl(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function eu(n,e,t){n.value!==null?t(e,n.value):QS(n,(i,s)=>{const r=new ie(e.toString()+"/"+i);eu(s,r,t)})}function QS(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Ge(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=10*1e3,XS=30*1e3,JS=300*1e3;class ZS{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new YS(e);const i=qp+(XS-qp)*Math.random();or(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ge(e,(s,r)=>{r>0&&Vt(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),or(this.reportStats_.bind(this),Math.floor(Math.random()*2*JS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gt||(gt={}));function cy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ph(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=gt.ACK_USER_WRITE,this.source=cy()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ie(e));return new Ia(te(),t,this.revert)}}else return O(z(this.path)===e,"operationForChild called for unrelated child."),new Ia(re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.source=e,this.path=t,this.type=gt.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new kr(this.source,te()):new kr(this.source,re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=gt.OVERWRITE}operationForChild(e){return K(this.path)?new hi(this.source,te(),this.snap.getImmediateChild(e)):new hi(this.source,re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=gt.MERGE}operationForChild(e){if(K(this.path)){const t=this.children.subtree(new ie(e));return t.isEmpty()?null:t.value?new hi(this.source,te(),t.value):new Dr(this.source,te(),t)}else return O(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Dr(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const t=z(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tC(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push($S(o.childName,o.snapshotNode))}),Ms(n,s,"child_removed",e,i,t),Ms(n,s,"child_added",e,i,t),Ms(n,s,"child_moved",r,i,t),Ms(n,s,"child_changed",e,i,t),Ms(n,s,"value",e,i,t),s}function Ms(n,e,t,i,s,r){const o=i.filter(c=>c.type===t);o.sort((c,l)=>iC(n,c,l)),o.forEach(c=>{const l=nC(n,c,r);s.forEach(u=>{u.respondsTo(c.type)&&e.push(u.createEvent(l,n.query_))})})}function nC(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function iC(n,e,t){if(e.childName==null||t.childName==null)throw ss("Should only compare child_ events.");const i=new Q(e.childName,e.snapshotNode),s=new Q(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(n,e){return{eventCache:n,serverCache:e}}function ar(n,e,t,i){return cc(new di(e,t,i),n.serverCache)}function ly(n,e,t,i){return cc(n.eventCache,new di(e,t,i))}function tu(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function fi(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul;const sC=()=>(ul||(ul=new it(WR)),ul);class le{static fromObject(e){let t=new le(null);return Ge(e,(i,s)=>{t=t.set(new ie(i),s)}),t}constructor(e,t=sC()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:te(),value:this.value};if(K(e))return null;{const i=z(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(re(e),t);return r!=null?{path:Ee(new ie(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const t=z(e),i=this.children.get(t);return i!==null?i.subtree(re(e)):new le(null)}}set(e,t){if(K(e))return new le(t,this.children);{const i=z(e),r=(this.children.get(i)||new le(null)).set(re(e),t),o=this.children.insert(i,r);return new le(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const t=z(e),i=this.children.get(t);if(i){const s=i.remove(re(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new le(null):new le(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const t=z(e),i=this.children.get(t);return i?i.get(re(e)):null}}setTree(e,t){if(K(e))return t;{const i=z(e),r=(this.children.get(i)||new le(null)).setTree(re(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new le(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ee(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,te(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(K(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(re(e),Ee(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,te(),t)}foreachOnPath_(e,t,i){if(K(e))return this;{this.value&&i(t,this.value);const s=z(e),r=this.children.get(s);return r?r.foreachOnPath_(re(e),Ee(t,s),i):new le(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Ee(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.writeTree_=e}static empty(){return new vt(new le(null))}}function cr(n,e,t){if(K(e))return new vt(new le(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=nt(s,e);return r=r.updateChild(o,t),new vt(n.writeTree_.set(s,r))}else{const s=new le(t),r=n.writeTree_.setTree(e,s);return new vt(r)}}}function Bp(n,e,t){let i=n;return Ge(t,(s,r)=>{i=cr(i,Ee(e,s),r)}),i}function Wp(n,e){if(K(e))return vt.empty();{const t=n.writeTree_.setTree(e,new le(null));return new vt(t)}}function nu(n,e){return Ei(n,e)!=null}function Ei(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(nt(t.path,e)):null}function jp(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(me,(i,s)=>{e.push(new Q(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Q(i,s.value))}),e}function Rn(n,e){if(K(e))return n;{const t=Ei(n,e);return t!=null?new vt(new le(t)):new vt(n.writeTree_.subtree(e))}}function iu(n){return n.writeTree_.isEmpty()}function Ji(n,e){return uy(te(),n.writeTree_,e)}function uy(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=uy(Ee(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Ee(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(n,e){return py(e,n)}function rC(n,e,t,i,s){O(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=cr(n.visibleWrites,e,t)),n.lastWriteId=i}function oC(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function aC(n,e){const t=n.allWrites.findIndex(c=>c.writeId===e);O(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const c=n.allWrites[o];c.visible&&(o>=t&&cC(c,i.path)?s=!1:dt(i.path,c.path)&&(r=!0)),o--}if(s){if(r)return lC(n),!0;if(i.snap)n.visibleWrites=Wp(n.visibleWrites,i.path);else{const c=i.children;Ge(c,l=>{n.visibleWrites=Wp(n.visibleWrites,Ee(i.path,l))})}return!0}else return!1}function cC(n,e){if(n.snap)return dt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&dt(Ee(n.path,t),e))return!0;return!1}function lC(n){n.visibleWrites=hy(n.allWrites,uC,te()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function uC(n){return n.visible}function hy(n,e,t){let i=vt.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let c;if(r.snap)dt(t,o)?(c=nt(t,o),i=cr(i,c,r.snap)):dt(o,t)&&(c=nt(o,t),i=cr(i,te(),r.snap.getChild(c)));else if(r.children){if(dt(t,o))c=nt(t,o),i=Bp(i,c,r.children);else if(dt(o,t))if(c=nt(o,t),K(c))i=Bp(i,te(),r.children);else{const l=Wi(r.children,z(c));if(l){const u=l.getChild(re(c));i=cr(i,te(),u)}}}else throw ss("WriteRecord should have .snap or .children")}}return i}function dy(n,e,t,i,s){if(!i&&!s){const r=Ei(n.visibleWrites,e);if(r!=null)return r;{const o=Rn(n.visibleWrites,e);if(iu(o))return t;if(t==null&&!nu(o,te()))return null;{const c=t||B.EMPTY_NODE;return Ji(o,c)}}}else{const r=Rn(n.visibleWrites,e);if(!s&&iu(r))return t;if(!s&&t==null&&!nu(r,te()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(dt(u.path,e)||dt(e,u.path))},c=hy(n.allWrites,o,e),l=t||B.EMPTY_NODE;return Ji(c,l)}}}function hC(n,e,t){let i=B.EMPTY_NODE;const s=Ei(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(me,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Rn(n.visibleWrites,e);return t.forEachChild(me,(o,c)=>{const l=Ji(Rn(r,new ie(o)),c);i=i.updateImmediateChild(o,l)}),jp(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Rn(n.visibleWrites,e);return jp(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function dC(n,e,t,i,s){O(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ee(e,t);if(nu(n.visibleWrites,r))return null;{const o=Rn(n.visibleWrites,r);return iu(o)?s.getChild(t):Ji(o,s.getChild(t))}}function fC(n,e,t,i){const s=Ee(e,t),r=Ei(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Rn(n.visibleWrites,s);return Ji(o,i.getNode().getImmediateChild(t))}else return null}function pC(n,e){return Ei(n.visibleWrites,e)}function mC(n,e,t,i,s,r,o){let c;const l=Rn(n.visibleWrites,e),u=Ei(l,te());if(u!=null)c=u;else if(t!=null)c=Ji(l,t);else return[];if(c=c.withIndex(o),!c.isEmpty()&&!c.isLeafNode()){const f=[],p=o.getCompare(),m=r?c.getReverseIteratorFrom(i,o):c.getIteratorFrom(i,o);let w=m.getNext();for(;w&&f.length<s;)p(w,i)!==0&&f.push(w),w=m.getNext();return f}else return[]}function _C(){return{visibleWrites:vt.empty(),allWrites:[],lastWriteId:-1}}function va(n,e,t,i){return dy(n.writeTree,n.treePath,e,t,i)}function _h(n,e){return hC(n.writeTree,n.treePath,e)}function Hp(n,e,t,i){return dC(n.writeTree,n.treePath,e,t,i)}function Ta(n,e){return pC(n.writeTree,Ee(n.treePath,e))}function gC(n,e,t,i,s,r){return mC(n.writeTree,n.treePath,e,t,i,s,r)}function gh(n,e,t){return fC(n.writeTree,n.treePath,e,t)}function fy(n,e){return py(Ee(n.treePath,e),n.writeTree)}function py(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;O(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),O(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Pr(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,br(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Xi(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Pr(i,e.snapshotNode,s.oldSnap));else throw ss("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const my=new EC;class yh{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new di(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gh(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fi(this.viewCache_),r=gC(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(n){return{filter:n}}function vC(n,e){O(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function TC(n,e,t,i,s){const r=new yC;let o,c;if(t.type===gt.OVERWRITE){const u=t;u.source.fromUser?o=su(n,e,u.path,u.snap,i,s,r):(O(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered()&&!K(u.path),o=wa(n,e,u.path,u.snap,i,s,c,r))}else if(t.type===gt.MERGE){const u=t;u.source.fromUser?o=AC(n,e,u.path,u.children,i,s,r):(O(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered(),o=ru(n,e,u.path,u.children,i,s,c,r))}else if(t.type===gt.ACK_USER_WRITE){const u=t;u.revert?o=CC(n,e,u.path,i,s,r):o=RC(n,e,u.path,u.affectedTree,i,s,r)}else if(t.type===gt.LISTEN_COMPLETE)o=SC(n,e,t.path,i,r);else throw ss("Unknown operation type: "+t.type);const l=r.getChanges();return wC(e,o,l),{viewCache:o,changes:l}}function wC(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=tu(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(ay(tu(e)))}}function _y(n,e,t,i,s,r){const o=e.eventCache;if(Ta(i,t)!=null)return e;{let c,l;if(K(t))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=fi(e),f=u instanceof B?u:B.EMPTY_NODE,p=_h(i,f);c=n.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const u=va(i,fi(e));c=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=z(t);if(u===".priority"){O(Mn(t)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const p=Hp(i,t,f,l);p!=null?c=n.filter.updatePriority(f,p):c=o.getNode()}else{const f=re(t);let p;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const m=Hp(i,t,o.getNode(),l);m!=null?p=o.getNode().getImmediateChild(u).updateChild(f,m):p=o.getNode().getImmediateChild(u)}else p=gh(i,u,e.serverCache);p!=null?c=n.filter.updateChild(o.getNode(),u,p,f,s,r):c=o.getNode()}}return ar(e,c,o.isFullyInitialized()||K(t),n.filter.filtersNodes())}}function wa(n,e,t,i,s,r,o,c){const l=e.serverCache;let u;const f=o?n.filter:n.filter.getIndexedFilter();if(K(t))u=f.updateFullNode(l.getNode(),i,null);else if(f.filtersNodes()&&!l.isFiltered()){const w=l.getNode().updateChild(t,i);u=f.updateFullNode(l.getNode(),w,null)}else{const w=z(t);if(!l.isCompleteForPath(t)&&Mn(t)>1)return e;const C=re(t),N=l.getNode().getImmediateChild(w).updateChild(C,i);w===".priority"?u=f.updatePriority(l.getNode(),N):u=f.updateChild(l.getNode(),w,N,C,my,null)}const p=ly(e,u,l.isFullyInitialized()||K(t),f.filtersNodes()),m=new yh(s,p,r);return _y(n,p,t,s,m,c)}function su(n,e,t,i,s,r,o){const c=e.eventCache;let l,u;const f=new yh(s,e,r);if(K(t))u=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ar(e,u,!0,n.filter.filtersNodes());else{const p=z(t);if(p===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),i),l=ar(e,u,c.isFullyInitialized(),c.isFiltered());else{const m=re(t),w=c.getNode().getImmediateChild(p);let C;if(K(m))C=i;else{const k=f.getCompleteChild(p);k!=null?ah(m)===".priority"&&k.getChild(ey(m)).isEmpty()?C=k:C=k.updateChild(m,i):C=B.EMPTY_NODE}if(w.equals(C))l=e;else{const k=n.filter.updateChild(c.getNode(),p,C,m,f,o);l=ar(e,k,c.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function $p(n,e){return n.eventCache.isCompleteForChild(e)}function AC(n,e,t,i,s,r,o){let c=e;return i.foreach((l,u)=>{const f=Ee(t,l);$p(e,z(f))&&(c=su(n,c,f,u,s,r,o))}),i.foreach((l,u)=>{const f=Ee(t,l);$p(e,z(f))||(c=su(n,c,f,u,s,r,o))}),c}function Gp(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ru(n,e,t,i,s,r,o,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;K(t)?u=i:u=new le(null).setTree(t,i);const f=e.serverCache.getNode();return u.children.inorderTraversal((p,m)=>{if(f.hasChild(p)){const w=e.serverCache.getNode().getImmediateChild(p),C=Gp(n,w,m);l=wa(n,l,new ie(p),C,s,r,o,c)}}),u.children.inorderTraversal((p,m)=>{const w=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!f.hasChild(p)&&!w){const C=e.serverCache.getNode().getImmediateChild(p),k=Gp(n,C,m);l=wa(n,l,new ie(p),k,s,r,o,c)}}),l}function RC(n,e,t,i,s,r,o){if(Ta(s,t)!=null)return e;const c=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(K(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return wa(n,e,t,l.getNode().getChild(t),s,r,c,o);if(K(t)){let u=new le(null);return l.getNode().forEachChild(xi,(f,p)=>{u=u.set(new ie(f),p)}),ru(n,e,t,u,s,r,c,o)}else return e}else{let u=new le(null);return i.foreach((f,p)=>{const m=Ee(t,f);l.isCompleteForPath(m)&&(u=u.set(f,l.getNode().getChild(m)))}),ru(n,e,t,u,s,r,c,o)}}function SC(n,e,t,i,s){const r=e.serverCache,o=ly(e,r.getNode(),r.isFullyInitialized()||K(t),r.isFiltered());return _y(n,o,t,i,my,s)}function CC(n,e,t,i,s,r){let o;if(Ta(i,t)!=null)return e;{const c=new yh(i,e,s),l=e.eventCache.getNode();let u;if(K(t)||z(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=va(i,fi(e));else{const p=e.serverCache.getNode();O(p instanceof B,"serverChildren would be complete if leaf node"),f=_h(i,p)}f=f,u=n.filter.updateFullNode(l,f,r)}else{const f=z(t);let p=gh(i,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=l.getImmediateChild(f)),p!=null?u=n.filter.updateChild(l,f,p,re(t),c,r):e.eventCache.getNode().hasChild(f)?u=n.filter.updateChild(l,f,B.EMPTY_NODE,re(t),c,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=va(i,fi(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Ta(i,te())!=null,ar(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new hh(i.getIndex()),r=zS(i);this.processor_=IC(r);const o=t.serverCache,c=t.eventCache,l=s.updateFullNode(B.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(B.EMPTY_NODE,c.getNode(),null),f=new di(l,o.isFullyInitialized(),s.filtersNodes()),p=new di(u,c.isFullyInitialized(),r.filtersNodes());this.viewCache_=cc(p,f),this.eventGenerator_=new eC(this.query_)}get query(){return this.query_}}function PC(n){return n.viewCache_.serverCache.getNode()}function NC(n,e){const t=fi(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!K(e)&&!t.getImmediateChild(z(e)).isEmpty())?t.getChild(e):null}function zp(n){return n.eventRegistrations_.length===0}function kC(n,e){n.eventRegistrations_.push(e)}function Kp(n,e,t){const i=[];if(t){O(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Qp(n,e,t,i){e.type===gt.MERGE&&e.source.queryId!==null&&(O(fi(n.viewCache_),"We should always have a full cache before handling merges"),O(tu(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=TC(n.processor_,s,e,t,i);return vC(n.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,gy(n,r.changes,r.viewCache.eventCache.getNode(),null)}function DC(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(me,(r,o)=>{i.push(Xi(r,o))}),t.isFullyInitialized()&&i.push(ay(t.getNode())),gy(n,i,t.getNode(),e)}function gy(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return tC(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa;class OC{constructor(){this.views=new Map}}function LC(n){O(!Aa,"__referenceConstructor has already been defined"),Aa=n}function VC(){return O(Aa,"Reference.ts has not been loaded"),Aa}function MC(n){return n.views.size===0}function Eh(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return O(r!=null,"SyncTree gave us an op for an invalid query."),Qp(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Qp(o,e,t,i));return r}}function xC(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let c=va(t,s?i:null),l=!1;c?l=!0:i instanceof B?(c=_h(t,i),l=!1):(c=B.EMPTY_NODE,l=!1);const u=cc(new di(c,l,!1),new di(i,s,!1));return new bC(e,u)}return o}function FC(n,e,t,i,s,r){const o=xC(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),kC(o,t),DC(o,t)}function UC(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const c=xn(n);if(s==="default")for(const[l,u]of n.views.entries())o=o.concat(Kp(u,t,i)),zp(u)&&(n.views.delete(l),u.query._queryParams.loadsAllData()||r.push(u.query));else{const l=n.views.get(s);l&&(o=o.concat(Kp(l,t,i)),zp(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return c&&!xn(n)&&r.push(new(VC())(e._repo,e._path)),{removed:r,events:o}}function yy(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Fi(n,e){let t=null;for(const i of n.views.values())t=t||NC(i,e);return t}function Ey(n,e){if(e._queryParams.loadsAllData())return lc(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Iy(n,e){return Ey(n,e)!=null}function xn(n){return lc(n)!=null}function lc(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra;function qC(n){O(!Ra,"__referenceConstructor has already been defined"),Ra=n}function BC(){return O(Ra,"Reference.ts has not been loaded"),Ra}let WC=1;class Yp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=_C(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vy(n,e,t,i,s){return rC(n.pendingWriteTree_,e,t,i,s),s?ro(n,new hi(cy(),e,t)):[]}function ni(n,e,t=!1){const i=oC(n.pendingWriteTree_,e);if(aC(n.pendingWriteTree_,e)){let r=new le(null);return i.snap!=null?r=r.set(te(),!0):Ge(i.children,o=>{r=r.set(new ie(o),!0)}),ro(n,new Ia(i.path,r,t))}else return[]}function uc(n,e,t){return ro(n,new hi(fh(),e,t))}function jC(n,e,t){const i=le.fromObject(t);return ro(n,new Dr(fh(),e,i))}function HC(n,e){return ro(n,new kr(fh(),e))}function $C(n,e,t){const i=vh(n,t);if(i){const s=Th(i),r=s.path,o=s.queryId,c=nt(r,e),l=new kr(ph(o),c);return wh(n,r,l)}else return[]}function ou(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let c=[];if(o&&(e._queryIdentifier==="default"||Iy(o,e))){const l=UC(o,e,t,i);MC(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const u=l.removed;if(c=l.events,!s){const f=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,p=n.syncPointTree_.findOnPath(r,(m,w)=>xn(w));if(f&&!p){const m=n.syncPointTree_.subtree(r);if(!m.isEmpty()){const w=KC(m);for(let C=0;C<w.length;++C){const k=w[C],N=k.query,H=Ay(n,k);n.listenProvider_.startListening(lr(N),Sa(n,N),H.hashFn,H.onComplete)}}}!p&&u.length>0&&!i&&(f?n.listenProvider_.stopListening(lr(e),null):u.forEach(m=>{const w=n.queryToTagMap.get(hc(m));n.listenProvider_.stopListening(lr(m),w)}))}QC(n,u)}return c}function GC(n,e,t,i){const s=vh(n,i);if(s!=null){const r=Th(s),o=r.path,c=r.queryId,l=nt(o,e),u=new hi(ph(c),l,t);return wh(n,o,u)}else return[]}function zC(n,e,t,i){const s=vh(n,i);if(s){const r=Th(s),o=r.path,c=r.queryId,l=nt(o,e),u=le.fromObject(t),f=new Dr(ph(c),l,u);return wh(n,o,f)}else return[]}function Xp(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(m,w)=>{const C=nt(m,s);r=r||Fi(w,C),o=o||xn(w)});let c=n.syncPointTree_.get(s);c?(o=o||xn(c),r=r||Fi(c,te())):(c=new OC,n.syncPointTree_=n.syncPointTree_.set(s,c));let l;r!=null?l=!0:(l=!1,r=B.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((w,C)=>{const k=Fi(C,te());k&&(r=r.updateImmediateChild(w,k))}));const u=Iy(c,e);if(!u&&!e._queryParams.loadsAllData()){const m=hc(e);O(!n.queryToTagMap.has(m),"View does not exist, but we have a tag");const w=YC();n.queryToTagMap.set(m,w),n.tagToQueryMap.set(w,m)}const f=mh(n.pendingWriteTree_,s);let p=FC(c,e,t,f,r,l);if(!u&&!o&&!i){const m=Ey(c,e);p=p.concat(XC(n,e,m))}return p}function Ih(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,c)=>{const l=nt(o,e),u=Fi(c,l);if(u)return u});return dy(s,e,r,t,!0)}function ro(n,e){return Ty(e,n.syncPointTree_,null,mh(n.pendingWriteTree_,te()))}function Ty(n,e,t,i){if(K(n.path))return wy(n,e,t,i);{const s=e.get(te());t==null&&s!=null&&(t=Fi(s,te()));let r=[];const o=z(n.path),c=n.operationForChild(o),l=e.children.get(o);if(l&&c){const u=t?t.getImmediateChild(o):null,f=fy(i,o);r=r.concat(Ty(c,l,u,f))}return s&&(r=r.concat(Eh(s,n,i,t))),r}}function wy(n,e,t,i){const s=e.get(te());t==null&&s!=null&&(t=Fi(s,te()));let r=[];return e.children.inorderTraversal((o,c)=>{const l=t?t.getImmediateChild(o):null,u=fy(i,o),f=n.operationForChild(o);f&&(r=r.concat(wy(f,c,l,u)))}),s&&(r=r.concat(Eh(s,n,i,t))),r}function Ay(n,e){const t=e.query,i=Sa(n,t);return{hashFn:()=>(PC(e)||B.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?$C(n,t._path,i):HC(n,t._path);{const r=$R(s,t);return ou(n,t,null,r)}}}}function Sa(n,e){const t=hc(e);return n.queryToTagMap.get(t)}function hc(n){return n._path.toString()+"$"+n._queryIdentifier}function vh(n,e){return n.tagToQueryMap.get(e)}function Th(n){const e=n.indexOf("$");return O(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ie(n.substr(0,e))}}function wh(n,e,t){const i=n.syncPointTree_.get(e);O(i,"Missing sync point for query tag that we're tracking");const s=mh(n.pendingWriteTree_,e);return Eh(i,t,s,null)}function KC(n){return n.fold((e,t,i)=>{if(t&&xn(t))return[lc(t)];{let s=[];return t&&(s=yy(t)),Ge(i,(r,o)=>{s=s.concat(o)}),s}})}function lr(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(BC())(n._repo,n._path):n}function QC(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=hc(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function YC(){return WC++}function XC(n,e,t){const i=e._path,s=Sa(n,e),r=Ay(n,t),o=n.listenProvider_.startListening(lr(e),s,r.hashFn,r.onComplete),c=n.syncPointTree_.subtree(i);if(s)O(!xn(c.value),"If we're adding a query, it shouldn't be shadowed");else{const l=c.fold((u,f,p)=>{if(!K(u)&&f&&xn(f))return[lc(f).query];{let m=[];return f&&(m=m.concat(yy(f).map(w=>w.query))),Ge(p,(w,C)=>{m=m.concat(C)}),m}});for(let u=0;u<l.length;++u){const f=l[u];n.listenProvider_.stopListening(lr(f),Sa(n,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ah(t)}node(){return this.node_}}class Rh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ee(this.path_,e);return new Rh(this.syncTree_,t)}node(){return Ih(this.syncTree_,this.path_)}}const JC=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Jp=function(n,e,t){if(!n||typeof n!="object")return n;if(O(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return ZC(n[".sv"],e,t);if(typeof n[".sv"]=="object")return eb(n[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},ZC=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:O(!1,"Unexpected server value: "+n)}},eb=function(n,e,t){n.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&O(!1,"Unexpected increment value: "+i);const s=e.node();if(O(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},tb=function(n,e,t,i){return Sh(e,new Rh(t,n),i)},Ry=function(n,e,t){return Sh(n,new Ah(e),t)};function Sh(n,e,t){const i=n.getPriority().val(),s=Jp(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,c=Jp(o.getValue(),e,t);return c!==o.getValue()||s!==o.getPriority().val()?new ke(c,we(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ke(s))),o.forEachChild(me,(c,l)=>{const u=Sh(l,e.getImmediateChild(c),t);u!==l&&(r=r.updateImmediateChild(c,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function bh(n,e){let t=e instanceof ie?e:new ie(e),i=n,s=z(t);for(;s!==null;){const r=Wi(i.node.children,s)||{children:{},childCount:0};i=new Ch(s,i,r),t=re(t),s=z(t)}return i}function ds(n){return n.node.value}function Sy(n,e){n.node.value=e,au(n)}function Cy(n){return n.node.childCount>0}function nb(n){return ds(n)===void 0&&!Cy(n)}function dc(n,e){Ge(n.node.children,(t,i)=>{e(new Ch(t,n,i))})}function by(n,e,t,i){t&&e(n),dc(n,s=>{by(s,e,!0)})}function ib(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function oo(n){return new ie(n.parent===null?n.name:oo(n.parent)+"/"+n.name)}function au(n){n.parent!==null&&sb(n.parent,n.name,n)}function sb(n,e,t){const i=nb(t),s=Vt(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,au(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,au(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=/[\[\].#$\/\u0000-\u001F\u007F]/,ob=/[\[\].#$\u0000-\u001F\u007F]/,hl=10*1024*1024,Ph=function(n){return typeof n=="string"&&n.length!==0&&!rb.test(n)},Py=function(n){return typeof n=="string"&&n.length!==0&&!ob.test(n)},ab=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Py(n)},Ny=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!oc(n)||n&&typeof n=="object"&&Vt(n,".sv")},cu=function(n,e,t,i){fc(ji(n,"value"),e,t)},fc=function(n,e,t){const i=t instanceof ie?new RS(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Xn(i));if(typeof e=="function")throw new Error(n+"contains a function "+Xn(i)+" with contents = "+e.toString());if(oc(e))throw new Error(n+"contains "+e.toString()+" "+Xn(i));if(typeof e=="string"&&e.length>hl/3&&Ma(e)>hl)throw new Error(n+"contains a string greater than "+hl+" utf8 bytes "+Xn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ge(e,(o,c)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ph(o)))throw new Error(n+" contains an invalid key ("+o+") "+Xn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);SS(i,o),fc(n,c,i),CS(i)}),s&&r)throw new Error(n+' contains ".value" child '+Xn(i)+" in addition to actual children.")}},cb=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=Cr(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Ph(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(AS);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&dt(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},lb=function(n,e,t,i){const s=ji(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Ge(e,(o,c)=>{const l=new ie(o);if(fc(s,c,Ee(t,l)),ah(l)===".priority"&&!Ny(c))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),cb(s,r)},ub=function(n,e,t){if(oc(e))throw new Error(ji(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ny(e))throw new Error(ji(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},ky=function(n,e,t,i){if(!Py(t))throw new Error(ji(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hb=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ky(n,e,t)},Ys=function(n,e){if(z(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},db=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ph(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ab(t))throw new Error(ji(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Nh(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!ch(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Dy(n,e,t){Nh(n,t),Oy(n,i=>ch(i,e))}function nn(n,e,t){Nh(n,t),Oy(n,i=>dt(i,e)||dt(e,i))}function Oy(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(pb(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function pb(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();rr&&Ue("event: "+t.toString()),us(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="repo_interrupt",_b=25;class gb{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ea(),this.transactionQueueTree_=new Ch,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function yb(n,e,t){if(n.stats_=rh(n.repoInfo_),n.forceRestClient_||QR())n.server_=new ya(n.repoInfo_,(i,s,r,o)=>{Zp(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>em(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Le(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Yt(n.repoInfo_,e,(i,s,r,o)=>{Zp(n,i,s,r,o)},i=>{em(n,i)},i=>{Ib(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=eS(n.repoInfo_,()=>new ZS(n.stats_,n.server_)),n.infoData_=new KS,n.infoSyncTree_=new Yp({startListening:(i,s,r,o)=>{let c=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(c=uc(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),c},stopListening:()=>{}}),Dh(n,"connected",!1),n.serverSyncTree_=new Yp({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(c,l)=>{const u=o(c,l);nn(n.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Eb(n){const t=n.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function kh(n){return JC({timestamp:Eb(n)})}function Zp(n,e,t,i,s){n.dataUpdateCount++;const r=new ie(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Zo(t,u=>we(u));o=zC(n.serverSyncTree_,r,l,s)}else{const l=we(t);o=GC(n.serverSyncTree_,r,l,s)}else if(i){const l=Zo(t,u=>we(u));o=jC(n.serverSyncTree_,r,l)}else{const l=we(t);o=uc(n.serverSyncTree_,r,l)}let c=r;o.length>0&&(c=pc(n,r)),nn(n.eventQueue_,c,o)}function em(n,e){Dh(n,"connected",e),e===!1&&Tb(n)}function Ib(n,e){Ge(e,(t,i)=>{Dh(n,t,i)})}function Dh(n,e,t){const i=new ie("/.info/"+e),s=we(t);n.infoData_.updateSnapshot(i,s);const r=uc(n.infoSyncTree_,i,s);nn(n.eventQueue_,i,r)}function Ly(n){return n.nextWriteId_++}function vb(n,e,t,i,s){Oh(n,"set",{path:e.toString(),value:t,priority:i});const r=kh(n),o=we(t,i),c=Ih(n.serverSyncTree_,e),l=Ry(o,c,r),u=Ly(n),f=vy(n.serverSyncTree_,e,l,u,!0);Nh(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(m,w)=>{const C=m==="ok";C||st("set at "+e+" failed: "+m);const k=ni(n.serverSyncTree_,u,!C);nn(n.eventQueue_,e,k),Zi(n,s,m,w)});const p=Uy(n,e);pc(n,p),nn(n.eventQueue_,p,[])}function Tb(n){Oh(n,"onDisconnectEvents");const e=kh(n),t=Ea();eu(n.onDisconnect_,te(),(s,r)=>{const o=tb(s,r,n.serverSyncTree_,e);hs(t,s,o)});let i=[];eu(t,te(),(s,r)=>{i=i.concat(uc(n.serverSyncTree_,s,r));const o=Uy(n,s);pc(n,o)}),n.onDisconnect_=Ea(),nn(n.eventQueue_,te(),i)}function wb(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&Zl(n.onDisconnect_,e),Zi(n,t,i,s)})}function tm(n,e,t,i){const s=we(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&hs(n.onDisconnect_,e,s),Zi(n,i,r,o)})}function Ab(n,e,t,i,s){const r=we(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,c)=>{o==="ok"&&hs(n.onDisconnect_,e,r),Zi(n,s,o,c)})}function Rb(n,e,t,i){if(Jo(t)){Ue("onDisconnect().update() called with empty data.  Don't do anything."),Zi(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&Ge(t,(o,c)=>{const l=we(c);hs(n.onDisconnect_,Ee(e,o),l)}),Zi(n,i,s,r)})}function Sb(n,e,t){let i;z(e._path)===".info"?i=Xp(n.infoSyncTree_,e,t):i=Xp(n.serverSyncTree_,e,t),Dy(n.eventQueue_,e._path,i)}function Cb(n,e,t){let i;z(e._path)===".info"?i=ou(n.infoSyncTree_,e,t):i=ou(n.serverSyncTree_,e,t),Dy(n.eventQueue_,e._path,i)}function bb(n){n.persistentConnection_&&n.persistentConnection_.interrupt(mb)}function Oh(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ue(t,...e)}function Zi(n,e,t,i){e&&us(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Vy(n,e,t){return Ih(n.serverSyncTree_,e,t)||B.EMPTY_NODE}function Lh(n,e=n.transactionQueueTree_){if(e||mc(n,e),ds(e)){const t=xy(n,e);O(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Pb(n,oo(e),t)}else Cy(e)&&dc(e,t=>{Lh(n,t)})}function Pb(n,e,t){const i=t.map(u=>u.currentWriteId),s=Vy(n,e,i);let r=s;const o=s.hash();for(let u=0;u<t.length;u++){const f=t[u];O(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=nt(e,f.path);r=r.updateChild(p,f.currentOutputSnapshotRaw)}const c=r.val(!0),l=e;n.server_.put(l.toString(),c,u=>{Oh(n,"transaction put response",{path:l.toString(),status:u});let f=[];if(u==="ok"){const p=[];for(let m=0;m<t.length;m++)t[m].status=2,f=f.concat(ni(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&p.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();mc(n,bh(n.transactionQueueTree_,e)),Lh(n,n.transactionQueueTree_),nn(n.eventQueue_,e,f);for(let m=0;m<p.length;m++)us(p[m])}else{if(u==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{st("transaction at "+l.toString()+" failed: "+u);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=u}pc(n,e)}},o)}function pc(n,e){const t=My(n,e),i=oo(t),s=xy(n,t);return Nb(n,s,i),i}function Nb(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const l=e[c],u=nt(t,l.path);let f=!1,p;if(O(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,p=l.abortReason,s=s.concat(ni(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=_b)f=!0,p="maxretry",s=s.concat(ni(n.serverSyncTree_,l.currentWriteId,!0));else{const m=Vy(n,l.path,o);l.currentInputSnapshot=m;const w=e[c].update(m.val());if(w!==void 0){fc("transaction failed: Data returned ",w,l.path);let C=we(w);typeof w=="object"&&w!=null&&Vt(w,".priority")||(C=C.updatePriority(m.getPriority()));const N=l.currentWriteId,H=kh(n),$=Ry(C,m,H);l.currentOutputSnapshotRaw=C,l.currentOutputSnapshotResolved=$,l.currentWriteId=Ly(n),o.splice(o.indexOf(N),1),s=s.concat(vy(n.serverSyncTree_,l.path,$,l.currentWriteId,l.applyLocally)),s=s.concat(ni(n.serverSyncTree_,N,!0))}else f=!0,p="nodata",s=s.concat(ni(n.serverSyncTree_,l.currentWriteId,!0))}nn(n.eventQueue_,t,s),s=[],f&&(e[c].status=2,(function(m){setTimeout(m,Math.floor(0))})(e[c].unwatcher),e[c].onComplete&&(p==="nodata"?i.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):i.push(()=>e[c].onComplete(new Error(p),!1,null))))}mc(n,n.transactionQueueTree_);for(let c=0;c<i.length;c++)us(i[c]);Lh(n,n.transactionQueueTree_)}function My(n,e){let t,i=n.transactionQueueTree_;for(t=z(e);t!==null&&ds(i)===void 0;)i=bh(i,t),e=re(e),t=z(e);return i}function xy(n,e){const t=[];return Fy(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Fy(n,e,t){const i=ds(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);dc(e,s=>{Fy(n,s,t)})}function mc(n,e){const t=ds(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Sy(e,t.length>0?t:void 0)}dc(e,i=>{mc(n,i)})}function Uy(n,e){const t=oo(My(n,e)),i=bh(n.transactionQueueTree_,e);return ib(i,s=>{dl(n,s)}),dl(n,i),by(i,s=>{dl(n,s)}),t}function dl(n,e){const t=ds(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(O(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(O(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(ni(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Sy(e,void 0):t.length=r+1,nn(n.eventQueue_,oo(e),s);for(let o=0;o<i.length;o++)us(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Db(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):st(`Invalid query segment '${t}' in query '${n}'`)}return e}const nm=function(n,e){const t=Ob(n),i=t.namespace;t.domain==="firebase.com"&&tn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||qR();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new $g(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new ie(t.pathString)}},Ob=function(n){let e="",t="",i="",s="",r="",o=!0,c="https",l=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(c=n.substring(0,u-1),n=n.substring(u+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(s=kb(n.substring(f,p)));const m=Db(n.substring(Math.min(n.length,p)));u=e.indexOf(":"),u>=0?(o=c==="https"||c==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const w=e.slice(0,u);if(w.toLowerCase()==="localhost")t="localhost";else if(w.split(".").length<=2)t=w;else{const C=e.indexOf(".");i=e.substring(0,C).toLowerCase(),t=e.substring(C+1),r=i}"ns"in m&&(r=m.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:c,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Le(this.snapshot.exportVal())}}class Vb{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class xb{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Ut;return wb(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ys("OnDisconnect.remove",this._path);const e=new Ut;return tm(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ys("OnDisconnect.set",this._path),cu("OnDisconnect.set",e,this._path);const t=new Ut;return tm(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Ys("OnDisconnect.setWithPriority",this._path),cu("OnDisconnect.setWithPriority",e,this._path),ub("OnDisconnect.setWithPriority",t);const i=new Ut;return Ab(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){Ys("OnDisconnect.update",this._path),lb("OnDisconnect.update",e,this._path);const t=new Ut;return Rb(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return K(this._path)?null:ah(this._path)}get ref(){return new Wn(this._repo,this._path)}get _queryIdentifier(){const e=Up(this._queryParams),t=ih(e);return t==="{}"?"default":t}get _queryObject(){return Up(this._queryParams)}isEqual(e){if(e=x(e),!(e instanceof Vh))return!1;const t=this._repo===e._repo,i=ch(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+wS(this._path)}}class Wn extends Vh{constructor(e,t){super(e,t,new dh,!1)}get parent(){const e=ey(this._path);return e===null?null:new Wn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ca{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ie(e),i=lu(this.ref,e);return new Ca(this._node.getChild(t),i,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Ca(s,lu(this.ref,i),me)))}hasChild(e){const t=new ie(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Vo(n,e){return n=x(n),n._checkNotDeleted("ref"),e!==void 0?lu(n._root,e):n._root}function lu(n,e){return n=x(n),z(n._path)===null?hb("child","path",e):ky("child","path",e),new Wn(n._repo,Ee(n._path,e))}function Fb(n){return n=x(n),new xb(n._repo,n._path)}function im(n,e){n=x(n),Ys("set",n._path),cu("set",e,n._path);const t=new Ut;return vb(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Mh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Lb("value",this,new Ca(e.snapshotNode,new Wn(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vb(this,e,t):null}matches(e){return e instanceof Mh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Ub(n,e,t,i,s){const r=new Mb(t,void 0),o=new Mh(r);return Sb(n._repo,n,o),()=>Cb(n._repo,n,o)}function sm(n,e,t,i){return Ub(n,"value",e)}LC(Wn);qC(Wn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="FIREBASE_DATABASE_EMULATOR_HOST",uu={};let Bb=!1;function Wb(n,e,t,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=Un(r);n.repoInfo_=new $g(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function jb(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ue("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=nm(r,s),c=o.repoInfo,l;typeof process<"u"&&vp&&(l=vp[qb]),l?(r=`http://${l}?ns=${c.namespace}`,o=nm(r,s),c=o.repoInfo):o.repoInfo.secure;const u=new XR(n.name,n.options,e);db("Invalid Firebase Database URL",o),K(o.path)||tn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=$b(c,n,u,new YR(n,t));return new Gb(f,n)}function Hb(n,e){const t=uu[e];(!t||t[n.key]!==n)&&tn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),bb(n),delete t[n.key]}function $b(n,e,t,i){let s=uu[e.name];s||(s={},uu[e.name]=s);let r=s[n.toURLString()];return r&&tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new gb(n,Bb,t,i),s[n.toURLString()]=r,r}class Gb{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(yb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wn(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Hb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tn("Cannot call "+e+" on a deleted database.")}}function zb(n=Iu(),e){const t=Fa(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=xm("database");i&&qy(t,...i)}return t}function qy(n,e,t,i={}){n=x(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&bn(i,r.repoInfo_.emulatorOptions))return;tn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new $o($o.OWNER);else if(i.mockUserToken){const c=typeof i.mockUserToken=="string"?i.mockUserToken:qm(i.mockUserToken,n.app.options.projectId);o=new $o(c)}Un(e)&&(_u(e),gu("Database",!0)),Wb(r,s,i,o)}/**
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
 */function Kb(n){LR(mi),oi(new Pn("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return jb(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),bt(Tp,wp,n),bt(Tp,wp,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb={".sv":"timestamp"};function fl(){return Qb}Yt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Yt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Kb();/**
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
 */const Yb={PHONE:"phone",TOTP:"totp"},Xb={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Jb={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},Zb={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},eP={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function By(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nP=tP,Wy=By,jy=new jr("auth","Firebase",By()),iP={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new xa("@firebase/auth");function sP(n,...e){ba.logLevel<=Y.WARN&&ba.warn(`Auth (${mi}): ${n}`,...e)}function Go(n,...e){ba.logLevel<=Y.ERROR&&ba.error(`Auth (${mi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n,...e){throw Fh(n,...e)}function Xe(n,...e){return Fh(n,...e)}function xh(n,e,t){const i={...Wy(),[e]:t};return new jr("auth","Firebase",i).create(e,{appName:n.name})}function Me(n){return xh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fs(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&rt(n,"argument-error"),xh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fh(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return jy.create(n,...e)}function D(n,e,...t){if(!n)throw Fh(e,...t)}function Ct(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Go(e),new Error(e)}function sn(n,e){n||Ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Uh(){return rm()==="http:"||rm()==="https:"}function rm(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uh()||tv()||"connection"in navigator)?navigator.onLine:!0}function oP(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t){this.shortDelay=e,this.longDelay=t,sn(t>e,"Short delay should be less than long delay!"),this.isMobile=yu()||Bm()}get(){return rP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n,e){sn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lP=new ao(3e4,6e4);function ue(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function he(n,e,t,i,s={}){return $y(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=pi({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...r};return ev()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Un(n.emulatorConfig.host)&&(u.credentials="include"),Hy.fetch()(await Gy(n,n.config.apiHost,t,c),u)})}async function $y(n,e,t){n._canInitEmulator=!1;const i={...aP,...e};try{const s=new hP(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Xs(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xs(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xs(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xs(n,"user-disabled",o);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xh(n,f,u);rt(n,f)}}catch(s){if(s instanceof on)throw s;rt(n,"network-request-failed",{message:String(s)})}}async function an(n,e,t,i,s={}){const r=await he(n,e,t,i,s);return"mfaPendingCredential"in r&&rt(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Gy(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?qh(n.config,s):`${n.config.apiScheme}://${s}`;return cP.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function uP(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Xe(this.auth,"network-request-failed")),lP.get())})}}function Xs(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Xe(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(n){return n!==void 0&&n.getResponse!==void 0}function am(n){return n!==void 0&&n.enterprise!==void 0}class zy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return uP(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP(n){return(await he(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ky(n,e){return he(n,"GET","/v2/recaptchaConfig",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP(n,e){return he(n,"POST","/v1/accounts:delete",e)}async function pP(n,e){return he(n,"POST","/v1/accounts:update",e)}async function Pa(n,e){return he(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function mP(n,e=!1){return x(n).getIdToken(e)}async function Qy(n,e=!1){const t=x(n),i=await t.getIdToken(e),s=_c(i);D(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ur(pl(s.auth_time)),issuedAtTime:ur(pl(s.iat)),expirationTime:ur(pl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function pl(n){return Number(n)*1e3}function _c(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Go("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xo(t);return s?JSON.parse(s):(Go("Failed to decode base64 JWT payload"),null)}catch(s){return Go("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cm(n){const e=_c(n);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof on&&_P(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function _P({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ur(this.lastLoginAt),this.creationTime=ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lr(n){var p;const e=n.auth,t=await n.getIdToken(),i=await rn(n,Pa(e,{idToken:t}));D(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(p=s.providerUserInfo)!=null&&p.length?Xy(s.providerUserInfo):[],o=yP(n.providerData,r),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new hu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,f)}async function Yy(n){const e=x(n);await Lr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yP(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Xy(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(n,e){const t=await $y(n,{},async()=>{const i=pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await Gy(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&Un(n.emulatorConfig.host)&&(l.credentials="include"),Hy.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function IP(n,e){return he(n,"POST","/v2/accounts:revokeToken",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){D(e.length!==0,"internal-error");const t=cm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await EP(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Ui;return i&&(D(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(D(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(D(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return Ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n,e){D(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class yt{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new gP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await rn(this,this.stsTokenManager.getToken(this.auth,e));return D(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qy(this,e)}reload(){return Yy(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Lr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fe(this.auth.app))return Promise.reject(Me(this.auth));const e=await this.getIdToken();return await rn(this,fP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:w,providerData:C,stsTokenManager:k}=t;D(p&&k,e,"internal-error");const N=Ui.fromJSON(this.name,k);D(typeof p=="string",e,"internal-error"),mn(i,e.name),mn(s,e.name),D(typeof m=="boolean",e,"internal-error"),D(typeof w=="boolean",e,"internal-error"),mn(r,e.name),mn(o,e.name),mn(c,e.name),mn(l,e.name),mn(u,e.name),mn(f,e.name);const H=new yt({uid:p,auth:e,email:s,emailVerified:m,displayName:i,isAnonymous:w,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:N,createdAt:u,lastLoginAt:f});return C&&Array.isArray(C)&&(H.providerData=C.map($=>({...$}))),l&&(H._redirectEventId=l),H}static async _fromIdTokenResponse(e,t,i=!1){const s=new Ui;s.updateFromServerResponse(t);const r=new yt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Lr(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];D(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Xy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new Ui;c.updateFromIdToken(i);const l=new yt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new hu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=new Map;function $t(n){sn(n instanceof Function,"Expected a class definition");let e=lm.get(n);return e?(sn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,lm.set(n,e),e)}/**
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
 */class Jy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Jy.type="NONE";const du=Jy;/**
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
 */function zo(n,e,t){return`firebase:${n}:${e}:${t}`}class qi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=zo(this.userKey,s.apiKey,r),this.fullPersistenceKey=zo("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Pa(this.auth,{idToken:e}).catch(()=>{});return t?yt._fromGetAccountInfoResponse(this.auth,t,e):null}return yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new qi($t(du),e,i);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||$t(du);const o=zo(i,e.config.apiKey,e.name);let c=null;for(const u of t)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Pa(e,{idToken:f}).catch(()=>{});if(!m)break;p=await yt._fromGetAccountInfoResponse(e,m,f)}else p=yt._fromJSON(e,f);u!==r&&(c=p),r=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new qi(r,e,i):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new qi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sE(e))return"Blackberry";if(rE(e))return"Webos";if(eE(e))return"Safari";if((e.includes("chrome/")||tE(e))&&!e.includes("edge/"))return"Chrome";if(iE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Zy(n=$e()){return/firefox\//i.test(n)}function eE(n=$e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tE(n=$e()){return/crios\//i.test(n)}function nE(n=$e()){return/iemobile/i.test(n)}function iE(n=$e()){return/android/i.test(n)}function sE(n=$e()){return/blackberry/i.test(n)}function rE(n=$e()){return/webos/i.test(n)}function Bh(n=$e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vP(n=$e()){var e;return Bh(n)&&!!((e=window.navigator)!=null&&e.standalone)}function TP(){return nv()&&document.documentMode===10}function oE(n=$e()){return Bh(n)||iE(n)||rE(n)||sE(n)||/windows phone/i.test(n)||nE(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(n,e=[]){let t;switch(n){case"Browser":t=um($e());break;case"Worker":t=`${um($e())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mi}/${i}`}/**
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
 */class wP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function AP(n,e={}){return he(n,"GET","/v2/passwordPolicy",ue(n,e))}/**
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
 */const RP=6;class SP{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??RP,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hm(this),this.idTokenSubscription=new hm(this),this.beforeStateQueue=new wP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$t(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await qi.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Pa(this,{idToken:e}),i=await yt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(fe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Lr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fe(this.app))return Promise.reject(Me(this));const t=e?x(e):null;return t&&D(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fe(this.app)?Promise.reject(Me(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fe(this.app)?Promise.reject(Me(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AP(this),t=new SP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await IP(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$t(e)||this._popupRedirectResolver;D(t,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[$t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&sP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ge(n){return x(n)}class hm{constructor(e){this.auth=e,this.observer=null,this.addObserver=fv(t=>this.observer=t)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bP(n){co=n}function Wh(n){return co.loadJS(n)}function PP(){return co.recaptchaV2Script}function NP(){return co.recaptchaEnterpriseScript}function kP(){return co.gapiScript}function cE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=500,OP=6e4,Mo=1e12;class LP{constructor(e){this.auth=e,this.counter=Mo,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new xP(e,this.auth.name,t||{})),this.counter++,i}reset(e){var i;const t=e||Mo;(i=this._widgets.get(t))==null||i.delete(),this._widgets.delete(t)}getResponse(e){var i;const t=e||Mo;return((i=this._widgets.get(t))==null?void 0:i.getResponse())||""}async execute(e){var i;const t=e||Mo;return(i=this._widgets.get(t))==null||i.execute(),""}}class VP{constructor(){this.enterprise=new MP}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class MP{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class xP{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;D(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=FP(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},OP)},DP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function FP(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const UP="recaptcha-enterprise",hr="NO_RECAPTCHA";class lE{constructor(e){this.type=UP,this.auth=ge(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{Ky(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new zy(l);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(r,o,c){const l=window.grecaptcha;am(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(hr)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new VP().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!t&&am(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=NP();l.length!==0&&(l+=c),Wh(l).then(()=>{s(c,r,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function xs(n,e,t,i=!1,s=!1){const r=new lE(n);let o;if(s)o=hr;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Sn(n,e,t,i,s){var r,o;if(s==="EMAIL_PASSWORD_PROVIDER")if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await xs(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await xs(n,e,t,t==="getOobCode");return i(n,l)}else return Promise.reject(c)});else if(s==="PHONE_PROVIDER")if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const c=await xs(n,e,t);return i(n,c).catch(async l=>{var u;if(((u=n._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const f=await xs(n,e,t,!1,!0);return i(n,f)}return Promise.reject(l)})}else{const c=await xs(n,e,t,!1,!0);return i(n,c)}else return Promise.reject(s+" provider is not supported.")}async function uE(n){const e=ge(n),t=await Ky(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new zy(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new lE(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(n,e){const t=Fa(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(bn(r,e??{}))return s;rt(s,"already-initialized")}return t.initialize({options:e})}function qP(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map($t);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function jh(n,e,t){const i=ge(n);D(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=dE(e),{host:o,port:c}=BP(e),l=c===null?"":`:${c}`,u={url:`${r}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){D(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),D(bn(u,i.config.emulator)&&bn(f,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=u,i.emulatorConfig=f,i.settings.appVerificationDisabledForTesting=!0,Un(o)?(_u(`${r}//${o}${l}`),gu("Auth",!0)):s||WP()}function dE(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function BP(n){const e=dE(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:dm(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:dm(o)}}}function dm(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function WP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ct("not implemented")}_getIdTokenResponse(e){return Ct("not implemented")}_linkToIdToken(e,t){return Ct("not implemented")}_getReauthenticationResolver(e){return Ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(n,e){return he(n,"POST","/v1/accounts:resetPassword",ue(n,e))}async function jP(n,e){return he(n,"POST","/v1/accounts:update",e)}async function HP(n,e){return he(n,"POST","/v1/accounts:signUp",e)}async function $P(n,e){return he(n,"POST","/v1/accounts:update",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(n,e){return an(n,"POST","/v1/accounts:signInWithPassword",ue(n,e))}async function gc(n,e){return he(n,"POST","/v1/accounts:sendOobCode",ue(n,e))}async function zP(n,e){return gc(n,e)}async function KP(n,e){return gc(n,e)}async function QP(n,e){return gc(n,e)}async function YP(n,e){return gc(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XP(n,e){return an(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}async function JP(n,e){return an(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends ps{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new es(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new es(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sn(e,t,"signInWithPassword",GP,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return XP(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sn(e,i,"signUpPassword",HP,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return JP(e,{idToken:t,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(n,e){return an(n,"POST","/v1/accounts:signInWithIdp",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP="http://localhost";class Ot extends ps{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new Ot(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Xt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Xt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xt(e,t)}buildRequest(){const e={requestUri:ZP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(n,e){return he(n,"POST","/v1/accounts:sendVerificationCode",ue(n,e))}async function eN(n,e){return an(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,e))}async function tN(n,e){const t=await an(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,e));if(t.temporaryProof)throw Xs(n,"account-exists-with-different-credential",t);return t}const nN={USER_NOT_FOUND:"user-not-found"};async function iN(n,e){const t={...e,operation:"REAUTH"};return an(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,t),nN)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends ps{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Cn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Cn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eN(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return tN(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return iN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:r}=e;return!i&&!t&&!s&&!r?null:new Cn({verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rN(n){const e=$s(Gs(n)).link,t=e?$s(Gs(e)).deep_link_id:null,i=$s(Gs(n)).deep_link_id;return(i?$s(Gs(i)).link:null)||i||t||e||n}class ms{constructor(e){const t=$s(Gs(e)),i=t.apiKey??null,s=t.oobCode??null,r=sN(t.mode??null);D(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=rN(e);try{return new ms(t)}catch{return null}}}function oN(n){return ms.parseLink(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.providerId=Lt.PROVIDER_ID}static credential(e,t){return es._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ms.parseLink(t);return D(i,"argument-error"),es._fromEmailAndCode(e,i.code,i.tenantId)}}Lt.PROVIDER_ID="password";Lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _s extends cn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class dr extends _s{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return D("providerId"in t&&"signInMethod"in t,"argument-error"),Ot._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return D(e.idToken||e.accessToken,"argument-error"),Ot._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return dr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return dr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new dr(c)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends _s{constructor(){super("facebook.com")}static credential(e){return Ot._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends _s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ot._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return St.credential(t,i)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends _s{constructor(){super("github.com")}static credential(e){return Ot._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN="http://localhost";class Vr extends ps{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Xt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Xt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,pendingToken:r}=t;return!i||!s||!r||i!==s?null:new Vr(i,r)}static _create(e,t){return new Vr(e,t)}buildRequest(){return{requestUri:aN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN="saml.";class Na extends cn{constructor(e){D(e.startsWith(cN),"argument-error"),super(e)}static credentialFromResult(e){return Na.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Na.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Vr.fromJSON(e);return D(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return Vr._create(i,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends _s{constructor(){super("twitter.com")}static credential(e,t){return Ot._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Wt.credential(t,i)}catch{return null}}}Wt.TWITTER_SIGN_IN_METHOD="twitter.com";Wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pE(n,e){return an(n,"POST","/v1/accounts:signUp",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await yt._fromIdTokenResponse(e,i,s),o=pm(i);return new pt({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=pm(i);return new pt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function pm(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mE(n){var s;if(fe(n.app))return Promise.reject(Me(n));const e=ge(n);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new pt({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await pE(e,{returnSecureToken:!0}),i=await pt._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends on{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ka.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new ka(e,t,i,s)}}function _E(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ka._fromErrorAndOperation(n,r,e,i):r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function lN(n,e){const t=x(n);await yc(!0,t,e);const{providerUserInfo:i}=await pP(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),s=gE(i||[]);return t.providerData=t.providerData.filter(r=>s.has(r.providerId)),s.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Hh(n,e,t=!1){const i=await rn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return pt._forOperation(n,"link",i)}async function yc(n,e,t){await Lr(e);const i=gE(e.providerData),s=n===!1?"provider-already-linked":"no-such-provider";D(i.has(t)===n,e.auth,s)}/**
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
 */async function yE(n,e,t=!1){const{auth:i}=n;if(fe(i.app))return Promise.reject(Me(i));const s="reauthenticate";try{const r=await rn(n,_E(i,s,e,n),t);D(r.idToken,i,"internal-error");const o=_c(r.idToken);D(o,i,"internal-error");const{sub:c}=o;return D(n.uid===c,i,"user-mismatch"),pt._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&rt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(n,e,t=!1){if(fe(n.app))return Promise.reject(Me(n));const i="signIn",s=await _E(n,i,e),r=await pt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Ec(n,e){return EE(ge(n),e)}async function $h(n,e){const t=x(n);return await yc(!1,t,e.providerId),Hh(t,e)}async function Gh(n,e){return yE(x(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(n,e){return an(n,"POST","/v1/accounts:signInWithCustomToken",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(n,e){if(fe(n.app))return Promise.reject(Me(n));const t=ge(n),i=await uN(t,{token:e,returnSecureToken:!0}),s=await pt._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?zh._fromServerResponse(e,t):"totpInfo"in t?Kh._fromServerResponse(e,t):rt(e,"internal-error")}}class zh extends lo{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new zh(t)}}class Kh extends lo{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Kh(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(n,e,t){var i;D(((i=t.url)==null?void 0:i.length)>0,n,"invalid-continue-uri"),D(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),D(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(D(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(D(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qh(n){const e=ge(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function IE(n,e,t){const i=ge(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Ic(i,s,t),await Sn(i,s,"getOobCode",KP,"EMAIL_PASSWORD_PROVIDER")}async function dN(n,e,t){await fE(x(n),{oobCode:e,newPassword:t}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Qh(n),i})}async function fN(n,e){await $P(x(n),{oobCode:e})}async function vE(n,e){const t=x(n),i=await fE(t,{oobCode:e}),s=i.requestType;switch(D(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":D(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":D(i.mfaInfo,t,"internal-error");default:D(i.email,t,"internal-error")}let r=null;return i.mfaInfo&&(r=lo._fromServerResponse(ge(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:r},operation:s}}async function pN(n,e){const{data:t}=await vE(x(n),e);return t.email}async function mN(n,e,t){if(fe(n.app))return Promise.reject(Me(n));const i=ge(n),o=await Sn(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",pE,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Qh(n),l}),c=await pt._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function TE(n,e,t){return fe(n.app)?Promise.reject(Me(n)):Ec(x(n),Lt.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Qh(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _N(n,e,t){const i=ge(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function r(o,c){D(c.handleCodeInApp,i,"argument-error"),c&&Ic(i,o,c)}r(s,t),await Sn(i,s,"getOobCode",QP,"EMAIL_PASSWORD_PROVIDER")}function gN(n,e){const t=ms.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function yN(n,e,t){if(fe(n.app))return Promise.reject(Me(n));const i=x(n),s=Lt.credentialWithLink(e,t||Or());return D(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Ec(i,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EN(n,e){return he(n,"POST","/v1/accounts:createAuthUri",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN(n,e){const t=Uh()?Or():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:s}=await EN(x(n),i);return s||[]}async function vN(n,e){const t=x(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Ic(t.auth,s,e);const{email:r}=await zP(t.auth,s);r!==n.email&&await n.reload()}async function TN(n,e,t){const i=x(n),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Ic(i.auth,r,t);const{email:o}=await YP(i.auth,r);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(n,e){return he(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AN(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=x(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await rn(i,wN(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function RN(n,e){const t=x(n);return fe(t.auth.app)?Promise.reject(Me(t.auth)):AE(t,e,null)}function wE(n,e){return AE(x(n),null,e)}async function AE(n,e,t){const{auth:i}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(r.email=e),t&&(r.password=t);const o=await rn(n,jP(i,r));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function SN(n){var s,r;if(!n)return null;const{providerId:e}=n,t=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},i=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(n!=null&&n.idToken)){const o=(r=(s=_c(n.idToken))==null?void 0:s.firebase)==null?void 0:r.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new Bi(i,c)}}if(!e)return null;switch(e){case"facebook.com":return new CN(i,t);case"github.com":return new bN(i,t);case"google.com":return new PN(i,t);case"twitter.com":return new NN(i,t,n.screenName||null);case"custom":case"anonymous":return new Bi(i,null);default:return new Bi(i,e,t)}}class Bi{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class RE extends Bi{constructor(e,t,i,s){super(e,t,i),this.username=s}}class CN extends Bi{constructor(e,t){super(e,"facebook.com",t)}}class bN extends RE{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class PN extends Bi{constructor(e,t){super(e,"google.com",t)}}class NN extends RE{constructor(e,t,i){super(e,"twitter.com",t,i)}}function kN(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:SN(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(n,e){return x(n).setPersistence(e)}function ON(n){return uE(n)}async function LN(n,e){return ge(n).validatePassword(e)}function SE(n,e,t,i){return x(n).onIdTokenChanged(e,t,i)}function CE(n,e,t){return x(n).beforeAuthStateChanged(e,t)}function bE(n,e,t,i){return x(n).onAuthStateChanged(e,t,i)}function VN(n){x(n).useDeviceLanguage()}function MN(n,e){return x(n).updateCurrentUser(e)}function PE(n){return x(n).signOut()}function xN(n,e){return ge(n).revokeAccessToken(e)}async function NE(n){return x(n).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,i){this.type=e,this.credential=t,this.user=i}static _fromIdtoken(e,t){return new ii("enroll",e,t)}static _fromMfaPendingCredential(e){return new ii("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return ii._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((i=e.multiFactorSession)!=null&&i.idToken)return ii._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=ge(e),s=t.customData._serverResponse,r=(s.mfaInfo||[]).map(c=>lo._fromServerResponse(i,c));D(s.mfaPendingCredential,i,"internal-error");const o=ii._fromMfaPendingCredential(s.mfaPendingCredential);return new Yh(o,r,async c=>{const l=await c._process(i,o);delete s.mfaInfo,delete s.mfaPendingCredential;const u={...s,idToken:l.idToken,refreshToken:l.refreshToken};switch(t.operationType){case"signIn":const f=await pt._fromIdTokenResponse(i,t.operationType,u);return await i._updateCurrentUser(f.user),f;case"reauthenticate":return D(t.user,i,"internal-error"),pt._forOperation(t.user,t.operationType,u);default:rt(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function FN(n,e){var s;const t=x(n),i=e;return D(e.customData.operationType,t,"argument-error"),D((s=i.customData._serverResponse)==null?void 0:s.mfaPendingCredential,t,"argument-error"),Yh._fromError(t,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:start",ue(n,e))}function UN(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:finalize",ue(n,e))}function qN(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:start",ue(n,e))}function BN(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:finalize",ue(n,e))}function WN(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:withdraw",ue(n,e))}class Xh{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>lo._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new Xh(e)}async getSession(){return ii._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const i=e,s=await this.getSession(),r=await rn(this.user,i._process(this.user.auth,s,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const s=await rn(this.user,WN(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:r})=>r!==t),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const ml=new WeakMap;function jN(n){const e=x(n);return ml.has(e)||ml.set(e,Xh._fromUser(e)),ml.get(e)}const Da="__sak";/**
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
 */class kE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Da,"1"),this.storage.removeItem(Da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=1e3,$N=10;class DE extends kE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);TP()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$N):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},HN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}DE.type="LOCAL";const OE=DE;/**
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
 */const GN=1e3;function _l(n){var i;const e=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return((i=document.cookie.match(t))==null?void 0:i[1])??null}function gl(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}class LE{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=gl(e);if(window.cookieStore){const i=await window.cookieStore.get(t);return i==null?void 0:i.value}return _l(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const i=gl(e);document.cookie=`${i}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const i=gl(e);if(window.cookieStore){const c=(u=>{const f=u.changed.find(m=>m.name===i);f&&t(f.value),u.deleted.find(m=>m.name===i)&&t(null)}),l=()=>window.cookieStore.removeEventListener("change",c);return this.listenerUnsubscribes.set(t,l),window.cookieStore.addEventListener("change",c)}let s=_l(i);const r=setInterval(()=>{const c=_l(i);c!==s&&(t(c),s=c)},GN),o=()=>clearInterval(r);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){const i=this.listenerUnsubscribes.get(t);i&&(i(),this.listenerUnsubscribes.delete(t))}}LE.type="COOKIE";const zN=LE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE extends kE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}VE.type="SESSION";const Jh=VE;/**
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
 */function KN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new vc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,r)),l=await KN(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class QN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const u=Tc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(m.data.response);break;default:clearTimeout(f),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return window}function YN(n){Te().location.href=n}/**
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
 */function Zh(){return typeof Te().WorkerGlobalScope<"u"&&typeof Te().importScripts=="function"}async function XN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JN(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function ZN(){return Zh()?self:null}/**
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
 */const ME="firebaseLocalStorageDb",ek=1,Oa="firebaseLocalStorage",xE="fbase_key";class uo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wc(n,e){return n.transaction([Oa],e?"readwrite":"readonly").objectStore(Oa)}function tk(){const n=indexedDB.deleteDatabase(ME);return new uo(n).toPromise()}function fu(){const n=indexedDB.open(ME,ek);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Oa,{keyPath:xE})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Oa)?e(i):(i.close(),await tk(),e(await fu()))})})}async function _m(n,e,t){const i=wc(n,!0).put({[xE]:e,value:t});return new uo(i).toPromise()}async function nk(n,e){const t=wc(n,!1).get(e),i=await new uo(t).toPromise();return i===void 0?null:i.value}function gm(n,e){const t=wc(n,!0).delete(e);return new uo(t).toPromise()}const ik=800,sk=3;class FE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>sk)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vc._getInstance(ZN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await XN(),!this.activeServiceWorker)return;this.sender=new QN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fu();return await _m(e,Da,"1"),await gm(e,Da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>_m(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>nk(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>gm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=wc(s,!1).getAll();return new uo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ik)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FE.type="LOCAL";const UE=FE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:start",ue(n,e))}function rk(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:finalize",ue(n,e))}function ok(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:finalize",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=cE("rcb"),ak=new ao(3e4,6e4);class ck{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Te().grecaptcha)!=null&&e.render)}load(e,t=""){return D(lk(t),e,"argument-error"),this.shouldResolveImmediately(t)&&om(Te().grecaptcha)?Promise.resolve(Te().grecaptcha):new Promise((i,s)=>{const r=Te().setTimeout(()=>{s(Xe(e,"network-request-failed"))},ak.get());Te()[yl]=()=>{Te().clearTimeout(r),delete Te()[yl];const c=Te().grecaptcha;if(!c||!om(c)){s(Xe(e,"internal-error"));return}const l=c.render;c.render=(u,f)=>{const p=l(u,f);return this.counter++,p},this.hostLanguage=t,i(c)};const o=`${PP()}?${pi({onload:yl,render:"explicit",hl:t})}`;Wh(o).catch(()=>{clearTimeout(r),s(Xe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Te().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function lk(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class uk{async load(e){return new LP(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="recaptcha",hk={theme:"light",type:"image"};class dk{constructor(e,t,i={...hk}){this.parameters=i,this.type=fr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ge(e),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;D(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new uk:new ck,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(s=>{const r=o=>{o&&(this.tokenChangeListeners.delete(r),s(o))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=Te()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(Uh()&&!Zh(),this.auth,"internal-error"),await fk(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await dP(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function fk(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Cn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function pk(n,e,t){if(fe(n.app))return Promise.reject(Me(n));const i=ge(n),s=await Ac(i,e,x(t));return new ed(s,r=>Ec(i,r))}async function mk(n,e,t){const i=x(n);await yc(!1,i,"phone");const s=await Ac(i.auth,e,x(t));return new ed(s,r=>$h(i,r))}async function _k(n,e,t){const i=x(n);if(fe(i.auth.app))return Promise.reject(Me(i.auth));const s=await Ac(i.auth,e,x(t));return new ed(s,r=>Gh(i,r))}async function Ac(n,e,t){var i;if(!n._getRecaptchaConfig())try{await uE(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const r=s.session;if("phoneNumber"in s){D(r.type==="enroll",n,"internal-error");const o={idToken:r.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Sn(n,o,"mfaSmsEnrollment",async(f,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===hr){D((t==null?void 0:t.type)===fr,f,"argument-error");const m=await El(f,p,t);return mm(f,m)}return mm(f,p)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{D(r.type==="signin",n,"internal-error");const o=((i=s.multiFactorHint)==null?void 0:i.uid)||s.multiFactorUid;D(o,n,"missing-multi-factor-info");const c={mfaPendingCredential:r.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Sn(n,c,"mfaSmsSignIn",async(p,m)=>{if(m.phoneSignInInfo.captchaResponse===hr){D((t==null?void 0:t.type)===fr,p,"argument-error");const w=await El(p,m,t);return ym(p,w)}return ym(p,m)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const r={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Sn(n,r,"sendVerificationCode",async(u,f)=>{if(f.captchaResponse===hr){D((t==null?void 0:t.type)===fr,u,"argument-error");const p=await El(u,f,t);return fm(u,p)}return fm(u,f)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{t==null||t._reset()}}async function gk(n,e){const t=x(n);if(fe(t.auth.app))return Promise.reject(Me(t.auth));await Hh(t,e)}async function El(n,e,t){D(t.type===fr,n,"argument-error");const i=await t.verify();D(typeof i=="string",n,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const r=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,c=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:r,recaptchaToken:i,captchaResponse:o,clientType:c,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){const r=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,c=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:r,clientType:o,recaptchaVersion:c}}),s}else return Object.assign(s,{recaptchaToken:i}),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.providerId=ri.PROVIDER_ID,this.auth=ge(e)}verifyPhoneNumber(e,t){return Ac(this.auth,e,x(t))}static credential(e,t){return Cn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ri.credentialFromTaggedObject(t)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?Cn._fromTokenResponse(t,i):null}}ri.PROVIDER_ID="phone";ri.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ii(n,e){return e?$t(e):(D(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class td extends ps{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yk(n){return EE(n.auth,new td(n),n.bypassAuthState)}function Ek(n){const{auth:e,user:t}=n;return D(t,e,"internal-error"),yE(t,new td(n),n.bypassAuthState)}async function Ik(n){const{auth:e,user:t}=n;return D(t,e,"internal-error"),Hh(t,new td(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yk;case"linkViaPopup":case"linkViaRedirect":return Ik;case"reauthViaPopup":case"reauthViaRedirect":return Ek;default:rt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=new ao(2e3,1e4);async function Tk(n,e,t){if(fe(n.app))return Promise.reject(Xe(n,"operation-not-supported-in-this-environment"));const i=ge(n);fs(n,e,cn);const s=Ii(i,t);return new Gt(i,"signInViaPopup",e,s).executeNotNull()}async function BE(n,e,t){const i=x(n);if(fe(i.auth.app))return Promise.reject(Xe(i.auth,"operation-not-supported-in-this-environment"));fs(i.auth,e,cn);const s=Ii(i.auth,t);return new Gt(i.auth,"reauthViaPopup",e,s,i).executeNotNull()}async function wk(n,e,t){const i=x(n);fs(i.auth,e,cn);const s=Ii(i.auth,t);return new Gt(i.auth,"linkViaPopup",e,s,i).executeNotNull()}class Gt extends qE{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Gt.currentPopupAction&&Gt.currentPopupAction.cancel(),Gt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Tc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vk.get())};e()}}Gt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak="pendingRedirect",Ko=new Map;class Rk extends qE{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ko.get(this.auth._key());if(!e){try{const i=await Sk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ko.set(this.auth._key(),e)}return this.bypassAuthState||Ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sk(n,e){const t=jE(e),i=WE(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function nd(n,e){return WE(n)._set(jE(e),"true")}function Ck(n,e){Ko.set(n._key(),e)}function WE(n){return $t(n._redirectPersistence)}function jE(n){return zo(Ak,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(n,e,t){return Pk(n,e,t)}async function Pk(n,e,t){if(fe(n.app))return Promise.reject(Me(n));const i=ge(n);fs(n,e,cn),await i._initializationPromise;const s=Ii(i,t);return await nd(s,i),s._openRedirect(i,e,"signInViaRedirect")}function Nk(n,e,t){return kk(n,e,t)}async function kk(n,e,t){const i=x(n);if(fs(i.auth,e,cn),fe(i.auth.app))return Promise.reject(Me(i.auth));await i.auth._initializationPromise;const s=Ii(i.auth,t);await nd(s,i.auth);const r=await $E(i);return s._openRedirect(i.auth,e,"reauthViaRedirect",r)}function Dk(n,e,t){return Ok(n,e,t)}async function Ok(n,e,t){const i=x(n);fs(i.auth,e,cn),await i.auth._initializationPromise;const s=Ii(i.auth,t);await yc(!1,i,e.providerId),await nd(s,i.auth);const r=await $E(i);return s._openRedirect(i.auth,e,"linkViaRedirect",r)}async function Lk(n,e){return await ge(n)._initializationPromise,HE(n,e,!1)}async function HE(n,e,t=!1){if(fe(n.app))return Promise.reject(Me(n));const i=ge(n),s=Ii(i,e),o=await new Rk(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function $E(n){const e=Tc(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=600*1e3;class Mk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!GE(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Em(e))}saveEventToCache(e){this.cachedEventUids.add(Em(e)),this.lastProcessedEventTime=Date.now()}}function Em(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function GE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return GE(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(n,e={}){return he(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qk=/^https?/;async function Bk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Fk(n);for(const t of e)try{if(Wk(t))return}catch{}rt(n,"unauthorized-domain")}function Wk(n){const e=Or(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!qk.test(t))return!1;if(Uk.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const jk=new ao(3e4,6e4);function Im(){const n=Te().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Hk(n){return new Promise((e,t)=>{var s,r,o;function i(){Im(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Im(),t(Xe(n,"network-request-failed"))},timeout:jk.get()})}if((r=(s=Te().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=Te().gapi)!=null&&o.load)i();else{const c=cE("iframefcb");return Te()[c]=()=>{gapi.load?i():t(Xe(n,"network-request-failed"))},Wh(`${kP()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Qo=null,e})}let Qo=null;function $k(n){return Qo=Qo||Hk(n),Qo}/**
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
 */const Gk=new ao(5e3,15e3),zk="__/auth/iframe",Kk="emulator/auth/iframe",Qk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xk(n){const e=n.config;D(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qh(e,Kk):`https://${n.config.authDomain}/${zk}`,i={apiKey:e.apiKey,appName:n.name,v:mi},s=Yk.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${pi(i).slice(1)}`}async function Jk(n){const e=await $k(n),t=Te().gapi;return D(t,n,"internal-error"),e.open({where:document.body,url:Xk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qk,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Xe(n,"network-request-failed"),c=Te().setTimeout(()=>{r(o)},Gk.get());function l(){Te().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Zk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eD=500,tD=600,nD="_blank",iD="http://localhost";class vm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sD(n,e,t,i=eD,s=tD){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...Zk,width:i.toString(),height:s.toString(),top:r,left:o},u=$e().toLowerCase();t&&(c=tE(u)?nD:t),Zy(u)&&(e=e||iD,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[w,C])=>`${m}${w}=${C},`,"");if(vP(u)&&c!=="_self")return rD(e||"",c),new vm(null);const p=window.open(e||"",c,f);D(p,n,"popup-blocked");try{p.focus()}catch{}return new vm(p)}function rD(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const oD="__/auth/handler",aD="emulator/auth/handler",cD=encodeURIComponent("fac");async function Tm(n,e,t,i,s,r){D(n.config.authDomain,n,"auth-domain-config-required"),D(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:mi,eventId:s};if(e instanceof cn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Jo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof _s){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),u=l?`#${cD}=${encodeURIComponent(l)}`:"";return`${lD(n)}?${pi(c).slice(1)}${u}`}function lD({config:n}){return n.emulator?qh(n,aD):`https://${n.authDomain}/${oD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="webStorageSupport";class uD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jh,this._completeRedirectFn=HE,this._overrideRedirectResult=Ck}async _openPopup(e,t,i,s){var o;sn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Tm(e,t,i,Or(),s);return sD(e,r,Tc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Tm(e,t,i,Or(),s);return YN(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(sn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Jk(e),i=new Mk(e);return t.register("authEvent",s=>(D(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Il,{type:Il},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[Il];r!==void 0&&t(!!r),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Bk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return oE()||eE()||Bh()}}const zE=uD;class KE{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ct("unexpected MultiFactorSessionType")}}}class id extends KE{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new id(e)}_finalizeEnroll(e,t,i){return UN(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return rk(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class QE{constructor(){}static assertion(e){return id._fromCredential(e)}}QE.FACTOR_ID="phone";class YE{static assertionForEnrollment(e,t){return Mr._fromSecret(e,t)}static assertionForSignIn(e,t){return Mr._fromEnrollmentId(e,t)}static async generateSecret(e){var s;const t=e;D(typeof((s=t.user)==null?void 0:s.auth)<"u","internal-error");const i=await qN(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Rc._fromStartTotpMfaEnrollmentResponse(i,t.user.auth)}}YE.FACTOR_ID="totp";class Mr extends KE{constructor(e,t,i){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=i}static _fromSecret(e,t){return new Mr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Mr(t,e)}async _finalizeEnroll(e,t,i){return D(typeof this.secret<"u",e,"argument-error"),BN(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){D(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const i={verificationCode:this.otp};return ok(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i})}}class Rc{constructor(e,t,i,s,r,o,c){this.sessionInfo=o,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Rc(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var s;let i=!1;return(xo(e)||xo(t))&&(i=!0),i&&(xo(e)&&(e=((s=this.auth.currentUser)==null?void 0:s.email)||"unknownuser"),xo(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function xo(n){return typeof n>"u"||(n==null?void 0:n.length)===0}var wm="@firebase/auth",Am="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fD(n){oi(new Pn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aE(n)},u=new CP(i,s,r,l);return qP(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),oi(new Pn("auth-internal",e=>{const t=ge(e.getProvider("auth").getImmediate());return(i=>new hD(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(wm,Am,dD(n)),bt(wm,Am,"esm2020")}/**
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
 */const pD=300,mD=Um("authIdTokenMaxAge")||pD;let Rm=null;const _D=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>mD)return;const s=t==null?void 0:t.token;Rm!==s&&(Rm=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function XE(n=Iu()){const e=Fa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=hE(n,{popupRedirectResolver:zE,persistence:[UE,OE,Jh]}),i=Um("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=_D(r.toString());CE(t,o,()=>o(t.currentUser)),SE(t,c=>o(c))}}const s=Mm("auth");return s&&jh(t,`http://${s}`),t}function gD(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}bP({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Xe("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",gD().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fD("Browser");const JE=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:eP,ActionCodeURL:ms,AuthCredential:ps,AuthErrorCodes:iP,EmailAuthCredential:es,EmailAuthProvider:Lt,FacebookAuthProvider:qt,FactorId:Yb,GithubAuthProvider:Bt,GoogleAuthProvider:St,OAuthCredential:Ot,OAuthProvider:dr,OperationType:Zb,PhoneAuthCredential:Cn,PhoneAuthProvider:ri,PhoneMultiFactorGenerator:QE,ProviderId:Xb,RecaptchaVerifier:dk,SAMLAuthProvider:Na,SignInMethod:Jb,TotpMultiFactorGenerator:YE,TotpSecret:Rc,TwitterAuthProvider:Wt,applyActionCode:fN,beforeAuthStateChanged:CE,browserCookiePersistence:zN,browserLocalPersistence:OE,browserPopupRedirectResolver:zE,browserSessionPersistence:Jh,checkActionCode:vE,confirmPasswordReset:dN,connectAuthEmulator:jh,createUserWithEmailAndPassword:mN,debugErrorMap:nP,deleteUser:NE,fetchSignInMethodsForEmail:IN,getAdditionalUserInfo:kN,getAuth:XE,getIdToken:mP,getIdTokenResult:Qy,getMultiFactorResolver:FN,getRedirectResult:Lk,inMemoryPersistence:du,indexedDBLocalPersistence:UE,initializeAuth:hE,initializeRecaptchaConfig:ON,isSignInWithEmailLink:gN,linkWithCredential:$h,linkWithPhoneNumber:mk,linkWithPopup:wk,linkWithRedirect:Dk,multiFactor:jN,onAuthStateChanged:bE,onIdTokenChanged:SE,parseActionCodeURL:oN,prodErrorMap:Wy,reauthenticateWithCredential:Gh,reauthenticateWithPhoneNumber:_k,reauthenticateWithPopup:BE,reauthenticateWithRedirect:Nk,reload:Yy,revokeAccessToken:xN,sendEmailVerification:vN,sendPasswordResetEmail:IE,sendSignInLinkToEmail:_N,setPersistence:DN,signInAnonymously:mE,signInWithCredential:Ec,signInWithCustomToken:hN,signInWithEmailAndPassword:TE,signInWithEmailLink:yN,signInWithPhoneNumber:pk,signInWithPopup:Tk,signInWithRedirect:bk,signOut:PE,unlink:lN,updateCurrentUser:MN,updateEmail:RN,updatePassword:wE,updatePhoneNumber:gk,updateProfile:AN,useDeviceLanguage:VN,validatePassword:LN,verifyBeforeUpdateEmail:TN,verifyPasswordResetCode:pN},Symbol.toStringTag,{value:"Module"})),yD=typeof window<"u",ED={apiKey:"AIzaSyAbHjX0oyy9aCU8WDn9x3i-_T7hRMCSfRA",authDomain:"stay-on-the-board.firebaseapp.com",projectId:"stay-on-the-board",storageBucket:"ay-on-the-board.firebasestorage.app",messagingSenderId:"939636937442",appId:"1:939636937442:web:714e1a4566703fed8604bb",measurementId:"G-CPGNM62XZW",databaseURL:void 0},sd=yD&&window.__playwright_test__;let Fs=null,Us=null,qs=null,Bs=null;function rd(){if(Fs)return Fs;const n=mT();return n.length>0?Fs=n[0]:Fs=$m(ED),Fs}function ho(){if(Us)return Us;const n=rd();return Us=pg(n),sd&&(U.init("[FirebaseService] Connecting to Firestore Emulator (127.0.0.1:8080)"),Qu(Us,"127.0.0.1",8080)),Us}function ID(){if(qs)return qs;const n=rd();return qs=zb(n),sd&&(U.init("[FirebaseService] Connecting to Realtime DB Emulator (127.0.0.1:9000)"),qy(qs,"127.0.0.1",9e3)),qs}function vD(){if(Bs)return Bs;const n=rd();return Bs=XE(n),sd&&(U.init("[FirebaseService] Connecting to Auth Emulator (127.0.0.1:9099)"),jh(Bs,"http://127.0.0.1:9099",{disableWarnings:!0})),Bs}const Di={REWARDS:"rewards",ROOMS:"rooms",GENERAL:"general"};class TD{ref(e){return He(ho(),Di.REWARDS,e)}async merge(e,t){var i;try{const s=await si(this.ref(e));if(!s.exists())return await jt(this.ref(e),{unlockedRewards:t},{merge:!0}),t;const r=((i=s.data())==null?void 0:i.unlockedRewards)??{},o={...t,...r};return await jt(this.ref(e),{unlockedRewards:o},{merge:!0}),o}catch(s){return U.error("[RewardsCloudService] Не вдалося злити нагороди",s),null}}}const wD=new TD,vl="rewards",AD={unlockedRewards:{},hasUnseenRewards:!1};var xr;class RD{constructor(){Qn(this,xr,ts(La(AD)));ht(this,"subscribers",new Set);this.loadLocal()}get _state(){return ns(ct(this,xr))}set _state(e){is(ct(this,xr),e,!0)}get state(){return this._state}init(){this.loadLocal()}loadLocal(){if(!(typeof window>"u")){try{const e=de.getJSON(vl);if(e){const t=BI.safeParse(e);t.success?(this._state=t.data,U.info("[RewardsStore] Loaded validated state from storageService")):(U.error("[RewardsStore] Invalid state in storageService, resetting to defaults.",t.error.format()),this.reset())}}catch(e){U.error("[RewardsStore] Failed to load from storageService",e)}this.notifySubscribers()}}saveLocal(){typeof window<"u"&&de.setJSON(vl,this._state)}unlock(e){this._state.unlockedRewards[e]||(this._state.unlockedRewards[e]={id:e,unlockedAt:Date.now()},this._state.hasUnseenRewards=!0,this.saveLocal(),this.notifySubscribers(),U.info(`[RewardsStore] Unlocked reward: ${e}`))}markAllAsSeen(){this._state.hasUnseenRewards=!1,this.saveLocal(),this.notifySubscribers()}async syncWithCloud(e){const t=await wD.merge(e,this._state.unlockedRewards);t&&(this._state.unlockedRewards=t,this.saveLocal()),this.notifySubscribers()}reset(){this._state={unlockedRewards:{},hasUnseenRewards:!1},typeof window<"u"&&de.remove(vl),this.notifySubscribers()}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}xr=new WeakMap;const ZE=new RD,Fe=[];for(let n=0;n<256;++n)Fe.push((n+256).toString(16).slice(1));function SD(n,e=0){return(Fe[n[e+0]]+Fe[n[e+1]]+Fe[n[e+2]]+Fe[n[e+3]]+"-"+Fe[n[e+4]]+Fe[n[e+5]]+"-"+Fe[n[e+6]]+Fe[n[e+7]]+"-"+Fe[n[e+8]]+Fe[n[e+9]]+"-"+Fe[n[e+10]]+Fe[n[e+11]]+Fe[n[e+12]]+Fe[n[e+13]]+Fe[n[e+14]]+Fe[n[e+15]]).toLowerCase()}let Tl;const CD=new Uint8Array(16);function bD(){if(!Tl){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Tl=crypto.getRandomValues.bind(crypto)}return Tl(CD)}const PD=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Sm={randomUUID:PD};function ND(n,e,t){var s;n=n||{};const i=n.random??((s=n.rng)==null?void 0:s.call(n))??bD();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,SD(i)}function kD(n,e,t){return Sm.randomUUID&&!n?Sm.randomUUID():ND(n)}const DD=4;var Fr;class OD{constructor(){Qn(this,Fr,ts(La([])));ht(this,"timers",new Map);ht(this,"subscribers",new Set)}get _state(){return ns(ct(this,Fr))}set _state(e){is(ct(this,Fr),e,!0)}get state(){return this._state}set state(e){this._state=e,this.notifySubscribers()}_arm(e){const t=Math.max(0,e.duration-e.elapsed);e.startTime=Date.now(),e.timerId=setTimeout(()=>this.remove(e.id),t)}add(e){const t=kD(),i=e.duration??4e3,s={...e,id:t,duration:i};if(this._state=[...this._state,s],this._state.length>DD&&this.remove(this._state[0].id),this.notifySubscribers(),i>0){const r={id:t,timerId:null,startTime:0,elapsed:0,duration:i,holds:0};this.timers.set(t,r),this._arm(r)}return t}pause(e){const t=this.timers.get(e);t&&(t.holds+=1,!(t.holds>1||t.timerId===null)&&(clearTimeout(t.timerId),t.elapsed=Math.min(t.elapsed+(Date.now()-t.startTime),t.duration),t.timerId=null))}resume(e){const t=this.timers.get(e);t&&(t.holds>0&&(t.holds-=1),!(t.holds>0||t.timerId!==null)&&this._arm(t))}remove(e){const t=this.timers.get(e);t!=null&&t.timerId&&clearTimeout(t.timerId),this.timers.delete(e),this._state=this._state.filter(i=>i.id!==e),this.notifySubscribers()}clear(){for(const e of this.timers.values())e.timerId&&clearTimeout(e.timerId);this.timers.clear(),this._state=[],this.notifySubscribers()}success(e,t=4e3,i){return this.add({type:"success",messageRaw:e,duration:t,anchor:i})}info(e,t=3e3,i){return this.add({type:"info",messageRaw:e,duration:t,anchor:i})}warning(e,t=5e3,i){return this.add({type:"warning",messageRaw:e,duration:t,anchor:i})}error(e,t=7e3,i){return this.add({type:"error",messageRaw:e,duration:t,anchor:i})}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}Fr=new WeakMap;const LD=new OD;var Ur;class VD{constructor(){Qn(this,Ur,ts(La({current:null,minRequired:null,updateAvailable:!1})));ht(this,"subscribers",new Set)}get _state(){return ns(ct(this,Ur))}set _state(e){is(ct(this,Ur),e,!0)}get state(){return this._state}setVersion(e){this._state.current=e,this.notifySubscribers()}setMinVersion(e){this._state.minRequired=e,this.notifySubscribers()}setUpdateAvailable(e){this._state.updateAvailable=e,this.notifySubscribers()}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}Ur=new WeakMap;const MD=new VD;var qr;class xD{constructor(){Qn(this,qr,ts(null))}get user(){return ns(ct(this,qr))}set user(e){is(ct(this,qr),e,!0)}}qr=new WeakMap;var Br;class FD{constructor(){Qn(this,Br,ts(null))}get profile(){return ns(ct(this,Br))}set profile(e){is(ct(this,Br),e,!0)}}Br=new WeakMap;const pu=new xD,f0=pu,Ft=new FD,UD=()=>{if(typeof window>"u")return{uid:"local",displayName:null,bestTimeScore:0,isAnonymous:!0};const n=de.get("online_playerName");return{uid:"local",displayName:n==="Player"||!n?null:n,bestTimeScore:parseInt(de.get("local_best_time_score")||"0"),isAnonymous:!0}};Ft.profile=UD();class qD{constructor(){ht(this,"db");ht(this,"unwatch",null);this.db=ho()}async syncUserProfile(e){const t=He(this.db,"users",e.uid);ZE.syncWithCloud(e.uid);try{const i=await si(t),s=parseInt(de.get("local_best_time_score")||"0"),r=de.get("online_playerName"),o=r==="Player"?null:r;if(i.exists()){const c=i.data(),l=c.bestTimeScore||0,u=c.displayName||null,f=Math.max(s,l),p={lastActive:Date.now()};s>l&&(p.bestTimeScore=s),!u&&o&&(p.displayName=o),await jt(t,p,{merge:!0}),l>s&&de.set("local_best_time_score",l.toString()),u&&de.set("online_playerName",u),Ft.profile={uid:e.uid,displayName:u||o,bestTimeScore:f,isAnonymous:e.isAnonymous}}else{const c=MD.state.current,l={displayName:o,bestTimeScore:s,createdAt:Date.now(),lastActive:Date.now(),createdVersion:c||"unknown"};await jt(t,l),Ft.profile={uid:e.uid,displayName:o,bestTimeScore:s,isAnonymous:e.isAnonymous}}}catch(i){U.error("[UserProfileService] Sync profile failed",i);const s=parseInt(de.get("local_best_time_score")||"0"),r=de.get("online_playerName");Ft.profile={uid:e.uid,displayName:r==="Player"?null:r,bestTimeScore:s,isAnonymous:e.isAnonymous}}}watchUserProfile(e){this.stopWatching();const t=He(this.db,"users",e);return this.unwatch=Rr(t,i=>{if(!i.exists())return;const s=i.data().bestTimeScore||0,r=parseInt(de.get("local_best_time_score")||"0");s>r?(de.set("local_best_time_score",s.toString()),Ft.profile&&(Ft.profile.bestTimeScore=s),U.info("[UserProfileService] Best score arrived from another device")):r>s&&jt(t,{bestTimeScore:r},{merge:!0}).catch(o=>U.warn("[UserProfileService] Best score not sent",o))},i=>U.error("[UserProfileService] Live sync failed",i)),()=>this.stopWatching()}stopWatching(){var e;(e=this.unwatch)==null||e.call(this),this.unwatch=null}async updateNickname(e,t){const i=e&&e.trim()!==""&&e!=="Player"?e:null;if(Ft.profile&&(Ft.profile.displayName=i),i?de.set("online_playerName",i):de.remove("online_playerName"),!!t)try{const{updateProfile:s}=await Ci(async()=>{const{updateProfile:o}=await Promise.resolve().then(()=>JE);return{updateProfile:o}},void 0,import.meta.url);await s(t,{displayName:i});const r=He(this.db,"users",t.uid);await jt(r,{displayName:i,lastActive:Date.now()},{merge:!0}),U.action(`[UserProfileService] Nickname updated to ${i}`)}catch(s){U.error("[UserProfileService] Update profile error",s)}}async eraseCloudData(e){const[{leaderboardService:t},{eraseFollows:i},{removeProfile:s}]=await Promise.all([Ci(()=>import("./BCsAOeWA.js"),__vite__mapDeps([0,1,2]),import.meta.url),Ci(()=>import("./Df96DYUQ.js"),__vite__mapDeps([3,1,2]),import.meta.url),Ci(()=>import("./BQcJDNPr.js"),__vite__mapDeps([4,1,2,5]),import.meta.url)]);await t.removeMyEntries(e),await i(e),await s(e).catch(o=>{U.warn("[UserProfileService] Public profile not deleted",o)});const{deleteDoc:r}=await Ci(async()=>{const{deleteDoc:o}=await Promise.resolve().then(()=>kR);return{deleteDoc:o}},void 0,import.meta.url);await Promise.all([r(He(this.db,"users",e)).catch(o=>{U.warn("[UserProfileService] User doc not deleted",o)}),r(He(this.db,"rewards",e)).catch(o=>{U.warn("[UserProfileService] Rewards doc not deleted",o)})])}clearLocalUserData(){U.init("[UserProfileService] Clearing local user data..."),de.remove("local_best_time_score"),de.remove("sotb_rewards"),de.remove("online_playerName")}resetLocalProfile(){Ft.profile={uid:"local",displayName:null,bestTimeScore:0,isAnonymous:!0}}}const _n=new qD;class BD{constructor(){ht(this,"authInstance",null);ht(this,"pendingSignIn",null);ht(this,"lastError","")}get auth(){return this.authInstance||(this.authInstance=vD()),this.authInstance}async init(){bE(this.auth,async e=>{e?(U.init(`[AuthService] User logged in: ${e.uid} (Anon: ${e.isAnonymous})`),pu.user=e,await _n.syncUserProfile(e),_n.watchUserProfile(e.uid)):(U.init("[AuthService] No user logged in. Signing in anonymously..."),pu.user=null,_n.stopWatching(),await this.signInAnonymously())})}async ensureUser(){const e=this.auth.currentUser;return e||(this.pendingSignIn??(this.pendingSignIn=this.signInAnonymously().catch(t=>(U.error("[AuthService:EnsureUser] Анонімний вхід не вдався",t),null)).then(t=>(this.pendingSignIn=null,t))),this.pendingSignIn)}async signInAnonymously(){try{return(await mE(this.auth)).user}catch(e){throw U.error("[AuthService:SignInAnonymously] Firebase:",e),e}}async linkEmailPassword(e,t){const i=this.auth.currentUser;if(!i)return!1;try{const s=Lt.credential(e,t);return await $h(i,s),!0}catch(s){return U.error("[AuthService] Link error",s),!1}}async loginWithGoogle(){try{const{GoogleAuthProvider:e,linkWithPopup:t,signInWithCredential:i,signInWithPopup:s}=await Ci(async()=>{const{GoogleAuthProvider:c,linkWithPopup:l,signInWithCredential:u,signInWithPopup:f}=await Promise.resolve().then(()=>JE);return{GoogleAuthProvider:c,linkWithPopup:l,signInWithCredential:u,signInWithPopup:f}},void 0,import.meta.url),r=new e,o=this.auth.currentUser;if(!o)return await s(this.auth,r),!0;try{return await t(o,r),!0}catch(c){if((c.code??"")!=="auth/credential-already-in-use")throw c;const u=e.credentialFromError(c);if(!u)throw c;return await i(this.auth,u),!0}}catch(e){return U.error("[AuthService] Google auth error",e),this.lastError=e.code??"",!1}}async loginEmailPassword(e,t){try{return await TE(this.auth,e,t),!0}catch(i){return U.error("[AuthService] Login error",i),!1}}async resetPassword(e){try{return await IE(this.auth,e),!0}catch(t){return U.error("[AuthService] Reset error",t),!1}}async reauthenticate(e,t){const i=e.providerData.some(s=>s.providerId==="google.com");t&&e.email?await Gh(e,Lt.credential(e.email,t)):i&&await BE(e,new St)}async deleteAccount(e){const t=this.auth.currentUser;if(!t)return!1;try{return await this.reauthenticate(t,e),await _n.eraseCloudData(t.uid),await NE(t),_n.clearLocalUserData(),!0}catch(i){return U.error("[AuthService] Delete error",i),!1}}async changePassword(e,t){const i=this.auth.currentUser;if(!i)return!1;try{return await this.reauthenticate(i,t),await wE(i,e),!0}catch(s){return U.error("[AuthService] Change password error",s),!1}}async updateNickname(e){const t=this.auth.currentUser;return _n.updateNickname(e,t)}async logout(){try{_n.clearLocalUserData(),_n.resetLocalProfile(),ZE.reset(),await PE(this.auth)}catch(e){U.error("[AuthService:Logout] Firebase:",e)}}getCurrentUser(){return this.auth.currentUser}}const Ws=new BD,WD=50;class jD{get db(){return ho()}async sendMessage(e,t,i,s){const r=Ar(this.db,"rooms",e,"messages");await Cg(r,{senderId:t,senderName:i,text:s,createdAt:Ng()})}subscribeToChat(e,t){const i=Ar(this.db,"rooms",e,"messages"),s=da(i,fa("createdAt","desc"),pa(WD));return Rr(s,r=>{const o=[];r.forEach(c=>{const l=c.data();o.push({id:c.id,senderId:l.senderId,senderName:l.senderName,text:l.text,createdAt:l.createdAt?l.createdAt.toMillis():Date.now()})}),t(o.reverse())})}}const Cm=new jD,HD=Fn({roomId:tt().nullable(),playerId:tt().nullable()}),Ri={ROOM_ID:"online_roomId",PLAYER_ID:"online_playerId"};class $D{saveSession(e,t){de.set(Ri.ROOM_ID,e),de.set(Ri.PLAYER_ID,t)}getSession(){const e={roomId:de.get(Ri.ROOM_ID),playerId:de.get(Ri.PLAYER_ID)},t=HD.safeParse(e);return t.success?t.data:{roomId:null,playerId:null}}clearSession(){de.remove(Ri.ROOM_ID),de.remove(Ri.PLAYER_ID)}}const Jn=new $D,wl={reads:0,writes:0,bytesReceived:0,bytesSent:0,lastActivity:null,recentEvents:[],elapsedSeconds:0,isTracking:!1};var Wr;class GD{constructor(){Qn(this,Wr,ts(La({...wl})));ht(this,"timerInterval",null);ht(this,"subscribers",new Set)}get _state(){return ns(ct(this,Wr))}set _state(e){is(ct(this,Wr),e,!0)}get state(){return this._state}set state(e){this._state=e,this.notifySubscribers()}update(e){this._state=e(this._state),this.notifySubscribers()}reset(){this._state={...wl,isTracking:this._state.isTracking,elapsedSeconds:0},this.notifySubscribers()}startSession(){this.timerInterval&&clearInterval(this.timerInterval),this._state={...wl,isTracking:!0},this.notifySubscribers(),this.timerInterval=setInterval(()=>{this._state.elapsedSeconds++,this.notifySubscribers()},1e3)}stopSession(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),this._state.isTracking=!1,this.notifySubscribers()}recordRead(e,t){const i=this.estimateSize(t),s={type:"read",size:i,source:e,timestamp:Date.now()};this._state.reads++,this._state.bytesReceived+=i,this._state.lastActivity=Date.now(),this._state.recentEvents=[s,...this._state.recentEvents].slice(0,20),this.notifySubscribers()}recordWrite(e,t){const i=this.estimateSize(t),s={type:"write",size:i,source:e,timestamp:Date.now()};this._state.writes++,this._state.bytesSent+=i,this._state.lastActivity=Date.now(),this._state.recentEvents=[s,...this._state.recentEvents].slice(0,20),this.notifySubscribers()}estimateSize(e){try{return new TextEncoder().encode(JSON.stringify(e)).length}catch{return 0}}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}Wr=new WeakMap;const Js=new GD;function Fo(n,e,t){let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{o(new Error(t))},e)});return Promise.race([n.then(r=>(clearTimeout(i),r)),s])}const zD=Fn({seconds:zt(),nanoseconds:zt()});FI([zt(),zD]);const KD=tt().min(2).max(20).trim();Fn({id:tt(),name:KD,color:tt().regex(/^#[0-9A-Fa-f]{6}$/).default("#4A90E2"),isReady:gn().default(!1),joinedAt:mt(),isOnline:gn().default(!0),isWatchingReplay:gn().optional(),lastSeen:mt().optional(),isDisconnected:gn().optional(),disconnectStartedAt:mt().optional()}).passthrough();const QD=UI(["waiting","playing","finished"]);Fn({boardSize:zt().min(2).max(20).default(4),blockModeEnabled:gn().default(!1),blockOnVisitCount:zt().min(0).default(0),gameMode:tt().nullable().optional(),turnDuration:zt().optional(),settingsLocked:gn().optional()}).passthrough();const YD=Fn({id:tt(),name:tt().min(1).max(100),hostId:tt(),status:tt(),createdAt:mt(),lastActivity:mt(),isPrivate:mt(),settingsLocked:mt(),allowGuestSettings:mt(),players:mt(),settings:mt(),maxPlayers:mt().optional()}).passthrough();Fn({id:tt(),name:tt(),status:QD,playerCount:zt(),maxPlayers:zt(),isPrivate:gn()});const Uo=3e4,bm=50;class XD{get db(){return ho()}getRoomRef(e){return He(this.db,Di.ROOMS,e)}validateRoom(e,t){const i=YD.safeParse({...e,id:t});return i.success?i.data:(U.error(`[RoomFirestoreService] Кімната ${t} не відповідає схемі`,i.error.issues.map(s=>`${s.path.join(".")}: ${s.message}`)),{...e,id:t})}async createRoomDoc(e,t){await Fo(jt(this.getRoomRef(e),t),Uo,"Timeout: Failed to connect to Firebase Firestore.")}async getStatsDoc(){const e=He(this.db,Di.GENERAL,"stats"),t=await si(e);return t.exists()?t.data():null}async updateStatsDoc(e){const t=He(this.db,Di.GENERAL,"stats");await jt(t,e,{merge:!0})}async getPublicRoomsQuerySnapshot(){const e=da(Ar(this.db,Di.ROOMS),Ql("isPrivate","==",!1),fa("lastActivity","desc"),pa(bm)),[t,i]=await Promise.all([Fo(Sg(e),Uo,"Timeout fetching rooms"),this.getStatsDoc().catch(()=>null)]);return[t,i]}subscribeToPublicRooms(e,t){const i=da(Ar(this.db,Di.ROOMS),Ql("isPrivate","==",!1),fa("lastActivity","desc"),pa(bm));return Rr(i,e,t)}async deleteRoomDoc(e){await nh(e)}async getRoomDoc(e){const t=await Fo(si(this.getRoomRef(e)),Uo,"Timeout connecting to room");return t.exists()?this.validateRoom(t.data(),t.id):null}async getRoomDocSimple(e){const t=await si(this.getRoomRef(e));return t.exists()?this.validateRoom(t.data(),t.id):null}async updateRoomDoc(e,t,i=!1){const s=Zn(this.getRoomRef(e),t);i?await Fo(s,Uo,"Timeout updating room"):await s}subscribeToRoom(e,t,i){return Rr(this.getRoomRef(e),s=>{if(s.exists()){const r=s.data();Js.recordRead("RoomSubscription",r),t(this.validateRoom(r,s.id))}else t(null)},i)}}const Qe=new XD;class JD{get rtdb(){return ID()}trackPresence(e,t){const i=Vo(this.rtdb,`/status/${e}/${t}`),s=Vo(this.rtdb,".info/connected");return U.init(`[PresenceService] Setting up presence tracking for ${t} in ${e}`),sm(s,r=>{if(r.val()===!1){U.presence(`[PresenceService] RTDB connection lost for ${t}`);return}U.presence(`[PresenceService] RTDB connected for ${t}. Setting up onDisconnect and online status.`),Fb(i).set({state:"offline",last_changed:fl()}).then(()=>{im(i,{state:"online",last_changed:fl()}),U.presence(`[PresenceService] Presence tracking active for ${t}`)})})}async setOffline(e,t){const i=Vo(this.rtdb,`/status/${e}/${t}`);await im(i,{state:"offline",last_changed:fl()})}subscribeToRoomPresence(e,t){const i=Vo(this.rtdb,`/status/${e}`);return sm(i,s=>t(s.val()||{}))}}const ZD=new JD;class e0{get db(){return ho()}async updatePlayer(e,t,i){const s=He(this.db,"rooms",e),r={};for(const o in i)r[`players.${t}.${o}`]=i[o];await Zn(s,r),Js.recordWrite("RoomPlayer:updatePlayer",r)}async toggleReady(e,t,i){const s=He(this.db,"rooms",e),r={[`players.${t}.isReady`]:i,lastActivity:Date.now()};await Zn(s,r),Js.recordWrite("RoomPlayer:toggleReady",r)}async setWatchingReplay(e,t,i){const s=He(this.db,"rooms",e),r={[`players.${t}.isWatchingReplay`]:i,lastActivity:Date.now()};await Zn(s,r),Js.recordWrite("RoomPlayer:setWatchingReplay",r)}async sendHeartbeat(e,t){await this.updateLobbyPresence(e,t)}async updateLobbyPresence(e,t){const i=He(this.db,"rooms",e),s={[`players.${t}.lastSeen`]:Date.now()};await Zn(i,s),Js.recordWrite("RoomPlayer:Heartbeat",s)}async leaveRoom(e,t){U.init(`[RoomPlayerService] leaveRoom CALLED for ${e} by ${t}`);const i=He(this.db,"rooms",e);await ZD.setOffline(e,t).catch(s=>{U.presence(`[RoomPlayerService] Failed to set offline: ${s}`)}),Jn.clearSession();try{const s=await si(i);if(!s.exists()){U.init(`[RoomPlayerService] Room ${e} does not exist.`);return}const r=s.data(),o={...r.players};if(o[t]){delete o[t],U.init("[RoomPlayerService] Removed player from map. Checking remaining...");const c=Object.values(o),l=c.filter(u=>!u.isDisconnected);if(U.init(`[RoomPlayerService] Remaining: ${c.length}, Active: ${l.length}`),c.length===0)U.init("[RoomPlayerService] Room empty, deleting room."),await nh(i);else{const u={[`players.${t}`]:Pg(),lastActivity:Date.now()};if(r.hostId===t){const p=l[0]||c[0];p&&(u.hostId=p.id,U.init(`[RoomPlayerService] Host migrated to ${p.id}`))}c.length>0&&c.every(p=>p.isReady)&&r.status==="finished"&&(u.status="waiting"),await Zn(i,u)}}}catch(s){U.error("[RoomPlayerService] Failed to leave room:",s)}}}const js=new e0,Pm=["FIFA","SIMS","NFS","GTA","Peek","CS2","TrackMania","RoadRash","Minecraft","Tetris","Doom","Zelda","Mario","Portal","Halo","Cyberpunk","Witcher","Skyrim","Fortnite","Dota","Sonic","Metroid","PacMan","Diablo","StarCraft"],Nm=["Alik","Noah","Jack","Mateo","Lucas","Sofia","Olivia","Nora","Lucia","Emilia","Liam","Oliver","Elijah","James","William","Benjamin","Henry","Mia","Evelyn","Harper"];function t0(){return Pm[Math.floor(Math.random()*Pm.length)]}function p0(){return Nm[Math.floor(Math.random()*Nm.length)]}class n0{handle(e,t={}){const{context:i,showToast:s=!0,userMessageKey:r="common.errorOccurred",userMessageRaw:o}=t,c=e instanceof Error?e.message:String(e),l=e instanceof Error?e.stack:void 0;U.error(`${i?"["+i+"] ":""}${c}`,{error:e,stack:l}),s&&LD.add({type:"error",messageKey:o?void 0:r,messageRaw:o,duration:7e3})}initGlobalHandlers(){typeof window>"u"||(window.onerror=(e,t,i,s,r)=>{this.handle(r||e,{context:"WindowOnError"})},window.onunhandledrejection=e=>{this.handle(e.reason,{context:"UnhandledRejection"})})}}const Si=new n0;class eI extends Error{constructor(e,t="APP_ERROR",i){super(e),this.message=e,this.code=t,this.context=i,this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}class Hs extends eI{constructor(e,t="ROOM_ERROR",i){super(e,t,i)}}class km extends eI{constructor(e,t="AUTH_ERROR",i){super(e,t,i)}}function Al(n){return n==null?0:typeof n=="number"?n:n&&typeof n=="object"&&"seconds"in n&&"nanoseconds"in n?n.seconds*1e3+Math.floor(n.nanoseconds/1e6):0}const i0=6e5,Rl=8;class s0{async createRoom(e,t=!1,i){U.init(`[RoomService] createRoom START. Host: ${e}`);let s=Ws.getCurrentUser();s||(U.init("[RoomService] Not authenticated. Performing quick sign-in..."),s=await Ws.signInAnonymously());const r=s.uid,o=lf([]),c={id:r,name:e,color:o,isReady:!0,joinedAt:Date.now(),isOnline:!0,isWatchingReplay:!1},l=i&&i.trim()!==""?i.trim():t0(),u={...MI,boardSize:2,turnDuration:1e3,autoHideBoard:!1,blockModeEnabled:!0,blockOnVisitCount:0,settingsLocked:!1},f={name:l,hostId:r,status:"waiting",createdAt:Date.now(),lastActivity:Date.now(),isPrivate:t,settingsLocked:!1,allowGuestSettings:!0,players:{[r]:c},settings:u,maxPlayers:Rl};try{const p=this.generateTimestampId();return await Qe.createRoomDoc(p,f),t||Qe.updateStatsDoc({lastRoomCreatedAt:Date.now()}).catch(m=>U.warn("[RoomService] спільна статистика не оновилася",m)),Jn.saveSession(p,r),p}catch(p){throw Si.handle(p,{context:"RoomService:CreateRoom"}),new Hs("Failed to create room","CREATE_FAILED",{originalError:p})}}generateTimestampId(){const e=new Date,t=m=>m.toString().padStart(2,"0"),i=m=>m.toString().padStart(3,"0"),s=e.getFullYear(),r=t(e.getMonth()+1),o=t(e.getDate()),c=t(e.getHours()),l=t(e.getMinutes()),u=t(e.getSeconds()),f=i(e.getMilliseconds());return`${Math.random().toString(36).slice(2,6).padEnd(4,"0")}_${s}-${r}-${o}_${c}-${l}-${u}_${f}`}processRoomsSnapshot(e){const t=[],i=Date.now();let s=0;return e.forEach(r=>{const o=r.data(),c=Al(o.createdAt),l=Al(o.lastActivity);if(c>s&&(s=c),i-l>i0)return;const u=Object.values(o.players||{}),f=u.filter(p=>{const m=Al(p.lastSeen||p.joinedAt),w=i-m<12e4;return!p.isDisconnected&&w});o.status==="playing"&&f.length===0||u.length>0&&t.push({id:r.id,name:o.name,status:o.status,playerCount:u.length,maxPlayers:o.maxPlayers||Rl,isPrivate:o.isPrivate})}),{rooms:t,latestCreatedAt:s>0?s:void 0}}async getPublicRooms(){if(!await Ws.ensureUser())return U.error("[RoomService] Немає користувача — перелік кімнат не читається"),{rooms:[],unavailable:!0};try{const[t,i]=await Qe.getPublicRoomsQuerySnapshot(),s=this.processRoomsSnapshot(t),r=(i==null?void 0:i.lastRoomCreatedAt)||0,o=Math.max(s.latestCreatedAt||0,r);return{rooms:s.rooms,latestCreatedAt:o>0?o:void 0}}catch(t){return Si.handle(t,{context:"RoomService:GetPublicRooms",showToast:!1}),{rooms:[],unavailable:!0}}}subscribeToPublicRooms(e){return Qe.subscribeToPublicRooms(t=>{const i=this.processRoomsSnapshot(t);e(i)},t=>{Si.handle(t,{context:"RoomService:SubscribePublicRooms",showToast:!1}),e({rooms:[],unavailable:!0})})}async joinRoom(e,t){U.init(`[RoomService] joinRoom START. Room: ${e}`);let i=Ws.getCurrentUser();i||(U.init("[RoomService] joinRoom: Not authenticated. Performing quick sign-in..."),i=await Ws.signInAnonymously());const s=i.uid;try{const r=await Qe.getRoomDoc(e);if(!r)throw new Hs("Room not found","NOT_FOUND",{roomId:e});const o=Jn.getSession();if(o.roomId===e&&o.playerId&&r.players[o.playerId]){const f=Object.values(r.players).filter(p=>p.id!==o.playerId);if(r.status!=="waiting"&&f.length===0)throw U.init("[RoomService] Reconnect aborted: Room is empty (only me left) and game started/finished."),Jn.clearSession(),await js.leaveRoom(e,o.playerId),new km("Game ended because all opponents left.","RECONNECT_ABORTED");return U.init("[RoomService] Reconnecting as existing player"),r.players[o.playerId].name!==t&&await Qe.updateRoomDoc(e,{[`players.${o.playerId}.name`]:t,lastActivity:Date.now()}),o.playerId}if(Object.keys(r.players).length>=Rl)throw new Hs("Room is full","FULL");if(r.status==="playing")throw new Hs("Game already started","ALREADY_STARTED");const c=Object.values(r.players).map(f=>f.color),l=lf(c),u={id:s,name:t,color:l,isReady:!1,joinedAt:Date.now(),isOnline:!0,isWatchingReplay:!1};return await Qe.updateRoomDoc(e,{[`players.${s}`]:u,lastActivity:Date.now()},!0),Jn.saveSession(e,s),s}catch(r){throw r instanceof Hs||r instanceof km||Si.handle(r,{context:"RoomService:JoinRoom"}),r}}async getRoom(e){try{return await Qe.getRoomDocSimple(e)}catch(t){return Si.handle(t,{context:"RoomService:GetRoom",showToast:!1}),null}}subscribeToRoom(e,t){return Qe.subscribeToRoom(e,i=>{i||U.init(`[RoomService] Room ${e} deleted or not found`),t(i)},i=>{Si.handle(i,{context:"RoomService:SubscribeRoom",showToast:!1})})}async startGame(e){const t=await Qe.getRoomDocSimple(e);if(!t)return;const i={...t.players};Object.keys(i).forEach(s=>{i[s].isReady=!1,i[s].isWatchingReplay=!1}),await Qe.updateRoomDoc(e,{status:"playing",players:i,lastActivity:Date.now()})}async returnToLobby(e,t){const i=await Qe.getRoomDocSimple(e);if(!i)return;const s={[`players.${t}.isReady`]:!0,[`players.${t}.isWatchingReplay`]:!1,lastActivity:Date.now()},r={...i.players};r[t]&&(r[t]={...r[t],isReady:!0}),Object.values(r).every(c=>c.isReady)?s.status="waiting":i.status==="playing"&&(s.status="finished"),await Qe.updateRoomDoc(e,s)}async updateRoomSettings(e,t){const i={lastActivity:Date.now()};for(const[s,r]of Object.entries(t))s==="allowGuestSettings"?i.allowGuestSettings=r:i[`settings.${s}`]=r;t.settingsLocked!==void 0&&(i.settingsLocked=t.settingsLocked),await Qe.updateRoomDoc(e,i)}async renameRoom(e,t){await Qe.updateRoomDoc(e,{name:t,lastActivity:Date.now()})}getSession(){return Jn.getSession()}clearSession(){Jn.clearSession()}async updatePlayer(e,t,i){return js.updatePlayer(e,t,i)}async toggleReady(e,t,i){return js.toggleReady(e,t,i)}async setWatchingReplay(e,t,i){return js.setWatchingReplay(e,t,i)}async leaveRoom(e,t){return js.leaveRoom(e,t)}async sendMessage(e,t,i,s){return Cm.sendMessage(e,t,i,s)}subscribeToChat(e,t){return Cm.subscribeToChat(e,t)}}const m0=new s0;export{ZD as A,Al as B,Di as C,KD as P,Sg as a,Ws as b,Ar as c,He as d,Ng as e,nh as f,ho as g,si as h,p0 as i,ZE as j,Ft as k,pa as l,Zn as m,LD as n,fa as o,t0 as p,da as q,m0 as r,jt as s,Si as t,f0 as u,MD as v,Ql as w,js as x,Rr as y,Pg as z};
//# sourceMappingURL=CPxZ-VtI.js.map
