(function(window){var svgSprite='<svg><symbol id="icon-gantan_c" viewBox="0 0 1024 1024"><path d="M512 992c-265.088 0-480-214.912-480-480s214.912-480 480-480c265.088 0 480 214.912 480 480 0 265.088-214.912 480-480 480zM512 96c-229.76 0-416 186.24-416 416s186.24 416 416 416c229.76 0 416-186.24 416-416 0-229.76-186.24-416-416-416zM512 800c-35.36 0-64-28.64-64-64s28.64-64 64-64c35.36 0 64 28.64 64 64 0 35.36-28.64 64-64 64zM512 608c-17.664 0-32-28.64-32-64 0 0-32-288-32-288 0-35.36 28.64-64 64-64 35.36 0 64 28.64 64 64 0 0-32 288-32 288 0 35.36-14.336 64-32 64z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)