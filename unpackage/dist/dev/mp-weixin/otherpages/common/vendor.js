(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["otherpages/common/vendor"],{

/***/ 1090:
/*!********************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/otherpages/shop/public/js/introduce.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      shopInfo: {},
      shopDesccredit: 0,
      shopServicecredit: 0,
      shopDeliverycredit: 0,
      workingDay: '' };

  },
  methods: {
    //获取店铺详细信息
    getShopInfo: function getShopInfo() {var _this = this;
      this.$api.sendRequest({
        url: '/api/shop/info',
        data: {
          site_id: this.siteId },

        success: function success(res) {
          if (res.code == 0) {
            _this.shopInfo = res.data;
            _this.shopDesccredit = Math.floor(parseFloat(_this.shopInfo.shop_desccredit) * 100 / 5);
            _this.shopServicecredit = Math.floor(parseFloat(_this.shopInfo.shop_servicecredit) * 100 / 5);
            _this.shopDeliverycredit = Math.floor(parseFloat(_this.shopInfo.shop_deliverycredit) * 100 / 5);

            var arr = _this.shopInfo.work_week.split(',');
            if (arr.length == 7) {
              _this.workingDay = '全天';
            }
            for (var i = 0; i < arr.length; i++) {
              if (arr[i] == 1) arr[i] = '星期一';
              if (arr[i] == 2) arr[i] = '星期二';
              if (arr[i] == 3) arr[i] = '星期三';
              if (arr[i] == 4) arr[i] = '星期四';
              if (arr[i] == 5) arr[i] = '星期五';
              if (arr[i] == 6) arr[i] = '星期六';
              if (arr[i] == 7) arr[i] = '星期天';
            }
            _this.workingDay = arr.toString();
          } else {
            _this.$util.showToast({
              title: res.message });

          }
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        },
        fail: function fail(res) {
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        } });

    } } };exports.default = _default;

/***/ }),

/***/ 1091:
/*!******************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/common/js/map/openMap.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _transformCoordinate = _interopRequireDefault(__webpack_require__(/*! ./transformCoordinate.js */ 1092));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function openMapByDefault(latitude, longitude, name) {
  uni.openLocation({
    latitude: latitude,
    longitude: longitude,
    name: name,
    fail: function fail(e) {
      uni.showModal({
        content: '打开地图失败，请稍后重试' });

    } });

}

function openMapByAndroid(latitude, longitude, name) {
  var url = ''; // 回调地址
  var identity = ''; // 程序名称
  if (plus.runtime.isApplicationExist({
    pname: 'com.baidu.BaiduMap' }))
  {// baidumap
    url = "baidumap://map/marker?location=".concat(
    latitude, ",").concat(longitude, "&title=").concat(name, "&coord_type=gcj02&src=andr.baidu.openAPIdemo");
    identity = 'com.baidu.BaiduMap';
    openURL(url, identity);
  } else if (plus.runtime.isApplicationExist({
    pname: 'com.autonavi.minimap' }))
  {// 高德
    url = "androidamap://viewMap?sourceApplication=appname&poiname=".concat(name, "&lat=").concat(latitude, "&lon=").concat(longitude, "&dev=0");
    identity = 'com.autonavi.minimap';
    openURL(url, identity);
  } else {
    openMapByDefault(latitude, longitude, name);
  }
}

function openMapByIos(latitude, longitude, name) {
  var url = ''; // 回调地址
  var errorCB = ''; // url失败的回调地址
  var identity = ''; // 程序名称

  if (plus.runtime.isApplicationExist({
    action: 'baidumap://' }))
  {// baidumap
    url = "baidumap://map/marker?location=".concat(
    latitude, ",").concat(longitude, "&title=").concat(name, "&content=").concat(name, "&src=ios.baidu.openAPIdemo&coord_type=gcj02");
    openURL(url, identity);
  } else if (plus.runtime.isApplicationExist({
    action: 'iosamap://' }))
  {// 高德
    url = "iosamap://viewMap?sourceApplication=applicationName&poiname=".concat(name, "&lat=").concat(latitude, "&lon=").concat(longitude, "&dev=0");
    openURL(url, identity);
  } else {
    openMapByDefault(latitude, longitude, name);
  }
}

function openURL(url, identity) {
  var newurl = encodeURI(url);
  plus.runtime.openURL(newurl, function (res) {
    uni.showModal({
      content: res.message });

  }, identity);
}

function getCoordByType(longitude, latitude, coord_type) {
  switch (coord_type) {
    case 'gcj02':
      return [longitude, latitude];
      break;
    case 'bd09':
      return _transformCoordinate.default.bd09togcj02(longitude, latitude);
      break;
    case 'wgs84':
      return _transformCoordinate.default.wgs84togcj02(longitude, latitude);
      break;
    default:
      return [longitude, latitude];
      break;}

}var _default =
{
  /* 打开地图 */
  openMap: function openMap(latitude, longitude, name) {var coord_type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'gcj02';
    var arr = getCoordByType(longitude, latitude, coord_type);

















    openMapByDefault(arr[1], arr[0], name);

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 1092:
/*!******************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/common/js/map/transformCoordinate.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
 * Created by Wandergis on 2015/7/8.
 * 提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换
 */

//定义一些常量
var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
var PI = 3.1415926535897932384626;
var a = 6378245.0;
var ee = 0.00669342162296594323;

/**
 * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
 * 即 百度 转 谷歌、高德
 * @param bd_lon
 * @param bd_lat
 * @returns {*[]}
 */
function bd09togcj02(bd_lon, bd_lat) {
  var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
  var x = bd_lon - 0.0065;
  var y = bd_lat - 0.006;
  var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
  var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
  var gg_lng = z * Math.cos(theta);
  var gg_lat = z * Math.sin(theta);
  return [gg_lng, gg_lat];
}

/**
 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
 * 即谷歌、高德 转 百度
 * @param lng
 * @param lat
 * @returns {*[]}
 */
function gcj02tobd09(lng, lat) {
  var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI);
  var theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI);
  var bd_lng = z * Math.cos(theta) + 0.0065;
  var bd_lat = z * Math.sin(theta) + 0.006;
  return [bd_lng, bd_lat];
}

/**
 * WGS84转GCj02
 * @param lng
 * @param lat
 * @returns {*[]}
 */
function wgs84togcj02(lng, lat) {
  if (out_of_china(lng, lat)) {
    return [lng, lat];
  } else {
    var dlat = transformlat(lng - 105.0, lat - 35.0);
    var dlng = transformlng(lng - 105.0, lat - 35.0);
    var radlat = lat / 180.0 * PI;
    var magic = Math.sin(radlat);
    magic = 1 - ee * magic * magic;
    var sqrtmagic = Math.sqrt(magic);
    dlat = dlat * 180.0 / (a * (1 - ee) / (magic * sqrtmagic) * PI);
    dlng = dlng * 180.0 / (a / sqrtmagic * Math.cos(radlat) * PI);
    var mglat = lat + dlat;
    var mglng = lng + dlng;
    return [mglng, mglat];
  }
}

