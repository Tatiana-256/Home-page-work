(this["webpackJsonphome-page"]=this["webpackJsonphome-page"]||[]).push([[0],{17:function(e,t,n){e.exports={nav:"navigation_nav__PUsPb",navigation:"navigation_navigation__24OKy",activeLink:"navigation_activeLink__3Sjju"}},22:function(e,t,n){e.exports={boxes:"LoadingPhoto_boxes__2B_lM",boxComponent:"LoadingPhoto_boxComponent__3qSrS",box:"LoadingPhoto_box__3vXBA",text:"LoadingPhoto_text__S57lb",colorBox:"LoadingPhoto_colorBox__1bcx0",loading_box:"LoadingPhoto_loading_box__2B3F5"}},23:function(e,t,n){e.exports={time:"textMessage_time__34qfX",inp:"textMessage_inp__zkr_V",error:"textMessage_error__tmFM2",btn:"textMessage_btn__1FwkO"}},24:function(e,t,n){e.exports={page:"Increment_page__18Ot7",general:"Increment_general__2sGwL",btn:"Increment_btn__Rgqqg",inp:"Increment_inp__3MHKS"}},25:function(e,t,n){e.exports={openCamera:"TakingPhoto_openCamera__3UUFG",cameraWindow:"TakingPhoto_cameraWindow__EXoLE",camera_box:"TakingPhoto_camera_box__1peir",numberPhotos:"TakingPhoto_numberPhotos__3RgIH",photoWindow:"TakingPhoto_photoWindow__2IRfx"}},28:function(e,t,n){e.exports={general:"message_general__32XmR",data:"message_data__24s7r",box:"message_box__2a7Ig",text:"message_text__3PAYW"}},29:function(e,t,n){e.exports={page:"character_page__1hwo1",general:"character_general__1GysV",bold:"character_bold__2HA20"}},34:function(e,t,n){e.exports={position:"loader_position__3P-7i",loader:"loader_loader__EKort",spin:"loader_spin__1Hhas"}},38:function(e,t,n){},48:function(e,t,n){e.exports={head:"head_head__1xY8S"}},49:function(e,t,n){e.exports=n.p+"static/media/header.01718e6b.JPG"},50:function(e,t,n){e.exports={names:"names_names__3XQ4Y"}},54:function(e,t,n){e.exports=n.p+"static/media/loading.3eb3f5ee.svg"},55:function(e,t,n){e.exports={loader:"loader_loader__1DfKD"}},56:function(e,t,n){e.exports={boxComponent:"Box_boxComponent__34heJ",box:"Box_box__12278",text:"Box_text__3ydb8"}},62:function(e,t,n){e.exports=n(91)},67:function(e,t,n){},68:function(e,t,n){},8:function(e,t,n){e.exports={black:"styles_black__3jK39",pink:"styles_pink__1ijOo",regular:"styles_regular__3uKJ4",btn:"styles_btn__16-TI",b:"styles_b__rhaJ4",r:"styles_r__3Th9_",p:"styles_p__OE9w2",sentBox:"styles_sentBox__Yy9ji",resultSucces:"styles_resultSucces__v0G0q",resultError:"styles_resultError__1y9gH",checkbox:"styles_checkbox__1UQP-"}},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),c=n.n(o),i=(n(67),n(3)),s=n(4),l=n(6),u=n(5),d=n(7),h=(n(68),n(48),n(28),n(49),n(20)),p=n(23),m=n.n(p),f=(r.a.Component,n(29),n(24)),g=n.n(f),b=n(50),v=n.n(b),_=function(e){var t=e.name;return r.a.createElement("div",{className:v.a.names},t)},E=(r.a.Component,n(19)),k=(n(17),n(9)),O=(n(38),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:!1,title:""},n.onAddTaskClick=function(){var e=n.state.title;n.setState({title:""}),""===e?n.setState({error:!0}):(n.setState({error:!1}),n.props.onAddTaskClick(e))},n.onTitleChange=function(e){n.setState({error:!1,title:e.currentTarget.value})},n.onKeyPress=function(e){"Enter"===e.key&&n.onAddTaskClick()},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"todoList-header"},r.a.createElement("h3",{className:"todoList-header__title"},"What to Learn"),r.a.createElement("div",{className:"todoList-newTaskForm"},r.a.createElement("input",{value:this.state.title,onChange:this.onTitleChange,type:"text",onKeyPress:this.onKeyPress,placeholder:"New task name",className:this.state.error?"error":"input"}),r.a.createElement("button",{onClick:this.onAddTaskClick},"Add")))}}]),t}(r.a.Component)),x=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={editMode:!1},n.activateEditMode=function(){n.setState({editMode:!0})},n.deActivateEditMode=function(){n.setState({editMode:!1})},n.onIsDoneChanges=function(e){n.props.changeStatus(n.props.task.id,e.currentTarget.checked)},n.onTitleChanged=function(e){n.props.changeTitle(n.props.task.id,e.currentTarget.value)},n.onDeleteTask=function(){n.props.deleteTask(n.props.task)},n.onChangePriority=function(e){n.props.onChangePriorityOfTask(n.props.task.id,e.target.value)},n.classSelect=function(){return"low"===n.props.task.priority?"low":"average"===n.props.task.priority?"average":"high"===n.props.task.priority?"high":void 0},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"todoList-tasks"},r.a.createElement("div",{className:"todoList-task"},r.a.createElement("div",{className:"delete"},r.a.createElement("div",null," Delete task"),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onDeleteTask},"x"))),r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"all"},r.a.createElement("input",{onChange:this.onIsDoneChanges,type:"checkbox",checked:this.props.task.isDone}),this.state.editMode?r.a.createElement("input",{onBlur:this.deActivateEditMode,onChange:this.onTitleChanged,autoFocus:!0,value:this.props.task.title}):r.a.createElement("span",{onClick:this.activateEditMode},this.props.task.id," - ",this.props.task.title," "),r.a.createElement("div",{className:"inner"},r.a.createElement("div",null,"Created: ",this.props.task.created),this.props.task.updated?r.a.createElement("div",null,"Updated: ",this.props.task.updated):"",this.props.task.finished?r.a.createElement("div",null,"Finished: ",this.props.task.finished):"",r.a.createElement("div",null,"Task: ",!0===this.props.task.isDone?" Done":" In progress"))),r.a.createElement("div",{className:"prior"},r.a.createElement("select",{className:this.classSelect(),value:this.props.task.priority,onChange:this.onChangePriority},r.a.createElement("option",null,"Select priority:"),r.a.createElement("option",{value:"low",className:"low"},"low"),r.a.createElement("option",{value:"average",className:"average"},"average"),r.a.createElement("option",{value:"high",className:"high"},"high")))))))}}]),t}(r.a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tasks.map((function(t){return r.a.createElement(x,{onChangePriorityOfTask:e.props.onChangePriorityOfTask,priority:t.priority,key:t.id,deleteTask:e.props.deleteTask,changeTitle:e.props.changeTitle,changeStatus:e.props.changeStatus,task:t})}));return r.a.createElement("div",{className:"todoList-task"},t)}}]),t}(r.a.Component),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isHidden:!1},n.hideShow=function(){n.setState({isHidden:!n.state.isHidden})},n.onAllFilterClick=function(){n.props.changeFilter("All")},n.onCompletedFilterClick=function(){n.props.changeFilter("Completed")},n.onActiveFilterClick=function(){n.props.changeFilter("Active")},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="All"===this.props.filterValue?"filter-active":"stand",t="Completed"===this.props.filterValue?"filter-active":"stand",n="Active"===this.props.filterValue?"filter-active":"stand";return r.a.createElement("div",{className:"todoList-footer"},this.state.isHidden&&r.a.createElement("div",null,r.a.createElement("button",{className:e,onClick:this.onAllFilterClick},"All"),r.a.createElement("button",{className:t,onClick:this.onCompletedFilterClick},"Completed"),r.a.createElement("button",{className:n,onClick:this.onActiveFilterClick},"Active")),this.state.isHidden?r.a.createElement("span",{onClick:this.hideShow},"Hide"):r.a.createElement("span",{onClick:this.hideShow},"Show"))}}]),t}(r.a.Component),C=function(e,t){localStorage.setItem(e,JSON.stringify(t))},w=(r.a.Component,n(34)),S=n.n(w),N=n(15),T={loading:!0,sendingData:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return Object(k.a)({},e,{loading:t.loading});case"SENDING_DATA":return Object(k.a)({},e,{sendingData:t.send});default:return e}return e},A=n(11),L=n.n(A),D=n(14),R=n(8),M=n.n(R),H=n(53),I=n.n(H).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/auth/test"}),B=function(e){return function(){return I.post("",{success:e})}},F=function(){var e=Object(D.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return n=e.sent,console.log("answer: ",n.data),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log("error: ",Object(k.a)({},e.t0)),e.abrupt("return","error");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),W={style:M.a.regular,success:!0,responseServer:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BLACK_STYLE":return Object(k.a)({},e,{style:M.a.black});case"SET_PINK_STYLE":return Object(k.a)({},e,{style:M.a.pink});case"SET_REGULAR_STYLE":return Object(k.a)({},e,{style:M.a.regular});case"CHANGE_SUCCESS":return Object(k.a)({},e,{success:!e.success,responseServer:!1});case"CHANGE_RESPONSE":return Object(k.a)({},e,{responseServer:!e.responseServer})}return e},K={changeLoading:function(){return{type:"SET_LOADING",loading:!1}},changeOnBlack:function(){return{type:"SET_BLACK_STYLE"}},changeOnPink:function(){return{type:"SET_PINK_STYLE"}},changeOnRegular:function(){return{type:"SET_REGULAR_STYLE"}},changeSuccess:function(){return{type:"CHANGE_SUCCESS"}},changeResponse:function(){return{type:"CHANGE_RESPONSE"}},sendData:function(e){return{type:"SENDING_DATA",send:e}}},U=n(54),Y=n.n(U),q=n(55),J=n.n(q),V=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:Y.a,className:J.a.loader}))},X=Object(N.b)((function(e){return{success:e.style.success,sendingData:e.loading.sendingData,responseServer:e.style.responseServer}}),{sentDataRequest:function(e){return function(){var t=Object(D.a)(L.a.mark((function t(n){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(K.sendData(!0)),t.next=3,F(B(e));case 3:n(K.changeResponse()),n(K.sendData(!1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},changeSuccess:K.changeSuccess})((function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:M.a.sentBox},r.a.createElement("input",{type:"checkbox",className:M.a.checkbox,checked:e.success,onChange:function(){return e.changeSuccess()},id:"input"}),r.a.createElement("label",{htmlFor:"input"}),r.a.createElement("button",{disabled:e.sendingData,className:M.a.r,onClick:function(){e.sentDataRequest(e.success)}},"Send"),e.sendingData?r.a.createElement(V,null):null),e.responseServer?e.success?r.a.createElement("div",{className:M.a.resultSucces},"\u0417\u0430\u0434\u0430\u043d\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"):r.a.createElement("div",{className:M.a.resultError},"Something wrong. Try again"):null)})),z=(Object(N.b)((function(e){return{style:e.style.style}}),(function(e){return{changeOnBlack:function(){e(K.changeOnBlack())},changeOnPink:function(){e(K.changeOnPink())},changeOnRegular:function(){e(K.changeOnRegular())}}}))((function(e){return r.a.createElement("div",{className:e.style},r.a.createElement("div",null,r.a.createElement("h3",null,"Choose style"),r.a.createElement("div",{className:M.a.btn},r.a.createElement("button",{className:M.a.b,onClick:function(){e.changeOnBlack()}},"black"),r.a.createElement("button",{className:M.a.p,onClick:function(){e.changeOnPink()}},"pink"),r.a.createElement("button",{className:M.a.r,onClick:function(){e.changeOnRegular()}},"regular"))),r.a.createElement("div",null,"There is Wednesday page",r.a.createElement(X,null)))})),n(1)),Q=n(22),$=n.n(Q),Z=n(56),ee=n.n(Z),te=function(e){var t=e.openCamera;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ee.a.boxComponent},r.a.createElement("button",{onClick:t,style:{width:"100px",height:"50px",backgroundColor:"pink"}},"open camera")))},ne=n(27);var ae=n(12),re=n(13);function oe(){var e=Object(ae.a)(["\n  width: 75%;\n  min-width: 100px;\n  max-width: 250px;\n  margin-top: 24px;\n  padding: 12px 24px;\n  background: silver;\n"]);return oe=function(){return e},e}function ce(){var e=Object(ae.a)(["\n        animation: "," 750ms ease-out;\n      "]);return ce=function(){return e},e}function ie(){var e=Object(ae.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #ffffff;\n  opacity: 0;\n\n  ","\n"]);return ie=function(){return e},e}function se(){var e=Object(ae.a)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  bottom: 20px;\n  left: 20px;\n  box-shadow: 0px 0px 20px 56px rgba(0, 0, 0, 0.6);\n  border: 1px solid #ffffff;\n  border-radius: 10px;\n"]);return se=function(){return e},e}function le(){var e=Object(ae.a)(["\n  position: absolute;\n\n  &::-webkit-media-controls-play-button {\n    display: none !important;\n    -webkit-appearance: none;\n  }\n"]);return le=function(){return e},e}function ue(){var e=Object(ae.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"]);return ue=function(){return e},e}function de(){var e=Object(ae.a)(["\n  position: relative;\n  width: 100%;\n  max-width: ",";\n  max-height: ",";\n  overflow: hidden;\n"]);return de=function(){return e},e}function he(){var e=Object(ae.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  width: 100%;\n"]);return he=function(){return e},e}function pe(){var e=Object(ae.a)(["\n  from {\n    opacity: 0.75;\n  }\n\n  to {\n    opacity: 0;\n  }\n"]);return pe=function(){return e},e}var me=Object(re.c)(pe()),fe=re.b.div(he()),ge=re.b.div(de(),(function(e){var t=e.maxWidth;return t&&"".concat(t,"px")}),(function(e){var t=e.maxHeight;return t&&"".concat(t,"px")})),be=re.b.canvas(ue()),ve=re.b.video(le()),_e=re.b.div(se()),Ee=re.b.div(ie(),(function(e){if(e.flash)return Object(re.a)(ce(),me)})),ke=re.b.button(oe()),Oe={audio:!1,video:{facingMode:"environment"}};function xe(e){var t=e.onCapture,n=e.onClear,o=Object(a.useRef)(),c=Object(a.useRef)(),i=Object(a.useState)({width:0,height:0}),s=Object(z.a)(i,2),l=s[0],u=s[1],d=Object(a.useState)(!1),h=Object(z.a)(d,2),p=h[0],m=h[1],f=Object(a.useState)(!0),g=Object(z.a)(f,2),b=g[0],v=g[1],_=Object(a.useState)(!1),E=Object(z.a)(_,2),k=E[0],O=E[1],x=function(e){var t=Object(a.useState)(null),n=Object(z.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(D.a)(L.a.mark((function t(){var n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia(e);case 3:n=t.sent,o(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}if(r)return function(){r.getTracks().forEach((function(e){e.stop()}))};!function(){t.apply(this,arguments)}()}),[r,e]),r}(Oe),y=function(e){var t=Object(a.useState)(e),n=Object(z.a)(t,2),r=n[0],o=n[1];return[r,Object(a.useCallback)((function(e,t){e&&t&&o(e<=t?t/e:e/t)}),[])]}(1.586),j=Object(z.a)(y,2),C=j[0],w=j[1],S=function(e,t,n,r){var o=Object(a.useState)({x:0,y:0}),c=Object(z.a)(o,2),i=c[0],s=c[1];return Object(a.useEffect)((function(){if(e&&t&&n&&r){var a=e>n?Math.round((e-n)/2):0,o=t>r?Math.round((t-r)/2):0;s({x:a,y:o})}}),[e,t,n,r]),i}(c.current&&c.current.videoWidth,c.current&&c.current.videoHeight,l.width,l.height);function N(){w(c.current.videoHeight,c.current.videoWidth),m(!0),c.current.play()}function T(){o.current.getContext("2d").drawImage(c.current,S.x,S.y,l.width,l.height,0,0,l.width,l.height),o.current.toBlob((function(e){return t(e)}),"image/jpeg",1),v(!1),O(!0)}function P(){o.current.getContext("2d").clearRect(0,0,o.current.width,o.current.height),v(!0),n()}return x&&c.current&&!c.current.srcObject&&(c.current.srcObject=x),x?r.a.createElement(ne.a,{bounds:!0,onResize:function(e){u({width:e.bounds.width,height:Math.round(e.bounds.width/C)})}},(function(e){var t=e.measureRef;return r.a.createElement(fe,null,r.a.createElement(ge,{ref:t,maxHeight:c.current&&c.current.videoHeight,maxWidth:c.current&&c.current.videoWidth,style:{height:"".concat(l.height,"px")}},r.a.createElement(ve,{ref:c,hidden:!p,onCanPlay:N,autoPlay:!0,playsInline:!0,muted:!0,style:{top:"-".concat(S.y,"px"),left:"-".concat(S.x,"px")}}),r.a.createElement(_e,{hidden:!p}),r.a.createElement(be,{ref:o,width:l.width,height:l.height}),r.a.createElement(Ee,{flash:k,onAnimationEnd:function(){return O(!1)}})),p&&r.a.createElement(ke,{onClick:b?T:P},b?"Take a picture":"Take another picture"))})):null}var ye=function(){var e=Object(a.useState)(!1),t=Object(z.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(),i=Object(z.a)(c,2),s=i[0],l=i[1];console.log(s);return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(xe,{onCapture:function(e){return l(e)},onClear:function(){return l(void 0)}}):r.a.createElement("div",{style:{height:"70vh",width:"80%"}},r.a.createElement("div",{className:$.a.loading_box},"DEMO",r.a.createElement("div",{className:$.a.boxes},r.a.createElement(te,{openCamera:function(){return o(!0)}})))))},je=n(25),Ce=n.n(je);var we={audio:!1,video:{facingMode:"environment"}},Se=function(e){var t=e.onCapture,n=e.onClear;console.log("Render camera");var o=Object(a.useRef)(null),c=Object(a.useRef)(),i=Object(a.useState)({width:200,height:200}),s=Object(z.a)(i,2),l=(s[0],s[1]),u=function(e){var t=Object(a.useState)(e),n=Object(z.a)(t,2),r=n[0],o=n[1];return[r,Object(a.useCallback)((function(e,t){e&&t&&o(t<=e?t/e:e/t)}),[])]}(1.586),d=Object(z.a)(u,2),h=d[0],p=d[1],m=Object(a.useState)(!0),f=Object(z.a)(m,2),g=f[0],b=f[1],v=function(e){var t=Object(a.useState)(null),n=Object(z.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(D.a)(L.a.mark((function t(){var n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia(e);case 3:n=t.sent,o(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}if(r)return function(){r.getTracks().forEach((function(e){e.stop()}))};!function(){t.apply(this,arguments)}()}),[r,e]),r}(we);function _(){p(o.current.videoHeight,o.current.videoWidth),b(!0),o.current.play()}v&&o.current&&!o.current.srcObject&&(o.current.srcObject=v);var E=window.innerHeight,k=1.568*window.innerWidth,O=.8*window.innerHeight,x=.8*window.innerWidth;function y(e,t,n,a){var r=Math.min(n/e,a/t);return{width:e*r,height:t*r}}console.log(E,k);y(k,E,O,x).height,y(k,E,O,x).width;function j(){c.current.getContext("2d").drawImage(o.current,0,0,340,640),c.current.toBlob((function(e){return t(e)}),"image/jpeg",1),b(!1)}return v?r.a.createElement(ne.a,{bounds:!0,onResize:function(e){l({width:e.bounds.width,height:Math.round(e.bounds.width/h)})}},(function(e){var t=e.measureRef;return r.a.createElement("div",{className:Ce.a.openCamera,ref:t},r.a.createElement("div",{className:Ce.a.camera_box},r.a.createElement("div",{className:Ce.a.numberPhotos},"1/4 photos"),r.a.createElement("div",null,r.a.createElement("video",{ref:o,hidden:!g,onCanPlay:_,className:Ce.a.cameraWindow,autoPlay:!0,playsInline:!0,muted:!0}),r.a.createElement("canvas",{ref:c,hidden:g,style:{width:"".concat(340,"px"),height:"".concat(640,"px")}})),r.a.createElement("button",{type:"submit",onClick:g?j:function(){b(!0),n()}},g?" Take photo":"Try again")))})):null},Ne=function(){var e=Object(a.useState)(!1),t=Object(z.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(),i=Object(z.a)(c,2),s=i[0],l=i[1];console.log(s);return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(Se,{onCapture:function(e){return l(e)},onClear:function(){return l(void 0)}}):r.a.createElement("div",{style:{height:"70vh",width:"80%"}},r.a.createElement("div",{className:$.a.loading_box},"own",r.a.createElement("div",{className:$.a.boxes},r.a.createElement(te,{openCamera:function(){return o(!0)}})))))},Te=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loader:!1},n.timer=function(){return setTimeout((function(){n.props.changeLoading()}),0)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.timer()}},{key:"render",value:function(){return!0===this.props.loading?r.a.createElement("div",{className:S.a.position},r.a.createElement("div",{className:S.a.loader})):r.a.createElement("div",null,r.a.createElement(Ne,null),r.a.createElement(ye,null))}}]),t}(r.a.Component),Pe=Object(N.b)((function(e){return{loading:e.loading.loading}}),(function(e){return{changeLoading:function(){e(K.changeLoading())}}}))(Te);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=n(21),Le=n(61),De=Object(Ae.c)({loading:P,style:G}),Re=Object(Ae.d)(De,Object(Ae.a)(Le.a));c.a.render(r.a.createElement(E.a,null,r.a.createElement(N.a,{store:Re},r.a.createElement(Pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.f85b6989.chunk.js.map