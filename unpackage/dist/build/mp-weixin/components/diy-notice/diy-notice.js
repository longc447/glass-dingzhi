(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/diy-notice/diy-notice"],{"29a1":function(t,i,e){},3704:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"diy-notice",props:{value:{type:Object},siteId:{type:[Number,String],default:0}},data:function(){return{list:[],index:0}},created:function(){this.getData()},methods:{getData:function(){var t=this,i={};"diy"==this.value.sources&&(i.id_arr=this.value.noticeIds.toString()),i.site_id=this.siteId?this.siteId:0,this.$api.sendRequest({url:"/api/notice/lists",data:i,success:function(i){0==i.code&&i.data&&(t.list=i.data)}})},redirectTo:function(){if(this.value&&this.value.list&&this.value.list[this.index].link){var t=this.value.list[this.index].link;this.siteId&&(t.site_id=this.siteId),this.$util.diyRedirectTo(t)}},change:function(t){this.index=t.detail.current}}};i.default=n},"56cf":function(t,i,e){"use strict";e.r(i);var n=e("3704"),s=e.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=s.a},"7bf8":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){}));var n=function(){var t=this.$createElement,i=(this._self._c,this.$util.img("upload/uniapp/ns-notice.png")),e=i?this.$util.img("upload/uniapp/ns-notice.png"):null;this.$mp.data=Object.assign({},{$root:{g0:i,g1:e}})},s=[]},"8ee2":function(t,i,e){"use strict";e.r(i);var n=e("7bf8"),s=e("56cf");for(var a in s)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("cdeb");var u=e("f0c5"),c=Object(u["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);i["default"]=c.exports},cdeb:function(t,i,e){"use strict";var n=e("29a1"),s=e.n(n);s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/diy-notice/diy-notice-create-component',
    {
        'components/diy-notice/diy-notice-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8ee2"))
        })
    },
    [['components/diy-notice/diy-notice-create-component']]
]);