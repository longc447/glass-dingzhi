(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register/register"],{"18da":function(e,t,r){},2409:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}));var n={uniPopup:function(){return r.e("components/uni-popup/uni-popup").then(r.bind(null,"fbc8"))},loadingCover:function(){return r.e("components/loading-cover/loading-cover").then(r.bind(null,"9257"))},registerReward:function(){return Promise.all([r.e("common/vendor"),r.e("components/register-reward/register-reward")]).then(r.bind(null,"9c8d"))}},o=function(){var e=this.$createElement,t=(this._self._c,"mobile"==this.registerMode&&-1!=this.registerConfig.register.indexOf("username")),r="account"==this.registerMode&&-1!=this.registerConfig.register.indexOf("mobile");this.$mp.data=Object.assign({},{$root:{g0:t,g1:r}})},i=[]},"2b8a":function(e,t,r){"use strict";var n=r("d929"),o=r.n(n);o.a},3920:function(e,t,r){"use strict";var n=r("18da"),o=r.n(n);o.a},6162:function(e,t,r){"use strict";(function(e){r("d947");n(r("66fd"));var t=n(r("f75c"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=r,e(t.default)}).call(this,r("543d")["createPage"])},"89f9":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("d743")),o=a(r("3c36")),i=a(r("a88e"));function a(e){return e&&e.__esModule?e:{default:e}}function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch($){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof l?t:l,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch($){return{type:"throw",arg:$}}}e.wrap=u;var d={};function l(){}function f(){}function p(){}var g={};s(g,o,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(L([])));v&&v!==t&&r.call(v,o)&&(g=v);var y=p.prototype=l.prototype=Object.create(g);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){(function n(o,i,a,c){var s=h(e[o],e,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)})(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=h(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=p,s(y,"constructor",p),s(p,"constructor",f),f.displayName=s(p,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,a,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),s(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(y),s(y,a,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function s(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){s(i,n,o,a,c,"next",e)}function c(e){s(i,n,o,a,c,"throw",e)}a(void 0)}))}}var h={components:{uniPopup:function(){r.e("components/uni-popup/uni-popup").then(function(){return resolve(r("fbc8"))}.bind(null,r)).catch(r.oe)},registerReward:function(){Promise.all([r.e("common/vendor"),r.e("components/register-reward/register-reward")]).then(function(){return resolve(r("9c8d"))}.bind(null,r)).catch(r.oe)}},data:function(){return{allowRegister:!0,registerMode:"account",formData:{mobile:"",account:"",password:"",rePassword:"",vercode:"",dynacode:"",key:""},regisiterAgreement:{title:"",content:""},captcha:{id:"",img:""},isSub:!1,back:"",dynacodeData:{seconds:120,timer:null,codeText:"获取动态码",isSend:!1},registerConfig:{register:""}}},mixins:[o.default,i.default],onLoad:function(t){t.back&&(this.back=t.back),this.getCaptcha(),this.getRegisiterAggrement(),e.getStorageSync("authInfo")&&(this.authInfo=e.getStorageSync("authInfo"))},onShow:function(){this.$langConfig.refresh(),this.getCode()},onReady:function(){var e=this;return u(c().mark((function t(){return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getRegisterConfig();case 2:e.$refs.loadingCover&&e.$refs.loadingCover.hide();case 3:case"end":return t.stop()}}),t)})))()},methods:{enterWholesale:function(){e.navigateTo({url:"wholesale/wholesale"})},switchRegisterMode:function(){this.registerMode="mobile"==this.registerMode?"account":"mobile"},openPopup:function(){this.$refs.registerPopup.open()},toClose:function(){this.$refs.registerPopup.close()},getRegisiterAggrement:function(){var e=this;this.$api.sendRequest({url:"/api/register/aggrement",success:function(t){t.code>=0&&(e.regisiterAgreement=t.data)}})},getRegisterConfig:function(){var e=this;return u(c().mark((function t(){var r;return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.sendRequest({url:"/api/register/config",async:!1});case 2:r=t.sent,e.registerConfig=r.data.value,""==e.registerConfig.register?(e.$util.showToast({title:"平台未启用注册!"}),setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"tabbar")}),1e3)):-1!=e.registerConfig.register.indexOf("username")?e.registerMode="account":e.registerMode="mobile",e.$refs.loadingCover&&e.$refs.loadingCover.hide();case 6:case"end":return t.stop()}}),t)})))()},getCaptcha:function(){var e=this;this.$api.sendRequest({url:"/api/captcha/captcha",data:{captcha_id:this.captcha.id},success:function(t){t.code>=0&&(e.captcha=t.data,e.captcha.img=e.captcha.img.replace(/\r\n/g,""))}})},register:function(){var t=this;if("account"==this.registerMode){var r="/api/register/username";n={username:this.formData.account,password:this.formData.password}}else{r="/api/register/mobile";var n={mobile:this.formData.mobile,key:this.formData.key,code:this.formData.dynacode}}if(""!=this.captcha.id&&(n.captcha_id=this.captcha.id,n.captcha_code=this.formData.vercode),Object.keys(this.authInfo).length&&Object.assign(n,this.authInfo),this.authInfo.avatarUrl&&(n.headimg=this.authInfo.avatarUrl),this.authInfo.nickName&&(n.nickname=this.authInfo.nickName),e.getStorageSync("source_member")&&(n.source_member=e.getStorageSync("source_member")),this.verify(n)){if(this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:r,data:n,success:function(r){r.code>=0?e.setStorage({key:"token",data:r.data.token,success:function(){e.removeStorageSync("loginLock"),e.removeStorageSync("unbound"),e.removeStorageSync("authInfo"),t.$refs.registerReward.getReward()?(t.$util.showToast({title:"注册成功"}),t.$refs.registerReward.open()):""!=t.back?t.$util.redirectTo(decodeURIComponent(t.back),{},"reLaunch"):t.$util.redirectTo("/pages/member/index/index",{},"reLaunch")}}):(t.isSub=!1,t.getCaptcha(),t.$util.showToast({title:r.message}))},fail:function(e){t.isSub=!1,t.getCaptcha()}})}},verify:function(e){if("mobile"==this.registerMode){var t=[{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"}];""!=this.captcha.id&&t.push({name:"captcha_code",checkType:"required",errorMsg:this.$lang("captchaPlaceholder")}),t.push({name:"code",checkType:"required",errorMsg:this.$lang("dynacodePlaceholder")})}if("account"==this.registerMode){t=[{name:"username",checkType:"required",errorMsg:"请输入账号"},{name:"password",checkType:"required",errorMsg:"请输入密码"}];var r=this.registerConfig;if(r.pwd_len>0&&t.push({name:"password",checkType:"lengthMin",checkRule:r.pwd_len,errorMsg:"密码长度不能小于"+r.pwd_len+"位"}),""!=r.pwd_complexity){var o="密码需包含",i="";-1!=r.pwd_complexity.indexOf("number")&&(i+="(?=.*?[0-9])",o+="数字"),-1!=r.pwd_complexity.indexOf("letter")&&(i+="(?=.*?[a-z])",o+="、小写字母"),-1!=r.pwd_complexity.indexOf("upper_case")&&(i+="(?=.*?[A-Z])",o+="、大写字母"),-1!=r.pwd_complexity.indexOf("symbol")&&(i+="(?=.*?[#?!@$%^&*-])",o+="、特殊字符"),t.push({name:"password",checkType:"reg",checkRule:i,errorMsg:o})}if(this.formData.password!=this.formData.rePassword)return this.$util.showToast({title:"两次密码不一致"}),!1;""!=this.captcha.id&&t.push({name:"captcha_code",checkType:"required",errorMsg:this.$lang("captchaPlaceholder")})}var a=n.default.check(e,t);return!!a||(this.$util.showToast({title:n.default.error}),!1)},toLogin:function(){this.back?this.$util.redirectTo("/pages/login/login/login",{back:this.back}):this.$util.redirectTo("/pages/login/login/login")},sendMobileCode:function(){var e=this;if(120==this.dynacodeData.seconds){var t={mobile:this.formData.mobile,captcha_id:this.captcha.id,captcha_code:this.formData.vercode},r=n.default.check(t,[{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"},{name:"captcha_code",checkType:"required",errorMsg:"请输入验证码"}]);r?this.dynacodeData.isSend||(this.dynacodeData.isSend=!0,this.$api.sendRequest({url:"/api/register/mobileCode",data:t,success:function(t){e.dynacodeData.isSend=!1,t.code>=0?(e.formData.key=t.data.key,120==e.dynacodeData.seconds&&null==e.dynacodeData.timer&&(e.dynacodeData.timer=setInterval((function(){e.dynacodeData.seconds--,e.dynacodeData.codeText=e.dynacodeData.seconds+"s后可重新获取"}),1e3))):e.$util.showToast({title:t.message})},fail:function(){e.$util.showToast({title:"request:fail"}),e.dynacodeData.isSend=!1}})):this.$util.showToast({title:n.default.error})}}},watch:{"dynacodeData.seconds":{handler:function(e,t){0==e&&(clearInterval(this.dynacodeData.timer),this.dynacodeData={seconds:120,timer:null,codeText:"获取动态码",isSend:!1})},immediate:!0,deep:!0}}};t.default=h}).call(this,r("543d")["default"])},d929:function(e,t,r){},ebb5:function(e,t,r){"use strict";r.r(t);var n=r("89f9"),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},f75c:function(e,t,r){"use strict";r.r(t);var n=r("2409"),o=r("ebb5");for(var i in o)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return o[e]}))}(i);r("3920"),r("2b8a");var a=r("f0c5"),c=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"1347ede2",null,!1,n["a"],void 0);t["default"]=c.exports}},[["6162","common/runtime","common/vendor"]]]);