(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),c=a(13),o=a.n(c),r=(a(57),a(58),a(59),a(60),a(42)),s=a(43),l=a(53),d=a(51),m=(a(61),a(6)),u=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(m.jsx)("p",{className:"lead",children:"Looking for an employee's contact information? Begin by typing first couple letters of employee's name, in search field. Click the table header to toggle names in ascending/descending order."})]})})}}]),a}(i.a.Component),b=a(52),f=a(44),j=a.n(f),h=a(50),p=function(e){var t=e.employeeData.map((function(e){return{age:e.dob.age,image:Object(m.jsx)("img",{alt:e.name.first,src:e.picture.medium}),firstName:e.name.first,lastName:e.name.last,phoneNumber:e.phone,location:e.location.city+","+e.location.state,email:e.email}})),a=t.length>0;console.log({rowData:t});var n={columns:[{label:"Age",field:"age",sort:"asc",width:150},{label:"Image",field:"image",sort:"asc",width:150},{label:"First Name",field:"firstName",sort:"asc",width:150},{label:"Last Name",field:"lastName",sort:"asc",width:150},{label:"Phone Number",field:"phoneNumber",sort:"asc",width:270},{label:"Location",field:"location",sort:"asc",width:200},{label:"Email",field:"email",sort:"asc",width:200}],rows:a&&t};return Object(m.jsx)(h.c,{striped:!0,bordered:!0,large:!0,data:n})},g=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){j.a.get("https://randomuser.me/api/?results=200").then((function(e){i(e.data.results)}))}),[]),Object(m.jsx)(p,{employeeData:a})};var O=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(u,{}),Object(m.jsx)(g,{})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,111)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),c(e),o(e)}))};o.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),y()},57:function(e,t,a){},61:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.b96570c4.chunk.js.map