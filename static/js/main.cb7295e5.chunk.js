(this["webpackJsonplucky-draw"]=this["webpackJsonplucky-draw"]||[]).push([[0],{1319:function(e,t,n){},1320:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),s=n.n(r),c=n(13),i=n.n(c),l=n(5),u=n(9),o=n(20),d=n(2),m="SET_LUCKY_PERSON",b=n(11),j=n.n(b),_=new Array(15).fill(""),h={attendLists:_=_.map((function(e,t){return{id:t,name:"".concat(j.a.name.firstName()," ").concat(j.a.name.lastName()),gender:t%2===0?"man":"woman"}})),luckyPerson:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n=e.attendLists.length,a=Math.floor(Math.random()*n),r=e.attendLists.find((function(e){return e.id===a}));return Object(d.a)(Object(d.a)({},e),{},{luckyPerson:r});default:return e}},v="TOGGLE_SHOW_RESULT",f=function(e){return{type:v,payload:e}},p={isResultShowed:!1,count:1,count2:1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:var n=t.payload.isResultShowed;return Object(d.a)(Object(d.a)({},e),{},{isResultShowed:n});default:return e}},g=Object(u.combineReducers)({listsReducer:O,resultReducer:x}),y=Object(o.composeWithDevTools)({}),N=function(){return Object(u.createStore)(g,y())},w=n(4),S=n.n(w),k=n(7);var R=function(e){var t=e.headTag,n=e.children,a=Object(k.a)(e,["headTag","children"]);return s.a.createElement(t,Object(d.a)({},a),n)},T=n(8),C=n(28),M=n(21),A=n.n(M),L=S.a.bind(A.a);function P(e){var t=e.className,n=e.handleClick,r=e.children,s=Object(k.a)(e,["className","handleClick","children"]);return Object(a.jsx)("button",Object(d.a)(Object(d.a)({className:L(t,"button"),onClick:n,onKeyDown:function(e){var t=e.key;" "!==t&&"Enter"!==t||e.preventDefault()}},s),{},{children:r}))}var I=s.a.memo(P);P.defaultProps={className:"",handleClick:function(){return null}};var E=n(22),F=n.n(E),K=S.a.bind(F.a);function q(e){e.className;var t=e.message,n=Object(k.a)(e,["className","message"]);return Object(a.jsx)("div",Object(d.a)(Object(d.a)({className:K("error-message")},n),{},{children:t}))}var D=s.a.memo(q);q.defaultProps={className:""};var J={required:!0,pattern:/^(?!0\d)(?:\d+)(?:[.,]\d+)?$/,validate:{isNumber:function(e){return!isNaN(e)},isOverMax:function(e){return e<=100},isPositive:function(e){return e>0}}},V={required:"\u8acb\u8f38\u5165\u5012\u6578\u6642\u9593",pattern:"\u6642\u9593\u683c\u5f0f\u932f\u8aa4,\u8acb\u53c3\u8003\u8aaa\u660e",isNumber:"\u8acb\u8f38\u5165\u6578\u5b57",isOverMax:"\u8d85\u904e\u6700\u5927\u53ef\u5012\u6578\u6642\u9593",isPositive:"\u8acb\u8f38\u5165\u5927\u65bc0\u4e4b\u6578\u5b57"},W=n(23),z=n.n(W),U=S.a.bind(z.a);var B=function(e){var t,n=e.timeupCallback,s=Object(r.useState)(0),c=Object(T.a)(s,2),i=c[0],l=c[1],u=Object(r.useRef)(),o=Object(r.useRef)(),d=Object(r.useRef)(),m=Object(C.a)({mode:"all"}),b=m.register,j=m.errors,_=m.handleSubmit,h=!!j.inputMinutes,O=function(){o.current=setInterval((function(){var e;e=o.current,u.current>0?u.current--:u.current=0,u.current<=0&&(clearInterval(e),n()),l(u.current)}),1e3)};Object(r.useEffect)((function(){return function(){clearInterval(o.current)}}),[]);var v=Object(r.useMemo)((function(){return function(){var e=Math.floor(i/60),t=i%60;return e=String(e).padStart(2,0),t=String(t).padStart(2,0),"".concat(e,":").concat(t)}()}),[i]);return Object(a.jsxs)("div",{className:U("timer"),children:[Object(a.jsxs)("form",{className:U("timer-form"),onSubmit:_((function(e){clearInterval(o.current),function(e){var t=e.inputMinutes,n=parseFloat(60*t)<1?1:Math.round(parseFloat(60*t));u.current=n,l(n)}(e),O(),d.current.blur()})),children:[Object(a.jsx)("input",{name:"inputMinutes",className:U("timer-input",{"timer-input__invalid":h}),ref:function(e){b(e,J),d.current=e}}),Object(a.jsx)("span",{className:U("timer-input__suffix"),children:"\u5206\u9418"}),Object(a.jsx)(I,{type:"submit","data-color":"submit","data-radius":"general","data-size":"md",className:U("timer-submit-button"),children:"\u8a2d\u5b9a"}),j.inputMinutes?Object(a.jsx)(D,{message:V[null===(t=j.inputMinutes)||void 0===t?void 0:t.type]}):null]}),Object(a.jsx)("div",{className:U("timer-remaintime"),children:v})]})},G=n(24),Q=n.n(G),Y={ROOT_CLASS:"lucky-draw"},H=Y.ROOT_CLASS,X=S.a.bind(Q.a),Z=[{message:"\u53ef\u63a5\u53d7 0 ~ ".concat(100,"\u4e4b\u6b63\u6578"),ex:"(ex:2 ,10, 0.5)"},{message:"\u542b\u7279\u6b8a\u5b57\u5143, \u8ca0\u6578, \u7a7a\u683c\u6216\u5176\u4ed6\u932f\u8aa4\u683c\u5f0f\u7b49\u6703\u7121\u6548",ex:"(ex: +3, 02, -1, 00.5)"},{message:"\u5012\u6578\u79d2\u6578\u70ba\u56db\u6368\u4e94\u5165\u5f8c\u7684\u7d50\u679c;"},{message:"\u82e5\u6574\u9ad4\u6642\u9593\u4e0d\u8db31\u79d2,\u5247\u4ee51\u79d2\u8a08\u7b97;"}];function $(){var e=Object(l.b)(),t=function(){var t;e({type:m,payload:t})},n=Object(r.useCallback)((function(){t(),e(f({isResultShowed:!0}))}),[e]);return Object(a.jsxs)("div",{className:X("".concat(H,"__timer-control-wrapper")),children:[Object(a.jsx)(R,{headTag:"h3",children:"\u62bd\u734e\u6642\u9593"}),Object(a.jsx)(B,{timeupCallback:n}),Object(a.jsxs)("div",{className:X("timer-control-hint"),children:["\u5012\u6578\u6642\u9593\u8aaa\u660e:",Z.map((function(e,t){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[" ","".concat(t+1,". ").concat(e.message)]}),e.ex?Object(a.jsx)("div",{children:e.ex}):null]},t)}))]})]})}var ee=s.a.memo($);function te(e){var t=e.className,n=e.children,r=Object(k.a)(e,["className","children"]);return Object(a.jsx)("li",Object(d.a)(Object(d.a)({className:t},r),{},{children:n}))}var ne=te;function ae(e){var t=e.className,n=e.children,r=Object(k.a)(e,["className","children"]);return Object(a.jsx)("ul",Object(d.a)(Object(d.a)({className:t},r),{},{children:n}))}te.defaultProps={className:""},ae.Item=ne;var re=ae;ae.defaultProps={className:""};var se=n.p+"static/media/manAvatar.b0407046.svg",ce=n.p+"static/media/womanAvatar.22a86059.svg";function ie(e){var t=e.className,n=e.gender;return Object(a.jsx)("img",{className:t,src:"man"===n?se:ce,alt:"".concat(n,"Avatar")})}var le=ie;ie.defaultProps={className:"",gender:""};var ue=n(25),oe=n.n(ue),de=Y.ROOT_CLASS,me=S.a.bind(oe.a),be=["Avatar","Name","ID"];function je(){var e=Object(l.c)((function(e){return e.listsReducer.attendLists}));return Object(a.jsxs)("div",{className:me("".concat(de,"__attend-lists-wrapper")),children:[Object(a.jsx)(R,{headTag:"h3",children:"\u53c3\u8207\u62bd\u734e\u540d\u55ae"}),Object(a.jsx)("div",{children:Object(a.jsxs)(re,{className:me("attend-lists"),children:[Object(a.jsx)(re.Item,{className:me("lists-item","lists-item-title"),children:be.map((function(e,t){return Object(a.jsx)("div",{children:e},t)}))}),e.map((function(e,t){return Object(a.jsxs)(re.Item,{className:me("lists-item"),children:[Object(a.jsx)("div",{children:Object(a.jsx)(le,{className:me("lists-item-avatar"),gender:e.gender})}),Object(a.jsx)("div",{children:e.name}),Object(a.jsx)("div",{children:e.id})]},t)}))]})})]})}var _e=s.a.memo(je);var he=function(e,t){Object(r.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}),[e])},Oe=n(26),ve=n.n(Oe),fe=S.a.bind(ve.a);function pe(e){var t=e.className,n=e.title,s=e.children,c=e.handleClose,i=Object(r.useRef)(null);return he(i,c),Object(a.jsx)("div",{className:fe(t,"light-box"),children:Object(a.jsxs)("div",{ref:i,className:fe("light-box-content"),children:[Object(a.jsx)(R,{headTag:"h3",className:fe("light-box-header"),children:n}),Object(a.jsx)("div",{className:fe("light-box-body"),children:s}),Object(a.jsx)(I,{"data-color":"confirm","data-size":"big",className:fe("light-box-button"),handleClick:c,children:"OK!"})]})})}var xe=pe;pe.defaultProps={className:"",title:""};var ge=n(27),ye=n.n(ge),Ne=Y.ROOT_CLASS,we=S.a.bind(ye.a);var Se=function(){var e=Object(l.b)(),t=Object(r.useCallback)((function(){e(f({isResultShowed:!1}))}),[e]),n=Object(l.c)((function(e){return e.listsReducer.luckyPerson}));return Object(a.jsxs)(xe,{className:we("".concat(Ne,"__result-wrapper")),title:"\u62bd\u734e\u7d50\u679c",handleClose:t,children:[Object(a.jsx)(le,{className:we("result-avatar"),gender:n.gender}),Object(a.jsx)(R,{className:we("result-name"),headTag:"h4",children:"Name: ".concat(n.name)}),Object(a.jsx)(R,{className:we("result-number"),headTag:"h4",children:"ID: ".concat(n.id)})]})},ke=(n(1319),Y.ROOT_CLASS);var Re=function(){var e=Object(l.c)((function(e){return e.resultReducer.isResultShowed}));return Object(a.jsxs)("div",{className:"".concat(ke),children:[Object(a.jsx)(ee,{}),Object(a.jsx)(_e,{}),e?Object(a.jsx)(Se,{}):null]})},Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1321)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},Ce=N();i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(l.a,{store:Ce,children:Object(a.jsx)(Re,{})})}),document.getElementById("root")),Te()},21:function(e,t,n){e.exports={button:"style_button__1omhx"}},22:function(e,t,n){},23:function(e,t,n){e.exports={"timer-form":"style_timer-form__1qAlk","timer-input":"style_timer-input__3JKVw","timer-input__invalid":"style_timer-input__invalid__oWfzV","timer-input-error-message":"style_timer-input-error-message__2TzxV","timer-input__suffix":"style_timer-input__suffix__2o4Ia","timer-submit-button":"style_timer-submit-button__14a45","timer-remaintime":"style_timer-remaintime__333AE"}},24:function(e,t,n){e.exports={"lucky-draw__timer-control-wrapper":"style_lucky-draw__timer-control-wrapper__35nNl","timer-control-hint":"style_timer-control-hint__2qQGK"}},25:function(e,t,n){e.exports={"lucky-draw__attend-lists-wrapper":"style_lucky-draw__attend-lists-wrapper__3Z5TM","attend-lists":"style_attend-lists__3re9A","lists-item-title":"style_lists-item-title__TJvRM","lists-item":"style_lists-item__1UvIU","lists-item-avatar":"style_lists-item-avatar___yMAS"}},26:function(e,t,n){e.exports={"light-box":"style_light-box__34ABC","light-box-content":"style_light-box-content__WKYPJ",slideFromTop:"style_slideFromTop___oTR2","light-box-header":"style_light-box-header__3WRV_","light-box-body":"style_light-box-body__34QRc","light-box-button":"style_light-box-button__30k39"}},27:function(e,t,n){e.exports={"lucky-draw__result-wrapper":"style_lucky-draw__result-wrapper__2q4Kq","result-avatar":"style_result-avatar__2MXlt","result-name":"style_result-name__-dxOV","result-number":"style_result-number__2pIfA"}}},[[1320,1,2]]]);