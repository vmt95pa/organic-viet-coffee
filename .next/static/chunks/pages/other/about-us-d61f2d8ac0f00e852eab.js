_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{"2W6z":function(e,t,n){"use strict";var a=function(){};e.exports=a},"3DfF":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n("q1tI"),r=n.n(a),i=n("IFAr"),o=n("Y6Li"),s=n("45lk"),u=(n("qDg5"),n("BMrR")),c=n("kPKH"),l=n("bJ4p"),m=r.a.createElement;function p(e){e.activeHeaderCollapse;return m("div",{className:"header-function-menu-one"},m(s.a,null,m("div",{className:"function-menu-wrapper"},m(u.a,{gutter:30},m(c.a,{xs:{span:24,order:1},md:{span:16,order:2},lg:18},m(l.a,null))))))}var d=r.a.memo(p),f=r.a.createElement;function b(e){var t=e.activeHeaderCollapse;return f(r.a.Fragment,null,f(i.a,null),f(o.a,null),f(d,{activeHeaderCollapse:t}))}},GiOn:function(e,t,n){var a,r;void 0===(r="function"===typeof(a=function(e,t,n){return function(e,t,n,a,r,i){function o(e){var t,n,a,r,i,o,s=e<0;if(e=Math.abs(e).toFixed(c.decimals),n=(t=(e+="").split("."))[0],a=t.length>1?c.options.decimal+t[1]:"",c.options.useGrouping){for(r="",i=0,o=n.length;i<o;++i)0!==i&&i%3===0&&(r=c.options.separator+r),r=n[o-i-1]+r;n=r}return c.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]})),a=a.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]}))),(s?"-":"")+c.options.prefix+n+a+c.options.suffix}function s(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t}function u(e){return"number"==typeof e&&!isNaN(e)}var c=this;if(c.version=function(){return"1.9.3"},c.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var l in c.options)i.hasOwnProperty(l)&&null!==i[l]&&(c.options[l]=i[l]);""===c.options.separator?c.options.useGrouping=!1:c.options.separator=""+c.options.separator;for(var m=0,p=["webkit","moz","ms","o"],d=0;d<p.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[p[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[p[d]+"CancelAnimationFrame"]||window[p[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-m)),r=window.setTimeout((function(){e(n+a)}),a);return m=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),c.initialize=function(){return!!c.initialized||(c.error="",c.d="string"==typeof e?document.getElementById(e):e,c.d?(c.startVal=Number(t),c.endVal=Number(n),u(c.startVal)&&u(c.endVal)?(c.decimals=Math.max(0,a||0),c.dec=Math.pow(10,c.decimals),c.duration=1e3*Number(r)||2e3,c.countDown=c.startVal>c.endVal,c.frameVal=c.startVal,c.initialized=!0,!0):(c.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(c.error="[CountUp] target is null or undefined",!1))},c.printValue=function(e){var t=c.options.formattingFn(e);"INPUT"===c.d.tagName?this.d.value=t:"text"===c.d.tagName||"tspan"===c.d.tagName?this.d.textContent=t:this.d.innerHTML=t},c.count=function(e){c.startTime||(c.startTime=e),c.timestamp=e;var t=e-c.startTime;c.remaining=c.duration-t,c.options.useEasing?c.countDown?c.frameVal=c.startVal-c.options.easingFn(t,0,c.startVal-c.endVal,c.duration):c.frameVal=c.options.easingFn(t,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?c.frameVal=c.startVal-(c.startVal-c.endVal)*(t/c.duration):c.frameVal=c.startVal+(c.endVal-c.startVal)*(t/c.duration),c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),t<c.duration?c.rAF=requestAnimationFrame(c.count):c.callback&&c.callback()},c.start=function(e){c.initialize()&&(c.callback=e,c.rAF=requestAnimationFrame(c.count))},c.pauseResume=function(){c.paused?(c.paused=!1,delete c.startTime,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)):(c.paused=!0,cancelAnimationFrame(c.rAF))},c.reset=function(){c.paused=!1,delete c.startTime,c.initialized=!1,c.initialize()&&(cancelAnimationFrame(c.rAF),c.printValue(c.startVal))},c.update=function(e){if(c.initialize()){if(!u(e=Number(e)))return void(c.error="[CountUp] update() - new endVal is not a number: "+e);c.error="",e!==c.frameVal&&(cancelAnimationFrame(c.rAF),c.paused=!1,delete c.startTime,c.startVal=c.frameVal,c.endVal=e,c.countDown=c.startVal>c.endVal,c.rAF=requestAnimationFrame(c.count))}},c.initialize()&&c.printValue(c.startVal)}})?a.call(t,n,t,e):a)||(e.exports=r)},HARd:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("TSYQ"),o=n.n(i),s=r.a.createElement;function u(e){var t=e.title,n=e.hideDecoration,a=e.className,r=e.style;return s("div",{className:"section-title ".concat(o()(a)),style:r},s("h2",null,t),!n&&s("div",{className:"section-title-decoration"}))}t.a=r.a.memo(u)},OkA7:function(e){e.exports=JSON.parse('{"one":[{"title":"Eat Healthier","description":"Modi tempora incidunt ut labore dolore magnam aliquam","iconSrc":"/assets/images/sections/dale-of-week/one/1.png"},{"title":"We Have Brands","description":"Modi tempora incidunt ut labore dolore magnam aliquam","iconSrc":"/assets/images/sections/dale-of-week/one/2.png"},{"title":"Fresh And Clean Products","description":"Modi tempora incidunt ut labore dolore magnam aliquam","iconSrc":"/assets/images/sections/dale-of-week/one/3.png"},{"title":"Modern Process","description":"Modi tempora incidunt ut labore dolore magnam aliquam","iconSrc":"/assets/images/sections/dale-of-week/one/4.png"}]}')},PHNs:function(e,t,n){"use strict";function a(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("17x9")),i=n("q1tI"),o=a(i),s=a(n("2W6z")),u=a(n("GiOn"));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?b(e):t}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(u){r=!0,i=u}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=function(e,t){var n=t.decimal,a=t.decimals,r=t.duration,i=t.easingFn,o=t.end,s=t.formattingFn,c=t.prefix,l=t.separator,m=t.start,p=t.suffix,d=t.useEasing;return new u(e,m,o,a,r,{decimal:n,easingFn:i,formattingFn:s,separator:l,prefix:c,suffix:p,useEasing:d,useGrouping:!!l})},h=function(e){function t(){var e,n;c(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return m(b(n=g(this,(e=d(t)).call.apply(e,[this].concat(r)))),"createInstance",(function(){return"function"===typeof n.props.children&&s(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),y(n.containerRef.current,n.props)})),m(b(n),"pauseResume",(function(){var e=b(n),t=e.reset,a=e.restart,r=e.update,i=n.props.onPauseResume;n.instance.pauseResume(),i({reset:t,start:a,update:r})})),m(b(n),"reset",(function(){var e=b(n),t=e.pauseResume,a=e.restart,r=e.update,i=n.props.onReset;n.instance.reset(),i({pauseResume:t,start:a,update:r})})),m(b(n),"restart",(function(){n.reset(),n.start()})),m(b(n),"start",(function(){var e=b(n),t=e.pauseResume,a=e.reset,r=e.restart,i=e.update,o=n.props,s=o.delay,u=o.onEnd,c=o.onStart,l=function(){return n.instance.start((function(){return u({pauseResume:t,reset:a,start:r,update:i})}))};s>0?n.timeoutId=setTimeout(l,1e3*s):l(),c({pauseResume:t,reset:a,update:i})})),m(b(n),"update",(function(e){var t=b(n),a=t.pauseResume,r=t.reset,i=t.restart,o=n.props.onUpdate;n.instance.update(e),o({pauseResume:a,reset:r,start:i})})),m(b(n),"containerRef",o.createRef()),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,i=t.prefix,o=t.redraw,s=t.duration,u=t.separator,c=t.decimals,l=t.decimal;return s!==e.duration||n!==e.end||a!==e.start||r!==e.suffix||i!==e.prefix||u!==e.separator||c!==e.decimals||l!==e.decimal||o}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,i=t.prefix,o=t.duration,s=t.separator,u=t.decimals,c=t.decimal,l=t.preserveValue;o===e.duration&&a===e.start&&r===e.suffix&&i===e.prefix&&s===e.separator&&u===e.decimals&&c===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(l||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=this.containerRef,i=this.pauseResume,s=this.reset,u=this.restart,c=this.update;return"function"===typeof t?t({countUpRef:r,pauseResume:i,reset:s,start:u,update:c}):o.createElement("span",{className:n,ref:r,style:a})}}])&&l(n.prototype,a),r&&l(n,r),t}(i.Component);m(h,"propTypes",{decimal:r.string,decimals:r.number,delay:r.number,easingFn:r.func,end:r.number.isRequired,formattingFn:r.func,onEnd:r.func,onStart:r.func,prefix:r.string,redraw:r.bool,separator:r.string,start:r.number,startOnMount:r.bool,suffix:r.string,style:r.object,useEasing:r.bool,preserveValue:r.bool}),m(h,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var w={innerHTML:null};t.default=h,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},h.defaultProps,{},e),n=t.start,a=t.formattingFn,r=v(i.useState("function"===typeof a?a(n):n),2),o=r[0],s=r[1],u=i.useRef(null),c=function(){var e=u.current;if(null!==e)return e;var n=function(){var e=y(w,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);s(e)},e}();return u.current=n,n},l=function(){var e=t.onReset;c().reset(),e({pauseResume:f,start:d,update:b})},d=function e(){var n=t.onStart,a=t.onEnd;c().reset(),c().start((function(){a({pauseResume:f,reset:l,start:e,update:b})})),n({pauseResume:f,reset:l,update:b})},f=function(){var e=t.onPauseResume;c().pauseResume(),e({reset:l,start:d,update:b})},b=function(e){var n=t.onUpdate;c().update(e),n({pauseResume:f,reset:l,start:d})};return i.useEffect((function(){var e=t.delay,n=t.onStart,a=t.onEnd;if(t.startOnMount)var r=setTimeout((function(){n({pauseResume:f,reset:l,update:b}),c().start((function(){clearTimeout(r),a({pauseResume:f,reset:l,start:d,update:b})}))}),1e3*e);return l}),[]),{countUp:o,start:d,pauseResume:f,reset:l,update:b}}},"S/uq":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("OS56"),o=n.n(i),s=(n("45lk"),r.a.createElement);function u(e){var t=e.style;return s("div",{className:"partner-one",style:t},s("div",{className:"partner-one-wrapper"},s(o.a,{arrows:!1,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:3}}]},Array.from(Array(8),(function(e,t){return s("div",{key:t,className:"slider-item"},s("a",{href:"#"},s("img",{src:""+"/assets/images/sections/partners/".concat(t+1,".png"),alt:"Partner logo"})))})))))}t.a=r.a.memo(u)},bE4q:function(e,t,n){"use strict";var a=n("pVnL"),r=n.n(a),i=n("lSNA"),o=n.n(i),s=n("RIqP"),u=n.n(s),c=n("q1tI"),l=n("TSYQ"),m=n.n(l),p=n("Zm9Q"),d=n("HQEm"),f=n.n(d),b=n("eDIo"),g=n("fEPi"),v=n.n(g),y=n("J4zp"),h=n.n(y),w=n("cCPh"),N=n.n(w),O=n("2/Rp"),x=n("H84U"),E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},R=O.a.Group,P=function(e){var t=c.useContext(x.b),n=t.getPopupContainer,a=t.getPrefixCls,i=t.direction,o=e.prefixCls,s=e.type,u=e.disabled,l=e.onClick,p=e.htmlType,d=e.children,f=e.className,b=e.overlay,g=e.trigger,v=e.align,y=e.visible,w=e.onVisibleChange,P=e.placement,V=e.getPopupContainer,j=e.href,C=e.icon,_=void 0===C?c.createElement(N.a,null):C,A=e.title,k=e.buttonsRender,F=E(e,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender"]),S=a("dropdown-button",o),q={align:v,overlay:b,disabled:u,trigger:u?[]:g,onVisibleChange:w,getPopupContainer:V||n};"visible"in e&&(q.visible=y),q.placement="placement"in e?P:"rtl"===i?"bottomLeft":"bottomRight";var I=k([c.createElement(O.a,{type:s,disabled:u,onClick:l,htmlType:p,href:j,title:A},d),c.createElement(O.a,{type:s,icon:_})]),M=h()(I,2),D=M[0],U=M[1];return c.createElement(R,r()({},F,{className:m()(S,f)}),D,c.createElement(T,q,U))};P.__ANT_BUTTON=!0,P.defaultProps={type:"default",buttonsRender:function(e){return e}};var V=P,j=n("uaoM"),C=n("CWQg"),_=n("0n0R"),A=(Object(C.a)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight"),function(e){var t,n=c.useContext(x.b),a=n.getPopupContainer,i=n.getPrefixCls,s=n.direction,u=e.arrow,l=e.prefixCls,p=e.children,d=e.trigger,f=e.disabled,g=e.getPopupContainer,y=e.overlayClassName,h=i("dropdown",l),w=c.Children.only(p),N=Object(_.a)(w,{className:m()("".concat(h,"-trigger"),o()({},"".concat(h,"-rtl"),"rtl"===s),w.props.className),disabled:f}),O=m()(y,o()({},"".concat(h,"-rtl"),"rtl"===s)),E=f?[]:d;return E&&-1!==E.indexOf("contextMenu")&&(t=!0),c.createElement(b.a,r()({arrow:u,alignPoint:t},e,{overlayClassName:O,prefixCls:h,getPopupContainer:g||a,transitionName:function(){var t=e.placement,n=void 0===t?"":t,a=e.transitionName;return void 0!==a?a:n.indexOf("top")>=0?"slide-down":"slide-up"}(),trigger:E,overlay:function(){return function(t){var n,a=e.overlay;n="function"===typeof a?a():a;var r=(n=c.Children.only("string"===typeof n?c.createElement("span",null,n):n)).props;Object(j.a)(!r.mode||"vertical"===r.mode,"Dropdown",'mode="'.concat(r.mode,"\" is not supported for Dropdown's Menu."));var i=r.selectable,o=void 0!==i&&i,s=r.focusable,u=void 0===s||s,l=c.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},c.createElement(v.a,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"===typeof n.type?n:Object(_.a)(n,{mode:"vertical",selectable:o,focusable:u,expandIcon:l})}(h)},placement:function(){var t=e.placement;return void 0!==t?t:"rtl"===s?"bottomRight":"bottomLeft"}()}),N)});A.Button=V,A.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var T=A,k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},F=function(e){var t,n,a=e.prefixCls,i=e.separator,o=void 0===i?"/":i,s=e.children,u=e.overlay,l=e.dropdownProps,m=k(e,["prefixCls","separator","children","overlay","dropdownProps"]),p=(0,c.useContext(x.b).getPrefixCls)("breadcrumb",a);return t="href"in m?c.createElement("a",r()({className:"".concat(p,"-link")},m),s):c.createElement("span",r()({className:"".concat(p,"-link")},m),s),n=t,t=u?c.createElement(T,r()({overlay:u,placement:"bottomCenter"},l),c.createElement("span",{className:"".concat(p,"-overlay-link")},n,c.createElement(f.a,null))):n,s?c.createElement("span",null,t,o&&""!==o&&c.createElement("span",{className:"".concat(p,"-separator")},o)):null};F.__ANT_BREADCRUMB_ITEM=!0;var S=F,q=function(e){var t=e.children,n=(0,c.useContext(x.b).getPrefixCls)("breadcrumb");return c.createElement("span",{className:"".concat(n,"-separator")},t||"/")};q.__ANT_BREADCRUMB_SEPARATOR=!0;var I=q,M=n("BvKs"),D=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function U(e,t,n,a){var r=n.indexOf(e)===n.length-1,i=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return r?c.createElement("span",null,i):c.createElement("a",{href:"#/".concat(a.join("/"))},i)}var H=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},B=function(e){var t,n=e.prefixCls,a=e.separator,i=void 0===a?"/":a,s=e.style,l=e.className,d=e.routes,f=e.children,b=e.itemRender,g=void 0===b?U:b,v=e.params,y=void 0===v?{}:v,h=D(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),w=c.useContext(x.b),N=w.getPrefixCls,O=w.direction,E=N("breadcrumb",n);if(d&&d.length>0){var R=[];t=d.map((function(e){var t,n=H(e.path,y);return n&&R.push(n),e.children&&e.children.length&&(t=c.createElement(M.a,null,e.children.map((function(e){return c.createElement(M.a.Item,{key:e.path||e.breadcrumbName},g(e,y,d,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,a=u()(e),r=H(t,n);return r&&a.push(r),a}(R,e.path,y)))})))),c.createElement(S,{overlay:t,separator:i,key:n||e.breadcrumbName},g(e,y,d,R))}))}else f&&(t=Object(p.a)(f).map((function(e,t){return e?(Object(j.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(_.a)(e,{separator:i,key:t})):e})));var P=m()(E,o()({},"".concat(E,"-rtl"),"rtl"===O),l);return c.createElement("div",r()({className:P,style:s},h),t)};B.Item=S,B.Separator=I;var z=B;t.a=z},kckt:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("8Kt/"),o=n.n(i),s=n("3LgI"),u=n("3DfF"),c=n("Dq34"),l=n("E9In"),m=r.a.createElement,p=Object(l.a)(u.a);function d(e){var t=e.title,n=e.children,a=e.headerClass,i=e.footerClass;return m(r.a.Fragment,null,m(o.a,null,m("title",null,t)),m(p,{className:a}),n,m(c.a,{className:i}),m(s.a,null))}t.a=r.a.memo(d)},scy9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/other/about-us",function(){return n("sjzJ")}])},sjzJ:function(e,t,n){"use strict";n.r(t);var a=n("bE4q"),r=n("BMrR"),i=n("kPKH"),o=n("2/Rp"),s=n("q1tI"),u=n.n(s),c=n("PHNs"),l=n.n(c),m=n("kckt"),p=n("45lk"),d=n("HARd"),f=u.a.createElement,b=function(e){var t=e.data;return f("div",{className:"introduction-five"},f(p.a,null,f(r.a,{align:"middle",gutter:40},f(i.a,{xs:0,sm:12,md:8},f("div",{className:"introduction-five-image"},f("img",{src:"/assets/images/sections/introduction/five/1.png",alt:"Dale of the week icon"}))),f(i.a,{sm:12,md:16},f("div",{className:"introduction-five-benefits"},f(d.a,{title:"Why choose us",className:"-left"}),f(r.a,{gutter:[30,30]},t.map((function(e){return f(i.a,{md:12},f("div",{className:"introduction-five-benefits__item"},f("div",{className:"introduction-five-benefits__item-image"},f("img",{src:""+e.iconSrc,alt:"Dale of the week icon"})),f("div",{className:"introduction-five-benefits__item-content"},f("h5",null,e.title),f("p",null,e.description))))}))))))))},g=n("TniP"),v=u.a.createElement,y=[{name:"Katie Harrison",job:"Barber",image:"/assets/images/sections/introduction/six/1.png"},{name:"John Harrison",job:"Sercurity",image:"/assets/images/sections/introduction/six/2.png"},{name:"Katie Perry",job:"Worker",image:"/assets/images/sections/introduction/six/3.png"},{name:"Max Rashford",job:"Barber",image:"/assets/images/sections/introduction/six/1.png"}],h=function(){return v("div",{className:"introduction-six"},v(p.a,null,v(d.a,{title:"We are farmer",className:"-center"}),v("div",{className:"introduction-six-content"},v(r.a,{gutter:[30,30]},y.map((function(e){return v(i.a,{xs:12,sm:12,md:6},v("div",{className:"introduction-six-content__item",style:{backgroundImage:"url('".concat(e.image,"')")}},v("main",null,v("h3",null,e.name),v("h5",null,e.job),v(g.a,{className:"-white"}))))}))))))},w=n("S/uq"),N=n("OkA7"),O=n("tXed"),x=u.a.createElement;function E(){return x(m.a,{title:"About us"},x(p.a,null,x(a.a,{separator:">"},x(a.a.Item,null,x("i",{className:"fas fa-home"}),"Home"),x(a.a.Item,null,"About us"))),x("div",{className:"about"},x(p.a,null,x("div",{className:"about-story"},x(r.a,{gutter:40},x(i.a,{xs:24,sm:12},x("div",{className:"about-story__content"},x(d.a,{title:"The Story About Us",className:"-left"}),x("p",null,'Tyna Giang\'s integrated agro-forestry farming model is the first project in Vietnam to achieve the highest ranking in the "100 projects to combat climate change" by the Ministry of Environment, Energy and Sea. France organized in 2016 ...'),x("p",null,"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Neque porro quisquam est, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"))),x(i.a,{xs:24,sm:12},x("div",{className:"about-story__video"},x("img",{src:"/assets/images/pages/contact/video.png",alt:"introduction image"}),x(o.a,{type:"primary",shape:"circle",icon:x("i",{className:"fas fa-play"})}))))),x("div",{className:"about-statistical"},x(r.a,{gutter:[30,30]},O.statistical.map((function(e){return x(i.a,{xs:24,md:8},x("div",{className:"about-statistical__item"},x("div",{className:"about-statistical__item-icon"},x("img",{src:""+e.icon,alt:"Statistcal icon"})),x("div",{className:"about-statistical__item-data"},x(l.a,{start:0,end:e.number,delay:0},(function(t){var n=t.countUpRef;return x("div",{className:"about-statistical__item-data__countup"},e.prefix&&x("span",null,e.prefix),x("h3",{ref:n}),e.suffixes&&x("span",null,e.suffixes))})),x("p",null,e.object))))}))))),x("div",{className:"about-introduction"},x(b,{data:N.one}),x(h,null)),x(p.a,null,x(w.a,null))))}t.default=u.a.memo(E)},tXed:function(e){e.exports=JSON.parse('{"statistical":[{"number":100,"suffixes":"%","object":"Happy Client","icon":"/assets/images/pages/contact/ic-1.png"},{"number":142,"object":"Our Engineer","icon":"/assets/images/pages/contact/ic-2.png"},{"number":16,"prefix":"+","object":"Our Farm","icon":"/assets/images/pages/contact/ic-3.png"}]}')}},[["scy9",1,2,5,0,4,3,6,7,8]]]);