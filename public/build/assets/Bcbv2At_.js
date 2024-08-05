import{a}from"./Dl7M0piC.js";import{j as e}from"./DPkeyV0Z.js";import{P as s}from"./EXvasF4e.js";
/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var t=a("outline","search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]);function r({users:a,className:t}){return e.jsx("div",{className:`flex flex-wrap max-w-7xl mx-auto place-content-center place-items-center gap-4 mt-8 ${t}`,children:a.length>0&&a.slice(0,10).map(((a,t)=>e.jsx(s,{className:"h-72 md:h-80 w-36 md:w-48",user:a})))})}async function n(){const a=await fetch(`${route("relasi.index.topfollowers")}`);return await a.json()}async function o(a,e){const s=await fetch(`${route("relasi.index.sort")}?order_by=${a}&direction=${e}`);return(await s.json()).data}async function c(a){const e=await fetch(`${route("relasi.index.search")}?search=${a}`);return await e.json()}export{t as I,r as U,n as a,c as b,o as f};
