webpackHotUpdatemojs_curve_editor(0,{82:function(t,a,e){(function(t){t.tag2("resize-handle",'<icon shape="ellipsis"></icon>',"",'class="{this.applyClass}"',function(t){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var s=this,n=e(86),p=a(n),i=e(77),o=a(i),l=e(87),d=a(l),c=this.opts.type.type,u=e(85);this.applyClass=u["resize-handle"]+" "+(t.adc||""),this.applyClass=this.applyClass+" "+u["resize-handle--"+this.opts.type],e(83),e(50),this.on("mount",function(){(0,d["default"])(new o["default"](s.root)).on("pan",function(t){var a=t.deltaX,e=t.deltaY;p["default"].dispatch({type:"EDITOR_RESIZE",data:{x:a,y:e,type:c}}),t.stopPropagation()}).on("panend",function(t){var a=t.deltaX,e=t.deltaY;p["default"].dispatch({type:"EDITOR_RESIZE_END",data:{x:a,y:e,type:c}}),t.stopPropagation()})})})}).call(a,e(2))}});