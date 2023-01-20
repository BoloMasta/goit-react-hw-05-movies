"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[312],{2849:function(n,e,t){t.d(e,{O:function(){return w}});var r,i,o,a,d=t(7689),s=t(168),l=t(1087),p=t(6444),c=t(1674),u=t(6789),x=t(2007),g=t.n(x),h=p.ZP.div(r||(r=(0,s.Z)(["\n  margin: 0 auto;\n  padding: 0 30px;\n\n  @media screen and (max-width: 768px) {\n    padding: 0 8px;\n  }\n"]))),f=p.ZP.ul(i||(i=(0,s.Z)(["\n  list-style: none;\n  font-size: 1.1rem;\n  font-weight: 500;\n"]))),m=p.ZP.li(o||(o=(0,s.Z)(["\n  padding: 5px 12px;\n  border-bottom: 1px solid transparent;\n  position: relative;\n\n  &::before {\n    content: '';\n    background-image: url(",");\n    background-size: cover;\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    left: -25px;\n  }\n\n  @media screen and (max-width: 768px) {\n    font-size: 0.8rem;\n  }\n"])),c),v=(0,p.ZP)(l.rU)(a||(a=(0,s.Z)(["\n  color: #000;\n  text-decoration: none;\n  margin: 1px;\n\n  &:hover,\n  &:focus {\n    color: #ff3cac;\n  }\n\n  @media screen and (min-width: 768px) {\n    &:hover::after,\n    &:focus::after {\n      content: '';\n      background-image: ",";\n\n      background-size: cover;\n      width: 160px;\n      height: 240px;\n      display: block;\n      border-radius: 4px;\n      border: 1px solid rgba(43, 134, 197);\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n      position: absolute;\n      top: -140px;\n      left: 400px;\n      z-index: 1;\n    }\n  }\n"])),(function(n){return n.cover?"url('https://image.tmdb.org/t/p/w500/".concat(n.cover,"')"):"url(".concat(u,")")}));m.propTypes={filmTape:g().string},v.propTypes={cover:g().string,defaultPoster:g().string};var b=t(184),w=function(n){var e=n.movies,t=(0,d.TH)();return(0,b.jsx)(h,{children:(0,b.jsx)(f,{children:e.map((function(n){return(0,b.jsx)(m,{children:(0,b.jsx)(v,{to:"/movies/".concat(n.id),state:{from:t},cover:n.poster_path,children:n.title})},n.id)}))})})}},3453:function(n,e,t){t.d(e,{O:function(){return o}});var r=t(8882),i=t(184),o=function(n){var e=n.page,t=n.totalPages,o=n.onPrevPage,a=n.onNextPage;if(1===t)return null;var d=1===e,s=e===t;return(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start"},children:[(0,i.jsx)(r.z,{disabled:d,label:"Prev page",icon:"left_arrow",onClick:function(){return o()}}),(0,i.jsx)(r.z,{disabled:s,label:"Next page",icon:"right_arrow",reverse:"true",onClick:function(){return a()}})]})}},5016:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,i,o,a=t(9439),d=t(2791),s=t(1087),l=t(6839),p=(t(5862),t(4180)),c=t(3628),u=t(168),x=t(6444),g=t(9128),h=x.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 0 16px;\n  flex-wrap: wrap;\n\n  input {\n    padding: 8px 32px 8px 8px;\n    width: 250px;\n    border-image: linear-gradient(\n      225deg,\n      rgba(255, 60, 172) 0%,\n      rgba(120, 75, 160) 50%,\n      rgba(43, 134, 197) 100%\n    );\n    border-image-slice: 1;\n    border-width: 2px;\n    border-style: solid;\n    font: inherit;\n    outline: none;\n    opacity: 0.7;\n    transition: opacity 250ms ease-in-out;\n\n    &:hover {\n      opacity: 1;\n    }\n\n    &:focus {\n      opacity: 1;\n      background-image: linear-gradient(\n        90deg,\n        rgba(43, 134, 197, 0.15) 0%,\n        rgba(120, 75, 160, 0.15) 50%,\n        rgba(255, 60, 172, 0.15) 100%\n      );\n    }\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n    justify-content: center;\n    gap: 0.5rem;\n\n    input {\n      width: 100%;\n      font-size: 0.8rem;\n    }\n  }\n"]))),f=x.ZP.h2(i||(i=(0,u.Z)(["\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin: 1rem 0;\n  display: inline-block;\n\n  @media (max-width: 768px) {\n    font-size: 1.2rem;\n    width: 100%;\n    text-align: center;\n  }\n"]))),m=(0,x.ZP)(g.G4C)(o||(o=(0,u.Z)(["\n  width: 25px;\n  height: 25px;\n  position: relative;\n  right: 56px;\n  z-index: 1;\n  opacity: 0.7;\n\n  @media (max-width: 768px) {\n    top: -40px;\n    left: calc(50% - 20px);\n  }\n"]))),v=t(184),b=function(n){var e=n.value,t=n.onChange;return(0,v.jsxs)(h,{children:[(0,v.jsx)(f,{children:"Search movies:"}),(0,v.jsx)(c.DebounceInput,{type:"text",debounceTimeout:500,value:e,onChange:function(n){return t(n.target.value)},placeholder:"type here"}),(0,v.jsx)(m,{})]})},w=t(2849),y=t(3453),j=t(7672),P=function(){var n=(0,d.useState)(1),e=(0,a.Z)(n,2),t=e[0],r=e[1],i=(0,s.lr)(),o=(0,a.Z)(i,2),c=o[0],u=o[1],x=c.get("query")||"",g=(0,j.Q)("/search/movie",t,x||{query:""}),h=g.data,f=g.error;return(0,v.jsx)(p.im,{children:(0,v.jsxs)(l.y,{baseColor:"#dddddd",highlightColor:"#a5a5a5",children:[(0,v.jsx)(b,{value:x,onChange:function(n){u(""!==n&&{query:n})}}),f&&(0,v.jsx)("h2",{children:"failed to load"}),h||""===c?0===(null===h||void 0===h?void 0:h.total_results)&&x&&!f?(0,v.jsx)("h2",{children:"No results found"}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w.O,{movies:h.results}),h.total_pages>1&&(0,v.jsx)(y.O,{page:t,totalPages:h.total_pages,onPrevPage:function(){return r(t-1)},onNextPage:function(){return r(t+1)}})]}):(0,v.jsx)(l.Z,{count:15,style:{height:30,width:300,marginTop:15}})]})})}}}]);
//# sourceMappingURL=312.6a6c0d9c.chunk.js.map