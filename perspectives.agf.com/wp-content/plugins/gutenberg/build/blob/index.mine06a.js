!function(){"use strict";var e={d:function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{createBlobURL:function(){return u},getBlobByURL:function(){return i},getBlobTypeByURL:function(){return c},revokeBlobURL:function(){return f},isBlobURL:function(){return l}});const{createObjectURL:t,revokeObjectURL:o}=window.URL,r={};function u(e){const n=t(e);return r[n]=e,n}function i(e){return r[e]}function c(e){var n;return null===(n=i(e))||void 0===n?void 0:n.type.split("/")[0]}function f(e){r[e]&&o(e),delete r[e]}function l(e){return!(!e||!e.indexOf)&&0===e.indexOf("blob:")}(window.wp=window.wp||{}).blob=n}();