(this["webpackJsonpreact-warehouses"]=this["webpackJsonpreact-warehouses"]||[]).push([[0],{114:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(8),r=a.n(s),i=(a(114),a(46)),l=a(55),o=a.n(l),u=a(85),j=a.n(u),d=a(89),b=a.n(d),O=a(2);var m=function(){return Object(O.jsxs)("div",{className:o.a.sidebar,children:[Object(O.jsxs)(i.b,{exact:!0,to:"/",activeClassName:o.a.active,isActive:function(e,t){return!!t&&"/"===t.pathname},children:[Object(O.jsx)(j.a,{className:o.a.icon}),Object(O.jsx)("span",{children:"\u0421\u043a\u043b\u0430\u0434\u044b"})]}),Object(O.jsxs)(i.b,{exact:!0,to:"/products",activeClassName:o.a.active,children:[Object(O.jsx)(b.a,{className:o.a.icon}),Object(O.jsx)("span",{children:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b"})]})]})},h=a(15),p=(a(56),a(9)),x=a.n(p),_=a(16),f=a(175),y=a(163),g=a(177),v=a(173),N=a(178),S=a(165),E=a(92),w=a.n(E),D=a(20),I=a(10),C=function(e){return{type:"DELETE_PRODUCT",payload:e}},T=function(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1],s=Object(I.c)((function(e){return e.warehouses})),r=Object(n.useState)(""),i=Object(_.a)(r,2),l=i[0],o=i[1],u=Object(n.useState)(""),j=Object(_.a)(u,2),d=j[0],b=j[1],m=Object(I.b)(),h=Object(I.c)((function(e){return e.products})),p={name:a,warehouse:l,quantity:+d};return Object(O.jsxs)("form",{noValidate:!0,autoComplete:"off",className:x.a.productForm,children:[Object(O.jsx)(f.a,{id:"standard-basic",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",variant:"outlined",className:x.a.inputName,value:a,onChange:function(e){return c(e.target.value)}}),Object(O.jsxs)(y.a,{variant:"outlined",className:x.a.inputSelect,children:[Object(O.jsx)(g.a,{id:"demo-simple-select-outlined-label",children:"\u0421\u043a\u043b\u0430\u0434"}),Object(O.jsx)(v.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:l,onChange:function(e){return o(e.target.value)},label:"Age",children:s.map((function(e,t){var a=e.name;return Object(O.jsx)(N.a,{value:a,children:a},t)}))})]}),Object(O.jsx)(f.a,{id:"standard-basic",label:"\u041a\u043e\u043b-\u0432\u043e",type:"number",variant:"outlined",onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,2)},className:x.a.inputNumber,value:d,onChange:function(e){return b(e.target.value)}}),Object(O.jsxs)(S.a,{variant:"outlined",color:"primary",className:x.a.buttonAdd,onClick:function(){a.length>0&&l.length>0&&d>0?(m(function(e){return{type:"ADD_PRODUCTS",payload:e}}(p)),c(""),o(""),b(""),D.b.success("\u041f\u0440\u043e\u0434\u0443\u043a\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"),h.push(p),localStorage.getItem("products")&&localStorage.setItem("products",JSON.stringify(h))):D.b.error("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f")},children:["\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",Object(O.jsx)(w.a,{className:x.a.btnIcon})]})]})},R=a(167),A=a(171),H=a(170),q=a(166),k=a(168),U=a(169),M=a(164),F=a(68),J=a.n(F),L=a(49),W=a.n(L),P=a(21),B=a(172),V=a(174);a(60);function X(e){var t=Object(n.useState)(""),a=Object(_.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(""),i=Object(_.a)(r,2),l=i[0],o=i[1],u=Object(n.useState)(""),j=Object(_.a)(u,2),d=j[0],b=j[1],m=Object(I.c)((function(e){return e.warehouses}));return Object(O.jsxs)(B.a,Object(P.a)(Object(P.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(O.jsx)(B.a.Header,{closeButton:!0,children:Object(O.jsxs)(B.a.Title,{id:"contained-modal-title-vcenter",children:[Object(O.jsx)("span",{className:"modal-title-name",children:e.productTitle})," ",Object(O.jsxs)("span",{className:"modal-title-subtitle",children:["(",e.quantity," \u0448\u0442.)"]})]})}),Object(O.jsx)(B.a.Body,{children:Object(O.jsxs)("form",{noValidate:!0,autoComplete:"off",className:x.a.productForm,children:[Object(O.jsx)(f.a,{id:"standard-basic",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",variant:"outlined",className:x.a.inputNameModal,value:c,onChange:function(e){return s(e.target.value)}}),Object(O.jsxs)(y.a,{variant:"outlined",className:x.a.inputSelectModal,children:[Object(O.jsx)(g.a,{id:"demo-simple-select-outlined-label",children:"\u0421\u043a\u043b\u0430\u0434"}),Object(O.jsx)(v.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",value:l,onChange:function(e){return o(e.target.value)},children:m.map((function(e,t){var a=e.name;return Object(O.jsx)(N.a,{value:a,children:a},t)}))})]}),Object(O.jsx)(f.a,{id:"standard-basic",label:"\u041a\u043e\u043b-\u0432\u043e",type:"number",variant:"outlined",className:x.a.inputNumberModal,value:d,onChange:function(e){return b(e.target.value)}})]})}),Object(O.jsxs)(B.a.Footer,{children:[Object(O.jsx)(V.a,{onClick:e.onHide,variant:"secondary",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(O.jsx)(V.a,{onClick:function(){c.length>0&&l>0&&d.length>0?(s(""),o(""),b(""),D.b.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e"),e.onHide()):D.b.error("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f")},variant:"primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]}))}var z=function(e){return{type:"ADD_PRODUCTS_REMAINDER",payload:e}};function G(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.products})),a=Object(n.useState)(""),c=Object(_.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(0),l=Object(_.a)(i,2),o=l[0],u=l[1],j=Object(n.useState)(!1),d=Object(_.a)(j,2),b=d[0],m=d[1],h=Object(I.c)((function(e){return e.warehouses}));return Object(n.useEffect)((function(){localStorage.getItem("products")&&localStorage.setItem("products",JSON.stringify(t))}),[t]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(X,{show:b,onHide:function(){return m(!1)},productTitle:s,quantity:o}),Object(O.jsx)(q.a,{component:M.a,children:Object(O.jsxs)(R.a,{className:x.a.table,"aria-label":"caption table",children:[Object(O.jsx)(k.a,{className:x.a.tableHead,children:Object(O.jsxs)(U.a,{className:x.a.tableTitle,children:[Object(O.jsx)(H.a,{children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(O.jsx)(H.a,{align:"center",children:"\u0421\u043a\u043b\u0430\u0434"}),Object(O.jsx)(H.a,{align:"center",children:"\u041a\u043e\u043b-\u0432\u043e"}),Object(O.jsx)(H.a,{align:"right"}),Object(O.jsx)(H.a,{align:"right"})]})}),Object(O.jsx)(A.a,{children:t.map((function(t){return Object(O.jsxs)(U.a,{children:[Object(O.jsx)(H.a,{component:"th",scope:"row",children:t.name}),Object(O.jsx)(H.a,{align:"center",children:h.map((function(e){return e.name===t.warehouse&&t.warehouse}))}),Object(O.jsx)(H.a,{align:"center",children:t.quantity}),Object(O.jsx)(H.a,{align:"right",children:Object(O.jsx)(J.a,{className:x.a.iconEdit,onClick:function(){return e=t,m(!0),r(e.name),void u(e.quantity);var e}})}),Object(O.jsx)(H.a,{align:"right",children:Object(O.jsx)(W.a,{className:x.a.iconDelete,onClick:function(){return function(t,a){e(C(t)),e(z({name:t,quantity:a})),D.b.dark('\u0422\u043e\u0432\u0430\u0440 "'+t+'" \u0443\u0434\u0430\u043b\u0451\u043d')}(t.name,t.quantity)}})})]},t.name)}))})]})})]})}function Z(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.remainder}));return Object(n.useEffect)((function(){localStorage.getItem("productsRemainder")&&localStorage.setItem("productsRemainder",JSON.stringify(t))}),[t]),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(q.a,{component:M.a,children:Object(O.jsxs)(R.a,{className:x.a.table+" "+x.a.tableRemainder,"aria-label":"caption table",children:[Object(O.jsx)(k.a,{className:x.a.tableHead,children:Object(O.jsxs)(U.a,{className:x.a.tableTitle,children:[Object(O.jsx)(H.a,{children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(O.jsx)(H.a,{align:"center",children:"\u041a\u043e\u043b-\u0432\u043e"}),Object(O.jsx)(H.a,{align:"right"})]})}),Object(O.jsx)(A.a,{children:t.map((function(t){return Object(O.jsxs)(U.a,{children:[Object(O.jsx)(H.a,{component:"th",scope:"row",children:t.name}),Object(O.jsx)(H.a,{align:"center",children:t.quantity}),Object(O.jsx)(H.a,{align:"right",children:Object(O.jsx)(W.a,{className:x.a.iconDelete,onClick:function(){return a=t.name,e({type:"DELETE_PRODUCT_REMAINDER",payload:a}),void D.b.dark('\u0422\u043e\u0432\u0430\u0440 "'+a+'" \u0443\u0434\u0430\u043b\u0451\u043d');var a}})})]},t.name)}))})]})})})}var K=function(){var e=Object(I.c)((function(e){return e.remainder}));return Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("h2",{children:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b"}),Object(O.jsxs)("div",{className:x.a.productsWrap,children:[Object(O.jsx)(T,{}),Object(O.jsx)("div",{className:x.a.productsList,children:Object(O.jsx)(G,{})}),e.length>0&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{className:x.a.remainderTitle,children:"\u041e\u0441\u0442\u0430\u0442\u043a\u0438:"}),Object(O.jsx)(Z,{})]})]})]})},Q=function(){return Object(O.jsx)(K,{})},Y=a(22),$=a.n(Y),ee=a(94),te=a.n(ee);function ae(e){var t=Object(I.b)(),a=Object(I.c)((function(e){return e.warehouses})),c=Object(I.c)((function(e){return e.products})),s=Object(n.useState)(""),r=Object(_.a)(s,2);r[0],r[1];return Object(n.useEffect)((function(){localStorage.getItem("products")&&localStorage.setItem("products",JSON.stringify(c))}),[c]),Object(n.useEffect)((function(){localStorage.getItem("warehouses")&&localStorage.setItem("warehouses",JSON.stringify(a))}),[a]),Object(O.jsxs)(B.a,Object(P.a)(Object(P.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(O.jsx)(B.a.Header,{closeButton:!0,children:Object(O.jsxs)(B.a.Title,{id:"contained-modal-title-vcenter",children:[Object(O.jsx)("span",{className:"modal-title-name",children:e.name})," ",Object(O.jsx)("span",{className:"modal-title-subtitle",children:"(\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043a\u043b\u0430\u0434)"})]})}),Object(O.jsx)(B.a.Body,{children:Object(O.jsx)("div",{className:$.a.modalList,children:Object(O.jsx)("ul",{children:e.products.length?e.products.map((function(e,a){var n=e.name,c=e.quantity;return Object(O.jsxs)("li",{children:[n," ",Object(O.jsx)("span",{children:c})," ",Object(O.jsx)(W.a,{className:$.a.iconDelete,onClick:function(){return function(e,a){t(C(e)),t(z({name:e,quantity:a})),D.b.dark('\u0422\u043e\u0432\u0430\u0440 "'+e+'" \u0443\u0434\u0430\u043b\u0451\u043d')}(n,c)}})]},a)})):Object(O.jsx)("span",{className:$.a.empty,children:"\u0416\u0434\u0435\u0442 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f"})})})}),Object(O.jsxs)(B.a.Footer,{children:[Object(O.jsx)(V.a,{onClick:e.onHide,variant:"secondary",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(O.jsx)(V.a,{onClick:function(){t({type:"DELETE_WAREHOUSES",payload:e}),D.b.dark('\u0421\u043a\u043b\u0430\u0434 "'+e.name+'" \u0443\u0434\u0430\u043b\u0451\u043d'),e.onHide()},variant:"danger",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(O.jsx)(V.a,{onClick:function(){e.onHide()},variant:"primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]}))}var ne=function(e){var t=Object(n.useState)(!1),a=Object(_.a)(t,2),c=a[0],s=a[1],r=Object(I.c)((function(e){return e.products})).filter((function(t){return t.warehouse===e.name}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ae,{show:c,onHide:function(){s(!1)},name:e.name,products:r}),Object(O.jsxs)("div",{className:$.a.item,children:[Object(O.jsxs)("div",{className:$.a.title,children:[Object(O.jsx)(te.a,{className:$.a.icon}),Object(O.jsx)("span",{children:e.name})]}),r.length?Object(O.jsxs)("div",{className:$.a.body,children:[Object(O.jsx)("span",{children:"\u0422\u043e\u0432\u0430\u0440\u044b:"}),Object(O.jsx)("ul",{children:r.map((function(e,t){var a=e.name,n=e.quantity;return Object(O.jsxs)("li",{children:[a," ",Object(O.jsx)("span",{children:n})]},t)}))})]}):Object(O.jsx)("div",{className:$.a.body,children:Object(O.jsx)("span",{className:$.a.empty,children:"\u0422\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0435\u0442"})}),Object(O.jsxs)("div",{className:$.a.bottom,onClick:function(){return s(!0)},children:[Object(O.jsx)(J.a,{className:$.a.icon}),"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"]})]})]})},ce=a(95),se=a.n(ce),re=(a(128),a(50));localStorage.getItem("warehouses")||localStorage.setItem("warehouses",JSON.stringify([{name:"\u0422\u0426 \u041c\u0430\u0440\u043c\u0435\u043b\u0430\u0434",products:[]},{name:"\u0426\u0435\u043d\u0442\u0440. \u0440\u044b\u043d\u043e\u043a",products:[]},{name:"\u0420\u0430\u0434\u0443\u0433\u0430",products:[]}]));var ie=JSON.parse(localStorage.getItem("warehouses"));function le(e){var t=Object(I.b)(),a=Object(I.c)((function(e){return e.warehouses})),c=Object(n.useState)(""),s=Object(_.a)(c,2),r=s[0],i=s[1],l={name:r,products:[]};return Object(O.jsxs)(B.a,Object(P.a)(Object(P.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(O.jsx)(B.a.Header,{closeButton:!0,children:Object(O.jsx)(B.a.Title,{id:"contained-modal-title-vcenter",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043a\u043b\u0430\u0434\u0430"})}),Object(O.jsx)(B.a.Body,{children:Object(O.jsx)(f.a,{id:"standard-basic",label:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043a\u043b\u0430\u0434\u0430",type:"text",variant:"outlined",className:x.a.inputNameWarehouses,value:r,onChange:function(e){return i(e.target.value)}})}),Object(O.jsxs)(B.a.Footer,{children:[Object(O.jsx)(V.a,{onClick:e.onHide,variant:"secondary",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(O.jsx)(V.a,{onClick:function(){r.length>0?(t(function(e){return{type:"ADD_WAREHOUSES",payload:e}}(l)),D.b.success("\u0421\u043a\u043b\u0430\u0434 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"),i(""),e.onHide(),a.push(l),localStorage.getItem("warehouses")&&localStorage.setItem("warehouses",JSON.stringify(a))):D.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0441\u043a\u043b\u0430\u0434\u0430!")},variant:"primary",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]}))}var oe=function(){var e=Object(n.useState)(!1),t=Object(_.a)(e,2),a=t[0],c=t[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:$.a.itemAdd,onClick:function(){return c(!0)},children:[Object(O.jsx)("span",{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043a\u043b\u0430\u0434"}),Object(O.jsx)(se.a,{className:$.a.itemIcon})]}),Object(O.jsx)(le,{show:a,onHide:function(){return c(!1)}})]})},ue=function(){var e=Object(I.c)((function(e){return e.warehouses}));return Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("h2",{children:"\u0421\u043a\u043b\u0430\u0434\u044b"}),Object(O.jsxs)("div",{className:$.a.warehousesWrap,children:[Object(O.jsx)(oe,{}),e.map((function(e,t){var a=e.name,n=e.products;return Object(O.jsx)(ne,{name:a,products:n},t)}))]})]})},je=function(){return Object(O.jsx)(ue,{})},de=function(){return Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{path:"/products",children:Object(O.jsx)(Q,{})}),Object(O.jsx)(h.a,{path:"/",children:Object(O.jsx)(je,{})})]})},be=a(96),Oe=a.n(be),me=function(){return Object(O.jsx)("div",{className:Oe.a.header,children:Object(O.jsxs)("h3",{children:["Justice Team ",Object(O.jsx)("span",{children:"Warehouses"})]})})};var he=function(){return Object(O.jsxs)(i.a,{basename:"/react-warehouses",children:[Object(O.jsx)(D.a,{position:"top-right",autoClose:3e3}),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(me,{}),Object(O.jsxs)("div",{className:"Main",children:[Object(O.jsx)(m,{}),Object(O.jsx)(de,{})]})]})]})},pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,179)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},xe=a(47);localStorage.getItem("products")||localStorage.setItem("products",JSON.stringify([{name:"\u0420\u0435\u043c\u0435\u043d\u044c \u0413\u0420\u041c",warehouse:"\u0422\u0426 \u041c\u0430\u0440\u043c\u0435\u043b\u0430\u0434",quantity:32},{name:"\u0414\u0438\u0441\u043a\u0438 \u043d\u0430 \u0430\u043a\u0446\u0435\u043d\u0442",warehouse:"\u0420\u0430\u0434\u0443\u0433\u0430",quantity:4},{name:"\u041f\u0440\u0438\u0431\u043e\u0440\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",warehouse:"\u0426\u0435\u043d\u0442\u0440. \u0440\u044b\u043d\u043e\u043a",quantity:15},{name:"\u041f\u0430\u0445\u0443\u0447\u043a\u0430 \u0432 \u043c\u0430\u0448\u0438\u043d\u0443",warehouse:"\u0422\u0426 \u041c\u0430\u0440\u043c\u0435\u043b\u0430\u0434",quantity:41},{name:"\u041e\u043f\u043b\u0451\u0442\u043a\u0430 \u043d\u0430 \u0440\u0443\u043b\u044c",warehouse:"\u0422\u0426 \u041c\u0430\u0440\u043c\u0435\u043b\u0430\u0434",quantity:5},{name:"\u041c\u0430\u0441\u043b\u043e MOBIL 5w40",warehouse:"\u0426\u0435\u043d\u0442\u0440. \u0440\u044b\u043d\u043e\u043a",quantity:15},{name:"\u0413\u0420\u041c Gates 8597-15479",warehouse:"\u0426\u0435\u043d\u0442\u0440. \u0440\u044b\u043d\u043e\u043a",quantity:2},{name:"\u041f\u0440\u0443\u0436\u0438\u043d\u043a\u0430 \u043d\u0430\u0442\u044f\u0436\u0438\u0442\u0435\u043b\u044f",warehouse:"\u0426\u0435\u043d\u0442\u0440. \u0440\u044b\u043d\u043e\u043a",quantity:32},{name:"\u041b\u0435\u0442\u043d\u044f\u044f \u0440\u0435\u0437\u0438\u043d\u0430",warehouse:"\u0420\u0430\u0434\u0443\u0433\u0430",quantity:1}]));var _e=JSON.parse(localStorage.getItem("products"));localStorage.getItem("productsRemainder")||localStorage.setItem("productsRemainder",JSON.stringify([{name:"\u0414\u0432\u043e\u0440\u043d\u0438\u043a\u0438",quantity:42},{name:"\u0417\u0430\u0434\u043d\u0438\u0435 \u0444\u0430\u0440\u044b",quantity:2}]));var fe=JSON.parse(localStorage.getItem("productsRemainder"));var ye=Object(xe.b)({warehouses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WAREHOUSES":return Object(P.a)(Object(P.a)({},e),{},{items:t.payload});case"ADD_WAREHOUSES":return[].concat(Object(re.a)(e),[t.payload]);case"DELETE_WAREHOUSES":return e.filter((function(e){return e.name!==t.payload.name}));case"CHANGE_WAREHOUSES":default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTS":return Object(P.a)(Object(P.a)({},e),{},{items:t.payload});case"ADD_PRODUCTS":return[].concat(Object(re.a)(e),[t.payload]);case"DELETE_PRODUCT":return e.filter((function(e){return e.name!==t.payload}));default:return e}},remainder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTS_REMAINDER":return Object(P.a)(Object(P.a)({},e),{},{items:t.payload});case"ADD_PRODUCTS_REMAINDER":return[].concat(Object(re.a)(e),[t.payload]);case"DELETE_PRODUCT_REMAINDER":return e.filter((function(e){return e.name!==t.payload}));default:return e}}}),ge=Object(xe.c)(ye,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());window.store=ge;var ve=ge;r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(I.a,{store:ve,children:Object(O.jsx)(he,{})})}),document.getElementById("root")),pe()},22:function(e,t,a){e.exports={warehousesWrap:"styles_warehousesWrap__2Fnuh",item:"styles_item__1hdNp",title:"styles_title__1feMh",icon:"styles_icon__2Rr9A",body:"styles_body__1pbhS",empty:"styles_empty__3UJuV",bottom:"styles_bottom__QP8CK",itemAdd:"styles_itemAdd__3aO9D",itemIcon:"styles_itemIcon__1IhFi",modalList:"styles_modalList__1dbeA",iconDelete:"styles_iconDelete__2AXgJ"}},55:function(e,t,a){e.exports={sidebar:"styles_sidebar__3rnzj",icon:"styles_icon__2-rHZ",active:"styles_active__1s5tR"}},56:function(e,t,a){},9:function(e,t,a){e.exports={productsWrap:"styles_productsWrap__3a-Se",productForm:"styles_productForm__1vvb9",inputName:"styles_inputName__3GNP2",inputSelect:"styles_inputSelect__2p136",inputNumber:"styles_inputNumber__303fC",inputNameWarehouses:"styles_inputNameWarehouses__3k47j",modalTitle:"styles_modalTitle__2Nmp8",buttonAdd:"styles_buttonAdd__1cZcw",btnIcon:"styles_btnIcon__ZDCsU",inputNameModal:"styles_inputNameModal__3L9Tm",inputSelectModal:"styles_inputSelectModal__16Yrm",inputNumberModal:"styles_inputNumberModal__2NFAS",productsList:"styles_productsList__TfBJu",productsItem:"styles_productsItem__1EqB1",remainderTitle:"styles_remainderTitle__18AIh",table:"styles_table__bjIUG",tableHead:"styles_tableHead__1sWER",tableTitle:"styles_tableTitle__24M6S",iconEdit:"styles_iconEdit__35fjT",iconDelete:"styles_iconDelete__1BsRk"}},96:function(e,t,a){e.exports={header:"styles_header__3NnZl"}}},[[129,1,2]]]);
//# sourceMappingURL=main.8b3bfeff.chunk.js.map