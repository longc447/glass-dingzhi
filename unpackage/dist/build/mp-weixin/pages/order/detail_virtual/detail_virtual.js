(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/detail_virtual/detail_virtual"],{"0c74":function(e,t,o){},3459:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(o("a88e")),a=i(o("6be8"));function i(e){return e&&e.__esModule?e:{default:e}}var n={data:function(){return{isIphoneX:!1,orderId:0,orderData:{action:[],virtual_goods:{is_veirfy:0}},action:{icon:""},kefuConfig:{weapp:"",system:"",open:"",open_url:""},evaluateConfig:{evaluate_audit:1,evaluate_show:0,evaluate_status:1}}},mixins:[r.default,a.default],components:{nsPayment:function(){o.e("components/payment/payment").then(function(){return resolve(o("2ecc"))}.bind(null,o)).catch(o.oe)}},onLoad:function(e){e.order_id&&(this.orderId=e.order_id)},onShow:function(){this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),e.getStorageSync("token")?(this.getEvaluateConfig(),this.getOrderData()):this.$util.redirectTo("/pages/login/login/login",{back:"/pages/order/detail_virtual/detail_virtual?order_id="+this.orderId}),this.getKekuConfig()},methods:{goConnect:function(){if(e.getStorageSync("token")){var t={order_id:this.orderId,site_id:this.orderData.site_id};return this.$util.redirectTo("/otherpages/chat/room/room",t),!1}this.$refs.login.open("/pages/goods/detail_virtual/detail_virtual?sku_id="+this.orderData.sku_id)},getKekuConfig:function(){var e=this;this.$api.sendRequest({url:"/api/config/servicer",success:function(t){0==t.code&&(e.kefuConfig=t.data,e.kefuConfig.system&&!e.addonIsExit.servicer&&(e.kefuConfig.system=0))}})},goDetail:function(e){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:e})},goRefund:function(e){this.$util.redirectTo("/otherpages/order/refund/refund",{order_goods_id:e})},goRefundDetail:function(e){this.$util.redirectTo("/otherpages/order/refund_detail/refund_detail",{order_goods_id:e})},getOrderData:function(){var t=this;this.$api.sendRequest({url:"/api/order/detail",data:{order_id:this.orderId},success:function(o){e.stopPullDownRefresh(),o.code>=0?(t.orderData=o.data,t.orderData.order_goods.forEach((function(e){e.sku_spec_format?e.sku_spec_format=JSON.parse(e.sku_spec_format):e.sku_spec_format=[]})),t.action=JSON.parse(o.data.order_status_action),t.$refs.loadingCover&&t.$refs.loadingCover.hide()):(t.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){t.$util.redirectTo("/pages/order/list/list")}),1e3))},fail:function(o){e.stopPullDownRefresh(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},onPullDownRefresh:function(){this.getOrderData()},operation:function(e){var t=this;switch(e){case"orderPay":this.orderPay(this.orderData);break;case"orderClose":this.orderClose(this.orderData.order_id,(function(){t.getOrderData()}));break;case"memberOrderEvaluation":this.$util.redirectTo("/otherpages/order/evaluate/evaluate",{order_id:this.orderData.order_id});break}},imgError:function(e){this.orderData.order_goods[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getEvaluateConfig:function(){var e=this;this.$api.sendRequest({url:"/api/goodsevaluate/config",success:function(t){if(0==t.code){var o=t.data;e.evaluateConfig=o}}})},openChoosePayment:function(){this.$refs.choosePaymentPopup.open()},toShopDetail:function(e){this.$util.redirectTo("/otherpages/shop/index/index",{site_id:e})}},filters:{abs:function(e){return Math.abs(parseFloat(e)).toFixed(2)}}};t.default=n}).call(this,o("543d")["default"])},"3df8":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return r}));var r={loadingCover:function(){return o.e("components/loading-cover/loading-cover").then(o.bind(null,"9257"))}},a=function(){var e=this,t=e.$createElement,o=(e._self._c,e.$util.img("upload/uniapp/order/status-wrap-bg.png")),r=e.$util.img(e.action.icon),a=e.orderData.virtual_goods&&e.orderData.virtual_goods.is_veirfy?e.$util.timeStampTurnTime(e.orderData.virtual_goods.verify_time):null,i=e.orderData.virtual_goods?e.$util.img(e.orderData.virtualgoods):null,n=e.$lang("common.currencySymbol"),u=e.__map(e.orderData.order_goods,(function(t,o){var r=e.__get_orig(t),a=e.$util.img(t.sku_image,{size:"mid"});return{$orig:r,g4:a}})),d=e.$util.timeStampTurnTime(e.orderData.create_time),s=e.orderData.close_time>0?e.$util.timeStampTurnTime(e.orderData.close_time):null,l=e.orderData.pay_status>0?e.$util.timeStampTurnTime(e.orderData.pay_time):null,c=e.$lang("common.currencySymbol"),f=e.orderData.invoice_money>0?e.$lang("common.currencySymbol"):null,m=e.orderData.invoice_delivery_money>0?e.$lang("common.currencySymbol"):null,g=0!=e.orderData.adjust_money?e.$lang("common.currencySymbol"):null,_=0!=e.orderData.adjust_money?e._f("abs")(e.orderData.adjust_money):null,p=e.orderData.promotion_money>0?e.$lang("common.currencySymbol"):null,h=e.orderData.coupon_money>0?e.$lang("common.currencySymbol"):null,v=e.orderData.platform_coupon_total_money>0?e.$lang("common.currencySymbol"):null,y=e.orderData.balance_money>0?e.$lang("common.currencySymbol"):null,$=e.$lang("common.currencySymbol");e._isMounted||(e.e0=function(t){return e.$util.copy(e.orderData.virtual_code)},e.e1=function(t){return e.$util.copy(e.orderData.order_no)}),e.$mp.data=Object.assign({},{$root:{g0:o,g1:r,g2:a,g3:i,m0:n,l0:u,g5:d,g6:s,g7:l,m1:c,m2:f,m3:m,m4:g,f0:_,m5:p,m6:h,m7:v,m8:y,m9:$}})},i=[]},"65f5":function(e,t,o){"use strict";(function(e){o("d947");r(o("66fd"));var t=r(o("beb1"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=o,e(t.default)}).call(this,o("543d")["createPage"])},beb1:function(e,t,o){"use strict";o.r(t);var r=o("3df8"),a=o("ec2e");for(var i in a)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return a[e]}))}(i);o("de06");var n=o("f0c5"),u=Object(n["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);t["default"]=u.exports},de06:function(e,t,o){"use strict";var r=o("0c74"),a=o.n(r);a.a},ec2e:function(e,t,o){"use strict";o.r(t);var r=o("3459"),a=o.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a}},[["65f5","common/runtime","common/vendor"]]]);