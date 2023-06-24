var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

<!--
function thaiWrap() {
 /* if it is Internet Explorer, do nothing. */
 /* note: Opera can identified itself as IE, but we should treat it as Opera. */
 var ua = navigator.userAgent.toLowerCase();
 if((ua.indexOf("opera")<=0)&&(ua.indexOf("msie")>0)) return;

 /* compare function for sorting */
 function cnum(a,b){return a-b;}
 
 /* unambiguous words that are common, like prepositions */
 /* for example, not include "เพื่อ" since it may be part of "เพื่อน", "ว่า"/"ว่าง", "คือ"/"เคือง" */
 /* เป็น|อยู่|จะ|ใช้|ได้|ให้|ใน|จึง|หรือ|และ|กับ|เนื่อง|ด้วย|ถ้า|แล้ว|ทั้ง|เพราะ|ซึ่ง|ซ้ำ|ไม่|ใช่|ต้อง|กัน|จาก|ถึง|นั้น|ผู้|ความ|ส่วน|ยัง|ทั่ว|อื่น|โดย|สามารถ|เท่า|ใต้|ใส่|ใด|ไว้|ใหม่|ใหญ่|เล็ก|ใกล้|ไกล|เขา|ช่วย|ฉบับ|ค้น|เร็ว|เข้า|เช้า */
 /* revised + new words by thep at linux.thai.net */ 
 cw="(\u0e40\u0e1b\u0e47\u0e19|\u0e2d\u0e22\u0e39\u0e48|\u0e08\u0e30|\u0e43\u0e0a\u0e49|\u0e44\u0e14\u0e49|\u0e43\u0e2b\u0e49|\u0e43\u0e19|\u0e08\u0e36\u0e07|\u0e2b\u0e23\u0e37\u0e2d|\u0e41\u0e25\u0e30|\u0e01\u0e31\u0e1a|\u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07|\u0e14\u0e49\u0e27\u0e22|\u0e16\u0e49\u0e32|\u0e41\u0e25\u0e49\u0e27|\u0e17\u0e31\u0e49\u0e07|\u0e40\u0e1e\u0e23\u0e32\u0e30|\u0e0b\u0e36\u0e48\u0e07|\u0e0b\u0e49\u0e33|\u0e44\u0e21\u0e48|\u0e43\u0e0a\u0e48|\u0e15\u0e49\u0e2d\u0e07|\u0e01\u0e31\u0e19|\u0e08\u0e32\u0e01|\u0e16\u0e36\u0e07|\u0e19\u0e31\u0e49\u0e19|\u0e1c\u0e39\u0e49|\u0e04\u0e27\u0e32\u0e21|\u0e2a\u0e48\u0e27\u0e19|\u0e22\u0e31\u0e07|\u0e17\u0e31\u0e48\u0e27|\u0e2d\u0e37\u0e48\u0e19|\u0e42\u0e14\u0e22|\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16|\u0e40\u0e17\u0e48\u0e32|\u0e43\u0e15\u0e49|\u0e43\u0e2a\u0e48|\u0e43\u0e14|\u0e44\u0e27\u0e49|\u0e43\u0e2b\u0e21\u0e48|\u0e43\u0e2b\u0e0d\u0e48|\u0e40\u0e25\u0e47\u0e01|\u0e43\u0e01\u0e25\u0e49|\u0e44\u0e01\u0e25|\u0e40\u0e02\u0e32|\u0e0a\u0e48\u0e27\u0e22|\u0e09\u0e1a\u0e31\u0e1a|\u0e04\u0e49\u0e19|\u0e40\u0e23\u0e47\u0e27|\u0e40\u0e02\u0e49\u0e32|\u0e40\u0e0a\u0e49\u0e32)";
 /* leading chars */
 lc="[\u0e40-\u0e44]|\\(|\\[|\\{|\"";
 /* "following" chars */
 fc="\u0e2f|[\u0e30-\u0e3A]|[\u0e45-\u0e4e]|\\)|\\]|\\}|\"";
 /* thai chars */
 tc="\u0e01-\u0e3a\u0e40-\u0e4f\u0e5a\u0e5b";
 
 r=new Array();
 l=new Array();
 
 /* following chars followed by leading chars */
 r[0]=new RegExp("("+fc+")(?=("+lc+"))");
 l[0]=1;
 /* l >= 0 means using this value as length */
 
 /* thai followed by non-thai */
 r[1]=new RegExp("(["+tc+"])(?![\\)\\]\\}\"]|["+tc+"])");
 l[1]=1;
 
 /* non-thai followed by thai */
 r[2]=new RegExp("([^"+tc+"\\(\\(\\[\\{\"])(?=["+tc+"])");
 l[2]=1;
 
 /* non-leading char followed by known word */
 r[3]=new RegExp("([^"+lc+"])(?=("+lc+")*"+cw+"("+fc+")?)");
 l[3]=1;
 
 /* known word followed by non-following chars */
 r[4]=new RegExp("(("+lc+")*"+cw+"("+fc+")*)(?!"+fc+")");
 l[4]=-1;
 /* l < 0 means using length from match() function */
 
 /* end-of-word symbols */
 r[5]=new RegExp("([\u0e45\u0e46\u0e33])");
 l[5]=1;

 /* not break ชาติ, ญาติ to ชา-ติ, ญา-ติ */
 /* not work with Opera */ 
 /*r[6]=new RegExp("([\u0e30\u0e32-\u0e3a])(?=([^\u0e15]([\u0e30-\u0e3a\0e47\u0e4d])))")*/;
 /*l[6]=1;*/
 
 /* do breaks */
 function F(n){
  var p,a,c,x,t,e;
  if(n.nodeType==3){
   /* find all possible break points */
   p=new Array();
   for(i=0;i<r.length;i++){
    t=n.data.search(r[i]);
    if(t>=0){
     if(l[i]>=0){p.push(t+l[i]);}
     else{e=n.data.match(r[i]);p.push(t+e[1].length);}
    }
   }
   /* use the left-most break point */
   if(p.length>0){
    p.sort(cnum);
    if(p[0]>=0){
     a=n.splitText(p[0]);
     /*n.parentNode.insertBefore(document.createElement("WBR"),a);*/
     /* Use zero-width space instead of <WBR> */
     /* as Opera doesn't support <WBR>, http://www.quirksmode.org/oddsandends/wbr.html */
     n.parentNode.insertBefore(document.createTextNode("\u200b"),a);
    }
   }
  }else{
   if(n.tagName!="STYLE"&&n.tagName!="SCRIPT"){
    for(c=0;x=n.childNodes[c];++c){F(x);}}
  }
 }
 
 /* do breaks for each body in every frames */
 function G(w){
  var fm=w.frames;
  if(fm.length<=0){
   F(document.body);
  }else{
   for(var i=0;i<fm.length;i++){
    D=fm[i].document;
    F(D.body);
   }
  }
 }
 
 G(window.self);
}
//-->



}
