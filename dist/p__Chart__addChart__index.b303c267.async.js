"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[459],{85426:function(G,P,e){e.r(P);var y=e(15009),E=e.n(y),B=e(97857),i=e.n(B),I=e(99289),u=e.n(I),M=e(5574),g=e.n(M),f=e(68400),b=e.n(f),v=e(56071),O=e(8166),x=e(88484),w=e(4393),d=e(14726),$=e(24311),S=e(83863),Q=e(72708),L=e(96074),C=e(2453),W=e(71230),F=e(15746),j=e(98138),J=e(78957),K=e(9482),N=e(67294),h=e(15437),r=e(85893),T,z,A,a,t,s,l,n,o,Z,p,c=(0,h.F4)(T||(T=b()([`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`]))),_=(0,h.F4)(z||(z=b()([`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(20px); }
`]))),D=(0,h.ZP)(w.Z)(A||(A=b()([`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: `,` 0.5s ease-in-out;

  &.ant-card-bordered {
    border: none;
  }

  .ant-card-head {
    background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
    color: #fff;
    border: none;

    .ant-card-head-title {
      font-weight: 700;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  .ant-card-body {
    padding: 24px;
  }
`])),c),_e=(0,h.ZP)(d.ZP)(a||(a=b()([`
  background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
  border: none;
  color: #fff;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`]))),ie=(0,h.ZP)($.Z)(t||(t=b()([`
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: #6a11cb;
    box-shadow: 0 0 0 2px rgba(106, 17, 203, 0.2);
  }
`]))),oe=(0,h.ZP)($.Z.TextArea)(s||(s=b()([`
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: #6a11cb;
    box-shadow: 0 0 0 2px rgba(106, 17, 203, 0.2);
  }
`]))),le=(0,h.ZP)(S.Z)(l||(l=b()([`
  .ant-select-selector {
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      border-color: #6a11cb;
      box-shadow: 0 0 0 2px rgba(106, 17, 203, 0.2);
    }
  }
`]))),ue=(0,h.ZP)(Q.Z)(n||(n=b()([`
  .ant-upload.ant-upload-select-picture-card {
    border-radius: 4px;
    border: 1px dashed #d9d9d9;
    transition: all 0.3s ease;

    &:hover {
      border-color: #6a11cb;
    }
  }
`]))),de=(0,h.ZP)(L.Z)(o||(o=b()([`
  margin: 24px 0;
  border-color: #d9d9d9;
