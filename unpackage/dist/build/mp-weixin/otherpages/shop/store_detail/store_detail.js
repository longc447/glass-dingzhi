require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/shop/store_detail/store_detail"],{"1c30":function(t,e,i){"use strict";i.r(e);var o=i("23fc"),n=i("9b94");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("ee2c");var r=i("f0c5"),s=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=s.exports},"23fc":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={loadingCover:function(){return i.e("components/loading-cover/loading-cover").then(i.bind(null,"9257"))},diyBottomNav:function(){return i.e("components/diy-bottom-nav/diy-bottom-nav").then(i.bind(null,"a5bb"))}},n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.storeDetail.store_image?t.$util.img(t.storeDetail.store_image):null),o=t.storeDetail.latitude&&t.storeDetail.longitude?Number(t.storeDetail.latitude):null,n=t.storeDetail.latitude&&t.storeDetail.longitude?Number(t.storeDetail.longitude):null;t.$mp.data=Object.assign({},{$root:{g0:i,m0:o,m1:n}})},a=[]},"441a":function(t,e,i){"use strict";(function(t){i("d947");o(i("66fd"));var e=o(i("1c30"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"6e7a":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{storeDetail:[],siteId:0,storeId:0}},computed:{markers:function(){var t=[];return this.storeDetail&&this.storeDetail.latitude&&this.storeDetail.longitude?t.push({id:0,latitude:this.storeDetail.latitude,longitude:this.storeDetail.longitude,iconPath:this.$util.img("upload/uniapp/location.png"),width:25,height:25}):t=[],t}},onLoad:function(t){t.store_id&&t.site_id?(this.storeId=t.store_id,this.siteId=t.site_id,this.getData()):this.$util.redirectTo("/otherpages/shop/index/index",{},"redirectTo")},onShow:function(){this.$langConfig.refresh()},methods:{getData:function(){var t=this;this.$api.sendRequest({url:"/api/store/info",data:{site_id:this.siteId,store_id:this.storeId},success:function(e){0==e.code&&e.data?t.storeDetail=e.data:t.$util.showToast({title:e.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},call:function(){t.makePhoneCall({phoneNumber:this.storeDetail.telphone})}}};e.default=i}).call(this,i("543d")["default"])},7601:function(t,e,i){},"9b94":function(t,e,i){"use strict";i.r(e);var o=i("6e7a"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},ee2c:function(t,e,i){"use strict";var o=i("7601"),n=i.n(o);n.a}},[["441a","common/runtime","common/vendor"]]]);