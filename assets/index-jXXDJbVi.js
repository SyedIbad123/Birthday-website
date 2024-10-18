import{r as l,j as e}from"./react-De2sYg-n.js";import{c as K}from"./react-dom-KQnZU39_.js";import{B as _}from"./react-router-dom-Dp0C7Srb.js";import{u as Q,a as X,b as Y,c as P}from"./react-router-CWDS6_re.js";import{C as Z,B as y,T as d,a as E,b as W,c as A,d as ee,e as te}from"./@mui-B_1rY2GO.js";import{S as re,T as oe,P as ae,W as ne,O as se,A as ie,a as ce,C as M,M as v,b,F as le,c as de,d as me,e as ue}from"./three-gU3R8TTZ.js";import"./hoist-non-react-statics-D5aJipOz.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-BqeRHQGj.js";import"./react-is-DUDD-a5e.js";import"./clsx-B-dksMZM.js";import"./@emotion-C_eUJwPo.js";import"./@babel-DuB8yAtz.js";import"./stylis-YPZU7XtI.js";import"./react-transition-group-DgGfuq6k.js";import"./@popperjs-BQBsAJpH.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const he=()=>{const[o,i]=l.useState(""),[c,u]=l.useState(""),[t,r]=l.useState(""),a=Q();l.useEffect(()=>{const n=localStorage.getItem("name"),s=localStorage.getItem("birthday");n&&i(n),s&&u(s)},[]);const x=n=>{n.preventDefault();const s=new Date,f=new Date(c);if(!o||!c){r("Both fields are required!");return}r(""),localStorage.setItem("name",o),localStorage.setItem("birthday",c),f>s?a(`/countdown?name=${o}&date=${c}`):f.getMonth()===s.getMonth()&&f.getDate()===s.getDate()&&a(`/birthdayWish?name=${o}`)},m=()=>{a("/countdown")};return e.jsxs("div",{className:"relative min-h-screen bg-cover bg-center pl-[30rem] pt-[10rem]",style:{backgroundImage:"url(./birthday.webp)"},children:[e.jsx("div",{className:"absolute inset-0 bg-black opacity-50"}),e.jsx(Z,{maxWidth:"sm",className:"absolute z-10",children:e.jsxs(y,{className:"p-20 bg-white shadow-lg rounded-lg mx-auto bg-opacity-80",children:[e.jsx(d,{variant:"h5",component:"h1",className:"text-center mb-10 font-bold text-gray-700",children:"Birthday Countdown Form"}),e.jsxs("form",{onSubmit:x,className:"space-y-6",children:[e.jsx("div",{children:e.jsx(E,{title:"Enter the person's name",arrow:!0,placement:"top",children:e.jsx(W,{id:"name",label:"Person's Name",value:o,onChange:n=>i(n.target.value),fullWidth:!0,required:!0,error:!!(t&&!o),helperText:t&&!o?"Please enter a valid name":"",className:"transition duration-300 ease-in-out transform hover:scale-105",InputProps:{className:"p-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"}})})}),e.jsx("div",{children:e.jsx(E,{title:"Select the person's birthdate",arrow:!0,placement:"top",children:e.jsx(W,{id:"birthday",label:"Birthday",type:"date",value:c,onChange:n=>u(n.target.value),fullWidth:!0,required:!0,error:!!(t&&!c),helperText:t&&!c?"Please select a valid date":"",className:"transition duration-300 ease-in-out transform hover:scale-105",InputLabelProps:{shrink:!0},InputProps:{className:"p-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"}})})}),t&&e.jsx(d,{variant:"body2",className:"text-red-600 text-center",children:t}),e.jsx(A,{type:"submit",fullWidth:!0,variant:"contained",className:"bg-blue-600 text-white py-2 transition duration-300 ease-in-out hover:bg-blue-700 transform hover:scale-105",children:"Submit"}),e.jsx(A,{type:"button",onClick:m,fullWidth:!0,variant:"contained",className:"bg-blue-600 text-white py-2 transition duration-300 ease-in-out hover:bg-blue-700 transform hover:scale-105",children:"Navigate to Countdown"})]})]})})]})},pe=()=>{const o=X(),i=new URLSearchParams(o.search),c=i.get("name")||"",u=i.get("date")||"",[t,r]=l.useState(()=>localStorage.getItem("countdownName")||c),[a,x]=l.useState(()=>localStorage.getItem("countdownDate")||u),[m,n]=l.useState({days:0,hours:0,minutes:0,seconds:0}),[s,f]=l.useState(!0),[j,N]=l.useState(!0),S=l.useRef(null);return l.useEffect(()=>{const h=new Date(a);if(h.setHours(12,0,0,0),isNaN(h.getTime())){f(!1);return}localStorage.setItem("countdownName",t),localStorage.setItem("countdownDate",a);const p=()=>{const L=Date.now(),g=h.getTime()-L;if(g<=0){n({days:0,hours:0,minutes:0,seconds:0}),N(!1);return}const C={days:Math.floor(g/(1e3*60*60*24)),hours:Math.floor(g/(1e3*60*60)%24),minutes:Math.floor(g/1e3/60%60),seconds:Math.floor(g/1e3%60)};n(C),localStorage.setItem("timeLeft",JSON.stringify(C)),j&&S.current&&S.current.play()};p();const B=setInterval(p,1e3);return()=>clearInterval(B)},[a,t,j]),e.jsx(y,{className:"min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 flex items-center justify-center",children:e.jsx(ee,{className:"shadow-lg rounded-lg p-4 max-w-md w-full bg-white",children:e.jsx(te,{children:s?e.jsxs(e.Fragment,{children:[e.jsxs(d,{variant:"h4",component:"h4",className:"text-center text-blue-800 font-bold",children:["Countdown to"," ",e.jsx("span",{className:"font-bold underline",children:t.toUpperCase()}),"'s Birthday at 12 PM!"]}),e.jsxs(y,{className:"mt-6 text-center grid grid-cols-4 gap-4",children:[e.jsxs(y,{children:[e.jsx(d,{variant:"h5",className:"text-purple-700 font-semibold",children:m.days}),e.jsx(d,{variant:"body2",className:"text-gray-600",children:"Days"})]}),e.jsxs(y,{children:[e.jsx(d,{variant:"h5",className:"text-purple-700 font-semibold",children:m.hours}),e.jsx(d,{variant:"body2",className:"text-gray-600",children:"Hours"})]}),e.jsxs(y,{children:[e.jsx(d,{variant:"h5",className:"text-purple-700 font-semibold",children:m.minutes}),e.jsx(d,{variant:"body2",className:"text-gray-600",children:"Minutes"})]}),e.jsxs(y,{children:[e.jsx(d,{variant:"h5",className:"text-purple-700 font-semibold",children:m.seconds}),e.jsx(d,{variant:"body2",className:"text-gray-600",children:"Seconds"})]})]}),e.jsx("audio",{ref:S,src:"./countdown.mp3",loop:!0})]}):e.jsx(d,{variant:"h5",className:"text-red-600 text-center",children:"Invalid Date Provided!"})})})})};let F=new Audio("./happybirthday.mp3");const fe=()=>{const o=l.useRef(null),i=l.useRef(null),c=localStorage.getItem("name").toUpperCase()||"Friend";return l.useEffect(()=>{F.loop=!0,(async()=>{try{await F.play()}catch(p){console.log("Audio playback failed: ",p)}})();const t=new re,r=document.createElement("canvas");r.width=512,r.height=512;const a=r.getContext("2d"),x=a.createLinearGradient(0,0,0,r.height);x.addColorStop(0,"#ff7e5f"),x.addColorStop(1,"#feb47b"),a.fillStyle=x,a.fillRect(0,0,r.width,r.height);const m=new oe(r);m.needsUpdate=!0,t.background=m;const n=new ae(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.set(0,2,10);const s=new ne({antialias:!0});s.setSize(window.innerWidth,window.innerHeight),o.current.appendChild(s.domElement);const f=new se(n,s.domElement),j=new ie(16777215,1);t.add(j);const N=new ce(16750848,2,50);N.position.set(2,3,4),t.add(N),(()=>{const p=new M(2.5,2.5,1,32),B=new v({color:16763904}),L=new b(p,B);L.position.set(0,0,0),t.add(L);const g=new M(2,2,.7,32),C=new v({color:16738740}),R=new b(g,C);R.position.set(0,.85,0),t.add(R);const G=new M(1.5,1.5,.5,32),O=new v({color:8900346}),D=new b(G,O);D.position.set(0,1.55,0),t.add(D),new le().load("https://threejs.org/fonts/helvetiker_regular.typeface.json",z=>{const $=new de(`Happy Birthday ${c}`,{font:z,size:1.5,height:.1,curveSegments:12,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelOffset:0,bevelSegments:5}),V=new v({color:16711680}),w=new b($,V);w.geometry.computeBoundingBox();const J=w.geometry.boundingBox.max.x-w.geometry.boundingBox.min.x;w.position.set(-J/2,1.1,1.5),t.add(w)});const k=new M(.1,.1,1,32),H=new v({color:16776960}),T=new b(k,H);T.position.set(0,2.2,0),t.add(T);const q=new me(.1,16,16),U=new ue({color:16729344}),I=new b(q,U);I.position.set(0,2.7,0),i.current=I,t.add(I)})();const h=()=>{if(requestAnimationFrame(h),f.update(),s.render(t,n),i.current){const p=.1+Math.random()*.1;i.current.scale.set(1,1+p,1),i.current.material.color.setHSL(Math.random()*.1+.05,1,.5)}};return h(),()=>{o.current&&o.current.removeChild(s.domElement),s.dispose()}},[]),e.jsx("div",{ref:o,style:{width:"100vw",height:"100vh"},children:e.jsxs("h1",{style:{color:"white",position:"absolute",top:"10%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"3rem",fontWeight:"bold",textAlign:"center"},children:["Happy Birthday ",e.jsxs("span",{className:"text-red-600",children:[c,"!"]})]})})};function ge(){return e.jsx(_,{children:e.jsxs(Y,{children:[e.jsx(P,{path:"/",element:e.jsx(he,{})}),e.jsx(P,{path:"/countdown",element:e.jsx(pe,{})}),e.jsx(P,{path:"/birthdayWish",element:e.jsx(fe,{})})]})})}K(document.getElementById("root")).render(e.jsx(ge,{}));
