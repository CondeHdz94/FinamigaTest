(this["webpackJsonpfinamiga-app"]=this["webpackJsonpfinamiga-app"]||[]).push([[0],{41:function(e,c,t){},42:function(e,c,t){},43:function(e,c,t){},69:function(e,c,t){},70:function(e,c,t){},71:function(e,c,t){},72:function(e,c,t){},73:function(e,c,t){},74:function(e,c,t){},75:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),i=t(32),n=t.n(i),r=(t(41),t(12)),l=t(3),j=(t(42),t.p+"static/media/logo.0afebb0c.png"),o=(t(43),t(0)),d=function(){return Object(o.jsxs)(r.b,{to:"/FinamigaTest",className:"FinamigaTestBar",children:[Object(o.jsx)("img",{src:j,alt:"logo"}),Object(o.jsx)("h1",{children:"Finamiga Test"})]})},b=function(e){var c=e.children;return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{}),c]})},x=t(5),m=t(2),O=t.n(m),p=t(10),u=t(35),h=t.n(u),f=function(e){var c=Object(s.useState)([]),t=Object(x.a)(c,2),a=t[0],i=t[1];return Object(s.useEffect)((function(){var c=function(){var c=Object(p.a)(O.a.mark((function c(){var t,s;return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=parseInt(10*Math.random()),c.next=3,h()("".concat(e).concat(t));case 3:s=c.sent,i(s.data.results);case 5:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c()}),[e]),a},g=(t(69),t(70),function(e){var c=e.product;return Object(o.jsxs)("div",{className:"List__Card",children:[Object(o.jsx)("img",{src:c.image,alt:c.name}),Object(o.jsxs)("div",{className:"List__Card__info",children:[Object(o.jsx)("h2",{children:c.name}),Object(o.jsxs)("div",{className:"Card__info",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:c.status}),Object(o.jsx)("span",{children:c.species}),Object(o.jsx)("span",{children:c.gender})]}),Object(o.jsx)("p",{children:Object(o.jsx)("span",{children:c.origin.name})})]})]})]})}),v=(t(71),function(){return Object(o.jsxs)("div",{className:"lds-facebook",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})}),C=function(){var e=f("https://rickandmortyapi.com/api/character?page="),c=a.a.useState(""),t=Object(x.a)(c,2),i=t[0],n=t[1],r=Object(s.useState)(e),l=Object(x.a)(r,2),j=l[0],d=l[1];return Object(s.useEffect)((function(){var c=e&&e.filter((function(e){return"".concat(e.name," ").concat(e.status," ").concat(e.species," ").concat(e.gender," ").concat(e.origin.name).toLowerCase().includes(i.toLowerCase())}));console.log(c.length),d(c)}),[e,i]),e.length>0?Object(o.jsx)("div",{className:"Container",children:Object(o.jsxs)("div",{className:"Wrap",children:[Object(o.jsx)("div",{className:"search",children:Object(o.jsx)("input",{onChange:function(e){n(e.target.value)},type:"text",className:"searchTerm",placeholder:"Buscar..."})}),Object(o.jsx)("div",{className:"Wrap__List",children:j.map((function(e){return Object(o.jsx)(g,{product:e},"product-list-"+e.id)}))})]})}):Object(o.jsx)(v,{})},y=t(17),_=t(36),N=(t(72),t.p+"static/media/user-solid.86cb98ab.svg"),F=t.p+"static/media/phone-solid.e2aaa062.svg",E=t.p+"static/media/envelope-solid.db1e6318.svg",S=t.p+"static/media/edit-solid.7a884987.svg",k=t.p+"static/media/hashtag-solid.20f3d501.svg",I=t.p+"static/media/heart-solid.70b72c45.svg",w=function(){var e=Object(_.a)(),c=e.register,t=e.handleSubmit,a=e.formState.errors,i=e.reset,n=Object(s.useState)([]),r=Object(x.a)(n,2),l=r[0],j=r[1],d=Object(s.useState)({}),b=Object(x.a)(d,2),m=b[0],O=b[1];return Object(s.useEffect)((function(){j(JSON.parse(localStorage.getItem("contacts"))||[])}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("form",{onSubmit:t((function(e){var c=l;Object.keys(m).length>0?(c[m.index]=e,localStorage.setItem("contacts",JSON.stringify(c)),i({}),O({})):(c.push(e),j(c),localStorage.setItem("contacts",JSON.stringify(c)),i({}))})),children:Object(o.jsxs)("div",{className:"FormWrap",children:[Object(o.jsx)("input",Object(y.a)({type:"text",placeholder:"Nombre...",className:"Form__input",autoFocus:!0,name:"inputFocus"},c("name",{required:!0}))),Object(o.jsx)("input",Object(y.a)({type:"number",placeholder:"Tel\xe9fono...",className:"Form__input"},c("phone",{required:!0}))),Object(o.jsx)("input",Object(y.a)({type:"email",placeholder:"Correo...",className:"Form__input"},c("email",{required:!0}))),Object(o.jsx)("div",{id:"main-content",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("input",Object(y.a)({type:"checkbox",id:"checkbox"},c("fav",{required:!1}))),Object(o.jsx)("label",{htmlFor:"checkbox",children:Object(o.jsx)("svg",{id:"heart-svg",viewBox:"467 392 58 57",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsxs)("g",{id:"Group",fill:"none",fillRule:"evenodd",transform:"translate(467 392)",children:[Object(o.jsx)("path",{d:"M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z",id:"heart",fill:"#AAB8C2"}),Object(o.jsx)("circle",{id:"main-circ",fill:"#E2264D",opacity:"0",cx:"29.5",cy:"29.5",r:"1.5"}),Object(o.jsxs)("g",{id:"grp7",opacity:"0",transform:"translate(7 6)",children:[Object(o.jsx)("circle",{id:"oval1",fill:"#9CD8C3",cx:"2",cy:"6",r:"2"}),Object(o.jsx)("circle",{id:"oval2",fill:"#8CE8C3",cx:"5",cy:"2",r:"2"})]}),Object(o.jsxs)("g",{id:"grp6",opacity:"0",transform:"translate(0 28)",children:[Object(o.jsx)("circle",{id:"oval1",fill:"#CC8EF5",cx:"2",cy:"7",r:"2"}),Object(o.jsx)("circle",{id:"oval2",fill:"#91D2FA",cx:"3",cy:"2",r:"2"})]}),Object(o.jsxs)("g",{id:"grp3",opacity:"0",transform:"translate(52 28)",children:[Object(o.jsx)("circle",{id:"oval2",fill:"#9CD8C3",cx:"2",cy:"7",r:"2"}),Object(o.jsx)("circle",{id:"oval1",fill:"#8CE8C3",cx:"4",cy:"2",r:"2"})]}),Object(o.jsxs)("g",{id:"grp2",opacity:"0",transform:"translate(44 6)",children:[Object(o.jsx)("circle",{id:"oval2",fill:"#CC8EF5",cx:"5",cy:"6",r:"2"}),Object(o.jsx)("circle",{id:"oval1",fill:"#CC8EF5",cx:"2",cy:"2",r:"2"})]}),Object(o.jsxs)("g",{id:"grp5",opacity:"0",transform:"translate(14 50)",children:[Object(o.jsx)("circle",{id:"oval1",fill:"#91D2FA",cx:"6",cy:"5",r:"2"}),Object(o.jsx)("circle",{id:"oval2",fill:"#91D2FA",cx:"2",cy:"2",r:"2"})]}),Object(o.jsxs)("g",{id:"grp4",opacity:"0",transform:"translate(35 50)",children:[Object(o.jsx)("circle",{id:"oval1",fill:"#F48EA7",cx:"6",cy:"5",r:"2"}),Object(o.jsx)("circle",{id:"oval2",fill:"#F48EA7",cx:"2",cy:"2",r:"2"})]}),Object(o.jsxs)("g",{id:"grp1",opacity:"0",transform:"translate(24)",children:[Object(o.jsx)("circle",{id:"oval1",fill:"#9FC7FA",cx:"2.5",cy:"3",r:"2"}),Object(o.jsx)("circle",{id:"oval2",fill:"#9FC7FA",cx:"7.5",cy:"2",r:"2"})]})]})})}),Object(o.jsx)("h1",{children:"Favorito"})]})}),Object.keys(m).length>0?Object(o.jsx)("button",{type:"submit",className:"Form__btn Form__btn--Confirm",children:"Confirmar"}):Object(o.jsx)("button",{type:"submit",className:"Form__btn",children:"Agregar"})]})}),a.name||a.phone||a.email?Object(o.jsx)("span",{className:"infoErrorInput",children:"Debe llenar todos los campos"}):Object(o.jsx)("span",{}),Object(o.jsxs)("div",{className:"ContactWrap",children:[Object(o.jsx)("h1",{children:"Listado"}),Object(o.jsxs)("div",{className:"ContactWrap__List",children:[Object(o.jsxs)("div",{className:"Title__List",children:[Object(o.jsx)("img",{src:k,alt:"userIcon"}),Object(o.jsx)("img",{src:N,alt:"userIcon"}),Object(o.jsx)("img",{src:F,alt:"userIcon"}),Object(o.jsx)("img",{src:E,alt:"userIcon"})]}),l.map((function(e,c){return Object(o.jsxs)("div",{className:"CardContact",children:[Object(o.jsx)("p",{children:c}),Object(o.jsx)("p",{children:e.name}),Object(o.jsx)("p",{children:e.phone}),Object(o.jsx)("p",{children:e.email}),Object(o.jsx)("p",{children:e.fav?Object(o.jsx)("img",{src:I,alt:""}):null}),Object(o.jsx)("button",{className:"btnEdit",children:Object(o.jsx)("img",{src:S,alt:"editIcon",onClick:function(){return function(e,c){i(e),O({index:c}),document.getElementsByClassName("Form__input")[0].focus()}(e,c)}})})]},c)}))]})]})]})},A=t.p+"static/media/Rick_and_Morty_logo.42c8df0b.png",L=(t(73),t.p+"static/media/contact-list.7b5a0161.svg"),D=function(){return Object(o.jsxs)("div",{className:"HomeContainer",children:[Object(o.jsx)(r.b,{to:"/api",className:"HomeContainer__Cards HomeContainer--RickMorty",children:Object(o.jsx)("img",{src:A,alt:"logo_RickMorty"})}),Object(o.jsxs)(r.b,{to:"/contacts",className:"HomeContainer__Cards",children:[Object(o.jsx)("img",{src:L,alt:"userIcon",className:" HomeContainer__Cards--iconList"}),Object(o.jsx)("h1",{children:"Contactos"})]})]})},T=t.p+"static/media/404Page.9a33c5a6.svg",B=(t(74),function(){return Object(o.jsx)("div",{className:"ImgError",children:Object(o.jsx)("img",{src:T,alt:""})})}),M=function(){return Object(o.jsx)(r.a,{children:Object(o.jsx)(b,{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/FinamigaTest",component:D}),Object(o.jsx)(l.a,{exact:!0,path:"/api",component:C}),Object(o.jsx)(l.a,{exact:!0,path:"/contacts",component:w}),Object(o.jsx)(l.a,{path:"*",component:B})]})})})};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.23fa3070.chunk.js.map