!function(){"use strict";var e={d:function(n,p){for(var r in p)e.o(p,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:p[r]})},o:function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{autop:function(){return t},removep:function(){return c}});const p=new RegExp("(<((?=!--|!\\[CDATA\\[)((?=!-)!(?:-(?!->)[^\\-]*)*(?:--\x3e)?|!\\[CDATA\\[[^\\]]*(?:](?!]>)[^\\]]*)*?(?:]]>)?)|[^>]*>?))");function r(e,n){const r=function(e){const n=[];let r,t=e;for(;r=t.match(p);){const e=r.index;n.push(t.slice(0,e)),n.push(r[0]),t=t.slice(e+r[0].length)}return t.length&&n.push(t),n}(e);let t=!1;const c=Object.keys(n);for(let e=1;e<r.length;e+=2)for(let p=0;p<c.length;p++){const l=c[p];if(-1!==r[e].indexOf(l)){r[e]=r[e].replace(new RegExp(l,"g"),n[l]),t=!0;break}}return t&&(e=r.join("")),e}function t(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const p=[];if(""===e.trim())return"";if(-1!==(e+="\n").indexOf("<pre")){const n=e.split("</pre>"),r=n.pop();e="";for(let r=0;r<n.length;r++){const t=n[r],c=t.indexOf("<pre");if(-1===c){e+=t;continue}const l="<pre wp-pre-tag-"+r+"></pre>";p.push([l,t.substr(c)+"</pre>"]),e+=t.substr(0,c)+l}e+=r}const t="(?:table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary)";-1!==(e=r(e=(e=(e=(e=e.replace(/<br\s*\/?>\s*<br\s*\/?>/g,"\n\n")).replace(new RegExp("(<"+t+"[\\s/>])","g"),"\n\n$1")).replace(new RegExp("(</"+t+">)","g"),"$1\n\n")).replace(/\r\n|\r/g,"\n"),{"\n":" \x3c!-- wpnl --\x3e "})).indexOf("<option")&&(e=(e=e.replace(/\s*<option/g,"<option")).replace(/<\/option>\s*/g,"</option>")),-1!==e.indexOf("</object>")&&(e=(e=(e=e.replace(/(<object[^>]*>)\s*/g,"$1")).replace(/\s*<\/object>/g,"</object>")).replace(/\s*(<\/?(?:param|embed)[^>]*>)\s*/g,"$1")),-1===e.indexOf("<source")&&-1===e.indexOf("<track")||(e=(e=(e=e.replace(/([<\[](?:audio|video)[^>\]]*[>\]])\s*/g,"$1")).replace(/\s*([<\[]\/(?:audio|video)[>\]])/g,"$1")).replace(/\s*(<(?:source|track)[^>]*>)\s*/g,"$1")),-1!==e.indexOf("<figcaption")&&(e=(e=e.replace(/\s*(<figcaption[^>]*>)/,"$1")).replace(/<\/figcaption>\s*/,"</figcaption>"));const c=(e=e.replace(/\n\n+/g,"\n\n")).split(/\n\s*\n/).filter(Boolean);return e="",c.forEach((n=>{e+="<p>"+n.replace(/^\n*|\n*$/g,"")+"</p>\n"})),e=(e=(e=(e=(e=(e=(e=(e=e.replace(/<p>\s*<\/p>/g,"")).replace(/<p>([^<]+)<\/(div|address|form)>/g,"<p>$1</p></$2>")).replace(new RegExp("<p>\\s*(</?"+t+"[^>]*>)\\s*</p>","g"),"$1")).replace(/<p>(<li.+?)<\/p>/g,"$1")).replace(/<p><blockquote([^>]*)>/gi,"<blockquote$1><p>")).replace(/<\/blockquote><\/p>/g,"</p></blockquote>")).replace(new RegExp("<p>\\s*(</?"+t+"[^>]*>)","g"),"$1")).replace(new RegExp("(</?"+t+"[^>]*>)\\s*</p>","g"),"$1"),n&&(e=(e=(e=(e=e.replace(/<(script|style).*?<\/\\1>/g,(e=>e[0].replace(/\n/g,"<WPPreserveNewline />")))).replace(/<br>|<br\/>/g,"<br />")).replace(/(<br \/>)?\s*\n/g,((e,n)=>n?e:"<br />\n"))).replace(/<WPPreserveNewline \/>/g,"\n")),e=(e=(e=e.replace(new RegExp("(</?"+t+"[^>]*>)\\s*<br />","g"),"$1")).replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)/g,"$1")).replace(/\n<\/p>$/g,"</p>"),p.forEach((n=>{const[p,r]=n;e=e.replace(p,r)})),-1!==e.indexOf("\x3c!-- wpnl --\x3e")&&(e=e.replace(/\s?<!-- wpnl -->\s?/g,"\n")),e}function c(e){const n="blockquote|ul|ol|li|dl|dt|dd|table|thead|tbody|tfoot|tr|th|td|h[1-6]|fieldset|figure",p=n+"|div|p",r=n+"|pre",t=[];let c=!1,l=!1;return e?(-1===e.indexOf("<script")&&-1===e.indexOf("<style")||(e=e.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g,(e=>(t.push(e),"<wp-preserve>")))),-1!==e.indexOf("<pre")&&(c=!0,e=e.replace(/<pre[^>]*>[\s\S]+?<\/pre>/g,(e=>(e=(e=e.replace(/<br ?\/?>(\r\n|\n)?/g,"<wp-line-break>")).replace(/<\/?p( [^>]*)?>(\r\n|\n)?/g,"<wp-line-break>")).replace(/\r?\n/g,"<wp-line-break>")))),-1!==e.indexOf("[caption")&&(l=!0,e=e.replace(/\[caption[\s\S]+?\[\/caption\]/g,(e=>e.replace(/<br([^>]*)>/g,"<wp-temp-br$1>").replace(/[\r\n\t]+/,"")))),-1!==(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(new RegExp("\\s*</("+p+")>\\s*","g"),"</$1>\n")).replace(new RegExp("\\s*<((?:"+p+")(?: [^>]*)?)>","g"),"\n<$1>")).replace(/(<p [^>]+>[\s\S]*?)<\/p>/g,"$1</p#>")).replace(/<div( [^>]*)?>\s*<p>/gi,"<div$1>\n\n")).replace(/\s*<p>/gi,"")).replace(/\s*<\/p>\s*/gi,"\n\n")).replace(/\n[\s\u00a0]+\n/g,"\n\n")).replace(/(\s*)<br ?\/?>\s*/gi,((e,n)=>n&&-1!==n.indexOf("\n")?"\n\n":"\n"))).replace(/\s*<div/g,"\n<div")).replace(/<\/div>\s*/g,"</div>\n")).replace(/\s*\[caption([^\[]+)\[\/caption\]\s*/gi,"\n\n[caption$1[/caption]\n\n")).replace(/caption\]\n\n+\[caption/g,"caption]\n\n[caption")).replace(new RegExp("\\s*<((?:"+r+")(?: [^>]*)?)\\s*>","g"),"\n<$1>")).replace(new RegExp("\\s*</("+r+")>\\s*","g"),"</$1>\n")).replace(/<((li|dt|dd)[^>]*)>/g," \t<$1>")).indexOf("<option")&&(e=(e=e.replace(/\s*<option/g,"\n<option")).replace(/\s*<\/select>/g,"\n</select>")),-1!==e.indexOf("<hr")&&(e=e.replace(/\s*<hr( [^>]*)?>\s*/g,"\n\n<hr$1>\n\n")),-1!==e.indexOf("<object")&&(e=e.replace(/<object[\s\S]+?<\/object>/g,(e=>e.replace(/[\r\n]+/g,"")))),e=(e=(e=(e=e.replace(/<\/p#>/g,"</p>\n")).replace(/\s*(<p [^>]+>[\s\S]*?<\/p>)/g,"\n$1")).replace(/^\s+/,"")).replace(/[\s\u00a0]+$/,""),c&&(e=e.replace(/<wp-line-break>/g,"\n")),l&&(e=e.replace(/<wp-temp-br([^>]*)>/g,"<br$1>")),t.length&&(e=e.replace(/<wp-preserve>/g,(()=>t.shift()))),e):""}(window.wp=window.wp||{}).autop=n}();