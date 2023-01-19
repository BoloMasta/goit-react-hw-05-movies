"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[580],{9580:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var i,r,o,a,d,l,c,s,h,p,u,m,x=t(9439),f=t(7689),g=t(2791),v=t(7672),b=t(6839),y=(t(5862),t(3614)),w=t(8882),j=t(6789),Z=t(168),k=t(6444),P=t(1087),_=t(1942),z=k.ZP.div(i||(i=(0,Z.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px 20px 20px;\n\n  &::before {\n    content: '';\n    display: block;\n    background-color: rgb(255 255 255);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n  }\n\n  &::after {\n    content: '';\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: ",";\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    filter: blur(5px);\n    z-index: -1;\n    opacity: 0.35;\n  }\n\n  @media screen and (max-width: 768px) {\n    padding: 0 5px;\n  }\n"])),(function(n){return n.backdrop?"url('https://image.tmdb.org/t/p/w500/".concat(n.backdrop,"')"):"url(".concat(_,")")})),C=(0,k.ZP)(P.rU)(r||(r=(0,Z.Z)(["\n  display: inline-block;\n  text-decoration: none;\n"]))),O=k.ZP.div(o||(o=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n  }\n"]))),N=k.ZP.img(a||(a=(0,Z.Z)(["\n  max-height: ",";\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  align-self: flex-start;\n\n  @media screen and (max-width: 768px) {\n    max-height: 450px;\n    align-self: center;\n  }\n"])),(function(n){return n.height})),E=k.ZP.div(d||(d=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  padding: 10px 20px;\n\n  @media screen and (max-width: 768px) {\n    padding: 10px 0;\n  }\n"]))),R=k.ZP.h2(l||(l=(0,Z.Z)(["\n  margin-top: 10px;\n  font-size: 2rem;\n  font-weight: 700;\n\n  @media screen and (max-width: 768px) {\n    font-size: 1.5rem;\n  }\n"]))),S=k.ZP.div(c||(c=(0,Z.Z)(["\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin: 10px 0;\n  display: flex;\n\n  @media screen and (max-width: 768px) {\n    font-size: 1.2rem;\n  }\n"]))),I=k.ZP.h3(s||(s=(0,Z.Z)(["\n  margin: 15px 0 5px 0;\n  font-size: 1.5rem;\n  font-weight: 500;\n\n  @media screen and (max-width: 768px) {\n    font-size: 1.2rem;\n  }\n"]))),T=k.ZP.span(h||(h=(0,Z.Z)(["\n  margin: 5px 0;\n  font-size: 1rem;\n  font-weight: 400;\n\n  @media screen and (max-width: 768px) {\n    font-size: 0.8rem;\n  }\n"]))),U=k.ZP.div(p||(p=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-top: 10px;\n"]))),F=k.ZP.ul(u||(u=(0,Z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-start;\n  list-style: none;\n  margin: 10px 0;\n"]))),H=(0,k.ZP)(P.rU)(m||(m=(0,Z.Z)(["\n  text-decoration: none;\n"]))),A=t(184),G=function(){var n,e,t=(0,f.UO)().movieId,i=(0,v.Q)("/movie/".concat(t)),r=i.data,o=i.error,a=null!==(n=null===(e=(0,f.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",d=(0,g.useState)({loaded:!1,height:0}),l=(0,x.Z)(d,2),c=l[0],s=l[1],h=null===r||void 0===r?void 0:r.genres.map((function(n){return n.name})).join(", "),p=null===r||void 0===r?void 0:r.production_companies.map((function(n){var e=n.id,t=n.logo_path,i=n.name;return t&&(0,A.jsx)("li",{children:t&&(0,A.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t),alt:i,style:{maxHeight:50,maxWidth:200,marginRight:30}})},e)||""})),u=function(){console.log("pageHeight"),document.body.style.height="1100px"};return(0,g.useEffect)((function(){return document.body.style.height="auto",function(){document.body.style.height="auto"}}),[]),(0,A.jsxs)(A.Fragment,{children:[o&&(0,A.jsx)("h2",{children:"Something went wrong. Try again later."}),r?(0,A.jsxs)(z,{backdrop:r.backdrop_path,children:[(0,A.jsx)(C,{to:a,children:(0,A.jsx)(w.z,{label:"Go back",icon:"left_arrow"})}),(0,A.jsxs)(O,{children:[(0,A.jsx)(b.y,{baseColor:"#dddddd",highlightColor:"#a5a5a5",children:!c.loaded&&(0,A.jsx)(b.Z,{width:333,height:500})}),(0,A.jsx)(N,{src:null===r.poster_path?j:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:r.title,onLoad:function(){s({loaded:!0,height:500})},height:c.height}),(0,A.jsxs)(E,{children:[(0,A.jsxs)(R,{children:[r.title,r.release_date&&(0,A.jsxs)("span",{children:[" (",r.release_date.slice(0,4),")"]})]}),(0,A.jsx)(S,{children:r.vote_count>0?(0,A.jsxs)(A.Fragment,{children:["User score: ",Math.round(10*r.vote_average),"%\u2002",(0,A.jsxs)(T,{children:["(",r.vote_count," ",1===r.vote_count?"vote":"votes",")"]})]}):"No votes yet"}),(0,A.jsx)(I,{children:"Overview"}),(0,A.jsx)(T,{children:""!==r.overview?r.overview:"No overview provided"}),(0,A.jsx)(I,{children:"Genres"}),(0,A.jsx)(T,{children:""!==h?h:"No genres provided"}),(0,A.jsx)(I,{children:"Production companies"}),(0,A.jsx)(U,{children:p.length>0?p:"No production companies provided"})]})]}),(0,A.jsxs)(F,{children:[(0,A.jsx)("li",{children:(0,A.jsx)(H,{to:"cast",children:(0,A.jsx)(w.z,{label:"Cast",icon:"cast",onClick:u})})}),(0,A.jsx)("li",{children:(0,A.jsx)(H,{to:"reviews",children:(0,A.jsx)(w.z,{label:"Reviews",icon:"review",onClick:u})})})]}),(0,A.jsx)(g.Suspense,{fallback:(0,A.jsx)(y.a,{}),children:(0,A.jsx)(f.j3,{})})]}):(0,A.jsx)(y.a,{})]})}},5862:function(){},6839:function(n,e,t){t.d(e,{y:function(){return h},Z:function(){return s}});var i=t(9439),r=t(8683);function o(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var a=t(2791),d=["count","wrapper","className","containerClassName","containerTestId","circle","style"],l=["children"],c=a.createContext({});function s(n){for(var e,t,l,s=n.count,h=void 0===s?1:s,p=n.wrapper,u=n.className,m=n.containerClassName,x=n.containerTestId,f=n.circle,g=void 0!==f&&f,v=n.style,b=o(n,d),y=a.useContext(c),w=(0,r.Z)({},b),j=0,Z=Object.entries(b);j<Z.length;j++){var k=(0,i.Z)(Z[j],2),P=k[0];"undefined"===typeof k[1]&&delete w[P]}var _=(0,r.Z)((0,r.Z)((0,r.Z)({},y),w),{},{circle:g}),z=(0,r.Z)((0,r.Z)({},v),function(n){var e=n.baseColor,t=n.highlightColor,i=n.width,r=n.height,o=n.borderRadius,a=n.circle,d=n.direction,l=n.duration,c=n.enableAnimation,s=void 0===c||c,h={};return"rtl"===d&&(h["--animation-direction"]="reverse"),"number"===typeof l&&(h["--animation-duration"]="".concat(l,"s")),s||(h["--pseudo-element-display"]="none"),"string"!==typeof i&&"number"!==typeof i||(h.width=i),"string"!==typeof r&&"number"!==typeof r||(h.height=r),"string"!==typeof o&&"number"!==typeof o||(h.borderRadius=o),a&&(h.borderRadius="50%"),"undefined"!==typeof e&&(h["--base-color"]=e),"undefined"!==typeof t&&(h["--highlight-color"]=t),h}(_)),C="react-loading-skeleton";u&&(C+=" ".concat(u));for(var O=null!==(e=_.inline)&&void 0!==e&&e,N=[],E=Math.ceil(h),R=0;R<E;R++){var S=z;if(E>h&&R===E-1){var I=null!==(t=S.width)&&void 0!==t?t:"100%",T=h%1,U="number"===typeof I?I*T:"calc(".concat(I," * ").concat(T,")");S=(0,r.Z)((0,r.Z)({},S),{},{width:U})}var F=a.createElement("span",{className:C,style:S,key:R},"\u200c");O?N.push(F):N.push(a.createElement(a.Fragment,{key:R},F,a.createElement("br",null)))}return a.createElement("span",{className:m,"data-testid":x,"aria-live":"polite","aria-busy":null===(l=_.enableAnimation)||void 0===l||l},p?N.map((function(n,e){return a.createElement(p,{key:e},n)})):N)}function h(n){var e=n.children,t=o(n,l);return a.createElement(c.Provider,{value:t},e)}}}]);
//# sourceMappingURL=580.e412e41c.chunk.js.map