/**
 * GCJ02 转换为 WGS84
 * @param lng
 * @param lat
 * @returns {*[]}
 */
function gcj02towgs84(lng, lat) {
  if (out_of_china(lng, lat)) {
    return [lng, lat];
  } else {
    var dlat = transformlat(lng - 105.0, lat - 35.0);
    var dlng = transformlng(lng - 105.0, lat - 35.0);
    var radlat = lat / 180.0 * PI;
    var magic = Math.sin(radlat);
    magic = 1 - ee * magic * magic;
    var sqrtmagic = Math.sqrt(magic);
    dlat = dlat * 180.0 / (a * (1 - ee) / (magic * sqrtmagic) * PI);
    dlng = dlng * 180.0 / (a / sqrtmagic * Math.cos(radlat) * PI);
    mglat = lat + dlat;
    mglng = lng + dlng;
    return [lng * 2 - mglng, lat * 2 - mglat];
  }
}

function transformlat(lng, lat) {
  var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
  ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
  ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
  return ret;
}

function transformlng(lng, lat) {
  var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
  ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
  ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
  return ret;
}

/**
 * 判断是否在国内，不在国内则不做偏移
 * @param lng
 * @param lat
 * @returns {boolean}
 */
function out_of_china(lng, lat) {
  return lng < 72.004 || lng > 137.8347 || lat < 0.8293 || lat > 55.8271 || false;
}var _default =

{
  bd09togcj02: bd09togcj02, // 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
  gcj02tobd09: gcj02tobd09, // 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
  wgs84togcj02: wgs84togcj02, // 
  gcj02towgs84: gcj02towgs84 };exports.default = _default;

/***/ }),

