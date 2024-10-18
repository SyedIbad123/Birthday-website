import{g as N}from"./hoist-non-react-statics-D5aJipOz.js";function U(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}},v={},O={exports:{}},u={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),V=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),$=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,P={};function p(e,t,n){this.props=e,this.context=t,this.refs=P,this.updater=n||g}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I(){}I.prototype=p.prototype;function S(e,t,n){this.props=e,this.context=t,this.refs=P,this.updater=n||g}var E=S.prototype=new I;E.constructor=S;C(E,p.prototype);E.isPureReactComponent=!0;var w=Array.isArray,T=Object.prototype.hasOwnProperty,R={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var r,o={},i=null,c=null;if(t!=null)for(r in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(i=""+t.key),t)T.call(t,r)&&!D.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var f=Array(s),a=0;a<s;a++)f[a]=arguments[a+2];o.children=f}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:y,type:e,key:i,ref:c,props:o,_owner:R.current}}function Q(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function b(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function X(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var j=/\/+/g;function h(e,t){return typeof e=="object"&&e!==null&&e.key!=null?X(""+e.key):t.toString(36)}function _(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case y:case V:c=!0}}if(c)return c=e,o=o(c),e=r===""?"."+h(c,0):r,w(o)?(n="",e!=null&&(n=e.replace(j,"$&/")+"/"),_(o,t,n,"",function(a){return a})):o!=null&&(b(o)&&(o=Q(o,n+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(j,"$&/")+"/")+e)),t.push(o)),1;if(c=0,r=r===""?".":r+":",w(e))for(var s=0;s<e.length;s++){i=e[s];var f=r+h(i,s);c+=_(i,t,n,f,o)}else if(f=K(e),typeof f=="function")for(e=f.call(e),s=0;!(i=e.next()).done;)i=i.value,f=r+h(i,s++),c+=_(i,t,n,f,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function d(e,t,n){if(e==null)return e;var r=[],o=0;return _(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Z(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},m={transition:null},ee={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:m,ReactCurrentOwner:R};function F(){throw Error("act(...) is not supported in production builds of React.")}u.Children={map:d,forEach:function(e,t,n){d(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!b(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Component=p;u.Fragment=q;u.Profiler=z;u.PureComponent=S;u.StrictMode=M;u.Suspense=J;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee;u.act=F;u.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=C({},e.props),o=e.key,i=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,c=R.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in t)T.call(t,f)&&!D.hasOwnProperty(f)&&(r[f]=t[f]===void 0&&s!==void 0?s[f]:t[f])}var f=arguments.length-2;if(f===1)r.children=n;else if(1<f){s=Array(f);for(var a=0;a<f;a++)s[a]=arguments[a+2];r.children=s}return{$$typeof:y,type:e.type,key:o,ref:i,props:r,_owner:c}};u.createContext=function(e){return e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B,_context:e},e.Consumer=e};u.createElement=A;u.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:W,render:e}};u.isValidElement=b;u.lazy=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:Z}};u.memo=function(e,t){return{$$typeof:Y,type:e,compare:t===void 0?null:t}};u.startTransition=function(e){var t=m.transition;m.transition={};try{e()}finally{m.transition=t}};u.unstable_act=F;u.useCallback=function(e,t){return l.current.useCallback(e,t)};u.useContext=function(e){return l.current.useContext(e)};u.useDebugValue=function(){};u.useDeferredValue=function(e){return l.current.useDeferredValue(e)};u.useEffect=function(e,t){return l.current.useEffect(e,t)};u.useId=function(){return l.current.useId()};u.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)};u.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};u.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};u.useMemo=function(e,t){return l.current.useMemo(e,t)};u.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)};u.useRef=function(e){return l.current.useRef(e)};u.useState=function(e){return l.current.useState(e)};u.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)};u.useTransition=function(){return l.current.useTransition()};u.version="18.3.1";O.exports=u;var k=O.exports;const te=N(k),se=U({__proto__:null,default:te},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re=k,ne=Symbol.for("react.element"),oe=Symbol.for("react.fragment"),ue=Object.prototype.hasOwnProperty,ie=re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ce={key:!0,ref:!0,__self:!0,__source:!0};function L(e,t,n){var r,o={},i=null,c=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)ue.call(t,r)&&!ce.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ne,type:e,key:i,ref:c,props:o,_owner:ie.current}}v.Fragment=oe;v.jsx=L;v.jsxs=L;x.exports=v;var le=x.exports;export{se as R,te as a,le as j,k as r};
