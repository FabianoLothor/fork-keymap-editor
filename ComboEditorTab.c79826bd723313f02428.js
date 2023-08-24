"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8315],{94062:function(n,e,r){r.d(e,{Z:function(){return a}});var t=r(41051),o=r(2968),i=r(85893);function a(n){var e=n.url,r=n.text;return(0,i.jsxs)(o.Z,{external:!0,href:e,children:[(0,i.jsx)(t.Z,{name:"book"})," ",(0,i.jsx)("span",{children:r})]})}},67691:function(n,e,r){r.r(e),r.d(e,{default:function(){return gn}});var t=r(67294),o=r(95998),i=r(45697),a=r.n(i),c=r(93379),l=r.n(c),s=r(7795),u=r.n(s),A=r(90569),p=r.n(A),d=r(3565),f=r.n(d),b=r(19216),m=r.n(b),y=r(44589),v=r.n(y),C=r(78207),h={};h.styleTagTransform=v(),h.setAttributes=f(),h.insert=p().bind(null,"head"),h.domAPI=u(),h.insertStyleElement=m(),l()(C.Z,h);var g=C.Z&&C.Z.locals?C.Z.locals:void 0,E=r(98371),x=r(85893);function j(){return(0,x.jsx)("p",{className:g.floatingMessage,children:"Click on a key to add it to the combo"})}function B(n){var e=n.keyPositions,r=n.onUpdate;return(0,x.jsxs)("div",{className:g.comboInputMap,children:[(0,x.jsx)(E.Z,{value:e,onUpdate:r}),e.length<2&&(0,x.jsx)(j,{})]})}B.propTypes={onUpdate:a().func.isRequired,keyPositions:a().arrayOf(a().number).isRequired};var w=B,k=r(82607),O=r(27926),S=r(41051),N=r(94062),P=r(86015),Z={};Z.styleTagTransform=v(),Z.setAttributes=f(),Z.insert=p().bind(null,"head"),Z.domAPI=u(),Z.insertStyleElement=m(),l()(P.Z,Z);var I=P.Z&&P.Z.locals?P.Z.locals:void 0,Y=r(56803);function U(n){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},U(n)}function X(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function D(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?X(Object(r),!0).forEach((function(e){R(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function R(n,e,r){return(e=function(n){var e=function(n,e){if("object"!==U(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,"string");if("object"!==U(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===U(e)?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function q(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function K(n){var e,r,o=n.value,i=n.validate,a=n.required,c=n.render,l=n.onUpdate,s=(0,t.useRef)(),u=(e=(0,t.useState)({value:o,editing:!1,attemptedEmpty:!1}),r=2,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i,a,c=[],l=!0,s=!1;try{if(i=(r=r.call(n)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(t=i.call(r)).done)&&(c.push(t.value),c.length!==e);l=!0);}catch(n){s=!0,o=n}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,r)||function(n,e){if(n){if("string"==typeof n)return q(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(n,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),A=u[0],p=u[1],d=A.attemptedEmpty?"cannot be empty":i&&i(A.value),f=(0,t.useCallback)((function(n){n&&(n.focus(),n.select())}),[]),b=(0,t.useCallback)((function(){p((function(n){return D(D({},n),{},{editing:!1})}))}),[p]),m=(0,t.useCallback)((function(n){s.current&&!s.current.contains(n.target)&&b()}),[s,b]);return(0,t.useEffect)((function(){return document.addEventListener("click",m),function(){return document.removeEventListener("click",m)}}),[m]),A.editing?(0,x.jsxs)("span",{className:I.container,ref:s,children:[(0,x.jsx)("input",{ref:f,value:A.value,onChange:function(n){return p(D(D({},A),{},{attemptedEmpty:!1,value:n.target.value}))},onKeyDown:(0,Y.w)({Enter:function(){A.editing&&(""===A.value&&a?p(D(D({},A),{},{attemptedEmpty:!0})):(d||l(A.value),p(D(D({},A),{},{value:A.value,editing:!1}))))},Escape:b})}),d&&(0,x.jsx)("span",{className:I.error,children:d})]}):c((0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{children:o}),(0,x.jsx)(S.Z,{name:"pencil",className:I.edit,onClick:(0,Y.s)((function(){return p(D(D({},A),{},{editing:!0}))}))})]}))}K.propTypes={value:a().string.isRequired,validate:a().func,required:a().bool.isRequired,render:a().func.isRequired,onUpdate:a().func.isRequired},K.defaultProps={required:!0};var z=K,T=r(64261),M=r(81485),W=r(57557),F=r.n(W),J=r(96186),Q=r(80736);function G(n){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},G(n)}function L(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function V(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){_(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function _(n,e,r){return(e=function(n){var e=function(n,e){if("object"!==G(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,"string");if("object"!==G(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===G(e)?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function H(n,e){if(n){if("string"==typeof n)return $(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(n,e):void 0}}function $(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function nn(n){var e=n.selected,r=n.options,t=n.onUpdate;return(0,x.jsx)("ul",{className:g.layerList,children:r.map((function(n,r){return(0,x.jsx)("li",{"data-selected":e.includes(r),onClick:function(){return o=r,void t(e.includes(o)?e.filter((function(n){return n!==o})):[].concat((n=e,function(n){if(Array.isArray(n))return $(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||H(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),[o]));var n,o},children:n},r)}))})}var en=function(n){var e,r,i,a,c,l=n.combo,s=n.onUpdate,u=(0,o.v9)(Q.vl),A=(a=(0,t.useState)(l),c=2,function(n){if(Array.isArray(n))return n}(a)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i,a,c=[],l=!0,s=!1;try{if(i=(r=r.call(n)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(t=i.call(r)).done)&&(c.push(t.value),c.length!==e);l=!0);}catch(n){s=!0,o=n}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(a,c)||H(a,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=A[0],d=A[1],f=u.map((function(n){return n.name}));return(0,x.jsx)(T.Z,{children:(0,x.jsxs)(J.Z,{onDismiss:function(){s(p)},children:[(0,x.jsxs)("h2",{children:["Customize [",(0,x.jsx)("code",{children:l.name}),"]"]}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:g.field,children:[(0,x.jsx)("label",{htmlFor:"customize-combo-timeout",children:"Timeout (ms)"}),(0,x.jsx)("input",{id:"customize-combo-timeout",type:"number",placeholder:"Default",value:(null===(e=p.properties["timeout-ms"])||void 0===e?void 0:e.parsed)||"",onChange:function(n){var e=Number(n.target.value);d((function(r){return V(V({},r),{},{properties:""!==n.target.value?V(V({},r.properties),{},{"timeout-ms":{parsed:e}}):V({},F()(r.properties,"timeout-ms"))})}))}})]}),(0,x.jsxs)("div",{className:g.field,children:[(0,x.jsx)("label",{htmlFor:"customize-combo-slow-release",children:"Slow Release"}),(0,x.jsx)("input",{id:"customize-combo-slow-release",type:"checkbox",checked:(null===(r=p.properties["slow-release"])||void 0===r?void 0:r.parsed)||!1,onChange:function(n){return d((function(e){return V(V({},e),{},{properties:V(V({},e.properties),{},{"slow-release":{parsed:n.target.checked}})})}))}})]}),(0,x.jsxs)("div",{className:g.field,children:[(0,x.jsx)("label",{children:"Layers"}),(0,x.jsx)(nn,{selected:(null===(i=p.properties.layers)||void 0===i?void 0:i.parsed)||[],options:f,onUpdate:function(n){return d((function(e){return V(V({},e),{},{properties:V(V({},e.properties),{},{layers:{parsed:n}})})}))}})]})]})]})})},rn=r(62417);function tn(n){return tn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},tn(n)}function on(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function an(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?on(Object(r),!0).forEach((function(e){cn(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):on(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function cn(n,e,r){return(e=function(n){var e=function(n,e){if("object"!==tn(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,"string");if("object"!==tn(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===tn(e)?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function ln(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i,a,c=[],l=!0,s=!1;try{if(i=(r=r.call(n)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(t=i.call(r)).done)&&(c.push(t.value),c.length!==e);l=!0);}catch(n){s=!0,o=n}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(n,e)||function(n,e){if(n){if("string"==typeof n)return sn(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?sn(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function sn(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function un(n){var e,r=n.onSubmit,o=n.onCancel,i=(e=(0,t.useContext)(M.c).identifiers,(0,t.useCallback)((function(n){return(0,rn.G3)(n)||(e.includes(n)?'Cannot use existing identifier "'.concat(n,'"'):null)}),[e])),a=ln((0,t.useState)(An),2),c=a[0],l=a[1],s=ln((0,T.X)(),3),u=s[0],A=s[1],p=s[2],d=(0,t.useCallback)((function(n){return l((function(e){return an(an({},e),{},{name:n})}))}),[l]),f=pn(l,"bindings"),b=pn(l,"key-positions"),m=(0,t.useCallback)((function(n){l(n),p()}),[l,p]),y=(0,t.useCallback)((function(){r(c)}),[c,r]),v=(0,t.useMemo)((function(){return!!c.name&&c.properties["key-positions"].parsed.length>0}),[c]);return(0,x.jsx)(T.Z,{onDismiss:o,children:(0,x.jsxs)(J.Z,{dismissText:!1,classes:[g.comboPanel],children:[u&&(0,x.jsx)(en,{combo:c,onUpdate:m}),(0,x.jsx)(N.Z,{url:"https://zmk.dev/docs/features/combos",text:"ZMK Docs: Combos"}),(0,x.jsxs)("div",{className:g.combo,children:[(0,x.jsxs)("div",{className:g.heading,children:[(0,x.jsx)("div",{children:(0,x.jsx)(z,{value:c.name,validate:i,render:function(n){return(0,x.jsxs)("h5",{children:["Name: ",(0,x.jsx)("code",{children:n}),!c.name&&(0,x.jsx)("span",{style:{color:"red"},children:"*required"})]})},onUpdate:d})}),(0,x.jsx)("div",{className:g.actions,children:(0,x.jsx)(S.Z,{name:"wrench",className:"".concat(g.action),onClick:A})})]}),(0,x.jsxs)("div",{className:g.detail,children:[(0,x.jsx)("div",{className:g.comboOutput,children:(0,x.jsx)(k.Z,an(an({},c.properties.bindings.parsed[0]),{},{onUpdate:f}))}),(0,x.jsx)(w,{keyPositions:c.properties["key-positions"].parsed,onUpdate:b})]})]}),(0,x.jsxs)("div",{style:{textAlign:"center"},children:[(0,x.jsx)(O.Z,{disabled:!v,onClick:y,children:"Create"}),(0,x.jsx)(O.Z,{onClick:o,secondary:!0,children:"Cancel"})]})]})})}var An={name:"",labels:[],properties:{bindings:{parsed:[{value:"&none",params:[]}]},"key-positions":{parsed:[]}}};function pn(n,e){return(0,t.useCallback)((function(r){return n((function(n){return an(an({},n),{},{properties:an(an({},n.properties),{},cn({},e,{parsed:r}))})}))}),[n,e])}var dn=r(2732);function fn(n){return fn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},fn(n)}function bn(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function mn(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?bn(Object(r),!0).forEach((function(e){yn(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):bn(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function yn(n,e,r){return(e=function(n){var e=function(n,e){if("object"!==fn(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,"string");if("object"!==fn(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===fn(e)?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function vn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i,a,c=[],l=!0,s=!1;try{if(i=(r=r.call(n)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(t=i.call(r)).done)&&(c.push(t.value),c.length!==e);l=!0);}catch(n){s=!0,o=n}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(n,e)||function(n,e){if(n){if("string"==typeof n)return Cn(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Cn(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Cn(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function hn(n){var e=(0,t.useContext)(M.c).identifiers,r=(0,o.v9)(dn.DP),i=(0,o.I0)(),a=vn((0,t.useState)(null),2),c=a[0],l=a[1],s=vn((0,T.X)(),3),u=s[0],A=s[1],p=s[2];function d(n){return(0,rn.G3)(n)||(e.includes(n)?'Cannot use existing identifier "'.concat(n,'"'):null)}return(0,x.jsxs)("div",{className:g.main,children:[null!==c&&(0,x.jsx)(en,{combo:r[c],onUpdate:function(n){return e=c,r=n,l(null),void i((0,dn.SD)({index:e,combo:r}));var e,r}}),u&&(0,x.jsx)(un,{onSubmit:function(n){i((0,dn.CG)(n)),p()},onCancel:p}),(0,x.jsx)("div",{className:g.header,children:(0,x.jsx)(N.Z,{url:"https://zmk.dev/docs/features/combos",text:"ZMK Docs: Combos"})}),(0,x.jsx)("div",{className:g.comboPanel,children:r.map((function(n,e){return(0,x.jsxs)("div",{className:g.combo,children:[(0,x.jsxs)("div",{className:g.heading,children:[(0,x.jsx)(z,{value:n.name,validate:d,render:function(n){return(0,x.jsx)("h5",{children:(0,x.jsx)("code",{children:n})})},onUpdate:function(n){return function(n,e){i((0,dn.l3)({index:n,name:e}))}(e,n)}}),(0,x.jsxs)("div",{className:g.actions,children:[(0,x.jsx)(S.Z,{name:"wrench",className:"".concat(g.action),onClick:function(){return l(e)}}),(0,x.jsx)(S.Z,{name:"trash-can",className:"".concat(g.action," ").concat(g.remove),onClick:function(){return n=e,void i((0,dn.pd)({index:n}));var n}})]})]}),(0,x.jsxs)("div",{className:g.detail,children:[(0,x.jsx)("div",{className:g.comboOutput,children:(0,x.jsx)(k.Z,mn(mn({},n.properties.bindings.parsed[0]),{},{onUpdate:function(n){!function(n,e){i((0,dn.ij)({comboIndex:n,bindings:[e]}))}(e,n)}}))}),(0,x.jsx)(w,{keyPositions:n.properties["key-positions"].parsed,onUpdate:function(n){return function(n,e){i((0,dn.nJ)({comboIndex:n,keyPositions:e}))}(e,n)}})]})]},e)}))}),(0,x.jsx)("div",{className:g.footer,children:(0,x.jsx)(O.Z,{onClick:A,children:"Add New Combo"})})]})}hn.propTypes={};var gn=hn},56803:function(n,e,r){function t(n){return function(e){e.stopPropagation(),n()}}function o(n){return function(e){n[e.key]&&n[e.key]()}}r.d(e,{s:function(){return t},w:function(){return o}})},86015:function(n,e,r){var t=r(87537),o=r.n(t),i=r(23645),a=r.n(i)()(o());a.push([n.id,".ho3CuFFjX1VFNZJiAyVs {\n  position: relative;\n}\n\n.u9J3v5ZrIbuVICzNBkRw {\n  padding: 5px;\n  cursor: pointer;\n  opacity: 0.5;\n  color: var(--key-color-base);\n}\n.u9J3v5ZrIbuVICzNBkRw:hover {\n  opacity: 1;\n}\n\n.wmqWaOx7XyKADh7Kv4RZ {\n  position: absolute;\n  z-index: 10;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 100%);\n  max-width: 250px;\n  width: 100%;\n\n  border-radius: 4px;\n  padding: 3px 5px;\n\n  color: white;\n  background-color: var(--error-highlight);\n  font-size: 85%;\n  font-family: sans-serif;\n\n  opacity: 0.9;\n}\n.wmqWaOx7XyKADh7Kv4RZ::before {\n  position: absolute;\n  display: block;\n  content: ' ';\n  z-index: -1;\n\n  left: 50%;\n  width: 10px;\n  height: 10px;\n\n  background-color: var(--error-highlight);\n  transform: translate(-50%, -7px) rotate(45deg);\n}\n","",{version:3,sources:["webpack://./src/Common/editablefield.module.css"],names:[],mappings:"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,4BAA4B;AAC9B;AACA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,SAAS;EACT,gCAAgC;EAChC,gBAAgB;EAChB,WAAW;;EAEX,kBAAkB;EAClB,gBAAgB;;EAEhB,YAAY;EACZ,wCAAwC;EACxC,cAAc;EACd,uBAAuB;;EAEvB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,WAAW;;EAEX,SAAS;EACT,WAAW;EACX,YAAY;;EAEZ,wCAAwC;EACxC,8CAA8C;AAChD",sourcesContent:[".container {\n  position: relative;\n}\n\n.edit {\n  padding: 5px;\n  cursor: pointer;\n  opacity: 0.5;\n  color: var(--key-color-base);\n}\n.edit:hover {\n  opacity: 1;\n}\n\n.error {\n  position: absolute;\n  z-index: 10;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 100%);\n  max-width: 250px;\n  width: 100%;\n\n  border-radius: 4px;\n  padding: 3px 5px;\n\n  color: white;\n  background-color: var(--error-highlight);\n  font-size: 85%;\n  font-family: sans-serif;\n\n  opacity: 0.9;\n}\n.error::before {\n  position: absolute;\n  display: block;\n  content: ' ';\n  z-index: -1;\n\n  left: 50%;\n  width: 10px;\n  height: 10px;\n\n  background-color: var(--error-highlight);\n  transform: translate(-50%, -7px) rotate(45deg);\n}\n"],sourceRoot:""}]),a.locals={container:"ho3CuFFjX1VFNZJiAyVs",edit:"u9J3v5ZrIbuVICzNBkRw",error:"wmqWaOx7XyKADh7Kv4RZ"},e.Z=a},78207:function(n,e,r){var t=r(87537),o=r.n(t),i=r(23645),a=r.n(i)()(o());a.push([n.id,'.pwXbGORsYKqyOPBm9_dW {\n  padding-bottom: 60px;\n}\n\n.FDsUz791VURN5GgqawOQ, .MhI51kJR50XISY6jcLAw {\n  width: 550px;\n  margin: 1px auto;\n}\n.MhI51kJR50XISY6jcLAw {\n  text-align: center;\n  margin-top: 10px;\n  padding-top: 20px;\n  border-top: 2px solid var(--key-bg-base);\n}\n\n.Gy0KZGCgOeVminAfggFQ {\n  cursor: pointer;\n  background-color: var(--key-bg-base);\n}\n.Gy0KZGCgOeVminAfggFQ:hover {\n  border: 4px solid var(--selection);\n  box-sizing: border-box;\n}\n\n.Ld9cVdtpS_DpbEifyX9Y {\n  background-color: var(--selection);\n}\n.Ld9cVdtpS_DpbEifyX9Y:hover {\n  background-color: var(--hover-selection);\n}\n\n.mqpJ7uHAMKxvORoOIPFK {\n  max-width: 450px;\n  margin: 0 auto;\n}\n\n.BVucwy4AZCyl7GyivzMn {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 2px solid var(--key-bg-base);\n  margin: 5px 0;\n}\n\n.U6g0njWjBrtb_I3XhAeV {\n  cursor: pointer;\n  padding: 5px;\n  opacity: 0.6;\n}\n.U6g0njWjBrtb_I3XhAeV:hover {\n  opacity: 1;\n}\n\n.CROhsBLtunQ2BbfWdkQw {\n  margin: 10px 0 40px;\n}\n\n.CROhsBLtunQ2BbfWdkQw .MhA4fXXuaZ1iPvv05w4m {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 20px;\n}\n\n.CROhsBLtunQ2BbfWdkQw h5 {\n  margin: 0;\n}\n\n.vujYcgQjiN4BGp37FMUH {\n  color: var(--key-color-base);\n}\n\n.uh2yPWyfEOZtgXo2_KtU {\n  color: var(--delete);\n}\n\n.NAB1EN6_pcYIy5Db9XnC {\n  display: none !important;\n}\n.NAB1EN6_pcYIy5Db9XnC:hover {\n  color: white;\n  cursor: pointer;\n}\n.kYn8brsFgEaf61oQyv4d:hover .NAB1EN6_pcYIy5Db9XnC {\n  display: flex !important;\n  position: absolute;\n  right: -48px;\n  transform: scale(0.5);\n}\n\n.NGxnhfSJaJ9FNu3hlBfc.NAB1EN6_pcYIy5Db9XnC,\n.NGxnhfSJaJ9FNu3hlBfc.GXgG_IaQTricqThqzsKe > * {\n  background-color: sandybrown;\n  color: white;\n}\n.NGxnhfSJaJ9FNu3hlBfc.NAB1EN6_pcYIy5Db9XnC {\n  display: flex;\n}\n\n.fljdvcebOv1gbKZpf0vW {\n  margin: 10px 0;\n  display: flex;\n}\n\n.fljdvcebOv1gbKZpf0vW label {\n  display: inline-block;\n  width: 120px;\n  text-align: right;\n  margin-right: 10px;\n}\n\n.bnN6JCit0RcjdQiqzw8w {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.bnN6JCit0RcjdQiqzw8w li {\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px 10px;\n  margin: 5px;\n  border-radius: 30px;\n  background-color: var(--key-bg-base);\n}\n.bnN6JCit0RcjdQiqzw8w li[data-selected="true"] {\n  background-color: var(--selection);\n  color: var(--key-color-hover);\n}\n.bnN6JCit0RcjdQiqzw8w li:hover {\n  background-color: var(--hover-selection);\n  color: var(--key-color-hover);\n}\n\n.NpLEYrC32KQ4rUx9hUFJ {\n  background-color: var(--key-bg-base);\n  border-radius: 30px;\n  color: var(--key-color-base);\n  font-size: 80%;\n  text-align: center;\n  padding: 5px;\n  position: absolute;\n  bottom: -40px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  width: 110%;\n\n  pointer-events: none;\n  transition: opacity ease-in-out .5s;\n}\n\n.l2gtE1XKS63R5TM5unip { position: relative }\n.l2gtE1XKS63R5TM5unip:hover .NpLEYrC32KQ4rUx9hUFJ { opacity: 0.25 }\n',"",{version:3,sources:["webpack://./src/Keyboard/Combos/styles.module.css"],names:[],mappings:"AAAA;EACE,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,wCAAwC;AAC1C;;AAEA;EACE,eAAe;EACf,oCAAoC;AACtC;AACA;EACE,kCAAkC;EAClC,sBAAsB;AACxB;;AAEA;EACE,kCAAkC;AACpC;AACA;EACE,wCAAwC;AAC1C;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,2CAA2C;EAC3C,aAAa;AACf;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;AACd;AACA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;AAC1B;AACA;EACE,YAAY;EACZ,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,YAAY;EACZ,qBAAqB;AACvB;;AAEA;;EAEE,4BAA4B;EAC5B,YAAY;AACd;AACA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,SAAS;EACT,UAAU;AACZ;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,iBAAiB;EACjB,WAAW;EACX,mBAAmB;EACnB,oCAAoC;AACtC;AACA;EACE,kCAAkC;EAClC,6BAA6B;AAC/B;AACA;EACE,wCAAwC;EACxC,6BAA6B;AAC/B;;AAEA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,4BAA4B;EAC5B,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,6BAA6B;EAC7B,WAAW;;EAEX,oBAAoB;EACpB,mCAAmC;AACrC;;AAEA,wBAAiB,mBAAmB;AACpC,oDAAwC,cAAc",sourcesContent:['.main {\n  padding-bottom: 60px;\n}\n\n.header, .footer {\n  width: 550px;\n  margin: 1px auto;\n}\n.footer {\n  text-align: center;\n  margin-top: 10px;\n  padding-top: 20px;\n  border-top: 2px solid var(--key-bg-base);\n}\n\n.selectable {\n  cursor: pointer;\n  background-color: var(--key-bg-base);\n}\n.selectable:hover {\n  border: 4px solid var(--selection);\n  box-sizing: border-box;\n}\n\n.highlight {\n  background-color: var(--selection);\n}\n.highlight:hover {\n  background-color: var(--hover-selection);\n}\n\n.comboPanel {\n  max-width: 450px;\n  margin: 0 auto;\n}\n\n.heading {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 2px solid var(--key-bg-base);\n  margin: 5px 0;\n}\n\n.action {\n  cursor: pointer;\n  padding: 5px;\n  opacity: 0.6;\n}\n.action:hover {\n  opacity: 1;\n}\n\n.combo {\n  margin: 10px 0 40px;\n}\n\n.combo .detail {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 20px;\n}\n\n.combo h5 {\n  margin: 0;\n}\n\n.edit {\n  color: var(--key-color-base);\n}\n\n.remove {\n  color: var(--delete);\n}\n\n.addComboInput {\n  display: none !important;\n}\n.addComboInput:hover {\n  color: white;\n  cursor: pointer;\n}\n.comboInputList:hover .addComboInput {\n  display: flex !important;\n  position: absolute;\n  right: -48px;\n  transform: scale(0.5);\n}\n\n.active.addComboInput,\n.active.comboInput > * {\n  background-color: sandybrown;\n  color: white;\n}\n.active.addComboInput {\n  display: flex;\n}\n\n.field {\n  margin: 10px 0;\n  display: flex;\n}\n\n.field label {\n  display: inline-block;\n  width: 120px;\n  text-align: right;\n  margin-right: 10px;\n}\n\n.layerList {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.layerList li {\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px 10px;\n  margin: 5px;\n  border-radius: 30px;\n  background-color: var(--key-bg-base);\n}\n.layerList li[data-selected="true"] {\n  background-color: var(--selection);\n  color: var(--key-color-hover);\n}\n.layerList li:hover {\n  background-color: var(--hover-selection);\n  color: var(--key-color-hover);\n}\n\n.floatingMessage {\n  background-color: var(--key-bg-base);\n  border-radius: 30px;\n  color: var(--key-color-base);\n  font-size: 80%;\n  text-align: center;\n  padding: 5px;\n  position: absolute;\n  bottom: -40px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  width: 110%;\n\n  pointer-events: none;\n  transition: opacity ease-in-out .5s;\n}\n\n.comboInputMap { position: relative }\n.comboInputMap:hover .floatingMessage { opacity: 0.25 }\n'],sourceRoot:""}]),a.locals={main:"pwXbGORsYKqyOPBm9_dW",header:"FDsUz791VURN5GgqawOQ",footer:"MhI51kJR50XISY6jcLAw",selectable:"Gy0KZGCgOeVminAfggFQ",highlight:"Ld9cVdtpS_DpbEifyX9Y",comboPanel:"mqpJ7uHAMKxvORoOIPFK",heading:"BVucwy4AZCyl7GyivzMn",action:"U6g0njWjBrtb_I3XhAeV",combo:"CROhsBLtunQ2BbfWdkQw",detail:"MhA4fXXuaZ1iPvv05w4m",edit:"vujYcgQjiN4BGp37FMUH",remove:"uh2yPWyfEOZtgXo2_KtU",addComboInput:"NAB1EN6_pcYIy5Db9XnC",comboInputList:"kYn8brsFgEaf61oQyv4d",active:"NGxnhfSJaJ9FNu3hlBfc",comboInput:"GXgG_IaQTricqThqzsKe",field:"fljdvcebOv1gbKZpf0vW",layerList:"bnN6JCit0RcjdQiqzw8w",floatingMessage:"NpLEYrC32KQ4rUx9hUFJ",comboInputMap:"l2gtE1XKS63R5TM5unip"},e.Z=a}}]);
//# sourceMappingURL=ComboEditorTab.c79826bd723313f02428.js.map