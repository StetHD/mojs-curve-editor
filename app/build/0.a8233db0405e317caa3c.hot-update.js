webpackHotUpdatemojs_curve_editor(0,{42:function(t,e,n){(function(t){n(82),n(47),n(48),n(52),n(78),t.tag2("curve-editor",'<icons></icons> <resize-handle type="top"></resize-handle> <resize-handle type="right"></resize-handle> <resize-handle type="bottom"></resize-handle> <div class="{this.CLASSES[\'curve-editor__left\']}"> <icon-button shape="code"></icon-button> <a href="https://github.com/legomushroom/mojs-curve-editor" target="_blank" class="{this.CLASSES[\'curve-editor__mojs-logo\']}"> <icon shape="mojs-logo"></icon> </a> </div> <curve adc="{this.CLASSES[\'curve-editor__right\']}"></curve>',"",'class="{this.CLASSES[\'curve-editor\']}" riot-style="{this.getStyle()}"',function(t){"use strict";var e=this;n(43),this.CLASSES=n(56);var r=n(77),a=t,o=a.store;o.subscribe(this.update.bind(this)),this.on("mount",function(){var t=new r(e.root,{});t.on("pan",function(t){e.x=t.deltaX,e.y=t.deltaY,e.update()}),t.on("panend",function(t){var n=t.deltaX,r=t.deltaY,a=o.getState().present.translate;e.x=e.y=0,o.dispatch({type:"EDITOR_TRANSLATE",data:{x:a.x+n,y:a.y+r}})})}),this.getStyle=function(){var t=o.getState().present.translate,n=(e.x||0)+t.x,r=(e.y||0)+t.y,a="transform: translate("+n+"px, "+r+"px)";return""+mojs.h.prefix.css+a+"; "+a}})}).call(e,n(2))},82:function(t,e,n){(function(t){t.tag2("resize-handle",'<icon shape="ellipsis"></icon>',"",'class="{this.applyClass}"',function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var r=this,a=n(86),o=e(a),i=n(77),s=e(i),l=n(87),c=e(l),d=(0,c["default"])(s["default"]),p=this.opts.type.type,u=n(85);this.applyClass=u["resize-handle"]+" "+(t.adc||""),this.applyClass=this.applyClass+" "+u["resize-handle--"+this.opts.type],n(83),n(50),this.on("mount",function(){var t=new d(r.root,{direction:s["default"].DIRECTION_ALL});t.on("pan",function(t){var e=t.deltaX,n=t.deltaY;o["default"].dispatch({type:"EDITOR_RESIZE",data:{x:e,y:n,type:p}}),t.stopPropagation()}),t.on("panend",function(t){var e=t.deltaX,n=t.deltaY;o["default"].dispatch({type:"EDITOR_RESIZE_END",data:{x:e,y:n,type:p}}),t.stopPropagation()})})})}).call(e,n(2))},83:function(t,e,n){var r=n(84);"string"==typeof r&&(r=[[t.id,r,""]]);var a=n(46)(r,{});r.locals&&(t.exports=r.locals),r.locals||t.hot.accept(84,function(){var e=n(84);"string"==typeof e&&(e=[[t.id,e,""]]),a(e)}),t.hot.dispose(function(){a()})},84:function(t,e,n){e=t.exports=n(45)(),e.push([t.id,"._resize-handle_5gtb1_4{background:#3d1b3c;width:32px;height:16px;display:block;cursor:n-resize;overflow:hidden;position:relative;border-top-left-radius:3px;border-top-right-radius:3px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}._resize-handle_5gtb1_4:after{content:'';position:absolute;left:0;top:0;right:0;bottom:0;z-index:2}._resize-handle_5gtb1_4 icon{position:absolute;left:0;top:-7px}._resize-handle_5gtb1_4:hover{opacity:.85}._resize-handle--right_5gtb1_1{-webkit-transform:rotate(90deg);transform:rotate(90deg);cursor:e-resize}._resize-handle--bottom_5gtb1_1{-webkit-transform:rotate(180deg);transform:rotate(180deg);cursor:s-resize}",""])},85:function(t,e){t.exports={"resize-handle":"_resize-handle_5gtb1_4","resize-handle--right":"_resize-handle--right_5gtb1_1","resize-handle--bottom":"_resize-handle--bottom_5gtb1_1"}},87:function(t,e,n){var r,a,o;!function(n){a=[],r=n,o="function"==typeof r?r.apply(e,a):r,!(void 0!==o&&(t.exports=o))}(function(){var t=null;return function e(n,r){function a(t){return t.match(/[^ ]+/g)}function o(e){if("hammer.input"!==e.type){if(e.srcEvent._handled||(e.srcEvent._handled={}),e.srcEvent._handled[e.type])return;e.srcEvent._handled[e.type]=!0}var n=!1;e.stopPropagation=function(){n=!0};var r=e.srcEvent.stopPropagation.bind(e.srcEvent);"function"==typeof r&&(e.srcEvent.stopPropagation=function(){r(),e.stopPropagation()}),e.firstTarget=t;for(var a=t;a&&!n;){var o=a.hammer;if(o)for(var i,s=0;s<o.length;s++)if(i=o[s]._handlers[e.type])for(var l=0;l<i.length&&!n;l++)i[l](e);a=a.parentNode}}var i=r||{preventDefault:!1};if(n.Manager){var s=n,l=function(t,n){var r=Object.create(i);return n&&s.assign(r,n),e(new s(t,r),r)};return s.assign(l,s),l.Manager=function(t,n){var r=Object.create(i);return n&&s.assign(r,n),e(new s.Manager(t,r),r)},l}var c=Object.create(n),d=n.element;return d.hammer||(d.hammer=[]),d.hammer.push(c),n.on("hammer.input",function(e){i.preventDefault!==!0&&i.preventDefault!==e.pointerType||e.preventDefault(),e.isFirst&&(t=e.target)}),c._handlers={},c.on=function(t,e){return a(t).forEach(function(t){var r=c._handlers[t];r||(c._handlers[t]=r=[],n.on(t,o)),r.push(e)}),c},c.off=function(t,e){return a(t).forEach(function(t){var r=c._handlers[t];r&&(r=e?r.filter(function(t){return t!==e}):[],r.length>0?c._handlers[t]=r:(n.off(t,o),delete c._handlers[t]))}),c},c.emit=function(e,r){t=r.target,n.emit(e,r)},c.destroy=function(){var t=n.element.hammer,e=t.indexOf(c);e!==-1&&t.splice(e,1),t.length||delete n.element.hammer,c._handlers={},n.destroy()},c}})}});