"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{2849:function(e,n,t){t.d(n,{O:function(){return x}});var r,o,i,a,c=t(7689),l=t(168),s=t(1087),d=t(6444),u=t(1674),p=t(6789),f=d.ZP.div(r||(r=(0,l.Z)(["\n  margin: 0 auto;\n  padding: 0 30px;\n\n  @media screen and (max-width: 768px) {\n    padding: 0 8px;\n  }\n"]))),h=d.ZP.ul(o||(o=(0,l.Z)(["\n  list-style: none;\n  font-size: 1.1rem;\n  font-weight: 500;\n"]))),g=d.ZP.li(i||(i=(0,l.Z)(["\n  padding: 5px 12px;\n  border-bottom: 1px solid transparent;\n  position: relative;\n\n  &::before {\n    content: '';\n    background-image: url(",");\n    background-size: cover;\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    left: -25px;\n  }\n\n  @media screen and (max-width: 768px) {\n    font-size: 0.8rem;\n  }\n"])),u),m=(0,d.ZP)(s.rU)(a||(a=(0,l.Z)(["\n  color: #000;\n  text-decoration: none;\n  margin: 1px;\n\n  &:hover,\n  &:focus {\n    color: #ff3cac;\n  }\n\n  &:hover::after,\n  &:focus::after {\n    content: '';\n    background-image: ",";\n\n    background-size: cover;\n    width: 160px;\n    height: 240px;\n    display: block;\n    border-radius: 2px;\n    border: 1px solid rgba(43, 134, 197);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: -140px;\n    left: 400px;\n    z-index: 1;\n  }\n"])),(function(e){return e.cover?"url('https://image.tmdb.org/t/p/w500/".concat(e.cover,"')"):"url(".concat(p,")")})),v=t(184),x=function(e){var n=e.movies,t=(0,c.TH)();return(0,v.jsx)(f,{children:(0,v.jsx)(h,{children:n.map((function(e){return(0,v.jsx)(g,{children:(0,v.jsx)(m,{to:"/movies/".concat(e.id),state:{from:t},cover:e.poster_path,children:e.title})},e.id)}))})})}},3453:function(e,n,t){t.d(n,{O:function(){return i}});var r=t(8882),o=t(184),i=function(e){var n=e.page,t=e.totalPages,i=e.onPrevPage,a=e.onNextPage;if(1===t)return null;var c=1===n,l=n===t;return(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start"},children:[(0,o.jsx)(r.z,{disabled:c,label:"Prev page",icon:"left_arrow",onClick:function(){return i()}}),(0,o.jsx)(r.z,{disabled:l,label:"Next page",icon:"right_arrow",reverse:"true",onClick:function(){return a()}})]})}},5415:function(e,n,t){t.r(n);var r=t(9439),o=t(2791),i=t(6839),a=(t(5862),t(4180)),c=t(2849),l=t(3453),s=t(7672),d=t(184);n.default=function(){var e=(0,o.useState)(1),n=(0,r.Z)(e,2),t=n[0],u=n[1],p=(0,s.Q)("/trending/movie/day",t),f=p.data,h=p.error;return(0,d.jsxs)(a.im,{children:[h&&(0,d.jsx)("h2",{children:"Something went wrong. Try again later."}),(0,d.jsx)(a.h4,{children:"Trending movies:"}),(0,d.jsx)(i.y,{baseColor:"#dddddd",highlightColor:"#a5a5a5",children:f?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.O,{movies:f.results}),(0,d.jsx)(l.O,{page:t,totalPages:f.total_pages,onPrevPage:function(){return u(t-1)},onNextPage:function(){return u(t+1)}})]}):(0,d.jsx)(i.Z,{count:15,style:{height:30,width:300,marginTop:15}})})]})}},5862:function(){},6839:function(e,n,t){t.d(n,{y:function(){return u},Z:function(){return d}});var r=t(9439),o=t(8683);function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=t(2791),c=["count","wrapper","className","containerClassName","containerTestId","circle","style"],l=["children"],s=a.createContext({});function d(e){for(var n,t,l,d=e.count,u=void 0===d?1:d,p=e.wrapper,f=e.className,h=e.containerClassName,g=e.containerTestId,m=e.circle,v=void 0!==m&&m,x=e.style,b=i(e,c),y=a.useContext(s),w=(0,o.Z)({},b),j=0,Z=Object.entries(b);j<Z.length;j++){var k=(0,r.Z)(Z[j],2),P=k[0];"undefined"===typeof k[1]&&delete w[P]}var C=(0,o.Z)((0,o.Z)((0,o.Z)({},y),w),{},{circle:v}),O=(0,o.Z)((0,o.Z)({},x),function(e){var n=e.baseColor,t=e.highlightColor,r=e.width,o=e.height,i=e.borderRadius,a=e.circle,c=e.direction,l=e.duration,s=e.enableAnimation,d=void 0===s||s,u={};return"rtl"===c&&(u["--animation-direction"]="reverse"),"number"===typeof l&&(u["--animation-duration"]="".concat(l,"s")),d||(u["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(u.width=r),"string"!==typeof o&&"number"!==typeof o||(u.height=o),"string"!==typeof i&&"number"!==typeof i||(u.borderRadius=i),a&&(u.borderRadius="50%"),"undefined"!==typeof n&&(u["--base-color"]=n),"undefined"!==typeof t&&(u["--highlight-color"]=t),u}(C)),N="react-loading-skeleton";f&&(N+=" ".concat(f));for(var _=null!==(n=C.inline)&&void 0!==n&&n,z=[],E=Math.ceil(u),T=0;T<E;T++){var S=O;if(E>u&&T===E-1){var I=null!==(t=S.width)&&void 0!==t?t:"100%",R=u%1,A="number"===typeof I?I*R:"calc(".concat(I," * ").concat(R,")");S=(0,o.Z)((0,o.Z)({},S),{},{width:A})}var F=a.createElement("span",{className:N,style:S,key:T},"\u200c");_?z.push(F):z.push(a.createElement(a.Fragment,{key:T},F,a.createElement("br",null)))}return a.createElement("span",{className:h,"data-testid":g,"aria-live":"polite","aria-busy":null===(l=C.enableAnimation)||void 0===l||l},p?z.map((function(e,n){return a.createElement(p,{key:n},e)})):z)}function u(e){var n=e.children,t=i(e,l);return a.createElement(s.Provider,{value:t},n)}}}]);
//# sourceMappingURL=415.3fd0983c.chunk.js.map