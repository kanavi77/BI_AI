(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[486],{27363:function(re,L){"use strict";var s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};L.Z=s},47486:function(re,L,s){"use strict";s.d(L,{Z:function(){return Wt}});var o=s(67294),Z=s(87462),ie=s(27363),le=s(93771),he=function(n,r){return o.createElement(le.Z,(0,Z.Z)({},n,{ref:r,icon:ie.Z}))},U=o.forwardRef(he),y=U,W=s(93967),q=s.n(W),ce=s(20640),ee=s.n(ce),V=s(9220),m=s(50344),X=s(8410),xe=s(21770),P=s(98423),te=s(42550),Je=s(98924),Re=function(n){if((0,Je.Z)()&&window.document.documentElement){var r=Array.isArray(n)?n:[n],t=window.document.documentElement;return r.some(function(i){return i in t.style})}return!1},Qe=function(n,r){if(!Re(n))return!1;var t=document.createElement("div"),i=t.style[n];return t.style[n]=r,t.style[n]!==i};function Ie(e,n){return!Array.isArray(e)&&n!==void 0?Qe(e,n):Re(e)}var de=s(15105),Ge=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const Ye={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"};var Le=o.forwardRef((e,n)=>{const r=g=>{const{keyCode:c}=g;c===de.Z.ENTER&&g.preventDefault()},t=g=>{const{keyCode:c}=g,{onClick:f}=e;c===de.Z.ENTER&&f&&f()},{style:i,noStyle:u,disabled:b}=e,E=Ge(e,["style","noStyle","disabled"]);let d={};return u||(d=Object.assign({},Ye)),b&&(d.pointerEvents="none"),d=Object.assign(Object.assign({},d),i),o.createElement("div",Object.assign({role:"button",tabIndex:0,ref:n},E,{onKeyDown:r,onKeyUp:t,style:d}))}),De=s(53124),qe=s(10110),Oe=s(83062),_e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},et=_e,tt=function(n,r){return o.createElement(le.Z,(0,Z.Z)({},n,{ref:r,icon:et}))},nt=o.forwardRef(tt),ot=nt,rt=s(96159),it=s(70006);const Pe=e=>({color:e.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"&:focus, &:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive}});var lt=s(91945),st=s(78589),at=s(6731);const ct=(e,n,r,t)=>{const{titleMarginBottom:i,fontWeightStrong:u}=t;return{marginBottom:i,color:r,fontWeight:u,fontSize:e,lineHeight:n}},dt=e=>{const n=[1,2,3,4,5],r={};return n.forEach(t=>{r[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `]=ct(e[`fontSizeHeading${t}`],e[`lineHeightHeading${t}`],e.colorTextHeading,e)}),r},ut=e=>{const{componentCls:n}=e;return{"a&, a":Object.assign(Object.assign({},Pe(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},ft=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:st.EV[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),pt=e=>{const{componentCls:n,paddingSM:r}=e,t=r;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(t).mul(-1).equal(),marginBottom:`calc(1em - ${(0,at.bf)(t)})`},[`${n}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},gt=e=>({[`${e.componentCls}-copy-success`]:{[`
    &,
    &:hover,
    &:focus`]:{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),mt=()=>({[`
  a&-ellipsis,
  span&-ellipsis
  `]:{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),yt=e=>{const{componentCls:n,titleMarginTop:r}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${n}-secondary`]:{color:e.colorTextDescription},[`&${n}-success`]:{color:e.colorSuccess},[`&${n}-warning`]:{color:e.colorWarning},[`&${n}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},[`
        div&,
        p
      `]:{marginBottom:"1em"}},dt(e)),{[`
      & + h1${n},
      & + h2${n},
      & + h3${n},
      & + h4${n},
      & + h5${n}
      `]:{marginTop:r},[`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]:{[`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]:{marginTop:r}}}),ft(e)),ut(e)),{[`
        ${n}-expand,
        ${n}-edit,
        ${n}-copy
      `]:Object.assign(Object.assign({},Pe(e)),{marginInlineStart:e.marginXXS})}),pt(e)),gt(e)),mt()),{"&-rtl":{direction:"rtl"}})}},vt=()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"});var $e=(0,lt.I$)("Typography",e=>[yt(e)],vt),bt=e=>{const{prefixCls:n,"aria-label":r,className:t,style:i,direction:u,maxLength:b,autoSize:E=!0,value:d,onSave:g,onCancel:c,onEnd:f,component:h,enterIcon:S=o.createElement(ot,null)}=e,C=o.useRef(null),w=o.useRef(!1),$=o.useRef(),[T,M]=o.useState(d);o.useEffect(()=>{M(d)},[d]),o.useEffect(()=>{if(C.current&&C.current.resizableTextArea){const{textArea:D}=C.current.resizableTextArea;D.focus();const{length:I}=D.value;D.setSelectionRange(I,I)}},[]);const x=D=>{let{target:I}=D;M(I.value.replace(/[\n\r]/g,""))},K=()=>{w.current=!0},B=()=>{w.current=!1},j=D=>{let{keyCode:I}=D;w.current||($.current=I)},F=()=>{g(T.trim())},O=D=>{let{keyCode:I,ctrlKey:_,altKey:Q,metaKey:me,shiftKey:ye}=D;$.current===I&&!w.current&&!_&&!Q&&!me&&!ye&&(I===de.Z.ENTER?(F(),f==null||f()):I===de.Z.ESC&&c())},p=()=>{F()},R=h?`${n}-${h}`:"",[J,N,A]=$e(n),ne=q()(n,`${n}-edit-content`,{[`${n}-rtl`]:u==="rtl"},t,R,N,A);return J(o.createElement("div",{className:ne,style:i},o.createElement(it.Z,{ref:C,maxLength:b,value:T,onChange:x,onKeyDown:j,onKeyUp:O,onCompositionStart:K,onCompositionEnd:B,onBlur:p,"aria-label":r,rows:1,autoSize:E}),S!==null?(0,rt.Tm)(S,{className:`${n}-edit-content-confirm`}):null))};function Se(e,n){return o.useMemo(()=>{const r=!!e;return[r,Object.assign(Object.assign({},n),r&&typeof e=="object"?e:null)]},[e])}var Et=(e,n)=>{const r=o.useRef(!1);o.useEffect(()=>{r.current?e():r.current=!0},n)},ht=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r},Me=o.forwardRef((e,n)=>{const{prefixCls:r,component:t="article",className:i,rootClassName:u,setContentRef:b,children:E,direction:d,style:g}=e,c=ht(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:f,direction:h,typography:S}=o.useContext(De.E_),C=d!=null?d:h;let w=n;b&&(w=(0,te.sQ)(n,b));const $=f("typography",r),[T,M,x]=$e($),K=q()($,S==null?void 0:S.className,{[`${$}-rtl`]:C==="rtl"},i,u,M,x),B=Object.assign(Object.assign({},S==null?void 0:S.style),g);return T(o.createElement(t,Object.assign({className:K,style:B,ref:w},c),E))}),xt=s(64894),Ot=s(48820),St=function(n,r){return o.createElement(le.Z,(0,Z.Z)({},n,{ref:r,icon:Ot.Z}))},Ct=o.forwardRef(St),wt=Ct;function Ne(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}function ue(e,n,r){return e===!0||e===void 0?n:e||r&&n}function Tt(e){const{prefixCls:n,copied:r,locale:t={},onCopy:i,iconOnly:u,tooltips:b,icon:E}=e,d=Ne(b),g=Ne(E),{copied:c,copy:f}=t,h=r?ue(d[1],c):ue(d[0],f),C=typeof h=="string"?h:r?c:f;return o.createElement(Oe.Z,{key:"copy",title:h},o.createElement(Le,{className:q()(`${n}-copy`,{[`${n}-copy-success`]:r,[`${n}-copy-icon-only`]:u}),onClick:i,"aria-label":C},r?ue(g[1],o.createElement(xt.Z,null),!0):ue(g[0],o.createElement(wt,null),!0)))}var jt=s(74902);const fe=o.forwardRef((e,n)=>{let{style:r,children:t}=e;const i=o.useRef(null);return o.useImperativeHandle(n,()=>({isExceed:()=>{const u=i.current;return u.scrollHeight>u.clientHeight},getHeight:()=>i.current.clientHeight})),o.createElement("span",{"aria-hidden":!0,ref:i,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},r)},t)});function Ae(e){const n=typeof e;return n==="string"||n==="number"}function Rt(e){let n=0;return e.forEach(r=>{Ae(r)?n+=String(r).length:n+=1}),n}function He(e,n){let r=0;const t=[];for(let i=0;i<e.length;i+=1){if(r===n)return t;const u=e[i],E=Ae(u)?String(u).length:1,d=r+E;if(d>n){const g=n-r;return t.push(String(u).slice(0,g)),t}t.push(u),r=d}return e}const Ce=0,we=1,Te=2,Ze=3,pe={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function It(e){const{enableMeasure:n,width:r,text:t,children:i,rows:u,miscDeps:b,onEllipsis:E}=e,d=o.useMemo(()=>(0,m.Z)(t),[t]),g=o.useMemo(()=>Rt(d),[t]),c=o.useMemo(()=>i(d,!1,!1),[t]),[f,h]=o.useState(null),S=o.useRef(null),C=o.useRef(null),w=o.useRef(null),$=o.useRef(null),[T,M]=o.useState(Ce),[x,K]=o.useState(0);(0,X.Z)(()=>{M(n&&r&&g?we:Ce)},[r,t,u,n,d]),(0,X.Z)(()=>{var O,p,R,J;if(T===we){const N=!!(!((O=C.current)===null||O===void 0)&&O.isExceed());M(N?Te:Ze),h(N?[0,g]:null);const A=((p=C.current)===null||p===void 0?void 0:p.getHeight())||0,ne=u===1?0:((R=w.current)===null||R===void 0?void 0:R.getHeight())||0,D=((J=$.current)===null||J===void 0?void 0:J.getHeight())||0,I=ne+D,_=Math.max(A,I);K(_+1),E(N)}},[T]);const B=f?Math.ceil((f[0]+f[1])/2):0;(0,X.Z)(()=>{var O;const[p,R]=f||[0,0];if(p!==R){const N=(((O=S.current)===null||O===void 0?void 0:O.getHeight())||0)>x;let A=B;R-p===1&&(A=N?p:R),h(N?[p,A]:[A,R])}},[f,B]);const j=o.useMemo(()=>{if(T!==Te||!f||f[0]!==f[1]){const O=i(d,!1,!1);return T!==Ze&&T!==Ce?o.createElement("span",{style:Object.assign(Object.assign({},pe),{WebkitLineClamp:u})},O):O}return i(He(d,f[0]),!0,!0)},[T,f,d].concat((0,jt.Z)(b))),F={width:r,whiteSpace:"normal",margin:0,padding:0};return o.createElement(o.Fragment,null,j,T===we&&o.createElement(o.Fragment,null,o.createElement(fe,{style:Object.assign(Object.assign(Object.assign({},F),pe),{WebkitLineClamp:u}),ref:C},c),o.createElement(fe,{style:Object.assign(Object.assign(Object.assign({},F),pe),{WebkitLineClamp:u-1}),ref:w},c),o.createElement(fe,{style:Object.assign(Object.assign(Object.assign({},F),pe),{WebkitLineClamp:1}),ref:$},i([],!0,!0))),T===Te&&f&&f[0]!==f[1]&&o.createElement(fe,{style:Object.assign(Object.assign({},F),{top:400}),ref:S},i(He(d,B),!0,!0)))}var Lt=e=>{let{enableEllipsis:n,isEllipsis:r,children:t,tooltipProps:i}=e;return!(i!=null&&i.title)||!n?t:o.createElement(Oe.Z,Object.assign({open:r?void 0:!1},i),t)},Dt=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};function Pt(e,n){let{mark:r,code:t,underline:i,delete:u,strong:b,keyboard:E,italic:d}=e,g=n;function c(f,h){h&&(g=o.createElement(f,{},g))}return c("strong",b),c("u",i),c("del",u),c("code",t),c("mark",r),c("kbd",E),c("i",d),g}const $t="...";var ge=o.forwardRef((e,n)=>{var r,t,i;const{prefixCls:u,className:b,style:E,type:d,disabled:g,children:c,ellipsis:f,editable:h,copyable:S,component:C,title:w}=e,$=Dt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:T,direction:M}=o.useContext(De.E_),[x]=(0,qe.Z)("Text"),K=o.useRef(null),B=o.useRef(null),j=T("typography",u),F=(0,P.Z)($,["mark","code","delete","underline","strong","keyboard","italic"]),[O,p]=Se(h),[R,J]=(0,xe.Z)(!1,{value:p.editing}),{triggerType:N=["icon"]}=p,A=l=>{var a;l&&((a=p.onStart)===null||a===void 0||a.call(p)),J(l)};Et(()=>{var l;R||(l=B.current)===null||l===void 0||l.focus()},[R]);const ne=l=>{l==null||l.preventDefault(),A(!0)},D=l=>{var a;(a=p.onChange)===null||a===void 0||a.call(p,l),A(!1)},I=()=>{var l;(l=p.onCancel)===null||l===void 0||l.call(p),A(!1)},[_,Q]=Se(S),[me,ye]=o.useState(!1),je=o.useRef(null),Be={};Q.format&&(Be.format=Q.format);const ke=()=>{je.current&&clearTimeout(je.current)},Kt=l=>{var a;l==null||l.preventDefault(),l==null||l.stopPropagation(),ee()(Q.text||String(c)||"",Be),ye(!0),ke(),je.current=setTimeout(()=>{ye(!1)},3e3),(a=Q.onCopy)===null||a===void 0||a.call(Q,l)};o.useEffect(()=>ke,[]);const[ze,Ft]=o.useState(!1),[Ue,Vt]=o.useState(!1),[We,Xt]=o.useState(!1),[Ke,Jt]=o.useState(!1),[Fe,Qt]=o.useState(!1),[Gt,Yt]=o.useState(!0),[G,v]=Se(f,{expandable:!1}),H=G&&!We,{rows:oe=1}=v,ve=o.useMemo(()=>!H||v.suffix!==void 0||v.onEllipsis||v.expandable||O||_,[H,v,O,_]);(0,X.Z)(()=>{G&&!ve&&(Ft(Ie("webkitLineClamp")),Vt(Ie("textOverflow")))},[ve,G]);const k=o.useMemo(()=>ve?!1:oe===1?Ue:ze,[ve,Ue,ze]),Ve=H&&(k?Fe:Ke),qt=H&&oe===1&&k,be=H&&oe>1&&k,_t=l=>{var a;Xt(!0),(a=v.onExpand)===null||a===void 0||a.call(v,l)},[Xe,en]=o.useState(0),tn=l=>{let{offsetWidth:a}=l;en(a)},nn=l=>{var a;Jt(l),Ke!==l&&((a=v.onEllipsis)===null||a===void 0||a.call(v,l))};o.useEffect(()=>{const l=K.current;if(G&&k&&l){const a=be?l.offsetHeight<l.scrollHeight:l.offsetWidth<l.scrollWidth;Fe!==a&&Qt(a)}},[G,k,c,be,Gt,Xe]),o.useEffect(()=>{const l=K.current;if(typeof IntersectionObserver=="undefined"||!l||!k||!H)return;const a=new IntersectionObserver(()=>{Yt(!!l.offsetParent)});return a.observe(l),()=>{a.disconnect()}},[k,H]);let Y={};v.tooltip===!0?Y={title:(r=p.text)!==null&&r!==void 0?r:c}:o.isValidElement(v.tooltip)?Y={title:v.tooltip}:typeof v.tooltip=="object"?Y=Object.assign({title:(t=p.text)!==null&&t!==void 0?t:c},v.tooltip):Y={title:v.tooltip};const Ee=o.useMemo(()=>{const l=a=>["string","number"].includes(typeof a);if(!(!G||k)){if(l(p.text))return p.text;if(l(c))return c;if(l(w))return w;if(l(Y.title))return Y.title}},[G,k,w,Y.title,Ve]);if(R)return o.createElement(bt,{value:(i=p.text)!==null&&i!==void 0?i:typeof c=="string"?c:"",onSave:D,onCancel:I,onEnd:p.onEnd,prefixCls:j,className:b,style:E,direction:M,component:C,maxLength:p.maxLength,autoSize:p.autoSize,enterIcon:p.enterIcon});const on=()=>{const{expandable:l,symbol:a}=v;if(!l)return null;let z;return a?z=a:z=x==null?void 0:x.expand,o.createElement("a",{key:"expand",className:`${j}-expand`,onClick:_t,"aria-label":x==null?void 0:x.expand},z)},rn=()=>{if(!O)return;const{icon:l,tooltip:a}=p,z=(0,m.Z)(a)[0]||(x==null?void 0:x.edit),ae=typeof z=="string"?z:"";return N.includes("icon")?o.createElement(Oe.Z,{key:"edit",title:a===!1?"":z},o.createElement(Le,{ref:B,className:`${j}-edit`,onClick:ne,"aria-label":ae},l||o.createElement(y,{role:"button"}))):null},ln=()=>_?o.createElement(Tt,Object.assign({key:"copy"},Q,{prefixCls:j,copied:me,locale:x,onCopy:Kt,iconOnly:c==null})):null,sn=l=>[l&&on(),rn(),ln()],an=l=>[l&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},$t),v.suffix,sn(l)];return o.createElement(V.Z,{onResize:tn,disabled:!H},l=>o.createElement(Lt,{tooltipProps:Y,enableEllipsis:H,isEllipsis:Ve},o.createElement(Me,Object.assign({className:q()({[`${j}-${d}`]:d,[`${j}-disabled`]:g,[`${j}-ellipsis`]:G,[`${j}-single-line`]:H&&oe===1,[`${j}-ellipsis-single-line`]:qt,[`${j}-ellipsis-multiple-line`]:be},b),prefixCls:u,style:Object.assign(Object.assign({},E),{WebkitLineClamp:be?oe:void 0}),component:C,ref:(0,te.sQ)(l,K,n),direction:M,onClick:N.includes("text")?ne:void 0,"aria-label":Ee==null?void 0:Ee.toString(),title:w},F),o.createElement(It,{enableMeasure:H&&!k,text:c,rows:oe,width:Xe,onEllipsis:nn,miscDeps:[me,We]},(a,z)=>{let ae=a;return a.length&&z&&Ee&&(ae=o.createElement("span",{key:"show-content","aria-hidden":!0},ae)),Pt(e,o.createElement(o.Fragment,null,ae,an(z)))}))))}),Mt=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r},Nt=o.forwardRef((e,n)=>{var{ellipsis:r,rel:t}=e,i=Mt(e,["ellipsis","rel"]);const u=Object.assign(Object.assign({},i),{rel:t===void 0&&i.target==="_blank"?"noopener noreferrer":t});return delete u.navigate,o.createElement(ge,Object.assign({},u,{ref:n,ellipsis:!!r,component:"a"}))}),At=o.forwardRef((e,n)=>o.createElement(ge,Object.assign({ref:n},e,{component:"div"}))),Ht=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const Zt=(e,n)=>{var{ellipsis:r}=e,t=Ht(e,["ellipsis"]);const i=o.useMemo(()=>r&&typeof r=="object"?(0,P.Z)(r,["expandable","rows"]):r,[r]);return o.createElement(ge,Object.assign({ref:n},t,{ellipsis:i,component:"span"}))};var Bt=o.forwardRef(Zt),kt=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const zt=[1,2,3,4,5];var Ut=o.forwardRef((e,n)=>{const{level:r=1}=e,t=kt(e,["level"]);let i;return zt.includes(r)?i=`h${r}`:i="h1",o.createElement(ge,Object.assign({ref:n},t,{component:i}))});const se=Me;se.Text=Bt,se.Link=Nt,se.Title=Ut,se.Paragraph=At;var Wt=se},20640:function(re,L,s){"use strict";var o=s(11742),Z={"text/plain":"Text","text/html":"Url",default:"Text"},ie="Copy to clipboard: #{key}, Enter";function le(U){var y=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return U.replace(/#{\s*key\s*}/g,y)}function he(U,y){var W,q,ce,ee,V,m,X=!1;y||(y={}),W=y.debug||!1;try{ce=o(),ee=document.createRange(),V=document.getSelection(),m=document.createElement("span"),m.textContent=U,m.ariaHidden="true",m.style.all="unset",m.style.position="fixed",m.style.top=0,m.style.clip="rect(0, 0, 0, 0)",m.style.whiteSpace="pre",m.style.webkitUserSelect="text",m.style.MozUserSelect="text",m.style.msUserSelect="text",m.style.userSelect="text",m.addEventListener("copy",function(P){if(P.stopPropagation(),y.format)if(P.preventDefault(),typeof P.clipboardData=="undefined"){W&&console.warn("unable to use e.clipboardData"),W&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var te=Z[y.format]||Z.default;window.clipboardData.setData(te,U)}else P.clipboardData.clearData(),P.clipboardData.setData(y.format,U);y.onCopy&&(P.preventDefault(),y.onCopy(P.clipboardData))}),document.body.appendChild(m),ee.selectNodeContents(m),V.addRange(ee);var xe=document.execCommand("copy");if(!xe)throw new Error("copy command was unsuccessful");X=!0}catch(P){W&&console.error("unable to copy using execCommand: ",P),W&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(y.format||"text",U),y.onCopy&&y.onCopy(window.clipboardData),X=!0}catch(te){W&&console.error("unable to copy using clipboardData: ",te),W&&console.error("falling back to prompt"),q=le("message"in y?y.message:ie),window.prompt(q,U)}}finally{V&&(typeof V.removeRange=="function"?V.removeRange(ee):V.removeAllRanges()),m&&document.body.removeChild(m),ce()}return X}re.exports=he},11742:function(re){re.exports=function(){var L=document.getSelection();if(!L.rangeCount)return function(){};for(var s=document.activeElement,o=[],Z=0;Z<L.rangeCount;Z++)o.push(L.getRangeAt(Z));switch(s.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":s.blur();break;default:s=null;break}return L.removeAllRanges(),function(){L.type==="Caret"&&L.removeAllRanges(),L.rangeCount||o.forEach(function(ie){L.addRange(ie)}),s&&s.focus()}}}}]);
