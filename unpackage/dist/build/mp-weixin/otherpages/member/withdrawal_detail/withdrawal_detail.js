require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/withdrawal_detail/withdrawal_detail"],{"1b6b":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"9257"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$util.timeStampTurnTime(t.detail.apply_time)),i=t.detail.status?t.$util.timeStampTurnTime(t.detail.audit_time):null,a=2==t.detail.status?t.$util.timeStampTurnTime(t.detail.payment_time):null;t.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:a}})},r=[]},"21b0":function(t,e,n){},"31b0":function(t,e,n){"use strict";n.r(e);var i=n("d80a"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"553b":function(t,e,n){"use strict";var i=n("21b0"),a=n.n(i);a.a},"7f51":function(t,e,n){"use strict";(function(t){n("d947");i(n("66fd"));var e=i(n("fcdd"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},d80a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(t){return t&&t.__esModule?t:{default:t}}(n("a88e"));var a={data:function(){return{id:0,detail:{}}},onLoad:function(t){this.id=t.id||0},mixins:[i.default],onShow:function(){this.$langConfig.refresh(),t.getStorageSync("token")?this.getDetail():this.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/member/point/point"},"redirectTo")},methods:{getDetail:function(){var t=this;this.$api.sendRequest({url:"/api/memberwithdraw/detail",data:{id:this.id},success:function(e){e.data&&(t.detail=e.data),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})}}};e.default=a}).call(this,n("543d")["default"])},fcdd:function(t,e,n){"use strict";n.r(e);var i=n("1b6b"),a=n("31b0");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("553b");var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=u.exports}},[["7f51","common/runtime","common/vendor"]]]);