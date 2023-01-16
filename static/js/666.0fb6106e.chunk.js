"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[666],{9773:function(n,e,r){r.d(e,{O:function(){return f}});var t,i,a,o,s=r(7689),c=r(168),d=r(1087),u=r(6444),l=u.ZP.div(t||(t=(0,c.Z)(["\n  margin: 0 auto;\n  padding: 0 30px;\n\n  @media screen and (max-width: 768px) {\n    padding: 0 8px;\n  }\n"]))),p=u.ZP.ul(i||(i=(0,c.Z)(["\n  list-style: outside '\ud83c\udf9e\ufe0f';\n"]))),g=u.ZP.li(a||(a=(0,c.Z)(["\n  padding: 6px 12px;\n  background: linear-gradient(white, white) padding-box,\n    linear-gradient(\n        to right,\n        rgb(255, 255, 255) 0%,\n        darkblue 5%,\n        rgb(255, 255, 255) 30%\n      )\n      border-box;\n  border-bottom: 1px solid transparent;\n\n  @media screen and (max-width: 768px) {\n    font-size: 0.8rem;\n  }\n"]))),h=(0,u.ZP)(d.rU)(o||(o=(0,c.Z)(["\n  color: #000;\n  text-decoration: none;\n  margin: 1px;\n\n  &:hover,\n  &:focus {\n    color: #ff3cac;\n  }\n"]))),x=r(184),f=function(n){var e=n.movies,r=(0,s.TH)();return(0,x.jsx)(l,{children:(0,x.jsx)(p,{children:e.map((function(n){return(0,x.jsx)(g,{children:(0,x.jsx)(h,{to:"/movies/".concat(n.id),state:{from:r},children:n.title})},n.id)}))})})}},3666:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t,i,a,o=r(5861),s=r(9439),c=r(7757),d=r.n(c),u=r(2791),l=r(1087),p=r(7689),g=r(6839),h=(r(5862),r(3628)),x=r(168),f=r(6444),m=r(9128),b=f.ZP.div(t||(t=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n\n  input {\n    padding: 8px 32px 8px 8px;\n    width: 250px;\n    border-image: linear-gradient(\n      225deg,\n      rgba(255, 60, 172) 0%,\n      rgba(120, 75, 160) 50%,\n      rgba(43, 134, 197) 100%\n    );\n    border-image-slice: 1;\n    border-width: 2px;\n    border-style: solid;\n    font: inherit;\n    outline: none;\n    opacity: 0.7;\n    transition: opacity 250ms ease-in-out;\n\n    &:hover {\n      opacity: 1;\n    }\n\n    &:focus {\n      opacity: 1;\n      background-image: linear-gradient(\n        90deg,\n        rgba(43, 134, 197, 0.15) 0%,\n        rgba(120, 75, 160, 0.15) 50%,\n        rgba(255, 60, 172, 0.15) 100%\n      );\n    }\n  }\n"]))),v=f.ZP.h2(i||(i=(0,x.Z)(["\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin: 1rem 0;\n  display: block;\n  flex-basis: 100%;\n"]))),Z=(0,f.ZP)(m.G4C)(a||(a=(0,x.Z)(["\n  width: 25px;\n  height: 25px;\n  margin-left: -32px;\n  z-index: 1;\n  opacity: 0.8;\n"]))),j=r(184),w=function(n){var e=n.value,r=n.onChange;return(0,j.jsxs)(b,{children:[(0,j.jsx)(v,{children:"Search movies"}),(0,j.jsx)(h.DebounceInput,{debounceTimeout:500,value:e,onChange:r,placeholder:"type here"}),(0,j.jsx)(Z,{})]})},y=r(9773),k=r(4253),S=r(3840),P=function(){var n=(0,u.useState)([]),e=(0,s.Z)(n,2),r=e[0],t=e[1],i=(0,u.useState)(null),a=(0,s.Z)(i,2),c=a[0],h=a[1],x=(0,u.useState)(!1),f=(0,s.Z)(x,2),m=f[0],b=f[1],v=(0,l.lr)(),Z=(0,s.Z)(v,2),P=Z[0],C=Z[1],q=(0,u.useState)(!1),T=(0,s.Z)(q,2),_=T[0],z=T[1],O=P.get("query")||"";return(0,u.useEffect)((function(){if(P.get("query")){b(!0);var n=function(){var n=(0,o.Z)(d().mark((function n(){var e,r;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S.Z.fetchMoviesByQuery(P.get("query"));case 3:e=n.sent,0===(r=e.results).length&&z(!0),t(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),h(n.t0);case 12:return n.prev=12,b(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}}),[P]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{value:O,onChange:function(n){z(!1),C({query:n.target.value})}}),c&&(0,j.jsx)("h1",{children:"Something went wrong. Try again later."}),_&&(0,j.jsx)("h2",{children:"No results found"}),m?(0,j.jsx)(g.Z,{count:15,style:{height:30,width:300,marginTop:15}}):(0,j.jsx)(y.O,{movies:r}),(0,j.jsx)(k.S,{children:(0,j.jsx)(u.Suspense,{fallback:(0,j.jsx)("div",{children:"Loading subpage..."}),children:(0,j.jsx)(p.j3,{})})})]})}}}]);
//# sourceMappingURL=666.0fb6106e.chunk.js.map