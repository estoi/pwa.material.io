(this["webpackJsonpreact-pwd-material"]=this["webpackJsonpreact-pwd-material"]||[]).push([[0],{53:function(e,t,n){e.exports=n(67)},64:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),i=n(46),l=n(21),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var h=n(48),p=n(49),v=n(24),d=n(40),m={},f={home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return t.type,e}},b=Object(v.d)(Object(v.c)(Object(p.a)({},f)),Object(v.a)(d.a)),w=n(7),j=n(8),y=n(10),O=n(9),g=n(11),E=n(45),k=n.n(E),C=n(28),N=n.n(C),S=n(29),W=n.n(S),A=n(30),B=n.n(A),P=(a.Component,n(41)),H=n.n(P),L=n(42),M=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(y.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).initScroll=function(){var e=n.props.direction,t=document.querySelector(".wrapper");new L.a(t,{scrollX:"vertical"!==e,click:!0,scrollY:"vertical"===e})},n}return Object(g.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.initScroll()}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",null,e))}}]),t}(a.Component);M.defaultProps={direction:"vertical"};var R=function(e){function t(){return Object(w.a)(this,t),Object(y.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props,t=e.hasHeader,n=e.hasNavBar,a=e.children,o=H()("ui-content-wrap",{"has-header":t,"has-nav-bar":n,"has-all":t&&n});return r.a.createElement("div",{className:o},r.a.createElement(M,{direction:"vertical"},a))}}]),t}(a.Component);R.defaultProps={hasHeader:!1,hasNavBar:!1};var U=n(80),x=n(81),D=n(43),J=n.n(D),T=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(y.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},n}return Object(g.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.url;this.setState({value:e})}},{key:"barClick",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){var e=this,t=this.state.value,n=[{label:"\u9996\u9875",icon:r.a.createElement(J.a,null),path:"/home"},{label:"\u8d2d\u4e70",icon:r.a.createElement(N.a,null),path:"/pay"},{label:"\u670d\u52a1",icon:r.a.createElement(W.a,null),path:"/server"},{label:"\u4e2a\u4eba\u4e2d\u5fc3",icon:r.a.createElement(B.a,null),path:"/mine"}];return r.a.createElement("div",{className:"ui-nav-bar-wrap"},r.a.createElement(U.a,{value:t,onChange:function(t,n){e.setState({value:n})}},n?n.map((function(n,a){return r.a.createElement(x.a,{onClick:function(){return e.barClick(n.path)},key:a,showLabel:t===n.path,label:n.label,value:n.path,icon:n.icon?n.icon:null})})):null))}}]),t}(a.Component);T.defaultProps={};a.Component;var q=n(82),I=function(e){function t(){return Object(w.a)(this,t),Object(y.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-warp"},r.a.createElement(R,{hasNavBar:!0},r.a.createElement(q.a,{color:"primary",variant:"contained"},"Home")),r.a.createElement(T,this.props))}}]),t}(a.Component),X=function(e){function t(){return Object(w.a)(this,t),Object(y.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-warp"},r.a.createElement(R,{hasNavbar:!0},r.a.createElement(q.a,{color:"primary",variant:"contained"},"Mine")),r.a.createElement(T,this.props))}}]),t}(a.Component);n(63),n(64),n(65);c.a.render(r.a.createElement(h.a,{store:b},r.a.createElement(i.a,{useHistory:l.f},r.a.createElement(l.a,{path:"/",to:"/home"}),r.a.createElement(l.b,{path:"/home",component:I}),r.a.createElement(l.b,{path:"/mine",component:X}))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):u(t,e)}))}}()}},[[53,1,2]]]);
//# sourceMappingURL=main.aef4ee30.chunk.js.map