require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/fenxiao/index/index"],{"01b5":function(n,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return t}));var t={nsCopyright:function(){return i.e("components/ns-copyright/ns-copyright").then(i.bind(null,"23f0"))},loadingCover:function(){return i.e("components/loading-cover/loading-cover").then(i.bind(null,"9257"))}},a=function(){var n=this,e=n.$createElement,i=(n._self._c,n.info.fenxiao_name&&n.info.headimg?n.$util.img(n.info.headimg):null),t=n.info.fenxiao_name&&!n.info.headimg?n.$util.getDefaultImage():null,a=n.info.fenxiao_name?n.$util.img("upload/uniapp/fenxiao/index/code1.png"):null,o=n.info.fenxiao_name?n.$util.img("upload/uniapp/fenxiao/index/team2.png"):null,u=n.info.fenxiao_name?n.$util.img("upload/uniapp/fenxiao/index/member.png"):null,r=n.info.fenxiao_name?n.$util.img("upload/uniapp/fenxiao/index/withdraw.png"):null,l=n.info.fenxiao_name?n.$util.img("upload/uniapp/fenxiao/index/tixian.png"):null,f=n.info.fenxiao_name?n.$util.img("upload/uniapp/fenxiao/index/order.png"):null,d=n.info.fenxiao_name?n.$util.img("upload/uniapp/fenxiao/index/team.png"):null,c=n.info.fenxiao_name?n.$util.img("upload/uniapp/fenxiao/index/code.png"):null,s=n.info.fenxiao_name?n.$util.img("upload/uniapp/fenxiao/index/market.png"):null,p=n.info.fenxiao_name?n.$util.img("upload/uniapp/fenxiao/index/collection.png"):null,g=n.info.fenxiao_name?n.$util.img("upload/uniapp/fenxiao/index/bill.png"):null,x=n.info.fenxiao_name?null:n.$util.img("upload/uniapp/fenxiao/index/no-fenxiao.png");n._isMounted||(n.e0=function(e){n.info.headimg=n.$util.getDefaultImage().default_headimg},n.e1=function(e){return n.$util.redirectTo("/otherpages/fenxiao/bill/bill")},n.e2=function(e){return n.$util.redirectTo("/otherpages/fenxiao/withdraw_list/withdraw_list")},n.e3=function(e){return n.$util.redirectTo("/otherpages/fenxiao/withdraw_list/withdraw_list")},n.e4=function(e){return n.$util.redirectTo("/otherpages/fenxiao/withdraw_apply/withdraw_apply")},n.e5=function(e){return n.$util.redirectTo("/otherpages/fenxiao/team/team")},n.e6=function(e){return n.$util.redirectTo("/otherpages/fenxiao/team/team")},n.e7=function(e){return n.$util.redirectTo("/otherpages/fenxiao/apply/apply")}),n.$mp.data=Object.assign({},{$root:{g0:i,g1:t,g2:a,g3:o,g4:u,g5:r,g6:l,g7:f,g8:d,g9:c,g10:s,g11:p,g12:g,g13:x}})},o=[]},1788:function(n,e,i){},"1e46":function(n,e,i){},"42a9":function(n,e,i){"use strict";var t=i("1788"),a=i.n(t);a.a},9458:function(n,e,i){"use strict";i.r(e);var t=i("cd64"),a=i.n(t);for(var o in t)["default"].indexOf(o)<0&&function(n){i.d(e,n,(function(){return t[n]}))}(o);e["default"]=a.a},"9c87":function(n,e,i){"use strict";(function(n){i("d947");t(i("66fd"));var e=t(i("b8aa"));function t(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=i,n(e.default)}).call(this,i("543d")["createPage"])},a4a9:function(n,e,i){"use strict";var t=i("1e46"),a=i.n(t);a.a},b8aa:function(n,e,i){"use strict";i.r(e);var t=i("01b5"),a=i("9458");for(var o in a)["default"].indexOf(o)<0&&function(n){i.d(e,n,(function(){return a[n]}))}(o);i("a4a9"),i("42a9");var u=i("f0c5"),r=Object(u["a"])(a["default"],t["b"],t["c"],!1,null,"2cf24ec9",null,!1,t["a"],void 0);e["default"]=r.exports},cd64:function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o(i("be84")),a=o(i("a88e"));function o(n){return n&&n.__esModule?n:{default:n}}var u={data:function(){return{info:{fenxiao_name:""},teamNum:0}},components:{nsCopyRight:function(){i.e("components/ns-copyright/ns-copyright").then(function(){return resolve(i("23f0"))}.bind(null,i)).catch(i.oe)}},mixins:[t.default,a.default],onShow:function(){var e=this;this.$langConfig.refresh(),this.addonIsExit.fenxiao?(this.getFenxiaoWrods(),this.$langConfig.title(this.fenxiaoWords.concept+"中心"),n.getStorageSync("token")?this.getFenxiaoDetail():this.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/fenxiao/index/index"},"redirectTo")):(this.$util.showToast({title:"分销未开启",mask:!0}),setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),1e3))},methods:{redirectTo:function(n){-1==this.info.status?this.$util.showToast({title:"您的账户已被冻结"}):this.$util.redirectTo(n)},getFenxiaoDetail:function(){var n=this;this.$api.sendRequest({url:"/fenxiao/api/fenxiao/detail",success:function(e){e.data?(n.$refs.loadingCover&&n.$refs.loadingCover.hide(),n.info=e.data,n.getTeamNum()):n.$util.redirectTo("/otherpages/fenxiao/apply/apply",{},"redirectTo")},fail:function(e){n.$refs.loadingCover&&n.$refs.loadingCover.hide()}})},goTixian:function(){this.$util.redirectTo("/otherpages/fenxiao/withdraw_apply/withdraw_apply")},getTeamNum:function(){var n=this;this.$api.sendRequest({url:"/fenxiao/api/fenxiao/teamnum",success:function(e){e.code>=0&&(n.teamNum=e.data)}})}},onBackPress:function(n){return"navigateBack"!==n.from&&(this.$util.redirectTo("/pages/member/index/index",{},"reLaunch"),!0)}};e.default=u}).call(this,i("543d")["default"])}},[["9c87","common/runtime","common/vendor"]]]);