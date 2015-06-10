/* C:\Projects\cobalt\Source\Curse.Ascalon.Web\Content\js\Libs\htmldiff.js */
(function(){window.HTMLDiff=(function(){function a(c,d){this.a=c;this.b=d}a.prototype.diff=function(){var b;b=this.diff_list(this.tokenize(this.a),this.tokenize(this.b));this.update(this.a,b.filter(function(c){var d,e;d=c[0],e=c[1];return d!=="+"}));return this.update(this.b,b.filter(function(c){var d,e;d=c[0],e=c[1];return d!=="-"}))};a.prototype.parseTextNodes=function(d,b){var c;c=function(m){if(m==null){return false}var j,k,l,o,e,f,g,h,i;if(m.nodeType===3){if(!/^\s*$/.test(m.nodeValue)){return b(m)}}else{i=(function(){var n,p,q,r;q=m.childNodes;r=[];for(n=0,p=q.length;n<p;n++){j=q[n];r.push(j)}return r})();for(e=0,g=i.length;e<g;e++){o=i[e];l=c(o);if(l){for(f=0,h=l.length;f<h;f++){k=l[f];m.insertBefore(k,o)}m.removeChild(o)}}return false}};return c(d)};a.prototype.tokenize=function(b){var c;c=[];this.parseTextNodes(b,function(d){c=c.concat(d.nodeValue.split(" "));return false});return c};a.prototype.update=function(d,b){var c;c=0;return this.parseTextNodes(d,function(l){var h,i,j,k,m,n,o,p,q,e,f,g;o=c;h=c+(l.nodeValue.split(" ")).length;c=h;m=(function(){var r,s,t,u,v;t=b.slice(o,h);v=[];for(r=0,s=t.length;r<s;r++){u=t[r],p=u[0],q=u[1];if(p==="="){v.push(q)}else{v.push("<ins>"+q+"</ins>")}}return v})();m=m.join(" ").replace(/<\/ins> <ins>/g," ").replace(/<ins> /g," <ins>").replace(/[ ]<\/ins>/g,"</ins> ").replace(/<ins><\/ins>/g,"");k=[];j=document.createTextNode("");k.push(j);g=m.split(/(<\/?ins>)/);for(e=0,f=g.length;e<f;e++){n=g[e];switch(n){case"<ins>":i=document.createElement("ins");k.push(i);j=document.createTextNode("");i.appendChild(j);break;case"</ins>":j=document.createTextNode("");k.push(j);break;default:j.nodeValue=n}}return k.filter(function(r){return !(r.nodeType===3&&r.nodeValue==="")})})};a.prototype.diff_list=function(l,h){var m,n,o,p,q,r,s,t,u,v,b,c,d,e,f,g;q={};for(m=0,c=l.length;m<c;m++){v=l[m];if(!(v in q)){q[v]=[]}q[v].push(m)}p=(function(){var i,j;j=[];for(m=0,i=l.length;0<=i?m<i:m>i;0<=i?m++:m--){j.push(0)}return j})();t=s=r=0;for(n=0,d=h.length;n<d;n++){v=h[n];u=(function(){var i,j;j=[];for(m=0,i=l.length;0<=i?m<i:m>i;0<=i?m++:m--){j.push(0)}return j})();g=(f=q[v])!=null?f:[];for(b=0,e=g.length;b<e;b++){o=g[b];u[o]=(o&&p[o-1]?1:0)+1;if(u[o]>r){r=u[o];t=o-r+1;s=n-r+1}}p=u}if(r===0){return[].concat((function(){var i,j,k;k=[];for(i=0,j=l.length;i<j;i++){v=l[i];k.push(["-",v])}return k})(),(function(){var i,j,k;k=[];for(i=0,j=h.length;i<j;i++){v=h[i];k.push(["+",v])}return k})())}else{return[].concat(this.diff_list(l.slice(0,t),h.slice(0,s)),(function(){var i,j,k,w;k=h.slice(s,(s+r));w=[];for(i=0,j=k.length;i<j;i++){v=k[i];w.push(["=",v])}return w})(),this.diff_list(l.slice(t+r),h.slice(s+r)))}};return a})()}).call(this);jQuery(document).ready(function(){jQuery.each(jQuery(".change"),function(b,e){var d=jQuery(e).find(".old .db-tooltip");var c=jQuery(e).find(".new .db-tooltip");if((d.length)&&(c.length)){var a=new HTMLDiff(d[0],c[0]);a.diff()}})});

