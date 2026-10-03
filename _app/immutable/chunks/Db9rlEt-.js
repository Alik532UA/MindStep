const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D7uK9KpG.js","./BYjLOMGr.js","./C5m4Ny9K.js","./UU0Umwhv.js","./v2btSBES.js","./DlAccrPC.js"])))=>i.map(i=>d[i]);
var ow=Object.defineProperty;var kp=s=>{throw TypeError(s)};var aw=(s,e,t)=>e in s?ow(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var G=(s,e,t)=>aw(s,typeof e!="symbol"?e+"":e,t),cw=(s,e,t)=>e.has(s)||kp("Cannot "+t);var Wt=(s,e,t)=>(cw(s,e,"read from private field"),t?t.call(s):e.get(s)),or=(s,e,t)=>e.has(s)?kp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);import{l as ee,s as Fe}from"./BYjLOMGr.js";import{g as xp,d as lw}from"./CkJnnIT7.js";import{o as $s,n as zn,s as kt,b as Ds,r as uw,u as hw,d as on,_ as Bw}from"./BV038QDI.js";import{an as vi,at as Vl,g as Ai,s as Ri}from"./C5m4Ny9K.js";import{_ as Qr}from"./Dp1pzeXC.js";const dw=$s({id:kt(),unlockedAt:zn()}),fw=$s({unlockedRewards:uw(kt(),dw),hasUnseenRewards:Ds()}),pw=()=>{};var Mp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(s,e){if(!s)throw Si(e)},Si=function(s){return new Error("Firebase Database ("+Sm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Cw=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=s[t++];e[n++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=s[t++],o=s[t++],a=s[t++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=s[t++],o=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},OB={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const i=s[r],o=r+1<s.length,a=o?s[r+1]:0,l=r+2<s.length,u=l?s[r+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),n.push(t[h],t[d],t[p],t[g])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Pm(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Cw(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const i=t[s.charAt(r++)],a=r<s.length?t[s.charAt(r)]:0;++r;const u=r<s.length?t[s.charAt(r)]:64;++r;const d=r<s.length?t[s.charAt(r)]:64;if(++r,i==null||a==null||u==null||d==null)throw new gw;const p=i<<2|a>>4;if(n.push(p),u!==64){const g=a<<4&240|u>>2;if(n.push(g),d!==64){const I=u<<6&192|d;n.push(I)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class gw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bm=function(s){const e=Pm(s);return OB.encodeByteArray(e,!0)},Yc=function(s){return bm(s).replace(/\./g,"")},Xc=function(s){try{return OB.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(s){return Nm(void 0,s)}function Nm(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!_w(t)||(s[t]=Nm(s[t],e[t]));return s}function _w(s){return s!=="__proto__"}/**
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
 */function Ew(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yw=()=>Ew().__FIREBASE_DEFAULTS__,Iw=()=>{if(typeof process>"u"||typeof Mp>"u")return;const s=Mp.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Dw=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Xc(s[1]);return e&&JSON.parse(e)},Gl=()=>{try{return pw()||yw()||Iw()||Dw()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Om=s=>{var e,t;return(t=(e=Gl())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},Lm=s=>{const e=Om(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Fm=()=>{var s;return(s=Gl())==null?void 0:s.config},km=s=>{var e;return(e=Gl())==null?void 0:e[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function xm(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=s.iat||0,i=s.sub||s.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Yc(JSON.stringify(t)),Yc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LB(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function ww(){var e;const s=(e=Gl())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vw(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Mm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Aw(){const s=Et();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Rw(){return Sm.NODE_ADMIN===!0}function Sw(){return!ww()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pw(){try{return typeof indexedDB=="object"}catch{return!1}}function bw(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="FirebaseError";class as extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Nw,Object.setPrototypeOf(this,as.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Na.prototype.create)}}class Na{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Ow(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new as(r,a,n)}}function Ow(s,e){try{let t=0,n="";for(;t<s.length;){const r=s.indexOf("{$",t);if(r===-1){n+=s.substring(t);break}const i=s.indexOf("}",r+2);if(i===-1){n+=s.substring(t);break}const o=s.substring(r+2,i),a=e[o];n+=s.substring(t,r)+(a!=null?String(a):`<${o}?>`),t=i+1}return n}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(s){return JSON.parse(s)}function ct(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=function(s){let e={},t={},n={},r="";try{const i=s.split(".");e=Qo(Xc(i[0])||""),t=Qo(Xc(i[1])||""),r=i[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:r}},Lw=function(s){const e=Vm(s),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Fw=function(s){const e=Vm(s).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function hi(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function Zc(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function el(s,e,t){const n={};for(const r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=e.call(t,s[r],r,s));return n}function Fs(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const i=s[r],o=e[r];if(Vp(i)&&Vp(o)){if(!Fs(i,o))return!1}else if(i!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function Vp(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Io(s){const e={};return s.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,i]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Do(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)n[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)n[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const p=n[d-3]^n[d-8]^n[d-14]^n[d-16];n[d]=(p<<1|p>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):d<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(r<<5|r>>>27)+u+l+h+n[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=p}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[r]>>i&255,++n;return e}}function xw(s,e){const t=new Mw(s,e);return t.subscribe.bind(t)}class Mw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Vw(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=ah),r.error===void 0&&(r.error=ah),r.complete===void 0&&(r.complete=ah);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vw(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function ah(){}function Bi(s,e){return`${s} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);if(r>=55296&&r<=56319){const i=r-55296;n++,j(n<s.length,"Surrogate pair missing trail surrogate.");const o=s.charCodeAt(n)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ul=function(s){let e=0;for(let t=0;t<s.length;t++){const n=s.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function te(s){return s&&s._delegate?s._delegate:s}/**
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
 */function Lr(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function FB(s){return(await fetch(s,{credentials:"include"})).ok}class ks{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ar="[DEFAULT]";/**
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
 */class Uw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new gn;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qw(e))try{this.getOrInitializeService({instanceIdentifier:ar})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});n.resolve(i)}catch{}}}}clearInstance(e=ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ar){return this.instances.has(e)}getOptions(e=ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);n===a&&o.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Hw(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ar){return this.component?this.component.multipleInstances?e:ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hw(s){return s===ar?void 0:s}function qw(s){return s.instantiationMode==="EAGER"}/**
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
 */class jw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Uw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(de||(de={}));const Jw={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Ww=de.INFO,Kw={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},zw=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=Kw[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hl{constructor(e){this.name=e,this._logLevel=Ww,this._logHandler=zw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Qw=(s,e)=>e.some(t=>s instanceof t);let Gp,Up;function $w(){return Gp||(Gp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yw(){return Up||(Up=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gm=new WeakMap,Hh=new WeakMap,Um=new WeakMap,ch=new WeakMap,kB=new WeakMap;function Xw(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",i),s.removeEventListener("error",o)},i=()=>{t(Ts(s.result)),r()},o=()=>{n(s.error),r()};s.addEventListener("success",i),s.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Gm.set(t,s)}).catch(()=>{}),kB.set(e,s),e}function Zw(s){if(Hh.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",o),s.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",i),s.addEventListener("error",o),s.addEventListener("abort",o)});Hh.set(s,e)}let qh={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Hh.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Um.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ts(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function eT(s){qh=s(qh)}function tT(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(lh(this),e,...t);return Um.set(n,e.sort?e.sort():[e]),Ts(n)}:Yw().includes(s)?function(...e){return s.apply(lh(this),e),Ts(Gm.get(this))}:function(...e){return Ts(s.apply(lh(this),e))}}function nT(s){return typeof s=="function"?tT(s):(s instanceof IDBTransaction&&Zw(s),Qw(s,$w())?new Proxy(s,qh):s)}function Ts(s){if(s instanceof IDBRequest)return Xw(s);if(ch.has(s))return ch.get(s);const e=nT(s);return e!==s&&(ch.set(s,e),kB.set(e,s)),e}const lh=s=>kB.get(s);function sT(s,e,{blocked:t,upgrade:n,blocking:r,terminated:i}={}){const o=indexedDB.open(s,e),a=Ts(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Ts(o.result),l.oldVersion,l.newVersion,Ts(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const rT=["get","getKey","getAll","getAllKeys","count"],iT=["put","add","delete","clear"],uh=new Map;function Hp(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(uh.get(e))return uh.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=iT.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||rT.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&l.done]))[0]};return uh.set(e,i),i}eT(s=>({...s,get:(e,t,n)=>Hp(e,t)||s.get(e,t,n),has:(e,t)=>!!Hp(e,t)||s.has(e,t)}));/**
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
 */class oT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(aT(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function aT(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jh="@firebase/app",qp="0.16.2";/**
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
 */const es=new Hl("@firebase/app"),cT="@firebase/app-compat",lT="@firebase/analytics-compat",uT="@firebase/analytics",hT="@firebase/app-check-compat",BT="@firebase/app-check",dT="@firebase/auth",fT="@firebase/auth-compat",pT="@firebase/database",CT="@firebase/data-connect",gT="@firebase/database-compat",mT="@firebase/functions",_T="@firebase/functions-compat",ET="@firebase/installations",yT="@firebase/installations-compat",IT="@firebase/messaging",DT="@firebase/messaging-compat",wT="@firebase/performance",TT="@firebase/performance-compat",vT="@firebase/remote-config",AT="@firebase/remote-config-compat",RT="@firebase/storage",ST="@firebase/storage-compat",PT="@firebase/firestore",bT="@firebase/ai",NT="@firebase/firestore-compat",OT="firebase",LT="12.19.0";/**
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
 */const Jh="[DEFAULT]",FT={[jh]:"fire-core",[cT]:"fire-core-compat",[uT]:"fire-analytics",[lT]:"fire-analytics-compat",[BT]:"fire-app-check",[hT]:"fire-app-check-compat",[dT]:"fire-auth",[fT]:"fire-auth-compat",[pT]:"fire-rtdb",[CT]:"fire-data-connect",[gT]:"fire-rtdb-compat",[mT]:"fire-fn",[_T]:"fire-fn-compat",[ET]:"fire-iid",[yT]:"fire-iid-compat",[IT]:"fire-fcm",[DT]:"fire-fcm-compat",[wT]:"fire-perf",[TT]:"fire-perf-compat",[vT]:"fire-rc",[AT]:"fire-rc-compat",[RT]:"fire-gcs",[ST]:"fire-gcs-compat",[PT]:"fire-fst",[NT]:"fire-fst-compat",[bT]:"fire-vertex","fire-js":"fire-js",[OT]:"fire-js-all"};/**
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
 */const $o=new Map,kT=new Map,Wh=new Map;function jp(s,e){try{s.container.addComponent(e)}catch(t){es.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function Tr(s){const e=s.name;if(Wh.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;Wh.set(e,s);for(const t of $o.values())jp(t,s);for(const t of kT.values())jp(t,s);return!0}function ql(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function ke(s){return s==null?!1:s.settings!==void 0}/**
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
 */const xT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new Na("app","Firebase",xT);/**
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
 */class MT{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
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
 */const Fr=LT;function Hm(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:Jh,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw Un.create("bad-app-name",{appName:String(r)});if(t||(t=Fm()),!t)throw Un.create("no-options");const i=$o.get(r);if(i)if(Fs(t,i.options)){if(Fs(n,i.config))return i;throw Un.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw Un.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new jw(r);for(const l of Wh.values())o.addComponent(l);const a=new MT(t,n,o);return $o.set(r,a),a}function xB(s=Jh){const e=$o.get(s);if(!e&&s===Jh&&Fm())return Hm();if(!e)throw Un.create("no-app",{appName:s});return e}function VT(){return Array.from($o.values())}function Dn(s,e,t){let n=FT[s]??s;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${n}" with version "${e}":`];r&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(o.join(" "));return}Tr(new ks(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const GT="firebase-heartbeat-database",UT=1,Yo="firebase-heartbeat-store";let hh=null;function qm(){return hh||(hh=sT(GT,UT,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Yo)}catch(t){console.warn(t)}}}}).catch(s=>{throw Un.create("idb-open",{originalErrorMessage:s.message})})),hh}async function HT(s){try{const t=(await qm()).transaction(Yo),n=await t.objectStore(Yo).get(jm(s));return await t.done,n}catch(e){if(e instanceof as)es.warn(e.message);else{const t=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(t.message)}}}async function Jp(s,e){try{const n=(await qm()).transaction(Yo,"readwrite");await n.objectStore(Yo).put(e,jm(s)),await n.done}catch(t){if(t instanceof as)es.warn(t.message);else{const n=Un.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});es.warn(n.message)}}}function jm(s){return`${s.name}!${s.options.appId}`}/**
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
 */const qT=1024,jT=30;class JT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new KT(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>jT){const o=zT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){es.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wp(),{heartbeatsToSend:n,unsentEntries:r}=WT(this._heartbeatsCache.heartbeats),i=Yc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return es.warn(t),""}}}function Wp(){return new Date().toISOString().substring(0,10)}function WT(s,e=qT){const t=[];let n=s.slice();for(const r of s){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Kp(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Kp(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class KT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pw()?bw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await HT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Jp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Jp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Kp(s){return Yc(JSON.stringify({version:2,heartbeats:s})).length}function zT(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
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
 */function QT(s){Tr(new ks("platform-logger",e=>new oT(e),"PRIVATE")),Tr(new ks("heartbeat",e=>new JT(e),"PRIVATE")),Dn(jh,qp,s),Dn(jh,qp,"esm2020"),Dn("fire-js","")}/**
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
 */QT("");var zp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vs,Jm;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function D(){}D.prototype=E.prototype,A.F=E.prototype,A.prototype=new D,A.prototype.constructor=A,A.D=function(R,v,P){for(var y=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)y[Nt-2]=arguments[Nt];return E.prototype[v].apply(R,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(A,E,D){D||(D=0);const R=Array(16);if(typeof E=="string")for(var v=0;v<16;++v)R[v]=E.charCodeAt(D++)|E.charCodeAt(D++)<<8|E.charCodeAt(D++)<<16|E.charCodeAt(D++)<<24;else for(v=0;v<16;++v)R[v]=E[D++]|E[D++]<<8|E[D++]<<16|E[D++]<<24;E=A.g[0],D=A.g[1],v=A.g[2];let P=A.g[3],y;y=E+(P^D&(v^P))+R[0]+3614090360&4294967295,E=D+(y<<7&4294967295|y>>>25),y=P+(v^E&(D^v))+R[1]+3905402710&4294967295,P=E+(y<<12&4294967295|y>>>20),y=v+(D^P&(E^D))+R[2]+606105819&4294967295,v=P+(y<<17&4294967295|y>>>15),y=D+(E^v&(P^E))+R[3]+3250441966&4294967295,D=v+(y<<22&4294967295|y>>>10),y=E+(P^D&(v^P))+R[4]+4118548399&4294967295,E=D+(y<<7&4294967295|y>>>25),y=P+(v^E&(D^v))+R[5]+1200080426&4294967295,P=E+(y<<12&4294967295|y>>>20),y=v+(D^P&(E^D))+R[6]+2821735955&4294967295,v=P+(y<<17&4294967295|y>>>15),y=D+(E^v&(P^E))+R[7]+4249261313&4294967295,D=v+(y<<22&4294967295|y>>>10),y=E+(P^D&(v^P))+R[8]+1770035416&4294967295,E=D+(y<<7&4294967295|y>>>25),y=P+(v^E&(D^v))+R[9]+2336552879&4294967295,P=E+(y<<12&4294967295|y>>>20),y=v+(D^P&(E^D))+R[10]+4294925233&4294967295,v=P+(y<<17&4294967295|y>>>15),y=D+(E^v&(P^E))+R[11]+2304563134&4294967295,D=v+(y<<22&4294967295|y>>>10),y=E+(P^D&(v^P))+R[12]+1804603682&4294967295,E=D+(y<<7&4294967295|y>>>25),y=P+(v^E&(D^v))+R[13]+4254626195&4294967295,P=E+(y<<12&4294967295|y>>>20),y=v+(D^P&(E^D))+R[14]+2792965006&4294967295,v=P+(y<<17&4294967295|y>>>15),y=D+(E^v&(P^E))+R[15]+1236535329&4294967295,D=v+(y<<22&4294967295|y>>>10),y=E+(v^P&(D^v))+R[1]+4129170786&4294967295,E=D+(y<<5&4294967295|y>>>27),y=P+(D^v&(E^D))+R[6]+3225465664&4294967295,P=E+(y<<9&4294967295|y>>>23),y=v+(E^D&(P^E))+R[11]+643717713&4294967295,v=P+(y<<14&4294967295|y>>>18),y=D+(P^E&(v^P))+R[0]+3921069994&4294967295,D=v+(y<<20&4294967295|y>>>12),y=E+(v^P&(D^v))+R[5]+3593408605&4294967295,E=D+(y<<5&4294967295|y>>>27),y=P+(D^v&(E^D))+R[10]+38016083&4294967295,P=E+(y<<9&4294967295|y>>>23),y=v+(E^D&(P^E))+R[15]+3634488961&4294967295,v=P+(y<<14&4294967295|y>>>18),y=D+(P^E&(v^P))+R[4]+3889429448&4294967295,D=v+(y<<20&4294967295|y>>>12),y=E+(v^P&(D^v))+R[9]+568446438&4294967295,E=D+(y<<5&4294967295|y>>>27),y=P+(D^v&(E^D))+R[14]+3275163606&4294967295,P=E+(y<<9&4294967295|y>>>23),y=v+(E^D&(P^E))+R[3]+4107603335&4294967295,v=P+(y<<14&4294967295|y>>>18),y=D+(P^E&(v^P))+R[8]+1163531501&4294967295,D=v+(y<<20&4294967295|y>>>12),y=E+(v^P&(D^v))+R[13]+2850285829&4294967295,E=D+(y<<5&4294967295|y>>>27),y=P+(D^v&(E^D))+R[2]+4243563512&4294967295,P=E+(y<<9&4294967295|y>>>23),y=v+(E^D&(P^E))+R[7]+1735328473&4294967295,v=P+(y<<14&4294967295|y>>>18),y=D+(P^E&(v^P))+R[12]+2368359562&4294967295,D=v+(y<<20&4294967295|y>>>12),y=E+(D^v^P)+R[5]+4294588738&4294967295,E=D+(y<<4&4294967295|y>>>28),y=P+(E^D^v)+R[8]+2272392833&4294967295,P=E+(y<<11&4294967295|y>>>21),y=v+(P^E^D)+R[11]+1839030562&4294967295,v=P+(y<<16&4294967295|y>>>16),y=D+(v^P^E)+R[14]+4259657740&4294967295,D=v+(y<<23&4294967295|y>>>9),y=E+(D^v^P)+R[1]+2763975236&4294967295,E=D+(y<<4&4294967295|y>>>28),y=P+(E^D^v)+R[4]+1272893353&4294967295,P=E+(y<<11&4294967295|y>>>21),y=v+(P^E^D)+R[7]+4139469664&4294967295,v=P+(y<<16&4294967295|y>>>16),y=D+(v^P^E)+R[10]+3200236656&4294967295,D=v+(y<<23&4294967295|y>>>9),y=E+(D^v^P)+R[13]+681279174&4294967295,E=D+(y<<4&4294967295|y>>>28),y=P+(E^D^v)+R[0]+3936430074&4294967295,P=E+(y<<11&4294967295|y>>>21),y=v+(P^E^D)+R[3]+3572445317&4294967295,v=P+(y<<16&4294967295|y>>>16),y=D+(v^P^E)+R[6]+76029189&4294967295,D=v+(y<<23&4294967295|y>>>9),y=E+(D^v^P)+R[9]+3654602809&4294967295,E=D+(y<<4&4294967295|y>>>28),y=P+(E^D^v)+R[12]+3873151461&4294967295,P=E+(y<<11&4294967295|y>>>21),y=v+(P^E^D)+R[15]+530742520&4294967295,v=P+(y<<16&4294967295|y>>>16),y=D+(v^P^E)+R[2]+3299628645&4294967295,D=v+(y<<23&4294967295|y>>>9),y=E+(v^(D|~P))+R[0]+4096336452&4294967295,E=D+(y<<6&4294967295|y>>>26),y=P+(D^(E|~v))+R[7]+1126891415&4294967295,P=E+(y<<10&4294967295|y>>>22),y=v+(E^(P|~D))+R[14]+2878612391&4294967295,v=P+(y<<15&4294967295|y>>>17),y=D+(P^(v|~E))+R[5]+4237533241&4294967295,D=v+(y<<21&4294967295|y>>>11),y=E+(v^(D|~P))+R[12]+1700485571&4294967295,E=D+(y<<6&4294967295|y>>>26),y=P+(D^(E|~v))+R[3]+2399980690&4294967295,P=E+(y<<10&4294967295|y>>>22),y=v+(E^(P|~D))+R[10]+4293915773&4294967295,v=P+(y<<15&4294967295|y>>>17),y=D+(P^(v|~E))+R[1]+2240044497&4294967295,D=v+(y<<21&4294967295|y>>>11),y=E+(v^(D|~P))+R[8]+1873313359&4294967295,E=D+(y<<6&4294967295|y>>>26),y=P+(D^(E|~v))+R[15]+4264355552&4294967295,P=E+(y<<10&4294967295|y>>>22),y=v+(E^(P|~D))+R[6]+2734768916&4294967295,v=P+(y<<15&4294967295|y>>>17),y=D+(P^(v|~E))+R[13]+1309151649&4294967295,D=v+(y<<21&4294967295|y>>>11),y=E+(v^(D|~P))+R[4]+4149444226&4294967295,E=D+(y<<6&4294967295|y>>>26),y=P+(D^(E|~v))+R[11]+3174756917&4294967295,P=E+(y<<10&4294967295|y>>>22),y=v+(E^(P|~D))+R[2]+718787259&4294967295,v=P+(y<<15&4294967295|y>>>17),y=D+(P^(v|~E))+R[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,A.g[2]=A.g[2]+v&4294967295,A.g[3]=A.g[3]+P&4294967295}n.prototype.v=function(A,E){E===void 0&&(E=A.length);const D=E-this.blockSize,R=this.C;let v=this.h,P=0;for(;P<E;){if(v==0)for(;P<=D;)r(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<E;)if(R[v++]=A.charCodeAt(P++),v==this.blockSize){r(this,R),v=0;break}}else for(;P<E;)if(R[v++]=A[P++],v==this.blockSize){r(this,R),v=0;break}}this.h=v,this.o+=E},n.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;E=this.o*8;for(var D=A.length-8;D<A.length;++D)A[D]=E&255,E/=256;for(this.v(A),A=Array(16),E=0,D=0;D<4;++D)for(let R=0;R<32;R+=8)A[E++]=this.g[D]>>>R&255;return A};function i(A,E){var D=a;return Object.prototype.hasOwnProperty.call(D,A)?D[A]:D[A]=E(A)}function o(A,E){this.h=E;const D=[];let R=!0;for(let v=A.length-1;v>=0;v--){const P=A[v]|0;R&&P==E||(D[v]=P,R=!1)}this.g=D}var a={};function l(A){return-128<=A&&A<128?i(A,function(E){return new o([E|0],E<0?-1:0)}):new o([A|0],A<0?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return d;if(A<0)return V(u(-A));const E=[];let D=1;for(let R=0;A>=D;R++)E[R]=A/D|0,D*=4294967296;return new o(E,0)}function h(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return V(h(A.substring(1),E));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const D=u(Math.pow(E,8));let R=d;for(let P=0;P<A.length;P+=8){var v=Math.min(8,A.length-P);const y=parseInt(A.substring(P,P+v),E);v<8?(v=u(Math.pow(E,v)),R=R.j(v).add(u(y))):(R=R.j(D),R=R.add(u(y)))}return R}var d=l(0),p=l(1),g=l(16777216);s=o.prototype,s.m=function(){if(N(this))return-V(this).m();let A=0,E=1;for(let D=0;D<this.g.length;D++){const R=this.i(D);A+=(R>=0?R:4294967296+R)*E,E*=4294967296}return A},s.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(I(this))return"0";if(N(this))return"-"+V(this).toString(A);const E=u(Math.pow(A,6));var D=this;let R="";for(;;){const v=We(D,E).g;D=z(D,v.j(E));let P=((D.g.length>0?D.g[0]:D.h)>>>0).toString(A);if(D=v,I(D))return P+R;for(;P.length<6;)P="0"+P;R=P+R}},s.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function I(A){if(A.h!=0)return!1;for(let E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function N(A){return A.h==-1}s.l=function(A){return A=z(this,A),N(A)?-1:I(A)?0:1};function V(A){const E=A.g.length,D=[];for(let R=0;R<E;R++)D[R]=~A.g[R];return new o(D,~A.h).add(p)}s.abs=function(){return N(this)?V(this):this},s.add=function(A){const E=Math.max(this.g.length,A.g.length),D=[];let R=0;for(let v=0;v<=E;v++){let P=R+(this.i(v)&65535)+(A.i(v)&65535),y=(P>>>16)+(this.i(v)>>>16)+(A.i(v)>>>16);R=y>>>16,P&=65535,y&=65535,D[v]=y<<16|P}return new o(D,D[D.length-1]&-2147483648?-1:0)};function z(A,E){return A.add(V(E))}s.j=function(A){if(I(this)||I(A))return d;if(N(this))return N(A)?V(this).j(V(A)):V(V(this).j(A));if(N(A))return V(this.j(V(A)));if(this.l(g)<0&&A.l(g)<0)return u(this.m()*A.m());const E=this.g.length+A.g.length,D=[];for(var R=0;R<2*E;R++)D[R]=0;for(R=0;R<this.g.length;R++)for(let v=0;v<A.g.length;v++){const P=this.i(R)>>>16,y=this.i(R)&65535,Nt=A.i(v)>>>16,er=A.i(v)&65535;D[2*R+2*v]+=y*er,oe(D,2*R+2*v),D[2*R+2*v+1]+=P*er,oe(D,2*R+2*v+1),D[2*R+2*v+1]+=y*Nt,oe(D,2*R+2*v+1),D[2*R+2*v+2]+=P*Nt,oe(D,2*R+2*v+2)}for(A=0;A<E;A++)D[A]=D[2*A+1]<<16|D[2*A];for(A=E;A<2*E;A++)D[A]=0;return new o(D,0)};function oe(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function De(A,E){this.g=A,this.h=E}function We(A,E){if(I(E))throw Error("division by zero");if(I(A))return new De(d,d);if(N(A))return E=We(V(A),E),new De(V(E.g),V(E.h));if(N(E))return E=We(A,V(E)),new De(V(E.g),E.h);if(A.g.length>30){if(N(A)||N(E))throw Error("slowDivide_ only works with positive integers.");for(var D=p,R=E;R.l(A)<=0;)D=st(D),R=st(R);var v=Ge(D,1),P=Ge(R,1);for(R=Ge(R,2),D=Ge(D,2);!I(R);){var y=P.add(R);y.l(A)<=0&&(v=v.add(D),P=y),R=Ge(R,1),D=Ge(D,1)}return E=z(A,v.j(E)),new De(v,E)}for(v=d;A.l(E)>=0;){for(D=Math.max(1,Math.floor(A.m()/E.m())),R=Math.ceil(Math.log(D)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),P=u(D),y=P.j(E);N(y)||y.l(A)>0;)D-=R,P=u(D),y=P.j(E);I(P)&&(P=p),v=v.add(P),A=z(A,y)}return new De(v,A)}s.B=function(A){return We(this,A).h},s.and=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)&A.i(R);return new o(D,this.h&A.h)},s.or=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)|A.i(R);return new o(D,this.h|A.h)},s.xor=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)^A.i(R);return new o(D,this.h^A.h)};function st(A){const E=A.g.length+1,D=[];for(let R=0;R<E;R++)D[R]=A.i(R)<<1|A.i(R-1)>>>31;return new o(D,A.h)}function Ge(A,E){const D=E>>5;E%=32;const R=A.g.length-D,v=[];for(let P=0;P<R;P++)v[P]=E>0?A.i(P+D)>>>E|A.i(P+D+1)<<32-E:A.i(P+D);return new o(v,A.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Jm=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,vs=o}).apply(typeof zp<"u"?zp:typeof self<"u"?self:typeof window<"u"?window:{});var Ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wm,wo,Km,Mc,Kh,zm,Qm,$m;(function(){var s,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ec=="object"&&Ec];for(var B=0;B<c.length;++B){var f=c[B];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function r(c,B){if(B)e:{var f=n;c=c.split(".");for(var C=0;C<c.length-1;C++){var S=c[C];if(!(S in f))break e;f=f[S]}c=c[c.length-1],C=f[c],B=B(C),B!=C&&B!=null&&e(f,c,{configurable:!0,writable:!0,value:B})}}r("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(c){return c||function(B){var f=[],C;for(C in B)Object.prototype.hasOwnProperty.call(B,C)&&f.push([C,B[C]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var B=typeof c;return B=="object"&&c!=null||B=="function"}function l(c,B,f){return c.call.apply(c.bind,arguments)}function u(c,B,f){return u=l,u.apply(null,arguments)}function h(c,B){var f=Array.prototype.slice.call(arguments,1);return function(){var C=f.slice();return C.push.apply(C,arguments),c.apply(this,C)}}function d(c,B){function f(){}f.prototype=B.prototype,c.Z=B.prototype,c.prototype=new f,c.prototype.constructor=c,c.Ob=function(C,S,b){for(var W=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)W[ce-2]=arguments[ce];return B.prototype[S].apply(C,W)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function g(c){const B=c.length;if(B>0){const f=Array(B);for(let C=0;C<B;C++)f[C]=c[C];return f}return[]}function I(c,B){for(let C=1;C<arguments.length;C++){const S=arguments[C];var f=typeof S;if(f=f!="object"?f:S?Array.isArray(S)?"array":f:"null",f=="array"||f=="object"&&typeof S.length=="number"){f=c.length||0;const b=S.length||0;c.length=f+b;for(let W=0;W<b;W++)c[f+W]=S[W]}else c.push(S)}}class N{constructor(B,f){this.i=B,this.j=f,this.h=0,this.g=null}get(){let B;return this.h>0?(this.h--,B=this.g,this.g=B.next,B.next=null):B=this.i(),B}}function V(c){o.setTimeout(()=>{throw c},0)}function z(){var c=A;let B=null;return c.g&&(B=c.g,c.g=c.g.next,c.g||(c.h=null),B.next=null),B}class oe{constructor(){this.h=this.g=null}add(B,f){const C=De.get();C.set(B,f),this.h?this.h.next=C:this.g=C,this.h=C}}var De=new N(()=>new We,c=>c.reset());class We{constructor(){this.next=this.g=this.h=null}set(B,f){this.h=B,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let st,Ge=!1,A=new oe,E=()=>{const c=Promise.resolve(void 0);st=()=>{c.then(D)}};function D(){for(var c;c=z();){try{c.h.call(c.g)}catch(f){V(f)}var B=De;B.j(c),B.h<100&&(B.h++,c.next=B.g,B.g=c)}Ge=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(c,B){this.type=c,this.g=this.target=B,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var P=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,B=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const f=()=>{};o.addEventListener("test",f,B),o.removeEventListener("test",f,B)}catch{}return c})();function y(c){return/^[\s\xa0]*$/.test(c)}function Nt(c,B){v.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,B)}d(Nt,v),Nt.prototype.init=function(c,B){const f=this.type=c.type,C=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=B,B=c.relatedTarget,B||(f=="mouseover"?B=c.fromElement:f=="mouseout"&&(B=c.toElement)),this.relatedTarget=B,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Nt.Z.h.call(this)},Nt.prototype.h=function(){Nt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var er="closure_listenable_"+(Math.random()*1e6|0),RD=0;function SD(c,B,f,C,S){this.listener=c,this.proxy=null,this.src=B,this.type=f,this.capture=!!C,this.ha=S,this.key=++RD,this.da=this.fa=!1}function ic(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function oc(c,B,f){for(const C in c)B.call(f,c[C],C,c)}function PD(c,B){for(const f in c)B.call(void 0,c[f],f,c)}function Ff(c){const B={};for(const f in c)B[f]=c[f];return B}const kf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xf(c,B){let f,C;for(let S=1;S<arguments.length;S++){C=arguments[S];for(f in C)c[f]=C[f];for(let b=0;b<kf.length;b++)f=kf[b],Object.prototype.hasOwnProperty.call(C,f)&&(c[f]=C[f])}}function ac(c){this.src=c,this.g={},this.h=0}ac.prototype.add=function(c,B,f,C,S){const b=c.toString();c=this.g[b],c||(c=this.g[b]=[],this.h++);const W=Mu(c,B,C,S);return W>-1?(B=c[W],f||(B.fa=!1)):(B=new SD(B,this.src,b,!!C,S),B.fa=f,c.push(B)),B};function xu(c,B){const f=B.type;if(f in c.g){var C=c.g[f],S=Array.prototype.indexOf.call(C,B,void 0),b;(b=S>=0)&&Array.prototype.splice.call(C,S,1),b&&(ic(B),c.g[f].length==0&&(delete c.g[f],c.h--))}}function Mu(c,B,f,C){for(let S=0;S<c.length;++S){const b=c[S];if(!b.da&&b.listener==B&&b.capture==!!f&&b.ha==C)return S}return-1}var Vu="closure_lm_"+(Math.random()*1e6|0),Gu={};function Mf(c,B,f,C,S){if(Array.isArray(B)){for(let b=0;b<B.length;b++)Mf(c,B[b],f,C,S);return null}return f=Uf(f),c&&c[er]?c.J(B,f,a(C)?!!C.capture:!1,S):bD(c,B,f,!1,C,S)}function bD(c,B,f,C,S,b){if(!B)throw Error("Invalid event type");const W=a(S)?!!S.capture:!!S;let ce=Hu(c);if(ce||(c[Vu]=ce=new ac(c)),f=ce.add(B,f,C,W,b),f.proxy)return f;if(C=ND(),f.proxy=C,C.src=c,C.listener=f,c.addEventListener)P||(S=W),S===void 0&&(S=!1),c.addEventListener(B.toString(),C,S);else if(c.attachEvent)c.attachEvent(Gf(B.toString()),C);else if(c.addListener&&c.removeListener)c.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return f}function ND(){function c(f){return B.call(c.src,c.listener,f)}const B=OD;return c}function Vf(c,B,f,C,S){if(Array.isArray(B))for(var b=0;b<B.length;b++)Vf(c,B[b],f,C,S);else C=a(C)?!!C.capture:!!C,f=Uf(f),c&&c[er]?(c=c.i,b=String(B).toString(),b in c.g&&(B=c.g[b],f=Mu(B,f,C,S),f>-1&&(ic(B[f]),Array.prototype.splice.call(B,f,1),B.length==0&&(delete c.g[b],c.h--)))):c&&(c=Hu(c))&&(B=c.g[B.toString()],c=-1,B&&(c=Mu(B,f,C,S)),(f=c>-1?B[c]:null)&&Uu(f))}function Uu(c){if(typeof c!="number"&&c&&!c.da){var B=c.src;if(B&&B[er])xu(B.i,c);else{var f=c.type,C=c.proxy;B.removeEventListener?B.removeEventListener(f,C,c.capture):B.detachEvent?B.detachEvent(Gf(f),C):B.addListener&&B.removeListener&&B.removeListener(C),(f=Hu(B))?(xu(f,c),f.h==0&&(f.src=null,B[Vu]=null)):ic(c)}}}function Gf(c){return c in Gu?Gu[c]:Gu[c]="on"+c}function OD(c,B){if(c.da)c=!0;else{B=new Nt(B,this);const f=c.listener,C=c.ha||c.src;c.fa&&Uu(c),c=f.call(C,B)}return c}function Hu(c){return c=c[Vu],c instanceof ac?c:null}var qu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Uf(c){return typeof c=="function"?c:(c[qu]||(c[qu]=function(B){return c.handleEvent(B)}),c[qu])}function ft(){R.call(this),this.i=new ac(this),this.M=this,this.G=null}d(ft,R),ft.prototype[er]=!0,ft.prototype.removeEventListener=function(c,B,f,C){Vf(this,c,B,f,C)};function Dt(c,B){var f,C=c.G;if(C)for(f=[];C;C=C.G)f.push(C);if(c=c.M,C=B.type||B,typeof B=="string")B=new v(B,c);else if(B instanceof v)B.target=B.target||c;else{var S=B;B=new v(C,c),xf(B,S)}S=!0;let b,W;if(f)for(W=f.length-1;W>=0;W--)b=B.g=f[W],S=cc(b,C,!0,B)&&S;if(b=B.g=c,S=cc(b,C,!0,B)&&S,S=cc(b,C,!1,B)&&S,f)for(W=0;W<f.length;W++)b=B.g=f[W],S=cc(b,C,!1,B)&&S}ft.prototype.N=function(){if(ft.Z.N.call(this),this.i){var c=this.i;for(const B in c.g){const f=c.g[B];for(let C=0;C<f.length;C++)ic(f[C]);delete c.g[B],c.h--}}this.G=null},ft.prototype.J=function(c,B,f,C){return this.i.add(String(c),B,!1,f,C)},ft.prototype.K=function(c,B,f,C){return this.i.add(String(c),B,!0,f,C)};function cc(c,B,f,C){if(B=c.i.g[String(B)],!B)return!0;B=B.concat();let S=!0;for(let b=0;b<B.length;++b){const W=B[b];if(W&&!W.da&&W.capture==f){const ce=W.listener,tt=W.ha||W.src;W.fa&&xu(c.i,W),S=ce.call(tt,C)!==!1&&S}}return S&&!C.defaultPrevented}function LD(c,B){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(B)>2147483647?-1:o.setTimeout(c,B||0)}function Hf(c){c.g=LD(()=>{c.g=null,c.i&&(c.i=!1,Hf(c))},c.l);const B=c.h;c.h=null,c.m.apply(null,B)}class FD extends R{constructor(B,f){super(),this.m=B,this.l=f,this.h=null,this.i=!1,this.g=null}j(B){this.h=arguments,this.g?this.i=!0:Hf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wi(c){R.call(this),this.h=c,this.g={}}d(Wi,R);var qf=[];function jf(c){oc(c.g,function(B,f){this.g.hasOwnProperty(f)&&Uu(B)},c),c.g={}}Wi.prototype.N=function(){Wi.Z.N.call(this),jf(this)},Wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ju=o.JSON.stringify,kD=o.JSON.parse,xD=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function Jf(){}function Wf(){}var Ki={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ju(){v.call(this,"d")}d(Ju,v);function Wu(){v.call(this,"c")}d(Wu,v);var tr={},Kf=null;function lc(){return Kf=Kf||new ft}tr.Ia="serverreachability";function zf(c){v.call(this,tr.Ia,c)}d(zf,v);function zi(c){const B=lc();Dt(B,new zf(B))}tr.STAT_EVENT="statevent";function Qf(c,B){v.call(this,tr.STAT_EVENT,c),this.stat=B}d(Qf,v);function wt(c){const B=lc();Dt(B,new Qf(B,c))}tr.Ja="timingevent";function $f(c,B){v.call(this,tr.Ja,c),this.size=B}d($f,v);function Qi(c,B){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},B)}function $i(){this.g=!0}$i.prototype.ua=function(){this.g=!1};function MD(c,B,f,C,S,b){c.info(function(){if(c.g)if(b){var W="",ce=b.split("&");for(let we=0;we<ce.length;we++){var tt=ce[we].split("=");if(tt.length>1){const rt=tt[0];tt=tt[1];const fn=rt.split("_");W=fn.length>=2&&fn[1]=="type"?W+(rt+"="+tt+"&"):W+(rt+"=redacted&")}}}else W=null;else W=b;return"XMLHTTP REQ ("+C+") [attempt "+S+"]: "+B+`
`+f+`
`+W})}function VD(c,B,f,C,S,b,W){c.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+S+"]: "+B+`
`+f+`
`+b+" "+W})}function Hr(c,B,f,C){c.info(function(){return"XMLHTTP TEXT ("+B+"): "+UD(c,f)+(C?" "+C:"")})}function GD(c,B){c.info(function(){return"TIMEOUT: "+B})}$i.prototype.info=function(){};function UD(c,B){if(!c.g)return B;if(!B)return null;try{const b=JSON.parse(B);if(b){for(c=0;c<b.length;c++)if(Array.isArray(b[c])){var f=b[c];if(!(f.length<2)){var C=f[1];if(Array.isArray(C)&&!(C.length<1)){var S=C[0];if(S!="noop"&&S!="stop"&&S!="close")for(let W=1;W<C.length;W++)C[W]=""}}}}return ju(b)}catch{return B}}var uc={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Yf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Xf;function Ku(){}d(Ku,Jf),Ku.prototype.g=function(){return new XMLHttpRequest},Xf=new Ku;function Yi(c){return encodeURIComponent(String(c))}function HD(c){var B=1;c=c.split(":");const f=[];for(;B>0&&c.length;)f.push(c.shift()),B--;return c.length&&f.push(c.join(":")),f}function us(c,B,f,C){this.j=c,this.i=B,this.l=f,this.S=C||1,this.V=new Wi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Zf}function Zf(){this.i=null,this.g="",this.h=!1}var ep={},zu={};function Qu(c,B,f){c.M=1,c.A=Bc(dn(B)),c.u=f,c.R=!0,tp(c,null)}function tp(c,B){c.F=Date.now(),hc(c),c.B=dn(c.A);var f=c.B,C=c.S;Array.isArray(C)||(C=[String(C)]),fp(f.i,"t",C),c.C=0,f=c.j.L,c.h=new Zf,c.g=Np(c.j,f?B:null,!c.u),c.P>0&&(c.O=new FD(u(c.Y,c,c.g),c.P)),B=c.V,f=c.g,C=c.ba;var S="readystatechange";Array.isArray(S)||(S&&(qf[0]=S.toString()),S=qf);for(let b=0;b<S.length;b++){const W=Mf(f,S[b],C||B.handleEvent,!1,B.h||B);if(!W)break;B.g[W.key]=W}B=c.J?Ff(c.J):{},c.u?(c.v||(c.v="POST"),B["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,B)):(c.v="GET",c.g.ea(c.B,c.v,null,B)),zi(),MD(c.i,c.v,c.B,c.l,c.S,c.u)}us.prototype.ba=function(c){c=c.target;const B=this.O;B&&ds(c)==3?B.j():this.Y(c)},us.prototype.Y=function(c){try{if(c==this.g)e:{const ce=ds(this.g),tt=this.g.ya(),we=this.g.ca();if(!(ce<3)&&(ce!=3||this.g&&(this.h.h||this.g.la()||yp(this.g)))){this.K||ce!=4||tt==7||(tt==8||we<=0?zi(3):zi(2)),$u(this);var B=this.g.ca();this.X=B;var f=qD(this);if(this.o=B==200,VD(this.i,this.v,this.B,this.l,this.S,ce,B),this.o){if(this.U&&!this.L){t:{if(this.g){var C,S=this.g;if((C=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(C)){var b=C;break t}}b=null}if(c=b)Hr(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Yu(this,c);else{this.o=!1,this.m=3,wt(12),nr(this),Xi(this);break e}}if(this.R){c=!0;let rt;for(;!this.K&&this.C<f.length;)if(rt=jD(this,f),rt==zu){ce==4&&(this.m=4,wt(14),c=!1),Hr(this.i,this.l,null,"[Incomplete Response]");break}else if(rt==ep){this.m=4,wt(15),Hr(this.i,this.l,f,"[Invalid Chunk]"),c=!1;break}else Hr(this.i,this.l,rt,null),Yu(this,rt);if(np(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ce!=4||f.length!=0||this.h.h||(this.m=1,wt(16),c=!1),this.o=this.o&&c,!c)Hr(this.i,this.l,f,"[Invalid Chunked Response]"),nr(this),Xi(this);else if(f.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),ih(W),W.P=!0,wt(11))}}else Hr(this.i,this.l,f,null),Yu(this,f);ce==4&&nr(this),this.o&&!this.K&&(ce==4?Rp(this.j,this):(this.o=!1,hc(this)))}else rw(this.g),B==400&&f.indexOf("Unknown SID")>0?(this.m=3,wt(12)):(this.m=0,wt(13)),nr(this),Xi(this)}}}catch{}finally{}};function qD(c){if(!np(c))return c.g.la();const B=yp(c.g);if(B==="")return"";let f="";const C=B.length,S=ds(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return nr(c),Xi(c),"";c.h.i=new o.TextDecoder}for(let b=0;b<C;b++)c.h.h=!0,f+=c.h.i.decode(B[b],{stream:!(S&&b==C-1)});return B.length=0,c.h.g+=f,c.C=0,c.h.g}function np(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function jD(c,B){var f=c.C,C=B.indexOf(`
`,f);return C==-1?zu:(f=Number(B.substring(f,C)),isNaN(f)?ep:(C+=1,C+f>B.length?zu:(B=B.slice(C,C+f),c.C=C+f,B)))}us.prototype.cancel=function(){this.K=!0,nr(this)};function hc(c){c.T=Date.now()+c.H,sp(c,c.H)}function sp(c,B){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Qi(u(c.aa,c),B)}function $u(c){c.D&&(o.clearTimeout(c.D),c.D=null)}us.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(GD(this.i,this.B),this.M!=2&&(zi(),wt(17)),nr(this),this.m=2,Xi(this)):sp(this,this.T-c)};function Xi(c){c.j.I==0||c.K||Rp(c.j,c)}function nr(c){$u(c);var B=c.O;B&&typeof B.dispose=="function"&&B.dispose(),c.O=null,jf(c.V),c.g&&(B=c.g,c.g=null,B.abort(),B.dispose())}function Yu(c,B){try{var f=c.j;if(f.I!=0&&(f.g==c||Xu(f.h,c))){if(!c.L&&Xu(f.h,c)&&f.I==3){try{var C=f.Ba.g.parse(B)}catch{C=null}if(Array.isArray(C)&&C.length==3){var S=C;if(S[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<c.F)gc(f),pc(f);else break e;rh(f),wt(18)}}else f.xa=S[1],0<f.xa-f.K&&S[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Qi(u(f.Va,f),6e3));op(f.h)<=1&&f.ta&&(f.ta=void 0)}else rr(f,11)}else if((c.L||f.g==c)&&gc(f),!y(B))for(S=f.Ba.g.parse(B),B=0;B<S.length;B++){let we=S[B];const rt=we[0];if(!(rt<=f.K))if(f.K=rt,we=we[1],f.I==2)if(we[0]=="c"){f.M=we[1],f.ba=we[2];const fn=we[3];fn!=null&&(f.ka=fn,f.j.info("VER="+f.ka));const ir=we[4];ir!=null&&(f.za=ir,f.j.info("SVER="+f.za));const fs=we[5];fs!=null&&typeof fs=="number"&&fs>0&&(C=1.5*fs,f.O=C,f.j.info("backChannelRequestTimeoutMs_="+C)),C=f;const ps=c.g;if(ps){const _c=ps.g?ps.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_c){var b=C.h;b.g||_c.indexOf("spdy")==-1&&_c.indexOf("quic")==-1&&_c.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Zu(b,b.h),b.h=null))}if(C.G){const oh=ps.g?ps.g.getResponseHeader("X-HTTP-Session-Id"):null;oh&&(C.wa=oh,Se(C.J,C.G,oh))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-c.F,f.j.info("Handshake RTT: "+f.T+"ms")),C=f;var W=c;if(C.na=bp(C,C.L?C.ba:null,C.W),W.L){ap(C.h,W);var ce=W,tt=C.O;tt&&(ce.H=tt),ce.D&&($u(ce),hc(ce)),C.g=W}else vp(C);f.i.length>0&&Cc(f)}else we[0]!="stop"&&we[0]!="close"||rr(f,7);else f.I==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?rr(f,7):sh(f):we[0]!="noop"&&f.l&&f.l.qa(we),f.A=0)}}zi(4)}catch{}}var JD=class{constructor(c,B){this.g=c,this.map=B}};function rp(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ip(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function op(c){return c.h?1:c.g?c.g.size:0}function Xu(c,B){return c.h?c.h==B:c.g?c.g.has(B):!1}function Zu(c,B){c.g?c.g.add(B):c.h=B}function ap(c,B){c.h&&c.h==B?c.h=null:c.g&&c.g.has(B)&&c.g.delete(B)}rp.prototype.cancel=function(){if(this.i=cp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function cp(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let B=c.i;for(const f of c.g.values())B=B.concat(f.G);return B}return g(c.i)}var lp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WD(c,B){if(c){c=c.split("&");for(let f=0;f<c.length;f++){const C=c[f].indexOf("=");let S,b=null;C>=0?(S=c[f].substring(0,C),b=c[f].substring(C+1)):S=c[f],B(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function hs(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let B;c instanceof hs?(this.l=c.l,Zi(this,c.j),this.o=c.o,this.g=c.g,eo(this,c.u),this.h=c.h,eh(this,pp(c.i)),this.m=c.m):c&&(B=String(c).match(lp))?(this.l=!1,Zi(this,B[1]||"",!0),this.o=to(B[2]||""),this.g=to(B[3]||"",!0),eo(this,B[4]),this.h=to(B[5]||"",!0),eh(this,B[6]||"",!0),this.m=to(B[7]||"")):(this.l=!1,this.i=new so(null,this.l))}hs.prototype.toString=function(){const c=[];var B=this.j;B&&c.push(no(B,up,!0),":");var f=this.g;return(f||B=="file")&&(c.push("//"),(B=this.o)&&c.push(no(B,up,!0),"@"),c.push(Yi(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&c.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&c.push("/"),c.push(no(f,f.charAt(0)=="/"?QD:zD,!0))),(f=this.i.toString())&&c.push("?",f),(f=this.m)&&c.push("#",no(f,YD)),c.join("")},hs.prototype.resolve=function(c){const B=dn(this);let f=!!c.j;f?Zi(B,c.j):f=!!c.o,f?B.o=c.o:f=!!c.g,f?B.g=c.g:f=c.u!=null;var C=c.h;if(f)eo(B,c.u);else if(f=!!c.h){if(C.charAt(0)!="/")if(this.g&&!this.h)C="/"+C;else{var S=B.h.lastIndexOf("/");S!=-1&&(C=B.h.slice(0,S+1)+C)}if(S=C,S==".."||S==".")C="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){C=S.lastIndexOf("/",0)==0,S=S.split("/");const b=[];for(let W=0;W<S.length;){const ce=S[W++];ce=="."?C&&W==S.length&&b.push(""):ce==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),C&&W==S.length&&b.push("")):(b.push(ce),C=!0)}C=b.join("/")}else C=S}return f?B.h=C:f=c.i.toString()!=="",f?eh(B,pp(c.i)):f=!!c.m,f&&(B.m=c.m),B};function dn(c){return new hs(c)}function Zi(c,B,f){c.j=f?to(B,!0):B,c.j&&(c.j=c.j.replace(/:$/,""))}function eo(c,B){if(B){if(B=Number(B),isNaN(B)||B<0)throw Error("Bad port number "+B);c.u=B}else c.u=null}function eh(c,B,f){B instanceof so?(c.i=B,XD(c.i,c.l)):(f||(B=no(B,$D)),c.i=new so(B,c.l))}function Se(c,B,f){c.i.set(B,f)}function Bc(c){return Se(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function to(c,B){return c?B?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function no(c,B,f){return typeof c=="string"?(c=encodeURI(c).replace(B,KD),f&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function KD(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var up=/[#\/\?@]/g,zD=/[#\?:]/g,QD=/[#\?]/g,$D=/[#\?@]/g,YD=/#/g;function so(c,B){this.h=this.g=null,this.i=c||null,this.j=!!B}function sr(c){c.g||(c.g=new Map,c.h=0,c.i&&WD(c.i,function(B,f){c.add(decodeURIComponent(B.replace(/\+/g," ")),f)}))}s=so.prototype,s.add=function(c,B){sr(this),this.i=null,c=qr(this,c);let f=this.g.get(c);return f||this.g.set(c,f=[]),f.push(B),this.h+=1,this};function hp(c,B){sr(c),B=qr(c,B),c.g.has(B)&&(c.i=null,c.h-=c.g.get(B).length,c.g.delete(B))}function Bp(c,B){return sr(c),B=qr(c,B),c.g.has(B)}s.forEach=function(c,B){sr(this),this.g.forEach(function(f,C){f.forEach(function(S){c.call(B,S,C,this)},this)},this)};function dp(c,B){sr(c);let f=[];if(typeof B=="string")Bp(c,B)&&(f=f.concat(c.g.get(qr(c,B))));else for(c=Array.from(c.g.values()),B=0;B<c.length;B++)f=f.concat(c[B]);return f}s.set=function(c,B){return sr(this),this.i=null,c=qr(this,c),Bp(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[B]),this.h+=1,this},s.get=function(c,B){return c?(c=dp(this,c),c.length>0?String(c[0]):B):B};function fp(c,B,f){hp(c,B),f.length>0&&(c.i=null,c.g.set(qr(c,B),g(f)),c.h+=f.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],B=Array.from(this.g.keys());for(let C=0;C<B.length;C++){var f=B[C];const S=Yi(f);f=dp(this,f);for(let b=0;b<f.length;b++){let W=S;f[b]!==""&&(W+="="+Yi(f[b])),c.push(W)}}return this.i=c.join("&")};function pp(c){const B=new so;return B.i=c.i,c.g&&(B.g=new Map(c.g),B.h=c.h),B}function qr(c,B){return B=String(B),c.j&&(B=B.toLowerCase()),B}function XD(c,B){B&&!c.j&&(sr(c),c.i=null,c.g.forEach(function(f,C){const S=C.toLowerCase();C!=S&&(hp(this,C),fp(this,S,f))},c)),c.j=B}function ZD(c,B){const f=new $i;if(o.Image){const C=new Image;C.onload=h(Bs,f,"TestLoadImage: loaded",!0,B,C),C.onerror=h(Bs,f,"TestLoadImage: error",!1,B,C),C.onabort=h(Bs,f,"TestLoadImage: abort",!1,B,C),C.ontimeout=h(Bs,f,"TestLoadImage: timeout",!1,B,C),o.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=c}else B(!1)}function ew(c,B){const f=new $i,C=new AbortController,S=setTimeout(()=>{C.abort(),Bs(f,"TestPingServer: timeout",!1,B)},1e4);fetch(c,{signal:C.signal}).then(b=>{clearTimeout(S),b.ok?Bs(f,"TestPingServer: ok",!0,B):Bs(f,"TestPingServer: server error",!1,B)}).catch(()=>{clearTimeout(S),Bs(f,"TestPingServer: error",!1,B)})}function Bs(c,B,f,C,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),C(f)}catch{}}function tw(){this.g=new xD}function th(c){this.i=c.Sb||null,this.h=c.ab||!1}d(th,Jf),th.prototype.g=function(){return new dc(this.i,this.h)};function dc(c,B){ft.call(this),this.H=c,this.o=B,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(dc,ft),s=dc.prototype,s.open=function(c,B){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=B,this.readyState=1,io(this)},s.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const B={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(B.body=c),(this.H||o).fetch(new Request(this.D,B)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ro(this)),this.readyState=0},s.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Cp(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Cp(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}s.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var B=c.value?c.value:new Uint8Array(0);(B=this.B.decode(B,{stream:!c.done}))&&(this.response=this.responseText+=B)}c.done?ro(this):io(this),this.readyState==3&&Cp(this)}},s.Oa=function(c){this.g&&(this.response=this.responseText=c,ro(this))},s.Na=function(c){this.g&&(this.response=c,ro(this))},s.ga=function(){this.g&&ro(this)};function ro(c){c.readyState=4,c.l=null,c.j=null,c.B=null,io(c)}s.setRequestHeader=function(c,B){this.A.append(c,B)},s.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],B=this.h.entries();for(var f=B.next();!f.done;)f=f.value,c.push(f[0]+": "+f[1]),f=B.next();return c.join(`\r
`)};function io(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(dc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function gp(c){let B="";return oc(c,function(f,C){B+=C,B+=":",B+=f,B+=`\r
`}),B}function nh(c,B,f){e:{for(C in f){var C=!1;break e}C=!0}C||(f=gp(f),typeof c=="string"?f!=null&&Yi(f):Se(c,B,f))}function Ue(c){ft.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Ue,ft);var nw=/^https?$/i,sw=["POST","PUT"];s=Ue.prototype,s.Fa=function(c){this.H=c},s.ea=function(c,B,f,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);B=B?B.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Xf.g(),this.g.onreadystatechange=p(u(this.Ca,this));try{this.B=!0,this.g.open(B,String(c),!0),this.B=!1}catch(b){mp(this,b);return}if(c=f||"",f=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var S in C)f.set(S,C[S]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const b of C.keys())f.set(b,C.get(b));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(f.keys()).find(b=>b.toLowerCase()=="content-type"),S=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(sw,B,void 0)>=0)||C||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,W]of f)this.g.setRequestHeader(b,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(b){mp(this,b)}};function mp(c,B){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=B,c.o=5,_p(c),fc(c)}function _p(c){c.A||(c.A=!0,Dt(c,"complete"),Dt(c,"error"))}s.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Dt(this,"complete"),Dt(this,"abort"),fc(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fc(this,!0)),Ue.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Ep(this):this.Xa())},s.Xa=function(){Ep(this)};function Ep(c){if(c.h&&typeof i<"u"){if(c.v&&ds(c)==4)setTimeout(c.Ca.bind(c),0);else if(Dt(c,"readystatechange"),ds(c)==4){c.h=!1;try{const b=c.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var B=!0;break e;default:B=!1}var f;if(!(f=B)){var C;if(C=b===0){let W=String(c.D).match(lp)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),C=!nw.test(W?W.toLowerCase():"")}f=C}if(f)Dt(c,"complete"),Dt(c,"success");else{c.o=6;try{var S=ds(c)>2?c.g.statusText:""}catch{S=""}c.l=S+" ["+c.ca()+"]",_p(c)}}finally{fc(c)}}}}function fc(c,B){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const f=c.g;c.g=null,B||Dt(c,"ready");try{f.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function ds(c){return c.g?c.g.readyState:0}s.ca=function(){try{return ds(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(c){if(this.g){var B=this.g.responseText;return c&&B.indexOf(c)==0&&(B=B.substring(c.length)),kD(B)}};function yp(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function rw(c){const B={};c=(c.g&&ds(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<c.length;C++){if(y(c[C]))continue;var f=HD(c[C]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const b=B[S]||[];B[S]=b,b.push(f)}PD(B,function(C){return C.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function oo(c,B,f){return f&&f.internalChannelParams&&f.internalChannelParams[c]||B}function Ip(c){this.za=0,this.i=[],this.j=new $i,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=oo("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=oo("baseRetryDelayMs",5e3,c),this.Za=oo("retryDelaySeedMs",1e4,c),this.Ta=oo("forwardChannelMaxRetries",2,c),this.va=oo("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new rp(c&&c.concurrentRequestLimit),this.Ba=new tw,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Ip.prototype,s.ka=8,s.I=1,s.connect=function(c,B,f,C){wt(0),this.W=c,this.H=B||{},f&&C!==void 0&&(this.H.OSID=f,this.H.OAID=C),this.F=this.X,this.J=bp(this,null,this.W),Cc(this)};function sh(c){if(Dp(c),c.I==3){var B=c.V++,f=dn(c.J);if(Se(f,"SID",c.M),Se(f,"RID",B),Se(f,"TYPE","terminate"),ao(c,f),B=new us(c,c.j,B),B.M=2,B.A=Bc(dn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(B.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=B.A,f=!0),f||(B.g=Np(B.j,null),B.g.ea(B.A)),B.F=Date.now(),hc(B)}Pp(c)}function pc(c){c.g&&(ih(c),c.g.cancel(),c.g=null)}function Dp(c){pc(c),c.v&&(o.clearTimeout(c.v),c.v=null),gc(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function Cc(c){if(!ip(c.h)&&!c.m){c.m=!0;var B=c.Ea;st||E(),Ge||(st(),Ge=!0),A.add(B,c),c.D=0}}function iw(c,B){return op(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=B.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Qi(u(c.Ea,c,B),Sp(c,c.D)),c.D++,!0)}s.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const S=new us(this,this.j,c);let b=this.o;if(this.U&&(b?(b=Ff(b),xf(b,this.U)):b=this.U),this.u!==null||this.R||(S.J=b,b=null),this.S)e:{for(var B=0,f=0;f<this.i.length;f++){t:{var C=this.i[f];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(B+=C,B>4096){B=f;break e}if(B===4096||f===this.i.length-1){B=f+1;break e}}B=1e3}else B=1e3;B=Tp(this,S,B),f=dn(this.J),Se(f,"RID",c),Se(f,"CVER",22),this.G&&Se(f,"X-HTTP-Session-Id",this.G),ao(this,f),b&&(this.R?B="headers="+Yi(gp(b))+"&"+B:this.u&&nh(f,this.u,b)),Zu(this.h,S),this.Ra&&Se(f,"TYPE","init"),this.S?(Se(f,"$req",B),Se(f,"SID","null"),S.U=!0,Qu(S,f,null)):Qu(S,f,B),this.I=2}}else this.I==3&&(c?wp(this,c):this.i.length==0||ip(this.h)||wp(this))};function wp(c,B){var f;B?f=B.l:f=c.V++;const C=dn(c.J);Se(C,"SID",c.M),Se(C,"RID",f),Se(C,"AID",c.K),ao(c,C),c.u&&c.o&&nh(C,c.u,c.o),f=new us(c,c.j,f,c.D+1),c.u===null&&(f.J=c.o),B&&(c.i=B.G.concat(c.i)),B=Tp(c,f,1e3),f.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Zu(c.h,f),Qu(f,C,B)}function ao(c,B){c.H&&oc(c.H,function(f,C){Se(B,C,f)}),c.l&&oc({},function(f,C){Se(B,C,f)})}function Tp(c,B,f){f=Math.min(c.i.length,f);const C=c.l?u(c.l.Ka,c.l,c):null;e:{var S=c.i;let ce=-1;for(;;){const tt=["count="+f];ce==-1?f>0?(ce=S[0].g,tt.push("ofs="+ce)):ce=0:tt.push("ofs="+ce);let we=!0;for(let rt=0;rt<f;rt++){var b=S[rt].g;const fn=S[rt].map;if(b-=ce,b<0)ce=Math.max(0,S[rt].g-100),we=!1;else try{b="req"+b+"_"||"";try{var W=fn instanceof Map?fn:Object.entries(fn);for(const[ir,fs]of W){let ps=fs;a(fs)&&(ps=ju(fs)),tt.push(b+ir+"="+encodeURIComponent(ps))}}catch(ir){throw tt.push(b+"type="+encodeURIComponent("_badmap")),ir}}catch{C&&C(fn)}}if(we){W=tt.join("&");break e}}W=void 0}return c=c.i.splice(0,f),B.G=c,W}function vp(c){if(!c.g&&!c.v){c.Y=1;var B=c.Da;st||E(),Ge||(st(),Ge=!0),A.add(B,c),c.A=0}}function rh(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Qi(u(c.Da,c),Sp(c,c.A)),c.A++,!0)}s.Da=function(){if(this.v=null,Ap(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Qi(u(this.Wa,this),c)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,wt(10),pc(this),Ap(this))};function ih(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function Ap(c){c.g=new us(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var B=dn(c.na);Se(B,"RID","rpc"),Se(B,"SID",c.M),Se(B,"AID",c.K),Se(B,"CI",c.F?"0":"1"),!c.F&&c.ia&&Se(B,"TO",c.ia),Se(B,"TYPE","xmlhttp"),ao(c,B),c.u&&c.o&&nh(B,c.u,c.o),c.O&&(c.g.H=c.O);var f=c.g;c=c.ba,f.M=1,f.A=Bc(dn(B)),f.u=null,f.R=!0,tp(f,c)}s.Va=function(){this.C!=null&&(this.C=null,pc(this),rh(this),wt(19))};function gc(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Rp(c,B){var f=null;if(c.g==B){gc(c),ih(c),c.g=null;var C=2}else if(Xu(c.h,B))f=B.G,ap(c.h,B),C=1;else return;if(c.I!=0){if(B.o)if(C==1){f=B.u?B.u.length:0,B=Date.now()-B.F;var S=c.D;C=lc(),Dt(C,new $f(C,f)),Cc(c)}else vp(c);else if(S=B.m,S==3||S==0&&B.X>0||!(C==1&&iw(c,B)||C==2&&rh(c)))switch(f&&f.length>0&&(B=c.h,B.i=B.i.concat(f)),S){case 1:rr(c,5);break;case 4:rr(c,10);break;case 3:rr(c,6);break;default:rr(c,2)}}}function Sp(c,B){let f=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(f*=2),f*B}function rr(c,B){if(c.j.info("Error code "+B),B==2){var f=u(c.bb,c),C=c.Ua;const S=!C;C=new hs(C||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Zi(C,"https"),Bc(C),S?ZD(C.toString(),f):ew(C.toString(),f)}else wt(2);c.I=0,c.l&&c.l.pa(B),Pp(c),Dp(c)}s.bb=function(c){c?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function Pp(c){if(c.I=0,c.ja=[],c.l){const B=cp(c.h);(B.length!=0||c.i.length!=0)&&(I(c.ja,B),I(c.ja,c.i),c.h.i.length=0,g(c.i),c.i.length=0),c.l.oa()}}function bp(c,B,f){var C=f instanceof hs?dn(f):new hs(f);if(C.g!="")B&&(C.g=B+"."+C.g),eo(C,C.u);else{var S=o.location;C=S.protocol,B=B?B+"."+S.hostname:S.hostname,S=+S.port;const b=new hs(null);C&&Zi(b,C),B&&(b.g=B),S&&eo(b,S),f&&(b.h=f),C=b}return f=c.G,B=c.wa,f&&B&&Se(C,f,B),Se(C,"VER",c.ka),ao(c,C),C}function Np(c,B,f){if(B&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return B=c.Aa&&!c.ma?new Ue(new th({ab:f})):new Ue(c.ma),B.Fa(c.L),B}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Op(){}s=Op.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function mc(){}mc.prototype.g=function(c,B){return new Jt(c,B)};function Jt(c,B){ft.call(this),this.g=new Ip(B),this.l=c,this.h=B&&B.messageUrlParams||null,c=B&&B.messageHeaders||null,B&&B.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=B&&B.initMessageHeaders||null,B&&B.messageContentType&&(c?c["X-WebChannel-Content-Type"]=B.messageContentType:c={"X-WebChannel-Content-Type":B.messageContentType}),B&&B.sa&&(c?c["X-WebChannel-Client-Profile"]=B.sa:c={"X-WebChannel-Client-Profile":B.sa}),this.g.U=c,(c=B&&B.Qb)&&!y(c)&&(this.g.u=c),this.A=B&&B.supportsCrossDomainXhr||!1,this.v=B&&B.sendRawJson||!1,(B=B&&B.httpSessionIdParam)&&!y(B)&&(this.g.G=B,c=this.h,c!==null&&B in c&&(c=this.h,B in c&&delete c[B])),this.j=new jr(this)}d(Jt,ft),Jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){sh(this.g)},Jt.prototype.o=function(c){var B=this.g;if(typeof c=="string"){var f={};f.__data__=c,c=f}else this.v&&(f={},f.__data__=ju(c),c=f);B.i.push(new JD(B.Ya++,c)),B.I==3&&Cc(B)},Jt.prototype.N=function(){this.g.l=null,delete this.j,sh(this.g),delete this.g,Jt.Z.N.call(this)};function Lp(c){Ju.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var B=c.__sm__;if(B){e:{for(const f in B){c=f;break e}c=void 0}(this.i=c)&&(c=this.i,B=B!==null&&c in B?B[c]:void 0),this.data=B}else this.data=c}d(Lp,Ju);function Fp(){Wu.call(this),this.status=1}d(Fp,Wu);function jr(c){this.g=c}d(jr,Op),jr.prototype.ra=function(){Dt(this.g,"a")},jr.prototype.qa=function(c){Dt(this.g,new Lp(c))},jr.prototype.pa=function(c){Dt(this.g,new Fp)},jr.prototype.oa=function(){Dt(this.g,"b")},mc.prototype.createWebChannel=mc.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,$m=function(){return new mc},Qm=function(){return lc()},zm=tr,Kh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},uc.NO_ERROR=0,uc.TIMEOUT=8,uc.HTTP_ERROR=6,Mc=uc,Yf.COMPLETE="complete",Km=Yf,Wf.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",ft.prototype.listen=ft.prototype.J,wo=Wf,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,Wm=Ue}).apply(typeof Ec<"u"?Ec:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var Te,M=(Te=class{},G(Te,"FOLD_CASE",1),G(Te,"LITERAL",2),G(Te,"CLASS_NL",4),G(Te,"DOT_NL",8),G(Te,"ONE_LINE",16),G(Te,"NON_GREEDY",32),G(Te,"PERL_X",64),G(Te,"UNICODE_GROUPS",128),G(Te,"WAS_DOLLAR",256),G(Te,"LOOKBEHIND",512),G(Te,"MATCH_NL",Te.CLASS_NL|Te.DOT_NL),G(Te,"PERL",Te.CLASS_NL|Te.ONE_LINE|Te.PERL_X|Te.UNICODE_GROUPS),G(Te,"POSIX",0),G(Te,"UNANCHORED",0),G(Te,"ANCHOR_START",1),G(Te,"ANCHOR_BOTH",2),Te);const Jr={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Xo=128,zh=new Int32Array(Xo),Qh=new Int32Array(Xo),yc=65535;for(let s=0;s<Xo;s++)s>=97&&s<=122?zh[s]=s-32:zh[s]=s,s>=65&&s<=90?Qh[s]=s+32:Qh[s]=s;var Uh,O=(Uh=class{static toUpperCase(s){if(s<Xo)return zh[s];const e=String.fromCodePoint(s).toUpperCase(),t=e.codePointAt(0)>yc?2:1;if(e.length>t)return s;const n=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),r=n.codePointAt(0)>yc?2:1;return n.length>r||n.codePointAt(0)!==s?s:e.codePointAt(0)}static toLowerCase(s){if(s<Xo)return Qh[s];const e=String.fromCodePoint(s).toLowerCase(),t=e.codePointAt(0)>yc?2:1;if(e.length>t)return s;const n=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),r=n.codePointAt(0)>yc?2:1;return n.length>r||n.codePointAt(0)!==s?s:e.codePointAt(0)}},G(Uh,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]])),Uh),m=class{constructor(s,e=!1){this.data=s,this.isStride1=e,this.SIZE=e?2:3}getLo(s){return this.data[s*this.SIZE]}getHi(s){return this.data[s*this.SIZE+1]}getStride(s){return this.isStride1?1:this.data[s*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const Ym=new Uint8Array(256);for(let s=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";s<64;s++)Ym[e.charCodeAt(s)]=s;const Xm=s=>{const e=[];let t=0,n=0;for(let r=0;r<s.length;r++){let i=Ym[s.charCodeAt(r)];t|=(i&31)<<n,(i&32)===0?(e.push(t),t=0,n=0):n+=5}return e},_=(s,e)=>{const t=Xm(s),n=e?t.length/2:t.length/3,r=new Uint32Array(n*3);let i=0,o=0;for(let a=0;a<n;a++)i+=t[o++],r[a*3]=i,i+=t[o++],r[a*3+1]=i,r[a*3+2]=e?1:t[o++];return r},$T=s=>{const e=Xm(s),t=new Map;let n=0;for(let r=0;r<e.length;r+=2){n+=e[r];const i=e[r+1],o=i>>>1^-(i&1);t.set(n,n+o)}return t};var Ic=class{constructor(s){this.initializer=s,this.cache=new Map}has(s){return s in this.initializer}get(s){if(this.cache.has(s))return this.cache.get(s);const e=this.initializer[s],t=e?e():null;return this.cache.set(s,t),t}},_s,Lt=(_s=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=$T("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new m(_("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static get Upper(){return this.CATEGORIES.get("Lu")}},G(_s,"_CASE_ORBIT",null),G(_s,"_Print",null),G(_s,"CATEGORIES",new Ic({C:()=>new m(_("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new m(_("AfgDgB",!0)),Cf:()=>new m(_("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new m(_("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new m(_("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new m(_("gg2B--B",!0)),L:()=>new m(_("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new m(_("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new m(_("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new m(_("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new m(_("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new m(_("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new m(_("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new m(_("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new m(_("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new m(_("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new m(_("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new m(_("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new m(_("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new m(_("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new m(_("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new m(_("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new m(_("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new m(_("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new m(_("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new m(_("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new m(_("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new m(_("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new m(_("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new m(_("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new m(_("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new m(_("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new m(_("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new m(_("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new m(_("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new m(_("ohIA",!0)),Zp:()=>new m(_("phIA",!0)),Zs:()=>new m(_("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new m(_("wBJIFbF",!0)),Alphabetic:()=>new m(_("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new m(_("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new m(_("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new m(_("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new m(_("7-8DE",!0)),Emoji_Modifier_Base:()=>new m(_("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new m(_("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new m(_("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new m(_("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new m(_("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new m(_("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new m(_("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new m(_("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new m(_("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new m(_("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),G(_s,"SCRIPTS",new Ic({Adlam:()=>new m(_("go6DrCFJFB",!0)),Ahom:()=>new m(_("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new m(_("ggxCmS",!0)),Arabic:()=>new m(_("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new m(_("xpBlBDxBDCks9BE",!0)),Avestan:()=>new m(_("g4iC1BEG",!0)),Balinese:()=>new m(_("g4GsCCxB",!0)),Bamum:()=>new m(_("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new m(_("w26CdDF",!0)),Batak:()=>new m(_("g+GzBJD",!0)),Bengali:()=>new m(_("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new m(_("g17CYDY",!0)),Bhaiksuki:()=>new m(_("ggnCICsBCNLc",!0)),Bopomofo:()=>new m(_("qXB6wLqBxDf",!0)),Brahmi:()=>new m(_("ggkCtCFjBKA",!0)),Braille:()=>new m(_("ggK-H",!0)),Buginese:()=>new m(_("gwGbDB",!0)),Buhid:()=>new m(_("g6FT",!0)),Canadian_Aboriginal:()=>new m(_("ggF-TxRlC7tgCP",!0)),Carian:()=>new m(_("g1gCwB",!0)),Caucasian_Albanian:()=>new m(_("wphCzBMA",!0)),Chakma:()=>new m(_("gokC0BCR",!0)),Cham:()=>new m(_("gwqB2BKNDJDD",!0)),Cherokee:()=>new m(_("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new m(_("w9jCb",!0)),Common:()=>new m(_("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new m(_("ifNxkKzDGG",!0)),Cuneiform:()=>new m(_("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new m(_("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new m(_("w8rCiD",!0)),Cyrillic:()=>new m(_("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new m(_("gghCvC",!0)),Devanagari:()=>new m(_("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new m(_("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new m(_("ggmC7B",!0)),Duployan:()=>new m(_("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new m(_("ggsC1iBL68D",!0)),Elbasan:()=>new m(_("gohCnB",!0)),Elymaic:()=>new m(_("g-jCW",!0)),Ethiopic:()=>new m(_("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new m(_("gqjClBEcJB",!0)),Georgian:()=>new m(_("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new m(_("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new m(_("w5gCa",!0)),Grantha:()=>new m(_("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new m(_("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new m(_("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new m(_("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new m(_("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new m(_("go4C5B",!0)),Han:()=>new m(_("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new m(_("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new m(_("gojCnBJJ",!0)),Hanunoo:()=>new m(_("g5FU",!0)),Hatran:()=>new m(_("gniCSCBGE",!0)),Hebrew:()=>new m(_("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new m(_("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new m(_("giiCVCI",!0)),Inherited:()=>new m(_("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new m(_("g7iCSGH",!0)),Inscriptional_Parthian:()=>new m(_("g6iCVDH",!0)),Javanese:()=>new m(_("gsqBtCDJFB",!0)),Kaithi:()=>new m(_("gkkCiCLA",!0)),Kannada:()=>new m(_("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new m(_("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new m(_("g4nCQCoBEc",!0)),Kayah_Li:()=>new m(_("goqBtBCA",!0)),Kharoshthi:()=>new m(_("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new m(_("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new m(_("g8F9CDJHJnPf",!0)),Khojki:()=>new m(_("gwkCRCuB",!0)),Khudawadi:()=>new m(_("w1kC6BGJ",!0)),Kirat_Rai:()=>new m(_("gq7C5B",!0)),Lao:()=>new m(_("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new m(_("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new m(_("ggH3BEOEC",!0)),Limbu:()=>new m(_("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new m(_("gwhC2JKVLH",!0)),Linear_B:()=>new m(_("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new m(_("wmpBvBx1eA",!0)),Lycian:()=>new m(_("g0gCc",!0)),Lydian:()=>new m(_("gpiCZGA",!0)),Mahajani:()=>new m(_("wqkCmB",!0)),Makasar:()=>new m(_("g3nCY",!0)),Malayalam:()=>new m(_("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new m(_("giCbDA",!0)),Manichaean:()=>new m(_("g2iCmBFL",!0)),Marchen:()=>new m(_("wjnCfDVCN",!0)),Masaram_Gondi:()=>new m(_("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new m(_("gy7C6C",!0)),Meetei_Mayek:()=>new m(_("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new m(_("gg6DkGDP",!0)),Meroitic_Cursive:()=>new m(_("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new m(_("gsiCf",!0)),Miao:()=>new m(_("g47CqCF4BIQ",!0)),Modi:()=>new m(_("gwlCkCMJ",!0)),Mongolian:()=>new m(_("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new m(_("gy6CeCJFB",!0)),Multani:()=>new m(_("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new m(_("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new m(_("gkiCeJI",!0)),Nag_Mundari:()=>new m(_("wm5DpB",!0)),Nandinagari:()=>new m(_("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new m(_("gsGrBFZHKEB",!0)),Newa:()=>new m(_("gglC7CCE",!0)),Nko:()=>new m(_("g+B6BDC",!0)),Nushu:()=>new m(_("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new m(_("go4DsBENDJFB",!0)),Ogham:()=>new m(_("g0Fc",!0)),Ol_Chiki:()=>new m(_("wiHvB",!0)),Ol_Onal:()=>new m(_("wu5DqBFA",!0)),Old_Hungarian:()=>new m(_("gkjCyBOyBIF",!0)),Old_Italic:()=>new m(_("g4gCjBKC",!0)),Old_North_Arabian:()=>new m(_("g0iCf",!0)),Old_Permic:()=>new m(_("w6gCqB",!0)),Old_Persian:()=>new m(_("g9gCjBFN",!0)),Old_Sogdian:()=>new m(_("g4jCnB",!0)),Old_South_Arabian:()=>new m(_("gziCf",!0)),Old_Turkic:()=>new m(_("ggjCoC",!0)),Old_Uyghur:()=>new m(_("w7jCZ",!0)),Oriya:()=>new m(_("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new m(_("wlhCjBFjB",!0)),Osmanya:()=>new m(_("gkhCdDJ",!0)),Pahawh_Hmong:()=>new m(_("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new m(_("gjiCf",!0)),Pau_Cin_Hau:()=>new m(_("g2mC4B",!0)),Phags_Pa:()=>new m(_("giqB3B",!0)),Phoenician:()=>new m(_("goiCbEA",!0)),Psalter_Pahlavi:()=>new m(_("g8iCRIDNG",!0)),Rejang:()=>new m(_("wpqBjBMA",!0)),Runic:()=>new m(_("g1FqCEK",!0)),Samaritan:()=>new m(_("ggCtBDO",!0)),Saurashtra:()=>new m(_("gkqBlCJL",!0)),Sharada:()=>new m(_("gskC-ChsCH",!0)),Shavian:()=>new m(_("wihCvB",!0)),Siddham:()=>new m(_("gslC1BDlB",!0)),Sidetic:()=>new m(_("gqiCZ",!0)),SignWriting:()=>new m(_("gg2DrUQECO",!0)),Sinhala:()=>new m(_("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new m(_("w5jCpB",!0)),Sora_Sompeng:()=>new m(_("wmkCYIJ",!0)),Soyombo:()=>new m(_("wymCyC",!0)),Sundanese:()=>new m(_("g8G-BhIH",!0)),Sunuwar:()=>new m(_("g+mChBPJ",!0)),Syloti_Nagri:()=>new m(_("ggqBsB",!0)),Syriac:()=>new m(_("g4BNC7BDCxIK",!0)),Tagalog:()=>new m(_("g4FVKA",!0)),Tagbanwa:()=>new m(_("g7FMCCCB",!0)),Tai_Le:()=>new m(_("wqGdDE",!0)),Tai_Tham:()=>new m(_("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new m(_("g0qBiCZE",!0)),Tai_Yo:()=>new m(_("g25DeCVJB",!0)),Takri:()=>new m(_("g0lC5BHJ",!0)),Tamil:()=>new m(_("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new m(_("wz6CuCCJ",!0)),Tangut:()=>new m(_("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new m(_("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new m(_("g8BxB",!0)),Thai:()=>new m(_("hwD5BGb",!0)),Tibetan:()=>new m(_("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new m(_("wpL3BIBPA",!0)),Tirhuta:()=>new m(_("gklCnCJJ",!0)),Todhri:()=>new m(_("guhCzB",!0)),Tolong_Siki:()=>new m(_("wtnCrBFJ",!0)),Toto:()=>new m(_("w04De",!0)),Tulu_Tigalari:()=>new m(_("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new m(_("g8gCdCA",!0)),Unknown:()=>new m(_("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new m(_("gopBrJ",!0)),Vithkuqi:()=>new m(_("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new m(_("g24D5BGA",!0)),Warang_Citi:()=>new m(_("glmCyCNA",!0)),Yezidi:()=>new m(_("g0jCpBCCDB",!0)),Yi:()=>new m(_("ggoBskBE2B",!0)),Zanabazar_Square:()=>new m(_("gwmCnC",!0))})),G(_s,"FOLD_CATEGORIES",new Ic({L:()=>new m(_("laA",!0)),LC:()=>new m(_("laA",!0)),Ll:()=>new m(_("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new m(_("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new m(_("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new m(_("5cgBgBlgHAB",!1)),Mn:()=>new m(_("5cgBgBlgHAB",!1)),Emoji:()=>new m(_("8mJA",!0)),Extended_Pictographic:()=>new m(_("8mJA",!0)),Lowercase:()=>new m(_("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new m(_("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new m(_("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),G(_s,"FOLD_SCRIPT",new Ic({Common:()=>new m(_("8cgBgB",!1)),Greek:()=>new m(_("1FwUwU",!1)),Inherited:()=>new m(_("5cgBgBlgHAB",!1))})),_s),ve,Q=(ve=class{static is32(e,t){let n=0,r=e.length;for(;n<r;){const i=n+Math.floor((r-n)/2),o=e.getLo(i),a=e.getHi(i);if(o<=t&&t<=a){const l=e.getStride(i);return(t-o)%l===0}t<o?r=i:n=i+1}return!1}static is(e,t){if(t<=ve.MAX_LATIN1){for(let n=0;n<e.length;n++){if(t>e.getHi(n))continue;const r=e.getLo(n);if(t<r)return!1;const i=e.getStride(n);return(t-r)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&ve.is32(e,t)}static isUpper(e){if(e<=ve.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return ve.is(Lt.Upper,e)}static isPrint(e){return e<=ve.MAX_LATIN1?e>=32&&e<ve.MAX_ASCII||e>=161&&e!==173:ve.is(Lt.Print,e)}static simpleFold(e){if(Lt.CASE_ORBIT.has(e))return Lt.CASE_ORBIT.get(e);const t=O.toLowerCase(e);return t!==e?t:O.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=ve.MAX_ASCII&&t<=ve.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let n=ve.simpleFold(e);n!==e;n=ve.simpleFold(n))if(n===t)return!0;return!1}},G(ve,"MAX_RUNE",1114111),G(ve,"MAX_ASCII",127),G(ve,"MAX_LATIN1",255),G(ve,"MAX_BMP",65535),G(ve,"MIN_FOLD",65),G(ve,"MAX_FOLD",125251),G(ve,"MIN_HIGH_SURROGATE",55296),G(ve,"MAX_HIGH_SURROGATE",56319),G(ve,"MIN_LOW_SURROGATE",56320),G(ve,"MAX_LOW_SURROGATE",57343),G(ve,"MIN_SUPPLEMENTARY_CODE_POINT",65536),ve);const MB=256,Zm=new Uint8Array(MB);for(let s=0;s<MB;s++)Zm[s]=97<=s&&s<=122||65<=s&&s<=90||48<=s&&s<=57||s===95?1:0;let Bh=null,dh=null;var Ne,Y=(Ne=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")||O.CODES.get("a")<=e&&e<=O.CODES.get("z")||O.CODES.get("A")<=e&&e<=O.CODES.get("Z")}static unhex(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")?e-O.CODES.get("0"):O.CODES.get("a")<=e&&e<=O.CODES.get("f")?e-O.CODES.get("a")+10:O.CODES.get("A")<=e&&e<=O.CODES.get("F")?e-O.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(Q.isPrint(e))Ne.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case O.CODES.get('"'):t+='\\"';break;case O.CODES.get("\\"):t+="\\\\";break;case O.CODES.get("	"):t+="\\t";break;case O.CODES.get(`
`):t+="\\n";break;case O.CODES.get("\r"):t+="\\r";break;case O.CODES.get("\b"):t+="\\b";break;case O.CODES.get("\f"):t+="\\f";break;default:{let n=e.toString(16);e<256?(t+="\\x",n.length===1&&(t+="0"),t+=n):t+=`\\x{${n}}`;break}}return t}static stringToRunes(e){const t=String(e),n=[];let r=0;for(;r<t.length;){const i=t.codePointAt(r);n.push(i),r+=i>Q.MAX_BMP?2:1}return n}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<MB?Zm[e]===1:!1}static emptyOpContext(e,t){let n=0;return e<0&&(n|=Ne.EMPTY_BEGIN_TEXT|Ne.EMPTY_BEGIN_LINE),e===10&&(n|=Ne.EMPTY_BEGIN_LINE),t<0&&(n|=Ne.EMPTY_END_TEXT|Ne.EMPTY_END_LINE),t===10&&(n|=Ne.EMPTY_END_LINE),Ne.isWordRune(e)!==Ne.isWordRune(t)?n|=Ne.EMPTY_WORD_BOUNDARY:n|=Ne.EMPTY_NO_WORD_BOUNDARY,n}static quoteMeta(e){return e.split("").map(t=>Ne.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>Q.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Bh||(Bh=new TextEncoder),Bh.encode(e);{let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===Q.MIN_HIGH_SURROGATE&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===Q.MIN_LOW_SURROGATE?(i=Q.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){dh||(dh=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return dh.decode(t)}else{let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[n++],a=e[n++],l=e[n++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-Q.MIN_SUPPLEMENTARY_CODE_POINT;t[r++]=String.fromCharCode(Q.MIN_HIGH_SURROGATE+(u>>10)),t[r++]=String.fromCharCode(Q.MIN_LOW_SURROGATE+(u&1023))}else{let o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")}}},G(Ne,"METACHARACTERS","\\.+*?()|[]{}^$"),G(Ne,"EMPTY_BEGIN_LINE",1),G(Ne,"EMPTY_END_LINE",2),G(Ne,"EMPTY_BEGIN_TEXT",4),G(Ne,"EMPTY_END_TEXT",8),G(Ne,"EMPTY_WORD_BOUNDARY",16),G(Ne,"EMPTY_NO_WORD_BOUNDARY",32),G(Ne,"EMPTY_ALL",-1),Ne);const e_=(s=[],e=0)=>{const t=Object.create(null);for(let n=0;n<s.length;n++){const r=s[n],i=e+n;t[r]=i,t[i]=r}return Object.freeze(t)};var ws,vr=(ws=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===ws.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===ws.Encoding.UTF_16}},G(ws,"Encoding",e_(["UTF_16","UTF_8"])),ws),Qp=class extends vr{constructor(s=null){super(),this.bytes=s}getEncoding(){return vr.Encoding.UTF_8}asCharSequence(){return Y.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},YT=class extends vr{constructor(s=null){super(),this.charSequence=s}getEncoding(){return vr.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return Y.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},dr=class{static utf16(s){return new YT(s)}static utf8(s){return Y.isByteArray(s)?new Qp(s):new Qp(Y.stringToUtf8ByteArray(s))}},At=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},XT=class extends At{constructor(s,e=0,t=s.length){super(),this.bytes=s,this.start=e,this.end=t}hasString(s,e){const t=s.bytes;if(t.length===0)return!0;const n=this.indexOf(this.bytes,t,this.start+e);return n!==-1&&n<=this.end-t.length}hasAnyString(s,e){return s.ac8?s.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(s){if(s+=this.start,s>=this.end)return At.EOF();const e=this.bytes[s]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&s+1<this.end){const t=this.bytes[s+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&s+2<this.end){const t=this.bytes[s+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[s+2]&255;return(n&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|n&63)<<3|3}else if(e>=240&&e<=244&&s+3<this.end){const t=this.bytes[s+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[s+2]&255;if((n&192)!==128)return e<<3|1;const r=this.bytes[s+3]&255;return(r&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(n&63)<<6|r&63)<<3|4}else return e<<3|1}index(s,e){e+=this.start;const t=this.indexOf(this.bytes,s.prefixUTF8,e);return t<0?t:t-e}context(s){s+=this.start;let e=-1;if(s>this.start&&s<=this.end){let n=s-1;if(e=this.bytes[n--],e>=128){let r=s-4;for(r<this.start&&(r=this.start);n>=r&&(this.bytes[n]&192)===128;)n--;n<this.start&&(n=this.start),e=this.step(n-this.start)>>3}}const t=s<this.end?this.step(s-this.start)>>3:-1;return Y.emptyOpContext(e,t)}indexOf(s,e,t=0){let n=e.length;if(n===0)return t<=this.end?t:-1;const r=e[0];let i=this.end-n;const o=typeof s.indexOf=="function";let a=t;for(;a<=i;){if(o){if(a=s.indexOf(r,a),a===-1||a>i)return-1}else{for(;a<=i&&s[a]!==r;)a++;if(a>i)return-1}let l=!0;for(let u=1;u<n;u++)if(s[a+u]!==e[u]){l=!1;break}if(l)return a;a++}return-1}prefixLength(s){return s.prefixUTF8.length}},ZT=class extends At{constructor(s,e=0,t=s.length){super(),this.charSequence=s,this.start=e,this.end=t}hasString(s,e){const t=this.charSequence.indexOf(s.str,this.start+e);return t!==-1&&t<=this.end-s.str.length}hasAnyString(s,e){return s.ac16?s.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(s){if(s+=this.start,s>=this.end)return At.EOF();const e=this.charSequence.charCodeAt(s);if(e<Q.MIN_HIGH_SURROGATE||e>Q.MAX_HIGH_SURROGATE||s+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(s+1);return t>=Q.MIN_LOW_SURROGATE&&t<=Q.MAX_LOW_SURROGATE?(e-Q.MIN_HIGH_SURROGATE)*1024+(t-Q.MIN_LOW_SURROGATE)+Q.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(s,e){e+=this.start;const t=this.charSequence.indexOf(s.prefix,e);return t<0||t>this.end-s.prefix.length?-1:t-e}context(s){s+=this.start;const e=s>this.start&&s<=this.end?this.charSequence.charCodeAt(s-1):-1,t=s<this.end?this.charSequence.charCodeAt(s):-1;return Y.emptyOpContext(e,t)}prefixLength(s){return s.prefix.length}},Pe=class{static fromUTF8(s,e=0,t=s.length){return new XT(s,e,t)}static fromUTF16(s,e=0,t=s.length){return new ZT(s,e,t)}},Oa=class extends Error{constructor(s){super(s),this.name="RE2JSException"}},Re=class extends Oa{constructor(s,e=null){let t=`error parsing regexp: ${s}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=s,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},ev=class extends Oa{constructor(s){super(s),this.name="RE2JSCompileException"}},Ot=class extends Oa{constructor(s){super(s),this.name="RE2JSGroupException"}},tv=class extends Oa{constructor(s){super(s),this.name="RE2JSFlagsException"}},Po=class extends Oa{constructor(s){super(s),this.name="RE2JSInternalException"}},_r,$p=(_r=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{const r=n.codePointAt(0);return r===O.CODES.get("\\")||r===O.CODES.get("$")?`\\${n}`:n}).join(""):e.indexOf("$")<0?e:e.split("").map(n=>n.codePointAt(0)===O.CODES.get("$")?"$$":n).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.numberOfInstructions=n.numberOfInstructions(),t instanceof vr?this.resetMatcherInput(t):Y.isByteArray(t)?this.resetMatcherInput(dr.utf8(t)):this.resetMatcherInput(dr.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof vr||(Y.isByteArray(e)?e=dr.utf8(e):e=dr.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Ot(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Ot(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const r=this.namedGroups[e];if(!Number.isFinite(r))throw new Ot(`group '${e}' not found`);e=r}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new Ot("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new Ot(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new Ot("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!n[0])throw new Ot("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,M.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,M.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new Ot(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?Pe.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):Pe.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,M.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?Y.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const r=this.start(),i=this.end();return this.appendPos<r&&(n+=this.substring(this.appendPos,r)),this.appendPos=i,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const r=e.length;let i=0;for(;i<r;){const o=e.codePointAt(i);if(o===O.CODES.get("\\")){if(n<i&&(t+=e.substring(n,i)),i++,i>=r)throw new Ot("character to be escaped is missing");n=i,i++;continue}if(o===O.CODES.get("$")){if(n<i&&(t+=e.substring(n,i)),i+1>=r)throw new Ot("Illegal group reference: group index is missing");const a=e.codePointAt(i+1);if(O.CODES.get("0")<=a&&a<=O.CODES.get("9")){let l=a-O.CODES.get("0"),u=i+2;for(;u<r;u++){const d=e.codePointAt(u);if(d<O.CODES.get("0")||d>O.CODES.get("9")||l*10+d-O.CODES.get("0")>this.patternGroupCount)break;l=l*10+d-O.CODES.get("0")}if(l>this.patternGroupCount)throw new Ot(`n > number of groups: ${l}`);const h=this.group(l);h!==null&&(t+=h),i=u,n=i}else if(a===O.CODES.get("{")){let l=i+2;for(;l<r&&e.codePointAt(l)!==O.CODES.get("}");)l++;if(l>=r)throw new Ot("named capture group is missing trailing '}'");const u=e.substring(i+2,l),h=this.group(u);h!==null&&(t+=h),i=l+1,n=i}else throw new Ot("Illegal group reference");continue}i++}return n<r&&(t+=e.substring(n,r)),t}appendReplacementInternalJs(e){let t="",n=0;const r=e.length;for(let i=0;i<r-1;i++)if(e.codePointAt(i)===O.CODES.get("$")){let o=e.codePointAt(i+1);if(O.CODES.get("$")===o){n<i&&(t+=e.substring(n,i)),t+="$",i++,n=i+1;continue}else if(O.CODES.get("&")===o){n<i&&(t+=e.substring(n,i));const a=this.group(0);a!==null?t+=a:t+="$&",i++,n=i+1;continue}else if(O.CODES.get("`")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(0,this.start(0)),i++,n=i+1;continue}else if(O.CODES.get("'")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,n=i+1;continue}else if(O.CODES.get("1")<=o&&o<=O.CODES.get("9")){let a=o-O.CODES.get("0");for(n<i&&(t+=e.substring(n,i)),i+=2;i<r&&(o=e.codePointAt(i),!(o<O.CODES.get("0")||o>O.CODES.get("9")||a*10+o-O.CODES.get("0")>this.patternGroupCount));i++)a=a*10+o-O.CODES.get("0");if(a>this.patternGroupCount){t+=`$${a}`,n=i,i--;continue}const l=this.group(a);l!==null&&(t+=l),n=i,i--;continue}else if(o===O.CODES.get("<")){n<i&&(t+=e.substring(n,i)),i++;let a=i+1;for(;a<e.length&&e.codePointAt(a)!==O.CODES.get(">")&&e.codePointAt(a)!==O.CODES.get(" ");)a++;if(a===e.length||e.codePointAt(a)!==O.CODES.get(">")){t+=e.substring(i-1,a+1),n=a+1,i=a;continue}const l=e.substring(i+1,a);if(Object.prototype.hasOwnProperty.call(this.namedGroups,l)){const u=this.group(l);u!==null&&(t+=u)}else t+=`$<${l}>`;n=a+1,i=a;continue}}return n<r&&(t+=e.substring(n,r)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,n=!1){let r="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let a=null;if(i){if(this.groupCount()>=_r.MAX_REPLACER_ARGS)throw new Ot("Too many capture groups to safely invoke replacer function");a=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(r+=i?this.appendReplacementFunc(e,o,a):this.appendReplacement(e,n),!!t););return r+=this.appendTail(),r}appendReplacementFunc(e,t,n){let r="";const i=this.start(),o=this.end();this.appendPos<i&&(r+=this.substring(this.appendPos,i)),this.appendPos=o;const a=this.buildReplacerArgs(i,t,n);return r+=String(e(...a)),r}buildReplacerArgs(e,t,n){const r=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const a=this.start(o);a<0?r.push(void 0):r.push(this.substring(a,this.end(o)))}if(r.push(e),r.push(n),t){const o=this.getNamedGroups();for(const a in o)o[a]===null&&(o[a]=void 0);r.push(o)}return r}},G(_r,"MAX_REPLACER_ARGS",65535),_r),pe,L=(pe=class{static isRuneOp(e){return pe.RUNE<=e&&e<=pe.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=Y.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&M.FOLD_CASE)!==0?Q.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let n=0,r=t>>1;for(;r>1;){const o=r>>1;n+=this.runes[n+o<<1]<=e?o:0,r-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&M.FOLD_CASE)!==0?Q.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let n=0,r=t>>1;for(;r>1;){const o=r>>1;n+=this.runes[n+o<<1]<=e?o:0,r-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case pe.ALT:return`alt -> ${this.out}, ${this.arg}`;case pe.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case pe.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case pe.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case pe.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case pe.FAIL:return"fail";case pe.NOP:return`nop -> ${this.out}`;case pe.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case pe.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case pe.RUNE:return this.runes===null?"rune <null>":["rune ",pe.escapeRunes(this.runes),(this.arg&M.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case pe.RUNE1:return`rune1 ${pe.escapeRunes(this.runes)} -> ${this.out}`;case pe.RUNE_ANY:return`any -> ${this.out}`;case pe.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},G(pe,"ALT",1),G(pe,"ALT_MATCH",2),G(pe,"CAPTURE",3),G(pe,"EMPTY_WIDTH",4),G(pe,"FAIL",5),G(pe,"MATCH",6),G(pe,"NOP",7),G(pe,"RUNE",8),G(pe,"RUNE1",9),G(pe,"RUNE_ANY",10),G(pe,"RUNE_ANY_NOT_NL",11),G(pe,"LB_WRITE",12),G(pe,"LB_CHECK",13),pe),Yp=class{constructor(s){this.sparse=new Int32Array(s),this.densePcs=new Int32Array(s),this.denseCaps=null,this.size=0,this.ncap=0}init(s){this.ncap=s;const e=this.densePcs.length*s;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(s){const e=this.sparse[s];return e<this.size&&this.densePcs[e]===s}isEmpty(){return this.size===0}add(s){const e=this.size++;return this.sparse[s]=e,this.densePcs[e]=s,e}clear(){this.size=0}toString(){let s="{";for(let e=0;e<this.size;e++)e!==0&&(s+=", "),s+=this.densePcs[e];return s+="}",s}},nv=class $h{static fromRE2(e){const t=new $h;return t.prog=e.prog,t.re2=e,t.q0=new Yp(t.prog.numInst()),t.q1=new Yp(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return $h.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?Y.emptyInts():Y.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n){const r=this.re2.cond;if(r===Y.EMPTY_ALL||(n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,a=this.q0,l=this.q1,u=e.step(i),h=u>>3,d=u&7,p=-1,g=0;u!==At.EOF()&&(u=e.step(i+d),p=u>>3,g=u&7);let I;for(i===0?I=Y.emptyOpContext(-1,h):I=e.context(i);;){if(a.isEmpty()){if((r&Y.EMPTY_BEGIN_TEXT)!==0&&i!==0||(n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&p!==this.re2.prefixRune&&e.canCheckPrefix()){const z=e.index(this.re2,i);if(z<0)break;i+=z,u=e.step(i),h=u>>3,d=u&7,u=e.step(i+d),p=u>>3,g=u&7,I=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let z=0;z<this.prog.lbStarts.length;z++)this.add(a,this.prog.lbStarts[z],i,this.matchcap,0,I);!this.matched&&(i===0||n===M.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(a,this.prog.start,i,this.matchcap,0,I));const N=i+d;if(I=e.context(N),this.step(a,l,i,N,h,I,n,i===e.endPos()),d===0||this.ncap===0&&this.matched)break;i+=d,h=p,d=g,h!==-1&&(u=e.step(i+d),p=u>>3,g=u&7);const V=a;a=l,l=V}return l.clear(),this.matched}matchSet(e,t,n){const r=this.re2.cond;if(r===Y.EMPTY_ALL)return[];if((n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,a=this.q0,l=this.q1,u=e.step(i),h=u>>3,d=u&7,p=-1,g=0;u!==At.EOF()&&(u=e.step(i+d),p=u>>3,g=u&7);let I=i===0?Y.emptyOpContext(-1,h):e.context(i);const N=new Set;for(;!(a.isEmpty()&&((r&Y.EMPTY_BEGIN_TEXT)!==0&&i!==0||(n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let oe=0;oe<this.prog.lbStarts.length;oe++)this.add(a,this.prog.lbStarts[oe],i,this.matchcap,0,I);(i===0||n===M.UNANCHORED)&&i>=o&&this.add(a,this.prog.start,i,this.matchcap,0,I);const V=i+d;I=e.context(V);for(let oe=0;oe<a.size;oe++){const De=a.densePcs[oe],We=this.prog.inst[De],st=oe*this.ncap;let Ge=!1;switch(We.op){case L.MATCH:if(n===M.ANCHOR_BOTH&&i!==e.endPos())break;N.add(We.arg);break;case L.RUNE:Ge=We.matchRune(h);break;case L.RUNE1:Ge=h===We.runes[0];break;case L.RUNE_ANY:Ge=!0;break;case L.RUNE_ANY_NOT_NL:Ge=h!==10;break;default:continue}Ge&&this.add(l,We.out,V,a.denseCaps,st,I)}if(a.clear(),d===0)break;i+=d,h=p,d=g,h!==-1&&(u=e.step(i+d),p=u>>3,g=u&7);const z=a;a=l,l=z}return l.clear(),Array.from(N).sort((V,z)=>V-z)}step(e,t,n,r,i,o,a,l){const u=this.re2.longest;for(let h=0;h<e.size;h++){const d=e.densePcs[h],p=h*this.ncap;if(u&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[p])continue;const g=this.prog.inst[d];let I=!1;switch(g.op){case L.MATCH:if(a===M.ANCHOR_BOTH&&!l)break;if(this.ncap>0&&(!u||!this.matched||this.matchcap[1]<n)){e.denseCaps[p+1]=n;for(let N=0;N<this.ncap;N++)this.matchcap[N]=e.denseCaps[p+N]}u||(e.size=0),this.matched=!0;break;case L.RUNE:I=g.matchRune(i);break;case L.RUNE1:I=i===g.runes[0];break;case L.RUNE_ANY:I=!0;break;case L.RUNE_ANY_NOT_NL:I=i!==10;break;default:continue}I&&this.add(t,g.out,r,e.denseCaps,p,o)}e.clear()}add(e,t,n,r,i,o){for(;;){if(t===0||e.contains(t))return;const a=e.add(t),l=this.prog.inst[t];switch(l.op){case L.FAIL:return;case L.ALT:case L.ALT_MATCH:this.add(e,l.out,n,r,i,o),t=l.arg;continue;case L.EMPTY_WIDTH:if((l.arg&~o)===0){t=l.out;continue}return;case L.NOP:t=l.out;continue;case L.CAPTURE:if(l.arg<this.ncap){const u=r[i+l.arg];r[i+l.arg]=n,this.add(e,l.out,n,r,i,o),r[i+l.arg]=u;return}else{t=l.out;continue}case L.LB_WRITE:this.lbTable[Math.abs(l.arg)]=n,t=l.out;continue;case L.LB_CHECK:if(l.arg>0){if(this.lbTable[l.arg]===n){t=l.out;continue}}else if(this.lbTable[-l.arg]!==n){t=l.out;continue}return;case L.MATCH:case L.RUNE:case L.RUNE1:case L.RUNE_ANY:case L.RUNE_ANY_NOT_NL:if(this.ncap>0){const u=a*this.ncap;for(let h=0;h<this.ncap;h++)e.denseCaps[u+h]=r[i+h]}return;default:throw new Po("unhandled")}}}};const Xp=s=>{let e=-2128831035;for(let t=0;t<s.length;t++)e^=s[t],e=Math.imul(e,16777619);return e},sv=(s,e)=>{if(s.length!==e.length)return!1;for(let t=0;t<s.length;t++)if(s[t]!==e[t])return!1;return!0};var rv=class{constructor(s,e,t=[]){this.nfaStates=s,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(Q.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(Q.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},Gn,iv=(Gn=class{constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/Gn.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,n=[...e];let r=!1;const i=[];for(;n.length>0;){const a=n.pop();if(t.has(a))continue;t.add(a);const l=this.prog.getInst(a);switch(l.op){case L.MATCH:r=!0,i.includes(l.arg)||i.push(l.arg);break;case L.ALT:case L.ALT_MATCH:n.push(l.out),n.push(l.arg);break;case L.NOP:case L.CAPTURE:n.push(l.out);break;case L.EMPTY_WIDTH:case L.LB_WRITE:case L.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((a,l)=>a-l),{pcs:o,isMatch:r,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const n=t.pcs,r=Xp(n);let i=this.stateCache.get(r);if(i)for(let a=0;a<i.length;a++){const l=i[a];if(sv(l.nfaStates,n))return l.lastSeen=++this.clock,l}else i=[],this.stateCache.set(r,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=Gn.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(r),i||(i=[],this.stateCache.set(r,i))}const o=new rv(n,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let a=0;a<o.length;a++)e.push(o[a]);e.sort((o,a)=>o.lastSeen-a.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),n=e.length-t,r=e.slice(n),i=new Set(r);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<r.length;o++){const a=r[o];a.nextLatin1.fill(null),a.nextLatin1Anchored.fill(null),a.transKeys.length=0,a.transVals.length=0;const l=Xp(a.nfaStates);let u=this.stateCache.get(l);u||(u=[],this.stateCache.set(l,u)),u.push(a),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,n){if(t<=Q.MAX_LATIN1)if(n===M.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(n===M.UNANCHORED?0:Q.MAX_RUNE+1),a=e.transKeys,l=a.length;for(let u=0;u<l;u++)if(a[u]===o)return e.transVals[u]}const r=[];for(let o=0;o<e.nfaStates.length;o++){const a=e.nfaStates[o],l=this.prog.getInst(a);L.isRuneOp(l.op)&&l.matchRune(t)&&r.push(l.out)}n===M.UNANCHORED&&r.push(this.prog.start);const i=this.getState(r);if(t<=Q.MAX_LATIN1)n===M.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(n===M.UNANCHORED?0:Q.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,n){if((n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let r=e.endPos(),i=this.startState;if(i.isMatch)if(n===M.ANCHOR_BOTH){if(t===r)return!0}else return!0;let o=t;for(;o<r;){const a=e.step(o),l=a>>3,u=a&7;if(u===0)break;if(i=n===M.UNANCHORED&&l<=Q.MAX_LATIN1&&i.nextLatin1[l]||this.step(i,l,n),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(n===M.ANCHOR_BOTH){if(o+u===r)return!0}else return!0;if(i.nfaStates.length===0&&n!==M.UNANCHORED)return!1;o+=u}return!1}matchSet(e,t,n){if((n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let r=e.endPos(),i=this.startState;const o=new Set,a=(u,h)=>{u.isMatch&&(n===M.ANCHOR_BOTH?h===r&&u.matchIDs.forEach(d=>o.add(d)):u.matchIDs.forEach(d=>o.add(d)))};a(i,t);let l=t;for(;l<r;){const u=e.step(l),h=u>>3,d=u&7;if(d===0)break;if(i=n===M.UNANCHORED&&h<=Q.MAX_LATIN1&&i.nextLatin1[h]||this.step(i,h,n),i===null)return null;if(i.lastSeen=++this.clock,l+=d,a(i,l),i.nfaStates.length===0&&n!==M.UNANCHORED)break}return Array.from(o).sort((u,h)=>u-h)}},G(Gn,"MAX_CACHE_CLEARS",5),G(Gn,"STATE_MEMORY_ESTIMATE",838),Gn);const ov=32,av=500,fh=256,cv=256*1024;var lv=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(fh),this.jobArg=new Uint8Array(fh),this.jobPos=new Int32Array(fh),this.jobLen=0,this.visited=new Uint32Array(0)}reset(s,e,t){this.end=e,this.jobLen=0,this.ncap=t;const n=s.numInst()*(e+1)+ov-1>>>5;this.visited.length<n?this.visited=new Uint32Array(n):this.visited.fill(0,0,n),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(s,e){const t=s*(this.end+1)+e,n=t>>>5,r=1<<(t&31);return(this.visited[n]&r)!==0?!1:(this.visited[n]|=r,!0)}push(s,e,t,n){if(s.prog.getInst(e).op!==L.FAIL&&(n||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const r=this.jobPc.length*2,i=new Int32Array(r);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(r);o.set(this.jobArg),this.jobArg=o;const a=new Int32Array(r);a.set(this.jobPos),this.jobPos=a}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=n?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(s,e,t,n,r){const i=s.longest;for(this.push(s,t,n,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],a=this.jobArg[this.jobLen]===1,l=this.jobPos[this.jobLen],u=!0;for(;!(!u&&!this.shouldVisit(o,l));){u=!1;const h=s.prog.getInst(o);switch(h.op){case L.FAIL:throw new Po("unexpected InstFail");case L.ALT:if(a){a=!1,o=h.arg;continue}else{this.push(s,o,l,!0),o=h.out;continue}case L.ALT_MATCH:{const d=s.prog.getInst(h.out);if(L.isRuneOp(d.op)){this.push(s,h.arg,l,!1),o=h.arg,l=this.end;continue}this.push(s,h.out,this.end,!1),o=h.out;continue}case L.RUNE:{const d=e.step(l);if(d===At.EOF()||!h.matchRune(d>>3))break;l+=d&7,o=h.out;continue}case L.RUNE1:{const d=e.step(l);if(d===At.EOF()||d>>3!==h.runes[0])break;l+=d&7,o=h.out;continue}case L.RUNE_ANY_NOT_NL:{const d=e.step(l);if(d===At.EOF()||d>>3===10)break;l+=d&7,o=h.out;continue}case L.RUNE_ANY:{const d=e.step(l);if(d===At.EOF())break;l+=d&7,o=h.out;continue}case L.CAPTURE:if(a){this.cap[h.arg]=l;break}else{h.arg<this.ncap&&(this.push(s,o,this.cap[h.arg],!0),this.cap[h.arg]=l),o=h.out;continue}case L.EMPTY_WIDTH:{const d=e.context(l);if((h.arg&~d)!==0)break;o=h.out;continue}case L.NOP:o=h.out;continue;case L.MATCH:{if(r===M.ANCHOR_BOTH&&l!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=l);const d=this.matchcap[1];if((d===-1||i&&l>0&&l>d)&&this.matchcap.set(this.cap),!i||l===this.end)return!0;break}case L.LB_WRITE:case L.LB_CHECK:throw new Po("Backtracker cannot evaluate Lookbehind instructions");default:throw new Po("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const Dc=[];var wc=class t_{static shouldBacktrack(e){return e.numInst()<=av}static maxBitStateLen(e){return t_.shouldBacktrack(e)?Math.floor(cv/e.numInst()):0}static execute(e,t,n,r,i){const o=e.cond;if(o===Y.EMPTY_ALL||(r===M.ANCHOR_START||r===M.ANCHOR_BOTH)&&n!==0||(o&Y.EMPTY_BEGIN_TEXT)!==0&&n!==0)return null;const a=Dc.length>0?Dc.pop():new lv,l=t.endPos();a.reset(e.prog,l,i);let u=!1;if((o&Y.EMPTY_BEGIN_TEXT)!==0||r===M.ANCHOR_START||r===M.ANCHOR_BOTH)a.ncap>0&&(a.cap[0]=n),a.tryBacktrack(e,t,e.prog.start,n,r)&&(u=!0);else{let d=-1;for(;n<=l&&d!==0;n+=d){if(e.prefix.length>0){const g=t.index(e,n);if(g<0)break;n+=g}if(a.ncap>0&&(a.cap[0]=n),a.tryBacktrack(e,t,e.prog.start,n,r)){u=!0;break}const p=t.step(n);d=p===At.EOF()?0:p&7}}if(!u)return Dc.push(a),null;const h=i===0?[]:Y.toArray(a.matchcap.subarray(0,i));return Dc.push(a),h}},Zp=class{constructor(s){this.sparse=new Uint32Array(s),this.dense=new Uint32Array(s),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(s){return s<this.sparse.length&&this.sparse[s]<this.size&&this.dense[this.sparse[s]]===s}insert(s){this.contains(s)||this.insertNew(s)}insertNew(s){s>=this.sparse.length||(this.sparse[s]=this.size,this.dense[this.size]=s,this.size++)}};const uv=(s,e,t,n)=>{const r=s.length,i=e.length;let o=0,a=0;const l=[],u=[];let h=!0,d=-1;const p=g=>{const I=g?s:e,N=g?o:a,V=g?t:n;return d>0&&I[N]<=l[d]?!1:(l.push(I[N],I[N+1]),g?o+=2:a+=2,d+=2,u.push(V),!0)};for(;o<r||a<i;)if(a>=i?h=p(!0):o>=r||e[a]<s[o]?h=p(!1):h=p(!0),!h)return null;return{merged:l,next:u}};var hv=class{constructor(s){this.start=s.start,this.numCap=s.numCap,this.inst=new Array(s.inst.length);for(let e=0;e<s.inst.length;e++){const t=s.inst[e],n=new L(t.op);n.out=t.out,n.arg=t.arg,n.runes=t.runes?t.runes.slice():[],n.next=null,this.inst[e]=n}}};const Bv=s=>{const e=new hv(s);for(let t=0;t<e.inst.length;t++){const n=e.inst[t];if(n.op!==L.ALT&&n.op!==L.ALT_MATCH)continue;let r="out",i="arg",o=e.inst[n[i]];if(o.op!==L.ALT&&o.op!==L.ALT_MATCH&&(r="arg",i="out",o=e.inst[n[i]],o.op!==L.ALT&&o.op!==L.ALT_MATCH))continue;const a=e.inst[n[r]];if(a.op===L.ALT||a.op===L.ALT_MATCH)continue;let l="out",u="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,l="arg",u="out"),h&&(o[l]=n[r]),n[r]===o[l]&&(n[i]=o[u])}return e},dv=s=>{if(s.inst.length>=1e3)return null;const e=new Zp(s.inst.length),t=new Zp(s.inst.length),n=new Array(s.inst.length),r=new Array(s.inst.length).fill(!1),i=o=>{let a=!0;const l=s.inst[o];if(t.contains(o))return!0;switch(t.insert(o),l.op){case L.ALT:case L.ALT_MATCH:{a=i(l.out)&&i(l.arg);let u=r[l.out],h=r[l.arg];if(u&&h)return!1;if(h){const I=l.out;l.out=l.arg,l.arg=I;const N=u;u=h,h=N}u&&(r[o]=!0,l.op=L.ALT_MATCH);const d=n[l.out]||[],p=n[l.arg]||[],g=uv(d,p,l.out,l.arg);if(!g)return!1;n[o]=g.merged,l.next=new Uint32Array(g.next);break}case L.CAPTURE:case L.EMPTY_WIDTH:case L.NOP:a=i(l.out),r[o]=r[l.out],n[o]=n[l.out]?n[l.out].slice():[],l.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(l.out);break;case L.MATCH:case L.FAIL:r[o]=l.op===L.MATCH;break;case L.RUNE:{if(r[o]=!1,l.next&&l.next.length>0)break;if(e.insert(l.out),!l.runes||l.runes.length===0){n[o]=[],l.next=new Uint32Array([l.out]);break}let u=[];if(l.runes.length===1&&(l.arg&M.FOLD_CASE)!==0){const h=l.runes[0];u.push(h,h);for(let d=Q.simpleFold(h);d!==h;d=Q.simpleFold(d))u.push(d,d);u.sort((d,p)=>d-p)}else for(let h=0;h<l.runes.length;h++)u.push(l.runes[h]);n[o]=u,l.next=new Uint32Array(Math.floor(u.length/2)+1).fill(l.out),l.op=L.RUNE;break}case L.RUNE1:{if(r[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out);let u=[];if((l.arg&M.FOLD_CASE)!==0){const h=l.runes[0];u.push(h,h);for(let d=Q.simpleFold(h);d!==h;d=Q.simpleFold(d))u.push(d,d);u.sort((d,p)=>d-p)}else u.push(l.runes[0],l.runes[0]);n[o]=u,l.next=new Uint32Array(Math.floor(u.length/2)+1).fill(l.out),l.op=L.RUNE;break}case L.RUNE_ANY:if(r[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out),n[o]=[0,Q.MAX_RUNE],l.next=new Uint32Array([l.out]);break;case L.RUNE_ANY_NOT_NL:if(r[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out),n[o]=[0,9,11,Q.MAX_RUNE],l.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(l.out);break}return a};for(e.clear(),e.insert(s.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<s.inst.length;o++)n[o]&&(s.inst[o].runes=n[o]);return s},fv=(s,e)=>{for(let t=0;t<e.inst.length;t++){const n=e.inst[t];switch(n.op){case L.ALT:case L.ALT_MATCH:case L.RUNE:break;case L.CAPTURE:case L.EMPTY_WIDTH:case L.NOP:case L.MATCH:case L.FAIL:s.inst[t].next=null;break;case L.RUNE1:case L.RUNE_ANY:case L.RUNE_ANY_NOT_NL:s.inst[t].next=null,s.inst[t].op=n.op,s.inst[t].runes=n.runes?n.runes.slice():[];break}}};var eC=class n_{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==L.EMPTY_WIDTH||(t.arg&Y.EMPTY_BEGIN_TEXT)===0)return null;let n=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===L.ALT||e.inst[i].op===L.ALT_MATCH){n=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],a=e.inst[o.out].op;switch(o.op){case L.ALT:case L.ALT_MATCH:if(a===L.MATCH||e.inst[o.arg].op===L.MATCH)return null;break;case L.EMPTY_WIDTH:if(a===L.MATCH){if((o.arg&Y.EMPTY_END_TEXT)===Y.EMPTY_END_TEXT)continue;return null}break;default:if(a===L.MATCH&&n)return null;break}}let r=Bv(e);return r=dv(r),r!==null&&fv(r,e),r}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===L.ALT_MATCH?e.out:0}static execute(e,t,n,r,i){const o=e.onepass;if(!o)return null;const a=new Int32Array(i).fill(-1);let l=!1,u=t.step(n),h=u>>3,d=u&7,p=At.EOF(),g=-1,I=0;u!==At.EOF()&&(p=t.step(n+d),p!==At.EOF()&&(g=p>>3,I=p&7));let N=n===0?Y.emptyOpContext(-1,h):t.context(n),V=o.start,z;for(;;){switch(z=o.inst[V],V=z.out,z.op){case L.MATCH:return r===M.ANCHOR_BOTH&&n!==t.endPos()?null:(l=!0,a.length>0&&(a[0]=0,a[1]=n),i===0?[]:Y.toArray(a));case L.RUNE:if(!z.matchRune(h))return null;break;case L.RUNE1:if(h!==z.runes[0])return null;break;case L.RUNE_ANY:break;case L.RUNE_ANY_NOT_NL:if(h===10)return null;break;case L.ALT:case L.ALT_MATCH:V=n_.next(z,h);continue;case L.FAIL:return null;case L.NOP:continue;case L.EMPTY_WIDTH:if((z.arg&~N)!==0)return null;continue;case L.CAPTURE:z.arg<a.length&&(a[z.arg]=n);continue;default:throw new Po("bad inst")}if(d===0)break;N=Y.emptyOpContext(h,g),n+=d,h=g,d=I,h!==-1&&(p=t.step(n+d),p!==At.EOF()?(g=p>>3,I=p&7):(g=-1,I=0))}return l?i===0?[]:Y.toArray(a):null}},Z,T=(Z=class{static isPseudoOp(e){return e>=Z.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===O.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new Z(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=Z.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=Z.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case Z.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case Z.Op.EMPTY_MATCH:e+="(?:)";break;case Z.Op.STAR:case Z.Op.PLUS:case Z.Op.QUEST:case Z.Op.REPEAT:{const t=this.subs[0];switch(t.op>Z.Op.CAPTURE||t.op===Z.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case Z.Op.STAR:e+="*";break;case Z.Op.PLUS:e+="+";break;case Z.Op.QUEST:e+="?";break;case Z.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}(this.flags&M.NON_GREEDY)!==0&&(e+="?");break}case Z.Op.CONCAT:for(let t of this.subs)t.op===Z.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case Z.Op.ALTERNATE:{let t="";for(let n of this.subs)e+=t,t="|",e+=n.appendTo();break}case Z.Op.LITERAL:(this.flags&M.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=Y.escapeRune(t);(this.flags&M.FOLD_CASE)!==0&&(e+=")");break;case Z.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case Z.Op.ANY_CHAR:e+="(?s:.)";break;case Z.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case Z.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case Z.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==Z.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case Z.Op.BEGIN_TEXT:e+="\\A";break;case Z.Op.END_TEXT:(this.flags&M.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case Z.Op.BEGIN_LINE:e+="^";break;case Z.Op.END_LINE:e+="$";break;case Z.Op.WORD_BOUNDARY:e+="\\b";break;case Z.Op.NO_WORD_BOUNDARY:e+="\\B";break;case Z.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===Q.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const n=this.runes[t]+1,r=this.runes[t+1]-1;e+=Z.quoteIfHyphen(n),e+=Y.escapeRune(n),n!==r&&(e+="-",e+=Z.quoteIfHyphen(r),e+=Y.escapeRune(r))}}else for(let t=0;t<this.runes.length;t+=2){const n=this.runes[t],r=this.runes[t+1];e+=Z.quoteIfHyphen(n),e+=Y.escapeRune(n),n!==r&&(e+="-",e+=Z.quoteIfHyphen(r),e+=Y.escapeRune(r))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===Z.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const n=t.maxCap();e<n&&(e=n)}return e}equals(e){if(!(e!==null&&e instanceof Z)||this.op!==e.op)return!1;switch(this.op){case Z.Op.END_TEXT:if((this.flags&M.WAS_DOLLAR)!==(e.flags&M.WAS_DOLLAR))return!1;break;case Z.Op.LITERAL:case Z.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case Z.Op.ALTERNATE:case Z.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case Z.Op.STAR:case Z.Op.PLUS:case Z.Op.QUEST:if((this.flags&M.NON_GREEDY)!==(e.flags&M.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case Z.Op.REPEAT:if((this.flags&M.NON_GREEDY)!==(e.flags&M.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case Z.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case Z.Op.PLB:case Z.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},G(Z,"Op",e_(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),Z),tC=class{constructor(s){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of s){let n=0;for(let r=0;r<t.length;r++){const i=t[r];i in this.next[n]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[n][i]=this.next.length-1),n=this.next[n][i]}this.match[n]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const n=this.next[0][t];this.fail[n]=0,e.push(n)}for(;e.length>0;){const t=e.shift();for(const n in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],n)){const r=this.next[t][n];let i=this.fail[t];for(;i!==0&&!(n in this.next[i]);)i=this.fail[i];n in this.next[i]?this.fail[r]=this.next[i][n]:this.fail[r]=0,this.match[r]=this.match[r]||this.match[this.fail[r]],e.push(r)}}}searchUTF16(s,e,t){let n=0;for(let r=e;r<t;r++){const i=s.charCodeAt(r);for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}searchUTF8(s,e,t){let n=0;for(let r=e;r<t;r++){const i=s[r];for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}},In,me=(In=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case In.Type.NONE:return!0;case In.Type.EXACT:return e.hasString(this,t);case In.Type.AND:for(let n=0;n<this.subs.length;n++)if(!this.subs[n].eval(e,t))return!1;return!0;case In.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let n=0;n<this.subs.length;n++)if(this.subs[n].eval(e,t))return!0;return!1;default:return!0}}},G(In,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),In),pv=class On{static build(e){const t=On.fromRegexp(e);return On.simplify(t)}static fromRegexp(e){if(!e)return new me(me.Type.NONE);switch(e.op){case T.Op.PLB:case T.Op.NLB:case T.Op.NO_MATCH:case T.Op.EMPTY_MATCH:case T.Op.BEGIN_LINE:case T.Op.END_LINE:case T.Op.BEGIN_TEXT:case T.Op.END_TEXT:case T.Op.WORD_BOUNDARY:case T.Op.NO_WORD_BOUNDARY:case T.Op.CHAR_CLASS:case T.Op.ANY_CHAR_NOT_NL:case T.Op.ANY_CHAR:return new me(me.Type.NONE);case T.Op.LITERAL:{if(e.runes.length===0||(e.flags&M.FOLD_CASE)!==0)return new me(me.Type.NONE);const t=new me(me.Type.EXACT);let n="";for(let r=0;r<e.runes.length;r++)n+=String.fromCodePoint(e.runes[r]);return t.str=n,t.bytes=Y.stringToUtf8ByteArray(t.str),t}case T.Op.CAPTURE:case T.Op.PLUS:return On.fromRegexp(e.subs[0]);case T.Op.REPEAT:return e.min>=1?On.fromRegexp(e.subs[0]):new me(me.Type.NONE);case T.Op.CONCAT:{const t=new me(me.Type.AND);for(const n of e.subs)t.subs.push(On.fromRegexp(n));return t}case T.Op.ALTERNATE:{const t=new me(me.Type.OR);for(const n of e.subs)t.subs.push(On.fromRegexp(n));return t}default:return new me(me.Type.NONE)}}static simplify(e){if(e.type===me.Type.EXACT||e.type===me.Type.NONE)return e;if(e.type===me.Type.AND){const t=[];for(const n of e.subs){const r=On.simplify(n);if(r.type!==me.Type.NONE)if(r.type===me.Type.AND)for(let i=0;i<r.subs.length;i++)t.push(r.subs[i]);else t.push(r)}return t.length===0?new me(me.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===me.Type.OR){const t=[];for(const o of e.subs){const a=On.simplify(o);if(a.type===me.Type.NONE)return new me(me.Type.NONE);if(a.type===me.Type.OR)for(let l=0;l<a.subs.length;l++)t.push(a.subs[l]);else t.push(a)}if(t.length===0)return new me(me.Type.NONE);if(t.length===1)return t[0];const n=new Set,r=[];for(const o of t)o.type===me.Type.EXACT?n.has(o.str)||(n.add(o.str),r.push(o)):r.push(o);e.subs=r;let i=!0;for(const o of r)if(o.type!==me.Type.EXACT){i=!1;break}return i&&r.length>1&&(e.ac16=new tC(r.map(o=>{const a=[];for(let l=0;l<o.str.length;l++)a.push(o.str.charCodeAt(l));return a})),e.ac8=new tC(r.map(o=>o.bytes))),e}return e}},Zt=class{constructor(s=0,e=0){this.head=s,this.tail=e}},Cv=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(s){return this.inst[s]}numInst(){return this.inst.length}addInst(s){this.inst.push(new L(s))}skipNop(s){let e=this.inst[s];for(;e.op===L.NOP||e.op===L.CAPTURE;)e=this.inst[s],s=e.out;return e}prefix(){let s="",e=this.skipNop(this.start);if(!L.isRuneOp(e.op)||e.runes.length!==1)return[e.op===L.MATCH,s];for(;L.isRuneOp(e.op)&&e.runes.length===1&&(e.arg&M.FOLD_CASE)===0;)s+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===L.MATCH,s]}startCond(){let s=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case L.EMPTY_WIDTH:s|=t.arg;break;case L.FAIL:return-1;case L.CAPTURE:case L.NOP:break;default:break e}e=t.out}return s}patch(s,e){let t=s.head;for(;t!==0;){const n=this.inst[t>>1];(t&1)===0?(t=n.out,n.out=e):(t=n.arg,n.arg=e)}}append(s,e){if(s.head===0)return e;if(e.head===0)return s;const t=this.inst[s.tail>>1];return(s.tail&1)===0?t.out=e.head:t.arg=e.head,new Zt(s.head,e.tail)}toString(){let s="";for(let e=0;e<this.inst.length;e++){const t=s.length;s+=e,e===this.start&&(s+="*"),s+="        ".substring(s.length-t),s+=this.inst[e],s+=`
`}return s}},Tc=class{constructor(s=0,e=new Zt,t=!1){this.i=s,this.out=e,this.nullable=t}},gv=class $r{static ANY_RUNE_NOT_NL(){return[0,O.CODES.get(`
`)-1,O.CODES.get(`
`)+1,Q.MAX_RUNE]}static ANY_RUNE(){return[0,Q.MAX_RUNE]}static compileRegexp(e){const t=new $r,n=t.compile(e);return t.prog.patch(n.out,t.newInst(L.MATCH).i),t.prog.start=n.i,t.prog}static compileSet(e){const t=new $r;if(e.length===0)return t.prog.start=t.newInst(L.FAIL).i,t.prog;let n=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),a=t.newInst(L.MATCH);t.prog.getInst(a.i).arg=i,t.prog.patch(o.out,a.i),n.push(o.i)}let r=n[0];for(let i=1;i<n.length;i++){const o=t.newInst(L.ALT),a=t.prog.getInst(o.i);a.out=r,a.arg=n[i],r=o.i}return t.prog.start=r,t.prog}constructor(){this.prog=new Cv,this.newInst(L.FAIL)}newInst(e){return this.prog.addInst(e),new Tc(this.prog.numInst()-1,new Zt,!0)}nop(){const e=this.newInst(L.NOP);return e.out=new Zt(e.i<<1,e.i<<1),e}fail(){return new Tc}cap(e){const t=this.newInst(L.CAPTURE);return t.out=new Zt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new Tc(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const n=this.newInst(L.ALT),r=this.prog.getInst(n.i);return r.out=e.i,r.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(L.ALT),r=this.prog.getInst(n.i);return t?(r.arg=e.i,n.out=new Zt(n.i<<1,n.i<<1)):(r.out=e.i,n.out=new Zt(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){const n=this.newInst(L.ALT),r=this.prog.getInst(n.i);return t?(r.arg=e.i,n.out=new Zt(n.i<<1,n.i<<1)):(r.out=e.i,n.out=new Zt(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Tc(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(L.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new Zt(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(L.RUNE);n.nullable=!1;const r=this.prog.getInst(n.i);return r.runes=e,t&=M.FOLD_CASE,(e.length!==1||Q.simpleFold(e[0])===e[0])&&(t&=-2),r.arg=t,n.out=new Zt(n.i<<1,n.i<<1),(t&M.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?r.op=L.RUNE1:e.length===2&&e[0]===0&&e[1]===Q.MAX_RUNE?r.op=L.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===O.CODES.get(`
`)-1&&e[2]===O.CODES.get(`
`)+1&&e[3]===Q.MAX_RUNE&&(r.op=L.RUNE_ANY_NOT_NL),n}lookBehind(e,t){const n=this.newInst(L.LB_WRITE);this.prog.getInst(n.i).arg=t;const r=this.rune($r.ANY_RUNE(),0),i=this.star(r,!0),o=this.cat(i,e);this.prog.patch(o.out,n.i);const a=this.newInst(L.LB_CHECK);return this.prog.getInst(a.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),a.out=new Zt(a.i<<1,a.i<<1),a}compile(e){switch(e.op){case T.Op.NO_MATCH:return this.fail();case T.Op.EMPTY_MATCH:return this.nop();case T.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let n of e.runes){const r=this.rune([n],e.flags);t=t===null?r:this.cat(t,r)}return t}case T.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case T.Op.ANY_CHAR_NOT_NL:return this.rune($r.ANY_RUNE_NOT_NL(),0);case T.Op.ANY_CHAR:return this.rune($r.ANY_RUNE(),0);case T.Op.BEGIN_LINE:return this.empty(Y.EMPTY_BEGIN_LINE);case T.Op.END_LINE:return this.empty(Y.EMPTY_END_LINE);case T.Op.BEGIN_TEXT:return this.empty(Y.EMPTY_BEGIN_TEXT);case T.Op.END_TEXT:return this.empty(Y.EMPTY_END_TEXT);case T.Op.WORD_BOUNDARY:return this.empty(Y.EMPTY_WORD_BOUNDARY);case T.Op.NO_WORD_BOUNDARY:return this.empty(Y.EMPTY_NO_WORD_BOUNDARY);case T.Op.PLB:case T.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case T.Op.CAPTURE:{const t=this.cap(e.cap<<1),n=this.compile(e.subs[0]),r=this.cap(e.cap<<1|1);return this.cat(this.cat(t,n),r)}case T.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&M.NON_GREEDY)!==0);case T.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&M.NON_GREEDY)!==0);case T.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&M.NON_GREEDY)!==0);case T.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const r=this.compile(n);t=t===null?r:this.cat(t,r)}return t}case T.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const r=this.compile(n);t=t===null?r:this.alt(t,r)}return t}default:throw new ev("regexp: unhandled case in compile")}}},mv=class Kt{static simplify(e){if(e===null)return null;switch(e.op){case T.Op.PLB:case T.Op.NLB:case T.Op.CAPTURE:{const t=Kt.simplify(e.subs[0]);if(t!==e.subs[0]){const n=T.fromRegexp(e);return n.runes=[],n.subs=[t],n}return e}case T.Op.CONCAT:case T.Op.ALTERNATE:{const t=[];let n=!1;for(let r=0;r<e.subs.length;r++){const i=e.subs[r],o=Kt.simplify(i);if(o!==i&&(n=!0),e.op===T.Op.CONCAT){if(o.op===T.Op.NO_MATCH)return new T(T.Op.NO_MATCH);if(o.op===T.Op.EMPTY_MATCH){n=!0;continue}if(o.op===T.Op.CONCAT){n=!0;for(let a=0;a<o.subs.length;a++)t.push(o.subs[a]);continue}}else if(e.op===T.Op.ALTERNATE){if(o.op===T.Op.NO_MATCH){n=!0;continue}if(o.op===T.Op.ALTERNATE){n=!0;for(let a=0;a<o.subs.length;a++)t.push(o.subs[a]);continue}}t.push(o)}if(n){if(t.length===0)return new T(e.op===T.Op.CONCAT?T.Op.EMPTY_MATCH:T.Op.NO_MATCH);if(t.length===1)return t[0];const r=T.fromRegexp(e);return r.runes=[],r.subs=t,r}return e}case T.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new T(T.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===Q.MAX_RUNE?new T(T.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===Q.MAX_RUNE?new T(T.Op.ANY_CHAR_NOT_NL):e;case T.Op.STAR:case T.Op.PLUS:case T.Op.QUEST:{const t=Kt.simplify(e.subs[0]);return Kt.simplify1(e.op,e.flags,t,e)}case T.Op.REPEAT:{if(e.min===0&&e.max===0)return new T(T.Op.EMPTY_MATCH);const t=Kt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Kt.simplify1(T.Op.STAR,e.flags,t,null);if(e.min===1)return Kt.simplify1(T.Op.PLUS,e.flags,t,null);const r=new T(T.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(Kt.simplify1(T.Op.PLUS,e.flags,t,null)),r.subs=i.slice(0),Kt.simplify(r)}if(e.min===1&&e.max===1)return t;let n=null;if(e.min>0){n=[];for(let r=0;r<e.min;r++)n.push(t)}if(e.max>e.min){let r=Kt.simplify1(T.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new T(T.Op.CONCAT);o.subs=[t,r],r=Kt.simplify1(T.Op.QUEST,e.flags,o,null)}if(n===null)return r;n.push(r)}if(n!==null){const r=new T(T.Op.CONCAT);return r.subs=n.slice(0),Kt.simplify(r)}return new T(T.Op.NO_MATCH)}}return e}static simplify1(e,t,n,r){if(n.op===T.Op.EMPTY_MATCH)return n;if(n.op===T.Op.NO_MATCH)return e===T.Op.PLUS?n:new T(T.Op.EMPTY_MATCH);if(e===n.op&&(t&M.NON_GREEDY)===(n.flags&M.NON_GREEDY))return n;if(r!==null&&r.op===e&&(r.flags&M.NON_GREEDY)===(t&M.NON_GREEDY)&&n===r.subs[0])return r;const i=new T(e);return i.flags=t,i.subs=[n],i}},ge=class{constructor(s,e){this.sign=s,this.cls=e}};const nC=[48,57],sC=[9,10,12,13,32,32],rC=[48,57,65,90,95,95,97,122],iC=new Map([["\\d",new ge(1,nC)],["\\D",new ge(-1,nC)],["\\s",new ge(1,sC)],["\\S",new ge(-1,sC)],["\\w",new ge(1,rC)],["\\W",new ge(-1,rC)]]),oC=[48,57,65,90,97,122],aC=[65,90,97,122],cC=[0,127],lC=[9,9,32,32],uC=[0,31,127,127],hC=[48,57],BC=[33,126],dC=[97,122],fC=[32,126],pC=[33,47,58,64,91,96,123,126],CC=[9,13,32,32],gC=[65,90],mC=[48,57,65,90,95,95,97,122],_C=[48,57,65,70,97,102],EC=new Map([["[:alnum:]",new ge(1,oC)],["[:^alnum:]",new ge(-1,oC)],["[:alpha:]",new ge(1,aC)],["[:^alpha:]",new ge(-1,aC)],["[:ascii:]",new ge(1,cC)],["[:^ascii:]",new ge(-1,cC)],["[:blank:]",new ge(1,lC)],["[:^blank:]",new ge(-1,lC)],["[:cntrl:]",new ge(1,uC)],["[:^cntrl:]",new ge(-1,uC)],["[:digit:]",new ge(1,hC)],["[:^digit:]",new ge(-1,hC)],["[:graph:]",new ge(1,BC)],["[:^graph:]",new ge(-1,BC)],["[:lower:]",new ge(1,dC)],["[:^lower:]",new ge(-1,dC)],["[:print:]",new ge(1,fC)],["[:^print:]",new ge(-1,fC)],["[:punct:]",new ge(1,pC)],["[:^punct:]",new ge(-1,pC)],["[:space:]",new ge(1,CC)],["[:^space:]",new ge(-1,CC)],["[:upper:]",new ge(1,gC)],["[:^upper:]",new ge(-1,gC)],["[:word:]",new ge(1,mC)],["[:^word:]",new ge(-1,mC)],["[:xdigit:]",new ge(1,_C)],["[:^xdigit:]",new ge(-1,_C)]]);var Cs=class Es{static charClassToString(e,t){let n="[";for(let r=0;r<t;r+=2){r>0&&(n+=" ");const i=e[r],o=e[r+1];i===o?n+=`0x${i.toString(16)}`:n+=`0x${i.toString(16)}-0x${o.toString(16)}`}return n+="]",n}static cmp(e,t,n,r){const i=e[t]-n;return i!==0?i:r-e[t+1]}static qsortIntPair(e,t,n){const r=((t+n)/2|0)&-2,i=e[r],o=e[r+1];let a=t,l=n;for(;a<=l;){for(;a<n&&Es.cmp(e,a,i,o)<0;)a+=2;for(;l>t&&Es.cmp(e,l,i,o)>0;)l-=2;if(a<=l){if(a!==l){let u=e[a];e[a]=e[l],e[l]=u,u=e[a+1],e[a+1]=e[l+1],e[l+1]=u}a+=2,l-=2}}t<l&&Es.qsortIntPair(e,t,l),a<n&&Es.qsortIntPair(e,a,n)}constructor(e=Y.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;Es.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const n=this.r[t],r=this.r[t+1];if(n<=this.r[e-1]+1){r>this.r[e-1]&&(this.r[e-1]=r);continue}this.r[e]=n,this.r[e+1]=r,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&M.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let n=2;n<=4;n+=2)if(this.len>=n){const r=this.r[this.len-n],i=this.r[this.len-n+1];if(e<=i+1&&r<=t+1)return e<r&&(this.r[this.len-n]=e),t>i&&(this.r[this.len-n+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=Q.MIN_FOLD&&t>=Q.MAX_FOLD)return this.appendRange(e,t);if(t<Q.MIN_FOLD||e>Q.MAX_FOLD)return this.appendRange(e,t);e<Q.MIN_FOLD&&(this.appendRange(e,Q.MIN_FOLD-1),e=Q.MIN_FOLD),t>Q.MAX_FOLD&&(this.appendRange(Q.MAX_FOLD+1,t),t=Q.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let r=Q.simpleFold(n);r!==n;r=Q.simpleFold(r))this.appendRange(r,r)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const r=e[n],i=e[n+1];t<=r-1&&this.appendRange(t,r-1),t=i+1}return t<=Q.MAX_RUNE&&this.appendRange(t,Q.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),r=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(n,r);continue}for(let o=n;o<=r;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const r=e.getLo(n),i=e.getHi(n),o=e.getStride(n);if(o===1){t<=r-1&&this.appendRange(t,r-1),t=i+1;continue}for(let a=r;a<=i;a+=o)t<=a-1&&this.appendRange(t,a-1),t=a+1}return t<=Q.MAX_RUNE&&this.appendRange(t,Q.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const r=this.r[n],i=this.r[n+1];e<=r-1&&(this.r[t]=e,this.r[t+1]=r-1,t+=2),e=i+1}return this.len=t,e<=Q.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=Q.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let n=e.cls;return t&&(n=new Es().appendFoldedClass(n).cleanClass().toArray()),this.appendClassWithSign(n,e.sign)}toString(){return Es.charClassToString(this.r,this.len)}},_v=class{constructor(s){this.str=s,this.position=0}pos(){return this.position}rewindTo(s){this.position=s}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(s){this.position+=s}skipString(s){this.position+=s.length}pop(){const s=this.str.codePointAt(this.position);return this.position+=Y.charCount(s),s}lookingAt(s){return this.str.startsWith(s,this.position)}rest(){return this.str.substring(this.position)}from(s){return this.str.substring(s,this.position)}toString(){return this.rest()}},H,Ev=(H=class{static unicodeTable(e){return e==="Any"?{tab:H.ANY_TABLE,fold:H.ANY_TABLE,sign:1}:e==="Ascii"?{tab:H.ASCII_TABLE,fold:H.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:Lt.CATEGORIES.get("Cn"),fold:Lt.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:Lt.CATEGORIES.get("LC"),fold:Lt.FOLD_CATEGORIES.get("LC"),sign:1}:Lt.CATEGORIES.has(e)?{tab:Lt.CATEGORIES.get(e),fold:Lt.FOLD_CATEGORIES.get(e),sign:1}:Lt.SCRIPTS.has(e)?{tab:Lt.SCRIPTS.get(e),fold:Lt.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<Q.MIN_FOLD||e>Q.MAX_FOLD)return e;let t=e;const n=e;for(e=Q.simpleFold(e);e!==n;e=Q.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===T.Op.EMPTY_MATCH)return null;if(e.op===T.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===T.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new T(T.Op.LITERAL);return n.flags=t,n.runes=Y.stringToRunes(e),n}static parse(e,t){return new H(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const n=H.parseInt(e);if(n===-1||!e.more())return-1;let r;if(!e.lookingAt(","))r=n;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))r=-1;else if((r=H.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),n<0||n>1e3||r===-2||r>1e3||r>=0&&n>r)throw new Re(H.ERR_INVALID_REPEAT_SIZE,e.from(t));return n<<16|r&Q.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==O.CODES.get("_")&&!Y.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=O.CODES.get("0")&&e.peek()<=O.CODES.get("9");)e.skip(1);const n=e.from(t);return n.length===0||n.length>1&&n.codePointAt(0)===O.CODES.get("0")?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===T.Op.LITERAL&&e.runes.length===1||e.op===T.Op.CHAR_CLASS||e.op===T.Op.ANY_CHAR_NOT_NL||e.op===T.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case T.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case T.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case T.Op.ANY_CHAR_NOT_NL:return t!==O.CODES.get(`
`);case T.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case T.Op.ANY_CHAR:break;case T.Op.ANY_CHAR_NOT_NL:H.matchRune(t,O.CODES.get(`
`))&&(e.op=T.Op.ANY_CHAR);break;case T.Op.CHAR_CLASS:t.op===T.Op.LITERAL?e.runes=new Cs(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new Cs(e.runes).appendClass(t.runes).toArray();break;case T.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=T.Op.CHAR_CLASS,e.runes=new Cs().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new Re(H.ERR_TRAILING_BACKSLASH);let n=e.pop();e:switch(n){case O.CODES.get("1"):case O.CODES.get("2"):case O.CODES.get("3"):case O.CODES.get("4"):case O.CODES.get("5"):case O.CODES.get("6"):case O.CODES.get("7"):if(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"))break;case O.CODES.get("0"):{let r=n-O.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"));i++)r=r*8+e.peek()-O.CODES.get("0"),e.skip(1);return r}case O.CODES.get("x"):{if(!e.more())break;if(n=e.pop(),n===O.CODES.get("{")){let o=0,a=0;for(;;){if(!e.more())break e;if(n=e.pop(),n===O.CODES.get("}"))break;const l=Y.unhex(n);if(l<0||(a=a*16+l,a>Q.MAX_RUNE))break e;o++}if(o===0)break e;return a}const r=Y.unhex(n);if(!e.more())break;n=e.pop();const i=Y.unhex(n);if(r<0||i<0)break;return r*16+i}case O.CODES.get("a"):return O.CODES.get("\x07");case O.CODES.get("f"):return O.CODES.get("\f");case O.CODES.get("n"):return O.CODES.get(`
`);case O.CODES.get("r"):return O.CODES.get("\r");case O.CODES.get("t"):return O.CODES.get("	");case O.CODES.get("v"):return O.CODES.get("\v");default:if(n<=Q.MAX_ASCII&&!Y.isalnum(n))return n;break}throw new Re(H.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new Re(H.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?H.parseEscape(e):e.pop()}static concatRunes(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===T.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(H.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new T(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>H.MAX_RUNES)throw new Re(H.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===T.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(H.MAX_SIZE/this.repeats)?this.repeats=H.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(H.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>H.MAX_SIZE)throw new Re(H.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case T.Op.LITERAL:n=e.runes.length;break;case T.Op.PLB:case T.Op.NLB:case T.Op.CAPTURE:case T.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case T.Op.PLUS:case T.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case T.Op.CONCAT:for(let r of e.subs)n=n+this.calcSize(r);break;case T.Op.ALTERNATE:for(let r of e.subs)n=n+this.calcSize(r);e.subs.length>1&&(n=n+e.subs.length-1);break;case T.Op.REPEAT:{let r=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?n=2+r:n=1+e.min*r;break}n=e.max*r+(e.max-e.min);break}}return n=Math.max(1,n),this.size===null&&(this.size=new Map),this.size.set(e,n),n}checkHeight(e){if(!(this.numRegexp<H.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>H.MAX_HEIGHT)throw new Re(H.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let n=1;for(let r of e.subs){const i=this.calcHeight(r);n<1+i&&(n=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!T.isPseudoOp(this.stack[t-1].op);)t--;const n=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),n}push(e){if(this.numRunes+=e.runes.length,e.op===T.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=T.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===T.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&Q.simpleFold(e.runes[0])===e.runes[2]&&Q.simpleFold(e.runes[2])===e.runes[0]||e.op===T.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&Q.simpleFold(e.runes[0])===e.runes[1]&&Q.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|M.FOLD_CASE))return null;e.op=T.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|M.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const n=this.stack.length;if(n<2)return!1;const r=this.stack[n-1],i=this.stack[n-2];return r.op!==T.Op.LITERAL||i.op!==T.Op.LITERAL||(r.flags&M.FOLD_CASE)!==(i.flags&M.FOLD_CASE)?!1:(i.runes=H.concatRunes(i.runes,r.runes),e>=0?(r.runes=[e],r.flags=t,!0):(this.pop(),this.reuse(r),!1))}newLiteral(e,t){const n=this.newRegexp(T.Op.LITERAL);return n.flags=t,(t&M.FOLD_CASE)!==0&&(e=H.minFoldRune(e)),n.runes=[e],n}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,n,r,i,o){let a=this.flags;if((a&M.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),a^=M.NON_GREEDY),o!==-1))throw new Re(H.ERR_INVALID_REPEAT_OP,i.from(o));const l=this.stack.length;if(l===0)throw new Re(H.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const u=this.stack[l-1];if(T.isPseudoOp(u.op))throw new Re(H.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const h=this.newRegexp(e);if(h.min=t,h.max=n,h.flags=a,h.subs=[u],this.stack[l-1]=h,this.checkLimits(h),e===T.Op.REPEAT&&(t>=2||n>=2)&&!this.repeatIsValid(h,1e3))throw new Re(H.ERR_INVALID_REPEAT_SIZE,i.from(r))}repeatIsValid(e,t){if(e.op===T.Op.REPEAT){let n=e.max;if(n===0)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(T.Op.EMPTY_MATCH)):this.push(this.collapse(e,T.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(T.Op.NO_MATCH)):this.push(this.collapse(e,T.Op.ALTERNATE))}cleanAlt(e){e.op===T.Op.CHAR_CLASS&&(e.runes=new Cs(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===Q.MAX_RUNE?(e.runes=[],e.op=T.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===Q.MAX_RUNE&&(e.runes=[],e.op=T.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let n=0;for(let a of e)n+=a.op===t?a.subs.length:1;let r=new Array(n).fill(null),i=0;for(let a of e)if(a.op===t){for(let l=0;l<a.subs.length;l++)r[i++]=a.subs[l];this.reuse(a)}else r[i++]=a;let o=this.newRegexp(t);if(o.subs=r,t===T.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const a=o;o=o.subs[0],this.reuse(a)}return o}factor(e){if(e.length<2)return e;let t=0,n=e.length,r=0,i=null,o=0,a=0,l=0;for(let h=0;h<=n;h++){let d=null,p=0,g=0;if(h<n){let I=e[t+h];if(I.op===T.Op.CONCAT&&I.subs.length>0&&(I=I.subs[0]),I.op===T.Op.LITERAL&&(d=I.runes,p=I.runes.length,g=I.flags&M.FOLD_CASE),g===a){let N=0;for(;N<o&&N<p&&i[N]===d[N];)N++;if(N>0){o=N;continue}}}if(h!==l)if(h===l+1)e[r++]=e[t+l];else{const I=this.newRegexp(T.Op.LITERAL);I.flags=a,I.runes=i.slice(0,o);for(let z=l;z<h;z++)e[t+z]=this.removeLeadingString(e[t+z],o),this.checkLimits(e[t+z]);const N=this.collapse(e.slice(t+l,t+h),T.Op.ALTERNATE),V=this.newRegexp(T.Op.CONCAT);V.subs=[I,N],e[r++]=V}l=h,i=d,o=p,a=g}n=r,t=0,l=0,r=0;let u=null;for(let h=0;h<=n;h++){let d=null;if(!(h<n&&(d=H.leadingRegexp(e[t+h]),u!==null&&u.equals(d)&&(H.isCharClass(u)||u.op===T.Op.REPEAT&&u.min===u.max&&H.isCharClass(u.subs[0]))))){if(h!==l)if(h===l+1)e[r++]=e[t+l];else{const p=u;for(let N=l;N<h;N++){const V=N!==l;e[t+N]=this.removeLeadingRegexp(e[t+N],V),this.checkLimits(e[t+N])}const g=this.collapse(e.slice(t+l,t+h),T.Op.ALTERNATE),I=this.newRegexp(T.Op.CONCAT);I.subs=[p,g],e[r++]=I}l=h,u=d}}n=r,t=0,l=0,r=0;for(let h=0;h<=n;h++)if(!(h<n&&H.isCharClass(e[t+h]))){if(h!==l)if(h===l+1)e[r++]=e[t+l];else{let d=l;for(let g=l+1;g<h;g++){const I=e[t+d],N=e[t+g];(I.op<N.op||I.op===N.op&&(I.runes!==null?I.runes.length:0)<(N.runes!==null?N.runes.length:0))&&(d=g)}const p=e[t+l];e[t+l]=e[t+d],e[t+d]=p;for(let g=l+1;g<h;g++)H.mergeCharClass(e[t+l],e[t+g]),this.reuse(e[t+g]);this.cleanAlt(e[t+l]),e[r++]=e[t+l]}h<n&&(e[r++]=e[t+h]),l=h+1}n=r,t=0,l=0,r=0;for(let h=0;h<n;++h)h+1<n&&e[t+h].op===T.Op.EMPTY_MATCH&&e[t+h+1].op===T.Op.EMPTY_MATCH||(e[r++]=e[t+h]);return n=r,t=0,e.slice(t,n)}removeLeadingString(e,t){if(e.op===T.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===T.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=T.Op.EMPTY_MATCH,e.subs=T.emptySubs();break;case 2:{const r=e;e=e.subs[1],this.reuse(r);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===T.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=T.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===T.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=T.Op.EMPTY_MATCH,e.subs=T.emptySubs();break;case 1:{const n=e;e=e.subs[0],this.reuse(n);break}}return e}return t&&this.reuse(e),this.newRegexp(T.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&M.LITERAL)!==0)return H.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,n=-1;const r=new _v(this.wholeRegexp);for(;r.more();){let i=-1;e:switch(r.peek()){case O.CODES.get("("):if((this.flags&M.LOOKBEHIND)!==0){if(r.lookingAt("(?<=")){this.parsePosLookBehind(),r.skip(4);break}if(r.lookingAt("(?<!")){this.parseNegLookBehind(),r.skip(4);break}}if((this.flags&M.PERL_X)!==0&&r.lookingAt("(?")){this.parsePerlFlags(r);break}this.op(T.Op.LEFT_PAREN).cap=++this.numCap,r.skip(1);break;case O.CODES.get("|"):this.parseVerticalBar(),r.skip(1);break;case O.CODES.get(")"):this.parseRightParen(),r.skip(1);break;case O.CODES.get("^"):(this.flags&M.ONE_LINE)!==0?this.op(T.Op.BEGIN_TEXT):this.op(T.Op.BEGIN_LINE),r.skip(1);break;case O.CODES.get("$"):(this.flags&M.ONE_LINE)!==0?this.op(T.Op.END_TEXT).flags|=M.WAS_DOLLAR:this.op(T.Op.END_LINE),r.skip(1);break;case O.CODES.get("."):(this.flags&M.DOT_NL)!==0?this.op(T.Op.ANY_CHAR):this.op(T.Op.ANY_CHAR_NOT_NL),r.skip(1);break;case O.CODES.get("["):this.parseClass(r);break;case O.CODES.get("*"):case O.CODES.get("+"):case O.CODES.get("?"):{i=r.pos();let o=null;switch(r.pop()){case O.CODES.get("*"):o=T.Op.STAR;break;case O.CODES.get("+"):o=T.Op.PLUS;break;case O.CODES.get("?"):o=T.Op.QUEST;break}this.repeat(o,t,n,i,r,e);break}case O.CODES.get("{"):{i=r.pos();const o=H.parseRepeat(r);if(o<0){r.rewindTo(i),this.literal(r.pop());break}t=o>>16,n=(o&Q.MAX_BMP)<<16>>16,this.repeat(T.Op.REPEAT,t,n,i,r,e);break}case O.CODES.get("\\"):{const o=r.pos();if(r.skip(1),(this.flags&M.PERL_X)!==0&&r.more())switch(r.pop()){case O.CODES.get("A"):this.op(T.Op.BEGIN_TEXT);break e;case O.CODES.get("b"):this.op(T.Op.WORD_BOUNDARY);break e;case O.CODES.get("B"):this.op(T.Op.NO_WORD_BOUNDARY);break e;case O.CODES.get("C"):throw new Re(H.ERR_INVALID_ESCAPE,"\\C");case O.CODES.get("Q"):{let u=r.rest();const h=u.indexOf("\\E");h>=0?(u=u.substring(0,h),r.skipString(u),r.skipString("\\E")):r.skipString(u);let d=0;for(;d<u.length;){const p=u.codePointAt(d);this.literal(p),d+=Y.charCount(p)}break e}case O.CODES.get("z"):this.op(T.Op.END_TEXT);break e;default:r.rewindTo(o);break}else r.rewindTo(o);const a=this.newRegexp(T.Op.CHAR_CLASS);if(a.flags=this.flags,r.lookingAt("\\p")||r.lookingAt("\\P")){const u=new Cs;if(this.parseUnicodeClass(r,u)){a.runes=u.toArray(),this.push(a);break e}}const l=new Cs;if(this.parsePerlClassEscape(r,l)){a.runes=l.toArray(),this.push(a);break e}r.rewindTo(o),this.reuse(a),this.literal(H.parseEscape(r));break}default:this.literal(r.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new Re(H.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),n=e.rest();if(n.startsWith("(?P<")||n.startsWith("(?<")){const a=n.charAt(2)==="P"?4:3,l=n.indexOf(">");if(l<0)throw new Re(H.ERR_INVALID_NAMED_CAPTURE,n);const u=n.substring(a,l);if(e.skipString(u),e.skip(a+1),!H.isValidCaptureName(u))throw new Re(H.ERR_INVALID_NAMED_CAPTURE,n.substring(0,l+1));const h=this.op(T.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[u])throw new Re(H.ERR_DUPLICATE_NAMED_CAPTURE,u);this.namedGroups[u]=this.numCap,h.name=u;return}e.skip(2);let r=this.flags,i=1,o=!1;e:for(;e.more();){const a=e.pop();switch(a){case O.CODES.get("i"):r|=M.FOLD_CASE,o=!0;break;case O.CODES.get("m"):r&=-17,o=!0;break;case O.CODES.get("s"):r|=M.DOT_NL,o=!0;break;case O.CODES.get("U"):r|=M.NON_GREEDY,o=!0;break;case O.CODES.get("-"):if(i<0)break e;i=-1,r=~r,o=!1;break;case O.CODES.get(":"):case O.CODES.get(")"):if(i<0){if(!o)break e;r=~r}a===O.CODES.get(":")&&this.op(T.Op.LEFT_PAREN),this.flags=r;return;default:break e}}throw new Re(H.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(T.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(T.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(T.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===T.Op.VERTICAL_BAR&&H.isCharClass(this.stack[e-1])&&H.isCharClass(this.stack[e-3])){let t=this.stack[e-1],n=this.stack[e-3];if(t.op>n.op){const r=n;n=t,t=r,this.stack[e-3]=n}return H.mergeCharClass(n,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],n=this.stack[e-2];if(n.op===T.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Re(H.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==T.Op.LEFT_PAREN)throw new Re(H.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(H.hasCapture(e))throw new Re(H.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=T.Op.PLB:t.op=T.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=T.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const n=e.pos();if((this.flags&M.PERL_X)===0||!e.more()||e.pop()!==O.CODES.get("\\")||!e.more())return!1;e.pop();const r=e.from(n),i=iC.has(r)?iC.get(r):null;return i===null?!1:(t.appendGroup(i,(this.flags&M.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const n=e.rest(),r=n.indexOf(":]");if(r<0)return!1;const i=n.substring(0,r+2);e.skipString(i);const o=EC.has(i)?EC.get(i):null;if(o===null)throw new Re(H.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&M.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const n=e.pos();if((this.flags&M.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let r=1,i=e.pop();if(i===O.CODES.get("P")&&(r=-1),!e.more())throw e.rewindTo(n),new Re(H.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==O.CODES.get("{"))o=Y.runeToString(i);else{const h=e.rest(),d=h.indexOf("}");if(d<0)throw e.rewindTo(n),new Re(H.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,d),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===O.CODES.get("^")&&(r=0-r,o=o.substring(1));const a=H.unicodeTable(o);if(a===null)throw new Re(H.ERR_INVALID_CHAR_RANGE,e.from(n));a.sign<0&&(r=0-r);const l=a.tab,u=a.fold;if((this.flags&M.FOLD_CASE)===0||u===null)t.appendTableWithSign(l,r);else{const h=new Cs().appendTable(l).appendTable(u).cleanClass().toArray();t.appendClassWithSign(h,r)}return!0}parseClass(e){const t=e.pos();e.skip(1);const n=this.newRegexp(T.Op.CHAR_CLASS);n.flags=this.flags;const r=new Cs;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&M.CLASS_NL)===0&&r.appendRange(O.CODES.get(`
`),O.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==O.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&(this.flags&M.PERL_X)===0&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new Re(H.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const a=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,r))continue;e.rewindTo(a)}if(this.parseUnicodeClass(e,r)||this.parsePerlClassEscape(e,r))continue;e.rewindTo(a);const l=H.parseClassChar(e,t);let u=l;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(u=H.parseClassChar(e,t),u<l)throw new Re(H.ERR_INVALID_CHAR_RANGE,e.from(a))}(this.flags&M.FOLD_CASE)===0?r.appendRange(l,u):r.appendFoldedRange(l,u)}e.skip(1),r.cleanClass(),i<0&&r.negateClass(),n.runes=r.toArray(),this.push(n)}},G(H,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),G(H,"ERR_INVALID_CHAR_RANGE","invalid character class range"),G(H,"ERR_INVALID_ESCAPE","invalid escape sequence"),G(H,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),G(H,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),G(H,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),G(H,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),G(H,"ERR_MISSING_BRACKET","missing closing ]"),G(H,"ERR_MISSING_PAREN","missing closing )"),G(H,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),G(H,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),G(H,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),G(H,"ERR_UNEXPECTED_PAREN","unexpected )"),G(H,"ERR_NESTING_DEPTH","expression nests too deeply"),G(H,"ERR_LARGE","expression too large"),G(H,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),G(H,"MAX_HEIGHT",1e3),G(H,"MAX_SIZE",3355443),G(H,"MAX_RUNES",33554432),G(H,"ANY_TABLE",new m(new Uint32Array([0,Q.MAX_RUNE,1]))),G(H,"ASCII_TABLE",new m(new Uint32Array([0,127,1]))),G(H,"ASCII_FOLD_TABLE",new m(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),H),yv=class cr{static initTest(e){const t=cr.compile(e),n=new cr(t.expr,t.prog,t.numSubexp,t.longest);return n.cond=t.cond,n.prefix=t.prefix,n.prefixUTF8=t.prefixUTF8,n.prefixComplete=t.prefixComplete,n.prefixRune=t.prefixRune,n.prefilter=t.prefilter,n}static compile(e){return cr.compileImpl(e,M.PERL,!1)}static compilePOSIX(e){return cr.compileImpl(e,M.POSIX,!0)}static compileImpl(e,t,n){let r=Ev.parse(e,t);const i=r.maxCap();r=mv.simplify(r);const o=pv.build(r),a=gv.compileRegexp(r),l=new cr(e,a,i,n);l.prefilter=o.type===me.Type.NONE?null:o;const[u,h]=a.prefix();return l.prefixComplete=u,l.prefix=h,l.prefixUTF8=Y.stringToUtf8ByteArray(l.prefix),l.prefix.length>0&&(l.prefixRune=l.prefix.codePointAt(0)),l.namedGroups=r.namedGroups,l}static match(e,t){return cr.compile(e).match(t)}constructor(e,t,n=0,r=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=r,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new iv(this.prog),this.onepass=eC.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,n,r){if((n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const a=e.prefixLength(this);if(n===M.UNANCHORED){const l=e.index(this,t);if(l<0)return null;i=t+l,o=i+a}else if(n===M.ANCHOR_BOTH){if(e.endPos()!==a||e.index(this,0)!==0)return null;i=0,o=a}else if(n===M.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=a}if(i<0)return null;if(r>0){const l=new Int32Array(r).fill(-1);return l[0]=i,l[1]=o,Array.from(l)}return[]}executeEngine(e,t,n,r){if(this.prefixComplete&&(r===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,n,r);if(this.prefilter!==null&&n===M.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return eC.execute(this,e,t,n,r);if(r>0)return this.prog.numLb===0&&e.endPos()<=wc.maxBitStateLen(this.prog)?wc.execute(this,e,t,n,r):this.doExecuteNFA(e,t,n,r);if(this.prog.numLb===0){const i=this.dfa.match(e,t,n);if(i!==null)return i?[]:null;if(e.endPos()<=wc.maxBitStateLen(this.prog))return wc.execute(this,e,t,n,r)}return this.doExecuteNFA(e,t,n,r)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,r){let i=this.get();i||(i=nv.fromRE2(this)),i.init(r);const o=i.match(e,t,n)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(Pe.fromUTF16(e),0,M.UNANCHORED,0)!==null}matchWithGroup(e,t,n,r,i){return e instanceof vr||(Y.isByteArray(e)?e=dr.utf8(e):e=dr.utf16(e)),this.matchMachineInput(e,t,n,r,i)}matchMachineInput(e,t,n,r,i){if(t>n)return[!1,null];const o=e.isUTF16Encoding()?Pe.fromUTF16(e.asCharSequence(),0,n):Pe.fromUTF8(e.asBytes(),0,n),a=this.executeEngine(o,t,r,2*i);return a===null?[!1,null]:[!0,a]}matchUTF8(e){return this.executeEngine(Pe.fromUTF8(e),0,M.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let r=0,i=0,o="";const a=Pe.fromUTF16(e);let l=0;for(;i<=e.length;){const u=this.executeEngine(a,i,M.UNANCHORED,2);if(u===null||u.length===0)break;o+=e.substring(r,u[0]),(u[1]>r||u[0]===0)&&(o+=t(e.substring(u[0],u[1])),l++),r=u[1];const h=a.step(i)&7;if(i+h>u[1]?i+=h:i+1>u[1]?i++:i=u[1],l>=n)break}return o+=e.substring(r),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let n=new Array(t).fill(-1);for(let r=0;r<e.length;r++)n[r]=e[r];e=n}return e}allMatches(e,t,n=r=>r){let r=[];const i=e.endPos();t<0&&(t=i+1);let o=0,a=0,l=-1;for(;a<t&&o<=i;){const u=this.executeEngine(e,o,M.UNANCHORED,this.prog.numCap);if(u===null||u.length===0)break;let h=!0;if(u[1]===o){u[0]===l&&(h=!1);const d=e.step(o);d<0?o=i+1:o+=d&7}else o=u[1];l=u[1],h&&(r.push(n(this.pad(u))),a++)}return r}findUTF8(e){const t=this.executeEngine(Pe.fromUTF8(e),0,M.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(Pe.fromUTF8(e),0,M.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(Pe.fromUTF16(e),0,M.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(Pe.fromUTF16(e),0,M.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(Pe.fromUTF8(e),0,M.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let r=0;r<n.length;r++)2*r<t.length&&t[2*r]>=0&&(n[r]=e.slice(t[2*r],t[2*r+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(Pe.fromUTF8(e),0,M.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(Pe.fromUTF16(e),0,M.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let r=0;r<n.length;r++)2*r<t.length&&t[2*r]>=0&&(n[r]=e.substring(t[2*r],t[2*r+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(Pe.fromUTF16(e),0,M.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches(Pe.fromUTF8(e),t,r=>e.slice(r[0],r[1]));return n.length===0?null:n}findAllUTF8Index(e,t){const n=this.allMatches(Pe.fromUTF8(e),t,r=>r.slice(0,2));return n.length===0?null:n}findAll(e,t){const n=this.allMatches(Pe.fromUTF16(e),t,r=>e.substring(r[0],r[1]));return n.length===0?null:n}findAllIndex(e,t){const n=this.allMatches(Pe.fromUTF16(e),t,r=>r.slice(0,2));return n.length===0?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches(Pe.fromUTF8(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.slice(r[2*o],r[2*o+1]));return i});return n.length===0?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches(Pe.fromUTF8(e),t);return n.length===0?null:n}findAllSubmatch(e,t){const n=this.allMatches(Pe.fromUTF16(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.substring(r[2*o],r[2*o+1]));return i});return n.length===0?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches(Pe.fromUTF16(e),t);return n.length===0?null:n}},Iv=class Yr{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let n="",r=!1,i=e.length;i===0&&(n="(?:)",r=!0);let o=!1,a=0;for(;a<i;){let u=e[a];if(u==="\\"){if(a+1<i)switch(u=e[a+1],u){case"\\":n+="\\\\",a+=2;continue;case"c":if(a+2<i){let p=e[a+2].charCodeAt(0);if(p>=65&&p<=90||p>=97&&p<=122){let g=p%32;n+="\\x",n+=(g>>4).toString(16).toUpperCase(),n+=(g&15).toString(16).toUpperCase(),a+=3,r=!0;continue}}n+="c",a+=2,r=!0;continue;case"u":if(a+2<i){if(e[a+2]==="{"){let p=a+3,g=!1,I=!1;for(;p<i;){const N=e[p];if(N==="}"){I=!0;break}if(!Yr.isHexadecimal(N))break;g=!0,p++}if(I&&g){n+="\\x",a+=2,r=!0;continue}}else if(a+5<i){let p=!0;for(let g=0;g<4;g++)if(!Yr.isHexadecimal(e[a+2+g])){p=!1;break}if(p){n+="\\x{"+e.substring(a+2,a+6)+"}",a+=6,r=!0;continue}}}n+="u",a+=2,r=!0;continue;case"x":{let p=!1;if(a+2<i&&e[a+2]==="{"){let g=a+3,I=!1,N=!1;for(;g<i;){const V=e[g];if(V==="}"){N=!0;break}if(!Yr.isHexadecimal(V))break;I=!0,g++}N&&I&&(p=!0)}else a+3<i&&Yr.isHexadecimal(e[a+2])&&Yr.isHexadecimal(e[a+3])&&(p=!0);p?(n+="\\x",a+=2):(n+="x",a+=2,r=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":n+="\\"+u,a+=2;continue;default:{let p=e.codePointAt(a+1);if(p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122){let g=Y.charCount(p);n+=e.substring(a+1,a+1+g),a+=g+1,r=!0}else{n+="\\";let g=Y.charCount(p);n+=e.substring(a+1,a+1+g),a+=g+1}continue}}}else if(u==="/"){n+="\\/",a+=1,r=!0;continue}else if(u==="[")o=!0;else if(u==="]")o=!1;else if(!o&&u==="("&&a+2<i&&e[a+1]==="?"&&e[a+2]==="<"&&a+3<i&&!"=!>)".includes(e[a+3])){n+="(?P<",a+=3,r=!0;continue}let h=e.codePointAt(a),d=Y.charCount(h);n+=e.substring(a,a+d),a+=d}const l=r?n:e;return t.length>0?`(?${t})${l}`:l}},Qe,VB=(Qe=class{static quote(e){return Y.quoteMeta(e)}static quoteReplacement(e,t=!1){return $p.quoteReplacement(e,t)}static translateRegExp(e){return Iv.translate(e)}static compile(e,t=0){let n=e;if((t&Qe.CASE_INSENSITIVE)!==0&&(n=`(?i)${n}`),(t&Qe.DOTALL)!==0&&(n=`(?s)${n}`),(t&Qe.MULTILINE)!==0&&(n=`(?m)${n}`),(t&-544)!==0)throw new tv("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let r=M.PERL;(t&Qe.DISABLE_UNICODE_GROUPS)!==0&&(r&=-129),(t&Qe.LOOKBEHINDS)!==0&&(r|=M.LOOKBEHIND);const i=new Qe(e,t);return i.re2Input=yv.compileImpl(n,r,(t&Qe.LONGEST_MATCH)!==0),i}static matches(e,t){return Qe.compile(e).testExact(t)}static initTest(e,t,n){if(e==null)throw new Error("pattern is null");if(n==null)throw new Error("re2 is null");const r=new Qe(e,t);return r.re2Input=n,r}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return Y.isByteArray(e)&&(e=dr.utf8(e)),new $p(this,e)}test(e){return Y.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=Y.isByteArray(e)?Pe.fromUTF8(e):Pe.fromUTF16(e);return this.re2Input.executeEngine(t,0,M.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const r=this.namedGroups();if(Object.keys(r).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;return n}split(e,t=0){const n=this.matcher(e),r=[];let i=0,o=0;for(;n.find();){if(o===0&&n.end()===0){o=n.end();continue}if(t>0&&r.length===t-1)break;if(o===n.start()){if(t===0){i+=1,o=n.end();continue}}else for(;i>0;)r.push(""),i-=1;r.push(n.substring(o,n.start())),o=n.end()}if(t===0&&o!==n.inputLength()){for(;i>0;)r.push(""),i-=1;r.push(n.substring(o,n.inputLength()))}return(t!==0||r.length===0&&!(o===n.inputLength()&&o>0))&&r.push(n.substring(o,n.inputLength())),r}*matchAll(e){const t=this.matcher(e);for(;t.find();){const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const r=this.namedGroups();if(Object.keys(r).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;yield n}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},G(Qe,"CASE_INSENSITIVE",Jr.CASE_INSENSITIVE),G(Qe,"DOTALL",Jr.DOTALL),G(Qe,"MULTILINE",Jr.MULTILINE),G(Qe,"DISABLE_UNICODE_GROUPS",Jr.DISABLE_UNICODE_GROUPS),G(Qe,"LONGEST_MATCH",Jr.LONGEST_MATCH),G(Qe,"LOOKBEHINDS",Jr.LOOKBEHINDS),Qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi="12.19.0";function Dv(s){Pi=s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ar=new Hl("@firebase/firestore");function Xr(){return Ar.logLevel}function K(s,...e){if(Ar.logLevel<=de.DEBUG){const t=e.map(GB);Ar.debug(`Firestore (${Pi}): ${s}`,...t)}}function ts(s,...e){if(Ar.logLevel<=de.ERROR){const t=e.map(GB);Ar.error(`Firestore (${Pi}): ${s}`,...t)}}function nn(s,...e){if(Ar.logLevel<=de.WARN){const t=e.map(GB);Ar.warn(`Firestore (${Pi}): ${s}`,...t)}}function GB(s){if(typeof s=="string")return s;try{return(function(t){return JSON.stringify(t)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,s_(s,n,t)}function s_(s,e,t){let n=`FIRESTORE (${Pi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw ts(n),new Error(n)}function $(s,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,s||s_(e,r,n)}function ae(s,e){return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=wv(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function fe(s,e){return s<e?-1:s>e?1:0}function Yh(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const r=s.charAt(n),i=e.charAt(n);if(r!==i)return ph(r)===ph(i)?fe(r,i):ph(r)?1:-1}return fe(s.length,e.length)}const Tv=55296,vv=57343;function ph(s){const e=s.charCodeAt(0);return e>=Tv&&e<=vv}function di(s,e,t){return s.length===e.length&&s.every(((n,r)=>t(n,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let je=class Xh{constructor(e,t){this.comparator=e,this.root=t||As.EMPTY}insert(e,t){return new Xh(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,As.BLACK,null,null))}remove(e){return new Xh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,As.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vc(this.root,e,this.comparator,!1)}getReverseIterator(){return new vc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vc(this.root,e,this.comparator,!0)}},vc=class{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},As=class Ln{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??Ln.RED,this.left=r??Ln.EMPTY,this.right=i??Ln.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ln(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ln.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Ln.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ne(27949);return e+(this.isRed()?0:1)}};As.EMPTY=null,As.RED=!0,As.BLACK=!1;As.EMPTY=new class{constructor(){this.size=0}get key(){throw ne(57766)}get value(){throw ne(16141)}get color(){throw ne(16727)}get left(){throw ne(29726)}get right(){throw ne(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new As(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yC(this.data.getIterator())}getIteratorFrom(e){return new yC(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ze(this.comparator);return t.data=e,t}}class yC{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends as{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="__name__";class pn{constructor(e,t,n){t===void 0?t=0:t>e.length&&ne(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&ne(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return pn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pn?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=pn.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return fe(e.length,t.length)}static compareSegments(e,t){const n=pn.isNumericId(e),r=pn.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?pn.extractNumericId(e).compare(pn.extractNumericId(t)):Yh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vs.fromString(e.substring(4,e.length-2))}}class Ee extends pn{construct(e,t,n){return new Ee(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new J(k.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((r=>r.length>0)))}return new Ee(t)}static emptyPath(){return new Ee([])}}const Av=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Gt=class Zr extends pn{construct(e,t,n){return new Zr(e,t,n)}static isValidIdentifier(e){return Av.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Zr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_n}static keyField(){return new Zr([_n])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(n.length===0)throw new J(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new J(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(i(),r++)}if(i(),o)throw new J(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Zr(t)}static emptyPath(){return new Zr([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(Gt.comparator)}static empty(){return new $t([])}unionWith(e){let t=new Ze(Gt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new $t(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function Ys(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function Rv(s,e){const t=[];for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&t.push(e(s[n],n,s));return t}function r_(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ee.fromString(e))}static fromName(e){return new X(Ee.fromString(e).popFirst(5))}static empty(){return new X(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ee(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(s,e,t){if(!t)throw new J(k.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function o_(s,e,t,n){if(e===!0&&n===!0)throw new J(k.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function IC(s){if(!X.isDocumentKey(s))throw new J(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function DC(s){if(X.isDocumentKey(s))throw new J(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function La(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function Jl(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":ne(12329,{type:typeof s})}function Rt(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new J(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Jl(s);throw new J(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}function Sv(s,e){if(e<=0)throw new J(k.INVALID_ARGUMENT,`Function ${s}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Xe(s,e){const t={typeString:s};return e&&(t.value=e),t}function Fa(s,e){if(!La(s))throw new J(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const o=s[n];if(r&&typeof o!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new J(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=-62135596800,TC=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*TC);return new _e(t,n)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new J(k.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return _e._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,n;if(e>=0n)t=Number(e/1000000000n),n=Number(e%1000000000n);else{const r=e%1000000000n;r===0n?(t=Number(e/1000000000n),n=0):(t=Number(e/1000000000n-1n),n=Number(r+1000000000n))}return new _e(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<wC)throw new J(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/TC}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new J(k.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fa(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wC;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:Xe("string",_e._jsonSchemaVersion),seconds:Xe("number"),nanoseconds:Xe("number")};/**
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
 */class a_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new a_("Invalid base64 string: "+i):i}})(e);return new Je(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new Je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const Pv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xs(s){if($(!!s,39018),typeof s=="string"){let e=0;const t=Pv.exec(s);if($(!!t,46558,{timestamp:s}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Me(s.seconds),nanos:Me(s.nanos)}}function Me(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Ms(s){return typeof s=="string"?Je.fromBase64String(s):Je.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="server_timestamp",l_="__type__",u_="__previous_value__",h_="__local_write_time__";function Wl(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[l_])==null?void 0:n.stringValue)===c_}function ka(s){const e=s.mapValue.fields[u_];return Wl(e)?ka(e):e}function fi(s){const e=xs(s.mapValue.fields[h_].timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,t,n,r,i,o,a,l,u,h,d,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=d,this._customHeaders=p,this.grpcFlowControlWindow=g}}const nl="(default)";class pi{constructor(e,t){this.projectId=e,this.database=t||nl}static empty(){return new pi("","")}get isDefaultDatabase(){return this.database===nl}isEqual(e){return e instanceof pi&&e.projectId===this.projectId&&e.database===this.database}}function Nv(s,e){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new J(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pi(s.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UB=-1;function Kl(s){return s==null}function Zo(s){return s===0&&1/s==-1/0}function Ov(s){return typeof s=="number"&&Number.isInteger(s)&&!Zo(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}function Lv(s){return typeof s=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="__type__",Fv="__max__",Ac={mapValue:{}},d_="__vector__",ea="value",Ci={nullValue:"NULL_VALUE"},Ut={booleanValue:!0},lt={booleanValue:!1};function et(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Wl(s)?4:kv(s)?9007199254740991:sl(s)?10:11:ne(28295,{value:s})}function sn(s,e,t){if(s===e)return!0;const n=et(s);if(n!==et(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return fi(s).isEqual(fi(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=xs(i.timestampValue),l=xs(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(i,o){return Ms(i.bytesValue).isEqual(Ms(o.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(i,o){return Me(i.geoPointValue.latitude)===Me(o.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(o.geoPointValue.longitude)})(s,e);case 2:return(function(i,o,a){if("integerValue"in i&&"integerValue"in o)return Me(i.integerValue)===Me(o.integerValue);let l,u;if("doubleValue"in i&&"doubleValue"in o)l=Me(i.doubleValue),u=Me(o.doubleValue);else{if(!(a!=null&&a.i))return!1;l=Me(i.integerValue??i.doubleValue),u=Me(o.integerValue??o.doubleValue)}return l===u?!!(a!=null&&a.o)||Zo(l)===Zo(u):!!(a===void 0||a.u)&&isNaN(l)&&isNaN(u)})(s,e,t);case 9:return di(s.arrayValue.values||[],e.arrayValue.values||[],((r,i)=>sn(r,i,t)));case 10:case 11:return(function(i,o,a){const l=i.mapValue.fields||{},u=o.mapValue.fields||{};if(tl(l)!==tl(u))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(u[h]===void 0||!sn(l[h],u[h],a)))return!1;return!0})(s,e,t);default:return ne(52216,{left:s})}}function ta(s,e){return(s.values||[]).find((t=>sn(t,e)))!==void 0}function Ht(s,e){if(s===e)return 0;const t=et(s),n=et(e);if(t!==n)return fe(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(s.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=Me(i.integerValue||i.doubleValue),l=Me(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(s,e);case 3:return vC(s.timestampValue,e.timestampValue);case 4:return vC(fi(s),fi(e));case 5:return Yh(s.stringValue,e.stringValue);case 6:return(function(i,o){const a=Ms(i),l=Ms(o);return a.compareTo(l)})(s.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=fe(a[u],l[u]);if(h!==0)return h}return fe(a.length,l.length)})(s.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=fe(Me(i.latitude),Me(o.latitude));return a!==0?a:fe(Me(i.longitude),Me(o.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return AC(s.arrayValue,e.arrayValue);case 10:return(function(i,o){var p,g,I,N;const a=i.fields||{},l=o.fields||{},u=(p=a[ea])==null?void 0:p.arrayValue,h=(g=l[ea])==null?void 0:g.arrayValue,d=fe(((I=u==null?void 0:u.values)==null?void 0:I.length)||0,((N=h==null?void 0:h.values)==null?void 0:N.length)||0);return d!==0?d:AC(u,h)})(s.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ac.mapValue&&o===Ac.mapValue)return 0;if(i===Ac.mapValue)return 1;if(o===Ac.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=Yh(l[d],h[d]);if(p!==0)return p;const g=Ht(a[l[d]],u[h[d]]);if(g!==0)return g}return fe(l.length,h.length)})(s.mapValue,e.mapValue);default:throw ne(23264,{l:t})}}function vC(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return fe(s,e);const t=xs(s),n=xs(e),r=fe(t.seconds,n.seconds);return r!==0?r:fe(t.nanos,n.nanos)}function AC(s,e){const t=s.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const i=Ht(t[r],n[r]);if(i!==void 0&&i!==0)return i}return fe(t.length,n.length)}function gi(s){return Zh(s)}function Zh(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(t){const n=xs(t);return`time(${n.seconds},${n.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(t){return Ms(t).toBase64()})(s.bytesValue):"referenceValue"in s?(function(t){return X.fromName(t).toString()})(s.referenceValue):"geoPointValue"in s?(function(t){return`geo(${t.latitude},${t.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=Zh(i);return n+"]"})(s.arrayValue):"mapValue"in s?(function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of n)i?i=!1:r+=",",r+=`${o}:${Zh(t.fields[o])}`;return r+"}"})(s.mapValue):ne(61005,{value:s})}function Vc(s){switch(et(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ka(s);return e?16+Vc(e):16;case 5:return 2*s.stringValue.length;case 6:return Ms(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((r,i)=>r+Vc(i)),0)})(s.arrayValue);case 10:case 11:return(function(n){let r=0;return Ys(n.fields,((i,o)=>{r+=i.length+Vc(o)})),r})(s.mapValue);default:throw ne(13486,{value:s})}}function RC(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function En(s){return!!s&&"integerValue"in s}function fr(s){return!!s&&"doubleValue"in s}function Vs(s){return En(s)||fr(s)}function mi(s){return!!s&&"arrayValue"in s}function Yt(s){return!!s&&"nullValue"in s}function qt(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function Er(s){return!!s&&"mapValue"in s}function sl(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[B_])==null?void 0:n.stringValue)===d_}function eB(s){var e,t;return(t=(((e=s==null?void 0:s.mapValue)==null?void 0:e.fields)||{})[ea])==null?void 0:t.arrayValue}function bo(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return Ys(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=bo(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=bo(s.arrayValue.values[t]);return e}return{...s}}function kv(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===Fv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Er(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(t)}setAll(e){let t=Gt.emptyPath(),n={},r=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,n,r),n={},r=[],t=a.popLast()}o?n[a.lastSegment()]=bo(o):r.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Er(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Er(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ys(t,((r,i)=>e[r]=i));for(const r of n)delete e[r]}clone(){return new vt(bo(this.value))}}function f_(s){const e=[];return Ys(s.fields,((t,n)=>{const r=new Gt([t]);if(Er(n)){const i=f_(n.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new $t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zo(e)?"-0":e}}function HB(s){return{integerValue:""+s}}function qB(s,e,t){return Ov(e)?HB(e):zl(s,e)}/**
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
 */class Ql{constructor(){this._=void 0}}function xv(s,e,t){return s instanceof na?(function(r,i){const o={fields:{[l_]:{stringValue:c_},[h_]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Wl(i)&&(i=ka(i)),i&&(o.fields[u_]=i),{mapValue:o}})(t,e):s instanceof sa?C_(s,e):s instanceof ra?g_(s,e):s instanceof ia?(function(r,i){const o=p_(r,i),a=ol(o)+ol(r.h);return En(o)&&En(r.h)?HB(a):zl(r.serializer,a)})(s,e):s instanceof rl?(function(r,i){return SC(r,i,Math.min)})(s,e):s instanceof il?(function(r,i){return SC(r,i,Math.max)})(s,e):void 0}function Mv(s,e,t){return s instanceof sa?C_(s,e):s instanceof ra?g_(s,e):t}function p_(s,e){return s instanceof ia?Vs(e)?e:{integerValue:0}:null}class na extends Ql{}class sa extends Ql{constructor(e){super(),this.elements=e}}function C_(s,e){const t=m_(e);for(const n of s.elements)t.some((r=>sn(r,n)))||t.push(n);return{arrayValue:{values:t}}}class ra extends Ql{constructor(e){super(),this.elements=e}}function g_(s,e){let t=m_(e);for(const n of s.elements)t=t.filter((r=>!sn(r,n)));return{arrayValue:{values:t}}}class jB extends Ql{constructor(e,t){super(),this.serializer=e,this.h=t}}class ia extends jB{}class rl extends jB{}class il extends jB{}function SC(s,e,t){if(!Vs(e))return s.h;const n=t(ol(e),ol(s.h));return En(e)&&En(s.h)?HB(n):zl(s.serializer,n)}function ol(s){return Me(s.integerValue||s.doubleValue)}function m_(s){return mi(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,t){this.field=e,this.transform=t}}function Gv(s,e){return s.field.isEqual(e.field)&&(function(n,r){return n instanceof sa&&r instanceof sa||n instanceof ra&&r instanceof ra?di(n.elements,r.elements,sn):n instanceof ia&&r instanceof ia||n instanceof rl&&r instanceof rl||n instanceof il&&r instanceof il?sn(n.h,r.h):n instanceof na&&r instanceof na})(s.transform,e.transform)}class Uv{constructor(e,t){this.version=e,this.transformResults=t}}class tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gc(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class $l{}function __(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new JB(s.key,tn.none()):new xa(s.key,s.data,tn.none());{const t=s.data,n=vt.empty();let r=new Ze(Gt.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),r=r.add(i)}return new Xs(s.key,n,new $t(r.toArray()),tn.none())}}function Hv(s,e,t){s instanceof xa?(function(r,i,o){const a=r.value.clone(),l=bC(r.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(s,e,t):s instanceof Xs?(function(r,i,o){if(!Gc(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=bC(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(E_(r)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(s,e,t):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function No(s,e,t,n){return s instanceof xa?(function(i,o,a,l){if(!Gc(i.precondition,o))return a;const u=i.value.clone(),h=NC(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(s,e,t,n):s instanceof Xs?(function(i,o,a,l){if(!Gc(i.precondition,o))return a;const u=NC(i.fieldTransforms,l,o),h=o.data;return h.setAll(E_(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((d=>d.field)))})(s,e,t,n):(function(i,o,a){return Gc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(s,e,t)}function qv(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),i=p_(n.transform,r||null);i!=null&&(t===null&&(t=vt.empty()),t.set(n.field,i))}return t||null}function PC(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&di(n,r,((i,o)=>Gv(i,o)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class xa extends $l{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Xs extends $l{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function E_(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function bC(s,e,t){const n=new Map;$(s.length===t.length,32656,{T:t.length,P:s.length});for(let r=0;r<t.length;r++){const i=s[r],o=i.transform,a=e.data.field(i.field);n.set(i.field,Mv(o,a,t[r]))}return n}function NC(s,e,t){const n=new Map;for(const r of s){const i=r.transform,o=t.data.field(r.field);n.set(r.field,xv(i,o,e))}return n}class JB extends $l{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jv extends $l{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class al{constructor(e,t){this.position=e,this.inclusive=t}}function OC(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const i=e[r],o=s.position[r];if(i.field.isKeyField()?n=X.comparator(X.fromName(o.referenceValue),t.key):n=Ht(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function LC(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!sn(s.position[t],e.position[t]))return!1;return!0}/**
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
 */class y_{}class Ye extends y_{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Wv(e,t,n):t==="array-contains"?new Qv(e,n):t==="in"?new $v(e,n):t==="not-in"?new Yv(e,n):t==="array-contains-any"?new Xv(e,n):new Ye(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Kv(e,n):new zv(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ht(t,this.value)):t!==null&&et(this.value)===et(t)&&this.matchesComparison(Ht(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends y_{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new Bn(e,t)}matches(e){return I_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function I_(s){return s.op==="and"}function D_(s){return Jv(s)&&I_(s)}function Jv(s){for(const e of s.filters)if(e instanceof Bn)return!1;return!0}function tB(s){if(s instanceof Ye)return s.field.canonicalString()+s.op.toString()+gi(s.value);if(D_(s))return s.filters.map((e=>tB(e))).join(",");{const e=s.filters.map((t=>tB(t))).join(",");return`${s.op}(${e})`}}function w_(s,e){return s instanceof Ye?(function(n,r){return r instanceof Ye&&n.op===r.op&&n.field.isEqual(r.field)&&sn(n.value,r.value)})(s,e):s instanceof Bn?(function(n,r){return r instanceof Bn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce(((i,o,a)=>i&&w_(o,r.filters[a])),!0):!1})(s,e):void ne(19439)}function T_(s){return s instanceof Ye?(function(t){return`${t.field.canonicalString()} ${t.op} ${gi(t.value)}`})(s):s instanceof Bn?(function(t){return t.op.toString()+" {"+t.getFilters().map(T_).join(" ,")+"}"})(s):"Filter"}class Wv extends Ye{constructor(e,t,n){super(e,t,n),this.key=X.fromName(n.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class Kv extends Ye{constructor(e,t){super(e,"in",t),this.keys=v_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class zv extends Ye{constructor(e,t){super(e,"not-in",t),this.keys=v_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function v_(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>X.fromName(n.referenceValue)))}class Qv extends Ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return mi(t)&&ta(t.arrayValue,this.value)}}class $v extends Ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ta(this.value.arrayValue,t)}}class Yv extends Ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ta(this.value.arrayValue,t)}}class Xv extends Ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!mi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>ta(this.value.arrayValue,n)))}}/**
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
 */class oa{constructor(e,t="asc"){this.field=e,this.dir=t}}function Zv(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new _e(0,0))}static max(){return new ie(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t,n,r,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new mt(e,0,ie.min(),ie.min(),ie.min(),vt.empty(),0)}static newFoundDocument(e,t,n,r){return new mt(e,1,t,ie.min(),n,r,0)}static newNoDocument(e,t){return new mt(e,2,t,ie.min(),ie.min(),vt.empty(),0)}static newUnknownDocument(e,t){return new mt(e,3,t,ie.min(),ie.min(),vt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */const aa=-1;function eA(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=ie.fromTimestamp(n===1e9?new _e(t+1,0):new _e(t,n));return new Gs(r,X.empty(),e)}function tA(s){return new Gs(s.readTime,s.key,aa)}class Gs{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Gs(ie.min(),X.empty(),aa)}static max(){return new Gs(ie.max(),X.empty(),aa)}}function nA(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(s.documentKey,e.documentKey),t!==0?t:fe(s.largestBatchId,e.largestBatchId))}/**
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
 */class sA{constructor(e,t=null,n=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function FC(s,e=null,t=[],n=[],r=null,i=null,o=null){return new sA(s,e,t,n,r,i,o)}function A_(s){const e=ae(s);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>tB(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Kl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>gi(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>gi(n))).join(",")),e.R=t}return e.R}function R_(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!Zv(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!w_(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!LC(s.startAt,e.startAt)&&LC(s.endAt,e.endAt)}function hr(s){return!!s.isCorePipeline}function S_(s){return!!s.path&&X.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t=null,n=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function rA(s,e,t,n,r,i,o,a){return new bi(s,e,t,n,r,i,o,a)}function Yl(s){return new bi(s)}function kC(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function iA(s){return X.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}function P_(s){return s.collectionGroup!==null}function Oo(s){const e=ae(s);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ze(Gt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new oa(i,n))})),t.has(Gt.keyField().canonicalString())||e.A.push(new oa(Gt.keyField(),n))}return e.A}function wn(s){const e=ae(s);return e.V||(e.V=oA(e,Oo(s))),e.V}function oA(s,e){if(s.limitType==="F")return FC(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new oa(r.field,i)}));const t=s.endAt?new al(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new al(s.startAt.position,s.startAt.inclusive):null;return FC(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function nB(s,e){const t=s.filters.concat([e]);return new bi(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function aA(s,e){const t=s.explicitOrderBy.concat([e]);return new bi(s.path,s.collectionGroup,t,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}function cl(s,e,t){return new bi(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function cA(s,e){return R_(wn(s),wn(e))&&s.limitType===e.limitType}function Lo(s){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((r=>T_(r))).join(", ")}]`),Kl(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>gi(r))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>gi(r))).join(",")),`Target(${n})`})(wn(s))}; limitType=${s.limitType})`}function Xl(s,e){return e.isFoundDocument()&&(function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):X.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(s,e)&&(function(n,r){for(const i of Oo(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(s,e)&&(function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0})(s,e)&&(function(n,r){return!(n.startAt&&!(function(o,a,l){const u=OC(o,a,l);return o.inclusive?u<=0:u<0})(n.startAt,Oo(n),r)||n.endAt&&!(function(o,a,l){const u=OC(o,a,l);return o.inclusive?u>=0:u>0})(n.endAt,Oo(n),r))})(s,e)}function WB(s){return(e,t)=>{let n=!1;for(const r of Oo(s)){const i=lA(r,e,t);if(i!==0)return i;n=n||r.field.isKeyField()}return 0}}function lA(s,e,t){const n=s.field.isKeyField()?X.comparator(e.key,t.key):(function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Ht(l,u):ne(42886)})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return ne(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,Ce;function hA(s){switch(s){case k.OK:return ne(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return ne(15467,{code:s})}}function b_(s){if(s===void 0)return ts("GRPC error has no .code"),k.UNKNOWN;switch(s){case Ke.OK:return k.OK;case Ke.CANCELLED:return k.CANCELLED;case Ke.UNKNOWN:return k.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return k.INTERNAL;case Ke.UNAVAILABLE:return k.UNAVAILABLE;case Ke.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ke.NOT_FOUND:return k.NOT_FOUND;case Ke.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ke.ABORTED:return k.ABORTED;case Ke.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ke.DATA_LOSS:return k.DATA_LOSS;default:return ne(39323,{code:s})}}(Ce=Ke||(Ke={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ys(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return r_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=new je(X.comparator);function xt(){return BA}const N_=new je(X.comparator);function ei(...s){let e=N_;for(const t of s)e=e.insert(t.key,t);return e}function O_(s){let e=N_;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Is(){return Fo()}function L_(){return Fo()}function Fo(){return new kr((s=>s.toString()),((s,e)=>s.isEqual(e)))}const dA=new je(X.comparator),fA=new Ze(X.comparator);function he(...s){let e=fA;for(const t of s)e=e.add(t);return e}const pA=new Ze(fe);function CA(){return pA}/**
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
 */function gA(){return new TextEncoder}/**
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
 */const mA=new vs([4294967295,4294967295],0);function xC(s){const e=gA().encode(s),t=new Jm;return t.update(e),new Uint8Array(t.digest())}function MC(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vs([t,n],0),new vs([r,i],0)]}class KB{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new To(`Invalid padding: ${t}`);if(n<0)throw new To(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new To(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new To(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=vs.fromNumber(this.p)}v(e,t,n){let r=e.add(t.multiply(vs.fromNumber(n)));return r.compare(mA)===1&&(r=new vs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.p===0)return!1;const t=xC(e),[n,r]=MC(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,r,i);if(!this.D(o))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new KB(i,r,t);return n.forEach((a=>o.insert(a))),o}insert(e){if(this.p===0)return;const t=xC(e),[n,r]=MC(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,r,i);this.C(o)}}C(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class To extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,n,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Va.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ma(ie.min(),r,new je(fe),xt(),xt(),he())}}class Va{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Va(n,t,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t,n,r){this.F=e,this.removedTargetIds=t,this.key=n,this.O=r}}class F_{constructor(e,t){this.targetId=e,this.M=t}}class k_{constructor(e,t,n=Je.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class VC{constructor(e){this.targetId=e,this.N=0,this.L=GC(),this.B=Je.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return this.N!==0}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=he(),t=he(),n=he();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ne(38017,{changeType:i})}})),new Va(this.B,this.U,e,t,n)}G(){this.k=!1,this.L=GC()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,$(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const co="WatchChangeAggregator";class _A{constructor(e){this.X=e,this.ee=new Map,this.te=xt(),this.ne=Rc(),this.re=xt(),this.ie=Rc(),this.se=new je(fe)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,(t=>{const n=this.ee.get(t);if(n)switch(e.state){case 0:this.ce(t)&&n.K(e.resumeToken);break;case 1:n.Y(),n.q||n.G(),n.K(e.resumeToken);break;case 2:n.Y(),n.q||this.removeTarget(t);break;case 3:this.ce(t)&&(n.Z(),n.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),n.K(e.resumeToken));break;default:ne(56790,{state:e.state})}else K(co,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach(((n,r)=>{this.ce(r)&&t(r)}))}Ee(e){var t;return hr(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:S_(e)}he(e){const t=e.targetId,n=e.M.count,r=this.Te(t);if(r){const i=r.target;if(this.Ee(i))if(n===0){const o=new X(hr(i)?Ee.fromString(i.getPipelineDocuments()[0]):i.path);this.ae(t,o,mt.newNoDocument(o,ie.min()))}else $(n===1,20013,"Single document existence filter with count: "+n);else{const o=this.Pe(t);if(o!==n){const a=this.Ie(e),l=a?this.Re(a,e,o):1;if(l!==0){this.le(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,u)}}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=Ms(n).toUint8Array()}catch(l){if(l instanceof a_)return nn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new KB(o,r,i)}catch(l){return nn(l instanceof To?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.p===0?null:a}Re(e,t,n){return t.M.count===n-this.de(e,t.targetId)?0:2}de(e,t){const n=this.X.getRemoteKeysForTarget(t);let r=0;return n.forEach((i=>{const o=this.X.Ve(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.ae(t,i,null),r++)})),r}fe(e){const t=new Map;this.ee.forEach(((i,o)=>{const a=this.Te(o);if(a){if(i.current&&this.Ee(a.target)){const l=hr(a.target)?Ee.fromString(a.target.getPipelineDocuments()[0]):a.target.path,u=new X(l);this.me(u).has(o)||this.pe(o,u)||this.ae(o,u,mt.newNoDocument(u,e))}i.$&&(t.set(o,i.W()),i.G())}}));let n=he();this.ie.forEach(((i,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.Te(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(i))})),this.te.forEach(((i,o)=>o.setReadTime(e))),this.re.forEach(((i,o)=>o.setReadTime(e)));const r=new Ma(e,t,this.se,this.te,this.re,n);return this.te=xt(),this.ne=Rc(),this.re=xt(),this.ie=Rc(),this.se=new je(fe),r}oe(e,t){const n=this.ee.get(e);if(!n||!this.ce(e))return void K(co,`addDocumentToTarget received document for unknown inactive target (${e})`);const r=this.pe(e,t.key)?2:0;n.j(t.key,r),hr(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,n){const r=this.ee.get(e);r&&this.ce(e)?(this.pe(e,t)?r.j(t,1):r.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),n&&(hr(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t,n):this.te=this.te.insert(t,n))):K(co,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const n=t.W();return this.X.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}J(e){let t=this.ee.get(e);t||(K(co,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new VC(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new Ze(fe),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new Ze(fe),this.ne=this.ne.insert(e,t)),t}ce(e){const t=this.Te(e)!==null;return t||K(co,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return t===void 0||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new VC(e)),this.X.getRemoteKeysForTarget(e).forEach((t=>{this.ae(e,t,null)}))}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function Rc(){return new je(X.comparator)}function GC(){return new je(X.comparator)}const EA={asc:"ASCENDING",desc:"DESCENDING"},yA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IA={and:"AND",or:"OR"};class DA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sB(s,e){return s.useProto3Json||Kl(e)?e:{value:e}}function ko(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zB(s){const e=xs(s);return new _e(e.seconds,e.nanos)}function x_(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function Hc(s,e){return ko(s,e.toTimestamp())}function Tn(s){return $(!!s,49232),ie.fromTimestamp(zB(s))}function QB(s,e){return rB(s,e).canonicalString()}function rB(s,e){const t=(function(r){return new Ee(["projects",r.projectId,"databases",r.database])})(s).child("documents");return e===void 0?t:t.child(e)}function M_(s){const e=Ee.fromString(s);return $(q_(e),10190,{key:e.toString()}),e}function ll(s,e){return QB(s.databaseId,e.path)}function Ch(s,e){const t=M_(e);if(t.get(1)!==s.databaseId.projectId)throw new J(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new J(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new X(G_(t))}function V_(s,e){return QB(s.databaseId,e)}function wA(s){const e=M_(s);return e.length===4?Ee.emptyPath():G_(e)}function iB(s){return new Ee(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function G_(s){return $(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function UC(s,e,t){return{name:ll(s,e),fields:t.value.mapValue.fields}}function TA(s,e){let t;if("targetChange"in e){e.targetChange;const n=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ne(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?($(h===void 0||typeof h=="string",58123),Je.fromBase64String(h||"")):($(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Je.fromUint8Array(h||new Uint8Array))})(s,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?k.UNKNOWN:b_(u.code);return new J(h,u.message||"")})(o);t=new k_(n,r,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=Ch(s,n.document.name),i=Tn(n.document.updateTime),o=n.document.createTime?Tn(n.document.createTime):ie.min(),a=new vt({mapValue:{fields:n.document.fields}}),l=mt.newFoundDocument(r,i,o,a),u=n.targetIds||[],h=n.removedTargetIds||[];t=new Uc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=Ch(s,n.document),i=n.readTime?Tn(n.readTime):ie.min(),o=mt.newNoDocument(r,i),a=n.removedTargetIds||[];t=new Uc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=Ch(s,n.document),i=n.removedTargetIds||[];t=new Uc([],i,r,null)}else{if(!("filter"in e))return ne(11601,{we:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:i}=n,o=new uA(r,i),a=n.targetId;t=new F_(a,o)}}return t}function vA(s,e){let t;if(e instanceof xa)t={update:UC(s,e.key,e.value)};else if(e instanceof JB)t={delete:ll(s,e.key)};else if(e instanceof Xs)t={update:UC(s,e.key,e.data),updateMask:kA(e.fieldMask)};else{if(!(e instanceof jv))return ne(16599,{be:e.type});t={verify:ll(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const a=o.transform;if(a instanceof na)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ra)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ia)return{fieldPath:o.field.canonicalString(),increment:a.h};if(a instanceof rl)return{fieldPath:o.field.canonicalString(),minimum:a.h};if(a instanceof il)return{fieldPath:o.field.canonicalString(),maximum:a.h};throw ne(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:Hc(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne(27497)})(s,e.precondition)),t}function AA(s,e){return s&&s.length>0?($(e!==void 0,14353),s.map((t=>(function(r,i){let o=r.updateTime?Tn(r.updateTime):Tn(i);return o.isEqual(ie.min())&&(o=Tn(i)),new Uv(o,r.transformResults||[])})(t,e)))):[]}function RA(s,e){return{documents:[V_(s,e.path)]}}function SA(s,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=V_(s,r);const i=(function(u){if(u.length!==0)return H_(Bn.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(p){return{field:ti(p.field),direction:OA(p.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=sB(s,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Se:t,parent:r}}function PA(s){let e=wA(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){$(n===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=(function(d){const p=U_(d);return p instanceof Bn&&D_(p)?p.getFilters():[p]})(t.where));let o=[];t.orderBy&&(o=(function(d){return d.map((p=>(function(I){return new oa(ni(I.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(I.direction))})(p)))})(t.orderBy));let a=null;t.limit&&(a=(function(d){let p;return p=typeof d=="object"?d.value:d,Kl(p)?null:p})(t.limit));let l=null;t.startAt&&(l=(function(d){const p=!!d.before,g=d.values||[];return new al(g,p)})(t.startAt));let u=null;return t.endAt&&(u=(function(d){const p=!d.before,g=d.values||[];return new al(g,p)})(t.endAt)),rA(e,r,o,i,a,"F",l,u)}function bA(s,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function NA(s,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(s)))}}}}function U_(s){return s.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ni(t.unaryFilter.field);return Ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ni(t.unaryFilter.field);return Ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ni(t.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ni(t.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ne(61313);default:return ne(60726)}})(s):s.fieldFilter!==void 0?(function(t){return Ye.create(ni(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ne(58110);default:return ne(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(t){return Bn.create(t.compositeFilter.filters.map((n=>U_(n))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ne(1026)}})(t.compositeFilter.op))})(s):ne(30097,{filter:s})}function OA(s){return EA[s]}function LA(s){return yA[s]}function FA(s){return IA[s]}function ti(s){return{fieldPath:s.canonicalString()}}function ni(s){return Gt.fromServerFormat(s.fieldPath)}function H_(s){return s instanceof Ye?(function(t){if(t.op==="=="){if(qt(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NAN"}};if(Yt(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(qt(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NOT_NAN"}};if(Yt(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ti(t.field),op:LA(t.op),value:t.value}}})(s):s instanceof Bn?(function(t){const n=t.getFilters().map((r=>H_(r)));return n.length===1?n[0]:{compositeFilter:{op:FA(t.op),filters:n}}})(s):ne(54877,{filter:s})}function kA(s){const e=[];return s.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function q_(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}function j_(s){return!!s&&typeof s._toProto=="function"&&s._protoValueType==="ProtoValue"}function ca(s,e){const t={fields:{}};return e.forEach(((n,r)=>{if(typeof r!="string")throw new Error(`Cannot encode map with non-string key: ${r}`);t.fields[r]=n._toProto(s)})),{mapValue:t}}function J_(s){return{stringValue:s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(s){return new DA(s,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qt(Je.fromBase64String(e))}catch(t){throw new J(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qt(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fa(e,Qt._jsonSchema))return Qt.fromBase64String(e.bytes)}}Qt._jsonSchemaVersion="firestore/bytes/1.0",Qt._jsonSchema={type:Xe("string",Qt._jsonSchemaVersion),bytes:Xe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function W_(){return new Ga(_n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:un._jsonSchemaVersion}}static fromJSON(e){if(Fa(e,un._jsonSchema))return new un(e.latitude,e.longitude)}}un._jsonSchemaVersion="firestore/geoPoint/1.0",un._jsonSchema={type:Xe("string",un._jsonSchemaVersion),latitude:Xe("number"),longitude:Xe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(gt.UNAUTHENTICATED)))}shutdown(){}}class xA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class MA{constructor(e){this.De=e,this.currentUser=gt.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){$(this.Ce===void 0,42304);let n=this.xe;const r=l=>this.xe!==n?(n=this.xe,t(l)):Promise.resolve();let i=new Qn;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new Qn,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await r(this.currentUser)}))},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),o())};this.De.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.De.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qn)}}),0),o()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.xe!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?($(typeof n.accessToken=="string",31837,{Oe:n}),new K_(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string",2055,{Me:e}),new gt(e)}}class VA{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class GA{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n}getToken(){return Promise.resolve(new VA(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable((()=>t(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class HC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UA{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,ke(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){$(this.Ce===void 0,3512);const n=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.$e;return this.$e=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable((()=>n(i)))};const r=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?r(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.Ke)return Promise.resolve(new HC(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?($(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new HC(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function Q_(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
 */class HA{Qe(e){}shutdown(){}}/**
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
 */const qC="ConnectivityMonitor";class jC{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){K(qC,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){K(qC,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sc=null;function oB(){return Sc===null?Sc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Sc++,"0x"+Sc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="RestConnection",qA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class jA{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${n}/databases/${r}`,this.tt=this.databaseId.database===nl?`project_id=${n}`:`project_id=${n}&database_id=${r}`}nt(e,t,n,r,i){const o=oB(),a=this.rt(e,t.toUriEncodedString());K(gh,`Sending RPC '${e}' ${o}:`,a,n);const l={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(l,r,i);const{host:u}=new URL(a),h=Lr(u);return this.st(e,a,l,n,h).then((d=>(K(gh,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw nn(gh,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",n),d}))}_t(e,t,n,r,i,o){return this.nt(e,t,n,r,i)}it(e,t,n){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Pi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),n&&n.headers.forEach(((r,i)=>e[i]=r)),this.databaseInfo._customHeaders)for(const r of Object.keys(this.databaseInfo._customHeaders))e[r]=this.databaseInfo._customHeaders[r]}rt(e,t){const n=qA[e];let r=`${this.Xe}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection",lo=(s,e,t)=>{s.listen(e,(n=>{try{t(n)}catch(r){setTimeout((()=>{throw r}),0)}}))};class ii extends jA{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!ii.yt){const e=Qm();lo(e,zm.STAT_EVENT,(t=>{t.stat===Kh.PROXY?K(pt,"STAT_EVENT: detected buffering proxy"):t.stat===Kh.NOPROXY&&K(pt,"STAT_EVENT: detected no buffering proxy")})),ii.yt=!0}}st(e,t,n,r,i){const o=oB();return new Promise(((a,l)=>{const u=new Wm;u.setWithCredentials(!0),u.listenOnce(Km.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Mc.NO_ERROR:const d=u.getResponseJson();K(pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case Mc.TIMEOUT:K(pt,`RPC '${e}' ${o} timed out`),l(new J(k.DEADLINE_EXCEEDED,"Request time out"));break;case Mc.HTTP_ERROR:const p=u.getStatus();if(K(pt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g==null?void 0:g.error;if(I&&I.status&&I.message){const N=(function(z){const oe=z.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(oe)>=0?oe:k.UNKNOWN})(I.status);l(new J(N,I.message))}else l(new J(k.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new J(k.UNAVAILABLE,"Connection failed."));break;default:ne(9055,{wt:e,streamId:o,bt:u.getLastErrorCode(),St:u.getLastError()})}}finally{K(pt,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);K(pt,`RPC '${e}' ${o} sending request:`,r),u.send(t,"POST",h,n,15)}))}vt(e,t,n){const r=oB(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.it(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");K(pt,`Creating RPC '${e}' stream ${r}: ${u}`,a);const h=o.createWebChannel(u,a);this.Dt(h);let d=!1,p=!1;const g=new JA({ot:I=>{p?K(pt,`Not sending because RPC '${e}' stream ${r} is closed:`,I):(d||(K(pt,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),K(pt,`RPC '${e}' stream ${r} sending:`,I),h.send(I))},ut:()=>h.close()});return lo(h,wo.EventType.OPEN,(()=>{p||(K(pt,`RPC '${e}' stream ${r} transport opened.`),g.Rt())})),lo(h,wo.EventType.CLOSE,(()=>{p||(p=!0,K(pt,`RPC '${e}' stream ${r} transport closed`),g.Vt(),this.xt(h))})),lo(h,wo.EventType.ERROR,(I=>{p||(p=!0,nn(pt,`RPC '${e}' stream ${r} transport errored. Name:`,I.name,"Message:",I.message),g.Vt(new J(k.UNAVAILABLE,"The operation could not be completed")))})),lo(h,wo.EventType.MESSAGE,(I=>{var N;if(!p){const V=I.data[0];$(!!V,16349);const z=V,oe=(z==null?void 0:z.error)||((N=z[0])==null?void 0:N.error);if(oe){K(pt,`RPC '${e}' stream ${r} received error:`,oe);const De=oe.status;let We=(function(A){const E=Ke[A];if(E!==void 0)return b_(E)})(De),st=oe.message;De==="NOT_FOUND"&&st.includes("database")&&st.includes("does not exist")&&st.includes(this.databaseId.database)&&nn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),We===void 0&&(We=k.INTERNAL,st="Unknown error status: "+De+" with message "+oe.message),p=!0,g.Vt(new J(We,st)),h.close()}else K(pt,`RPC '${e}' stream ${r} received:`,V),g.dt(V)}})),ii.gt(),setTimeout((()=>{g.At()}),0),g}terminate(){this.ft.forEach((e=>e.close())),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter((t=>t===e))}it(e,t,n){super.it(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return $m()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(s){return new ii(s)}ii.yt=!1;class $_{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=n,this.Ot=r,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),n=Math.max(0,Date.now()-this.Bt),r=Math.max(0,t-n);r>0&&K("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,r,(()=>(this.Bt=Date.now(),e()))),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="PersistentStream";class Y_{constructor(e,t,n,r,i,o,a,l){this.Ct=e,this.Kt=n,this.Qt=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new $_(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,(()=>this.tn())))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(ts(t.toString()),ts("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,r])=>{this.Wt===t&&this.un(n,r)}),(n=>{e((()=>{const r=new J(k.UNKNOWN,"Fetching auth token failed: "+n.message);return this.cn(r)}))}))}un(e,t){const n=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct((()=>{n((()=>this.listener.ct()))})),this.stream.Et((()=>{n((()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,(()=>(this.Yt()&&(this.state=3),Promise.resolve()))),this.listener.Et())))})),this.stream.Tt((r=>{n((()=>this.cn(r)))})),this.stream.onMessage((r=>{n((()=>++this.jt==1?this.hn(r):this.onNext(r)))}))}Zt(){this.state=5,this.Ht.kt((async()=>{this.state=0,this.start()}))}cn(e){return K(JC,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget((()=>this.Wt===e?t():(K(JC,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class KA extends Y_{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=TA(this.serializer,e),n=(function(i){if(!("targetChange"in i))return ie.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?Tn(o.readTime):ie.min()})(e);return this.listener.Tn(t,n)}Pn(e){const t={};t.database=iB(this.serializer),t.addTarget=(function(i,o){let a;const l=o.target;if(a=hr(l)?{pipelineQuery:NA(i,l)}:S_(l)?{documents:RA(i,l)}:{query:SA(i,l).Se},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=x_(i,o.resumeToken);const u=sB(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ie.min())>0){a.readTime=ko(i,o.snapshotVersion.toTimestamp());const u=sB(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const n=bA(this.serializer,e);n&&(t.labels=n),this.nn(t)}In(e){const t={};t.database=iB(this.serializer),t.removeTarget=e,this.nn(t)}}class zA extends Y_{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return $(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){$(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=AA(e.writeResults,e.commitTime),n=Tn(e.commitTime);return this.listener.dn(n,t)}fn(){const e={};e.database=iB(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>vA(this.serializer,n)))};this.nn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{}class $A extends QA{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.mn=!1}pn(){if(this.mn)throw new J(k.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,n,r){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.nt(e,rB(t,n),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(k.UNKNOWN,i.toString())}))}_t(e,t,n,r,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection._t(e,rB(t,n),r,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(k.UNKNOWN,o.toString())}))}terminate(){this.mn=!0,this.connection.terminate()}}function YA(s,e,t,n){return new $A(s,e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="ComponentProvider",WC=new Map;function ZA(s,e,t,n,r){return new bv(s,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Q_(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,n,r._customHeaders,r.grpcFlowControlWindow)}/**
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
 */const KC={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},X_=41943040;class Ft{static withCacheSize(e){return new Ft(e,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}Ft.DEFAULT_COLLECTION_PERCENTILE=10,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ft.DEFAULT=new Ft(X_,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ft.DISABLED=new Ft(-1,0,0);/**
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
 */class eu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.gn(n),this.yn=n=>t.writeSequenceNumber(n))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}eu.wn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(s){if(s.code!==k.FAILED_PRECONDITION||s.message!==eR)throw s;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x(((n,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):x.reject(t)}static resolve(e){return new x(((t,n)=>{t(e)}))}static reject(e){return new x(((t,n)=>{n(e)}))}static waitFor(e){return new x(((t,n)=>{let r=0,i=0,o=!1;e.forEach((a=>{++r,a.next((()=>{++i,o&&i===r&&t()}),(l=>n(l)))})),o=!0,i===r&&t()}))}static or(e){let t=x.resolve(!1);for(const n of e)t=t.next((r=>r?x.resolve(r):n()));return t}static forEach(e,t){const n=[];return e.forEach(((r,i)=>{n.push(t.call(this,r,i))})),this.waitFor(n)}static mapArray(e,t){return new x(((n,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next((h=>{o[u]=h,++a,a===i&&n(o)}),(h=>r(h)))}}))}static doWhile(e,t){return new x(((n,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):n()};i()}))}}function nR(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Oi(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="LruGarbageCollector",sR=1048576;function QC([s,e],[t,n]){const r=fe(s,t);return r===0?fe(e,n):r}class rR{constructor(e){this.Yn=e,this.buffer=new Ze(QC),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();QC(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iR{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){K(zC,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Oi(t)?K(zC,"Ignoring IndexedDB error during garbage collection: ",t):await Ni(t)}await this.nr(3e5)}))}}class oR{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return x.resolve(eu.wn);const n=new rR(t);return this.rr.forEachTarget(e,(r=>n.er(r.sequenceNumber))).next((()=>this.rr.sr(e,(r=>n.er(r))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.rr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(KC)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),KC):this._r(e,t)))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let n,r,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(e,r)))).next((d=>(n=d,a=Date.now(),this.removeTargets(e,n,t)))).next((d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,n)))).next((d=>(u=Date.now(),Xr()<=de.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:d}))))}}function aR(s,e){return new oR(s,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="firestore.googleapis.com",$C=!0;class YC{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Z_,this.ssl=$C}else this.host=e.host,this.ssl=e.ssl??$C;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=X_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sR)throw new J(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(o_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q_(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new J(k.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new J(k.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new J(k.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new J(k.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,r){return n.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(n,r){if(n===r)return!0;if(!n||!r)return!1;const i=Object.keys(n),o=Object.keys(r);if(i.length!==o.length)return!1;for(const a of i)if(n[a]!==r[a])return!1;return!0})(this._customHeaders,e._customHeaders)}}let tu=class{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new YC({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new YC(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new z_;switch(n.type){case"firstParty":return new GA(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new J(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=WC.get(t);n&&(K(XA,"Removing Datastore"),WC.delete(t),n.terminate())})(this),Promise.resolve()}};function $B(s,e,t,n={}){var u;s=Rt(s,tu);const r=Lr(e),i=s._getSettings(),o={...i,emulatorOptions:s._getEmulatorOptions()},a=`${e}:${t}`;r&&FB(`https://${a}`),i.host!==Z_&&i.host!==a&&nn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:r,emulatorOptions:n};if(!Fs(l,o)&&(s._setSettings(l),n.mockUserToken)){let h,d;if(typeof n.mockUserToken=="string")h=n.mockUserToken,d=gt.MOCK_USER;else{h=xm(n.mockUserToken,(u=s._app)==null?void 0:u.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new J(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new gt(p)}s._authCredentials=new xA(new K_(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Nn(this.firestore,e,this._query)}}class xe{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}toJSON(){return{type:xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Fa(t,xe._jsonSchema))return new xe(e,n||null,new X(Ee.fromString(t.referencePath)))}}xe._jsonSchemaVersion="firestore/documentReference/1.0",xe._jsonSchema={type:Xe("string",xe._jsonSchemaVersion),referencePath:Xe("string")};class $n extends Nn{constructor(e,t,n){super(e,t,Yl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new X(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function la(s,e,...t){if(s=te(s),i_("collection","path",e),s instanceof tu){const n=Ee.fromString(e,...t);return DC(n),new $n(s,null,n)}{if(!(s instanceof xe||s instanceof $n))throw new J(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Ee.fromString(e,...t));return DC(n),new $n(s.firestore,null,n)}}function _t(s,e,...t){if(s=te(s),arguments.length===1&&(e=jl.newId()),i_("doc","path",e),s instanceof tu){const n=Ee.fromString(e,...t);return IC(n),new xe(s,null,new X(n))}{if(!(s instanceof xe||s instanceof $n))throw new J(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Ee.fromString(e,...t));return IC(n),new xe(s.firestore,s instanceof $n?s.converter:null,new X(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class St{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:St._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fa(e,St._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new St(e.vectorValues);throw new J(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}St._jsonSchemaVersion="firestore/vectorValue/1.0",St._jsonSchema={type:Xe("string",St._jsonSchemaVersion),vectorValues:Xe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=/^__.*__$/;class lR{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Xs(e,this.data,this.fieldMask,t,this.fieldTransforms):new xa(e,this.data,t,this.fieldTransforms)}}class eE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Xs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function tE(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne(40011,{dataSource:s})}}class YB{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new YB({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ul(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(tE(this.dataSource)&&cR.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class uR{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Zl(e)}createContext(e,t,n,r=!1){return new YB({dataSource:e,methodName:t,targetDoc:n,path:Gt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nu(s){const e=s._freezeSettings(),t=Zl(s._databaseId);return new uR(s._databaseId,!!e.ignoreUndefinedProperties,t)}function nE(s,e,t,n,r,i={}){const o=s.createContext(i.merge||i.mergeFields?2:0,e,t,r);ZB("Data must be an object, but it was:",o,n);const a=sE(n,o);let l,u;if(i.merge)l=new $t(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=Hs(e,d,t);if(!o.contains(p))throw new J(k.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);aE(h,p)||h.push(p)}l=new $t(h),u=o.fieldTransforms.filter((d=>l.covers(d.field)))}else l=null,u=o.fieldTransforms;return new lR(new vt(a),l,u)}class Ha extends Ua{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ha}}class XB extends Ua{_toFieldTransform(e){return new Vv(e.path,new na)}isEqual(e){return e instanceof XB}}function hR(s,e,t,n){const r=s.createContext(1,e,t);ZB("Data must be an object, but it was:",r,n);const i=[],o=vt.empty();Ys(n,((l,u)=>{const h=oE(e,l,t);u=te(u);const d=r.childContextForFieldPath(h);if(u instanceof Ha)i.push(h);else{const p=Us(u,d);p!=null&&(i.push(h),o.set(h,p))}}));const a=new $t(i);return new eE(o,a,r.fieldTransforms)}function BR(s,e,t,n,r,i){const o=s.createContext(1,e,t),a=[Hs(e,n,t)],l=[r];if(i.length%2!=0)throw new J(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Hs(e,i[p])),l.push(i[p+1]);const u=[],h=vt.empty();for(let p=a.length-1;p>=0;--p)if(!aE(u,a[p])){const g=a[p];let I=l[p];I=te(I);const N=o.childContextForFieldPath(g);if(I instanceof Ha)u.push(g);else{const V=Us(I,N);V!=null&&(u.push(g),h.set(g,V))}}const d=new $t(u);return new eE(h,d,o.fieldTransforms)}function dR(s,e,t,n=!1){return Us(t,s.createContext(n?4:3,e))}function Us(s,e,t){if(iE(s=te(s)))return ZB("Unsupported field value:",e,s),sE(s,e);if(s instanceof Ua)return(function(r,i){if(!tE(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,i){const o=[];let a=0;for(const l of r){let u=Us(l,i.childContextForArray(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}})(s,e)}return(function(r,i,o){if((r=te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qB(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=_e.fromDate(r);return{timestampValue:ko(i.serializer,a)}}if(r instanceof _e){const a=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ko(i.serializer,a)}}if(rE(r)){const a=_e.fromInstant(r),l=new _e(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:ko(i.serializer,l)}}if(r instanceof un)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qt)return{bytesValue:x_(i.serializer,r._byteString)};if(r instanceof xe){const a=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw i.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:QB(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof St)return(function(l,u){const h=l instanceof St?l.toArray():l;return{mapValue:{fields:{[B_]:{stringValue:d_},[ea]:{arrayValue:{values:h.map((p=>{if(typeof p!="number")throw u.createError("VectorValues must only contain numeric values.");return zl(u.serializer,p)}))}}}}}})(r,i);if(j_(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Jl(r)}`)})(s,e)}function sE(s,e){const t={};return r_(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ys(s,((n,r)=>{const i=Us(r,e.childContextForField(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function rE(s){if(typeof s!="object"||s===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&s instanceof Temporal.Instant)return!0;const e=s;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function iE(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof _e||s instanceof un||s instanceof Qt||s instanceof xe||s instanceof Ua||s instanceof St||rE(s)||j_(s))}function ZB(s,e,t){if(!iE(t)||!La(t)){const n=Jl(t);throw n==="an object"?e.createError(s+" a custom object"):e.createError(s+" "+n)}}function Hs(s,e,t){if((e=te(e))instanceof Ga)return e._internalPath;if(typeof e=="string")return oE(s,e);throw ul("Field path arguments must be of type string or ",s,!1,void 0,t)}const fR=new RegExp("[~\\*/\\[\\]]");function oE(s,e,t){if(e.search(fR)>=0)throw ul(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new Ga(...e.split("."))._internalPath}catch{throw ul(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function ul(s,e,t,n,r){const i=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${r}`),l+=")"),new J(k.INVALID_ARGUMENT,a+s+l)}function aE(s,e){return s.some((t=>t.isEqual(e)))}function cE(s){return typeof s._readUserData=="function"}/**
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
 */class It{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=vt.empty();for(const r in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(r)){const i=this.optionDefinitions[r];if(r in e){const o=e[r];let a;i.nestedOptions&&La(o)?a={mapValue:{fields:new It(i.nestedOptions).getOptionsProto(t,o)}}:o&&(a=Us(o,t)??void 0),a&&n.set(Gt.fromServerFormat(i.serverName),a)}}return n}getOptionsProto(e,t,n){const r=this._getKnownOptions(t,e);if(n){const i=new Map(Rv(n,((o,a)=>[Gt.fromServerFormat(a),o!==void 0?Us(o,e):null])));r.setAll(i)}return r.value.mapValue.fields??{}}}/**
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
 */function pR(s){return typeof s=="object"&&s!==null&&!!("nullValue"in s&&(s.nullValue===null||s.nullValue==="NULL_VALUE")||"booleanValue"in s&&(s.booleanValue===null||typeof s.booleanValue=="boolean")||"integerValue"in s&&(s.integerValue===null||typeof s.integerValue=="number"||typeof s.integerValue=="string")||"doubleValue"in s&&(s.doubleValue===null||typeof s.doubleValue=="number")||"timestampValue"in s&&(s.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(s.timestampValue))||"stringValue"in s&&(s.stringValue===null||typeof s.stringValue=="string")||"bytesValue"in s&&(s.bytesValue===null||s.bytesValue instanceof Uint8Array)||"referenceValue"in s&&(s.referenceValue===null||typeof s.referenceValue=="string")||"geoPointValue"in s&&(s.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(s.geoPointValue))||"arrayValue"in s&&(s.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(s.arrayValue))||"mapValue"in s&&(s.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!La(t.fields))})(s.mapValue))||"fieldReferenceValue"in s&&(s.fieldReferenceValue===null||typeof s.fieldReferenceValue=="string")||"functionValue"in s&&(s.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(s.functionValue))||"pipelineValue"in s&&(s.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(s.pipelineValue)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(){return new Ha("deleteField")}function uE(){return new XB("serverTimestamp")}function hE(s){return new St(s)}/**
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
 */function q(s){let e;return s instanceof xr?s:(e=La(s)?ER(s):s instanceof Array?yR(s):BE(s,void 0),e)}function mh(s){if(s instanceof xr)return s;if(s instanceof St)return ua(s);if(Array.isArray(s))return ua(hE(s));throw new Error("Unsupported value: "+typeof s)}function ed(s){return Lv(s)?qc(s):q(s)}class xr{constructor(){this._protoValueType="ProtoValue"}add(e){return new F("add",[this,q(e)],"add")}asBoolean(){if(this instanceof qs)return this;if(this instanceof Fi)return new fE(this);if(this instanceof Li)return new _R(this);if(this instanceof F)return new dE(this);throw new J("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new F("subtract",[this,q(e)],"subtract")}multiply(e){return new F("multiply",[this,q(e)],"multiply")}divide(e){return new F("divide",[this,q(e)],"divide")}mod(e){return new F("mod",[this,q(e)],"mod")}equal(e){return new F("equal",[this,q(e)],"equal").asBoolean()}notEqual(e){return new F("not_equal",[this,q(e)],"notEqual").asBoolean()}lessThan(e){return new F("less_than",[this,q(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new F("less_than_or_equal",[this,q(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new F("greater_than",[this,q(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new F("greater_than_or_equal",[this,q(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map((r=>q(r)));return new F("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new F("array_contains",[this,q(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new vo(e.map(q),"arrayContainsAll"):e;return new F("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new vo(e.map(q),"arrayContainsAny"):e;return new F("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new F("array_reverse",[this])}arrayLength(){return new F("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new vo(e.map(q),"equalAny"):e;return new F("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new vo(e.map(q),"notEqualAny"):e;return new F("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new F("exists",[this],"exists").asBoolean()}charLength(){return new F("char_length",[this],"charLength")}like(e){return new F("like",[this,q(e)],"like").asBoolean()}regexContains(e){return new F("regex_contains",[this,q(e)],"regexContains").asBoolean()}regexFind(e){return new F("regex_find",[this,q(e)],"regexFind")}regexFindAll(e){return new F("regex_find_all",[this,q(e)],"regexFindAll")}regexMatch(e){return new F("regex_match",[this,q(e)],"regexMatch").asBoolean()}stringContains(e){return new F("string_contains",[this,q(e)],"stringContains").asBoolean()}startsWith(e){return new F("starts_with",[this,q(e)],"startsWith").asBoolean()}endsWith(e){return new F("ends_with",[this,q(e)],"endsWith").asBoolean()}toLower(){return new F("to_lower",[this],"toLower")}toUpper(){return new F("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(q(e)),new F("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(q(e)),new F("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(q(e)),new F("rtrim",t,"rtrim")}type(){return new F("type",[this])}isType(e){return new F("is_type",[this,ua(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(q);return new F("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new F("string_index_of",[this,q(e)],"stringIndexOf")}stringRepeat(e){return new F("string_repeat",[this,q(e)],"stringRepeat")}stringReplaceAll(e,t){return new F("string_replace_all",[this,q(e),q(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new F("string_replace_one",[this,q(e),q(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(q);return new F("concat",[this,...n],"concat")}reverse(){return new F("reverse",[this],"reverse")}arrayFilter(e,t){return new F("array_filter",[this,q(e),t],"arrayFilter")}arrayTransform(e,t){return new F("array_transform",[this,q(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new F("array_transform",[this,q(e),q(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,q(e)];return t!==void 0&&n.push(q(t)),new F("array_slice",n,"arraySlice")}arrayFirst(){return new F("array_first",[this],"arrayFirst")}arrayFirstN(e){return new F("array_first_n",[this,q(e)],"arrayFirstN")}arrayLast(){return new F("array_last",[this],"arrayLast")}arrayLastN(e){return new F("array_last_n",[this,q(e)],"arrayLastN")}arrayMaximum(){return new F("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new F("maximum_n",[this,q(e)],"arrayMaximumN")}arrayMinimum(){return new F("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new F("minimum_n",[this,q(e)],"arrayMinimumN")}arrayIndexOf(e){return new F("array_index_of",[this,q(e),q("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new F("array_index_of",[this,q(e),q("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new F("array_index_of_all",[this,q(e)],"arrayIndexOfAll")}byteLength(){return new F("byte_length",[this],"byteLength")}ceil(){return new F("ceil",[this])}floor(){return new F("floor",[this])}abs(){return new F("abs",[this])}exp(){return new F("exp",[this])}mapGet(e){return new F("map_get",[this,ua(e)],"mapGet")}mapSet(e,t,...n){const r=[this,q(e),q(t),...n.map(q)];return new F("map_set",r,"mapSet")}mapKeys(){return new F("map_keys",[this],"mapKeys")}mapValues(){return new F("map_values",[this],"mapValues")}mapEntries(){return new F("map_entries",[this],"mapEntries")}getField(e){return new F("get_field",[this,q(e)],"get_field")}count(){return zt._create("count",[this],"count")}sum(){return zt._create("sum",[this],"sum")}average(){return zt._create("average",[this],"average")}minimum(){return zt._create("minimum",[this],"minimum")}maximum(){return zt._create("maximum",[this],"maximum")}first(){return zt._create("first",[this],"first")}last(){return zt._create("last",[this],"last")}arrayAgg(){return zt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return zt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return zt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new F("maximum",[this,...n.map(q)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new F("minimum",[this,...n.map(q)],"minimum")}vectorLength(){return new F("vector_length",[this],"vectorLength")}cosineDistance(e){return new F("cosine_distance",[this,mh(e)],"cosineDistance")}dotProduct(e){return new F("dot_product",[this,mh(e)],"dotProduct")}euclideanDistance(e){return new F("euclidean_distance",[this,mh(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new F("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new F("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new F("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new F("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new F("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new F("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new F("timestamp_add",[this,q(e),q(t)],"timestampAdd")}timestampSubtract(e,t){return new F("timestamp_subtract",[this,q(e),q(t)],"timestampSubtract")}timestampDiff(e,t){return new F("timestamp_diff",[this,ed(e),q(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,q(e)];return t&&n.push(q(t)),new F("timestamp_extract",n,"timestampExtract")}documentId(){return new F("document_id",[this],"documentId")}parent(){return new F("parent",[this],"parent")}substring(e,t){const n=q(e);return new F("substring",t===void 0?[this,n]:[this,n,q(t)],"substring")}arrayGet(e){return new F("array_get",[this,q(e)],"arrayGet")}isError(){return new F("is_error",[this],"isError").asBoolean()}ifError(e){const t=new F("if_error",[this,q(e)],"ifError");return e instanceof qs?t.asBoolean():t}isAbsent(){return new F("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new F("map_remove",[this,q(e)],"mapRemove")}mapMerge(e,...t){const n=q(e),r=t.map(q);return new F("map_merge",[this,n,...r],"mapMerge")}pow(e){return new F("pow",[this,q(e)])}trunc(e){return e===void 0?new F("trunc",[this]):new F("trunc",[this,q(e)],"trunc")}round(e){return e===void 0?new F("round",[this]):new F("round",[this,q(e)],"round")}collectionId(){return new F("collection_id",[this])}length(){return new F("length",[this])}ln(){return new F("ln",[this])}sqrt(){return new F("sqrt",[this])}stringReverse(){return new F("string_reverse",[this])}ifAbsent(e){return new F("if_absent",[this,q(e)],"ifAbsent")}ifNull(e){return new F("if_null",[this,q(e)],"ifNull")}coalesce(e,...t){return new F("coalesce",[this,q(e),...t.map(q)],"coalesce")}join(e){return new F("join",[this,q(e)],"join")}log10(){return new F("log10",[this])}arraySum(){return new F("sum",[this])}split(e){return new F("split",[this,q(e)])}timestampTruncate(e,t){const n=[this,q(e)];return t&&n.push(q(t)),new F("timestamp_trunc",n)}ascending(){return IR(this)}descending(){return DR(this)}as(e){return new gR(this,e,"as")}}class zt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const r=new zt(e,t);return r._methodName=n,r}as(e){return new CR(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class CR{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class gR{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class vo extends xr{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map((t=>t._toProto(e)))}}}_readUserData(e){this.cr.forEach((t=>t._readUserData(e)))}}class Li extends xr{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new F("geo_distance",[this,q(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function qc(s){return mR(s,"field")}function mR(s,e){return new Li(typeof s=="string"?_n===s?W_()._internalPath:Hs("field",s):s._internalPath,e)}class Fi extends xr{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Fi(e,void 0);return t._protoValue=e,t}_toProto(e){return $(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,pR(this._protoValue)||(this._protoValue=Us(this.value,e))}}function ua(s,e){return BE(s,"constant")}function BE(s,e){const t=new Fi(s,e);return typeof s=="boolean"?new fE(t):t}class F extends xr{constructor(e,t,n,r){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),r!==void 0&&(this._options=r)}get _optionsUtil(){return new It({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((n=>n._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class qs extends xr{get _methodName(){return this._expr._methodName}countIf(){return zt._create("count_if",[this],"countIf")}not(){return new F("not",[this],"not").asBoolean()}conditional(e,t){return new F("conditional",[this,e,t],"conditional")}ifError(e){const t=q(e),n=new F("if_error",[this,t],"ifError");return t instanceof qs?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class dE extends qs{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class fE extends qs{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class _R extends qs{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function ER(s,e){const t=[];for(const n in s)if(Object.prototype.hasOwnProperty.call(s,n)){const r=s[n];t.push(ua(n)),t.push(q(r))}return new F("map",t,"map")}function yR(s){return(function(t,n){return new F("array",t.map((r=>q(r))),n)})(s,"array")}function IR(s){return new pE(ed(s),"ascending","ascending")}function DR(s){return new pE(ed(s),"descending","descending")}class pE{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:J_(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class Xt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class CE extends Xt{get _name(){return"add_fields"}get _optionsUtil(){return new It({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[ca(e,this.fields)]}}_readUserData(e){super._readUserData(e),js(this.fields,e)}}class gE extends Xt{get _name(){return"aggregate"}get _optionsUtil(){return new It({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[ca(e,this.accumulators),ca(e,this.groups)]}}_readUserData(e){super._readUserData(e),js(this.groups,e),js(this.accumulators,e)}}class mE extends Xt{get _name(){return"distinct"}get _optionsUtil(){return new It({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[ca(e,this.groups)]}}_readUserData(e){super._readUserData(e),js(this.groups,e)}}class su extends Xt{get _name(){return"collection"}get _optionsUtil(){return new It({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class ru extends Xt{get _name(){return"collection_group"}get _optionsUtil(){return new It({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class td extends Xt{get _name(){return"database"}get _optionsUtil(){return new It({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class nd extends Xt{get _name(){return"documents"}get _optionsUtil(){return new It({})}constructor(e,t){if(super(t),!e||e.length===0)throw new J(k.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map((i=>i.startsWith("/")?i:"/"+i)),r=new Set(n);if(r.size!==n.length)throw new J(k.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=n,this.Pr=r}_toProto(e){return{...super._toProto(e),args:this.Tr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class iu extends Xt{get _name(){return"where"}get _optionsUtil(){return new It({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),js(this.condition,e)}}class Rr extends Xt{get _name(){return"limit"}get _optionsUtil(){return new It({})}constructor(e,t){$(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[qB(e,this.limit)]}}}class XC extends Xt{get _name(){return"offset"}get _optionsUtil(){return new It({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[qB(e,this.offset)]}}}class wR extends Xt{get _name(){return"select"}get _optionsUtil(){return new It({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[ca(e,this.selections)]}}_readUserData(e){super._readUserData(e),js(this.selections,e)}}class Hn extends Xt{get _name(){return"sort"}get _optionsUtil(){return new It({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),js(this.orderings,e)}}class sd extends Xt{get _name(){return"replace_with"}get _optionsUtil(){return new It({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),J_(sd.Ir)]}}_readUserData(e){super._readUserData(e),js(this.map,e)}}sd.Ir="full_replace";function js(s,e){return cE(s)?s._readUserData(e):Array.isArray(s)?s.forEach((t=>t._readUserData(e))):s instanceof Map?s.forEach((t=>t._readUserData(e))):Object.values(s).forEach((t=>t._readUserData(e))),s}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,n,r){this._db=e,this.userDataReader=t,this._userDataWriter=n,this.stages=r}Vr(e,t){const n=this.userDataReader.createContext(3,e);return cE(t)?t._readUserData(n):Array.isArray(t)?t.forEach((r=>r._readUserData(n))):t.forEach((r=>r._readUserData(n))),t}where(e){const t=this.stages.map((n=>n));return this.Vr("where",e),t.push(new iu(e,{})),new xo(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((n=>n));return t.push(new Rr(e,{})),new xo(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const n=this.stages.map((r=>r));return"orderings"in e?n.push(new Hn(this.Vr("sort",e.orderings),{})):n.push(new Hn(this.Vr("sort",[e,...t]),{})),new xo(this._db,this.userDataReader,this._userDataWriter,n)}dr(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class Tt{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return ou(this)}getPipelineCollectionGroup(){return rd(this)}getPipelineCollectionId(){return TR(this)}getPipelineDocuments(){return aB(this)}getPipelineFlavor(){return(function(t){let n="exact";return t.stages.forEach(((r,i)=>{r._name!==mE.name&&r._name!==gE.name||(n="keyless"),r._name===wR.name&&n==="exact"&&(n="augmented"),r._name===CE.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")})),n})(this)}getPipelineSourceType(){return Rs(this)}}function Rs(s){const e=s.stages[0];return e instanceof su||e instanceof ru||e instanceof td||e instanceof nd?e._name:"unknown"}function ou(s){if(Rs(s)==="collection")return s.stages[0].hr}function rd(s){if(Rs(s)==="collection_group")return s.stages[0].collectionId}function TR(s){switch(Rs(s)){case"collection":return Ee.fromString(ou(s)).lastSegment();case"collection_group":return rd(s);default:return}}function aB(s){if(Rs(s)==="documents")return s.stages[0].Tr}class w{constructor(e,t){this.type=e,this.value=t}static mr(){return new w("ERROR",void 0)}static pr(){return new w("UNSET",void 0)}static gr(){return new w("NULL",Ci)}static newValue(e){return Yt(e)?new w("NULL",Ci):(function(n){return!!n&&"booleanValue"in n})(e)?new w("BOOLEAN",e):En(e)?new w("INT",e):fr(e)?new w("DOUBLE",e):(function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue})(e)?new w("TIMESTAMP",e):(function(n){return!!n&&"stringValue"in n})(e)?new w("STRING",e):(function(n){return!!n&&"bytesValue"in n})(e)?new w("BYTES",e):e.referenceValue?new w("REFERENCE",e):e.geoPointValue?new w("GEO_POINT",e):mi(e)?new w("ARRAY",e):sl(e)?new w("VECTOR",e):Er(e)?new w("MAP",e):new w("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function Mo(s){if(!s.yr())return s.value}function _E(s){return s instanceof qs?s._expr:s}function se(s){if((s=_E(s))instanceof Li)return new vR(s);if(s instanceof Fi)return new AR(s);if(s instanceof vo)return new RR(s);if(s instanceof F){if(s.name==="add")return new bR(s);if(s.name==="subtract")return new NR(s);if(s.name==="multiply")return new OR(s);if(s.name==="divide")return new LR(s);if(s.name==="mod")return new FR(s);if(s.name==="and")return new kR(s);if(s.name==="equal")return new zR(s);if(s.name==="not_equal")return new QR(s);if(s.name==="less_than")return new $R(s);if(s.name==="less_than_or_equal")return new YR(s);if(s.name==="greater_than")return new XR(s);if(s.name==="greater_than_or_equal")return new ZR(s);if(s.name==="array_concat")return new eS(s);if(s.name==="array_reverse")return new tS(s);if(s.name==="array_contains")return new nS(s);if(s.name==="array_contains_all")return new sS(s);if(s.name==="array_contains_any")return new rS(s);if(s.name==="array_length")return new iS(s);if(s.name==="array_element")return new oS(s);if(s.name==="equal_any")return new EE(s);if(s.name==="not_equal_any")return new MR(s);if(s.name==="is_nan")return new VR(s);if(s.name==="is_not_nan")return new GR(s);if(s.name==="is_null")return new UR(s);if(s.name==="is_not_null")return new HR(s);if(s.name==="is_error")return new qR(s);if(s.name==="exists")return new jR(s);if(s.name==="not")return new au(s);if(s.name==="or")return new xR(s);if(s.name==="xor")return new id(s);if(s.name==="conditional")return new JR(s);if(s.name==="maximum")return new WR(s);if(s.name==="minimum")return new KR(s);if(s.name==="reverse")return new aS(s);if(s.name==="replace_first")return new cS(s);if(s.name==="replace_all")return new lS(s);if(s.name==="char_length")return new uS(s);if(s.name==="byte_length")return new hS(s);if(s.name==="like")return new BS(s);if(s.name==="regex_contains")return new dS(s);if(s.name==="regex_match")return new fS(s);if(s.name==="string_contains")return new pS(s);if(s.name==="starts_with")return new CS(s);if(s.name==="ends_with")return new gS(s);if(s.name==="to_lower")return new mS(s);if(s.name==="to_upper")return new _S(s);if(s.name==="trim")return new ES(s);if(s.name==="string_concat")return new yS(s);if(s.name==="map_get")return new IS(s);if(s.name==="cosine_distance")return new DS(s);if(s.name==="dot_product")return new wS(s);if(s.name==="euclidean_distance")return new TS(s);if(s.name==="vector_length")return new vS(s);if(s.name==="unix_micros_to_timestamp")return new bS(s);if(s.name==="timestamp_to_unix_micros")return new LS(s);if(s.name==="unix_millis_to_timestamp")return new NS(s);if(s.name==="timestamp_to_unix_millis")return new FS(s);if(s.name==="unix_seconds_to_timestamp")return new OS(s);if(s.name==="timestamp_to_unix_seconds")return new kS(s);if(s.name==="timestamp_add")return new xS(s);if(s.name==="timestamp_subtract")return new MS(s)}throw new Error(`Unknown Expr : ${s}`)}class vR{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===_n)return w.newValue({referenceValue:ll(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return w.newValue({timestampValue:Hc(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return w.newValue({timestampValue:Hc(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?Wl(n)?w.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Hc(i.serializer,ie.fromTimestamp(fi(o)))};if(i.serverTimestampBehavior==="previous"){const a=ka(o);if(a)return a}return{nullValue:"NULL_VALUE"}})(e,n)):w.newValue(n):w.pr()}}class AR{constructor(e){this.expr=e}evaluate(e,t){return w.newValue(this.expr._getValue())}}class RR{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.cr.map((r=>se(r).evaluate(e,t)));return n.some((r=>r.yr()))?w.mr():w.newValue({arrayValue:{values:n.map((r=>r.value))}})}}function dt(s){return fr(s)?Number(s.doubleValue):Number(s.integerValue)}function vn(s){return BigInt(s.integerValue)}const SR=BigInt("0x7fffffffffffffff"),PR=-BigInt("0x8000000000000000");class qa{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length>=2,24778);const n=se(this.expr.params[0]).evaluate(e,t),r=se(this.expr.params[1]).evaluate(e,t);let i=this.br(n,r);for(const o of this.expr.params.slice(2)){const a=se(o).evaluate(e,t);i=this.br(i,a)}return i}br(e,t){if(e.yr()||t.yr())return w.mr();if(e.wr()||t.wr())return w.gr();const n=e.value,r=t.value;if(!fr(n)&&!En(n)||!fr(r)&&!En(r))return w.mr();if(fr(n)||fr(r)){const i=this.Sr(n,r);return i?w.newValue(i):w.mr()}if(En(n)&&En(r)){const i=this.vr(n,r);return i===void 0?w.mr():typeof i=="number"?w.newValue({doubleValue:i}):i<PR||i>SR?w.mr():w.newValue({integerValue:`${i}`})}return w.mr()}}function ns(s,e){return et(s)!==et(e)?"TYPE_MISMATCH":qt(s)||qt(e)?"NOT_EQ":Yt(s)&&Yt(e)?"EQ":Yt(s)||Yt(e)?"NULL":mi(s)&&mi(e)?(function(n,r){var o,a,l;if(((o=n.values)==null?void 0:o.length)!==((a=r.values)==null?void 0:a.length))return"NOT_EQ";let i=!1;for(let u=0;u<(((l=n.values)==null?void 0:l.length)??0);u++){const h=n.values[u],d=r.values[u];switch(ns(h,d)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:ne(44609,{Dr:h,Cr:d})}}return i?"NULL":"EQ"})(s.arrayValue,e.arrayValue):sl(s)&&sl(e)||Er(s)&&Er(e)?(function(n,r){const i=n.fields||{},o=r.fields||{};if(tl(i)!==tl(o))return"NOT_EQ";let a=!1;for(const l in i)if(i.hasOwnProperty(l)){if(o[l]===void 0)return"NOT_EQ";switch(ns(i[l],o[l])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":a=!0}}return a?"NULL":"EQ"})(s.mapValue,e.mapValue):(function(n,r){return sn(n,r,{u:!1,i:!0,o:!0})})(s,e)?"EQ":"NOT_EQ"}class bR extends qa{vr(e,t){return vn(e)+vn(t)}Sr(e,t){return{doubleValue:dt(e)+dt(t)}}}class NR extends qa{constructor(e){super(e),this.expr=e}vr(e,t){return vn(e)-vn(t)}Sr(e,t){return{doubleValue:dt(e)-dt(t)}}}class OR extends qa{constructor(e){super(e),this.expr=e}vr(e,t){return vn(e)*vn(t)}Sr(e,t){return{doubleValue:dt(e)*dt(t)}}}class LR extends qa{constructor(e){super(e),this.expr=e}vr(e,t){const n=vn(t);if(n!==BigInt(0))return vn(e)/n}Sr(e,t){const n=dt(t);return n===0?{doubleValue:Zo(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:dt(e)/n}}}class FR extends qa{constructor(e){super(e),this.expr=e}vr(e,t){const n=vn(t);if(n!==BigInt(0))return vn(e)%n}Sr(e,t){const n=dt(t);if(n!==0)return{doubleValue:dt(e)%n}}}class kR{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,r=!1;for(const o of this.expr.params){const a=se(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!((i=a.value)!=null&&i.booleanValue))return w.newValue(lt);break;case"NULL":r=!0;break;default:n=!0}}return n?w.mr():r?w.gr():w.newValue(Ut)}}class au{constructor(e){this.expr=e}evaluate(e,t){var r;$(this.expr.params.length===1,9634);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return w.newValue({booleanValue:!((r=n.value)!=null&&r.booleanValue)});case"NULL":return w.gr();default:return w.mr()}}}class xR{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,r=!1;for(const o of this.expr.params){const a=se(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if((i=a.value)!=null&&i.booleanValue)return w.newValue(Ut);break;case"NULL":r=!0;break;default:n=!0}}return n?w.mr():r?w.gr():w.newValue(lt)}}class id{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,r=!1;for(const o of this.expr.params){const a=se(o).evaluate(e,t);switch(a.type){case"BOOLEAN":n=id.xor(n,!!((i=a.value)!=null&&i.booleanValue));break;case"NULL":r=!0;break;default:return w.mr()}}return r?w.gr():w.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class EE{constructor(e){this.expr=e}evaluate(e,t){var o,a;$(this.expr.params.length===2,55094);let n=!1;const r=se(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return w.mr()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();for(const l of((a=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:a.values)??[])switch(Yt(r.value)&&Yt(l)?"EQ":ns(r.value,l)){case"EQ":return w.newValue(Ut);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:ne(44608,{value:r.value,candidate:l})}return n?w.gr():w.newValue(lt)}}class MR{constructor(e){this.expr=e}evaluate(e,t){return new au(new F("not",[new F("equal_any",this.expr.params)])).evaluate(e,t)}}class VR{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,23322);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return w.newValue(lt);case"DOUBLE":return w.newValue({booleanValue:isNaN(dt(n.value))});case"NULL":return w.gr();default:return w.mr()}}}class GR{constructor(e){this.expr=e}evaluate(e,t){return $(this.expr.params.length===1,50406),new au(new F("not",[new F("is_nan",this.expr.params)])).evaluate(e,t)}}class UR{constructor(e){this.expr=e}evaluate(e,t){switch($(this.expr.params.length===1,23123),se(this.expr.params[0]).evaluate(e,t).type){case"NULL":return w.newValue(Ut);case"UNSET":case"ERROR":return w.mr();default:return w.newValue(lt)}}}class HR{constructor(e){this.expr=e}evaluate(e,t){return $(this.expr.params.length===1,23167),new au(new F("not",[new F("is_null",this.expr.params)])).evaluate(e,t)}}class qR{constructor(e){this.expr=e}evaluate(e,t){return $(this.expr.params.length===1,5228),se(this.expr.params[0]).evaluate(e,t).type==="ERROR"?w.newValue(Ut):w.newValue(lt)}}class jR{constructor(e){this.expr=e}evaluate(e,t){switch($(this.expr.params.length===1,6877),se(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return w.mr();case"UNSET":return w.newValue(lt);default:return w.newValue(Ut)}}}class JR{constructor(e){this.expr=e}evaluate(e,t){var r;$(this.expr.params.length===3,11706);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return(r=n.value)!=null&&r.booleanValue?se(this.expr.params[1]).evaluate(e,t):se(this.expr.params[2]).evaluate(e,t);case"NULL":return se(this.expr.params[2]).evaluate(e,t);default:return w.mr()}}}class WR{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>se(i).evaluate(e,t)));let r;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||Ht(i.value,r.value)>0?i:r}return r===void 0?w.gr():r}}class KR{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>se(i).evaluate(e,t)));let r;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||Ht(i.value,r.value)<0?i:r}return r===void 0?w.gr():r}}class ki{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return w.mr()}const r=se(this.expr.params[1]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return w.mr()}return this.Fr(n,r)}}class zR extends ki{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return w.newValue(Ut);if(e.wr()||t.wr()||qt(e.value)||qt(t.value)||et(e.value)!==et(t.value))return w.newValue(lt);switch(ns(e.value,t.value)){case"EQ":return w.newValue(Ut);case"NOT_EQ":return w.newValue(lt);case"NULL":return w.gr();default:ne(44615,{left:e,right:t})}}}class QR extends ki{constructor(e){super(e),this.expr=e}Fr(e,t){switch(ns(e.value,t.value)){case"EQ":return w.newValue(lt);case"NOT_EQ":case"TYPE_MISMATCH":return w.newValue(Ut);case"NULL":return w.gr();default:ne(44614,{left:e,right:t})}}}class $R extends ki{constructor(e){super(e),this.expr=e}Fr(e,t){return et(e.value)!==et(t.value)||qt(e.value)||qt(t.value)?w.newValue(lt):w.newValue({booleanValue:Ht(e.value,t.value)<0})}}class YR extends ki{constructor(e){super(e),this.expr=e}Fr(e,t){return et(e.value)!==et(t.value)||qt(e.value)||qt(t.value)?w.newValue(lt):ns(e.value,t.value)==="EQ"?w.newValue(Ut):w.newValue({booleanValue:Ht(e.value,t.value)<0})}}class XR extends ki{constructor(e){super(e),this.expr=e}Fr(e,t){return et(e.value)!==et(t.value)||qt(e.value)||qt(t.value)?w.newValue(lt):w.newValue({booleanValue:Ht(e.value,t.value)>0})}}class ZR extends ki{constructor(e){super(e),this.expr=e}Fr(e,t){return et(e.value)!==et(t.value)||qt(e.value)||qt(t.value)?w.newValue(lt):ns(e.value,t.value)==="EQ"?w.newValue(Ut):w.newValue({booleanValue:Ht(e.value,t.value)>0})}}class eS{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class tS{constructor(e){this.expr=e}evaluate(e,t){var r;$(this.expr.params.length===1,216);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.gr();case"ARRAY":{const i=((r=n.value.arrayValue)==null?void 0:r.values)??[];return w.newValue({arrayValue:{values:[...i].reverse()}})}default:return w.mr()}}}class nS{constructor(e){this.expr=e}evaluate(e,t){return $(this.expr.params.length===2,52884),new EE(new F("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class sS{constructor(e){this.expr=e}evaluate(e,t){var l,u,h,d;$(this.expr.params.length===2,1392);let n=!1;const r=se(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();const o=((u=(l=i.value)==null?void 0:l.arrayValue)==null?void 0:u.values)??[],a=((d=(h=r.value)==null?void 0:h.arrayValue)==null?void 0:d.values)??[];for(const p of o){let g=!1;n=!1;for(const I of a){switch(Yt(p)&&Yt(I)?"EQ":ns(p,I)){case"EQ":g=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:ne(44613,{value:I,search:p})}if(g)break}if(!g)return w.newValue(lt)}return w.newValue(Ut)}}class rS{constructor(e){this.expr=e}evaluate(e,t){var l,u,h,d;$(this.expr.params.length===2,2680);let n=!1;const r=se(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();const o=((u=(l=i.value)==null?void 0:l.arrayValue)==null?void 0:u.values)??[],a=((d=(h=r.value)==null?void 0:h.arrayValue)==null?void 0:d.values)??[];for(const p of a)for(const g of o)switch(Yt(p)&&Yt(g)?"EQ":ns(p,g)){case"EQ":return w.newValue(Ut);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:ne(60403,{value:p,search:g})}return n?w.gr():w.newValue(lt)}}class iS{constructor(e){this.expr=e}evaluate(e,t){var r,i,o;$(this.expr.params.length===1,38605);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.gr();case"ARRAY":return w.newValue({integerValue:`${((o=(i=(r=n.value)==null?void 0:r.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return w.mr()}}}class oS{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class aS{constructor(e){this.expr=e}evaluate(e,t){var r,i;$(this.expr.params.length===1,1508);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.gr();case"BYTES":{const o=(r=n.value)==null?void 0:r.bytesValue;if(typeof o=="string"){const a=Je.fromBase64String(o).toUint8Array();return a.reverse(),w.newValue({bytesValue:Je.fromUint8Array(a).toBase64()})}return w.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=n.value)==null?void 0:i.stringValue,a=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),l=Array.from(a,(u=>u.segment)).reverse();return w.newValue({stringValue:l.join("")})}default:return w.mr()}}}class cS{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class lS{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class uS{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,19400);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.gr();case"STRING":{const r=(function(o){let a=0;for(let l=0;l<o.length;l++){const u=o.codePointAt(l);if(u===void 0)return;if(u<=65535)if(u>=55296&&u<=57343)if(u<=56319){const h=o.codePointAt(l+1);h!==void 0&&h>=56320&&h<=57343?(a+=1,l++):a+=1}else a+=1;else a+=1;else{if(!(u<=1114111))return;a+=1,l++}}return a})(n.value.stringValue);return r===void 0?w.mr():w.newValue({integerValue:r})}default:return w.mr()}}}class hS{constructor(e){this.expr=e}evaluate(e,t){var r,i;$(this.expr.params.length===1,8486);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const o=(r=n.value)==null?void 0:r.bytesValue;return typeof o=="string"?w.newValue({integerValue:Je.fromBase64String(o).toUint8Array().length}):w.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=(function(l){let u=0;for(let h=0;h<l.length;h++){const d=l.codePointAt(h);if(d===void 0)return;if(d>=55296&&d<=57343){if(!(d<=56319))return;{const p=l.codePointAt(h+1);if(p===void 0||!(p>=56320&&p<=57343))return;u+=4,h++}}else if(d<=127)u+=1;else if(d<=2047)u+=2;else if(d<=65535)u+=3;else{if(!(d<=1114111))return;u+=4,h++}}return u})((i=n.value)==null?void 0:i.stringValue);return o===void 0?w.mr():w.newValue({integerValue:o})}case"NULL":return w.gr();default:return w.mr()}}}class xi{constructor(e){this.expr=e}evaluate(e,t){var o,a;$(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const r=se(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":break;case"NULL":n=!0;break;default:return w.mr()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return w.mr()}return n?w.gr():this.Or((o=r.value)==null?void 0:o.stringValue,(a=i.value)==null?void 0:a.stringValue)}}class BS extends xi{Or(e,t){try{const n=(function(o){let a="";for(let l=0;l<o.length;l++){const u=o.charAt(l);switch(u){case"_":a+=".";break;case"%":a+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":a+="\\"+u;break;default:a+=u}}return"^"+a+"$"})(t),r=VB.compile(n);return w.newValue({booleanValue:r.matches(e)})}catch(n){return nn(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),w.mr()}}}class dS extends xi{Or(e,t){try{const n=VB.compile(t);return w.newValue({booleanValue:n.test(e)})}catch{return nn(`Invalid regex pattern found in regex_contains: ${t}, returning error`),w.mr()}}}class fS extends xi{Or(e,t){try{return w.newValue({booleanValue:VB.compile(t).matches(e)})}catch{return nn(`Invalid regex pattern found in regex_match: ${t}, returning error`),w.mr()}}}class pS extends xi{Or(e,t){return w.newValue({booleanValue:e.includes(t)})}}class CS extends xi{Or(e,t){return w.newValue({booleanValue:e.startsWith(t)})}}class gS extends xi{Or(e,t){return w.newValue({booleanValue:e.endsWith(t)})}}class mS{constructor(e){this.expr=e}evaluate(e,t){var r,i;$(this.expr.params.length===1,29079);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(r=n.value)==null?void 0:r.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return w.gr();default:return w.mr()}}}class _S{constructor(e){this.expr=e}evaluate(e,t){var r,i;$(this.expr.params.length===1,60487);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(r=n.value)==null?void 0:r.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return w.gr();default:return w.mr()}}}class ES{constructor(e){this.expr=e}evaluate(e,t){var r,i;$(this.expr.params.length===1,28544);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(r=n.value)==null?void 0:r.stringValue)==null?void 0:i.trim()});case"NULL":return w.gr();default:return w.mr()}}}class yS{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((o=>se(o).evaluate(e,t)));let r="",i=!1;for(const o of n)switch(o.type){case"STRING":r+=o.value.stringValue;break;case"NULL":i=!0;break;default:return w.mr()}return i?w.gr():w.newValue({stringValue:r})}}class IS{constructor(e){this.expr=e}evaluate(e,t){var o,a,l,u;$(this.expr.params.length===2,4483);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return w.pr();case"MAP":break;default:return w.mr()}const r=se(this.expr.params[1]).evaluate(e,t);if(r.type!=="STRING")return w.mr();const i=(u=(a=(o=n.value)==null?void 0:o.mapValue)==null?void 0:a.fields)==null?void 0:u[(l=r.value)==null?void 0:l.stringValue];return i===void 0?w.pr():w.newValue(i)}}class od{constructor(e){this.expr=e}evaluate(e,t){var u,h;$(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const r=se(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":break;case"NULL":n=!0;break;default:return w.mr()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();const o=eB(r.value),a=eB(i.value);if(o===void 0||a===void 0||((u=o.values)==null?void 0:u.length)!==((h=a.values)==null?void 0:h.length))return w.mr();const l=this.Mr(o,a);return l===void 0||isNaN(l)?w.mr():w.newValue({doubleValue:l})}}class DS extends od{Mr(e,t){const n=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(n.length===0)return;let i=0,o=0,a=0;for(let u=0;u<n.length;u++){if(!Vs(n[u])||!Vs(r[u]))return;const h=dt(n[u]),d=dt(r[u]);i+=h*d,o+=h*h,a+=d*d}const l=Math.sqrt(o)*Math.sqrt(a);if(l!==0)return 1-Math.max(-1,Math.min(1,i/l))}}class wS extends od{Mr(e,t){const n=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Vs(n[o])||!Vs(r[o]))return;i+=dt(n[o])*dt(r[o])}return i}}class TS extends od{Mr(e,t){const n=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Vs(n[o])||!Vs(r[o]))return;const a=dt(n[o]),l=dt(r[o]);i+=Math.pow(a-l,2)}return Math.sqrt(i)}}class vS{constructor(e){this.expr=e}evaluate(e,t){var r;$(this.expr.params.length===1,39044);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const i=eB(n.value);return w.newValue({integerValue:((r=i==null?void 0:i.values)==null?void 0:r.length)??0})}case"NULL":return w.gr();default:return w.mr()}}}const ha=BigInt(-62135596800),Ba=BigInt(253402300799),hl=BigInt(1e3),Ss=BigInt(1e6),AS=ha*hl,RS=Ba*hl+BigInt(999),SS=ha*Ss,PS=Ba*Ss+BigInt(999999);function ad(s){return s>=SS&&s<=PS}function yE(s){return s>=ha&&s<=Ba}function da(s,e){const t=BigInt(s);return!(t<ha||t>Ba)&&!(e<0||e>=1e9)&&(t!==ha||e===0)&&!(t===Ba&&e>999999999)}function IE(s,e){return e<0?{seconds:s-1,nanos:e+1e9}:{seconds:s,nanos:e}}function cd(s){return BigInt(s.seconds)*Ss+BigInt(Math.trunc(s.nanoseconds/1e3))}class ld{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return w.gr();default:return w.mr()}}}class bS extends ld{toTimestamp(e){if(!ad(e))return w.mr();let t=Number(e/Ss),n=Number(e%Ss*BigInt(1e3));const r=IE(t,n);return t=r.seconds,n=r.nanos,da(t,n)?w.newValue({timestampValue:{seconds:t,nanos:n}}):w.mr()}}class NS extends ld{toTimestamp(e){if(!(function(o){return o>=AS&&o<=RS})(e))return w.mr();let t=Number(e/hl),n=Number(e%hl*BigInt(1e6));const r=IE(t,n);return t=r.seconds,n=r.nanos,da(t,n)?w.newValue({timestampValue:{seconds:t,nanos:n}}):w.mr()}}class OS extends ld{toTimestamp(e){if(!yE(e))return w.mr();const t=Number(e);return w.newValue({timestampValue:{seconds:t,nanos:0}})}}class ud{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return w.gr();default:return w.mr()}const r=zB(n.value.timestampValue);return da(r.seconds,r.nanoseconds)?this.Nr(r):w.mr()}}class LS extends ud{Nr(e){const t=cd(e);return ad(t)?w.newValue({integerValue:`${t.toString()}`}):w.mr()}}class FS extends ud{Nr(e){const t=cd(e),n=t/BigInt(1e3),r=t%BigInt(1e3);return n>BigInt(0)||r===BigInt(0)?w.newValue({integerValue:n.toString()}):w.newValue({integerValue:(n-BigInt(1)).toString()})}}class kS extends ud{Nr(e){const t=BigInt(e.seconds);return yE(t)?w.newValue({integerValue:t.toString()}):w.mr()}}class DE{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const r=se(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return w.mr()}const i=se(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function(oe){switch(oe){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return w.mr();break;case"NULL":n=!0;break;default:return w.mr()}const a=se(this.expr.params[2]).evaluate(e,t);switch(a.type){case"INT":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();const l=BigInt(a.value.integerValue);let u;try{switch(o){case"microsecond":u=l;break;case"millisecond":u=l*BigInt(1e3);break;case"second":u=l*BigInt(1e6);break;case"minute":u=l*BigInt(6e7);break;case"hour":u=l*BigInt(36e8);break;case"day":u=l*BigInt(864e8);break;default:return w.mr()}if(o!=="microsecond"&&l!==BigInt(0)&&u/l!==BigInt(this.Lr(o)))return w.mr()}catch(z){return nn(`Error during timestamp arithmetic: ${z}`),w.mr()}const h=zB(r.value.timestampValue);if(!da(h.seconds,h.nanoseconds))return w.mr();const d=cd(h),p=this.Br(d,u);if(!ad(p))return w.mr();const g=Number(p/Ss),I=p%Ss,N=Number((I<0?I+Ss:I)*BigInt(1e3)),V=I<0?g-1:g;return da(V,N)?w.newValue({timestampValue:{seconds:V,nanos:N}}):w.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class xS extends DE{Br(e,t){return e+t}}class MS extends DE{Br(e,t){return e-t}}function fa(s){if((s=_E(s))instanceof Li)return`fld(${s.fieldName})`;if(s instanceof Fi)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof xe?`ref(${t.path})`:t instanceof St?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(s.value)})`;if(s instanceof F)return`fn(${s.name},[${s.params.map(fa).join(",")}])`;if(s.expressionType==="ListOfExpressions")return`list([${s.cr.map(fa).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(s,null,2)}`)}function VS(s){if(s instanceof CE)return`${s._name}(${Pc(s.fields)})`;if(s instanceof gE){let e=`${s._name}(${Pc(s.accumulators)})`;return s.groups.size>0&&(e+=`grouping(${Pc(s.groups)})`),e}if(s instanceof mE)return`${s._name}(${Pc(s.groups)})`;if(s instanceof su)return`${s._name}(${s.hr})`;if(s instanceof ru)return`${s._name}(${s.collectionId})`;if(s instanceof td)return`${s._name}()`;if(s instanceof nd)return`${s._name}(${s.Tr.sort()})`;if(s instanceof iu)return`${s._name}(${fa(s.condition)})`;if(s instanceof Rr)return`${s._name}(${s.limit})`;if(s instanceof Hn)return`${s._name}(${(function(t){return t.map((n=>`${fa(n.expr)}${n.direction}`)).join(",")})(s.orderings)})`;throw new Error(`Unrecognized stage ${s._name}`)}function Pc(s){return`${Array.from(s.entries()).sort().map((([e,t])=>`${e}=${fa(t)}`)).join(",")}`}function Yn(s){return s.stages.map((e=>VS(e))).join("|")}function wE(s,e){return Yn(s)===Yn(e)}function nt(s){return s instanceof Tt}function ZC(s){return nt(s)?Yn(s):Lo(s)}function TE(s){return nt(s)?Yn(s):(function(t){return`${A_(wn(t))}|lt:${t.limitType}`})(s)}function cu(s,e){return s instanceof Tt&&e instanceof Tt?wE(s,e):!(s instanceof Tt&&!(e instanceof Tt)||!(s instanceof Tt)&&e instanceof Tt)&&cA(s,e)}function vE(s){return hr(s)?Yn(s):A_(s)}function AE(s,e){return s instanceof Tt&&e instanceof Tt?wE(s,e):!(s instanceof Tt&&!(e instanceof Tt)||!(s instanceof Tt)&&e instanceof Tt)&&R_(s,e)}function GS(s,e){const t=(function(r){let i=!1;const o=[];for(const a of r)if(a instanceof Hn)if(i=!0,a.orderings.some((l=>l.expr instanceof Li&&l.expr.fieldName===_n)))o.push(a);else{const l=a.orderings.map((u=>u));l.push(qc(_n).ascending()),o.push(new Hn(l,{}))}else a instanceof Rr&&(i||(o.push(new Hn([qc(_n).ascending()],{})),i=!0)),o.push(a);return i||o.push(new Hn([qc(_n).ascending()],{})),o})(s.stages);if(s.userDataReader){const n=s.userDataReader.createContext(3,"toCorePipeline");t.forEach((r=>r._readUserData(n)))}return new Tt(s.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Hv(i,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=No(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=No(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=L_();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const l=__(o,a);l!==null&&n.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(ie.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),he())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,((t,n)=>PC(t,n)))&&di(this.baseMutations,e.baseMutations,((t,n)=>PC(t,n)))}}class hd{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){$(e.mutations.length===n.length,58842,{Ur:e.mutations.length,kr:n.length});let r=(function(){return dA})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new hd(e,t,n,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="";function HS(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=eg(e)),e=qS(s.get(t),e);return eg(e)}function qS(s,e){let t=e;const n=s.length;for(let r=0;r<n;r++){const i=s.charAt(r);switch(i){case"\0":t+="";break;case RE:t+="";break;default:t+=i}}return t}function eg(s){return s+RE+""}/**
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
 */class jS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class qn{constructor(e,t,n,r,i=ie.min(),o=ie.min(),a=Je.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.$r=e}}function WS(s){const e=PA({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?cl(e,e.limit,"L"):e}/**
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
 */class KS{constructor(){this.Zi=new zS}addToCollectionParentIndex(e,t){return this.Zi.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(Gs.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(Gs.min())}updateCollectionGroup(e,t,n){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class zS{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ze(Ee.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ze(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new Js(0)}static bs(){return new Js(-1)}}// Copyright 2024 Google LLC* @license
function SE(s,e){var n;let t=e;for(const r of s.stages)t=$S({serializer:s.serializer,serverTimestampBehavior:(n=s.listenOptions)==null?void 0:n.serverTimestampBehavior},r,t);return t}function lu(s,e){return SE(s,[e]).length>0}function QS(s,e){return nt(s)?lu(s,e):Xl(s,e)}function $S(s,e,t){if(e instanceof su)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&`/${a.key.getCollectionPath().canonicalString()}`===i.hr))})(0,e,t);if(e instanceof iu)return(function(r,i,o){return o.filter((a=>{const l=Mo(se(i.condition).evaluate(r,a));return l!==void 0&&sn(l,Ut)}))})(s,e,t);if(e instanceof ru)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&a.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof td)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()))})(0,0,t);if(e instanceof nd)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&i.Pr.has(a.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof Rr)return(function(r,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof Hn)return(function(r,i,o){const a=i.orderings.map((l=>({Ms:se(l.expr),direction:l.direction})));return[...o].sort(((l,u)=>{for(const{Ms:h,direction:d}of a){const p=Mo(h.evaluate(r,l)),g=Mo(h.evaluate(r,u)),I=Ht(p??Ci,g??Ci);if(I!==0)return d==="ascending"?I:-I}return 0}))})(s,e,t);throw new Error(`Unknown stage: ${e._name}`)}function cB(s){const e=(function(n){for(let r=n.stages.length-1;r>=0;r--){const i=n.stages[r];if(i instanceof Hn)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(s);return(t,n)=>{for(const r of e){const i=Mo(se(r.expr).evaluate({serializer:s.serializer},t)),o=Mo(se(r.expr).evaluate({serializer:s.serializer},n)),a=Ht(i||Ci,o||Ci);if(a!==0)return r.direction==="ascending"?a:-a}return 0}}function _h(s){for(let e=s.stages.length-1;e>=0;e--){const t=s.stages[e];if(t instanceof Rr)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(){this.changes=new kr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?x.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class XS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(n!==null&&No(n.mutation,r,$t.empty(),_e.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,he()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=he()){const r=Is();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((i=>{let o=ei();return i.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=Is();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,he())))}populateOverlays(e,t,n){const r=[];return n.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,n,r){let i=xt();const o=Fo(),a=(function(){return Fo()})();return t.forEach(((l,u)=>{const h=n.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Xs)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),No(h.mutation,u,h.mutation.getFieldMask(),_e.now())):o.set(u.key,$t.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,h)=>o.set(u,h))),t.forEach(((u,h)=>a.set(u,new XS(h,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(e,t){const n=Fo();let r=new je(((o,a)=>o-a)),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let h=n.get(l)||$t.empty();h=a.applyToLocalView(u,h),n.set(l,h);const d=(r.get(a.batchId)||he()).add(l);r=r.insert(a.batchId,d)}))})).next((()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=L_();h.forEach((p=>{if(!i.has(p)){const g=__(t.get(p),n.get(p));g!==null&&d.set(p,g),i=i.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return x.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,r){return nt(t)?this.getDocumentsMatchingPipeline(e,t,n,r):iA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):P_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):x.resolve(Is());let a=aa,l=i;return o.next((u=>x.forEach(u,((h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?x.resolve():this.remoteDocumentCache.getEntry(e,h).next((p=>{l=l.insert(h,p)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,he()))).next((h=>({batchId:a,changes:O_(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((n=>{let r=ei();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let o=ei();return this.indexManager.getCollectionParents(e,i).next((a=>x.forEach(a,(l=>{const u=(function(d,p){return new bi(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,n,r).next((h=>{h.forEach(((d,p)=>{o=o.insert(d,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>Xl(t,a)))))}getDocumentsMatchingPipeline(e,t,n,r){if(Rs(t)==="collection_group"){const i=rd(t);let o=ei();return this.indexManager.getCollectionParents(e,i).next((a=>x.forEach(a,(l=>{const u=(function(d,p){const g=d.stages.map((I=>I instanceof ru?new su(p.canonicalString(),{}):I));return new Tt(d.serializer,g)})(t,l.child(i));return this.getDocumentsMatchingPipeline(e,u,n,r).next((h=>{h.forEach(((d,p)=>{o=o.insert(d,p)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next((o=>{switch(i=o,Rs(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r);case"documents":let a=he();for(const l of aB(t))a=a.add(X.fromPath(l));return this.remoteDocumentCache.getEntries(e,a);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new J("invalid-argument",`Invalid pipeline source to execute offline: ${Yn(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>lu(t,a)))))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach(((i,o)=>{const a=o.getKey();t.get(a)===null&&(t=t.insert(a,mt.newInvalidDocument(a)))}));let r=ei();return t.forEach(((i,o)=>{const a=e.get(i);a!==void 0&&No(a.mutation,o,$t.empty(),_e.now()),n(o)&&(r=r.insert(i,o))})),r}getOverlaysForPipeline(e,t,n){switch(Rs(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,Ee.fromString(ou(t)),n);case"collection_group":throw new J("invalid-argument",`Unexpected collection group pipeline: ${Yn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,aB(t).map((r=>X.fromPath(r))));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new J("invalid-argument",`Failed to get overlays for pipeline: ${Yn(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return x.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:Tn(r.createTime)}})(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,(function(r){return{name:r.name,query:WS(r.bundledQuery),readTime:Tn(r.readTime)}})(t)),x.resolve()}}/**
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
 */class tP{constructor(){this.overlays=new je(X.comparator),this.Gs=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Is();return x.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&n.set(r,i)})))).next((()=>n))}getAllOverlays(e,t){const n=Is();return this.overlays.forEach(((r,i)=>{i.largestBatchId>t&&n.set(r,i)})),x.resolve(n)}saveOverlays(e,t,n){return n.forEach(((r,i)=>{this.Zr(e,t,i)})),x.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Gs.get(n);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Gs.delete(n)),x.resolve()}getOverlaysForCollection(e,t,n){const r=Is(),i=t.length+1,o=new X(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>n&&r.set(l.getKey(),l)}return x.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new je(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let h=i.get(u.largestBatchId);h===null&&(h=Is(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Is(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=r)););return x.resolve(a)}Zr(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Gs.get(r.largestBatchId).delete(n.key);this.Gs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new jS(t,n));let i=this.Gs.get(t);i===void 0&&(i=he(),this.Gs.set(t,i)),this.Gs.set(t,i.add(n.key))}}/**
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
 */class nP{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.zs=new Ze(ot.js),this.Hs=new Ze(ot.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const n=new ot(e,t);this.zs=this.zs.add(n),this.Hs=this.Hs.add(n)}Ys(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Zs(new ot(e,t))}Xs(e,t){e.forEach((n=>this.removeReference(n,t)))}e_(e){const t=new X(new Ee([])),n=new ot(t,e),r=new ot(t,e+1),i=[];return this.Hs.forEachInRange([n,r],(o=>{this.Zs(o),i.push(o.key)})),i}t_(){this.zs.forEach((e=>this.Zs(e)))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new X(new Ee([])),n=new ot(t,e),r=new ot(t,e+1);let i=he();return this.Hs.forEachInRange([n,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new ot(e,0),n=this.zs.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ot{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return X.comparator(e.key,t.key)||fe(e.r_,t.r_)}static Js(e,t){return fe(e.r_,t.r_)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new Ze(ot.js)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new US(i,t,n,r);this.mutationQueue.push(o);for(const a of r)this.i_=this.i_.add(new ot(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,t){return x.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.__(n),i=r<0?0:r;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?UB:this.Gr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ot(t,0),r=new ot(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([n,r],(o=>{const a=this.s_(o.r_);i.push(a)})),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ze(fe);return t.forEach((r=>{const i=new ot(r,0),o=new ot(r,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,o],(a=>{n=n.add(a.r_)}))})),x.resolve(this.o_(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;X.isDocumentKey(i)||(i=i.child(""));const o=new ot(new X(i),0);let a=new Ze(fe);return this.i_.forEachWhile((l=>{const u=l.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.r_)),!0)}),o),x.resolve(this.o_(a))}o_(e){const t=[];return e.forEach((n=>{const r=this.s_(n);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){$(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.i_;return x.forEach(t.mutations,(r=>{const i=new ot(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.i_=n}))}Hr(e){}containsKey(e,t){const n=new ot(t,0),r=this.i_.firstAfterOrEqual(n);return x.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.u_=e,this.docs=(function(){return new je(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.u_(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return x.resolve(n?n.document.mutableCopy():mt.newInvalidDocument(t))}getEntries(e,t){let n=xt();return t.forEach((r=>{const i=this.docs.get(r);n=n.insert(r,i?i.document.mutableCopy():mt.newInvalidDocument(r))})),x.resolve(n)}getAllEntries(e){let t=xt();return this.docs.forEach(((n,r)=>{t=t.insert(n,r.document)})),x.resolve(t)}getDocumentsMatchingQuery(e,t,n,r){let i,o;nt(t)?(i=Ee.fromString(ou(t)),o=h=>lu(t,h)):(i=t.path,o=h=>Xl(t,h));let a=xt();const l=new X(i.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||nA(tA(d),n)<=0||(r.has(d.key)||o(d))&&(a=a.insert(d.key,d.mutableCopy()))}return x.resolve(a)}getAllFromCollectionGroup(e,t,n,r){ne(9500)}c_(e,t){return x.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new iP(this)}getSize(e){return x.resolve(this.size)}}class iP extends YS{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.$s.addEntry(e,r)):this.$s.removeEntry(n)})),x.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.persistence=e,this.l_=new kr((t=>vE(t)),AE),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.E_=0,this.h_=new Bd,this.targetCount=0,this.T_=Js.ws()}forEachTarget(e,t){return this.l_.forEach(((n,r)=>t(r))),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.E_&&(this.E_=t),x.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new Js(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.Ds(t),x.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.l_.forEach(((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.l_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),x.waitFor(i).next((()=>r))}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const n=this.l_.get(t)||null;return x.resolve(n)}addMatchingKeys(e,t,n){return this.h_.Ys(t,n),x.resolve()}removeMatchingKeys(e,t,n){this.h_.Xs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),x.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),x.resolve()}getMatchingKeysForTargetId(e,t){const n=this.h_.n_(t);return x.resolve(n)}containsKey(e,t){return x.resolve(this.h_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t){this.P_={},this.overlays={},this.I_=new eu(0),this.R_=!1,this.R_=!0,this.A_=new nP,this.referenceDelegate=e(this),this.V_=new oP(this),this.indexManager=new KS,this.remoteDocumentCache=(function(r){return new rP(r)})((n=>this.referenceDelegate.d_(n))),this.serializer=new JS(t),this.f_=new eP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.P_[e.toKey()];return n||(n=new sP(t,this.referenceDelegate),this.P_[e.toKey()]=n),n}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,n){K("MemoryPersistence","Starting transaction:",e);const r=new aP(this.I_.next());return this.referenceDelegate.m_(),n(r).next((i=>this.referenceDelegate.p_(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}g_(e,t){return x.or(Object.values(this.P_).map((n=>()=>n.containsKey(e,t))))}}class aP extends tR{constructor(e){super(),this.currentSequenceNumber=e}}class dd{constructor(e){this.persistence=e,this.y_=new Bd,this.w_=null}static b_(e){return new dd(e)}get S_(){if(this.w_)return this.w_;throw ne(60996)}addReference(e,t,n){return this.y_.addReference(n,t),this.S_.delete(n.toString()),x.resolve()}removeReference(e,t,n){return this.y_.removeReference(n,t),this.S_.add(n.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),x.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach((r=>this.S_.add(r.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.S_.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.S_,(n=>{const r=X.fromPath(n);return this.v_(e,r).next((i=>{i||t.removeEntry(r,ie.min())}))})).next((()=>(this.w_=null,t.apply(e))))}updateLimboDocument(e,t){return this.v_(e,t).next((n=>{n?this.S_.delete(t.toString()):this.S_.add(t.toString())}))}d_(e){return 0}v_(e,t){return x.or([()=>x.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class Bl{constructor(e,t){this.persistence=e,this.D_=new kr((n=>HS(n.path)),((n,r)=>n.isEqual(r))),this.garbageCollector=aR(this,t)}static b_(e,t){return new Bl(e,t)}m_(){}p_(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((r=>n+r))))}Cs(e){let t=0;return this.sr(e,(n=>{t++})).next((()=>t))}sr(e,t){return x.forEach(this.D_,((n,r)=>this.Os(e,n,r).next((i=>i?x.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.c_(e,(o=>this.Os(e,o,t).next((a=>{a||(n++,i.removeEntry(o,ie.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),x.resolve()}removeReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),x.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vc(e.data.value)),t}Os(e,t,n){return x.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.D_.get(t);return x.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Vo=n,this.fo=r}static mo(e,t){let n=he(),r=he();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new fd(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(s,e){return X.comparator(s.key,e.key)}/**
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
 */class lP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class uP{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=(function(){return Sw()?8:nR(Et())>0?6:4})()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.vo(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.Do(e,t,r,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new lP;return this.xo(e,t,o).next((a=>{if(i.result=a,this.yo)return this.Co(e,t,o,a.size)}))})).next((()=>i.result))}Co(e,t,n,r){return nt(t)?x.resolve():n.documentReadCount<this.wo?(Xr()<=de.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),x.resolve()):(Xr()<=de.DEBUG&&K("QueryEngine","Query:",Lo(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.bo*r?(Xr()<=de.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wn(t))):x.resolve())}vo(e,t){if(nt(t))return x.resolve(null);let n=t;if(kC(n))return x.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(n.limit!==null&&i===1&&(n=cl(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=he(...o);return this.So.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((u=>{const h=this.Fo(n,l);return this.Oo(n,h,a,u.readTime)?this.vo(e,cl(n,null,"F")):this.Mo(e,h,n,u)}))))})))))}Do(e,t,n,r){return(nt(t)?(function(o){for(const a of o.stages){if(a instanceof Rr||a instanceof XC)return!1;if(a instanceof iu){if(a.condition instanceof dE&&a.condition._expr.name==="exists"&&a.condition._expr.params[0]instanceof Li&&a.condition._expr.params[0].fieldName===_n)continue;return!1}}return!0})(t):kC(t))||r.isEqual(ie.min())?x.resolve(null):this.So.getDocuments(e,n).next((i=>{const o=this.Fo(t,i);return this.Oo(t,o,n,r)?x.resolve(null):(Xr()<=de.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ZC(t)),this.Mo(e,o,t,eA(r,aa)).next((a=>a)))}))}Fo(e,t){let n,r;return nt(e)?(n=new Ze(cP),r=i=>lu(e,i)):(n=new Ze(WB(e)),r=i=>Xl(e,i)),t.forEach(((i,o)=>{r(o)&&(n=n.add(o))})),n}Oo(e,t,n,r){if(nt(e))return(function(a){return a.stages.some((l=>l instanceof Rr||l instanceof XC))})(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}xo(e,t,n){return Xr()<=de.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",ZC(t)),this.So.getDocumentsMatchingQuery(e,t,Gs.min(),n)}Mo(e,t,n,r){return this.So.getDocumentsMatchingQuery(e,n,r).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="LocalStore",hP=3e8;class BP{constructor(e,t,n,r){this.persistence=e,this.No=t,this.serializer=r,this.Lo=new je(fe),this.Bo=new kr((i=>vE(i)),AE),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(n)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZS(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Lo)))}}function dP(s,e,t,n){return new BP(s,e,t,n)}async function bE(s,e){const t=ae(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next((i=>(r=i,t.qo(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],a=[];let l=he();for(const u of r){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(n,l).next((u=>({$o:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function fP(s,e){const t=ae(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const r=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return(function(a,l,u,h){const d=u.batch,p=d.keys();let g=x.resolve();return p.forEach((I=>{g=g.next((()=>h.getEntry(l,I))).next((N=>{const V=u.docVersions.get(I);$(V!==null,48541),N.version.compareTo(V)<0&&(d.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),h.addEntry(N)))}))})),g.next((()=>a.mutationQueue.removeMutationBatch(l,d)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(a){let l=he();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(n,r)))}))}function NE(s){const e=ae(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.V_.getLastRemoteSnapshotVersion(t)))}function pP(s,e){const t=ae(s),n=e.snapshotVersion;let r=t.Lo;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.ko.newChangeBuffer({trackRemovals:!0});r=t.Lo;const a=[];e.targetChanges.forEach(((h,d)=>{const p=r.get(d);if(!p)return;a.push(t.V_.removeMatchingKeys(i,h.removedDocuments,d).next((()=>t.V_.addMatchingKeys(i,h.addedDocuments,d))));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Je.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,n)),r=r.insert(d,g),(function(N,V,z){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=hP?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(p,g,h)&&a.push(t.V_.updateTargetData(i,g))}));let l=xt(),u=he();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))})),a.push(CP(i,o,e.documentUpdates).next((h=>{l=h.Ko,u=h.Qo}))),!n.isEqual(ie.min())){const h=t.V_.getLastRemoteSnapshotVersion(i).next((d=>t.V_.setTargetsMetadata(i,i.currentSequenceNumber,n)));a.push(h)}return x.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(t.Lo=r,i)))}function CP(s,e,t){let n=he(),r=he();return t.forEach((i=>n=n.add(i))),e.getEntries(s,n).next((i=>{let o=xt();return t.forEach(((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):K(pd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{Ko:o,Qo:r}}))}function gP(s,e){const t=ae(s);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=UB),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function mP(s,e){const t=ae(s);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let r;return t.V_.getTargetData(n,e).next((i=>i?(r=i,x.resolve(r)):t.V_.allocateTargetId(n).next((o=>(r=new qn(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.V_.addTargetData(n,r).next((()=>r)))))))})).then((n=>{const r=t.Lo.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Lo=t.Lo.insert(n.targetId,n),t.Bo.set(e,n.targetId)),n}))}async function lB(s,e,t){const n=ae(s),r=n.Lo.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!Oi(o))throw o;K(pd,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Lo=n.Lo.remove(e),n.Bo.delete(r.target)}function tg(s,e,t){const n=ae(s);let r=ie.min(),i=he();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,h){const d=ae(l),p=d.Bo.get(h);return p!==void 0?x.resolve(d.Lo.get(p)):d.V_.getTargetData(u,h)})(n,o,nt(e)?e:wn(e)).next((a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,n.V_.getMatchingKeysForTargetId(o,a.targetId).next((l=>{i=l}))})).next((()=>n.No.getDocumentsMatchingQuery(o,e,t?r:ie.min(),t?i:he()))).next((a=>(_P(n,a),{documents:a,Wo:i})))))}function _P(s,e){e.forEach(((t,n)=>{const r=n.key.getCollectionGroup(),i=s.Uo.get(r)||ie.min();n.readTime.compareTo(i)>0&&s.Uo.set(r,n.readTime)}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve()))))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(ts(t),this.Xo=!1):K("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="RemoteStore";class yP{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new Js(1e3),this.ca=new Js(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe((o=>{n.enqueueAndForget((async()=>{Mr(this)&&(K(An,"Restarting streams for network reachability change."),await(async function(l){const u=ae(l);u.la.add(4),await ja(u),u.Ta.set("Unknown"),u.la.delete(4),await uu(u)})(this))}))})),this.Ta=new EP(n,r)}}async function uu(s){if(Mr(s))for(const e of s.Ea)await e(!0)}async function ja(s){for(const e of s.Ea)await e(!1)}function uB(s,e){return s.oa.get(e)||void 0}function OE(s,e){const t=ae(s),n=uB(t,e.targetId);if(n!==void 0&&t._a.has(n))return;const r=(function(a,l){const u=uB(a,l);u!==void 0&&a.aa.delete(u);const h=(function(p,g){return g%2!=0?p.ca.next():p.ua.next()})(a,l);return a.oa.set(l,h),a.aa.set(h,l),h})(t,e.targetId);K(An,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new qn(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t._a.set(r,i),_d(t)?md(t):Mi(t).Yt()&&gd(t,i)}function Cd(s,e){const t=ae(s),n=Mi(t),r=uB(t,e);K(An,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t._a.delete(r),t.oa.delete(e),t.aa.delete(r),n.Yt()&&LE(t,r),t._a.size===0&&(n.Yt()?n.en():Mr(t)&&t.Ta.set("Unknown"))}function gd(s,e){if(s.Pa.J(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=s.aa.get(e.targetId);if(t===void 0)return void K(An,"SDK target ID not found for remote ID: "+e.targetId);const n=s.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}Mi(s).Pn(e)}function LE(s,e){s.Pa.J(e),Mi(s).In(e)}function md(s){s.Pa=new _A({getRemoteKeysForTarget:e=>{const t=s.aa.get(e);return t!==void 0?s.remoteSyncer.getRemoteKeysForTarget(t):he()},ye:e=>s._a.get(e)||null,Ve:()=>s.datastore.serializer.databaseId}),Mi(s).start(),s.Ta.ea()}function _d(s){return Mr(s)&&!Mi(s).Jt()&&s._a.size>0}function Mr(s){return ae(s).la.size===0}function FE(s){s.Pa=void 0}async function IP(s){s.Ta.set("Online")}async function DP(s){s._a.forEach(((e,t)=>{gd(s,e)}))}async function wP(s,e){FE(s),_d(s)?(s.Ta.ra(e),md(s)):s.Ta.set("Unknown")}async function TP(s,e,t){if(s.Ta.set("Online"),e instanceof k_&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const a of i.targetIds){if(r._a.has(a)){const l=r.aa.get(a);l!==void 0&&(await r.remoteSyncer.rejectListen(l,o),r.oa.delete(l),r.aa.delete(a)),r._a.delete(a)}r.Pa.removeTarget(a)}})(s,e)}catch(n){K(An,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await dl(s,n)}else if(e instanceof Uc?s.Pa._e(e):e instanceof F_?s.Pa.he(e):s.Pa.ue(e),!t.isEqual(ie.min()))try{const n=await NE(s.localStore);t.compareTo(n)>=0&&await(function(i,o){const a=i.Pa.fe(o);a.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=i._a.get(h);d&&i._a.set(h,d.withResumeToken(u.resumeToken,o))}})),a.targetMismatches.forEach(((u,h)=>{const d=i._a.get(u);if(!d)return;i._a.set(u,d.withResumeToken(Je.EMPTY_BYTE_STRING,d.snapshotVersion)),LE(i,u);const p=new qn(d.target,u,h,d.sequenceNumber);gd(i,p)}));const l=(function(h,d){const p=new Map;d.targetChanges.forEach(((I,N)=>{const V=h.aa.get(N);V!==void 0&&p.set(V,I)}));let g=new je(fe);return d.targetMismatches.forEach(((I,N)=>{const V=h.aa.get(I);V!==void 0&&(g=g.insert(V,N))})),new Ma(d.snapshotVersion,p,g,d.documentUpdates,d.augmentedDocumentUpdates,d.resolvedLimboDocuments)})(i,a);return i.remoteSyncer.applyRemoteEvent(l)})(s,t)}catch(n){K(An,"Failed to raise snapshot:",n),await dl(s,n)}}async function dl(s,e,t){if(!Oi(e))throw e;s.la.add(1),await ja(s),s.Ta.set("Offline"),t||(t=()=>NE(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{K(An,"Retrying IndexedDB access"),await t(),s.la.delete(1),await uu(s)}))}function kE(s,e){return e().catch((t=>dl(s,t,e)))}async function hu(s){const e=ae(s),t=Ws(e);let n=e.sa.length>0?e.sa[e.sa.length-1].batchId:UB;for(;vP(e);)try{const r=await gP(e.localStore,n);if(r===null){e.sa.length===0&&t.en();break}n=r.batchId,AP(e,r)}catch(r){await dl(e,r)}xE(e)&&ME(e)}function vP(s){return Mr(s)&&s.sa.length<10}function AP(s,e){s.sa.push(e);const t=Ws(s);t.Yt()&&t.Rn&&t.An(e.mutations)}function xE(s){return Mr(s)&&!Ws(s).Jt()&&s.sa.length>0}function ME(s){Ws(s).start()}async function RP(s){Ws(s).fn()}async function SP(s){const e=Ws(s);for(const t of s.sa)e.An(t.mutations)}async function PP(s,e,t){const n=s.sa.shift(),r=hd.from(n,e,t);await kE(s,(()=>s.remoteSyncer.applySuccessfulWrite(r))),await hu(s)}async function bP(s,e){e&&Ws(s).Rn&&await(async function(n,r){if((function(o){return hA(o)&&o!==k.ABORTED})(r.code)){const i=n.sa.shift();Ws(n).Xt(),await kE(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r))),await hu(n)}})(s,e),xE(s)&&ME(s)}async function ng(s,e){const t=ae(s);t.asyncQueue.verifyOperationInProgress(),K(An,"RemoteStore received new credentials");const n=Mr(t);t.la.add(3),await ja(t),n&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await uu(t)}async function NP(s,e){const t=ae(s);e?(t.la.delete(2),await uu(t)):e||(t.la.add(2),await ja(t),t.Ta.set("Unknown"))}function Mi(s){return s.Ia||(s.Ia=(function(t,n,r){const i=ae(t);return i.pn(),new KA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{ct:IP.bind(null,s),Et:DP.bind(null,s),Tt:wP.bind(null,s),Tn:TP.bind(null,s)}),s.Ea.push((async e=>{e?(s.Ia.Xt(),_d(s)?md(s):s.Ta.set("Unknown")):(await s.Ia.stop(),FE(s))}))),s.Ia}function Ws(s){return s.Ra||(s.Ra=(function(t,n,r){const i=ae(t);return i.pn(),new zA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{ct:()=>Promise.resolve(),Et:RP.bind(null,s),Tt:bP.bind(null,s),Vn:SP.bind(null,s),dn:PP.bind(null,s)}),s.Ea.push((async e=>{e?(s.Ra.Xt(),await hu(s)):(await s.Ra.stop(),s.sa.length>0&&(K(An,`Stopping write stream with ${s.sa.length} pending writes`),s.sa=[]))}))),s.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):ts("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,a=new yd(e,t,o,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Id(s,e){if(ts("AsyncQueue",`${e}: ${s}`),Oi(s))return new J(k.UNAVAILABLE,`${e}: ${s}`);throw s}class sg{constructor(){this.activeTargetIds=CA()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OP{constructor(){this.fu=new sg,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,n){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new sg,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Eh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{static emptySet(e){return new yr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||X.comparator(t.key,n.key):(t,n)=>X.comparator(t.key,n.key),this.keyedMap=ei(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new yr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.pu=new je(X.comparator)}track(e){const t=e.doc.key,n=this.pu.get(t);n?e.type!==0&&n.type===3?this.pu=this.pu.insert(t,e):e.type===3&&n.type!==1?this.pu=this.pu.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.pu=this.pu.remove(t):e.type===1&&n.type===2?this.pu=this.pu.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):ne(63341,{we:e,gu:n}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class _i{constructor(e,t,n,r,i,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new _i(e,t,yr.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some((e=>e.vu()))}}class FP{constructor(){this.queries=ig(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,n){const r=ae(t),i=r.queries;r.queries=ig(),i.forEach(((o,a)=>{for(const l of a.bu)l.onError(n)}))})(this,new J(k.ABORTED,"Firestore shutting down"))}}function ig(){return new kr((s=>TE(s)),cu)}async function Dd(s,e){const t=ae(s);let n=3;const r=e.query;let i=t.queries.get(r);i?!i.Su()&&e.vu()&&(n=2):(i=new LP,n=e.vu()?0:1);try{switch(n){case 0:i.wu=await t.onListen(r,!0);break;case 1:i.wu=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=Id(o,`Initialization of query '${nt(e.query)?Yn(e.query):Lo(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.bu.push(e),e.xu(t.onlineState),i.wu&&e.Cu(i.wu)&&Td(t)}async function wd(s,e){const t=ae(s),n=e.query;let r=3;const i=t.queries.get(n);if(i){const o=i.bu.indexOf(e);o>=0&&(i.bu.splice(o,1),i.bu.length===0?r=e.vu()?0:1:!i.Su()&&e.vu()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function kP(s,e){const t=ae(s);let n=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.bu)a.Cu(r)&&(n=!0);o.wu=r}}n&&Td(t)}function xP(s,e,t){const n=ae(s),r=n.queries.get(e);if(r)for(const i of r.bu)i.onError(t);n.queries.delete(e)}function Td(s){s.Du.forEach((e=>{e.next()}))}var hB;(function(s){s.Default="default",s.Cache="cache"})(hB||(hB={}));class vd{constructor(e,t,n){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=n||{}}Cu(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new _i(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache||!this.vu())return!0;const n=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Bu(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==hB.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.key=e}}class GE{constructor(e){this.key=e}}class MP{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=he(),this.mutatedKeys=he(),this.Ju=nt(e)?cB(e):WB(e),this.Yu=new yr(this.Ju)}get Zu(){return this.zu}Xu(e,t){const n=t?t.ec:new rg,r=t?t.Yu:this.Yu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const[l,u]=this.tc(this.query,r);e.inorderTraversal(((d,p)=>{const g=r.get(d),I=QS(this.query,p)?p:null,N=!!g&&this.mutatedKeys.has(g.key),V=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let z=!1;g&&I?g.data.isEqual(I.data)?N!==V&&(n.track({type:3,doc:I}),z=!0):this.nc(g,I)||(n.track({type:2,doc:I}),z=!0,(l&&this.Ju(I,l)>0||u&&this.Ju(I,u)<0)&&(a=!0)):!g&&I?(n.track({type:0,doc:I}),z=!0):g&&!I&&(n.track({type:1,doc:g}),z=!0,(l||u)&&(a=!0)),z&&(I?(o=o.add(I),i=V?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}));const h=this.rc(this.query);if(h)if(nt(this.query)){const d=[];o.forEach((I=>d.push(I)));const p=SE(this.query,d);let g=new yr(cB(this.query));for(const I of p)g=g.add(I);o.forEach((I=>{g.has(I.key)||(i=i.delete(I.key),n.track({type:1,doc:I}))})),o=g}else{const d=this.sc(this.query);for(;o.size>h;){const p=d==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),n.track({type:1,doc:p})}}return{Yu:o,ec:n,Oo:a,mutatedKeys:i}}rc(e){var t;return nt(e)?(t=_h(e))==null?void 0:t.limit:e.limit||void 0}sc(e){if(nt(e)){const t=_h(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){var n;if(nt(e)){const r=(n=_h(e))==null?void 0:n.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.rc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const o=e.ec.yu();o.sort(((h,d)=>(function(g,I){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne(20277,{we:V})}};return N(g)-N(I)})(h.type,d.type)||this.Ju(h.doc,d.doc))),this._c(n),r=r??!1;const a=t&&!r?this.oc():[],l=this.Hu.size===0&&this.current&&!r?1:0,u=l!==this.ju;return this.ju=l,o.length!==0||u?{snapshot:new _i(this.query,e.Yu,i,o,e.mutatedKeys,l===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),ac:a}:{ac:a}}xu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new rg,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach((t=>this.zu=this.zu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.zu=this.zu.delete(t))),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=he(),this.Yu.forEach((n=>{this.uc(n.key)&&(this.Hu=this.Hu.add(n.key))}));const t=[];return e.forEach((n=>{this.Hu.has(n)||t.push(new GE(n))})),this.Hu.forEach((n=>{e.has(n)||t.push(new VE(n))})),t}cc(e){this.zu=e.Wo,this.Hu=he();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return _i.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,this.ju===0,this.hasCachedResults)}}const Ad="SyncEngine";class VP{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class GP{constructor(e){this.key=e,this.Ec=!1}}class UP{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hc={},this.Tc=new kr((a=>TE(a)),cu),this.Pc=new Map,this.Ic=new Set,this.Rc=new je(X.comparator),this.Ac=new Map,this.Vc=new Bd,this.dc={},this.fc=new Map,this.mc=Js.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function HP(s,e,t=!0){const n=WE(s);let r;const i=n.Tc.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lc()):r=await UE(n,e,t,!0),r}async function qP(s,e){const t=WE(s);await UE(t,e,!0,!1)}async function UE(s,e,t,n){const r=await mP(s.localStore,nt(e)?e:wn(e)),i=r.targetId,o=s.sharedClientState.addLocalQueryTarget(i,t);let a;return n&&(a=await jP(s,e,i,o==="current",r.resumeToken)),s.isPrimaryClient&&t&&OE(s.remoteStore,r),a}async function jP(s,e,t,n,r){s.yc=(d,p,g)=>(async function(N,V,z,oe){let De=V.view.Xu(z);De.Oo&&(De=await tg(N.localStore,V.query,!1).then((({documents:A})=>V.view.Xu(A,De))));const We=oe&&oe.targetChanges.get(V.targetId),st=oe&&oe.targetMismatches.get(V.targetId)!=null,Ge=V.view.applyChanges(De,N.isPrimaryClient,We,st);return ag(N,V.targetId,Ge.ac),Ge.snapshot})(s,d,p,g);const i=await tg(s.localStore,e,!0),o=new MP(e,i.Wo),a=o.Xu(i.documents),l=Va.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),u=o.applyChanges(a,s.isPrimaryClient,l);ag(s,t,u.ac);const h=new VP(e,t,o);return s.Tc.set(e,h),s.Pc.has(t)?s.Pc.get(t).push(e):s.Pc.set(t,[e]),u.snapshot}async function JP(s,e,t){const n=ae(s),r=n.Tc.get(e),i=n.Pc.get(r.targetId);if(i.length>1)return n.Pc.set(r.targetId,i.filter((o=>!cu(o,e)))),void n.Tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await lB(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),t&&Cd(n.remoteStore,r.targetId),BB(n,r.targetId)})).catch(Ni)):(BB(n,r.targetId),await lB(n.localStore,r.targetId,!0))}async function WP(s,e){const t=ae(s),n=t.Tc.get(e),r=t.Pc.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Cd(t.remoteStore,n.targetId))}async function KP(s,e,t){const n=eb(s);try{const r=await(function(o,a){const l=ae(o),u=_e.now(),h=a.reduce(((g,I)=>g.add(I.key)),he());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let I=xt(),N=he();return l.ko.getEntries(g,h).next((V=>{I=V,I.forEach(((z,oe)=>{oe.isValidDocument()||(N=N.add(z))}))})).next((()=>l.localDocuments.getOverlayedDocuments(g,I))).next((V=>{d=V;const z=[];for(const oe of a){const De=qv(oe,d.get(oe.key).overlayedDocument);De!=null&&z.push(new Xs(oe.key,De,f_(De.value.mapValue),tn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,z,a)})).next((V=>{p=V;const z=V.applyToLocalDocumentSet(d,N);return l.documentOverlayCache.saveOverlays(g,V.batchId,z)}))})).then((()=>({batchId:p.batchId,changes:O_(d)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),(function(o,a,l){let u=o.dc[o.currentUser.toKey()];u||(u=new je(fe)),u=u.insert(a,l),o.dc[o.currentUser.toKey()]=u})(n,r.batchId,t),await Ja(n,r.changes),await hu(n.remoteStore)}catch(r){const i=Id(r,"Failed to persist write");t.reject(i)}}async function HE(s,e){const t=ae(s);try{const n=await pP(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=t.Ac.get(i);o&&($(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.Ec=!0:r.modifiedDocuments.size>0?$(o.Ec,14607):r.removedDocuments.size>0&&($(o.Ec,42227),o.Ec=!1))})),await Ja(t,n,e)}catch(n){await Ni(n)}}function og(s,e,t){const n=ae(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Tc.forEach(((i,o)=>{const a=o.view.xu(e);a.snapshot&&r.push(a.snapshot)})),(function(o,a){const l=ae(o);l.onlineState=a;let u=!1;l.queries.forEach(((h,d)=>{for(const p of d.bu)p.xu(a)&&(u=!0)})),u&&Td(l)})(n.eventManager,e),r.length&&n.hc.Tn(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function zP(s,e,t){const n=ae(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Ac.get(e),i=r&&r.key;if(i){let o=new je(X.comparator);o=o.insert(i,mt.newNoDocument(i,ie.min()));const a=he().add(i),l=new Ma(ie.min(),new Map,new je(fe),o,xt(),a);await HE(n,l),n.Rc=n.Rc.remove(i),n.Ac.delete(e),Rd(n)}else await lB(n.localStore,e,!1).then((()=>BB(n,e,t))).catch(Ni)}async function QP(s,e){const t=ae(s),n=e.batch.batchId;try{const r=await fP(t.localStore,e);jE(t,n,null),qE(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Ja(t,r)}catch(r){await Ni(r)}}async function $P(s,e,t){const n=ae(s);try{const r=await(function(o,a){const l=ae(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next((d=>($(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>l.localDocuments.getDocuments(u,h)))}))})(n.localStore,e);jE(n,e,t),qE(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Ja(n,r)}catch(r){await Ni(r)}}function qE(s,e){(s.fc.get(e)||[]).forEach((t=>{t.resolve()})),s.fc.delete(e)}function jE(s,e,t){const n=ae(s);let r=n.dc[n.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),n.dc[n.currentUser.toKey()]=r}}function BB(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Pc.get(e))s.Tc.delete(n),t&&s.hc.wc(n,t);s.Pc.delete(e),s.isPrimaryClient&&s.Vc.e_(e).forEach((n=>{s.Vc.containsKey(n)||JE(s,n)}))}function JE(s,e){s.Ic.delete(e.path.canonicalString());const t=s.Rc.get(e);t!==null&&(Cd(s.remoteStore,t),s.Rc=s.Rc.remove(e),s.Ac.delete(t),Rd(s))}function ag(s,e,t){for(const n of t)n instanceof VE?(s.Vc.addReference(n.key,e),YP(s,n)):n instanceof GE?(K(Ad,"Document no longer in limbo: "+n.key),s.Vc.removeReference(n.key,e),s.Vc.containsKey(n.key)||JE(s,n.key)):ne(19791,{bc:n})}function YP(s,e){const t=e.key,n=t.path.canonicalString();s.Rc.get(t)||s.Ic.has(n)||(K(Ad,"New document in limbo: "+t),s.Ic.add(n),Rd(s))}function Rd(s){for(;s.Ic.size>0&&s.Rc.size<s.maxConcurrentLimboResolutions;){const e=s.Ic.values().next().value;s.Ic.delete(e);const t=new X(Ee.fromString(e)),n=s.mc.next();s.Ac.set(n,new GP(t)),s.Rc=s.Rc.insert(t,n),OE(s.remoteStore,new qn(wn(Yl(t.path)),n,"TargetPurposeLimboResolution",eu.wn))}}async function Ja(s,e,t){const n=ae(s),r=[],i=[],o=[];n.Tc.isEmpty()||(n.Tc.forEach(((a,l)=>{o.push(n.yc(l,e,t).then((u=>{var h;if((u||t)&&n.isPrimaryClient){const d=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:h.current;n.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){r.push(u);const d=fd.mo(l.targetId,u);i.push(d)}})))})),await Promise.all(o),n.hc.Tn(r),await(async function(l,u){const h=ae(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>x.forEach(u,(p=>x.forEach(p.Vo,(g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g))).next((()=>x.forEach(p.fo,(g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))))))}catch(d){if(!Oi(d))throw d;K(pd,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.Lo.get(p),I=g.snapshotVersion,N=g.withLastLimboFreeSnapshotVersion(I);h.Lo=h.Lo.insert(p,N)}}})(n.localStore,i))}async function XP(s,e){const t=ae(s);if(!t.currentUser.isEqual(e)){K(Ad,"User change. New user:",e.toKey());const n=await bE(t.localStore,e);t.currentUser=e,(function(i,o){i.fc.forEach((a=>{a.forEach((l=>{l.reject(new J(k.CANCELLED,o))}))})),i.fc.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Ja(t,n.$o)}}function ZP(s,e){const t=ae(s),n=t.Ac.get(e);if(n&&n.Ec)return he().add(n.key);{let r=he();const i=t.Pc.get(e);if(!i)return r;for(const o of i??[]){const a=t.Tc.get(o);r=r.unionWith(a.view.Zu)}return r}}function WE(s){const e=ae(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=HE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zP.bind(null,e),e.hc.Tn=kP.bind(null,e.eventManager),e.hc.wc=xP.bind(null,e.eventManager),e}function eb(s){const e=ae(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$P.bind(null,e),e}class fl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zl(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return dP(this.persistence,new uP,e.initialUser,this.serializer)}Dc(e){return new PE(dd.b_,this.serializer)}vc(e){return new OP}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fl.provider={build:()=>new fl};class tb extends fl{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){$(this.persistence.referenceDelegate instanceof Bl,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new iR(n,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?Ft.withCacheSize(this.cacheSizeBytes):Ft.DEFAULT;return new PE((n=>Bl.b_(n,t)),this.serializer)}}class dB{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>og(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=XP.bind(null,this.syncEngine),await NP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new FP})()}createDatastore(e){const t=Zl(e.databaseInfo.databaseId),n=WA(e.databaseInfo);return YA(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,r,i,o,a){return new yP(n,r,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>og(this.syncEngine,t,0)),(function(){return jC.Ye()?new jC:new HA})())}createSyncEngine(e,t){return(function(r,i,o,a,l,u,h){const d=new UP(r,i,o,a,l,u);return h&&(d.gc=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=ae(r);K(An,"RemoteStore shutting down."),i.la.add(5),await ja(i),i.ha.shutdown(),i.Ta.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}dB.provider={build:()=>new dB};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="FirestoreClient";class nb{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=gt.UNAUTHENTICATED,this.clientId=jl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{K(Ks,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(K(Ks,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Id(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function yh(s,e){s.asyncQueue.verifyOperationInProgress(),K(Ks,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async r=>{n.isEqual(r)||(await bE(e.localStore,r),n=r)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function cg(s,e){s.asyncQueue.verifyOperationInProgress();const t=await sb(s);K(Ks,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener((n=>ng(e.remoteStore,n))),s.setAppCheckTokenChangeListener(((n,r)=>ng(e.remoteStore,r))),s._onlineComponents=e}async function sb(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){K(Ks,"Using user provided OfflineComponentProvider");try{await yh(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===k.FAILED_PRECONDITION||r.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;nn("Error using user provided cache. Falling back to memory cache: "+t),await yh(s,new fl)}}else K(Ks,"Using default OfflineComponentProvider"),await yh(s,new tb(void 0));return s._offlineComponents}async function KE(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(K(Ks,"Using user provided OnlineComponentProvider"),await cg(s,s._uninitializedComponentsProvider._online)):(K(Ks,"Using default OnlineComponentProvider"),await cg(s,new dB))),s._onlineComponents}function rb(s){return KE(s).then((e=>e.syncEngine))}async function pl(s){const e=await KE(s),t=e.eventManager;return t.onListen=HP.bind(null,e.syncEngine),t.onUnlisten=JP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=WP.bind(null,e.syncEngine),t}function ib(s,e,t,n){const r=new Ed(n),i=new vd(e,r,t);return s.asyncQueue.enqueueAndForget((async()=>Dd(await pl(s),i))),()=>{r.Va(),s.asyncQueue.enqueueAndForget((async()=>wd(await pl(s),i)))}}function ob(s,e,t={}){const n=new Qn;return s.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const h=new Ed({next:p=>{h.Va(),o.enqueueAndForget((()=>wd(i,d)));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new J(k.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&l&&l.source==="server"?u.reject(new J(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new vd(Yl(a.path),h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Dd(i,d)})(await pl(s),s.asyncQueue,e,t,n))),n.promise}function ab(s,e,t={}){const n=new Qn;return s.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const h=new Ed({next:p=>{h.Va(),o.enqueueAndForget((()=>wd(i,d))),p.fromCache&&l.source==="server"?u.reject(new J(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new vd(a instanceof xo?GS(a):a,h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Dd(i,d)})(await pl(s),s.asyncQueue,e,t,n))),n.promise}function cb(s,e){const t=new Qn;return s.asyncQueue.enqueueAndForget((async()=>KP(await rb(s),e,t))),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zE=class{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Hs("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},lb=class extends zE{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{convertValue(e,t="none"){switch(et(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ne(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ys(e,((r,i)=>{n[r]=this.convertValue(i,t)})),n}convertVectorValue(e){var n,r,i;const t=(i=(r=(n=e.fields)==null?void 0:n[ea].arrayValue)==null?void 0:r.values)==null?void 0:i.map((o=>Me(o.doubleValue)));return new St(t)}convertGeoPoint(e){return new un(Me(e.latitude),Me(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ka(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(fi(e));default:return null}}convertTimestamp(e){const t=xs(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ee.fromString(e);$(q_(n),9688,{name:e});const r=new pi(n.get(1),n.get(3)),i=new X(n.popFirst(5));return r.isEqual(t)||ts(`A document reference to ${i} refers to a different database (${r.projectId}/${r.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(s,e,t){let n;return n=s?t&&(t.merge||t.mergeFields)?s.toFirestore(e,t):s.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="AsyncQueue";class ug{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new $_(this,"async_queue_retry"),this.Hc=()=>{const n=Eh();n&&K(lg,"Visibility state changed to "+n.visibilityState),this.Ht.$t()},this.Jc=e;const t=Eh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=Eh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise((()=>{}));const t=new Qn;return this.Zc((()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.$c.push(e),this.Xc())))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!Oi(e))throw e;K(lg,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt((()=>this.Xc()))}}Zc(e){const t=this.Jc.then((()=>(this.Gc=!0,e().catch((n=>{throw this.Wc=n,this.Gc=!1,ts("INTERNAL UNHANDLED ERROR: ",hg(n)),n})).then((n=>(this.Gc=!1,n))))));return this.Jc=t,t}enqueueAfterDelay(e,t,n){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const r=yd.createAndSchedule(this,e,t,n,(i=>this.el(i)));return this.Qc.push(r),r}Yc(){this.Wc&&ne(47125,{tl:hg(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then((()=>{this.Qc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()}))}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function hg(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class Rn extends tu{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ug,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ug(e),this._firestoreClient=void 0,await e}}}function YE(s,e){const t=typeof s=="object"?s:xB(),n=typeof s=="string"?s:nl,r=ql(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const i=Lm("firestore");i&&$B(r,...i)}return r}function Wa(s){if(s._terminated)throw new J(k.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||ub(s),s._firestoreClient}function ub(s){var n,r,i,o;const e=s._freezeSettings(),t=ZA(s._databaseId,((n=s._app)==null?void 0:n.options.appId)||"",s._persistenceKey,(r=s._app)==null?void 0:r.options.apiKey,e);s._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new nb(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(s._componentsProvider))}/**
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
 */class Sd extends QE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,t)}}class ri{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ps extends zE{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Hs("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ps._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ps._jsonSchema={type:Xe("string",Ps._jsonSchemaVersion),bundleSource:Xe("string","DocumentSnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class Vo extends Ps{data(e={}){return super.data(e)}}class bs{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ri(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Vo(this._firestore,this._userDataWriter,n.key,n,new ri(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((a=>{nt(r._snapshot.query)?cB(r._snapshot.query):WB(r.query._query);const l=new Vo(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ri(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const l=new Vo(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ri(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:hb(a.type),doc:l,oldIndex:u,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=jl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function hb(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne(61501,{type:s})}}/**
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
 */bs._jsonSchemaVersion="firestore/querySnapshot/1.0",bs._jsonSchema={type:Xe("string",bs._jsonSchemaVersion),bundleSource:Xe("string","QuerySnapshot"),bundleName:Xe("string"),bundle:Xe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new J(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pd{}class Bu extends Pd{}function Cl(s,e,...t){let n=[];e instanceof Pd&&n.push(e),n=n.concat(t),(function(i){const o=i.filter((l=>l instanceof du)).length,a=i.filter((l=>l instanceof Ka)).length;if(o>1||o>0&&a>0)throw new J(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const r of n)s=r._apply(s);return s}class Ka extends Bu{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ka(e,t,n)}_apply(e){const t=this._parse(e);return ZE(e._query,t),new Nn(e.firestore,e.converter,nB(e._query,t))}_parse(e){const t=nu(e.firestore);return(function(i,o,a,l,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new J(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){dg(d,h);const I=[];for(const N of d)I.push(Bg(l,i,N));p={arrayValue:{values:I}}}else p=Bg(l,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||dg(d,h),p=dR(a,o,d,h==="in"||h==="not-in");return Ye.create(u,h,p)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function fB(s,e,t){const n=e,r=Hs("where",s);return Ka._create(r,n,t)}class du extends Pd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new du(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:Bn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let o=r;const a=i.getFlattenedFilters();for(const l of a)ZE(o,l),o=nB(o,l)})(e._query,t),new Nn(e.firestore,e.converter,nB(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fu extends Bu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new fu(e,t)}_apply(e){const t=(function(r,i,o){if(r.startAt!==null)throw new J(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new J(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new oa(i,o)})(e._query,this._field,this._direction);return new Nn(e.firestore,e.converter,aA(e._query,t))}}function gl(s,e="asc"){const t=e,n=Hs("orderBy",s);return fu._create(n,t)}class pu extends Bu{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new pu(e,t,n)}_apply(e){return new Nn(e.firestore,e.converter,cl(e._query,this._limit,this._limitType))}}function ml(s){return Sv("limit",s),pu._create("limit",s,"F")}function Bg(s,e,t){if(typeof(t=te(t))=="string"){if(t==="")throw new J(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!P_(e)&&t.indexOf("/")!==-1)throw new J(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Ee.fromString(t));if(!X.isDocumentKey(n))throw new J(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return RC(s,new X(n))}if(t instanceof xe)return RC(s,t._key);throw new J(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jl(t)}.`)}function dg(s,e){if(!Array.isArray(s)||s.length===0)throw new J(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ZE(s,e){const t=(function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(s.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new J(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(s){return(function(t,n){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1})(s,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(s){s=Rt(s,xe);const e=Rt(s.firestore,Rn),t=Wa(e);return ob(t,s._key).then((n=>ny(e,s,n)))}function ey(s){s=Rt(s,Nn);const e=Rt(s.firestore,Rn),t=Wa(e),n=new Sd(e);return XE(s._query),ab(t,s._query).then((r=>new bs(e,n,s,r)))}function jn(s,e,t){s=Rt(s,xe);const n=Rt(s.firestore,Rn),r=$E(s.converter,e,t),i=nu(n);return za(n,[nE(i,"setDoc",s._key,r,s.converter!==null,t).toMutation(s._key,tn.none())])}function Br(s,e,t,...n){s=Rt(s,xe);const r=Rt(s.firestore,Rn),i=nu(r);let o;return o=typeof(e=te(e))=="string"||e instanceof Ga?BR(i,"updateDoc",s._key,e,t,n):hR(i,"updateDoc",s._key,e),za(r,[o.toMutation(s._key,tn.exists(!0))])}function bd(s){return za(Rt(s.firestore,Rn),[new JB(s._key,tn.none())])}function ty(s,e){const t=Rt(s.firestore,Rn),n=_t(s),r=$E(s.converter,e),i=nu(s.firestore);return za(t,[nE(i,"addDoc",n._key,r,s.converter!==null,{}).toMutation(n._key,tn.exists(!1))]).then((()=>n))}function pa(s,...e){var u,h,d;s=te(s);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||fg(e[n])||(t=e[n++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(fg(e[n])){const p=e[n];e[n]=(u=p.next)==null?void 0:u.bind(p),e[n+1]=(h=p.error)==null?void 0:h.bind(p),e[n+2]=(d=p.complete)==null?void 0:d.bind(p)}let i,o,a;if(s instanceof xe)o=Rt(s.firestore,Rn),a=Yl(s._key.path),i={next:p=>{e[n]&&e[n](ny(o,s,p))},error:e[n+1],complete:e[n+2]};else{const p=Rt(s,Nn);o=Rt(p.firestore,Rn),a=p._query;const g=new Sd(o);i={next:I=>{e[n]&&e[n](new bs(o,g,p,I))},error:e[n+1],complete:e[n+2]},XE(s._query)}const l=Wa(o);return ib(l,a,r,i)}function za(s,e){const t=Wa(s);return cb(t,e)}function ny(s,e,t){const n=t.docs.get(e._key),r=new Sd(s);return new Ps(s,r,e._key,n,new ri(t.hasPendingWrites,t.fromCache),e.converter)}const pg="@firebase/firestore",Cg="4.17.2";(function(e,t=!0){Dv(Fr),Tr(new ks("firestore",((n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new Rn(new MA(n.getProvider("auth-internal")),new UA(o,n.getProvider("app-check-internal")),Nv(o,r),o);return i={useFetchStreams:t,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),Dn(pg,Cg,e),Dn(pg,Cg,"esm2020")})();const Bb=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:QE,Bytes:Qt,CollectionReference:$n,DocumentReference:xe,DocumentSnapshot:Ps,FieldPath:Ga,FieldValue:Ua,Firestore:Rn,FirestoreError:J,GeoPoint:un,Query:Nn,QueryCompositeFilterConstraint:du,QueryConstraint:Bu,QueryDocumentSnapshot:Vo,QueryFieldFilterConstraint:Ka,QueryLimitConstraint:pu,QueryOrderByConstraint:fu,QuerySnapshot:bs,SnapshotMetadata:ri,Timestamp:_e,VectorValue:St,_AutoId:jl,_ByteString:Je,_DatabaseId:pi,_DocumentKey:X,_EmptyAuthCredentialsProvider:z_,_FieldPath:Gt,_cast:Rt,_logWarn:nn,_validateIsNotUsedTogether:o_,addDoc:ty,collection:la,connectFirestoreEmulator:$B,deleteDoc:bd,deleteField:lE,doc:_t,documentId:W_,ensureFirestoreConfigured:Wa,executeWrite:za,getDoc:Ir,getDocs:ey,getFirestore:YE,limit:ml,onSnapshot:pa,orderBy:gl,query:Cl,serverTimestamp:uE,setDoc:jn,updateDoc:Br,vector:hE,where:fB},Symbol.toStringTag,{value:"Module"}));var db="firebase",fb="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(db,fb,"app");var gg={};const mg="@firebase/database",_g="1.1.5";/**
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
 */let sy="";function pb(s){sy=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Qo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return bn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Cb(e)}}catch{}return new gb},pr=ry("localStorage"),mb=ry("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Hl("@firebase/database"),_b=(function(){let s=1;return function(){return s++}})(),iy=function(s){const e=Gw(s),t=new kw;t.update(e);const n=t.digest();return OB.encodeByteArray(n)},Qa=function(...s){let e="";for(let t=0;t<s.length;t++){const n=s[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=Qa.apply(null,n):typeof n=="object"?e+=ct(n):e+=n,e+=" "}return e};let Go=null,Eg=!0;const Eb=function(s,e){j(!0,"Can't turn on custom loggers persistently."),oi.logLevel=de.VERBOSE,Go=oi.log.bind(oi)},Bt=function(...s){if(Eg===!0&&(Eg=!1,Go===null&&mb.get("logging_enabled")===!0&&Eb()),Go){const e=Qa.apply(null,s);Go(e)}},$a=function(s){return function(...e){Bt(s,...e)}},pB=function(...s){const e="FIREBASE INTERNAL ERROR: "+Qa(...s);oi.error(e)},ss=function(...s){const e=`FIREBASE FATAL ERROR: ${Qa(...s)}`;throw oi.error(e),new Error(e)},Pt=function(...s){const e="FIREBASE WARNING: "+Qa(...s);oi.warn(e)},yb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cu=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},Ib=function(s){if(document.readyState==="complete")s();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ei="[MIN_NAME]",Sr="[MAX_NAME]",Vr=function(s,e){if(s===e)return 0;if(s===Ei||e===Sr)return-1;if(e===Ei||s===Sr)return 1;{const t=yg(s),n=yg(e);return t!==null?n!==null?t-n===0?s.length-e.length:t-n:-1:n!==null?1:s<e?-1:1}},Db=function(s,e){return s===e?0:s<e?-1:1},uo=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+ct(e))},Nd=function(s){if(typeof s!="object"||s===null)return ct(s);const e=[];for(const n in s)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=ct(e[n]),t+=":",t+=Nd(s[e[n]]);return t+="}",t},oy=function(s,e){const t=s.length;if(t<=e)return[s];const n=[];for(let r=0;r<t;r+=e)r+e>t?n.push(s.substring(r,t)):n.push(s.substring(r,r+e));return n};function yt(s,e){for(const t in s)s.hasOwnProperty(t)&&e(t,s[t])}const ay=function(s){j(!Cu(s),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let r,i,o,a,l;s===0?(i=0,o=0,r=1/s===-1/0?1:0):(r=s<0,s=Math.abs(s),s>=Math.pow(2,1-n)?(a=Math.min(Math.floor(Math.log(s)/Math.LN2),n),i=a+n,o=Math.round(s*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(s/Math.pow(2,1-n-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},wb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Tb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vb(s,e){let t="Unknown Error";s==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?t="Client doesn't have permission to access the desired data.":s==="unavailable"&&(t="The service is unavailable");const n=new Error(s+" at "+e._path.toString()+": "+t);return n.code=s.toUpperCase(),n}const Ab=new RegExp("^-?(0*)\\d{1,10}$"),Rb=-2147483648,Sb=2147483647,yg=function(s){if(Ab.test(s)){const e=Number(s);if(e>=Rb&&e<=Sb)return e}return null},Vi=function(s){try{s()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Pt("Exception was thrown by user callback.",t),e},Math.floor(0))}},Pb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Uo=function(s,e){const t=setTimeout(s,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class bb{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ke(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(n=>this.appCheck=n)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Pt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Bt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pt(e)}}class jc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}jc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="5",cy="v",ly="s",uy="r",hy="f",By=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dy="ls",fy="p",CB="ac",py="websocket",Cy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,t,n,r,i=!1,o="",a=!1,l=!1,u=null){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ob(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function my(s,e,t){j(typeof e=="string","typeof type must == string"),j(typeof t=="object","typeof params must == object");let n;if(e===py)n=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===Cy)n=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ob(s)&&(t.ns=s.namespace);const r=[];return yt(t,(i,o)=>{r.push(i+"="+o)}),n+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.counters_={}}incrementCounter(e,t=1){bn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return mw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih={},Dh={};function Ld(s){const e=s.toString();return Ih[e]||(Ih[e]=new Lb),Ih[e]}function Fb(s,e){const t=s.toString();return Dh[t]||(Dh[t]=e()),Dh[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<n.length;++r)n[r]&&Vi(()=>{this.onMessage_(n[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="start",xb="close",Mb="pLPCommand",Vb="pRTLPCB",_y="id",Ey="pw",yy="ser",Gb="cb",Ub="seg",Hb="ts",qb="d",jb="dframe",Iy=1870,Dy=30,Jb=Iy-Dy,Wb=25e3,Kb=3e4;class Cr{constructor(e,t,n,r,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$a(e),this.stats_=Ld(t),this.urlFn=l=>(this.appCheckToken&&(l[CB]=this.appCheckToken),my(t,Cy,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new kb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Kb)),Ib(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fd((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ig)this.id=a,this.password=l;else if(o===xb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const n={};n[Ig]="t",n[yy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[Gb]=this.scriptTagHolder.uniqueCallbackIdentifier),n[cy]=Od,this.transportSessionId&&(n[ly]=this.transportSessionId),this.lastSessionId&&(n[dy]=this.lastSessionId),this.applicationId&&(n[fy]=this.applicationId),this.appCheckToken&&(n[CB]=this.appCheckToken),typeof location<"u"&&location.hostname&&By.test(location.hostname)&&(n[uy]=hy);const r=this.urlFn(n);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cr.forceAllow_=!0}static forceDisallow(){Cr.forceDisallow_=!0}static isAvailable(){return Cr.forceAllow_?!0:!Cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wb()&&!Tb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=bm(t),r=oy(n,Jb);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[jb]="t",n[_y]=e,n[Ey]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ct(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fd{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_b(),window[Mb+this.uniqueCallbackIdentifier]=e,window[Vb+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Bt("frame writing exception"),a.stack&&Bt(a.stack),Bt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Bt("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_y]=this.myID,e[Ey]=this.myPW,e[yy]=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Dy+n.length<=Iy;){const o=this.pendingSegs.shift();n=n+"&"+Ub+r+"="+o.seg+"&"+Hb+r+"="+o.ts+"&"+qb+r+"="+o.d,r++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Wb)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const r=n.readyState;(!r||r==="loaded"||r==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Bt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=16384,Qb=45e3;let _l=null;typeof MozWebSocket<"u"?_l=MozWebSocket:typeof WebSocket<"u"&&(_l=WebSocket);class an{constructor(e,t,n,r,i,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$a(this.connId),this.stats_=Ld(t),this.connURL=an.connectionURL_(t,o,a,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={};return o[cy]=Od,typeof location<"u"&&location.hostname&&By.test(location.hostname)&&(o[uy]=hy),t&&(o[ly]=t),n&&(o[dy]=n),r&&(o[CB]=r),i&&(o[fy]=i),my(e,py,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pr.set("previous_websocket_failure",!0);try{let n;Rw(),this.mySock=new _l(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){an.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&_l!==null&&!an.forceDisallow_}static previouslyFailed(){return pr.isInMemoryStorage||pr.get("previous_websocket_failure")===!0}markConnectionHealthy(){pr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=Qo(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=oy(t,zb);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Qb))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}an.responsesRequiredToBeHealthy=2;an.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{static get ALL_TRANSPORTS(){return[Cr,an]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=an&&an.isAvailable();let n=t&&!an.previouslyFailed();if(e.webSocketOnly&&(t||Pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[an];else{const r=this.transports_=[];for(const i of yi.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);yi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=6e4,Yb=5e3,Xb=10*1024,Zb=100*1024,wh="t",Dg="d",eN="s",wg="r",tN="e",Tg="o",vg="a",Ag="n",Rg="p",nN="h";class sN{constructor(e,t,n,r,i,o,a,l,u,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$a("c:"+this.id+":"),this.transportManager_=new yi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Uo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Zb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wh in e){const t=e[wh];t===vg?this.upgradeIfSecondaryHealthy_():t===wg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Tg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=uo("t",e),n=uo("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Rg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ag,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=uo("t",e),n=uo("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=uo(wh,e);if(Dg in e){const n=e[Dg];if(t===nN){const r={...n};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Ag){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===eN?this.onConnectionShutdown_(n):t===wg?this.onReset_(n):t===tN?pB("Server Error: "+n):t===Tg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pB("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Od!==n&&Pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Uo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($b))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Uo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Rg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let r=0;r<n.length;r++)n[r].callback.apply(n[r].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context)){r.splice(i,1);return}}validateEventType_(e){j(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Ty{static getInstance(){return new El}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!LB()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=32,Pg=768;class Ie{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ye(){return new Ie("")}function le(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function zs(s){return s.pieces_.length-s.pieceNum_}function Ae(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new Ie(s.pieces_,e)}function kd(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function rN(s){let e="";for(let t=s.pieceNum_;t<s.pieces_.length;t++)s.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[t])));return e||"/"}function Ca(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function vy(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let t=s.pieceNum_;t<s.pieces_.length-1;t++)e.push(s.pieces_[t]);return new Ie(e,0)}function qe(s,e){const t=[];for(let n=s.pieceNum_;n<s.pieces_.length;n++)t.push(s.pieces_[n]);if(e instanceof Ie)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let r=0;r<n.length;r++)n[r].length>0&&t.push(n[r])}return new Ie(t,0)}function ue(s){return s.pieceNum_>=s.pieces_.length}function Mt(s,e){const t=le(s),n=le(e);if(t===null)return e;if(t===n)return Mt(Ae(s),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function iN(s,e){const t=Ca(s,0),n=Ca(e,0);for(let r=0;r<t.length&&r<n.length;r++){const i=Vr(t[r],n[r]);if(i!==0)return i}return t.length===n.length?0:t.length<n.length?-1:1}function xd(s,e){if(zs(s)!==zs(e))return!1;for(let t=s.pieceNum_,n=e.pieceNum_;t<=s.pieces_.length;t++,n++)if(s.pieces_[t]!==e.pieces_[n])return!1;return!0}function en(s,e){let t=s.pieceNum_,n=e.pieceNum_;if(zs(s)>zs(e))return!1;for(;t<s.pieces_.length;){if(s.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class oN{constructor(e,t){this.errorPrefix_=t,this.parts_=Ca(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Ul(this.parts_[n]);Ay(this)}}function aN(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=Ul(e),Ay(s)}function cN(s){const e=s.parts_.pop();s.byteLength_-=Ul(e),s.parts_.length>0&&(s.byteLength_-=1)}function Ay(s){if(s.byteLength_>Pg)throw new Error(s.errorPrefix_+"has a key path longer than "+Pg+" bytes ("+s.byteLength_+").");if(s.parts_.length>Sg)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sg+") or object contains a cycle "+lr(s))}function lr(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md extends Ty{static getInstance(){return new Md}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=1e3,lN=300*1e3,bg=30*1e3,uN=1.3,hN=3e4,BN="server_kill",Ng=3;class Xn extends wy{constructor(e,t,n,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Xn.nextPersistentConnectionId_++,this.log_=$a("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ho,this.maxReconnectDelay_=lN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Md.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&El.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(ct(i)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new gn,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;Xn.warnOnListenWarnings_(l,t),(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(n,r),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&bn(e,"w")){const n=hi(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Fw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Lw(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=n,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const i=n.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):pB("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hN&&(this.reconnectDelay_=ho),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Xn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},u=function(d){j(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Bt("getToken() completed but was canceled"):(Bt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new sN(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,g=>{Pt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(BN)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Pt(d),l())}}}interrupt(e){Bt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Bt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zc(this.interruptReasons_)&&(this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(i=>Nd(i)).join("$"):n="default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Ie(e).toString();let r;if(this.listens.has(n)){const i=this.listens.get(n);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){Bt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ng&&(this.reconnectDelay_=bg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Bt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ng&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+sy.replace(/\./g,"-")]=1,LB()?e["framework.cordova"]=1:Mm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=El.getInstance().currentlyOnline();return Zc(this.interruptReasons_)&&e}}Xn.nextPersistentConnectionId_=0;Xn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Be(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Be(Ei,e),r=new Be(Ei,t);return this.compare(n,r)!==0}minPost(){return Be.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bc;class Ry extends gu{static get __EMPTY_NODE(){return bc}static set __EMPTY_NODE(e){bc=e}compare(e,t){return Vr(e.name,t.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Be.MIN}maxPost(){return new Be(Sr,bc)}makePost(e,t){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new Be(e,bc)}toString(){return".key"}}const ai=new Ry;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class at{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??at.RED,this.left=r??Vt.EMPTY_NODE,this.right=i??Vt.EMPTY_NODE}copy(e,t,n,r,i){return new at(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return Vt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}at.RED=!0;at.BLACK=!1;class dN{copy(e,t,n,r,i){return this}insert(e,t,n){return new at(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Vt{constructor(e,t=Vt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Vt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,at.BLACK,null,null))}remove(e){return new Vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,at.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(r=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Nc(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Nc(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Nc(this.root_,null,this.comparator_,!0,e)}}Vt.EMPTY_NODE=new dN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(s,e){return Vr(s.name,e.name)}function Vd(s,e){return Vr(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gB;function pN(s){gB=s}const Sy=function(s){return typeof s=="number"?"number:"+ay(s):"string:"+s},Py=function(s){if(s.isLeafNode()){const e=s.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bn(e,".sv"),"Priority must be a string or number.")}else j(s===gB||s.isEmpty(),"priority of unexpected type.");j(s===gB||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Og;class it{static set __childrenNodeConstructor(e){Og=e}static get __childrenNodeConstructor(){return Og}constructor(e,t=it.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Py(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new it(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:le(e)===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:it.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=le(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(j(n!==".priority"||zs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,it.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Sy(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ay(this.value_):e+=this.value_,this.lazyHash_=iy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===it.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof it.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=it.VALUE_TYPE_ORDER.indexOf(t),i=it.VALUE_TYPE_ORDER.indexOf(n);return j(r>=0,"Unknown leaf type: "+t),j(i>=0,"Unknown leaf type: "+n),r===i?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}it.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let by,Ny;function CN(s){by=s}function gN(s){Ny=s}class mN extends gu{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return i===0?Vr(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Be.MIN}maxPost(){return new Be(Sr,new it("[PRIORITY-POST]",Ny))}makePost(e,t){const n=by(e);return new Be(t,new it("[PRIORITY-POST]",n))}toString(){return".priority"}}const Ve=new mN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=Math.log(2);class EN{constructor(e){const t=i=>parseInt(Math.log(i)/_N,10),n=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yl=function(s,e,t,n){s.sort(e);const r=function(l,u){const h=u-l;let d,p;if(h===0)return null;if(h===1)return d=s[l],p=t?t(d):d,new at(p,d.node,at.BLACK,null,null);{const g=parseInt(h/2,10)+l,I=r(l,g),N=r(g+1,u);return d=s[g],p=t?t(d):d,new at(p,d.node,at.BLACK,I,N)}},i=function(l){let u=null,h=null,d=s.length;const p=function(I,N){const V=d-I,z=d;d-=I;const oe=r(V+1,z),De=s[V],We=t?t(De):De;g(new at(We,De.node,N,null,oe))},g=function(I){u?(u.left=I,u=I):(h=I,u=I)};for(let I=0;I<l.count;++I){const N=l.nextBitIsOne(),V=Math.pow(2,l.count-(I+1));N?p(V,at.BLACK):(p(V,at.BLACK),p(V,at.RED))}return h},o=new EN(s.length),a=i(o);return new Vt(n||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Th;const Wr={};class Jn{static get Default(){return j(Wr&&Ve,"ChildrenNode.ts has not been loaded"),Th=Th||new Jn({".priority":Wr},{".priority":Ve}),Th}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=hi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Vt?t:null}hasIndex(e){return bn(this.indexSet_,e.toString())}addIndex(e,t){j(e!==ai,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Be.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();let a;r?a=yl(n,e.getCompare()):a=Wr;const l=e.toString(),u={...this.indexSet_};u[l]=e;const h={...this.indexes_};return h[l]=a,new Jn(h,u)}addToIndexes(e,t){const n=el(this.indexes_,(r,i)=>{const o=hi(this.indexSet_,i);if(j(o,"Missing index implementation for "+i),r===Wr)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(Be.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),yl(a,o.getCompare())}else return Wr;else{const a=t.get(e.name);let l=r;return a&&(l=l.remove(new Be(e.name,a))),l.insert(e,e.node)}});return new Jn(n,this.indexSet_)}removeFromIndexes(e,t){const n=el(this.indexes_,r=>{if(r===Wr)return r;{const i=t.get(e.name);return i?r.remove(new Be(e.name,i)):r}});return new Jn(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo;class re{static get EMPTY_NODE(){return Bo||(Bo=new re(new Vt(Vd),null,Jn.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Py(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bo}updatePriority(e){return this.children_.isEmpty()?this:new re(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Bo:t}}getChild(e){const t=le(e);return t===null?this:this.getImmediateChild(t).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(j(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new Be(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?Bo:this.priorityNode_;return new re(r,o,i)}}updateChild(e,t){const n=le(e);if(n===null)return t;{j(le(e)!==".priority"||zs(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(Ae(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Ve,(o,a)=>{t[o]=a.val(e),n++,i&&re.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*n){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Sy(this.getPriority().val())+":"),this.forEachChild(Ve,(t,n)=>{const r=n.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":iy(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const i=r.getPredecessorKey(new Be(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Be(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Be(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Be.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Be.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ya?-1:0}withIndex(e){if(e===ai||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new re(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ai||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(Ve),r=t.getIterator(Ve);let i=n.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ai?null:this.indexMap_.get(e.toString())}}re.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yN extends re{constructor(){super(new Vt(Vd),re.EMPTY_NODE,Jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return re.EMPTY_NODE}isEmpty(){return!1}}const Ya=new yN;Object.defineProperties(Be,{MIN:{value:new Be(Ei,re.EMPTY_NODE)},MAX:{value:new Be(Sr,Ya)}});Ry.__EMPTY_NODE=re.EMPTY_NODE;it.__childrenNodeConstructor=re;pN(Ya);gN(Ya);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=!0;function $e(s,e=null){if(s===null)return re.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const t=s;return new it(t,$e(e))}if(!(s instanceof Array)&&IN){const t=[];let n=!1;if(yt(s,(o,a)=>{if(o.substring(0,1)!=="."){const l=$e(a);l.isEmpty()||(n=n||!l.getPriority().isEmpty(),t.push(new Be(o,l)))}}),t.length===0)return re.EMPTY_NODE;const i=yl(t,fN,o=>o.name,Vd);if(n){const o=yl(t,Ve.getCompare());return new re(i,$e(e),new Jn({".priority":o},{".priority":Ve}))}else return new re(i,$e(e),Jn.Default)}else{let t=re.EMPTY_NODE;return yt(s,(n,r)=>{if(bn(s,n)&&n.substring(0,1)!=="."){const i=$e(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(n,i))}}),t.updatePriority($e(e))}}CN($e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN extends gu{constructor(e){super(),this.indexPath_=e,j(!ue(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return i===0?Vr(e.name,t.name):i}makePost(e,t){const n=$e(e),r=re.EMPTY_NODE.updateChild(this.indexPath_,n);return new Be(t,r)}maxPost(){const e=re.EMPTY_NODE.updateChild(this.indexPath_,Ya);return new Be(Sr,e)}toString(){return Ca(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN extends gu{compare(e,t){const n=e.node.compareTo(t.node);return n===0?Vr(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Be.MIN}maxPost(){return Be.MAX}makePost(e,t){const n=$e(e);return new Be(t,n)}toString(){return".value"}}const TN=new wN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(s){return{type:"value",snapshotNode:s}}function Ii(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function ga(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function ma(s,e,t){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:t}}function vN(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()||(o!=null&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(ga(t,a)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ii(t,n)):o.trackChildChange(ma(t,n,a))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(Ve,(r,i)=>{t.hasChild(r)||n.trackChildChange(ga(r,i))}),t.isLeafNode()||t.forEachChild(Ve,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||n.trackChildChange(ma(r,i,o))}else n.trackChildChange(Ii(r,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?re.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.indexedFilter_=new Gd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_a.getStartPost_(e),this.endPost_=_a.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,o){return this.matches(new Be(t,n))||(n=re.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=re.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(re.EMPTY_NODE);const i=this;return t.forEachChild(Ve,(o,a)=>{i.matches(new Be(o,a))||(r=r.updateImmediateChild(o,re.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new _a(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new Be(t,n))||(n=re.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=re.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=re.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(re.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,re.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(p,g)=>d(g,p)}else o=this.index_.getCompare();const a=e;j(a.numChildren()===this.limit_,"");const l=new Be(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let p=r.getChildAfterChild(this.index_,u,this.reverse_);for(;p!=null&&(p.name===t||a.hasChild(p.name));)p=r.getChildAfterChild(this.index_,p,this.reverse_);const g=p==null?1:o(p,l);if(h&&!n.isEmpty()&&g>=0)return i!=null&&i.trackChildChange(ma(t,n,d)),a.updateImmediateChild(t,n);{i!=null&&i.trackChildChange(ga(t,d));const N=a.updateImmediateChild(t,re.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(i!=null&&i.trackChildChange(Ii(p.name,p.node)),N.updateImmediateChild(p.name,p.node)):N}}else return n.isEmpty()?e:h&&o(u,l)>=0?(i!=null&&(i.trackChildChange(ga(u.name,u.node)),i.trackChildChange(Ii(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,re.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ei}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const e=new Ud;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function RN(s){return s.loadsAllData()?new Gd(s.getIndex()):s.hasLimit()?new AN(s):new _a(s)}function Lg(s){const e={};if(s.isDefault())return e;let t;if(s.index_===Ve?t="$priority":s.index_===TN?t="$value":s.index_===ai?t="$key":(j(s.index_ instanceof DN,"Unrecognized index type!"),t=s.index_.toString()),e.orderBy=ct(t),s.startSet_){const n=s.startAfterSet_?"startAfter":"startAt";e[n]=ct(s.indexStartValue_),s.startNameSet_&&(e[n]+=","+ct(s.indexStartName_))}if(s.endSet_){const n=s.endBeforeSet_?"endBefore":"endAt";e[n]=ct(s.indexEndValue_),s.endNameSet_&&(e[n]+=","+ct(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function Fg(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let t=s.viewFrom_;t===""&&(s.isViewFromLeft()?t="l":t="r"),e.vf=t}return s.index_!==Ve&&(e.i=s.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends wy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=$a("p:rest:"),this.listens_={}}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Il.getListenId_(e,n),a={};this.listens_[o]=a;const l=Lg(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,n),hi(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",r(p,null)}})}unlisten(e,t){const n=Il.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Lg(e._queryParams),n=e._path.toString(),r=new gn;return this.restRequest_(n+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(n,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Or(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Qo(a.responseText)}catch{Pt("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,l)}else a.status!==401&&a.status!==404&&Pt("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(){this.rootNode_=re.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(){return{value:null,children:new Map}}function Gi(s,e,t){if(ue(e))s.value=t,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,t);else{const n=le(e);s.children.has(n)||s.children.set(n,Dl());const r=s.children.get(n);e=Ae(e),Gi(r,e,t)}}function mB(s,e){if(ue(e))return s.value=null,s.children.clear(),!0;if(s.value!==null){if(s.value.isLeafNode())return!1;{const t=s.value;return s.value=null,t.forEachChild(Ve,(n,r)=>{Gi(s,new Ie(n),r)}),mB(s,e)}}else if(s.children.size>0){const t=le(e);return e=Ae(e),s.children.has(t)&&mB(s.children.get(t),e)&&s.children.delete(t),s.children.size===0}else return!0}function _B(s,e,t){s.value!==null?t(e,s.value):PN(s,(n,r)=>{const i=new Ie(e.toString()+"/"+n);_B(r,i,t)})}function PN(s,e){s.children.forEach((t,n)=>{e(n,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&yt(this.last_,(n,r)=>{t[n]=t[n]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=10*1e3,NN=30*1e3,ON=300*1e3;class LN{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new bN(e);const n=kg+(NN-kg)*Math.random();Uo(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;yt(e,(r,i)=>{i>0&&bn(this.statsToReport_,r)&&(t[r]=i,n=!0)}),n&&this.server_.reportStats(t),Uo(this.reportStats_.bind(this),Math.floor(Math.random()*2*ON))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(cn||(cn={}));function Ly(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qd(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=cn.ACK_USER_WRITE,this.source=Ly()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ie(e));return new wl(ye(),t,this.revert)}}else return j(le(this.path)===e,"operationForChild called for unrelated child."),new wl(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.source=e,this.path=t,this.type=cn.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new Ea(this.source,ye()):new Ea(this.source,Ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=cn.OVERWRITE}operationForChild(e){return ue(this.path)?new Pr(this.source,ye(),this.snap.getImmediateChild(e)):new Pr(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=cn.MERGE}operationForChild(e){if(ue(this.path)){const t=this.children.subtree(new Ie(e));return t.isEmpty()?null:t.value?new Pr(this.source,ye(),t.value):new ya(this.source,ye(),t)}else return j(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ya(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const t=le(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kN(s,e,t,n){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&s.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(vN(o.childName,o.snapshotNode))}),fo(s,r,"child_removed",e,n,t),fo(s,r,"child_added",e,n,t),fo(s,r,"child_moved",i,n,t),fo(s,r,"child_changed",e,n,t),fo(s,r,"value",e,n,t),r}function fo(s,e,t,n,r,i){const o=n.filter(a=>a.type===t);o.sort((a,l)=>MN(s,a,l)),o.forEach(a=>{const l=xN(s,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,s.query_))})})}function xN(s,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function MN(s,e,t){if(e.childName==null||t.childName==null)throw Si("Should only compare child_ events.");const n=new Be(e.childName,e.snapshotNode),r=new Be(t.childName,t.snapshotNode);return s.index_.compare(n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(s,e){return{eventCache:s,serverCache:e}}function Ho(s,e,t,n){return mu(new br(e,t,n),s.serverCache)}function Fy(s,e,t,n){return mu(s.eventCache,new br(e,t,n))}function EB(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function Nr(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vh;const VN=()=>(vh||(vh=new Vt(Db)),vh);class be{static fromObject(e){let t=new be(null);return yt(e,(n,r)=>{t=t.set(new Ie(n),r)}),t}constructor(e,t=VN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ye(),value:this.value};if(ue(e))return null;{const n=le(e),r=this.children.get(n);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Ae(e),t);return i!=null?{path:qe(new Ie(n),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const t=le(e),n=this.children.get(t);return n!==null?n.subtree(Ae(e)):new be(null)}}set(e,t){if(ue(e))return new be(t,this.children);{const n=le(e),i=(this.children.get(n)||new be(null)).set(Ae(e),t),o=this.children.insert(n,i);return new be(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const t=le(e),n=this.children.get(t);if(n){const r=n.remove(Ae(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new be(null):new be(this.value,i)}else return this}}get(e){if(ue(e))return this.value;{const t=le(e),n=this.children.get(t);return n?n.get(Ae(e)):null}}setTree(e,t){if(ue(e))return t;{const n=le(e),i=(this.children.get(n)||new be(null)).setTree(Ae(e),t);let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),new be(this.value,o)}}fold(e){return this.fold_(ye(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(qe(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ye(),t)}findOnPath_(e,t,n){const r=this.value?n(t,this.value):!1;if(r)return r;if(ue(e))return null;{const i=le(e),o=this.children.get(i);return o?o.findOnPath_(Ae(e),qe(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ye(),t)}foreachOnPath_(e,t,n){if(ue(e))return this;{this.value&&n(t,this.value);const r=le(e),i=this.children.get(r);return i?i.foreachOnPath_(Ae(e),qe(t,r),n):new be(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(qe(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.writeTree_=e}static empty(){return new hn(new be(null))}}function qo(s,e,t){if(ue(e))return new hn(new be(t));{const n=s.writeTree_.findRootMostValueAndPath(e);if(n!=null){const r=n.path;let i=n.value;const o=Mt(r,e);return i=i.updateChild(o,t),new hn(s.writeTree_.set(r,i))}else{const r=new be(t),i=s.writeTree_.setTree(e,r);return new hn(i)}}}function xg(s,e,t){let n=s;return yt(t,(r,i)=>{n=qo(n,qe(e,r),i)}),n}function Mg(s,e){if(ue(e))return hn.empty();{const t=s.writeTree_.setTree(e,new be(null));return new hn(t)}}function yB(s,e){return Gr(s,e)!=null}function Gr(s,e){const t=s.writeTree_.findRootMostValueAndPath(e);return t!=null?s.writeTree_.get(t.path).getChild(Mt(t.path,e)):null}function Vg(s){const e=[],t=s.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ve,(n,r)=>{e.push(new Be(n,r))}):s.writeTree_.children.inorderTraversal((n,r)=>{r.value!=null&&e.push(new Be(n,r.value))}),e}function Ns(s,e){if(ue(e))return s;{const t=Gr(s,e);return t!=null?new hn(new be(t)):new hn(s.writeTree_.subtree(e))}}function IB(s){return s.writeTree_.isEmpty()}function Di(s,e){return ky(ye(),s.writeTree_,e)}function ky(s,e,t){if(e.value!=null)return t.updateChild(s,e.value);{let n=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(j(i.value!==null,"Priority writes must always be leaf nodes"),n=i.value):t=ky(qe(s,r),i,t)}),!t.getChild(s).isEmpty()&&n!==null&&(t=t.updateChild(qe(s,".priority"),n)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(s,e){return Gy(e,s)}function GN(s,e,t,n,r){j(n>s.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),s.allWrites.push({path:e,snap:t,writeId:n,visible:r}),r&&(s.visibleWrites=qo(s.visibleWrites,e,t)),s.lastWriteId=n}function UN(s,e){for(let t=0;t<s.allWrites.length;t++){const n=s.allWrites[t];if(n.writeId===e)return n}return null}function HN(s,e){const t=s.allWrites.findIndex(a=>a.writeId===e);j(t>=0,"removeWrite called with nonexistent writeId.");const n=s.allWrites[t];s.allWrites.splice(t,1);let r=n.visible,i=!1,o=s.allWrites.length-1;for(;r&&o>=0;){const a=s.allWrites[o];a.visible&&(o>=t&&qN(a,n.path)?r=!1:en(n.path,a.path)&&(i=!0)),o--}if(r){if(i)return jN(s),!0;if(n.snap)s.visibleWrites=Mg(s.visibleWrites,n.path);else{const a=n.children;yt(a,l=>{s.visibleWrites=Mg(s.visibleWrites,qe(n.path,l))})}return!0}else return!1}function qN(s,e){if(s.snap)return en(s.path,e);for(const t in s.children)if(s.children.hasOwnProperty(t)&&en(qe(s.path,t),e))return!0;return!1}function jN(s){s.visibleWrites=xy(s.allWrites,JN,ye()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function JN(s){return s.visible}function xy(s,e,t){let n=hn.empty();for(let r=0;r<s.length;++r){const i=s[r];if(e(i)){const o=i.path;let a;if(i.snap)en(t,o)?(a=Mt(t,o),n=qo(n,a,i.snap)):en(o,t)&&(a=Mt(o,t),n=qo(n,ye(),i.snap.getChild(a)));else if(i.children){if(en(t,o))a=Mt(t,o),n=xg(n,a,i.children);else if(en(o,t))if(a=Mt(o,t),ue(a))n=xg(n,ye(),i.children);else{const l=hi(i.children,le(a));if(l){const u=l.getChild(Ae(a));n=qo(n,ye(),u)}}}else throw Si("WriteRecord should have .snap or .children")}}return n}function My(s,e,t,n,r){if(!n&&!r){const i=Gr(s.visibleWrites,e);if(i!=null)return i;{const o=Ns(s.visibleWrites,e);if(IB(o))return t;if(t==null&&!yB(o,ye()))return null;{const a=t||re.EMPTY_NODE;return Di(o,a)}}}else{const i=Ns(s.visibleWrites,e);if(!r&&IB(i))return t;if(!r&&t==null&&!yB(i,ye()))return null;{const o=function(u){return(u.visible||r)&&(!n||!~n.indexOf(u.writeId))&&(en(u.path,e)||en(e,u.path))},a=xy(s.allWrites,o,e),l=t||re.EMPTY_NODE;return Di(a,l)}}}function WN(s,e,t){let n=re.EMPTY_NODE;const r=Gr(s.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ve,(i,o)=>{n=n.updateImmediateChild(i,o)}),n;if(t){const i=Ns(s.visibleWrites,e);return t.forEachChild(Ve,(o,a)=>{const l=Di(Ns(i,new Ie(o)),a);n=n.updateImmediateChild(o,l)}),Vg(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}else{const i=Ns(s.visibleWrites,e);return Vg(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}}function KN(s,e,t,n,r){j(n||r,"Either existingEventSnap or existingServerSnap must exist");const i=qe(e,t);if(yB(s.visibleWrites,i))return null;{const o=Ns(s.visibleWrites,i);return IB(o)?r.getChild(t):Di(o,r.getChild(t))}}function zN(s,e,t,n){const r=qe(e,t),i=Gr(s.visibleWrites,r);if(i!=null)return i;if(n.isCompleteForChild(t)){const o=Ns(s.visibleWrites,r);return Di(o,n.getNode().getImmediateChild(t))}else return null}function QN(s,e){return Gr(s.visibleWrites,e)}function $N(s,e,t,n,r,i,o){let a;const l=Ns(s.visibleWrites,e),u=Gr(l,ye());if(u!=null)a=u;else if(t!=null)a=Di(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),p=i?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o);let g=p.getNext();for(;g&&h.length<r;)d(g,n)!==0&&h.push(g),g=p.getNext();return h}else return[]}function YN(){return{visibleWrites:hn.empty(),allWrites:[],lastWriteId:-1}}function Tl(s,e,t,n){return My(s.writeTree,s.treePath,e,t,n)}function Jd(s,e){return WN(s.writeTree,s.treePath,e)}function Gg(s,e,t,n){return KN(s.writeTree,s.treePath,e,t,n)}function vl(s,e){return QN(s.writeTree,qe(s.treePath,e))}function XN(s,e,t,n,r,i){return $N(s.writeTree,s.treePath,e,t,n,r,i)}function Wd(s,e,t){return zN(s.writeTree,s.treePath,e,t)}function Vy(s,e){return Gy(qe(s.treePath,e),s.writeTree)}function Gy(s,e){return{treePath:s,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;j(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),j(n!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(n,ma(n,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(n,ga(n,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(n,Ii(n,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(n,ma(n,e.snapshotNode,r.oldSnap));else throw Si("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Uy=new eO;class Kd{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new br(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wd(this.writes_,e,n)}}getChildAfterChild(e,t,n){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),i=XN(this.writes_,r,t,1,n,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(s){return{filter:s}}function nO(s,e){j(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function sO(s,e,t,n,r){const i=new ZN;let o,a;if(t.type===cn.OVERWRITE){const u=t;u.source.fromUser?o=DB(s,e,u.path,u.snap,n,r,i):(j(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ue(u.path),o=Al(s,e,u.path,u.snap,n,r,a,i))}else if(t.type===cn.MERGE){const u=t;u.source.fromUser?o=iO(s,e,u.path,u.children,n,r,i):(j(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=wB(s,e,u.path,u.children,n,r,a,i))}else if(t.type===cn.ACK_USER_WRITE){const u=t;u.revert?o=cO(s,e,u.path,n,r,i):o=oO(s,e,u.path,u.affectedTree,n,r,i)}else if(t.type===cn.LISTEN_COMPLETE)o=aO(s,e,t.path,n,i);else throw Si("Unknown operation type: "+t.type);const l=i.getChanges();return rO(e,o,l),{viewCache:o,changes:l}}function rO(s,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const r=n.getNode().isLeafNode()||n.getNode().isEmpty(),i=EB(s);(t.length>0||!s.eventCache.isFullyInitialized()||r&&!n.getNode().equals(i)||!n.getNode().getPriority().equals(i.getPriority()))&&t.push(Oy(EB(e)))}}function Hy(s,e,t,n,r,i){const o=e.eventCache;if(vl(n,t)!=null)return e;{let a,l;if(ue(t))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Nr(e),h=u instanceof re?u:re.EMPTY_NODE,d=Jd(n,h);a=s.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=Tl(n,Nr(e));a=s.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=le(t);if(u===".priority"){j(zs(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=Gg(n,t,h,l);d!=null?a=s.filter.updatePriority(h,d):a=o.getNode()}else{const h=Ae(t);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=Gg(n,t,o.getNode(),l);p!=null?d=o.getNode().getImmediateChild(u).updateChild(h,p):d=o.getNode().getImmediateChild(u)}else d=Wd(n,u,e.serverCache);d!=null?a=s.filter.updateChild(o.getNode(),u,d,h,r,i):a=o.getNode()}}return Ho(e,a,o.isFullyInitialized()||ue(t),s.filter.filtersNodes())}}function Al(s,e,t,n,r,i,o,a){const l=e.serverCache;let u;const h=o?s.filter:s.filter.getIndexedFilter();if(ue(t))u=h.updateFullNode(l.getNode(),n,null);else if(h.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(t,n);u=h.updateFullNode(l.getNode(),g,null)}else{const g=le(t);if(!l.isCompleteForPath(t)&&zs(t)>1)return e;const I=Ae(t),V=l.getNode().getImmediateChild(g).updateChild(I,n);g===".priority"?u=h.updatePriority(l.getNode(),V):u=h.updateChild(l.getNode(),g,V,I,Uy,null)}const d=Fy(e,u,l.isFullyInitialized()||ue(t),h.filtersNodes()),p=new Kd(r,d,i);return Hy(s,d,t,r,p,a)}function DB(s,e,t,n,r,i,o){const a=e.eventCache;let l,u;const h=new Kd(r,e,i);if(ue(t))u=s.filter.updateFullNode(e.eventCache.getNode(),n,o),l=Ho(e,u,!0,s.filter.filtersNodes());else{const d=le(t);if(d===".priority")u=s.filter.updatePriority(e.eventCache.getNode(),n),l=Ho(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=Ae(t),g=a.getNode().getImmediateChild(d);let I;if(ue(p))I=n;else{const N=h.getCompleteChild(d);N!=null?kd(p)===".priority"&&N.getChild(vy(p)).isEmpty()?I=N:I=N.updateChild(p,n):I=re.EMPTY_NODE}if(g.equals(I))l=e;else{const N=s.filter.updateChild(a.getNode(),d,I,p,h,o);l=Ho(e,N,a.isFullyInitialized(),s.filter.filtersNodes())}}}return l}function Ug(s,e){return s.eventCache.isCompleteForChild(e)}function iO(s,e,t,n,r,i,o){let a=e;return n.foreach((l,u)=>{const h=qe(t,l);Ug(e,le(h))&&(a=DB(s,a,h,u,r,i,o))}),n.foreach((l,u)=>{const h=qe(t,l);Ug(e,le(h))||(a=DB(s,a,h,u,r,i,o))}),a}function Hg(s,e,t){return t.foreach((n,r)=>{e=e.updateChild(n,r)}),e}function wB(s,e,t,n,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ue(t)?u=n:u=new be(null).setTree(t,n);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,p)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),I=Hg(s,g,p);l=Al(s,l,new Ie(d),I,r,i,o,a)}}),u.children.inorderTraversal((d,p)=>{const g=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!h.hasChild(d)&&!g){const I=e.serverCache.getNode().getImmediateChild(d),N=Hg(s,I,p);l=Al(s,l,new Ie(d),N,r,i,o,a)}}),l}function oO(s,e,t,n,r,i,o){if(vl(r,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(n.value!=null){if(ue(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Al(s,e,t,l.getNode().getChild(t),r,i,a,o);if(ue(t)){let u=new be(null);return l.getNode().forEachChild(ai,(h,d)=>{u=u.set(new Ie(h),d)}),wB(s,e,t,u,r,i,a,o)}else return e}else{let u=new be(null);return n.foreach((h,d)=>{const p=qe(t,h);l.isCompleteForPath(p)&&(u=u.set(h,l.getNode().getChild(p)))}),wB(s,e,t,u,r,i,a,o)}}function aO(s,e,t,n,r){const i=e.serverCache,o=Fy(e,i.getNode(),i.isFullyInitialized()||ue(t),i.isFiltered());return Hy(s,o,t,n,Uy,r)}function cO(s,e,t,n,r,i){let o;if(vl(n,t)!=null)return e;{const a=new Kd(n,e,r),l=e.eventCache.getNode();let u;if(ue(t)||le(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Tl(n,Nr(e));else{const d=e.serverCache.getNode();j(d instanceof re,"serverChildren would be complete if leaf node"),h=Jd(n,d)}h=h,u=s.filter.updateFullNode(l,h,i)}else{const h=le(t);let d=Wd(n,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?u=s.filter.updateChild(l,h,d,Ae(t),a,i):e.eventCache.getNode().hasChild(h)?u=s.filter.updateChild(l,h,re.EMPTY_NODE,Ae(t),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Tl(n,Nr(e)),o.isLeafNode()&&(u=s.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||vl(n,ye())!=null,Ho(e,u,o,s.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Gd(n.getIndex()),i=RN(n);this.processor_=tO(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(re.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(re.EMPTY_NODE,a.getNode(),null),h=new br(l,o.isFullyInitialized(),r.filtersNodes()),d=new br(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=mu(d,h),this.eventGenerator_=new FN(this.query_)}get query(){return this.query_}}function uO(s){return s.viewCache_.serverCache.getNode()}function hO(s,e){const t=Nr(s.viewCache_);return t&&(s.query._queryParams.loadsAllData()||!ue(e)&&!t.getImmediateChild(le(e)).isEmpty())?t.getChild(e):null}function qg(s){return s.eventRegistrations_.length===0}function BO(s,e){s.eventRegistrations_.push(e)}function jg(s,e,t){const n=[];if(t){j(e==null,"A cancel should cancel all event registrations.");const r=s.query._path;s.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,r);o&&n.push(o)})}if(e){let r=[];for(let i=0;i<s.eventRegistrations_.length;++i){const o=s.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(s.eventRegistrations_.slice(i+1));break}}s.eventRegistrations_=r}else s.eventRegistrations_=[];return n}function Jg(s,e,t,n){e.type===cn.MERGE&&e.source.queryId!==null&&(j(Nr(s.viewCache_),"We should always have a full cache before handling merges"),j(EB(s.viewCache_),"Missing event cache, even though we have a server cache"));const r=s.viewCache_,i=sO(s.processor_,r,e,t,n);return nO(s.processor_,i.viewCache),j(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=i.viewCache,qy(s,i.changes,i.viewCache.eventCache.getNode(),null)}function dO(s,e){const t=s.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ve,(i,o)=>{n.push(Ii(i,o))}),t.isFullyInitialized()&&n.push(Oy(t.getNode())),qy(s,n,t.getNode(),e)}function qy(s,e,t,n){const r=n?[n]:s.eventRegistrations_;return kN(s.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl;class fO{constructor(){this.views=new Map}}function pO(s){j(!Rl,"__referenceConstructor has already been defined"),Rl=s}function CO(){return j(Rl,"Reference.ts has not been loaded"),Rl}function gO(s){return s.views.size===0}function zd(s,e,t,n){const r=e.source.queryId;if(r!==null){const i=s.views.get(r);return j(i!=null,"SyncTree gave us an op for an invalid query."),Jg(i,e,t,n)}else{let i=[];for(const o of s.views.values())i=i.concat(Jg(o,e,t,n));return i}}function mO(s,e,t,n,r){const i=e._queryIdentifier,o=s.views.get(i);if(!o){let a=Tl(t,r?n:null),l=!1;a?l=!0:n instanceof re?(a=Jd(t,n),l=!1):(a=re.EMPTY_NODE,l=!1);const u=mu(new br(a,l,!1),new br(n,r,!1));return new lO(e,u)}return o}function _O(s,e,t,n,r,i){const o=mO(s,e,n,r,i);return s.views.has(e._queryIdentifier)||s.views.set(e._queryIdentifier,o),BO(o,t),dO(o,t)}function EO(s,e,t,n){const r=e._queryIdentifier,i=[];let o=[];const a=Qs(s);if(r==="default")for(const[l,u]of s.views.entries())o=o.concat(jg(u,t,n)),qg(u)&&(s.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=s.views.get(r);l&&(o=o.concat(jg(l,t,n)),qg(l)&&(s.views.delete(r),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Qs(s)&&i.push(new(CO())(e._repo,e._path)),{removed:i,events:o}}function jy(s){const e=[];for(const t of s.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ci(s,e){let t=null;for(const n of s.views.values())t=t||hO(n,e);return t}function Jy(s,e){if(e._queryParams.loadsAllData())return _u(s);{const n=e._queryIdentifier;return s.views.get(n)}}function Wy(s,e){return Jy(s,e)!=null}function Qs(s){return _u(s)!=null}function _u(s){for(const e of s.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl;function yO(s){j(!Sl,"__referenceConstructor has already been defined"),Sl=s}function IO(){return j(Sl,"Reference.ts has not been loaded"),Sl}let DO=1;class Wg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=YN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ky(s,e,t,n,r){return GN(s.pendingWriteTree_,e,t,n,r),r?Xa(s,new Pr(Ly(),e,t)):[]}function gr(s,e,t=!1){const n=UN(s.pendingWriteTree_,e);if(HN(s.pendingWriteTree_,e)){let i=new be(null);return n.snap!=null?i=i.set(ye(),!0):yt(n.children,o=>{i=i.set(new Ie(o),!0)}),Xa(s,new wl(n.path,i,t))}else return[]}function Eu(s,e,t){return Xa(s,new Pr(Hd(),e,t))}function wO(s,e,t){const n=be.fromObject(t);return Xa(s,new ya(Hd(),e,n))}function TO(s,e){return Xa(s,new Ea(Hd(),e))}function vO(s,e,t){const n=$d(s,t);if(n){const r=Yd(n),i=r.path,o=r.queryId,a=Mt(i,e),l=new Ea(qd(o),a);return Xd(s,i,l)}else return[]}function TB(s,e,t,n,r=!1){const i=e._path,o=s.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||Wy(o,e))){const l=EO(o,e,t,n);gO(o)&&(s.syncPointTree_=s.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!r){const h=u.findIndex(p=>p._queryParams.loadsAllData())!==-1,d=s.syncPointTree_.findOnPath(i,(p,g)=>Qs(g));if(h&&!d){const p=s.syncPointTree_.subtree(i);if(!p.isEmpty()){const g=SO(p);for(let I=0;I<g.length;++I){const N=g[I],V=N.query,z=$y(s,N);s.listenProvider_.startListening(jo(V),Pl(s,V),z.hashFn,z.onComplete)}}}!d&&u.length>0&&!n&&(h?s.listenProvider_.stopListening(jo(e),null):u.forEach(p=>{const g=s.queryToTagMap.get(yu(p));s.listenProvider_.stopListening(jo(p),g)}))}PO(s,u)}return a}function AO(s,e,t,n){const r=$d(s,n);if(r!=null){const i=Yd(r),o=i.path,a=i.queryId,l=Mt(o,e),u=new Pr(qd(a),l,t);return Xd(s,o,u)}else return[]}function RO(s,e,t,n){const r=$d(s,n);if(r){const i=Yd(r),o=i.path,a=i.queryId,l=Mt(o,e),u=be.fromObject(t),h=new ya(qd(a),l,u);return Xd(s,o,h)}else return[]}function Kg(s,e,t,n=!1){const r=e._path;let i=null,o=!1;s.syncPointTree_.foreachOnPath(r,(p,g)=>{const I=Mt(p,r);i=i||ci(g,I),o=o||Qs(g)});let a=s.syncPointTree_.get(r);a?(o=o||Qs(a),i=i||ci(a,ye())):(a=new fO,s.syncPointTree_=s.syncPointTree_.set(r,a));let l;i!=null?l=!0:(l=!1,i=re.EMPTY_NODE,s.syncPointTree_.subtree(r).foreachChild((g,I)=>{const N=ci(I,ye());N&&(i=i.updateImmediateChild(g,N))}));const u=Wy(a,e);if(!u&&!e._queryParams.loadsAllData()){const p=yu(e);j(!s.queryToTagMap.has(p),"View does not exist, but we have a tag");const g=bO();s.queryToTagMap.set(p,g),s.tagToQueryMap.set(g,p)}const h=jd(s.pendingWriteTree_,r);let d=_O(a,e,t,h,i,l);if(!u&&!o&&!n){const p=Jy(a,e);d=d.concat(NO(s,e,p))}return d}function Qd(s,e,t){const r=s.pendingWriteTree_,i=s.syncPointTree_.findOnPath(e,(o,a)=>{const l=Mt(o,e),u=ci(a,l);if(u)return u});return My(r,e,i,t,!0)}function Xa(s,e){return zy(e,s.syncPointTree_,null,jd(s.pendingWriteTree_,ye()))}function zy(s,e,t,n){if(ue(s.path))return Qy(s,e,t,n);{const r=e.get(ye());t==null&&r!=null&&(t=ci(r,ye()));let i=[];const o=le(s.path),a=s.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,h=Vy(n,o);i=i.concat(zy(a,l,u,h))}return r&&(i=i.concat(zd(r,s,n,t))),i}}function Qy(s,e,t,n){const r=e.get(ye());t==null&&r!=null&&(t=ci(r,ye()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=Vy(n,o),h=s.operationForChild(o);h&&(i=i.concat(Qy(h,a,l,u)))}),r&&(i=i.concat(zd(r,s,n,t))),i}function $y(s,e){const t=e.query,n=Pl(s,t);return{hashFn:()=>(uO(e)||re.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return n?vO(s,t._path,n):TO(s,t._path);{const i=vb(r,t);return TB(s,t,null,i)}}}}function Pl(s,e){const t=yu(e);return s.queryToTagMap.get(t)}function yu(s){return s._path.toString()+"$"+s._queryIdentifier}function $d(s,e){return s.tagToQueryMap.get(e)}function Yd(s){const e=s.indexOf("$");return j(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new Ie(s.substr(0,e))}}function Xd(s,e,t){const n=s.syncPointTree_.get(e);j(n,"Missing sync point for query tag that we're tracking");const r=jd(s.pendingWriteTree_,e);return zd(n,t,r,null)}function SO(s){return s.fold((e,t,n)=>{if(t&&Qs(t))return[_u(t)];{let r=[];return t&&(r=jy(t)),yt(n,(i,o)=>{r=r.concat(o)}),r}})}function jo(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(IO())(s._repo,s._path):s}function PO(s,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const r=yu(n),i=s.queryToTagMap.get(r);s.queryToTagMap.delete(r),s.tagToQueryMap.delete(i)}}}function bO(){return DO++}function NO(s,e,t){const n=e._path,r=Pl(s,e),i=$y(s,t),o=s.listenProvider_.startListening(jo(e),r,i.hashFn,i.onComplete),a=s.syncPointTree_.subtree(n);if(r)j(!Qs(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,h,d)=>{if(!ue(u)&&h&&Qs(h))return[_u(h).query];{let p=[];return h&&(p=p.concat(jy(h).map(g=>g.query))),yt(d,(g,I)=>{p=p.concat(I)}),p}});for(let u=0;u<l.length;++u){const h=l[u];s.listenProvider_.stopListening(jo(h),Pl(s,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Zd(t)}node(){return this.node_}}class ef{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=qe(this.path_,e);return new ef(this.syncTree_,t)}node(){return Qd(this.syncTree_,this.path_)}}const OO=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},zg=function(s,e,t){if(!s||typeof s!="object")return s;if(j(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return LO(s[".sv"],e,t);if(typeof s[".sv"]=="object")return FO(s[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},LO=function(s,e,t){switch(s){case"timestamp":return t.timestamp;default:j(!1,"Unexpected server value: "+s)}},FO=function(s,e,t){s.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const n=s.increment;typeof n!="number"&&j(!1,"Unexpected increment value: "+n);const r=e.node();if(j(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;const o=r.getValue();return typeof o!="number"?n:o+n},kO=function(s,e,t,n){return tf(e,new ef(t,s),n)},Yy=function(s,e,t){return tf(s,new Zd(e),t)};function tf(s,e,t){const n=s.getPriority().val(),r=zg(n,e.getImmediateChild(".priority"),t);let i;if(s.isLeafNode()){const o=s,a=zg(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new it(a,$e(r)):s}else{const o=s;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new it(r))),o.forEachChild(Ve,(a,l)=>{const u=tf(l,e.getImmediateChild(a),t);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function sf(s,e){let t=e instanceof Ie?e:new Ie(e),n=s,r=le(t);for(;r!==null;){const i=hi(n.node.children,r)||{children:{},childCount:0};n=new nf(r,n,i),t=Ae(t),r=le(t)}return n}function Ui(s){return s.node.value}function Xy(s,e){s.node.value=e,vB(s)}function Zy(s){return s.node.childCount>0}function xO(s){return Ui(s)===void 0&&!Zy(s)}function Iu(s,e){yt(s.node.children,(t,n)=>{e(new nf(t,s,n))})}function eI(s,e,t,n){t&&e(s),Iu(s,r=>{eI(r,e,!0)})}function MO(s,e,t){let n=s.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function Za(s){return new Ie(s.parent===null?s.name:Za(s.parent)+"/"+s.name)}function vB(s){s.parent!==null&&VO(s.parent,s.name,s)}function VO(s,e,t){const n=xO(t),r=bn(s.node.children,e);n&&r?(delete s.node.children[e],s.node.childCount--,vB(s)):!n&&!r&&(s.node.children[e]=t.node,s.node.childCount++,vB(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=/[\[\].#$\/\u0000-\u001F\u007F]/,UO=/[\[\].#$\u0000-\u001F\u007F]/,Ah=10*1024*1024,rf=function(s){return typeof s=="string"&&s.length!==0&&!GO.test(s)},tI=function(s){return typeof s=="string"&&s.length!==0&&!UO.test(s)},HO=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),tI(s)},nI=function(s){return s===null||typeof s=="string"||typeof s=="number"&&!Cu(s)||s&&typeof s=="object"&&bn(s,".sv")},AB=function(s,e,t,n){Du(Bi(s,"value"),e,t)},Du=function(s,e,t){const n=t instanceof Ie?new oN(t,s):t;if(e===void 0)throw new Error(s+"contains undefined "+lr(n));if(typeof e=="function")throw new Error(s+"contains a function "+lr(n)+" with contents = "+e.toString());if(Cu(e))throw new Error(s+"contains "+e.toString()+" "+lr(n));if(typeof e=="string"&&e.length>Ah/3&&Ul(e)>Ah)throw new Error(s+"contains a string greater than "+Ah+" utf8 bytes "+lr(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(yt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!rf(o)))throw new Error(s+" contains an invalid key ("+o+") "+lr(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aN(n,o),Du(s,a,n),cN(n)}),r&&i)throw new Error(s+' contains ".value" child '+lr(n)+" in addition to actual children.")}},qO=function(s,e){let t,n;for(t=0;t<e.length;t++){n=e[t];const i=Ca(n);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!rf(i[o]))throw new Error(s+"contains an invalid key ("+i[o]+") in path "+n.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(iN);let r=null;for(t=0;t<e.length;t++){if(n=e[t],r!==null&&en(r,n))throw new Error(s+"contains a path "+r.toString()+" that is ancestor of another path "+n.toString());r=n}},jO=function(s,e,t,n){const r=Bi(s,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const i=[];yt(e,(o,a)=>{const l=new Ie(o);if(Du(r,a,qe(t,l)),kd(l)===".priority"&&!nI(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),qO(r,i)},JO=function(s,e,t){if(Cu(e))throw new Error(Bi(s,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!nI(e))throw new Error(Bi(s,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},sI=function(s,e,t,n){if(!tI(t))throw new Error(Bi(s,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},WO=function(s,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sI(s,e,t)},Ao=function(s,e){if(le(e)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},KO=function(s,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!rf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!HO(t))throw new Error(Bi(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function of(s,e){let t=null;for(let n=0;n<e.length;n++){const r=e[n],i=r.getPath();t!==null&&!xd(i,t.path)&&(s.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&s.eventLists_.push(t)}function rI(s,e,t){of(s,t),iI(s,n=>xd(n,e))}function rs(s,e,t){of(s,t),iI(s,n=>en(n,e)||en(e,n))}function iI(s,e){s.recursionDepth_++;let t=!0;for(let n=0;n<s.eventLists_.length;n++){const r=s.eventLists_[n];if(r){const i=r.path;e(i)?(QO(s.eventLists_[n]),s.eventLists_[n]=null):t=!1}}t&&(s.eventLists_=[]),s.recursionDepth_--}function QO(s){for(let e=0;e<s.events.length;e++){const t=s.events[e];if(t!==null){s.events[e]=null;const n=t.getEventRunner();Go&&Bt("event: "+t.toString()),Vi(n)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O="repo_interrupt",YO=25;class XO{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Dl(),this.transactionQueueTree_=new nf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ZO(s,e,t){if(s.stats_=Ld(s.repoInfo_),s.forceRestClient_||Pb())s.server_=new Il(s.repoInfo_,(n,r,i,o)=>{Qg(s,n,r,i,o)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>$g(s,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}s.persistentConnection_=new Xn(s.repoInfo_,e,(n,r,i,o)=>{Qg(s,n,r,i,o)},n=>{$g(s,n)},n=>{t0(s,n)},s.authTokenProvider_,s.appCheckProvider_,t),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(n=>{s.server_.refreshAuthToken(n)}),s.appCheckProvider_.addTokenChangeListener(n=>{s.server_.refreshAppCheckToken(n.token)}),s.statsReporter_=Fb(s.repoInfo_,()=>new LN(s.stats_,s.server_)),s.infoData_=new SN,s.infoSyncTree_=new Wg({startListening:(n,r,i,o)=>{let a=[];const l=s.infoData_.getNode(n._path);return l.isEmpty()||(a=Eu(s.infoSyncTree_,n._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),cf(s,"connected",!1),s.serverSyncTree_=new Wg({startListening:(n,r,i,o)=>(s.server_.listen(n,i,r,(a,l)=>{const u=o(a,l);rs(s.eventQueue_,n._path,u)}),[]),stopListening:(n,r)=>{s.server_.unlisten(n,r)}})}function e0(s){const t=s.infoData_.getNode(new Ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function af(s){return OO({timestamp:e0(s)})}function Qg(s,e,t,n,r){s.dataUpdateCount++;const i=new Ie(e);t=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(n){const l=el(t,u=>$e(u));o=RO(s.serverSyncTree_,i,l,r)}else{const l=$e(t);o=AO(s.serverSyncTree_,i,l,r)}else if(n){const l=el(t,u=>$e(u));o=wO(s.serverSyncTree_,i,l)}else{const l=$e(t);o=Eu(s.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=wu(s,i)),rs(s.eventQueue_,a,o)}function $g(s,e){cf(s,"connected",e),e===!1&&s0(s)}function t0(s,e){yt(e,(t,n)=>{cf(s,t,n)})}function cf(s,e,t){const n=new Ie("/.info/"+e),r=$e(t);s.infoData_.updateSnapshot(n,r);const i=Eu(s.infoSyncTree_,n,r);rs(s.eventQueue_,n,i)}function oI(s){return s.nextWriteId_++}function n0(s,e,t,n,r){lf(s,"set",{path:e.toString(),value:t,priority:n});const i=af(s),o=$e(t,n),a=Qd(s.serverSyncTree_,e),l=Yy(o,a,i),u=oI(s),h=Ky(s.serverSyncTree_,e,l,u,!0);of(s.eventQueue_,h),s.server_.put(e.toString(),o.val(!0),(p,g)=>{const I=p==="ok";I||Pt("set at "+e+" failed: "+p);const N=gr(s.serverSyncTree_,u,!I);rs(s.eventQueue_,e,N),wi(s,r,p,g)});const d=hI(s,e);wu(s,d),rs(s.eventQueue_,d,[])}function s0(s){lf(s,"onDisconnectEvents");const e=af(s),t=Dl();_B(s.onDisconnect_,ye(),(r,i)=>{const o=kO(r,i,s.serverSyncTree_,e);Gi(t,r,o)});let n=[];_B(t,ye(),(r,i)=>{n=n.concat(Eu(s.serverSyncTree_,r,i));const o=hI(s,r);wu(s,o)}),s.onDisconnect_=Dl(),rs(s.eventQueue_,ye(),n)}function r0(s,e,t){s.server_.onDisconnectCancel(e.toString(),(n,r)=>{n==="ok"&&mB(s.onDisconnect_,e),wi(s,t,n,r)})}function Yg(s,e,t,n){const r=$e(t);s.server_.onDisconnectPut(e.toString(),r.val(!0),(i,o)=>{i==="ok"&&Gi(s.onDisconnect_,e,r),wi(s,n,i,o)})}function i0(s,e,t,n,r){const i=$e(t,n);s.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&Gi(s.onDisconnect_,e,i),wi(s,r,o,a)})}function o0(s,e,t,n){if(Zc(t)){Bt("onDisconnect().update() called with empty data.  Don't do anything."),wi(s,n,"ok",void 0);return}s.server_.onDisconnectMerge(e.toString(),t,(r,i)=>{r==="ok"&&yt(t,(o,a)=>{const l=$e(a);Gi(s.onDisconnect_,qe(e,o),l)}),wi(s,n,r,i)})}function a0(s,e,t){let n;le(e._path)===".info"?n=Kg(s.infoSyncTree_,e,t):n=Kg(s.serverSyncTree_,e,t),rI(s.eventQueue_,e._path,n)}function c0(s,e,t){let n;le(e._path)===".info"?n=TB(s.infoSyncTree_,e,t):n=TB(s.serverSyncTree_,e,t),rI(s.eventQueue_,e._path,n)}function l0(s){s.persistentConnection_&&s.persistentConnection_.interrupt($O)}function lf(s,...e){let t="";s.persistentConnection_&&(t=s.persistentConnection_.id+":"),Bt(t,...e)}function wi(s,e,t,n){e&&Vi(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let i=r;n&&(i+=": "+n);const o=new Error(i);o.code=r,e(o)}})}function aI(s,e,t){return Qd(s.serverSyncTree_,e,t)||re.EMPTY_NODE}function uf(s,e=s.transactionQueueTree_){if(e||Tu(s,e),Ui(e)){const t=lI(s,e);j(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&u0(s,Za(e),t)}else Zy(e)&&Iu(e,t=>{uf(s,t)})}function u0(s,e,t){const n=t.map(u=>u.currentWriteId),r=aI(s,e,n);let i=r;const o=r.hash();for(let u=0;u<t.length;u++){const h=t[u];j(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=Mt(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;s.server_.put(l.toString(),a,u=>{lf(s,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let p=0;p<t.length;p++)t[p].status=2,h=h.concat(gr(s.serverSyncTree_,t[p].currentWriteId)),t[p].onComplete&&d.push(()=>t[p].onComplete(null,!0,t[p].currentOutputSnapshotResolved)),t[p].unwatcher();Tu(s,sf(s.transactionQueueTree_,e)),uf(s,s.transactionQueueTree_),rs(s.eventQueue_,e,h);for(let p=0;p<d.length;p++)Vi(d[p])}else{if(u==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{Pt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=u}wu(s,e)}},o)}function wu(s,e){const t=cI(s,e),n=Za(t),r=lI(s,t);return h0(s,r,n),n}function h0(s,e,t){if(e.length===0)return;const n=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Mt(t,l.path);let h=!1,d;if(j(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,r=r.concat(gr(s.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=YO)h=!0,d="maxretry",r=r.concat(gr(s.serverSyncTree_,l.currentWriteId,!0));else{const p=aI(s,l.path,o);l.currentInputSnapshot=p;const g=e[a].update(p.val());if(g!==void 0){Du("transaction failed: Data returned ",g,l.path);let I=$e(g);typeof g=="object"&&g!=null&&bn(g,".priority")||(I=I.updatePriority(p.getPriority()));const V=l.currentWriteId,z=af(s),oe=Yy(I,p,z);l.currentOutputSnapshotRaw=I,l.currentOutputSnapshotResolved=oe,l.currentWriteId=oI(s),o.splice(o.indexOf(V),1),r=r.concat(Ky(s.serverSyncTree_,l.path,oe,l.currentWriteId,l.applyLocally)),r=r.concat(gr(s.serverSyncTree_,V,!0))}else h=!0,d="nodata",r=r.concat(gr(s.serverSyncTree_,l.currentWriteId,!0))}rs(s.eventQueue_,t,r),r=[],h&&(e[a].status=2,(function(p){setTimeout(p,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?n.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):n.push(()=>e[a].onComplete(new Error(d),!1,null))))}Tu(s,s.transactionQueueTree_);for(let a=0;a<n.length;a++)Vi(n[a]);uf(s,s.transactionQueueTree_)}function cI(s,e){let t,n=s.transactionQueueTree_;for(t=le(e);t!==null&&Ui(n)===void 0;)n=sf(n,t),e=Ae(e),t=le(e);return n}function lI(s,e){const t=[];return uI(s,e,t),t.sort((n,r)=>n.order-r.order),t}function uI(s,e,t){const n=Ui(e);if(n)for(let r=0;r<n.length;r++)t.push(n[r]);Iu(e,r=>{uI(s,r,t)})}function Tu(s,e){const t=Ui(e);if(t){let n=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[n]=t[r],n++);t.length=n,Xy(e,t.length>0?t:void 0)}Iu(e,n=>{Tu(s,n)})}function hI(s,e){const t=Za(cI(s,e)),n=sf(s.transactionQueueTree_,e);return MO(n,r=>{Rh(s,r)}),Rh(s,n),eI(n,r=>{Rh(s,r)}),t}function Rh(s,e){const t=Ui(e);if(t){const n=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(j(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(j(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(gr(s.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Xy(e,void 0):t.length=i+1,rs(s.eventQueue_,Za(e),r);for(let o=0;o<n.length;o++)Vi(n[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(s){let e="";const t=s.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let r=t[n];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function d0(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const t of s.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):Pt(`Invalid query segment '${t}' in query '${s}'`)}return e}const Xg=function(s,e){const t=f0(s),n=t.namespace;t.domain==="firebase.com"&&ss(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&ss("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||yb();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new gy(t.host,t.secure,n,r,e,"",n!==t.subdomain),path:new Ie(t.pathString)}},f0=function(s){let e="",t="",n="",r="",i="",o=!0,a="https",l=443;if(typeof s=="string"){let u=s.indexOf("//");u>=0&&(a=s.substring(0,u-1),s=s.substring(u+2));let h=s.indexOf("/");h===-1&&(h=s.length);let d=s.indexOf("?");d===-1&&(d=s.length),e=s.substring(0,Math.min(h,d)),h<d&&(r=B0(s.substring(h,d)));const p=d0(s.substring(Math.min(s.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const I=e.indexOf(".");n=e.substring(0,I).toLowerCase(),t=e.substring(I+1),i=n}"ns"in p&&(i=p.ns)}return{host:e,port:l,domain:t,subdomain:n,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ct(this.snapshot.exportVal())}}class C0{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class m0{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new gn;return r0(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ao("OnDisconnect.remove",this._path);const e=new gn;return Yg(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ao("OnDisconnect.set",this._path),AB("OnDisconnect.set",e,this._path);const t=new gn;return Yg(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Ao("OnDisconnect.setWithPriority",this._path),AB("OnDisconnect.setWithPriority",e,this._path),JO("OnDisconnect.setWithPriority",t);const n=new gn;return i0(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){Ao("OnDisconnect.update",this._path),jO("OnDisconnect.update",e,this._path);const t=new gn;return o0(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return ue(this._path)?null:kd(this._path)}get ref(){return new Zs(this._repo,this._path)}get _queryIdentifier(){const e=Fg(this._queryParams),t=Nd(e);return t==="{}"?"default":t}get _queryObject(){return Fg(this._queryParams)}isEqual(e){if(e=te(e),!(e instanceof hf))return!1;const t=this._repo===e._repo,n=xd(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+rN(this._path)}}class Zs extends hf{constructor(e,t){super(e,t,new Ud,!1)}get parent(){const e=vy(this._path);return e===null?null:new Zs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bl{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ie(e),n=RB(this.ref,e);return new bl(this._node.getChild(t),n,Ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,r)=>e(new bl(r,RB(this.ref,n),Ve)))}hasChild(e){const t=new Ie(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Oc(s,e){return s=te(s),s._checkNotDeleted("ref"),e!==void 0?RB(s._root,e):s._root}function RB(s,e){return s=te(s),le(s._path)===null?WO("child","path",e):sI("child","path",e),new Zs(s._repo,qe(s._path,e))}function _0(s){return s=te(s),new m0(s._repo,s._path)}function Zg(s,e){s=te(s),Ao("set",s._path),AB("set",e,s._path);const t=new gn;return n0(s._repo,s._path,e,null,t.wrapCallback(()=>{})),t.promise}class Bf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new p0("value",this,new bl(e.snapshotNode,new Zs(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new C0(this,e,t):null}matches(e){return e instanceof Bf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function E0(s,e,t,n,r){const i=new g0(t,void 0),o=new Bf(i);return a0(s._repo,s,o),()=>c0(s._repo,s,o)}function em(s,e,t,n){return E0(s,"value",e)}pO(Zs);yO(Zs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="FIREBASE_DATABASE_EMULATOR_HOST",SB={};let I0=!1;function D0(s,e,t,n){const r=e.lastIndexOf(":"),i=e.substring(0,r),o=Lr(i);s.repoInfo_=new gy(e,o,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,t),n&&(s.authTokenProvider_=n)}function w0(s,e,t,n,r){let i=n||s.options.databaseURL;i===void 0&&(s.options.projectId||ss("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Bt("Using default host for project ",s.options.projectId),i=`${s.options.projectId}-default-rtdb.firebaseio.com`);let o=Xg(i,r),a=o.repoInfo,l;typeof process<"u"&&gg&&(l=gg[y0]),l?(i=`http://${l}?ns=${a.namespace}`,o=Xg(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new Nb(s.name,s.options,e);KO("Invalid Firebase Database URL",o),ue(o.path)||ss("Database URL must point to the root of a Firebase Database (not including a child path).");const h=v0(a,s,u,new bb(s,t));return new A0(h,s)}function T0(s,e){const t=SB[e];(!t||t[s.key]!==s)&&ss(`Database ${e}(${s.repoInfo_}) has already been deleted.`),l0(s),delete t[s.key]}function v0(s,e,t,n){let r=SB[e.name];r||(r={},SB[e.name]=r);let i=r[s.toURLString()];return i&&ss("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new XO(s,I0,t,n),r[s.toURLString()]=i,i}class A0{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ZO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zs(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(T0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ss("Cannot call "+e+" on a deleted database.")}}function R0(){yi.IS_TRANSPORT_INITIALIZED&&Pt("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function S0(){R0(),Cr.forceDisallow()}function P0(s=xB(),e){const t=ql(s,"database").getImmediate({identifier:e});if(!t._instanceStarted){const n=Lm("database");n&&BI(t,...n)}return t}function BI(s,e,t,n={}){s=te(s),s._checkNotDeleted("useEmulator");const r=`${e}:${t}`,i=s._repoInternal;if(s._instanceStarted){if(r===s._repoInternal.repoInfo_.host&&Fs(n,i.repoInfo_.emulatorOptions))return;ss("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)n.mockUserToken&&ss('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new jc(jc.OWNER);else if(n.mockUserToken){const a=typeof n.mockUserToken=="string"?n.mockUserToken:xm(n.mockUserToken,s.app.options.projectId);o=new jc(a)}Lr(e)&&FB(e),D0(i,r,n,o)}/**
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
 */function b0(s){pb(Fr),Tr(new ks("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return w0(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Dn(mg,_g,s),Dn(mg,_g,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0={".sv":"timestamp"};function Sh(){return N0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};Xn.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};b0();/**
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
 */const O0={PHONE:"phone",TOTP:"totp"},L0={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},F0={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},k0={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},x0={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function dI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const V0=M0,fI=dI,pI=new Na("auth","Firebase",dI()),G0={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new Hl("@firebase/auth");function Jc(s,...e){Nl.logLevel<=de.WARN&&Nl.warn(`Auth (${Fr}): ${s}`,...e)}function Wc(s,...e){Nl.logLevel<=de.ERROR&&Nl.error(`Auth (${Fr}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(s,...e){throw df(s,...e)}function bt(s,...e){return df(s,...e)}function vu(s,e,t){const n={...fI(),[e]:t};return new Na("auth","Firebase",n).create(e,{appName:s.name})}function ut(s){return vu(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hi(s,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&jt(s,"argument-error"),vu(s,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function df(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return pI.create(s,...e)}function U(s,e,...t){if(!s)throw df(e,...t)}function yn(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Wc(e),new Error(e)}function is(s,e){s||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function ff(){return tm()==="http:"||tm()==="https:"}function tm(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ff()||vw()||"connection"in navigator)?navigator.onLine:!0}function H0(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t){this.shortDelay=e,this.longDelay=t,is(t>e,"Short delay should be less than long delay!"),this.isMobile=LB()||Mm()}get(){return U0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(s,e){is(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],J0=new ec(3e4,6e4);function Oe(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function Le(s,e,t,n,r={}){return gI(s,r,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const a=Or({...o,key:s.config.apiKey}).slice(1),l=await s._getAdditionalHeaders();l["Content-Type"]="application/json",s.languageCode&&(l["X-Firebase-Locale"]=s.languageCode);const u={method:e,headers:l,...i};return Tw()||(u.referrerPolicy="strict-origin-when-cross-origin"),s.emulatorConfig&&Lr(s.emulatorConfig.host)&&(u.credentials="include"),CI.fetch()(await mI(s,s.config.apiHost,t,a),u)})}async function gI(s,e,t){s._canInitEmulator=!1;const n={...q0,...e};try{const r=new K0(s),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ro(s,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ro(s,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ro(s,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ro(s,"user-disabled",o);const h=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vu(s,h,u);jt(s,h)}}catch(r){if(r instanceof as)throw r;jt(s,"network-request-failed",{message:String(r)})}}async function cs(s,e,t,n,r={}){const i=await Le(s,e,t,n,r);return"mfaPendingCredential"in i&&jt(s,"multi-factor-auth-required",{_serverResponse:i}),i}async function mI(s,e,t,n){const r=`${e}${t}?${n}`,i=s,o=i.config.emulator?pf(s.config,r):`${s.config.apiScheme}://${r}`;return j0.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function W0(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class K0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(bt(this.auth,"network-request-failed")),J0.get())})}}function Ro(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=bt(s,e,n);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(s){return s!==void 0&&s.getResponse!==void 0}function sm(s){return s!==void 0&&s.enterprise!==void 0}class _I{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return W0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(s){return(await Le(s,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function EI(s,e){return Le(s,"GET","/v2/recaptchaConfig",Oe(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q0(s,e){return Le(s,"POST","/v1/accounts:delete",e)}async function $0(s,e){return Le(s,"POST","/v1/accounts:update",e)}async function Ol(s,e){return Le(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(s,e=!1){return te(s).getIdToken(e)}async function yI(s,e=!1){const t=te(s),n=await t.getIdToken(e),r=Au(n);U(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:n,authTime:Jo(Ph(r.auth_time)),issuedAtTime:Jo(Ph(r.iat)),expirationTime:Jo(Ph(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ph(s){return Number(s)*1e3}function Au(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return Wc("JWT malformed, contained fewer than 3 sections"),null;try{const r=Xc(t);return r?JSON.parse(r):(Wc("Failed to decode base64 JWT payload"),null)}catch(r){return Wc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function rm(s){const e=Au(s);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof as&&X0(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function X0({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PB{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jo(this.lastLoginAt),this.creationTime=Jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Da(s){var d;const e=s.auth,t=await s.getIdToken(),n=await os(s,Ol(e,{idToken:t}));U(n==null?void 0:n.users.length,e,"internal-error");const r=n.users[0];s._notifyReloadListener(r);const i=(d=r.providerUserInfo)!=null&&d.length?DI(r.providerUserInfo):[],o=eL(s.providerData,i),a=s.isAnonymous,l=!(s.email&&r.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new PB(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(s,h)}async function II(s){const e=te(s);await Da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eL(s,e){return[...s.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function DI(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(s,e){const t=await gI(s,{},async()=>{const n=Or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=s.config,o=await mI(s,r,"/v1/token",`key=${i}`),a=await s._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:n};return s.emulatorConfig&&Lr(s.emulatorConfig.host)&&(l.credentials="include"),CI.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function nL(s,e){return Le(s,"POST","/v2/accounts:revokeToken",Oe(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=rm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await tL(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new li;return n&&(U(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),r&&(U(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(s,e){U(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class ln{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new Z0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new PB(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await os(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yI(this,e)}reload(){return II(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Da(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ke(this.auth.app))return Promise.reject(ut(this.auth));const e=await this.getIdToken();return await os(this,Q0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:g,providerData:I,stsTokenManager:N}=t;U(d&&N,e,"internal-error");const V=li.fromJSON(this.name,N);U(typeof d=="string",e,"internal-error"),gs(n,e.name),gs(r,e.name),U(typeof p=="boolean",e,"internal-error"),U(typeof g=="boolean",e,"internal-error"),gs(i,e.name),gs(o,e.name),gs(a,e.name),gs(l,e.name),gs(u,e.name),gs(h,e.name);const z=new ln({uid:d,auth:e,email:r,emailVerified:p,displayName:n,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:V,createdAt:u,lastLoginAt:h});return I&&Array.isArray(I)&&(z.providerData=I.map(oe=>({...oe}))),l&&(z._redirectEventId=l),z}static async _fromIdTokenResponse(e,t,n=!1){const r=new li;r.updateFromServerResponse(t);const i=new ln({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Da(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];U(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?DI(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new li;a.updateFromIdToken(n);const l=new ln({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new PB(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=new Map;function Wn(s){is(s instanceof Function,"Expected a class definition");let e=im.get(s);return e?(is(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,im.set(s,e),e)}/**
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
 */class wI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wI.type="NONE";const bB=wI;/**
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
 */function Kc(s,e,t){return`firebase:${s}:${e}:${t}`}class Dr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Kc(this.userKey,r.apiKey,i),this.fullPersistenceKey=Kc("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ol(this.auth,{idToken:e}).catch(()=>{});return t?ln._fromGetAccountInfoResponse(this.auth,t,e):null}return ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new Dr(Wn(bB),e,n);const r=(await Promise.all(t.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let i=r[0]||Wn(bB);const o=Kc(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const p=await Ol(e,{idToken:h}).catch(()=>{});if(!p)break;d=await ln._fromGetAccountInfoResponse(e,p,h)}else d=ln._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Dr(i,e,n):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Dr(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(RI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(TI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(PI(e))return"Blackberry";if(bI(e))return"Webos";if(vI(e))return"Safari";if((e.includes("chrome/")||AI(e))&&!e.includes("edge/"))return"Chrome";if(SI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function TI(s=Et()){return/firefox\//i.test(s)}function vI(s=Et()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AI(s=Et()){return/crios\//i.test(s)}function RI(s=Et()){return/iemobile/i.test(s)}function SI(s=Et()){return/android/i.test(s)}function PI(s=Et()){return/blackberry/i.test(s)}function bI(s=Et()){return/webos/i.test(s)}function Cf(s=Et()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function sL(s=Et()){var e;return Cf(s)&&!!((e=window.navigator)!=null&&e.standalone)}function rL(){return Aw()&&document.documentMode===10}function NI(s=Et()){return Cf(s)||SI(s)||bI(s)||PI(s)||/windows phone/i.test(s)||RI(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(s,e=[]){let t;switch(s){case"Browser":t=om(Et());break;case"Worker":t=`${om(Et())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Fr}/${n}`}/**
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
 */class iL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function oL(s,e={}){return Le(s,"GET","/v2/passwordPolicy",Oe(s,e))}/**
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
 */const aL=6;class cL{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??aL,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new am(this),this.idTokenSubscription=new am(this),this.beforeStateQueue=new iL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wn(t)),this._initializationPromise=this.queue(async()=>{var n,r,i;if(!this._deleted){try{this.persistenceManager=await Dr.create(this,e)}catch(o){Jc(`Failed to initialize persistence: ${o}`),this.persistenceManager=await Dr.create(this,[])}finally{(n=this._resolvePersistenceManagerAvailable)==null||n.call(this)}if(!this._deleted){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(o){Jc(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ol(this,{idToken:e}),n=await ln._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=n==null?void 0:n._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(n=l.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Da(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=H0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ke(this.app))return Promise.reject(ut(this));const t=e?te(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ke(this.app)?Promise.reject(ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ke(this.app)?Promise.reject(ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oL(this),t=new cL(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Na("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await nL(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wn(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[Wn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}).catch(l=>{if(!o)if(typeof t!="function"&&t.error)t.error(l);else if(n)n(l);else throw l}),typeof t=="function"){const l=e.addObserver(t,n,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const n=(t==null?void 0:t.message)||String(t),r=vu(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw r.customData={originalError:t},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Jc(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function He(s){return te(s)}class am{constructor(e){this.auth=e,this.observer=null,this.addObserver=xw(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uL(s){tc=s}function gf(s){return tc.loadJS(s)}function hL(){return tc.recaptchaV2Script}function BL(){return tc.recaptchaEnterpriseScript}function dL(){return tc.gapiScript}function LI(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL=500,pL=6e4,Lc=1e12;class CL{constructor(e){this.auth=e,this.counter=Lc,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new _L(e,this.auth.name,t||{})),this.counter++,n}reset(e){var n;const t=e||Lc;(n=this._widgets.get(t))==null||n.delete(),this._widgets.delete(t)}getResponse(e){var n;const t=e||Lc;return((n=this._widgets.get(t))==null?void 0:n.getResponse())||""}async execute(e){var n;const t=e||Lc;return(n=this._widgets.get(t))==null||n.execute(),""}}class gL{constructor(){this.enterprise=new mL}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class mL{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _L{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;U(r,"argument-error",{appName:t}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=EL(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},pL)},fL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function EL(s){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<s;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const yL="recaptcha-enterprise",Wo="NO_RECAPTCHA",cm="onFirebaseAuthREInstanceReady";class kn{constructor(e){this.type=yL,this.auth=He(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{EI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new _I(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;sm(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Wo)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gL().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(async a=>{if(!t&&sm(window.grecaptcha)&&kn.scriptInjectionDeferred)await kn.scriptInjectionDeferred.promise,r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=BL();l.length!==0&&(l+=a+`&onload=${cm}`),kn.scriptInjectionDeferred=new gn,window[cm]=()=>{var u;(u=kn.scriptInjectionDeferred)==null||u.resolve()},gf(l).then(()=>{var u;return(u=kn.scriptInjectionDeferred)==null?void 0:u.promise}).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}kn.scriptInjectionDeferred=null;async function po(s,e,t,n=!1,r=!1){const i=new kn(s);let o;if(r)o=Wo;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return n?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Os(s,e,t,n,r){var i,o;if(r==="EMAIL_PASSWORD_PROVIDER")if((i=s._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await po(s,e,t,t==="getOobCode");return n(s,a)}else return n(s,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await po(s,e,t,t==="getOobCode");return n(s,l)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if((o=s._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await po(s,e,t);return n(s,a).catch(async l=>{var u;if(((u=s._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const h=await po(s,e,t,!1,!0);return n(s,h)}return Promise.reject(l)})}else{const a=await po(s,e,t,!1,!0);return n(s,a)}else return Promise.reject(r+" provider is not supported.")}async function FI(s){const e=He(s),t=await EI(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new _I(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new kn(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(s,e){const t=ql(s,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Fs(i,e??{}))return r;jt(r,"already-initialized")}return t.initialize({options:e})}function IL(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Wn);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function mf(s,e,t){const n=He(s);U(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),i=xI(e),{host:o,port:a}=DL(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){U(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),U(Fs(u,n.config.emulator)&&Fs(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,Lr(o)?FB(`${i}//${o}${l}`):r||wL()}function xI(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function DL(s){const e=xI(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const i=r[1];return{host:i,port:lm(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:lm(o)}}}function lm(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function wL(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,t){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(s,e){return Le(s,"POST","/v1/accounts:resetPassword",Oe(s,e))}async function TL(s,e){return Le(s,"POST","/v1/accounts:update",e)}async function vL(s,e){return Le(s,"POST","/v1/accounts:signUp",e)}async function AL(s,e){return Le(s,"POST","/v1/accounts:update",Oe(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RL(s,e){return cs(s,"POST","/v1/accounts:signInWithPassword",Oe(s,e))}async function Ru(s,e){return Le(s,"POST","/v1/accounts:sendOobCode",Oe(s,e))}async function SL(s,e){return Ru(s,e)}async function PL(s,e){return Ru(s,e)}async function bL(s,e){return Ru(s,e)}async function NL(s,e){return Ru(s,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OL(s,e){return cs(s,"POST","/v1/accounts:signInWithEmailLink",Oe(s,e))}async function LL(s,e){return cs(s,"POST","/v1/accounts:signInWithEmailLink",Oe(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends qi{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ti(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ti(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Os(e,t,"signInWithPassword",RL,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return OL(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Os(e,n,"signUpPassword",vL,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return LL(e,{idToken:t,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(s,e){return cs(s,"POST","/v1/accounts:signInWithIdp",Oe(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL="http://localhost";class Sn extends qi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const o=new Sn(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Zn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Zn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zn(e,t)}buildRequest(){const e={requestUri:FL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Or(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(s,e){return Le(s,"POST","/v1/accounts:sendVerificationCode",Oe(s,e))}async function kL(s,e){return cs(s,"POST","/v1/accounts:signInWithPhoneNumber",Oe(s,e))}async function xL(s,e){const t=await cs(s,"POST","/v1/accounts:signInWithPhoneNumber",Oe(s,e));if(t.temporaryProof)throw Ro(s,"account-exists-with-different-credential",t);return t}const ML={USER_NOT_FOUND:"user-not-found"};async function VL(s,e){const t={...e,operation:"REAUTH"};return cs(s,"POST","/v1/accounts:signInWithPhoneNumber",Oe(s,t),ML)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends qi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ls({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ls({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return kL(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return xL(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return VL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return!n&&!t&&!r&&!i?null:new Ls({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UL(s){const e=Io(Do(s)).link,t=e?Io(Do(e)).deep_link_id:null,n=Io(Do(s)).deep_link_id;return(n?Io(Do(n)).link:null)||n||t||e||s}class ji{constructor(e){const t=Io(Do(e)),n=t.apiKey??null,r=t.oobCode??null,i=GL(t.mode??null);U(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=UL(e);try{return new ji(t)}catch{return null}}}function HL(s){return ji.parseLink(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.providerId=Pn.PROVIDER_ID}static credential(e,t){return Ti._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ji.parseLink(t);return U(n,"argument-error"),Ti._fromEmailAndCode(e,n.code,n.tenantId)}}Pn.PROVIDER_ID="password";Pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ji extends ls{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ko extends Ji{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return U("providerId"in t&&"signInMethod"in t,"argument-error"),Sn._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return U(e.idToken||e.accessToken,"argument-error"),Sn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Ko.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ko.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:a}=e;if(!n&&!r&&!t&&!i||!a)return null;try{return new Ko(a)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Ji{constructor(){super("facebook.com")}static credential(e){return Sn._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Sn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mn.credential(t,n)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Ji{constructor(){super("github.com")}static credential(e){return Sn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL="http://localhost";class wa extends qi{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Zn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Zn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return!n||!r||!i||n!==r?null:new wa(n,i)}static _create(e,t){return new wa(e,t)}buildRequest(){return{requestUri:qL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL="saml.";class Ll extends ls{constructor(e){U(e.startsWith(jL),"argument-error"),super(e)}static credentialFromResult(e){return Ll.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ll.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=wa.fromJSON(e);return U(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return wa._create(n,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Ji{constructor(){super("twitter.com")}static credential(e,t){return Sn._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Vn.credential(t,n)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(s,e){return cs(s,"POST","/v1/accounts:signUp",Oe(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ln._fromIdTokenResponse(e,n,r),o=hm(n);return new rn({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=hm(n);return new rn({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function hm(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(s){var r;if(ke(s.app))return Promise.reject(ut(s));const e=He(s);if(await e._initializationPromise,(r=e.currentUser)!=null&&r.isAnonymous)return new rn({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await VI(e,{returnSecureToken:!0}),n=await rn._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(n.user),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends as{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Fl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Fl(e,t,n,r)}}function UI(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fl._fromErrorAndOperation(s,i,e,n):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(s){return new Set(s.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function JL(s,e){const t=te(s);await Su(!0,t,e);const{providerUserInfo:n}=await $0(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),r=HI(n||[]);return t.providerData=t.providerData.filter(i=>r.has(i.providerId)),r.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function _f(s,e,t=!1){const n=await os(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return rn._forOperation(s,"link",n)}async function Su(s,e,t){await Da(e);const n=HI(e.providerData),r=s===!1?"provider-already-linked":"no-such-provider";U(n.has(t)===s,e.auth,r)}/**
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
 */async function qI(s,e,t=!1){const{auth:n}=s;if(ke(n.app))return Promise.reject(ut(n));const r="reauthenticate";try{const i=await os(s,UI(n,r,e,s),t);U(i.idToken,n,"internal-error");const o=Au(i.idToken);U(o,n,"internal-error");const{sub:a}=o;return U(s.uid===a,n,"user-mismatch"),rn._forOperation(s,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(s,e,t=!1){if(ke(s.app))return Promise.reject(ut(s));const n="signIn",r=await UI(s,n,e),i=await rn._fromIdTokenResponse(s,n,r);return t||await s._updateCurrentUser(i.user),i}async function Pu(s,e){return jI(He(s),e)}async function Ef(s,e){const t=te(s);return await Su(!1,t,e.providerId),_f(t,e)}async function yf(s,e){return qI(te(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WL(s,e){return cs(s,"POST","/v1/accounts:signInWithCustomToken",Oe(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KL(s,e){if(ke(s.app))return Promise.reject(ut(s));const t=He(s),n=await WL(t,{token:e,returnSecureToken:!0}),r=await rn._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?If._fromServerResponse(e,t):"totpInfo"in t?Df._fromServerResponse(e,t):jt(e,"internal-error")}}class If extends nc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new If(t)}}class Df extends nc{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Df(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(s,e,t){var n;U(((n=t.url)==null?void 0:n.length)>0,s,"invalid-continue-uri"),U(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,s,"invalid-dynamic-link-domain"),U(typeof t.linkDomain>"u"||t.linkDomain.length>0,s,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(U(t.iOS.bundleId.length>0,s,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(U(t.android.packageName.length>0,s,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wf(s){const e=He(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JI(s,e,t){const n=He(s),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&bu(n,r,t),await Os(n,r,"getOobCode",PL,"EMAIL_PASSWORD_PROVIDER")}async function zL(s,e,t){await MI(te(s),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&wf(s),n})}async function QL(s,e){await AL(te(s),{oobCode:e})}async function WI(s,e){const t=te(s),n=await MI(t,{oobCode:e}),r=n.requestType;switch(U(r,t,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":U(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":U(n.mfaInfo,t,"internal-error");default:U(n.email,t,"internal-error")}let i=null;return n.mfaInfo&&(i=nc._fromServerResponse(He(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:i},operation:r}}async function $L(s,e){const{data:t}=await WI(te(s),e);return t.email}async function YL(s,e,t){if(ke(s.app))return Promise.reject(ut(s));const n=He(s),o=await Os(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",VI,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&wf(s),l}),a=await rn._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(a.user),a}function KI(s,e,t){return ke(s.app)?Promise.reject(ut(s)):Pu(te(s),Pn.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&wf(s),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XL(s,e,t){const n=He(s),r={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(o,a){U(a.handleCodeInApp,n,"argument-error"),a&&bu(n,o,a)}i(r,t),await Os(n,r,"getOobCode",bL,"EMAIL_PASSWORD_PROVIDER")}function ZL(s,e){const t=ji.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function eF(s,e,t){if(ke(s.app))return Promise.reject(ut(s));const n=te(s),r=Pn.credentialWithLink(e,t||Ia());return U(r._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),Pu(n,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tF(s,e){return Le(s,"POST","/v1/accounts:createAuthUri",Oe(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nF(s,e){const t=ff()?Ia():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:r}=await tF(te(s),n);return r||[]}async function sF(s,e){const t=te(s),r={requestType:"VERIFY_EMAIL",idToken:await s.getIdToken()};e&&bu(t.auth,r,e);const{email:i}=await SL(t.auth,r);i!==s.email&&await s.reload()}async function rF(s,e,t){const n=te(s),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await s.getIdToken(),newEmail:e};t&&bu(n.auth,i,t);const{email:o}=await NL(n.auth,i);o!==s.email&&await s.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iF(s,e){return Le(s,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oF(s,e){const{displayName:t,photoURL:n}=e;if(t===void 0&&n===void 0)return;const r=te(s),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await os(r,iF(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function aF(s,e){const t=te(s);return ke(t.auth.app)?Promise.reject(ut(t.auth)):QI(t,e,null)}function zI(s,e){return QI(te(s),null,e)}async function QI(s,e,t){const{auth:n}=s,i={idToken:await s.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const o=await os(s,TL(n,i));await s._updateTokensIfNecessary(o,!0)}/**
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
 */function cF(s){var r,i;if(!s)return null;const{providerId:e}=s,t=s.rawUserInfo?JSON.parse(s.rawUserInfo):{},n=s.isNewUser||s.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(s!=null&&s.idToken)){const o=(i=(r=Au(s.idToken))==null?void 0:r.firebase)==null?void 0:i.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ui(n,a)}}if(!e)return null;switch(e){case"facebook.com":return new lF(n,t);case"github.com":return new uF(n,t);case"google.com":return new hF(n,t);case"twitter.com":return new BF(n,t,s.screenName||null);case"custom":case"anonymous":return new ui(n,null);default:return new ui(n,e,t)}}class ui{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class $I extends ui{constructor(e,t,n,r){super(e,t,n),this.username=r}}class lF extends ui{constructor(e,t){super(e,"facebook.com",t)}}class uF extends $I{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class hF extends ui{constructor(e,t){super(e,"google.com",t)}}class BF extends $I{constructor(e,t,n){super(e,"twitter.com",t,n)}}function dF(s){const{user:e,_tokenResponse:t}=s;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:cF(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fF(s,e){return te(s).setPersistence(e)}function pF(s){return FI(s)}async function CF(s,e){return He(s).validatePassword(e)}function YI(s,e,t,n){return te(s).onIdTokenChanged(e,t,n)}function XI(s,e,t){return te(s).beforeAuthStateChanged(e,t)}function ZI(s,e,t,n){return te(s).onAuthStateChanged(e,t,n)}function gF(s){te(s).useDeviceLanguage()}function mF(s,e){return te(s).updateCurrentUser(e)}function eD(s){return te(s).signOut()}function _F(s,e){return He(s).revokeAccessToken(e)}async function tD(s){return te(s).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new mr("enroll",e,t)}static _fromMfaPendingCredential(e){return new mr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return mr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((n=e.multiFactorSession)!=null&&n.idToken)return mr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=He(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(a=>nc._fromServerResponse(n,a));U(r.mfaPendingCredential,n,"internal-error");const o=mr._fromMfaPendingCredential(r.mfaPendingCredential);return new Tf(o,i,async a=>{const l=await a._process(n,o);delete r.mfaInfo,delete r.mfaPendingCredential;const u={...r,idToken:l.idToken,refreshToken:l.refreshToken};switch(t.operationType){case"signIn":const h=await rn._fromIdTokenResponse(n,t.operationType,u);return await n._updateCurrentUser(h.user),h;case"reauthenticate":return U(t.user,n,"internal-error"),rn._forOperation(t.user,t.operationType,u);default:jt(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function EF(s,e){var r;const t=te(s),n=e;return U(e.customData.operationType,t,"argument-error"),U((r=n.customData._serverResponse)==null?void 0:r.mfaPendingCredential,t,"argument-error"),Tf._fromError(t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(s,e){return Le(s,"POST","/v2/accounts/mfaEnrollment:start",Oe(s,e))}function yF(s,e){return Le(s,"POST","/v2/accounts/mfaEnrollment:finalize",Oe(s,e))}function IF(s,e){return Le(s,"POST","/v2/accounts/mfaEnrollment:start",Oe(s,e))}function DF(s,e){return Le(s,"POST","/v2/accounts/mfaEnrollment:finalize",Oe(s,e))}function wF(s,e){return Le(s,"POST","/v2/accounts/mfaEnrollment:withdraw",Oe(s,e))}class vf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>nc._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new vf(e)}async getSession(){return mr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,r=await this.getSession(),i=await os(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const r=await os(this.user,wF(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==t),await this.user._updateTokensIfNecessary(r),await this.user.reload()}catch(r){throw r}}}const bh=new WeakMap;function TF(s){const e=te(s);return bh.has(e)||bh.set(e,vf._fromUser(e)),bh.get(e)}const kl="__sak";/**
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
 */class nD{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kl,"1"),this.storage.removeItem(kl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vF=1e3,AF=10;class sD extends nD{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=NI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);rL()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,AF):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},vF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sD.type="LOCAL";const rD=sD;/**
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
 */const RF=1e3;function Nh(s){var n;const e=s.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return((n=document.cookie.match(t))==null?void 0:n[1])??null}function Oh(s){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${s.split(":")[3]}`}class iD{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=Oh(e);if(window.cookieStore){const n=await window.cookieStore.get(t);return n==null?void 0:n.value}return Nh(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const n=Oh(e);document.cookie=`${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=Oh(e);if(window.cookieStore){const a=(u=>{const h=u.changed.find(p=>p.name===n);h&&t(h.value),u.deleted.find(p=>p.name===n)&&t(null)}),l=()=>window.cookieStore.removeEventListener("change",a);return this.listenerUnsubscribes.set(t,l),window.cookieStore.addEventListener("change",a)}let r=Nh(n);const i=setInterval(()=>{const a=Nh(n);a!==r&&(t(a),r=a)},RF),o=()=>clearInterval(i);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}iD.type="COOKIE";const SF=iD;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD extends nD{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}oD.type="SESSION";const Af=oD;/**
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
 */function PF(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Nu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new Nu(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),l=await PF(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
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
 */class bF{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Ou("",20);r.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return window}function NF(s){ze().location.href=s}/**
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
 */function Rf(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function OF(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LF(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function FF(){return Rf()?self:null}/**
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
 */const aD="firebaseLocalStorageDb",kF=1,xl="firebaseLocalStorage",cD="fbase_key";class sc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Lu(s,e){return s.transaction([xl],e?"readwrite":"readonly").objectStore(xl)}function xF(){const s=indexedDB.deleteDatabase(aD);return new sc(s).toPromise()}function lD(){const s=indexedDB.open(aD,kF);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(xl,{keyPath:cD})}catch(r){t(r)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(xl)?e(n):(n.close(),await xF(),e(await lD()))})})}async function dm(s,e,t){const n=Lu(s,!0).put({[cD]:e,value:t});return new sc(n).toPromise()}async function MF(s,e){const t=Lu(s,!1).get(e),n=await new sc(t).toPromise();return n===void 0?null:n.value}function fm(s,e){const t=Lu(s,!0).delete(e);return new sc(t).toPromise()}const VF=800,GF=3;class uD{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=lD(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>GF)throw n;if(this.dbPromise){const r=this.dbPromise;this.dbPromise=null;try{(await r).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Rf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nu._getInstance(FF()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await OF(),!this.activeServiceWorker)return;this.sender=new bF(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LF()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await dm(e,kl,"1"),await fm(e,kl)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>dm(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>MF(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const i=Lu(r,!1).getAll();return new sc(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}catch(e){return this.isClosing||Jc(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}uD.type="LOCAL";const hD=uD;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(s,e){return Le(s,"POST","/v2/accounts/mfaSignIn:start",Oe(s,e))}function UF(s,e){return Le(s,"POST","/v2/accounts/mfaSignIn:finalize",Oe(s,e))}function HF(s,e){return Le(s,"POST","/v2/accounts/mfaSignIn:finalize",Oe(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=LI("rcb"),qF=new ec(3e4,6e4);class jF{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=ze().grecaptcha)!=null&&e.render)}load(e,t=""){return U(JF(t),e,"argument-error"),this.shouldResolveImmediately(t)&&nm(ze().grecaptcha)?Promise.resolve(ze().grecaptcha):new Promise((n,r)=>{const i=ze().setTimeout(()=>{r(bt(e,"network-request-failed"))},qF.get());ze()[Lh]=()=>{ze().clearTimeout(i),delete ze()[Lh];const a=ze().grecaptcha;if(!a||!nm(a)){r(bt(e,"internal-error"));return}const l=a.render;a.render=(u,h)=>{const d=l(u,h);return this.counter++,d},this.hostLanguage=t,n(a)};const o=`${hL()}?${Or({onload:Lh,render:"explicit",hl:t})}`;gf(o).catch(()=>{clearTimeout(i),r(bt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=ze().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function JF(s){return s.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(s)}class WF{async load(e){return new CL(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="recaptcha",KF={theme:"light",type:"image"};class zF{constructor(e,t,n={...KF}){this.parameters=n,this.type=zo,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=He(e),this.isInvisible=this.parameters.size==="invisible",U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof t=="string"?document.getElementById(t):t;U(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new WF:new jF,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(r=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),r(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){U(!this.parameters.sitekey,this.auth,"argument-error"),U(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=ze()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){U(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){U(ff()&&!Rf(),this.auth,"internal-error"),await QF(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await z0(this.auth);U(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return U(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function QF(){let s=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}s=()=>e(),window.addEventListener("load",s)}).catch(e=>{throw s&&window.removeEventListener("load",s),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Ls._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function $F(s,e,t){if(ke(s.app))return Promise.reject(ut(s));const n=He(s),r=await Fu(n,e,te(t));return new Sf(r,i=>Pu(n,i))}async function YF(s,e,t){const n=te(s);await Su(!1,n,"phone");const r=await Fu(n.auth,e,te(t));return new Sf(r,i=>Ef(n,i))}async function XF(s,e,t){const n=te(s);if(ke(n.auth.app))return Promise.reject(ut(n.auth));const r=await Fu(n.auth,e,te(t));return new Sf(r,i=>yf(n,i))}async function Fu(s,e,t){var n;if(!s._getRecaptchaConfig())try{await FI(s)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const i=r.session;if("phoneNumber"in r){U(i.type==="enroll",s,"internal-error");const o={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Os(s,o,"mfaSmsEnrollment",async(h,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===Wo){U((t==null?void 0:t.type)===zo,h,"argument-error");const p=await Fh(h,d,t);return Bm(h,p)}return Bm(h,d)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneSessionInfo.sessionInfo}else{U(i.type==="signin",s,"internal-error");const o=((n=r.multiFactorHint)==null?void 0:n.uid)||r.multiFactorUid;U(o,s,"missing-multi-factor-info");const a={mfaPendingCredential:i.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Os(s,a,"mfaSmsSignIn",async(d,p)=>{if(p.phoneSignInInfo.captchaResponse===Wo){U((t==null?void 0:t.type)===zo,d,"argument-error");const g=await Fh(d,p,t);return pm(d,g)}return pm(d,p)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Os(s,i,"sendVerificationCode",async(u,h)=>{if(h.captchaResponse===Wo){U((t==null?void 0:t.type)===zo,u,"argument-error");const d=await Fh(u,h,t);return um(u,d)}return um(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{t==null||t._reset()}}async function ZF(s,e){const t=te(s);if(ke(t.auth.app))return Promise.reject(ut(t.auth));await _f(t,e)}async function Fh(s,e,t){U(t.type===zo,s,"argument-error");const n=await t.verify();U(typeof n=="string",s,"argument-error");const r={...e};if("phoneEnrollmentInfo"in r){const i=r.phoneEnrollmentInfo.phoneNumber,o=r.phoneEnrollmentInfo.captchaResponse,a=r.phoneEnrollmentInfo.clientType,l=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:n,captchaResponse:o,clientType:a,recaptchaVersion:l}}),r}else if("phoneSignInInfo"in r){const i=r.phoneSignInInfo.captchaResponse,o=r.phoneSignInInfo.clientType,a=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:i,clientType:o,recaptchaVersion:a}}),r}else return Object.assign(r,{recaptchaToken:n}),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.providerId=wr.PROVIDER_ID,this.auth=He(e)}verifyPhoneNumber(e,t){return Fu(this.auth,e,te(t))}static credential(e,t){return Ls._fromVerification(e,t)}static credentialFromResult(e){const t=e;return wr.credentialFromTaggedObject(t)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ls._fromTokenResponse(t,n):null}}wr.PROVIDER_ID="phone";wr.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ur(s,e){return e?Wn(e):(U(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class Pf extends qi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ek(s){return jI(s.auth,new Pf(s),s.bypassAuthState)}function tk(s){const{auth:e,user:t}=s;return U(t,e,"internal-error"),qI(t,new Pf(s),s.bypassAuthState)}async function nk(s){const{auth:e,user:t}=s;return U(t,e,"internal-error"),_f(t,new Pf(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ek;case"linkViaPopup":case"linkViaRedirect":return nk;case"reauthViaPopup":case"reauthViaRedirect":return tk;default:jt(this.auth,"internal-error")}}resolve(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=new ec(2e3,1e4);async function rk(s,e,t){if(ke(s.app))return Promise.reject(bt(s,"operation-not-supported-in-this-environment"));const n=He(s);Hi(s,e,ls);const r=Ur(n,t);return new Kn(n,"signInViaPopup",e,r).executeNotNull()}async function dD(s,e,t){const n=te(s);if(ke(n.auth.app))return Promise.reject(bt(n.auth,"operation-not-supported-in-this-environment"));Hi(n.auth,e,ls);const r=Ur(n.auth,t);return new Kn(n.auth,"reauthViaPopup",e,r,n).executeNotNull()}async function ik(s,e,t){const n=te(s);Hi(n.auth,e,ls);const r=Ur(n.auth,t);return new Kn(n.auth,"linkViaPopup",e,r,n).executeNotNull()}class Kn extends BD{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){is(this.filter.length===1,"Popup operations only handle one event");const e=Ou();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sk.get())};e()}}Kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="pendingRedirect",zc=new Map;class ak extends BD{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=zc.get(this.auth._key());if(!e){try{const n=await ck(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}zc.set(this.auth._key(),e)}return this.bypassAuthState||zc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ck(s,e){const t=pD(e),n=fD(s);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}async function bf(s,e){return fD(s)._set(pD(e),"true")}function lk(s,e){zc.set(s._key(),e)}function fD(s){return Wn(s._redirectPersistence)}function pD(s){return Kc(ok,s.config.apiKey,s.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(s,e,t){return hk(s,e,t)}async function hk(s,e,t){if(ke(s.app))return Promise.reject(ut(s));const n=He(s);Hi(s,e,ls),await n._initializationPromise;const r=Ur(n,t);return await bf(r,n),r._openRedirect(n,e,"signInViaRedirect")}function Bk(s,e,t){return dk(s,e,t)}async function dk(s,e,t){const n=te(s);if(Hi(n.auth,e,ls),ke(n.auth.app))return Promise.reject(ut(n.auth));await n.auth._initializationPromise;const r=Ur(n.auth,t);await bf(r,n.auth);const i=await gD(n);return r._openRedirect(n.auth,e,"reauthViaRedirect",i)}function fk(s,e,t){return pk(s,e,t)}async function pk(s,e,t){const n=te(s);Hi(n.auth,e,ls),await n.auth._initializationPromise;const r=Ur(n.auth,t);await Su(!1,n,e.providerId),await bf(r,n.auth);const i=await gD(n);return r._openRedirect(n.auth,e,"linkViaRedirect",i)}async function Ck(s,e){return await He(s)._initializationPromise,CD(s,e,!1)}async function CD(s,e,t=!1){if(ke(s.app))return Promise.reject(ut(s));const n=He(s),r=Ur(n,e),o=await new ak(n,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}async function gD(s){const e=Ou(`${s.uid}:::`);return s._redirectEventId=e,await s.auth._setRedirectUser(s),await s.auth._persistUserIfCurrent(s),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=600*1e3;class mk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_k(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!mD(e)){const r=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(bt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cm(e))}saveEventToCache(e){this.cachedEventUids.add(Cm(e)),this.lastProcessedEventTime=Date.now()}}function Cm(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function mD({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _k(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mD(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ek(s,e={}){return Le(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ik=/^https?/;async function Dk(s){if(s.config.emulator)return;const{authorizedDomains:e}=await Ek(s);for(const t of e)try{if(wk(t))return}catch{}jt(s,"unauthorized-domain")}function wk(s){const e=Ia(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const o=new URL(s);return o.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Ik.test(t))return!1;if(yk.test(s))return n===s;const r=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
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
 */const Tk=new ec(3e4,6e4);function gm(){const s=ze().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function vk(s){return new Promise((e,t)=>{var r,i,o;function n(){gm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gm(),t(bt(s,"network-request-failed"))},timeout:Tk.get()})}if((i=(r=ze().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=ze().gapi)!=null&&o.load)n();else{const a=LI("iframefcb");return ze()[a]=()=>{gapi.load?n():t(bt(s,"network-request-failed"))},gf(`${dL()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Qc=null,e})}let Qc=null;function Ak(s){return Qc=Qc||vk(s),Qc}/**
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
 */const Rk=new ec(5e3,15e3),Sk="__/auth/iframe",Pk="emulator/auth/iframe",bk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ok(s){const e=s.config;U(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?pf(e,Pk):`https://${s.config.authDomain}/${Sk}`,n={apiKey:e.apiKey,appName:s.name,v:Fr},r=Nk.get(s.config.apiHost);r&&(n.eid=r);const i=s._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Or(n).slice(1)}`}async function Lk(s){const e=await Ak(s),t=ze().gapi;return U(t,s,"internal-error"),e.open({where:document.body,url:Ok(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bk,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});const o=bt(s,"network-request-failed"),a=ze().setTimeout(()=>{i(o)},Rk.get());function l(){ze().clearTimeout(a),r(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Fk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kk=500,xk=600,Mk="_blank",Vk="http://localhost";class mm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gk(s,e,t,n=kk,r=xk){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l={...Fk,width:n.toString(),height:r.toString(),top:i,left:o},u=Et().toLowerCase();t&&(a=AI(u)?Mk:t),TI(u)&&(e=e||Vk,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,I])=>`${p}${g}=${I},`,"");if(sL(u)&&a!=="_self")return Uk(e||"",a),new mm(null);const d=window.open(e||"",a,h);U(d,s,"popup-blocked");try{d.focus()}catch{}return new mm(d)}function Uk(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const Hk="__/auth/handler",qk="emulator/auth/handler",jk=encodeURIComponent("fac");async function _m(s,e,t,n,r,i){U(s.config.authDomain,s,"auth-domain-config-required"),U(s.config.apiKey,s,"invalid-api-key");const o={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:Fr,eventId:r};if(e instanceof ls){e.setDefaultLanguage(s.languageCode),o.providerId=e.providerId||"",Zc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Ji){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}s.tenantId&&(o.tid=s.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await s._getAppCheckToken(),u=l?`#${jk}=${encodeURIComponent(l)}`:"";return`${Jk(s)}?${Or(a).slice(1)}${u}`}function Jk({config:s}){return s.emulator?pf(s,qk):`https://${s.authDomain}/${Hk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="webStorageSupport";class Wk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Af,this._completeRedirectFn=CD,this._overrideRedirectResult=lk}async _openPopup(e,t,n,r){var o;is((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await _m(e,t,n,Ia(),r);return Gk(e,i,Ou())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await _m(e,t,n,Ia(),r);return NF(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(is(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Lk(e),n=new mk(e);return t.register("authEvent",r=>(U(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(kh,{type:kh},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[kh];i!==void 0&&t(!!i),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return NI()||vI()||Cf()}}const _D=Wk;class ED{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return yn("unexpected MultiFactorSessionType")}}}class Nf extends ED{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Nf(e)}_finalizeEnroll(e,t,n){return yF(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return UF(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class yD{constructor(){}static assertion(e){return Nf._fromCredential(e)}}yD.FACTOR_ID="phone";class ID{static assertionForEnrollment(e,t){return Ta._fromSecret(e,t)}static assertionForSignIn(e,t){return Ta._fromEnrollmentId(e,t)}static async generateSecret(e){var r;const t=e;U(typeof((r=t.user)==null?void 0:r.auth)<"u","internal-error");const n=await IF(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return ku._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}}ID.FACTOR_ID="totp";class Ta extends ED{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Ta(t,void 0,e)}static _fromEnrollmentId(e,t){return new Ta(t,e)}async _finalizeEnroll(e,t,n){return U(typeof this.secret<"u",e,"argument-error"),DF(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){U(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const n={verificationCode:this.otp};return HF(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class ku{constructor(e,t,n,r,i,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new ku(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(Fc(e)||Fc(t))&&(n=!0),n&&(Fc(e)&&(e=((r=this.auth.currentUser)==null?void 0:r.email)||"unknownuser"),Fc(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Fc(s){return typeof s>"u"||(s==null?void 0:s.length)===0}var Em="@firebase/auth",ym="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qk(s){Tr(new ks("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:a,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OI(s)},u=new lL(n,r,i,l);return IL(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Tr(new ks("auth-internal",e=>{const t=He(e.getProvider("auth").getImmediate());return(n=>new Kk(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(Em,ym,zk(s)),Dn(Em,ym,"esm2020")}/**
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
 */const $k=300,Yk=km("authIdTokenMaxAge")||$k;let Im=null;const Xk=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Yk)return;const r=t==null?void 0:t.token;Im!==r&&(Im=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function DD(s=xB()){const e=ql(s,"auth");if(e.isInitialized())return e.getImmediate();const t=kI(s,{popupRedirectResolver:_D,persistence:[hD,rD,Af]}),n=km("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=Xk(i.toString());XI(t,o,()=>o(t.currentUser)),YI(t,a=>o(a))}}const r=Om("auth");return r&&mf(t,`http://${r}`),t}function Zk(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}uL({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=r=>{const i=bt("internal-error");i.customData=r,t(i)},n.type="text/javascript",n.charset="UTF-8",Zk().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qk("Browser");const wD=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:x0,ActionCodeURL:ji,AuthCredential:qi,AuthErrorCodes:G0,EmailAuthCredential:Ti,EmailAuthProvider:Pn,FacebookAuthProvider:xn,FactorId:O0,GithubAuthProvider:Mn,GoogleAuthProvider:mn,OAuthCredential:Sn,OAuthProvider:Ko,OperationType:k0,PhoneAuthCredential:Ls,PhoneAuthProvider:wr,PhoneMultiFactorGenerator:yD,ProviderId:L0,RecaptchaVerifier:zF,SAMLAuthProvider:Ll,SignInMethod:F0,TotpMultiFactorGenerator:ID,TotpSecret:ku,TwitterAuthProvider:Vn,applyActionCode:QL,beforeAuthStateChanged:XI,browserCookiePersistence:SF,browserLocalPersistence:rD,browserPopupRedirectResolver:_D,browserSessionPersistence:Af,checkActionCode:WI,confirmPasswordReset:zL,connectAuthEmulator:mf,createUserWithEmailAndPassword:YL,debugErrorMap:V0,deleteUser:tD,fetchSignInMethodsForEmail:nF,getAdditionalUserInfo:dF,getAuth:DD,getIdToken:Y0,getIdTokenResult:yI,getMultiFactorResolver:EF,getRedirectResult:Ck,inMemoryPersistence:bB,indexedDBLocalPersistence:hD,initializeAuth:kI,initializeRecaptchaConfig:pF,isSignInWithEmailLink:ZL,linkWithCredential:Ef,linkWithPhoneNumber:YF,linkWithPopup:ik,linkWithRedirect:fk,multiFactor:TF,onAuthStateChanged:ZI,onIdTokenChanged:YI,parseActionCodeURL:HL,prodErrorMap:fI,reauthenticateWithCredential:yf,reauthenticateWithPhoneNumber:XF,reauthenticateWithPopup:dD,reauthenticateWithRedirect:Bk,reload:II,revokeAccessToken:_F,sendEmailVerification:sF,sendPasswordResetEmail:JI,sendSignInLinkToEmail:XL,setPersistence:fF,signInAnonymously:GI,signInWithCredential:Pu,signInWithCustomToken:KL,signInWithEmailAndPassword:KI,signInWithEmailLink:eF,signInWithPhoneNumber:$F,signInWithPopup:rk,signInWithRedirect:uk,signOut:eD,unlink:JL,updateCurrentUser:mF,updateEmail:aF,updatePassword:zI,updatePhoneNumber:ZF,updateProfile:oF,useDeviceLanguage:gF,validatePassword:CF,verifyBeforeUpdateEmail:rF,verifyPasswordResetCode:$L},Symbol.toStringTag,{value:"Module"})),ex=typeof window<"u",tx={apiKey:"AIzaSyAbHjX0oyy9aCU8WDn9x3i-_T7hRMCSfRA",authDomain:"stay-on-the-board.firebaseapp.com",projectId:"stay-on-the-board",storageBucket:"stay-on-the-board.firebasestorage.app",messagingSenderId:"939636937442",appId:"1:939636937442:web:714e1a4566703fed8604bb",measurementId:"G-CPGNM62XZW",databaseURL:"https://stay-on-the-board-default-rtdb.europe-west1.firebasedatabase.app"},Of=ex&&window.__playwright_test__;let Co=null,go=null,mo=null,_o=null;function Lf(){if(Co)return Co;const s=VT();return s.length>0?Co=s[0]:Co=Hm(tx),Co}function rc(){if(go)return go;const s=Lf();return go=YE(s),Of&&(ee.init("[FirebaseService] Connecting to Firestore Emulator (127.0.0.1:8080)"),$B(go,"127.0.0.1",8080)),go}function nx(){if(mo)return mo;const s=Lf();return S0(),mo=P0(s),Of&&(ee.init("[FirebaseService] Connecting to Realtime DB Emulator (127.0.0.1:9000)"),BI(mo,"127.0.0.1",9e3)),mo}function sx(){if(_o)return _o;const s=Lf();return _o=DD(s),Of&&(ee.init("[FirebaseService] Connecting to Auth Emulator (127.0.0.1:9099)"),mf(_o,"http://127.0.0.1:9099",{disableWarnings:!0})),_o}const si={REWARDS:"rewards",ROOMS:"rooms",GENERAL:"general"};class rx{ref(e){return _t(rc(),si.REWARDS,e)}async merge(e,t){var n;try{const r=await Ir(this.ref(e));if(!r.exists())return await jn(this.ref(e),{unlockedRewards:t},{merge:!0}),t;const i=((n=r.data())==null?void 0:n.unlockedRewards)??{},o={...t,...i};return await jn(this.ref(e),{unlockedRewards:o},{merge:!0}),o}catch(r){return ee.error("[RewardsCloudService] Не вдалося злити нагороди",r),null}}}const ix=new rx,xh="rewards",ox={unlockedRewards:{},hasUnseenRewards:!1};var va;class ax{constructor(){or(this,va,vi(Vl(ox)));G(this,"subscribers",new Set);this.loadLocal()}get _state(){return Ai(Wt(this,va))}set _state(e){Ri(Wt(this,va),e,!0)}get state(){return this._state}init(){this.loadLocal()}loadLocal(){if(!(typeof window>"u")){try{const e=Fe.getJSON(xh);if(e){const t=fw.safeParse(e);t.success?(this._state=t.data,ee.info("[RewardsStore] Loaded validated state from storageService")):(ee.error("[RewardsStore] Invalid state in storageService, resetting to defaults.",t.error.format()),this.reset())}}catch(e){ee.error("[RewardsStore] Failed to load from storageService",e)}this.notifySubscribers()}}saveLocal(){typeof window<"u"&&Fe.setJSON(xh,this._state)}unlock(e){this._state.unlockedRewards[e]||(this._state.unlockedRewards[e]={id:e,unlockedAt:Date.now()},this._state.hasUnseenRewards=!0,this.saveLocal(),this.notifySubscribers(),ee.info(`[RewardsStore] Unlocked reward: ${e}`))}markAllAsSeen(){this._state.hasUnseenRewards=!1,this.saveLocal(),this.notifySubscribers()}async syncWithCloud(e){const t=await ix.merge(e,this._state.unlockedRewards);t&&(this._state.unlockedRewards=t,this.saveLocal()),this.notifySubscribers()}reset(){this._state={unlockedRewards:{},hasUnseenRewards:!1},typeof window<"u"&&Fe.remove(xh),this.notifySubscribers()}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}va=new WeakMap;const TD=new ax,ht=[];for(let s=0;s<256;++s)ht.push((s+256).toString(16).slice(1));function cx(s,e=0){return(ht[s[e+0]]+ht[s[e+1]]+ht[s[e+2]]+ht[s[e+3]]+"-"+ht[s[e+4]]+ht[s[e+5]]+"-"+ht[s[e+6]]+ht[s[e+7]]+"-"+ht[s[e+8]]+ht[s[e+9]]+"-"+ht[s[e+10]]+ht[s[e+11]]+ht[s[e+12]]+ht[s[e+13]]+ht[s[e+14]]+ht[s[e+15]]).toLowerCase()}let Mh;const lx=new Uint8Array(16);function ux(){if(!Mh){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Mh=crypto.getRandomValues.bind(crypto)}return Mh(lx)}const hx=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Dm={randomUUID:hx};function Bx(s,e,t){var r;s=s||{};const n=s.random??((r=s.rng)==null?void 0:r.call(s))??ux();if(n.length<16)throw new Error("Random bytes length must be >= 16");return n[6]=n[6]&15|64,n[8]=n[8]&63|128,cx(n)}function dx(s,e,t){return Dm.randomUUID&&!s?Dm.randomUUID():Bx(s)}const fx=4;var Aa;class px{constructor(){or(this,Aa,vi(Vl([])));G(this,"timers",new Map);G(this,"subscribers",new Set)}get _state(){return Ai(Wt(this,Aa))}set _state(e){Ri(Wt(this,Aa),e,!0)}get state(){return this._state}set state(e){this._state=e,this.notifySubscribers()}_arm(e){const t=Math.max(0,e.duration-e.elapsed);e.startTime=Date.now(),e.timerId=setTimeout(()=>this.remove(e.id),t)}add(e){const t=dx(),n=e.duration??4e3,r={...e,id:t,duration:n};if(this._state=[...this._state,r],this._state.length>fx&&this.remove(this._state[0].id),this.notifySubscribers(),n>0){const i={id:t,timerId:null,startTime:0,elapsed:0,duration:n,holds:0};this.timers.set(t,i),this._arm(i)}return t}pause(e){const t=this.timers.get(e);t&&(t.holds+=1,!(t.holds>1||t.timerId===null)&&(clearTimeout(t.timerId),t.elapsed=Math.min(t.elapsed+(Date.now()-t.startTime),t.duration),t.timerId=null))}resume(e){const t=this.timers.get(e);t&&(t.holds>0&&(t.holds-=1),!(t.holds>0||t.timerId!==null)&&this._arm(t))}remove(e){const t=this.timers.get(e);t!=null&&t.timerId&&clearTimeout(t.timerId),this.timers.delete(e),this._state=this._state.filter(n=>n.id!==e),this.notifySubscribers()}clear(){for(const e of this.timers.values())e.timerId&&clearTimeout(e.timerId);this.timers.clear(),this._state=[],this.notifySubscribers()}success(e,t=4e3,n){return this.add({type:"success",messageRaw:e,duration:t,anchor:n})}info(e,t=3e3,n){return this.add({type:"info",messageRaw:e,duration:t,anchor:n})}warning(e,t=5e3,n){return this.add({type:"warning",messageRaw:e,duration:t,anchor:n})}error(e,t=7e3,n){return this.add({type:"error",messageRaw:e,duration:t,anchor:n})}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}Aa=new WeakMap;const Cx=new px;var Ra;class gx{constructor(){or(this,Ra,vi(Vl({current:null,minRequired:null,updateAvailable:!1})));G(this,"subscribers",new Set)}get _state(){return Ai(Wt(this,Ra))}set _state(e){Ri(Wt(this,Ra),e,!0)}get state(){return this._state}setVersion(e){this._state.current=e,this.notifySubscribers()}setMinVersion(e){this._state.minRequired=e,this.notifySubscribers()}setUpdateAvailable(e){this._state.updateAvailable=e,this.notifySubscribers()}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}Ra=new WeakMap;const mx=new gx;var Sa;class _x{constructor(){or(this,Sa,vi(null))}get user(){return Ai(Wt(this,Sa))}set user(e){Ri(Wt(this,Sa),e,!0)}}Sa=new WeakMap;var Pa;class Ex{constructor(){or(this,Pa,vi(null))}get profile(){return Ai(Wt(this,Pa))}set profile(e){Ri(Wt(this,Pa),e,!0)}}Pa=new WeakMap;const NB=new _x,eM=NB,Fn=new Ex,yx=()=>{if(typeof window>"u")return{uid:"local",displayName:null,bestTimeScore:0,isAnonymous:!0};const s=Fe.get("online_playerName");return{uid:"local",displayName:s==="Player"||!s?null:s,bestTimeScore:parseInt(Fe.get("local_best_time_score")||"0"),isAnonymous:!0}};Fn.profile=yx();class Ix{constructor(){G(this,"db");G(this,"unwatch",null);this.db=rc()}async syncUserProfile(e){const t=_t(this.db,"users",e.uid);TD.syncWithCloud(e.uid);try{const n=await Ir(t),r=parseInt(Fe.get("local_best_time_score")||"0"),i=Fe.get("online_playerName"),o=i==="Player"?null:i;if(n.exists()){const a=n.data(),l=a.bestTimeScore||0,u=a.displayName||null,h=Math.max(r,l),d={lastActive:Date.now()};r>l&&(d.bestTimeScore=r),!u&&o&&(d.displayName=o),await jn(t,d,{merge:!0}),l>r&&Fe.set("local_best_time_score",l.toString()),u&&Fe.set("online_playerName",u),Fn.profile={uid:e.uid,displayName:u||o,bestTimeScore:h,isAnonymous:e.isAnonymous}}else{const a=mx.state.current,l={displayName:o,bestTimeScore:r,createdAt:Date.now(),lastActive:Date.now(),createdVersion:a||"unknown"};await jn(t,l),Fn.profile={uid:e.uid,displayName:o,bestTimeScore:r,isAnonymous:e.isAnonymous}}}catch(n){ee.error("[UserProfileService] Sync profile failed",n);const r=parseInt(Fe.get("local_best_time_score")||"0"),i=Fe.get("online_playerName");Fn.profile={uid:e.uid,displayName:i==="Player"?null:i,bestTimeScore:r,isAnonymous:e.isAnonymous}}}watchUserProfile(e){this.stopWatching();const t=_t(this.db,"users",e);return this.unwatch=pa(t,n=>{if(!n.exists())return;const r=n.data().bestTimeScore||0,i=parseInt(Fe.get("local_best_time_score")||"0");r>i?(Fe.set("local_best_time_score",r.toString()),Fn.profile&&(Fn.profile.bestTimeScore=r),ee.info("[UserProfileService] Best score arrived from another device")):i>r&&jn(t,{bestTimeScore:i},{merge:!0}).catch(o=>ee.warn("[UserProfileService] Best score not sent",o))},n=>ee.error("[UserProfileService] Live sync failed",n)),()=>this.stopWatching()}stopWatching(){var e;(e=this.unwatch)==null||e.call(this),this.unwatch=null}async updateNickname(e,t){const n=e&&e.trim()!==""&&e!=="Player"?e:null;if(Fn.profile&&(Fn.profile.displayName=n),n?Fe.set("online_playerName",n):Fe.remove("online_playerName"),!!t)try{const{updateProfile:r}=await Qr(async()=>{const{updateProfile:o}=await Promise.resolve().then(()=>wD);return{updateProfile:o}},void 0,import.meta.url);await r(t,{displayName:n});const i=_t(this.db,"users",t.uid);await jn(i,{displayName:n,lastActive:Date.now()},{merge:!0}),ee.action(`[UserProfileService] Nickname updated to ${n}`)}catch(r){ee.error("[UserProfileService] Update profile error",r)}}async eraseCloudData(e){const[{leaderboardService:t},{eraseFollows:n},{removeProfile:r}]=await Promise.all([Qr(()=>import("./D7uK9KpG.js"),__vite__mapDeps([0,1,2]),import.meta.url),Qr(()=>import("./UU0Umwhv.js"),__vite__mapDeps([3,1,2]),import.meta.url),Qr(()=>import("./v2btSBES.js"),__vite__mapDeps([4,1,2,5]),import.meta.url)]);await t.removeMyEntries(e),await n(e),await r(e).catch(o=>{ee.warn("[UserProfileService] Public profile not deleted",o)});const{deleteDoc:i}=await Qr(async()=>{const{deleteDoc:o}=await Promise.resolve().then(()=>Bb);return{deleteDoc:o}},void 0,import.meta.url);await Promise.all([i(_t(this.db,"users",e)).catch(o=>{ee.warn("[UserProfileService] User doc not deleted",o)}),i(_t(this.db,"rewards",e)).catch(o=>{ee.warn("[UserProfileService] Rewards doc not deleted",o)})])}clearLocalUserData(){ee.init("[UserProfileService] Clearing local user data..."),Fe.remove("local_best_time_score"),Fe.remove("sotb_rewards"),Fe.remove("online_playerName")}resetLocalProfile(){Fn.profile={uid:"local",displayName:null,bestTimeScore:0,isAnonymous:!0}}}const ms=new Ix;class Ml{constructor(){G(this,"authInstance",null);G(this,"pendingSignIn",null);G(this,"lastError","")}static isOffline(e){const t=e==null?void 0:e.code;return t==="auth/network-request-failed"||t==="auth/timeout"?!0:typeof navigator<"u"&&navigator.onLine===!1}get auth(){return this.authInstance||(this.authInstance=sx()),this.authInstance}async init(){ZI(this.auth,async e=>{e?(ee.init(`[AuthService] User logged in: ${e.uid} (Anon: ${e.isAnonymous})`),NB.user=e,await ms.syncUserProfile(e),ms.watchUserProfile(e.uid)):(ee.init("[AuthService] No user logged in. Signing in anonymously..."),NB.user=null,ms.stopWatching(),await this.ensureUser())})}async ensureUser(){const e=this.auth.currentUser;return e||(this.pendingSignIn??(this.pendingSignIn=this.signInAnonymously().catch(t=>(Ml.isOffline(t)?ee.warn("[AuthService:EnsureUser] мережі немає — користувача немає",t):ee.error("[AuthService:EnsureUser] Анонімний вхід не вдався",t),null)).then(t=>(this.pendingSignIn=null,t))),this.pendingSignIn)}async signInAnonymously(){try{return(await GI(this.auth)).user}catch(e){throw Ml.isOffline(e)?ee.warn("[AuthService:SignInAnonymously] мережі немає — граємо без входу",e):ee.error("[AuthService:SignInAnonymously] Firebase:",e),e}}async linkEmailPassword(e,t){const n=this.auth.currentUser;if(!n)return!1;try{const r=Pn.credential(e,t);return await Ef(n,r),!0}catch(r){return ee.error("[AuthService] Link error",r),!1}}async loginWithGoogle(){try{const{GoogleAuthProvider:e,linkWithPopup:t,signInWithCredential:n,signInWithPopup:r}=await Qr(async()=>{const{GoogleAuthProvider:a,linkWithPopup:l,signInWithCredential:u,signInWithPopup:h}=await Promise.resolve().then(()=>wD);return{GoogleAuthProvider:a,linkWithPopup:l,signInWithCredential:u,signInWithPopup:h}},void 0,import.meta.url),i=new e,o=this.auth.currentUser;if(!o)return await r(this.auth,i),!0;try{return await t(o,i),!0}catch(a){if((a.code??"")!=="auth/credential-already-in-use")throw a;const u=e.credentialFromError(a);if(!u)throw a;return await n(this.auth,u),!0}}catch(e){return ee.error("[AuthService] Google auth error",e),this.lastError=e.code??"",!1}}async loginEmailPassword(e,t){try{return await KI(this.auth,e,t),!0}catch(n){return ee.error("[AuthService] Login error",n),!1}}async resetPassword(e){try{return await JI(this.auth,e),!0}catch(t){return ee.error("[AuthService] Reset error",t),!1}}async reauthenticate(e,t){const n=e.providerData.some(r=>r.providerId==="google.com");t&&e.email?await yf(e,Pn.credential(e.email,t)):n&&await dD(e,new mn)}async deleteAccount(e){const t=this.auth.currentUser;if(!t)return!1;try{return await this.reauthenticate(t,e),await ms.eraseCloudData(t.uid),await tD(t),ms.clearLocalUserData(),!0}catch(n){return ee.error("[AuthService] Delete error",n),!1}}async changePassword(e,t){const n=this.auth.currentUser;if(!n)return!1;try{return await this.reauthenticate(n,t),await zI(n,e),!0}catch(r){return ee.error("[AuthService] Change password error",r),!1}}async updateNickname(e){const t=this.auth.currentUser;return ms.updateNickname(e,t)}async logout(){try{ms.clearLocalUserData(),ms.resetLocalProfile(),TD.reset(),await eD(this.auth)}catch(e){ee.error("[AuthService:Logout] Firebase:",e)}}getCurrentUser(){return this.auth.currentUser}}const ys=new Ml,Dx=50;class wx{get db(){return rc()}async sendMessage(e,t,n,r){const i=la(this.db,"rooms",e,"messages");await ty(i,{senderId:t,senderName:n,text:r,createdAt:uE()})}subscribeToChat(e,t){const n=la(this.db,"rooms",e,"messages"),r=Cl(n,gl("createdAt","desc"),ml(Dx));return pa(r,i=>{const o=[];i.forEach(a=>{const l=a.data();o.push({id:a.id,senderId:l.senderId,senderName:l.senderName,text:l.text,createdAt:l.createdAt?l.createdAt.toMillis():Date.now()})}),t(o.reverse())})}}const wm=new wx,Tx=$s({roomId:kt().nullable(),playerId:kt().nullable()}),Kr={ROOM_ID:"online_roomId",PLAYER_ID:"online_playerId"};class vx{saveSession(e,t){Fe.set(Kr.ROOM_ID,e),Fe.set(Kr.PLAYER_ID,t)}getSession(){const e={roomId:Fe.get(Kr.ROOM_ID),playerId:Fe.get(Kr.PLAYER_ID)},t=Tx.safeParse(e);return t.success?t.data:{roomId:null,playerId:null}}clearSession(){Fe.remove(Kr.ROOM_ID),Fe.remove(Kr.PLAYER_ID)}}const ur=new vx,Vh={reads:0,writes:0,bytesReceived:0,bytesSent:0,lastActivity:null,recentEvents:[],elapsedSeconds:0,isTracking:!1};var ba;class Ax{constructor(){or(this,ba,vi(Vl({...Vh})));G(this,"timerInterval",null);G(this,"subscribers",new Set)}get _state(){return Ai(Wt(this,ba))}set _state(e){Ri(Wt(this,ba),e,!0)}get state(){return this._state}set state(e){this._state=e,this.notifySubscribers()}update(e){this._state=e(this._state),this.notifySubscribers()}reset(){this._state={...Vh,isTracking:this._state.isTracking,elapsedSeconds:0},this.notifySubscribers()}startSession(){this.timerInterval&&clearInterval(this.timerInterval),this._state={...Vh,isTracking:!0},this.notifySubscribers(),this.timerInterval=setInterval(()=>{this._state.elapsedSeconds++,this.notifySubscribers()},1e3)}stopSession(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),this._state.isTracking=!1,this.notifySubscribers()}recordRead(e,t){const n=this.estimateSize(t),r={type:"read",size:n,source:e,timestamp:Date.now()};this._state.reads++,this._state.bytesReceived+=n,this._state.lastActivity=Date.now(),this._state.recentEvents=[r,...this._state.recentEvents].slice(0,20),this.notifySubscribers()}recordWrite(e,t){const n=this.estimateSize(t),r={type:"write",size:n,source:e,timestamp:Date.now()};this._state.writes++,this._state.bytesSent+=n,this._state.lastActivity=Date.now(),this._state.recentEvents=[r,...this._state.recentEvents].slice(0,20),this.notifySubscribers()}estimateSize(e){try{return new TextEncoder().encode(JSON.stringify(e)).length}catch{return 0}}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}ba=new WeakMap;const So=new Ax;function kc(s,e,t){let n;const r=new Promise((i,o)=>{n=setTimeout(()=>{o(new Error(t))},e)});return Promise.race([s.then(i=>(clearTimeout(n),i)),r])}const Rx=$s({seconds:zn(),nanoseconds:zn()});hw([zn(),Rx]);const Sx=kt().min(2).max(20).trim();$s({id:kt(),name:Sx,color:kt().regex(/^#[0-9A-Fa-f]{6}$/).default("#4A90E2"),isReady:Ds().default(!1),joinedAt:on(),isOnline:Ds().default(!0),isWatchingReplay:Ds().optional(),lastSeen:on().optional(),isDisconnected:Ds().optional(),disconnectStartedAt:on().optional()}).passthrough();const Px=Bw(["waiting","playing","finished"]);$s({boardSize:zn().min(2).max(20).default(4),blockModeEnabled:Ds().default(!1),blockOnVisitCount:zn().min(0).default(0),gameMode:kt().nullable().optional(),turnDuration:zn().optional(),settingsLocked:Ds().optional()}).passthrough();const bx=$s({id:kt(),name:kt().min(1).max(100),hostId:kt(),status:kt(),createdAt:on(),lastActivity:on(),isPrivate:on(),settingsLocked:on(),allowGuestSettings:on(),players:on(),settings:on(),maxPlayers:on().optional()}).passthrough();$s({id:kt(),name:kt(),status:Px,playerCount:zn(),maxPlayers:zn(),isPrivate:Ds()});const xc=3e4,Tm=50;class Nx{get db(){return rc()}getRoomRef(e){return _t(this.db,si.ROOMS,e)}validateRoom(e,t){const n=bx.safeParse({...e,id:t});return n.success?n.data:(ee.error(`[RoomFirestoreService] Кімната ${t} не відповідає схемі`,n.error.issues.map(r=>`${r.path.join(".")}: ${r.message}`)),{...e,id:t})}async createRoomDoc(e,t){await kc(jn(this.getRoomRef(e),t),xc,"Timeout: Failed to connect to Firebase Firestore.")}async getStatsDoc(){const e=_t(this.db,si.GENERAL,"stats"),t=await Ir(e);return t.exists()?t.data():null}async updateStatsDoc(e){const t=_t(this.db,si.GENERAL,"stats");await jn(t,e,{merge:!0})}async getPublicRoomsQuerySnapshot(){const e=Cl(la(this.db,si.ROOMS),fB("isPrivate","==",!1),gl("lastActivity","desc"),ml(Tm)),[t,n]=await Promise.all([kc(ey(e),xc,"Timeout fetching rooms"),this.getStatsDoc().catch(()=>null)]);return[t,n]}subscribeToPublicRooms(e,t){const n=Cl(la(this.db,si.ROOMS),fB("isPrivate","==",!1),gl("lastActivity","desc"),ml(Tm));return pa(n,e,t)}async deleteRoomDoc(e){await bd(e)}async getRoomDoc(e){const t=await kc(Ir(this.getRoomRef(e)),xc,"Timeout connecting to room");return t.exists()?this.validateRoom(t.data(),t.id):null}async getRoomDocSimple(e){const t=await Ir(this.getRoomRef(e));return t.exists()?this.validateRoom(t.data(),t.id):null}async updateRoomDoc(e,t,n=!1){const r=Br(this.getRoomRef(e),t);n?await kc(r,xc,"Timeout updating room"):await r}subscribeToRoom(e,t,n){return pa(this.getRoomRef(e),r=>{if(r.exists()){const i=r.data();So.recordRead("RoomSubscription",i),t(this.validateRoom(i,r.id))}else t(null)},n)}}const Ct=new Nx;class Ox{get rtdb(){return nx()}trackPresence(e,t){const n=Oc(this.rtdb,`/status/${e}/${t}`),r=Oc(this.rtdb,".info/connected");return ee.init(`[PresenceService] Setting up presence tracking for ${t} in ${e}`),em(r,i=>{if(i.val()===!1){ee.presence(`[PresenceService] RTDB connection lost for ${t}`);return}ee.presence(`[PresenceService] RTDB connected for ${t}. Setting up onDisconnect and online status.`),_0(n).set({state:"offline",last_changed:Sh()}).then(()=>{Zg(n,{state:"online",last_changed:Sh()}),ee.presence(`[PresenceService] Presence tracking active for ${t}`)})})}async setOffline(e,t){const n=Oc(this.rtdb,`/status/${e}/${t}`);await Zg(n,{state:"offline",last_changed:Sh()})}subscribeToRoomPresence(e,t){const n=Oc(this.rtdb,`/status/${e}`);return em(n,r=>t(r.val()||{}))}}const Lx=new Ox;function $c(s){return s==null?0:typeof s=="number"?s:s&&typeof s=="object"&&"seconds"in s&&"nanoseconds"in s?s.seconds*1e3+Math.floor(s.nanoseconds/1e6):0}const vD=1440*60*1e3;function Cn(s=Date.now()){return{lastActivity:s,expiresAt:_e.fromMillis(s+vD)}}function Fx(s,e=Date.now()){return e-$c(s.lastActivity)>vD}function kx(s){var r;const e=(r=ys.getCurrentUser())==null?void 0:r.uid;if(!e)return;const t=Date.now(),n=[];s.forEach(i=>{const o=i.data();o.hostId===e&&Fx(o,t)&&n.push(i.ref)}),n.length!==0&&Promise.allSettled(n.map(i=>Ct.deleteRoomDoc(i))).then(i=>{const o=i.filter(a=>a.status==="rejected").length;o>0?ee.warn(`[RoomLifetime] не прибрано ${o} із ${n.length} своїх прострочених кімнат`):ee.init(`[RoomLifetime] прибрано своїх прострочених кімнат: ${n.length}`)})}class xx{get db(){return rc()}async updatePlayer(e,t,n){const r=_t(this.db,"rooms",e),i={};for(const o in n)i[`players.${t}.${o}`]=n[o];await Br(r,i),So.recordWrite("RoomPlayer:updatePlayer",i)}async toggleReady(e,t,n){const r=_t(this.db,"rooms",e),i={[`players.${t}.isReady`]:n,...Cn()};await Br(r,i),So.recordWrite("RoomPlayer:toggleReady",i)}async setWatchingReplay(e,t,n){const r=_t(this.db,"rooms",e),i={[`players.${t}.isWatchingReplay`]:n,...Cn()};await Br(r,i),So.recordWrite("RoomPlayer:setWatchingReplay",i)}async sendHeartbeat(e,t){await this.updateLobbyPresence(e,t)}async updateLobbyPresence(e,t){const n=_t(this.db,"rooms",e),r={[`players.${t}.lastSeen`]:Date.now()};await Br(n,r),So.recordWrite("RoomPlayer:Heartbeat",r)}async leaveRoom(e,t){ee.init(`[RoomPlayerService] leaveRoom CALLED for ${e} by ${t}`);const n=_t(this.db,"rooms",e);await Lx.setOffline(e,t).catch(r=>{ee.presence(`[RoomPlayerService] Failed to set offline: ${r}`)}),ur.clearSession();try{const r=await Ir(n);if(!r.exists()){ee.init(`[RoomPlayerService] Room ${e} does not exist.`);return}const i=r.data(),o={...i.players};if(o[t]){delete o[t],ee.init("[RoomPlayerService] Removed player from map. Checking remaining...");const a=Object.values(o),l=a.filter(u=>!u.isDisconnected);if(ee.init(`[RoomPlayerService] Remaining: ${a.length}, Active: ${l.length}`),a.length===0)ee.init("[RoomPlayerService] Room empty, deleting room."),await bd(n);else{const u={[`players.${t}`]:lE(),...Cn()};if(i.hostId===t){const d=l[0]||a[0];d&&(u.hostId=d.id,ee.init(`[RoomPlayerService] Host migrated to ${d.id}`))}a.length>0&&a.every(d=>d.isReady)&&i.status==="finished"&&(u.status="waiting"),await Br(n,u)}}}catch(r){ee.error("[RoomPlayerService] Failed to leave room:",r)}}}const Eo=new xx,vm=["FIFA","SIMS","NFS","GTA","Peek","CS2","TrackMania","RoadRash","Minecraft","Tetris","Doom","Zelda","Mario","Portal","Halo","Cyberpunk","Witcher","Skyrim","Fortnite","Dota","Sonic","Metroid","PacMan","Diablo","StarCraft"],Am=["Alik","Noah","Jack","Mateo","Lucas","Sofia","Olivia","Nora","Lucia","Emilia","Liam","Oliver","Elijah","James","William","Benjamin","Henry","Mia","Evelyn","Harper"];function Mx(){return vm[Math.floor(Math.random()*vm.length)]}function tM(){return Am[Math.floor(Math.random()*Am.length)]}class Vx{handle(e,t={}){const{context:n,showToast:r=!0,userMessageKey:i="common.errorOccurred",userMessageRaw:o}=t,a=e instanceof Error?e.message:String(e),l=e instanceof Error?e.stack:void 0;ee.error(`${n?"["+n+"] ":""}${a}`,{error:e,stack:l}),r&&Cx.add({type:"error",messageKey:o?void 0:i,messageRaw:o,duration:7e3})}initGlobalHandlers(){typeof window>"u"||(window.onerror=(e,t,n,r,i)=>{this.handle(i||e,{context:"WindowOnError"})},window.onunhandledrejection=e=>{this.handle(e.reason,{context:"UnhandledRejection"})})}}const zr=new Vx;class AD extends Error{constructor(e,t="APP_ERROR",n){super(e),this.message=e,this.code=t,this.context=n,this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}class yo extends AD{constructor(e,t="ROOM_ERROR",n){super(e,t,n)}}class Rm extends AD{constructor(e,t="AUTH_ERROR",n){super(e,t,n)}}function Gx(){const s=new Date,e=d=>d.toString().padStart(2,"0"),t=d=>d.toString().padStart(3,"0"),n=s.getFullYear(),r=e(s.getMonth()+1),i=e(s.getDate()),o=e(s.getHours()),a=e(s.getMinutes()),l=e(s.getSeconds()),u=t(s.getMilliseconds());return`${Math.random().toString(36).slice(2,6).padEnd(4,"0")}_${n}-${r}-${i}_${o}-${a}-${l}_${u}`}const Ux=6e5,Gh=8;class Hx{async createRoom(e,t=!1,n){ee.init(`[RoomService] createRoom START. Host: ${e}`);let r=ys.getCurrentUser();r||(ee.init("[RoomService] Not authenticated. Performing quick sign-in..."),r=await ys.signInAnonymously());const i=r.uid,o=xp([]),a={id:i,name:e,color:o,isReady:!0,joinedAt:Date.now(),isOnline:!0,isWatchingReplay:!1},l=n&&n.trim()!==""?n.trim():Mx(),u={...lw,boardSize:2,turnDuration:1e3,autoHideBoard:!1,blockModeEnabled:!0,blockOnVisitCount:0,settingsLocked:!1},h={name:l,hostId:i,status:"waiting",createdAt:Date.now(),...Cn(),isPrivate:t,settingsLocked:!1,allowGuestSettings:!0,players:{[i]:a},settings:u,maxPlayers:Gh};try{const d=Gx();return await Ct.createRoomDoc(d,h),t||Ct.updateStatsDoc({lastRoomCreatedAt:Date.now()}).catch(p=>ee.warn("[RoomService] спільна статистика не оновилася",p)),ur.saveSession(d,i),d}catch(d){throw zr.handle(d,{context:"RoomService:CreateRoom"}),new yo("Failed to create room","CREATE_FAILED",{originalError:d})}}processRoomsSnapshot(e){const t=[],n=Date.now();let r=0;return kx(e),e.forEach(i=>{const o=i.data(),a=$c(o.createdAt),l=$c(o.lastActivity);if(a>r&&(r=a),n-l>Ux)return;const u=Object.values(o.players||{}),h=u.filter(d=>{const p=$c(d.lastSeen||d.joinedAt),g=n-p<12e4;return!d.isDisconnected&&g});o.status==="playing"&&h.length===0||u.length>0&&t.push({id:i.id,name:o.name,status:o.status,playerCount:u.length,maxPlayers:o.maxPlayers||Gh,isPrivate:o.isPrivate})}),{rooms:t,latestCreatedAt:r>0?r:void 0}}async getPublicRooms(){if(!await ys.ensureUser())return ee.error("[RoomService] Немає користувача — перелік кімнат не читається"),{rooms:[],unavailable:!0};try{const[t,n]=await Ct.getPublicRoomsQuerySnapshot(),r=this.processRoomsSnapshot(t),i=(n==null?void 0:n.lastRoomCreatedAt)||0,o=Math.max(r.latestCreatedAt||0,i);return{rooms:r.rooms,latestCreatedAt:o>0?o:void 0}}catch(t){return zr.handle(t,{context:"RoomService:GetPublicRooms",showToast:!1}),{rooms:[],unavailable:!0}}}subscribeToPublicRooms(e){let t=null,n=!1;return ys.ensureUser().then(r=>{if(!n){if(!r){ee.error("[RoomService] Немає користувача — живий перелік не відкривається"),e({rooms:[],unavailable:!0});return}t=Ct.subscribeToPublicRooms(i=>{const o=this.processRoomsSnapshot(i);e(o)},i=>{zr.handle(i,{context:"RoomService:SubscribePublicRooms",showToast:!1}),e({rooms:[],unavailable:!0})})}}),()=>{n=!0,t==null||t(),t=null}}async joinRoom(e,t){ee.init(`[RoomService] joinRoom START. Room: ${e}`);let n=ys.getCurrentUser();n||(ee.init("[RoomService] joinRoom: Not authenticated. Performing quick sign-in..."),n=await ys.signInAnonymously());const r=n.uid;try{const i=await Ct.getRoomDoc(e);if(!i)throw new yo("Room not found","NOT_FOUND",{roomId:e});const o=ur.getSession();if(o.roomId===e&&o.playerId&&i.players[o.playerId]){const h=Object.values(i.players).filter(d=>d.id!==o.playerId);if(i.status!=="waiting"&&h.length===0)throw ee.init("[RoomService] Reconnect aborted: Room is empty (only me left) and game started/finished."),ur.clearSession(),await Eo.leaveRoom(e,o.playerId),new Rm("Game ended because all opponents left.","RECONNECT_ABORTED");return ee.init("[RoomService] Reconnecting as existing player"),i.players[o.playerId].name!==t&&await Ct.updateRoomDoc(e,{[`players.${o.playerId}.name`]:t,...Cn()}),o.playerId}if(Object.keys(i.players).length>=Gh)throw new yo("Room is full","FULL");if(i.status==="playing")throw new yo("Game already started","ALREADY_STARTED");const a=Object.values(i.players).map(h=>h.color),l=xp(a),u={id:r,name:t,color:l,isReady:!1,joinedAt:Date.now(),isOnline:!0,isWatchingReplay:!1};return await Ct.updateRoomDoc(e,{[`players.${r}`]:u,...Cn()},!0),ur.saveSession(e,r),r}catch(i){throw i instanceof yo||i instanceof Rm||zr.handle(i,{context:"RoomService:JoinRoom"}),i}}async getRoom(e){await ys.ensureUser();try{return await Ct.getRoomDocSimple(e)}catch(t){return zr.handle(t,{context:"RoomService:GetRoom",showToast:!1}),null}}subscribeToRoom(e,t){return Ct.subscribeToRoom(e,n=>{n||ee.init(`[RoomService] Room ${e} deleted or not found`),t(n)},n=>{zr.handle(n,{context:"RoomService:SubscribeRoom",showToast:!1})})}async startGame(e){const t=await Ct.getRoomDocSimple(e);if(!t)return;const n={...t.players};Object.keys(n).forEach(r=>{n[r].isReady=!1,n[r].isWatchingReplay=!1}),await Ct.updateRoomDoc(e,{status:"playing",players:n,...Cn()})}async returnToLobby(e,t){const n=await Ct.getRoomDocSimple(e);if(!n)return;const r={[`players.${t}.isReady`]:!0,[`players.${t}.isWatchingReplay`]:!1,...Cn()},i={...n.players};i[t]&&(i[t]={...i[t],isReady:!0}),Object.values(i).every(a=>a.isReady)?r.status="waiting":n.status==="playing"&&(r.status="finished"),await Ct.updateRoomDoc(e,r)}async updateRoomSettings(e,t){const n={...Cn()};for(const[r,i]of Object.entries(t))r==="allowGuestSettings"?n.allowGuestSettings=i:n[`settings.${r}`]=i;t.settingsLocked!==void 0&&(n.settingsLocked=t.settingsLocked),await Ct.updateRoomDoc(e,n)}async renameRoom(e,t){await Ct.updateRoomDoc(e,{name:t,...Cn()})}getSession(){return ur.getSession()}clearSession(){ur.clearSession()}async updatePlayer(e,t,n){return Eo.updatePlayer(e,t,n)}async toggleReady(e,t,n){return Eo.toggleReady(e,t,n)}async setWatchingReplay(e,t,n){return Eo.setWatchingReplay(e,t,n)}async leaveRoom(e,t){return Eo.leaveRoom(e,t)}async sendMessage(e,t,n,r){return wm.sendMessage(e,t,n,r)}subscribeToChat(e,t){return wm.subscribeToChat(e,t)}}const nM=new Hx;export{lE as A,Lx as B,si as C,$c as D,Sx as P,ey as a,ys as b,la as c,_t as d,uE as e,bd as f,rc as g,Ir as h,tM as i,TD as j,Fn as k,ml as l,Br as m,Cx as n,gl as o,Cn as p,Cl as q,nM as r,jn as s,Mx as t,eM as u,mx as v,fB as w,zr as x,Eo as y,pa as z};
//# sourceMappingURL=Db9rlEt-.js.map