/***/ 1109:
/*!*****************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/otherpages/shop/public/js/street.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      orderType: '',
      shopList: [],
      order: '',
      sort: 'desc',
      keyword: '',
      lat: 0,
      lng: 0,
      iphoneX: false,
      hasFollow: false };

  },

  onLoad: function onLoad(options) {
    this.keyword = options.keyword || '';
    this.iphoneX = this.$util.uniappIsIPhoneX();
  },
  onShow: function onShow() {
    // 刷新多语言
    this.$langConfig.refresh();

    if (uni.getStorageSync('location')) {
      this.lat = uni.getStorageSync('location').latitude;
      this.lng = uni.getStorageSync('location').longitude;
    }
  },
  methods: {
    follow: function follow() {var _this2 = this;
      if (!uni.getStorageSync('token')) {
        this.$util.redirectTo('/pages/login/login/login', {});
        return;
      }
      if (this.hasFollow) {
        uni.showModal({
          title: '提示',
          content: '真的要取消关注嘛',
          success: function success(res) {var _this = this;
            if (res.confirm) {
              this.$api.sendRequest({
                url: '/api/shopmember/delete',
                data: {
                  site_id: this.shopList.site_id },

                success: function success(res) {
                  if (res.code == 0 && res.data) {
                    _this.hasFollow = !_this.hasFollow;
                    _this.$util.showToast({
                      title: '取消成功' });

                  }
                } });

            }
          } });

      } else {
        this.$api.sendRequest({
          url: '/api/shopmember/add',
          data: {
            site_id: this.shopList.site_id },

          success: function success(res) {
            if (res.code == 0 && res.data) {
              _this2.hasFollow = !_this2.hasFollow;
              _this2.$util.showToast({
                title: '关注成功' });

            }
          } });

      }
    },
    isFollow: function isFollow() {var _this3 = this;
      this.$api.sendRequest({
        url: '/api/shopmember/issubscribe',
        data: {
          site_id: this.shopList.site_id },

        success: function success(res) {
          if (res.code == 0) {
            _this3.hasFollow = res.data;
          }
        } });

    },
    getShopList: function getShopList(mescroll) {var _this4 = this;
      this.$api.sendRequest({
        url: '/api/shop/page',
        data: {
          page: mescroll.num,
          page_size: mescroll.size,
          keyword: this.keyword,
          order: this.order,
          sort: this.sort,
          lat: this.lat,
          lng: this.lng },

        success: function success(res) {
          var newArr = [];
          var msg = res.message;
          if (res.code == 0 && res.data) {
            newArr = res.data.list;
            for (var i = 0; i < newArr.length; i++) {
              newArr[i].composite_score = ((parseFloat(newArr[i].shop_desccredit) + parseFloat(newArr[i].shop_servicecredit) +
              parseFloat(newArr[i].shop_deliverycredit)) / 3).toFixed(1);
            }
          } else {
            _this4.$util.showToast({
              title: msg });

          }
          mescroll.endSuccess(newArr.length);
          //设置列表数据
          if (mescroll.num == 1) _this4.shopList = []; //如果是第一页需手动制空列表
          _this4.shopList = _this4.shopList.concat(newArr); //追加新数据
          if (_this4.$refs.loadingCover) _this4.$refs.loadingCover.hide();
        },
        fail: function fail(res) {
          mescroll.endErr();
          if (_this4.$refs.loadingCover) _this4.$refs.loadingCover.hide();
        } });

    },
    //筛选点击
    sortTabClick: function sortTabClick(tag) {
      if (tag == 'shop_sales') {
        this.order = 'shop_sales';
        this.sort = 'desc';
      } else if (tag == 'shop_desccredit') {
        this.order = 'shop_desccredit';
        this.sort = 'desc';
      } else {
        this.order = '';
        this.sort = '';
      }

      this.orderType = tag;

      this.$refs.mescroll.refresh();
    },
    search: function search() {
      this.$refs.mescroll.refresh();
    },
    imgError: function imgError(index) {
      this.shopList[index].logo = this.$util.getDefaultImage().default_shop_img;
      this.$forceUpdate();
    },
    phone: function phone(e) {
      uni.makePhoneCall({
        phoneNumber: e //仅为示例
      });
    },
    jump: function jump(e) {
      this.$util.redirectTo(e);
    },
    GetDistance: function GetDistance(lat1, lng1, lat2, lng2) {
      var radLat1 = lat1 * Math.PI / 180.0;
      var radLat2 = lat2 * Math.PI / 180.0;
      var a = radLat1 - radLat2;
      var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
      var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
      Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
      s = s * 6378.137; // EARTH_RADIUS;
      s = Math.round(s * 10000) / 10000;
      return s;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 1135:
/*!***************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/otherpages/shop/public/js/list.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      listStyle: '',
      loadingType: 'loading', //加载更多状态
      orderType: '',
      priceOrder: 'desc', //1 价格从低到高 2价格从高到低
      categoryList: [], //排序类型
      goodsList: [],
      order: '',
      sort: 'desc',
      showCategory: false,
      showScreen: false,
      keyword: '',
      categoryId: 0,
      categoryLevel: 0,
      brandId: 0,
      attr: [],
      currAttr: [],
      minPrice: '',
      maxPrice: '',
      isFreeShipping: -1, //是否免邮
      brandList: [], //品牌筛选项
      showBrandMore: false,
      attributeList: [], //属性筛选项
      siteId: 0,

      emptyShow: false,
      isList: true,

      couponId: 0,
      platformcouponTypeId: 0,
      network: false,
      mescroll: null };


  },

  onLoad: function onLoad(options) {
    if (!options.site_id) {
      this.$util.redirectTo('/otherpages/shop/index/index', {}, 'redirectTo');
      return;
    }
    this.siteId = options.site_id;

    this.categoryId = options.category_id || 0;
    this.categoryLevel = options.category_level || 0;
    this.brandId = options.brand_id || 0;
    this.keyword = options.keyword || '';
    this.loadCategoryList(this.categoryId);
    this.couponId = options.couponId || 0;
    this.platformcouponTypeId = options.platformcouponTypeId || 0;
  },
  onShow: function onShow() {
    this.network = true;
    // 刷新多语言
    this.$langConfig.refresh();
  },
  methods: {
    getGoodsList: function getGoodsList(mescroll) {var _this = this;
      this.mescroll = mescroll;
      var data = {
        page: mescroll.num,
        page_size: mescroll.size,
        keyword: this.keyword,
        // category_id: this.categoryId,
        category_level: this.categoryLevel,
        brand_id: this.brandId,
        min_price: this.minPrice,
        max_price: this.maxPrice,
        order: this.order,
        sort: this.sort,
        attr: this.currAttr.length > 0 ? JSON.stringify(this.currAttr) : "",
        site_id: this.siteId,
        coupon_type: this.couponId,
        platform_coupon_type: this.platformcouponTypeId };

      if (this.siteId) {
        data.shop_category_id = this.categoryId;
      } else {
        data.category_id = levelId;
        data.category_level = this.categoryLevel;
      }
      if (this.isFreeShipping > 0) {
        data.is_free_shipping = this.isFreeShipping;
      }

      this.$api.sendRequest({
        url: '/api/goodssku/page',
        data: data,
        success: function success(res) {
          var newArr = [];
          var msg = res.message;
          if (res.code == 0 && res.data) {
            if (res.data.page_count == 0) {
              _this.emptyShow = true;
            }
            newArr = res.data.list;
          } else {
            _this.$util.showToast({
              title: msg });

          }
          mescroll.endSuccess(newArr.length);
          //设置列表数据
          if (mescroll.num == 1) _this.goodsList = []; //如果是第一页需手动制空列表
          _this.goodsList = _this.goodsList.concat(newArr); //追加新数据
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
          _this.network = true;
        },
        fail: function fail(res) {
          mescroll.endErr();
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        } });

    },
    changeListStyle: function changeListStyle() {
      this.isList = !this.isList;
    },
    //重置数据
    resetData: function resetData() {
      this.categoryId = 0;
      this.minPrice = '';
      this.maxPrice = '';
      this.isFreeShipping = false;
    },
    goodsImg: function goodsImg(imgStr) {
      var imgs = imgStr.split(',');
      return imgs[0] ? this.$util.img(imgs[0], {
        size: 'mid' }) :
      this.$util.getDefaultImage().default_goods_img;
    },
    //加载分类
    loadCategoryList: function loadCategoryList(fid, sid) {var _this2 = this;
      this.$api.sendRequest({
        url: '/api/shopgoodscategory/tree',
        data: {
          site_id: this.siteId },

        success: function success(res) {
          if (res.data != null) _this2.categoryList = res.data;
        } });

    },
    //筛选点击
    sortTabClick: function sortTabClick(tag) {
      if (tag == 'sale_num') {
        this.order = 'sale_num';
        this.sort = 'desc';
      } else if (tag == 'discount_price') {
        this.order = 'discount_price';
        this.sort = 'desc';
      } else if (tag == 'screen') {
        //筛选
        this.showScreen = true;
        return;
      } else {
        this.order = '';
        this.sort = '';
      }

      if (this.orderType === tag && tag !== 'discount_price') return;

      this.orderType = tag;
      if (tag === 'discount_price') {
        this.priceOrder = this.priceOrder === 'asc' ? 'desc' : 'asc';
        this.sort = this.priceOrder;
      } else {
        this.priceOrder = '';
      }
      this.emptyShow = false;
      this.$refs.mescroll.refresh();
    },
    //商品详情
    toDetail: function toDetail(item) {
      this.$util.redirectTo('/pages/goods/detail/detail', {
        sku_id: item.sku_id });

    },
    search: function search() {
      this.emptyShow = false;
      this.goodsList = [];
      this.$refs.mescroll.refresh();
    },
    selectedCategory: function selectedCategory(categoryId, categoryLevel) {
      this.keyword = '';
      this.categoryId = categoryId;
      this.categoryLevel = categoryLevel;
    },
    // 选择属性筛选项
    selectedAttr: function selectedAttr(attr_id, attr_value_id) {
      if (this.attr[attr_id] && this.attr[attr_id].attr_value_id == attr_value_id) {
        delete this.attr[attr_id];
      } else {
        this.attr[attr_id] = {
          attr_id: attr_id,
          attr_value_id: attr_value_id };

      }
      this.currAttr = [];
      for (var i in this.attr) {this.currAttr.push(this.attr[i]);}
    },
    //是否选中属性
    isSelectedAttr: function isSelectedAttr(attr_id, attr_value_id) {
      var res = false;
      for (var i in this.currAttr) {
        if (this.currAttr[i].attr_id == attr_id && this.currAttr[i].attr_value_id == attr_value_id) {
          res = true;
          break;
        }
      }
      return res;
    },
    screenData: function screenData() {
      if (this.minPrice != '' || this.maxPrice != '') {

        if (!Number(this.minPrice)) {
          this.$util.showToast({
            title: '请输入最低价' });

          return;
        }
        if (!Number(this.maxPrice)) {
          this.$util.showToast({
            title: '最输入最高价' });

          return;
        }
        if (Number(this.minPrice) < 0 || Number(this.maxPrice) < 0) {
          this.$util.showToast({
            title: '筛选价格不能小于0' });

          return;
        }
        if (this.minPrice != '' && Number(this.minPrice) > Number(this.maxPrice)) {

          this.$util.showToast({
            title: '最低价不能大于最高价' });

          return;
        }
        if (this.maxPrice != '' && Number(this.maxPrice) < Number(this.minPrice)) {
          this.$util.showToast({
            title: '最高价不能小于最低价' });

          return;
        }

      }
      this.$refs.mescroll.refresh();
      this.showScreen = false;
      this.emptyShow = false;
    },
    imgError: function imgError(index) {
      this.goodsList[index].sku_image = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },
    showPrice: function showPrice(data) {
      var price = data.discount_price;
      if (data.member_price && parseFloat(data.member_price) < parseFloat(price)) price = data.member_price;
      return price;
    } } };exports.default = _default;

/***/ }),

