(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[71],{559:function(e,t,a){"use strict";function c(e){var t,a,l="";if("string"===typeof e||"number"===typeof e)l+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=c(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=c(e))&&(l&&(l+=" "),l+=t);return l}},689:function(e,t,a){"use strict";a.r(t);var c=a(181),l=a(183),n=a(184),r=a(185),s=a(186),i=a(0),o=a.n(i),m=a(6),E=a(3),u=a(549),g=a(550),p=a(595),S=a(67),f=(a(712),a(713),a(611)),d=a.n(f),N=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault(),S.a.post("/admin/moRecharge/",n.state).then((function(e){console.log(e.data),console.log(e.data.STATUSMSG),"Failed"!==e.data.STATUSMSG&&"Failed"!=e.data.STATUSMSG?d()("Success!","Recharge SuccessFull!","success"):d()("Error!","Recharge UnsuccssFull!","error")})).catch((function(e){console.log(e.response)}))},n.state={code:"",re_type:"",allService:[],MobileNo:8121787777,APIKey:"vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG",REQTYPE:"RECH",SERCODE:"",CUSTNO:"",REFMOBILENO:"",AMT:"",STV:"",RESPTYPE:"",serviceR:[]},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.get("/admin/getOperators").then((function(t){console.log(t.data.data),e.setState({serviceR:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},o.a.createElement("div",{className:"category-home"},o.a.createElement("section",{className:"st-p"},o.a.createElement(u.a,null,o.a.createElement("div",{className:"bx1"},o.a.createElement(g.a,null,o.a.createElement(p.a,{md:"12"},o.a.createElement("ul",{className:"st-2"},o.a.createElement("li",{className:"st-1"},o.a.createElement(m.c,{to:"/electricity"},E.string.electricity,o.a.createElement("i",{className:"pe-7s-light circle-1"}),o.a.createElement("p",null,"Electricity"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.c,{to:"/ComingSoon"},E.string.ComingSoon,o.a.createElement("i",{className:"pe-7s-safe circle-1"}),o.a.createElement("p",null,"Gas"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.c,{to:"/ComingSoon"},E.string.ComingSoon,o.a.createElement("i",{className:"pe-7s-paint-bucket circle-1"}),o.a.createElement("p",null,"Water"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.c,{to:"/ComingSoon"},E.string.ComingSoon,o.a.createElement("i",{className:"pe-7s-global circle-1"}),o.a.createElement("p",null,"Broadband Bill"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.c,{to:"/mobilerecharge"},E.string.mobilerecharge,o.a.createElement("i",{className:"pe-7s-phone circle-1 "}),o.a.createElement("p",null,"Mobile Recharge"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.c,{to:"/dthbill"},E.string.dthbill,o.a.createElement("i",{className:"pe-7s-airplay circle-1"}),o.a.createElement("p",null,"DTH"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.c,{to:"/ComingSoon"},E.string.ComingSoon,o.a.createElement("i",{className:"pe-7s-clock circle-1"}),o.a.createElement("p",null,"Airtime"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.c,{to:"/ComingSoon"},E.string.ComingSoon,o.a.createElement("i",{className:"pe-7s-ticket circle-1"}),o.a.createElement("p",null,"Train Ticket"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.c,{to:"/ComingSoon"},E.string.ComingSoon,o.a.createElement("i",{className:"pe-7s-ticket circle-1"}),o.a.createElement("p",null,"Bus Ticket"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.c,{to:"/soxiservice"},E.string.soxiservice,o.a.createElement("i",{className:"pe-7s-more circle-1"}),o.a.createElement("p",null," More")))))))))))}}]),a}(o.a.Component);t.default=N}}]);
//# sourceMappingURL=71.9811718c.chunk.js.map