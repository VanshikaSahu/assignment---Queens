(this.webpackJsonpawesome_app=this.webpackJsonpawesome_app||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(5),a=n.n(r),s=(n(11),n(2)),i=n(4),o=n.n(i),u=n(6),j=n(0),b=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),b=i[0],l=i[1],O=Object(c.useState)(),h=Object(s.a)(O,2),p=h[0],d=h[1],x=Object(c.useState)(),m=Object(s.a)(x,2),f=m[0],v=m[1],w=Object(c.useState)(),S=Object(s.a)(w,2),g=S[0],k=S[1],y=Object(c.useState)(!0),C=Object(s.a)(y,2),N=C[0],Q=C[1],z=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jservice.io/api/random",e.next=3,fetch("https://jservice.io/api/random");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,v("Que: ".concat(n[0].question)),k(n[0].answer);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();N&&(z(),Q(!1));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{id:"error",style:p,children:n}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:f}),Object(j.jsx)("input",{type:"text",placeholder:"Enter your answer",value:b,onChange:function(e){l(e.target.value)}}),Object(j.jsx)("button",{className:"btn",onClick:function(){b===g?(r("The answer is correct"),d({color:"green"}),z(),l("")):(r("The answer is not correct"),d({color:"red"}),l(""))},children:"Submit"})]})]})},l=function(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Quiz Game"}),n?Object(j.jsx)("button",{onClick:function(){r(!1)},className:"btn1",children:"Start Quiz"}):null,n?null:Object(j.jsx)(b,{})]})};a.a.render(Object(j.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b5b95546.chunk.js.map