/***/ 1279:
/*!************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/otherpages/fenxiao/public/js/goods_list.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      listStyle: '',
      loadingType: 'loading', //加载更多状态
      orderType: '',
      priceOrder: 'desc', //1 价格从低到高 2价格从高到低
      categoryList: [], //排序类型
      goodsList: [],
      order: '',
      sort: 'desc',
      showCategory: false,
      showScreen: false,
      keyword: '',
      categoryId: 0,
      categoryLevel: 0,
      brandId: 0,
      attr: [],
      currAttr: [],
      minPrice: '',
      maxPrice: '',
      isFreeShipping: false, //是否免邮
      isOwn: 2, //是否自营			默认为2，2不选择，1.平台自营  0.合作店铺
      brandList: [], //品牌筛选项
      showBrandMore: false,
      attributeList: [], //属性筛选项
      isIphoneX: false };

  },
  onLoad: function onLoad(options) {
    this.categoryId = options.category_id || 0;
    this.categoryLevel = options.category_level || 0;
    this.brandId = options.brand_id || 0;
    this.keyword = options.keyword || '';
    this.loadCategoryList(this.categoryId);
    this.isIphoneX = this.$util.uniappIsIPhoneX();
  },
  onShow: function onShow() {
    // 刷新多语言
    this.$langConfig.refresh();
  },
  methods: {
    //获取列表
    getGoodsList: function getGoodsList(mescroll) {var _this = this;
      this.$api.sendRequest({
        url: '/fenxiao/api/goods/page',
        data: {
          page: mescroll.num,
          page_size: mescroll.size,
          keyword: this.keyword,
          category_id: this.categoryId,
          category_level: this.categoryLevel,
          brand_id: this.brandId,
          min_price: this.minPrice,
          max_price: this.maxPrice,
          is_free_shipping: this.isFreeShipping ? 1 : 0,
          is_own: this.isOwn == 2 ? '' : this.isOwn,
          order: this.order,
          sort: this.sort,
          attr: this.currAttr.length > 0 ? JSON.stringify(this.currAttr) : "" },

        success: function success(res) {
          var newArr = [];
          var msg = res.message;
          if (res.code == 0 && res.data) {
            newArr = res.data.list;
          } else {
            _this.$util.showToast({
              title: msg });

          }
          mescroll.endSuccess(newArr.length);
          //设置列表数据
          if (mescroll.num == 1) _this.goodsList = []; //如果是第一页需手动制空列表
          _this.goodsList = _this.goodsList.concat(newArr); //追加新数据
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        },
        fail: function fail(res) {
          //联网失败的回调
          mescroll.endErr();
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        } });

    },
    changeListStyle: function changeListStyle() {
      if (!this.listStyle) this.listStyle = 'largest';else
      this.listStyle = '';
    },
    //加载分类
    loadCategoryList: function loadCategoryList(fid, sid) {var _this2 = this;
      this.$api.sendRequest({
        url: '/api/goodscategory/tree',
        data: {},
        success: function success(res) {
          if (res.data != null) _this2.categoryList = res.data;
        } });

    },
    //筛选点击
    sortTabClick: function sortTabClick(tag) {
      if (tag == 'sale_num') {
        this.order = 'sale_num';
        this.sort = 'desc';
      } else if (tag == 'discount_price') {
        this.order = 'discount_price';
        this.sort = 'desc';
      } else if (tag == 'screen') {
        //筛选
        this.showScreen = true;
        return;
      } else {
        this.order = '';
        this.sort = '';
      }

      if (this.orderType === tag && tag !== 'discount_price') return;

      this.orderType = tag;
      if (tag === 'discount_price') {
        this.priceOrder = this.priceOrder === 'asc' ? 'desc' : 'asc';
        this.sort = this.priceOrder;
      } else {
        this.priceOrder = '';
      }

      this.$refs.mescroll.refresh();
    },
    //商品详情
    navToDetailPage: function navToDetailPage(item) {
      this.$util.redirectTo('/pages/goods/detail/detail', {
        sku_id: item.sku_id });

    },
    search: function search() {
      this.$refs.mescroll.refresh();
    },
    selectedCategory: function selectedCategory(categoryId, categoryLevel) {var _this3 = this;
      this.categoryId = categoryId;
      this.categoryLevel = categoryLevel;
      this.$refs.mescroll.refresh();
      this.showCategory = false;
      //根据分类查询关联类型,查询关联品牌/属性
      this.$api.sendRequest({
        url: '/api/goodscategory/relevanceinfo',
        data: {
          category_id: this.categoryId },

        success: function success(res) {
          var data = res.data;
          if (data) {
            if (data.brand_list) _this3.brandList = data.brand_list;
            if (data.attribute_list) _this3.attributeList = data.attribute_list;
          }
        } });

    },
    // 选择属性筛选项
    selectedAttr: function selectedAttr(attr_id, attr_value_id) {
      if (this.attr[attr_id] && this.attr[attr_id].attr_value_id == attr_value_id) {
        delete this.attr[attr_id];
      } else {
        this.attr[attr_id] = {
          attr_id: attr_id,
          attr_value_id: attr_value_id };

      }
      this.currAttr = [];
      for (var i in this.attr) {this.currAttr.push(this.attr[i]);}
    },
    //是否选中属性
    isSelectedAttr: function isSelectedAttr(attr_id, attr_value_id) {
      var res = false;
      for (var i in this.currAttr) {
        if (this.currAttr[i].attr_id == attr_id && this.currAttr[i].attr_value_id == attr_value_id) {
          res = true;
          break;
        }
      }
      return res;
    },
    screenData: function screenData() {
      if (this.minPrice != '' || this.maxPrice != '') {
        if (!Number(this.minPrice)) {
          this.$util.showToast({
            title: '请输入最低价' });

          return;
        }
        if (!Number(this.maxPrice)) {
          this.$util.showToast({
            title: '最输入最高价' });

          return;
        }
        if (Number(this.minPrice) < 0 || Number(this.maxPrice) < 0) {
          this.$util.showToast({
            title: '筛选价格不能小于0' });

          return;
        }
        if (this.minPrice != '' && Number(this.minPrice) > Number(this.maxPrice)) {

          this.$util.showToast({
            title: '最低价不能大于最高价' });

          return;
        }
        if (this.maxPrice != '' && Number(this.maxPrice) < Number(this.minPrice)) {
          this.$util.showToast({
            title: '最高价不能小于最低价' });

          return;
        }
      }
      this.$refs.mescroll.refresh();
      this.showScreen = false;
    },
    imgError: function imgError(index) {
      this.goodsList[index].sku_image = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },
    // 关注该商品
    followGoods: function followGoods(d, e, f, g) {var _this4 = this;
      this.$api.sendRequest({
        url: '/fenxiao/api/goodscollect/add',
        data: {
          goods_id: e,
          sku_id: f,
          site_id: g },

        success: function success(res) {
          var msg = '';
          if (res.code >= 0) {
            msg = "关注成功";
          } else {
            msg = res.message;
          }
          _this4.$util.showToast({
            title: msg });

          _this4.goodsList[d].is_collect = 1;
        } });

    },
    //取消关注
    delFollowTip: function delFollowTip(e, f) {var _this5 = this;
      uni.showModal({
        title: '提示',
        content: '确认取消关注该商品吗',
        success: function success(res) {
          if (res.confirm) {
            _this5.delFollow(e, f);
          } else if (res.cancel) {

          }
        } });

    },
    delFollow: function delFollow(e, f) {var _this6 = this;
      this.$api.sendRequest({
        url: '/fenxiao/api/goodscollect/delete',
        data: {
          collect_id: e },

        success: function success(res) {
          var msg = "";
          if (res.code == 0) {
            msg = "取消成功";
          } else {
            msg = res.message;
          }
          _this6.$util.showToast({
            title: msg });


          var arr = _this6.goodsList;
          arr[f].is_collect = 0;
          _this6.goodsList = arr;
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 1288:
/*!********************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/components/mescroll/mescroll-mixins.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // mescroll-body 和 mescroll-uni 通用

// import MescrollUni from "./mescroll-uni.vue";
// import MescrollBody from "./mescroll-body.vue";

var MescrollMixin = {
  // components: { // 非H5端无法通过mixin注册组件, 只能在main.js中注册全局组件或具体界面中注册
  // 	MescrollUni,
  // 	MescrollBody
  // },
  data: function data() {
    return {
      mescroll: null //mescroll实例对象
    };
  },
  // 注册系统自带的下拉刷新 (配置down.native为true时生效, 还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
  onPullDownRefresh: function onPullDownRefresh() {
    this.mescroll && this.mescroll.onPullDownRefresh();
  },
  // 注册列表滚动事件,用于判定在顶部可下拉刷新,在指定位置可显示隐藏回到顶部按钮 (此方法为页面生命周期,无法在子组件中触发, 仅在mescroll-body生效)
  onPageScroll: function onPageScroll(e) {
    this.mescroll && this.mescroll.onPageScroll(e);
  },
  // 注册滚动到底部的事件,用于上拉加载 (此方法为页面生命周期,无法在子组件中触发, 仅在mescroll-body生效)
  onReachBottom: function onReachBottom() {
    this.mescroll && this.mescroll.onReachBottom();
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit: function mescrollInit(mescroll) {
      this.mescroll = mescroll;
      this.mescrollInitByRef(); // 兼容字节跳动小程序
    },
    // 以ref的方式初始化mescroll对象 (兼容字节跳动小程序: http://www.mescroll.com/qa.html?v=20200107#q26)
    mescrollInitByRef: function mescrollInitByRef() {
      if (!this.mescroll || !this.mescroll.resetUpScroll) {
        var mescrollRef = this.$refs.mescrollRef;
        if (mescrollRef) this.mescroll = mescrollRef.mescroll;
      }
    },
    // 下拉刷新的回调
    downCallback: function downCallback() {
      // mixin默认resetUpScroll
      this.mescroll.resetUpScroll();
    },
    // 上拉加载的回调
    upCallback: function upCallback() {var _this = this;
      // mixin默认延时500自动结束加载
      setTimeout(function () {
        _this.mescroll.endErr();
      }, 500);
    } },

  mounted: function mounted() {
    this.mescrollInitByRef(); // 兼容字节跳动小程序, 避免未设置@init或@init此时未能取到ref的情况
  } };var _default =



MescrollMixin;exports.default = _default;

/***/ }),

