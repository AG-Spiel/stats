(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{QkCX:function(e,r,t){"use strict";t.r(r),t.d(r,"MarketModule",function(){return C});var a=t("ofXK"),l=t("tyNb"),i=t("QcQV"),o=t("XvOW");const d=[{date:"date",value:"bbw",label:"BBW",color:o.a},{date:"date",value:"bw",label:"BW",color:o.d},{date:"date",value:"fp",label:"FP",color:o.h},{date:"date",value:"sw",label:"SW",color:o.s},{date:"date",value:"kurs",label:"Marktkapitalisierung",color:o.i}],c=[{date:"date",value:"aktien",label:"Aktien",color:o.r},{date:"date",value:"cash",label:"Bargeld",color:o.e},{date:"date",value:"anleihen",label:"Anleihen",color:o.b},{date:"date",value:"kredite",label:"Kredite",color:o.g},{date:"date",value:"zertis",label:"Zertis",color:o.t},{date:"date",value:"nettcash",label:"Nettcash",color:o.j}],s=[{date:"date",value:"buys",label:"Buys",color:o.c},{date:"date",value:"sells",label:"Sells",color:o.q},{date:"date",value:"cash",label:"Bargeld",color:o.e}],b=[{date:"date",value:"ja",label:"Schutz",color:o.f},{date:"date",value:"nein",label:"Kein Schutz",color:o.k},{date:"date",value:"spieler",label:"Spieler",color:o.m}],n=[{date:"date",value:"premium",label:"Premium",color:o.n},{date:"date",value:"kein",label:"Kein Premium",color:o.l},{date:"date",value:"gold",label:"Gold Premium",color:o.o},{date:"date",value:"silber",label:"Silber Premium",color:o.p},{date:"date",value:"spieler",label:"Spieler",color:o.m}];var u=t("fXoL"),p=t("wXkB"),h=t("L21D"),S=t("njdh");const v=[{path:"",component:(()=>{class e{constructor(){this.marketChartUrl=i.a.AGS_STATS.MARKET.MARKET,this.marketChartSeries=d,this.orderChartUrl=i.a.AGS_STATS.MARKET.ORDER,this.orderChartSeries=s,this.depotChartUrl=i.a.AGS_STATS.MARKET.DEPOT,this.depotChartSeries=c,this.coverChartUrl=i.a.AGS_STATS.MARKET.COVER,this.coverChartSeries=b,this.premChartUrl=i.a.AGS_STATS.MARKET.PREMIUM,this.premChartSeries=n}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u.Hb({type:e,selectors:[["app-market-board"]],decls:26,vars:10,consts:[["heading","Marktweite Statistiken"],[1,"market","cardrow"],["title","Markt","subtitle","Kumulierte Werte aller AGs"],[1,"card-bodyrow"],[1,"chart-container","container"],["id","market",3,"url","series"],[1,"depots","cardrow"],["title","Depots","subtitle","Kumulierte Depots aller AGs"],["id","depot",3,"url","series"],[1,"order","cardrow"],["title","Orderb\xfccher","subtitle","Kumulierte Orderb\xfccher aller AGs"],["id","order",3,"url","series"],[1,"cover","cardrow"],["title","\xdcbernahmeschutz","subtitle","Anzahl der Spieler mit oder ohne \xdcS"],["id","cover",3,"url","series"],[1,"prem","cardrow"],["title","Premium","subtitle","Anzahl der Spieler mit Gold-, Silber- oder ohne Premium"],["id","prem",3,"url","series"]],template:function(e,r){1&e&&(u.Tb(0,"app-page-wrapper",0),u.Tb(1,"div",1),u.Tb(2,"app-card",2),u.Tb(3,"div",3),u.Tb(4,"div",4),u.Ob(5,"app-line-chart",5),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(6,"div",6),u.Tb(7,"app-card",7),u.Tb(8,"div",3),u.Tb(9,"div",4),u.Ob(10,"app-line-chart",8),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(11,"div",9),u.Tb(12,"app-card",10),u.Tb(13,"div",3),u.Tb(14,"div",4),u.Ob(15,"app-line-chart",11),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(16,"div",12),u.Tb(17,"app-card",13),u.Tb(18,"div",3),u.Tb(19,"div",4),u.Ob(20,"app-line-chart",14),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(21,"div",15),u.Tb(22,"app-card",16),u.Tb(23,"div",3),u.Tb(24,"div",4),u.Ob(25,"app-line-chart",17),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb()),2&e&&(u.Cb(5),u.kc("url",r.marketChartUrl)("series",r.marketChartSeries),u.Cb(5),u.kc("url",r.depotChartUrl)("series",r.depotChartSeries),u.Cb(5),u.kc("url",r.orderChartUrl)("series",r.orderChartSeries),u.Cb(5),u.kc("url",r.coverChartUrl)("series",r.coverChartSeries),u.Cb(5),u.kc("url",r.premChartUrl)("series",r.premChartSeries))},directives:[p.a,h.a,S.a],styles:[".market[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:nowrap}.card[_ngcontent-%COMP%], .cardrow[_ngcontent-%COMP%]{width:75vw}.cardrow[_ngcontent-%COMP%]{margin-bottom:1rem}.card-bodyrow[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:stretch;justify-content:center}.chart-container[_ngcontent-%COMP%]{width:75vw;height:50vh;display:grid;align-items:stretch}"]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({factory:function(r){return new(r||e)},imports:[[l.f.forChild(v)],l.f]}),e})();var T=t("PCNd");let C=(()=>{class e{}return e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({factory:function(r){return new(r||e)},imports:[[a.c,m,T.a]]}),e})()}}]);