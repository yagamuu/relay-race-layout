parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6tg":[function(require,module,exports) {
"use strict";var t,e,n,r;function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return s(t)||a(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}function s(t){if(Array.isArray(t))return t}function c(t){return h(t)||l(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.component=An,exports.install=_n,exports.mount=Tn,exports.pure=wn,exports.register=En,exports.uninstall=Mn,exports.unmount=jn,exports.unregister=Nn,exports.version=exports.__=void 0;var d=new Map,m=Symbol("riot-component"),v=new Set,b="is",O="value",g="mount",y="update",E="unmount",N="shouldUpdate",T="onBeforeMount",j="onMounted",_="onBeforeUpdate",M="onUpdated",A="onBeforeUnmount",w="onUnmounted",x="props",S="state",P="slots",C="root",D=Symbol.for("pure"),I=Symbol("parent"),U=Symbol("attributes"),Y=Symbol("template"),L=Object.freeze({__proto__:null,COMPONENTS_IMPLEMENTATION_MAP:d,DOM_COMPONENT_INSTANCE_PROPERTY:m,PLUGINS_SET:v,IS_DIRECTIVE:b,VALUE_ATTRIBUTE:O,MOUNT_METHOD_KEY:g,UPDATE_METHOD_KEY:y,UNMOUNT_METHOD_KEY:E,SHOULD_UPDATE_KEY:N,ON_BEFORE_MOUNT_KEY:T,ON_MOUNTED_KEY:j,ON_BEFORE_UPDATE_KEY:_,ON_UPDATED_KEY:M,ON_BEFORE_UNMOUNT_KEY:A,ON_UNMOUNTED_KEY:w,PROPS_KEY:x,STATE_KEY:S,SLOTS_KEY:P,ROOT_KEY:C,IS_PURE_SYMBOL:D,PARENT_KEY_SYMBOL:I,ATTRIBUTES_KEY_SYMBOL:U,TEMPLATE_KEY_SYMBOL:Y});function B(t,e){return p(t)===e}function K(t){return B(t,"function")}function k(){return this}function R(t,e){return e.forEach(function(e){t[e]=t[e].bind(t)}),t}function z(t){return K(t)?t.prototype&&t.prototype.constructor?new t:t():t}function H(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})}function $(t,e){t.firstChild&&(e.appendChild(t.firstChild),$(t,e))}function F(t){V(t.childNodes)}function V(t){Array.from(t).forEach(G)}function G(t){var e=t.parentNode;t.remove?t.remove():e&&e.removeChild(t)}var q=0,X=1,Z=2,J=3,Q=4,W={EACH:q,IF:X,SIMPLE:Z,TAG:J,SLOT:Q},tt=0,et=1,nt=2,rt=3,ot={ATTRIBUTE:tt,EVENT:et,TEXT:nt,VALUE:rt};function it(t){var e=t.dom.cloneNode(!0);return{avoidDOMInjection:!0,fragment:e,children:Array.from(e.childNodes)}}var ut=[].indexOf,at=function(t,e,n,r,o,i){for(var u=("selectedIndex"in e),a=u;r<o;){var s=t(n[r],1);if(e.insertBefore(s,i),u&&a&&s.selected){a=!a;var c=e.selectedIndex;e.selectedIndex=c<0?r:ut.call(e.querySelectorAll("option"),s)}r++}},st=function(t,e){return t==e},ct=function(t){return t},ft=function(t,e,n,r,o,i,u){var a=i-o;if(a<1)return-1;for(;n-e>=a;){for(var s=e,c=o;s<n&&c<i&&u(t[s],r[c]);)s++,c++;if(c===i)return e;e=s+1}return-1},lt=function(t,e,n,r,o,i){for(;r<o&&i(n[r],t[e-1]);)r++,e--;return 0===e},ht=function(t,e,n,r,o){return n<r?t(e[n],0):0<n?t(e[n-1],-0).nextSibling:o},pt=function(t,e,n,r){for(;n<r;)Tt(t(e[n++],-1))},dt=-1,mt=1,vt=0,bt=50,Ot=function(t,e,n,r,o,i,u,a){var s=0,c=r<a?r:a,f=Array(c++),l=Array(c);l[0]=-1;for(var h=1;h<c;h++)l[h]=u;for(var p=o.slice(i,u),d=e;d<n;d++){var m=p.indexOf(t[d]);if(-1<m){var v=m+i;-1<(s=Et(l,c,v))&&(l[s]=v,f[s]={newi:d,oldi:v,prev:f[s-1]})}}for(s=--c,--u;l[s]>u;)--s;c=a+r-s;var b=Array(c),O=f[s];for(--n;O;){for(var g=O,y=g.newi,E=g.oldi;n>y;)b[--c]=mt,--n;for(;u>E;)b[--c]=dt,--u;b[--c]=vt,--n,--u,O=O.prev}for(;n>=e;)b[--c]=mt,--n;for(;u>=i;)b[--c]=dt,--u;return b},gt=function(t,e,n,r,o,i,u){var a,s,c,f,l,h,p,d=n+i,m=[];t:for(a=0;a<=d;a++){if(a>bt)return null;for(p=a-1,l=a?m[a-1]:[0,0],h=m[a]=[],s=-a;s<=a;s+=2){for(c=(f=s===-a||s!==a&&l[p+s-1]<l[p+s+1]?l[p+s+1]:l[p+s-1]+1)-s;f<i&&c<n&&u(r[o+f],t[e+c]);)f++,c++;if(f===i&&c===n)break t;h[a+s]=f}}var v=Array(a/2+d/2),b=v.length-1;for(a=m.length-1;a>=0;a--){for(;f>0&&c>0&&u(r[o+f-1],t[e+c-1]);)v[b--]=vt,f--,c--;if(!a)break;p=a-1,l=a?m[a-1]:[0,0],(s=f-c)===-a||s!==a&&l[p+s-1]<l[p+s+1]?(c--,v[b--]=mt):(f--,v[b--]=dt)}return v},yt=function(t,e,n,r,o,i,u,a,s){for(var c=[],f=t.length,l=u,h=0;h<f;)switch(t[h++]){case vt:o++,l++;break;case mt:c.push(r[o]),at(e,n,r,o++,o,l<a?e(i[l],0):s);break;case dt:l++}for(h=0;h<f;)switch(t[h++]){case vt:u++;break;case dt:-1<c.indexOf(i[u])?u++:pt(e,i,u++,u)}},Et=function(t,e,n){for(var r=1,o=e;r<o;){var i=(r+o)/2>>>0;n<t[i]?o=i:r=i+1}return r},Nt=function(t,e,n,r,o,i,u,a,s,c,f,l,h){yt(gt(n,r,i,u,a,c,l)||Ot(n,r,o,i,u,a,s,c),t,e,n,r,u,a,f,h)},Tt=function(t){return(t.remove||jt).call(t)};function jt(){var t=this.parentNode;t&&t.removeChild(this)}var _t=function(t,e,n,r){r||(r={});for(var o=r.compare||st,i=r.node||ct,u=null==r.before?null:i(r.before,0),a=e.length,s=a,c=0,f=n.length,l=0;c<s&&l<f&&o(e[c],n[l]);)c++,l++;for(;c<s&&l<f&&o(e[s-1],n[f-1]);)s--,f--;var h=c===s,p=l===f;if(h&&p)return n;if(h&&l<f)return at(i,t,n,l,f,ht(i,e,c,a,u)),n;if(p&&c<s)return pt(i,e,c,s),n;var d=s-c,m=f-l,v=-1;if(d<m){if(-1<(v=ft(n,l,f,e,c,s,o)))return at(i,t,n,l,v,i(e[c],0)),at(i,t,n,v+d,f,ht(i,e,s,a,u)),n}else if(m<d&&-1<(v=ft(e,c,s,n,l,f,o)))return pt(i,e,c,v),pt(i,e,v+m,s),n;return d<2||m<2?(at(i,t,n,l,f,i(e[c],0)),pt(i,e,c,s),n):d===m&&lt(n,f,e,c,s,o)?(at(i,t,n,l,f,ht(i,e,s,a,u)),n):(Nt(i,t,n,l,f,m,e,c,s,d,a,o,u),n)};function Mt(t,e){return p(t)===e}function At(t){var e=t.ownerSVGElement;return!!e||null===e}function wt(t){return!Ct(t.content)}function xt(t){return Mt(t,"function")}function St(t){return Mt(t,"boolean")}function Pt(t){return!Ct(t)&&Mt(t,"object")}function Ct(t){return null==t}var Dt=Symbol("unmount"),It=Object.seal({nodes:[],mount:function(t,e){return this.update(t,e)},update:function(t,e){var n=this.placeholder,r=this.nodes,o=this.childrenMap,i=t===Dt?null:this.evaluate(t),u=i?Array.from(i):[],a=n.parentNode,s=Bt(u,t,e,this),c=s.newChildrenMap,f=s.batches,l=s.futureNodes;return _t(a,r,l,{before:n,node:Ut(Array.from(o.values()),e)}),f.forEach(function(t){return t()}),this.childrenMap=c,this.nodes=l,this},unmount:function(t,e){return this.update(Dt,e),this}});function Ut(t,e){return function(n,r){if(r<0){var o=t.pop();if(o){var i=o.template,u=o.context;i.unmount(u,e,null)}}return n}}function Yt(t,e){return!!t&&!1===Boolean(t(e))}function Lt(t,e){var n=e.itemName,r=e.indexName,o=e.index,i=e.item;return t[n]=i,r&&(t[r]=o),t}function Bt(t,e,n,r){var o=r.condition,i=r.template,u=r.childrenMap,a=r.itemName,s=r.getKey,f=r.indexName,l=r.root,h=r.isTemplateTag,p=new Map,d=[],m=[];return t.forEach(function(t,r){var v=Lt(Object.create(e),{itemName:a,indexName:f,index:r,item:t}),b=s?s(v):r,O=u.get(b);if(!Yt(o,v)){var g=O?O.template:i.clone(),y=O?g.el:l.cloneNode(),E=!O,N=h&&E?it(g):{};if(E?d.push(function(){return g.mount(y,v,n,N)}):d.push(function(){return g.update(v,n)}),h){var T=N.children||g.children;m.push.apply(m,c(T))}else m.push(y);u.delete(b),p.set(b,{template:g,context:v,index:r})}}),{newChildrenMap:p,batches:d,futureNodes:m}}function Kt(t,e){var n=e.evaluate,r=e.condition,o=e.itemName,i=e.indexName,u=e.getKey,a=e.template,s=document.createTextNode(""),c=t.parentNode,f=t.cloneNode();return c.insertBefore(s,t),G(t),Object.assign({},It,{childrenMap:new Map,node:t,root:f,condition:r,evaluate:n,isTemplateTag:wt(f),template:a.createDOM(t),getKey:u,indexName:i,itemName:o,placeholder:s})}var kt=Object.seal({mount:function(t,e){return this.update(t,e)},update:function(t,e){var n,r=this,o=!!this.evaluate(t),i=!this.value&&o,u=this.value&&!o;switch(!0){case i:n=r.node.cloneNode(),r.placeholder.parentNode.insertBefore(n,r.placeholder),r.template=r.template.clone(),r.template.mount(n,t,e);break;case u:this.unmount(t);break;default:o&&this.template.update(t,e)}return this.value=o,this},unmount:function(t,e){return this.template.unmount(t,e,!0),this}});function Rt(t,e){var n=e.evaluate,r=e.template,o=t.parentNode,i=document.createTextNode("");return o.insertBefore(i,t),G(t),Object.assign({},kt,{node:t,evaluate:n,placeholder:i,template:r.createDOM(t)})}function zt(t){var e=this,n=new Map,r=function(r){return n.has(r)?n.get(r):n.set(r,t.call(e,r))&&n.get(r)};return r.cache=n,r}function Ht(t){return t.reduce(function(t,e){var n=e.value,r=e.type;switch(!0){case!e.name&&r===tt:return Object.assign({},t,{},n);case r===rt:t.value=e.value;break;default:t[H(e.name)]=e.value}return t},{})}var $t="removeAttribute",Ft="setAttribute",Vt="undefined"==typeof Element?{}:Element.prototype,Gt=zt(function(t){return Vt.hasOwnProperty(t)});function qt(t,e){Object.entries(e).forEach(function(e){var n=i(e,2),r=n[0],o=n[1];return Zt(t,{name:r},o)})}function Xt(t,e){Object.keys(e).forEach(function(e){return t.removeAttribute(e)})}function Zt(t,e,n,r){var o=e.name;o?(!Gt(o)&&(St(n)||Pt(n)||xt(n))&&(t[o]=n),t[Jt(n)](o,Qt(o,n))):n?qt(t,n):r&&Xt(t,r)}function Jt(t){return Ct(t)||!1===t||""===t||Pt(t)||xt(t)?$t:Ft}function Qt(t,e){return!0===e?t:e}var Wt=/^on/;function te(t,e,n,r){var o=e.name.replace(Wt,"");r&&t.removeEventListener(o,r),n&&t.addEventListener(o,n,!1)}function ee(t){return Ct(t)?"":t}var ne=function(t,e){var n=t.childNodes[e];if(n.nodeType===Node.COMMENT_NODE){var r=document.createTextNode("");return t.replaceChild(r,n),r}return n};function re(t,e,n){t.data=ee(n)}function oe(t,e,n){t.value=ee(n)}var ie=(o(t={},tt,Zt),o(t,et,te),o(t,nt,re),o(t,rt,oe),t),ue=Object.seal({mount:function(t){return this.value=this.evaluate(t),ae(this,this.value),this},update:function(t){var e=this.evaluate(t);return this.value!==e&&(ae(this,e),this.value=e),this},unmount:function(){return this.type===et&&ae(this,null),this}});function ae(t,e){return ie[t.type](t.node,t,e,t.value)}function se(t,e){return Object.assign({},ue,{},e,{node:e.type===nt?ne(t,e.childNodeIndex):t})}function ce(t,e,n){return e.reduce(function(e,r){return Object.assign({},e,o({},r,function(e){return t.map(function(t){return t[r](e)})&&n}))},{})}function fe(t,e){var n=e.expressions;return Object.assign({},ce(n.map(function(e){return se(t,e)}),["mount","update","unmount"]))}function le(t,e,n){if(!t||!t.length)return n;var r=t.map(function(t){return Object.assign({},t,{value:t.evaluate(e)})});return Object.assign(Object.create(n||null),Ht(r))}var he=Object.seal({attributes:[],getTemplateScope:function(t,e){return le(this.attributes,t,e)},mount:function(t,e){var n=this,r=!!t.slots&&t.slots.find(function(t){return t.id===n.name}),o=this.node.parentNode;return this.template=r&&xe(r.html,r.bindings).createDOM(o),this.template&&(this.template.mount(this.node,this.getTemplateScope(t,e)),this.template.children=pe(this.node)),G(this.node),this},update:function(t,e){return this.template&&this.template.update(this.getTemplateScope(t,e)),this},unmount:function(t,e,n){return this.template&&this.template.unmount(this.getTemplateScope(t,e),null,n),this}});function pe(t,e){void 0===e&&(e=[]);var n=t.firstChild;return n?(t.parentNode.insertBefore(n,t),[n].concat(c(pe(t)))):e}function de(t,e){var n=e.name,r=e.attributes;return Object.assign({},he,{attributes:r,node:t,name:n})}function me(t,e,n){return void 0===e&&(e=[]),void 0===n&&(n=[]),t?t({slots:e,attributes:n}):xe(be(e),[].concat(c(ve(e)),[{expressions:n.map(function(t){return Object.assign({type:tt},t)})}]))}function ve(t){return t.reduce(function(t,e){var n=e.bindings;return t.concat(n)},[])}function be(t){return t.reduce(function(t,e){return t+e.html},"")}var Oe=Object.seal({mount:function(t){return this.update(t)},update:function(t,e){var n=this.evaluate(t);return n===this.name?this.tag.update(t):(this.unmount(t,e,!0),this.name=n,this.tag=me(this.getComponent(n),this.slots,this.attributes),this.tag.mount(this.node,t)),this},unmount:function(t,e,n){return this.tag&&this.tag.unmount(n),this}});function ge(t,e){var n=e.evaluate,r=e.getComponent,o=e.slots,i=e.attributes;return Object.assign({},Oe,{node:t,evaluate:n,slots:o,attributes:i,getComponent:r})}var ye=(o(e={},X,Rt),o(e,Z,fe),o(e,q,Kt),o(e,J,ge),o(e,Q,de),e);function Ee(t,e){return t.map(function(t){return t.type===nt?Object.assign({},t,{childNodeIndex:t.childNodeIndex+e}):t})}function Ne(t,e,n){var r=e.selector,o=e.type,i=e.redundantAttribute,u=e.expressions,a=r?t.querySelector(r):t;i&&a.removeAttribute(i);var s=u||[];return(ye[o]||ye[Z])(a,Object.assign({},e,{expressions:n&&!r?Ee(s,n):s}))}function Te(t,e){var n=wt(e)?e:document.createElement("template");return n.innerHTML=t,n.content}function je(t,e){return e.ownerDocument.importNode((new window.DOMParser).parseFromString('<svg xmlns="http://www.w3.org/2000/svg">'.concat(t,"</svg>"),"application/xml").documentElement,!0)}function _e(t,e){return At(t)?je(e,t):Te(e,t)}function Me(t,e){switch(!0){case At(t):$(e,t);break;case wt(t):t.parentNode.replaceChild(e,t);break;default:t.appendChild(e)}}function Ae(t,e){return e&&("string"==typeof e?_e(t,e):e)}var we=Object.freeze({createDOM:function(t){return this.dom=this.dom||Ae(t,this.html),this},mount:function(t,e,n,r){var o=this;if(void 0===r&&(r={}),!t)throw new Error("Please provide DOM node to mount properly your template");this.el&&this.unmount(e);var i=r,u=i.fragment,a=i.children,s=i.avoidDOMInjection,c=(a?a[0]:t).parentNode,f=wt(t),l=f?Math.max(Array.from(c.children).indexOf(t),0):null;return this.isTemplateTag=f,this.createDOM(t),this.dom&&(this.fragment=u||this.dom.cloneNode(!0)),this.el=this.isTemplateTag?c:t,this.children=this.isTemplateTag?a||Array.from(this.fragment.childNodes):null,!s&&this.fragment&&Me(t,this.fragment),this.bindings=this.bindingsData.map(function(t){return Ne(o.el,t,l)}),this.bindings.forEach(function(t){return t.mount(e,n)}),this},update:function(t,e){return this.bindings.forEach(function(n){return n.update(t,e)}),this},unmount:function(t,e,n){if(this.el){switch(this.bindings.forEach(function(r){return r.unmount(t,e,n)}),!0){case this.children&&null!==n:V(this.children);break;case!0===n:G(this.el);break;case null!==n:F(this.el)}this.el=null}return this},clone:function(){return Object.assign({},this,{el:null})}});function xe(t,e){return void 0===e&&(e=[]),Object.assign({},we,{html:t,bindingsData:e})}function Se(t,e,n,r){return void 0===r&&(r={}),Object.defineProperty(t,e,Object.assign({value:n,enumerable:!1,writable:!1,configurable:!0},r)),t}function Pe(t,e,n){return Object.entries(e).forEach(function(e){var r=i(e,2),o=r[0],u=r[1];Se(t,o,u,n)}),t}function Ce(t,e){return Object.entries(e).forEach(function(e){var n=i(e,2),r=n[0],o=n[1];t[r]||(t[r]=o)}),t}var De=0,Ie=3;function Ue(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Ye(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})}function Le(t){throw new Error(t)}function Be(t){return t.reduce(function(t,e){var n=e.value,r=e.type;switch(!0){case!e.name&&r===De:return Object.assign({},t,{},n);case r===Ie:t.value=e.value;break;default:t[Ye(e.name)]=e.value}return t},{})}function Ke(t){return Array.isArray(t)?t:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&"number"==typeof t.length?Array.from(t):[t]}function ke(t,e){return Ke("string"==typeof t?(e||document).querySelectorAll(t):t)}var Re=function(t){return 1===t.length?t[0]:t};function ze(t,e,n){var r="string"==typeof e?[e]:e;return Re(Ke(t).map(function(t){return Re(r.map(function(e){return t[n](e)}))}))}function He(t,e,n){var r="object"===p(e)?e:o({},e,n),i=Object.keys(r);return Ke(t).forEach(function(t){i.forEach(function(e){return t.setAttribute(e,r[e])})}),t}function $e(t,e){return ze(t,e,"getAttribute")}var Fe=new Map,Ve="style[riot]",Ge=function(t){return function(){return t||(He(t=ke(Ve)[0]||document.createElement("style"),"type","text/css"),t.parentNode||document.head.appendChild(t),t)}}(),qe={CSS_BY_NAME:Fe,add:function(t,e){return Fe.has(t)||(Fe.set(t,e),this.inject()),this},inject:function(){return Ge().innerHTML=c(Fe.values()).join("\n"),this},remove:function(t){return Fe.has(t)&&(Fe.delete(t),this.inject()),this}};function Xe(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(r=[].concat(n,c(r))).length<t.length?Xe.apply(void 0,[t].concat(c(r))):t.apply(void 0,c(r))}}function Ze(t){return $e(t,b)||t.tagName.toLowerCase()}var Je=Object.freeze({$:function(t){return ke(t,this.root)[0]},$$:function(t){return ke(t,this.root)}}),Qe=Object.freeze((o(n={},g,k),o(n,y,k),o(n,E,k),n)),We=Object.freeze((o(r={},N,k),o(r,T,k),o(r,j,k),o(r,_,k),o(r,M,k),o(r,A,k),o(r,w,k),r)),tn=Object.assign({},Qe,{clone:k,createDOM:k}),en=function(t,e){return t[m]=e};function nn(t){return[g,y,E].reduce(function(e,n){return e[n]=t(n),e},{})}function rn(t,e){return t(xe,ot,W,function(t){return e[t]||d.get(t)})}function on(t,e){var n=e.slots,r=e.attributes,o=e.props,i=e.css;e.template&&Le("Pure components can not have html"),i&&Le("Pure components do not have css");var u=Ce(t({slots:n,attributes:r,props:o}),Qe);return nn(function(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(t===g){var o=n[0];en(o,u)}return u[t].apply(u,n),u}})}function un(t){var e=t.css,n=t.template,r=t.exports,o=t.name,i=n?rn(n,r?cn(r.components):{}):tn;return function(t){var u=t.slots,a=t.attributes,s=t.props;if(r&&r[D])return on(r,{slots:u,attributes:a,props:s,css:e,template:n});var c=z(r)||{},f=an({css:e,template:i,componentAPI:c,name:o})({slots:u,attributes:a,props:s});return{mount:function(t,e,n){return f.mount(t,n,e)},update:function(t,e){return f.update(e,t)},unmount:function(t){return f.unmount(t)}}}}function an(t){var e,n=t.css,r=t.template,i=t.componentAPI,u=t.name;return n&&u&&qe.add(u,n),Xe(pn)(Pe(Ce(i,Object.assign({},We,o({},S,{}))),Object.assign((o(e={},P,null),o(e,C,null),e),Je,{name:u,css:n,template:r})))}function sn(t,e){void 0===e&&(e=[]);var n=e.map(function(e){return se(t,e)}),r={};return Object.assign(r,Object.assign({expressions:n},nn(function(t){return function(e){return n.forEach(function(n){return n[t](e)}),r}})))}function cn(t){return void 0===t&&(t={}),Object.entries(z(t)).reduce(function(t,e){var n=i(e,2),r=n[0],o=n[1];return t[Ue(r)]=un(o),t},{})}function fn(t){return c(v).reduce(function(t,e){return e(t)||t},t)}function ln(t,e){return Object.assign({},t,{},z(e))}function hn(t,e){Ze(t)!==e&&He(t,b,e)}function pn(t,e){var n=e.slots,r=e.attributes,o=e.props;return R(fn(Pe(Object.create(t),{mount:function(e,i,u){return void 0===i&&(i={}),this[U]=sn(e,r).mount(u),Se(this,x,Object.freeze(Object.assign({},o,{},Be(this[U].expressions)))),this[S]=ln(this[S],i),this[Y]=this.template.createDOM(e).clone(),en(e,this),t.name&&hn(e,t.name),Se(this,C,e),Se(this,P,n),this[T](this[x],this[S]),this[Y].mount(e,this,u),this[I]=u,this[j](this[x],this[S]),this},update:function(t,e){void 0===t&&(t={}),e&&this[U].update(e);var n=Be(this[U].expressions);if(!1!==this[N](n,this[x]))return Se(this,x,Object.freeze(Object.assign({},o,{},n))),this[S]=ln(this[S],t),this[_](this[x],this[S]),this[Y].update(this,this[I]),this[M](this[x],this[S]),this},unmount:function(t){return this[A](this[x],this[S]),this[U].unmount(),this[Y].unmount(this,this[I],null===t?null:!t),this[w](this[x],this[S]),this}})),Object.keys(t).filter(function(e){return K(t[e])}))}function dn(t,e,n){var r=n||Ze(t);return d.has(r)||Le('The component named "'.concat(r,'" was never registered')),d.get(r)({props:e}).mount(t)}function mn(t){return Array.from(t.attributes).reduce(function(t,e){return t[Ye(e.name)]=e.value,t},{})}function vn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}var bn=L.DOM_COMPONENT_INSTANCE_PROPERTY,On=L.COMPONENTS_IMPLEMENTATION_MAP,gn=L.PLUGINS_SET;function yn(t,e){return void 0===e&&(e=[]),Object.assign({},mn(t),{},z(e))}function En(t,e){var n=e.css,r=e.template,o=e.exports;return On.has(t)&&Le('The component "'.concat(t,'" was already registered')),On.set(t,un({name:t,css:n,template:r,exports:o})),On}function Nn(t){return On.has(t)||Le('The component "'.concat(t,'" was never registered')),On.delete(t),qe.remove(t),On}function Tn(t,e,n){return ke(t).map(function(t){return dn(t,yn(t,e),n)})}function jn(t,e){return ke(t).map(function(t){return t[bn]&&t[bn].unmount(e),t})}function _n(t){return K(t)||Le("Plugins must be of type function"),gn.has(t)&&Le("This plugin was already install"),gn.add(t),gn}function Mn(t){return gn.has(t)||Le("This plugin was never installed"),gn.delete(t),gn}function An(t){return function(e,n,r){var o=void 0===r?{}:r,i=o.slots,u=o.attributes;return vn(function(t){return t.mount(e)},function(t){return t({props:yn(e,n),slots:i,attributes:u})},un)(t)}}function wn(t){return K(t)||Le('riot.pure accepts only arguments of type "function"'),t[D]=!0,t}var xn="v4.8.7";exports.version=xn;var Sn={cssManager:qe,createComponent:un,defineComponent:an,globals:L};exports.__=Sn;
},{}],"Icca":[function(require,module,exports) {
"use strict";function e(e){return Array.isArray(e)?e:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&"number"==typeof e.length?Array.from(e):[e]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"dmLL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=t(require("bianco.dom-to-array"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t,r){return(0,e.default)("string"==typeof t?(r||document).querySelectorAll(t):t)}
},{"bianco.dom-to-array":"Icca"}],"AJjJ":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,o=arguments[3];!function(o,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("riot"),require("bianco.query")):"function"==typeof e&&e.amd?e(["exports","riot","bianco.query"],t):t((o=o||self).riotHotReload={},o.riot,o.$)}(this,function(e,o,t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;const{cssManager:n}=o.__,{DOM_COMPONENT_INSTANCE_PROPERTY:r}=o.__.globals;function s(e){const{name:s}=e;return s?t(`${s}, [is=${s}]`).map(t=>{const u=t[r];u.unmount(!0),n.remove(s);const a=o.component(e)(t,u.props);return a.update(u.state),a}):(console.warn("Anonymous components can not be reloaded"),[])}e.default=s,e.reload=s,Object.defineProperty(e,"__esModule",{value:!0})});
},{"riot":"d6tg","bianco.query":"dmLL"}],"kROT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=nodecg.Replicant("relay"),t=nodecg.Replicant("speakers","nodecg-discord-widget");function r(){return{state:{themeColor:"#bcbcff",speakers:[],enableDiscordBundle:!1},onMounted:function(){var r=this;e.on("change",function(e){r.state.themeColor=e.color,r.update()}),t&&t.on("change",function(e){r.state.speakers=e,r.state.enableDiscordBundle=!0,r.update()})}}}var s={css:'commentary .title-label,[is="commentary"] .title-label{ border-bottom-width: 2px; border-bottom-style: solid; padding: 0.5rem; } commentary .speaker,[is="commentary"] .speaker{ align-items: center; background-color: rgba(0, 0, 0, 0.8); margin: 0.25rem; margin-top: 0; padding: 0.5rem; border-radius: 0.5rem; }',exports:r,template:function(e,t,r,s){return e('<div class="columns is-multiline"><div class="column is-full has-text-centered"><h1 expr0="expr0" class="title is-4 title-label has-text-white">\r\n                解説・聞き手\r\n            </h1></div><div class="column is-flex" style="justify-content: space-around; flex-wrap: wrap;"><div expr1="expr1" class="is-flex speaker"></div><article expr4="expr4" class="message is-warning"></article></div></div>',[{redundantAttribute:"expr0",selector:"[expr0]",expressions:[{type:t.ATTRIBUTE,name:"style",evaluate:function(e){return["border-color: ",e.state.themeColor].join("")}}]},{type:r.EACH,getKey:null,condition:null,template:e('<div><figure class="image is-48x48"><img expr2="expr2" class="is-rounded"/></figure></div><div expr3="expr3" class="is-size-4 has-text-white" style="margin: 0 0.5rem;"> </div>',[{redundantAttribute:"expr2",selector:"[expr2]",expressions:[{type:t.ATTRIBUTE,name:"src",evaluate:function(e){return e.speaker.member.user.avatarURL}}]},{redundantAttribute:"expr3",selector:"[expr3]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:function(e){return e.speaker.member.displayName}}]}]),redundantAttribute:"expr1",selector:"[expr1]",itemName:"speaker",indexName:null,evaluate:function(e){return e.state.speakers}},{type:r.IF,evaluate:function(e){return!e.state.enableDiscordBundle},redundantAttribute:"expr4",selector:"[expr4]",template:e("<div class=\"message-body\">\r\n                    This graphic needs 'nodecg-discord-widget' bundle!!\r\n                </div>",[])}])},name:"commentary"};exports.default=s;
},{}],"IRah":[function(require,module,exports) {
"use strict";require("@riotjs/hot-reload");var e=o(require("riot")),r=t(require("./components/commentary/commentary.riot"));function t(e){return e&&e.__esModule?e:{default:e}}function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;var r=n();if(r&&r.has(e))return r.get(e);var t={};if(null!=e){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(t,u,i):t[u]=e[u]}}return t.default=e,r&&r.set(e,t),t}e.component(r.default)(document.getElementById("root")||document.body,{});
},{"@riotjs/hot-reload":"AJjJ","riot":"d6tg","./components/commentary/commentary.riot":"kROT"}]},{},["IRah"], null)
//# sourceMappingURL=commentary.5b71aa3a.js.map