(this["webpackJsonptennis-academy-yasar"]=this["webpackJsonptennis-academy-yasar"]||[]).push([[0],{29:function(t,n,e){},40:function(t,n,e){},41:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e(1),c=e(20),i=e.n(c),o=e(9),s=e(4),l=(e(29),e(13)),u=e(2),d=e(3);function j(){var t=Object(u.a)(["\n\tdisplay: flex;\n\twidth: 80%;\n\tjustify-content: space-between;\n\tgap: 4vw;\n\theight: 100%;\n\tmargin: 0 auto;\n\n\t@media screen and (max-width: 991px) {\n\t\twidth: 94%;\n\t}\n"]);return j=function(){return t},t}var h=d.a.nav(j()),b=function(t){var n=t.children;return Object(r.jsx)(h,{children:n})};function f(){var t=Object(u.a)(["\n\tdisplay: flex;\n\tflex-grow: 2;\n\theight: 100%;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tlist-style: none;\n\n\t@media screen and (max-width: 991px) {\n\t\tdisplay: none;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tposition: absolute;\n\t\ttop: 100%;\n\t\tbackground: rgba(0, 0, 0, 0.4);\n\t\tbackdrop-filter: blur(6px);\n\t\theight: unset;\n\t\twidth: 100%;\n\t\tleft: -100%;\n\t\ttransition: all 0.5s ease;\n\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t\tposition: relative;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\theight: 2px;\n\t\t\twidth: 100%;\n\t\t\tbackground: var(--secondary-color);\n\t\t}\n\n\t\t&.active {\n\t\t\tleft: 0;\n\t\t}\n\t}\n"]);return f=function(){return t},t}var x=d.a.ul(f()),v=function(t){var n=t.children,e=t.smallActive;return Object(r.jsx)(x,{className:e?"active":"",children:n})};function p(){var t=Object(u.a)(["\n\tdisplay: flex;\n\theight: 100%;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100px;\n\ttransition: background 0.1s ease-in;\n\n\t&:hover {\n\t\tbackground: rgba(255, 255, 255, 0.05);\n\t}\n\n\t@media screen and (max-width: 991px) {\n\t\twidth: 60%;\n\t\tbackground: var(--primary-color);\n\t\theight: 40px;\n\t\tpadding: 5px;\n\t}\n"]);return p=function(){return t},t}var g=d.a.li(p()),O=function(t){var n=t.children;return Object(r.jsx)(g,{children:n})};function m(){var t=Object(u.a)(["\n\ta {\n\t\ttext-decoration: none;\n\t\tfont-weight: 600;\n\t\tletter-spacing: 0.1rem;\n\t\tpadding: 5px;\n\t\tcolor: var(--secondary-color);\n\n\t\t&:hover {\n\t\t\tcolor: var(--accent-color);\n\t\t}\n\t}\n"]);return m=function(){return t},t}var y=d.a.div(m()),w=function(t){var n=t.to,e=t.title;return Object(r.jsx)(y,{children:Object(r.jsx)(o.b,{to:n,children:e})})},k=e.p+"static/media/logo.afb18d72.png";function N(){var t=Object(u.a)(["\n\theight: 75%;\n"]);return N=function(){return t},t}function Y(){var t=Object(u.a)(["\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 120px;\n\tjustify-content: center;\n\talign-content: center;\n\tbackground: var(--logo-bg-color);\n\ttransition: all 0.2s ease;\n\n\t&:hover {\n\t\tbackground: var(--accent-color);\n\t}\n"]);return Y=function(){return t},t}var C=d.a.div(Y()),S=d.a.img(N()),z=function(t){var n=t.to;return Object(r.jsx)(o.b,{to:n,children:Object(r.jsx)(C,{children:Object(r.jsx)(S,{src:k,alt:"tennis academy yasar logo"})})})};function F(){var t=Object(u.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tgap: 2vw;\n\n\t@media screen and (max-width: 991px) {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n"]);return F=function(){return t},t}var T=d.a.ul(F()),A=function(t){var n=t.children;return Object(r.jsx)(T,{children:n})};function E(){var t=Object(u.a)(["\n\ttext-decoration: none;\n\tfont-size: 2rem;\n\tcolor: var(--secondary-color);\n\tcursor: pointer;\n\n\ttransition: transform 0.1s ease-in;\n\n\t&:hover {\n\t\ttransform: translateY(-10%);\n\t\tcolor: var(--accent-color);\n\t}\n"]);return E=function(){return t},t}var L=d.a.a(E()),B=function(t){var n=t.icon,e=t.to;return Object(r.jsx)(L,{href:e,target:"_blank",children:Object(r.jsx)("i",{className:"fab fa-"+n})})};function H(){var t=Object(u.a)(["\n\ttransform: translateY(8px);\n\n\t&.active {\n\t\ttransform: translateY(0) rotate(225deg);\n\t}\n"]);return H=function(){return t},t}function I(){var t=Object(u.a)(["\n\ttransform: translateY(0px);\n\t&.active {\n\t\ttransform: translateY(0) rotate(-225deg);\n\t}\n"]);return I=function(){return t},t}function J(){var t=Object(u.a)(["\n\ttransform: translateY(-8px);\n\n\t&.active {\n\t\ttransform: translateY(0) rotate(135deg);\n\t}\n"]);return J=function(){return t},t}function P(){var t=Object(u.a)(["\n\tposition: absolute;\n\twidth: 24px;\n\theight: 4px;\n\tbackground: var(--secondary-color);\n\ttransition: transform 0.3s ease, background 0.2s ease;\n"]);return P=function(){return t},t}function D(){var t=Object(u.a)(["\n\tdisplay: none;\n\n\t@media screen and (max-width: 991px) {\n\t\tposition: relative;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: 4px;\n\t\tmargin: auto 20px;\n\t\tcursor: pointer;\n\t\twidth: 2.5rem;\n\t\theight: 2.5rem;\n\t\tfont-size: 20px;\n\t\tborder: none;\n\t\tbackground: transparent;\n\n\t\t&:hover > div {\n\t\t\tbackground: var(--accent-color);\n\t\t}\n\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t}\n"]);return D=function(){return t},t}var K=d.a.button(D()),W=d.a.div(P()),_=Object(d.a)(W)(J()),q=Object(d.a)(W)(I()),G=Object(d.a)(W)(H()),M=function(t){var n=t.activate,e=t.active;return Object(r.jsxs)(K,{onClick:function(){return n()},children:[Object(r.jsx)(_,{className:e?"active":""}),Object(r.jsx)(q,{className:e?"active":""}),Object(r.jsx)(G,{className:e?"active":""})]})};function Q(){var t=Object(u.a)(["\n\tdisplay: none;\n"]);return Q=function(){return t},t}function R(){var t=Object(u.a)(["\n\tposition: relative;\n\theight: 100%;\n\tfont-weight: 600;\n\tletter-spacing: 0.1rem;\n\tcolor: var(--secondary-color);\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 120px;\n\n\t& > span > a {\n\t\ttext-decoration: none;\n\t\tpadding: 5px;\n\t\tcolor: var(--scondary-color);\n\t}\n\n\t@media screen and (min-width: 992px) {\n\t\t&:hover {\n\t\t\ttransition: color 0.1s ease-in-out;\n\t\t\tcolor: var(--accent-color);\n\t\t\tbackground: rgba(255, 255, 255, 0.05);\n\n\t\t\t& > ul {\n\t\t\t\tdisplay: flex;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 100%;\n\t\t\t\tleft: 0;\n\t\t\t\tflex-direction: column;\n\t\t\t\twidth: 120px;\n\t\t\t\ttransition: background 0.1s ease-in;\n\n\t\t\t\t&:before {\n\t\t\t\t\tcontent: '';\n\t\t\t\t\tposition: relative;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\theight: 2px;\n\t\t\t\t\twidth: 200px;\n\t\t\t\t\tbackground: var(--secondary-color);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 991px) {\n\t\twidth: 60%;\n\t\tbackground: var(--primary-color);\n\t\tflex-direction: column;\n\n\t\t& > span {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\theight: 40px;\n\t\t}\n\n\t\t&:hover {\n\t\t\tbackground: rgba(255, 255, 255, 0.05);\n\n\t\t\t& > span > a,\n\t\t\t& > span > i {\n\t\t\t\ttransition: color 0.1s ease-in-out;\n\t\t\t\tcolor: var(--accent-color);\n\t\t\t}\n\t\t}\n\n\t\t& > ul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\twidth: 100%;\n\t\t}\n\t}\n"]);return R=function(){return t},t}var U=d.a.div(R()),V=d.a.ul(Q()),X=function(t){var n=t.children,e=t.heading,a=t.to;return Object(r.jsxs)(U,{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)(o.b,{to:a,children:e}),Object(r.jsx)("i",{className:"fas fa-chevron-down"})]}),Object(r.jsx)(V,{children:n})]})};function Z(){var t=Object(u.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-start;\n\twidth: 200px;\n\theight: 40px;\n\tbackground: #191919;\n\ttransition: background 0.1s ease-in;\n\n\t&:hover {\n\t\tbackground: #292929;\n\t}\n\n\t@media screen and (max-width: 991px) {\n\t\twidth: 100%;\n\t\tjustify-content: center;\n\n\t\t&:hover {\n\t\t\tbackground: transparent;\n\t\t}\n\t}\n"]);return Z=function(){return t},t}var $=d.a.li(Z()),tt=function(t){var n=t.children;return Object(r.jsx)($,{children:n})};function nt(){var t=Object(u.a)(["\n\tposition: fixed;\n\twidth: 100%;\n\theight: 80px;\n\tz-index: 1000;\n\tbackground: var(--primary-color);\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]);return nt=function(){return t},t}var et=d.a.header(nt()),rt=function(){var t=Object(a.useState)(),n=Object(l.a)(t,2),e=n[0],c=n[1],i=Object(a.useState)(),o=Object(l.a)(i,2),s=o[0],u=o[1],d=Object(a.useState)(!1),j=Object(l.a)(d,2),h=j[0],f=j[1];return Object(a.useEffect)((function(){window.addEventListener("resize",(function(){u(window.innerWidth)})),c(s<=991?"small":"large")}),[s,e,h]),Object(r.jsx)(et,{children:Object(r.jsxs)(b,{children:[Object(r.jsx)(z,{to:"/"}),Object(r.jsxs)(v,{smallActive:h,children:[Object(r.jsx)(O,{children:Object(r.jsx)(w,{to:"/",title:"Home"})}),Object(r.jsx)(O,{children:Object(r.jsx)(w,{to:"/team",title:"Team"})}),Object(r.jsxs)(X,{to:"/training",heading:"Training",children:[Object(r.jsx)(tt,{children:Object(r.jsx)(w,{to:"/anmeldung",title:"Anmeldung"})}),Object(r.jsx)(tt,{children:Object(r.jsx)(w,{to:"/camps",title:"Camps"})}),Object(r.jsx)(tt,{children:Object(r.jsx)(w,{to:"/athletiktraining",title:"Athletiktraining"})})]}),Object(r.jsxs)(X,{to:"/news",heading:"News",children:[Object(r.jsx)(tt,{children:Object(r.jsx)(w,{to:"/news",title:"News vom Court"})}),Object(r.jsx)(tt,{children:Object(r.jsx)(w,{to:"/galerie",title:"Fotogalerie"})})]}),Object(r.jsx)(O,{children:Object(r.jsx)(w,{to:"/kontakt",title:"Kontakt"})})]}),Object(r.jsx)(A,{children:Object(r.jsx)(B,{icon:"instagram",to:"https://instagram.com/tennis.academy.yasar?igshid=1szgb889vhno0"})}),Object(r.jsx)(M,{active:h,activate:function(){f(!h)}})]})})};e(40);function at(){var t=Object(u.a)(["\n\twidth: 100%;\n\theight: 100%;\n"]);return at=function(){return t},t}var ct=d.a.div(at()),it=function(t){var n=t.children;return Object(r.jsx)(ct,{children:n})};function ot(){var t=Object(u.a)(["\n\twidth: 80%;\n\theight: 100%;\n\tmargin: 0 auto;\n"]);return ot=function(){return t},t}var st=d.a.section(ot()),lt=function(t){var n=t.children;return Object(r.jsx)(st,{children:n})};function ut(){var t=Object(u.a)(["\n\twidth: 100%;\n\tposition: relative;\n\ttop: 80px;\n\tmin-height: 200vh;\n"]);return ut=function(){return t},t}var dt=d.a.div(ut()),jt=function(t){var n=t.children;return Object(r.jsx)(dt,{children:n})},ht=function(){return Object(r.jsx)(jt,{children:Object(r.jsx)(it,{children:Object(r.jsx)(lt,{children:Object(r.jsx)("h1",{children:"Home Screen"})})})})},bt=function(){return Object(r.jsx)(jt,{children:Object(r.jsx)(it,{children:Object(r.jsx)(lt,{children:Object(r.jsx)("h1",{children:"Team Screen"})})})})};function ft(){var t=Object(u.a)(["\n\twidth: 100%;\n"]);return ft=function(){return t},t}var xt=d.a.main(ft()),vt=function(t){var n=t.children;return Object(r.jsx)(xt,{children:n})};var pt=function(){return Object(r.jsxs)(o.a,{children:[Object(r.jsx)(rt,{}),Object(r.jsxs)(vt,{children:[Object(r.jsx)(s.a,{path:"/",component:ht,exact:!0}),Object(r.jsx)(s.a,{path:"/team",component:bt,exact:!0})]})]})},gt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,42)).then((function(n){var e=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;e(t),r(t),a(t),c(t),i(t)}))},Ot=document.getElementById("root");i.a.render(Object(r.jsx)(pt,{}),Ot),gt()}},[[41,1,2]]]);
//# sourceMappingURL=main.99c919b3.chunk.js.map