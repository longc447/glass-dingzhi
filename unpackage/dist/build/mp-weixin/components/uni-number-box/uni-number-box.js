(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-number-box/uni-number-box"],{"276f":function(t,e,n){"use strict";n.r(e);var i=n("5bae"),u=n("3b80");for(var a in u)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("334d");var l=n("f0c5"),s=Object(l["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=s.exports},"334d":function(t,e,n){"use strict";var i=n("b9cd"),u=n.n(i);u.a},"3b80":function(t,e,n){"use strict";n.r(e);var i=n("9459"),u=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=u.a},"5bae":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},u=[]},9459:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniNumberBox",props:{value:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},modifyFlag:{type:Boolean,default:!1},size:{type:String,default:"default"},index:{type:Number,default:-1}},data:function(){return{inputValue:0}},watch:{value:function(t){this.inputValue=+t},inputValue:function(t,e,n){+t===+e||this.modifyFlag||this.$emit("change",t,n)}},created:function(){this.inputValue=+this.value},methods:{_calcValue:function(t){if(!this.disabled&&!this.modifyFlag){var e=this._getDecimalScale(),n=this.inputValue*e,i=this.step*e;"minus"===t?n-=i:"plus"===t&&(n+=i),n<this.min||n>this.max?this.$emit("limit",{value:this.inputValue,type:t},this.index):this.inputValue=n/e}},_getDecimalScale:function(){var t=1;return~~this.step!==this.step&&(t=Math.pow(10,(this.step+"").split(".")[1].length)),t},_onInput:function(t){var e=this;setTimeout((function(){var n=t.detail.value;/(^[1-9]\d*$)/.test(n)||(n=e.min),n?(n=+n,n>e.max?n=e.max:n<e.min&&(n=e.min),e.inputValue=n):e.inputValue=0}),0)}}};e.default=i},b9cd:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-number-box/uni-number-box-create-component',
    {
        'components/uni-number-box/uni-number-box-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("276f"))
        })
    },
    [['components/uni-number-box/uni-number-box-create-component']]
]);