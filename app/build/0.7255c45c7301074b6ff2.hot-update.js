webpackHotUpdatemojs_curve_editor(0,{82:function(t,s,a){(function(t){a(2),t.tag2("resize-handle",'<icon shape="ellipsis"></icon>',"",'class="{this.applyClass}"',function(t){"use strict";var s=this,o=a(85),e=a(77);this.applyClass=o["resize-handle"]+" "+(t.adc||""),this.applyClass=this.applyClass+" "+o["resize-handle--"+this.opts.type],a(83),a(50);var i=this.opts.store;console.log(this.opts,this.opts.store,this.store,i),this.on("mount",function(){var t=new e(s.root,{});t.on("pan",function(t){var s=t.deltaX,a=t.deltaY;console.log(i),i.dispatch({type:"EDITOR_RESIZE",data:{x:s,y:a}})}),t.on("panend",function(t){var s=t.deltaX,a=t.deltaY;console.log(i),i.dispatch({type:"EDITOR_RESIZE_END",data:{x:s,y:a}})})})})}).call(s,a(2))}});