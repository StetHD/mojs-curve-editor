webpackHotUpdatemojs_curve_editor(0,{42:function(t,e,o){(function(t){o(43),o(47),o(48),o(52),o(78);var e=o(77);t.tag2("curve-editor",'<icons></icons> <resize-handle type="top"></resize-handle> <resize-handle type="right"></resize-handle> <resize-handle type="bottom"></resize-handle> <div class="{this.CLASSES[\'curve-editor__left\']}"> <icon-button shape="code"></icon-button> <a href="https://github.com/legomushroom/mojs-curve-editor" target="_blank" class="{this.CLASSES[\'curve-editor__mojs-logo\']}"> <icon shape="mojs-logo"></icon> </a> </div> <curve adc="{this.CLASSES[\'curve-editor__right\']}"></curve>',"",'class="{this.CLASSES[\'curve-editor\']}" riot-style="{this.getStyle()}"',function(t){"use strict";var s=this;o(82),this.CLASSES=o(56);var i=t,r=i.store;r.subscribe(this.update.bind(this)),this.on("mount",function(){var t=new e(s.root,{});t.on("pan",function(t){s.x=t.deltaX,s.y=t.deltaY,s.update()}),t.on("panend",function(t){var e=t.deltaX,o=t.deltaY,i=r.getState().present.translate;s.x=s.y=0,r.dispatch({type:"EDITOR_TRANSLATE",data:{x:i.x+e,y:i.y+o}})})}),this.getStyle=function(){var t=r.getState().present.translate,e=(s.x||0)+t.x,o=(s.y||0)+t.y,i="transform: translate("+e+"px, "+o+"px)";return""+mojs.h.prefix.css+i+"; "+i}})}).call(e,o(2))}});