/* C:\Projects\cobalt\Source\Curse.Ascalon.Web\Content\js\Libs\jquery.dbTooltip.js */
(function(g){var d={},b,n,m,f=g.browser.msie&&/MSIE\s(5\.5|6\.)/.test(navigator.userAgent),o=true,h=0,i=0;g.dbTooltip={blocked:false,defaults:{delay:200,fade:false,showURL:false,track:true,extraClass:"",top:15,left:15,AdvancedTooltips:true,id:"db-tooltip-container"},block:function(){g.dbTooltip.blocked=!g.dbTooltip.blocked},change_html:function(s){d.body.html(s)},};g.fn.extend({dbTooltip:function(s){if(typeof(WowDbSettings)!="undefined"){g.each(WowDbSettings,function(t,u){g.dbTooltip.defaults[t]=u})}s=g.extend({},g.dbTooltip.defaults,s);a(s);return this.each(function(){g.data(this,"dbTooltip",s);this.tOpacity=d.parent.css("opacity");this.tooltipText=this.title;g(this).removeAttr("title");this.alt=""}).mouseover(j).mouseout(e).click(e)},hideWhenEmpty:function(){return this.each(function(){g(this)[g(this).html()?"show":"hide"]()})},url:function(){return this.attr("href")||this.attr("src")}});function a(s){if(d.parent){return}d.parent=g('<div id="'+s.id+'"><h3></h3><div class="body"></div><div class="url"></div></div>').appendTo(document.body).hide();if(g.fn.bgiframe){d.parent.bgiframe()}d.title=g("h3",d.parent);d.body=g("div.body",d.parent);d.url=g("div.url",d.parent)}function k(s){return g.data(s,"dbTooltip")}function c(s){if(k(this).delay){m=setTimeout(l,k(this).delay)}else{l()}o=!!k(this).track;g(document.body).bind("mousemove",p);p(s)}function j(C,w){if(g.dbTooltip.blocked||(this==b&&!w)||(!this.tooltipText&&!k(this).bodyHandler)){return}b=this;n=this.tooltipText;if(k(this).bodyHandler){d.title.hide();var u=k(this).bodyHandler.call(this);var z=null;if(!u){u=k(this).loadingText;if(k(this).wowTooltip){var B=k(this).wowTooltip.call(this);WP_Tooltips[B.Type+"-"+B.Id+"-"+B.OldBuild+"-"+B.NewBuild]=k(this).loadingText;var s="tooltip";if(B.OldBuild&&B.NewBuild){s="dual-tooltip/"+B.OldBuild+"/"+B.NewBuild}var t=B.HostName;var A=t+"/"+B.Type+"/"+B.Id+"/"+s+"?x";if((k(this).AdvancedTooltips||B.SimpleOrAdvanced=="advanced")&&B.SimpleOrAdvanced!="simple"){A+="&advanced=1"}if(t==location.protocol+"//"+location.host){g.get(A,{callback:"WP_OnTooltipLoaded"},function(D){WP_OnTooltipLoaded(D)})}else{z=document.createElement("script");z.type="text/javascript";z.src=A+"&callback=WP_OnTooltipLoaded"}}}if(u.nodeType||u.jquery){d.body.empty().append(u)}else{d.body.html(u)}d.body.show();l();if(z!=null){g("head").append(z)}}else{if(k(this).showBody){var y=n.split(k(this).showBody);d.title.html(y.shift()).show();d.body.empty();for(var v=0,x;(x=y[v]);v++){if(v>0){d.body.append("<br/>")}d.body.append(x)}d.body.hideWhenEmpty()}else{d.title.html(n).show();d.body.hide()}}if(k(this).showURL&&g(this).url()){d.url.html(g(this).url().replace("http://","")).show()}else{d.url.hide()}d.parent.addClass(k(this).extraClass);c.apply(this,arguments)}function l(){m=null;if((!f||!g.fn.bgiframe)&&k(b)&&k(b).fade){if(d.parent.is(":animated")){d.parent.stop().show().fadeTo(k(b).fade,b.tOpacity)}else{d.parent.is(":visible")?d.parent.fadeTo(k(b).fade,b.tOpacity):d.parent.fadeIn(k(b).fade)}}else{d.parent.show()}p()}function p(t){if(t){if(t.pageX==h&&t.pageY==i){return}if(!t.pageX){t.pageX=h}else{h=t.pageX}if(!t.pageY){t.pageY=i}else{i=t.pageY}}if(g.dbTooltip.blocked){return}if(t&&t.target.tagName=="OPTION"){return}if(!o&&d.parent.is(":visible")){g(document.body).unbind("mousemove",p)}if(b==null){g(document.body).unbind("mousemove",p);return}d.parent.removeClass("viewport-right").removeClass("viewport-bottom");var w=d.parent[0].offsetLeft;var z=d.parent[0].offsetTop;var s=k(b);if(!s){d.parent.hide();g(document.body).unbind("mousemove",p);return}if(t){w=t.pageX+s.left+5;z=t.pageY-s.top-d.parent.height()+5;var x="auto";if(s.positionLeft){x=g(window).width()-w;w="auto"}d.parent.css({left:w,right:x,top:z})}var B=r,u=d.parent[0];if(B.x+B.cx<u.offsetLeft+u.offsetWidth){w-=u.offsetWidth+20+s.left;d.parent.css({left:w+"px"}).addClass("viewport-right")}if(t&&(z-g(window).scrollTop())<0){z=t.pageY+s.top;var A=B.y+B.cy-15;var y=z+d.parent.height();if(y>A){z-=(y-A)}d.parent.css({top:z})}}var r={x:0,y:0,cx:0,cy:0};function q(){r.x=window.scrollX;r.y=window.scrollY;r.cx=window.innerWidth;r.cy=window.innerHeight}q();g(window).resize(function(){q()});g(window).scroll(function(){q()});function e(t){if(g.dbTooltip.blocked){return}if(m){clearTimeout(m)}b=null;var u=k(this);function s(){d.parent.removeClass(u.extraClass).hide().css("opacity","")}if((!f||!g.fn.bgiframe)&&u.fade){if(d.parent.is(":animated")){d.parent.stop().fadeTo(u.fade,0,s)}else{d.parent.stop().fadeOut(u.fade,s)}}else{s()}}})(jQuery);

