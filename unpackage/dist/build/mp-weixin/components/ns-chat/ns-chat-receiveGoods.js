(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-chat/ns-chat-receiveGoods"],{"207d":function(t,o,n){"use strict";n.r(o);var e=n("26d3"),s=n("8545");for(var i in s)["default"].indexOf(i)<0&&function(t){n.d(o,t,(function(){return s[t]}))}(i);n("4f5c");var u=n("f0c5"),d=Object(u["a"])(s["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);o["default"]=d.exports},"26d3":function(t,o,n){"use strict";n.d(o,"b",(function(){return e})),n.d(o,"c",(function(){return s})),n.d(o,"a",(function(){}));var e=function(){var t=this.$createElement,o=(this._self._c,this.$util.img(this.goodsINfo.goods_image));this.$mp.data=Object.assign({},{$root:{g0:o}})},s=[]},"3d74":function(t,o,n){},"4f5c":function(t,o,n){"use strict";var e=n("3d74"),s=n.n(e);s.a},8545:function(t,o,n){"use strict";n.r(o);var e=n("f868"),s=n.n(e);for(var i in e)["default"].indexOf(i)<0&&function(t){n.d(o,t,(function(){return e[t]}))}(i);o["default"]=s.a},f868:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={name:"ns-chat-receiveGoods",props:{skuId:{type:[Number,String]}},data:function(){return{goodsINfo:{}}},mounted:function(){this.getInfo()},methods:{getInfo:function(){var t=this;console.log(this.skuId,"this.orderId"),this.$api.sendRequest({url:"/api/goodssku/detail",data:{sku_id:this.skuId},success:function(o){console.log(o,"res"),o.code>=0&&(t.goodsINfo=o.data.goods_sku_detail)}})},go_shop:function(){this.$util.redirectTo("/pages/goods/detail/detail?sku_id="+this.skuId)}}};o.default=e}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-chat/ns-chat-receiveGoods-create-component',
    {
        'components/ns-chat/ns-chat-receiveGoods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("207d"))
        })
    },
    [['components/ns-chat/ns-chat-receiveGoods-create-component']]
]);
