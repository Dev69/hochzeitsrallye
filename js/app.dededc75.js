(function(e){function t(t){for(var s,i,l=t[0],c=t[1],o=t[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={app:0},r=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/hochzeitsrallye/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Navi"),a("v-content",[a("router-view")],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{staticClass:"d-flex justify-center",attrs:{app:"",color:"primary",dark:""}},[a("v-icon",{attrs:{left:""}},[e._v("mdi-cards-heart")]),a("v-toolbar-title",{staticClass:"display-1"},[e._v("Hochzeitsrallye")]),a("v-icon",{attrs:{right:""}},[e._v("mdi-cards-heart")])],1)},l=[],c={name:"Nav"},o=c,u=a("2877"),f=a("6544"),d=a.n(f),p=a("40dc"),h=a("132d"),b=a("2a7f"),j=Object(u["a"])(o,i,l,!1,null,"58d50f6b",null),m=j.exports;d()(j,{VAppBar:p["a"],VIcon:h["a"],VToolbarTitle:b["a"]});var v={name:"App",data:function(){return{}},components:{Navi:m}},g=v,y=a("7496"),z=a("a75b"),_=Object(u["a"])(g,n,r,!1,null,null,null),x=_.exports;d()(_,{VApp:y["a"],VContent:z["a"]});var k=a("8c4f"),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("h3",{staticClass:"my-5"},[e._v("Liebe Kerrin und lieber Stephan,")]),a("p",{staticClass:"text-justify"},[e._v("Jetzt beginnt eure gemeinsame Reise als Ehepaar.")]),a("p",{staticClass:"text-justify"},[e._v("Die ersten kleinen Etappen dieser lange Reise warten in diesem Moment auf euch.")]),a("p",{staticClass:"text-justify"},[e._v("An jedem erreichten Etappenziel bekommt ihr ein Lösungswort genannt, welches euch das Ziel der nächsten Etappe verrät.")]),a("p",{staticClass:"text-justify"},[e._v("Helft eurem Fahrer das Ziel zu finden.")]),a("p",{staticClass:"text-justify"},[e._v("Behaltet die Zeit im Auge.")]),a("v-btn",{staticClass:"d-flex justify-center mt-10",attrs:{to:"/rallye"}},[e._v("Rallye starten")])],1)},w=[],E={name:"Home"},V=E,O=a("8336"),S=a("a523"),F=Object(u["a"])(V,C,w,!1,null,null,null),L=F.exports;d()(F,{VBtn:O["a"],VContainer:S["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("h1",{staticClass:"my-2 d-flex justify-center"},[e._v("Etappenübersicht")]),e._l(e.etappenziele,(function(e){return a("Etappenziel",{key:e.id,attrs:{nr:e.nr,zielbeschreibung:e.zielbeschreibung,wartende:e.wartende,dauer:e.geplanteraufenthaltinMinuten,codename:e.codename,zielerreicht:e.zielerreicht,zielankunft:e.zielankunft,geplanteankunft:e.geplanteankunft,googlemapsurl:e.googlemapsurl}})}))],2)},N=[],U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{staticClass:"pa-6 mx-auto",attrs:{"max-width":"600"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs10:""}},[a("p",{staticClass:"subtitle-1"},[e._v("Etappenziel Nr. "+e._s(e.nr))]),a("p",{staticClass:"headline"},[e._v(e._s(e.zielbeschreibung))])]),a("v-flex",{attrs:{xs2:""}},[a("v-btn",{staticClass:"float-right",attrs:{href:e.googlemapsurl,target:"_blank",fab:""}},[a("v-icon",[e._v("mdi-map")])],1)],1),a("v-flex",{attrs:{xs4:"","mt-2":""}},[a("p",{staticClass:"v-body"},[e._v("Personen:")])]),a("v-flex",{attrs:{xs8:"","mt-2":""}},[a("p",{staticClass:"v-body"},[e._v(e._s(e.wartende))])]),a("v-flex",{attrs:{xs7:"","mt-2":""}},[a("p",{staticClass:"v-body"},[e._v("Geplante Ankunft:")])]),a("v-flex",{attrs:{xs5:"","mt-2":""}},[a("p",{staticClass:"v-body"},[e._v(e._s(e.uhrzeit)+" Uhr")])]),a("v-flex",{attrs:{xs7:""}},[a("p",{staticClass:"v-body"},[e._v("Geplanter Aufenthalt:")])]),a("v-flex",{attrs:{xs5:""}},[a("p",{staticClass:"v-body"},[e._v(e._s(e.dauer)+" Minuten")])]),a("v-flex",{attrs:{xs7:""}},[a("p",{staticClass:"v-body"},[e._v("Lösungswort:")])]),a("v-flex",{attrs:{xs5:""}},[a("p",{staticClass:"v-body font-weight-bold"},[e._v(e._s(e.codename))])]),a("v-flex",{attrs:{xs7:""}},[a("p",[e._v("Lösungsworteingabe:")])]),a("v-flex",{attrs:{xs5:""}},[a("p",[e._v(e._s(e.loesungszeit))])]),a("v-flex",{attrs:{xs12:""}},[e.zielerreicht?e._e():a("div",{staticClass:"red lighten-2 white--text pa-1 text-center roun "},[e._v("Etappe noch nicht abgeschlossen")]),e.zielerreicht?a("div",{staticClass:"green lighten-2 white--text pa-1 text-center"},[e._v("Etappe abgeschlossen")]):e._e()])],1)],1)],1)},M=[],H=(a("a9e3"),a("c1df")),P=a.n(H),T={name:"Etappenziel",props:{nr:Number,zielbeschreibung:String,wartende:String,googlemapsurl:String,codename:String,zielerreicht:Boolean,geplanteankunft:String,zielankunft:String,dauer:Number},methods:{format_date:function(e){if(e)return P()(String(e),P.a.defaultFormatUtc).format("hh:mm")}},computed:{uhrzeit:function(){return P()(String(this.geplanteankunft),P.a.defaultFormatUtc).format("hh:mm")},loesungszeit:function(){return this.zielankunft?P()(String(this.zielankunft),P.a.defaultFormatUtc).format("hh:mm")+" Uhr":"Noch nicht."}}},B=T,$=a("b0af"),I=a("0e8f"),R=a("a722"),D=Object(u["a"])(B,U,M,!1,null,"7e778543",null),G=D.exports;d()(D,{VBtn:O["a"],VCard:$["a"],VContainer:S["a"],VFlex:I["a"],VIcon:h["a"],VLayout:R["a"]});var Z=a("bc3a"),J=a.n(Z),q={name:"Status.vue",data:function(){return{etappenziele:[]}},created:function(){var e=this;J.a.get("/etappen/").then((function(t){e.etappenziele=t.data})).catch((function(e){return console.log(e)}))},components:{Etappenziel:G}},K=q,W=Object(u["a"])(K,A,N,!1,null,"257c72aa",null),Q=W.exports;d()(W,{VContainer:S["a"]});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[e.isLoading?a("div",[a("v-progress-circular",{staticClass:"justify-center",attrs:{size:70,width:7,color:"red",indeterminate:""}})],1):a("div",[null!=e.aktuelleEtappe?a("div",[a("h2",{staticClass:"my-3 d-flex justify-center"},[e._v("Aktuelles Etappenziel")]),a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[a("v-card-subtitle",{staticClass:"overline font-weight-black"},[e._v("Etappenziel Nr. "+e._s(e.aktuelleEtappe.nr))]),a("v-card-title",{staticClass:"headline"},[e._v(e._s(e.aktuelleEtappe.zielbeschreibung))]),a("v-card-text",[a("p",[e._v("Geplante Ankunft: "+e._s(this.uhrzeit))]),a("p",[e._v("Geplanter Aufenthalt: "+e._s(e.aktuelleEtappe.geplanteraufenthaltinMinuten)+" Minuten")])]),a("v-card-actions",[a("v-btn",{attrs:{href:e.aktuelleEtappe.googlemapsurl,target:"_blank"}},[a("v-icon",{attrs:{left:""}},[e._v("mdi-map")]),e._v(" Karte anzeigen ")],1)],1)],1),a("v-card",{staticClass:"mx-auto my-6",attrs:{"max-width":"500"}},[a("v-card-title",{staticClass:"title justify-center"},[e._v("Nächste Etappe freischalten")]),a("v-card-text",[a("v-form",{ref:"form",staticClass:"px-5",attrs:{"justify-center":""}},[a("v-text-field",{attrs:{outlined:"",label:"Lösungswort"},model:{value:e.loesungswort,callback:function(t){e.loesungswort=t},expression:"loesungswort"}}),a("v-btn",{staticClass:"d-flex  justify-center",on:{click:e.beendeEtappe}},[e._v("Freischalten")])],1)],1)],1)],1):e._e(),null==e.aktuelleEtappe?a("div",[a("h1",{staticClass:"my-5 d-flex justify-center"},[e._v("Ziel erreicht!")]),a("p",{staticClass:" my-5 text-justify"},[e._v("Wir wünschen, dass euch dies immer gemeinsam durchs Leben führen wird:")]),a("v-list",e._l(e.etappenziele,(function(t){return a("v-list-item",{key:t.id},[a("v-list-item-content",[e._v(" "+e._s(t.codename))])],1)})),1)],1):e._e()])])},Y=[],ee={name:"Rallye",data:function(){return{etappenziele:[],isLoading:!0,loesungswort:""}},methods:{beendeEtappe:function(){for(var e=this,t=0;t<this.etappenziele.length;t++)if(this.etappenziele[t].id==this.aktuelleEtappe.id){if(this.etappenziele[t].codename.toUpperCase()===this.loesungswort.toUpperCase()){this.etappenziele[t].zielerreicht=!0;var a=new Date;this.etappenziele[t].zielankunft=a.toISOString(),console.log(this.etappenziele[t].zielankunft),J.a.put("etappen/"+this.etappenziele[t].id+"/",this.etappenziele[t]).then((function(t){console.log(t.status),e.refreshall()})).catch((function(t){console.log(t),e.refreshall()}))}return}},refreshall:function(){var e=this;this.isLoading=!0,this.loesungswort="",J.a.get("/etappen/").then((function(t){console.log("created"),e.etappenziele=t.data,e.etappenziele.sort((function(e,t){return e.nr-t.nr})),e.isLoading=!1,console.log("isLoading")})).catch((function(e){return console.log(e)}))}},created:function(){this.refreshall()},computed:{loadCompleted:function(){return this.isLoading},aktuelleEtappe:function(){for(var e=0;e<this.etappenziele.length;e++)if(console.log(this.etappenziele[e].nr),!this.etappenziele[e].zielerreicht)return this.etappenziele[e];return null},uhrzeit:function(){return null!=this.aktuelleEtappe?P()(String(this.aktuelleEtappe.geplanteankunft),P.a.defaultFormatUtc).format("hh:mm"):null}}},te=ee,ae=a("99d9"),se=a("4bd4"),ne=a("8860"),re=a("da13"),ie=a("5d23"),le=a("490a"),ce=a("8654"),oe=Object(u["a"])(te,X,Y,!1,null,"40a71208",null),ue=oe.exports;d()(oe,{VBtn:O["a"],VCard:$["a"],VCardActions:ae["a"],VCardSubtitle:ae["b"],VCardText:ae["c"],VCardTitle:ae["d"],VContainer:S["a"],VForm:se["a"],VIcon:h["a"],VList:ne["a"],VListItem:re["a"],VListItemContent:ie["a"],VProgressCircular:le["a"],VTextField:ce["a"]}),s["a"].use(k["a"]);var fe=[{path:"/",name:"Home",component:L,meta:{title:"Hochzeitsrallye Home"}},{path:"/rallye",name:"Rallye",component:ue,meta:{title:"Hochzeitsrallye"}},{path:"/status",name:"Status",component:Q,meta:{title:"Hochzeitsrallye Etappenübersicht"}}],de=new k["a"]({routes:fe});de.beforeEach((function(e,t,a){document.title=e.meta.title||"Hochzeitsrallye",a()}));var pe=de,he=a("f309"),be=a("0fe0"),je=a.n(be),me=a("fcf4");s["a"].use(he["a"]);var ve=new he["a"]({theme:{themes:{light:{primary:me["a"].red.darken4,secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{de:je.a},current:"de"}});s["a"].config.productionTip=!1,J.a.defaults.baseURL="https://peaceful-journey-15914.herokuapp.com/api",new s["a"]({router:pe,vuetify:ve,render:function(e){return e(x)}}).$mount("#app")}});
//# sourceMappingURL=app.dededc75.js.map