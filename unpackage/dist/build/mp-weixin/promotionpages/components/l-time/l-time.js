require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/components/l-time/l-time"],{1380:function(t,e,n){"use strict";n.r(e);var a=n("9491"),u=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=u.a},4516:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},u=[]},9491:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(t){return t&&t.__esModule?t:{default:t}}(n("b045"));var u={name:"l-time",props:{text:{type:[String,Number,Date],default:""},maxDate:{type:Boolean,default:!1}},data:function(){return{textVal:this.text}},watch:{text:function(){this.textVal=this.text}},computed:{temp:function(){return this.getText()}},methods:{getText:function(){var t=this,e=a.default.getFormatTime(t.textVal,t.maxDate);return e&&(e.endsWith("刚刚")||e.endsWith("分钟前"))&&setTimeout((function(){var e=t.textVal;t.textVal="",t.textVal=e}),6e4),this.textVal?e:""},onClick:function(){this.$emit("on-tap",this.textVal)}}};e.default=u},b9ee:function(t,e,n){"use strict";n.r(e);var a=n("4516"),u=n("1380");for(var i in u)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(i);var o=n("f0c5"),r=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'promotionpages/components/l-time/l-time-create-component',
    {
        'promotionpages/components/l-time/l-time-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b9ee"))
        })
    },
    [['promotionpages/components/l-time/l-time-create-component']]
]);
