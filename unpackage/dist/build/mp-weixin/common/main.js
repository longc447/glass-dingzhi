(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"44a9":function(e,t,n){"use strict";n.r(t);var o=n("e7e0"),a=n.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=a.a},6560:function(e,t,n){"use strict";n.r(t);var o=n("44a9");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("7372");var c=n("f0c5"),r=Object(c["a"])(o["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);t["default"]=r.exports},7372:function(e,t,n){"use strict";var o=n("d721"),a=n.n(o);a.a},bb8c:function(e,t,n){"use strict";(function(e){n("d947");var t=l(n("66fd")),o=l(n("6560")),a=l(n("1312")),c=l(n("e7f5")),r=l(n("2504")),u=l(n("b87d")),i=l(n("04b1"));function l(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}wx.__webpack_require_UNI_MP_PLUGIN__=n,t.default.prototype.$store=a.default,t.default.config.productionTip=!1,t.default.prototype.$util=c.default,t.default.prototype.$api=r.default,t.default.prototype.$langConfig=u.default,t.default.prototype.$lang=u.default.lang,t.default.prototype.$config=i.default,o.default.mpType="app";t.default.component("loading-cover",(function(){n.e("components/loading-cover/loading-cover").then(function(){return resolve(n("9257"))}.bind(null,n)).catch(n.oe)}));t.default.component("ns-empty",(function(){n.e("components/ns-empty/ns-empty").then(function(){return resolve(n("ff23"))}.bind(null,n)).catch(n.oe)}));t.default.component("mescroll-uni",(function(){n.e("components/mescroll/my-list-mescroll").then(function(){return resolve(n("8218"))}.bind(null,n)).catch(n.oe)}));t.default.component("mescroll-body",(function(){Promise.all([n.e("common/vendor"),n.e("components/mescroll/mescroll-body")]).then(function(){return resolve(n("d5c3"))}.bind(null,n)).catch(n.oe)}));t.default.component("ns-login",(function(){Promise.all([n.e("common/vendor"),n.e("components/ns-login/ns-login")]).then(function(){return resolve(n("8689"))}.bind(null,n)).catch(n.oe)}));var p=new t.default(s(s({},o.default),{},{store:a.default}));e(p).$mount()}).call(this,n("543d")["createApp"])},d721:function(e,t,n){},e7e0:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n("3c36")),a=c(n("04b1"));function c(e){return e&&e.__esModule?e:{default:e}}var r={mixins:[o.default],onLaunch:function(t){e.getStorageSync("baseUrl")!=a.default.baseUrl&&e.clearStorageSync(),e.setStorageSync("baseUrl",a.default.baseUrl);var n=e.getUpdateManager();n.onCheckForUpdate((function(e){})),n.onUpdateReady((function(t){e.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&n.applyUpdate()}})})),n.onUpdateFailed((function(e){})),e.onNetworkStatusChange((function(t){t.isConnected||e.showModal({title:"网络失去链接",content:"请检查网络链接",showCancel:!1})}))},onShow:function(){var t=this;this.$store.dispatch("init"),e.getStorageSync("token")||e.getStorageSync("loginLock")||e.getStorageSync("unbound")||this.$util.isWeiXin()&&this.$util.getUrlCode((function(n){n.source_member&&e.setStorageSync("source_member",n.source_member),void 0==n.code?t.$api.sendRequest({url:"/wechat/api/wechat/authcode",data:{redirect_url:location.href},success:function(e){e.code>=0&&(location.href=e.data)}}):t.$api.sendRequest({url:"/wechat/api/wechat/authcodetoopenid",data:{code:n.code},success:function(e){if(e.code>=0){var n={};e.data.openid&&(n.wx_openid=e.data.openid),e.data.unionid&&(n.wx_unionid=e.data.unionid),e.data.userinfo&&Object.assign(n,e.data.userinfo),t.authLogin(n)}}})}))},onHide:function(){this.$store.dispatch("getThemeStyle")},methods:{authLogin:function(t){var n=this;e.setStorage({key:"authInfo",data:t}),e.getStorageSync("source_member")&&(t.source_member=e.getStorageSync("source_member")),this.$api.sendRequest({url:"/api/login/auth",data:t,success:function(t){t.code>=0?e.setStorage({key:"token",data:t.data.token,success:function(){n.$store.dispatch("getCartNumber"),n.$store.commit("setToken",t.data.token)}}):e.setStorage({key:"unbound",data:1,success:function(){}})}})}}};t.default=r}).call(this,n("543d")["default"])}},[["bb8c","common/runtime","common/vendor"]]]);