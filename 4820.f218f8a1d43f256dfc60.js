(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4820],{58887:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(94184),o=n.n(r),i=n(32732),u=n(91118),c=n(48118),a=n(85893);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){var t=e.keyPositions;return(0,a.jsx)(i.i,{bindings:[],renderKey:function(e){var n,r=e.index;return(0,a.jsx)(u.Z,{onClick:function(){},selectable:!1,style:{pointerEvents:"none"},themeClass:o()((n={},s(n,c.Z.key,!0),s(n,c.Z.highlight,t.includes(r)),n),c.Z.keyMini)})}})}},15023:function(e,t,n){"use strict";n.d(t,{Z:function(){return he}});var r=n(67294),o=n(45697),i=n.n(o),u=n(32732),c=n(91118),a=n(94184),l=n.n(a),s=n(93379),f=n.n(s),y=n(7795),b=n.n(y),p=n(90569),d=n.n(p),m=n(3565),v=n.n(m),h=n(19216),g=n.n(h),A=n(44589),j=n.n(A),O=n(57141),S={};S.styleTagTransform=j(),S.setAttributes=v(),S.insert=d().bind(null,"head"),S.domAPI=b(),S.insertStyleElement=g(),f()(O.Z,S);var w=O.Z&&O.Z.locals?O.Z.locals:void 0,C=n(74691),E=n.n(C),x=n(39316);function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D(e,t){return{x:t.x-e.x,y:t.y-e.y}}function T(e,t){return e.x*t.y-e.y*t.x}function M(e,t){var n=P(e,2),r=n[0],o=n[1],i=P(t,2),u=i[0],c=i[1],a=D(r,o),l=D(u,c),s=T(a,D(o,u)),f=T(a,D(o,c)),y=T(l,D(c,r)),b=T(l,D(c,o));return Math.sign(s)!==Math.sign(f)&&Math.sign(y)!==Math.sign(b)}function B(e){var t=P(e,4),n=t[0],r=t[1],o=t[2],i=t[3];return[[n,r],[r,o],[o,i],[i,n]]}function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==Z(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===Z(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,t)||_(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K="add",U="remove",q="box",F="path",Y=(0,r.createContext)({});function X(e,t){var n=function(){var e=L((0,r.useReducer)(G,null,V),2),t=e[0],n=e[1],o=(0,r.useCallback)((function(e){return n({type:"set_style",style:e})}),[n]),i=(0,r.useCallback)((function(e){return n({type:"set_mode",mode:e})}),[n]);return[t,{setStyle:o,setMode:i,beginDrag:(0,r.useCallback)((function(e,t){return n({type:"begin",startPoint:e,offsetRect:t})}),[n]),endDrag:(0,r.useCallback)((function(){return n({type:"end"})}),[n]),drag:(0,r.useCallback)((function(e,t){return n({type:"drag",clientX:e,clientY:t})}),[n])}]}(),o=L(n,2),i=o[0],u=o[1],c=i.style,a=i.mode,l=i.start,s=i.rect,f=i.trail,y=u.setStyle,b=u.setMode,p=u.beginDrag,d=u.endDrag,m=u.drag,v=(0,r.useMemo)((function(){return s&&(Math.abs(s[0][0]-s[1][0])>3||Math.abs(s[0][1]-s[1][1])>3)}),[s]),h=(0,r.useMemo)((function(){return e.map(x.VW).reduce(x.FP)}),[e]),g=(0,r.useMemo)((function(){return v?c===q?function(e,t){var n=B(function(e){var t=P(e,2),n=P(t[0],2),r=n[0],o=n[1],i=P(t[1],2),u=i[0],c=i[1];return[{x:r,y:o},{x:r,y:c},{x:u,y:c},{x:u,y:o}]}(e));return t.reduce((function(t,r,o){return(r.some((function(t){return n=e,o=(r=t).x,i=r.y,n[0][0]<o&&o<n[1][0]&&n[0][1]<i&&i<n[1][1];var n,r,o,i}))||B(r).some((function(e){return n.some((function(t){return M(e,t)}))})))&&t.push(o),t}),[])}(s,e):function(e,t){var n=e.map((function(e){var t=P(e,2);return{x:t[0],y:t[1]}})).reduce((function(e,t,n,r){return n<r.length-1&&e.push([t,r[n+1]]),e}),[]);return t.reduce((function(e,t,r){return B(t).some((function(e){return n.some((function(t){return M(e,t)}))}))&&e.push(r),e}),[])}(f,e):[]}),[e,v,c,s,f]),A=(0,r.useCallback)((function(e){return y(e)}),[y]),j=(0,r.useCallback)((function(e){a===K&&e.shiftKey&&b(U)}),[a,b]),O=(0,r.useCallback)((function(e){a!==U||e.shiftKey||b(K)}),[a,b]),S=(0,r.useCallback)((function(e){var t=function(e){for(;(e=e.parentNode)&&("relative"!==e.style.position||!e.getBoundingClientRect().height););return e}(e.target).getBoundingClientRect(),n=e.clientX,r=e.clientY;e.preventDefault(),p([n,r],t)}),[p]),w=(0,r.useCallback)((function(e){l&&m(e.clientX,e.clientY)}),[l,m]),C=(0,r.useCallback)((function(e){l&&(v&&t({mode:a,intersections:g}),d())}),[t,g,a,l,v,d]);return(0,r.useEffect)((function(){return window.addEventListener("mouseup",C),window.addEventListener("mousemove",w),window.addEventListener("keydown",j),window.addEventListener("keyup",O),function(){window.removeEventListener("mouseup",C),window.removeEventListener("mousemove",w),window.removeEventListener("keydown",j),window.removeEventListener("keyup",O)}}),[C,w,j,O]),R(R({},i),{},{boundingBox:h,selecting:v,intersections:g,onMouseDown:S,onChangeStyle:A})}function V(){return{style:q,mode:K,start:null,trail:null,rect:null,offsetRect:null}}function G(e,t){switch(t.type){case"set_style":return R(R({},e),{},{style:t.style});case"set_mode":return R(R({},e),{},{mode:t.mode});case"begin":return R(R({},e),{},{start:[t.startPoint[0]-t.offsetRect.left,t.startPoint[1]-t.offsetRect.top],offsetRect:t.offsetRect,trail:[]});case"end":return R(R({},e),{},{start:null,negate:!1,trail:null,rect:null});case"drag":return R(R({},e),{},{rect:H(e,t),trail:W(e,t)});default:throw new Error('Unknown action "'.concat(t.type,'"'))}}function H(e,t){var n=e.start,r=e.offsetRect,o=t.clientX,i=t.clientY,u=L(n,2),c=u[0],a=u[1],l=E()(o,r.left,r.right)-r.left,s=E()(i,r.top,r.bottom)-r.top;return[[Math.min(l,c),Math.min(s,a)],[Math.max(l,c),Math.max(s,a)]]}function W(e,t){var n,r=e.trail,o=e.offsetRect,i=t.clientX,u=t.clientY,c=[i-o.left,u-o.top];return[].concat(function(e){if(Array.isArray(e))return z(e)}(n=r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||_(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[c])}var $=n(85893);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,t)||ee(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==J(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===J(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e){var t=e.style,n=e.selecting,r=e.children,o=e.onMouseDown,i=e.mode,u=e.intersections;return(0,$.jsx)("div",{style:{position:"relative"},children:(0,$.jsx)("div",{onMouseDown:o,className:l()(w.container,oe({},w.selecting,n)),children:(0,$.jsxs)(Y.Provider,{value:{dragMode:i,intersections:u},children:[r,n&&t===q&&(0,$.jsx)(ue,re({},e)),n&&t===F&&(0,$.jsx)(ce,re({},e))]})})})}function ue(e){var t=e.mode,n=Q(e.rect,2),r=n[0],o=n[1],i=Math.abs(r[0]-o[0])+"px",u=Math.abs(r[1]-o[1])+"px";return(0,$.jsx)("div",{className:l()(w.overlay,oe({},w.negate,t===U)),style:{position:"absolute",top:r[1]+"px",left:r[0]+"px",width:i,height:u}})}function ce(e){var t,n=e.start,r=e.trail,o=e.boundingBox,i=["M ".concat(n[0]," ").concat(n[1])].concat((t=r.map((function(e){var t=Q(e,2),n=t[0],r=t[1];return"L ".concat(n," ").concat(r)})),function(e){if(Array.isArray(e))return te(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||ee(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).join("\n"),u="0 0 ".concat(o.max.x," ").concat(o.max.y);return(0,$.jsx)("div",{style:{position:"absolute",pointerEvents:"none",top:0,left:0,width:"100%",height:"100%"},children:(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:u,children:(0,$.jsx)("path",{fill:"none",stroke:"royalblue",strokeWidth:"2",strokeDasharray:"4 2",d:i})})})}var ae=n(48118),le=n(2062),se=n(20817);function fe(e){return fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe(e)}function ye(e){return function(e){if(Array.isArray(e))return ve(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||me(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){de(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function de(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==fe(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==fe(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===fe(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function me(e,t){if(e){if("string"==typeof e)return ve(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ve(e,t):void 0}}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function he(e){var t,n,o,i,a,s,f,y,b,p=e.value,d=e.prompt,m=e.onUpdate,v=(0,se.Z7)().polygons,h=(y=(0,r.useReducer)((function(e,t){switch(t){case"INCREMENT_MANUAL_SELECTION":return pe(pe({},e),{},{manualSelectionCount:e.manualSelectionCount+1});case"INCREMENT_MANUAL_DESELECTION":return pe(pe({},e),{},{manualDeSelectionCount:e.manualDeSelectionCount+1});case"TRACK_DRAG_SELECTION":return pe(pe({},e),{},{usedDragSelection:!0});case"TRACK_DRAG_DESELECTION":return pe(pe({},e),{},{usedDragDeSelection:!0});default:throw new Error("Unrecognized action type in ".concat(t))}}),{manualSelectionCount:0,manualDeSelectionCount:0,usedDragSelection:!1,usedDragDeSelection:!1}),b=2,n=(t=function(e){if(Array.isArray(e))return e}(y)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(y,b)||me(y,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],o=t[1],i=(0,r.useCallback)((function(){return o("INCREMENT_MANUAL_SELECTION")}),[o]),a=(0,r.useCallback)((function(){return o("INCREMENT_MANUAL_DESELECTION")}),[o]),s=(0,r.useCallback)((function(){return o("TRACK_DRAG_SELECTION")}),[o]),f=(0,r.useCallback)((function(){return o("TRACK_DRAG_DESELECTION")}),[o]),{showSelectTip:!n.usedDragSelection&&n.manualSelectionCount>3,showDeSelectTip:!n.usedDragDeSelection&&n.manualDeSelectionCount>3,actions:{manualSelection:i,manualDeSelection:a,dragSelection:s,dragDeSelection:f}}),g=h.showSelectTip,A=h.showDeSelectTip,j=h.actions,O=(0,r.useCallback)((function(e){var t=e.mode,n=e.intersections,r=t===U;r?j.dragDeSelection():j.dragSelection(),m(r?p.filter((function(e){return!n.includes(e)})):[].concat(ye(p),ye(n)))}),[p,m,j]),S=(0,r.useCallback)((function(e){var t=p.includes(e);t?j.manualDeSelection():j.manualSelection(),m(t?p.filter((function(t){return t!==e})):[].concat(ye(p),[e]))}),[p,m,j]),w=X(v,O),C=w.intersections,E=w.mode,x=p,P=E===U?[]:C.filter((function(e){return!x.includes(e)})),k=E===U?C.filter((function(e){return x.includes(e)})):[];return(0,$.jsxs)(ie,pe(pe({},w),{},{children:[(0,$.jsx)(u.i,{bindings:[],renderKey:function(e){var t,n=e.index;return(0,$.jsx)(c.Z,{onClick:function(){return S(n)},themeClass:l()(ae.Z.key,ae.Z.keyMini,(t={},de(t,ae.Z.highlight,x.includes(n)),de(t,ae.Z.previewAdd,P.includes(n)),de(t,ae.Z.previewRemove,k.includes(n)),t))})}}),d&&(0,$.jsx)("prompt",{}),g&&(0,$.jsx)(le.Z,{className:ae.Z.tip,children:(0,$.jsx)("span",{children:"Drag to select a region"})}),A&&(0,$.jsx)(le.Z,{className:ae.Z.tip,children:(0,$.jsx)("span",{children:"Shift+Drag to de-select a region"})})]}))}he.propTypes={onUpdate:i().func.isRequired,value:i().arrayOf(i().number).isRequired,prompt:i().node}},32732:function(e,t,n){"use strict";n.d(t,{i:function(){return R},Z:function(){return I}});var r=n(45697),o=n.n(r),i=n(67294),u=n(78718),c=n.n(u),a=n(39316),l=n(95872);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={x:o().number.isRequired,y:o().number.isRequired},d={a:o().number,rx:o().number,ry:o().number},m={u:o().number,h:o().number},v=o().shape(y(y(y({},p),d),m)),h=o().arrayOf(v),g=n(85893);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}var j=["keyLayout","renderOptions","children"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==A(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===A(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(e){return c()(e,["x","y"])},E=function(e){return{x:e.rx,y:e.ry,a:e.r}},x=function(e){var t=e.w,n=void 0===t?1:t,r=e.u,o=void 0===r?n:r,i=e.h;return{u:o,h:void 0===i?1:i}};function P(e){var t=e.keyLayout,n=e.renderOptions,r=e.children,o=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,j),i=C(t),u=E(t),c=x(t),s=(0,a.Pi)(i,c,u,n);return(0,g.jsx)("div",S(S({className:l.Z.placer,style:s,"data-u":c.u,"data-h":c.h},o),{},{children:r}))}P.propTypes={scale:o().number,keyLayout:v.isRequired},P.defaultProps={scale:1};var k=P,D=n(20817);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===T(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){var t=e.layout,n=e.renderKey,r=e.scale,o=e.renderOptions,u=(0,i.useContext)(D.VY),c=u.layout,l=u.layoutBbox,s=o?o.keySize/a.Cg:1,f=t||c,y=(0,i.useMemo)((function(){return{width:"".concat(r*s*(l.max.x-l.min.x),"px"),height:"".concat(r*s*(l.max.y-l.min.y),"px")}}),[r,s,l]),b=(0,i.useMemo)((function(){return{transform:"scale(".concat(r,")"),transformOrigin:0}}),[r]);return(0,g.jsx)("div",{style:y,children:(0,g.jsx)("div",{style:b,children:f.map((function(e,t){return(0,g.jsx)(k,{keyLayout:e,renderOptions:o,children:n({index:t,keyLayout:e})},t)}))})})}function R(e){var t=(0,D.Z7)().renderOptions;return(0,g.jsx)(I,B(B({},e),{},{renderOptions:t}))}I.propTypes={layout:h,renderKey:o().func.isRequired,scale:o().number},I.defaultProps={scale:1}},57141:function(e,t,n){"use strict";var r=n(87537),o=n.n(r),i=n(23645),u=n.n(i)()(o());u.push([e.id,".beN98YLA7pgetUFERZiy.l89ME8s61u2Ef93va4w0 {\n  cursor: crosshair;\n}\n\n.mpuOZiVdjhHzyeC13usG {\n  position: relative;\n  background-color: hsla(225, 73%, 57%, 0.103);\n  border: 3px dotted hsla(225, 73%, 57%, 0.7);\n  pointer-events: none;\n  box-sizing: border-box;\n}\n\n.mpuOZiVdjhHzyeC13usG.B2x7xPuxYUZ62rCQlDVo {\n  background-color: rgba(120, 120, 120, 0.1);\n  border-color: rgba(120, 120, 120, 0.25);\n}\n","",{version:3,sources:["webpack://./src/Keyboard/Common/DragSelector/dragSelector.module.css"],names:[],mappings:"AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,4CAA4C;EAC5C,2CAA2C;EAC3C,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,0CAA0C;EAC1C,uCAAuC;AACzC",sourcesContent:[".container.selecting {\n  cursor: crosshair;\n}\n\n.overlay {\n  position: relative;\n  background-color: hsla(225, 73%, 57%, 0.103);\n  border: 3px dotted hsla(225, 73%, 57%, 0.7);\n  pointer-events: none;\n  box-sizing: border-box;\n}\n\n.overlay.negate {\n  background-color: rgba(120, 120, 120, 0.1);\n  border-color: rgba(120, 120, 120, 0.25);\n}\n"],sourceRoot:""}]),u.locals={container:"beN98YLA7pgetUFERZiy",selecting:"l89ME8s61u2Ef93va4w0",overlay:"mpuOZiVdjhHzyeC13usG",negate:"B2x7xPuxYUZ62rCQlDVo"},t.Z=u},49040:function(e,t,n){"use strict";var r=n(87537),o=n.n(r),i=n(23645),u=n.n(i)()(o());u.push([e.id,'.lD5TsvdIbEAHNdmhfnlb {\n  background-color: var(--key-bg-base);\n}\n.yk89E4zK9zlO69OXhKn5:hover {\n  cursor: pointer;\n  border: 4px solid var(--selection);\n  box-sizing: border-box;\n}\n\n.pzTvsxKjpy6MqcFhxh9j {\n  background-color: var(--selection);\n}\n.pzTvsxKjpy6MqcFhxh9j:hover {\n  background-color: var(--hover-selection);\n}\n\n.r_Sdklnj57CE2ZjnBDw6 {\n  background-color: var(--hover-selection);\n  filter: brightness(135%);\n}\n\n.Ich9T1nSzHs1a84insfp {\n  background-color: var(--hover-selection);\n  filter: brightness(75%);\n}\n\n._3U1zi1J1sXT41AzpAA1j {\n  position: absolute;\n  bottom: 0;\n  right: 50%;\n  transform: translate(50%, 100%);\n}\n\n.f38_8PxgThEPWT2hn3qF {\n  border-radius: 1px;\n}\n\n@media not (prefers-color-scheme: dark) {\n  body:not([data-theme="dark"]) .f38_8PxgThEPWT2hn3qF:not(.pzTvsxKjpy6MqcFhxh9j) {\n    filter:brightness(95%);\n  }\n}',"",{version:3,sources:["webpack://./src/Keyboard/Common/keyPositionSelectorStyles.module.css"],names:[],mappings:"AAAA;EACE,oCAAoC;AACtC;AACA;EACE,eAAe;EACf,kCAAkC;EAClC,sBAAsB;AACxB;;AAEA;EACE,kCAAkC;AACpC;AACA;EACE,wCAAwC;AAC1C;;AAEA;EACE,wCAAwC;EACxC,wBAAwB;AAC1B;;AAEA;EACE,wCAAwC;EACxC,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF",sourcesContent:['.key {\n  background-color: var(--key-bg-base);\n}\n.selectable:hover {\n  cursor: pointer;\n  border: 4px solid var(--selection);\n  box-sizing: border-box;\n}\n\n.highlight {\n  background-color: var(--selection);\n}\n.highlight:hover {\n  background-color: var(--hover-selection);\n}\n\n.previewAdd {\n  background-color: var(--hover-selection);\n  filter: brightness(135%);\n}\n\n.previewRemove {\n  background-color: var(--hover-selection);\n  filter: brightness(75%);\n}\n\n.tip {\n  position: absolute;\n  bottom: 0;\n  right: 50%;\n  transform: translate(50%, 100%);\n}\n\n.keyMini {\n  border-radius: 1px;\n}\n\n@media not (prefers-color-scheme: dark) {\n  body:not([data-theme="dark"]) .keyMini:not(.highlight) {\n    filter:brightness(95%);\n  }\n}'],sourceRoot:""}]),u.locals={key:"lD5TsvdIbEAHNdmhfnlb",selectable:"yk89E4zK9zlO69OXhKn5",highlight:"pzTvsxKjpy6MqcFhxh9j",previewAdd:"r_Sdklnj57CE2ZjnBDw6",previewRemove:"Ich9T1nSzHs1a84insfp",tip:"_3U1zi1J1sXT41AzpAA1j",keyMini:"f38_8PxgThEPWT2hn3qF"},t.Z=u},29750:function(e){e.exports=function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}},57406:function(e,t,n){var r=n(71811),o=n(10928),i=n(40292),u=n(40327);e.exports=function(e,t){return t=r(t,e),null==(e=i(e,t))||delete e[u(o(t))]}},60696:function(e,t,n){var r=n(68630);e.exports=function(e){return r(e)?void 0:e}},40292:function(e,t,n){var r=n(97786),o=n(14259);e.exports=function(e,t){return t.length<2?e:r(e,o(t,0,-1))}},74691:function(e,t,n){var r=n(29750),o=n(14841);e.exports=function(e,t,n){return void 0===n&&(n=t,t=void 0),void 0!==n&&(n=(n=o(n))==n?n:0),void 0!==t&&(t=(t=o(t))==t?t:0),r(o(e),t,n)}},68630:function(e,t,n){var r=n(44239),o=n(85924),i=n(37005),u=Function.prototype,c=Object.prototype,a=u.toString,l=c.hasOwnProperty,s=a.call(Object);e.exports=function(e){if(!i(e)||"[object Object]"!=r(e))return!1;var t=o(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==s}},10928:function(e){e.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},57557:function(e,t,n){var r=n(29932),o=n(85990),i=n(57406),u=n(71811),c=n(98363),a=n(60696),l=n(99021),s=n(46904),f=l((function(e,t){var n={};if(null==e)return n;var l=!1;t=r(t,(function(t){return t=u(t,e),l||(l=t.length>1),t})),c(e,s(e),n),l&&(n=o(n,7,a));for(var f=t.length;f--;)i(n,t[f]);return n}));e.exports=f},48118:function(e,t,n){"use strict";var r=n(93379),o=n.n(r),i=n(7795),u=n.n(i),c=n(90569),a=n.n(c),l=n(3565),s=n.n(l),f=n(19216),y=n.n(f),b=n(44589),p=n.n(b),d=n(49040),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=u(),m.insertStyleElement=y(),o()(d.Z,m),t.Z=d.Z&&d.Z.locals?d.Z.locals:void 0}}]);
//# sourceMappingURL=4820.f218f8a1d43f256dfc60.js.map