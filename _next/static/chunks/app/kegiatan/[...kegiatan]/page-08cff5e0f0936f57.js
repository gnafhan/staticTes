(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{53258:function(a,n,e){Promise.resolve().then(e.bind(e,93669))},93669:function(a,n,e){"use strict";e.r(n),e.d(n,{default:function(){return Kegiatan}});var t=e(57437),i=e(44535),s=e(74275),l=e.n(s),u=e(54829);u.Z.defaults.baseURL="".concat("https://pionir.ugm.ac.id/2022/strapi","/api");let exist=a=>null!=a&&""!==a,getFakultas=async function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*",n="/fakultas-2024s?populate=*";"*"!==a&&(n="".concat(n,"&filters[slug][$eq]=").concat(a));let e=await u.Z.get(n).then(a=>a.data.data.map(a=>a.attributes)).catch(()=>null);return e?e=e.map(a=>{let n={...a};return exist(a.gambar.data)?n.gambar="".concat(a.gambar.data.attributes.url):n.gambar=null,n}):null},getTimelines=async a=>{let n=await u.Z.get("/agenda-2024s?filters[slug]=".concat(a,"&populate=*")).then(a=>a.data).catch(()=>null);if(!n)return null;let e={};n.data[0].attributes.timelines_2024_s.data.forEach(a=>{void 0===e[a.attributes.hari]&&(e[a.attributes.hari]=[]),e[a.attributes.hari].push({kegiatan:a.attributes.kegiatan,waktu:a.attributes.waktu,lokasi:a.attributes.lokasi})});let t=[];return Object.keys(e).forEach(a=>{t.push({title:a,timelines:e[a]})}),t=t.map(a=>(a.timelines.sort((a,n)=>a.waktu<n.waktu?-1:1),a)),{pdf:n.data[0].attributes.pdf,timelines:t}};async function getPDF(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"*",e="/pdf-2024s?populate=*";"*"!==a&&(e="".concat(e,"&filters[category][$eq]=").concat(a)),"*"!==n&&(e="".concat(e,"&filters[slug][$eq]=").concat(n));let t=await u.Z.get(e).then(a=>a.data.data.map(a=>a.attributes)).catch(()=>null);return t}getFakultas.propTypes={slug:l().string.isRequired},getTimelines.propTypes={slug:l().string.isRequired},getPDF.propTypes={category:l().string.isRequired,slug:l().string.isRequired};var d=e(49474),r=e(24033),g=e(2265);let k={universitas:{header:{warna:"#FFD93E",texture:!0,main:!1},sidebar:{choosen:"Agenda",child:"Universitas"},body:{type:"timelines",content:"universitas"},datas:{judul:"Universitas",tanggal:"29 - 30 Juli 2024",deskripsi:"Rangkaian Universitas merupakan serangkaian agenda dari PIONIR Gadjah Mada untuk menumbuhkan jiwa ke-UGM-an melalui pengenalan sejarah, filosofi dan nilai-nilai, visi dan misi, kegiatan tri dharma, serta lainnya. Melalui pengamalan nilai-nilai luhur dan jati diri Universitas, serta menjunjung nilai-nilai pancasila, diharapkan Gamada dapat menjadi individu yang siap menjadi 'SANG JUARA' (Santun, Adil, Nasionalis, Gembira, Jujur, Unggul, Amanah, Religius, dan Andal)."}},fakultas:{header:{warna:"#58994B",texture:!0,main:!1},sidebar:{choosen:"Agenda",child:"Fakultas/Sekolah"},body:{type:"fakultas",content:"fakultas"},datas:{judul:"Fakultas",tanggal:"31 Juli - 1 Agustus 2024",deskripsi:"Rangkaian Fakultas/Sekolah merupakan kegiatan orientasi lingkungan kampus pada tingkat fakultas dan sekolah yang pesertanya berasal dari mahasiwa fakultas tersebut. Tujuan dilaksanakannya adalah untuk mengenalkan terkait sejarah, filosofi, nilai-nilai, visi, dan misi. Rangkaian Fakultas/Sekolah juga berfokus untuk pengenalan kompetensi serta pengembangan diri mahasiswa terkait keilmuan setiap Fakultas/Sekolah."}},softskills:{header:{warna:"#86BFDC",texture:!0,main:!1},sidebar:{choosen:"Agenda",child:"Soft Skills"},body:{type:"timelines",content:"softskills"},datas:{judul:"Soft Skills",tanggal:"2 - 3 Agustus 2024",deskripsi:"Soft Skills merupakan bagian dari rangkaian PIONIR Gadjah Mada. Mahasiswa diberikan kesempatan untuk mengembangkan dan memperoleh pemahaman mendalam mengenai softskills. Mahasiswa dapat meningkatkan kemampuan komunikasi, kemampuan problem solving, kepekaan sosial, serta kemampuan untuk beradaptasi dengan baik di lingkungan sekitar."}},"action-plan":{header:{warna:"#DA594E",texture:!0,main:!1},sidebar:{choosen:"Agenda",child:"Action Plan"},body:{type:"pdf",content:"action-plan"},datas:{judul:"Action Plan",tanggal:"5 - 10 Agustus 2024",deskripsi:"Action Plan merupakan salah satu kegiatan PIONIR Gadjah Mada yang menjadi penerapan nyata dari nilai-nilai ke-UGM-an sebagai bentuk kolaborasi dan inovasi Gamada. Kegiatan belajar ini menjadi wadah bagi Gamada untuk mengimplementasikan ide dan gagasannya menjadi kegiatan nyata yang nantinya dapat berpengaruh bagi lingkungan masyarakat sekitar."}}},o={agenda:{header:{warna:"#3B9C3D",texture:!0,main:!0},sidebar:{choosen:"Agenda",child:""},body:{type:"agenda"},datas:{judul:"Agenda PIONIR Gadjah Mada 2024",deskripsi:'Berlandaskan karakter "SANG JUARA", PIONIR Gadjah Mada dilaksanakan untuk melahirkan calon pemimpin bangsa yang cakap pengetahuan, berbudaya, serta berkepribadian unggul. PIONIR Gadjah Mada akan diselenggarakan selama 2 minggu dengan capaian pembelajaran yang telah disusun sedemikian rupa.',content:[{judul:"Universitas",tanggal:"29 - 30 Juli 2024",deskripsi:"Rangkaian Universitas merupakan serangkaian agenda dari PIONIR Gadjah Mada untuk menumbuhkan jiwa ke-UGM-an melalui pengenalan sejarah, filosofi dan nilai-nilai, visi dan misi, kegiatan tridharma, serta lainnya. Melalui pengamalan nilai-nilai luhur dan jati diri Universitas, serta menjunjung nilai-nilai pancasila, diharapkan Gamada dapat menjadi individu yang siap menjadi 'SANG JUARA' (Santun, Adilm Nasionalis, Gembira, Jujur, Unggul, Amanah, Religius, dan Andal).",logo:"/assets/kegiatan/pionir-universitas.png",link:"universitas"},{judul:"Fakultas/Sekolah",tanggal:"31 Juli - 1 Agustus 2024",deskripsi:"Rangkaian Fakultas/Sekolah merupakan kegiatan orientasi lingkungan kampus pada tingkat fakultas dan sekolah yang pesertanya berasal dari mahasiwa fakultas tersebut. Tujuan dilaksanakannya adalah untuk mengenalkan terkait sejarah, filosofi, nilai-nilai, visi, dan misi. Rangkaian Fakultas/Sekolah juga berfokus untuk pengenalan kompetensi serta pengembangan diri mahasiswa terkait keilmuan setiap Fakultas/Sekolah.",logo:"/assets/kegiatan/pionir-fakultas.png",link:"fakultas"},{judul:"Soft Skills",tanggal:"2 - 3 Agustus 2024",deskripsi:"Soft Skills merupakan bagian dari rangkaian PIONIR Gadjah Mada. Mahasiswa diberikan kesempatan untuk mengembangkan dan memperoleh pemahaman mendalam mengenai softskills. Mahasiswa dapat meningkatkan kemampuan komunikasi, kemampuan problem solving, kepekaan sosial, serta kemampuan untuk beradaptasi dengan baik di lingkungan sekitar.",logo:"/assets/kegiatan/softskills.png",link:"softskills"},{judul:"Action Plan",tanggal:"5 - 10 Agustus 2024",deskripsi:"Action Plan merupakan salah satu kegiatan PIONIR Gadjah Mada yang menjadi penerapan nyata dari nilai-nilai ke-UGM-an sebagai bentuk kolaborasi dan inovasi Gamada. Kegiatan belajar ini menjadi wadah bagi Gamada untuk mengimplementasikan ide dan gagasannya menjadi kegiatan nyata yang nantinya dapat berpengaruh bagi lingkungan masyarakat sekitar.",logo:"/assets/kegiatan/action-plan.png",link:"action-plan"}]}},atribut:{header:{warna:"#3B9C3D",texture:!0,main:!1},sidebar:{choosen:"Atribut"},datas:{judul:"Atribut",deskripsi:"Ketentuan atribut secara lengkap dapat Gamada akses pada laman ini.",content:null}},ketentuan:{header:{warna:"#3B9C3D",texture:!0,main:!1},sidebar:{choosen:"Ketentuan"},datas:{judul:"Ketentuan",deskripsi:"PIONIR Gadjah Mada 2024 akan segera dilaksanakan. Yuk, persiapkan dirimu dengan mencermati ketentuan dalam PIONIR Gadjah Mada 2024 berikut!",content:null}},panduan:{header:{warna:"#3B9C3D",texture:!0,main:!1},sidebar:{choosen:"Panduan"},datas:{judul:"Panduan",deskripsi:"SIMASTER merupakan Sistem Informasi Terintegrasi UGM yang digunakan untuk menunjang kegiatan akademik supaya lebih terarah dan termonitor bagi seluruh civitas akademika UGM.",content:null}}};t.Fragment,t.Fragment,t.Fragment,t.Fragment,t.Fragment,t.Fragment;let p=[{id:"agenda-id",label:"Agenda",path:"/kegiatan/agenda",logo:"/assets/kegiatan/agenda.png",logoSelected:"/assets/kegiatan/agenda-s.png",child:[{logo:"/assets/kegiatan/bullet.png",label:"Universitas",path:"/kegiatan/agenda/universitas"},{logo:"/assets/kegiatan/bullet.png",label:"Fakultas/Sekolah",path:"/kegiatan/agenda/fakultas"},{logo:"/assets/kegiatan/bullet.png",label:"Soft Skills",path:"/kegiatan/agenda/softskills"},{logo:"/assets/kegiatan/bullet.png",label:"Action Plan",path:"/kegiatan/agenda/action-plan"}]},{id:"atribut-id",label:"Atribut",path:"/kegiatan/atribut",logo:"/assets/kegiatan/atribut.png",logoSelected:"/assets/kegiatan/atribut-s.png"},{id:"ketentuan-id",label:"Ketentuan",path:"/kegiatan/ketentuan",logo:"/assets/kegiatan/ketentuan.png",logoSelected:"/assets/kegiatan/ketentuan-s.png"},{id:"panduan-id",label:"Panduan",path:"/kegiatan/panduan",logo:"/assets/kegiatan/panduan.png",logoSelected:"/assets/kegiatan/panduan-s.png"}],getKegiatan=async a=>{let n={type:null,backLink:null,kegiatan:null},e=a.length>1&&"/kegiatan/".concat(a.slice(0,-1).join("/")),t={...o[a[0]]},i="";if("agenda"===a[0])switch(a.length){case 1:if("agenda"===a[0])i="agenda",t={...t};else{i="menu";let n=await getPDF(a[0]);t={...t,datas:{...t.datas,content:n}}}break;case 2:if(t={...k[a[1]]},"universitas"===a[1]||"softskills"===a[1]){i="timelines";let n=await getTimelines(a[1]);t={...t,datas:{...t.datas,datas:{content:n,ascending:"universitas"===a[1]}}}}else if("fakultas"===a[1])i="fakultas",t.datas.content=await getFakultas();else{i="pdf";let e=await getPDF(a[0],a[1]);if(0===e.length)return n;t.datas={...t.datas,...e[0],content:{pdf:e[0].pdf}}}break;case 3:{i="pdf";let e=await getFakultas(a[2]);if(0===e.length)return n;t={...t,datas:{...t.datas,judul:e[0].nama,gambar:e[0].gambar,subjudul:e[0].fakultas,deskripsi:void 0,content:{...e[0],pdf:e[0].link}},header:{...t.header,warna:"#86BFDC",main:!1}}}break;default:return n}else switch(a.length){case 1:t.datas.content=await getPDF(a[0]),i="menu";break;case 2:{i="pdf";let e=await getPDF(a[0],a[1]);if(0===e.length)return n;t.datas={...e[0],content:{pdf:e[0].pdf}};break}default:return n}return{type:i,backLink:e,kegiatan:t}};function Kegiatan(a){let{slug:n}=a,[e,s]=(0,g.useState)(void 0),[l,u]=(0,g.useState)("wait"),[k,m]=(0,g.useState)(""),h={...o[n[0]]},b=["universitas","fakultas","softskills","action-plan"];return(n.length>1&&-1!==b.indexOf(n[1])&&(h={...h,sidebar:{...h.sidebar,child:["Universitas","Fakultas/Sekolah","Soft Skills","Action Plan"][b.indexOf(n[1])]}}),(0,g.useEffect)(()=>{let init=async()=>{let{type:a,backLink:e,kegiatan:t}=await getKegiatan(n);s(t),u(a),m(e)};init()},[]),e||l)?e||"wait"!==l?e?(0,t.jsx)(i.Z,{title:(0,t.jsx)(t.Fragment,{children:"Kegiatan PIONIR\xa0Gadjah\xa0Mada\xa02024"}),sidebarMenu:p,sidebar:h.sidebar,header:e.header,type:l,datas:e.datas,backLink:k,color:"blue"}):void 0:(0,t.jsx)(d.Z,{title:(0,t.jsx)(t.Fragment,{children:"Kegiatan PIONIR\xa0Gadjah\xa0Mada\xa02024"}),sidebarMenu:p,sidebar:h.sidebar,color:"blue"}):(0,r.notFound)()}Kegiatan.propTypes={slug:l().any.isRequired}}},function(a){a.O(0,[39,176,473,829,851,971,472,744],function(){return a(a.s=53258)}),_N_E=a.O()}]);