/***/ 1313:
/*!*****************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/common/js/socketTest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  data: function data() {
    return {
      timeoutObj: null, //ping定时器
      servicer_id: null, //绑定
      pingInterval: _config.default.pingInterval //本地端主动给服务器ping的时间, 0 则不开启
    };
  },
  onLoad: function onLoad() {
    var that = this;

    uni.onSocketClose(function (res) {
      console.log('WebSocket 已关闭！');
    });
    // .判断是否已连接
    this.checkOpenSocket();
  },
  onShow: function onShow() {
    console.log('显示');
    // .判断是否已连接
    this.checkOpenSocket();
  },
  methods: {
    // 判断是否已连接
    checkOpenSocket: function checkOpenSocket() {
      console.log('判断是否已连接');
      // alert('判断是否已连接')
      var self = this;
      uni.sendSocketMessage({
        data: 'ping',
        success: function success(res) {
          console.log('连接成功,检查');
          // alert('连接成功,检查')
          return;
        },
        fail: function fail(err) {// 未连接打开websocket连接
          console.log('连接失败');
          // alert('连接失败')
          self.openConnection();
        } });

    },
    openConnection: function openConnection() {// 打开连接
      console.log('打开连接');
      // alert('打开连接')
      uni.closeSocket(); // 确保已经关闭后再重新打开
      uni.connectSocket({
        url: _config.default.webSocket,
        method: 'POST',
        success: function success(res) {
          console.log('连接成功 connectSocket=', res);
          // alert('连接成功 connectSocket=', res);

        },
        fail: function fail(err) {
          console.log('连接失败 connectSocket=', err);
        } });

      uni.onSocketOpen(function (res) {
        console.log('连接成功', res);
      });
      this.onSocketMessage(); // 打开成功监听服务器返回的消息
    },
    //	打开成功监听服务器返回的消息
    onSocketMessage: function onSocketMessage() {var _this = this; // 消息
      console.log("开始监听");

      var that = this;
      this.pingInterval = _config.default.pingInterval;
      this.timeoutObj = null;
      uni.onSocketMessage(function (res) {//type:init,connect,close,string,order,goods
        var msg = JSON.parse(res.data);
        // console.log("监听该服务器消息", res)
        if (msg.type == 'close') {
          clearInterval(that.timeoutObj);
          that.timeoutObj = null;
          uni.closeSocket();
          return;
        }
        _this.reset();
        _this.getSocketMsg(res.data); // 监听到有新服务器消息
      });
    },
    // 监听到有新服务器消息
    getSocketMsg: function getSocketMsg(reData) {var _this2 = this; // 监听到服务器消息
      var that = this;
      // console.log(reData)
      var giveMsg = JSON.parse(reData);
      var data = {
        isItMe: false };

      console.log(giveMsg, 'giveMsg');
      data.contentType = giveMsg.type;
      // alert(data.contentType)

      if (giveMsg.type == 'init') {
        // alert(123)
        that.$api.sendRequest({
          url: '/servicer/api/chat/bind',
          data: {
            client_id: giveMsg.data.client_id,
            site_id: that.siteId },

          success: function success(res) {
            console.log(res, '结合时事规范化吉安市加工费');
            var obj = {};
            if (res.code == 0) {
              // 有客服
              that.servicer_id = res.data.servicer_id;
              obj.contentType = 'online';
              that.messageList.push(obj);
            } else {
              // 没有客服
              that.servicer_id = 0;
              obj.contentType = 'noline';
              that.messageList.push(obj);
            }
            that.getChatList();
          } });

      } else if (giveMsg.type == 'connect') {
        console.log(that.siteId, 'site_id');
        console.log(giveMsg.data.shop_id, 'giveMsg.data.shop_id');
        if (that.siteId == giveMsg.data.shop_id) {
          that.servicer_id = giveMsg.data.servicer_id;
          var NewArr = that.messageList;
          var index = null;
          for (var i = 0; i < NewArr.length; i++) {
            if (NewArr[i].contentType == 'online' || NewArr[i].contentType == 'noline') {
              index = i;
            }
          }
          NewArr.splice(index, 1);
          that.messageList = NewArr;
          var obj = {};
          if (that.servicer_id > 0) {
            obj.contentType = 'online';
          } else if (that.servicer_id == 0) {
            obj.contentType = 'noline';
          }
          that.messageList.push(obj);
        }
      } else if (giveMsg.type == 'string') {
        console.log(giveMsg, 'giveMsg');
        if (that.siteId == giveMsg.data.shop_id) {
          data.content = giveMsg.data.servicer_say;
          data.avatar = giveMsg.data.avatar;
        }
      } else if (giveMsg.type == 'image') {
        if (that.siteId == giveMsg.data.shop_id) {
          data.image = giveMsg.data.servicer_say;
          data.avatar = giveMsg.data.avatar;
        }
      } else if (giveMsg.type == 'order') {
        if (that.siteId == giveMsg.data.shop_id) {
          data.order_id = giveMsg.data.order_id;
          data.avatar = giveMsg.data.avatar;
        }
      } else if (giveMsg.type == 'goodssku') {
        if (that.siteId == giveMsg.data.shop_id) {
          data.sku_id = giveMsg.data.goods_sku_id;
          data.avatar = giveMsg.data.avatar;
        }
      }
      if (giveMsg.type == 'init') return;
      if (that.siteId == giveMsg.data.shop_id) {
        that.messageList.push(data);
        console.log(that.messageList, 'that.messageList');
        this.$nextTick(function () {
          _this2.setPageScrollTo();
        });
      }
    },
    // 检测心跳reset
    reset: function reset() {
      console.log("检测心跳");
      clearInterval(this.timeoutObj);
      this.start(); // 启动心跳
    },
    // 启动心跳 start 
    start: function start() {
      console.log("启动心跳");
      var self = this;
      this.timeoutObj = setInterval(function () {
        uni.sendSocketMessage({
          data: 'ping',
          success: function success(res) {
            console.log('连接中....');
          },
          fail: function fail(err) {
            console.log('连接失败重新连接....');
            self.openConnection();
          } });

      }, this.pingInterval);
    } },

  onHide: function onHide() {
    // alert("关闭")
    // 改之前的
    // console.log("我出发了")
    // this.checkOpenSocket();
    clearInterval(this.timeoutObj);
    this.timeoutObj = null;
    this.$api.sendRequest({
      url: '/servicer/api/chat/bye',
      data: {
        servicer_id: this.servicer_id,
        site_id: this.siteId },

      success: function success(res) {
        uni.closeSocket();
      },
      fail: function fail(err) {
        uni.closeSocket();
      } });

  },
  onUnload: function onUnload() {
    // alert("关闭")
    clearInterval(this.timeoutObj);
    this.timeoutObj = null;
    this.$api.sendRequest({
      url: '/servicer/api/chat/bye',
      data: {
        servicer_id: this.servicer_id,
        site_id: this.siteId },

      success: function success(res) {
        // alert("关闭1")
        uni.closeSocket();
      },
      fail: function fail(err) {
        // alert("关闭2")
        uni.closeSocket();
      } });

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 1314:
/*!************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/common/js/emjoy.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  emjoyList: {
    "[emjoy_01]": 'public/static/img/emjoy/emjoy_01.gif',
    "[emjoy_02]": 'public/static/img/emjoy/emjoy_02.gif',
    "[emjoy_03]": 'public/static/img/emjoy/emjoy_03.gif',
    "[emjoy_04]": 'public/static/img/emjoy/emjoy_04.gif',
    "[emjoy_05]": 'public/static/img/emjoy/emjoy_05.gif',
    "[emjoy_06]": 'public/static/img/emjoy/emjoy_06.gif',
    "[emjoy_07]": 'public/static/img/emjoy/emjoy_07.gif',
    "[emjoy_08]": 'public/static/img/emjoy/emjoy_08.gif',
    "[emjoy_09]": 'public/static/img/emjoy/emjoy_09.gif',

    "[emjoy_10]": 'public/static/img/emjoy/emjoy_10.gif',
    "[emjoy_11]": 'public/static/img/emjoy/emjoy_11.gif',
    "[emjoy_12]": 'public/static/img/emjoy/emjoy_12.gif',
    "[emjoy_13]": 'public/static/img/emjoy/emjoy_13.gif',
    "[emjoy_14]": 'public/static/img/emjoy/emjoy_14.gif',
    "[emjoy_15]": 'public/static/img/emjoy/emjoy_15.gif',
    "[emjoy_16]": 'public/static/img/emjoy/emjoy_16.gif',
    "[emjoy_17]": 'public/static/img/emjoy/emjoy_17.gif',
    "[emjoy_18]": 'public/static/img/emjoy/emjoy_18.gif',
    "[emjoy_19]": 'public/static/img/emjoy/emjoy_19.gif',

    "[emjoy_20]": 'public/static/img/emjoy/emjoy_20.gif',
    "[emjoy_21]": 'public/static/img/emjoy/emjoy_21.gif',
    "[emjoy_22]": 'public/static/img/emjoy/emjoy_22.gif',
    "[emjoy_23]": 'public/static/img/emjoy/emjoy_23.gif',
    "[emjoy_24]": 'public/static/img/emjoy/emjoy_24.gif',
    "[emjoy_25]": 'public/static/img/emjoy/emjoy_25.gif',
    "[emjoy_26]": 'public/static/img/emjoy/emjoy_26.gif',
    "[emjoy_27]": 'public/static/img/emjoy/emjoy_27.gif',
    "[emjoy_28]": 'public/static/img/emjoy/emjoy_28.gif',
    "[emjoy_29]": 'public/static/img/emjoy/emjoy_29.gif',

    "[emjoy_30]": 'public/static/img/emjoy/emjoy_30.gif',
    "[emjoy_31]": 'public/static/img/emjoy/emjoy_31.gif',
    "[emjoy_32]": 'public/static/img/emjoy/emjoy_32.gif',
    "[emjoy_33]": 'public/static/img/emjoy/emjoy_33.gif',
    "[emjoy_34]": 'public/static/img/emjoy/emjoy_34.gif',
    "[emjoy_35]": 'public/static/img/emjoy/emjoy_35.gif',
    "[emjoy_36]": 'public/static/img/emjoy/emjoy_36.gif',
    "[emjoy_37]": 'public/static/img/emjoy/emjoy_37.gif',
    "[emjoy_38]": 'public/static/img/emjoy/emjoy_38.gif',
    "[emjoy_39]": 'public/static/img/emjoy/emjoy_39.gif',

    "[emjoy_40]": 'public/static/img/emjoy/emjoy_40.gif',
    "[emjoy_41]": 'public/static/img/emjoy/emjoy_41.gif',
    "[emjoy_42]": 'public/static/img/emjoy/emjoy_42.gif',
    "[emjoy_43]": 'public/static/img/emjoy/emjoy_43.gif',
    "[emjoy_44]": 'public/static/img/emjoy/emjoy_44.gif',
    "[emjoy_45]": 'public/static/img/emjoy/emjoy_45.gif',
    "[emjoy_46]": 'public/static/img/emjoy/emjoy_46.gif',
    "[emjoy_47]": 'public/static/img/emjoy/emjoy_47.gif' } };exports.default = _default;

/***/ }),

