_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"+RZP":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/blog-list-sidebar",function(){return t("UrLx")}])},"3DfF":function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var n=t("q1tI"),r=t.n(n),l=t("IFAr"),s=t("Y6Li"),c=t("45lk"),i=(t("qDg5"),t("BMrR")),o=t("kPKH"),u=t("bJ4p"),m=r.a.createElement;function g(e){e.activeHeaderCollapse;return m("div",{className:"header-function-menu-one"},m(c.a,null,m("div",{className:"function-menu-wrapper"},m(i.a,{gutter:30},m(o.a,{xs:{span:24,order:1},md:{span:16,order:2},lg:18},m(u.a,null))))))}var f=r.a.memo(g),d=r.a.createElement;function v(e){var a=e.activeHeaderCollapse;return d(r.a.Fragment,null,d(l.a,null),d(s.a,null),d(f,{activeHeaderCollapse:a}))}},"S/uq":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("OS56"),s=t.n(l),c=(t("45lk"),r.a.createElement);function i(e){var a=e.style;return c("div",{className:"partner-one",style:a},c("div",{className:"partner-one-wrapper"},c(s.a,{arrows:!1,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:3}}]},Array.from(Array(8),(function(e,a){return c("div",{key:a,className:"slider-item"},c("a",{href:"#"},c("img",{src:""+"/assets/images/sections/partners/".concat(a+1,".png"),alt:"Partner logo"})))})))))}a.a=r.a.memo(i)},UrLx:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("bE4q"),s=t("BMrR"),c=t("kPKH"),i=t("NUBc"),o=t("/MKj"),u=t("F0Hh"),m=t("kckt"),g=t("45lk"),f=t("N0nX"),d=t("9MPT"),v=t("Zuxe"),b=t("S/uq"),p=r.a.createElement;function N(){var e=Object(o.b)(),a=Object(n.useState)(1),t=a[0],r=a[1],N=Object(o.c)((function(e){return e.blogReducer})),y=Object(o.c)((function(e){return e.blogFilterReducer})),h=N.allPosts,k=N.recentPosts,w=y.category,E=y.tag;Object(n.useEffect)((function(){e(Object(u.c)({limit:4}))}),[]),Object(n.useEffect)((function(){e(Object(u.b)({limit:4,page:t,category:w,tag:E}))}),[t,y]);return p(m.a,{title:"Blog list with sidebar"},p(g.a,null,p(l.a,{separator:">"},p(l.a.Item,null,p("i",{className:"fas fa-home"}),"Trang ch\u1ee7"),p(l.a.Item,null,"Blog")),p("div",{className:"blog"},p(s.a,{gutter:30},p(c.a,{xs:24,lg:6},p(v.a,{recentPostsData:k})),p(c.a,{xs:24,lg:18},p("div",{className:"blog-content"},p(d.a,{data:h,renderData:function(e){return p(s.a,null,e.map((function(e,a){return p(c.a,{key:a,span:24},p(f.a,{type:"row",data:e}))})))}})),p(i.a,{onChange:function(e){r(e)},defaultCurrent:t,pageSize:4,total:h.count})))),p(b.a,null)))}a.default=r.a.memo(N)},Zuxe:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("TSYQ"),s=t.n(l),c=t("2/Rp"),i=t("/MKj"),o=t("yyPw"),u=t("9MPT"),m=t("N0nX"),g=r.a.createElement,f={categories:[{name:"C\xe2u chuy\u1ec7n OC",value:"story"},{name:"Khuy\u1ebfn m\xe3i",value:"sale"},{name:"Blog",value:"blog"},{name:"\u0110\u0103ng k\xfd \u0111\u1ea1i l\xfd",value:"register"}],tags:[{name:"T\u1ea5t c\u1ea3",value:""},{name:"story",value:"story"},{name:"sale",value:"sale"},{name:"blog",value:"blog"}]},d=function(e){var a=e.children,t=e.title,n=e.className;return g("div",{className:"blog-sidebar-section ".concat(s()(n))},g("div",{className:"blog-sidebar-section__header"},g("h5",null,t)),g("div",{className:"blog-sidebar-section__content"},a))};function v(e){var a=e.recentPostsData,t=Object(i.b)(),n=Object(i.c)((function(e){return e.blogFilterReducer})),r=n.category,l=n.tag,v=function(e,a){e.preventDefault(),t(function(e){return{type:o.b.SET_CATEGORY,category:e}}(a))},b=function(e){t(function(e){return{type:o.b.SET_TAG,tag:e}}(e))};return g("div",{className:"blog-sidebar"},g(d,{className:"-categories",title:"Danh m\u1ee5c"},g("ul",null,g("li",{className:s()({active:""===r})},g("a",{onClick:function(e){return v(e,"")},href:"#"},"Trang ch\u1ee7")),f.categories.map((function(e,a){return g("li",{className:s()({active:r===e.value}),key:a},g("a",{onClick:function(a){return v(a,e.value)},href:"#"},e.name))})))),g(d,{className:"-recent-post",title:"B\xe0i vi\u1ebft g\u1ea7n \u0111\xe2y"},g(u.a,{data:a,renderData:function(e){return e.map((function(e,a){return g(m.a,{key:a,type:"tiny",data:e})}))}})),g(d,{className:"-tags",title:"Popular tags"},f.tags.map((function(e,a){return g(c.a,{className:s()({active:l===e.value}),onClick:function(){return b(e.value)},key:a},e.name)}))))}a.a=r.a.memo(v)},kckt:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("8Kt/"),s=t.n(l),c=t("3LgI"),i=t("3DfF"),o=t("Dq34"),u=t("E9In"),m=r.a.createElement,g=Object(u.a)(i.a);function f(e){var a=e.title,t=e.children,n=e.headerClass,l=e.footerClass;return m(r.a.Fragment,null,m(s.a,null,m("title",null,a)),m(g,{className:n}),t,m(o.a,{className:l}),m(c.a,null))}a.a=r.a.memo(f)}},[["+RZP",1,2,5,0,4,3,6,7,8,9,14,15]]]);