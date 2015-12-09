 /**
     * jQuery One Page Nav Plugin
     * http://github.com/davist11/jQuery-One-Page-Nav
     *
     * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
     * Dual licensed under the MIT and GPL licenses.
     * Uses the same license as jQuery, see:
     * http://jquery.org/license
     *
     * @version 2.2.0
     *
     * Example usage:
     * $('#nav').onePageNav({
     *   currentClass: 'current',
     *   changeHash: false,
     *   scrollSpeed: 750
     * });
     */

;(function(e,t,n,r){var i=function(r,i){this.elem=r;this.$elem=e(r);this.options=i;this.metadata=this.$elem.data("plugin-options");this.$nav=this.$elem.find("a");this.$win=e(t);this.sections={};this.didScroll=false;this.$doc=e(n);this.docHeight=this.$doc.height()};i.prototype={defaults:{currentClass:"current",changeHash:false,easing:"swing",filter:"",scrollSpeed:750,scrollOffset:0,scrollThreshold:.5,begin:false,end:false,scrollChange:false},init:function(){var t=this;t.config=e.extend({},t.defaults,t.options,t.metadata);if(t.config.filter!==""){t.$nav=t.$nav.filter(t.config.filter)}t.$nav.on("click.onePageNav",e.proxy(t.handleClick,t));t.getPositions();t.bindInterval();t.$win.on("resize.onePageNav",e.proxy(t.getPositions,t));return this},adjustNav:function(e,t){e.$elem.find("."+e.config.currentClass).removeClass(e.config.currentClass);t.addClass(e.config.currentClass)},bindInterval:function(){var e=this;var t;e.$win.on("scroll.onePageNav",function(){e.didScroll=true});e.t=setInterval(function(){t=e.$doc.height();if(e.didScroll){e.didScroll=false;e.scrollChange()}if(t!==e.docHeight){e.docHeight=t;e.getPositions()}},250)},getHash:function(e){return e.attr("href").split("#")[1]},getPositions:function(){var t=this;var n;var r;var i;t.$nav.each(function(){n=t.getHash(e(this));i=e("#"+n);if(i.length){r=i.offset().top;t.sections[n]=Math.round(r)-t.config.scrollOffset}})},getSection:function(e){var t=null;var n=Math.round(this.$win.height()*this.config.scrollThreshold);for(var r in this.sections){if(this.sections[r]-n<e){t=r}}return t},handleClick:function(n){var r=this;var i=e(n.currentTarget);var s=i.parent();var o="#"+r.getHash(i);if(!s.hasClass(r.config.currentClass)){if(r.config.begin){r.config.begin()}r.adjustNav(r,s);r.unbindInterval()}e.scrollTo(o,r.config.scrollSpeed,{axis:"y",easing:r.config.easing,offset:{top:-r.config.scrollOffset},onAfter:function(){if(r.config.changeHash){t.location.hash=o}r.bindInterval();if(r.config.end){r.config.end()}}});n.preventDefault()},scrollChange:function(){var e=this.$win.scrollTop();var t=this.getSection(e);var n;if(t!==null){n=this.$elem.find('a[href$="#'+t+'"]').parent();if(!n.hasClass(this.config.currentClass)){this.adjustNav(this,n);if(this.config.scrollChange){this.config.scrollChange(n)}}}},unbindInterval:function(){clearInterval(this.t);this.$win.unbind("scroll.onePageNav")}};i.defaults=i.prototype.defaults;e.fn.onePageNav=function(e){return this.each(function(){(new i(this,e)).init()})}})(jQuery,window,document)



    /**!
     * jQuery.scrollTo
     * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
     * Licensed under MIT
     * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
     * @projectDescription Easy element scrolling using jQuery.
     * @author Ariel Flesler
     * @version 1.4.13
     */


