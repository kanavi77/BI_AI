"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[637],{28676:function(z,U,e){e.r(U);var B=e(15009),E=e.n(B),I=e(97857),_=e.n(I),R=e(99289),u=e.n(R),D=e(5574),h=e.n(D),f=e(68400),g=e.n(f),y=e(56071),j=e(8166),v=e(80854),Z=e(88484),c=e(4393),L=e(14726),M=e(24311),H=e(83863),W=e(72708),x=e(2453),P=e(98138),F=e(78957),S=e(88942),$=e(67294),b=e(15437),i=e(85893),T,G,C,k,A,r,a,t,l=(0,b.F4)(T||(T=g()([`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`]))),n=(0,b.F4)(G||(G=g()([`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(20px); }
`]))),o=(0,b.ZP)(c.Z)(C||(C=g()([`
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
`])),l),w=(0,b.ZP)(L.ZP)(k||(k=g()([`
  background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
  border: none;
  color: #fff;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`]))),p=(0,b.ZP)(M.Z)(A||(A=g()([`
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: #6a11cb;
    box-shadow: 0 0 0 2px rgba(106, 17, 203, 0.2);
  }
`]))),m=(0,b.ZP)(M.Z.TextArea)(r||(r=g()([`
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: #6a11cb;
    box-shadow: 0 0 0 2px rgba(106, 17, 203, 0.2);
  }
`]))),s=(0,b.ZP)(H.Z)(a||(a=g()([`
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
`]))),O=(0,b.ZP)(W.Z)(t||(t=g()([`
  .ant-upload.ant-upload-select-picture-card {
    border-radius: 4px;
    border: 1px dashed #d9d9d9;
    transition: all 0.3s ease;

    &:hover {
      border-color: #6a11cb;
    }
  }
