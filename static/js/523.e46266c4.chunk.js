"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[523],{2990:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,i,c,o,s,u=t(5861),h=t(9439),l=t(8683),d=t(7757),p=t.n(d),f=t(2791),v=t(7689),g=t(6839),x=(t(5862),t(168)),m=t(6444),w=m.ZP.div(r||(r=(0,x.Z)(["\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  margin: 20px 0;\n  width: 100%;\n  max-width: 1200px;\n  height: 100%;\n  max-height: 500px;\n  overflow-y: scroll;\n  transition: all 0.2s ease-in-out;\n  padding: 10px;\n\n  &:hover {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);\n  }\n\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: #f5f5f5;\n    border-radius: 10px;\n  }\n\n  ::-webkit-scrollbar {\n    width: 10px;\n    background-color: #f5f5f5;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background-image: linear-gradient(\n      225deg,\n      #2b86c5 0%,\n      #784ba0 50%,\n      #ff3cac 100%\n    );\n  }\n"]))),b=m.ZP.ul(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Z=m.ZP.li(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: row;\n  height: 200px;\n  gap: 10px;\n  width: 100%;\n  margin-bottom: 10px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  &:hover {\n    background: linear-gradient(\n      90deg,\n      rgba(255, 255, 255) 0%,\n      rgba(255, 60, 172, 0.5) 15%,\n      rgba(120, 75, 160, 0.5) 35%,\n      rgba(43, 134, 197, 0.5) 45%,\n      rgba(255, 255, 255) 90%\n    );\n  }\n"]))),y=m.ZP.img(c||(c=(0,x.Z)(["\n  width: ",";\n  height: ",";\n  border-radius: 5px;\n"])),(function(n){return n.width}),(function(n){return n.height})),k=m.ZP.p(o||(o=(0,x.Z)(["\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #000;\n  margin: 10px 0;\n  width: 25%;\n  display: flex;\n  align-items: center;\n"]))),_=m.ZP.p(s||(s=(0,x.Z)(["\n  font-size: 1rem;\n  font-weight: 400;\n  color: #000;\n  margin: 10px 0;\n  max-width: 50%;\n  display: flex;\n  align-items: center;\n"]))),j=t(4390),S=t(184),E=function(n,e){switch(e.type){case"SET_CAST":return e.payload;case"SET_LOADED":return n.map((function(n){return n.id===e.payload?(0,l.Z)((0,l.Z)({},n),{},{loaded:!0}):n}));default:return n}},T=function(){var n=(0,v.UO)().movieId,e=(0,f.useReducer)(E,[]),t=(0,h.Z)(e,2),r=t[0],a=t[1],i=(0,f.useState)(null),c=(0,h.Z)(i,2),o=c[0],s=c[1],d=(0,f.useState)(!1),x=(0,h.Z)(d,2),m=x[0],T=x[1];(0,f.useEffect)((function(){T(!0);var e=function(){var e=(0,u.Z)(p().mark((function e(){var t,r,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.Z.fetchMovieCast(n);case 3:t=e.sent,r=t.cast,i=r.map((function(n){return(0,l.Z)((0,l.Z)({},n),{},{loaded:!1})})),a({type:"SET_CAST",payload:i}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),s(e.t0);case 12:return e.prev=12,T(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);var C=function(n){var e=Number(n.target.dataset.id);a({type:"SET_LOADED",payload:e})};return(0,S.jsxs)(S.Fragment,{children:[o&&(0,S.jsx)("h2",{children:"Something went wrong. Try again later."}),m&&(0,S.jsx)(w,{children:(0,S.jsx)(b,{children:(0,S.jsxs)(Z,{children:[(0,S.jsx)(g.Z,{width:150,height:200,inline:!0}),(0,S.jsx)(k,{children:(0,S.jsx)(g.Z,{width:200,height:50,inline:!0})}),(0,S.jsx)(_,{children:(0,S.jsx)(g.Z,{width:400,height:50,inline:!0})})]})})}),!m&&!o&&(0,S.jsx)(S.Fragment,{children:0!==r.length||m?(0,S.jsxs)(w,{children:[(0,S.jsx)(b,{children:r.map((function(n){var e=n.id,t=n.profile_path,r=n.name,a=n.character,i=n.loaded;return(0,S.jsxs)(Z,{children:[!i&&(0,S.jsx)(g.Z,{width:150,height:195}),(0,S.jsx)(y,{src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://dummyimage.com/200x300/2a2a2a/ffffff&text=No+image",alt:r,"data-id":e,onLoad:C,height:i?200:0,width:i?150:0}),(0,S.jsx)(k,{children:r}),(0,S.jsxs)(_,{children:["Character: ",a]})]},e)}))}),0===r.length&&!m&&(0,S.jsx)("h2",{children:"We don't have any cast for this movie."})]}):(0,S.jsx)("h2",{children:"We don't have any cast for this movie."})})]})}},4390:function(n,e,t){var r=t(5861),a=t(5671),i=t(3144),c=t(7757),o=t.n(c),s=t(3263),u={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY;s.Z.defaults.baseURL="https://api.themoviedb.org/3";var h=function(){function n(){(0,a.Z)(this,n)}return(0,i.Z)(n,[{key:"fetchTrendingMovies",value:function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/trending/movie/day?api_key=".concat(u));case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}()},{key:"fetchMoviesByQuery",value:function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(e));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},{key:"fetchMovieDetails",value:function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/movie/".concat(e,"?api_key=").concat(u));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},{key:"fetchMovieCast",value:function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/movie/".concat(e,"/credits?api_key=").concat(u));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},{key:"fetchMovieReviews",value:function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(u));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}]),n}();e.Z=new h}}]);
//# sourceMappingURL=523.e46266c4.chunk.js.map