require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/notice/list/list"],{"0790":function(t,e,n){"use strict";n.r(e);var i=n("fb7c"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"3f61":function(t,e,n){"use strict";var i=n("db95"),a=n.n(i);a.a},"6c35":function(t,e,n){"use strict";n.r(e);var i=n("c424"),a=n("0790");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("3f61");var r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"7ee324ec",null,!1,i["a"],void 0);e["default"]=u.exports},7998:function(t,e,n){"use strict";(function(t){n("d947");i(n("66fd"));var e=i(n("6c35"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},c424:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={nsEmpty:function(){return n.e("components/ns-empty/ns-empty").then(n.bind(null,"ff23"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"9257"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.dataList.length?t.__map(t.dataList,(function(e,n){var i=t.__get_orig(e),a=t.$util.timeStampTurnTime(e.create_time,1);return{$orig:i,g0:a}})):null);t.$mp.data=Object.assign({},{$root:{l0:n}})},o=[]},db95:function(t,e,n){},fb7c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(t){return t&&t.__esModule?t:{default:t}}(n("a88e"));var a={data:function(){return{dataList:[]}},onShow:function(){this.$langConfig.refresh()},mixins:[i.default],methods:{getData:function(t){var e=this;this.$api.sendRequest({url:"/api/notice/page",data:{page_size:t.size,page:t.num},success:function(n){var i=[],a=n.message;0==n.code&&n.data?i=n.data.list:e.$util.showToast({title:a}),t.endSuccess(i.length),1==t.num&&(e.dataList=[]),e.dataList=e.dataList.concat(i),e.dataList.forEach((function(t){t.info=t.content.replace(/<[^>]+>/g,"")})),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(n){t.endErr(),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},jumpDetail:function(t){this.$util.redirectTo("/otherpages/notice/detail/detail?notice_id="+t)}},onShareAppMessage:function(t){return{title:"公告",path:"/otherpages/notice/list/list",success:function(t){},fail:function(t){}}}};e.default=a}},[["7998","common/runtime","common/vendor"]]]);