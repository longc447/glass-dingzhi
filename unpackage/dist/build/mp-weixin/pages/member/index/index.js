(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/index/index"],{"083c":function(e,t,n){"use strict";var r=n("3629"),o=n.n(r);o.a},3629:function(e,t,n){},"686e":function(e,t,n){"use strict";(function(e){n("d947");r(n("66fd"));var t=r(n("ee0c"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"697f":function(e,t,n){},"79bf":function(e,t,n){"use strict";n.r(t);var r=n("7c56"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},"7c56":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("6476")),o=u(n("be84")),i=u(n("a88e")),a=u(n("04b1"));function u(e){return e&&e.__esModule?e:{default:e}}function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(L){u=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=x(a,n);if(u){if(u===f)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=s;var f={};function d(){}function h(){}function g(){}var m={};u(m,o,(function(){return this}));var p=Object.getPrototypeOf,v=p&&p(p($([])));v&&v!==t&&n.call(v,o)&&(m=v);var y=g.prototype=d.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;this._invoke=function(o,i){function a(){return new t((function(r,a){(function r(o,i,a,u){var c=l(e[o],e,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return r("throw",e,a,u)}))}u(c.arg)})(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function x(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function $(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=g,u(y,"constructor",g),u(g,"constructor",h),h.displayName=u(g,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,a,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),u(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new w(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(y),u(y,a,"Generator"),u(y,o,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=$,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:$(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function s(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){s(i,r,o,a,u,"next",e)}function u(e){s(i,r,o,a,u,"throw",e)}a(void 0)}))}}var f={components:{uniGrid:function(){n.e("components/uni-grid/uni-grid").then(function(){return resolve(n("8d38"))}.bind(null,n)).catch(n.oe)},uniGridItem:function(){n.e("components/uni-grid-item/uni-grid-item").then(function(){return resolve(n("27f3"))}.bind(null,n)).catch(n.oe)},diyBottomNav:function(){n.e("components/diy-bottom-nav/diy-bottom-nav").then(function(){return resolve(n("a5bb"))}.bind(null,n)).catch(n.oe)},toTop:function(){n.e("components/toTop/toTop").then(function(){return resolve(n("dcd2"))}.bind(null,n)).catch(n.oe)},nsCopyRight:function(){n.e("components/ns-copyright/ns-copyright").then(function(){return resolve(n("23f0"))}.bind(null,n)).catch(n.oe)}},data:function(){return{token:"",memberInfo:{balance:0,balance_money:0,point:0},couponNum:0,orderNum:{waitPay:0,readyDelivery:0,waitDelivery:0,waitEvaluate:0,refunding:0},isVerification:!0,copyrightLoad:0,bottom_info:{},authInfo:{is_verifier:!1},shopTop:!1,scrollTop:0,shopConfig:null,promoterInfo:null,withdrawConfig:null,fenxiaoBasicsConfig:null,defaultInfo:{topStyle:"default",bgColor:"#ff454f",textColor:"#fff",bgImg:"",menuList:[],insertGap:"0",menuStyle:"palace",level:1},signState:1,evaluateConfig:{evaluate_audit:1,evaluate_show:0,evaluate_status:1},is_wholesaler:a.default.is_wholesaler}},mixins:[r.default,o.default,i.default],onLoad:function(){e.hideTabBar(),this.addonIsExit.memberwithdraw&&this.getWithdrawConfig(),this.addonIsExit.fenxiao&&this.getFenxiaoBasicsConfig(),this.getEvaluateConfig()},computed:{storeToken:function(){return this.$store.state.token},defaultBgColor:function(){var e="";return"default"!=this.defaultInfo.topStyle&&(e="background:"+this.defaultInfo.bgColor),e},defaultBgImg:function(){var e="";return e="default"!=this.defaultInfo.topStyle?this.defaultInfo.bgImg?this.$util.img(this.defaultInfo.bgImg):"":this.$util.img("upload/uniapp/member/index/member_bg.png"),e},defaultTextColor:function(){var e="";return"default"!=this.defaultInfo.topStyle&&(e="color:"+this.defaultInfo.textColor+" !important"),e}},watch:{storeToken:function(){var e=l(c().mark((function e(t,n){return c().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.addonIsExit.membersignin){e.next=3;break}return e.next=3,this.getSignState();case 3:return e.next=5,this.getMemberInfo();case 5:this.getOrderNum(),this.getCouponNum(),this.getWholesale(),this.checkIsVerifier();case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},onReady:function(){var e=this;return l(c().mark((function t(){return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.addonIsExit.membersignin){t.next=3;break}return t.next=3,e.getSignState();case 3:return t.next=5,e.getDefaultInfo();case 5:e.$refs.loadingCover&&e.$refs.loadingCover.hide();case 6:case"end":return t.stop()}}),t)})))()},onShow:function(){var t=this;return l(c().mark((function n(){return c().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.$langConfig.refresh(),t.token=e.getStorageSync("token"),e.getStorageSync("userInfo")&&(t.memberInfo=e.getStorageSync("userInfo")),e.getStorageSync("authInfo")&&(t.authInfo=e.getStorageSync("authInfo")),!t.token){n.next=16;break}if(!t.addonIsExit.membersignin){n.next=8;break}return n.next=8,t.getSignState();case 8:return n.next=10,t.getMemberInfo();case 10:t.getOrderNum(),t.getCouponNum(),t.getWholesale(),t.checkIsVerifier(),n.next=17;break;case 16:t.initInfo();case 17:t.$forceUpdate();case 18:case"end":return n.stop()}}),n)})))()},methods:{getWholesale:function(){var t=this;return l(c().mark((function n(){var r;return c().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.sendRequest({url:"/api/member/detail",async:!1});case 2:r=n.sent,console.log(r),0==r.code&&(t.is_wholesaler=r.is_wholesaler,e.setStorageSync("is_wholesaler",r.is_wholesaler));case 5:case"end":return n.stop()}}),n)})))()},getSignState:function(){var e=this;return l(c().mark((function t(){var n;return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.sendRequest({url:"/api/membersignin/getSignStatus",async:!1});case 2:n=t.sent,0==n.code&&(e.signState=n.data.is_use);case 4:case"end":return t.stop()}}),t)})))()},getDefaultInfo:function(){var e=this;return l(c().mark((function t(){var n;return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getWholesale();case 2:return t.next=4,e.$api.sendRequest({url:"/api/diyview/memberindex",async:!1});case 4:n=t.sent,0==n.code&&(3==e.is_wholesaler&&(n.data.menuList.splice(n.data.menuList.length-1,1),console.log(n.data.menuList)),console.log(n.data),e.defaultInfo.topStyle=n.data.topStyle,e.defaultInfo.bgColor=n.data.bgColor,e.defaultInfo.textColor=n.data.textColor,e.defaultInfo.bgImg=n.data.bgImg,e.defaultInfo.menuStyle=n.data.menuStyle,e.defaultInfo.menuList=n.data.menuList,e.defaultInfo.insertGap=n.data.insertGap,e.defaultInfo.level=n.data.level||1);case 6:case"end":return t.stop()}}),t)})))()},redirectToLink:function(t){e.getStorageSync("token")?this.$util.redirectTo(t):this.$refs.login.open(t)},initInfo:function(){this.token="",this.memberInfo={balance:"0.00",balance_money:"0.00",point:0},this.couponNum=0,this.orderNum={waitPay:0,readyDelivery:0,waitDelivery:0,waitEvaluate:0,refunding:0},this.authInfo={is_verifier:!1},e.stopPullDownRefresh()},getMemberInfo:function(){var t=this;return l(c().mark((function n(){var r;return c().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.sendRequest({url:"/api/member/info",async:!1});case 2:r=n.sent,console.info(r,"member"),r.code>=0&&r.data?(t.token=e.getStorageSync("token"),t.memberInfo=r.data,console.log(t.memberInfo,"memberinfo"),e.setStorageSync("userInfo",t.memberInfo)):(t.token="",t.initInfo(),e.removeStorageSync("token"),e.removeStorageSync("userInfo")),e.stopPullDownRefresh();case 6:case"end":return n.stop()}}),n)})))()},onPullDownRefresh:function(){e.getStorageSync("token")?this.getMemberInfo():this.initInfo()},getOrderNum:function(){var e=this;this.$api.sendRequest({url:"/api/order/num",data:{order_status:"waitpay,waitsend,waitconfirm,waitrate,refunding"},success:function(t){0==t.code&&(e.orderNum.waitPay=t.data.waitpay,e.orderNum.readyDelivery=t.data.waitsend,e.orderNum.waitDelivery=t.data.waitconfirm,e.orderNum.waitEvaluate=t.data.waitrate,e.orderNum.refunding=t.data.refunding),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getCouponNum:function(){var e=this;this.$api.sendRequest({url:"/api/member/couponnum",success:function(t){0==t.code&&(e.couponNum=t.data)}})},checkIsVerifier:function(){var t=this;this.$api.sendRequest({url:"/api/verify/checkisverifier",success:function(n){t.authInfo.is_verifier=0==n.code,e.setStorageSync("authInfo",t.authInfo),t.$forceUpdate()}})},jumpLevel:function(){e.getStorageSync("token")?this.$util.redirectTo("/otherpages/member/level/level"):this.$refs.login.open("/pages/member/index/index")},getWithdrawConfig:function(){var e=this;this.$api.sendRequest({url:"/api/memberwithdraw/config",success:function(t){t.code>=0&&t.data&&(e.withdrawConfig=t.data,e.$forceUpdate())}})},getFenxiaoBasicsConfig:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/config/basics",success:function(t){t.code>=0&&(e.fenxiaoBasicsConfig=t.data,e.$forceUpdate())}})},getEvaluateConfig:function(){var e=this;this.$api.sendRequest({url:"/api/goodsevaluate/config",success:function(t){if(0==t.code){var n=t.data;e.evaluateConfig=n}}})},menuIsShow:function(e){switch(e.tag){case"fenxiao":return 1==this.addonIsExit.fenxiao&&this.fenxiaoBasicsConfig&&this.fenxiaoBasicsConfig.level>0;case"memberwithdraw":return this.withdrawConfig&&1==this.withdrawConfig.is_use;case"membersignin":return 1==this.signState;case"verifier":return this.authInfo.is_verifier;default:return!0}}}};t.default=f}).call(this,n("543d")["default"])},bfdb:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var r={uniGrid:function(){return n.e("components/uni-grid/uni-grid").then(n.bind(null,"8d38"))},uniGridItem:function(){return n.e("components/uni-grid-item/uni-grid-item").then(n.bind(null,"27f3"))},iconKf:function(){return n.e("components/icon-kf/icon-kf").then(n.bind(null,"8a7b"))},nsCopyright:function(){return n.e("components/ns-copyright/ns-copyright").then(n.bind(null,"23f0"))},nsLogin:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-login/ns-login")]).then(n.bind(null,"8689"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"9257"))},diyBottomNav:function(){return n.e("components/diy-bottom-nav/diy-bottom-nav").then(n.bind(null,"a5bb"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.token&&e.memberInfo.headimg?e.$util.img(e.memberInfo.headimg):null),r=e.token&&!e.memberInfo.headimg?e.$util.getDefaultImage():null,o=e.token?null:e.$util.getDefaultImage(),i=e.token?null:e.$lang("login"),a=e.token?null:e.$lang("loginTpis"),u=(parseFloat(e.memberInfo.balance)+parseFloat(e.memberInfo.balance_money)).toFixed(2),c=e.$lang("balance"),s=parseInt(e.memberInfo.point),l=e.$lang("point"),f=e.$lang("coupon"),d=e.$lang("allOrders"),h=e.$lang("seeAllOrders"),g=e.$util.img("upload/uniapp/member/index/order/default_order_1.png"),m=e.$lang("waitPay"),p=e.$util.img("upload/uniapp/member/index/order/default_order_2.png"),v=e.$lang("readyDelivery"),y=e.$util.img("upload/uniapp/member/index/order/default_order_3.png"),b=e.$lang("waitDelivery"),w=e.$util.img("upload/uniapp/member/index/order/default_order_4.png"),x=e.$lang("waitEvaluate"),I=e.$util.img("upload/uniapp/member/index/order/default_order_5.png"),_=e.$lang("refunding"),S=1==e.defaultInfo.level?e.$util.img("upload/uniapp/member/index/member.png"):null,$=1==e.defaultInfo.level?e.$util.img("upload/uniapp/member/index/v.png"):null,k="palace"==e.defaultInfo.menuStyle?e.__map(e.defaultInfo.menuList,(function(t,n){var r=e.__get_orig(t),o=e.menuIsShow(t),i=o&&"servicer"!=t.tag?e.$util.img(t.img):null;return{$orig:r,m13:o,g11:i}})):null,L="list"==e.defaultInfo.menuStyle?e.__map(e.defaultInfo.menuList,(function(t,n){var r=e.__get_orig(t),o=e.menuIsShow(t),i=o&&"servicer"==t.tag?e.$util.img(t.img):null,a=o&&"servicer"!=t.tag?e.$util.img(t.img):null;return{$orig:r,m14:o,g12:i,g13:a}})):null;e._isMounted||(e.e0=function(t){return e.$util.redirectTo("/pages/member/info/info")},e.e1=function(t){e.memberInfo.headimg=e.$util.getDefaultImage().default_headimg},e.e2=function(t){return e.$util.redirectTo("/otherpages/member/level/level")}),e.$mp.data=Object.assign({},{$root:{g0:n,g1:r,g2:o,m0:i,m1:a,g3:u,m2:c,m3:s,m4:l,m5:f,m6:d,m7:h,g4:g,m8:m,g5:p,m9:v,g6:y,m10:b,g7:w,m11:x,g8:I,m12:_,g9:S,g10:$,l0:k,l1:L}})},i=[]},ddba:function(e,t,n){"use strict";var r=n("697f"),o=n.n(r);o.a},ee0c:function(e,t,n){"use strict";n.r(t);var r=n("bfdb"),o=n("79bf");for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("ddba"),n("083c");var a=n("f0c5"),u=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,"0451ac96",null,!1,r["a"],void 0);t["default"]=u.exports}},[["686e","common/runtime","common/vendor"]]]);