require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/gift/gift"],{"11a2":function(e,t,n){"use strict";n.r(t);var i=n("a8f1"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},"11bd":function(e,t,n){"use strict";n.r(t);var i=n("e1ae"),r=n("11a2");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("e580");var a=n("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=u.exports},"157d":function(e,t,n){},a8f1:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(n("a88e"));var r={data:function(){return{orderList:[]}},onShow:function(){this.$langConfig.refresh(),this.$refs.mescroll&&this.$refs.mescroll.refresh(),e.getStorageSync("token")||this.$refs.login.open("/otherpages/member/gift/gift")},mixins:[i.default],methods:{getListData:function(e){var t=this;this.$api.sendRequest({url:"/gift/api/giftorder/page",data:{page:e.num,page_size:e.size},success:function(n){var i=[],r=n.message;0==n.code&&n.data?i=n.data.list:t.$util.showToast({title:r}),e.endSuccess(i.length),1==e.num&&(t.orderList=[]),t.orderList=t.orderList.concat(i),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(n){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},imgError:function(e){this.orderList[e].gift_image=this.$util.img("upload/uniapp/point/hongbao.png"),this.$forceUpdate()},toDetail:function(e){this.$util.redirectTo("/otherpages/member/gift_detail/gift_detail",{id:e})}}};t.default=r}).call(this,n("543d")["default"])},b6a5:function(e,t,n){"use strict";(function(e){n("d947");i(n("66fd"));var t=i(n("11bd"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},e1ae:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={nsEmpty:function(){return n.e("components/ns-empty/ns-empty").then(n.bind(null,"ff23"))},nsLogin:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-login/ns-login")]).then(n.bind(null,"8689"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"9257"))}},r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.orderList.length?e.__map(e.orderList,(function(t,n){var i=e.__get_orig(t),r=e.$util.timeStampTurnTime(t.create_time),o=t.gift_image?e.$util.img(t.gift_image):null,a=t.gift_image?null:e.$util.img("upload/uniapp/point/gift.png");return{$orig:i,g0:r,g1:o,g2:a}})):null),i=e.orderList.length?null:e.$lang("emptyTips");e.$mp.data=Object.assign({},{$root:{l0:n,m0:i}})},o=[]},e580:function(e,t,n){"use strict";var i=n("157d"),r=n.n(i);r.a}},[["b6a5","common/runtime","common/vendor"]]]);