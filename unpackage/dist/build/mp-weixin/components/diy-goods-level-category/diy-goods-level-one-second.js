(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/diy-goods-level-category/diy-goods-level-one-second"],{30558:function(t,e,i){"use strict";i.r(e);var n=i("4f7d"),a=i("cd00b");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("de83");var s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=c.exports},"4f7d":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={nsEmpty:function(){return i.e("components/ns-empty/ns-empty").then(i.bind(null,"ff23"))}},a=function(){var t=this,e=t.$createElement,i=(t._self._c,t.cateList.length&&t.isLoadingCate?t.__map(t.cateList,(function(e,i){var n=t.__get_orig(e),a=e.image?t.$util.img(e.image):null,o=e.image?null:t.$util.getDefaultImage();return{$orig:n,g0:a,g1:o}})):null);t.$mp.data=Object.assign({},{$root:{l0:i}})},o=[]},"7a3c":function(t,e,i){},cd00b:function(t,e,i){"use strict";i.r(e);var n=i("e562"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},de83:function(t,e,i){"use strict";var n=i("7a3c"),a=i.n(n);a.a},e562:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(t){return t&&t.__esModule?t:{default:t}}(i("a88e"));var a={data:function(){return{isLoadingCate:!1,cateList:[],height:0}},components:{nsSearch:function(){i.e("components/ns-search/ns-search").then(function(){return resolve(i("8f75"))}.bind(null,i)).catch(i.oe)}},mixins:[n.default],props:{value:{type:Object},categoryHeight:{type:[Number,String],default:0},siteId:{type:[Number,String],default:0}},computed:{mainHeight:function(){var t=this.categoryHeight?this.categoryHeight+"px":"100%";return t="height:"+t,t}},created:function(){this.getCategoryList()},methods:{getCategoryList:function(){var e=this;this.isLoadingCate=!1,this.$api.sendRequest({url:"/api/goodscategory/tree",data:{level:this.value.level,template:this.value.template},success:function(i){if(e.isLoadingCate=!0,0!=i.code)return e.$util.showToast({title:i.message}),!1;0==i.code&&i.data.length&&(e.cateList=i.data,e.$nextTick((function(){var e=this,i=t.createSelectorQuery().in(this);i.select(".category-cate-top").boundingClientRect((function(t){e.height=t.height+"px"})).exec()}))),e.$emit("netFinish",!0)}})},toListDetail:function(t){var e={category_id:t},i="/pages/goods/list/list";this.siteId&&(i="/otherpages/shop/list/list",e.site_id=this.siteId),this.$util.redirectTo(i,e)},cateImgError:function(t){this.cateList[t].image=this.$util.getDefaultImage().default_category_img,this.$forceUpdate()}}};e.default=a}).call(this,i("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/diy-goods-level-category/diy-goods-level-one-second-create-component',
    {
        'components/diy-goods-level-category/diy-goods-level-one-second-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("30558"))
        })
    },
    [['components/diy-goods-level-category/diy-goods-level-one-second-create-component']]
]);
