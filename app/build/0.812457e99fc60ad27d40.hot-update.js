webpackHotUpdatemojs_curve_editor(0,{42:function(t,e,o){(function(t){o(82),o(47),o(48),o(52),o(78),t.tag2("curve-editor",'<icons></icons> <resize-handle type="top"></resize-handle> <resize-handle type="right"></resize-handle> <resize-handle type="bottom"></resize-handle> <div class="{this.CLASSES[\'curve-editor__left\']}"> <icon-button shape="code"></icon-button> <a href="https://github.com/legomushroom/mojs-curve-editor" target="_blank" class="{this.CLASSES[\'curve-editor__mojs-logo\']}"> <icon shape="mojs-logo"></icon> </a> </div> <curve adc="{this.CLASSES[\'curve-editor__right\']}"></curve>',"",'class="{this.CLASSES[\'curve-editor\']}" riot-style="{this.getStyle()}"',function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var n=this,s=o(87);e(s),o(43),this.CLASSES=o(56);var i=o(77),r=t,a=r.store;a.subscribe(this.update.bind(this)),this.on("mount",function(){new i(n.root).on("tap",function(t){console.log("tap parent")}).on("tapend",function(t){console.log("tapend parent")})}),this.getStyle=function(){var t=a.getState().present.translate,e=(n.x||0)+t.x,o=(n.y||0)+t.y,s="transform: translate("+e+"px, "+o+"px)";return""+mojs.h.prefix.css+s+"; "+s}})}).call(e,o(2))}});