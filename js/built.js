/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
;// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// loads up livereload for dev
var loadReload = function() {

    var lr = document.createElement("script");
        lr.type = "text/javascript";
        lr.src = "//localhost:35729/livereload.js";

    if (jQuery('#global_footer')) {
        jQuery('#global_footer').append(lr);
        console.log('livereload is locked and loaded!!');
    }
}
;jQuery(document).ready(function($){

	var localDev = true;

	if(localDev == true) {
		loadReload();
	}
	
	//initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
	    // Optional parameters
	    direction: 'horizontal',
	    loop: true,
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    calculateHeight: true,
	    autoplay: 4000,
	    //autoplayDisableOnInteraction: false
    });
    
    var windowOrientation;
	
	$(window).on('orientationchange', function(e) {
        if ( orientation == 0 ) {
	    	windowOrientation = "portrait";
	    }
	    else if ( orientation == 90 ) {
	    	windowOrientation = "landscape";
	    }
	    else if ( orientation == -90 ) {
	     	windowOrientation = "landscape";
	    }
	    else if ( orientation == 180 ) {
	     	windowOrientation = "portrait";
	    }
    });

	$('.mobile_menu_icon, .mobile_menu li a').click(function() {
		openCloseMenu();
	});
	
	function openCloseMenu() {
		if(!$('.mobile_menu').hasClass('menu_open')) {
			
				$('.site_wrap').animate({
					left: '320',
				}, 500, function(){
					$('.mobile_menu').addClass('menu_open');
					$('.site_wrap').addClass('stop_scroll');
				});
				$('.mobile_menu').animate({
					left: '0',
				}, 500);
			

		} else {
			
			
				$('.site_wrap').animate({
				left: '0',
				}, 500, function(){
					$('.mobile_menu').removeClass('menu_open');
					$('.site_wrap').removeClass('stop_scroll');
				});
				$('.mobile_menu').animate({
					left: '-320',
				}, 500);
			
		}
	}

	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth >= 1023) {
			$('.site_wrap').animate({
				left: '0',
			}, 500, function(){
				$('.mobile_menu').removeClass('menu_open');
			});
			$('.mobile_menu').animate({
				left: '-320',
			}, 500);
		}
	});

	var section = $('.home .accordion_section'),
		menu = $('.menu');

	$(window).on('scroll', function() {
		var cur_pos = $(this).scrollTop();
		section.each(function() {
			var top = $(this).offset().top,
				bottom = top + $(this).outerHeight();

			if ((cur_pos) >= top && cur_pos <= bottom) {
				menu.find('a').removeClass('active');
				section.removeClass('active_scroll');
				$(this).addClass('active_scroll');
				menu.find('a[href="/#learn-more"]').addClass('active');
			}
		});
	});

	$('#country').change(function() {
		$(this).removeClass('active');
		if ($(this).val() === "US") {
			$(this).addClass('active');
		} else if ($(this).val()=== "CA") {
			$(this).addClass('active');
		}
	});

	$('.cta_button').click(function(e) {
		var target = $(this.href);
		e.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 2000);
	});

	/*$('.menu .why, .mobile_menu .why,').click(function(e) {
		if (window.location.pathname == "/") {
			//e.preventDefault();
			//var target = $('#learn-more').offset().top + "px";
			//console.log(target);
			$('html, body').animate({
				scrollTop: $('#learn-more').offset().top
			}, 0);
		}
	});*/

	$(window).load(function() {
		if($('#message').length) {
			$('html, body').animate({ scrollTop: $('#message').offset().top}, 0);
		}
	});
});

function nextInDOM(_selector, _subject) {
    var next = getNext(_subject);
    while(next.length != 0) {
        var found = searchFor(_selector, next);
        if(found != null) return found;
        next = getNext(next);
    }
    return null;
}
function getNext(_subject) {
    if(_subject.next().length > 0) return _subject.next();
    return getNext(_subject.parent());
}
function searchFor(_selector, _subject) {
    if(_subject.is(_selector)) return _subject;
    else {
        var found = null;
        _subject.children().each(function() {
            found = searchFor(_selector, $(this));
            if(found != null) return false;
        });
        return found;
    }
    return null; // will/should never get here
}

