(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(n,e,t){},43:function(n,e,t){},79:function(n,e,t){"use strict";t.r(e);var i,c,r,a,o,s,d,u,f,j,l,b,m=t(1),h=t.n(m),x=t(34),O=t.n(x),p=(t(42),t(2)),g=(t(43),t(3)),w=t(9),y=t(36),v=t.n(y)()(),S=t(0),F=g.a.div(i||(i=Object(p.a)(["\ndisplay:flex;\njustify-content: center;\nalign-items: center;\nheight: 25vh;\ngrid-row: 2;\n"]))),k=g.a.input(c||(c=Object(p.a)(["\nborder-radius: 100em;\nbox-sizing: border-box;\nfont-family: 'Monosten';\ncolor: #b7b7b7;\nbackground-color: #f2f3f5;\nborder: none;\nwidth: 75%;\npadding: 1em 2em 1em 2em;\noutline: none;\ntransition-duration: .3s;\n&:focus {\n    color: #303030;\n}\n\n&:hover:not(:focus) {\n    background-color: #eeeff2;\n    color: #a5a5a5;\n}\n@media (min-width: 768px) {\n   width: 50%;\n}\n\n@media (min-width: 1024px) {\n   width: 33%;\n}   \n"]))),B=function(){var n,e="Enter your name to join",t=Object(m.useState)(""),i=Object(w.a)(t,2),c=i[0],r=i[1],a=Object(m.useState)(e),o=Object(w.a)(a,2),s=o[0],d=o[1],u=Object(m.useState)(8),f=Object(w.a)(u,2),j=f[0],l=f[1];return Object(m.useEffect)((function(){return v.on("speak",(function(n){var e=new SpeechSynthesisUtterance(n);window.speechSynthesis.speak(e)})),function(){v.off("speak")}})),Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(F,{children:Object(S.jsx)("form",{style:{width:"100%",display:"flex",justifyContent:"center"},onSubmit:function(e){e.preventDefault(),e.target.blur(),""===c?(n={id:v.id,name:s},v.emit("newUser",n),r(s),l(32),d("")):(v.emit("msg",s),d(""))},children:Object(S.jsx)(k,{maxLength:j,autoComplete:"off",type:"text",name:"name",onFocus:function(n){return d("")},onBlur:function(n){d(""===c?e:"Say something...")},value:s,onChange:function(n){return d(n.target.value)}})})})})},C=g.a.div(r||(r=Object(p.a)(["\ndisplay:flex;\njustify-content: center;\nalign-items: flex-end;  \ngrid-row: 1;\nheight: 25vh;\nfont-family: 'Josefin Sans';\n"]))),E=g.a.span(a||(a=Object(p.a)(["\nfont-family: 'Josefin Sans';\nfont-size: 10vh;\ncolor: #6f6f6f;\nfont-weight: 100;\ntransition-duration: .3s;\n&:hover {\n    color: #04d410;\n}\n"]))),J=function(){return Object(S.jsx)(C,{children:Object(S.jsx)(E,{children:"tts.chat"})})},M=g.a.div(o||(o=Object(p.a)(["\ndisplay:flex;\njustify-content: center;\nalign-items: center;\n"]))),U=g.a.div(s||(s=Object(p.a)(["\ndisplay:flex;\nalign-items: center;\nwidth: 75%;\nfont-family: 'Monosten';\nfont-weight: 300;\nmargin-bottom: 2em;\n@media (min-width: 768px) {\n    width: 50%;\n}\n\n@media (min-width: 1024px) {\n    width: 33%;\n}\n"]))),L=g.a.div(d||(d=Object(p.a)(["\nwidth: .5em;\nheight: .5em;\nbackground: #04d410;\nborder-radius: 100em;\nmargin-right: 1em;\n"]))),z=function(n){var e=n.users;return Object(S.jsx)(M,{children:Object(S.jsxs)(U,{children:[Object(S.jsx)(L,{}),e.length," Online"]})})},D=g.a.div(u||(u=Object(p.a)(["\ndisplay: flex;\nflex-wrap: wrap;\nflex-direction: row;\n"]))),I=g.a.div(f||(f=Object(p.a)(["\ndisplay:flex;\njustify-content: center;\nalign-items; center;\nwidth: 100%;\nfont-family: 'Monosten';\n"]))),P=function(n){return Object(S.jsx)(D,{children:Object(S.jsx)(I,{style:n.id===v.id?{borderBottom:"2px solid #04d410",paddingBottom:"3px"}:{borderBottom:"none",paddingBottom:"3px"},children:n.name})})},T=g.a.div(j||(j=Object(p.a)(["\n    display:flex;\n    justify-content: center;\n"]))),q=g.a.div(l||(l=Object(p.a)(["\n    width: 75%;\n    display: flex;\n    justify-content: start;\n    flex-wrap: wrap;\n    grid-gap: 3em;\n\n    @media (min-width: 768px) {\n        width: 50%;\n    }\n    \n    @media (min-width: 1024px) {\n        width: 33%;\n    }\n"]))),A=function(n){var e=n.users;return Object(S.jsx)(T,{children:Object(S.jsx)(q,{children:e.map((function(n){return Object(S.jsx)(P,{name:n.name,id:n.id},n.id)}))})})},G=function(){var n=Object(m.useState)([]),e=Object(w.a)(n,2),t=e[0],i=e[1],c=Object(m.useState)(!1),r=Object(w.a)(c,2),a=r[0],o=r[1];return Object(m.useEffect)((function(){return v.on("userUpdate",(function(n){i(n),a?0===n.length&&o(!1):o(!0)})),function(){v.off("userUpdate")}})),Object(S.jsx)(S.Fragment,{children:a?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(z,{users:t}),Object(S.jsx)(A,{users:t})]}):Object(S.jsx)(S.Fragment,{})})},H=g.a.div(b||(b=Object(p.a)(["\ndisplay: grid;\ngrid-template-columns: repeat(1, 1fr);\ngrid-auto-rows: minmax(1vh, auto);\n"]))),K=function(){return Object(S.jsxs)(H,{children:[Object(S.jsx)(J,{}),Object(S.jsx)(B,{}),Object(S.jsx)(G,{})]})},N=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,80)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),i(n),c(n),r(n),a(n)}))};O.a.render(Object(S.jsx)(h.a.StrictMode,{children:Object(S.jsx)(K,{})}),document.getElementById("root")),N()}},[[79,1,2]]]);
//# sourceMappingURL=main.73d06c33.chunk.js.map