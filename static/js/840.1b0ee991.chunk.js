"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[840],{8840:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var i,r,a,o,c,l,d,s,p,f,x,h,u=t(9439),m=t(7689),g=t(2791),v=t(7672),b=t(6839),y=(t(5862),t(3521)),j=t(440),w=t(8764),Z=t(6789),k=t(168),P=t(6444),z=t(1087),_=t(1942),C=t(2007),O=t.n(C),N=P.ZP.div(i||(i=(0,k.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px 20px 20px;\n\n  &::before {\n    content: '';\n    display: block;\n    background-color: rgb(255 255 255);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n  }\n\n  &::after {\n    content: '';\n    position: fixed;\n    top: 0px;\n    left: -5px;\n    width: calc(100% + 10px);\n    height: calc(100vh + 10px);\n    background-image: ",";\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    filter: blur(5px);\n    z-index: -1;\n    opacity: 0.35;\n  }\n\n  @media screen and (max-width: 768px) {\n    padding: 0 5px;\n  }\n"])),(function(n){return n.backdrop?"url('https://image.tmdb.org/t/p/w500/".concat(n.backdrop,"')"):"url(".concat(_,")")})),E=(0,P.ZP)(z.rU)(r||(r=(0,k.Z)(["\n  display: inline-block;\n  text-decoration: none;\n"]))),T=P.ZP.div(a||(a=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n  }\n"]))),F=P.ZP.img(o||(o=(0,k.Z)(["\n  max-height: ",";\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  align-self: flex-start;\n\n  @media screen and (max-width: 768px) {\n    max-height: 450px;\n    align-self: center;\n  }\n"])),(function(n){return n.height})),R=P.ZP.div(c||(c=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  padding: 10px 20px;\n\n  @media screen and (max-width: 768px) {\n    padding: 10px 0;\n  }\n"]))),S=P.ZP.h2(l||(l=(0,k.Z)(["\n  margin-top: 10px;\n  font-size: 2rem;\n  font-weight: 700;\n\n  @media screen and (max-width: 768px) {\n    font-size: 1.5rem;\n  }\n"]))),U=P.ZP.div(d||(d=(0,k.Z)(["\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin: 10px 0;\n  display: flex;\n\n  @media screen and (max-width: 768px) {\n    font-size: 1.2rem;\n  }\n"]))),I=P.ZP.h3(s||(s=(0,k.Z)(["\n  margin: 15px 0 5px 0;\n  font-size: 1.5rem;\n  font-weight: 500;\n\n  @media screen and (max-width: 768px) {\n    font-size: 1.2rem;\n  }\n"]))),G=P.ZP.span(p||(p=(0,k.Z)(["\n  margin: 5px 0;\n  font-size: 1rem;\n  font-weight: 400;\n\n  @media screen and (max-width: 768px) {\n    font-size: 0.8rem;\n  }\n"]))),M=P.ZP.div(f||(f=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-top: 10px;\n"]))),A=P.ZP.ul(x||(x=(0,k.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-start;\n  list-style: none;\n  margin: 10px 0;\n"]))),H=(0,P.ZP)(z.rU)(h||(h=(0,k.Z)(["\n  text-decoration: none;\n"])));N.propTypes={backdrop:O().string},F.propTypes={height:O().number};var L=t(184),Q=function(){var n,e,t=(0,m.UO)().movieId,i=(0,v.Q)("/movie/".concat(t)),r=i.data,a=i.error,o=(0,m.TH)(),c=(0,g.useMemo)((function(){var n;return(null===(n=o.state)||void 0===n?void 0:n.from)||"/"}),[t]),l=(0,g.useState)({loaded:!1,height:0}),d=(0,u.Z)(l,2),s=d[0],p=d[1],f=null===r||void 0===r||null===(n=r.genres)||void 0===n?void 0:n.map((function(n){return n.name})).join(", "),x=null===r||void 0===r||null===(e=r.production_companies)||void 0===e?void 0:e.map((function(n){var e=n.id,t=n.logo_path,i=n.name;return t&&(0,L.jsx)("li",{children:t&&(0,L.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t),alt:i,style:{maxHeight:50,maxWidth:200,marginRight:30}})},e)})),h=function(n){document.body.style.height="1100px",n.currentTarget.blur()};return(0,L.jsxs)(L.Fragment,{children:[a&&(0,L.jsx)(w.default,{}),r||a?r&&(0,L.jsxs)(N,{backdrop:r.backdrop_path,children:[(0,L.jsx)(E,{to:c,children:(0,L.jsx)(j.z,{label:"Go back",icon:"left_arrow"})}),(0,L.jsxs)(T,{children:[(0,L.jsx)(b.y,{baseColor:"#dddddd",highlightColor:"#a5a5a5",children:!s.loaded&&(0,L.jsx)(b.Z,{width:333,height:500})}),(0,L.jsx)(F,{src:null===r.poster_path?Z:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:r.title,onLoad:function(){p({loaded:!0,height:500})},height:s.height}),(0,L.jsxs)(R,{children:[(0,L.jsxs)(S,{children:[r.title,r.release_date&&(0,L.jsxs)("span",{children:[" (",r.release_date.slice(0,4),")"]})]}),(0,L.jsx)(U,{children:r.vote_count>0?(0,L.jsxs)(L.Fragment,{children:["User score: ",Math.round(10*r.vote_average),"%\u2002",(0,L.jsxs)(G,{children:["(",r.vote_count," ",1===r.vote_count?"vote":"votes",")"]})]}):"No votes yet"}),(0,L.jsx)(I,{children:"Overview"}),(0,L.jsx)(G,{children:""!==r.overview?r.overview:"No overview provided"}),(0,L.jsx)(I,{children:"Genres"}),(0,L.jsx)(G,{children:""!==f?f:"No genres provided"}),""!==x[0]&&x.length>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(I,{children:"Production companies"}),(0,L.jsx)(M,{children:x})]})]})]}),(0,L.jsxs)(A,{children:[(0,L.jsx)("li",{children:(0,L.jsx)(H,{to:"cast",children:(0,L.jsx)(j.z,{label:"Cast",icon:"cast",onClick:h})})}),(0,L.jsx)("li",{children:(0,L.jsx)(H,{to:"reviews",children:(0,L.jsx)(j.z,{label:"Reviews",icon:"review",onClick:h})})})]}),(0,L.jsx)(g.Suspense,{fallback:(0,L.jsx)(y.a,{}),children:(0,L.jsx)(m.j3,{})})]}):(0,L.jsx)(y.a,{})]})}},8764:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var i,r,a,o,c=t(168),l=t(6444),d=t(1087),s=l.ZP.div(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: calc(100vh - 100px);\n  width: 100%;\n"]))),p=l.ZP.h1(r||(r=(0,c.Z)(["\n  font-size: 2rem;\n  font-weight: 700;\n  color: #000;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ff3cac, 0 0 82px #ff3cac,\n    0 0 92px #ff3cac, 0 0 102px #ff3cac, 0 0 151px #ff3cac;\n  animation: flicker 1.5s infinite alternate;\n\n  @keyframes flicker {\n    0%,\n    18%,\n    22%,\n    25%,\n    53%,\n    57%,\n    100% {\n      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #ff3cac, 0 0 80px #ff3cac,\n        0 0 90px #ff3cac, 0 0 100px #ff3cac, 0 0 150px #ff3cac;\n    }\n\n    20%,\n    24%,\n    55% {\n      text-shadow: none;\n    }\n  }\n"]))),f=l.ZP.p(a||(a=(0,c.Z)(["\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: #000;\n  margin: 30px auto;\n  padding: 0;\n  text-align: center;\n"]))),x=(0,l.ZP)(d.rU)(o||(o=(0,c.Z)(["\n  text-decoration: none;\n"]))),h=t(440),u=t(184),m=function(){return(0,u.jsxs)(s,{children:[(0,u.jsx)(p,{children:"404 Not Found"}),(0,u.jsx)(f,{children:"Sorry, the page you are looking for doesn't exist."}),(0,u.jsx)(x,{to:"/",children:(0,u.jsx)(h.z,{label:"Go to home page",icon:"filmTape"})})]})}},5862:function(){},6839:function(n,e,t){t.d(e,{y:function(){return p},Z:function(){return s}});var i=t(9439),r=t(8683);function a(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o=t(2791),c=["count","wrapper","className","containerClassName","containerTestId","circle","style"],l=["children"],d=o.createContext({});function s(n){for(var e,t,l,s=n.count,p=void 0===s?1:s,f=n.wrapper,x=n.className,h=n.containerClassName,u=n.containerTestId,m=n.circle,g=void 0!==m&&m,v=n.style,b=a(n,c),y=o.useContext(d),j=(0,r.Z)({},b),w=0,Z=Object.entries(b);w<Z.length;w++){var k=(0,i.Z)(Z[w],2),P=k[0];"undefined"===typeof k[1]&&delete j[P]}var z=(0,r.Z)((0,r.Z)((0,r.Z)({},y),j),{},{circle:g}),_=(0,r.Z)((0,r.Z)({},v),function(n){var e=n.baseColor,t=n.highlightColor,i=n.width,r=n.height,a=n.borderRadius,o=n.circle,c=n.direction,l=n.duration,d=n.enableAnimation,s=void 0===d||d,p={};return"rtl"===c&&(p["--animation-direction"]="reverse"),"number"===typeof l&&(p["--animation-duration"]="".concat(l,"s")),s||(p["--pseudo-element-display"]="none"),"string"!==typeof i&&"number"!==typeof i||(p.width=i),"string"!==typeof r&&"number"!==typeof r||(p.height=r),"string"!==typeof a&&"number"!==typeof a||(p.borderRadius=a),o&&(p.borderRadius="50%"),"undefined"!==typeof e&&(p["--base-color"]=e),"undefined"!==typeof t&&(p["--highlight-color"]=t),p}(z)),C="react-loading-skeleton";x&&(C+=" ".concat(x));for(var O=null!==(e=z.inline)&&void 0!==e&&e,N=[],E=Math.ceil(p),T=0;T<E;T++){var F=_;if(E>p&&T===E-1){var R=null!==(t=F.width)&&void 0!==t?t:"100%",S=p%1,U="number"===typeof R?R*S:"calc(".concat(R," * ").concat(S,")");F=(0,r.Z)((0,r.Z)({},F),{},{width:U})}var I=o.createElement("span",{className:C,style:F,key:T},"\u200c");O?N.push(I):N.push(o.createElement(o.Fragment,{key:T},I,o.createElement("br",null)))}return o.createElement("span",{className:h,"data-testid":u,"aria-live":"polite","aria-busy":null===(l=z.enableAnimation)||void 0===l||l},f?N.map((function(n,e){return o.createElement(f,{key:e},n)})):N)}function p(n){var e=n.children,t=a(n,l);return o.createElement(d.Provider,{value:t},e)}}}]);
//# sourceMappingURL=840.1b0ee991.chunk.js.map