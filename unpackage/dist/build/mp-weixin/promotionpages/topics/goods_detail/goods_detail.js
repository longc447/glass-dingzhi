require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/topics/goods_detail/goods_detail"],{"00e9":function(n,o,e){"use strict";e.d(o,"b",(function(){return i})),e.d(o,"c",(function(){return u})),e.d(o,"a",(function(){return t}));var t={uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"fbc8"))},uniCountDown:function(){return e.e("components/uni-count-down/uni-count-down").then(e.bind(null,"04c1"))},uParse:function(){return Promise.all([e.e("common/vendor"),e.e("components/u-parse/u-parse")]).then(e.bind(null,"1b9d"))},nsGoodsSku:function(){return e.e("components/ns-goods-sku/ns-goods-sku").then(e.bind(null,"727a"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"9257"))},nsLogin:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-login/ns-login")]).then(e.bind(null,"8689"))},nsGoodsAction:function(){return e.e("components/ns-goods-action/ns-goods-action").then(e.bind(null,"207e"))},nsGoodsActionIcon:function(){return e.e("components/ns-goods-action-icon/ns-goods-action-icon").then(e.bind(null,"e362"))},nsGoodsActionButton:function(){return e.e("components/ns-goods-action-button/ns-goods-action-button").then(e.bind(null,"c1e3"))}},i=function(){var n=this,o=n.$createElement,e=(n._self._c,n.__map(n.goodsSkuDetail.sku_images,(function(o,e){var t=n.__get_orig(o),i=n.$util.img(o,{size:"big"});return{$orig:t,g0:i}}))),t=n.$util.img(n.goodsSkuDetail.video_url),i=n.$util.img(n.goodsSkuDetail.sku_image,{size:"big"}),u=""!=n.goodsSkuDetail.video_url?n.$lang("video"):null,a=""!=n.goodsSkuDetail.video_url?n.$lang("image"):null,s=n.$util.img(n.goodsSkuDetail.video_url),l=n.$util.img(n.goodsSkuDetail.sku_image,{size:"big"}),c=n.goodsSkuDetail.discountTimeMachine?n.$util.img("upload/uniapp/goods/detail_promotion_left_bg.png"):null,r=n.goodsSkuDetail.discountTimeMachine?n.$util.img("upload/uniapp/goods/detail_topics_tag.png"):null,d=n.goodsSkuDetail.discountTimeMachine?n.$util.img("upload/uniapp/goods/detail_promotion_right_bg.png"):null,g=n.$lang("common.currencySymbol"),m=n.goodsSkuDetail.price>0?n.$lang("common.currencySymbol"):null,f=n.$lang("service"),p=n.Development&&n.shopInfo.avatar?n.$util.img(n.shopInfo.avatar):null,v=n.Development&&!n.shopInfo.avatar?n.$util.getDefaultImage():null,_=1==n.evaluateConfig.evaluate_show&&n.goodsEvaluate.content&&n.goodsEvaluate.member_headimg?n.$util.img(n.goodsEvaluate.member_headimg):null,h=1==n.evaluateConfig.evaluate_show&&n.goodsEvaluate.content&&!n.goodsEvaluate.member_headimg?n.$util.getDefaultImage():null,b=1==n.evaluateConfig.evaluate_show&&n.goodsEvaluate.content?n.$util.timeStampTurnTime(n.goodsEvaluate.create_time):null,k=1==n.evaluateConfig.evaluate_show&&n.goodsEvaluate.content&&n.goodsEvaluate.images?n.__map(n.goodsEvaluate.images,(function(o,e){var t=n.__get_orig(o),i=n.$util.img(o);return{$orig:t,g13:i}})):null,$="-1"!=n.poster?n.$util.img(n.poster):null;n._isMounted||(n.e0=function(o){n.switchMedia="video"},n.e1=function(o){n.switchMedia="img"},n.e2=function(o){n.shopInfo.avatar=n.$util.getDefaultImage().default_shop_img},n.e3=function(o){n.goodsEvaluate.member_headimg=n.$util.getDefaultImage().default_headimg},n.e4=function(o){n.detailTab=0}),n.$mp.data=Object.assign({},{$root:{l0:e,g1:t,g2:i,m0:u,m1:a,g3:s,g4:l,g5:c,g6:r,g7:d,m2:g,m3:m,m4:f,g8:p,g9:v,g10:_,g11:h,g12:b,l1:k,g14:$}})},u=[]},"16a7":function(n,o,e){},"1fe8":function(n,o,e){"use strict";var t=e("5e99"),i=e.n(t);i.a},"291c":function(n,o,e){"use strict";(function(n){e("d947");t(e("66fd"));var o=t(e("7176"));function t(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(o.default)}).call(this,e("543d")["createPage"])},"3d5e":function(n,o,e){"use strict";var t=e("16a7"),i=e.n(t);i.a},"5ccc":function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=a(e("9c8e")),i=a(e("6476")),u=a(e("a88e"));function a(n){return n&&n.__esModule?n:{default:n}}var s={components:{nsGoodsAction:function(){e.e("components/ns-goods-action/ns-goods-action").then(function(){return resolve(e("207e"))}.bind(null,e)).catch(e.oe)},nsGoodsActionIcon:function(){e.e("components/ns-goods-action-icon/ns-goods-action-icon").then(function(){return resolve(e("e362"))}.bind(null,e)).catch(e.oe)},nsGoodsActionButton:function(){e.e("components/ns-goods-action-button/ns-goods-action-button").then(function(){return resolve(e("c1e3"))}.bind(null,e)).catch(e.oe)},uniPopup:function(){e.e("components/uni-popup/uni-popup").then(function(){return resolve(e("fbc8"))}.bind(null,e)).catch(e.oe)},nsGoodsSku:function(){e.e("components/ns-goods-sku/ns-goods-sku").then(function(){return resolve(e("727a"))}.bind(null,e)).catch(e.oe)},nsGoodsRecommend:function(){Promise.all([e.e("common/vendor"),e.e("components/ns-goods-recommend/ns-goods-recommend")]).then(function(){return resolve(e("f54a"))}.bind(null,e)).catch(e.oe)},uniCountDown:function(){e.e("components/uni-count-down/uni-count-down").then(function(){return resolve(e("04c1"))}.bind(null,e)).catch(e.oe)},toTop:function(){e.e("components/toTop/toTop").then(function(){return resolve(e("dcd2"))}.bind(null,e)).catch(e.oe)},uParse:function(){Promise.all([e.e("common/vendor"),e.e("components/u-parse/u-parse")]).then(function(){return resolve(e("1b9d"))}.bind(null,e)).catch(e.oe)}},data:function(){return{kefuConfig:{weapp:"",system:"",open:"",open_url:""}}},mixins:[t.default,i.default,u.default],onShareAppMessage:function(n){var o="/promotionpages/topic/goods_detail/goods_detail?id="+this.topics_id;return this.memberId&&(o+="&source_member="+this.memberId),{title:this.goodsSkuDetail.sku_name,imageUrl:this.$util.img(this.goodsSkuDetail.sku_image,{size:"big"}),path:o,success:function(n){},fail:function(n){}}},onShareTimeline:function(){var n="id="+this.topics_id;return this.memberId&&(n+="&source_member="+this.memberId),{title:this.goodsSkuDetail.sku_name,query:n,imageUrl:this.$util.img(this.goodsSkuDetail.sku_image,{size:"big"})}}};o.default=s},"5e99":function(n,o,e){},7176:function(n,o,e){"use strict";e.r(o);var t=e("00e9"),i=e("e3f9");for(var u in i)["default"].indexOf(u)<0&&function(n){e.d(o,n,(function(){return i[n]}))}(u);e("1fe8"),e("3d5e");var a=e("f0c5"),s=Object(a["a"])(i["default"],t["b"],t["c"],!1,null,"8d0574f0",null,!1,t["a"],void 0);o["default"]=s.exports},e3f9:function(n,o,e){"use strict";e.r(o);var t=e("5ccc"),i=e.n(t);for(var u in t)["default"].indexOf(u)<0&&function(n){e.d(o,n,(function(){return t[n]}))}(u);o["default"]=i.a}},[["291c","common/runtime","common/vendor","promotionpages/common/vendor"]]]);