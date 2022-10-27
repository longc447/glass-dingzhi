(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["otherpages/common/vendor"],{

/***/ 1089:
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

/***/ 1090:
/*!******************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/common/js/map/openMap.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _transformCoordinate = _interopRequireDefault(__webpack_require__(/*! ./transformCoordinate.js */ 1091));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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

/***/ 1091:
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

/***/ 1108:
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

/***/ 1134:
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

/***/ 1278:
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

/***/ 1287:
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

/***/ 1312:
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

/***/ 1313:
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

/***/ 1578:
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

/***/ 1588:
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

/***/ 727:
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

/***/ 736:
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

/***/ 831:
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

/***/ }),

/***/ 888:
/*!*******************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/otherpages/member/public/js/signin.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _util = _interopRequireDefault(__webpack_require__(/*! @/otherpages/components/uni-calendar/util.js */ 889));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  data: function data() {
    return {
      rule: [
      {}],

      hasSign: 0, //今天是否签到
      signDaysSeries: 0, //连续签到次数
      timestamp: "", //当前的时间戳
      time: "", //当前日期
      MonthData: [], //本月日期信息
      signList: [],
      back: '', //返回页
      redirect: '', //返回方式
      successTip: {},
      startDate: null,
      endDate: null,
      isActive: "", //判断点击
      signState: 1,
      headimg: '',
      point: 0,
      growth: 0,
      signPoint: 0,
      signGrowth: 0,
      rewardRuleDay: [],
      cycle: 0 };

  },
  methods: {
    // 获取签到累积积分
    getSignPointData: function getSignPointData() {var _this = this;
      this.$api.sendRequest({
        url: '/api/memberaccount/sum',
        data: {
          account_type: 'point',
          from_type: 'signin' },

        success: function success(res) {
          if (res.code == 0) {
            _this.signPoint = res.data;
          }
        } });

    },
    // 获取签到累积成长值
    getSignGrowthData: function getSignGrowthData() {var _this2 = this;
      this.$api.sendRequest({
        url: '/api/memberaccount/sum',
        data: {
          account_type: 'growth',
          from_type: 'signin' },

        success: function success(res) {
          if (res.code == 0) {
            _this2.signGrowth = res.data;
          }
        } });

    },
    // 签到是否开启
    getSignState: function getSignState() {var _this3 = this;
      this.$api.sendRequest({
        url: '/api/membersignin/getSignStatus',
        success: function success(res) {
          if (res.code == 0) {
            _this3.signState = res.data.is_use;
          }
        } });

    },
    navigateBack: function navigateBack() {
      if (this.back != '') {
        this.$util.redirectTo(this.back, {}, this.redirect);
      } else {
        this.$util.redirectTo('/pages/member/index/index', {}, 'reLaunch');
      }
    },
    //获取rule
    getRule: function getRule() {var _this4 = this;
      this.$api.sendRequest({
        url: '/api/membersignin/award',
        success: function success(res) {
          if (res.code == 0) {
            if (res.data) {
              _this4.cycle = res.data.cycle;
              _this4.rule = res.data.reward;
              if (_this4.rule.length > 1) {
                _this4.rule.forEach(function (item, index) {
                  if (index) _this4.rewardRuleDay.push(parseInt(item.day));
                });
              }
              var showSignDays = [];
              for (var i = 1; i <= res.data.cycle; i++) {
                showSignDays.push({ day: i });
              }
              _this4.showSignDays = showSignDays;
            } else {
              _this4.$util.showToast({
                title: '商家未开启签到',
                mask: true });

            }

          }
        } });

    },
    //获取连续签到次数
    getSignInfo: function getSignInfo() {var _this5 = this;
      this.$api.sendRequest({
        url: '/api/member/info',
        success: function success(res) {
          if (res.code == 0) {
            _this5.timestamp = res.timestamp;
            _this5.time = _this5.$util.timeStampTurnTime(_this5.timestamp).slice(0, 10);
            _this5.headimg = res.data.headimg;
            _this5.signDaysSeries = res.data.sign_days_series;

            _this5.$refs.loadingCover.hide();
          }
        } });

    },
    //判断当前是否签到
    getIsSign: function getIsSign() {var _this6 = this;
      this.$api.sendRequest({
        url: '/api/membersignin/issign',
        success: function success(res) {
          if (res.code == 0) {
            _this6.hasSign = res.data;
            _this6.getSignInfo();
            _this6.getSignPointData();
            _this6.getSignGrowthData();
          }
        } });

    },
    //签到
    sign: function sign() {var _this7 = this;
      if (this.signState == 0) {
        this.$util.showToast({
          title: '签到未开启' });

      }

      if (!this.hasSign && this.signState == 1) {
        this.$api.sendRequest({
          url: '/api/membersignin/signin',
          success: function success(res) {
            if (res.code == 0) {
              _this7.successTip = res.data;
              _this7.$refs.uniPopup.open();
              _this7.getSignInfo();
              _this7.getSignPointData();
              _this7.getSignGrowthData();
              _this7.hasSign = 1;
              _this7.signDaysSeries = _this7.signDaysSeries + 1;
            } else {
              _this7.$util.showToast({
                title: res.message });

            }
          } });

      }
    },
    close: function close() {
      this.$refs.uniPopup.close();
    } },

  computed: {
    pointTomorrow: function pointTomorrow() {
      var signDaysSeries = this.signDaysSeries + 1;
      var point = this.rule[0].point ? parseInt(this.rule[0].point) : 0;
      for (var i = 1; i < this.rule.length; i++) {
        var reward = this.rule[i];
        if (reward.day == signDaysSeries && reward.point) point += parseInt(reward.point);
      }
      return point;
    },
    showDay: function showDay() {
      return parseInt(this.signDaysSeries / 7) * 7 + 1;
    } } };exports.default = _default;

