webpackHotUpdatemojs_curve_editor(0,{82:function(t,a,s){(function(t){t.tag2("resize-handle",'<icon shape="ellipsis"></icon>',"",'class="{this.applyClass}"',function(t){"use strict";var a=this,e=s(85),n=s(77);this.applyClass=e["resize-handle"]+" "+(t.adc||""),this.applyClass=this.applyClass+" "+e["resize-handle--"+this.opts.type],s(83),s(50);var o=this.opts.store;this.on("mount",function(){var t=new n(a.root,{});t.on("pan",function(t){var a=t.deltaX,s=t.deltaY;console.log(o),o.dispatch({type:"EDITOR_RESIZE",data:{x:a,y:s}})}),t.on("panend",function(t){var a=t.deltaX,s=t.deltaY;console.log(o),o.dispatch({type:"EDITOR_RESIZE_END",data:{x:a,y:s}})})})})}).call(a,s(2))}});