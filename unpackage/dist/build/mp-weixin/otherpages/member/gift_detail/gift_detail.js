require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/gift_detail/gift_detail"],{"1d40":function(t,e,n){"use strict";n.r(e);var i=n("ba34"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"960c":function(t,e,n){"use strict";var i=n("be01"),r=n.n(i);r.a},ba34:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(t){return t&&t.__esModule?t:{default:t}}(n("a88e"));var r={data:function(){return{orderData:{},orderId:0}},mixins:[i.default],onLoad:function(t){t.id&&(this.orderId=t.id)},onShow:function(){this.$langConfig.refresh(),t.getStorageSync("token")?this.getOrderData():this.$util.redirectTo("/pages/member/index/index",{},"reLaunch")},methods:{getOrderData:function(){var e=this;this.$api.sendRequest({url:"/gift/api/giftorder/info",data:{order_id:this.orderId},success:function(t){t.code>=0?(e.$refs.loadingCover&&e.$refs.loadingCover.hide(),e.orderData=t.data):e.$util.showToast({title:"未获取到礼品订单信息！",success:function(){setTimeout((function(){e.$util.redirectTo("/otherpages/member/gift/gift")}),1e3)}})},fail:function(n){t.stopPullDownRefresh(),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},onPullDownRefresh:function(){this.getOrderData()},imgError:function(){this.orderData.gift_image=this.$util.img("upload/uniapp/point/gift.png"),this.$forceUpdate()}}};e.default=r}).call(this,n("543d")["default"])},be01:function(t,e,n){},be65:function(t,e,n){"use strict";(function(t){n("d947");i(n("66fd"));var e=i(n("fc0a"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},d66d:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"9257"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.orderData.gift_image?t.$util.img(t.orderData.gift_image):null),i=t.orderData.gift_image?null:t.$util.img("upload/uniapp/point/gift.png"),r=t.$util.timeStampTurnTime(t.orderData.create_time);t.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:r}})},a=[]},fc0a:function(t,e,n){"use strict";n.r(e);var i=n("d66d"),r=n("1d40");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("960c");var o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=u.exports}},[["be65","common/runtime","common/vendor"]]]);