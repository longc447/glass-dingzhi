require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/goods/search/search"],{"02e8":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=function(t){return t&&t.__esModule?t:{default:t}}(e("a88e"));var n={data:function(){return{inputValue:"",historyList:[],searchList:[],showSearch:!0,alikeList:[],isIndex:!1,placWords:"",hotList:[],isAllHistory:!1,siteId:0}},onLoad:function(i){i.keyword&&(this.inputValue=i.keyword),i.siteId&&(this.siteId=i.siteId),!t.getStorageSync("search")&&t.setStorageSync("search",[])},onShow:function(){this.$langConfig.refresh(),this.findHistoryList(),this.defaultSearch(),this.findHotList(),this.$nextTick((function(){this.getHistoryHeight()}))},mixins:[s.default],methods:{findHistoryList:function(){this.historyList=t.getStorageSync("search").reverse()},deleteHistoryList:function(){var i=this;t.showModal({title:"提示",content:"确认删除全部历史记录？",success:function(e){e.confirm&&(t.setStorageSync("search",[]),i.findHistoryList())}})},deleteItem:function(i){var e=this;t.showModal({title:"提示",content:"确认删除该条历史记录？",success:function(s){if(s.confirm){var n=t.getStorageSync("search"),o=n.filter((function(t){return t!=i}));t.setStorageSync("search",o),e.findHistoryList()}}})},defaultSearch:function(){var t=this;this.$api.sendRequest({url:"/api/goods/defaultSearchWords",success:function(i){t.placWords=i.data.words}})},findHotList:function(){var t=this;this.$api.sendRequest({url:"/api/goods/hotSearchWords",success:function(i){t.hotList=i.data.search_keywords}})},inputFocus:function(t){this.showScroll=!1,""!=this.inputValue.trim()&&(this.dataList=[])},otherSearch:function(t){this.inputValue=t,this.search()},search:function(){var i=this.inputValue.trim()?this.inputValue.trim():this.placWords;if(""!=i.trim()){this.showScroll=!0;var e=t.getStorageSync("search"),s=[];e.length?(s=e.filter((function(t){return t!=i.trim()})),s.push(i.trim())):s.push(i.trim()),t.setStorageSync("search",s);var n="/pages/goods/list/list";this.siteId>0&&(n="/otherpages/shop/list/list"),this.$util.redirectTo(n,{site_id:this.siteId,keyword:i})}else if(""==this.placWords)this.$util.showToast({title:"搜索内容不能为空哦"});else{n="/pages/goods/list/list";this.siteId&&(n="/otherpages/shop/list/list"),this.$util.redirectTo(n,{site_id:this.siteId,keyword:i})}},getHistoryHeight:function(){var i=this,e=t.createSelectorQuery().in(this);e.select("#history-list").boundingClientRect((function(e){e&&e.height>2*t.upx2px(70)+2*t.upx2px(35)&&(i.isAllHistory=!0)})).exec()}}};i.default=n}).call(this,e("543d")["default"])},3895:function(t,i,e){},6930:function(t,i,e){"use strict";(function(t){e("d947");s(e("66fd"));var i=s(e("ff89"));function s(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("543d")["createPage"])},"7f6f":function(t,i,e){"use strict";e.r(i);var s=e("02e8"),n=e.n(s);for(var o in s)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(o);i["default"]=n.a},c024:function(t,i,e){"use strict";var s=e("3895"),n=e.n(s);n.a},fc7e:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var s=function(){var t=this,i=t.$createElement,e=(t._self._c,t.placWords?null:t.$lang("inputPlaceholder")),s=t.historyList.length?t.$lang("history"):null,n=t.hotList.length?t.$lang("hot"):null;t._isMounted||(t.e0=function(i){t.isAllHistory=!1}),t.$mp.data=Object.assign({},{$root:{m0:e,m1:s,m2:n}})},n=[]},ff89:function(t,i,e){"use strict";e.r(i);var s=e("fc7e"),n=e("7f6f");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("c024");var r=e("f0c5"),c=Object(r["a"])(n["default"],s["b"],s["c"],!1,null,"3eff5c13",null,!1,s["a"],void 0);i["default"]=c.exports}},[["6930","common/runtime","common/vendor"]]]);