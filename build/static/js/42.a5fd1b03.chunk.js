(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[42],{627:function(e,t,n){"use strict";var o=n(7),r=n(12),a=n(187),c=n(16),l=n(0),i=n.n(l),s=n(3),u=n.n(s),p=n(78),f=n.n(p),d=n(54),m=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:d.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(a.a)(n)),n}Object(c.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],a=e.block,c=e.className,l=e.close,s=e.cssModule,u=e.color,p=e.outline,b=e.size,y=e.tag,g=e.innerRef,v=Object(r.a)(e,m);l&&"undefined"===typeof v.children&&(v.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(p?"-outline":"")+"-"+u,C=Object(d.b)(f()(c,{close:l},l||"btn",l||h,!!b&&"btn-"+b,!!a&&"btn-block",{active:t,disabled:this.props.disabled}),s);v.href&&"button"===y&&(y="a");var E=l?"Close":null;return i.a.createElement(y,Object(o.a)({type:"button"===y&&v.onClick?"button":void 0},v,{className:C,ref:g,onClick:this.onClick,"aria-label":n||E}))},t}(i.a.Component);y.propTypes=b,y.defaultProps={color:"secondary",tag:"button"},t.a=y},662:function(e,t,n){e.exports=n.p+"static/media/logo.7a02913a.png"},727:function(e,t,n){e.exports=n.p+"static/media/dpositbanner.2db6c815.jpg"},728:function(e,t,n){"use strict";var o=n(729).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},729:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=a(n(0)),r=a(n(730));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?d(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(){var e,n;s(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return b(d(n=p(this,(e=f(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=n.props,a=t.text,c=t.onCopy,l=t.children,i=t.options,s=o.default.Children.only(l),u=(0,r.default)(a,i);c&&c(a,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),n}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=i(e,["text","onCopy","options","children"]),r=o.default.Children.only(t);return o.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&u(n.prototype,a),c&&u(n,c),t}(o.default.PureComponent);t.CopyToClipboard=y,b(y,"defaultProps",{onCopy:void 0,options:void 0})},730:function(e,t,n){"use strict";var o=n(731),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,c,l,i,s,u=!1;t||(t={}),n=t.debug||!1;try{if(c=o(),l=document.createRange(),i=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(s),l.selectNodeContents(s),i.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(l):i.removeAllRanges()),s&&document.body.removeChild(s),c()}return u}},731:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},732:function(e,t,n){e.exports=n.p+"static/media/qr-code.eb982b2b.jpeg"},864:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(182),c=n(727),l=n.n(c),i=n(549),s=n(550),u=n(627),p=(n(728),n(732),n(662)),f=n.n(p);t.default=function(e){e.data,e.spaceBottomClass;return r.a.createElement(a.a,null,r.a.createElement(i.a,{fluid:!0,className:""},r.a.createElement(s.a,{className:""},r.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(l.a,")"),width:"100%",padding:"35px 0px",backgroundSize:"cover"}},r.a.createElement("div",{className:"deposit-form"},r.a.createElement("div",{className:"dpositlogo mb-4"},r.a.createElement("img",{src:f.a,width:"150px"}),r.a.createElement("h5",null,"Withdraw Form")),r.a.createElement("form",null,r.a.createElement("div",{className:"col-lg-12 mb-3"},r.a.createElement("input",{name:"user_id",placeholder:"USER ID*",type:"number"})),r.a.createElement("div",{className:"col-lg-12 mb-3"},r.a.createElement("input",{name:"user_name",placeholder:"USERNAME*",type:"text"})),r.a.createElement("div",{className:"col-lg-12 mb-3"},r.a.createElement("input",{name:"email",placeholder:"EMAIL ID*",type:"email"})),r.a.createElement("div",{className:"col-lg-12 mb-3"},r.a.createElement("input",{name:"phonenumber",placeholder:"PHONE NUMBER*",type:"number"})),r.a.createElement("div",{className:"col-lg-12 mb-3"},r.a.createElement("input",{name:"date",placeholder:"",type:"date"})),r.a.createElement("div",{className:"col-lg-12 mb-3"},r.a.createElement("input",{name:"amount",placeholder:"Enter Amount*",type:"text"}))),r.a.createElement(u.a,{className:"dp-submit mt-3"},"Submit Details"))))))}}}]);
//# sourceMappingURL=42.a5fd1b03.chunk.js.map