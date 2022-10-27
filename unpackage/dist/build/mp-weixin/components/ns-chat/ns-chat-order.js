(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-chat/ns-chat-order"],{"127a":function(n,t,o){"use strict";o.d(t,"b",(function(){return e})),o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){}));var e=function(){var n=this.$createElement,t=(this._self._c,this.orderInfo.order_goods?this.$util.img(this.orderInfo.order_goods?this.orderInfo.order_goods[0].sku_image:""):null);this.$mp.data=Object.assign({},{$root:{g0:t}})},r=[]},"20bf":function(n,t,o){"use strict";o.r(t);var e=o("90c8"),r=o.n(e);for(var i in e)["default"].indexOf(i)<0&&function(n){o.d(t,n,(function(){return e[n]}))}(i);t["default"]=r.a},4263:function(n,t,o){"use strict";var e=o("7001"),r=o.n(e);r.a},6427:function(n,t,o){"use strict";o.r(t);var e=o("127a"),r=o("20bf");for(var i in r)["default"].indexOf(i)<0&&function(n){o.d(t,n,(function(){return r[n]}))}(i);o("4263");var d=o("f0c5"),s=Object(d["a"])(r["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);t["default"]=s.exports},7001:function(n,t,o){},"90c8":function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"ns-chat-order",props:{orderId:{type:[Number,String]},isCanSend:Boolean},data:function(){return{orderInfo:{}}},mounted:function(){this.getGoodsInfo()},methods:{getGoodsInfo:function(){var n=this;this.$api.sendRequest({url:"/api/order/detail",data:{order_id:this.orderId},success:function(t){t.code>=0&&(n.orderInfo=t.data)}})},sendMsg:function(){this.$emit("sendMsg","order")}}};t.default=e}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-chat/ns-chat-order-create-component',
    {
        'components/ns-chat/ns-chat-order-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6427"))
        })
    },
    [['components/ns-chat/ns-chat-order-create-component']]
]);