/***/ }),

/***/ 889:
/*!************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/otherpages/components/uni-calendar/util.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _calendar = _interopRequireDefault(__webpack_require__(/*! ./calendar.js */ 890));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}var

Calendar = /*#__PURE__*/function () {
  function Calendar()





  {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},date = _ref.date,selected = _ref.selected,startDate = _ref.startDate,endDate = _ref.endDate,range = _ref.range;_classCallCheck(this, Calendar);
    // 当前日期
    this.date = this.getDate(new Date()); // 当前初入日期
    // 打点信息
    this.selected = selected || [];
    // 范围开始
    this.startDate = startDate;
    // 范围结束
    this.endDate = endDate;
    this.range = range;
    // 多选状态
    this.cleanMultipleStatus();
    // 每周日期
    this.weeks = {};
    // this._getWeek(this.date.fullDate)
  }
  /**
   * 设置日期
   * @param {Object} date
   */_createClass(Calendar, [{ key: "setDate", value:
    function setDate(date) {
      this.selectDate = this.getDate(date);
      this._getWeek(this.selectDate.fullDate);
    }

    /**
     * 清理多选状态
     */ }, { key: "cleanMultipleStatus", value:
    function cleanMultipleStatus() {
      this.multipleStatus = {
        before: '',
        after: '',
        data: [] };

    }

    /**
     * 重置开始日期
     */ }, { key: "resetSatrtDate", value:
    function resetSatrtDate(startDate) {
      // 范围开始
      this.startDate = startDate;

    }

    /**
     * 重置结束日期
     */ }, { key: "resetEndDate", value:
    function resetEndDate(endDate) {
      // 范围结束
      this.endDate = endDate;
    }

    /**
     * 获取任意时间
     */ }, { key: "getDate", value:
    function getDate(date) {var AddDayCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var str = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
      if (!date) {
        date = new Date();
      }
      if (typeof date !== 'object') {
        date = date.replace(/-/g, '/');
      }
      var dd = new Date(date);
      switch (str) {
        case 'day':
          dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
          break;
        case 'month':
          if (dd.getDate() === 31) {
            dd.setDate(dd.getDate() + AddDayCount);
          } else {
            dd.setMonth(dd.getMonth() + AddDayCount); // 获取AddDayCount天后的日期
          }
          break;
        case 'year':
          dd.setFullYear(dd.getFullYear() + AddDayCount); // 获取AddDayCount天后的日期
          break;}

      var y = dd.getFullYear();
      var m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
      var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
      return {
        fullDate: y + '-' + m + '-' + d,
        year: y,
        month: m,
        date: d,
        day: dd.getDay() };

    }


    /**
     * 获取上月剩余天数
     */ }, { key: "_getLastMonthDays", value:
    function _getLastMonthDays(firstDay, full) {
      var dateArr = [];
      for (var i = firstDay; i > 0; i--) {
        var beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate();
        dateArr.push({
          date: beforeDate,
          month: full.month - 1,
          lunar: this.getlunar(full.year, full.month - 1, beforeDate),
          disable: true });

      }
      return dateArr;
    }
    /**
     * 获取本月天数
     */ }, { key: "_currentMonthDys", value:
    function _currentMonthDys(dateData, full) {var _this = this;
      var dateArr = [];
      var fullDate = this.date.fullDate;var _loop = function _loop(
      i) {
        var isinfo = false;
        var nowDate = full.year + '-' + (full.month < 10 ?
        full.month : full.month) + '-' + (i < 10 ?
        '0' + i : i);
        // 是否今天
        var isDay = fullDate === nowDate;
        // 获取打点信息
        var info = _this.selected && _this.selected.find(function (item) {
          if (_this.dateEqual(nowDate, item.date)) {
            return item;
          }
        });

        // 日期禁用
        var disableBefore = true;
        var disableAfter = true;
        if (_this.startDate) {
          var dateCompBefore = _this.dateCompare(_this.startDate, fullDate);
          disableBefore = _this.dateCompare(dateCompBefore ? _this.startDate : fullDate, nowDate);
        }

        if (_this.endDate) {
          var dateCompAfter = _this.dateCompare(fullDate, _this.endDate);
          disableAfter = _this.dateCompare(nowDate, dateCompAfter ? _this.endDate : fullDate);
        }
        var multiples = _this.multipleStatus.data;
        var checked = false;
        var multiplesStatus = -1;
        if (_this.range) {
          if (multiples) {
            multiplesStatus = multiples.findIndex(function (item) {
              return _this.dateEqual(item, nowDate);
            });
          }
          if (multiplesStatus !== -1) {
            checked = true;
          }
        }
        var data = {
          fullDate: nowDate,
          year: full.year,
          date: i,
          multiple: _this.range ? checked : false,
          beforeMultiple: _this.dateEqual(_this.multipleStatus.before, nowDate),
          afterMultiple: _this.dateEqual(_this.multipleStatus.after, nowDate),
          month: full.month,
          lunar: _this.getlunar(full.year, full.month, i),
          disable: !disableBefore || !disableAfter,
          isDay: isDay };

        if (info) {
          data.extraInfo = info;
        }

        dateArr.push(data);};for (var i = 1; i <= dateData; i++) {_loop(i);
      }
      return dateArr;
    }
    /**
     * 获取下月天数
     */ }, { key: "_getNextMonthDays", value:
    function _getNextMonthDays(surplus, full) {
      var dateArr = [];
      for (var i = 1; i < surplus + 1; i++) {
        dateArr.push({
          date: i,
          month: Number(full.month) + 1,
          lunar: this.getlunar(full.year, Number(full.month) + 1, i),
          disable: true });

      }
      return dateArr;
    }

    /**
     * 获取当前日期详情
     * @param {Object} date
     */ }, { key: "getInfo", value:
    function getInfo(date) {var _this2 = this;
      if (!date) {
        date = new Date();
      }
      var dateInfo = this.canlender.find(function (item) {return item.fullDate === _this2.getDate(date).fullDate;});
      return dateInfo;
    }

    /**
     * 比较时间大小
     */ }, { key: "dateCompare", value:
    function dateCompare(startDate, endDate) {
      // 计算截止时间
      startDate = new Date(startDate.replace('-', '/').replace('-', '/'));
      // 计算详细项的截止时间
      endDate = new Date(endDate.replace('-', '/').replace('-', '/'));
      if (startDate <= endDate) {
        return true;
      } else {
        return false;
      }
    }

    /**
     * 比较时间是否相等
     */ }, { key: "dateEqual", value:
    function dateEqual(before, after) {
      // 计算截止时间
      before = new Date(before.replace('-', '/').replace('-', '/'));
      // 计算详细项的截止时间
      after = new Date(after.replace('-', '/').replace('-', '/'));
      if (before.getTime() - after.getTime() === 0) {
        return true;
      } else {
        return false;
      }
    }


    /**
     * 获取日期范围内所有日期
     * @param {Object} begin
     * @param {Object} end
     */ }, { key: "geDateAll", value:
    function geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split('-');
      var ae = end.split('-');
      var db = new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
      for (var k = unixDb; k <= unixDe;) {
        k = k + 24 * 60 * 60 * 1000;
        arr.push(this.getDate(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }
    /**
     * 计算阴历日期显示
     */ }, { key: "getlunar", value:
    function getlunar(year, month, date) {
      return _calendar.default.solar2lunar(year, month, date);
    }
    /**
     * 设置打点
     */ }, { key: "setSelectInfo", value:
    function setSelectInfo(data, value) {
      this.selected = value;
      this._getWeek(data);
    }

    /**
     *  获取多选状态
     */ }, { key: "setMultiple", value:
    function setMultiple(fullDate) {
      var _this$multipleStatus =


      this.multipleStatus,before = _this$multipleStatus.before,after = _this$multipleStatus.after;

      if (!this.range) return;
      if (before && after) {
        this.multipleStatus.before = '';
        this.multipleStatus.after = '';
        this.multipleStatus.data = [];
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
        } else {
          this.multipleStatus.after = fullDate;
          if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
        }
      }
      this._getWeek(fullDate);
    }

    /**
     * 获取每周数据
     * @param {Object} dateData
     */ }, { key: "_getWeek", value:
    function _getWeek(dateData) {
      var _this$getDate =





      this.getDate(dateData),fullDate = _this$getDate.fullDate,year = _this$getDate.year,month = _this$getDate.month,date = _this$getDate.date,day = _this$getDate.day;
      var firstDay = new Date(year, month - 1, 1).getDay();
      var currentDay = new Date(year, month, 0).getDate();
      var dates = {
        lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)), // 上个月末尾几天
        currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)), // 本月天数
        nextMonthDays: [], // 下个月开始几天
        weeks: [] };

      var canlender = [];
      var surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
      dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
      canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
      var weeks = {};
      // 拼接数组  上个月开始几天 + 本月天数+ 下个月开始几天
      for (var i = 0; i < canlender.length; i++) {
        if (i % 7 === 0) {
          weeks[parseInt(i / 7)] = new Array(7);
        }
        weeks[parseInt(i / 7)][i % 7] = canlender[i];
      }
      this.canlender = canlender;
      this.weeks = weeks;
    }

    //静态方法
    // static init(date) {
    // 	if (!this.instance) {
    // 		this.instance = new Calendar(date);
    // 	}
    // 	return this.instance;
    // }
  }]);return Calendar;}();var _default =


