(this["webpackJsonpplayer-poc"]=this["webpackJsonpplayer-poc"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r);n(9),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(1),s=n(4),l=(n(10),function(e,t){var n=parseInt(e.get("startTimestamp")||"0");t(Math.floor(Date.now()/1e3)-n)}),i=function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(0),i=Object(u.a)(c,2),m=i[0],f=i[1],d=Object(a.useState)(""),h=Object(u.a)(d,2),p=h[0],b=h[1],g=Object(a.useState)(""),w=Object(u.a)(g,2),v=w[0],j=w[1],O=Object(a.useRef)(null);console.log(document.location.search);var E=new URLSearchParams(document.location.search);return Object(a.useEffect)((function(){var e;null===(e=O.current)||void 0===e||e.classList.add("stream");try{l(E,f),b(E.get("src")||"")}catch(t){j("something went wrong"),console.error(t)}}),[O,f,E,m]),""===v?o.a.createElement(o.a.Fragment,null,n&&o.a.createElement("button",{className:"unmute-button",onClick:function(){return r(!1)}},"tap to unmute"),o.a.createElement(s.a,{autoplay:!0,controls:!0,muted:n,currentTime:m,preload:"auto",src:p,streamRef:O,onPause:function(){return O.current.play()},onError:function(){return l(E,f)},onPlaying:function(){return l(E,f)},onSeeked:function(){return l(E,f)},onSeeking:function(){return l(E,f)}})):o.a.createElement("p",null,v)};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.abdc9699.chunk.js.map