webpackHotUpdatemojs_curve_editor(0,{42:function(t,e,o){(function(t){o(43),o(47),o(48),o(52),o(82),o(78);var e=o(77);t.tag2("curve-editor",'<icons></icons> <resize-handle type="top"></resize-handle> <resize-handle type="right"></resize-handle> <resize-handle type="bottom"></resize-handle> <div class="{this.CLASSES[\'curve-editor__left\']}"> <icon-button shape="code"></icon-button> <a href="https://github.com/legomushroom/mojs-curve-editor" target="_blank" class="{this.CLASSES[\'curve-editor__mojs-logo\']}"> <icon shape="mojs-logo"></icon> </a> </div> <curve adc="{this.CLASSES[\'curve-editor__right\']}"></curve>',"",'class="{this.CLASSES[\'curve-editor\']}" riot-style="{this.getStyle()}"',function(t){"use strict";var r=this;this.CLASSES=o(56);var s=t,a=s.store;a.subscribe(function(){r.update()}),this.on("mount",function(){var t=new e(r.root,{});t.on("pan",function(t){r.x=t.deltaX,r.y=t.deltaY,r.update()}),t.on("panend",function(t){var e=t.deltaX,o=t.deltaY,s=a.getState().present.translate;r.x=r.y=0,a.dispatch({type:"EDITOR_TRANSLATE",data:{x:s.x+e,y:s.y+o}})})}),this.getStyle=function(){var t=a.getState().present.translate,e=(r.x||0)+t.x,o=(r.y||0)+t.y,s="transform: translate("+e+"px, "+o+"px)";return""+mojs.h.prefix.css+s+"; "+s}})}).call(e,o(2))}});