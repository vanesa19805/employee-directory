(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(24),c=n.n(r),i=(n(38),n(30)),o=n(2),l=(n(39),n(12)),h=n.n(l),u=n(25),j=n(26),m=n(27),d=n(33),b=n(32),p=n(28),f=n.n(p),O=function(){return f.a.get("https://randomuser.me/api/?results=50&nat=us&seed=abc")},x=(n(59),n(1));var g=function(e){return console.log(e),Object(x.jsx)("div",{className:"card",children:Object(x.jsx)("div",{className:"content",children:Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("strong",{children:"Image:"}),"  ",Object(x.jsx)("div",{className:"img-container",children:Object(x.jsx)("img",{alt:e.name,src:e.image})})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("strong",{children:"Name:"})," ",e.name]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("strong",{children:"Phone:"})," ",e.phone]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("strong",{children:"DOB:"})," ",e.dob]})]})})})};n(61);var v=function(e){return Object(x.jsx)("form",{className:"search",children:Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"employee",children:"Employee Directory:"}),Object(x.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"employee-name",list:"employee",type:"text",className:"form-control",placeholder:"search name of the employee",id:"employee"})]})})};n(62);var y=function(e){return Object(x.jsx)("h1",{className:"title",children:e.children})},N=n(29),C=n.n(N),L=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={employees:[],filterList:[],searchName:""},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({employees:t.data.results,filterList:t.data.results})}))}},{key:"handleInputChange",value:function(){var e=Object(u.a)(h.a.mark((function e(t){var n,s,a=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({searchName:t.target.value});case 2:n=this.state.employees,""===this.state.searchName&&(console.log("nothing here"),this.setState({filterList:n})),s=this.state.employees.filter((function(e){return e.name.first.toLowerCase().includes(a.state.searchName.toLowerCase())||e.name.last.toLowerCase().includes(a.state.searchName.toLowerCase())})),this.setState({filterList:s});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(y,{}),Object(x.jsx)(v,{search:this.state.searchName,handleInputChange:this.handleInputChange.bind(this)}),this.state.filterList.length>0?this.state.filterList.map((function(e){return Object(x.jsx)(g,{name:e.name.first+" "+e.name.last,image:e.picture.large,phone:e.phone,email:e.email,dob:C()(e.dob.date).format("MM/DD/YYYY")})})):"no search found"]})}}]),n}(s.Component);n(64);var w=function(e){return Object(x.jsx)("main",{className:"wrapper",children:e.children})};var I=function(){return Object(x.jsx)(i.a,{children:Object(x.jsx)("div",{children:Object(x.jsx)(w,{children:Object(x.jsx)(o.a,{exact:!0,path:"/",component:L})})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};n(70);c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),k()}},[[71,1,2]]]);
//# sourceMappingURL=main.3be4ae88.chunk.js.map