(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[833],{20486:function(e,t,a){Promise.resolve().then(a.bind(a,25195))},80462:function(e,t,a){"use strict";a.d(t,{Z:function(){return Batik}});var s=a(57437),l=a(74275),r=a.n(l);function Batik(e){let{className:t=""}=e;return(0,s.jsx)("div",{className:"absolute z-[0] h-full w-full bg-[url('/2024/assets/beranda/cek_gugus/batik.svg')] bg-repeat-space opacity-20  ".concat(t)})}Batik.propTypes={className:r().string.isRequired}},35407:function(e,t){"use strict";let FetchData=async e=>{let t=await fetch(e,{method:"GET",headers:{Authorization:"Bearer ".concat("ab22f311d94bf937768861d13874f22147b0ad03543d06ee3e11c46fdab2d7e721db3f928364fcbd255303cbd25a0865553dcd783c6a1a5172c71dd425bfe56dd047cbe4a92048488ec45f8eee1d9beb0e31c2eff4260cdefa0207cb4d2e5a0fb8ae461f6b5a0ff532758d2ea4ae7693d7a962c0470d428562c8cc37a3654631"),"Content-Type":"application/json"}}),a=await t.json();return a};t.Z=FetchData},38315:function(e,t,a){"use strict";a.r(t),a.d(t,{loader:function(){return loader}});var s=a(74275),l=a.n(s);function loader(e){let{src:t,width:a}=e;return"".concat("/2024").concat(t,"?imwidth=").concat(a)}loader.PropTypes={src:l().string.isRequired,width:l().string.isRequired},t.default=loader},25195:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return InfoTerkini}});var s=a(57437),l=a(80462),r=a(74275),i=a.n(r),n=a(61396),c=a.n(n),o=a(16691),d=a.n(o);let formatDate=e=>{let t=new Date(e);return t.toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})};function InfoCard(e){let{data:t,onClick:a}=e;return"pdf"!==t.attributes.type?(0,s.jsxs)(c(),{className:"flex h-fit w-[95%] items-start gap-2 rounded-lg  bg-[#F7F6F2] px-[12px] py-[6px] lg:w-[98%] lg:items-center lg:gap-4 lg:px-4 lg:py-2",href:"".concat(t.attributes.path),children:[(0,s.jsx)("p",{className:"w-fit px-2 text-center font-sora text-sm font-semibold text-[#333338] lg:w-[25%]",children:formatDate(t.attributes.date)}),(0,s.jsxs)("div",{className:"flex w-full flex-1 items-center lg:h-full ",children:[(0,s.jsx)("div",{className:"w-1 self-stretch rounded-[10px] bg-white lg:mr-5"}),(0,s.jsx)("p",{className:"flex-1 px-3 font-sora text-sm text-[#333338] lg:text-start",children:t.attributes.information}),(0,s.jsx)(d(),{src:"/assets/icon/arrow-info-terkini.svg",alt:"arrow",width:0,height:0,className:"w-6 lg:w-7"})]})]}):(0,s.jsxs)("div",{className:"flex h-fit w-[95%] cursor-pointer items-start gap-2  rounded-lg bg-[#F7F6F2] px-[12px] py-[6px] lg:w-[98%] lg:items-center lg:gap-4 lg:px-4 lg:py-2",onClick:a,role:"button",tabIndex:0,children:[(0,s.jsx)("p",{className:"w-fit px-2 text-center font-sora text-sm font-semibold text-[#333338] lg:w-[25%]",children:formatDate(t.attributes.date)}),(0,s.jsxs)("div",{className:"flex w-full flex-1 items-center lg:h-full ",children:[(0,s.jsx)("div",{className:"w-1 self-stretch rounded-[10px] bg-white lg:mr-5"}),(0,s.jsx)("p",{className:"flex-1 px-3 font-sora text-sm text-[#333338] lg:text-start",children:t.attributes.information}),(0,s.jsx)(d(),{src:"/assets/icon/arrow-info-terkini.svg",alt:"arrow",width:0,height:0,className:"w-6 lg:w-7"})]})]})}InfoCard.propTypes={data:i().object.isRequired,onClick:i().func.isRequired};var f=a(35407),x=a(2265);let PopUp=e=>{let{data:t,close:a}=e;return(0,s.jsx)("div",{className:" absolute top-0 z-[150] flex h-full w-full bg-black/50",children:(0,s.jsxs)("div",{className:"relative m-auto h-[80%] w-[90%] overflow-hidden rounded-lg bg-slate-50 p-10 lg:w-[80%]",children:[(0,s.jsx)(d(),{src:"/assets/palapedia/flashcard/x-button.svg",width:45,height:45,alt:"close",className:"absolute right-3 top-3 cursor-pointer",onClick:a}),(0,s.jsx)("h1",{className:"my-3 text-center font-sora text-2xl font-bold text-blueText lg:my-6 lg:text-5xl",children:"Informasi Terkini"}),(0,s.jsx)("iframe",{src:t,className:"h-full w-full",title:"pdf"})]})})};function InfoTerkini(){let[e,t]=(0,x.useState)([]),[a,r]=(0,x.useState)("");(0,x.useEffect)(()=>{let getData=async()=>{let e=await (0,f.Z)("https://pionir.ugm.ac.id/2022/strapi/api/infoterkini2024s"),{data:a}=e;t(a)};getData()},[]);let handleCardClick=e=>{r(e.attributes.path)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"relative flex h-[100vh] items-center justify-center bg-hero text-4xl",children:[(0,s.jsx)(l.Z,{white:!0,className:""}),a&&(0,s.jsx)(PopUp,{data:a,close:()=>r("")}),(0,s.jsxs)("div",{className:"relative z-[1] mt-[80px] flex h-[80vh] w-[92.5vw]  flex-col rounded-[10px] bg-white px-5 md:mt-[80px] lg:w-[70vw] xl:mt-[80px]",children:[(0,s.jsx)("div",{className:"my-5 mb-2 flex w-full justify-center",children:(0,s.jsx)("h1",{className:"my-3 text-center font-sora text-2xl font-bold text-blueText lg:my-6 lg:text-5xl",children:"Informasi Terkini"})}),(0,s.jsx)("div",{id:"info-scroll-bar",className:"flex h-[85%] w-full flex-col place-items-center gap-2 overflow-y-auto overflow-x-hidden  lg:gap-5",children:e.map((e,t)=>(0,s.jsx)(InfoCard,{data:e,onClick:()=>"pdf"===e.attributes.type&&handleCardClick(e)},"info card ".concat(t+1)))})]})]})})}PopUp.propTypes={data:i().array.isRequired,close:i().func.isRequired}}},function(e){e.O(0,[39,176,971,472,744],function(){return e(e.s=20486)}),_N_E=e.O()}]);