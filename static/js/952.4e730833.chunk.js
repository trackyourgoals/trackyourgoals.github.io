"use strict";(self.webpackChunkwatching_eagle_goalkeeper=self.webpackChunkwatching_eagle_goalkeeper||[]).push([[952],{2889:function(e,n,t){var r=t(7313);n.Z=()=>{const e=(0,r.useRef)(!0);return(0,r.useEffect)((()=>()=>{e.current=!1}),[]),e}},5184:function(e,n,t){var r=t(5898),i=t(1113),s=t(891),a=t(6417);n.Z=()=>(0,a.jsxs)(r.Z,{direction:"row",justifyContent:"space-between",children:[(0,a.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://watchingeagle.com",target:"_blank",underline:"hover",children:"watchingeagle.com"}),(0,a.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://watchingeagle.com",target:"_blank",underline:"hover",children:"\xa9 watchingeagle.com"})]})},5602:function(e,n,t){var r=t(7829),i=t(3497),s=t(6417);n.Z=e=>{let{children:n,...t}=e;return(0,s.jsx)(i.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...t,children:(0,s.jsx)(r.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:n})})}},547:function(e,n,t){const r=(0,t(7592).ZP)("div")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.primary.light,minHeight:"100vh"}}));n.Z=r},9952:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r=t(9466),i=t(9860),s=t(4813),a=t(9019),l=t(5898),o=t(1113),c=t(9536),d=t(547),m=t(5602),h=t(7313),u=t(7829),x=t(1550),g=t(3306),j=t(7843),Z=t(5480),p=t(1727),w=t(7131),b=t(3929),f=t(4758),v=t(9099),y=t(3463),P=t(9429),C=t(2889),k=t(976),S=t(237),I=t(2611),E=t(8394),B=t.n(E),_=t(4791),U=t(6417);var D=e=>{let{...n}=e;const{login:t}=(0,_.a)(),r=(0,i.Z)(),s=(0,C.Z)(),[c,d]=(0,h.useState)(!0),[m,E]=(0,h.useState)(!1),D=()=>{E(!m)},W=e=>{e.preventDefault()},[,q]=(0,h.useState)(null),A=async function(e,n){const r=e,i=n;try{const e=await B().User.logIn(r,i),n=await B().User.current();return console.log(e===n),await t({usernameValue:r}),async function(){const e=await B().User.current();q(e)}(),!0}catch(s){return alert(`Error! ${s.message}`),!1}};return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(a.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:(0,U.jsx)(a.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,U.jsx)(u.Z,{sx:{mb:2},children:(0,U.jsx)(o.Z,{variant:"subtitle1",children:"Sign in with Email address"})})})}),(0,U.jsx)(P.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:y.Ry().shape({email:y.Z_().email("Must be a valid email").max(255).required("Email is required"),password:y.Z_().max(255).required("Password is required")}),onSubmit:async(e,n)=>{let{setErrors:t,setStatus:r,setSubmitting:i}=n;try{s.current&&(r({success:!0}),i(!1),A(e.email,e.password))}catch(a){console.error(a),s.current&&(r({success:!1}),t({submit:a.message}),i(!1))}},children:e=>{let{errors:t,handleBlur:i,handleChange:s,handleSubmit:a,isSubmitting:h,touched:y,values:P}=e;return(0,U.jsxs)("form",{noValidate:!0,onSubmit:a,...n,children:[(0,U.jsxs)(x.Z,{fullWidth:!0,error:Boolean(y.email&&t.email),sx:{...r.typography.customInput},children:[(0,U.jsx)(g.Z,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),(0,U.jsx)(j.Z,{id:"outlined-adornment-email-login",type:"email",value:P.email,name:"email",onBlur:i,onChange:s,label:"Email Address / Username",inputProps:{}}),y.email&&t.email&&(0,U.jsx)(Z.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:t.email})]}),(0,U.jsxs)(x.Z,{fullWidth:!0,error:Boolean(y.password&&t.password),sx:{...r.typography.customInput},children:[(0,U.jsx)(g.Z,{htmlFor:"outlined-adornment-password-login",children:"Password"}),(0,U.jsx)(j.Z,{id:"outlined-adornment-password-login",type:m?"text":"password",value:P.password,name:"password",onBlur:i,onChange:s,endAdornment:(0,U.jsx)(p.Z,{position:"end",children:(0,U.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:D,onMouseDown:W,edge:"end",size:"large",children:m?(0,U.jsx)(S.Z,{}):(0,U.jsx)(I.Z,{})})}),label:"Password",inputProps:{}}),y.password&&t.password&&(0,U.jsx)(Z.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:t.password})]}),(0,U.jsxs)(l.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[(0,U.jsx)(b.Z,{control:(0,U.jsx)(f.Z,{checked:c,onChange:e=>d(e.target.checked),name:"checked",color:"primary"}),label:"Remember me"}),(0,U.jsx)(o.Z,{variant:"subtitle1",color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},children:"Forgot Password?"})]}),t.submit&&(0,U.jsx)(u.Z,{sx:{mt:3},children:(0,U.jsx)(Z.Z,{error:!0,children:t.submit})}),(0,U.jsx)(u.Z,{sx:{mt:2},children:(0,U.jsx)(k.Z,{children:(0,U.jsx)(v.Z,{disableElevation:!0,disabled:h,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]})}})]})},W=t(1665),q=t(5184);var A=()=>{const e=(0,i.Z)(),n=(0,s.Z)(e.breakpoints.down("md"));return(0,U.jsx)(d.Z,{children:(0,U.jsxs)(a.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,U.jsx)(a.ZP,{item:!0,xs:12,children:(0,U.jsx)(a.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,U.jsx)(a.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,U.jsx)(m.Z,{children:(0,U.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,U.jsx)(a.ZP,{item:!0,sx:{mb:3},children:(0,U.jsx)(r.rU,{to:"#",children:(0,U.jsx)(W.Z,{})})}),(0,U.jsx)(a.ZP,{item:!0,xs:12,children:(0,U.jsx)(a.ZP,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,U.jsx)(a.ZP,{item:!0,children:(0,U.jsxs)(l.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,U.jsx)(o.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Hi, Welcome Back"}),(0,U.jsx)(o.Z,{variant:"caption",fontSize:"16px",textAlign:n?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,U.jsx)(a.ZP,{item:!0,xs:12,children:(0,U.jsx)(D,{})}),(0,U.jsx)(a.ZP,{item:!0,xs:12,children:(0,U.jsx)(c.Z,{})}),(0,U.jsx)(a.ZP,{item:!0,xs:12,children:(0,U.jsx)(a.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,U.jsx)(o.Z,{component:r.rU,to:"/register",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),(0,U.jsx)(a.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,U.jsx)(q.Z,{})})]})})}}}]);