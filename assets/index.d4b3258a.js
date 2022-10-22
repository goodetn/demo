import{d as G,u as q,f as dt,a5 as vt,x as mt,l as tt,z as yt,F as nt,P as pt,c as p,ab as et,aM as ht,i as Tt,r as P,a as D,e as Ct,W as St,a6 as xt,a0 as gt,k as L,j as v,Z as kt,aE as wt,ag as At}from"./index.45d3e038.js";var H={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},J={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},B=[],M=[];function Nt(){var e=document.createElement("div"),t=e.style;"AnimationEvent"in window||(delete H.animationstart.animation,delete J.animationend.animation),"TransitionEvent"in window||(delete H.transitionstart.transition,delete J.transitionend.transition);function a(i,E){for(var m in i)if(i.hasOwnProperty(m)){var c=i[m];for(var f in c)if(f in t){E.push(c[f]);break}}}a(H,B),a(J,M)}typeof window<"u"&&typeof document<"u"&&Nt();function at(e,t,a){e.addEventListener(t,a,!1)}function it(e,t,a){e.removeEventListener(t,a,!1)}var Lt={startEvents:B,addStartEventListener:function(t,a){if(B.length===0){setTimeout(a,0);return}B.forEach(function(i){at(t,i,a)})},removeStartEventListener:function(t,a){B.length!==0&&B.forEach(function(i){it(t,i,a)})},endEvents:M,addEndEventListener:function(t,a){if(M.length===0){setTimeout(a,0);return}M.forEach(function(i){at(t,i,a)})},removeEndEventListener:function(t,a){M.length!==0&&M.forEach(function(i){it(t,i,a)})}};const W=Lt;var x;function rt(e){return!e||e.offsetParent===null}function Bt(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}const Mt=G({compatConfig:{MODE:3},name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(t,a){var i=a.slots,E=a.expose,m=yt(),c=q("",t),f=c.csp,o=c.prefixCls;E({csp:f});var T=null,h=null,w=null,C=!1,b=null,y=!1,S=function(n){if(!y){var r=tt(m);!n||n.target!==r||C||N(r)}},I=function(n){!n||n.animationName!=="fadeEffect"||N(n.target)},A=function(){var n=t.insertExtraNode;return n?"".concat(o.value,"-click-animating"):"".concat(o.value,"-click-animating-without-extra-node")},R=function(n,r){var u=t.insertExtraNode,l=t.disabled;if(!(l||!n||rt(n)||n.className.indexOf("-leave")>=0)){b=document.createElement("div"),b.className="".concat(o.value,"-click-animating-node");var s=A();if(n.removeAttribute(s),n.setAttribute(s,"true"),x=x||document.createElement("style"),r&&r!=="#ffffff"&&r!=="rgb(255, 255, 255)"&&Bt(r)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(r)&&r!=="transparent"){var k;(k=f.value)!==null&&k!==void 0&&k.nonce&&(x.nonce=f.value.nonce),b.style.borderColor=r,x.innerHTML=`
        [`.concat(o.value,"-click-animating-without-extra-node='true']::after, .").concat(o.value,`-click-animating-node {
          --antd-wave-shadow-color: `).concat(r,`;
        }`),document.body.contains(x)||document.body.appendChild(x)}u&&n.appendChild(b),W.addStartEventListener(n,S),W.addEndEventListener(n,I)}},N=function(n){if(!(!n||n===b||!(n instanceof Element))){var r=t.insertExtraNode,u=A();n.setAttribute(u,"false"),x&&(x.innerHTML=""),r&&b&&n.contains(b)&&n.removeChild(b),W.removeStartEventListener(n,S),W.removeEndEventListener(n,I)}},$=function(n){if(!(!n||!n.getAttribute||n.getAttribute("disabled")||n.className.indexOf("disabled")>=0)){var r=function(l){if(!(l.target.tagName==="INPUT"||rt(l.target))){N(n);var s=getComputedStyle(n).getPropertyValue("border-top-color")||getComputedStyle(n).getPropertyValue("border-color")||getComputedStyle(n).getPropertyValue("background-color");h=setTimeout(function(){return R(n,s)},0),nt.cancel(w),C=!0,w=nt(function(){C=!1},10)}};return n.addEventListener("click",r,!0),{cancel:function(){n.removeEventListener("click",r,!0)}}}};return dt(function(){vt(function(){var d=tt(m);d.nodeType===1&&(T=$(d))})}),mt(function(){T&&T.cancel(),clearTimeout(h),y=!0}),function(){var d;return(d=i.default)===null||d===void 0?void 0:d.call(i)[0]}}});var It=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:pt.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}};const Ot=It;var ot=function(t){t&&(t.style.width="0px",t.style.opacity="0",t.style.transform="scale(0)")},lt=function(t){vt(function(){t&&(t.style.width="".concat(t.scrollWidth,"px"),t.style.opacity="1",t.style.transform="scale(1)")})},ut=function(t){t&&t.style&&(t.style.width=null,t.style.opacity=null,t.style.transform=null)};const _t=G({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup:function(t){return function(){var a=t.existIcon,i=t.prefixCls,E=t.loading;if(a)return p("span",{class:"".concat(i,"-loading-icon")},[p(et,null,null)]);var m=!!E;return p(ht,{name:"".concat(i,"-loading-icon-motion"),onBeforeEnter:ot,onEnter:lt,onAfterEnter:ut,onBeforeLeave:lt,onLeave:function(f){setTimeout(function(){ot(f)})},onAfterLeave:ut},{default:function(){return[m?p("span",{class:"".concat(i,"-loading-icon")},[p(et,null,null)]):null]}})}}});var st=/^[\u4e00-\u9fa5]{2}$/,ct=st.test.bind(st);function j(e){return e==="text"||e==="link"}const U=G({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:Tt(Ot(),{type:"default"}),slots:["icon"],setup:function(t,a){var i=a.slots,E=a.attrs,m=a.emit,c=q("btn",t),f=c.prefixCls,o=c.autoInsertSpaceInButton,T=c.direction,h=c.size,w=P(null),C=P(void 0),b=!1,y=P(!1),S=P(!1),I=D(function(){return o.value!==!1}),A=D(function(){return kt(t.loading)==="object"&&t.loading.delay?t.loading.delay||!0:!!t.loading});Ct(A,function(n){clearTimeout(C.value),typeof A.value=="number"?C.value=setTimeout(function(){y.value=n},A.value):y.value=n},{immediate:!0});var R=D(function(){var n,r=t.type,u=t.shape,l=u===void 0?"default":u,s=t.ghost,k=t.block,F=t.danger,g=f.value,O={large:"lg",small:"sm",middle:void 0},_=h.value,z=_&&O[_]||"";return n={},v(n,"".concat(g),!0),v(n,"".concat(g,"-").concat(r),r),v(n,"".concat(g,"-").concat(l),l!=="default"&&l),v(n,"".concat(g,"-").concat(z),z),v(n,"".concat(g,"-loading"),y.value),v(n,"".concat(g,"-background-ghost"),s&&!j(r)),v(n,"".concat(g,"-two-chinese-chars"),S.value&&I.value),v(n,"".concat(g,"-block"),k),v(n,"".concat(g,"-dangerous"),!!F),v(n,"".concat(g,"-rtl"),T.value==="rtl"),n}),N=function(){var r=w.value;if(!(!r||o.value===!1)){var u=r.textContent;b&&ct(u)?S.value||(S.value=!0):S.value&&(S.value=!1)}},$=function(r){if(y.value||t.disabled){r.preventDefault();return}m("click",r)},d=function(r,u){var l=u?" ":"";if(r.type===wt){var s=r.children.trim();return ct(s)&&(s=s.split("").join(l)),p("span",null,[s])}return r};return St(function(){At(!(t.ghost&&j(t.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),dt(N),xt(N),mt(function(){C.value&&clearTimeout(C.value)}),function(){var n,r,u=t.icon,l=u===void 0?(n=i.icon)===null||n===void 0?void 0:n.call(i):u,s=gt((r=i.default)===null||r===void 0?void 0:r.call(i));b=s.length===1&&!l&&!j(t.type);var k=t.type,F=t.htmlType,g=t.disabled,O=t.href,_=t.title,z=t.target,bt=t.onMousedown,Et=y.value?"loading":l,V=L(L({},E),{},{title:_,disabled:g,class:[R.value,E.class,v({},"".concat(f.value,"-icon-only"),s.length===0&&!!Et)],onClick:$,onMousedown:bt});g||delete V.disabled;var K=l&&!y.value?l:p(_t,{existIcon:!!l,prefixCls:f.value,loading:!!y.value},null),Q=s.map(function(Y){return d(Y,b&&I.value)});if(O!==void 0)return p("a",L(L({},V),{},{href:O,target:z,ref:w}),[K,Q]);var X=p("button",L(L({},V),{},{ref:w,type:F}),[K,Q]);return j(k)?X:p(Mt,{ref:"wave",disabled:!!y.value},{default:function(){return[X]}})}}});function ft(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function zt(e,t,a){return t&&ft(e.prototype,t),a&&ft(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function Pt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Wt=zt(function e(t){Pt(this,e),this.error=new Error("unreachable case: ".concat(JSON.stringify(t)))}),jt=function(){return{prefixCls:String,size:{type:String}}};const Z=G({compatConfig:{MODE:3},name:"AButtonGroup",props:jt(),setup:function(t,a){var i=a.slots,E=q("btn-group",t),m=E.prefixCls,c=E.direction,f=D(function(){var o,T=t.size,h="";switch(T){case"large":h="lg";break;case"small":h="sm";break;case"middle":case void 0:break;default:console.warn(new Wt(T).error)}return o={},v(o,"".concat(m.value),!0),v(o,"".concat(m.value,"-").concat(h),h),v(o,"".concat(m.value,"-rtl"),c.value==="rtl"),o});return function(){var o;return p("div",{class:f.value},[gt((o=i.default)===null||o===void 0?void 0:o.call(i))])}}});U.Group=Z;U.install=function(e){return e.component(U.name,U),e.component(Z.name,Z),e};export{U as B,Ot as b};