Calendar;exports.default = _default;

/***/ }),

/***/ 890:
/*!****************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/otherpages/components/uni-calendar/calendar.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
 * @1900-2100区间内的公历、农历互转
 * @charset UTF-8
 * @github  https://github.com/jjonline/calendar.js
 * @Author  Jea杨(JJonline@JJonline.Cn)
 * @Time    2014-7-21
 * @Time    2016-8-13 Fixed 2033hex、Attribution Annals
 * @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
 * @Time    2017-7-24 Fixed use getTerm Func Param Error.use solar year,NOT lunar year
 * @Version 1.0.3
 * @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
 * @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
 */
/* eslint-disable */
var calendar = {

  /**
   * 农历1900-2100的润大小信息表
   * @Array Of Property
   * @return Hex
   */
  lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900-1909
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910-1919
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920-1929
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930-1939
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940-1949
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950-1959
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960-1969
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970-1979
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980-1989
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, // 1990-1999
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000-2009
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010-2019
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020-2029
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030-2039
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, // 2040-2049
  /** Add By JJonline@JJonline.Cn**/
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, // 2050-2059
  0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, // 2060-2069
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, // 2070-2079
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, // 2080-2089
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, // 2090-2099
  0x0d520],
  // 2100

  /**
   * 公历每个月份的天数普通表
   * @Array Of Property
   * @return Number
   */
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

  /**
   * 天干地支之天干速查表
   * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
   * @return Cn string
   */
  Gan: ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],

  /**
   * 天干地支之地支速查表
   * @Array Of Property
   * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
   * @return Cn string
   */
  Zhi: ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C",
  "\u4EA5"],


  /**
   * 天干地支之地支速查表<=>生肖
   * @Array Of Property
   * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
   * @return Cn string
   */
  Animals: ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21",
  "\u72D7", "\u732A"],


  /**
   * 24节气速查表
   * @Array Of Property
   * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
   * @return Cn string
   */
  solarTerm: ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206",
  "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691",
  "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D",
  "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"],


  /**
   * 1900-2100各年的24节气日期速查表
   * @Array Of Property
   * @return 0x string For splice
   */
  sTermInfo: ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f',
  '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f',
  'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f',
  '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa',
  '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f',
  '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f',
  '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f',
  '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
  '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722',
  '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
  '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2',
  '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35',
  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd',
  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35',
  '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35',
  '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35',
  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'],


  /**
   * 数字转中文速查表
   * @Array Of Property
   * @trans ['日','一','二','三','四','五','六','七','八','九','十']
   * @return Cn string
   */
  nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],

  /**
   * 日期转农历称呼速查表
   * @Array Of Property
   * @trans ['初','十','廿','卅']
   * @return Cn string
   */
  nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],

  /**
   * 月份转农历称呼速查表
   * @Array Of Property
   * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
   * @return Cn string
   */
  nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC",
  "\u814A"],


  /**
   * 返回农历y年一整年的总天数
   * @param lunar Year
   * @return Number
   * @eg:var count = calendar.lYearDays(1987) ;//count=387
   */
  lYearDays: function lYearDays(y) {
    var i;
    var sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
      sum += this.lunarInfo[y - 1900] & i ? 1 : 0;
    }
    return sum + this.leapDays(y);
  },

  /**
   * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
   * @param lunar Year
   * @return Number (0-12)
   * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
   */
  leapMonth: function leapMonth(y) {// 闰字编码 \u95f0
    return this.lunarInfo[y - 1900] & 0xf;
  },

  /**
   * 返回农历y年闰月的天数 若该年没有闰月则返回0
   * @param lunar Year
   * @return Number (0、29、30)
   * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
   */
  leapDays: function leapDays(y) {
    if (this.leapMonth(y)) {
      return this.lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
    }
    return 0;
  },

  /**
   * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
   * @param lunar Year
   * @return Number (-1、29、30)
   * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
   */
  monthDays: function monthDays(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    } // 月份参数从1至12，参数错误返回-1
    return this.lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
  },

  /**
   * 返回公历(!)y年m月的天数
   * @param solar Year
   * @return Number (-1、28、29、30、31)
   * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
   */
  solarDays: function solarDays(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    } // 若参数错误 返回-1
    var ms = m - 1;
    if (ms == 1) {// 2月份的闰平规律测算后确认返回28或29
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
    } else {
      return this.solarMonth[ms];
    }
  },

  /**
   * 农历年份转换为干支纪年
   * @param  lYear 农历年的年份数
   * @return Cn string
   */
  toGanZhiYear: function toGanZhiYear(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey == 0) ganKey = 10; // 如果余数为0则为最后一个天干
    if (zhiKey == 0) zhiKey = 12; // 如果余数为0则为最后一个地支
    return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
  },

  /**
   * 公历月、日判断所属星座
   * @param  cMonth [description]
   * @param  cDay [description]
   * @return Cn string
   */
  toAstro: function toAstro(cMonth, cDay) {
    var s =
    "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7"; // 座
  },

  /**
   * 传入offset偏移量返回干支
   * @param offset 相对甲子的偏移量
   * @return Cn string
   */
  toGanZhi: function toGanZhi(offset) {
    return this.Gan[offset % 10] + this.Zhi[offset % 12];
  },

  /**
   * 传入公历(!)y年获得该年第n个节气的公历日期
   * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
   * @return day Number
   * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
   */
  getTerm: function getTerm(y, n) {
    if (y < 1900 || y > 2100) {
      return -1;
    }
    if (n < 1 || n > 24) {
      return -1;
    }
    var _table = this.sTermInfo[y - 1900];
    var _info = [
    parseInt('0x' + _table.substr(0, 5)).toString(),
    parseInt('0x' + _table.substr(5, 5)).toString(),
    parseInt('0x' + _table.substr(10, 5)).toString(),
    parseInt('0x' + _table.substr(15, 5)).toString(),
    parseInt('0x' + _table.substr(20, 5)).toString(),
    parseInt('0x' + _table.substr(25, 5)).toString()];

    var _calday = [
    _info[0].substr(0, 1),
    _info[0].substr(1, 2),
    _info[0].substr(3, 1),
    _info[0].substr(4, 2),

    _info[1].substr(0, 1),
    _info[1].substr(1, 2),
    _info[1].substr(3, 1),
    _info[1].substr(4, 2),

    _info[2].substr(0, 1),
    _info[2].substr(1, 2),
    _info[2].substr(3, 1),
    _info[2].substr(4, 2),

    _info[3].substr(0, 1),
    _info[3].substr(1, 2),
    _info[3].substr(3, 1),
    _info[3].substr(4, 2),

    _info[4].substr(0, 1),
    _info[4].substr(1, 2),
    _info[4].substr(3, 1),
    _info[4].substr(4, 2),

    _info[5].substr(0, 1),
    _info[5].substr(1, 2),
    _info[5].substr(3, 1),
    _info[5].substr(4, 2)];

    return parseInt(_calday[n - 1]);
  },

  /**
   * 传入农历数字月份返回汉语通俗表示法
   * @param lunar month
   * @return Cn string
   * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
   */
  toChinaMonth: function toChinaMonth(m) {// 月 => \u6708
    if (m > 12 || m < 1) {
      return -1;
    } // 若参数错误 返回-1
    var s = this.nStr3[m - 1];
    s += "\u6708"; // 加上月字
    return s;
  },

  /**
   * 传入农历日期数字返回汉字表示法
   * @param lunar day
   * @return Cn string
   * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
   */
  toChinaDay: function toChinaDay(d) {// 日 => \u65e5
    var s;
    switch (d) {
      case 10:
        s = "\u521D\u5341";
        break;
      case 20:
        s = "\u4E8C\u5341";
        break;
        break;
      case 30:
        s = "\u4E09\u5341";
        break;
        break;
      default:
        s = this.nStr2[Math.floor(d / 10)];
        s += this.nStr1[d % 10];}

    return s;
  },

  /**
   * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
   * @param y year
   * @return Cn string
   * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
   */
  getAnimal: function getAnimal(y) {
    return this.Animals[(y - 4) % 12];
  },

  /**
   * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
   * @param y  solar year
   * @param m  solar month
   * @param d  solar day
   * @return JSON object
   * @eg:console.log(calendar.solar2lunar(1987,11,01));
   */
  solar2lunar: function solar2lunar(y, m, d) {// 参数区间1900.1.31~2100.12.31
    // 年份限定、上限
    if (y < 1900 || y > 2100) {
      return -1; // undefined转换为数字变为NaN
    }
    // 公历传参最下限
    if (y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    // 未传参  获得当天
    if (!y) {
      var objDate = new Date();
    } else {
      var objDate = new Date(y, parseInt(m) - 1, d);
    }
    var i;
    var leap = 0;
    var temp = 0;
    // 修正ymd参数
    var y = objDate.getFullYear();
    var m = objDate.getMonth() + 1;
    var d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) /
    86400000;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = this.lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;
      i--;
    }

    // 是否今天
    var isTodayObj = new Date();
    var isToday = false;
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
      isToday = true;
    }
    // 星期几
    var nWeek = objDate.getDay();
    var cWeek = this.nStr1[nWeek];
    // 数字表示周几顺应天朝周一开始的惯例
    if (nWeek == 0) {
      nWeek = 7;
    }
    // 农历年
    var year = i;
    var leap = this.leapMonth(i); // 闰哪个月
    var isLeap = false;

    // 效验闰月
    for (i = 1; i < 13 && offset > 0; i++) {
      // 闰月
      if (leap > 0 && i == leap + 1 && isLeap == false) {
        --i;
        isLeap = true;
        temp = this.leapDays(year); // 计算农历闰月天数
      } else {
        temp = this.monthDays(year, i); // 计算农历普通月天数
      }
      // 解除闰月
      if (isLeap == true && i == leap + 1) {
        isLeap = false;
      }
      offset -= temp;
    }
    // 闰月导致数组下标重叠取反
    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;
        --i;
      }
    }
    if (offset < 0) {
      offset += temp;
      --i;
    }
    // 农历月
    var month = i;
    // 农历日
    var day = offset + 1;
    // 天干地支处理
    var sm = m - 1;
    var gzY = this.toGanZhiYear(year);

    // 当月的两个节气
    // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
    var firstNode = this.getTerm(y, m * 2 - 1); // 返回当月「节」为几日开始
    var secondNode = this.getTerm(y, m * 2); // 返回当月「节」为几日开始

    // 依据12节气修正干支月
    var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
      gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
    }

    // 传入的日期的节气与否
    var isTerm = false;
    var Term = null;
    if (firstNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 2];
    }
    if (secondNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 1];
    }
    // 日柱 当月一日与 1900/1/1 相差天数
    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    var gzD = this.toGanZhi(dayCyclical + d - 1);
    // 该日期所属的星座
    var astro = this.toAstro(m, d);

    return {
      'lYear': year,
      'lMonth': month,
      'lDay': day,
      'Animal': this.getAnimal(year),
      'IMonthCn': (isLeap ? "\u95F0" : '') + this.toChinaMonth(month),
      'IDayCn': this.toChinaDay(day),
      'cYear': y,
      'cMonth': m,
      'cDay': d,
      'gzYear': gzY,
      'gzMonth': gzM,
      'gzDay': gzD,
      'isToday': isToday,
      'isLeap': isLeap,
      'nWeek': nWeek,
      'ncWeek': "\u661F\u671F" + cWeek,
      'isTerm': isTerm,
      'Term': Term,
      'astro': astro };

  },

  /**
   * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
   * @param y  lunar year
   * @param m  lunar month
   * @param d  lunar day
   * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
   * @return JSON object
   * @eg:console.log(calendar.lunar2solar(1987,9,10));
   */
  lunar2solar: function lunar2solar(y, m, d, isLeapMonth) {// 参数区间1900.1.31~2100.12.1
    var isLeapMonth = !!isLeapMonth;
    var leapOffset = 0;
    var leapMonth = this.leapMonth(y);
    var leapDay = this.leapDays(y);
    if (isLeapMonth && leapMonth != m) {
      return -1;
    } // 传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
    if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {
      return -1;
    } // 超出了最大极限值
    var day = this.monthDays(y, m);
    var _day = day;
    // bugFix 2016-9-25
    // if month is leap, _day use leapDays method
    if (isLeapMonth) {
      _day = this.leapDays(y, m);
    }
    if (y < 1900 || y > 2100 || d > _day) {
      return -1;
    } // 参数合法性效验

    // 计算农历的时间差
    var offset = 0;
    for (var i = 1900; i < y; i++) {
      offset += this.lYearDays(i);
    }
    var leap = 0;
    var isAdd = false;
    for (var i = 1; i < m; i++) {
      leap = this.leapMonth(y);
      if (!isAdd) {// 处理闰月
        if (leap <= i && leap > 0) {
          offset += this.leapDays(y);
          isAdd = true;
        }
      }
      offset += this.monthDays(y, i);
    }
    // 转换闰月农历 需补充该年闰月的前一个月的时差
    if (isLeapMonth) {
      offset += day;
    }
    // 1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 86400000 + stmap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();

    return this.solar2lunar(cY, cM, cD);
  } };var _default =


calendar;exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/otherpages/common/vendor.js.map