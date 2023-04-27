"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[732],{1732:function(e,r,n){n.r(r),n.d(r,{default:function(){return y}});var a=n(5062),s=n(5861),t=n(9439),o=n(7757),i=n.n(o),l=n(2791),c=n(9434),u=n(5822),d=n(7689),m=n(3541),h=n(9699),p=n(9085),f=n(1252),x=n(2392),v=n(8208),j=n(5442),w=n(4125),g=n(311),Z=n(7806),k=n(4224),E=n(9436),I=n(3329);var b=function(){var e=(0,l.useState)(""),r=(0,t.Z)(e,2),n=r[0],a=r[1],o=(0,l.useState)(""),b=(0,t.Z)(o,2),y=b[0],_=b[1],S=(0,l.useState)(!1),C=(0,t.Z)(S,2),N=C[0],F=C[1],M=(0,l.useState)(!1),J=(0,t.Z)(M,2),q=J[0],A=J[1],z=(0,l.useState)(!1),P=(0,t.Z)(z,2),B=P[0],Q=P[1],G=(0,c.I0)(),L=(0,c.v9)(m.Qb),U=(0,d.s0)(),W=(0,f.If)().colorMode;(0,l.useEffect)((function(){if(L)return U("/contacts")}),[L,U]);var $=function(e){var r=e.currentTarget,n=r.name,s=r.value;switch(n){case"email":a(s),F(!1);break;case"password":_(s),A(!1);break;default:return void console.log("input value: error")}},D=function(){N&&a(""),q&&_(""),N||q||(a(""),_(""))},H=function(e){F(!/^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/.test(n))},R=function(e){A(!/^(?=.*\d).{6,}$/.test(y))},T=function(){var e=(0,s.Z)(i().mark((function e(r){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),H(),R(),D(),N||q){e.next=15;break}return e.prev=5,e.next=8,G(u.Z.logIn({email:n,password:y}));case 8:null!==(a=e.sent)?(p.Am.error(a.payload),D()):D(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(r){return e.apply(this,arguments)}}();return(0,I.jsx)(h.Z,{children:(0,I.jsx)("form",{onSubmit:T,children:(0,I.jsxs)(x.NI,{isRequired:!0,isInvalid:N||q,children:[(0,I.jsx)(v.l,{htmlFor:"email",children:"Email"}),(0,I.jsx)(j.I,{bg:(0,E.pU)(W),type:"email",placeholder:"Enter email",name:"email",value:n,id:"email-login",autoComplete:"off",onChange:$,required:!0,isInvalid:N,onBlur:H}),N?(0,I.jsx)(w.J1,{children:"Email is required"}):(0,I.jsx)(x.Q6,{children:"Enter the email"}),(0,I.jsx)(v.l,{mt:"50px",htmlFor:"password",children:"Password"}),(0,I.jsxs)(g.B,{children:[(0,I.jsx)(j.I,{bg:(0,E.pU)(W),pr:"4.5rem",type:B?"text":"password",placeholder:"Enter password",name:"password",value:y,id:"password-login",autoComplete:"off",onChange:$,required:!0,isInvalid:q,onBlur:R}),(0,I.jsx)(Z.x,{width:"4.5rem",children:(0,I.jsx)(k.z,{h:"1.75rem",size:"sm",onClick:function(){return Q(!B)},children:B?"Hide":"Show"})})," "]}),q?(0,I.jsx)(w.J1,{children:"Password is not complete and it is required"}):(0,I.jsx)(x.Q6,{children:"Password must have at least 6 characters and at least one digit"}),(0,I.jsx)(k.z,{mt:"30px",type:"submit",colorScheme:"blue",size:"sm",children:"Log in"})]})})})},y=function(){return(0,I.jsx)(a.W,{as:"section",maxWidth:"4xl",py:"20px",children:(0,I.jsx)(b,{})})}},4125:function(e,r,n){n.d(r,{J1:function(){return j}});var a=n(1413),s=n(9439),t=n(2392),o=n(4363),i=n(9886),l=n(7872),c=n(9219),u=n(2996),d=n(6923),m=n(6992),h=n(3329),p=(0,i.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),f=(0,s.Z)(p,2),x=f[0],v=f[1],j=(0,l.G)((function(e,r){var n=(0,c.jC)("FormError",e),s=(0,u.Lr)(e),o=(0,t.NJ)();return(null==o?void 0:o.isInvalid)?(0,h.jsx)(x,{value:n,children:(0,h.jsx)(d.m.div,(0,a.Z)((0,a.Z)({},null==o?void 0:o.getErrorMessageProps(s,r)),{},{className:(0,m.cx)("chakra-form__error-message",e.className),__css:(0,a.Z)({display:"flex",alignItems:"center"},n.text)}))}):null}));j.displayName="FormErrorMessage",(0,l.G)((function(e,r){var n=v(),s=(0,t.NJ)();if(!(null==s?void 0:s.isInvalid))return null;var i=(0,m.cx)("chakra-form__error-icon",e.className);return(0,h.jsx)(o.J,(0,a.Z)((0,a.Z)({ref:r,"aria-hidden":!0},e),{},{__css:n.icon,className:i,children:(0,h.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})}))})).displayName="FormErrorIcon"}}]);
//# sourceMappingURL=732.ceb64bd0.chunk.js.map