function validateForm() {
	$('.error').removeClass('active');
	var value = "";
	var firstName = document.forms["Kilzsubscription"]["firstName"].value;
	var lastName = document.forms["Kilzsubscription"]["lastName"].value;
	var zipPostal = document.forms["Kilzsubscription"]["zipPostal"].value;
	var email = document.forms["Kilzsubscription"]["emailAddress"].value;
	var country = document.forms["Kilzsubscription"]["country"].value;

	if (!email.match('^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$')) {
		$('.error.email').addClass('active');
		value = false;
	}

	if (!firstName.match('^[a-zA-Z][\sa-zA-Z]*[a-zA-Z]$')) {
		$('.error.first_name').addClass('active');
		value = false;
	}

	if (!lastName.match('^[a-zA-Z][\sa-zA-Z]*[a-zA-Z]$')) {
		$('.error.last_name').addClass('active');
		value = false;
	}

	if (email == null || email == "") {
		$('.error.email').addClass('active');
		value = false;
	}

	if (firstName == null || firstName == "") {
		$('.error.first_name').addClass('active');
		value = false;
	}

	if (lastName == null || lastName == "") {
		$('.error.last_name').addClass('active');
		value = false;
	}

	if (zipPostal == null || zipPostal == "") {
		$('.error.zip_postal').addClass('active');
		value = false;
	} else {
		if (country === "US") {

			if (!zipPostal.match('^[0-9]{5}([\\s-]{1}[0-9]{4})?$')) {
				$('.error.zip_postal').addClass('active');
				value = false;
			}
		} else if (country === "CA") {

			if (!zipPostal.match('^([ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVWXYZ])\\ {0,1}(\\d[ABCEGHJKLMNPRSTVWXYZ]\\d)$')) {
				$('.error.zip_postal').addClass('active');
				value = false;
			}
		}
	}

	if (country == null || country == "") {
		$('.error.country').addClass('active');
		value = false;
	}

	return value;
}

