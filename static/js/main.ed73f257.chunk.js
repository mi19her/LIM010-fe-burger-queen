(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/logoBurger.eda230cd.png"},28:function(e,t,n){e.exports=n(41)},33:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),l=n.n(c),o=(n(33),n(11)),i=n(5),u=n(10),m=n.n(u),d=(n(8),function(){return r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:m.a,alt:"imagen de product",className:"Burger-logo"}),r.a.createElement("button",{className:"Button-mesero",id:"ingresar"},r.a.createElement(o.b,{to:"/waiter"}," Mesero ")))}),s=n(12),p=n(27),f=n(6),E=n(18),b=n.n(E);n(38);b.a.initializeApp({apiKey:"AIzaSyCRUjRxgsnGbdWJrpP7UVHFeS0JEzM2Jw0",authDomain:"burger-queen-6ff61.firebaseapp.com",databaseURL:"https://burger-queen-6ff61.firebaseio.com",projectId:"burger-queen-6ff61",storageBucket:"burger-queen-6ff61.appspot.com",messagingSenderId:"494430091091",appId:"1:494430091091:web:6b21175389312bf33713a6",measurementId:"G-0K0FDC86YR"});var g=b.a;function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var v=function(e){var t=e.addProductAtOrder,n=Object(a.useState)([]),c=Object(f.a)(n,2),l=c[0],o=c[1],i=Object(a.useState)("desayuno"),u=Object(f.a)(i,2),m=u[0],d=u[1];return Object(a.useEffect)((function(){g.firestore().collection("products").where("tipo","==",m).get().then((function(e){var t=[];e.forEach((function(e){t.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:e.id},e.data()))})),o(t)})).catch((function(e){console.log("Error getting documents: ",e)}))}),[m]),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return d("desayuno")}}," Desayuno "),r.a.createElement("button",{onClick:function(){return d("almuerzo_cena")}}," Almuerzo y cena ")),r.a.createElement("div",{className:"Scroll"},l.map((function(e){return r.a.createElement("div",{key:e.id,onClick:function(){return t(e)}},r.a.createElement("p",null,e.nombre),r.a.createElement("p",null,e.precio),r.a.createElement("img",{src:e.url,alt:"imagen de product",className:"Width-product "}))}))))},y=r.a.useState,h=function(e){var t=e.products,n=e.cantidad,a=e.deleteRow,c=y(""),l=Object(f.a)(c,2),o=l[0],i=l[1];return r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Nombre",value:o,onChange:function(e){i(e.target.value),console.log(e.target.value)}}),r.a.createElement("input",{placeholder:"N\xb0 de Mesa"}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"4"},"DETALLE DE PEDIDO")),r.a.createElement("tr",null,r.a.createElement("td",null,"CANT."),r.a.createElement("td",null,"DESCRIPCI\xd3N"),r.a.createElement("td",null,"PU"),r.a.createElement("td",null,"SUBTOTAL"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement("input",{type:"number",min:"1",max:"100",defaultValue:e.cantidad,onClick:function(t){var a=t.target.value;n(e.id,a)}})),r.a.createElement("td",null,e.nombre),r.a.createElement("td",null,e.precio),r.a.createElement("td",null,e.precio*e.cantidad),r.a.createElement("td",null,r.a.createElement("input",{type:"image",alt:"eliminar",src:"https://img.icons8.com/windows/64/000000/xbox-x.png",onClick:function(){a(e)}})))})))),r.a.createElement("p",null,"TOTAL = ",function(e){var t=0;return e.map((function(e){return t+=e.precio*e.cantidad})),t}(t)))};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("header",{className:"Flex-header"},r.a.createElement("img",{src:m.a,alt:"imagen de product",className:"Burger-log"})),r.a.createElement("main",null,r.a.createElement("section",{className:"Flex"},r.a.createElement(v,{addProductAtOrder:function(e){var t=n.find((function(t){return t.id===e.id}));if(void 0!==t){var a=n.map((function(e){return t.id===e.id&&(e.disable=!0),e}));c(a)}else c([].concat(Object(p.a)(n),[w({},e,{cantidad:1})]))}}),r.a.createElement(h,{products:n,cantidad:function(e,t){var a=n.map((function(n){return e===n.id&&(n.cantidad=t),n}));c(a)},deleteRow:function(e){var t=n.filter((function(t){return e.id!==t.id}));c(t)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){return r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/waiter"},r.a.createElement(P,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(d,null))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){}},[[28,1,2]]]);
//# sourceMappingURL=main.ed73f257.chunk.js.map