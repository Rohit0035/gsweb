(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[51],{595:function(e,t,a){"use strict";var n=a(7),r=a(12),s=a(0),o=a.n(s),i=a(3),c=a.n(i),l=a(78),u=a.n(l),d=a(54),f=["className","cssModule","widths","tag"],p=c.a.oneOfType([c.a.number,c.a.string]),b=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:p,offset:p})]),m={tag:d.c,xs:b,sm:b,md:b,lg:b,xl:b,className:c.a.string,cssModule:c.a.object,widths:c.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,s=e.widths,i=e.tag,c=Object(r.a)(e,f),l=[];s.forEach((function(t,n){var r=e[t];if(delete c[t],r||""===r){var s=!n;if(Object(d.a)(r)){var o,i=s?"-":"-"+t+"-",f=h(s,t,r.size);l.push(Object(d.b)(u()(((o={})[f]=r.size||""===r.size,o["order"+i+r.order]=r.order||0===r.order,o["offset"+i+r.offset]=r.offset||0===r.offset,o)),a))}else{var p=h(s,t,r);l.push(p)}}})),l.length||l.push("col");var p=Object(d.b)(u()(t,l),a);return o.a.createElement(i,Object(n.a)({},c,{className:p}))};v.propTypes=m,v.defaultProps=g,t.a=v},612:function(e,t,a){"use strict";var n=a(7),r=a(12),s=a(187),o=a(16),i=a(0),c=a.n(i),l=a(3),u=a.n(l),d=a(78),f=a.n(d),p=a(54),b=["className","cssModule","inline","tag","innerRef"],m={children:u.a.node,inline:u.a.bool,tag:p.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,o=e.tag,i=e.innerRef,l=Object(r.a)(e,b),u=Object(p.b)(f()(t,!!s&&"form-inline"),a);return c.a.createElement(o,Object(n.a)({},l,{ref:i,className:u}))},t}(i.Component);g.propTypes=m,g.defaultProps={tag:"form"},t.a=g},627:function(e,t,a){"use strict";var n=a(7),r=a(12),s=a(187),o=a(16),i=a(0),c=a.n(i),l=a(3),u=a.n(l),d=a(78),f=a.n(d),p=a(54),b=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],s=e.block,o=e.className,i=e.close,l=e.cssModule,u=e.color,d=e.outline,m=e.size,g=e.tag,h=e.innerRef,v=Object(r.a)(e,b);i&&"undefined"===typeof v.children&&(v.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var O="btn"+(d?"-outline":"")+"-"+u,j=Object(p.b)(f()(o,{close:i},i||"btn",i||O,!!m&&"btn-"+m,!!s&&"btn-block",{active:t,disabled:this.props.disabled}),l);v.href&&"button"===g&&(g="a");var y=i?"Close":null;return c.a.createElement(g,Object(n.a)({type:"button"===g&&v.onClick?"button":void 0},v,{className:j,ref:h,onClick:this.onClick,"aria-label":a||y}))},t}(c.a.Component);g.propTypes=m,g.defaultProps={color:"secondary",tag:"button"},t.a=g},629:function(e,t,a){"use strict";var n=a(7),r=a(12),s=a(187),o=a(16),i=a(0),c=a.n(i),l=a(3),u=a.n(l),d=a(78),f=a.n(d),p=a(54),b=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,o=e.bsSize,i=e.valid,l=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,g=e.innerRef,h=Object(r.a)(e,b),v=["radio","checkbox"].indexOf(s)>-1,O=new RegExp("\\D","g"),j=u||("select"===s||"textarea"===s?s:"input"),y="form-control";m?(y+="-plaintext",j=u||"input"):"file"===s?y+="-file":"range"===s?y+="-range":v&&(y=d?null:"form-check-input"),h.size&&O.test(h.size)&&(Object(p.d)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=h.size,delete h.size);var E=Object(p.b)(f()(t,l&&"is-invalid",i&&"is-valid",!!o&&"form-control-"+o,y),a);return("input"===j||u&&"function"===typeof u)&&(h.type=s),h.children&&!m&&"select"!==s&&"string"===typeof j&&"select"!==j&&(Object(p.d)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(j,Object(n.a)({},h,{ref:g,className:E,"aria-invalid":l}))},t}(c.a.Component);g.propTypes=m,g.defaultProps={type:"text"},t.a=g},662:function(e,t,a){e.exports=a.p+"static/media/logo.7a02913a.png"},791:function(e,t,a){e.exports=a.p+"static/media/codeimg.cc779f9e.png"},843:function(e,t,a){"use strict";a.r(t);var n=a(181),r=a(183),s=a(184),o=a(185),i=a(186),c=a(0),l=a.n(c),u=a(549),d=a(550),f=a(595),p=a(612),b=a(629),m=a(627),g=a(67),h=a(611),v=a.n(h),O=a(6),j=a(791),y=a.n(j),E=a(662),k=a.n(E),N=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).handlechange=function(e){e.preventDefault(),s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),g.a.post("/user/verifycode",s.state,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e.data),console.log(e.data.token),""!==e.data.token&&null!==e.data.token&&void 0!==e.data.token&&localStorage.setItem("auth-token",e.data.token),"otp verified"==e.data.msg&&"otp verified"===e.data.msg?(v()("Success!"," UserID Submitted Successful..","success"),s.props.history.push("/ForgotPassword")):v()("Error!","Try Again","error")})).catch((function(e){console.log("incorrect code"==e.response.msg&&"incorrect code"===e.response.msg),v()("Error!","Invalid UserID","error")}))},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.state={customerId:""},s}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{style:{margin:"70px 0px"}},l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement(f.a,{md:"12"},l.a.createElement("div",{className:"resetpass"},l.a.createElement("div",{className:"headbox"},l.a.createElement(O.c,{to:"/login-register"},l.a.createElement("img",{src:k.a,style:{width:200}}))),l.a.createElement("img",{src:y.a,style:{width:200}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Enter Your UserID"),l.a.createElement("br",null),l.a.createElement(p.a,{onSubmit:this.submitHandler},l.a.createElement(b.a,{type:"number",required:!0,placeholder:"Enter Your UserID",name:"customerId",value:this.state.customerId,onChange:this.handlechange}),l.a.createElement("br",null),l.a.createElement("div",{className:"login-toggle-btn "},l.a.createElement(m.a,{type:"submit",className:"sr-btn1 "},"Submit"))))))))}}]),a}(l.a.Component);t.default=N}}]);
//# sourceMappingURL=51.90146779.chunk.js.map