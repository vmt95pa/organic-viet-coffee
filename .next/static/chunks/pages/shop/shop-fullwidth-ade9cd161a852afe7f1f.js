_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[49],{"08Fn":function(e,a,t){"use strict";var o=t("wx14"),n=t("BMrR"),s=t("kPKH"),i=t("q1tI"),r=t.n(i),l=t("TSYQ"),c=t.n(l),u=t("TpwS"),d=t("HARd"),m=t("9MPT"),g=r.a.createElement;function b(e){var a=e.style,t=e.productClassName,i=e.productCol,r=e.productType,l=e.data,b=e.headerTitle,p=e.headerClass,f=e.hideHeader,h=e.fiveCol,v=e.className,N=e.gutter,C=void 0===N?[{xs:0,md:15},{xs:0,md:15}]:N;return g("div",{className:"product-grid ".concat(c()(v)),style:a},!f&&g("div",{className:"product-grid-header ".concat(c()(p))},g(d.a,{title:b,hideDecoration:!0})),g("div",{className:"product-grid-content"},g(m.a,{data:l,renderData:function(e){return g(n.a,{gutter:C},e.map((function(e,a){return g(s.a,Object(o.a)({key:a},i,{className:c()({"five-col":h})}),g(u.a,{type:r,className:t,data:e}))})))}})))}a.a=r.a.memo(b)},"1AYr":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/shop-fullwidth",function(){return t("xMoG")}])},"3eQT":function(e,a,t){"use strict";var o=t("q1tI"),n=t.n(o),s=t("8Kt/"),i=t.n(s),r=t("3LgI"),l=t("I5tB"),c=t.n(l),u=t("E9In"),d=t("BMrR"),m=t("kPKH"),g=t("45lk"),b=(t("NmoQ"),t("5/rY")),p=t("GpYF"),f=t("juyQ"),h=n.a.createElement;function v(){return h("div",{className:"footer -fluid -style-one"},h("div",{className:"footer-top"},h(g.a,{fluid:!0},h(d.a,{gutter:15},h(m.a,{xs:24,md:9,lg:6},h(p.a,null)),h(m.a,{xs:24,md:15,lg:13},h(b.a,{colSize:{span:8}})),h(m.a,{lg:5},h("div",{className:"footer-subcribe"},h("div",{className:"footer-subcribe__content"},h("h5",null,"Join Our Newsletter Now"),h("p",null,"Get E-mail updates about our latest shop and special offers.")),h(f.a,{url:"https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e"})))))),h("div",{className:"footer-bottom"},h(g.a,{fluid:!0},h("div",{className:"footer-bottom__wrapper"},h("p",null,"Copyright \xa9 2019 Ogami - All Rights Reserved."),h("img",{src:"/assets/images/footer/payment.png",alt:"Payment methods"})))))}var N=n.a.memo(v),C=n.a.createElement,j=Object(u.a)(c.a);function k(e){var a=e.title,t=e.children;return C(n.a.Fragment,null,C(i.a,null,C("title",null,a)),C(j,null),t,C(N,null),C(r.a,null))}a.a=n.a.memo(k)},Fv34:function(e,a,t){"use strict";var o=t("q1tI"),n=t.n(o),s=t("/MKj"),i=t("TSYQ"),r=t.n(i),l=t("rAog"),c=t("PG6y"),u=t("2/Rp"),d=n.a.createElement,m={color:[{name:"\u0110en",colorCode:"#000",value:"black"},{name:"N\xe2u",colorCode:"#993300",value:"brown"},{name:"Xanh",colorCode:"#81D742",value:"green"},{name:"V\xe0ng",colorCode:"#eeee22",value:"yellow"}],size:[{name:"All size",value:""},{name:"XL",value:"xl"},{name:"L",value:"l"},{name:"M",value:"m"},{name:"S",value:"s"}],tags:[{name:"T\u1ea5t c\u1ea3",value:""},{name:"C\xe0 ph\xea th\u1ea3i \u0111\u1ed9c",value:"coffee"},{name:"C\xe0 ph\xea u\u1ed1ng",value:"organic-coffee"}]},g=function(e){var a=e.children,t=e.title,o=e.className;return d("div",{className:"shop-sidebar-section ".concat(r()(o))},d("div",{className:"shop-sidebar-section__header"},d("h5",null,t)),d("div",{className:"shop-sidebar-section__content"},a))};function b(e){var a=e.showShortcut,t=e.style,o=Object(s.b)(),i=Object(s.c)((function(e){return e.shopFilterReducer})),b=i.category,p=i.color,f=(i.size,i.tag),h=function(e,a){e.preventDefault(),o(Object(l.setCurrentCategory)(a))};return d("div",{style:t,className:"shop-sidebar"},d(g,{className:"-departments",title:"Danh m\u1ee5c"},d("ul",null,d("li",{className:r()({active:""===b})},d("a",{onClick:function(e){return h(e,"")},href:"#"},"T\u1ea5t c\u1ea3 s\u1ea3n ph\u1ea9m")),c.map((function(e,a){return d("li",{className:r()({active:b===e.value}),key:a},d("a",{onClick:function(a){return h(a,e.value)},href:"#"},e.name))})))),!a&&d(n.a.Fragment,null,d(g,{className:"-colors",title:"C\xe0 ph\xea ph\u1ed5 bi\u1ebfn"},d("ul",null,m.color.map((function(e,a){return d("li",{className:r()({active:p===e.value}),key:a},d("a",{onClick:function(a){return function(e,a){e.preventDefault(),o(Object(l.setCurrentColor)(a))}(a,e.value)},href:"#"},d("span",{style:{backgroundColor:e.colorCode}}),e.name))}))))),d(g,{className:"-tags",title:"Tags"},m.tags.map((function(e,a){return d(u.a,{className:r()({active:f===e.value}),onClick:function(){return a=e.value,void o(Object(l.setCurrentTag)(a));var a},key:a},e.name)}))))}a.a=n.a.memo(b)},I5tB:function(e,a){throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js):\nSyntaxError: C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\package.json: Error while parsing JSON - Unexpected string in JSON at position 1003\n    at JSON.parse (<anonymous>)\n    at C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\@babel\\core\\lib\\config\\files\\package.js:57:20\n    at C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\@babel\\core\\lib\\config\\files\\utils.js:29:12\n    at cachedFunction (C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\@babel\\core\\lib\\config\\caching.js:32:19)\n    at findPackageData (C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\@babel\\core\\lib\\config\\files\\package.js:33:11)\n    at buildRootChain (C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:105:85)\n    at loadPrivatePartialConfig (C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\@babel\\core\\lib\\config\\partial.js:85:55)\n    at Object.loadPartialConfig (C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\@babel\\core\\lib\\config\\partial.js:110:18)\n    at Object.customOptions (C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\next\\dist\\build\\webpack\\loaders\\next-babel-loader.js:4:1372)\n    at Object.<anonymous> (C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\next\\dist\\compiled\\babel-loader\\index.js:1:4466)")},nvaX:function(e,a,t){"use strict";var o=t("q1tI"),n=t.n(o),s=t("/MKj"),i=t("2fM7"),r=t("TSYQ"),l=t.n(r),c=t("rAog"),u=n.a.createElement,d=function(e){var a=e.title,t=(e.getViewPerPage,e.getCurrentSort,e.hideView),o=i.a.Option,n=Object(s.b)(),r=Object(s.c)((function(e){return e.shopFilterReducer})).view,d=function(e,a){e.preventDefault(),n(Object(c.setCurrentView)(a))};return u("div",{className:"shop-header"},u("h5",null,a),u("div",{className:"shop-header-selectors"},u(i.a,{defaultValue:"",style:{width:175},onChange:function(e){switch(e){case"az":return n(Object(c.setCurrentSort)({sort:"name",order:"asc"}));case"za":return n(Object(c.setCurrentSort)({sort:"name",order:"desc"}));case"lowHight":return n(Object(c.setCurrentSort)({sort:"price",order:"asc"}));case"highLow":return n(Object(c.setCurrentSort)({sort:"price",order:"desc"}));default:return n(Object(c.setCurrentSort)({}))}}},u(o,{value:""},"M\u1eb7c \u0111\u1ecbnh"),u(o,{value:"az"},"T\xean:A-Z"),u(o,{value:"za"},"T\xean:Z-A"),u(o,{value:"highLow"},"Gi\xe1: Th\u1ea5p \u0111\u1ebfn Cao"),u(o,{value:"lowHight"},"Gi\xe1: Cao \u0111\u1ebfn Th\u1ea5p")),u(i.a,{defaultValue:"10",style:{width:115},onChange:function(e){n(Object(c.setCurrentShow)(e))}},u(o,{value:"10"},"10"),u(o,{value:"15"},"15"),u(o,{value:"20"},"20"))),!t&&u("div",{className:"shop-header-view"},u("a",{onClick:function(e){return d(e,"grid")},className:l()({active:"grid"===r}),href:"#"},u("i",{className:"fas fa-th-large"})),u("a",{onClick:function(e){return d(e,"list")},className:l()({active:"list"===r}),href:"#"},u("i",{className:"fas fa-th-list"}))))};a.a=n.a.memo(d)},rAog:function(e,a){throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js):\nSyntaxError: C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\package.json: Error while parsing JSON - Unexpected string in JSON at position 1003\n    at JSON.parse (<anonymous>)\n    at C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\@babel\\core\\lib\\config\\files\\package.js:57:20\n    at C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\@babel\\core\\lib\\config\\files\\utils.js:29:12\n    at cachedFunction (C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\@babel\\core\\lib\\config\\caching.js:32:19)\n    at findPackageData (C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\@babel\\core\\lib\\config\\files\\package.js:33:11)\n    at buildRootChain (C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:105:85)\n    at loadPrivatePartialConfig (C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\@babel\\core\\lib\\config\\partial.js:85:55)\n    at Object.loadPartialConfig (C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\@babel\\core\\lib\\config\\partial.js:110:18)\n    at Object.customOptions (C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\next\\dist\\build\\webpack\\loaders\\next-babel-loader.js:4:1372)\n    at Object.<anonymous> (C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\node_modules\\next\\dist\\compiled\\babel-loader\\index.js:1:4466)")},xMoG:function(e,a,t){"use strict";t.r(a);var o=t("rePB"),n=t("q1tI"),s=t.n(n),i=t("/MKj"),r=t("bE4q"),l=t("BMrR"),c=t("kPKH"),u=t("NUBc"),d=t("nOHt"),m=t("Ot64"),g=t("3eQT"),b=t("45lk"),p=t("Fv34"),f=t("08Fn"),h=t("nvaX"),v=s.a.createElement;function N(){var e=Object(i.b)(),a=Object(d.useRouter)().query.q,t=Object(n.useState)(1),s=t[0],N=t[1],C=Object(i.c)((function(e){return e.shopReducer})),j=C.products,k=C.featuredProducts,D=Object(i.c)((function(e){return e.shopFilterReducer})),w=D.sort,O=D.show,_=D.view,y=D.category,M=D.color,x=D.size,I=D.tag;Object(n.useEffect)((function(){e(Object(m.c)({limit:4}))}),[]),Object(n.useEffect)((function(){var t;e(Object(m.e)((t={limit:O,category:null,page:s,q:a,sort:w,view:_},Object(o.a)(t,"category",y),Object(o.a)(t,"color",M),Object(o.a)(t,"size",x),Object(o.a)(t,"tag",I),t)))}),[D,s,a]);return v(g.a,{title:"Shop grid fullwidth"},v(b.a,{fluid:!0},v(r.a,{separator:">"},v(r.a.Item,null,v("i",{className:"fas fa-home"}),"Home"),v(r.a.Item,null,"Shop")),v("div",{className:"shop"},v("div",{className:"shop-content"},v(l.a,{gutter:30},v(c.a,{xs:24,lg:8,xl:4},v(p.a,{style:{marginTop:"0.625em"}})),v(c.a,{xs:24,lg:16,xl:20},v(h.a,{title:"Shop grid fullwidth",hideView:!0}),v(f.a,{data:j,hideHeader:!0,fiveCol:!0,productCol:{xs:12,sm:12,md:8,xl:6}}),j.count>0&&v(u.a,{onChange:function(e){N(e)},defaultCurrent:s,pageSize:O,total:j.count}),v(f.a,{style:{marginTop:"4.375rem"},data:k,headerTitle:"Featured Products",headerClass:"-small -underline",productType:"tiny",productCol:{xs:12,sm:12,xl:6},productClassName:"-bordered"})))))))}a.default=s.a.memo(N)}},[["1AYr",1,2,5,0,4,3,6,7,8,11,12,13,15,14,16,18]]]);