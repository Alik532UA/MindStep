const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./B_UEwFxl.js","./Cn0A_IIF.js","./CYCPgGk1.js","./hu5IxucC.js","./DjrAveU5.js","./DlAccrPC.js"])))=>i.map(i=>d[i]);
var gw=Object.defineProperty;var Hp=s=>{throw TypeError(s)};var mw=(s,e,t)=>e in s?gw(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var V=(s,e,t)=>mw(s,typeof e!="symbol"?e+"":e,t),_w=(s,e,t)=>e.has(s)||Hp("Cannot "+t);var Kt=(s,e,t)=>(_w(s,e,"read from private field"),t?t.call(s):e.get(s)),ir=(s,e,t)=>e.has(s)?Hp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);import{l as te,s as ke}from"./Cn0A_IIF.js";import{g as qp,d as Ew}from"./qnpbUICd.js";import{o as Qs,n as Qn,s as xt,b as Is,r as yw,u as Iw,d as cn,_ as Dw}from"./Cuzarv3I.js";import{an as vi,at as Hl,g as Ai,s as Ri}from"./CYCPgGk1.js";import{_ as $r}from"./Dp1pzeXC.js";const ww=Qs({id:xt(),unlockedAt:Qn()}),Tw=Qs({unlockedRewards:yw(xt(),ww),hasUnseenRewards:Is()}),vw=()=>{};var jp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=function(s,e){if(!s)throw Si(e)},Si=function(s){return new Error("Firebase Database ("+Mm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Aw=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=s[t++];e[n++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=s[t++],o=s[t++],a=s[t++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=s[t++],o=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},MB={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const i=s[r],o=r+1<s.length,a=o?s[r+1]:0,l=r+2<s.length,u=l?s[r+2]:0,h=i>>2,B=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),n.push(t[h],t[B],t[p],t[g])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Vm(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Aw(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const i=t[s.charAt(r++)],a=r<s.length?t[s.charAt(r)]:0;++r;const u=r<s.length?t[s.charAt(r)]:64;++r;const B=r<s.length?t[s.charAt(r)]:64;if(++r,i==null||a==null||u==null||B==null)throw new Rw;const p=i<<2|a>>4;if(n.push(p),u!==64){const g=a<<4&240|u>>2;if(n.push(g),B!==64){const m=u<<6&192|B;n.push(m)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Rw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gm=function(s){const e=Vm(s);return MB.encodeByteArray(e,!0)},Zc=function(s){return Gm(s).replace(/\./g,"")},el=function(s){try{return MB.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(s){return Um(void 0,s)}function Um(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Pw(t)||(s[t]=Um(s[t],e[t]));return s}function Pw(s){return s!=="__proto__"}/**
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
 */function bw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nw=()=>bw().__FIREBASE_DEFAULTS__,Ow=()=>{if(typeof process>"u"||typeof jp>"u")return;const s=jp.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Lw=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&el(s[1]);return e&&JSON.parse(e)},ql=()=>{try{return vw()||Nw()||Ow()||Lw()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Hm=s=>{var e,t;return(t=(e=ql())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},qm=s=>{const e=Hm(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},jm=()=>{var s;return(s=ql())==null?void 0:s.config},Jm=s=>{var e;return(e=ql())==null?void 0:e[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Wm(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=s.iat||0,i=s.sub||s.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Zc(JSON.stringify(t)),Zc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VB(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function Fw(){var e;const s=(e=ql())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xw(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Km(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mw(){const s=It();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Vw(){return Mm.NODE_ADMIN===!0}function Gw(){return!Fw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uw(){try{return typeof indexedDB=="object"}catch{return!1}}function Hw(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="FirebaseError";class cs extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=qw,Object.setPrototypeOf(this,cs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Na.prototype.create)}}class Na{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?jw(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new cs(r,a,n)}}function jw(s,e){try{let t=0,n="";for(;t<s.length;){const r=s.indexOf("{$",t);if(r===-1){n+=s.substring(t);break}const i=s.indexOf("}",r+2);if(i===-1){n+=s.substring(t);break}const o=s.substring(r+2,i),a=e[o];n+=s.substring(t,r)+(a!=null?String(a):`<${o}?>`),t=i+1}return n}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(s){return JSON.parse(s)}function ut(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=function(s){let e={},t={},n={},r="";try{const i=s.split(".");e=Qo(el(i[0])||""),t=Qo(el(i[1])||""),r=i[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:r}},Jw=function(s){const e=zm(s),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Ww=function(s){const e=zm(s).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function hi(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function tl(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function nl(s,e,t){const n={};for(const r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=e.call(t,s[r],r,s));return n}function Ls(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const i=s[r],o=e[r];if(Jp(i)&&Jp(o)){if(!Ls(i,o))return!1}else if(i!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function Jp(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Do(s){const e={};return s.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,i]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function wo(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let B=0;B<16;B++)n[B]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let B=0;B<16;B++)n[B]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let B=16;B<80;B++){const p=n[B-3]^n[B-8]^n[B-14]^n[B-16];n[B]=(p<<1|p>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let B=0;B<80;B++){B<40?B<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):B<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(r<<5|r>>>27)+u+l+h+n[B]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=p}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[r]>>i&255,++n;return e}}function zw(s,e){const t=new Qw(s,e);return t.subscribe.bind(t)}class Qw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");$w(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=uh),r.error===void 0&&(r.error=uh),r.complete===void 0&&(r.complete=uh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $w(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function uh(){}function Bi(s,e){return`${s} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);if(r>=55296&&r<=56319){const i=r-55296;n++,J(n<s.length,"Surrogate pair missing trail surrogate.");const o=s.charCodeAt(n)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},jl=function(s){let e=0;for(let t=0;t<s.length;t++){const n=s.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ne(s){return s&&s._delegate?s._delegate:s}/**
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
 */function Fr(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function GB(s){return(await fetch(s,{credentials:"include"})).ok}class Fs{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Xw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new yn;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eT(e))try{this.getOrInitializeService({instanceIdentifier:ar})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});n.resolve(i)}catch{}}}}clearInstance(e=ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ar){return this.instances.has(e)}getOptions(e=ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);n===a&&o.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Zw(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ar){return this.component?this.component.multipleInstances?e:ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zw(s){return s===ar?void 0:s}function eT(s){return s.instantiationMode==="EAGER"}/**
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
 */class tT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(pe||(pe={}));const nT={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},sT=pe.INFO,rT={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},iT=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=rT[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jl{constructor(e){this.name=e,this._logLevel=sT,this._logHandler=iT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const oT=(s,e)=>e.some(t=>s instanceof t);let Wp,Kp;function aT(){return Wp||(Wp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cT(){return Kp||(Kp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qm=new WeakMap,Kh=new WeakMap,$m=new WeakMap,hh=new WeakMap,UB=new WeakMap;function lT(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",i),s.removeEventListener("error",o)},i=()=>{t(ws(s.result)),r()},o=()=>{n(s.error),r()};s.addEventListener("success",i),s.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Qm.set(t,s)}).catch(()=>{}),UB.set(e,s),e}function uT(s){if(Kh.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",o),s.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",i),s.addEventListener("error",o),s.addEventListener("abort",o)});Kh.set(s,e)}let zh={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Kh.get(s);if(e==="objectStoreNames")return s.objectStoreNames||$m.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ws(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function hT(s){zh=s(zh)}function BT(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(Bh(this),e,...t);return $m.set(n,e.sort?e.sort():[e]),ws(n)}:cT().includes(s)?function(...e){return s.apply(Bh(this),e),ws(Qm.get(this))}:function(...e){return ws(s.apply(Bh(this),e))}}function dT(s){return typeof s=="function"?BT(s):(s instanceof IDBTransaction&&uT(s),oT(s,aT())?new Proxy(s,zh):s)}function ws(s){if(s instanceof IDBRequest)return lT(s);if(hh.has(s))return hh.get(s);const e=dT(s);return e!==s&&(hh.set(s,e),UB.set(e,s)),e}const Bh=s=>UB.get(s);function fT(s,e,{blocked:t,upgrade:n,blocking:r,terminated:i}={}){const o=indexedDB.open(s,e),a=ws(o);return n&&o.addEventListener("upgradeneeded",l=>{n(ws(o.result),l.oldVersion,l.newVersion,ws(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const pT=["get","getKey","getAll","getAllKeys","count"],CT=["put","add","delete","clear"],dh=new Map;function zp(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(dh.get(e))return dh.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=CT.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||pT.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&l.done]))[0]};return dh.set(e,i),i}hT(s=>({...s,get:(e,t,n)=>zp(e,t)||s.get(e,t,n),has:(e,t)=>!!zp(e,t)||s.has(e,t)}));/**
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
 */class gT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mT(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function mT(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qh="@firebase/app",Qp="0.16.2";/**
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
 */const ts=new Jl("@firebase/app"),_T="@firebase/app-compat",ET="@firebase/analytics-compat",yT="@firebase/analytics",IT="@firebase/app-check-compat",DT="@firebase/app-check",wT="@firebase/auth",TT="@firebase/auth-compat",vT="@firebase/database",AT="@firebase/data-connect",RT="@firebase/database-compat",ST="@firebase/functions",PT="@firebase/functions-compat",bT="@firebase/installations",NT="@firebase/installations-compat",OT="@firebase/messaging",LT="@firebase/messaging-compat",FT="@firebase/performance",kT="@firebase/performance-compat",xT="@firebase/remote-config",MT="@firebase/remote-config-compat",VT="@firebase/storage",GT="@firebase/storage-compat",UT="@firebase/firestore",HT="@firebase/ai",qT="@firebase/firestore-compat",jT="firebase",JT="12.19.0";/**
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
 */const $h="[DEFAULT]",WT={[Qh]:"fire-core",[_T]:"fire-core-compat",[yT]:"fire-analytics",[ET]:"fire-analytics-compat",[DT]:"fire-app-check",[IT]:"fire-app-check-compat",[wT]:"fire-auth",[TT]:"fire-auth-compat",[vT]:"fire-rtdb",[AT]:"fire-data-connect",[RT]:"fire-rtdb-compat",[ST]:"fire-fn",[PT]:"fire-fn-compat",[bT]:"fire-iid",[NT]:"fire-iid-compat",[OT]:"fire-fcm",[LT]:"fire-fcm-compat",[FT]:"fire-perf",[kT]:"fire-perf-compat",[xT]:"fire-rc",[MT]:"fire-rc-compat",[VT]:"fire-gcs",[GT]:"fire-gcs-compat",[UT]:"fire-fst",[qT]:"fire-fst-compat",[HT]:"fire-vertex","fire-js":"fire-js",[jT]:"fire-js-all"};/**
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
 */const $o=new Map,KT=new Map,Yh=new Map;function $p(s,e){try{s.container.addComponent(e)}catch(t){ts.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function vr(s){const e=s.name;if(Yh.has(e))return ts.debug(`There were multiple attempts to register component ${e}.`),!1;Yh.set(e,s);for(const t of $o.values())$p(t,s);for(const t of KT.values())$p(t,s);return!0}function Wl(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function xe(s){return s==null?!1:s.settings!==void 0}/**
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
 */const zT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hn=new Na("app","Firebase",zT);/**
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
 */class QT{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
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
 */const kr=JT;function Ym(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:$h,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw Hn.create("bad-app-name",{appName:String(r)});if(t||(t=jm()),!t)throw Hn.create("no-options");const i=$o.get(r);if(i)if(Ls(t,i.options)){if(Ls(n,i.config))return i;throw Hn.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw Hn.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new tT(r);for(const l of Yh.values())o.addComponent(l);const a=new QT(t,n,o);return $o.set(r,a),a}function HB(s=$h){const e=$o.get(s);if(!e&&s===$h&&jm())return Ym();if(!e)throw Hn.create("no-app",{appName:s});return e}function $T(){return Array.from($o.values())}function vn(s,e,t){let n=WT[s]??s;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${n}" with version "${e}":`];r&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ts.warn(o.join(" "));return}vr(new Fs(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const YT="firebase-heartbeat-database",XT=1,Yo="firebase-heartbeat-store";let fh=null;function Xm(){return fh||(fh=fT(YT,XT,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Yo)}catch(t){console.warn(t)}}}}).catch(s=>{throw Hn.create("idb-open",{originalErrorMessage:s.message})})),fh}async function ZT(s){try{const t=(await Xm()).transaction(Yo),n=await t.objectStore(Yo).get(Zm(s));return await t.done,n}catch(e){if(e instanceof cs)ts.warn(e.message);else{const t=Hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ts.warn(t.message)}}}async function Yp(s,e){try{const n=(await Xm()).transaction(Yo,"readwrite");await n.objectStore(Yo).put(e,Zm(s)),await n.done}catch(t){if(t instanceof cs)ts.warn(t.message);else{const n=Hn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ts.warn(n.message)}}}function Zm(s){return`${s.name}!${s.options.appId}`}/**
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
 */const ev=1024,tv=30;class nv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rv(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>tv){const o=iv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ts.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xp(),{heartbeatsToSend:n,unsentEntries:r}=sv(this._heartbeatsCache.heartbeats),i=Zc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ts.warn(t),""}}}function Xp(){return new Date().toISOString().substring(0,10)}function sv(s,e=ev){const t=[];let n=s.slice();for(const r of s){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Zp(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Zp(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class rv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uw()?Hw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ZT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Yp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Yp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Zp(s){return Zc(JSON.stringify({version:2,heartbeats:s})).length}function iv(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
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
 */function ov(s){vr(new Fs("platform-logger",e=>new gT(e),"PRIVATE")),vr(new Fs("heartbeat",e=>new nv(e),"PRIVATE")),vn(Qh,Qp,s),vn(Qh,Qp,"esm2020"),vn("fire-js","")}/**
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
 */ov("");var eC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ts,e_;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function D(){}D.prototype=y.prototype,A.F=y.prototype,A.prototype=new D,A.prototype.constructor=A,A.D=function(R,v,b){for(var I=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)I[Lt-2]=arguments[Lt];return y.prototype[v].apply(R,I)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(A,y,D){D||(D=0);const R=Array(16);if(typeof y=="string")for(var v=0;v<16;++v)R[v]=y.charCodeAt(D++)|y.charCodeAt(D++)<<8|y.charCodeAt(D++)<<16|y.charCodeAt(D++)<<24;else for(v=0;v<16;++v)R[v]=y[D++]|y[D++]<<8|y[D++]<<16|y[D++]<<24;y=A.g[0],D=A.g[1],v=A.g[2];let b=A.g[3],I;I=y+(b^D&(v^b))+R[0]+3614090360&4294967295,y=D+(I<<7&4294967295|I>>>25),I=b+(v^y&(D^v))+R[1]+3905402710&4294967295,b=y+(I<<12&4294967295|I>>>20),I=v+(D^b&(y^D))+R[2]+606105819&4294967295,v=b+(I<<17&4294967295|I>>>15),I=D+(y^v&(b^y))+R[3]+3250441966&4294967295,D=v+(I<<22&4294967295|I>>>10),I=y+(b^D&(v^b))+R[4]+4118548399&4294967295,y=D+(I<<7&4294967295|I>>>25),I=b+(v^y&(D^v))+R[5]+1200080426&4294967295,b=y+(I<<12&4294967295|I>>>20),I=v+(D^b&(y^D))+R[6]+2821735955&4294967295,v=b+(I<<17&4294967295|I>>>15),I=D+(y^v&(b^y))+R[7]+4249261313&4294967295,D=v+(I<<22&4294967295|I>>>10),I=y+(b^D&(v^b))+R[8]+1770035416&4294967295,y=D+(I<<7&4294967295|I>>>25),I=b+(v^y&(D^v))+R[9]+2336552879&4294967295,b=y+(I<<12&4294967295|I>>>20),I=v+(D^b&(y^D))+R[10]+4294925233&4294967295,v=b+(I<<17&4294967295|I>>>15),I=D+(y^v&(b^y))+R[11]+2304563134&4294967295,D=v+(I<<22&4294967295|I>>>10),I=y+(b^D&(v^b))+R[12]+1804603682&4294967295,y=D+(I<<7&4294967295|I>>>25),I=b+(v^y&(D^v))+R[13]+4254626195&4294967295,b=y+(I<<12&4294967295|I>>>20),I=v+(D^b&(y^D))+R[14]+2792965006&4294967295,v=b+(I<<17&4294967295|I>>>15),I=D+(y^v&(b^y))+R[15]+1236535329&4294967295,D=v+(I<<22&4294967295|I>>>10),I=y+(v^b&(D^v))+R[1]+4129170786&4294967295,y=D+(I<<5&4294967295|I>>>27),I=b+(D^v&(y^D))+R[6]+3225465664&4294967295,b=y+(I<<9&4294967295|I>>>23),I=v+(y^D&(b^y))+R[11]+643717713&4294967295,v=b+(I<<14&4294967295|I>>>18),I=D+(b^y&(v^b))+R[0]+3921069994&4294967295,D=v+(I<<20&4294967295|I>>>12),I=y+(v^b&(D^v))+R[5]+3593408605&4294967295,y=D+(I<<5&4294967295|I>>>27),I=b+(D^v&(y^D))+R[10]+38016083&4294967295,b=y+(I<<9&4294967295|I>>>23),I=v+(y^D&(b^y))+R[15]+3634488961&4294967295,v=b+(I<<14&4294967295|I>>>18),I=D+(b^y&(v^b))+R[4]+3889429448&4294967295,D=v+(I<<20&4294967295|I>>>12),I=y+(v^b&(D^v))+R[9]+568446438&4294967295,y=D+(I<<5&4294967295|I>>>27),I=b+(D^v&(y^D))+R[14]+3275163606&4294967295,b=y+(I<<9&4294967295|I>>>23),I=v+(y^D&(b^y))+R[3]+4107603335&4294967295,v=b+(I<<14&4294967295|I>>>18),I=D+(b^y&(v^b))+R[8]+1163531501&4294967295,D=v+(I<<20&4294967295|I>>>12),I=y+(v^b&(D^v))+R[13]+2850285829&4294967295,y=D+(I<<5&4294967295|I>>>27),I=b+(D^v&(y^D))+R[2]+4243563512&4294967295,b=y+(I<<9&4294967295|I>>>23),I=v+(y^D&(b^y))+R[7]+1735328473&4294967295,v=b+(I<<14&4294967295|I>>>18),I=D+(b^y&(v^b))+R[12]+2368359562&4294967295,D=v+(I<<20&4294967295|I>>>12),I=y+(D^v^b)+R[5]+4294588738&4294967295,y=D+(I<<4&4294967295|I>>>28),I=b+(y^D^v)+R[8]+2272392833&4294967295,b=y+(I<<11&4294967295|I>>>21),I=v+(b^y^D)+R[11]+1839030562&4294967295,v=b+(I<<16&4294967295|I>>>16),I=D+(v^b^y)+R[14]+4259657740&4294967295,D=v+(I<<23&4294967295|I>>>9),I=y+(D^v^b)+R[1]+2763975236&4294967295,y=D+(I<<4&4294967295|I>>>28),I=b+(y^D^v)+R[4]+1272893353&4294967295,b=y+(I<<11&4294967295|I>>>21),I=v+(b^y^D)+R[7]+4139469664&4294967295,v=b+(I<<16&4294967295|I>>>16),I=D+(v^b^y)+R[10]+3200236656&4294967295,D=v+(I<<23&4294967295|I>>>9),I=y+(D^v^b)+R[13]+681279174&4294967295,y=D+(I<<4&4294967295|I>>>28),I=b+(y^D^v)+R[0]+3936430074&4294967295,b=y+(I<<11&4294967295|I>>>21),I=v+(b^y^D)+R[3]+3572445317&4294967295,v=b+(I<<16&4294967295|I>>>16),I=D+(v^b^y)+R[6]+76029189&4294967295,D=v+(I<<23&4294967295|I>>>9),I=y+(D^v^b)+R[9]+3654602809&4294967295,y=D+(I<<4&4294967295|I>>>28),I=b+(y^D^v)+R[12]+3873151461&4294967295,b=y+(I<<11&4294967295|I>>>21),I=v+(b^y^D)+R[15]+530742520&4294967295,v=b+(I<<16&4294967295|I>>>16),I=D+(v^b^y)+R[2]+3299628645&4294967295,D=v+(I<<23&4294967295|I>>>9),I=y+(v^(D|~b))+R[0]+4096336452&4294967295,y=D+(I<<6&4294967295|I>>>26),I=b+(D^(y|~v))+R[7]+1126891415&4294967295,b=y+(I<<10&4294967295|I>>>22),I=v+(y^(b|~D))+R[14]+2878612391&4294967295,v=b+(I<<15&4294967295|I>>>17),I=D+(b^(v|~y))+R[5]+4237533241&4294967295,D=v+(I<<21&4294967295|I>>>11),I=y+(v^(D|~b))+R[12]+1700485571&4294967295,y=D+(I<<6&4294967295|I>>>26),I=b+(D^(y|~v))+R[3]+2399980690&4294967295,b=y+(I<<10&4294967295|I>>>22),I=v+(y^(b|~D))+R[10]+4293915773&4294967295,v=b+(I<<15&4294967295|I>>>17),I=D+(b^(v|~y))+R[1]+2240044497&4294967295,D=v+(I<<21&4294967295|I>>>11),I=y+(v^(D|~b))+R[8]+1873313359&4294967295,y=D+(I<<6&4294967295|I>>>26),I=b+(D^(y|~v))+R[15]+4264355552&4294967295,b=y+(I<<10&4294967295|I>>>22),I=v+(y^(b|~D))+R[6]+2734768916&4294967295,v=b+(I<<15&4294967295|I>>>17),I=D+(b^(v|~y))+R[13]+1309151649&4294967295,D=v+(I<<21&4294967295|I>>>11),I=y+(v^(D|~b))+R[4]+4149444226&4294967295,y=D+(I<<6&4294967295|I>>>26),I=b+(D^(y|~v))+R[11]+3174756917&4294967295,b=y+(I<<10&4294967295|I>>>22),I=v+(y^(b|~D))+R[2]+718787259&4294967295,v=b+(I<<15&4294967295|I>>>17),I=D+(b^(v|~y))+R[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(v+(I<<21&4294967295|I>>>11))&4294967295,A.g[2]=A.g[2]+v&4294967295,A.g[3]=A.g[3]+b&4294967295}n.prototype.v=function(A,y){y===void 0&&(y=A.length);const D=y-this.blockSize,R=this.C;let v=this.h,b=0;for(;b<y;){if(v==0)for(;b<=D;)r(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<y;)if(R[v++]=A.charCodeAt(b++),v==this.blockSize){r(this,R),v=0;break}}else for(;b<y;)if(R[v++]=A[b++],v==this.blockSize){r(this,R),v=0;break}}this.h=v,this.o+=y},n.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;y=this.o*8;for(var D=A.length-8;D<A.length;++D)A[D]=y&255,y/=256;for(this.v(A),A=Array(16),y=0,D=0;D<4;++D)for(let R=0;R<32;R+=8)A[y++]=this.g[D]>>>R&255;return A};function i(A,y){var D=a;return Object.prototype.hasOwnProperty.call(D,A)?D[A]:D[A]=y(A)}function o(A,y){this.h=y;const D=[];let R=!0;for(let v=A.length-1;v>=0;v--){const b=A[v]|0;R&&b==y||(D[v]=b,R=!1)}this.g=D}var a={};function l(A){return-128<=A&&A<128?i(A,function(y){return new o([y|0],y<0?-1:0)}):new o([A|0],A<0?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return B;if(A<0)return x(u(-A));const y=[];let D=1;for(let R=0;A>=D;R++)y[R]=A/D|0,D*=4294967296;return new o(y,0)}function h(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return x(h(A.substring(1),y));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const D=u(Math.pow(y,8));let R=B;for(let b=0;b<A.length;b+=8){var v=Math.min(8,A.length-b);const I=parseInt(A.substring(b,b+v),y);v<8?(v=u(Math.pow(y,v)),R=R.j(v).add(u(I))):(R=R.j(D),R=R.add(u(I)))}return R}var B=l(0),p=l(1),g=l(16777216);s=o.prototype,s.m=function(){if(S(this))return-x(this).m();let A=0,y=1;for(let D=0;D<this.g.length;D++){const R=this.i(D);A+=(R>=0?R:4294967296+R)*y,y*=4294967296}return A},s.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(m(this))return"0";if(S(this))return"-"+x(this).toString(A);const y=u(Math.pow(A,6));var D=this;let R="";for(;;){const v=Ue(D,y).g;D=j(D,v.j(y));let b=((D.g.length>0?D.g[0]:D.h)>>>0).toString(A);if(D=v,m(D))return b+R;for(;b.length<6;)b="0"+b;R=b+R}},s.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function m(A){if(A.h!=0)return!1;for(let y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function S(A){return A.h==-1}s.l=function(A){return A=j(this,A),S(A)?-1:m(A)?0:1};function x(A){const y=A.g.length,D=[];for(let R=0;R<y;R++)D[R]=~A.g[R];return new o(D,~A.h).add(p)}s.abs=function(){return S(this)?x(this):this},s.add=function(A){const y=Math.max(this.g.length,A.g.length),D=[];let R=0;for(let v=0;v<=y;v++){let b=R+(this.i(v)&65535)+(A.i(v)&65535),I=(b>>>16)+(this.i(v)>>>16)+(A.i(v)>>>16);R=I>>>16,b&=65535,I&=65535,D[v]=I<<16|b}return new o(D,D[D.length-1]&-2147483648?-1:0)};function j(A,y){return A.add(x(y))}s.j=function(A){if(m(this)||m(A))return B;if(S(this))return S(A)?x(this).j(x(A)):x(x(this).j(A));if(S(A))return x(this.j(x(A)));if(this.l(g)<0&&A.l(g)<0)return u(this.m()*A.m());const y=this.g.length+A.g.length,D=[];for(var R=0;R<2*y;R++)D[R]=0;for(R=0;R<this.g.length;R++)for(let v=0;v<A.g.length;v++){const b=this.i(R)>>>16,I=this.i(R)&65535,Lt=A.i(v)>>>16,Zs=A.i(v)&65535;D[2*R+2*v]+=I*Zs,Y(D,2*R+2*v),D[2*R+2*v+1]+=b*Zs,Y(D,2*R+2*v+1),D[2*R+2*v+1]+=I*Lt,Y(D,2*R+2*v+1),D[2*R+2*v+2]+=b*Lt,Y(D,2*R+2*v+2)}for(A=0;A<y;A++)D[A]=D[2*A+1]<<16|D[2*A];for(A=y;A<2*y;A++)D[A]=0;return new o(D,0)};function Y(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function ue(A,y){this.g=A,this.h=y}function Ue(A,y){if(m(y))throw Error("division by zero");if(m(A))return new ue(B,B);if(S(A))return y=Ue(x(A),y),new ue(x(y.g),x(y.h));if(S(y))return y=Ue(A,x(y)),new ue(x(y.g),y.h);if(A.g.length>30){if(S(A)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var D=p,R=y;R.l(A)<=0;)D=Je(D),R=Je(R);var v=He(D,1),b=He(R,1);for(R=He(R,2),D=He(D,2);!m(R);){var I=b.add(R);I.l(A)<=0&&(v=v.add(D),b=I),R=He(R,1),D=He(D,1)}return y=j(A,v.j(y)),new ue(v,y)}for(v=B;A.l(y)>=0;){for(D=Math.max(1,Math.floor(A.m()/y.m())),R=Math.ceil(Math.log(D)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),b=u(D),I=b.j(y);S(I)||I.l(A)>0;)D-=R,b=u(D),I=b.j(y);m(b)&&(b=p),v=v.add(b),A=j(A,I)}return new ue(v,A)}s.B=function(A){return Ue(this,A).h},s.and=function(A){const y=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<y;R++)D[R]=this.i(R)&A.i(R);return new o(D,this.h&A.h)},s.or=function(A){const y=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<y;R++)D[R]=this.i(R)|A.i(R);return new o(D,this.h|A.h)},s.xor=function(A){const y=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<y;R++)D[R]=this.i(R)^A.i(R);return new o(D,this.h^A.h)};function Je(A){const y=A.g.length+1,D=[];for(let R=0;R<y;R++)D[R]=A.i(R)<<1|A.i(R-1)>>>31;return new o(D,A.h)}function He(A,y){const D=y>>5;y%=32;const R=A.g.length-D,v=[];for(let b=0;b<R;b++)v[b]=y>0?A.i(b+D)>>>y|A.i(b+D+1)<<32-y:A.i(b+D);return new o(v,A.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,e_=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Ts=o}).apply(typeof eC<"u"?eC:typeof self<"u"?self:typeof window<"u"?window:{});var Ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var t_,To,n_,Vc,Xh,s_,r_,i_;(function(){var s,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ec=="object"&&Ec];for(var d=0;d<c.length;++d){var f=c[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function r(c,d){if(d)e:{var f=n;c=c.split(".");for(var C=0;C<c.length-1;C++){var P=c[C];if(!(P in f))break e;f=f[P]}c=c[c.length-1],C=f[c],d=d(C),d!=C&&d!=null&&e(f,c,{configurable:!0,writable:!0,value:d})}}r("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(c){return c||function(d){var f=[],C;for(C in d)Object.prototype.hasOwnProperty.call(d,C)&&f.push([C,d[C]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function l(c,d,f){return c.call.apply(c.bind,arguments)}function u(c,d,f){return u=l,u.apply(null,arguments)}function h(c,d){var f=Array.prototype.slice.call(arguments,1);return function(){var C=f.slice();return C.push.apply(C,arguments),c.apply(this,C)}}function B(c,d){function f(){}f.prototype=d.prototype,c.Z=d.prototype,c.prototype=new f,c.prototype.constructor=c,c.Ob=function(C,P,N){for(var K=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)K[ce-2]=arguments[ce];return d.prototype[P].apply(C,K)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function g(c){const d=c.length;if(d>0){const f=Array(d);for(let C=0;C<d;C++)f[C]=c[C];return f}return[]}function m(c,d){for(let C=1;C<arguments.length;C++){const P=arguments[C];var f=typeof P;if(f=f!="object"?f:P?Array.isArray(P)?"array":f:"null",f=="array"||f=="object"&&typeof P.length=="number"){f=c.length||0;const N=P.length||0;c.length=f+N;for(let K=0;K<N;K++)c[f+K]=P[K]}else c.push(P)}}class S{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function x(c){o.setTimeout(()=>{throw c},0)}function j(){var c=A;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class Y{constructor(){this.h=this.g=null}add(d,f){const C=ue.get();C.set(d,f),this.h?this.h.next=C:this.g=C,this.h=C}}var ue=new S(()=>new Ue,c=>c.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Je,He=!1,A=new Y,y=()=>{const c=Promise.resolve(void 0);Je=()=>{c.then(D)}};function D(){for(var c;c=j();){try{c.h.call(c.g)}catch(f){x(f)}var d=ue;d.j(c),d.h<100&&(d.h++,c.next=d.g,d.g=c)}He=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const f=()=>{};o.addEventListener("test",f,d),o.removeEventListener("test",f,d)}catch{}return c})();function I(c){return/^[\s\xa0]*$/.test(c)}function Lt(c,d){v.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,d)}B(Lt,v),Lt.prototype.init=function(c,d){const f=this.type=c.type,C=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget,d||(f=="mouseover"?d=c.fromElement:f=="mouseout"&&(d=c.toElement)),this.relatedTarget=d,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Lt.Z.h.call(this)},Lt.prototype.h=function(){Lt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Zs="closure_listenable_"+(Math.random()*1e6|0),VD=0;function GD(c,d,f,C,P){this.listener=c,this.proxy=null,this.src=d,this.type=f,this.capture=!!C,this.ha=P,this.key=++VD,this.da=this.fa=!1}function ic(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function oc(c,d,f){for(const C in c)d.call(f,c[C],C,c)}function UD(c,d){for(const f in c)d.call(void 0,c[f],f,c)}function Uf(c){const d={};for(const f in c)d[f]=c[f];return d}const Hf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qf(c,d){let f,C;for(let P=1;P<arguments.length;P++){C=arguments[P];for(f in C)c[f]=C[f];for(let N=0;N<Hf.length;N++)f=Hf[N],Object.prototype.hasOwnProperty.call(C,f)&&(c[f]=C[f])}}function ac(c){this.src=c,this.g={},this.h=0}ac.prototype.add=function(c,d,f,C,P){const N=c.toString();c=this.g[N],c||(c=this.g[N]=[],this.h++);const K=Uu(c,d,C,P);return K>-1?(d=c[K],f||(d.fa=!1)):(d=new GD(d,this.src,N,!!C,P),d.fa=f,c.push(d)),d};function Gu(c,d){const f=d.type;if(f in c.g){var C=c.g[f],P=Array.prototype.indexOf.call(C,d,void 0),N;(N=P>=0)&&Array.prototype.splice.call(C,P,1),N&&(ic(d),c.g[f].length==0&&(delete c.g[f],c.h--))}}function Uu(c,d,f,C){for(let P=0;P<c.length;++P){const N=c[P];if(!N.da&&N.listener==d&&N.capture==!!f&&N.ha==C)return P}return-1}var Hu="closure_lm_"+(Math.random()*1e6|0),qu={};function jf(c,d,f,C,P){if(Array.isArray(d)){for(let N=0;N<d.length;N++)jf(c,d[N],f,C,P);return null}return f=Kf(f),c&&c[Zs]?c.J(d,f,a(C)?!!C.capture:!1,P):HD(c,d,f,!1,C,P)}function HD(c,d,f,C,P,N){if(!d)throw Error("Invalid event type");const K=a(P)?!!P.capture:!!P;let ce=Ju(c);if(ce||(c[Hu]=ce=new ac(c)),f=ce.add(d,f,C,K,N),f.proxy)return f;if(C=qD(),f.proxy=C,C.src=c,C.listener=f,c.addEventListener)b||(P=K),P===void 0&&(P=!1),c.addEventListener(d.toString(),C,P);else if(c.attachEvent)c.attachEvent(Wf(d.toString()),C);else if(c.addListener&&c.removeListener)c.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return f}function qD(){function c(f){return d.call(c.src,c.listener,f)}const d=jD;return c}function Jf(c,d,f,C,P){if(Array.isArray(d))for(var N=0;N<d.length;N++)Jf(c,d[N],f,C,P);else C=a(C)?!!C.capture:!!C,f=Kf(f),c&&c[Zs]?(c=c.i,N=String(d).toString(),N in c.g&&(d=c.g[N],f=Uu(d,f,C,P),f>-1&&(ic(d[f]),Array.prototype.splice.call(d,f,1),d.length==0&&(delete c.g[N],c.h--)))):c&&(c=Ju(c))&&(d=c.g[d.toString()],c=-1,d&&(c=Uu(d,f,C,P)),(f=c>-1?d[c]:null)&&ju(f))}function ju(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[Zs])Gu(d.i,c);else{var f=c.type,C=c.proxy;d.removeEventListener?d.removeEventListener(f,C,c.capture):d.detachEvent?d.detachEvent(Wf(f),C):d.addListener&&d.removeListener&&d.removeListener(C),(f=Ju(d))?(Gu(f,c),f.h==0&&(f.src=null,d[Hu]=null)):ic(c)}}}function Wf(c){return c in qu?qu[c]:qu[c]="on"+c}function jD(c,d){if(c.da)c=!0;else{d=new Lt(d,this);const f=c.listener,C=c.ha||c.src;c.fa&&ju(c),c=f.call(C,d)}return c}function Ju(c){return c=c[Hu],c instanceof ac?c:null}var Wu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Kf(c){return typeof c=="function"?c:(c[Wu]||(c[Wu]=function(d){return c.handleEvent(d)}),c[Wu])}function Ct(){R.call(this),this.i=new ac(this),this.M=this,this.G=null}B(Ct,R),Ct.prototype[Zs]=!0,Ct.prototype.removeEventListener=function(c,d,f,C){Jf(this,c,d,f,C)};function Tt(c,d){var f,C=c.G;if(C)for(f=[];C;C=C.G)f.push(C);if(c=c.M,C=d.type||d,typeof d=="string")d=new v(d,c);else if(d instanceof v)d.target=d.target||c;else{var P=d;d=new v(C,c),qf(d,P)}P=!0;let N,K;if(f)for(K=f.length-1;K>=0;K--)N=d.g=f[K],P=cc(N,C,!0,d)&&P;if(N=d.g=c,P=cc(N,C,!0,d)&&P,P=cc(N,C,!1,d)&&P,f)for(K=0;K<f.length;K++)N=d.g=f[K],P=cc(N,C,!1,d)&&P}Ct.prototype.N=function(){if(Ct.Z.N.call(this),this.i){var c=this.i;for(const d in c.g){const f=c.g[d];for(let C=0;C<f.length;C++)ic(f[C]);delete c.g[d],c.h--}}this.G=null},Ct.prototype.J=function(c,d,f,C){return this.i.add(String(c),d,!1,f,C)},Ct.prototype.K=function(c,d,f,C){return this.i.add(String(c),d,!0,f,C)};function cc(c,d,f,C){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();let P=!0;for(let N=0;N<d.length;++N){const K=d[N];if(K&&!K.da&&K.capture==f){const ce=K.listener,rt=K.ha||K.src;K.fa&&Gu(c.i,K),P=ce.call(rt,C)!==!1&&P}}return P&&!C.defaultPrevented}function JD(c,d){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(c,d||0)}function zf(c){c.g=JD(()=>{c.g=null,c.i&&(c.i=!1,zf(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class WD extends R{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:zf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wi(c){R.call(this),this.h=c,this.g={}}B(Wi,R);var Qf=[];function $f(c){oc(c.g,function(d,f){this.g.hasOwnProperty(f)&&ju(d)},c),c.g={}}Wi.prototype.N=function(){Wi.Z.N.call(this),$f(this)},Wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ku=o.JSON.stringify,KD=o.JSON.parse,zD=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function Yf(){}function Xf(){}var Ki={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zu(){v.call(this,"d")}B(zu,v);function Qu(){v.call(this,"c")}B(Qu,v);var er={},Zf=null;function lc(){return Zf=Zf||new Ct}er.Ia="serverreachability";function ep(c){v.call(this,er.Ia,c)}B(ep,v);function zi(c){const d=lc();Tt(d,new ep(d))}er.STAT_EVENT="statevent";function tp(c,d){v.call(this,er.STAT_EVENT,c),this.stat=d}B(tp,v);function vt(c){const d=lc();Tt(d,new tp(d,c))}er.Ja="timingevent";function np(c,d){v.call(this,er.Ja,c),this.size=d}B(np,v);function Qi(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},d)}function $i(){this.g=!0}$i.prototype.ua=function(){this.g=!1};function QD(c,d,f,C,P,N){c.info(function(){if(c.g)if(N){var K="",ce=N.split("&");for(let ve=0;ve<ce.length;ve++){var rt=ce[ve].split("=");if(rt.length>1){const ot=rt[0];rt=rt[1];const mn=ot.split("_");K=mn.length>=2&&mn[1]=="type"?K+(ot+"="+rt+"&"):K+(ot+"=redacted&")}}}else K=null;else K=N;return"XMLHTTP REQ ("+C+") [attempt "+P+"]: "+d+`
`+f+`
`+K})}function $D(c,d,f,C,P,N,K){c.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+P+"]: "+d+`
`+f+`
`+N+" "+K})}function qr(c,d,f,C){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+XD(c,f)+(C?" "+C:"")})}function YD(c,d){c.info(function(){return"TIMEOUT: "+d})}$i.prototype.info=function(){};function XD(c,d){if(!c.g)return d;if(!d)return null;try{const N=JSON.parse(d);if(N){for(c=0;c<N.length;c++)if(Array.isArray(N[c])){var f=N[c];if(!(f.length<2)){var C=f[1];if(Array.isArray(C)&&!(C.length<1)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(let K=1;K<C.length;K++)C[K]=""}}}}return Ku(N)}catch{return d}}var uc={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},sp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},rp;function $u(){}B($u,Yf),$u.prototype.g=function(){return new XMLHttpRequest},rp=new $u;function Yi(c){return encodeURIComponent(String(c))}function ZD(c){var d=1;c=c.split(":");const f=[];for(;d>0&&c.length;)f.push(c.shift()),d--;return c.length&&f.push(c.join(":")),f}function hs(c,d,f,C){this.j=c,this.i=d,this.l=f,this.S=C||1,this.V=new Wi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ip}function ip(){this.i=null,this.g="",this.h=!1}var op={},Yu={};function Xu(c,d,f){c.M=1,c.A=Bc(gn(d)),c.u=f,c.R=!0,ap(c,null)}function ap(c,d){c.F=Date.now(),hc(c),c.B=gn(c.A);var f=c.B,C=c.S;Array.isArray(C)||(C=[String(C)]),Ep(f.i,"t",C),c.C=0,f=c.j.L,c.h=new ip,c.g=Mp(c.j,f?d:null,!c.u),c.P>0&&(c.O=new WD(u(c.Y,c,c.g),c.P)),d=c.V,f=c.g,C=c.ba;var P="readystatechange";Array.isArray(P)||(P&&(Qf[0]=P.toString()),P=Qf);for(let N=0;N<P.length;N++){const K=jf(f,P[N],C||d.handleEvent,!1,d.h||d);if(!K)break;d.g[K.key]=K}d=c.J?Uf(c.J):{},c.u?(c.v||(c.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,d)):(c.v="GET",c.g.ea(c.B,c.v,null,d)),zi(),QD(c.i,c.v,c.B,c.l,c.S,c.u)}hs.prototype.ba=function(c){c=c.target;const d=this.O;d&&fs(c)==3?d.j():this.Y(c)},hs.prototype.Y=function(c){try{if(c==this.g)e:{const ce=fs(this.g),rt=this.g.ya(),ve=this.g.ca();if(!(ce<3)&&(ce!=3||this.g&&(this.h.h||this.g.la()||Ap(this.g)))){this.K||ce!=4||rt==7||(rt==8||ve<=0?zi(3):zi(2)),Zu(this);var d=this.g.ca();this.X=d;var f=ew(this);if(this.o=d==200,$D(this.i,this.v,this.B,this.l,this.S,ce,d),this.o){if(this.U&&!this.L){t:{if(this.g){var C,P=this.g;if((C=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(C)){var N=C;break t}}N=null}if(c=N)qr(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,eh(this,c);else{this.o=!1,this.m=3,vt(12),tr(this),Xi(this);break e}}if(this.R){c=!0;let ot;for(;!this.K&&this.C<f.length;)if(ot=tw(this,f),ot==Yu){ce==4&&(this.m=4,vt(14),c=!1),qr(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==op){this.m=4,vt(15),qr(this.i,this.l,f,"[Invalid Chunk]"),c=!1;break}else qr(this.i,this.l,ot,null),eh(this,ot);if(cp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ce!=4||f.length!=0||this.h.h||(this.m=1,vt(16),c=!1),this.o=this.o&&c,!c)qr(this.i,this.l,f,"[Invalid Chunked Response]"),tr(this),Xi(this);else if(f.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),ch(K),K.P=!0,vt(11))}}else qr(this.i,this.l,f,null),eh(this,f);ce==4&&tr(this),this.o&&!this.K&&(ce==4?Lp(this.j,this):(this.o=!1,hc(this)))}else pw(this.g),d==400&&f.indexOf("Unknown SID")>0?(this.m=3,vt(12)):(this.m=0,vt(13)),tr(this),Xi(this)}}}catch{}finally{}};function ew(c){if(!cp(c))return c.g.la();const d=Ap(c.g);if(d==="")return"";let f="";const C=d.length,P=fs(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return tr(c),Xi(c),"";c.h.i=new o.TextDecoder}for(let N=0;N<C;N++)c.h.h=!0,f+=c.h.i.decode(d[N],{stream:!(P&&N==C-1)});return d.length=0,c.h.g+=f,c.C=0,c.h.g}function cp(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function tw(c,d){var f=c.C,C=d.indexOf(`
`,f);return C==-1?Yu:(f=Number(d.substring(f,C)),isNaN(f)?op:(C+=1,C+f>d.length?Yu:(d=d.slice(C,C+f),c.C=C+f,d)))}hs.prototype.cancel=function(){this.K=!0,tr(this)};function hc(c){c.T=Date.now()+c.H,lp(c,c.H)}function lp(c,d){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Qi(u(c.aa,c),d)}function Zu(c){c.D&&(o.clearTimeout(c.D),c.D=null)}hs.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(YD(this.i,this.B),this.M!=2&&(zi(),vt(17)),tr(this),this.m=2,Xi(this)):lp(this,this.T-c)};function Xi(c){c.j.I==0||c.K||Lp(c.j,c)}function tr(c){Zu(c);var d=c.O;d&&typeof d.dispose=="function"&&d.dispose(),c.O=null,$f(c.V),c.g&&(d=c.g,c.g=null,d.abort(),d.dispose())}function eh(c,d){try{var f=c.j;if(f.I!=0&&(f.g==c||th(f.h,c))){if(!c.L&&th(f.h,c)&&f.I==3){try{var C=f.Ba.g.parse(d)}catch{C=null}if(Array.isArray(C)&&C.length==3){var P=C;if(P[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<c.F)gc(f),pc(f);else break e;ah(f),vt(18)}}else f.xa=P[1],0<f.xa-f.K&&P[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Qi(u(f.Va,f),6e3));Bp(f.h)<=1&&f.ta&&(f.ta=void 0)}else sr(f,11)}else if((c.L||f.g==c)&&gc(f),!I(d))for(P=f.Ba.g.parse(d),d=0;d<P.length;d++){let ve=P[d];const ot=ve[0];if(!(ot<=f.K))if(f.K=ot,ve=ve[1],f.I==2)if(ve[0]=="c"){f.M=ve[1],f.ba=ve[2];const mn=ve[3];mn!=null&&(f.ka=mn,f.j.info("VER="+f.ka));const rr=ve[4];rr!=null&&(f.za=rr,f.j.info("SVER="+f.za));const ps=ve[5];ps!=null&&typeof ps=="number"&&ps>0&&(C=1.5*ps,f.O=C,f.j.info("backChannelRequestTimeoutMs_="+C)),C=f;const Cs=c.g;if(Cs){const _c=Cs.g?Cs.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_c){var N=C.h;N.g||_c.indexOf("spdy")==-1&&_c.indexOf("quic")==-1&&_c.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(nh(N,N.h),N.h=null))}if(C.G){const lh=Cs.g?Cs.g.getResponseHeader("X-HTTP-Session-Id"):null;lh&&(C.wa=lh,Pe(C.J,C.G,lh))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-c.F,f.j.info("Handshake RTT: "+f.T+"ms")),C=f;var K=c;if(C.na=xp(C,C.L?C.ba:null,C.W),K.L){dp(C.h,K);var ce=K,rt=C.O;rt&&(ce.H=rt),ce.D&&(Zu(ce),hc(ce)),C.g=K}else Np(C);f.i.length>0&&Cc(f)}else ve[0]!="stop"&&ve[0]!="close"||sr(f,7);else f.I==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?sr(f,7):oh(f):ve[0]!="noop"&&f.l&&f.l.qa(ve),f.A=0)}}zi(4)}catch{}}var nw=class{constructor(c,d){this.g=c,this.map=d}};function up(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function hp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Bp(c){return c.h?1:c.g?c.g.size:0}function th(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function nh(c,d){c.g?c.g.add(d):c.h=d}function dp(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}up.prototype.cancel=function(){if(this.i=fp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function fp(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const f of c.g.values())d=d.concat(f.G);return d}return g(c.i)}var pp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sw(c,d){if(c){c=c.split("&");for(let f=0;f<c.length;f++){const C=c[f].indexOf("=");let P,N=null;C>=0?(P=c[f].substring(0,C),N=c[f].substring(C+1)):P=c[f],d(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Bs(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;c instanceof Bs?(this.l=c.l,Zi(this,c.j),this.o=c.o,this.g=c.g,eo(this,c.u),this.h=c.h,sh(this,yp(c.i)),this.m=c.m):c&&(d=String(c).match(pp))?(this.l=!1,Zi(this,d[1]||"",!0),this.o=to(d[2]||""),this.g=to(d[3]||"",!0),eo(this,d[4]),this.h=to(d[5]||"",!0),sh(this,d[6]||"",!0),this.m=to(d[7]||"")):(this.l=!1,this.i=new so(null,this.l))}Bs.prototype.toString=function(){const c=[];var d=this.j;d&&c.push(no(d,Cp,!0),":");var f=this.g;return(f||d=="file")&&(c.push("//"),(d=this.o)&&c.push(no(d,Cp,!0),"@"),c.push(Yi(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&c.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&c.push("/"),c.push(no(f,f.charAt(0)=="/"?ow:iw,!0))),(f=this.i.toString())&&c.push("?",f),(f=this.m)&&c.push("#",no(f,cw)),c.join("")},Bs.prototype.resolve=function(c){const d=gn(this);let f=!!c.j;f?Zi(d,c.j):f=!!c.o,f?d.o=c.o:f=!!c.g,f?d.g=c.g:f=c.u!=null;var C=c.h;if(f)eo(d,c.u);else if(f=!!c.h){if(C.charAt(0)!="/")if(this.g&&!this.h)C="/"+C;else{var P=d.h.lastIndexOf("/");P!=-1&&(C=d.h.slice(0,P+1)+C)}if(P=C,P==".."||P==".")C="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){C=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let K=0;K<P.length;){const ce=P[K++];ce=="."?C&&K==P.length&&N.push(""):ce==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),C&&K==P.length&&N.push("")):(N.push(ce),C=!0)}C=N.join("/")}else C=P}return f?d.h=C:f=c.i.toString()!=="",f?sh(d,yp(c.i)):f=!!c.m,f&&(d.m=c.m),d};function gn(c){return new Bs(c)}function Zi(c,d,f){c.j=f?to(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function eo(c,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);c.u=d}else c.u=null}function sh(c,d,f){d instanceof so?(c.i=d,lw(c.i,c.l)):(f||(d=no(d,aw)),c.i=new so(d,c.l))}function Pe(c,d,f){c.i.set(d,f)}function Bc(c){return Pe(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function to(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function no(c,d,f){return typeof c=="string"?(c=encodeURI(c).replace(d,rw),f&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function rw(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Cp=/[#\/\?@]/g,iw=/[#\?:]/g,ow=/[#\?]/g,aw=/[#\?@]/g,cw=/#/g;function so(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function nr(c){c.g||(c.g=new Map,c.h=0,c.i&&sw(c.i,function(d,f){c.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}s=so.prototype,s.add=function(c,d){nr(this),this.i=null,c=jr(this,c);let f=this.g.get(c);return f||this.g.set(c,f=[]),f.push(d),this.h+=1,this};function gp(c,d){nr(c),d=jr(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function mp(c,d){return nr(c),d=jr(c,d),c.g.has(d)}s.forEach=function(c,d){nr(this),this.g.forEach(function(f,C){f.forEach(function(P){c.call(d,P,C,this)},this)},this)};function _p(c,d){nr(c);let f=[];if(typeof d=="string")mp(c,d)&&(f=f.concat(c.g.get(jr(c,d))));else for(c=Array.from(c.g.values()),d=0;d<c.length;d++)f=f.concat(c[d]);return f}s.set=function(c,d){return nr(this),this.i=null,c=jr(this,c),mp(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},s.get=function(c,d){return c?(c=_p(this,c),c.length>0?String(c[0]):d):d};function Ep(c,d,f){gp(c,d),f.length>0&&(c.i=null,c.g.set(jr(c,d),g(f)),c.h+=f.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(let C=0;C<d.length;C++){var f=d[C];const P=Yi(f);f=_p(this,f);for(let N=0;N<f.length;N++){let K=P;f[N]!==""&&(K+="="+Yi(f[N])),c.push(K)}}return this.i=c.join("&")};function yp(c){const d=new so;return d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),d}function jr(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function lw(c,d){d&&!c.j&&(nr(c),c.i=null,c.g.forEach(function(f,C){const P=C.toLowerCase();C!=P&&(gp(this,C),Ep(this,P,f))},c)),c.j=d}function uw(c,d){const f=new $i;if(o.Image){const C=new Image;C.onload=h(ds,f,"TestLoadImage: loaded",!0,d,C),C.onerror=h(ds,f,"TestLoadImage: error",!1,d,C),C.onabort=h(ds,f,"TestLoadImage: abort",!1,d,C),C.ontimeout=h(ds,f,"TestLoadImage: timeout",!1,d,C),o.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=c}else d(!1)}function hw(c,d){const f=new $i,C=new AbortController,P=setTimeout(()=>{C.abort(),ds(f,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:C.signal}).then(N=>{clearTimeout(P),N.ok?ds(f,"TestPingServer: ok",!0,d):ds(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(P),ds(f,"TestPingServer: error",!1,d)})}function ds(c,d,f,C,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),C(f)}catch{}}function Bw(){this.g=new zD}function rh(c){this.i=c.Sb||null,this.h=c.ab||!1}B(rh,Yf),rh.prototype.g=function(){return new dc(this.i,this.h)};function dc(c,d){Ct.call(this),this.H=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}B(dc,Ct),s=dc.prototype,s.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=d,this.readyState=1,io(this)},s.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(d.body=c),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ro(this)),this.readyState=0},s.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ip(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ip(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}s.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?ro(this):io(this),this.readyState==3&&Ip(this)}},s.Oa=function(c){this.g&&(this.response=this.responseText=c,ro(this))},s.Na=function(c){this.g&&(this.response=c,ro(this))},s.ga=function(){this.g&&ro(this)};function ro(c){c.readyState=4,c.l=null,c.j=null,c.B=null,io(c)}s.setRequestHeader=function(c,d){this.A.append(c,d)},s.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,c.push(f[0]+": "+f[1]),f=d.next();return c.join(`\r
`)};function io(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(dc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Dp(c){let d="";return oc(c,function(f,C){d+=C,d+=":",d+=f,d+=`\r
`}),d}function ih(c,d,f){e:{for(C in f){var C=!1;break e}C=!0}C||(f=Dp(f),typeof c=="string"?f!=null&&Yi(f):Pe(c,d,f))}function qe(c){Ct.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}B(qe,Ct);var dw=/^https?$/i,fw=["POST","PUT"];s=qe.prototype,s.Fa=function(c){this.H=c},s.ea=function(c,d,f,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():rp.g(),this.g.onreadystatechange=p(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(N){wp(this,N);return}if(c=f||"",f=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var P in C)f.set(P,C[P]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const N of C.keys())f.set(N,C.get(N));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),P=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(fw,d,void 0)>=0)||C||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,K]of f)this.g.setRequestHeader(N,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(N){wp(this,N)}};function wp(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.o=5,Tp(c),fc(c)}function Tp(c){c.A||(c.A=!0,Tt(c,"complete"),Tt(c,"error"))}s.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Tt(this,"complete"),Tt(this,"abort"),fc(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fc(this,!0)),qe.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?vp(this):this.Xa())},s.Xa=function(){vp(this)};function vp(c){if(c.h&&typeof i<"u"){if(c.v&&fs(c)==4)setTimeout(c.Ca.bind(c),0);else if(Tt(c,"readystatechange"),fs(c)==4){c.h=!1;try{const N=c.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var C;if(C=N===0){let K=String(c.D).match(pp)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),C=!dw.test(K?K.toLowerCase():"")}f=C}if(f)Tt(c,"complete"),Tt(c,"success");else{c.o=6;try{var P=fs(c)>2?c.g.statusText:""}catch{P=""}c.l=P+" ["+c.ca()+"]",Tp(c)}}finally{fc(c)}}}}function fc(c,d){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const f=c.g;c.g=null,d||Tt(c,"ready");try{f.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function fs(c){return c.g?c.g.readyState:0}s.ca=function(){try{return fs(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),KD(d)}};function Ap(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function pw(c){const d={};c=(c.g&&fs(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<c.length;C++){if(I(c[C]))continue;var f=ZD(c[C]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=d[P]||[];d[P]=N,N.push(f)}UD(d,function(C){return C.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function oo(c,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[c]||d}function Rp(c){this.za=0,this.i=[],this.j=new $i,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=oo("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=oo("baseRetryDelayMs",5e3,c),this.Za=oo("retryDelaySeedMs",1e4,c),this.Ta=oo("forwardChannelMaxRetries",2,c),this.va=oo("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new up(c&&c.concurrentRequestLimit),this.Ba=new Bw,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Rp.prototype,s.ka=8,s.I=1,s.connect=function(c,d,f,C){vt(0),this.W=c,this.H=d||{},f&&C!==void 0&&(this.H.OSID=f,this.H.OAID=C),this.F=this.X,this.J=xp(this,null,this.W),Cc(this)};function oh(c){if(Sp(c),c.I==3){var d=c.V++,f=gn(c.J);if(Pe(f,"SID",c.M),Pe(f,"RID",d),Pe(f,"TYPE","terminate"),ao(c,f),d=new hs(c,c.j,d),d.M=2,d.A=Bc(gn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=d.A,f=!0),f||(d.g=Mp(d.j,null),d.g.ea(d.A)),d.F=Date.now(),hc(d)}kp(c)}function pc(c){c.g&&(ch(c),c.g.cancel(),c.g=null)}function Sp(c){pc(c),c.v&&(o.clearTimeout(c.v),c.v=null),gc(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function Cc(c){if(!hp(c.h)&&!c.m){c.m=!0;var d=c.Ea;Je||y(),He||(Je(),He=!0),A.add(d,c),c.D=0}}function Cw(c,d){return Bp(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=d.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Qi(u(c.Ea,c,d),Fp(c,c.D)),c.D++,!0)}s.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const P=new hs(this,this.j,c);let N=this.o;if(this.U&&(N?(N=Uf(N),qf(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var C=this.i[f];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(d+=C,d>4096){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=bp(this,P,d),f=gn(this.J),Pe(f,"RID",c),Pe(f,"CVER",22),this.G&&Pe(f,"X-HTTP-Session-Id",this.G),ao(this,f),N&&(this.R?d="headers="+Yi(Dp(N))+"&"+d:this.u&&ih(f,this.u,N)),nh(this.h,P),this.Ra&&Pe(f,"TYPE","init"),this.S?(Pe(f,"$req",d),Pe(f,"SID","null"),P.U=!0,Xu(P,f,null)):Xu(P,f,d),this.I=2}}else this.I==3&&(c?Pp(this,c):this.i.length==0||hp(this.h)||Pp(this))};function Pp(c,d){var f;d?f=d.l:f=c.V++;const C=gn(c.J);Pe(C,"SID",c.M),Pe(C,"RID",f),Pe(C,"AID",c.K),ao(c,C),c.u&&c.o&&ih(C,c.u,c.o),f=new hs(c,c.j,f,c.D+1),c.u===null&&(f.J=c.o),d&&(c.i=d.G.concat(c.i)),d=bp(c,f,1e3),f.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),nh(c.h,f),Xu(f,C,d)}function ao(c,d){c.H&&oc(c.H,function(f,C){Pe(d,C,f)}),c.l&&oc({},function(f,C){Pe(d,C,f)})}function bp(c,d,f){f=Math.min(c.i.length,f);const C=c.l?u(c.l.Ka,c.l,c):null;e:{var P=c.i;let ce=-1;for(;;){const rt=["count="+f];ce==-1?f>0?(ce=P[0].g,rt.push("ofs="+ce)):ce=0:rt.push("ofs="+ce);let ve=!0;for(let ot=0;ot<f;ot++){var N=P[ot].g;const mn=P[ot].map;if(N-=ce,N<0)ce=Math.max(0,P[ot].g-100),ve=!1;else try{N="req"+N+"_"||"";try{var K=mn instanceof Map?mn:Object.entries(mn);for(const[rr,ps]of K){let Cs=ps;a(ps)&&(Cs=Ku(ps)),rt.push(N+rr+"="+encodeURIComponent(Cs))}}catch(rr){throw rt.push(N+"type="+encodeURIComponent("_badmap")),rr}}catch{C&&C(mn)}}if(ve){K=rt.join("&");break e}}K=void 0}return c=c.i.splice(0,f),d.G=c,K}function Np(c){if(!c.g&&!c.v){c.Y=1;var d=c.Da;Je||y(),He||(Je(),He=!0),A.add(d,c),c.A=0}}function ah(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Qi(u(c.Da,c),Fp(c,c.A)),c.A++,!0)}s.Da=function(){if(this.v=null,Op(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Qi(u(this.Wa,this),c)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,vt(10),pc(this),Op(this))};function ch(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function Op(c){c.g=new hs(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var d=gn(c.na);Pe(d,"RID","rpc"),Pe(d,"SID",c.M),Pe(d,"AID",c.K),Pe(d,"CI",c.F?"0":"1"),!c.F&&c.ia&&Pe(d,"TO",c.ia),Pe(d,"TYPE","xmlhttp"),ao(c,d),c.u&&c.o&&ih(d,c.u,c.o),c.O&&(c.g.H=c.O);var f=c.g;c=c.ba,f.M=1,f.A=Bc(gn(d)),f.u=null,f.R=!0,ap(f,c)}s.Va=function(){this.C!=null&&(this.C=null,pc(this),ah(this),vt(19))};function gc(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Lp(c,d){var f=null;if(c.g==d){gc(c),ch(c),c.g=null;var C=2}else if(th(c.h,d))f=d.G,dp(c.h,d),C=1;else return;if(c.I!=0){if(d.o)if(C==1){f=d.u?d.u.length:0,d=Date.now()-d.F;var P=c.D;C=lc(),Tt(C,new np(C,f)),Cc(c)}else Np(c);else if(P=d.m,P==3||P==0&&d.X>0||!(C==1&&Cw(c,d)||C==2&&ah(c)))switch(f&&f.length>0&&(d=c.h,d.i=d.i.concat(f)),P){case 1:sr(c,5);break;case 4:sr(c,10);break;case 3:sr(c,6);break;default:sr(c,2)}}}function Fp(c,d){let f=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(f*=2),f*d}function sr(c,d){if(c.j.info("Error code "+d),d==2){var f=u(c.bb,c),C=c.Ua;const P=!C;C=new Bs(C||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Zi(C,"https"),Bc(C),P?uw(C.toString(),f):hw(C.toString(),f)}else vt(2);c.I=0,c.l&&c.l.pa(d),kp(c),Sp(c)}s.bb=function(c){c?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function kp(c){if(c.I=0,c.ja=[],c.l){const d=fp(c.h);(d.length!=0||c.i.length!=0)&&(m(c.ja,d),m(c.ja,c.i),c.h.i.length=0,g(c.i),c.i.length=0),c.l.oa()}}function xp(c,d,f){var C=f instanceof Bs?gn(f):new Bs(f);if(C.g!="")d&&(C.g=d+"."+C.g),eo(C,C.u);else{var P=o.location;C=P.protocol,d=d?d+"."+P.hostname:P.hostname,P=+P.port;const N=new Bs(null);C&&Zi(N,C),d&&(N.g=d),P&&eo(N,P),f&&(N.h=f),C=N}return f=c.G,d=c.wa,f&&d&&Pe(C,f,d),Pe(C,"VER",c.ka),ao(c,C),C}function Mp(c,d,f){if(d&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Aa&&!c.ma?new qe(new rh({ab:f})):new qe(c.ma),d.Fa(c.L),d}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vp(){}s=Vp.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function mc(){}mc.prototype.g=function(c,d){return new Wt(c,d)};function Wt(c,d){Ct.call(this),this.g=new Rp(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(c?c["X-WebChannel-Client-Profile"]=d.sa:c={"X-WebChannel-Client-Profile":d.sa}),this.g.U=c,(c=d&&d.Qb)&&!I(c)&&(this.g.u=c),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!I(d)&&(this.g.G=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new Jr(this)}B(Wt,Ct),Wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){oh(this.g)},Wt.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var f={};f.__data__=c,c=f}else this.v&&(f={},f.__data__=Ku(c),c=f);d.i.push(new nw(d.Ya++,c)),d.I==3&&Cc(d)},Wt.prototype.N=function(){this.g.l=null,delete this.j,oh(this.g),delete this.g,Wt.Z.N.call(this)};function Gp(c){zu.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const f in d){c=f;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}B(Gp,zu);function Up(){Qu.call(this),this.status=1}B(Up,Qu);function Jr(c){this.g=c}B(Jr,Vp),Jr.prototype.ra=function(){Tt(this.g,"a")},Jr.prototype.qa=function(c){Tt(this.g,new Gp(c))},Jr.prototype.pa=function(c){Tt(this.g,new Up)},Jr.prototype.oa=function(){Tt(this.g,"b")},mc.prototype.createWebChannel=mc.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,i_=function(){return new mc},r_=function(){return lc()},s_=er,Xh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},uc.NO_ERROR=0,uc.TIMEOUT=8,uc.HTTP_ERROR=6,Vc=uc,sp.COMPLETE="complete",n_=sp,Xf.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",Ct.prototype.listen=Ct.prototype.J,To=Xf,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,t_=qe}).apply(typeof Ec<"u"?Ec:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.9.1
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository [object Object]
* @license MIT
*/var Ae,G=(Ae=class{},V(Ae,"FOLD_CASE",1),V(Ae,"LITERAL",2),V(Ae,"CLASS_NL",4),V(Ae,"DOT_NL",8),V(Ae,"ONE_LINE",16),V(Ae,"NON_GREEDY",32),V(Ae,"PERL_X",64),V(Ae,"UNICODE_GROUPS",128),V(Ae,"WAS_DOLLAR",256),V(Ae,"LOOKBEHIND",512),V(Ae,"MATCH_NL",Ae.CLASS_NL|Ae.DOT_NL),V(Ae,"PERL",Ae.CLASS_NL|Ae.ONE_LINE|Ae.PERL_X|Ae.UNICODE_GROUPS),V(Ae,"POSIX",0),V(Ae,"UNANCHORED",0),V(Ae,"ANCHOR_START",1),V(Ae,"ANCHOR_BOTH",2),Ae);const Wr={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Xo=128,Zh=new Int32Array(Xo),eB=new Int32Array(Xo),yc=65535;for(let s=0;s<Xo;s++)s>=97&&s<=122?Zh[s]=s-32:Zh[s]=s,s>=65&&s<=90?eB[s]=s+32:eB[s]=s;var Wh,F=(Wh=class{static toUpperCase(s){if(s<Xo)return Zh[s];const e=String.fromCodePoint(s).toUpperCase(),t=e.codePointAt(0)>yc?2:1;if(e.length>t)return s;const n=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),r=n.codePointAt(0)>yc?2:1;return n.length>r||n.codePointAt(0)!==s?s:e.codePointAt(0)}static toLowerCase(s){if(s<Xo)return eB[s];const e=String.fromCodePoint(s).toLowerCase(),t=e.codePointAt(0)>yc?2:1;if(e.length>t)return s;const n=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),r=n.codePointAt(0)>yc?2:1;return n.length>r||n.codePointAt(0)!==s?s:e.codePointAt(0)}},V(Wh,"CODES",Object.freeze({"\x07":7,"\b":8,"	":9,"\n":10,"\v":11,"\f":12,"\r":13," ":32,'"':34,$:36,"&":38,"'":39,"(":40,")":41,"*":42,"+":43,"-":45,".":46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,":":58,"<":60,">":62,"?":63,A:65,B:66,C:67,F:70,P:80,Q:81,U:85,Z:90,"[":91,"\\":92,"]":93,"^":94,_:95,"`":96,a:97,b:98,f:102,i:105,m:109,n:110,r:114,s:115,t:116,v:118,x:120,z:122,"{":123,"|":124,"}":125})),Wh),_=class{constructor(s,e=!1){this.data=s,this.isStride1=e,this.SIZE=e?2:3}getLo(s){return this.data[s*this.SIZE]}getHi(s){return this.data[s*this.SIZE+1]}getStride(s){return this.isStride1?1:this.data[s*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const av="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-",o_=new Uint8Array(256);for(let s=0;s<64;s++)o_[av.charCodeAt(s)]=s;const a_=s=>{const e=[];let t=0,n=0;for(let r=0;r<s.length;r++){const i=o_[s.charCodeAt(r)];t|=(i&31)<<n,(i&32)===0?(e.push(t),t=0,n=0):n+=5}return e},E=(s,e)=>{const t=a_(s),n=e?t.length/2:t.length/3,r=new Uint32Array(n*3);let i=0,o=0;for(let a=0;a<n;a++)i+=t[o++],r[a*3]=i,i+=t[o++],r[a*3+1]=i,r[a*3+2]=e?1:t[o++];return r},cv=s=>{const e=a_(s),t=new Map;let n=0;for(let r=0;r<e.length;r+=2){n+=e[r];const i=e[r+1],o=i>>>1^-(i&1);t.set(n,n+o)}return t};var Ic=class{constructor(s){this.initializer=s,this.cache=new Map}has(s){return s in this.initializer}get(s){if(this.cache.has(s))return this.cache.get(s);const e=this.initializer[s],t=e?e():null;return this.cache.set(s,t),t}},_s,zt=(_s=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=cv("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new _(E("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}},V(_s,"_CASE_ORBIT",null),V(_s,"_Print",null),V(_s,"CATEGORIES",new Ic({C:()=>new _(E("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new _(E("AfgDgB",!0)),Cf:()=>new _(E("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new _(E("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new _(E("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new _(E("gg2B--B",!0)),L:()=>new _(E("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new _(E("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new _(E("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new _(E("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new _(E("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new _(E("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new _(E("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new _(E("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new _(E("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new _(E("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new _(E("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new _(E("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new _(E("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new _(E("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new _(E("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new _(E("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new _(E("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new _(E("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new _(E("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new _(E("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new _(E("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new _(E("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new _(E("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new _(E("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new _(E("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new _(E("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new _(E("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new _(E("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new _(E("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new _(E("ohIA",!0)),Zp:()=>new _(E("phIA",!0)),Zs:()=>new _(E("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new _(E("wBJIFbF",!0)),Alphabetic:()=>new _(E("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new _(E("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new _(E("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new _(E("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new _(E("7-8DE",!0)),Emoji_Modifier_Base:()=>new _(E("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new _(E("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new _(E("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new _(E("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new _(E("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new _(E("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new _(E("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new _(E("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new _(E("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new _(E("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),V(_s,"SCRIPTS",new Ic({Adlam:()=>new _(E("go6DrCFJFB",!0)),Ahom:()=>new _(E("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new _(E("ggxCmS",!0)),Arabic:()=>new _(E("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new _(E("xpBlBDxBDCks9BE",!0)),Avestan:()=>new _(E("g4iC1BEG",!0)),Balinese:()=>new _(E("g4GsCCxB",!0)),Bamum:()=>new _(E("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new _(E("w26CdDF",!0)),Batak:()=>new _(E("g+GzBJD",!0)),Bengali:()=>new _(E("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new _(E("g17CYDY",!0)),Bhaiksuki:()=>new _(E("ggnCICsBCNLc",!0)),Bopomofo:()=>new _(E("qXB6wLqBxDf",!0)),Brahmi:()=>new _(E("ggkCtCFjBKA",!0)),Braille:()=>new _(E("ggK-H",!0)),Buginese:()=>new _(E("gwGbDB",!0)),Buhid:()=>new _(E("g6FT",!0)),Canadian_Aboriginal:()=>new _(E("ggF-TxRlC7tgCP",!0)),Carian:()=>new _(E("g1gCwB",!0)),Caucasian_Albanian:()=>new _(E("wphCzBMA",!0)),Chakma:()=>new _(E("gokC0BCR",!0)),Cham:()=>new _(E("gwqB2BKNDJDD",!0)),Cherokee:()=>new _(E("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new _(E("w9jCb",!0)),Common:()=>new _(E("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new _(E("ifNxkKzDGG",!0)),Cuneiform:()=>new _(E("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new _(E("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new _(E("w8rCiD",!0)),Cyrillic:()=>new _(E("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new _(E("gghCvC",!0)),Devanagari:()=>new _(E("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new _(E("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new _(E("ggmC7B",!0)),Duployan:()=>new _(E("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new _(E("ggsC1iBL68D",!0)),Elbasan:()=>new _(E("gohCnB",!0)),Elymaic:()=>new _(E("g-jCW",!0)),Ethiopic:()=>new _(E("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new _(E("gqjClBEcJB",!0)),Georgian:()=>new _(E("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new _(E("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new _(E("w5gCa",!0)),Grantha:()=>new _(E("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new _(E("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new _(E("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new _(E("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new _(E("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new _(E("go4C5B",!0)),Han:()=>new _(E("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new _(E("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new _(E("gojCnBJJ",!0)),Hanunoo:()=>new _(E("g5FU",!0)),Hatran:()=>new _(E("gniCSCBGE",!0)),Hebrew:()=>new _(E("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new _(E("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new _(E("giiCVCI",!0)),Inherited:()=>new _(E("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new _(E("g7iCSGH",!0)),Inscriptional_Parthian:()=>new _(E("g6iCVDH",!0)),Javanese:()=>new _(E("gsqBtCDJFB",!0)),Kaithi:()=>new _(E("gkkCiCLA",!0)),Kannada:()=>new _(E("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new _(E("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new _(E("g4nCQCoBEc",!0)),Kayah_Li:()=>new _(E("goqBtBCA",!0)),Kharoshthi:()=>new _(E("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new _(E("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new _(E("g8F9CDJHJnPf",!0)),Khojki:()=>new _(E("gwkCRCuB",!0)),Khudawadi:()=>new _(E("w1kC6BGJ",!0)),Kirat_Rai:()=>new _(E("gq7C5B",!0)),Lao:()=>new _(E("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new _(E("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new _(E("ggH3BEOEC",!0)),Limbu:()=>new _(E("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new _(E("gwhC2JKVLH",!0)),Linear_B:()=>new _(E("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new _(E("wmpBvBx1eA",!0)),Lycian:()=>new _(E("g0gCc",!0)),Lydian:()=>new _(E("gpiCZGA",!0)),Mahajani:()=>new _(E("wqkCmB",!0)),Makasar:()=>new _(E("g3nCY",!0)),Malayalam:()=>new _(E("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new _(E("giCbDA",!0)),Manichaean:()=>new _(E("g2iCmBFL",!0)),Marchen:()=>new _(E("wjnCfDVCN",!0)),Masaram_Gondi:()=>new _(E("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new _(E("gy7C6C",!0)),Meetei_Mayek:()=>new _(E("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new _(E("gg6DkGDP",!0)),Meroitic_Cursive:()=>new _(E("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new _(E("gsiCf",!0)),Miao:()=>new _(E("g47CqCF4BIQ",!0)),Modi:()=>new _(E("gwlCkCMJ",!0)),Mongolian:()=>new _(E("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new _(E("gy6CeCJFB",!0)),Multani:()=>new _(E("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new _(E("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new _(E("gkiCeJI",!0)),Nag_Mundari:()=>new _(E("wm5DpB",!0)),Nandinagari:()=>new _(E("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new _(E("gsGrBFZHKEB",!0)),Newa:()=>new _(E("gglC7CCE",!0)),Nko:()=>new _(E("g+B6BDC",!0)),Nushu:()=>new _(E("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new _(E("go4DsBENDJFB",!0)),Ogham:()=>new _(E("g0Fc",!0)),Ol_Chiki:()=>new _(E("wiHvB",!0)),Ol_Onal:()=>new _(E("wu5DqBFA",!0)),Old_Hungarian:()=>new _(E("gkjCyBOyBIF",!0)),Old_Italic:()=>new _(E("g4gCjBKC",!0)),Old_North_Arabian:()=>new _(E("g0iCf",!0)),Old_Permic:()=>new _(E("w6gCqB",!0)),Old_Persian:()=>new _(E("g9gCjBFN",!0)),Old_Sogdian:()=>new _(E("g4jCnB",!0)),Old_South_Arabian:()=>new _(E("gziCf",!0)),Old_Turkic:()=>new _(E("ggjCoC",!0)),Old_Uyghur:()=>new _(E("w7jCZ",!0)),Oriya:()=>new _(E("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new _(E("wlhCjBFjB",!0)),Osmanya:()=>new _(E("gkhCdDJ",!0)),Pahawh_Hmong:()=>new _(E("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new _(E("gjiCf",!0)),Pau_Cin_Hau:()=>new _(E("g2mC4B",!0)),Phags_Pa:()=>new _(E("giqB3B",!0)),Phoenician:()=>new _(E("goiCbEA",!0)),Psalter_Pahlavi:()=>new _(E("g8iCRIDNG",!0)),Rejang:()=>new _(E("wpqBjBMA",!0)),Runic:()=>new _(E("g1FqCEK",!0)),Samaritan:()=>new _(E("ggCtBDO",!0)),Saurashtra:()=>new _(E("gkqBlCJL",!0)),Sharada:()=>new _(E("gskC-ChsCH",!0)),Shavian:()=>new _(E("wihCvB",!0)),Siddham:()=>new _(E("gslC1BDlB",!0)),Sidetic:()=>new _(E("gqiCZ",!0)),SignWriting:()=>new _(E("gg2DrUQECO",!0)),Sinhala:()=>new _(E("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new _(E("w5jCpB",!0)),Sora_Sompeng:()=>new _(E("wmkCYIJ",!0)),Soyombo:()=>new _(E("wymCyC",!0)),Sundanese:()=>new _(E("g8G-BhIH",!0)),Sunuwar:()=>new _(E("g+mChBPJ",!0)),Syloti_Nagri:()=>new _(E("ggqBsB",!0)),Syriac:()=>new _(E("g4BNC7BDCxIK",!0)),Tagalog:()=>new _(E("g4FVKA",!0)),Tagbanwa:()=>new _(E("g7FMCCCB",!0)),Tai_Le:()=>new _(E("wqGdDE",!0)),Tai_Tham:()=>new _(E("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new _(E("g0qBiCZE",!0)),Tai_Yo:()=>new _(E("g25DeCVJB",!0)),Takri:()=>new _(E("g0lC5BHJ",!0)),Tamil:()=>new _(E("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new _(E("wz6CuCCJ",!0)),Tangut:()=>new _(E("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new _(E("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new _(E("g8BxB",!0)),Thai:()=>new _(E("hwD5BGb",!0)),Tibetan:()=>new _(E("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new _(E("wpL3BIBPA",!0)),Tirhuta:()=>new _(E("gklCnCJJ",!0)),Todhri:()=>new _(E("guhCzB",!0)),Tolong_Siki:()=>new _(E("wtnCrBFJ",!0)),Toto:()=>new _(E("w04De",!0)),Tulu_Tigalari:()=>new _(E("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new _(E("g8gCdCA",!0)),Unknown:()=>new _(E("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new _(E("gopBrJ",!0)),Vithkuqi:()=>new _(E("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new _(E("g24D5BGA",!0)),Warang_Citi:()=>new _(E("glmCyCNA",!0)),Yezidi:()=>new _(E("g0jCpBCCDB",!0)),Yi:()=>new _(E("ggoBskBE2B",!0)),Zanabazar_Square:()=>new _(E("gwmCnC",!0))})),V(_s,"FOLD_CATEGORIES",new Ic({L:()=>new _(E("laA",!0)),LC:()=>new _(E("laA",!0)),Ll:()=>new _(E("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new _(E("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new _(E("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new _(E("5cgBgBlgHAB",!1)),Mn:()=>new _(E("5cgBgBlgHAB",!1)),Emoji:()=>new _(E("8mJA",!0)),Extended_Pictographic:()=>new _(E("8mJA",!0)),Lowercase:()=>new _(E("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new _(E("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new _(E("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),V(_s,"FOLD_SCRIPT",new Ic({Common:()=>new _(E("8cgBgB",!1)),Greek:()=>new _(E("1FwUwU",!1)),Inherited:()=>new _(E("5cgBgBlgHAB",!1))})),_s),we,Q=(we=class{static isUnsearchable(e){return e===we.RUNE_ERROR||e>=we.MIN_HIGH_SURROGATE&&e<=we.MAX_LOW_SURROGATE}static is32(e,t){let n=0,r=e.length;for(;n<r;){const i=n+Math.floor((r-n)/2),o=e.getLo(i),a=e.getHi(i);if(o<=t&&t<=a){const l=e.getStride(i);return(t-o)%l===0}t<o?r=i:n=i+1}return!1}static is(e,t){if(t<=we.MAX_LATIN1){for(let n=0;n<e.length;n++){if(t>e.getHi(n))continue;const r=e.getLo(n);if(t<r)return!1;const i=e.getStride(n);return(t-r)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&we.is32(e,t)}static isPrint(e){return e<=we.MAX_LATIN1?e>=32&&e<we.MAX_ASCII||e>=161&&e!==173:we.is(zt.Print,e)}static simpleFold(e){if(zt.CASE_ORBIT.has(e))return zt.CASE_ORBIT.get(e);if(e<=we.MAX_ASCII){const t=F.toLowerCase(e);return t!==e?t:F.toUpperCase(e)}return e}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=we.MAX_ASCII&&t<=we.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let n=we.simpleFold(e);n!==e;n=we.simpleFold(n))if(n===t)return!0;return!1}},V(we,"MAX_RUNE",1114111),V(we,"RUNE_ERROR",65533),V(we,"MAX_ASCII",127),V(we,"MAX_LATIN1",255),V(we,"MAX_BMP",65535),V(we,"MIN_FOLD",65),V(we,"MAX_FOLD",125251),V(we,"MIN_HIGH_SURROGATE",55296),V(we,"MAX_HIGH_SURROGATE",56319),V(we,"MIN_LOW_SURROGATE",56320),V(we,"MAX_LOW_SURROGATE",57343),V(we,"MIN_SUPPLEMENTARY_CODE_POINT",65536),we);const qB=256,c_=new Uint8Array(qB);for(let s=0;s<qB;s++)c_[s]=97<=s&&s<=122||65<=s&&s<=90||48<=s&&s<=57||s===95?1:0;let ph=null,Ch=null;var Oe,z=(Oe=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||Object.prototype.toString.call(e)==="[object Uint8Array]"}static isalnum(e){return F.CODES[0]<=e&&e<=F.CODES[9]||F.CODES.a<=e&&e<=F.CODES.z||F.CODES.A<=e&&e<=F.CODES.Z}static unhex(e){return F.CODES[0]<=e&&e<=F.CODES[9]?e-F.CODES[0]:F.CODES.a<=e&&e<=F.CODES.f?e-F.CODES.a+10:F.CODES.A<=e&&e<=F.CODES.F?e-F.CODES.A+10:-1}static escapeRune(e){let t="";if(Q.isPrint(e))Oe.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case F.CODES['"']:t+='\\"';break;case F.CODES["\\"]:t+="\\\\";break;case F.CODES["	"]:t+="\\t";break;case F.CODES[`
`]:t+="\\n";break;case F.CODES["\r"]:t+="\\r";break;case F.CODES["\b"]:t+="\\b";break;case F.CODES["\f"]:t+="\\f";break;default:{let n=e.toString(16);e<256?(t+="\\x",n.length===1&&(t+="0"),t+=n):t+=`\\x{${n}}`;break}}return t}static stringToRunes(e){const t=String(e),n=[];let r=0;for(;r<t.length;){const i=t.codePointAt(r);n.push(i),r+=i>Q.MAX_BMP?2:1}return new Int32Array(n)}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<qB?c_[e]===1:!1}static emptyOpContext(e,t){let n=0;return e<0&&(n|=Oe.EMPTY_BEGIN_TEXT|Oe.EMPTY_BEGIN_LINE),e===10&&(n|=Oe.EMPTY_BEGIN_LINE),t<0&&(n|=Oe.EMPTY_END_TEXT|Oe.EMPTY_END_LINE),t===10&&(n|=Oe.EMPTY_END_LINE),Oe.isWordRune(e)!==Oe.isWordRune(t)?n|=Oe.EMPTY_WORD_BOUNDARY:n|=Oe.EMPTY_NO_WORD_BOUNDARY,n}static quoteMeta(e){return e.split("").map(t=>Oe.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>Q.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return ph||(ph=new TextEncoder),ph.encode(e);{let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===Q.MIN_HIGH_SURROGATE&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===Q.MIN_LOW_SURROGATE?(i=Q.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){Ch||(Ch=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return Ch.decode(t)}else{let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[n++],a=e[n++],l=e[n++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-Q.MIN_SUPPLEMENTARY_CODE_POINT;t[r++]=String.fromCharCode(Q.MIN_HIGH_SURROGATE+(u>>10)),t[r++]=String.fromCharCode(Q.MIN_LOW_SURROGATE+(u&1023))}else{let o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")}}},V(Oe,"METACHARACTERS","\\.+*?()|[]{}^$"),V(Oe,"EMPTY_BEGIN_LINE",1),V(Oe,"EMPTY_END_LINE",2),V(Oe,"EMPTY_BEGIN_TEXT",4),V(Oe,"EMPTY_END_TEXT",8),V(Oe,"EMPTY_WORD_BOUNDARY",16),V(Oe,"EMPTY_NO_WORD_BOUNDARY",32),V(Oe,"EMPTY_ALL",-1),Oe);const l_=(s=[],e=0)=>{const t=Object.create(null);for(let n=0;n<s.length;n++){const r=s[n],i=e+n;t[r]=i,t[i]=r}return Object.freeze(t)};var Ds,Ar=(Ds=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===Ds.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===Ds.Encoding.UTF_16}},V(Ds,"Encoding",l_(["UTF_16","UTF_8"])),Ds),tC=class extends Ar{constructor(s=null){super(),this.bytes=s}getEncoding(){return Ar.Encoding.UTF_8}asCharSequence(){return z.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},lv=class extends Ar{constructor(s=null){super(),this.charSequence=s}getEncoding(){return Ar.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return z.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},dr=class{static utf16(s){return new lv(s)}static utf8(s){return z.isByteArray(s)?new tC(s):new tC(z.stringToUtf8ByteArray(s))}},St=class{static EOF(){return-8}constructor(){this.start=0,this.end=0}canCheckPrefix(){return!0}endPos(){return this.end-this.start}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},un,uv=(un=class extends St{constructor(e,t=0,n=e.length){super(),this.bytes=e,this.start=t,this.end=n}hasString(e,t){const n=e.bytes;if(n.length===0)return!0;const r=this.indexOf(this.bytes,n,this.start+t);return r!==-1&&r<=this.end-n.length}hasAnyString(e,t){return e.automaton8().searchUTF8(this.bytes,this.start+t,this.end)}step(e){if(e+=this.start,e>=this.end)return St.EOF();const t=this.bytes[e]&255;if(t<128)return t<<3|1;let n,r,i=128,o=191;if(t>=194&&t<=223)n=2,r=t&31;else if(t>=224&&t<=239)n=3,r=t&15,t===224?i=160:t===237&&(o=159);else if(t>=240&&t<=244)n=4,r=t&7,t===240?i=144:t===244&&(o=143);else return un.RUNE_ERROR_STEP;if(e+n>this.end)return un.RUNE_ERROR_STEP;const a=this.bytes[e+1]&255;if(a<i||a>o)return un.RUNE_ERROR_STEP;if(r=r<<6|a&63,n>2){const l=this.bytes[e+2]&255;if((l&192)!==128)return un.RUNE_ERROR_STEP;if(r=r<<6|l&63,n>3){const u=this.bytes[e+3]&255;if((u&192)!==128)return un.RUNE_ERROR_STEP;r=r<<6|u&63}}return r<<3|n}index(e,t){t+=this.start;const n=this.indexOf(this.bytes,e.prefixUTF8,t);return n<0?n:n-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let r=e-1;if(t=this.bytes[r--],t>=128){let i=e-4;for(i<this.start&&(i=this.start);r>=i&&(this.bytes[r]&192)===128;)r--;r<this.start&&(r=this.start);const o=this.step(r-this.start);t=r+(o&7)===e?o>>3:Q.RUNE_ERROR}}const n=e<this.end?this.step(e-this.start)>>3:-1;return z.emptyOpContext(t,n)}indexOf(e,t,n=0){let r=t.length;if(r===0)return n<=this.end?n:-1;const i=t[0];let o=this.end-r;const a=typeof e.indexOf=="function";let l=n;for(;l<=o;){if(a){if(l=e.indexOf(i,l),l===-1||l>o)return-1}else{for(;l<=o&&e[l]!==i;)l++;if(l>o)return-1}let u=!0;for(let h=1;h<r;h++)if(e[l+h]!==t[h]){u=!1;break}if(u)return l;l++}return-1}prefixLength(e){return e.prefixUTF8.length}},V(un,"RUNE_ERROR_STEP",Q.RUNE_ERROR<<3|1),un),hv=class extends St{constructor(s,e=0,t=s.length){super(),this.charSequence=s,this.start=e,this.end=t}hasString(s,e){const t=this.charSequence.indexOf(s.str,this.start+e);return t!==-1&&t<=this.end-s.str.length}hasAnyString(s,e){return s.automaton16().searchUTF16(this.charSequence,this.start+e,this.end)}step(s){if(s+=this.start,s>=this.end)return St.EOF();const e=this.charSequence.charCodeAt(s);if(e<Q.MIN_HIGH_SURROGATE||e>Q.MAX_HIGH_SURROGATE||s+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(s+1);return t>=Q.MIN_LOW_SURROGATE&&t<=Q.MAX_LOW_SURROGATE?(e-Q.MIN_HIGH_SURROGATE)*1024+(t-Q.MIN_LOW_SURROGATE)+Q.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(s,e){e+=this.start;const t=this.charSequence.indexOf(s.prefix,e);return t<0||t>this.end-s.prefix.length?-1:t-e}context(s){s+=this.start;const e=s>this.start&&s<=this.end?this.charSequence.charCodeAt(s-1):-1,t=s<this.end?this.charSequence.charCodeAt(s):-1;return z.emptyOpContext(e,t)}prefixLength(s){return s.prefix.length}},be=class{static fromUTF8(s,e=0,t=s.length){return new uv(s,e,t)}static fromUTF16(s,e=0,t=s.length){return new hv(s,e,t)}},Oa=class extends Error{constructor(s){super(s),this.name="RE2JSException"}},Se=class extends Oa{constructor(s,e=null){let t=`error parsing regexp: ${s}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=s,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},gh=class extends Oa{constructor(s){super(s),this.name="RE2JSCompileException"}},Ft=class extends Oa{constructor(s){super(s),this.name="RE2JSGroupException"}},Bv=class extends Oa{constructor(s){super(s),this.name="RE2JSFlagsException"}},sl=class extends Oa{constructor(s){super(s),this.name="RE2JSInternalException"}},_r,nC=(_r=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{const r=n.codePointAt(0);return r===F.CODES["\\"]||r===F.CODES.$?`\\${n}`:n}).join(""):e.indexOf("$")<0?e:e.split("").map(n=>n.codePointAt(0)===F.CODES.$?"$$":n).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.hasNamedGroups=Object.keys(this.namedGroups).length>0,this.numberOfInstructions=n.numberOfInstructions(),this.lookbehindState=null,t instanceof Ar?this.resetMatcherInput(t):z.isByteArray(t)?this.resetMatcherInput(dr.utf8(t)):this.resetMatcherInput(dr.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof Ar||(z.isByteArray(e)?e=dr.utf8(e):e=dr.utf16(e)),this.matcherInput=e,this.lookbehindState!==null?this.lookbehindState.reset():this.lookbehindState=this.patternInput.re2().createLookbehindState(),this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Ft(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Ft(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const r=this.namedGroups[e];if(!Number.isFinite(r))throw new Ft(`group '${e}' not found`);e=r}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new Ft("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(!Number.isInteger(e)||e<0||e>this.patternGroupCount)throw new Ft(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new Ft("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount,this.lookbehindState);if(!n[0])throw new Ft("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,G.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,G.ANCHOR_START)}find(e=null){if(e!==null){if(!Number.isInteger(e)||e<0||e>this.matcherInputLength)throw new Ft(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?be.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):be.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,G.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1,this.lookbehindState);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?z.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const r=this.start(),i=this.end();return this.appendPos<r&&(n+=this.substring(this.appendPos,r)),this.appendPos=i,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const r=e.length;let i=0;for(;i<r;){const o=e.codePointAt(i);if(o===F.CODES["\\"]){if(n<i&&(t+=e.substring(n,i)),i++,i>=r)throw new Ft("character to be escaped is missing");n=i,i++;continue}if(o===F.CODES.$){if(n<i&&(t+=e.substring(n,i)),i+1>=r)throw new Ft("Illegal group reference: group index is missing");const a=e.codePointAt(i+1);if(F.CODES[0]<=a&&a<=F.CODES[9]){let l=a-F.CODES[0],u=i+2;for(;u<r;u++){const B=e.codePointAt(u);if(B<F.CODES[0]||B>F.CODES[9]||l*10+B-F.CODES[0]>this.patternGroupCount)break;l=l*10+B-F.CODES[0]}if(l>this.patternGroupCount)throw new Ft(`n > number of groups: ${l}`);const h=this.group(l);h!==null&&(t+=h),i=u,n=i}else if(a===F.CODES["{"]){let l=i+2;for(;l<r&&e.codePointAt(l)!==F.CODES["}"];)l++;if(l>=r)throw new Ft("named capture group is missing trailing '}'");const u=e.substring(i+2,l),h=this.group(u);h!==null&&(t+=h),i=l+1,n=i}else throw new Ft("Illegal group reference");continue}i++}return n<r&&(t+=e.substring(n,r)),t}appendReplacementInternalJs(e){const t=o=>o>=48&&o<=57,n=this.patternGroupCount;let r="",i=0;for(;i<e.length;){const o=e.indexOf("$",i);if(o<0)break;r+=e.substring(i,o),i=o;const a=e.charCodeAt(i+1);if(a===F.CODES.$)r+="$",i+=2;else if(a===F.CODES["&"])r+=this.group(0),i+=2;else if(a===F.CODES["`"])r+=this.substring(0,this.start(0)),i+=2;else if(a===F.CODES["'"])r+=this.substring(this.end(0),this.matcherInputLength),i+=2;else if(t(a)){let l=1,u=a-48;const h=e.charCodeAt(i+2);if(t(h)&&u*10+h-48<=n&&(l=2,u=u*10+h-48),u>=1&&u<=n){const B=this.group(u);B!==null&&(r+=B)}else r+=e.substring(i,i+1+l);i+=1+l}else if(a===F.CODES["<"]&&this.hasNamedGroups){const l=e.indexOf(">",i+2);if(l<0)r+="$<",i+=2;else{const u=e.substring(i+2,l);if(Object.prototype.hasOwnProperty.call(this.namedGroups,u)){const h=this.group(u);h!==null&&(r+=h)}i=l+1}}else r+="$",i+=1}return r+e.substring(i)}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,n=!1){let r="";this.reset();const i=typeof e=="function";let o=null;if(i){if(this.groupCount()>=_r.MAX_REPLACER_ARGS)throw new Ft("Too many capture groups to safely invoke replacer function");o=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(r+=i?this.appendReplacementFunc(e,o):this.appendReplacement(e,n),!!t););return r+=this.appendTail(),r}appendReplacementFunc(e,t){let n="";const r=this.start(),i=this.end();this.appendPos<r&&(n+=this.substring(this.appendPos,r)),this.appendPos=i;const o=this.matchArray();return o.push(r,t),this.hasNamedGroups&&o.push(this.namedGroupsObject()),n+=String(e(...o)),n}matchArray(){const e=[this.group(0)];for(let t=1;t<=this.patternGroupCount;t++){const n=this.group(t);e.push(n===null?void 0:n)}return e}namedGroupsObject(){if(!this.hasNamedGroups)return;const e=this.getNamedGroups();for(const t in e)e[t]===null&&(e[t]=void 0);return e}},V(_r,"MAX_REPLACER_ARGS",65535),_r),ge,O=(ge=class{static isRuneOp(e){return ge.RUNE<=e&&e<=ge.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=z.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=new Int32Array(0),this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&G.FOLD_CASE)!==0?Q.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let n=0,r=t>>1;for(;r>1;){const o=r>>1;n+=this.runes[n+o<<1]<=e?o:0,r-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&G.FOLD_CASE)!==0?Q.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let n=0,r=t>>1;for(;r>1;){const o=r>>1;n+=this.runes[n+o<<1]<=e?o:0,r-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case ge.ALT:return`alt -> ${this.out}, ${this.arg}`;case ge.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case ge.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case ge.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case ge.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case ge.FAIL:return"fail";case ge.NOP:return`nop -> ${this.out}`;case ge.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case ge.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case ge.RUNE:return this.runes===null?"rune <null>":["rune ",ge.escapeRunes(this.runes),(this.arg&G.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case ge.RUNE1:return`rune1 ${ge.escapeRunes(this.runes)} -> ${this.out}`;case ge.RUNE_ANY:return`any -> ${this.out}`;case ge.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},V(ge,"ALT",1),V(ge,"ALT_MATCH",2),V(ge,"CAPTURE",3),V(ge,"EMPTY_WIDTH",4),V(ge,"FAIL",5),V(ge,"MATCH",6),V(ge,"NOP",7),V(ge,"RUNE",8),V(ge,"RUNE1",9),V(ge,"RUNE_ANY",10),V(ge,"RUNE_ANY_NOT_NL",11),V(ge,"LB_WRITE",12),V(ge,"LB_CHECK",13),ge),Er,sC=(Er=class{constructor(e){this.sparse=new Int32Array(e),this.densePcs=new Int32Array(e),this.denseCaps=null,this.size=0,this.ncap=0,this.mainThreads=0}init(e){this.ncap=e;const t=Math.min(this.densePcs.length,Er.INITIAL_THREADS)*e;(!this.denseCaps||this.denseCaps.length<t)&&(this.denseCaps=new Int32Array(t))}growCaps(e){const t=this.densePcs.length*this.ncap,n=new Int32Array(Math.min(t,Math.max(e,2*this.denseCaps.length)));n.set(this.denseCaps),this.denseCaps=n}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.densePcs[t]=e,t}clear(){this.size=0,this.mainThreads=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}},V(Er,"INITIAL_THREADS",32),Er),dv=class{constructor(s){this.pos=-1,this.pcs=new Int32Array(s.numInst()),this.size=0,this.lbTable=new Int32Array(s.numLb+1)}reset(){this.pos=-1,this.size=0}},fv=class u_{static fromRE2(e){const t=new u_;return t.prog=e.prog,t.re2=e,t.q0=new sC(t.prog.numInst()),t.q1=new sC(t.prog.numInst()),t.addStack=new Int32Array(2*(t.prog.numInst()+1)),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.addStack=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?z.emptyInts():z.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n,r=null){const i=this.re2.cond;if(i===z.EMPTY_ALL||(n===G.ANCHOR_START||n===G.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);const o=this.prog.numLb>0,a=t;let l=t,u=!1;o&&(r!==null&&r.pos>=0&&r.pos<=t?(l=r.pos,u=!0):l=0);let h=o&&r!==null,B=this.q0,p=this.q1,g=e.step(l),m=g>>3,S=g&7,x=-1,j=0;g!==St.EOF()&&(g=e.step(l+S),x=g>>3,j=g&7);let Y;for(l===0?Y=z.emptyOpContext(-1,m):Y=e.context(l),o&&(u?this.restoreLookbehinds(r,B,Y):this.spawnLookbehinds(B,l,Y));;){if(B.mainThreads===0){if((i&z.EMPTY_BEGIN_TEXT)!==0&&l!==0||(n===G.ANCHOR_START||n===G.ANCHOR_BOTH)&&l!==0||this.matched)break;if(this.prog.numLb===0&&B.isEmpty()&&this.re2.prefix.length!==0&&x!==this.re2.prefixRune&&e.canCheckPrefix()){const Je=e.index(this.re2,l);if(Je<0)break;l+=Je,g=e.step(l),m=g>>3,S=g&7,g=e.step(l+S),x=g>>3,j=g&7,Y=e.context(l)}}l>=a&&(h&&(this.saveLookbehinds(r,B,l),h=!1),!this.matched&&(l===0||n===G.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=l),this.add(B,this.prog.start,l,this.matchcap,0,Y)));const ue=l+S;if(Y=e.context(ue),this.step(B,p,l,ue,m,Y,n,l===e.endPos()),S===0||this.ncap===0&&this.matched)break;l+=S,m=x,S=j,m!==-1&&(g=e.step(l+S),x=g>>3,j=g&7);const Ue=B;B=p,p=Ue}return B.clear(),p.clear(),this.matched}matchSet(e,t,n){const r=this.re2.cond;if(r===z.EMPTY_ALL)return[];if((n===G.ANCHOR_START||n===G.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,a=this.q0,l=this.q1,u=e.step(i),h=u>>3,B=u&7,p=-1,g=0;u!==St.EOF()&&(u=e.step(i+B),p=u>>3,g=u&7);let m=i===0?z.emptyOpContext(-1,h):e.context(i);const S=new Set;for(this.prog.numLb>0&&this.spawnLookbehinds(a,i,m);!(a.mainThreads===0&&((r&z.EMPTY_BEGIN_TEXT)!==0&&i!==0||(n===G.ANCHOR_START||n===G.ANCHOR_BOTH)&&i!==0));){(i===0||n===G.UNANCHORED)&&i>=o&&this.add(a,this.prog.start,i,this.matchcap,0,m);const x=i+B;m=e.context(x);for(let Y=0;Y<a.size;Y++){const ue=a.densePcs[Y],Ue=this.prog.inst[ue],Je=Y*this.ncap;let He=!1;switch(Ue.op){case O.MATCH:if(n===G.ANCHOR_BOTH&&i!==e.endPos())break;S.add(Ue.arg);break;case O.RUNE:He=Ue.matchRune(h);break;case O.RUNE1:He=h===Ue.runes[0];break;case O.RUNE_ANY:He=!0;break;case O.RUNE_ANY_NOT_NL:He=h!==10;break;default:continue}He&&this.add(l,Ue.out,x,a.denseCaps,Je,m)}if(a.clear(),B===0)break;i+=B,h=p,B=g,h!==-1&&(u=e.step(i+B),p=u>>3,g=u&7);const j=a;a=l,l=j}return l.clear(),Array.from(S).sort((x,j)=>x-j)}step(e,t,n,r,i,o,a,l){const u=this.re2.longest;for(let h=0;h<e.size;h++){const B=e.densePcs[h],p=h*this.ncap;if(u&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[p])continue;const g=this.prog.inst[B];let m=!1;switch(g.op){case O.MATCH:if(a===G.ANCHOR_BOTH&&!l)break;if(this.ncap>0&&(!u||!this.matched||this.matchcap[1]<n)){e.denseCaps[p+1]=n;for(let S=0;S<this.ncap;S++)this.matchcap[S]=e.denseCaps[p+S]}u||(e.size=0),this.matched=!0;break;case O.RUNE:m=g.matchRune(i);break;case O.RUNE1:m=i===g.runes[0];break;case O.RUNE_ANY:m=!0;break;case O.RUNE_ANY_NOT_NL:m=i!==10;break;default:continue}m&&this.add(t,g.out,r,e.denseCaps,p,o)}e.clear()}spawnLookbehinds(e,t,n){for(let r=0;r<this.prog.lbStarts.length;r++)this.add(e,this.prog.lbStarts[r],t,this.matchcap,0,n)}restoreLookbehinds(e,t,n){this.lbTable.set(e.lbTable);for(let r=0;r<e.size;r++)this.add(t,e.pcs[r],e.pos,this.matchcap,0,n)}saveLookbehinds(e,t,n){let r=0;for(let i=0;i<t.size;i++){const o=t.densePcs[i];this.prog.lbInst[o]===1&&O.isRuneOp(this.prog.inst[o].op)&&(e.pcs[r++]=o)}e.size=r,e.pos=n,e.lbTable.set(this.lbTable)}add(e,t,n,r,i,o){const a=this.addStack;let l=0;for(;;){for(;t!==0&&!e.contains(t);){const h=e.add(t),B=this.prog.inst[t];switch(B.op){case O.FAIL:t=0;break;case O.ALT:case O.ALT_MATCH:a[l++]=B.arg,a[l++]=0,t=B.out;break;case O.EMPTY_WIDTH:t=(B.arg&~o)===0?B.out:0;break;case O.NOP:t=B.out;break;case O.CAPTURE:B.arg<this.ncap&&(a[l++]=-B.arg-1,a[l++]=r[i+B.arg],r[i+B.arg]=n),t=B.out;break;case O.LB_WRITE:this.lbTable[Math.abs(B.arg)]=n,t=B.out;break;case O.LB_CHECK:B.arg>0?t=this.lbTable[B.arg]===n?B.out:0:t=this.lbTable[-B.arg]!==n?B.out:0;break;case O.MATCH:case O.RUNE:case O.RUNE1:case O.RUNE_ANY:case O.RUNE_ANY_NOT_NL:if(this.prog.lbInst[t]===0&&e.mainThreads++,this.ncap>0){const p=h*this.ncap;p+this.ncap>e.denseCaps.length&&e.growCaps(p+this.ncap);for(let g=0;g<this.ncap;g++)e.denseCaps[p+g]=r[i+g]}t=0;break;default:throw new sl("unhandled")}}if(l===0)return;l-=2;const u=a[l];u<0?(r[i-u-1]=a[l+1],t=0):t=u}}};const pv=(s,e,t)=>{let n=-2128831035;for(let r=0;r<s.length;r++)n^=s[r],n=Math.imul(n,16777619);n^=e,n=Math.imul(n,16777619);for(let r=0;r<t.length;r++)n^=t[r],n=Math.imul(n,16777619);return n},rC=(s,e)=>{if(s.length!==e.length)return!1;for(let t=0;t<s.length;t++)if(s[t]!==e[t])return!1;return!0},iC=(s,e,t,n)=>s.flag===t&&rC(s.nfaStates,e)&&rC(s.matchIDs,n),mh=[],co=-1;var Dc=class{constructor(s,e,t){this.nfaStates=s,this.flag=e,this.isMatch=(e&h_.FLAG_MATCH)!==0,this.matchIDs=t,this.next=null,this.nextAnchored=null}},Ee,h_=(Ee=class{constructor(e,t=8388608){this.prog=e,this.maxMem=t,this.stateCache=new Map,this.stateCount=0,this.startStates=new Map,this.failed=!1;for(let n=0;n<e.numInst();n++){const r=e.getInst(n).op;if(r===O.LB_WRITE||r===O.LB_CHECK){this.failed=!0;break}}this.computeRuneClasses(),this.stateBudget=t,this.memBudget=t}computeRuneClasses(){const e=new Set,t=(r,i)=>{e.add(r),e.add(i+1)};for(let r=0;r<this.prog.numInst();r++){const i=this.prog.getInst(r);switch(i.op){case O.RUNE:case O.RUNE1:if(i.runes.length===1){if(t(i.runes[0],i.runes[0]),(i.arg&G.FOLD_CASE)!==0)for(let o=Q.simpleFold(i.runes[0]);o!==i.runes[0];o=Q.simpleFold(o))t(o,o)}else for(let o=0;o<i.runes.length;o+=2)t(i.runes[o],i.runes[o+1]);break;case O.RUNE_ANY_NOT_NL:t(10,10);break;case O.EMPTY_WIDTH:(i.arg&(z.EMPTY_BEGIN_LINE|z.EMPTY_END_LINE))!==0&&t(10,10),(i.arg&(z.EMPTY_WORD_BOUNDARY|z.EMPTY_NO_WORD_BOUNDARY))!==0&&(t(48,57),t(65,90),t(95,95),t(97,122))}}e.delete(0),this.classBounds=Int32Array.from(e).sort(),this.numClasses=this.classBounds.length+1;const n=new Int32Array(Q.MAX_LATIN1+1);for(let r=0;r<=Q.MAX_LATIN1;r++)n[r]=this.searchClass(r);this.latin1Class=n}runeClass(e){return e<=Q.MAX_LATIN1?this.latin1Class[e]:this.searchClass(e)}searchClass(e){const t=this.classBounds;let n=0,r=t.length;for(;n<r;){const i=n+r>>1;t[i]<=e?n=i+1:r=i}return n}closure(e,t){const n=new Set,r=Array.from(e);let i=0;for(;r.length>0;){const o=r.pop();if(o===0||n.has(o))continue;n.add(o);const a=this.prog.getInst(o);switch(a.op){case O.ALT:case O.ALT_MATCH:r.push(a.out),r.push(a.arg);break;case O.NOP:case O.CAPTURE:r.push(a.out);break;case O.EMPTY_WIDTH:i|=a.arg,(a.arg&~t)===0&&r.push(a.out)}}return{pcs:Array.from(n).sort((o,a)=>o-a),needflags:i}}getState(e,t,n){const r=pv(e,t,n),i=this.stateCache.get(r);if(i instanceof Dc){if(iC(i,e,t,n))return i}else if(i!==void 0){for(let l=0;l<i.length;l++)if(iC(i[l],e,t,n))return i[l]}const o=Ee.stateCost(e,n);if(this.memBudget<o)return null;this.memBudget-=o;const a=new Dc(e,t,n);return i===void 0?this.stateCache.set(r,a):i instanceof Dc?this.stateCache.set(r,[i,a]):i.push(a),this.stateCount++,a}static stateCost(e,t){const n=t.length===0?0:Ee.ARRAY_OVERHEAD+Ee.ELEMENT_SIZE*t.length;return Ee.STATE_OVERHEAD+Ee.ELEMENT_SIZE*e.length+n}*cachedStates(){for(const e of this.stateCache.values())e instanceof Dc?yield e:yield*e}makeState(e,t,n){const r=this.closure(e,t&Ee.FLAG_EMPTY_MASK);let i=t;return r.needflags===0&&(i&=Ee.FLAG_MATCH),i|=r.needflags<<Ee.FLAG_NEED_SHIFT,this.getState(r.pcs,i,n)}allocTable(e,t){const n=this.numClasses+1,r=Ee.TABLE_OVERHEAD+Ee.ELEMENT_SIZE*n;if(this.memBudget<r)return null;this.memBudget-=r;const i=new Array(n).fill(null);return t===G.UNANCHORED?e.next=i:e.nextAnchored=i,i}clearCache(){this.stateCache.clear(),this.stateCount=0,this.startStates.clear(),this.memBudget=this.stateBudget}resetCache(e){return this.clearCache(),this.getState(e.nfaStates,e.flag,e.matchIDs)}step(e,t,n,r){let i=r===G.UNANCHORED?e.next:e.nextAnchored;if(i!==null){const Y=i[t];if(Y!==null)return Y}else if(i=this.allocTable(e,r),i===null)return null;const o=e.flag>>>Ee.FLAG_NEED_SHIFT,a=e.flag&Ee.FLAG_EMPTY_MASK;let l=a,u=0;n===10&&(l|=z.EMPTY_END_LINE,u|=z.EMPTY_BEGIN_LINE),n===co&&(l|=z.EMPTY_END_LINE|z.EMPTY_END_TEXT);const h=(e.flag&Ee.FLAG_LAST_WORD)!==0,B=n!==co&&z.isWordRune(n);l|=B===h?z.EMPTY_NO_WORD_BOUNDARY:z.EMPTY_WORD_BOUNDARY;let p=e.nfaStates;(l&~a&o)!==0&&(p=this.closure(p,l).pcs);const g=[];let m=!1,S=mh;for(let Y=0;Y<p.length;Y++){const ue=this.prog.getInst(p[Y]);ue.op===O.MATCH?(m||(m=!0,S=[]),S.push(ue.arg)):n!==co&&O.isRuneOp(ue.op)&&ue.matchRune(n)&&g.push(ue.out)}S.length>1&&S.sort((Y,ue)=>Y-ue),r===G.UNANCHORED&&n!==co&&g.push(this.prog.start);let x=u;m&&(x|=Ee.FLAG_MATCH),B&&(x|=Ee.FLAG_LAST_WORD);const j=this.makeState(g,x,S);return j===null?null:(i[t]=j,j)}start(e,t){const n=e.context(t);let r;if((n&z.EMPTY_BEGIN_TEXT)!==0)r=z.EMPTY_BEGIN_TEXT|z.EMPTY_BEGIN_LINE;else if((n&z.EMPTY_BEGIN_LINE)!==0)r=z.EMPTY_BEGIN_LINE;else{const o=e.step(t),a=o>=0&&z.isWordRune(o>>3);r=(n&z.EMPTY_WORD_BOUNDARY)!==0!==a?Ee.FLAG_LAST_WORD:0}let i=this.startStates.get(r);if(i===void 0){if(i=this.makeState([this.prog.start],r,mh),i===null&&(this.clearCache(),i=this.makeState([this.prog.start],r,mh),i===null))return null;this.startStates.set(r,i)}return i}stepOrReset(e,t,n,r,i,o){let a=this.step(e,t,n,r);if(a!==null)return a;if(o.resetPos>=0&&i-o.resetPos<Ee.PROGRESS_PER_STATE*this.stateCount)return null;o.resetPos=i;const l=this.resetCache(e);return l===null?null:(a=this.step(l,t,n,r),a)}run(e,t,n,r,i){const o=e.endPos(),a=this.latin1Class,l=n===G.UNANCHORED,u={resetPos:-1};let h=t;for(;h<o;){const B=e.step(h),p=B>>3,g=B&7;if(g===0)break;const m=p<=Q.MAX_LATIN1?a[p]:this.runeClass(p);let S=l&&r.next!==null?r.next[m]:null;if(S===null&&(S=this.stepOrReset(r,m,p,n,h,u),S===null))return null;if(r=S,r.isMatch&&i(r,!1))return!0;if(!l&&r.nfaStates.length===0)return!1;h+=g}return r=this.stepOrReset(r,this.numClasses,co,n,h,u),r===null?null:r.isMatch&&i(r,!0)}match(e,t,n){if(this.failed)return null;if((n===G.ANCHOR_START||n===G.ANCHOR_BOTH)&&t!==0)return!1;const r=this.start(e,t);return r===null?null:this.run(e,t,n,r,(i,o)=>n!==G.ANCHOR_BOTH||o)}matchSet(e,t,n){if(this.failed)return null;if((n===G.ANCHOR_START||n===G.ANCHOR_BOTH)&&t!==0)return[];const r=this.start(e,t);if(r===null)return null;const i=new Set,o=(a,l)=>{if(n!==G.ANCHOR_BOTH||l)for(let u=0;u<a.matchIDs.length;u++)i.add(a.matchIDs[u]);return!1};return this.run(e,t,n,r,o)===null?null:Array.from(i).sort((a,l)=>a-l)}},V(Ee,"FLAG_EMPTY_MASK",255),V(Ee,"FLAG_MATCH",256),V(Ee,"FLAG_LAST_WORD",512),V(Ee,"FLAG_NEED_SHIFT",16),V(Ee,"STATE_OVERHEAD",150),V(Ee,"ARRAY_OVERHEAD",40),V(Ee,"ELEMENT_SIZE",8),V(Ee,"TABLE_OVERHEAD",48),V(Ee,"PROGRESS_PER_STATE",10),Ee);const Cv=32,gv=500,_h=256,mv=262144;var _v=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(_h),this.jobArg=new Uint8Array(_h),this.jobPos=new Int32Array(_h),this.jobLen=0,this.visited=new Uint32Array(0)}reset(s,e,t){this.end=e,this.jobLen=0,this.ncap=t;const n=s.numInst()*(e+1)+Cv-1>>>5;this.visited.length<n?this.visited=new Uint32Array(n):this.visited.fill(0,0,n),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(s,e){const t=s*(this.end+1)+e,n=t>>>5,r=1<<(t&31);return(this.visited[n]&r)!==0?!1:(this.visited[n]|=r,!0)}push(s,e,t,n){if(s.prog.getInst(e).op!==O.FAIL&&(n||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const r=this.jobPc.length*2,i=new Int32Array(r);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(r);o.set(this.jobArg),this.jobArg=o;const a=new Int32Array(r);a.set(this.jobPos),this.jobPos=a}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=n?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(s,e,t,n,r){const i=s.longest;for(this.push(s,t,n,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],a=this.jobArg[this.jobLen]===1,l=this.jobPos[this.jobLen],u=!0;for(;!(!u&&!this.shouldVisit(o,l));){u=!1;const h=s.prog.getInst(o);switch(h.op){case O.FAIL:break;case O.ALT:if(a){a=!1,o=h.arg;continue}else{this.push(s,o,l,!0),o=h.out;continue}case O.ALT_MATCH:{const B=s.prog.getInst(h.out);if(O.isRuneOp(B.op)){this.push(s,h.arg,l,!1),o=h.arg,l=this.end;continue}this.push(s,h.out,this.end,!1),o=h.out;continue}case O.RUNE:{const B=e.step(l);if(B===St.EOF()||!h.matchRune(B>>3))break;l+=B&7,o=h.out;continue}case O.RUNE1:{const B=e.step(l);if(B===St.EOF()||B>>3!==h.runes[0])break;l+=B&7,o=h.out;continue}case O.RUNE_ANY_NOT_NL:{const B=e.step(l);if(B===St.EOF()||B>>3===10)break;l+=B&7,o=h.out;continue}case O.RUNE_ANY:{const B=e.step(l);if(B===St.EOF())break;l+=B&7,o=h.out;continue}case O.CAPTURE:if(a){this.cap[h.arg]=l;break}else{h.arg<this.ncap&&(this.push(s,o,this.cap[h.arg],!0),this.cap[h.arg]=l),o=h.out;continue}case O.EMPTY_WIDTH:{const B=e.context(l);if((h.arg&~B)!==0)break;o=h.out;continue}case O.NOP:o=h.out;continue;case O.MATCH:{if(r===G.ANCHOR_BOTH&&l!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=l);const B=this.matchcap[1];if((B===-1||i&&l>0&&l>B)&&this.matchcap.set(this.cap),!i||l===this.end)return!0;break}case O.LB_WRITE:case O.LB_CHECK:throw new sl("Backtracker cannot evaluate Lookbehind instructions");default:throw new sl("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const wc=[];var Tc=class B_{static shouldBacktrack(e){return e.numInst()<=gv}static maxBitStateLen(e){return B_.shouldBacktrack(e)?Math.floor(mv/e.numInst()):0}static execute(e,t,n,r,i){const o=e.cond;if(o===z.EMPTY_ALL||(r===G.ANCHOR_START||r===G.ANCHOR_BOTH)&&n!==0||(o&z.EMPTY_BEGIN_TEXT)!==0&&n!==0)return null;const a=wc.length>0?wc.pop():new _v,l=t.endPos();a.reset(e.prog,l,i);let u=!1;if((o&z.EMPTY_BEGIN_TEXT)!==0||r===G.ANCHOR_START||r===G.ANCHOR_BOTH)a.ncap>0&&(a.cap[0]=n),a.tryBacktrack(e,t,e.prog.start,n,r)&&(u=!0);else{let B=-1;for(;n<=l&&B!==0;n+=B){if(e.prefix.length>0){const g=t.index(e,n);if(g<0)break;n+=g}if(a.ncap>0&&(a.cap[0]=n),a.tryBacktrack(e,t,e.prog.start,n,r)){u=!0;break}const p=t.step(n);B=p===St.EOF()?0:p&7}}if(!u)return wc.push(a),null;const h=i===0?[]:z.toArray(a.matchcap.subarray(0,i));return wc.push(a),h}},oC=class{constructor(s){this.sparse=new Uint32Array(s),this.dense=new Uint32Array(s),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(s){return s<this.sparse.length&&this.sparse[s]<this.size&&this.dense[this.sparse[s]]===s}insert(s){this.contains(s)||this.insertNew(s)}insertNew(s){s>=this.sparse.length||(this.sparse[s]=this.size,this.dense[this.size]=s,this.size++)}};const Ev=(s,e,t,n)=>{const r=s.length,i=e.length;let o=0,a=0;const l=[],u=[];let h=!0,B=-1;const p=g=>{const m=g?s:e,S=g?o:a,x=g?t:n;return B>0&&m[S]<=l[B]?!1:(l.push(m[S],m[S+1]),g?o+=2:a+=2,B+=2,u.push(x),!0)};for(;o<r||a<i;)if(a>=i?h=p(!0):o>=r||e[a]<s[o]?h=p(!1):h=p(!0),!h)return null;return{merged:l,next:u}};var yv=class{constructor(s){this.start=s.start,this.numCap=s.numCap,this.inst=new Array(s.inst.length);for(let e=0;e<s.inst.length;e++){const t=s.inst[e],n=new O(t.op);n.out=t.out,n.arg=t.arg,n.runes=t.runes?new Int32Array(t.runes):new Int32Array(0),n.next=null,this.inst[e]=n}}};const Iv=s=>{const e=new yv(s);for(let t=0;t<e.inst.length;t++){const n=e.inst[t];if(n.op!==O.ALT&&n.op!==O.ALT_MATCH)continue;let r="out",i="arg",o=e.inst[n[i]];if(o.op!==O.ALT&&o.op!==O.ALT_MATCH&&(r="arg",i="out",o=e.inst[n[i]],o.op!==O.ALT&&o.op!==O.ALT_MATCH))continue;const a=e.inst[n[r]];if(a.op===O.ALT||a.op===O.ALT_MATCH)continue;let l="out",u="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,l="arg",u="out"),h&&(o[l]=n[r]),n[r]===o[l]&&(n[i]=o[u])}return e},Dv=s=>{if(s.inst.length>=1e3)return null;const e=new oC(s.inst.length),t=new oC(s.inst.length),n=new Array(s.inst.length),r=new Array(s.inst.length).fill(!1),i=o=>{let a=!0;const l=s.inst[o];if(t.contains(o))return!0;switch(t.insert(o),l.op){case O.ALT:case O.ALT_MATCH:{a=i(l.out)&&i(l.arg);let u=r[l.out],h=r[l.arg];if(u&&h)return!1;if(h){const m=l.out;l.out=l.arg,l.arg=m;const S=u;u=h,h=S}u&&(r[o]=!0,l.op=O.ALT_MATCH);const B=n[l.out]||[],p=n[l.arg]||[],g=Ev(B,p,l.out,l.arg);if(!g)return!1;n[o]=new Int32Array(g.merged),l.next=new Uint32Array(g.next);break}case O.CAPTURE:case O.EMPTY_WIDTH:case O.NOP:a=i(l.out),r[o]=r[l.out],n[o]=n[l.out]?new Int32Array(n[l.out]):new Int32Array(0),l.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(l.out);break;case O.MATCH:case O.FAIL:r[o]=l.op===O.MATCH;break;case O.RUNE:{if(r[o]=!1,l.next&&l.next.length>0)break;if(e.insert(l.out),!l.runes||l.runes.length===0){n[o]=new Int32Array(0),l.next=new Uint32Array([l.out]);break}let u=[];if(l.runes.length===1&&(l.arg&G.FOLD_CASE)!==0){const h=l.runes[0];u.push(h,h);for(let B=Q.simpleFold(h);B!==h;B=Q.simpleFold(B))u.push(B,B);u.sort((B,p)=>B-p)}else for(let h=0;h<l.runes.length;h++)u.push(l.runes[h]);n[o]=new Int32Array(u),l.next=new Uint32Array(Math.floor(u.length/2)+1).fill(l.out),l.op=O.RUNE;break}case O.RUNE1:{if(r[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out);let u=[];if((l.arg&G.FOLD_CASE)!==0){const h=l.runes[0];u.push(h,h);for(let B=Q.simpleFold(h);B!==h;B=Q.simpleFold(B))u.push(B,B);u.sort((B,p)=>B-p)}else u.push(l.runes[0],l.runes[0]);n[o]=new Int32Array(u),l.next=new Uint32Array(Math.floor(u.length/2)+1).fill(l.out),l.op=O.RUNE;break}case O.RUNE_ANY:if(r[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out),n[o]=new Int32Array([0,Q.MAX_RUNE]),l.next=new Uint32Array([l.out]);break;case O.RUNE_ANY_NOT_NL:if(r[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out),n[o]=new Int32Array([0,9,11,Q.MAX_RUNE]),l.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(l.out)}return a};for(e.clear(),e.insert(s.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<s.inst.length;o++)n[o]&&(s.inst[o].runes=n[o]);return s},wv=(s,e)=>{for(let t=0;t<e.inst.length;t++){const n=e.inst[t];switch(n.op){case O.ALT:case O.ALT_MATCH:case O.RUNE:break;case O.CAPTURE:case O.EMPTY_WIDTH:case O.NOP:case O.MATCH:case O.FAIL:s.inst[t].next=null;break;case O.RUNE1:case O.RUNE_ANY:case O.RUNE_ANY_NOT_NL:s.inst[t].next=null,s.inst[t].op=n.op,s.inst[t].runes=n.runes?new Int32Array(n.runes):new Int32Array(0)}}};var aC=class d_{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==O.EMPTY_WIDTH||(t.arg&z.EMPTY_BEGIN_TEXT)===0)return null;let n=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===O.ALT||e.inst[i].op===O.ALT_MATCH){n=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],a=e.inst[o.out].op;switch(o.op){case O.ALT:case O.ALT_MATCH:if(a===O.MATCH||e.inst[o.arg].op===O.MATCH)return null;break;case O.EMPTY_WIDTH:if(a===O.MATCH){if((o.arg&z.EMPTY_END_TEXT)===z.EMPTY_END_TEXT)continue;return null}break;default:if(a===O.MATCH&&n)return null}}let r=Iv(e);return r=Dv(r),r!==null&&wv(r,e),r}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===O.ALT_MATCH?e.out:0}static execute(e,t,n,r,i){const o=e.onepass;if(!o)return null;const a=new Int32Array(i).fill(-1);let l=!1,u=t.step(n),h=u>>3,B=u&7,p=St.EOF(),g=-1,m=0;u!==St.EOF()&&(p=t.step(n+B),p!==St.EOF()&&(g=p>>3,m=p&7));let S=n===0?z.emptyOpContext(-1,h):t.context(n),x=o.start,j;for(;;){switch(j=o.inst[x],x=j.out,j.op){case O.MATCH:return r===G.ANCHOR_BOTH&&n!==t.endPos()?null:(l=!0,a.length>0&&(a[0]=0,a[1]=n),i===0?[]:z.toArray(a));case O.RUNE:if(!j.matchRune(h))return null;break;case O.RUNE1:if(h!==j.runes[0])return null;break;case O.RUNE_ANY:break;case O.RUNE_ANY_NOT_NL:if(h===10)return null;break;case O.ALT:case O.ALT_MATCH:x=d_.next(j,h);continue;case O.FAIL:return null;case O.NOP:continue;case O.EMPTY_WIDTH:if((j.arg&~S)!==0)return null;continue;case O.CAPTURE:j.arg<a.length&&(a[j.arg]=n);continue;default:throw new sl("bad inst")}if(B===0)break;S=z.emptyOpContext(h,g),n+=B,h=g,B=m,h!==-1&&(p=t.step(n+B),p!==St.EOF()?(g=p>>3,m=p&7):(g=-1,m=0))}return l?i===0?[]:z.toArray(a):null}},ee,w=(ee=class{static isPseudoOp(e){return e>=ee.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===F.CODES["-"]?"\\":""}static fromRegexp(e){const t=new ee(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=ee.emptySubs(),this.runes=new Int32Array(0),this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=ee.emptySubs(),this.runes=new Int32Array(0),this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case ee.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case ee.Op.EMPTY_MATCH:e+="(?:)";break;case ee.Op.STAR:case ee.Op.PLUS:case ee.Op.QUEST:case ee.Op.REPEAT:{const t=this.subs[0];switch(t.op>ee.Op.CAPTURE||t.op===ee.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case ee.Op.STAR:e+="*";break;case ee.Op.PLUS:e+="+";break;case ee.Op.QUEST:e+="?";break;case ee.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}"}(this.flags&G.NON_GREEDY)!==0&&(e+="?");break}case ee.Op.CONCAT:for(let t of this.subs)t.op===ee.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case ee.Op.ALTERNATE:{let t="";for(let n of this.subs)e+=t,t="|",e+=n.appendTo();break}case ee.Op.LITERAL:(this.flags&G.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=z.escapeRune(t);(this.flags&G.FOLD_CASE)!==0&&(e+=")");break;case ee.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case ee.Op.ANY_CHAR:e+="(?s:.)";break;case ee.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case ee.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case ee.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==ee.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case ee.Op.BEGIN_TEXT:e+="\\A";break;case ee.Op.END_TEXT:(this.flags&G.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case ee.Op.BEGIN_LINE:e+="^";break;case ee.Op.END_LINE:e+="$";break;case ee.Op.WORD_BOUNDARY:e+="\\b";break;case ee.Op.NO_WORD_BOUNDARY:e+="\\B";break;case ee.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===Q.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const n=this.runes[t]+1,r=this.runes[t+1]-1;e+=ee.quoteIfHyphen(n),e+=z.escapeRune(n),n!==r&&(e+="-",e+=ee.quoteIfHyphen(r),e+=z.escapeRune(r))}}else for(let t=0;t<this.runes.length;t+=2){const n=this.runes[t],r=this.runes[t+1];e+=ee.quoteIfHyphen(n),e+=z.escapeRune(n),n!==r&&(e+="-",e+=ee.quoteIfHyphen(r),e+=z.escapeRune(r))}e+="]";break;default:e+=this.op}return e}maxCap(){let e=0;if(this.op===ee.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const n=t.maxCap();e<n&&(e=n)}return e}equals(e){if(!(e!==null&&e instanceof ee)||this.op!==e.op)return!1;switch(this.op){case ee.Op.END_TEXT:if((this.flags&G.WAS_DOLLAR)!==(e.flags&G.WAS_DOLLAR))return!1;break;case ee.Op.LITERAL:case ee.Op.CHAR_CLASS:if((this.flags&G.FOLD_CASE)!==(e.flags&G.FOLD_CASE))return!1;if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case ee.Op.ALTERNATE:case ee.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case ee.Op.STAR:case ee.Op.PLUS:case ee.Op.QUEST:if((this.flags&G.NON_GREEDY)!==(e.flags&G.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case ee.Op.REPEAT:if((this.flags&G.NON_GREEDY)!==(e.flags&G.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case ee.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case ee.Op.PLB:case ee.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1}return!0}},V(ee,"Op",l_(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),ee),jB=class{static walk(s,e){const t=[];let n=s,r;for(;;){if(n.subs.length===0)r=e.leaf(n);else{const i=e.enter(n);if(i.result===void 0){t.push({re:n,state:i,i:0}),n=n.subs[0];continue}r=i.result}for(;;){if(t.length===0)return r;const i=t[t.length-1];if(e.child(i.re,i.state,r,i.i),i.i++,i.state.result===void 0&&i.i<i.re.subs.length){n=i.re.subs[i.i];break}t.pop(),r=i.state.result!==void 0?i.state.result:e.leave(i.re,i.state)}}}},cC=class{constructor(s,e){const t=new Map,n=[0],r=[0],i=[0],o=[0];for(const m of s){let S=0;for(let x=0;x<m.length;x++){const j=S*e+m[x];let Y=t.get(j);Y===void 0&&(Y=n.length,t.set(j,Y),n.push(S),r.push(m[x]),i.push(i[S]+1),o.push(0)),S=Y}o[S]=1}const a=n.length,l=new Int32Array(a-1);for(let m=1;m<a;m++)l[m-1]=m;l.sort((m,S)=>n[m]-n[S]||r[m]-r[S]);const u=new Int32Array(a+1);for(let m=1;m<a;m++)u[n[m]+1]++;for(let m=0;m<a;m++)u[m+1]+=u[m];const h=new Int32Array(a-1);for(let m=0;m<l.length;m++)h[m]=r[l[m]];this.childStart=u,this.childUnit=h,this.childNode=l;const B=new Int32Array(a);for(let m=0;m<a;m++)B[m]=m;B.sort((m,S)=>i[m]-i[S]);const p=new Int32Array(a),g=Uint8Array.from(o);for(let m=1;m<a;m++){const S=B[m],x=n[S];if(x!==0){let j=p[x],Y=this.next(j,r[S]);for(;Y<0&&j!==0;)j=p[j],Y=this.next(j,r[S]);p[S]=Y>=0?Y:0}g[S]|=g[p[S]]}this.fail=p,this.match=g}next(s,e){let t=this.childStart[s],n=this.childStart[s+1];const r=this.childUnit;for(;t<n;){const i=t+n>>1,o=r[i];if(o===e)return this.childNode[i];o<e?t=i+1:n=i}return-1}advance(s,e){for(;;){const t=this.next(s,e);if(t>=0)return t;if(s===0)return 0;s=this.fail[s]}}searchUTF16(s,e,t){let n=0;for(let r=e;r<t;r++)if(n=this.advance(n,s.charCodeAt(r)),this.match[n]===1)return!0;return!1}searchUTF8(s,e,t){let n=0;for(let r=e;r<t;r++)if(n=this.advance(n,s[r]),this.match[n]===1)return!0;return!1}},$t,le=($t=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.cost=e===$t.Type.EXACT?1:0,this.allExact=!1,this.ac16=null,this.ac8=null}automaton16(){if(this.ac16===null){const e=this.subs.map(t=>{const n=new Array(t.str.length);for(let r=0;r<t.str.length;r++)n[r]=t.str.charCodeAt(r);return n});this.ac16=new cC(e,65536)}return this.ac16}automaton8(){return this.ac8===null&&(this.ac8=new cC(this.subs.map(e=>e.bytes),256)),this.ac8}eval(e,t){switch(this.type){case $t.Type.NONE:return!0;case $t.Type.EXACT:return e.hasString(this,t);case $t.Type.AND:for(let n=0;n<this.subs.length;n++)if(!this.subs[n].eval(e,t))return!1;return!0;case $t.Type.OR:if(this.allExact)return e.hasAnyString(this,t);for(let n=0;n<this.subs.length;n++)if(this.subs[n].eval(e,t))return!0;return!1;default:return!0}}},V($t,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),V($t,"MAX_SCANS",32),V($t,"MAX_AC_UNITS",1<<18),$t),hn,Tv=(hn=class{static build(e){return e?jB.walk(e,hn.WALKER):new le(le.Type.NONE)}static leaf(e){if(e.op!==w.Op.LITERAL)return new le(le.Type.NONE);if(e.runes.length===0||(e.flags&G.FOLD_CASE)!==0)return new le(le.Type.NONE);let t="";for(let r=0;r<e.runes.length;r++){if(Q.isUnsearchable(e.runes[r]))return new le(le.Type.NONE);t+=String.fromCodePoint(e.runes[r])}const n=new le(le.Type.EXACT);return n.str=t,n.bytes=z.stringToUtf8ByteArray(n.str),n}static enter(e){switch(e.op){case w.Op.CAPTURE:case w.Op.PLUS:return{sub:null};case w.Op.REPEAT:return e.min>=1?{sub:null}:{result:new le(le.Type.NONE)};case w.Op.CONCAT:return{pf:new le(le.Type.AND),subs:[]};case w.Op.ALTERNATE:return{pf:new le(le.Type.OR),subs:[]};default:return{result:new le(le.Type.NONE)}}}static child(e,t,n){if(t.subs===void 0){t.sub=n;return}if(t.pf.type===le.Type.AND){if(n.type===le.Type.NONE)return;if(n.type===le.Type.AND){for(let r=0;r<n.subs.length;r++)t.subs.push(n.subs[r]);return}t.subs.push(n);return}if(n.type===le.Type.NONE){t.result=new le(le.Type.NONE);return}if(n.type===le.Type.OR){for(let r=0;r<n.subs.length;r++)t.subs.push(n.subs[r]);return}t.subs.push(n)}static leave(e,t){if(t.subs===void 0)return t.sub;const n=t.pf,r=new Set,i=[];for(const u of t.subs){if(u.type===le.Type.EXACT){if(r.has(u.str))continue;r.add(u.str)}i.push(u)}if(n.type===le.Type.AND){const u=[];let h=0;for(const B of i)h+B.cost>le.MAX_SCANS||(u.push(B),h+=B.cost);return u.length===0?new le(le.Type.NONE):u.length===1?u[0]:(n.subs=u,n.cost=h,n)}if(i.length===0)return new le(le.Type.NONE);if(i.length===1)return i[0];n.subs=i;let o=!0,a=0,l=0;for(const u of i)u.type!==le.Type.EXACT?o=!1:l+=u.bytes.length,a+=u.cost;return o?l>le.MAX_AC_UNITS?new le(le.Type.NONE):(n.allExact=!0,n.cost=1,n):a>le.MAX_SCANS?new le(le.Type.NONE):(n.cost=a,n)}},V(hn,"WALKER",{leaf:e=>hn.leaf(e),enter:e=>hn.enter(e),child:(e,t,n)=>hn.child(e,t,n),leave:(e,t)=>hn.leave(e,t)}),hn),tn=class{constructor(s=0,e=0){this.head=s,this.tail=e}},vv=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0,this.lbInst=null}getInst(s){return this.inst[s]}numInst(){return this.inst.length}addInst(s){this.inst.push(new O(s))}markLookbehindInsts(){const s=new Uint8Array(this.inst.length),e=this.lbStarts.slice();for(;e.length>0;){const t=e.pop();if(t===0||s[t]===1)continue;s[t]=1;const n=this.inst[t];switch(n.op){case O.ALT:case O.ALT_MATCH:e.push(n.out,n.arg);break;case O.MATCH:case O.FAIL:break;default:e.push(n.out)}}this.lbInst=s}skipNop(s){let e=this.inst[s];for(;e.op===O.NOP||e.op===O.CAPTURE;)e=this.inst[s],s=e.out;return e}prefix(){let s="",e=this.skipNop(this.start);if(!O.isRuneOp(e.op)||e.runes.length!==1)return[e.op===O.MATCH,s];for(;O.isRuneOp(e.op)&&e.runes.length===1&&(e.arg&G.FOLD_CASE)===0&&!Q.isUnsearchable(e.runes[0]);)s+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===O.MATCH,s]}startCond(){let s=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case O.EMPTY_WIDTH:s|=t.arg;break;case O.FAIL:return-1;case O.CAPTURE:case O.NOP:break;default:break e}e=t.out}return s}patch(s,e){let t=s.head;for(;t!==0;){const n=this.inst[t>>1];(t&1)===0?(t=n.out,n.out=e):(t=n.arg,n.arg=e)}}append(s,e){if(s.head===0)return e;if(e.head===0)return s;const t=this.inst[s.tail>>1];return(s.tail&1)===0?t.out=e.head:t.arg=e.head,new tn(s.head,e.tail)}toString(){let s="";for(let e=0;e<this.inst.length;e++){const t=s.length;s+=e,e===this.start&&(s+="*"),s+="        ".substring(s.length-t),s+=this.inst[e],s+=`
`}return s}};const Av=new Int32Array([0,F.CODES[`
`]-1,F.CODES[`
`]+1,Q.MAX_RUNE]),lC=new Int32Array([0,Q.MAX_RUNE]);var vc=class{constructor(s=0,e=new tn,t=!1){this.i=s,this.out=e,this.nullable=t}},Rv=class tB{static compileRegexp(e){const t=new tB,n=t.compile(e);return t.prog.patch(n.out,t.newInst(O.MATCH).i),t.prog.start=n.i,t.prog.markLookbehindInsts(),t.prog}static compileSet(e){const t=new tB;if(e.length===0)return t.prog.start=t.newInst(O.FAIL).i,t.prog.markLookbehindInsts(),t.prog;let n=[];for(let i=0;i<e.length;i++){t.lbOffset=t.prog.numLb;const o=t.compile(e[i]),a=t.newInst(O.MATCH);t.prog.getInst(a.i).arg=i,t.prog.patch(o.out,a.i),n.push(o.i)}let r=n[0];for(let i=1;i<n.length;i++){const o=t.newInst(O.ALT),a=t.prog.getInst(o.i);a.out=r,a.arg=n[i],r=o.i}return t.prog.start=r,t.prog.markLookbehindInsts(),t.prog}constructor(){this.prog=new vv,this.newInst(O.FAIL),this.lbOffset=0,this.runeCache=new Map,this.walker={leaf:e=>this.leaf(e),enter:e=>this.enter(e),child:(e,t,n)=>this.child(e,t,n),leave:(e,t)=>this.leave(e,t)}}newInst(e){return this.prog.addInst(e),new vc(this.prog.numInst()-1,new tn,!0)}nop(){const e=this.newInst(O.NOP);return e.out=new tn(e.i<<1,e.i<<1),e}fail(){return new vc}cap(e){const t=this.newInst(O.CAPTURE);return t.out=new tn(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?(this.prog.patch(e.out,0),this.prog.patch(t.out,0),this.fail()):(this.prog.patch(e.out,t.i),new vc(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const n=this.newInst(O.ALT),r=this.prog.getInst(n.i);return r.out=e.i,r.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(O.ALT),r=this.prog.getInst(n.i);return t?(r.arg=e.i,n.out=new tn(n.i<<1,n.i<<1)):(r.out=e.i,n.out=new tn(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){if(e.i===0)return this.nop();const n=this.newInst(O.ALT),r=this.prog.getInst(n.i);return t?(r.arg=e.i,n.out=new tn(n.i<<1,n.i<<1)):(r.out=e.i,n.out=new tn(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.i===0?this.nop():e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return e.i===0?this.fail():new vc(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(O.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new tn(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(O.RUNE);n.nullable=!1;const r=this.prog.getInst(n.i);return r.runes=e,t&=G.FOLD_CASE,(e.length!==1||Q.simpleFold(e[0])===e[0])&&(t&=-2),r.arg=t,n.out=new tn(n.i<<1,n.i<<1),(t&G.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?r.op=O.RUNE1:e.length===2&&e[0]===0&&e[1]===Q.MAX_RUNE?r.op=O.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===F.CODES[`
`]-1&&e[2]===F.CODES[`
`]+1&&e[3]===Q.MAX_RUNE&&(r.op=O.RUNE_ANY_NOT_NL),n}lookBehind(e,t){const n=Math.sign(t)*(Math.abs(t)+this.lbOffset),r=this.newInst(O.LB_WRITE);this.prog.getInst(r.i).arg=n;const i=this.rune(lC,0),o=this.star(i,!0),a=this.cat(o,e);this.prog.patch(a.out,r.i);const l=this.newInst(O.LB_CHECK);return this.prog.getInst(l.i).arg=n,this.prog.lbStarts.push(a.i),Math.abs(n)>this.prog.numLb&&(this.prog.numLb=Math.abs(n)),l.out=new tn(l.i<<1,l.i<<1),l}compile(e){return jB.walk(e,this.walker)}leaf(e){switch(e.op){case w.Op.NO_MATCH:return this.fail();case w.Op.EMPTY_MATCH:return this.nop();case w.Op.LITERAL:{if(e.runes.length===0)return this.nop();let t=null;for(let n of e.runes){let r=this.runeCache.get(n);r===void 0&&(r=new Int32Array([n]),this.runeCache.set(n,r));const i=this.rune(r,e.flags);t=t===null?i:this.cat(t,i)}return t}case w.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case w.Op.ANY_CHAR_NOT_NL:return this.rune(Av,0);case w.Op.ANY_CHAR:return this.rune(lC,0);case w.Op.BEGIN_LINE:return this.empty(z.EMPTY_BEGIN_LINE);case w.Op.END_LINE:return this.empty(z.EMPTY_END_LINE);case w.Op.BEGIN_TEXT:return this.empty(z.EMPTY_BEGIN_TEXT);case w.Op.END_TEXT:return this.empty(z.EMPTY_END_TEXT);case w.Op.WORD_BOUNDARY:return this.empty(z.EMPTY_WORD_BOUNDARY);case w.Op.NO_WORD_BOUNDARY:return this.empty(z.EMPTY_NO_WORD_BOUNDARY);case w.Op.CONCAT:case w.Op.ALTERNATE:return this.nop();default:throw new gh("regexp: unhandled case in compile")}}enter(e){switch(e.op){case w.Op.PLB:case w.Op.NLB:case w.Op.STAR:case w.Op.PLUS:case w.Op.QUEST:return{sub:null};case w.Op.CAPTURE:return{bra:this.cap(e.cap<<1),sub:null};case w.Op.CONCAT:case w.Op.ALTERNATE:return{f:null};default:throw new gh("regexp: unhandled case in compile")}}child(e,t,n){e.op===w.Op.CONCAT?t.f=t.f===null?n:this.cat(t.f,n):e.op===w.Op.ALTERNATE?t.f=t.f===null?n:this.alt(t.f,n):t.sub=n}leave(e,t){switch(e.op){case w.Op.PLB:case w.Op.NLB:return this.lookBehind(t.sub,e.lb);case w.Op.CAPTURE:{const n=this.cap(e.cap<<1|1);return this.cat(this.cat(t.bra,t.sub),n)}case w.Op.STAR:return this.star(t.sub,(e.flags&G.NON_GREEDY)!==0);case w.Op.PLUS:return this.plus(t.sub,(e.flags&G.NON_GREEDY)!==0);case w.Op.QUEST:return this.quest(t.sub,(e.flags&G.NON_GREEDY)!==0);case w.Op.CONCAT:case w.Op.ALTERNATE:return t.f;default:throw new gh("regexp: unhandled case in compile")}}},We,Sv=(We=class{static simplify(e){return e===null?null:jB.walk(e,We.WALKER)}static leaf(e){if(e.op===w.Op.CHAR_CLASS){if(e.runes===null)return e;if(e.runes.length===0)return new w(w.Op.NO_MATCH);if(e.runes.length===2&&e.runes[0]===0&&e.runes[1]===Q.MAX_RUNE)return new w(w.Op.ANY_CHAR);if(e.runes.length===4&&e.runes[0]===0&&e.runes[1]===F.CODES[`
`]-1&&e.runes[2]===F.CODES[`
`]+1&&e.runes[3]===Q.MAX_RUNE)return new w(w.Op.ANY_CHAR_NOT_NL)}return e}static enter(e){switch(e.op){case w.Op.PLB:case w.Op.NLB:case w.Op.CAPTURE:case w.Op.STAR:case w.Op.PLUS:case w.Op.QUEST:return{sub:null};case w.Op.CONCAT:case w.Op.ALTERNATE:return{subs:[],changed:!1};case w.Op.REPEAT:return e.min===0&&e.max===0?{result:new w(w.Op.EMPTY_MATCH)}:{sub:null};default:return{result:e}}}static child(e,t,n,r){if(t.subs===void 0){t.sub=n;return}if(n!==e.subs[r]&&(t.changed=!0),e.op===w.Op.CONCAT){if(n.op===w.Op.NO_MATCH){t.result=new w(w.Op.NO_MATCH);return}if(n.op===w.Op.EMPTY_MATCH){t.changed=!0;return}if(n.op===w.Op.CONCAT){t.changed=!0;for(let i=0;i<n.subs.length;i++)t.subs.push(n.subs[i]);return}}else{if(n.op===w.Op.NO_MATCH){t.changed=!0;return}if(n.op===w.Op.ALTERNATE){t.changed=!0;for(let i=0;i<n.subs.length;i++)t.subs.push(n.subs[i]);return}}t.subs.push(n)}static leave(e,t){switch(e.op){case w.Op.PLB:case w.Op.NLB:case w.Op.CAPTURE:{const n=t.sub;if(n!==e.subs[0]){const r=w.fromRegexp(e);return r.runes=new Int32Array(0),r.subs=[n],r}return e}case w.Op.CONCAT:case w.Op.ALTERNATE:if(t.changed){const n=t.subs;if(n.length===0)return new w(e.op===w.Op.CONCAT?w.Op.EMPTY_MATCH:w.Op.NO_MATCH);if(n.length===1)return n[0];const r=w.fromRegexp(e);return r.runes=new Int32Array(0),r.subs=n,r}return e;case w.Op.STAR:case w.Op.PLUS:case w.Op.QUEST:return We.simplify1(e.op,e.flags,t.sub,e);case w.Op.REPEAT:return We.simplifyRepeat(e,t.sub);default:return e}}static simplifyRepeat(e,t){if(e.max===-1){if(e.min===0)return We.simplify1(w.Op.STAR,e.flags,t,null);if(e.min===1)return We.simplify1(w.Op.PLUS,e.flags,t,null);const r=[];for(let i=0;i<e.min-1;i++)r.push(t);return r.push(We.simplify1(w.Op.PLUS,e.flags,t,null)),We.concat(r)}if(e.min===1&&e.max===1)return t;let n=null;if(e.min>0){n=[];for(let r=0;r<e.min;r++)n.push(t)}if(e.max>e.min){let r=We.simplify1(w.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++)r=We.simplify1(w.Op.QUEST,e.flags,We.concat([t,r]),null);if(n===null)return r;n.push(r)}return n!==null?We.concat(n):new w(w.Op.NO_MATCH)}static concat(e){const t=[];for(let r=0;r<e.length;r++){const i=e[r];if(i.op===w.Op.NO_MATCH)return new w(w.Op.NO_MATCH);if(i.op!==w.Op.EMPTY_MATCH){if(i.op===w.Op.CONCAT){for(let o=0;o<i.subs.length;o++)t.push(i.subs[o]);continue}t.push(i)}}if(t.length===0)return new w(w.Op.EMPTY_MATCH);if(t.length===1)return t[0];const n=new w(w.Op.CONCAT);return n.subs=t,n}static simplify1(e,t,n,r){if(n.op===w.Op.EMPTY_MATCH)return n;if(n.op===w.Op.NO_MATCH)return e===w.Op.PLUS?n:new w(w.Op.EMPTY_MATCH);if(e===n.op&&(t&G.NON_GREEDY)===(n.flags&G.NON_GREEDY))return n;if(r!==null&&r.op===e&&(r.flags&G.NON_GREEDY)===(t&G.NON_GREEDY)&&n===r.subs[0])return r;const i=new w(e);return i.flags=t,i.subs=[n],i}},V(We,"WALKER",{leaf:e=>We.leaf(e),enter:e=>We.enter(e),child:(e,t,n,r)=>We.child(e,t,n,r),leave:(e,t)=>We.leave(e,t)}),We),_e=class{constructor(s,e){this.sign=s,this.cls=e}};const uC=[48,57],hC=[9,10,12,13,32,32],BC=[48,57,65,90,95,95,97,122],dC=new Map([["\\d",new _e(1,uC)],["\\D",new _e(-1,uC)],["\\s",new _e(1,hC)],["\\S",new _e(-1,hC)],["\\w",new _e(1,BC)],["\\W",new _e(-1,BC)]]),fC=[48,57,65,90,97,122],pC=[65,90,97,122],CC=[0,127],gC=[9,9,32,32],mC=[0,31,127,127],_C=[48,57],EC=[33,126],yC=[97,122],IC=[32,126],DC=[33,47,58,64,91,96,123,126],wC=[9,13,32,32],TC=[65,90],vC=[48,57,65,90,95,95,97,122],AC=[48,57,65,70,97,102],RC=new Map([["[:alnum:]",new _e(1,fC)],["[:^alnum:]",new _e(-1,fC)],["[:alpha:]",new _e(1,pC)],["[:^alpha:]",new _e(-1,pC)],["[:ascii:]",new _e(1,CC)],["[:^ascii:]",new _e(-1,CC)],["[:blank:]",new _e(1,gC)],["[:^blank:]",new _e(-1,gC)],["[:cntrl:]",new _e(1,mC)],["[:^cntrl:]",new _e(-1,mC)],["[:digit:]",new _e(1,_C)],["[:^digit:]",new _e(-1,_C)],["[:graph:]",new _e(1,EC)],["[:^graph:]",new _e(-1,EC)],["[:lower:]",new _e(1,yC)],["[:^lower:]",new _e(-1,yC)],["[:print:]",new _e(1,IC)],["[:^print:]",new _e(-1,IC)],["[:punct:]",new _e(1,DC)],["[:^punct:]",new _e(-1,DC)],["[:space:]",new _e(1,wC)],["[:^space:]",new _e(-1,wC)],["[:upper:]",new _e(1,TC)],["[:^upper:]",new _e(-1,TC)],["[:word:]",new _e(1,vC)],["[:^word:]",new _e(-1,vC)],["[:xdigit:]",new _e(1,AC)],["[:^xdigit:]",new _e(-1,AC)]]);var or=class Gc{static charClassToString(e,t){let n="[";for(let r=0;r<t;r+=2){r>0&&(n+=" ");const i=e[r],o=e[r+1];i===o?n+=`0x${i.toString(16)}`:n+=`0x${i.toString(16)}-0x${o.toString(16)}`}return n+="]",n}static sortRanges(e,t){const n=t>>1,r=new Array(n);for(let o=0;o<n;o++)r[o]=o;r.sort((o,a)=>e[2*o]-e[2*a]||e[2*a+1]-e[2*o+1]);const i=e.slice(0,t);for(let o=0;o<n;o++)e[2*o]=i[2*r[o]],e[2*o+1]=i[2*r[o]+1]}constructor(e=z.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.r instanceof Int32Array?this.len===this.r.length?this.r:this.r.subarray(0,this.len):new Int32Array(this.len===this.r.length?this.r:this.r.slice(0,this.len))}toGrowableArray(){return Array.isArray(this.r)?(this.r.length=this.len,this.r):Array.from(this.r.subarray(0,this.len))}cleanClass(){if(this.len<4)return this;Gc.sortRanges(this.r,this.len);let e=2;for(let t=2;t<this.len;t+=2){const n=this.r[t],r=this.r[t+1];if(n<=this.r[e-1]+1){r>this.r[e-1]&&(this.r[e-1]=r);continue}this.r[e]=n,this.r[e+1]=r,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&G.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let n=2;n<=4;n+=2)if(this.len>=n){const r=this.r[this.len-n],i=this.r[this.len-n+1];if(e<=i+1&&r<=t+1)return e<r&&(this.r[this.len-n]=e),t>i&&(this.r[this.len-n+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=Q.MIN_FOLD&&t>=Q.MAX_FOLD)return this.appendRange(e,t);if(t<Q.MIN_FOLD||e>Q.MAX_FOLD)return this.appendRange(e,t);e<Q.MIN_FOLD&&(this.appendRange(e,Q.MIN_FOLD-1),e=Q.MIN_FOLD),t>Q.MAX_FOLD&&(this.appendRange(Q.MAX_FOLD+1,t),t=Q.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let r=Q.simpleFold(n);r!==n;r=Q.simpleFold(r))this.appendRange(r,r)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const r=e[n],i=e[n+1];t<=r-1&&this.appendRange(t,r-1),t=i+1}return t<=Q.MAX_RUNE&&this.appendRange(t,Q.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),r=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(n,r);continue}for(let o=n;o<=r;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const r=e.getLo(n),i=e.getHi(n),o=e.getStride(n);if(o===1){t<=r-1&&this.appendRange(t,r-1),t=i+1;continue}for(let a=r;a<=i;a+=o)t<=a-1&&this.appendRange(t,a-1),t=a+1}return t<=Q.MAX_RUNE&&this.appendRange(t,Q.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const r=this.r[n],i=this.r[n+1];e<=r-1&&(this.r[t]=e,this.r[t+1]=r-1,t+=2),e=i+1}return this.len=t,e<=Q.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=Q.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let n=e.cls;return t&&(n=new Gc().appendFoldedClass(n).cleanClass().toArray()),this.appendClassWithSign(n,e.sign)}toString(){return Gc.charClassToString(this.r,this.len)}},Pv=class{constructor(s){this.str=s,this.position=0}pos(){return this.position}rewindTo(s){this.position=s}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(s){this.position+=s}skipString(s){this.position+=s.length}pop(){const s=this.str.codePointAt(this.position);return this.position+=z.charCount(s),s}lookingAt(s){return this.str.startsWith(s,this.position)}rest(){return this.str.substring(this.position)}from(s){return this.str.substring(s,this.position)}toString(){return this.rest()}},q,bv=(q=class{static unicodeTable(e){return e==="Any"?{tab:q.ANY_TABLE,fold:q.ANY_TABLE,sign:1}:e==="Ascii"?{tab:q.ASCII_TABLE,fold:q.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:zt.CATEGORIES.get("Cn"),fold:zt.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:zt.CATEGORIES.get("LC"),fold:zt.FOLD_CATEGORIES.get("LC"),sign:1}:zt.CATEGORIES.has(e)?{tab:zt.CATEGORIES.get(e),fold:zt.FOLD_CATEGORIES.get(e),sign:1}:zt.SCRIPTS.has(e)?{tab:zt.SCRIPTS.get(e),fold:zt.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<Q.MIN_FOLD||e>Q.MAX_FOLD)return e;let t=e;const n=e;for(e=Q.simpleFold(e);e!==n;e=Q.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===w.Op.EMPTY_MATCH)return null;if(e.op===w.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===w.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new w(w.Op.LITERAL);return n.flags=t,n.runes=z.stringToRunes(e),n}static parse(e,t){return new q(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const n=q.parseInt(e);if(n===-1||!e.more())return-1;let r;if(!e.lookingAt(","))r=n;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))r=-1;else if((r=q.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),n<0||n>1e3||r===-2||r>1e3||r>=0&&n>r)throw new Se(q.ERR_INVALID_REPEAT_SIZE,e.from(t));return n<<16|r&Q.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==F.CODES._&&!z.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=F.CODES[0]&&e.peek()<=F.CODES[9];)e.skip(1);const n=e.from(t);return n.length===0||n.length>1&&n.codePointAt(0)===F.CODES[0]?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===w.Op.LITERAL&&e.runes.length===1||e.op===w.Op.CHAR_CLASS||e.op===w.Op.ANY_CHAR_NOT_NL||e.op===w.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case w.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case w.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case w.Op.ANY_CHAR_NOT_NL:return t!==F.CODES[`
`];case w.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case w.Op.ANY_CHAR:break;case w.Op.ANY_CHAR_NOT_NL:q.matchRune(t,F.CODES[`
`])&&(e.op=w.Op.ANY_CHAR);break;case w.Op.CHAR_CLASS:{const n=new or(Array.isArray(e.runes)?e.runes:Array.from(e.runes));t.op===w.Op.LITERAL?n.appendLiteral(t.runes[0],t.flags):n.appendClass(t.runes),e.runes=n.toGrowableArray();break}case w.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=w.Op.CHAR_CLASS,e.runes=new or().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toGrowableArray()}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new Se(q.ERR_TRAILING_BACKSLASH);let n=e.pop();e:switch(n){case F.CODES[1]:case F.CODES[2]:case F.CODES[3]:case F.CODES[4]:case F.CODES[5]:case F.CODES[6]:case F.CODES[7]:if(!e.more()||e.peek()<F.CODES[0]||e.peek()>F.CODES[7])break;case F.CODES[0]:{let r=n-F.CODES[0];for(let i=1;i<3&&!(!e.more()||e.peek()<F.CODES[0]||e.peek()>F.CODES[7]);i++)r=r*8+e.peek()-F.CODES[0],e.skip(1);return r}case F.CODES.x:{if(!e.more())break;if(n=e.pop(),n===F.CODES["{"]){let o=0,a=0;for(;;){if(!e.more())break e;if(n=e.pop(),n===F.CODES["}"])break;const l=z.unhex(n);if(l<0||(a=a*16+l,a>Q.MAX_RUNE))break e;o++}if(o===0)break e;return a}const r=z.unhex(n);if(!e.more())break;n=e.pop();const i=z.unhex(n);if(r<0||i<0)break;return r*16+i}case F.CODES.a:return F.CODES["\x07"];case F.CODES.f:return F.CODES["\f"];case F.CODES.n:return F.CODES[`
`];case F.CODES.r:return F.CODES["\r"];case F.CODES.t:return F.CODES["	"];case F.CODES.v:return F.CODES["\v"];default:if(n<=Q.MAX_ASCII&&!z.isalnum(n))return n}throw new Se(q.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new Se(q.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?q.parseEscape(e):e.pop()}static hasCapture(e){if(e===null)return!1;if(e.op===w.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(q.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new w(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>q.MAX_RUNES)throw new Se(q.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===w.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(q.MAX_SIZE/this.repeats)?this.repeats=q.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(q.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>q.MAX_SIZE)throw new Se(q.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case w.Op.LITERAL:n=e.runes.length;break;case w.Op.PLB:case w.Op.NLB:case w.Op.CAPTURE:case w.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case w.Op.PLUS:case w.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case w.Op.CONCAT:for(let r of e.subs)n=n+this.calcSize(r);break;case w.Op.ALTERNATE:for(let r of e.subs)n=n+this.calcSize(r);e.subs.length>1&&(n=n+e.subs.length-1);break;case w.Op.REPEAT:{let r=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?n=2+r:n=1+e.min*r;break}n=e.max*r+(e.max-e.min);break}}return n=Math.max(1,n),this.size===null&&(this.size=new Map),this.size.set(e,n),n}checkHeight(e){if(!(this.numRegexp<q.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>q.MAX_HEIGHT)throw new Se(q.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let n=1;for(let r of e.subs){const i=this.calcHeight(r);n<1+i&&(n=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!w.isPseudoOp(this.stack[t-1].op);)t--;return this.stack.splice(t,e-t)}push(e){if(this.numRunes+=e.runes.length,e.op===w.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=w.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===w.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&Q.simpleFold(e.runes[0])===e.runes[2]&&Q.simpleFold(e.runes[2])===e.runes[0]||e.op===w.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&Q.simpleFold(e.runes[0])===e.runes[1]&&Q.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|G.FOLD_CASE))return null;e.op=w.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|G.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const n=this.stack.length;if(n<2)return!1;const r=this.stack[n-1],i=this.stack[n-2];if(r.op!==w.Op.LITERAL||i.op!==w.Op.LITERAL||(r.flags&G.FOLD_CASE)!==(i.flags&G.FOLD_CASE))return!1;Array.isArray(i.runes)||(i.runes=Array.from(i.runes));for(let o=0;o<r.runes.length;o++)i.runes.push(r.runes[o]);return e>=0?(r.runes=[e],r.flags=t,!0):(this.pop(),this.reuse(r),!1)}newLiteral(e,t){const n=this.newRegexp(w.Op.LITERAL);return n.flags=t,(t&G.FOLD_CASE)!==0&&(e=q.minFoldRune(e)),n.runes=[e],n}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,n,r,i,o){let a=this.flags;if((a&G.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),a^=G.NON_GREEDY),o!==-1))throw new Se(q.ERR_INVALID_REPEAT_OP,i.from(o));const l=this.stack.length;if(l===0)throw new Se(q.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const u=this.stack[l-1];if(w.isPseudoOp(u.op))throw new Se(q.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const h=this.newRegexp(e);if(h.min=t,h.max=n,h.flags=a,h.subs=[u],this.stack[l-1]=h,this.checkLimits(h),e===w.Op.REPEAT&&(t>=2||n>=2)&&!this.repeatIsValid(h,1e3))throw new Se(q.ERR_INVALID_REPEAT_SIZE,i.from(r))}repeatIsValid(e,t){if(e.op===w.Op.REPEAT){let n=e.max;if(n===0)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(w.Op.EMPTY_MATCH)):this.push(this.collapse(e,w.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(w.Op.NO_MATCH)):this.push(this.collapse(e,w.Op.ALTERNATE))}cleanAlt(e){e.op===w.Op.CHAR_CLASS&&(e.runes=new or(Array.from(e.runes)).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===Q.MAX_RUNE?(e.runes=new Int32Array(0),e.op=w.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===F.CODES[`
`]-1&&e.runes[2]===F.CODES[`
`]+1&&e.runes[3]===Q.MAX_RUNE&&(e.runes=new Int32Array(0),e.op=w.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let n=0;for(let a of e)n+=a.op===t?a.subs.length:1;let r=new Array(n).fill(null),i=0;for(let a of e)if(a.op===t){for(let l=0;l<a.subs.length;l++)r[i++]=a.subs[l];this.reuse(a)}else r[i++]=a;let o=this.newRegexp(t);if(o.subs=r,t===w.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const a=o;o=o.subs[0],this.reuse(a)}return o}factor(e){if(e.length<2)return e;let t=0,n=e.length,r=0,i=null,o=0,a=0,l=0;for(let h=0;h<=n;h++){let B=null,p=0,g=0;if(h<n){let m=e[t+h];if(m.op===w.Op.CONCAT&&m.subs.length>0&&(m=m.subs[0]),m.op===w.Op.LITERAL&&(B=m.runes,p=m.runes.length,g=m.flags&G.FOLD_CASE),g===a){let S=0;for(;S<o&&S<p&&i[S]===B[S];)S++;if(S>0){o=S;continue}}}if(h!==l)if(h===l+1)e[r++]=e[t+l];else{const m=this.newRegexp(w.Op.LITERAL);m.flags=a,m.runes=i.slice(0,o);for(let j=l;j<h;j++)e[t+j]=this.removeLeadingString(e[t+j],o),this.checkLimits(e[t+j]);const S=this.collapse(e.slice(t+l,t+h),w.Op.ALTERNATE),x=this.newRegexp(w.Op.CONCAT);x.subs=[m,S],e[r++]=x}l=h,i=B,o=p,a=g}n=r,t=0,l=0,r=0;let u=null;for(let h=0;h<=n;h++){let B=null;if(!(h<n&&(B=q.leadingRegexp(e[t+h]),u!==null&&u.equals(B)&&(q.isCharClass(u)||u.op===w.Op.REPEAT&&u.min===u.max&&q.isCharClass(u.subs[0]))))){if(h!==l)if(h===l+1)e[r++]=e[t+l];else{const p=u;for(let S=l;S<h;S++){const x=S!==l;e[t+S]=this.removeLeadingRegexp(e[t+S],x),this.checkLimits(e[t+S])}const g=this.collapse(e.slice(t+l,t+h),w.Op.ALTERNATE),m=this.newRegexp(w.Op.CONCAT);m.subs=[p,g],e[r++]=m}l=h,u=B}}n=r,t=0,l=0,r=0;for(let h=0;h<=n;h++)if(!(h<n&&q.isCharClass(e[t+h]))){if(h!==l)if(h===l+1)e[r++]=e[t+l];else{let B=l;for(let g=l+1;g<h;g++){const m=e[t+B],S=e[t+g];(m.op<S.op||m.op===S.op&&(m.runes!==null?m.runes.length:0)<(S.runes!==null?S.runes.length:0))&&(B=g)}const p=e[t+l];e[t+l]=e[t+B],e[t+B]=p;for(let g=l+1;g<h;g++)q.mergeCharClass(e[t+l],e[t+g]),this.reuse(e[t+g]);this.cleanAlt(e[t+l]),e[r++]=e[t+l]}h<n&&(e[r++]=e[t+h]),l=h+1}n=r,t=0,l=0,r=0;for(let h=0;h<n;++h)h+1<n&&e[t+h].op===w.Op.EMPTY_MATCH&&e[t+h+1].op===w.Op.EMPTY_MATCH||(e[r++]=e[t+h]);return n=r,t=0,e.slice(t,n)}removeLeadingString(e,t){if(e.op===w.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===w.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=w.Op.EMPTY_MATCH,e.subs=w.emptySubs();break;case 2:{const r=e;e=e.subs[1],this.reuse(r);break}default:e.subs=e.subs.slice(1,e.subs.length)}return e}return e.op===w.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=w.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===w.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=w.Op.EMPTY_MATCH,e.subs=w.emptySubs();break;case 1:{const n=e;e=e.subs[0],this.reuse(n);break}}return e}return t&&this.reuse(e),this.newRegexp(w.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&G.LITERAL)!==0)return q.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,n=-1;const r=new Pv(this.wholeRegexp);for(;r.more();){let i=-1;e:switch(r.peek()){case F.CODES["("]:if((this.flags&G.LOOKBEHIND)!==0){if(r.lookingAt("(?<=")){this.parsePosLookBehind(),r.skip(4);break}if(r.lookingAt("(?<!")){this.parseNegLookBehind(),r.skip(4);break}}if((this.flags&G.PERL_X)!==0&&r.lookingAt("(?")){this.parsePerlFlags(r);break}this.op(w.Op.LEFT_PAREN).cap=++this.numCap,r.skip(1);break;case F.CODES["|"]:this.parseVerticalBar(),r.skip(1);break;case F.CODES[")"]:this.parseRightParen(),r.skip(1);break;case F.CODES["^"]:(this.flags&G.ONE_LINE)!==0?this.op(w.Op.BEGIN_TEXT):this.op(w.Op.BEGIN_LINE),r.skip(1);break;case F.CODES.$:(this.flags&G.ONE_LINE)!==0?this.op(w.Op.END_TEXT).flags|=G.WAS_DOLLAR:this.op(w.Op.END_LINE),r.skip(1);break;case F.CODES["."]:(this.flags&G.DOT_NL)!==0?this.op(w.Op.ANY_CHAR):this.op(w.Op.ANY_CHAR_NOT_NL),r.skip(1);break;case F.CODES["["]:this.parseClass(r);break;case F.CODES["*"]:case F.CODES["+"]:case F.CODES["?"]:{i=r.pos();let o=null;switch(r.pop()){case F.CODES["*"]:o=w.Op.STAR;break;case F.CODES["+"]:o=w.Op.PLUS;break;case F.CODES["?"]:o=w.Op.QUEST}this.repeat(o,t,n,i,r,e);break}case F.CODES["{"]:{const o=r.pos(),a=q.parseRepeat(r);if(a<0){r.rewindTo(o),this.literal(r.pop());break}i=o,t=a>>16,n=(a&Q.MAX_BMP)<<16>>16,this.repeat(w.Op.REPEAT,t,n,i,r,e);break}case F.CODES["\\"]:{const o=r.pos();if(r.skip(1),(this.flags&G.PERL_X)!==0&&r.more())switch(r.pop()){case F.CODES.A:this.op(w.Op.BEGIN_TEXT);break e;case F.CODES.b:this.op(w.Op.WORD_BOUNDARY);break e;case F.CODES.B:this.op(w.Op.NO_WORD_BOUNDARY);break e;case F.CODES.C:throw new Se(q.ERR_INVALID_ESCAPE,"\\C");case F.CODES.Q:{let u=r.rest();const h=u.indexOf("\\E");h>=0?(u=u.substring(0,h),r.skipString(u),r.skipString("\\E")):r.skipString(u);let B=0;for(;B<u.length;){const p=u.codePointAt(B);this.literal(p),B+=z.charCount(p)}break e}case F.CODES.z:this.op(w.Op.END_TEXT);break e;default:r.rewindTo(o)}else r.rewindTo(o);const a=this.newRegexp(w.Op.CHAR_CLASS);if(a.flags=this.flags,r.lookingAt("\\p")||r.lookingAt("\\P")){const u=new or;if(this.parseUnicodeClass(r,u)){a.runes=u.toArray(),this.push(a);break e}}const l=new or;if(this.parsePerlClassEscape(r,l)){a.runes=l.toArray(),this.push(a);break e}r.rewindTo(o),this.reuse(a),this.literal(q.parseEscape(r));break}default:this.literal(r.pop())}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new Se(q.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),n=e.rest();if(n.startsWith("(?P<")||n.startsWith("(?<")){const a=n.charAt(2)==="P"?4:3,l=n.indexOf(">");if(l<0)throw new Se(q.ERR_INVALID_NAMED_CAPTURE,n);const u=n.substring(a,l);if(e.skipString(u),e.skip(a+1),!q.isValidCaptureName(u))throw new Se(q.ERR_INVALID_NAMED_CAPTURE,n.substring(0,l+1));const h=this.op(w.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[u])throw new Se(q.ERR_DUPLICATE_NAMED_CAPTURE,u);this.namedGroups[u]=this.numCap,h.name=u;return}e.skip(2);let r=this.flags,i=1,o=!1;e:for(;e.more();){const a=e.pop();switch(a){case F.CODES.i:r|=G.FOLD_CASE,o=!0;break;case F.CODES.m:r&=-17,o=!0;break;case F.CODES.s:r|=G.DOT_NL,o=!0;break;case F.CODES.U:r|=G.NON_GREEDY,o=!0;break;case F.CODES["-"]:if(i<0)break e;i=-1,r=~r,o=!1;break;case F.CODES[":"]:case F.CODES[")"]:if(i<0){if(!o)break e;r=~r}a===F.CODES[":"]&&this.op(w.Op.LEFT_PAREN),this.flags=r;return;default:break e}}throw new Se(q.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(w.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(w.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(w.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===w.Op.VERTICAL_BAR&&q.isCharClass(this.stack[e-1])&&q.isCharClass(this.stack[e-3])){let t=this.stack[e-1],n=this.stack[e-3];if(t.op>n.op){const r=n;n=t,t=r,this.stack[e-3]=n}return q.mergeCharClass(n,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],n=this.stack[e-2];if(n.op===w.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Se(q.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==w.Op.LEFT_PAREN)throw new Se(q.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(q.hasCapture(e))throw new Se(q.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=w.Op.PLB:t.op=w.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=w.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const n=e.pos();if((this.flags&G.PERL_X)===0||!e.more()||e.pop()!==F.CODES["\\"]||!e.more())return!1;e.pop();const r=e.from(n),i=dC.has(r)?dC.get(r):null;return i===null?!1:(t.appendGroup(i,(this.flags&G.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const n=e.rest(),r=n.indexOf(":]");if(r<0)return!1;const i=n.substring(0,r+2);e.skipString(i);const o=RC.has(i)?RC.get(i):null;if(o===null)throw new Se(q.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&G.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const n=e.pos();if((this.flags&G.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let r=1,i=e.pop();if(i===F.CODES.P&&(r=-1),!e.more())throw e.rewindTo(n),new Se(q.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==F.CODES["{"])o=z.runeToString(i);else{const h=e.rest(),B=h.indexOf("}");if(B<0)throw e.rewindTo(n),new Se(q.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,B),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===F.CODES["^"]&&(r=0-r,o=o.substring(1));const a=q.unicodeTable(o);if(a===null)throw new Se(q.ERR_INVALID_CHAR_RANGE,e.from(n));a.sign<0&&(r=0-r);const l=a.tab,u=a.fold;if((this.flags&G.FOLD_CASE)===0||u===null)t.appendTableWithSign(l,r);else{const h=new or().appendTable(l).appendTable(u).cleanClass().toArray();t.appendClassWithSign(Array.from(h),r)}return!0}parseClass(e){const t=e.pos();e.skip(1);const n=this.newRegexp(w.Op.CHAR_CLASS);n.flags=this.flags;const r=new or;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&G.CLASS_NL)===0&&r.appendRange(F.CODES[`
`],F.CODES[`
`]));let o=!0;for(;!e.more()||e.peek()!==F.CODES["]"]||o;){if(e.more()&&e.lookingAt("-")&&(this.flags&G.PERL_X)===0&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new Se(q.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const a=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,r))continue;e.rewindTo(a)}if(this.parseUnicodeClass(e,r)||this.parsePerlClassEscape(e,r))continue;e.rewindTo(a);const l=q.parseClassChar(e,t);let u=l;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(u=q.parseClassChar(e,t),u<l)throw new Se(q.ERR_INVALID_CHAR_RANGE,e.from(a))}(this.flags&G.FOLD_CASE)===0?r.appendRange(l,u):r.appendFoldedRange(l,u)}e.skip(1),r.cleanClass(),i<0&&r.negateClass(),n.runes=r.toArray(),this.push(n)}},V(q,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),V(q,"ERR_INVALID_CHAR_RANGE","invalid character class range"),V(q,"ERR_INVALID_ESCAPE","invalid escape sequence"),V(q,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),V(q,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),V(q,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),V(q,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),V(q,"ERR_MISSING_BRACKET","missing closing ]"),V(q,"ERR_MISSING_PAREN","missing closing )"),V(q,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),V(q,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),V(q,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),V(q,"ERR_UNEXPECTED_PAREN","unexpected )"),V(q,"ERR_NESTING_DEPTH","expression nests too deeply"),V(q,"ERR_LARGE","expression too large"),V(q,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),V(q,"MAX_HEIGHT",1e3),V(q,"MAX_SIZE",1398101),V(q,"MAX_RUNES",33554432),V(q,"ANY_TABLE",new _(new Uint32Array([0,Q.MAX_RUNE,1]))),V(q,"ASCII_TABLE",new _(new Uint32Array([0,127,1]))),V(q,"ASCII_FOLD_TABLE",new _(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),q),Nv=class cr{static initTest(e){const t=cr.compile(e),n=new cr(t.expr,t.prog,t.numSubexp,t.longest);return n.cond=t.cond,n.prefix=t.prefix,n.prefixUTF8=t.prefixUTF8,n.prefixComplete=t.prefixComplete,n.prefixRune=t.prefixRune,n.prefilter=t.prefilter,n.namedGroups=t.namedGroups,n}static compile(e){return cr.compileImpl(e,G.PERL,!1)}static compilePOSIX(e){return cr.compileImpl(e,G.POSIX,!0)}static compileImpl(e,t,n){let r=bv.parse(e,t);const i=r.maxCap(),o=r.namedGroups;r=Sv.simplify(r);const a=Tv.build(r),l=Rv.compileRegexp(r),u=new cr(e,l,i,n);u.prefilter=a.type===le.Type.NONE?null:a;const[h,B]=l.prefix();return u.prefixComplete=h,u.prefix=B,u.prefixUTF8=z.stringToUtf8ByteArray(u.prefix),u.prefix.length>0&&(u.prefixRune=u.prefix.codePointAt(0)),u.namedGroups=o,u}static match(e,t){return cr.compile(e).match(t)}constructor(e,t,n=0,r=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=r,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.namedGroups=Object.create(null),this.machinePool=[],this.lazyDFA=null,this.onepass=aC.compile(this.prog),this.prefilter=null}get dfa(){return this.lazyDFA===null&&(this.lazyDFA=new h_(this.prog)),this.lazyDFA}matchPrefixComplete(e,t,n,r){if((n===G.ANCHOR_START||n===G.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const a=e.prefixLength(this);if(n===G.UNANCHORED){const l=e.index(this,t);if(l<0)return null;i=t+l,o=i+a}else if(n===G.ANCHOR_BOTH){if(e.endPos()!==a||e.index(this,0)!==0)return null;i=0,o=a}else if(n===G.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=a}if(i<0)return null;if(r>0){const l=new Int32Array(r).fill(-1);return l[0]=i,l[1]=o,Array.from(l)}return[]}createLookbehindState(){return this.prog.numLb>0?new dv(this.prog):null}executeEngine(e,t,n,r,i=null){if(this.prefixComplete&&(r===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,n,r);if(this.prefilter!==null&&n===G.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return aC.execute(this,e,t,n,r);if(r>0)return this.prog.numLb===0&&e.endPos()<=Tc.maxBitStateLen(this.prog)?Tc.execute(this,e,t,n,r):this.doExecuteNFA(e,t,n,r,i);if(this.prog.numLb===0){const o=this.dfa.match(e,t,n);if(o!==null)return o?[]:null;if(e.endPos()<=Tc.maxBitStateLen(this.prog))return Tc.execute(this,e,t,n,r)}return this.doExecuteNFA(e,t,n,r,i)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,r,i=null){let o=this.get();o||(o=fv.fromRE2(this)),o.init(r);const a=o.match(e,t,n,i)?o.submatches():null;return this.put(o),a}match(e){return this.executeEngine(be.fromUTF16(e),0,G.UNANCHORED,0)!==null}matchWithGroup(e,t,n,r,i,o=null){return e instanceof Ar||(z.isByteArray(e)?e=dr.utf8(e):e=dr.utf16(e)),this.matchMachineInput(e,t,n,r,i,o)}matchMachineInput(e,t,n,r,i,o=null){if(t>n)return[!1,null];const a=e.isUTF16Encoding()?be.fromUTF16(e.asCharSequence(),0,n):be.fromUTF8(e.asBytes(),0,n),l=this.executeEngine(a,t,r,2*i,o);return l===null?[!1,null]:[!0,l]}matchUTF8(e){return this.executeEngine(be.fromUTF8(e),0,G.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let r=0,i=0,o="";const a=be.fromUTF16(e),l=this.createLookbehindState();let u=0;for(;i<=e.length;){const h=this.executeEngine(a,i,G.UNANCHORED,2,l);if(h===null||h.length===0)break;o+=e.substring(r,h[0]),(h[1]>r||h[0]===0)&&(o+=t(e.substring(h[0],h[1])),u++),r=h[1];const B=a.step(i)&7;if(i+B>h[1]?i+=B:i+1>h[1]?i++:i=h[1],u>=n)break}return o+=e.substring(r),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let n=new Array(t).fill(-1);for(let r=0;r<e.length;r++)n[r]=e[r];e=n}return e}allMatches(e,t,n=r=>r){let r=[];const i=e.endPos();t<0&&(t=i+1);let o=0,a=0,l=-1;const u=this.createLookbehindState();for(;a<t&&o<=i;){const h=this.executeEngine(e,o,G.UNANCHORED,this.prog.numCap,u);if(h===null||h.length===0)break;let B=!0;if(h[1]===o){h[0]===l&&(B=!1);const p=e.step(o);p<0?o=i+1:o+=p&7}else o=h[1];l=h[1],B&&(r.push(n(this.pad(h))),a++)}return r}findUTF8(e){const t=this.executeEngine(be.fromUTF8(e),0,G.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(be.fromUTF8(e),0,G.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(be.fromUTF16(e),0,G.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(be.fromUTF16(e),0,G.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(be.fromUTF8(e),0,G.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let r=0;r<n.length;r++)2*r<t.length&&t[2*r]>=0&&(n[r]=e.slice(t[2*r],t[2*r+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(be.fromUTF8(e),0,G.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(be.fromUTF16(e),0,G.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let r=0;r<n.length;r++)2*r<t.length&&t[2*r]>=0&&(n[r]=e.substring(t[2*r],t[2*r+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(be.fromUTF16(e),0,G.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches(be.fromUTF8(e),t,r=>e.slice(r[0],r[1]));return n.length===0?null:n}findAllUTF8Index(e,t){const n=this.allMatches(be.fromUTF8(e),t,r=>r.slice(0,2));return n.length===0?null:n}findAll(e,t){const n=this.allMatches(be.fromUTF16(e),t,r=>e.substring(r[0],r[1]));return n.length===0?null:n}findAllIndex(e,t){const n=this.allMatches(be.fromUTF16(e),t,r=>r.slice(0,2));return n.length===0?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches(be.fromUTF8(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.slice(r[2*o],r[2*o+1]));return i});return n.length===0?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches(be.fromUTF8(e),t);return n.length===0?null:n}findAllSubmatch(e,t){const n=this.allMatches(be.fromUTF16(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.substring(r[2*o],r[2*o+1]));return i});return n.length===0?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches(be.fromUTF16(e),t);return n.length===0?null:n}},Ov=class Yr{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let n="",r=!1,i=e.length;i===0&&(n="(?:)",r=!0);let o=!1,a=0;for(;a<i;){let u=e[a];if(u==="\\"){if(a+1<i)switch(u=e[a+1],u){case"\\":n+="\\\\",a+=2;continue;case"c":if(a+2<i){let p=e[a+2].charCodeAt(0);if(p>=65&&p<=90||p>=97&&p<=122){let g=p%32;n+="\\x",n+=(g>>4).toString(16).toUpperCase(),n+=(g&15).toString(16).toUpperCase(),a+=3,r=!0;continue}}n+="c",a+=2,r=!0;continue;case"u":if(a+2<i){if(e[a+2]==="{"){let p=a+3,g=!1,m=!1;for(;p<i;){const S=e[p];if(S==="}"){m=!0;break}if(!Yr.isHexadecimal(S))break;g=!0,p++}if(m&&g){n+="\\x",a+=2,r=!0;continue}}else if(a+5<i){let p=!0;for(let g=0;g<4;g++)if(!Yr.isHexadecimal(e[a+2+g])){p=!1;break}if(p){n+="\\x{"+e.substring(a+2,a+6)+"}",a+=6,r=!0;continue}}}n+="u",a+=2,r=!0;continue;case"x":{let p=!1;if(a+2<i&&e[a+2]==="{"){let g=a+3,m=!1,S=!1;for(;g<i;){const x=e[g];if(x==="}"){S=!0;break}if(!Yr.isHexadecimal(x))break;m=!0,g++}S&&m&&(p=!0)}else a+3<i&&Yr.isHexadecimal(e[a+2])&&Yr.isHexadecimal(e[a+3])&&(p=!0);p?(n+="\\x",a+=2):(n+="x",a+=2,r=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":n+="\\"+u,a+=2;continue;default:{let p=e.codePointAt(a+1);if(p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122){let g=z.charCount(p);n+=e.substring(a+1,a+1+g),a+=g+1,r=!0}else{n+="\\";let g=z.charCount(p);n+=e.substring(a+1,a+1+g),a+=g+1}continue}}}else if(u==="/"){n+="\\/",a+=1,r=!0;continue}else if(u==="["){if(!o&&e[a+1]==="]"){n+="[^\\x00-\\x{10FFFF}]",a+=2,r=!0;continue}if(!o&&e[a+1]==="^"&&e[a+2]==="]"){n+="[\\x00-\\x{10FFFF}]",a+=3,r=!0;continue}o=!0}else if(u==="]")o=!1;else if(!o&&u==="("&&a+2<i&&e[a+1]==="?"&&e[a+2]==="<"&&a+3<i&&!"=!>)".includes(e[a+3])){n+="(?P<",a+=3,r=!0;continue}let h=e.codePointAt(a),B=z.charCount(h);n+=e.substring(a,a+B),a+=B}const l=r?n:e;return t.length>0?`(?${t})${l}`:l}};const SC=(s,e)=>{const t=s.matchArray();return t.index=s.start(0),t.input=e,t.groups=s.namedGroupsObject(),t};var Xe,JB=(Xe=class{static quote(e){return z.quoteMeta(e)}static quoteReplacement(e,t=!1){return nC.quoteReplacement(e,t)}static translateRegExp(e){return Ov.translate(e)}static compile(e,t=0){let n=e;if((t&Xe.CASE_INSENSITIVE)!==0&&(n=`(?i)${n}`),(t&Xe.DOTALL)!==0&&(n=`(?s)${n}`),(t&Xe.MULTILINE)!==0&&(n=`(?m)${n}`),(t&-544)!==0)throw new Bv("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let r=G.PERL;(t&Xe.DISABLE_UNICODE_GROUPS)!==0&&(r&=-129),(t&Xe.LOOKBEHINDS)!==0&&(r|=G.LOOKBEHIND);const i=new Xe(e,t);return i.re2Input=Nv.compileImpl(n,r,(t&Xe.LONGEST_MATCH)!==0),i}static matches(e,t){return Xe.compile(e).testExact(t)}static initTest(e,t,n){if(e==null)throw new Error("pattern is null");if(n==null)throw new Error("re2 is null");const r=new Xe(e,t);return r.re2Input=n,r}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return z.isByteArray(e)&&(e=dr.utf8(e)),new nC(this,e)}test(e){return z.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=z.isByteArray(e)?be.fromUTF8(e):be.fromUTF16(e);return this.re2Input.executeEngine(t,0,G.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);return t.find()?SC(t,e):null}split(e,t=0){const n=this.matcher(e),r=[];let i=0,o=0;for(;n.find();){if(o===0&&n.end()===0){o=n.end();continue}if(t>0&&r.length===t-1)break;if(o===n.start()){if(t===0){i+=1,o=n.end();continue}}else for(;i>0;)r.push(""),i-=1;r.push(n.substring(o,n.start())),o=n.end()}if(t===0&&o!==n.inputLength()){for(;i>0;)r.push(""),i-=1;r.push(n.substring(o,n.inputLength()))}return(t!==0||r.length===0&&!(o===n.inputLength()&&o>0))&&r.push(n.substring(o,n.inputLength())),r}*matchAll(e){const t=this.matcher(e);for(;t.find();)yield SC(t,e)}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},V(Xe,"CASE_INSENSITIVE",Wr.CASE_INSENSITIVE),V(Xe,"DOTALL",Wr.DOTALL),V(Xe,"MULTILINE",Wr.MULTILINE),V(Xe,"DISABLE_UNICODE_GROUPS",Wr.DISABLE_UNICODE_GROUPS),V(Xe,"LONGEST_MATCH",Wr.LONGEST_MATCH),V(Xe,"LOOKBEHINDS",Wr.LOOKBEHINDS),Xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi="12.19.0";function Lv(s){Pi=s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Rr=new Jl("@firebase/firestore");function Xr(){return Rr.logLevel}function $(s,...e){if(Rr.logLevel<=pe.DEBUG){const t=e.map(WB);Rr.debug(`Firestore (${Pi}): ${s}`,...t)}}function ns(s,...e){if(Rr.logLevel<=pe.ERROR){const t=e.map(WB);Rr.error(`Firestore (${Pi}): ${s}`,...t)}}function rn(s,...e){if(Rr.logLevel<=pe.WARN){const t=e.map(WB);Rr.warn(`Firestore (${Pi}): ${s}`,...t)}}function WB(s){if(typeof s=="string")return s;try{return(function(t){return JSON.stringify(t)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,f_(s,n,t)}function f_(s,e,t){let n=`FIRESTORE (${Pi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw ns(n),new Error(n)}function X(s,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,s||f_(e,r,n)}function ae(s,e){return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=Fv(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function Ce(s,e){return s<e?-1:s>e?1:0}function nB(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const r=s.charAt(n),i=e.charAt(n);if(r!==i)return Eh(r)===Eh(i)?Ce(r,i):Eh(r)?1:-1}return Ce(s.length,e.length)}const kv=55296,xv=57343;function Eh(s){const e=s.charCodeAt(0);return e>=kv&&e<=xv}function di(s,e,t){return s.length===e.length&&s.every(((n,r)=>t(n,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ze=class sB{constructor(e,t){this.comparator=e,this.root=t||vs.EMPTY}insert(e,t){return new sB(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,vs.BLACK,null,null))}remove(e){return new sB(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ac(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ac(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ac(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ac(this.root,e,this.comparator,!0)}},Ac=class{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},vs=class kn{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??kn.RED,this.left=r??kn.EMPTY,this.right=i??kn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new kn(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return kn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return kn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}};vs.EMPTY=null,vs.RED=!0,vs.BLACK=!1;vs.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new vs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new PC(this.data.getIterator())}getIteratorFrom(e){return new PC(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new nt(this.comparator);return t.data=e,t}}class PC{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends cs{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="__name__";class _n{constructor(e,t,n){t===void 0?t=0:t>e.length&&se(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&se(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return _n.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _n?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=_n.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return Ce(e.length,t.length)}static compareSegments(e,t){const n=_n.isNumericId(e),r=_n.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?_n.extractNumericId(e).compare(_n.extractNumericId(t)):nB(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ts.fromString(e.substring(4,e.length-2))}}class Ie extends _n{construct(e,t,n){return new Ie(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new W(k.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((r=>r.length>0)))}return new Ie(t)}static emptyPath(){return new Ie([])}}const Mv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Ut=class Zr extends _n{construct(e,t,n){return new Zr(e,t,n)}static isValidIdentifier(e){return Mv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Zr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dn}static keyField(){return new Zr([Dn])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(n.length===0)throw new W(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new W(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(i(),r++)}if(i(),o)throw new W(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Zr(t)}static emptyPath(){return new Zr([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(Ut.comparator)}static empty(){return new Xt([])}unionWith(e){let t=new nt(Ut.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Xt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function $s(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function Vv(s,e){const t=[];for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&t.push(e(s[n],n,s));return t}function p_(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ie.fromString(e))}static fromName(e){return new Z(Ie.fromString(e).popFirst(5))}static empty(){return new Z(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(s,e,t){if(!t)throw new W(k.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function g_(s,e,t,n){if(e===!0&&n===!0)throw new W(k.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function bC(s){if(!Z.isDocumentKey(s))throw new W(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function NC(s){if(Z.isDocumentKey(s))throw new W(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function La(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function zl(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":se(12329,{type:typeof s})}function Pt(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new W(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zl(s);throw new W(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}function Gv(s,e){if(e<=0)throw new W(k.INVALID_ARGUMENT,`Function ${s}() requires a positive number, but it was: ${e}.`)}/**
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
 */function tt(s,e){const t={typeString:s};return e&&(t.value=e),t}function Fa(s,e){if(!La(s))throw new W(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const o=s[n];if(r&&typeof o!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new W(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=-62135596800,LC=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*LC);return new ye(t,n)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new W(k.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return ye._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,n;if(e>=0n)t=Number(e/1000000000n),n=Number(e%1000000000n);else{const r=e%1000000000n;r===0n?(t=Number(e/1000000000n),n=0):(t=Number(e/1000000000n-1n),n=Number(r+1000000000n))}return new ye(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<OC)throw new W(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/LC}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new W(k.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fa(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-OC;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:tt("string",ye._jsonSchemaVersion),seconds:tt("number"),nanoseconds:tt("number")};/**
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
 */class m_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new m_("Invalid base64 string: "+i):i}})(e);return new Qe(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new Qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Uv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ks(s){if(X(!!s,39018),typeof s=="string"){let e=0;const t=Uv.exec(s);if(X(!!t,46558,{timestamp:s}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Ve(s.seconds),nanos:Ve(s.nanos)}}function Ve(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function xs(s){return typeof s=="string"?Qe.fromBase64String(s):Qe.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="server_timestamp",E_="__type__",y_="__previous_value__",I_="__local_write_time__";function Ql(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[E_])==null?void 0:n.stringValue)===__}function ka(s){const e=s.mapValue.fields[y_];return Ql(e)?ka(e):e}function fi(s){const e=ks(s.mapValue.fields[I_].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,t,n,r,i,o,a,l,u,h,B,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=B,this._customHeaders=p,this.grpcFlowControlWindow=g}}const il="(default)";class pi{constructor(e,t){this.projectId=e,this.database=t||il}static empty(){return new pi("","")}get isDefaultDatabase(){return this.database===il}isEqual(e){return e instanceof pi&&e.projectId===this.projectId&&e.database===this.database}}function qv(s,e){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new W(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pi(s.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KB=-1;function $l(s){return s==null}function Zo(s){return s===0&&1/s==-1/0}function jv(s){return typeof s=="number"&&Number.isInteger(s)&&!Zo(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}function Jv(s){return typeof s=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="__type__",Wv="__max__",Rc={mapValue:{}},w_="__vector__",ea="value",Ci={nullValue:"NULL_VALUE"},Ht={booleanValue:!0},ht={booleanValue:!1};function st(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Ql(s)?4:Kv(s)?9007199254740991:ol(s)?10:11:se(28295,{value:s})}function on(s,e,t){if(s===e)return!0;const n=st(s);if(n!==st(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return fi(s).isEqual(fi(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=ks(i.timestampValue),l=ks(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(i,o){return xs(i.bytesValue).isEqual(xs(o.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(i,o){return Ve(i.geoPointValue.latitude)===Ve(o.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(o.geoPointValue.longitude)})(s,e);case 2:return(function(i,o,a){if("integerValue"in i&&"integerValue"in o)return Ve(i.integerValue)===Ve(o.integerValue);let l,u;if("doubleValue"in i&&"doubleValue"in o)l=Ve(i.doubleValue),u=Ve(o.doubleValue);else{if(!(a!=null&&a.i))return!1;l=Ve(i.integerValue??i.doubleValue),u=Ve(o.integerValue??o.doubleValue)}return l===u?!!(a!=null&&a.o)||Zo(l)===Zo(u):!!(a===void 0||a.u)&&isNaN(l)&&isNaN(u)})(s,e,t);case 9:return di(s.arrayValue.values||[],e.arrayValue.values||[],((r,i)=>on(r,i,t)));case 10:case 11:return(function(i,o,a){const l=i.mapValue.fields||{},u=o.mapValue.fields||{};if(rl(l)!==rl(u))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(u[h]===void 0||!on(l[h],u[h],a)))return!1;return!0})(s,e,t);default:return se(52216,{left:s})}}function ta(s,e){return(s.values||[]).find((t=>on(t,e)))!==void 0}function qt(s,e){if(s===e)return 0;const t=st(s),n=st(e);if(t!==n)return Ce(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(s.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=Ve(i.integerValue||i.doubleValue),l=Ve(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(s,e);case 3:return FC(s.timestampValue,e.timestampValue);case 4:return FC(fi(s),fi(e));case 5:return nB(s.stringValue,e.stringValue);case 6:return(function(i,o){const a=xs(i),l=xs(o);return a.compareTo(l)})(s.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Ce(a[u],l[u]);if(h!==0)return h}return Ce(a.length,l.length)})(s.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=Ce(Ve(i.latitude),Ve(o.latitude));return a!==0?a:Ce(Ve(i.longitude),Ve(o.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return kC(s.arrayValue,e.arrayValue);case 10:return(function(i,o){var p,g,m,S;const a=i.fields||{},l=o.fields||{},u=(p=a[ea])==null?void 0:p.arrayValue,h=(g=l[ea])==null?void 0:g.arrayValue,B=Ce(((m=u==null?void 0:u.values)==null?void 0:m.length)||0,((S=h==null?void 0:h.values)==null?void 0:S.length)||0);return B!==0?B:kC(u,h)})(s.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Rc.mapValue&&o===Rc.mapValue)return 0;if(i===Rc.mapValue)return 1;if(o===Rc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let B=0;B<l.length&&B<h.length;++B){const p=nB(l[B],h[B]);if(p!==0)return p;const g=qt(a[l[B]],u[h[B]]);if(g!==0)return g}return Ce(l.length,h.length)})(s.mapValue,e.mapValue);default:throw se(23264,{l:t})}}function FC(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return Ce(s,e);const t=ks(s),n=ks(e),r=Ce(t.seconds,n.seconds);return r!==0?r:Ce(t.nanos,n.nanos)}function kC(s,e){const t=s.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const i=qt(t[r],n[r]);if(i!==void 0&&i!==0)return i}return Ce(t.length,n.length)}function gi(s){return rB(s)}function rB(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(t){const n=ks(t);return`time(${n.seconds},${n.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(t){return xs(t).toBase64()})(s.bytesValue):"referenceValue"in s?(function(t){return Z.fromName(t).toString()})(s.referenceValue):"geoPointValue"in s?(function(t){return`geo(${t.latitude},${t.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=rB(i);return n+"]"})(s.arrayValue):"mapValue"in s?(function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of n)i?i=!1:r+=",",r+=`${o}:${rB(t.fields[o])}`;return r+"}"})(s.mapValue):se(61005,{value:s})}function Uc(s){switch(st(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ka(s);return e?16+Uc(e):16;case 5:return 2*s.stringValue.length;case 6:return xs(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((r,i)=>r+Uc(i)),0)})(s.arrayValue);case 10:case 11:return(function(n){let r=0;return $s(n.fields,((i,o)=>{r+=i.length+Uc(o)})),r})(s.mapValue);default:throw se(13486,{value:s})}}function xC(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function wn(s){return!!s&&"integerValue"in s}function fr(s){return!!s&&"doubleValue"in s}function Ms(s){return wn(s)||fr(s)}function mi(s){return!!s&&"arrayValue"in s}function Zt(s){return!!s&&"nullValue"in s}function jt(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function yr(s){return!!s&&"mapValue"in s}function ol(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[D_])==null?void 0:n.stringValue)===w_}function iB(s){var e,t;return(t=(((e=s==null?void 0:s.mapValue)==null?void 0:e.fields)||{})[ea])==null?void 0:t.arrayValue}function bo(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return $s(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=bo(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=bo(s.arrayValue.values[t]);return e}return{...s}}function Kv(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===Wv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!yr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(t)}setAll(e){let t=Ut.emptyPath(),n={},r=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,n,r),n={},r=[],t=a.popLast()}o?n[a.lastSegment()]=bo(o):r.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());yr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];yr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){$s(t,((r,i)=>e[r]=i));for(const r of n)delete e[r]}clone(){return new Rt(bo(this.value))}}function T_(s){const e=[];return $s(s.fields,((t,n)=>{const r=new Ut([t]);if(yr(n)){const i=T_(n.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zo(e)?"-0":e}}function zB(s){return{integerValue:""+s}}function QB(s,e,t){return jv(e)?zB(e):Yl(s,e)}/**
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
 */class Xl{constructor(){this._=void 0}}function zv(s,e,t){return s instanceof na?(function(r,i){const o={fields:{[E_]:{stringValue:__},[I_]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Ql(i)&&(i=ka(i)),i&&(o.fields[y_]=i),{mapValue:o}})(t,e):s instanceof sa?A_(s,e):s instanceof ra?R_(s,e):s instanceof ia?(function(r,i){const o=v_(r,i),a=ll(o)+ll(r.h);return wn(o)&&wn(r.h)?zB(a):Yl(r.serializer,a)})(s,e):s instanceof al?(function(r,i){return MC(r,i,Math.min)})(s,e):s instanceof cl?(function(r,i){return MC(r,i,Math.max)})(s,e):void 0}function Qv(s,e,t){return s instanceof sa?A_(s,e):s instanceof ra?R_(s,e):t}function v_(s,e){return s instanceof ia?Ms(e)?e:{integerValue:0}:null}class na extends Xl{}class sa extends Xl{constructor(e){super(),this.elements=e}}function A_(s,e){const t=S_(e);for(const n of s.elements)t.some((r=>on(r,n)))||t.push(n);return{arrayValue:{values:t}}}class ra extends Xl{constructor(e){super(),this.elements=e}}function R_(s,e){let t=S_(e);for(const n of s.elements)t=t.filter((r=>!on(r,n)));return{arrayValue:{values:t}}}class $B extends Xl{constructor(e,t){super(),this.serializer=e,this.h=t}}class ia extends $B{}class al extends $B{}class cl extends $B{}function MC(s,e,t){if(!Ms(e))return s.h;const n=t(ll(e),ll(s.h));return wn(e)&&wn(s.h)?zB(n):Yl(s.serializer,n)}function ll(s){return Ve(s.integerValue||s.doubleValue)}function S_(s){return mi(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,t){this.field=e,this.transform=t}}function Yv(s,e){return s.field.isEqual(e.field)&&(function(n,r){return n instanceof sa&&r instanceof sa||n instanceof ra&&r instanceof ra?di(n.elements,r.elements,on):n instanceof ia&&r instanceof ia||n instanceof al&&r instanceof al||n instanceof cl&&r instanceof cl?on(n.h,r.h):n instanceof na&&r instanceof na})(s.transform,e.transform)}class Xv{constructor(e,t){this.version=e,this.transformResults=t}}class sn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hc(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Zl{}function P_(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new YB(s.key,sn.none()):new xa(s.key,s.data,sn.none());{const t=s.data,n=Rt.empty();let r=new nt(Ut.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),r=r.add(i)}return new Ys(s.key,n,new Xt(r.toArray()),sn.none())}}function Zv(s,e,t){s instanceof xa?(function(r,i,o){const a=r.value.clone(),l=GC(r.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(s,e,t):s instanceof Ys?(function(r,i,o){if(!Hc(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=GC(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(b_(r)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(s,e,t):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function No(s,e,t,n){return s instanceof xa?(function(i,o,a,l){if(!Hc(i.precondition,o))return a;const u=i.value.clone(),h=UC(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(s,e,t,n):s instanceof Ys?(function(i,o,a,l){if(!Hc(i.precondition,o))return a;const u=UC(i.fieldTransforms,l,o),h=o.data;return h.setAll(b_(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((B=>B.field)))})(s,e,t,n):(function(i,o,a){return Hc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(s,e,t)}function eA(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),i=v_(n.transform,r||null);i!=null&&(t===null&&(t=Rt.empty()),t.set(n.field,i))}return t||null}function VC(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&di(n,r,((i,o)=>Yv(i,o)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class xa extends Zl{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ys extends Zl{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function b_(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function GC(s,e,t){const n=new Map;X(s.length===t.length,32656,{T:t.length,P:s.length});for(let r=0;r<t.length;r++){const i=s[r],o=i.transform,a=e.data.field(i.field);n.set(i.field,Qv(o,a,t[r]))}return n}function UC(s,e,t){const n=new Map;for(const r of s){const i=r.transform,o=t.data.field(r.field);n.set(r.field,zv(i,o,e))}return n}class YB extends Zl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tA extends Zl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ul{constructor(e,t){this.position=e,this.inclusive=t}}function HC(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const i=e[r],o=s.position[r];if(i.field.isKeyField()?n=Z.comparator(Z.fromName(o.referenceValue),t.key):n=qt(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function qC(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!on(s.position[t],e.position[t]))return!1;return!0}/**
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
 */class N_{}class et extends N_{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new sA(e,t,n):t==="array-contains"?new oA(e,n):t==="in"?new aA(e,n):t==="not-in"?new cA(e,n):t==="array-contains-any"?new lA(e,n):new et(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new rA(e,n):new iA(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(qt(t,this.value)):t!==null&&st(this.value)===st(t)&&this.matchesComparison(qt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Cn extends N_{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new Cn(e,t)}matches(e){return O_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function O_(s){return s.op==="and"}function L_(s){return nA(s)&&O_(s)}function nA(s){for(const e of s.filters)if(e instanceof Cn)return!1;return!0}function oB(s){if(s instanceof et)return s.field.canonicalString()+s.op.toString()+gi(s.value);if(L_(s))return s.filters.map((e=>oB(e))).join(",");{const e=s.filters.map((t=>oB(t))).join(",");return`${s.op}(${e})`}}function F_(s,e){return s instanceof et?(function(n,r){return r instanceof et&&n.op===r.op&&n.field.isEqual(r.field)&&on(n.value,r.value)})(s,e):s instanceof Cn?(function(n,r){return r instanceof Cn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce(((i,o,a)=>i&&F_(o,r.filters[a])),!0):!1})(s,e):void se(19439)}function k_(s){return s instanceof et?(function(t){return`${t.field.canonicalString()} ${t.op} ${gi(t.value)}`})(s):s instanceof Cn?(function(t){return t.op.toString()+" {"+t.getFilters().map(k_).join(" ,")+"}"})(s):"Filter"}class sA extends et{constructor(e,t,n){super(e,t,n),this.key=Z.fromName(n.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class rA extends et{constructor(e,t){super(e,"in",t),this.keys=x_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class iA extends et{constructor(e,t){super(e,"not-in",t),this.keys=x_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function x_(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>Z.fromName(n.referenceValue)))}class oA extends et{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return mi(t)&&ta(t.arrayValue,this.value)}}class aA extends et{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ta(this.value.arrayValue,t)}}class cA extends et{constructor(e,t){super(e,"not-in",t)}matches(e){if(ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ta(this.value.arrayValue,t)}}class lA extends et{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!mi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>ta(this.value.arrayValue,n)))}}/**
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
 */class oa{constructor(e,t="asc"){this.field=e,this.dir=t}}function uA(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new ye(0,0))}static max(){return new oe(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t,n,r,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Et(e,0,oe.min(),oe.min(),oe.min(),Rt.empty(),0)}static newFoundDocument(e,t,n,r){return new Et(e,1,t,oe.min(),n,r,0)}static newNoDocument(e,t){return new Et(e,2,t,oe.min(),oe.min(),Rt.empty(),0)}static newUnknownDocument(e,t){return new Et(e,3,t,oe.min(),oe.min(),Rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */const aa=-1;function hA(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=oe.fromTimestamp(n===1e9?new ye(t+1,0):new ye(t,n));return new Vs(r,Z.empty(),e)}function BA(s){return new Vs(s.readTime,s.key,aa)}class Vs{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Vs(oe.min(),Z.empty(),aa)}static max(){return new Vs(oe.max(),Z.empty(),aa)}}function dA(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(s.documentKey,e.documentKey),t!==0?t:Ce(s.largestBatchId,e.largestBatchId))}/**
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
 */class fA{constructor(e,t=null,n=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function jC(s,e=null,t=[],n=[],r=null,i=null,o=null){return new fA(s,e,t,n,r,i,o)}function M_(s){const e=ae(s);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>oB(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),$l(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>gi(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>gi(n))).join(",")),e.R=t}return e.R}function V_(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!uA(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!F_(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!qC(s.startAt,e.startAt)&&qC(s.endAt,e.endAt)}function hr(s){return!!s.isCorePipeline}function G_(s){return!!s.path&&Z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t=null,n=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function pA(s,e,t,n,r,i,o,a){return new bi(s,e,t,n,r,i,o,a)}function eu(s){return new bi(s)}function JC(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function CA(s){return Z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}function U_(s){return s.collectionGroup!==null}function Oo(s){const e=ae(s);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new nt(Ut.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new oa(i,n))})),t.has(Ut.keyField().canonicalString())||e.A.push(new oa(Ut.keyField(),n))}return e.A}function An(s){const e=ae(s);return e.V||(e.V=gA(e,Oo(s))),e.V}function gA(s,e){if(s.limitType==="F")return jC(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new oa(r.field,i)}));const t=s.endAt?new ul(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new ul(s.startAt.position,s.startAt.inclusive):null;return jC(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function aB(s,e){const t=s.filters.concat([e]);return new bi(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function mA(s,e){const t=s.explicitOrderBy.concat([e]);return new bi(s.path,s.collectionGroup,t,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}function hl(s,e,t){return new bi(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function _A(s,e){return V_(An(s),An(e))&&s.limitType===e.limitType}function Lo(s){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((r=>k_(r))).join(", ")}]`),$l(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>gi(r))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>gi(r))).join(",")),`Target(${n})`})(An(s))}; limitType=${s.limitType})`}function tu(s,e){return e.isFoundDocument()&&(function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(s,e)&&(function(n,r){for(const i of Oo(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(s,e)&&(function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0})(s,e)&&(function(n,r){return!(n.startAt&&!(function(o,a,l){const u=HC(o,a,l);return o.inclusive?u<=0:u<0})(n.startAt,Oo(n),r)||n.endAt&&!(function(o,a,l){const u=HC(o,a,l);return o.inclusive?u>=0:u>0})(n.endAt,Oo(n),r))})(s,e)}function XB(s){return(e,t)=>{let n=!1;for(const r of Oo(s)){const i=EA(r,e,t);if(i!==0)return i;n=n||r.field.isKeyField()}return 0}}function EA(s,e,t){const n=s.field.isKeyField()?Z.comparator(e.key,t.key):(function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?qt(l,u):se(42886)})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return se(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,me;function IA(s){switch(s){case k.OK:return se(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return se(15467,{code:s})}}function H_(s){if(s===void 0)return ns("GRPC error has no .code"),k.UNKNOWN;switch(s){case $e.OK:return k.OK;case $e.CANCELLED:return k.CANCELLED;case $e.UNKNOWN:return k.UNKNOWN;case $e.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case $e.INTERNAL:return k.INTERNAL;case $e.UNAVAILABLE:return k.UNAVAILABLE;case $e.UNAUTHENTICATED:return k.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case $e.NOT_FOUND:return k.NOT_FOUND;case $e.ALREADY_EXISTS:return k.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return k.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case $e.ABORTED:return k.ABORTED;case $e.OUT_OF_RANGE:return k.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return k.UNIMPLEMENTED;case $e.DATA_LOSS:return k.DATA_LOSS;default:return se(39323,{code:s})}}(me=$e||($e={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return p_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=new ze(Z.comparator);function Mt(){return DA}const q_=new ze(Z.comparator);function ei(...s){let e=q_;for(const t of s)e=e.insert(t.key,t);return e}function j_(s){let e=q_;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ys(){return Fo()}function J_(){return Fo()}function Fo(){return new xr((s=>s.toString()),((s,e)=>s.isEqual(e)))}const wA=new ze(Z.comparator),TA=new nt(Z.comparator);function de(...s){let e=TA;for(const t of s)e=e.add(t);return e}const vA=new nt(Ce);function AA(){return vA}/**
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
 */function RA(){return new TextEncoder}/**
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
 */const SA=new Ts([4294967295,4294967295],0);function WC(s){const e=RA().encode(s),t=new e_;return t.update(e),new Uint8Array(t.digest())}function KC(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ts([t,n],0),new Ts([r,i],0)]}class ZB{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new vo(`Invalid padding: ${t}`);if(n<0)throw new vo(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new vo(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new vo(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=Ts.fromNumber(this.p)}v(e,t,n){let r=e.add(t.multiply(Ts.fromNumber(n)));return r.compare(SA)===1&&(r=new Ts([r.getBits(0),r.getBits(1)],0)),r.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.p===0)return!1;const t=WC(e),[n,r]=KC(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,r,i);if(!this.D(o))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ZB(i,r,t);return n.forEach((a=>o.insert(a))),o}insert(e){if(this.p===0)return;const t=WC(e),[n,r]=KC(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,r,i);this.C(o)}}C(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class vo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,n,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Va.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ma(oe.min(),r,new ze(Ce),Mt(),Mt(),de())}}class Va{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Va(n,t,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t,n,r){this.F=e,this.removedTargetIds=t,this.key=n,this.O=r}}class W_{constructor(e,t){this.targetId=e,this.M=t}}class K_{constructor(e,t,n=Qe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class zC{constructor(e){this.targetId=e,this.N=0,this.L=QC(),this.B=Qe.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return this.N!==0}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=de(),t=de(),n=de();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:se(38017,{changeType:i})}})),new Va(this.B,this.U,e,t,n)}G(){this.k=!1,this.L=QC()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,X(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const lo="WatchChangeAggregator";class PA{constructor(e){this.X=e,this.ee=new Map,this.te=Mt(),this.ne=Sc(),this.re=Mt(),this.ie=Sc(),this.se=new ze(Ce)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,(t=>{const n=this.ee.get(t);if(n)switch(e.state){case 0:this.ce(t)&&n.K(e.resumeToken);break;case 1:n.Y(),n.q||n.G(),n.K(e.resumeToken);break;case 2:n.Y(),n.q||this.removeTarget(t);break;case 3:this.ce(t)&&(n.Z(),n.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),n.K(e.resumeToken));break;default:se(56790,{state:e.state})}else $(lo,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach(((n,r)=>{this.ce(r)&&t(r)}))}Ee(e){var t;return hr(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:G_(e)}he(e){const t=e.targetId,n=e.M.count,r=this.Te(t);if(r){const i=r.target;if(this.Ee(i))if(n===0){const o=new Z(hr(i)?Ie.fromString(i.getPipelineDocuments()[0]):i.path);this.ae(t,o,Et.newNoDocument(o,oe.min()))}else X(n===1,20013,"Single document existence filter with count: "+n);else{const o=this.Pe(t);if(o!==n){const a=this.Ie(e),l=a?this.Re(a,e,o):1;if(l!==0){this.le(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,u)}}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=xs(n).toUint8Array()}catch(l){if(l instanceof m_)return rn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ZB(o,r,i)}catch(l){return rn(l instanceof vo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.p===0?null:a}Re(e,t,n){return t.M.count===n-this.de(e,t.targetId)?0:2}de(e,t){const n=this.X.getRemoteKeysForTarget(t);let r=0;return n.forEach((i=>{const o=this.X.Ve(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.ae(t,i,null),r++)})),r}fe(e){const t=new Map;this.ee.forEach(((i,o)=>{const a=this.Te(o);if(a){if(i.current&&this.Ee(a.target)){const l=hr(a.target)?Ie.fromString(a.target.getPipelineDocuments()[0]):a.target.path,u=new Z(l);this.me(u).has(o)||this.pe(o,u)||this.ae(o,u,Et.newNoDocument(u,e))}i.$&&(t.set(o,i.W()),i.G())}}));let n=de();this.ie.forEach(((i,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.Te(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(i))})),this.te.forEach(((i,o)=>o.setReadTime(e))),this.re.forEach(((i,o)=>o.setReadTime(e)));const r=new Ma(e,t,this.se,this.te,this.re,n);return this.te=Mt(),this.ne=Sc(),this.re=Mt(),this.ie=Sc(),this.se=new ze(Ce),r}oe(e,t){const n=this.ee.get(e);if(!n||!this.ce(e))return void $(lo,`addDocumentToTarget received document for unknown inactive target (${e})`);const r=this.pe(e,t.key)?2:0;n.j(t.key,r),hr(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,n){const r=this.ee.get(e);r&&this.ce(e)?(this.pe(e,t)?r.j(t,1):r.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),n&&(hr(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t,n):this.te=this.te.insert(t,n))):$(lo,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const n=t.W();return this.X.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}J(e){let t=this.ee.get(e);t||($(lo,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new zC(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new nt(Ce),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new nt(Ce),this.ne=this.ne.insert(e,t)),t}ce(e){const t=this.Te(e)!==null;return t||$(lo,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return t===void 0||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new zC(e)),this.X.getRemoteKeysForTarget(e).forEach((t=>{this.ae(e,t,null)}))}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function Sc(){return new ze(Z.comparator)}function QC(){return new ze(Z.comparator)}const bA={asc:"ASCENDING",desc:"DESCENDING"},NA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OA={and:"AND",or:"OR"};class LA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function cB(s,e){return s.useProto3Json||$l(e)?e:{value:e}}function ko(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ed(s){const e=ks(s);return new ye(e.seconds,e.nanos)}function z_(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function jc(s,e){return ko(s,e.toTimestamp())}function Rn(s){return X(!!s,49232),oe.fromTimestamp(ed(s))}function td(s,e){return lB(s,e).canonicalString()}function lB(s,e){const t=(function(r){return new Ie(["projects",r.projectId,"databases",r.database])})(s).child("documents");return e===void 0?t:t.child(e)}function Q_(s){const e=Ie.fromString(s);return X(eE(e),10190,{key:e.toString()}),e}function Bl(s,e){return td(s.databaseId,e.path)}function yh(s,e){const t=Q_(e);if(t.get(1)!==s.databaseId.projectId)throw new W(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new W(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new Z(Y_(t))}function $_(s,e){return td(s.databaseId,e)}function FA(s){const e=Q_(s);return e.length===4?Ie.emptyPath():Y_(e)}function uB(s){return new Ie(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Y_(s){return X(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function $C(s,e,t){return{name:Bl(s,e),fields:t.value.mapValue.fields}}function kA(s,e){let t;if("targetChange"in e){e.targetChange;const n=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:se(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(X(h===void 0||typeof h=="string",58123),Qe.fromBase64String(h||"")):(X(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Qe.fromUint8Array(h||new Uint8Array))})(s,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?k.UNKNOWN:H_(u.code);return new W(h,u.message||"")})(o);t=new K_(n,r,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=yh(s,n.document.name),i=Rn(n.document.updateTime),o=n.document.createTime?Rn(n.document.createTime):oe.min(),a=new Rt({mapValue:{fields:n.document.fields}}),l=Et.newFoundDocument(r,i,o,a),u=n.targetIds||[],h=n.removedTargetIds||[];t=new qc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=yh(s,n.document),i=n.readTime?Rn(n.readTime):oe.min(),o=Et.newNoDocument(r,i),a=n.removedTargetIds||[];t=new qc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=yh(s,n.document),i=n.removedTargetIds||[];t=new qc([],i,r,null)}else{if(!("filter"in e))return se(11601,{we:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:i}=n,o=new yA(r,i),a=n.targetId;t=new W_(a,o)}}return t}function xA(s,e){let t;if(e instanceof xa)t={update:$C(s,e.key,e.value)};else if(e instanceof YB)t={delete:Bl(s,e.key)};else if(e instanceof Ys)t={update:$C(s,e.key,e.data),updateMask:KA(e.fieldMask)};else{if(!(e instanceof tA))return se(16599,{be:e.type});t={verify:Bl(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const a=o.transform;if(a instanceof na)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ra)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ia)return{fieldPath:o.field.canonicalString(),increment:a.h};if(a instanceof al)return{fieldPath:o.field.canonicalString(),minimum:a.h};if(a instanceof cl)return{fieldPath:o.field.canonicalString(),maximum:a.h};throw se(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:jc(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)})(s,e.precondition)),t}function MA(s,e){return s&&s.length>0?(X(e!==void 0,14353),s.map((t=>(function(r,i){let o=r.updateTime?Rn(r.updateTime):Rn(i);return o.isEqual(oe.min())&&(o=Rn(i)),new Xv(o,r.transformResults||[])})(t,e)))):[]}function VA(s,e){return{documents:[$_(s,e.path)]}}function GA(s,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=$_(s,r);const i=(function(u){if(u.length!==0)return Z_(Cn.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(p){return{field:ti(p.field),direction:jA(p.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=cB(s,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Se:t,parent:r}}function UA(s){let e=FA(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){X(n===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=(function(B){const p=X_(B);return p instanceof Cn&&L_(p)?p.getFilters():[p]})(t.where));let o=[];t.orderBy&&(o=(function(B){return B.map((p=>(function(m){return new oa(ni(m.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(m.direction))})(p)))})(t.orderBy));let a=null;t.limit&&(a=(function(B){let p;return p=typeof B=="object"?B.value:B,$l(p)?null:p})(t.limit));let l=null;t.startAt&&(l=(function(B){const p=!!B.before,g=B.values||[];return new ul(g,p)})(t.startAt));let u=null;return t.endAt&&(u=(function(B){const p=!B.before,g=B.values||[];return new ul(g,p)})(t.endAt)),pA(e,r,o,i,a,"F",l,u)}function HA(s,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function qA(s,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(s)))}}}}function X_(s){return s.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ni(t.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ni(t.unaryFilter.field);return et.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ni(t.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ni(t.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}})(s):s.fieldFilter!==void 0?(function(t){return et.create(ni(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(t){return Cn.create(t.compositeFilter.filters.map((n=>X_(n))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return se(1026)}})(t.compositeFilter.op))})(s):se(30097,{filter:s})}function jA(s){return bA[s]}function JA(s){return NA[s]}function WA(s){return OA[s]}function ti(s){return{fieldPath:s.canonicalString()}}function ni(s){return Ut.fromServerFormat(s.fieldPath)}function Z_(s){return s instanceof et?(function(t){if(t.op==="=="){if(jt(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NAN"}};if(Zt(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jt(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NOT_NAN"}};if(Zt(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ti(t.field),op:JA(t.op),value:t.value}}})(s):s instanceof Cn?(function(t){const n=t.getFilters().map((r=>Z_(r)));return n.length===1?n[0]:{compositeFilter:{op:WA(t.op),filters:n}}})(s):se(54877,{filter:s})}function KA(s){const e=[];return s.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function eE(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}function tE(s){return!!s&&typeof s._toProto=="function"&&s._protoValueType==="ProtoValue"}function ca(s,e){const t={fields:{}};return e.forEach(((n,r)=>{if(typeof r!="string")throw new Error(`Cannot encode map with non-string key: ${r}`);t.fields[r]=n._toProto(s)})),{mapValue:t}}function nE(s){return{stringValue:s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(s){return new LA(s,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yt(Qe.fromBase64String(e))}catch(t){throw new W(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Yt(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fa(e,Yt._jsonSchema))return Yt.fromBase64String(e.bytes)}}Yt._jsonSchemaVersion="firestore/bytes/1.0",Yt._jsonSchema={type:tt("string",Yt._jsonSchemaVersion),bytes:tt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function sE(){return new Ga(Dn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fn._jsonSchemaVersion}}static fromJSON(e){if(Fa(e,fn._jsonSchema))return new fn(e.latitude,e.longitude)}}fn._jsonSchemaVersion="firestore/geoPoint/1.0",fn._jsonSchema={type:tt("string",fn._jsonSchemaVersion),latitude:tt("number"),longitude:tt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(_t.UNAUTHENTICATED)))}shutdown(){}}class zA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class QA{constructor(e){this.De=e,this.currentUser=_t.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.Ce===void 0,42304);let n=this.xe;const r=l=>this.xe!==n?(n=this.xe,t(l)):Promise.resolve();let i=new $n;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new $n,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await r(this.currentUser)}))},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),o())};this.De.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.De.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $n)}}),0),o()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.xe!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(X(typeof n.accessToken=="string",31837,{Oe:n}),new rE(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{Me:e}),new _t(e)}}class $A{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class YA{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n}getToken(){return Promise.resolve(new $A(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable((()=>t(_t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class YC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XA{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,xe(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){X(this.Ce===void 0,3512);const n=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.$e;return this.$e=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable((()=>n(i)))};const r=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?r(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.Ke)return Promise.resolve(new YC(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new YC(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function oE(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
 */class ZA{Qe(e){}shutdown(){}}/**
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
 */const XC="ConnectivityMonitor";class ZC{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){$(XC,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){$(XC,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pc=null;function hB(){return Pc===null?Pc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Pc++,"0x"+Pc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="RestConnection",eR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class tR{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${n}/databases/${r}`,this.tt=this.databaseId.database===il?`project_id=${n}`:`project_id=${n}&database_id=${r}`}nt(e,t,n,r,i){const o=hB(),a=this.rt(e,t.toUriEncodedString());$(Ih,`Sending RPC '${e}' ${o}:`,a,n);const l={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(l,r,i);const{host:u}=new URL(a),h=Fr(u);return this.st(e,a,l,n,h).then((B=>($(Ih,`Received RPC '${e}' ${o}: `,B),B)),(B=>{throw rn(Ih,`RPC '${e}' ${o} failed with error: `,B,"url: ",a,"request:",n),B}))}_t(e,t,n,r,i,o){return this.nt(e,t,n,r,i)}it(e,t,n){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Pi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),n&&n.headers.forEach(((r,i)=>e[i]=r)),this.databaseInfo._customHeaders)for(const r of Object.keys(this.databaseInfo._customHeaders))e[r]=this.databaseInfo._customHeaders[r]}rt(e,t){const n=eR[e];let r=`${this.Xe}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection",uo=(s,e,t)=>{s.listen(e,(n=>{try{t(n)}catch(r){setTimeout((()=>{throw r}),0)}}))};class ii extends tR{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!ii.yt){const e=r_();uo(e,s_.STAT_EVENT,(t=>{t.stat===Xh.PROXY?$(gt,"STAT_EVENT: detected buffering proxy"):t.stat===Xh.NOPROXY&&$(gt,"STAT_EVENT: detected no buffering proxy")})),ii.yt=!0}}st(e,t,n,r,i){const o=hB();return new Promise(((a,l)=>{const u=new t_;u.setWithCredentials(!0),u.listenOnce(n_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Vc.NO_ERROR:const B=u.getResponseJson();$(gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(B)),a(B);break;case Vc.TIMEOUT:$(gt,`RPC '${e}' ${o} timed out`),l(new W(k.DEADLINE_EXCEEDED,"Request time out"));break;case Vc.HTTP_ERROR:const p=u.getStatus();if($(gt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const S=(function(j){const Y=j.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(Y)>=0?Y:k.UNKNOWN})(m.status);l(new W(S,m.message))}else l(new W(k.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(k.UNAVAILABLE,"Connection failed."));break;default:se(9055,{wt:e,streamId:o,bt:u.getLastErrorCode(),St:u.getLastError()})}}finally{$(gt,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);$(gt,`RPC '${e}' ${o} sending request:`,r),u.send(t,"POST",h,n,15)}))}vt(e,t,n){const r=hB(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.it(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");$(gt,`Creating RPC '${e}' stream ${r}: ${u}`,a);const h=o.createWebChannel(u,a);this.Dt(h);let B=!1,p=!1;const g=new nR({ot:m=>{p?$(gt,`Not sending because RPC '${e}' stream ${r} is closed:`,m):(B||($(gt,`Opening RPC '${e}' stream ${r} transport.`),h.open(),B=!0),$(gt,`RPC '${e}' stream ${r} sending:`,m),h.send(m))},ut:()=>h.close()});return uo(h,To.EventType.OPEN,(()=>{p||($(gt,`RPC '${e}' stream ${r} transport opened.`),g.Rt())})),uo(h,To.EventType.CLOSE,(()=>{p||(p=!0,$(gt,`RPC '${e}' stream ${r} transport closed`),g.Vt(),this.xt(h))})),uo(h,To.EventType.ERROR,(m=>{p||(p=!0,rn(gt,`RPC '${e}' stream ${r} transport errored. Name:`,m.name,"Message:",m.message),g.Vt(new W(k.UNAVAILABLE,"The operation could not be completed")))})),uo(h,To.EventType.MESSAGE,(m=>{var S;if(!p){const x=m.data[0];X(!!x,16349);const j=x,Y=(j==null?void 0:j.error)||((S=j[0])==null?void 0:S.error);if(Y){$(gt,`RPC '${e}' stream ${r} received error:`,Y);const ue=Y.status;let Ue=(function(A){const y=$e[A];if(y!==void 0)return H_(y)})(ue),Je=Y.message;ue==="NOT_FOUND"&&Je.includes("database")&&Je.includes("does not exist")&&Je.includes(this.databaseId.database)&&rn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ue===void 0&&(Ue=k.INTERNAL,Je="Unknown error status: "+ue+" with message "+Y.message),p=!0,g.Vt(new W(Ue,Je)),h.close()}else $(gt,`RPC '${e}' stream ${r} received:`,x),g.dt(x)}})),ii.gt(),setTimeout((()=>{g.At()}),0),g}terminate(){this.ft.forEach((e=>e.close())),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter((t=>t===e))}it(e,t,n){super.it(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return i_()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(s){return new ii(s)}ii.yt=!1;class aE{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=n,this.Ot=r,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),n=Math.max(0,Date.now()-this.Bt),r=Math.max(0,t-n);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,r,(()=>(this.Bt=Date.now(),e()))),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="PersistentStream";class cE{constructor(e,t,n,r,i,o,a,l){this.Ct=e,this.Kt=n,this.Qt=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new aE(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,(()=>this.tn())))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(ns(t.toString()),ns("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,r])=>{this.Wt===t&&this.un(n,r)}),(n=>{e((()=>{const r=new W(k.UNKNOWN,"Fetching auth token failed: "+n.message);return this.cn(r)}))}))}un(e,t){const n=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct((()=>{n((()=>this.listener.ct()))})),this.stream.Et((()=>{n((()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,(()=>(this.Yt()&&(this.state=3),Promise.resolve()))),this.listener.Et())))})),this.stream.Tt((r=>{n((()=>this.cn(r)))})),this.stream.onMessage((r=>{n((()=>++this.jt==1?this.hn(r):this.onNext(r)))}))}Zt(){this.state=5,this.Ht.kt((async()=>{this.state=0,this.start()}))}cn(e){return $(eg,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget((()=>this.Wt===e?t():($(eg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rR extends cE{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=kA(this.serializer,e),n=(function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?Rn(o.readTime):oe.min()})(e);return this.listener.Tn(t,n)}Pn(e){const t={};t.database=uB(this.serializer),t.addTarget=(function(i,o){let a;const l=o.target;if(a=hr(l)?{pipelineQuery:qA(i,l)}:G_(l)?{documents:VA(i,l)}:{query:GA(i,l).Se},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=z_(i,o.resumeToken);const u=cB(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=ko(i,o.snapshotVersion.toTimestamp());const u=cB(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const n=HA(this.serializer,e);n&&(t.labels=n),this.nn(t)}In(e){const t={};t.database=uB(this.serializer),t.removeTarget=e,this.nn(t)}}class iR extends cE{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=MA(e.writeResults,e.commitTime),n=Rn(e.commitTime);return this.listener.dn(n,t)}fn(){const e={};e.database=uB(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>xA(this.serializer,n)))};this.nn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{}class aR extends oR{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.mn=!1}pn(){if(this.mn)throw new W(k.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,n,r){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.nt(e,lB(t,n),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(k.UNKNOWN,i.toString())}))}_t(e,t,n,r,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection._t(e,lB(t,n),r,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(k.UNKNOWN,o.toString())}))}terminate(){this.mn=!0,this.connection.terminate()}}function cR(s,e,t,n){return new aR(s,e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR="ComponentProvider",tg=new Map;function uR(s,e,t,n,r){return new Hv(s,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,oE(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,n,r._customHeaders,r.grpcFlowControlWindow)}/**
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
 */const ng={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lE=41943040;class kt{static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(lE,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);/**
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
 */class su{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.gn(n),this.yn=n=>t.writeSequenceNumber(n))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}su.wn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(s){if(s.code!==k.FAILED_PRECONDITION||s.message!==hR)throw s;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M(((n,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):M.reject(t)}static resolve(e){return new M(((t,n)=>{t(e)}))}static reject(e){return new M(((t,n)=>{n(e)}))}static waitFor(e){return new M(((t,n)=>{let r=0,i=0,o=!1;e.forEach((a=>{++r,a.next((()=>{++i,o&&i===r&&t()}),(l=>n(l)))})),o=!0,i===r&&t()}))}static or(e){let t=M.resolve(!1);for(const n of e)t=t.next((r=>r?M.resolve(r):n()));return t}static forEach(e,t){const n=[];return e.forEach(((r,i)=>{n.push(t.call(this,r,i))})),this.waitFor(n)}static mapArray(e,t){return new M(((n,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next((h=>{o[u]=h,++a,a===i&&n(o)}),(h=>r(h)))}}))}static doWhile(e,t){return new M(((n,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):n()};i()}))}}function dR(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Oi(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="LruGarbageCollector",fR=1048576;function rg([s,e],[t,n]){const r=Ce(s,t);return r===0?Ce(e,n):r}class pR{constructor(e){this.Yn=e,this.buffer=new nt(rg),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();rg(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class CR{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){$(sg,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Oi(t)?$(sg,"Ignoring IndexedDB error during garbage collection: ",t):await Ni(t)}await this.nr(3e5)}))}}class gR{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return M.resolve(su.wn);const n=new pR(t);return this.rr.forEachTarget(e,(r=>n.er(r.sequenceNumber))).next((()=>this.rr.sr(e,(r=>n.er(r))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.rr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(ng)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ng):this._r(e,t)))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let n,r,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((B=>(B>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${B}`),r=this.params.maximumSequenceNumbersToCollect):r=B,o=Date.now(),this.nthSequenceNumber(e,r)))).next((B=>(n=B,a=Date.now(),this.removeTargets(e,n,t)))).next((B=>(i=B,l=Date.now(),this.removeOrphanedDocuments(e,n)))).next((B=>(u=Date.now(),Xr()<=pe.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${B} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:B}))))}}function mR(s,e){return new gR(s,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="firestore.googleapis.com",ig=!0;class og{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uE,this.ssl=ig}else this.host=e.host,this.ssl=e.ssl??ig;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=lE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fR)throw new W(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(g_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oE(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new W(k.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,r){return n.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(n,r){if(n===r)return!0;if(!n||!r)return!1;const i=Object.keys(n),o=Object.keys(r);if(i.length!==o.length)return!1;for(const a of i)if(n[a]!==r[a])return!1;return!0})(this._customHeaders,e._customHeaders)}}let ru=class{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new og({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new og(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new iE;switch(n.type){case"firstParty":return new YA(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new W(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=tg.get(t);n&&($(lR,"Removing Datastore"),tg.delete(t),n.terminate())})(this),Promise.resolve()}};function nd(s,e,t,n={}){var u;s=Pt(s,ru);const r=Fr(e),i=s._getSettings(),o={...i,emulatorOptions:s._getEmulatorOptions()},a=`${e}:${t}`;r&&GB(`https://${a}`),i.host!==uE&&i.host!==a&&rn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:r,emulatorOptions:n};if(!Ls(l,o)&&(s._setSettings(l),n.mockUserToken)){let h,B;if(typeof n.mockUserToken=="string")h=n.mockUserToken,B=_t.MOCK_USER;else{h=Wm(n.mockUserToken,(u=s._app)==null?void 0:u.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new W(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");B=new _t(p)}s._authCredentials=new zA(new rE(h,B))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Fn(this.firestore,e,this._query)}}class Me{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Fa(t,Me._jsonSchema))return new Me(e,n||null,new Z(Ie.fromString(t.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:tt("string",Me._jsonSchemaVersion),referencePath:tt("string")};class Yn extends Fn{constructor(e,t,n){super(e,t,eu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new Z(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function la(s,e,...t){if(s=ne(s),C_("collection","path",e),s instanceof ru){const n=Ie.fromString(e,...t);return NC(n),new Yn(s,null,n)}{if(!(s instanceof Me||s instanceof Yn))throw new W(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Ie.fromString(e,...t));return NC(n),new Yn(s.firestore,null,n)}}function yt(s,e,...t){if(s=ne(s),arguments.length===1&&(e=Kl.newId()),C_("doc","path",e),s instanceof ru){const n=Ie.fromString(e,...t);return bC(n),new Me(s,null,new Z(n))}{if(!(s instanceof Me||s instanceof Yn))throw new W(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Ie.fromString(e,...t));return bC(n),new Me(s.firestore,s instanceof Yn?s.converter:null,new Z(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fa(e,bt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new bt(e.vectorValues);throw new W(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bt._jsonSchemaVersion="firestore/vectorValue/1.0",bt._jsonSchema={type:tt("string",bt._jsonSchemaVersion),vectorValues:tt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=/^__.*__$/;class ER{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Ys(e,this.data,this.fieldMask,t,this.fieldTransforms):new xa(e,this.data,t,this.fieldTransforms)}}class hE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ys(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function BE(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{dataSource:s})}}class sd{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new sd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return dl(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(BE(this.dataSource)&&_R.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class yR{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||nu(e)}createContext(e,t,n,r=!1){return new sd({dataSource:e,methodName:t,targetDoc:n,path:Ut.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iu(s){const e=s._freezeSettings(),t=nu(s._databaseId);return new yR(s._databaseId,!!e.ignoreUndefinedProperties,t)}function dE(s,e,t,n,r,i={}){const o=s.createContext(i.merge||i.mergeFields?2:0,e,t,r);id("Data must be an object, but it was:",o,n);const a=fE(n,o);let l,u;if(i.merge)l=new Xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const B of i.mergeFields){const p=Us(e,B,t);if(!o.contains(p))throw new W(k.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);mE(h,p)||h.push(p)}l=new Xt(h),u=o.fieldTransforms.filter((B=>l.covers(B.field)))}else l=null,u=o.fieldTransforms;return new ER(new Rt(a),l,u)}class Ha extends Ua{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ha}}class rd extends Ua{_toFieldTransform(e){return new $v(e.path,new na)}isEqual(e){return e instanceof rd}}function IR(s,e,t,n){const r=s.createContext(1,e,t);id("Data must be an object, but it was:",r,n);const i=[],o=Rt.empty();$s(n,((l,u)=>{const h=gE(e,l,t);u=ne(u);const B=r.childContextForFieldPath(h);if(u instanceof Ha)i.push(h);else{const p=Gs(u,B);p!=null&&(i.push(h),o.set(h,p))}}));const a=new Xt(i);return new hE(o,a,r.fieldTransforms)}function DR(s,e,t,n,r,i){const o=s.createContext(1,e,t),a=[Us(e,n,t)],l=[r];if(i.length%2!=0)throw new W(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Us(e,i[p])),l.push(i[p+1]);const u=[],h=Rt.empty();for(let p=a.length-1;p>=0;--p)if(!mE(u,a[p])){const g=a[p];let m=l[p];m=ne(m);const S=o.childContextForFieldPath(g);if(m instanceof Ha)u.push(g);else{const x=Gs(m,S);x!=null&&(u.push(g),h.set(g,x))}}const B=new Xt(u);return new hE(h,B,o.fieldTransforms)}function wR(s,e,t,n=!1){return Gs(t,s.createContext(n?4:3,e))}function Gs(s,e,t){if(CE(s=ne(s)))return id("Unsupported field value:",e,s),fE(s,e);if(s instanceof Ua)return(function(r,i){if(!BE(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,i){const o=[];let a=0;for(const l of r){let u=Gs(l,i.childContextForArray(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}})(s,e)}return(function(r,i,o){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return QB(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=ye.fromDate(r);return{timestampValue:ko(i.serializer,a)}}if(r instanceof ye){const a=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ko(i.serializer,a)}}if(pE(r)){const a=ye.fromInstant(r),l=new ye(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:ko(i.serializer,l)}}if(r instanceof fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yt)return{bytesValue:z_(i.serializer,r._byteString)};if(r instanceof Me){const a=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw i.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:td(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof bt)return(function(l,u){const h=l instanceof bt?l.toArray():l;return{mapValue:{fields:{[D_]:{stringValue:w_},[ea]:{arrayValue:{values:h.map((p=>{if(typeof p!="number")throw u.createError("VectorValues must only contain numeric values.");return Yl(u.serializer,p)}))}}}}}})(r,i);if(tE(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${zl(r)}`)})(s,e)}function fE(s,e){const t={};return p_(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(s,((n,r)=>{const i=Gs(r,e.childContextForField(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function pE(s){if(typeof s!="object"||s===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&s instanceof Temporal.Instant)return!0;const e=s;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function CE(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof ye||s instanceof fn||s instanceof Yt||s instanceof Me||s instanceof Ua||s instanceof bt||pE(s)||tE(s))}function id(s,e,t){if(!CE(t)||!La(t)){const n=zl(t);throw n==="an object"?e.createError(s+" a custom object"):e.createError(s+" "+n)}}function Us(s,e,t){if((e=ne(e))instanceof Ga)return e._internalPath;if(typeof e=="string")return gE(s,e);throw dl("Field path arguments must be of type string or ",s,!1,void 0,t)}const TR=new RegExp("[~\\*/\\[\\]]");function gE(s,e,t){if(e.search(TR)>=0)throw dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new Ga(...e.split("."))._internalPath}catch{throw dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function dl(s,e,t,n,r){const i=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${r}`),l+=")"),new W(k.INVALID_ARGUMENT,a+s+l)}function mE(s,e){return s.some((t=>t.isEqual(e)))}function _E(s){return typeof s._readUserData=="function"}/**
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
 */class wt{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=Rt.empty();for(const r in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(r)){const i=this.optionDefinitions[r];if(r in e){const o=e[r];let a;i.nestedOptions&&La(o)?a={mapValue:{fields:new wt(i.nestedOptions).getOptionsProto(t,o)}}:o&&(a=Gs(o,t)??void 0),a&&n.set(Ut.fromServerFormat(i.serverName),a)}}return n}getOptionsProto(e,t,n){const r=this._getKnownOptions(t,e);if(n){const i=new Map(Vv(n,((o,a)=>[Ut.fromServerFormat(a),o!==void 0?Gs(o,e):null])));r.setAll(i)}return r.value.mapValue.fields??{}}}/**
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
 */function vR(s){return typeof s=="object"&&s!==null&&!!("nullValue"in s&&(s.nullValue===null||s.nullValue==="NULL_VALUE")||"booleanValue"in s&&(s.booleanValue===null||typeof s.booleanValue=="boolean")||"integerValue"in s&&(s.integerValue===null||typeof s.integerValue=="number"||typeof s.integerValue=="string")||"doubleValue"in s&&(s.doubleValue===null||typeof s.doubleValue=="number")||"timestampValue"in s&&(s.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(s.timestampValue))||"stringValue"in s&&(s.stringValue===null||typeof s.stringValue=="string")||"bytesValue"in s&&(s.bytesValue===null||s.bytesValue instanceof Uint8Array)||"referenceValue"in s&&(s.referenceValue===null||typeof s.referenceValue=="string")||"geoPointValue"in s&&(s.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(s.geoPointValue))||"arrayValue"in s&&(s.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(s.arrayValue))||"mapValue"in s&&(s.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!La(t.fields))})(s.mapValue))||"fieldReferenceValue"in s&&(s.fieldReferenceValue===null||typeof s.fieldReferenceValue=="string")||"functionValue"in s&&(s.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(s.functionValue))||"pipelineValue"in s&&(s.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(s.pipelineValue)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(){return new Ha("deleteField")}function yE(){return new rd("serverTimestamp")}function IE(s){return new bt(s)}/**
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
 */function H(s){let e;return s instanceof Mr?s:(e=La(s)?bR(s):s instanceof Array?NR(s):DE(s,void 0),e)}function Dh(s){if(s instanceof Mr)return s;if(s instanceof bt)return ua(s);if(Array.isArray(s))return ua(IE(s));throw new Error("Unsupported value: "+typeof s)}function od(s){return Jv(s)?Jc(s):H(s)}class Mr{constructor(){this._protoValueType="ProtoValue"}add(e){return new L("add",[this,H(e)],"add")}asBoolean(){if(this instanceof Hs)return this;if(this instanceof Fi)return new TE(this);if(this instanceof Li)return new PR(this);if(this instanceof L)return new wE(this);throw new W("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new L("subtract",[this,H(e)],"subtract")}multiply(e){return new L("multiply",[this,H(e)],"multiply")}divide(e){return new L("divide",[this,H(e)],"divide")}mod(e){return new L("mod",[this,H(e)],"mod")}equal(e){return new L("equal",[this,H(e)],"equal").asBoolean()}notEqual(e){return new L("not_equal",[this,H(e)],"notEqual").asBoolean()}lessThan(e){return new L("less_than",[this,H(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new L("less_than_or_equal",[this,H(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new L("greater_than",[this,H(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new L("greater_than_or_equal",[this,H(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map((r=>H(r)));return new L("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new L("array_contains",[this,H(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Ao(e.map(H),"arrayContainsAll"):e;return new L("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Ao(e.map(H),"arrayContainsAny"):e;return new L("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new L("array_reverse",[this])}arrayLength(){return new L("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Ao(e.map(H),"equalAny"):e;return new L("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Ao(e.map(H),"notEqualAny"):e;return new L("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new L("exists",[this],"exists").asBoolean()}charLength(){return new L("char_length",[this],"charLength")}like(e){return new L("like",[this,H(e)],"like").asBoolean()}regexContains(e){return new L("regex_contains",[this,H(e)],"regexContains").asBoolean()}regexFind(e){return new L("regex_find",[this,H(e)],"regexFind")}regexFindAll(e){return new L("regex_find_all",[this,H(e)],"regexFindAll")}regexMatch(e){return new L("regex_match",[this,H(e)],"regexMatch").asBoolean()}stringContains(e){return new L("string_contains",[this,H(e)],"stringContains").asBoolean()}startsWith(e){return new L("starts_with",[this,H(e)],"startsWith").asBoolean()}endsWith(e){return new L("ends_with",[this,H(e)],"endsWith").asBoolean()}toLower(){return new L("to_lower",[this],"toLower")}toUpper(){return new L("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(H(e)),new L("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(H(e)),new L("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(H(e)),new L("rtrim",t,"rtrim")}type(){return new L("type",[this])}isType(e){return new L("is_type",[this,ua(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(H);return new L("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new L("string_index_of",[this,H(e)],"stringIndexOf")}stringRepeat(e){return new L("string_repeat",[this,H(e)],"stringRepeat")}stringReplaceAll(e,t){return new L("string_replace_all",[this,H(e),H(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new L("string_replace_one",[this,H(e),H(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(H);return new L("concat",[this,...n],"concat")}reverse(){return new L("reverse",[this],"reverse")}arrayFilter(e,t){return new L("array_filter",[this,H(e),t],"arrayFilter")}arrayTransform(e,t){return new L("array_transform",[this,H(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new L("array_transform",[this,H(e),H(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,H(e)];return t!==void 0&&n.push(H(t)),new L("array_slice",n,"arraySlice")}arrayFirst(){return new L("array_first",[this],"arrayFirst")}arrayFirstN(e){return new L("array_first_n",[this,H(e)],"arrayFirstN")}arrayLast(){return new L("array_last",[this],"arrayLast")}arrayLastN(e){return new L("array_last_n",[this,H(e)],"arrayLastN")}arrayMaximum(){return new L("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new L("maximum_n",[this,H(e)],"arrayMaximumN")}arrayMinimum(){return new L("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new L("minimum_n",[this,H(e)],"arrayMinimumN")}arrayIndexOf(e){return new L("array_index_of",[this,H(e),H("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new L("array_index_of",[this,H(e),H("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new L("array_index_of_all",[this,H(e)],"arrayIndexOfAll")}byteLength(){return new L("byte_length",[this],"byteLength")}ceil(){return new L("ceil",[this])}floor(){return new L("floor",[this])}abs(){return new L("abs",[this])}exp(){return new L("exp",[this])}mapGet(e){return new L("map_get",[this,ua(e)],"mapGet")}mapSet(e,t,...n){const r=[this,H(e),H(t),...n.map(H)];return new L("map_set",r,"mapSet")}mapKeys(){return new L("map_keys",[this],"mapKeys")}mapValues(){return new L("map_values",[this],"mapValues")}mapEntries(){return new L("map_entries",[this],"mapEntries")}getField(e){return new L("get_field",[this,H(e)],"get_field")}count(){return Qt._create("count",[this],"count")}sum(){return Qt._create("sum",[this],"sum")}average(){return Qt._create("average",[this],"average")}minimum(){return Qt._create("minimum",[this],"minimum")}maximum(){return Qt._create("maximum",[this],"maximum")}first(){return Qt._create("first",[this],"first")}last(){return Qt._create("last",[this],"last")}arrayAgg(){return Qt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return Qt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return Qt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new L("maximum",[this,...n.map(H)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new L("minimum",[this,...n.map(H)],"minimum")}vectorLength(){return new L("vector_length",[this],"vectorLength")}cosineDistance(e){return new L("cosine_distance",[this,Dh(e)],"cosineDistance")}dotProduct(e){return new L("dot_product",[this,Dh(e)],"dotProduct")}euclideanDistance(e){return new L("euclidean_distance",[this,Dh(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new L("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new L("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new L("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new L("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new L("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new L("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new L("timestamp_add",[this,H(e),H(t)],"timestampAdd")}timestampSubtract(e,t){return new L("timestamp_subtract",[this,H(e),H(t)],"timestampSubtract")}timestampDiff(e,t){return new L("timestamp_diff",[this,od(e),H(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,H(e)];return t&&n.push(H(t)),new L("timestamp_extract",n,"timestampExtract")}documentId(){return new L("document_id",[this],"documentId")}parent(){return new L("parent",[this],"parent")}substring(e,t){const n=H(e);return new L("substring",t===void 0?[this,n]:[this,n,H(t)],"substring")}arrayGet(e){return new L("array_get",[this,H(e)],"arrayGet")}isError(){return new L("is_error",[this],"isError").asBoolean()}ifError(e){const t=new L("if_error",[this,H(e)],"ifError");return e instanceof Hs?t.asBoolean():t}isAbsent(){return new L("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new L("map_remove",[this,H(e)],"mapRemove")}mapMerge(e,...t){const n=H(e),r=t.map(H);return new L("map_merge",[this,n,...r],"mapMerge")}pow(e){return new L("pow",[this,H(e)])}trunc(e){return e===void 0?new L("trunc",[this]):new L("trunc",[this,H(e)],"trunc")}round(e){return e===void 0?new L("round",[this]):new L("round",[this,H(e)],"round")}collectionId(){return new L("collection_id",[this])}length(){return new L("length",[this])}ln(){return new L("ln",[this])}sqrt(){return new L("sqrt",[this])}stringReverse(){return new L("string_reverse",[this])}ifAbsent(e){return new L("if_absent",[this,H(e)],"ifAbsent")}ifNull(e){return new L("if_null",[this,H(e)],"ifNull")}coalesce(e,...t){return new L("coalesce",[this,H(e),...t.map(H)],"coalesce")}join(e){return new L("join",[this,H(e)],"join")}log10(){return new L("log10",[this])}arraySum(){return new L("sum",[this])}split(e){return new L("split",[this,H(e)])}timestampTruncate(e,t){const n=[this,H(e)];return t&&n.push(H(t)),new L("timestamp_trunc",n)}ascending(){return OR(this)}descending(){return LR(this)}as(e){return new RR(this,e,"as")}}class Qt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const r=new Qt(e,t);return r._methodName=n,r}as(e){return new AR(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class AR{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class RR{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Ao extends Mr{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map((t=>t._toProto(e)))}}}_readUserData(e){this.cr.forEach((t=>t._readUserData(e)))}}class Li extends Mr{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new L("geo_distance",[this,H(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Jc(s){return SR(s,"field")}function SR(s,e){return new Li(typeof s=="string"?Dn===s?sE()._internalPath:Us("field",s):s._internalPath,e)}class Fi extends Mr{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Fi(e,void 0);return t._protoValue=e,t}_toProto(e){return X(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,vR(this._protoValue)||(this._protoValue=Gs(this.value,e))}}function ua(s,e){return DE(s,"constant")}function DE(s,e){const t=new Fi(s,e);return typeof s=="boolean"?new TE(t):t}class L extends Mr{constructor(e,t,n,r){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),r!==void 0&&(this._options=r)}get _optionsUtil(){return new wt({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((n=>n._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Hs extends Mr{get _methodName(){return this._expr._methodName}countIf(){return Qt._create("count_if",[this],"countIf")}not(){return new L("not",[this],"not").asBoolean()}conditional(e,t){return new L("conditional",[this,e,t],"conditional")}ifError(e){const t=H(e),n=new L("if_error",[this,t],"ifError");return t instanceof Hs?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class wE extends Hs{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class TE extends Hs{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class PR extends Hs{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function bR(s,e){const t=[];for(const n in s)if(Object.prototype.hasOwnProperty.call(s,n)){const r=s[n];t.push(ua(n)),t.push(H(r))}return new L("map",t,"map")}function NR(s){return(function(t,n){return new L("array",t.map((r=>H(r))),n)})(s,"array")}function OR(s){return new vE(od(s),"ascending","ascending")}function LR(s){return new vE(od(s),"descending","descending")}class vE{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:nE(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class en{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class AE extends en{get _name(){return"add_fields"}get _optionsUtil(){return new wt({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[ca(e,this.fields)]}}_readUserData(e){super._readUserData(e),qs(this.fields,e)}}class RE extends en{get _name(){return"aggregate"}get _optionsUtil(){return new wt({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[ca(e,this.accumulators),ca(e,this.groups)]}}_readUserData(e){super._readUserData(e),qs(this.groups,e),qs(this.accumulators,e)}}class SE extends en{get _name(){return"distinct"}get _optionsUtil(){return new wt({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[ca(e,this.groups)]}}_readUserData(e){super._readUserData(e),qs(this.groups,e)}}class ou extends en{get _name(){return"collection"}get _optionsUtil(){return new wt({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class au extends en{get _name(){return"collection_group"}get _optionsUtil(){return new wt({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class ad extends en{get _name(){return"database"}get _optionsUtil(){return new wt({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class cd extends en{get _name(){return"documents"}get _optionsUtil(){return new wt({})}constructor(e,t){if(super(t),!e||e.length===0)throw new W(k.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map((i=>i.startsWith("/")?i:"/"+i)),r=new Set(n);if(r.size!==n.length)throw new W(k.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=n,this.Pr=r}_toProto(e){return{...super._toProto(e),args:this.Tr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class cu extends en{get _name(){return"where"}get _optionsUtil(){return new wt({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),qs(this.condition,e)}}class Sr extends en{get _name(){return"limit"}get _optionsUtil(){return new wt({})}constructor(e,t){X(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[QB(e,this.limit)]}}}class ag extends en{get _name(){return"offset"}get _optionsUtil(){return new wt({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[QB(e,this.offset)]}}}class FR extends en{get _name(){return"select"}get _optionsUtil(){return new wt({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[ca(e,this.selections)]}}_readUserData(e){super._readUserData(e),qs(this.selections,e)}}class qn extends en{get _name(){return"sort"}get _optionsUtil(){return new wt({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),qs(this.orderings,e)}}class ld extends en{get _name(){return"replace_with"}get _optionsUtil(){return new wt({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),nE(ld.Ir)]}}_readUserData(e){super._readUserData(e),qs(this.map,e)}}ld.Ir="full_replace";function qs(s,e){return _E(s)?s._readUserData(e):Array.isArray(s)?s.forEach((t=>t._readUserData(e))):s instanceof Map?s.forEach((t=>t._readUserData(e))):Object.values(s).forEach((t=>t._readUserData(e))),s}/**
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
 */class xo{constructor(e,t,n,r){this._db=e,this.userDataReader=t,this._userDataWriter=n,this.stages=r}Vr(e,t){const n=this.userDataReader.createContext(3,e);return _E(t)?t._readUserData(n):Array.isArray(t)?t.forEach((r=>r._readUserData(n))):t.forEach((r=>r._readUserData(n))),t}where(e){const t=this.stages.map((n=>n));return this.Vr("where",e),t.push(new cu(e,{})),new xo(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((n=>n));return t.push(new Sr(e,{})),new xo(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const n=this.stages.map((r=>r));return"orderings"in e?n.push(new qn(this.Vr("sort",e.orderings),{})):n.push(new qn(this.Vr("sort",[e,...t]),{})),new xo(this._db,this.userDataReader,this._userDataWriter,n)}dr(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class At{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return lu(this)}getPipelineCollectionGroup(){return ud(this)}getPipelineCollectionId(){return kR(this)}getPipelineDocuments(){return BB(this)}getPipelineFlavor(){return(function(t){let n="exact";return t.stages.forEach(((r,i)=>{r._name!==SE.name&&r._name!==RE.name||(n="keyless"),r._name===FR.name&&n==="exact"&&(n="augmented"),r._name===AE.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")})),n})(this)}getPipelineSourceType(){return As(this)}}function As(s){const e=s.stages[0];return e instanceof ou||e instanceof au||e instanceof ad||e instanceof cd?e._name:"unknown"}function lu(s){if(As(s)==="collection")return s.stages[0].hr}function ud(s){if(As(s)==="collection_group")return s.stages[0].collectionId}function kR(s){switch(As(s)){case"collection":return Ie.fromString(lu(s)).lastSegment();case"collection_group":return ud(s);default:return}}function BB(s){if(As(s)==="documents")return s.stages[0].Tr}class T{constructor(e,t){this.type=e,this.value=t}static mr(){return new T("ERROR",void 0)}static pr(){return new T("UNSET",void 0)}static gr(){return new T("NULL",Ci)}static newValue(e){return Zt(e)?new T("NULL",Ci):(function(n){return!!n&&"booleanValue"in n})(e)?new T("BOOLEAN",e):wn(e)?new T("INT",e):fr(e)?new T("DOUBLE",e):(function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue})(e)?new T("TIMESTAMP",e):(function(n){return!!n&&"stringValue"in n})(e)?new T("STRING",e):(function(n){return!!n&&"bytesValue"in n})(e)?new T("BYTES",e):e.referenceValue?new T("REFERENCE",e):e.geoPointValue?new T("GEO_POINT",e):mi(e)?new T("ARRAY",e):ol(e)?new T("VECTOR",e):yr(e)?new T("MAP",e):new T("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function Mo(s){if(!s.yr())return s.value}function PE(s){return s instanceof Hs?s._expr:s}function re(s){if((s=PE(s))instanceof Li)return new xR(s);if(s instanceof Fi)return new MR(s);if(s instanceof Ao)return new VR(s);if(s instanceof L){if(s.name==="add")return new HR(s);if(s.name==="subtract")return new qR(s);if(s.name==="multiply")return new jR(s);if(s.name==="divide")return new JR(s);if(s.name==="mod")return new WR(s);if(s.name==="and")return new KR(s);if(s.name==="equal")return new iS(s);if(s.name==="not_equal")return new oS(s);if(s.name==="less_than")return new aS(s);if(s.name==="less_than_or_equal")return new cS(s);if(s.name==="greater_than")return new lS(s);if(s.name==="greater_than_or_equal")return new uS(s);if(s.name==="array_concat")return new hS(s);if(s.name==="array_reverse")return new BS(s);if(s.name==="array_contains")return new dS(s);if(s.name==="array_contains_all")return new fS(s);if(s.name==="array_contains_any")return new pS(s);if(s.name==="array_length")return new CS(s);if(s.name==="array_element")return new gS(s);if(s.name==="equal_any")return new bE(s);if(s.name==="not_equal_any")return new QR(s);if(s.name==="is_nan")return new $R(s);if(s.name==="is_not_nan")return new YR(s);if(s.name==="is_null")return new XR(s);if(s.name==="is_not_null")return new ZR(s);if(s.name==="is_error")return new eS(s);if(s.name==="exists")return new tS(s);if(s.name==="not")return new uu(s);if(s.name==="or")return new zR(s);if(s.name==="xor")return new hd(s);if(s.name==="conditional")return new nS(s);if(s.name==="maximum")return new sS(s);if(s.name==="minimum")return new rS(s);if(s.name==="reverse")return new mS(s);if(s.name==="replace_first")return new _S(s);if(s.name==="replace_all")return new ES(s);if(s.name==="char_length")return new yS(s);if(s.name==="byte_length")return new IS(s);if(s.name==="like")return new DS(s);if(s.name==="regex_contains")return new wS(s);if(s.name==="regex_match")return new TS(s);if(s.name==="string_contains")return new vS(s);if(s.name==="starts_with")return new AS(s);if(s.name==="ends_with")return new RS(s);if(s.name==="to_lower")return new SS(s);if(s.name==="to_upper")return new PS(s);if(s.name==="trim")return new bS(s);if(s.name==="string_concat")return new NS(s);if(s.name==="map_get")return new OS(s);if(s.name==="cosine_distance")return new LS(s);if(s.name==="dot_product")return new FS(s);if(s.name==="euclidean_distance")return new kS(s);if(s.name==="vector_length")return new xS(s);if(s.name==="unix_micros_to_timestamp")return new HS(s);if(s.name==="timestamp_to_unix_micros")return new JS(s);if(s.name==="unix_millis_to_timestamp")return new qS(s);if(s.name==="timestamp_to_unix_millis")return new WS(s);if(s.name==="unix_seconds_to_timestamp")return new jS(s);if(s.name==="timestamp_to_unix_seconds")return new KS(s);if(s.name==="timestamp_add")return new zS(s);if(s.name==="timestamp_subtract")return new QS(s)}throw new Error(`Unknown Expr : ${s}`)}class xR{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Dn)return T.newValue({referenceValue:Bl(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return T.newValue({timestampValue:jc(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return T.newValue({timestampValue:jc(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?Ql(n)?T.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:jc(i.serializer,oe.fromTimestamp(fi(o)))};if(i.serverTimestampBehavior==="previous"){const a=ka(o);if(a)return a}return{nullValue:"NULL_VALUE"}})(e,n)):T.newValue(n):T.pr()}}class MR{constructor(e){this.expr=e}evaluate(e,t){return T.newValue(this.expr._getValue())}}class VR{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.cr.map((r=>re(r).evaluate(e,t)));return n.some((r=>r.yr()))?T.mr():T.newValue({arrayValue:{values:n.map((r=>r.value))}})}}function pt(s){return fr(s)?Number(s.doubleValue):Number(s.integerValue)}function Sn(s){return BigInt(s.integerValue)}const GR=BigInt("0x7fffffffffffffff"),UR=-BigInt("0x8000000000000000");class qa{constructor(e){this.expr=e}evaluate(e,t){X(this.expr.params.length>=2,24778);const n=re(this.expr.params[0]).evaluate(e,t),r=re(this.expr.params[1]).evaluate(e,t);let i=this.br(n,r);for(const o of this.expr.params.slice(2)){const a=re(o).evaluate(e,t);i=this.br(i,a)}return i}br(e,t){if(e.yr()||t.yr())return T.mr();if(e.wr()||t.wr())return T.gr();const n=e.value,r=t.value;if(!fr(n)&&!wn(n)||!fr(r)&&!wn(r))return T.mr();if(fr(n)||fr(r)){const i=this.Sr(n,r);return i?T.newValue(i):T.mr()}if(wn(n)&&wn(r)){const i=this.vr(n,r);return i===void 0?T.mr():typeof i=="number"?T.newValue({doubleValue:i}):i<UR||i>GR?T.mr():T.newValue({integerValue:`${i}`})}return T.mr()}}function ss(s,e){return st(s)!==st(e)?"TYPE_MISMATCH":jt(s)||jt(e)?"NOT_EQ":Zt(s)&&Zt(e)?"EQ":Zt(s)||Zt(e)?"NULL":mi(s)&&mi(e)?(function(n,r){var o,a,l;if(((o=n.values)==null?void 0:o.length)!==((a=r.values)==null?void 0:a.length))return"NOT_EQ";let i=!1;for(let u=0;u<(((l=n.values)==null?void 0:l.length)??0);u++){const h=n.values[u],B=r.values[u];switch(ss(h,B)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:se(44609,{Dr:h,Cr:B})}}return i?"NULL":"EQ"})(s.arrayValue,e.arrayValue):ol(s)&&ol(e)||yr(s)&&yr(e)?(function(n,r){const i=n.fields||{},o=r.fields||{};if(rl(i)!==rl(o))return"NOT_EQ";let a=!1;for(const l in i)if(i.hasOwnProperty(l)){if(o[l]===void 0)return"NOT_EQ";switch(ss(i[l],o[l])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":a=!0}}return a?"NULL":"EQ"})(s.mapValue,e.mapValue):(function(n,r){return on(n,r,{u:!1,i:!0,o:!0})})(s,e)?"EQ":"NOT_EQ"}class HR extends qa{vr(e,t){return Sn(e)+Sn(t)}Sr(e,t){return{doubleValue:pt(e)+pt(t)}}}class qR extends qa{constructor(e){super(e),this.expr=e}vr(e,t){return Sn(e)-Sn(t)}Sr(e,t){return{doubleValue:pt(e)-pt(t)}}}class jR extends qa{constructor(e){super(e),this.expr=e}vr(e,t){return Sn(e)*Sn(t)}Sr(e,t){return{doubleValue:pt(e)*pt(t)}}}class JR extends qa{constructor(e){super(e),this.expr=e}vr(e,t){const n=Sn(t);if(n!==BigInt(0))return Sn(e)/n}Sr(e,t){const n=pt(t);return n===0?{doubleValue:Zo(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:pt(e)/n}}}class WR extends qa{constructor(e){super(e),this.expr=e}vr(e,t){const n=Sn(t);if(n!==BigInt(0))return Sn(e)%n}Sr(e,t){const n=pt(t);if(n!==0)return{doubleValue:pt(e)%n}}}class KR{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,r=!1;for(const o of this.expr.params){const a=re(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!((i=a.value)!=null&&i.booleanValue))return T.newValue(ht);break;case"NULL":r=!0;break;default:n=!0}}return n?T.mr():r?T.gr():T.newValue(Ht)}}class uu{constructor(e){this.expr=e}evaluate(e,t){var r;X(this.expr.params.length===1,9634);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return T.newValue({booleanValue:!((r=n.value)!=null&&r.booleanValue)});case"NULL":return T.gr();default:return T.mr()}}}class zR{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,r=!1;for(const o of this.expr.params){const a=re(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if((i=a.value)!=null&&i.booleanValue)return T.newValue(Ht);break;case"NULL":r=!0;break;default:n=!0}}return n?T.mr():r?T.gr():T.newValue(ht)}}class hd{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,r=!1;for(const o of this.expr.params){const a=re(o).evaluate(e,t);switch(a.type){case"BOOLEAN":n=hd.xor(n,!!((i=a.value)!=null&&i.booleanValue));break;case"NULL":r=!0;break;default:return T.mr()}}return r?T.gr():T.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class bE{constructor(e){this.expr=e}evaluate(e,t){var o,a;X(this.expr.params.length===2,55094);let n=!1;const r=re(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return T.mr()}const i=re(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.mr()}if(n)return T.gr();for(const l of((a=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:a.values)??[])switch(Zt(r.value)&&Zt(l)?"EQ":ss(r.value,l)){case"EQ":return T.newValue(Ht);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:se(44608,{value:r.value,candidate:l})}return n?T.gr():T.newValue(ht)}}class QR{constructor(e){this.expr=e}evaluate(e,t){return new uu(new L("not",[new L("equal_any",this.expr.params)])).evaluate(e,t)}}class $R{constructor(e){this.expr=e}evaluate(e,t){X(this.expr.params.length===1,23322);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return T.newValue(ht);case"DOUBLE":return T.newValue({booleanValue:isNaN(pt(n.value))});case"NULL":return T.gr();default:return T.mr()}}}class YR{constructor(e){this.expr=e}evaluate(e,t){return X(this.expr.params.length===1,50406),new uu(new L("not",[new L("is_nan",this.expr.params)])).evaluate(e,t)}}class XR{constructor(e){this.expr=e}evaluate(e,t){switch(X(this.expr.params.length===1,23123),re(this.expr.params[0]).evaluate(e,t).type){case"NULL":return T.newValue(Ht);case"UNSET":case"ERROR":return T.mr();default:return T.newValue(ht)}}}class ZR{constructor(e){this.expr=e}evaluate(e,t){return X(this.expr.params.length===1,23167),new uu(new L("not",[new L("is_null",this.expr.params)])).evaluate(e,t)}}class eS{constructor(e){this.expr=e}evaluate(e,t){return X(this.expr.params.length===1,5228),re(this.expr.params[0]).evaluate(e,t).type==="ERROR"?T.newValue(Ht):T.newValue(ht)}}class tS{constructor(e){this.expr=e}evaluate(e,t){switch(X(this.expr.params.length===1,6877),re(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return T.mr();case"UNSET":return T.newValue(ht);default:return T.newValue(Ht)}}}class nS{constructor(e){this.expr=e}evaluate(e,t){var r;X(this.expr.params.length===3,11706);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return(r=n.value)!=null&&r.booleanValue?re(this.expr.params[1]).evaluate(e,t):re(this.expr.params[2]).evaluate(e,t);case"NULL":return re(this.expr.params[2]).evaluate(e,t);default:return T.mr()}}}class sS{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>re(i).evaluate(e,t)));let r;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||qt(i.value,r.value)>0?i:r}return r===void 0?T.gr():r}}class rS{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>re(i).evaluate(e,t)));let r;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||qt(i.value,r.value)<0?i:r}return r===void 0?T.gr():r}}class ki{constructor(e){this.expr=e}evaluate(e,t){X(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return T.mr()}const r=re(this.expr.params[1]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return T.mr()}return this.Fr(n,r)}}class iS extends ki{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return T.newValue(Ht);if(e.wr()||t.wr()||jt(e.value)||jt(t.value)||st(e.value)!==st(t.value))return T.newValue(ht);switch(ss(e.value,t.value)){case"EQ":return T.newValue(Ht);case"NOT_EQ":return T.newValue(ht);case"NULL":return T.gr();default:se(44615,{left:e,right:t})}}}class oS extends ki{constructor(e){super(e),this.expr=e}Fr(e,t){switch(ss(e.value,t.value)){case"EQ":return T.newValue(ht);case"NOT_EQ":case"TYPE_MISMATCH":return T.newValue(Ht);case"NULL":return T.gr();default:se(44614,{left:e,right:t})}}}class aS extends ki{constructor(e){super(e),this.expr=e}Fr(e,t){return st(e.value)!==st(t.value)||jt(e.value)||jt(t.value)?T.newValue(ht):T.newValue({booleanValue:qt(e.value,t.value)<0})}}class cS extends ki{constructor(e){super(e),this.expr=e}Fr(e,t){return st(e.value)!==st(t.value)||jt(e.value)||jt(t.value)?T.newValue(ht):ss(e.value,t.value)==="EQ"?T.newValue(Ht):T.newValue({booleanValue:qt(e.value,t.value)<0})}}class lS extends ki{constructor(e){super(e),this.expr=e}Fr(e,t){return st(e.value)!==st(t.value)||jt(e.value)||jt(t.value)?T.newValue(ht):T.newValue({booleanValue:qt(e.value,t.value)>0})}}class uS extends ki{constructor(e){super(e),this.expr=e}Fr(e,t){return st(e.value)!==st(t.value)||jt(e.value)||jt(t.value)?T.newValue(ht):ss(e.value,t.value)==="EQ"?T.newValue(Ht):T.newValue({booleanValue:qt(e.value,t.value)>0})}}class hS{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class BS{constructor(e){this.expr=e}evaluate(e,t){var r;X(this.expr.params.length===1,216);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return T.gr();case"ARRAY":{const i=((r=n.value.arrayValue)==null?void 0:r.values)??[];return T.newValue({arrayValue:{values:[...i].reverse()}})}default:return T.mr()}}}class dS{constructor(e){this.expr=e}evaluate(e,t){return X(this.expr.params.length===2,52884),new bE(new L("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class fS{constructor(e){this.expr=e}evaluate(e,t){var l,u,h,B;X(this.expr.params.length===2,1392);let n=!1;const r=re(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.mr()}const i=re(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.mr()}if(n)return T.gr();const o=((u=(l=i.value)==null?void 0:l.arrayValue)==null?void 0:u.values)??[],a=((B=(h=r.value)==null?void 0:h.arrayValue)==null?void 0:B.values)??[];for(const p of o){let g=!1;n=!1;for(const m of a){switch(Zt(p)&&Zt(m)?"EQ":ss(p,m)){case"EQ":g=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:se(44613,{value:m,search:p})}if(g)break}if(!g)return T.newValue(ht)}return T.newValue(Ht)}}class pS{constructor(e){this.expr=e}evaluate(e,t){var l,u,h,B;X(this.expr.params.length===2,2680);let n=!1;const r=re(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.mr()}const i=re(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.mr()}if(n)return T.gr();const o=((u=(l=i.value)==null?void 0:l.arrayValue)==null?void 0:u.values)??[],a=((B=(h=r.value)==null?void 0:h.arrayValue)==null?void 0:B.values)??[];for(const p of a)for(const g of o)switch(Zt(p)&&Zt(g)?"EQ":ss(p,g)){case"EQ":return T.newValue(Ht);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:se(60403,{value:p,search:g})}return n?T.gr():T.newValue(ht)}}class CS{constructor(e){this.expr=e}evaluate(e,t){var r,i,o;X(this.expr.params.length===1,38605);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return T.gr();case"ARRAY":return T.newValue({integerValue:`${((o=(i=(r=n.value)==null?void 0:r.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return T.mr()}}}class gS{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class mS{constructor(e){this.expr=e}evaluate(e,t){var r,i;X(this.expr.params.length===1,1508);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return T.gr();case"BYTES":{const o=(r=n.value)==null?void 0:r.bytesValue;if(typeof o=="string"){const a=Qe.fromBase64String(o).toUint8Array();return a.reverse(),T.newValue({bytesValue:Qe.fromUint8Array(a).toBase64()})}return T.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=n.value)==null?void 0:i.stringValue,a=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),l=Array.from(a,(u=>u.segment)).reverse();return T.newValue({stringValue:l.join("")})}default:return T.mr()}}}class _S{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class ES{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class yS{constructor(e){this.expr=e}evaluate(e,t){X(this.expr.params.length===1,19400);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return T.gr();case"STRING":{const r=(function(o){let a=0;for(let l=0;l<o.length;l++){const u=o.codePointAt(l);if(u===void 0)return;if(u<=65535)if(u>=55296&&u<=57343)if(u<=56319){const h=o.codePointAt(l+1);h!==void 0&&h>=56320&&h<=57343?(a+=1,l++):a+=1}else a+=1;else a+=1;else{if(!(u<=1114111))return;a+=1,l++}}return a})(n.value.stringValue);return r===void 0?T.mr():T.newValue({integerValue:r})}default:return T.mr()}}}class IS{constructor(e){this.expr=e}evaluate(e,t){var r,i;X(this.expr.params.length===1,8486);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const o=(r=n.value)==null?void 0:r.bytesValue;return typeof o=="string"?T.newValue({integerValue:Qe.fromBase64String(o).toUint8Array().length}):T.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=(function(l){let u=0;for(let h=0;h<l.length;h++){const B=l.codePointAt(h);if(B===void 0)return;if(B>=55296&&B<=57343){if(!(B<=56319))return;{const p=l.codePointAt(h+1);if(p===void 0||!(p>=56320&&p<=57343))return;u+=4,h++}}else if(B<=127)u+=1;else if(B<=2047)u+=2;else if(B<=65535)u+=3;else{if(!(B<=1114111))return;u+=4,h++}}return u})((i=n.value)==null?void 0:i.stringValue);return o===void 0?T.mr():T.newValue({integerValue:o})}case"NULL":return T.gr();default:return T.mr()}}}class xi{constructor(e){this.expr=e}evaluate(e,t){var o,a;X(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const r=re(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":break;case"NULL":n=!0;break;default:return T.mr()}const i=re(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return T.mr()}return n?T.gr():this.Or((o=r.value)==null?void 0:o.stringValue,(a=i.value)==null?void 0:a.stringValue)}}class DS extends xi{Or(e,t){try{const n=(function(o){let a="";for(let l=0;l<o.length;l++){const u=o.charAt(l);switch(u){case"_":a+=".";break;case"%":a+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":a+="\\"+u;break;default:a+=u}}return"^"+a+"$"})(t),r=JB.compile(n);return T.newValue({booleanValue:r.matches(e)})}catch(n){return rn(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),T.mr()}}}class wS extends xi{Or(e,t){try{const n=JB.compile(t);return T.newValue({booleanValue:n.test(e)})}catch{return rn(`Invalid regex pattern found in regex_contains: ${t}, returning error`),T.mr()}}}class TS extends xi{Or(e,t){try{return T.newValue({booleanValue:JB.compile(t).matches(e)})}catch{return rn(`Invalid regex pattern found in regex_match: ${t}, returning error`),T.mr()}}}class vS extends xi{Or(e,t){return T.newValue({booleanValue:e.includes(t)})}}class AS extends xi{Or(e,t){return T.newValue({booleanValue:e.startsWith(t)})}}class RS extends xi{Or(e,t){return T.newValue({booleanValue:e.endsWith(t)})}}class SS{constructor(e){this.expr=e}evaluate(e,t){var r,i;X(this.expr.params.length===1,29079);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return T.newValue({stringValue:(i=(r=n.value)==null?void 0:r.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return T.gr();default:return T.mr()}}}class PS{constructor(e){this.expr=e}evaluate(e,t){var r,i;X(this.expr.params.length===1,60487);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return T.newValue({stringValue:(i=(r=n.value)==null?void 0:r.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return T.gr();default:return T.mr()}}}class bS{constructor(e){this.expr=e}evaluate(e,t){var r,i;X(this.expr.params.length===1,28544);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return T.newValue({stringValue:(i=(r=n.value)==null?void 0:r.stringValue)==null?void 0:i.trim()});case"NULL":return T.gr();default:return T.mr()}}}class NS{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((o=>re(o).evaluate(e,t)));let r="",i=!1;for(const o of n)switch(o.type){case"STRING":r+=o.value.stringValue;break;case"NULL":i=!0;break;default:return T.mr()}return i?T.gr():T.newValue({stringValue:r})}}class OS{constructor(e){this.expr=e}evaluate(e,t){var o,a,l,u;X(this.expr.params.length===2,4483);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return T.pr();case"MAP":break;default:return T.mr()}const r=re(this.expr.params[1]).evaluate(e,t);if(r.type!=="STRING")return T.mr();const i=(u=(a=(o=n.value)==null?void 0:o.mapValue)==null?void 0:a.fields)==null?void 0:u[(l=r.value)==null?void 0:l.stringValue];return i===void 0?T.pr():T.newValue(i)}}class Bd{constructor(e){this.expr=e}evaluate(e,t){var u,h;X(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const r=re(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":break;case"NULL":n=!0;break;default:return T.mr()}const i=re(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return T.mr()}if(n)return T.gr();const o=iB(r.value),a=iB(i.value);if(o===void 0||a===void 0||((u=o.values)==null?void 0:u.length)!==((h=a.values)==null?void 0:h.length))return T.mr();const l=this.Mr(o,a);return l===void 0||isNaN(l)?T.mr():T.newValue({doubleValue:l})}}class LS extends Bd{Mr(e,t){const n=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(n.length===0)return;let i=0,o=0,a=0;for(let u=0;u<n.length;u++){if(!Ms(n[u])||!Ms(r[u]))return;const h=pt(n[u]),B=pt(r[u]);i+=h*B,o+=h*h,a+=B*B}const l=Math.sqrt(o)*Math.sqrt(a);if(l!==0)return 1-Math.max(-1,Math.min(1,i/l))}}class FS extends Bd{Mr(e,t){const n=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Ms(n[o])||!Ms(r[o]))return;i+=pt(n[o])*pt(r[o])}return i}}class kS extends Bd{Mr(e,t){const n=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Ms(n[o])||!Ms(r[o]))return;const a=pt(n[o]),l=pt(r[o]);i+=Math.pow(a-l,2)}return Math.sqrt(i)}}class xS{constructor(e){this.expr=e}evaluate(e,t){var r;X(this.expr.params.length===1,39044);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const i=iB(n.value);return T.newValue({integerValue:((r=i==null?void 0:i.values)==null?void 0:r.length)??0})}case"NULL":return T.gr();default:return T.mr()}}}const ha=BigInt(-62135596800),Ba=BigInt(253402300799),fl=BigInt(1e3),Rs=BigInt(1e6),MS=ha*fl,VS=Ba*fl+BigInt(999),GS=ha*Rs,US=Ba*Rs+BigInt(999999);function dd(s){return s>=GS&&s<=US}function NE(s){return s>=ha&&s<=Ba}function da(s,e){const t=BigInt(s);return!(t<ha||t>Ba)&&!(e<0||e>=1e9)&&(t!==ha||e===0)&&!(t===Ba&&e>999999999)}function OE(s,e){return e<0?{seconds:s-1,nanos:e+1e9}:{seconds:s,nanos:e}}function fd(s){return BigInt(s.seconds)*Rs+BigInt(Math.trunc(s.nanoseconds/1e3))}class pd{constructor(e){this.expr=e}evaluate(e,t){X(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return T.gr();default:return T.mr()}}}class HS extends pd{toTimestamp(e){if(!dd(e))return T.mr();let t=Number(e/Rs),n=Number(e%Rs*BigInt(1e3));const r=OE(t,n);return t=r.seconds,n=r.nanos,da(t,n)?T.newValue({timestampValue:{seconds:t,nanos:n}}):T.mr()}}class qS extends pd{toTimestamp(e){if(!(function(o){return o>=MS&&o<=VS})(e))return T.mr();let t=Number(e/fl),n=Number(e%fl*BigInt(1e6));const r=OE(t,n);return t=r.seconds,n=r.nanos,da(t,n)?T.newValue({timestampValue:{seconds:t,nanos:n}}):T.mr()}}class jS extends pd{toTimestamp(e){if(!NE(e))return T.mr();const t=Number(e);return T.newValue({timestampValue:{seconds:t,nanos:0}})}}class Cd{constructor(e){this.expr=e}evaluate(e,t){X(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return T.gr();default:return T.mr()}const r=ed(n.value.timestampValue);return da(r.seconds,r.nanoseconds)?this.Nr(r):T.mr()}}class JS extends Cd{Nr(e){const t=fd(e);return dd(t)?T.newValue({integerValue:`${t.toString()}`}):T.mr()}}class WS extends Cd{Nr(e){const t=fd(e),n=t/BigInt(1e3),r=t%BigInt(1e3);return n>BigInt(0)||r===BigInt(0)?T.newValue({integerValue:n.toString()}):T.newValue({integerValue:(n-BigInt(1)).toString()})}}class KS extends Cd{Nr(e){const t=BigInt(e.seconds);return NE(t)?T.newValue({integerValue:t.toString()}):T.mr()}}class LE{constructor(e){this.expr=e}evaluate(e,t){X(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const r=re(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return T.mr()}const i=re(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function(Y){switch(Y){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return T.mr();break;case"NULL":n=!0;break;default:return T.mr()}const a=re(this.expr.params[2]).evaluate(e,t);switch(a.type){case"INT":break;case"NULL":n=!0;break;default:return T.mr()}if(n)return T.gr();const l=BigInt(a.value.integerValue);let u;try{switch(o){case"microsecond":u=l;break;case"millisecond":u=l*BigInt(1e3);break;case"second":u=l*BigInt(1e6);break;case"minute":u=l*BigInt(6e7);break;case"hour":u=l*BigInt(36e8);break;case"day":u=l*BigInt(864e8);break;default:return T.mr()}if(o!=="microsecond"&&l!==BigInt(0)&&u/l!==BigInt(this.Lr(o)))return T.mr()}catch(j){return rn(`Error during timestamp arithmetic: ${j}`),T.mr()}const h=ed(r.value.timestampValue);if(!da(h.seconds,h.nanoseconds))return T.mr();const B=fd(h),p=this.Br(B,u);if(!dd(p))return T.mr();const g=Number(p/Rs),m=p%Rs,S=Number((m<0?m+Rs:m)*BigInt(1e3)),x=m<0?g-1:g;return da(x,S)?T.newValue({timestampValue:{seconds:x,nanos:S}}):T.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class zS extends LE{Br(e,t){return e+t}}class QS extends LE{Br(e,t){return e-t}}function fa(s){if((s=PE(s))instanceof Li)return`fld(${s.fieldName})`;if(s instanceof Fi)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Me?`ref(${t.path})`:t instanceof bt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(s.value)})`;if(s instanceof L)return`fn(${s.name},[${s.params.map(fa).join(",")}])`;if(s.expressionType==="ListOfExpressions")return`list([${s.cr.map(fa).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(s,null,2)}`)}function $S(s){if(s instanceof AE)return`${s._name}(${bc(s.fields)})`;if(s instanceof RE){let e=`${s._name}(${bc(s.accumulators)})`;return s.groups.size>0&&(e+=`grouping(${bc(s.groups)})`),e}if(s instanceof SE)return`${s._name}(${bc(s.groups)})`;if(s instanceof ou)return`${s._name}(${s.hr})`;if(s instanceof au)return`${s._name}(${s.collectionId})`;if(s instanceof ad)return`${s._name}()`;if(s instanceof cd)return`${s._name}(${s.Tr.sort()})`;if(s instanceof cu)return`${s._name}(${fa(s.condition)})`;if(s instanceof Sr)return`${s._name}(${s.limit})`;if(s instanceof qn)return`${s._name}(${(function(t){return t.map((n=>`${fa(n.expr)}${n.direction}`)).join(",")})(s.orderings)})`;throw new Error(`Unrecognized stage ${s._name}`)}function bc(s){return`${Array.from(s.entries()).sort().map((([e,t])=>`${e}=${fa(t)}`)).join(",")}`}function Xn(s){return s.stages.map((e=>$S(e))).join("|")}function FE(s,e){return Xn(s)===Xn(e)}function it(s){return s instanceof At}function cg(s){return it(s)?Xn(s):Lo(s)}function kE(s){return it(s)?Xn(s):(function(t){return`${M_(An(t))}|lt:${t.limitType}`})(s)}function hu(s,e){return s instanceof At&&e instanceof At?FE(s,e):!(s instanceof At&&!(e instanceof At)||!(s instanceof At)&&e instanceof At)&&_A(s,e)}function xE(s){return hr(s)?Xn(s):M_(s)}function ME(s,e){return s instanceof At&&e instanceof At?FE(s,e):!(s instanceof At&&!(e instanceof At)||!(s instanceof At)&&e instanceof At)&&V_(s,e)}function YS(s,e){const t=(function(r){let i=!1;const o=[];for(const a of r)if(a instanceof qn)if(i=!0,a.orderings.some((l=>l.expr instanceof Li&&l.expr.fieldName===Dn)))o.push(a);else{const l=a.orderings.map((u=>u));l.push(Jc(Dn).ascending()),o.push(new qn(l,{}))}else a instanceof Sr&&(i||(o.push(new qn([Jc(Dn).ascending()],{})),i=!0)),o.push(a);return i||o.push(new qn([Jc(Dn).ascending()],{})),o})(s.stages);if(s.userDataReader){const n=s.userDataReader.createContext(3,"toCorePipeline");t.forEach((r=>r._readUserData(n)))}return new At(s.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Zv(i,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=No(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=No(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=J_();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const l=P_(o,a);l!==null&&n.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),de())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,((t,n)=>VC(t,n)))&&di(this.baseMutations,e.baseMutations,((t,n)=>VC(t,n)))}}class gd{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){X(e.mutations.length===n.length,58842,{Ur:e.mutations.length,kr:n.length});let r=(function(){return wA})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new gd(e,t,n,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="";function ZS(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=lg(e)),e=eP(s.get(t),e);return lg(e)}function eP(s,e){let t=e;const n=s.length;for(let r=0;r<n;r++){const i=s.charAt(r);switch(i){case"\0":t+="";break;case VE:t+="";break;default:t+=i}}return t}function lg(s){return s+VE+""}/**
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
 */class tP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jn{constructor(e,t,n,r,i=oe.min(),o=oe.min(),a=Qe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.$r=e}}function sP(s){const e=UA({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?hl(e,e.limit,"L"):e}/**
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
 */class rP{constructor(){this.Zi=new iP}addToCollectionParentIndex(e,t){return this.Zi.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(Vs.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(Vs.min())}updateCollectionGroup(e,t,n){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class iP{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new nt(Ie.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new nt(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new js(0)}static bs(){return new js(-1)}}// Copyright 2024 Google LLC* @license
function GE(s,e){var n;let t=e;for(const r of s.stages)t=aP({serializer:s.serializer,serverTimestampBehavior:(n=s.listenOptions)==null?void 0:n.serverTimestampBehavior},r,t);return t}function Bu(s,e){return GE(s,[e]).length>0}function oP(s,e){return it(s)?Bu(s,e):tu(s,e)}function aP(s,e,t){if(e instanceof ou)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&`/${a.key.getCollectionPath().canonicalString()}`===i.hr))})(0,e,t);if(e instanceof cu)return(function(r,i,o){return o.filter((a=>{const l=Mo(re(i.condition).evaluate(r,a));return l!==void 0&&on(l,Ht)}))})(s,e,t);if(e instanceof au)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&a.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof ad)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()))})(0,0,t);if(e instanceof cd)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&i.Pr.has(a.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof Sr)return(function(r,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof qn)return(function(r,i,o){const a=i.orderings.map((l=>({Ms:re(l.expr),direction:l.direction})));return[...o].sort(((l,u)=>{for(const{Ms:h,direction:B}of a){const p=Mo(h.evaluate(r,l)),g=Mo(h.evaluate(r,u)),m=qt(p??Ci,g??Ci);if(m!==0)return B==="ascending"?m:-m}return 0}))})(s,e,t);throw new Error(`Unknown stage: ${e._name}`)}function dB(s){const e=(function(n){for(let r=n.stages.length-1;r>=0;r--){const i=n.stages[r];if(i instanceof qn)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(s);return(t,n)=>{for(const r of e){const i=Mo(re(r.expr).evaluate({serializer:s.serializer},t)),o=Mo(re(r.expr).evaluate({serializer:s.serializer},n)),a=qt(i||Ci,o||Ci);if(a!==0)return r.direction==="ascending"?a:-a}return 0}}function wh(s){for(let e=s.stages.length-1;e>=0;e--){const t=s.stages[e];if(t instanceof Sr)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.changes=new xr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?M.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(n!==null&&No(n.mutation,r,Xt.empty(),ye.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,de()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=de()){const r=ys();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((i=>{let o=ei();return i.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=ys();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,de())))}populateOverlays(e,t,n){const r=[];return n.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,n,r){let i=Mt();const o=Fo(),a=(function(){return Fo()})();return t.forEach(((l,u)=>{const h=n.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Ys)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),No(h.mutation,u,h.mutation.getFieldMask(),ye.now())):o.set(u.key,Xt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,h)=>o.set(u,h))),t.forEach(((u,h)=>a.set(u,new lP(h,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(e,t){const n=Fo();let r=new ze(((o,a)=>o-a)),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let h=n.get(l)||Xt.empty();h=a.applyToLocalView(u,h),n.set(l,h);const B=(r.get(a.batchId)||de()).add(l);r=r.insert(a.batchId,B)}))})).next((()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,B=J_();h.forEach((p=>{if(!i.has(p)){const g=P_(t.get(p),n.get(p));g!==null&&B.set(p,g),i=i.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,B))}return M.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,r){return it(t)?this.getDocumentsMatchingPipeline(e,t,n,r):CA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):U_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):M.resolve(ys());let a=aa,l=i;return o.next((u=>M.forEach(u,((h,B)=>(a<B.largestBatchId&&(a=B.largestBatchId),i.get(h)?M.resolve():this.remoteDocumentCache.getEntry(e,h).next((p=>{l=l.insert(h,p)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,de()))).next((h=>({batchId:a,changes:j_(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next((n=>{let r=ei();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let o=ei();return this.indexManager.getCollectionParents(e,i).next((a=>M.forEach(a,(l=>{const u=(function(B,p){return new bi(p,null,B.explicitOrderBy.slice(),B.filters.slice(),B.limit,B.limitType,B.startAt,B.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,n,r).next((h=>{h.forEach(((B,p)=>{o=o.insert(B,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>tu(t,a)))))}getDocumentsMatchingPipeline(e,t,n,r){if(As(t)==="collection_group"){const i=ud(t);let o=ei();return this.indexManager.getCollectionParents(e,i).next((a=>M.forEach(a,(l=>{const u=(function(B,p){const g=B.stages.map((m=>m instanceof au?new ou(p.canonicalString(),{}):m));return new At(B.serializer,g)})(t,l.child(i));return this.getDocumentsMatchingPipeline(e,u,n,r).next((h=>{h.forEach(((B,p)=>{o=o.insert(B,p)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next((o=>{switch(i=o,As(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r);case"documents":let a=de();for(const l of BB(t))a=a.add(Z.fromPath(l));return this.remoteDocumentCache.getEntries(e,a);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new W("invalid-argument",`Invalid pipeline source to execute offline: ${Xn(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>Bu(t,a)))))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach(((i,o)=>{const a=o.getKey();t.get(a)===null&&(t=t.insert(a,Et.newInvalidDocument(a)))}));let r=ei();return t.forEach(((i,o)=>{const a=e.get(i);a!==void 0&&No(a.mutation,o,Xt.empty(),ye.now()),n(o)&&(r=r.insert(i,o))})),r}getOverlaysForPipeline(e,t,n){switch(As(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,Ie.fromString(lu(t)),n);case"collection_group":throw new W("invalid-argument",`Unexpected collection group pipeline: ${Xn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,BB(t).map((r=>Z.fromPath(r))));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new W("invalid-argument",`Failed to get overlays for pipeline: ${Xn(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return M.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:Rn(r.createTime)}})(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,(function(r){return{name:r.name,query:sP(r.bundledQuery),readTime:Rn(r.readTime)}})(t)),M.resolve()}}/**
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
 */class BP{constructor(){this.overlays=new ze(Z.comparator),this.Gs=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ys();return M.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&n.set(r,i)})))).next((()=>n))}getAllOverlays(e,t){const n=ys();return this.overlays.forEach(((r,i)=>{i.largestBatchId>t&&n.set(r,i)})),M.resolve(n)}saveOverlays(e,t,n){return n.forEach(((r,i)=>{this.Zr(e,t,i)})),M.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Gs.get(n);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Gs.delete(n)),M.resolve()}getOverlaysForCollection(e,t,n){const r=ys(),i=t.length+1,o=new Z(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>n&&r.set(l.getKey(),l)}return M.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ze(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let h=i.get(u.largestBatchId);h===null&&(h=ys(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ys(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=r)););return M.resolve(a)}Zr(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Gs.get(r.largestBatchId).delete(n.key);this.Gs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new tP(t,n));let i=this.Gs.get(t);i===void 0&&(i=de(),this.Gs.set(t,i)),this.Gs.set(t,i.add(n.key))}}/**
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
 */class dP{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.zs=new nt(ct.js),this.Hs=new nt(ct.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const n=new ct(e,t);this.zs=this.zs.add(n),this.Hs=this.Hs.add(n)}Ys(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Zs(new ct(e,t))}Xs(e,t){e.forEach((n=>this.removeReference(n,t)))}e_(e){const t=new Z(new Ie([])),n=new ct(t,e),r=new ct(t,e+1),i=[];return this.Hs.forEachInRange([n,r],(o=>{this.Zs(o),i.push(o.key)})),i}t_(){this.zs.forEach((e=>this.Zs(e)))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new Z(new Ie([])),n=new ct(t,e),r=new ct(t,e+1);let i=de();return this.Hs.forEachInRange([n,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new ct(e,0),n=this.zs.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ct{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return Z.comparator(e.key,t.key)||Ce(e.r_,t.r_)}static Js(e,t){return Ce(e.r_,t.r_)||Z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new nt(ct.js)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XS(i,t,n,r);this.mutationQueue.push(o);for(const a of r)this.i_=this.i_.add(new ct(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,t){return M.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.__(n),i=r<0?0:r;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?KB:this.Gr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ct(t,0),r=new ct(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([n,r],(o=>{const a=this.s_(o.r_);i.push(a)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new nt(Ce);return t.forEach((r=>{const i=new ct(r,0),o=new ct(r,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,o],(a=>{n=n.add(a.r_)}))})),M.resolve(this.o_(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Z.isDocumentKey(i)||(i=i.child(""));const o=new ct(new Z(i),0);let a=new nt(Ce);return this.i_.forEachWhile((l=>{const u=l.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.r_)),!0)}),o),M.resolve(this.o_(a))}o_(e){const t=[];return e.forEach((n=>{const r=this.s_(n);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){X(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.i_;return M.forEach(t.mutations,(r=>{const i=new ct(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.i_=n}))}Hr(e){}containsKey(e,t){const n=new ct(t,0),r=this.i_.firstAfterOrEqual(n);return M.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.u_=e,this.docs=(function(){return new ze(Z.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.u_(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return M.resolve(n?n.document.mutableCopy():Et.newInvalidDocument(t))}getEntries(e,t){let n=Mt();return t.forEach((r=>{const i=this.docs.get(r);n=n.insert(r,i?i.document.mutableCopy():Et.newInvalidDocument(r))})),M.resolve(n)}getAllEntries(e){let t=Mt();return this.docs.forEach(((n,r)=>{t=t.insert(n,r.document)})),M.resolve(t)}getDocumentsMatchingQuery(e,t,n,r){let i,o;it(t)?(i=Ie.fromString(lu(t)),o=h=>Bu(t,h)):(i=t.path,o=h=>tu(t,h));let a=Mt();const l=new Z(i.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:B}}=u.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||dA(BA(B),n)<=0||(r.has(B.key)||o(B))&&(a=a.insert(B.key,B.mutableCopy()))}return M.resolve(a)}getAllFromCollectionGroup(e,t,n,r){se(9500)}c_(e,t){return M.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new CP(this)}getSize(e){return M.resolve(this.size)}}class CP extends cP{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.$s.addEntry(e,r)):this.$s.removeEntry(n)})),M.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e){this.persistence=e,this.l_=new xr((t=>xE(t)),ME),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.E_=0,this.h_=new md,this.targetCount=0,this.T_=js.ws()}forEachTarget(e,t){return this.l_.forEach(((n,r)=>t(r))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.E_&&(this.E_=t),M.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new js(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Ds(t),M.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.l_.forEach(((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.l_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),M.waitFor(i).next((()=>r))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const n=this.l_.get(t)||null;return M.resolve(n)}addMatchingKeys(e,t,n){return this.h_.Ys(t,n),M.resolve()}removeMatchingKeys(e,t,n){this.h_.Xs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),M.resolve()}getMatchingKeysForTargetId(e,t){const n=this.h_.n_(t);return M.resolve(n)}containsKey(e,t){return M.resolve(this.h_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,t){this.P_={},this.overlays={},this.I_=new su(0),this.R_=!1,this.R_=!0,this.A_=new dP,this.referenceDelegate=e(this),this.V_=new gP(this),this.indexManager=new rP,this.remoteDocumentCache=(function(r){return new pP(r)})((n=>this.referenceDelegate.d_(n))),this.serializer=new nP(t),this.f_=new hP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new BP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.P_[e.toKey()];return n||(n=new fP(t,this.referenceDelegate),this.P_[e.toKey()]=n),n}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,n){$("MemoryPersistence","Starting transaction:",e);const r=new mP(this.I_.next());return this.referenceDelegate.m_(),n(r).next((i=>this.referenceDelegate.p_(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}g_(e,t){return M.or(Object.values(this.P_).map((n=>()=>n.containsKey(e,t))))}}class mP extends BR{constructor(e){super(),this.currentSequenceNumber=e}}class _d{constructor(e){this.persistence=e,this.y_=new md,this.w_=null}static b_(e){return new _d(e)}get S_(){if(this.w_)return this.w_;throw se(60996)}addReference(e,t,n){return this.y_.addReference(n,t),this.S_.delete(n.toString()),M.resolve()}removeReference(e,t,n){return this.y_.removeReference(n,t),this.S_.add(n.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),M.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach((r=>this.S_.add(r.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.S_.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.S_,(n=>{const r=Z.fromPath(n);return this.v_(e,r).next((i=>{i||t.removeEntry(r,oe.min())}))})).next((()=>(this.w_=null,t.apply(e))))}updateLimboDocument(e,t){return this.v_(e,t).next((n=>{n?this.S_.delete(t.toString()):this.S_.add(t.toString())}))}d_(e){return 0}v_(e,t){return M.or([()=>M.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class pl{constructor(e,t){this.persistence=e,this.D_=new xr((n=>ZS(n.path)),((n,r)=>n.isEqual(r))),this.garbageCollector=mR(this,t)}static b_(e,t){return new pl(e,t)}m_(){}p_(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((r=>n+r))))}Cs(e){let t=0;return this.sr(e,(n=>{t++})).next((()=>t))}sr(e,t){return M.forEach(this.D_,((n,r)=>this.Os(e,n,r).next((i=>i?M.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.c_(e,(o=>this.Os(e,o,t).next((a=>{a||(n++,i.removeEntry(o,oe.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),M.resolve()}removeReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),M.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Uc(e.data.value)),t}Os(e,t,n){return M.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.D_.get(t);return M.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Vo=n,this.fo=r}static mo(e,t){let n=de(),r=de();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ed(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(s,e){return Z.comparator(s.key,e.key)}/**
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
 */class EP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yP{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=(function(){return Gw()?8:dR(It())>0?6:4})()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.vo(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.Do(e,t,r,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new EP;return this.xo(e,t,o).next((a=>{if(i.result=a,this.yo)return this.Co(e,t,o,a.size)}))})).next((()=>i.result))}Co(e,t,n,r){return it(t)?M.resolve():n.documentReadCount<this.wo?(Xr()<=pe.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),M.resolve()):(Xr()<=pe.DEBUG&&$("QueryEngine","Query:",Lo(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.bo*r?(Xr()<=pe.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(t))):M.resolve())}vo(e,t){if(it(t))return M.resolve(null);let n=t;if(JC(n))return M.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(n.limit!==null&&i===1&&(n=hl(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=de(...o);return this.So.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((u=>{const h=this.Fo(n,l);return this.Oo(n,h,a,u.readTime)?this.vo(e,hl(n,null,"F")):this.Mo(e,h,n,u)}))))})))))}Do(e,t,n,r){return(it(t)?(function(o){for(const a of o.stages){if(a instanceof Sr||a instanceof ag)return!1;if(a instanceof cu){if(a.condition instanceof wE&&a.condition._expr.name==="exists"&&a.condition._expr.params[0]instanceof Li&&a.condition._expr.params[0].fieldName===Dn)continue;return!1}}return!0})(t):JC(t))||r.isEqual(oe.min())?M.resolve(null):this.So.getDocuments(e,n).next((i=>{const o=this.Fo(t,i);return this.Oo(t,o,n,r)?M.resolve(null):(Xr()<=pe.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),cg(t)),this.Mo(e,o,t,hA(r,aa)).next((a=>a)))}))}Fo(e,t){let n,r;return it(e)?(n=new nt(_P),r=i=>Bu(e,i)):(n=new nt(XB(e)),r=i=>tu(e,i)),t.forEach(((i,o)=>{r(o)&&(n=n.add(o))})),n}Oo(e,t,n,r){if(it(e))return(function(a){return a.stages.some((l=>l instanceof Sr||l instanceof ag))})(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}xo(e,t,n){return Xr()<=pe.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",cg(t)),this.So.getDocumentsMatchingQuery(e,t,Vs.min(),n)}Mo(e,t,n,r){return this.So.getDocumentsMatchingQuery(e,n,r).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="LocalStore",IP=3e8;class DP{constructor(e,t,n,r){this.persistence=e,this.No=t,this.serializer=r,this.Lo=new ze(Ce),this.Bo=new xr((i=>xE(i)),ME),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(n)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uP(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Lo)))}}function wP(s,e,t,n){return new DP(s,e,t,n)}async function HE(s,e){const t=ae(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next((i=>(r=i,t.qo(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],a=[];let l=de();for(const u of r){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(n,l).next((u=>({$o:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function TP(s,e){const t=ae(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const r=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return(function(a,l,u,h){const B=u.batch,p=B.keys();let g=M.resolve();return p.forEach((m=>{g=g.next((()=>h.getEntry(l,m))).next((S=>{const x=u.docVersions.get(m);X(x!==null,48541),S.version.compareTo(x)<0&&(B.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),h.addEntry(S)))}))})),g.next((()=>a.mutationQueue.removeMutationBatch(l,B)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(a){let l=de();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(n,r)))}))}function qE(s){const e=ae(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.V_.getLastRemoteSnapshotVersion(t)))}function vP(s,e){const t=ae(s),n=e.snapshotVersion;let r=t.Lo;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.ko.newChangeBuffer({trackRemovals:!0});r=t.Lo;const a=[];e.targetChanges.forEach(((h,B)=>{const p=r.get(B);if(!p)return;a.push(t.V_.removeMatchingKeys(i,h.removedDocuments,B).next((()=>t.V_.addMatchingKeys(i,h.addedDocuments,B))));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(B)!==null?g=g.withResumeToken(Qe.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,n)),r=r.insert(B,g),(function(S,x,j){return S.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=IP?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(p,g,h)&&a.push(t.V_.updateTargetData(i,g))}));let l=Mt(),u=de();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))})),a.push(AP(i,o,e.documentUpdates).next((h=>{l=h.Ko,u=h.Qo}))),!n.isEqual(oe.min())){const h=t.V_.getLastRemoteSnapshotVersion(i).next((B=>t.V_.setTargetsMetadata(i,i.currentSequenceNumber,n)));a.push(h)}return M.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(t.Lo=r,i)))}function AP(s,e,t){let n=de(),r=de();return t.forEach((i=>n=n.add(i))),e.getEntries(s,n).next((i=>{let o=Mt();return t.forEach(((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$(yd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{Ko:o,Qo:r}}))}function RP(s,e){const t=ae(s);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=KB),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function SP(s,e){const t=ae(s);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let r;return t.V_.getTargetData(n,e).next((i=>i?(r=i,M.resolve(r)):t.V_.allocateTargetId(n).next((o=>(r=new jn(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.V_.addTargetData(n,r).next((()=>r)))))))})).then((n=>{const r=t.Lo.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Lo=t.Lo.insert(n.targetId,n),t.Bo.set(e,n.targetId)),n}))}async function fB(s,e,t){const n=ae(s),r=n.Lo.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!Oi(o))throw o;$(yd,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Lo=n.Lo.remove(e),n.Bo.delete(r.target)}function ug(s,e,t){const n=ae(s);let r=oe.min(),i=de();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,h){const B=ae(l),p=B.Bo.get(h);return p!==void 0?M.resolve(B.Lo.get(p)):B.V_.getTargetData(u,h)})(n,o,it(e)?e:An(e)).next((a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,n.V_.getMatchingKeysForTargetId(o,a.targetId).next((l=>{i=l}))})).next((()=>n.No.getDocumentsMatchingQuery(o,e,t?r:oe.min(),t?i:de()))).next((a=>(PP(n,a),{documents:a,Wo:i})))))}function PP(s,e){e.forEach(((t,n)=>{const r=n.key.getCollectionGroup(),i=s.Uo.get(r)||oe.min();n.readTime.compareTo(i)>0&&s.Uo.set(r,n.readTime)}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve()))))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(ns(t),this.Xo=!1):$("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="RemoteStore";class NP{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new js(1e3),this.ca=new js(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe((o=>{n.enqueueAndForget((async()=>{Vr(this)&&($(Pn,"Restarting streams for network reachability change."),await(async function(l){const u=ae(l);u.la.add(4),await ja(u),u.Ta.set("Unknown"),u.la.delete(4),await du(u)})(this))}))})),this.Ta=new bP(n,r)}}async function du(s){if(Vr(s))for(const e of s.Ea)await e(!0)}async function ja(s){for(const e of s.Ea)await e(!1)}function pB(s,e){return s.oa.get(e)||void 0}function jE(s,e){const t=ae(s),n=pB(t,e.targetId);if(n!==void 0&&t._a.has(n))return;const r=(function(a,l){const u=pB(a,l);u!==void 0&&a.aa.delete(u);const h=(function(p,g){return g%2!=0?p.ca.next():p.ua.next()})(a,l);return a.oa.set(l,h),a.aa.set(h,l),h})(t,e.targetId);$(Pn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new jn(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t._a.set(r,i),Td(t)?wd(t):Mi(t).Yt()&&Dd(t,i)}function Id(s,e){const t=ae(s),n=Mi(t),r=pB(t,e);$(Pn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t._a.delete(r),t.oa.delete(e),t.aa.delete(r),n.Yt()&&JE(t,r),t._a.size===0&&(n.Yt()?n.en():Vr(t)&&t.Ta.set("Unknown"))}function Dd(s,e){if(s.Pa.J(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const t=s.aa.get(e.targetId);if(t===void 0)return void $(Pn,"SDK target ID not found for remote ID: "+e.targetId);const n=s.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}Mi(s).Pn(e)}function JE(s,e){s.Pa.J(e),Mi(s).In(e)}function wd(s){s.Pa=new PA({getRemoteKeysForTarget:e=>{const t=s.aa.get(e);return t!==void 0?s.remoteSyncer.getRemoteKeysForTarget(t):de()},ye:e=>s._a.get(e)||null,Ve:()=>s.datastore.serializer.databaseId}),Mi(s).start(),s.Ta.ea()}function Td(s){return Vr(s)&&!Mi(s).Jt()&&s._a.size>0}function Vr(s){return ae(s).la.size===0}function WE(s){s.Pa=void 0}async function OP(s){s.Ta.set("Online")}async function LP(s){s._a.forEach(((e,t)=>{Dd(s,e)}))}async function FP(s,e){WE(s),Td(s)?(s.Ta.ra(e),wd(s)):s.Ta.set("Unknown")}async function kP(s,e,t){if(s.Ta.set("Online"),e instanceof K_&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const a of i.targetIds){if(r._a.has(a)){const l=r.aa.get(a);l!==void 0&&(await r.remoteSyncer.rejectListen(l,o),r.oa.delete(l),r.aa.delete(a)),r._a.delete(a)}r.Pa.removeTarget(a)}})(s,e)}catch(n){$(Pn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Cl(s,n)}else if(e instanceof qc?s.Pa._e(e):e instanceof W_?s.Pa.he(e):s.Pa.ue(e),!t.isEqual(oe.min()))try{const n=await qE(s.localStore);t.compareTo(n)>=0&&await(function(i,o){const a=i.Pa.fe(o);a.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const B=i._a.get(h);B&&i._a.set(h,B.withResumeToken(u.resumeToken,o))}})),a.targetMismatches.forEach(((u,h)=>{const B=i._a.get(u);if(!B)return;i._a.set(u,B.withResumeToken(Qe.EMPTY_BYTE_STRING,B.snapshotVersion)),JE(i,u);const p=new jn(B.target,u,h,B.sequenceNumber);Dd(i,p)}));const l=(function(h,B){const p=new Map;B.targetChanges.forEach(((m,S)=>{const x=h.aa.get(S);x!==void 0&&p.set(x,m)}));let g=new ze(Ce);return B.targetMismatches.forEach(((m,S)=>{const x=h.aa.get(m);x!==void 0&&(g=g.insert(x,S))})),new Ma(B.snapshotVersion,p,g,B.documentUpdates,B.augmentedDocumentUpdates,B.resolvedLimboDocuments)})(i,a);return i.remoteSyncer.applyRemoteEvent(l)})(s,t)}catch(n){$(Pn,"Failed to raise snapshot:",n),await Cl(s,n)}}async function Cl(s,e,t){if(!Oi(e))throw e;s.la.add(1),await ja(s),s.Ta.set("Offline"),t||(t=()=>qE(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{$(Pn,"Retrying IndexedDB access"),await t(),s.la.delete(1),await du(s)}))}function KE(s,e){return e().catch((t=>Cl(s,t,e)))}async function fu(s){const e=ae(s),t=Js(e);let n=e.sa.length>0?e.sa[e.sa.length-1].batchId:KB;for(;xP(e);)try{const r=await RP(e.localStore,n);if(r===null){e.sa.length===0&&t.en();break}n=r.batchId,MP(e,r)}catch(r){await Cl(e,r)}zE(e)&&QE(e)}function xP(s){return Vr(s)&&s.sa.length<10}function MP(s,e){s.sa.push(e);const t=Js(s);t.Yt()&&t.Rn&&t.An(e.mutations)}function zE(s){return Vr(s)&&!Js(s).Jt()&&s.sa.length>0}function QE(s){Js(s).start()}async function VP(s){Js(s).fn()}async function GP(s){const e=Js(s);for(const t of s.sa)e.An(t.mutations)}async function UP(s,e,t){const n=s.sa.shift(),r=gd.from(n,e,t);await KE(s,(()=>s.remoteSyncer.applySuccessfulWrite(r))),await fu(s)}async function HP(s,e){e&&Js(s).Rn&&await(async function(n,r){if((function(o){return IA(o)&&o!==k.ABORTED})(r.code)){const i=n.sa.shift();Js(n).Xt(),await KE(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r))),await fu(n)}})(s,e),zE(s)&&QE(s)}async function hg(s,e){const t=ae(s);t.asyncQueue.verifyOperationInProgress(),$(Pn,"RemoteStore received new credentials");const n=Vr(t);t.la.add(3),await ja(t),n&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await du(t)}async function qP(s,e){const t=ae(s);e?(t.la.delete(2),await du(t)):e||(t.la.add(2),await ja(t),t.Ta.set("Unknown"))}function Mi(s){return s.Ia||(s.Ia=(function(t,n,r){const i=ae(t);return i.pn(),new rR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{ct:OP.bind(null,s),Et:LP.bind(null,s),Tt:FP.bind(null,s),Tn:kP.bind(null,s)}),s.Ea.push((async e=>{e?(s.Ia.Xt(),Td(s)?wd(s):s.Ta.set("Unknown")):(await s.Ia.stop(),WE(s))}))),s.Ia}function Js(s){return s.Ra||(s.Ra=(function(t,n,r){const i=ae(t);return i.pn(),new iR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{ct:()=>Promise.resolve(),Et:VP.bind(null,s),Tt:HP.bind(null,s),Vn:GP.bind(null,s),dn:UP.bind(null,s)}),s.Ea.push((async e=>{e?(s.Ra.Xt(),await fu(s)):(await s.Ra.stop(),s.sa.length>0&&($(Pn,`Stopping write stream with ${s.sa.length} pending writes`),s.sa=[]))}))),s.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):ns("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,a=new Ad(e,t,o,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rd(s,e){if(ns("AsyncQueue",`${e}: ${s}`),Oi(s))return new W(k.UNAVAILABLE,`${e}: ${s}`);throw s}class Bg{constructor(){this.activeTargetIds=AA()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jP{constructor(){this.fu=new Bg,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,n){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new Bg,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Th(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{static emptySet(e){return new Ir(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Z.comparator(t.key,n.key):(t,n)=>Z.comparator(t.key,n.key),this.keyedMap=ei(),this.sortedSet=new ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ir)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Ir;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.pu=new ze(Z.comparator)}track(e){const t=e.doc.key,n=this.pu.get(t);n?e.type!==0&&n.type===3?this.pu=this.pu.insert(t,e):e.type===3&&n.type!==1?this.pu=this.pu.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.pu=this.pu.remove(t):e.type===1&&n.type===2?this.pu=this.pu.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):se(63341,{we:e,gu:n}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class _i{constructor(e,t,n,r,i,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new _i(e,t,Ir.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some((e=>e.vu()))}}class WP{constructor(){this.queries=fg(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,n){const r=ae(t),i=r.queries;r.queries=fg(),i.forEach(((o,a)=>{for(const l of a.bu)l.onError(n)}))})(this,new W(k.ABORTED,"Firestore shutting down"))}}function fg(){return new xr((s=>kE(s)),hu)}async function Sd(s,e){const t=ae(s);let n=3;const r=e.query;let i=t.queries.get(r);i?!i.Su()&&e.vu()&&(n=2):(i=new JP,n=e.vu()?0:1);try{switch(n){case 0:i.wu=await t.onListen(r,!0);break;case 1:i.wu=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=Rd(o,`Initialization of query '${it(e.query)?Xn(e.query):Lo(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.bu.push(e),e.xu(t.onlineState),i.wu&&e.Cu(i.wu)&&bd(t)}async function Pd(s,e){const t=ae(s),n=e.query;let r=3;const i=t.queries.get(n);if(i){const o=i.bu.indexOf(e);o>=0&&(i.bu.splice(o,1),i.bu.length===0?r=e.vu()?0:1:!i.Su()&&e.vu()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function KP(s,e){const t=ae(s);let n=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.bu)a.Cu(r)&&(n=!0);o.wu=r}}n&&bd(t)}function zP(s,e,t){const n=ae(s),r=n.queries.get(e);if(r)for(const i of r.bu)i.onError(t);n.queries.delete(e)}function bd(s){s.Du.forEach((e=>{e.next()}))}var CB;(function(s){s.Default="default",s.Cache="cache"})(CB||(CB={}));class Nd{constructor(e,t,n){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=n||{}}Cu(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new _i(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache||!this.vu())return!0;const n=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Bu(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==CB.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.key=e}}class YE{constructor(e){this.key=e}}class QP{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=de(),this.mutatedKeys=de(),this.Ju=it(e)?dB(e):XB(e),this.Yu=new Ir(this.Ju)}get Zu(){return this.zu}Xu(e,t){const n=t?t.ec:new dg,r=t?t.Yu:this.Yu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const[l,u]=this.tc(this.query,r);e.inorderTraversal(((B,p)=>{const g=r.get(B),m=oP(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),x=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let j=!1;g&&m?g.data.isEqual(m.data)?S!==x&&(n.track({type:3,doc:m}),j=!0):this.nc(g,m)||(n.track({type:2,doc:m}),j=!0,(l&&this.Ju(m,l)>0||u&&this.Ju(m,u)<0)&&(a=!0)):!g&&m?(n.track({type:0,doc:m}),j=!0):g&&!m&&(n.track({type:1,doc:g}),j=!0,(l||u)&&(a=!0)),j&&(m?(o=o.add(m),i=x?i.add(B):i.delete(B)):(o=o.delete(B),i=i.delete(B)))}));const h=this.rc(this.query);if(h)if(it(this.query)){const B=[];o.forEach((m=>B.push(m)));const p=GE(this.query,B);let g=new Ir(dB(this.query));for(const m of p)g=g.add(m);o.forEach((m=>{g.has(m.key)||(i=i.delete(m.key),n.track({type:1,doc:m}))})),o=g}else{const B=this.sc(this.query);for(;o.size>h;){const p=B==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),n.track({type:1,doc:p})}}return{Yu:o,ec:n,Oo:a,mutatedKeys:i}}rc(e){var t;return it(e)?(t=wh(e))==null?void 0:t.limit:e.limit||void 0}sc(e){if(it(e)){const t=wh(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){var n;if(it(e)){const r=(n=wh(e))==null?void 0:n.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.rc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const o=e.ec.yu();o.sort(((h,B)=>(function(g,m){const S=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{we:x})}};return S(g)-S(m)})(h.type,B.type)||this.Ju(h.doc,B.doc))),this._c(n),r=r??!1;const a=t&&!r?this.oc():[],l=this.Hu.size===0&&this.current&&!r?1:0,u=l!==this.ju;return this.ju=l,o.length!==0||u?{snapshot:new _i(this.query,e.Yu,i,o,e.mutatedKeys,l===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),ac:a}:{ac:a}}xu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new dg,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach((t=>this.zu=this.zu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.zu=this.zu.delete(t))),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=de(),this.Yu.forEach((n=>{this.uc(n.key)&&(this.Hu=this.Hu.add(n.key))}));const t=[];return e.forEach((n=>{this.Hu.has(n)||t.push(new YE(n))})),this.Hu.forEach((n=>{e.has(n)||t.push(new $E(n))})),t}cc(e){this.zu=e.Wo,this.Hu=de();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return _i.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,this.ju===0,this.hasCachedResults)}}const Od="SyncEngine";class $P{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class YP{constructor(e){this.key=e,this.Ec=!1}}class XP{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hc={},this.Tc=new xr((a=>kE(a)),hu),this.Pc=new Map,this.Ic=new Set,this.Rc=new ze(Z.comparator),this.Ac=new Map,this.Vc=new md,this.dc={},this.fc=new Map,this.mc=js.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function ZP(s,e,t=!0){const n=sy(s);let r;const i=n.Tc.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lc()):r=await XE(n,e,t,!0),r}async function eb(s,e){const t=sy(s);await XE(t,e,!0,!1)}async function XE(s,e,t,n){const r=await SP(s.localStore,it(e)?e:An(e)),i=r.targetId,o=s.sharedClientState.addLocalQueryTarget(i,t);let a;return n&&(a=await tb(s,e,i,o==="current",r.resumeToken)),s.isPrimaryClient&&t&&jE(s.remoteStore,r),a}async function tb(s,e,t,n,r){s.yc=(B,p,g)=>(async function(S,x,j,Y){let ue=x.view.Xu(j);ue.Oo&&(ue=await ug(S.localStore,x.query,!1).then((({documents:A})=>x.view.Xu(A,ue))));const Ue=Y&&Y.targetChanges.get(x.targetId),Je=Y&&Y.targetMismatches.get(x.targetId)!=null,He=x.view.applyChanges(ue,S.isPrimaryClient,Ue,Je);return Cg(S,x.targetId,He.ac),He.snapshot})(s,B,p,g);const i=await ug(s.localStore,e,!0),o=new QP(e,i.Wo),a=o.Xu(i.documents),l=Va.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),u=o.applyChanges(a,s.isPrimaryClient,l);Cg(s,t,u.ac);const h=new $P(e,t,o);return s.Tc.set(e,h),s.Pc.has(t)?s.Pc.get(t).push(e):s.Pc.set(t,[e]),u.snapshot}async function nb(s,e,t){const n=ae(s),r=n.Tc.get(e),i=n.Pc.get(r.targetId);if(i.length>1)return n.Pc.set(r.targetId,i.filter((o=>!hu(o,e)))),void n.Tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await fB(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),t&&Id(n.remoteStore,r.targetId),gB(n,r.targetId)})).catch(Ni)):(gB(n,r.targetId),await fB(n.localStore,r.targetId,!0))}async function sb(s,e){const t=ae(s),n=t.Tc.get(e),r=t.Pc.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Id(t.remoteStore,n.targetId))}async function rb(s,e,t){const n=hb(s);try{const r=await(function(o,a){const l=ae(o),u=ye.now(),h=a.reduce(((g,m)=>g.add(m.key)),de());let B,p;return l.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let m=Mt(),S=de();return l.ko.getEntries(g,h).next((x=>{m=x,m.forEach(((j,Y)=>{Y.isValidDocument()||(S=S.add(j))}))})).next((()=>l.localDocuments.getOverlayedDocuments(g,m))).next((x=>{B=x;const j=[];for(const Y of a){const ue=eA(Y,B.get(Y.key).overlayedDocument);ue!=null&&j.push(new Ys(Y.key,ue,T_(ue.value.mapValue),sn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,j,a)})).next((x=>{p=x;const j=x.applyToLocalDocumentSet(B,S);return l.documentOverlayCache.saveOverlays(g,x.batchId,j)}))})).then((()=>({batchId:p.batchId,changes:j_(B)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),(function(o,a,l){let u=o.dc[o.currentUser.toKey()];u||(u=new ze(Ce)),u=u.insert(a,l),o.dc[o.currentUser.toKey()]=u})(n,r.batchId,t),await Ja(n,r.changes),await fu(n.remoteStore)}catch(r){const i=Rd(r,"Failed to persist write");t.reject(i)}}async function ZE(s,e){const t=ae(s);try{const n=await vP(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=t.Ac.get(i);o&&(X(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.Ec=!0:r.modifiedDocuments.size>0?X(o.Ec,14607):r.removedDocuments.size>0&&(X(o.Ec,42227),o.Ec=!1))})),await Ja(t,n,e)}catch(n){await Ni(n)}}function pg(s,e,t){const n=ae(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Tc.forEach(((i,o)=>{const a=o.view.xu(e);a.snapshot&&r.push(a.snapshot)})),(function(o,a){const l=ae(o);l.onlineState=a;let u=!1;l.queries.forEach(((h,B)=>{for(const p of B.bu)p.xu(a)&&(u=!0)})),u&&bd(l)})(n.eventManager,e),r.length&&n.hc.Tn(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function ib(s,e,t){const n=ae(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Ac.get(e),i=r&&r.key;if(i){let o=new ze(Z.comparator);o=o.insert(i,Et.newNoDocument(i,oe.min()));const a=de().add(i),l=new Ma(oe.min(),new Map,new ze(Ce),o,Mt(),a);await ZE(n,l),n.Rc=n.Rc.remove(i),n.Ac.delete(e),Ld(n)}else await fB(n.localStore,e,!1).then((()=>gB(n,e,t))).catch(Ni)}async function ob(s,e){const t=ae(s),n=e.batch.batchId;try{const r=await TP(t.localStore,e);ty(t,n,null),ey(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Ja(t,r)}catch(r){await Ni(r)}}async function ab(s,e,t){const n=ae(s);try{const r=await(function(o,a){const l=ae(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next((B=>(X(B!==null,37113),h=B.keys(),l.mutationQueue.removeMutationBatch(u,B)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>l.localDocuments.getDocuments(u,h)))}))})(n.localStore,e);ty(n,e,t),ey(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Ja(n,r)}catch(r){await Ni(r)}}function ey(s,e){(s.fc.get(e)||[]).forEach((t=>{t.resolve()})),s.fc.delete(e)}function ty(s,e,t){const n=ae(s);let r=n.dc[n.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),n.dc[n.currentUser.toKey()]=r}}function gB(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Pc.get(e))s.Tc.delete(n),t&&s.hc.wc(n,t);s.Pc.delete(e),s.isPrimaryClient&&s.Vc.e_(e).forEach((n=>{s.Vc.containsKey(n)||ny(s,n)}))}function ny(s,e){s.Ic.delete(e.path.canonicalString());const t=s.Rc.get(e);t!==null&&(Id(s.remoteStore,t),s.Rc=s.Rc.remove(e),s.Ac.delete(t),Ld(s))}function Cg(s,e,t){for(const n of t)n instanceof $E?(s.Vc.addReference(n.key,e),cb(s,n)):n instanceof YE?($(Od,"Document no longer in limbo: "+n.key),s.Vc.removeReference(n.key,e),s.Vc.containsKey(n.key)||ny(s,n.key)):se(19791,{bc:n})}function cb(s,e){const t=e.key,n=t.path.canonicalString();s.Rc.get(t)||s.Ic.has(n)||($(Od,"New document in limbo: "+t),s.Ic.add(n),Ld(s))}function Ld(s){for(;s.Ic.size>0&&s.Rc.size<s.maxConcurrentLimboResolutions;){const e=s.Ic.values().next().value;s.Ic.delete(e);const t=new Z(Ie.fromString(e)),n=s.mc.next();s.Ac.set(n,new YP(t)),s.Rc=s.Rc.insert(t,n),jE(s.remoteStore,new jn(An(eu(t.path)),n,"TargetPurposeLimboResolution",su.wn))}}async function Ja(s,e,t){const n=ae(s),r=[],i=[],o=[];n.Tc.isEmpty()||(n.Tc.forEach(((a,l)=>{o.push(n.yc(l,e,t).then((u=>{var h;if((u||t)&&n.isPrimaryClient){const B=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:h.current;n.sharedClientState.updateQueryState(l.targetId,B?"current":"not-current")}if(u){r.push(u);const B=Ed.mo(l.targetId,u);i.push(B)}})))})),await Promise.all(o),n.hc.Tn(r),await(async function(l,u){const h=ae(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(B=>M.forEach(u,(p=>M.forEach(p.Vo,(g=>h.persistence.referenceDelegate.addReference(B,p.targetId,g))).next((()=>M.forEach(p.fo,(g=>h.persistence.referenceDelegate.removeReference(B,p.targetId,g)))))))))}catch(B){if(!Oi(B))throw B;$(yd,"Failed to update sequence numbers: "+B)}for(const B of u){const p=B.targetId;if(!B.fromCache){const g=h.Lo.get(p),m=g.snapshotVersion,S=g.withLastLimboFreeSnapshotVersion(m);h.Lo=h.Lo.insert(p,S)}}})(n.localStore,i))}async function lb(s,e){const t=ae(s);if(!t.currentUser.isEqual(e)){$(Od,"User change. New user:",e.toKey());const n=await HE(t.localStore,e);t.currentUser=e,(function(i,o){i.fc.forEach((a=>{a.forEach((l=>{l.reject(new W(k.CANCELLED,o))}))})),i.fc.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Ja(t,n.$o)}}function ub(s,e){const t=ae(s),n=t.Ac.get(e);if(n&&n.Ec)return de().add(n.key);{let r=de();const i=t.Pc.get(e);if(!i)return r;for(const o of i??[]){const a=t.Tc.get(o);r=r.unionWith(a.view.Zu)}return r}}function sy(s){const e=ae(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ub.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ib.bind(null,e),e.hc.Tn=KP.bind(null,e.eventManager),e.hc.wc=zP.bind(null,e.eventManager),e}function hb(s){const e=ae(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ob.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ab.bind(null,e),e}class gl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nu(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return wP(this.persistence,new yP,e.initialUser,this.serializer)}Dc(e){return new UE(_d.b_,this.serializer)}vc(e){return new jP}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gl.provider={build:()=>new gl};class Bb extends gl{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){X(this.persistence.referenceDelegate instanceof pl,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new CR(n,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new UE((n=>pl.b_(n,t)),this.serializer)}}class mB{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>pg(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=lb.bind(null,this.syncEngine),await qP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new WP})()}createDatastore(e){const t=nu(e.databaseInfo.databaseId),n=sR(e.databaseInfo);return cR(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,r,i,o,a){return new NP(n,r,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>pg(this.syncEngine,t,0)),(function(){return ZC.Ye()?new ZC:new ZA})())}createSyncEngine(e,t){return(function(r,i,o,a,l,u,h){const B=new XP(r,i,o,a,l,u);return h&&(B.gc=!0),B})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=ae(r);$(Pn,"RemoteStore shutting down."),i.la.add(5),await ja(i),i.ha.shutdown(),i.Ta.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}mB.provider={build:()=>new mB};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="FirestoreClient";class db{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=_t.UNAUTHENTICATED,this.clientId=Kl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{$(Ws,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>($(Ws,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Rd(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function vh(s,e){s.asyncQueue.verifyOperationInProgress(),$(Ws,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async r=>{n.isEqual(r)||(await HE(e.localStore,r),n=r)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function gg(s,e){s.asyncQueue.verifyOperationInProgress();const t=await fb(s);$(Ws,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener((n=>hg(e.remoteStore,n))),s.setAppCheckTokenChangeListener(((n,r)=>hg(e.remoteStore,r))),s._onlineComponents=e}async function fb(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){$(Ws,"Using user provided OfflineComponentProvider");try{await vh(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===k.FAILED_PRECONDITION||r.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;rn("Error using user provided cache. Falling back to memory cache: "+t),await vh(s,new gl)}}else $(Ws,"Using default OfflineComponentProvider"),await vh(s,new Bb(void 0));return s._offlineComponents}async function ry(s){return s._onlineComponents||(s._uninitializedComponentsProvider?($(Ws,"Using user provided OnlineComponentProvider"),await gg(s,s._uninitializedComponentsProvider._online)):($(Ws,"Using default OnlineComponentProvider"),await gg(s,new mB))),s._onlineComponents}function pb(s){return ry(s).then((e=>e.syncEngine))}async function ml(s){const e=await ry(s),t=e.eventManager;return t.onListen=ZP.bind(null,e.syncEngine),t.onUnlisten=nb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=eb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=sb.bind(null,e.syncEngine),t}function Cb(s,e,t,n){const r=new vd(n),i=new Nd(e,r,t);return s.asyncQueue.enqueueAndForget((async()=>Sd(await ml(s),i))),()=>{r.Va(),s.asyncQueue.enqueueAndForget((async()=>Pd(await ml(s),i)))}}function gb(s,e,t={}){const n=new $n;return s.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const h=new vd({next:p=>{h.Va(),o.enqueueAndForget((()=>Pd(i,B)));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new W(k.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&l&&l.source==="server"?u.reject(new W(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),B=new Nd(eu(a.path),h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Sd(i,B)})(await ml(s),s.asyncQueue,e,t,n))),n.promise}function mb(s,e,t={}){const n=new $n;return s.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const h=new vd({next:p=>{h.Va(),o.enqueueAndForget((()=>Pd(i,B))),p.fromCache&&l.source==="server"?u.reject(new W(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),B=new Nd(a instanceof xo?YS(a):a,h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Sd(i,B)})(await ml(s),s.asyncQueue,e,t,n))),n.promise}function _b(s,e){const t=new $n;return s.asyncQueue.enqueueAndForget((async()=>rb(await pb(s),e,t))),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iy=class{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Eb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Us("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Eb=class extends iy{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{convertValue(e,t="none"){switch(st(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return $s(e,((r,i)=>{n[r]=this.convertValue(i,t)})),n}convertVectorValue(e){var n,r,i;const t=(i=(r=(n=e.fields)==null?void 0:n[ea].arrayValue)==null?void 0:r.values)==null?void 0:i.map((o=>Ve(o.doubleValue)));return new bt(t)}convertGeoPoint(e){return new fn(Ve(e.latitude),Ve(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ka(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(fi(e));default:return null}}convertTimestamp(e){const t=ks(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ie.fromString(e);X(eE(n),9688,{name:e});const r=new pi(n.get(1),n.get(3)),i=new Z(n.popFirst(5));return r.isEqual(t)||ns(`A document reference to ${i} refers to a different database (${r.projectId}/${r.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(s,e,t){let n;return n=s?t&&(t.merge||t.mergeFields)?s.toFirestore(e,t):s.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="AsyncQueue";class _g{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new aE(this,"async_queue_retry"),this.Hc=()=>{const n=Th();n&&$(mg,"Visibility state changed to "+n.visibilityState),this.Ht.$t()},this.Jc=e;const t=Th();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=Th();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise((()=>{}));const t=new $n;return this.Zc((()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.$c.push(e),this.Xc())))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!Oi(e))throw e;$(mg,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt((()=>this.Xc()))}}Zc(e){const t=this.Jc.then((()=>(this.Gc=!0,e().catch((n=>{throw this.Wc=n,this.Gc=!1,ns("INTERNAL UNHANDLED ERROR: ",Eg(n)),n})).then((n=>(this.Gc=!1,n))))));return this.Jc=t,t}enqueueAfterDelay(e,t,n){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const r=Ad.createAndSchedule(this,e,t,n,(i=>this.el(i)));return this.Qc.push(r),r}Yc(){this.Wc&&se(47125,{tl:Eg(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then((()=>{this.Qc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()}))}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function Eg(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class bn extends ru{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new _g,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _g(e),this._firestoreClient=void 0,await e}}}function cy(s,e){const t=typeof s=="object"?s:HB(),n=typeof s=="string"?s:il,r=Wl(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const i=qm("firestore");i&&nd(r,...i)}return r}function Wa(s){if(s._terminated)throw new W(k.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||yb(s),s._firestoreClient}function yb(s){var n,r,i,o;const e=s._freezeSettings(),t=uR(s._databaseId,((n=s._app)==null?void 0:n.options.appId)||"",s._persistenceKey,(r=s._app)==null?void 0:r.options.apiKey,e);s._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new db(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(s._componentsProvider))}/**
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
 */class Fd extends oy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}}class ri{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ss extends iy{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Us("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ss._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ss._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ss._jsonSchema={type:tt("string",Ss._jsonSchemaVersion),bundleSource:tt("string","DocumentSnapshot"),bundleName:tt("string"),bundle:tt("string")};class Vo extends Ss{data(e={}){return super.data(e)}}class Ps{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ri(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Vo(this._firestore,this._userDataWriter,n.key,n,new ri(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((a=>{it(r._snapshot.query)?dB(r._snapshot.query):XB(r.query._query);const l=new Vo(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ri(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const l=new Vo(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ri(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Ib(a.type),doc:l,oldIndex:u,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ps._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Kl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ib(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:s})}}/**
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
 */Ps._jsonSchemaVersion="firestore/querySnapshot/1.0",Ps._jsonSchema={type:tt("string",Ps._jsonSchemaVersion),bundleSource:tt("string","QuerySnapshot"),bundleName:tt("string"),bundle:tt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new W(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kd{}class pu extends kd{}function _l(s,e,...t){let n=[];e instanceof kd&&n.push(e),n=n.concat(t),(function(i){const o=i.filter((l=>l instanceof Cu)).length,a=i.filter((l=>l instanceof Ka)).length;if(o>1||o>0&&a>0)throw new W(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const r of n)s=r._apply(s);return s}class Ka extends pu{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ka(e,t,n)}_apply(e){const t=this._parse(e);return uy(e._query,t),new Fn(e.firestore,e.converter,aB(e._query,t))}_parse(e){const t=iu(e.firestore);return(function(i,o,a,l,u,h,B){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new W(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Ig(B,h);const m=[];for(const S of B)m.push(yg(l,i,S));p={arrayValue:{values:m}}}else p=yg(l,i,B)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Ig(B,h),p=wR(a,o,B,h==="in"||h==="not-in");return et.create(u,h,p)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function _B(s,e,t){const n=e,r=Us("where",s);return Ka._create(r,n,t)}class Cu extends kd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Cu(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:Cn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let o=r;const a=i.getFlattenedFilters();for(const l of a)uy(o,l),o=aB(o,l)})(e._query,t),new Fn(e.firestore,e.converter,aB(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gu extends pu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new gu(e,t)}_apply(e){const t=(function(r,i,o){if(r.startAt!==null)throw new W(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new W(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new oa(i,o)})(e._query,this._field,this._direction);return new Fn(e.firestore,e.converter,mA(e._query,t))}}function El(s,e="asc"){const t=e,n=Us("orderBy",s);return gu._create(n,t)}class mu extends pu{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new mu(e,t,n)}_apply(e){return new Fn(e.firestore,e.converter,hl(e._query,this._limit,this._limitType))}}function yl(s){return Gv("limit",s),mu._create("limit",s,"F")}function yg(s,e,t){if(typeof(t=ne(t))=="string"){if(t==="")throw new W(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!U_(e)&&t.indexOf("/")!==-1)throw new W(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Ie.fromString(t));if(!Z.isDocumentKey(n))throw new W(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return xC(s,new Z(n))}if(t instanceof Me)return xC(s,t._key);throw new W(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zl(t)}.`)}function Ig(s,e){if(!Array.isArray(s)||s.length===0)throw new W(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uy(s,e){const t=(function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(s.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new W(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(s){return(function(t,n){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1})(s,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(s){s=Pt(s,Me);const e=Pt(s.firestore,bn),t=Wa(e);return gb(t,s._key).then((n=>dy(e,s,n)))}function hy(s){s=Pt(s,Fn);const e=Pt(s.firestore,bn),t=Wa(e),n=new Fd(e);return ly(s._query),mb(t,s._query).then((r=>new Ps(e,n,s,r)))}function Jn(s,e,t){s=Pt(s,Me);const n=Pt(s.firestore,bn),r=ay(s.converter,e,t),i=iu(n);return za(n,[dE(i,"setDoc",s._key,r,s.converter!==null,t).toMutation(s._key,sn.none())])}function Br(s,e,t,...n){s=Pt(s,Me);const r=Pt(s.firestore,bn),i=iu(r);let o;return o=typeof(e=ne(e))=="string"||e instanceof Ga?DR(i,"updateDoc",s._key,e,t,n):IR(i,"updateDoc",s._key,e),za(r,[o.toMutation(s._key,sn.exists(!0))])}function xd(s){return za(Pt(s.firestore,bn),[new YB(s._key,sn.none())])}function By(s,e){const t=Pt(s.firestore,bn),n=yt(s),r=ay(s.converter,e),i=iu(s.firestore);return za(t,[dE(i,"addDoc",n._key,r,s.converter!==null,{}).toMutation(n._key,sn.exists(!1))]).then((()=>n))}function pa(s,...e){var u,h,B;s=ne(s);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||Dg(e[n])||(t=e[n++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Dg(e[n])){const p=e[n];e[n]=(u=p.next)==null?void 0:u.bind(p),e[n+1]=(h=p.error)==null?void 0:h.bind(p),e[n+2]=(B=p.complete)==null?void 0:B.bind(p)}let i,o,a;if(s instanceof Me)o=Pt(s.firestore,bn),a=eu(s._key.path),i={next:p=>{e[n]&&e[n](dy(o,s,p))},error:e[n+1],complete:e[n+2]};else{const p=Pt(s,Fn);o=Pt(p.firestore,bn),a=p._query;const g=new Fd(o);i={next:m=>{e[n]&&e[n](new Ps(o,g,p,m))},error:e[n+1],complete:e[n+2]},ly(s._query)}const l=Wa(o);return Cb(l,a,r,i)}function za(s,e){const t=Wa(s);return _b(t,e)}function dy(s,e,t){const n=t.docs.get(e._key),r=new Fd(s);return new Ss(s,r,e._key,n,new ri(t.hasPendingWrites,t.fromCache),e.converter)}const wg="@firebase/firestore",Tg="4.17.2";(function(e,t=!0){Lv(kr),vr(new Fs("firestore",((n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new bn(new QA(n.getProvider("auth-internal")),new XA(o,n.getProvider("app-check-internal")),qv(o,r),o);return i={useFetchStreams:t,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),vn(wg,Tg,e),vn(wg,Tg,"esm2020")})();const Db=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:oy,Bytes:Yt,CollectionReference:Yn,DocumentReference:Me,DocumentSnapshot:Ss,FieldPath:Ga,FieldValue:Ua,Firestore:bn,FirestoreError:W,GeoPoint:fn,Query:Fn,QueryCompositeFilterConstraint:Cu,QueryConstraint:pu,QueryDocumentSnapshot:Vo,QueryFieldFilterConstraint:Ka,QueryLimitConstraint:mu,QueryOrderByConstraint:gu,QuerySnapshot:Ps,SnapshotMetadata:ri,Timestamp:ye,VectorValue:bt,_AutoId:Kl,_ByteString:Qe,_DatabaseId:pi,_DocumentKey:Z,_EmptyAuthCredentialsProvider:iE,_FieldPath:Ut,_cast:Pt,_logWarn:rn,_validateIsNotUsedTogether:g_,addDoc:By,collection:la,connectFirestoreEmulator:nd,deleteDoc:xd,deleteField:EE,doc:yt,documentId:sE,ensureFirestoreConfigured:Wa,executeWrite:za,getDoc:Dr,getDocs:hy,getFirestore:cy,limit:yl,onSnapshot:pa,orderBy:El,query:_l,serverTimestamp:yE,setDoc:Jn,updateDoc:Br,vector:IE,where:_B},Symbol.toStringTag,{value:"Module"}));var wb="firebase",Tb="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(wb,Tb,"app");var vg={};const Ag="@firebase/database",Rg="1.1.5";/**
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
 */let fy="";function vb(s){fy=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ut(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Qo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ln(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ab(e)}}catch{}return new Rb},pr=py("localStorage"),Sb=py("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Jl("@firebase/database"),Pb=(function(){let s=1;return function(){return s++}})(),Cy=function(s){const e=Yw(s),t=new Kw;t.update(e);const n=t.digest();return MB.encodeByteArray(n)},Qa=function(...s){let e="";for(let t=0;t<s.length;t++){const n=s[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=Qa.apply(null,n):typeof n=="object"?e+=ut(n):e+=n,e+=" "}return e};let Go=null,Sg=!0;const bb=function(s,e){J(!0,"Can't turn on custom loggers persistently."),oi.logLevel=pe.VERBOSE,Go=oi.log.bind(oi)},ft=function(...s){if(Sg===!0&&(Sg=!1,Go===null&&Sb.get("logging_enabled")===!0&&bb()),Go){const e=Qa.apply(null,s);Go(e)}},$a=function(s){return function(...e){ft(s,...e)}},EB=function(...s){const e="FIREBASE INTERNAL ERROR: "+Qa(...s);oi.error(e)},rs=function(...s){const e=`FIREBASE FATAL ERROR: ${Qa(...s)}`;throw oi.error(e),new Error(e)},Nt=function(...s){const e="FIREBASE WARNING: "+Qa(...s);oi.warn(e)},Nb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_u=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},Ob=function(s){if(document.readyState==="complete")s();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ei="[MIN_NAME]",Pr="[MAX_NAME]",Gr=function(s,e){if(s===e)return 0;if(s===Ei||e===Pr)return-1;if(e===Ei||s===Pr)return 1;{const t=Pg(s),n=Pg(e);return t!==null?n!==null?t-n===0?s.length-e.length:t-n:-1:n!==null?1:s<e?-1:1}},Lb=function(s,e){return s===e?0:s<e?-1:1},ho=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+ut(e))},Md=function(s){if(typeof s!="object"||s===null)return ut(s);const e=[];for(const n in s)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=ut(e[n]),t+=":",t+=Md(s[e[n]]);return t+="}",t},gy=function(s,e){const t=s.length;if(t<=e)return[s];const n=[];for(let r=0;r<t;r+=e)r+e>t?n.push(s.substring(r,t)):n.push(s.substring(r,r+e));return n};function Dt(s,e){for(const t in s)s.hasOwnProperty(t)&&e(t,s[t])}const my=function(s){J(!_u(s),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let r,i,o,a,l;s===0?(i=0,o=0,r=1/s===-1/0?1:0):(r=s<0,s=Math.abs(s),s>=Math.pow(2,1-n)?(a=Math.min(Math.floor(Math.log(s)/Math.LN2),n),i=a+n,o=Math.round(s*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(s/Math.pow(2,1-n-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let B="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),B=B+p}return B.toLowerCase()},Fb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},kb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xb(s,e){let t="Unknown Error";s==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?t="Client doesn't have permission to access the desired data.":s==="unavailable"&&(t="The service is unavailable");const n=new Error(s+" at "+e._path.toString()+": "+t);return n.code=s.toUpperCase(),n}const Mb=new RegExp("^-?(0*)\\d{1,10}$"),Vb=-2147483648,Gb=2147483647,Pg=function(s){if(Mb.test(s)){const e=Number(s);if(e>=Vb&&e<=Gb)return e}return null},Vi=function(s){try{s()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Nt("Exception was thrown by user callback.",t),e},Math.floor(0))}},Ub=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Uo=function(s,e){const t=setTimeout(s,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Hb{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,xe(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(n=>this.appCheck=n)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Nt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Nt(e)}}class Wc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="5",_y="v",Ey="s",yy="r",Iy="f",Dy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wy="ls",Ty="p",yB="ac",vy="websocket",Ay="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,t,n,r,i=!1,o="",a=!1,l=!1,u=null){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function jb(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function Sy(s,e,t){J(typeof e=="string","typeof type must == string"),J(typeof t=="object","typeof params must == object");let n;if(e===vy)n=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===Ay)n=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jb(s)&&(t.ns=s.namespace);const r=[];return Dt(t,(i,o)=>{r.push(i+"="+o)}),n+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this.counters_={}}incrementCounter(e,t=1){Ln(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Sw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah={},Rh={};function Gd(s){const e=s.toString();return Ah[e]||(Ah[e]=new Jb),Ah[e]}function Wb(s,e){const t=s.toString();return Rh[t]||(Rh[t]=e()),Rh[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<n.length;++r)n[r]&&Vi(()=>{this.onMessage_(n[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="start",zb="close",Qb="pLPCommand",$b="pRTLPCB",Py="id",by="pw",Ny="ser",Yb="cb",Xb="seg",Zb="ts",eN="d",tN="dframe",Oy=1870,Ly=30,nN=Oy-Ly,sN=25e3,rN=3e4;class Cr{constructor(e,t,n,r,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$a(e),this.stats_=Gd(t),this.urlFn=l=>(this.appCheckToken&&(l[yB]=this.appCheckToken),Sy(t,Ay,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Kb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rN)),Ob(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ud((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bg)this.id=a,this.password=l;else if(o===zb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const n={};n[bg]="t",n[Ny]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[Yb]=this.scriptTagHolder.uniqueCallbackIdentifier),n[_y]=Vd,this.transportSessionId&&(n[Ey]=this.transportSessionId),this.lastSessionId&&(n[wy]=this.lastSessionId),this.applicationId&&(n[Ty]=this.applicationId),this.appCheckToken&&(n[yB]=this.appCheckToken),typeof location<"u"&&location.hostname&&Dy.test(location.hostname)&&(n[yy]=Iy);const r=this.urlFn(n);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cr.forceAllow_=!0}static forceDisallow(){Cr.forceDisallow_=!0}static isAvailable(){return Cr.forceAllow_?!0:!Cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Fb()&&!kb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Gm(t),r=gy(n,nN);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[tN]="t",n[Py]=e,n[by]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ut(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ud{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Pb(),window[Qb+this.uniqueCallbackIdentifier]=e,window[$b+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ud.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ft("frame writing exception"),a.stack&&ft(a.stack),ft(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ft("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Py]=this.myID,e[by]=this.myPW,e[Ny]=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ly+n.length<=Oy;){const o=this.pendingSegs.shift();n=n+"&"+Xb+r+"="+o.seg+"&"+Zb+r+"="+o.ts+"&"+eN+r+"="+o.d,r++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(sN)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const r=n.readyState;(!r||r==="loaded"||r==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=16384,oN=45e3;let Il=null;typeof MozWebSocket<"u"?Il=MozWebSocket:typeof WebSocket<"u"&&(Il=WebSocket);class ln{constructor(e,t,n,r,i,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$a(this.connId),this.stats_=Gd(t),this.connURL=ln.connectionURL_(t,o,a,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={};return o[_y]=Vd,typeof location<"u"&&location.hostname&&Dy.test(location.hostname)&&(o[yy]=Iy),t&&(o[Ey]=t),n&&(o[wy]=n),r&&(o[yB]=r),i&&(o[Ty]=i),Sy(e,vy,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pr.set("previous_websocket_failure",!0);try{let n;Vw(),this.mySock=new Il(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){ln.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&Il!==null&&!ln.forceDisallow_}static previouslyFailed(){return pr.isInMemoryStorage||pr.get("previous_websocket_failure")===!0}markConnectionHealthy(){pr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=Qo(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(J(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=gy(t,iN);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oN))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ln.responsesRequiredToBeHealthy=2;ln.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{static get ALL_TRANSPORTS(){return[Cr,ln]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ln&&ln.isAvailable();let n=t&&!ln.previouslyFailed();if(e.webSocketOnly&&(t||Nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ln];else{const r=this.transports_=[];for(const i of yi.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);yi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN=6e4,cN=5e3,lN=10*1024,uN=100*1024,Sh="t",Ng="d",hN="s",Og="r",BN="e",Lg="o",Fg="a",kg="n",xg="p",dN="h";class fN{constructor(e,t,n,r,i,o,a,l,u,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$a("c:"+this.id+":"),this.transportManager_=new yi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Uo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sh in e){const t=e[Sh];t===Fg?this.upgradeIfSecondaryHealthy_():t===Og?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Lg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ho("t",e),n=ho("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:xg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ho("t",e),n=ho("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ho(Sh,e);if(Ng in e){const n=e[Ng];if(t===dN){const r={...n};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===kg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===hN?this.onConnectionShutdown_(n):t===Og?this.onReset_(n):t===BN?EB("Server Error: "+n):t===Lg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):EB("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Vd!==n&&Nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Uo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Uo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:xg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.allowedEvents_=e,this.listeners_={},J(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let r=0;r<n.length;r++)n[r].callback.apply(n[r].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context)){r.splice(i,1);return}}validateEventType_(e){J(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends ky{static getInstance(){return new Dl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!VB()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return J(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=32,Vg=768;class Te{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function De(){return new Te("")}function he(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function Ks(s){return s.pieces_.length-s.pieceNum_}function Re(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new Te(s.pieces_,e)}function Hd(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function pN(s){let e="";for(let t=s.pieceNum_;t<s.pieces_.length;t++)s.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[t])));return e||"/"}function Ca(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function xy(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let t=s.pieceNum_;t<s.pieces_.length-1;t++)e.push(s.pieces_[t]);return new Te(e,0)}function Ke(s,e){const t=[];for(let n=s.pieceNum_;n<s.pieces_.length;n++)t.push(s.pieces_[n]);if(e instanceof Te)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let r=0;r<n.length;r++)n[r].length>0&&t.push(n[r])}return new Te(t,0)}function Be(s){return s.pieceNum_>=s.pieces_.length}function Vt(s,e){const t=he(s),n=he(e);if(t===null)return e;if(t===n)return Vt(Re(s),Re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function CN(s,e){const t=Ca(s,0),n=Ca(e,0);for(let r=0;r<t.length&&r<n.length;r++){const i=Gr(t[r],n[r]);if(i!==0)return i}return t.length===n.length?0:t.length<n.length?-1:1}function qd(s,e){if(Ks(s)!==Ks(e))return!1;for(let t=s.pieceNum_,n=e.pieceNum_;t<=s.pieces_.length;t++,n++)if(s.pieces_[t]!==e.pieces_[n])return!1;return!0}function nn(s,e){let t=s.pieceNum_,n=e.pieceNum_;if(Ks(s)>Ks(e))return!1;for(;t<s.pieces_.length;){if(s.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class gN{constructor(e,t){this.errorPrefix_=t,this.parts_=Ca(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=jl(this.parts_[n]);My(this)}}function mN(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=jl(e),My(s)}function _N(s){const e=s.parts_.pop();s.byteLength_-=jl(e),s.parts_.length>0&&(s.byteLength_-=1)}function My(s){if(s.byteLength_>Vg)throw new Error(s.errorPrefix_+"has a key path longer than "+Vg+" bytes ("+s.byteLength_+").");if(s.parts_.length>Mg)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Mg+") or object contains a cycle "+lr(s))}function lr(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends ky{static getInstance(){return new jd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(e){return J(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=1e3,EN=300*1e3,Gg=30*1e3,yN=1.3,IN=3e4,DN="server_kill",Ug=3;class Zn extends Fy{constructor(e,t,n,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Zn.nextPersistentConnectionId_++,this.log_=$a("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bo,this.maxReconnectDelay_=EN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Dl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(ut(i)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new yn,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;Zn.warnOnListenWarnings_(l,t),(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(n,r),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ln(e,"w")){const n=hi(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ww(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Jw(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=n,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const i=n.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ut(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):EB("Unrecognized action received from server: "+ut(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>IN&&(this.reconnectDelay_=Bo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Zn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},u=function(B){J(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(B)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[B,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=B&&B.accessToken,this.appCheckToken_=p&&p.token,a=new fN(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,g=>{Nt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(DN)},i))}catch(B){this.log_("Failed to get token: "+B),o||(this.repoInfo_.nodeAdmin&&Nt(B),l())}}}interrupt(e){ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],tl(this.interruptReasons_)&&(this.reconnectDelay_=Bo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(i=>Md(i)).join("$"):n="default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Te(e).toString();let r;if(this.listens.has(n)){const i=this.listens.get(n);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){ft("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ug&&(this.reconnectDelay_=Gg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ft("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ug&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+fy.replace(/\./g,"-")]=1,VB()?e["framework.cordova"]=1:Km()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Dl.getInstance().currentlyOnline();return tl(this.interruptReasons_)&&e}}Zn.nextPersistentConnectionId_=0;Zn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new fe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new fe(Ei,e),r=new fe(Ei,t);return this.compare(n,r)!==0}minPost(){return fe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc;class Vy extends Eu{static get __EMPTY_NODE(){return Nc}static set __EMPTY_NODE(e){Nc=e}compare(e,t){return Gr(e.name,t.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return fe.MIN}maxPost(){return new fe(Pr,Nc)}makePost(e,t){return J(typeof e=="string","KeyIndex indexValue must always be a string."),new fe(e,Nc)}toString(){return".key"}}const ai=new Vy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class lt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??lt.RED,this.left=r??Gt.EMPTY_NODE,this.right=i??Gt.EMPTY_NODE}copy(e,t,n,r,i){return new lt(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return Gt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}lt.RED=!0;lt.BLACK=!1;class wN{copy(e,t,n,r,i){return this}insert(e,t,n){return new lt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Gt{constructor(e,t=Gt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Gt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,lt.BLACK,null,null))}remove(e){return new Gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,lt.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(r=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Oc(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Oc(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Oc(this.root_,null,this.comparator_,!0,e)}}Gt.EMPTY_NODE=new wN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(s,e){return Gr(s.name,e.name)}function Jd(s,e){return Gr(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let IB;function vN(s){IB=s}const Gy=function(s){return typeof s=="number"?"number:"+my(s):"string:"+s},Uy=function(s){if(s.isLeafNode()){const e=s.val();J(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ln(e,".sv"),"Priority must be a string or number.")}else J(s===IB||s.isEmpty(),"priority of unexpected type.");J(s===IB||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hg;class at{static set __childrenNodeConstructor(e){Hg=e}static get __childrenNodeConstructor(){return Hg}constructor(e,t=at.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,J(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Uy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new at(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Be(e)?this:he(e)===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:at.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=he(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(J(n!==".priority"||Ks(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,at.__childrenNodeConstructor.EMPTY_NODE.updateChild(Re(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gy(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=my(this.value_):e+=this.value_,this.lazyHash_=Cy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===at.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof at.__childrenNodeConstructor?-1:(J(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=at.VALUE_TYPE_ORDER.indexOf(t),i=at.VALUE_TYPE_ORDER.indexOf(n);return J(r>=0,"Unknown leaf type: "+t),J(i>=0,"Unknown leaf type: "+n),r===i?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}at.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hy,qy;function AN(s){Hy=s}function RN(s){qy=s}class SN extends Eu{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return i===0?Gr(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return fe.MIN}maxPost(){return new fe(Pr,new at("[PRIORITY-POST]",qy))}makePost(e,t){const n=Hy(e);return new fe(t,new at("[PRIORITY-POST]",n))}toString(){return".priority"}}const Ge=new SN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=Math.log(2);class bN{constructor(e){const t=i=>parseInt(Math.log(i)/PN,10),n=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wl=function(s,e,t,n){s.sort(e);const r=function(l,u){const h=u-l;let B,p;if(h===0)return null;if(h===1)return B=s[l],p=t?t(B):B,new lt(p,B.node,lt.BLACK,null,null);{const g=parseInt(h/2,10)+l,m=r(l,g),S=r(g+1,u);return B=s[g],p=t?t(B):B,new lt(p,B.node,lt.BLACK,m,S)}},i=function(l){let u=null,h=null,B=s.length;const p=function(m,S){const x=B-m,j=B;B-=m;const Y=r(x+1,j),ue=s[x],Ue=t?t(ue):ue;g(new lt(Ue,ue.node,S,null,Y))},g=function(m){u?(u.left=m,u=m):(h=m,u=m)};for(let m=0;m<l.count;++m){const S=l.nextBitIsOne(),x=Math.pow(2,l.count-(m+1));S?p(x,lt.BLACK):(p(x,lt.BLACK),p(x,lt.RED))}return h},o=new bN(s.length),a=i(o);return new Gt(n||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ph;const Kr={};class Wn{static get Default(){return J(Kr&&Ge,"ChildrenNode.ts has not been loaded"),Ph=Ph||new Wn({".priority":Kr},{".priority":Ge}),Ph}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=hi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Gt?t:null}hasIndex(e){return Ln(this.indexSet_,e.toString())}addIndex(e,t){J(e!==ai,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(fe.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();let a;r?a=wl(n,e.getCompare()):a=Kr;const l=e.toString(),u={...this.indexSet_};u[l]=e;const h={...this.indexes_};return h[l]=a,new Wn(h,u)}addToIndexes(e,t){const n=nl(this.indexes_,(r,i)=>{const o=hi(this.indexSet_,i);if(J(o,"Missing index implementation for "+i),r===Kr)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(fe.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),wl(a,o.getCompare())}else return Kr;else{const a=t.get(e.name);let l=r;return a&&(l=l.remove(new fe(e.name,a))),l.insert(e,e.node)}});return new Wn(n,this.indexSet_)}removeFromIndexes(e,t){const n=nl(this.indexes_,r=>{if(r===Kr)return r;{const i=t.get(e.name);return i?r.remove(new fe(e.name,i)):r}});return new Wn(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo;class ie{static get EMPTY_NODE(){return fo||(fo=new ie(new Gt(Jd),null,Wn.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Uy(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fo}updatePriority(e){return this.children_.isEmpty()?this:new ie(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?fo:t}}getChild(e){const t=he(e);return t===null?this:this.getImmediateChild(t).getChild(Re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(J(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new fe(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?fo:this.priorityNode_;return new ie(r,o,i)}}updateChild(e,t){const n=he(e);if(n===null)return t;{J(he(e)!==".priority"||Ks(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(Re(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Ge,(o,a)=>{t[o]=a.val(e),n++,i&&ie.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*n){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gy(this.getPriority().val())+":"),this.forEachChild(Ge,(t,n)=>{const r=n.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":Cy(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const i=r.getPredecessorKey(new fe(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new fe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new fe(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,fe.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,fe.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ya?-1:0}withIndex(e){if(e===ai||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ie(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ai||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(Ge),r=t.getIterator(Ge);let i=n.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ai?null:this.indexMap_.get(e.toString())}}ie.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class NN extends ie{constructor(){super(new Gt(Jd),ie.EMPTY_NODE,Wn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ie.EMPTY_NODE}isEmpty(){return!1}}const Ya=new NN;Object.defineProperties(fe,{MIN:{value:new fe(Ei,ie.EMPTY_NODE)},MAX:{value:new fe(Pr,Ya)}});Vy.__EMPTY_NODE=ie.EMPTY_NODE;at.__childrenNodeConstructor=ie;vN(Ya);RN(Ya);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=!0;function Ze(s,e=null){if(s===null)return ie.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),J(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const t=s;return new at(t,Ze(e))}if(!(s instanceof Array)&&ON){const t=[];let n=!1;if(Dt(s,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ze(a);l.isEmpty()||(n=n||!l.getPriority().isEmpty(),t.push(new fe(o,l)))}}),t.length===0)return ie.EMPTY_NODE;const i=wl(t,TN,o=>o.name,Jd);if(n){const o=wl(t,Ge.getCompare());return new ie(i,Ze(e),new Wn({".priority":o},{".priority":Ge}))}else return new ie(i,Ze(e),Wn.Default)}else{let t=ie.EMPTY_NODE;return Dt(s,(n,r)=>{if(Ln(s,n)&&n.substring(0,1)!=="."){const i=Ze(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(n,i))}}),t.updatePriority(Ze(e))}}AN(Ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN extends Eu{constructor(e){super(),this.indexPath_=e,J(!Be(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return i===0?Gr(e.name,t.name):i}makePost(e,t){const n=Ze(e),r=ie.EMPTY_NODE.updateChild(this.indexPath_,n);return new fe(t,r)}maxPost(){const e=ie.EMPTY_NODE.updateChild(this.indexPath_,Ya);return new fe(Pr,e)}toString(){return Ca(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN extends Eu{compare(e,t){const n=e.node.compareTo(t.node);return n===0?Gr(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return fe.MIN}maxPost(){return fe.MAX}makePost(e,t){const n=Ze(e);return new fe(t,n)}toString(){return".value"}}const kN=new FN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(s){return{type:"value",snapshotNode:s}}function Ii(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function ga(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function ma(s,e,t){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:t}}function xN(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){J(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()||(o!=null&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(ga(t,a)):J(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ii(t,n)):o.trackChildChange(ma(t,n,a))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(Ge,(r,i)=>{t.hasChild(r)||n.trackChildChange(ga(r,i))}),t.isLeafNode()||t.forEachChild(Ge,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||n.trackChildChange(ma(r,i,o))}else n.trackChildChange(Ii(r,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ie.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.indexedFilter_=new Wd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_a.getStartPost_(e),this.endPost_=_a.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,o){return this.matches(new fe(t,n))||(n=ie.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=ie.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(ie.EMPTY_NODE);const i=this;return t.forEachChild(Ge,(o,a)=>{i.matches(new fe(o,a))||(r=r.updateImmediateChild(o,ie.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new _a(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new fe(t,n))||(n=ie.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=ie.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=ie.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(ie.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,ie.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const B=this.index_.getCompare();o=(p,g)=>B(g,p)}else o=this.index_.getCompare();const a=e;J(a.numChildren()===this.limit_,"");const l=new fe(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const B=a.getImmediateChild(t);let p=r.getChildAfterChild(this.index_,u,this.reverse_);for(;p!=null&&(p.name===t||a.hasChild(p.name));)p=r.getChildAfterChild(this.index_,p,this.reverse_);const g=p==null?1:o(p,l);if(h&&!n.isEmpty()&&g>=0)return i!=null&&i.trackChildChange(ma(t,n,B)),a.updateImmediateChild(t,n);{i!=null&&i.trackChildChange(ga(t,B));const S=a.updateImmediateChild(t,ie.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(i!=null&&i.trackChildChange(Ii(p.name,p.node)),S.updateImmediateChild(p.name,p.node)):S}}else return n.isEmpty()?e:h&&o(u,l)>=0?(i!=null&&(i.trackChildChange(ga(u.name,u.node)),i.trackChildChange(Ii(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,ie.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ei}hasEnd(){return this.endSet_}getIndexEndValue(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ge}copy(){const e=new Kd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function VN(s){return s.loadsAllData()?new Wd(s.getIndex()):s.hasLimit()?new MN(s):new _a(s)}function qg(s){const e={};if(s.isDefault())return e;let t;if(s.index_===Ge?t="$priority":s.index_===kN?t="$value":s.index_===ai?t="$key":(J(s.index_ instanceof LN,"Unrecognized index type!"),t=s.index_.toString()),e.orderBy=ut(t),s.startSet_){const n=s.startAfterSet_?"startAfter":"startAt";e[n]=ut(s.indexStartValue_),s.startNameSet_&&(e[n]+=","+ut(s.indexStartName_))}if(s.endSet_){const n=s.endBeforeSet_?"endBefore":"endAt";e[n]=ut(s.indexEndValue_),s.endNameSet_&&(e[n]+=","+ut(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function jg(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let t=s.viewFrom_;t===""&&(s.isViewFromLeft()?t="l":t="r"),e.vf=t}return s.index_!==Ge&&(e.i=s.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends Fy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=$a("p:rest:"),this.listens_={}}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Tl.getListenId_(e,n),a={};this.listens_[o]=a;const l=qg(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let B=h;if(u===404&&(B=null,u=null),u===null&&this.onDataUpdate_(i,B,!1,n),hi(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",r(p,null)}})}unlisten(e,t){const n=Tl.getListenId_(e,t);delete this.listens_[n]}get(e){const t=qg(e._queryParams),n=e._path.toString(),r=new yn;return this.restRequest_(n+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(n,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Lr(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Qo(a.responseText)}catch{Nt("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,l)}else a.status!==401&&a.status!==404&&Nt("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(){this.rootNode_=ie.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){return{value:null,children:new Map}}function Gi(s,e,t){if(Be(e))s.value=t,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,t);else{const n=he(e);s.children.has(n)||s.children.set(n,vl());const r=s.children.get(n);e=Re(e),Gi(r,e,t)}}function DB(s,e){if(Be(e))return s.value=null,s.children.clear(),!0;if(s.value!==null){if(s.value.isLeafNode())return!1;{const t=s.value;return s.value=null,t.forEachChild(Ge,(n,r)=>{Gi(s,new Te(n),r)}),DB(s,e)}}else if(s.children.size>0){const t=he(e);return e=Re(e),s.children.has(t)&&DB(s.children.get(t),e)&&s.children.delete(t),s.children.size===0}else return!0}function wB(s,e,t){s.value!==null?t(e,s.value):UN(s,(n,r)=>{const i=new Te(e.toString()+"/"+n);wB(r,i,t)})}function UN(s,e){s.children.forEach((t,n)=>{e(n,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Dt(this.last_,(n,r)=>{t[n]=t[n]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=10*1e3,qN=30*1e3,jN=300*1e3;class JN{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new HN(e);const n=Jg+(qN-Jg)*Math.random();Uo(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Dt(e,(r,i)=>{i>0&&Ln(this.statsToReport_,r)&&(t[r]=i,n=!0)}),n&&this.server_.reportStats(t),Uo(this.reportStats_.bind(this),Math.floor(Math.random()*2*jN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bn;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Bn||(Bn={}));function Jy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qd(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Bn.ACK_USER_WRITE,this.source=Jy()}operationForChild(e){if(Be(this.path)){if(this.affectedTree.value!=null)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Te(e));return new Al(De(),t,this.revert)}}else return J(he(this.path)===e,"operationForChild called for unrelated child."),new Al(Re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.source=e,this.path=t,this.type=Bn.LISTEN_COMPLETE}operationForChild(e){return Be(this.path)?new Ea(this.source,De()):new Ea(this.source,Re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Bn.OVERWRITE}operationForChild(e){return Be(this.path)?new br(this.source,De(),this.snap.getImmediateChild(e)):new br(this.source,Re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Bn.MERGE}operationForChild(e){if(Be(this.path)){const t=this.children.subtree(new Te(e));return t.isEmpty()?null:t.value?new br(this.source,De(),t.value):new ya(this.source,De(),t)}else return J(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ya(this.source,Re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Be(e))return this.isFullyInitialized()&&!this.filtered_;const t=he(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function KN(s,e,t,n){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&s.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(xN(o.childName,o.snapshotNode))}),po(s,r,"child_removed",e,n,t),po(s,r,"child_added",e,n,t),po(s,r,"child_moved",i,n,t),po(s,r,"child_changed",e,n,t),po(s,r,"value",e,n,t),r}function po(s,e,t,n,r,i){const o=n.filter(a=>a.type===t);o.sort((a,l)=>QN(s,a,l)),o.forEach(a=>{const l=zN(s,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,s.query_))})})}function zN(s,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function QN(s,e,t){if(e.childName==null||t.childName==null)throw Si("Should only compare child_ events.");const n=new fe(e.childName,e.snapshotNode),r=new fe(t.childName,t.snapshotNode);return s.index_.compare(n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(s,e){return{eventCache:s,serverCache:e}}function Ho(s,e,t,n){return yu(new Nr(e,t,n),s.serverCache)}function Wy(s,e,t,n){return yu(s.eventCache,new Nr(e,t,n))}function TB(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function Or(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bh;const $N=()=>(bh||(bh=new Gt(Lb)),bh);class Ne{static fromObject(e){let t=new Ne(null);return Dt(e,(n,r)=>{t=t.set(new Te(n),r)}),t}constructor(e,t=$N()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:De(),value:this.value};if(Be(e))return null;{const n=he(e),r=this.children.get(n);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Re(e),t);return i!=null?{path:Ke(new Te(n),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Be(e))return this;{const t=he(e),n=this.children.get(t);return n!==null?n.subtree(Re(e)):new Ne(null)}}set(e,t){if(Be(e))return new Ne(t,this.children);{const n=he(e),i=(this.children.get(n)||new Ne(null)).set(Re(e),t),o=this.children.insert(n,i);return new Ne(this.value,o)}}remove(e){if(Be(e))return this.children.isEmpty()?new Ne(null):new Ne(null,this.children);{const t=he(e),n=this.children.get(t);if(n){const r=n.remove(Re(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new Ne(null):new Ne(this.value,i)}else return this}}get(e){if(Be(e))return this.value;{const t=he(e),n=this.children.get(t);return n?n.get(Re(e)):null}}setTree(e,t){if(Be(e))return t;{const n=he(e),i=(this.children.get(n)||new Ne(null)).setTree(Re(e),t);let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),new Ne(this.value,o)}}fold(e){return this.fold_(De(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(Ke(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,De(),t)}findOnPath_(e,t,n){const r=this.value?n(t,this.value):!1;if(r)return r;if(Be(e))return null;{const i=he(e),o=this.children.get(i);return o?o.findOnPath_(Re(e),Ke(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,De(),t)}foreachOnPath_(e,t,n){if(Be(e))return this;{this.value&&n(t,this.value);const r=he(e),i=this.children.get(r);return i?i.foreachOnPath_(Re(e),Ke(t,r),n):new Ne(null)}}foreach(e){this.foreach_(De(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(Ke(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.writeTree_=e}static empty(){return new pn(new Ne(null))}}function qo(s,e,t){if(Be(e))return new pn(new Ne(t));{const n=s.writeTree_.findRootMostValueAndPath(e);if(n!=null){const r=n.path;let i=n.value;const o=Vt(r,e);return i=i.updateChild(o,t),new pn(s.writeTree_.set(r,i))}else{const r=new Ne(t),i=s.writeTree_.setTree(e,r);return new pn(i)}}}function Wg(s,e,t){let n=s;return Dt(t,(r,i)=>{n=qo(n,Ke(e,r),i)}),n}function Kg(s,e){if(Be(e))return pn.empty();{const t=s.writeTree_.setTree(e,new Ne(null));return new pn(t)}}function vB(s,e){return Ur(s,e)!=null}function Ur(s,e){const t=s.writeTree_.findRootMostValueAndPath(e);return t!=null?s.writeTree_.get(t.path).getChild(Vt(t.path,e)):null}function zg(s){const e=[],t=s.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ge,(n,r)=>{e.push(new fe(n,r))}):s.writeTree_.children.inorderTraversal((n,r)=>{r.value!=null&&e.push(new fe(n,r.value))}),e}function bs(s,e){if(Be(e))return s;{const t=Ur(s,e);return t!=null?new pn(new Ne(t)):new pn(s.writeTree_.subtree(e))}}function AB(s){return s.writeTree_.isEmpty()}function Di(s,e){return Ky(De(),s.writeTree_,e)}function Ky(s,e,t){if(e.value!=null)return t.updateChild(s,e.value);{let n=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(J(i.value!==null,"Priority writes must always be leaf nodes"),n=i.value):t=Ky(Ke(s,r),i,t)}),!t.getChild(s).isEmpty()&&n!==null&&(t=t.updateChild(Ke(s,".priority"),n)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(s,e){return Yy(e,s)}function YN(s,e,t,n,r){J(n>s.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),s.allWrites.push({path:e,snap:t,writeId:n,visible:r}),r&&(s.visibleWrites=qo(s.visibleWrites,e,t)),s.lastWriteId=n}function XN(s,e){for(let t=0;t<s.allWrites.length;t++){const n=s.allWrites[t];if(n.writeId===e)return n}return null}function ZN(s,e){const t=s.allWrites.findIndex(a=>a.writeId===e);J(t>=0,"removeWrite called with nonexistent writeId.");const n=s.allWrites[t];s.allWrites.splice(t,1);let r=n.visible,i=!1,o=s.allWrites.length-1;for(;r&&o>=0;){const a=s.allWrites[o];a.visible&&(o>=t&&eO(a,n.path)?r=!1:nn(n.path,a.path)&&(i=!0)),o--}if(r){if(i)return tO(s),!0;if(n.snap)s.visibleWrites=Kg(s.visibleWrites,n.path);else{const a=n.children;Dt(a,l=>{s.visibleWrites=Kg(s.visibleWrites,Ke(n.path,l))})}return!0}else return!1}function eO(s,e){if(s.snap)return nn(s.path,e);for(const t in s.children)if(s.children.hasOwnProperty(t)&&nn(Ke(s.path,t),e))return!0;return!1}function tO(s){s.visibleWrites=zy(s.allWrites,nO,De()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function nO(s){return s.visible}function zy(s,e,t){let n=pn.empty();for(let r=0;r<s.length;++r){const i=s[r];if(e(i)){const o=i.path;let a;if(i.snap)nn(t,o)?(a=Vt(t,o),n=qo(n,a,i.snap)):nn(o,t)&&(a=Vt(o,t),n=qo(n,De(),i.snap.getChild(a)));else if(i.children){if(nn(t,o))a=Vt(t,o),n=Wg(n,a,i.children);else if(nn(o,t))if(a=Vt(o,t),Be(a))n=Wg(n,De(),i.children);else{const l=hi(i.children,he(a));if(l){const u=l.getChild(Re(a));n=qo(n,De(),u)}}}else throw Si("WriteRecord should have .snap or .children")}}return n}function Qy(s,e,t,n,r){if(!n&&!r){const i=Ur(s.visibleWrites,e);if(i!=null)return i;{const o=bs(s.visibleWrites,e);if(AB(o))return t;if(t==null&&!vB(o,De()))return null;{const a=t||ie.EMPTY_NODE;return Di(o,a)}}}else{const i=bs(s.visibleWrites,e);if(!r&&AB(i))return t;if(!r&&t==null&&!vB(i,De()))return null;{const o=function(u){return(u.visible||r)&&(!n||!~n.indexOf(u.writeId))&&(nn(u.path,e)||nn(e,u.path))},a=zy(s.allWrites,o,e),l=t||ie.EMPTY_NODE;return Di(a,l)}}}function sO(s,e,t){let n=ie.EMPTY_NODE;const r=Ur(s.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ge,(i,o)=>{n=n.updateImmediateChild(i,o)}),n;if(t){const i=bs(s.visibleWrites,e);return t.forEachChild(Ge,(o,a)=>{const l=Di(bs(i,new Te(o)),a);n=n.updateImmediateChild(o,l)}),zg(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}else{const i=bs(s.visibleWrites,e);return zg(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}}function rO(s,e,t,n,r){J(n||r,"Either existingEventSnap or existingServerSnap must exist");const i=Ke(e,t);if(vB(s.visibleWrites,i))return null;{const o=bs(s.visibleWrites,i);return AB(o)?r.getChild(t):Di(o,r.getChild(t))}}function iO(s,e,t,n){const r=Ke(e,t),i=Ur(s.visibleWrites,r);if(i!=null)return i;if(n.isCompleteForChild(t)){const o=bs(s.visibleWrites,r);return Di(o,n.getNode().getImmediateChild(t))}else return null}function oO(s,e){return Ur(s.visibleWrites,e)}function aO(s,e,t,n,r,i,o){let a;const l=bs(s.visibleWrites,e),u=Ur(l,De());if(u!=null)a=u;else if(t!=null)a=Di(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],B=o.getCompare(),p=i?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o);let g=p.getNext();for(;g&&h.length<r;)B(g,n)!==0&&h.push(g),g=p.getNext();return h}else return[]}function cO(){return{visibleWrites:pn.empty(),allWrites:[],lastWriteId:-1}}function Rl(s,e,t,n){return Qy(s.writeTree,s.treePath,e,t,n)}function Yd(s,e){return sO(s.writeTree,s.treePath,e)}function Qg(s,e,t,n){return rO(s.writeTree,s.treePath,e,t,n)}function Sl(s,e){return oO(s.writeTree,Ke(s.treePath,e))}function lO(s,e,t,n,r,i){return aO(s.writeTree,s.treePath,e,t,n,r,i)}function Xd(s,e,t){return iO(s.writeTree,s.treePath,e,t)}function $y(s,e){return Yy(Ke(s.treePath,e),s.writeTree)}function Yy(s,e){return{treePath:s,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;J(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),J(n!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(n,ma(n,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(n,ga(n,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(n,Ii(n,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(n,ma(n,e.snapshotNode,r.oldSnap));else throw Si("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Xy=new hO;class Zd{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new Nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xd(this.writes_,e,n)}}getChildAfterChild(e,t,n){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Or(this.viewCache_),i=lO(this.writes_,r,t,1,n,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(s){return{filter:s}}function dO(s,e){J(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),J(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function fO(s,e,t,n,r){const i=new uO;let o,a;if(t.type===Bn.OVERWRITE){const u=t;u.source.fromUser?o=RB(s,e,u.path,u.snap,n,r,i):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Be(u.path),o=Pl(s,e,u.path,u.snap,n,r,a,i))}else if(t.type===Bn.MERGE){const u=t;u.source.fromUser?o=CO(s,e,u.path,u.children,n,r,i):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=SB(s,e,u.path,u.children,n,r,a,i))}else if(t.type===Bn.ACK_USER_WRITE){const u=t;u.revert?o=_O(s,e,u.path,n,r,i):o=gO(s,e,u.path,u.affectedTree,n,r,i)}else if(t.type===Bn.LISTEN_COMPLETE)o=mO(s,e,t.path,n,i);else throw Si("Unknown operation type: "+t.type);const l=i.getChanges();return pO(e,o,l),{viewCache:o,changes:l}}function pO(s,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const r=n.getNode().isLeafNode()||n.getNode().isEmpty(),i=TB(s);(t.length>0||!s.eventCache.isFullyInitialized()||r&&!n.getNode().equals(i)||!n.getNode().getPriority().equals(i.getPriority()))&&t.push(jy(TB(e)))}}function Zy(s,e,t,n,r,i){const o=e.eventCache;if(Sl(n,t)!=null)return e;{let a,l;if(Be(t))if(J(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Or(e),h=u instanceof ie?u:ie.EMPTY_NODE,B=Yd(n,h);a=s.filter.updateFullNode(e.eventCache.getNode(),B,i)}else{const u=Rl(n,Or(e));a=s.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=he(t);if(u===".priority"){J(Ks(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const B=Qg(n,t,h,l);B!=null?a=s.filter.updatePriority(h,B):a=o.getNode()}else{const h=Re(t);let B;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=Qg(n,t,o.getNode(),l);p!=null?B=o.getNode().getImmediateChild(u).updateChild(h,p):B=o.getNode().getImmediateChild(u)}else B=Xd(n,u,e.serverCache);B!=null?a=s.filter.updateChild(o.getNode(),u,B,h,r,i):a=o.getNode()}}return Ho(e,a,o.isFullyInitialized()||Be(t),s.filter.filtersNodes())}}function Pl(s,e,t,n,r,i,o,a){const l=e.serverCache;let u;const h=o?s.filter:s.filter.getIndexedFilter();if(Be(t))u=h.updateFullNode(l.getNode(),n,null);else if(h.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(t,n);u=h.updateFullNode(l.getNode(),g,null)}else{const g=he(t);if(!l.isCompleteForPath(t)&&Ks(t)>1)return e;const m=Re(t),x=l.getNode().getImmediateChild(g).updateChild(m,n);g===".priority"?u=h.updatePriority(l.getNode(),x):u=h.updateChild(l.getNode(),g,x,m,Xy,null)}const B=Wy(e,u,l.isFullyInitialized()||Be(t),h.filtersNodes()),p=new Zd(r,B,i);return Zy(s,B,t,r,p,a)}function RB(s,e,t,n,r,i,o){const a=e.eventCache;let l,u;const h=new Zd(r,e,i);if(Be(t))u=s.filter.updateFullNode(e.eventCache.getNode(),n,o),l=Ho(e,u,!0,s.filter.filtersNodes());else{const B=he(t);if(B===".priority")u=s.filter.updatePriority(e.eventCache.getNode(),n),l=Ho(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=Re(t),g=a.getNode().getImmediateChild(B);let m;if(Be(p))m=n;else{const S=h.getCompleteChild(B);S!=null?Hd(p)===".priority"&&S.getChild(xy(p)).isEmpty()?m=S:m=S.updateChild(p,n):m=ie.EMPTY_NODE}if(g.equals(m))l=e;else{const S=s.filter.updateChild(a.getNode(),B,m,p,h,o);l=Ho(e,S,a.isFullyInitialized(),s.filter.filtersNodes())}}}return l}function $g(s,e){return s.eventCache.isCompleteForChild(e)}function CO(s,e,t,n,r,i,o){let a=e;return n.foreach((l,u)=>{const h=Ke(t,l);$g(e,he(h))&&(a=RB(s,a,h,u,r,i,o))}),n.foreach((l,u)=>{const h=Ke(t,l);$g(e,he(h))||(a=RB(s,a,h,u,r,i,o))}),a}function Yg(s,e,t){return t.foreach((n,r)=>{e=e.updateChild(n,r)}),e}function SB(s,e,t,n,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Be(t)?u=n:u=new Ne(null).setTree(t,n);const h=e.serverCache.getNode();return u.children.inorderTraversal((B,p)=>{if(h.hasChild(B)){const g=e.serverCache.getNode().getImmediateChild(B),m=Yg(s,g,p);l=Pl(s,l,new Te(B),m,r,i,o,a)}}),u.children.inorderTraversal((B,p)=>{const g=!e.serverCache.isCompleteForChild(B)&&p.value===null;if(!h.hasChild(B)&&!g){const m=e.serverCache.getNode().getImmediateChild(B),S=Yg(s,m,p);l=Pl(s,l,new Te(B),S,r,i,o,a)}}),l}function gO(s,e,t,n,r,i,o){if(Sl(r,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(n.value!=null){if(Be(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Pl(s,e,t,l.getNode().getChild(t),r,i,a,o);if(Be(t)){let u=new Ne(null);return l.getNode().forEachChild(ai,(h,B)=>{u=u.set(new Te(h),B)}),SB(s,e,t,u,r,i,a,o)}else return e}else{let u=new Ne(null);return n.foreach((h,B)=>{const p=Ke(t,h);l.isCompleteForPath(p)&&(u=u.set(h,l.getNode().getChild(p)))}),SB(s,e,t,u,r,i,a,o)}}function mO(s,e,t,n,r){const i=e.serverCache,o=Wy(e,i.getNode(),i.isFullyInitialized()||Be(t),i.isFiltered());return Zy(s,o,t,n,Xy,r)}function _O(s,e,t,n,r,i){let o;if(Sl(n,t)!=null)return e;{const a=new Zd(n,e,r),l=e.eventCache.getNode();let u;if(Be(t)||he(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Rl(n,Or(e));else{const B=e.serverCache.getNode();J(B instanceof ie,"serverChildren would be complete if leaf node"),h=Yd(n,B)}h=h,u=s.filter.updateFullNode(l,h,i)}else{const h=he(t);let B=Xd(n,h,e.serverCache);B==null&&e.serverCache.isCompleteForChild(h)&&(B=l.getImmediateChild(h)),B!=null?u=s.filter.updateChild(l,h,B,Re(t),a,i):e.eventCache.getNode().hasChild(h)?u=s.filter.updateChild(l,h,ie.EMPTY_NODE,Re(t),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Rl(n,Or(e)),o.isLeafNode()&&(u=s.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Sl(n,De())!=null,Ho(e,u,o,s.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Wd(n.getIndex()),i=VN(n);this.processor_=BO(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(ie.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(ie.EMPTY_NODE,a.getNode(),null),h=new Nr(l,o.isFullyInitialized(),r.filtersNodes()),B=new Nr(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=yu(B,h),this.eventGenerator_=new WN(this.query_)}get query(){return this.query_}}function yO(s){return s.viewCache_.serverCache.getNode()}function IO(s,e){const t=Or(s.viewCache_);return t&&(s.query._queryParams.loadsAllData()||!Be(e)&&!t.getImmediateChild(he(e)).isEmpty())?t.getChild(e):null}function Xg(s){return s.eventRegistrations_.length===0}function DO(s,e){s.eventRegistrations_.push(e)}function Zg(s,e,t){const n=[];if(t){J(e==null,"A cancel should cancel all event registrations.");const r=s.query._path;s.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,r);o&&n.push(o)})}if(e){let r=[];for(let i=0;i<s.eventRegistrations_.length;++i){const o=s.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(s.eventRegistrations_.slice(i+1));break}}s.eventRegistrations_=r}else s.eventRegistrations_=[];return n}function em(s,e,t,n){e.type===Bn.MERGE&&e.source.queryId!==null&&(J(Or(s.viewCache_),"We should always have a full cache before handling merges"),J(TB(s.viewCache_),"Missing event cache, even though we have a server cache"));const r=s.viewCache_,i=fO(s.processor_,r,e,t,n);return dO(s.processor_,i.viewCache),J(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=i.viewCache,eI(s,i.changes,i.viewCache.eventCache.getNode(),null)}function wO(s,e){const t=s.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ge,(i,o)=>{n.push(Ii(i,o))}),t.isFullyInitialized()&&n.push(jy(t.getNode())),eI(s,n,t.getNode(),e)}function eI(s,e,t,n){const r=n?[n]:s.eventRegistrations_;return KN(s.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl;class TO{constructor(){this.views=new Map}}function vO(s){J(!bl,"__referenceConstructor has already been defined"),bl=s}function AO(){return J(bl,"Reference.ts has not been loaded"),bl}function RO(s){return s.views.size===0}function ef(s,e,t,n){const r=e.source.queryId;if(r!==null){const i=s.views.get(r);return J(i!=null,"SyncTree gave us an op for an invalid query."),em(i,e,t,n)}else{let i=[];for(const o of s.views.values())i=i.concat(em(o,e,t,n));return i}}function SO(s,e,t,n,r){const i=e._queryIdentifier,o=s.views.get(i);if(!o){let a=Rl(t,r?n:null),l=!1;a?l=!0:n instanceof ie?(a=Yd(t,n),l=!1):(a=ie.EMPTY_NODE,l=!1);const u=yu(new Nr(a,l,!1),new Nr(n,r,!1));return new EO(e,u)}return o}function PO(s,e,t,n,r,i){const o=SO(s,e,n,r,i);return s.views.has(e._queryIdentifier)||s.views.set(e._queryIdentifier,o),DO(o,t),wO(o,t)}function bO(s,e,t,n){const r=e._queryIdentifier,i=[];let o=[];const a=zs(s);if(r==="default")for(const[l,u]of s.views.entries())o=o.concat(Zg(u,t,n)),Xg(u)&&(s.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=s.views.get(r);l&&(o=o.concat(Zg(l,t,n)),Xg(l)&&(s.views.delete(r),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!zs(s)&&i.push(new(AO())(e._repo,e._path)),{removed:i,events:o}}function tI(s){const e=[];for(const t of s.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ci(s,e){let t=null;for(const n of s.views.values())t=t||IO(n,e);return t}function nI(s,e){if(e._queryParams.loadsAllData())return Iu(s);{const n=e._queryIdentifier;return s.views.get(n)}}function sI(s,e){return nI(s,e)!=null}function zs(s){return Iu(s)!=null}function Iu(s){for(const e of s.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl;function NO(s){J(!Nl,"__referenceConstructor has already been defined"),Nl=s}function OO(){return J(Nl,"Reference.ts has not been loaded"),Nl}let LO=1;class tm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ne(null),this.pendingWriteTree_=cO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rI(s,e,t,n,r){return YN(s.pendingWriteTree_,e,t,n,r),r?Xa(s,new br(Jy(),e,t)):[]}function gr(s,e,t=!1){const n=XN(s.pendingWriteTree_,e);if(ZN(s.pendingWriteTree_,e)){let i=new Ne(null);return n.snap!=null?i=i.set(De(),!0):Dt(n.children,o=>{i=i.set(new Te(o),!0)}),Xa(s,new Al(n.path,i,t))}else return[]}function Du(s,e,t){return Xa(s,new br(zd(),e,t))}function FO(s,e,t){const n=Ne.fromObject(t);return Xa(s,new ya(zd(),e,n))}function kO(s,e){return Xa(s,new Ea(zd(),e))}function xO(s,e,t){const n=nf(s,t);if(n){const r=sf(n),i=r.path,o=r.queryId,a=Vt(i,e),l=new Ea(Qd(o),a);return rf(s,i,l)}else return[]}function PB(s,e,t,n,r=!1){const i=e._path,o=s.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||sI(o,e))){const l=bO(o,e,t,n);RO(o)&&(s.syncPointTree_=s.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!r){const h=u.findIndex(p=>p._queryParams.loadsAllData())!==-1,B=s.syncPointTree_.findOnPath(i,(p,g)=>zs(g));if(h&&!B){const p=s.syncPointTree_.subtree(i);if(!p.isEmpty()){const g=GO(p);for(let m=0;m<g.length;++m){const S=g[m],x=S.query,j=aI(s,S);s.listenProvider_.startListening(jo(x),Ol(s,x),j.hashFn,j.onComplete)}}}!B&&u.length>0&&!n&&(h?s.listenProvider_.stopListening(jo(e),null):u.forEach(p=>{const g=s.queryToTagMap.get(wu(p));s.listenProvider_.stopListening(jo(p),g)}))}UO(s,u)}return a}function MO(s,e,t,n){const r=nf(s,n);if(r!=null){const i=sf(r),o=i.path,a=i.queryId,l=Vt(o,e),u=new br(Qd(a),l,t);return rf(s,o,u)}else return[]}function VO(s,e,t,n){const r=nf(s,n);if(r){const i=sf(r),o=i.path,a=i.queryId,l=Vt(o,e),u=Ne.fromObject(t),h=new ya(Qd(a),l,u);return rf(s,o,h)}else return[]}function nm(s,e,t,n=!1){const r=e._path;let i=null,o=!1;s.syncPointTree_.foreachOnPath(r,(p,g)=>{const m=Vt(p,r);i=i||ci(g,m),o=o||zs(g)});let a=s.syncPointTree_.get(r);a?(o=o||zs(a),i=i||ci(a,De())):(a=new TO,s.syncPointTree_=s.syncPointTree_.set(r,a));let l;i!=null?l=!0:(l=!1,i=ie.EMPTY_NODE,s.syncPointTree_.subtree(r).foreachChild((g,m)=>{const S=ci(m,De());S&&(i=i.updateImmediateChild(g,S))}));const u=sI(a,e);if(!u&&!e._queryParams.loadsAllData()){const p=wu(e);J(!s.queryToTagMap.has(p),"View does not exist, but we have a tag");const g=HO();s.queryToTagMap.set(p,g),s.tagToQueryMap.set(g,p)}const h=$d(s.pendingWriteTree_,r);let B=PO(a,e,t,h,i,l);if(!u&&!o&&!n){const p=nI(a,e);B=B.concat(qO(s,e,p))}return B}function tf(s,e,t){const r=s.pendingWriteTree_,i=s.syncPointTree_.findOnPath(e,(o,a)=>{const l=Vt(o,e),u=ci(a,l);if(u)return u});return Qy(r,e,i,t,!0)}function Xa(s,e){return iI(e,s.syncPointTree_,null,$d(s.pendingWriteTree_,De()))}function iI(s,e,t,n){if(Be(s.path))return oI(s,e,t,n);{const r=e.get(De());t==null&&r!=null&&(t=ci(r,De()));let i=[];const o=he(s.path),a=s.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,h=$y(n,o);i=i.concat(iI(a,l,u,h))}return r&&(i=i.concat(ef(r,s,n,t))),i}}function oI(s,e,t,n){const r=e.get(De());t==null&&r!=null&&(t=ci(r,De()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=$y(n,o),h=s.operationForChild(o);h&&(i=i.concat(oI(h,a,l,u)))}),r&&(i=i.concat(ef(r,s,n,t))),i}function aI(s,e){const t=e.query,n=Ol(s,t);return{hashFn:()=>(yO(e)||ie.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return n?xO(s,t._path,n):kO(s,t._path);{const i=xb(r,t);return PB(s,t,null,i)}}}}function Ol(s,e){const t=wu(e);return s.queryToTagMap.get(t)}function wu(s){return s._path.toString()+"$"+s._queryIdentifier}function nf(s,e){return s.tagToQueryMap.get(e)}function sf(s){const e=s.indexOf("$");return J(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new Te(s.substr(0,e))}}function rf(s,e,t){const n=s.syncPointTree_.get(e);J(n,"Missing sync point for query tag that we're tracking");const r=$d(s.pendingWriteTree_,e);return ef(n,t,r,null)}function GO(s){return s.fold((e,t,n)=>{if(t&&zs(t))return[Iu(t)];{let r=[];return t&&(r=tI(t)),Dt(n,(i,o)=>{r=r.concat(o)}),r}})}function jo(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(OO())(s._repo,s._path):s}function UO(s,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const r=wu(n),i=s.queryToTagMap.get(r);s.queryToTagMap.delete(r),s.tagToQueryMap.delete(i)}}}function HO(){return LO++}function qO(s,e,t){const n=e._path,r=Ol(s,e),i=aI(s,t),o=s.listenProvider_.startListening(jo(e),r,i.hashFn,i.onComplete),a=s.syncPointTree_.subtree(n);if(r)J(!zs(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,h,B)=>{if(!Be(u)&&h&&zs(h))return[Iu(h).query];{let p=[];return h&&(p=p.concat(tI(h).map(g=>g.query))),Dt(B,(g,m)=>{p=p.concat(m)}),p}});for(let u=0;u<l.length;++u){const h=l[u];s.listenProvider_.stopListening(jo(h),Ol(s,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new of(t)}node(){return this.node_}}class af{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ke(this.path_,e);return new af(this.syncTree_,t)}node(){return tf(this.syncTree_,this.path_)}}const jO=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},sm=function(s,e,t){if(!s||typeof s!="object")return s;if(J(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return JO(s[".sv"],e,t);if(typeof s[".sv"]=="object")return WO(s[".sv"],e);J(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},JO=function(s,e,t){switch(s){case"timestamp":return t.timestamp;default:J(!1,"Unexpected server value: "+s)}},WO=function(s,e,t){s.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const n=s.increment;typeof n!="number"&&J(!1,"Unexpected increment value: "+n);const r=e.node();if(J(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;const o=r.getValue();return typeof o!="number"?n:o+n},KO=function(s,e,t,n){return cf(e,new af(t,s),n)},cI=function(s,e,t){return cf(s,new of(e),t)};function cf(s,e,t){const n=s.getPriority().val(),r=sm(n,e.getImmediateChild(".priority"),t);let i;if(s.isLeafNode()){const o=s,a=sm(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new at(a,Ze(r)):s}else{const o=s;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new at(r))),o.forEachChild(Ge,(a,l)=>{const u=cf(l,e.getImmediateChild(a),t);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function uf(s,e){let t=e instanceof Te?e:new Te(e),n=s,r=he(t);for(;r!==null;){const i=hi(n.node.children,r)||{children:{},childCount:0};n=new lf(r,n,i),t=Re(t),r=he(t)}return n}function Ui(s){return s.node.value}function lI(s,e){s.node.value=e,bB(s)}function uI(s){return s.node.childCount>0}function zO(s){return Ui(s)===void 0&&!uI(s)}function Tu(s,e){Dt(s.node.children,(t,n)=>{e(new lf(t,s,n))})}function hI(s,e,t,n){t&&e(s),Tu(s,r=>{hI(r,e,!0)})}function QO(s,e,t){let n=s.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function Za(s){return new Te(s.parent===null?s.name:Za(s.parent)+"/"+s.name)}function bB(s){s.parent!==null&&$O(s.parent,s.name,s)}function $O(s,e,t){const n=zO(t),r=Ln(s.node.children,e);n&&r?(delete s.node.children[e],s.node.childCount--,bB(s)):!n&&!r&&(s.node.children[e]=t.node,s.node.childCount++,bB(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO=/[\[\].#$\/\u0000-\u001F\u007F]/,XO=/[\[\].#$\u0000-\u001F\u007F]/,Nh=10*1024*1024,hf=function(s){return typeof s=="string"&&s.length!==0&&!YO.test(s)},BI=function(s){return typeof s=="string"&&s.length!==0&&!XO.test(s)},ZO=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),BI(s)},dI=function(s){return s===null||typeof s=="string"||typeof s=="number"&&!_u(s)||s&&typeof s=="object"&&Ln(s,".sv")},NB=function(s,e,t,n){vu(Bi(s,"value"),e,t)},vu=function(s,e,t){const n=t instanceof Te?new gN(t,s):t;if(e===void 0)throw new Error(s+"contains undefined "+lr(n));if(typeof e=="function")throw new Error(s+"contains a function "+lr(n)+" with contents = "+e.toString());if(_u(e))throw new Error(s+"contains "+e.toString()+" "+lr(n));if(typeof e=="string"&&e.length>Nh/3&&jl(e)>Nh)throw new Error(s+"contains a string greater than "+Nh+" utf8 bytes "+lr(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(Dt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!hf(o)))throw new Error(s+" contains an invalid key ("+o+") "+lr(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mN(n,o),vu(s,a,n),_N(n)}),r&&i)throw new Error(s+' contains ".value" child '+lr(n)+" in addition to actual children.")}},e0=function(s,e){let t,n;for(t=0;t<e.length;t++){n=e[t];const i=Ca(n);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!hf(i[o]))throw new Error(s+"contains an invalid key ("+i[o]+") in path "+n.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(CN);let r=null;for(t=0;t<e.length;t++){if(n=e[t],r!==null&&nn(r,n))throw new Error(s+"contains a path "+r.toString()+" that is ancestor of another path "+n.toString());r=n}},t0=function(s,e,t,n){const r=Bi(s,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const i=[];Dt(e,(o,a)=>{const l=new Te(o);if(vu(r,a,Ke(t,l)),Hd(l)===".priority"&&!dI(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),e0(r,i)},n0=function(s,e,t){if(_u(e))throw new Error(Bi(s,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!dI(e))throw new Error(Bi(s,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},fI=function(s,e,t,n){if(!BI(t))throw new Error(Bi(s,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},s0=function(s,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fI(s,e,t)},Ro=function(s,e){if(he(e)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},r0=function(s,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ZO(t))throw new Error(Bi(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bf(s,e){let t=null;for(let n=0;n<e.length;n++){const r=e[n],i=r.getPath();t!==null&&!qd(i,t.path)&&(s.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&s.eventLists_.push(t)}function pI(s,e,t){Bf(s,t),CI(s,n=>qd(n,e))}function is(s,e,t){Bf(s,t),CI(s,n=>nn(n,e)||nn(e,n))}function CI(s,e){s.recursionDepth_++;let t=!0;for(let n=0;n<s.eventLists_.length;n++){const r=s.eventLists_[n];if(r){const i=r.path;e(i)?(o0(s.eventLists_[n]),s.eventLists_[n]=null):t=!1}}t&&(s.eventLists_=[]),s.recursionDepth_--}function o0(s){for(let e=0;e<s.events.length;e++){const t=s.events[e];if(t!==null){s.events[e]=null;const n=t.getEventRunner();Go&&ft("event: "+t.toString()),Vi(n)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="repo_interrupt",c0=25;class l0{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new i0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vl(),this.transactionQueueTree_=new lf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function u0(s,e,t){if(s.stats_=Gd(s.repoInfo_),s.forceRestClient_||Ub())s.server_=new Tl(s.repoInfo_,(n,r,i,o)=>{rm(s,n,r,i,o)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>im(s,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ut(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}s.persistentConnection_=new Zn(s.repoInfo_,e,(n,r,i,o)=>{rm(s,n,r,i,o)},n=>{im(s,n)},n=>{B0(s,n)},s.authTokenProvider_,s.appCheckProvider_,t),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(n=>{s.server_.refreshAuthToken(n)}),s.appCheckProvider_.addTokenChangeListener(n=>{s.server_.refreshAppCheckToken(n.token)}),s.statsReporter_=Wb(s.repoInfo_,()=>new JN(s.stats_,s.server_)),s.infoData_=new GN,s.infoSyncTree_=new tm({startListening:(n,r,i,o)=>{let a=[];const l=s.infoData_.getNode(n._path);return l.isEmpty()||(a=Du(s.infoSyncTree_,n._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ff(s,"connected",!1),s.serverSyncTree_=new tm({startListening:(n,r,i,o)=>(s.server_.listen(n,i,r,(a,l)=>{const u=o(a,l);is(s.eventQueue_,n._path,u)}),[]),stopListening:(n,r)=>{s.server_.unlisten(n,r)}})}function h0(s){const t=s.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function df(s){return jO({timestamp:h0(s)})}function rm(s,e,t,n,r){s.dataUpdateCount++;const i=new Te(e);t=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(n){const l=nl(t,u=>Ze(u));o=VO(s.serverSyncTree_,i,l,r)}else{const l=Ze(t);o=MO(s.serverSyncTree_,i,l,r)}else if(n){const l=nl(t,u=>Ze(u));o=FO(s.serverSyncTree_,i,l)}else{const l=Ze(t);o=Du(s.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Au(s,i)),is(s.eventQueue_,a,o)}function im(s,e){ff(s,"connected",e),e===!1&&f0(s)}function B0(s,e){Dt(e,(t,n)=>{ff(s,t,n)})}function ff(s,e,t){const n=new Te("/.info/"+e),r=Ze(t);s.infoData_.updateSnapshot(n,r);const i=Du(s.infoSyncTree_,n,r);is(s.eventQueue_,n,i)}function gI(s){return s.nextWriteId_++}function d0(s,e,t,n,r){pf(s,"set",{path:e.toString(),value:t,priority:n});const i=df(s),o=Ze(t,n),a=tf(s.serverSyncTree_,e),l=cI(o,a,i),u=gI(s),h=rI(s.serverSyncTree_,e,l,u,!0);Bf(s.eventQueue_,h),s.server_.put(e.toString(),o.val(!0),(p,g)=>{const m=p==="ok";m||Nt("set at "+e+" failed: "+p);const S=gr(s.serverSyncTree_,u,!m);is(s.eventQueue_,e,S),wi(s,r,p,g)});const B=II(s,e);Au(s,B),is(s.eventQueue_,B,[])}function f0(s){pf(s,"onDisconnectEvents");const e=df(s),t=vl();wB(s.onDisconnect_,De(),(r,i)=>{const o=KO(r,i,s.serverSyncTree_,e);Gi(t,r,o)});let n=[];wB(t,De(),(r,i)=>{n=n.concat(Du(s.serverSyncTree_,r,i));const o=II(s,r);Au(s,o)}),s.onDisconnect_=vl(),is(s.eventQueue_,De(),n)}function p0(s,e,t){s.server_.onDisconnectCancel(e.toString(),(n,r)=>{n==="ok"&&DB(s.onDisconnect_,e),wi(s,t,n,r)})}function om(s,e,t,n){const r=Ze(t);s.server_.onDisconnectPut(e.toString(),r.val(!0),(i,o)=>{i==="ok"&&Gi(s.onDisconnect_,e,r),wi(s,n,i,o)})}function C0(s,e,t,n,r){const i=Ze(t,n);s.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&Gi(s.onDisconnect_,e,i),wi(s,r,o,a)})}function g0(s,e,t,n){if(tl(t)){ft("onDisconnect().update() called with empty data.  Don't do anything."),wi(s,n,"ok",void 0);return}s.server_.onDisconnectMerge(e.toString(),t,(r,i)=>{r==="ok"&&Dt(t,(o,a)=>{const l=Ze(a);Gi(s.onDisconnect_,Ke(e,o),l)}),wi(s,n,r,i)})}function m0(s,e,t){let n;he(e._path)===".info"?n=nm(s.infoSyncTree_,e,t):n=nm(s.serverSyncTree_,e,t),pI(s.eventQueue_,e._path,n)}function _0(s,e,t){let n;he(e._path)===".info"?n=PB(s.infoSyncTree_,e,t):n=PB(s.serverSyncTree_,e,t),pI(s.eventQueue_,e._path,n)}function E0(s){s.persistentConnection_&&s.persistentConnection_.interrupt(a0)}function pf(s,...e){let t="";s.persistentConnection_&&(t=s.persistentConnection_.id+":"),ft(t,...e)}function wi(s,e,t,n){e&&Vi(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let i=r;n&&(i+=": "+n);const o=new Error(i);o.code=r,e(o)}})}function mI(s,e,t){return tf(s.serverSyncTree_,e,t)||ie.EMPTY_NODE}function Cf(s,e=s.transactionQueueTree_){if(e||Ru(s,e),Ui(e)){const t=EI(s,e);J(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&y0(s,Za(e),t)}else uI(e)&&Tu(e,t=>{Cf(s,t)})}function y0(s,e,t){const n=t.map(u=>u.currentWriteId),r=mI(s,e,n);let i=r;const o=r.hash();for(let u=0;u<t.length;u++){const h=t[u];J(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const B=Vt(e,h.path);i=i.updateChild(B,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;s.server_.put(l.toString(),a,u=>{pf(s,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const B=[];for(let p=0;p<t.length;p++)t[p].status=2,h=h.concat(gr(s.serverSyncTree_,t[p].currentWriteId)),t[p].onComplete&&B.push(()=>t[p].onComplete(null,!0,t[p].currentOutputSnapshotResolved)),t[p].unwatcher();Ru(s,uf(s.transactionQueueTree_,e)),Cf(s,s.transactionQueueTree_),is(s.eventQueue_,e,h);for(let p=0;p<B.length;p++)Vi(B[p])}else{if(u==="datastale")for(let B=0;B<t.length;B++)t[B].status===3?t[B].status=4:t[B].status=0;else{Nt("transaction at "+l.toString()+" failed: "+u);for(let B=0;B<t.length;B++)t[B].status=4,t[B].abortReason=u}Au(s,e)}},o)}function Au(s,e){const t=_I(s,e),n=Za(t),r=EI(s,t);return I0(s,r,n),n}function I0(s,e,t){if(e.length===0)return;const n=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Vt(t,l.path);let h=!1,B;if(J(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,B=l.abortReason,r=r.concat(gr(s.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=c0)h=!0,B="maxretry",r=r.concat(gr(s.serverSyncTree_,l.currentWriteId,!0));else{const p=mI(s,l.path,o);l.currentInputSnapshot=p;const g=e[a].update(p.val());if(g!==void 0){vu("transaction failed: Data returned ",g,l.path);let m=Ze(g);typeof g=="object"&&g!=null&&Ln(g,".priority")||(m=m.updatePriority(p.getPriority()));const x=l.currentWriteId,j=df(s),Y=cI(m,p,j);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=Y,l.currentWriteId=gI(s),o.splice(o.indexOf(x),1),r=r.concat(rI(s.serverSyncTree_,l.path,Y,l.currentWriteId,l.applyLocally)),r=r.concat(gr(s.serverSyncTree_,x,!0))}else h=!0,B="nodata",r=r.concat(gr(s.serverSyncTree_,l.currentWriteId,!0))}is(s.eventQueue_,t,r),r=[],h&&(e[a].status=2,(function(p){setTimeout(p,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(B==="nodata"?n.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):n.push(()=>e[a].onComplete(new Error(B),!1,null))))}Ru(s,s.transactionQueueTree_);for(let a=0;a<n.length;a++)Vi(n[a]);Cf(s,s.transactionQueueTree_)}function _I(s,e){let t,n=s.transactionQueueTree_;for(t=he(e);t!==null&&Ui(n)===void 0;)n=uf(n,t),e=Re(e),t=he(e);return n}function EI(s,e){const t=[];return yI(s,e,t),t.sort((n,r)=>n.order-r.order),t}function yI(s,e,t){const n=Ui(e);if(n)for(let r=0;r<n.length;r++)t.push(n[r]);Tu(e,r=>{yI(s,r,t)})}function Ru(s,e){const t=Ui(e);if(t){let n=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[n]=t[r],n++);t.length=n,lI(e,t.length>0?t:void 0)}Tu(e,n=>{Ru(s,n)})}function II(s,e){const t=Za(_I(s,e)),n=uf(s.transactionQueueTree_,e);return QO(n,r=>{Oh(s,r)}),Oh(s,n),hI(n,r=>{Oh(s,r)}),t}function Oh(s,e){const t=Ui(e);if(t){const n=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(J(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(J(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(gr(s.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?lI(e,void 0):t.length=i+1,is(s.eventQueue_,Za(e),r);for(let o=0;o<n.length;o++)Vi(n[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(s){let e="";const t=s.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let r=t[n];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function w0(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const t of s.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):Nt(`Invalid query segment '${t}' in query '${s}'`)}return e}const am=function(s,e){const t=T0(s),n=t.namespace;t.domain==="firebase.com"&&rs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&rs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Nb();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ry(t.host,t.secure,n,r,e,"",n!==t.subdomain),path:new Te(t.pathString)}},T0=function(s){let e="",t="",n="",r="",i="",o=!0,a="https",l=443;if(typeof s=="string"){let u=s.indexOf("//");u>=0&&(a=s.substring(0,u-1),s=s.substring(u+2));let h=s.indexOf("/");h===-1&&(h=s.length);let B=s.indexOf("?");B===-1&&(B=s.length),e=s.substring(0,Math.min(h,B)),h<B&&(r=D0(s.substring(h,B)));const p=w0(s.substring(Math.min(s.length,B)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const m=e.indexOf(".");n=e.substring(0,m).toLowerCase(),t=e.substring(m+1),i=n}"ns"in p&&(i=p.ns)}return{host:e,port:l,domain:t,subdomain:n,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ut(this.snapshot.exportVal())}}class A0{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return J(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class S0{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new yn;return p0(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ro("OnDisconnect.remove",this._path);const e=new yn;return om(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ro("OnDisconnect.set",this._path),NB("OnDisconnect.set",e,this._path);const t=new yn;return om(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Ro("OnDisconnect.setWithPriority",this._path),NB("OnDisconnect.setWithPriority",e,this._path),n0("OnDisconnect.setWithPriority",t);const n=new yn;return C0(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){Ro("OnDisconnect.update",this._path),t0("OnDisconnect.update",e,this._path);const t=new yn;return g0(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return Be(this._path)?null:Hd(this._path)}get ref(){return new Xs(this._repo,this._path)}get _queryIdentifier(){const e=jg(this._queryParams),t=Md(e);return t==="{}"?"default":t}get _queryObject(){return jg(this._queryParams)}isEqual(e){if(e=ne(e),!(e instanceof gf))return!1;const t=this._repo===e._repo,n=qd(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+pN(this._path)}}class Xs extends gf{constructor(e,t){super(e,t,new Kd,!1)}get parent(){const e=xy(this._path);return e===null?null:new Xs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ll{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Te(e),n=OB(this.ref,e);return new Ll(this._node.getChild(t),n,Ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,r)=>e(new Ll(r,OB(this.ref,n),Ge)))}hasChild(e){const t=new Te(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Lc(s,e){return s=ne(s),s._checkNotDeleted("ref"),e!==void 0?OB(s._root,e):s._root}function OB(s,e){return s=ne(s),he(s._path)===null?s0("child","path",e):fI("child","path",e),new Xs(s._repo,Ke(s._path,e))}function P0(s){return s=ne(s),new S0(s._repo,s._path)}function cm(s,e){s=ne(s),Ro("set",s._path),NB("set",e,s._path);const t=new yn;return d0(s._repo,s._path,e,null,t.wrapCallback(()=>{})),t.promise}class mf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new v0("value",this,new Ll(e.snapshotNode,new Xs(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new A0(this,e,t):null}matches(e){return e instanceof mf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function b0(s,e,t,n,r){const i=new R0(t,void 0),o=new mf(i);return m0(s._repo,s,o),()=>_0(s._repo,s,o)}function lm(s,e,t,n){return b0(s,"value",e)}vO(Xs);NO(Xs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="FIREBASE_DATABASE_EMULATOR_HOST",LB={};let O0=!1;function L0(s,e,t,n){const r=e.lastIndexOf(":"),i=e.substring(0,r),o=Fr(i);s.repoInfo_=new Ry(e,o,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,t),n&&(s.authTokenProvider_=n)}function F0(s,e,t,n,r){let i=n||s.options.databaseURL;i===void 0&&(s.options.projectId||rs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",s.options.projectId),i=`${s.options.projectId}-default-rtdb.firebaseio.com`);let o=am(i,r),a=o.repoInfo,l;typeof process<"u"&&vg&&(l=vg[N0]),l?(i=`http://${l}?ns=${a.namespace}`,o=am(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new qb(s.name,s.options,e);r0("Invalid Firebase Database URL",o),Be(o.path)||rs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=x0(a,s,u,new Hb(s,t));return new M0(h,s)}function k0(s,e){const t=LB[e];(!t||t[s.key]!==s)&&rs(`Database ${e}(${s.repoInfo_}) has already been deleted.`),E0(s),delete t[s.key]}function x0(s,e,t,n){let r=LB[e.name];r||(r={},LB[e.name]=r);let i=r[s.toURLString()];return i&&rs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new l0(s,O0,t,n),r[s.toURLString()]=i,i}class M0{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(u0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xs(this._repo,De())),this._rootInternal}_delete(){return this._rootInternal!==null&&(k0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&rs("Cannot call "+e+" on a deleted database.")}}function V0(){yi.IS_TRANSPORT_INITIALIZED&&Nt("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function G0(){V0(),Cr.forceDisallow()}function U0(s=HB(),e){const t=Wl(s,"database").getImmediate({identifier:e});if(!t._instanceStarted){const n=qm("database");n&&DI(t,...n)}return t}function DI(s,e,t,n={}){s=ne(s),s._checkNotDeleted("useEmulator");const r=`${e}:${t}`,i=s._repoInternal;if(s._instanceStarted){if(r===s._repoInternal.repoInfo_.host&&Ls(n,i.repoInfo_.emulatorOptions))return;rs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)n.mockUserToken&&rs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Wc(Wc.OWNER);else if(n.mockUserToken){const a=typeof n.mockUserToken=="string"?n.mockUserToken:Wm(n.mockUserToken,s.app.options.projectId);o=new Wc(a)}Fr(e)&&GB(e),L0(i,r,n,o)}/**
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
 */function H0(s){vb(kr),vr(new Fs("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return F0(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),vn(Ag,Rg,s),vn(Ag,Rg,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0={".sv":"timestamp"};function Lh(){return q0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};Zn.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};H0();/**
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
 */const j0={PHONE:"phone",TOTP:"totp"},J0={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},W0={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},K0={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},z0={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function wI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $0=Q0,TI=wI,vI=new Na("auth","Firebase",wI()),Y0={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new Jl("@firebase/auth");function Kc(s,...e){Fl.logLevel<=pe.WARN&&Fl.warn(`Auth (${kr}): ${s}`,...e)}function zc(s,...e){Fl.logLevel<=pe.ERROR&&Fl.error(`Auth (${kr}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(s,...e){throw _f(s,...e)}function Ot(s,...e){return _f(s,...e)}function Su(s,e,t){const n={...TI(),[e]:t};return new Na("auth","Firebase",n).create(e,{appName:s.name})}function Bt(s){return Su(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hi(s,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Jt(s,"argument-error"),Su(s,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _f(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return vI.create(s,...e)}function U(s,e,...t){if(!s)throw _f(e,...t)}function Tn(s){const e="INTERNAL ASSERTION FAILED: "+s;throw zc(e),new Error(e)}function os(s,e){s||Tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function Ef(){return um()==="http:"||um()==="https:"}function um(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ef()||xw()||"connection"in navigator)?navigator.onLine:!0}function Z0(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t){this.shortDelay=e,this.longDelay=t,os(t>e,"Short delay should be less than long delay!"),this.isMobile=VB()||Km()}get(){return X0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(s,e){os(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tL=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nL=new ec(3e4,6e4);function Le(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function Fe(s,e,t,n,r={}){return RI(s,r,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const a=Lr({...o,key:s.config.apiKey}).slice(1),l=await s._getAdditionalHeaders();l["Content-Type"]="application/json",s.languageCode&&(l["X-Firebase-Locale"]=s.languageCode);const u={method:e,headers:l,...i};return kw()||(u.referrerPolicy="strict-origin-when-cross-origin"),s.emulatorConfig&&Fr(s.emulatorConfig.host)&&(u.credentials="include"),AI.fetch()(await SI(s,s.config.apiHost,t,a),u)})}async function RI(s,e,t){s._canInitEmulator=!1;const n={...eL,...e};try{const r=new rL(s),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw So(s,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw So(s,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw So(s,"email-already-in-use",o);if(l==="USER_DISABLED")throw So(s,"user-disabled",o);const h=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Su(s,h,u);Jt(s,h)}}catch(r){if(r instanceof cs)throw r;Jt(s,"network-request-failed",{message:String(r)})}}async function ls(s,e,t,n,r={}){const i=await Fe(s,e,t,n,r);return"mfaPendingCredential"in i&&Jt(s,"multi-factor-auth-required",{_serverResponse:i}),i}async function SI(s,e,t,n){const r=`${e}${t}?${n}`,i=s,o=i.config.emulator?yf(s.config,r):`${s.config.apiScheme}://${r}`;return tL.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function sL(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rL{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ot(this.auth,"network-request-failed")),nL.get())})}}function So(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=Ot(s,e,n);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(s){return s!==void 0&&s.getResponse!==void 0}function Bm(s){return s!==void 0&&s.enterprise!==void 0}class PI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return sL(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iL(s){return(await Fe(s,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function bI(s,e){return Fe(s,"GET","/v2/recaptchaConfig",Le(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oL(s,e){return Fe(s,"POST","/v1/accounts:delete",e)}async function aL(s,e){return Fe(s,"POST","/v1/accounts:update",e)}async function kl(s,e){return Fe(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function cL(s,e=!1){return ne(s).getIdToken(e)}async function NI(s,e=!1){const t=ne(s),n=await t.getIdToken(e),r=Pu(n);U(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:n,authTime:Jo(Fh(r.auth_time)),issuedAtTime:Jo(Fh(r.iat)),expirationTime:Jo(Fh(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fh(s){return Number(s)*1e3}function Pu(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return zc("JWT malformed, contained fewer than 3 sections"),null;try{const r=el(t);return r?JSON.parse(r):(zc("Failed to decode base64 JWT payload"),null)}catch(r){return zc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function dm(s){const e=Pu(s);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof cs&&lL(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function lL({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FB{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jo(this.lastLoginAt),this.creationTime=Jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Da(s){var B;const e=s.auth,t=await s.getIdToken(),n=await as(s,kl(e,{idToken:t}));U(n==null?void 0:n.users.length,e,"internal-error");const r=n.users[0];s._notifyReloadListener(r);const i=(B=r.providerUserInfo)!=null&&B.length?LI(r.providerUserInfo):[],o=hL(s.providerData,i),a=s.isAnonymous,l=!(s.email&&r.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new FB(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(s,h)}async function OI(s){const e=ne(s);await Da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hL(s,e){return[...s.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function LI(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BL(s,e){const t=await RI(s,{},async()=>{const n=Lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=s.config,o=await SI(s,r,"/v1/token",`key=${i}`),a=await s._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:n};return s.emulatorConfig&&Fr(s.emulatorConfig.host)&&(l.credentials="include"),AI.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function dL(s,e){return Fe(s,"POST","/v2/accounts:revokeToken",Le(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=dm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await BL(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new li;return n&&(U(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),r&&(U(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(s,e){U(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class dn{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new uL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new FB(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await as(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return NI(this,e)}reload(){return OI(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new dn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Da(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xe(this.auth.app))return Promise.reject(Bt(this.auth));const e=await this.getIdToken();return await as(this,oL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:B,emailVerified:p,isAnonymous:g,providerData:m,stsTokenManager:S}=t;U(B&&S,e,"internal-error");const x=li.fromJSON(this.name,S);U(typeof B=="string",e,"internal-error"),gs(n,e.name),gs(r,e.name),U(typeof p=="boolean",e,"internal-error"),U(typeof g=="boolean",e,"internal-error"),gs(i,e.name),gs(o,e.name),gs(a,e.name),gs(l,e.name),gs(u,e.name),gs(h,e.name);const j=new dn({uid:B,auth:e,email:r,emailVerified:p,displayName:n,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:x,createdAt:u,lastLoginAt:h});return m&&Array.isArray(m)&&(j.providerData=m.map(Y=>({...Y}))),l&&(j._redirectEventId=l),j}static async _fromIdTokenResponse(e,t,n=!1){const r=new li;r.updateFromServerResponse(t);const i=new dn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Da(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];U(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?LI(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new li;a.updateFromIdToken(n);const l=new dn({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new FB(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=new Map;function Kn(s){os(s instanceof Function,"Expected a class definition");let e=fm.get(s);return e?(os(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,fm.set(s,e),e)}/**
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
 */class FI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}FI.type="NONE";const kB=FI;/**
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
 */function Qc(s,e,t){return`firebase:${s}:${e}:${t}`}class wr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Qc(this.userKey,r.apiKey,i),this.fullPersistenceKey=Qc("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await kl(this.auth,{idToken:e}).catch(()=>{});return t?dn._fromGetAccountInfoResponse(this.auth,t,e):null}return dn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new wr(Kn(kB),e,n);const r=(await Promise.all(t.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let i=r[0]||Kn(kB);const o=Qc(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){let B;if(typeof h=="string"){const p=await kl(e,{idToken:h}).catch(()=>{});if(!p)break;B=await dn._fromGetAccountInfoResponse(e,p,h)}else B=dn._fromJSON(e,h);u!==i&&(a=B),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new wr(i,e,n):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new wr(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(VI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(UI(e))return"Blackberry";if(HI(e))return"Webos";if(xI(e))return"Safari";if((e.includes("chrome/")||MI(e))&&!e.includes("edge/"))return"Chrome";if(GI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function kI(s=It()){return/firefox\//i.test(s)}function xI(s=It()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function MI(s=It()){return/crios\//i.test(s)}function VI(s=It()){return/iemobile/i.test(s)}function GI(s=It()){return/android/i.test(s)}function UI(s=It()){return/blackberry/i.test(s)}function HI(s=It()){return/webos/i.test(s)}function If(s=It()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function fL(s=It()){var e;return If(s)&&!!((e=window.navigator)!=null&&e.standalone)}function pL(){return Mw()&&document.documentMode===10}function qI(s=It()){return If(s)||GI(s)||HI(s)||UI(s)||/windows phone/i.test(s)||VI(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(s,e=[]){let t;switch(s){case"Browser":t=pm(It());break;case"Worker":t=`${pm(It())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${kr}/${n}`}/**
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
 */class CL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function gL(s,e={}){return Fe(s,"GET","/v2/passwordPolicy",Le(s,e))}/**
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
 */const mL=6;class _L{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??mL,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cm(this),this.idTokenSubscription=new Cm(this),this.beforeStateQueue=new CL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Kn(t)),this._initializationPromise=this.queue(async()=>{var n,r,i;if(!this._deleted){try{this.persistenceManager=await wr.create(this,e)}catch(o){Kc(`Failed to initialize persistence: ${o}`),this.persistenceManager=await wr.create(this,[])}finally{(n=this._resolvePersistenceManagerAvailable)==null||n.call(this)}if(!this._deleted){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(o){Kc(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await kl(this,{idToken:e}),n=await dn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=n==null?void 0:n._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(n=l.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Da(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Z0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xe(this.app))return Promise.reject(Bt(this));const t=e?ne(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xe(this.app)?Promise.reject(Bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xe(this.app)?Promise.reject(Bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gL(this),t=new _L(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Na("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await dL(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Kn(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await wr.create(this,[Kn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}).catch(l=>{if(!o)if(typeof t!="function"&&t.error)t.error(l);else if(n)n(l);else throw l}),typeof t=="function"){const l=e.addObserver(t,n,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const n=(t==null?void 0:t.message)||String(t),r=Su(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw r.customData={originalError:t},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Kc(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function je(s){return ne(s)}class Cm{constructor(e){this.auth=e,this.observer=null,this.addObserver=zw(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yL(s){tc=s}function Df(s){return tc.loadJS(s)}function IL(){return tc.recaptchaV2Script}function DL(){return tc.recaptchaEnterpriseScript}function wL(){return tc.gapiScript}function JI(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL=500,vL=6e4,Fc=1e12;class AL{constructor(e){this.auth=e,this.counter=Fc,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new PL(e,this.auth.name,t||{})),this.counter++,n}reset(e){var n;const t=e||Fc;(n=this._widgets.get(t))==null||n.delete(),this._widgets.delete(t)}getResponse(e){var n;const t=e||Fc;return((n=this._widgets.get(t))==null?void 0:n.getResponse())||""}async execute(e){var n;const t=e||Fc;return(n=this._widgets.get(t))==null||n.execute(),""}}class RL{constructor(){this.enterprise=new SL}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class SL{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class PL{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;U(r,"argument-error",{appName:t}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=bL(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},vL)},TL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function bL(s){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<s;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const NL="recaptcha-enterprise",Wo="NO_RECAPTCHA",gm="onFirebaseAuthREInstanceReady";class Mn{constructor(e){this.type=NL,this.auth=je(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{bI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new PI(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;Bm(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Wo)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new RL().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(async a=>{if(!t&&Bm(window.grecaptcha)&&Mn.scriptInjectionDeferred)await Mn.scriptInjectionDeferred.promise,r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=DL();l.length!==0&&(l+=a+`&onload=${gm}`),Mn.scriptInjectionDeferred=new yn,window[gm]=()=>{var u;(u=Mn.scriptInjectionDeferred)==null||u.resolve()},Df(l).then(()=>{var u;return(u=Mn.scriptInjectionDeferred)==null?void 0:u.promise}).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}Mn.scriptInjectionDeferred=null;async function Co(s,e,t,n=!1,r=!1){const i=new Mn(s);let o;if(r)o=Wo;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return n?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ns(s,e,t,n,r){var i,o;if(r==="EMAIL_PASSWORD_PROVIDER")if((i=s._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Co(s,e,t,t==="getOobCode");return n(s,a)}else return n(s,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Co(s,e,t,t==="getOobCode");return n(s,l)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if((o=s._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Co(s,e,t);return n(s,a).catch(async l=>{var u;if(((u=s._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const h=await Co(s,e,t,!1,!0);return n(s,h)}return Promise.reject(l)})}else{const a=await Co(s,e,t,!1,!0);return n(s,a)}else return Promise.reject(r+" provider is not supported.")}async function WI(s){const e=je(s),t=await bI(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new PI(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new Mn(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(s,e){const t=Wl(s,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Ls(i,e??{}))return r;Jt(r,"already-initialized")}return t.initialize({options:e})}function OL(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Kn);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function wf(s,e,t){const n=je(s);U(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),i=zI(e),{host:o,port:a}=LL(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){U(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),U(Ls(u,n.config.emulator)&&Ls(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,Fr(o)?GB(`${i}//${o}${l}`):r||FL()}function zI(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function LL(s){const e=zI(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const i=r[1];return{host:i,port:mm(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:mm(o)}}}function mm(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function FL(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,t){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(s,e){return Fe(s,"POST","/v1/accounts:resetPassword",Le(s,e))}async function kL(s,e){return Fe(s,"POST","/v1/accounts:update",e)}async function xL(s,e){return Fe(s,"POST","/v1/accounts:signUp",e)}async function ML(s,e){return Fe(s,"POST","/v1/accounts:update",Le(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VL(s,e){return ls(s,"POST","/v1/accounts:signInWithPassword",Le(s,e))}async function bu(s,e){return Fe(s,"POST","/v1/accounts:sendOobCode",Le(s,e))}async function GL(s,e){return bu(s,e)}async function UL(s,e){return bu(s,e)}async function HL(s,e){return bu(s,e)}async function qL(s,e){return bu(s,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jL(s,e){return ls(s,"POST","/v1/accounts:signInWithEmailLink",Le(s,e))}async function JL(s,e){return ls(s,"POST","/v1/accounts:signInWithEmailLink",Le(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends qi{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ti(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ti(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ns(e,t,"signInWithPassword",VL,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return jL(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ns(e,n,"signUpPassword",xL,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return JL(e,{idToken:t,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(s,e){return ls(s,"POST","/v1/accounts:signInWithIdp",Le(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL="http://localhost";class Nn extends qi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const o=new Nn(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return es(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,es(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,es(e,t)}buildRequest(){const e={requestUri:WL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Lr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(s,e){return Fe(s,"POST","/v1/accounts:sendVerificationCode",Le(s,e))}async function KL(s,e){return ls(s,"POST","/v1/accounts:signInWithPhoneNumber",Le(s,e))}async function zL(s,e){const t=await ls(s,"POST","/v1/accounts:signInWithPhoneNumber",Le(s,e));if(t.temporaryProof)throw So(s,"account-exists-with-different-credential",t);return t}const QL={USER_NOT_FOUND:"user-not-found"};async function $L(s,e){const t={...e,operation:"REAUTH"};return ls(s,"POST","/v1/accounts:signInWithPhoneNumber",Le(s,t),QL)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends qi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Os({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Os({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return KL(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return zL(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return $L(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return!n&&!t&&!r&&!i?null:new Os({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YL(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XL(s){const e=Do(wo(s)).link,t=e?Do(wo(e)).deep_link_id:null,n=Do(wo(s)).deep_link_id;return(n?Do(wo(n)).link:null)||n||t||e||s}class ji{constructor(e){const t=Do(wo(e)),n=t.apiKey??null,r=t.oobCode??null,i=YL(t.mode??null);U(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=XL(e);try{return new ji(t)}catch{return null}}}function ZL(s){return ji.parseLink(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.providerId=On.PROVIDER_ID}static credential(e,t){return Ti._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ji.parseLink(t);return U(n,"argument-error"),Ti._fromEmailAndCode(e,n.code,n.tenantId)}}On.PROVIDER_ID="password";On.EMAIL_PASSWORD_SIGN_IN_METHOD="password";On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ji extends us{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ko extends Ji{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return U("providerId"in t&&"signInMethod"in t,"argument-error"),Nn._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return U(e.idToken||e.accessToken,"argument-error"),Nn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Ko.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ko.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:a}=e;if(!n&&!r&&!t&&!i||!a)return null;try{return new Ko(a)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Ji{constructor(){super("facebook.com")}static credential(e){return Nn._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return In.credential(t,n)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Ji{constructor(){super("github.com")}static credential(e){return Nn._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eF="http://localhost";class wa extends qi{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return es(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,es(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,es(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return!n||!r||!i||n!==r?null:new wa(n,i)}static _create(e,t){return new wa(e,t)}buildRequest(){return{requestUri:eF,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tF="saml.";class xl extends us{constructor(e){U(e.startsWith(tF),"argument-error"),super(e)}static credentialFromResult(e){return xl.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return xl.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=wa.fromJSON(e);return U(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return wa._create(n,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Ji{constructor(){super("twitter.com")}static credential(e,t){return Nn._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Un.credential(t,n)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(s,e){return ls(s,"POST","/v1/accounts:signUp",Le(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await dn._fromIdTokenResponse(e,n,r),o=Em(n);return new an({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Em(n);return new an({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Em(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(s){var r;if(xe(s.app))return Promise.reject(Bt(s));const e=je(s);if(await e._initializationPromise,(r=e.currentUser)!=null&&r.isAnonymous)return new an({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await $I(e,{returnSecureToken:!0}),n=await an._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(n.user),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends cs{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ml.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ml(e,t,n,r)}}function XI(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ml._fromErrorAndOperation(s,i,e,n):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(s){return new Set(s.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function nF(s,e){const t=ne(s);await Nu(!0,t,e);const{providerUserInfo:n}=await aL(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),r=ZI(n||[]);return t.providerData=t.providerData.filter(i=>r.has(i.providerId)),r.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Tf(s,e,t=!1){const n=await as(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return an._forOperation(s,"link",n)}async function Nu(s,e,t){await Da(e);const n=ZI(e.providerData),r=s===!1?"provider-already-linked":"no-such-provider";U(n.has(t)===s,e.auth,r)}/**
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
 */async function eD(s,e,t=!1){const{auth:n}=s;if(xe(n.app))return Promise.reject(Bt(n));const r="reauthenticate";try{const i=await as(s,XI(n,r,e,s),t);U(i.idToken,n,"internal-error");const o=Pu(i.idToken);U(o,n,"internal-error");const{sub:a}=o;return U(s.uid===a,n,"user-mismatch"),an._forOperation(s,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(s,e,t=!1){if(xe(s.app))return Promise.reject(Bt(s));const n="signIn",r=await XI(s,n,e),i=await an._fromIdTokenResponse(s,n,r);return t||await s._updateCurrentUser(i.user),i}async function Ou(s,e){return tD(je(s),e)}async function vf(s,e){const t=ne(s);return await Nu(!1,t,e.providerId),Tf(t,e)}async function Af(s,e){return eD(ne(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sF(s,e){return ls(s,"POST","/v1/accounts:signInWithCustomToken",Le(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rF(s,e){if(xe(s.app))return Promise.reject(Bt(s));const t=je(s),n=await sF(t,{token:e,returnSecureToken:!0}),r=await an._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Rf._fromServerResponse(e,t):"totpInfo"in t?Sf._fromServerResponse(e,t):Jt(e,"internal-error")}}class Rf extends nc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Rf(t)}}class Sf extends nc{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Sf(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(s,e,t){var n;U(((n=t.url)==null?void 0:n.length)>0,s,"invalid-continue-uri"),U(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,s,"invalid-dynamic-link-domain"),U(typeof t.linkDomain>"u"||t.linkDomain.length>0,s,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(U(t.iOS.bundleId.length>0,s,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(U(t.android.packageName.length>0,s,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pf(s){const e=je(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nD(s,e,t){const n=je(s),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Lu(n,r,t),await Ns(n,r,"getOobCode",UL,"EMAIL_PASSWORD_PROVIDER")}async function iF(s,e,t){await QI(ne(s),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Pf(s),n})}async function oF(s,e){await ML(ne(s),{oobCode:e})}async function sD(s,e){const t=ne(s),n=await QI(t,{oobCode:e}),r=n.requestType;switch(U(r,t,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":U(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":U(n.mfaInfo,t,"internal-error");default:U(n.email,t,"internal-error")}let i=null;return n.mfaInfo&&(i=nc._fromServerResponse(je(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:i},operation:r}}async function aF(s,e){const{data:t}=await sD(ne(s),e);return t.email}async function cF(s,e,t){if(xe(s.app))return Promise.reject(Bt(s));const n=je(s),o=await Ns(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$I,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Pf(s),l}),a=await an._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(a.user),a}function rD(s,e,t){return xe(s.app)?Promise.reject(Bt(s)):Ou(ne(s),On.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Pf(s),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lF(s,e,t){const n=je(s),r={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(o,a){U(a.handleCodeInApp,n,"argument-error"),a&&Lu(n,o,a)}i(r,t),await Ns(n,r,"getOobCode",HL,"EMAIL_PASSWORD_PROVIDER")}function uF(s,e){const t=ji.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function hF(s,e,t){if(xe(s.app))return Promise.reject(Bt(s));const n=ne(s),r=On.credentialWithLink(e,t||Ia());return U(r._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),Ou(n,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BF(s,e){return Fe(s,"POST","/v1/accounts:createAuthUri",Le(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dF(s,e){const t=Ef()?Ia():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:r}=await BF(ne(s),n);return r||[]}async function fF(s,e){const t=ne(s),r={requestType:"VERIFY_EMAIL",idToken:await s.getIdToken()};e&&Lu(t.auth,r,e);const{email:i}=await GL(t.auth,r);i!==s.email&&await s.reload()}async function pF(s,e,t){const n=ne(s),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await s.getIdToken(),newEmail:e};t&&Lu(n.auth,i,t);const{email:o}=await qL(n.auth,i);o!==s.email&&await s.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CF(s,e){return Fe(s,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gF(s,e){const{displayName:t,photoURL:n}=e;if(t===void 0&&n===void 0)return;const r=ne(s),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await as(r,CF(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function mF(s,e){const t=ne(s);return xe(t.auth.app)?Promise.reject(Bt(t.auth)):oD(t,e,null)}function iD(s,e){return oD(ne(s),null,e)}async function oD(s,e,t){const{auth:n}=s,i={idToken:await s.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const o=await as(s,kL(n,i));await s._updateTokensIfNecessary(o,!0)}/**
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
 */function _F(s){var r,i;if(!s)return null;const{providerId:e}=s,t=s.rawUserInfo?JSON.parse(s.rawUserInfo):{},n=s.isNewUser||s.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(s!=null&&s.idToken)){const o=(i=(r=Pu(s.idToken))==null?void 0:r.firebase)==null?void 0:i.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ui(n,a)}}if(!e)return null;switch(e){case"facebook.com":return new EF(n,t);case"github.com":return new yF(n,t);case"google.com":return new IF(n,t);case"twitter.com":return new DF(n,t,s.screenName||null);case"custom":case"anonymous":return new ui(n,null);default:return new ui(n,e,t)}}class ui{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class aD extends ui{constructor(e,t,n,r){super(e,t,n),this.username=r}}class EF extends ui{constructor(e,t){super(e,"facebook.com",t)}}class yF extends aD{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class IF extends ui{constructor(e,t){super(e,"google.com",t)}}class DF extends aD{constructor(e,t,n){super(e,"twitter.com",t,n)}}function wF(s){const{user:e,_tokenResponse:t}=s;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:_F(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TF(s,e){return ne(s).setPersistence(e)}function vF(s){return WI(s)}async function AF(s,e){return je(s).validatePassword(e)}function cD(s,e,t,n){return ne(s).onIdTokenChanged(e,t,n)}function lD(s,e,t){return ne(s).beforeAuthStateChanged(e,t)}function uD(s,e,t,n){return ne(s).onAuthStateChanged(e,t,n)}function RF(s){ne(s).useDeviceLanguage()}function SF(s,e){return ne(s).updateCurrentUser(e)}function hD(s){return ne(s).signOut()}function PF(s,e){return je(s).revokeAccessToken(e)}async function BD(s){return ne(s).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bf{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=je(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(a=>nc._fromServerResponse(n,a));U(r.mfaPendingCredential,n,"internal-error");const o=mr._fromMfaPendingCredential(r.mfaPendingCredential);return new bf(o,i,async a=>{const l=await a._process(n,o);delete r.mfaInfo,delete r.mfaPendingCredential;const u={...r,idToken:l.idToken,refreshToken:l.refreshToken};switch(t.operationType){case"signIn":const h=await an._fromIdTokenResponse(n,t.operationType,u);return await n._updateCurrentUser(h.user),h;case"reauthenticate":return U(t.user,n,"internal-error"),an._forOperation(t.user,t.operationType,u);default:Jt(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function bF(s,e){var r;const t=ne(s),n=e;return U(e.customData.operationType,t,"argument-error"),U((r=n.customData._serverResponse)==null?void 0:r.mfaPendingCredential,t,"argument-error"),bf._fromError(t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(s,e){return Fe(s,"POST","/v2/accounts/mfaEnrollment:start",Le(s,e))}function NF(s,e){return Fe(s,"POST","/v2/accounts/mfaEnrollment:finalize",Le(s,e))}function OF(s,e){return Fe(s,"POST","/v2/accounts/mfaEnrollment:start",Le(s,e))}function LF(s,e){return Fe(s,"POST","/v2/accounts/mfaEnrollment:finalize",Le(s,e))}function FF(s,e){return Fe(s,"POST","/v2/accounts/mfaEnrollment:withdraw",Le(s,e))}class Nf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>nc._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new Nf(e)}async getSession(){return mr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,r=await this.getSession(),i=await as(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const r=await as(this.user,FF(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==t),await this.user._updateTokensIfNecessary(r),await this.user.reload()}catch(r){throw r}}}const kh=new WeakMap;function kF(s){const e=ne(s);return kh.has(e)||kh.set(e,Nf._fromUser(e)),kh.get(e)}const Vl="__sak";/**
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
 */class dD{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vl,"1"),this.storage.removeItem(Vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xF=1e3,MF=10;class fD extends dD{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);pL()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,MF):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},xF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fD.type="LOCAL";const pD=fD;/**
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
 */const VF=1e3;function xh(s){var n;const e=s.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return((n=document.cookie.match(t))==null?void 0:n[1])??null}function Mh(s){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${s.split(":")[3]}`}class CD{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=Mh(e);if(window.cookieStore){const n=await window.cookieStore.get(t);return n==null?void 0:n.value}return xh(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const n=Mh(e);document.cookie=`${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=Mh(e);if(window.cookieStore){const a=(u=>{const h=u.changed.find(p=>p.name===n);h&&t(h.value),u.deleted.find(p=>p.name===n)&&t(null)}),l=()=>window.cookieStore.removeEventListener("change",a);return this.listenerUnsubscribes.set(t,l),window.cookieStore.addEventListener("change",a)}let r=xh(n);const i=setInterval(()=>{const a=xh(n);a!==r&&(t(a),r=a)},VF),o=()=>clearInterval(i);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}CD.type="COOKIE";const GF=CD;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD extends dD{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gD.type="SESSION";const Of=gD;/**
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
 */function UF(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Fu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new Fu(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),l=await UF(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
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
 */class HF{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=ku("",20);r.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(B){const p=B;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function qF(s){Ye().location.href=s}/**
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
 */function Lf(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function jF(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JF(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function WF(){return Lf()?self:null}/**
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
 */const mD="firebaseLocalStorageDb",KF=1,Gl="firebaseLocalStorage",_D="fbase_key";class sc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xu(s,e){return s.transaction([Gl],e?"readwrite":"readonly").objectStore(Gl)}function zF(){const s=indexedDB.deleteDatabase(mD);return new sc(s).toPromise()}function ED(){const s=indexedDB.open(mD,KF);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(Gl,{keyPath:_D})}catch(r){t(r)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(Gl)?e(n):(n.close(),await zF(),e(await ED()))})})}async function Im(s,e,t){const n=xu(s,!0).put({[_D]:e,value:t});return new sc(n).toPromise()}async function QF(s,e){const t=xu(s,!1).get(e),n=await new sc(t).toPromise();return n===void 0?null:n.value}function Dm(s,e){const t=xu(s,!0).delete(e);return new sc(t).toPromise()}const $F=800,YF=3;class yD{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=ED(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>YF)throw n;if(this.dbPromise){const r=this.dbPromise;this.dbPromise=null;try{(await r).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Lf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fu._getInstance(WF()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await jF(),!this.activeServiceWorker)return;this.sender=new HF(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JF()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Im(e,Vl,"1"),await Dm(e,Vl)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Im(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>QF(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const i=xu(r,!1).getAll();return new sc(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}catch(e){return this.isClosing||Kc(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$F)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}yD.type="LOCAL";const ID=yD;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(s,e){return Fe(s,"POST","/v2/accounts/mfaSignIn:start",Le(s,e))}function XF(s,e){return Fe(s,"POST","/v2/accounts/mfaSignIn:finalize",Le(s,e))}function ZF(s,e){return Fe(s,"POST","/v2/accounts/mfaSignIn:finalize",Le(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=JI("rcb"),ek=new ec(3e4,6e4);class tk{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Ye().grecaptcha)!=null&&e.render)}load(e,t=""){return U(nk(t),e,"argument-error"),this.shouldResolveImmediately(t)&&hm(Ye().grecaptcha)?Promise.resolve(Ye().grecaptcha):new Promise((n,r)=>{const i=Ye().setTimeout(()=>{r(Ot(e,"network-request-failed"))},ek.get());Ye()[Vh]=()=>{Ye().clearTimeout(i),delete Ye()[Vh];const a=Ye().grecaptcha;if(!a||!hm(a)){r(Ot(e,"internal-error"));return}const l=a.render;a.render=(u,h)=>{const B=l(u,h);return this.counter++,B},this.hostLanguage=t,n(a)};const o=`${IL()}?${Lr({onload:Vh,render:"explicit",hl:t})}`;Df(o).catch(()=>{clearTimeout(i),r(Ot(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Ye().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function nk(s){return s.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(s)}class sk{async load(e){return new AL(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="recaptcha",rk={theme:"light",type:"image"};class ik{constructor(e,t,n={...rk}){this.parameters=n,this.type=zo,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=je(e),this.isInvisible=this.parameters.size==="invisible",U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof t=="string"?document.getElementById(t):t;U(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new sk:new tk,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(r=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),r(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){U(!this.parameters.sitekey,this.auth,"argument-error"),U(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=Ye()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){U(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){U(Ef()&&!Lf(),this.auth,"internal-error"),await ok(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await iL(this.auth);U(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return U(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function ok(){let s=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}s=()=>e(),window.addEventListener("load",s)}).catch(e=>{throw s&&window.removeEventListener("load",s),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Os._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function ak(s,e,t){if(xe(s.app))return Promise.reject(Bt(s));const n=je(s),r=await Mu(n,e,ne(t));return new Ff(r,i=>Ou(n,i))}async function ck(s,e,t){const n=ne(s);await Nu(!1,n,"phone");const r=await Mu(n.auth,e,ne(t));return new Ff(r,i=>vf(n,i))}async function lk(s,e,t){const n=ne(s);if(xe(n.auth.app))return Promise.reject(Bt(n.auth));const r=await Mu(n.auth,e,ne(t));return new Ff(r,i=>Af(n,i))}async function Mu(s,e,t){var n;if(!s._getRecaptchaConfig())try{await WI(s)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const i=r.session;if("phoneNumber"in r){U(i.type==="enroll",s,"internal-error");const o={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Ns(s,o,"mfaSmsEnrollment",async(h,B)=>{if(B.phoneEnrollmentInfo.captchaResponse===Wo){U((t==null?void 0:t.type)===zo,h,"argument-error");const p=await Gh(h,B,t);return ym(h,p)}return ym(h,B)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneSessionInfo.sessionInfo}else{U(i.type==="signin",s,"internal-error");const o=((n=r.multiFactorHint)==null?void 0:n.uid)||r.multiFactorUid;U(o,s,"missing-multi-factor-info");const a={mfaPendingCredential:i.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Ns(s,a,"mfaSmsSignIn",async(B,p)=>{if(p.phoneSignInInfo.captchaResponse===Wo){U((t==null?void 0:t.type)===zo,B,"argument-error");const g=await Gh(B,p,t);return wm(B,g)}return wm(B,p)},"PHONE_PROVIDER").catch(B=>Promise.reject(B))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Ns(s,i,"sendVerificationCode",async(u,h)=>{if(h.captchaResponse===Wo){U((t==null?void 0:t.type)===zo,u,"argument-error");const B=await Gh(u,h,t);return _m(u,B)}return _m(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{t==null||t._reset()}}async function uk(s,e){const t=ne(s);if(xe(t.auth.app))return Promise.reject(Bt(t.auth));await Tf(t,e)}async function Gh(s,e,t){U(t.type===zo,s,"argument-error");const n=await t.verify();U(typeof n=="string",s,"argument-error");const r={...e};if("phoneEnrollmentInfo"in r){const i=r.phoneEnrollmentInfo.phoneNumber,o=r.phoneEnrollmentInfo.captchaResponse,a=r.phoneEnrollmentInfo.clientType,l=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:n,captchaResponse:o,clientType:a,recaptchaVersion:l}}),r}else if("phoneSignInInfo"in r){const i=r.phoneSignInInfo.captchaResponse,o=r.phoneSignInInfo.clientType,a=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:i,clientType:o,recaptchaVersion:a}}),r}else return Object.assign(r,{recaptchaToken:n}),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.providerId=Tr.PROVIDER_ID,this.auth=je(e)}verifyPhoneNumber(e,t){return Mu(this.auth,e,ne(t))}static credential(e,t){return Os._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Tr.credentialFromTaggedObject(t)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Os._fromTokenResponse(t,n):null}}Tr.PROVIDER_ID="phone";Tr.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Hr(s,e){return e?Kn(e):(U(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class kf extends qi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,t){return es(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hk(s){return tD(s.auth,new kf(s),s.bypassAuthState)}function Bk(s){const{auth:e,user:t}=s;return U(t,e,"internal-error"),eD(t,new kf(s),s.bypassAuthState)}async function dk(s){const{auth:e,user:t}=s;return U(t,e,"internal-error"),Tf(t,new kf(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hk;case"linkViaPopup":case"linkViaRedirect":return dk;case"reauthViaPopup":case"reauthViaRedirect":return Bk;default:Jt(this.auth,"internal-error")}}resolve(e){os(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){os(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=new ec(2e3,1e4);async function pk(s,e,t){if(xe(s.app))return Promise.reject(Ot(s,"operation-not-supported-in-this-environment"));const n=je(s);Hi(s,e,us);const r=Hr(n,t);return new zn(n,"signInViaPopup",e,r).executeNotNull()}async function wD(s,e,t){const n=ne(s);if(xe(n.auth.app))return Promise.reject(Ot(n.auth,"operation-not-supported-in-this-environment"));Hi(n.auth,e,us);const r=Hr(n.auth,t);return new zn(n.auth,"reauthViaPopup",e,r,n).executeNotNull()}async function Ck(s,e,t){const n=ne(s);Hi(n.auth,e,us);const r=Hr(n.auth,t);return new zn(n.auth,"linkViaPopup",e,r,n).executeNotNull()}class zn extends DD{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){os(this.filter.length===1,"Popup operations only handle one event");const e=ku();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fk.get())};e()}}zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk="pendingRedirect",$c=new Map;class mk extends DD{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=$c.get(this.auth._key());if(!e){try{const n=await _k(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}$c.set(this.auth._key(),e)}return this.bypassAuthState||$c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _k(s,e){const t=vD(e),n=TD(s);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}async function xf(s,e){return TD(s)._set(vD(e),"true")}function Ek(s,e){$c.set(s._key(),e)}function TD(s){return Kn(s._redirectPersistence)}function vD(s){return Qc(gk,s.config.apiKey,s.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(s,e,t){return Ik(s,e,t)}async function Ik(s,e,t){if(xe(s.app))return Promise.reject(Bt(s));const n=je(s);Hi(s,e,us),await n._initializationPromise;const r=Hr(n,t);return await xf(r,n),r._openRedirect(n,e,"signInViaRedirect")}function Dk(s,e,t){return wk(s,e,t)}async function wk(s,e,t){const n=ne(s);if(Hi(n.auth,e,us),xe(n.auth.app))return Promise.reject(Bt(n.auth));await n.auth._initializationPromise;const r=Hr(n.auth,t);await xf(r,n.auth);const i=await RD(n);return r._openRedirect(n.auth,e,"reauthViaRedirect",i)}function Tk(s,e,t){return vk(s,e,t)}async function vk(s,e,t){const n=ne(s);Hi(n.auth,e,us),await n.auth._initializationPromise;const r=Hr(n.auth,t);await Nu(!1,n,e.providerId),await xf(r,n.auth);const i=await RD(n);return r._openRedirect(n.auth,e,"linkViaRedirect",i)}async function Ak(s,e){return await je(s)._initializationPromise,AD(s,e,!1)}async function AD(s,e,t=!1){if(xe(s.app))return Promise.reject(Bt(s));const n=je(s),r=Hr(n,e),o=await new mk(n,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}async function RD(s){const e=ku(`${s.uid}:::`);return s._redirectEventId=e,await s.auth._setRedirectUser(s),await s.auth._persistUserIfCurrent(s),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=600*1e3;class Sk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!SD(e)){const r=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ot(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tm(e))}saveEventToCache(e){this.cachedEventUids.add(Tm(e)),this.lastProcessedEventTime=Date.now()}}function Tm(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function SD({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pk(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return SD(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(s,e={}){return Fe(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ok=/^https?/;async function Lk(s){if(s.config.emulator)return;const{authorizedDomains:e}=await bk(s);for(const t of e)try{if(Fk(t))return}catch{}Jt(s,"unauthorized-domain")}function Fk(s){const e=Ia(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const o=new URL(s);return o.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Ok.test(t))return!1;if(Nk.test(s))return n===s;const r=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
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
 */const kk=new ec(3e4,6e4);function vm(){const s=Ye().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function xk(s){return new Promise((e,t)=>{var r,i,o;function n(){vm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vm(),t(Ot(s,"network-request-failed"))},timeout:kk.get()})}if((i=(r=Ye().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Ye().gapi)!=null&&o.load)n();else{const a=JI("iframefcb");return Ye()[a]=()=>{gapi.load?n():t(Ot(s,"network-request-failed"))},Df(`${wL()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Yc=null,e})}let Yc=null;function Mk(s){return Yc=Yc||xk(s),Yc}/**
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
 */const Vk=new ec(5e3,15e3),Gk="__/auth/iframe",Uk="emulator/auth/iframe",Hk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jk(s){const e=s.config;U(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?yf(e,Uk):`https://${s.config.authDomain}/${Gk}`,n={apiKey:e.apiKey,appName:s.name,v:kr},r=qk.get(s.config.apiHost);r&&(n.eid=r);const i=s._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Lr(n).slice(1)}`}async function Jk(s){const e=await Mk(s),t=Ye().gapi;return U(t,s,"internal-error"),e.open({where:document.body,url:jk(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hk,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});const o=Ot(s,"network-request-failed"),a=Ye().setTimeout(()=>{i(o)},Vk.get());function l(){Ye().clearTimeout(a),r(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Wk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kk=500,zk=600,Qk="_blank",$k="http://localhost";class Am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Yk(s,e,t,n=Kk,r=zk){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l={...Wk,width:n.toString(),height:r.toString(),top:i,left:o},u=It().toLowerCase();t&&(a=MI(u)?Qk:t),kI(u)&&(e=e||$k,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,m])=>`${p}${g}=${m},`,"");if(fL(u)&&a!=="_self")return Xk(e||"",a),new Am(null);const B=window.open(e||"",a,h);U(B,s,"popup-blocked");try{B.focus()}catch{}return new Am(B)}function Xk(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const Zk="__/auth/handler",ex="emulator/auth/handler",tx=encodeURIComponent("fac");async function Rm(s,e,t,n,r,i){U(s.config.authDomain,s,"auth-domain-config-required"),U(s.config.apiKey,s,"invalid-api-key");const o={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:kr,eventId:r};if(e instanceof us){e.setDefaultLanguage(s.languageCode),o.providerId=e.providerId||"",tl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,B]of Object.entries({}))o[h]=B}if(e instanceof Ji){const h=e.getScopes().filter(B=>B!=="");h.length>0&&(o.scopes=h.join(","))}s.tenantId&&(o.tid=s.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await s._getAppCheckToken(),u=l?`#${tx}=${encodeURIComponent(l)}`:"";return`${nx(s)}?${Lr(a).slice(1)}${u}`}function nx({config:s}){return s.emulator?yf(s,ex):`https://${s.authDomain}/${Zk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="webStorageSupport";class sx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Of,this._completeRedirectFn=AD,this._overrideRedirectResult=Ek}async _openPopup(e,t,n,r){var o;os((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Rm(e,t,n,Ia(),r);return Yk(e,i,ku())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Rm(e,t,n,Ia(),r);return qF(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(os(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Jk(e),n=new Sk(e);return t.register("authEvent",r=>(U(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Uh,{type:Uh},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[Uh];i!==void 0&&t(!!i),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Lk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qI()||xI()||If()}}const PD=sx;class bD{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Tn("unexpected MultiFactorSessionType")}}}class Mf extends bD{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Mf(e)}_finalizeEnroll(e,t,n){return NF(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return XF(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ND{constructor(){}static assertion(e){return Mf._fromCredential(e)}}ND.FACTOR_ID="phone";class OD{static assertionForEnrollment(e,t){return Ta._fromSecret(e,t)}static assertionForSignIn(e,t){return Ta._fromEnrollmentId(e,t)}static async generateSecret(e){var r;const t=e;U(typeof((r=t.user)==null?void 0:r.auth)<"u","internal-error");const n=await OF(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Vu._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}}OD.FACTOR_ID="totp";class Ta extends bD{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Ta(t,void 0,e)}static _fromEnrollmentId(e,t){return new Ta(t,e)}async _finalizeEnroll(e,t,n){return U(typeof this.secret<"u",e,"argument-error"),LF(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){U(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const n={verificationCode:this.otp};return ZF(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Vu{constructor(e,t,n,r,i,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Vu(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(kc(e)||kc(t))&&(n=!0),n&&(kc(e)&&(e=((r=this.auth.currentUser)==null?void 0:r.email)||"unknownuser"),kc(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function kc(s){return typeof s>"u"||(s==null?void 0:s.length)===0}var Sm="@firebase/auth",Pm="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ox(s){vr(new Fs("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:a,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jI(s)},u=new EL(n,r,i,l);return OL(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),vr(new Fs("auth-internal",e=>{const t=je(e.getProvider("auth").getImmediate());return(n=>new rx(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(Sm,Pm,ix(s)),vn(Sm,Pm,"esm2020")}/**
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
 */const ax=300,cx=Jm("authIdTokenMaxAge")||ax;let bm=null;const lx=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>cx)return;const r=t==null?void 0:t.token;bm!==r&&(bm=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function LD(s=HB()){const e=Wl(s,"auth");if(e.isInitialized())return e.getImmediate();const t=KI(s,{popupRedirectResolver:PD,persistence:[ID,pD,Of]}),n=Jm("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=lx(i.toString());lD(t,o,()=>o(t.currentUser)),cD(t,a=>o(a))}}const r=Hm("auth");return r&&wf(t,`http://${r}`),t}function ux(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}yL({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=r=>{const i=Ot("internal-error");i.customData=r,t(i)},n.type="text/javascript",n.charset="UTF-8",ux().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ox("Browser");const FD=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:z0,ActionCodeURL:ji,AuthCredential:qi,AuthErrorCodes:Y0,EmailAuthCredential:Ti,EmailAuthProvider:On,FacebookAuthProvider:Vn,FactorId:j0,GithubAuthProvider:Gn,GoogleAuthProvider:In,OAuthCredential:Nn,OAuthProvider:Ko,OperationType:K0,PhoneAuthCredential:Os,PhoneAuthProvider:Tr,PhoneMultiFactorGenerator:ND,ProviderId:J0,RecaptchaVerifier:ik,SAMLAuthProvider:xl,SignInMethod:W0,TotpMultiFactorGenerator:OD,TotpSecret:Vu,TwitterAuthProvider:Un,applyActionCode:oF,beforeAuthStateChanged:lD,browserCookiePersistence:GF,browserLocalPersistence:pD,browserPopupRedirectResolver:PD,browserSessionPersistence:Of,checkActionCode:sD,confirmPasswordReset:iF,connectAuthEmulator:wf,createUserWithEmailAndPassword:cF,debugErrorMap:$0,deleteUser:BD,fetchSignInMethodsForEmail:dF,getAdditionalUserInfo:wF,getAuth:LD,getIdToken:cL,getIdTokenResult:NI,getMultiFactorResolver:bF,getRedirectResult:Ak,inMemoryPersistence:kB,indexedDBLocalPersistence:ID,initializeAuth:KI,initializeRecaptchaConfig:vF,isSignInWithEmailLink:uF,linkWithCredential:vf,linkWithPhoneNumber:ck,linkWithPopup:Ck,linkWithRedirect:Tk,multiFactor:kF,onAuthStateChanged:uD,onIdTokenChanged:cD,parseActionCodeURL:ZL,prodErrorMap:TI,reauthenticateWithCredential:Af,reauthenticateWithPhoneNumber:lk,reauthenticateWithPopup:wD,reauthenticateWithRedirect:Dk,reload:OI,revokeAccessToken:PF,sendEmailVerification:fF,sendPasswordResetEmail:nD,sendSignInLinkToEmail:lF,setPersistence:TF,signInAnonymously:YI,signInWithCredential:Ou,signInWithCustomToken:rF,signInWithEmailAndPassword:rD,signInWithEmailLink:hF,signInWithPhoneNumber:ak,signInWithPopup:pk,signInWithRedirect:yk,signOut:hD,unlink:nF,updateCurrentUser:SF,updateEmail:mF,updatePassword:iD,updatePhoneNumber:uk,updateProfile:gF,useDeviceLanguage:RF,validatePassword:AF,verifyBeforeUpdateEmail:pF,verifyPasswordResetCode:aF},Symbol.toStringTag,{value:"Module"})),hx=typeof window<"u",Bx={apiKey:"AIzaSyAbHjX0oyy9aCU8WDn9x3i-_T7hRMCSfRA",authDomain:"stay-on-the-board.firebaseapp.com",projectId:"stay-on-the-board",storageBucket:"stay-on-the-board.firebasestorage.app",messagingSenderId:"939636937442",appId:"1:939636937442:web:714e1a4566703fed8604bb",measurementId:"G-CPGNM62XZW",databaseURL:"https://stay-on-the-board-default-rtdb.europe-west1.firebasedatabase.app"},Vf=hx&&window.__playwright_test__;let go=null,mo=null,_o=null,Eo=null;function Gf(){if(go)return go;const s=$T();return s.length>0?go=s[0]:go=Ym(Bx),go}function rc(){if(mo)return mo;const s=Gf();return mo=cy(s),Vf&&(te.init("[FirebaseService] Connecting to Firestore Emulator (127.0.0.1:8080)"),nd(mo,"127.0.0.1",8080)),mo}function dx(){if(_o)return _o;const s=Gf();return G0(),_o=U0(s),Vf&&(te.init("[FirebaseService] Connecting to Realtime DB Emulator (127.0.0.1:9000)"),DI(_o,"127.0.0.1",9e3)),_o}function fx(){if(Eo)return Eo;const s=Gf();return Eo=LD(s),Vf&&(te.init("[FirebaseService] Connecting to Auth Emulator (127.0.0.1:9099)"),wf(Eo,"http://127.0.0.1:9099",{disableWarnings:!0})),Eo}const si={REWARDS:"rewards",ROOMS:"rooms",GENERAL:"general"};class px{ref(e){return yt(rc(),si.REWARDS,e)}async merge(e,t){var n;try{const r=await Dr(this.ref(e));if(!r.exists())return await Jn(this.ref(e),{unlockedRewards:t},{merge:!0}),t;const i=((n=r.data())==null?void 0:n.unlockedRewards)??{},o={...t,...i};return await Jn(this.ref(e),{unlockedRewards:o},{merge:!0}),o}catch(r){return te.error("[RewardsCloudService] Не вдалося злити нагороди",r),null}}}const Cx=new px,Hh="rewards",gx={unlockedRewards:{},hasUnseenRewards:!1};var va;class mx{constructor(){ir(this,va,vi(Hl(gx)));V(this,"subscribers",new Set);this.loadLocal()}get _state(){return Ai(Kt(this,va))}set _state(e){Ri(Kt(this,va),e,!0)}get state(){return this._state}init(){this.loadLocal()}loadLocal(){if(!(typeof window>"u")){try{const e=ke.getJSON(Hh);if(e){const t=Tw.safeParse(e);t.success?(this._state=t.data,te.info("[RewardsStore] Loaded validated state from storageService")):(te.error("[RewardsStore] Invalid state in storageService, resetting to defaults.",t.error.format()),this.reset())}}catch(e){te.error("[RewardsStore] Failed to load from storageService",e)}this.notifySubscribers()}}saveLocal(){typeof window<"u"&&ke.setJSON(Hh,this._state)}unlock(e){this._state.unlockedRewards[e]||(this._state.unlockedRewards[e]={id:e,unlockedAt:Date.now()},this._state.hasUnseenRewards=!0,this.saveLocal(),this.notifySubscribers(),te.info(`[RewardsStore] Unlocked reward: ${e}`))}markAllAsSeen(){this._state.hasUnseenRewards=!1,this.saveLocal(),this.notifySubscribers()}async syncWithCloud(e){const t=await Cx.merge(e,this._state.unlockedRewards);t&&(this._state.unlockedRewards=t,this.saveLocal()),this.notifySubscribers()}reset(){this._state={unlockedRewards:{},hasUnseenRewards:!1},typeof window<"u"&&ke.remove(Hh),this.notifySubscribers()}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}va=new WeakMap;const kD=new mx,dt=[];for(let s=0;s<256;++s)dt.push((s+256).toString(16).slice(1));function _x(s,e=0){return(dt[s[e+0]]+dt[s[e+1]]+dt[s[e+2]]+dt[s[e+3]]+"-"+dt[s[e+4]]+dt[s[e+5]]+"-"+dt[s[e+6]]+dt[s[e+7]]+"-"+dt[s[e+8]]+dt[s[e+9]]+"-"+dt[s[e+10]]+dt[s[e+11]]+dt[s[e+12]]+dt[s[e+13]]+dt[s[e+14]]+dt[s[e+15]]).toLowerCase()}let qh;const Ex=new Uint8Array(16);function yx(){if(!qh){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");qh=crypto.getRandomValues.bind(crypto)}return qh(Ex)}const Ix=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Nm={randomUUID:Ix};function Dx(s,e,t){var r;s=s||{};const n=s.random??((r=s.rng)==null?void 0:r.call(s))??yx();if(n.length<16)throw new Error("Random bytes length must be >= 16");return n[6]=n[6]&15|64,n[8]=n[8]&63|128,_x(n)}function wx(s,e,t){return Nm.randomUUID&&!s?Nm.randomUUID():Dx(s)}const Tx=4;var Aa;class vx{constructor(){ir(this,Aa,vi(Hl([])));V(this,"timers",new Map);V(this,"subscribers",new Set)}get _state(){return Ai(Kt(this,Aa))}set _state(e){Ri(Kt(this,Aa),e,!0)}get state(){return this._state}set state(e){this._state=e,this.notifySubscribers()}_arm(e){const t=Math.max(0,e.duration-e.elapsed);e.startTime=Date.now(),e.timerId=setTimeout(()=>this.remove(e.id),t)}add(e){const t=wx(),n=e.duration??4e3,r={...e,id:t,duration:n};if(this._state=[...this._state,r],this._state.length>Tx&&this.remove(this._state[0].id),this.notifySubscribers(),n>0){const i={id:t,timerId:null,startTime:0,elapsed:0,duration:n,holds:0};this.timers.set(t,i),this._arm(i)}return t}pause(e){const t=this.timers.get(e);t&&(t.holds+=1,!(t.holds>1||t.timerId===null)&&(clearTimeout(t.timerId),t.elapsed=Math.min(t.elapsed+(Date.now()-t.startTime),t.duration),t.timerId=null))}resume(e){const t=this.timers.get(e);t&&(t.holds>0&&(t.holds-=1),!(t.holds>0||t.timerId!==null)&&this._arm(t))}remove(e){const t=this.timers.get(e);t!=null&&t.timerId&&clearTimeout(t.timerId),this.timers.delete(e),this._state=this._state.filter(n=>n.id!==e),this.notifySubscribers()}clear(){for(const e of this.timers.values())e.timerId&&clearTimeout(e.timerId);this.timers.clear(),this._state=[],this.notifySubscribers()}success(e,t=4e3,n){return this.add({type:"success",messageRaw:e,duration:t,anchor:n})}info(e,t=3e3,n){return this.add({type:"info",messageRaw:e,duration:t,anchor:n})}warning(e,t=5e3,n){return this.add({type:"warning",messageRaw:e,duration:t,anchor:n})}error(e,t=7e3,n){return this.add({type:"error",messageRaw:e,duration:t,anchor:n})}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}Aa=new WeakMap;const Ax=new vx;var Ra;class Rx{constructor(){ir(this,Ra,vi(Hl({current:null,minRequired:null,updateAvailable:!1})));V(this,"subscribers",new Set)}get _state(){return Ai(Kt(this,Ra))}set _state(e){Ri(Kt(this,Ra),e,!0)}get state(){return this._state}setVersion(e){this._state.current=e,this.notifySubscribers()}setMinVersion(e){this._state.minRequired=e,this.notifySubscribers()}setUpdateAvailable(e){this._state.updateAvailable=e,this.notifySubscribers()}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}Ra=new WeakMap;const Sx=new Rx;var Sa;class Px{constructor(){ir(this,Sa,vi(null))}get user(){return Ai(Kt(this,Sa))}set user(e){Ri(Kt(this,Sa),e,!0)}}Sa=new WeakMap;var Pa;class bx{constructor(){ir(this,Pa,vi(null))}get profile(){return Ai(Kt(this,Pa))}set profile(e){Ri(Kt(this,Pa),e,!0)}}Pa=new WeakMap;const xB=new Px,hM=xB,xn=new bx,Nx=()=>{if(typeof window>"u")return{uid:"local",displayName:null,bestTimeScore:0,isAnonymous:!0};const s=ke.get("online_playerName");return{uid:"local",displayName:s==="Player"||!s?null:s,bestTimeScore:parseInt(ke.get("local_best_time_score")||"0"),isAnonymous:!0}};xn.profile=Nx();class Ox{constructor(){V(this,"db");V(this,"unwatch",null);this.db=rc()}async syncUserProfile(e){const t=yt(this.db,"users",e.uid);kD.syncWithCloud(e.uid);try{const n=await Dr(t),r=parseInt(ke.get("local_best_time_score")||"0"),i=ke.get("online_playerName"),o=i==="Player"?null:i;if(n.exists()){const a=n.data(),l=a.bestTimeScore||0,u=a.displayName||null,h=Math.max(r,l),B={lastActive:Date.now()};r>l&&(B.bestTimeScore=r),!u&&o&&(B.displayName=o),await Jn(t,B,{merge:!0}),l>r&&ke.set("local_best_time_score",l.toString()),u&&ke.set("online_playerName",u),xn.profile={uid:e.uid,displayName:u||o,bestTimeScore:h,isAnonymous:e.isAnonymous}}else{const a=Sx.state.current,l={displayName:o,bestTimeScore:r,createdAt:Date.now(),lastActive:Date.now(),createdVersion:a||"unknown"};await Jn(t,l),xn.profile={uid:e.uid,displayName:o,bestTimeScore:r,isAnonymous:e.isAnonymous}}}catch(n){te.error("[UserProfileService] Sync profile failed",n);const r=parseInt(ke.get("local_best_time_score")||"0"),i=ke.get("online_playerName");xn.profile={uid:e.uid,displayName:i==="Player"?null:i,bestTimeScore:r,isAnonymous:e.isAnonymous}}}watchUserProfile(e){this.stopWatching();const t=yt(this.db,"users",e);return this.unwatch=pa(t,n=>{if(!n.exists())return;const r=n.data().bestTimeScore||0,i=parseInt(ke.get("local_best_time_score")||"0");r>i?(ke.set("local_best_time_score",r.toString()),xn.profile&&(xn.profile.bestTimeScore=r),te.info("[UserProfileService] Best score arrived from another device")):i>r&&Jn(t,{bestTimeScore:i},{merge:!0}).catch(o=>te.warn("[UserProfileService] Best score not sent",o))},n=>te.error("[UserProfileService] Live sync failed",n)),()=>this.stopWatching()}stopWatching(){var e;(e=this.unwatch)==null||e.call(this),this.unwatch=null}async updateNickname(e,t){const n=e&&e.trim()!==""&&e!=="Player"?e:null;if(xn.profile&&(xn.profile.displayName=n),n?ke.set("online_playerName",n):ke.remove("online_playerName"),!!t)try{const{updateProfile:r}=await $r(async()=>{const{updateProfile:o}=await Promise.resolve().then(()=>FD);return{updateProfile:o}},void 0,import.meta.url);await r(t,{displayName:n});const i=yt(this.db,"users",t.uid);await Jn(i,{displayName:n,lastActive:Date.now()},{merge:!0}),te.action(`[UserProfileService] Nickname updated to ${n}`)}catch(r){te.error("[UserProfileService] Update profile error",r)}}async eraseCloudData(e){const[{leaderboardService:t},{eraseFollows:n},{removeProfile:r}]=await Promise.all([$r(()=>import("./B_UEwFxl.js"),__vite__mapDeps([0,1,2]),import.meta.url),$r(()=>import("./hu5IxucC.js"),__vite__mapDeps([3,1,2]),import.meta.url),$r(()=>import("./DjrAveU5.js"),__vite__mapDeps([4,1,2,5]),import.meta.url)]);await t.removeMyEntries(e),await n(e),await r(e).catch(o=>{te.warn("[UserProfileService] Public profile not deleted",o)});const{deleteDoc:i}=await $r(async()=>{const{deleteDoc:o}=await Promise.resolve().then(()=>Db);return{deleteDoc:o}},void 0,import.meta.url);await Promise.all([i(yt(this.db,"users",e)).catch(o=>{te.warn("[UserProfileService] User doc not deleted",o)}),i(yt(this.db,"rewards",e)).catch(o=>{te.warn("[UserProfileService] Rewards doc not deleted",o)})])}clearLocalUserData(){te.init("[UserProfileService] Clearing local user data..."),ke.remove("local_best_time_score"),ke.remove("sotb_rewards"),ke.remove("online_playerName")}resetLocalProfile(){xn.profile={uid:"local",displayName:null,bestTimeScore:0,isAnonymous:!0}}}const ms=new Ox;class Ul{constructor(){V(this,"authInstance",null);V(this,"pendingSignIn",null);V(this,"lastError","")}static isOffline(e){const t=e==null?void 0:e.code;return t==="auth/network-request-failed"||t==="auth/timeout"?!0:typeof navigator<"u"&&navigator.onLine===!1}get auth(){return this.authInstance||(this.authInstance=fx()),this.authInstance}async init(){uD(this.auth,async e=>{e?(te.init(`[AuthService] User logged in: ${e.uid} (Anon: ${e.isAnonymous})`),xB.user=e,await ms.syncUserProfile(e),ms.watchUserProfile(e.uid)):(te.init("[AuthService] No user logged in. Signing in anonymously..."),xB.user=null,ms.stopWatching(),await this.ensureUser())})}async ensureUser(){const e=this.auth.currentUser;return e||(this.pendingSignIn??(this.pendingSignIn=this.signInAnonymously().catch(t=>(Ul.isOffline(t)?te.warn("[AuthService:EnsureUser] мережі немає — користувача немає",t):te.error("[AuthService:EnsureUser] Анонімний вхід не вдався",t),null)).then(t=>(this.pendingSignIn=null,t))),this.pendingSignIn)}async signInAnonymously(){try{return(await YI(this.auth)).user}catch(e){throw Ul.isOffline(e)?te.warn("[AuthService:SignInAnonymously] мережі немає — граємо без входу",e):te.error("[AuthService:SignInAnonymously] Firebase:",e),e}}async linkEmailPassword(e,t){const n=this.auth.currentUser;if(!n)return!1;try{const r=On.credential(e,t);return await vf(n,r),!0}catch(r){return te.error("[AuthService] Link error",r),!1}}async loginWithGoogle(){try{const{GoogleAuthProvider:e,linkWithPopup:t,signInWithCredential:n,signInWithPopup:r}=await $r(async()=>{const{GoogleAuthProvider:a,linkWithPopup:l,signInWithCredential:u,signInWithPopup:h}=await Promise.resolve().then(()=>FD);return{GoogleAuthProvider:a,linkWithPopup:l,signInWithCredential:u,signInWithPopup:h}},void 0,import.meta.url),i=new e,o=this.auth.currentUser;if(!o)return await r(this.auth,i),!0;try{return await t(o,i),!0}catch(a){if((a.code??"")!=="auth/credential-already-in-use")throw a;const u=e.credentialFromError(a);if(!u)throw a;return await n(this.auth,u),!0}}catch(e){return te.error("[AuthService] Google auth error",e),this.lastError=e.code??"",!1}}async loginEmailPassword(e,t){try{return await rD(this.auth,e,t),!0}catch(n){return te.error("[AuthService] Login error",n),!1}}async resetPassword(e){try{return await nD(this.auth,e),!0}catch(t){return te.error("[AuthService] Reset error",t),!1}}async reauthenticate(e,t){const n=e.providerData.some(r=>r.providerId==="google.com");t&&e.email?await Af(e,On.credential(e.email,t)):n&&await wD(e,new In)}async deleteAccount(e){const t=this.auth.currentUser;if(!t)return!1;try{return await this.reauthenticate(t,e),await ms.eraseCloudData(t.uid),await BD(t),ms.clearLocalUserData(),!0}catch(n){return te.error("[AuthService] Delete error",n),!1}}async changePassword(e,t){const n=this.auth.currentUser;if(!n)return!1;try{return await this.reauthenticate(n,t),await iD(n,e),!0}catch(r){return te.error("[AuthService] Change password error",r),!1}}async updateNickname(e){const t=this.auth.currentUser;return ms.updateNickname(e,t)}async logout(){try{ms.clearLocalUserData(),ms.resetLocalProfile(),kD.reset(),await hD(this.auth)}catch(e){te.error("[AuthService:Logout] Firebase:",e)}}getCurrentUser(){return this.auth.currentUser}}const Es=new Ul,Lx=50;class Fx{get db(){return rc()}async sendMessage(e,t,n,r){const i=la(this.db,"rooms",e,"messages");await By(i,{senderId:t,senderName:n,text:r,createdAt:yE()})}subscribeToChat(e,t){const n=la(this.db,"rooms",e,"messages"),r=_l(n,El("createdAt","desc"),yl(Lx));return pa(r,i=>{const o=[];i.forEach(a=>{const l=a.data();o.push({id:a.id,senderId:l.senderId,senderName:l.senderName,text:l.text,createdAt:l.createdAt?l.createdAt.toMillis():Date.now()})}),t(o.reverse())})}}const Om=new Fx,kx=Qs({roomId:xt().nullable(),playerId:xt().nullable()}),zr={ROOM_ID:"online_roomId",PLAYER_ID:"online_playerId"};class xx{saveSession(e,t){ke.set(zr.ROOM_ID,e),ke.set(zr.PLAYER_ID,t)}getSession(){const e={roomId:ke.get(zr.ROOM_ID),playerId:ke.get(zr.PLAYER_ID)},t=kx.safeParse(e);return t.success?t.data:{roomId:null,playerId:null}}clearSession(){ke.remove(zr.ROOM_ID),ke.remove(zr.PLAYER_ID)}}const ur=new xx,jh={reads:0,writes:0,bytesReceived:0,bytesSent:0,lastActivity:null,recentEvents:[],elapsedSeconds:0,isTracking:!1};var ba;class Mx{constructor(){ir(this,ba,vi(Hl({...jh})));V(this,"timerInterval",null);V(this,"subscribers",new Set)}get _state(){return Ai(Kt(this,ba))}set _state(e){Ri(Kt(this,ba),e,!0)}get state(){return this._state}set state(e){this._state=e,this.notifySubscribers()}update(e){this._state=e(this._state),this.notifySubscribers()}reset(){this._state={...jh,isTracking:this._state.isTracking,elapsedSeconds:0},this.notifySubscribers()}startSession(){this.timerInterval&&clearInterval(this.timerInterval),this._state={...jh,isTracking:!0},this.notifySubscribers(),this.timerInterval=setInterval(()=>{this._state.elapsedSeconds++,this.notifySubscribers()},1e3)}stopSession(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),this._state.isTracking=!1,this.notifySubscribers()}recordRead(e,t){const n=this.estimateSize(t),r={type:"read",size:n,source:e,timestamp:Date.now()};this._state.reads++,this._state.bytesReceived+=n,this._state.lastActivity=Date.now(),this._state.recentEvents=[r,...this._state.recentEvents].slice(0,20),this.notifySubscribers()}recordWrite(e,t){const n=this.estimateSize(t),r={type:"write",size:n,source:e,timestamp:Date.now()};this._state.writes++,this._state.bytesSent+=n,this._state.lastActivity=Date.now(),this._state.recentEvents=[r,...this._state.recentEvents].slice(0,20),this.notifySubscribers()}estimateSize(e){try{return new TextEncoder().encode(JSON.stringify(e)).length}catch{return 0}}subscribe(e){return e(this._state),this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.subscribers.forEach(e=>e(this._state))}}ba=new WeakMap;const Po=new Mx;function xc(s,e,t){let n;const r=new Promise((i,o)=>{n=setTimeout(()=>{o(new Error(t))},e)});return Promise.race([s.then(i=>(clearTimeout(n),i)),r])}const Vx=Qs({seconds:Qn(),nanoseconds:Qn()});Iw([Qn(),Vx]);const Gx=xt().min(2).max(20).trim();Qs({id:xt(),name:Gx,color:xt().regex(/^#[0-9A-Fa-f]{6}$/).default("#4A90E2"),isReady:Is().default(!1),joinedAt:cn(),isOnline:Is().default(!0),isWatchingReplay:Is().optional(),lastSeen:cn().optional(),isDisconnected:Is().optional(),disconnectStartedAt:cn().optional()}).passthrough();const Ux=Dw(["waiting","playing","finished"]);Qs({boardSize:Qn().min(2).max(20).default(4),blockModeEnabled:Is().default(!1),blockOnVisitCount:Qn().min(0).default(0),gameMode:xt().nullable().optional(),turnDuration:Qn().optional(),settingsLocked:Is().optional()}).passthrough();const Hx=Qs({id:xt(),name:xt().min(1).max(100),hostId:xt(),status:xt(),createdAt:cn(),lastActivity:cn(),isPrivate:cn(),settingsLocked:cn(),allowGuestSettings:cn(),players:cn(),settings:cn(),maxPlayers:cn().optional()}).passthrough();Qs({id:xt(),name:xt(),status:Ux,playerCount:Qn(),maxPlayers:Qn(),isPrivate:Is()});const Mc=3e4,Lm=50;class qx{get db(){return rc()}getRoomRef(e){return yt(this.db,si.ROOMS,e)}validateRoom(e,t){const n=Hx.safeParse({...e,id:t});return n.success?n.data:(te.error(`[RoomFirestoreService] Кімната ${t} не відповідає схемі`,n.error.issues.map(r=>`${r.path.join(".")}: ${r.message}`)),{...e,id:t})}async createRoomDoc(e,t){await xc(Jn(this.getRoomRef(e),t),Mc,"Timeout: Failed to connect to Firebase Firestore.")}async getStatsDoc(){const e=yt(this.db,si.GENERAL,"stats"),t=await Dr(e);return t.exists()?t.data():null}async updateStatsDoc(e){const t=yt(this.db,si.GENERAL,"stats");await Jn(t,e,{merge:!0})}async getPublicRoomsQuerySnapshot(){const e=_l(la(this.db,si.ROOMS),_B("isPrivate","==",!1),El("lastActivity","desc"),yl(Lm)),[t,n]=await Promise.all([xc(hy(e),Mc,"Timeout fetching rooms"),this.getStatsDoc().catch(()=>null)]);return[t,n]}subscribeToPublicRooms(e,t){const n=_l(la(this.db,si.ROOMS),_B("isPrivate","==",!1),El("lastActivity","desc"),yl(Lm));return pa(n,e,t)}async deleteRoomDoc(e){await xd(e)}async getRoomDoc(e){const t=await xc(Dr(this.getRoomRef(e)),Mc,"Timeout connecting to room");return t.exists()?this.validateRoom(t.data(),t.id):null}async getRoomDocSimple(e){const t=await Dr(this.getRoomRef(e));return t.exists()?this.validateRoom(t.data(),t.id):null}async updateRoomDoc(e,t,n=!1){const r=Br(this.getRoomRef(e),t);n?await xc(r,Mc,"Timeout updating room"):await r}subscribeToRoom(e,t,n){return pa(this.getRoomRef(e),r=>{if(r.exists()){const i=r.data();Po.recordRead("RoomSubscription",i),t(this.validateRoom(i,r.id))}else t(null)},n)}}const mt=new qx;class jx{get rtdb(){return dx()}trackPresence(e,t){const n=Lc(this.rtdb,`/status/${e}/${t}`),r=Lc(this.rtdb,".info/connected");return te.init(`[PresenceService] Setting up presence tracking for ${t} in ${e}`),lm(r,i=>{if(i.val()===!1){te.presence(`[PresenceService] RTDB connection lost for ${t}`);return}te.presence(`[PresenceService] RTDB connected for ${t}. Setting up onDisconnect and online status.`),P0(n).set({state:"offline",last_changed:Lh()}).then(()=>{cm(n,{state:"online",last_changed:Lh()}),te.presence(`[PresenceService] Presence tracking active for ${t}`)})})}async setOffline(e,t){const n=Lc(this.rtdb,`/status/${e}/${t}`);await cm(n,{state:"offline",last_changed:Lh()})}subscribeToRoomPresence(e,t){const n=Lc(this.rtdb,`/status/${e}`);return lm(n,r=>t(r.val()||{}))}}const Jx=new jx;function Xc(s){return s==null?0:typeof s=="number"?s:s&&typeof s=="object"&&"seconds"in s&&"nanoseconds"in s?s.seconds*1e3+Math.floor(s.nanoseconds/1e6):0}const xD=1440*60*1e3;function En(s=Date.now()){return{lastActivity:s,expiresAt:ye.fromMillis(s+xD)}}function Wx(s,e=Date.now()){return e-Xc(s.lastActivity)>xD}function Kx(s){var r;const e=(r=Es.getCurrentUser())==null?void 0:r.uid;if(!e)return;const t=Date.now(),n=[];s.forEach(i=>{const o=i.data();o.hostId===e&&Wx(o,t)&&n.push(i.ref)}),n.length!==0&&Promise.allSettled(n.map(i=>mt.deleteRoomDoc(i))).then(i=>{const o=i.filter(a=>a.status==="rejected").length;o>0?te.warn(`[RoomLifetime] не прибрано ${o} із ${n.length} своїх прострочених кімнат`):te.init(`[RoomLifetime] прибрано своїх прострочених кімнат: ${n.length}`)})}class zx{get db(){return rc()}async updatePlayer(e,t,n){const r=yt(this.db,"rooms",e),i={};for(const o in n)i[`players.${t}.${o}`]=n[o];await Br(r,i),Po.recordWrite("RoomPlayer:updatePlayer",i)}async toggleReady(e,t,n){const r=yt(this.db,"rooms",e),i={[`players.${t}.isReady`]:n,...En()};await Br(r,i),Po.recordWrite("RoomPlayer:toggleReady",i)}async setWatchingReplay(e,t,n){const r=yt(this.db,"rooms",e),i={[`players.${t}.isWatchingReplay`]:n,...En()};await Br(r,i),Po.recordWrite("RoomPlayer:setWatchingReplay",i)}async sendHeartbeat(e,t){await this.updateLobbyPresence(e,t)}async updateLobbyPresence(e,t){const n=yt(this.db,"rooms",e),r={[`players.${t}.lastSeen`]:Date.now()};await Br(n,r),Po.recordWrite("RoomPlayer:Heartbeat",r)}async leaveRoom(e,t){te.init(`[RoomPlayerService] leaveRoom CALLED for ${e} by ${t}`);const n=yt(this.db,"rooms",e);await Jx.setOffline(e,t).catch(r=>{te.presence(`[RoomPlayerService] Failed to set offline: ${r}`)}),ur.clearSession();try{const r=await Dr(n);if(!r.exists()){te.init(`[RoomPlayerService] Room ${e} does not exist.`);return}const i=r.data(),o={...i.players};if(o[t]){delete o[t],te.init("[RoomPlayerService] Removed player from map. Checking remaining...");const a=Object.values(o),l=a.filter(u=>!u.isDisconnected);if(te.init(`[RoomPlayerService] Remaining: ${a.length}, Active: ${l.length}`),a.length===0)te.init("[RoomPlayerService] Room empty, deleting room."),await xd(n);else{const u={[`players.${t}`]:EE(),...En()};if(i.hostId===t){const B=l[0]||a[0];B&&(u.hostId=B.id,te.init(`[RoomPlayerService] Host migrated to ${B.id}`))}a.length>0&&a.every(B=>B.isReady)&&i.status==="finished"&&(u.status="waiting"),await Br(n,u)}}}catch(r){te.error("[RoomPlayerService] Failed to leave room:",r)}}}const yo=new zx,Fm=["FIFA","SIMS","NFS","GTA","Peek","CS2","TrackMania","RoadRash","Minecraft","Tetris","Doom","Zelda","Mario","Portal","Halo","Cyberpunk","Witcher","Skyrim","Fortnite","Dota","Sonic","Metroid","PacMan","Diablo","StarCraft"],km=["Alik","Noah","Jack","Mateo","Lucas","Sofia","Olivia","Nora","Lucia","Emilia","Liam","Oliver","Elijah","James","William","Benjamin","Henry","Mia","Evelyn","Harper"];function Qx(){return Fm[Math.floor(Math.random()*Fm.length)]}function BM(){return km[Math.floor(Math.random()*km.length)]}class $x{handle(e,t={}){const{context:n,showToast:r=!0,userMessageKey:i="common.errorOccurred",userMessageRaw:o}=t,a=e instanceof Error?e.message:String(e);if(a.includes("ResizeObserver loop"))return;const l=e instanceof Error?e.stack:void 0;te.error(`${n?"["+n+"] ":""}${a}`,{error:e,stack:l}),r&&Ax.add({type:"error",messageKey:o?void 0:i,messageRaw:o,duration:7e3})}initGlobalHandlers(){typeof window>"u"||(window.onerror=(e,t,n,r,i)=>{typeof e=="string"&&e.includes("ResizeObserver loop")||i!=null&&i.message&&i.message.includes("ResizeObserver loop")||this.handle(i||e,{context:"WindowOnError"})},window.onunhandledrejection=e=>{this.handle(e.reason,{context:"UnhandledRejection"})})}}const Qr=new $x;class MD extends Error{constructor(e,t="APP_ERROR",n){super(e),this.message=e,this.code=t,this.context=n,this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}class Io extends MD{constructor(e,t="ROOM_ERROR",n){super(e,t,n)}}class xm extends MD{constructor(e,t="AUTH_ERROR",n){super(e,t,n)}}function Yx(){const s=new Date,e=B=>B.toString().padStart(2,"0"),t=B=>B.toString().padStart(3,"0"),n=s.getFullYear(),r=e(s.getMonth()+1),i=e(s.getDate()),o=e(s.getHours()),a=e(s.getMinutes()),l=e(s.getSeconds()),u=t(s.getMilliseconds());return`${Math.random().toString(36).slice(2,6).padEnd(4,"0")}_${n}-${r}-${i}_${o}-${a}-${l}_${u}`}const Xx=6e5,Jh=8;class Zx{async createRoom(e,t=!1,n){te.init(`[RoomService] createRoom START. Host: ${e}`);let r=Es.getCurrentUser();r||(te.init("[RoomService] Not authenticated. Performing quick sign-in..."),r=await Es.signInAnonymously());const i=r.uid,o=qp([]),a={id:i,name:e,color:o,isReady:!0,joinedAt:Date.now(),isOnline:!0,isWatchingReplay:!1},l=n&&n.trim()!==""?n.trim():Qx(),u={...Ew,boardSize:2,turnDuration:1e3,autoHideBoard:!1,blockModeEnabled:!0,blockOnVisitCount:0,settingsLocked:!1},h={name:l,hostId:i,status:"waiting",createdAt:Date.now(),...En(),isPrivate:t,settingsLocked:!1,allowGuestSettings:!0,players:{[i]:a},settings:u,maxPlayers:Jh};try{const B=Yx();return await mt.createRoomDoc(B,h),t||mt.updateStatsDoc({lastRoomCreatedAt:Date.now()}).catch(p=>te.warn("[RoomService] спільна статистика не оновилася",p)),ur.saveSession(B,i),B}catch(B){throw Qr.handle(B,{context:"RoomService:CreateRoom"}),new Io("Failed to create room","CREATE_FAILED",{originalError:B})}}processRoomsSnapshot(e){const t=[],n=Date.now();let r=0;return Kx(e),e.forEach(i=>{const o=i.data(),a=Xc(o.createdAt),l=Xc(o.lastActivity);if(a>r&&(r=a),n-l>Xx)return;const u=Object.values(o.players||{}),h=u.filter(B=>{const p=Xc(B.lastSeen||B.joinedAt),g=n-p<12e4;return!B.isDisconnected&&g});o.status==="playing"&&h.length===0||u.length>0&&t.push({id:i.id,name:o.name,status:o.status,playerCount:u.length,maxPlayers:o.maxPlayers||Jh,isPrivate:o.isPrivate})}),{rooms:t,latestCreatedAt:r>0?r:void 0}}async getPublicRooms(){if(!await Es.ensureUser())return te.error("[RoomService] Немає користувача — перелік кімнат не читається"),{rooms:[],unavailable:!0};try{const[t,n]=await mt.getPublicRoomsQuerySnapshot(),r=this.processRoomsSnapshot(t),i=(n==null?void 0:n.lastRoomCreatedAt)||0,o=Math.max(r.latestCreatedAt||0,i);return{rooms:r.rooms,latestCreatedAt:o>0?o:void 0}}catch(t){return Qr.handle(t,{context:"RoomService:GetPublicRooms",showToast:!1}),{rooms:[],unavailable:!0}}}subscribeToPublicRooms(e){let t=null,n=!1;return Es.ensureUser().then(r=>{if(!n){if(!r){te.error("[RoomService] Немає користувача — живий перелік не відкривається"),e({rooms:[],unavailable:!0});return}t=mt.subscribeToPublicRooms(i=>{const o=this.processRoomsSnapshot(i);e(o)},i=>{Qr.handle(i,{context:"RoomService:SubscribePublicRooms",showToast:!1}),e({rooms:[],unavailable:!0})})}}),()=>{n=!0,t==null||t(),t=null}}async joinRoom(e,t){te.init(`[RoomService] joinRoom START. Room: ${e}`);let n=Es.getCurrentUser();n||(te.init("[RoomService] joinRoom: Not authenticated. Performing quick sign-in..."),n=await Es.signInAnonymously());const r=n.uid;try{const i=await mt.getRoomDoc(e);if(!i)throw new Io("Room not found","NOT_FOUND",{roomId:e});const o=ur.getSession();if(o.roomId===e&&o.playerId&&i.players[o.playerId]){const h=Object.values(i.players).filter(B=>B.id!==o.playerId);if(i.status!=="waiting"&&h.length===0)throw te.init("[RoomService] Reconnect aborted: Room is empty (only me left) and game started/finished."),ur.clearSession(),await yo.leaveRoom(e,o.playerId),new xm("Game ended because all opponents left.","RECONNECT_ABORTED");return te.init("[RoomService] Reconnecting as existing player"),i.players[o.playerId].name!==t&&await mt.updateRoomDoc(e,{[`players.${o.playerId}.name`]:t,...En()}),o.playerId}if(Object.keys(i.players).length>=Jh)throw new Io("Room is full","FULL");if(i.status==="playing")throw new Io("Game already started","ALREADY_STARTED");const a=Object.values(i.players).map(h=>h.color),l=qp(a),u={id:r,name:t,color:l,isReady:!1,joinedAt:Date.now(),isOnline:!0,isWatchingReplay:!1};return await mt.updateRoomDoc(e,{[`players.${r}`]:u,...En()},!0),ur.saveSession(e,r),r}catch(i){throw i instanceof Io||i instanceof xm||Qr.handle(i,{context:"RoomService:JoinRoom"}),i}}async getRoom(e){await Es.ensureUser();try{return await mt.getRoomDocSimple(e)}catch(t){return Qr.handle(t,{context:"RoomService:GetRoom",showToast:!1}),null}}subscribeToRoom(e,t){return mt.subscribeToRoom(e,n=>{n||te.init(`[RoomService] Room ${e} deleted or not found`),t(n)},n=>{Qr.handle(n,{context:"RoomService:SubscribeRoom",showToast:!1})})}async startGame(e){const t=await mt.getRoomDocSimple(e);if(!t)return;const n={...t.players};Object.keys(n).forEach(r=>{n[r].isReady=!1,n[r].isWatchingReplay=!1}),await mt.updateRoomDoc(e,{status:"playing",players:n,...En()})}async returnToLobby(e,t){const n=await mt.getRoomDocSimple(e);if(!n)return;const r={[`players.${t}.isReady`]:!0,[`players.${t}.isWatchingReplay`]:!1,...En()},i={...n.players};i[t]&&(i[t]={...i[t],isReady:!0}),Object.values(i).every(a=>a.isReady)?r.status="waiting":n.status==="playing"&&(r.status="finished"),await mt.updateRoomDoc(e,r)}async updateRoomSettings(e,t){const n={...En()};for(const[r,i]of Object.entries(t))r==="allowGuestSettings"?n.allowGuestSettings=i:n[`settings.${r}`]=i;t.settingsLocked!==void 0&&(n.settingsLocked=t.settingsLocked),await mt.updateRoomDoc(e,n)}async renameRoom(e,t){await mt.updateRoomDoc(e,{name:t,...En()})}getSession(){return ur.getSession()}clearSession(){ur.clearSession()}async updatePlayer(e,t,n){return yo.updatePlayer(e,t,n)}async toggleReady(e,t,n){return yo.toggleReady(e,t,n)}async setWatchingReplay(e,t,n){return yo.setWatchingReplay(e,t,n)}async leaveRoom(e,t){return yo.leaveRoom(e,t)}async sendMessage(e,t,n,r){return Om.sendMessage(e,t,n,r)}subscribeToChat(e,t){return Om.subscribeToChat(e,t)}}const dM=new Zx;export{EE as A,Jx as B,si as C,Xc as D,Gx as P,hy as a,Es as b,la as c,yt as d,yE as e,xd as f,rc as g,Dr as h,BM as i,kD as j,xn as k,yl as l,Br as m,Ax as n,El as o,En as p,_l as q,dM as r,Jn as s,Qx as t,hM as u,Sx as v,_B as w,Qr as x,yo as y,pa as z};
//# sourceMappingURL=BiLP_A0M.js.map