/***/ 1579:
/*!*********************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/otherpages/components/sx-rate/common.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.getClientRect = getClientRect;function getClientRect(selector, component) {
  return new Promise(function (resolve, reject) {
    var query = component ? uni.createSelectorQuery().in(component) : uni.createSelectorQuery();
    return query.select(selector).boundingClientRect(resolve).exec();
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 1589:
/*!*****************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/otherpages/components/city-select/citySelect.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var citySelect = {
  /* eslint-disable */
  firstletter: 'YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJXDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLCYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNCMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY',
  /**
   * 获取汉字的拼音首字母
   * @param str 汉字字符串，如果遇到非汉字则原样返回
   * @return 返回对象 {unicode:NUmber,firstletter：String}
   */
  getFirstLetter: function getFirstLetter(str) {
    if (!str || /^ +$/g.test(str)) {
      return '';
    }

    // 使用首字母字典文件
    if (citySelect.firstletter) {
      var result = [];
      var unicode = str.charCodeAt(0);
      var ch = str.charAt(0);
      if (unicode >= 19968 && unicode <= 40869) {
        ch = citySelect.firstletter.charAt(unicode - 19968);
      } else if (unicode >= 97 && unicode <= 122 || unicode >= 65 && unicode <= 90) {
        ch = ch.toLocaleUpperCase();
      } else {
        ch = '#';
      }
      var obj = {
        unicode: unicode,
        firstletter: ch };

      return obj;
    }
    return '';
  } };var _default =


