(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)i=s[d],o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/flowchart-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3053:function(e,t,n){"use strict";var r=n("d487"),o=n.n(r);o.a},3900:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".modal{border:1px solid #d3d3d3;box-shadow:2px 2px 1px #d3d3d3;background-color:#fff;position:absolute;top:100px;left:0;right:0;margin-left:auto;margin-right:auto}.form-control{display:block;width:100%;height:30px;margin-bottom:10px}.footer{padding:10px;text-align:right}.footer>button{margin-left:10px}.body,.header{padding:10px}.header{border-bottom:1px solid #d3d3d3}",""])},4134:function(e,t){e.exports={message:{start:"Start",end:"End",new:"New",pass:"Pass",noApprover:"No approver",etc:"..."}}},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("a026"),o=n("f23d"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"calc(100% - 50px)",padding:"10px"}},[n("div",{attrs:{id:"toolbar"}},[n("button",{on:{click:function(t){return e.$refs.chart.add(10,10)}}},[e._v("\n            Add(Double-click canvas)\n        ")]),n("button",{on:{click:function(t){return e.$refs.chart.remove()}}},[e._v("\n            Delete(Del)\n        ")]),n("button",{on:{click:function(t){return e.$refs.chart.editCurrent()}}},[e._v("\n            Edit(Double-click node)\n        ")]),n("button",{on:{click:function(t){return e.$refs.chart.save()}}},[e._v("\n            Save\n        ")])]),n("flow-chart",{ref:"chart",attrs:{nodes:e.nodes,connections:e.connections,width:"100%",height:"100%",readonly:!0},on:{editnode:e.handleEditNode,editconnection:e.handleEditConnection,save:e.handleChartSave}}),n("flow-chart-node-dialog",{attrs:{visible:e.nodeDialogVisible,node:e.editingInfo.target},on:{"update:visible":function(t){e.nodeDialogVisible=t},"update:node":function(t){return e.$set(e.editingInfo,"target",t)}}}),n("flow-chart-connection-dialog",{attrs:{visible:e.connectionDialogVisible,connection:e.connectionEditingInfo.target,operation:e.connectionEditingInfo.operation},on:{"update:visible":function(t){e.connectionDialogVisible=t},"update:connection":function(t){return e.$set(e.connectionEditingInfo,"target",t)}}})],1)},i=[],s=(n("96cf"),n("3b8d")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.visible?n("div",{staticClass:"modal",staticStyle:{width:"320px"}},[e._m(0),n("div",{staticClass:"body"},[n("label",{attrs:{for:"name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.connectionForm.name,expression:"connectionForm.name"}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:e.connectionForm.name},on:{input:function(t){t.target.composing||e.$set(e.connectionForm,"name",t.target.value)}}}),n("label",{attrs:{for:"type"}},[e._v("Type")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.connectionForm.type,expression:"connectionForm.type"}],staticClass:"form-control",attrs:{id:"type"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.connectionForm,"type",t.target.multiple?n:n[0])}}},e._l([{name:"Pass",id:"pass"},{name:"Reject",id:"reject"}],function(t){return n("option",{key:"connection-type-"+t.id,domProps:{value:t.id}},[e._v("\n                    "+e._s(t.name)+"\n                ")])}),0)]),n("div",{staticClass:"footer"},[n("button",{on:{click:e.handleClickCancelSaveConnection}},[e._v("Cancel")]),n("button",{on:{click:e.handleClickSaveConnection}},[e._v("Ok")])])]):e._e()])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("span",[e._v("Edit")])])}],u=(n("7f7f"),n("695b"),{props:{visible:{type:Boolean,default:!1},connection:{type:Object,default:null}},data:function(){return{connectionForm:{type:null,sourceId:null,sourcePosition:null,destinationId:null,destinationPosition:null,name:null,expression:null}}},methods:{handleClickSaveConnection:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$emit("update:visible",!1),this.$emit("update:connection",Object.assign(this.connection,{name:this.connectionForm.name,type:this.connectionForm.type,expression:this.connectionForm.expression}));case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleClickCancelSaveConnection:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$emit("update:visible",!1);case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},watch:{connection:{immediate:!0,handler:function(e){e&&(this.connectionForm.id=e.id,this.connectionForm.type=e.type,this.connectionForm.name=e.name,this.connectionForm.expression=e.expression)}}}}),d=u,f=n("2877"),h=Object(f["a"])(d,c,l,!1,null,null,null),p=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.visible?n("div",{staticClass:"modal",staticStyle:{width:"320px"}},[e._m(0),n("div",{staticClass:"body"},[n("label",{attrs:{for:"name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nodeForm.name,expression:"nodeForm.name"}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:e.nodeForm.name},on:{input:function(t){t.target.composing||e.$set(e.nodeForm,"name",t.target.value)}}}),n("label",{attrs:{for:"type"}},[e._v("Type")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.nodeForm.type,expression:"nodeForm.type"}],staticClass:"form-control",attrs:{id:"type"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.nodeForm,"type",t.target.multiple?n:n[0])}}},e._l([{name:"Start",id:"start"},{name:"End",id:"end"},{name:"Operation",id:"operation"}],function(t){return n("option",{key:"node-type-"+t.id,domProps:{value:t.id}},[e._v("\n                    "+e._s(t.name)+"\n                ")])}),0)]),n("div",{staticClass:"footer"},[n("button",{on:{click:e.handleClickCancelSaveNode}},[e._v("Cancel")]),n("button",{on:{click:e.handleClickSaveNode}},[e._v("Ok")])])]):e._e()])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("span",[e._v("Edit")])])}],v={props:{visible:{type:Boolean,default:!1},node:{type:Object,default:null}},data:function(){return{nodeForm:{name:null,id:null,type:null,approvers:[]}}},methods:{handleClickSaveNode:function(){this.$emit("update:node",Object.assign(this.node,{name:this.nodeForm.name,type:this.nodeForm.type,approvers:this.nodeForm.approvers.map(function(e){return Object.assign({},e)})})),this.$emit("update:visible",!1)},handleClickCancelSaveNode:function(){this.$emit("update:visible",!1)}},watch:{node:{immediate:!0,handler:function(e){e&&(this.nodeForm.id=e.id,this.nodeForm.name=e.name,this.nodeForm.type=e.type)}}}},g=v,y=Object(f["a"])(g,b,m,!1,null,null,null),k=y.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{width:isNaN(e.width)?e.width:e.width+"px",height:isNaN(e.height)?e.height:e.height+"px",cursor:e.cursor},attrs:{id:"chart"},on:{mousemove:e.handleChartMouseMove,mouseup:e.handleChartMouseUp,dblclick:function(t){return e.handleChartDblClick(t)}}},[n("span",{attrs:{id:"position"}},[e._v(e._s(e.cursorToChartOffset.x+", "+e.cursorToChartOffset.y))]),n("svg",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"svg"},on:{mousewheel:e.handleChartMouseWheel}})])},j=[],w=n("7618"),C=(n("c7c6"),n("ac4d"),n("8a81"),n("ac6a"),n("84b4"),n("c5f6"),n("5698"));function N(e,t,n,r,o,a){var i=(r-t||1)/(n-e||1),s=t-i*e;return Math.abs(i*o-a+s)/Math.sqrt(i*i+1)}function O(e,t,n){return n>e&&n<t||n>t&&n<e}function _(e,t){return Math.abs(t-e)<=3}function I(e,t,n,r,o,a,i,s){var c=[t,n],l=[r,o],u=C["c"]().x(function(e){return e[0]}).y(function(e){return e[1]}),d=C["d"]("#"+e),f=d.append("path").attr("stroke",i).attr("stroke-width",a).attr("fill","none").attr("d",u([c,l]));return s&&f.style("stroke-dasharray",s.join(",")),f}function T(e,t,n,r,o,a,i,s,c,l){var u,d=[],f=[t,n],h=[r,o],p=f[0]+(h[0]-f[0])/2,b=f[1]+(h[1]-f[1])/2,m=function(){var e=[p,u[1]],t=[p,C[1]];d.push(e),d.push(t)},v=function(){var e=[u[0],b],t=[C[0],b];d.push(e),d.push(t)},g=function(){d.push([u[0],f[1]-50]),d.push([C[0],f[1]-50])},y=function(){d.push([u[0],f[1]+50]),d.push([C[0],f[1]+50])},k=function(){d.push([f[0]+80,u[1]]),d.push([f[0]+80,C[1]])},x=function(){d.push([f[0]-80,u[1]]),d.push([f[0]-80,C[1]])},j=function(){d.push([u[0],C[1]])},w=function(){d.push([C[0],u[1]])};switch(a){case"left":u=[f[0]-20,f[1]];break;case"top":u=[f[0],f[1]-20];break;case"bottom":u=[f[0],f[1]+20];break;default:u=[f[0]+20,f[1]];break}var C=null;switch(i){case"right":C=[h[0]+20,h[1]];break;case"top":C=[h[0],h[1]-20];break;case"bottom":C=[h[0],h[1]+20];break;default:C=[h[0]-20,h[1]];break}d.push(f),d.push(u),a=a||"right",i=i||"left";var N=S(t,n,r,o);switch(N.indexOf("r")>-1&&("right"!==a&&"left"!==i||(u[0]>p&&(u[0]=p),C[0]<p&&(C[0]=p))),N.indexOf("d")>-1&&("bottom"!==a&&"top"!==i||(u[1]>b&&(u[1]=b),C[1]<b&&(C[1]=b))),N.indexOf("l")>-1&&("left"!==a&&"right"!==i||(u[0]<p&&(u[0]=p),C[0]>p&&(C[0]=p))),N.indexOf("u")>-1&&("top"!==a&&"bottom"!==i||(u[1]<b&&(u[1]=b),C[1]>b&&(C[1]=b))),N){case"lu":if("right"===a)switch(i){case"top":case"right":j();break;default:v();break}else if("bottom"===a)switch(i){case"top":m();break;default:w();break}else if("top"===a)switch(i){case"top":case"right":j();break;default:v();break}else switch(i){case"top":case"right":m();break;default:w();break}break;case"u":if("right"===a)switch(i){case"right":break;case"top":j();break;default:v();break}else if("bottom"===a)switch(i){case"left":case"right":w();break;default:k();break}else if("top"===a)switch(i){case"left":w();break;case"right":v();break;case"top":k();break;default:break}else switch(i){case"left":case"right":break;default:d.push([u[0],C[1]]);break}break;case"ru":if("right"===a)switch(i){case"left":m();break;case"top":j();break;default:w();break}else if("bottom"===a)switch(i){case"top":m();break;default:w();break}else if("top"===a)switch(i){case"right":m();break;default:j();break}else switch(i){case"left":case"top":j();break;default:v();break}break;case"l":if("right"===a)switch(i){case"left":case"right":case"top":g();break;default:y();break}else if("bottom"===a)switch(i){case"left":y();break;case"right":j();break;case"top":m();break;default:break}else if("top"===a)switch(i){case"left":g();break;case"right":j();break;case"top":break;default:m();break}else switch(i){case"left":g();break;case"right":break;default:j();break}break;case"r":if("right"===a)switch(i){case"left":break;case"right":g();break;default:j();break}else if("bottom"===a)switch(i){case"left":j();break;case"right":y();break;case"top":m();break;default:break}else if("top"===a)switch(i){case"left":w();break;case"right":g();break;case"top":break;default:m();break}else switch(i){case"left":case"right":case"top":g();break;default:y();break}break;case"ld":if("right"===a)switch(i){case"left":v();break;default:j();break}else if("bottom"===a)switch(i){case"left":w();break;case"top":v();break;default:j();break}else if("top"===a)switch(i){case"left":case"right":case"top":w();break;default:m();break}else switch(i){case"left":case"top":w();break;case"right":m();break;default:j();break}break;case"d":if("right"===a)switch(i){case"left":v();break;case"right":w();break;case"top":j();break;default:k();break}else if("bottom"===a)switch(i){case"left":case"right":w();break;case"top":break;default:k();break}else if("top"===a)switch(i){case"left":x();break;default:k();break}else switch(i){case"left":break;case"right":v();break;case"top":j();break;default:x();break}break;case"rd":"right"===a&&"left"===i?m():"right"===a&&"bottom"===i?j():"right"===a&&"top"===i||"right"===a&&"right"===i?w():"bottom"===a&&"left"===i?j():"bottom"===a&&"right"===i?w():"bottom"===a&&"top"===i?v():"bottom"===a&&"bottom"===i?j():"top"===a&&"left"===i?w():"top"===a&&"right"===i?w():"top"===a&&"top"===i?w():"top"===a&&"bottom"===i?m():"left"===a&&"left"===i?j():"left"===a&&"right"===i?v():"left"===a&&"top"===i?v():"left"===a&&"bottom"===i&&j();break}d.push(C),d.push(h);for(var O=[],_=[],T=0;T<d.length;T++){var F=d[T],E=d[T+1];O.push({sourceX:F[0],sourceY:F[1],destinationX:E[0],destinationY:E[1]});var z=T===d.length-2;if(z&&l){var P=M(e,F[0],F[1],E[0],E[1],s,c);_.push(P);break}var $=I(e,F[0],F[1],E[0],E[1],s,c);if(_.push($),z)break}return{lines:O,paths:_}}function M(e,t,n,r,o,a,i){var s=I(e,t,n,r,o,a,i),c=C["d"]("#"+e),l="arrow"+i,u=document.getElementById(l);return u||c.append("marker").attr("id",l).attr("markerUnits","strokeWidth").attr("viewBox","0 0 12 12").attr("refX",9).attr("refY",6).attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M2,2 L10,6 L2,10 L6,6 L2,2").attr("fill",i),s.attr("marker-end","url(#"+l+")"),s}function S(e,t,n,r){return n<e&&_(r,t)?"l":n>e&&_(r,t)?"r":_(n,e)&&r<t?"u":_(n,e)&&r>t?"d":n<e&&r<t?"lu":n>e&&r<t?"ru":n<e&&r>t?"ld":"rd"}n("f1ab");var F=n("a925");r["a"].use(F["a"]);var E=new F["a"]({locale:"zh",messages:{en:n("4134"),zh:n("7769")}}),z={name:"flow-chart",props:{nodes:{type:Array,default:function(){return[{id:1,x:140,y:270,name:E.t("message.start"),type:"start"},{id:2,x:540,y:270,name:E.t("message.end"),type:"end"}]}},connections:{type:Array,default:function(){return[{source:{id:1,position:"right"},destination:{id:2,position:"left"},id:1,type:"pass"}]}},width:{type:[String,Number],default:800},height:{type:[String,Number],default:600},locale:{type:String,default:"en"},readonly:{type:Boolean,default:!1}},data:function(){return{internalNodes:[],internalConnections:[],movingInfo:{offsetX:null,offsetY:null},connectingInfo:{source:null,sourcePosition:null},currentNode:null,currentConnection:null,cursorToChartOffset:{x:0,y:0},clickedOnce:!1,lines:[]}},methods:{add:function(e,t){if(!this.readonly){var n=E.t("message.new");this.internalNodes.push({id:+new Date,x:e,y:t,name:n,type:"operation"})}},editCurrent:function(){this.currentNode?this.editNode(this.currentNode):this.currentConnection&&this.editConnection(this.currentConnection)},editNode:function(e){this.readonly||this.$emit("editnode",e)},editConnection:function(e){this.readonly||this.$emit("editconnection",e)},handleChartMouseWheel:function(e){if(e.stopPropagation(),e.preventDefault(),e.ctrlKey){var t=document.getElementById("chart"),n=parseFloat(t.style.zoom||1);if(e.deltaY>0&&.1===n)return;n-=e.deltaY/100/10,t.style.zoom=n}},handleChartMouseUp:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.movingInfo.target){e.next=10;break}return this.movingInfo.target.x=10*Math.round(Math.round(this.movingInfo.target.x)/10),this.movingInfo.target.y=10*Math.round(Math.round(this.movingInfo.target.y)/10),this.movingInfo.target=null,this.movingInfo.offsetX=null,this.movingInfo.offsetY=null,t=this,e.next=9,t.refresh();case 9:return e.abrupt("return");case 10:this.connectingInfo.source&&(this.hoveredConnector&&this.connectingInfo.source.id!==this.hoveredConnector.node.id&&(n=+new Date,r={source:{id:this.connectingInfo.source.id,position:this.connectingInfo.sourcePosition},destination:{id:this.hoveredConnector.node.id,position:this.hoveredConnector.position},id:n,type:"pass",name:E.t("message.pass")},this.internalConnections.push(r),this.refresh()),this.connectingInfo.source=null,this.connectingInfo.sourcePosition=null);case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleChartMouseMove:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r,o,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.currentTarget.getBoundingClientRect(),r=t.pageX-n.left-window.scrollX,this.cursorToChartOffset.x=Math.trunc(r),o=t.pageY-n.top-window.scrollY,this.cursorToChartOffset.y=Math.trunc(o),!this.connectingInfo.source){e.next=13;break}return e.next=8,this.refresh();case 8:a=this.getNodeConnectorOffset(this.connectingInfo.source.id,this.connectingInfo.sourcePosition),i=this.hoveredConnector?this.hoveredConnector.position:null,this.arrowTo(a.x,a.y,this.cursorToChartOffset.x,this.cursorToChartOffset.y,this.connectingInfo.sourcePosition,i),e.next=15;break;case 13:return e.next=15,this.refresh();case 15:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleChartDblClick:function(e){this.readonly||(this.add(e.offsetX,e.offsetY),this.refresh())},getConnectorPosition:function(e){var t={x:e.x+60,y:e.y},n={x:e.x,y:e.y+30},r={x:e.x+60,y:e.y+60},o={x:e.x+120,y:e.y+30};return{left:n,right:o,top:t,bottom:r}},refresh:function(){var e=this;return new Promise(function(t){e.$nextTick(function(){C["e"]("svg > *").remove();var n=e.connectingInfo.source||e.hoveredNode;e.internalNodes.forEach(function(t){t===e.currentNode?e.renderNode(t,"#666666",n):e.renderNode(t,"#bbbbbb",n)}),e.lines=[],e.internalConnections.forEach(function(t){var n=e.getNodeConnectorOffset(t.source.id,t.source.position),r=e.getNodeConnectorOffset(t.destination.id,t.destination.position),o={pass:"#52c41a",reject:"red"};t===e.currentConnection&&(o={pass:"#12640a",reject:"darkred"});var a=e.arrowTo(n.x,n.y,r.x,r.y,t.source.position,t.destination.position,o[t.type]),i=!0,s=!1,c=void 0;try{for(var l,u=a.paths[Symbol.iterator]();!(i=(l=u.next()).done);i=!0){var d=l.value;d.on("click",function(){e.currentNode=null,e.currentConnection=t,e.refresh()}),d.on("dblclick",function(){e.editConnection(t)})}}catch(g){s=!0,c=g}finally{try{i||null==u.return||u.return()}finally{if(s)throw c}}var f=!0,h=!1,p=void 0;try{for(var b,m=a.lines[Symbol.iterator]();!(f=(b=m.next()).done);f=!0){var v=b.value;e.lines.push({sourceX:v.sourceX,sourceY:v.sourceY,destinationX:v.destinationX,destinationY:v.destinationY,id:t.id})}}catch(g){h=!0,p=g}finally{try{f||null==m.return||m.return()}finally{if(h)throw p}}}),t()})})},getNodeConnectorOffset:function(e,t){var n=this.internalNodes.filter(function(t){return t.id===e})[0];return this.getConnectorPosition(n)[t]},lineTo:function(e,t,n,r,o){I("svg",e,t,n,r,1,"#a3a3a3",o)},arrowTo:function(e,t,n,r,o,a,i){return T("svg",e,t,n,r,o,a,1,i||"#a3a3a3",!0),T("svg",e,t,n,r,o,a,5,"transparent",!1)},renderNode:function(e,t,n){var r=this,o=C["d"]("#svg");"start"!==e.type&&"end"!==e.type&&(o.append("rect").attr("x",e.x).attr("y",e.y).attr("width",120).attr("height",20).attr("stroke",t).attr("stroke-width","1px").attr("fill","#f1f3f4"),o.append("text").attr("x",e.x+4).attr("y",e.y+15).attr("class","unselectable").text(function(){return e.name}).each(function(){var e=C["d"](this),t=e.node().getComputedTextLength(),n=e.text();while(t>112&&n.length>0)n=n.slice(0,-1),e.text(n+"..."),t=e.node().getComputedTextLength()}));var a=null;"start"!==e.type&&"end"!==e.type?(a=o.append("rect"),a.attr("x",e.x).attr("y",e.y+20).attr("width",120).attr("height",40)):(a=o.append("ellipse"),a.attr("cx",e.x+60).attr("cy",e.y+30).attr("rx",60).attr("ry",30)),a.attr("stroke",t).attr("stroke-width","1px").attr("fill","white");var i,c="start"===e.type?E.t("message.start"):"end"===e.type?E.t("message.end"):e.approvers&&0!==e.approvers.length?e.approvers.length>1?"".concat(e.approvers[0].name+E.t("message.etc")):e.approvers[0].name:E.t("message.noApprover");i="start"!==e.type&&"end"!==e.type?e.y+45:e.y+35,o.append("text").attr("x",e.x+60).attr("y",i).attr("class","unselectable").attr("text-anchor","middle").text(function(){return c}).each(function(){var e=C["d"](this),t=e.node().getComputedTextLength(),n=e.text();while(t>112&&n.length>0)n=n.slice(0,-1),e.text(n+"..."),t=e.node().getComputedTextLength()});var l=C["a"]().on("start",function(){if(r.currentConnection=null,r.currentNode=e,r.clickedOnce)r.editNode(e);else{var t=setTimeout(function(){r.clickedOnce=!1,clearTimeout(t)},300);r.clickedOnce=!0}r.movingInfo.offsetX=r.cursorToChartOffset.x-e.x,r.movingInfo.offsetY=r.cursorToChartOffset.y-e.y}).on("drag",Object(s["a"])(regeneratorRuntime.mark(function t(){var n,o,a,i,s,c,l,u,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!r.readonly){t.next=2;break}return t.abrupt("return");case 2:return n=C["b"],o=n.x,a=n.y,e.x=o-r.movingInfo.offsetX,e.y=a-r.movingInfo.offsetY,i=document.getElementById("chart"),s=i.clientWidth,c=i.clientHeight,e.x>s-120&&(e.x=s-120),e.x<0&&(e.x=0),e.y>c-60&&(e.y=c-60),e.y<0&&(e.y=0),t.next=14,r.refresh();case 14:l=10*Math.round(Math.round(e.x)/10),u=10*Math.round(Math.round(e.y)/10),d=[5,3],r.internalNodes.forEach(function(t){t.id!==e.id&&(t.x===l&&(t.y<u?r.lineTo(t.x,t.y+60,l,u,d):r.lineTo(l,u+60,t.x,t.y,d)),t.y===u&&(t.x<l?r.lineTo(t.x+120,t.y,l,u,d):r.lineTo(l+120,u,t.x,t.y,d)))});case 18:case"end":return t.stop()}},t)}))).on("end",function(){e.x=10*Math.round(Math.round(e.x)/10),e.y=10*Math.round(Math.round(e.y)/10),r.refresh()}),u=null;if("start"===e.type||"end"===e.type?(u=o.append("ellipse"),u.attr("cx",e.x+60).attr("cy",e.y+30).attr("rx",60).attr("ry",30)):(u=o.append("rect"),u.attr("x",e.x).attr("y",e.y).attr("width",120).attr("height",60)),u.attr("stroke",t).attr("stroke-width","1px").style("cursor","move").attr("fill","transparent").call(l),n){var d=this.getConnectorPosition(e),f=function(t){var n=d[t],a=o.append("circle").attr("cx",n.x).attr("cy",n.y).attr("r",4).attr("stroke","#bbbbbb").attr("stroke-width","1px").attr("fill","white").style("cursor","crosshair");a.on("mousedown",function(){C["b"].stopPropagation(),"end"===e.type||r.readonly||(r.connectingInfo.source=e,r.connectingInfo.sourcePosition=t)}).on("mouseup",function(){if(C["b"].stopPropagation(),r.connectingInfo.source){if(r.connectingInfo.source.id!==e.id){var n=+new Date,o={source:{id:r.connectingInfo.source.id,position:r.connectingInfo.sourcePosition},destination:{id:e.id,position:t},id:n,type:"pass",name:E.t("message.pass")};r.internalConnections.push(o),r.refresh()}r.connectingInfo.source=null,r.connectingInfo.sourcePosition=null}})};for(var h in d)f(h)}},save:function(){this.readonly||this.$emit("save",this.internalNodes,this.internalConnections)},remove:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n,r,o,a,i,s,c,l=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.readonly){e.next=2;break}return e.abrupt("return");case 2:if(!this.currentNode){e.next=27;break}for(t=this.internalConnections.filter(function(e){return e.source.id===l.currentNode.id||e.destination.id===l.currentNode.id}),n=!0,r=!1,o=void 0,e.prev=7,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0)s=i.value,this.internalConnections.splice(this.internalConnections.indexOf(s),1);e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](7),r=!0,o=e.t0;case 15:e.prev=15,e.prev=16,n||null==a.return||a.return();case 18:if(e.prev=18,!r){e.next=21;break}throw o;case 21:return e.finish(18);case 22:return e.finish(15);case 23:this.internalNodes.splice(this.internalNodes.indexOf(this.currentNode),1),this.currentNode=null,e.next=28;break;case 27:this.currentConnection&&(c=this.internalConnections.indexOf(this.currentConnection),this.internalConnections.splice(c,1),this.currentConnection=null);case 28:return e.next=30,this.refresh();case 30:case"end":return e.stop()}},e,this,[[7,11,15,23],[16,,18,22]])}));function t(){return e.apply(this,arguments)}return t}(),moveCurrentNode:function(e,t){this.currentNode&&!this.readonly&&(this.currentNode.x+=e,this.currentNode.y+=t)}},mounted:function(){var e=this;e.internalNodes.splice(0,e.internalNodes.length),e.internalConnections.splice(0,e.internalConnections.length),e.nodes.forEach(function(t){e.internalNodes.push(JSON.parse(JSON.stringify(t)))}),e.connections.forEach(function(t){e.internalConnections.push(JSON.parse(JSON.stringify(t)))}),e.refresh(),document.onkeydown=function(t){switch(t.keyCode){case 37:e.moveCurrentNode(-10,0);break;case 38:e.moveCurrentNode(0,-10);break;case 39:e.moveCurrentNode(10,0);break;case 40:e.moveCurrentNode(0,10);break;case 27:e.currentNode?e.currentNode=null:e.currentConnection&&(e.currentConnection=null);break;case 46:e.remove();break;default:break}e.refresh()}},created:function(){E.locale=this.locale},computed:{hoveredNode:function(){var e=this,t=this.internalNodes.filter(function(t){return t.x<=e.cursorToChartOffset.x&&t.x+120>=e.cursorToChartOffset.x&&t.y<=e.cursorToChartOffset.y&&t.y+60>=e.cursorToChartOffset.y});return t.length<=0?null:t[0]},hoveredConnector:function(){var e=!0,t=!1,n=void 0;try{for(var r,o=this.internalNodes[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var a=r.value,i=this.getConnectorPosition(a);for(var s in i){var c=i[s];if(Math.hypot(c.x-this.cursorToChartOffset.x,c.y-this.cursorToChartOffset.y)<10)return{position:s,node:a}}}}catch(l){t=!0,n=l}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}return null},hoveredConnection:function(){var e=this,t=!0,n=!1,r=void 0;try{for(var o,a=function(){var t=o.value,n=N(t.sourceX,t.sourceY,t.destinationX,t.destinationY,e.cursorToChartOffset.x,e.cursorToChartOffset.y);if(n<5&&O(t.sourceX-2,t.destinationX+2,e.cursorToChartOffset.x)&&O(t.sourceY-2,t.destinationY+2,e.cursorToChartOffset.y)){var r=e.internalConnections.filter(function(e){return e.id===t.id});return{v:r.length>0?r[0]:null}}},i=this.lines[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var s=a();if("object"===Object(w["a"])(s))return s.v}}catch(c){n=!0,r=c}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}return null},cursor:function(){return this.connectingInfo.source||this.hoveredConnector?"crosshair":null!=this.hoveredConnection?"pointer":null}},watch:{internalNodes:{immediate:!0,deep:!0,handler:function(){this.refresh()}}},i18n:E},P=z,$=Object(f["a"])(P,x,j,!1,null,null,null),D=$.exports,Y={components:{FlowChartConnectionDialog:p,FlowChartNodeDialog:k,FlowChart:D},data:function(){return{nodes:[{id:1,x:140,y:270,name:"Start",type:"start"},{id:2,x:540,y:270,name:"End",type:"end"},{id:3,x:340,y:180,name:"Operation",type:"operation"}],connections:[{source:{id:1,position:"right"},destination:{id:2,position:"left"},id:1,type:"pass"},{source:{id:1,position:"top"},destination:{id:3,position:"left"},id:2,type:"pass"},{source:{id:3,position:"right"},destination:{id:2,position:"top"},id:3,type:"pass"}],editingInfo:{target:null},connectionEditingInfo:{target:null,operation:null},nodeDialogVisible:!1,connectionDialogVisible:!1}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),methods:{handleChartSave:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),handleEditNode:function(e){this.editingInfo.target=e,this.nodeDialogVisible=!0},handleEditConnection:function(e){this.connectionEditingInfo.target=e,this.connectionDialogVisible=!0}}},R=Y,X=(n("3053"),Object(f["a"])(R,a,i,!1,null,"3159adae",null)),A=X.exports;n("202f");r["a"].config.productionTip=!1,r["a"].use(o["a"]),new r["a"]({el:"#app",mounted:function(){},components:{App:A}})},"695b":function(e,t,n){var r=n("3900");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("e65d5572",r,!0,{sourceMap:!1,shadowMode:!1})},7769:function(e,t){e.exports={message:{start:"开始",end:"结束",new:"新建节点",pass:"通过",noApprover:"无审核人",etc:"等"}}},9605:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"#toolbar[data-v-3159adae]{margin-bottom:10px}#toolbar>button[data-v-3159adae]{margin-right:4px}",""])},accf:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"#canvas{border:1px solid #a3a3a3;position:absolute}#chart{position:relative;width:800px;height:600px;background-size:10px 10px;background-image:linear-gradient(90deg,#f1f1f1 1px,transparent 0),linear-gradient(180deg,#f1f1f1 1px,transparent 0);background-position:left -1px top -1px;border:1px solid #f1f1f1}#position{position:absolute;right:4px}.unselectable{moz-user-select:-moz-none;-moz-user-select:none;-o-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}",""])},d487:function(e,t,n){var r=n("9605");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("fb513b72",r,!0,{sourceMap:!1,shadowMode:!1})},f1ab:function(e,t,n){var r=n("accf");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("cb1aa132",r,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.86b2888d.js.map