(this["webpackJsonpfinamiga-app"]=this["webpackJsonpfinamiga-app"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(32),i=c.n(a),r=(c(41),c(12)),o=c(3),j=(c(42),c.p+"static/media/logo.0afebb0c.png"),l=(c(43),c(1)),d=function(){return Object(l.jsxs)(r.b,{to:"/FinamigaTest",className:"FinamigaTestBar",children:[Object(l.jsx)("img",{src:j,alt:"logo"}),Object(l.jsx)("h1",{children:"Finamiga Test"})]})},b=function(e){var t=e.children;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),t]})},m=c(5),u=c(2),p=c.n(u),O=c(10),x=c(35),h=c.n(x),f=function(e){var t=Object(s.useState)([]),c=Object(m.a)(t,2),n=c[0],a=c[1];return Object(s.useEffect)((function(){var t=function(){var t=Object(O.a)(p.a.mark((function t(){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h()(e);case 2:c=t.sent,a(c.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),n},g=(c(69),c(70),function(e){var t=e.product;return Object(l.jsxs)("div",{className:"List__Card",children:[Object(l.jsx)("img",{src:t.image,alt:t.name}),Object(l.jsxs)("div",{className:"List__Card__info",children:[Object(l.jsx)("h2",{children:t.name}),Object(l.jsxs)("div",{className:"Card__info",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:t.status}),Object(l.jsx)("span",{children:t.species}),Object(l.jsx)("span",{children:t.gender})]}),Object(l.jsx)("p",{children:Object(l.jsx)("span",{children:t.origin.name})})]})]})]})}),v=(c(71),function(){return Object(l.jsxs)("div",{className:"lds-facebook",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})}),_=function(){var e=f("https://rickandmortyapi.com/api/character?page=1"),t=n.a.useState(""),c=Object(m.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)(e),o=Object(m.a)(r,2),j=o[0],d=o[1];return Object(s.useEffect)((function(){var t=e&&e.filter((function(e){return"".concat(e.name," ").concat(e.status," ").concat(e.species," ").concat(e.gender," ").concat(e.origin.name).toLowerCase().includes(a.toLowerCase())}));console.log(t.length),d(t)}),[e,a]),e.length>0?Object(l.jsx)("div",{className:"Container",children:Object(l.jsxs)("div",{className:"Wrap",children:[Object(l.jsx)("div",{className:"search",children:Object(l.jsx)("input",{onChange:function(e){i(e.target.value)},type:"text",className:"searchTerm",placeholder:"Buscar..."})}),Object(l.jsx)("div",{className:"Wrap__List",children:j.map((function(e){return Object(l.jsx)(g,{product:e},"product-list-"+e.id)}))})]})}):Object(l.jsx)(v,{})},N=c(19),C=c(36),y=(c(72),c.p+"static/media/user-solid.86cb98ab.svg"),F=c.p+"static/media/phone-solid.e2aaa062.svg",S=c.p+"static/media/envelope-solid.db1e6318.svg",k=c.p+"static/media/edit-solid.7a884987.svg",I=c.p+"static/media/hashtag-solid.20f3d501.svg",L=function(){var e=Object(C.a)(),t=e.register,c=e.handleSubmit,n=e.formState.errors,a=e.reset,i=Object(s.useState)([]),r=Object(m.a)(i,2),o=r[0],j=r[1],d=Object(s.useState)({}),b=Object(m.a)(d,2),u=b[0],p=b[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("form",{onSubmit:c((function(e){var t=o;Object.keys(u).length>0?(t[u.index]=e,localStorage.setItem("contacts",JSON.stringify(t)),a({}),p({})):(t.push(e),j(t),localStorage.setItem("contacts",JSON.stringify(t)),a({}))})),children:Object(l.jsxs)("div",{className:"FormWrap",children:[Object(l.jsx)("input",Object(N.a)({type:"text",placeholder:"Nombre...",className:"Form__input",autoFocus:!0,name:"inputFocus"},t("name",{required:!0}))),Object(l.jsx)("input",Object(N.a)({type:"number",placeholder:"Tel\xe9fono...",className:"Form__input"},t("phone",{required:!0}))),Object(l.jsx)("input",Object(N.a)({type:"email",placeholder:"Correo...",className:"Form__input"},t("email",{required:!0}))),Object.keys(u).length>0?Object(l.jsx)("button",{type:"submit",className:"Form__btn Form__btn--Confirm",children:"Confirmar"}):Object(l.jsx)("button",{type:"submit",className:"Form__btn",children:"Agregar"})]})}),n.name||n.phone||n.email?Object(l.jsx)("span",{className:"infoErrorInput",children:"Debe llenar todos los campos"}):Object(l.jsx)("span",{}),Object(l.jsxs)("div",{className:"ContactWrap",children:[Object(l.jsx)("h1",{children:"Listado"}),Object(l.jsxs)("div",{className:"ContactWrap__List",children:[Object(l.jsxs)("div",{className:"Title__List",children:[Object(l.jsx)("img",{src:I,alt:"userIcon"}),Object(l.jsx)("img",{src:y,alt:"userIcon"}),Object(l.jsx)("img",{src:F,alt:"userIcon"}),Object(l.jsx)("img",{src:S,alt:"userIcon"})]}),o.map((function(e,t){return Object(l.jsxs)("div",{className:"CardContact",children:[Object(l.jsx)("p",{children:t}),Object(l.jsx)("p",{children:e.name}),Object(l.jsx)("p",{children:e.phone}),Object(l.jsx)("p",{children:e.email}),Object(l.jsx)("button",{className:"btnEdit",children:Object(l.jsx)("img",{src:k,alt:"editIcon",onClick:function(){return function(e,t){a(e),p({index:t}),document.getElementsByClassName("Form__input")[0].focus()}(e,t)}})})]},t)}))]})]})]})},E=c.p+"static/media/Rick_and_Morty_logo.42c8df0b.png",T=(c(73),c.p+"static/media/contact-list.7b5a0161.svg"),w=function(){return Object(l.jsxs)("div",{className:"HomeContainer",children:[Object(l.jsx)(r.b,{to:"/api",className:"HomeContainer__Cards HomeContainer--RickMorty",children:Object(l.jsx)("img",{src:E,alt:"logo_RickMorty"})}),Object(l.jsxs)(r.b,{to:"/contacts",className:"HomeContainer__Cards",children:[Object(l.jsx)("img",{src:T,alt:"userIcon",className:" HomeContainer__Cards--iconList"}),Object(l.jsx)("h1",{children:"Contactos"})]})]})},H=c.p+"static/media/404Page.b1a29c11.svg",W=(c(74),function(){return Object(l.jsx)("div",{className:"ImgError",children:Object(l.jsx)("img",{src:H,alt:""})})}),B=function(){return Object(l.jsx)(r.a,{children:Object(l.jsx)(b,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/FinamigaTest",component:w}),Object(l.jsx)(o.a,{exact:!0,path:"/api",component:_}),Object(l.jsx)(o.a,{exact:!0,path:"/contacts",component:L}),Object(l.jsx)(o.a,{component:W})]})})})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.34e7cb9b.chunk.js.map