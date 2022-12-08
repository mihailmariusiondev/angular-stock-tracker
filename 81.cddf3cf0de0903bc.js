"use strict";(self.webpackChunkangular_cert_template=self.webpackChunkangular_cert_template||[]).push([[81],{4081:(at,T,c)=>{c.r(T),c.d(T,{StockTrackerModule:()=>b});var F=c(723),y=c(8996),U=c(5338),C=c(7579),h=c(2722),t=c(4650),I=c(529);class g{constructor(n){this.http=n,this.API_KEY="bu4f8kn48v6uehqi3cqg",this.API_BASE_URL="https://finnhub.io/api/v1"}getQuote(n){return this.http.get(`${this.API_BASE_URL}/quote`,{params:{token:this.API_KEY,symbol:n}})}searchBySymbol(n){return this.http.get(`${this.API_BASE_URL}/search`,{params:{token:this.API_KEY,q:n}})}getInsiderSentiment(n){const o=new Date,e=o.getMonth()+1,i=o.getFullYear(),p=o.getDate();let u=e-3,d=i;u<0&&(u+=12,d-=1);const v=`${d}-${u.toString().padStart(2,"0")}-01`,ot=`${i}-${e.toString().padStart(2,"0")}-${p.toString().padStart(2,"0")}`;return this.http.get(`${this.API_BASE_URL}/stock/insider-sentiment`,{params:{token:this.API_KEY,symbol:n,from:v,to:ot}})}static#t=this.\u0275fac=function(o){return new(o||g)(t.LFG(I.eN))};static#n=this.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}var m=c(6895),r=c(1576),Z=c(4859),s=c(3546),A=c(7392);function N(a,n){1&a&&(t.TgZ(0,"mat-icon",9),t._uU(1,"trending_up"),t.qZA())}function O(a,n){1&a&&(t.TgZ(0,"mat-icon",10),t._uU(1,"trending_down"),t.qZA())}class f{constructor(){this.monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}set sentiment(n){n&&(this._sentiment=n)}get sentiment(){return this._sentiment}static#t=this.\u0275fac=function(o){return new(o||f)};static#n=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-sentiment-item"]],inputs:{sentiment:"sentiment"},decls:20,vars:6,consts:[["fxLayout","row",1,"company-sentient-item-card"],["fxLayout","column","fxFlex","65%","fxLayoutGap","15px",1,"company-sentiment-data"],["fxLayout","row"],[1,"company-sentiment-data-date"],[1,"company-sentiment-data-change-mspr"],["fxLayout","column","fxFlex","35%","fxLayoutAlign","center center"],[3,"ngSwitch"],["class","icon-trending change-positive",4,"ngSwitchCase"],["class","icon-trending change-negative",4,"ngSwitchCase"],[1,"icon-trending","change-positive"],[1,"icon-trending","change-negative"]],template:function(o,e){1&o&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"div",2)(3,"span",3)(4,"b"),t._uU(5),t.qZA()()(),t.TgZ(6,"div",2)(7,"span",4)(8,"b"),t._uU(9,"Change"),t.qZA(),t._uU(10),t.qZA()(),t.TgZ(11,"div",2)(12,"span",4)(13,"b"),t._uU(14,"Mspr"),t.qZA(),t._uU(15),t.qZA()()(),t.TgZ(16,"div",5)(17,"div",6),t.YNc(18,N,2,0,"mat-icon",7),t.YNc(19,O,2,0,"mat-icon",8),t.qZA()()()),2&o&&(t.xp6(5),t.Oqu(e.monthNames[e.sentiment.month-1]+" "+e.sentiment.year.toString()),t.xp6(5),t.hij(": ",e.sentiment.change,""),t.xp6(5),t.hij(": ",e.sentiment.mspr,""),t.xp6(2),t.Q6J("ngSwitch",e.sentiment.change>0),t.xp6(1),t.Q6J("ngSwitchCase",!0),t.xp6(1),t.Q6J("ngSwitchCase",!1))},dependencies:[m.RF,m.n9,r.xw,r.SQ,r.Wh,r.yH,s.a8,A.Hw],styles:[".company-sentient-item-card[_ngcontent-%COMP%]{margin-top:20px;margin-left:10px;margin-right:10px;min-height:130px}.change-positive[_ngcontent-%COMP%]{color:#00800080}.change-negative[_ngcontent-%COMP%]{color:#ff000080}.icon-trending[_ngcontent-%COMP%]{transform:scale(3)}.company-sentiment-data[_ngcontent-%COMP%]{padding:20px}.company-sentiment-data-date[_ngcontent-%COMP%]{font-size:20px}.company-sentiment-data-change-mspr[_ngcontent-%COMP%]{font-size:14px}"]})}function w(a,n){if(1&a&&(t.ynx(0),t._UZ(1,"app-sentiment-item",10),t.BQk()),2&a){const o=t.oxw().index,e=t.oxw();t.xp6(1),t.Q6J("sentiment",e.sentiments[o])}}function J(a,n){1&a&&(t.TgZ(0,"mat-card",11),t._uU(1," No data available "),t.qZA())}function M(a,n){if(1&a&&(t.TgZ(0,"div",7),t.YNc(1,w,2,1,"ng-container",8),t.YNc(2,J,2,0,"ng-template",null,9,t.W1O),t.qZA()),2&a){const o=n.index,e=t.MAs(3),i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.sentiments[o])("ngIfElse",e)}}const P=function(){return[0,1,2]};class x{constructor(n,o,e){this.route=n,this.router=o,this.stockTrackerService=e,this.destroy$=new C.x,this.sentiments=[],this.symbol="",this.companyName=""}ngOnInit(){this.symbol=this.route.snapshot.paramMap.get("symbol")||"",this.route.queryParams.pipe((0,h.R)(this.destroy$)).subscribe(n=>{this.companyName=n.companyName}),this.symbol&&!this.companyName&&this.stockTrackerService.searchBySymbol(this.symbol).pipe((0,h.R)(this.destroy$)).subscribe(n=>{this.companyName=n.result[0].description}),this.symbol&&this.stockTrackerService.getInsiderSentiment(this.symbol).pipe((0,h.R)(this.destroy$)).subscribe(n=>{this.sentiments=n.data})}goBack(){this.router.navigate([".."])}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static#t=this.\u0275fac=function(o){return new(o||x)(t.Y36(y.gz),t.Y36(y.F0),t.Y36(g))};static#n=this.\u0275cmp=t.Xpm({type:x,selectors:[["app-sentiment"]],decls:17,vars:4,consts:[["fxLayout","column"],["fxLayout","column","fxLayoutAlign","center center",1,"sentiment-card"],[1,"sentiment-card-header"],["fxFill","","fxLayout","row wrap"],["fxFlex","25","fxFlex.md","33","fxFlex.sm","50","fxFlex.xs","100","fxLayout","column","class","company-stock-item",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center","fxFlex","100%",1,"company-sentiment-back-btn"],["id","backBtn","mat-button","",3,"click"],["fxFlex","25","fxFlex.md","33","fxFlex.sm","50","fxFlex.xs","100","fxLayout","column",1,"company-stock-item"],[4,"ngIf","ngIfElse"],["noSentimentsTemplate",""],[3,"sentiment"],["fxLayout","row","fxLayoutAlign","center center",1,"sentiment-card-item-no-data"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-header",2)(3,"mat-card-title")(4,"strong"),t._uU(5),t.qZA()(),t.TgZ(6,"mat-card-subtitle")(7,"b"),t._uU(8,"Note"),t.qZA(),t._uU(9,": some companies may not have sentiment data or may only have data for the last one or two months."),t.qZA()()(),t.TgZ(10,"div",3),t.YNc(11,M,4,2,"div",4),t.qZA(),t.TgZ(12,"div",5)(13,"mat-icon"),t._uU(14,"chevron_left"),t.qZA(),t.TgZ(15,"button",6),t.NdJ("click",function(){return e.goBack()}),t._uU(16,"Back"),t.qZA()()()),2&o&&(t.xp6(5),t.AsE("(",e.symbol,") ",e.companyName,""),t.xp6(6),t.Q6J("ngForOf",t.DdM(3,P)))},dependencies:[m.sg,m.O5,r.xw,r.Wh,r.s9,r.yH,Z.lW,s.a8,s.dk,s.$j,s.n5,A.Hw,f],styles:[".sentiment-card[_ngcontent-%COMP%]{margin-top:20px;margin-left:10px;margin-right:10px}.sentiment-card-header[_ngcontent-%COMP%]{margin-bottom:10px}.company-sentiment-back-btn[_ngcontent-%COMP%]{margin-top:20px}.sentiment-card-item-no-data[_ngcontent-%COMP%]{margin-top:20px;margin-left:10px;margin-right:10px;min-height:130px}"]})}var l=c(4006);class Q{static whiteSpace(){return n=>(n.value||"").match(/\s/g)?{whitespace:!0}:null}}var L=c(5698),E=c(9841),Y=c(8505),$=c(2738),B=c(4144),q=c(9549);function G(a,n){1&a&&(t.TgZ(0,"mat-icon",17),t._uU(1,"trending_up"),t.qZA())}function K(a,n){1&a&&(t.TgZ(0,"mat-icon",18),t._uU(1,"trending_down"),t.qZA())}function j(a,n){if(1&a&&(t.ynx(0),t.TgZ(1,"div",14),t.YNc(2,G,2,0,"mat-icon",15),t.YNc(3,K,2,0,"mat-icon",16),t.qZA(),t.BQk()),2&a){const o=t.oxw();t.xp6(1),t.Q6J("ngSwitch",o.company.quote.d>0),t.xp6(1),t.Q6J("ngSwitchCase",!0),t.xp6(1),t.Q6J("ngSwitchCase",!1)}}function H(a,n){1&a&&(t.TgZ(0,"div")(1,"mat-icon",19),t._uU(2,"error_outline"),t.qZA()())}const R=function(a){return["/sentiment",a]},W=function(a){return{companyName:a}};class S{constructor(){this.removeSymbolEvent=new t.vpe}set company(n){n&&(this._company=n)}get company(){return this._company}removeSymbol(n){this.removeSymbolEvent.emit(n)}static#t=this.\u0275fac=function(o){return new(o||S)};static#n=this.\u0275cmp=t.Xpm({type:S,selectors:[["app-company-stock-item"]],inputs:{company:"company"},outputs:{removeSymbolEvent:"removeSymbolEvent"},decls:49,vars:29,consts:[["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","30px"],["fxLayout","column","fxLayoutGap","10px","fxFlex","80%"],[1,"company-stock-title"],["fxLayout","column","fxLayoutGap","10px"],["mat-button","",3,"id","click"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px",1,"company-stock-list-card"],["fxFlex","80%","fxLayout","column","fxLayoutGap","20px"],["fxLayout","row","fxLayoutAlign","space-between center","fxLayoutGap","20px"],["fxFlex","50%"],["fxFlex","20%","fxLayout","column","fxLayoutAlign","center center"],[4,"ngIf","ngIfElse"],["noCompanyData",""],["fxLayout","row","fxLayoutAlign","end center","fxFlex","100%"],["mat-button","",3,"id","routerLink","queryParams"],[3,"ngSwitch"],["color","primary","class","icon-trending change-positive",4,"ngSwitchCase"],["color","warn","class","icon-trending change-negative",4,"ngSwitchCase"],["color","primary",1,"icon-trending","change-positive"],["color","warn",1,"icon-trending","change-negative"],[1,"icon-trending","icon-trending-no-data"]],template:function(o,e){if(1&o&&(t.TgZ(0,"mat-card")(1,"div",0)(2,"div",1)(3,"mat-card-title",2),t._uU(4),t.qZA()(),t.TgZ(5,"div",3)(6,"button",4),t.NdJ("click",function(){return e.removeSymbol(e.company.stockSymbol.symbol)}),t.ALo(7,"uppercase"),t.TgZ(8,"mat-icon"),t._uU(9,"close"),t.qZA()()()(),t.TgZ(10,"mat-card-content",5)(11,"div",6)(12,"div",7)(13,"span",8)(14,"b"),t._uU(15,"Change today:"),t.qZA(),t._UZ(16,"br"),t._uU(17),t.ALo(18,"number"),t.qZA(),t.TgZ(19,"span",8)(20,"b"),t._uU(21,"Opening price:"),t.qZA(),t._UZ(22,"br"),t._uU(23),t.ALo(24,"currency"),t.qZA()(),t.TgZ(25,"div",7)(26,"span",8)(27,"b"),t._uU(28,"Current price:"),t.qZA(),t._UZ(29,"br"),t._uU(30),t.ALo(31,"currency"),t.qZA(),t.TgZ(32,"span",8)(33,"b"),t._uU(34,"High price:"),t.qZA(),t._UZ(35,"br"),t._uU(36),t.ALo(37,"currency"),t.qZA()()(),t.TgZ(38,"div",9),t.YNc(39,j,4,3,"ng-container",10),t.YNc(40,H,3,0,"ng-template",null,11,t.W1O),t.qZA()(),t.TgZ(42,"mat-card-actions")(43,"div",12)(44,"button",13),t.ALo(45,"uppercase"),t._uU(46,"See sentiment details"),t.qZA(),t.TgZ(47,"mat-icon"),t._uU(48,"chevron_right"),t.qZA()()()()),2&o){const i=t.MAs(41);t.xp6(4),t.AsE(" (",e.company.stockSymbol.symbol,") ",e.company.stockSymbol.description,""),t.xp6(2),t.s9C("id","remove"+t.lcZ(7,12,e.company.stockSymbol.symbol)),t.xp6(11),t.hij(" ",e.company.quote.d?t.xi3(18,14,e.company.quote.d,"1.0-2")+"%":"No data"," "),t.xp6(6),t.hij(" ",e.company.quote.o?t.lcZ(24,17,e.company.quote.o):"No data"," "),t.xp6(7),t.hij(" ",e.company.quote.c?t.lcZ(31,19,e.company.quote.c):"No data"," "),t.xp6(6),t.hij(" ",e.company.quote.h?t.lcZ(37,21,e.company.quote.h):"No data"," "),t.xp6(3),t.Q6J("ngIf",e.company.quote.d)("ngIfElse",i),t.xp6(5),t.s9C("id","sentiment"+t.lcZ(45,23,e.company.stockSymbol.symbol)),t.Q6J("routerLink",t.VKq(25,R,e.company.stockSymbol.symbol))("queryParams",t.VKq(27,W,e.company.stockSymbol.description))}},dependencies:[m.O5,m.RF,m.n9,r.xw,r.SQ,r.Wh,r.yH,Z.lW,s.a8,s.hq,s.dn,s.n5,A.Hw,y.rH,m.gd,m.JJ,m.H9],styles:[".icon-trending[_ngcontent-%COMP%]{transform:scale(3)}.change-positive[_ngcontent-%COMP%]{color:#00800080}.change-negative[_ngcontent-%COMP%]{color:#ff000080}.icon-trending-no-data[_ngcontent-%COMP%]{color:#00000080}.company-stock-title[_ngcontent-%COMP%]{margin-left:15px;margin-top:10px}.company-stock-list-card[_ngcontent-%COMP%]{margin-top:20px}"]})}function D(a,n){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Stock symbol is required "),t.qZA())}function z(a,n){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Stock symbol must be at least 1 character long "),t.qZA())}function V(a,n){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Stock symbol must be at most 5 characters long "),t.qZA())}function X(a,n){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Stock symbol is already tracked "),t.qZA())}function tt(a,n){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Stock symbol cannot contain leading or trailing whitespace "),t.qZA())}function nt(a,n){if(1&a){const o=t.EpF();t.TgZ(0,"div",12)(1,"app-company-stock-item",13),t.NdJ("removeSymbolEvent",function(i){t.CHM(o);const p=t.oxw();return t.KtG(p.removeSymbol(i))}),t.qZA()()}if(2&a){const o=n.$implicit;t.xp6(1),t.Q6J("company",o)}}class _{constructor(n,o,e){this.fb=n,this.stockTrackerService=o,this.localStorageService=e,this.companyStockCombined=[],this.localStorageKey="stockSymbolAndQuote",this.destroy$=new C.x,this.stockForm=n.group({symbol:["",[l.kI.required,l.kI.minLength(1),l.kI.maxLength(5),this.duplicateSymbolValidator.bind(this),Q.whiteSpace()]]})}ngOnInit(){this.getSymbols()}getSymbols(){const n=this.localStorageService.getItem(this.localStorageKey);n&&(this.companyStockCombined=JSON.parse(n))}addSymbol(){const n=this.stockForm.value.symbol?.toUpperCase();if(!n)return;const o=this.stockTrackerService.searchBySymbol(n).pipe((0,L.q)(1)),e=this.stockTrackerService.getQuote(n).pipe((0,L.q)(1));(0,E.a)([o,e]).pipe((0,h.R)(this.destroy$),(0,Y.b)(([i,p])=>{this.companyStockCombined=[...this.companyStockCombined,{stockSymbol:i.result[0],quote:p}],this.localStorageService.setItem(this.localStorageKey,JSON.stringify(this.companyStockCombined)),this.stockForm.reset()})).subscribe()}removeAllSymbols(){this.localStorageService.removeItem(this.localStorageKey),this.companyStockCombined=[]}removeSymbol(n){const o=this.companyStockCombined.findIndex(e=>e.stockSymbol.symbol===n);o>=0&&(this.companyStockCombined.splice(o,1),this.localStorageService.setItem(this.localStorageKey,JSON.stringify(this.companyStockCombined)))}duplicateSymbolValidator(n){if(!n.value)return null;const o=this.localStorageService.getItem(this.localStorageKey);return(o?JSON.parse(o):[]).find(i=>i.stockSymbol.symbol===n.value.toUpperCase())?{duplicate:!0}:null}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static#t=this.\u0275fac=function(o){return new(o||_)(t.Y36(l.qu),t.Y36(g),t.Y36($.n))};static#n=this.\u0275cmp=t.Xpm({type:_,selectors:[["app-stock-tracker"]],decls:28,vars:12,consts:[["fxLayout","column"],["fxLayout","column","fxLayoutAlign","center center",1,"stock-tracker-card"],[1,"stock-tracker-card-actions"],["fxLayout","row","fxLayout.lt-sm","column","fxLayoutGap","50px","fxLayoutGap.lt-sm","10px","fxLayoutAlign","center center"],[3,"formGroup"],["appearance","outline",1,"input-headline"],["id","stockInput","matInput","","placeholder","Enter stock symbol","formControlName","symbol"],[4,"ngIf"],["id","trackBtn","mat-raised-button","","color","primary",3,"disabled","click"],["mat-raised-button","","color","warn",3,"disabled","click"],["fxFill","","fxLayout","row wrap"],["fxFlex","25","fxFlex.md","33","fxFlex.sm","50","fxFlex.xs","100","fxLayout","column","class","company-stock-item",4,"ngFor","ngForOf"],["fxFlex","25","fxFlex.md","33","fxFlex.sm","50","fxFlex.xs","100","fxLayout","column",1,"company-stock-item"],[3,"company","removeSymbolEvent"]],template:function(o,e){if(1&o&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title")(4,"b"),t._uU(5),t.ALo(6,"uppercase"),t.qZA()(),t.TgZ(7,"mat-card-subtitle"),t._uU(8,"Enter the symbol of a stock to trag (i.e. AAPL., TSLA., GOOGL). "),t.TgZ(9,"strong"),t._uU(10,"Note"),t.qZA(),t._uU(11," the query will return the first result that matches the symbol of a stock"),t.qZA()(),t.TgZ(12,"mat-card-actions",2)(13,"div",3)(14,"form",4)(15,"mat-form-field",5),t._UZ(16,"input",6),t.YNc(17,D,2,0,"mat-error",7),t.YNc(18,z,2,0,"mat-error",7),t.YNc(19,V,2,0,"mat-error",7),t.YNc(20,X,2,0,"mat-error",7),t.YNc(21,tt,2,0,"mat-error",7),t.qZA()(),t.TgZ(22,"button",8),t.NdJ("click",function(){return e.addSymbol()}),t._uU(23,"Track Stock"),t.qZA(),t.TgZ(24,"button",9),t.NdJ("click",function(){return e.removeAllSymbols()}),t._uU(25,"Remove all tracked stocks"),t.qZA()()()(),t.TgZ(26,"div",10),t.YNc(27,nt,2,1,"div",11),t.qZA()()),2&o){let i,p,u,d,v;t.xp6(5),t.hij(" ",t.lcZ(6,10,"Stock Tracker")," "),t.xp6(9),t.Q6J("formGroup",e.stockForm),t.xp6(3),t.Q6J("ngIf",null==(i=e.stockForm.get("symbol"))?null:i.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(p=e.stockForm.get("symbol"))?null:p.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",null==(u=e.stockForm.get("symbol"))?null:u.hasError("maxlength")),t.xp6(1),t.Q6J("ngIf",null==(d=e.stockForm.get("symbol"))?null:d.hasError("duplicate")),t.xp6(1),t.Q6J("ngIf",null==(v=e.stockForm.get("symbol"))?null:v.hasError("whitespace")),t.xp6(1),t.Q6J("disabled",!e.stockForm.valid),t.xp6(2),t.Q6J("disabled",0===e.companyStockCombined.length),t.xp6(3),t.Q6J("ngForOf",e.companyStockCombined)}},dependencies:[m.sg,m.O5,r.xw,r.SQ,r.Wh,r.s9,r.yH,Z.lW,s.a8,s.hq,s.dk,s.$j,s.n5,B.Nt,q.KE,q.TO,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,S,m.gd],styles:[".stock-tracker-card[_ngcontent-%COMP%]{margin-top:20px;margin-left:10px;margin-right:10px}.company-stock-item[_ngcontent-%COMP%]{padding:10px}.stock-tracker-card-actions[_ngcontent-%COMP%]{margin-bottom:10px}.input-headline[_ngcontent-%COMP%]{font-size:14px}"]})}const et=[{path:"",component:_},{path:"sentiment/:symbol",component:x,canActivate:[U.v]}];class k{static#t=this.\u0275fac=function(o){return new(o||k)};static#n=this.\u0275mod=t.oAB({type:k});static#e=this.\u0275inj=t.cJS({imports:[y.Bz.forChild(et),y.Bz]})}class b{static#t=this.\u0275fac=function(o){return new(o||b)};static#n=this.\u0275mod=t.oAB({type:b});static#e=this.\u0275inj=t.cJS({imports:[F.m,k]})}}}]);