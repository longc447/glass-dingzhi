require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/shop/introduce/introduce"],{"0393":function(e,t,o){"use strict";var n=o("335b"),i=o.n(n);i.a},"09e5":function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return n}));var n={loadingCover:function(){return o.e("components/loading-cover/loading-cover").then(o.bind(null,"9257"))},uniPopup:function(){return o.e("components/uni-popup/uni-popup").then(o.bind(null,"fbc8"))}},i=function(){var e=this,t=e.$createElement,o=(e._self._c,e.shopInfo.latitude&&e.shopInfo.longitude?Number(e.shopInfo.latitude):null),n=e.shopInfo.latitude&&e.shopInfo.longitude?Number(e.shopInfo.longitude):null,i="-1"!=e.poster?e.$util.img(e.poster):null;e.$mp.data=Object.assign({},{$root:{m0:o,m1:n,g0:i}})},s=[]},"335b":function(e,t,o){},6774:function(e,t,o){"use strict";o.r(t);var n=o("faa5"),i=o.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},"71e0":function(e,t,o){"use strict";o.r(t);var n=o("09e5"),i=o("6774");for(var s in i)["default"].indexOf(s)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(s);o("0393");var r=o("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=u.exports},a832:function(e,t,o){"use strict";(function(e){o("d947");n(o("66fd"));var t=n(o("71e0"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=o,e(t.default)}).call(this,o("543d")["createPage"])},faa5:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o("a88e")),i=r(o("3850")),s=r(o("23d0"));function r(e){return e&&e.__esModule?e:{default:e}}var u={components:{diyShopInfo:function(){o.e("otherpages/components/diy-shop-info/diy-shop-info").then(function(){return resolve(o("d2fc"))}.bind(null,o)).catch(o.oe)},nsProgress:function(){o.e("otherpages/components/ns-progress/ns-progress").then(function(){return resolve(o("2fc8"))}.bind(null,o)).catch(o.oe)}},data:function(){return{siteId:0,poster:"-1",posterMsg:"",posterHeight:0}},computed:{markers:function(){var e=[];return this.shopInfo&&this.shopInfo.latitude&&this.shopInfo.longitude?e.push({id:0,latitude:this.shopInfo.latitude,longitude:this.shopInfo.longitude,iconPath:this.$util.img("upload/uniapp/location.png"),width:25,height:25}):e=[],e}},mixins:[i.default,n.default],onLoad:function(e){e.site_id?(this.siteId=e.site_id,this.getShopInfo()):this.$util.redirectTo("/otherpages/shop/index/index",{},"redirectTo")},onShow:function(){this.$langConfig.refresh()},methods:{openMapLg:function(){isNaN(Number(this.shopInfo.latitude))||isNaN(Number(this.shopInfo.longitude))||s.default.openMap(Number(this.shopInfo.latitude),Number(this.shopInfo.longitude),this.shopInfo.site_name,"gcj02")},openSharePopup:function(){this.$refs.sharePopup.open()},closeSharePopup:function(){this.$refs.sharePopup.close()},openPosterPopup:function(){var t=this;this.getGoodsPoster(),this.$refs.sharePopup.close(),this.$refs.posterPopup.open(),"-1"!=this.poster&&setTimeout((function(){var o=e.createSelectorQuery().in(t).select(".poster-layer .image-wrap");o.fields({size:!0},(function(o){var n=o.width,i=parseFloat((740/n).toFixed(2));e.getStorageSync("token")?t.posterHeight=parseInt(1120/i):t.posterHeight=parseInt(1100/i)})).exec()}),100)},closePosterPopup:function(){this.$refs.posterPopup.close()},getGoodsPoster:function(){var e=this,t={site_id:this.siteId};this.memberId&&(t.source_member=this.memberId),this.$api.sendRequest({url:"/api/shop/poster",data:{page:"/otherpages/shop/introduce/introduce",qrcode_param:JSON.stringify(t)},success:function(t){0==t.code?e.poster=t.data.path:e.posterMsg=t.message}})}}};t.default=u}).call(this,o("543d")["default"])}},[["a832","common/runtime","common/vendor","otherpages/common/vendor"]]]);