;jQuery(document).ready(function($) {
	
	if($('.kilz_pro').length || $('div.home').length) {
		var currentProSection = '';
		var mobilePixels = 768;
		var tabletPixels = 1023;
		var proSection;
		var currentButton;
		var currentValue;
		
		$accordion = $('#accordion');
		$accordionContent = $('#accordion').children('.accordion_content');
	
		$('.section_title').on('click', function(e) {
			e.preventDefault();
			
			currentButton = $(this).parent();
	
			proSection = $(this).attr('id');
			currentValue = $(this).attr('data-column');
			if(proSection == currentProSection) {
				$accordion.slideUp(600, function() {
					$(this).removeClass('open first second third fourth');
				});
				currentProSection = '';
			} else {
	
				if(currentProSection != '') {
					var currentNumber = 0;
					$('#accordion').prevAll().each(function(e) {
						if($(this).hasClass('image_wrap')) {
							currentNumber++;
						}
					});
					var columns = 4;
					if($(window).width() <= mobilePixels) {
						if($(window).width() == mobilePixels) {
							if(window.innerHeight > window.innerWidth){
								columns = 2;
							} else {
								columns = 3;
							}
						} else {
							columns = 2;
						}
					} else if($(window).width() <= tabletPixels) {
						if(window.innerHeight > window.innerWidth){
							columns = 2;
						} else {
							columns = 3;
						}
					}
					var currentRow = parseInt(currentNumber/columns)-1;
					if(currentNumber > columns && currentNumber%columns != 0) {
						currentRow++;
					}
					
					currentNumber = 0;
					$(this).parent().prevAll().each(function(e) {
						if($(this).attr('id') != 'accordion' && $(this).hasClass('image_wrap')) {
							currentNumber++;
						}
					});
					var newRow = parseInt(currentNumber/columns);
					
					if(currentRow != newRow) {
						currentProSection = '';
						currentButton = $(this).parent();
						$accordion.slideUp(600, function() {
							moveSection(currentValue, currentButton);
							
							$accordion.removeClass('open first second third fourth');
							$accordion.addClass(currentValue);
							
							var host = location.protocol + '//' + location.host + '/';
							var ajaxUrl;
							if($('.kilz_pro').length){
								ajaxUrl = host+"pro-sections/"+proSection+".php";
							} else {
								ajaxUrl = host+"home-sections/"+proSection+".php";
							}
							update = true;
							ajaxInSection(ajaxUrl, true);
						});
					} else {
						$accordionContent.animate({
							opacity: 0,
						}, 600, function() {
							$accordion.removeClass('open first second third fourth');
							$accordion.addClass(currentValue);
							
							var host = location.protocol + '//' + location.host + '/';
							var ajaxUrl;
							if($('.kilz_pro').length){
								ajaxUrl = host+"pro-sections/"+proSection+".php";
							} else {
								ajaxUrl = host+"home-sections/"+proSection+".php";
							}
							ajaxInSection(ajaxUrl, true);
						});
					}
				} else {
					$accordion.addClass(currentValue);
					$accordion.children('.accordion_content').empty();
	
					moveSection(currentValue, $(this).parent());
					
					var host = location.protocol + '//' + location.host + '/';
					var ajaxUrl;
					if($('.kilz_pro').length){
						ajaxUrl = host+"pro-sections/"+proSection+".php";
					} else {
						ajaxUrl = host+"home-sections/"+proSection+".php";
					}
					ajaxInSection(ajaxUrl, true);
				}
			}
		});
		
		if(initialSection != null) {
			$('#accordion').css('display', 'block');
			var value = $('#'+initialSection).attr('data-column');
			var button = $('#'+initialSection).parent();
			
			currentProSection = initialSection;
			currentValue = value;
			currentButton = button;
			moveSection(value, button, $('#accordion'));
			$('#accordion').removeClass('open first second third fourth');
			$('#accordion').addClass(value);
			
			$('html, body').animate({
				scrollTop: $('#accordion').offset().top-100
			}, 100);
		}
		
		function moveSection(currentValue, searchElement) {
			if($(window).width() <= mobilePixels) {
				if($(window).width() == mobilePixels) {
					if(window.innerHeight > window.innerWidth){
						if(currentValue == 'second' || searchElement.hasClass('end_column')) {
							$accordion.insertAfter(searchElement);
						} else {
							$accordion.insertAfter(nextInDOM('.end_column', searchElement));
						}
					} else {
						if(currentValue == 'third' || searchElement.hasClass('end_column')) {
							$accordion.insertAfter(searchElement);
						} else {
							$accordion.insertAfter(nextInDOM('.end_column', searchElement));
						}
					}
				} else {
					if(currentValue == 'second' || currentValue == 'fourth' || searchElement.hasClass('end_column')) {
						$accordion.insertAfter(searchElement);
					} else {
						$accordion.insertAfter(nextInDOM('.end_column', searchElement));
					}
				}
			} else if($(window).width() <= tabletPixels) {
				if(window.innerHeight > window.innerWidth){
					if(currentValue == 'second' || searchElement.hasClass('end_column')) {
						$accordion.insertAfter(searchElement);
					} else {
						$accordion.insertAfter(nextInDOM('.end_column', searchElement));
					}
				} else {
					if(currentValue == 'third' || searchElement.hasClass('end_column')) {
						$accordion.insertAfter(searchElement);
					} else {
						$accordion.insertAfter(nextInDOM('.end_column', searchElement));
					}
				}
			} else {
				if(currentValue == 'fourth' || searchElement.hasClass('end_column')) {
					$accordion.insertAfter(searchElement);
				} else {
					$accordion.insertAfter(nextInDOM('.end_column', searchElement));
				}
			}
		}
		
		function ajaxInSection(ajaxUrl, update) {
			ajaxUrl = ajaxUrl+'?skip=1';
			$.ajax({
				type		: "GET",
				contentType	: "application/x-javascript; charset:utf-8",
				url			: ajaxUrl,
				success		: function(data) {
					if(currentProSection != '') {
						currentProSection = proSection;
						$accordionContent.html(data);
						$accordionContent.animate({
							opacity: 1.0,
						}, 600, function(){
							$(this).addClass('open');
							
							var hasAnimated = false;
							$('html, body').animate({
								scrollTop: $(this).offset().top-100
							}, 600, function() {
								if(!hasAnimated && update) {
									hasAnimated = true;
									pushHistoryState();
								}
							});						
						});
					} else {
						currentProSection = proSection;
						$accordionContent.html(data);
						$accordion.slideDown(600, function(){
							$(this).addClass('open');
								
							var hasAnimated = false;
							$('html, body').animate({
								scrollTop: $(this).offset().top-100
							}, 600, function() {
								if(!hasAnimated && update) {
									hasAnimated = true;
									pushHistoryState();
								}
							});					
						});
					}
				},
				error		: function(jqXHR, textStatus, errorThrown) {
					alert(jqXHR + " :: " + textStatus + " :: " + errorThrown);
				}
			});
		}
		
		function pushHistoryState() {
			var url;
			if($('.kilz_pro').length) {
				url = '/kilz-pro/'+currentProSection;
			} else {
				url = '/'+currentProSection;
			}
			history.pushState({section: currentProSection}, '', url);
			
		}
	
		$('#accordion').on('click', '.details_close', function(e) {
			e.preventDefault();
			$accordion.slideUp(600, function() {
				$(this).removeClass('open first second third fourth');
				currentProSection = '';
			});
		});
		
		function rearrangeProSections(columns, type) {
			$('.image_wrap').removeClass('end_column');
			var counter = 0;
			var productColumns = 4;
			if(type == 'mobile') {
				productColumns = 2;
			} else if(type == 'tablet') {
				productColumns = 3;
			}
			
			$('.image_wrap').each(function(index) {
				counter++;
				
				$(this).removeClass('end_column');
				
				if(counter == 1) {
					$(this).children('.section_title').attr('data-column', 'first');
				} else if(counter == 2) {
					$(this).children('.section_title').attr('data-column', 'second');
				} else if(counter == 3) {
					$(this).children('.section_title').attr('data-column', 'third');
				} else if(counter == 4) {
					$(this).children('.section_title').attr('data-column', 'fourth');
				}
				
				if(counter == productColumns) {
					counter = 0;
					$(this).addClass('end_column');
				}
				
				if((index+1)%columns == 0 || $(this).is(":last-of-type")) {
					$(this).addClass('end_column');
				}
			});
			
			if(currentProSection != '') {
				var sectionColumn = $('#'+currentProSection).attr('data-column');
				$accordion.removeClass('first second third fourth');
				$accordion.addClass(sectionColumn);
				if($('#'+currentProSection).parent().hasClass('end_column')) {
					$accordion.insertAfter($('#'+currentProSection).parent());
				} else {
					$accordion.insertAfter(nextInDOM('.end_column', $('#'+currentProSection).parent()));
				}
			}
			sizeType = type;
		}
		
		var sizeType = true;
		if($(window).width() <= mobilePixels) {
			if($(window).width() == mobilePixels) {
				if(window.innerHeight > window.innerWidth){
					rearrangeProSections(2, 'mobile');
				} else {
					rearrangeProSections(3, 'tablet');
				}
			} else {
				rearrangeProSections(2, 'mobile');
			}
		} else if($(window).width() <= tabletPixels) {
			if(window.innerHeight > window.innerWidth){
				rearrangeProSections(2, 'mobile');
			} else {
				rearrangeProSections(3, 'tablet');
			}
		}
		
		function sectionResize() {
			if($(window).width() <= mobilePixels) {
				//if(sizeType != 'mobile') {
					if($(window).width() == mobilePixels) {
						if(window.innerHeight > window.innerWidth){
							rearrangeProSections(2, 'mobile');
						} else {
							rearrangeProSections(3, 'tablet');
						}
					} else {
						rearrangeProSections(2, 'mobile');
					}
				//}
			} else if($(window).width() <= tabletPixels) {
				//if(sizeType != 'tablet') {
					if(window.innerHeight > window.innerWidth){
						rearrangeProSections(2, 'mobile');
					} else {
						rearrangeProSections(3, 'tablet');
					}
				//}
			} else {
				if(sizeType != 'desktop') {
					rearrangeProSections(4, 'desktop');
				}
			}
		}
		
		$(window).on("orientationchange",function(){
			sectionResize();	
		});
		
		$(window).resize(function() {
			sectionResize();
		});
		
		$(window).bind('popstate', function(event) {
			var section = event.originalEvent.state.section;
			var value = $('#'+section).attr('data-column');
			var button = $('#'+section).parent();
			moveSection(value, button, $('#accordion'));
			$('#accordion').removeClass('open first second third fourth');
			$('#accordion').addClass(value);
			
			var host = location.protocol + '//' + location.host + '/';
			var ajaxUrl;
			if($('.kilz_pro').length){
				ajaxUrl = host+"pro-sections/"+section+".php";
			} else {
				ajaxUrl = host+"home-sections/"+section+".php";
			}
			ajaxInSection(ajaxUrl, false);
		});
	}
});;jQuery(document).ready(function($) {
	
	if($('section.products').length) {
		var currentProduct = '';
		var mobilePixels = 768;
		var tabletPixels = 1023;
		var product;
		var filter;
		var productCopyString;
		var initialLoad = true;
		var currentButton;
		var currentValue;
		
		var productCategory = 'primers';
		
		$accordion = $('#accordion');
		$accordionContent = $('#accordion').children('.accordion_content');
		
		var $data = $('.accordion_section');
		var $productData = $data.clone();
		
		var primerOrders = new Array(
			new Array('kilz-premium', 'kilz-2', 'kilz-2-lvoc', 'kilz-max', 'kilz-klear', 'kilz-complete', 'kilz-complete-low-voc', 'kilz-complete-aerosol'),
			new Array('kilz-adhesion', 'kilz-premium', 'kilz-complete', 'kilz-complete-low-voc', 'kilz-complete-aerosol', 'kilz-2', 'kilz-2-lvoc', 'kilz-klear'),
			new Array('kilz-complete', 'kilz-complete-low-voc', 'kilz-complete-aerosol', 'kilz-original', 'kilz-original-low-voc', 'kilz-original-aerosol', 'kilz-max', 'kilz-max-clear', 'kilz-odorless', 'kilz-odorless-aerosol')
		);
		
		// Tabs
		$('.tab_wrapper a').click(function(e) {
			e.preventDefault();
			
			if(!$(this).hasClass('active')) {
				filter = null;
				$('.tab_wrapper a').removeClass('active');
				$(this).addClass('active');
			}
			
			tabClick($(this), false);
		});
		
		
		function tabClick($tab, initial) {
			if(initialLoad) {
				$productData.find('.image_wrap').each(function(e) {
					$(this).css('display', 'block');
				});
				initialLoad = false;
			}
			
			productCategory = $tab.attr('href').replace('#', '');
			if(productCategory == 'specialty') {
				$('.nav_icons a').removeClass('active');
				$('.nav_icons').css('display', 'none');
			} else {
				$('.nav_icons').css('display', 'block');
			}
			var $filter;
			
			if(filter && productCategory != 'specialty') {
				$filter = $productData.find('.details, .'+productCategory+'.'+filter);
			} else {
				$filter = $productData.find('.details, .'+productCategory);
			}
			
			currentProduct = '';
			
			$data.quicksand($filter, {
				useScaling: false,
				duration: (initial) ? 0 : 700,
				easing: 'swing',
				adjustWidth: false,
				adjustHeight: false,
				atomic: true
			}, function() { 
				filterMargins(); 
				
				if(productCategory == 'specialty') {
					$('.hero > p').html('Use KILZ&reg; specialty paints for your unique projects.');
				} else {
					if($('.nav_icons .active').length && !initial) {
						productCopyString = $('.nav_icons .active').attr('data-copy_string');
						var counter = 0;
						$('.products .accordion_section .image_wrap').each(function(e) {
							counter++;
						});
						var categoryString = productCategory.charAt(0).toUpperCase() + productCategory.slice(1);
						$('.hero > p').text(counter+' '+categoryString+' excel at '+productCopyString);
					} else {
						$('.hero > p').text('');
					}
				}
			});
		}
		tabClick($('.tab_wrapper .active'), true);
		
	
		// Icon Filtering
		$('.nav_icons a').click(function(e) {
			e.preventDefault();
			
			if(productCategory != 'specialty') {
				var $filter;
				
				if(initialLoad) {
					$productData.find('.image_wrap').each(function(e) {
						$(this).css('display', 'block');
					});
					initialLoad = false;
				}
				
				var order = null;
				var $sortedData = null;
				if(!$(this).hasClass('active')) {
					$('.nav_icons .column a').removeClass('active');
					$(this).addClass('active');
				
					filter = $(this).attr('href').replace('#', '');			
					productCopyString = $(this).attr('data-copy_string');
					$filter = $productData.find('.details, .'+productCategory+'.'+filter);
					
					$sortedData = $filter.sorted({
				        by: function(v) {
					    	if($(v).attr('data-'+filter)) {
								return parseInt($(v).attr('data-'+filter));
				          	} else {
					        	return parseInt($(v).attr('data-id'))+20;  
				          	}
				        }
				    });
				} else {
					$('.nav_icons .column a').removeClass('active');
					filter = null;
					productCopyString = null;
					$filter = $productData.find('.details, .'+productCategory);
				}
				currentProduct = '';
				
				$filteredData = $filter;
				if($sortedData != null) {
					$filteredData = $sortedData;
				}
	
				$data.quicksand($filteredData, {
					useScaling: false,
					duration: 700,
					easing: 'swing',
					adjustWidth: false,
					adjustHeight: false,
					atomic: true
				}, function() { 
					filterMargins(); 
					
					if(filter != null) {
						$('.products .accordion_section .image_wrap.'+productCategory+':first-child').addClass('recommended');
					}
					
					if(productCopyString != null) {
						var counter = 0;
						$('.products .accordion_section .image_wrap').each(function(e) {
							counter++;
						});
						var categoryString = productCategory.charAt(0).toUpperCase() + productCategory.slice(1);
						$('.hero > p').text(counter+' '+categoryString+' excel at '+productCopyString);
					} else {
						$('.hero > p').text('');
					}
				});
			}
		});
		if($('.nav_icons .active').length) {
			$('.nav_icons .active').removeClass('active').trigger('click');
		}
		
		
		// Fix margins for filtering
		function filterMargins() {
			var counter = 0;
			var productColumns = 4;
			var marginLeft = "1.8%";
			if($(window).width() <= mobilePixels) {
				if($(window).width() == mobilePixels) {
					if(window.innerHeight > window.innerWidth){
						productColumns = 2;
						marginLeft = "1.6%";
					} else {
						productColumns = 3;
						marginLeft = "1.6%";
					}
				} else {
					productColumns = 2;
					marginLeft = "1.6%";
				}
			} else if($(window).width() <= tabletPixels) {
				if(window.innerHeight > window.innerWidth){
					productColumns = 2;
					marginLeft = "1.6%";
				} else {
					productColumns = 3;
					marginLeft = "1.6%";
				}
			}
			var length = $('.products .accordion_section .image_wrap.'+productCategory).length/2;
			$('.products .accordion_section .image_wrap.'+productCategory).each(function(index) {
				counter++;
				$(this).css('flex-shrink', '0');
				$(this).removeClass('end_column');
				
				if(counter == 1) {
					$(this).children('.section_title').attr('data-column', 'first');
				} else if(counter == 2) {
					$(this).children('.section_title').attr('data-column', 'second');
				} else if(counter == 3) {
					$(this).children('.section_title').attr('data-column', 'third');
				} else if(counter == 4) {
					$(this).children('.section_title').attr('data-column', 'fourth');
				}
				
				if(counter == productColumns) {
					$(this).css('margin-left', 0);
					$(this).css('margin-right', 0);
					counter = 0;
					$(this).addClass('end_column');
				} else if(counter == 1) {
					$(this).css('margin-left', marginLeft);
					$(this).css('margin-right', '1.4%');
				} else {
					$(this).css('margin-left', 0);
					$(this).css('margin-right', '1.4%');
				}
				if($(this).is(":last-of-type") || index == length-1) {
					$(this).addClass('end_column');
				}
			});
		}
		
		
		
		
		// Product Selection
		$('.accordion_section').on('click', '.section_title', function(e) {
			e.preventDefault();
			
			$accordion = $('#accordion');
			$accordionContent = $('#accordion').children('.accordion_content');
			
			currentButton = $(this).parent();
	
			product = $(this).attr('id');
			currentValue = $(this).attr('data-column');
			
			if(product == currentProduct) {
				$('#accordion').slideUp(600, function() {
					$(this).removeClass('open first second third fourth');
				});
				currentProduct = '';
			} else {
				if(currentProduct != '') {
					var currentNumber = 0;
					$('#accordion').prevAll().each(function(e) {
						currentNumber++;
					});
					var columns = 4;
					if($(window).width() <= mobilePixels) {
						if($(window).width() == mobilePixels) {
							if(window.innerHeight > window.innerWidth){
								columns = 2;
							} else {
								columns = 3;
							}
						} else {
							columns = 2;
						}
					} else if($(window).width() <= tabletPixels) {
						if(window.innerHeight > window.innerWidth){
							columns = 2;
						} else {
							columns = 3;
						}
					}
					var currentRow = parseInt(currentNumber/columns)-1;
					if(currentNumber > columns && currentNumber%columns != 0) {
						currentRow++;
					}
					
					currentNumber = 0;
					$(this).parent().prevAll().each(function(e) {
						if($(this).attr('id') != 'accordion') {
							currentNumber++;
						}
					});
					var newRow = parseInt(currentNumber/columns);

					if(currentRow != newRow) {
						currentProduct = '';
						currentButton = $(this).parent();
						$('#accordion').slideUp(600, function() {
							moveSection(currentValue, currentButton, $('#accordion'));
							$('#accordion').removeClass('open first second third fourth');
							$('#accordion').addClass(currentValue);
							
							var host = location.protocol + '//' + location.host + '/';
							var ajaxUrl = host+"products/"+product+".php";
							ajaxInSection(ajaxUrl, true);
						});
					} else {
						$accordionContent.animate({
						opacity: 0,
						}, 600, function() {
							$('#accordion').removeClass('open first second third fourth');
							$('#accordion').addClass(currentValue);
							
							var host = location.protocol + '//' + location.host + '/';
							var ajaxUrl = host+"products/"+product+".php";
							ajaxInSection(ajaxUrl, true);
						});
					}
					
					
					
				} else {
					$('#accordion').addClass(currentValue);
					$('#accordion').children('.accordion_content').empty();
	
					moveSection(currentValue, $(this).parent(), $('#accordion'));
					
					var host = location.protocol + '//' + location.host + '/';
					var ajaxUrl = host+"products/"+product+".php";
					ajaxInSection(ajaxUrl, true);
				}
			}
		});
		
		if(initialProduct != null) {
			$('#accordion').css('display', 'block');
			var value = $('#'+initialProduct).attr('data-column');
			var button = $('#'+initialProduct).parent();
			
			currentProduct = initialProduct;
			currentValue = value;
			currentButton = button;
			moveSection(value, button, $('#accordion'));
			$('#accordion').removeClass('open first second third fourth');
			$('#accordion').addClass(value);
			
			$('html, body').animate({
				scrollTop: $('#accordion').children('.accordion_content').offset().top-100
			}, 100);
		}
		
		
		
		// Move accordion for mobile, filtering
		function moveSection(currentValue, searchElement, accordion) {
			if($(window).width() <= mobilePixels) {
				if($(window).width() == mobilePixels) {
					if(window.innerHeight > window.innerWidth){
						if(currentValue == 'second' || searchElement.hasClass('end_column')) {
							$accordion.insertAfter(searchElement);
						} else {
							$accordion.insertAfter(nextInDOM('.end_column', searchElement));
						}
					} else {
						if(currentValue == 'third' || searchElement.hasClass('end_column')) {
							$accordion.insertAfter(searchElement);
						} else {
							$accordion.insertAfter(nextInDOM('.end_column', searchElement));
						}
					}
				} else {
					if(currentValue == 'second' || currentValue == 'fourth' || searchElement.hasClass('end_column')) {
						$accordion.insertAfter(searchElement);
					} else {
						$accordion.insertAfter(nextInDOM('.end_column', searchElement));
					}
				}
			} else if($(window).width() <= tabletPixels) {
				if(window.innerHeight > window.innerWidth){
					if(currentValue == 'second' || searchElement.hasClass('end_column')) {
						$accordion.insertAfter(searchElement);
					} else {
						$accordion.insertAfter(nextInDOM('.end_column', searchElement));
					}
				} else {
					if(currentValue == 'third' || searchElement.hasClass('end_column')) {
						$accordion.insertAfter(searchElement);
					} else {
						$accordion.insertAfter(nextInDOM('.end_column', searchElement));
					}
				}
			} else {
				if(currentValue == 'fourth' || searchElement.hasClass('end_column')) {
					$accordion.insertAfter(searchElement);
				} else {
					$accordion.insertAfter(nextInDOM('.end_column', searchElement));
				}
			}
		}
		
		
		// Ajax function
		function ajaxInSection(ajaxUrl, update) {
			ajaxUrl = ajaxUrl+'?skip=1';
			$.ajax({
				type		: "GET",
				contentType	: "application/x-javascript; charset:utf-8",
				url			: ajaxUrl,
				success		: function(data) {
					if(currentProduct != '') {
						currentProduct = product;
						$accordion = $('#accordion');
						$accordionContent = $('#accordion').children('.accordion_content');
						
						$accordionContent.html(data);
						$accordionContent.animate({
							opacity: 1.0,
						}, 600, function(){
							$(this).addClass('open');
							
							var hasAnimated = false;
							$('html, body').animate({
								scrollTop: $(this).offset().top-100
							}, 600, function() {
								if(!hasAnimated && update) {
									hasAnimated = true;
									pushHistoryState();
								}
							});						
						});
					} else {
						currentProduct = product;
						
						$accordion = $('#accordion');
						$accordionContent = $('#accordion').children('.accordion_content');
						
						$accordionContent.html(data);
						$accordion.slideDown(600, function(){
							$(this).addClass('open');	
							
							var hasAnimated = false;
							$('html, body').animate({
								scrollTop: $(this).offset().top-100
							}, 600, function() {
								if(!hasAnimated && update) {
									hasAnimated = true;
									pushHistoryState();
								}
							});					
						});
					}
				},
				error		: function(jqXHR, textStatus, errorThrown) {
					alert(jqXHR + " :: " + textStatus + " :: " + errorThrown);
				}
			});
		}
	
		function pushHistoryState() {
			//console.log(currentProduct);
			if(productCategory == 'primers') {
				history.pushState({product: currentProduct}, '', '/products/primer/'+currentProduct);
			} else {
				history.pushState({product: currentProduct}, '', '/products/'+productCategory+'/'+currentProduct);
			}
		}
	
		// Close Accordion
		$('.accordion_section').on('click', '.details_close', function(e) {
			e.preventDefault();
			$accordion = $('#accordion');
			
			$accordion.slideUp(600, function() {
				$(this).removeClass('open first second third fourth');
				currentProduct = '';
			});
		});
		
		
		// Rearrange products and accordion for switch to Desktop/Mobile
		function rearrangeProducts(columns, type) {
			$accordion = $('#accordion');
			$accordionContent = $('#accordion').children('.accordion_content');
			
			$('.image_wrap').removeClass('end_column');
			var counter = 0;
			var productColumns = 4;
			var marginLeft = "1.8%";
			if(type == 'mobile') {
				productColumns = 2;
				marginLeft = "1.6%";
			} else if(type == 'tablet') {
				productColumns = 3;
				marginLeft = "1.6%";
			}
			
			var length = $('.accordion_section .image_wrap').length;
			$('.accordion_section .image_wrap').each(function(index) {
				counter++;
				
				$(this).removeClass('end_column');
				
				if(counter == 1) {
					$(this).children('.section_title').attr('data-column', 'first');
				} else if(counter == 2) {
					$(this).children('.section_title').attr('data-column', 'second');
				} else if(counter == 3) {
					$(this).children('.section_title').attr('data-column', 'third');
				} else if(counter == 4) {
					$(this).children('.section_title').attr('data-column', 'fourth');
				}
				
				if(counter == productColumns) {
					$(this).css('margin-left', 0);
					$(this).css('margin-right', 0);
					counter = 0;
					$(this).addClass('end_column');
				} else if(counter == 1) {
					$(this).css('margin-left', marginLeft);
					$(this).css('margin-right', '1.4%');
				} else {
					$(this).css('margin-left', 0);
					$(this).css('margin-right', '1.4%');
				}
				
				if($(this).is(":last-of-type") || index == length-1) {
					$(this).addClass('end_column');
				}
			});
			
			if(currentProduct != '') {
				var productColumn = $('#'+currentProduct).attr('data-column');
				$accordion.removeClass('first second third fourth');
				$accordion.addClass(productColumn);
				if($('#'+currentProduct).parent().hasClass('end_column')) {
					$accordion.insertAfter($('#'+currentProduct).parent());
				} else {
					$accordion.insertAfter(nextInDOM('.end_column', $('#'+currentProduct).parent()));
				}
			}
			sizeType = type;
		}
		
		var sizeType = true;
		if($(window).width() <= mobilePixels) {
			if($(window).width() == mobilePixels) {
				if(window.innerHeight > window.innerWidth){
					rearrangeProducts(2, 'mobile');
				} else {
					rearrangeProducts(3, 'tablet');
				}
			} else {
				rearrangeProducts(2, 'mobile');
			}
		} else if($(window).width() <= tabletPixels) {
			if(window.innerHeight > window.innerWidth){
				rearrangeProducts(2, 'mobile');
			} else {
				rearrangeProducts(3, 'tablet');
			}
		}
		
		function productResize() {
			if($(window).width() <= mobilePixels) {
				//if(sizeType != 'mobile') {
					if($(window).width() == mobilePixels) {
						if(window.innerHeight > window.innerWidth){
							rearrangeProducts(2, 'mobile');
						} else {
							rearrangeProducts(3, 'tablet');
						}
					} else {
						rearrangeProducts(2, 'mobile');
					}
				//}
			} else if($(window).width() <= tabletPixels) {
				//if(sizeType != 'tablet') {
					if(window.innerHeight > window.innerWidth){
						rearrangeProducts(2, 'mobile');
					} else {
						rearrangeProducts(3, 'tablet');
					}
				//}
			} else {
				if(sizeType != 'desktop') {
					rearrangeProducts(4, 'desktop');
				}
			}
		}
		
		$(window).on("orientationchange",function(){
			console.log('orientation changed');
			productResize();	
		});
		
		$(window).resize(function() {
			productResize();
		});
		
		// Tabs
		$('.accordion_section').on('click', '.tabs_section .tabs a', function(e) {
			e.preventDefault();
			
			if($(this).parent().hasClass('active')) {
				$('.tabs li').removeClass('active');
				$('.mobile_tab').removeClass('active');
				$('.tab_content').css('display', 'none');
			} else {
				var tab = $(this).attr('href');
				selectTab(tab);
				
				$('.tab_content').css('display', 'none');
				$(tab).css('display', 'block');
			}
		});
		
		$('.accordion_section').on('click', '.tabs_section .mobile_tab a', function(e) {
			e.preventDefault();
			
			if($(this).parent().hasClass('active')) {
				$('.tabs li').removeClass('active');
				$('.mobile_tab').removeClass('active');
				$('.tab_content').slideUp(600);
			} else {
				var tab = $(this).attr('href');
				selectTab(tab);
				
				$('.tab_content').slideUp(600);
				$(tab).slideDown(600);
			}
		});
		
		function selectTab(tab) {
			$('.tabs li').removeClass('active');
			$('.mobile_tab').removeClass('active');
			$('.tabs li').each(function(e) {
				if($(this).children('a').attr('href') == tab) {
					$(this).addClass('active');
				}
			});
			$('.mobile_tab').each(function(e) {
				if($(this).children('a').attr('href') == tab) {
					$(this).addClass('active');
				}
			});
		}
		
		$(window).bind('popstate', function(event) {
			if(event.originalEvent.state.product !== null) {
				var product = event.originalEvent.state.product;
				
				var value = $('#'+product).attr('data-column');
				var button = $('#'+product).parent();
				
				currentProduct = product;
				currentValue = value;
				currentButton = button;
				moveSection(value, button, $('#accordion'));
				$('#accordion').removeClass('open first second third fourth');
				$('#accordion').addClass(value);
				
				var host = location.protocol + '//' + location.host + '/';
				var ajaxUrl = host+"products/"+product+".php";
				ajaxInSection(ajaxUrl, false);
			}
		});
	}
});

(function($) {
  $.fn.sorted = function(customOptions) {
    var options = {
      reversed: false,
      by: function(a) { return a.text(); }
    };
    $.extend(options, customOptions);
    $data = $(this);
    arr = $data.get();
    arr.sort(function(a, b) {
      var valA = options.by($(a));
      var valB = options.by($(b));
      if (options.reversed) {
        return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
      } else {		
        return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
      }
    });
    return $(arr);
  };
})(jQuery);