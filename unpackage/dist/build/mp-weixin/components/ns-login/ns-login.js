(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-login/ns-login"],{"0afb":function(e,n,t){},"1a7a":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return o}));var o={uniPopup:function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"fbc8"))},bindMobile:function(){return Promise.all([t.e("common/vendor"),t.e("components/bind-mobile/bind-mobile")]).then(t.bind(null,"92d0"))},registerReward:function(){return Promise.all([t.e("common/vendor"),t.e("components/register-reward/register-reward")]).then(t.bind(null,"9c8d"))}},i=function(){var e=this.$createElement,n=(this._self._c,this.$util.img("/upload/uniapp/member/login.png"));this.$mp.data=Object.assign({},{$root:{g0:n}})},r=[]},"68a8":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;i(t("04b1"));var o=i(t("3c36"));function i(e){return e&&e.__esModule?e:{default:e}}var r={mixins:[o.default],name:"ns-login",components:{uniPopup:function(){t.e("components/uni-popup/uni-popup").then(function(){return resolve(t("fbc8"))}.bind(null,t)).catch(t.oe)},bindMobile:function(){Promise.all([t.e("common/vendor"),t.e("components/bind-mobile/bind-mobile")]).then(function(){return resolve(t("92d0"))}.bind(null,t)).catch(t.oe)},registerReward:function(){Promise.all([t.e("common/vendor"),t.e("components/register-reward/register-reward")]).then(function(){return resolve(t("9c8d"))}.bind(null,t)).catch(t.oe)}},data:function(){return{url:"",registerConfig:{}}},created:function(){this.getRegisterConfig()},mounted:function(){},methods:{getRegisterConfig:function(){var e=this;this.$api.sendRequest({url:"/api/register/config",success:function(n){n.code>=0&&(e.registerConfig=n.data.value)}})},open:function(e){e&&(this.url=e),this.$refs.auth.open()},close:function(){this.$refs.auth.close()},login:function(n){var t=this;e.getStorageSync("loginLock")?(this.$refs.auth.close(),this.toLogin()):"getUserInfo:ok"==n.detail.errMsg&&this.getCode((function(e){e?t.authLogin(e):(t.$refs.auth.close(),t.toLogin())}))},toLogin:function(){this.url?this.$util.redirectTo("/pages/login/login/login",{back:encodeURIComponent(this.url)}):this.$util.redirectTo("/pages/login/login/login")},authLogin:function(n){var t=this;e.showLoading({title:"登录中"}),e.setStorage({key:"authInfo",data:n}),e.getStorageSync("source_member")&&(n.source_member=e.getStorageSync("source_member")),this.$api.sendRequest({url:"/api/login/auth",data:n,success:function(n){t.$refs.auth.close(),n.code>=0?(e.setStorage({key:"token",data:n.data.token,success:function(){e.removeStorageSync("loginLock"),e.removeStorageSync("unbound"),e.removeStorageSync("authInfo"),t.$store.dispatch("getCartNumber"),t.$store.commit("setToken",n.data.token),n.data.is_register&&t.$refs.registerReward.getReward()&&t.$refs.registerReward.open()}}),setTimeout((function(){e.hideLoading()}),1e3)):1==t.registerConfig.third_party&&1==t.registerConfig.bind_mobile?(e.hideLoading(),t.$refs.bindMobile.open()):0==t.registerConfig.third_party?(e.hideLoading(),t.toLogin()):(e.hideLoading(),t.$util.showToast({title:n.message}))},fail:function(){e.hideLoading(),t.$refs.auth.close(),t.$util.showToast({title:"登录失败"})}})}}};n.default=r}).call(this,t("543d")["default"])},8689:function(e,n,t){"use strict";t.r(n);var o=t("1a7a"),i=t("fd7b");for(var r in i)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t("bbae");var u=t("f0c5"),s=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=s.exports},bbae:function(e,n,t){"use strict";var o=t("0afb"),i=t.n(o);i.a},fd7b:function(e,n,t){"use strict";t.r(n);var o=t("68a8"),i=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-login/ns-login-create-component',
    {
        'components/ns-login/ns-login-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8689"))
        })
    },
    [['components/ns-login/ns-login-create-component']]
]);