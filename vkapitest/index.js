!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=41)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(32)("wks"),o=e(37),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(12);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(13),o=e(31);t.exports=e(5)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(0),o=e(2),i=e(10),u=e(4),c=function(t,n,e){var s,f,a,l=t&c.F,p=t&c.G,v=t&c.S,h=t&c.P,d=t&c.B,y=t&c.W,m=p?o:o[n]||(o[n]={}),_=m.prototype,x=p?r:v?r[n]:(r[n]||{}).prototype;p&&(e=n);for(s in e)(f=!l&&x&&void 0!==x[s])&&s in m||(a=f?x[s]:e[s],m[s]=p&&"function"!=typeof x[s]?e[s]:d&&f?i(a,r):y&&x[s]==a?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(a):h&&"function"==typeof a?i(Function.call,a):a,h&&((m.virtual||(m.virtual={}))[s]=a,t&c.R&&_&&!_[s]&&u(_,s,a)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){t.exports={}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(8);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(3),o=e(48),i=e(68),u=Object.defineProperty;n.f=e(5)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(12),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){"use strict";function r(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=o(n),this.reject=o(e)}var o=e(8);t.exports.f=function(t){return new r(t)}},function(t,n,e){var r=e(13).f,o=e(11),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(32)("keys"),o=e(37);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(25),o=e(14);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(9),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){"use strict";var r=e(27),o=e(6),i=e(64),u=e(4),c=e(11),s=e(7),f=e(52),a=e(18),l=e(60),p=e(1)("iterator"),v=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,d,y,m,_){f(e,n,d);var x,g,b,w=function(t){if(!v&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},S=n+" Iterator",j="values"==y,O=!1,P=t.prototype,L=P[p]||P["@@iterator"]||y&&P[y],T=L||w(y),M=y?j?w("entries"):T:void 0,E="Array"==n?P.entries||L:L;if(E&&(b=l(E.call(new t)))!==Object.prototype&&b.next&&(a(b,S,!0),r||c(b,p)||u(b,p,h)),j&&L&&"values"!==L.name&&(O=!0,T=function(){return L.call(this)}),r&&!_||!v&&!O&&P[p]||u(P,p,T),s[n]=T,s[S]=h,y)if(x={values:j?T:w("values"),keys:m?T:w("keys"),entries:M},_)for(g in x)g in P||i(P,g,x[g]);else o(o.P+o.F*(v||O),n,x);return x}},function(t,n){t.exports=!0},function(t,n,e){var r=e(61),o=e(23);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(17);t.exports=function(t,n){var e=r.f(t);return(0,e.resolve)(n),e.promise}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n,e){var r=e(3),o=e(8),i=e(1)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||void 0==(e=r(u)[i])?n:o(e)}},function(t,n,e){var r,o,i,u=e(10),c=e(49),s=e(24),f=e(15),a=e(0),l=a.process,p=a.setImmediate,v=a.clearImmediate,h=a.MessageChannel,d=a.Dispatch,y=0,m={},_=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},x=function(t){_.call(t.data)};p&&v||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++y]=function(){c("function"==typeof t?t:Function(t),n)},r(y),y},v=function(t){delete m[t]},"process"==e(9)(l)?r=function(t){l.nextTick(u(_,t,1))}:d&&d.now?r=function(t){d.now(u(_,t,1))}:h?(o=new h,i=o.port2,o.port1.onmessage=x,r=u(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts?(r=function(t){a.postMessage(t+"","*")},a.addEventListener("message",x,!1)):r="onreadystatechange"in f("script")?function(t){s.appendChild(f("script")).onreadystatechange=function(){s.removeChild(this),_.call(t)}}:function(t){setTimeout(u(_,t,1),0)}),t.exports={set:p,clear:v}},function(t,n,e){var r=e(20),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(14);t.exports=function(t){return Object(r(t))}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){t.exports={default:e(42),__esModule:!0}},function(t,n,e){t.exports={default:e(43),__esModule:!0}},function(t,n){},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,n){return(0,f.default)(n,{v:"5.65"}),new c.default(function(e,r){VK.api(t,n,function(t){t.error?r(new Error(t.error.error_msg)):e(t.response)})})}function i(){return new c.default(function(t,n){VK.init({apiId:6059604}),VK.Auth.getLoginStatus(function(e){e.session?t():VK.Auth.login(function(e){e.session?t():n(new Error("Не удалось авторизоваться"))},2)})})}var u=e(39),c=r(u),s=e(38),f=r(s);e(40);var a=void 0,l=function(t){return'\n    <li data-id="'+t.id+'">\n        <img class="main__photo" src="'+(t.photo_200?t.photo_200:"https://vk.com/images/deactivated_200.png")+'" alt="friend photo">\n        <p>'+t.first_name+" "+t.last_name+"</p>\n    </li>"},p=function(){document.querySelector(".main__friends").innerHTML=a.map(function(t){return l(t)}).join("")};document.querySelector(".auth").addEventListener("click",function(t){t.preventDefault(),i().then(function(){document.querySelector(".button-container").className="button-container button-container_hidden"}).then(function(){return o("users.get",{name_case:"gen"})}).then(function(t){header.textContent="Друзья "+t[0].first_name+" "+t[0].last_name}).then(function(){return o("friends.get",{fields:"photo_200"})}).then(function(t){return a=t.items}).then(p)}),function(){return new c.default(function(t,n){VK.init({apiId:6059604}),VK.Auth.getLoginStatus(function(e){e.session?t():n(new Error("Не удалось авторизоваться"))})})}().then(function(){document.querySelector(".button-container").className="button-container button-container_hidden"}).then(function(){return o("users.get",{name_case:"gen"})}).then(function(t){header.textContent="Друзья "+t[0].first_name+" "+t[0].last_name}).then(function(){return o("friends.get",{fields:"photo_200",count:5,order:"random"})}).then(function(t){return a=t.items}).then(p)},function(t,n,e){e(71),t.exports=e(2).Object.assign},function(t,n,e){e(72),e(74),e(77),e(73),e(75),e(76),t.exports=e(2).Promise},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(21),o=e(35),i=e(67);t.exports=function(t){return function(n,e,u){var c,s=r(n),f=o(s.length),a=i(u,f);if(t&&e!=e){for(;f>a;)if((c=s[a++])!=c)return!0}else for(;f>a;a++)if((t||a in s)&&s[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(10),o=e(51),i=e(50),u=e(3),c=e(35),s=e(69),f={},a={},n=t.exports=function(t,n,e,l,p){var v,h,d,y,m=p?function(){return t}:s(t),_=r(e,l,n?2:1),x=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(v=c(t.length);v>x;x++)if((y=n?_(u(h=t[x])[0],h[1]):_(t[x]))===f||y===a)return y}else for(d=m.call(t);!(h=d.next()).done;)if((y=o(d,_,h.value,n))===f||y===a)return y};n.BREAK=f,n.RETURN=a},function(t,n,e){t.exports=!e(5)&&!e(16)(function(){return 7!=Object.defineProperty(e(15)("div"),"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(7),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(3);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){"use strict";var r=e(57),o=e(31),i=e(18),u={};e(4)(u,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(0),o=e(34).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,s="process"==e(9)(u);t.exports=function(){var t,n,e,f=function(){var r,o;for(s&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(s)e=function(){u.nextTick(f)};else if(i){var a=!0,l=document.createTextNode("");new i(f).observe(l,{characterData:!0}),e=function(){l.data=a=!a}}else if(c&&c.resolve){var p=c.resolve();e=function(){p.then(f)}}else e=function(){o.call(r,f)};return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){"use strict";var r=e(28),o=e(59),i=e(62),u=e(36),c=e(25),s=Object.assign;t.exports=!s||e(16)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=s({},t)[e]||Object.keys(s({},n)).join("")!=r})?function(t,n){for(var e=u(t),s=arguments.length,f=1,a=o.f,l=i.f;s>f;)for(var p,v=c(arguments[f++]),h=a?r(v).concat(a(v)):r(v),d=h.length,y=0;d>y;)l.call(v,p=h[y++])&&(e[p]=v[p]);return e}:s},function(t,n,e){var r=e(3),o=e(58),i=e(23),u=e(19)("IE_PROTO"),c=function(){},s=function(){var t,n=e(15)("iframe"),r=i.length;for(n.style.display="none",e(24).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(13),o=e(3),i=e(28);t.exports=e(5)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,s=0;c>s;)r.f(t,e=u[s++],n[e]);return t}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(11),o=e(36),i=e(19)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(11),o=e(21),i=e(46)(!1),u=e(19)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),s=0,f=[];for(e in c)e!=u&&r(c,e)&&f.push(e);for(;n.length>s;)r(c,e=n[s++])&&(~i(f,e)||f.push(e));return f}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(4);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){t.exports=e(4)},function(t,n,e){"use strict";var r=e(0),o=e(2),i=e(13),u=e(5),c=e(1)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];u&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(20),o=e(14);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),s=r(e),f=c.length;return s<0||s>=f?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===f||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536)}}},function(t,n,e){var r=e(20),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(12);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(22),o=e(1)("iterator"),i=e(7);t.exports=e(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){"use strict";var r=e(44),o=e(54),i=e(7),u=e(21);t.exports=e(26)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(6);r(r.S+r.F,"Object",{assign:e(56)})},function(t,n){},function(t,n,e){"use strict";var r,o,i,u,c=e(27),s=e(0),f=e(10),a=e(22),l=e(6),p=e(12),v=e(8),h=e(45),d=e(47),y=e(33),m=e(34).set,_=e(55)(),x=e(17),g=e(29),b=e(30),w=s.TypeError,S=s.process,j=s.Promise,O="process"==a(S),P=function(){},L=o=x.f,T=!!function(){try{var t=j.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(P,P)};return(O||"function"==typeof PromiseRejectionEvent)&&t.then(P)instanceof n}catch(t){}}(),M=c?function(t,n){return t===n||t===j&&n===u}:function(t,n){return t===n},E=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},k=function(t,n){if(!t._n){t._n=!0;var e=t._c;_(function(){for(var r=t._v,o=1==t._s,i=0;e.length>i;)!function(n){var e,i,u=o?n.ok:n.fail,c=n.resolve,s=n.reject,f=n.domain;try{u?(o||(2==t._h&&F(t),t._h=1),!0===u?e=r:(f&&f.enter(),e=u(r),f&&f.exit()),e===n.promise?s(w("Promise-chain cycle")):(i=E(e))?i.call(e,c,s):c(e)):s(r)}catch(t){s(t)}}(e[i++]);t._c=[],t._n=!1,n&&!t._h&&A(t)})}},A=function(t){m.call(s,function(){var n,e,r,o=t._v,i=C(t);if(i&&(n=g(function(){O?S.emit("unhandledRejection",o,t):(e=s.onunhandledrejection)?e({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=O||C(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},C=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,r=0;e.length>r;)if(n=e[r++],n.fail||!C(n.promise))return!1;return!0},F=function(t){m.call(s,function(){var n;O?S.emit("rejectionHandled",t):(n=s.onrejectionhandled)&&n({promise:t,reason:t._v})})},R=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),k(n,!0))},I=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw w("Promise can't be resolved itself");(n=E(t))?_(function(){var r={_w:e,_d:!1};try{n.call(t,f(I,r,1),f(R,r,1))}catch(t){R.call(r,t)}}):(e._v=t,e._s=1,k(e,!1))}catch(t){R.call({_w:e,_d:!1},t)}}};T||(j=function(t){h(this,j,"Promise","_h"),v(t),r.call(this);try{t(f(I,this,1),f(R,this,1))}catch(t){R.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(63)(j.prototype,{then:function(t,n){var e=L(y(this,j));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=O?S.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&k(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=f(I,t,1),this.reject=f(R,t,1)},x.f=L=function(t){return M(j,t)?new i(t):o(t)}),l(l.G+l.W+l.F*!T,{Promise:j}),e(18)(j,"Promise"),e(65)("Promise"),u=e(2).Promise,l(l.S+l.F*!T,"Promise",{reject:function(t){var n=L(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!T),"Promise",{resolve:function(t){return t instanceof j&&M(t.constructor,this)?t:b(this,t)}}),l(l.S+l.F*!(T&&e(53)(function(t){j.all(t).catch(P)})),"Promise",{all:function(t){var n=this,e=L(n),r=e.resolve,o=e.reject,i=g(function(){var e=[],i=0,u=1;d(t,!1,function(t){var c=i++,s=!1;e.push(void 0),u++,n.resolve(t).then(function(t){s||(s=!0,e[c]=t,--u||r(e))},o)}),--u||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=L(n),r=e.reject,o=g(function(){d(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n,e){"use strict";var r=e(66)(!0);e(26)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(6),o=e(2),i=e(0),u=e(33),c=e(30);r(r.P+r.R,"Promise",{finally:function(t){var n=u(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then(function(){return e})}:t,e?function(e){return c(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var r=e(6),o=e(17),i=e(29);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){e(70);for(var r=e(0),o=e(4),i=e(7),u=e(1)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var f=c[s],a=r[f],l=a&&a.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}}]);