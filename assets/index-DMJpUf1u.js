(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const b of m)if(b.type==="childList")for(const v of b.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function u(m){const b={};return m.integrity&&(b.integrity=m.integrity),m.referrerPolicy&&(b.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?b.credentials="include":m.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function d(m){if(m.ep)return;m.ep=!0;const b=u(m);fetch(m.href,b)}})();function gh(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Oc={exports:{}},zl={};var $p;function mx(){if($p)return zl;$p=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(d,m,b){var v=null;if(b!==void 0&&(v=""+b),m.key!==void 0&&(v=""+m.key),"key"in m){b={};for(var x in m)x!=="key"&&(b[x]=m[x])}else b=m;return m=b.ref,{$$typeof:r,type:d,key:v,ref:m!==void 0?m:null,props:b}}return zl.Fragment=o,zl.jsx=u,zl.jsxs=u,zl}var eh;function fx(){return eh||(eh=1,Oc.exports=mx()),Oc.exports}var e=fx(),zc={exports:{}},ne={};var th;function xx(){if(th)return ne;th=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),v=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.iterator;function T(R){return R===null||typeof R!="object"?null:(R=D&&R[D]||R["@@iterator"],typeof R=="function"?R:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,f={};function g(R,P,Q){this.props=R,this.context=P,this.refs=f,this.updater=Q||z}g.prototype.isReactComponent={},g.prototype.setState=function(R,P){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,P,"setState")},g.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function j(){}j.prototype=g.prototype;function w(R,P,Q){this.props=R,this.context=P,this.refs=f,this.updater=Q||z}var te=w.prototype=new j;te.constructor=w,A(te,g.prototype),te.isPureReactComponent=!0;var le=Array.isArray;function $(){}var X={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function ze(R,P,Q){var W=Q.ref;return{$$typeof:r,type:R,key:P,ref:W!==void 0?W:null,props:Q}}function bt(R,P){return ze(R.type,P,R.props)}function zt(R){return typeof R=="object"&&R!==null&&R.$$typeof===r}function et(R){var P={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(Q){return P[Q]})}var zs=/\/+/g;function Gt(R,P){return typeof R=="object"&&R!==null&&R.key!=null?et(""+R.key):P.toString(36)}function kt(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then($,$):(R.status="pending",R.then(function(P){R.status==="pending"&&(R.status="fulfilled",R.value=P)},function(P){R.status==="pending"&&(R.status="rejected",R.reason=P)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function M(R,P,Q,W,re){var de=typeof R;(de==="undefined"||de==="boolean")&&(R=null);var ye=!1;if(R===null)ye=!0;else switch(de){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(R.$$typeof){case r:case o:ye=!0;break;case E:return ye=R._init,M(ye(R._payload),P,Q,W,re)}}if(ye)return re=re(R),ye=W===""?"."+Gt(R,0):W,le(re)?(Q="",ye!=null&&(Q=ye.replace(zs,"$&/")+"/"),M(re,P,Q,"",function(Pa){return Pa})):re!=null&&(zt(re)&&(re=bt(re,Q+(re.key==null||R&&R.key===re.key?"":(""+re.key).replace(zs,"$&/")+"/")+ye)),P.push(re)),1;ye=0;var Ie=W===""?".":W+":";if(le(R))for(var De=0;De<R.length;De++)W=R[De],de=Ie+Gt(W,De),ye+=M(W,P,Q,de,re);else if(De=T(R),typeof De=="function")for(R=De.call(R),De=0;!(W=R.next()).done;)W=W.value,de=Ie+Gt(W,De++),ye+=M(W,P,Q,de,re);else if(de==="object"){if(typeof R.then=="function")return M(kt(R),P,Q,W,re);throw P=String(R),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return ye}function Y(R,P,Q){if(R==null)return R;var W=[],re=0;return M(R,W,"","",function(de){return P.call(Q,de,re++)}),W}function ae(R){if(R._status===-1){var P=R._result;P=P(),P.then(function(Q){(R._status===0||R._status===-1)&&(R._status=1,R._result=Q)},function(Q){(R._status===0||R._status===-1)&&(R._status=2,R._result=Q)}),R._status===-1&&(R._status=0,R._result=P)}if(R._status===1)return R._result.default;throw R._result}var Se=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},Re={map:Y,forEach:function(R,P,Q){Y(R,function(){P.apply(this,arguments)},Q)},count:function(R){var P=0;return Y(R,function(){P++}),P},toArray:function(R){return Y(R,function(P){return P})||[]},only:function(R){if(!zt(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return ne.Activity=C,ne.Children=Re,ne.Component=g,ne.Fragment=u,ne.Profiler=m,ne.PureComponent=w,ne.StrictMode=d,ne.Suspense=N,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ne.__COMPILER_RUNTIME={__proto__:null,c:function(R){return X.H.useMemoCache(R)}},ne.cache=function(R){return function(){return R.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(R,P,Q){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var W=A({},R.props),re=R.key;if(P!=null)for(de in P.key!==void 0&&(re=""+P.key),P)!ie.call(P,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&P.ref===void 0||(W[de]=P[de]);var de=arguments.length-2;if(de===1)W.children=Q;else if(1<de){for(var ye=Array(de),Ie=0;Ie<de;Ie++)ye[Ie]=arguments[Ie+2];W.children=ye}return ze(R.type,re,W)},ne.createContext=function(R){return R={$$typeof:v,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:b,_context:R},R},ne.createElement=function(R,P,Q){var W,re={},de=null;if(P!=null)for(W in P.key!==void 0&&(de=""+P.key),P)ie.call(P,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(re[W]=P[W]);var ye=arguments.length-2;if(ye===1)re.children=Q;else if(1<ye){for(var Ie=Array(ye),De=0;De<ye;De++)Ie[De]=arguments[De+2];re.children=Ie}if(R&&R.defaultProps)for(W in ye=R.defaultProps,ye)re[W]===void 0&&(re[W]=ye[W]);return ze(R,de,re)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(R){return{$$typeof:x,render:R}},ne.isValidElement=zt,ne.lazy=function(R){return{$$typeof:E,_payload:{_status:-1,_result:R},_init:ae}},ne.memo=function(R,P){return{$$typeof:y,type:R,compare:P===void 0?null:P}},ne.startTransition=function(R){var P=X.T,Q={};X.T=Q;try{var W=R(),re=X.S;re!==null&&re(Q,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then($,Se)}catch(de){Se(de)}finally{P!==null&&Q.types!==null&&(P.types=Q.types),X.T=P}},ne.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ne.use=function(R){return X.H.use(R)},ne.useActionState=function(R,P,Q){return X.H.useActionState(R,P,Q)},ne.useCallback=function(R,P){return X.H.useCallback(R,P)},ne.useContext=function(R){return X.H.useContext(R)},ne.useDebugValue=function(){},ne.useDeferredValue=function(R,P){return X.H.useDeferredValue(R,P)},ne.useEffect=function(R,P){return X.H.useEffect(R,P)},ne.useEffectEvent=function(R){return X.H.useEffectEvent(R)},ne.useId=function(){return X.H.useId()},ne.useImperativeHandle=function(R,P,Q){return X.H.useImperativeHandle(R,P,Q)},ne.useInsertionEffect=function(R,P){return X.H.useInsertionEffect(R,P)},ne.useLayoutEffect=function(R,P){return X.H.useLayoutEffect(R,P)},ne.useMemo=function(R,P){return X.H.useMemo(R,P)},ne.useOptimistic=function(R,P){return X.H.useOptimistic(R,P)},ne.useReducer=function(R,P,Q){return X.H.useReducer(R,P,Q)},ne.useRef=function(R){return X.H.useRef(R)},ne.useState=function(R){return X.H.useState(R)},ne.useSyncExternalStore=function(R,P,Q){return X.H.useSyncExternalStore(R,P,Q)},ne.useTransition=function(){return X.H.useTransition()},ne.version="19.2.3",ne}var sh;function Xc(){return sh||(sh=1,zc.exports=xx()),zc.exports}var h=Xc();const ta=gh(h);var Dc={exports:{}},Dl={},wc={exports:{}},Uc={};var ah;function jx(){return ah||(ah=1,(function(r){function o(M,Y){var ae=M.length;M.push(Y);e:for(;0<ae;){var Se=ae-1>>>1,Re=M[Se];if(0<m(Re,Y))M[Se]=Y,M[ae]=Re,ae=Se;else break e}}function u(M){return M.length===0?null:M[0]}function d(M){if(M.length===0)return null;var Y=M[0],ae=M.pop();if(ae!==Y){M[0]=ae;e:for(var Se=0,Re=M.length,R=Re>>>1;Se<R;){var P=2*(Se+1)-1,Q=M[P],W=P+1,re=M[W];if(0>m(Q,ae))W<Re&&0>m(re,Q)?(M[Se]=re,M[W]=ae,Se=W):(M[Se]=Q,M[P]=ae,Se=P);else if(W<Re&&0>m(re,ae))M[Se]=re,M[W]=ae,Se=W;else break e}}return Y}function m(M,Y){var ae=M.sortIndex-Y.sortIndex;return ae!==0?ae:M.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;r.unstable_now=function(){return b.now()}}else{var v=Date,x=v.now();r.unstable_now=function(){return v.now()-x}}var N=[],y=[],E=1,C=null,D=3,T=!1,z=!1,A=!1,f=!1,g=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function te(M){for(var Y=u(y);Y!==null;){if(Y.callback===null)d(y);else if(Y.startTime<=M)d(y),Y.sortIndex=Y.expirationTime,o(N,Y);else break;Y=u(y)}}function le(M){if(A=!1,te(M),!z)if(u(N)!==null)z=!0,$||($=!0,et());else{var Y=u(y);Y!==null&&kt(le,Y.startTime-M)}}var $=!1,X=-1,ie=5,ze=-1;function bt(){return f?!0:!(r.unstable_now()-ze<ie)}function zt(){if(f=!1,$){var M=r.unstable_now();ze=M;var Y=!0;try{e:{z=!1,A&&(A=!1,j(X),X=-1),T=!0;var ae=D;try{t:{for(te(M),C=u(N);C!==null&&!(C.expirationTime>M&&bt());){var Se=C.callback;if(typeof Se=="function"){C.callback=null,D=C.priorityLevel;var Re=Se(C.expirationTime<=M);if(M=r.unstable_now(),typeof Re=="function"){C.callback=Re,te(M),Y=!0;break t}C===u(N)&&d(N),te(M)}else d(N);C=u(N)}if(C!==null)Y=!0;else{var R=u(y);R!==null&&kt(le,R.startTime-M),Y=!1}}break e}finally{C=null,D=ae,T=!1}Y=void 0}}finally{Y?et():$=!1}}}var et;if(typeof w=="function")et=function(){w(zt)};else if(typeof MessageChannel<"u"){var zs=new MessageChannel,Gt=zs.port2;zs.port1.onmessage=zt,et=function(){Gt.postMessage(null)}}else et=function(){g(zt,0)};function kt(M,Y){X=g(function(){M(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_next=function(M){switch(D){case 1:case 2:case 3:var Y=3;break;default:Y=D}var ae=D;D=Y;try{return M()}finally{D=ae}},r.unstable_requestPaint=function(){f=!0},r.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var ae=D;D=M;try{return Y()}finally{D=ae}},r.unstable_scheduleCallback=function(M,Y,ae){var Se=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Se+ae:Se):ae=Se,M){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=ae+Re,M={id:E++,callback:Y,priorityLevel:M,startTime:ae,expirationTime:Re,sortIndex:-1},ae>Se?(M.sortIndex=ae,o(y,M),u(N)===null&&M===u(y)&&(A?(j(X),X=-1):A=!0,kt(le,ae-Se))):(M.sortIndex=Re,o(N,M),z||T||(z=!0,$||($=!0,et()))),M},r.unstable_shouldYield=bt,r.unstable_wrapCallback=function(M){var Y=D;return function(){var ae=D;D=Y;try{return M.apply(this,arguments)}finally{D=ae}}}})(Uc)),Uc}var lh;function bx(){return lh||(lh=1,wc.exports=jx()),wc.exports}var Mc={exports:{}},Fe={};var nh;function vx(){if(nh)return Fe;nh=1;var r=Xc();function o(N){var y="https://react.dev/errors/"+N;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+N+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var d={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},m=Symbol.for("react.portal");function b(N,y,E){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:C==null?null:""+C,children:N,containerInfo:y,implementation:E}}var v=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(N,y){if(N==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Fe.createPortal=function(N,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(o(299));return b(N,y,null,E)},Fe.flushSync=function(N){var y=v.T,E=d.p;try{if(v.T=null,d.p=2,N)return N()}finally{v.T=y,d.p=E,d.d.f()}},Fe.preconnect=function(N,y){typeof N=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,d.d.C(N,y))},Fe.prefetchDNS=function(N){typeof N=="string"&&d.d.D(N)},Fe.preinit=function(N,y){if(typeof N=="string"&&y&&typeof y.as=="string"){var E=y.as,C=x(E,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,T=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?d.d.S(N,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:C,integrity:D,fetchPriority:T}):E==="script"&&d.d.X(N,{crossOrigin:C,integrity:D,fetchPriority:T,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Fe.preinitModule=function(N,y){if(typeof N=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=x(y.as,y.crossOrigin);d.d.M(N,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&d.d.M(N)},Fe.preload=function(N,y){if(typeof N=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,C=x(E,y.crossOrigin);d.d.L(N,E,{crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Fe.preloadModule=function(N,y){if(typeof N=="string")if(y){var E=x(y.as,y.crossOrigin);d.d.m(N,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else d.d.m(N)},Fe.requestFormReset=function(N){d.d.r(N)},Fe.unstable_batchedUpdates=function(N,y){return N(y)},Fe.useFormState=function(N,y,E){return v.H.useFormState(N,y,E)},Fe.useFormStatus=function(){return v.H.useHostTransitionStatus()},Fe.version="19.2.3",Fe}var ih;function yx(){if(ih)return Mc.exports;ih=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Mc.exports=vx(),Mc.exports}var rh;function gx(){if(rh)return Dl;rh=1;var r=bx(),o=Xc(),u=yx();function d(t){var s="https://react.dev/errors/"+t;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function b(t){var s=t,a=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,(s.flags&4098)!==0&&(a=s.return),t=s.return;while(t)}return s.tag===3?a:null}function v(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function x(t){if(t.tag===31){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function N(t){if(b(t)!==t)throw Error(d(188))}function y(t){var s=t.alternate;if(!s){if(s=b(t),s===null)throw Error(d(188));return s!==t?null:t}for(var a=t,l=s;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return N(n),t;if(i===l)return N(n),s;i=i.sibling}throw Error(d(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,p=n.child;p;){if(p===a){c=!0,a=n,l=i;break}if(p===l){c=!0,l=n,a=i;break}p=p.sibling}if(!c){for(p=i.child;p;){if(p===a){c=!0,a=i,l=n;break}if(p===l){c=!0,l=i,a=n;break}p=p.sibling}if(!c)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?t:s}function E(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t;for(t=t.child;t!==null;){if(s=E(t),s!==null)return s;t=t.sibling}return null}var C=Object.assign,D=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),w=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),ze=Symbol.for("react.activity"),bt=Symbol.for("react.memo_cache_sentinel"),zt=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=zt&&t[zt]||t["@@iterator"],typeof t=="function"?t:null)}var zs=Symbol.for("react.client.reference");function Gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===zs?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case g:return"Profiler";case f:return"StrictMode";case le:return"Suspense";case $:return"SuspenseList";case ze:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case z:return"Portal";case w:return t.displayName||"Context";case j:return(t._context.displayName||"Context")+".Consumer";case te:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X:return s=t.displayName||null,s!==null?s:Gt(t.type)||"Memo";case ie:s=t._payload,t=t._init;try{return Gt(t(s))}catch{}}return null}var kt=Array.isArray,M=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Se=[],Re=-1;function R(t){return{current:t}}function P(t){0>Re||(t.current=Se[Re],Se[Re]=null,Re--)}function Q(t,s){Re++,Se[Re]=t.current,t.current=s}var W=R(null),re=R(null),de=R(null),ye=R(null);function Ie(t,s){switch(Q(de,s),Q(re,t),Q(W,null),s.nodeType){case 9:case 11:t=(t=s.documentElement)&&(t=t.namespaceURI)?Np(t):0;break;default:if(t=s.tagName,s=s.namespaceURI)s=Np(s),t=Sp(s,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}P(W),Q(W,t)}function De(){P(W),P(re),P(de)}function Pa(t){t.memoizedState!==null&&Q(ye,t);var s=W.current,a=Sp(s,t.type);s!==a&&(Q(re,t),Q(W,a))}function Yl(t){re.current===t&&(P(W),P(re)),ye.current===t&&(P(ye),Bl._currentValue=ae)}var xi,Fc;function Ds(t){if(xi===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);xi=s&&s[1]||"",Fc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xi+t+Fc}var ji=!1;function bi(t,s){if(!t||ji)return"";ji=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(s){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(O){var H=O}Reflect.construct(t,[],G)}else{try{G.call()}catch(O){H=O}t.call(G.prototype)}}else{try{throw Error()}catch(O){H=O}(G=t())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(O){if(O&&H&&typeof O.stack=="string")return[O.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],p=i[1];if(c&&p){var S=c.split(`
`),B=p.split(`
`);for(n=l=0;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;for(;n<B.length&&!B[n].includes("DetermineComponentFrameRoot");)n++;if(l===S.length||n===B.length)for(l=S.length-1,n=B.length-1;1<=l&&0<=n&&S[l]!==B[n];)n--;for(;1<=l&&0<=n;l--,n--)if(S[l]!==B[n]){if(l!==1||n!==1)do if(l--,n--,0>n||S[l]!==B[n]){var U=`
`+S[l].replace(" at new "," at ");return t.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",t.displayName)),U}while(1<=l&&0<=n);break}}}finally{ji=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ds(a):""}function Qh(t,s){switch(t.tag){case 26:case 27:case 5:return Ds(t.type);case 16:return Ds("Lazy");case 13:return t.child!==s&&s!==null?Ds("Suspense Fallback"):Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 15:return bi(t.type,!1);case 11:return bi(t.type.render,!1);case 1:return bi(t.type,!0);case 31:return Ds("Activity");default:return""}}function Ic(t){try{var s="",a=null;do s+=Qh(t,a),a=t,t=t.return;while(t);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var vi=Object.prototype.hasOwnProperty,yi=r.unstable_scheduleCallback,gi=r.unstable_cancelCallback,Xh=r.unstable_shouldYield,Zh=r.unstable_requestPaint,ct=r.unstable_now,Jh=r.unstable_getCurrentPriorityLevel,$c=r.unstable_ImmediatePriority,eo=r.unstable_UserBlockingPriority,Ql=r.unstable_NormalPriority,Vh=r.unstable_LowPriority,to=r.unstable_IdlePriority,Kh=r.log,Wh=r.unstable_setDisableYieldValue,Ya=null,ot=null;function os(t){if(typeof Kh=="function"&&Wh(t),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(Ya,t)}catch{}}var dt=Math.clz32?Math.clz32:$h,Fh=Math.log,Ih=Math.LN2;function $h(t){return t>>>=0,t===0?32:31-(Fh(t)/Ih|0)|0}var Xl=256,Zl=262144,Jl=4194304;function ws(t){var s=t&42;if(s!==0)return s;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Vl(t,s,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var p=l&134217727;return p!==0?(l=p&~i,l!==0?n=ws(l):(c&=p,c!==0?n=ws(c):a||(a=p&~t,a!==0&&(n=ws(a))))):(p=l&~i,p!==0?n=ws(p):c!==0?n=ws(c):a||(a=l&~t,a!==0&&(n=ws(a)))),n===0?0:s!==0&&s!==n&&(s&i)===0&&(i=n&-n,a=s&-s,i>=a||i===32&&(a&4194048)!==0)?s:n}function Qa(t,s){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&s)===0}function em(t,s){switch(t){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function so(){var t=Jl;return Jl<<=1,(Jl&62914560)===0&&(Jl=4194304),t}function Ni(t){for(var s=[],a=0;31>a;a++)s.push(t);return s}function Xa(t,s){t.pendingLanes|=s,s!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tm(t,s,a,l,n,i){var c=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var p=t.entanglements,S=t.expirationTimes,B=t.hiddenUpdates;for(a=c&~a;0<a;){var U=31-dt(a),G=1<<U;p[U]=0,S[U]=-1;var H=B[U];if(H!==null)for(B[U]=null,U=0;U<H.length;U++){var O=H[U];O!==null&&(O.lane&=-536870913)}a&=~G}l!==0&&ao(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(c&~s))}function ao(t,s,a){t.pendingLanes|=s,t.suspendedLanes&=~s;var l=31-dt(s);t.entangledLanes|=s,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function lo(t,s){var a=t.entangledLanes|=s;for(t=t.entanglements;a;){var l=31-dt(a),n=1<<l;n&s|t[l]&s&&(t[l]|=s),a&=~n}}function no(t,s){var a=s&-s;return a=(a&42)!==0?1:Si(a),(a&(t.suspendedLanes|s))!==0?0:a}function Si(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ti(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function io(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:Zp(t.type))}function ro(t,s){var a=Y.p;try{return Y.p=t,s()}finally{Y.p=a}}var ds=Math.random().toString(36).slice(2),Ze="__reactFiber$"+ds,tt="__reactProps$"+ds,sa="__reactContainer$"+ds,Ci="__reactEvents$"+ds,sm="__reactListeners$"+ds,am="__reactHandles$"+ds,co="__reactResources$"+ds,Za="__reactMarker$"+ds;function qi(t){delete t[Ze],delete t[tt],delete t[Ci],delete t[sm],delete t[am]}function aa(t){var s=t[Ze];if(s)return s;for(var a=t.parentNode;a;){if(s=a[sa]||a[Ze]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(t=kp(t);t!==null;){if(a=t[Ze])return a;t=kp(t)}return s}t=a,a=t.parentNode}return null}function la(t){if(t=t[Ze]||t[sa]){var s=t.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return t}return null}function Ja(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t.stateNode;throw Error(d(33))}function na(t){var s=t[co];return s||(s=t[co]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Qe(t){t[Za]=!0}var oo=new Set,uo={};function Us(t,s){ia(t,s),ia(t+"Capture",s)}function ia(t,s){for(uo[t]=s,t=0;t<s.length;t++)oo.add(s[t])}var lm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),po={},ho={};function nm(t){return vi.call(ho,t)?!0:vi.call(po,t)?!1:lm.test(t)?ho[t]=!0:(po[t]=!0,!1)}function Kl(t,s,a){if(nm(s))if(a===null)t.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(s);return;case"boolean":var l=s.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(s);return}}t.setAttribute(s,""+a)}}function Wl(t,s,a){if(a===null)t.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttribute(s,""+a)}}function Pt(t,s,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(s,a,""+l)}}function vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mo(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function im(t,s,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,s);if(!t.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(t,s,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function Ri(t){if(!t._valueTracker){var s=mo(t)?"checked":"value";t._valueTracker=im(t,s,""+t[s])}}function fo(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var a=s.getValue(),l="";return t&&(l=mo(t)?t.checked?"true":"false":t.value),t=l,t!==a?(s.setValue(t),!0):!1}function Fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rm=/[\n"\\]/g;function yt(t){return t.replace(rm,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Ei(t,s,a,l,n,i,c,p){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),s!=null?c==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+vt(s)):t.value!==""+vt(s)&&(t.value=""+vt(s)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),s!=null?_i(t,c,vt(s)):a!=null?_i(t,c,vt(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.name=""+vt(p):t.removeAttribute("name")}function xo(t,s,a,l,n,i,c,p){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),s!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||s!=null)){Ri(t);return}a=a!=null?""+vt(a):"",s=s!=null?""+vt(s):a,p||s===t.value||(t.value=s),t.defaultValue=s}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=p?t.checked:!!l,t.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c),Ri(t)}function _i(t,s,a){s==="number"&&Fl(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ra(t,s,a,l){if(t=t.options,s){s={};for(var n=0;n<a.length;n++)s["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=s.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+vt(a),s=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}s!==null||t[n].disabled||(s=t[n])}s!==null&&(s.selected=!0)}}function jo(t,s,a){if(s!=null&&(s=""+vt(s),s!==t.value&&(t.value=s),a==null)){t.defaultValue!==s&&(t.defaultValue=s);return}t.defaultValue=a!=null?""+vt(a):""}function bo(t,s,a,l){if(s==null){if(l!=null){if(a!=null)throw Error(d(92));if(kt(l)){if(1<l.length)throw Error(d(93));l=l[0]}a=l}a==null&&(a=""),s=a}a=vt(s),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),Ri(t)}function ca(t,s){if(s){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=s;return}}t.textContent=s}var cm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vo(t,s,a){var l=s.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="":l?t.setProperty(s,a):typeof a!="number"||a===0||cm.has(s)?s==="float"?t.cssFloat=a:t[s]=(""+a).trim():t[s]=a+"px"}function yo(t,s,a){if(s!=null&&typeof s!="object")throw Error(d(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||s!=null&&s.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in s)l=s[n],s.hasOwnProperty(n)&&a[n]!==l&&vo(t,n,l)}else for(var i in s)s.hasOwnProperty(i)&&vo(t,i,s[i])}function ki(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var om=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Il(t){return dm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yt(){}var Bi=null;function Hi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oa=null,da=null;function go(t){var s=la(t);if(s&&(t=s.stateNode)){var a=t[tt]||null;e:switch(t=s.stateNode,s.type){case"input":if(Ei(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),s=a.name,a.type==="radio"&&s!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yt(""+s)+'"][type="radio"]'),s=0;s<a.length;s++){var l=a[s];if(l!==t&&l.form===t.form){var n=l[tt]||null;if(!n)throw Error(d(90));Ei(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(s=0;s<a.length;s++)l=a[s],l.form===t.form&&fo(l)}break e;case"textarea":jo(t,a.value,a.defaultValue);break e;case"select":s=a.value,s!=null&&ra(t,!!a.multiple,s,!1)}}}var Ai=!1;function No(t,s,a){if(Ai)return t(s,a);Ai=!0;try{var l=t(s);return l}finally{if(Ai=!1,(oa!==null||da!==null)&&(Ln(),oa&&(s=oa,t=da,da=oa=null,go(s),t)))for(s=0;s<t.length;s++)go(t[s])}}function Va(t,s){var a=t.stateNode;if(a===null)return null;var l=a[tt]||null;if(l===null)return null;a=l[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(d(231,s,typeof a));return a}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oi=!1;if(Qt)try{var Ka={};Object.defineProperty(Ka,"passive",{get:function(){Oi=!0}}),window.addEventListener("test",Ka,Ka),window.removeEventListener("test",Ka,Ka)}catch{Oi=!1}var us=null,zi=null,$l=null;function So(){if($l)return $l;var t,s=zi,a=s.length,l,n="value"in us?us.value:us.textContent,i=n.length;for(t=0;t<a&&s[t]===n[t];t++);var c=a-t;for(l=1;l<=c&&s[a-l]===n[i-l];l++);return $l=n.slice(t,1<l?1-l:void 0)}function en(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function tn(){return!0}function To(){return!1}function st(t){function s(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var p in t)t.hasOwnProperty(p)&&(a=t[p],this[p]=a?a(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?tn:To,this.isPropagationStopped=To,this}return C(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tn)},persist:function(){},isPersistent:tn}),s}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sn=st(Ms),Wa=C({},Ms,{view:0,detail:0}),um=st(Wa),Di,wi,Fa,an=C({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fa&&(Fa&&t.type==="mousemove"?(Di=t.screenX-Fa.screenX,wi=t.screenY-Fa.screenY):wi=Di=0,Fa=t),Di)},movementY:function(t){return"movementY"in t?t.movementY:wi}}),Co=st(an),pm=C({},an,{dataTransfer:0}),hm=st(pm),mm=C({},Wa,{relatedTarget:0}),Ui=st(mm),fm=C({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),xm=st(fm),jm=C({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bm=st(jm),vm=C({},Ms,{data:0}),qo=st(vm),ym={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sm(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=Nm[t])?!!s[t]:!1}function Mi(){return Sm}var Tm=C({},Wa,{key:function(t){if(t.key){var s=ym[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=en(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mi,charCode:function(t){return t.type==="keypress"?en(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?en(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cm=st(Tm),qm=C({},an,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ro=st(qm),Rm=C({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mi}),Em=st(Rm),_m=C({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),km=st(_m),Bm=C({},an,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hm=st(Bm),Am=C({},Ms,{newState:0,oldState:0}),Om=st(Am),zm=[9,13,27,32],Li=Qt&&"CompositionEvent"in window,Ia=null;Qt&&"documentMode"in document&&(Ia=document.documentMode);var Dm=Qt&&"TextEvent"in window&&!Ia,Eo=Qt&&(!Li||Ia&&8<Ia&&11>=Ia),_o=" ",ko=!1;function Bo(t,s){switch(t){case"keyup":return zm.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ho(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ua=!1;function wm(t,s){switch(t){case"compositionend":return Ho(s);case"keypress":return s.which!==32?null:(ko=!0,_o);case"textInput":return t=s.data,t===_o&&ko?null:t;default:return null}}function Um(t,s){if(ua)return t==="compositionend"||!Li&&Bo(t,s)?(t=So(),$l=zi=us=null,ua=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Eo&&s.locale!=="ko"?null:s.data;default:return null}}var Mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ao(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!Mm[t.type]:s==="textarea"}function Oo(t,s,a,l){oa?da?da.push(l):da=[l]:oa=l,s=Jn(s,"onChange"),0<s.length&&(a=new sn("onChange","change",null,a,l),t.push({event:a,listeners:s}))}var $a=null,el=null;function Lm(t){xp(t,0)}function ln(t){var s=Ja(t);if(fo(s))return t}function zo(t,s){if(t==="change")return s}var Do=!1;if(Qt){var Gi;if(Qt){var Pi="oninput"in document;if(!Pi){var wo=document.createElement("div");wo.setAttribute("oninput","return;"),Pi=typeof wo.oninput=="function"}Gi=Pi}else Gi=!1;Do=Gi&&(!document.documentMode||9<document.documentMode)}function Uo(){$a&&($a.detachEvent("onpropertychange",Mo),el=$a=null)}function Mo(t){if(t.propertyName==="value"&&ln(el)){var s=[];Oo(s,el,t,Hi(t)),No(Lm,s)}}function Gm(t,s,a){t==="focusin"?(Uo(),$a=s,el=a,$a.attachEvent("onpropertychange",Mo)):t==="focusout"&&Uo()}function Pm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ln(el)}function Ym(t,s){if(t==="click")return ln(s)}function Qm(t,s){if(t==="input"||t==="change")return ln(s)}function Xm(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var ut=typeof Object.is=="function"?Object.is:Xm;function tl(t,s){if(ut(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var a=Object.keys(t),l=Object.keys(s);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!vi.call(s,n)||!ut(t[n],s[n]))return!1}return!0}function Lo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Go(t,s){var a=Lo(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=s&&l>=s)return{node:a,offset:s-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lo(a)}}function Po(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?Po(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function Yo(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var s=Fl(t.document);s instanceof t.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)t=s.contentWindow;else break;s=Fl(t.document)}return s}function Yi(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}var Zm=Qt&&"documentMode"in document&&11>=document.documentMode,pa=null,Qi=null,sl=null,Xi=!1;function Qo(t,s,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xi||pa==null||pa!==Fl(l)||(l=pa,"selectionStart"in l&&Yi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),sl&&tl(sl,l)||(sl=l,l=Jn(Qi,"onSelect"),0<l.length&&(s=new sn("onSelect","select",null,s,a),t.push({event:s,listeners:l}),s.target=pa)))}function Ls(t,s){var a={};return a[t.toLowerCase()]=s.toLowerCase(),a["Webkit"+t]="webkit"+s,a["Moz"+t]="moz"+s,a}var ha={animationend:Ls("Animation","AnimationEnd"),animationiteration:Ls("Animation","AnimationIteration"),animationstart:Ls("Animation","AnimationStart"),transitionrun:Ls("Transition","TransitionRun"),transitionstart:Ls("Transition","TransitionStart"),transitioncancel:Ls("Transition","TransitionCancel"),transitionend:Ls("Transition","TransitionEnd")},Zi={},Xo={};Qt&&(Xo=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function Gs(t){if(Zi[t])return Zi[t];if(!ha[t])return t;var s=ha[t],a;for(a in s)if(s.hasOwnProperty(a)&&a in Xo)return Zi[t]=s[a];return t}var Zo=Gs("animationend"),Jo=Gs("animationiteration"),Vo=Gs("animationstart"),Jm=Gs("transitionrun"),Vm=Gs("transitionstart"),Km=Gs("transitioncancel"),Ko=Gs("transitionend"),Wo=new Map,Ji="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ji.push("scrollEnd");function Bt(t,s){Wo.set(t,s),Us(s,[t])}var nn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gt=[],ma=0,Vi=0;function rn(){for(var t=ma,s=Vi=ma=0;s<t;){var a=gt[s];gt[s++]=null;var l=gt[s];gt[s++]=null;var n=gt[s];gt[s++]=null;var i=gt[s];if(gt[s++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&Fo(a,n,i)}}function cn(t,s,a,l){gt[ma++]=t,gt[ma++]=s,gt[ma++]=a,gt[ma++]=l,Vi|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ki(t,s,a,l){return cn(t,s,a,l),on(t)}function Ps(t,s){return cn(t,null,null,s),on(t)}function Fo(t,s,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&s!==null&&(n=31-dt(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[s]:l.push(s),s.lane=a|536870912),i):null}function on(t){if(50<Tl)throw Tl=0,lc=null,Error(d(185));for(var s=t.return;s!==null;)t=s,s=t.return;return t.tag===3?t.stateNode:null}var fa={};function Wm(t,s,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(t,s,a,l){return new Wm(t,s,a,l)}function Wi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xt(t,s){var a=t.alternate;return a===null?(a=pt(t.tag,s,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=s,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,s=t.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Io(t,s){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=s,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,s=a.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),t}function dn(t,s,a,l,n,i){var c=0;if(l=t,typeof t=="function")Wi(t)&&(c=1);else if(typeof t=="string")c=sx(t,a,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case ze:return t=pt(31,a,s,n),t.elementType=ze,t.lanes=i,t;case A:return Ys(a.children,n,i,s);case f:c=8,n|=24;break;case g:return t=pt(12,a,s,n|2),t.elementType=g,t.lanes=i,t;case le:return t=pt(13,a,s,n),t.elementType=le,t.lanes=i,t;case $:return t=pt(19,a,s,n),t.elementType=$,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:c=10;break e;case j:c=9;break e;case te:c=11;break e;case X:c=14;break e;case ie:c=16,l=null;break e}c=29,a=Error(d(130,t===null?"null":typeof t,"")),l=null}return s=pt(c,a,s,n),s.elementType=t,s.type=l,s.lanes=i,s}function Ys(t,s,a,l){return t=pt(7,t,l,s),t.lanes=a,t}function Fi(t,s,a){return t=pt(6,t,null,s),t.lanes=a,t}function $o(t){var s=pt(18,null,null,0);return s.stateNode=t,s}function Ii(t,s,a){return s=pt(4,t.children!==null?t.children:[],t.key,s),s.lanes=a,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}var ed=new WeakMap;function Nt(t,s){if(typeof t=="object"&&t!==null){var a=ed.get(t);return a!==void 0?a:(s={value:t,source:s,stack:Ic(s)},ed.set(t,s),s)}return{value:t,source:s,stack:Ic(s)}}var xa=[],ja=0,un=null,al=0,St=[],Tt=0,ps=null,Dt=1,wt="";function Zt(t,s){xa[ja++]=al,xa[ja++]=un,un=t,al=s}function td(t,s,a){St[Tt++]=Dt,St[Tt++]=wt,St[Tt++]=ps,ps=t;var l=Dt;t=wt;var n=32-dt(l)-1;l&=~(1<<n),a+=1;var i=32-dt(s)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Dt=1<<32-dt(s)+n|a<<n|l,wt=i+t}else Dt=1<<i|a<<n|l,wt=t}function $i(t){t.return!==null&&(Zt(t,1),td(t,1,0))}function er(t){for(;t===un;)un=xa[--ja],xa[ja]=null,al=xa[--ja],xa[ja]=null;for(;t===ps;)ps=St[--Tt],St[Tt]=null,wt=St[--Tt],St[Tt]=null,Dt=St[--Tt],St[Tt]=null}function sd(t,s){St[Tt++]=Dt,St[Tt++]=wt,St[Tt++]=ps,Dt=s.id,wt=s.overflow,ps=t}var Je=null,_e=null,fe=!1,hs=null,Ct=!1,tr=Error(d(519));function ms(t){var s=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll(Nt(s,t)),tr}function ad(t){var s=t.stateNode,a=t.type,l=t.memoizedProps;switch(s[Ze]=t,s[tt]=l,a){case"dialog":pe("cancel",s),pe("close",s);break;case"iframe":case"object":case"embed":pe("load",s);break;case"video":case"audio":for(a=0;a<ql.length;a++)pe(ql[a],s);break;case"source":pe("error",s);break;case"img":case"image":case"link":pe("error",s),pe("load",s);break;case"details":pe("toggle",s);break;case"input":pe("invalid",s),xo(s,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":pe("invalid",s);break;case"textarea":pe("invalid",s),bo(s,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||s.textContent===""+a||l.suppressHydrationWarning===!0||yp(s.textContent,a)?(l.popover!=null&&(pe("beforetoggle",s),pe("toggle",s)),l.onScroll!=null&&pe("scroll",s),l.onScrollEnd!=null&&pe("scrollend",s),l.onClick!=null&&(s.onclick=Yt),s=!0):s=!1,s||ms(t,!0)}function ld(t){for(Je=t.return;Je;)switch(Je.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:Je=Je.return}}function ba(t){if(t!==Je)return!1;if(!fe)return ld(t),fe=!0,!1;var s=t.tag,a;if((a=s!==3&&s!==27)&&((a=s===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vc(t.type,t.memoizedProps)),a=!a),a&&_e&&ms(t),ld(t),s===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));_e=_p(t)}else if(s===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));_e=_p(t)}else s===27?(s=_e,Es(t.type)?(t=Tc,Tc=null,_e=t):_e=s):_e=Je?Rt(t.stateNode.nextSibling):null;return!0}function Qs(){_e=Je=null,fe=!1}function sr(){var t=hs;return t!==null&&(it===null?it=t:it.push.apply(it,t),hs=null),t}function ll(t){hs===null?hs=[t]:hs.push(t)}var ar=R(null),Xs=null,Jt=null;function fs(t,s,a){Q(ar,s._currentValue),s._currentValue=a}function Vt(t){t._currentValue=ar.current,P(ar)}function lr(t,s,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,l!==null&&(l.childLanes|=s)):l!==null&&(l.childLanes&s)!==s&&(l.childLanes|=s),t===a)break;t=t.return}}function nr(t,s,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var p=i;i=n;for(var S=0;S<s.length;S++)if(p.context===s[S]){i.lanes|=a,p=i.alternate,p!==null&&(p.lanes|=a),lr(i.return,a,t),l||(c=null);break e}i=p.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(d(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),lr(c,a,t),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===t){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function va(t,s,a,l){t=null;for(var n=s,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(d(387));if(c=c.memoizedProps,c!==null){var p=n.type;ut(n.pendingProps.value,c.value)||(t!==null?t.push(p):t=[p])}}else if(n===ye.current){if(c=n.alternate,c===null)throw Error(d(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Bl):t=[Bl])}n=n.return}t!==null&&nr(s,t,a,l),s.flags|=262144}function pn(t){for(t=t.firstContext;t!==null;){if(!ut(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Zs(t){Xs=t,Jt=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ve(t){return nd(Xs,t)}function hn(t,s){return Xs===null&&Zs(t),nd(t,s)}function nd(t,s){var a=s._currentValue;if(s={context:s,memoizedValue:a,next:null},Jt===null){if(t===null)throw Error(d(308));Jt=s,t.dependencies={lanes:0,firstContext:s},t.flags|=524288}else Jt=Jt.next=s;return a}var Fm=typeof AbortController<"u"?AbortController:function(){var t=[],s=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){s.aborted=!0,t.forEach(function(a){return a()})}},Im=r.unstable_scheduleCallback,$m=r.unstable_NormalPriority,Me={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ir(){return{controller:new Fm,data:new Map,refCount:0}}function nl(t){t.refCount--,t.refCount===0&&Im($m,function(){t.controller.abort()})}var il=null,rr=0,ya=0,ga=null;function ef(t,s){if(il===null){var a=il=[];rr=0,ya=dc(),ga={status:"pending",value:void 0,then:function(l){a.push(l)}}}return rr++,s.then(id,id),s}function id(){if(--rr===0&&il!==null){ga!==null&&(ga.status="fulfilled");var t=il;il=null,ya=0,ga=null;for(var s=0;s<t.length;s++)(0,t[s])()}}function tf(t,s){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=s;for(var n=0;n<a.length;n++)(0,a[n])(s)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var rd=M.S;M.S=function(t,s){Qu=ct(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&ef(t,s),rd!==null&&rd(t,s)};var Js=R(null);function cr(){var t=Js.current;return t!==null?t:Ee.pooledCache}function mn(t,s){s===null?Q(Js,Js.current):Q(Js,s.pool)}function cd(){var t=cr();return t===null?null:{parent:Me._currentValue,pool:t}}var Na=Error(d(460)),or=Error(d(474)),fn=Error(d(542)),xn={then:function(){}};function od(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dd(t,s,a){switch(a=t[a],a===void 0?t.push(s):a!==s&&(s.then(Yt,Yt),s=a),s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,pd(t),t;default:if(typeof s.status=="string")s.then(Yt,Yt);else{if(t=Ee,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=s,t.status="pending",t.then(function(l){if(s.status==="pending"){var n=s;n.status="fulfilled",n.value=l}},function(l){if(s.status==="pending"){var n=s;n.status="rejected",n.reason=l}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,pd(t),t}throw Ks=s,Na}}function Vs(t){try{var s=t._init;return s(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ks=a,Na):a}}var Ks=null;function ud(){if(Ks===null)throw Error(d(459));var t=Ks;return Ks=null,t}function pd(t){if(t===Na||t===fn)throw Error(d(483))}var Sa=null,rl=0;function jn(t){var s=rl;return rl+=1,Sa===null&&(Sa=[]),dd(Sa,t,s)}function cl(t,s){s=s.props.ref,t.ref=s!==void 0?s:null}function bn(t,s){throw s.$$typeof===D?Error(d(525)):(t=Object.prototype.toString.call(s),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t)))}function hd(t){function s(_,q){if(t){var k=_.deletions;k===null?(_.deletions=[q],_.flags|=16):k.push(q)}}function a(_,q){if(!t)return null;for(;q!==null;)s(_,q),q=q.sibling;return null}function l(_){for(var q=new Map;_!==null;)_.key!==null?q.set(_.key,_):q.set(_.index,_),_=_.sibling;return q}function n(_,q){return _=Xt(_,q),_.index=0,_.sibling=null,_}function i(_,q,k){return _.index=k,t?(k=_.alternate,k!==null?(k=k.index,k<q?(_.flags|=67108866,q):k):(_.flags|=67108866,q)):(_.flags|=1048576,q)}function c(_){return t&&_.alternate===null&&(_.flags|=67108866),_}function p(_,q,k,L){return q===null||q.tag!==6?(q=Fi(k,_.mode,L),q.return=_,q):(q=n(q,k),q.return=_,q)}function S(_,q,k,L){var I=k.type;return I===A?U(_,q,k.props.children,L,k.key):q!==null&&(q.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ie&&Vs(I)===q.type)?(q=n(q,k.props),cl(q,k),q.return=_,q):(q=dn(k.type,k.key,k.props,null,_.mode,L),cl(q,k),q.return=_,q)}function B(_,q,k,L){return q===null||q.tag!==4||q.stateNode.containerInfo!==k.containerInfo||q.stateNode.implementation!==k.implementation?(q=Ii(k,_.mode,L),q.return=_,q):(q=n(q,k.children||[]),q.return=_,q)}function U(_,q,k,L,I){return q===null||q.tag!==7?(q=Ys(k,_.mode,L,I),q.return=_,q):(q=n(q,k),q.return=_,q)}function G(_,q,k){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Fi(""+q,_.mode,k),q.return=_,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case T:return k=dn(q.type,q.key,q.props,null,_.mode,k),cl(k,q),k.return=_,k;case z:return q=Ii(q,_.mode,k),q.return=_,q;case ie:return q=Vs(q),G(_,q,k)}if(kt(q)||et(q))return q=Ys(q,_.mode,k,null),q.return=_,q;if(typeof q.then=="function")return G(_,jn(q),k);if(q.$$typeof===w)return G(_,hn(_,q),k);bn(_,q)}return null}function H(_,q,k,L){var I=q!==null?q.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return I!==null?null:p(_,q,""+k,L);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case T:return k.key===I?S(_,q,k,L):null;case z:return k.key===I?B(_,q,k,L):null;case ie:return k=Vs(k),H(_,q,k,L)}if(kt(k)||et(k))return I!==null?null:U(_,q,k,L,null);if(typeof k.then=="function")return H(_,q,jn(k),L);if(k.$$typeof===w)return H(_,q,hn(_,k),L);bn(_,k)}return null}function O(_,q,k,L,I){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return _=_.get(k)||null,p(q,_,""+L,I);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case T:return _=_.get(L.key===null?k:L.key)||null,S(q,_,L,I);case z:return _=_.get(L.key===null?k:L.key)||null,B(q,_,L,I);case ie:return L=Vs(L),O(_,q,k,L,I)}if(kt(L)||et(L))return _=_.get(k)||null,U(q,_,L,I,null);if(typeof L.then=="function")return O(_,q,k,jn(L),I);if(L.$$typeof===w)return O(_,q,k,hn(q,L),I);bn(q,L)}return null}function Z(_,q,k,L){for(var I=null,je=null,F=q,oe=q=0,me=null;F!==null&&oe<k.length;oe++){F.index>oe?(me=F,F=null):me=F.sibling;var be=H(_,F,k[oe],L);if(be===null){F===null&&(F=me);break}t&&F&&be.alternate===null&&s(_,F),q=i(be,q,oe),je===null?I=be:je.sibling=be,je=be,F=me}if(oe===k.length)return a(_,F),fe&&Zt(_,oe),I;if(F===null){for(;oe<k.length;oe++)F=G(_,k[oe],L),F!==null&&(q=i(F,q,oe),je===null?I=F:je.sibling=F,je=F);return fe&&Zt(_,oe),I}for(F=l(F);oe<k.length;oe++)me=O(F,_,oe,k[oe],L),me!==null&&(t&&me.alternate!==null&&F.delete(me.key===null?oe:me.key),q=i(me,q,oe),je===null?I=me:je.sibling=me,je=me);return t&&F.forEach(function(As){return s(_,As)}),fe&&Zt(_,oe),I}function ee(_,q,k,L){if(k==null)throw Error(d(151));for(var I=null,je=null,F=q,oe=q=0,me=null,be=k.next();F!==null&&!be.done;oe++,be=k.next()){F.index>oe?(me=F,F=null):me=F.sibling;var As=H(_,F,be.value,L);if(As===null){F===null&&(F=me);break}t&&F&&As.alternate===null&&s(_,F),q=i(As,q,oe),je===null?I=As:je.sibling=As,je=As,F=me}if(be.done)return a(_,F),fe&&Zt(_,oe),I;if(F===null){for(;!be.done;oe++,be=k.next())be=G(_,be.value,L),be!==null&&(q=i(be,q,oe),je===null?I=be:je.sibling=be,je=be);return fe&&Zt(_,oe),I}for(F=l(F);!be.done;oe++,be=k.next())be=O(F,_,oe,be.value,L),be!==null&&(t&&be.alternate!==null&&F.delete(be.key===null?oe:be.key),q=i(be,q,oe),je===null?I=be:je.sibling=be,je=be);return t&&F.forEach(function(hx){return s(_,hx)}),fe&&Zt(_,oe),I}function qe(_,q,k,L){if(typeof k=="object"&&k!==null&&k.type===A&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case T:e:{for(var I=k.key;q!==null;){if(q.key===I){if(I=k.type,I===A){if(q.tag===7){a(_,q.sibling),L=n(q,k.props.children),L.return=_,_=L;break e}}else if(q.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ie&&Vs(I)===q.type){a(_,q.sibling),L=n(q,k.props),cl(L,k),L.return=_,_=L;break e}a(_,q);break}else s(_,q);q=q.sibling}k.type===A?(L=Ys(k.props.children,_.mode,L,k.key),L.return=_,_=L):(L=dn(k.type,k.key,k.props,null,_.mode,L),cl(L,k),L.return=_,_=L)}return c(_);case z:e:{for(I=k.key;q!==null;){if(q.key===I)if(q.tag===4&&q.stateNode.containerInfo===k.containerInfo&&q.stateNode.implementation===k.implementation){a(_,q.sibling),L=n(q,k.children||[]),L.return=_,_=L;break e}else{a(_,q);break}else s(_,q);q=q.sibling}L=Ii(k,_.mode,L),L.return=_,_=L}return c(_);case ie:return k=Vs(k),qe(_,q,k,L)}if(kt(k))return Z(_,q,k,L);if(et(k)){if(I=et(k),typeof I!="function")throw Error(d(150));return k=I.call(k),ee(_,q,k,L)}if(typeof k.then=="function")return qe(_,q,jn(k),L);if(k.$$typeof===w)return qe(_,q,hn(_,k),L);bn(_,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,q!==null&&q.tag===6?(a(_,q.sibling),L=n(q,k),L.return=_,_=L):(a(_,q),L=Fi(k,_.mode,L),L.return=_,_=L),c(_)):a(_,q)}return function(_,q,k,L){try{rl=0;var I=qe(_,q,k,L);return Sa=null,I}catch(F){if(F===Na||F===fn)throw F;var je=pt(29,F,null,_.mode);return je.lanes=L,je.return=_,je}}}var Ws=hd(!0),md=hd(!1),xs=!1;function dr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ur(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function js(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function bs(t,s,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(ve&2)!==0){var n=l.pending;return n===null?s.next=s:(s.next=n.next,n.next=s),l.pending=s,s=on(t),Fo(t,null,a),s}return cn(t,l,s,a),on(t)}function ol(t,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194048)!==0)){var l=s.lanes;l&=t.pendingLanes,a|=l,s.lanes=a,lo(t,a)}}function pr(t,s){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=s:i=i.next=s}else n=i=s;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=s:t.next=s,a.lastBaseUpdate=s}var hr=!1;function dl(){if(hr){var t=ga;if(t!==null)throw t}}function ul(t,s,a,l){hr=!1;var n=t.updateQueue;xs=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,p=n.shared.pending;if(p!==null){n.shared.pending=null;var S=p,B=S.next;S.next=null,c===null?i=B:c.next=B,c=S;var U=t.alternate;U!==null&&(U=U.updateQueue,p=U.lastBaseUpdate,p!==c&&(p===null?U.firstBaseUpdate=B:p.next=B,U.lastBaseUpdate=S))}if(i!==null){var G=n.baseState;c=0,U=B=S=null,p=i;do{var H=p.lane&-536870913,O=H!==p.lane;if(O?(he&H)===H:(l&H)===H){H!==0&&H===ya&&(hr=!0),U!==null&&(U=U.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var Z=t,ee=p;H=s;var qe=a;switch(ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){G=Z.call(qe,G,H);break e}G=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,H=typeof Z=="function"?Z.call(qe,G,H):Z,H==null)break e;G=C({},G,H);break e;case 2:xs=!0}}H=p.callback,H!==null&&(t.flags|=64,O&&(t.flags|=8192),O=n.callbacks,O===null?n.callbacks=[H]:O.push(H))}else O={lane:H,tag:p.tag,payload:p.payload,callback:p.callback,next:null},U===null?(B=U=O,S=G):U=U.next=O,c|=H;if(p=p.next,p===null){if(p=n.shared.pending,p===null)break;O=p,p=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);U===null&&(S=G),n.baseState=S,n.firstBaseUpdate=B,n.lastBaseUpdate=U,i===null&&(n.shared.lanes=0),Ss|=c,t.lanes=c,t.memoizedState=G}}function fd(t,s){if(typeof t!="function")throw Error(d(191,t));t.call(s)}function xd(t,s){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)fd(a[t],s)}var Ta=R(null),vn=R(0);function jd(t,s){t=as,Q(vn,t),Q(Ta,s),as=t|s.baseLanes}function mr(){Q(vn,as),Q(Ta,Ta.current)}function fr(){as=vn.current,P(Ta),P(vn)}var ht=R(null),qt=null;function vs(t){var s=t.alternate;Q(we,we.current&1),Q(ht,t),qt===null&&(s===null||Ta.current!==null||s.memoizedState!==null)&&(qt=t)}function xr(t){Q(we,we.current),Q(ht,t),qt===null&&(qt=t)}function bd(t){t.tag===22?(Q(we,we.current),Q(ht,t),qt===null&&(qt=t)):ys()}function ys(){Q(we,we.current),Q(ht,ht.current)}function mt(t){P(ht),qt===t&&(qt=null),P(we)}var we=R(0);function yn(t){for(var s=t;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Nc(a)||Sc(a)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Kt=0,ce=null,Te=null,Le=null,gn=!1,Ca=!1,Fs=!1,Nn=0,pl=0,qa=null,sf=0;function Ae(){throw Error(d(321))}function jr(t,s){if(s===null)return!1;for(var a=0;a<s.length&&a<t.length;a++)if(!ut(t[a],s[a]))return!1;return!0}function br(t,s,a,l,n,i){return Kt=i,ce=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,M.H=t===null||t.memoizedState===null?tu:Ar,Fs=!1,i=a(l,n),Fs=!1,Ca&&(i=yd(s,a,l,n)),vd(t),i}function vd(t){M.H=fl;var s=Te!==null&&Te.next!==null;if(Kt=0,Le=Te=ce=null,gn=!1,pl=0,qa=null,s)throw Error(d(300));t===null||Ge||(t=t.dependencies,t!==null&&pn(t)&&(Ge=!0))}function yd(t,s,a,l){ce=t;var n=0;do{if(Ca&&(qa=null),pl=0,Ca=!1,25<=n)throw Error(d(301));if(n+=1,Le=Te=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=su,i=s(a,l)}while(Ca);return i}function af(){var t=M.H,s=t.useState()[0];return s=typeof s.then=="function"?hl(s):s,t=t.useState()[0],(Te!==null?Te.memoizedState:null)!==t&&(ce.flags|=1024),s}function vr(){var t=Nn!==0;return Nn=0,t}function yr(t,s,a){s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~a}function gr(t){if(gn){for(t=t.memoizedState;t!==null;){var s=t.queue;s!==null&&(s.pending=null),t=t.next}gn=!1}Kt=0,Le=Te=ce=null,Ca=!1,pl=Nn=0,qa=null}function $e(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ce.memoizedState=Le=t:Le=Le.next=t,Le}function Ue(){if(Te===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Te.next;var s=Le===null?ce.memoizedState:Le.next;if(s!==null)Le=s,Te=t;else{if(t===null)throw ce.alternate===null?Error(d(467)):Error(d(310));Te=t,t={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Le===null?ce.memoizedState=Le=t:Le=Le.next=t}return Le}function Sn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(t){var s=pl;return pl+=1,qa===null&&(qa=[]),t=dd(qa,t,s),s=ce,(Le===null?s.memoizedState:Le.next)===null&&(s=s.alternate,M.H=s===null||s.memoizedState===null?tu:Ar),t}function Tn(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return hl(t);if(t.$$typeof===w)return Ve(t)}throw Error(d(438,String(t)))}function Nr(t){var s=null,a=ce.updateQueue;if(a!==null&&(s=a.memoCache),s==null){var l=ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(s={data:l.data.map(function(n){return n.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),a===null&&(a=Sn(),ce.updateQueue=a),a.memoCache=s,a=s.data[s.index],a===void 0)for(a=s.data[s.index]=Array(t),l=0;l<t;l++)a[l]=bt;return s.index++,a}function Wt(t,s){return typeof s=="function"?s(t):s}function Cn(t){var s=Ue();return Sr(s,Te,t)}function Sr(t,s,a){var l=t.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}s.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{s=n.next;var p=c=null,S=null,B=s,U=!1;do{var G=B.lane&-536870913;if(G!==B.lane?(he&G)===G:(Kt&G)===G){var H=B.revertLane;if(H===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),G===ya&&(U=!0);else if((Kt&H)===H){B=B.next,H===ya&&(U=!0);continue}else G={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},S===null?(p=S=G,c=i):S=S.next=G,ce.lanes|=H,Ss|=H;G=B.action,Fs&&a(i,G),i=B.hasEagerState?B.eagerState:a(i,G)}else H={lane:G,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},S===null?(p=S=H,c=i):S=S.next=H,ce.lanes|=G,Ss|=G;B=B.next}while(B!==null&&B!==s);if(S===null?c=i:S.next=p,!ut(i,t.memoizedState)&&(Ge=!0,U&&(a=ga,a!==null)))throw a;t.memoizedState=i,t.baseState=c,t.baseQueue=S,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Tr(t){var s=Ue(),a=s.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=s.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=t(i,c.action),c=c.next;while(c!==n);ut(i,s.memoizedState)||(Ge=!0),s.memoizedState=i,s.baseQueue===null&&(s.baseState=i),a.lastRenderedState=i}return[i,l]}function gd(t,s,a){var l=ce,n=Ue(),i=fe;if(i){if(a===void 0)throw Error(d(407));a=a()}else a=s();var c=!ut((Te||n).memoizedState,a);if(c&&(n.memoizedState=a,Ge=!0),n=n.queue,Rr(Td.bind(null,l,n,t),[t]),n.getSnapshot!==s||c||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,Ra(9,{destroy:void 0},Sd.bind(null,l,n,a,s),null),Ee===null)throw Error(d(349));i||(Kt&127)!==0||Nd(l,s,a)}return a}function Nd(t,s,a){t.flags|=16384,t={getSnapshot:s,value:a},s=ce.updateQueue,s===null?(s=Sn(),ce.updateQueue=s,s.stores=[t]):(a=s.stores,a===null?s.stores=[t]:a.push(t))}function Sd(t,s,a,l){s.value=a,s.getSnapshot=l,Cd(s)&&qd(t)}function Td(t,s,a){return a(function(){Cd(s)&&qd(t)})}function Cd(t){var s=t.getSnapshot;t=t.value;try{var a=s();return!ut(t,a)}catch{return!0}}function qd(t){var s=Ps(t,2);s!==null&&rt(s,t,2)}function Cr(t){var s=$e();if(typeof t=="function"){var a=t;if(t=a(),Fs){os(!0);try{a()}finally{os(!1)}}}return s.memoizedState=s.baseState=t,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:t},s}function Rd(t,s,a,l){return t.baseState=a,Sr(t,Te,typeof l=="function"?l:Wt)}function lf(t,s,a,l,n){if(En(t))throw Error(d(485));if(t=s.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};M.T!==null?a(!0):i.isTransition=!1,l(i),a=s.pending,a===null?(i.next=s.pending=i,Ed(s,i)):(i.next=a.next,s.pending=a.next=i)}}function Ed(t,s){var a=s.action,l=s.payload,n=t.state;if(s.isTransition){var i=M.T,c={};M.T=c;try{var p=a(n,l),S=M.S;S!==null&&S(c,p),_d(t,s,p)}catch(B){qr(t,s,B)}finally{i!==null&&c.types!==null&&(i.types=c.types),M.T=i}}else try{i=a(n,l),_d(t,s,i)}catch(B){qr(t,s,B)}}function _d(t,s,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){kd(t,s,l)},function(l){return qr(t,s,l)}):kd(t,s,a)}function kd(t,s,a){s.status="fulfilled",s.value=a,Bd(s),t.state=a,s=t.pending,s!==null&&(a=s.next,a===s?t.pending=null:(a=a.next,s.next=a,Ed(t,a)))}function qr(t,s,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do s.status="rejected",s.reason=a,Bd(s),s=s.next;while(s!==l)}t.action=null}function Bd(t){t=t.listeners;for(var s=0;s<t.length;s++)(0,t[s])()}function Hd(t,s){return s}function Ad(t,s){if(fe){var a=Ee.formState;if(a!==null){e:{var l=ce;if(fe){if(_e){t:{for(var n=_e,i=Ct;n.nodeType!==8;){if(!i){n=null;break t}if(n=Rt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){_e=Rt(n.nextSibling),l=n.data==="F!";break e}}ms(l)}l=!1}l&&(s=a[0])}}return a=$e(),a.memoizedState=a.baseState=s,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hd,lastRenderedState:s},a.queue=l,a=Id.bind(null,ce,l),l.dispatch=a,l=Cr(!1),i=Hr.bind(null,ce,!1,l.queue),l=$e(),n={state:s,dispatch:null,action:t,pending:null},l.queue=n,a=lf.bind(null,ce,n,i,a),n.dispatch=a,l.memoizedState=t,[s,a,!1]}function Od(t){var s=Ue();return zd(s,Te,t)}function zd(t,s,a){if(s=Sr(t,s,Hd)[0],t=Cn(Wt)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var l=hl(s)}catch(c){throw c===Na?fn:c}else l=s;s=Ue();var n=s.queue,i=n.dispatch;return a!==s.memoizedState&&(ce.flags|=2048,Ra(9,{destroy:void 0},nf.bind(null,n,a),null)),[l,i,t]}function nf(t,s){t.action=s}function Dd(t){var s=Ue(),a=Te;if(a!==null)return zd(s,a,t);Ue(),s=s.memoizedState,a=Ue();var l=a.queue.dispatch;return a.memoizedState=t,[s,l,!1]}function Ra(t,s,a,l){return t={tag:t,create:a,deps:l,inst:s,next:null},s=ce.updateQueue,s===null&&(s=Sn(),ce.updateQueue=s),a=s.lastEffect,a===null?s.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,s.lastEffect=t),t}function wd(){return Ue().memoizedState}function qn(t,s,a,l){var n=$e();ce.flags|=t,n.memoizedState=Ra(1|s,{destroy:void 0},a,l===void 0?null:l)}function Rn(t,s,a,l){var n=Ue();l=l===void 0?null:l;var i=n.memoizedState.inst;Te!==null&&l!==null&&jr(l,Te.memoizedState.deps)?n.memoizedState=Ra(s,i,a,l):(ce.flags|=t,n.memoizedState=Ra(1|s,i,a,l))}function Ud(t,s){qn(8390656,8,t,s)}function Rr(t,s){Rn(2048,8,t,s)}function rf(t){ce.flags|=4;var s=ce.updateQueue;if(s===null)s=Sn(),ce.updateQueue=s,s.events=[t];else{var a=s.events;a===null?s.events=[t]:a.push(t)}}function Md(t){var s=Ue().memoizedState;return rf({ref:s,nextImpl:t}),function(){if((ve&2)!==0)throw Error(d(440));return s.impl.apply(void 0,arguments)}}function Ld(t,s){return Rn(4,2,t,s)}function Gd(t,s){return Rn(4,4,t,s)}function Pd(t,s){if(typeof s=="function"){t=t();var a=s(t);return function(){typeof a=="function"?a():s(null)}}if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function Yd(t,s,a){a=a!=null?a.concat([t]):null,Rn(4,4,Pd.bind(null,s,t),a)}function Er(){}function Qd(t,s){var a=Ue();s=s===void 0?null:s;var l=a.memoizedState;return s!==null&&jr(s,l[1])?l[0]:(a.memoizedState=[t,s],t)}function Xd(t,s){var a=Ue();s=s===void 0?null:s;var l=a.memoizedState;if(s!==null&&jr(s,l[1]))return l[0];if(l=t(),Fs){os(!0);try{t()}finally{os(!1)}}return a.memoizedState=[l,s],l}function _r(t,s,a){return a===void 0||(Kt&1073741824)!==0&&(he&261930)===0?t.memoizedState=s:(t.memoizedState=a,t=Zu(),ce.lanes|=t,Ss|=t,a)}function Zd(t,s,a,l){return ut(a,s)?a:Ta.current!==null?(t=_r(t,a,l),ut(t,s)||(Ge=!0),t):(Kt&42)===0||(Kt&1073741824)!==0&&(he&261930)===0?(Ge=!0,t.memoizedState=a):(t=Zu(),ce.lanes|=t,Ss|=t,s)}function Jd(t,s,a,l,n){var i=Y.p;Y.p=i!==0&&8>i?i:8;var c=M.T,p={};M.T=p,Hr(t,!1,s,a);try{var S=n(),B=M.S;if(B!==null&&B(p,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var U=tf(S,l);ml(t,s,U,jt(t))}else ml(t,s,l,jt(t))}catch(G){ml(t,s,{then:function(){},status:"rejected",reason:G},jt())}finally{Y.p=i,c!==null&&p.types!==null&&(c.types=p.types),M.T=c}}function cf(){}function kr(t,s,a,l){if(t.tag!==5)throw Error(d(476));var n=Vd(t).queue;Jd(t,n,s,ae,a===null?cf:function(){return Kd(t),a(l)})}function Vd(t){var s=t.memoizedState;if(s!==null)return s;s={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:ae},next:null};var a={};return s.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:a},next:null},t.memoizedState=s,t=t.alternate,t!==null&&(t.memoizedState=s),s}function Kd(t){var s=Vd(t);s.next===null&&(s=t.alternate.memoizedState),ml(t,s.next.queue,{},jt())}function Br(){return Ve(Bl)}function Wd(){return Ue().memoizedState}function Fd(){return Ue().memoizedState}function of(t){for(var s=t.return;s!==null;){switch(s.tag){case 24:case 3:var a=jt();t=js(a);var l=bs(s,t,a);l!==null&&(rt(l,s,a),ol(l,s,a)),s={cache:ir()},t.payload=s;return}s=s.return}}function df(t,s,a){var l=jt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},En(t)?$d(s,a):(a=Ki(t,s,a,l),a!==null&&(rt(a,t,l),eu(a,s,l)))}function Id(t,s,a){var l=jt();ml(t,s,a,l)}function ml(t,s,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(En(t))$d(s,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=s.lastRenderedReducer,i!==null))try{var c=s.lastRenderedState,p=i(c,a);if(n.hasEagerState=!0,n.eagerState=p,ut(p,c))return cn(t,s,n,0),Ee===null&&rn(),!1}catch{}if(a=Ki(t,s,n,l),a!==null)return rt(a,t,l),eu(a,s,l),!0}return!1}function Hr(t,s,a,l){if(l={lane:2,revertLane:dc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},En(t)){if(s)throw Error(d(479))}else s=Ki(t,a,l,2),s!==null&&rt(s,t,2)}function En(t){var s=t.alternate;return t===ce||s!==null&&s===ce}function $d(t,s){Ca=gn=!0;var a=t.pending;a===null?s.next=s:(s.next=a.next,a.next=s),t.pending=s}function eu(t,s,a){if((a&4194048)!==0){var l=s.lanes;l&=t.pendingLanes,a|=l,s.lanes=a,lo(t,a)}}var fl={readContext:Ve,use:Tn,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae};fl.useEffectEvent=Ae;var tu={readContext:Ve,use:Tn,useCallback:function(t,s){return $e().memoizedState=[t,s===void 0?null:s],t},useContext:Ve,useEffect:Ud,useImperativeHandle:function(t,s,a){a=a!=null?a.concat([t]):null,qn(4194308,4,Pd.bind(null,s,t),a)},useLayoutEffect:function(t,s){return qn(4194308,4,t,s)},useInsertionEffect:function(t,s){qn(4,2,t,s)},useMemo:function(t,s){var a=$e();s=s===void 0?null:s;var l=t();if(Fs){os(!0);try{t()}finally{os(!1)}}return a.memoizedState=[l,s],l},useReducer:function(t,s,a){var l=$e();if(a!==void 0){var n=a(s);if(Fs){os(!0);try{a(s)}finally{os(!1)}}}else n=s;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=df.bind(null,ce,t),[l.memoizedState,t]},useRef:function(t){var s=$e();return t={current:t},s.memoizedState=t},useState:function(t){t=Cr(t);var s=t.queue,a=Id.bind(null,ce,s);return s.dispatch=a,[t.memoizedState,a]},useDebugValue:Er,useDeferredValue:function(t,s){var a=$e();return _r(a,t,s)},useTransition:function(){var t=Cr(!1);return t=Jd.bind(null,ce,t.queue,!0,!1),$e().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,s,a){var l=ce,n=$e();if(fe){if(a===void 0)throw Error(d(407));a=a()}else{if(a=s(),Ee===null)throw Error(d(349));(he&127)!==0||Nd(l,s,a)}n.memoizedState=a;var i={value:a,getSnapshot:s};return n.queue=i,Ud(Td.bind(null,l,i,t),[t]),l.flags|=2048,Ra(9,{destroy:void 0},Sd.bind(null,l,i,a,s),null),a},useId:function(){var t=$e(),s=Ee.identifierPrefix;if(fe){var a=wt,l=Dt;a=(l&~(1<<32-dt(l)-1)).toString(32)+a,s="_"+s+"R_"+a,a=Nn++,0<a&&(s+="H"+a.toString(32)),s+="_"}else a=sf++,s="_"+s+"r_"+a.toString(32)+"_";return t.memoizedState=s},useHostTransitionStatus:Br,useFormState:Ad,useActionState:Ad,useOptimistic:function(t){var s=$e();s.memoizedState=s.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=a,s=Hr.bind(null,ce,!0,a),a.dispatch=s,[t,s]},useMemoCache:Nr,useCacheRefresh:function(){return $e().memoizedState=of.bind(null,ce)},useEffectEvent:function(t){var s=$e(),a={impl:t};return s.memoizedState=a,function(){if((ve&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},Ar={readContext:Ve,use:Tn,useCallback:Qd,useContext:Ve,useEffect:Rr,useImperativeHandle:Yd,useInsertionEffect:Ld,useLayoutEffect:Gd,useMemo:Xd,useReducer:Cn,useRef:wd,useState:function(){return Cn(Wt)},useDebugValue:Er,useDeferredValue:function(t,s){var a=Ue();return Zd(a,Te.memoizedState,t,s)},useTransition:function(){var t=Cn(Wt)[0],s=Ue().memoizedState;return[typeof t=="boolean"?t:hl(t),s]},useSyncExternalStore:gd,useId:Wd,useHostTransitionStatus:Br,useFormState:Od,useActionState:Od,useOptimistic:function(t,s){var a=Ue();return Rd(a,Te,t,s)},useMemoCache:Nr,useCacheRefresh:Fd};Ar.useEffectEvent=Md;var su={readContext:Ve,use:Tn,useCallback:Qd,useContext:Ve,useEffect:Rr,useImperativeHandle:Yd,useInsertionEffect:Ld,useLayoutEffect:Gd,useMemo:Xd,useReducer:Tr,useRef:wd,useState:function(){return Tr(Wt)},useDebugValue:Er,useDeferredValue:function(t,s){var a=Ue();return Te===null?_r(a,t,s):Zd(a,Te.memoizedState,t,s)},useTransition:function(){var t=Tr(Wt)[0],s=Ue().memoizedState;return[typeof t=="boolean"?t:hl(t),s]},useSyncExternalStore:gd,useId:Wd,useHostTransitionStatus:Br,useFormState:Dd,useActionState:Dd,useOptimistic:function(t,s){var a=Ue();return Te!==null?Rd(a,Te,t,s):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nr,useCacheRefresh:Fd};su.useEffectEvent=Md;function Or(t,s,a,l){s=t.memoizedState,a=a(l,s),a=a==null?s:C({},s,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var zr={enqueueSetState:function(t,s,a){t=t._reactInternals;var l=jt(),n=js(l);n.payload=s,a!=null&&(n.callback=a),s=bs(t,n,l),s!==null&&(rt(s,t,l),ol(s,t,l))},enqueueReplaceState:function(t,s,a){t=t._reactInternals;var l=jt(),n=js(l);n.tag=1,n.payload=s,a!=null&&(n.callback=a),s=bs(t,n,l),s!==null&&(rt(s,t,l),ol(s,t,l))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var a=jt(),l=js(a);l.tag=2,s!=null&&(l.callback=s),s=bs(t,l,a),s!==null&&(rt(s,t,a),ol(s,t,a))}};function au(t,s,a,l,n,i,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,c):s.prototype&&s.prototype.isPureReactComponent?!tl(a,l)||!tl(n,i):!0}function lu(t,s,a,l){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,l),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,l),s.state!==t&&zr.enqueueReplaceState(s,s.state,null)}function Is(t,s){var a=s;if("ref"in s){a={};for(var l in s)l!=="ref"&&(a[l]=s[l])}if(t=t.defaultProps){a===s&&(a=C({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function nu(t){nn(t)}function iu(t){console.error(t)}function ru(t){nn(t)}function _n(t,s){try{var a=t.onUncaughtError;a(s.value,{componentStack:s.stack})}catch(l){setTimeout(function(){throw l})}}function cu(t,s,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Dr(t,s,a){return a=js(a),a.tag=3,a.payload={element:null},a.callback=function(){_n(t,s)},a}function ou(t){return t=js(t),t.tag=3,t}function du(t,s,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){cu(s,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){cu(s,a,l),typeof n!="function"&&(Ts===null?Ts=new Set([this]):Ts.add(this));var p=l.stack;this.componentDidCatch(l.value,{componentStack:p!==null?p:""})})}function uf(t,s,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(s=a.alternate,s!==null&&va(s,a,n,!0),a=ht.current,a!==null){switch(a.tag){case 31:case 13:return qt===null?Gn():a.alternate===null&&Oe===0&&(Oe=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===xn?a.flags|=16384:(s=a.updateQueue,s===null?a.updateQueue=new Set([l]):s.add(l),rc(t,l,n)),!1;case 22:return a.flags|=65536,l===xn?a.flags|=16384:(s=a.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=s):(a=s.retryQueue,a===null?s.retryQueue=new Set([l]):a.add(l)),rc(t,l,n)),!1}throw Error(d(435,a.tag))}return rc(t,l,n),Gn(),!1}if(fe)return s=ht.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=n,l!==tr&&(t=Error(d(422),{cause:l}),ll(Nt(t,a)))):(l!==tr&&(s=Error(d(423),{cause:l}),ll(Nt(s,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=Nt(l,a),n=Dr(t.stateNode,l,n),pr(t,n),Oe!==4&&(Oe=2)),!1;var i=Error(d(520),{cause:l});if(i=Nt(i,a),Sl===null?Sl=[i]:Sl.push(i),Oe!==4&&(Oe=2),s===null)return!0;l=Nt(l,a),a=s;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=Dr(a.stateNode,l,t),pr(a,t),!1;case 1:if(s=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ts===null||!Ts.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=ou(n),du(n,t,a,l),pr(a,n),!1}a=a.return}while(a!==null);return!1}var wr=Error(d(461)),Ge=!1;function Ke(t,s,a,l){s.child=t===null?md(s,null,a,l):Ws(s,t.child,a,l)}function uu(t,s,a,l,n){a=a.render;var i=s.ref;if("ref"in l){var c={};for(var p in l)p!=="ref"&&(c[p]=l[p])}else c=l;return Zs(s),l=br(t,s,a,c,i,n),p=vr(),t!==null&&!Ge?(yr(t,s,n),Ft(t,s,n)):(fe&&p&&$i(s),s.flags|=1,Ke(t,s,l,n),s.child)}function pu(t,s,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Wi(i)&&i.defaultProps===void 0&&a.compare===null?(s.tag=15,s.type=i,hu(t,s,i,l,n)):(t=dn(a.type,null,l,s,s.mode,n),t.ref=s.ref,t.return=s,s.child=t)}if(i=t.child,!Xr(t,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:tl,a(c,l)&&t.ref===s.ref)return Ft(t,s,n)}return s.flags|=1,t=Xt(i,l),t.ref=s.ref,t.return=s,s.child=t}function hu(t,s,a,l,n){if(t!==null){var i=t.memoizedProps;if(tl(i,l)&&t.ref===s.ref)if(Ge=!1,s.pendingProps=l=i,Xr(t,n))(t.flags&131072)!==0&&(Ge=!0);else return s.lanes=t.lanes,Ft(t,s,n)}return Ur(t,s,a,l,n)}function mu(t,s,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((s.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=s.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,s.child=null;return fu(t,s,i,a,l)}if((a&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},t!==null&&mn(s,i!==null?i.cachePool:null),i!==null?jd(s,i):mr(),bd(s);else return l=s.lanes=536870912,fu(t,s,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(mn(s,i.cachePool),jd(s,i),ys(),s.memoizedState=null):(t!==null&&mn(s,null),mr(),ys());return Ke(t,s,n,a),s.child}function xl(t,s){return t!==null&&t.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function fu(t,s,a,l,n){var i=cr();return i=i===null?null:{parent:Me._currentValue,pool:i},s.memoizedState={baseLanes:a,cachePool:i},t!==null&&mn(s,null),mr(),bd(s),t!==null&&va(t,s,l,!0),s.childLanes=n,null}function kn(t,s){return s=Hn({mode:s.mode,children:s.children},t.mode),s.ref=t.ref,t.child=s,s.return=t,s}function xu(t,s,a){return Ws(s,t.child,null,a),t=kn(s,s.pendingProps),t.flags|=2,mt(s),s.memoizedState=null,t}function pf(t,s,a){var l=s.pendingProps,n=(s.flags&128)!==0;if(s.flags&=-129,t===null){if(fe){if(l.mode==="hidden")return t=kn(s,l),s.lanes=536870912,xl(null,t);if(xr(s),(t=_e)?(t=Ep(t,Ct),t=t!==null&&t.data==="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:ps!==null?{id:Dt,overflow:wt}:null,retryLane:536870912,hydrationErrors:null},a=$o(t),a.return=s,s.child=a,Je=s,_e=null)):t=null,t===null)throw ms(s);return s.lanes=536870912,null}return kn(s,l)}var i=t.memoizedState;if(i!==null){var c=i.dehydrated;if(xr(s),n)if(s.flags&256)s.flags&=-257,s=xu(t,s,a);else if(s.memoizedState!==null)s.child=t.child,s.flags|=128,s=null;else throw Error(d(558));else if(Ge||va(t,s,a,!1),n=(a&t.childLanes)!==0,Ge||n){if(l=Ee,l!==null&&(c=no(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,Ps(t,c),rt(l,t,c),wr;Gn(),s=xu(t,s,a)}else t=i.treeContext,_e=Rt(c.nextSibling),Je=s,fe=!0,hs=null,Ct=!1,t!==null&&sd(s,t),s=kn(s,l),s.flags|=4096;return s}return t=Xt(t.child,{mode:l.mode,children:l.children}),t.ref=s.ref,s.child=t,t.return=s,t}function Bn(t,s){var a=s.ref;if(a===null)t!==null&&t.ref!==null&&(s.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(t===null||t.ref!==a)&&(s.flags|=4194816)}}function Ur(t,s,a,l,n){return Zs(s),a=br(t,s,a,l,void 0,n),l=vr(),t!==null&&!Ge?(yr(t,s,n),Ft(t,s,n)):(fe&&l&&$i(s),s.flags|=1,Ke(t,s,a,n),s.child)}function ju(t,s,a,l,n,i){return Zs(s),s.updateQueue=null,a=yd(s,l,a,n),vd(t),l=vr(),t!==null&&!Ge?(yr(t,s,i),Ft(t,s,i)):(fe&&l&&$i(s),s.flags|=1,Ke(t,s,a,i),s.child)}function bu(t,s,a,l,n){if(Zs(s),s.stateNode===null){var i=fa,c=a.contextType;typeof c=="object"&&c!==null&&(i=Ve(c)),i=new a(l,i),s.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zr,s.stateNode=i,i._reactInternals=s,i=s.stateNode,i.props=l,i.state=s.memoizedState,i.refs={},dr(s),c=a.contextType,i.context=typeof c=="object"&&c!==null?Ve(c):fa,i.state=s.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Or(s,a,c,l),i.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&zr.enqueueReplaceState(i,i.state,null),ul(s,l,i,n),dl(),i.state=s.memoizedState),typeof i.componentDidMount=="function"&&(s.flags|=4194308),l=!0}else if(t===null){i=s.stateNode;var p=s.memoizedProps,S=Is(a,p);i.props=S;var B=i.context,U=a.contextType;c=fa,typeof U=="object"&&U!==null&&(c=Ve(U));var G=a.getDerivedStateFromProps;U=typeof G=="function"||typeof i.getSnapshotBeforeUpdate=="function",p=s.pendingProps!==p,U||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(p||B!==c)&&lu(s,i,l,c),xs=!1;var H=s.memoizedState;i.state=H,ul(s,l,i,n),dl(),B=s.memoizedState,p||H!==B||xs?(typeof G=="function"&&(Or(s,a,G,l),B=s.memoizedState),(S=xs||au(s,a,S,l,H,B,c))?(U||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(s.flags|=4194308)):(typeof i.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=l,s.memoizedState=B),i.props=l,i.state=B,i.context=c,l=S):(typeof i.componentDidMount=="function"&&(s.flags|=4194308),l=!1)}else{i=s.stateNode,ur(t,s),c=s.memoizedProps,U=Is(a,c),i.props=U,G=s.pendingProps,H=i.context,B=a.contextType,S=fa,typeof B=="object"&&B!==null&&(S=Ve(B)),p=a.getDerivedStateFromProps,(B=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==G||H!==S)&&lu(s,i,l,S),xs=!1,H=s.memoizedState,i.state=H,ul(s,l,i,n),dl();var O=s.memoizedState;c!==G||H!==O||xs||t!==null&&t.dependencies!==null&&pn(t.dependencies)?(typeof p=="function"&&(Or(s,a,p,l),O=s.memoizedState),(U=xs||au(s,a,U,l,H,O,S)||t!==null&&t.dependencies!==null&&pn(t.dependencies))?(B||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,O,S),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,O,S)),typeof i.componentDidUpdate=="function"&&(s.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&H===t.memoizedState||(s.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&H===t.memoizedState||(s.flags|=1024),s.memoizedProps=l,s.memoizedState=O),i.props=l,i.state=O,i.context=S,l=U):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&H===t.memoizedState||(s.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&H===t.memoizedState||(s.flags|=1024),l=!1)}return i=l,Bn(t,s),l=(s.flags&128)!==0,i||l?(i=s.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),s.flags|=1,t!==null&&l?(s.child=Ws(s,t.child,null,n),s.child=Ws(s,null,a,n)):Ke(t,s,a,n),s.memoizedState=i.state,t=s.child):t=Ft(t,s,n),t}function vu(t,s,a,l){return Qs(),s.flags|=256,Ke(t,s,a,l),s.child}var Mr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lr(t){return{baseLanes:t,cachePool:cd()}}function Gr(t,s,a){return t=t!==null?t.childLanes&~a:0,s&&(t|=xt),t}function yu(t,s,a){var l=s.pendingProps,n=!1,i=(s.flags&128)!==0,c;if((c=i)||(c=t!==null&&t.memoizedState===null?!1:(we.current&2)!==0),c&&(n=!0,s.flags&=-129),c=(s.flags&32)!==0,s.flags&=-33,t===null){if(fe){if(n?vs(s):ys(),(t=_e)?(t=Ep(t,Ct),t=t!==null&&t.data!=="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:ps!==null?{id:Dt,overflow:wt}:null,retryLane:536870912,hydrationErrors:null},a=$o(t),a.return=s,s.child=a,Je=s,_e=null)):t=null,t===null)throw ms(s);return Sc(t)?s.lanes=32:s.lanes=536870912,null}var p=l.children;return l=l.fallback,n?(ys(),n=s.mode,p=Hn({mode:"hidden",children:p},n),l=Ys(l,n,a,null),p.return=s,l.return=s,p.sibling=l,s.child=p,l=s.child,l.memoizedState=Lr(a),l.childLanes=Gr(t,c,a),s.memoizedState=Mr,xl(null,l)):(vs(s),Pr(s,p))}var S=t.memoizedState;if(S!==null&&(p=S.dehydrated,p!==null)){if(i)s.flags&256?(vs(s),s.flags&=-257,s=Yr(t,s,a)):s.memoizedState!==null?(ys(),s.child=t.child,s.flags|=128,s=null):(ys(),p=l.fallback,n=s.mode,l=Hn({mode:"visible",children:l.children},n),p=Ys(p,n,a,null),p.flags|=2,l.return=s,p.return=s,l.sibling=p,s.child=l,Ws(s,t.child,null,a),l=s.child,l.memoizedState=Lr(a),l.childLanes=Gr(t,c,a),s.memoizedState=Mr,s=xl(null,l));else if(vs(s),Sc(p)){if(c=p.nextSibling&&p.nextSibling.dataset,c)var B=c.dgst;c=B,l=Error(d(419)),l.stack="",l.digest=c,ll({value:l,source:null,stack:null}),s=Yr(t,s,a)}else if(Ge||va(t,s,a,!1),c=(a&t.childLanes)!==0,Ge||c){if(c=Ee,c!==null&&(l=no(c,a),l!==0&&l!==S.retryLane))throw S.retryLane=l,Ps(t,l),rt(c,t,l),wr;Nc(p)||Gn(),s=Yr(t,s,a)}else Nc(p)?(s.flags|=192,s.child=t.child,s=null):(t=S.treeContext,_e=Rt(p.nextSibling),Je=s,fe=!0,hs=null,Ct=!1,t!==null&&sd(s,t),s=Pr(s,l.children),s.flags|=4096);return s}return n?(ys(),p=l.fallback,n=s.mode,S=t.child,B=S.sibling,l=Xt(S,{mode:"hidden",children:l.children}),l.subtreeFlags=S.subtreeFlags&65011712,B!==null?p=Xt(B,p):(p=Ys(p,n,a,null),p.flags|=2),p.return=s,l.return=s,l.sibling=p,s.child=l,xl(null,l),l=s.child,p=t.child.memoizedState,p===null?p=Lr(a):(n=p.cachePool,n!==null?(S=Me._currentValue,n=n.parent!==S?{parent:S,pool:S}:n):n=cd(),p={baseLanes:p.baseLanes|a,cachePool:n}),l.memoizedState=p,l.childLanes=Gr(t,c,a),s.memoizedState=Mr,xl(t.child,l)):(vs(s),a=t.child,t=a.sibling,a=Xt(a,{mode:"visible",children:l.children}),a.return=s,a.sibling=null,t!==null&&(c=s.deletions,c===null?(s.deletions=[t],s.flags|=16):c.push(t)),s.child=a,s.memoizedState=null,a)}function Pr(t,s){return s=Hn({mode:"visible",children:s},t.mode),s.return=t,t.child=s}function Hn(t,s){return t=pt(22,t,null,s),t.lanes=0,t}function Yr(t,s,a){return Ws(s,t.child,null,a),t=Pr(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function gu(t,s,a){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s),lr(t.return,s,a)}function Qr(t,s,a,l,n,i){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=s,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function Nu(t,s,a){var l=s.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=we.current,p=(c&2)!==0;if(p?(c=c&1|2,s.flags|=128):c&=1,Q(we,c),Ke(t,s,l,a),l=fe?al:0,!p&&t!==null&&(t.flags&128)!==0)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gu(t,a,s);else if(t.tag===19)gu(t,a,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=s.child,n=null;a!==null;)t=a.alternate,t!==null&&yn(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=s.child,s.child=null):(n=a.sibling,a.sibling=null),Qr(s,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=s.child,s.child=null;n!==null;){if(t=n.alternate,t!==null&&yn(t)===null){s.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Qr(s,!0,a,null,i,l);break;case"together":Qr(s,!1,null,null,void 0,l);break;default:s.memoizedState=null}return s.child}function Ft(t,s,a){if(t!==null&&(s.dependencies=t.dependencies),Ss|=s.lanes,(a&s.childLanes)===0)if(t!==null){if(va(t,s,a,!1),(a&s.childLanes)===0)return null}else return null;if(t!==null&&s.child!==t.child)throw Error(d(153));if(s.child!==null){for(t=s.child,a=Xt(t,t.pendingProps),s.child=a,a.return=s;t.sibling!==null;)t=t.sibling,a=a.sibling=Xt(t,t.pendingProps),a.return=s;a.sibling=null}return s.child}function Xr(t,s){return(t.lanes&s)!==0?!0:(t=t.dependencies,!!(t!==null&&pn(t)))}function hf(t,s,a){switch(s.tag){case 3:Ie(s,s.stateNode.containerInfo),fs(s,Me,t.memoizedState.cache),Qs();break;case 27:case 5:Pa(s);break;case 4:Ie(s,s.stateNode.containerInfo);break;case 10:fs(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,xr(s),null;break;case 13:var l=s.memoizedState;if(l!==null)return l.dehydrated!==null?(vs(s),s.flags|=128,null):(a&s.child.childLanes)!==0?yu(t,s,a):(vs(s),t=Ft(t,s,a),t!==null?t.sibling:null);vs(s);break;case 19:var n=(t.flags&128)!==0;if(l=(a&s.childLanes)!==0,l||(va(t,s,a,!1),l=(a&s.childLanes)!==0),n){if(l)return Nu(t,s,a);s.flags|=128}if(n=s.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Q(we,we.current),l)break;return null;case 22:return s.lanes=0,mu(t,s,a,s.pendingProps);case 24:fs(s,Me,t.memoizedState.cache)}return Ft(t,s,a)}function Su(t,s,a){if(t!==null)if(t.memoizedProps!==s.pendingProps)Ge=!0;else{if(!Xr(t,a)&&(s.flags&128)===0)return Ge=!1,hf(t,s,a);Ge=(t.flags&131072)!==0}else Ge=!1,fe&&(s.flags&1048576)!==0&&td(s,al,s.index);switch(s.lanes=0,s.tag){case 16:e:{var l=s.pendingProps;if(t=Vs(s.elementType),s.type=t,typeof t=="function")Wi(t)?(l=Is(t,l),s.tag=1,s=bu(null,s,t,l,a)):(s.tag=0,s=Ur(null,s,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===te){s.tag=11,s=uu(null,s,t,l,a);break e}else if(n===X){s.tag=14,s=pu(null,s,t,l,a);break e}}throw s=Gt(t)||t,Error(d(306,s,""))}}return s;case 0:return Ur(t,s,s.type,s.pendingProps,a);case 1:return l=s.type,n=Is(l,s.pendingProps),bu(t,s,l,n,a);case 3:e:{if(Ie(s,s.stateNode.containerInfo),t===null)throw Error(d(387));l=s.pendingProps;var i=s.memoizedState;n=i.element,ur(t,s),ul(s,l,null,a);var c=s.memoizedState;if(l=c.cache,fs(s,Me,l),l!==i.cache&&nr(s,[Me],a,!0),dl(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},s.updateQueue.baseState=i,s.memoizedState=i,s.flags&256){s=vu(t,s,l,a);break e}else if(l!==n){n=Nt(Error(d(424)),s),ll(n),s=vu(t,s,l,a);break e}else for(t=s.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,_e=Rt(t.firstChild),Je=s,fe=!0,hs=null,Ct=!0,a=md(s,null,l,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qs(),l===n){s=Ft(t,s,a);break e}Ke(t,s,l,a)}s=s.child}return s;case 26:return Bn(t,s),t===null?(a=Op(s.type,null,s.pendingProps,null))?s.memoizedState=a:fe||(a=s.type,t=s.pendingProps,l=Vn(de.current).createElement(a),l[Ze]=s,l[tt]=t,We(l,a,t),Qe(l),s.stateNode=l):s.memoizedState=Op(s.type,t.memoizedProps,s.pendingProps,t.memoizedState),null;case 27:return Pa(s),t===null&&fe&&(l=s.stateNode=Bp(s.type,s.pendingProps,de.current),Je=s,Ct=!0,n=_e,Es(s.type)?(Tc=n,_e=Rt(l.firstChild)):_e=n),Ke(t,s,s.pendingProps.children,a),Bn(t,s),t===null&&(s.flags|=4194304),s.child;case 5:return t===null&&fe&&((n=l=_e)&&(l=Yf(l,s.type,s.pendingProps,Ct),l!==null?(s.stateNode=l,Je=s,_e=Rt(l.firstChild),Ct=!1,n=!0):n=!1),n||ms(s)),Pa(s),n=s.type,i=s.pendingProps,c=t!==null?t.memoizedProps:null,l=i.children,vc(n,i)?l=null:c!==null&&vc(n,c)&&(s.flags|=32),s.memoizedState!==null&&(n=br(t,s,af,null,null,a),Bl._currentValue=n),Bn(t,s),Ke(t,s,l,a),s.child;case 6:return t===null&&fe&&((t=a=_e)&&(a=Qf(a,s.pendingProps,Ct),a!==null?(s.stateNode=a,Je=s,_e=null,t=!0):t=!1),t||ms(s)),null;case 13:return yu(t,s,a);case 4:return Ie(s,s.stateNode.containerInfo),l=s.pendingProps,t===null?s.child=Ws(s,null,l,a):Ke(t,s,l,a),s.child;case 11:return uu(t,s,s.type,s.pendingProps,a);case 7:return Ke(t,s,s.pendingProps,a),s.child;case 8:return Ke(t,s,s.pendingProps.children,a),s.child;case 12:return Ke(t,s,s.pendingProps.children,a),s.child;case 10:return l=s.pendingProps,fs(s,s.type,l.value),Ke(t,s,l.children,a),s.child;case 9:return n=s.type._context,l=s.pendingProps.children,Zs(s),n=Ve(n),l=l(n),s.flags|=1,Ke(t,s,l,a),s.child;case 14:return pu(t,s,s.type,s.pendingProps,a);case 15:return hu(t,s,s.type,s.pendingProps,a);case 19:return Nu(t,s,a);case 31:return pf(t,s,a);case 22:return mu(t,s,a,s.pendingProps);case 24:return Zs(s),l=Ve(Me),t===null?(n=cr(),n===null&&(n=Ee,i=ir(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),s.memoizedState={parent:l,cache:n},dr(s),fs(s,Me,n)):((t.lanes&a)!==0&&(ur(t,s),ul(s,null,null,a),dl()),n=t.memoizedState,i=s.memoizedState,n.parent!==l?(n={parent:l,cache:l},s.memoizedState=n,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=n),fs(s,Me,l)):(l=i.cache,fs(s,Me,l),l!==n.cache&&nr(s,[Me],a,!0))),Ke(t,s,s.pendingProps.children,a),s.child;case 29:throw s.pendingProps}throw Error(d(156,s.tag))}function It(t){t.flags|=4}function Zr(t,s,a,l,n){if((s=(t.mode&32)!==0)&&(s=!1),s){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Wu())t.flags|=8192;else throw Ks=xn,or}else t.flags&=-16777217}function Tu(t,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Mp(s))if(Wu())t.flags|=8192;else throw Ks=xn,or}function An(t,s){s!==null&&(t.flags|=4),t.flags&16384&&(s=t.tag!==22?so():536870912,t.lanes|=s,Ba|=s)}function jl(t,s){if(!fe)switch(t.tailMode){case"hidden":s=t.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ke(t){var s=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(s)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,s}function mf(t,s,a){var l=s.pendingProps;switch(er(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(s),null;case 1:return ke(s),null;case 3:return a=s.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),Vt(Me),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ba(s)?It(s):t===null||t.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,sr())),ke(s),null;case 26:var n=s.type,i=s.memoizedState;return t===null?(It(s),i!==null?(ke(s),Tu(s,i)):(ke(s),Zr(s,n,null,l,a))):i?i!==t.memoizedState?(It(s),ke(s),Tu(s,i)):(ke(s),s.flags&=-16777217):(t=t.memoizedProps,t!==l&&It(s),ke(s),Zr(s,n,t,l,a)),null;case 27:if(Yl(s),a=de.current,n=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==l&&It(s);else{if(!l){if(s.stateNode===null)throw Error(d(166));return ke(s),null}t=W.current,ba(s)?ad(s):(t=Bp(n,l,a),s.stateNode=t,It(s))}return ke(s),null;case 5:if(Yl(s),n=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==l&&It(s);else{if(!l){if(s.stateNode===null)throw Error(d(166));return ke(s),null}if(i=W.current,ba(s))ad(s);else{var c=Vn(de.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[Ze]=s,i[tt]=l;e:for(c=s.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===s)break e;for(;c.sibling===null;){if(c.return===null||c.return===s)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}s.stateNode=i;e:switch(We(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&It(s)}}return ke(s),Zr(s,s.type,t===null?null:t.memoizedProps,s.pendingProps,a),null;case 6:if(t&&s.stateNode!=null)t.memoizedProps!==l&&It(s);else{if(typeof l!="string"&&s.stateNode===null)throw Error(d(166));if(t=de.current,ba(s)){if(t=s.stateNode,a=s.memoizedProps,l=null,n=Je,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[Ze]=s,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||yp(t.nodeValue,a)),t||ms(s,!0)}else t=Vn(t).createTextNode(l),t[Ze]=s,s.stateNode=t}return ke(s),null;case 31:if(a=s.memoizedState,t===null||t.memoizedState!==null){if(l=ba(s),a!==null){if(t===null){if(!l)throw Error(d(318));if(t=s.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(557));t[Ze]=s}else Qs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ke(s),t=!1}else a=sr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return s.flags&256?(mt(s),s):(mt(s),null);if((s.flags&128)!==0)throw Error(d(558))}return ke(s),null;case 13:if(l=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ba(s),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(d(318));if(n=s.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Ze]=s}else Qs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ke(s),n=!1}else n=sr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return s.flags&256?(mt(s),s):(mt(s),null)}return mt(s),(s.flags&128)!==0?(s.lanes=a,s):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=s.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(s.child.flags|=8192),An(s,s.updateQueue),ke(s),null);case 4:return De(),t===null&&mc(s.stateNode.containerInfo),ke(s),null;case 10:return Vt(s.type),ke(s),null;case 19:if(P(we),l=s.memoizedState,l===null)return ke(s),null;if(n=(s.flags&128)!==0,i=l.rendering,i===null)if(n)jl(l,!1);else{if(Oe!==0||t!==null&&(t.flags&128)!==0)for(t=s.child;t!==null;){if(i=yn(t),i!==null){for(s.flags|=128,jl(l,!1),t=i.updateQueue,s.updateQueue=t,An(s,t),s.subtreeFlags=0,t=a,a=s.child;a!==null;)Io(a,t),a=a.sibling;return Q(we,we.current&1|2),fe&&Zt(s,l.treeForkCount),s.child}t=t.sibling}l.tail!==null&&ct()>Un&&(s.flags|=128,n=!0,jl(l,!1),s.lanes=4194304)}else{if(!n)if(t=yn(i),t!==null){if(s.flags|=128,n=!0,t=t.updateQueue,s.updateQueue=t,An(s,t),jl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!fe)return ke(s),null}else 2*ct()-l.renderingStartTime>Un&&a!==536870912&&(s.flags|=128,n=!0,jl(l,!1),s.lanes=4194304);l.isBackwards?(i.sibling=s.child,s.child=i):(t=l.last,t!==null?t.sibling=i:s.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ct(),t.sibling=null,a=we.current,Q(we,n?a&1|2:a&1),fe&&Zt(s,l.treeForkCount),t):(ke(s),null);case 22:case 23:return mt(s),fr(),l=s.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(s.flags|=8192):l&&(s.flags|=8192),l?(a&536870912)!==0&&(s.flags&128)===0&&(ke(s),s.subtreeFlags&6&&(s.flags|=8192)):ke(s),a=s.updateQueue,a!==null&&An(s,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),l!==a&&(s.flags|=2048),t!==null&&P(Js),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),s.memoizedState.cache!==a&&(s.flags|=2048),Vt(Me),ke(s),null;case 25:return null;case 30:return null}throw Error(d(156,s.tag))}function ff(t,s){switch(er(s),s.tag){case 1:return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return Vt(Me),De(),t=s.flags,(t&65536)!==0&&(t&128)===0?(s.flags=t&-65537|128,s):null;case 26:case 27:case 5:return Yl(s),null;case 31:if(s.memoizedState!==null){if(mt(s),s.alternate===null)throw Error(d(340));Qs()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 13:if(mt(s),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(d(340));Qs()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return P(we),null;case 4:return De(),null;case 10:return Vt(s.type),null;case 22:case 23:return mt(s),fr(),t!==null&&P(Js),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 24:return Vt(Me),null;case 25:return null;default:return null}}function Cu(t,s){switch(er(s),s.tag){case 3:Vt(Me),De();break;case 26:case 27:case 5:Yl(s);break;case 4:De();break;case 31:s.memoizedState!==null&&mt(s);break;case 13:mt(s);break;case 19:P(we);break;case 10:Vt(s.type);break;case 22:case 23:mt(s),fr(),t!==null&&P(Js);break;case 24:Vt(Me)}}function bl(t,s){try{var a=s.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(p){Ne(s,s.return,p)}}function gs(t,s,a){try{var l=s.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var c=l.inst,p=c.destroy;if(p!==void 0){c.destroy=void 0,n=s;var S=a,B=p;try{B()}catch(U){Ne(n,S,U)}}}l=l.next}while(l!==i)}}catch(U){Ne(s,s.return,U)}}function qu(t){var s=t.updateQueue;if(s!==null){var a=t.stateNode;try{xd(s,a)}catch(l){Ne(t,t.return,l)}}}function Ru(t,s,a){a.props=Is(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ne(t,s,l)}}function vl(t,s){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){Ne(t,s,n)}}function Ut(t,s){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Ne(t,s,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ne(t,s,n)}else a.current=null}function Eu(t){var s=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Ne(t,t.return,n)}}function Jr(t,s,a){try{var l=t.stateNode;wf(l,t.type,a,s),l[tt]=s}catch(n){Ne(t,t.return,n)}}function _u(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Es(t.type)||t.tag===4}function Vr(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_u(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Es(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kr(t,s,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,s?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,s):(s=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,s.appendChild(t),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Yt));else if(l!==4&&(l===27&&Es(t.type)&&(a=t.stateNode,s=null),t=t.child,t!==null))for(Kr(t,s,a),t=t.sibling;t!==null;)Kr(t,s,a),t=t.sibling}function On(t,s,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,s?a.insertBefore(t,s):a.appendChild(t);else if(l!==4&&(l===27&&Es(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(On(t,s,a),t=t.sibling;t!==null;)On(t,s,a),t=t.sibling}function ku(t){var s=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=s.attributes;n.length;)s.removeAttributeNode(n[0]);We(s,l,a),s[Ze]=t,s[tt]=a}catch(i){Ne(t,t.return,i)}}var $t=!1,Pe=!1,Wr=!1,Bu=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function xf(t,s){if(t=t.containerInfo,jc=ti,t=Yo(t),Yi(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,p=-1,S=-1,B=0,U=0,G=t,H=null;t:for(;;){for(var O;G!==a||n!==0&&G.nodeType!==3||(p=c+n),G!==i||l!==0&&G.nodeType!==3||(S=c+l),G.nodeType===3&&(c+=G.nodeValue.length),(O=G.firstChild)!==null;)H=G,G=O;for(;;){if(G===t)break t;if(H===a&&++B===n&&(p=c),H===i&&++U===l&&(S=c),(O=G.nextSibling)!==null)break;G=H,H=G.parentNode}G=O}a=p===-1||S===-1?null:{start:p,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(bc={focusedElem:t,selectionRange:a},ti=!1,Xe=s;Xe!==null;)if(s=Xe,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,Xe=t;else for(;Xe!==null;){switch(s=Xe,i=s.alternate,t=s.flags,s.tag){case 0:if((t&4)!==0&&(t=s.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=s,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Z=Is(a.type,n);t=l.getSnapshotBeforeUpdate(Z,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(ee){Ne(a,a.return,ee)}}break;case 3:if((t&1024)!==0){if(t=s.stateNode.containerInfo,a=t.nodeType,a===9)gc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":gc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(d(163))}if(t=s.sibling,t!==null){t.return=s.return,Xe=t;break}Xe=s.return}}function Hu(t,s,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ts(t,a),l&4&&bl(5,a);break;case 1:if(ts(t,a),l&4)if(t=a.stateNode,s===null)try{t.componentDidMount()}catch(c){Ne(a,a.return,c)}else{var n=Is(a.type,s.memoizedProps);s=s.memoizedState;try{t.componentDidUpdate(n,s,t.__reactInternalSnapshotBeforeUpdate)}catch(c){Ne(a,a.return,c)}}l&64&&qu(a),l&512&&vl(a,a.return);break;case 3:if(ts(t,a),l&64&&(t=a.updateQueue,t!==null)){if(s=null,a.child!==null)switch(a.child.tag){case 27:case 5:s=a.child.stateNode;break;case 1:s=a.child.stateNode}try{xd(t,s)}catch(c){Ne(a,a.return,c)}}break;case 27:s===null&&l&4&&ku(a);case 26:case 5:ts(t,a),s===null&&l&4&&Eu(a),l&512&&vl(a,a.return);break;case 12:ts(t,a);break;case 31:ts(t,a),l&4&&zu(t,a);break;case 13:ts(t,a),l&4&&Du(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Cf.bind(null,a),Xf(t,a))));break;case 22:if(l=a.memoizedState!==null||$t,!l){s=s!==null&&s.memoizedState!==null||Pe,n=$t;var i=Pe;$t=l,(Pe=s)&&!i?ss(t,a,(a.subtreeFlags&8772)!==0):ts(t,a),$t=n,Pe=i}break;case 30:break;default:ts(t,a)}}function Au(t){var s=t.alternate;s!==null&&(t.alternate=null,Au(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&qi(s)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Be=null,at=!1;function es(t,s,a){for(a=a.child;a!==null;)Ou(t,s,a),a=a.sibling}function Ou(t,s,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ya,a)}catch{}switch(a.tag){case 26:Pe||Ut(a,s),es(t,s,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Pe||Ut(a,s);var l=Be,n=at;Es(a.type)&&(Be=a.stateNode,at=!1),es(t,s,a),El(a.stateNode),Be=l,at=n;break;case 5:Pe||Ut(a,s);case 6:if(l=Be,n=at,Be=null,es(t,s,a),Be=l,at=n,Be!==null)if(at)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(a.stateNode)}catch(i){Ne(a,s,i)}else try{Be.removeChild(a.stateNode)}catch(i){Ne(a,s,i)}break;case 18:Be!==null&&(at?(t=Be,qp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ma(t)):qp(Be,a.stateNode));break;case 4:l=Be,n=at,Be=a.stateNode.containerInfo,at=!0,es(t,s,a),Be=l,at=n;break;case 0:case 11:case 14:case 15:gs(2,a,s),Pe||gs(4,a,s),es(t,s,a);break;case 1:Pe||(Ut(a,s),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ru(a,s,l)),es(t,s,a);break;case 21:es(t,s,a);break;case 22:Pe=(l=Pe)||a.memoizedState!==null,es(t,s,a),Pe=l;break;default:es(t,s,a)}}function zu(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ma(t)}catch(a){Ne(s,s.return,a)}}}function Du(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ma(t)}catch(a){Ne(s,s.return,a)}}function jf(t){switch(t.tag){case 31:case 13:case 19:var s=t.stateNode;return s===null&&(s=t.stateNode=new Bu),s;case 22:return t=t.stateNode,s=t._retryCache,s===null&&(s=t._retryCache=new Bu),s;default:throw Error(d(435,t.tag))}}function zn(t,s){var a=jf(t);s.forEach(function(l){if(!a.has(l)){a.add(l);var n=qf.bind(null,t,l);l.then(n,n)}})}function lt(t,s){var a=s.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,c=s,p=c;e:for(;p!==null;){switch(p.tag){case 27:if(Es(p.type)){Be=p.stateNode,at=!1;break e}break;case 5:Be=p.stateNode,at=!1;break e;case 3:case 4:Be=p.stateNode.containerInfo,at=!0;break e}p=p.return}if(Be===null)throw Error(d(160));Ou(i,c,n),Be=null,at=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)wu(s,t),s=s.sibling}var Ht=null;function wu(t,s){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:lt(s,t),nt(t),l&4&&(gs(3,t,t.return),bl(3,t),gs(5,t,t.return));break;case 1:lt(s,t),nt(t),l&512&&(Pe||a===null||Ut(a,a.return)),l&64&&$t&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ht;if(lt(s,t),nt(t),l&512&&(Pe||a===null||Ut(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Za]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),We(i,l,a),i[Ze]=t,Qe(i),l=i;break e;case"link":var c=wp("link","href",n).get(l+(a.href||""));if(c){for(var p=0;p<c.length;p++)if(i=c[p],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(p,1);break t}}i=n.createElement(l),We(i,l,a),n.head.appendChild(i);break;case"meta":if(c=wp("meta","content",n).get(l+(a.content||""))){for(p=0;p<c.length;p++)if(i=c[p],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(p,1);break t}}i=n.createElement(l),We(i,l,a),n.head.appendChild(i);break;default:throw Error(d(468,l))}i[Ze]=t,Qe(i),l=i}t.stateNode=l}else Up(n,t.type,t.stateNode);else t.stateNode=Dp(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Up(n,t.type,t.stateNode):Dp(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Jr(t,t.memoizedProps,a.memoizedProps)}break;case 27:lt(s,t),nt(t),l&512&&(Pe||a===null||Ut(a,a.return)),a!==null&&l&4&&Jr(t,t.memoizedProps,a.memoizedProps);break;case 5:if(lt(s,t),nt(t),l&512&&(Pe||a===null||Ut(a,a.return)),t.flags&32){n=t.stateNode;try{ca(n,"")}catch(Z){Ne(t,t.return,Z)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Jr(t,n,a!==null?a.memoizedProps:n)),l&1024&&(Wr=!0);break;case 6:if(lt(s,t),nt(t),l&4){if(t.stateNode===null)throw Error(d(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(Z){Ne(t,t.return,Z)}}break;case 3:if(Fn=null,n=Ht,Ht=Kn(s.containerInfo),lt(s,t),Ht=n,nt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ma(s.containerInfo)}catch(Z){Ne(t,t.return,Z)}Wr&&(Wr=!1,Uu(t));break;case 4:l=Ht,Ht=Kn(t.stateNode.containerInfo),lt(s,t),nt(t),Ht=l;break;case 12:lt(s,t),nt(t);break;case 31:lt(s,t),nt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,zn(t,l)));break;case 13:lt(s,t),nt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wn=ct()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,zn(t,l)));break;case 22:n=t.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,B=$t,U=Pe;if($t=B||n,Pe=U||S,lt(s,t),Pe=U,$t=B,nt(t),l&8192)e:for(s=t.stateNode,s._visibility=n?s._visibility&-2:s._visibility|1,n&&(a===null||S||$t||Pe||$s(t)),a=null,s=t;;){if(s.tag===5||s.tag===26){if(a===null){S=a=s;try{if(i=S.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{p=S.stateNode;var G=S.memoizedProps.style,H=G!=null&&G.hasOwnProperty("display")?G.display:null;p.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(Z){Ne(S,S.return,Z)}}}else if(s.tag===6){if(a===null){S=s;try{S.stateNode.nodeValue=n?"":S.memoizedProps}catch(Z){Ne(S,S.return,Z)}}}else if(s.tag===18){if(a===null){S=s;try{var O=S.stateNode;n?Rp(O,!0):Rp(S.stateNode,!1)}catch(Z){Ne(S,S.return,Z)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===t)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;a===s&&(a=null),s=s.return}a===s&&(a=null),s.sibling.return=s.return,s=s.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,zn(t,a))));break;case 19:lt(s,t),nt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,zn(t,l)));break;case 30:break;case 21:break;default:lt(s,t),nt(t)}}function nt(t){var s=t.flags;if(s&2){try{for(var a,l=t.return;l!==null;){if(_u(l)){a=l;break}l=l.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var n=a.stateNode,i=Vr(t);On(t,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(ca(c,""),a.flags&=-33);var p=Vr(t);On(t,p,c);break;case 3:case 4:var S=a.stateNode.containerInfo,B=Vr(t);Kr(t,B,S);break;default:throw Error(d(161))}}catch(U){Ne(t,t.return,U)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function Uu(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var s=t;Uu(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),t=t.sibling}}function ts(t,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Hu(t,s.alternate,s),s=s.sibling}function $s(t){for(t=t.child;t!==null;){var s=t;switch(s.tag){case 0:case 11:case 14:case 15:gs(4,s,s.return),$s(s);break;case 1:Ut(s,s.return);var a=s.stateNode;typeof a.componentWillUnmount=="function"&&Ru(s,s.return,a),$s(s);break;case 27:El(s.stateNode);case 26:case 5:Ut(s,s.return),$s(s);break;case 22:s.memoizedState===null&&$s(s);break;case 30:$s(s);break;default:$s(s)}t=t.sibling}}function ss(t,s,a){for(a=a&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var l=s.alternate,n=t,i=s,c=i.flags;switch(i.tag){case 0:case 11:case 15:ss(n,i,a),bl(4,i);break;case 1:if(ss(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(B){Ne(l,l.return,B)}if(l=i,n=l.updateQueue,n!==null){var p=l.stateNode;try{var S=n.shared.hiddenCallbacks;if(S!==null)for(n.shared.hiddenCallbacks=null,n=0;n<S.length;n++)fd(S[n],p)}catch(B){Ne(l,l.return,B)}}a&&c&64&&qu(i),vl(i,i.return);break;case 27:ku(i);case 26:case 5:ss(n,i,a),a&&l===null&&c&4&&Eu(i),vl(i,i.return);break;case 12:ss(n,i,a);break;case 31:ss(n,i,a),a&&c&4&&zu(n,i);break;case 13:ss(n,i,a),a&&c&4&&Du(n,i);break;case 22:i.memoizedState===null&&ss(n,i,a),vl(i,i.return);break;case 30:break;default:ss(n,i,a)}s=s.sibling}}function Fr(t,s){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(t=s.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&nl(a))}function Ir(t,s){t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&nl(t))}function At(t,s,a,l){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Mu(t,s,a,l),s=s.sibling}function Mu(t,s,a,l){var n=s.flags;switch(s.tag){case 0:case 11:case 15:At(t,s,a,l),n&2048&&bl(9,s);break;case 1:At(t,s,a,l);break;case 3:At(t,s,a,l),n&2048&&(t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&nl(t)));break;case 12:if(n&2048){At(t,s,a,l),t=s.stateNode;try{var i=s.memoizedProps,c=i.id,p=i.onPostCommit;typeof p=="function"&&p(c,s.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Ne(s,s.return,S)}}else At(t,s,a,l);break;case 31:At(t,s,a,l);break;case 13:At(t,s,a,l);break;case 23:break;case 22:i=s.stateNode,c=s.alternate,s.memoizedState!==null?i._visibility&2?At(t,s,a,l):yl(t,s):i._visibility&2?At(t,s,a,l):(i._visibility|=2,Ea(t,s,a,l,(s.subtreeFlags&10256)!==0||!1)),n&2048&&Fr(c,s);break;case 24:At(t,s,a,l),n&2048&&Ir(s.alternate,s);break;default:At(t,s,a,l)}}function Ea(t,s,a,l,n){for(n=n&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var i=t,c=s,p=a,S=l,B=c.flags;switch(c.tag){case 0:case 11:case 15:Ea(i,c,p,S,n),bl(8,c);break;case 23:break;case 22:var U=c.stateNode;c.memoizedState!==null?U._visibility&2?Ea(i,c,p,S,n):yl(i,c):(U._visibility|=2,Ea(i,c,p,S,n)),n&&B&2048&&Fr(c.alternate,c);break;case 24:Ea(i,c,p,S,n),n&&B&2048&&Ir(c.alternate,c);break;default:Ea(i,c,p,S,n)}s=s.sibling}}function yl(t,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var a=t,l=s,n=l.flags;switch(l.tag){case 22:yl(a,l),n&2048&&Fr(l.alternate,l);break;case 24:yl(a,l),n&2048&&Ir(l.alternate,l);break;default:yl(a,l)}s=s.sibling}}var gl=8192;function _a(t,s,a){if(t.subtreeFlags&gl)for(t=t.child;t!==null;)Lu(t,s,a),t=t.sibling}function Lu(t,s,a){switch(t.tag){case 26:_a(t,s,a),t.flags&gl&&t.memoizedState!==null&&ax(a,Ht,t.memoizedState,t.memoizedProps);break;case 5:_a(t,s,a);break;case 3:case 4:var l=Ht;Ht=Kn(t.stateNode.containerInfo),_a(t,s,a),Ht=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=gl,gl=16777216,_a(t,s,a),gl=l):_a(t,s,a));break;default:_a(t,s,a)}}function Gu(t){var s=t.alternate;if(s!==null&&(t=s.child,t!==null)){s.child=null;do s=t.sibling,t.sibling=null,t=s;while(t!==null)}}function Nl(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var l=s[a];Xe=l,Yu(l,t)}Gu(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pu(t),t=t.sibling}function Pu(t){switch(t.tag){case 0:case 11:case 15:Nl(t),t.flags&2048&&gs(9,t,t.return);break;case 3:Nl(t);break;case 12:Nl(t);break;case 22:var s=t.stateNode;t.memoizedState!==null&&s._visibility&2&&(t.return===null||t.return.tag!==13)?(s._visibility&=-3,Dn(t)):Nl(t);break;default:Nl(t)}}function Dn(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var l=s[a];Xe=l,Yu(l,t)}Gu(t)}for(t=t.child;t!==null;){switch(s=t,s.tag){case 0:case 11:case 15:gs(8,s,s.return),Dn(s);break;case 22:a=s.stateNode,a._visibility&2&&(a._visibility&=-3,Dn(s));break;default:Dn(s)}t=t.sibling}}function Yu(t,s){for(;Xe!==null;){var a=Xe;switch(a.tag){case 0:case 11:case 15:gs(8,a,s);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:nl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Xe=l;else e:for(a=t;Xe!==null;){l=Xe;var n=l.sibling,i=l.return;if(Au(l),l===a){Xe=null;break e}if(n!==null){n.return=i,Xe=n;break e}Xe=i}}}var bf={getCacheForType:function(t){var s=Ve(Me),a=s.data.get(t);return a===void 0&&(a=t(),s.data.set(t,a)),a},cacheSignal:function(){return Ve(Me).controller.signal}},vf=typeof WeakMap=="function"?WeakMap:Map,ve=0,Ee=null,ue=null,he=0,ge=0,ft=null,Ns=!1,ka=!1,$r=!1,as=0,Oe=0,Ss=0,ea=0,ec=0,xt=0,Ba=0,Sl=null,it=null,tc=!1,wn=0,Qu=0,Un=1/0,Mn=null,Ts=null,Ye=0,Cs=null,Ha=null,ls=0,sc=0,ac=null,Xu=null,Tl=0,lc=null;function jt(){return(ve&2)!==0&&he!==0?he&-he:M.T!==null?dc():io()}function Zu(){if(xt===0)if((he&536870912)===0||fe){var t=Zl;Zl<<=1,(Zl&3932160)===0&&(Zl=262144),xt=t}else xt=536870912;return t=ht.current,t!==null&&(t.flags|=32),xt}function rt(t,s,a){(t===Ee&&(ge===2||ge===9)||t.cancelPendingCommit!==null)&&(Aa(t,0),qs(t,he,xt,!1)),Xa(t,a),((ve&2)===0||t!==Ee)&&(t===Ee&&((ve&2)===0&&(ea|=a),Oe===4&&qs(t,he,xt,!1)),Mt(t))}function Ju(t,s,a){if((ve&6)!==0)throw Error(d(327));var l=!a&&(s&127)===0&&(s&t.expiredLanes)===0||Qa(t,s),n=l?Nf(t,s):ic(t,s,!0),i=l;do{if(n===0){ka&&!l&&qs(t,s,0,!1);break}else{if(a=t.current.alternate,i&&!yf(a)){n=ic(t,s,!1),i=!1;continue}if(n===2){if(i=s,t.errorRecoveryDisabledLanes&i)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){s=c;e:{var p=t;n=Sl;var S=p.current.memoizedState.isDehydrated;if(S&&(Aa(p,c).flags|=256),c=ic(p,c,!1),c!==2){if($r&&!S){p.errorRecoveryDisabledLanes|=i,ea|=i,n=4;break e}i=it,it=n,i!==null&&(it===null?it=i:it.push.apply(it,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Aa(t,0),qs(t,s,0,!0);break}e:{switch(l=t,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((s&4194048)!==s)break;case 6:qs(l,s,xt,!Ns);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(d(329))}if((s&62914560)===s&&(n=wn+300-ct(),10<n)){if(qs(l,s,xt,!Ns),Vl(l,0,!0)!==0)break e;ls=s,l.timeoutHandle=Tp(Vu.bind(null,l,a,it,Mn,tc,s,xt,ea,Ba,Ns,i,"Throttled",-0,0),n);break e}Vu(l,a,it,Mn,tc,s,xt,ea,Ba,Ns,i,null,-0,0)}}break}while(!0);Mt(t)}function Vu(t,s,a,l,n,i,c,p,S,B,U,G,H,O){if(t.timeoutHandle=-1,G=s.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yt},Lu(s,i,G);var Z=(i&62914560)===i?wn-ct():(i&4194048)===i?Qu-ct():0;if(Z=lx(G,Z),Z!==null){ls=i,t.cancelPendingCommit=Z(sp.bind(null,t,s,i,a,l,n,c,p,S,U,G,null,H,O)),qs(t,i,c,!B);return}}sp(t,s,i,a,l,n,c,p,S)}function yf(t){for(var s=t;;){var a=s.tag;if((a===0||a===11||a===15)&&s.flags&16384&&(a=s.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ut(i(),n))return!1}catch{return!1}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function qs(t,s,a,l){s&=~ec,s&=~ea,t.suspendedLanes|=s,t.pingedLanes&=~s,l&&(t.warmLanes|=s),l=t.expirationTimes;for(var n=s;0<n;){var i=31-dt(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&ao(t,a,s)}function Ln(){return(ve&6)===0?(Cl(0),!1):!0}function nc(){if(ue!==null){if(ge===0)var t=ue.return;else t=ue,Jt=Xs=null,gr(t),Sa=null,rl=0,t=ue;for(;t!==null;)Cu(t.alternate,t),t=t.return;ue=null}}function Aa(t,s){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Lf(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ls=0,nc(),Ee=t,ue=a=Xt(t.current,null),he=s,ge=0,ft=null,Ns=!1,ka=Qa(t,s),$r=!1,Ba=xt=ec=ea=Ss=Oe=0,it=Sl=null,tc=!1,(s&8)!==0&&(s|=s&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=s;0<l;){var n=31-dt(l),i=1<<n;s|=t[n],l&=~i}return as=s,rn(),a}function Ku(t,s){ce=null,M.H=fl,s===Na||s===fn?(s=ud(),ge=3):s===or?(s=ud(),ge=4):ge=s===wr?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,ft=s,ue===null&&(Oe=1,_n(t,Nt(s,t.current)))}function Wu(){var t=ht.current;return t===null?!0:(he&4194048)===he?qt===null:(he&62914560)===he||(he&536870912)!==0?t===qt:!1}function Fu(){var t=M.H;return M.H=fl,t===null?fl:t}function Iu(){var t=M.A;return M.A=bf,t}function Gn(){Oe=4,Ns||(he&4194048)!==he&&ht.current!==null||(ka=!0),(Ss&134217727)===0&&(ea&134217727)===0||Ee===null||qs(Ee,he,xt,!1)}function ic(t,s,a){var l=ve;ve|=2;var n=Fu(),i=Iu();(Ee!==t||he!==s)&&(Mn=null,Aa(t,s)),s=!1;var c=Oe;e:do try{if(ge!==0&&ue!==null){var p=ue,S=ft;switch(ge){case 8:nc(),c=6;break e;case 3:case 2:case 9:case 6:ht.current===null&&(s=!0);var B=ge;if(ge=0,ft=null,Oa(t,p,S,B),a&&ka){c=0;break e}break;default:B=ge,ge=0,ft=null,Oa(t,p,S,B)}}gf(),c=Oe;break}catch(U){Ku(t,U)}while(!0);return s&&t.shellSuspendCounter++,Jt=Xs=null,ve=l,M.H=n,M.A=i,ue===null&&(Ee=null,he=0,rn()),c}function gf(){for(;ue!==null;)$u(ue)}function Nf(t,s){var a=ve;ve|=2;var l=Fu(),n=Iu();Ee!==t||he!==s?(Mn=null,Un=ct()+500,Aa(t,s)):ka=Qa(t,s);e:do try{if(ge!==0&&ue!==null){s=ue;var i=ft;t:switch(ge){case 1:ge=0,ft=null,Oa(t,s,i,1);break;case 2:case 9:if(od(i)){ge=0,ft=null,ep(s);break}s=function(){ge!==2&&ge!==9||Ee!==t||(ge=7),Mt(t)},i.then(s,s);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:od(i)?(ge=0,ft=null,ep(s)):(ge=0,ft=null,Oa(t,s,i,7));break;case 5:var c=null;switch(ue.tag){case 26:c=ue.memoizedState;case 5:case 27:var p=ue;if(c?Mp(c):p.stateNode.complete){ge=0,ft=null;var S=p.sibling;if(S!==null)ue=S;else{var B=p.return;B!==null?(ue=B,Pn(B)):ue=null}break t}}ge=0,ft=null,Oa(t,s,i,5);break;case 6:ge=0,ft=null,Oa(t,s,i,6);break;case 8:nc(),Oe=6;break e;default:throw Error(d(462))}}Sf();break}catch(U){Ku(t,U)}while(!0);return Jt=Xs=null,M.H=l,M.A=n,ve=a,ue!==null?0:(Ee=null,he=0,rn(),Oe)}function Sf(){for(;ue!==null&&!Xh();)$u(ue)}function $u(t){var s=Su(t.alternate,t,as);t.memoizedProps=t.pendingProps,s===null?Pn(t):ue=s}function ep(t){var s=t,a=s.alternate;switch(s.tag){case 15:case 0:s=ju(a,s,s.pendingProps,s.type,void 0,he);break;case 11:s=ju(a,s,s.pendingProps,s.type.render,s.ref,he);break;case 5:gr(s);default:Cu(a,s),s=ue=Io(s,as),s=Su(a,s,as)}t.memoizedProps=t.pendingProps,s===null?Pn(t):ue=s}function Oa(t,s,a,l){Jt=Xs=null,gr(s),Sa=null,rl=0;var n=s.return;try{if(uf(t,n,s,a,he)){Oe=1,_n(t,Nt(a,t.current)),ue=null;return}}catch(i){if(n!==null)throw ue=n,i;Oe=1,_n(t,Nt(a,t.current)),ue=null;return}s.flags&32768?(fe||l===1?t=!0:ka||(he&536870912)!==0?t=!1:(Ns=t=!0,(l===2||l===9||l===3||l===6)&&(l=ht.current,l!==null&&l.tag===13&&(l.flags|=16384))),tp(s,t)):Pn(s)}function Pn(t){var s=t;do{if((s.flags&32768)!==0){tp(s,Ns);return}t=s.return;var a=mf(s.alternate,s,as);if(a!==null){ue=a;return}if(s=s.sibling,s!==null){ue=s;return}ue=s=t}while(s!==null);Oe===0&&(Oe=5)}function tp(t,s){do{var a=ff(t.alternate,t);if(a!==null){a.flags&=32767,ue=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!s&&(t=t.sibling,t!==null)){ue=t;return}ue=t=a}while(t!==null);Oe=6,ue=null}function sp(t,s,a,l,n,i,c,p,S){t.cancelPendingCommit=null;do Yn();while(Ye!==0);if((ve&6)!==0)throw Error(d(327));if(s!==null){if(s===t.current)throw Error(d(177));if(i=s.lanes|s.childLanes,i|=Vi,tm(t,a,i,c,p,S),t===Ee&&(ue=Ee=null,he=0),Ha=s,Cs=t,ls=a,sc=i,ac=n,Xu=l,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Rf(Ql,function(){return rp(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,n=Y.p,Y.p=2,c=ve,ve|=4;try{xf(t,s,a)}finally{ve=c,Y.p=n,M.T=l}}Ye=1,ap(),lp(),np()}}function ap(){if(Ye===1){Ye=0;var t=Cs,s=Ha,a=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var l=Y.p;Y.p=2;var n=ve;ve|=4;try{wu(s,t);var i=bc,c=Yo(t.containerInfo),p=i.focusedElem,S=i.selectionRange;if(c!==p&&p&&p.ownerDocument&&Po(p.ownerDocument.documentElement,p)){if(S!==null&&Yi(p)){var B=S.start,U=S.end;if(U===void 0&&(U=B),"selectionStart"in p)p.selectionStart=B,p.selectionEnd=Math.min(U,p.value.length);else{var G=p.ownerDocument||document,H=G&&G.defaultView||window;if(H.getSelection){var O=H.getSelection(),Z=p.textContent.length,ee=Math.min(S.start,Z),qe=S.end===void 0?ee:Math.min(S.end,Z);!O.extend&&ee>qe&&(c=qe,qe=ee,ee=c);var _=Go(p,ee),q=Go(p,qe);if(_&&q&&(O.rangeCount!==1||O.anchorNode!==_.node||O.anchorOffset!==_.offset||O.focusNode!==q.node||O.focusOffset!==q.offset)){var k=G.createRange();k.setStart(_.node,_.offset),O.removeAllRanges(),ee>qe?(O.addRange(k),O.extend(q.node,q.offset)):(k.setEnd(q.node,q.offset),O.addRange(k))}}}}for(G=[],O=p;O=O.parentNode;)O.nodeType===1&&G.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<G.length;p++){var L=G[p];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}ti=!!jc,bc=jc=null}finally{ve=n,Y.p=l,M.T=a}}t.current=s,Ye=2}}function lp(){if(Ye===2){Ye=0;var t=Cs,s=Ha,a=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var l=Y.p;Y.p=2;var n=ve;ve|=4;try{Hu(t,s.alternate,s)}finally{ve=n,Y.p=l,M.T=a}}Ye=3}}function np(){if(Ye===4||Ye===3){Ye=0,Zh();var t=Cs,s=Ha,a=ls,l=Xu;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Ye=5:(Ye=0,Ha=Cs=null,ip(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Ts=null),Ti(a),s=s.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ya,s,void 0,(s.current.flags&128)===128)}catch{}if(l!==null){s=M.T,n=Y.p,Y.p=2,M.T=null;try{for(var i=t.onRecoverableError,c=0;c<l.length;c++){var p=l[c];i(p.value,{componentStack:p.stack})}}finally{M.T=s,Y.p=n}}(ls&3)!==0&&Yn(),Mt(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===lc?Tl++:(Tl=0,lc=t):Tl=0,Cl(0)}}function ip(t,s){(t.pooledCacheLanes&=s)===0&&(s=t.pooledCache,s!=null&&(t.pooledCache=null,nl(s)))}function Yn(){return ap(),lp(),np(),rp()}function rp(){if(Ye!==5)return!1;var t=Cs,s=sc;sc=0;var a=Ti(ls),l=M.T,n=Y.p;try{Y.p=32>a?32:a,M.T=null,a=ac,ac=null;var i=Cs,c=ls;if(Ye=0,Ha=Cs=null,ls=0,(ve&6)!==0)throw Error(d(331));var p=ve;if(ve|=4,Pu(i.current),Mu(i,i.current,c,a),ve=p,Cl(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ya,i)}catch{}return!0}finally{Y.p=n,M.T=l,ip(t,s)}}function cp(t,s,a){s=Nt(a,s),s=Dr(t.stateNode,s,2),t=bs(t,s,2),t!==null&&(Xa(t,2),Mt(t))}function Ne(t,s,a){if(t.tag===3)cp(t,t,a);else for(;s!==null;){if(s.tag===3){cp(s,t,a);break}else if(s.tag===1){var l=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ts===null||!Ts.has(l))){t=Nt(a,t),a=ou(2),l=bs(s,a,2),l!==null&&(du(a,l,s,t),Xa(l,2),Mt(l));break}}s=s.return}}function rc(t,s,a){var l=t.pingCache;if(l===null){l=t.pingCache=new vf;var n=new Set;l.set(s,n)}else n=l.get(s),n===void 0&&(n=new Set,l.set(s,n));n.has(a)||($r=!0,n.add(a),t=Tf.bind(null,t,s,a),s.then(t,t))}function Tf(t,s,a){var l=t.pingCache;l!==null&&l.delete(s),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ee===t&&(he&a)===a&&(Oe===4||Oe===3&&(he&62914560)===he&&300>ct()-wn?(ve&2)===0&&Aa(t,0):ec|=a,Ba===he&&(Ba=0)),Mt(t)}function op(t,s){s===0&&(s=so()),t=Ps(t,s),t!==null&&(Xa(t,s),Mt(t))}function Cf(t){var s=t.memoizedState,a=0;s!==null&&(a=s.retryLane),op(t,a)}function qf(t,s){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(s),op(t,a)}function Rf(t,s){return yi(t,s)}var Qn=null,za=null,cc=!1,Xn=!1,oc=!1,Rs=0;function Mt(t){t!==za&&t.next===null&&(za===null?Qn=za=t:za=za.next=t),Xn=!0,cc||(cc=!0,_f())}function Cl(t,s){if(!oc&&Xn){oc=!0;do for(var a=!1,l=Qn;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,p=l.pingedLanes;i=(1<<31-dt(42|t)+1)-1,i&=n&~(c&~p),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,hp(l,i))}else i=he,i=Vl(l,l===Ee?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Qa(l,i)||(a=!0,hp(l,i));l=l.next}while(a);oc=!1}}function Ef(){dp()}function dp(){Xn=cc=!1;var t=0;Rs!==0&&Mf()&&(t=Rs);for(var s=ct(),a=null,l=Qn;l!==null;){var n=l.next,i=up(l,s);i===0?(l.next=null,a===null?Qn=n:a.next=n,n===null&&(za=a)):(a=l,(t!==0||(i&3)!==0)&&(Xn=!0)),l=n}Ye!==0&&Ye!==5||Cl(t),Rs!==0&&(Rs=0)}function up(t,s){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var c=31-dt(i),p=1<<c,S=n[c];S===-1?((p&a)===0||(p&l)!==0)&&(n[c]=em(p,s)):S<=s&&(t.expiredLanes|=p),i&=~p}if(s=Ee,a=he,a=Vl(t,t===s?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===s&&(ge===2||ge===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&gi(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Qa(t,a)){if(s=a&-a,s===t.callbackPriority)return s;switch(l!==null&&gi(l),Ti(a)){case 2:case 8:a=eo;break;case 32:a=Ql;break;case 268435456:a=to;break;default:a=Ql}return l=pp.bind(null,t),a=yi(a,l),t.callbackPriority=s,t.callbackNode=a,s}return l!==null&&l!==null&&gi(l),t.callbackPriority=2,t.callbackNode=null,2}function pp(t,s){if(Ye!==0&&Ye!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yn()&&t.callbackNode!==a)return null;var l=he;return l=Vl(t,t===Ee?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Ju(t,l,s),up(t,ct()),t.callbackNode!=null&&t.callbackNode===a?pp.bind(null,t):null)}function hp(t,s){if(Yn())return null;Ju(t,s,!0)}function _f(){Gf(function(){(ve&6)!==0?yi($c,Ef):dp()})}function dc(){if(Rs===0){var t=ya;t===0&&(t=Xl,Xl<<=1,(Xl&261888)===0&&(Xl=256)),Rs=t}return Rs}function mp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Il(""+t)}function fp(t,s){var a=s.ownerDocument.createElement("input");return a.name=s.name,a.value=s.value,t.id&&a.setAttribute("form",t.id),s.parentNode.insertBefore(a,s),t=new FormData(t),a.parentNode.removeChild(a),t}function kf(t,s,a,l,n){if(s==="submit"&&a&&a.stateNode===n){var i=mp((n[tt]||null).action),c=l.submitter;c&&(s=(s=c[tt]||null)?mp(s.formAction):c.getAttribute("formAction"),s!==null&&(i=s,c=null));var p=new sn("action","action",null,l,n);t.push({event:p,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Rs!==0){var S=c?fp(n,c):new FormData(n);kr(a,{pending:!0,data:S,method:n.method,action:i},null,S)}}else typeof i=="function"&&(p.preventDefault(),S=c?fp(n,c):new FormData(n),kr(a,{pending:!0,data:S,method:n.method,action:i},i,S))},currentTarget:n}]})}}for(var uc=0;uc<Ji.length;uc++){var pc=Ji[uc],Bf=pc.toLowerCase(),Hf=pc[0].toUpperCase()+pc.slice(1);Bt(Bf,"on"+Hf)}Bt(Zo,"onAnimationEnd"),Bt(Jo,"onAnimationIteration"),Bt(Vo,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Jm,"onTransitionRun"),Bt(Vm,"onTransitionStart"),Bt(Km,"onTransitionCancel"),Bt(Ko,"onTransitionEnd"),ia("onMouseEnter",["mouseout","mouseover"]),ia("onMouseLeave",["mouseout","mouseover"]),ia("onPointerEnter",["pointerout","pointerover"]),ia("onPointerLeave",["pointerout","pointerover"]),Us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Us("onBeforeInput",["compositionend","keypress","textInput","paste"]),Us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Af=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function xp(t,s){s=(s&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;e:{var i=void 0;if(s)for(var c=l.length-1;0<=c;c--){var p=l[c],S=p.instance,B=p.currentTarget;if(p=p.listener,S!==i&&n.isPropagationStopped())break e;i=p,n.currentTarget=B;try{i(n)}catch(U){nn(U)}n.currentTarget=null,i=S}else for(c=0;c<l.length;c++){if(p=l[c],S=p.instance,B=p.currentTarget,p=p.listener,S!==i&&n.isPropagationStopped())break e;i=p,n.currentTarget=B;try{i(n)}catch(U){nn(U)}n.currentTarget=null,i=S}}}}function pe(t,s){var a=s[Ci];a===void 0&&(a=s[Ci]=new Set);var l=t+"__bubble";a.has(l)||(jp(s,t,2,!1),a.add(l))}function hc(t,s,a){var l=0;s&&(l|=4),jp(a,t,l,s)}var Zn="_reactListening"+Math.random().toString(36).slice(2);function mc(t){if(!t[Zn]){t[Zn]=!0,oo.forEach(function(a){a!=="selectionchange"&&(Af.has(a)||hc(a,!1,t),hc(a,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[Zn]||(s[Zn]=!0,hc("selectionchange",!1,s))}}function jp(t,s,a,l){switch(Zp(s)){case 2:var n=rx;break;case 8:n=cx;break;default:n=_c}a=n.bind(null,s,a,t),n=void 0,!Oi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(s,a,{capture:!0,passive:n}):t.addEventListener(s,a,!0):n!==void 0?t.addEventListener(s,a,{passive:n}):t.addEventListener(s,a,!1)}function fc(t,s,a,l,n){var i=l;if((s&1)===0&&(s&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var p=l.stateNode.containerInfo;if(p===n)break;if(c===4)for(c=l.return;c!==null;){var S=c.tag;if((S===3||S===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;p!==null;){if(c=aa(p),c===null)return;if(S=c.tag,S===5||S===6||S===26||S===27){l=i=c;continue e}p=p.parentNode}}l=l.return}No(function(){var B=i,U=Hi(a),G=[];e:{var H=Wo.get(t);if(H!==void 0){var O=sn,Z=t;switch(t){case"keypress":if(en(a)===0)break e;case"keydown":case"keyup":O=Cm;break;case"focusin":Z="focus",O=Ui;break;case"focusout":Z="blur",O=Ui;break;case"beforeblur":case"afterblur":O=Ui;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Co;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Em;break;case Zo:case Jo:case Vo:O=xm;break;case Ko:O=km;break;case"scroll":case"scrollend":O=um;break;case"wheel":O=Hm;break;case"copy":case"cut":case"paste":O=bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Ro;break;case"toggle":case"beforetoggle":O=Om}var ee=(s&4)!==0,qe=!ee&&(t==="scroll"||t==="scrollend"),_=ee?H!==null?H+"Capture":null:H;ee=[];for(var q=B,k;q!==null;){var L=q;if(k=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||k===null||_===null||(L=Va(q,_),L!=null&&ee.push(Rl(q,L,k))),qe)break;q=q.return}0<ee.length&&(H=new O(H,Z,null,a,U),G.push({event:H,listeners:ee}))}}if((s&7)===0){e:{if(H=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",H&&a!==Bi&&(Z=a.relatedTarget||a.fromElement)&&(aa(Z)||Z[sa]))break e;if((O||H)&&(H=U.window===U?U:(H=U.ownerDocument)?H.defaultView||H.parentWindow:window,O?(Z=a.relatedTarget||a.toElement,O=B,Z=Z?aa(Z):null,Z!==null&&(qe=b(Z),ee=Z.tag,Z!==qe||ee!==5&&ee!==27&&ee!==6)&&(Z=null)):(O=null,Z=B),O!==Z)){if(ee=Co,L="onMouseLeave",_="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(ee=Ro,L="onPointerLeave",_="onPointerEnter",q="pointer"),qe=O==null?H:Ja(O),k=Z==null?H:Ja(Z),H=new ee(L,q+"leave",O,a,U),H.target=qe,H.relatedTarget=k,L=null,aa(U)===B&&(ee=new ee(_,q+"enter",Z,a,U),ee.target=k,ee.relatedTarget=qe,L=ee),qe=L,O&&Z)t:{for(ee=Of,_=O,q=Z,k=0,L=_;L;L=ee(L))k++;L=0;for(var I=q;I;I=ee(I))L++;for(;0<k-L;)_=ee(_),k--;for(;0<L-k;)q=ee(q),L--;for(;k--;){if(_===q||q!==null&&_===q.alternate){ee=_;break t}_=ee(_),q=ee(q)}ee=null}else ee=null;O!==null&&bp(G,H,O,ee,!1),Z!==null&&qe!==null&&bp(G,qe,Z,ee,!0)}}e:{if(H=B?Ja(B):window,O=H.nodeName&&H.nodeName.toLowerCase(),O==="select"||O==="input"&&H.type==="file")var je=zo;else if(Ao(H))if(Do)je=Qm;else{je=Pm;var F=Gm}else O=H.nodeName,!O||O.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?B&&ki(B.elementType)&&(je=zo):je=Ym;if(je&&(je=je(t,B))){Oo(G,je,a,U);break e}F&&F(t,H,B),t==="focusout"&&B&&H.type==="number"&&B.memoizedProps.value!=null&&_i(H,"number",H.value)}switch(F=B?Ja(B):window,t){case"focusin":(Ao(F)||F.contentEditable==="true")&&(pa=F,Qi=B,sl=null);break;case"focusout":sl=Qi=pa=null;break;case"mousedown":Xi=!0;break;case"contextmenu":case"mouseup":case"dragend":Xi=!1,Qo(G,a,U);break;case"selectionchange":if(Zm)break;case"keydown":case"keyup":Qo(G,a,U)}var oe;if(Li)e:{switch(t){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else ua?Bo(t,a)&&(me="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(Eo&&a.locale!=="ko"&&(ua||me!=="onCompositionStart"?me==="onCompositionEnd"&&ua&&(oe=So()):(us=U,zi="value"in us?us.value:us.textContent,ua=!0)),F=Jn(B,me),0<F.length&&(me=new qo(me,t,null,a,U),G.push({event:me,listeners:F}),oe?me.data=oe:(oe=Ho(a),oe!==null&&(me.data=oe)))),(oe=Dm?wm(t,a):Um(t,a))&&(me=Jn(B,"onBeforeInput"),0<me.length&&(F=new qo("onBeforeInput","beforeinput",null,a,U),G.push({event:F,listeners:me}),F.data=oe)),kf(G,t,B,a,U)}xp(G,s)})}function Rl(t,s,a){return{instance:t,listener:s,currentTarget:a}}function Jn(t,s){for(var a=s+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Va(t,a),n!=null&&l.unshift(Rl(t,n,i)),n=Va(t,s),n!=null&&l.push(Rl(t,n,i))),t.tag===3)return l;t=t.return}return[]}function Of(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bp(t,s,a,l,n){for(var i=s._reactName,c=[];a!==null&&a!==l;){var p=a,S=p.alternate,B=p.stateNode;if(p=p.tag,S!==null&&S===l)break;p!==5&&p!==26&&p!==27||B===null||(S=B,n?(B=Va(a,i),B!=null&&c.unshift(Rl(a,B,S))):n||(B=Va(a,i),B!=null&&c.push(Rl(a,B,S)))),a=a.return}c.length!==0&&t.push({event:s,listeners:c})}var zf=/\r\n?/g,Df=/\u0000|\uFFFD/g;function vp(t){return(typeof t=="string"?t:""+t).replace(zf,`
`).replace(Df,"")}function yp(t,s){return s=vp(s),vp(t)===s}function Ce(t,s,a,l,n,i){switch(a){case"children":typeof l=="string"?s==="body"||s==="textarea"&&l===""||ca(t,l):(typeof l=="number"||typeof l=="bigint")&&s!=="body"&&ca(t,""+l);break;case"className":Wl(t,"class",l);break;case"tabIndex":Wl(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Wl(t,a,l);break;case"style":yo(t,l,i);break;case"data":if(s!=="object"){Wl(t,"data",l);break}case"src":case"href":if(l===""&&(s!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Il(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(s!=="input"&&Ce(t,s,"name",n.name,n,null),Ce(t,s,"formEncType",n.formEncType,n,null),Ce(t,s,"formMethod",n.formMethod,n,null),Ce(t,s,"formTarget",n.formTarget,n,null)):(Ce(t,s,"encType",n.encType,n,null),Ce(t,s,"method",n.method,n,null),Ce(t,s,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Il(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Yt);break;case"onScroll":l!=null&&pe("scroll",t);break;case"onScrollEnd":l!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Il(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":pe("beforetoggle",t),pe("toggle",t),Kl(t,"popover",l);break;case"xlinkActuate":Pt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kl(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=om.get(a)||a,Kl(t,a,l))}}function xc(t,s,a,l,n,i){switch(a){case"style":yo(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=a}}break;case"children":typeof l=="string"?ca(t,l):(typeof l=="number"||typeof l=="bigint")&&ca(t,""+l);break;case"onScroll":l!=null&&pe("scroll",t);break;case"onScrollEnd":l!=null&&pe("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Yt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),s=a.slice(2,n?a.length-7:void 0),i=t[tt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(s,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(s,l,n);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Kl(t,a,l)}}}function We(t,s,a){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,s));default:Ce(t,s,i,c,a,null)}}n&&Ce(t,s,"srcSet",a.srcSet,a,null),l&&Ce(t,s,"src",a.src,a,null);return;case"input":pe("invalid",t);var p=i=c=n=null,S=null,B=null;for(l in a)if(a.hasOwnProperty(l)){var U=a[l];if(U!=null)switch(l){case"name":n=U;break;case"type":c=U;break;case"checked":S=U;break;case"defaultChecked":B=U;break;case"value":i=U;break;case"defaultValue":p=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(d(137,s));break;default:Ce(t,s,l,U,a,null)}}xo(t,i,p,S,B,c,n,!1);return;case"select":pe("invalid",t),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(p=a[n],p!=null))switch(n){case"value":i=p;break;case"defaultValue":c=p;break;case"multiple":l=p;default:Ce(t,s,n,p,a,null)}s=i,a=c,t.multiple=!!l,s!=null?ra(t,!!l,s,!1):a!=null&&ra(t,!!l,a,!0);return;case"textarea":pe("invalid",t),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(p=a[c],p!=null))switch(c){case"value":l=p;break;case"defaultValue":n=p;break;case"children":i=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(d(91));break;default:Ce(t,s,c,p,a,null)}bo(t,l,n,i);return;case"option":for(S in a)a.hasOwnProperty(S)&&(l=a[S],l!=null)&&(S==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Ce(t,s,S,l,a,null));return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(l=0;l<ql.length;l++)pe(ql[l],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(l=a[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,s));default:Ce(t,s,B,l,a,null)}return;default:if(ki(s)){for(U in a)a.hasOwnProperty(U)&&(l=a[U],l!==void 0&&xc(t,s,U,l,a,void 0));return}}for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!=null&&Ce(t,s,p,l,a,null))}function wf(t,s,a,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,p=null,S=null,B=null,U=null;for(O in a){var G=a[O];if(a.hasOwnProperty(O)&&G!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":S=G;default:l.hasOwnProperty(O)||Ce(t,s,O,null,l,G)}}for(var H in l){var O=l[H];if(G=a[H],l.hasOwnProperty(H)&&(O!=null||G!=null))switch(H){case"type":i=O;break;case"name":n=O;break;case"checked":B=O;break;case"defaultChecked":U=O;break;case"value":c=O;break;case"defaultValue":p=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(d(137,s));break;default:O!==G&&Ce(t,s,H,O,l,G)}}Ei(t,c,p,S,B,U,i,n);return;case"select":O=c=p=H=null;for(i in a)if(S=a[i],a.hasOwnProperty(i)&&S!=null)switch(i){case"value":break;case"multiple":O=S;default:l.hasOwnProperty(i)||Ce(t,s,i,null,l,S)}for(n in l)if(i=l[n],S=a[n],l.hasOwnProperty(n)&&(i!=null||S!=null))switch(n){case"value":H=i;break;case"defaultValue":p=i;break;case"multiple":c=i;default:i!==S&&Ce(t,s,n,i,l,S)}s=p,a=c,l=O,H!=null?ra(t,!!a,H,!1):!!l!=!!a&&(s!=null?ra(t,!!a,s,!0):ra(t,!!a,a?[]:"",!1));return;case"textarea":O=H=null;for(p in a)if(n=a[p],a.hasOwnProperty(p)&&n!=null&&!l.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Ce(t,s,p,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":H=n;break;case"defaultValue":O=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&Ce(t,s,c,n,l,i)}jo(t,H,O);return;case"option":for(var Z in a)H=a[Z],a.hasOwnProperty(Z)&&H!=null&&!l.hasOwnProperty(Z)&&(Z==="selected"?t.selected=!1:Ce(t,s,Z,null,l,H));for(S in l)H=l[S],O=a[S],l.hasOwnProperty(S)&&H!==O&&(H!=null||O!=null)&&(S==="selected"?t.selected=H&&typeof H!="function"&&typeof H!="symbol":Ce(t,s,S,H,l,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)H=a[ee],a.hasOwnProperty(ee)&&H!=null&&!l.hasOwnProperty(ee)&&Ce(t,s,ee,null,l,H);for(B in l)if(H=l[B],O=a[B],l.hasOwnProperty(B)&&H!==O&&(H!=null||O!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(d(137,s));break;default:Ce(t,s,B,H,l,O)}return;default:if(ki(s)){for(var qe in a)H=a[qe],a.hasOwnProperty(qe)&&H!==void 0&&!l.hasOwnProperty(qe)&&xc(t,s,qe,void 0,l,H);for(U in l)H=l[U],O=a[U],!l.hasOwnProperty(U)||H===O||H===void 0&&O===void 0||xc(t,s,U,H,l,O);return}}for(var _ in a)H=a[_],a.hasOwnProperty(_)&&H!=null&&!l.hasOwnProperty(_)&&Ce(t,s,_,null,l,H);for(G in l)H=l[G],O=a[G],!l.hasOwnProperty(G)||H===O||H==null&&O==null||Ce(t,s,G,H,l,O)}function gp(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Uf(){if(typeof performance.getEntriesByType=="function"){for(var t=0,s=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,p=n.duration;if(i&&p&&gp(c)){for(c=0,p=n.responseEnd,l+=1;l<a.length;l++){var S=a[l],B=S.startTime;if(B>p)break;var U=S.transferSize,G=S.initiatorType;U&&gp(G)&&(S=S.responseEnd,c+=U*(S<p?1:(p-B)/(S-B)))}if(--l,s+=8*(i+c)/(n.duration/1e3),t++,10<t)break}}if(0<t)return s/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var jc=null,bc=null;function Vn(t){return t.nodeType===9?t:t.ownerDocument}function Np(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sp(t,s){if(t===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&s==="foreignObject"?0:t}function vc(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var yc=null;function Mf(){var t=window.event;return t&&t.type==="popstate"?t===yc?!1:(yc=t,!0):(yc=null,!1)}var Tp=typeof setTimeout=="function"?setTimeout:void 0,Lf=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,Gf=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(t){return Cp.resolve(null).then(t).catch(Pf)}:Tp;function Pf(t){setTimeout(function(){throw t})}function Es(t){return t==="head"}function qp(t,s){var a=s,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),Ma(s);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")El(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,El(a);for(var i=a.firstChild;i;){var c=i.nextSibling,p=i.nodeName;i[Za]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&El(t.ownerDocument.body);a=n}while(a);Ma(s)}function Rp(t,s){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?s?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(s?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function gc(t){var s=t.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var a=s;switch(s=s.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gc(a),qi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Yf(t,s,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==s.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Za])switch(s){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(s==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Rt(t.nextSibling),t===null)break}return null}function Qf(t,s,a){if(s==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Rt(t.nextSibling),t===null))return null;return t}function Ep(t,s){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Rt(t.nextSibling),t===null))return null;return t}function Nc(t){return t.data==="$?"||t.data==="$~"}function Sc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Xf(t,s){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=s;else if(t.data!=="$?"||a.readyState!=="loading")s();else{var l=function(){s(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Rt(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return t}var Tc=null;function _p(t){t=t.nextSibling;for(var s=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(s===0)return Rt(t.nextSibling);s--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||s++}t=t.nextSibling}return null}function kp(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(s===0)return t;s--}else a!=="/$"&&a!=="/&"||s++}t=t.previousSibling}return null}function Bp(t,s,a){switch(s=Vn(a),t){case"html":if(t=s.documentElement,!t)throw Error(d(452));return t;case"head":if(t=s.head,!t)throw Error(d(453));return t;case"body":if(t=s.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function El(t){for(var s=t.attributes;s.length;)t.removeAttributeNode(s[0]);qi(t)}var Et=new Map,Hp=new Set;function Kn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ns=Y.d;Y.d={f:Zf,r:Jf,D:Vf,C:Kf,L:Wf,m:Ff,X:$f,S:If,M:ex};function Zf(){var t=ns.f(),s=Ln();return t||s}function Jf(t){var s=la(t);s!==null&&s.tag===5&&s.type==="form"?Kd(s):ns.r(t)}var Da=typeof document>"u"?null:document;function Ap(t,s,a){var l=Da;if(l&&typeof s=="string"&&s){var n=yt(s);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Hp.has(n)||(Hp.add(n),t={rel:t,crossOrigin:a,href:s},l.querySelector(n)===null&&(s=l.createElement("link"),We(s,"link",t),Qe(s),l.head.appendChild(s)))}}function Vf(t){ns.D(t),Ap("dns-prefetch",t,null)}function Kf(t,s){ns.C(t,s),Ap("preconnect",t,s)}function Wf(t,s,a){ns.L(t,s,a);var l=Da;if(l&&t&&s){var n='link[rel="preload"][as="'+yt(s)+'"]';s==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+yt(a.imageSizes)+'"]')):n+='[href="'+yt(t)+'"]';var i=n;switch(s){case"style":i=wa(t);break;case"script":i=Ua(t)}Et.has(i)||(t=C({rel:"preload",href:s==="image"&&a&&a.imageSrcSet?void 0:t,as:s},a),Et.set(i,t),l.querySelector(n)!==null||s==="style"&&l.querySelector(_l(i))||s==="script"&&l.querySelector(kl(i))||(s=l.createElement("link"),We(s,"link",t),Qe(s),l.head.appendChild(s)))}}function Ff(t,s){ns.m(t,s);var a=Da;if(a&&t){var l=s&&typeof s.as=="string"?s.as:"script",n='link[rel="modulepreload"][as="'+yt(l)+'"][href="'+yt(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ua(t)}if(!Et.has(i)&&(t=C({rel:"modulepreload",href:t},s),Et.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(kl(i)))return}l=a.createElement("link"),We(l,"link",t),Qe(l),a.head.appendChild(l)}}}function If(t,s,a){ns.S(t,s,a);var l=Da;if(l&&t){var n=na(l).hoistableStyles,i=wa(t);s=s||"default";var c=n.get(i);if(!c){var p={loading:0,preload:null};if(c=l.querySelector(_l(i)))p.loading=5;else{t=C({rel:"stylesheet",href:t,"data-precedence":s},a),(a=Et.get(i))&&Cc(t,a);var S=c=l.createElement("link");Qe(S),We(S,"link",t),S._p=new Promise(function(B,U){S.onload=B,S.onerror=U}),S.addEventListener("load",function(){p.loading|=1}),S.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Wn(c,s,l)}c={type:"stylesheet",instance:c,count:1,state:p},n.set(i,c)}}}function $f(t,s){ns.X(t,s);var a=Da;if(a&&t){var l=na(a).hoistableScripts,n=Ua(t),i=l.get(n);i||(i=a.querySelector(kl(n)),i||(t=C({src:t,async:!0},s),(s=Et.get(n))&&qc(t,s),i=a.createElement("script"),Qe(i),We(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function ex(t,s){ns.M(t,s);var a=Da;if(a&&t){var l=na(a).hoistableScripts,n=Ua(t),i=l.get(n);i||(i=a.querySelector(kl(n)),i||(t=C({src:t,async:!0,type:"module"},s),(s=Et.get(n))&&qc(t,s),i=a.createElement("script"),Qe(i),We(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Op(t,s,a,l){var n=(n=de.current)?Kn(n):null;if(!n)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(s=wa(a.href),a=na(n).hoistableStyles,l=a.get(s),l||(l={type:"style",instance:null,count:0,state:null},a.set(s,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=wa(a.href);var i=na(n).hoistableStyles,c=i.get(t);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,c),(i=n.querySelector(_l(t)))&&!i._p&&(c.instance=i,c.state.loading=5),Et.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Et.set(t,a),i||tx(n,t,a,c.state))),s&&l===null)throw Error(d(528,""));return c}if(s&&l!==null)throw Error(d(529,""));return null;case"script":return s=a.async,a=a.src,typeof a=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Ua(a),a=na(n).hoistableScripts,l=a.get(s),l||(l={type:"script",instance:null,count:0,state:null},a.set(s,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function wa(t){return'href="'+yt(t)+'"'}function _l(t){return'link[rel="stylesheet"]['+t+"]"}function zp(t){return C({},t,{"data-precedence":t.precedence,precedence:null})}function tx(t,s,a,l){t.querySelector('link[rel="preload"][as="style"]['+s+"]")?l.loading=1:(s=t.createElement("link"),l.preload=s,s.addEventListener("load",function(){return l.loading|=1}),s.addEventListener("error",function(){return l.loading|=2}),We(s,"link",a),Qe(s),t.head.appendChild(s))}function Ua(t){return'[src="'+yt(t)+'"]'}function kl(t){return"script[async]"+t}function Dp(t,s,a){if(s.count++,s.instance===null)switch(s.type){case"style":var l=t.querySelector('style[data-href~="'+yt(a.href)+'"]');if(l)return s.instance=l,Qe(l),l;var n=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Qe(l),We(l,"style",n),Wn(l,a.precedence,t),s.instance=l;case"stylesheet":n=wa(a.href);var i=t.querySelector(_l(n));if(i)return s.state.loading|=4,s.instance=i,Qe(i),i;l=zp(a),(n=Et.get(n))&&Cc(l,n),i=(t.ownerDocument||t).createElement("link"),Qe(i);var c=i;return c._p=new Promise(function(p,S){c.onload=p,c.onerror=S}),We(i,"link",l),s.state.loading|=4,Wn(i,a.precedence,t),s.instance=i;case"script":return i=Ua(a.src),(n=t.querySelector(kl(i)))?(s.instance=n,Qe(n),n):(l=a,(n=Et.get(i))&&(l=C({},a),qc(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),Qe(n),We(n,"link",l),t.head.appendChild(n),s.instance=n);case"void":return null;default:throw Error(d(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(l=s.instance,s.state.loading|=4,Wn(l,a.precedence,t));return s.instance}function Wn(t,s,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var p=l[c];if(p.dataset.precedence===s)i=p;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(s=a.nodeType===9?a.head:a,s.insertBefore(t,s.firstChild))}function Cc(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.title==null&&(t.title=s.title)}function qc(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.integrity==null&&(t.integrity=s.integrity)}var Fn=null;function wp(t,s,a){if(Fn===null){var l=new Map,n=Fn=new Map;n.set(a,l)}else n=Fn,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[Za]||i[Ze]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(s)||"";c=t+c;var p=l.get(c);p?p.push(i):l.set(c,[i])}}return l}function Up(t,s,a){t=t.ownerDocument||t,t.head.insertBefore(a,s==="title"?t.querySelector("head > title"):null)}function sx(t,s,a){if(a===1||s.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;return s.rel==="stylesheet"?(t=s.disabled,typeof s.precedence=="string"&&t==null):!0;case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function Mp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ax(t,s,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=wa(l.href),i=s.querySelector(_l(n));if(i){s=i._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(t.count++,t=In.bind(t),s.then(t,t)),a.state.loading|=4,a.instance=i,Qe(i);return}i=s.ownerDocument||s,l=zp(l),(n=Et.get(n))&&Cc(l,n),i=i.createElement("link"),Qe(i);var c=i;c._p=new Promise(function(p,S){c.onload=p,c.onerror=S}),We(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,s),(s=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=In.bind(t),s.addEventListener("load",a),s.addEventListener("error",a))}}var Rc=0;function lx(t,s){return t.stylesheets&&t.count===0&&ei(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&ei(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+s);0<t.imgBytes&&Rc===0&&(Rc=62500*Uf());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ei(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Rc?50:800)+s);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function In(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ei(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $n=null;function ei(t,s){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$n=new Map,s.forEach(nx,t),$n=null,In.call(t))}function nx(t,s){if(!(s.state.loading&4)){var a=$n.get(t);if(a)var l=a.get(null);else{a=new Map,$n.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=s.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=In.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),s.state.loading|=4}}var Bl={$$typeof:w,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function ix(t,s,a,l,n,i,c,p,S){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ni(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.hiddenUpdates=Ni(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Lp(t,s,a,l,n,i,c,p,S,B,U,G){return t=new ix(t,s,a,c,S,B,U,G,p),s=1,i===!0&&(s|=24),i=pt(3,null,null,s),t.current=i,i.stateNode=t,s=ir(),s.refCount++,t.pooledCache=s,s.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:s},dr(i),t}function Gp(t){return t?(t=fa,t):fa}function Pp(t,s,a,l,n,i){n=Gp(n),l.context===null?l.context=n:l.pendingContext=n,l=js(s),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=bs(t,l,s),a!==null&&(rt(a,t,s),ol(a,t,s))}function Yp(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<s?a:s}}function Ec(t,s){Yp(t,s),(t=t.alternate)&&Yp(t,s)}function Qp(t){if(t.tag===13||t.tag===31){var s=Ps(t,67108864);s!==null&&rt(s,t,67108864),Ec(t,67108864)}}function Xp(t){if(t.tag===13||t.tag===31){var s=jt();s=Si(s);var a=Ps(t,s);a!==null&&rt(a,t,s),Ec(t,s)}}var ti=!0;function rx(t,s,a,l){var n=M.T;M.T=null;var i=Y.p;try{Y.p=2,_c(t,s,a,l)}finally{Y.p=i,M.T=n}}function cx(t,s,a,l){var n=M.T;M.T=null;var i=Y.p;try{Y.p=8,_c(t,s,a,l)}finally{Y.p=i,M.T=n}}function _c(t,s,a,l){if(ti){var n=kc(l);if(n===null)fc(t,s,l,si,a),Jp(t,l);else if(dx(n,t,s,a,l))l.stopPropagation();else if(Jp(t,l),s&4&&-1<ox.indexOf(t)){for(;n!==null;){var i=la(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=ws(i.pendingLanes);if(c!==0){var p=i;for(p.pendingLanes|=2,p.entangledLanes|=2;c;){var S=1<<31-dt(c);p.entanglements[1]|=S,c&=~S}Mt(i),(ve&6)===0&&(Un=ct()+500,Cl(0))}}break;case 31:case 13:p=Ps(i,2),p!==null&&rt(p,i,2),Ln(),Ec(i,2)}if(i=kc(l),i===null&&fc(t,s,l,si,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else fc(t,s,l,null,a)}}function kc(t){return t=Hi(t),Bc(t)}var si=null;function Bc(t){if(si=null,t=aa(t),t!==null){var s=b(t);if(s===null)t=null;else{var a=s.tag;if(a===13){if(t=v(s),t!==null)return t;t=null}else if(a===31){if(t=x(s),t!==null)return t;t=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null)}}return si=t,null}function Zp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jh()){case $c:return 2;case eo:return 8;case Ql:case Vh:return 32;case to:return 268435456;default:return 32}default:return 32}}var Hc=!1,_s=null,ks=null,Bs=null,Hl=new Map,Al=new Map,Hs=[],ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jp(t,s){switch(t){case"focusin":case"focusout":_s=null;break;case"dragenter":case"dragleave":ks=null;break;case"mouseover":case"mouseout":Bs=null;break;case"pointerover":case"pointerout":Hl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Al.delete(s.pointerId)}}function Ol(t,s,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:s,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},s!==null&&(s=la(s),s!==null&&Qp(s)),t):(t.eventSystemFlags|=l,s=t.targetContainers,n!==null&&s.indexOf(n)===-1&&s.push(n),t)}function dx(t,s,a,l,n){switch(s){case"focusin":return _s=Ol(_s,t,s,a,l,n),!0;case"dragenter":return ks=Ol(ks,t,s,a,l,n),!0;case"mouseover":return Bs=Ol(Bs,t,s,a,l,n),!0;case"pointerover":var i=n.pointerId;return Hl.set(i,Ol(Hl.get(i)||null,t,s,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Al.set(i,Ol(Al.get(i)||null,t,s,a,l,n)),!0}return!1}function Vp(t){var s=aa(t.target);if(s!==null){var a=b(s);if(a!==null){if(s=a.tag,s===13){if(s=v(a),s!==null){t.blockedOn=s,ro(t.priority,function(){Xp(a)});return}}else if(s===31){if(s=x(a),s!==null){t.blockedOn=s,ro(t.priority,function(){Xp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ai(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var a=kc(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Bi=l,a.target.dispatchEvent(l),Bi=null}else return s=la(a),s!==null&&Qp(s),t.blockedOn=a,!1;s.shift()}return!0}function Kp(t,s,a){ai(t)&&a.delete(s)}function ux(){Hc=!1,_s!==null&&ai(_s)&&(_s=null),ks!==null&&ai(ks)&&(ks=null),Bs!==null&&ai(Bs)&&(Bs=null),Hl.forEach(Kp),Al.forEach(Kp)}function li(t,s){t.blockedOn===s&&(t.blockedOn=null,Hc||(Hc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ux)))}var ni=null;function Wp(t){ni!==t&&(ni=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ni===t&&(ni=null);for(var s=0;s<t.length;s+=3){var a=t[s],l=t[s+1],n=t[s+2];if(typeof l!="function"){if(Bc(l||a)===null)continue;break}var i=la(a);i!==null&&(t.splice(s,3),s-=3,kr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ma(t){function s(S){return li(S,t)}_s!==null&&li(_s,t),ks!==null&&li(ks,t),Bs!==null&&li(Bs,t),Hl.forEach(s),Al.forEach(s);for(var a=0;a<Hs.length;a++){var l=Hs[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Hs.length&&(a=Hs[0],a.blockedOn===null);)Vp(a),a.blockedOn===null&&Hs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[tt]||null;if(typeof i=="function")c||Wp(a);else if(c){var p=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[tt]||null)p=c.formAction;else if(Bc(n)!==null)continue}else p=c.action;typeof p=="function"?a[l+1]=p:(a.splice(l,3),l-=3),Wp(a)}}}function Fp(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function s(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),n!==null&&(n(),n=null)}}}function Ac(t){this._internalRoot=t}ii.prototype.render=Ac.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(d(409));var a=s.current,l=jt();Pp(a,l,t,s,null,null)},ii.prototype.unmount=Ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;Pp(t.current,2,null,t,null,null),Ln(),s[sa]=null}};function ii(t){this._internalRoot=t}ii.prototype.unstable_scheduleHydration=function(t){if(t){var s=io();t={blockedOn:null,target:t,priority:s};for(var a=0;a<Hs.length&&s!==0&&s<Hs[a].priority;a++);Hs.splice(a,0,t),a===0&&Vp(t)}};var Ip=o.version;if(Ip!=="19.2.3")throw Error(d(527,Ip,"19.2.3"));Y.findDOMNode=function(t){var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=y(s),t=t!==null?E(t):null,t=t===null?null:t.stateNode,t};var px={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ri.isDisabled&&ri.supportsFiber)try{Ya=ri.inject(px),ot=ri}catch{}}return Dl.createRoot=function(t,s){if(!m(t))throw Error(d(299));var a=!1,l="",n=nu,i=iu,c=ru;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onUncaughtError!==void 0&&(n=s.onUncaughtError),s.onCaughtError!==void 0&&(i=s.onCaughtError),s.onRecoverableError!==void 0&&(c=s.onRecoverableError)),s=Lp(t,1,!1,null,null,a,l,null,n,i,c,Fp),t[sa]=s.current,mc(t),new Ac(s)},Dl.hydrateRoot=function(t,s,a){if(!m(t))throw Error(d(299));var l=!1,n="",i=nu,c=iu,p=ru,S=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(p=a.onRecoverableError),a.formState!==void 0&&(S=a.formState)),s=Lp(t,1,!0,s,a??null,l,n,S,i,c,p,Fp),s.context=Gp(null),a=s.current,l=jt(),l=Si(l),n=js(l),n.callback=null,bs(a,n,l),a=l,s.current.lanes=a,Xa(s,a),Mt(s),t[sa]=s.current,mc(t),new ii(s)},Dl.version="19.2.3",Dl}var ch;function Nx(){if(ch)return Dc.exports;ch=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Dc.exports=gx(),Dc.exports}var Sx=Nx();const Tx=gh(Sx);var oh="popstate";function Cx(r={}){function o(d,m){let{pathname:b,search:v,hash:x}=d.location;return Yc("",{pathname:b,search:v,hash:x},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function u(d,m){return typeof m=="string"?m:Ul(m)}return Rx(o,u,null,r)}function He(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Ot(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function qx(){return Math.random().toString(36).substring(2,10)}function dh(r,o){return{usr:r.state,key:r.key,idx:o}}function Yc(r,o,u=null,d){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof o=="string"?La(o):o,state:u,key:o&&o.key||d||qx()}}function Ul({pathname:r="/",search:o="",hash:u=""}){return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(r+=u.charAt(0)==="#"?u:"#"+u),r}function La(r){let o={};if(r){let u=r.indexOf("#");u>=0&&(o.hash=r.substring(u),r=r.substring(0,u));let d=r.indexOf("?");d>=0&&(o.search=r.substring(d),r=r.substring(0,d)),r&&(o.pathname=r)}return o}function Rx(r,o,u,d={}){let{window:m=document.defaultView,v5Compat:b=!1}=d,v=m.history,x="POP",N=null,y=E();y==null&&(y=0,v.replaceState({...v.state,idx:y},""));function E(){return(v.state||{idx:null}).idx}function C(){x="POP";let f=E(),g=f==null?null:f-y;y=f,N&&N({action:x,location:A.location,delta:g})}function D(f,g){x="PUSH";let j=Yc(A.location,f,g);y=E()+1;let w=dh(j,y),te=A.createHref(j);try{v.pushState(w,"",te)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;m.location.assign(te)}b&&N&&N({action:x,location:A.location,delta:1})}function T(f,g){x="REPLACE";let j=Yc(A.location,f,g);y=E();let w=dh(j,y),te=A.createHref(j);v.replaceState(w,"",te),b&&N&&N({action:x,location:A.location,delta:0})}function z(f){return Ex(f)}let A={get action(){return x},get location(){return r(m,v)},listen(f){if(N)throw new Error("A history only accepts one active listener");return m.addEventListener(oh,C),N=f,()=>{m.removeEventListener(oh,C),N=null}},createHref(f){return o(m,f)},createURL:z,encodeLocation(f){let g=z(f);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:D,replace:T,go(f){return v.go(f)}};return A}function Ex(r,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),He(u,"No window.location.(origin|href) available to create URL");let d=typeof r=="string"?r:Ul(r);return d=d.replace(/ $/,"%20"),!o&&d.startsWith("//")&&(d=u+d),new URL(d,u)}function Nh(r,o,u="/"){return _x(r,o,u,!1)}function _x(r,o,u,d){let m=typeof o=="string"?La(o):o,b=rs(m.pathname||"/",u);if(b==null)return null;let v=Sh(r);kx(v);let x=null;for(let N=0;x==null&&N<v.length;++N){let y=Gx(b);x=Mx(v[N],y,d)}return x}function Sh(r,o=[],u=[],d="",m=!1){let b=(v,x,N=m,y)=>{let E={relativePath:y===void 0?v.path||"":y,caseSensitive:v.caseSensitive===!0,childrenIndex:x,route:v};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(d)&&N)return;He(E.relativePath.startsWith(d),`Absolute route path "${E.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(d.length)}let C=is([d,E.relativePath]),D=u.concat(E);v.children&&v.children.length>0&&(He(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${C}".`),Sh(v.children,o,D,C,N)),!(v.path==null&&!v.index)&&o.push({path:C,score:wx(C,v.index),routesMeta:D})};return r.forEach((v,x)=>{if(v.path===""||!v.path?.includes("?"))b(v,x);else for(let N of Th(v.path))b(v,x,!0,N)}),o}function Th(r){let o=r.split("/");if(o.length===0)return[];let[u,...d]=o,m=u.endsWith("?"),b=u.replace(/\?$/,"");if(d.length===0)return m?[b,""]:[b];let v=Th(d.join("/")),x=[];return x.push(...v.map(N=>N===""?b:[b,N].join("/"))),m&&x.push(...v),x.map(N=>r.startsWith("/")&&N===""?"/":N)}function kx(r){r.sort((o,u)=>o.score!==u.score?u.score-o.score:Ux(o.routesMeta.map(d=>d.childrenIndex),u.routesMeta.map(d=>d.childrenIndex)))}var Bx=/^:[\w-]+$/,Hx=3,Ax=2,Ox=1,zx=10,Dx=-2,uh=r=>r==="*";function wx(r,o){let u=r.split("/"),d=u.length;return u.some(uh)&&(d+=Dx),o&&(d+=Ax),u.filter(m=>!uh(m)).reduce((m,b)=>m+(Bx.test(b)?Hx:b===""?Ox:zx),d)}function Ux(r,o){return r.length===o.length&&r.slice(0,-1).every((d,m)=>d===o[m])?r[r.length-1]-o[o.length-1]:0}function Mx(r,o,u=!1){let{routesMeta:d}=r,m={},b="/",v=[];for(let x=0;x<d.length;++x){let N=d[x],y=x===d.length-1,E=b==="/"?o:o.slice(b.length)||"/",C=ui({path:N.relativePath,caseSensitive:N.caseSensitive,end:y},E),D=N.route;if(!C&&y&&u&&!d[d.length-1].route.index&&(C=ui({path:N.relativePath,caseSensitive:N.caseSensitive,end:!1},E)),!C)return null;Object.assign(m,C.params),v.push({params:m,pathname:is([b,C.pathname]),pathnameBase:Xx(is([b,C.pathnameBase])),route:D}),C.pathnameBase!=="/"&&(b=is([b,C.pathnameBase]))}return v}function ui(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[u,d]=Lx(r.path,r.caseSensitive,r.end),m=o.match(u);if(!m)return null;let b=m[0],v=b.replace(/(.)\/+$/,"$1"),x=m.slice(1);return{params:d.reduce((y,{paramName:E,isOptional:C},D)=>{if(E==="*"){let z=x[D]||"";v=b.slice(0,b.length-z.length).replace(/(.)\/+$/,"$1")}const T=x[D];return C&&!T?y[E]=void 0:y[E]=(T||"").replace(/%2F/g,"/"),y},{}),pathname:b,pathnameBase:v,pattern:r}}function Lx(r,o=!1,u=!0){Ot(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let d=[],m="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,x,N)=>(d.push({paramName:x,isOptional:N!=null}),N?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(d.push({paramName:"*"}),m+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?m+="\\/*$":r!==""&&r!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,o?void 0:"i"),d]}function Gx(r){try{return r.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Ot(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),r}}function rs(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,d=r.charAt(u);return d&&d!=="/"?null:r.slice(u)||"/"}var Ch=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Px=r=>Ch.test(r);function Yx(r,o="/"){let{pathname:u,search:d="",hash:m=""}=typeof r=="string"?La(r):r,b;if(u)if(Px(u))b=u;else{if(u.includes("//")){let v=u;u=u.replace(/\/\/+/g,"/"),Ot(!1,`Pathnames cannot have embedded double slashes - normalizing ${v} -> ${u}`)}u.startsWith("/")?b=ph(u.substring(1),"/"):b=ph(u,o)}else b=o;return{pathname:b,search:Zx(d),hash:Jx(m)}}function ph(r,o){let u=o.replace(/\/+$/,"").split("/");return r.split("/").forEach(m=>{m===".."?u.length>1&&u.pop():m!=="."&&u.push(m)}),u.length>1?u.join("/"):"/"}function Lc(r,o,u,d){return`Cannot include a '${r}' character in a manually specified \`to.${o}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Qx(r){return r.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function qh(r){let o=Qx(r);return o.map((u,d)=>d===o.length-1?u.pathname:u.pathnameBase)}function Rh(r,o,u,d=!1){let m;typeof r=="string"?m=La(r):(m={...r},He(!m.pathname||!m.pathname.includes("?"),Lc("?","pathname","search",m)),He(!m.pathname||!m.pathname.includes("#"),Lc("#","pathname","hash",m)),He(!m.search||!m.search.includes("#"),Lc("#","search","hash",m)));let b=r===""||m.pathname==="",v=b?"/":m.pathname,x;if(v==null)x=u;else{let C=o.length-1;if(!d&&v.startsWith("..")){let D=v.split("/");for(;D[0]==="..";)D.shift(),C-=1;m.pathname=D.join("/")}x=C>=0?o[C]:"/"}let N=Yx(m,x),y=v&&v!=="/"&&v.endsWith("/"),E=(b||v===".")&&u.endsWith("/");return!N.pathname.endsWith("/")&&(y||E)&&(N.pathname+="/"),N}var is=r=>r.join("/").replace(/\/\/+/g,"/"),Xx=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Zx=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Jx=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Vx=class{constructor(r,o,u,d=!1){this.status=r,this.statusText=o||"",this.internal=d,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function Kx(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Wx(r){return r.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Eh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _h(r,o){let u=r;if(typeof u!="string"||!Ch.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let d=u,m=!1;if(Eh)try{let b=new URL(window.location.href),v=u.startsWith("//")?new URL(b.protocol+u):new URL(u),x=rs(v.pathname,o);v.origin===b.origin&&x!=null?u=x+v.search+v.hash:m=!0}catch{Ot(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:m,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var kh=["POST","PUT","PATCH","DELETE"];new Set(kh);var Fx=["GET",...kh];new Set(Fx);var Ga=h.createContext(null);Ga.displayName="DataRouter";var mi=h.createContext(null);mi.displayName="DataRouterState";var Ix=h.createContext(!1),Bh=h.createContext({isTransitioning:!1});Bh.displayName="ViewTransition";var $x=h.createContext(new Map);$x.displayName="Fetchers";var ej=h.createContext(null);ej.displayName="Await";var _t=h.createContext(null);_t.displayName="Navigation";var Ml=h.createContext(null);Ml.displayName="Location";var cs=h.createContext({outlet:null,matches:[],isDataRoute:!1});cs.displayName="Route";var Zc=h.createContext(null);Zc.displayName="RouteError";var Hh="REACT_ROUTER_ERROR",tj="REDIRECT",sj="ROUTE_ERROR_RESPONSE";function aj(r){if(r.startsWith(`${Hh}:${tj}:{`))try{let o=JSON.parse(r.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function lj(r){if(r.startsWith(`${Hh}:${sj}:{`))try{let o=JSON.parse(r.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new Vx(o.status,o.statusText,o.data)}catch{}}function nj(r,{relative:o}={}){He(Ll(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:d}=h.useContext(_t),{hash:m,pathname:b,search:v}=Gl(r,{relative:o}),x=b;return u!=="/"&&(x=b==="/"?u:is([u,b])),d.createHref({pathname:x,search:v,hash:m})}function Ll(){return h.useContext(Ml)!=null}function Os(){return He(Ll(),"useLocation() may be used only in the context of a <Router> component."),h.useContext(Ml).location}var Ah="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Oh(r){h.useContext(_t).static||h.useLayoutEffect(r)}function ij(){let{isDataRoute:r}=h.useContext(cs);return r?vj():rj()}function rj(){He(Ll(),"useNavigate() may be used only in the context of a <Router> component.");let r=h.useContext(Ga),{basename:o,navigator:u}=h.useContext(_t),{matches:d}=h.useContext(cs),{pathname:m}=Os(),b=JSON.stringify(qh(d)),v=h.useRef(!1);return Oh(()=>{v.current=!0}),h.useCallback((N,y={})=>{if(Ot(v.current,Ah),!v.current)return;if(typeof N=="number"){u.go(N);return}let E=Rh(N,JSON.parse(b),m,y.relative==="path");r==null&&o!=="/"&&(E.pathname=E.pathname==="/"?o:is([o,E.pathname])),(y.replace?u.replace:u.push)(E,y.state,y)},[o,u,b,m,r])}h.createContext(null);function Gl(r,{relative:o}={}){let{matches:u}=h.useContext(cs),{pathname:d}=Os(),m=JSON.stringify(qh(u));return h.useMemo(()=>Rh(r,JSON.parse(m),d,o==="path"),[r,m,d,o])}function cj(r,o){return zh(r,o)}function zh(r,o,u,d,m){He(Ll(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:b}=h.useContext(_t),{matches:v}=h.useContext(cs),x=v[v.length-1],N=x?x.params:{},y=x?x.pathname:"/",E=x?x.pathnameBase:"/",C=x&&x.route;{let j=C&&C.path||"";wh(y,!C||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let D=Os(),T;if(o){let j=typeof o=="string"?La(o):o;He(E==="/"||j.pathname?.startsWith(E),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${j.pathname}" was given in the \`location\` prop.`),T=j}else T=D;let z=T.pathname||"/",A=z;if(E!=="/"){let j=E.replace(/^\//,"").split("/");A="/"+z.replace(/^\//,"").split("/").slice(j.length).join("/")}let f=Nh(r,{pathname:A});Ot(C||f!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Ot(f==null||f[f.length-1].route.element!==void 0||f[f.length-1].route.Component!==void 0||f[f.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=hj(f&&f.map(j=>Object.assign({},j,{params:Object.assign({},N,j.params),pathname:is([E,b.encodeLocation?b.encodeLocation(j.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?E:is([E,b.encodeLocation?b.encodeLocation(j.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathnameBase])})),v,u,d,m);return o&&g?h.createElement(Ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},g):g}function oj(){let r=bj(),o=Kx(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),u=r instanceof Error?r.stack:null,d="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:d},b={padding:"2px 4px",backgroundColor:d},v=null;return console.error("Error handled by React Router default ErrorBoundary:",r),v=h.createElement(h.Fragment,null,h.createElement("p",null,"💿 Hey developer 👋"),h.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",h.createElement("code",{style:b},"ErrorBoundary")," or"," ",h.createElement("code",{style:b},"errorElement")," prop on your route.")),h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},o),u?h.createElement("pre",{style:m},u):null,v)}var dj=h.createElement(oj,null),Dh=class extends h.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){this.props.onError?this.props.onError(r,o):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const u=lj(r.digest);u&&(r=u)}let o=r!==void 0?h.createElement(cs.Provider,{value:this.props.routeContext},h.createElement(Zc.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?h.createElement(uj,{error:r},o):o}};Dh.contextType=Ix;var Gc=new WeakMap;function uj({children:r,error:o}){let{basename:u}=h.useContext(_t);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let d=aj(o.digest);if(d){let m=Gc.get(o);if(m)throw m;let b=_h(d.location,u);if(Eh&&!Gc.get(o))if(b.isExternal||d.reloadDocument)window.location.href=b.absoluteURL||b.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(b.to,{replace:d.replace}));throw Gc.set(o,v),v}return h.createElement("meta",{httpEquiv:"refresh",content:`0;url=${b.absoluteURL||b.to}`})}}return r}function pj({routeContext:r,match:o,children:u}){let d=h.useContext(Ga);return d&&d.static&&d.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=o.route.id),h.createElement(cs.Provider,{value:r},u)}function hj(r,o=[],u=null,d=null,m=null){if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let b=r,v=u?.errors;if(v!=null){let E=b.findIndex(C=>C.route.id&&v?.[C.route.id]!==void 0);He(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`),b=b.slice(0,Math.min(b.length,E+1))}let x=!1,N=-1;if(u)for(let E=0;E<b.length;E++){let C=b[E];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(N=E),C.route.id){let{loaderData:D,errors:T}=u,z=C.route.loader&&!D.hasOwnProperty(C.route.id)&&(!T||T[C.route.id]===void 0);if(C.route.lazy||z){x=!0,N>=0?b=b.slice(0,N+1):b=[b[0]];break}}}let y=u&&d?(E,C)=>{d(E,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:Wx(u.matches),errorInfo:C})}:void 0;return b.reduceRight((E,C,D)=>{let T,z=!1,A=null,f=null;u&&(T=v&&C.route.id?v[C.route.id]:void 0,A=C.route.errorElement||dj,x&&(N<0&&D===0?(wh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,f=null):N===D&&(z=!0,f=C.route.hydrateFallbackElement||null)));let g=o.concat(b.slice(0,D+1)),j=()=>{let w;return T?w=A:z?w=f:C.route.Component?w=h.createElement(C.route.Component,null):C.route.element?w=C.route.element:w=E,h.createElement(pj,{match:C,routeContext:{outlet:E,matches:g,isDataRoute:u!=null},children:w})};return u&&(C.route.ErrorBoundary||C.route.errorElement||D===0)?h.createElement(Dh,{location:u.location,revalidation:u.revalidation,component:A,error:T,children:j(),routeContext:{outlet:null,matches:g,isDataRoute:!0},onError:y}):j()},null)}function Jc(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mj(r){let o=h.useContext(Ga);return He(o,Jc(r)),o}function fj(r){let o=h.useContext(mi);return He(o,Jc(r)),o}function xj(r){let o=h.useContext(cs);return He(o,Jc(r)),o}function Vc(r){let o=xj(r),u=o.matches[o.matches.length-1];return He(u.route.id,`${r} can only be used on routes that contain a unique "id"`),u.route.id}function jj(){return Vc("useRouteId")}function bj(){let r=h.useContext(Zc),o=fj("useRouteError"),u=Vc("useRouteError");return r!==void 0?r:o.errors?.[u]}function vj(){let{router:r}=mj("useNavigate"),o=Vc("useNavigate"),u=h.useRef(!1);return Oh(()=>{u.current=!0}),h.useCallback(async(m,b={})=>{Ot(u.current,Ah),u.current&&(typeof m=="number"?await r.navigate(m):await r.navigate(m,{fromRouteId:o,...b}))},[r,o])}var hh={};function wh(r,o,u){!o&&!hh[r]&&(hh[r]=!0,Ot(!1,u))}h.memo(yj);function yj({routes:r,future:o,state:u,onError:d}){return zh(r,void 0,u,d,o)}function xe(r){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function gj({basename:r="/",children:o=null,location:u,navigationType:d="POP",navigator:m,static:b=!1,unstable_useTransitions:v}){He(!Ll(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=r.replace(/^\/*/,"/"),N=h.useMemo(()=>({basename:x,navigator:m,static:b,unstable_useTransitions:v,future:{}}),[x,m,b,v]);typeof u=="string"&&(u=La(u));let{pathname:y="/",search:E="",hash:C="",state:D=null,key:T="default"}=u,z=h.useMemo(()=>{let A=rs(y,x);return A==null?null:{location:{pathname:A,search:E,hash:C,state:D,key:T},navigationType:d}},[x,y,E,C,D,T,d]);return Ot(z!=null,`<Router basename="${x}"> is not able to match the URL "${y}${E}${C}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:h.createElement(_t.Provider,{value:N},h.createElement(Ml.Provider,{children:o,value:z}))}function Nj({children:r,location:o}){return cj(Qc(r),o)}function Qc(r,o=[]){let u=[];return h.Children.forEach(r,(d,m)=>{if(!h.isValidElement(d))return;let b=[...o,m];if(d.type===h.Fragment){u.push.apply(u,Qc(d.props.children,b));return}He(d.type===xe,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!d.props.index||!d.props.children,"An index route cannot have child routes.");let v={id:d.props.id||b.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(v.children=Qc(d.props.children,b)),u.push(v)}),u}var oi="get",di="application/x-www-form-urlencoded";function fi(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Sj(r){return fi(r)&&r.tagName.toLowerCase()==="button"}function Tj(r){return fi(r)&&r.tagName.toLowerCase()==="form"}function Cj(r){return fi(r)&&r.tagName.toLowerCase()==="input"}function qj(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Rj(r,o){return r.button===0&&(!o||o==="_self")&&!qj(r)}var ci=null;function Ej(){if(ci===null)try{new FormData(document.createElement("form"),0),ci=!1}catch{ci=!0}return ci}var _j=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pc(r){return r!=null&&!_j.has(r)?(Ot(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${di}"`),null):r}function kj(r,o){let u,d,m,b,v;if(Tj(r)){let x=r.getAttribute("action");d=x?rs(x,o):null,u=r.getAttribute("method")||oi,m=Pc(r.getAttribute("enctype"))||di,b=new FormData(r)}else if(Sj(r)||Cj(r)&&(r.type==="submit"||r.type==="image")){let x=r.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let N=r.getAttribute("formaction")||x.getAttribute("action");if(d=N?rs(N,o):null,u=r.getAttribute("formmethod")||x.getAttribute("method")||oi,m=Pc(r.getAttribute("formenctype"))||Pc(x.getAttribute("enctype"))||di,b=new FormData(x,r),!Ej()){let{name:y,type:E,value:C}=r;if(E==="image"){let D=y?`${y}.`:"";b.append(`${D}x`,"0"),b.append(`${D}y`,"0")}else y&&b.append(y,C)}}else{if(fi(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=oi,d=null,m=di,v=r}return b&&m==="text/plain"&&(v=b,b=void 0),{action:d,method:u.toLowerCase(),encType:m,formData:b,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kc(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Bj(r,o,u,d){let m=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${d}`:m.pathname=`${m.pathname}.${d}`:m.pathname==="/"?m.pathname=`_root.${d}`:o&&rs(m.pathname,o)==="/"?m.pathname=`${o.replace(/\/$/,"")}/_root.${d}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${d}`,m}async function Hj(r,o){if(r.id in o)return o[r.id];try{let u=await import(r.module);return o[r.id]=u,u}catch(u){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Aj(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Oj(r,o,u){let d=await Promise.all(r.map(async m=>{let b=o.routes[m.route.id];if(b){let v=await Hj(b,u);return v.links?v.links():[]}return[]}));return Uj(d.flat(1).filter(Aj).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function mh(r,o,u,d,m,b){let v=(N,y)=>u[y]?N.route.id!==u[y].route.id:!0,x=(N,y)=>u[y].pathname!==N.pathname||u[y].route.path?.endsWith("*")&&u[y].params["*"]!==N.params["*"];return b==="assets"?o.filter((N,y)=>v(N,y)||x(N,y)):b==="data"?o.filter((N,y)=>{let E=d.routes[N.route.id];if(!E||!E.hasLoader)return!1;if(v(N,y)||x(N,y))return!0;if(N.route.shouldRevalidate){let C=N.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:N.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function zj(r,o,{includeHydrateFallback:u}={}){return Dj(r.map(d=>{let m=o.routes[d.route.id];if(!m)return[];let b=[m.module];return m.clientActionModule&&(b=b.concat(m.clientActionModule)),m.clientLoaderModule&&(b=b.concat(m.clientLoaderModule)),u&&m.hydrateFallbackModule&&(b=b.concat(m.hydrateFallbackModule)),m.imports&&(b=b.concat(m.imports)),b}).flat(1))}function Dj(r){return[...new Set(r)]}function wj(r){let o={},u=Object.keys(r).sort();for(let d of u)o[d]=r[d];return o}function Uj(r,o){let u=new Set;return new Set(o),r.reduce((d,m)=>{let b=JSON.stringify(wj(m));return u.has(b)||(u.add(b),d.push({key:b,link:m})),d},[])}function Uh(){let r=h.useContext(Ga);return Kc(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Mj(){let r=h.useContext(mi);return Kc(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Wc=h.createContext(void 0);Wc.displayName="FrameworkContext";function Mh(){let r=h.useContext(Wc);return Kc(r,"You must render this element inside a <HydratedRouter> element"),r}function Lj(r,o){let u=h.useContext(Wc),[d,m]=h.useState(!1),[b,v]=h.useState(!1),{onFocus:x,onBlur:N,onMouseEnter:y,onMouseLeave:E,onTouchStart:C}=o,D=h.useRef(null);h.useEffect(()=>{if(r==="render"&&v(!0),r==="viewport"){let A=g=>{g.forEach(j=>{v(j.isIntersecting)})},f=new IntersectionObserver(A,{threshold:.5});return D.current&&f.observe(D.current),()=>{f.disconnect()}}},[r]),h.useEffect(()=>{if(d){let A=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(A)}}},[d]);let T=()=>{m(!0)},z=()=>{m(!1),v(!1)};return u?r!=="intent"?[b,D,{}]:[b,D,{onFocus:wl(x,T),onBlur:wl(N,z),onMouseEnter:wl(y,T),onMouseLeave:wl(E,z),onTouchStart:wl(C,T)}]:[!1,D,{}]}function wl(r,o){return u=>{r&&r(u),u.defaultPrevented||o(u)}}function Gj({page:r,...o}){let{router:u}=Uh(),d=h.useMemo(()=>Nh(u.routes,r,u.basename),[u.routes,r,u.basename]);return d?h.createElement(Yj,{page:r,matches:d,...o}):null}function Pj(r){let{manifest:o,routeModules:u}=Mh(),[d,m]=h.useState([]);return h.useEffect(()=>{let b=!1;return Oj(r,o,u).then(v=>{b||m(v)}),()=>{b=!0}},[r,o,u]),d}function Yj({page:r,matches:o,...u}){let d=Os(),{future:m,manifest:b,routeModules:v}=Mh(),{basename:x}=Uh(),{loaderData:N,matches:y}=Mj(),E=h.useMemo(()=>mh(r,o,y,b,d,"data"),[r,o,y,b,d]),C=h.useMemo(()=>mh(r,o,y,b,d,"assets"),[r,o,y,b,d]),D=h.useMemo(()=>{if(r===d.pathname+d.search+d.hash)return[];let A=new Set,f=!1;if(o.forEach(j=>{let w=b.routes[j.route.id];!w||!w.hasLoader||(!E.some(te=>te.route.id===j.route.id)&&j.route.id in N&&v[j.route.id]?.shouldRevalidate||w.hasClientLoader?f=!0:A.add(j.route.id))}),A.size===0)return[];let g=Bj(r,x,m.unstable_trailingSlashAwareDataRequests,"data");return f&&A.size>0&&g.searchParams.set("_routes",o.filter(j=>A.has(j.route.id)).map(j=>j.route.id).join(",")),[g.pathname+g.search]},[x,m.unstable_trailingSlashAwareDataRequests,N,d,b,E,o,r,v]),T=h.useMemo(()=>zj(C,b),[C,b]),z=Pj(C);return h.createElement(h.Fragment,null,D.map(A=>h.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...u})),T.map(A=>h.createElement("link",{key:A,rel:"modulepreload",href:A,...u})),z.map(({key:A,link:f})=>h.createElement("link",{key:A,nonce:u.nonce,...f})))}function Qj(...r){return o=>{r.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var Xj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xj&&(window.__reactRouterVersion="7.12.0")}catch{}function Zj({basename:r,children:o,unstable_useTransitions:u,window:d}){let m=h.useRef();m.current==null&&(m.current=Cx({window:d,v5Compat:!0}));let b=m.current,[v,x]=h.useState({action:b.action,location:b.location}),N=h.useCallback(y=>{u===!1?x(y):h.startTransition(()=>x(y))},[u]);return h.useLayoutEffect(()=>b.listen(N),[b,N]),h.createElement(gj,{basename:r,children:o,location:v.location,navigationType:v.action,navigator:b,unstable_useTransitions:u})}var Lh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pl=h.forwardRef(function({onClick:o,discover:u="render",prefetch:d="none",relative:m,reloadDocument:b,replace:v,state:x,target:N,to:y,preventScrollReset:E,viewTransition:C,unstable_defaultShouldRevalidate:D,...T},z){let{basename:A,unstable_useTransitions:f}=h.useContext(_t),g=typeof y=="string"&&Lh.test(y),j=_h(y,A);y=j.to;let w=nj(y,{relative:m}),[te,le,$]=Lj(d,T),X=Kj(y,{replace:v,state:x,target:N,preventScrollReset:E,relative:m,viewTransition:C,unstable_defaultShouldRevalidate:D,unstable_useTransitions:f});function ie(bt){o&&o(bt),bt.defaultPrevented||X(bt)}let ze=h.createElement("a",{...T,...$,href:j.absoluteURL||w,onClick:j.isExternal||b?o:ie,ref:Qj(z,le),target:N,"data-discover":!g&&u==="render"?"true":void 0});return te&&!g?h.createElement(h.Fragment,null,ze,h.createElement(Gj,{page:w})):ze});Pl.displayName="Link";var se=h.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:d="",end:m=!1,style:b,to:v,viewTransition:x,children:N,...y},E){let C=Gl(v,{relative:y.relative}),D=Os(),T=h.useContext(mi),{navigator:z,basename:A}=h.useContext(_t),f=T!=null&&eb(C)&&x===!0,g=z.encodeLocation?z.encodeLocation(C).pathname:C.pathname,j=D.pathname,w=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;u||(j=j.toLowerCase(),w=w?w.toLowerCase():null,g=g.toLowerCase()),w&&A&&(w=rs(w,A)||w);const te=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let le=j===g||!m&&j.startsWith(g)&&j.charAt(te)==="/",$=w!=null&&(w===g||!m&&w.startsWith(g)&&w.charAt(g.length)==="/"),X={isActive:le,isPending:$,isTransitioning:f},ie=le?o:void 0,ze;typeof d=="function"?ze=d(X):ze=[d,le?"active":null,$?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let bt=typeof b=="function"?b(X):b;return h.createElement(Pl,{...y,"aria-current":ie,className:ze,ref:E,style:bt,to:v,viewTransition:x},typeof N=="function"?N(X):N)});se.displayName="NavLink";var Jj=h.forwardRef(({discover:r="render",fetcherKey:o,navigate:u,reloadDocument:d,replace:m,state:b,method:v=oi,action:x,onSubmit:N,relative:y,preventScrollReset:E,viewTransition:C,unstable_defaultShouldRevalidate:D,...T},z)=>{let{unstable_useTransitions:A}=h.useContext(_t),f=Ij(),g=$j(x,{relative:y}),j=v.toLowerCase()==="get"?"get":"post",w=typeof x=="string"&&Lh.test(x),te=le=>{if(N&&N(le),le.defaultPrevented)return;le.preventDefault();let $=le.nativeEvent.submitter,X=$?.getAttribute("formmethod")||v,ie=()=>f($||le.currentTarget,{fetcherKey:o,method:X,navigate:u,replace:m,state:b,relative:y,preventScrollReset:E,viewTransition:C,unstable_defaultShouldRevalidate:D});A&&u!==!1?h.startTransition(()=>ie()):ie()};return h.createElement("form",{ref:z,method:j,action:g,onSubmit:d?N:te,...T,"data-discover":!w&&r==="render"?"true":void 0})});Jj.displayName="Form";function Vj(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gh(r){let o=h.useContext(Ga);return He(o,Vj(r)),o}function Kj(r,{target:o,replace:u,state:d,preventScrollReset:m,relative:b,viewTransition:v,unstable_defaultShouldRevalidate:x,unstable_useTransitions:N}={}){let y=ij(),E=Os(),C=Gl(r,{relative:b});return h.useCallback(D=>{if(Rj(D,o)){D.preventDefault();let T=u!==void 0?u:Ul(E)===Ul(C),z=()=>y(r,{replace:T,state:d,preventScrollReset:m,relative:b,viewTransition:v,unstable_defaultShouldRevalidate:x});N?h.startTransition(()=>z()):z()}},[E,y,C,u,d,o,r,m,b,v,x,N])}var Wj=0,Fj=()=>`__${String(++Wj)}__`;function Ij(){let{router:r}=Gh("useSubmit"),{basename:o}=h.useContext(_t),u=jj(),d=r.fetch,m=r.navigate;return h.useCallback(async(b,v={})=>{let{action:x,method:N,encType:y,formData:E,body:C}=kj(b,o);if(v.navigate===!1){let D=v.fetcherKey||Fj();await d(D,u,v.action||x,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:E,body:C,formMethod:v.method||N,formEncType:v.encType||y,flushSync:v.flushSync})}else await m(v.action||x,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:E,body:C,formMethod:v.method||N,formEncType:v.encType||y,replace:v.replace,state:v.state,fromRouteId:u,flushSync:v.flushSync,viewTransition:v.viewTransition})},[d,m,o,u])}function $j(r,{relative:o}={}){let{basename:u}=h.useContext(_t),d=h.useContext(cs);He(d,"useFormAction must be used inside a RouteContext");let[m]=d.matches.slice(-1),b={...Gl(r||".",{relative:o})},v=Os();if(r==null){b.search=v.search;let x=new URLSearchParams(b.search),N=x.getAll("index");if(N.some(E=>E==="")){x.delete("index"),N.filter(C=>C).forEach(C=>x.append("index",C));let E=x.toString();b.search=E?`?${E}`:""}}return(!r||r===".")&&m.route.index&&(b.search=b.search?b.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(b.pathname=b.pathname==="/"?u:is([u,b.pathname])),Ul(b)}function eb(r,{relative:o}={}){let u=h.useContext(Bh);He(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=Gh("useViewTransitionState"),m=Gl(r,{relative:o});if(!u.isTransitioning)return!1;let b=rs(u.currentLocation.pathname,d)||u.currentLocation.pathname,v=rs(u.nextLocation.pathname,d)||u.nextLocation.pathname;return ui(m.pathname,v)!=null||ui(m.pathname,b)!=null}var Ph={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},fh=ta.createContext&&ta.createContext(Ph),tb=["attr","size","title"];function sb(r,o){if(r==null)return{};var u=ab(r,o),d,m;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(r);for(m=0;m<b.length;m++)d=b[m],!(o.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(r,d)&&(u[d]=r[d])}return u}function ab(r,o){if(r==null)return{};var u={};for(var d in r)if(Object.prototype.hasOwnProperty.call(r,d)){if(o.indexOf(d)>=0)continue;u[d]=r[d]}return u}function pi(){return pi=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var u=arguments[o];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(r[d]=u[d])}return r},pi.apply(this,arguments)}function xh(r,o){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);o&&(d=d.filter(function(m){return Object.getOwnPropertyDescriptor(r,m).enumerable})),u.push.apply(u,d)}return u}function hi(r){for(var o=1;o<arguments.length;o++){var u=arguments[o]!=null?arguments[o]:{};o%2?xh(Object(u),!0).forEach(function(d){lb(r,d,u[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):xh(Object(u)).forEach(function(d){Object.defineProperty(r,d,Object.getOwnPropertyDescriptor(u,d))})}return r}function lb(r,o,u){return o=nb(o),o in r?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,r}function nb(r){var o=ib(r,"string");return typeof o=="symbol"?o:o+""}function ib(r,o){if(typeof r!="object"||!r)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var d=u.call(r,o);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function Yh(r){return r&&r.map((o,u)=>ta.createElement(o.tag,hi({key:u},o.attr),Yh(o.child)))}function Lt(r){return o=>ta.createElement(rb,pi({attr:hi({},r.attr)},o),Yh(r.child))}function rb(r){var o=u=>{var{attr:d,size:m,title:b}=r,v=sb(r,tb),x=m||u.size||"1em",N;return u.className&&(N=u.className),r.className&&(N=(N?N+" ":"")+r.className),ta.createElement("svg",pi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,d,v,{className:N,style:hi(hi({color:r.color||u.color},u.style),r.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),b&&ta.createElement("title",null,b),r.children)};return fh!==void 0?ta.createElement(fh.Consumer,null,u=>o(u)):o(Ph)}function V(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(r)}function K(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(r)}function cb(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(r)}function ob(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(r)}const jh="/bitzup-exchange/assets/logo-dark-BO2MCep8.svg",bh="/bitzup-exchange/assets/logo-light-CnaW2wfZ.svg";function J(r){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(r)}function db(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m5 8 6 6"},child:[]},{tag:"path",attr:{d:"m4 14 6-6 2-3"},child:[]},{tag:"path",attr:{d:"M2 5h12"},child:[]},{tag:"path",attr:{d:"M7 2h1"},child:[]},{tag:"path",attr:{d:"m22 22-5-10-5 10"},child:[]},{tag:"path",attr:{d:"M14 18h6"},child:[]}]})(r)}function ub(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",x2:"20",y1:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"4",x2:"20",y1:"6",y2:"6"},child:[]},{tag:"line",attr:{x1:"4",x2:"20",y1:"18",y2:"18"},child:[]}]})(r)}function vh(r){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(r)}const pb=({theme:r,setTheme:o})=>{const[u,d]=h.useState(!1),[m,b]=h.useState(!1),[v,x]=h.useState("main"),[N,y]=h.useState(!1),[E,C]=h.useState(!1),[D,T]=h.useState(!1),[z,A]=h.useState(!1),f=h.useRef(null);h.useEffect(()=>{const X=ie=>{f.current&&!f.current.contains(ie.target)&&d(!1)};return document.addEventListener("mousedown",X),()=>document.removeEventListener("mousedown",X)},[]);const[g,j]=h.useState(!1),[w,te]=h.useState("English"),le=h.useRef(null);h.useEffect(()=>{const X=ie=>{le.current&&!le.current.contains(ie.target)&&j(!1)};return document.addEventListener("mousedown",X),()=>document.removeEventListener("mousedown",X)},[]);const $=Os();return h.useEffect(()=>{$.pathname.startsWith("/docs/market")&&y(!0)},[$.pathname]),h.useEffect(()=>{$.pathname.startsWith("/docs/websocket")&&C(!0),$.pathname.startsWith("/docs/websocket/public")&&(C(!0),T(!0))},[$.pathname]),h.useEffect(()=>{$.pathname.startsWith("/docs/rate-limit")&&A(!0)},[$.pathname]),e.jsx(e.Fragment,{children:e.jsx("header",{className:"main-header",children:e.jsxs("div",{className:"container-fluid",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("span",{className:"d-lg-none",onClick:()=>{x("docs"),b(!0)},children:e.jsx(ub,{size:34})}),e.jsx(Pl,{to:"/",className:"logo",children:e.jsx("img",{src:r==="dark"?bh:jh,alt:"logo",width:120})}),e.jsx("nav",{className:"nav-links d-none d-md-flex",children:e.jsx(se,{to:"/",style:{marginLeft:"16px"},children:"V1 API"})})]}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("div",{ref:le,className:"lang-dropdown d-none d-md-block",children:e.jsxs("span",{className:"lang-trigger",onClick:()=>j(X=>!X),children:[e.jsx(db,{}),w]})}),e.jsx("button",{className:"icon-btn",onClick:()=>o(r==="dark"?"light":"dark"),children:r==="dark"?e.jsx(ob,{}):e.jsx(cb,{})})]})]}),m&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mobile-drawer-overlay",onClick:()=>b(!1)}),e.jsxs("div",{className:"mobile-drawer",children:[e.jsxs("div",{className:"mobile-drawer-header",children:[e.jsx("img",{src:r==="dark"?bh:jh,width:110,alt:"logo"}),e.jsx("span",{className:"drawer-close",onClick:()=>b(!1),children:"✕"})]}),e.jsxs("div",{className:"drawer-screens",children:[e.jsx("div",{className:`drawer-screen main ${v==="main"?"active":""}`,children:e.jsxs("div",{children:[e.jsx(se,{to:"/",className:({isActive:X})=>`drawer-main-item ${X?"active":""}`,children:"V5 API"}),e.jsx(se,{to:"/p2p",className:"drawer-main-item",children:"P2P Trading"}),e.jsx(se,{to:"/bybit-pay",className:"drawer-main-item external",children:"Bybit Pay ↗"}),e.jsx(se,{to:"/tax-api-v3",className:"drawer-main-item",children:"Tax API V3"})]})}),e.jsxs("div",{className:`drawer-screen sub ${v==="docs"?"active":""}`,children:[e.jsxs("div",{className:"mobile-drawer-back",onClick:()=>x("main"),children:[e.jsx(vh,{})," Back to main menu"]}),e.jsx(se,{to:"/",style:{marginTop:"8px"},onClick:()=>b(!1),className:({isActive:X})=>`drawer-main ${X?"active":""}`,children:"Integration Guidance"}),e.jsxs("div",{className:"drawer-item arrow",onClick:()=>y(!N),children:["Market ",e.jsx(J,{className:N?"rotate":""})]}),N&&e.jsxs("div",{className:"drawer-sub",children:[e.jsx(se,{to:"/docs/market/kline",onClick:()=>b(!1),className:"drawer-sub-item",children:"Get Kline"}),e.jsx(se,{to:"/docs/market/orderbook",onClick:()=>b(!1),className:"drawer-sub-item",children:"Get Orderbook"}),e.jsx(se,{to:"/docs/market/tickers",onClick:()=>b(!1),className:"drawer-sub-item",children:"Get Tickers"})]}),e.jsxs("div",{className:"drawer-item arrow",onClick:()=>C(!E),children:["WebSocket Stream ",e.jsx(J,{className:E?"rotate":""})]}),E&&e.jsxs("div",{className:"drawer-sub",children:[e.jsx(se,{to:"/docs/ws/connect",onClick:()=>b(!1),className:"drawer-sub-item",children:"Connect"}),e.jsxs("div",{className:"drawer-item arrow",onClick:()=>T(!D),children:["Public ",e.jsx(J,{className:D?"rotate":""})]}),D&&e.jsxs("div",{className:"drawer-sub deep",children:[e.jsx(se,{to:"/docs/websocket/public/orderbook",onClick:()=>b(!1),className:"drawer-sub-item",children:"Orderbook"}),e.jsx(se,{to:"/docs/websocket/public/trade",onClick:()=>b(!1),className:"drawer-sub-item",children:"Trade"}),e.jsx(se,{to:"/docs/websocket/public/ticker",onClick:()=>b(!1),className:"drawer-sub-item",children:"Ticker"}),e.jsx(se,{to:"/docs/websocket/public/kline",onClick:()=>b(!1),className:"drawer-sub-item",children:"Kline"})]})]}),e.jsxs("div",{className:"drawer-item arrow",onClick:()=>A(!z),children:["Rate Limit ",e.jsx(J,{className:z?"rotate":""})]}),z&&e.jsx("div",{className:"drawer-sub",children:e.jsx(se,{to:"/docs/rate-limit/rate-limit-rules",onClick:()=>b(!1),className:"drawer-sub-item",children:"Rate Limit Rules"})}),e.jsx(se,{to:"/docs/enums",onClick:()=>b(!1),className:"drawer-main",children:"Enums Definitions"})]}),e.jsx("div",{className:`drawer-screen sub ${v==="languages"?"active":""}`,children:e.jsxs("div",{className:"mobile-drawer-back",onClick:()=>x("main"),children:[e.jsx(vh,{})," Back to main menu"]})})]})]})]})]})})})};function hb(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"},child:[]}]})(r)}function mb(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"},child:[]}]})(r)}const fb=()=>{const[r,o]=h.useState(null),[u,d]=h.useState(null),[m,b]=h.useState(null),[v,x]=h.useState(null),[N,y]=h.useState(null),[E,C]=h.useState(localStorage.getItem("sidebar")==="collapsed");return h.useEffect(()=>{localStorage.setItem("sidebar",E?"collapsed":"open")},[E]),e.jsxs("aside",{className:`sidebar ${E?"collapsed":""}`,children:[e.jsxs("div",{className:"sidebar-scroll",children:[e.jsx(se,{to:"/",className:"sidebar-link",children:"Integration Guidance"}),e.jsxs("div",{className:"sidebar-section collapsible sidebar-link",onClick:()=>o(r==="market"?null:"market"),children:[e.jsx("span",{children:"Market"}),e.jsx(J,{className:r==="market"?"rotate":""})]}),r==="market"&&e.jsxs("div",{className:"sidebar-sub",children:[e.jsx(se,{to:"/docs/market/kline",className:"sidebar-link",children:"Get Kline"}),e.jsx(se,{to:"/docs/market/orderbook",className:"sidebar-link",children:"Get Orderbook"}),e.jsx(se,{to:"/docs/market/tickers",className:"sidebar-link",children:"Get Tickers"}),e.jsx(se,{to:"/docs/market/recent-public-trades",className:"sidebar-link",children:"Get Recent Public Trades"}),e.jsx(se,{to:"/docs/market/market-info",className:"sidebar-link",children:"Market Info"})]}),e.jsxs("div",{className:"sidebar-section collapsible sidebar-link",onClick:()=>d(u==="ws"?null:"ws"),children:[e.jsx("span",{children:"WebSocket Stream"}),e.jsx(J,{className:u==="ws"?"rotate":""})]}),u==="ws"&&e.jsxs("div",{className:"sidebar-sub",children:[e.jsx(se,{to:"/docs/ws/connect",className:"sidebar-link",children:"Connect"}),e.jsxs("div",{className:"sidebar-section collapsible sidebar-link sub-header",onClick:()=>b(m==="public"?null:"public"),children:[e.jsx("span",{children:"Public"}),e.jsx(J,{className:m==="public"?"rotate":""})]}),m==="public"&&e.jsxs("div",{className:"sidebar-sub deep",children:[e.jsx(se,{to:"/docs/websocket/public/orderbook",className:"sidebar-link",children:"Orderbook"}),e.jsx(se,{to:"/docs/websocket/public/trade",className:"sidebar-link",children:"Trade"}),e.jsx(se,{to:"/docs/websocket/public/ticker",className:"sidebar-link",children:"Ticker"}),e.jsx(se,{to:"/docs/websocket/public/kline",className:"sidebar-link",children:"Kline"})]})]}),e.jsxs("div",{className:"sidebar-section collapsible sidebar-link",onClick:()=>x(v==="market"?null:"market"),children:[e.jsx("span",{children:"Rate Limit"}),e.jsx(J,{className:v==="market"?"rotate":""})]}),v==="market"&&e.jsx("div",{className:"sidebar-sub",children:e.jsx(se,{to:"/docs/rate-limit/rate-limit-rules",className:"sidebar-link",children:"Rate Limit Rules"})}),e.jsx(se,{to:"/docs/enums",className:"sidebar-link",children:"Enums Definitions"}),e.jsxs("div",{className:"sidebar-section collapsible sidebar-link",onClick:()=>y(N==="private"?null:"private"),children:[e.jsx("span",{children:"Private"}),e.jsx(J,{className:N==="private"?"rotate":""})]}),N==="private"&&e.jsxs("div",{className:"sidebar-sub",children:[e.jsx(se,{to:"/docs/private/get-positions",className:"sidebar-link",children:"Get Positions"}),e.jsx(se,{to:"/docs/private/get-open-orders",className:"sidebar-link",children:"Get Open Orders"}),e.jsx(se,{to:"/docs/private/get-order-history",className:"sidebar-link",children:"Get Order History"}),e.jsx(se,{to:"/docs/private/get-trade-history",className:"sidebar-link",children:"Get Trade History"}),e.jsx(se,{to:"/docs/private/get-closed-pnl",className:"sidebar-link",children:"Get Closed PnL"}),e.jsx(se,{to:"/docs/private/get-wallet-balance",className:"sidebar-link",children:"Get Wallet Balance"}),e.jsx(se,{to:"/docs/private/get-leverage",className:"sidebar-link",children:"Get Leverage"}),e.jsx(se,{to:"/docs/private/get-margin-mode",className:"sidebar-link",children:"Get Margin Mode"}),e.jsx(se,{to:"/docs/private/set-leverage",className:"sidebar-link",children:"Set Leverage"}),e.jsx(se,{to:"/docs/private/switch-margin-mode",className:"sidebar-link",children:"Switch Margin Mode"}),e.jsx(se,{to:"/docs/private/add-isolated-margin",className:"sidebar-link",children:"Add Isolated Margin"}),e.jsx(se,{to:"/docs/private/auto-isolated-margin",className:"sidebar-link",children:"Auto Isolated Margin"}),e.jsx(se,{to:"/docs/private/set-trading-stop",className:"sidebar-link",children:"Set Trading Stop"}),e.jsx(se,{to:"/docs/private/place-order",className:"sidebar-link",children:"Place Order"}),e.jsx(se,{to:"/docs/private/cancel-order",className:"sidebar-link",children:"Cancel Order"}),e.jsx(se,{to:"/docs/private/cancel-all-orders",className:"sidebar-link",children:"Cancel All Orders"}),e.jsx(se,{to:"/docs/private/modify-order",className:"sidebar-link",children:"Modify Order"}),e.jsx(se,{to:"/docs/private/close-position",className:"sidebar-link",children:"Close Position"}),e.jsx(se,{to:"/docs/private/estimate-liquidation-price",className:"sidebar-link",children:"Estimate Liquidation Price"})]})]}),e.jsx("div",{className:"sidebar-footer",children:e.jsx("button",{className:"collapse-btn",onClick:()=>C(!E),children:E?e.jsx(mb,{}):e.jsx(hb,{})})})]})},xb=()=>{const[r,o]=h.useState("GET"),[u,d]=h.useState(!1),[m,b]=h.useState(!1),v=()=>`{
  "status": 0,
  "message": "error message",
  "data": {},
}`,x=async()=>{await navigator.clipboard.writeText(y[r]),d(!0),setTimeout(()=>d(!1),1500)},N=async()=>{await navigator.clipboard.writeText(v()),b(!0),setTimeout(()=>b(!1),1500)},y={GET:`GET /v5/order/realtime?category=option&symbol=BTC-29JUL22-25000-C HTTP/1.1
Host: api-testnet.bybit.com`};return e.jsx("div",{className:"container-fluid p-0",children:e.jsxs("div",{className:"api-layout",children:[e.jsx("h1",{className:"api-title",children:"Integration Guidance"}),e.jsxs("div",{className:"alert-success api-tip mb-4",children:[e.jsx("strong",{children:"TIP:"})," To learn more about the V5 API, please read the introduction."]}),e.jsx("h3",{className:"top-req-text",children:"Authentication"}),e.jsx("p",{className:"api-desc",children:"Please visit BitZup website to generate an API key."}),e.jsx("h3",{className:"top-req-text",children:"REST API Base Endpoint:"}),e.jsxs("p",{className:"api-desc mb-3",children:["Mainnet:"," ",e.jsx("span",{className:"futures-text-api",children:"https://api.bitzup.com/futures/api"})]}),e.jsx("h6",{className:"top-req-text mb-2",children:"HTTP request example"}),e.jsx("div",{className:"lang-tabs",children:["GET"].map(E=>e.jsx("button",{className:r===E?"active":"",onClick:()=>o(E),children:E},E))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:x,children:u?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:y[r]})})]}),e.jsx("h3",{className:"top-req-text",children:"Common response parameters"}),e.jsx("div",{className:"api-table-box mb-4",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"status"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Success/Error code. 1: success, 0/3: error"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Success/Error msg.",e.jsx("span",{className:"pill",children:"SUCCESS"}),"indicates a successful response"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data"}),e.jsx("td",{children:"Object"}),e.jsx("td",{children:"Business data result"})]})]})]})}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:N,children:m?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "status": 0,',`
`,' "message":'," ",e.jsx("span",{className:"json-string",children:'"error message"'}),",",`
`," ",'"data": ',"{","}",",",`
`,"}"]})})]})]})})},jb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
        "status": "1",
        "message": "SUCCESS",
        "data": {
          "symbol": "BTCUSDT",
          "category": "linear",
          "list": [
            [
              "1670608800000",
              "17154",
              "17154",
              "17111",
              "17136.5",
              "2028.137",
              "34736136.8065"
            ],
            [
              "1670605200000",
              "17143.5",
              "17158",
              "17137.5",
              "17154",
              "1095.661",
              "18786245.062"
            ],
            [
              "1670601600000",
              "17168.5",
              "17177.5",
              "17135.5",
              "17143.5",
              "2038.195",
              "34970006.194"
            ]
          ]
        }
      }`,A={HTTP:`GET /v1/kline?category=inverse&symbol=BTCUSD&interval=60&start=1670601600000&end=1670608800000 HTTP/1.1
  Host: api.bitzup.com/futures/api`,Python:`import requests

  url = "https://api.bitzup.com/futures/api/v1/kline"

  params = {
      "symbol": "BTCUSDT",
      "interval": 60,
      "start": 1670601600000,
      "end": 1670608800000,
  }

  try:
      resp = requests.get(url, params=params, timeout=10)
      resp.raise_for_status()  # raises for 4xx/5xx
      data = resp.json()
      print(data)
  except requests.exceptions.HTTPError as e:
      print("API error:", resp.text)
  except requests.exceptions.RequestException as e:
      print("Network error:", str(e))`,Go:`package main

import (
	"fmt"
	"io"
	"net/http"
	"net/url"
	"time"
)

func main() {
	baseURL := "https://api.bitzup.com/futures/api/v1/kline"

	params := url.Values{}
	params.Add("symbol", "BTCUSDT")
	params.Add("interval", "60")
	params.Add("start", "1670601600000")
	params.Add("end", "1670608800000")

	reqURL := baseURL + "?" + params.Encode()

	client := &http.Client{
		Timeout: 10 * time.Second,
	}

	req, err := http.NewRequest("GET", reqURL, nil)
	if err != nil {
		panic(err)
	}

	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)

	if resp.StatusCode != http.StatusOK {
		fmt.Println("API error:", string(body))
		return
	}

	fmt.Println(string(body))
}`,Java:`import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;

public class KlineExample {

    public static void main(String[] args) throws Exception {
        String baseUrl = "https://api.bitzup.com/futures/api/v1/kline";

        String query = String.format(
            "category=%s&symbol=%s&interval=%s&start=%s&end=%s",
            encode("BTCUSDT"),
            encode("60"),
            encode("1670601600000"),
            encode("1670608800000")
        );

        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + "?" + query))
            .GET()
            .timeout(Duration.ofSeconds(10))
            .build();

        HttpResponse<String> response =
            client.send(request, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() != 200) {
            System.out.println("API error: " + response.body());
            return;
        }

        System.out.println(response.body());
    }

    private static String encode(String value) {
        return URLEncoder.encode(value, StandardCharsets.UTF_8);
    }
}`,Node:`const axios = require("axios");

async function getKline() {
  try {
    const response = await axios.get(
      "https://api.bitzup.com/futures/api/v1/kline",
      {
        params: {
          symbol: "BTCUSDT",
          interval: 60,
          start: 1670601600000,
          end: 1670608800000,
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    // Axios-safe error handling
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("Network Error:", error.message);
    }
  }
}

getKline();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Market"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Kline"})]}),e.jsx("h1",{className:"api-title",children:"Get Kline"}),e.jsx("p",{className:"api-desc",children:"Query for historical klines (also known as candles/candlesticks). Charts are returned in groups based on the requested interval."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method",children:"GET"}),e.jsx("span",{className:"path",children:"/v1/kline"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, like",e.jsx("span",{className:"pill",children:"BTCUSDT"}),", uppercase only"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"interval"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Kline interval:",e.jsxs("ul",{style:{display:"flex",flexWrap:"wrap",gap:"6px",listStyle:"none",padding:0},children:[e.jsx("li",{children:e.jsx("span",{className:"pill",children:"1"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"3"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"5"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"15"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"60"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"120"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"240"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"360"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"720"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"D"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"W"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"M"})})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"start"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"integer"}),e.jsx("td",{children:"The start timestamp (ms) "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"end"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"integer"}),e.jsx("td",{children:"The end timestamp (ms) "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"limit"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"integer"}),e.jsxs("td",{children:["Limit for data size per page. [",e.jsx("span",{className:"pill",children:"1"}),",",e.jsx("span",{className:"pill",children:"1000"})," ]. Default:"," ",e.jsx("span",{className:"pill",children:" 200 "})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"category"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Product type"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"list"}),e.jsx("td",{children:"array"}),e.jsx("td",{children:e.jsxs("ul",{children:[e.jsx("li",{children:"An string array of individual candle"}),e.jsxs("li",{children:["Sort in reverse by"," ",e.jsx("span",{className:"pill",children:"startTime"})]})]})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," list[0]: startTime"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Start time of the candle (ms)"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," list[1]: openPrice"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Open price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," list[2]: highPrice"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Highest price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," list[3]: lowPrice"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Lowest price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," list[4]: closePrice"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Close price. Is the last traded price when the candle is not closed"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," list[5]: volume"]}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Trade volume",e.jsx("ul",{children:e.jsx("li",{children:"USDT contract: unit is base coin (e.g., BTC)"})})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," list[6]: turnover"]}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Turnover",e.jsx("ul",{children:e.jsx("li",{children:"USDT contract: unit is quote coin (e.g., USDT)"})})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,'  "status": "1",',`
`,'  "message": "SUCCESS",',`
`,'  "data": ',"{",`
`,'    "symbol": "BTCUSDT",',`
`,'    "category": "linear",',`
`,'    "list": [',`
`,"      [",`
`,'        "1670608800000",',`
`,'        "17154",',`
`,'        "17154",',`
`,'        "17111",',`
`,'        "17136.5",',`
`,'        "2028.137",',`
`,'        "34736136.8065"',`
`,"      ],",`
`,"      [",`
`,'        "1670605200000",',`
`,'        "17143.5",',`
`,'        "17158",',`
`,'        "17137.5",',`
`,'        "17154",',`
`,'        "1095.661",',`
`,'        "18786245.062"',`
`,"      ],",`
`,"      [",`
`,'        "1670601600000",',`
`,'        "17168.5",',`
`,'        "17177.5",',`
`,'        "17135.5",',`
`,'        "17143.5",',`
`,'        "2038.195",',`
`,'        "34970006.194"',`
`,"      ]",`
`,"    ]",`
`,"  ","}",`
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},bb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "status": "1",
  "message": "SUCCESS",
  "data": {
   "s": "BTCUSDT",
    "a": [
      [
        "88764.1",
        "2.4"
      ],
      [
        "88764.2",
        "0.784"
      ]
    ],
    "b": [
      [
        "88764",
        "0.961"
      ],
      [
        "88763.3",
        "0.003"
      ]
    ]
  }
}`,A={HTTP:`GET /v1/get-order-book?symbol=BTCUSDT&limit=2 HTTP/1.1
Host: https://api.bitzup.com/futures/api`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/get-order-book"

params = {
    "symbol": "BTCUSDT",
    "limit": 2,
}

try:
    response = requests.get(url, params=params, timeout=10)
    response.raise_for_status()
    print(response.json())
except requests.exceptions.HTTPError:
    print("API Error:", response.text)
except requests.exceptions.RequestException as e:
    print("Network Error:", str(e))`,Go:`package main

import (
	"fmt"
	"io"
	"net/http"
	"net/url"
	"time"
)

func main() {
	baseURL := "https://api.bitzup.com/futures/api/v1/get-order-book"

	params := url.Values{}
	params.Add("symbol", "BTCUSDT")
	params.Add("limit", "2")

	reqURL := baseURL + "?" + params.Encode()

	client := &http.Client{
		Timeout: 10 * time.Second,
	}

	req, err := http.NewRequest("GET", reqURL, nil)
	if err != nil {
		panic(err)
	}

	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)

	if resp.StatusCode != http.StatusOK {
		fmt.Println("API Error:", string(body))
		return
	}

	fmt.Println(string(body))
}`,Java:`import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;

public class OrderBookExample {

    public static void main(String[] args) throws Exception {
        String baseUrl = "https://api.bitzup.com/futures/api/v1/get-order-book";

        String query = String.format(
            "symbol=%s&limit=%s",
            encode("BTCUSDT"),
            encode("2")
        );

        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + "?" + query))
            .timeout(Duration.ofSeconds(10))
            .GET()
            .build();

        HttpResponse<String> response =
            client.send(request, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() != 200) {
            System.out.println("API Error: " + response.body());
            return;
        }

        System.out.println(response.body());
    }

    private static String encode(String value) {
        return URLEncoder.encode(value, StandardCharsets.UTF_8);
    }
}`,Node:`const axios = require("axios");

async function getOrderBook() {
  try {
    const response = await axios.get(
      "https://api.bitzup.com/futures/api/v1/get-order-book",
      {
        params: {
          symbol: "BTCUSDT",
          limit: 2,
        },
        timeout: 10000,
      }
    );

    console.log(response.data);
  } catch (err) {
    if (err.response) {
      console.error("API Error:", err.response.data);
    } else {
      console.error("Network Error:", err.message);
    }
  }
}

getOrderBook();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Market"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get OrderBook"})]}),e.jsx("h1",{className:"api-title",children:"Get OrderBook"}),e.jsx("p",{className:"api-desc",children:"Query for orderbook depth data."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsxs("div",{className:"api-info-box",children:[e.jsxs("div",{className:"api-info-header",children:[e.jsx("span",{className:"api-info-icon",children:"!"}),e.jsx("span",{className:"api-info-title",children:"INFO"})]}),e.jsx("ul",{className:"api-info-list",children:e.jsx("li",{children:"The response is in the snapshot format."})})]}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method",children:"GET"}),e.jsx("span",{className:"path",children:"/v1/get-order-book"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, like",e.jsx("span",{className:"pill",children:"BTCUSDT"}),", uppercase only"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"limit"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"integer"}),e.jsxs("td",{children:["Limit for data size per page. [",e.jsx("span",{className:"pill",children:"1"}),",",e.jsx("span",{className:"pill",children:"500"})," ]. Default:"," ",e.jsx("span",{className:"pill",children:" 25 "})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"s"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"b"}),e.jsx("td",{children:"array"}),e.jsx("td",{children:"Bid, buyer. Sorted by price in descending order"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," b[0]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Bid price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," b[1]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Bid size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"a"}),e.jsx("td",{children:"array"}),e.jsx("td",{children:"Ask, seller. Sorted by price in ascending order"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," a[0]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Ask price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," a[1]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Ask size"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,'  "status": "1",',`
`,'  "message": "SUCCESS",',`
`,'  "data": ',"{",`
`,'    "s": "BTCUSDT",',`
`,'    "a": [',`
`,"      [",`
`,'        "88764.1",',`
`,'        "2.4"',`
`,"      ],",`
`,"      [",`
`,'        "88764.2",',`
`,'        "0.784"',`
`,"      ]",`
`,"    ],",`
`,'    "b": [',`
`,"      [",`
`,'        "88764",',`
`,'        "0.961"',`
`,"      ],",`
`,"      [",`
`,'        "88763.3",',`
`,'        "0.003"',`
`,"      ]",`
`,"    ]",`
`,"  ","}",`
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},vb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "status": "1",
  "message": "SUCCESS",
  "data": {
    "symbol": "BTCUSDT",
    "last_price": "88555.20",
    "index_price": "88605.50",
    "mark_price": "88558.68",
    "prev_price_24h": "91141.60",
    "change_24h": "-0.028377",
    "high_price_24h": "91339.00",
    "low_price_24h": "87773.10",
    "prev_price_1h": "89231.40",
    "open_interest": "51973.674",
    "funding_rate": "0.00003285",
    "next_funding_time": "1769011200000",
    "turn_over_24h": "7526525461.7731",
    "volume_24h": "84047.7230"
  }
}`,A={HTTP:`GET /v1/get-ticker?symbol=BTCUSDT HTTP/1.1
    Host: https://api.bitzup.com/futures/api`,Python:`import requests
    
    url = "https://api.bitzup.com/futures/api/v1/get-ticker"
    
    params = {
        "symbol": "BTCUSDT",
    }
    
    try:
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        print(response.json())
    except requests.exceptions.HTTPError:
        print("API Error:", response.text)
    except requests.exceptions.RequestException as e:
        print("Network Error:", str(e))`,Go:`package main
    
    import (
        "fmt"
        "io"
        "net/http"
        "net/url"
        "time"
    )
    
    func main() {
        baseURL := "https://api.bitzup.com/futures/api/v1/get-ticker"
    
        params := url.Values{}
        params.Add("symbol", "BTCUSDT")
    
        reqURL := baseURL + "?" + params.Encode()
    
        client := &http.Client{
            Timeout: 10 * time.Second,
        }
    
        req, err := http.NewRequest("GET", reqURL, nil)
        if err != nil {
            panic(err)
        }
    
        resp, err := client.Do(req)
        if err != nil {
            panic(err)
        }
        defer resp.Body.Close()
    
        body, _ := io.ReadAll(resp.Body)
    
        if resp.StatusCode != http.StatusOK {
            fmt.Println("API Error:", string(body))
            return
        }
    
        fmt.Println(string(body))
    }`,Java:`import java.net.URI;
    import java.net.URLEncoder;
    import java.net.http.HttpClient;
    import java.net.http.HttpRequest;
    import java.net.http.HttpResponse;
    import java.nio.charset.StandardCharsets;
    import java.time.Duration;
    
    public class OrderBookExample {
    
        public static void main(String[] args) throws Exception {
            String baseUrl = "https://api.bitzup.com/futures/api/v1/get-ticker";
    
            String query = String.format(
                "symbol=%s",
                encode("BTCUSDT"),
            );
    
            HttpClient client = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
    
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "?" + query))
                .timeout(Duration.ofSeconds(10))
                .GET()
                .build();
    
            HttpResponse<String> response =
                client.send(request, HttpResponse.BodyHandlers.ofString());
    
            if (response.statusCode() != 200) {
                System.out.println("API Error: " + response.body());
                return;
            }
    
            System.out.println(response.body());
        }
    
        private static String encode(String value) {
            return URLEncoder.encode(value, StandardCharsets.UTF_8);
        }
    }`,Node:`const axios = require("axios");
    
    async function getTickers() {
      try {
        const response = await axios.get(
          "https://api.bitzup.com/futures/api/v1/get-ticker",
          {
            params: {
              symbol: "BTCUSDT",
           
            },
            timeout: 10000,
          }
        );
    
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          console.error("API Error:", err.response.data);
        } else {
          console.error("Network Error:", err.message);
        }
      }
    }
    
    getTickers();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Market"}),e.jsx("span",{className:"mx-2 ",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Tickers"})]}),e.jsx("h1",{className:"api-title",children:" Get Tickers"}),e.jsx("p",{className:"api-desc",children:"Query for the latest price snapshot and trading volume in the last 24 hours."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsxs("div",{className:"api-info-box",children:[e.jsxs("div",{className:"api-info-header",children:[e.jsx("span",{className:"api-info-icon",children:"!"}),e.jsx("span",{className:"api-info-title",children:"INFO"})]}),e.jsx("ul",{className:"api-info-list",children:e.jsx("li",{children:"The response is in the snapshot format."})})]}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method",children:"GET"}),e.jsx("span",{className:"path",children:"/v1/get-ticker"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, like",e.jsx("span",{className:"pill",children:"BTCUSDT"}),", uppercase only"]})]})})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"last_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Last price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"index_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Index price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"mark_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Mark price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"prev_price_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Market price 24 hours ago"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"change_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Percentage change of market price relative to 24h"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"high_price_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"The highest price in the last 24 hours"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"low_price_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"The lowest price in the last 24 hours"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"prev_price_1h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Market price an hour ago"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"open_interest"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Open interest size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"funding_rate"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Funding rate"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"next_funding_time"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Next funding time (ms)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"turn_over_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Turnover for 24h"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"volume_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Volume for 24h"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,'  "status": "1",',`
`,'  "message": "SUCCESS",',`
`,'  "data": ',"{",`
`,'    "symbol": "BTCUSDT",',`
`,'    "last_price": "88555.20",',`
`,'    "index_price": "88605.50",',`
`,'    "mark_price": "88558.68",',`
`,'    "prev_price_24h": "91141.60",',`
`,'    "change_24h": "-0.028377",',`
`,'    "high_price_24h": "91339.00",',`
`,'    "low_price_24h": "87773.10",',`
`,'    "prev_price_1h": "89231.40",',`
`,'    "open_interest": "51973.674",',`
`,'    "funding_rate": "0.00003285",',`
`,'    "next_funding_time": "1769011200000",',`
`,'    "turn_over_24h": "7526525461.7731",',`
`,'    "volume_24h": "84047.7230"',`
`,"  ","}",`
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},yb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "status": "1",
  "message": "SUCCESS",
  "data": [
    {
      "symbol": "BTCUSDT",
      "price": "88720.00",
      "size": "0.055",
      "side": "Buy",
      "time": "1769000270980"
    },
    {
      "symbol": "BTCUSDT",
      "price": "88720.00",
      "size": "0.004",
      "side": "Buy",
      "time": "1769000270980"
    }
  ]
}`,A={HTTP:`GET /v1/get-trades?symbol=BTCUSDT&limit=2 HTTP/1.1
Host: https://api.bitzup.com/futures/api`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/get-trades"

params = {
    "symbol": "BTCUSDT",
    "limit": 2,
}

try:
    response = requests.get(url, params=params, timeout=10)
    response.raise_for_status()
    print(response.json())
except requests.exceptions.HTTPError:
    print("API Error:", response.text)
except requests.exceptions.RequestException as e:
    print("Network Error:", str(e))`,Go:`package main

import (
	"fmt"
	"io"
	"net/http"
	"net/url"
	"time"
)

func main() {
	baseURL := "https://api.bitzup.com/futures/api/v1/get-trades"

	params := url.Values{}
	params.Add("symbol", "BTCUSDT")
	params.Add("limit", "2")

	reqURL := baseURL + "?" + params.Encode()

	client := &http.Client{
		Timeout: 10 * time.Second,
	}

	req, err := http.NewRequest("GET", reqURL, nil)
	if err != nil {
		panic(err)
	}

	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)

	if resp.StatusCode != http.StatusOK {
		fmt.Println("API Error:", string(body))
		return
	}

	fmt.Println(string(body))
}`,Java:`import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;

public class OrderBookExample {

    public static void main(String[] args) throws Exception {
        String baseUrl = "https://api.bitzup.com/futures/api/v1/get-trades";

        String query = String.format(
            "symbol=%s&limit=%s",
            encode("BTCUSDT"),
            encode("2")
        );

        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + "?" + query))
            .timeout(Duration.ofSeconds(10))
            .GET()
            .build();

        HttpResponse<String> response =
            client.send(request, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() != 200) {
            System.out.println("API Error: " + response.body());
            return;
        }

        System.out.println(response.body());
    }

    private static String encode(String value) {
        return URLEncoder.encode(value, StandardCharsets.UTF_8);
    }
}`,Node:`const axios = require("axios");

async function getTrades() {
  try {
    const response = await axios.get(
      "https://api.bitzup.com/futures/api/v1/get-trades",
      {
        params: {
          symbol: "BTCUSDT",
          limit: 2,
        },
        timeout: 10000,
      }
    );

    console.log(response.data);
  } catch (err) {
    if (err.response) {
      console.error("API Error:", err.response.data);
    } else {
      console.error("Network Error:", err.message);
    }
  }
}

getTrades();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Market"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Recent Public Trades"})]}),e.jsx("h1",{className:"api-title",children:" Get Recent Public Trades"}),e.jsx("p",{className:"api-desc",children:"Query recent public trading history in BitZup."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method",children:"GET"}),e.jsx("span",{className:"path",children:"/v1/get-trades"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, like",e.jsx("span",{className:"pill",children:"BTCUSDT"}),", uppercase only"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"limit"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"integer"}),e.jsxs("td",{children:["Limit for data size per page. [",e.jsx("span",{className:"pill",children:"1"}),",",e.jsx("span",{className:"pill",children:"1000"})," ]. Default:"," ",e.jsx("span",{className:"pill",children:" 500 "})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"size"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade Size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"side"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Side of taker ",e.jsx("span",{className:"pill",children:" Buy"}),", ",e.jsx("span",{className:"pill",children:" Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade time (ms)"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,'  "status": "1",',`
`,'  "message": "SUCCESS",',`
`,'  "data": [',`
`,"    ","{",`
`,'      "symbol": "BTCUSDT",',`
`,'      "price": "88720.00",',`
`,'      "size": "0.055",',`
`,'      "side": "Buy",',`
`,'      "time": "1769000270980"',`
`,"    ","}",",",`
`,"    ","{",`
`,'      "symbol": "BTCUSDT",',`
`,'      "price": "88720.00",',`
`,'      "size": "0.004",',`
`,'      "side": "Buy",',`
`,'      "time": "1769000270980"',`
`,"    ","}",`
`,"  ]",`
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},gb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("limits"),y=120,E=["limits","heartbeat","subscription-protocol","push-model","disconnect-handling"],C=D=>{const T=r.current,z=document.getElementById(D);if(!T||!z)return;const A=z.offsetTop-T.offsetTop-y;T.scrollTo({top:A,behavior:"smooth"})};return h.useEffect(()=>{if(!r.current)return;const D=new IntersectionObserver(T=>{T.forEach(z=>{z.isIntersecting&&N(z.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return E.forEach(T=>{const z=document.getElementById(T);z&&D.observe(z)}),()=>D.disconnect()},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Websocket Stream"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Connect"})]}),e.jsx("h1",{className:"api-title",children:" Connect"}),e.jsx("p",{className:"api-desc",id:"limits",children:e.jsx(Pl,{to:"/docs/websocket/public/orderbook",className:"api-desc",children:" WebSocket public stream:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Mainnet:"}),e.jsx("p",{className:"api-desc",children:"wss://socket.bitzup.com/futures/public/ws/"})]}),e.jsx("h3",{className:"top-req-text",id:"heartbeat",children:"How to Send the Heartbeat Packet"}),e.jsxs("ul",{children:[e.jsx("li",{className:"api-desc",children:"Every 5 seconds (frontend standard)"}),e.jsx("li",{className:"api-desc",children:"Maximum recommended: 20 seconds"}),e.jsx("li",{className:"api-desc",children:"F ilure to send pings may result in disconnection."})]}),e.jsx("p",{className:"api-cover",children:"Client → Server"}),e.jsx("div",{className:"api-code-box position-relative",children:e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "action": "ping"',`
`,"}"]})})}),e.jsx("p",{className:"api-cover",children:"Pong message example of public channels"}),e.jsx("div",{className:"api-code-box position-relative",children:e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "type": "pong",',`
`,' "ts": 1769075989192',`
`,"}"]})})}),e.jsx("h3",{className:"top-req-text",id:"subscription-protocol",children:"Subscription Protocol (Bitzup)"}),e.jsx("p",{className:"api-cover",children:"Subscribe"}),e.jsx("div",{className:"api-code-box position-relative",children:e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "action": "subscribe",',`
`,' "type": "orderbook | ticker | trades | kline",',`
`,' "symbol": "BTCUSDT",',`
`,' "interval": "1" // required only for kline',`
`,"}"]})})}),e.jsx("p",{className:"api-cover",children:"Unsubscribe"}),e.jsx("div",{className:"api-code-box position-relative",children:e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "action": "unsubscribe",',`
`,' "type": "orderbook",',`
`,' "symbol": "BTCUSDT",',`
`,"}"]})})}),e.jsx("p",{className:"api-cover",children:"Unsubscribe does not close the WebSocket connection."}),e.jsx("h3",{className:"top-req-text",id:"push-model",children:"BitZup Push Model"}),e.jsx("p",{className:"api-cover",children:"Push Frequency"}),e.jsxs("ul",{children:[e.jsx("li",{className:"api-desc",children:"Internal poller runs 200ms"}),e.jsx("li",{className:"api-desc",children:"Data is sent only if available"})]}),e.jsx("h5",{id:"request-params",children:"Server Behavior by Channel"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Channel"}),e.jsx("th",{children:"Behavior"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"lp"}),e.jsx("td",{children:"Sends latest mark price snapshot"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"ticker"}),e.jsx("td",{children:"Sends partial ticker snapshot"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"orderbook"}),e.jsx("td",{children:"Sends full depth snapshot (20×20)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trades"}),e.jsx("td",{children:"Streams new trades only"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"kline"}),e.jsx("td",{children:"Sends latest candle + history on subscribe"})]})]})]})}),e.jsx("h5",{children:"Trade Deduplication Guarantee"}),e.jsx("p",{className:"api-cover",children:"For trades:"}),e.jsxs("ul",{children:[e.jsx("li",{className:"api-desc",children:"BitZup tracks lastTradeId per client"}),e.jsx("li",{className:"api-desc",children:"Duplicate trades are never resent"})]}),e.jsx("h5",{children:"Kline Semantics"}),e.jsxs("ul",{children:[e.jsx("li",{className:"api-desc",children:"kline_history → sent once on subscribe"}),e.jsx("li",{className:"api-desc",children:"kline_latest → sent every second"}),e.jsx("li",{className:"api-desc",children:"confirm = false → candle still forming"}),e.jsx("li",{className:"api-desc",children:"confirm = true → candle closed"})]}),e.jsx("p",{className:"api-cover",children:"Clients must update last candle in place until confirmed."}),e.jsx("h3",{className:"top-req-text",id:"disconnect-handling",children:"Disconnect Handling"}),e.jsx("p",{className:"api-cover",children:"When a connection closes:"}),e.jsxs("ul",{children:[e.jsx("li",{className:"api-desc",children:"BitZup cleans up all subscriptions"}),e.jsx("li",{className:"api-desc",children:"Polling timer is stopped"}),e.jsx("li",{className:"api-desc",children:"Client must reconnect and re-subscribe"})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="limits"?"active":"",onClick:()=>C("limits"),children:"IP Limits"}),e.jsx("li",{className:x==="heartbeat"?"active":"",onClick:()=>C("heartbeat"),children:"How to Send the Heartbeat Packet"}),e.jsx("li",{className:x==="subscription-protocol"?"active":"",onClick:()=>C("subscription-protocol"),children:"Subscription Protocol (Bitzup)"}),e.jsx("li",{className:x==="push-model"?"active":"",onClick:()=>C("push-model"),children:"BitZup Push Model"}),e.jsx("li",{className:x==="disconnect-handling"?"active":"",onClick:()=>C("disconnect-handling"),children:"Disconnect Handling"})]})})})]})})})})},Nb=()=>{const r=h.useRef(null),[o,u]=h.useState("Node"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState(!1),[y,E]=h.useState("depths"),C=120,D=async()=>{await navigator.clipboard.writeText(le[o]),m(!0),setTimeout(()=>m(!1),1500)},T=async()=>{navigator.clipboard.writeText(te),v(!0),setTimeout(()=>v(!1),1500)},z=async()=>{navigator.clipboard.writeText(j),v(!0),setTimeout(()=>v(!1),1500)},A=async()=>{navigator.clipboard.writeText(w),N(!0),setTimeout(()=>N(!1),1500)},f=["depths","subscribe-orderbook","response-params","subscribe-example","response-example"],g=$=>{const X=r.current,ie=document.getElementById($);if(!X||!ie)return;const ze=ie.offsetTop-X.offsetTop-C;X.scrollTo({top:ze,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const $=new IntersectionObserver(X=>{X.forEach(ie=>{ie.isIntersecting&&E(ie.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return f.forEach(X=>{const ie=document.getElementById(X);ie&&$.observe(ie)}),()=>$.disconnect()},[]);const j=`{
  "action": "subscribe",
  "type": "orderbook",
  "symbol": "BTCUSDT"
}`,w=`{
  "action": "ping",
}`,te=`{
  "type": "orderbook",
  "symbol": "BTCUSDT",
  
  "data": {
    "asks": [
      ["43126.00", "0.310"],
      ["43126.50", "0.880"]
    ],
    "bids": [
      ["43125.50", "0.240"],
      ["43125.00", "1.120"]
    ]
    "ts": 1705840123456,
  }
}`,le={Python:`import websocket
import json
import threading
import time

WS_URL = "wss://socket.bitzup.com/futures/public/ws/"
SYMBOL = "BTCUSDT"

def on_open(ws):
    print("Connected")

    ws.send(json.dumps({
        "action": "subscribe",
        "type": "orderbook",
        "symbol": SYMBOL
    }))

    def ping():
        while True:
            time.sleep(5)
            ws.send(json.dumps({ "action": "ping" }))

    threading.Thread(target=ping, daemon=True).start()

def on_message(ws, message):
    msg = json.loads(message)

    if msg.get("type") == "orderbook":
        asks = msg["data"]["asks"]
        bids = msg["data"]["bids"]

        print("Top Ask:", asks[0])
        print("Top Bid:", bids[0])

def on_error(ws, error):
    print("Error:", error)

def on_close(ws):
    print("Disconnected")

ws = websocket.WebSocketApp(
    WS_URL,
    on_open=on_open,
    on_message=on_message,
    on_error=on_error,
    on_close=on_close
)

ws.run_forever()`,Go:`package main

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/gorilla/websocket"
)

func main() {
	url := "wss://socket.bitzup.com/futures/public/ws/"
	symbol := "BTCUSDT"

	conn, _, err := websocket.DefaultDialer.Dial(url, nil)
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	sub := map[string]string{
		"action": "subscribe",
		"type":   "orderbook",
		"symbol": symbol,
	}

	conn.WriteJSON(sub)

	// ping loop
	go func() {
		for {
			time.Sleep(5 * time.Second)
			conn.WriteJSON(map[string]string{"action": "ping"})
		}
	}()

	for {
		var msg map[string]interface{}
		err := conn.ReadJSON(&msg)
		if err != nil {
			panic(err)
		}

		if msg["type"] == "orderbook" {
			fmt.Println("Orderbook:", msg)
		}
	}
}`,Java:`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;
import java.util.concurrent.*;

public class BitzupOrderbook {

    public static void main(String[] args) throws Exception {
        String symbol = "BTCUSDT";

        HttpClient client = HttpClient.newHttpClient();

        WebSocket ws = client.newWebSocketBuilder()
            .buildAsync(
                URI.create("wss://socket.bitzup.com/futures/public/ws/"),
                new WebSocket.Listener() {

                    @Override
                    public void onOpen(WebSocket webSocket) {
                        System.out.println("Connected");

                        webSocket.sendText(
                            "{"action":"subscribe","type":"orderbook","symbol":"" + symbol + ""}",
                            true
                        );

                        ScheduledExecutorService scheduler =
                            Executors.newSingleThreadScheduledExecutor();

                        scheduler.scheduleAtFixedRate(() ->
                            webSocket.sendText("{"action":"ping"}", true),
                            5, 5, TimeUnit.SECONDS
                        );

                        WebSocket.Listener.super.onOpen(webSocket);
                    }

                    @Override
                    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
                        System.out.println("Message: " + data);
                        return WebSocket.Listener.super.onText(webSocket, data, last);
                    }
                }
            ).join();

        Thread.sleep(Long.MAX_VALUE);
    }
}`,Node:`const WebSocket = require("ws");

const symbol = "BTCUSDT";
const ws = new WebSocket("wss://socket.bitzup.com/futures/public/ws/");

ws.on("open", () => {
  console.log("Connected");

  ws.send(JSON.stringify({
    action: "subscribe",
    type: "orderbook",
    symbol
  }));

  // keepalive ping
  setInterval(() => {
    ws.send(JSON.stringify({ action: "ping" }));
  }, 5000);
});

ws.on("message", (data) => {
  const msg = JSON.parse(data);

  if (msg.type === "orderbook") {
    const asks = msg.data.asks;
    const bids = msg.data.bids;

    console.log("Top Ask:", asks[0]);
    console.log("Top Bid:", bids[0]);
  }
});

ws.on("close", () => console.log("Disconnected"));
ws.on("error", console.error);`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"WebSocket Stream"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"kline-market",children:"Public"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Orderbook"})]}),e.jsx("h1",{className:"api-title",children:" Orderbook"}),e.jsx("p",{className:"api-desc",children:"Subscribe to the orderbook stream. Supports different depths."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsx("h3",{className:"top-req-text",id:"depths",children:"Depths"}),e.jsxs("p",{className:"api-desc",children:["Default : Level 20 data, push frequency: ",e.jsx("b",{children:" 200ms"})]}),e.jsx("h3",{className:"top-req-text",id:"subscribe-orderbook",children:"Subscribe to Orderbook"}),e.jsx("p",{children:"Client → Server"}),e.jsx("p",{children:"Notes: "}),e.jsxs("ul",{children:[e.jsx("li",{children:"symbol, like BTCUSDT, uppercase only"}),e.jsx("li",{children:"Default depth is 20 levels per sides"}),e.jsx("li",{children:"No depth parameter is required on the client"})]}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:z,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "action": "subscribe",',`
`,' "type": "orderbook",',`
`,' "symbol": "BTCUSDT"',`
`,"}"]})})]}),e.jsx("p",{children:"Keepalive (Ping) "}),e.jsxs("ul",{children:[e.jsx("li",{children:"Clients must send a ping periodically to keep the connection alive."}),e.jsx("li",{children:"Recommended interval: every 5 seconds"})]}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:A,children:x?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "action": "ping"',`
`,"}"]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Message type"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data"}),e.jsx("td",{children:"object"}),e.jsx("td",{children:"Orderbook data"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," bids"]}),e.jsx("td",{children:"array"}),e.jsx("td",{children:"Bid, buyer. Sorted by price in descending order"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">>"," b[0]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Bid price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">>"," b[1]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Bid size"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," asks"]}),e.jsx("td",{children:"array"}),e.jsx("td",{children:"Ask, seller. Sorted by price in ascending order"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">>"," a[0]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Ask price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">>"," a[1]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Ask size"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[" ",">"," ts"]}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The timestamp (ms) that the system generates the data"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"subscribe-example",children:"Subscribe Example"}),e.jsx("div",{className:"lang-tabs",children:["Node","Python","Go","Java"].map($=>e.jsx("button",{className:o===$?"active":"",onClick:()=>u($),children:$},$))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:D,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:le[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:T,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,'  "type": "orderbook",',`
`,'  "symbol": "BTCUSDT",',`
`,'  "data": ',"{",`
`,'    "asks": [',`
`,"      [",`
`,'        "43126.00",',`
`,'        "0.310"',`
`,"      ],",`
`,"      [",`
`,'        "43126.50",',`
`,'        "0.880"',`
`,"      ]",`
`,"    ],",`
`,'    "bids": [',`
`,"      [",`
`,'        "43125.50",',`
`,'        "0.240"',`
`,"      ],",`
`,"      [",`
`,'        "43125.00",',`
`,'        "1.120"',`
`,"      ]",`
`,"    ]",`
`,'  "ts": 1705840123456,',`
`,"  ","}",`
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:y==="depths"?"active":"",onClick:()=>g("depths"),children:"Depths"}),e.jsx("li",{className:y==="subscribe-orderbook"?"active":"",onClick:()=>g("subscribe-orderbook"),children:"Subscribe to Orderbook"}),e.jsx("li",{className:y==="response-params"?"active":"",onClick:()=>g("response-params"),children:"Response Parameters"}),e.jsx("li",{className:y==="subscribe-example"?"active":"",onClick:()=>g("subscribe-example"),children:"Subscribe Example"}),e.jsx("li",{className:y==="response-example"?"active":"",onClick:()=>g("response-example"),children:"Response Example"})]})})})]})})})})},Sb=()=>{const r=h.useRef(null),[o,u]=h.useState("Node"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState(!1),[y,E]=h.useState("http"),C=120,D=async()=>{await navigator.clipboard.writeText(le[o]),m(!0),setTimeout(()=>m(!1),1500)},T=async()=>{navigator.clipboard.writeText(te),v(!0),setTimeout(()=>v(!1),1500)},z=async()=>{navigator.clipboard.writeText(j),v(!0),setTimeout(()=>v(!1),1500)},A=async()=>{navigator.clipboard.writeText(w),N(!0),setTimeout(()=>N(!1),1500)},f=["subscribe-trade","response-params","response-params","response-example"],g=$=>{const X=r.current,ie=document.getElementById($);if(!X||!ie)return;const ze=ie.offsetTop-X.offsetTop-C;X.scrollTo({top:ze,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const $=new IntersectionObserver(X=>{X.forEach(ie=>{ie.isIntersecting&&E(ie.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return f.forEach(X=>{const ie=document.getElementById(X);ie&&$.observe(ie)}),()=>$.disconnect()},[]);const j=`{
    "action": "subscribe",
    "type": "trades",
    "symbol": "BTCUSDT"
}`,w=`{
    "action": "ping",
}`,te=`{
  "type": "trade",
  "symbol": "BTCUSDT",
  "data": {
    "trade_id": "7d0da08b-9dcf-5300-9264-b7fdbf91b586",
    "price": 89657.7,
    "size": 0.002,
    "side": "Sell",
    "direction": "PlusTick",
    "ts": 1769146500397
  }
}`,le={Python:`import websocket
import json
import threading
import time

WS_URL = "wss://socket.bitzup.com/futures/public/ws/"
SYMBOL = "BTCUSDT"

def on_open(ws):
    print("Connected")

    ws.send(json.dumps({
        "action": "subscribe",
        "type": "trades",
        "symbol": SYMBOL
    }))

    def ping():
        while True:
            time.sleep(5)
            ws.send(json.dumps({"action": "ping"}))

    threading.Thread(target=ping, daemon=True).start()

def on_message(ws, message):
    msg = json.loads(message)
    if msg.get("type") == "trade":
        t = msg["data"]
        print(f"[{msg['symbol']}] {t['side']} {t['size']} @ {t['price']} ({t['trade_id']})")

def on_error(ws, error):
    print("Error:", error)

def on_close(ws):
    print("Disconnected")

ws = websocket.WebSocketApp(
    WS_URL,
    on_open=on_open,
    on_message=on_message,
    on_error=on_error,
    on_close=on_close
)

ws.run_forever()`,Go:`package main

import (
	"fmt"
	"time"

	"github.com/gorilla/websocket"
)

func main() {
	url := "wss://socket.bitzup.com/futures/public/ws/"
	symbol := "BTCUSDT"

	conn, _, err := websocket.DefaultDialer.Dial(url, nil)
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	sub := map[string]string{
		"action": "subscribe",
		"type":   "trades",
		"symbol": symbol,
	}
	conn.WriteJSON(sub)

	// keepalive ping
	go func() {
		for {
			time.Sleep(5 * time.Second)
			conn.WriteJSON(map[string]string{"action": "ping"})
		}
	}()

	for {
		var msg map[string]interface{}
		if err := conn.ReadJSON(&msg); err != nil {
			panic(err)
		}

		if msg["type"] == "trade" {
			data := msg["data"].(map[string]interface{})
			fmt.Printf("[%s] %s %v @ %v (%s)
",
				msg["symbol"],
				data["side"],
				data["size"],
				data["price"],
				data["trade_id"],
			)
		}
	}
}`,Java:`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;
import java.util.concurrent.*;

public class TradesClient {

    public static void main(String[] args) throws Exception {
        String symbol = "BTCUSDT";
        String url = "wss://socket.bitzup.com/futures/public/ws/";

        HttpClient client = HttpClient.newHttpClient();

        WebSocket ws = client.newWebSocketBuilder()
            .buildAsync(
                URI.create(url),
                new WebSocket.Listener() {

                    @Override
                    public void onOpen(WebSocket webSocket) {
                        System.out.println("Connected");

                        webSocket.sendText(
                            "{"action":"subscribe","type":"trades","symbol":"" + symbol + ""}",
                            true
                        );

                        ScheduledExecutorService scheduler =
                            Executors.newSingleThreadScheduledExecutor();

                        scheduler.scheduleAtFixedRate(() ->
                            webSocket.sendText("{"action":"ping"}", true),
                            5, 5, TimeUnit.SECONDS
                        );

                        WebSocket.Listener.super.onOpen(webSocket);
                    }

                    @Override
                    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
                        System.out.println("Message: " + data);
                        return WebSocket.Listener.super.onText(webSocket, data, last);
                    }
                }
            ).join();

        Thread.sleep(Long.MAX_VALUE);
    }
}`,Node:`const WebSocket = require("ws");

const WS_URL = "wss://socket.bitzup.com/futures/public/ws/";
const SYMBOL = "BTCUSDT";

const ws = new WebSocket(WS_URL);

ws.on("open", () => {
  console.log("Connected");

  ws.send(JSON.stringify({
    action: "subscribe",
    type: "trades",
    symbol: SYMBOL
  }));

  // keepalive ping
  setInterval(() => {
    ws.send(JSON.stringify({ action: "ping" }));
  }, 5000);
});

ws.on("message", (data) => {
  const msg = JSON.parse(data.toString());

  if (msg.type === "trade") {
    const t = msg.data;
    console.log("data",t);
  }
});

ws.on("close", () => console.log("Disconnected"));
ws.on("error", console.error);`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"WebSocket Stream"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"kline-market",children:"Public"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Trade"})]}),e.jsx("h1",{className:"api-title",children:" Trade"}),e.jsx("p",{className:"api-desc",children:"Subscribe to the recent trades stream."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsx("h3",{className:"top-req-text",id:"subscribe-trade",children:"Subscribe to Trade"}),e.jsx("p",{children:"Client → Server"}),e.jsx("p",{children:"Notes: "}),e.jsx("ul",{children:e.jsx("li",{children:"symbol, like BTCUSDT, uppercase only"})}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:z,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "action": "subscribe",',`
`,' "type": "trades",',`
`,' "symbol": "BTCUSDT"',`
`,"}"]})})]}),e.jsx("p",{children:"Keepalive (Ping) "}),e.jsxs("ul",{children:[e.jsx("li",{children:"Clients must send a ping periodically to keep the connection alive."}),e.jsx("li",{children:"Recommended interval: every 5 seconds"})]}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:A,children:x?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "action": "ping"',`
`,"}"]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Message type"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data"}),e.jsx("td",{children:"object"}),e.jsx("td",{children:"Orderbook data"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," trade_id"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade ID"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," price"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," size"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade size"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," side"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Side of taker. Buy,Sell"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(Pl,{style:{color:"#2edbad",textDecoration:"none"},to:"/docs/enums",children:[">"," direction"]})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Direction of price change"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," ts"]}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The timestamp (ms) that the order is filled"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"subscribe-example",children:"Subscribe Example"}),e.jsx("div",{className:"lang-tabs",children:["Node","Python","Go","Java"].map($=>e.jsx("button",{className:o===$?"active":"",onClick:()=>u($),children:$},$))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:D,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:le[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:T,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "type": "trade",',`
`,' "symbol": "BTCUSDT",',`
`,' "data": ',"{",`
`,' "trade_id": "7d0da08b-9dcf-5300-9264-b7fdbf91b586",',`
`,' "price": 89657.7,',`
`,' "size": 0.002,',`
`,' "side": "Sell",',`
`,' "direction": "PlusTick",',`
`,' "ts": 1769146500397',`
`," ","}",`
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:y==="subscribe-trade"?"active":"",onClick:()=>g("subscribe-trade"),children:"Subscribe to Trade"}),e.jsx("li",{className:y==="response-params"?"active":"",onClick:()=>g("response-params"),children:"Response Parameters"}),e.jsx("li",{className:y==="subscribe-example"?"active":"",onClick:()=>g("subscribe-example"),children:"Subscribe Example"}),e.jsx("li",{className:y==="response-example"?"active":"",onClick:()=>g("response-example"),children:"Response Example"})]})})})]})})})})},Tb=()=>{const r=h.useRef(null),[o,u]=h.useState("Ticker"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("Ticker"),[y,E]=h.useState("http"),C=120,D=async()=>{await navigator.clipboard.writeText(g[o]),m(!0),setTimeout(()=>m(!1),1500)},T=async()=>{navigator.clipboard.writeText(j[o]),v(!0),setTimeout(()=>v(!1),1500)},z=["response-params","subscribe-example","response-example"],A=w=>{const te=r.current,le=document.getElementById(w);if(!te||!le)return;const $=le.offsetTop-te.offsetTop-C;te.scrollTo({top:$,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const w=new IntersectionObserver(te=>{te.forEach(le=>{le.isIntersecting&&E(le.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(te=>{const le=document.getElementById(te);le&&w.observe(le)}),()=>w.disconnect()},[]);const f={Ticker:[{p:"symbol",t:"string",c:"Symbol name"},{p:"ts",t:"number",c:"Timestamp (ms)"},{p:"data",t:"object",c:"ticker data"},{p:"> lastPrice",t:"string",c:"Latest traded price"},{p:"> markPrice",t:"string",c:"Mark price"},{p:"> indexPrice",t:"string",c:"index price"},{p:"> price24hPcnt",t:"string",c:"Percentage change of market price in the last 24 hours"},{p:"> highPrice24h",t:"string",c:"The highest price in the last 24 hours"},{p:"> lowPrice24h",t:"string",c:"The lowest price in the last 24 hours"},{p:"> turnover24h",t:"string",c:"Turnover for 24h"},{p:"> volume24h",t:"string",c:"Volume for 24h"},{p:"> price24hPcnt",t:"string",c:"Percentage change of market price in the last 24 hours"},{p:"> openInterest",t:"string",c:"Open interest size"},{p:"> fundingRate",t:"string",c:"	Funding rate"},{p:"> nextFundingTime",t:"string",c:"Next funding timestamp (ms)"},{p:"> ts",t:"number",c:"The timestamp (ms) that the system generates the data"}]},g={Ticker:`const WebSocket = require("ws");

const WS_URL = "wss://socket.bitzup.com/futures/public/ws/";
const SYMBOL = "BTCUSDT";

let tickerState = {};

const ws = new WebSocket(WS_URL);

ws.on("open", () => {
  console.log("Connected");

  ws.send(JSON.stringify({
    action: "subscribe",
    type: "ticker",
    symbol: SYMBOL
  }));

  // keepalive ping
  setInterval(() => {
    ws.send(JSON.stringify({ action: "ping" }));
  }, 5000);
});

ws.on("message", (data) => {
  const msg = JSON.parse(data.toString());

  if (msg.symbol === SYMBOL && msg.data) {
    tickerState = { ...tickerState, ...msg.data };
    console.log("Ticker:", tickerState, "ts:", msg.ts);
  }
});

ws.on("close", () => console.log("Disconnected"));
ws.on("error", console.error);`},j={Ticker:`{
  "symbol": "BTCUSDT",
  "data": {
    "lastPrice": "88555.20",
    "markPrice": "88558.68",
    "indexPrice": "88555.20",
    "price24hPcnt": "1.61",
    "price24hPcnt": "-0.028377",
    "highPrice24h": "91339.00",
    "lowPrice24h": "87773.10",
    "openInterest": "51973.674",
    "fundingRate": "0.00003285",
    "nextFundingTime": "1769011200000",
    "turnover24h": "7526525461.7731",
    "volume24h": "84047.7230",
    "ts": 1769080333288
  }
}`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"WebSocket Stream"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"kline-market",children:"Public"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Ticker"})]}),e.jsx("h1",{className:"api-title",children:" Ticker"}),e.jsx("p",{className:"api-desc",children:"Subscribe to the ticker stream."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsxs("div",{className:"api-info-box",children:[e.jsxs("div",{className:"api-info-header",children:[e.jsx("span",{className:"api-info-icon",children:"!"}),e.jsx("span",{className:"api-info-title",children:"INFO"})]}),e.jsx("ul",{className:"api-info-list",children:e.jsx("li",{children:"This topic utilises the snapshot field and delta field. If a response param is not found in the message, then its value has not changed."})})]}),e.jsx("div",{className:"lang-tabs",children:["Ticker"].map(w=>e.jsx("button",{className:x===w?"active":"",onClick:()=>N(w),children:w},w))}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:f[x].map((w,te)=>e.jsxs("tr",{children:[e.jsx("td",{style:w.indent?{paddingLeft:"15px"}:{},children:w.p}),e.jsx("td",{children:w.t}),e.jsx("td",{children:w.c})]},te))})]})}),e.jsx("h3",{className:"top-req-text",id:"subscribe-example",children:"Subscribe Example"}),e.jsx("div",{className:"lang-tabs",children:["Ticker"].map(w=>e.jsx("button",{className:x===w?"active":"",onClick:()=>N(w),children:w},w))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:D,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:g[x]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsx("div",{className:"lang-tabs",children:["Ticker"].map(w=>e.jsx("button",{className:x===w?"active":"",onClick:()=>N(w),children:w},w))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:T,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,'  "symbol": "BTCUSDT",',`
`,'  "data": ',"{",`
`,'    "lastPrice": "88555.20",',`
`,'    "markPrice": "88558.68",',`
`,'    "indexPrice": "88555.20",',`
`,'    "price24hPcnt": "-0.028377",',`
`,'    "highPrice24h": "91339.00",',`
`,'    "lowPrice24h": "87773.10",',`
`,'    "openInterest": "51973.674",',`
`,'    "fundingRate": "0.00003285",',`
`,'    "nextFundingTime": "1769011200000",',`
`,'    "turnover24h": "7526525461.7731",',`
`,'    "volume24h": "84047.7230",',`
`,'    "ts": 1769080333288',`
`,"  ","}",`
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:y==="response-params"?"active":"",onClick:()=>A("response-params"),children:"Response Parameters"}),e.jsx("li",{className:y==="subscribe-example"?"active":"",onClick:()=>A("subscribe-example"),children:"Request Example"}),e.jsx("li",{className:y==="response-example"?"active":"",onClick:()=>A("response-example"),children:"Response Example"})]})})})]})})})})},Cb=()=>{const r=h.useRef(null),[o,u]=h.useState("Node"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(g[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(f),v(!0),setTimeout(()=>v(!1),1500)},D=async()=>{navigator.clipboard.writeText(A),v(!0),setTimeout(()=>v(!1),1500)},T=["subscribe-kline","response-parameters","Subscribe Example","response-example"],z=j=>{const w=r.current,te=document.getElementById(j);if(!w||!te)return;const le=te.offsetTop-w.offsetTop-y;w.scrollTo({top:le,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const j=new IntersectionObserver(w=>{w.forEach(te=>{te.isIntersecting&&N(te.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return T.forEach(w=>{const te=document.getElementById(w);te&&j.observe(te)}),()=>j.disconnect()},[]);const A=`{
    "action": "subscribe",
    "type": "orderbook",
    "symbol": "BTCUSDT",
    "interval": "1"
}`,f=`{
  "type": "kline_latest",
  "symbol": "BTCUSDT",
  "interval": "1",
  "data": {
    "symbol": "BTCUSDT",
    "interval": "1",
    "start": 1769075940000,
    "end": 1769075999999,
    "open": 89972.7,
    "high": 89979.9,
    "low": 89967.6,
    "close": 89979.9,
    "volume": 5.226,
    "turnover": 470194.0422,
    "confirm": false,
    "ts": 1769075989192
  }
}`,g={Python:`import websocket
import json
import threading
import time

WS_URL = "wss://socket.bitzup.com/futures/public/ws/"
SYMBOL = "BTCUSDT"
INTERVAL = "1"

def on_open(ws):
    print("Connected")

    ws.send(json.dumps({
        "action": "subscribe",
        "type": "kline",
        "symbol": SYMBOL,
        "interval": INTERVAL
    }))

    def ping():
        while True:
            time.sleep(5)
            ws.send(json.dumps({"action": "ping"}))

    threading.Thread(target=ping, daemon=True).start()

def on_message(ws, message):
    msg = json.loads(message)
    if msg.get("type") == "kline_latest":
        k = msg["data"]
        print(
            f"[{k['symbol']}] {k['interval']}m "
            f"O:{k['open']} H:{k['high']} L:{k['low']} "
            f"C:{k['close']} confirm={k['confirm']}"
        )

def on_error(ws, error):
    print("Error:", error)

def on_close(ws):
    print("Disconnected")

ws = websocket.WebSocketApp(
    WS_URL,
    on_open=on_open,
    on_message=on_message,
    on_error=on_error,
    on_close=on_close
)

ws.run_forever()`,Go:`package main

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/gorilla/websocket"
)

func main() {
	url := "wss://socket.bitzup.com/futures/public/ws/"
	symbol := "BTCUSDT"
	interval := "1"

	conn, _, err := websocket.DefaultDialer.Dial(url, nil)
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	// subscribe
	conn.WriteJSON(map[string]string{
		"action":   "subscribe",
		"type":     "kline",
		"symbol":   symbol,
		"interval": interval,
	})

	// keepalive ping
	go func() {
		for {
			time.Sleep(5 * time.Second)
			conn.WriteJSON(map[string]string{"action": "ping"})
		}
	}()

	for {
		var msg map[string]interface{}
		if err := conn.ReadJSON(&msg); err != nil {
			panic(err)
		}

		if msg["type"] == "kline_latest" {
			data := msg["data"].(map[string]interface{})
			fmt.Printf(
				"[%s] %sm O:%v H:%v L:%v C:%v confirm=%v
",
				data["symbol"],
				data["interval"],
				data["open"],
				data["high"],
				data["low"],
				data["close"],
				data["confirm"],
			)
		}
	}
}`,Java:`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;
import java.util.concurrent.*;

public class KlineClient {

    public static void main(String[] args) throws Exception {
        String symbol = "BTCUSDT";
        String interval = "1";
        String url = "wss://socket.bitzup.com/futures/public/ws/";

        HttpClient client = HttpClient.newHttpClient();

        client.newWebSocketBuilder()
            .buildAsync(
                URI.create(url),
                new WebSocket.Listener() {

                    @Override
                    public void onOpen(WebSocket webSocket) {
                        System.out.println("Connected");

                        webSocket.sendText(
                            "{"action":"subscribe","type":"kline","symbol":""
                                + symbol + "","interval":"" + interval + ""}",
                            true
                        );

                        ScheduledExecutorService scheduler =
                            Executors.newSingleThreadScheduledExecutor();

                        scheduler.scheduleAtFixedRate(() ->
                            webSocket.sendText("{"action":"ping"}", true),
                            5, 5, TimeUnit.SECONDS
                        );

                        WebSocket.Listener.super.onOpen(webSocket);
                    }

                    @Override
                    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
                        System.out.println("Message: " + data);
                        return WebSocket.Listener.super.onText(webSocket, data, last);
                    }
                }
            ).join();

        Thread.sleep(Long.MAX_VALUE);
    }
}`,Node:`const WebSocket = require("ws");

const WS_URL = "wss://socket.bitzup.com/futures/public/ws/";
const SYMBOL = "BTCUSDT";
const INTERVAL = "1";

const ws = new WebSocket(WS_URL);

ws.on("open", () => {
  console.log("Connected");

  ws.send(JSON.stringify({
    action: "subscribe",
    type: "kline",
    symbol: SYMBOL,
    interval: INTERVAL
  }));

  // keepalive ping
  setInterval(() => {
    ws.send(JSON.stringify({ action: "ping" }));
  }, 5000);
});

ws.on("message", (raw) => {
  const msg = JSON.parse(raw.toString());

  if (msg.type === "kline_latest") {
    const k = msg.data;
    console.log("kline data",k);
  }
});

ws.on("close", () => console.log("Disconnected`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"WebSocket Stream"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"kline-market",children:"Public"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Kline"})]}),e.jsx("h1",{className:"api-title",children:" Kline"}),e.jsx("p",{className:"api-desc",children:"Subscribe to the klines stream."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsxs("div",{className:"api-info-box",children:[e.jsxs("div",{className:"api-info-header",children:[e.jsx("span",{className:"api-info-icon",children:"!"}),e.jsx("span",{className:"api-info-title",children:"INFO"})]}),e.jsx("ul",{className:"api-info-list",children:e.jsx("li",{children:"If confirm=true, this means that the candle has closed. Otherwise, the candle is still open and updating."})})]}),e.jsx("h3",{children:"Available intervals:"}),e.jsxs("ul",{children:[e.jsxs("li",{style:{marginBottom:"8px"},children:[e.jsx("span",{className:"pill",children:"1"})," ",e.jsx("span",{className:"pill",children:" 3"})," ",e.jsx("span",{className:"pill",children:" 5"}),"  ",e.jsx("span",{className:"pill",children:" 15"})," ",e.jsx("span",{className:"pill",children:" 30 "})," (min)"]}),e.jsxs("li",{style:{marginBottom:"8px"},children:[e.jsx("span",{className:"pill",children:"60"})," ",e.jsx("span",{className:"pill",children:" 120"})," ",e.jsx("span",{className:"pill",children:" 240"}),"  ",e.jsx("span",{className:"pill",children:" 360"})," ",e.jsx("span",{className:"pill",children:" 720 "})," (min)"]}),e.jsxs("li",{style:{marginBottom:"8px"},children:[e.jsx("span",{className:"pill",children:" D "})," (day)"]}),e.jsxs("li",{style:{marginBottom:"8px"},children:[e.jsx("span",{className:"pill",children:"W "})," (week)"]}),e.jsxs("li",{style:{marginBottom:"8px"},children:[e.jsx("span",{className:"pill",children:" M "})," (month)"]})]}),e.jsx("h3",{className:"top-req-text",id:"subscribe-kline",children:"Subscribe to Kline"}),e.jsx("p",{children:"Client → Server"}),e.jsx("p",{children:"Notes: "}),e.jsx("ul",{children:e.jsx("li",{children:"symbol, like BTCUSDT, uppercase only"})}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:D,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "action": "subscribe",',`
`,' "type": "kline",',`
`,' "symbol":"BTCUSDT",',`
`,' "interval": "1"',`
`,"}"]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-parameters",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Message type"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"interval"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Kline interval"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data"}),e.jsx("td",{children:"array"}),e.jsx("td",{children:"Object"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," start"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Start time of the candle (ms)"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," open"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Open price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," high"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Highest price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," low"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Lowest price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," close"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Close price. Is the last traded price when the candle is not closed"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," volume"]}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Trade volume",e.jsx("ul",{children:e.jsx("li",{children:"USDT contract: unit is base coin (e.g., BTC)"})})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," turnover"]}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Turnover",e.jsx("ul",{children:e.jsx("li",{children:"USDT contract: unit is quote coin (e.g., USDT)"})})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," confirm"]}),e.jsx("td",{children:"	boolean"}),e.jsx("td",{children:"Whether the tick is ended or not"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," ts"]}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The timestamp (ms) of the last matched order in the candle"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"Subscribe Example",children:"Subscribe Example"}),e.jsx("div",{className:"lang-tabs",children:["Node","Python","Go","Java"].map(j=>e.jsx("button",{className:o===j?"active":"",onClick:()=>u(j),children:j},j))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:g[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,'   "type": "kline_latest",',`
`,'   "symbol": "BTCUSDT",',`
`,'   "interval": "1",',`
`,'   "data": ',"{",`
`,'   "symbol": "BTCUSDT",',`
`,'   "interval": "1",',`
`,'   "start": 1769075940000,',`
`,'   "end": 1769075999999,',`
`,'   "open": 89972.7,',`
`,'   "high": 89979.9,',`
`,'   "low": 89967.6,',`
`,'   "close": 89979.9,',`
`,'   "volume": 5.226,',`
`,'   "turnover": 470194.0422,',`
`,'   "confirm": false,',`
`,'   "ts": 1769075989192',`
`,"  ","}",`
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="subscribe-kline"?"active":"",onClick:()=>z("subscribe-kline"),children:"Subscribe to Kline"}),e.jsx("li",{className:x==="response-parameters"?"active":"",onClick:()=>z("response-parameters"),children:"Subscribe Example"}),e.jsx("li",{className:x==="Subscribe Example"?"active":"",onClick:()=>z("Subscribe Example"),children:"Subscribe Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>z("response-example"),children:"Response Example"})]})})})]})})})})},qb=()=>{const r=h.useRef(null),[o,u]=h.useState(!1),[d,m]=h.useState("http"),b=120,v=["http","websocket-limit","api-rate-limit"],x=N=>{const y=r.current,E=document.getElementById(N);if(!y||!E)return;const C=E.offsetTop-y.offsetTop-b;y.scrollTo({top:C,behavior:"smooth"})};return h.useEffect(()=>{if(!r.current)return;const N=new IntersectionObserver(y=>{y.forEach(E=>{E.isIntersecting&&m(E.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return v.forEach(y=>{const E=document.getElementById(y);E&&N.observe(E)}),()=>N.disconnect()},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Market"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Rate Limit Rules"})]}),e.jsx("h1",{className:"api-title",children:"Rate Limit Rules"}),e.jsx("div",{className:"api-cover",children:"IP Limit"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP IP Limit"}),e.jsxs("p",{children:["You are allowed to send 500 requests within a 5-second window per IP by default. This limit applies to all traffic directed to"," ",e.jsx("span",{className:"pill",children:" api.bitzup.com"}),'.  If you encounter the error "429, Too many requests", it indicates that your IP has exceeded the allowed request frequency. In this case, you should terminate all HTTP sessions and wait for at least 10 minutes. The ban will be lifted automatically.']}),e.jsx("p",{children:"We do not recommend running your application at the very edge of these limits in case abnormal network activity results in an unexpected violation."}),e.jsx("h3",{className:"top-req-text",id:"websocket-limit",children:"Websocket IP limit"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Do not establish more than 400 connections within a 5-minute window. This limit applies to all connections directed to"," ",e.jsx("span",{className:"pill",children:" socket.bitzup.com"})]}),e.jsx("li",{children:"Do not frequently connect and disconnect the connection"}),e.jsx("li",{children:"Do not establish more than 1,000 connections per IP for market data."})]}),e.jsx("h3",{className:"top-req-text",id:"api-rate-limit",children:"API Rate Limit"}),e.jsxs("div",{className:"api-info-box",children:[e.jsxs("div",{className:"api-info-header",children:[e.jsx("div",{class:"caution-icon",children:"⚠"}),e.jsx("span",{className:"api-info-title",children:"caution"})]}),e.jsx("p",{children:'If you receive "Too many requests" in the JSON response, you have hit the API rate limit.'})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:d==="http"?"active":"",onClick:()=>x("http"),children:"HTTP Ip Limit"}),e.jsx("li",{className:d==="websocket-limit"?"active":"",onClick:()=>x("websocket-limit"),children:"Websocket IP limit"}),e.jsx("li",{className:d==="api-rate-limit"?"active":"",onClick:()=>x("api-rate-limit"),children:"API Rate Limit"})]})})})]})})})})},Rb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "status": "1",
   "message": "SUCCESS",
  "data": [
    {
      "symbol": "BTCUSDT",
      "base_coin": "BTC",
      "quote_coin": "USDT",
      "icon": "https://api.bitzup.com/futures/icons/btc.png",
      "last_price": "89545.50000000",
      "volume_24h": "51974.06100000",
      "turnover_24h": "4647757231.36940000",
      "change_24h": "-0.5000",
      "max_leverage": "100.00",
      "price_decimal": 1,
      "qty_decimal": 3,
      "qty_step": null,
      "minOrderQty": "0.001000",
      "maxOrderQty": "1190.00000000",
      "maxMktOrderQty": "500.00000000"
    }
  ]
}`,A={HTTP:`GET /v1/market-info HTTP/1.1
Host: https://api.bitzup.com/futures/api`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/market-info"



try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    print(response.json())
except requests.exceptions.HTTPError:
    print("API Error:", response.text)
except requests.exceptions.RequestException as e:
    print("Network Error:", str(e))`,Go:`package main

import (
    "fmt"
    "io"
    "net/http"
    "net/url"
    "time"
)

func main() {
    baseURL := "https://api.bitzup.com/futures/api/v1/market-info"

   

    reqURL := baseURL

    client := &http.Client{
        Timeout: 10 * time.Second,
    }

    req, err := http.NewRequest("GET", reqURL, nil)
    if err != nil {
        panic(err)
    }

    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    body, _ := io.ReadAll(resp.Body)

    if resp.StatusCode != http.StatusOK {
        fmt.Println("API Error:", string(body))
        return
    }

    fmt.Println(string(body))
}`,Java:`import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;

public class OrderBookExample {

    public static void main(String[] args) throws Exception {
        String baseUrl = "https://api.bitzup.com/futures/api/v1/market-info";

      

        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl))
            .timeout(Duration.ofSeconds(10))
            .GET()
            .build();

        HttpResponse<String> response =
            client.send(request, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() != 200) {
            System.out.println("API Error: " + response.body());
            return;
        }

        System.out.println(response.body());
    }

    private static String encode(String value) {
        return URLEncoder.encode(value, StandardCharsets.UTF_8);
    }
}`,Node:`const axios = require("axios");

async function marketInfo() {
  try {
    const response = await axios.get(
      "https://api.bitzup.com/futures/api/v1/market-info",
      {
       
        timeout: 10000,
      }
    );

    console.log(response.data);
  } catch (err) {
    if (err.response) {
      console.error("API Error:", err.response.data);
    } else {
      console.error("Network Error:", err.message);
    }
  }
}

marketInfo();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Market"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Market Info"})]}),e.jsx("h1",{className:"api-title",children:" Get Market Info"}),e.jsx("p",{className:"api-desc",children:"Returns the list of available trading pairs with pricing, volume, leverage, and trading limits."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method",children:"GET"}),e.jsx("span",{className:"path",children:"/v1/market-info"})]}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"base_coin"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:" Base asset"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"quote_coin"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:" Quote asset"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"icon "}),e.jsx("td",{children:"string (URL)"}),e.jsx("td",{children:"Asset icon"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"last_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Latest traded price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"volume_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"24-hour trading volume"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade time (ms)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"turnover_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"24-hour turnover"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"change_24h "}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"24-hour price change (%)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"max_leverage"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:" Maximum allowed leverage"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"price_decimal"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Price precision "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty_decimal"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Quantity precision "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty_step"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Quantity step size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"minOrderQty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Minimum order quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"maxOrderQty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Maximum order quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"maxMktOrderQty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Maximum market order quantity"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "status": "1",',`
`,' "message": "SUCCESS",',`
`,' "data": [',`
`," ","{",`
`,' "symbol": "BTCUSDT",',`
`,' "base_coin": "BTC",',`
`,' "quote_coin": "USDT",',`
`,' "icon": "https://api.bitzup.com/futures/icons/btc.png",',`
`,' "last_price": "89545.50000000",',`
`,' "volume_24h": "51974.06100000",',`
`,' "turnover_24h": "4647757231.36940000",',`
`,' "change_24h": "-0.5000",',`
`,' "max_leverage": "100.00",',`
`,' "price_decimal": 1,',`
`,' "qty_decimal": 3,',`
`,' "qty_step": null,',`
`,' "minOrderQty": "0.001000",',`
`,' "maxOrderQty": "1190.00000000",',`
`,' "maxMktOrderQty": "500.00000000"',`
`," ","}",`
`," ]",`
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Eb=()=>{const r=h.useRef(null),[o,u]=h.useState("direction"),d=120,m=["direction","interval","intervalTime"],b=v=>{const x=r.current,N=document.getElementById(v);if(!x||!N)return;const y=N.offsetTop-x.offsetTop-d;x.scrollTo({top:y,behavior:"smooth"})};return h.useEffect(()=>{if(!r.current)return;const v=new IntersectionObserver(x=>{x.forEach(N=>{N.isIntersecting&&u(N.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return m.forEach(x=>{const N=document.getElementById(x);N&&v.observe(N)}),()=>v.disconnect()},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsx("div",{className:"breadcrumb mb-4",children:e.jsx("span",{className:"pill",children:"Enums Definitions"})}),e.jsx("h1",{className:"api-title",children:"Enums Definitions"}),e.jsx("h3",{className:"top-req-text",id:"direction",children:"Direction"}),e.jsxs("ul",{children:[e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"PlusTick "})," price rise"]}),e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"ZeroPlusTick "})," trade occurs at the same price as the previous trade, which occurred at a price higher than that for the trade preceding it"]}),e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"MinusTick "})," price drop"]}),e.jsxs("li",{style:{marginBottom:"30px"},children:[e.jsx("span",{className:"pill",children:"ZeroMinusTick "})," trade occurs at the same price as the previous trade, which occurred at a price lower than that for the trade preceding it"]})]}),e.jsx("h3",{className:"top-req-text",id:"interval",children:"interval"}),e.jsxs("ul",{children:[e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"1"})," ",e.jsx("span",{className:"pill",children:"3"})," ",e.jsx("span",{className:"pill",children:"5"})," ",e.jsx("span",{className:"pill",children:"15"})," ",e.jsx("span",{className:"pill",children:"30"})," ",e.jsx("span",{className:"pill",children:"60"})," ",e.jsx("span",{className:"pill",children:"120"})," ",e.jsx("span",{className:"pill",children:"240"})," ",e.jsx("span",{className:"pill",children:"360"})," ",e.jsx("span",{className:"pill",children:"720"})," minute"]}),e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"D "})," day"]}),e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"W "})," week"]}),e.jsxs("li",{style:{marginBottom:"30px"},children:[e.jsx("span",{className:"pill",children:"M "})," month"]})]}),e.jsx("h3",{className:"top-req-text",id:"intervalTime",children:"intervalTime"}),e.jsxs("ul",{children:[e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"5min"})," ",e.jsx("span",{className:"pill",children:"15min"})," ",e.jsx("span",{className:"pill",children:"30min"})," minute"]}),e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"1h "})," ",e.jsx("span",{className:"pill",children:"4h "})," hour"]}),e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"1d "})," day"]})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:o==="direction"?"active":"",onClick:()=>b("direction"),children:"Direction"}),e.jsx("li",{className:o==="interval"?"active":"",onClick:()=>b("interval"),children:"interval"}),e.jsx("li",{className:o==="intervalTime"?"active":"",onClick:()=>b("intervalTime"),children:"intervalTime"})]})})})]})})})})},_b=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "data": [
    {
      "symbol": "BTCUSDT",
      "price_decimal": 1,
      "qty_decimal": 3,
      "leverage": "10",
      "side": "Buy",
      "qty": "0.05",
      "position_value": "4633.215",
      "entry_price": "92664.30",
      "mark_price": "92750.10",
      "liquidation_price": "85120.50",
      "initial_margin": "463.3215",
      "position_margin": "467.50",
      "unrealised_Pnl": "4.29",
      "unrealised_Pnl_pc": "0.926",
      "take_profit": "95000",
      "stop_loss": "90000",
      "trailing_stop": "0",
      "activation_price": "92664.30",
      "auto_margin": 0
    }
  ]
}`,A={HTTP:`POST /futures/api/v1/get-positions HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "quote_coin": "USDT"
}`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/get-positions"

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your_token>"
}

payload = {
    "quote_coin": "USDT"
}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    data = resp.json()
    print(data)
except requests.exceptions.HTTPError as e:
    print("API error:", resp.text)
except requests.exceptions.RequestException as e:
    print("Network error:", str(e))`,Go:`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/get-positions"

	body, _ := json.Marshal(map[string]string{
		"quote_coin": "USDT",
	})

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class GetPositionsExample {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/futures/api/v1/get-positions";

        String json = """
            {
              "quote_coin": "USDT"
            }
            """;

        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();

        HttpResponse<String> response =
            client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");

async function getPositions() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/get-positions",
      {
        quote_coin: "USDT",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer <your_token>",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("Network Error:", error.message);
    }
  }
}

getPositions();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Positions"})]}),e.jsx("h1",{className:"api-title",children:"Get Positions"}),e.jsx("p",{className:"api-desc",children:"Query real-time position data, such as position size, leverage, entry price, mark price, liquidation price, unrealised PnL, and more."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-positions"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"quote_coin"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Settlement coin, e.g. ",e.jsx("span",{className:"pill",children:"USDT"})]})]})})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"price_decimal"}),e.jsx("td",{children:"integer"}),e.jsx("td",{children:"Price precision"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty_decimal"}),e.jsx("td",{children:"integer"}),e.jsx("td",{children:"Quantity precision"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"leverage"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Current leverage"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"side"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Buy"})," or ",e.jsx("span",{className:"pill",children:"Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Position size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"position_value"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Position value in USDT"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"entry_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Average entry price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"mark_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Current mark price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"liquidation_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Estimated liquidation price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"initial_margin"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Initial margin"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"position_margin"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Position margin balance"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"unrealised_Pnl"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Unrealised profit and loss"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"unrealised_Pnl_pc"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Unrealised PnL percentage"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"take_profit"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Take profit price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop_loss"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Stop loss price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trailing_stop"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trailing stop value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"activation_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trailing stop activation price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"auto_margin"}),e.jsx("td",{children:"integer"}),e.jsxs("td",{children:["Auto add margin: ",e.jsx("span",{className:"pill",children:"0"})," off, ",e.jsx("span",{className:"pill",children:"1"})," on"]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},kb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "data": [
    {
      "order_id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
      "symbol": "BTCUSDT",
      "order_type": "Limit",
      "client_order_id": "my_custom_id_001",
      "side": "Buy",
      "order_price": "90000",
      "qty": "0.05",
      "filled_qty": "0",
      "stop_order_type": "",
      "order_value": "4500",
      "order_status": "New",
      "tpsl_mode": "Full",
      "take_profit": "95000",
      "stop_loss": "88000",
      "time": "1706169600000",
      "reduce_only": false,
      "trade_type": "Open Long",
      "price_decimal": 1,
      "qty_decimal": 3,
      "leverage": 10
    }
  ]
}`,A={HTTP:`POST /futures/api/v1/get-open-orders HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "quote_coin": "USDT",
  "order_type": "order"
}`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/get-open-orders"

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your_token>"
}

payload = {
    "quote_coin": "USDT",
    "order_type": "order"
}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    data = resp.json()
    print(data)
except requests.exceptions.HTTPError as e:
    print("API error:", resp.text)
except requests.exceptions.RequestException as e:
    print("Network error:", str(e))`,Go:`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/get-open-orders"

	body, _ := json.Marshal(map[string]string{
		"quote_coin": "USDT",
		"order_type": "order",
	})

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class GetOpenOrdersExample {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/futures/api/v1/get-open-orders";

        String json = """
            {
              "quote_coin": "USDT",
              "order_type": "order"
            }
            """;

        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();

        HttpResponse<String> response =
            client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");

async function getOpenOrders() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/get-open-orders",
      {
        quote_coin: "USDT",
        order_type: "order",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer <your_token>",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("Network Error:", error.message);
    }
  }
}

getOpenOrders();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Open Orders"})]}),e.jsx("h1",{className:"api-title",children:"Get Open Orders"}),e.jsxs("p",{className:"api-desc",children:["Query unfilled or partially filled orders in real-time. Supports querying limit orders, TP/SL orders, and trailing stop orders by specifying the ",e.jsx("code",{children:"order_type"})," parameter."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-open-orders"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"order_type"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"order"})," ",e.jsx("span",{className:"pill",children:"tpslOrder"})," ",e.jsx("span",{className:"pill",children:"trailingStop"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"conditional"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"}),". Either ",e.jsx("code",{children:"symbol"})," or ",e.jsx("code",{children:"quote_coin"})," is required"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"quote_coin"}),e.jsx("td",{children:"conditional"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Settlement coin, e.g. ",e.jsx("span",{className:"pill",children:"USDT"}),". Either ",e.jsx("code",{children:"symbol"})," or ",e.jsx("code",{children:"quote_coin"})," is required"]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsxs("p",{className:"api-desc",style:{fontSize:"14px",marginBottom:"8px"},children:["Response fields vary by ",e.jsx("code",{children:"order_type"}),". Below shows the response for ",e.jsx("code",{children:'order_type: "order"'}),":"]}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_type"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"})," or ",e.jsx("span",{className:"pill",children:"Market"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"client_order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-set order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"side"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Buy"})," or ",e.jsx("span",{className:"pill",children:"Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Cumulative filled quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop_order_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Stop order type"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_value"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order value in USDT"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_status"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order status (New, PartiallyFilled, etc.)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tpsl_mode"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Full"})," or ",e.jsx("span",{className:"pill",children:"Partial"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"take_profit"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Take profit price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop_loss"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Stop loss price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Created timestamp (ms)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reduce_only"}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"Whether reduce only"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trade_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Open Long, Close Long, Open Short, Close Short"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"price_decimal"}),e.jsx("td",{children:"integer"}),e.jsx("td",{children:"Price precision"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty_decimal"}),e.jsx("td",{children:"integer"}),e.jsx("td",{children:"Quantity precision"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"leverage"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Current leverage for the symbol"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Bb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "data": [
    {
      "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "symbol": "BTCUSDT",
      "order_type": "Limit",
      "client_order_id": "",
      "avg_price": "92750.30",
      "stop_order_type": "",
      "order_status": "Filled",
      "filled_qty": "0.05",
      "qty": "0.05",
      "filled_value": "4637.515",
      "order_value": 4633.215,
      "side": "Buy",
      "fee": "1.85",
      "time": "1706169600000",
      "reduce_only": false,
      "order_price": "92664.30",
      "trigger_price": "",
      "trade_type": "Open Long"
    }
  ]
}`,A={HTTP:`POST /futures/api/v1/get-order-history HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "quote_coin": "USDT",
  "order_type": "Order",
  "limit": 20
}`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/get-order-history"

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your_token>"
}

payload = {
    "quote_coin": "USDT",
    "order_type": "Order",
    "limit": 20
}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    data = resp.json()
    print(data)
except requests.exceptions.HTTPError as e:
    print("API error:", resp.text)
except requests.exceptions.RequestException as e:
    print("Network error:", str(e))`,Go:`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/get-order-history"

	body, _ := json.Marshal(map[string]interface{}{
		"quote_coin": "USDT",
		"order_type": "Order",
		"limit":      20,
	})

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class GetOrderHistoryExample {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/futures/api/v1/get-order-history";

        String json = """
            {
              "quote_coin": "USDT",
              "order_type": "Order",
              "limit": 20
            }
            """;

        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();

        HttpResponse<String> response =
            client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");

async function getOrderHistory() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/get-order-history",
      {
        quote_coin: "USDT",
        order_type: "Order",
        limit: 20,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer <your_token>",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("Network Error:", error.message);
    }
  }
}

getOrderHistory();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Order History"})]}),e.jsx("h1",{className:"api-title",children:"Get Order History"}),e.jsxs("p",{className:"api-desc",children:["Query order history. Returns data for the last 7 days by default. You can filter by ",e.jsx("code",{children:"order_type"})," to separate regular orders and stop orders. The maximum time range between ",e.jsx("code",{children:"start_time"})," and ",e.jsx("code",{children:"end_time"})," is 7 days."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-order-history"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"order_type"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Order"})," or ",e.jsx("span",{className:"pill",children:"StopOrder"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"conditional"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"}),". Either ",e.jsx("code",{children:"symbol"})," or ",e.jsx("code",{children:"quote_coin"})," is required"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"quote_coin"}),e.jsx("td",{children:"conditional"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Settlement coin, e.g. ",e.jsx("span",{className:"pill",children:"USDT"}),". Either ",e.jsx("code",{children:"symbol"})," or ",e.jsx("code",{children:"quote_coin"})," is required"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"limit"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Number of results to return"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"start_time"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Start timestamp in milliseconds"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"end_time"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"End timestamp in milliseconds"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_type"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"})," or ",e.jsx("span",{className:"pill",children:"Market"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"client_order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-set order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"avg_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Average filled price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop_order_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Stop order type"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_status"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order status (Filled, Cancelled, etc.)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Cumulative filled quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_value"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Cumulative filled value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_value"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Order value (price × qty)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"side"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Buy"})," or ",e.jsx("span",{className:"pill",children:"Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"fee"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Cumulative trading fee"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Created timestamp (ms)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reduce_only"}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"Whether reduce only"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trigger_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trigger price (for stop orders)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trade_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Open Long, Close Long, Open Short, Close Short"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Hb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "data": [
    {
      "symbol": "BTCUSDT",
      "order_type": "Limit",
      "client_order_id": "",
      "side": "Buy",
      "trade_type": "Open Long",
      "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "tx_id": "exec-001-xyz",
      "filled_value": "4637.515",
      "filled_price": "92750.30",
      "filled_qty": "0.05",
      "filled_type": "Trade",
      "fee": "1.85",
      "fee_rate": 0.04,
      "order_price": "92664.30",
      "order_qty": "0.05",
      "time": "1706169600000"
    }
  ]
}`,A={HTTP:`POST /futures/api/v1/get-trade-history HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "symbol": "BTCUSDT",
  "limit": 20
}`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/get-trade-history"

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your_token>"
}

payload = {
    "symbol": "BTCUSDT",
    "limit": 20
}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    data = resp.json()
    print(data)
except requests.exceptions.HTTPError as e:
    print("API error:", resp.text)
except requests.exceptions.RequestException as e:
    print("Network error:", str(e))`,Go:`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/get-trade-history"

	body, _ := json.Marshal(map[string]interface{}{
		"symbol":  "BTCUSDT",
		"limit":   20,
	})

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class GetTradeHistoryExample {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/futures/api/v1/get-trade-history";

        String json = """
            {
              "symbol": "BTCUSDT",
              "limit": 20
            }
            """;

        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();

        HttpResponse<String> response =
            client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");

async function getTradeHistory() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/get-trade-history",
      {
        symbol: "BTCUSDT",
        limit: 20,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer <your_token>",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("Network Error:", error.message);
    }
  }
}

getTradeHistory();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Trade History"})]}),e.jsx("h1",{className:"api-title",children:"Get Trade History"}),e.jsxs("p",{className:"api-desc",children:["Query users' execution records sorted by execution time in descending order. Returns data for the last 7 days by default. The maximum time range between"," ",e.jsx("code",{children:"start_time"})," and ",e.jsx("code",{children:"end_time"})," is 7 days."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-trade-history"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"limit"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Number of results to return"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"start_time"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Start timestamp in milliseconds"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"end_time"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"End timestamp in milliseconds"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_type"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"})," or ",e.jsx("span",{className:"pill",children:"Market"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"client_order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-set order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"side"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Buy"})," or ",e.jsx("span",{className:"pill",children:"Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trade_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Open Long, Close Long, Open Short, Close Short"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tx_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Execution ID (unique per fill)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_value"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Execution value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Execution price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Execution quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Execution type (Trade, Funding, etc.)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"fee"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trading fee for this execution"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"fee_rate"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Fee rate in percentage"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Original order price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Original order quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Execution timestamp (ms)"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Ab=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "data": [
    {
      "symbol": "BTCUSDT",
      "order_type": "Market",
      "side": "Sell",
      "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "closed_pnl": "12.50",
      "open_fee": "1.85",
      "close_fee": "1.86",
      "entry_price": "92664.30",
      "qty": "0.05",
      "exit_price": "92914.30",
      "filled_type": "Trade",
      "trade_type": "Close Long",
      "time": "1706256000000"
    }
  ]
}`,A={HTTP:`POST /futures/api/v1/get-closed-pnl HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "symbol": "BTCUSDT",
  "limit": 20
}`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/get-closed-pnl"

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your_token>"
}

payload = {
    "symbol": "BTCUSDT",
    "limit": 20
}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    data = resp.json()
    print(data)
except requests.exceptions.HTTPError as e:
    print("API error:", resp.text)
except requests.exceptions.RequestException as e:
    print("Network error:", str(e))`,Go:`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/get-closed-pnl"

	body, _ := json.Marshal(map[string]interface{}{
		"symbol":  "BTCUSDT",
		"limit":   20,
	})

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class GetClosedPnlExample {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/futures/api/v1/get-closed-pnl";

        String json = """
            {
              "symbol": "BTCUSDT",
              "limit": 20
            }
            """;

        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();

        HttpResponse<String> response =
            client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");

async function getClosedPnl() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/get-closed-pnl",
      {
        symbol: "BTCUSDT",
        limit: 20,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer <your_token>",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("Network Error:", error.message);
    }
  }
}

getClosedPnl();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Closed PnL"})]}),e.jsx("h1",{className:"api-title",children:"Get Closed PnL"}),e.jsxs("p",{className:"api-desc",children:["Query user's closed profit and loss records. Results are sorted by created time in descending order. Returns data for the last 7 days by default. The maximum time range between ",e.jsx("code",{children:"start_time"})," and ",e.jsx("code",{children:"end_time"})," is 7 days."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-closed-pnl"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"limit"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Number of results to return"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"start_time"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Start timestamp in milliseconds"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"end_time"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"End timestamp in milliseconds"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_type"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"})," or ",e.jsx("span",{className:"pill",children:"Market"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"side"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Buy"})," or ",e.jsx("span",{className:"pill",children:"Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"closed_pnl"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Closed profit and loss amount"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"open_fee"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Opening fee"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"close_fee"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Closing fee"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"entry_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Average entry price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Closed quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"exit_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Average exit price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade, BustTrade, SessionSettlePnL, Settle"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trade_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Close Long or Close Short"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Created timestamp (ms)"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Ob=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "data": {
    "totalUsdBalance": "10250.50",
    "coins": [
      {
        "coin": "USDT",
        "walletBalance": 10000,
        "availableBalance": 5500.25
      },
      {
        "coin": "USDC",
        "walletBalance": 250.50,
        "availableBalance": 250.50
      }
    ],
    "totalMarginBalance": "10250.50",
    "totalAvailableBalance": "5750.75",
    "totalWalletBalance": "10250.50"
  }
}`,A={HTTP:`POST /futures/api/v1/get-balance HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "coin": "USDT"
}`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/get-balance"

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your_token>"
}

payload = {
    "coin": "USDT"
}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    data = resp.json()
    print(data)
except requests.exceptions.HTTPError as e:
    print("API error:", resp.text)
except requests.exceptions.RequestException as e:
    print("Network error:", str(e))`,Go:`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/get-balance"

	body, _ := json.Marshal(map[string]string{
		"coin":    "USDT",
	})

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class GetWalletBalanceExample {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/futures/api/v1/get-balance";

        String json = """
            {
              "coin": "USDT"
            }
            """;

        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();

        HttpResponse<String> response =
            client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");

async function getWalletBalance() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/get-balance",
      {
        coin: "USDT",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer <your_token>",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("Network Error:", error.message);
    }
  }
}

getWalletBalance();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Wallet Balance"})]}),e.jsx("h1",{className:"api-title",children:"Get Wallet Balance"}),e.jsxs("p",{className:"api-desc",children:["Obtain wallet balance and query asset information of each currency. Pass"," ",e.jsx("code",{children:'"ALL"'})," as the ",e.jsx("code",{children:"coin"})," parameter to get all coin balances, or specify a specific coin like ",e.jsx("code",{children:'"USDT"'}),"."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-balance"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"coin"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Coin name, e.g. ",e.jsx("span",{className:"pill",children:"USDT"}),","," ",e.jsx("span",{className:"pill",children:"USDC"}),", or"," ",e.jsx("span",{className:"pill",children:"ALL"})," for all coins"]})]})})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"totalUsdBalance"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Total equity in USD"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"totalMarginBalance"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Total margin balance"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"totalAvailableBalance"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Total available balance"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"totalWalletBalance"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Total wallet balance"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"coins"}),e.jsx("td",{children:"array"}),e.jsx("td",{children:"Array of coin balance objects"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," coins.coin"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Coin name"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," coins.walletBalance"]}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Wallet balance for the coin"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(J,{})," coins.availableBalance"]}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Available balance (wallet - positionIM - orderIM)"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},zb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "data": {
    "leverage": 10
  }
}`,A={HTTP:`POST /futures/api/v1/get-leverage HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "symbol": "BTCUSDT"
}`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/get-leverage"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/get-leverage"
	body, _ := json.Marshal(map[string]string{
		"symbol":  "BTCUSDT",
	})
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI;
import java.net.http.*;
import java.time.Duration;

public class GetLeverageExample {
    public static void main(String[] args) throws Exception {
        String json = """
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/get-leverage"))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");

async function getLeverage() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/get-leverage",
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}
getLeverage();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Leverage"})]}),e.jsx("h1",{className:"api-title",children:"Get Leverage"}),e.jsx("p",{className:"api-desc",children:"Query the current leverage setting for a specific symbol."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-leverage"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]})})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"leverage"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Current leverage for the symbol"})]})})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Db=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "message": "Margin mode fetched successfully.",
  "data": "REGULAR_MARGIN"
}`,A={HTTP:`POST /futures/api/v1/get-margin-mode HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/get-margin-mode"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}

try:
    resp = requests.post(url, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main

import (
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/get-margin-mode"
	req, _ := http.NewRequest("POST", url, nil)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI;
import java.net.http.*;
import java.time.Duration;

public class GetMarginModeExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/get-margin-mode"))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.noBody()).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");

async function getMarginMode() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/get-margin-mode",
      {},
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}
getMarginMode();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Margin Mode"})]}),e.jsx("h1",{className:"api-title",children:"Get Margin Mode"}),e.jsxs("p",{className:"api-desc",children:["Query the current margin mode for the account. Returns either"," ",e.jsx("code",{children:"REGULAR_MARGIN"})," (cross margin) or ",e.jsx("code",{children:"ISOLATED_MARGIN"}),"."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-margin-mode"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("p",{className:"api-desc",style:{fontSize:"14px"},children:"No body parameters required. The user is identified via the JWT Bearer token."}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Status message"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"REGULAR_MARGIN"})," or ",e.jsx("span",{className:"pill",children:"ISOLATED_MARGIN"})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},wb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "message": "New leverage set successfully."
}`,A={HTTP:`POST /futures/api/v1/set-leverage HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "symbol": "BTCUSDT",
  "leverage": "10"
}`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/set-leverage"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {
    "symbol": "BTCUSDT",
    "leverage": "10"
}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/set-leverage"
	body, _ := json.Marshal(map[string]string{
		"symbol":   "BTCUSDT",
		"leverage": "10",
	})
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI;
import java.net.http.*;
import java.time.Duration;

public class SetLeverageExample {
    public static void main(String[] args) throws Exception {
        String json = """
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/set-leverage"))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");

async function setLeverage() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/set-leverage",
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}
setLeverage();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Set Leverage"})]}),e.jsx("h1",{className:"api-title",children:"Set Leverage"}),e.jsx("p",{className:"api-desc",children:"Set the leverage for a specific symbol. In cross margin mode, buy and sell leverage are set to the same value. In isolated margin mode, they can differ."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/set-leverage"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"leverage"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Leverage value, e.g. ",e.jsx("span",{className:"pill",children:'"10"'})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success, ",e.jsx("span",{className:"pill",children:'"0"'})," for failure"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Result message"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Ub=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "message": "your request has been accepted"
}`,A={HTTP:`POST /futures/api/v1/switch-margin-mode HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "margin_mode": "ISOLATED_MARGIN"
}`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/switch-margin-mode"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {
    "margin_mode": "ISOLATED_MARGIN"
}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/switch-margin-mode"
	body, _ := json.Marshal(map[string]string{
		"margin_mode": "ISOLATED_MARGIN",
	})
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI;
import java.net.http.*;
import java.time.Duration;

public class SwitchMarginModeExample {
    public static void main(String[] args) throws Exception {
        String json = """
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/switch-margin-mode"))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");

async function switchMarginMode() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/switch-margin-mode",
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}
switchMarginMode();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Switch Margin Mode"})]}),e.jsx("h1",{className:"api-title",children:"Switch Margin Mode"}),e.jsx("p",{className:"api-desc",children:"Switch between regular (cross) margin and isolated margin mode for your account. This affects all positions under your account."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/switch-margin-mode"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"margin_mode"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"REGULAR_MARGIN"})," or ",e.jsx("span",{className:"pill",children:"ISOLATED_MARGIN"})]})]})})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success, ",e.jsx("span",{className:"pill",children:'"0"'})," for failure"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Result message"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Mb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "message": "your request has been accepted"
}`,A={HTTP:`POST /futures/api/v1/add-isolated-margin HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "symbol": "BTCUSDT",
  "margin": 50.5
}`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/add-isolated-margin"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {
    "symbol": "BTCUSDT",
    "margin": 50.5
}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/add-isolated-margin"
	body, _ := json.Marshal(map[string]interface{}{
		"symbol":  "BTCUSDT",
		"margin":  50.5,
	})
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI;
import java.net.http.*;
import java.time.Duration;

public class AddIsolatedMarginExample {
    public static void main(String[] args) throws Exception {
        String json = """
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/add-isolated-margin"))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");

async function addIsolatedMargin() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/add-isolated-margin",
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}
addIsolatedMargin();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Add Isolated Margin"})]}),e.jsx("h1",{className:"api-title",children:"Add Isolated Margin"}),e.jsx("p",{className:"api-desc",children:"Manually add or reduce margin to an isolated margin position. Use a positive value to add margin and a negative value to reduce margin."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/add-isolated-margin"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"margin"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Margin amount. Positive to add, negative to reduce. Up to 4 decimal places."})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success, ",e.jsx("span",{className:"pill",children:'"0"'})," for failure"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Result message"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Lb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "message": "your request has been accepted"
}`,A={HTTP:`POST /futures/api/v1/auto-isolated-margin HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "symbol": "BTCUSDT",
  "auto_margin": 1
}`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/auto-isolated-margin"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {
    "symbol": "BTCUSDT",
    "auto_margin": 1
}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/auto-isolated-margin"
	body, _ := json.Marshal(map[string]interface{}{
		"symbol":      "BTCUSDT",
		"auto_margin": 1,
	})
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI;
import java.net.http.*;
import java.time.Duration;

public class AutoIsolatedMarginExample {
    public static void main(String[] args) throws Exception {
        String json = """
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/auto-isolated-margin"))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");

async function autoIsolatedMargin() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/auto-isolated-margin",
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}
autoIsolatedMargin();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Auto Isolated Margin"})]}),e.jsx("h1",{className:"api-title",children:"Auto Isolated Margin"}),e.jsx("p",{className:"api-desc",children:"Turn on or off the auto-add-margin feature for isolated margin positions. When enabled, the system automatically adds margin from your available balance to prevent liquidation."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/auto-isolated-margin"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"auto_margin"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"0"})," to turn off, ",e.jsx("span",{className:"pill",children:"1"})," to turn on"]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success, ",e.jsx("span",{className:"pill",children:'"0"'})," for failure"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Result message"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Gb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "data": {}
}`,A={HTTP:`POST /futures/api/v1/set-trading-stop HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "symbol": "BTCUSDT",
  "tp_sl_mode": "Full",
  "take_profit": 95000,
  "tp_trigger_by": "LastPrice",
  "stop_loss": 88000,
  "sl_trigger_by": "LastPrice"
}`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/set-trading-stop"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {
    "symbol": "BTCUSDT",
    "tp_sl_mode": "Full",
    "take_profit": 95000,
    "tp_trigger_by": "LastPrice",
    "stop_loss": 88000,
    "sl_trigger_by": "LastPrice"
}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/set-trading-stop"
	body, _ := json.Marshal(map[string]interface{}{
		"symbol":        "BTCUSDT",
		"tp_sl_mode":    "Full",
		"take_profit":   95000,
		"tp_trigger_by": "LastPrice",
		"stop_loss":     88000,
		"sl_trigger_by": "LastPrice",
	})
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI;
import java.net.http.*;
import java.time.Duration;

public class SetTradingStopExample {
    public static void main(String[] args) throws Exception {
        String json = """
            {
              "symbol": "BTCUSDT",
              "tp_sl_mode": "Full",
              "take_profit": 95000,
              "tp_trigger_by": "LastPrice",
              "stop_loss": 88000,
              "sl_trigger_by": "LastPrice"
            }
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/set-trading-stop"))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");

async function setTradingStop() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/set-trading-stop",
      {
        symbol: "BTCUSDT",
        tp_sl_mode: "Full",
        take_profit: 95000,
        tp_trigger_by: "LastPrice",
        stop_loss: 88000,
        sl_trigger_by: "LastPrice",
      },
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}
setTradingStop();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Set Trading Stop"})]}),e.jsx("h1",{className:"api-title",children:"Set Trading Stop"}),e.jsxs("p",{className:"api-desc",children:["Set take profit, stop loss, or trailing stop for an existing position. Supports both ",e.jsx("code",{children:"Full"})," (entire position) and ",e.jsx("code",{children:"Partial"})," (partial quantity) TP/SL modes. You can also configure trailing stop with activation price."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/set-trading-stop"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tp_sl_mode"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Full"})," or ",e.jsx("span",{className:"pill",children:"Partial"}),". Used for TP/SL. Omit when setting trailing stop only."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"take_profit"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["Take profit price. Set to ",e.jsx("span",{className:"pill",children:"0"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tp_trigger_by"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"LastPrice"}),", ",e.jsx("span",{className:"pill",children:"MarkPrice"}),", or ",e.jsx("span",{className:"pill",children:"IndexPrice"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop_loss"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["Stop loss price. Set to ",e.jsx("span",{className:"pill",children:"0"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sl_trigger_by"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"LastPrice"}),", ",e.jsx("span",{className:"pill",children:"MarkPrice"}),", or ",e.jsx("span",{className:"pill",children:"IndexPrice"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty"}),e.jsx("td",{children:"conditional"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["Required when ",e.jsx("code",{children:"tp_sl_mode"})," is ",e.jsx("span",{className:"pill",children:"Partial"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tp_order_type"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"}),". Only for Partial mode."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sl_order_type"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"}),". Only for Partial mode."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tp_limit_price"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"TP limit price. Only for Partial mode with Limit order type."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sl_limit_price"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"SL limit price. Only for Partial mode with Limit order type."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trailing_stop"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["Trailing stop distance. Set to ",e.jsx("span",{className:"pill",children:"0"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"active_price"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Activation price for trailing stop."})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success, ",e.jsx("span",{className:"pill",children:'"0"'})," for failure"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data"}),e.jsx("td",{children:"object"}),e.jsx("td",{children:"Result data (empty object on success)"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Pb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "data": {
    "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "client_order_id": "my_custom_id_001"
  }
}`,A={HTTP:`POST /futures/api/v1/place-order HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "symbol": "BTCUSDT",
  "side": "Buy",
  "type": "Limit",
  "qty": 0.05,
  "price": 90000,
  "time_in_force": "GTC",
  "take_profit": 95000,
  "stop_loss": 88000
}`,Python:`import requests

url = "https://api.bitzup.com/futures/api/v1/place-order"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {
    "symbol": "BTCUSDT",
    "side": "Buy",
    "type": "Limit",
    "qty": 0.05,
    "price": 90000,
    "time_in_force": "GTC",
    "take_profit": 95000,
    "stop_loss": 88000
}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/place-order"
	body, _ := json.Marshal(map[string]interface{}{
		"symbol": "BTCUSDT",
		"side":   "Buy",
		"type":   "Limit",
		"qty":    0.05,
		"price":  90000,
		"time_in_force": "GTC",
		"take_profit":   95000,
		"stop_loss":     88000,
	})
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI;
import java.net.http.*;
import java.time.Duration;

public class PlaceOrderExample {
    public static void main(String[] args) throws Exception {
        String json = """
            {
              "symbol": "BTCUSDT",
              "side": "Buy",
              "type": "Limit",
              "qty": 0.05,
              "price": 90000,
              "time_in_force": "GTC",
              "take_profit": 95000,
              "stop_loss": 88000
            }
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/place-order"))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");

async function placeOrder() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/place-order",
      {
        symbol: "BTCUSDT",
        side: "Buy",
        type: "Limit",
        qty: 0.05,
        price: 90000,
        time_in_force: "GTC",
        take_profit: 95000,
        stop_loss: 88000,
      },
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}
placeOrder();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Place Order"})]}),e.jsx("h1",{className:"api-title",children:"Place Order"}),e.jsxs("p",{className:"api-desc",children:["Create a new futures order. Supports ",e.jsx("code",{children:"Limit"})," and ",e.jsx("code",{children:"Market"})," order types. You can optionally set take profit, stop loss, and time in force parameters."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/place-order"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"side"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Buy"})," or ",e.jsx("span",{className:"pill",children:"Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"type"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"})," or ",e.jsx("span",{className:"pill",children:"Market"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"qty"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Order quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"price"}),e.jsx("td",{children:"conditional"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["Order price. Required for ",e.jsx("span",{className:"pill",children:"Limit"})," orders."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"client_order_id"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-defined order ID for tracking"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reduce_only"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"If true, the order will only reduce the position"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"take_profit"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Take profit price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop_loss"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Stop loss price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time_in_force"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"GTC"}),", ",e.jsx("span",{className:"pill",children:"IOC"}),", ",e.jsx("span",{className:"pill",children:"FOK"}),", ",e.jsx("span",{className:"pill",children:"PostOnly"})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"System-generated order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"client_order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-defined order ID"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Yb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "message": {
    "orderId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "orderLinkId": ""
  }
}`,A={HTTP:`POST /futures/api/v1/cancel-order HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "symbol": "BTCUSDT",
  "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}`,Python:`import requests
url = "https://api.bitzup.com/futures/api/v1/cancel-order"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {"symbol": "BTCUSDT", "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"}
try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main
import ("bytes"; "encoding/json"; "fmt"; "io"; "net/http"; "time")
func main() {
	url := "https://api.bitzup.com/futures/api/v1/cancel-order"
	body, _ := json.Marshal(map[string]string{"symbol": "BTCUSDT", "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"})
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI; import java.net.http.*; import java.time.Duration;
public class CancelOrderExample {
    public static void main(String[] args) throws Exception {
        String json = """
            {"symbol": "BTCUSDT", "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"}
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/cancel-order"))
            .header("Content-Type", "application/json").header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");
async function cancelOrder() {
  try {
    const response = await axios.post("https://api.bitzup.com/futures/api/v1/cancel-order",
      { symbol: "BTCUSDT", order_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890" },
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
cancelOrder();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Cancel Order"})]}),e.jsx("h1",{className:"api-title",children:"Cancel Order"}),e.jsx("p",{className:"api-desc",children:"Cancel an existing unfilled or partially filled order by its order ID."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/cancel-order"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"order_id"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"The order ID to cancel"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"object"}),e.jsx("td",{children:"Contains orderId and orderLinkId of cancelled order"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Qb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "message": {
    "list": [],
    "success": "1"
  }
}`,A={HTTP:`POST /futures/api/v1/cancel-all-order HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "quote_coin": "USDT",
  "order_type": "Limit"
}`,Python:`import requests
url = "https://api.bitzup.com/futures/api/v1/cancel-all-order"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {"quote_coin": "USDT", "order_type": "Limit"}
try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main
import ("bytes"; "encoding/json"; "fmt"; "io"; "net/http"; "time")
func main() {
	url := "https://api.bitzup.com/futures/api/v1/cancel-all-order"
	body, _ := json.Marshal(map[string]string{"quote_coin": "USDT", "order_type": "Limit"})
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI; import java.net.http.*; import java.time.Duration;
public class CancelAllOrdersExample {
    public static void main(String[] args) throws Exception {
        String json = """
            {"quote_coin": "USDT", "order_type": "Limit"}
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/cancel-all-order"))
            .header("Content-Type", "application/json").header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");
async function cancelAllOrders() {
  try {
    const response = await axios.post("https://api.bitzup.com/futures/api/v1/cancel-all-order",
      { quote_coin: "USDT", order_type: "Limit" },
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
cancelAllOrders();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Cancel All Orders"})]}),e.jsx("h1",{className:"api-title",children:"Cancel All Orders"}),e.jsxs("p",{className:"api-desc",children:["Cancel all open orders for a given settlement coin. You can filter by order type: ",e.jsx("code",{children:"Limit"}),", ",e.jsx("code",{children:"tpslOrder"}),", or ",e.jsx("code",{children:"trailingStop"}),"."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/cancel-all-order"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"quote_coin"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Settlement coin, e.g. ",e.jsx("span",{className:"pill",children:"USDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"order_type"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"}),", ",e.jsx("span",{className:"pill",children:"tpslOrder"}),", or ",e.jsx("span",{className:"pill",children:"trailingStop"})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"object"}),e.jsx("td",{children:"Contains list of cancelled orders and success status"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Xb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "data": {
    "orderId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "orderLinkId": "my_custom_id_001"
  }
}`,A={HTTP:`POST /futures/api/v1/modify-order HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "symbol": "BTCUSDT",
  "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "price": 91000,
  "qty": 0.06,
  "take_profit": 96000,
  "stop_loss": 87000
}`,Python:`import requests
url = "https://api.bitzup.com/futures/api/v1/modify-order"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {
    "symbol": "BTCUSDT",
    "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "price": 91000,
    "qty": 0.06,
    "take_profit": 96000,
    "stop_loss": 87000
}
try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main
import ("bytes"; "encoding/json"; "fmt"; "io"; "net/http"; "time")
func main() {
	url := "https://api.bitzup.com/futures/api/v1/modify-order"
	body, _ := json.Marshal(map[string]interface{}{
		"symbol": "BTCUSDT", "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
		"price": 91000, "qty": 0.06, "take_profit": 96000, "stop_loss": 87000,
	})
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI; import java.net.http.*; import java.time.Duration;
public class ModifyOrderExample {
    public static void main(String[] args) throws Exception {
        String json = """
            {
              "symbol": "BTCUSDT",
              "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
              "price": 91000, "qty": 0.06,
              "take_profit": 96000, "stop_loss": 87000
            }
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/modify-order"))
            .header("Content-Type", "application/json").header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");
async function modifyOrder() {
  try {
    const response = await axios.post("https://api.bitzup.com/futures/api/v1/modify-order",
      {
        symbol: "BTCUSDT", order_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        price: 91000, qty: 0.06, take_profit: 96000, stop_loss: 87000,
      },
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
modifyOrder();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Modify Order"})]}),e.jsx("h1",{className:"api-title",children:"Modify Order"}),e.jsx("p",{className:"api-desc",children:"Modify an existing unfilled or partially filled order. You can update the price, quantity, take profit, stop loss, and trigger parameters."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/modify-order"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"order_id"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"The order ID to modify"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"price"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"New order price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"New order quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"client_order_id"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-defined order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"take_profit"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["New take profit price. Set to ",e.jsx("span",{className:"pill",children:"0"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tp_trigger_by"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"LastPrice"}),", ",e.jsx("span",{className:"pill",children:"MarkPrice"}),", or ",e.jsx("span",{className:"pill",children:"IndexPrice"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop_loss"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["New stop loss price. Set to ",e.jsx("span",{className:"pill",children:"0"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sl_trigger_by"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"LastPrice"}),", ",e.jsx("span",{className:"pill",children:"MarkPrice"}),", or ",e.jsx("span",{className:"pill",children:"IndexPrice"})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"orderId"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Modified order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"orderLinkId"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-defined order ID"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Zb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "data": {
    "orderId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "orderLinkId": ""
  }
}`,A={HTTP:`POST /futures/api/v1/close-position HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "symbol": "BTCUSDT",
  "side": "Sell",
  "type": "Market",
  "qty": 0.05
}`,Python:`import requests
url = "https://api.bitzup.com/futures/api/v1/close-position"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {"symbol": "BTCUSDT", "side": "Sell", "type": "Market", "qty": 0.05}
try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main
import ("bytes"; "encoding/json"; "fmt"; "io"; "net/http"; "time")
func main() {
	url := "https://api.bitzup.com/futures/api/v1/close-position"
	body, _ := json.Marshal(map[string]interface{}{
		"symbol": "BTCUSDT", "side": "Sell", "type": "Market", "qty": 0.05,
	})
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI; import java.net.http.*; import java.time.Duration;
public class ClosePositionExample {
    public static void main(String[] args) throws Exception {
        String json = """
            {"symbol": "BTCUSDT", "side": "Sell", "type": "Market", "qty": 0.05}
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/close-position"))
            .header("Content-Type", "application/json").header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");
async function closePosition() {
  try {
    const response = await axios.post("https://api.bitzup.com/futures/api/v1/close-position",
      { symbol: "BTCUSDT", side: "Sell", type: "Market", qty: 0.05 },
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
closePosition();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Close Position"})]}),e.jsx("h1",{className:"api-title",children:"Close Position"}),e.jsxs("p",{className:"api-desc",children:["Close an existing position by placing a reduce-only order on the opposite side. The ",e.jsx("code",{children:"side"})," must be the opposite of the current position side (e.g. ",e.jsx("code",{children:"Sell"})," to close a long position)."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/close-position"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"side"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Opposite side of position. ",e.jsx("span",{className:"pill",children:"Buy"})," or ",e.jsx("span",{className:"pill",children:"Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"type"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"})," or ",e.jsx("span",{className:"pill",children:"Market"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"qty"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Quantity to close"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"price"}),e.jsx("td",{children:"conditional"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["Required for ",e.jsx("span",{className:"pill",children:"Limit"})," orders"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time_in_force"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"GTC"}),", ",e.jsx("span",{className:"pill",children:"IOC"}),", ",e.jsx("span",{className:"pill",children:"FOK"}),", ",e.jsx("span",{className:"pill",children:"PostOnly"})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"orderId"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Close order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"orderLinkId"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-defined order ID"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})},Jb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,m]=h.useState(!1),[b,v]=h.useState(!1),[x,N]=h.useState("http"),y=120,E=async()=>{await navigator.clipboard.writeText(A[o]),m(!0),setTimeout(()=>m(!1),1500)},C=async()=>{navigator.clipboard.writeText(z),v(!0),setTimeout(()=>v(!1),1500)},D=["http","request-params","response-params","request-example","response-example"],T=f=>{const g=r.current,j=document.getElementById(f);if(!g||!j)return;const w=j.offsetTop-g.offsetTop-y;g.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const f=new IntersectionObserver(g=>{g.forEach(j=>{j.isIntersecting&&N(j.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return D.forEach(g=>{const j=document.getElementById(g);j&&f.observe(j)}),()=>f.disconnect()},[]);const z=`{
  "success": "1",
  "data": {
    "liquidation_price": 85120.47
  }
}`,A={HTTP:`POST /futures/api/v1/estimate-liquidation-price HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "symbol": "BTCUSDT",
  "side": "Buy",
  "price": 92000,
  "qty": 0.05,
  "leverage": 10
}`,Python:`import requests
url = "https://api.bitzup.com/futures/api/v1/estimate-liquidation-price"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {"symbol": "BTCUSDT", "side": "Buy", "price": 92000, "qty": 0.05, "leverage": 10}
try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main
import ("bytes"; "encoding/json"; "fmt"; "io"; "net/http"; "time")
func main() {
	url := "https://api.bitzup.com/futures/api/v1/estimate-liquidation-price"
	body, _ := json.Marshal(map[string]interface{}{
		"symbol": "BTCUSDT", "side": "Buy", "price": 92000, "qty": 0.05, "leverage": 10,
	})
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI; import java.net.http.*; import java.time.Duration;
public class EstimateLiquidationPriceExample {
    public static void main(String[] args) throws Exception {
        String json = """
            {"symbol": "BTCUSDT", "side": "Buy", "price": 92000, "qty": 0.05, "leverage": 10}
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/estimate-liquidation-price"))
            .header("Content-Type", "application/json").header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");
async function estimateLiquidationPrice() {
  try {
    const response = await axios.post("https://api.bitzup.com/futures/api/v1/estimate-liquidation-price",
      { symbol: "BTCUSDT", side: "Buy", price: 92000, qty: 0.05, leverage: 10 },
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
estimateLiquidationPrice();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(J,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Estimate Liquidation Price"})]}),e.jsx("h1",{className:"api-title",children:"Estimate Liquidation Price"}),e.jsx("p",{className:"api-desc",children:"Estimate the liquidation price for a position before opening it. Useful for risk management calculations. The calculation uses the maintenance margin rate (MMR) for the given position value."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/estimate-liquidation-price"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"side"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Buy"})," (long) or ",e.jsx("span",{className:"pill",children:"Sell"})," (short)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"price"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Entry price"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"qty"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Position quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"leverage"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Leverage value"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"liquidation_price"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Estimated liquidation price"})]})})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(f=>e.jsx("button",{className:o===f?"active":"",onClick:()=>u(f),children:f},f))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:E,children:d?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:A[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:C,children:b?e.jsx(V,{}):e.jsx(K,{})}),e.jsx("pre",{children:e.jsx("code",{children:z})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:x==="http"?"active":"",onClick:()=>T("http"),children:"HTTP Request"}),e.jsx("li",{className:x==="request-params"?"active":"",onClick:()=>T("request-params"),children:"Request Parameters"}),e.jsx("li",{className:x==="response-params"?"active":"",onClick:()=>T("response-params"),children:"Response Parameters"}),e.jsx("li",{className:x==="request-example"?"active":"",onClick:()=>T("request-example"),children:"Request Example"}),e.jsx("li",{className:x==="response-example"?"active":"",onClick:()=>T("response-example"),children:"Response Example"})]})})})]})})})})};function Vb(){const[r,o]=h.useState(localStorage.getItem("theme")||"dark");return h.useEffect(()=>{document.documentElement.setAttribute("data-theme",r),localStorage.setItem("theme",r)},[r]),e.jsxs(e.Fragment,{children:[e.jsx(pb,{theme:r,setTheme:o}),e.jsxs("div",{className:"d-flex",children:[e.jsx(fb,{}),e.jsx("div",{className:"flex-grow-1 page-content",children:e.jsxs(Nj,{children:[e.jsx(xe,{path:"/",element:e.jsx(xb,{})}),e.jsx(xe,{path:"docs/market/kline",element:e.jsx(jb,{})}),e.jsx(xe,{path:"docs/market/orderbook",element:e.jsx(bb,{})}),e.jsx(xe,{path:"docs/market/tickers",element:e.jsx(vb,{})}),e.jsx(xe,{path:"docs/market/recent-public-trades",element:e.jsx(yb,{})}),e.jsx(xe,{path:"docs/market/market-info",element:e.jsx(Rb,{})}),e.jsx(xe,{path:"docs/ws/connect",element:e.jsx(gb,{})}),e.jsx(xe,{path:"docs/websocket/public/orderbook",element:e.jsx(Nb,{})}),e.jsx(xe,{path:"docs/websocket/public/trade",element:e.jsx(Sb,{})}),e.jsx(xe,{path:"docs/websocket/public/ticker",element:e.jsx(Tb,{})}),e.jsx(xe,{path:"docs/websocket/public/kline",element:e.jsx(Cb,{})}),e.jsx(xe,{path:"docs/rate-limit/rate-limit-rules",element:e.jsx(qb,{})}),e.jsx(xe,{path:"docs/Enums",element:e.jsx(Eb,{})}),e.jsx(xe,{path:"docs/private/get-positions",element:e.jsx(_b,{})}),e.jsx(xe,{path:"docs/private/get-open-orders",element:e.jsx(kb,{})}),e.jsx(xe,{path:"docs/private/get-order-history",element:e.jsx(Bb,{})}),e.jsx(xe,{path:"docs/private/get-trade-history",element:e.jsx(Hb,{})}),e.jsx(xe,{path:"docs/private/get-closed-pnl",element:e.jsx(Ab,{})}),e.jsx(xe,{path:"docs/private/get-wallet-balance",element:e.jsx(Ob,{})}),e.jsx(xe,{path:"docs/private/get-leverage",element:e.jsx(zb,{})}),e.jsx(xe,{path:"docs/private/get-margin-mode",element:e.jsx(Db,{})}),e.jsx(xe,{path:"docs/private/set-leverage",element:e.jsx(wb,{})}),e.jsx(xe,{path:"docs/private/switch-margin-mode",element:e.jsx(Ub,{})}),e.jsx(xe,{path:"docs/private/add-isolated-margin",element:e.jsx(Mb,{})}),e.jsx(xe,{path:"docs/private/auto-isolated-margin",element:e.jsx(Lb,{})}),e.jsx(xe,{path:"docs/private/set-trading-stop",element:e.jsx(Gb,{})}),e.jsx(xe,{path:"docs/private/place-order",element:e.jsx(Pb,{})}),e.jsx(xe,{path:"docs/private/cancel-order",element:e.jsx(Yb,{})}),e.jsx(xe,{path:"docs/private/cancel-all-orders",element:e.jsx(Qb,{})}),e.jsx(xe,{path:"docs/private/modify-order",element:e.jsx(Xb,{})}),e.jsx(xe,{path:"docs/private/close-position",element:e.jsx(Zb,{})}),e.jsx(xe,{path:"docs/private/estimate-liquidation-price",element:e.jsx(Jb,{})})]})})]})]})}const Kb=new URLSearchParams(window.location.search),yh=Kb.get("redirect");yh&&window.history.replaceState(null,"","/bitzup-exchange"+yh);Tx.createRoot(document.getElementById("root")).render(e.jsx(Zj,{basename:"/bitzup-exchange",children:e.jsx(Vb,{})}));
