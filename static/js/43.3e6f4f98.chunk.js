"use strict";(self.webpackChunkwatching_eagle_goalkeeper=self.webpackChunkwatching_eagle_goalkeeper||[]).push([[43],{8043:function(e,t,a){a.r(t);var n=a(3497),s=a(1682),r=a(2e3),i=a(8287),l=a(4032),o=a(7313),c=a(2481),h=a(7829),u=a(1135),g=a(6159),d=a(4188),w=a(8742),f=a(178),p=a(6417);t.default=()=>{const[e,t]=o.useState("light"),[Z]=o.useState(!0),x=(0,u.Z)((0,w.ZP)(e)),y=(0,u.Z)({palette:{mode:e}}),[S,j]=o.useState(new Date);async function k(e,t){try{if(0==t){const t=await a(6064)(`./${e}/${e}.json`);return JSON.parse(JSON.stringify(t))}{const n=await a(6064)(`./${e}/${t}.json`);return JSON.parse(JSON.stringify(n))}}catch(n){let e=(new Date).getFullYear(),t=(new Date).getMonth()+1;t=t<=9?"0"+t:t;const s=await a(6064)(`./${e}/${t}.json`);return JSON.parse(JSON.stringify(s))}}return(0,p.jsxs)(g.Z,{theme:Z?x:y,children:[(0,p.jsx)(c.ZP,{}),(0,p.jsx)(d.Z,{mode:e,toggleColorMode:()=>{t((e=>"dark"===e?"light":"dark"))}}),(0,p.jsx)(h.Z,{children:(0,p.jsx)(f.Z,{sx:{pt:{xs:8,sm:12},pb:{xs:8,sm:12}},children:(0,p.jsx)(n.Z,{title:"Panchangam",children:(0,p.jsx)(s.Z,{headerToolbar:{left:"prev today next",center:"title",right:"multiMonthYear dayGridMonth listMonth"},plugins:[r.Z,i.Z,l.Z],initialView:"dayGridMonth",events:(e,t,a)=>async function(e,t){try{let a;if((new Date(e.end)-new Date(e.start))/864e5>=365){let t=new Date(e.start).getFullYear();a=await k(t,0)}else{let e=new Date(S).getFullYear(),t=new Date(S).getMonth()+1;a=await k(e,t<=9?"0"+t:t)}t(a.default.map((e=>({title:e.title,date:e.date}))))}catch(a){console.log(a)}}(e,t),datesSet:e=>async function(e){j(e.view.currentStart)}(e)})})})})]})}}}]);