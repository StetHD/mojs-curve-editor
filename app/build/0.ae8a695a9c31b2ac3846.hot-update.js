webpackHotUpdatemojs_curve_editor(0,{82:function(t,a,e){(function(t){t.tag2("resize-handle",'<icon shape="ellipsis"></icon>',"",'class="{this.applyClass}"',function(t){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var s=this,n=e(86),i=a(n),p=this.opts.type.type,o=e(85),l=e(77);this.applyClass=o["resize-handle"]+" "+(t.adc||""),this.applyClass=this.applyClass+" "+o["resize-handle--"+this.opts.type],e(83),e(50),this.on("mount",function(){var t=new l(s.root,{direction:l.DIRECTION_ALL});t.on("pan",function(t){var a=t.deltaX,e=t.deltaY;i["default"].dispatch({type:"EDITOR_RESIZE",data:{x:a,y:e,type:p}}),t.stopPropagation()}),t.on("panend",function(t){var a=t.deltaX,e=t.deltaY;i["default"].dispatch({type:"EDITOR_RESIZE_END",data:{x:a,y:e,type:p}}),t.stopPropagation()})})})}).call(a,e(2))}});