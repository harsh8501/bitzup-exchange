(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))d(j);new MutationObserver(j=>{for(const b of j)if(b.type==="childList")for(const y of b.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&d(y)}).observe(document,{childList:!0,subtree:!0});function u(j){const b={};return j.integrity&&(b.integrity=j.integrity),j.referrerPolicy&&(b.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?b.credentials="include":j.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function d(j){if(j.ep)return;j.ep=!0;const b=u(j);fetch(j.href,b)}})();function gh(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Oc={exports:{}},zl={};var $p;function mf(){if($p)return zl;$p=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(d,j,b){var y=null;if(b!==void 0&&(y=""+b),j.key!==void 0&&(y=""+j.key),"key"in j){b={};for(var f in j)f!=="key"&&(b[f]=j[f])}else b=j;return j=b.ref,{$$typeof:r,type:d,key:y,ref:j!==void 0?j:null,props:b}}return zl.Fragment=o,zl.jsx=u,zl.jsxs=u,zl}var eh;function xf(){return eh||(eh=1,Oc.exports=mf()),Oc.exports}var e=xf(),zc={exports:{}},ne={};var th;function ff(){if(th)return ne;th=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),y=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),z=Symbol.iterator;function S(E){return E===null||typeof E!="object"?null:(E=z&&E[z]||E["@@iterator"],typeof E=="function"?E:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,m={};function v(E,G,Q){this.props=E,this.context=G,this.refs=m,this.updater=Q||O}v.prototype.isReactComponent={},v.prototype.setState=function(E,G){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,G,"setState")},v.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function x(){}x.prototype=v.prototype;function w(E,G,Q){this.props=E,this.context=G,this.refs=m,this.updater=Q||O}var se=w.prototype=new x;se.constructor=w,H(se,v.prototype),se.isPureReactComponent=!0;var le=Array.isArray;function $(){}var X={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function ze(E,G,Q){var I=Q.ref;return{$$typeof:r,type:E,key:G,ref:I!==void 0?I:null,props:Q}}function bt(E,G){return ze(E.type,G,E.props)}function zt(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function et(E){var G={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Q){return G[Q]})}var zs=/\/+/g;function Pt(E,G){return typeof E=="object"&&E!==null&&E.key!=null?et(""+E.key):G.toString(36)}function kt(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then($,$):(E.status="pending",E.then(function(G){E.status==="pending"&&(E.status="fulfilled",E.value=G)},function(G){E.status==="pending"&&(E.status="rejected",E.reason=G)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function M(E,G,Q,I,re){var de=typeof E;(de==="undefined"||de==="boolean")&&(E=null);var ye=!1;if(E===null)ye=!0;else switch(de){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(E.$$typeof){case r:case o:ye=!0;break;case R:return ye=E._init,M(ye(E._payload),G,Q,I,re)}}if(ye)return re=re(E),ye=I===""?"."+Pt(E,0):I,le(re)?(Q="",ye!=null&&(Q=ye.replace(zs,"$&/")+"/"),M(re,G,Q,"",function(Ga){return Ga})):re!=null&&(zt(re)&&(re=bt(re,Q+(re.key==null||E&&E.key===re.key?"":(""+re.key).replace(zs,"$&/")+"/")+ye)),G.push(re)),1;ye=0;var Fe=I===""?".":I+":";if(le(E))for(var we=0;we<E.length;we++)I=E[we],de=Fe+Pt(I,we),ye+=M(I,G,Q,de,re);else if(we=S(E),typeof we=="function")for(E=we.call(E),we=0;!(I=E.next()).done;)I=I.value,de=Fe+Pt(I,we++),ye+=M(I,G,Q,de,re);else if(de==="object"){if(typeof E.then=="function")return M(kt(E),G,Q,I,re);throw G=String(E),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return ye}function Y(E,G,Q){if(E==null)return E;var I=[],re=0;return M(E,I,"","",function(de){return G.call(Q,de,re++)}),I}function ae(E){if(E._status===-1){var G=E._result;G=G(),G.then(function(Q){(E._status===0||E._status===-1)&&(E._status=1,E._result=Q)},function(Q){(E._status===0||E._status===-1)&&(E._status=2,E._result=Q)}),E._status===-1&&(E._status=0,E._result=G)}if(E._status===1)return E._result.default;throw E._result}var Se=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},Re={map:Y,forEach:function(E,G,Q){Y(E,function(){G.apply(this,arguments)},Q)},count:function(E){var G=0;return Y(E,function(){G++}),G},toArray:function(E){return Y(E,function(G){return G})||[]},only:function(E){if(!zt(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ne.Activity=q,ne.Children=Re,ne.Component=v,ne.Fragment=u,ne.Profiler=j,ne.PureComponent=w,ne.StrictMode=d,ne.Suspense=N,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ne.__COMPILER_RUNTIME={__proto__:null,c:function(E){return X.H.useMemoCache(E)}},ne.cache=function(E){return function(){return E.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(E,G,Q){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var I=H({},E.props),re=E.key;if(G!=null)for(de in G.key!==void 0&&(re=""+G.key),G)!ie.call(G,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&G.ref===void 0||(I[de]=G[de]);var de=arguments.length-2;if(de===1)I.children=Q;else if(1<de){for(var ye=Array(de),Fe=0;Fe<de;Fe++)ye[Fe]=arguments[Fe+2];I.children=ye}return ze(E.type,re,I)},ne.createContext=function(E){return E={$$typeof:y,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:b,_context:E},E},ne.createElement=function(E,G,Q){var I,re={},de=null;if(G!=null)for(I in G.key!==void 0&&(de=""+G.key),G)ie.call(G,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(re[I]=G[I]);var ye=arguments.length-2;if(ye===1)re.children=Q;else if(1<ye){for(var Fe=Array(ye),we=0;we<ye;we++)Fe[we]=arguments[we+2];re.children=Fe}if(E&&E.defaultProps)for(I in ye=E.defaultProps,ye)re[I]===void 0&&(re[I]=ye[I]);return ze(E,de,re)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(E){return{$$typeof:f,render:E}},ne.isValidElement=zt,ne.lazy=function(E){return{$$typeof:R,_payload:{_status:-1,_result:E},_init:ae}},ne.memo=function(E,G){return{$$typeof:g,type:E,compare:G===void 0?null:G}},ne.startTransition=function(E){var G=X.T,Q={};X.T=Q;try{var I=E(),re=X.S;re!==null&&re(Q,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then($,Se)}catch(de){Se(de)}finally{G!==null&&Q.types!==null&&(G.types=Q.types),X.T=G}},ne.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ne.use=function(E){return X.H.use(E)},ne.useActionState=function(E,G,Q){return X.H.useActionState(E,G,Q)},ne.useCallback=function(E,G){return X.H.useCallback(E,G)},ne.useContext=function(E){return X.H.useContext(E)},ne.useDebugValue=function(){},ne.useDeferredValue=function(E,G){return X.H.useDeferredValue(E,G)},ne.useEffect=function(E,G){return X.H.useEffect(E,G)},ne.useEffectEvent=function(E){return X.H.useEffectEvent(E)},ne.useId=function(){return X.H.useId()},ne.useImperativeHandle=function(E,G,Q){return X.H.useImperativeHandle(E,G,Q)},ne.useInsertionEffect=function(E,G){return X.H.useInsertionEffect(E,G)},ne.useLayoutEffect=function(E,G){return X.H.useLayoutEffect(E,G)},ne.useMemo=function(E,G){return X.H.useMemo(E,G)},ne.useOptimistic=function(E,G){return X.H.useOptimistic(E,G)},ne.useReducer=function(E,G,Q){return X.H.useReducer(E,G,Q)},ne.useRef=function(E){return X.H.useRef(E)},ne.useState=function(E){return X.H.useState(E)},ne.useSyncExternalStore=function(E,G,Q){return X.H.useSyncExternalStore(E,G,Q)},ne.useTransition=function(){return X.H.useTransition()},ne.version="19.2.3",ne}var sh;function Xc(){return sh||(sh=1,zc.exports=ff()),zc.exports}var h=Xc();const ta=gh(h);var wc={exports:{}},wl={},Dc={exports:{}},Uc={};var ah;function jf(){return ah||(ah=1,(function(r){function o(M,Y){var ae=M.length;M.push(Y);e:for(;0<ae;){var Se=ae-1>>>1,Re=M[Se];if(0<j(Re,Y))M[Se]=Y,M[ae]=Re,ae=Se;else break e}}function u(M){return M.length===0?null:M[0]}function d(M){if(M.length===0)return null;var Y=M[0],ae=M.pop();if(ae!==Y){M[0]=ae;e:for(var Se=0,Re=M.length,E=Re>>>1;Se<E;){var G=2*(Se+1)-1,Q=M[G],I=G+1,re=M[I];if(0>j(Q,ae))I<Re&&0>j(re,Q)?(M[Se]=re,M[I]=ae,Se=I):(M[Se]=Q,M[G]=ae,Se=G);else if(I<Re&&0>j(re,ae))M[Se]=re,M[I]=ae,Se=I;else break e}}return Y}function j(M,Y){var ae=M.sortIndex-Y.sortIndex;return ae!==0?ae:M.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;r.unstable_now=function(){return b.now()}}else{var y=Date,f=y.now();r.unstable_now=function(){return y.now()-f}}var N=[],g=[],R=1,q=null,z=3,S=!1,O=!1,H=!1,m=!1,v=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function se(M){for(var Y=u(g);Y!==null;){if(Y.callback===null)d(g);else if(Y.startTime<=M)d(g),Y.sortIndex=Y.expirationTime,o(N,Y);else break;Y=u(g)}}function le(M){if(H=!1,se(M),!O)if(u(N)!==null)O=!0,$||($=!0,et());else{var Y=u(g);Y!==null&&kt(le,Y.startTime-M)}}var $=!1,X=-1,ie=5,ze=-1;function bt(){return m?!0:!(r.unstable_now()-ze<ie)}function zt(){if(m=!1,$){var M=r.unstable_now();ze=M;var Y=!0;try{e:{O=!1,H&&(H=!1,x(X),X=-1),S=!0;var ae=z;try{t:{for(se(M),q=u(N);q!==null&&!(q.expirationTime>M&&bt());){var Se=q.callback;if(typeof Se=="function"){q.callback=null,z=q.priorityLevel;var Re=Se(q.expirationTime<=M);if(M=r.unstable_now(),typeof Re=="function"){q.callback=Re,se(M),Y=!0;break t}q===u(N)&&d(N),se(M)}else d(N);q=u(N)}if(q!==null)Y=!0;else{var E=u(g);E!==null&&kt(le,E.startTime-M),Y=!1}}break e}finally{q=null,z=ae,S=!1}Y=void 0}}finally{Y?et():$=!1}}}var et;if(typeof w=="function")et=function(){w(zt)};else if(typeof MessageChannel<"u"){var zs=new MessageChannel,Pt=zs.port2;zs.port1.onmessage=zt,et=function(){Pt.postMessage(null)}}else et=function(){v(zt,0)};function kt(M,Y){X=v(function(){M(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return z},r.unstable_next=function(M){switch(z){case 1:case 2:case 3:var Y=3;break;default:Y=z}var ae=z;z=Y;try{return M()}finally{z=ae}},r.unstable_requestPaint=function(){m=!0},r.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var ae=z;z=M;try{return Y()}finally{z=ae}},r.unstable_scheduleCallback=function(M,Y,ae){var Se=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Se+ae:Se):ae=Se,M){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=ae+Re,M={id:R++,callback:Y,priorityLevel:M,startTime:ae,expirationTime:Re,sortIndex:-1},ae>Se?(M.sortIndex=ae,o(g,M),u(N)===null&&M===u(g)&&(H?(x(X),X=-1):H=!0,kt(le,ae-Se))):(M.sortIndex=Re,o(N,M),O||S||(O=!0,$||($=!0,et()))),M},r.unstable_shouldYield=bt,r.unstable_wrapCallback=function(M){var Y=z;return function(){var ae=z;z=Y;try{return M.apply(this,arguments)}finally{z=ae}}}})(Uc)),Uc}var lh;function bf(){return lh||(lh=1,Dc.exports=jf()),Dc.exports}var Mc={exports:{}},We={};var nh;function vf(){if(nh)return We;nh=1;var r=Xc();function o(N){var g="https://react.dev/errors/"+N;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)g+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+N+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var d={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},j=Symbol.for("react.portal");function b(N,g,R){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:q==null?null:""+q,children:N,containerInfo:g,implementation:R}}var y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(N,g){if(N==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,We.createPortal=function(N,g){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return b(N,g,null,R)},We.flushSync=function(N){var g=y.T,R=d.p;try{if(y.T=null,d.p=2,N)return N()}finally{y.T=g,d.p=R,d.d.f()}},We.preconnect=function(N,g){typeof N=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,d.d.C(N,g))},We.prefetchDNS=function(N){typeof N=="string"&&d.d.D(N)},We.preinit=function(N,g){if(typeof N=="string"&&g&&typeof g.as=="string"){var R=g.as,q=f(R,g.crossOrigin),z=typeof g.integrity=="string"?g.integrity:void 0,S=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;R==="style"?d.d.S(N,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:q,integrity:z,fetchPriority:S}):R==="script"&&d.d.X(N,{crossOrigin:q,integrity:z,fetchPriority:S,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},We.preinitModule=function(N,g){if(typeof N=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var R=f(g.as,g.crossOrigin);d.d.M(N,{crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&d.d.M(N)},We.preload=function(N,g){if(typeof N=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var R=g.as,q=f(R,g.crossOrigin);d.d.L(N,R,{crossOrigin:q,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},We.preloadModule=function(N,g){if(typeof N=="string")if(g){var R=f(g.as,g.crossOrigin);d.d.m(N,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else d.d.m(N)},We.requestFormReset=function(N){d.d.r(N)},We.unstable_batchedUpdates=function(N,g){return N(g)},We.useFormState=function(N,g,R){return y.H.useFormState(N,g,R)},We.useFormStatus=function(){return y.H.useHostTransitionStatus()},We.version="19.2.3",We}var ih;function yf(){if(ih)return Mc.exports;ih=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Mc.exports=vf(),Mc.exports}var rh;function gf(){if(rh)return wl;rh=1;var r=bf(),o=Xc(),u=yf();function d(t){var s="https://react.dev/errors/"+t;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function b(t){var s=t,a=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,(s.flags&4098)!==0&&(a=s.return),t=s.return;while(t)}return s.tag===3?a:null}function y(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function f(t){if(t.tag===31){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function N(t){if(b(t)!==t)throw Error(d(188))}function g(t){var s=t.alternate;if(!s){if(s=b(t),s===null)throw Error(d(188));return s!==t?null:t}for(var a=t,l=s;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return N(n),t;if(i===l)return N(n),s;i=i.sibling}throw Error(d(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,p=n.child;p;){if(p===a){c=!0,a=n,l=i;break}if(p===l){c=!0,l=n,a=i;break}p=p.sibling}if(!c){for(p=i.child;p;){if(p===a){c=!0,a=i,l=n;break}if(p===l){c=!0,l=i,a=n;break}p=p.sibling}if(!c)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?t:s}function R(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t;for(t=t.child;t!==null;){if(s=R(t),s!==null)return s;t=t.sibling}return null}var q=Object.assign,z=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),ze=Symbol.for("react.activity"),bt=Symbol.for("react.memo_cache_sentinel"),zt=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=zt&&t[zt]||t["@@iterator"],typeof t=="function"?t:null)}var zs=Symbol.for("react.client.reference");function Pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===zs?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case v:return"Profiler";case m:return"StrictMode";case le:return"Suspense";case $:return"SuspenseList";case ze:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case O:return"Portal";case w:return t.displayName||"Context";case x:return(t._context.displayName||"Context")+".Consumer";case se:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X:return s=t.displayName||null,s!==null?s:Pt(t.type)||"Memo";case ie:s=t._payload,t=t._init;try{return Pt(t(s))}catch{}}return null}var kt=Array.isArray,M=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Se=[],Re=-1;function E(t){return{current:t}}function G(t){0>Re||(t.current=Se[Re],Se[Re]=null,Re--)}function Q(t,s){Re++,Se[Re]=t.current,t.current=s}var I=E(null),re=E(null),de=E(null),ye=E(null);function Fe(t,s){switch(Q(de,s),Q(re,t),Q(I,null),s.nodeType){case 9:case 11:t=(t=s.documentElement)&&(t=t.namespaceURI)?Np(t):0;break;default:if(t=s.tagName,s=s.namespaceURI)s=Np(s),t=Sp(s,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}G(I),Q(I,t)}function we(){G(I),G(re),G(de)}function Ga(t){t.memoizedState!==null&&Q(ye,t);var s=I.current,a=Sp(s,t.type);s!==a&&(Q(re,t),Q(I,a))}function Yl(t){re.current===t&&(G(I),G(re)),ye.current===t&&(G(ye),Bl._currentValue=ae)}var fi,Wc;function ws(t){if(fi===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);fi=s&&s[1]||"",Wc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fi+t+Wc}var ji=!1;function bi(t,s){if(!t||ji)return"";ji=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(s){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(D){var A=D}Reflect.construct(t,[],P)}else{try{P.call()}catch(D){A=D}t.call(P.prototype)}}else{try{throw Error()}catch(D){A=D}(P=t())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(D){if(D&&A&&typeof D.stack=="string")return[D.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],p=i[1];if(c&&p){var T=c.split(`
`),B=p.split(`
`);for(n=l=0;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;for(;n<B.length&&!B[n].includes("DetermineComponentFrameRoot");)n++;if(l===T.length||n===B.length)for(l=T.length-1,n=B.length-1;1<=l&&0<=n&&T[l]!==B[n];)n--;for(;1<=l&&0<=n;l--,n--)if(T[l]!==B[n]){if(l!==1||n!==1)do if(l--,n--,0>n||T[l]!==B[n]){var U=`
`+T[l].replace(" at new "," at ");return t.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",t.displayName)),U}while(1<=l&&0<=n);break}}}finally{ji=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ws(a):""}function Qh(t,s){switch(t.tag){case 26:case 27:case 5:return ws(t.type);case 16:return ws("Lazy");case 13:return t.child!==s&&s!==null?ws("Suspense Fallback"):ws("Suspense");case 19:return ws("SuspenseList");case 0:case 15:return bi(t.type,!1);case 11:return bi(t.type.render,!1);case 1:return bi(t.type,!0);case 31:return ws("Activity");default:return""}}function Fc(t){try{var s="",a=null;do s+=Qh(t,a),a=t,t=t.return;while(t);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var vi=Object.prototype.hasOwnProperty,yi=r.unstable_scheduleCallback,gi=r.unstable_cancelCallback,Xh=r.unstable_shouldYield,Zh=r.unstable_requestPaint,ct=r.unstable_now,Jh=r.unstable_getCurrentPriorityLevel,$c=r.unstable_ImmediatePriority,eo=r.unstable_UserBlockingPriority,Ql=r.unstable_NormalPriority,Vh=r.unstable_LowPriority,to=r.unstable_IdlePriority,Kh=r.log,Ih=r.unstable_setDisableYieldValue,Ya=null,ot=null;function os(t){if(typeof Kh=="function"&&Ih(t),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(Ya,t)}catch{}}var dt=Math.clz32?Math.clz32:$h,Wh=Math.log,Fh=Math.LN2;function $h(t){return t>>>=0,t===0?32:31-(Wh(t)/Fh|0)|0}var Xl=256,Zl=262144,Jl=4194304;function Ds(t){var s=t&42;if(s!==0)return s;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Vl(t,s,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var p=l&134217727;return p!==0?(l=p&~i,l!==0?n=Ds(l):(c&=p,c!==0?n=Ds(c):a||(a=p&~t,a!==0&&(n=Ds(a))))):(p=l&~i,p!==0?n=Ds(p):c!==0?n=Ds(c):a||(a=l&~t,a!==0&&(n=Ds(a)))),n===0?0:s!==0&&s!==n&&(s&i)===0&&(i=n&-n,a=s&-s,i>=a||i===32&&(a&4194048)!==0)?s:n}function Qa(t,s){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&s)===0}function em(t,s){switch(t){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function so(){var t=Jl;return Jl<<=1,(Jl&62914560)===0&&(Jl=4194304),t}function Ni(t){for(var s=[],a=0;31>a;a++)s.push(t);return s}function Xa(t,s){t.pendingLanes|=s,s!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tm(t,s,a,l,n,i){var c=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var p=t.entanglements,T=t.expirationTimes,B=t.hiddenUpdates;for(a=c&~a;0<a;){var U=31-dt(a),P=1<<U;p[U]=0,T[U]=-1;var A=B[U];if(A!==null)for(B[U]=null,U=0;U<A.length;U++){var D=A[U];D!==null&&(D.lane&=-536870913)}a&=~P}l!==0&&ao(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(c&~s))}function ao(t,s,a){t.pendingLanes|=s,t.suspendedLanes&=~s;var l=31-dt(s);t.entangledLanes|=s,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function lo(t,s){var a=t.entangledLanes|=s;for(t=t.entanglements;a;){var l=31-dt(a),n=1<<l;n&s|t[l]&s&&(t[l]|=s),a&=~n}}function no(t,s){var a=s&-s;return a=(a&42)!==0?1:Si(a),(a&(t.suspendedLanes|s))!==0?0:a}function Si(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ti(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function io(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:Zp(t.type))}function ro(t,s){var a=Y.p;try{return Y.p=t,s()}finally{Y.p=a}}var ds=Math.random().toString(36).slice(2),Ze="__reactFiber$"+ds,tt="__reactProps$"+ds,sa="__reactContainer$"+ds,qi="__reactEvents$"+ds,sm="__reactListeners$"+ds,am="__reactHandles$"+ds,co="__reactResources$"+ds,Za="__reactMarker$"+ds;function Ci(t){delete t[Ze],delete t[tt],delete t[qi],delete t[sm],delete t[am]}function aa(t){var s=t[Ze];if(s)return s;for(var a=t.parentNode;a;){if(s=a[sa]||a[Ze]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(t=kp(t);t!==null;){if(a=t[Ze])return a;t=kp(t)}return s}t=a,a=t.parentNode}return null}function la(t){if(t=t[Ze]||t[sa]){var s=t.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return t}return null}function Ja(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t.stateNode;throw Error(d(33))}function na(t){var s=t[co];return s||(s=t[co]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Qe(t){t[Za]=!0}var oo=new Set,uo={};function Us(t,s){ia(t,s),ia(t+"Capture",s)}function ia(t,s){for(uo[t]=s,t=0;t<s.length;t++)oo.add(s[t])}var lm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),po={},ho={};function nm(t){return vi.call(ho,t)?!0:vi.call(po,t)?!1:lm.test(t)?ho[t]=!0:(po[t]=!0,!1)}function Kl(t,s,a){if(nm(s))if(a===null)t.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(s);return;case"boolean":var l=s.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(s);return}}t.setAttribute(s,""+a)}}function Il(t,s,a){if(a===null)t.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttribute(s,""+a)}}function Gt(t,s,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(s,a,""+l)}}function vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mo(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function im(t,s,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,s);if(!t.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(t,s,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function Ri(t){if(!t._valueTracker){var s=mo(t)?"checked":"value";t._valueTracker=im(t,s,""+t[s])}}function xo(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var a=s.getValue(),l="";return t&&(l=mo(t)?t.checked?"true":"false":t.value),t=l,t!==a?(s.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rm=/[\n"\\]/g;function yt(t){return t.replace(rm,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Ei(t,s,a,l,n,i,c,p){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),s!=null?c==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+vt(s)):t.value!==""+vt(s)&&(t.value=""+vt(s)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),s!=null?_i(t,c,vt(s)):a!=null?_i(t,c,vt(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.name=""+vt(p):t.removeAttribute("name")}function fo(t,s,a,l,n,i,c,p){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),s!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||s!=null)){Ri(t);return}a=a!=null?""+vt(a):"",s=s!=null?""+vt(s):a,p||s===t.value||(t.value=s),t.defaultValue=s}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=p?t.checked:!!l,t.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c),Ri(t)}function _i(t,s,a){s==="number"&&Wl(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ra(t,s,a,l){if(t=t.options,s){s={};for(var n=0;n<a.length;n++)s["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=s.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+vt(a),s=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}s!==null||t[n].disabled||(s=t[n])}s!==null&&(s.selected=!0)}}function jo(t,s,a){if(s!=null&&(s=""+vt(s),s!==t.value&&(t.value=s),a==null)){t.defaultValue!==s&&(t.defaultValue=s);return}t.defaultValue=a!=null?""+vt(a):""}function bo(t,s,a,l){if(s==null){if(l!=null){if(a!=null)throw Error(d(92));if(kt(l)){if(1<l.length)throw Error(d(93));l=l[0]}a=l}a==null&&(a=""),s=a}a=vt(s),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),Ri(t)}function ca(t,s){if(s){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=s;return}}t.textContent=s}var cm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vo(t,s,a){var l=s.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="":l?t.setProperty(s,a):typeof a!="number"||a===0||cm.has(s)?s==="float"?t.cssFloat=a:t[s]=(""+a).trim():t[s]=a+"px"}function yo(t,s,a){if(s!=null&&typeof s!="object")throw Error(d(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||s!=null&&s.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in s)l=s[n],s.hasOwnProperty(n)&&a[n]!==l&&vo(t,n,l)}else for(var i in s)s.hasOwnProperty(i)&&vo(t,i,s[i])}function ki(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var om=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fl(t){return dm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yt(){}var Bi=null;function Hi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oa=null,da=null;function go(t){var s=la(t);if(s&&(t=s.stateNode)){var a=t[tt]||null;e:switch(t=s.stateNode,s.type){case"input":if(Ei(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),s=a.name,a.type==="radio"&&s!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yt(""+s)+'"][type="radio"]'),s=0;s<a.length;s++){var l=a[s];if(l!==t&&l.form===t.form){var n=l[tt]||null;if(!n)throw Error(d(90));Ei(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(s=0;s<a.length;s++)l=a[s],l.form===t.form&&xo(l)}break e;case"textarea":jo(t,a.value,a.defaultValue);break e;case"select":s=a.value,s!=null&&ra(t,!!a.multiple,s,!1)}}}var Ai=!1;function No(t,s,a){if(Ai)return t(s,a);Ai=!0;try{var l=t(s);return l}finally{if(Ai=!1,(oa!==null||da!==null)&&(Ln(),oa&&(s=oa,t=da,da=oa=null,go(s),t)))for(s=0;s<t.length;s++)go(t[s])}}function Va(t,s){var a=t.stateNode;if(a===null)return null;var l=a[tt]||null;if(l===null)return null;a=l[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(d(231,s,typeof a));return a}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oi=!1;if(Qt)try{var Ka={};Object.defineProperty(Ka,"passive",{get:function(){Oi=!0}}),window.addEventListener("test",Ka,Ka),window.removeEventListener("test",Ka,Ka)}catch{Oi=!1}var us=null,zi=null,$l=null;function So(){if($l)return $l;var t,s=zi,a=s.length,l,n="value"in us?us.value:us.textContent,i=n.length;for(t=0;t<a&&s[t]===n[t];t++);var c=a-t;for(l=1;l<=c&&s[a-l]===n[i-l];l++);return $l=n.slice(t,1<l?1-l:void 0)}function en(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function tn(){return!0}function To(){return!1}function st(t){function s(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var p in t)t.hasOwnProperty(p)&&(a=t[p],this[p]=a?a(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?tn:To,this.isPropagationStopped=To,this}return q(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tn)},persist:function(){},isPersistent:tn}),s}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sn=st(Ms),Ia=q({},Ms,{view:0,detail:0}),um=st(Ia),wi,Di,Wa,an=q({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wa&&(Wa&&t.type==="mousemove"?(wi=t.screenX-Wa.screenX,Di=t.screenY-Wa.screenY):Di=wi=0,Wa=t),wi)},movementY:function(t){return"movementY"in t?t.movementY:Di}}),qo=st(an),pm=q({},an,{dataTransfer:0}),hm=st(pm),mm=q({},Ia,{relatedTarget:0}),Ui=st(mm),xm=q({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),fm=st(xm),jm=q({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bm=st(jm),vm=q({},Ms,{data:0}),Co=st(vm),ym={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sm(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=Nm[t])?!!s[t]:!1}function Mi(){return Sm}var Tm=q({},Ia,{key:function(t){if(t.key){var s=ym[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=en(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mi,charCode:function(t){return t.type==="keypress"?en(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?en(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qm=st(Tm),Cm=q({},an,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ro=st(Cm),Rm=q({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mi}),Em=st(Rm),_m=q({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),km=st(_m),Bm=q({},an,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hm=st(Bm),Am=q({},Ms,{newState:0,oldState:0}),Om=st(Am),zm=[9,13,27,32],Li=Qt&&"CompositionEvent"in window,Fa=null;Qt&&"documentMode"in document&&(Fa=document.documentMode);var wm=Qt&&"TextEvent"in window&&!Fa,Eo=Qt&&(!Li||Fa&&8<Fa&&11>=Fa),_o=" ",ko=!1;function Bo(t,s){switch(t){case"keyup":return zm.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ho(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ua=!1;function Dm(t,s){switch(t){case"compositionend":return Ho(s);case"keypress":return s.which!==32?null:(ko=!0,_o);case"textInput":return t=s.data,t===_o&&ko?null:t;default:return null}}function Um(t,s){if(ua)return t==="compositionend"||!Li&&Bo(t,s)?(t=So(),$l=zi=us=null,ua=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Eo&&s.locale!=="ko"?null:s.data;default:return null}}var Mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ao(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!Mm[t.type]:s==="textarea"}function Oo(t,s,a,l){oa?da?da.push(l):da=[l]:oa=l,s=Jn(s,"onChange"),0<s.length&&(a=new sn("onChange","change",null,a,l),t.push({event:a,listeners:s}))}var $a=null,el=null;function Lm(t){fp(t,0)}function ln(t){var s=Ja(t);if(xo(s))return t}function zo(t,s){if(t==="change")return s}var wo=!1;if(Qt){var Pi;if(Qt){var Gi="oninput"in document;if(!Gi){var Do=document.createElement("div");Do.setAttribute("oninput","return;"),Gi=typeof Do.oninput=="function"}Pi=Gi}else Pi=!1;wo=Pi&&(!document.documentMode||9<document.documentMode)}function Uo(){$a&&($a.detachEvent("onpropertychange",Mo),el=$a=null)}function Mo(t){if(t.propertyName==="value"&&ln(el)){var s=[];Oo(s,el,t,Hi(t)),No(Lm,s)}}function Pm(t,s,a){t==="focusin"?(Uo(),$a=s,el=a,$a.attachEvent("onpropertychange",Mo)):t==="focusout"&&Uo()}function Gm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ln(el)}function Ym(t,s){if(t==="click")return ln(s)}function Qm(t,s){if(t==="input"||t==="change")return ln(s)}function Xm(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var ut=typeof Object.is=="function"?Object.is:Xm;function tl(t,s){if(ut(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var a=Object.keys(t),l=Object.keys(s);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!vi.call(s,n)||!ut(t[n],s[n]))return!1}return!0}function Lo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Po(t,s){var a=Lo(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=s&&l>=s)return{node:a,offset:s-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lo(a)}}function Go(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?Go(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function Yo(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var s=Wl(t.document);s instanceof t.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)t=s.contentWindow;else break;s=Wl(t.document)}return s}function Yi(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}var Zm=Qt&&"documentMode"in document&&11>=document.documentMode,pa=null,Qi=null,sl=null,Xi=!1;function Qo(t,s,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xi||pa==null||pa!==Wl(l)||(l=pa,"selectionStart"in l&&Yi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),sl&&tl(sl,l)||(sl=l,l=Jn(Qi,"onSelect"),0<l.length&&(s=new sn("onSelect","select",null,s,a),t.push({event:s,listeners:l}),s.target=pa)))}function Ls(t,s){var a={};return a[t.toLowerCase()]=s.toLowerCase(),a["Webkit"+t]="webkit"+s,a["Moz"+t]="moz"+s,a}var ha={animationend:Ls("Animation","AnimationEnd"),animationiteration:Ls("Animation","AnimationIteration"),animationstart:Ls("Animation","AnimationStart"),transitionrun:Ls("Transition","TransitionRun"),transitionstart:Ls("Transition","TransitionStart"),transitioncancel:Ls("Transition","TransitionCancel"),transitionend:Ls("Transition","TransitionEnd")},Zi={},Xo={};Qt&&(Xo=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function Ps(t){if(Zi[t])return Zi[t];if(!ha[t])return t;var s=ha[t],a;for(a in s)if(s.hasOwnProperty(a)&&a in Xo)return Zi[t]=s[a];return t}var Zo=Ps("animationend"),Jo=Ps("animationiteration"),Vo=Ps("animationstart"),Jm=Ps("transitionrun"),Vm=Ps("transitionstart"),Km=Ps("transitioncancel"),Ko=Ps("transitionend"),Io=new Map,Ji="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ji.push("scrollEnd");function Bt(t,s){Io.set(t,s),Us(s,[t])}var nn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gt=[],ma=0,Vi=0;function rn(){for(var t=ma,s=Vi=ma=0;s<t;){var a=gt[s];gt[s++]=null;var l=gt[s];gt[s++]=null;var n=gt[s];gt[s++]=null;var i=gt[s];if(gt[s++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&Wo(a,n,i)}}function cn(t,s,a,l){gt[ma++]=t,gt[ma++]=s,gt[ma++]=a,gt[ma++]=l,Vi|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ki(t,s,a,l){return cn(t,s,a,l),on(t)}function Gs(t,s){return cn(t,null,null,s),on(t)}function Wo(t,s,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&s!==null&&(n=31-dt(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[s]:l.push(s),s.lane=a|536870912),i):null}function on(t){if(50<Tl)throw Tl=0,lc=null,Error(d(185));for(var s=t.return;s!==null;)t=s,s=t.return;return t.tag===3?t.stateNode:null}var xa={};function Im(t,s,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(t,s,a,l){return new Im(t,s,a,l)}function Ii(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xt(t,s){var a=t.alternate;return a===null?(a=pt(t.tag,s,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=s,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,s=t.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fo(t,s){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=s,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,s=a.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),t}function dn(t,s,a,l,n,i){var c=0;if(l=t,typeof t=="function")Ii(t)&&(c=1);else if(typeof t=="string")c=tf(t,a,I.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case ze:return t=pt(31,a,s,n),t.elementType=ze,t.lanes=i,t;case H:return Ys(a.children,n,i,s);case m:c=8,n|=24;break;case v:return t=pt(12,a,s,n|2),t.elementType=v,t.lanes=i,t;case le:return t=pt(13,a,s,n),t.elementType=le,t.lanes=i,t;case $:return t=pt(19,a,s,n),t.elementType=$,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:c=10;break e;case x:c=9;break e;case se:c=11;break e;case X:c=14;break e;case ie:c=16,l=null;break e}c=29,a=Error(d(130,t===null?"null":typeof t,"")),l=null}return s=pt(c,a,s,n),s.elementType=t,s.type=l,s.lanes=i,s}function Ys(t,s,a,l){return t=pt(7,t,l,s),t.lanes=a,t}function Wi(t,s,a){return t=pt(6,t,null,s),t.lanes=a,t}function $o(t){var s=pt(18,null,null,0);return s.stateNode=t,s}function Fi(t,s,a){return s=pt(4,t.children!==null?t.children:[],t.key,s),s.lanes=a,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}var ed=new WeakMap;function Nt(t,s){if(typeof t=="object"&&t!==null){var a=ed.get(t);return a!==void 0?a:(s={value:t,source:s,stack:Fc(s)},ed.set(t,s),s)}return{value:t,source:s,stack:Fc(s)}}var fa=[],ja=0,un=null,al=0,St=[],Tt=0,ps=null,wt=1,Dt="";function Zt(t,s){fa[ja++]=al,fa[ja++]=un,un=t,al=s}function td(t,s,a){St[Tt++]=wt,St[Tt++]=Dt,St[Tt++]=ps,ps=t;var l=wt;t=Dt;var n=32-dt(l)-1;l&=~(1<<n),a+=1;var i=32-dt(s)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,wt=1<<32-dt(s)+n|a<<n|l,Dt=i+t}else wt=1<<i|a<<n|l,Dt=t}function $i(t){t.return!==null&&(Zt(t,1),td(t,1,0))}function er(t){for(;t===un;)un=fa[--ja],fa[ja]=null,al=fa[--ja],fa[ja]=null;for(;t===ps;)ps=St[--Tt],St[Tt]=null,Dt=St[--Tt],St[Tt]=null,wt=St[--Tt],St[Tt]=null}function sd(t,s){St[Tt++]=wt,St[Tt++]=Dt,St[Tt++]=ps,wt=s.id,Dt=s.overflow,ps=t}var Je=null,_e=null,fe=!1,hs=null,qt=!1,tr=Error(d(519));function ms(t){var s=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll(Nt(s,t)),tr}function ad(t){var s=t.stateNode,a=t.type,l=t.memoizedProps;switch(s[Ze]=t,s[tt]=l,a){case"dialog":pe("cancel",s),pe("close",s);break;case"iframe":case"object":case"embed":pe("load",s);break;case"video":case"audio":for(a=0;a<Cl.length;a++)pe(Cl[a],s);break;case"source":pe("error",s);break;case"img":case"image":case"link":pe("error",s),pe("load",s);break;case"details":pe("toggle",s);break;case"input":pe("invalid",s),fo(s,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":pe("invalid",s);break;case"textarea":pe("invalid",s),bo(s,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||s.textContent===""+a||l.suppressHydrationWarning===!0||yp(s.textContent,a)?(l.popover!=null&&(pe("beforetoggle",s),pe("toggle",s)),l.onScroll!=null&&pe("scroll",s),l.onScrollEnd!=null&&pe("scrollend",s),l.onClick!=null&&(s.onclick=Yt),s=!0):s=!1,s||ms(t,!0)}function ld(t){for(Je=t.return;Je;)switch(Je.tag){case 5:case 31:case 13:qt=!1;return;case 27:case 3:qt=!0;return;default:Je=Je.return}}function ba(t){if(t!==Je)return!1;if(!fe)return ld(t),fe=!0,!1;var s=t.tag,a;if((a=s!==3&&s!==27)&&((a=s===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vc(t.type,t.memoizedProps)),a=!a),a&&_e&&ms(t),ld(t),s===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));_e=_p(t)}else if(s===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));_e=_p(t)}else s===27?(s=_e,Es(t.type)?(t=Tc,Tc=null,_e=t):_e=s):_e=Je?Rt(t.stateNode.nextSibling):null;return!0}function Qs(){_e=Je=null,fe=!1}function sr(){var t=hs;return t!==null&&(it===null?it=t:it.push.apply(it,t),hs=null),t}function ll(t){hs===null?hs=[t]:hs.push(t)}var ar=E(null),Xs=null,Jt=null;function xs(t,s,a){Q(ar,s._currentValue),s._currentValue=a}function Vt(t){t._currentValue=ar.current,G(ar)}function lr(t,s,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,l!==null&&(l.childLanes|=s)):l!==null&&(l.childLanes&s)!==s&&(l.childLanes|=s),t===a)break;t=t.return}}function nr(t,s,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var p=i;i=n;for(var T=0;T<s.length;T++)if(p.context===s[T]){i.lanes|=a,p=i.alternate,p!==null&&(p.lanes|=a),lr(i.return,a,t),l||(c=null);break e}i=p.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(d(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),lr(c,a,t),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===t){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function va(t,s,a,l){t=null;for(var n=s,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(d(387));if(c=c.memoizedProps,c!==null){var p=n.type;ut(n.pendingProps.value,c.value)||(t!==null?t.push(p):t=[p])}}else if(n===ye.current){if(c=n.alternate,c===null)throw Error(d(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Bl):t=[Bl])}n=n.return}t!==null&&nr(s,t,a,l),s.flags|=262144}function pn(t){for(t=t.firstContext;t!==null;){if(!ut(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Zs(t){Xs=t,Jt=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ve(t){return nd(Xs,t)}function hn(t,s){return Xs===null&&Zs(t),nd(t,s)}function nd(t,s){var a=s._currentValue;if(s={context:s,memoizedValue:a,next:null},Jt===null){if(t===null)throw Error(d(308));Jt=s,t.dependencies={lanes:0,firstContext:s},t.flags|=524288}else Jt=Jt.next=s;return a}var Wm=typeof AbortController<"u"?AbortController:function(){var t=[],s=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){s.aborted=!0,t.forEach(function(a){return a()})}},Fm=r.unstable_scheduleCallback,$m=r.unstable_NormalPriority,Me={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ir(){return{controller:new Wm,data:new Map,refCount:0}}function nl(t){t.refCount--,t.refCount===0&&Fm($m,function(){t.controller.abort()})}var il=null,rr=0,ya=0,ga=null;function ex(t,s){if(il===null){var a=il=[];rr=0,ya=dc(),ga={status:"pending",value:void 0,then:function(l){a.push(l)}}}return rr++,s.then(id,id),s}function id(){if(--rr===0&&il!==null){ga!==null&&(ga.status="fulfilled");var t=il;il=null,ya=0,ga=null;for(var s=0;s<t.length;s++)(0,t[s])()}}function tx(t,s){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=s;for(var n=0;n<a.length;n++)(0,a[n])(s)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var rd=M.S;M.S=function(t,s){Qu=ct(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&ex(t,s),rd!==null&&rd(t,s)};var Js=E(null);function cr(){var t=Js.current;return t!==null?t:Ee.pooledCache}function mn(t,s){s===null?Q(Js,Js.current):Q(Js,s.pool)}function cd(){var t=cr();return t===null?null:{parent:Me._currentValue,pool:t}}var Na=Error(d(460)),or=Error(d(474)),xn=Error(d(542)),fn={then:function(){}};function od(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dd(t,s,a){switch(a=t[a],a===void 0?t.push(s):a!==s&&(s.then(Yt,Yt),s=a),s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,pd(t),t;default:if(typeof s.status=="string")s.then(Yt,Yt);else{if(t=Ee,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=s,t.status="pending",t.then(function(l){if(s.status==="pending"){var n=s;n.status="fulfilled",n.value=l}},function(l){if(s.status==="pending"){var n=s;n.status="rejected",n.reason=l}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,pd(t),t}throw Ks=s,Na}}function Vs(t){try{var s=t._init;return s(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ks=a,Na):a}}var Ks=null;function ud(){if(Ks===null)throw Error(d(459));var t=Ks;return Ks=null,t}function pd(t){if(t===Na||t===xn)throw Error(d(483))}var Sa=null,rl=0;function jn(t){var s=rl;return rl+=1,Sa===null&&(Sa=[]),dd(Sa,t,s)}function cl(t,s){s=s.props.ref,t.ref=s!==void 0?s:null}function bn(t,s){throw s.$$typeof===z?Error(d(525)):(t=Object.prototype.toString.call(s),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t)))}function hd(t){function s(_,C){if(t){var k=_.deletions;k===null?(_.deletions=[C],_.flags|=16):k.push(C)}}function a(_,C){if(!t)return null;for(;C!==null;)s(_,C),C=C.sibling;return null}function l(_){for(var C=new Map;_!==null;)_.key!==null?C.set(_.key,_):C.set(_.index,_),_=_.sibling;return C}function n(_,C){return _=Xt(_,C),_.index=0,_.sibling=null,_}function i(_,C,k){return _.index=k,t?(k=_.alternate,k!==null?(k=k.index,k<C?(_.flags|=67108866,C):k):(_.flags|=67108866,C)):(_.flags|=1048576,C)}function c(_){return t&&_.alternate===null&&(_.flags|=67108866),_}function p(_,C,k,L){return C===null||C.tag!==6?(C=Wi(k,_.mode,L),C.return=_,C):(C=n(C,k),C.return=_,C)}function T(_,C,k,L){var F=k.type;return F===H?U(_,C,k.props.children,L,k.key):C!==null&&(C.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ie&&Vs(F)===C.type)?(C=n(C,k.props),cl(C,k),C.return=_,C):(C=dn(k.type,k.key,k.props,null,_.mode,L),cl(C,k),C.return=_,C)}function B(_,C,k,L){return C===null||C.tag!==4||C.stateNode.containerInfo!==k.containerInfo||C.stateNode.implementation!==k.implementation?(C=Fi(k,_.mode,L),C.return=_,C):(C=n(C,k.children||[]),C.return=_,C)}function U(_,C,k,L,F){return C===null||C.tag!==7?(C=Ys(k,_.mode,L,F),C.return=_,C):(C=n(C,k),C.return=_,C)}function P(_,C,k){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Wi(""+C,_.mode,k),C.return=_,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case S:return k=dn(C.type,C.key,C.props,null,_.mode,k),cl(k,C),k.return=_,k;case O:return C=Fi(C,_.mode,k),C.return=_,C;case ie:return C=Vs(C),P(_,C,k)}if(kt(C)||et(C))return C=Ys(C,_.mode,k,null),C.return=_,C;if(typeof C.then=="function")return P(_,jn(C),k);if(C.$$typeof===w)return P(_,hn(_,C),k);bn(_,C)}return null}function A(_,C,k,L){var F=C!==null?C.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return F!==null?null:p(_,C,""+k,L);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return k.key===F?T(_,C,k,L):null;case O:return k.key===F?B(_,C,k,L):null;case ie:return k=Vs(k),A(_,C,k,L)}if(kt(k)||et(k))return F!==null?null:U(_,C,k,L,null);if(typeof k.then=="function")return A(_,C,jn(k),L);if(k.$$typeof===w)return A(_,C,hn(_,k),L);bn(_,k)}return null}function D(_,C,k,L,F){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return _=_.get(k)||null,p(C,_,""+L,F);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case S:return _=_.get(L.key===null?k:L.key)||null,T(C,_,L,F);case O:return _=_.get(L.key===null?k:L.key)||null,B(C,_,L,F);case ie:return L=Vs(L),D(_,C,k,L,F)}if(kt(L)||et(L))return _=_.get(k)||null,U(C,_,L,F,null);if(typeof L.then=="function")return D(_,C,k,jn(L),F);if(L.$$typeof===w)return D(_,C,k,hn(C,L),F);bn(C,L)}return null}function K(_,C,k,L){for(var F=null,je=null,W=C,oe=C=0,me=null;W!==null&&oe<k.length;oe++){W.index>oe?(me=W,W=null):me=W.sibling;var be=A(_,W,k[oe],L);if(be===null){W===null&&(W=me);break}t&&W&&be.alternate===null&&s(_,W),C=i(be,C,oe),je===null?F=be:je.sibling=be,je=be,W=me}if(oe===k.length)return a(_,W),fe&&Zt(_,oe),F;if(W===null){for(;oe<k.length;oe++)W=P(_,k[oe],L),W!==null&&(C=i(W,C,oe),je===null?F=W:je.sibling=W,je=W);return fe&&Zt(_,oe),F}for(W=l(W);oe<k.length;oe++)me=D(W,_,oe,k[oe],L),me!==null&&(t&&me.alternate!==null&&W.delete(me.key===null?oe:me.key),C=i(me,C,oe),je===null?F=me:je.sibling=me,je=me);return t&&W.forEach(function(As){return s(_,As)}),fe&&Zt(_,oe),F}function te(_,C,k,L){if(k==null)throw Error(d(151));for(var F=null,je=null,W=C,oe=C=0,me=null,be=k.next();W!==null&&!be.done;oe++,be=k.next()){W.index>oe?(me=W,W=null):me=W.sibling;var As=A(_,W,be.value,L);if(As===null){W===null&&(W=me);break}t&&W&&As.alternate===null&&s(_,W),C=i(As,C,oe),je===null?F=As:je.sibling=As,je=As,W=me}if(be.done)return a(_,W),fe&&Zt(_,oe),F;if(W===null){for(;!be.done;oe++,be=k.next())be=P(_,be.value,L),be!==null&&(C=i(be,C,oe),je===null?F=be:je.sibling=be,je=be);return fe&&Zt(_,oe),F}for(W=l(W);!be.done;oe++,be=k.next())be=D(W,_,oe,be.value,L),be!==null&&(t&&be.alternate!==null&&W.delete(be.key===null?oe:be.key),C=i(be,C,oe),je===null?F=be:je.sibling=be,je=be);return t&&W.forEach(function(hf){return s(_,hf)}),fe&&Zt(_,oe),F}function Ce(_,C,k,L){if(typeof k=="object"&&k!==null&&k.type===H&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case S:e:{for(var F=k.key;C!==null;){if(C.key===F){if(F=k.type,F===H){if(C.tag===7){a(_,C.sibling),L=n(C,k.props.children),L.return=_,_=L;break e}}else if(C.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ie&&Vs(F)===C.type){a(_,C.sibling),L=n(C,k.props),cl(L,k),L.return=_,_=L;break e}a(_,C);break}else s(_,C);C=C.sibling}k.type===H?(L=Ys(k.props.children,_.mode,L,k.key),L.return=_,_=L):(L=dn(k.type,k.key,k.props,null,_.mode,L),cl(L,k),L.return=_,_=L)}return c(_);case O:e:{for(F=k.key;C!==null;){if(C.key===F)if(C.tag===4&&C.stateNode.containerInfo===k.containerInfo&&C.stateNode.implementation===k.implementation){a(_,C.sibling),L=n(C,k.children||[]),L.return=_,_=L;break e}else{a(_,C);break}else s(_,C);C=C.sibling}L=Fi(k,_.mode,L),L.return=_,_=L}return c(_);case ie:return k=Vs(k),Ce(_,C,k,L)}if(kt(k))return K(_,C,k,L);if(et(k)){if(F=et(k),typeof F!="function")throw Error(d(150));return k=F.call(k),te(_,C,k,L)}if(typeof k.then=="function")return Ce(_,C,jn(k),L);if(k.$$typeof===w)return Ce(_,C,hn(_,k),L);bn(_,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,C!==null&&C.tag===6?(a(_,C.sibling),L=n(C,k),L.return=_,_=L):(a(_,C),L=Wi(k,_.mode,L),L.return=_,_=L),c(_)):a(_,C)}return function(_,C,k,L){try{rl=0;var F=Ce(_,C,k,L);return Sa=null,F}catch(W){if(W===Na||W===xn)throw W;var je=pt(29,W,null,_.mode);return je.lanes=L,je.return=_,je}}}var Is=hd(!0),md=hd(!1),fs=!1;function dr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ur(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function js(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function bs(t,s,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(ve&2)!==0){var n=l.pending;return n===null?s.next=s:(s.next=n.next,n.next=s),l.pending=s,s=on(t),Wo(t,null,a),s}return cn(t,l,s,a),on(t)}function ol(t,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194048)!==0)){var l=s.lanes;l&=t.pendingLanes,a|=l,s.lanes=a,lo(t,a)}}function pr(t,s){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=s:i=i.next=s}else n=i=s;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=s:t.next=s,a.lastBaseUpdate=s}var hr=!1;function dl(){if(hr){var t=ga;if(t!==null)throw t}}function ul(t,s,a,l){hr=!1;var n=t.updateQueue;fs=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,p=n.shared.pending;if(p!==null){n.shared.pending=null;var T=p,B=T.next;T.next=null,c===null?i=B:c.next=B,c=T;var U=t.alternate;U!==null&&(U=U.updateQueue,p=U.lastBaseUpdate,p!==c&&(p===null?U.firstBaseUpdate=B:p.next=B,U.lastBaseUpdate=T))}if(i!==null){var P=n.baseState;c=0,U=B=T=null,p=i;do{var A=p.lane&-536870913,D=A!==p.lane;if(D?(he&A)===A:(l&A)===A){A!==0&&A===ya&&(hr=!0),U!==null&&(U=U.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var K=t,te=p;A=s;var Ce=a;switch(te.tag){case 1:if(K=te.payload,typeof K=="function"){P=K.call(Ce,P,A);break e}P=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=te.payload,A=typeof K=="function"?K.call(Ce,P,A):K,A==null)break e;P=q({},P,A);break e;case 2:fs=!0}}A=p.callback,A!==null&&(t.flags|=64,D&&(t.flags|=8192),D=n.callbacks,D===null?n.callbacks=[A]:D.push(A))}else D={lane:A,tag:p.tag,payload:p.payload,callback:p.callback,next:null},U===null?(B=U=D,T=P):U=U.next=D,c|=A;if(p=p.next,p===null){if(p=n.shared.pending,p===null)break;D=p,p=D.next,D.next=null,n.lastBaseUpdate=D,n.shared.pending=null}}while(!0);U===null&&(T=P),n.baseState=T,n.firstBaseUpdate=B,n.lastBaseUpdate=U,i===null&&(n.shared.lanes=0),Ss|=c,t.lanes=c,t.memoizedState=P}}function xd(t,s){if(typeof t!="function")throw Error(d(191,t));t.call(s)}function fd(t,s){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)xd(a[t],s)}var Ta=E(null),vn=E(0);function jd(t,s){t=as,Q(vn,t),Q(Ta,s),as=t|s.baseLanes}function mr(){Q(vn,as),Q(Ta,Ta.current)}function xr(){as=vn.current,G(Ta),G(vn)}var ht=E(null),Ct=null;function vs(t){var s=t.alternate;Q(De,De.current&1),Q(ht,t),Ct===null&&(s===null||Ta.current!==null||s.memoizedState!==null)&&(Ct=t)}function fr(t){Q(De,De.current),Q(ht,t),Ct===null&&(Ct=t)}function bd(t){t.tag===22?(Q(De,De.current),Q(ht,t),Ct===null&&(Ct=t)):ys()}function ys(){Q(De,De.current),Q(ht,ht.current)}function mt(t){G(ht),Ct===t&&(Ct=null),G(De)}var De=E(0);function yn(t){for(var s=t;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Nc(a)||Sc(a)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Kt=0,ce=null,Te=null,Le=null,gn=!1,qa=!1,Ws=!1,Nn=0,pl=0,Ca=null,sx=0;function Ae(){throw Error(d(321))}function jr(t,s){if(s===null)return!1;for(var a=0;a<s.length&&a<t.length;a++)if(!ut(t[a],s[a]))return!1;return!0}function br(t,s,a,l,n,i){return Kt=i,ce=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,M.H=t===null||t.memoizedState===null?tu:Ar,Ws=!1,i=a(l,n),Ws=!1,qa&&(i=yd(s,a,l,n)),vd(t),i}function vd(t){M.H=xl;var s=Te!==null&&Te.next!==null;if(Kt=0,Le=Te=ce=null,gn=!1,pl=0,Ca=null,s)throw Error(d(300));t===null||Pe||(t=t.dependencies,t!==null&&pn(t)&&(Pe=!0))}function yd(t,s,a,l){ce=t;var n=0;do{if(qa&&(Ca=null),pl=0,qa=!1,25<=n)throw Error(d(301));if(n+=1,Le=Te=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=su,i=s(a,l)}while(qa);return i}function ax(){var t=M.H,s=t.useState()[0];return s=typeof s.then=="function"?hl(s):s,t=t.useState()[0],(Te!==null?Te.memoizedState:null)!==t&&(ce.flags|=1024),s}function vr(){var t=Nn!==0;return Nn=0,t}function yr(t,s,a){s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~a}function gr(t){if(gn){for(t=t.memoizedState;t!==null;){var s=t.queue;s!==null&&(s.pending=null),t=t.next}gn=!1}Kt=0,Le=Te=ce=null,qa=!1,pl=Nn=0,Ca=null}function $e(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ce.memoizedState=Le=t:Le=Le.next=t,Le}function Ue(){if(Te===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Te.next;var s=Le===null?ce.memoizedState:Le.next;if(s!==null)Le=s,Te=t;else{if(t===null)throw ce.alternate===null?Error(d(467)):Error(d(310));Te=t,t={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Le===null?ce.memoizedState=Le=t:Le=Le.next=t}return Le}function Sn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(t){var s=pl;return pl+=1,Ca===null&&(Ca=[]),t=dd(Ca,t,s),s=ce,(Le===null?s.memoizedState:Le.next)===null&&(s=s.alternate,M.H=s===null||s.memoizedState===null?tu:Ar),t}function Tn(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return hl(t);if(t.$$typeof===w)return Ve(t)}throw Error(d(438,String(t)))}function Nr(t){var s=null,a=ce.updateQueue;if(a!==null&&(s=a.memoCache),s==null){var l=ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(s={data:l.data.map(function(n){return n.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),a===null&&(a=Sn(),ce.updateQueue=a),a.memoCache=s,a=s.data[s.index],a===void 0)for(a=s.data[s.index]=Array(t),l=0;l<t;l++)a[l]=bt;return s.index++,a}function It(t,s){return typeof s=="function"?s(t):s}function qn(t){var s=Ue();return Sr(s,Te,t)}function Sr(t,s,a){var l=t.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}s.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{s=n.next;var p=c=null,T=null,B=s,U=!1;do{var P=B.lane&-536870913;if(P!==B.lane?(he&P)===P:(Kt&P)===P){var A=B.revertLane;if(A===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),P===ya&&(U=!0);else if((Kt&A)===A){B=B.next,A===ya&&(U=!0);continue}else P={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},T===null?(p=T=P,c=i):T=T.next=P,ce.lanes|=A,Ss|=A;P=B.action,Ws&&a(i,P),i=B.hasEagerState?B.eagerState:a(i,P)}else A={lane:P,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},T===null?(p=T=A,c=i):T=T.next=A,ce.lanes|=P,Ss|=P;B=B.next}while(B!==null&&B!==s);if(T===null?c=i:T.next=p,!ut(i,t.memoizedState)&&(Pe=!0,U&&(a=ga,a!==null)))throw a;t.memoizedState=i,t.baseState=c,t.baseQueue=T,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Tr(t){var s=Ue(),a=s.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=s.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=t(i,c.action),c=c.next;while(c!==n);ut(i,s.memoizedState)||(Pe=!0),s.memoizedState=i,s.baseQueue===null&&(s.baseState=i),a.lastRenderedState=i}return[i,l]}function gd(t,s,a){var l=ce,n=Ue(),i=fe;if(i){if(a===void 0)throw Error(d(407));a=a()}else a=s();var c=!ut((Te||n).memoizedState,a);if(c&&(n.memoizedState=a,Pe=!0),n=n.queue,Rr(Td.bind(null,l,n,t),[t]),n.getSnapshot!==s||c||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,Ra(9,{destroy:void 0},Sd.bind(null,l,n,a,s),null),Ee===null)throw Error(d(349));i||(Kt&127)!==0||Nd(l,s,a)}return a}function Nd(t,s,a){t.flags|=16384,t={getSnapshot:s,value:a},s=ce.updateQueue,s===null?(s=Sn(),ce.updateQueue=s,s.stores=[t]):(a=s.stores,a===null?s.stores=[t]:a.push(t))}function Sd(t,s,a,l){s.value=a,s.getSnapshot=l,qd(s)&&Cd(t)}function Td(t,s,a){return a(function(){qd(s)&&Cd(t)})}function qd(t){var s=t.getSnapshot;t=t.value;try{var a=s();return!ut(t,a)}catch{return!0}}function Cd(t){var s=Gs(t,2);s!==null&&rt(s,t,2)}function qr(t){var s=$e();if(typeof t=="function"){var a=t;if(t=a(),Ws){os(!0);try{a()}finally{os(!1)}}}return s.memoizedState=s.baseState=t,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:t},s}function Rd(t,s,a,l){return t.baseState=a,Sr(t,Te,typeof l=="function"?l:It)}function lx(t,s,a,l,n){if(En(t))throw Error(d(485));if(t=s.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};M.T!==null?a(!0):i.isTransition=!1,l(i),a=s.pending,a===null?(i.next=s.pending=i,Ed(s,i)):(i.next=a.next,s.pending=a.next=i)}}function Ed(t,s){var a=s.action,l=s.payload,n=t.state;if(s.isTransition){var i=M.T,c={};M.T=c;try{var p=a(n,l),T=M.S;T!==null&&T(c,p),_d(t,s,p)}catch(B){Cr(t,s,B)}finally{i!==null&&c.types!==null&&(i.types=c.types),M.T=i}}else try{i=a(n,l),_d(t,s,i)}catch(B){Cr(t,s,B)}}function _d(t,s,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){kd(t,s,l)},function(l){return Cr(t,s,l)}):kd(t,s,a)}function kd(t,s,a){s.status="fulfilled",s.value=a,Bd(s),t.state=a,s=t.pending,s!==null&&(a=s.next,a===s?t.pending=null:(a=a.next,s.next=a,Ed(t,a)))}function Cr(t,s,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do s.status="rejected",s.reason=a,Bd(s),s=s.next;while(s!==l)}t.action=null}function Bd(t){t=t.listeners;for(var s=0;s<t.length;s++)(0,t[s])()}function Hd(t,s){return s}function Ad(t,s){if(fe){var a=Ee.formState;if(a!==null){e:{var l=ce;if(fe){if(_e){t:{for(var n=_e,i=qt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Rt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){_e=Rt(n.nextSibling),l=n.data==="F!";break e}}ms(l)}l=!1}l&&(s=a[0])}}return a=$e(),a.memoizedState=a.baseState=s,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hd,lastRenderedState:s},a.queue=l,a=Fd.bind(null,ce,l),l.dispatch=a,l=qr(!1),i=Hr.bind(null,ce,!1,l.queue),l=$e(),n={state:s,dispatch:null,action:t,pending:null},l.queue=n,a=lx.bind(null,ce,n,i,a),n.dispatch=a,l.memoizedState=t,[s,a,!1]}function Od(t){var s=Ue();return zd(s,Te,t)}function zd(t,s,a){if(s=Sr(t,s,Hd)[0],t=qn(It)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var l=hl(s)}catch(c){throw c===Na?xn:c}else l=s;s=Ue();var n=s.queue,i=n.dispatch;return a!==s.memoizedState&&(ce.flags|=2048,Ra(9,{destroy:void 0},nx.bind(null,n,a),null)),[l,i,t]}function nx(t,s){t.action=s}function wd(t){var s=Ue(),a=Te;if(a!==null)return zd(s,a,t);Ue(),s=s.memoizedState,a=Ue();var l=a.queue.dispatch;return a.memoizedState=t,[s,l,!1]}function Ra(t,s,a,l){return t={tag:t,create:a,deps:l,inst:s,next:null},s=ce.updateQueue,s===null&&(s=Sn(),ce.updateQueue=s),a=s.lastEffect,a===null?s.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,s.lastEffect=t),t}function Dd(){return Ue().memoizedState}function Cn(t,s,a,l){var n=$e();ce.flags|=t,n.memoizedState=Ra(1|s,{destroy:void 0},a,l===void 0?null:l)}function Rn(t,s,a,l){var n=Ue();l=l===void 0?null:l;var i=n.memoizedState.inst;Te!==null&&l!==null&&jr(l,Te.memoizedState.deps)?n.memoizedState=Ra(s,i,a,l):(ce.flags|=t,n.memoizedState=Ra(1|s,i,a,l))}function Ud(t,s){Cn(8390656,8,t,s)}function Rr(t,s){Rn(2048,8,t,s)}function ix(t){ce.flags|=4;var s=ce.updateQueue;if(s===null)s=Sn(),ce.updateQueue=s,s.events=[t];else{var a=s.events;a===null?s.events=[t]:a.push(t)}}function Md(t){var s=Ue().memoizedState;return ix({ref:s,nextImpl:t}),function(){if((ve&2)!==0)throw Error(d(440));return s.impl.apply(void 0,arguments)}}function Ld(t,s){return Rn(4,2,t,s)}function Pd(t,s){return Rn(4,4,t,s)}function Gd(t,s){if(typeof s=="function"){t=t();var a=s(t);return function(){typeof a=="function"?a():s(null)}}if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function Yd(t,s,a){a=a!=null?a.concat([t]):null,Rn(4,4,Gd.bind(null,s,t),a)}function Er(){}function Qd(t,s){var a=Ue();s=s===void 0?null:s;var l=a.memoizedState;return s!==null&&jr(s,l[1])?l[0]:(a.memoizedState=[t,s],t)}function Xd(t,s){var a=Ue();s=s===void 0?null:s;var l=a.memoizedState;if(s!==null&&jr(s,l[1]))return l[0];if(l=t(),Ws){os(!0);try{t()}finally{os(!1)}}return a.memoizedState=[l,s],l}function _r(t,s,a){return a===void 0||(Kt&1073741824)!==0&&(he&261930)===0?t.memoizedState=s:(t.memoizedState=a,t=Zu(),ce.lanes|=t,Ss|=t,a)}function Zd(t,s,a,l){return ut(a,s)?a:Ta.current!==null?(t=_r(t,a,l),ut(t,s)||(Pe=!0),t):(Kt&42)===0||(Kt&1073741824)!==0&&(he&261930)===0?(Pe=!0,t.memoizedState=a):(t=Zu(),ce.lanes|=t,Ss|=t,s)}function Jd(t,s,a,l,n){var i=Y.p;Y.p=i!==0&&8>i?i:8;var c=M.T,p={};M.T=p,Hr(t,!1,s,a);try{var T=n(),B=M.S;if(B!==null&&B(p,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var U=tx(T,l);ml(t,s,U,jt(t))}else ml(t,s,l,jt(t))}catch(P){ml(t,s,{then:function(){},status:"rejected",reason:P},jt())}finally{Y.p=i,c!==null&&p.types!==null&&(c.types=p.types),M.T=c}}function rx(){}function kr(t,s,a,l){if(t.tag!==5)throw Error(d(476));var n=Vd(t).queue;Jd(t,n,s,ae,a===null?rx:function(){return Kd(t),a(l)})}function Vd(t){var s=t.memoizedState;if(s!==null)return s;s={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:ae},next:null};var a={};return s.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:a},next:null},t.memoizedState=s,t=t.alternate,t!==null&&(t.memoizedState=s),s}function Kd(t){var s=Vd(t);s.next===null&&(s=t.alternate.memoizedState),ml(t,s.next.queue,{},jt())}function Br(){return Ve(Bl)}function Id(){return Ue().memoizedState}function Wd(){return Ue().memoizedState}function cx(t){for(var s=t.return;s!==null;){switch(s.tag){case 24:case 3:var a=jt();t=js(a);var l=bs(s,t,a);l!==null&&(rt(l,s,a),ol(l,s,a)),s={cache:ir()},t.payload=s;return}s=s.return}}function ox(t,s,a){var l=jt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},En(t)?$d(s,a):(a=Ki(t,s,a,l),a!==null&&(rt(a,t,l),eu(a,s,l)))}function Fd(t,s,a){var l=jt();ml(t,s,a,l)}function ml(t,s,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(En(t))$d(s,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=s.lastRenderedReducer,i!==null))try{var c=s.lastRenderedState,p=i(c,a);if(n.hasEagerState=!0,n.eagerState=p,ut(p,c))return cn(t,s,n,0),Ee===null&&rn(),!1}catch{}if(a=Ki(t,s,n,l),a!==null)return rt(a,t,l),eu(a,s,l),!0}return!1}function Hr(t,s,a,l){if(l={lane:2,revertLane:dc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},En(t)){if(s)throw Error(d(479))}else s=Ki(t,a,l,2),s!==null&&rt(s,t,2)}function En(t){var s=t.alternate;return t===ce||s!==null&&s===ce}function $d(t,s){qa=gn=!0;var a=t.pending;a===null?s.next=s:(s.next=a.next,a.next=s),t.pending=s}function eu(t,s,a){if((a&4194048)!==0){var l=s.lanes;l&=t.pendingLanes,a|=l,s.lanes=a,lo(t,a)}}var xl={readContext:Ve,use:Tn,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae};xl.useEffectEvent=Ae;var tu={readContext:Ve,use:Tn,useCallback:function(t,s){return $e().memoizedState=[t,s===void 0?null:s],t},useContext:Ve,useEffect:Ud,useImperativeHandle:function(t,s,a){a=a!=null?a.concat([t]):null,Cn(4194308,4,Gd.bind(null,s,t),a)},useLayoutEffect:function(t,s){return Cn(4194308,4,t,s)},useInsertionEffect:function(t,s){Cn(4,2,t,s)},useMemo:function(t,s){var a=$e();s=s===void 0?null:s;var l=t();if(Ws){os(!0);try{t()}finally{os(!1)}}return a.memoizedState=[l,s],l},useReducer:function(t,s,a){var l=$e();if(a!==void 0){var n=a(s);if(Ws){os(!0);try{a(s)}finally{os(!1)}}}else n=s;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=ox.bind(null,ce,t),[l.memoizedState,t]},useRef:function(t){var s=$e();return t={current:t},s.memoizedState=t},useState:function(t){t=qr(t);var s=t.queue,a=Fd.bind(null,ce,s);return s.dispatch=a,[t.memoizedState,a]},useDebugValue:Er,useDeferredValue:function(t,s){var a=$e();return _r(a,t,s)},useTransition:function(){var t=qr(!1);return t=Jd.bind(null,ce,t.queue,!0,!1),$e().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,s,a){var l=ce,n=$e();if(fe){if(a===void 0)throw Error(d(407));a=a()}else{if(a=s(),Ee===null)throw Error(d(349));(he&127)!==0||Nd(l,s,a)}n.memoizedState=a;var i={value:a,getSnapshot:s};return n.queue=i,Ud(Td.bind(null,l,i,t),[t]),l.flags|=2048,Ra(9,{destroy:void 0},Sd.bind(null,l,i,a,s),null),a},useId:function(){var t=$e(),s=Ee.identifierPrefix;if(fe){var a=Dt,l=wt;a=(l&~(1<<32-dt(l)-1)).toString(32)+a,s="_"+s+"R_"+a,a=Nn++,0<a&&(s+="H"+a.toString(32)),s+="_"}else a=sx++,s="_"+s+"r_"+a.toString(32)+"_";return t.memoizedState=s},useHostTransitionStatus:Br,useFormState:Ad,useActionState:Ad,useOptimistic:function(t){var s=$e();s.memoizedState=s.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=a,s=Hr.bind(null,ce,!0,a),a.dispatch=s,[t,s]},useMemoCache:Nr,useCacheRefresh:function(){return $e().memoizedState=cx.bind(null,ce)},useEffectEvent:function(t){var s=$e(),a={impl:t};return s.memoizedState=a,function(){if((ve&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},Ar={readContext:Ve,use:Tn,useCallback:Qd,useContext:Ve,useEffect:Rr,useImperativeHandle:Yd,useInsertionEffect:Ld,useLayoutEffect:Pd,useMemo:Xd,useReducer:qn,useRef:Dd,useState:function(){return qn(It)},useDebugValue:Er,useDeferredValue:function(t,s){var a=Ue();return Zd(a,Te.memoizedState,t,s)},useTransition:function(){var t=qn(It)[0],s=Ue().memoizedState;return[typeof t=="boolean"?t:hl(t),s]},useSyncExternalStore:gd,useId:Id,useHostTransitionStatus:Br,useFormState:Od,useActionState:Od,useOptimistic:function(t,s){var a=Ue();return Rd(a,Te,t,s)},useMemoCache:Nr,useCacheRefresh:Wd};Ar.useEffectEvent=Md;var su={readContext:Ve,use:Tn,useCallback:Qd,useContext:Ve,useEffect:Rr,useImperativeHandle:Yd,useInsertionEffect:Ld,useLayoutEffect:Pd,useMemo:Xd,useReducer:Tr,useRef:Dd,useState:function(){return Tr(It)},useDebugValue:Er,useDeferredValue:function(t,s){var a=Ue();return Te===null?_r(a,t,s):Zd(a,Te.memoizedState,t,s)},useTransition:function(){var t=Tr(It)[0],s=Ue().memoizedState;return[typeof t=="boolean"?t:hl(t),s]},useSyncExternalStore:gd,useId:Id,useHostTransitionStatus:Br,useFormState:wd,useActionState:wd,useOptimistic:function(t,s){var a=Ue();return Te!==null?Rd(a,Te,t,s):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nr,useCacheRefresh:Wd};su.useEffectEvent=Md;function Or(t,s,a,l){s=t.memoizedState,a=a(l,s),a=a==null?s:q({},s,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var zr={enqueueSetState:function(t,s,a){t=t._reactInternals;var l=jt(),n=js(l);n.payload=s,a!=null&&(n.callback=a),s=bs(t,n,l),s!==null&&(rt(s,t,l),ol(s,t,l))},enqueueReplaceState:function(t,s,a){t=t._reactInternals;var l=jt(),n=js(l);n.tag=1,n.payload=s,a!=null&&(n.callback=a),s=bs(t,n,l),s!==null&&(rt(s,t,l),ol(s,t,l))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var a=jt(),l=js(a);l.tag=2,s!=null&&(l.callback=s),s=bs(t,l,a),s!==null&&(rt(s,t,a),ol(s,t,a))}};function au(t,s,a,l,n,i,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,c):s.prototype&&s.prototype.isPureReactComponent?!tl(a,l)||!tl(n,i):!0}function lu(t,s,a,l){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,l),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,l),s.state!==t&&zr.enqueueReplaceState(s,s.state,null)}function Fs(t,s){var a=s;if("ref"in s){a={};for(var l in s)l!=="ref"&&(a[l]=s[l])}if(t=t.defaultProps){a===s&&(a=q({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function nu(t){nn(t)}function iu(t){console.error(t)}function ru(t){nn(t)}function _n(t,s){try{var a=t.onUncaughtError;a(s.value,{componentStack:s.stack})}catch(l){setTimeout(function(){throw l})}}function cu(t,s,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function wr(t,s,a){return a=js(a),a.tag=3,a.payload={element:null},a.callback=function(){_n(t,s)},a}function ou(t){return t=js(t),t.tag=3,t}function du(t,s,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){cu(s,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){cu(s,a,l),typeof n!="function"&&(Ts===null?Ts=new Set([this]):Ts.add(this));var p=l.stack;this.componentDidCatch(l.value,{componentStack:p!==null?p:""})})}function dx(t,s,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(s=a.alternate,s!==null&&va(s,a,n,!0),a=ht.current,a!==null){switch(a.tag){case 31:case 13:return Ct===null?Pn():a.alternate===null&&Oe===0&&(Oe=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===fn?a.flags|=16384:(s=a.updateQueue,s===null?a.updateQueue=new Set([l]):s.add(l),rc(t,l,n)),!1;case 22:return a.flags|=65536,l===fn?a.flags|=16384:(s=a.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=s):(a=s.retryQueue,a===null?s.retryQueue=new Set([l]):a.add(l)),rc(t,l,n)),!1}throw Error(d(435,a.tag))}return rc(t,l,n),Pn(),!1}if(fe)return s=ht.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=n,l!==tr&&(t=Error(d(422),{cause:l}),ll(Nt(t,a)))):(l!==tr&&(s=Error(d(423),{cause:l}),ll(Nt(s,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=Nt(l,a),n=wr(t.stateNode,l,n),pr(t,n),Oe!==4&&(Oe=2)),!1;var i=Error(d(520),{cause:l});if(i=Nt(i,a),Sl===null?Sl=[i]:Sl.push(i),Oe!==4&&(Oe=2),s===null)return!0;l=Nt(l,a),a=s;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=wr(a.stateNode,l,t),pr(a,t),!1;case 1:if(s=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ts===null||!Ts.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=ou(n),du(n,t,a,l),pr(a,n),!1}a=a.return}while(a!==null);return!1}var Dr=Error(d(461)),Pe=!1;function Ke(t,s,a,l){s.child=t===null?md(s,null,a,l):Is(s,t.child,a,l)}function uu(t,s,a,l,n){a=a.render;var i=s.ref;if("ref"in l){var c={};for(var p in l)p!=="ref"&&(c[p]=l[p])}else c=l;return Zs(s),l=br(t,s,a,c,i,n),p=vr(),t!==null&&!Pe?(yr(t,s,n),Wt(t,s,n)):(fe&&p&&$i(s),s.flags|=1,Ke(t,s,l,n),s.child)}function pu(t,s,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Ii(i)&&i.defaultProps===void 0&&a.compare===null?(s.tag=15,s.type=i,hu(t,s,i,l,n)):(t=dn(a.type,null,l,s,s.mode,n),t.ref=s.ref,t.return=s,s.child=t)}if(i=t.child,!Xr(t,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:tl,a(c,l)&&t.ref===s.ref)return Wt(t,s,n)}return s.flags|=1,t=Xt(i,l),t.ref=s.ref,t.return=s,s.child=t}function hu(t,s,a,l,n){if(t!==null){var i=t.memoizedProps;if(tl(i,l)&&t.ref===s.ref)if(Pe=!1,s.pendingProps=l=i,Xr(t,n))(t.flags&131072)!==0&&(Pe=!0);else return s.lanes=t.lanes,Wt(t,s,n)}return Ur(t,s,a,l,n)}function mu(t,s,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((s.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=s.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,s.child=null;return xu(t,s,i,a,l)}if((a&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},t!==null&&mn(s,i!==null?i.cachePool:null),i!==null?jd(s,i):mr(),bd(s);else return l=s.lanes=536870912,xu(t,s,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(mn(s,i.cachePool),jd(s,i),ys(),s.memoizedState=null):(t!==null&&mn(s,null),mr(),ys());return Ke(t,s,n,a),s.child}function fl(t,s){return t!==null&&t.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function xu(t,s,a,l,n){var i=cr();return i=i===null?null:{parent:Me._currentValue,pool:i},s.memoizedState={baseLanes:a,cachePool:i},t!==null&&mn(s,null),mr(),bd(s),t!==null&&va(t,s,l,!0),s.childLanes=n,null}function kn(t,s){return s=Hn({mode:s.mode,children:s.children},t.mode),s.ref=t.ref,t.child=s,s.return=t,s}function fu(t,s,a){return Is(s,t.child,null,a),t=kn(s,s.pendingProps),t.flags|=2,mt(s),s.memoizedState=null,t}function ux(t,s,a){var l=s.pendingProps,n=(s.flags&128)!==0;if(s.flags&=-129,t===null){if(fe){if(l.mode==="hidden")return t=kn(s,l),s.lanes=536870912,fl(null,t);if(fr(s),(t=_e)?(t=Ep(t,qt),t=t!==null&&t.data==="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:ps!==null?{id:wt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=$o(t),a.return=s,s.child=a,Je=s,_e=null)):t=null,t===null)throw ms(s);return s.lanes=536870912,null}return kn(s,l)}var i=t.memoizedState;if(i!==null){var c=i.dehydrated;if(fr(s),n)if(s.flags&256)s.flags&=-257,s=fu(t,s,a);else if(s.memoizedState!==null)s.child=t.child,s.flags|=128,s=null;else throw Error(d(558));else if(Pe||va(t,s,a,!1),n=(a&t.childLanes)!==0,Pe||n){if(l=Ee,l!==null&&(c=no(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,Gs(t,c),rt(l,t,c),Dr;Pn(),s=fu(t,s,a)}else t=i.treeContext,_e=Rt(c.nextSibling),Je=s,fe=!0,hs=null,qt=!1,t!==null&&sd(s,t),s=kn(s,l),s.flags|=4096;return s}return t=Xt(t.child,{mode:l.mode,children:l.children}),t.ref=s.ref,s.child=t,t.return=s,t}function Bn(t,s){var a=s.ref;if(a===null)t!==null&&t.ref!==null&&(s.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(t===null||t.ref!==a)&&(s.flags|=4194816)}}function Ur(t,s,a,l,n){return Zs(s),a=br(t,s,a,l,void 0,n),l=vr(),t!==null&&!Pe?(yr(t,s,n),Wt(t,s,n)):(fe&&l&&$i(s),s.flags|=1,Ke(t,s,a,n),s.child)}function ju(t,s,a,l,n,i){return Zs(s),s.updateQueue=null,a=yd(s,l,a,n),vd(t),l=vr(),t!==null&&!Pe?(yr(t,s,i),Wt(t,s,i)):(fe&&l&&$i(s),s.flags|=1,Ke(t,s,a,i),s.child)}function bu(t,s,a,l,n){if(Zs(s),s.stateNode===null){var i=xa,c=a.contextType;typeof c=="object"&&c!==null&&(i=Ve(c)),i=new a(l,i),s.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zr,s.stateNode=i,i._reactInternals=s,i=s.stateNode,i.props=l,i.state=s.memoizedState,i.refs={},dr(s),c=a.contextType,i.context=typeof c=="object"&&c!==null?Ve(c):xa,i.state=s.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Or(s,a,c,l),i.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&zr.enqueueReplaceState(i,i.state,null),ul(s,l,i,n),dl(),i.state=s.memoizedState),typeof i.componentDidMount=="function"&&(s.flags|=4194308),l=!0}else if(t===null){i=s.stateNode;var p=s.memoizedProps,T=Fs(a,p);i.props=T;var B=i.context,U=a.contextType;c=xa,typeof U=="object"&&U!==null&&(c=Ve(U));var P=a.getDerivedStateFromProps;U=typeof P=="function"||typeof i.getSnapshotBeforeUpdate=="function",p=s.pendingProps!==p,U||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(p||B!==c)&&lu(s,i,l,c),fs=!1;var A=s.memoizedState;i.state=A,ul(s,l,i,n),dl(),B=s.memoizedState,p||A!==B||fs?(typeof P=="function"&&(Or(s,a,P,l),B=s.memoizedState),(T=fs||au(s,a,T,l,A,B,c))?(U||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(s.flags|=4194308)):(typeof i.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=l,s.memoizedState=B),i.props=l,i.state=B,i.context=c,l=T):(typeof i.componentDidMount=="function"&&(s.flags|=4194308),l=!1)}else{i=s.stateNode,ur(t,s),c=s.memoizedProps,U=Fs(a,c),i.props=U,P=s.pendingProps,A=i.context,B=a.contextType,T=xa,typeof B=="object"&&B!==null&&(T=Ve(B)),p=a.getDerivedStateFromProps,(B=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==P||A!==T)&&lu(s,i,l,T),fs=!1,A=s.memoizedState,i.state=A,ul(s,l,i,n),dl();var D=s.memoizedState;c!==P||A!==D||fs||t!==null&&t.dependencies!==null&&pn(t.dependencies)?(typeof p=="function"&&(Or(s,a,p,l),D=s.memoizedState),(U=fs||au(s,a,U,l,A,D,T)||t!==null&&t.dependencies!==null&&pn(t.dependencies))?(B||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,D,T),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,D,T)),typeof i.componentDidUpdate=="function"&&(s.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(s.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(s.flags|=1024),s.memoizedProps=l,s.memoizedState=D),i.props=l,i.state=D,i.context=T,l=U):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(s.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(s.flags|=1024),l=!1)}return i=l,Bn(t,s),l=(s.flags&128)!==0,i||l?(i=s.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),s.flags|=1,t!==null&&l?(s.child=Is(s,t.child,null,n),s.child=Is(s,null,a,n)):Ke(t,s,a,n),s.memoizedState=i.state,t=s.child):t=Wt(t,s,n),t}function vu(t,s,a,l){return Qs(),s.flags|=256,Ke(t,s,a,l),s.child}var Mr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lr(t){return{baseLanes:t,cachePool:cd()}}function Pr(t,s,a){return t=t!==null?t.childLanes&~a:0,s&&(t|=ft),t}function yu(t,s,a){var l=s.pendingProps,n=!1,i=(s.flags&128)!==0,c;if((c=i)||(c=t!==null&&t.memoizedState===null?!1:(De.current&2)!==0),c&&(n=!0,s.flags&=-129),c=(s.flags&32)!==0,s.flags&=-33,t===null){if(fe){if(n?vs(s):ys(),(t=_e)?(t=Ep(t,qt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:ps!==null?{id:wt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=$o(t),a.return=s,s.child=a,Je=s,_e=null)):t=null,t===null)throw ms(s);return Sc(t)?s.lanes=32:s.lanes=536870912,null}var p=l.children;return l=l.fallback,n?(ys(),n=s.mode,p=Hn({mode:"hidden",children:p},n),l=Ys(l,n,a,null),p.return=s,l.return=s,p.sibling=l,s.child=p,l=s.child,l.memoizedState=Lr(a),l.childLanes=Pr(t,c,a),s.memoizedState=Mr,fl(null,l)):(vs(s),Gr(s,p))}var T=t.memoizedState;if(T!==null&&(p=T.dehydrated,p!==null)){if(i)s.flags&256?(vs(s),s.flags&=-257,s=Yr(t,s,a)):s.memoizedState!==null?(ys(),s.child=t.child,s.flags|=128,s=null):(ys(),p=l.fallback,n=s.mode,l=Hn({mode:"visible",children:l.children},n),p=Ys(p,n,a,null),p.flags|=2,l.return=s,p.return=s,l.sibling=p,s.child=l,Is(s,t.child,null,a),l=s.child,l.memoizedState=Lr(a),l.childLanes=Pr(t,c,a),s.memoizedState=Mr,s=fl(null,l));else if(vs(s),Sc(p)){if(c=p.nextSibling&&p.nextSibling.dataset,c)var B=c.dgst;c=B,l=Error(d(419)),l.stack="",l.digest=c,ll({value:l,source:null,stack:null}),s=Yr(t,s,a)}else if(Pe||va(t,s,a,!1),c=(a&t.childLanes)!==0,Pe||c){if(c=Ee,c!==null&&(l=no(c,a),l!==0&&l!==T.retryLane))throw T.retryLane=l,Gs(t,l),rt(c,t,l),Dr;Nc(p)||Pn(),s=Yr(t,s,a)}else Nc(p)?(s.flags|=192,s.child=t.child,s=null):(t=T.treeContext,_e=Rt(p.nextSibling),Je=s,fe=!0,hs=null,qt=!1,t!==null&&sd(s,t),s=Gr(s,l.children),s.flags|=4096);return s}return n?(ys(),p=l.fallback,n=s.mode,T=t.child,B=T.sibling,l=Xt(T,{mode:"hidden",children:l.children}),l.subtreeFlags=T.subtreeFlags&65011712,B!==null?p=Xt(B,p):(p=Ys(p,n,a,null),p.flags|=2),p.return=s,l.return=s,l.sibling=p,s.child=l,fl(null,l),l=s.child,p=t.child.memoizedState,p===null?p=Lr(a):(n=p.cachePool,n!==null?(T=Me._currentValue,n=n.parent!==T?{parent:T,pool:T}:n):n=cd(),p={baseLanes:p.baseLanes|a,cachePool:n}),l.memoizedState=p,l.childLanes=Pr(t,c,a),s.memoizedState=Mr,fl(t.child,l)):(vs(s),a=t.child,t=a.sibling,a=Xt(a,{mode:"visible",children:l.children}),a.return=s,a.sibling=null,t!==null&&(c=s.deletions,c===null?(s.deletions=[t],s.flags|=16):c.push(t)),s.child=a,s.memoizedState=null,a)}function Gr(t,s){return s=Hn({mode:"visible",children:s},t.mode),s.return=t,t.child=s}function Hn(t,s){return t=pt(22,t,null,s),t.lanes=0,t}function Yr(t,s,a){return Is(s,t.child,null,a),t=Gr(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function gu(t,s,a){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s),lr(t.return,s,a)}function Qr(t,s,a,l,n,i){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=s,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function Nu(t,s,a){var l=s.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=De.current,p=(c&2)!==0;if(p?(c=c&1|2,s.flags|=128):c&=1,Q(De,c),Ke(t,s,l,a),l=fe?al:0,!p&&t!==null&&(t.flags&128)!==0)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gu(t,a,s);else if(t.tag===19)gu(t,a,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=s.child,n=null;a!==null;)t=a.alternate,t!==null&&yn(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=s.child,s.child=null):(n=a.sibling,a.sibling=null),Qr(s,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=s.child,s.child=null;n!==null;){if(t=n.alternate,t!==null&&yn(t)===null){s.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Qr(s,!0,a,null,i,l);break;case"together":Qr(s,!1,null,null,void 0,l);break;default:s.memoizedState=null}return s.child}function Wt(t,s,a){if(t!==null&&(s.dependencies=t.dependencies),Ss|=s.lanes,(a&s.childLanes)===0)if(t!==null){if(va(t,s,a,!1),(a&s.childLanes)===0)return null}else return null;if(t!==null&&s.child!==t.child)throw Error(d(153));if(s.child!==null){for(t=s.child,a=Xt(t,t.pendingProps),s.child=a,a.return=s;t.sibling!==null;)t=t.sibling,a=a.sibling=Xt(t,t.pendingProps),a.return=s;a.sibling=null}return s.child}function Xr(t,s){return(t.lanes&s)!==0?!0:(t=t.dependencies,!!(t!==null&&pn(t)))}function px(t,s,a){switch(s.tag){case 3:Fe(s,s.stateNode.containerInfo),xs(s,Me,t.memoizedState.cache),Qs();break;case 27:case 5:Ga(s);break;case 4:Fe(s,s.stateNode.containerInfo);break;case 10:xs(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,fr(s),null;break;case 13:var l=s.memoizedState;if(l!==null)return l.dehydrated!==null?(vs(s),s.flags|=128,null):(a&s.child.childLanes)!==0?yu(t,s,a):(vs(s),t=Wt(t,s,a),t!==null?t.sibling:null);vs(s);break;case 19:var n=(t.flags&128)!==0;if(l=(a&s.childLanes)!==0,l||(va(t,s,a,!1),l=(a&s.childLanes)!==0),n){if(l)return Nu(t,s,a);s.flags|=128}if(n=s.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Q(De,De.current),l)break;return null;case 22:return s.lanes=0,mu(t,s,a,s.pendingProps);case 24:xs(s,Me,t.memoizedState.cache)}return Wt(t,s,a)}function Su(t,s,a){if(t!==null)if(t.memoizedProps!==s.pendingProps)Pe=!0;else{if(!Xr(t,a)&&(s.flags&128)===0)return Pe=!1,px(t,s,a);Pe=(t.flags&131072)!==0}else Pe=!1,fe&&(s.flags&1048576)!==0&&td(s,al,s.index);switch(s.lanes=0,s.tag){case 16:e:{var l=s.pendingProps;if(t=Vs(s.elementType),s.type=t,typeof t=="function")Ii(t)?(l=Fs(t,l),s.tag=1,s=bu(null,s,t,l,a)):(s.tag=0,s=Ur(null,s,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===se){s.tag=11,s=uu(null,s,t,l,a);break e}else if(n===X){s.tag=14,s=pu(null,s,t,l,a);break e}}throw s=Pt(t)||t,Error(d(306,s,""))}}return s;case 0:return Ur(t,s,s.type,s.pendingProps,a);case 1:return l=s.type,n=Fs(l,s.pendingProps),bu(t,s,l,n,a);case 3:e:{if(Fe(s,s.stateNode.containerInfo),t===null)throw Error(d(387));l=s.pendingProps;var i=s.memoizedState;n=i.element,ur(t,s),ul(s,l,null,a);var c=s.memoizedState;if(l=c.cache,xs(s,Me,l),l!==i.cache&&nr(s,[Me],a,!0),dl(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},s.updateQueue.baseState=i,s.memoizedState=i,s.flags&256){s=vu(t,s,l,a);break e}else if(l!==n){n=Nt(Error(d(424)),s),ll(n),s=vu(t,s,l,a);break e}else for(t=s.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,_e=Rt(t.firstChild),Je=s,fe=!0,hs=null,qt=!0,a=md(s,null,l,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qs(),l===n){s=Wt(t,s,a);break e}Ke(t,s,l,a)}s=s.child}return s;case 26:return Bn(t,s),t===null?(a=Op(s.type,null,s.pendingProps,null))?s.memoizedState=a:fe||(a=s.type,t=s.pendingProps,l=Vn(de.current).createElement(a),l[Ze]=s,l[tt]=t,Ie(l,a,t),Qe(l),s.stateNode=l):s.memoizedState=Op(s.type,t.memoizedProps,s.pendingProps,t.memoizedState),null;case 27:return Ga(s),t===null&&fe&&(l=s.stateNode=Bp(s.type,s.pendingProps,de.current),Je=s,qt=!0,n=_e,Es(s.type)?(Tc=n,_e=Rt(l.firstChild)):_e=n),Ke(t,s,s.pendingProps.children,a),Bn(t,s),t===null&&(s.flags|=4194304),s.child;case 5:return t===null&&fe&&((n=l=_e)&&(l=Gx(l,s.type,s.pendingProps,qt),l!==null?(s.stateNode=l,Je=s,_e=Rt(l.firstChild),qt=!1,n=!0):n=!1),n||ms(s)),Ga(s),n=s.type,i=s.pendingProps,c=t!==null?t.memoizedProps:null,l=i.children,vc(n,i)?l=null:c!==null&&vc(n,c)&&(s.flags|=32),s.memoizedState!==null&&(n=br(t,s,ax,null,null,a),Bl._currentValue=n),Bn(t,s),Ke(t,s,l,a),s.child;case 6:return t===null&&fe&&((t=a=_e)&&(a=Yx(a,s.pendingProps,qt),a!==null?(s.stateNode=a,Je=s,_e=null,t=!0):t=!1),t||ms(s)),null;case 13:return yu(t,s,a);case 4:return Fe(s,s.stateNode.containerInfo),l=s.pendingProps,t===null?s.child=Is(s,null,l,a):Ke(t,s,l,a),s.child;case 11:return uu(t,s,s.type,s.pendingProps,a);case 7:return Ke(t,s,s.pendingProps,a),s.child;case 8:return Ke(t,s,s.pendingProps.children,a),s.child;case 12:return Ke(t,s,s.pendingProps.children,a),s.child;case 10:return l=s.pendingProps,xs(s,s.type,l.value),Ke(t,s,l.children,a),s.child;case 9:return n=s.type._context,l=s.pendingProps.children,Zs(s),n=Ve(n),l=l(n),s.flags|=1,Ke(t,s,l,a),s.child;case 14:return pu(t,s,s.type,s.pendingProps,a);case 15:return hu(t,s,s.type,s.pendingProps,a);case 19:return Nu(t,s,a);case 31:return ux(t,s,a);case 22:return mu(t,s,a,s.pendingProps);case 24:return Zs(s),l=Ve(Me),t===null?(n=cr(),n===null&&(n=Ee,i=ir(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),s.memoizedState={parent:l,cache:n},dr(s),xs(s,Me,n)):((t.lanes&a)!==0&&(ur(t,s),ul(s,null,null,a),dl()),n=t.memoizedState,i=s.memoizedState,n.parent!==l?(n={parent:l,cache:l},s.memoizedState=n,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=n),xs(s,Me,l)):(l=i.cache,xs(s,Me,l),l!==n.cache&&nr(s,[Me],a,!0))),Ke(t,s,s.pendingProps.children,a),s.child;case 29:throw s.pendingProps}throw Error(d(156,s.tag))}function Ft(t){t.flags|=4}function Zr(t,s,a,l,n){if((s=(t.mode&32)!==0)&&(s=!1),s){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Iu())t.flags|=8192;else throw Ks=fn,or}else t.flags&=-16777217}function Tu(t,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Mp(s))if(Iu())t.flags|=8192;else throw Ks=fn,or}function An(t,s){s!==null&&(t.flags|=4),t.flags&16384&&(s=t.tag!==22?so():536870912,t.lanes|=s,Ba|=s)}function jl(t,s){if(!fe)switch(t.tailMode){case"hidden":s=t.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ke(t){var s=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(s)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,s}function hx(t,s,a){var l=s.pendingProps;switch(er(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(s),null;case 1:return ke(s),null;case 3:return a=s.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),Vt(Me),we(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ba(s)?Ft(s):t===null||t.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,sr())),ke(s),null;case 26:var n=s.type,i=s.memoizedState;return t===null?(Ft(s),i!==null?(ke(s),Tu(s,i)):(ke(s),Zr(s,n,null,l,a))):i?i!==t.memoizedState?(Ft(s),ke(s),Tu(s,i)):(ke(s),s.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ft(s),ke(s),Zr(s,n,t,l,a)),null;case 27:if(Yl(s),a=de.current,n=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==l&&Ft(s);else{if(!l){if(s.stateNode===null)throw Error(d(166));return ke(s),null}t=I.current,ba(s)?ad(s):(t=Bp(n,l,a),s.stateNode=t,Ft(s))}return ke(s),null;case 5:if(Yl(s),n=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==l&&Ft(s);else{if(!l){if(s.stateNode===null)throw Error(d(166));return ke(s),null}if(i=I.current,ba(s))ad(s);else{var c=Vn(de.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[Ze]=s,i[tt]=l;e:for(c=s.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===s)break e;for(;c.sibling===null;){if(c.return===null||c.return===s)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}s.stateNode=i;e:switch(Ie(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ft(s)}}return ke(s),Zr(s,s.type,t===null?null:t.memoizedProps,s.pendingProps,a),null;case 6:if(t&&s.stateNode!=null)t.memoizedProps!==l&&Ft(s);else{if(typeof l!="string"&&s.stateNode===null)throw Error(d(166));if(t=de.current,ba(s)){if(t=s.stateNode,a=s.memoizedProps,l=null,n=Je,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[Ze]=s,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||yp(t.nodeValue,a)),t||ms(s,!0)}else t=Vn(t).createTextNode(l),t[Ze]=s,s.stateNode=t}return ke(s),null;case 31:if(a=s.memoizedState,t===null||t.memoizedState!==null){if(l=ba(s),a!==null){if(t===null){if(!l)throw Error(d(318));if(t=s.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(557));t[Ze]=s}else Qs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ke(s),t=!1}else a=sr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return s.flags&256?(mt(s),s):(mt(s),null);if((s.flags&128)!==0)throw Error(d(558))}return ke(s),null;case 13:if(l=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ba(s),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(d(318));if(n=s.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Ze]=s}else Qs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ke(s),n=!1}else n=sr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return s.flags&256?(mt(s),s):(mt(s),null)}return mt(s),(s.flags&128)!==0?(s.lanes=a,s):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=s.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(s.child.flags|=8192),An(s,s.updateQueue),ke(s),null);case 4:return we(),t===null&&mc(s.stateNode.containerInfo),ke(s),null;case 10:return Vt(s.type),ke(s),null;case 19:if(G(De),l=s.memoizedState,l===null)return ke(s),null;if(n=(s.flags&128)!==0,i=l.rendering,i===null)if(n)jl(l,!1);else{if(Oe!==0||t!==null&&(t.flags&128)!==0)for(t=s.child;t!==null;){if(i=yn(t),i!==null){for(s.flags|=128,jl(l,!1),t=i.updateQueue,s.updateQueue=t,An(s,t),s.subtreeFlags=0,t=a,a=s.child;a!==null;)Fo(a,t),a=a.sibling;return Q(De,De.current&1|2),fe&&Zt(s,l.treeForkCount),s.child}t=t.sibling}l.tail!==null&&ct()>Un&&(s.flags|=128,n=!0,jl(l,!1),s.lanes=4194304)}else{if(!n)if(t=yn(i),t!==null){if(s.flags|=128,n=!0,t=t.updateQueue,s.updateQueue=t,An(s,t),jl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!fe)return ke(s),null}else 2*ct()-l.renderingStartTime>Un&&a!==536870912&&(s.flags|=128,n=!0,jl(l,!1),s.lanes=4194304);l.isBackwards?(i.sibling=s.child,s.child=i):(t=l.last,t!==null?t.sibling=i:s.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ct(),t.sibling=null,a=De.current,Q(De,n?a&1|2:a&1),fe&&Zt(s,l.treeForkCount),t):(ke(s),null);case 22:case 23:return mt(s),xr(),l=s.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(s.flags|=8192):l&&(s.flags|=8192),l?(a&536870912)!==0&&(s.flags&128)===0&&(ke(s),s.subtreeFlags&6&&(s.flags|=8192)):ke(s),a=s.updateQueue,a!==null&&An(s,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),l!==a&&(s.flags|=2048),t!==null&&G(Js),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),s.memoizedState.cache!==a&&(s.flags|=2048),Vt(Me),ke(s),null;case 25:return null;case 30:return null}throw Error(d(156,s.tag))}function mx(t,s){switch(er(s),s.tag){case 1:return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return Vt(Me),we(),t=s.flags,(t&65536)!==0&&(t&128)===0?(s.flags=t&-65537|128,s):null;case 26:case 27:case 5:return Yl(s),null;case 31:if(s.memoizedState!==null){if(mt(s),s.alternate===null)throw Error(d(340));Qs()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 13:if(mt(s),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(d(340));Qs()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return G(De),null;case 4:return we(),null;case 10:return Vt(s.type),null;case 22:case 23:return mt(s),xr(),t!==null&&G(Js),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 24:return Vt(Me),null;case 25:return null;default:return null}}function qu(t,s){switch(er(s),s.tag){case 3:Vt(Me),we();break;case 26:case 27:case 5:Yl(s);break;case 4:we();break;case 31:s.memoizedState!==null&&mt(s);break;case 13:mt(s);break;case 19:G(De);break;case 10:Vt(s.type);break;case 22:case 23:mt(s),xr(),t!==null&&G(Js);break;case 24:Vt(Me)}}function bl(t,s){try{var a=s.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(p){Ne(s,s.return,p)}}function gs(t,s,a){try{var l=s.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var c=l.inst,p=c.destroy;if(p!==void 0){c.destroy=void 0,n=s;var T=a,B=p;try{B()}catch(U){Ne(n,T,U)}}}l=l.next}while(l!==i)}}catch(U){Ne(s,s.return,U)}}function Cu(t){var s=t.updateQueue;if(s!==null){var a=t.stateNode;try{fd(s,a)}catch(l){Ne(t,t.return,l)}}}function Ru(t,s,a){a.props=Fs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ne(t,s,l)}}function vl(t,s){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){Ne(t,s,n)}}function Ut(t,s){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Ne(t,s,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ne(t,s,n)}else a.current=null}function Eu(t){var s=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Ne(t,t.return,n)}}function Jr(t,s,a){try{var l=t.stateNode;wx(l,t.type,a,s),l[tt]=s}catch(n){Ne(t,t.return,n)}}function _u(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Es(t.type)||t.tag===4}function Vr(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_u(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Es(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kr(t,s,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,s?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,s):(s=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,s.appendChild(t),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Yt));else if(l!==4&&(l===27&&Es(t.type)&&(a=t.stateNode,s=null),t=t.child,t!==null))for(Kr(t,s,a),t=t.sibling;t!==null;)Kr(t,s,a),t=t.sibling}function On(t,s,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,s?a.insertBefore(t,s):a.appendChild(t);else if(l!==4&&(l===27&&Es(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(On(t,s,a),t=t.sibling;t!==null;)On(t,s,a),t=t.sibling}function ku(t){var s=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=s.attributes;n.length;)s.removeAttributeNode(n[0]);Ie(s,l,a),s[Ze]=t,s[tt]=a}catch(i){Ne(t,t.return,i)}}var $t=!1,Ge=!1,Ir=!1,Bu=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function xx(t,s){if(t=t.containerInfo,jc=ti,t=Yo(t),Yi(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,p=-1,T=-1,B=0,U=0,P=t,A=null;t:for(;;){for(var D;P!==a||n!==0&&P.nodeType!==3||(p=c+n),P!==i||l!==0&&P.nodeType!==3||(T=c+l),P.nodeType===3&&(c+=P.nodeValue.length),(D=P.firstChild)!==null;)A=P,P=D;for(;;){if(P===t)break t;if(A===a&&++B===n&&(p=c),A===i&&++U===l&&(T=c),(D=P.nextSibling)!==null)break;P=A,A=P.parentNode}P=D}a=p===-1||T===-1?null:{start:p,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(bc={focusedElem:t,selectionRange:a},ti=!1,Xe=s;Xe!==null;)if(s=Xe,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,Xe=t;else for(;Xe!==null;){switch(s=Xe,i=s.alternate,t=s.flags,s.tag){case 0:if((t&4)!==0&&(t=s.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=s,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var K=Fs(a.type,n);t=l.getSnapshotBeforeUpdate(K,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(te){Ne(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=s.stateNode.containerInfo,a=t.nodeType,a===9)gc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":gc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(d(163))}if(t=s.sibling,t!==null){t.return=s.return,Xe=t;break}Xe=s.return}}function Hu(t,s,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ts(t,a),l&4&&bl(5,a);break;case 1:if(ts(t,a),l&4)if(t=a.stateNode,s===null)try{t.componentDidMount()}catch(c){Ne(a,a.return,c)}else{var n=Fs(a.type,s.memoizedProps);s=s.memoizedState;try{t.componentDidUpdate(n,s,t.__reactInternalSnapshotBeforeUpdate)}catch(c){Ne(a,a.return,c)}}l&64&&Cu(a),l&512&&vl(a,a.return);break;case 3:if(ts(t,a),l&64&&(t=a.updateQueue,t!==null)){if(s=null,a.child!==null)switch(a.child.tag){case 27:case 5:s=a.child.stateNode;break;case 1:s=a.child.stateNode}try{fd(t,s)}catch(c){Ne(a,a.return,c)}}break;case 27:s===null&&l&4&&ku(a);case 26:case 5:ts(t,a),s===null&&l&4&&Eu(a),l&512&&vl(a,a.return);break;case 12:ts(t,a);break;case 31:ts(t,a),l&4&&zu(t,a);break;case 13:ts(t,a),l&4&&wu(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Tx.bind(null,a),Qx(t,a))));break;case 22:if(l=a.memoizedState!==null||$t,!l){s=s!==null&&s.memoizedState!==null||Ge,n=$t;var i=Ge;$t=l,(Ge=s)&&!i?ss(t,a,(a.subtreeFlags&8772)!==0):ts(t,a),$t=n,Ge=i}break;case 30:break;default:ts(t,a)}}function Au(t){var s=t.alternate;s!==null&&(t.alternate=null,Au(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&Ci(s)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Be=null,at=!1;function es(t,s,a){for(a=a.child;a!==null;)Ou(t,s,a),a=a.sibling}function Ou(t,s,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ya,a)}catch{}switch(a.tag){case 26:Ge||Ut(a,s),es(t,s,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Ut(a,s);var l=Be,n=at;Es(a.type)&&(Be=a.stateNode,at=!1),es(t,s,a),El(a.stateNode),Be=l,at=n;break;case 5:Ge||Ut(a,s);case 6:if(l=Be,n=at,Be=null,es(t,s,a),Be=l,at=n,Be!==null)if(at)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(a.stateNode)}catch(i){Ne(a,s,i)}else try{Be.removeChild(a.stateNode)}catch(i){Ne(a,s,i)}break;case 18:Be!==null&&(at?(t=Be,Cp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ma(t)):Cp(Be,a.stateNode));break;case 4:l=Be,n=at,Be=a.stateNode.containerInfo,at=!0,es(t,s,a),Be=l,at=n;break;case 0:case 11:case 14:case 15:gs(2,a,s),Ge||gs(4,a,s),es(t,s,a);break;case 1:Ge||(Ut(a,s),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ru(a,s,l)),es(t,s,a);break;case 21:es(t,s,a);break;case 22:Ge=(l=Ge)||a.memoizedState!==null,es(t,s,a),Ge=l;break;default:es(t,s,a)}}function zu(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ma(t)}catch(a){Ne(s,s.return,a)}}}function wu(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ma(t)}catch(a){Ne(s,s.return,a)}}function fx(t){switch(t.tag){case 31:case 13:case 19:var s=t.stateNode;return s===null&&(s=t.stateNode=new Bu),s;case 22:return t=t.stateNode,s=t._retryCache,s===null&&(s=t._retryCache=new Bu),s;default:throw Error(d(435,t.tag))}}function zn(t,s){var a=fx(t);s.forEach(function(l){if(!a.has(l)){a.add(l);var n=qx.bind(null,t,l);l.then(n,n)}})}function lt(t,s){var a=s.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,c=s,p=c;e:for(;p!==null;){switch(p.tag){case 27:if(Es(p.type)){Be=p.stateNode,at=!1;break e}break;case 5:Be=p.stateNode,at=!1;break e;case 3:case 4:Be=p.stateNode.containerInfo,at=!0;break e}p=p.return}if(Be===null)throw Error(d(160));Ou(i,c,n),Be=null,at=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Du(s,t),s=s.sibling}var Ht=null;function Du(t,s){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:lt(s,t),nt(t),l&4&&(gs(3,t,t.return),bl(3,t),gs(5,t,t.return));break;case 1:lt(s,t),nt(t),l&512&&(Ge||a===null||Ut(a,a.return)),l&64&&$t&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ht;if(lt(s,t),nt(t),l&512&&(Ge||a===null||Ut(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Za]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ie(i,l,a),i[Ze]=t,Qe(i),l=i;break e;case"link":var c=Dp("link","href",n).get(l+(a.href||""));if(c){for(var p=0;p<c.length;p++)if(i=c[p],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(p,1);break t}}i=n.createElement(l),Ie(i,l,a),n.head.appendChild(i);break;case"meta":if(c=Dp("meta","content",n).get(l+(a.content||""))){for(p=0;p<c.length;p++)if(i=c[p],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(p,1);break t}}i=n.createElement(l),Ie(i,l,a),n.head.appendChild(i);break;default:throw Error(d(468,l))}i[Ze]=t,Qe(i),l=i}t.stateNode=l}else Up(n,t.type,t.stateNode);else t.stateNode=wp(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Up(n,t.type,t.stateNode):wp(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Jr(t,t.memoizedProps,a.memoizedProps)}break;case 27:lt(s,t),nt(t),l&512&&(Ge||a===null||Ut(a,a.return)),a!==null&&l&4&&Jr(t,t.memoizedProps,a.memoizedProps);break;case 5:if(lt(s,t),nt(t),l&512&&(Ge||a===null||Ut(a,a.return)),t.flags&32){n=t.stateNode;try{ca(n,"")}catch(K){Ne(t,t.return,K)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Jr(t,n,a!==null?a.memoizedProps:n)),l&1024&&(Ir=!0);break;case 6:if(lt(s,t),nt(t),l&4){if(t.stateNode===null)throw Error(d(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(K){Ne(t,t.return,K)}}break;case 3:if(Wn=null,n=Ht,Ht=Kn(s.containerInfo),lt(s,t),Ht=n,nt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ma(s.containerInfo)}catch(K){Ne(t,t.return,K)}Ir&&(Ir=!1,Uu(t));break;case 4:l=Ht,Ht=Kn(t.stateNode.containerInfo),lt(s,t),nt(t),Ht=l;break;case 12:lt(s,t),nt(t);break;case 31:lt(s,t),nt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,zn(t,l)));break;case 13:lt(s,t),nt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dn=ct()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,zn(t,l)));break;case 22:n=t.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,B=$t,U=Ge;if($t=B||n,Ge=U||T,lt(s,t),Ge=U,$t=B,nt(t),l&8192)e:for(s=t.stateNode,s._visibility=n?s._visibility&-2:s._visibility|1,n&&(a===null||T||$t||Ge||$s(t)),a=null,s=t;;){if(s.tag===5||s.tag===26){if(a===null){T=a=s;try{if(i=T.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{p=T.stateNode;var P=T.memoizedProps.style,A=P!=null&&P.hasOwnProperty("display")?P.display:null;p.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(K){Ne(T,T.return,K)}}}else if(s.tag===6){if(a===null){T=s;try{T.stateNode.nodeValue=n?"":T.memoizedProps}catch(K){Ne(T,T.return,K)}}}else if(s.tag===18){if(a===null){T=s;try{var D=T.stateNode;n?Rp(D,!0):Rp(T.stateNode,!1)}catch(K){Ne(T,T.return,K)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===t)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;a===s&&(a=null),s=s.return}a===s&&(a=null),s.sibling.return=s.return,s=s.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,zn(t,a))));break;case 19:lt(s,t),nt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,zn(t,l)));break;case 30:break;case 21:break;default:lt(s,t),nt(t)}}function nt(t){var s=t.flags;if(s&2){try{for(var a,l=t.return;l!==null;){if(_u(l)){a=l;break}l=l.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var n=a.stateNode,i=Vr(t);On(t,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(ca(c,""),a.flags&=-33);var p=Vr(t);On(t,p,c);break;case 3:case 4:var T=a.stateNode.containerInfo,B=Vr(t);Kr(t,B,T);break;default:throw Error(d(161))}}catch(U){Ne(t,t.return,U)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function Uu(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var s=t;Uu(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),t=t.sibling}}function ts(t,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Hu(t,s.alternate,s),s=s.sibling}function $s(t){for(t=t.child;t!==null;){var s=t;switch(s.tag){case 0:case 11:case 14:case 15:gs(4,s,s.return),$s(s);break;case 1:Ut(s,s.return);var a=s.stateNode;typeof a.componentWillUnmount=="function"&&Ru(s,s.return,a),$s(s);break;case 27:El(s.stateNode);case 26:case 5:Ut(s,s.return),$s(s);break;case 22:s.memoizedState===null&&$s(s);break;case 30:$s(s);break;default:$s(s)}t=t.sibling}}function ss(t,s,a){for(a=a&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var l=s.alternate,n=t,i=s,c=i.flags;switch(i.tag){case 0:case 11:case 15:ss(n,i,a),bl(4,i);break;case 1:if(ss(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(B){Ne(l,l.return,B)}if(l=i,n=l.updateQueue,n!==null){var p=l.stateNode;try{var T=n.shared.hiddenCallbacks;if(T!==null)for(n.shared.hiddenCallbacks=null,n=0;n<T.length;n++)xd(T[n],p)}catch(B){Ne(l,l.return,B)}}a&&c&64&&Cu(i),vl(i,i.return);break;case 27:ku(i);case 26:case 5:ss(n,i,a),a&&l===null&&c&4&&Eu(i),vl(i,i.return);break;case 12:ss(n,i,a);break;case 31:ss(n,i,a),a&&c&4&&zu(n,i);break;case 13:ss(n,i,a),a&&c&4&&wu(n,i);break;case 22:i.memoizedState===null&&ss(n,i,a),vl(i,i.return);break;case 30:break;default:ss(n,i,a)}s=s.sibling}}function Wr(t,s){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(t=s.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&nl(a))}function Fr(t,s){t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&nl(t))}function At(t,s,a,l){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Mu(t,s,a,l),s=s.sibling}function Mu(t,s,a,l){var n=s.flags;switch(s.tag){case 0:case 11:case 15:At(t,s,a,l),n&2048&&bl(9,s);break;case 1:At(t,s,a,l);break;case 3:At(t,s,a,l),n&2048&&(t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&nl(t)));break;case 12:if(n&2048){At(t,s,a,l),t=s.stateNode;try{var i=s.memoizedProps,c=i.id,p=i.onPostCommit;typeof p=="function"&&p(c,s.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(T){Ne(s,s.return,T)}}else At(t,s,a,l);break;case 31:At(t,s,a,l);break;case 13:At(t,s,a,l);break;case 23:break;case 22:i=s.stateNode,c=s.alternate,s.memoizedState!==null?i._visibility&2?At(t,s,a,l):yl(t,s):i._visibility&2?At(t,s,a,l):(i._visibility|=2,Ea(t,s,a,l,(s.subtreeFlags&10256)!==0||!1)),n&2048&&Wr(c,s);break;case 24:At(t,s,a,l),n&2048&&Fr(s.alternate,s);break;default:At(t,s,a,l)}}function Ea(t,s,a,l,n){for(n=n&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var i=t,c=s,p=a,T=l,B=c.flags;switch(c.tag){case 0:case 11:case 15:Ea(i,c,p,T,n),bl(8,c);break;case 23:break;case 22:var U=c.stateNode;c.memoizedState!==null?U._visibility&2?Ea(i,c,p,T,n):yl(i,c):(U._visibility|=2,Ea(i,c,p,T,n)),n&&B&2048&&Wr(c.alternate,c);break;case 24:Ea(i,c,p,T,n),n&&B&2048&&Fr(c.alternate,c);break;default:Ea(i,c,p,T,n)}s=s.sibling}}function yl(t,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var a=t,l=s,n=l.flags;switch(l.tag){case 22:yl(a,l),n&2048&&Wr(l.alternate,l);break;case 24:yl(a,l),n&2048&&Fr(l.alternate,l);break;default:yl(a,l)}s=s.sibling}}var gl=8192;function _a(t,s,a){if(t.subtreeFlags&gl)for(t=t.child;t!==null;)Lu(t,s,a),t=t.sibling}function Lu(t,s,a){switch(t.tag){case 26:_a(t,s,a),t.flags&gl&&t.memoizedState!==null&&sf(a,Ht,t.memoizedState,t.memoizedProps);break;case 5:_a(t,s,a);break;case 3:case 4:var l=Ht;Ht=Kn(t.stateNode.containerInfo),_a(t,s,a),Ht=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=gl,gl=16777216,_a(t,s,a),gl=l):_a(t,s,a));break;default:_a(t,s,a)}}function Pu(t){var s=t.alternate;if(s!==null&&(t=s.child,t!==null)){s.child=null;do s=t.sibling,t.sibling=null,t=s;while(t!==null)}}function Nl(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var l=s[a];Xe=l,Yu(l,t)}Pu(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gu(t),t=t.sibling}function Gu(t){switch(t.tag){case 0:case 11:case 15:Nl(t),t.flags&2048&&gs(9,t,t.return);break;case 3:Nl(t);break;case 12:Nl(t);break;case 22:var s=t.stateNode;t.memoizedState!==null&&s._visibility&2&&(t.return===null||t.return.tag!==13)?(s._visibility&=-3,wn(t)):Nl(t);break;default:Nl(t)}}function wn(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var l=s[a];Xe=l,Yu(l,t)}Pu(t)}for(t=t.child;t!==null;){switch(s=t,s.tag){case 0:case 11:case 15:gs(8,s,s.return),wn(s);break;case 22:a=s.stateNode,a._visibility&2&&(a._visibility&=-3,wn(s));break;default:wn(s)}t=t.sibling}}function Yu(t,s){for(;Xe!==null;){var a=Xe;switch(a.tag){case 0:case 11:case 15:gs(8,a,s);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:nl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Xe=l;else e:for(a=t;Xe!==null;){l=Xe;var n=l.sibling,i=l.return;if(Au(l),l===a){Xe=null;break e}if(n!==null){n.return=i,Xe=n;break e}Xe=i}}}var jx={getCacheForType:function(t){var s=Ve(Me),a=s.data.get(t);return a===void 0&&(a=t(),s.data.set(t,a)),a},cacheSignal:function(){return Ve(Me).controller.signal}},bx=typeof WeakMap=="function"?WeakMap:Map,ve=0,Ee=null,ue=null,he=0,ge=0,xt=null,Ns=!1,ka=!1,$r=!1,as=0,Oe=0,Ss=0,ea=0,ec=0,ft=0,Ba=0,Sl=null,it=null,tc=!1,Dn=0,Qu=0,Un=1/0,Mn=null,Ts=null,Ye=0,qs=null,Ha=null,ls=0,sc=0,ac=null,Xu=null,Tl=0,lc=null;function jt(){return(ve&2)!==0&&he!==0?he&-he:M.T!==null?dc():io()}function Zu(){if(ft===0)if((he&536870912)===0||fe){var t=Zl;Zl<<=1,(Zl&3932160)===0&&(Zl=262144),ft=t}else ft=536870912;return t=ht.current,t!==null&&(t.flags|=32),ft}function rt(t,s,a){(t===Ee&&(ge===2||ge===9)||t.cancelPendingCommit!==null)&&(Aa(t,0),Cs(t,he,ft,!1)),Xa(t,a),((ve&2)===0||t!==Ee)&&(t===Ee&&((ve&2)===0&&(ea|=a),Oe===4&&Cs(t,he,ft,!1)),Mt(t))}function Ju(t,s,a){if((ve&6)!==0)throw Error(d(327));var l=!a&&(s&127)===0&&(s&t.expiredLanes)===0||Qa(t,s),n=l?gx(t,s):ic(t,s,!0),i=l;do{if(n===0){ka&&!l&&Cs(t,s,0,!1);break}else{if(a=t.current.alternate,i&&!vx(a)){n=ic(t,s,!1),i=!1;continue}if(n===2){if(i=s,t.errorRecoveryDisabledLanes&i)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){s=c;e:{var p=t;n=Sl;var T=p.current.memoizedState.isDehydrated;if(T&&(Aa(p,c).flags|=256),c=ic(p,c,!1),c!==2){if($r&&!T){p.errorRecoveryDisabledLanes|=i,ea|=i,n=4;break e}i=it,it=n,i!==null&&(it===null?it=i:it.push.apply(it,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Aa(t,0),Cs(t,s,0,!0);break}e:{switch(l=t,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((s&4194048)!==s)break;case 6:Cs(l,s,ft,!Ns);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(d(329))}if((s&62914560)===s&&(n=Dn+300-ct(),10<n)){if(Cs(l,s,ft,!Ns),Vl(l,0,!0)!==0)break e;ls=s,l.timeoutHandle=Tp(Vu.bind(null,l,a,it,Mn,tc,s,ft,ea,Ba,Ns,i,"Throttled",-0,0),n);break e}Vu(l,a,it,Mn,tc,s,ft,ea,Ba,Ns,i,null,-0,0)}}break}while(!0);Mt(t)}function Vu(t,s,a,l,n,i,c,p,T,B,U,P,A,D){if(t.timeoutHandle=-1,P=s.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yt},Lu(s,i,P);var K=(i&62914560)===i?Dn-ct():(i&4194048)===i?Qu-ct():0;if(K=af(P,K),K!==null){ls=i,t.cancelPendingCommit=K(sp.bind(null,t,s,i,a,l,n,c,p,T,U,P,null,A,D)),Cs(t,i,c,!B);return}}sp(t,s,i,a,l,n,c,p,T)}function vx(t){for(var s=t;;){var a=s.tag;if((a===0||a===11||a===15)&&s.flags&16384&&(a=s.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ut(i(),n))return!1}catch{return!1}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Cs(t,s,a,l){s&=~ec,s&=~ea,t.suspendedLanes|=s,t.pingedLanes&=~s,l&&(t.warmLanes|=s),l=t.expirationTimes;for(var n=s;0<n;){var i=31-dt(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&ao(t,a,s)}function Ln(){return(ve&6)===0?(ql(0),!1):!0}function nc(){if(ue!==null){if(ge===0)var t=ue.return;else t=ue,Jt=Xs=null,gr(t),Sa=null,rl=0,t=ue;for(;t!==null;)qu(t.alternate,t),t=t.return;ue=null}}function Aa(t,s){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Mx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ls=0,nc(),Ee=t,ue=a=Xt(t.current,null),he=s,ge=0,xt=null,Ns=!1,ka=Qa(t,s),$r=!1,Ba=ft=ec=ea=Ss=Oe=0,it=Sl=null,tc=!1,(s&8)!==0&&(s|=s&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=s;0<l;){var n=31-dt(l),i=1<<n;s|=t[n],l&=~i}return as=s,rn(),a}function Ku(t,s){ce=null,M.H=xl,s===Na||s===xn?(s=ud(),ge=3):s===or?(s=ud(),ge=4):ge=s===Dr?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,xt=s,ue===null&&(Oe=1,_n(t,Nt(s,t.current)))}function Iu(){var t=ht.current;return t===null?!0:(he&4194048)===he?Ct===null:(he&62914560)===he||(he&536870912)!==0?t===Ct:!1}function Wu(){var t=M.H;return M.H=xl,t===null?xl:t}function Fu(){var t=M.A;return M.A=jx,t}function Pn(){Oe=4,Ns||(he&4194048)!==he&&ht.current!==null||(ka=!0),(Ss&134217727)===0&&(ea&134217727)===0||Ee===null||Cs(Ee,he,ft,!1)}function ic(t,s,a){var l=ve;ve|=2;var n=Wu(),i=Fu();(Ee!==t||he!==s)&&(Mn=null,Aa(t,s)),s=!1;var c=Oe;e:do try{if(ge!==0&&ue!==null){var p=ue,T=xt;switch(ge){case 8:nc(),c=6;break e;case 3:case 2:case 9:case 6:ht.current===null&&(s=!0);var B=ge;if(ge=0,xt=null,Oa(t,p,T,B),a&&ka){c=0;break e}break;default:B=ge,ge=0,xt=null,Oa(t,p,T,B)}}yx(),c=Oe;break}catch(U){Ku(t,U)}while(!0);return s&&t.shellSuspendCounter++,Jt=Xs=null,ve=l,M.H=n,M.A=i,ue===null&&(Ee=null,he=0,rn()),c}function yx(){for(;ue!==null;)$u(ue)}function gx(t,s){var a=ve;ve|=2;var l=Wu(),n=Fu();Ee!==t||he!==s?(Mn=null,Un=ct()+500,Aa(t,s)):ka=Qa(t,s);e:do try{if(ge!==0&&ue!==null){s=ue;var i=xt;t:switch(ge){case 1:ge=0,xt=null,Oa(t,s,i,1);break;case 2:case 9:if(od(i)){ge=0,xt=null,ep(s);break}s=function(){ge!==2&&ge!==9||Ee!==t||(ge=7),Mt(t)},i.then(s,s);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:od(i)?(ge=0,xt=null,ep(s)):(ge=0,xt=null,Oa(t,s,i,7));break;case 5:var c=null;switch(ue.tag){case 26:c=ue.memoizedState;case 5:case 27:var p=ue;if(c?Mp(c):p.stateNode.complete){ge=0,xt=null;var T=p.sibling;if(T!==null)ue=T;else{var B=p.return;B!==null?(ue=B,Gn(B)):ue=null}break t}}ge=0,xt=null,Oa(t,s,i,5);break;case 6:ge=0,xt=null,Oa(t,s,i,6);break;case 8:nc(),Oe=6;break e;default:throw Error(d(462))}}Nx();break}catch(U){Ku(t,U)}while(!0);return Jt=Xs=null,M.H=l,M.A=n,ve=a,ue!==null?0:(Ee=null,he=0,rn(),Oe)}function Nx(){for(;ue!==null&&!Xh();)$u(ue)}function $u(t){var s=Su(t.alternate,t,as);t.memoizedProps=t.pendingProps,s===null?Gn(t):ue=s}function ep(t){var s=t,a=s.alternate;switch(s.tag){case 15:case 0:s=ju(a,s,s.pendingProps,s.type,void 0,he);break;case 11:s=ju(a,s,s.pendingProps,s.type.render,s.ref,he);break;case 5:gr(s);default:qu(a,s),s=ue=Fo(s,as),s=Su(a,s,as)}t.memoizedProps=t.pendingProps,s===null?Gn(t):ue=s}function Oa(t,s,a,l){Jt=Xs=null,gr(s),Sa=null,rl=0;var n=s.return;try{if(dx(t,n,s,a,he)){Oe=1,_n(t,Nt(a,t.current)),ue=null;return}}catch(i){if(n!==null)throw ue=n,i;Oe=1,_n(t,Nt(a,t.current)),ue=null;return}s.flags&32768?(fe||l===1?t=!0:ka||(he&536870912)!==0?t=!1:(Ns=t=!0,(l===2||l===9||l===3||l===6)&&(l=ht.current,l!==null&&l.tag===13&&(l.flags|=16384))),tp(s,t)):Gn(s)}function Gn(t){var s=t;do{if((s.flags&32768)!==0){tp(s,Ns);return}t=s.return;var a=hx(s.alternate,s,as);if(a!==null){ue=a;return}if(s=s.sibling,s!==null){ue=s;return}ue=s=t}while(s!==null);Oe===0&&(Oe=5)}function tp(t,s){do{var a=mx(t.alternate,t);if(a!==null){a.flags&=32767,ue=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!s&&(t=t.sibling,t!==null)){ue=t;return}ue=t=a}while(t!==null);Oe=6,ue=null}function sp(t,s,a,l,n,i,c,p,T){t.cancelPendingCommit=null;do Yn();while(Ye!==0);if((ve&6)!==0)throw Error(d(327));if(s!==null){if(s===t.current)throw Error(d(177));if(i=s.lanes|s.childLanes,i|=Vi,tm(t,a,i,c,p,T),t===Ee&&(ue=Ee=null,he=0),Ha=s,qs=t,ls=a,sc=i,ac=n,Xu=l,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Cx(Ql,function(){return rp(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,n=Y.p,Y.p=2,c=ve,ve|=4;try{xx(t,s,a)}finally{ve=c,Y.p=n,M.T=l}}Ye=1,ap(),lp(),np()}}function ap(){if(Ye===1){Ye=0;var t=qs,s=Ha,a=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var l=Y.p;Y.p=2;var n=ve;ve|=4;try{Du(s,t);var i=bc,c=Yo(t.containerInfo),p=i.focusedElem,T=i.selectionRange;if(c!==p&&p&&p.ownerDocument&&Go(p.ownerDocument.documentElement,p)){if(T!==null&&Yi(p)){var B=T.start,U=T.end;if(U===void 0&&(U=B),"selectionStart"in p)p.selectionStart=B,p.selectionEnd=Math.min(U,p.value.length);else{var P=p.ownerDocument||document,A=P&&P.defaultView||window;if(A.getSelection){var D=A.getSelection(),K=p.textContent.length,te=Math.min(T.start,K),Ce=T.end===void 0?te:Math.min(T.end,K);!D.extend&&te>Ce&&(c=Ce,Ce=te,te=c);var _=Po(p,te),C=Po(p,Ce);if(_&&C&&(D.rangeCount!==1||D.anchorNode!==_.node||D.anchorOffset!==_.offset||D.focusNode!==C.node||D.focusOffset!==C.offset)){var k=P.createRange();k.setStart(_.node,_.offset),D.removeAllRanges(),te>Ce?(D.addRange(k),D.extend(C.node,C.offset)):(k.setEnd(C.node,C.offset),D.addRange(k))}}}}for(P=[],D=p;D=D.parentNode;)D.nodeType===1&&P.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<P.length;p++){var L=P[p];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}ti=!!jc,bc=jc=null}finally{ve=n,Y.p=l,M.T=a}}t.current=s,Ye=2}}function lp(){if(Ye===2){Ye=0;var t=qs,s=Ha,a=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var l=Y.p;Y.p=2;var n=ve;ve|=4;try{Hu(t,s.alternate,s)}finally{ve=n,Y.p=l,M.T=a}}Ye=3}}function np(){if(Ye===4||Ye===3){Ye=0,Zh();var t=qs,s=Ha,a=ls,l=Xu;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Ye=5:(Ye=0,Ha=qs=null,ip(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Ts=null),Ti(a),s=s.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ya,s,void 0,(s.current.flags&128)===128)}catch{}if(l!==null){s=M.T,n=Y.p,Y.p=2,M.T=null;try{for(var i=t.onRecoverableError,c=0;c<l.length;c++){var p=l[c];i(p.value,{componentStack:p.stack})}}finally{M.T=s,Y.p=n}}(ls&3)!==0&&Yn(),Mt(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===lc?Tl++:(Tl=0,lc=t):Tl=0,ql(0)}}function ip(t,s){(t.pooledCacheLanes&=s)===0&&(s=t.pooledCache,s!=null&&(t.pooledCache=null,nl(s)))}function Yn(){return ap(),lp(),np(),rp()}function rp(){if(Ye!==5)return!1;var t=qs,s=sc;sc=0;var a=Ti(ls),l=M.T,n=Y.p;try{Y.p=32>a?32:a,M.T=null,a=ac,ac=null;var i=qs,c=ls;if(Ye=0,Ha=qs=null,ls=0,(ve&6)!==0)throw Error(d(331));var p=ve;if(ve|=4,Gu(i.current),Mu(i,i.current,c,a),ve=p,ql(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ya,i)}catch{}return!0}finally{Y.p=n,M.T=l,ip(t,s)}}function cp(t,s,a){s=Nt(a,s),s=wr(t.stateNode,s,2),t=bs(t,s,2),t!==null&&(Xa(t,2),Mt(t))}function Ne(t,s,a){if(t.tag===3)cp(t,t,a);else for(;s!==null;){if(s.tag===3){cp(s,t,a);break}else if(s.tag===1){var l=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ts===null||!Ts.has(l))){t=Nt(a,t),a=ou(2),l=bs(s,a,2),l!==null&&(du(a,l,s,t),Xa(l,2),Mt(l));break}}s=s.return}}function rc(t,s,a){var l=t.pingCache;if(l===null){l=t.pingCache=new bx;var n=new Set;l.set(s,n)}else n=l.get(s),n===void 0&&(n=new Set,l.set(s,n));n.has(a)||($r=!0,n.add(a),t=Sx.bind(null,t,s,a),s.then(t,t))}function Sx(t,s,a){var l=t.pingCache;l!==null&&l.delete(s),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ee===t&&(he&a)===a&&(Oe===4||Oe===3&&(he&62914560)===he&&300>ct()-Dn?(ve&2)===0&&Aa(t,0):ec|=a,Ba===he&&(Ba=0)),Mt(t)}function op(t,s){s===0&&(s=so()),t=Gs(t,s),t!==null&&(Xa(t,s),Mt(t))}function Tx(t){var s=t.memoizedState,a=0;s!==null&&(a=s.retryLane),op(t,a)}function qx(t,s){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(s),op(t,a)}function Cx(t,s){return yi(t,s)}var Qn=null,za=null,cc=!1,Xn=!1,oc=!1,Rs=0;function Mt(t){t!==za&&t.next===null&&(za===null?Qn=za=t:za=za.next=t),Xn=!0,cc||(cc=!0,Ex())}function ql(t,s){if(!oc&&Xn){oc=!0;do for(var a=!1,l=Qn;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,p=l.pingedLanes;i=(1<<31-dt(42|t)+1)-1,i&=n&~(c&~p),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,hp(l,i))}else i=he,i=Vl(l,l===Ee?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Qa(l,i)||(a=!0,hp(l,i));l=l.next}while(a);oc=!1}}function Rx(){dp()}function dp(){Xn=cc=!1;var t=0;Rs!==0&&Ux()&&(t=Rs);for(var s=ct(),a=null,l=Qn;l!==null;){var n=l.next,i=up(l,s);i===0?(l.next=null,a===null?Qn=n:a.next=n,n===null&&(za=a)):(a=l,(t!==0||(i&3)!==0)&&(Xn=!0)),l=n}Ye!==0&&Ye!==5||ql(t),Rs!==0&&(Rs=0)}function up(t,s){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var c=31-dt(i),p=1<<c,T=n[c];T===-1?((p&a)===0||(p&l)!==0)&&(n[c]=em(p,s)):T<=s&&(t.expiredLanes|=p),i&=~p}if(s=Ee,a=he,a=Vl(t,t===s?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===s&&(ge===2||ge===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&gi(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Qa(t,a)){if(s=a&-a,s===t.callbackPriority)return s;switch(l!==null&&gi(l),Ti(a)){case 2:case 8:a=eo;break;case 32:a=Ql;break;case 268435456:a=to;break;default:a=Ql}return l=pp.bind(null,t),a=yi(a,l),t.callbackPriority=s,t.callbackNode=a,s}return l!==null&&l!==null&&gi(l),t.callbackPriority=2,t.callbackNode=null,2}function pp(t,s){if(Ye!==0&&Ye!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yn()&&t.callbackNode!==a)return null;var l=he;return l=Vl(t,t===Ee?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Ju(t,l,s),up(t,ct()),t.callbackNode!=null&&t.callbackNode===a?pp.bind(null,t):null)}function hp(t,s){if(Yn())return null;Ju(t,s,!0)}function Ex(){Lx(function(){(ve&6)!==0?yi($c,Rx):dp()})}function dc(){if(Rs===0){var t=ya;t===0&&(t=Xl,Xl<<=1,(Xl&261888)===0&&(Xl=256)),Rs=t}return Rs}function mp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fl(""+t)}function xp(t,s){var a=s.ownerDocument.createElement("input");return a.name=s.name,a.value=s.value,t.id&&a.setAttribute("form",t.id),s.parentNode.insertBefore(a,s),t=new FormData(t),a.parentNode.removeChild(a),t}function _x(t,s,a,l,n){if(s==="submit"&&a&&a.stateNode===n){var i=mp((n[tt]||null).action),c=l.submitter;c&&(s=(s=c[tt]||null)?mp(s.formAction):c.getAttribute("formAction"),s!==null&&(i=s,c=null));var p=new sn("action","action",null,l,n);t.push({event:p,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Rs!==0){var T=c?xp(n,c):new FormData(n);kr(a,{pending:!0,data:T,method:n.method,action:i},null,T)}}else typeof i=="function"&&(p.preventDefault(),T=c?xp(n,c):new FormData(n),kr(a,{pending:!0,data:T,method:n.method,action:i},i,T))},currentTarget:n}]})}}for(var uc=0;uc<Ji.length;uc++){var pc=Ji[uc],kx=pc.toLowerCase(),Bx=pc[0].toUpperCase()+pc.slice(1);Bt(kx,"on"+Bx)}Bt(Zo,"onAnimationEnd"),Bt(Jo,"onAnimationIteration"),Bt(Vo,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Jm,"onTransitionRun"),Bt(Vm,"onTransitionStart"),Bt(Km,"onTransitionCancel"),Bt(Ko,"onTransitionEnd"),ia("onMouseEnter",["mouseout","mouseover"]),ia("onMouseLeave",["mouseout","mouseover"]),ia("onPointerEnter",["pointerout","pointerover"]),ia("onPointerLeave",["pointerout","pointerover"]),Us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Us("onBeforeInput",["compositionend","keypress","textInput","paste"]),Us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cl));function fp(t,s){s=(s&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;e:{var i=void 0;if(s)for(var c=l.length-1;0<=c;c--){var p=l[c],T=p.instance,B=p.currentTarget;if(p=p.listener,T!==i&&n.isPropagationStopped())break e;i=p,n.currentTarget=B;try{i(n)}catch(U){nn(U)}n.currentTarget=null,i=T}else for(c=0;c<l.length;c++){if(p=l[c],T=p.instance,B=p.currentTarget,p=p.listener,T!==i&&n.isPropagationStopped())break e;i=p,n.currentTarget=B;try{i(n)}catch(U){nn(U)}n.currentTarget=null,i=T}}}}function pe(t,s){var a=s[qi];a===void 0&&(a=s[qi]=new Set);var l=t+"__bubble";a.has(l)||(jp(s,t,2,!1),a.add(l))}function hc(t,s,a){var l=0;s&&(l|=4),jp(a,t,l,s)}var Zn="_reactListening"+Math.random().toString(36).slice(2);function mc(t){if(!t[Zn]){t[Zn]=!0,oo.forEach(function(a){a!=="selectionchange"&&(Hx.has(a)||hc(a,!1,t),hc(a,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[Zn]||(s[Zn]=!0,hc("selectionchange",!1,s))}}function jp(t,s,a,l){switch(Zp(s)){case 2:var n=rf;break;case 8:n=cf;break;default:n=_c}a=n.bind(null,s,a,t),n=void 0,!Oi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(s,a,{capture:!0,passive:n}):t.addEventListener(s,a,!0):n!==void 0?t.addEventListener(s,a,{passive:n}):t.addEventListener(s,a,!1)}function xc(t,s,a,l,n){var i=l;if((s&1)===0&&(s&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var p=l.stateNode.containerInfo;if(p===n)break;if(c===4)for(c=l.return;c!==null;){var T=c.tag;if((T===3||T===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;p!==null;){if(c=aa(p),c===null)return;if(T=c.tag,T===5||T===6||T===26||T===27){l=i=c;continue e}p=p.parentNode}}l=l.return}No(function(){var B=i,U=Hi(a),P=[];e:{var A=Io.get(t);if(A!==void 0){var D=sn,K=t;switch(t){case"keypress":if(en(a)===0)break e;case"keydown":case"keyup":D=qm;break;case"focusin":K="focus",D=Ui;break;case"focusout":K="blur",D=Ui;break;case"beforeblur":case"afterblur":D=Ui;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Em;break;case Zo:case Jo:case Vo:D=fm;break;case Ko:D=km;break;case"scroll":case"scrollend":D=um;break;case"wheel":D=Hm;break;case"copy":case"cut":case"paste":D=bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Ro;break;case"toggle":case"beforetoggle":D=Om}var te=(s&4)!==0,Ce=!te&&(t==="scroll"||t==="scrollend"),_=te?A!==null?A+"Capture":null:A;te=[];for(var C=B,k;C!==null;){var L=C;if(k=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||k===null||_===null||(L=Va(C,_),L!=null&&te.push(Rl(C,L,k))),Ce)break;C=C.return}0<te.length&&(A=new D(A,K,null,a,U),P.push({event:A,listeners:te}))}}if((s&7)===0){e:{if(A=t==="mouseover"||t==="pointerover",D=t==="mouseout"||t==="pointerout",A&&a!==Bi&&(K=a.relatedTarget||a.fromElement)&&(aa(K)||K[sa]))break e;if((D||A)&&(A=U.window===U?U:(A=U.ownerDocument)?A.defaultView||A.parentWindow:window,D?(K=a.relatedTarget||a.toElement,D=B,K=K?aa(K):null,K!==null&&(Ce=b(K),te=K.tag,K!==Ce||te!==5&&te!==27&&te!==6)&&(K=null)):(D=null,K=B),D!==K)){if(te=qo,L="onMouseLeave",_="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(te=Ro,L="onPointerLeave",_="onPointerEnter",C="pointer"),Ce=D==null?A:Ja(D),k=K==null?A:Ja(K),A=new te(L,C+"leave",D,a,U),A.target=Ce,A.relatedTarget=k,L=null,aa(U)===B&&(te=new te(_,C+"enter",K,a,U),te.target=k,te.relatedTarget=Ce,L=te),Ce=L,D&&K)t:{for(te=Ax,_=D,C=K,k=0,L=_;L;L=te(L))k++;L=0;for(var F=C;F;F=te(F))L++;for(;0<k-L;)_=te(_),k--;for(;0<L-k;)C=te(C),L--;for(;k--;){if(_===C||C!==null&&_===C.alternate){te=_;break t}_=te(_),C=te(C)}te=null}else te=null;D!==null&&bp(P,A,D,te,!1),K!==null&&Ce!==null&&bp(P,Ce,K,te,!0)}}e:{if(A=B?Ja(B):window,D=A.nodeName&&A.nodeName.toLowerCase(),D==="select"||D==="input"&&A.type==="file")var je=zo;else if(Ao(A))if(wo)je=Qm;else{je=Gm;var W=Pm}else D=A.nodeName,!D||D.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?B&&ki(B.elementType)&&(je=zo):je=Ym;if(je&&(je=je(t,B))){Oo(P,je,a,U);break e}W&&W(t,A,B),t==="focusout"&&B&&A.type==="number"&&B.memoizedProps.value!=null&&_i(A,"number",A.value)}switch(W=B?Ja(B):window,t){case"focusin":(Ao(W)||W.contentEditable==="true")&&(pa=W,Qi=B,sl=null);break;case"focusout":sl=Qi=pa=null;break;case"mousedown":Xi=!0;break;case"contextmenu":case"mouseup":case"dragend":Xi=!1,Qo(P,a,U);break;case"selectionchange":if(Zm)break;case"keydown":case"keyup":Qo(P,a,U)}var oe;if(Li)e:{switch(t){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else ua?Bo(t,a)&&(me="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(Eo&&a.locale!=="ko"&&(ua||me!=="onCompositionStart"?me==="onCompositionEnd"&&ua&&(oe=So()):(us=U,zi="value"in us?us.value:us.textContent,ua=!0)),W=Jn(B,me),0<W.length&&(me=new Co(me,t,null,a,U),P.push({event:me,listeners:W}),oe?me.data=oe:(oe=Ho(a),oe!==null&&(me.data=oe)))),(oe=wm?Dm(t,a):Um(t,a))&&(me=Jn(B,"onBeforeInput"),0<me.length&&(W=new Co("onBeforeInput","beforeinput",null,a,U),P.push({event:W,listeners:me}),W.data=oe)),_x(P,t,B,a,U)}fp(P,s)})}function Rl(t,s,a){return{instance:t,listener:s,currentTarget:a}}function Jn(t,s){for(var a=s+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Va(t,a),n!=null&&l.unshift(Rl(t,n,i)),n=Va(t,s),n!=null&&l.push(Rl(t,n,i))),t.tag===3)return l;t=t.return}return[]}function Ax(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bp(t,s,a,l,n){for(var i=s._reactName,c=[];a!==null&&a!==l;){var p=a,T=p.alternate,B=p.stateNode;if(p=p.tag,T!==null&&T===l)break;p!==5&&p!==26&&p!==27||B===null||(T=B,n?(B=Va(a,i),B!=null&&c.unshift(Rl(a,B,T))):n||(B=Va(a,i),B!=null&&c.push(Rl(a,B,T)))),a=a.return}c.length!==0&&t.push({event:s,listeners:c})}var Ox=/\r\n?/g,zx=/\u0000|\uFFFD/g;function vp(t){return(typeof t=="string"?t:""+t).replace(Ox,`
`).replace(zx,"")}function yp(t,s){return s=vp(s),vp(t)===s}function qe(t,s,a,l,n,i){switch(a){case"children":typeof l=="string"?s==="body"||s==="textarea"&&l===""||ca(t,l):(typeof l=="number"||typeof l=="bigint")&&s!=="body"&&ca(t,""+l);break;case"className":Il(t,"class",l);break;case"tabIndex":Il(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Il(t,a,l);break;case"style":yo(t,l,i);break;case"data":if(s!=="object"){Il(t,"data",l);break}case"src":case"href":if(l===""&&(s!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Fl(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(s!=="input"&&qe(t,s,"name",n.name,n,null),qe(t,s,"formEncType",n.formEncType,n,null),qe(t,s,"formMethod",n.formMethod,n,null),qe(t,s,"formTarget",n.formTarget,n,null)):(qe(t,s,"encType",n.encType,n,null),qe(t,s,"method",n.method,n,null),qe(t,s,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Fl(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Yt);break;case"onScroll":l!=null&&pe("scroll",t);break;case"onScrollEnd":l!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Fl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":pe("beforetoggle",t),pe("toggle",t),Kl(t,"popover",l);break;case"xlinkActuate":Gt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Gt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Gt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Gt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Gt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Gt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Gt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Gt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Gt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kl(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=om.get(a)||a,Kl(t,a,l))}}function fc(t,s,a,l,n,i){switch(a){case"style":yo(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=a}}break;case"children":typeof l=="string"?ca(t,l):(typeof l=="number"||typeof l=="bigint")&&ca(t,""+l);break;case"onScroll":l!=null&&pe("scroll",t);break;case"onScrollEnd":l!=null&&pe("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Yt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),s=a.slice(2,n?a.length-7:void 0),i=t[tt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(s,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(s,l,n);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Kl(t,a,l)}}}function Ie(t,s,a){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,s));default:qe(t,s,i,c,a,null)}}n&&qe(t,s,"srcSet",a.srcSet,a,null),l&&qe(t,s,"src",a.src,a,null);return;case"input":pe("invalid",t);var p=i=c=n=null,T=null,B=null;for(l in a)if(a.hasOwnProperty(l)){var U=a[l];if(U!=null)switch(l){case"name":n=U;break;case"type":c=U;break;case"checked":T=U;break;case"defaultChecked":B=U;break;case"value":i=U;break;case"defaultValue":p=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(d(137,s));break;default:qe(t,s,l,U,a,null)}}fo(t,i,p,T,B,c,n,!1);return;case"select":pe("invalid",t),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(p=a[n],p!=null))switch(n){case"value":i=p;break;case"defaultValue":c=p;break;case"multiple":l=p;default:qe(t,s,n,p,a,null)}s=i,a=c,t.multiple=!!l,s!=null?ra(t,!!l,s,!1):a!=null&&ra(t,!!l,a,!0);return;case"textarea":pe("invalid",t),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(p=a[c],p!=null))switch(c){case"value":l=p;break;case"defaultValue":n=p;break;case"children":i=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(d(91));break;default:qe(t,s,c,p,a,null)}bo(t,l,n,i);return;case"option":for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null)&&(T==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":qe(t,s,T,l,a,null));return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(l=0;l<Cl.length;l++)pe(Cl[l],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(l=a[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,s));default:qe(t,s,B,l,a,null)}return;default:if(ki(s)){for(U in a)a.hasOwnProperty(U)&&(l=a[U],l!==void 0&&fc(t,s,U,l,a,void 0));return}}for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!=null&&qe(t,s,p,l,a,null))}function wx(t,s,a,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,p=null,T=null,B=null,U=null;for(D in a){var P=a[D];if(a.hasOwnProperty(D)&&P!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":T=P;default:l.hasOwnProperty(D)||qe(t,s,D,null,l,P)}}for(var A in l){var D=l[A];if(P=a[A],l.hasOwnProperty(A)&&(D!=null||P!=null))switch(A){case"type":i=D;break;case"name":n=D;break;case"checked":B=D;break;case"defaultChecked":U=D;break;case"value":c=D;break;case"defaultValue":p=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(d(137,s));break;default:D!==P&&qe(t,s,A,D,l,P)}}Ei(t,c,p,T,B,U,i,n);return;case"select":D=c=p=A=null;for(i in a)if(T=a[i],a.hasOwnProperty(i)&&T!=null)switch(i){case"value":break;case"multiple":D=T;default:l.hasOwnProperty(i)||qe(t,s,i,null,l,T)}for(n in l)if(i=l[n],T=a[n],l.hasOwnProperty(n)&&(i!=null||T!=null))switch(n){case"value":A=i;break;case"defaultValue":p=i;break;case"multiple":c=i;default:i!==T&&qe(t,s,n,i,l,T)}s=p,a=c,l=D,A!=null?ra(t,!!a,A,!1):!!l!=!!a&&(s!=null?ra(t,!!a,s,!0):ra(t,!!a,a?[]:"",!1));return;case"textarea":D=A=null;for(p in a)if(n=a[p],a.hasOwnProperty(p)&&n!=null&&!l.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:qe(t,s,p,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":A=n;break;case"defaultValue":D=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&qe(t,s,c,n,l,i)}jo(t,A,D);return;case"option":for(var K in a)A=a[K],a.hasOwnProperty(K)&&A!=null&&!l.hasOwnProperty(K)&&(K==="selected"?t.selected=!1:qe(t,s,K,null,l,A));for(T in l)A=l[T],D=a[T],l.hasOwnProperty(T)&&A!==D&&(A!=null||D!=null)&&(T==="selected"?t.selected=A&&typeof A!="function"&&typeof A!="symbol":qe(t,s,T,A,l,D));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)A=a[te],a.hasOwnProperty(te)&&A!=null&&!l.hasOwnProperty(te)&&qe(t,s,te,null,l,A);for(B in l)if(A=l[B],D=a[B],l.hasOwnProperty(B)&&A!==D&&(A!=null||D!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(d(137,s));break;default:qe(t,s,B,A,l,D)}return;default:if(ki(s)){for(var Ce in a)A=a[Ce],a.hasOwnProperty(Ce)&&A!==void 0&&!l.hasOwnProperty(Ce)&&fc(t,s,Ce,void 0,l,A);for(U in l)A=l[U],D=a[U],!l.hasOwnProperty(U)||A===D||A===void 0&&D===void 0||fc(t,s,U,A,l,D);return}}for(var _ in a)A=a[_],a.hasOwnProperty(_)&&A!=null&&!l.hasOwnProperty(_)&&qe(t,s,_,null,l,A);for(P in l)A=l[P],D=a[P],!l.hasOwnProperty(P)||A===D||A==null&&D==null||qe(t,s,P,A,l,D)}function gp(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Dx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,s=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,p=n.duration;if(i&&p&&gp(c)){for(c=0,p=n.responseEnd,l+=1;l<a.length;l++){var T=a[l],B=T.startTime;if(B>p)break;var U=T.transferSize,P=T.initiatorType;U&&gp(P)&&(T=T.responseEnd,c+=U*(T<p?1:(p-B)/(T-B)))}if(--l,s+=8*(i+c)/(n.duration/1e3),t++,10<t)break}}if(0<t)return s/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var jc=null,bc=null;function Vn(t){return t.nodeType===9?t:t.ownerDocument}function Np(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sp(t,s){if(t===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&s==="foreignObject"?0:t}function vc(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var yc=null;function Ux(){var t=window.event;return t&&t.type==="popstate"?t===yc?!1:(yc=t,!0):(yc=null,!1)}var Tp=typeof setTimeout=="function"?setTimeout:void 0,Mx=typeof clearTimeout=="function"?clearTimeout:void 0,qp=typeof Promise=="function"?Promise:void 0,Lx=typeof queueMicrotask=="function"?queueMicrotask:typeof qp<"u"?function(t){return qp.resolve(null).then(t).catch(Px)}:Tp;function Px(t){setTimeout(function(){throw t})}function Es(t){return t==="head"}function Cp(t,s){var a=s,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),Ma(s);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")El(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,El(a);for(var i=a.firstChild;i;){var c=i.nextSibling,p=i.nodeName;i[Za]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&El(t.ownerDocument.body);a=n}while(a);Ma(s)}function Rp(t,s){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?s?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(s?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function gc(t){var s=t.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var a=s;switch(s=s.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gc(a),Ci(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Gx(t,s,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==s.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Za])switch(s){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(s==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Rt(t.nextSibling),t===null)break}return null}function Yx(t,s,a){if(s==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Rt(t.nextSibling),t===null))return null;return t}function Ep(t,s){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Rt(t.nextSibling),t===null))return null;return t}function Nc(t){return t.data==="$?"||t.data==="$~"}function Sc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Qx(t,s){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=s;else if(t.data!=="$?"||a.readyState!=="loading")s();else{var l=function(){s(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Rt(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return t}var Tc=null;function _p(t){t=t.nextSibling;for(var s=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(s===0)return Rt(t.nextSibling);s--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||s++}t=t.nextSibling}return null}function kp(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(s===0)return t;s--}else a!=="/$"&&a!=="/&"||s++}t=t.previousSibling}return null}function Bp(t,s,a){switch(s=Vn(a),t){case"html":if(t=s.documentElement,!t)throw Error(d(452));return t;case"head":if(t=s.head,!t)throw Error(d(453));return t;case"body":if(t=s.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function El(t){for(var s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Ci(t)}var Et=new Map,Hp=new Set;function Kn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ns=Y.d;Y.d={f:Xx,r:Zx,D:Jx,C:Vx,L:Kx,m:Ix,X:Fx,S:Wx,M:$x};function Xx(){var t=ns.f(),s=Ln();return t||s}function Zx(t){var s=la(t);s!==null&&s.tag===5&&s.type==="form"?Kd(s):ns.r(t)}var wa=typeof document>"u"?null:document;function Ap(t,s,a){var l=wa;if(l&&typeof s=="string"&&s){var n=yt(s);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Hp.has(n)||(Hp.add(n),t={rel:t,crossOrigin:a,href:s},l.querySelector(n)===null&&(s=l.createElement("link"),Ie(s,"link",t),Qe(s),l.head.appendChild(s)))}}function Jx(t){ns.D(t),Ap("dns-prefetch",t,null)}function Vx(t,s){ns.C(t,s),Ap("preconnect",t,s)}function Kx(t,s,a){ns.L(t,s,a);var l=wa;if(l&&t&&s){var n='link[rel="preload"][as="'+yt(s)+'"]';s==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+yt(a.imageSizes)+'"]')):n+='[href="'+yt(t)+'"]';var i=n;switch(s){case"style":i=Da(t);break;case"script":i=Ua(t)}Et.has(i)||(t=q({rel:"preload",href:s==="image"&&a&&a.imageSrcSet?void 0:t,as:s},a),Et.set(i,t),l.querySelector(n)!==null||s==="style"&&l.querySelector(_l(i))||s==="script"&&l.querySelector(kl(i))||(s=l.createElement("link"),Ie(s,"link",t),Qe(s),l.head.appendChild(s)))}}function Ix(t,s){ns.m(t,s);var a=wa;if(a&&t){var l=s&&typeof s.as=="string"?s.as:"script",n='link[rel="modulepreload"][as="'+yt(l)+'"][href="'+yt(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ua(t)}if(!Et.has(i)&&(t=q({rel:"modulepreload",href:t},s),Et.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(kl(i)))return}l=a.createElement("link"),Ie(l,"link",t),Qe(l),a.head.appendChild(l)}}}function Wx(t,s,a){ns.S(t,s,a);var l=wa;if(l&&t){var n=na(l).hoistableStyles,i=Da(t);s=s||"default";var c=n.get(i);if(!c){var p={loading:0,preload:null};if(c=l.querySelector(_l(i)))p.loading=5;else{t=q({rel:"stylesheet",href:t,"data-precedence":s},a),(a=Et.get(i))&&qc(t,a);var T=c=l.createElement("link");Qe(T),Ie(T,"link",t),T._p=new Promise(function(B,U){T.onload=B,T.onerror=U}),T.addEventListener("load",function(){p.loading|=1}),T.addEventListener("error",function(){p.loading|=2}),p.loading|=4,In(c,s,l)}c={type:"stylesheet",instance:c,count:1,state:p},n.set(i,c)}}}function Fx(t,s){ns.X(t,s);var a=wa;if(a&&t){var l=na(a).hoistableScripts,n=Ua(t),i=l.get(n);i||(i=a.querySelector(kl(n)),i||(t=q({src:t,async:!0},s),(s=Et.get(n))&&Cc(t,s),i=a.createElement("script"),Qe(i),Ie(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function $x(t,s){ns.M(t,s);var a=wa;if(a&&t){var l=na(a).hoistableScripts,n=Ua(t),i=l.get(n);i||(i=a.querySelector(kl(n)),i||(t=q({src:t,async:!0,type:"module"},s),(s=Et.get(n))&&Cc(t,s),i=a.createElement("script"),Qe(i),Ie(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Op(t,s,a,l){var n=(n=de.current)?Kn(n):null;if(!n)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(s=Da(a.href),a=na(n).hoistableStyles,l=a.get(s),l||(l={type:"style",instance:null,count:0,state:null},a.set(s,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Da(a.href);var i=na(n).hoistableStyles,c=i.get(t);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,c),(i=n.querySelector(_l(t)))&&!i._p&&(c.instance=i,c.state.loading=5),Et.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Et.set(t,a),i||ef(n,t,a,c.state))),s&&l===null)throw Error(d(528,""));return c}if(s&&l!==null)throw Error(d(529,""));return null;case"script":return s=a.async,a=a.src,typeof a=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Ua(a),a=na(n).hoistableScripts,l=a.get(s),l||(l={type:"script",instance:null,count:0,state:null},a.set(s,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function Da(t){return'href="'+yt(t)+'"'}function _l(t){return'link[rel="stylesheet"]['+t+"]"}function zp(t){return q({},t,{"data-precedence":t.precedence,precedence:null})}function ef(t,s,a,l){t.querySelector('link[rel="preload"][as="style"]['+s+"]")?l.loading=1:(s=t.createElement("link"),l.preload=s,s.addEventListener("load",function(){return l.loading|=1}),s.addEventListener("error",function(){return l.loading|=2}),Ie(s,"link",a),Qe(s),t.head.appendChild(s))}function Ua(t){return'[src="'+yt(t)+'"]'}function kl(t){return"script[async]"+t}function wp(t,s,a){if(s.count++,s.instance===null)switch(s.type){case"style":var l=t.querySelector('style[data-href~="'+yt(a.href)+'"]');if(l)return s.instance=l,Qe(l),l;var n=q({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Qe(l),Ie(l,"style",n),In(l,a.precedence,t),s.instance=l;case"stylesheet":n=Da(a.href);var i=t.querySelector(_l(n));if(i)return s.state.loading|=4,s.instance=i,Qe(i),i;l=zp(a),(n=Et.get(n))&&qc(l,n),i=(t.ownerDocument||t).createElement("link"),Qe(i);var c=i;return c._p=new Promise(function(p,T){c.onload=p,c.onerror=T}),Ie(i,"link",l),s.state.loading|=4,In(i,a.precedence,t),s.instance=i;case"script":return i=Ua(a.src),(n=t.querySelector(kl(i)))?(s.instance=n,Qe(n),n):(l=a,(n=Et.get(i))&&(l=q({},a),Cc(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),Qe(n),Ie(n,"link",l),t.head.appendChild(n),s.instance=n);case"void":return null;default:throw Error(d(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(l=s.instance,s.state.loading|=4,In(l,a.precedence,t));return s.instance}function In(t,s,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var p=l[c];if(p.dataset.precedence===s)i=p;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(s=a.nodeType===9?a.head:a,s.insertBefore(t,s.firstChild))}function qc(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.title==null&&(t.title=s.title)}function Cc(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.integrity==null&&(t.integrity=s.integrity)}var Wn=null;function Dp(t,s,a){if(Wn===null){var l=new Map,n=Wn=new Map;n.set(a,l)}else n=Wn,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[Za]||i[Ze]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(s)||"";c=t+c;var p=l.get(c);p?p.push(i):l.set(c,[i])}}return l}function Up(t,s,a){t=t.ownerDocument||t,t.head.insertBefore(a,s==="title"?t.querySelector("head > title"):null)}function tf(t,s,a){if(a===1||s.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;return s.rel==="stylesheet"?(t=s.disabled,typeof s.precedence=="string"&&t==null):!0;case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function Mp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function sf(t,s,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Da(l.href),i=s.querySelector(_l(n));if(i){s=i._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(t.count++,t=Fn.bind(t),s.then(t,t)),a.state.loading|=4,a.instance=i,Qe(i);return}i=s.ownerDocument||s,l=zp(l),(n=Et.get(n))&&qc(l,n),i=i.createElement("link"),Qe(i);var c=i;c._p=new Promise(function(p,T){c.onload=p,c.onerror=T}),Ie(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,s),(s=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Fn.bind(t),s.addEventListener("load",a),s.addEventListener("error",a))}}var Rc=0;function af(t,s){return t.stylesheets&&t.count===0&&ei(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&ei(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+s);0<t.imgBytes&&Rc===0&&(Rc=62500*Dx());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ei(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Rc?50:800)+s);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Fn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ei(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $n=null;function ei(t,s){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$n=new Map,s.forEach(lf,t),$n=null,Fn.call(t))}function lf(t,s){if(!(s.state.loading&4)){var a=$n.get(t);if(a)var l=a.get(null);else{a=new Map,$n.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=s.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=Fn.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),s.state.loading|=4}}var Bl={$$typeof:w,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function nf(t,s,a,l,n,i,c,p,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ni(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.hiddenUpdates=Ni(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Lp(t,s,a,l,n,i,c,p,T,B,U,P){return t=new nf(t,s,a,c,T,B,U,P,p),s=1,i===!0&&(s|=24),i=pt(3,null,null,s),t.current=i,i.stateNode=t,s=ir(),s.refCount++,t.pooledCache=s,s.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:s},dr(i),t}function Pp(t){return t?(t=xa,t):xa}function Gp(t,s,a,l,n,i){n=Pp(n),l.context===null?l.context=n:l.pendingContext=n,l=js(s),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=bs(t,l,s),a!==null&&(rt(a,t,s),ol(a,t,s))}function Yp(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<s?a:s}}function Ec(t,s){Yp(t,s),(t=t.alternate)&&Yp(t,s)}function Qp(t){if(t.tag===13||t.tag===31){var s=Gs(t,67108864);s!==null&&rt(s,t,67108864),Ec(t,67108864)}}function Xp(t){if(t.tag===13||t.tag===31){var s=jt();s=Si(s);var a=Gs(t,s);a!==null&&rt(a,t,s),Ec(t,s)}}var ti=!0;function rf(t,s,a,l){var n=M.T;M.T=null;var i=Y.p;try{Y.p=2,_c(t,s,a,l)}finally{Y.p=i,M.T=n}}function cf(t,s,a,l){var n=M.T;M.T=null;var i=Y.p;try{Y.p=8,_c(t,s,a,l)}finally{Y.p=i,M.T=n}}function _c(t,s,a,l){if(ti){var n=kc(l);if(n===null)xc(t,s,l,si,a),Jp(t,l);else if(df(n,t,s,a,l))l.stopPropagation();else if(Jp(t,l),s&4&&-1<of.indexOf(t)){for(;n!==null;){var i=la(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Ds(i.pendingLanes);if(c!==0){var p=i;for(p.pendingLanes|=2,p.entangledLanes|=2;c;){var T=1<<31-dt(c);p.entanglements[1]|=T,c&=~T}Mt(i),(ve&6)===0&&(Un=ct()+500,ql(0))}}break;case 31:case 13:p=Gs(i,2),p!==null&&rt(p,i,2),Ln(),Ec(i,2)}if(i=kc(l),i===null&&xc(t,s,l,si,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else xc(t,s,l,null,a)}}function kc(t){return t=Hi(t),Bc(t)}var si=null;function Bc(t){if(si=null,t=aa(t),t!==null){var s=b(t);if(s===null)t=null;else{var a=s.tag;if(a===13){if(t=y(s),t!==null)return t;t=null}else if(a===31){if(t=f(s),t!==null)return t;t=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null)}}return si=t,null}function Zp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jh()){case $c:return 2;case eo:return 8;case Ql:case Vh:return 32;case to:return 268435456;default:return 32}default:return 32}}var Hc=!1,_s=null,ks=null,Bs=null,Hl=new Map,Al=new Map,Hs=[],of="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jp(t,s){switch(t){case"focusin":case"focusout":_s=null;break;case"dragenter":case"dragleave":ks=null;break;case"mouseover":case"mouseout":Bs=null;break;case"pointerover":case"pointerout":Hl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Al.delete(s.pointerId)}}function Ol(t,s,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:s,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},s!==null&&(s=la(s),s!==null&&Qp(s)),t):(t.eventSystemFlags|=l,s=t.targetContainers,n!==null&&s.indexOf(n)===-1&&s.push(n),t)}function df(t,s,a,l,n){switch(s){case"focusin":return _s=Ol(_s,t,s,a,l,n),!0;case"dragenter":return ks=Ol(ks,t,s,a,l,n),!0;case"mouseover":return Bs=Ol(Bs,t,s,a,l,n),!0;case"pointerover":var i=n.pointerId;return Hl.set(i,Ol(Hl.get(i)||null,t,s,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Al.set(i,Ol(Al.get(i)||null,t,s,a,l,n)),!0}return!1}function Vp(t){var s=aa(t.target);if(s!==null){var a=b(s);if(a!==null){if(s=a.tag,s===13){if(s=y(a),s!==null){t.blockedOn=s,ro(t.priority,function(){Xp(a)});return}}else if(s===31){if(s=f(a),s!==null){t.blockedOn=s,ro(t.priority,function(){Xp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ai(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var a=kc(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Bi=l,a.target.dispatchEvent(l),Bi=null}else return s=la(a),s!==null&&Qp(s),t.blockedOn=a,!1;s.shift()}return!0}function Kp(t,s,a){ai(t)&&a.delete(s)}function uf(){Hc=!1,_s!==null&&ai(_s)&&(_s=null),ks!==null&&ai(ks)&&(ks=null),Bs!==null&&ai(Bs)&&(Bs=null),Hl.forEach(Kp),Al.forEach(Kp)}function li(t,s){t.blockedOn===s&&(t.blockedOn=null,Hc||(Hc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,uf)))}var ni=null;function Ip(t){ni!==t&&(ni=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ni===t&&(ni=null);for(var s=0;s<t.length;s+=3){var a=t[s],l=t[s+1],n=t[s+2];if(typeof l!="function"){if(Bc(l||a)===null)continue;break}var i=la(a);i!==null&&(t.splice(s,3),s-=3,kr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ma(t){function s(T){return li(T,t)}_s!==null&&li(_s,t),ks!==null&&li(ks,t),Bs!==null&&li(Bs,t),Hl.forEach(s),Al.forEach(s);for(var a=0;a<Hs.length;a++){var l=Hs[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Hs.length&&(a=Hs[0],a.blockedOn===null);)Vp(a),a.blockedOn===null&&Hs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[tt]||null;if(typeof i=="function")c||Ip(a);else if(c){var p=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[tt]||null)p=c.formAction;else if(Bc(n)!==null)continue}else p=c.action;typeof p=="function"?a[l+1]=p:(a.splice(l,3),l-=3),Ip(a)}}}function Wp(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function s(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),n!==null&&(n(),n=null)}}}function Ac(t){this._internalRoot=t}ii.prototype.render=Ac.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(d(409));var a=s.current,l=jt();Gp(a,l,t,s,null,null)},ii.prototype.unmount=Ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;Gp(t.current,2,null,t,null,null),Ln(),s[sa]=null}};function ii(t){this._internalRoot=t}ii.prototype.unstable_scheduleHydration=function(t){if(t){var s=io();t={blockedOn:null,target:t,priority:s};for(var a=0;a<Hs.length&&s!==0&&s<Hs[a].priority;a++);Hs.splice(a,0,t),a===0&&Vp(t)}};var Fp=o.version;if(Fp!=="19.2.3")throw Error(d(527,Fp,"19.2.3"));Y.findDOMNode=function(t){var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=g(s),t=t!==null?R(t):null,t=t===null?null:t.stateNode,t};var pf={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ri.isDisabled&&ri.supportsFiber)try{Ya=ri.inject(pf),ot=ri}catch{}}return wl.createRoot=function(t,s){if(!j(t))throw Error(d(299));var a=!1,l="",n=nu,i=iu,c=ru;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onUncaughtError!==void 0&&(n=s.onUncaughtError),s.onCaughtError!==void 0&&(i=s.onCaughtError),s.onRecoverableError!==void 0&&(c=s.onRecoverableError)),s=Lp(t,1,!1,null,null,a,l,null,n,i,c,Wp),t[sa]=s.current,mc(t),new Ac(s)},wl.hydrateRoot=function(t,s,a){if(!j(t))throw Error(d(299));var l=!1,n="",i=nu,c=iu,p=ru,T=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(p=a.onRecoverableError),a.formState!==void 0&&(T=a.formState)),s=Lp(t,1,!0,s,a??null,l,n,T,i,c,p,Wp),s.context=Pp(null),a=s.current,l=jt(),l=Si(l),n=js(l),n.callback=null,bs(a,n,l),a=l,s.current.lanes=a,Xa(s,a),Mt(s),t[sa]=s.current,mc(t),new ii(s)},wl.version="19.2.3",wl}var ch;function Nf(){if(ch)return wc.exports;ch=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),wc.exports=gf(),wc.exports}var Sf=Nf();const Tf=gh(Sf);var oh="popstate";function qf(r={}){function o(d,j){let{pathname:b,search:y,hash:f}=d.location;return Yc("",{pathname:b,search:y,hash:f},j.state&&j.state.usr||null,j.state&&j.state.key||"default")}function u(d,j){return typeof j=="string"?j:Ul(j)}return Rf(o,u,null,r)}function He(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Ot(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Cf(){return Math.random().toString(36).substring(2,10)}function dh(r,o){return{usr:r.state,key:r.key,idx:o}}function Yc(r,o,u=null,d){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof o=="string"?La(o):o,state:u,key:o&&o.key||d||Cf()}}function Ul({pathname:r="/",search:o="",hash:u=""}){return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(r+=u.charAt(0)==="#"?u:"#"+u),r}function La(r){let o={};if(r){let u=r.indexOf("#");u>=0&&(o.hash=r.substring(u),r=r.substring(0,u));let d=r.indexOf("?");d>=0&&(o.search=r.substring(d),r=r.substring(0,d)),r&&(o.pathname=r)}return o}function Rf(r,o,u,d={}){let{window:j=document.defaultView,v5Compat:b=!1}=d,y=j.history,f="POP",N=null,g=R();g==null&&(g=0,y.replaceState({...y.state,idx:g},""));function R(){return(y.state||{idx:null}).idx}function q(){f="POP";let m=R(),v=m==null?null:m-g;g=m,N&&N({action:f,location:H.location,delta:v})}function z(m,v){f="PUSH";let x=Yc(H.location,m,v);g=R()+1;let w=dh(x,g),se=H.createHref(x);try{y.pushState(w,"",se)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;j.location.assign(se)}b&&N&&N({action:f,location:H.location,delta:1})}function S(m,v){f="REPLACE";let x=Yc(H.location,m,v);g=R();let w=dh(x,g),se=H.createHref(x);y.replaceState(w,"",se),b&&N&&N({action:f,location:H.location,delta:0})}function O(m){return Ef(m)}let H={get action(){return f},get location(){return r(j,y)},listen(m){if(N)throw new Error("A history only accepts one active listener");return j.addEventListener(oh,q),N=m,()=>{j.removeEventListener(oh,q),N=null}},createHref(m){return o(j,m)},createURL:O,encodeLocation(m){let v=O(m);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:z,replace:S,go(m){return y.go(m)}};return H}function Ef(r,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),He(u,"No window.location.(origin|href) available to create URL");let d=typeof r=="string"?r:Ul(r);return d=d.replace(/ $/,"%20"),!o&&d.startsWith("//")&&(d=u+d),new URL(d,u)}function Nh(r,o,u="/"){return _f(r,o,u,!1)}function _f(r,o,u,d){let j=typeof o=="string"?La(o):o,b=rs(j.pathname||"/",u);if(b==null)return null;let y=Sh(r);kf(y);let f=null;for(let N=0;f==null&&N<y.length;++N){let g=Pf(b);f=Mf(y[N],g,d)}return f}function Sh(r,o=[],u=[],d="",j=!1){let b=(y,f,N=j,g)=>{let R={relativePath:g===void 0?y.path||"":g,caseSensitive:y.caseSensitive===!0,childrenIndex:f,route:y};if(R.relativePath.startsWith("/")){if(!R.relativePath.startsWith(d)&&N)return;He(R.relativePath.startsWith(d),`Absolute route path "${R.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),R.relativePath=R.relativePath.slice(d.length)}let q=is([d,R.relativePath]),z=u.concat(R);y.children&&y.children.length>0&&(He(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${q}".`),Sh(y.children,o,z,q,N)),!(y.path==null&&!y.index)&&o.push({path:q,score:Df(q,y.index),routesMeta:z})};return r.forEach((y,f)=>{if(y.path===""||!y.path?.includes("?"))b(y,f);else for(let N of Th(y.path))b(y,f,!0,N)}),o}function Th(r){let o=r.split("/");if(o.length===0)return[];let[u,...d]=o,j=u.endsWith("?"),b=u.replace(/\?$/,"");if(d.length===0)return j?[b,""]:[b];let y=Th(d.join("/")),f=[];return f.push(...y.map(N=>N===""?b:[b,N].join("/"))),j&&f.push(...y),f.map(N=>r.startsWith("/")&&N===""?"/":N)}function kf(r){r.sort((o,u)=>o.score!==u.score?u.score-o.score:Uf(o.routesMeta.map(d=>d.childrenIndex),u.routesMeta.map(d=>d.childrenIndex)))}var Bf=/^:[\w-]+$/,Hf=3,Af=2,Of=1,zf=10,wf=-2,uh=r=>r==="*";function Df(r,o){let u=r.split("/"),d=u.length;return u.some(uh)&&(d+=wf),o&&(d+=Af),u.filter(j=>!uh(j)).reduce((j,b)=>j+(Bf.test(b)?Hf:b===""?Of:zf),d)}function Uf(r,o){return r.length===o.length&&r.slice(0,-1).every((d,j)=>d===o[j])?r[r.length-1]-o[o.length-1]:0}function Mf(r,o,u=!1){let{routesMeta:d}=r,j={},b="/",y=[];for(let f=0;f<d.length;++f){let N=d[f],g=f===d.length-1,R=b==="/"?o:o.slice(b.length)||"/",q=ui({path:N.relativePath,caseSensitive:N.caseSensitive,end:g},R),z=N.route;if(!q&&g&&u&&!d[d.length-1].route.index&&(q=ui({path:N.relativePath,caseSensitive:N.caseSensitive,end:!1},R)),!q)return null;Object.assign(j,q.params),y.push({params:j,pathname:is([b,q.pathname]),pathnameBase:Xf(is([b,q.pathnameBase])),route:z}),q.pathnameBase!=="/"&&(b=is([b,q.pathnameBase]))}return y}function ui(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[u,d]=Lf(r.path,r.caseSensitive,r.end),j=o.match(u);if(!j)return null;let b=j[0],y=b.replace(/(.)\/+$/,"$1"),f=j.slice(1);return{params:d.reduce((g,{paramName:R,isOptional:q},z)=>{if(R==="*"){let O=f[z]||"";y=b.slice(0,b.length-O.length).replace(/(.)\/+$/,"$1")}const S=f[z];return q&&!S?g[R]=void 0:g[R]=(S||"").replace(/%2F/g,"/"),g},{}),pathname:b,pathnameBase:y,pattern:r}}function Lf(r,o=!1,u=!0){Ot(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let d=[],j="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,f,N)=>(d.push({paramName:f,isOptional:N!=null}),N?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(d.push({paramName:"*"}),j+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?j+="\\/*$":r!==""&&r!=="/"&&(j+="(?:(?=\\/|$))"),[new RegExp(j,o?void 0:"i"),d]}function Pf(r){try{return r.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Ot(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),r}}function rs(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,d=r.charAt(u);return d&&d!=="/"?null:r.slice(u)||"/"}var qh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gf=r=>qh.test(r);function Yf(r,o="/"){let{pathname:u,search:d="",hash:j=""}=typeof r=="string"?La(r):r,b;if(u)if(Gf(u))b=u;else{if(u.includes("//")){let y=u;u=u.replace(/\/\/+/g,"/"),Ot(!1,`Pathnames cannot have embedded double slashes - normalizing ${y} -> ${u}`)}u.startsWith("/")?b=ph(u.substring(1),"/"):b=ph(u,o)}else b=o;return{pathname:b,search:Zf(d),hash:Jf(j)}}function ph(r,o){let u=o.replace(/\/+$/,"").split("/");return r.split("/").forEach(j=>{j===".."?u.length>1&&u.pop():j!=="."&&u.push(j)}),u.length>1?u.join("/"):"/"}function Lc(r,o,u,d){return`Cannot include a '${r}' character in a manually specified \`to.${o}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Qf(r){return r.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function Ch(r){let o=Qf(r);return o.map((u,d)=>d===o.length-1?u.pathname:u.pathnameBase)}function Rh(r,o,u,d=!1){let j;typeof r=="string"?j=La(r):(j={...r},He(!j.pathname||!j.pathname.includes("?"),Lc("?","pathname","search",j)),He(!j.pathname||!j.pathname.includes("#"),Lc("#","pathname","hash",j)),He(!j.search||!j.search.includes("#"),Lc("#","search","hash",j)));let b=r===""||j.pathname==="",y=b?"/":j.pathname,f;if(y==null)f=u;else{let q=o.length-1;if(!d&&y.startsWith("..")){let z=y.split("/");for(;z[0]==="..";)z.shift(),q-=1;j.pathname=z.join("/")}f=q>=0?o[q]:"/"}let N=Yf(j,f),g=y&&y!=="/"&&y.endsWith("/"),R=(b||y===".")&&u.endsWith("/");return!N.pathname.endsWith("/")&&(g||R)&&(N.pathname+="/"),N}var is=r=>r.join("/").replace(/\/\/+/g,"/"),Xf=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Zf=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Jf=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Vf=class{constructor(r,o,u,d=!1){this.status=r,this.statusText=o||"",this.internal=d,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function Kf(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function If(r){return r.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Eh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _h(r,o){let u=r;if(typeof u!="string"||!qh.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let d=u,j=!1;if(Eh)try{let b=new URL(window.location.href),y=u.startsWith("//")?new URL(b.protocol+u):new URL(u),f=rs(y.pathname,o);y.origin===b.origin&&f!=null?u=f+y.search+y.hash:j=!0}catch{Ot(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:j,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var kh=["POST","PUT","PATCH","DELETE"];new Set(kh);var Wf=["GET",...kh];new Set(Wf);var Pa=h.createContext(null);Pa.displayName="DataRouter";var mi=h.createContext(null);mi.displayName="DataRouterState";var Ff=h.createContext(!1),Bh=h.createContext({isTransitioning:!1});Bh.displayName="ViewTransition";var $f=h.createContext(new Map);$f.displayName="Fetchers";var ej=h.createContext(null);ej.displayName="Await";var _t=h.createContext(null);_t.displayName="Navigation";var Ml=h.createContext(null);Ml.displayName="Location";var cs=h.createContext({outlet:null,matches:[],isDataRoute:!1});cs.displayName="Route";var Zc=h.createContext(null);Zc.displayName="RouteError";var Hh="REACT_ROUTER_ERROR",tj="REDIRECT",sj="ROUTE_ERROR_RESPONSE";function aj(r){if(r.startsWith(`${Hh}:${tj}:{`))try{let o=JSON.parse(r.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function lj(r){if(r.startsWith(`${Hh}:${sj}:{`))try{let o=JSON.parse(r.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new Vf(o.status,o.statusText,o.data)}catch{}}function nj(r,{relative:o}={}){He(Ll(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:d}=h.useContext(_t),{hash:j,pathname:b,search:y}=Pl(r,{relative:o}),f=b;return u!=="/"&&(f=b==="/"?u:is([u,b])),d.createHref({pathname:f,search:y,hash:j})}function Ll(){return h.useContext(Ml)!=null}function Os(){return He(Ll(),"useLocation() may be used only in the context of a <Router> component."),h.useContext(Ml).location}var Ah="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Oh(r){h.useContext(_t).static||h.useLayoutEffect(r)}function ij(){let{isDataRoute:r}=h.useContext(cs);return r?vj():rj()}function rj(){He(Ll(),"useNavigate() may be used only in the context of a <Router> component.");let r=h.useContext(Pa),{basename:o,navigator:u}=h.useContext(_t),{matches:d}=h.useContext(cs),{pathname:j}=Os(),b=JSON.stringify(Ch(d)),y=h.useRef(!1);return Oh(()=>{y.current=!0}),h.useCallback((N,g={})=>{if(Ot(y.current,Ah),!y.current)return;if(typeof N=="number"){u.go(N);return}let R=Rh(N,JSON.parse(b),j,g.relative==="path");r==null&&o!=="/"&&(R.pathname=R.pathname==="/"?o:is([o,R.pathname])),(g.replace?u.replace:u.push)(R,g.state,g)},[o,u,b,j,r])}h.createContext(null);function Pl(r,{relative:o}={}){let{matches:u}=h.useContext(cs),{pathname:d}=Os(),j=JSON.stringify(Ch(u));return h.useMemo(()=>Rh(r,JSON.parse(j),d,o==="path"),[r,j,d,o])}function cj(r,o){return zh(r,o)}function zh(r,o,u,d,j){He(Ll(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:b}=h.useContext(_t),{matches:y}=h.useContext(cs),f=y[y.length-1],N=f?f.params:{},g=f?f.pathname:"/",R=f?f.pathnameBase:"/",q=f&&f.route;{let x=q&&q.path||"";Dh(g,!q||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let z=Os(),S;if(o){let x=typeof o=="string"?La(o):o;He(R==="/"||x.pathname?.startsWith(R),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${R}" but pathname "${x.pathname}" was given in the \`location\` prop.`),S=x}else S=z;let O=S.pathname||"/",H=O;if(R!=="/"){let x=R.replace(/^\//,"").split("/");H="/"+O.replace(/^\//,"").split("/").slice(x.length).join("/")}let m=Nh(r,{pathname:H});Ot(q||m!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Ot(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=hj(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},N,x.params),pathname:is([R,b.encodeLocation?b.encodeLocation(x.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?R:is([R,b.encodeLocation?b.encodeLocation(x.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),y,u,d,j);return o&&v?h.createElement(Ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},v):v}function oj(){let r=bj(),o=Kf(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),u=r instanceof Error?r.stack:null,d="rgba(200,200,200, 0.5)",j={padding:"0.5rem",backgroundColor:d},b={padding:"2px 4px",backgroundColor:d},y=null;return console.error("Error handled by React Router default ErrorBoundary:",r),y=h.createElement(h.Fragment,null,h.createElement("p",null,"💿 Hey developer 👋"),h.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",h.createElement("code",{style:b},"ErrorBoundary")," or"," ",h.createElement("code",{style:b},"errorElement")," prop on your route.")),h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},o),u?h.createElement("pre",{style:j},u):null,y)}var dj=h.createElement(oj,null),wh=class extends h.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){this.props.onError?this.props.onError(r,o):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const u=lj(r.digest);u&&(r=u)}let o=r!==void 0?h.createElement(cs.Provider,{value:this.props.routeContext},h.createElement(Zc.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?h.createElement(uj,{error:r},o):o}};wh.contextType=Ff;var Pc=new WeakMap;function uj({children:r,error:o}){let{basename:u}=h.useContext(_t);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let d=aj(o.digest);if(d){let j=Pc.get(o);if(j)throw j;let b=_h(d.location,u);if(Eh&&!Pc.get(o))if(b.isExternal||d.reloadDocument)window.location.href=b.absoluteURL||b.to;else{const y=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(b.to,{replace:d.replace}));throw Pc.set(o,y),y}return h.createElement("meta",{httpEquiv:"refresh",content:`0;url=${b.absoluteURL||b.to}`})}}return r}function pj({routeContext:r,match:o,children:u}){let d=h.useContext(Pa);return d&&d.static&&d.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=o.route.id),h.createElement(cs.Provider,{value:r},u)}function hj(r,o=[],u=null,d=null,j=null){if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let b=r,y=u?.errors;if(y!=null){let R=b.findIndex(q=>q.route.id&&y?.[q.route.id]!==void 0);He(R>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),b=b.slice(0,Math.min(b.length,R+1))}let f=!1,N=-1;if(u)for(let R=0;R<b.length;R++){let q=b[R];if((q.route.HydrateFallback||q.route.hydrateFallbackElement)&&(N=R),q.route.id){let{loaderData:z,errors:S}=u,O=q.route.loader&&!z.hasOwnProperty(q.route.id)&&(!S||S[q.route.id]===void 0);if(q.route.lazy||O){f=!0,N>=0?b=b.slice(0,N+1):b=[b[0]];break}}}let g=u&&d?(R,q)=>{d(R,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:If(u.matches),errorInfo:q})}:void 0;return b.reduceRight((R,q,z)=>{let S,O=!1,H=null,m=null;u&&(S=y&&q.route.id?y[q.route.id]:void 0,H=q.route.errorElement||dj,f&&(N<0&&z===0?(Dh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),O=!0,m=null):N===z&&(O=!0,m=q.route.hydrateFallbackElement||null)));let v=o.concat(b.slice(0,z+1)),x=()=>{let w;return S?w=H:O?w=m:q.route.Component?w=h.createElement(q.route.Component,null):q.route.element?w=q.route.element:w=R,h.createElement(pj,{match:q,routeContext:{outlet:R,matches:v,isDataRoute:u!=null},children:w})};return u&&(q.route.ErrorBoundary||q.route.errorElement||z===0)?h.createElement(wh,{location:u.location,revalidation:u.revalidation,component:H,error:S,children:x(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:g}):x()},null)}function Jc(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mj(r){let o=h.useContext(Pa);return He(o,Jc(r)),o}function xj(r){let o=h.useContext(mi);return He(o,Jc(r)),o}function fj(r){let o=h.useContext(cs);return He(o,Jc(r)),o}function Vc(r){let o=fj(r),u=o.matches[o.matches.length-1];return He(u.route.id,`${r} can only be used on routes that contain a unique "id"`),u.route.id}function jj(){return Vc("useRouteId")}function bj(){let r=h.useContext(Zc),o=xj("useRouteError"),u=Vc("useRouteError");return r!==void 0?r:o.errors?.[u]}function vj(){let{router:r}=mj("useNavigate"),o=Vc("useNavigate"),u=h.useRef(!1);return Oh(()=>{u.current=!0}),h.useCallback(async(j,b={})=>{Ot(u.current,Ah),u.current&&(typeof j=="number"?await r.navigate(j):await r.navigate(j,{fromRouteId:o,...b}))},[r,o])}var hh={};function Dh(r,o,u){!o&&!hh[r]&&(hh[r]=!0,Ot(!1,u))}h.memo(yj);function yj({routes:r,future:o,state:u,onError:d}){return zh(r,void 0,u,d,o)}function xe(r){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function gj({basename:r="/",children:o=null,location:u,navigationType:d="POP",navigator:j,static:b=!1,unstable_useTransitions:y}){He(!Ll(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),N=h.useMemo(()=>({basename:f,navigator:j,static:b,unstable_useTransitions:y,future:{}}),[f,j,b,y]);typeof u=="string"&&(u=La(u));let{pathname:g="/",search:R="",hash:q="",state:z=null,key:S="default"}=u,O=h.useMemo(()=>{let H=rs(g,f);return H==null?null:{location:{pathname:H,search:R,hash:q,state:z,key:S},navigationType:d}},[f,g,R,q,z,S,d]);return Ot(O!=null,`<Router basename="${f}"> is not able to match the URL "${g}${R}${q}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:h.createElement(_t.Provider,{value:N},h.createElement(Ml.Provider,{children:o,value:O}))}function Nj({children:r,location:o}){return cj(Qc(r),o)}function Qc(r,o=[]){let u=[];return h.Children.forEach(r,(d,j)=>{if(!h.isValidElement(d))return;let b=[...o,j];if(d.type===h.Fragment){u.push.apply(u,Qc(d.props.children,b));return}He(d.type===xe,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!d.props.index||!d.props.children,"An index route cannot have child routes.");let y={id:d.props.id||b.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(y.children=Qc(d.props.children,b)),u.push(y)}),u}var oi="get",di="application/x-www-form-urlencoded";function xi(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Sj(r){return xi(r)&&r.tagName.toLowerCase()==="button"}function Tj(r){return xi(r)&&r.tagName.toLowerCase()==="form"}function qj(r){return xi(r)&&r.tagName.toLowerCase()==="input"}function Cj(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Rj(r,o){return r.button===0&&(!o||o==="_self")&&!Cj(r)}var ci=null;function Ej(){if(ci===null)try{new FormData(document.createElement("form"),0),ci=!1}catch{ci=!0}return ci}var _j=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gc(r){return r!=null&&!_j.has(r)?(Ot(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${di}"`),null):r}function kj(r,o){let u,d,j,b,y;if(Tj(r)){let f=r.getAttribute("action");d=f?rs(f,o):null,u=r.getAttribute("method")||oi,j=Gc(r.getAttribute("enctype"))||di,b=new FormData(r)}else if(Sj(r)||qj(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let N=r.getAttribute("formaction")||f.getAttribute("action");if(d=N?rs(N,o):null,u=r.getAttribute("formmethod")||f.getAttribute("method")||oi,j=Gc(r.getAttribute("formenctype"))||Gc(f.getAttribute("enctype"))||di,b=new FormData(f,r),!Ej()){let{name:g,type:R,value:q}=r;if(R==="image"){let z=g?`${g}.`:"";b.append(`${z}x`,"0"),b.append(`${z}y`,"0")}else g&&b.append(g,q)}}else{if(xi(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=oi,d=null,j=di,y=r}return b&&j==="text/plain"&&(y=b,b=void 0),{action:d,method:u.toLowerCase(),encType:j,formData:b,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kc(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Bj(r,o,u,d){let j=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u?j.pathname.endsWith("/")?j.pathname=`${j.pathname}_.${d}`:j.pathname=`${j.pathname}.${d}`:j.pathname==="/"?j.pathname=`_root.${d}`:o&&rs(j.pathname,o)==="/"?j.pathname=`${o.replace(/\/$/,"")}/_root.${d}`:j.pathname=`${j.pathname.replace(/\/$/,"")}.${d}`,j}async function Hj(r,o){if(r.id in o)return o[r.id];try{let u=await import(r.module);return o[r.id]=u,u}catch(u){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Aj(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Oj(r,o,u){let d=await Promise.all(r.map(async j=>{let b=o.routes[j.route.id];if(b){let y=await Hj(b,u);return y.links?y.links():[]}return[]}));return Uj(d.flat(1).filter(Aj).filter(j=>j.rel==="stylesheet"||j.rel==="preload").map(j=>j.rel==="stylesheet"?{...j,rel:"prefetch",as:"style"}:{...j,rel:"prefetch"}))}function mh(r,o,u,d,j,b){let y=(N,g)=>u[g]?N.route.id!==u[g].route.id:!0,f=(N,g)=>u[g].pathname!==N.pathname||u[g].route.path?.endsWith("*")&&u[g].params["*"]!==N.params["*"];return b==="assets"?o.filter((N,g)=>y(N,g)||f(N,g)):b==="data"?o.filter((N,g)=>{let R=d.routes[N.route.id];if(!R||!R.hasLoader)return!1;if(y(N,g)||f(N,g))return!0;if(N.route.shouldRevalidate){let q=N.route.shouldRevalidate({currentUrl:new URL(j.pathname+j.search+j.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:N.params,defaultShouldRevalidate:!0});if(typeof q=="boolean")return q}return!0}):[]}function zj(r,o,{includeHydrateFallback:u}={}){return wj(r.map(d=>{let j=o.routes[d.route.id];if(!j)return[];let b=[j.module];return j.clientActionModule&&(b=b.concat(j.clientActionModule)),j.clientLoaderModule&&(b=b.concat(j.clientLoaderModule)),u&&j.hydrateFallbackModule&&(b=b.concat(j.hydrateFallbackModule)),j.imports&&(b=b.concat(j.imports)),b}).flat(1))}function wj(r){return[...new Set(r)]}function Dj(r){let o={},u=Object.keys(r).sort();for(let d of u)o[d]=r[d];return o}function Uj(r,o){let u=new Set;return new Set(o),r.reduce((d,j)=>{let b=JSON.stringify(Dj(j));return u.has(b)||(u.add(b),d.push({key:b,link:j})),d},[])}function Uh(){let r=h.useContext(Pa);return Kc(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Mj(){let r=h.useContext(mi);return Kc(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ic=h.createContext(void 0);Ic.displayName="FrameworkContext";function Mh(){let r=h.useContext(Ic);return Kc(r,"You must render this element inside a <HydratedRouter> element"),r}function Lj(r,o){let u=h.useContext(Ic),[d,j]=h.useState(!1),[b,y]=h.useState(!1),{onFocus:f,onBlur:N,onMouseEnter:g,onMouseLeave:R,onTouchStart:q}=o,z=h.useRef(null);h.useEffect(()=>{if(r==="render"&&y(!0),r==="viewport"){let H=v=>{v.forEach(x=>{y(x.isIntersecting)})},m=new IntersectionObserver(H,{threshold:.5});return z.current&&m.observe(z.current),()=>{m.disconnect()}}},[r]),h.useEffect(()=>{if(d){let H=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(H)}}},[d]);let S=()=>{j(!0)},O=()=>{j(!1),y(!1)};return u?r!=="intent"?[b,z,{}]:[b,z,{onFocus:Dl(f,S),onBlur:Dl(N,O),onMouseEnter:Dl(g,S),onMouseLeave:Dl(R,O),onTouchStart:Dl(q,S)}]:[!1,z,{}]}function Dl(r,o){return u=>{r&&r(u),u.defaultPrevented||o(u)}}function Pj({page:r,...o}){let{router:u}=Uh(),d=h.useMemo(()=>Nh(u.routes,r,u.basename),[u.routes,r,u.basename]);return d?h.createElement(Yj,{page:r,matches:d,...o}):null}function Gj(r){let{manifest:o,routeModules:u}=Mh(),[d,j]=h.useState([]);return h.useEffect(()=>{let b=!1;return Oj(r,o,u).then(y=>{b||j(y)}),()=>{b=!0}},[r,o,u]),d}function Yj({page:r,matches:o,...u}){let d=Os(),{future:j,manifest:b,routeModules:y}=Mh(),{basename:f}=Uh(),{loaderData:N,matches:g}=Mj(),R=h.useMemo(()=>mh(r,o,g,b,d,"data"),[r,o,g,b,d]),q=h.useMemo(()=>mh(r,o,g,b,d,"assets"),[r,o,g,b,d]),z=h.useMemo(()=>{if(r===d.pathname+d.search+d.hash)return[];let H=new Set,m=!1;if(o.forEach(x=>{let w=b.routes[x.route.id];!w||!w.hasLoader||(!R.some(se=>se.route.id===x.route.id)&&x.route.id in N&&y[x.route.id]?.shouldRevalidate||w.hasClientLoader?m=!0:H.add(x.route.id))}),H.size===0)return[];let v=Bj(r,f,j.unstable_trailingSlashAwareDataRequests,"data");return m&&H.size>0&&v.searchParams.set("_routes",o.filter(x=>H.has(x.route.id)).map(x=>x.route.id).join(",")),[v.pathname+v.search]},[f,j.unstable_trailingSlashAwareDataRequests,N,d,b,R,o,r,y]),S=h.useMemo(()=>zj(q,b),[q,b]),O=Gj(q);return h.createElement(h.Fragment,null,z.map(H=>h.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...u})),S.map(H=>h.createElement("link",{key:H,rel:"modulepreload",href:H,...u})),O.map(({key:H,link:m})=>h.createElement("link",{key:H,nonce:u.nonce,...m})))}function Qj(...r){return o=>{r.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var Xj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xj&&(window.__reactRouterVersion="7.12.0")}catch{}function Zj({basename:r,children:o,unstable_useTransitions:u,window:d}){let j=h.useRef();j.current==null&&(j.current=qf({window:d,v5Compat:!0}));let b=j.current,[y,f]=h.useState({action:b.action,location:b.location}),N=h.useCallback(g=>{u===!1?f(g):h.startTransition(()=>f(g))},[u]);return h.useLayoutEffect(()=>b.listen(N),[b,N]),h.createElement(gj,{basename:r,children:o,location:y.location,navigationType:y.action,navigator:b,unstable_useTransitions:u})}var Lh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gl=h.forwardRef(function({onClick:o,discover:u="render",prefetch:d="none",relative:j,reloadDocument:b,replace:y,state:f,target:N,to:g,preventScrollReset:R,viewTransition:q,unstable_defaultShouldRevalidate:z,...S},O){let{basename:H,unstable_useTransitions:m}=h.useContext(_t),v=typeof g=="string"&&Lh.test(g),x=_h(g,H);g=x.to;let w=nj(g,{relative:j}),[se,le,$]=Lj(d,S),X=Kj(g,{replace:y,state:f,target:N,preventScrollReset:R,relative:j,viewTransition:q,unstable_defaultShouldRevalidate:z,unstable_useTransitions:m});function ie(bt){o&&o(bt),bt.defaultPrevented||X(bt)}let ze=h.createElement("a",{...S,...$,href:x.absoluteURL||w,onClick:x.isExternal||b?o:ie,ref:Qj(O,le),target:N,"data-discover":!v&&u==="render"?"true":void 0});return se&&!v?h.createElement(h.Fragment,null,ze,h.createElement(Pj,{page:w})):ze});Gl.displayName="Link";var ee=h.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:d="",end:j=!1,style:b,to:y,viewTransition:f,children:N,...g},R){let q=Pl(y,{relative:g.relative}),z=Os(),S=h.useContext(mi),{navigator:O,basename:H}=h.useContext(_t),m=S!=null&&eb(q)&&f===!0,v=O.encodeLocation?O.encodeLocation(q).pathname:q.pathname,x=z.pathname,w=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;u||(x=x.toLowerCase(),w=w?w.toLowerCase():null,v=v.toLowerCase()),w&&H&&(w=rs(w,H)||w);const se=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let le=x===v||!j&&x.startsWith(v)&&x.charAt(se)==="/",$=w!=null&&(w===v||!j&&w.startsWith(v)&&w.charAt(v.length)==="/"),X={isActive:le,isPending:$,isTransitioning:m},ie=le?o:void 0,ze;typeof d=="function"?ze=d(X):ze=[d,le?"active":null,$?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let bt=typeof b=="function"?b(X):b;return h.createElement(Gl,{...g,"aria-current":ie,className:ze,ref:R,style:bt,to:y,viewTransition:f},typeof N=="function"?N(X):N)});ee.displayName="NavLink";var Jj=h.forwardRef(({discover:r="render",fetcherKey:o,navigate:u,reloadDocument:d,replace:j,state:b,method:y=oi,action:f,onSubmit:N,relative:g,preventScrollReset:R,viewTransition:q,unstable_defaultShouldRevalidate:z,...S},O)=>{let{unstable_useTransitions:H}=h.useContext(_t),m=Fj(),v=$j(f,{relative:g}),x=y.toLowerCase()==="get"?"get":"post",w=typeof f=="string"&&Lh.test(f),se=le=>{if(N&&N(le),le.defaultPrevented)return;le.preventDefault();let $=le.nativeEvent.submitter,X=$?.getAttribute("formmethod")||y,ie=()=>m($||le.currentTarget,{fetcherKey:o,method:X,navigate:u,replace:j,state:b,relative:g,preventScrollReset:R,viewTransition:q,unstable_defaultShouldRevalidate:z});H&&u!==!1?h.startTransition(()=>ie()):ie()};return h.createElement("form",{ref:O,method:x,action:v,onSubmit:d?N:se,...S,"data-discover":!w&&r==="render"?"true":void 0})});Jj.displayName="Form";function Vj(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ph(r){let o=h.useContext(Pa);return He(o,Vj(r)),o}function Kj(r,{target:o,replace:u,state:d,preventScrollReset:j,relative:b,viewTransition:y,unstable_defaultShouldRevalidate:f,unstable_useTransitions:N}={}){let g=ij(),R=Os(),q=Pl(r,{relative:b});return h.useCallback(z=>{if(Rj(z,o)){z.preventDefault();let S=u!==void 0?u:Ul(R)===Ul(q),O=()=>g(r,{replace:S,state:d,preventScrollReset:j,relative:b,viewTransition:y,unstable_defaultShouldRevalidate:f});N?h.startTransition(()=>O()):O()}},[R,g,q,u,d,o,r,j,b,y,f,N])}var Ij=0,Wj=()=>`__${String(++Ij)}__`;function Fj(){let{router:r}=Ph("useSubmit"),{basename:o}=h.useContext(_t),u=jj(),d=r.fetch,j=r.navigate;return h.useCallback(async(b,y={})=>{let{action:f,method:N,encType:g,formData:R,body:q}=kj(b,o);if(y.navigate===!1){let z=y.fetcherKey||Wj();await d(z,u,y.action||f,{unstable_defaultShouldRevalidate:y.unstable_defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:R,body:q,formMethod:y.method||N,formEncType:y.encType||g,flushSync:y.flushSync})}else await j(y.action||f,{unstable_defaultShouldRevalidate:y.unstable_defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:R,body:q,formMethod:y.method||N,formEncType:y.encType||g,replace:y.replace,state:y.state,fromRouteId:u,flushSync:y.flushSync,viewTransition:y.viewTransition})},[d,j,o,u])}function $j(r,{relative:o}={}){let{basename:u}=h.useContext(_t),d=h.useContext(cs);He(d,"useFormAction must be used inside a RouteContext");let[j]=d.matches.slice(-1),b={...Pl(r||".",{relative:o})},y=Os();if(r==null){b.search=y.search;let f=new URLSearchParams(b.search),N=f.getAll("index");if(N.some(R=>R==="")){f.delete("index"),N.filter(q=>q).forEach(q=>f.append("index",q));let R=f.toString();b.search=R?`?${R}`:""}}return(!r||r===".")&&j.route.index&&(b.search=b.search?b.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(b.pathname=b.pathname==="/"?u:is([u,b.pathname])),Ul(b)}function eb(r,{relative:o}={}){let u=h.useContext(Bh);He(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=Ph("useViewTransitionState"),j=Pl(r,{relative:o});if(!u.isTransitioning)return!1;let b=rs(u.currentLocation.pathname,d)||u.currentLocation.pathname,y=rs(u.nextLocation.pathname,d)||u.nextLocation.pathname;return ui(j.pathname,y)!=null||ui(j.pathname,b)!=null}var Gh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xh=ta.createContext&&ta.createContext(Gh),tb=["attr","size","title"];function sb(r,o){if(r==null)return{};var u=ab(r,o),d,j;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(r);for(j=0;j<b.length;j++)d=b[j],!(o.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(r,d)&&(u[d]=r[d])}return u}function ab(r,o){if(r==null)return{};var u={};for(var d in r)if(Object.prototype.hasOwnProperty.call(r,d)){if(o.indexOf(d)>=0)continue;u[d]=r[d]}return u}function pi(){return pi=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var u=arguments[o];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(r[d]=u[d])}return r},pi.apply(this,arguments)}function fh(r,o){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);o&&(d=d.filter(function(j){return Object.getOwnPropertyDescriptor(r,j).enumerable})),u.push.apply(u,d)}return u}function hi(r){for(var o=1;o<arguments.length;o++){var u=arguments[o]!=null?arguments[o]:{};o%2?fh(Object(u),!0).forEach(function(d){lb(r,d,u[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):fh(Object(u)).forEach(function(d){Object.defineProperty(r,d,Object.getOwnPropertyDescriptor(u,d))})}return r}function lb(r,o,u){return o=nb(o),o in r?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,r}function nb(r){var o=ib(r,"string");return typeof o=="symbol"?o:o+""}function ib(r,o){if(typeof r!="object"||!r)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var d=u.call(r,o);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function Yh(r){return r&&r.map((o,u)=>ta.createElement(o.tag,hi({key:u},o.attr),Yh(o.child)))}function Lt(r){return o=>ta.createElement(rb,pi({attr:hi({},r.attr)},o),Yh(r.child))}function rb(r){var o=u=>{var{attr:d,size:j,title:b}=r,y=sb(r,tb),f=j||u.size||"1em",N;return u.className&&(N=u.className),r.className&&(N=(N?N+" ":"")+r.className),ta.createElement("svg",pi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,d,y,{className:N,style:hi(hi({color:r.color||u.color},u.style),r.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),b&&ta.createElement("title",null,b),r.children)};return xh!==void 0?ta.createElement(xh.Consumer,null,u=>o(u)):o(Gh)}function Z(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(r)}function J(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(r)}function cb(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(r)}function ob(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(r)}const jh="/bitzup-exchange/assets/logo-dark-BO2MCep8.svg",bh="/bitzup-exchange/assets/logo-light-CnaW2wfZ.svg";function V(r){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(r)}function db(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m5 8 6 6"},child:[]},{tag:"path",attr:{d:"m4 14 6-6 2-3"},child:[]},{tag:"path",attr:{d:"M2 5h12"},child:[]},{tag:"path",attr:{d:"M7 2h1"},child:[]},{tag:"path",attr:{d:"m22 22-5-10-5 10"},child:[]},{tag:"path",attr:{d:"M14 18h6"},child:[]}]})(r)}function ub(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",x2:"20",y1:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"4",x2:"20",y1:"6",y2:"6"},child:[]},{tag:"line",attr:{x1:"4",x2:"20",y1:"18",y2:"18"},child:[]}]})(r)}function vh(r){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(r)}const pb=({theme:r,setTheme:o})=>{const[u,d]=h.useState(!1),[j,b]=h.useState(!1),[y,f]=h.useState("main"),[N,g]=h.useState(!1),[R,q]=h.useState(!1),[z,S]=h.useState(!1),[O,H]=h.useState(!1),m=h.useRef(null);h.useEffect(()=>{const X=ie=>{m.current&&!m.current.contains(ie.target)&&d(!1)};return document.addEventListener("mousedown",X),()=>document.removeEventListener("mousedown",X)},[]);const[v,x]=h.useState(!1),[w,se]=h.useState("English"),le=h.useRef(null);h.useEffect(()=>{const X=ie=>{le.current&&!le.current.contains(ie.target)&&x(!1)};return document.addEventListener("mousedown",X),()=>document.removeEventListener("mousedown",X)},[]);const $=Os();return h.useEffect(()=>{$.pathname.startsWith("/docs/market")&&g(!0)},[$.pathname]),h.useEffect(()=>{$.pathname.startsWith("/docs/websocket")&&q(!0),$.pathname.startsWith("/docs/websocket/public")&&(q(!0),S(!0))},[$.pathname]),h.useEffect(()=>{$.pathname.startsWith("/docs/rate-limit")&&H(!0)},[$.pathname]),e.jsx(e.Fragment,{children:e.jsx("header",{className:"main-header",children:e.jsxs("div",{className:"container-fluid",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("span",{className:"d-lg-none",onClick:()=>{f("docs"),b(!0)},children:e.jsx(ub,{size:34})}),e.jsx(Gl,{to:"/",className:"logo",children:e.jsx("img",{src:r==="dark"?bh:jh,alt:"logo",width:120})}),e.jsx("nav",{className:"nav-links d-none d-md-flex",children:e.jsx(ee,{to:"/",style:{marginLeft:"16px"},children:"V1 API"})})]}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("div",{ref:le,className:"lang-dropdown d-none d-md-block",children:e.jsxs("span",{className:"lang-trigger",onClick:()=>x(X=>!X),children:[e.jsx(db,{}),w]})}),e.jsx("button",{className:"icon-btn",onClick:()=>o(r==="dark"?"light":"dark"),children:r==="dark"?e.jsx(ob,{}):e.jsx(cb,{})})]})]}),j&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mobile-drawer-overlay",onClick:()=>b(!1)}),e.jsxs("div",{className:"mobile-drawer",children:[e.jsxs("div",{className:"mobile-drawer-header",children:[e.jsx("img",{src:r==="dark"?bh:jh,width:110,alt:"logo"}),e.jsx("span",{className:"drawer-close",onClick:()=>b(!1),children:"✕"})]}),e.jsxs("div",{className:"drawer-screens",children:[e.jsx("div",{className:`drawer-screen main ${y==="main"?"active":""}`,children:e.jsxs("div",{children:[e.jsx(ee,{to:"/",className:({isActive:X})=>`drawer-main-item ${X?"active":""}`,children:"V5 API"}),e.jsx(ee,{to:"/p2p",className:"drawer-main-item",children:"P2P Trading"}),e.jsx(ee,{to:"/bybit-pay",className:"drawer-main-item external",children:"Bybit Pay ↗"}),e.jsx(ee,{to:"/tax-api-v3",className:"drawer-main-item",children:"Tax API V3"})]})}),e.jsxs("div",{className:`drawer-screen sub ${y==="docs"?"active":""}`,children:[e.jsxs("div",{className:"mobile-drawer-back",onClick:()=>f("main"),children:[e.jsx(vh,{})," Back to main menu"]}),e.jsx(ee,{to:"/",style:{marginTop:"8px"},onClick:()=>b(!1),className:({isActive:X})=>`drawer-main ${X?"active":""}`,children:"Integration Guidance"}),e.jsxs("div",{className:"drawer-item arrow",onClick:()=>g(!N),children:["Market ",e.jsx(V,{className:N?"rotate":""})]}),N&&e.jsxs("div",{className:"drawer-sub",children:[e.jsx(ee,{to:"/docs/market/kline",onClick:()=>b(!1),className:"drawer-sub-item",children:"Get Kline"}),e.jsx(ee,{to:"/docs/market/orderbook",onClick:()=>b(!1),className:"drawer-sub-item",children:"Get Orderbook"}),e.jsx(ee,{to:"/docs/market/tickers",onClick:()=>b(!1),className:"drawer-sub-item",children:"Get Tickers"})]}),e.jsxs("div",{className:"drawer-item arrow",onClick:()=>q(!R),children:["WebSocket Stream ",e.jsx(V,{className:R?"rotate":""})]}),R&&e.jsxs("div",{className:"drawer-sub",children:[e.jsx(ee,{to:"/docs/ws/connect",onClick:()=>b(!1),className:"drawer-sub-item",children:"Connect"}),e.jsxs("div",{className:"drawer-item arrow",onClick:()=>S(!z),children:["Public ",e.jsx(V,{className:z?"rotate":""})]}),z&&e.jsxs("div",{className:"drawer-sub deep",children:[e.jsx(ee,{to:"/docs/websocket/public/orderbook",onClick:()=>b(!1),className:"drawer-sub-item",children:"Orderbook"}),e.jsx(ee,{to:"/docs/websocket/public/trade",onClick:()=>b(!1),className:"drawer-sub-item",children:"Trade"}),e.jsx(ee,{to:"/docs/websocket/public/ticker",onClick:()=>b(!1),className:"drawer-sub-item",children:"Ticker"}),e.jsx(ee,{to:"/docs/websocket/public/kline",onClick:()=>b(!1),className:"drawer-sub-item",children:"Kline"})]})]}),e.jsxs("div",{className:"drawer-item arrow",onClick:()=>H(!O),children:["Rate Limit ",e.jsx(V,{className:O?"rotate":""})]}),O&&e.jsx("div",{className:"drawer-sub",children:e.jsx(ee,{to:"/docs/rate-limit/rate-limit-rules",onClick:()=>b(!1),className:"drawer-sub-item",children:"Rate Limit Rules"})}),e.jsx(ee,{to:"/docs/enums",onClick:()=>b(!1),className:"drawer-main",children:"Enums Definitions"})]}),e.jsx("div",{className:`drawer-screen sub ${y==="languages"?"active":""}`,children:e.jsxs("div",{className:"mobile-drawer-back",onClick:()=>f("main"),children:[e.jsx(vh,{})," Back to main menu"]})})]})]})]})]})})})};function hb(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"},child:[]}]})(r)}function mb(r){return Lt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"},child:[]}]})(r)}const xb=()=>{const[r,o]=h.useState(null),[u,d]=h.useState(null),[j,b]=h.useState(null),[y,f]=h.useState(null),[N,g]=h.useState(null),[R,q]=h.useState(localStorage.getItem("sidebar")==="collapsed");return h.useEffect(()=>{localStorage.setItem("sidebar",R?"collapsed":"open")},[R]),e.jsxs("aside",{className:`sidebar ${R?"collapsed":""}`,children:[e.jsxs("div",{className:"sidebar-scroll",children:[e.jsx(ee,{to:"/",className:"sidebar-link",children:"Integration Guidance"}),e.jsxs("div",{className:"sidebar-section collapsible sidebar-link",onClick:()=>o(r==="market"?null:"market"),children:[e.jsx("span",{children:"Market"}),e.jsx(V,{className:r==="market"?"rotate":""})]}),r==="market"&&e.jsxs("div",{className:"sidebar-sub",children:[e.jsx(ee,{to:"/docs/market/kline",className:"sidebar-link",children:"Get Kline"}),e.jsx(ee,{to:"/docs/market/orderbook",className:"sidebar-link",children:"Get Orderbook"}),e.jsx(ee,{to:"/docs/market/tickers",className:"sidebar-link",children:"Get Tickers"}),e.jsx(ee,{to:"/docs/market/recent-public-trades",className:"sidebar-link",children:"Get Recent Public Trades"}),e.jsx(ee,{to:"/docs/market/market-info",className:"sidebar-link",children:"Market Info"})]}),e.jsxs("div",{className:"sidebar-section collapsible sidebar-link",onClick:()=>g(N==="private"?null:"private"),children:[e.jsx("span",{children:"Private"}),e.jsx(V,{className:N==="private"?"rotate":""})]}),N==="private"&&e.jsxs("div",{className:"sidebar-sub",children:[e.jsx(ee,{to:"/docs/private/get-positions",className:"sidebar-link",children:"Get Positions"}),e.jsx(ee,{to:"/docs/private/get-open-orders",className:"sidebar-link",children:"Get Open Orders"}),e.jsx(ee,{to:"/docs/private/get-order-history",className:"sidebar-link",children:"Get Order History"}),e.jsx(ee,{to:"/docs/private/get-trade-history",className:"sidebar-link",children:"Get Trade History"}),e.jsx(ee,{to:"/docs/private/get-closed-pnl",className:"sidebar-link",children:"Get Closed PnL"}),e.jsx(ee,{to:"/docs/private/get-wallet-balance",className:"sidebar-link",children:"Get Wallet Balance"}),e.jsx(ee,{to:"/docs/private/get-leverage",className:"sidebar-link",children:"Get Leverage"}),e.jsx(ee,{to:"/docs/private/get-margin-mode",className:"sidebar-link",children:"Get Margin Mode"}),e.jsx(ee,{to:"/docs/private/set-leverage",className:"sidebar-link",children:"Set Leverage"}),e.jsx(ee,{to:"/docs/private/switch-margin-mode",className:"sidebar-link",children:"Switch Margin Mode"}),e.jsx(ee,{to:"/docs/private/add-isolated-margin",className:"sidebar-link",children:"Add Isolated Margin"}),e.jsx(ee,{to:"/docs/private/auto-isolated-margin",className:"sidebar-link",children:"Auto Isolated Margin"}),e.jsx(ee,{to:"/docs/private/set-trading-stop",className:"sidebar-link",children:"Set Trading Stop"}),e.jsx(ee,{to:"/docs/private/place-order",className:"sidebar-link",children:"Place Order"}),e.jsx(ee,{to:"/docs/private/cancel-order",className:"sidebar-link",children:"Cancel Order"}),e.jsx(ee,{to:"/docs/private/cancel-all-orders",className:"sidebar-link",children:"Cancel All Orders"}),e.jsx(ee,{to:"/docs/private/modify-order",className:"sidebar-link",children:"Modify Order"}),e.jsx(ee,{to:"/docs/private/close-position",className:"sidebar-link",children:"Close Position"}),e.jsx(ee,{to:"/docs/private/close-all-position",className:"sidebar-link",children:"Close All Positions"}),e.jsx(ee,{to:"/docs/private/estimate-liquidation-price",className:"sidebar-link",children:"Estimate Liquidation Price"}),e.jsx(ee,{to:"/docs/private/deposit-to-sub-acc",className:"sidebar-link",children:"Deposit to Sub Account"}),e.jsx(ee,{to:"/docs/private/withdraw-from-sub-acc",className:"sidebar-link",children:"Withdraw from Sub Account"})]}),e.jsxs("div",{className:"sidebar-section collapsible sidebar-link",onClick:()=>d(u==="ws"?null:"ws"),children:[e.jsx("span",{children:"WebSocket Stream"}),e.jsx(V,{className:u==="ws"?"rotate":""})]}),u==="ws"&&e.jsxs("div",{className:"sidebar-sub",children:[e.jsx(ee,{to:"/docs/ws/connect",className:"sidebar-link",children:"Connect"}),e.jsxs("div",{className:"sidebar-section collapsible sidebar-link sub-header",onClick:()=>b(j==="public"?null:"public"),children:[e.jsx("span",{children:"Public"}),e.jsx(V,{className:j==="public"?"rotate":""})]}),j==="public"&&e.jsxs("div",{className:"sidebar-sub deep",children:[e.jsx(ee,{to:"/docs/websocket/public/orderbook",className:"sidebar-link",children:"Orderbook"}),e.jsx(ee,{to:"/docs/websocket/public/trade",className:"sidebar-link",children:"Trade"}),e.jsx(ee,{to:"/docs/websocket/public/ticker",className:"sidebar-link",children:"Ticker"}),e.jsx(ee,{to:"/docs/websocket/public/kline",className:"sidebar-link",children:"Kline"})]})]}),e.jsxs("div",{className:"sidebar-section collapsible sidebar-link",onClick:()=>f(y==="market"?null:"market"),children:[e.jsx("span",{children:"Rate Limit"}),e.jsx(V,{className:y==="market"?"rotate":""})]}),y==="market"&&e.jsx("div",{className:"sidebar-sub",children:e.jsx(ee,{to:"/docs/rate-limit/rate-limit-rules",className:"sidebar-link",children:"Rate Limit Rules"})}),e.jsx(ee,{to:"/docs/enums",className:"sidebar-link",children:"Enums Definitions"})]}),e.jsx("div",{className:"sidebar-footer",children:e.jsx("button",{className:"collapse-btn",onClick:()=>q(!R),children:R?e.jsx(mb,{}):e.jsx(hb,{})})})]})},fb=()=>{const[r,o]=h.useState("GET"),[u,d]=h.useState(!1),[j,b]=h.useState(!1),y=()=>`{
  "status": 0,
  "message": "error message",
  "data": {},
}`,f=async()=>{await navigator.clipboard.writeText(g[r]),d(!0),setTimeout(()=>d(!1),1500)},N=async()=>{await navigator.clipboard.writeText(y()),b(!0),setTimeout(()=>b(!1),1500)},g={GET:`GET /v5/order/realtime?category=option&symbol=BTC-29JUL22-25000-C HTTP/1.1
Host: api-testnet.bybit.com`};return e.jsx("div",{className:"container-fluid p-0",children:e.jsxs("div",{className:"api-layout",children:[e.jsx("h1",{className:"api-title",children:"Integration Guidance"}),e.jsxs("div",{className:"alert-success api-tip mb-4",children:[e.jsx("strong",{children:"TIP:"})," To learn more about the V5 API, please read the introduction."]}),e.jsx("h3",{className:"top-req-text",children:"Authentication"}),e.jsx("p",{className:"api-desc",children:"Please visit BitZup website to generate an API key."}),e.jsx("h3",{className:"top-req-text",children:"REST API Base Endpoint:"}),e.jsxs("p",{className:"api-desc mb-3",children:["Mainnet:"," ",e.jsx("span",{className:"futures-text-api",children:"https://api.bitzup.com/futures/api"})]}),e.jsx("h6",{className:"top-req-text mb-2",children:"HTTP request example"}),e.jsx("div",{className:"lang-tabs",children:["GET"].map(R=>e.jsx("button",{className:r===R?"active":"",onClick:()=>o(R),children:R},R))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:f,children:u?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:g[r]})})]}),e.jsx("h3",{className:"top-req-text",children:"Common response parameters"}),e.jsx("div",{className:"api-table-box mb-4",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"status"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Success/Error code. 1: success, 0/3: error"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Success/Error msg.",e.jsx("span",{className:"pill",children:"SUCCESS"}),"indicates a successful response"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data"}),e.jsx("td",{children:"Object"}),e.jsx("td",{children:"Business data result"})]})]})]})}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:N,children:j?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "status": 0,',`
`,' "message":'," ",e.jsx("span",{className:"json-string",children:'"error message"'}),",",`
`," ",'"data": ',"{","}",",",`
`,"}"]})})]})]})})},jb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
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
      }`,H={HTTP:`GET /v1/kline?category=inverse&symbol=BTCUSD&interval=60&start=1670601600000&end=1670608800000 HTTP/1.1
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

getKline();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Market"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Kline"})]}),e.jsx("h1",{className:"api-title",children:"Get Kline"}),e.jsx("p",{className:"api-desc",children:"Query for historical klines (also known as candles/candlesticks). Charts are returned in groups based on the requested interval."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method",children:"GET"}),e.jsx("span",{className:"path",children:"/v1/kline"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, like",e.jsx("span",{className:"pill",children:"BTCUSDT"}),", uppercase only"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"interval"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Kline interval:",e.jsxs("ul",{style:{display:"flex",flexWrap:"wrap",gap:"6px",listStyle:"none",padding:0},children:[e.jsx("li",{children:e.jsx("span",{className:"pill",children:"1"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"3"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"5"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"15"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"60"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"120"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"240"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"360"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"720"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"D"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"W"})}),e.jsx("li",{children:e.jsx("span",{className:"pill",children:"M"})})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"start"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"integer"}),e.jsx("td",{children:"The start timestamp (ms) "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"end"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"integer"}),e.jsx("td",{children:"The end timestamp (ms) "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"limit"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"integer"}),e.jsxs("td",{children:["Limit for data size per page. [",e.jsx("span",{className:"pill",children:"1"}),",",e.jsx("span",{className:"pill",children:"1000"})," ]. Default:"," ",e.jsx("span",{className:"pill",children:" 200 "})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"category"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Product type"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"list"}),e.jsx("td",{children:"array"}),e.jsx("td",{children:e.jsxs("ul",{children:[e.jsx("li",{children:"An string array of individual candle"}),e.jsxs("li",{children:["Sort in reverse by"," ",e.jsx("span",{className:"pill",children:"startTime"})]})]})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," list[0]: startTime"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Start time of the candle (ms)"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," list[1]: openPrice"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Open price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," list[2]: highPrice"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Highest price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," list[3]: lowPrice"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Lowest price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," list[4]: closePrice"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Close price. Is the last traded price when the candle is not closed"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," list[5]: volume"]}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Trade volume",e.jsx("ul",{children:e.jsx("li",{children:"USDT contract: unit is base coin (e.g., BTC)"})})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," list[6]: turnover"]}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Turnover",e.jsx("ul",{children:e.jsx("li",{children:"USDT contract: unit is quote coin (e.g., USDT)"})})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
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
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},bb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
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
}`,H={HTTP:`GET /v1/get-order-book?symbol=BTCUSDT&limit=2 HTTP/1.1
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

getOrderBook();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Market"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get OrderBook"})]}),e.jsx("h1",{className:"api-title",children:"Get OrderBook"}),e.jsx("p",{className:"api-desc",children:"Query for orderbook depth data."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsxs("div",{className:"api-info-box",children:[e.jsxs("div",{className:"api-info-header",children:[e.jsx("span",{className:"api-info-icon",children:"!"}),e.jsx("span",{className:"api-info-title",children:"INFO"})]}),e.jsx("ul",{className:"api-info-list",children:e.jsx("li",{children:"The response is in the snapshot format."})})]}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method",children:"GET"}),e.jsx("span",{className:"path",children:"/v1/get-order-book"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, like",e.jsx("span",{className:"pill",children:"BTCUSDT"}),", uppercase only"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"limit"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"integer"}),e.jsxs("td",{children:["Limit for data size per page. [",e.jsx("span",{className:"pill",children:"1"}),",",e.jsx("span",{className:"pill",children:"500"})," ]. Default:"," ",e.jsx("span",{className:"pill",children:" 25 "})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"s"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"b"}),e.jsx("td",{children:"array"}),e.jsx("td",{children:"Bid, buyer. Sorted by price in descending order"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," b[0]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Bid price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," b[1]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Bid size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"a"}),e.jsx("td",{children:"array"}),e.jsx("td",{children:"Ask, seller. Sorted by price in ascending order"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," a[0]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Ask price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," a[1]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Ask size"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
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
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},vb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
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
}`,H={HTTP:`GET /v1/get-ticker?symbol=BTCUSDT HTTP/1.1
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
    
    getTickers();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Market"}),e.jsx("span",{className:"mx-2 ",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Tickers"})]}),e.jsx("h1",{className:"api-title",children:" Get Tickers"}),e.jsx("p",{className:"api-desc",children:"Query for the latest price snapshot and trading volume in the last 24 hours."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsxs("div",{className:"api-info-box",children:[e.jsxs("div",{className:"api-info-header",children:[e.jsx("span",{className:"api-info-icon",children:"!"}),e.jsx("span",{className:"api-info-title",children:"INFO"})]}),e.jsx("ul",{className:"api-info-list",children:e.jsx("li",{children:"The response is in the snapshot format."})})]}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method",children:"GET"}),e.jsx("span",{className:"path",children:"/v1/get-ticker"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, like",e.jsx("span",{className:"pill",children:"BTCUSDT"}),", uppercase only"]})]})})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"last_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Last price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"index_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Index price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"mark_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Mark price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"prev_price_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Market price 24 hours ago"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"change_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Percentage change of market price relative to 24h"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"high_price_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"The highest price in the last 24 hours"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"low_price_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"The lowest price in the last 24 hours"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"prev_price_1h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Market price an hour ago"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"open_interest"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Open interest size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"funding_rate"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Funding rate"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"next_funding_time"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Next funding time (ms)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"turn_over_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Turnover for 24h"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"volume_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Volume for 24h"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
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
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},yb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
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
}`,H={HTTP:`GET /v1/get-trades?symbol=BTCUSDT&limit=2 HTTP/1.1
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

getTrades();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Market"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Recent Public Trades"})]}),e.jsx("h1",{className:"api-title",children:" Get Recent Public Trades"}),e.jsx("p",{className:"api-desc",children:"Query recent public trading history in BitZup."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method",children:"GET"}),e.jsx("span",{className:"path",children:"/v1/get-trades"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, like",e.jsx("span",{className:"pill",children:"BTCUSDT"}),", uppercase only"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"limit"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"integer"}),e.jsxs("td",{children:["Limit for data size per page. [",e.jsx("span",{className:"pill",children:"1"}),",",e.jsx("span",{className:"pill",children:"1000"})," ]. Default:"," ",e.jsx("span",{className:"pill",children:" 500 "})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"size"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade Size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"side"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Side of taker ",e.jsx("span",{className:"pill",children:" Buy"}),", ",e.jsx("span",{className:"pill",children:" Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade time (ms)"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
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
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},gb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("limits"),g=120,R=["limits","heartbeat","subscription-protocol","push-model","disconnect-handling"],q=z=>{const S=r.current,O=document.getElementById(z);if(!S||!O)return;const H=O.offsetTop-S.offsetTop-g;S.scrollTo({top:H,behavior:"smooth"})};return h.useEffect(()=>{if(!r.current)return;const z=new IntersectionObserver(S=>{S.forEach(O=>{O.isIntersecting&&N(O.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return R.forEach(S=>{const O=document.getElementById(S);O&&z.observe(O)}),()=>z.disconnect()},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Websocket Stream"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Connect"})]}),e.jsx("h1",{className:"api-title",children:" Connect"}),e.jsx("p",{className:"api-desc",id:"limits",children:e.jsx(Gl,{to:"/docs/websocket/public/orderbook",className:"api-desc",children:" WebSocket public stream:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Mainnet:"}),e.jsx("p",{className:"api-desc",children:"wss://socket.bitzup.com/futures/public/ws/"})]}),e.jsx("h3",{className:"top-req-text",id:"heartbeat",children:"How to Send the Heartbeat Packet"}),e.jsxs("ul",{children:[e.jsx("li",{className:"api-desc",children:"Every 5 seconds (frontend standard)"}),e.jsx("li",{className:"api-desc",children:"Maximum recommended: 20 seconds"}),e.jsx("li",{className:"api-desc",children:"F ilure to send pings may result in disconnection."})]}),e.jsx("p",{className:"api-cover",children:"Client → Server"}),e.jsx("div",{className:"api-code-box position-relative",children:e.jsx("pre",{children:e.jsxs("code",{children:["{",`
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
`,"}"]})})}),e.jsx("p",{className:"api-cover",children:"Unsubscribe does not close the WebSocket connection."}),e.jsx("h3",{className:"top-req-text",id:"push-model",children:"BitZup Push Model"}),e.jsx("p",{className:"api-cover",children:"Push Frequency"}),e.jsxs("ul",{children:[e.jsx("li",{className:"api-desc",children:"Internal poller runs 200ms"}),e.jsx("li",{className:"api-desc",children:"Data is sent only if available"})]}),e.jsx("h5",{id:"request-params",children:"Server Behavior by Channel"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Channel"}),e.jsx("th",{children:"Behavior"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"lp"}),e.jsx("td",{children:"Sends latest mark price snapshot"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"ticker"}),e.jsx("td",{children:"Sends partial ticker snapshot"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"orderbook"}),e.jsx("td",{children:"Sends full depth snapshot (20×20)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trades"}),e.jsx("td",{children:"Streams new trades only"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"kline"}),e.jsx("td",{children:"Sends latest candle + history on subscribe"})]})]})]})}),e.jsx("h5",{children:"Trade Deduplication Guarantee"}),e.jsx("p",{className:"api-cover",children:"For trades:"}),e.jsxs("ul",{children:[e.jsx("li",{className:"api-desc",children:"BitZup tracks lastTradeId per client"}),e.jsx("li",{className:"api-desc",children:"Duplicate trades are never resent"})]}),e.jsx("h5",{children:"Kline Semantics"}),e.jsxs("ul",{children:[e.jsx("li",{className:"api-desc",children:"kline_history → sent once on subscribe"}),e.jsx("li",{className:"api-desc",children:"kline_latest → sent every second"}),e.jsx("li",{className:"api-desc",children:"confirm = false → candle still forming"}),e.jsx("li",{className:"api-desc",children:"confirm = true → candle closed"})]}),e.jsx("p",{className:"api-cover",children:"Clients must update last candle in place until confirmed."}),e.jsx("h3",{className:"top-req-text",id:"disconnect-handling",children:"Disconnect Handling"}),e.jsx("p",{className:"api-cover",children:"When a connection closes:"}),e.jsxs("ul",{children:[e.jsx("li",{className:"api-desc",children:"BitZup cleans up all subscriptions"}),e.jsx("li",{className:"api-desc",children:"Polling timer is stopped"}),e.jsx("li",{className:"api-desc",children:"Client must reconnect and re-subscribe"})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="limits"?"active":"",onClick:()=>q("limits"),children:"IP Limits"}),e.jsx("li",{className:f==="heartbeat"?"active":"",onClick:()=>q("heartbeat"),children:"How to Send the Heartbeat Packet"}),e.jsx("li",{className:f==="subscription-protocol"?"active":"",onClick:()=>q("subscription-protocol"),children:"Subscription Protocol (Bitzup)"}),e.jsx("li",{className:f==="push-model"?"active":"",onClick:()=>q("push-model"),children:"BitZup Push Model"}),e.jsx("li",{className:f==="disconnect-handling"?"active":"",onClick:()=>q("disconnect-handling"),children:"Disconnect Handling"})]})})})]})})})})},Nb=()=>{const r=h.useRef(null),[o,u]=h.useState("Node"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState(!1),[g,R]=h.useState("depths"),q=120,z=async()=>{await navigator.clipboard.writeText(le[o]),j(!0),setTimeout(()=>j(!1),1500)},S=async()=>{navigator.clipboard.writeText(se),y(!0),setTimeout(()=>y(!1),1500)},O=async()=>{navigator.clipboard.writeText(x),y(!0),setTimeout(()=>y(!1),1500)},H=async()=>{navigator.clipboard.writeText(w),N(!0),setTimeout(()=>N(!1),1500)},m=["depths","subscribe-orderbook","response-params","subscribe-example","response-example"],v=$=>{const X=r.current,ie=document.getElementById($);if(!X||!ie)return;const ze=ie.offsetTop-X.offsetTop-q;X.scrollTo({top:ze,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const $=new IntersectionObserver(X=>{X.forEach(ie=>{ie.isIntersecting&&R(ie.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return m.forEach(X=>{const ie=document.getElementById(X);ie&&$.observe(ie)}),()=>$.disconnect()},[]);const x=`{
  "action": "subscribe",
  "type": "orderbook",
  "symbol": "BTCUSDT"
}`,w=`{
  "action": "ping",
}`,se=`{
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
ws.on("error", console.error);`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"WebSocket Stream"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"kline-market",children:"Public"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Orderbook"})]}),e.jsx("h1",{className:"api-title",children:" Orderbook"}),e.jsx("p",{className:"api-desc",children:"Subscribe to the orderbook stream. Supports different depths."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsx("h3",{className:"top-req-text",id:"depths",children:"Depths"}),e.jsxs("p",{className:"api-desc",children:["Default : Level 20 data, push frequency: ",e.jsx("b",{children:" 200ms"})]}),e.jsx("h3",{className:"top-req-text",id:"subscribe-orderbook",children:"Subscribe to Orderbook"}),e.jsx("p",{children:"Client → Server"}),e.jsx("p",{children:"Notes: "}),e.jsxs("ul",{children:[e.jsx("li",{children:"symbol, like BTCUSDT, uppercase only"}),e.jsx("li",{children:"Default depth is 20 levels per sides"}),e.jsx("li",{children:"No depth parameter is required on the client"})]}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:O,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "action": "subscribe",',`
`,' "type": "orderbook",',`
`,' "symbol": "BTCUSDT"',`
`,"}"]})})]}),e.jsx("p",{children:"Keepalive (Ping) "}),e.jsxs("ul",{children:[e.jsx("li",{children:"Clients must send a ping periodically to keep the connection alive."}),e.jsx("li",{children:"Recommended interval: every 5 seconds"})]}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:H,children:f?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "action": "ping"',`
`,"}"]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Message type"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data"}),e.jsx("td",{children:"object"}),e.jsx("td",{children:"Orderbook data"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," bids"]}),e.jsx("td",{children:"array"}),e.jsx("td",{children:"Bid, buyer. Sorted by price in descending order"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">>"," b[0]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Bid price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">>"," b[1]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Bid size"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," asks"]}),e.jsx("td",{children:"array"}),e.jsx("td",{children:"Ask, seller. Sorted by price in ascending order"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">>"," a[0]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Ask price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">>"," a[1]"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Ask size"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[" ",">"," ts"]}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The timestamp (ms) that the system generates the data"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"subscribe-example",children:"Subscribe Example"}),e.jsx("div",{className:"lang-tabs",children:["Node","Python","Go","Java"].map($=>e.jsx("button",{className:o===$?"active":"",onClick:()=>u($),children:$},$))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:z,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:le[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:S,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
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
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:g==="depths"?"active":"",onClick:()=>v("depths"),children:"Depths"}),e.jsx("li",{className:g==="subscribe-orderbook"?"active":"",onClick:()=>v("subscribe-orderbook"),children:"Subscribe to Orderbook"}),e.jsx("li",{className:g==="response-params"?"active":"",onClick:()=>v("response-params"),children:"Response Parameters"}),e.jsx("li",{className:g==="subscribe-example"?"active":"",onClick:()=>v("subscribe-example"),children:"Subscribe Example"}),e.jsx("li",{className:g==="response-example"?"active":"",onClick:()=>v("response-example"),children:"Response Example"})]})})})]})})})})},Sb=()=>{const r=h.useRef(null),[o,u]=h.useState("Node"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState(!1),[g,R]=h.useState("http"),q=120,z=async()=>{await navigator.clipboard.writeText(le[o]),j(!0),setTimeout(()=>j(!1),1500)},S=async()=>{navigator.clipboard.writeText(se),y(!0),setTimeout(()=>y(!1),1500)},O=async()=>{navigator.clipboard.writeText(x),y(!0),setTimeout(()=>y(!1),1500)},H=async()=>{navigator.clipboard.writeText(w),N(!0),setTimeout(()=>N(!1),1500)},m=["subscribe-trade","response-params","response-params","response-example"],v=$=>{const X=r.current,ie=document.getElementById($);if(!X||!ie)return;const ze=ie.offsetTop-X.offsetTop-q;X.scrollTo({top:ze,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const $=new IntersectionObserver(X=>{X.forEach(ie=>{ie.isIntersecting&&R(ie.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return m.forEach(X=>{const ie=document.getElementById(X);ie&&$.observe(ie)}),()=>$.disconnect()},[]);const x=`{
    "action": "subscribe",
    "type": "trades",
    "symbol": "BTCUSDT"
}`,w=`{
    "action": "ping",
}`,se=`{
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
ws.on("error", console.error);`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"WebSocket Stream"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"kline-market",children:"Public"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Trade"})]}),e.jsx("h1",{className:"api-title",children:" Trade"}),e.jsx("p",{className:"api-desc",children:"Subscribe to the recent trades stream."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsx("h3",{className:"top-req-text",id:"subscribe-trade",children:"Subscribe to Trade"}),e.jsx("p",{children:"Client → Server"}),e.jsx("p",{children:"Notes: "}),e.jsx("ul",{children:e.jsx("li",{children:"symbol, like BTCUSDT, uppercase only"})}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:O,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "action": "subscribe",',`
`,' "type": "trades",',`
`,' "symbol": "BTCUSDT"',`
`,"}"]})})]}),e.jsx("p",{children:"Keepalive (Ping) "}),e.jsxs("ul",{children:[e.jsx("li",{children:"Clients must send a ping periodically to keep the connection alive."}),e.jsx("li",{children:"Recommended interval: every 5 seconds"})]}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:H,children:f?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "action": "ping"',`
`,"}"]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Message type"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data"}),e.jsx("td",{children:"object"}),e.jsx("td",{children:"Orderbook data"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," trade_id"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade ID"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," price"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," size"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade size"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," side"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Side of taker. Buy,Sell"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(Gl,{style:{color:"#2edbad",textDecoration:"none"},to:"/docs/enums",children:[">"," direction"]})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Direction of price change"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," ts"]}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The timestamp (ms) that the order is filled"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"subscribe-example",children:"Subscribe Example"}),e.jsx("div",{className:"lang-tabs",children:["Node","Python","Go","Java"].map($=>e.jsx("button",{className:o===$?"active":"",onClick:()=>u($),children:$},$))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:z,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:le[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:S,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
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
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:g==="subscribe-trade"?"active":"",onClick:()=>v("subscribe-trade"),children:"Subscribe to Trade"}),e.jsx("li",{className:g==="response-params"?"active":"",onClick:()=>v("response-params"),children:"Response Parameters"}),e.jsx("li",{className:g==="subscribe-example"?"active":"",onClick:()=>v("subscribe-example"),children:"Subscribe Example"}),e.jsx("li",{className:g==="response-example"?"active":"",onClick:()=>v("response-example"),children:"Response Example"})]})})})]})})})})},Tb=()=>{const r=h.useRef(null),[o,u]=h.useState("Ticker"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("Ticker"),[g,R]=h.useState("http"),q=120,z=async()=>{await navigator.clipboard.writeText(v[o]),j(!0),setTimeout(()=>j(!1),1500)},S=async()=>{navigator.clipboard.writeText(x[o]),y(!0),setTimeout(()=>y(!1),1500)},O=["response-params","subscribe-example","response-example"],H=w=>{const se=r.current,le=document.getElementById(w);if(!se||!le)return;const $=le.offsetTop-se.offsetTop-q;se.scrollTo({top:$,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const w=new IntersectionObserver(se=>{se.forEach(le=>{le.isIntersecting&&R(le.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return O.forEach(se=>{const le=document.getElementById(se);le&&w.observe(le)}),()=>w.disconnect()},[]);const m={Ticker:[{p:"symbol",t:"string",c:"Symbol name"},{p:"ts",t:"number",c:"Timestamp (ms)"},{p:"data",t:"object",c:"ticker data"},{p:"> lastPrice",t:"string",c:"Latest traded price"},{p:"> markPrice",t:"string",c:"Mark price"},{p:"> indexPrice",t:"string",c:"index price"},{p:"> price24hPcnt",t:"string",c:"Percentage change of market price in the last 24 hours"},{p:"> highPrice24h",t:"string",c:"The highest price in the last 24 hours"},{p:"> lowPrice24h",t:"string",c:"The lowest price in the last 24 hours"},{p:"> turnover24h",t:"string",c:"Turnover for 24h"},{p:"> volume24h",t:"string",c:"Volume for 24h"},{p:"> price24hPcnt",t:"string",c:"Percentage change of market price in the last 24 hours"},{p:"> openInterest",t:"string",c:"Open interest size"},{p:"> fundingRate",t:"string",c:"	Funding rate"},{p:"> nextFundingTime",t:"string",c:"Next funding timestamp (ms)"},{p:"> ts",t:"number",c:"The timestamp (ms) that the system generates the data"}]},v={Ticker:`const WebSocket = require("ws");

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
ws.on("error", console.error);`},x={Ticker:`{
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
}`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"WebSocket Stream"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"kline-market",children:"Public"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Ticker"})]}),e.jsx("h1",{className:"api-title",children:" Ticker"}),e.jsx("p",{className:"api-desc",children:"Subscribe to the ticker stream."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsxs("div",{className:"api-info-box",children:[e.jsxs("div",{className:"api-info-header",children:[e.jsx("span",{className:"api-info-icon",children:"!"}),e.jsx("span",{className:"api-info-title",children:"INFO"})]}),e.jsx("ul",{className:"api-info-list",children:e.jsx("li",{children:"This topic utilises the snapshot field and delta field. If a response param is not found in the message, then its value has not changed."})})]}),e.jsx("div",{className:"lang-tabs",children:["Ticker"].map(w=>e.jsx("button",{className:f===w?"active":"",onClick:()=>N(w),children:w},w))}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:m[f].map((w,se)=>e.jsxs("tr",{children:[e.jsx("td",{style:w.indent?{paddingLeft:"15px"}:{},children:w.p}),e.jsx("td",{children:w.t}),e.jsx("td",{children:w.c})]},se))})]})}),e.jsx("h3",{className:"top-req-text",id:"subscribe-example",children:"Subscribe Example"}),e.jsx("div",{className:"lang-tabs",children:["Ticker"].map(w=>e.jsx("button",{className:f===w?"active":"",onClick:()=>N(w),children:w},w))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:z,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:v[f]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsx("div",{className:"lang-tabs",children:["Ticker"].map(w=>e.jsx("button",{className:f===w?"active":"",onClick:()=>N(w),children:w},w))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:S,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
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
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:g==="response-params"?"active":"",onClick:()=>H("response-params"),children:"Response Parameters"}),e.jsx("li",{className:g==="subscribe-example"?"active":"",onClick:()=>H("subscribe-example"),children:"Request Example"}),e.jsx("li",{className:g==="response-example"?"active":"",onClick:()=>H("response-example"),children:"Response Example"})]})})})]})})})})},qb=()=>{const r=h.useRef(null),[o,u]=h.useState("Node"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(v[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(m),y(!0),setTimeout(()=>y(!1),1500)},z=async()=>{navigator.clipboard.writeText(H),y(!0),setTimeout(()=>y(!1),1500)},S=["subscribe-kline","response-parameters","Subscribe Example","response-example"],O=x=>{const w=r.current,se=document.getElementById(x);if(!w||!se)return;const le=se.offsetTop-w.offsetTop-g;w.scrollTo({top:le,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const x=new IntersectionObserver(w=>{w.forEach(se=>{se.isIntersecting&&N(se.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return S.forEach(w=>{const se=document.getElementById(w);se&&x.observe(se)}),()=>x.disconnect()},[]);const H=`{
    "action": "subscribe",
    "type": "orderbook",
    "symbol": "BTCUSDT",
    "interval": "1"
}`,m=`{
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
}`,v={Python:`import websocket
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

ws.on("close", () => console.log("Disconnected`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"WebSocket Stream"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"kline-market",children:"Public"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Kline"})]}),e.jsx("h1",{className:"api-title",children:" Kline"}),e.jsx("p",{className:"api-desc",children:"Subscribe to the klines stream."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsxs("div",{className:"api-info-box",children:[e.jsxs("div",{className:"api-info-header",children:[e.jsx("span",{className:"api-info-icon",children:"!"}),e.jsx("span",{className:"api-info-title",children:"INFO"})]}),e.jsx("ul",{className:"api-info-list",children:e.jsx("li",{children:"If confirm=true, this means that the candle has closed. Otherwise, the candle is still open and updating."})})]}),e.jsx("h3",{children:"Available intervals:"}),e.jsxs("ul",{children:[e.jsxs("li",{style:{marginBottom:"8px"},children:[e.jsx("span",{className:"pill",children:"1"})," ",e.jsx("span",{className:"pill",children:" 3"})," ",e.jsx("span",{className:"pill",children:" 5"}),"  ",e.jsx("span",{className:"pill",children:" 15"})," ",e.jsx("span",{className:"pill",children:" 30 "})," (min)"]}),e.jsxs("li",{style:{marginBottom:"8px"},children:[e.jsx("span",{className:"pill",children:"60"})," ",e.jsx("span",{className:"pill",children:" 120"})," ",e.jsx("span",{className:"pill",children:" 240"}),"  ",e.jsx("span",{className:"pill",children:" 360"})," ",e.jsx("span",{className:"pill",children:" 720 "})," (min)"]}),e.jsxs("li",{style:{marginBottom:"8px"},children:[e.jsx("span",{className:"pill",children:" D "})," (day)"]}),e.jsxs("li",{style:{marginBottom:"8px"},children:[e.jsx("span",{className:"pill",children:"W "})," (week)"]}),e.jsxs("li",{style:{marginBottom:"8px"},children:[e.jsx("span",{className:"pill",children:" M "})," (month)"]})]}),e.jsx("h3",{className:"top-req-text",id:"subscribe-kline",children:"Subscribe to Kline"}),e.jsx("p",{children:"Client → Server"}),e.jsx("p",{children:"Notes: "}),e.jsx("ul",{children:e.jsx("li",{children:"symbol, like BTCUSDT, uppercase only"})}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:z,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
`,' "action": "subscribe",',`
`,' "type": "kline",',`
`,' "symbol":"BTCUSDT",',`
`,' "interval": "1"',`
`,"}"]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-parameters",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Message type"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"interval"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Kline interval"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data"}),e.jsx("td",{children:"array"}),e.jsx("td",{children:"Object"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," start"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Start time of the candle (ms)"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," open"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Open price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," high"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Highest price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," low"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Lowest price"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," close"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Close price. Is the last traded price when the candle is not closed"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," volume"]}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Trade volume",e.jsx("ul",{children:e.jsx("li",{children:"USDT contract: unit is base coin (e.g., BTC)"})})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," turnover"]}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Turnover",e.jsx("ul",{children:e.jsx("li",{children:"USDT contract: unit is quote coin (e.g., USDT)"})})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," confirm"]}),e.jsx("td",{children:"	boolean"}),e.jsx("td",{children:"Whether the tick is ended or not"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[">"," ts"]}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The timestamp (ms) of the last matched order in the candle"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"Subscribe Example",children:"Subscribe Example"}),e.jsx("div",{className:"lang-tabs",children:["Node","Python","Go","Java"].map(x=>e.jsx("button",{className:o===x?"active":"",onClick:()=>u(x),children:x},x))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:v[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
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
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="subscribe-kline"?"active":"",onClick:()=>O("subscribe-kline"),children:"Subscribe to Kline"}),e.jsx("li",{className:f==="response-parameters"?"active":"",onClick:()=>O("response-parameters"),children:"Subscribe Example"}),e.jsx("li",{className:f==="Subscribe Example"?"active":"",onClick:()=>O("Subscribe Example"),children:"Subscribe Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>O("response-example"),children:"Response Example"})]})})})]})})})})},Cb=()=>{const r=h.useRef(null),[o,u]=h.useState(!1),[d,j]=h.useState("http"),b=120,y=["http","websocket-limit","api-rate-limit"],f=N=>{const g=r.current,R=document.getElementById(N);if(!g||!R)return;const q=R.offsetTop-g.offsetTop-b;g.scrollTo({top:q,behavior:"smooth"})};return h.useEffect(()=>{if(!r.current)return;const N=new IntersectionObserver(g=>{g.forEach(R=>{R.isIntersecting&&j(R.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return y.forEach(g=>{const R=document.getElementById(g);R&&N.observe(R)}),()=>N.disconnect()},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Market"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Rate Limit Rules"})]}),e.jsx("h1",{className:"api-title",children:"Rate Limit Rules"}),e.jsx("div",{className:"api-cover",children:"IP Limit"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP IP Limit"}),e.jsxs("p",{children:["You are allowed to send 500 requests within a 5-second window per IP by default. This limit applies to all traffic directed to"," ",e.jsx("span",{className:"pill",children:" api.bitzup.com"}),'.  If you encounter the error "429, Too many requests", it indicates that your IP has exceeded the allowed request frequency. In this case, you should terminate all HTTP sessions and wait for at least 10 minutes. The ban will be lifted automatically.']}),e.jsx("p",{children:"We do not recommend running your application at the very edge of these limits in case abnormal network activity results in an unexpected violation."}),e.jsx("h3",{className:"top-req-text",id:"websocket-limit",children:"Websocket IP limit"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Do not establish more than 400 connections within a 5-minute window. This limit applies to all connections directed to"," ",e.jsx("span",{className:"pill",children:" socket.bitzup.com"})]}),e.jsx("li",{children:"Do not frequently connect and disconnect the connection"}),e.jsx("li",{children:"Do not establish more than 1,000 connections per IP for market data."})]}),e.jsx("h3",{className:"top-req-text",id:"api-rate-limit",children:"API Rate Limit"}),e.jsxs("div",{className:"api-info-box",children:[e.jsxs("div",{className:"api-info-header",children:[e.jsx("div",{class:"caution-icon",children:"⚠"}),e.jsx("span",{className:"api-info-title",children:"caution"})]}),e.jsx("p",{children:'If you receive "Too many requests" in the JSON response, you have hit the API rate limit.'})]}),e.jsx("h4",{style:{marginTop:"24px",marginBottom:"12px"},children:"Public API Endpoints — 10 req/s"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Endpoint"}),e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Rate Limit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-kline"}),e.jsx("td",{children:"GET"}),e.jsx("td",{children:"10 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-order-book"}),e.jsx("td",{children:"GET"}),e.jsx("td",{children:"10 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-ticker"}),e.jsx("td",{children:"GET"}),e.jsx("td",{children:"10 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-trades"}),e.jsx("td",{children:"GET"}),e.jsx("td",{children:"10 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-curr-data"}),e.jsx("td",{children:"GET"}),e.jsx("td",{children:"10 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-futures-currencies"}),e.jsx("td",{children:"GET"}),e.jsx("td",{children:"10 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/market-settings"}),e.jsx("td",{children:"GET"}),e.jsx("td",{children:"10 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-fee-rate"}),e.jsx("td",{children:"GET"}),e.jsx("td",{children:"10 req/s"})]})]})]})}),e.jsx("h4",{style:{marginTop:"24px",marginBottom:"12px"},children:"Private API Endpoints — 15 req/s"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Endpoint"}),e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Rate Limit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-positions"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-open-orders"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-order-history"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-trade-history"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-closed-pnl"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-balance"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-leverage"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/get-margin-mode"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/set-leverage"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/switch-margin-mode"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/add-isolated-margin"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/auto-isolated-margin"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/set-trading-stop"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/place-order"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/cancel-order"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/cancel-all-order"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/modify-order"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/close-position"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/close-all-position"}),e.jsx("td",{children:"GET"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/estimate-liquidation-price"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/deposit-to-sub-acc"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/v1/withdraw-from-sub-acc"}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"15 req/s"})]})]})]})})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:d==="http"?"active":"",onClick:()=>f("http"),children:"HTTP Ip Limit"}),e.jsx("li",{className:d==="websocket-limit"?"active":"",onClick:()=>f("websocket-limit"),children:"Websocket IP limit"}),e.jsx("li",{className:d==="api-rate-limit"?"active":"",onClick:()=>f("api-rate-limit"),children:"API Rate Limit"})]})})})]})})})})},Rb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
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
}`,H={HTTP:`GET /v1/market-info HTTP/1.1
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

marketInfo();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-8 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Market"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Market Info"})]}),e.jsx("h1",{className:"api-title",children:" Get Market Info"}),e.jsx("p",{className:"api-desc",children:"Returns the list of available trading pairs with pricing, volume, leverage, and trading limits."}),e.jsx("div",{className:"api-cover",children:"USDT contract"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method",children:"GET"}),e.jsx("span",{className:"path",children:"/v1/market-info"})]}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"base_coin"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:" Base asset"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"quote_coin"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:" Quote asset"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"icon "}),e.jsx("td",{children:"string (URL)"}),e.jsx("td",{children:"Asset icon"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"last_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Latest traded price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"volume_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"24-hour trading volume"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade time (ms)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"turnover_24h"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"24-hour turnover"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"change_24h "}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"24-hour price change (%)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"max_leverage"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:" Maximum allowed leverage"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"price_decimal"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Price precision "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty_decimal"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Quantity precision "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty_step"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Quantity step size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"minOrderQty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Minimum order quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"maxOrderQty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Maximum order quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"maxMktOrderQty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Maximum market order quantity"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsxs("code",{children:["{",`
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
`,"}"]})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Eb=()=>{const r=h.useRef(null),[o,u]=h.useState("direction"),d=120,j=["direction","interval","intervalTime"],b=y=>{const f=r.current,N=document.getElementById(y);if(!f||!N)return;const g=N.offsetTop-f.offsetTop-d;f.scrollTo({top:g,behavior:"smooth"})};return h.useEffect(()=>{if(!r.current)return;const y=new IntersectionObserver(f=>{f.forEach(N=>{N.isIntersecting&&u(N.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return j.forEach(f=>{const N=document.getElementById(f);N&&y.observe(N)}),()=>y.disconnect()},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsx("div",{className:"breadcrumb mb-4",children:e.jsx("span",{className:"pill",children:"Enums Definitions"})}),e.jsx("h1",{className:"api-title",children:"Enums Definitions"}),e.jsx("h3",{className:"top-req-text",id:"direction",children:"Direction"}),e.jsxs("ul",{children:[e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"PlusTick "})," price rise"]}),e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"ZeroPlusTick "})," trade occurs at the same price as the previous trade, which occurred at a price higher than that for the trade preceding it"]}),e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"MinusTick "})," price drop"]}),e.jsxs("li",{style:{marginBottom:"30px"},children:[e.jsx("span",{className:"pill",children:"ZeroMinusTick "})," trade occurs at the same price as the previous trade, which occurred at a price lower than that for the trade preceding it"]})]}),e.jsx("h3",{className:"top-req-text",id:"interval",children:"interval"}),e.jsxs("ul",{children:[e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"1"})," ",e.jsx("span",{className:"pill",children:"3"})," ",e.jsx("span",{className:"pill",children:"5"})," ",e.jsx("span",{className:"pill",children:"15"})," ",e.jsx("span",{className:"pill",children:"30"})," ",e.jsx("span",{className:"pill",children:"60"})," ",e.jsx("span",{className:"pill",children:"120"})," ",e.jsx("span",{className:"pill",children:"240"})," ",e.jsx("span",{className:"pill",children:"360"})," ",e.jsx("span",{className:"pill",children:"720"})," minute"]}),e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"D "})," day"]}),e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"W "})," week"]}),e.jsxs("li",{style:{marginBottom:"30px"},children:[e.jsx("span",{className:"pill",children:"M "})," month"]})]}),e.jsx("h3",{className:"top-req-text",id:"intervalTime",children:"intervalTime"}),e.jsxs("ul",{children:[e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"5min"})," ",e.jsx("span",{className:"pill",children:"15min"})," ",e.jsx("span",{className:"pill",children:"30min"})," minute"]}),e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"1h "})," ",e.jsx("span",{className:"pill",children:"4h "})," hour"]}),e.jsxs("li",{style:{marginBottom:"10px"},children:[e.jsx("span",{className:"pill",children:"1d "})," day"]})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:o==="direction"?"active":"",onClick:()=>b("direction"),children:"Direction"}),e.jsx("li",{className:o==="interval"?"active":"",onClick:()=>b("interval"),children:"interval"}),e.jsx("li",{className:o==="intervalTime"?"active":"",onClick:()=>b("intervalTime"),children:"intervalTime"})]})})})]})})})})},_b=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
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
}`,H={HTTP:`POST /futures/api/v1/get-positions HTTP/1.1
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

getPositions();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Positions"})]}),e.jsx("h1",{className:"api-title",children:"Get Positions"}),e.jsx("p",{className:"api-desc",children:"Query real-time position data, such as position size, leverage, entry price, mark price, liquidation price, unrealised PnL, and more."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-positions"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"quote_coin"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Settlement coin, e.g. ",e.jsx("span",{className:"pill",children:"USDT"})]})]})})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"price_decimal"}),e.jsx("td",{children:"integer"}),e.jsx("td",{children:"Price precision"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty_decimal"}),e.jsx("td",{children:"integer"}),e.jsx("td",{children:"Quantity precision"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"leverage"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Current leverage"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"side"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Buy"})," or ",e.jsx("span",{className:"pill",children:"Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Position size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"position_value"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Position value in USDT"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"entry_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Average entry price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"mark_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Current mark price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"liquidation_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Estimated liquidation price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"initial_margin"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Initial margin"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"position_margin"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Position margin balance"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"unrealised_Pnl"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Unrealised profit and loss"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"unrealised_Pnl_pc"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Unrealised PnL percentage"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"take_profit"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Take profit price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop_loss"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Stop loss price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trailing_stop"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trailing stop value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"activation_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trailing stop activation price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"auto_margin"}),e.jsx("td",{children:"integer"}),e.jsxs("td",{children:["Auto add margin: ",e.jsx("span",{className:"pill",children:"0"})," off, ",e.jsx("span",{className:"pill",children:"1"})," on"]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},kb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
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
}`,H={HTTP:`POST /futures/api/v1/get-open-orders HTTP/1.1
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

getOpenOrders();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Open Orders"})]}),e.jsx("h1",{className:"api-title",children:"Get Open Orders"}),e.jsxs("p",{className:"api-desc",children:["Query unfilled or partially filled orders in real-time. Supports querying limit orders, TP/SL orders, and trailing stop orders by specifying the ",e.jsx("code",{children:"order_type"})," parameter."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-open-orders"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"order_type"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"order"})," ",e.jsx("span",{className:"pill",children:"tpslOrder"})," ",e.jsx("span",{className:"pill",children:"trailingStop"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"conditional"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"}),". Either ",e.jsx("code",{children:"symbol"})," or ",e.jsx("code",{children:"quote_coin"})," is required"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"quote_coin"}),e.jsx("td",{children:"conditional"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Settlement coin, e.g. ",e.jsx("span",{className:"pill",children:"USDT"}),". Either ",e.jsx("code",{children:"symbol"})," or ",e.jsx("code",{children:"quote_coin"})," is required"]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsxs("p",{className:"api-desc",style:{fontSize:"14px",marginBottom:"8px"},children:["Response fields vary by ",e.jsx("code",{children:"order_type"}),". Below shows the response for ",e.jsx("code",{children:'order_type: "order"'}),":"]}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_type"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"})," or ",e.jsx("span",{className:"pill",children:"Market"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"client_order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-set order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"side"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Buy"})," or ",e.jsx("span",{className:"pill",children:"Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Cumulative filled quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop_order_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Stop order type"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_value"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order value in USDT"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_status"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order status (New, PartiallyFilled, etc.)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tpsl_mode"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Full"})," or ",e.jsx("span",{className:"pill",children:"Partial"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"take_profit"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Take profit price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop_loss"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Stop loss price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Created timestamp (ms)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reduce_only"}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"Whether reduce only"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trade_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Open Long, Close Long, Open Short, Close Short"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"price_decimal"}),e.jsx("td",{children:"integer"}),e.jsx("td",{children:"Price precision"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty_decimal"}),e.jsx("td",{children:"integer"}),e.jsx("td",{children:"Quantity precision"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"leverage"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Current leverage for the symbol"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Bb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
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
}`,H={HTTP:`POST /futures/api/v1/get-order-history HTTP/1.1
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

getOrderHistory();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Order History"})]}),e.jsx("h1",{className:"api-title",children:"Get Order History"}),e.jsxs("p",{className:"api-desc",children:["Query order history. Returns data for the last 7 days by default. You can filter by ",e.jsx("code",{children:"order_type"})," to separate regular orders and stop orders. The maximum time range between ",e.jsx("code",{children:"start_time"})," and ",e.jsx("code",{children:"end_time"})," is 7 days."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-order-history"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"order_type"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Order"})," or ",e.jsx("span",{className:"pill",children:"StopOrder"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"conditional"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"}),". Either ",e.jsx("code",{children:"symbol"})," or ",e.jsx("code",{children:"quote_coin"})," is required"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"quote_coin"}),e.jsx("td",{children:"conditional"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Settlement coin, e.g. ",e.jsx("span",{className:"pill",children:"USDT"}),". Either ",e.jsx("code",{children:"symbol"})," or ",e.jsx("code",{children:"quote_coin"})," is required"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"limit"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Number of results to return"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"start_time"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Start timestamp in milliseconds"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"end_time"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"End timestamp in milliseconds"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_type"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"})," or ",e.jsx("span",{className:"pill",children:"Market"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"client_order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-set order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"avg_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Average filled price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop_order_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Stop order type"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_status"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order status (Filled, Cancelled, etc.)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Cumulative filled quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_value"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Cumulative filled value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_value"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Order value (price × qty)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"side"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Buy"})," or ",e.jsx("span",{className:"pill",children:"Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"fee"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Cumulative trading fee"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Created timestamp (ms)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reduce_only"}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"Whether reduce only"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trigger_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trigger price (for stop orders)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trade_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Open Long, Close Long, Open Short, Close Short"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Hb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
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
}`,H={HTTP:`POST /futures/api/v1/get-trade-history HTTP/1.1
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

getTradeHistory();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Trade History"})]}),e.jsx("h1",{className:"api-title",children:"Get Trade History"}),e.jsxs("p",{className:"api-desc",children:["Query users' execution records sorted by execution time in descending order. Returns data for the last 7 days by default. The maximum time range between"," ",e.jsx("code",{children:"start_time"})," and ",e.jsx("code",{children:"end_time"})," is 7 days."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-trade-history"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"limit"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Number of results to return"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"start_time"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Start timestamp in milliseconds"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"end_time"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"End timestamp in milliseconds"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_type"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"})," or ",e.jsx("span",{className:"pill",children:"Market"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"client_order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-set order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"side"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Buy"})," or ",e.jsx("span",{className:"pill",children:"Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trade_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Open Long, Close Long, Open Short, Close Short"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tx_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Execution ID (unique per fill)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_value"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Execution value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Execution price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Execution quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Execution type (Trade, Funding, etc.)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"fee"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trading fee for this execution"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"fee_rate"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Fee rate in percentage"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Original order price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Original order quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Execution timestamp (ms)"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Ab=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
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
}`,H={HTTP:`POST /futures/api/v1/get-closed-pnl HTTP/1.1
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

getClosedPnl();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Closed PnL"})]}),e.jsx("h1",{className:"api-title",children:"Get Closed PnL"}),e.jsxs("p",{className:"api-desc",children:["Query user's closed profit and loss records. Results are sorted by created time in descending order. Returns data for the last 7 days by default. The maximum time range between ",e.jsx("code",{children:"start_time"})," and ",e.jsx("code",{children:"end_time"})," is 7 days."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-closed-pnl"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"limit"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Number of results to return"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"start_time"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Start timestamp in milliseconds"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"end_time"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"End timestamp in milliseconds"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"symbol"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Symbol name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_type"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"})," or ",e.jsx("span",{className:"pill",children:"Market"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"side"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Buy"})," or ",e.jsx("span",{className:"pill",children:"Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"closed_pnl"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Closed profit and loss amount"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"open_fee"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Opening fee"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"close_fee"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Closing fee"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"entry_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Average entry price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Closed quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"exit_price"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Average exit price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"filled_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Trade, BustTrade, SessionSettlePnL, Settle"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trade_type"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Close Long or Close Short"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Created timestamp (ms)"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Ob=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
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
}`,H={HTTP:`POST /futures/api/v1/get-balance HTTP/1.1
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

getWalletBalance();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Wallet Balance"})]}),e.jsx("h1",{className:"api-title",children:"Get Wallet Balance"}),e.jsxs("p",{className:"api-desc",children:["Obtain wallet balance and query asset information of each currency. Pass"," ",e.jsx("code",{children:'"ALL"'})," as the ",e.jsx("code",{children:"coin"})," parameter to get all coin balances, or specify a specific coin like ",e.jsx("code",{children:'"USDT"'}),"."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-balance"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"coin"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Coin name, e.g. ",e.jsx("span",{className:"pill",children:"USDT"}),","," ",e.jsx("span",{className:"pill",children:"USDC"}),", or"," ",e.jsx("span",{className:"pill",children:"ALL"})," for all coins"]})]})})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"totalUsdBalance"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Total equity in USD"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"totalMarginBalance"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Total margin balance"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"totalAvailableBalance"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Total available balance"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"totalWalletBalance"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Total wallet balance"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"coins"}),e.jsx("td",{children:"array"}),e.jsx("td",{children:"Array of coin balance objects"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," coins.coin"]}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Coin name"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," coins.walletBalance"]}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Wallet balance for the coin"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(V,{})," coins.availableBalance"]}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Available balance (wallet - positionIM - orderIM)"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},zb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "data": {
    "leverage": 10
  }
}`,H={HTTP:`POST /futures/api/v1/get-leverage HTTP/1.1
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
getLeverage();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Leverage"})]}),e.jsx("h1",{className:"api-title",children:"Get Leverage"}),e.jsx("p",{className:"api-desc",children:"Query the current leverage setting for a specific symbol."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-leverage"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]})})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"leverage"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Current leverage for the symbol"})]})})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},wb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "message": "Margin mode fetched successfully.",
  "data": "REGULAR_MARGIN"
}`,H={HTTP:`POST /futures/api/v1/get-margin-mode HTTP/1.1
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
getMarginMode();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Get Margin Mode"})]}),e.jsx("h1",{className:"api-title",children:"Get Margin Mode"}),e.jsxs("p",{className:"api-desc",children:["Query the current margin mode for the account. Returns either"," ",e.jsx("code",{children:"REGULAR_MARGIN"})," (cross margin) or ",e.jsx("code",{children:"ISOLATED_MARGIN"}),"."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/get-margin-mode"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("p",{className:"api-desc",style:{fontSize:"14px"},children:"No body parameters required. The user is identified via the JWT Bearer token."}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Status message"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"REGULAR_MARGIN"})," or ",e.jsx("span",{className:"pill",children:"ISOLATED_MARGIN"})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Db=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "message": "New leverage set successfully."
}`,H={HTTP:`POST /futures/api/v1/set-leverage HTTP/1.1
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
setLeverage();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Set Leverage"})]}),e.jsx("h1",{className:"api-title",children:"Set Leverage"}),e.jsx("p",{className:"api-desc",children:"Set the leverage for a specific symbol. In cross margin mode, buy and sell leverage are set to the same value. In isolated margin mode, they can differ."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/set-leverage"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"leverage"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Leverage value, e.g. ",e.jsx("span",{className:"pill",children:'"10"'})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success, ",e.jsx("span",{className:"pill",children:'"0"'})," for failure"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Result message"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Ub=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "message": "your request has been accepted"
}`,H={HTTP:`POST /futures/api/v1/switch-margin-mode HTTP/1.1
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
switchMarginMode();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Switch Margin Mode"})]}),e.jsx("h1",{className:"api-title",children:"Switch Margin Mode"}),e.jsx("p",{className:"api-desc",children:"Switch between regular (cross) margin and isolated margin mode for your account. This affects all positions under your account."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/switch-margin-mode"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"margin_mode"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"REGULAR_MARGIN"})," or ",e.jsx("span",{className:"pill",children:"ISOLATED_MARGIN"})]})]})})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success, ",e.jsx("span",{className:"pill",children:'"0"'})," for failure"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Result message"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Mb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "message": "your request has been accepted"
}`,H={HTTP:`POST /futures/api/v1/add-isolated-margin HTTP/1.1
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
addIsolatedMargin();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Add Isolated Margin"})]}),e.jsx("h1",{className:"api-title",children:"Add Isolated Margin"}),e.jsx("p",{className:"api-desc",children:"Manually add or reduce margin to an isolated margin position. Use a positive value to add margin and a negative value to reduce margin."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/add-isolated-margin"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"margin"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Margin amount. Positive to add, negative to reduce. Up to 4 decimal places."})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success, ",e.jsx("span",{className:"pill",children:'"0"'})," for failure"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Result message"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Lb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "message": "your request has been accepted"
}`,H={HTTP:`POST /futures/api/v1/auto-isolated-margin HTTP/1.1
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
autoIsolatedMargin();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Auto Isolated Margin"})]}),e.jsx("h1",{className:"api-title",children:"Auto Isolated Margin"}),e.jsx("p",{className:"api-desc",children:"Turn on or off the auto-add-margin feature for isolated margin positions. When enabled, the system automatically adds margin from your available balance to prevent liquidation."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/auto-isolated-margin"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"auto_margin"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"0"})," to turn off, ",e.jsx("span",{className:"pill",children:"1"})," to turn on"]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success, ",e.jsx("span",{className:"pill",children:'"0"'})," for failure"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Result message"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Pb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "data": {}
}`,H={HTTP:`POST /futures/api/v1/set-trading-stop HTTP/1.1
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
setTradingStop();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Set Trading Stop"})]}),e.jsx("h1",{className:"api-title",children:"Set Trading Stop"}),e.jsxs("p",{className:"api-desc",children:["Set take profit, stop loss, or trailing stop for an existing position. Supports both ",e.jsx("code",{children:"Full"})," (entire position) and ",e.jsx("code",{children:"Partial"})," (partial quantity) TP/SL modes. You can also configure trailing stop with activation price."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/set-trading-stop"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tp_sl_mode"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Full"})," or ",e.jsx("span",{className:"pill",children:"Partial"}),". Used for TP/SL. Omit when setting trailing stop only."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"take_profit"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["Take profit price. Set to ",e.jsx("span",{className:"pill",children:"0"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tp_trigger_by"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"LastPrice"}),", ",e.jsx("span",{className:"pill",children:"MarkPrice"}),", or ",e.jsx("span",{className:"pill",children:"IndexPrice"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop_loss"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["Stop loss price. Set to ",e.jsx("span",{className:"pill",children:"0"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sl_trigger_by"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"LastPrice"}),", ",e.jsx("span",{className:"pill",children:"MarkPrice"}),", or ",e.jsx("span",{className:"pill",children:"IndexPrice"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty"}),e.jsx("td",{children:"conditional"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["Required when ",e.jsx("code",{children:"tp_sl_mode"})," is ",e.jsx("span",{className:"pill",children:"Partial"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tp_order_type"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"}),". Only for Partial mode."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sl_order_type"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"}),". Only for Partial mode."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tp_limit_price"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"TP limit price. Only for Partial mode with Limit order type."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sl_limit_price"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"SL limit price. Only for Partial mode with Limit order type."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trailing_stop"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["Trailing stop distance. Set to ",e.jsx("span",{className:"pill",children:"0"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"active_price"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Activation price for trailing stop."})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success, ",e.jsx("span",{className:"pill",children:'"0"'})," for failure"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data"}),e.jsx("td",{children:"object"}),e.jsx("td",{children:"Result data (empty object on success)"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Gb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "data": {
    "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "client_order_id": "my_custom_id_001"
  }
}`,H={HTTP:`POST /futures/api/v1/place-order HTTP/1.1
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
placeOrder();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Place Order"})]}),e.jsx("h1",{className:"api-title",children:"Place Order"}),e.jsxs("p",{className:"api-desc",children:["Create a new futures order. Supports ",e.jsx("code",{children:"Limit"})," and ",e.jsx("code",{children:"Market"})," order types. You can optionally set take profit, stop loss, and time in force parameters."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/place-order"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"side"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Buy"})," or ",e.jsx("span",{className:"pill",children:"Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"type"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"})," or ",e.jsx("span",{className:"pill",children:"Market"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"qty"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Order quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"price"}),e.jsx("td",{children:"conditional"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["Order price. Required for ",e.jsx("span",{className:"pill",children:"Limit"})," orders."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"client_order_id"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-defined order ID for tracking"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reduce_only"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"If true, the order will only reduce the position"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"take_profit"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Take profit price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop_loss"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Stop loss price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time_in_force"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"GTC"}),", ",e.jsx("span",{className:"pill",children:"IOC"}),", ",e.jsx("span",{className:"pill",children:"FOK"}),", ",e.jsx("span",{className:"pill",children:"PostOnly"})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"System-generated order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"client_order_id"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-defined order ID"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Yb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "message": {
    "orderId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "orderLinkId": ""
  }
}`,H={HTTP:`POST /futures/api/v1/cancel-order HTTP/1.1
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
cancelOrder();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Cancel Order"})]}),e.jsx("h1",{className:"api-title",children:"Cancel Order"}),e.jsx("p",{className:"api-desc",children:"Cancel an existing unfilled or partially filled order by its order ID."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/cancel-order"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"order_id"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"The order ID to cancel"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"object"}),e.jsx("td",{children:"Contains orderId and orderLinkId of cancelled order"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Qb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "message": {
    "list": [],
    "success": "1"
  }
}`,H={HTTP:`POST /futures/api/v1/cancel-all-order HTTP/1.1
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
cancelAllOrders();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Cancel All Orders"})]}),e.jsx("h1",{className:"api-title",children:"Cancel All Orders"}),e.jsxs("p",{className:"api-desc",children:["Cancel all open orders for a given settlement coin. You can filter by order type: ",e.jsx("code",{children:"Limit"}),", ",e.jsx("code",{children:"tpslOrder"}),", or ",e.jsx("code",{children:"trailingStop"}),"."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/cancel-all-order"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"quote_coin"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Settlement coin, e.g. ",e.jsx("span",{className:"pill",children:"USDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"order_type"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"}),", ",e.jsx("span",{className:"pill",children:"tpslOrder"}),", or ",e.jsx("span",{className:"pill",children:"trailingStop"})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"object"}),e.jsx("td",{children:"Contains list of cancelled orders and success status"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Xb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "data": {
    "orderId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "orderLinkId": "my_custom_id_001"
  }
}`,H={HTTP:`POST /futures/api/v1/modify-order HTTP/1.1
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
modifyOrder();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Modify Order"})]}),e.jsx("h1",{className:"api-title",children:"Modify Order"}),e.jsx("p",{className:"api-desc",children:"Modify an existing unfilled or partially filled order. You can update the price, quantity, take profit, stop loss, and trigger parameters."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/modify-order"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"order_id"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"The order ID to modify"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"price"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"New order price"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qty"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"New order quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"client_order_id"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-defined order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"take_profit"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["New take profit price. Set to ",e.jsx("span",{className:"pill",children:"0"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tp_trigger_by"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"LastPrice"}),", ",e.jsx("span",{className:"pill",children:"MarkPrice"}),", or ",e.jsx("span",{className:"pill",children:"IndexPrice"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop_loss"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["New stop loss price. Set to ",e.jsx("span",{className:"pill",children:"0"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sl_trigger_by"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"LastPrice"}),", ",e.jsx("span",{className:"pill",children:"MarkPrice"}),", or ",e.jsx("span",{className:"pill",children:"IndexPrice"})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"orderId"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Modified order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"orderLinkId"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-defined order ID"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Zb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "data": {
    "orderId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "orderLinkId": ""
  }
}`,H={HTTP:`POST /futures/api/v1/close-position HTTP/1.1
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
closePosition();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Close Position"})]}),e.jsx("h1",{className:"api-title",children:"Close Position"}),e.jsxs("p",{className:"api-desc",children:["Close an existing position by placing a reduce-only order on the opposite side. The ",e.jsx("code",{children:"side"})," must be the opposite of the current position side (e.g. ",e.jsx("code",{children:"Sell"})," to close a long position)."]}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/close-position"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"side"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Opposite side of position. ",e.jsx("span",{className:"pill",children:"Buy"})," or ",e.jsx("span",{className:"pill",children:"Sell"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"type"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Limit"})," or ",e.jsx("span",{className:"pill",children:"Market"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"qty"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Quantity to close"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"price"}),e.jsx("td",{children:"conditional"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["Required for ",e.jsx("span",{className:"pill",children:"Limit"})," orders"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time_in_force"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"GTC"}),", ",e.jsx("span",{className:"pill",children:"IOC"}),", ",e.jsx("span",{className:"pill",children:"FOK"}),", ",e.jsx("span",{className:"pill",children:"PostOnly"})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"orderId"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Close order ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"orderLinkId"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"User-defined order ID"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Jb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "data": {
    "liquidation_price": 85120.47
  }
}`,H={HTTP:`POST /futures/api/v1/estimate-liquidation-price HTTP/1.1
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
estimateLiquidationPrice();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Estimate Liquidation Price"})]}),e.jsx("h1",{className:"api-title",children:"Estimate Liquidation Price"}),e.jsx("p",{className:"api-desc",children:"Estimate the liquidation price for a position before opening it. Useful for risk management calculations. The calculation uses the maintenance margin rate (MMR) for the given position value."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/estimate-liquidation-price"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"symbol"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Symbol name, e.g. ",e.jsx("span",{className:"pill",children:"BTCUSDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"side"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:"Buy"})," (long) or ",e.jsx("span",{className:"pill",children:"Sell"})," (short)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"price"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Entry price"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"qty"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Position quantity"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"leverage"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Leverage value"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"liquidation_price"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Estimated liquidation price"})]})})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Vb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "message": "Deposit to account successful.",
  "data": {
    "transferId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "status": "SUCCESS"
  }
}`,H={HTTP:`POST /futures/api/v1/deposit-to-sub-acc HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "coin": "USDT",
  "amount": "100"
}`,Python:`import requests
url = "https://api.bitzup.com/futures/api/v1/deposit-to-sub-acc"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {"coin": "USDT", "amount": "100"}
try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main
import ("bytes"; "encoding/json"; "fmt"; "io"; "net/http"; "time")
func main() {
	url := "https://api.bitzup.com/futures/api/v1/deposit-to-sub-acc"
	body, _ := json.Marshal(map[string]string{"coin": "USDT", "amount": "100"})
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
public class DepositToSubAccExample {
    public static void main(String[] args) throws Exception {
        String json = """
            {"coin": "USDT", "amount": "100"}
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/deposit-to-sub-acc"))
            .header("Content-Type", "application/json").header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");
async function depositToSubAcc() {
  try {
    const response = await axios.post("https://api.bitzup.com/futures/api/v1/deposit-to-sub-acc",
      { coin: "USDT", amount: "100" },
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
depositToSubAcc();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Deposit to Sub Account"})]}),e.jsx("h1",{className:"api-title",children:"Deposit to Sub Account"}),e.jsx("p",{className:"api-desc",children:"Transfer funds from the master account to a sub-account. The transfer is executed as a universal transfer on the UNIFIED account type."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/deposit-to-sub-acc"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"coin"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Coin name, e.g. ",e.jsx("span",{className:"pill",children:"USDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"amount"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Amount to deposit"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"transferId"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Unique transfer ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"status"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Transfer status, e.g. ",e.jsx("span",{className:"pill",children:"SUCCESS"})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Kb=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "message": "Deposit to account successful.",
  "data": {
    "transferId": "b2c3d4e5-f6a7-8901-bcde-f23456789012",
    "status": "SUCCESS"
  }
}`,H={HTTP:`POST /futures/api/v1/withdraw-from-sub-acc HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "coin": "USDT",
  "amount": "50"
}`,Python:`import requests
url = "https://api.bitzup.com/futures/api/v1/withdraw-from-sub-acc"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {"coin": "USDT", "amount": "50"}
try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main
import ("bytes"; "encoding/json"; "fmt"; "io"; "net/http"; "time")
func main() {
	url := "https://api.bitzup.com/futures/api/v1/withdraw-from-sub-acc"
	body, _ := json.Marshal(map[string]string{"coin": "USDT", "amount": "50"})
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
public class WithdrawFromSubAccExample {
    public static void main(String[] args) throws Exception {
        String json = """
            {"coin": "USDT", "amount": "50"}
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/withdraw-from-sub-acc"))
            .header("Content-Type", "application/json").header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");
async function withdrawFromSubAcc() {
  try {
    const response = await axios.post("https://api.bitzup.com/futures/api/v1/withdraw-from-sub-acc",
      { coin: "USDT", amount: "50" },
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
withdrawFromSubAcc();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Withdraw from Sub Account"})]}),e.jsx("h1",{className:"api-title",children:"Withdraw from Sub Account"}),e.jsx("p",{className:"api-desc",children:"Transfer funds from a sub-account back to the master account. The transfer is executed as a universal transfer on the UNIFIED account type."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method post",children:"POST"}),e.jsx("span",{className:"path",children:"/v1/withdraw-from-sub-acc"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"coin"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Coin name, e.g. ",e.jsx("span",{className:"pill",children:"USDT"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-interval",children:"amount"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Amount to withdraw"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"transferId"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Unique transfer ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"status"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["Transfer status, e.g. ",e.jsx("span",{className:"pill",children:"SUCCESS"})]})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})},Ib=()=>{const r=h.useRef(null),[o,u]=h.useState("HTTP"),[d,j]=h.useState(!1),[b,y]=h.useState(!1),[f,N]=h.useState("http"),g=120,R=async()=>{await navigator.clipboard.writeText(H[o]),j(!0),setTimeout(()=>j(!1),1500)},q=async()=>{navigator.clipboard.writeText(O),y(!0),setTimeout(()=>y(!1),1500)},z=["http","request-params","response-params","request-example","response-example"],S=m=>{const v=r.current,x=document.getElementById(m);if(!v||!x)return;const w=x.offsetTop-v.offsetTop-g;v.scrollTo({top:w,behavior:"smooth"})};h.useEffect(()=>{if(!r.current)return;const m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&N(x.target.id)})},{root:r.current,rootMargin:"-30% 0px -60% 0px",threshold:0});return z.forEach(v=>{const x=document.getElementById(v);x&&m.observe(x)}),()=>m.disconnect()},[]);const O=`{
  "success": "1",
  "message": "All positions closed successfully."
}`,H={HTTP:`GET /futures/api/v1/close-all-position HTTP/1.1
Host: api.bitzup.com
Authorization: Bearer <your_token>`,Python:`import requests
url = "https://api.bitzup.com/futures/api/v1/close-all-position"
headers = {"Authorization": "Bearer <your_token>"}
try:
    resp = requests.get(url, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,Go:`package main
import ("fmt"; "io"; "net/http"; "time")
func main() {
	url := "https://api.bitzup.com/futures/api/v1/close-all-position"
	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,Java:`import java.net.URI; import java.net.http.*; import java.time.Duration;
public class CloseAllPositionsExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/close-all-position"))
            .header("Authorization", "Bearer <your_token>")
            .GET().build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,Node:`const axios = require("axios");
async function closeAllPositions() {
  try {
    const response = await axios.get("https://api.bitzup.com/futures/api/v1/close-all-position",
      { headers: { Authorization: "Bearer <your_token>" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
closeAllPositions();`};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid p-0",children:e.jsx("div",{className:"api-layout",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9 col-md-12 api-content",ref:r,children:[e.jsxs("div",{className:"breadcrumb mb-4",children:[e.jsx("span",{className:"kline-market",children:"Private"}),e.jsx("span",{className:"mx-2",children:e.jsx(V,{className:"kline-arrow"})}),e.jsx("span",{className:"pill",children:"Close All Positions"})]}),e.jsx("h1",{className:"api-title",children:"Close All Positions"}),e.jsx("p",{className:"api-desc",children:"Close all open positions at market price. This endpoint will close every active position across all symbols associated with the authenticated account."}),e.jsx("div",{className:"api-cover",children:"Requires Authentication"}),e.jsx("div",{className:"api-cover",children:"Rate Limit: 15 req/s"}),e.jsx("h3",{className:"top-req-text",id:"http",children:"HTTP Request"}),e.jsxs("div",{className:"http-path",children:[e.jsx("span",{className:"method get",children:"GET"}),e.jsx("span",{className:"path",children:"/v1/close-all-position"})]}),e.jsx("h3",{className:"top-req-text",id:"request-params",children:"Request Parameters"}),e.jsx("p",{className:"api-desc",style:{fontSize:"14px"},children:"No body parameters required. The user is identified via the JWT Bearer token."}),e.jsx("h3",{className:"top-req-text",id:"response-params",children:"Response Parameters"}),e.jsx("div",{className:"api-table-box",children:e.jsxs("table",{className:"table table-striped api-table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Comments"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx("span",{className:"pill",children:'"1"'})," for success"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"message"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Status message"})]})]})]})}),e.jsx("h3",{className:"top-req-text",id:"request-example",children:"Request Example"}),e.jsx("div",{className:"lang-tabs",children:["HTTP","Python","Go","Java","Node"].map(m=>e.jsx("button",{className:o===m?"active":"",onClick:()=>u(m),children:m},m))}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:R,children:d?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:H[o]})})]}),e.jsx("h3",{className:"top-req-text",id:"response-example",children:"Response Example"}),e.jsxs("div",{className:"api-code-box position-relative",children:[e.jsx("button",{className:"copy-btn",onClick:q,children:b?e.jsx(Z,{}):e.jsx(J,{})}),e.jsx("pre",{children:e.jsx("code",{children:O})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-4 d-none d-md-block",children:e.jsx("div",{className:"api-sidebar",children:e.jsxs("ul",{children:[e.jsx("li",{className:f==="http"?"active":"",onClick:()=>S("http"),children:"HTTP Request"}),e.jsx("li",{className:f==="request-params"?"active":"",onClick:()=>S("request-params"),children:"Request Parameters"}),e.jsx("li",{className:f==="response-params"?"active":"",onClick:()=>S("response-params"),children:"Response Parameters"}),e.jsx("li",{className:f==="request-example"?"active":"",onClick:()=>S("request-example"),children:"Request Example"}),e.jsx("li",{className:f==="response-example"?"active":"",onClick:()=>S("response-example"),children:"Response Example"})]})})})]})})})})};function Wb(){const[r,o]=h.useState(localStorage.getItem("theme")||"dark");return h.useEffect(()=>{document.documentElement.setAttribute("data-theme",r),localStorage.setItem("theme",r)},[r]),e.jsxs(e.Fragment,{children:[e.jsx(pb,{theme:r,setTheme:o}),e.jsxs("div",{className:"d-flex",children:[e.jsx(xb,{}),e.jsx("div",{className:"flex-grow-1 page-content",children:e.jsxs(Nj,{children:[e.jsx(xe,{path:"/",element:e.jsx(fb,{})}),e.jsx(xe,{path:"docs/market/kline",element:e.jsx(jb,{})}),e.jsx(xe,{path:"docs/market/orderbook",element:e.jsx(bb,{})}),e.jsx(xe,{path:"docs/market/tickers",element:e.jsx(vb,{})}),e.jsx(xe,{path:"docs/market/recent-public-trades",element:e.jsx(yb,{})}),e.jsx(xe,{path:"docs/market/market-info",element:e.jsx(Rb,{})}),e.jsx(xe,{path:"docs/ws/connect",element:e.jsx(gb,{})}),e.jsx(xe,{path:"docs/websocket/public/orderbook",element:e.jsx(Nb,{})}),e.jsx(xe,{path:"docs/websocket/public/trade",element:e.jsx(Sb,{})}),e.jsx(xe,{path:"docs/websocket/public/ticker",element:e.jsx(Tb,{})}),e.jsx(xe,{path:"docs/websocket/public/kline",element:e.jsx(qb,{})}),e.jsx(xe,{path:"docs/rate-limit/rate-limit-rules",element:e.jsx(Cb,{})}),e.jsx(xe,{path:"docs/Enums",element:e.jsx(Eb,{})}),e.jsx(xe,{path:"docs/private/get-positions",element:e.jsx(_b,{})}),e.jsx(xe,{path:"docs/private/get-open-orders",element:e.jsx(kb,{})}),e.jsx(xe,{path:"docs/private/get-order-history",element:e.jsx(Bb,{})}),e.jsx(xe,{path:"docs/private/get-trade-history",element:e.jsx(Hb,{})}),e.jsx(xe,{path:"docs/private/get-closed-pnl",element:e.jsx(Ab,{})}),e.jsx(xe,{path:"docs/private/get-wallet-balance",element:e.jsx(Ob,{})}),e.jsx(xe,{path:"docs/private/get-leverage",element:e.jsx(zb,{})}),e.jsx(xe,{path:"docs/private/get-margin-mode",element:e.jsx(wb,{})}),e.jsx(xe,{path:"docs/private/set-leverage",element:e.jsx(Db,{})}),e.jsx(xe,{path:"docs/private/switch-margin-mode",element:e.jsx(Ub,{})}),e.jsx(xe,{path:"docs/private/add-isolated-margin",element:e.jsx(Mb,{})}),e.jsx(xe,{path:"docs/private/auto-isolated-margin",element:e.jsx(Lb,{})}),e.jsx(xe,{path:"docs/private/set-trading-stop",element:e.jsx(Pb,{})}),e.jsx(xe,{path:"docs/private/place-order",element:e.jsx(Gb,{})}),e.jsx(xe,{path:"docs/private/cancel-order",element:e.jsx(Yb,{})}),e.jsx(xe,{path:"docs/private/cancel-all-orders",element:e.jsx(Qb,{})}),e.jsx(xe,{path:"docs/private/modify-order",element:e.jsx(Xb,{})}),e.jsx(xe,{path:"docs/private/close-position",element:e.jsx(Zb,{})}),e.jsx(xe,{path:"docs/private/estimate-liquidation-price",element:e.jsx(Jb,{})}),e.jsx(xe,{path:"docs/private/deposit-to-sub-acc",element:e.jsx(Vb,{})}),e.jsx(xe,{path:"docs/private/withdraw-from-sub-acc",element:e.jsx(Kb,{})}),e.jsx(xe,{path:"docs/private/close-all-position",element:e.jsx(Ib,{})})]})})]})]})}const Fb=new URLSearchParams(window.location.search),yh=Fb.get("redirect");yh&&window.history.replaceState(null,"","/bitzup-exchange"+yh);Tf.createRoot(document.getElementById("root")).render(e.jsx(Zj,{basename:"/bitzup-exchange",children:e.jsx(Wb,{})}));
