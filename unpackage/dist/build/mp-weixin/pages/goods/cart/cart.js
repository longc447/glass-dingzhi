(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/cart/cart"],{"0ffc":function(t,e,n){"use strict";var r=n("f09b"),o=n.n(r);o.a},"9e1d":function(t,e,n){"use strict";(function(t){n("d947");r(n("66fd"));var e=r(n("c4a7"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},c4a7:function(t,e,n){"use strict";n.r(e);var r=n("d0fd"),o=n("f076");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("0ffc"),n("f886");var a=n("f0c5"),c=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,"362159c2",null,!1,r["a"],void 0);e["default"]=c.exports},d0fd:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={skuList:function(){return n.e("components/sku-list/sku-list").then(n.bind(null,"1e2b"))},uniNumberBox:function(){return n.e("components/uni-number-box/uni-number-box").then(n.bind(null,"276f"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"9257"))},diyBottomNav:function(){return n.e("components/diy-bottom-nav/diy-bottom-nav").then(n.bind(null,"a5bb"))},nsLogin:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-login/ns-login")]).then(n.bind(null,"8689"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.isAction?t.$lang("complete"):null),r=t.isAction?null:t.$lang("edit"),o=t.hasData?t.__map(t.cartData,(function(e,n){var r=t.__get_orig(e),o=t.$lang("del"),i=t.__map(e.cartList,(function(e,n){var r=t.__get_orig(e),o=1==e.promotion_type?t.$lang("common.currencySymbol"):null,i=1==e.promotion_type?t.$util.img("upload/uniapp/index/discount.png"):null,a=1!=e.promotion_type?t.$lang("common.currencySymbol"):null,c=t.initNum(e);return{$orig:r,m2:o,g0:i,m3:a,m4:c}}));return{$orig:r,m5:o,l0:i}})):null,i=t.$lang("common.currencySymbol"),a=t.hasData&&t.invalidGoods.length?t.__map(t.invalidGoods,(function(e,n){var r=t.__get_orig(e),o=t.$util.img(e.sku_image,{size:"mid"});return{$orig:r,g1:o}})):null,c=t.hasData?null:t.$util.img("upload/uniapp/common-empty.png"),s=t.hasData?null:t.$lang("emptyTips"),u=t.hasData?t.$lang("allElection"):null,l=t.hasData?t.$lang("total"):null,h=t.hasData?t.$lang("common.currencySymbol"):null,f=t.hasData&&t.isAction?t.$lang("del"):null,d=t.hasData&&!t.isAction&&0!=t.totalCount?t.$lang("settlement"):null,m=t.hasData&&!t.isAction&&0==t.totalCount?t.$lang("settlement"):null;t._isMounted||(t.e0=function(e){return t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}),t.$mp.data=Object.assign({},{$root:{m0:n,m1:r,l1:o,m6:i,l2:a,g2:c,m7:s,m8:u,m9:l,m10:h,m11:f,m12:d,m13:m}})},i=[]},f076:function(t,e,n){"use strict";n.r(e);var r=n("f418"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},f09b:function(t,e,n){},f226:function(t,e,n){},f418:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("6476")),o=a(n("a88e")),i=a(n("04b1"));function a(t){return t&&t.__esModule?t:{default:t}}function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(E){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return $()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(E){return{type:"throw",arg:E}}}t.wrap=u;var h={};function f(){}function d(){}function m(){}var p={};s(p,o,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(D([])));v&&v!==e&&n.call(v,o)&&(p=v);var y=m.prototype=f.prototype=Object.create(p);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){(function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)})(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function k(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function D(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:$}}function $(){return{value:void 0,done:!0}}return d.prototype=m,s(y,"constructor",m),s(m,"constructor",d),d.displayName=s(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,a,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},_(b.prototype),s(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(y),s(y,a,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=D,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:D(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function s(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,o)}var u={components:{nsGoodsRecommend:function(){Promise.all([n.e("common/vendor"),n.e("components/ns-goods-recommend/ns-goods-recommend")]).then(function(){return resolve(n("f54a"))}.bind(null,n)).catch(n.oe)},uniNumberBox:function(){n.e("components/uni-number-box/uni-number-box").then(function(){return resolve(n("276f"))}.bind(null,n)).catch(n.oe)},diyBottomNav:function(){n.e("components/diy-bottom-nav/diy-bottom-nav").then(function(){return resolve(n("a5bb"))}.bind(null,n)).catch(n.oe)},toTop:function(){n.e("components/toTop/toTop").then(function(){return resolve(n("dcd2"))}.bind(null,n)).catch(n.oe)}},mixins:[r.default,o.default],data:function(){return{token:"",cartData:[],checkAll:!0,totalPrice:"0.00",totalCount:0,modifyFlag:!1,isSub:!1,invalidGoods:[],isIphoneX:!1,cartBottom:"56px",isAction:!1,startX:"",endX:"",is_wholesaler:i.default.is_wholesaler,styleIPhone12:!1}},onLoad:function(){var e=this;t.hideTabBar(),this.token=t.getStorageSync("token"),console.log(this.token,"token"),t.getSystemInfo({success:function(t){"iPhone 12"==t.model.substring(0,9)&&(e.styleIPhone12=!0,console.log(t.model))}})},onShow:function(){var e=this;return function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){s(i,r,o,a,c,"next",t)}function c(t){s(i,r,o,a,c,"throw",t)}a(void 0)}))}}(c().mark((function n(){var r;return c().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.$langConfig.refresh(),!t.getStorageSync("token")){n.next=6;break}return n.next=4,e.$api.sendRequest({url:"/api/member/detail",async:!1});case 4:r=n.sent,0==r.code&&console.log(r);case 6:t.getStorageSync("token")?e.getCartData():(e.token="",e.cartData=[],e.calculationTotalPrice()),e.isIphoneX=e.$util.uniappIsIPhoneX(),e.$util.uniappIsIPhone11()&&(e.cartBottom="90px");case 9:case"end":return n.stop()}}),n)})))()},onReady:function(){t.getStorageSync("token")||this.$refs.loadingCover&&this.$refs.loadingCover.hide()},computed:{hasData:function(){return this.cartData.length>0||this.invalidGoods.length>0},storeToken:function(){return this.$store.state.token}},watch:{storeToken:function(t,e){this.getCartData()}},methods:{initNum:function(t){var e=t.max_buy>0&&t.max_buy<t.stock?t.max_buy:t.stock;return e=0==e?1:e,t.num>e?e:t.num},getCartData:function(){var t=this;this.$api.sendRequest({url:"/api/cart/goodslists",success:function(e){e.code>=0?e.data.length?t.handleCartData(e.data):t.cartData=[]:t.token="",t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},handleCartData:function(t){var e=this;this.invalidGoods=[],this.cartData=[];var n={};t.forEach((function(t,r){1==t.goods_state&&1==t.verify_state&&0!=t.shop_status?t.min_buy>0&&t.min_buy>t.stock?e.invalidGoods.push(t):(t.checked=!0,t.edit=!1,void 0!=n["site_"+t.site_id]?n["site_"+t.site_id].cartList.push(t):n["site_"+t.site_id]={siteId:t.site_id,siteName:t.site_name,edit:!1,checked:!0,cartList:[t]}):e.invalidGoods.push(t)})),this.cartData=[],Object.keys(n).forEach((function(t){e.cartData.push(n[t])})),this.calculationTotalPrice(),this.cartData.length&&this.cartData.forEach((function(t){t.cartList.forEach((function(t){}))})),this.invalidGoods.length&&this.invalidGoods.forEach((function(t){t.sku_spec_format?t.sku_spec_format=JSON.parse(t.sku_spec_format):t.sku_spec_format=[]}))},singleElection:function(t,e){this.cartData[t].cartList[e].checked=!this.cartData[t].cartList[e].checked,this.calculationTotalPrice()},siteAllElection:function(t,e){this.cartData[e].checked=t,this.cartData[e].cartList.forEach((function(e){e.checked=t})),this.calculationTotalPrice()},allElection:function(t){var e=this;this.checkAll="boolean"==typeof t?t:!this.checkAll,this.cartData.length&&this.cartData.forEach((function(t){t.checked=e.checkAll,t.cartList.forEach((function(t){t.checked=e.checkAll}))})),this.calculationTotalPrice()},calculationTotalPrice:function(){if(this.cartData.length){var t=0,e=0,n=0;this.cartData.forEach((function(r){var o=0;r.cartList.forEach((function(n){n.checked&&(o+=1,e+=parseInt(n.num),t+=n.discount_price*n.num)})),r.cartList.length==o?(r.checked=!0,n+=1):r.checked=!1})),this.totalPrice=t.toFixed(2),this.totalCount=e,this.checkAll=this.cartData.length==n}else this.totalPrice="0.00",this.totalCount=0;this.modifyFlag=!1},deleteCart:function(e,n,r){var o=this,i=[];if("all"==e)for(var a=0;a<this.cartData.length;a++)for(var c=0;c<this.cartData[a].cartList.length;c++)this.cartData[a].cartList[c].checked&&i.push(this.cartData[a].cartList[c].cart_id);else i.push(this.cartData[n].cartList[r].cart_id);0!=i.length?t.showModal({title:"提示",content:"确定要删除这些商品吗？",success:function(t){t.confirm&&(i=i.toString(),o.$api.sendRequest({url:"/api/cart/delete",data:{cart_id:i},success:function(t){if(t.code>=0){if("all"==e)for(var i=0;i<o.cartData.length;i++){for(var a=0;a<o.cartData[i].cartList.length;a++){var c=o.cartData[i].cartList[a];c.checked&&(o.cartData[i].cartList.splice(a,1),a=-1)}0==o.cartData[i].cartList.length&&(o.cartData.splice(i,1),i=-1)}else o.cartData[n].cartList.splice(r,1),0==o.cartData[n].cartList.length&&o.cartData.splice(n,1);o.calculationTotalPrice(),o.getCartNumber()}else o.$util.showToast({title:t.message})}}))}}):this.$util.showToast({title:"请选择要删除的商品"})},cartNumChange:function(t,e){var n=this;if(!isNaN(t)){var r=this.cartData[e.siteIndex].cartList[e.cartIndex],o=r.max_buy>0&&r.max_buy<r.stock?r.max_buy:r.stock,i=r.min_buy>0?r.min_buy:1;t>o&&(t=o),t<i&&(t=i),this.modifyFlag=!0,this.$api.sendRequest({url:"/api/cart/edit",data:{num:t,cart_id:this.cartData[e.siteIndex].cartList[e.cartIndex].cart_id},success:function(r){r.code>=0?(n.cartData[e.siteIndex].cartList[e.cartIndex].num=t,n.calculationTotalPrice(),n.getCartNumber()):n.$util.showToast({title:r.message})}})}},settlement:function(){var e=this;if(this.totalCount>0){var n=[];if(this.cartData.forEach((function(t){t.cartList.forEach((function(t){t.checked&&n.push(t.cart_id)}))})),this.isSub)return;this.isSub=!0,t.setStorage({key:"orderCreateData",data:{cart_ids:n.toString()},success:function(){e.$util.redirectTo("/pages/order/payment/payment"),e.isSub=!1}})}},clearInvalidGoods:function(){var e=this;t.showModal({title:"提示",content:"确定要清空这些商品吗？",success:function(t){if(t.confirm){var n=[];e.invalidGoods.forEach((function(t){n.push(t.cart_id)})),n.length&&e.$api.sendRequest({url:"/api/cart/delete",data:{cart_id:n.toString()},success:function(t){t.code>=0?(e.invalidGoods=[],e.getCartNumber()):e.$util.showToast({title:t.message})}})}}})},imgError:function(t,e){this.cartData[t].cartList[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},toGoodsDetail:function(t){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.sku_id})},getCartNumber:function(){t.getStorageSync("token")&&(this.$store.dispatch("getCartNumber"),this.resetEditStatus())},goodsLimit:function(t,e,n){var r=this.cartData[e].cartList[n];"plus"==t.type?r.max_buy>0&&r.max_buy<r.stock?this.$util.showToast({title:"该商品每人限购"+r.max_buy+"件"}):this.$util.showToast({title:"库存不足"}):this.$util.showToast({title:"最少购买"+t.value+"件"})},toLogin:function(){this.$refs.login.open()},touchS:function(t){this.startX=t.touches[0].clientX},touchE:function(t,e){this.endX=t.changedTouches[0].clientX;var n=this.startX-this.endX;n>50?e.edit=!0:n<0&&(e.edit=!1),this.$forceUpdate()},resetEditStatus:function(){for(var t=0;t<this.cartData.length;t++)for(var e=0;e<this.cartData[t].cartList.length;e++)this.cartData[t].cartList[e].edit=!1;this.$forceUpdate()},changeAction:function(){this.isAction=!this.isAction,this.resetEditStatus()}}};e.default=u}).call(this,n("543d")["default"])},f886:function(t,e,n){"use strict";var r=n("f226"),o=n.n(r);o.a}},[["9e1d","common/runtime","common/vendor"]]]);