`]))),X=h.ZP.div(Z||(Z=b()([`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: `,` 0.5s ease-in-out;
`])),c),q=h.ZP.div(p||(p=b()([`
  width: 40px;
  height: 40px;
  border: 5px solid #6a11cb;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`]))),pe=function(){var V,ce=(0,N.useState)(),ee=g()(ce,2),U=ee[0],ne=ee[1],me=(0,N.useState)(!1),re=g()(me,2),k=re[0],ae=re[1],he=function(){var be=u()(E()().mark(function te(Y){var se,H,R;return E()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(!k){m.next=2;break}return m.abrupt("return");case 2:return ae(!0),ne(void 0),se=i()(i()({},Y),{},{file:void 0}),m.prev=5,m.next=8,(0,O.J)();case 8:if(H=m.sent,console.log("Score: "+H.data),!(H.data<5)){m.next=14;break}C.ZP.error("Insufficient score, please contact the administrator!"),m.next=18;break;case 14:return m.next=16,(0,v.P6)(se,{},Y.file.file.originFileObj);case 16:R=m.sent,R!=null&&R.data?(C.ZP.success("Analysis successful"),ne(R.data)):C.ZP.error("Analysis failed: "+R.message);case 18:m.next=23;break;case 20:m.prev=20,m.t0=m.catch(5),C.ZP.error("Analysis failed"+m.t0.message);case 23:ae(!1);case 24:case"end":return m.stop()}},te,null,[[5,20]])}));return function(Y){return be.apply(this,arguments)}}(),fe={labelAlign:"left",labelCol:{span:6},wrapperCol:{span:16}};return(0,r.jsx)("div",{className:"add-chart",children:(0,r.jsxs)(W.Z,{gutter:[24,24],children:[(0,r.jsx)(F.Z,{xs:24,md:16,children:(0,r.jsx)(D,{title:"Intelligent Analysis",headStyle:{borderRadius:"4px 4px 0 0"},bodyStyle:{padding:"24px"},children:(0,r.jsxs)(j.Z,i()(i()({name:"add-chart"},fe),{},{onFinish:he,initialValues:{"input-number":3,"checkbox-group":["A","B"],rate:3.5,"color-picker":null},style:{maxWidth:800},children:[(0,r.jsx)(j.Z.Item,{label:(0,r.jsx)("span",{style:{fontWeight:500},children:"Analysis Target"}),name:"goal",rules:[{required:!0}],children:(0,r.jsx)(oe,{placeholder:"Please enter your analysis request, e.g., analyze product sales",rows:4})}),(0,r.jsx)(j.Z.Item,{label:(0,r.jsx)("span",{style:{fontWeight:500},children:"Chart Name"}),name:"chartName",rules:[{required:!0}],children:(0,r.jsx)(ie,{placeholder:"Please enter your chart name"})}),(0,r.jsx)(j.Z.Item,{name:"chartType",label:(0,r.jsx)("span",{style:{fontWeight:500},children:"\xA0\xA0\xA0Chart Type"}),children:(0,r.jsx)(le,{options:[{value:"Line Chart",label:"Line Chart"},{value:"Bar Chart",label:"Bar Chart"},{value:"Scatter Plot",label:"Scatter Plot"},{value:"Pie Chart",label:"Pie Chart"},{value:"Stacked Chart",label:"Stacked Chart"},{value:"Radar Chart",label:"Radar Chart"}]})}),(0,r.jsx)(j.Z.Item,{name:"file",label:(0,r.jsx)("span",{style:{fontWeight:500},children:"Original Excel Data"}),rules:[{required:!0,message:"Please upload a file"}],children:(0,r.jsx)(ue,{name:"file",maxCount:1,accept:".xls,.xlsx",children:(0,r.jsx)(d.ZP,{icon:(0,r.jsx)(x.Z,{}),children:"Upload Excel File"})})}),(0,r.jsx)(j.Z.Item,{wrapperCol:{span:12,offset:6},children:(0,r.jsxs)(J.Z,{children:[(0,r.jsx)(_e,{type:"primary",htmlType:"Submit",loading:k,disabled:k,children:"Submit"}),(0,r.jsx)(d.ZP,{htmlType:"reset",children:"Reset"})]})})]}))})}),(0,r.jsxs)(F.Z,{xs:24,md:8,children:[(0,r.jsxs)(D,{title:"Analysis Conclusion",headStyle:{borderRadius:"4px 4px 0 0"},bodyStyle:{padding:"24px"},children:[(V=U==null?void 0:U.genResult)!==null&&V!==void 0?V:(0,r.jsx)("div",{style:{color:"#888",fontStyle:"italic"},children:"Please submit the form on the left"}),k&&(0,r.jsx)(X,{children:(0,r.jsx)(q,{})})]}),(0,r.jsx)(de,{}),(0,r.jsxs)(D,{title:"Generated Chart",headStyle:{borderRadius:"4px 4px 0 0"},bodyStyle:{padding:"24px",position:"relative"},children:[U!=null&&U.genChart?(0,r.jsx)(K.Z,{option:U==null?void 0:U.genChart}):(0,r.jsx)("div",{style:{color:"#888",fontStyle:"italic"},children:"Please submit the form on the left"}),k&&(0,r.jsx)(X,{children:(0,r.jsx)(q,{})})]})]})]})})};P.default=pe},56071:function(G,P,e){e.d(P,{B9:function(){return z},LY:function(){return F},P6:function(){return $},Tr:function(){return r},ab:function(){return O},nA:function(){return C},oG:function(){return J},y4:function(){return N}});var y=e(52677),E=e.n(y),B=e(15009),i=e.n(B),I=e(97857),u=e.n(I),M=e(99289),g=e.n(M),f=e(80854);function b(a,t){return v.apply(this,arguments)}function v(){return v=_asyncToGenerator(_regeneratorRuntime().mark(function a(t,s){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/chart/add",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},a)})),v.apply(this,arguments)}function O(a,t){return x.apply(this,arguments)}function x(){return x=g()(i()().mark(function a(t,s){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/chart/delete",u()({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},a)})),x.apply(this,arguments)}function w(a,t){return d.apply(this,arguments)}function d(){return d=_asyncToGenerator(_regeneratorRuntime().mark(function a(t,s){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/chart/edit",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},a)})),d.apply(this,arguments)}function $(a,t,s,l){return S.apply(this,arguments)}function S(){return S=g()(i()().mark(function a(t,s,l,n){var o;return i()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=new FormData,l&&o.append("file",l),Object.keys(s).forEach(function(c){var _=s[c];_!=null&&(E()(_)==="object"&&!(_ instanceof File)?_ instanceof Array?_.forEach(function(D){return o.append(c,D||"")}):o.append(c,JSON.stringify(_)):o.append(c,_))}),p.abrupt("return",(0,f.request)("/api/chart/gen",u()({method:"POST",params:u()({},t),data:o,requestType:"form"},n||{})));case 4:case"end":return p.stop()}},a)})),S.apply(this,arguments)}function Q(a,t,s,l){return L.apply(this,arguments)}function L(){return L=_asyncToGenerator(_regeneratorRuntime().mark(function a(t,s,l,n){var o;return _regeneratorRuntime().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=new FormData,l&&o.append("file",l),Object.keys(s).forEach(function(c){var _=s[c];_!=null&&(_typeof(_)==="object"&&!(_ instanceof File)?_ instanceof Array?_.forEach(function(D){return o.append(c,D||"")}):o.append(c,JSON.stringify(_)):o.append(c,_))}),p.abrupt("return",request("/api/chart/gen/async",_objectSpread({method:"POST",params:_objectSpread({},t),data:o,requestType:"form"},n||{})));case 4:case"end":return p.stop()}},a)})),L.apply(this,arguments)}function C(a,t,s,l){return W.apply(this,arguments)}function W(){return W=g()(i()().mark(function a(t,s,l,n){var o;return i()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=new FormData,l&&o.append("file",l),Object.keys(s).forEach(function(c){var _=s[c];_!=null&&(E()(_)==="object"&&!(_ instanceof File)?_ instanceof Array?_.forEach(function(D){return o.append(c,D||"")}):o.append(c,JSON.stringify(_)):o.append(c,_))}),p.abrupt("return",(0,f.request)("/api/chart/gen/async/mq",u()({method:"POST",params:u()({},t),data:o,requestType:"form"},n||{})));case 4:case"end":return p.stop()}},a)})),W.apply(this,arguments)}function F(a,t){return j.apply(this,arguments)}function j(){return j=g()(i()().mark(function a(t,s){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/chart/get",u()({method:"GET",params:u()({},t)},s||{})));case 1:case"end":return n.stop()}},a)})),j.apply(this,arguments)}function J(a,t){return K.apply(this,arguments)}function K(){return K=g()(i()().mark(function a(t,s){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/chart/list/page",u()({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},a)})),K.apply(this,arguments)}function N(a,t){return h.apply(this,arguments)}function h(){return h=g()(i()().mark(function a(t,s){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/chart/my/list/page/",u()({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},a)})),h.apply(this,arguments)}function r(a,t){return T.apply(this,arguments)}function T(){return T=g()(i()().mark(function a(t,s){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/chart/retry",u()({method:"GET",params:u()({},t)},s||{})));case 1:case"end":return n.stop()}},a)})),T.apply(this,arguments)}function z(a,t){return A.apply(this,arguments)}function A(){return A=g()(i()().mark(function a(t,s){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/chart/update",u()({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},a)})),A.apply(this,arguments)}},8166:function(G,P,e){e.d(P,{J:function(){return b},L:function(){return g}});var y=e(15009),E=e.n(y),B=e(97857),i=e.n(B),I=e(99289),u=e.n(I),M=e(80854);function g(O){return f.apply(this,arguments)}function f(){return f=u()(E()().mark(function O(x){return E()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,M.request)("/api/score/checkIn",i()({method:"POST"},x||{})));case 1:case"end":return d.stop()}},O)})),f.apply(this,arguments)}function b(O){return v.apply(this,arguments)}function v(){return v=u()(E()().mark(function O(x){return E()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,M.request)("/api/score/get",i()({method:"GET"},x||{})));case 1:case"end":return d.stop()}},O)})),v.apply(this,arguments)}},15746:function(G,P,e){var y=e(21584);P.Z=y.Z},71230:function(G,P,e){var y=e(92820);P.Z=y.Z}}]);