/* C:\Projects\cobalt\Source\Curse.Ascalon.Web\Content\js\Ascalon\Ascalon.Tooltip.js */
function ImportCss(a){if(document.createStyleSheet){document.createStyleSheet(a)}else{var c=a;var b=document.createElement("link");b.rel="stylesheet";b.type="text/css";b.href=c;document.getElementsByTagName("head")[0].appendChild(b)}}function WP_LoadCss(){var a=null;jQuery("script").each(function(c,b){var d=jQuery(b).attr("src");if(d!=null&&(d.indexOf("tt.js")!=-1||d.indexOf("Ascalon.Tooltip.js")!=-1)){a=d}});if(a!=null){a=a.substring(0,a.indexOf("/js/"));ImportCss(a+"/skins/Ascalon/css/tooltip.css")}}function WP_LoadTooltips(a){if(a){WP_LoadTooltipsElements(a.find("a, *[data-tooltip-href]"))}else{WP_LoadTooltipsElements(jQuery("a, *[data-tooltip-href]"))}}function WP_LoadTooltipsElements(a){var b=/(.*?)?\/(skills|tasks|traits|items|recipes|achievements|creatures|boons|conditions|guildupgrades)\/([0-9]+)[\/a-z0-9\-]*(\?(simple|advanced))?(#([0-9]+)-([0-9]+))?/i;a.each(function(){var f=jQuery(this).attr("href")||jQuery(this).attr("data-tooltip-href");if(!f){return}f=f.split("?")[0];if(!f||f==location.href||(location.protocol+"//"+location.host+f)==location.href){return}if(f.substr(0,11)=="javascript:"){return}var i=f.match(b);if(!i){if(jQuery(this).attr("href")&&jQuery(this).attr("data-tooltip-href")){f=jQuery(this).attr("data-tooltip-href");f=f.split("?")[0];if(!f||f==location.href||(location.protocol+"//"+location.host+f)==location.href){return}if(f.substr(0,11)=="javascript:"){return}i=f.match(b)}if(!i){return}}var d=i[1]||("http://"+window.location.host);var c=i[2];var e=i[3];var j=i[5];var h=i[7];var g=i[8];jQuery(this).dbTooltip({bodyHandler:function(){var k=c+"-"+e+"-"+h+"-"+g;WP_ActiveTooltip=k;return WP_Tooltips[k]},wowTooltip:function(){return{HostName:d,Type:c,Id:e,OldBuild:h,NewBuild:g,SimpleOrAdvanced:j}},loadingText:'<div class="db-tooltip"><div class="db-description" style="width: auto">Loading..</div></div>'})})}function WP_OnTooltipLoaded(b){var d=b.Type+"-"+b.Id+"-"+b.OldBuild+"-"+b.NewBuild;if(typeof(b.OldBuild)!="undefined"&&typeof(b.NewBuild)!="undefined"){var e=jQuery("<div/>").attr("id","temp").html(b.Tooltip);var a=e.find(".db-tooltip");if(a.length==3){var c=new HTMLDiff(a[1],a[2]);c.diff();b.Tooltip=e.html()}}WP_Tooltips[d]=b.Tooltip;if(WP_ActiveTooltip==d){jQuery.dbTooltip.change_html(b.Tooltip)}jQuery(document.body).trigger("mousemove")}function WP_Initialize(){WP_Tooltips={};if(typeof(Cobalt)!="undefined"){Cobalt.runOnHtmlInsert(WP_LoadTooltips)}else{WP_LoadCss();WP_LoadTooltips()}}jQuery(document).ready(function(){WP_Initialize()});