`]))),re=function(){var ae=(0,S.Z)(),te=h()(ae,1),Q=te[0],se=(0,$.useState)(!1),X=h()(se,2),N=X[0],q=X[1],_e=(0,v.useModel)("@@initialState"),J=_e.initialState,ie=J!=null?J:[],pe=ie.currentUser,oe=function(){var ue=u()(E()().mark(function ee(V){var ne,Y,K;return E()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!N){d.next=2;break}return d.abrupt("return");case 2:return q(!0),ne=_()(_()({},V),{},{file:void 0}),d.prev=4,d.next=7,(0,j.J)();case 7:if(Y=d.sent,console.log("Score: "+Y.data),!(Y.data<5)){d.next=13;break}x.ZP.error("Insufficient points, please contact the administrator!"),d.next=17;break;case 13:return d.next=15,(0,y.nA)(ne,{},V.file.file.originFileObj);case 15:K=d.sent,K!=null&&K.data?(x.ZP.success("Analysis successful, you can check it on my chart page later"),Q.resetFields()):x.ZP.error("Analysis failed:"+K.message);case 17:d.next=22;break;case 19:d.prev=19,d.t0=d.catch(4),x.ZP.error("Analysis failed"+d.t0.message);case 22:q(!1);case 23:case"end":return d.stop()}},ee,null,[[4,19]])}));return function(V){return ue.apply(this,arguments)}}(),le={labelAlign:"left",labelCol:{span:6},wrapperCol:{span:16}};return(0,i.jsx)("div",{className:"add-chart-async",children:(0,i.jsx)(o,{title:"Intelligent Analysis",headStyle:{borderRadius:"4px 4px 0 0"},bodyStyle:{padding:"24px"},children:(0,i.jsxs)(P.Z,_()(_()({form:Q,name:"add-chart"},le),{},{onFinish:oe,initialValues:{"input-number":3,"checkbox-group":["A","B"],rate:3.5,"color-picker":null},style:{maxWidth:800},children:[(0,i.jsx)(P.Z.Item,{label:(0,i.jsx)("span",{style:{fontWeight:500},children:"Analysis Target"}),name:"goal",rules:[{required:!0}],children:(0,i.jsx)(m,{placeholder:"Please enter your analysis demand, e.g., analyze the sales of products",rows:4})}),(0,i.jsx)(P.Z.Item,{label:(0,i.jsx)("span",{style:{fontWeight:500},children:"Chart Name"}),name:"chartName",rules:[{required:!0}],children:(0,i.jsx)(p,{placeholder:"Please enter your chart name"})}),(0,i.jsx)(P.Z.Item,{name:"chartType",label:(0,i.jsx)("span",{style:{fontWeight:500},children:"\xA0\xA0\xA0Chart Type"}),children:(0,i.jsx)(s,{options:[{value:"Line Chart",label:"Line Chart"},{value:"Bar Chart",label:"Bar Chart"},{value:"Scatter Chart",label:"Scatter Chart"},{value:"Pie Chart",label:"Pie Chart"},{value:"Radar Chart",label:"Radar Chart"}]})}),(0,i.jsx)(P.Z.Item,{name:"file",label:(0,i.jsx)("span",{style:{fontWeight:500},children:"Original Excel Data"}),rules:[{required:!0,message:"Please upload a file"}],children:(0,i.jsx)(O,{name:"file",maxCount:1,accept:".xls,.xlsx",children:(0,i.jsx)(L.ZP,{icon:(0,i.jsx)(Z.Z,{}),children:"Upload Excel File"})})}),(0,i.jsx)(P.Z.Item,{wrapperCol:{span:12,offset:6},children:(0,i.jsxs)(F.Z,{children:[(0,i.jsx)(w,{type:"primary",htmlType:"Submit",loading:N,disabled:N,children:"Submit"}),(0,i.jsx)(L.ZP,{htmlType:"reset",children:"Reset"})]})})]}))})})};U.default=re},56071:function(z,U,e){e.d(U,{B9:function(){return k},LY:function(){return F},P6:function(){return L},Tr:function(){return G},ab:function(){return j},nA:function(){return x},oG:function(){return $},y4:function(){return i}});var B=e(52677),E=e.n(B),I=e(15009),_=e.n(I),R=e(97857),u=e.n(R),D=e(99289),h=e.n(D),f=e(80854);function g(r,a){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime().mark(function r(a,t){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/chart/add",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:a},t||{})));case 1:case"end":return n.stop()}},r)})),y.apply(this,arguments)}function j(r,a){return v.apply(this,arguments)}function v(){return v=h()(_()().mark(function r(a,t){return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/chart/delete",u()({method:"POST",headers:{"Content-Type":"application/json"},data:a},t||{})));case 1:case"end":return n.stop()}},r)})),v.apply(this,arguments)}function Z(r,a){return c.apply(this,arguments)}function c(){return c=_asyncToGenerator(_regeneratorRuntime().mark(function r(a,t){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/chart/edit",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:a},t||{})));case 1:case"end":return n.stop()}},r)})),c.apply(this,arguments)}function L(r,a,t,l){return M.apply(this,arguments)}function M(){return M=h()(_()().mark(function r(a,t,l,n){var o;return _()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=new FormData,l&&o.append("file",l),Object.keys(t).forEach(function(m){var s=t[m];s!=null&&(E()(s)==="object"&&!(s instanceof File)?s instanceof Array?s.forEach(function(O){return o.append(m,O||"")}):o.append(m,JSON.stringify(s)):o.append(m,s))}),p.abrupt("return",(0,f.request)("/api/chart/gen",u()({method:"POST",params:u()({},a),data:o,requestType:"form"},n||{})));case 4:case"end":return p.stop()}},r)})),M.apply(this,arguments)}function H(r,a,t,l){return W.apply(this,arguments)}function W(){return W=_asyncToGenerator(_regeneratorRuntime().mark(function r(a,t,l,n){var o;return _regeneratorRuntime().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=new FormData,l&&o.append("file",l),Object.keys(t).forEach(function(m){var s=t[m];s!=null&&(_typeof(s)==="object"&&!(s instanceof File)?s instanceof Array?s.forEach(function(O){return o.append(m,O||"")}):o.append(m,JSON.stringify(s)):o.append(m,s))}),p.abrupt("return",request("/api/chart/gen/async",_objectSpread({method:"POST",params:_objectSpread({},a),data:o,requestType:"form"},n||{})));case 4:case"end":return p.stop()}},r)})),W.apply(this,arguments)}function x(r,a,t,l){return P.apply(this,arguments)}function P(){return P=h()(_()().mark(function r(a,t,l,n){var o;return _()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=new FormData,l&&o.append("file",l),Object.keys(t).forEach(function(m){var s=t[m];s!=null&&(E()(s)==="object"&&!(s instanceof File)?s instanceof Array?s.forEach(function(O){return o.append(m,O||"")}):o.append(m,JSON.stringify(s)):o.append(m,s))}),p.abrupt("return",(0,f.request)("/api/chart/gen/async/mq",u()({method:"POST",params:u()({},a),data:o,requestType:"form"},n||{})));case 4:case"end":return p.stop()}},r)})),P.apply(this,arguments)}function F(r,a){return S.apply(this,arguments)}function S(){return S=h()(_()().mark(function r(a,t){return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/chart/get",u()({method:"GET",params:u()({},a)},t||{})));case 1:case"end":return n.stop()}},r)})),S.apply(this,arguments)}function $(r,a){return b.apply(this,arguments)}function b(){return b=h()(_()().mark(function r(a,t){return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/chart/list/page",u()({method:"POST",headers:{"Content-Type":"application/json"},data:a},t||{})));case 1:case"end":return n.stop()}},r)})),b.apply(this,arguments)}function i(r,a){return T.apply(this,arguments)}function T(){return T=h()(_()().mark(function r(a,t){return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/chart/my/list/page/",u()({method:"POST",headers:{"Content-Type":"application/json"},data:a},t||{})));case 1:case"end":return n.stop()}},r)})),T.apply(this,arguments)}function G(r,a){return C.apply(this,arguments)}function C(){return C=h()(_()().mark(function r(a,t){return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/chart/retry",u()({method:"GET",params:u()({},a)},t||{})));case 1:case"end":return n.stop()}},r)})),C.apply(this,arguments)}function k(r,a){return A.apply(this,arguments)}function A(){return A=h()(_()().mark(function r(a,t){return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/chart/update",u()({method:"POST",headers:{"Content-Type":"application/json"},data:a},t||{})));case 1:case"end":return n.stop()}},r)})),A.apply(this,arguments)}},8166:function(z,U,e){e.d(U,{J:function(){return g},L:function(){return h}});var B=e(15009),E=e.n(B),I=e(97857),_=e.n(I),R=e(99289),u=e.n(R),D=e(80854);function h(j){return f.apply(this,arguments)}function f(){return f=u()(E()().mark(function j(v){return E()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,D.request)("/api/score/checkIn",_()({method:"POST"},v||{})));case 1:case"end":return c.stop()}},j)})),f.apply(this,arguments)}function g(j){return y.apply(this,arguments)}function y(){return y=u()(E()().mark(function j(v){return E()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,D.request)("/api/score/get",_()({method:"GET"},v||{})));case 1:case"end":return c.stop()}},j)})),y.apply(this,arguments)}}}]);
