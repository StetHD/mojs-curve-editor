webpackHotUpdatemojs_curve_editor(0,[,function(e,n,t){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=t(4),r=n(o);t(42);var a=t(57),c=t(72),i=n(c);t(73),t(!function(){var e=new Error('Cannot find module "./resize-handle"');throw e.code="MODULE_NOT_FOUND",e}()),t(!function(){var e=new Error('Cannot find module "./icons"');throw e.code="MODULE_NOT_FOUND",e}()),t(!function(){var e=new Error('Cannot find module "./icon"');throw e.code="MODULE_NOT_FOUND",e}()),t(!function(){var e=new Error('Cannot find module "./icon-button"');throw e.code="MODULE_NOT_FOUND",e}()),t(!function(){var e=new Error('Cannot find module "./curve"');throw e.code="MODULE_NOT_FOUND",e}());var d={translate:{x:-50,y:50},tempResizeTop:0,tempResizeRight:0,tempResizeBottom:0};console.clear();var u=function(){var e=arguments.length<=0||void 0===arguments[0]?d:arguments[0],n=arguments[1];switch(n.type){case"EDITOR_TRANSLATE":return(0,r["default"])({},e,{translate:n.data})}return e},f=(0,a.createStore)((0,i["default"])(u,{filter:function(e,n,t){return e.isRecord}}));document.addEventListener("DOMContentLoaded",function(){e.mount("curve-editor",{store:f})})}).call(n,t(2))}]);