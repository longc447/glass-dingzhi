(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-chat/ns-chat-goods"],{5281:function(n,o,t){"use strict";t.r(o);var s=t("8eb5"),e=t("6d6d");for(var i in e)["default"].indexOf(i)<0&&function(n){t.d(o,n,(function(){return e[n]}))}(i);t("7fea");var d=t("f0c5"),u=Object(d["a"])(e["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],void 0);o["default"]=u.exports},"5e0d":function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s={name:"ns-chat-goods",props:{skuId:{type:[Number,String]},isCanSend:Boolean},data:function(){return{goodsInfo:{}}},mounted:function(){this.getGoodsInfo()},methods:{getGoodsInfo:function(){var n=this;this.$api.sendRequest({url:"/api/goodssku/detail",data:{sku_id:this.skuId},success:function(o){o.code>=0&&(n.goodsInfo=o.data.goods_sku_detail,n.goodsInfo.goods_image=n.goodsInfo.goods_image.split(",")[0])}})},sendMsg:function(){this.$emit("sendMsg","goods")}}};o.default=s},"6d6d":function(n,o,t){"use strict";t.r(o);var s=t("5e0d"),e=t.n(s);for(var i in s)["default"].indexOf(i)<0&&function(n){t.d(o,n,(function(){return s[n]}))}(i);o["default"]=e.a},"7fea":function(n,o,t){"use strict";var s=t("8fc5"),e=t.n(s);e.a},"8eb5":function(n,o,t){"use strict";t.d(o,"b",(function(){return s})),t.d(o,"c",(function(){return e})),t.d(o,"a",(function(){}));var s=function(){var n=this.$createElement,o=(this._self._c,this.goodsInfo.goods_name?this.$util.img(this.goodsInfo.sku_image):null);this.$mp.data=Object.assign({},{$root:{g0:o}})},e=[]},"8fc5":function(n,o,t){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-chat/ns-chat-goods-create-component',
    {
        'components/ns-chat/ns-chat-goods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5281"))
        })
    },
    [['components/ns-chat/ns-chat-goods-create-component']]
]);
