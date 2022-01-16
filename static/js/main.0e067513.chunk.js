(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{105:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(40),o=n.n(a),s=(n(105),n(6)),u=n(8),i=n(2),l=n(1),j=function(e){var t=e.location;return Object(i.c)((function(e){return e.auth.isAuth}))?Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("div",{className:"header__container container",children:["/"===t.pathname?Object(l.jsx)("div",{className:"header__logo header__logo--no-hover",children:"Social Network"}):Object(l.jsx)(u.c,{className:"header__logo",to:"/",children:"Social Network"}),"/settings"===t.pathname?Object(l.jsx)("div",{className:"header__links",children:Object(l.jsx)(u.c,{className:"header__link",to:"/",children:"--\x3e Users"})}):Object(l.jsx)("div",{className:"header__links",children:Object(l.jsx)(u.c,{className:"header__link",to:"/settings",children:"Settings"})})]})}):Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("div",{className:"header__container container",children:[Object(l.jsx)(u.c,{className:"header__logo",to:"/",children:"Social Network"}),Object(l.jsx)("div",{className:"header__links",children:Object(l.jsx)(u.c,{className:"header__link",to:"/signin",children:"Sign In"})})]})})},b=n(46),d=n(9),h=n(45),f=n.n(h),O=function(e){var t=e.onClick,n=e.className,r=e.color,c=e.button,a=e.text;return Object(l.jsx)("button",{onClick:t,className:f()(n,"button","red"===r?"button--red":null,"green"===r?"button--green":null),type:c?"button":"submit",children:a})},p=function(e){var t=e.type,n=e.id,r=e.labelText,c=e.name,a=e.onChange,o=e.value,s=e.placeholder,u=e.checked,i=e.autoFocus;return Object(l.jsxs)("div",{className:f()("field",{"field--checkbox":"checkbox"===t}),children:[Object(l.jsx)("label",{htmlFor:n,children:r}),Object(l.jsx)("input",{id:n,name:c,type:t,onChange:a,value:o||null,placeholder:s||null,checked:u,autoFocus:i})]})},g=n(3),m=n(95).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"c3902200-a6e9-4f88-83b9-6487092494bd"}}),A=function(e){return m.get("auth/me",{user:e}).then((function(e){return e.data}))},x=function(e){return m.post("auth/login",e).then((function(e){return e.data}))},v=function(){return m.delete("auth/login").then((function(e){return e.data}))},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return m.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},C=function(e){return m.post("follow/".concat(e)).then((function(e){return e.data}))},N=function(e){return m.delete("follow/".concat(e)).then((function(e){return e.data}))},F=function(){return m.get("security/get-captcha-url").then((function(e){return e.data}))},w=function(e){return m.get("profile/".concat(e)).then((function(e){return e.data}))},y=function(e){return m.put("profile",e).then((function(e){return e.data}))},E=function(e){return m.get("profile/status/".concat(e)).then((function(e){return e}))},D=function(e){return m.put("profile/status",{status:e}).then((function(e){return e.data}))},R=function(e){var t=new FormData;return t.append("image",e),m.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},I="SET_USER_DATA",P="CLEAR_USER_DATA",_="LOGIN_USER",S="ADD_ERROR_MESSAGE",T="SET_CAPTCHA",M="TOOGLE_IS_FETCHING",H="SET_REDIRECT",Q="CLEAR_ERROR_MESSAGE",J={isAuth:!1,user:null,errorMessage:null,captchaUrl:null,isFetching:!0,redirect:!1},U=function(e){return{type:S,errorMessage:e}},B=function(){return{type:Q}},L=function(e){return{type:M,isFetching:e}},Y=function(e){return{type:H,redirect:e}},K=function(){return function(e){L(!0),A().then((function(t){0===t.resultCode&&e(function(e){return{type:I,data:e}}(t.data)),e(L(!1))}),(function(e){return alert("Rejected: "+e.message)}))}},W=function(e){return function(t){L(!0),x(e).then((function(e){0===e.resultCode?(t({type:_}),t(K())):1===e.resultCode?t(U(e.messages[0])):10===e.resultCode&&F().then((function(e){var n;t((n=e.url,{type:T,captchaUrl:n}))}),(function(e){return alert("Rejected: "+e.message)})),t(L(!1))}),(function(e){return alert("Rejected: "+e.message)}))}},z=function(){return function(e){v().then((function(){e({type:P})}),(function(e){return alert("Rejected: "+e.message)}))}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(g.a)(Object(g.a)({},e),{},{isAuth:!0,user:t.data});case _:return Object(g.a)(Object(g.a)({},e),{},{isAuth:!0});case P:return Object(g.a)(Object(g.a)({},e),{},{isAuth:!1,user:null});case S:return Object(g.a)(Object(g.a)({},e),{},{errorMessage:t.errorMessage});case Q:return Object(g.a)(Object(g.a)({},e),{},{errorMessage:null});case T:return Object(g.a)(Object(g.a)({},e),{},{captchaUrl:t.captchaUrl});case M:return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case H:return Object(g.a)(Object(g.a)({},e),{},{redirect:t.redirect});default:return e}},q=function(e,t,n){return Object(l.jsxs)("div",{className:"captcha",children:[Object(l.jsx)("img",{src:e,alt:"captcha"}),Object(l.jsx)(p,{labelText:"Enter captcha",id:"captcha",name:"captcha",type:"text",onChange:t,value:n})]})},G=d.b().shape({email:d.c().required("Required"),password:d.c().required("Required")}),V=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth.isAuth})),n=Object(i.c)((function(e){return e.auth.errorMessage})),r=Object(i.c)((function(e){return e.auth.captchaUrl})),c=Object(b.a)({initialValues:{email:"",password:"",rememberMe:!1,captcha:null},validationSchema:G,validateOnChange:!1,onSubmit:function(t){e(W(t))}});return t?Object(l.jsx)(s.a,{to:"/"}):Object(l.jsxs)("form",{className:"form",onSubmit:c.handleSubmit,children:[Object(l.jsx)(p,{labelText:"Email",id:"email",name:"email",type:"text",onChange:c.handleChange,value:c.values.email}),Object(l.jsx)(p,{labelText:"Password",id:"password",name:"password",type:"password",onChange:c.handleChange,value:c.values.password}),Object(l.jsx)(p,{labelText:"Remember Me",id:"rememberMe",name:"rememberMe",type:"checkbox",onChange:c.handleChange,value:c.values.rememberMe}),Object(l.jsx)(O,{buttonClass:"form__button",text:"Submit"}),r?Object(l.jsx)(q,{image:r,onChange:c.handleChange,value:c.values.captcha}):null,Object.keys(c.errors).length>0?Object(l.jsx)("div",{className:"error",children:"Fill in All the Fields"}):null,n?Object(l.jsx)("div",{className:"error",children:n}):null]})},Z="SET_PROFILE",$="CLEAR_PROFILE",ee="SET_PROFILE_PHOTO",te="SET_STATUS",ne={profileData:null,status:""},re=function(e){return{type:Z,data:e}},ce=function(){return{type:$}},ae=function(e){return{type:te,status:e}},oe=function(e){return function(t){L(!0),w(e).then((function(e){t(re(e))}),(function(e){return alert("Rejected: "+e.message)})),L(!1)}},se=function(e){return function(t){L(!0),R(e).then((function(e){var n;0===e.resultCode?t((n=e.data.photos,{type:ee,photo:n})):1===e.resultCode&&t(U(e.messages))}),(function(e){return alert("Rejected: "+e.message)})),L(!1)}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(g.a)(Object(g.a)({},e),{},{profileData:t.data});case $:return Object(g.a)(Object(g.a)({},e),{},{profileData:null});case ee:return Object(g.a)(Object(g.a)({},e),{},{profileData:Object(g.a)(Object(g.a)({},e.profileData),{},{photos:t.photo})});case te:return Object(g.a)(Object(g.a)({},e),{},{status:t.status});default:return e}},ie=n.p+"static/media/preloader.8a9edbd3.svg",le=function(){return Object(l.jsx)("div",{className:"preloader",children:Object(l.jsx)("img",{src:ie,alt:"preloader"})})},je=n.p+"static/media/user.5cfa6a8b.jpg",be=n(58),de=n.n(be),he=n(96),fe=n(100),Oe=function(){var e=Object(i.b)(),t=Object(r.useCallback)((function(t){e(se(t[0]))}),[]),n=Object(fe.a)({onDrop:t,noDrag:!0,multiple:!1,accept:"image/jpeg, image/png",getFilesFromEvent:function(e){return function(e){return o.apply(this,arguments)}(e)}}),c=n.getRootProps,a=n.getInputProps;function o(){return(o=Object(he.a)(de.a.mark((function e(t){var n,r,c;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],r=t.dataTransfer?t.dataTransfer.files:t.target.files,c=0;c<r.length;c++)n.push(r.item(c));return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsx)("section",{className:"photo-upload",children:Object(l.jsxs)("div",Object(g.a)(Object(g.a)({},c({className:"photo-upload__dropzone dropzone"})),{},{children:[Object(l.jsx)("input",Object(g.a)({},a())),Object(l.jsx)("p",{className:"photo-upload__text",children:"Change your Photo"})]}))})},pe=n(22),ge=function(e){var t=e.statusTitle,n=Object(r.useState)(!1),c=Object(pe.a)(n,2),a=c[0],o=c[1],s=Object(i.b)(),u=Object(i.c)((function(e){return e.profile.status})),j=Object(i.c)((function(e){return e.profile.profileData.userId})),b=Object(r.useState)(u),d=Object(pe.a)(b,2),h=d[0],f=d[1];Object(r.useEffect)((function(){s(function(e){return function(t){L(!0),E(e).then((function(e){200===e.status?t(ae(e.data)):t(U("error: "+e.status))}),(function(e){return alert("Rejected: "+e.message)})),L(!1)}}(j)),f(u)}),[u]);var g=function(e){s(function(e){return function(t){L(!0),D(e).then((function(n){0===n.resultCode?t(ae(e)):1===n.resultCode&&t(U(n.messages))}),(function(e){return alert("Rejected: "+e.message)})),L(!1)}}(e)),o(!1)};return Object(l.jsx)("div",{className:"status",children:a?Object(l.jsxs)("div",{children:[Object(l.jsx)(p,{id:"status",name:"status",autoFocus:!0,type:"text",value:h,onChange:function(e){return function(e){e.stopPropagation(),f(e.currentTarget.value)}(e)}}),Object(l.jsxs)("div",{className:"status__buttons",children:[Object(l.jsx)(O,{className:"status__button",color:"green",text:"Save",type:"button",onClick:function(){return g(h)}}),Object(l.jsx)(O,{className:"status__button",color:"red",text:"Cancel",type:"button",onClick:function(){return o(!1),void f(u)}})]})]}):Object(l.jsx)("p",{onClick:function(){return o(!0)},className:"status__title",children:u||t})})},me=function(e){var t=e.profile,n=e.userId,r=e.location,c=function(e){return e.replace("https://","").replace("http://","")};return Object(l.jsxs)("div",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__uploader",children:[n===t.userId&&"/settings"===r&&Object(l.jsx)(Oe,{}),Object(l.jsx)("img",{className:"profile__img",src:t.photos.large?t.photos.large:je,alt:""})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"profile__name",children:t.fullName}),n===t.userId&&"/settings"===r&&Object(l.jsx)(ge,{statusTitle:"Click to change status"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("p",{children:["User ID: ",t.userId]}),t.aboutMe?Object(l.jsxs)("p",{children:["About me: ",t.aboutMe]}):null,t.contacts.facebook?Object(l.jsxs)("p",{children:["Facebook: ",Object(l.jsx)("a",{href:"https://"+c(t.contacts.facebook),target:"_blank",rel:"nofollow noopener",children:t.contacts.facebook})]}):null,t.contacts.website?Object(l.jsxs)("p",{children:["Website: ",Object(l.jsx)("a",{href:"https://"+c(t.contacts.website),target:"_blank",rel:"nofollow noopener",children:t.contacts.website})]}):null,t.contacts.vk?Object(l.jsxs)("p",{children:["Vk: ",Object(l.jsx)("a",{href:"https://"+c(t.contacts.vk),target:"_blank",rel:"nofollow noopener",children:t.contacts.vk})]}):null,t.contacts.twitter?Object(l.jsxs)("p",{children:["Twitter: ",Object(l.jsx)("a",{href:"https://"+c(t.contacts.twitter),target:"_blank",rel:"nofollow noopener",children:t.contacts.twitter})]}):null,t.contacts.instagram?Object(l.jsxs)("p",{children:["Instagram: ",Object(l.jsx)("a",{href:"https://"+c(t.contacts.instagram),target:"_blank",rel:"nofollow noopener",children:t.contacts.instagram})]}):null,t.contacts.youtube?Object(l.jsxs)("p",{children:["Youtube: ",Object(l.jsx)("a",{href:"https://"+c(t.contacts.youtube),target:"_blank",rel:"nofollow noopener",children:t.contacts.youtube})]}):null,t.contacts.github?Object(l.jsxs)("p",{children:["Github: ",Object(l.jsx)("a",{href:"https://"+c(t.contacts.github),target:"_blank",rel:"nofollow noopener",children:t.contacts.github})]}):null,t.contacts.mainLink?Object(l.jsxs)("p",{children:["Main link: ",Object(l.jsx)("a",{href:"https://"+c(t.contacts.mainLink),target:"_blank",rel:"nofollow noopener",children:t.contacts.mainLink})]}):null,Object(l.jsxs)("p",{children:["Looking for a job: ",t.lookingForAJob?"Yes":"No"]}),t.lookingForAJobDescription?Object(l.jsxs)("p",{children:["Looking for a job description: ",t.lookingForAJobDescription]}):null]})]})},Ae=function(e){return function(t){var n=Object(i.c)((function(e){return e.auth.isAuth})),r=Object(i.c)((function(e){return e.auth.isFetching}));return n||r?Object(l.jsx)(e,Object(g.a)({},t)):Object(l.jsx)(s.a,{to:"/signin"})}},xe=Ae((function(e){var t=Object(i.b)(),n=Object(i.c)((function(e){return e.auth.user})),c=Object(i.c)((function(e){return e.auth.isFetching})),a=Object(i.c)((function(e){return e.profile.profileData})),o=Object(i.c)((function(e){return e.auth.errorMessage}));return Object(r.useEffect)((function(){return c||t(oe(n.id)),function(){return t(ce())}}),[c]),Object(r.useEffect)((function(){return function(){return t(B())}}),[B]),a&&!c?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"settings",children:[Object(l.jsx)(me,{profile:a,userId:n.id,location:e.location.pathname}),Object(l.jsxs)("div",{className:"settings__buttons-block",children:[Object(l.jsx)(u.b,{className:"settings__button button button--green",to:"/edit-profile",children:"Edit profile"}),Object(l.jsx)(O,{className:"settings__button",type:"button",onClick:function(){return t(z())},text:"Log out",color:"red"})]}),o?Object(l.jsx)("div",{className:"error",children:o}):null]})}):Object(l.jsx)(le,{})})),ve="SET_USERS",ke="SET_TOTAL_COUNT",Ce="SET_CURRENT_PAGE",Ne="FOLLOW",Fe="UNFOLLOW",we={usersArr:[],currentPage:null,totalCount:null,pageSize:10},ye=function(e){return{type:Ce,currentPage:e}},Ee=function(e,t){return function(n){n(L(!0)),k(e,t).then((function(e){var t,r;n((t=e.totalCount,{type:ke,totalCount:t})),n((r=e.items,{type:ve,users:r})),n(L(!1))}),(function(e){return alert("Rejected: "+e.message)}))}},De=function(e){return function(t){C(e).then((function(){t(function(e){return{type:Ne,userId:e}}(e))}),(function(e){return alert("Rejected: "+e.message)}))}},Re=function(e){return function(t){N(e).then((function(){t(function(e){return{type:Fe,userId:e}}(e))}),(function(e){return alert("Rejected: "+e.message)}))}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Object(g.a)(Object(g.a)({},e),{},{usersArr:t.users});case ke:return Object(g.a)(Object(g.a)({},e),{},{totalCount:t.totalCount});case Ce:return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case Ne:return Object(g.a)(Object(g.a)({},e),{},{usersArr:e.usersArr.map((function(e){return e.id===t.userId?Object(g.a)(Object(g.a)({},e),{},{followed:!0}):e}))});case Fe:return Object(g.a)(Object(g.a)({},e),{},{usersArr:e.usersArr.map((function(e){return e.id===t.userId?Object(g.a)(Object(g.a)({},e),{},{followed:!1}):e}))});default:return e}},Pe=function(e){var t=e.user,n=Object(i.b)(),r=t.photos.small;return Object(l.jsxs)("div",{className:"user",children:[Object(l.jsx)("div",{className:"user__img-block",children:Object(l.jsx)(u.b,{to:"/profile/".concat(t.id),children:Object(l.jsx)("img",{className:"user__img",src:r||"data:image/jpeg;base64,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",alt:""})})}),Object(l.jsxs)("div",{className:"user__info",children:[Object(l.jsx)(u.b,{className:"user__link",to:"/profile/".concat(t.id),children:Object(l.jsx)("p",{className:"user__name",children:t.name})}),Object(l.jsxs)("p",{className:"user__id",children:["User ID: ",t.id]}),Object(l.jsxs)("p",{className:"user__status",children:["Status: ",t.status]}),t.followed?Object(l.jsx)(O,{color:"red",type:"button",onClick:function(){return n(Re(t.id))},text:"Unfollow"}):Object(l.jsx)(O,{color:"green",type:"button",onClick:function(){return n(De(t.id))},text:"Follow"})]})]})},_e=n(98),Se=n.n(_e),Te=function(e){var t=Object(i.b)(),n=Object(i.c)((function(e){return e.users.currentPage})),c=Object(i.c)((function(e){return e.users.totalCount})),a=Object(i.c)((function(e){return e.users.pageSize})),o=Object(i.c)((function(e){return e.users.usersArr})),u=Object(i.c)((function(e){return e.auth.user})),j=Object(i.c)((function(e){return e.auth.isFetching}));Object(r.useEffect)((function(){return e.match.params.num?t(Ee(a,e.match.params.num)):t(Ee(a,n)),t(ye(null))}),[a,n]);var b=Object(s.g)(),d=Math.ceil(c/a);return Object(l.jsxs)(l.Fragment,{children:[j?Object(l.jsx)(le,{}):null,Object(l.jsx)(Se.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:d,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var n=e.selected+1;if(0===e.selected)return t(ye(n)),b.push("/");t(ye(n)),b.push("/page/".concat(n))},containerClassName:"pagination",activeClassName:"active",hrefBuilder:function(e){return"/page/".concat(e)},forcePage:e.match.params.num?Number(e.match.params.num)-1:0}),o.map((function(e){return Object(l.jsx)(Pe,{user:e,userId:u},e.id)}))]})},Me=function(e){var t,n=Object(i.b)(),c=Object(i.c)((function(e){return e.auth.isFetching})),a=Object(i.c)((function(e){return e.profile.profileData})),o=Object(i.c)((function(e){return e.auth.user}));return Object(r.useEffect)((function(){return!c&&e.match.params.userId&&n(oe(e.match.params.userId)),function(){return n(ce())}}),[c]),t=e.match.params.userId?e.match.params.userId:o.id,a&&!c?Object(l.jsx)(me,{profile:a,userId:t,location:e.history.location.pathname}):Object(l.jsx)(le,{})},He=d.b().shape({aboutMe:d.c().required("Required"),facebook:d.c().url(),website:d.c().url(),vk:d.c().url(),twitter:d.c().url(),instagram:d.c().url(),youtube:d.c().url(),github:d.c().url(),mainLink:d.c().url(),lookingForAJob:d.a(),lookingForAJobDescription:d.c().required("Required")}),Qe=function(e){var t=e.profile,n=Object(i.b)(),c=Object(i.c)((function(e){return e.auth.user})),a=Object(i.c)((function(e){return e.auth.errorMessage})),o=Object(i.c)((function(e){return e.auth.redirect})),u=Object(s.g)();Object(r.useEffect)((function(){return function(){return n(B())}}),[B]);var j=Object(b.a)({initialValues:{aboutMe:t.aboutMe,contacts:{facebook:t.contacts.facebook,website:t.contacts.website,vk:t.contacts.vk,twitter:t.contacts.twitter,instagram:t.contacts.instagram,youtube:t.contacts.youtube,github:t.contacts.github,mainLink:t.contacts.mainLink},lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription,fullName:c.login,userId:c.id,photos:{small:t.photos.small,large:t.photos.large}},validationSchema:He,validateOnChange:!1,onSubmit:function(e){var t;n((t=e,function(e){L(!0),y(t).then((function(n){0===n.resultCode?(e(re(t)),e(Y(!0))):1===n.resultCode&&e(U(n.messages))}),(function(e){return alert("Rejected: "+e.message)})),L(!1)}))}});return o&&(u.push("/settings"),n(Y(!1))),Object(l.jsxs)("form",{className:"form",onSubmit:j.handleSubmit,children:[Object(l.jsx)(p,{labelText:"About me",id:"aboutMe",name:"aboutMe",type:"text",onChange:j.handleChange,value:j.values.aboutMe}),Object.keys(j.values.contacts).map((function(e){return Object(l.jsx)(p,{labelText:e,id:e,name:"contacts."+e,type:"text",onChange:j.handleChange,value:j.values.contacts[e]},e)})),Object(l.jsx)(p,{labelText:"looking for a job",id:"lookingForAJob",name:"lookingForAJob",type:"checkbox",onChange:j.handleChange,value:j.values.lookingForAJob,checked:j.values.lookingForAJob}),Object(l.jsx)(p,{labelText:"looking for a job description",id:"lookingForAJobDescription",name:"lookingForAJobDescription",type:"text",onChange:j.handleChange,value:j.values.lookingForAJobDescription}),Object(l.jsx)(O,{buttonClass:"form__button",text:"Submit"}),Object.keys(j.errors).length>0?Object(l.jsx)("div",{className:"error",children:"Error"}):null,a?Object(l.jsx)("div",{className:"error",children:a}):null]})},Je=Ae((function(){var e=Object(i.c)((function(e){return e.auth.user})),t=Object(i.c)((function(e){return e.profile.profileData})),n=Object(i.c)((function(e){return e.auth.isFetching})),c=Object(i.b)();return Object(r.useEffect)((function(){n||c(oe(e.id))}),[n]),t&&e?Object(l.jsx)(Qe,{profile:t}):Object(l.jsx)(le,{})}));var Ue=function(){var e=Object(s.h)();return function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth.isAuth}));Object(r.useEffect)((function(){t||e(K())}),[t])}(),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{location:e}),Object(l.jsx)("div",{className:"container container--small",children:Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{path:"/signin",component:V}),Object(l.jsx)(s.b,{path:"/settings",component:xe,location:e}),Object(l.jsx)(s.b,{path:"/page/:num",component:Te}),Object(l.jsx)(s.b,{path:"/profile/:userId",component:Me}),Object(l.jsx)(s.b,{path:"/edit-profile",component:Je}),Object(l.jsx)(s.b,{exact:!0,path:"/",component:Te})]})})]})},Be=n(30),Le=n(99),Ye=Object(Be.b)({auth:X,users:Ie,profile:ue}),Ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Be.c,We=Object(Be.d)(Ye,Ke(Object(Be.a)(Le.a))),ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,229)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(i.a,{store:We,children:Object(l.jsx)(u.a,{children:Object(l.jsx)(Ue,{})})})}),document.getElementById("root")),ze()}},[[228,1,2]]]);
//# sourceMappingURL=main.0e067513.chunk.js.map