"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[361],{4361:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,c,i,o,u=t(5861),s=t(9439),l=t(7757),p=t.n(l),f=t(2791),h=t(7689),v=t(3614),d=t(168),g=t(6444),x=g.ZP.div(r||(r=(0,d.Z)(["\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  margin: 20px 0;\n  width: 100%;\n  max-width: 1200px;\n  height: 100%;\n  max-height: 500px;\n  overflow-y: scroll;\n  transition: all 0.2s ease-in-out;\n  padding: 10px;\n\n  &:hover {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);\n  }\n\n  ::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: #f5f5f5;\n    border-radius: 10px;\n  }\n\n  ::-webkit-scrollbar {\n    width: 10px;\n    background-color: #f5f5f5;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background-image: linear-gradient(\n      225deg,\n      #2b86c5 0%,\n      #784ba0 50%,\n      #ff3cac 100%\n    );\n  }\n"]))),b=g.ZP.ul(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),w=g.ZP.li(c||(c=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  margin-bottom: 15px;\n  padding: 5px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  &:hover {\n    background: linear-gradient(\n      90deg,\n      rgba(255, 255, 255) 0%,\n      rgba(255, 60, 172, 0.5) 15%,\n      rgba(120, 75, 160, 0.5) 35%,\n      rgba(43, 134, 197, 0.5) 45%,\n      rgba(255, 255, 255) 90%\n    );\n  }\n"]))),m=g.ZP.p(i||(i=(0,d.Z)(["\n  font-size: 1.4rem;\n  font-weight: 700;\n  text-align: left;\n  width: 100%;\n  white-space: nowrap;\n"]))),k=g.ZP.p(o||(o=(0,d.Z)(["\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: left;\n"]))),Z=t(4390),y=t(184),j=function(){var n=(0,h.UO)().movieId,e=(0,f.useState)([]),t=(0,s.Z)(e,2),r=t[0],a=t[1],c=(0,f.useState)(null),i=(0,s.Z)(c,2),o=i[0],l=i[1],d=(0,f.useState)(!1),g=(0,s.Z)(d,2),j=g[0],_=g[1];return(0,f.useEffect)((function(){_(!0);var e=function(){var e=(0,u.Z)(p().mark((function e(){var t,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.Z.fetchMovieReviews(n);case 3:t=e.sent,r=t.results,a(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l(e.t0);case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,y.jsxs)(y.Fragment,{children:[j&&(0,y.jsx)(v.a,{}),o&&(0,y.jsx)("h2",{children:"Something went wrong. Try again later."}),0!==r.length||j?(0,y.jsx)(x,{children:(0,y.jsx)(b,{children:r.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,y.jsxs)(w,{children:[(0,y.jsxs)(m,{children:["Author: ",t]}),(0,y.jsx)(k,{children:r})]},e)}))})}):(0,y.jsx)("h2",{children:"We don't have any reviews for this movie."})]})}},4390:function(n,e,t){var r=t(5861),a=t(5671),c=t(3144),i=t(7757),o=t.n(i),u=t(3263),s="92be59e0090ddfe5570b8756c403476a";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var l=function(){function n(){(0,a.Z)(this,n)}return(0,c.Z)(n,[{key:"fetchTrendingMovies",value:function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/trending/movie/day?api_key=".concat(s));case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}()},{key:"fetchMoviesByQuery",value:function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(e));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},{key:"fetchMovieDetails",value:function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(e,"?api_key=").concat(s));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},{key:"fetchMovieCast",value:function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},{key:"fetchMovieReviews",value:function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}]),n}();e.Z=new l}}]);
//# sourceMappingURL=361.80a492e8.chunk.js.map