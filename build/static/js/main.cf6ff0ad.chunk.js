(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(19),i=e.n(o),c=e(38),u=e(22),d=e(42),l=e(39),s=e(44),p=e(3),f=e(29),b=e(154),m=e(152),v=e(151),g=e(150),h=e(4),E=e(24),x=e(13),D=function(n){return{type:T.ADD_LIST,payload:n}},O=function(n,t,e,r,a,o){return{type:T.DRAG_HAPPENDED,payload:{droppableIdStart:n,droppableIdEnd:t,droppableIndexStart:e,droppableIndexEnd:r,droppableId:a,type:o}}},j=function(n){var t=new Audio(n);t.loop=!1,t.play(),console.log("sound done (by Thunk)")},y=function(n,t){return function(e){e(function(n,t){return{type:T.DELETE_CARD,payload:{id:n,listID:t}}}(n,t)),j("https://www.pacdv.com/sounds/preview/sound21.mp3")}},I=function(n,t,e){return function(r){r(function(n,t,e){return{type:T.EDIT_CARD,payload:{id:n,listID:t,newText:e}}}(n,t,e)),j("https://freesound.org/data/previews/256/256113_3263906-lq.mp3")}},w=function(n,t){return function(e,r){e(function(n,t){return{type:T.ADD_CARD,payload:{text:t,listID:n}}}(n,t)),console.log("card added!"),j("https://freesound.org/data/previews/263/263132_2064400-lq.mp3")}},T={ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",DRAG_HAPPENDED:"DRAG_HAPPENDED",EDIT_CARD:"EDIT_CARD",DELETE_CARD:"DELETE_CARD",EDIT_LIST_TITLE:"EDIT_LIST_TITLE",DELETE_LIST:"DELETE_LIST"},A=e(153);function _(){var n=Object(p.a)(["\n  && {\n    color: white;\n    background: #5aac44;\n  }\n"]);return _=function(){return n},n}var S=Object(h.a)(A.a)(_()),C=function(n){var t=n.children,e=n.onClick;return a.a.createElement(S,{variant:"contained",onMouseDown:e},t)},L=e(43);function k(){var n=Object(p.a)(["\n  margin-left: 8px;\n  cursor: pointer;\n  &:hover {\n    animation-name: ",";\n    animation-duration: 5000ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear; \n  }\n"]);return k=function(){return n},n}function R(){var n=Object(p.a)(["\nfrom {\n  transform:rotate(0deg);\n}\nto {\n  transform:rotate(360deg);\n}"]);return R=function(){return n},n}function P(){var n=Object(p.a)(["\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n"]);return P=function(){return n},n}function F(){var n=Object(p.a)(["\n  resize: none;\n  width: 100%;\n  overflow: hidden;\n  outline: none;\n  border: none;\n"]);return F=function(){return n},n}function B(){var n=Object(p.a)(["\n  min-height: 85px;\n  padding: 6px 8px 2px;\n"]);return B=function(){return n},n}function N(){var n=Object(p.a)(["\n  width: 284px;\n  margin-bottom: 8px;\n"]);return N=function(){return n},n}var z=h.a.div(N()),H=Object(h.a)(b.a)(B()),G=Object(h.a)(L.a)(F()),M=h.a.div(P()),W=Object(h.b)(R()),q=Object(h.a)(g.a)(k(),W),J=a.a.memo(function(n){var t=n.list,e=n.text,r=void 0===e?"":e,o=n.onChange,i=n.closeForm,c=n.children,u=t?"Enter list title":"Enter card title";return a.a.createElement(z,null,a.a.createElement(H,null,a.a.createElement(G,{placeholder:u,autoFocus:!0,value:r,onChange:function(n){return o(n)},onBlur:i})),a.a.createElement(M,null,c,a.a.createElement(q,{onMouseDown:i},"close")))});function K(){var n=Object(p.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  bottom: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return K=function(){return n},n}function $(){var n=Object(p.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  bottom: 3px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return $=function(){return n},n}function Q(){var n=Object(p.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return Q=function(){return n},n}function U(){var n=Object(p.a)(["\n  margin: 0 0 8px 0;\n  position: relative;\n  max-width: 100%;\n  word-wrap: break-word;\n"]);return U=function(){return n},n}var V=h.a.div(U()),X=Object(h.a)(g.a)(Q(),V),Y=Object(h.a)(g.a)($(),V),Z=Object(h.a)(g.a)(K(),V),nn=a.a.memo(function(n){var t=n.text,e=n.listID,o=n.id,i=n.index,c=n.dispatch,u=Object(r.useState)(!1),d=Object(f.a)(u,2),l=d[0],s=d[1],p=Object(r.useState)(t),g=Object(f.a)(p,2),h=g[0],x=g[1],D=function(n){c(y(o,e))},O=function(n){s(!1)},j=function(n){x(n.target.value)},w=function(n){n.preventDefault(),c(I(o,e,h)),s(!1)};return l?a.a.createElement(J,{text:h,onChange:j,closeForm:O},a.a.createElement(C,{onClick:w},"Save")):a.a.createElement(E.b,{draggableId:String(o),index:i},function(n){return a.a.createElement(V,Object.assign({},n.draggableProps,n.dragHandleProps,{ref:n.innerRef,onDoubleClick:function(){return s(!0)}}),a.a.createElement(b.a,null,a.a.createElement(X,{onMouseDown:function(){return s(!0)},fontSize:"small"},"edit"),a.a.createElement(Z,null,"add"),a.a.createElement(Y,{fontSize:"small",onMouseDown:D},"delete"),a.a.createElement(v.a,null,a.a.createElement(m.a,null,t))))})}),tn=Object(x.b)()(nn);function en(){var n=Object(p.a)(["\n        display: flex;\n        align-items: center;\n        cursor: pointer;\n        border-radius: 3px;\n        height: 36px;\n        margin-left: 8px;\n        width: 300px;\n        padding-left: 10px;\n        padding-right: 10px;\n        opacity: ",";\n        color: ",";\n        background-color: ",";\n      "]);return en=function(){return n},n}function rn(){var n=Object(p.a)(["\n  margin-left: 8px;\n  cursor: pointer;\n  &:hover {\n    animation-name: ",";\n    animation-duration: 5000ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear; \n  }\n"]);return rn=function(){return n},n}function an(){var n=Object(p.a)(["\nfrom {\n  transform:rotate(0deg);\n}\nto {\n  transform:rotate(360deg);\n}"]);return an=function(){return n},n}function on(){var n=Object(p.a)(["\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n"]);return on=function(){return n},n}function cn(){var n=Object(p.a)(["\n  resize: none;\n  width: 100%;\n  overflow: hidden;\n  outline: none;\n  border: none;\n"]);return cn=function(){return n},n}function un(){var n=Object(p.a)(["\n  min-height: 85px;\n  padding: 6px 8px 2px;\n"]);return un=function(){return n},n}function dn(){var n=Object(p.a)(["\n  width: 284px;\n  margin-bottom: 8px;\n"]);return dn=function(){return n},n}function ln(){var n=Object(p.a)(["\n  && {\n    color: white;\n    background: #5aac44;\n    &&:hover{\n        background: blue;\n    }\n  }\n"]);return ln=function(){return n},n}var sn=Object(h.a)(A.a)(ln()),pn=h.a.div(dn()),fn=Object(h.a)(b.a)(un()),bn=Object(h.a)(L.a)(cn()),mn=h.a.div(on()),vn=Object(h.b)(an()),gn=Object(h.a)(g.a)(rn(),vn),hn=function(n){function t(){var n,e;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=Object(d.a)(this,(n=Object(l.a)(t)).call.apply(n,[this].concat(o)))).state={formOpen:!1,text:""},e.openForm=function(){e.setState({formOpen:!0})},e.closeForm=function(n){e.setState({formOpen:!1})},e.handleInputChange=function(n){e.setState({text:n.target.value})},e.handleAddList=function(){var n=e.props.dispatch,t=e.state.text;t&&(e.setState({text:""}),n(D(t)))},e.handleAddCard=function(){var n=e.props,t=n.dispatch,r=n.listID,a=e.state.text;a&&(e.setState({text:""}),t(w(r,a)))},e.renderAddButton=function(){var n=e.props.list,t=n?"ADD NEW LiST":"Add new card",r=n?1:.7,o=n?"white":"inherit",i=n?"rgba(0,0,0,.2)":"inherit",c=h.a.div(en(),r,o,i);return a.a.createElement(c,{onClick:e.openForm},a.a.createElement(g.a,null,"add"),a.a.createElement("p",null,t))},e.renderForm=function(){var n=e.props.list,t=n?"Enter list name":"Enter card name",r=n?"Add List":"Add Card";return a.a.createElement(pn,null,a.a.createElement(fn,null,a.a.createElement(bn,{placeholder:t,autoFocus:!0,onBlur:e.closeForm,value:e.state.text,onChange:e.handleInputChange})),a.a.createElement(sn,{variant:"contained",onMouseDown:n?e.handleAddList:e.handleAddCard},r),a.a.createElement(mn,null,a.a.createElement(gn,{onClick:e.closeForm},"close")))},e}return Object(s.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return this.state.formOpen?this.renderForm():this.renderAddButton()}}]),t}(r.Component),En=Object(x.b)()(hn);function xn(){var n=Object(p.a)(["\n  transition: background 0.3s ease-in;\n  font-size: 18px;\n  font-weight: bold;\n  margin: 1px 5px 20px 5px;\n  &:hover {\n    background: #ccc;\n    padding: 0.5%;\n  }\n"]);return xn=function(){return n},n}function Dn(){var n=Object(p.a)(["\n  cursor: pointer;\n  transition: opacity 0.3s ease-in-out;\n  opacity: 0.4;\n  margin-bottom: 15px;\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return Dn=function(){return n},n}function On(){var n=Object(p.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n"]);return On=function(){return n},n}function jn(){var n=Object(p.a)(["\n  width: 95%;\n  border: none;\n  outline-color: blue;\n  border-radius: 3px;\n  padding: 7px 5px;\n  margin: 10px 5px 15px 5px;\n"]);return jn=function(){return n},n}function yn(){var n=Object(p.a)(["\nbackground-color: grey;\nbackground: linear-gradient(45deg, rgba(145,232,79,1) 0%, rgba(0,128,128,1) 100%);\nborder-radius: 3px;\nwidth: 300px;\npadding: 15px 8px 25px 8px;\nheight: 100%;\nmargin: 0 10px 0 1px;\n"]);return yn=function(){return n},n}var In=h.a.div(yn()),wn=h.a.input(jn()),Tn=h.a.div(On()),An=Object(h.a)(g.a)(Dn()),_n=h.a.h4(xn()),Sn=Object(x.b)()(function(n){var t=n.title,e=n.cards,o=n.listID,i=n.index,c=n.dispatch,u=Object(r.useState)(!1),d=Object(f.a)(u,2),l=d[0],s=d[1],p=Object(r.useState)(t),b=Object(f.a)(p,2),m=b[0],v=b[1],g=function(n){},h=function(n){n.preventDefault(),v(n.target.value)},x=function(n){s(!1),c(function(n,t){return{type:T.EDIT_LIST_TITLE,payload:{listID:n,newTitle:t}}}(o,m))},D=function(){c(function(n){return function(t){return t({type:T.DELETE_LIST,payload:{listID:n}})}}(o))};return a.a.createElement(E.b,{draggableId:String(o),index:i},function(n){return a.a.createElement(In,Object.assign({},n.draggableProps,n.dragHandleProps,{ref:n.innerRef}),a.a.createElement(E.c,{droppableId:String(o),type:"card"},function(n){return a.a.createElement("div",null,"`",a.a.createElement("div",null,l?a.a.createElement("form",{onSubmit:x},a.a.createElement(wn,{type:"text",maxLength:"45",value:m,onChange:h,autoFocus:!0,onFocus:g,onBlur:x})):a.a.createElement(Tn,null,a.a.createElement(_n,{onClick:function(){return s(!0)}},m),a.a.createElement(An,{onClick:D},"delete"))),a.a.createElement("div",Object.assign({},n.droppableProps,{ref:n.innerRef}),e.map(function(n,t){return a.a.createElement(tn,{key:n.id,index:t,text:n.text,id:n.id,listID:o})}),a.a.createElement(En,{listID:o}),n.placeholder))}))})});function Cn(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n    marginRight: 8\n"]);return Cn=function(){return n},n}var Ln=h.a.div(Cn()),kn=function(n){function t(){var n,e;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(d.a)(this,(n=Object(l.a)(t)).call.apply(n,[this].concat(a)))).onDragEnd=function(n){var t=n.destination,r=n.source,a=n.draggableId,o=n.type;t&&e.props.dispatch(O(r.droppableId,t.droppableId,r.index,t.index,a,o))},e}return Object(s.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){var n=this.props.lists;return a.a.createElement(E.a,{onDragEnd:this.onDragEnd},a.a.createElement("h3",{style:{color:"white",padding:"0 1%",textTransform:"uppercase"}},"KANBAN: add, edit, delete, listen (eng only) and drag&drop your cards."),a.a.createElement(E.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},function(t){return a.a.createElement(Ln,Object.assign({},t.droppableProps,{ref:t.innerRef}),n.map(function(n,t){return a.a.createElement(Sn,{listID:n.id,title:n.title,key:n.id,cards:n.cards,index:t})}),t.placeholder,a.a.createElement(En,{list:!0}))}))}}]),t}(r.Component),Rn=Object(x.b)(function(n,t){return{lists:n.lists}})(kn),Pn=e(9),Fn=e(46),Bn=e(18),Nn=2,zn=6,Hn=[{title:"1st list / to do",id:"list-".concat(0),cards:[{id:"card-".concat(0),text:"1st card / buy food (for example) / you can add some important info to the card and save it. Then move it to other list when needed"},{id:"card-".concat(1),text:"2nd card (feed the tiger for instance)"}]},{title:"2nd dummy list / done",id:"list-".concat(1),cards:[{id:"card-".concat(2),text:"1st card / do something useless"},{id:"card-".concat(3),text:"another 2nd card"},{id:"card-".concat(4),text:"watch youtube videos"}]}],Gn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Hn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.ADD_LIST:var e={title:t.payload,cards:[],id:"list-".concat(Nn)};return Nn+=1,[].concat(Object(Bn.a)(n),[e]);case T.ADD_CARD:var r={text:t.payload.text,id:"card-".concat(zn)};return zn+=1,n.map(function(n){return n.id===t.payload.listID?Object(Fn.a)({},n,{cards:[].concat(Object(Bn.a)(n.cards),[r])}):n});case T.EDIT_CARD:var a=t.payload,o=a.id,i=a.listID,c=a.newText;return n.map(function(n){if(n.id===i){var t=n.cards.map(function(n){return n.id===o?(n.text=c,n):n});return Object(Fn.a)({},n,{cards:t})}return n});case T.DELETE_CARD:var u=t.payload,d=u.id,l=u.listID;return n.map(function(n){if(n.id===l){console.log("list deletion");var t=n.cards.filter(function(n){return n.id!==d});return Object(Fn.a)({},n,{cards:t})}return n});case T.DRAG_HAPPENDED:var s=t.payload,p=s.droppableIdStart,f=s.droppableIdEnd,b=s.droppableIndexEnd,m=s.droppableIndexStart,v=(s.draggableId,s.type),g=Object(Bn.a)(n);if("list"===v){var h=g.splice(m,1);return g.splice.apply(g,[b,0].concat(Object(Bn.a)(h))),g}if(p===f){var E,x=n.find(function(n){return p===n.id}),D=x.cards.splice(m,1);(E=x.cards).splice.apply(E,[b,0].concat(Object(Bn.a)(D)))}if(p!==f){var O,j=n.find(function(n){return p===n.id}).cards.splice(m,1);(O=n.find(function(n){return f===n.id}).cards).splice.apply(O,[b,0].concat(Object(Bn.a)(j)))}return g;case T.EDIT_LIST_TITLE:var y=t.payload,I=y.listID,w=y.newListTitle;return n.map(function(n){return n.id===I?(n.title=w,n):n});case T.DELETE_LIST:var A=t.payload.listID;return n.filter(function(n){return n.id!==A});default:return n}},Mn=Object(Pn.c)({lists:Gn}),Wn=e(74),qn=e(54),Jn=e(75),Kn={key:"root",storage:e.n(Jn).a},$n=Object(qn.a)(Kn,Mn);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qn=e(76),Un=function(){var n=Object(Pn.e)($n,Object(Pn.a)(Wn.a));return{store:n,persistor:Object(qn.b)(n)}}(),Vn=Un.persistor,Xn=Un.store;i.a.render(a.a.createElement(x.a,{store:Xn},a.a.createElement(Qn.PersistGate,{loading:null,persistor:Vn},a.a.createElement(Rn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},81:function(n,t,e){n.exports=e(135)}},[[81,1,2]]]);
//# sourceMappingURL=main.cf6ff0ad.chunk.js.map