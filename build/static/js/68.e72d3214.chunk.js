(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[68,77],{595:function(e,t,a){"use strict";var l=a(7),n=a(12),s=a(0),c=a.n(s),r=a(3),o=a.n(r),m=a(78),u=a.n(m),i=a(54),d=["className","cssModule","widths","tag"],h=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:h,offset:h})]),b={tag:i.c,xs:p,sm:p,md:p,lg:p,xl:p,className:o.a.string,cssModule:o.a.object,widths:o.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,s=e.widths,r=e.tag,o=Object(n.a)(e,d),m=[];s.forEach((function(t,l){var n=e[t];if(delete o[t],n||""===n){var s=!l;if(Object(i.a)(n)){var c,r=s?"-":"-"+t+"-",d=E(s,t,n.size);m.push(Object(i.b)(u()(((c={})[d]=n.size||""===n.size,c["order"+r+n.order]=n.order||0===n.order,c["offset"+r+n.offset]=n.offset||0===n.offset,c)),a))}else{var h=E(s,t,n);m.push(h)}}})),m.length||m.push("col");var h=Object(i.b)(u()(t,m),a);return c.a.createElement(r,Object(l.a)({},o,{className:h}))};g.propTypes=b,g.defaultProps=f,t.a=g},750:function(e,t,a){"use strict";a.r(t);var l=a(183),n=a(184),s=a(185),c=a(186),r=a(0),o=a.n(r),m=a(549),u=a(550),i=a(726),d=a.n(i),h=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(n.a)(a,[{key:"render",value:function(){this.props.table;return o.a.createElement("section",{style:{margin:"30px 0px"}},o.a.createElement(m.a,null,o.a.createElement(u.a,null,o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"table-content table-responsive cart-table-content usert-list"},o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Wallet ID"),o.a.createElement("th",null,"Credited Amount "),o.a.createElement("th",null,"Received Crypto"),o.a.createElement("th",null,"Date"))),this.props.table.length>0?this.props.table.map((function(e){var t;return o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",null,o.a.createElement("td",{className:"product-thumbnail"},e._id),o.a.createElement("td",{className:"product-thumbnail"},e.add_amount),o.a.createElement("td",{className:"product-thumbnail"},null===(t=e.walletId)||void 0===t?void 0:t.reqamount),o.a.createElement("td",{className:"product-thumbnail"},d()(e.createdAt).format("ll"))))})):null))))))}}]),a}(o.a.Component);t.default=h},857:function(e,t,a){"use strict";a.r(t);var l=a(181),n=a(183),s=a(184),c=a(185),r=a(186),o=a(0),m=a.n(o),u=a(182),i=a(188),d=a.n(i),h=a(549),p=a(550),b=a(595),f=a(750),E=a(6),g=a(67),v=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.state={walletAmount:0,responseData:{},table:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;e=JSON.parse(localStorage.getItem("userInfo")),console.log("@@@@@",e),null===e||(g.a.get("/admin/getone/",{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log("wallet@2getone2@@@@@@@",e.data),t.setState({responseData:e.data.data}),t.setState({walletAmount:e.data.data.amount}),t.setState({walletId:e.data.data.walletId})})).catch((function(e){console.log(e)})),g.a.get("/admin/usersuccess_depositelist/"+e.walletId).then((function(e){console.log("@@@@transaction API",e.data.data),t.setState({table:e.data.data})})).catch((function(e){console.log(e.response)})))}},{key:"render",value:function(){var e=this.state.table;return console.log("222@@",this.state.table),m.a.createElement(u.a,null,m.a.createElement(h.a,{fluid:!0,className:"mb-4"},m.a.createElement(p.a,{className:"mb-5"},m.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(d.a,")"),width:"100%",padding:"100px 0px",backgroundSize:"cover"}},m.a.createElement("div",{className:""},m.a.createElement("h1",{className:"text-light text-center"},"Wallet"))))),m.a.createElement("section",{style:{margin:"70px 0px"}},m.a.createElement(h.a,null,m.a.createElement(p.a,null,m.a.createElement(b.a,{md:"6"},m.a.createElement("div",{className:"sr-3 mb-4"},m.a.createElement("h4",{className:"sr-h"},"Wallet Details "),m.a.createElement("ul",{className:"sr-ul"},m.a.createElement("li",{className:"sr-li dr"},"Available Wallet Balance : ",m.a.createElement("span",{className:"sr-span"},"INR:",this.state.walletAmount))),m.a.createElement("div",{className:"sr-div"},m.a.createElement(E.c,{to:"/depositform"},m.a.createElement("button",{className:"sr-btn1"},"Deposit to Wallet"))))),m.a.createElement(b.a,{md:"6"},m.a.createElement("div",{className:"sr-3"},m.a.createElement("h4",{className:"sr-h"},"Deposit Transaction "),m.a.createElement(f.default,{table:e.length>0?e:[]})))))))}}]),a}(m.a.Component);t.default=v}}]);
//# sourceMappingURL=68.e72d3214.chunk.js.map