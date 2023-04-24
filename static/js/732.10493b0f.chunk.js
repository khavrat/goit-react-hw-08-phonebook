"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[732],{1732:function(e,r,n){n.r(r),n.d(r,{default:function(){return y}});var t=n(5861),a=n(9439),i=n(7757),l=n.n(i),s=n(2791),o=n(9434),u=n(5822),c=n(7689),d=n(3541),m=n(9699),p=n(9085),f=n(2392),h=n(8208),v=n(5442),x=n(4125),Z=n(6192),g=n(7806),I=n(4224),j=n(3329);var N=function(){var e=(0,s.useState)(""),r=(0,a.Z)(e,2),n=r[0],i=r[1],N=(0,s.useState)(""),y=(0,a.Z)(N,2),_=y[0],E=y[1],w=(0,s.useState)(!1),k=(0,a.Z)(w,2),b=k[0],S=k[1],q=(0,s.useState)(!1),C=(0,a.Z)(q,2),G=C[0],L=C[1],R=(0,s.useState)(!1),A=(0,a.Z)(R,2),F=A[0],z=A[1],J=(0,o.I0)(),M=(0,o.v9)(d.Qb),P=(0,c.s0)();(0,s.useEffect)((function(){if(M)return P("/contacts")}),[M,P]);var B=function(e){var r=e.currentTarget,n=r.name,t=r.value;switch(n){case"email":i(t),S(!1);break;case"password":E(t),L(!1);break;default:return void console.log("input value: error")}},Q=function(){b&&i(""),G&&E(""),b||G||(i(""),E(""))},$=function(e){S(!/^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/.test(n))},D=function(e){L(!/^(?=.*\d).{6,}$/.test(_))},H=function(){var e=(0,t.Z)(l().mark((function e(r){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),$(),D(),Q(),b||G){e.next=15;break}return e.prev=5,e.next=8,J(u.Z.logIn({email:n,password:_}));case 8:null!==(t=e.sent)?(p.Am.error(t.payload),Q()):Q(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(r){return e.apply(this,arguments)}}();return(0,j.jsx)(m.Z,{children:(0,j.jsx)("form",{onSubmit:H,children:(0,j.jsxs)(f.NI,{isRequired:!0,isInvalid:b||G,children:[(0,j.jsx)(h.l,{htmlFor:"email",children:"Email"}),(0,j.jsx)(v.I,{type:"email",placeholder:"Enter email",name:"email",value:n,id:"email-login",autoComplete:"off",onChange:B,required:!0,isInvalid:b,onBlur:$}),b?(0,j.jsx)(x.J1,{children:"Email is required"}):(0,j.jsx)(f.Q6,{children:"Enter the email"}),(0,j.jsx)(h.l,{htmlFor:"password",children:"Password"}),(0,j.jsxs)(Z.B,{children:[(0,j.jsx)(v.I,{pr:"4.5rem",type:F?"text":"password",placeholder:"Enter password",name:"password",value:_,id:"password-login",autoComplete:"off",onChange:B,required:!0,isInvalid:G,onBlur:D}),(0,j.jsx)(g.x,{width:"4.5rem",children:(0,j.jsx)(I.z,{h:"1.75rem",size:"sm",onClick:function(){return z(!F)},children:F?"Hide":"Show"})})," "]}),G?(0,j.jsx)(x.J1,{children:"Password is required."}):(0,j.jsx)(f.Q6,{children:"Password must have at least 6 characters and at least one digit"}),(0,j.jsx)(I.z,{type:"submit",children:"Log in"})]})})})},y=function(){return(0,j.jsx)(N,{})}},4125:function(e,r,n){n.d(r,{J1:function(){return Z}});var t=n(1413),a=n(9439),i=n(2392),l=n(4363),s=n(9886),o=n(7872),u=n(9219),c=n(2996),d=n(7869),m=n(6992),p=n(3329),f=(0,s.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),h=(0,a.Z)(f,2),v=h[0],x=h[1],Z=(0,o.G)((function(e,r){var n=(0,u.jC)("FormError",e),a=(0,c.Lr)(e),l=(0,i.NJ)();return(null==l?void 0:l.isInvalid)?(0,p.jsx)(v,{value:n,children:(0,p.jsx)(d.m.div,(0,t.Z)((0,t.Z)({},null==l?void 0:l.getErrorMessageProps(a,r)),{},{className:(0,m.cx)("chakra-form__error-message",e.className),__css:(0,t.Z)({display:"flex",alignItems:"center"},n.text)}))}):null}));Z.displayName="FormErrorMessage",(0,o.G)((function(e,r){var n=x(),a=(0,i.NJ)();if(!(null==a?void 0:a.isInvalid))return null;var s=(0,m.cx)("chakra-form__error-icon",e.className);return(0,p.jsx)(l.J,(0,t.Z)((0,t.Z)({ref:r,"aria-hidden":!0},e),{},{__css:n.icon,className:s,children:(0,p.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})}))})).displayName="FormErrorIcon"},8208:function(e,r,n){n.d(r,{l:function(){return p}});var t=n(1413),a=n(4925),i=n(2392),l=n(7872),s=n(9219),o=n(2996),u=n(7869),c=n(6992),d=n(3329),m=["className","children","requiredIndicator","optionalIndicator"],p=(0,l.G)((function(e,r){var n,l=(0,s.mq)("FormLabel",e),p=(0,o.Lr)(e),h=(p.className,p.children),v=p.requiredIndicator,x=void 0===v?(0,d.jsx)(f,{}):v,Z=p.optionalIndicator,g=void 0===Z?null:Z,I=(0,a.Z)(p,m),j=(0,i.NJ)(),N=null!=(n=null==j?void 0:j.getLabelProps(I,r))?n:(0,t.Z)({ref:r},I);return(0,d.jsxs)(u.m.label,(0,t.Z)((0,t.Z)({},N),{},{className:(0,c.cx)("chakra-form__label",p.className),__css:(0,t.Z)({display:"block",textAlign:"start"},l),children:[h,(null==j?void 0:j.isRequired)?x:g]}))}));p.displayName="FormLabel";var f=(0,l.G)((function(e,r){var n=(0,i.NJ)(),a=(0,i.e)();if(!(null==n?void 0:n.isRequired))return null;var l=(0,c.cx)("chakra-form__required-indicator",e.className);return(0,d.jsx)(u.m.span,(0,t.Z)((0,t.Z)({},null==n?void 0:n.getRequiredIndicatorProps(e,r)),{},{__css:a.requiredIndicator,className:l}))}));f.displayName="RequiredIndicator"},6192:function(e,r,n){n.d(r,{B:function(){return I},m:function(){return g}});var t=n(1413),a=n(4925),i=n(9439),l=n(9886),s=n(2791);var o=n(7872),u=n(9219),c=n(2996),d=n(7869),m=n(6992),p=n(5246),f=n(3329),h=["children","className"],v=(0,l.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),x=(0,i.Z)(v,2),Z=x[0],g=x[1],I=(0,o.G)((function(e,r){var n=(0,u.jC)("Input",e),i=(0,c.Lr)(e),l=i.children,o=i.className,v=(0,a.Z)(i,h),x=(0,m.cx)("chakra-input__group",o),g={},I=function(e){return s.Children.toArray(e).filter((function(e){return(0,s.isValidElement)(e)}))}(l),j=n.field;I.forEach((function(e){var r,t;n&&(j&&"InputLeftElement"===e.type.id&&(g.paddingStart=null!=(r=j.height)?r:j.h),j&&"InputRightElement"===e.type.id&&(g.paddingEnd=null!=(t=j.height)?t:j.h),"InputRightAddon"===e.type.id&&(g.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(g.borderStartRadius=0))}));var N=I.map((function(r){var n,t,a=(0,p.oA)({size:(null==(n=r.props)?void 0:n.size)||e.size,variant:(null==(t=r.props)?void 0:t.variant)||e.variant});return"Input"!==r.type.id?(0,s.cloneElement)(r,a):(0,s.cloneElement)(r,Object.assign(a,g,r.props))}));return(0,f.jsx)(d.m.div,(0,t.Z)((0,t.Z)({className:x,ref:r,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0},v),{},{children:(0,f.jsx)(Z,{value:n,children:N})}))}));I.displayName="InputGroup"},7806:function(e,r,n){n.d(r,{Z:function(){return v},x:function(){return x}});var t=n(4942),a=n(1413),i=n(4925),l=n(6192),s=n(7869),o=n(7872),u=n(6992),c=n(3329),d=["placement"],m=["className"],p=["className"],f=(0,s.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),h=(0,o.G)((function(e,r){var n,s,o,u=e.placement,m=void 0===u?"left":u,p=(0,i.Z)(e,d),h=(0,l.m)(),v=h.field,x="left"===m?"insetStart":"insetEnd",Z=(0,a.Z)((n={},(0,t.Z)(n,x,"0"),(0,t.Z)(n,"width",null!=(s=null==v?void 0:v.height)?s:null==v?void 0:v.h),(0,t.Z)(n,"height",null!=(o=null==v?void 0:v.height)?o:null==v?void 0:v.h),(0,t.Z)(n,"fontSize",null==v?void 0:v.fontSize),n),h.element);return(0,c.jsx)(f,(0,a.Z)({ref:r,__css:Z},p))}));h.id="InputElement",h.displayName="InputElement";var v=(0,o.G)((function(e,r){var n=e.className,t=(0,i.Z)(e,m),l=(0,u.cx)("chakra-input__left-element",n);return(0,c.jsx)(h,(0,a.Z)({ref:r,placement:"left",className:l},t))}));v.id="InputLeftElement",v.displayName="InputLeftElement";var x=(0,o.G)((function(e,r){var n=e.className,t=(0,i.Z)(e,p),l=(0,u.cx)("chakra-input__right-element",n);return(0,c.jsx)(h,(0,a.Z)({ref:r,placement:"right",className:l},t))}));x.id="InputRightElement",x.displayName="InputRightElement"}}]);
//# sourceMappingURL=732.10493b0f.chunk.js.map