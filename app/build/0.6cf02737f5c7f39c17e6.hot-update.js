webpackHotUpdatemojs_curve_editor(0,{82:function(t,a,e){(function(t){t.tag2("resize-handle",'<icon shape="ellipsis"></icon>',"",'class="{this.applyClass}"',function(t){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var s=this,l=e(86),n=a(l),o=e(85),i=e(77);this.applyClass=o["resize-handle"]+" "+(t.adc||""),this.applyClass=this.applyClass+" "+o["resize-handle--"+this.opts.type],e(83),e(50),this.on("mount",function(){var t=new i(s.root,{});t.on("pan",function(t){var a=t.deltaX,e=t.deltaY;console.log(n["default"]),n["default"].dispatch({type:"EDITOR_RESIZE",data:{x:a,y:e}})}),t.on("panend",function(t){var a=t.deltaX,e=t.deltaY;console.log(n["default"]),n["default"].dispatch({type:"EDITOR_RESIZE_END",data:{x:a,y:e}})})})})}).call(a,e(2))}});