require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/fenxiao/order_detail/order_detail"],{"03ee":function(e,t,i){"use strict";var n=i("7102"),o=i.n(n);o.a},"381a":function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={loadingCover:function(){return i.e("components/loading-cover/loading-cover").then(i.bind(null,"9257"))}},o=function(){var e=this.$createElement,t=(this._self._c,this.$util.img(this.orderData.sku_image,{size:"mid"}));this.$mp.data=Object.assign({},{$root:{g0:t}})},r=[]},7102:function(e,t,i){},"7cd47":function(e,t,i){"use strict";i.r(t);var n=i("381a"),o=i("9f64");for(var r in o)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(r);i("03ee");var a=i("f0c5"),d=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=d.exports},"9f64":function(e,t,i){"use strict";i.r(t);var n=i("df49"),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=o.a},df49:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("a88e")),o=r(i("be84"));function r(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{isIphoneX:!1,orderId:0,orderData:{action:[]}}},onLoad:function(t){t.id?this.orderId=t.id:e.navigateBack({delta:1})},mixins:[o.default,n.default],onShow:function(){var t=this;this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),this.addonIsExit.fenxiao?(this.getFenxiaoWrods(),e.getStorageSync("token")?this.getOrderData():this.$util.redirectTo("/pages/login/login/login",{back:"/pages/order/detail/detail?order_id="+this.orderId})):(this.$util.showToast({title:"分销未开启",mask:!0}),setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),1e3))},methods:{getOrderData:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/order/info",data:{fenxiao_order_id:this.orderId},success:function(t){t.code>=0?(e.$refs.loadingCover&&e.$refs.loadingCover.hide(),e.orderData=t.data):e.$util.showToast({title:"未获取到订单信息！",success:function(){setTimeout((function(){e.$util.redirectTo("/otherpages/fenxiao/order/order",{},"redirectTo")}),1e3)}})},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},imgError:function(e){this.orderData.order_goods[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}}};t.default=a}).call(this,i("543d")["default"])},f4c2:function(e,t,i){"use strict";(function(e){i("d947");n(i("66fd"));var t=n(i("7cd47"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=i,e(t.default)}).call(this,i("543d")["createPage"])}},[["f4c2","common/runtime","common/vendor"]]]);