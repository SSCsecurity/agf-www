!function(){var e={4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var u=o.apply(null,n);u&&e.push(u)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var a in n)r.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){"use strict";n.r(r),n.d(r,{BlockQuotation:function(){return y},Circle:function(){return i},Defs:function(){return f},G:function(){return u},HorizontalRule:function(){return m},LinearGradient:function(){return p},Path:function(){return a},Polygon:function(){return c},RadialGradient:function(){return s},Rect:function(){return l},SVG:function(){return v},Stop:function(){return d},View:function(){return g}});var e=n(4184),t=n.n(e),o=window.wp.element;const i=e=>(0,o.createElement)("circle",e),u=e=>(0,o.createElement)("g",e),a=e=>(0,o.createElement)("path",e),c=e=>(0,o.createElement)("polygon",e),l=e=>(0,o.createElement)("rect",e),f=e=>(0,o.createElement)("defs",e),s=e=>(0,o.createElement)("radialGradient",e),p=e=>(0,o.createElement)("linearGradient",e),d=e=>(0,o.createElement)("stop",e),v=e=>{let{className:n,isPressed:r,...i}=e;const u={...i,className:t()(n,{"is-pressed":r})||void 0,role:"img","aria-hidden":!0,focusable:!1};return(0,o.createElement)("svg",u)},m="hr",y="blockquote",g="div"}(),(window.wp=window.wp||{}).primitives=r}();