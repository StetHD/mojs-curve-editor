webpackHotUpdatemojs_curve_editor(0,{82:function(t,e,a){(function(t){t.tag2("resize-handle",'<icon shape="ellipsis"></icon>',"",'class="{this.applyClass}"',function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var s=this,n=a(86),i=e(n),p=this.opts.type.type,l=a(85),o=a(77);this.applyClass=l["resize-handle"]+" "+(t.adc||""),this.applyClass=this.applyClass+" "+l["resize-handle--"+this.opts.type],a(83),a(50),this.on("mount",function(){var t=new o(s.root,{direction:o.DIRECTION_ALL,domEvents:!0});t.on("pan",function(t){var e=t.deltaX,a=t.deltaY;i["default"].dispatch({type:"EDITOR_RESIZE",data:{x:e,y:a,type:p}}),t.preventDefault()}),t.on("panend",function(t){var e=t.deltaX,a=t.deltaY;i["default"].dispatch({type:"EDITOR_RESIZE_END",data:{x:e,y:a,type:p}}),t.preventDefault()})})})}).call(e,a(2))}});