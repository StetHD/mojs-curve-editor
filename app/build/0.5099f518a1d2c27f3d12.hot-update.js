webpackHotUpdatemojs_curve_editor(0,[,function(e,t,r){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var n=r(4),o=t(n);r(42);var a=r(57),u=r(72),c=t(u);r(73);var i={translate:{x:-50,y:50},tempResizeTop:0,tempResizeRight:0,tempResizeBottom:0};console.clear();var d=function(){var e=arguments.length<=0||void 0===arguments[0]?i:arguments[0],t=arguments[1];switch(t.type){case"EDITOR_TRANSLATE":return(0,o["default"])({},e,{translate:t.data})}return e},s=(0,a.createStore)((0,c["default"])(d,{filter:function(e,t,r){return e.isRecord}}));document.addEventListener("DOMContentLoaded",function(){e.mount("curve-editor",{store:s})})}).call(t,r(2))}]);