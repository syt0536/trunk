$wnd.jsme.runAsyncCallback8('var tpa="400px",upa="Accept",vpa="Close(ESC)",wpa="Paste",xpa="Paste the text to import into the text area below.",ypa="dragend",zpa="dragenter",Apa="dragover",Bpa="drop",Cpa="file",Dpa="gwt-FileUpload",Epa="gwt-HTML";w(254,242,{});function o$(){o$=x;p$=new PA(ypa,new q$)}function r$(a){cz(a.a);bz(a.a)}function q$(){}w(255,254,{},q$);_.Yd=function(){r$(this)};_._d=function(){return p$};var p$;function s$(){s$=x;t$=new PA(zpa,new u$)}function u$(){}w(256,254,{},u$);_.Yd=function(){r$(this)};_._d=function(){return t$};\nvar t$;function v$(){v$=x;w$=new PA(Apa,new x$)}function x$(){}w(257,254,{},x$);_.Yd=function(){r$(this)};_._d=function(){return w$};var w$;function y$(){y$=x;z$=new PA(Bpa,new A$)}function A$(){}w(258,254,{},A$);\n_.Yd=function(a){var b,c,d,e;cz(this.a);bz(this.a);d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;Fpa(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(Bs),a.a.b.a.a.d.mb[Xs]=null!=b?b:n)};_._d=function(){return z$};var z$;function B$(a,b,c){kC(!a.jb?a.jb=new zC(a):a.jb,c,b)}function C$(){this.mb=Yy(Cpa);this.mb[rp]=Dpa}w(384,365,Pt,C$);_.se=function(a){hF(this,a)};\nfunction D$(a){var b=az(Lp);PZ(qs,I_(b));this.mb=b;this.b=new e1(this.mb);this.mb[rp]=Epa;d1(this.b,a,!0);m1(this)}w(388,389,Pt,D$);function E$(a,b){var c,d;c=az(Os);d=az(As);d[Go]=a.a.a;d.style[Ys]=a.b.a;var e=(aE(),bE(d));c.appendChild(e);$D(a.d,c);vF(a,b,d)}function F$(){pG.call(this);this.a=(sG(),zG);this.b=(AG(),DG);this.e[mp]=bf;this.e[lp]=bf}w(437,381,Tt,F$);_.Re=function(a){var b;b=$y(a.mb);(a=zF(this,a))&&this.d.removeChild($y(b));return a};\nfunction G$(a){try{a.t=!1;var b,c,d;d=a.eb;c=a.Z;d||(a.mb.style[Zs]=jq,ZG(a.mb,!1),a.Z=!1,a.cf());b=a.mb;b.style[uq]=0+(Tz(),Fr);b.style[Js]=cf;R3(a,CW(rz($doc)+(qz()-Vy(a.mb,kr)>>1),0),CW(sz($doc)+(pz()-Vy(a.mb,jr)>>1),0));d||((a.Z=c)?(a.mb.style[wp]=Sr,a.mb.style[Zs]=$s,ZG(a.mb,!0),Ku(a.db,200)):(a.mb.style[Zs]=$s,ZG(a.mb,!0)))}finally{a.t=!0}}function H$(a){var b;b=(new W1(a.e)).nd.cg();dF(b,new I$(a),(VA(),VA(),WA));return b}\nfunction J$(){E3();var a,b,c,d,e;c4.call(this,(v4(),w4),null,!0);this.Gi();this.S=this.ab=!0;a=new D$(this.f);this.d=new NH;UE(this.d,df);RE(this.d,df);v3(this,tpa);e=new F$;e.mb.style[iq]=df;e.e[mp]=10;c=(sG(),tG);e.a=c;E$(e,a);E$(e,this.d);this.c=new HG;this.c.e[mp]=20;for(b=this.Ei(),c=0,d=b.length;c<d;++c)a=b[c],EG(this.c,a);E$(e,this.c);J3(this,e);T3(this,!1);dF(this.d,new K$(this),(pB(),pB(),qB));this.Fi()}w(760,761,MW,J$);_.Ei=function(){return y(YH,q,50,[H$(this)])};\n_.Fi=function(){var a=this.d;a.mb.readOnly=!0;var b=VE(a.mb)+"-readonly";QE(a.Ee(),b,!0)};_.Gi=function(){u4(this.F.b,"Copy")};_.cf=function(){b4(this);this.mb.style[et]=kf};_.c=null;_.d=null;_.e="Close (ESC)";_.f="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function K$(a){this.a=a}w(763,1,{},K$);_.he=function(a){27==(a.a.keyCode||0)&&L3(this.a,!1)};_.a=null;function I$(a){this.a=a}w(764,1,{},I$);\n_.ce=function(){L3(this.a,!1)};_.a=null;function L$(a){this.a=a}w(765,1,{},L$);\n_.Kd=function(){$E(this.a.d.mb,!0);nG(this.a.d,!0);var a=this.a.d,b;b=Wy(a.mb,Xs).length;if(0<b&&a.hb){if(0>b)throw new zS("Length must be a positive integer. Length: "+b);if(b>Wy(a.mb,Xs).length)throw new zS("From Index: 0  To Index: "+b+"  Text Length: "+Wy(a.mb,Xs).length);var a=a.mb,c=0;try{var d=a.createTextRange(),e=a.value.substr(c,b).match(/(\\r\\n)/gi);null!=e&&(b-=e.length);var f=a.value.substring(0,c).match(/(\\r\\n)/gi);null!=f&&(c-=f.length);d.collapse(!0);d.moveStart("character",c);d.moveEnd("character",\nb);d.select()}catch(g){}}};_.a=null;function M$(a){var b;b=(new W1(a.a)).nd.cg();dF(b,new N$(a),(VA(),VA(),WA));return b}function O$(a){a.e=vpa;a.f=xpa;a.a=upa;u4(a.F.b,wpa)}function P$(a){E3();J$.call(this);this.b=a}w(767,760,MW,P$);_.Ei=function(){return y(YH,q,50,[M$(this),H$(this)])};_.Fi=function(){RE(this.d,"150px")};_.Gi=function(){O$(this)};_.cf=function(){b4(this);this.mb.style[et]=kf;Jy((Gy(),Hy),new Q$(this))};_.a=null;_.b=null;function R$(a){E3();P$.call(this,a)}w(766,767,MW,R$);\n_.Ei=function(){var a;return y(YH,q,50,[M$(this),(a=new C$,dF(a,new S$(this),(U_(),U_(),V_)),a),H$(this)])};_.Fi=function(){RE(this.d,"150px");var a=new T$(this),b=this.d;B$(b,new U$,(s$(),s$(),t$));B$(b,new V$,(o$(),o$(),p$));B$(b,new W$,(v$(),v$(),w$));B$(b,new X$(a),(y$(),y$(),z$))};_.Gi=function(){O$(this);this.f+=" Or drag and drop a file on it."};function S$(a){this.a=a}w(768,1,{},S$);_.be=function(a){var b,c;b=new FileReader;a=(c=a.a.srcElement,c.files[0]);Gpa(b,new Y$(this));b.readAsText(a)};\n_.a=null;function Y$(a){this.a=a}w(769,1,{},Y$);_.Hi=function(a){KH(this.a.a.d,a)};_.a=null;w(772,1,{});w(771,772,{});_.b=null;_.c=1;_.d=-1;function T$(a){this.a=a;this.b=new Z$(this);this.c=this.d=1}w(770,771,{},T$);_.a=null;function Z$(a){this.a=a}w(773,1,{},Z$);_.Hi=function(a){this.a.a.d.mb[Xs]=null!=a?a:n};_.a=null;function N$(a){this.a=a}w(777,1,{},N$);_.ce=function(){if(this.a.b){var a=this.a.b,b;b=new bL(a.a,0,Wy(this.a.d.mb,Xs));VQ(a.a.a,b.a)}L3(this.a,!1)};_.a=null;\nfunction Q$(a){this.a=a}w(778,1,{},Q$);_.Kd=function(){$E(this.a.d.mb,!0);nG(this.a.d,!0)};_.a=null;w(779,1,bu);_.Vd=function(){var a,b;a=new $$(this.a);void 0!=$wnd.FileReader?b=new R$(a):b=new P$(a);x3(b);G$(b)};function $$(a){this.a=a}w(780,1,{},$$);_.a=null;w(781,1,bu);_.Vd=function(){var a;a=new J$;var b=this.a,c,d;KH(a.d,b);c=(d=YS(b,"\\r\\n|\\r|\\n|\\n\\r"),d.length);1>=c&&(c=~~(b.length/16));RE(a.d,20*(10>c+1?c+1:10)+Fr);Jy((Gy(),Hy),new L$(a));x3(a);G$(a)};\nfunction Gpa(a,b){a.onload=function(a){b.Hi(a.target.result)}}function Fpa(a,b){a.onloadend=function(a){b.Hi(a.target.result)}}function X$(a){this.a=a}w(787,1,{},X$);_.a=null;function U$(){}w(788,1,{},U$);function V$(){}w(789,1,{},V$);function W$(){}w(790,1,{},W$);W(772);W(771);W(787);W(788);W(789);W(790);W(254);W(256);W(255);W(257);W(258);W(760);W(767);W(766);W(780);W(763);W(764);W(765);W(777);W(778);W(768);W(769);W(770);W(773);W(388);W(437);W(384);C(EW)(8);\n//@ sourceURL=8.js\n')
