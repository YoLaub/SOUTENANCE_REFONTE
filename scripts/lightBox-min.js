!function(a,b){"function"==typeof define&&define.amd?define([],b):"object"==typeof module&&module.exports?module.exports=b():a.SimpleLightbox=b()}(this,function(){function f(j){for(var k=1;k<arguments.length;k++){var l=arguments[k];if(l){for(var h in l){l.hasOwnProperty(h)&&(j[h]=l[h])}}}return j}function b(h,i){h&&i&&(h.className+=" "+i)}function c(h,i){h&&i&&(h.className=h.className.replace(new RegExp("(\\s|^)"+i+"(\\s|$)")," ").trim())}function g(h){var i=document.createElement("div");return i.innerHTML=h.trim(),i.childNodes[0]}function a(h,i){return(h.matches||h.matchesSelector||h.msMatchesSelector).call(h,i)}function d(e){this.init.apply(this,arguments)}return d.defaults={elementClass:"",elementLoadingClass:"slbLoading",htmlClass:"slbActive",closeBtnClass:"",nextBtnClass:"",prevBtnClass:"",loadingTextClass:"",closeBtnCaption:"Close",nextBtnCaption:"Next",prevBtnCaption:"Previous",loadingCaption:"Loading...",bindToItems:!0,closeOnOverlayClick:!0,closeOnEscapeKey:!0,nextOnImageClick:!0,showCaptions:!0,captionAttribute:"title",urlAttribute:"href",startAt:0,loadingTimeout:100,appendTarget:"body",beforeSetContent:null,beforeClose:null,afterClose:null,beforeDestroy:null,afterDestroy:null,videoRegex:new RegExp(/youtube.com|vimeo.com/)},f(d.prototype,{init:function(j){j=this.options=f({},d.defaults,j);var h,e=this;j.$items&&(h=j.$items.get()),j.elements&&(h=[].slice.call("string"==typeof j.elements?document.querySelectorAll(j.elements):j.elements)),this.eventRegistry={lightbox:[],thumbnails:[]},this.items=[],this.captions=[],h&&h.forEach(function(i,k){e.items.push(i.getAttribute(j.urlAttribute)),e.captions.push(i.getAttribute(j.captionAttribute)),j.bindToItems&&e.addEvent(i,"click",function(l){l.preventDefault(),e.showPosition(k)},"thumbnails")}),j.items&&(this.items=j.items),j.captions&&(this.captions=j.captions)},addEvent:function(j,k,l,h){return this.eventRegistry[h||"lightbox"].push({element:j,eventName:k,callback:l}),j.addEventListener(k,l),this},removeEvents:function(e){return this.eventRegistry[e].forEach(function(h){h.element.removeEventListener(h.eventName,h.callback)}),this.eventRegistry[e]=[],this},next:function(){return this.showPosition(this.currentPosition+1)},prev:function(){return this.showPosition(this.currentPosition-1)},normalizePosition:function(e){return e>=this.items.length?e=0:e<0&&(e=this.items.length-1),e},showPosition:function(h){var i=this.normalizePosition(h);return void 0!==this.currentPosition&&(this.direction=i>this.currentPosition?"next":"prev"),this.currentPosition=i,this.setupLightboxHtml().prepareItem(this.currentPosition,this.setContent).show()},loading:function(h){var i=this,j=this.options;h?this.loadingTimeout=setTimeout(function(){b(i.$el,j.elementLoadingClass),i.$content.innerHTML='<p class="slbLoadingText '+j.loadingTextClass+'">'+j.loadingCaption+"</p>",i.show()},j.loadingTimeout):(c(this.$el,j.elementLoadingClass),clearTimeout(this.loadingTimeout))},prepareItem:function(j,l){var m=this,h=this.items[j];if(this.loading(!0),this.options.videoRegex.test(h)){l.call(m,g('<div class="slbIframeCont"><iframe class="slbIframe" frameborder="0" allowfullscreen src="'+h+'"></iframe></div>'))}else{var k=g('<div class="slbImageWrap"><img class="slbImage" src="'+h+'" /></div>');this.$currentImage=k.querySelector(".slbImage"),this.options.showCaptions&&this.captions[j]&&k.appendChild(g('<div class="slbCaption">'+this.captions[j]+"</div>")),this.loadImage(h,function(){m.setImageDimensions(),l.call(m,k),m.loadImage(m.items[m.normalizePosition(m.currentPosition+1)])})}return this},loadImage:function(h,i){if(!this.options.videoRegex.test(h)){var j=new Image;i&&(j.onload=i),j.src=h}},setupLightboxHtml:function(){var e=this.options;return this.$el||(this.$el=g('<div class="slbElement '+e.elementClass+'"><div class="slbOverlay"></div><div class="slbWrapOuter"><div class="slbWrap"><div class="slbContentOuter"><div class="slbContent"></div><button type="button" title="'+e.closeBtnCaption+'" class="slbCloseBtn '+e.closeBtnClass+'">Ã—</button>'+(1<this.items.length?'<div class="slbArrows"><button type="button" title="'+e.prevBtnCaption+'" class="prev slbArrow'+e.prevBtnClass+'">'+e.prevBtnCaption+'</button><button type="button" title="'+e.nextBtnCaption+'" class="next slbArrow'+e.nextBtnClass+'">'+e.nextBtnCaption+"</button></div>":"")+"</div></div></div></div>"),this.$content=this.$el.querySelector(".slbContent")),this.$content.innerHTML="",this},show:function(){return this.modalInDom||(document.querySelector(this.options.appendTarget).appendChild(this.$el),b(document.documentElement,this.options.htmlClass),this.setupLightboxEvents(),this.modalInDom=!0),this},setContent:function(h){var i="string"==typeof h?g(h):h;return this.loading(!1),this.setupLightboxHtml(),c(this.$content,"slbDirectionNext"),c(this.$content,"slbDirectionPrev"),this.direction&&b(this.$content,"next"===this.direction?"slbDirectionNext":"slbDirectionPrev"),this.options.beforeSetContent&&this.options.beforeSetContent(i,this),this.$content.appendChild(i),this},setImageDimensions:function(){this.$currentImage&&(this.$currentImage.style.maxHeight=("innerHeight" in window?window.innerHeight:document.documentElement.offsetHeight)+"px")},setupLightboxEvents:function(){var e=this;return this.eventRegistry.lightbox.length||this.addEvent(this.$el,"click",function(h){var i=h.target;a(i,".slbCloseBtn")||e.options.closeOnOverlayClick&&a(i,".slbWrap")?e.close():a(i,".slbArrow")?a(i,".next")?e.next():e.prev():e.options.nextOnImageClick&&1<e.items.length&&a(i,".slbImage")&&e.next()}).addEvent(document,"keyup",function(h){e.options.closeOnEscapeKey&&27===h.keyCode&&e.close(),1<e.items.length&&((39===h.keyCode||68===h.keyCode)&&e.next(),(37===h.keyCode||65===h.keyCode)&&e.prev())}).addEvent(window,"resize",function(){e.setImageDimensions()}),this},close:function(){this.modalInDom&&(this.runHook("beforeClose"),this.removeEvents("lightbox"),this.$el&&this.$el.parentNode.removeChild(this.$el),c(document.documentElement,this.options.htmlClass),this.modalInDom=!1,this.runHook("afterClose")),this.direction=void 0,this.currentPosition=this.options.startAt},destroy:function(){this.close(),this.runHook("beforeDestroy"),this.removeEvents("thumbnails"),this.runHook("afterDestroy")},runHook:function(e){this.options[e]&&this.options[e](this)}}),d.open=function(h){var i=new d(h);return h.content?i.setContent(h.content).show():i.showPosition(i.options.startAt)},d.registerAsJqueryPlugin=function(e){e.fn.simpleLightbox=function(h){var i,j=this;return this.each(function(){e.data(this,"simpleLightbox")||(i=i||new d(e.extend({},h,{$items:j})),e.data(this,"simpleLightbox",i))})},e.SimpleLightbox=d},"undefined"!=typeof window&&window.jQuery&&d.registerAsJqueryPlugin(window.jQuery),d});