webpackJsonp([1],{"1/oy":function(t,s,e){var n=e("tJJw");"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("MTIv")(n,a);n.locals&&(t.exports=n.locals)},"1hAm":function(t,s){},"5cu4":function(t,s){},"9M+g":function(t,s,e){var n=e("G7o+");"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("MTIv")(n,a);n.locals&&(t.exports=n.locals)},AP35:function(t,s){},AUeC:function(t,s){},DQDF:function(t,s){t.exports=[{name:"OSU Energy Dashboard",images:["dashboard0.png","dashboard1.png","dashboard2.png"],description:"The OSU Energy Dashboard is a web application that focuses on providing real-time usage measurements of on campus buildings' utilities. The dashboard consists of a front-end made with Vue.js and a backend hosted on AWS running Node 10.7. This project was presented at the Washington Oregon Higher Education Sustainability Conference of 2019. The dashboard continues to serve the Oregon State University community as a means of tracking and measuring building energy usage.",links:[{text:"GitHub",href:"https://github.com/OSU-Sustainability-Office/energy-dashboard"},{text:"Live Link",href:"https://dashboard.sustainability.oregonstate.edu"}]},{name:"Discrete DRAM",images:["dram0.jpg","dram1.png","dram2.png"],description:"The Discrete DRAM project incorporated the team work of three people. In this project, the goal was to create a dynamic memory array with 40 bits. The control logic for this module was implemented on a FPGA. The memory had to be made of discrete components which proved to be an extra challenge."}]},Fc6n:function(t,s,e){var n=e("1hAm");"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("MTIv")(n,a);n.locals&&(t.exports=n.locals)},"G7o+":function(t,s){},GfHa:function(t,s,e){var n=e("Vnho");"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("MTIv")(n,a);n.locals&&(t.exports=n.locals)},Id91:function(t,s,e){var n=e("nivm");"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("MTIv")(n,a);n.locals&&(t.exports=n.locals)},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),a=e("BO1k"),i=e.n(a),r={props:["color"],mounted:function(){var t=0,s=0,e=!0,n=!1,a=void 0;try{for(var r,o=i()(this.$refs.bar);!(e=(r=o.next()).done);e=!0){var c=r.value,l=199/15*(1-t/12);c.style.height=l.toString()+"px",c.style.top=s.toString()+"px",s+=l*(t/12+.1),t++}}catch(t){n=!0,a=t}finally{try{!e&&o.return&&o.return()}finally{if(n)throw a}}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},t._l(Array(12),function(s){return e("div",{key:s,ref:"bar",refInFor:!0,staticClass:"row bar",style:"background-color: "+t.color},[t._v("\n       \n    ")])}))])},staticRenderFns:[]};var c=e("VU/8")(r,o,!1,function(t){e("AUeC")},"data-v-15ae1cbf",null).exports,l=e("DQDF"),d=e.n(l),u={props:["activeIndex"],data:function(){return{projects:d.a}},methods:{clicked:function(t){this.activeIndex=t,this.$emit("changeProject",t)}}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},t._l(t.projects,function(s,n){return e("div",{key:n,staticClass:"inline"},[e("b-btn",{class:[t.activeIndex===n?"button selected":"button"],on:{click:function(s){t.$emit("selection",n)}}},[t._v(t._s(s.name))])],1)}))},staticRenderFns:[]};var f={props:["activeIndex"],components:{bar:c},data:function(){return{projects:d.a}},created:function(){}},j={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row top"},[e("div",{staticClass:"col-12 mainArea"},[e("div",{staticClass:"row texture"},[e("div",{staticClass:"col-12 title"},[e("h2",[t._v(t._s(t.projects[t.activeIndex].name))])])]),t._v(" "),e("div",{staticClass:"d-flex imageScroll"},t._l(t.projects[t.activeIndex].images,function(t,s){return e("div",{key:s,staticClass:"inline"},[e("img",{staticClass:"image",attrs:{src:"/static/"+t}})])})),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 desc"},[t._v("\n        "+t._s(t.projects[t.activeIndex].description)+"\n      ")])]),t._v(" "),e("div",{staticClass:"row links"},t._l(t.projects[t.activeIndex].links,function(s,n){return e("div",{key:n,staticClass:"inline"},[e("b-btn",{staticClass:"button",attrs:{href:s.href}},[t._v(t._s(s.text))])],1)}))])])},staticRenderFns:[]};var m={name:"home",components:{bar:c,projectSelector:e("VU/8")(u,v,!1,function(t){e("WmGG")},"data-v-78e2ab2d",null).exports,projectViewer:e("VU/8")(f,j,!1,function(t){e("saym")},"data-v-593c5296",null).exports},data:function(){return{activeIndex:0}},methods:{},mounted:function(){var t=this,s=0;this.$nextTick(function(){!function e(){t.$refs.spinMe.style&&(t.$refs.spinMe.style["-webkit-transform"]="rotateY("+s+"deg)",s+=15,setTimeout(function(){e()},500))}()})}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid home",attrs:{id:"main"}},[e("div",{staticClass:"row",staticStyle:{height:"100%"}},[e("div",{staticClass:"mainPageDirectory col-lg-3"},[e("div",{staticClass:"row texture top"}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{ref:"spinMe",staticClass:"spinner"},[t._m(1)])]),t._v(" "),e("div",{staticClass:"row linkRow"},[e("div",{staticClass:"col-12"},[e("b-btn",{staticClass:"mainPageLink",attrs:{href:"/static/resume.pdf"}},[t._v("\n            Resume\n          ")])],1)]),t._v(" "),e("div",{staticClass:"row linkRow"},[e("div",{staticClass:"col-12"},[e("b-btn",{staticClass:"mainPageLink",attrs:{href:"https://github.com/broha22"}},[t._v("\n            GitHub\n          ")])],1)]),t._v(" "),e("div",{staticClass:"row linkRow"},[e("div",{staticClass:"col-12"},[e("b-btn",{staticClass:"mainPageLink",attrs:{href:"https://www.linkedin.com/in/broganminer/"}},[t._v("\n            LinkedIn\n          ")])],1)]),t._v(" "),e("div",{staticClass:"row texture bottom"})]),t._v(" "),e("div",{staticClass:"col-lg-9"},[e("bar",{attrs:{color:"#05ffa1"}}),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("projectSelector",{attrs:{activeIndex:t.activeIndex},on:{selection:function(s){t.activeIndex=s}}})],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("projectViewer",{attrs:{activeIndex:t.activeIndex}})],1)])],1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row start"},[s("div",{staticClass:"mainPageNameText col-12"},[s("h2",[this._v("Brogan Miner")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"mainPageTriangleOutline"},[s("img",{staticClass:"mainPageTrianglePic"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row projectTitleRow"},[s("div",{staticClass:"col-12 projectTitle"},[s("h1",[this._v("Projects")])])])}]};var p={name:"App",components:{home:e("VU/8")(m,h,!1,function(t){e("OJgF")},"data-v-67efd5f8",null).exports},data:function(){return{}},methods:{},mounted:function(){}},g={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("home")],1)},staticRenderFns:[]};var b=e("VU/8")(p,g,!1,function(t){e("AP35"),e("5cu4")},"data-v-269ac0b3",null).exports,y=(e("K3J8"),e("e6fC")),w=e("/vKR"),k=e("F7tv"),x=e.n(k);e("9M+g"),e("alne");n.a.use(y.a),n.a.use(w.default),n.a.use(x.a),n.a.config.productionTip=!1,new n.a({el:"#app",render:function(t){return t(b)}})},OJgF:function(t,s){},Vnho:function(t,s){},WmGG:function(t,s){},alne:function(t,s){t.exports={primary:"#05ffa1",secondary:"#01cdfe",info:"#b967ff",dark:"#fffb96"}},fMnH:function(t,s){},nivm:function(t,s){},saym:function(t,s){},tJJw:function(t,s){},uslO:function(t,s,e){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return e(i(t))}function i(t){var s=n[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="uslO"},zj2Q:function(t,s,e){var n=e("fMnH");"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("MTIv")(n,a);n.locals&&(t.exports=n.locals)}},["NHnr"]);
//# sourceMappingURL=app.1c7ef2975486641460c3.js.map