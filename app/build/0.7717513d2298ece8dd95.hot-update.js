webpackHotUpdatemojs_curve_editor(0,{42:function(t,e,o){(function(t){o(82),o(47),o(48),o(52),o(78),t.tag2("curve-editor",'<icons></icons> <resize-handle type="top"></resize-handle> <resize-handle type="right"></resize-handle> <resize-handle type="bottom"></resize-handle> <div class="{this.CLASSES[\'curve-editor__left\']}"> <icon-button shape="code"></icon-button> <a href="https://github.com/legomushroom/mojs-curve-editor" target="_blank" class="{this.CLASSES[\'curve-editor__mojs-logo\']}"> <icon shape="mojs-logo"></icon> </a> </div> <curve adc="{this.CLASSES[\'curve-editor__right\']}"></curve>',"",'class="{this.CLASSES[\'curve-editor\']}" riot-style="{this.getStyle()}"',function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var s=this,a=o(77),i=e(a),r=o(87),n=e(r);o(43),this.CLASSES=o(56);var c=t,d=c.store;d.subscribe(this.update.bind(this)),this.on("mount",function(){(0,n["default"])(new i["default"](s.root)).on("pan",function(t){s.x=t.deltaX,s.y=t.deltaY,s.update()}).on("panend",function(t){var e=t.deltaX,o=t.deltaY,a=d.getState().present.translate;s.x=s.y=0,d.dispatch({type:"EDITOR_TRANSLATE",data:{x:a.x+e,y:a.y+o}})})}),this.getStyle=function(){var t=d.getState().present,e=t.tempResize_top;378-e<378&&(e=0);var o=Math.abs(e%378),a=parseInt(e/378);console.log(o),o<5&&(e=378*a);var i=t.translate,r="height: "+(378-e)+"px",n=(s.x||0)+i.x,c=(s.y||0)+i.y,l="transform: translate("+n+"px, "+(c+e)+"px)";return""+mojs.h.prefix.css+l+"; "+l+"; "+r}})}).call(e,o(2))}});