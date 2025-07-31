import{r as a,j as e}from"./Bs_BDpBb.js";import{B as s}from"./BER_bCMR.js";import{I as t}from"./N_zH2iGS.js";import{c as r}from"./CUcfLtda.js";import{P as o}from"./DCJAvJpI.js";
/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=r("outline","search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]);function m({className:r,onsubmit:o}){const[m,l]=a.useState("");return e.jsxs("form",{className:`${r} w-full`,onSubmit:a=>{a.preventDefault(),o(m)},children:[e.jsx(t,{type:"text",placeholder:"Cari Nusantara Muda yang Lain",className:"p-4 border rounded-[10px]",onChange:a=>l(a.target.value)}),e.jsx(s,{type:"submit",className:"absolute top-1/2 -translate-y-1/2 right-0 bg-gradient-to-tr from-[#864D0D] to-[#A6680C] rounded-r-lg rounded-l-none",children:e.jsx(n,{className:"w-4 h-4"})})]})}function l({users:a,className:s}){return e.jsx("div",{className:`flex flex-wrap max-w-7xl mx-auto place-content-center place-items-center gap-4 mt-8 ${s}`,children:a.length>0&&a.slice(0,10).map(((a,s)=>e.jsx(o,{className:"h-72 md:h-72 w-36 md:w-44",user:a})))})}export{m as R,l as U};
