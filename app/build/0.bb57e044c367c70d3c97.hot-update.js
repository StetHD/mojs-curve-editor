webpackHotUpdatemojs_curve_editor(0,{82:function(t,a,e){(function(t){t.tag2("resize-handle",'<icon shape="ellipsis"></icon>',"",'class="{this.applyClass}"',function(t){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var s=this,n=e(86),i=a(n),o=e(77),p=a(o),l=e(87),d=a(l),c=this.opts.type.type,r=e(85);this.applyClass=r["resize-handle"]+" "+(t.adc||""),this.applyClass=this.applyClass+" "+r["resize-handle--"+this.opts.type],e(83),e(50),this.on("mount",function(){var t=(0,d["default"])(new p["default"](s.root,{direction:p["default"].DIRECTION_ALL,domEvents:!0}));t.on("pan",function(t){var a=t.deltaX,e=t.deltaY;i["default"].dispatch({type:"EDITOR_RESIZE",data:{x:a,y:e,type:c}}),t.srcEvent.stopPropagation()}),t.on("panend",function(t){var a=t.deltaX,e=t.deltaY;i["default"].dispatch({type:"EDITOR_RESIZE_END",data:{x:a,y:e,type:c}}),t.srcEvent.stopPropagation()})})})}).call(a,e(2))}});