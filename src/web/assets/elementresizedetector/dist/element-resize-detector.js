!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).elementResizeDetectorMaker=a()}}((function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,(function(a){return e(b[g][1][a]||a)}),k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";function d(){var d={},e=0,f=0,g=0;return{add:function(a,b){b||(b=a,a=0),a>f?f=a:a<g&&(g=a),d[a]||(d[a]=[]),d[a].push(b),e++},process:function(){for(var a=g;a<=f;a++)for(var b=d[a],c=0;c<b.length;c++){(0,b[c])()}},size:function(){return e}}}var e=a("./utils");b.exports=function(a){function c(){for(o=!0;n.size();){var a=n;n=d(),a.process()}o=!1}function g(){m=function(a){return function(a){return setTimeout(a,0)}(a)}(c)}var j=(a=a||{}).reporter,k=e.getOption(a,"async",!0),l=e.getOption(a,"auto",!0);l&&!k&&(j&&j.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),k=!0);var m,n=d(),o=!1;return{add:function(a,b){!o&&l&&k&&0===n.size()&&g(),n.add(a,b)},force:function(a){o||(void 0===a&&(a=k),m&&(function(a){clearTimeout(a)}(m),m=null),a?g():c())}}}},{"./utils":2}],2:[function(a,b,c){"use strict";(b.exports={}).getOption=function(a,b,c){var d=a[b];return null!=d||void 0===c?d:c}},{}],3:[function(a,b,c){"use strict";var d=b.exports={};d.isIE=function(a){return!(!function(){var a=navigator.userAgent.toLowerCase();return-1!==a.indexOf("msie")||-1!==a.indexOf("trident")||-1!==a.indexOf(" edge/")}()||a&&a!==function(){var a=3,b=document.createElement("div"),c=b.getElementsByTagName("i");do{b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e"}while(c[0]);return a>4?a:void 0}())},d.isLegacyOpera=function(){return!!window.opera}},{}],4:[function(a,b,c){"use strict";(b.exports={}).forEach=function(a,b){for(var c=0;c<a.length;c++){var d=b(a[c]);if(d)return d}}},{}],5:[function(a,b,c){"use strict";var d=a("../browser-detector");b.exports=function(a){function c(b){var c=a.important?" !important; ":"; ";return(b.join(c)+c).trim()}function f(a){return j(a).object}var h=(a=a||{}).reporter,i=a.batchProcessor,j=a.stateHandler.getState;if(!h)throw new Error("Missing required dependency: reporter.");return{makeDetectable:function(a,b,e){e||(e=b,b=a,a=null),(a=a||{}).debug,d.isIE(8)?e(b):function(b,e){function f(){function c(){if("static"===l.position){b.style.setProperty("position","relative",a.important?"important":"");var c=function(b,c,d,e){var f=d[e];"auto"!==f&&"0"!==function(a){return a.replace(/[^-\d\.]/g,"")}(f)&&(b.warn("An element that is positioned static has style."+e+"="+f+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+e+" will be set to 0. Element: ",c),c.style.setProperty(e,"0",a.important?"important":""))};c(h,b,l,"top"),c(h,b,l,"right"),c(h,b,l,"bottom"),c(h,b,l,"left")}}""!==l.position&&(c(),k=!0);var i=document.createElement("object");i.style.cssText=g,i.tabIndex=-1,i.type="text/html",i.setAttribute("aria-hidden","true"),i.onload=function(){k||c(),function a(b,c){if(!b.contentDocument){var d=j(b);return d.checkForObjectDocumentTimeoutId&&window.clearTimeout(d.checkForObjectDocumentTimeoutId),void(d.checkForObjectDocumentTimeoutId=setTimeout((function(){d.checkForObjectDocumentTimeoutId=0,a(b,c)}),100))}c(b.contentDocument)}(this,(function(a){e(b)}))},d.isIE()||(i.data="about:blank"),j(b)&&(b.appendChild(i),j(b).object=i,d.isIE()&&(i.data="about:blank"))}var g=c(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none","visibility: hidden"]),k=!1,l=window.getComputedStyle(b),m=b.offsetWidth,n=b.offsetHeight;j(b).startSize={width:m,height:n},i?i.add(f):f()}(b,e)},addListener:function(a,b){function c(){b(a)}if(d.isIE(8))j(a).object={proxy:c},a.attachEvent("onresize",c);else{var e=f(a);if(!e)throw new Error("Element is not detectable by this strategy.");e.contentDocument.defaultView.addEventListener("resize",c)}},uninstall:function(a){if(j(a)){var b=f(a);b&&(d.isIE(8)?a.detachEvent("onresize",b.proxy):a.removeChild(b),j(a).checkForObjectDocumentTimeoutId&&window.clearTimeout(j(a).checkForObjectDocumentTimeoutId),delete j(a).object)}}}}},{"../browser-detector":3}],6:[function(a,b,c){"use strict";var d=a("../collection-utils").forEach;b.exports=function(a){function b(a){!function(a,b,d){if(!a.getElementById(b)){var e=d+"_animation",f=d+"_animation_active",g="/* Created by the element-resize-detector library. */\n";g+="."+d+" > div::-webkit-scrollbar { "+c(["display: none"])+" }\n\n",g+="."+f+" { "+c(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+e,"animation-name: "+e])+" }\n",g+="@-webkit-keyframes "+e+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",function(c,d){d=d||function(b){a.head.appendChild(b)};var e=a.createElement("style");e.innerHTML=c,e.id=b,d(e)}(g+="@keyframes "+e+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")}}(a,s,t)}function c(b){var c=a.important?" !important; ":"; ";return(b.join(c)+c).trim()}function g(a,b,c){if(a.addEventListener)a.addEventListener(b,c);else{if(!a.attachEvent)return n.error("[scroll] Don't know how to add event listeners.");a.attachEvent("on"+b,c)}}function h(a,b,c){if(a.removeEventListener)a.removeEventListener(b,c);else{if(!a.detachEvent)return n.error("[scroll] Don't know how to remove event listeners.");a.detachEvent("on"+b,c)}}function i(a){return p(a).container.childNodes[0].childNodes[0].childNodes[0]}function j(a){return p(a).container.childNodes[0].childNodes[0].childNodes[1]}var n=(a=a||{}).reporter,o=a.batchProcessor,p=a.stateHandler.getState,q=(a.stateHandler.hasState,a.idHandler);if(!o)throw new Error("Missing required dependency: batchProcessor");if(!n)throw new Error("Missing required dependency: reporter.");var r=function(){var a=document.createElement("div");a.style.cssText=c(["position: absolute","width: 1000px","height: 1000px","visibility: hidden","margin: 0","padding: 0"]);var b=document.createElement("div");b.style.cssText=c(["position: absolute","width: 500px","height: 500px","overflow: scroll","visibility: none","top: -1500px","left: -1500px","visibility: hidden","margin: 0","padding: 0"]),b.appendChild(a),document.body.insertBefore(b,document.body.firstChild);var d=500-b.clientWidth,e=500-b.clientHeight;return document.body.removeChild(b),{width:d,height:e}}(),s="erd_scroll_detection_scrollbar_style",t="erd_scroll_detection_container";return b(window.document),{makeDetectable:function(a,b,e){function h(){if(a.debug){var c=Array.prototype.slice.call(arguments);if(c.unshift(q.get(b),"Scroll: "),n.log.apply)n.log.apply(null,c);else for(var d=0;d<c.length;d++)n.log(c[d])}}function k(a){var b=p(a).container.childNodes[0],c=window.getComputedStyle(b);return!c.width||-1===c.width.indexOf("px")}function l(){var a=window.getComputedStyle(b),c={};return c.position=a.position,c.width=b.offsetWidth,c.height=b.offsetHeight,c.top=a.top,c.right=a.right,c.bottom=a.bottom,c.left=a.left,c.widthCSS=a.width,c.heightCSS=a.height,c}function u(){if(h("storeStyle invoked."),p(b)){var a=l();p(b).style=a}else h("Aborting because element has been uninstalled")}function v(a,b,c){p(a).lastWidth=b,p(a).lastHeight=c}function x(){return 2*r.width+1}function y(){return 2*r.height+1}function z(a){return a+10+x()}function A(a){return a+10+y()}function D(a,b,c){var d=i(a),e=j(a),f=z(b),g=A(c),h=function(a){return 2*a+x()}(b),k=function(a){return 2*a+y()}(c);d.scrollLeft=f,d.scrollTop=g,e.scrollLeft=h,e.scrollTop=k}function E(){var a=p(b).container;if(!a){(a=document.createElement("div")).className=t,a.style.cssText=c(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),p(b).container=a,function(a){a.className+=" "+t+"_animation_active"}(a),b.appendChild(a);var d=function(){p(b).onRendered&&p(b).onRendered()};g(a,"animationstart",d),p(b).onAnimationStart=d}return a}function F(){function d(){p(b).onExpand&&p(b).onExpand()}function e(){p(b).onShrink&&p(b).onShrink()}if(h("Injecting elements"),p(b)){!function(){var c=p(b).style;if("static"===c.position){b.style.setProperty("position","relative",a.important?"important":"");var d=function(a,b,c,d){var e=c[d];"auto"!==e&&"0"!==function(a){return a.replace(/[^-\d\.]/g,"")}(e)&&(a.warn("An element that is positioned static has style."+d+"="+e+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+d+" will be set to 0. Element: ",b),b.style[d]=0)};d(n,b,c,"top"),d(n,b,c,"right"),d(n,b,c,"bottom"),d(n,b,c,"left")}}();var f=p(b).container;f||(f=E());var i=r.width,j=r.height,k=c(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),l=c(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(function(a,b,c,d){return["left: "+(a=a?a+"px":"0"),"top: "+(b=b?b+"px":"0"),"right: "+(d=d?d+"px":"0"),"bottom: "+(c=c?c+"px":"0")]}(-(1+i),-(1+j),-j,-i))),m=c(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),o=c(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),q=c(["position: absolute","left: 0","top: 0"]),s=c(["position: absolute","width: 200%","height: 200%"]),u=document.createElement("div"),v=document.createElement("div"),w=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),z=document.createElement("div");u.dir="ltr",u.style.cssText=k,u.className=t,v.className=t,v.style.cssText=l,w.style.cssText=m,x.style.cssText=q,y.style.cssText=o,z.style.cssText=s,w.appendChild(x),y.appendChild(z),v.appendChild(w),v.appendChild(y),u.appendChild(v),f.appendChild(u),g(w,"scroll",d),g(y,"scroll",e),p(b).onExpandScroll=d,p(b).onShrinkScroll=e}else h("Aborting because element has been uninstalled")}function G(){function c(b,c,d){var e=function(a){return i(a).childNodes[0]}(b),f=z(c),g=A(d);e.style.setProperty("width",f+"px",a.important?"important":""),e.style.setProperty("height",g+"px",a.important?"important":"")}function e(d){var e=b.offsetWidth,g=b.offsetHeight,i=e!==p(b).lastWidth||g!==p(b).lastHeight;h("Storing current size",e,g),v(b,e,g),o.add(0,(function(){if(i){if(!p(b))return void h("Aborting because element has been uninstalled");if(!f())return void h("Aborting because element container has not been initialized");if(a.debug){var d=b.offsetWidth,j=b.offsetHeight;d===e&&j===g||n.warn(q.get(b),"Scroll: Size changed before updating detector elements.")}c(b,e,g)}})),o.add(1,(function(){return p(b)?f()?void D(b,e,g):void h("Aborting because element container has not been initialized"):void h("Aborting because element has been uninstalled")})),i&&d&&o.add(2,(function(){return p(b)?f()?void d():void h("Aborting because element container has not been initialized"):void h("Aborting because element has been uninstalled")}))}function f(){return!!p(b).container}function g(){h("notifyListenersIfNeeded invoked");var a=p(b);return void 0===p(b).lastNotifiedWidth&&a.lastWidth===a.startSize.width&&a.lastHeight===a.startSize.height?h("Not notifying: Size is the same as the start size, and there has been no notification yet."):a.lastWidth===a.lastNotifiedWidth&&a.lastHeight===a.lastNotifiedHeight?h("Not notifying: Size already notified"):(h("Current size not notified, notifying..."),a.lastNotifiedWidth=a.lastWidth,a.lastNotifiedHeight=a.lastHeight,void d(p(b).listeners,(function(a){a(b)})))}function m(){h("Scroll detected."),k(b)?h("Scroll event fired while unrendered. Ignoring..."):e(g)}if(h("registerListenersAndPositionElements invoked."),p(b)){p(b).onRendered=function(){if(h("startanimation triggered."),k(b))h("Ignoring since element is still unrendered...");else{h("Element rendered.");var a=i(b),c=j(b);0!==a.scrollLeft&&0!==a.scrollTop&&0!==c.scrollLeft&&0!==c.scrollTop||(h("Scrollbars out of sync. Updating detector elements..."),e(g))}},p(b).onExpand=m,p(b).onShrink=m;var r=p(b).style;c(b,r.width,r.height)}else h("Aborting because element has been uninstalled")}function H(){if(h("finalizeDomMutation invoked."),p(b)){var a=p(b).style;v(b,a.width,a.height),D(b,a.width,a.height)}else h("Aborting because element has been uninstalled")}function I(){e(b)}function J(){h("Installing..."),p(b).listeners=[],function(){var a=l();p(b).startSize={width:a.width,height:a.height},h("Element start size",p(b).startSize)}(),o.add(0,u),o.add(1,F),o.add(2,G),o.add(3,H),o.add(4,I)}e||(e=b,b=a,a=null),a=a||{},h("Making detectable..."),function(a){return!function(a){var b=a.getRootNode&&a.getRootNode().contains(a);return a===a.ownerDocument.body||a.ownerDocument.body.contains(a)||b}(a)||null===window.getComputedStyle(a)}(b)?(h("Element is detached"),E(),h("Waiting until element is attached..."),p(b).onRendered=function(){h("Element is now attached"),J()}):J()},addListener:function(a,b){if(!p(a).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");p(a).listeners.push(b)},uninstall:function(a){var b=p(a);b&&(b.onExpandScroll&&h(i(a),"scroll",b.onExpandScroll),b.onShrinkScroll&&h(j(a),"scroll",b.onShrinkScroll),b.onAnimationStart&&h(b.container,"animationstart",b.onAnimationStart),b.container&&a.removeChild(b.container))},initDocument:b}}},{"../collection-utils":4}],7:[function(a,b,c){"use strict";function d(a){return Array.isArray(a)||void 0!==a.length}function e(a){if(Array.isArray(a))return a;var b=[];return h(a,(function(a){b.push(a)})),b}function f(a){return a&&1===a.nodeType}function g(a,b,c){var d=a[b];return null!=d||void 0===c?d:c}var h=a("./collection-utils").forEach,i=a("./element-utils"),j=a("./listener-handler"),k=a("./id-generator"),l=a("./id-handler"),m=a("./reporter"),n=a("./browser-detector"),o=a("batch-processor"),p=a("./state-handler"),q=a("./detection-strategy/object.js"),r=a("./detection-strategy/scroll.js");b.exports=function(a){var t;if((a=a||{}).idHandler)t={get:function(b){return a.idHandler.get(b,!0)},set:a.idHandler.set};else{var u=k(),v=l({idGenerator:u,stateHandler:p});t=v}var w=a.reporter;w||(w=m(!1===w));var x=g(a,"batchProcessor",o({reporter:w})),y={};y.callOnAdd=!!g(a,"callOnAdd",!0),y.debug=!!g(a,"debug",!1);var z,A=j(t),B=i({stateHandler:p}),C=g(a,"strategy","object"),D=g(a,"important",!1),E={reporter:w,batchProcessor:x,stateHandler:p,idHandler:t,important:D};if("scroll"===C&&(n.isLegacyOpera()?(w.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),C="object"):n.isIE(9)&&(w.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),C="object")),"scroll"===C)z=r(E);else{if("object"!==C)throw new Error("Invalid strategy name: "+C);z=q(E)}var F={};return{listenTo:function(a,b,c){function i(a){var b=A.get(a);h(b,(function(b){b(a)}))}function j(a,b,c){A.add(b,c),a&&c(b)}if(c||(c=b,b=a,a={}),!b)throw new Error("At least one element required.");if(!c)throw new Error("Listener required.");if(f(b))b=[b];else{if(!d(b))return w.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");b=e(b)}var k=0,l=g(a,"callOnAdd",y.callOnAdd),m=g(a,"onReady",(function(){})),n=g(a,"debug",y.debug);h(b,(function(a){p.getState(a)||(p.initState(a),t.set(a));var d=t.get(a);if(n&&w.log("Attaching listener to element",d,a),!B.isDetectable(a))return n&&w.log(d,"Not detectable."),B.isBusy(a)?(n&&w.log(d,"System busy making it detectable"),j(l,a,c),F[d]=F[d]||[],void F[d].push((function(){++k===b.length&&m()}))):(n&&w.log(d,"Making detectable..."),B.markBusy(a,!0),z.makeDetectable({debug:n,important:D},a,(function(a){if(n&&w.log(d,"onElementDetectable"),p.getState(a)){B.markAsDetectable(a),B.markBusy(a,!1),z.addListener(a,i),j(l,a,c);var e=p.getState(a);if(e&&e.startSize){var f=a.offsetWidth,g=a.offsetHeight;e.startSize.width===f&&e.startSize.height===g||i(a)}F[d]&&h(F[d],(function(a){a()}))}else n&&w.log(d,"Element uninstalled before being detectable.");delete F[d],++k===b.length&&m()})));n&&w.log(d,"Already detecable, adding listener."),j(l,a,c),k++})),k===b.length&&m()},removeListener:A.removeListener,removeAllListeners:A.removeAllListeners,uninstall:function(a){if(!a)return w.error("At least one element is required.");if(f(a))a=[a];else{if(!d(a))return w.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");a=e(a)}h(a,(function(a){A.removeAllListeners(a),z.uninstall(a),p.cleanState(a)}))},initDocument:function(a){z.initDocument&&z.initDocument(a)}}}},{"./browser-detector":3,"./collection-utils":4,"./detection-strategy/object.js":5,"./detection-strategy/scroll.js":6,"./element-utils":8,"./id-generator":9,"./id-handler":10,"./listener-handler":11,"./reporter":12,"./state-handler":13,"batch-processor":1}],8:[function(a,b,c){"use strict";b.exports=function(a){var f=a.stateHandler.getState;return{isDetectable:function(a){var b=f(a);return b&&!!b.isDetectable},markAsDetectable:function(a){f(a).isDetectable=!0},isBusy:function(a){return!!f(a).busy},markBusy:function(a,b){f(a).busy=!!b}}}},{}],9:[function(a,b,c){"use strict";b.exports=function(){var b=1;return{generate:function(){return b++}}}},{}],10:[function(a,b,c){"use strict";b.exports=function(a){var d=a.idGenerator,e=a.stateHandler.getState;return{get:function(a){var b=e(a);return b&&void 0!==b.id?b.id:null},set:function(a){var b=e(a);if(!b)throw new Error("setId required the element to have a resize detection state.");var c=d.generate();return b.id=c,c}}}},{}],11:[function(a,b,c){"use strict";b.exports=function(a){function b(b){var c=a.get(b);return void 0===c?[]:f[c]||[]}var f={};return{get:b,add:function(b,c){var d=a.get(b);f[d]||(f[d]=[]),f[d].push(c)},removeListener:function(a,c){for(var d=b(a),e=0,f=d.length;e<f;++e)if(d[e]===c){d.splice(e,1);break}},removeAllListeners:function(a){var c=b(a);c&&(c.length=0)}}}},{}],12:[function(a,b,c){"use strict";b.exports=function(a){function b(){}var c={log:b,warn:b,error:b};if(!a&&window.console){var d=function(a,b){a[b]=function(){var a=console[b];if(a.apply)a.apply(console,arguments);else for(var c=0;c<arguments.length;c++)a(arguments[c])}};d(c,"log"),d(c,"warn"),d(c,"error")}return c}},{}],13:[function(a,b,c){"use strict";function e(a){return a[g]}var g="_erd";b.exports={initState:function(a){return a[g]={},e(a)},getState:e,cleanState:function(a){delete a[g]}}},{}]},{},[7])(7)}));