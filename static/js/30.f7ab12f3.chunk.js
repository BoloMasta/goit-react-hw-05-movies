"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[30],{854:function(e,n,t){var r=t(8402),a=t(184);n.Z=function(){return(0,a.jsx)(r.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",margin:"0 auto",position:"fixed",top:"0",left:"0",right:"0",bottom:"0",zIndex:"9999"},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})}},5130:function(e,n,t){var r,a,c,i,o,s=t(168),u=t(1087),l=t(6444),p=t(7689),f=t(184),v=l.ZP.div(r||(r=(0,s.Z)(["\n  margin: 0 auto;\n"]))),h=l.ZP.h2(a||(a=(0,s.Z)(["\n  font-size: 1.5rem;\n  font-weight: 500;\n"]))),d=l.ZP.ul(c||(c=(0,s.Z)(["\n  list-style: outside '\ud83c\udf9e\ufe0f';\n"]))),g=l.ZP.li(i||(i=(0,s.Z)(["\n  padding: 6px 12px;\n  background: linear-gradient(white, white) padding-box,\n    linear-gradient(\n        to right,\n        rgb(255, 255, 255) 0%,\n        darkblue 5%,\n        rgb(255, 255, 255) 30%\n      )\n      border-box;\n  border-bottom: 1px solid transparent;\n"]))),x=(0,l.ZP)(u.rU)(o||(o=(0,s.Z)(["\n  color: #000;\n  text-decoration: none;\n  margin: 1px;\n\n  &:hover,\n  &:focus {\n    color: #ff3cac;\n  }\n"])));n.Z=function(e){var n=e.movies,t=e.label,r=(0,p.TH)();return(0,f.jsxs)(v,{children:[(0,f.jsx)(h,{children:t}),(0,f.jsx)(d,{children:n.map((function(e){return(0,f.jsx)(g,{children:(0,f.jsx)(x,{to:"/movies/".concat(e.id),state:{from:r},children:e.title})},e.id)}))})]})}},7030:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(5861),a=t(9439),c=t(7757),i=t.n(c),o=t(2791),s=t(4390),u=t(854),l={Container:"Container_Container__8y2gF"},p=t(184),f=function(e){var n=e.children,t=e.extraClass,r=[l.Container,t].join(" ");return(0,p.jsx)("div",{className:r,children:n})},v=t(5130),h=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],l=(0,o.useState)(null),h=(0,a.Z)(l,2),d=h[0],g=h[1],x=(0,o.useState)(!1),Z=(0,a.Z)(x,2),m=Z[0],w=Z[1];return(0,o.useEffect)((function(){w(!0);var e=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.fetchTrendingMovies();case 3:n=e.sent,t=n.results,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(e.t0);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)(f,{children:[m&&(0,p.jsx)(u.Z,{}),d&&(0,p.jsx)("h1",{children:"Something went wrong. Try again later."}),(0,p.jsx)(v.Z,{movies:t,label:"Trending movies:"})]})}},4390:function(e,n,t){var r=t(5861),a=t(5671),c=t(3144),i=t(7757),o=t.n(i),s=t(3263),u="92be59e0090ddfe5570b8756c403476a";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var l=function(){function e(){(0,a.Z)(this,e)}return(0,c.Z)(e,[{key:"fetchTrendingMovies",value:function(){var e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day?api_key=".concat(u));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchMoviesByQuery",value:function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(n));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},{key:"fetchMovieDetails",value:function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(n,"?api_key=").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},{key:"fetchMovieCast",value:function(){var e=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(n,"/credits?api_key=").concat(u));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()},{key:"fetchMovieReviews",value:function(){var e=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(u));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()}]),e}();n.Z=new l}}]);
//# sourceMappingURL=30.f7ab12f3.chunk.js.map