_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"3DfF":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=n("IFAr"),l=n("Y6Li");n("45lk"),n("qDg5"),n("BMrR"),n("kPKH"),n("bJ4p"),a.a.createElement;var c=a.a.createElement;function i(e){e.activeHeaderCollapse;return c(a.a.Fragment,null,c(o.a,null),c(l.a,null))}},"S/uq":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("OS56"),l=n.n(o),c=(n("45lk"),a.a.createElement);function i(e){var t=e.style;return c("div",{className:"partner-one",style:t},c("div",{className:"partner-one-wrapper"},c(l.a,{arrows:!1,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:3}}]},Array.from(Array(8),(function(e,t){return c("div",{key:t,className:"slider-item"},c("a",{href:"#"},c("img",{src:""+"/assets/images/sections/partners/".concat(t+1,".png"),alt:"Partner logo"})))})))))}t.a=a.a.memo(i)},WjV5:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return n("ydYx")}])},bE4q:function(e,t,n){"use strict";var r=n("pVnL"),a=n.n(r),o=n("lSNA"),l=n.n(o),c=n("RIqP"),i=n.n(c),s=n("q1tI"),u=n("TSYQ"),p=n.n(u),d=n("Zm9Q"),f=n("HQEm"),m=n.n(f),v=n("eDIo"),b=n("fEPi"),h=n.n(b),y=n("J4zp"),g=n.n(y),O=n("cCPh"),C=n.n(O),k=n("2/Rp"),x=n("H84U"),E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},P=k.a.Group,N=function(e){var t=s.useContext(x.b),n=t.getPopupContainer,r=t.getPrefixCls,o=t.direction,l=e.prefixCls,c=e.type,i=e.disabled,u=e.onClick,d=e.htmlType,f=e.children,m=e.className,v=e.overlay,b=e.trigger,h=e.align,y=e.visible,O=e.onVisibleChange,N=e.placement,j=e.getPopupContainer,w=e.href,S=e.icon,I=void 0===S?s.createElement(C.a,null):S,R=e.title,T=e.buttonsRender,V=E(e,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender"]),D=r("dropdown-button",l),B={align:h,overlay:v,disabled:i,trigger:i?[]:b,onVisibleChange:O,getPopupContainer:j||n};"visible"in e&&(B.visible=y),B.placement="placement"in e?N:"rtl"===o?"bottomLeft":"bottomRight";var A=T([s.createElement(k.a,{type:c,disabled:i,onClick:u,htmlType:d,href:w,title:R},f),s.createElement(k.a,{type:c,icon:I})]),q=g()(A,2),F=q[0],M=q[1];return s.createElement(P,a()({},V,{className:p()(D,m)}),F,s.createElement(_,B,M))};N.__ANT_BUTTON=!0,N.defaultProps={type:"default",buttonsRender:function(e){return e}};var j=N,w=n("uaoM"),S=n("CWQg"),I=n("0n0R"),R=(Object(S.a)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight"),function(e){var t,n=s.useContext(x.b),r=n.getPopupContainer,o=n.getPrefixCls,c=n.direction,i=e.arrow,u=e.prefixCls,d=e.children,f=e.trigger,m=e.disabled,b=e.getPopupContainer,y=e.overlayClassName,g=o("dropdown",u),O=s.Children.only(d),C=Object(I.a)(O,{className:p()("".concat(g,"-trigger"),l()({},"".concat(g,"-rtl"),"rtl"===c),O.props.className),disabled:m}),k=p()(y,l()({},"".concat(g,"-rtl"),"rtl"===c)),E=m?[]:f;return E&&-1!==E.indexOf("contextMenu")&&(t=!0),s.createElement(v.a,a()({arrow:i,alignPoint:t},e,{overlayClassName:k,prefixCls:g,getPopupContainer:b||r,transitionName:function(){var t=e.placement,n=void 0===t?"":t,r=e.transitionName;return void 0!==r?r:n.indexOf("top")>=0?"slide-down":"slide-up"}(),trigger:E,overlay:function(){return function(t){var n,r=e.overlay;n="function"===typeof r?r():r;var a=(n=s.Children.only("string"===typeof n?s.createElement("span",null,n):n)).props;Object(w.a)(!a.mode||"vertical"===a.mode,"Dropdown",'mode="'.concat(a.mode,"\" is not supported for Dropdown's Menu."));var o=a.selectable,l=void 0!==o&&o,c=a.focusable,i=void 0===c||c,u=s.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},s.createElement(h.a,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"===typeof n.type?n:Object(I.a)(n,{mode:"vertical",selectable:l,focusable:i,expandIcon:u})}(g)},placement:function(){var t=e.placement;return void 0!==t?t:"rtl"===c?"bottomRight":"bottomLeft"}()}),C)});R.Button=j,R.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var _=R,T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},V=function(e){var t,n,r=e.prefixCls,o=e.separator,l=void 0===o?"/":o,c=e.children,i=e.overlay,u=e.dropdownProps,p=T(e,["prefixCls","separator","children","overlay","dropdownProps"]),d=(0,s.useContext(x.b).getPrefixCls)("breadcrumb",r);return t="href"in p?s.createElement("a",a()({className:"".concat(d,"-link")},p),c):s.createElement("span",a()({className:"".concat(d,"-link")},p),c),n=t,t=i?s.createElement(_,a()({overlay:i,placement:"bottomCenter"},u),s.createElement("span",{className:"".concat(d,"-overlay-link")},n,s.createElement(m.a,null))):n,c?s.createElement("span",null,t,l&&""!==l&&s.createElement("span",{className:"".concat(d,"-separator")},l)):null};V.__ANT_BREADCRUMB_ITEM=!0;var D=V,B=function(e){var t=e.children,n=(0,s.useContext(x.b).getPrefixCls)("breadcrumb");return s.createElement("span",{className:"".concat(n,"-separator")},t||"/")};B.__ANT_BREADCRUMB_SEPARATOR=!0;var A=B,q=n("BvKs"),F=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function M(e,t,n,r){var a=n.indexOf(e)===n.length-1,o=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return a?s.createElement("span",null,o):s.createElement("a",{href:"#/".concat(r.join("/"))},o)}var L=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},U=function(e){var t,n=e.prefixCls,r=e.separator,o=void 0===r?"/":r,c=e.style,u=e.className,f=e.routes,m=e.children,v=e.itemRender,b=void 0===v?M:v,h=e.params,y=void 0===h?{}:h,g=F(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),O=s.useContext(x.b),C=O.getPrefixCls,k=O.direction,E=C("breadcrumb",n);if(f&&f.length>0){var P=[];t=f.map((function(e){var t,n=L(e.path,y);return n&&P.push(n),e.children&&e.children.length&&(t=s.createElement(q.a,null,e.children.map((function(e){return s.createElement(q.a.Item,{key:e.path||e.breadcrumbName},b(e,y,f,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=i()(e),a=L(t,n);return a&&r.push(a),r}(P,e.path,y)))})))),s.createElement(D,{overlay:t,separator:o,key:n||e.breadcrumbName},b(e,y,f,P))}))}else m&&(t=Object(d.a)(m).map((function(e,t){return e?(Object(w.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(I.a)(e,{separator:o,key:t})):e})));var N=p()(E,l()({},"".concat(E,"-rtl"),"rtl"===k),u);return s.createElement("div",a()({className:N,style:c},g),t)};U.Item=D,U.Separator=A;var Y=U;t.a=Y},kaz8:function(e,t,n){"use strict";var r=n("lSNA"),a=n.n(r),o=n("pVnL"),l=n.n(o),c=n("lwsE"),i=n.n(c),s=n("W8MJ"),u=n.n(s),p=n("PJYZ"),d=n.n(p),f=n("7W2i"),m=n.n(f),v=n("LQ03"),b=n.n(v),h=n("q1tI"),y=n("TSYQ"),g=n.n(y),O=n("x1Ya"),C=n("RIqP"),k=n.n(C),x=n("BGR+"),E=n("H84U"),P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},N=h.createContext(null),j=function(e){m()(n,e);var t=b()(n);function n(e){var r;return i()(this,n),(r=t.call(this,e)).cancelValue=function(e){r.setState((function(t){return{registeredValues:t.registeredValues.filter((function(t){return t!==e}))}}))},r.registerValue=function(e){r.setState((function(t){var n=t.registeredValues;return{registeredValues:[].concat(k()(n),[e])}}))},r.toggleOption=function(e){var t=r.state.registeredValues,n=r.state.value.indexOf(e.value),a=k()(r.state.value);-1===n?a.push(e.value):a.splice(n,1),"value"in r.props||r.setState({value:a});var o=r.props.onChange;if(o){var l=r.getOptions();o(a.filter((function(e){return-1!==t.indexOf(e)})).sort((function(e,t){return l.findIndex((function(t){return t.value===e}))-l.findIndex((function(e){return e.value===t}))})))}},r.renderGroup=function(e){var t=e.getPrefixCls,n=e.direction,o=d()(r),c=o.props,i=o.state,s=c.prefixCls,u=c.className,p=c.style,f=c.options,m=P(c,["prefixCls","className","style","options"]),v=t("checkbox",s),b="".concat(v,"-group"),y=Object(x.a)(m,["children","defaultValue","value","onChange","disabled"]),O=c.children;f&&f.length>0&&(O=r.getOptions().map((function(e){return h.createElement(_,{prefixCls:v,key:e.value.toString(),disabled:"disabled"in e?e.disabled:c.disabled,value:e.value,checked:-1!==i.value.indexOf(e.value),onChange:e.onChange,className:"".concat(b,"-item"),style:e.style},e.label)})));var C={toggleOption:r.toggleOption,value:r.state.value,disabled:r.props.disabled,name:r.props.name,registerValue:r.registerValue,cancelValue:r.cancelValue},k=g()(b,a()({},"".concat(b,"-rtl"),"rtl"===n),u);return h.createElement("div",l()({className:k,style:p},y),h.createElement(N.Provider,{value:C},O))},r.state={value:e.value||e.defaultValue||[],registeredValues:[]},r}return u()(n,[{key:"getOptions",value:function(){return this.props.options.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))}},{key:"render",value:function(){return h.createElement(E.a,null,this.renderGroup)}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value||[]}:null}}]),n}(h.PureComponent);j.defaultProps={options:[]};var w=j,S=n("uaoM"),I=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},R=function(e){m()(n,e);var t=b()(n);function n(){var e;return i()(this,n),(e=t.apply(this,arguments)).saveCheckbox=function(t){e.rcCheckbox=t},e.renderCheckbox=function(t){var n,r=t.getPrefixCls,o=t.direction,c=d()(e),i=c.props,s=c.context,u=i.prefixCls,p=i.className,f=i.children,m=i.indeterminate,v=i.style,b=i.onMouseEnter,y=i.onMouseLeave,C=I(i,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave"]),k=s,x=r("checkbox",u),E=l()({},C);k&&(E.onChange=function(){C.onChange&&C.onChange.apply(C,arguments),k.toggleOption({label:f,value:i.value})},E.name=k.name,E.checked=-1!==k.value.indexOf(i.value),E.disabled=i.disabled||k.disabled);var P=g()((n={},a()(n,"".concat(x,"-wrapper"),!0),a()(n,"".concat(x,"-rtl"),"rtl"===o),a()(n,"".concat(x,"-wrapper-checked"),E.checked),a()(n,"".concat(x,"-wrapper-disabled"),E.disabled),n),p),N=g()(a()({},"".concat(x,"-indeterminate"),m));return h.createElement("label",{className:P,style:v,onMouseEnter:b,onMouseLeave:y},h.createElement(O.a,l()({},E,{prefixCls:x,className:N,ref:e.saveCheckbox})),void 0!==f&&h.createElement("span",null,f))},e}return u()(n,[{key:"componentDidMount",value:function(){var e,t=this.props.value;null===(e=this.context)||void 0===e||e.registerValue(t),Object(S.a)("checked"in this.props||this.context||!("value"in this.props),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}},{key:"componentDidUpdate",value:function(e){var t,n,r=e.value,a=this.props.value;a!==r&&(null===(t=this.context)||void 0===t||t.cancelValue(r),null===(n=this.context)||void 0===n||n.registerValue(a))}},{key:"componentWillUnmount",value:function(){var e,t=this.props.value;null===(e=this.context)||void 0===e||e.cancelValue(t)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){return h.createElement(E.a,null,this.renderCheckbox)}}]),n}(h.PureComponent);R.__ANT_CHECKBOX=!0,R.defaultProps={indeterminate:!1},R.contextType=N;var _=R;_.Group=w;t.a=_},kckt:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),l=n.n(o),c=n("3LgI"),i=n("3DfF"),s=n("Dq34"),u=n("E9In"),p=a.a.createElement,d=Object(u.a)(i.a);function f(e){var t=e.title,n=e.children,r=e.headerClass,o=e.footerClass;return p(a.a.Fragment,null,p(l.a,null,p("title",null,t)),p(d,{className:r}),n,p(s.a,{className:o}),p(c.a,null))}t.a=a.a.memo(f)},x1Ya:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("rePB"),l=n("1OyB"),c=n("vuIU"),i=n("Ji7U"),s=n("md7G"),u=n("foSv"),p=n("q1tI"),d=n.n(p),f=n("TSYQ"),m=n.n(f);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var a=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var y=function(e){Object(i.a)(n,e);var t=h(n);function n(e){var r;Object(l.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=r.props,n=t.disabled,a=t.onChange;n||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:b(b({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return Object(c.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,l=t.className,c=t.style,i=t.name,s=t.id,u=t.type,p=t.disabled,f=t.readOnly,v=t.tabIndex,b=t.onClick,h=t.onFocus,y=t.onBlur,g=t.autoFocus,O=t.value,C=t.required,k=Object(a.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value","required"]),x=Object.keys(k).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=k[t]),e}),{}),E=this.state.checked,P=m()(n,l,(e={},Object(o.a)(e,"".concat(n,"-checked"),E),Object(o.a)(e,"".concat(n,"-disabled"),p),e));return d.a.createElement("span",{className:P,style:c},d.a.createElement("input",Object(r.a)({name:i,id:s,type:u,required:C,readOnly:f,disabled:p,tabIndex:v,className:"".concat(n,"-input"),checked:!!E,onClick:b,onFocus:h,onBlur:y,onChange:this.handleChange,autoFocus:g,ref:this.saveInput,value:O},x)),d.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?b(b({},t),{},{checked:e.checked}):null}}]),n}(p.Component);y.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},t.a=y},ydYx:function(e,t,n){"use strict";n.r(t);var r=n("bE4q"),a=n("BMrR"),o=n("kPKH"),l=n("Vl3Y"),c=n("5rEg"),i=n("kaz8"),s=n("2/Rp"),u=n("YFqc"),p=n.n(u),d=n("q1tI"),f=n.n(d),m=n("kckt"),v=n("45lk"),b=n("S/uq"),h=f.a.createElement;t.default=function(){return h(m.a,{title:"Login"},h(v.a,null,h(r.a,{separator:">"},h(r.a.Item,null,h("i",{className:"fas fa-home"}),"Home"),h(r.a.Item,null,"Login")),h("div",{className:"auth"},h(a.a,null,h(o.a,{xs:24,md:{span:12,offset:6}},h("h2",null,"Login"),h("div",{className:"auth-form"},h(l.a,{layout:"vertical",name:"login",onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)}},h(l.a.Item,{label:"Username or email address",name:"username",rules:[{required:!0,message:"Please input your username!"}]},h(c.a,null)),h(l.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},h(c.a.Password,null)),h(l.a.Item,{className:"form-functions",name:"remember",valuePropName:"checked"},h(i.a,null,"Remember me"),h(s.a,{type:"link"},"Forget your password")),h(l.a.Item,{className:"form-submit"},h(s.a,{type:"primary",htmlType:"submit"},"Signin"),h(s.a,{type:"link"},h(p.a,{href:"/auth/register"},h("a",null,"OR CREATE AN ACCOUNT"))))))))),h(b.a,null)))}}},[["WjV5",1,2,5,0,4,3,6,7,8]]]);