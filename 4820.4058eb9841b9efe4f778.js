(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4820],{58887:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(94184),o=n.n(r),i=n(67294),u=n(32732),c=n(91118),a=n(48118),l=n(20817),s=n(85893);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=e.keyPositions,n=e.scale,r=void 0===n?.2:n,f=(e.styleOverrides,(0,i.useContext)(l.V).layout);return(0,s.jsx)(u.Z,{layout:f,bindings:[],scale:r,renderKey:function(e){var n,r=e.index;return(0,s.jsx)(c.Z,{onClick:function(){},selectable:!1,style:{pointerEvents:"none"},themeClass:o()((n={},y(n,a.Z.key,!0),y(n,a.Z.highlight,t.includes(r)),n),a.Z.keyMini)})}})}},15023:function(e,t,n){"use strict";n.d(t,{Z:function(){return Oe}});var r=n(39693),o=n.n(r),i=n(67294),u=n(45697),c=n.n(u),a=n(39316),l=n(32732),s=n(91118),f=n(94184),y=n.n(f),b=n(93379),p=n.n(b),d=n(7795),m=n.n(d),v=n(90569),h=n.n(v),g=n(3565),A=n.n(g),j=n(19216),S=n.n(j),O=n(44589),w=n.n(O),C=n(57141),E={};E.styleTagTransform=w(),E.setAttributes=A(),E.insert=h().bind(null,"head"),E.domAPI=m(),E.insertStyleElement=S(),p()(C.Z,E);var x=C.Z&&C.Z.locals?C.Z.locals:void 0,k=n(74691),P=n.n(k);function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(e,t){return{x:t.x-e.x,y:t.y-e.y}}function B(e,t){return e.x*t.y-e.y*t.x}function I(e,t){var n=D(e,2),r=n[0],o=n[1],i=D(t,2),u=i[0],c=i[1],a=M(r,o),l=M(u,c),s=B(a,M(o,u)),f=B(a,M(o,c)),y=B(l,M(c,r)),b=B(l,M(c,o));return Math.sign(s)!==Math.sign(f)&&Math.sign(y)!==Math.sign(b)}function Z(e){var t=D(e,4),n=t[0],r=t[1],o=t[2],i=t[3];return[[n,r],[r,o],[o,i],[i,n]]}function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===R(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,t)||U(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var q="add",V="remove",F="box",X="path",Y=(0,i.createContext)({});function G(e,t){var n=function(){var e=z((0,i.useReducer)(W,null,H),2),t=e[0],n=e[1],r=(0,i.useCallback)((function(e){return n({type:"set_style",style:e})}),[n]),o=(0,i.useCallback)((function(e){return n({type:"set_mode",mode:e})}),[n]);return[t,{setStyle:r,setMode:o,beginDrag:(0,i.useCallback)((function(e,t){return n({type:"begin",startPoint:e,offsetRect:t})}),[n]),endDrag:(0,i.useCallback)((function(){return n({type:"end"})}),[n]),drag:(0,i.useCallback)((function(e,t){return n({type:"drag",clientX:e,clientY:t})}),[n])}]}(),r=z(n,2),o=r[0],u=r[1],c=o.style,l=o.mode,s=o.start,f=o.rect,y=o.trail,b=u.setStyle,p=u.setMode,d=u.beginDrag,m=u.endDrag,v=u.drag,h=(0,i.useMemo)((function(){return f&&(Math.abs(f[0][0]-f[1][0])>3||Math.abs(f[0][1]-f[1][1])>3)}),[f]),g=(0,i.useMemo)((function(){return e.map(a.VW).reduce(a.FP)}),[e]),A=(0,i.useMemo)((function(){return h?c===F?function(e,t){var n=Z(function(e){var t=D(e,2),n=D(t[0],2),r=n[0],o=n[1],i=D(t[1],2),u=i[0],c=i[1];return[{x:r,y:o},{x:r,y:c},{x:u,y:c},{x:u,y:o}]}(e));return t.reduce((function(t,r,o){return(r.some((function(t){return n=e,o=(r=t).x,i=r.y,n[0][0]<o&&o<n[1][0]&&n[0][1]<i&&i<n[1][1];var n,r,o,i}))||Z(r).some((function(e){return n.some((function(t){return I(e,t)}))})))&&t.push(o),t}),[])}(f,e):function(e,t){var n=e.map((function(e){var t=D(e,2);return{x:t[0],y:t[1]}})).reduce((function(e,t,n,r){return n<r.length-1&&e.push([t,r[n+1]]),e}),[]);return t.reduce((function(e,t,r){return Z(t).some((function(e){return n.some((function(t){return I(e,t)}))}))&&e.push(r),e}),[])}(y,e):[]}),[e,h,c,f,y]),j=(0,i.useCallback)((function(e){return b(e)}),[b]),S=(0,i.useCallback)((function(e){l===q&&e.shiftKey&&p(V)}),[l,p]),O=(0,i.useCallback)((function(e){l!==V||e.shiftKey||p(q)}),[l,p]),w=(0,i.useCallback)((function(e){var t=function(e){for(;(e=e.parentNode)&&("relative"!==e.style.position||!e.getBoundingClientRect().height););return e}(e.target).getBoundingClientRect(),n=e.clientX,r=e.clientY;e.preventDefault(),d([n,r],t)}),[d]),C=(0,i.useCallback)((function(e){s&&v(e.clientX,e.clientY)}),[s,v]),E=(0,i.useCallback)((function(e){s&&(h&&t({mode:l,intersections:A}),m())}),[t,A,l,s,h,m]);return(0,i.useEffect)((function(){return window.addEventListener("mouseup",E),window.addEventListener("mousemove",C),window.addEventListener("keydown",S),window.addEventListener("keyup",O),function(){window.removeEventListener("mouseup",E),window.removeEventListener("mousemove",C),window.removeEventListener("keydown",S),window.removeEventListener("keyup",O)}}),[E,C,S,O]),L(L({},o),{},{boundingBox:g,selecting:h,intersections:A,onMouseDown:w,onChangeStyle:j})}function H(){return{style:F,mode:q,start:null,trail:null,rect:null,offsetRect:null}}function W(e,t){switch(t.type){case"set_style":return L(L({},e),{},{style:t.style});case"set_mode":return L(L({},e),{},{mode:t.mode});case"begin":return L(L({},e),{},{start:[t.startPoint[0]-t.offsetRect.left,t.startPoint[1]-t.offsetRect.top],offsetRect:t.offsetRect,trail:[]});case"end":return L(L({},e),{},{start:null,negate:!1,trail:null,rect:null});case"drag":return L(L({},e),{},{rect:$(e,t),trail:J(e,t)});default:throw new Error('Unknown action "'.concat(t.type,'"'))}}function $(e,t){var n=e.start,r=e.offsetRect,o=t.clientX,i=t.clientY,u=z(n,2),c=u[0],a=u[1],l=P()(o,r.left,r.right)-r.left,s=P()(i,r.top,r.bottom)-r.top;return[[Math.min(l,c),Math.min(s,a)],[Math.max(l,c),Math.max(s,a)]]}function J(e,t){var n,r=e.trail,o=e.offsetRect,i=t.clientX,u=t.clientY,c=[i-o.left,u-o.top];return[].concat(function(e){if(Array.isArray(e))return K(e)}(n=r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||U(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[c])}var Q=n(85893);function ee(e){return ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(e)}function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,t)||ne(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){if(e){if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?re(e,t):void 0}}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ue(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==ee(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==ee(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===ee(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ce(e){var t=e.style,n=e.selecting,r=e.children,o=e.onMouseDown,i=e.mode,u=e.intersections;return(0,Q.jsx)("div",{style:{position:"relative"},children:(0,Q.jsx)("div",{onMouseDown:o,className:y()(x.container,ue({},x.selecting,n)),children:(0,Q.jsxs)(Y.Provider,{value:{dragMode:i,intersections:u},children:[r,n&&t===F&&(0,Q.jsx)(ae,ie({},e)),n&&t===X&&(0,Q.jsx)(le,ie({},e))]})})})}function ae(e){var t=e.mode,n=te(e.rect,2),r=n[0],o=n[1],i=Math.abs(r[0]-o[0])+"px",u=Math.abs(r[1]-o[1])+"px";return(0,Q.jsx)("div",{className:y()(x.overlay,ue({},x.negate,t===V)),style:{position:"absolute",top:r[1]+"px",left:r[0]+"px",width:i,height:u}})}function le(e){var t,n=e.start,r=e.trail,o=e.boundingBox,i=["M ".concat(n[0]," ").concat(n[1])].concat((t=r.map((function(e){var t=te(e,2),n=t[0],r=t[1];return"L ".concat(n," ").concat(r)})),function(e){if(Array.isArray(e))return re(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||ne(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).join("\n"),u="0 0 ".concat(o.max.x," ").concat(o.max.y);return(0,Q.jsx)("div",{style:{position:"absolute",pointerEvents:"none",top:0,left:0,width:"100%",height:"100%"},children:(0,Q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:u,children:(0,Q.jsx)("path",{fill:"none",stroke:"royalblue",strokeWidth:"2",strokeDasharray:"4 2",d:i})})})}var se=n(48118),fe=n(2062),ye=n(20817);function be(e){return be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},be(e)}function pe(e){return function(e){if(Array.isArray(e))return Ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ge(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){ve(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ve(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==be(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==be(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===be(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function he(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=ge(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw i}}}}function ge(e,t){if(e){if("string"==typeof e)return Ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ae(e,t):void 0}}function Ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var je=.2,Se=function(e){var t,n=(0,a.eG)(e,{scale:je}),r=he(n);try{for(r.s();!(t=r.n()).done;){var o,i=he(t.value);try{for(i.s();!(o=i.n()).done;){var u=o.value;u.x*=je,u.y*=je}}catch(e){i.e(e)}finally{i.f()}}}catch(e){r.e(e)}finally{r.f()}return n};function Oe(e){var t,n,r,u,c,a,f,y,b,p=e.value,d=e.prompt,m=e.onUpdate,v=(0,i.useContext)(ye.V).layout,h=(0,i.useMemo)((function(){return Se(v)}),[v]),g=(y=(0,i.useReducer)((function(e,t){switch(t){case"INCREMENT_MANUAL_SELECTION":return me(me({},e),{},{manualSelectionCount:e.manualSelectionCount+1});case"INCREMENT_MANUAL_DESELECTION":return me(me({},e),{},{manualDeSelectionCount:e.manualDeSelectionCount+1});case"TRACK_DRAG_SELECTION":return me(me({},e),{},{usedDragSelection:!0});case"TRACK_DRAG_DESELECTION":return me(me({},e),{},{usedDragDeSelection:!0});default:throw new Error("Unrecognized action type in ".concat(t))}}),{manualSelectionCount:0,manualDeSelectionCount:0,usedDragSelection:!1,usedDragDeSelection:!1}),b=2,n=(t=function(e){if(Array.isArray(e))return e}(y)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(y,b)||ge(y,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],r=t[1],u=(0,i.useCallback)((function(){return r("INCREMENT_MANUAL_SELECTION")}),[r]),c=(0,i.useCallback)((function(){return r("INCREMENT_MANUAL_DESELECTION")}),[r]),a=(0,i.useCallback)((function(){return r("TRACK_DRAG_SELECTION")}),[r]),f=(0,i.useCallback)((function(){return r("TRACK_DRAG_DESELECTION")}),[r]),{showSelectTip:!n.usedDragSelection&&n.manualSelectionCount>3,showDeSelectTip:!n.usedDragDeSelection&&n.manualDeSelectionCount>3,actions:{manualSelection:u,manualDeSelection:c,dragSelection:a,dragDeSelection:f}}),A=g.showSelectTip,j=g.showDeSelectTip,S=g.actions,O=(0,i.useCallback)((function(e){var t=e.mode,n=e.intersections,r=t===V;r?S.dragDeSelection():S.dragSelection(),m(r?p.filter((function(e){return!n.includes(e)})):[].concat(pe(p),pe(n)))}),[p,m,S]),w=(0,i.useCallback)((function(e){var t=p.includes(e);t?S.manualDeSelection():S.manualSelection(),m(t?p.filter((function(t){return t!==e})):[].concat(pe(p),[e]))}),[p,m,S]),C=G(h,O),E=C.intersections,x=C.mode,k=p,P=x===V?[]:E.filter((function(e){return!k.includes(e)})),D=x===V?E.filter((function(e){return k.includes(e)})):[];return(0,Q.jsxs)(ce,me(me({},C),{},{children:[(0,Q.jsx)(l.Z,{layout:v,bindings:[],scale:je,renderKey:function(e){var t=e.index;return(0,Q.jsx)(s.Z,{onClick:function(){return w(t)},themeClass:o()([se.Z.key,k.includes(t)&&se.Z.highlight,P.includes(t)&&se.Z.previewAdd,D.includes(t)&&se.Z.previewRemove]).join(" ")})}}),d&&(0,Q.jsx)("prompt",{}),A&&(0,Q.jsx)(fe.Z,{className:se.Z.tip,children:(0,Q.jsx)("span",{children:"Drag to select a region"})}),j&&(0,Q.jsx)(fe.Z,{className:se.Z.tip,children:(0,Q.jsx)("span",{children:"Shift+Drag to de-select a region"})})]}))}Oe.propTypes={onUpdate:c().func.isRequired,value:c().arrayOf(c().number).isRequired,prompt:c().node}},32732:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(45697),o=n.n(r),i=n(67294),u=n(78718),c=n.n(u),a=n(39316),l=n(95872);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={x:o().number.isRequired,y:o().number.isRequired},d={a:o().number,rx:o().number,ry:o().number},m={u:o().number,h:o().number},v=o().shape(y(y(y({},p),d),m)),h=o().arrayOf(v),g=n(85893);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}var j=["keyLayout","renderOptions","children"];function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==A(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===A(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(e){return c()(e,["x","y"])},E=function(e){return{x:e.rx,y:e.ry,a:e.r}},x=function(e){var t=e.w,n=void 0===t?1:t,r=e.u,o=void 0===r?n:r,i=e.h;return{u:o,h:void 0===i?1:i}};function k(e){var t=e.keyLayout,n=e.renderOptions,r=e.children,o=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,j),i=C(t),u=E(t),c=x(t),s=(0,a.Pi)(i,c,u,n);return(0,g.jsx)("div",O(O({className:l.Z.placer,style:s,"data-u":c.u,"data-h":c.h},o),{},{children:r}))}k.propTypes={scale:o().number,keyLayout:v.isRequired},k.defaultProps={scale:1};var P=k,D=n(20817);function T(e){var t=e.layout,n=e.renderKey,r=e.scale,o=e.renderOptions,u=(0,i.useContext)(D.V),c=u.layout,a=u.layoutBbox,l=t||c,s=(0,i.useMemo)((function(){return{width:"".concat(r*(a.max.x-a.min.x),"px"),height:"".concat(r*(a.max.y-a.min.y),"px")}}),[r,a]),f=(0,i.useMemo)((function(){return{transform:"scale(".concat(r,")"),transformOrigin:0}}),[r]);return(0,g.jsx)("div",{style:s,children:(0,g.jsx)("div",{style:f,children:l.map((function(e,t){return(0,g.jsx)(P,{keyLayout:e,renderOptions:o,children:n({index:t,keyLayout:e})},t)}))})})}T.propTypes={layout:h,renderKey:o().func.isRequired,scale:o().number},T.defaultProps={scale:1}},57141:function(e,t,n){"use strict";var r=n(87537),o=n.n(r),i=n(23645),u=n.n(i)()(o());u.push([e.id,".beN98YLA7pgetUFERZiy.l89ME8s61u2Ef93va4w0 {\n  cursor: crosshair;\n}\n\n.mpuOZiVdjhHzyeC13usG {\n  position: relative;\n  background-color: hsla(225, 73%, 57%, 0.103);\n  border: 3px dotted hsla(225, 73%, 57%, 0.7);\n  pointer-events: none;\n  box-sizing: border-box;\n}\n\n.mpuOZiVdjhHzyeC13usG.B2x7xPuxYUZ62rCQlDVo {\n  background-color: rgba(120, 120, 120, 0.1);\n  border-color: rgba(120, 120, 120, 0.25);\n}\n","",{version:3,sources:["webpack://./src/Keyboard/Common/DragSelector/dragSelector.module.css"],names:[],mappings:"AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,4CAA4C;EAC5C,2CAA2C;EAC3C,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,0CAA0C;EAC1C,uCAAuC;AACzC",sourcesContent:[".container.selecting {\n  cursor: crosshair;\n}\n\n.overlay {\n  position: relative;\n  background-color: hsla(225, 73%, 57%, 0.103);\n  border: 3px dotted hsla(225, 73%, 57%, 0.7);\n  pointer-events: none;\n  box-sizing: border-box;\n}\n\n.overlay.negate {\n  background-color: rgba(120, 120, 120, 0.1);\n  border-color: rgba(120, 120, 120, 0.25);\n}\n"],sourceRoot:""}]),u.locals={container:"beN98YLA7pgetUFERZiy",selecting:"l89ME8s61u2Ef93va4w0",overlay:"mpuOZiVdjhHzyeC13usG",negate:"B2x7xPuxYUZ62rCQlDVo"},t.Z=u},49040:function(e,t,n){"use strict";var r=n(87537),o=n.n(r),i=n(23645),u=n.n(i)()(o());u.push([e.id,".lD5TsvdIbEAHNdmhfnlb {\n  background-color: var(--key-bg-base);\n}\n.yk89E4zK9zlO69OXhKn5:hover {\n  cursor: pointer;\n  border: 4px solid var(--selection);\n  box-sizing: border-box;\n}\n\n.pzTvsxKjpy6MqcFhxh9j {\n  background-color: var(--selection);\n}\n.pzTvsxKjpy6MqcFhxh9j:hover {\n  background-color: var(--hover-selection);\n}\n\n.r_Sdklnj57CE2ZjnBDw6 {\n  background-color: var(--hover-selection);\n  filter: brightness(135%);\n}\n\n.Ich9T1nSzHs1a84insfp {\n  background-color: var(--hover-selection);\n  filter: brightness(75%);\n}\n\n._3U1zi1J1sXT41AzpAA1j {\n  position: absolute;\n  bottom: 0;\n  right: 50%;\n  transform: translate(50%, 100%);\n}\n\n.f38_8PxgThEPWT2hn3qF {\n  border-radius: 1px;\n}","",{version:3,sources:["webpack://./src/Keyboard/Common/keyPositionSelectorStyles.module.css"],names:[],mappings:"AAAA;EACE,oCAAoC;AACtC;AACA;EACE,eAAe;EACf,kCAAkC;EAClC,sBAAsB;AACxB;;AAEA;EACE,kCAAkC;AACpC;AACA;EACE,wCAAwC;AAC1C;;AAEA;EACE,wCAAwC;EACxC,wBAAwB;AAC1B;;AAEA;EACE,wCAAwC;EACxC,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;AACpB",sourcesContent:[".key {\n  background-color: var(--key-bg-base);\n}\n.selectable:hover {\n  cursor: pointer;\n  border: 4px solid var(--selection);\n  box-sizing: border-box;\n}\n\n.highlight {\n  background-color: var(--selection);\n}\n.highlight:hover {\n  background-color: var(--hover-selection);\n}\n\n.previewAdd {\n  background-color: var(--hover-selection);\n  filter: brightness(135%);\n}\n\n.previewRemove {\n  background-color: var(--hover-selection);\n  filter: brightness(75%);\n}\n\n.tip {\n  position: absolute;\n  bottom: 0;\n  right: 50%;\n  transform: translate(50%, 100%);\n}\n\n.keyMini {\n  border-radius: 1px;\n}"],sourceRoot:""}]),u.locals={key:"lD5TsvdIbEAHNdmhfnlb",selectable:"yk89E4zK9zlO69OXhKn5",highlight:"pzTvsxKjpy6MqcFhxh9j",previewAdd:"r_Sdklnj57CE2ZjnBDw6",previewRemove:"Ich9T1nSzHs1a84insfp",tip:"_3U1zi1J1sXT41AzpAA1j",keyMini:"f38_8PxgThEPWT2hn3qF"},t.Z=u},29750:function(e){e.exports=function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}},57406:function(e,t,n){var r=n(71811),o=n(10928),i=n(40292),u=n(40327);e.exports=function(e,t){return t=r(t,e),null==(e=i(e,t))||delete e[u(o(t))]}},60696:function(e,t,n){var r=n(68630);e.exports=function(e){return r(e)?void 0:e}},40292:function(e,t,n){var r=n(97786),o=n(14259);e.exports=function(e,t){return t.length<2?e:r(e,o(t,0,-1))}},74691:function(e,t,n){var r=n(29750),o=n(14841);e.exports=function(e,t,n){return void 0===n&&(n=t,t=void 0),void 0!==n&&(n=(n=o(n))==n?n:0),void 0!==t&&(t=(t=o(t))==t?t:0),r(o(e),t,n)}},68630:function(e,t,n){var r=n(44239),o=n(85924),i=n(37005),u=Function.prototype,c=Object.prototype,a=u.toString,l=c.hasOwnProperty,s=a.call(Object);e.exports=function(e){if(!i(e)||"[object Object]"!=r(e))return!1;var t=o(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==s}},10928:function(e){e.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},57557:function(e,t,n){var r=n(29932),o=n(85990),i=n(57406),u=n(71811),c=n(98363),a=n(60696),l=n(99021),s=n(46904),f=l((function(e,t){var n={};if(null==e)return n;var l=!1;t=r(t,(function(t){return t=u(t,e),l||(l=t.length>1),t})),c(e,s(e),n),l&&(n=o(n,7,a));for(var f=t.length;f--;)i(n,t[f]);return n}));e.exports=f},48118:function(e,t,n){"use strict";var r=n(93379),o=n.n(r),i=n(7795),u=n.n(i),c=n(90569),a=n.n(c),l=n(3565),s=n.n(l),f=n(19216),y=n.n(f),b=n(44589),p=n.n(b),d=n(49040),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=u(),m.insertStyleElement=y(),o()(d.Z,m),t.Z=d.Z&&d.Z.locals?d.Z.locals:void 0}}]);
//# sourceMappingURL=4820.4058eb9841b9efe4f778.js.map