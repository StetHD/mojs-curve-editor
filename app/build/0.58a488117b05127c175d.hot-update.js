webpackHotUpdatemojs_curve_editor(0,{42:function(t,e,o){(function(t){o(43),o(47),o(48),o(52),o(!function(){var t=new Error('Cannot find module "./cureve"');throw t.code="MODULE_NOT_FOUND",t}());var e=o(77);t.tag2("curve-editor",'<icons></icons> <div class="{this.CLASSES[\'curve-editor__left\']}"> <icon-button shape="code"></icon-button> <a href="https://github.com/legomushroom/mojs-curve-editor" target="_blank" class="{this.CLASSES[\'curve-editor__mojs-logo\']}"> <icon shape="mojs-logo"></icon> </a> </div> <div class="{this.CLASSES[\'curve-editor__right\']}"></div>',"",'class="{this.CLASSES[\'curve-editor\']}" riot-style="{this.getStyle()}"',function(t){"use strict";var n=this,r=t,i=r.store;this.CLASSES=o(56),i.subscribe(function(){n.update()}),this.on("mount",function(){var t=new e(n.root,{});t.on("pan",function(t){n.x=t.deltaX,n.y=t.deltaY,n.update()}),t.on("panend",function(t){var e=t.deltaX,o=t.deltaY,r=i.getState().present.translate;n.x=n.y=0,i.dispatch({type:"EDITOR_TRANSLATE",data:{x:r.x+e,y:r.y+o}})})}),this.getStyle=function(){var t=i.getState().present.translate,e=(n.x+t.x,n.y+t.y,"transform: translate("+(n.x+t.x)+"px, "+(n.y+t.y)+"px)");return""+mojs.h.prefix.css+e+"; "+e}})}).call(e,o(2))}});