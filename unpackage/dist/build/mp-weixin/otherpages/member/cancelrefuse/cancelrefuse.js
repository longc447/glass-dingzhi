require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/cancelrefuse/cancelrefuse"],{"0b26":function(e,t,n){},3960:function(e,t,n){"use strict";(function(e){n("d947");a(n("66fd"));var t=a(n("76b6"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"3ec3":function(e,t,n){"use strict";n.r(t);var a=n("b0ff"),i=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=i.a},"76b6":function(e,t,n){"use strict";n.r(t);var a=n("cf9f"),i=n("3ec3");for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);n("f46f");var u=n("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"916ba61c",null,!1,a["a"],void 0);t["default"]=r.exports},b0ff:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(n("a88e"));var i={data:function(){return{reason:""}},mixins:[a.default],onLoad:function(t){this.$langConfig.refresh(),t.back&&(this.back=t.back),e.getStorageSync("token")?this.getStatus():this.$util.redirectTo("/pages/login/login/login")},methods:{getStatus:function(){var e=this;this.$api.sendRequest({url:"/membercancel/api/membercancel/info",success:function(t){t.code>=0&&(e.reason=t.data.reason)}})},toIndex:function(){this.$util.redirectTo("/pages/member/index/index")},apply:function(){this.$util.redirectTo("/otherpages/member/cancellation/cancellation")}}};t.default=i}).call(this,n("543d")["default"])},cf9f:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement,t=(this._self._c,this.$util.img("/upload/uniapp/member/refuse.png"));this.$mp.data=Object.assign({},{$root:{g0:t}})},i=[]},f46f:function(e,t,n){"use strict";var a=n("0b26"),i=n.n(a);i.a}},[["3960","common/runtime","common/vendor"]]]);