citySelect;exports.default = _default;

/***/ }),

/***/ 731:
/*!************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/otherpages/order/public/js/refundMethod.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  methods: {
    /**
     * 撤销退款申请
     * @param {Object} order_goods_id
     * @param {Object} callback
     */
    cancleRefund: function cancleRefund(order_goods_id, callback) {var _this = this;
      uni.showModal({
        content: '撤销之后本次申请将会关闭,如后续仍有问题可再次发起申请。',
        cancelText: '暂不撤销',
        cancelColor: '#898989',
        success: function success(res) {
          if (res.confirm) {
            _this.$api.sendRequest({
              url: '/api/orderrefund/cancel',
              data: {
                order_goods_id: order_goods_id },

              success: function success(res) {
                typeof callback == 'function' && callback(res);
              } });

          }
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 740:
/*!********************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/otherpages/order/public/js/evaluate.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      orderId: null,
      orderNo: "",
      memberName: "",
      memberNeadimg: "",
      isAnonymous: 1, //是否匿名发布  1.匿名，0.公开

      goodsList: [], //订单列表
      goodsEvalList: [], //评价列表

      imgList: [],
      isEvaluate: 0, //判断是否为追评

      flag: false, //防止重复点击 
      evaluateConfig: {
        evaluate_audit: 1,
        evaluate_show: 0,
        evaluate_status: 1 },


      siteName: '', // 店铺名称
      shop_deliverycredit: 5, // 配送服务分值
      shop_desccredit: 5, // 描述相符分值
      shop_servicecredit: 5 // 服务态度分值
    };
  },
  methods: {
    //获取用户信息
    getUserInfo: function getUserInfo() {var _this = this;
      this.$api.sendRequest({
        url: '/api/member/info',
        success: function success(res) {
          if (res.code == 0) {
            _this.memberName = res.data.nickname;
            _this.memberNeadimg = res.data.headimg;
          } else {
            _this.$util.showToast({
              title: res.message });

          }
        } });

    },
    //获取订单信息
    getOrderInfo: function getOrderInfo() {var _this2 = this;
      //获取订单信息
      var data = {
        order_id: this.orderId };

      this.$api.sendRequest({
        url: '/api/order/evluateinfo',
        data: data,
        success: function success(res) {
          if (res.code == 0) {
            _this2.isEvaluate = res.data.evaluate_status;
            _this2.orderNo = res.data.list[0].order_no;
            _this2.goodsList = res.data.list;
            _this2.siteName = res.data.list[0].site_name;
            if (_this2.isEvaluate) {
              for (var i = 0; i < res.data.list.length; i++) {
                var array = [];
                _this2.imgList.push(array);
                _this2.goodsEvalList.push({
                  order_goods_id: res.data.list[i].order_goods_id,
                  goods_id: res.data.list[i].goods_id,
                  sku_id: res.data.list[i].sku_id,
                  again_content: "",
                  again_images: "",
                  site_id: res.data.list[i].site_id });

              }
            } else {
              for (var _i = 0; _i < res.data.list.length; _i++) {
                var _array = [];
                _this2.imgList.push(_array);
                _this2.goodsEvalList.push({
                  content: '', // 评价内容
                  images: "", //图片数组
                  scores: 5, // 评分
                  explain_type: 1, // 评价类型
                  order_goods_id: res.data.list[_i].order_goods_id,
                  goods_id: res.data.list[_i].goods_id,
                  sku_id: res.data.list[_i].sku_id,
                  sku_name: res.data.list[_i].sku_name,
                  sku_price: res.data.list[_i].price,
                  sku_image: res.data.list[_i].sku_image,
                  site_id: res.data.list[_i].site_id });

              }
            }
          } else {
            _this2.$util.showToast({
              title: "未获取到订单数据" });

            setTimeout(function () {
              _this2.$util.redirectTo('/pages/order/list/list', {}, "redirectTo");
            }, 1000);
          }
          if (_this2.$refs.loadingCover) _this2.$refs.loadingCover.hide();
        },
        fail: function fail() {
          if (this.$refs.loadingCover) this.$refs.loadingCover.hide();
        } });

    },
    //监听评分变化
    setStar: function setStar(e) {
      this.goodsEvalList[e.index].scores = e.value;
      if (e.value >= 4) {
        this.goodsEvalList[e.index].explain_type = 1;
      } else if (1 < e.value && e.value < 4) {
        this.goodsEvalList[e.index].explain_type = 2;
      } else {
        this.goodsEvalList[e.index].explain_type = 3;
      }
    },
    //切换，是否匿名
    isAll: function isAll() {
      this.isAnonymous = this.isAnonymous ? 0 : 1;
    },
    //添加图片
    addImg: function addImg(e) {var _this3 = this;
      var size = this.imgList[e].length ? this.imgList[e].length : 0;
      this.$util.upload(6 - size, {
        path: 'evaluateimg' },
      function (res) {
        var arr = _this3.imgList[e];
        arr = arr.concat(res);
        _this3.imgList[e] = [];
        _this3.$set(_this3.imgList, e, arr);
        if (_this3.isEvaluate) {
          _this3.goodsEvalList[e].again_images = _this3.imgList[e].toString();
        } else {
          _this3.goodsEvalList[e].images = _this3.imgList[e].toString();
        }
      });
    },
    //删除图片
    deleteImg: function deleteImg(i, j) {
      this.imgList[j].splice(i, 1);
      if (this.isEvaluate) {
        this.goodsEvalList[j].again_images = this.imgList[j].toString();
      } else {
        this.goodsEvalList[j].images = this.imgList[j].toString();
      }
    },
    // 图片预览
    preview: function preview(i, j) {
      var urls = this.imgList[j];
      for (var k = 0; k < urls.length; k++) {
        urls[k] = this.$util.img(urls[k]);
      }
      uni.previewImage({
        urls: urls,
        current: i });

    },

    //提交评价
    save: function save() {var _this4 = this;
      if (this.evaluateConfig.evaluate_status == 0) {
        this.$util.showToast({
          title: "商家未开启商品评价功能" });

        return;
      }
      for (var i = 0; i < this.goodsEvalList.length; i++) {
        if (this.isEvaluate) {
          if (!this.goodsEvalList[i].again_content.trim().length) {
            this.$util.showToast({
              title: "商品的评价不能为空哦" });

            return;
          }
        } else {
          if (!this.goodsEvalList[i].content.trim().length) {
            this.$util.showToast({
              title: "商品的评价不能为空哦" });

            return;
          }
        }
      }
      var goodsEvaluate = JSON.stringify(this.goodsEvalList);
      var data = {
        order_id: this.orderId,
        goods_evaluate: goodsEvaluate };

      if (!this.isEvaluate) {
        data.order_no = this.orderNo;
        data.member_name = this.memberName;
        data.member_headimg = this.memberNeadimg;
        data.is_anonymous = this.isAnonymous;
        data.shop_deliverycredit = this.shop_deliverycredit;
        data.shop_desccredit = this.shop_desccredit;
        data.shop_servicecredit = this.shop_servicecredit;
      }
      if (this.flag) return;
      this.flag = true;
      this.$api.sendRequest({
        url: this.isEvaluate ? '/api/goodsevaluate/again' : '/api/goodsevaluate/add',
        data: data,
        success: function success(res) {
          if (res.code == 0) {
            _this4.$util.showToast({
              title: "评价成功" });

            setTimeout(function () {
              _this4.$util.redirectTo('/pages/order/list/list', {}, "redirectTo");
            }, 1000);
          } else {
            _this4.$util.showToast({
              title: res.message });

            _this4.flag = false;
          }
        },
        fail: function fail(res) {
          _this4.flag = false;
        } });

    },
    /**
     * 店铺评分
     * @param {Object} e
     */
    shopScore: function shopScore(e) {
      this[e.index] = e.value;
    },
    imgError: function imgError(index) {
      this.goodsList[index].sku_image = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },
    getEvaluateConfig: function getEvaluateConfig() {var _this5 = this;
      this.$api.sendRequest({
        url: '/api/goodsevaluate/config',
        success: function success(res) {
          if (res.code == 0) {
            var data = res.data;
            _this5.evaluateConfig = data;
          }
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 835:
/*!***********************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/otherpages/member/public/js/collection.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      selectGoodsId: 0, //选中的商品分类id
      goodsCategory: [{
        'id': 0,
        'name': '宝贝' },

      {
        'id': 1,
        'name': '店铺' }],


      collectionList: [],
      isEdit: false,
      isShowEmpty: false };


  },
  methods: {
    //跳转至详情页
    toDetail: function toDetail(item) {
      if (this.isEdit) return;
      this.$util.redirectTo("/pages/goods/detail/detail", {
        sku_id: item });

    },
    toShopDetail: function toShopDetail(e) {
      if (this.isEdit) return;
      this.$util.redirectTo("/otherpages/shop/index/index", {
        site_id: e });

    },
    //是否为商品，店铺，或其他
    goodsCateChange: function goodsCateChange(e) {
      if (this.selectGoodsId != e) {
        this.collectionList = [];
        this.isEdit = false;
        this.selectGoodsId = e;
        this.$refs.goodsRecommend.init();
        this.$refs.mescroll.refresh();
      }
    },
    //是否编辑
    edit: function edit() {
      if (this.collectionList.length <= 0) return false;
      this.isEdit = !this.isEdit;
    },
    //请求数据
    getData: function getData(mescroll) {var _this = this;
      this.isShowEmpty = false;
      var url = "/api/goodscollect/page";
      if (this.selectGoodsId == 1) {
        url = "/api/shopmember/membershoppages";
      }
      var that = this;
      var array = [];
      this.$api.sendRequest({
        url: url,
        data: {
          page_size: mescroll.size,
          page: mescroll.num },

        async: false }).
      then(function (res) {
        var newArr = res.data.list;
        if (_this.selectGoodsId == 0) {
          for (var i = 0; i < newArr.length; i++) {
            newArr[i].composite_score = Math.floor((parseFloat(newArr[i].shop_desccredit) + parseFloat(newArr[i].shop_servicecredit) +
            parseFloat(newArr[i].shop_deliverycredit)) / 3).toFixed(1);
          }
        }

        array = array.concat(newArr);

        //设置列表数据
        if (mescroll.num == 1) _this.collectionList = []; //如果是第一页需手动制空列表
        _this.collectionList = _this.collectionList.concat(newArr); //追加新数据

        if (array.length < mescroll.size) {
          _this.$refs.goodsRecommend.getLikeList(mescroll.size).then(function (res) {
            array = array.concat(res);
            mescroll.endSuccess(array.length);
            if (mescroll.num == 1) {
              if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
            }
          });
        } else {
          mescroll.endSuccess(array.length);
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        }

        _this.isShowEmpty = true;
      });

    },
    //监听下拉刷新，初始化页面数据
    listenRefresh: function listenRefresh(e) {
      this.$refs.goodsRecommend.init();
    },
    //删除某一项
    deleteItem: function deleteItem(e) {var _this2 = this;
      this.$api.sendRequest({
        url: "/api/goodscollect/delete",
        data: {
          goods_id: e },

        success: function success(res) {
          if (res.code == 0) {
            _this2.$util.showToast({
              title: "删除成功" });

            var array = _this2.collectionList;
            var newArray = array.filter(function (v) {
              return v.goods_id != e;
            });
            _this2.collectionList = newArray;
          } else {
            _this2.$util.showToast({
              title: res.message });

          }
        } });

    },
    //取消关注店铺
    unfollow: function unfollow(e) {var _this3 = this;
      this.$api.sendRequest({
        url: "/api/shopmember/delete",
        data: {
          site_id: e },

        success: function success(res) {
          if (res.code == 0 && res.data) {
            var arr = _this3.collectionList.filter(function (v) {
              return v.site_id != e;
            });
            _this3.collectionList = arr;
            _this3.$util.showToast({
              title: "取消成功" });

          } else {
            _this3.$util.showToast({
              title: res.message });

          }
        } });

    },
    imgError: function imgError(index) {
      this.collectionList[index].logo = this.$util.getDefaultImage().default_shop_img;
      this.$forceUpdate();
    },
    goodsImgError: function goodsImgError(index) {
      this.collectionList[index].sku_image = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    } } };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/otherpages/common/vendor.js.map