require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/point/detail/detail"],{1708:function(n,t,o){"use strict";o.r(t);var i=o("f400"),e=o("8410");for(var p in e)["default"].indexOf(p)<0&&function(n){o.d(t,n,(function(){return e[n]}))}(p);o("3ede");var u=o("f0c5"),a=Object(u["a"])(e["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=a.exports},"3ede":function(n,t,o){"use strict";var i=o("83d4"),e=o.n(i);e.a},"83d4":function(n,t,o){},8410:function(n,t,o){"use strict";o.r(t);var i=o("ea5d"),e=o.n(i);for(var p in i)["default"].indexOf(p)<0&&function(n){o.d(t,n,(function(){return i[n]}))}(p);t["default"]=e.a},a3a4:function(n,t,o){"use strict";(function(n){o("d947");i(o("66fd"));var t=i(o("1708"));function i(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=o,n(t.default)}).call(this,o("543d")["createPage"])},ea5d:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(n){return n&&n.__esModule?n:{default:n}}(o("67eb"));var e={components:{uniPopup:function(){o.e("components/uni-popup/uni-popup").then(function(){return resolve(o("fbc8"))}.bind(null,o)).catch(o.oe)},uniNumberBox:function(){o.e("components/uni-number-box/uni-number-box").then(function(){return resolve(o("276f"))}.bind(null,o)).catch(o.oe)}},data:function(){return{id:0,pointInfo:{image:""},isLogin:!1,Max:0,number:1}},onLoad:function(t){n.getStorageSync("token")&&(this.isLogin=!0),t.id?this.id=t.id:this.$util.redirectTo("/promotionpages/point/list/list",{},"redirectTo"),this.getPointInfo()},onShow:function(){this.$langConfig.refresh(),n.getStorageSync("token")&&(this.isLogin=!0)},computed:{themeStyle:function(){return"theme-"+this.$store.state.themeStyle}},methods:{getPointInfo:function(){var t=this;this.$api.sendRequest({url:"/pointexchange/api/goods/detail",data:{id:this.id},success:function(o){if(t.$refs.loadingCover.hide(),0==o.code&&o.data){if(2==o.data.type&&!o.data.platformcoupon_type_id)return t.$util.showToast({title:"该礼品已过期"}),void setTimeout((function(){t.$util.redirectTo("/promotionpages/point/list/list",{},"redirectTo")}),1e3);if(1==o.data.type&&!o.data.gift_id)return t.$util.showToast({title:"该优惠券已过期"}),void setTimeout((function(){t.$util.redirectTo("/promotionpages/point/list/list",{},"redirectTo")}),1e3);t.pointInfo=o.data,t.pointInfo.content&&(t.pointInfo.content=(0,i.default)(t.pointInfo.content)),n.setNavigationBarTitle({title:t.pointInfo.name});var e=2==t.pointInfo.type?t.pointInfo.count:t.pointInfo.stock;t.pointInfo.point;t.Max=e}else t.$util.redirectTo("/promotionpages/point/list/list",{},"redirectTo")}})},openPointPopup:function(){this.$refs.pointPopup.open()},close:function(){this.$refs.pointPopup.close()},numChange:function(n,t){n<1&&(n=1),this.number=n},confirm:function(){var t=this,o={id:this.id,num:this.number};n.setStorage({key:"exchangeOrderCreateData",data:o,success:function(){n.getStorageSync("token")?t.$util.redirectTo("/promotionpages/point/payment/payment"):t.$refs.login.open("/promotionpages/point/payment/payment")}})},login:function(){this.$refs.login.open("/promotionpages/point/detail/detail?id="+this.id)},makeSure:function(){this.Max>0?this.confirm():this.$util.showToast({title:"库存不足"})},imgError:function(){var n="";n=1==this.pointInfo.type?this.$util.img("upload/uniapp/point/gift.png"):2==this.pointInfo.type?this.$util.img("upload/uniapp/point/coupon.png"):3==this.pointInfo.type?this.$util.img("upload/uniapp/point/hongbao.png"):this.$util.getDefaultImage().default_goods_img,this.pointInfo.image=n,this.$forceUpdate()}}};t.default=e}).call(this,o("543d")["default"])},f400:function(n,t,o){"use strict";o.d(t,"b",(function(){return e})),o.d(t,"c",(function(){return p})),o.d(t,"a",(function(){return i}));var i={uniPopup:function(){return o.e("components/uni-popup/uni-popup").then(o.bind(null,"fbc8"))},uniNumberBox:function(){return o.e("components/uni-number-box/uni-number-box").then(o.bind(null,"276f"))},loadingCover:function(){return o.e("components/loading-cover/loading-cover").then(o.bind(null,"9257"))},nsLogin:function(){return Promise.all([o.e("common/vendor"),o.e("components/ns-login/ns-login")]).then(o.bind(null,"8689"))}},e=function(){var n=this,t=n.$createElement,o=(n._self._c,2==n.pointInfo.type&&n.pointInfo.image?n.$util.img(n.pointInfo.image):null),i=2!=n.pointInfo.type||n.pointInfo.image?null:n.$util.img("upload/uniapp/point/coupon.png"),e=2!=n.pointInfo.type&&3==n.pointInfo.type&&n.pointInfo.image?n.$util.img(n.pointInfo.image):null,p=2==n.pointInfo.type||3!=n.pointInfo.type||n.pointInfo.image?null:n.$util.img("upload/uniapp/point/hongbao.png"),u=2!=n.pointInfo.type&&3!=n.pointInfo.type?n.$util.img(n.pointInfo.image):null,a=2==n.pointInfo.type&&1!=n.pointInfo.validity_type?n.$util.timeStampTurnTime(n.pointInfo.end_time):null,l=1==n.pointInfo.type&&n.pointInfo.image?n.$util.img(n.pointInfo.image):null,r=1!=n.pointInfo.type||n.pointInfo.image?null:n.$util.img("upload/uniapp/point/gift.png"),f=2==n.pointInfo.type&&n.pointInfo.image?n.$util.img(n.pointInfo.image):null,s=2!=n.pointInfo.type||n.pointInfo.image?null:n.$util.img("upload/uniapp/point/coupon.png"),c=3==n.pointInfo.type&&n.pointInfo.image?n.$util.img(n.pointInfo.image):null,d=3!=n.pointInfo.type||n.pointInfo.image?null:n.$util.img("upload/uniapp/point/hongbao.png");n.$mp.data=Object.assign({},{$root:{g0:o,g1:i,g2:e,g3:p,g4:u,g5:a,g6:l,g7:r,g8:f,g9:s,g10:c,g11:d}})},p=[]}},[["a3a4","common/runtime","common/vendor"]]]);