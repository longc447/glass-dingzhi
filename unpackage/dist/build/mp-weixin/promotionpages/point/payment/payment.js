require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/point/payment/payment"],{"02f1":function(e,n,a){"use strict";(function(e){a("d947");t(a("66fd"));var n=t(a("5d0e"));function t(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(n.default)}).call(this,a("543d")["createPage"])},"06cd":function(e,n,a){"use strict";a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return t}));var t={loadingCover:function(){return a.e("components/loading-cover/loading-cover").then(a.bind(null,"9257"))}},o=function(){var e=this,n=e.$createElement,a=(e._self._c,2==e.orderPaymentData.exchange_info.type&&e.orderPaymentData.exchange_info.image?e.$util.img(e.orderPaymentData.exchange_info.image):null),t=2!=e.orderPaymentData.exchange_info.type||e.orderPaymentData.exchange_info.image?null:e.$util.img("upload/uniapp/point/coupon.png"),o=2!=e.orderPaymentData.exchange_info.type&&3==e.orderPaymentData.exchange_info.type&&e.orderPaymentData.exchange_info.image?e.$util.img(e.orderPaymentData.exchange_info.image):null,r=2==e.orderPaymentData.exchange_info.type||3!=e.orderPaymentData.exchange_info.type||e.orderPaymentData.exchange_info.image?null:e.$util.img("upload/uniapp/point/hongbao.png"),i=2!=e.orderPaymentData.exchange_info.type&&3!=e.orderPaymentData.exchange_info.type?e.$util.img(e.orderPaymentData.exchange_info.image):null,c=1==e.orderPaymentData.exchange_info.pay_type&&"0.00"!=e.orderPaymentData.exchange_info.price?e.$lang("common.currencySymbol"):null,u=1==e.orderPaymentData.exchange_info.pay_type&&"0.00"!=e.orderPaymentData.price?e.$lang("common.currencySymbol"):null,d=1==e.orderPaymentData.exchange_info.pay_type&&"0.00"!=e.orderPaymentData.price?e._f("moneyFormat")(e.orderPaymentData.price):null;e.$mp.data=Object.assign({},{$root:{g0:a,g1:t,g2:o,g3:r,g4:i,m0:c,m1:u,f0:d}})},r=[]},"2a2b":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(a("afa9")),o=r(a("a88e"));function r(e){return e&&e.__esModule?e:{default:e}}var i={components:{uniPopup:function(){a.e("components/uni-popup/uni-popup").then(function(){return resolve(a("fbc8"))}.bind(null,a)).catch(a.oe)},nsPayment:function(){a.e("components/payment/payment").then(function(){return resolve(a("2ecc"))}.bind(null,a)).catch(a.oe)}},mixins:[t.default,o.default]};n.default=i},"5d0e":function(e,n,a){"use strict";a.r(n);var t=a("06cd"),o=a("7ccb");for(var r in o)["default"].indexOf(r)<0&&function(e){a.d(n,e,(function(){return o[e]}))}(r);a("e2cd"),a("a5e5");var i=a("f0c5"),c=Object(i["a"])(o["default"],t["b"],t["c"],!1,null,"50fafd7c",null,!1,t["a"],void 0);n["default"]=c.exports},"7ccb":function(e,n,a){"use strict";a.r(n);var t=a("2a2b"),o=a.n(t);for(var r in t)["default"].indexOf(r)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(r);n["default"]=o.a},"7ea3":function(e,n,a){},a5e5:function(e,n,a){"use strict";var t=a("7ea3"),o=a.n(t);o.a},dd94:function(e,n,a){},e2cd:function(e,n,a){"use strict";var t=a("dd94"),o=a.n(t);o.a}},[["02f1","common/runtime","common/vendor","promotionpages/common/vendor"]]]);