;(function(e){"use strict";e(["jquery"],function(e){function n(t){return e.isFunction(t)||typeof t=="object"?t:{top:t,left:t}}var t=e.scrollTo=function(t,n,r){return e(window).scrollTo(t,n,r)};t.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1,limit:true};t.window=function(t){return e(window)._scrollable()};e.fn._scrollable=function(){return this.map(function(){var t=this,n=!t.nodeName||e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;if(!n)return t;var r=(t.contentWindow||t).document||t.ownerDocument||t;return/webkit/i.test(navigator.userAgent)||r.compatMode=="BackCompat"?r.body:r.documentElement})};e.fn.scrollTo=function(r,i,s){if(typeof i=="object"){s=i;i=0}if(typeof s=="function")s={onAfter:s};if(r=="max")r=9e9;s=e.extend({},t.defaults,s);i=i||s.duration;s.queue=s.queue&&s.axis.length>1;if(s.queue)i/=2;s.offset=n(s.offset);s.over=n(s.over);return this._scrollable().each(function(){function p(e){u.animate(l,i,s.easing,e&&function(){e.call(this,a,s)})}if(r==null)return;var o=this,u=e(o),a=r,f,l={},c=u.is("html,body");switch(typeof a){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(a)){a=n(a);break}a=c?e(a):e(a,this);if(!a.length)return;case"object":if(a.is||a.style)f=(a=e(a)).offset()}var h=e.isFunction(s.offset)&&s.offset(o,a)||s.offset;e.each(s.axis.split(""),function(e,n){var r=n=="x"?"Left":"Top",i=r.toLowerCase(),d="scroll"+r,v=o[d],m=t.max(o,n);if(f){l[d]=f[i]+(c?0:v-u.offset()[i]);if(s.margin){l[d]-=parseInt(a.css("margin"+r))||0;l[d]-=parseInt(a.css("border"+r+"Width"))||0}l[d]+=h[i]||0;if(s.over[i])l[d]+=a[n=="x"?"width":"height"]()*s.over[i]}else{var g=a[i];l[d]=g.slice&&g.slice(-1)=="%"?parseFloat(g)/100*m:g}if(s.limit&&/^\d+$/.test(l[d]))l[d]=l[d]<=0?0:Math.min(l[d],m);if(!e&&s.queue){if(v!=l[d])p(s.onAfterFirst);delete l[d]}});p(s.onAfter)}).end()};t.max=function(t,n){var r=n=="x"?"Width":"Height",i="scroll"+r;if(!e(t).is("html,body"))return t[i]-e(t)[r.toLowerCase()]();var s="client"+r,o=t.ownerDocument.documentElement,u=t.ownerDocument.body;return Math.max(o[i],u[i])-Math.min(o[s],u[s])};return t})})(typeof define==="function"&&define.amd?define:function(e,t){if(typeof module!=="undefined"&&module.exports){module.exports=t(require("jquery"))}else{t(jQuery)}})



/** ===========================================================
 * jquery.autofix_anything.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Fix position of anything on your website automatically
 * with one js call
 *
 * https://github.com/peachananr/autofix_anything
 *
 * ========================================================== */
!function(e){var t={customOffset:false,manual:false,onlyInContainer:true};e.fn.autofix_anything=function(n){var r=e.extend({},t,n),i=e(this),s=i.position(),o=r.customOffset,u=i.offset();i.addClass("autofix_sb");e.fn.manualfix=function(){var t=e(this),n=t.offset();if(t.hasClass("fixed")){t.removeClass("fixed")}else{t.addClass("fixed").css({top:0,left:n.left,right:"auto",bottom:"auto"})}};fixAll=function(t,n,r,i){if(n.customOffset==false)o=t.parent().offset().top;if(e(document).scrollTop()>o&&e(document).scrollTop()<=t.parent().height()+(o-e(window).height())){t.removeClass("bottom").addClass("fixed").css({top:0,left:i.left,right:"auto",bottom:"auto"})}else{if(e(document).scrollTop()>o){if(n.onlyInContainer==true){if(e(document).scrollTop()>t.parent().height()-e(window).height()){t.addClass("bottom fixed").removeAttr("style").css({left:r.left})}else{t.removeClass("bottom fixed").removeAttr("style")}}}else{t.removeClass("bottom fixed").removeAttr("style")}}};if(r.manual==false){e(window).scroll(function(){fixAll(i,r,s,u)})}}}(window.jQuery)


