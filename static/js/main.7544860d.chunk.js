(this.webpackJsonpignat=this.webpackJsonpignat||[]).push([[0],{16:function(e,t,n){e.exports={menu:"pages_menu__1ANXx",btn:"pages_btn__XjSwf",active:"pages_active__TVOFy"}},19:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3jPRf",errorInput:"SuperInputText_errorInput__29qtZ",error:"SuperInputText_error__2Meza"}},29:function(e,t,n){e.exports={someClass:"Greeting_someClass__37opK",error:"Greeting_error__2Prbb"}},30:function(e,t,n){e.exports={blue:"HW4_blue__1Hm7b",column:"HW4_column__1w7J4",testSpanError:"HW4_testSpanError__eSofS"}},31:function(e,t,n){e.exports={default:"SuperButton_default__1Qzav",red:"SuperButton_red__3MpAf"}},32:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3LNmM",spanClassName:"SuperCheckbox_spanClassName__2Qoyz"}},33:function(e,t,n){e.exports={dark:"HW12_dark__W8kEN","dark-text":"HW12_dark-text__mzrWK",red:"HW12_red__1xKcw","red-text":"HW12_red-text__1n5p0",some:"HW12_some__3q8dY","some-text":"HW12_some-text__1j-W0"}},47:function(e,t,n){e.exports={App:"App_App__1B7W1"}},51:function(e,t,n){e.exports={range:"SuperRange_range__2sWS4"}},61:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(23),s=n.n(a),o=(n(61),n(47)),i=n.n(o),j=n(15),u=n(6),l=n(0);var b=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 1",Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},d=n(3);var O=function(e){return Object(l.jsxs)("div",{children:[e.affair.name+" ",e.affair.priority,Object(l.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var h=function(e){var t=e.data.map((function(t){return Object(l.jsx)(O,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(l.jsxs)("div",{children:[t,Object(l.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},x=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var p=function(){var e=Object(c.useState)(x),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("all"),s=Object(d.a)(a,2),o=s[0],i=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 2",Object(l.jsx)(h,{data:j,setFilter:i,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},f=n(7),v=n(29),m=n.n(v),g=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,r=e.error,a=e.totalUsers,s="error"===r?m.a.error:m.a.someClass;return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:t,onChange:n,className:s}),Object(l.jsx)("span",{children:r}),Object(l.jsx)("button",{onClick:c,children:"add"}),Object(l.jsx)("span",{children:a})]})},C=function(e){var t=e.users,n=e.addUserCallback,r=Object(c.useState)(""),a=Object(d.a)(r,2),s=a[0],o=a[1],i=Object(c.useState)(""),j=Object(d.a)(i,2),u=j[0],b=j[1],O=t.length;return Object(l.jsx)(g,{name:s,setNameCallback:function(e){""!==e.currentTarget.value?o(e.currentTarget.value):b("error")},addUser:function(){n(s),alert("Hello ".concat(s," !")),o("")},error:u,totalUsers:O})},_=n(99);var k=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 3",Object(l.jsx)(C,{users:n,addUserCallback:function(e){var t={_id:Object(_.a)(),name:e};r([].concat(Object(f.a)(n),[t]))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},y=n(5),N=n(8),S=n(19),w=n.n(S),T=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,o=e.spanClassName,i=Object(N.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(w.a.error," ").concat(o||""),u="".concat(w.a.input," ").concat(a?w.a.errorInput:w.a.superInput," ").concat(s);return console.log(u),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(y.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:u},i)),a&&Object(l.jsx)("span",{className:j,children:a})]})},E=n(30),I=n.n(E),A=n(31),H=n.n(A),W=function(e){var t=e.red,n=e.className,c=Object(N.a)(e,["red","className"]),r="".concat(t?H.a.red:H.a.default," ").concat(n);return Object(l.jsx)("button",Object(y.a)({className:r},c))},F=n(32),P=n.n(F),R=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(P.a.checkbox," ").concat(c||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(y.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),r&&Object(l.jsx)("span",{className:P.a.spanClassName,children:r})]})};var D=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(c.useState)(!1),i=Object(d.a)(o,2),j=i[0],u=i[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 4",Object(l.jsxs)("div",{className:I.a.column,children:[Object(l.jsx)(T,{value:n,onChangeText:r,onEnter:s,error:a}),Object(l.jsx)(T,{className:I.a.blue}),Object(l.jsx)(W,{children:"default"}),Object(l.jsx)(W,{red:!0,onClick:s,children:"delete "}),Object(l.jsx)(W,{disabled:!0,children:"disabled"}),Object(l.jsx)(R,{checked:j,onChangeChecked:u,children:"some text "}),Object(l.jsx)(R,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},L=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,a=Object(N.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),o=Object(d.a)(s,2),i=o[0],j=o[1],u=r||{},b=u.children,O=u.onDoubleClick,h=u.className,x=Object(N.a)(u,["children","onDoubleClick","className"]),p="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",h);return Object(l.jsx)(l.Fragment,{children:i?Object(l.jsx)(T,Object(y.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(l.jsx)("span",Object(y.a)(Object(y.a)({onDoubleClick:function(e){j(!0),O&&O(e)},className:p},x),{},{children:b||a.value}))})};function M(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function B(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}M("test",{x:"A",y:1});B("test",{x:"",y:0});var J=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 6",Object(l.jsx)("div",{children:Object(l.jsx)(L,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(l.jsx)(W,{onClick:function(){M("editable-span-value",n)},children:"save"}),Object(l.jsx)(W,{onClick:function(){r(B("editable-span-value",""))},children:"restore"}),Object(l.jsx)(W,{onClick:function(){localStorage.clear()},children:"clearStore"}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var U=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{}),Object(l.jsx)(p,{}),Object(l.jsx)(k,{}),Object(l.jsx)(D,{}),Object(l.jsx)(J,{})]})};var G=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"404"}),Object(l.jsx)("div",{children:"Page not found!"}),Object(l.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},K=function(e,t){switch(t.type){case"sort":var n=Object(f.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>18}));default:return e}},z=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var q=function(){var e=Object(c.useState)(z),t=Object(d.a)(e,2),n=t[0],r=t[1],a=n.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:e.name}),e.age]},e._id)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 8",a,Object(l.jsx)("div",{children:Object(l.jsx)(W,{onClick:function(){return r(K(z,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(l.jsx)("div",{children:Object(l.jsx)(W,{onClick:function(){return r(K(z,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(l.jsx)("div",{children:Object(l.jsx)(W,{onClick:function(){return r(K(z,{type:"check",payload:"18"}))},children:"check 18"})}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},X=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,r=Object(N.a)(e,["options","onChange","onChangeOption"]),a=t?t.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(l.jsx)("select",Object(y.a)(Object(y.a)({onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},r),{},{children:a}))},Q=function(e){e.type;var t=e.name,n=e.options,c=e.value,r=e.onChange,a=e.onChangeOption,s=Object(N.a)(e,["type","name","options","value","onChange","onChangeOption"]),o=function(e){r&&r(e),a&&a(e.currentTarget.value)},i=n?n.map((function(e,n){return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(y.a)({type:"radio",name:t,checked:e===c,value:e,onChange:o},s)),e]},t+"-"+n)})):[];return Object(l.jsx)(l.Fragment,{children:i})},V=["x","y","z"];var Y=function(){var e=Object(c.useState)(V[1]),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 7",Object(l.jsx)("div",{children:Object(l.jsx)(X,{options:V,value:n,onChangeOption:r})}),Object(l.jsx)("div",{children:Object(l.jsx)(Q,{name:"radio",options:V,value:n,onChangeOption:r})}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var Z=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(new Date),s=Object(d.a)(a,2),o=s[0],i=s[1],j=Object(c.useState)(!1),u=Object(d.a)(j,2),b=u[0],O=u[1],h=function(){clearInterval(n)},x=o.toLocaleTimeString(),p=o.toLocaleDateString();return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{onMouseEnter:function(){O(!b)},onMouseLeave:function(){O(!b)},children:x}),b?Object(l.jsx)("div",{children:p}):Object(l.jsx)("br",{}),Object(l.jsx)(W,{onClick:function(){h();var e=window.setInterval((function(){i(new Date)}),1e3);r(e)},children:"start"}),Object(l.jsx)(W,{onClick:h,children:"stop"})]})};var $=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 9",Object(l.jsx)(Z,{}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},ee=n(13),te={loading:!1},ne=function(e){return{type:"IS-LOADING",loading:e}};var ce=function(){var e=Object(ee.c)((function(e){return e.loading.loading})),t=Object(ee.b)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 10",e?Object(l.jsx)("div",{children:"\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430..."}):Object(l.jsx)("div",{children:Object(l.jsx)(W,{onClick:function(){t(ne(!0)),setTimeout((function(){t(ne(!1))}),3e3)},children:"set loading..."})}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},re=n(51),ae=n.n(re),se=function(e){e.type;var t=e.onChange,n=e.onChangeRange,c=e.className,r=Object(N.a)(e,["type","onChange","onChangeRange","className"]),a="".concat(ae.a.range," ").concat(c||"");return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("input",Object(y.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:a},r))})},oe=n(98),ie=function(e){var t=e.onChangeRange,n=e.value,c=e.min,r=e.max,a=e.step,s=e.disable;return Object(l.jsx)("div",{style:{width:140},children:Object(l.jsx)(oe.a,{value:n,onChange:function(e,n){t&&t(n)},valueLabelDisplay:"off",min:c,max:r,step:a,disabled:s})})};var je=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(100),s=Object(d.a)(a,2),o=s[0],i=s[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 11",Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:n}),Object(l.jsx)(se,{value:n,onChangeRange:function(e){r(e)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:n}),Object(l.jsx)(ie,{value:[n,o],onChangeRange:function(e){r(e[0]),i(e[1])},min:0,max:100,step:5,disable:!1}),Object(l.jsx)("span",{children:o})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var ue=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(Y,{}),Object(l.jsx)(q,{}),Object(l.jsx)($,{}),Object(l.jsx)(ce,{}),Object(l.jsx)(je,{})]})},le=n(33),be=n.n(le),de={theme:"some"},Oe=["dark","red","some"];var he=function(){var e=Object(ee.c)((function(e){return e.theme.theme})),t=Object(ee.b)(),n=Object(c.useCallback)((function(e){t(function(e){return{type:"CHANGE-THEME",theme:e}}(e))}),[t]);return Object(l.jsxs)("div",{className:be.a[e],children:[Object(l.jsx)("hr",{}),Object(l.jsx)("span",{className:be.a[e+"-text"],children:"homeworks 12"}),Object(l.jsx)(Q,{name:"radio",options:Oe,value:e,onChangeOption:n}),Object(l.jsx)("hr",{})]})},xe=n(34),pe=n.n(xe),fe=n(52),ve=n(53),me=n.n(ve).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/"}),ge=function(e){return me.post("auth/test",{success:e})},Ce=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),s=Object(d.a)(a,2),o=s[0],i=s[1];function j(){return(j=Object(fe.a)(pe.a.mark((function e(){var t;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ge(n);case 3:t=e.sent,i(t.data.errorText),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response),i(e.t0.response?e.t0.response.data.errorText:e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:o}),Object(l.jsx)("button",{onClick:function(){return j.apply(this,arguments)},children:"Request"}),Object(l.jsx)("input",{type:"checkbox",checked:n,onChange:function(){r(!n)}})]})},_e=function(){return Object(l.jsx)(Ce,{})};var ke=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(he,{}),Object(l.jsx)(_e,{})]})},ye="/pre-junior",Ne="/junior",Se="/junior-plus";var we=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(u.d,{children:[Object(l.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(u.a,{to:ye})}}),Object(l.jsx)(u.b,{path:ye,render:function(){return Object(l.jsx)(U,{})}}),Object(l.jsx)(u.b,{path:Ne,render:function(){return Object(l.jsx)(ue,{})}}),Object(l.jsx)(u.b,{path:Se,render:function(){return Object(l.jsx)(ke,{})}}),Object(l.jsx)(u.b,{render:function(){return Object(l.jsx)(G,{})}})]})})},Te=n(16),Ee=n.n(Te);var Ie=function(){return Object(l.jsxs)("div",{className:Ee.a.menu,children:[Object(l.jsx)(j.b,{to:ye,activeClassName:Ee.a.active,children:" Pre-junior"}),Object(l.jsx)(j.b,{to:Ne,activeClassName:Ee.a.active,children:" Junior"}),Object(l.jsx)(j.b,{to:Se,activeClassName:Ee.a.active,children:" Junior+"}),Object(l.jsx)("div",{className:Ee.a.btn})]})};var Ae=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(Ie,{}),Object(l.jsx)(we,{})]})})};var He=function(){return Object(l.jsxs)("div",{className:i.a.App,children:[Object(l.jsx)("div",{children:"react homeworks:"}),Object(l.jsx)(Ae,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=n(37),Fe=Object(We.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS-LOADING":return Object(y.a)(Object(y.a)({},e),{},{loading:t.loading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-THEME":return Object(y.a)(Object(y.a)({},e),{},{theme:t.theme});default:return e}}}),Pe=Object(We.b)(Fe),Re=Pe;window.store=Pe,s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(ee.a,{store:Re,children:Object(l.jsx)(He,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[88,1,2]]]);
//# sourceMappingURL=main.7544860d.chunk.js.map