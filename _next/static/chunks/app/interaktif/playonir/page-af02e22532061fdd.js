(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{63225:function(e,t,n){Promise.resolve().then(n.bind(n,49687))},28811:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return dynamic}});let r=n(21024);n(2265);let l=r._(n(57075));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function dynamic(e,t){let n=l.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e),Object.assign(r,t);let o=r.loader;return n({...r,loader:()=>null!=o?o().then(convertModule):Promise.resolve(convertModule(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},19167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return suspense},NoSSR:function(){return NoSSR}});let r=n(11283);function suspense(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function NoSSR(e){let{children:t}=e;return t}},57075:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _default}});let r=n(21024),l=r._(n(2265)),o=n(19167),_default=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function LoadableComponent(e){let n=t.loading,r=l.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),u=t.ssr?l.default.Fragment:o.NoSSR,a=t.lazy;return l.default.createElement(l.default.Suspense,{fallback:r},l.default.createElement(u,null,l.default.createElement(a,e)))}return t.lazy=l.default.lazy(t.loader),LoadableComponent.displayName="LoadableComponent",LoadableComponent}},49687:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Home}});var r=n(57437),l=n(28811),o=n.n(l);function Loader(){return(0,r.jsx)("div",{className:"flex min-h-screen w-full items-center justify-center",children:(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("div",{className:"mx-auto h-16 w-16 animate-spin rounded-full border-4 border-dashed border-yellow-500"}),(0,r.jsx)("h2",{className:"mt-4 text-zinc-900 dark:text-white",children:"Loading..."}),(0,r.jsx)("p",{className:"text-zinc-600 dark:text-zinc-400",children:"Your adventure is about to begin"})]})})}let u=o()(()=>Promise.all([n.e(590),n.e(764),n.e(39),n.e(358),n.e(862),n.e(539),n.e(586)]).then(n.bind(n,35928)),{loadableGenerated:{webpack:()=>[35928]},ssr:!1,loading:()=>(0,r.jsx)(Loader,{})});function Home(){return(0,r.jsx)("main",{children:(0,r.jsx)(u,{})})}},30622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var r,o={},d=null,i=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(i=t.ref),t)u.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:l,type:e,key:d,ref:i,props:o,_owner:a.current}}t.Fragment=o,t.jsx=q,t.jsxs=q},57437:function(e,t,n){"use strict";e.exports=n(30622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=63225)}),_N_E=e.O()}]);