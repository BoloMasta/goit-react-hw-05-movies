"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{2849:function(n,e,t){t.d(e,{O:function(){return v}});var r,o,i,a,s=t(7689),d=t(168),c=t(1087),l=t(6444),u=t(1674),p=t(6789),x=l.ZP.div(r||(r=(0,d.Z)(["\n  margin: 0 auto;\n  padding: 0 30px;\n\n  @media screen and (max-width: 768px) {\n    padding: 0 8px;\n  }\n"]))),g=l.ZP.ul(o||(o=(0,d.Z)(["\n  list-style: none;\n  font-size: 1.1rem;\n  font-weight: 500;\n"]))),h=l.ZP.li(i||(i=(0,d.Z)(["\n  padding: 5px 12px;\n  border-bottom: 1px solid transparent;\n  position: relative;\n\n  &::before {\n    content: '';\n    background-image: url(",");\n    background-size: cover;\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    left: -25px;\n  }\n\n  @media screen and (max-width: 768px) {\n    font-size: 0.8rem;\n  }\n"])),u),f=(0,l.ZP)(c.rU)(a||(a=(0,d.Z)(["\n  color: #000;\n  text-decoration: none;\n  margin: 1px;\n\n  &:hover,\n  &:focus {\n    color: #ff3cac;\n  }\n\n  &:hover::after,\n  &:focus::after {\n    content: '';\n    background-image: ",";\n\n    background-size: cover;\n    width: 160px;\n    height: 240px;\n    display: block;\n    border-radius: 2px;\n    border: 1px solid rgba(43, 134, 197);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: -140px;\n    left: 400px;\n    z-index: 1;\n  }\n"])),(function(n){return n.cover?"url('https://image.tmdb.org/t/p/w500/".concat(n.cover,"')"):"url(".concat(p,")")})),m=t(184),v=function(n){var e=n.movies,t=(0,s.TH)();return(0,m.jsx)(x,{children:(0,m.jsx)(g,{children:e.map((function(n){return(0,m.jsx)(h,{children:(0,m.jsx)(f,{to:"/movies/".concat(n.id),state:{from:t},cover:n.poster_path,children:n.title})},n.id)}))})})}},3453:function(n,e,t){t.d(e,{O:function(){return i}});var r=t(8882),o=t(184),i=function(n){var e=n.page,t=n.totalPages,i=n.onPrevPage,a=n.onNextPage;if(1===t)return null;var s=1===e,d=e===t;return(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start"},children:[(0,o.jsx)(r.z,{disabled:s,label:"Prev page",icon:"left_arrow",onClick:function(){return i()}}),(0,o.jsx)(r.z,{disabled:d,label:"Next page",icon:"right_arrow",reverse:"true",onClick:function(){return a()}})]})}},5415:function(n,e,t){t.r(e);var r=t(9439),o=t(2791),i=t(6839),a=(t(5862),t(4180)),s=t(2849),d=t(3453),c=t(7672),l=t(184);e.default=function(){var n=(0,o.useState)(1),e=(0,r.Z)(n,2),t=e[0],u=e[1],p=(0,c.Q)("/trending/movie/day",t),x=p.data,g=p.error;return(0,l.jsxs)(a.im,{children:[g&&(0,l.jsx)("h2",{children:"Something went wrong. Try again later."}),(0,l.jsx)(a.h4,{children:"Trending movies:"}),(0,l.jsx)(i.y,{baseColor:"#dddddd",highlightColor:"#a5a5a5",children:x?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.O,{movies:x.results}),(0,l.jsx)(d.O,{page:t,totalPages:x.total_pages,onPrevPage:function(){return u(t-1)},onNextPage:function(){return u(t+1)}})]}):(0,l.jsx)(i.Z,{count:15,style:{height:30,width:300,marginTop:15}})})]})}}}]);
//# sourceMappingURL=415.50a032fd.chunk.js.map