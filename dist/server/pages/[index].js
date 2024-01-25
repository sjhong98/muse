(()=>{var e={};e.id=697,e.ids=[697,888,660],e.modules={4723:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>d,getServerSideProps:()=>h,getStaticPaths:()=>g,getStaticProps:()=>u,reportWebVitals:()=>p,routeModule:()=>j,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>x});var s=r(7093),i=r(5244),A=r(1323),l=r(3542),n=r(1940),o=r(5921),c=e([o]);o=(c.then?(await c)():c)[0];let d=(0,A.l)(o,"default"),u=(0,A.l)(o,"getStaticProps"),g=(0,A.l)(o,"getStaticPaths"),h=(0,A.l)(o,"getServerSideProps"),m=(0,A.l)(o,"config"),p=(0,A.l)(o,"reportWebVitals"),x=(0,A.l)(o,"unstable_getStaticProps"),v=(0,A.l)(o,"unstable_getStaticPaths"),f=(0,A.l)(o,"unstable_getStaticParams"),w=(0,A.l)(o,"unstable_getServerProps"),y=(0,A.l)(o,"unstable_getServerSideProps"),j=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/[index]",pathname:"/[index]",bundlePath:"",filename:""},components:{App:n.default,Document:l.default},userland:o});a()}catch(e){a(e)}})},8082:(e,t,r)=>{"use strict";r.d(t,{iz:()=>c,G7:()=>n});var a=r(997);r(6689);var s=r(7518),i=r.n(s);let A=require("@mui/material/Skeleton");var l=r.n(A);let n=i().div`
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
`;i().p`
    font-size: 6rem;
    color: black;
`;let o=i().div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 5vh;
    width: 70%;
    justify-content: space-between;
    margin-top: 5vh;
    margin-bottom: 10vh;
    margin-top: -0vh;
`;function c(){return(0,a.jsxs)(o,{children:[a.jsx(l(),{variant:"rectangular",width:250,height:250}),a.jsx(l(),{variant:"rectangular",width:250,height:250}),a.jsx(l(),{variant:"rectangular",width:250,height:250}),a.jsx(l(),{variant:"rectangular",width:250,height:250}),a.jsx(l(),{variant:"rectangular",width:250,height:250}),a.jsx(l(),{variant:"rectangular",width:250,height:250}),a.jsx(l(),{variant:"rectangular",width:250,height:250}),a.jsx(l(),{variant:"rectangular",width:250,height:250})]})}i().div`
    position: absolute;
    background-color: white;
    width: 50vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    border-radius: 2%;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
`},5921:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{Caption:()=>E,ImageClicked:()=>b,default:()=>p,getStaticPaths:()=>v,getStaticProps:()=>m});var s=r(997),i=r(9648),A=r(8082),l=r(7518),n=r.n(l),o=r(4205),c=r(6689),d=r(5675),u=r.n(d),g=r(1163),h=e([i]);i=(h.then?(await h)():h)[0];let v=async()=>{let e=[];for(let t=1;t<=21;t++)2!==t&&20!==t&&e.push({params:{index:`${t}`}});return console.log("temp"),{paths:e,fallback:!1}};async function m(e){let t;console.log("\nStaticProps : ",e.params.index);let r=e.params.index,a=(await i.default.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${r}`)).data.objectIDs,s=[];for(let e=0;e<20;e++)if(t=await i.default.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${a[e]}`),""!==t.data.primaryImageSmall){let e={primaryImageSmall:t.data.primaryImageSmall,title:t.data.title,city:t.data.city,artistDisplayBio:t.data.artistDisplayBio,artistDisplayName:t.data.artistDisplayName,country:t.data.country,dimensions:t.data.dimensions,medium:t.data.medium,objectName:t.data.objectName,objectURL:t.data.objectURL,repostory:t.data.repository,objectID:t.data.objectID};s.push(e)}return{props:{initialData:s}}}function p({initialData:e}){let t=(0,c.useRef)(null),[r,a]=(0,c.useState)([]),i=(0,g.useRouter)();return(0,c.useEffect)(()=>{console.log("query changed",e),a(e)},[i.query]),(0,s.jsxs)(A.G7,{children:[s.jsx(o.default,{}),s.jsx(x,{res:r}),s.jsx("div",{ref:t,style:{height:"1vh",width:"100vw"}}),s.jsx(A.iz,{})]})}function x(e){let t=(0,c.useRef)(null),r=(0,c.useRef)(null),[a,i]=(0,c.useState)(-1),A=e.res;return(0,g.useRouter)(),(0,c.useEffect)(()=>{let e=e=>{t.current&&!t.current.contains(e.target)&&(e.preventDefault(),i(-1))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),s.jsx(f,{ref:r,children:0!==A.length&&A.map((e,r)=>""!==e.primaryImageSmall?a===r?(0,s.jsxs)("div",{ref:t,className:"absolute flex-row",children:[s.jsx(b,{className:"shadow-2xl",src:e.primaryImageSmall},r),(0,s.jsxs)(E,{children:[s.jsx(w,{children:e.title}),s.jsx(j,{}),s.jsx(j,{}),s.jsx(y,{children:e.artistDisplayName}),s.jsx(y,{children:e.artistDisplayBio}),s.jsx(j,{}),s.jsx(y,{children:e.country}),s.jsx(y,{children:e.city}),s.jsx(j,{}),s.jsx(y,{children:e.medium}),s.jsx(j,{}),s.jsx(y,{children:e.objectName}),s.jsx(y,{children:e.dimensions}),s.jsx(j,{}),s.jsx(y,{children:e.repository})]}),s.jsx("div",{className:"fixed w-screen h-screen bg-black opacity-70 z-[9998] left-[0vw] top-[0vh] cursor-pointer",onClick:()=>i(-1)})]},r):s.jsx(u(),{className:"image",onClick:()=>i(r),src:e.primaryImageSmall,alt:"...",width:200,height:200},r):s.jsx(s.Fragment,{}))})}let f=n().div`
    width: 70%;
    margin-top: 30vh;
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 5vh;
    grid-column-gap: 3vw;
`,w=n().p`
    font-size: 2rem;
    font-family: 'lemon';
`,y=n().p`
    font-size: 1.2rem;
    font-family: 'lemon';
`,j=n().div`
    height: 2vh;
    font-family: 'lemon';
`,b=n().img`
    position: fixed;
    width: 25%;
    object-fit: cover;  
    z-index: 9999;
    scale: 1.2;
    left: 20vw;
    top: 20vh;
`,E=n().div`
    position: fixed;
    width: 35vw;
    height: 60vh;
    left: 55vw;
    top: 15vh;
    z-index: 9999;
`;a()}catch(e){a(e)}})},1940:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(997);function s({Component:e,pageProps:t}){return a.jsx(e,{...t})}r(6764)},3542:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var a=r(997),s=r(6689),i=r(6859),A=r.n(i),l=r(7518);class n extends A(){static async getInitialProps(e){let t=new l.ServerStyleSheet,r=e.renderPage;try{e.renderPage=()=>r({enhanceApp:e=>r=>t.collectStyles(a.jsx(e,{...r}))});let i=await A().getInitialProps(e);return{...i,styles:[(0,a.jsxs)(s.Fragment,{children:[i.styles,t.getStyleElement()]},"1")]}}finally{t.seal()}}render(){return(0,a.jsxs)(i.Html,{children:[a.jsx(i.Head,{}),(0,a.jsxs)("body",{children:[a.jsx(i.Main,{}),a.jsx(i.NextScript,{})]})]})}}},4205:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(997),s=r(6689);let i={src:"/_next/static/media/logo.688649bf.jpeg",height:724,width:1087,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABqwV//8QAFRABAQAAAAAAAAAAAAAAAAAAEiP/2gAIAQEAAQUCNf/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/Aa//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAVEAEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAQAGPwKv/8QAFhAAAwAAAAAAAAAAAAAAAAAAAFGB/9oACAEBAAE/IW4f/9oADAMBAAIAAwAAABD7/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERUf/aAAgBAwEBPxB25cP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPxCP/8QAFxABAQEBAAAAAAAAAAAAAAAAAUEAYf/aAAgBAQABPxAQ7kc3/9k=",blurWidth:8,blurHeight:5};var A=r(5675),l=r.n(A),n=r(1163);let o=[{category:1,id:"American Decorative Arts"},{category:3,id:"Ancient Near Eastern Art"},{category:4,id:"Arms and Armor"},{category:5,id:"Arts of Africa, Oceania, and the Americas"},{category:6,id:"Asian Art"},{category:7,id:"The Cloisters"},{category:8,id:"The Costume Institute"},{category:9,id:"Drawings and Prints"},{category:10,id:"Egyptian Art"},{category:11,id:"European Paintings"},{category:12,id:"European Sculpture and Decorative Arts"},{category:13,id:"Greek and Roman Art"},{category:14,id:"Islamic Art"},{category:15,id:"The Robert Lehman Collection"},{category:16,id:"The Libraries"},{category:17,id:"Medieval Art"},{category:18,id:"Musical Instruments"},{category:19,id:"Photographs"},{category:21,id:"Modern Art"}];function c(){let e;let t=(0,n.useRouter)(),r=(0,s.useRef)(null),[A,c]=(0,s.useState)(!1),d=(0,s.useRef)(null);(0,s.useEffect)(()=>{A?(d.current?.classList.add("menu-open"),d.current?.classList.remove("menu-close")):(d.current?.classList.add("menu-close"),d.current?.classList.remove("menu-open"))},[A]),(0,s.useEffect)(()=>(window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}),[]);let u=()=>{window.scrollY>e?(d.current?.classList.add("menu-close"),d.current?.classList.remove("menu-open"),r.current?.classList.add("header-close"),r.current?.classList.remove("header-open")):(r.current?.classList.add("header-open"),r.current?.classList.remove("header-close")),e=window.scrollY},g=e=>{console.log(e),t.push(`/${e}`)};return(0,a.jsxs)("div",{ref:r,className:"flex flex-row header-open fixed z-[9998] bg-white w-[100vw]",children:[a.jsx(l(),{alt:"...",src:i,className:"w-80 mt-5 ml-[10vw]"}),a.jsx("div",{onClick:()=>{c(e=>!e)},className:"absolute rounded-full w-[7vh] h-[7vh] bg-red-500 mt-[10vh] right-[5vw] cursor-pointer",children:(0,a.jsxs)("div",{ref:d,className:"absolute right-[-33vw] top-[0vh] bg-red-500 rounded-lg w-[36vw] h-[80vh] z-[9999] flex flex-col justify-between pt-6 pb-12 pl-6 cursor-default",style:{boxShadow:"0px 0px 100px 10px rgba(0, 0, 0, 0.2)"},children:[a.jsx("div",{className:"rounded-full w-[3vh] h-[3vh] bg-white mb-3 cursor-pointer flex justify-center items-center"}),o.map((e,t)=>a.jsx("p",{onClick:()=>g(e.category),className:"text-xl cursor-pointer lemon",children:e.id},t))]})})]})}},6764:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7518:e=>{"use strict";e.exports=require("styled-components")},9648:e=>{"use strict";e.exports=import("axios")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[859,192],()=>r(4723));module.exports=a})();