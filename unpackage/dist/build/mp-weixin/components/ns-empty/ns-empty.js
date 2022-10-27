(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-empty/ns-empty"],{6470:function(t,e,n){"use strict";var i=n("7da4"),u=n.n(i);u.a},"68ff":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},props:{text:{type:String,default:"暂无相关数据"},isIndex:{type:Boolean,default:!0},emptyBtn:{type:Object,default:function(){return{text:"去逛逛"}}},fixed:{type:Boolean,default:!0}},methods:{goIndex:function(){this.emptyBtn.url?this.$util.redirectTo(this.emptyBtn.url,{},"redirectTo"):this.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}}};e.default=i},"7da4":function(t,e,n){},"891c":function(t,e,n){"use strict";n.r(e);var i=n("68ff"),u=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=u.a},dc39:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=(this._self._c,this.$util.img("upload/uniapp/common-empty.png"));this.$mp.data=Object.assign({},{$root:{g0:e}})},u=[]},ff23:function(t,e,n){"use strict";n.r(e);var i=n("dc39"),u=n("891c");for(var r in u)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("6470");var o=n("f0c5"),a=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-empty/ns-empty-create-component',
    {
        'components/ns-empty/ns-empty-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ff23"))
        })
    },
    [['components/ns-empty/ns-empty-create-component']]
]);
