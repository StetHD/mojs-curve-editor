webpackHotUpdatemojs_curve_editor(0,[,function(t,e,n){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}n(42);var i=n(86),r=e(i);n(73),document.addEventListener("DOMContentLoaded",function(){t.mount("curve-editor",{store:r["default"]})})}).call(e,n(2))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){(function(t){n(82),n(47),n(48),n(52),n(78),t.tag2("curve-editor",'<icons></icons> <resize-handle type="top"></resize-handle> <resize-handle type="right"></resize-handle> <resize-handle type="bottom"></resize-handle> <div class="{this.CLASSES[\'curve-editor__left\']}"> <icon-button shape="code"></icon-button> <a href="https://github.com/legomushroom/mojs-curve-editor" target="_blank" class="{this.CLASSES[\'curve-editor__mojs-logo\']}"> <icon shape="mojs-logo"></icon> </a> </div> <curve adc="{this.CLASSES[\'curve-editor__right\']}"></curve>',"",'class="{this.CLASSES[\'curve-editor\']}" riot-style="{this.getStyle()}"',function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var i=this,r=n(77),o=e(r),s=n(87),a=e(s);n(43),this.CLASSES=n(56);var c=t,u=c.store;u.subscribe(this.update.bind(this)),this.on("mount",function(){(0,a["default"])(new o["default"](i.root)).on("pan",function(t){i.x=t.deltaX,i.y=t.deltaY,i.update()}).on("panend",function(t){var e=t.deltaX,n=t.deltaY,r=u.getState().present.translate;i.x=i.y=0,u.dispatch({type:"EDITOR_TRANSLATE",data:{x:r.x+e,y:r.y+n}})})}),this.getStyle=function(){var t=u.getState().present,e=(t.tempResize_top,t.translate),n=(i.x||0)+e.x,r=(i.y||0)+e.y,o="transform: translate("+n+"px, "+r+"px)";return""+mojs.h.prefix.css+o+"; "+o}})}).call(e,n(2))},function(t,e,n){var i=n(44);"string"==typeof i&&(i=[[t.id,i,""]]);var r=n(46)(i,{});i.locals&&(t.exports=i.locals),i.locals||t.hot.accept(44,function(){var e=n(44);"string"==typeof e&&(e=[[t.id,e,""]]),r(e)}),t.hot.dispose(function(){r()})},function(t,e,n){e=t.exports=n(45)(),e.push([t.id,"._curve-editor_1fq01_4{position:fixed;right:0;top:0;width:411px;height:378px;border-radius:12px;background:rgba(58,8,58,.85);z-index:100;box-shadow:2px 2px 2px rgba(0,0,0,.38)}._curve-editor__left_1fq01_1{position:absolute;width:42px;left:0;top:0;bottom:0;padding:10px}._curve-editor__right_1fq01_1{position:absolute;left:43px;right:10px;top:10px;bottom:10px;border-radius:2px;background:rgba(58,8,58,.75);border:1px solid #b3a0b2;box-shadow:inset 4px 4px 0 rgba(0,0,0,.5)}._curve-editor__mojs-logo_1fq01_1{position:absolute;bottom:17px;left:50%;margin-left:1px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}._curve-editor__mojs-logo_1fq01_1 icon{fill:#ff512f;width:12px;height:12px}._curve-editor_1fq01_4 resize-handle{position:absolute}._curve-editor_1fq01_4 resize-handle[type=top]{top:-16px}._curve-editor_1fq01_4 resize-handle[type=bottom]{bottom:0}._curve-editor_1fq01_4 resize-handle[type=bottom],._curve-editor_1fq01_4 resize-handle[type=top]{left:50%;margin-left:-16px}._curve-editor_1fq01_4 resize-handle[type=right]{right:-16px;top:50%;margin-top:-16px}",""])},,,function(t,e,n){(function(t){t.tag2("icons",'<svg height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" style="position:absolute; margin-left: -100%; width:0; height:0;" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="ellipsis-shape"> <circle cx="11" cy="16" r="1"></circle> <circle cx="16" cy="16" r="1"></circle> <circle cx="21" cy="16" r="1"></circle> </g> <path id="code-shape" d="M8,16.0849648 C8,15.8210793 8.11149069,15.6129393 8.33483405,15.4609065 L12.3390874,12.8419612 C12.3897649,12.8014192 12.4657813,12.7811481 12.5674985,12.7811481 C12.7398023,12.7811481 12.9048664,12.8571645 13.0623289,13.0095592 C13.2194294,13.161954 13.2983417,13.3393255 13.2983417,13.5423979 C13.2983417,13.7353347 13.2219633,13.8826617 13.0692066,13.9840168 L9.85769553,16.0849648 L13.0692066,18.1862747 C13.2219633,18.2677208 13.2983417,18.4146858 13.2983417,18.6278937 C13.2983417,18.830966 13.2197914,19.0061657 13.0623289,19.1531307 C12.9048664,19.3004576 12.7398023,19.3739401 12.5674985,19.3739401 C12.4657813,19.3739401 12.3897649,19.3536691 12.3390874,19.313127 L8.33483405,16.6938198 C8.11149069,16.541425 8,16.3387147 8,16.0849648 L8,16.0849648 Z M14.1399516,20.6875756 C14.1265582,20.6075774 14.1287301,20.5301131 14.1468293,20.4548207 L16.9395263,11.356022 C16.9891179,11.1623612 17.1237755,11.0468887 17.344223,11.0096045 C17.5042194,10.9824558 17.658786,11.0128623 17.8075609,11.1008242 C17.9563358,11.1891479 18.0442976,11.313308 18.0710844,11.4733044 C18.0862876,11.5634381 18.079772,11.6470561 18.0518993,11.7237965 L15.2664419,20.7748134 C15.2085247,20.9800577 15.0593878,21.1031318 14.8193932,21.1440358 C14.6488993,21.1729945 14.4994005,21.1389681 14.3698106,21.0426807 C14.2402208,20.9460313 14.1638424,20.8276629 14.1399516,20.6875756 L14.1399516,20.6875756 Z M18.9528744,19.1527687 C18.7954119,19.0058037 18.7168616,18.830604 18.7168616,18.6275317 C18.7168616,18.4244594 18.7878102,18.2774944 18.9300695,18.1859127 L22.1426665,16.0846028 L18.9300695,13.9836549 C18.7878102,13.8718022 18.7168616,13.7248372 18.7168616,13.5420359 C18.7168616,13.3389636 18.7954119,13.161592 18.9528744,13.0091973 C19.1103369,12.8568025 19.275039,12.7807861 19.4477048,12.7807861 C19.5389245,12.7807861 19.6098731,12.8014192 19.6609126,12.8415992 L23.6651659,15.4605445 C23.8881473,15.6129393 24,15.8210793 24,16.0846028 C24,16.3488502 23.8881473,16.5515606 23.6651659,16.6938198 L19.6609126,19.3127651 C19.6098731,19.3533071 19.5389245,19.3735782 19.4477048,19.3735782 C19.275039,19.3735782 19.1103369,19.3000957 18.9528744,19.1527687 L18.9528744,19.1527687 Z"></path> <path id="mojs-logo-shape" d="M18.4678907,2.67700048 C19.488586,3.25758625 20.2789227,4.18421651 20.87823,5.1973579 C24.0807788,10.501451 27.2777091,15.8113116 30.480258,21.1154047 C31.1320047,22.1612281 31.7706417,23.2647256 31.9354512,24.5162532 C32.188284,26.0619186 31.6919826,27.7363895 30.5589171,28.80336 C29.4501984,29.8857103 27.8807622,30.3182659 26.3806209,30.3048086 C19.4511293,30.3086535 12.5235106,30.3086535 5.59401901,30.3048086 C3.71556494,30.343258 1.69852104,29.5723478 0.683444165,27.8709623 C-0.406546132,26.1099803 -0.0975282643,23.7914822 0.940022637,22.0843293 C4.34296485,16.4130445 7.76650826,10.7532945 11.1825603,5.08969961 C11.9747698,3.74781595 13.1846215,2.60202418 14.6847628,2.18292584 C15.9451812,1.81573418 17.3348251,2.01182606 18.4678907,2.67700048 Z M15.3334668,9.51526849 C15.6146238,9.03779476 16.0791597,9.02250655 16.3785679,9.4929547 L25.2763555,23.4736913 C25.5723919,23.9388414 25.3568433,24.3159201 24.8074398,24.3159202 L7.62314647,24.3159205 C7.06813505,24.3159206 6.84622798,23.9286889 7.12728913,23.4513779 L15.3334668,9.51526849 Z" fill-rule="evenodd"></path> </svg>',"","",function(t){})}).call(e,n(2))},function(t,e,n){(function(t){t.tag2("icon",'<svg viewbox="0 0 32 32"> <use xlink:href="#{opts.shape}-shape"></use> </svg>',"","class=\"{this.CLASSES['icon'] + ' ' + (opts.adc || '')}\"",function(t){"use strict";var e=this;this.CLASSES=n(49),n(50),this.on("mount",function(){e.root.innerHTML=e.root.innerHTML})})}).call(e,n(2))},function(t,e){t.exports={icon:"_icon_rjktj_5"}},function(t,e,n){var i=n(51);"string"==typeof i&&(i=[[t.id,i,""]]);var r=n(46)(i,{});i.locals&&(t.exports=i.locals),i.locals||t.hot.accept(51,function(){var e=n(51);"string"==typeof e&&(e=[[t.id,e,""]]),r(e)}),t.hot.dispose(function(){r()})},function(t,e,n){e=t.exports=n(45)(),e.push([t.id,"._icon_rjktj_5{position:relative;width:32px;height:32px;cursor:pointer;fill:#fff;display:block}._icon_rjktj_5>svg{position:absolute;left:0;top:0;width:100%;height:100%;fill:inherit}._icon_rjktj_5>svg>use{fill:inherit}._icon_rjktj_5:after{content:'';position:absolute;left:0;top:0;right:0;bottom:0;z-index:1}",""])},function(t,e,n){(function(t){n(48),t.tag2("icon-button",'<icon shape="{opts.shape}"></icon>',"","class=\"{this.CLASSES['icon-button']}\"",function(t){this.CLASSES=n(53),n(54)})}).call(e,n(2))},function(t,e){t.exports={"icon-button":"_icon-button_va2ff_4","is-checked":"_is-checked_va2ff_31"}},function(t,e,n){var i=n(55);"string"==typeof i&&(i=[[t.id,i,""]]);var r=n(46)(i,{});i.locals&&(t.exports=i.locals),i.locals||t.hot.accept(55,function(){var e=n(55);"string"==typeof e&&(e=[[t.id,e,""]]),r(e)}),t.hot.dispose(function(){r()})},function(t,e,n){e=t.exports=n(45)(),e.push([t.id,"._icon-button_va2ff_4{position:relative;width:24px;height:24px;display:block;background:#3a0839;border-radius:3px;box-shadow:1px 1px 0 rgba(0,0,0,.15)}._icon-button_va2ff_4 icon{position:absolute;left:50%;top:50%;width:100%;height:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}._icon-button_va2ff_4:hover{box-shadow:none}._icon-button_va2ff_4:hover icon{-webkit-transform:translate(-52%,-52%);transform:translate(-52%,-52%)}._icon-button_va2ff_4._is-checked_va2ff_31,._icon-button_va2ff_4:active{border-radius:3px;box-shadow:inset -1px -1px 0 hsla(0,0%,100%,.25),inset 1px 1px 1px rgba(0,0,0,.4)}._icon-button_va2ff_4._is-checked_va2ff_31 icon,._icon-button_va2ff_4:active icon{-webkit-transform:translate(-54%,-54%) scale(.95);transform:translate(-54%,-54%) scale(.95)}",""])},function(t,e){t.exports={"curve-editor":"_curve-editor_1fq01_4","curve-editor__left":"_curve-editor__left_1fq01_1","curve-editor__right":"_curve-editor__right_1fq01_1","curve-editor__mojs-logo":"_curve-editor__mojs-logo_1fq01_1"}},,,,,,,,,,,,,,,,,,,,,function(t,e,n){var i;/*! Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
!function(r,o,s,a){"use strict";function c(t,e,n){return setTimeout(f(t,n),e)}function u(t,e,n){return!!Array.isArray(t)&&(h(t,n[e],n),!0)}function h(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function l(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=r.console&&(r.console.warn||r.console.log);return o&&o.call(r.console,i,n),t.apply(this,arguments)}}function p(t,e,n){var i,r=e.prototype;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&vt(i,n)}function f(t,e){return function(){return t.apply(e,arguments)}}function d(t,e){return typeof t==_t?t.apply(e?e[0]||a:a,e):t}function v(t,e){return t===a?e:t}function g(t,e,n){h(b(e),function(e){t.addEventListener(e,n,!1)})}function m(t,e,n){h(b(e),function(e){t.removeEventListener(e,n,!1)})}function _(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function y(t,e){return t.indexOf(e)>-1}function b(t){return t.trim().split(/\s+/g)}function T(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function x(t){return Array.prototype.slice.call(t,0)}function E(t,e,n){for(var i=[],r=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];T(r,s)<0&&i.push(t[o]),r[o]=s,o++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function C(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),o=0;o<gt.length;){if(n=gt[o],i=n?n+r:e,i in t)return i;o++}return a}function S(){return Ct++}function w(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}function z(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){d(t.options.enable,[t])&&n.handler(e)},this.init()}function A(t){var e,n=t.options.inputClass;return new(e=n?n:zt?F:At?U:wt?Z:N)(t,I)}function I(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,o=e&Mt&&i-r===0,s=e&(Rt|jt)&&i-r===0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,L(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function L(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=P(e)),r>1&&!n.firstMultiple?n.firstMultiple=P(e):1===r&&(n.firstMultiple=!1);var o=n.firstInput,s=n.firstMultiple,a=s?s.center:o.center,c=e.center=M(i);e.timeStamp=Tt(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=q(a,c),e.distance=j(a,c),k(n,e),e.offsetDirection=R(e.deltaX,e.deltaY);var u=O(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=u.x,e.overallVelocityY=u.y,e.overallVelocity=bt(u.x)>bt(u.y)?u.x:u.y,e.scale=s?Y(s.pointers,i):1,e.rotation=s?X(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,D(n,e);var h=t.element;_(e.srcEvent.target,h)&&(h=e.srcEvent.target),e.target=h}function k(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};e.eventType!==Mt&&o.eventType!==Rt||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}function D(t,e){var n,i,r,o,s=t.lastInterval||e,c=e.timeStamp-s.timeStamp;if(e.eventType!=jt&&(c>Pt||s.velocity===a)){var u=e.deltaX-s.deltaX,h=e.deltaY-s.deltaY,l=O(c,u,h);i=l.x,r=l.y,n=bt(l.x)>bt(l.y)?l.x:l.y,o=R(u,h),t.lastInterval=e}else n=s.velocity,i=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=o}function P(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:yt(t.pointers[n].clientX),clientY:yt(t.pointers[n].clientY)},n++;return{timeStamp:Tt(),pointers:e,center:M(e),deltaX:t.deltaX,deltaY:t.deltaY}}function M(t){var e=t.length;if(1===e)return{x:yt(t[0].clientX),y:yt(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:yt(n/e),y:yt(i/e)}}function O(t,e,n){return{x:e/t||0,y:n/t||0}}function R(t,e){return t===e?qt:bt(t)>=bt(e)?t<0?Xt:Yt:e<0?Nt:Ft}function j(t,e,n){n||(n=Vt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function q(t,e,n){n||(n=Vt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function X(t,e){return q(e[1],e[0],Zt)+q(t[1],t[0],Zt)}function Y(t,e){return j(e[0],e[1],Zt)/j(t[0],t[1],Zt)}function N(){this.evEl=Bt,this.evWin=$t,this.pressed=!1,z.apply(this,arguments)}function F(){this.evEl=Qt,this.evWin=te,z.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function H(){this.evTarget=ne,this.evWin=ie,this.started=!1,z.apply(this,arguments)}function W(t,e){var n=x(t.touches),i=x(t.changedTouches);return e&(Rt|jt)&&(n=E(n.concat(i),"identifier",!0)),[n,i]}function U(){this.evTarget=oe,this.targetIds={},z.apply(this,arguments)}function V(t,e){var n=x(t.touches),i=this.targetIds;if(e&(Mt|Ot)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,o,s=x(t.changedTouches),a=[],c=this.target;if(o=n.filter(function(t){return _(t.target,c)}),e===Mt)for(r=0;r<o.length;)i[o[r].identifier]=!0,r++;for(r=0;r<s.length;)i[s[r].identifier]&&a.push(s[r]),e&(Rt|jt)&&delete i[s[r].identifier],r++;return a.length?[E(o.concat(a),"identifier",!0),a]:void 0}function Z(){z.apply(this,arguments);var t=f(this.handler,this);this.touch=new U(this.manager,t),this.mouse=new N(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function G(t,e){t&Mt?(this.primaryTouch=e.changedPointers[0].identifier,B.call(this,e)):t&(Rt|jt)&&B.call(this,e)}function B(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,r=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(r,se)}}function $(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],o=Math.abs(e-r.x),s=Math.abs(n-r.y);if(o<=ae&&s<=ae)return!0}return!1}function J(t,e){this.manager=t,this.set(e)}function K(t){if(y(t,fe))return fe;var e=y(t,de),n=y(t,ve);return e&&n?fe:e||n?e?de:ve:y(t,pe)?pe:le}function Q(){if(!ue)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||r.CSS.supports("touch-action",n)}),t}function tt(t){this.options=vt({},this.defaults,t||{}),this.id=S(),this.manager=null,this.options.enable=v(this.options.enable,!0),this.state=me,this.simultaneous={},this.requireFail=[]}function et(t){return t&xe?"cancel":t&be?"end":t&ye?"move":t&_e?"start":""}function nt(t){return t==Ft?"down":t==Nt?"up":t==Xt?"left":t==Yt?"right":""}function it(t,e){var n=e.manager;return n?n.get(t):t}function rt(){tt.apply(this,arguments)}function ot(){rt.apply(this,arguments),this.pX=null,this.pY=null}function st(){rt.apply(this,arguments)}function at(){tt.apply(this,arguments),this._timer=null,this._input=null}function ct(){rt.apply(this,arguments)}function ut(){rt.apply(this,arguments)}function ht(){tt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function lt(t,e){return e=e||{},e.recognizers=v(e.recognizers,lt.defaults.preset),new pt(t,e)}function pt(t,e){this.options=vt({},lt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=A(this),this.touchAction=new J(this,this.options.touchAction),ft(this,!0),h(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ft(t,e){var n=t.element;if(n.style){var i;h(t.options.cssProps,function(r,o){i=C(n.style,o),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function dt(t,e){var n=o.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}var vt,gt=["","webkit","Moz","MS","ms","o"],mt=o.createElement("div"),_t="function",yt=Math.round,bt=Math.abs,Tt=Date.now;vt="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var xt=l(function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&t[i[r]]===a)&&(t[i[r]]=e[i[r]]),r++;return t},"extend","Use `assign`."),Et=l(function(t,e){return xt(t,e,!0)},"merge","Use `assign`."),Ct=1,St=/mobile|tablet|ip(ad|hone|od)|android/i,wt="ontouchstart"in r,zt=C(r,"PointerEvent")!==a,At=wt&&St.test(navigator.userAgent),It="touch",Lt="pen",kt="mouse",Dt="kinect",Pt=25,Mt=1,Ot=2,Rt=4,jt=8,qt=1,Xt=2,Yt=4,Nt=8,Ft=16,Ht=Xt|Yt,Wt=Nt|Ft,Ut=Ht|Wt,Vt=["x","y"],Zt=["clientX","clientY"];z.prototype={handler:function(){},init:function(){this.evEl&&g(this.element,this.evEl,this.domHandler),this.evTarget&&g(this.target,this.evTarget,this.domHandler),this.evWin&&g(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)}};var Gt={mousedown:Mt,mousemove:Ot,mouseup:Rt},Bt="mousedown",$t="mousemove mouseup";p(N,z,{handler:function(t){var e=Gt[t.type];e&Mt&&0===t.button&&(this.pressed=!0),e&Ot&&1!==t.which&&(e=Rt),this.pressed&&(e&Rt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:kt,srcEvent:t}))}});var Jt={pointerdown:Mt,pointermove:Ot,pointerup:Rt,pointercancel:jt,pointerout:jt},Kt={2:It,3:Lt,4:kt,5:Dt},Qt="pointerdown",te="pointermove pointerup pointercancel";r.MSPointerEvent&&!r.PointerEvent&&(Qt="MSPointerDown",te="MSPointerMove MSPointerUp MSPointerCancel"),p(F,z,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Jt[i],o=Kt[t.pointerType]||t.pointerType,s=o==It,a=T(e,t.pointerId,"pointerId");r&Mt&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):r&(Rt|jt)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(a,1))}});var ee={touchstart:Mt,touchmove:Ot,touchend:Rt,touchcancel:jt},ne="touchstart",ie="touchstart touchmove touchend touchcancel";p(H,z,{handler:function(t){var e=ee[t.type];if(e===Mt&&(this.started=!0),this.started){var n=W.call(this,t,e);e&(Rt|jt)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:It,srcEvent:t})}}});var re={touchstart:Mt,touchmove:Ot,touchend:Rt,touchcancel:jt},oe="touchstart touchmove touchend touchcancel";p(U,z,{handler:function(t){var e=re[t.type],n=V.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:It,srcEvent:t})}});var se=2500,ae=25;p(Z,z,{handler:function(t,e,n){var i=n.pointerType==It,r=n.pointerType==kt;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)G.call(this,e,n);else if(r&&$.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var ce=C(mt.style,"touchAction"),ue=ce!==a,he="compute",le="auto",pe="manipulation",fe="none",de="pan-x",ve="pan-y",ge=Q();J.prototype={set:function(t){t==he&&(t=this.compute()),ue&&this.manager.element.style&&ge[t]&&(this.manager.element.style[ce]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return h(this.manager.recognizers,function(e){d(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),K(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,r=y(i,fe)&&!ge[fe],o=y(i,ve)&&!ge[ve],s=y(i,de)&&!ge[de];if(r){var a=1===t.pointers.length,c=t.distance<2,u=t.deltaTime<250;if(a&&c&&u)return}return s&&o?void 0:r||o&&n&Ht||s&&n&Wt?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var me=1,_e=2,ye=4,be=8,Te=be,xe=16,Ee=32;tt.prototype={defaults:{},set:function(t){return vt(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(u(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=it(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return u(t,"dropRecognizeWith",this)?this:(t=it(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(u(t,"requireFailure",this))return this;var e=this.requireFail;return t=it(t,this),T(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(u(t,"dropRequireFailure",this))return this;t=it(t,this);var e=T(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;i<be&&e(n.options.event+et(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=be&&e(n.options.event+et(i))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=Ee)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(Ee|me)))return!1;t++}return!0},recognize:function(t){var e=vt({},t);return d(this.options.enable,[this,e])?(this.state&(Te|xe|Ee)&&(this.state=me),this.state=this.process(e),void(this.state&(_e|ye|be|xe)&&this.tryEmit(e))):(this.reset(),void(this.state=Ee))},process:function(t){},getTouchAction:function(){},reset:function(){}},p(rt,tt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(_e|ye),r=this.attrTest(t);return i&&(n&jt||!r)?e|xe:i||r?n&Rt?e|be:e&_e?e|ye:_e:Ee}}),p(ot,rt,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ut},getTouchAction:function(){var t=this.options.direction,e=[];return t&Ht&&e.push(ve),t&Wt&&e.push(de),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(e.direction&Ht?(r=0===o?qt:o<0?Xt:Yt,n=o!=this.pX,i=Math.abs(t.deltaX)):(r=0===s?qt:s<0?Nt:Ft,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return rt.prototype.attrTest.call(this,t)&&(this.state&_e||!(this.state&_e)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=nt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),p(st,rt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[fe]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&_e)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),p(at,tt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[le]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(Rt|jt)&&!r)this.reset();else if(t.eventType&Mt)this.reset(),this._timer=c(function(){this.state=Te,this.tryEmit()},e.time,this);else if(t.eventType&Rt)return Te;return Ee},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Te&&(t&&t.eventType&Rt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=Tt(),this.manager.emit(this.options.event,this._input)))}}),p(ct,rt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[fe]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&_e)}}),p(ut,rt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Ht|Wt,pointers:1},getTouchAction:function(){return ot.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(Ht|Wt)?e=t.overallVelocity:n&Ht?e=t.overallVelocityX:n&Wt&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&bt(e)>this.options.velocity&&t.eventType&Rt},emit:function(t){var e=nt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),p(ht,tt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[pe]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&Mt&&0===this.count)return this.failTimeout();if(i&&r&&n){if(t.eventType!=Rt)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||j(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,s&&o?this.count+=1:this.count=1,this._input=t;var a=this.count%e.taps;if(0===a)return this.hasRequireFailures()?(this._timer=c(function(){this.state=Te,this.tryEmit()},e.interval,this),_e):Te}return Ee},failTimeout:function(){return this._timer=c(function(){this.state=Ee},this.options.interval,this),Ee},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Te&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),lt.VERSION="2.0.7",lt.defaults={domEvents:!1,touchAction:he,enable:!0,inputTarget:null,inputClass:null,preset:[[ct,{enable:!1}],[st,{enable:!1},["rotate"]],[ut,{direction:Ht}],[ot,{direction:Ht},["swipe"]],[ht],[ht,{event:"doubletap",taps:2},["tap"]],[at]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Ce=1,Se=2;pt.prototype={set:function(t){return vt(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?Se:Ce},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&Te)&&(r=e.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],e.stopped===Se||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(_e|ye|be)&&(r=e.curRecognizer=n),o++}},get:function(t){if(t instanceof tt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(u(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(u(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=T(e,t);n!==-1&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return h(b(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==a){var n=this.handlers;return h(b(t),function(t){e?n[t]&&n[t].splice(T(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&dt(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&ft(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},vt(lt,{INPUT_START:Mt,INPUT_MOVE:Ot,INPUT_END:Rt,INPUT_CANCEL:jt,STATE_POSSIBLE:me,STATE_BEGAN:_e,STATE_CHANGED:ye,STATE_ENDED:be,STATE_RECOGNIZED:Te,STATE_CANCELLED:xe,STATE_FAILED:Ee,DIRECTION_NONE:qt,DIRECTION_LEFT:Xt,DIRECTION_RIGHT:Yt,DIRECTION_UP:Nt,DIRECTION_DOWN:Ft,DIRECTION_HORIZONTAL:Ht,DIRECTION_VERTICAL:Wt,DIRECTION_ALL:Ut,Manager:pt,Input:z,TouchAction:J,TouchInput:U,MouseInput:N,PointerEventInput:F,TouchMouseInput:Z,SingleTouchInput:H,Recognizer:tt,AttrRecognizer:rt,Tap:ht,Pan:ot,Swipe:ut,Pinch:st,Rotate:ct,Press:at,on:g,off:m,each:h,merge:Et,extend:xt,assign:vt,inherit:p,bindFn:f,prefixed:C});var we="undefined"!=typeof r?r:"undefined"!=typeof self?self:{};we.Hammer=lt,i=function(){return lt}.call(e,n,e,t),!(i!==a&&(t.exports=i))}(window,document,"Hammer")},function(t,e,n){(function(t){t.tag2("curve",'<svg width="358" height="358" viewbox="0 0 100 100" class="{this.CLASSES[\'curve__svg\']}"> </svg>',"","class=\"{this.CLASSES['curve'] + ' ' + (opts.adc || '')}\"",function(t){this.CLASSES=n(81),n(79)})}).call(e,n(2))},function(t,e,n){var i=n(80);"string"==typeof i&&(i=[[t.id,i,""]]);var r=n(46)(i,{});i.locals&&(t.exports=i.locals),i.locals||t.hot.accept(80,function(){var e=n(80);"string"==typeof e&&(e=[[t.id,e,""]]),r(e)}),t.hot.dispose(function(){r()})},function(t,e,n){e=t.exports=n(45)(),e.push([t.id,"._curve__svg_1pkd9_1{position:absolute;display:block;left:-1px;top:-1px;overflow:visible}",""])},function(t,e){t.exports={curve:"_curve_1pkd9_4",curve__svg:"_curve__svg_1pkd9_1"}},function(t,e,n){(function(t){t.tag2("resize-handle",'<icon shape="ellipsis"></icon>',"",'class="{this.applyClass}"',function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var i=this,r=n(86),o=e(r),s=n(77),a=e(s),c=n(87),u=e(c),h=this.opts.type,l=n(85);this.applyClass=l["resize-handle"]+" "+(t.adc||""),this.applyClass=this.applyClass+" "+l["resize-handle--"+this.opts.type],n(83),n(50),this.on("mount",function(){(0,u["default"])(new a["default"](i.root)).on("pan",function(t){var e=t.deltaX,n=t.deltaY;o["default"].dispatch({type:"EDITOR_RESIZE",data:{x:e,y:n,type:h}}),t.stopPropagation()}).on("panend",function(t){var e=t.deltaX,n=t.deltaY;o["default"].dispatch({type:"EDITOR_RESIZE_END",data:{x:e,y:n,type:h}}),t.stopPropagation()})})})}).call(e,n(2))},function(t,e,n){var i=n(84);"string"==typeof i&&(i=[[t.id,i,""]]);var r=n(46)(i,{});i.locals&&(t.exports=i.locals),i.locals||t.hot.accept(84,function(){var e=n(84);"string"==typeof e&&(e=[[t.id,e,""]]),r(e)}),t.hot.dispose(function(){r()})},function(t,e,n){e=t.exports=n(45)(),e.push([t.id,"._resize-handle_5gtb1_4{background:#3d1b3c;width:32px;height:16px;display:block;cursor:n-resize;overflow:hidden;position:relative;border-top-left-radius:3px;border-top-right-radius:3px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}._resize-handle_5gtb1_4:after{content:'';position:absolute;left:0;top:0;right:0;bottom:0;z-index:2}._resize-handle_5gtb1_4 icon{position:absolute;left:0;top:-7px}._resize-handle_5gtb1_4:hover{opacity:.85}._resize-handle--right_5gtb1_1{-webkit-transform:rotate(90deg);transform:rotate(90deg);cursor:e-resize}._resize-handle--bottom_5gtb1_1{-webkit-transform:rotate(180deg);transform:rotate(180deg);cursor:s-resize}",""])},function(t,e){t.exports={"resize-handle":"_resize-handle_5gtb1_4","resize-handle--right":"_resize-handle--right_5gtb1_1","resize-handle--bottom":"_resize-handle--bottom_5gtb1_1"}},,function(t,e,n){var i,r,o;!function(n){r=[],i=n,o="function"==typeof i?i.apply(e,r):i,!(void 0!==o&&(t.exports=o))}(function(){var t=null;return function e(n,i){function r(t){return t.match(/[^ ]+/g)}function o(e){if("hammer.input"!==e.type){if(e.srcEvent._handled||(e.srcEvent._handled={}),e.srcEvent._handled[e.type])return;e.srcEvent._handled[e.type]=!0}var n=!1;e.stopPropagation=function(){n=!0};var i=e.srcEvent.stopPropagation.bind(e.srcEvent);"function"==typeof i&&(e.srcEvent.stopPropagation=function(){i(),e.stopPropagation()}),e.firstTarget=t;for(var r=t;r&&!n;){var o=r.hammer;if(o)for(var s,a=0;a<o.length;a++)if(s=o[a]._handlers[e.type])for(var c=0;c<s.length&&!n;c++)s[c](e);r=r.parentNode}}var s=i||{preventDefault:!1};if(n.Manager){var a=n,c=function(t,n){var i=Object.create(s);return n&&a.assign(i,n),e(new a(t,i),i)};return a.assign(c,a),c.Manager=function(t,n){var i=Object.create(s);return n&&a.assign(i,n),e(new a.Manager(t,i),i)},c}var u=Object.create(n),h=n.element;return h.hammer||(h.hammer=[]),h.hammer.push(u),n.on("hammer.input",function(e){s.preventDefault!==!0&&s.preventDefault!==e.pointerType||e.preventDefault(),e.isFirst&&(t=e.target)}),u._handlers={},u.on=function(t,e){return r(t).forEach(function(t){var i=u._handlers[t];i||(u._handlers[t]=i=[],n.on(t,o)),i.push(e)}),u},u.off=function(t,e){return r(t).forEach(function(t){var i=u._handlers[t];i&&(i=e?i.filter(function(t){return t!==e}):[],i.length>0?u._handlers[t]=i:(n.off(t,o),delete u._handlers[t]))}),u},u.emit=function(e,i){t=i.target,n.emit(e,i)},u.destroy=function(){var t=n.element.hammer,e=t.indexOf(u);e!==-1&&t.splice(e,1),t.length||delete n.element.hammer,u._handlers={},n.destroy()},u}})}]);