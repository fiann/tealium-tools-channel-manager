/**
 * A Tealium Tool to identify the Adobe SiteCatalyst plugins that are installed on
 * on a web page.
 */

/* global tealiumTools */
(function(tealiumTools) {
  "use strict";

  /**
   * A repository of example code from various SiteCat installations
   * that should help to identify plugin versions.
   */
  function getSamplePlugins() {

var plugins = {};

plugins.channelManager = {
  name : "Channel Manager",
  versions : {},
  compatible : true
};
/*
 * channelManager v3.0 - Tracking External Traffic
 */
plugins.channelManager.versions["2.0"] = new Function("a","b","c","d","e","f","g",""
+"var s=this,h=new Date,i=0,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E"
+",F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V;U=s.getQueryParam?1:0;V=s.repl?1"
+":0;h.setTime(h.getTime()+1800000);if(e){i=1;if(s.c_r(e))i=0;if(!s.c"
+"_w(e,1,h))s.c_w(e,1,0);if(!s.c_r(e))i=0;if(f&&s.c_r('s_tbm'+f))i=0;"
+"}j=s.referrer?s.referrer:document.referrer;j=decodeURIComponent(j.t"
+"oLowerCase());if(!j)k=1;else {l=j.indexOf('?')>-1?j.indexOf('?'):j."
+"length;m=j.substring(0,l);n=j.split('/');n=n[2].split('?');o=n[0].t"
+"oLowerCase();p=s.linkInternalFilters.toLowerCase();p=p.split(',');f"
+"or(q=0;q<p.length;q++){r=o.indexOf(p[q])==-1?'':j;if(r)break;}}if(!"
+"r&&!k){t=j;u=v=o;w='Other Natural Referrers';x=s.seList+'>'+s._extr"
+"aSearchEngines;if(d==1){m=V?s.repl(m,'oogle','%'):s.replace(m,'oogl"
+"e','%');m=V?s.repl(m,'ahoo','^'):s.replace(m,'ahoo','^');j=V?s.repl"
+"(j,'as_q','*'):s.replace(j,'as_q','*');}y=x.split('>');for(z=0;z<y."
+"length;z++){A=y[z];A=A.split('|');B=A[0].split(',');for(C=0;C<B.len"
+"gth;C++){D=m.indexOf(B[C]);if(D>-1){if(A[2])E=v=A[2];else E=o;if(d="
+"=1){E=V?s.repl(E,'#',' - '):s.replace(E,'#',' - ');j=V?s.repl(j,'*'"
+",'as_q'):s.replace(j,'*','as_q');E=V?s.repl(E,'^','ahoo'):s.replace"
+"(E,'^','ahoo');E=V?s.repl(E,'%','oogle'):s.replace(E,'%','oogle');}"
+"F=A[1].split(',');for(G=0;G<F.length;G++){if(j.indexOf(F[G]+'=')>-1"
+"||j.indexOf('https://www.google.')==0||j.indexOf('http://r.search.y"
+"ahoo.com')==0)H=1;I=U?s.getQueryParam(F[G],'',j).toLowerCase():s.Ut"
+"il.getQueryParam(F[G],j).toLowerCase();if(H||I)break;}}if(H||I)brea"
+"k;}if(H||I)break;}}if(!r||g!='1'){J=a.split(',');for(var q in J){if"
+"(J.hasOwnProperty(q)){if(U?s.getQueryParam(J[q]):s.Util.getQueryPar"
+"am(J[q])){T=T?T+b+(U?s.getQueryParam(J[q]):s.Util.getQueryParam(J[q"
+"])):(U?s.getQueryParam(J[q]):s.Util.getQueryParam(J[q]));}}}if(T){v"
+"=T;if(E)w='Paid Search';else w='Unknown Paid Channel';}if(!T&&E&&H)"
+"{v=E;w='Natural Search';}}if(i&&k&&!T)t=u=v=w='Typed/Bookmarked';J="
+"s._channelDomain;if(J&&o&&!r){K=J.split('>');for(L=0;L<K.length;L++"
+"){M=K[L]?K[L].split('|'):'';N=M[1]?M[1].split(','):'';O=N.length;fo"
+"r(P=0;P<O;P++){Q=N[P].toLowerCase();R=('/'+o).indexOf(Q);if(R>-1){w"
+"=M[0];break;}}if(R>-1)break;}}J=s._channelParameter;if(J){K=J.split"
+"('>');for(L=0;L<K.length;L++){M=K[L]?K[L].split('|'):'';N=M[1]?M[1]"
+".split(','):'';O=N.length;for(P=0;P<O;P++){R=U?s.getQueryParam(N[P]"
+"):s.Util.getQueryParam(N[P]);if(R){w=M[0];break;}}if(R)break;}}J=s."
+"_channelPattern;if(J){K=J.split('>');for(L=0;L<K.length;L++){M=K[L]"
+"?K[L].split('|'):'';N=M[1]?M[1].split(','):'';O=N.length;for(P=0;P<"
+"O;P++){Q=N[P].toLowerCase();R=T?T.toLowerCase():'';S=R.indexOf(Q);i"
+"f(S==0){w=M[0];break;}}if(S==0)break;}}S=w?T+u+w+I:'';c=c?c:'c_m';i"
+"f(c!='0')S=s.getValOnce(S,c,0);if(S){s._campaignID=T?T:'n/a';s._ref"
+"errer=t?t:'n/a';s._referringDomain=u?u:'n/a';s._campaign=v?v:'n/a';"
+"s._channel=w?w:'n/a';s._partner=E?E:'n/a';s._keywords=H?I?I:'Keywor"
+"d Unavailable':'n/a';if(f&&w!='Typed/Bookmarked'){h.setTime(h.getTi"
+"me()+f*86400000);s.c_w('s_tbm'+f,1,h);}}else s._campaignID=s._refer"
+"rer=s._referringDomain=s._campaign=s._channel=s._partner=s._keyword"
+"s='';");


plugins.setupFormAnalysis = {
  name : "Form Analysis",
  versions : {},
  compatible : false
};
/*
 * Plugin: Form Analysis 2.2 (Success, Error, Abandonment)
 */
plugins.setupFormAnalysis.versions["2.2"] = new Function(""
+"var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;s."
+"wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.even"
+"tList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('',''"
+",'','')}");


plugins.getVisitStart = {
  name : "getVisitStart",
  versions : {},
  compatible : "untested"
};
/*
 * Plugin: getVisitStart v2.0 - returns 1 on first page of visit
 * otherwise 0
 */
plugins.getVisitStart.versions["2.0"] = new Function("c",""
+"var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c"
+")){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;");


plugins.downloadLinkHandler = {
  name : "downloadLinkHandler",
  versions : {},
  compatible : "untested"
};
/*
 * Plugin: downloadLinkHandler 0.8 - identify and report download links
 * Plugin: exitLinkHandler 0.8 - identify and report exit links
 */
plugins.downloadLinkHandler.versions["0.8"] = new Function("p","e",""
+"var s=this,o=s.p_gh(),h=o.href,n='linkDownloadFileTypes',i,t;if(!h|"
+"|(s.linkType&&(h||s.linkName)))return'';i=h.indexOf('?');t=s[n];s[n"
+"]=p?p:t;if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return e?o:"
+"h;");


plugins.manageVars = {
  name : "Utility: manageVars",
  versions : {},
  compatible : "requires update"
};
/*
 * Utility manageVars v1.4 - clear variable values (requires split 1.5)
 */
plugins.manageVars.versions["1.4"] = new Function("c","l","f",""
+"var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa"
+"geName,purchaseID,channel,server,pageType,campaign,state,zip,events"
+",products,transactionID';for(var n=1;n<76;n++){vl+=',prop'+n+',eVar"
+"'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.spl"
+"it(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(l"
+"a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}"
+"}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0"
+");return true;}else{return false;}");


plugins.apl = {
  name : "Utility: apl (append list)",
  versions : {},
  compatible : true
};
/*
 * Plugin Utility: apl v1.1
 */
plugins.apl.versions["1.1"] = new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");


plugins.split = {
  name : "Utility Function: split",
  versions : [],
  compatible : true
};
/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
plugins.split.versions["1.5"] = new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");


plugins.getQueryParam = {
  name : "getQueryParam",
  versions : [],
  compatible : "requires update"
};
/*
 * Plugin: getQueryParam 2.4
 */
plugins.getQueryParam.versions["2.4"] = new Function("p","d","u","h",""
+"var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.loca"
+"tion);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0"
+"?p.length:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#"
+"')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substrin"
+"g(i==p.length?i:i+1)}return v");

plugins.getValOnce = {
  name : "getValOnce",
  versions : [],
  compatible : "untested"
};
/*
 * Plugin: getValOnce_v1.1
 */
plugins.getValOnce.versions["1.1"] = new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000;k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");

plugins.getNewRepeat = {
  name : "getNewRepeat",
  versions : [],
  compatible : true
};
/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
plugins.getNewRepeat.versions["1.2"] = new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

plugins.getTimeToComplete = {
  name : "getTimeToComplete",
  versions : [],
  compatible : true
};
/*
 * Plugin: getTimeToComplete 0.4 - return the time from start to stop
 */
plugins.getTimeToComplete.versions["0.4"] = new Function("v","cn","e",""
+"var s=this,d=new Date,x=d,k;if(!s.ttcr){e=e?e:0;if(v=='start'||v=='"
+"stop')s.ttcr=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c"
+"_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s"
+".c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th="
+"3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un="
+"'hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='sec"
+"onds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");

/*
 * DynamicObjectIDs v1.4: Setup Dynamic Object IDs based on URL
 */
plugins.setupDynamicObjectIDs.versions["1.4"] = new Function(""
+"var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv"
+">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else"
+" if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa"
+"lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho"
+"re=1}");
// s.setOIDs=new Function("e",""
// +"var s=s_c_il["+s._in+"],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i"
// +",a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links)"
// +"{for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b"
// +"=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_"
// +"objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','');u=s.re"
// +"pl(u,'\\n','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';"
// +"if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0"
// +")x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this."
// +"s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o"
// +"]=new Function('e',x)}}}s.wd.s_semaphore=0;return true");

//  * Plugin Utility: Replace v1.0
//  */
// plugins.repl.versions[] = new Function("x","o","n",""
// +"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
// +"substring(i+o.length);i=x.indexOf(o,i+l)}return x");
// /*
//  * Plugin: getPreviousValue_v1.0 - return previous value of designated
//  *   variable (requires split utility)
//  */
// plugins.getPreviousValue.versions[] = new Function("v","c","el",""
// +"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
// +"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
// +"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
// +":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
// +"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
// /*
//  * Plugin: getAndPersistValue 0.3 - get a value on every page
//  */
// plugins.getAndPersistValue.versions[] = new Function("v","c","e",""
// +"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
// +"v)s.c_w(c,v,e?a:0);return s.c_r(c);");
// /*
// * TNT Integration Plugin v1.0
// * v - Name of the javascript variable that is used. Defaults to s_tnt
// (optional)
// * p - Name of the url parameter. Defaults to s_tnt (optional)
// * b - Blank Global variable after plugin runs. Defaults to true (Optional)
// */
// s.trackTNT = function(v, p, b)
// {
// var s=this, n="s_tnt", p=(p)?p:n, v=(v)?v:n, r="",pm=false, b=(b)?b:true;
// if(s.getQueryParam)
// pm = s.getQueryParam(p); //grab the parameter
// if(pm)
// r += (pm + ","); // append the parameter
// if(s.wd[v] != undefined)
// r += s.wd[v]; // get the global variable
// if(b)
// s.wd[v] = ""; // Blank out the global variable for ajax requests
// return r;
// }
// /*
//  * Plugin: getPercentPageViewed v1.5
//  */
// plugins.handlePPVevents.versions[] = new Function("",""
// +"var s=s_c_il["+s._in+"];if(!s.getPPVid)return;var dh=Math.max(Math."
// +"max(s.d.body.scrollHeight,s.d.documentElement.scrollHeight),Math.ma"
// +"x(s.d.body.offsetHeight,s.d.documentElement.offsetHeight),Math.max("
// +"s.d.body.clientHeight,s.d.documentElement.clientHeight)),vph=s.wd.i"
// +"nnerHeight||(s.d.documentElement.clientHeight||s.d.body.clientHeigh"
// +"t),st=s.wd.pageYOffset||(s.wd.document.documentElement.scrollTop||s"
// +".wd.document.body.scrollTop),vh=st+vph,pv=Math.min(Math.round(vh/dh"
// +"*100),100),c=s.c_r('s_ppv'),a=(c.indexOf(',')>-1)?c.split(',',4):[]"
// +",id=(a.length>0)?(a[0]):escape(s.getPPVid),cv=(a.length>1)?parseInt"
// +"(a[1]):(0),p0=(a.length>2)?parseInt(a[2]):(pv),cy=(a.length>3)?pars"
// +"eInt(a[3]):(0),cn=(pv>0)?(id+','+((pv>cv)?pv:cv)+','+p0+','+((vh>cy"
// +")?vh:cy)):'';s.c_w('s_ppv',cn);");
// plugins.getPercentPageViewed.versions[] = new Function("pid",""
// +"pid=pid?pid:'-';var s=this,ist=!s.getPPVid?true:false;if(typeof(s.l"
// +"inkType)!='undefined'&&s.linkType!='e')return'';var v=s.c_r('s_ppv'"
// +"),a=(v.indexOf(',')>-1)?v.split(',',4):[];if(a.length<4){for(var i="
// +"3;i>0;i--){a[i]=(i<a.length)?(a[i-1]):('');}a[0]='';}a[0]=unescape("
// +"a[0]);s.getPPVpid=pid;s.c_w('s_ppv',escape(pid));if(ist){s.getPPVid"
// +"=(pid)?(pid):(s.pageName?s.pageName:document.location.href);s.c_w('"
// +"s_ppv',escape(s.getPPVid));if(s.wd.addEventListener){s.wd.addEventL"
// +"istener('load',s.handlePPVevents,false);s.wd.addEventListener('scro"
// +"ll',s.handlePPVevents,false);s.wd.addEventListener('resize',s.handl"
// +"ePPVevents,false);}else if(s.wd.attachEvent){s.wd.attachEvent('onlo"
// +"ad',s.handlePPVevents);s.wd.attachEvent('onscroll',s.handlePPVevent"
// +"s);s.wd.attachEvent('onresize',s.handlePPVevents);}}return(pid!='-'"
// +")?(a):(a[1]);");
// /*
//  * Function - read combined cookies v 0.37
//  */
// if(!s.__ccucr)
// {
//     s.c_rr=s.c_r;
//     s.__ccucr=true;
//     function c_r(k)
//     {
//         var s=this,d=new Date,v=s.c_rr(k),c=s.c_rspers(),i, m, e;
//         if(v)return v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;
//         i=c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|', i);e=i<0?i:c.indexOf(';', i);
//         m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length, m<0?c.length:m));
//         return v;
//     }
//     function c_rspers()
//     {
//         var cv=s.c_rr("s_pers");var date=new Date().getTime();var expd=null;
//         var cvarr=[];var vcv="";if(!cv)return vcv;cvarr=cv.split(";");for(var i=0,l=cvarr.length;i<l;i++)
//         {expd=cvarr[i].match(/\|([0-9]+)$/);if(expd && parseInt(expd[1]) >= date){vcv += cvarr[i]+";";}}return vcv;
//     }
//     s.c_rspers=c_rspers;
//     s.c_r=c_r;
// }
// /*
//  * Function - write combined cookies v 0.37
//  */
// if(!s.__ccucw)
// {
//     s.c_wr=s.c_w;s.__ccucw=true;
//     function c_w(k, v, e)
//     {
//         var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv, sv, c, i, t;d.setTime(d.getTime() - 60000);
//         if(s.c_rr(k))s.c_wr(k, '', d);k=s.ape(k);pv=s.c_rspers();i=pv.indexOf(' '+k+'=');if(i>-1){
//         pv=pv.substring(0, i)+pv.substring(pv.indexOf(';', i)+1);pc=1;}sv=s.c_rr(sn);i=sv.indexOf(' '+k+'=');
//         if(i>-1){sv=sv.substring(0, i)+sv.substring(sv.indexOf(';', i)+1);sc=1;}d=new Date;
//         if(e){if(e.getTime()>d.getTime()){pv += ' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}
//         else{sv += ' '+k+'='+s.ape(v)+';';sc=1;}sv=sv.replace(/%00/g, '');pv=pv.replace(/%00/g, '');
//         if(sc)s.c_wr(sn, sv, 0);if(pc){t=pv;while(t && t.indexOf(';') != -1){var t1=parseInt(t.substring(t.indexOf('|')+1, t.indexOf(';')));
//         t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.setTime(ht);s.c_wr(pn, pv, d);}return v==s.c_r(s.epa(k));
//     }
//     s.c_w=c_w;
// }
// /* Configure Modules and Plugins */
// s.loadModule("Survey")
// var s_sv_dynamic_root = "survey.122.2o7.net/survey/dynamic"
// var s_sv_gather_root = "survey.122.2o7.net/survey/gather"




// /****************************** MODULES *****************************/
// /* Module: Survey */
// s.m_Survey_c="var m=s.m_i(\"Survey\");m.launch=function(i,e,c,o,f){this._boot();var m=this,g=window.s_sv_globals||{},l,j;if(g.unloaded||m._blocked())return 0;i=i&&i.constructor&&i.constructor==Array?"
// +"i:[i];l=g.manualTriggers;for(j=0;j<i.length;++j)l[l.length]={l:m._suites,i:i[j],e:e||0,c:c||0,o:o||0,f:f||0};m._execute();return 1;};m.version = 10001;m._t=function(){this._boot();var m=this,s=m.s,"
// +"g=window.s_sv_globals||{},l,impr,i,k,impr={};if(m._blocked())return;for(i=0;i<s.va_t.length;i++){k=s.va_t[i];if(s[k]) impr[k]=s[k];}impr[\"l\"]=m._suites;impr[\"n\"]=impr[\"pageName\"]||\"\";impr["
// +"\"u\"]=impr[\"pageURL\"]||\"\";impr[\"c\"]=impr[\"campaign\"]||\"\";impr[\"r\"]=impr[\"referrer\"]||\"\";l=g.pageImpressions;if(l.length > 4) l[l.length - 4]=null;l[l.length]=impr;m._execute();};m."
// +"_rr=function(){var g=window.s_sv_globals||{},f=g.onScQueueEmpty||0;if(f)f();};m._blocked=function(){var m=this,g=window.s_sv_globals||{};return !m._booted||g.stop||!g.pending&&!g.triggerRequested;}"
// +";m._execute=function(){if(s_sv_globals.execute)setTimeout(\"s_sv_globals.execute();\",0);};m._boot=function(){var m=this,s=m.s,w=window,g,c,d=s.dc,e=s.visitorNamespace,n=navigator.appName.toLowerCa"
// +"se(),a=navigator.userAgent,v=navigator.appVersion,h,i,j,k,l,b;if(w.s_sv_globals)return;if(!((b=v.match(/AppleWebKit\\/([0-9]+)/))?521<b[1]:n==\"netscape\"?a.match(/gecko\\//i):(b=a.match(/opera[ \\"
// +"/]?([0-9]+).[0-9]+/i))?7<b[1]:n==\"microsoft internet explorer\"&&!v.match(/macintosh/i)&&(b=v.match(/msie ([0-9]+).([0-9]+)/i))&&(5<b[1]||b[1]==5&&4<b[2])))return;g=w.s_sv_globals={};g.module=m;g."
// +"pending=0;g.incomingLists=[];g.pageImpressions=[];g.manualTriggers=[];e=\"survey\";c=g.config={};m._param(c,\"dynamic_root\",(e?e+\".\":\"\")+d+\".2o7.net/survey/dynamic\");m._param(c,\"gather_root"
// +"\",(e?e+\".\":\"\")+d+\".2o7.net/survey/gather\");g.url=location.protocol+\"//\"+c.dynamic_root;g.gatherUrl=location.protocol+\"//\"+c.gather_root;g.dataCenter=d;g.onListLoaded=new Function(\"r\","
// +"\"b\",\"d\",\"i\",\"l\",\"s_sv_globals.module._loaded(r,b,d,i,l);\");m._suites=(m.suites||s.un).toLowerCase().split(\",\");l=m._suites;b={};for(j=0;j<l.length;++j){i=l[j];if(i&&!b[i]){h=i.length;fo"
// +"r(k=0;k<i.length;++k)h=(h&0x03ffffff)<<5^h>>26^i.charCodeAt(k);b[i]={url:g.url+\"/suites/\"+(h%251+100)+\"/\"+encodeURIComponent(i.replace(/\\|/,\"||\").replace(/\\//,\"|-\"))};++g.pending;}}g.suit"
// +"es=b;setTimeout(\"s_sv_globals.module._load();\",0);m._booted=1;};m._param=function(c,n,v){var p=\"s_sv_\",w=window,u=\"undefined\";if(typeof c[n]==u)c[n]=typeof w[p+n]==u?v:w[p+n];};m._load=functi"
// +"on(){var m=this,g=s_sv_globals,q=g.suites,r,i,n=\"s_sv_sid\",b=m.s.c_r(n);if(!b){b=parseInt((new Date()).getTime()*Math.random());m.s.c_w(n,b);}for(i in q){r=q[i];if(!r.requested){r.requested=1;m._"
// +"script(r.url+\"/list.js?\"+b);}}};m._loaded=function(r,b,d,i,l){var m=this,g=s_sv_globals,n=g.incomingLists;--g.pending;if(!g.commonRevision){g.bulkRevision=b;g.commonRevision=r;g.commonUrl=g.url+"
// +"\"/common/\"+b;}else if(g.commonRevision!=r)return;if(!l.length)return;n[n.length]={r:i,l:l};if(g.execute)g.execute();else if(!g.triggerRequested){g.triggerRequested=1;m._script(g.commonUrl+\"/trig"
// +"ger.js\");}};m._script=function(u){var d=document,e=d.createElement(\"script\");e.type=\"text/javascript\";e.src=u;d.getElementsByTagName(\"head\")[0].appendChild(e);};if(m.onLoad)m.onLoad(s,m)";
// s.m_i("Survey");

// /* Module: Media */
// s.m_Media_c="var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m="
// +"this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;"
// +"if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm"
// +".getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.co=0;i.cot=0;i.lm=0;i.lom=0;m.l[n]=i}};m._delete=function(n){var"
// +" m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new Object;"
// +"i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.complete=function(n,o){th"
// +"is.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=vo.linkTrackEvents,pe='m_i',pev3,c=vo.context"
// +"Data,x;c['a.contentType']='video';c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0){c[ns+'length']=i.l;}c[ns+'timePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns"
// +"+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView']=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i"
// +".lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3='video';vo.pe=pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x i"
// +"n d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='string'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]="
// +"c[x]}else if(y){if(y=='view'||y=='segmentView'||y=='complete'||y=='timePlayed'){if(e)e+=','+a;if(c[x]){if(y=='timePlayed'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events"
// +"2+=(vo.events2?',':'')+a}}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,"
// +"x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.events2?',':'')+d[x+'s'][c[x]]}}}vo.contextData=0}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){v"
// +"ar m=this,pe='m_o',pev3,d='--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.fl"
// +"oor(i.to):'')+i.e+(x!=0&&x!=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvent"
// +"s,ti=m.trackSeconds,tp=m.trackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;n=m.cn(n);i=n&&m.l&&"
// +"m.l[n]?m.l[n]:0;if(i){if(o<0){if(i.lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name"
// +"=n;w.length=i.l;w.openTime=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP"
// +"':(x==3?'MONITOR':(x==4?'TRACK':(x==5?'COMPLETE':('CLOSE'))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i"
// +".lo=o;if((x<=3||x==5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i"
// +".l)*100<c&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z"
// +".length;w.mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat('"
// +"'+z[j]):0;if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if("
// +"c||z[j]=='E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-"
// +"i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||i.x>"
// +"=100){x=0;m.e(n,2,-1,0,0,-1,pd);v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m.completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}e"
// +"k=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePl"
// +"ayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new Object;vo.contextData=new Object;vo.linkTrackVars=v;vo"
// +".linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i);else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx="
// +"sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthReq"
// +"uired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,x"
// +"c=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s"
// +"_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new Function('o','var e,p=0;try{if(o.versionInfo&&o.curre"
// +"ntMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o'"
// +",'var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-"
// +"1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}"
// +"';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='text/javascript';x.htmlFor=i;x.event='PlayStateC"
// +"hange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()"
// +"?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+"
// +"';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l"
// +",\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '"
// +"+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if"
// +"(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'"
// +"+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)"
// +"\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTag"
// +"Name(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,fal"
// +"se);if(m.onLoad)m.onLoad(s,m)";
// s.m_i("Media");

    return plugins;
  } 

  // 1. Try to find the "real" s object that contains the plugins
  var namespaces = ["tealium_s", "s"];
  var s = null;
  for (var i = 0; i < namespaces.length; i++) {
    var namespace = namespaces[i];
    if (typeof window[namespace] === "object") {
      s = window[namespace];
      break;
    }
  }

  if (s === null) {
    tealiumTools.sendError("Error",
      "SiteCatalyst is not found on the current webpage.");
    return;
  }

  // 2. Record any functions from the 's' object that are not recognised
  // as candidate plugins
  var unknown_plugins = [];
  for (var key in s) {
    if (s.hasOwnProperty(key)) {
      unknown_plugins.push(key);
    }
  }

  // 2. Check for plugins
  var known_plugins = getSamplePlugins();
  var plugins = {}, plugins_found = [], plugins_not_found = [];

  for (var key in known_plugins) {
    if (known_plugins.hasOwnProperty(key)) {
      var plugin = known_plugins[key];
      if (s[key] === undefined) {
        plugins[key] = null;
        plugins_not_found.push(plugin.name);
      } else {
        var version = "(unknown version)";
        for (var version_id in plugin.versions) {
          if (s[key].toString() === plugin.versions[version_id].toString()) {
            version = "v" + version_id;
            break;
          }
        }
        plugins[key] = {
          "name" : plugin.name,
          "version" : version
        };
        plugins_found.push(plugin.name + " : " + version);
      }
    }
  }

  var data = {
    // "known_plugins" : known_plugins,
    "plugins": plugins,
    "plugins_found" : plugins_found,
    "plugins_not_found" : plugins_not_found
  };

  tealiumTools.send(data);


})(tealiumTools);