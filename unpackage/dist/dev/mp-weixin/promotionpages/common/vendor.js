(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["promotionpages/common/vendor"],{

/***/ 1545:
/*!**********************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/components/l-time/time.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;Function.prototype.asyAfter = function (afterfn) {
  var _self = this;
  return function () {
    var ret = _self.apply(this, arguments);
    if (ret === 'next') {
      return afterfn.apply(this, arguments);
    }
    return ret;
  };
};

Date.prototype.pattern = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份         
    "d+": this.getDate(), //日         
    "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时         
    "H+": this.getHours(), //小时         
    "m+": this.getMinutes(), //分         
    "s+": this.getSeconds(), //秒         
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度         
    "S": this.getMilliseconds() //毫秒         
  };
  var week = {
    "0": "\u65E5",
    "1": "\u4E00",
    "2": "\u4E8C",
    "3": "\u4E09",
    "4": "\u56DB",
    "5": "\u4E94",
    "6": "\u516D" };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "\u661F\u671F" : "\u5468" : "") +
    week[this.getDay() + ""]);
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return fmt;
};

var isType = function isType(type) {return /^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(type))[1];};
var Time = function Time() {};
var timeProto = Time.prototype;

//获取当前时间戳
timeProto.getUnix = function () {
  return new Date().getTime();
};

//获取当天0点0分0秒时间戳
timeProto.getTodayUnix = function () {
  var date = new Date();
  var myDate = "".concat(date.getFullYear(), "/").concat(date.getMonth() + 1, "/").concat(date.getDate(), " 00:00:00");
  return new Date(myDate).getTime();
};

//获取今年1月1日0点0分0秒时间戳
timeProto.getYearUnix = function () {
  var date = new Date();
  date.setMonth(0);
  date.setDate(1);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.getTime();
};

//获取当前时间标准年月日
timeProto.getLastDate = function (constTime) {
  if (!constTime) {
    return;
  }
  var date = new Date(constTime);
  if (date.pattern) {
    return date.pattern("yyyy-MM-dd");
  }

  var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  return date.getFullYear() + '-' + month + '-' + day;
};

var resDateStr = function resDateStr(timer, constTime) {
  var _just = function _just(timer) {

    if (timer <= 0 || Math.floor(timer / 60) <= 0) {
      return "刚刚";
    } else return 'next';
  };

  var _mm = function _mm(timer) {
    if (timer < 3600) {
      return Math.floor(timer / 60) + "分钟前";
    } else return 'next';
  };
  var _hh = function _hh(timer, constTime) {
    var today = _time_.getTodayUnix();
    if (timer >= 3600 && constTime - today >= 0) {
      //可切换显示模式
      // return "今天 " + new Date(constTime).pattern("HH:mm");
      return Math.floor(timer / 60 / 60) + "小时前";
    } else {
      return 'next';
    };
  };
  var _dd = function _dd(timer, constTime) {
    var today = _time_.getTodayUnix();
    timer = (today - constTime) / 1000;
    if (timer / 86400 <= 31) {
      return Math.ceil(timer / 86400) + "天前";
    } else return 'next';
  };
  var _dlast = function _dlast(timer, constTime) {
    return _time_.getLastDate(constTime);
  };

  var dateFilter = _just.asyAfter(_mm).asyAfter(_hh).asyAfter(_dd).asyAfter(_dlast);
  return dateFilter(timer, constTime);
};


//转换时间
var reg = new RegExp("-", "g");
timeProto.getFormatTime = function (constTime, max) {
  if (!constTime) {
    return "";
  }

  switch (isType(constTime)) {
    case 'Date':
      constTime = constTime.getTime();
      break;
    case 'String':
      constTime = constTime.replace(reg, "/");
    default:
      constTime = new Date(constTime).getTime();
      break;}


  var now = this.getUnix();
  var year = this.getYearUnix();
  var timer = (now - constTime) / 1000;
  if (constTime > now && max) {
    return this.getLastDate(constTime);
  }

  var _t = this;
  return resDateStr(timer, constTime);
};

var _time_ = new Time();var _default =
_time_;exports.default = _default;

/***/ }),

/***/ 356:
/*!***********************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/combo/public/js/payment.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      isIphoneX: false,
      orderCreateData: {
        is_balance: 0,
        pay_password: '',
        platform_coupon_id: 0 },

      orderPaymentData: {
        member_account: {
          balance: 0,
          is_pay_password: 0 },

        shop_goods_list: {
          site_name: '',
          express_type: [],
          coupon_list: [],
          invoice_config: {
            invoice_status: 0 } },


        platform_coupon_list: [],
        bunding_info: {
          bl_name: '' } },


      orderInvoice: {
        is_invoice: 0, //是否需要发票
        invoice_type: 1, //发票类型电子、纸质
        invoice_title: '', //发票抬头
        invoice_title_type: 1, // 抬头类型
        invoice_full_address: '', //邮寄地址
        is_tax_invoice: 0, //是否需要增值税发票
        invoice_email: '', // 邮箱
        invoice_content: '', //发票内容
        taxpayer_number: '' //纳税人识别号
      },
      isSub: false,
      tempData: null,
      sitePromotion: [],
      siteDelivery: {
        site_id: 0,
        data: [] },


      selectCouponId: 0,
      selectCouponMoney: '0.00',

      selectPlatCouponId: 0,
      selectPlatCouponMoney: '0.00' };

  },
  methods: {
    // 显示弹出层
    openPopup: function openPopup(ref) {
      if (ref == 'PlatcouponPopup') {
        this.selectPlatCouponId = this.orderPaymentData.platform_coupon_id;
        this.selectPlatCouponMoney = this.orderPaymentData.platform_coupon_money;
      }
      this.$refs[ref].open();
    },
    // 关闭弹出层
    closePopup: function closePopup(ref) {
      if (this.tempData) {
        Object.assign(this.orderCreateData, this.tempData);
        Object.assign(this.orderPaymentData, this.tempData);
        this.tempData = null;
        this.$forceUpdate();
      }
      this.$refs[ref].close();
    },
    // 选择收货地址，默认有定位
    selectAddress: function selectAddress() {
      var params = {
        back: '/promotionpages/combo/payment/payment',
        local: 0,
        type: 1 };

      // 外卖配送需要定位地址
      // if (this.orderPaymentData.delivery.delivery_type == 'local') {
      // 	params.local = 1;
      // 	params.type = 2;
      // }
      this.$util.redirectTo('/otherpages/member/address/address', params);
    },
    // 获取订单初始化数据
    getOrderPaymentData: function getOrderPaymentData() {var _this = this;
      this.orderCreateData = uni.getStorageSync('comboOrderCreateData');
      var pay_flag = uni.getStorageSync("pay_flag"); // 支付中标识，防止返回时，提示,跳转错误
      if (!this.orderCreateData) {
        if (pay_flag == 1) {
          uni.removeStorageSync("pay_flag");
        } else {
          this.$util.showToast({
            title: '未获取到创建订单所需数据！' });

          setTimeout(function () {
            _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }, 1000);
        }
        return;
      }

      // 获取经纬度
      var location = uni.getStorageSync('location');
      if (location) {
        this.orderCreateData = Object.assign(this.orderCreateData, location);
      }

      this.orderCreateData.buyer_message = '';

      this.$api.sendRequest({
        url: '/bundling/api/ordercreate/payment',
        data: this.orderCreateData,
        success: function success(res) {
          if (res.code >= 0) {
            _this.orderPaymentData = res.data;
            _this.orderPaymentData.timestamp = res.timestamp;
            _this.handlePaymentData();
            if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
          } else {
            _this.$util.showToast({
              title: '未获取到创建订单所需数据！' });

            setTimeout(function () {
              _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
            }, 1000);
          }
        },
        fail: function fail(res) {
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        } });

    },
    // 处理结算订单数据
    handlePaymentData: function handlePaymentData() {
      this.orderCreateData.delivery = {};
      this.orderCreateData.invoice = {};
      this.orderCreateData.coupon = {};
      this.orderCreateData.is_balance = 0;
      this.orderCreateData.pay_password = '';

      var data = this.orderPaymentData;

      var h = new Date().getHours().toString();
      var m = new Date().getMinutes().toString();
      if (h.length == 1) {
        h = '0' + h;
      }
      if (m.length == 1) {
        m = '0' + m;
      }
      var nowTime = h + ':' + m;
      var weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

      // 获取时间，必须是字符串,跟后端一致
      var index_weeks = ['0', '1', '2', '3', '4', '5', '6'];
      var curr_week = index_weeks[new Date().getDay()];

      if (data.shop_goods_list.express_type != undefined && data.shop_goods_list.express_type[0] != undefined) {
        var express_type = data.shop_goods_list.express_type;
        this.orderCreateData.delivery.delivery_type = express_type[0].name;
        this.orderCreateData.delivery.delivery_type_name = express_type[0].title;
        this.orderCreateData.delivery.store_id = 0;

        // 如果默认配送方式是门店配送
        if (express_type[0].name == 'store') {
          if (express_type[0].store_list[0] != undefined) {
            this.orderCreateData.delivery.store_id = express_type[0].store_list[0].store_id;
          }
        }
      }

      if (data.is_virtual == 0 && data.shop_goods_list.local_config) {

        // 是否显示时间选择
        if (data.shop_goods_list.local_config.info && data.shop_goods_list.local_config.info.time_is_open == 1) {
          this.orderCreateData.delivery.showTimeBar = true;
          this.orderCreateData.delivery.buyer_ask_delivery_time = nowTime;
          // 当日是否支持配送
          if (data.shop_goods_list.local_config.info.time_week.length == 0 ||
          data.shop_goods_list.local_config.info.time_week.length == 7 ||
          data.shop_goods_list.local_config.info.time_week.indexOf(curr_week) > -1) {
            this.orderCreateData.delivery.canLocalDelicery = true;
          } else {
            this.orderCreateData.delivery.canLocalDelicery = false;
          }

          if (data.shop_goods_list.local_config.info.time_type == 0) {
            this.orderCreateData.delivery.deliveryWeek = "全天";
          } else if (data.shop_goods_list.local_config.info.time_week.length > 0) {
            if (data.shop_goods_list.local_config.info.time_week.length == 7) {
              this.orderCreateData.delivery.deliveryWeek = "全天";
              this.orderCreateData.delivery.showTime = false;
            } else {
              this.orderCreateData.delivery.showTime = true;
              // 判断配送时间是连续还是间隔
              var timeWeek = data.shop_goods_list.local_config.info.time_week;
              var is_interval = false; // 是否间隔
              for (var i = 0; i < timeWeek.length; i++) {
                if (i + 1 < timeWeek.length) {
                  var difference = timeWeek[i + 1] - timeWeek[i];
                  if (difference > 1) {
                    is_interval = true;
                    break;
                  }
                }
              }

              if (is_interval) {
                var temp = [];
                for (var i = 0; i < timeWeek.length; i++) {
                  temp.push(weeks[timeWeek[i]]);
                }
                this.orderCreateData.delivery.deliveryWeek = temp.join("、");
              } else {
                this.orderCreateData.delivery.deliveryWeek = weeks[timeWeek[0]] + "至" + weeks[timeWeek[timeWeek.length -
                1]];
              }
            }
          } else {
            this.orderCreateData.delivery.deliveryWeek = "店铺未设置配送时间";
          }

          // picker组件时间起始
          var start_time = data.shop_goods_list.local_config.info.start_time;
          this.orderCreateData.delivery.start_time = this.getTimeStr(start_time);

          var end_time = data.shop_goods_list.local_config.info.end_time;
          this.orderCreateData.delivery.end_time = this.getTimeStr(end_time);

          var current_time = new Date(this.$util.timeStampTurnTime(data.timestamp));
          var hour = current_time.getHours();
          var minute = current_time.getMinutes();

          var start_hour = parseInt(this.orderCreateData.delivery.start_time.split(":")[0]);
          var start_minute = parseInt(this.orderCreateData.delivery.start_time.split(":")[1]);

          var end_hour = parseInt(this.orderCreateData.delivery.end_time.split(":")[0]);
          var end_minute = parseInt(this.orderCreateData.delivery.end_time.split(":")[1]);

          // 检测当天是否能够配送，然后判断送达时间。不在配送时间当日不能下单，例：配送时间是周一到周五，那么周末不能下单，周一到周五可以下单
          if (this.orderCreateData.delivery.canLocalDelicery) {

            // 判断是否全天
            if (!(start_hour == end_hour && start_minute == end_minute)) {

              // 当前时间早于配送时间，送达时间：开始时间~结束时间
              if (hour < start_hour || hour == start_hour && minute < start_minute) {
                this.orderCreateData.delivery.buyer_ask_delivery_time = (start_hour.toString().length == 1 ? "0" + start_hour :
                start_hour) + ':' + (
                start_minute.toString().length == 1 ? "0" + start_minute : start_minute);
              }

              // if (((hour > start_hour && hour < end_hour) || (hour == start_hour && minute > start_minute) || (hour ==
              // 		start_hour && minute >= start_minute && hour < end_hour))) {
              // }

              // 当前时间晚于配送时间，送达时间隐藏，不能下单
              if (hour > end_hour || hour == end_hour && minute > end_minute) {
                this.orderCreateData.delivery.canLocalDelicery = false;
              }
            }

          }

        } else {
          this.orderCreateData.delivery.showTimeBar = false;
          this.orderCreateData.delivery.deliveryWeek = "店铺未开启配送时间";
        }

      }

      data.shop_goods_list.goods_list.forEach(function (v) {
        if (typeof v.sku_spec_format == 'string') {
          if (v.sku_spec_format) {
            v.sku_spec_format = JSON.parse(v.sku_spec_format);
          } else {
            v.sku_spec_format = [];
          }
        }
      });

      // 店铺优惠券
      if (data.shop_goods_list.coupon_list != undefined && data.shop_goods_list.coupon_list[0] != undefined) {
        var coupon_list = data.shop_goods_list.coupon_list;
        this.orderCreateData.coupon.coupon_id = coupon_list[0].coupon_id;
        this.orderCreateData.coupon.coupon_money = coupon_list[0].money;

        this.selectCouponId = coupon_list[0].coupon_id;
        this.selectCouponMoney = coupon_list[0].coupon_id;
      }

      // 平台优惠券
      if (data.platform_coupon_list.length > 0) {
        data.platform_coupon_id = data.platform_coupon_list[0].platformcoupon_id;
        data.platform_coupon_money = data.platform_coupon_list[0].money;

        this.orderCreateData.platform_coupon_id = data.platform_coupon_list[0].platformcoupon_id;
        this.orderCreateData.platform_coupon_money = data.platform_coupon_list[0].money;

        this.selectPlatCouponId = data.platform_coupon_list[0].platformcoupon_id;
        this.selectPlatCouponMoney = data.platform_coupon_list[0].money;
      }

      Object.assign(data, this.orderCreateData);
      this.orderCalculate();
    },
    // 转化时间字符串
    getTimeStr: function getTimeStr(val) {
      var h = parseInt(val / 3600).toString();
      var m = parseInt(val % 3600 / 60).toString();
      if (m.length == 1) {
        m = '0' + m;
      }
      if (h.length == 1) {
        h = '0' + h;
      }
      return h + ':' + m;
    },
    // 订单计算
    orderCalculate: function orderCalculate() {var _this2 = this;
      var siteId = this.orderPaymentData.shop_goods_list.site_id;

      var deliveryObj = {};
      deliveryObj[siteId] = this.orderCreateData.delivery;

      var couponObj = {};
      couponObj[siteId] = this.orderCreateData.coupon;

      var messageObj = {};
      messageObj[siteId] = this.orderCreateData.buyer_message;

      //店铺发票
      if (this.orderPaymentData.shop_goods_list.is_invoice) {
        this.orderCreateData.invoice[siteId] = {};
        if (!Array.isArray(this.orderPaymentData.shop_goods_list.invoice_config)) {
          this.orderCreateData.invoice[siteId].is_invoice = this.orderPaymentData.shop_goods_list.is_invoice;
          this.orderCreateData.invoice[siteId].invoice_type = this.orderPaymentData.shop_goods_list.invoice_type;
          this.orderCreateData.invoice[siteId].invoice_title = this.orderPaymentData.shop_goods_list.invoice_title;
          this.orderCreateData.invoice[siteId].taxpayer_number = this.orderPaymentData.shop_goods_list.taxpayer_number;
          this.orderCreateData.invoice[siteId].invoice_content = this.orderPaymentData.shop_goods_list.invoice_content;
          this.orderCreateData.invoice[siteId].invoice_full_address = this.orderPaymentData.shop_goods_list.invoice_full_address;
          this.orderCreateData.invoice[siteId].is_tax_invoice = this.orderPaymentData.shop_goods_list.is_tax_invoice;
          this.orderCreateData.invoice[siteId].invoice_email = this.orderPaymentData.shop_goods_list.invoice_email;
          this.orderCreateData.invoice[siteId].invoice_title_type = this.orderPaymentData.shop_goods_list.invoice_title_type;
        }
      }

      var data = this.$util.deepClone(this.orderCreateData);
      data.delivery = JSON.stringify(deliveryObj);
      data.coupon = JSON.stringify(couponObj);
      data.invoice = JSON.stringify(data.invoice);
      data.member_address = JSON.stringify(data.member_address);
      data.buyer_message = JSON.stringify(messageObj);

      this.$api.sendRequest({
        url: '/bundling/api/ordercreate/calculate',
        data: data,
        success: function success(res) {
          if (res.code >= 0) {
            _this2.orderPaymentData.member_address = res.data.member_address;
            _this2.orderPaymentData.delivery_money = res.data.delivery_money;
            _this2.orderPaymentData.coupon_money = res.data.coupon_money;
            _this2.orderPaymentData.invoice_money = res.data.invoice_money;
            _this2.orderPaymentData.invoice_delivery_money = res.data.invoice_delivery_money;
            _this2.orderPaymentData.promotion_money = res.data.promotion_money;
            _this2.orderPaymentData.order_money = res.data.order_money;
            _this2.orderPaymentData.balance_money = res.data.balance_money;
            _this2.orderPaymentData.pay_money = res.data.pay_money;
            _this2.orderPaymentData.goods_money = res.data.goods_money;
            _this2.orderPaymentData.platform_coupon_money = res.data.platform_coupon_money;
            _this2.$forceUpdate();
          } else {
            _this2.$util.showToast({
              title: res.message });

          }
        } });

    },
    /**
     * 订单创建
     * @param {String} pay_password 支付密码
     */
    orderCreate: function orderCreate(pay_password) {var _this3 = this;
      if (this.verify()) {
        if (this.isSub) return;
        this.isSub = true;

        if (pay_password) this.orderCreateData.pay_password = pay_password;

        var siteId = this.orderPaymentData.shop_goods_list.site_id;

        var deliveryObj = {};
        deliveryObj[siteId] = this.orderCreateData.delivery;

        var couponObj = {};
        couponObj[siteId] = this.orderCreateData.coupon;

        var messageObj = {};
        messageObj[siteId] = this.orderCreateData.buyer_message;

        var data = this.$util.deepClone(this.orderCreateData);
        data.delivery = JSON.stringify(deliveryObj);
        data.coupon = JSON.stringify(couponObj);
        data.invoice = JSON.stringify(data.invoice);
        data.member_address = JSON.stringify(data.member_address);
        data.buyer_message = JSON.stringify(messageObj);

        this.$api.sendRequest({
          url: '/bundling/api/ordercreate/create',
          data: data,
          success: function success(res) {
            uni.hideLoading();
            if (res.code >= 0) {
              if (_this3.orderPaymentData.pay_money == 0) {
                _this3.$util.redirectTo('/pages/pay/result/result', {
                  code: res.data },
                'redirectTo');
              } else {
                _this3.$refs.choosePaymentPopup.getPayInfo(res.data);
                _this3.isSub = false;
              }
              // uni.removeStorage({
              // 	key: 'comboOrderCreateData',
              // 	success: () => {}
              // });
            } else {
              _this3.isSub = false;
              if (res.data.error_code == 10 || res.data.error_code == 12) {
                uni.showModal({
                  title: '订单未创建',
                  content: res.message,
                  confirmText: '去设置',
                  success: function success(res) {
                    if (res.confirm) {
                      _this3.selectAddress();
                    }
                  } });

              } else {
                _this3.$util.showToast({
                  title: res.message });

              }
            }
          },
          fail: function fail(res) {
            uni.hideLoading();
            _this3.isSub = false;
          } });

      }
    },
    // 订单验证
    verify: function verify() {
      if (!this.orderPaymentData.member_address) {
        this.$util.showToast({
          title: '请先选择您的收货地址' });

        return false;
      }

      var expressTypeVerify = true;

      for (var key in this.orderPaymentData.shop_goods_list) {
        if (this.orderPaymentData.shop_goods_list.express_type.length == 0) {
          expressTypeVerify = false;
          this.$util.showToast({
            title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】未设置配送方式' });

          break;
        }
      }

      if (!expressTypeVerify) return false;

      if (JSON.stringify(this.orderCreateData.delivery) == "{}") {
        this.$util.showToast({
          title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】未设置配送方式' });

        return false;
      }

      if (this.orderCreateData.delivery.delivery_type == 'store' && this.orderCreateData.delivery.store_id == 0) {
        this.$util.showToast({
          title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】没有可提货的门店,请选择其他配送方式' });

        return false;
      }

      if (this.orderCreateData.delivery.delivery_type == 'local') {

        if (this.orderCreateData.delivery.canLocalDelicery) {

          var hour = parseInt(this.orderCreateData.delivery.buyer_ask_delivery_time.split(":")[0]);
          var minute = parseInt(this.orderCreateData.delivery.buyer_ask_delivery_time.split(":")[1]);

          var start_hour = parseInt(this.orderCreateData.delivery.start_time.split(":")[0]);
          var start_minute = parseInt(this.orderCreateData.delivery.start_time.split(":")[1]);

          var end_hour = parseInt(this.orderCreateData.delivery.end_time.split(":")[0]);
          var end_minute = parseInt(this.orderCreateData.delivery.end_time.split(":")[1]);

          // 判断是否全天
          if (!(start_hour == end_hour && start_minute == end_minute)) {

            // 当前时间早于配送时间
            if (hour < start_hour || hour == start_hour && minute < start_minute) {
              this.$util.showToast({
                title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】送达时间不能小于配送开始时间' });

              return false;
            }

            // 当前时间在配送时间内，送达时间：开始时间~结束时间
            if (!(hour > start_hour && hour < end_hour || hour == start_hour && minute > start_minute || hour ==
            start_hour && minute >= start_minute && hour < end_hour)) {
              this.$util.showToast({
                title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】送达时间范围：开始时间~结束时间' });

              return false;
            }
          }
        } else {
          this.$util.showToast({
            title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】已休息' });

          return false;
        }

      }

      return true;
    },
    // 显示活动优惠信息
    openPromotion: function openPromotion() {
      this.$refs.PromotionPopup.open();
    },
    // 显示店铺优惠信息
    openSitePromotion: function openSitePromotion(data) {
      this.sitePromotion = data;
      this.$refs.sitePromotionPopup.open();
    },
    // 显示店铺配送信息
    openSiteDelivery: function openSiteDelivery() {
      this.tempData = {
        delivery: this.$util.deepClone(this.orderPaymentData.delivery) };

      this.$refs.deliveryPopup.open();
    },
    // 选择配送方式
    selectDeliveryType: function selectDeliveryType(data) {
      this.orderCreateData.delivery.delivery_type = data.name;
      this.orderCreateData.delivery.delivery_type_name = data.title;
      this.tempData = {
        delivery: this.$util.deepClone(this.orderPaymentData.delivery) };

      // 如果是门店配送
      if (data.name == 'store') {
        if (data.store_list[0] != undefined) {
          this.orderCreateData.delivery.store_id = data.store_list[0].store_id;
          this.tempData.delivery.store_id = data.store_list[0].store_id;
        }
      }
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.orderCalculate();
      this.$forceUpdate();
    },
    // 选择自提点
    selectPickupPoint: function selectPickupPoint(store_id) {
      this.orderCreateData.delivery.store_id = store_id;
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.orderCalculate();
      this.$forceUpdate();
      this.$refs['deliveryPopup'].close();
    },
    /**
     * 显示店铺优惠券信息
     * @param {Object} siteId
     * @param {Object} couponData
     */
    openSiteCoupon: function openSiteCoupon() {
      this.tempData = {
        coupon: this.$util.deepClone(this.orderPaymentData.coupon) };

      this.selectCouponId = this.orderCreateData.coupon.coupon_id;
      this.selectCouponMoney = this.orderCreateData.coupon.coupon_money;
      this.$refs.couponPopup.open();
    },
    // 选择优惠券
    selectCoupon: function selectCoupon(item) {
      if (this.selectCouponId != item.coupon_id) {
        this.selectCouponId = item.coupon_id;
        this.selectCouponMoney = item.money;
      } else {
        this.selectCouponId = 0;
        this.selectCouponMoney = '0.00';
      }
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.$forceUpdate();
    },
    // 选择平台优惠券
    selectPlatCoupon: function selectPlatCoupon(item) {
      if (this.selectPlatCouponId != item.platformcoupon_id) {
        this.selectPlatCouponId = item.platformcoupon_id;
        this.selectPlatCouponMoney = item.money;
      } else {
        this.selectPlatCouponId = 0;
        this.selectPlatCouponMoney = '0.00';
      }
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.$forceUpdate();
    },
    popupConfirm: function popupConfirm(ref) {
      if (ref == 'couponPopup') {
        this.orderCreateData.coupon.coupon_id = this.selectCouponId;
        this.orderCreateData.coupon.coupon_money = this.selectCouponMoney;
      }
      if (ref == 'PlatcouponPopup') {
        this.orderPaymentData.platform_coupon_id = this.selectPlatCouponId;
        this.orderPaymentData.platform_coupon_money = this.selectPlatCouponMoney;
        this.orderCreateData.platform_coupon_id = this.selectPlatCouponId;
        this.orderCreateData.platform_coupon_money = this.selectPlatCouponMoney;
      }
      this.orderCalculate();
      this.$forceUpdate();
      this.tempData = null;
      this.$refs[ref].close();
    },
    // 使用余额
    useBalance: function useBalance() {
      if (this.orderCreateData.is_balance) this.orderCreateData.is_balance = 0;else
      this.orderCreateData.is_balance = 1;
      this.orderCalculate();
      this.$forceUpdate();
    },
    imgError: function imgError(goodsIndex) {
      this.orderPaymentData.shop_goods_list.goods_list[goodsIndex].sku_image = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },
    //打开发票弹窗
    openInvoicePopup: function openInvoicePopup(val) {
      this.orderInvoice = this.$util.deepClone(val);
      this.orderInvoice.invoice_type = this.orderInvoice.invoice_type == undefined ? 1 : this.orderInvoice.invoice_type;
      this.orderInvoice.invoice_title_type = this.orderInvoice.invoice_title_type == undefined ? 1 : this.orderInvoice.invoice_title_type;
      this.orderInvoice.invoice_content = this.orderInvoice.invoice_content ? this.orderInvoice.invoice_content : '';
      this.orderInvoice.invoice_title = this.orderInvoice.invoice_title ? this.orderInvoice.invoice_title : '';
      this.orderInvoice.invoice_full_address = this.orderInvoice.invoice_full_address ? this.orderInvoice.invoice_full_address :
      ''; //邮寄地址
      this.orderInvoice.is_tax_invoice = this.orderInvoice.is_tax_invoice ? this.orderInvoice.is_tax_invoice : 0; //是否需要增值税发票
      this.orderInvoice.invoice_email = this.orderInvoice.invoice_email ? this.orderInvoice.invoice_email : ''; // 邮箱
      this.orderInvoice.taxpayer_number = this.orderInvoice.taxpayer_number ? this.orderInvoice.taxpayer_number : ''; //纳税人识别号
      this.openPopup('invoicePopup');
    },
    // 切换发票开关
    changeIsInvoice: function changeIsInvoice() {
      if (this.orderInvoice.is_invoice == 0) {
        this.orderInvoice.is_invoice = 1;
      } else {
        this.orderInvoice.is_invoice = 0;
      }
      this.$forceUpdate();
    },
    // 切换发票类型
    changeInvoiceType: function changeInvoiceType(invoice_type) {
      this.orderInvoice.invoice_type = invoice_type;
      this.$forceUpdate();
    },
    // 切换发票个人还是企业
    changeInvoiceTitleType: function changeInvoiceTitleType(invoice_title_type) {
      this.orderInvoice.invoice_title_type = invoice_title_type;
      this.$forceUpdate();
    },
    // 选择发票内容
    changeInvoiceContent: function changeInvoiceContent(invoice_content) {
      this.orderInvoice.invoice_content = invoice_content;
      this.$forceUpdate();
    },
    //关闭发票弹窗
    closeInvoicePopup: function closeInvoicePopup() {
      this.orderInvoice.invoice_type = 1; // 发票类型  1 纸质 2 电子
      this.orderInvoice.invoice_title_type = 1; // 抬头类型  1 个人 2 企业
      this.orderInvoice.invoice_content = ''; // 发票内容
      this.orderInvoice.invoice_title = ''; // 发票抬头
      this.orderInvoice.invoice_full_address = ''; // 发票邮寄地址
      this.orderInvoice.is_tax_invoice = 0; // 是否需要增值税专用发票  0 不需要 1 需要
      this.orderInvoice.invoice_email = ''; //发票邮箱
      this.orderInvoice.taxpayer_number = ''; //纳税人识别号
      this.orderCalculate();
      this.$forceUpdate();
      this.$refs.invoicePopup.close();
    },
    // 发票验证
    invoiceVerify: function invoiceVerify() {
      if (this.orderInvoice.is_invoice == 1) {
        if (this.orderInvoice.invoice_title == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写发票抬头" });

          return false;
        }
        if (this.orderInvoice.invoice_title_type == 2 && this.orderInvoice.taxpayer_number == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写纳税人识别号" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 1 && this.orderInvoice.invoice_full_address == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写发票邮寄地址" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 2 && this.orderInvoice.invoice_email == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写邮箱" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 2 && this.orderInvoice.invoice_email != '') {
          var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
          if (!reg.test(this.orderInvoice.invoice_email)) {
            this.$refs.invoicePopup.open();
            this.$util.showToast({
              title: "请填写正确的邮箱地址" });

            return false;
          }
        }
        if (this.orderInvoice.invoice_content == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请选择发票内容" });

          return false;
        }

      }
      return true;
    },
    // 保存发票信息
    saveInvoice: function saveInvoice() {
      if (this.invoiceVerify()) {
        this.orderPaymentData.shop_goods_list = this.orderInvoice;
        this.orderCalculate();
        this.closePopup('invoicePopup');
      }
    },
    bindTimeChange: function bindTimeChange(e) {
      var time = e.target.value;
      this.orderCreateData.delivery[e.currentTarget.dataset.siteid].buyer_ask_delivery_time = time;
      this.orderCalculate();
      this.$forceUpdate();
    },
    toShopDetail: function toShopDetail(e) {
      this.$util.redirectTo('/otherpages/shop/index/index', {
        site_id: e });

    },
    navigateTo: function navigateTo(sku_id) {
      this.$util.redirectTo('/pages/goods/detail/detail', {
        sku_id: sku_id });

    },
    // 显示选择支付方式弹框
    openChoosePayment: function openChoosePayment() {
      uni.setStorageSync('paySource', '');
      if (this.verify()) this.$refs.choosePaymentPopup.open();
    } },

  onShow: function onShow() {
    // 刷新多语言
    this.$langConfig.refresh();

    if (uni.getStorageSync('addressBack')) {
      uni.removeStorageSync('addressBack');
    }

    // 判断登录
    if (!uni.getStorageSync('token')) {
      this.$util.redirectTo('/pages/login/login/login');
    } else {
      this.getOrderPaymentData();
    }

    this.isIphoneX = this.$util.uniappIsIPhoneX();
  },
  onHide: function onHide() {
    if (this.$refs.loadingCover) this.$refs.loadingCover.show();
  },
  computed: {
    // 余额抵扣
    balanceDeduct: function balanceDeduct() {
      if (this.orderPaymentData.member_account.balance_total <= parseFloat(this.orderPaymentData.order_money).toFixed(2)) {
        return parseFloat(this.orderPaymentData.member_account.balance_total).toFixed(2);
      } else {
        return parseFloat(this.orderPaymentData.order_money).toFixed(2);
      }
    },
    promotionMoney: function promotionMoney() {
      return this.orderPaymentData.bunding_info.goods_money - this.orderPaymentData.bunding_info.bl_price;
    } },

  filters: {
    // 金额格式化输出
    moneyFormat: function moneyFormat(money) {
      return parseFloat(money).toFixed(2);
    },
    // 店铺优惠摘取
    promotion: function promotion(data) {
      var promotion = [];
      if (data) {
        Object.keys(data).forEach(function (key) {
          var promotionInfo = data[key];
          switch (key) {
            case 'manjian':
              promotion.push('满减送');
              break;
            case 'freeshipping':
              promotion.push('满额包邮');
              break;}

        });
      }
      return promotion.join(" ");
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 383:
/*!***********************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/topics/public/js/detail.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _htmlParser = _interopRequireDefault(__webpack_require__(/*! @/common/js/html-parser */ 206));
var _wxJssdk = __webpack_require__(/*! @/common/js/wx-jssdk.js */ 151);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _regeneratorRuntime() {"use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return exports;};var exports = {},Op = Object.prototype,hasOwn = Op.hasOwnProperty,$Symbol = "function" == typeof Symbol ? Symbol : {},iteratorSymbol = $Symbol.iterator || "@@iterator",asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];}try {define({}, "");} catch (err) {define = function define(obj, key, value) {return obj[key] = value;};}function wrap(innerFn, outerFn, self, tryLocsList) {var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,generator = Object.create(protoGenerator.prototype),context = new Context(tryLocsList || []);return generator._invoke = function (innerFn, self, context) {var state = "suspendedStart";return function (method, arg) {if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {if ("throw" === method) throw arg;return doneResult();}for (context.method = method, context.arg = arg;;) {var delegate = context.delegate;if (delegate) {var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {if (delegateResult === ContinueSentinel) continue;return delegateResult;}}if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);} else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };}"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);}};}(innerFn, self, context), generator;}function tryCatch(fn, obj, arg) {try {return { type: "normal", arg: fn.call(obj, arg) };} catch (err) {return { type: "throw", arg: err };}}exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {return this;});var getProto = Object.getPrototypeOf,NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {["next", "throw", "return"].forEach(function (method) {define(prototype, method, function (arg) {return this._invoke(method, arg);});});}function AsyncIterator(generator, PromiseImpl) {function invoke(method, arg, resolve, reject) {var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {var result = record.arg,value = result.value;return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {invoke("next", value, resolve, reject);}, function (err) {invoke("throw", err, resolve, reject);}) : PromiseImpl.resolve(value).then(function (unwrapped) {result.value = unwrapped, resolve(result);}, function (error) {return invoke("throw", error, resolve, reject);});}reject(record.arg);}var previousPromise;this._invoke = function (method, arg) {function callInvokeWithMethodAndArg() {return new PromiseImpl(function (resolve, reject) {invoke(method, arg, resolve, reject);});}return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();};}function maybeInvokeDelegate(delegate, context) {var method = delegate.iterator[context.method];if (undefined === method) {if (context.delegate = null, "throw" === context.method) {if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);}function pushTryEntry(locs) {var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);}function resetTryEntry(entry) {var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;}function Context(tryLocsList) {this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);}function values(iterable) {if (iterable) {var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {var i = -1,next = function next() {for (; ++i < iterable.length;) {if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;}return next.value = undefined, next.done = !0, next;};return next.next = next;}}return { next: doneResult };}function doneResult() {return { value: undefined, done: !0 };}return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));}, exports.mark = function (genFun) {return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;}, exports.awrap = function (arg) {return { __await: arg };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {return this;}), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {return result.done ? result.value : iter.next();});}, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {return this;}), define(Gp, "toString", function () {return "[object Generator]";}), exports.keys = function (object) {var keys = [];for (var key in object) {keys.push(key);}return keys.reverse(), function next() {for (; keys.length;) {var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;}return next.done = !0, next;};}, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);}}, stop: function stop() {this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;}, dispatchException: function dispatchException(exception) {if (this.done) throw exception;var context = this;function handle(loc, caught) {return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;}for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i],record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {var hasCatch = hasOwn.call(entry, "catchLoc"),hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);} else if (hasCatch) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);} else {if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);}}}}, abrupt: function abrupt(type, arg) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {var finallyEntry = entry;break;}}finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);}, complete: function complete(record, afterLoc) {if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;}, finish: function finish(finallyLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;}}, catch: function _catch(tryLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {var record = entry.completion;if ("throw" === record.type) {var thrown = record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield: function delegateYield(iterable, resultName, nextLoc) {return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;} }, exports;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =



{
  data: function data() {
    return {
      topics_id: 0,
      skuId: 0,

      // 商品详情
      goodsSkuDetail: {
        goods_id: 0,
        goods_service: [] },

      // 店铺详情
      shopInfo: {
        logo: '',
        shop_baozh: 0,
        shop_qtian: 0,
        shop_zhping: 0,
        shop_erxiaoshi: 0,
        shop_tuihuo: 0,
        shop_shiyong: 0,
        shop_shiti: 0,
        shop_xiaoxie: 0 },


      cartCount: 0, // 购物车商品数量
      whetherCollection: 0,

      // 媒体,图片,视频

      // 解决每个商品SKU图片数量不同时，无法切换到第一个，导致轮播图显示不出来
      swiperInterval: 1,
      swiperAutoplay: false,
      swiperCurrent: 1,
      switchMedia: 'img',

      isIphoneX: false, //判断手机是否是iphoneX以上

      poster: "-1", //海报
      posterMsg: "", //海报错误信息
      posterHeight: 0,

      //评价
      goodsEvaluate: {
        member_headimg: '',
        member_name: '',
        content: '',
        images: [],
        create_time: 0,
        sku_name: '' },

      memberId: 0,
      contactData: {
        title: '',
        path: '',
        img: '' },

      detailTab: 0,
      service: null,
      showKefu: 0,
      // 是否可分享到好物圈
      goodsCircle: false,
      evaluateConfig: {
        evaluate_audit: 1,
        evaluate_show: 0,
        evaluate_status: 1 } };


  },
  onLoad: function onLoad(data) {var _this = this;
    this.topics_id = data.id || 0;
    this.isIphoneX = this.$util.uniappIsIPhoneX();
    if (data.source_member) uni.setStorageSync('source_member', data.source_member);
    // 小程序扫码进入
    if (data.scene) {
      var sceneParams = decodeURIComponent(data.scene);
      sceneParams = sceneParams.split('&');
      if (sceneParams.length) {
        sceneParams.forEach(function (item) {
          if (item.indexOf('id') != -1) _this.topics_id = item.split('-')[1];
          if (item.indexOf('source_member') != -1) uni.setStorageSync('source_member', item.split('-')[1]);
        });
      }
    }
    // this.getService();
  },
  onShow: function onShow() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {return _regeneratorRuntime().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              // 刷新多语言
              _this2.$langConfig.refresh();
              _this2.$store.dispatch('getAddonIsexit').then( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                          data.topic) {_context.next = 5;break;}
                          _this2.$util.showToast({
                            title: '专题活动未开启',
                            mask: true });

                          setTimeout(function () {
                            _this2.$util.redirectTo('/pages/index/index/index', {}, 'redirectTo');
                          }, 1000);_context.next = 12;break;case 5:

                          if (uni.getStorageSync('token')) {
                            _this2.getCartCount();
                            _this2.getMemberId();
                          }
                          _this2.canGoConnect();
                          _this2.getKekuConfig();
                          //同步获取商品详情
                          _context.next = 10;return _this2.getGoodsSkuDetail();case 10:

                          //修改商品信息
                          _this2.modifyGoodsInfo();

                          // 评价设置
                          _this2.getEvaluateConfig();case 12:case "end":return _context.stop();}}}, _callee);}));return function (_x) {return _ref.apply(this, arguments);};}());case 2:case "end":return _context2.stop();}}}, _callee2);}))();



  },
  methods: {
    canGoConnect: function canGoConnect() {var _this3 = this;
      this.$api.sendRequest({
        url: "/api/addon/addonisexit",
        success: function success(res) {
          if (res.code == 0 && res.data) {
            _this3.showKefu = res.data.servicer;
          }
        } });

    },
    //联系客服
    goConnect: function goConnect() {
      if (uni.getStorageSync('token')) {
        var data = {
          site_id: this.shopInfo.site_id,
          sku_id: this.goodsSkuDetail.sku_id };

        this.$util.redirectTo('/otherpages/chat/room/room', data);
        return false;
      } else {
        this.$refs.login.open('/pages/goods/detail/detail?sku_id=' + this.goodsSkuDetail.sku_id);
        return;
      }
    },
    // 获取专题活动商品详情
    getGoodsSkuDetail: function getGoodsSkuDetail() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {var res, data, goods_attr_format, i, j;return _regeneratorRuntime().wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  _this4.$api.sendRequest({
                    url: '/topic/api/topicgoods/detail',
                    async: false,
                    data: {
                      topic_id: _this4.topics_id } }));case 2:res = _context3.sent;


                data = res.data;
                if (data.goods_sku_detail != null) {
                  _this4.goodsSkuDetail = data.goods_sku_detail;
                  _this4.shopInfo = data.shop_info;

                  _this4.skuId = _this4.goodsSkuDetail.sku_id;

                  _this4.goodsSkuDetail.goods_service = [];
                  if (_this4.shopInfo.shop_baozh == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '保证服务',
                      desc: '保证服务' });

                  }

                  if (_this4.shopInfo.shop_qtian == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '7天退换',
                      desc: '满足7天无理由退换货申请的前提下，包邮商品需要买家承担退货邮费，非包邮商品需要买家承担发货和退货邮费' });

                  }

                  if (_this4.shopInfo.shop_zhping == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '正品保障',
                      desc: '商品支持正品保障服务' });

                  }

                  if (_this4.shopInfo.shop_erxiaoshi == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '两小时发货',
                      desc: '付款后2小时内发货' });

                  }

                  if (_this4.shopInfo.shop_tuihuo == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '退货承诺',
                      desc: '退货承诺' });

                  }

                  if (_this4.shopInfo.shop_shiyong == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '试用中心',
                      desc: '试用中心' });

                  }

                  if (_this4.shopInfo.shop_shiti == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '实体验证',
                      desc: '实体验证' });

                  }

                  if (_this4.shopInfo.shop_xiaoxie == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '消协保证',
                      desc: '如有商品质量问题、描述不符或未收到货等，您有权申请退款或退货，来回邮费由卖家承担' });

                  }

                  if (res.timestamp > _this4.goodsSkuDetail.end_time) {
                    _this4.$util.showToast({
                      title: "专题活动已结束" });

                    setTimeout(function () {
                      _this4.$util.redirectTo('/pages/goods/detail/detail', {
                        sku_id: _this4.goodsSkuDetail.sku_id },
                      'redirectTo');
                    }, 1000);
                  } else {
                    _this4.goodsSkuDetail.discountTimeMachine = _this4.$util.countDown(_this4.goodsSkuDetail.end_time - res.timestamp);
                  }

                  _this4.goodsSkuDetail.show_price = _this4.goodsSkuDetail.topic_price;

                  //媒体
                  if (_this4.goodsSkuDetail.video_url) _this4.switchMedia = "video";

                  if (_this4.goodsSkuDetail.sku_images) _this4.goodsSkuDetail.sku_images = _this4.goodsSkuDetail.sku_images.split(",");else
                  _this4.goodsSkuDetail.sku_images = [];

                  // 多规格时合并主图
                  if (_this4.goodsSkuDetail.goods_spec_format && _this4.goodsSkuDetail.goods_image) {
                    _this4.goodsSkuDetail.goods_image = _this4.goodsSkuDetail.goods_image.split(",");
                    _this4.goodsSkuDetail.sku_images = _this4.goodsSkuDetail.sku_images.concat(_this4.goodsSkuDetail.goods_image);
                  }

                  _this4.goodsSkuDetail.unit = _this4.goodsSkuDetail.unit || "件";

                  _this4.goodsSkuDetail.save_price = _this4.goodsSkuDetail.price - _this4.goodsSkuDetail.show_price > 0 ? (_this4.goodsSkuDetail.
                  price - _this4.goodsSkuDetail.show_price).toFixed(2) : 0;

                  // 当前商品SKU规格
                  if (_this4.goodsSkuDetail.sku_spec_format) _this4.goodsSkuDetail.sku_spec_format = JSON.parse(_this4.goodsSkuDetail.sku_spec_format);

                  // 商品属性
                  if (_this4.goodsSkuDetail.goods_attr_format) {
                    goods_attr_format = JSON.parse(_this4.goodsSkuDetail.goods_attr_format);
                    _this4.goodsSkuDetail.goods_attr_format = _this4.$util.unique(goods_attr_format, "attr_id");
                    for (i = 0; i < _this4.goodsSkuDetail.goods_attr_format.length; i++) {
                      for (j = 0; j < goods_attr_format.length; j++) {
                        if (_this4.goodsSkuDetail.goods_attr_format[i].attr_id == goods_attr_format[j].attr_id && _this4.goodsSkuDetail.goods_attr_format[
                        i].attr_value_id != goods_attr_format[j].attr_value_id) {
                          _this4.goodsSkuDetail.goods_attr_format[i].attr_value_name += "、" + goods_attr_format[j].attr_value_name;
                        }
                      }
                    }
                  }

                  // 商品SKU格式
                  if (_this4.goodsSkuDetail.goods_spec_format) _this4.goodsSkuDetail.goods_spec_format = JSON.parse(_this4.goodsSkuDetail.goods_spec_format);

                  _this4.$langConfig.title(_this4.goodsSkuDetail.goods_name);

                  // 商品详情
                  // if (this.goodsSkuDetail.goods_content) this.goodsSkuDetail.goods_content = htmlParser(this.goodsSkuDetail.goods_content);

                  _this4.contactData = {
                    title: _this4.goodsSkuDetail.sku_name,
                    path: '/promotionpages/topic/detail/detail?id=' + _this4.topics_id,
                    img: _this4.$util.img(_this4.goodsSkuDetail.sku_image, {
                      size: 'big' }) };



                  if (uni.getStorageSync('token')) {
                    _this4.getWhetherCollection();
                  }

                  _this4.setWechatShare();

                  // if (this.$refs.goodsPromotion) this.$refs.goodsPromotion.refresh(this.goodsSkuDetail.goods_promotion);

                  if (_this4.$refs.loadingCover) _this4.$refs.loadingCover.hide();


                  _this4.getGoodScircleConfig();

                } else {
                  _this4.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
                }case 5:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    /**
     * 刷新商品详情数据
     * @param {Object} goodsSkuDetail
     */
    refreshGoodsSkuDetail: function refreshGoodsSkuDetail(goodsSkuDetail) {var _this5 = this;
      Object.assign(this.goodsSkuDetail, goodsSkuDetail);
      this.goodsSkuDetail.unit = this.goodsSkuDetail.unit || "件";
      // if (this.$refs.goodsPromotion) this.$refs.goodsPromotion.refresh(this.goodsSkuDetail.goods_promotion);

      // 解决轮播图数量不一致时，切换到第一个
      if (this.swiperCurrent > this.goodsSkuDetail.sku_images.length) {
        this.swiperAutoplay = true;
        this.swiperCurrent = 1;
        setTimeout(function () {
          _this5.swiperAutoplay = false;
        }, 40);
      }
    },
    goHome: function goHome() {
      // this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
      this.$util.redirectTo('/otherpages/shop/index/index', {
        site_id: this.shopInfo.site_id });

    },
    goCart: function goCart() {
      this.$util.redirectTo('/pages/goods/cart/cart', {}, 'reLaunch');
    },
    // 立即购买
    topic: function topic() {
      if (!uni.getStorageSync('token')) {
        this.$refs.login.open('/promotionpages/topics/goods_detail/goods_detail?id=' + this.topics_id);
        return;
      }
      this.$refs.goodsSku.show("topic", function () {});
    },
    swiperChange: function swiperChange(e) {
      this.swiperCurrent = e.detail.current + 1;
    },


    //-------------------------------------服务-------------------------------------

    openMerchantsServicePopup: function openMerchantsServicePopup() {
      this.$refs.merchantsServicePopup.open();
    },
    closeMerchantsServicePopup: function closeMerchantsServicePopup() {
      this.$refs.merchantsServicePopup.close();
    },



    //-------------------------------------属性-------------------------------------

    openAttributePopup: function openAttributePopup() {
      this.$refs.attributePopup.open();
    },
    closeAttributePopup: function closeAttributePopup() {
      this.$refs.attributePopup.close();
    },

    //-------------------------------------属性-------------------------------------



    //-------------------------------------评价-------------------------------------
    //商品评论列表
    getGoodsEvaluate: function getGoodsEvaluate() {var _this6 = this;
      this.$api.sendRequest({
        url: "/api/goodsevaluate/firstinfo",
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          var data = res.data;
          if (data) {
            _this6.goodsEvaluate = data;
            if (_this6.goodsEvaluate.images) _this6.goodsEvaluate.images = _this6.goodsEvaluate.images.split(",");
            if (_this6.goodsEvaluate.is_anonymous == 1) _this6.goodsEvaluate.member_name = _this6.goodsEvaluate.member_name.replace(
            _this6.goodsEvaluate.member_name.substring(1, _this6.goodsEvaluate.member_name.length - 1), '***');
          }
        } });

    },

    // 预览评价图片
    previewEvaluate: function previewEvaluate(index, field) {
      var paths = [];
      for (var i = 0; i < this.goodsEvaluate[field].length; i++) {
        paths.push(this.$util.img(this.goodsEvaluate[field][i]));
      }
      uni.previewImage({
        current: index,
        urls: paths });

    },


    //-------------------------------------关注-------------------------------------

    //获取用户是否关注
    getWhetherCollection: function getWhetherCollection() {var _this7 = this;
      this.$api.sendRequest({
        url: "/api/goodscollect/iscollect",
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          _this7.whetherCollection = res.data;
        } });

    },

    editCollection: function editCollection() {var _this8 = this;
      if (uni.getStorageSync('token')) {

        //未关注添加关注
        if (this.whetherCollection == 0) {
          this.$api.sendRequest({
            url: "/api/goodscollect/add",
            data: {
              sku_id: this.skuId },

            success: function success(res) {
              var data = res.data;
              if (data > 0) {
                _this8.whetherCollection = 1;
              }
            } });

        } else {
          //已关注取消关注
          this.$api.sendRequest({
            url: "/api/goodscollect/delete",
            data: {
              goods_id: this.goodsSkuDetail.goods_id },

            success: function success(res) {
              var data = res.data;
              if (data > 0) {
                _this8.whetherCollection = 0;
              }
            } });

        }
      } else {
        this.$refs.login.open('/promotionpages/topics/goods_detail/goods_detail?id=' + this.topics_id);
      }
    },
    //获取购物车数量
    getCartCount: function getCartCount() {var _this9 = this;
      this.$store.dispatch('getCartNumber').then(function (e) {
        _this9.cartCount = e;
      });
    },
    //更新商品信息
    modifyGoodsInfo: function modifyGoodsInfo() {
      //更新商品点击量
      this.$api.sendRequest({
        url: "/api/goods/modifyclicks",
        data: {
          sku_id: this.skuId,
          site_id: this.goodsSkuDetail.site_id },

        success: function success(res) {} });


      //添加足迹
      this.$api.sendRequest({
        url: "/api/goodsbrowse/add",
        data: {
          sku_id: this.skuId },

        success: function success(res) {} });

    },


    //-------------------------------------分享-------------------------------------
    // 打开分享弹出层
    openSharePopup: function openSharePopup() {
      this.$refs.sharePopup.open();
    },
    // 关闭分享弹出层
    closeSharePopup: function closeSharePopup() {
      this.$refs.sharePopup.close();
    },
    //-------------------------------------海报-------------------------------------

    // 打开海报弹出层
    openPosterPopup: function openPosterPopup() {var _this10 = this;
      this.getGoodsPoster();
      this.$refs.sharePopup.close();
      this.$refs.posterPopup.open();
      if (this.poster != '-1') {
        setTimeout(function () {
          var view = uni.createSelectorQuery().in(_this10).select(".poster-layer .image-wrap");
          view.fields({
            size: true },
          function (data) {
            var posterWhith = data.width;
            var ratio = parseFloat((740 / posterWhith).toFixed(2));
            if (uni.getStorageSync('token')) {
              _this10.posterHeight = parseInt(1240 / ratio);
            } else {
              _this10.posterHeight = parseInt(1100 / ratio);
            }
          }).exec();
        }, 100);
      }
    },
    // 关闭海报弹出层
    closePosterPopup: function closePosterPopup() {
      this.$refs.posterPopup.close();
    },
    //生成海报
    getGoodsPoster: function getGoodsPoster() {var _this11 = this;
      //活动海报信息
      var qrcode_param = {
        id: this.topics_id };

      if (this.memberId) qrcode_param.source_member = this.memberId;
      this.$api.sendRequest({
        url: "/topic/api/topicgoods/poster",
        data: {
          page: '/promotionpages/topics/goods_detail/goods_detail',
          qrcode_param: JSON.stringify(qrcode_param) },

        success: function success(res) {
          if (res.code == 0) {
            _this11.poster = res.data.path + "?time=" + new Date().getTime();
          } else {
            _this11.posterMsg = res.message;
          }
        } });

    },
    // 预览图片
    previewMedia: function previewMedia(index) {
      var paths = [];
      for (var i = 0; i < this.goodsSkuDetail.sku_images.length; i++) {
        paths.push(this.$util.img(this.goodsSkuDetail.sku_images[i], {
          size: 'big' }));

      }
      uni.previewImage({
        current: index,
        urls: paths });

    },
    swiperImgError: function swiperImgError(index) {
      this.goodsSkuDetail.sku_images[index] = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },

    //小程序中保存海报
    saveGoodsPoster: function saveGoodsPoster() {var _this12 = this;
      var url = this.$util.img(this.poster);
      uni.downloadFile({
        url: url,
        success: function success(res) {
          if (res.statusCode === 200) {
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function success() {
                _this12.$util.showToast({
                  title: "保存成功" });

              },
              fail: function fail() {
                _this12.$util.showToast({
                  title: "保存失败，请稍后重试" });

              } });

          }
        } });

    },

    getMemberId: function getMemberId() {var _this13 = this;
      this.$api.sendRequest({
        url: "/api/member/id",
        success: function success(res) {
          if (res.code >= 0) {
            _this13.memberId = res.data;
          }
        } });

    },
    //售后保障查询
    getService: function getService() {var _this14 = this;
      this.$api.sendRequest({
        url: '/api/goods/aftersale',
        success: function success(res) {
          if (res.code == 0 && res.data) {
            var data = res.data.content;
            if (res.data.content) _this14.service = (0, _htmlParser.default)(res.data.content);
          }
        } });

    },
    /**
     * 设置微信公众号分享
     */
    setWechatShare: function setWechatShare() {
      // 微信公众号分享






























    },

    /**
     *	获取是否开启微信圈子 
     */
    getGoodScircleConfig: function getGoodScircleConfig() {var _this15 = this;
      this.$api.sendRequest({
        url: '/goodscircle/api/config/info',
        success: function success(res) {
          if (res.code == 0) {
            if (res.data.is_use) {
              _this15.goodsSyncToGoodsCircle();
            }
          }
        } });

    },
    /**
     *	将商品同步到微信圈子 
     */
    goodsSyncToGoodsCircle: function goodsSyncToGoodsCircle() {var _this16 = this;
      this.$api.sendRequest({
        url: '/goodscircle/api/goods/sync',
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          if (res.code == 0) {
            _this16.goodsCircle = true;
          }
        } });

    },
    /**
     * 将商品推荐到微信圈子
     */
    openBusinessView: function openBusinessView() {var _this17 = this;
      if (wx.openBusinessView) {
        wx.openBusinessView({
          businessType: 'friendGoodsRecommend',
          extraData: {
            product: {
              item_code: this.goodsSkuDetail.goods_id,
              title: this.goodsSkuDetail.sku_name,
              image_list: this.goodsSkuDetail.sku_images.map(function (ele) {
                return _this17.$util.img(ele);
              }) } },


          success: function success(res) {
            console.log('success', res);
          },
          fail: function fail(res) {
            console.log('fail', res);
          } });

      }
    },

    getEvaluateConfig: function getEvaluateConfig() {var _this18 = this;
      this.$api.sendRequest({
        url: '/api/goodsevaluate/config',
        success: function success(res) {
          if (res.code == 0) {
            var data = res.data;
            _this18.evaluateConfig = data;
            if (_this18.evaluateConfig.evaluate_show == 1) {
              //商品评论
              _this18.getGoodsEvaluate();
            }
          }
        } });

    },
    copyUrl: function copyUrl() {var _this19 = this;
      var text = this.$config.h5Domain + '/promotionpages/topic/goods_detail/goods_detail?id=' + this.topics_id;
      if (this.memberId) text += '&source_member=' + this.memberId;
      this.$util.copy(text, function () {
        _this19.closeSharePopup();
      });
    },
    getKekuConfig: function getKekuConfig() {var _this20 = this;
      this.$api.sendRequest({
        url: '/api/config/servicer',
        success: function success(res) {
          if (res.code == 0) {
            _this20.kefuConfig = res.data;
          }
        } });

    },
    toEvaluateDetail: function toEvaluateDetail(id) {
      this.$util.redirectTo('/otherpages/goods/evaluate/evaluate', {
        goods_id: id });

    },
    navigate: function navigate(href, e) {
      //比如点击a标签，打开某个webview并传输url
      this.$util.redirectTo('/otherpages/webview/webview', {
        link: encodeURIComponent(href) });

    },
    //h5播放视频
    openVideo: function openVideo(url, video_img) {
      // this.$refs.videoPopup.open();
      this.$util.redirectTo('/otherpages/goods/preview-video', {
        video_url: url,
        video_img: video_img });

    },
    errorShopLogo: function errorShopLogo() {
      this.shopInfo.avatar = this.$util.getDefaultImage().default_shop_img;
      this.$forceUpdate();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 394:
/*!************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/topics/public/js/payment.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      isIphoneX: false,
      orderCreateData: {
        is_balance: 0,
        pay_password: '' },

      orderPaymentData: {
        member_account: {
          balance: 0,
          is_pay_password: 0 },

        shop_goods_list: {
          site_name: '',
          express_type: [],
          invoice_config: {
            invoice_status: 0 } },


        topic_info: {} },

      orderInvoice: {
        is_invoice: 0, //是否需要发票
        invoice_type: 1, //发票类型电子、纸质
        invoice_title: '', //发票抬头
        invoice_title_type: 1, // 抬头类型
        invoice_full_address: '', //邮寄地址
        is_tax_invoice: 0, //是否需要增值税发票
        invoice_email: '', // 邮箱
        invoice_content: '', //发票内容
        taxpayer_number: '' //纳税人识别号
      },
      isSub: false,
      tempData: null,
      siteDelivery: {
        site_id: 0,
        data: [] } };


  },
  methods: {
    // 显示弹出层
    openPopup: function openPopup(ref) {
      this.$refs[ref].open();
    },
    // 关闭弹出层
    closePopup: function closePopup(ref) {
      if (this.tempData) {
        Object.assign(this.orderCreateData, this.tempData);
        Object.assign(this.orderPaymentData, this.tempData);
        this.tempData = null;
        this.$forceUpdate();
      }
      this.$refs[ref].close();
    },
    // 选择收货地址，默认有定位
    selectAddress: function selectAddress() {
      var params = {
        back: '/promotionpages/topics/payment/payment',
        local: 0,
        type: 1 };

      // 外卖配送需要定位地址
      // if (this.orderPaymentData.delivery.delivery_type == 'local') {
      // 	params.local = 1;
      // 	params.type = 2;
      // }
      this.$util.redirectTo('/otherpages/member/address/address', params);
    },
    // 获取订单初始化数据
    getOrderPaymentData: function getOrderPaymentData() {var _this = this;
      this.orderCreateData = uni.getStorageSync('topicOrderCreateData');
      var pay_flag = uni.getStorageSync("pay_flag"); // 支付中标识，防止返回时，提示,跳转错误
      if (!this.orderCreateData) {
        if (pay_flag == 1) {
          uni.removeStorageSync("pay_flag");
        } else {
          this.$util.showToast({
            title: '未获取到创建订单所需数据！' });

          setTimeout(function () {
            _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }, 1000);
        }
        return;
      }

      // 获取经纬度
      var location = uni.getStorageSync('location');
      if (location) {
        this.orderCreateData = Object.assign(this.orderCreateData, location);
      }

      this.orderCreateData.buyer_message = '';

      this.$api.sendRequest({
        url: '/topic/api/ordercreate/payment',
        data: this.orderCreateData,
        success: function success(res) {
          if (res.code >= 0) {
            _this.orderPaymentData = res.data;
            _this.orderPaymentData.timestamp = res.timestamp;
            _this.handlePaymentData();
            if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
          } else {
            _this.$util.showToast({
              title: '未获取到创建订单所需数据！' });

            setTimeout(function () {
              _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
            }, 1000);
          }
        },
        fail: function fail(res) {
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        } });

    },
    // 处理结算订单数据
    handlePaymentData: function handlePaymentData() {
      this.orderCreateData.delivery = {};
      this.orderCreateData.invoice = {};
      this.orderCreateData.is_balance = 0;
      this.orderCreateData.pay_password = '';

      var data = this.orderPaymentData;

      var h = new Date().getHours().toString();
      var m = new Date().getMinutes().toString();
      if (h.length == 1) {
        h = '0' + h;
      }
      if (m.length == 1) {
        m = '0' + m;
      }
      var nowTime = h + ':' + m;
      var weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

      // 获取时间，必须是字符串,跟后端一致
      var index_weeks = ['0', '1', '2', '3', '4', '5', '6'];
      var curr_week = index_weeks[new Date().getDay()];

      if (data.shop_goods_list.express_type != undefined && data.shop_goods_list.express_type[0] != undefined) {
        var express_type = data.shop_goods_list.express_type;
        this.orderCreateData.delivery.delivery_type = express_type[0].name;
        this.orderCreateData.delivery.delivery_type_name = express_type[0].title;
        this.orderCreateData.delivery.store_id = 0;

        // 如果默认配送方式是门店配送
        if (express_type[0].name == 'store') {
          if (express_type[0].store_list[0] != undefined) {
            this.orderCreateData.delivery.store_id = express_type[0].store_list[0].store_id;
          }
        }
      }

      if (data.is_virtual == 0 && data.shop_goods_list.local_config) {

        // 是否显示时间选择
        if (data.shop_goods_list.local_config.info && data.shop_goods_list.local_config.info.time_is_open == 1) {
          this.orderCreateData.delivery.showTimeBar = true;
          this.orderCreateData.delivery.buyer_ask_delivery_time = nowTime;
          // 当日是否支持配送
          if (data.shop_goods_list.local_config.info.time_week.length == 0 ||
          data.shop_goods_list.local_config.info.time_week.length == 7 ||
          data.shop_goods_list.local_config.info.time_week.indexOf(curr_week) > -1) {
            this.orderCreateData.delivery.canLocalDelicery = true;
          } else {
            this.orderCreateData.delivery.canLocalDelicery = false;
          }

          if (data.shop_goods_list.local_config.info.time_type == 0) {
            this.orderCreateData.delivery.deliveryWeek = "全天";
          } else if (data.shop_goods_list.local_config.info.time_week.length > 0) {
            if (data.shop_goods_list.local_config.info.time_week.length == 7) {
              this.orderCreateData.delivery.deliveryWeek = "全天";
              this.orderCreateData.delivery.showTime = false;
            } else {
              this.orderCreateData.delivery.showTime = true;
              // 判断配送时间是连续还是间隔
              var timeWeek = data.shop_goods_list.local_config.info.time_week;
              var is_interval = false; // 是否间隔
              for (var i = 0; i < timeWeek.length; i++) {
                if (i + 1 < timeWeek.length) {
                  var difference = timeWeek[i + 1] - timeWeek[i];
                  if (difference > 1) {
                    is_interval = true;
                    break;
                  }
                }
              }

              if (is_interval) {
                var temp = [];
                for (var i = 0; i < timeWeek.length; i++) {
                  temp.push(weeks[timeWeek[i]]);
                }
                this.orderCreateData.delivery.deliveryWeek = temp.join("、");
              } else {
                this.orderCreateData.delivery.deliveryWeek = weeks[timeWeek[0]] + "至" + weeks[timeWeek[timeWeek.length -
                1]];
              }
            }
          } else {
            this.orderCreateData.delivery.deliveryWeek = "店铺未设置配送时间";
          }

          // picker组件时间起始
          var start_time = data.shop_goods_list.local_config.info.start_time;
          this.orderCreateData.delivery.start_time = this.getTimeStr(start_time);

          var end_time = data.shop_goods_list.local_config.info.end_time;
          this.orderCreateData.delivery.end_time = this.getTimeStr(end_time);

          var current_time = new Date(this.$util.timeStampTurnTime(data.timestamp));
          var hour = current_time.getHours();
          var minute = current_time.getMinutes();

          var start_hour = parseInt(this.orderCreateData.delivery.start_time.split(":")[0]);
          var start_minute = parseInt(this.orderCreateData.delivery.start_time.split(":")[1]);

          var end_hour = parseInt(this.orderCreateData.delivery.end_time.split(":")[0]);
          var end_minute = parseInt(this.orderCreateData.delivery.end_time.split(":")[1]);

          // 检测当天是否能够配送，然后判断送达时间。不在配送时间当日不能下单，例：配送时间是周一到周五，那么周末不能下单，周一到周五可以下单
          if (this.orderCreateData.delivery.canLocalDelicery) {

            // 判断是否全天
            if (!(start_hour == end_hour && start_minute == end_minute)) {

              // 当前时间早于配送时间，送达时间：开始时间~结束时间
              if (hour < start_hour || hour == start_hour && minute < start_minute) {
                this.orderCreateData.delivery.buyer_ask_delivery_time = (start_hour.toString().length == 1 ? "0" + start_hour :
                start_hour) + ':' + (
                start_minute.toString().length == 1 ? "0" + start_minute : start_minute);
              }

              // if (((hour > start_hour && hour < end_hour) || (hour == start_hour && minute > start_minute) || (hour ==
              // 		start_hour && minute >= start_minute && hour < end_hour))) {
              // }

              // 当前时间晚于配送时间，送达时间隐藏，不能下单
              if (hour > end_hour || hour == end_hour && minute > end_minute) {
                this.orderCreateData.delivery.canLocalDelicery = false;
              }
            }

          }

        } else {
          this.orderCreateData.delivery.showTimeBar = false;
          this.orderCreateData.delivery.deliveryWeek = "店铺未开启配送时间";
        }

      }

      data.shop_goods_list.goods_list.forEach(function (v) {
        if (typeof v.sku_spec_format == 'string') {
          if (v.sku_spec_format) {
            v.sku_spec_format = JSON.parse(v.sku_spec_format);
          } else {
            v.sku_spec_format = [];
          }
        }
      });

      if (this.orderPaymentData.is_virtual) this.orderCreateData.member_address = {
        mobile: '' };


      Object.assign(data, this.orderCreateData);
      this.orderCalculate();
    },
    // 转化时间字符串
    getTimeStr: function getTimeStr(val) {
      var h = parseInt(val / 3600).toString();
      var m = parseInt(val % 3600 / 60).toString();
      if (m.length == 1) {
        m = '0' + m;
      }
      if (h.length == 1) {
        h = '0' + h;
      }
      return h + ':' + m;
    },
    // 订单计算
    orderCalculate: function orderCalculate() {var _this2 = this;
      var siteId = this.orderPaymentData.shop_goods_list.site_id;

      var deliveryObj = {};
      deliveryObj[siteId] = this.orderCreateData.delivery;

      var messageObj = {};
      messageObj[siteId] = this.orderCreateData.buyer_message;

      //店铺发票
      if (this.orderPaymentData.shop_goods_list.is_invoice) {
        this.orderCreateData.invoice[siteId] = {};
        if (!Array.isArray(this.orderPaymentData.shop_goods_list.invoice_config)) {
          this.orderCreateData.invoice[siteId].is_invoice = this.orderPaymentData.shop_goods_list.is_invoice;
          this.orderCreateData.invoice[siteId].invoice_type = this.orderPaymentData.shop_goods_list.invoice_type;
          this.orderCreateData.invoice[siteId].invoice_title = this.orderPaymentData.shop_goods_list.invoice_title;
          this.orderCreateData.invoice[siteId].taxpayer_number = this.orderPaymentData.shop_goods_list.taxpayer_number;
          this.orderCreateData.invoice[siteId].invoice_content = this.orderPaymentData.shop_goods_list.invoice_content;
          this.orderCreateData.invoice[siteId].invoice_full_address = this.orderPaymentData.shop_goods_list.invoice_full_address;
          this.orderCreateData.invoice[siteId].is_tax_invoice = this.orderPaymentData.shop_goods_list.is_tax_invoice;
          this.orderCreateData.invoice[siteId].invoice_email = this.orderPaymentData.shop_goods_list.invoice_email;
          this.orderCreateData.invoice[siteId].invoice_title_type = this.orderPaymentData.shop_goods_list.invoice_title_type;
        }
      }

      var data = this.$util.deepClone(this.orderCreateData);
      data.delivery = JSON.stringify(deliveryObj);
      data.invoice = JSON.stringify(data.invoice);
      data.member_address = JSON.stringify(data.member_address);
      data.buyer_message = JSON.stringify(messageObj);

      this.$api.sendRequest({
        url: '/topic/api/ordercreate/calculate',
        data: data,
        success: function success(res) {
          if (res.code >= 0) {
            _this2.orderPaymentData.member_address = res.data.member_address;
            _this2.orderPaymentData.delivery_money = res.data.delivery_money;
            _this2.orderPaymentData.invoice_money = res.data.invoice_money;
            _this2.orderPaymentData.invoice_delivery_money = res.data.invoice_delivery_money;
            _this2.orderPaymentData.promotion_money = res.data.promotion_money;
            _this2.orderPaymentData.order_money = res.data.order_money;
            _this2.orderPaymentData.balance_money = res.data.balance_money;
            _this2.orderPaymentData.pay_money = res.data.pay_money;
            _this2.orderPaymentData.goods_money = res.data.goods_money;
            _this2.$forceUpdate();
          } else {
            _this2.$util.showToast({
              title: res.message });

          }
        } });

    },
    /**
     * 订单创建
     * @param {String} pay_password 支付密码
     */
    orderCreate: function orderCreate(pay_password) {var _this3 = this;
      if (this.verify()) {
        if (this.isSub) return;
        this.isSub = true;

        if (pay_password) this.orderCreateData.pay_password = pay_password;

        var siteId = this.orderPaymentData.shop_goods_list.site_id;

        var deliveryObj = {};
        deliveryObj[siteId] = this.orderCreateData.delivery;

        var messageObj = {};
        messageObj[siteId] = this.orderCreateData.buyer_message;

        var data = this.$util.deepClone(this.orderCreateData);
        data.delivery = JSON.stringify(deliveryObj);
        data.invoice = JSON.stringify(data.invoice);
        data.member_address = JSON.stringify(data.member_address);
        data.buyer_message = JSON.stringify(messageObj);

        this.$api.sendRequest({
          url: '/topic/api/ordercreate/create',
          data: data,
          success: function success(res) {
            uni.hideLoading();
            if (res.code >= 0) {
              if (_this3.orderPaymentData.pay_money == 0) {
                _this3.$util.redirectTo('/pages/pay/result/result', {
                  code: res.data },
                'redirectTo');
              } else {
                _this3.$refs.choosePaymentPopup.getPayInfo(res.data);
                _this3.isSub = false;
              }
              // uni.removeStorage({
              // 	key: 'topicOrderCreateData',
              // 	success: () => {}
              // });
            } else {
              _this3.isSub = false;
              if (res.data.error_code == 10 || res.data.error_code == 12) {
                uni.showModal({
                  title: '订单未创建',
                  content: res.message,
                  confirmText: '去设置',
                  success: function success(res) {
                    if (res.confirm) {
                      _this3.selectAddress();
                    }
                  } });

              } else {
                _this3.$util.showToast({
                  title: res.message });

              }
            }
          },
          fail: function fail(res) {
            uni.hideLoading();
            _this3.isSub = false;
          } });

      }
    },
    // 订单验证
    verify: function verify() {
      if (this.orderPaymentData.is_virtual == 1) {
        if (!this.orderCreateData.member_address.mobile.length) {
          this.$util.showToast({
            title: '请输入您的手机号码' });

          return false;
        }
        var reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
        if (!reg.test(this.orderCreateData.member_address.mobile)) {
          this.$util.showToast({
            title: '请输入正确的手机号码' });

          return false;
        }
      }

      if (this.orderPaymentData.is_virtual == 0) {

        var expressTypeVerify = true;

        for (var key in this.orderPaymentData.shop_goods_list) {
          if (this.orderPaymentData.shop_goods_list.express_type.length == 0) {
            expressTypeVerify = false;
            this.$util.showToast({
              title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】未设置配送方式' });

            break;
          }
        }

        if (!expressTypeVerify) return false;

        if (!this.orderPaymentData.member_address) {
          this.$util.showToast({
            title: '请先选择您的收货地址' });

          return false;
        }

        if (JSON.stringify(this.orderCreateData.delivery) == "{}") {
          this.$util.showToast({
            title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】未设置配送方式' });

          return false;
        }

        if (this.orderCreateData.delivery.delivery_type == 'store' && this.orderCreateData.delivery.store_id == 0) {
          this.$util.showToast({
            title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】没有可提货的门店,请选择其他配送方式' });

          return false;
        }

        if (this.orderCreateData.delivery.delivery_type == 'local') {

          if (this.orderCreateData.delivery.canLocalDelicery) {

            var hour = parseInt(this.orderCreateData.delivery.buyer_ask_delivery_time.split(":")[0]);
            var minute = parseInt(this.orderCreateData.delivery.buyer_ask_delivery_time.split(":")[1]);

            var start_hour = parseInt(this.orderCreateData.delivery.start_time.split(":")[0]);
            var start_minute = parseInt(this.orderCreateData.delivery.start_time.split(":")[1]);

            var end_hour = parseInt(this.orderCreateData.delivery.end_time.split(":")[0]);
            var end_minute = parseInt(this.orderCreateData.delivery.end_time.split(":")[1]);

            // 判断是否全天
            if (!(start_hour == end_hour && start_minute == end_minute)) {

              // 当前时间早于配送时间
              if (hour < start_hour || hour == start_hour && minute < start_minute) {
                this.$util.showToast({
                  title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】送达时间不能小于配送开始时间' });

                return false;
              }

              // 当前时间在配送时间内，送达时间：开始时间~结束时间
              if (!(hour > start_hour && hour < end_hour || hour == start_hour && minute > start_minute || hour ==
              start_hour && minute >= start_minute && hour < end_hour)) {
                this.$util.showToast({
                  title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】送达时间范围：开始时间~结束时间' });

                return false;
              }
            }
          } else {
            this.$util.showToast({
              title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】已休息' });

            return false;
          }

        }

      }

      return true;
    },
    // 显示店铺优惠信息
    openSitePromotion: function openSitePromotion() {
      this.$refs.sitePromotionPopup.open();
    },
    // 显示店铺配送信息
    openSiteDelivery: function openSiteDelivery() {
      this.tempData = {
        delivery: this.$util.deepClone(this.orderPaymentData.delivery) };

      this.$refs.deliveryPopup.open();
    },
    // 选择配送方式
    selectDeliveryType: function selectDeliveryType(data) {
      this.orderCreateData.delivery.delivery_type = data.name;
      this.orderCreateData.delivery.delivery_type_name = data.title;
      this.tempData = {
        delivery: this.$util.deepClone(this.orderPaymentData.delivery) };

      // 如果是门店配送
      if (data.name == 'store') {
        if (data.store_list[0] != undefined) {
          this.orderCreateData.delivery.store_id = data.store_list[0].store_id;
          this.tempData.delivery.store_id = data.store_list[0].store_id;
        }
      }
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.orderCalculate();
      this.$forceUpdate();
    },
    // 选择自提点
    selectPickupPoint: function selectPickupPoint(store_id) {
      this.orderCreateData.delivery.store_id = store_id;
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.orderCalculate();
      this.$forceUpdate();
      this.$refs['deliveryPopup'].close();
    },
    // 使用余额
    useBalance: function useBalance() {
      if (this.orderCreateData.is_balance) this.orderCreateData.is_balance = 0;else
      this.orderCreateData.is_balance = 1;
      this.orderCalculate();
      this.$forceUpdate();
    },
    imgError: function imgError(goodsIndex) {
      this.orderPaymentData.shop_goods_list.goods_list[goodsIndex].sku_image = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },
    //打开发票弹窗
    openInvoicePopup: function openInvoicePopup(val) {
      this.orderInvoice = this.$util.deepClone(val);
      this.orderInvoice.invoice_type = this.orderInvoice.invoice_type == undefined ? 1 : this.orderInvoice.invoice_type;
      this.orderInvoice.invoice_title_type = this.orderInvoice.invoice_title_type == undefined ? 1 : this.orderInvoice.invoice_title_type;
      this.orderInvoice.invoice_content = this.orderInvoice.invoice_content ? this.orderInvoice.invoice_content : '';
      this.orderInvoice.invoice_title = this.orderInvoice.invoice_title ? this.orderInvoice.invoice_title : '';
      this.orderInvoice.invoice_full_address = this.orderInvoice.invoice_full_address ? this.orderInvoice.invoice_full_address :
      ''; //邮寄地址
      this.orderInvoice.is_tax_invoice = this.orderInvoice.is_tax_invoice ? this.orderInvoice.is_tax_invoice : 0; //是否需要增值税发票
      this.orderInvoice.invoice_email = this.orderInvoice.invoice_email ? this.orderInvoice.invoice_email : ''; // 邮箱
      this.orderInvoice.taxpayer_number = this.orderInvoice.taxpayer_number ? this.orderInvoice.taxpayer_number : ''; //纳税人识别号
      this.openPopup('invoicePopup');
    },
    // 切换发票开关
    changeIsInvoice: function changeIsInvoice() {
      if (this.orderInvoice.is_invoice == 0) {
        this.orderInvoice.is_invoice = 1;
      } else {
        this.orderInvoice.is_invoice = 0;
      }
      this.$forceUpdate();
    },
    // 切换发票类型
    changeInvoiceType: function changeInvoiceType(invoice_type) {
      this.orderInvoice.invoice_type = invoice_type;
      this.$forceUpdate();
    },
    // 切换发票个人还是企业
    changeInvoiceTitleType: function changeInvoiceTitleType(invoice_title_type) {
      this.orderInvoice.invoice_title_type = invoice_title_type;
      this.$forceUpdate();
    },
    // 选择发票内容
    changeInvoiceContent: function changeInvoiceContent(invoice_content) {
      this.orderInvoice.invoice_content = invoice_content;
      this.$forceUpdate();
    },
    //关闭发票弹窗
    closeInvoicePopup: function closeInvoicePopup() {
      this.orderInvoice.invoice_type = 1; // 发票类型  1 纸质 2 电子
      this.orderInvoice.invoice_title_type = 1; // 抬头类型  1 个人 2 企业
      this.orderInvoice.invoice_content = ''; // 发票内容
      this.orderInvoice.invoice_title = ''; // 发票抬头
      this.orderInvoice.invoice_full_address = ''; // 发票邮寄地址
      this.orderInvoice.is_tax_invoice = 0; // 是否需要增值税专用发票  0 不需要 1 需要
      this.orderInvoice.invoice_email = ''; //发票邮箱
      this.orderInvoice.taxpayer_number = ''; //纳税人识别号
      this.orderCalculate();
      this.$forceUpdate();
      this.$refs.invoicePopup.close();
    },
    // 发票验证
    invoiceVerify: function invoiceVerify() {
      if (this.orderInvoice.is_invoice == 1) {
        if (this.orderInvoice.invoice_title == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写发票抬头" });

          return false;
        }
        if (this.orderInvoice.invoice_title_type == 2 && this.orderInvoice.taxpayer_number == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写纳税人识别号" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 1 && this.orderInvoice.invoice_full_address == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写发票邮寄地址" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 2 && this.orderInvoice.invoice_email == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写邮箱" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 2 && this.orderInvoice.invoice_email != '') {
          var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
          if (!reg.test(this.orderInvoice.invoice_email)) {
            this.$refs.invoicePopup.open();
            this.$util.showToast({
              title: "请填写正确的邮箱地址" });

            return false;
          }
        }
        if (this.orderInvoice.invoice_content == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请选择发票内容" });

          return false;
        }

      }
      return true;
    },
    // 保存发票信息
    saveInvoice: function saveInvoice() {
      if (this.invoiceVerify()) {
        this.orderPaymentData.shop_goods_list = this.orderInvoice;
        this.orderCalculate();
        this.closePopup('invoicePopup');
      }
    },
    bindTimeChange: function bindTimeChange(e) {
      var time = e.target.value;
      this.orderCreateData.delivery[e.currentTarget.dataset.siteid].buyer_ask_delivery_time = time;
      this.orderCalculate();
      this.$forceUpdate();
    },
    toShopDetail: function toShopDetail(e) {
      this.$util.redirectTo('/otherpages/shop/index/index', {
        site_id: e });

    },
    navigateTo: function navigateTo(sku_id) {
      this.$util.redirectTo('/pages/goods/detail/detail', {
        sku_id: sku_id });

    },
    // 显示选择支付方式弹框
    openChoosePayment: function openChoosePayment() {
      uni.setStorageSync('paySource', '');
      if (this.verify()) this.$refs.choosePaymentPopup.open();
    } },

  onShow: function onShow() {
    // 刷新多语言
    this.$langConfig.refresh();

    if (uni.getStorageSync('addressBack')) {
      uni.removeStorageSync('addressBack');
    }

    // 判断登录
    if (!uni.getStorageSync('token')) {
      this.$util.redirectTo('/pages/login/login/login');
    } else {
      this.getOrderPaymentData();
    }

    this.isIphoneX = this.$util.uniappIsIPhoneX();
  },
  onHide: function onHide() {
    if (this.$refs.loadingCover) this.$refs.loadingCover.show();
  },
  computed: {
    // 余额抵扣
    balanceDeduct: function balanceDeduct() {
      if (this.orderPaymentData.member_account.balance_total <= parseFloat(this.orderPaymentData.order_money).toFixed(2)) {
        return parseFloat(this.orderPaymentData.member_account.balance_total).toFixed(2);
      } else {
        return parseFloat(this.orderPaymentData.order_money).toFixed(2);
      }
    } },

  filters: {
    // 金额格式化输出
    moneyFormat: function moneyFormat(money) {
      return parseFloat(money).toFixed(2);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 405:
/*!**********************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/seckill/public/js/list.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      mescroll: null,
      timeList: [], //时间列表
      seckillId: null, //选中的时间块
      seckillIndex: null, //选中时间块的index
      dataList: [], //选中时间块的商品列表
      index: null, //当前正在抢购的index,
      siteId: 0,
      timer: null,
      noStartList: [],
      showEmpty: false };

  },
  watch: {
    seckillId: function seckillId(newName, oldName) {
      if (newName && oldName && newName != oldName) {
        this.mescroll.resetUpScroll(false);
      }
    } },

  computed: {
    show: function show() {
      return this.timeList.length > 0;
    } },

  methods: {
    goodsImg: function goodsImg(imgStr) {
      var imgs = imgStr.split(',');
      return imgs[0] ? this.$util.img(imgs[0], {
        size: 'mid' }) :
      this.$util.getDefaultImage().default_goods_img;
    },
    //时间转换
    transformSeckillTime: function transformSeckillTime(time) {
      time = parseFloat(time);
      var hour = parseInt(time / 3600);
      var minute = parseInt(time % 3600 / 60);
      var second = parseInt(time % 60);

      if (hour < 10) hour = '0' + hour;
      if (minute < 10) minute = '0' + minute;
      if (second < 10) second = '0' + second;

      return hour + ':' + minute;
    },
    isEnd: function isEnd(isShow) {
      if (!isShow) return;
      this.$util.showToast({
        title: "限时秒杀活动已结束" });

    },
    getTimeList: function getTimeList() {var _this = this;
      this.$api.sendRequest({
        url: '/seckill/api/seckill/lists',
        data: { site_id: this.siteId },
        success: function success(res) {
          var data = res.data;
          if (!data) return;
          var time = new Date(res.timestamp * 1000);
          var newTimes = time.getHours() * 60 * 60 + time.getMinutes() * 60 + time.getSeconds();
          var tempList = Object.values(data.list);
          tempList.forEach(function (v, k) {
            if (v.seckill_start_time <= newTimes && newTimes < v.seckill_end_time) {
              v.isNow = true;
              _this.seckillId = v.id;
              _this.index = k;
              _this.seckillIndex = k;
            } else {
              v.isNow = false;
            }
          });
          _this.timeList = data.list;

          if (tempList.length) {
            var now = Math.round(new Date() / 1000), // 当前时间戳
            start = Math.round(new Date(new Date().toLocaleDateString()).getTime() / 1000), // 当天0点时间戳
            second = now - start;
            for (var i = 0; i < data.list.length; i++) {
              if (newTimes < data.list[i].seckill_start_time && i == 0) {
                _this.seckillId = data.list[i].id;
                _this.index = i;
                _this.seckillIndex = i;
              } else if (newTimes < data.list[i].seckill_start_time && newTimes > data.list[i - 1].seckill_end_time && i !=
              0) {
                _this.seckillId = data.list[i].id;
                _this.index = i;
                _this.seckillIndex = i;
              } else if (i == data.list.length - 1 && newTimes > data.list[i].seckill_end_time) {
                _this.seckillId = data.list[i].id;
                _this.index = i;
                _this.seckillIndex = i;
              }

              if (second < tempList[i].seckill_start_time) {
                var temp = tempList[i];
                temp.index = i;
                _this.noStartList.push(temp);
              }
            }

            if (_this.noStartList.length) {
              _this.autoEvent();
            }
          }
          var self = _this;
          setInterval(function (res) {
            self.getExpirationTime();
          }, 1000);
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        } });

    },
    getData: function getData(mescroll) {var _this2 = this;
      this.mescroll = mescroll;
      if (mescroll.size == 1) {
        this.dataList = [];
      }
      this.$api.sendRequest({
        url: '/seckill/api/seckillgoods/page',
        data: {
          page_size: mescroll.size,
          page: mescroll.num,
          seckill_id: this.seckillId,
          site_id: this.siteId },

        success: function success(res) {
          _this2.showEmpty = true;
          var newArr = [];
          var msg = res.message;
          if (res.code == 0 && res.data) {
            newArr = res.data.list;
          } else {
            _this2.$util.showToast({
              title: msg });

          }
          mescroll.endSuccess(newArr.length);
          //设置列表数据
          if (mescroll.num == 1) _this2.dataList = []; //如果是第一页需手动制空列表
          _this2.dataList = _this2.dataList.concat(newArr); //追加新数据
          if (_this2.$refs.loadingCover) _this2.$refs.loadingCover.hide();
        },
        fail: function fail() {
          //联网失败的回调
          mescroll.endErr();
          if (this.$refs.loadingCover) this.$refs.loadingCover.hide();
        } });

    },
    getExpirationTime: function getExpirationTime() {
      var timeListData = this.timeList,
      currDate = new Date(),
      dateStr = currDate.toLocaleDateString(),
      expirationTime,
      nowTime,
      obj;

      for (var i in timeListData) {
        if (timeListData[i].isNow) {
          this.ident = true;
          nowTime = Date.parse(currDate);
          expirationTime = Date.parse(dateStr) + parseInt(timeListData[i].seckill_end_time) * 1000;
          var endSeconds = (expirationTime - nowTime) / 1000;
          obj = this.$util.countDown(endSeconds);
          this.hour = obj.h;
          this.minute = obj.i;
          this.second = obj.s;
          if (endSeconds == 0) {
            var next = parseInt(i) + 1;
            if (next < timeListData.length) this.index = next;
            this.timeList[i].isNow = false;
          }
          return false;
        }
      }
      this.ident = false;
    },
    ontabtap: function ontabtap(e, f) {
      this.seckillId = e;
      this.seckillIndex = f;
    },
    //跳转到详情页
    toGoodsDetail: function toGoodsDetail(id, index) {var _this3 = this;
      if (this.seckillIndex < this.index) {
        this.$util.showToast({
          title: "秒杀活动已结束！" });

        return;
      }
      if (this.seckillIndex > this.index) {
        this.$util.showToast({
          title: "秒杀活动还未开启，敬请期待！" });

        return;
      }
      this.$api.sendRequest({
        url: '/api/config/time',
        data: {},
        success: function success(res) {

          var time = new Date(res.timestamp * 1000);
          var newTimes = time.getHours() * 60 * 60 + time.getMinutes() * 60 + time.getSeconds();
          if (_this3.timeList[index].seckill_start_time <= newTimes && newTimes < _this3.timeList[index].seckill_end_time) {
            _this3.timeList[index].isNow = true;
          } else {
            _this3.timeList[index].isNow = false;
          }

          _this3.$forceUpdate();

          if (!_this3.timeList[index].isNow) {
            _this3.$util.showToast({
              title: "秒杀活动即将开启，敬请期待！" });

            return;
          }
          _this3.$util.redirectTo('/promotionpages/seckill/detail/detail', {
            seckill_id: id });


        } });

    },
    imgError: function imgError(index) {
      this.dataList[index].goods_image = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },
    autoEvent: function autoEvent() {var _this4 = this;
      this.timer = setInterval(function () {
        var now = Math.round(new Date() / 1000), // 当前时间戳
        start = Math.round(new Date(new Date().toLocaleDateString()).getTime() / 1000), // 当天0点时间戳
        second = now - start;
        for (var i = 0; i < _this4.noStartList.length; i++) {
          var item = _this4.noStartList[i];
          if (second > item.seckill_start_time && !item.isNow) {
            _this4.seckillId = item.seckill_id;
            _this4.index = item.index;
            _this4.timeList[item.index].isNow = true;
            if (_this4.timeList[item.index - 1] != undefined) {
              _this4.timeList[item.index - 1].isNow = false;
            }
            _this4.noStartList.splice(i);
          }
        }

        if (_this4.noStartList.length == 0) {
          clearInterval(_this4.timer);
        }
      }, 1000);
    },
    goodsTag: function goodsTag(data) {
      switch (data.recommend_way) {
        case 1:
          return '新品';
          break;
        case 2:
          return '精品';
          break;
        case 3:
          return '推荐';
          break;
        default:
          return '';}

    } },

  onShareAppMessage: function onShareAppMessage(res) {
    var title = '一大波的秒杀福利就要开始了，真的不来看看嘛';
    var path = '/promotionpages/seckill/list/list';
    return {
      title: title,
      path: path,
      success: function success(res) {},
      fail: function fail(res) {} };

  },
  onHide: function onHide() {
    clearInterval(this.timer);
  } };exports.default = _default;

/***/ }),

/***/ 414:
/*!************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/seckill/public/js/detail.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _htmlParser = _interopRequireDefault(__webpack_require__(/*! @/common/js/html-parser */ 206));
var _wxJssdk = __webpack_require__(/*! @/common/js/wx-jssdk.js */ 151);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _regeneratorRuntime() {"use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return exports;};var exports = {},Op = Object.prototype,hasOwn = Op.hasOwnProperty,$Symbol = "function" == typeof Symbol ? Symbol : {},iteratorSymbol = $Symbol.iterator || "@@iterator",asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];}try {define({}, "");} catch (err) {define = function define(obj, key, value) {return obj[key] = value;};}function wrap(innerFn, outerFn, self, tryLocsList) {var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,generator = Object.create(protoGenerator.prototype),context = new Context(tryLocsList || []);return generator._invoke = function (innerFn, self, context) {var state = "suspendedStart";return function (method, arg) {if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {if ("throw" === method) throw arg;return doneResult();}for (context.method = method, context.arg = arg;;) {var delegate = context.delegate;if (delegate) {var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {if (delegateResult === ContinueSentinel) continue;return delegateResult;}}if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);} else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };}"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);}};}(innerFn, self, context), generator;}function tryCatch(fn, obj, arg) {try {return { type: "normal", arg: fn.call(obj, arg) };} catch (err) {return { type: "throw", arg: err };}}exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {return this;});var getProto = Object.getPrototypeOf,NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {["next", "throw", "return"].forEach(function (method) {define(prototype, method, function (arg) {return this._invoke(method, arg);});});}function AsyncIterator(generator, PromiseImpl) {function invoke(method, arg, resolve, reject) {var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {var result = record.arg,value = result.value;return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {invoke("next", value, resolve, reject);}, function (err) {invoke("throw", err, resolve, reject);}) : PromiseImpl.resolve(value).then(function (unwrapped) {result.value = unwrapped, resolve(result);}, function (error) {return invoke("throw", error, resolve, reject);});}reject(record.arg);}var previousPromise;this._invoke = function (method, arg) {function callInvokeWithMethodAndArg() {return new PromiseImpl(function (resolve, reject) {invoke(method, arg, resolve, reject);});}return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();};}function maybeInvokeDelegate(delegate, context) {var method = delegate.iterator[context.method];if (undefined === method) {if (context.delegate = null, "throw" === context.method) {if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);}function pushTryEntry(locs) {var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);}function resetTryEntry(entry) {var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;}function Context(tryLocsList) {this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);}function values(iterable) {if (iterable) {var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {var i = -1,next = function next() {for (; ++i < iterable.length;) {if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;}return next.value = undefined, next.done = !0, next;};return next.next = next;}}return { next: doneResult };}function doneResult() {return { value: undefined, done: !0 };}return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));}, exports.mark = function (genFun) {return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;}, exports.awrap = function (arg) {return { __await: arg };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {return this;}), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {return result.done ? result.value : iter.next();});}, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {return this;}), define(Gp, "toString", function () {return "[object Generator]";}), exports.keys = function (object) {var keys = [];for (var key in object) {keys.push(key);}return keys.reverse(), function next() {for (; keys.length;) {var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;}return next.done = !0, next;};}, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);}}, stop: function stop() {this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;}, dispatchException: function dispatchException(exception) {if (this.done) throw exception;var context = this;function handle(loc, caught) {return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;}for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i],record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {var hasCatch = hasOwn.call(entry, "catchLoc"),hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);} else if (hasCatch) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);} else {if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);}}}}, abrupt: function abrupt(type, arg) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {var finallyEntry = entry;break;}}finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);}, complete: function complete(record, afterLoc) {if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;}, finish: function finish(finallyLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;}}, catch: function _catch(tryLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {var record = entry.completion;if ("throw" === record.type) {var thrown = record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield: function delegateYield(iterable, resultName, nextLoc) {return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;} }, exports;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =



{
  data: function data() {
    return {
      seckill_id: 0,
      skuId: 0,

      // 商品详情
      goodsSkuDetail: {
        goods_id: 0,
        goods_service: [] },

      // 店铺详情
      shopInfo: {
        logo: '',
        shop_baozh: 0,
        shop_qtian: 0,
        shop_zhping: 0,
        shop_erxiaoshi: 0,
        shop_tuihuo: 0,
        shop_shiyong: 0,
        shop_shiti: 0,
        shop_xiaoxie: 0 },


      cartCount: 0, // 购物车商品数量
      whetherCollection: 0,

      // 媒体,图片,视频

      // 解决每个商品SKU图片数量不同时，无法切换到第一个，导致轮播图显示不出来
      swiperInterval: 1,
      swiperAutoplay: false,
      swiperCurrent: 1,
      switchMedia: 'img',

      isIphoneX: false, //判断手机是否是iphoneX以上

      poster: "-1", //海报
      posterMsg: "", //海报错误信息
      posterHeight: 0,

      //评价
      goodsEvaluate: {
        member_headimg: '',
        member_name: '',
        content: '',
        images: [],
        create_time: 0,
        sku_name: '' },

      memberId: 0,
      contactData: {
        title: '',
        path: '',
        img: '' },

      detailTab: 0,
      service: null,
      showKefu: 0,
      // 是否可分享到好物圈
      goodsCircle: false,
      evaluateConfig: {
        evaluate_audit: 1,
        evaluate_show: 0,
        evaluate_status: 1 } };


  },
  onLoad: function onLoad(data) {var _this = this;
    this.seckill_id = data.seckill_id || 0;
    this.isIphoneX = this.$util.uniappIsIPhoneX();
    if (data.source_member) uni.setStorageSync('source_member', data.source_member);
    // 小程序扫码进入
    if (data.scene) {
      var sceneParams = decodeURIComponent(data.scene);
      sceneParams = sceneParams.split('&');
      if (sceneParams.length) {
        sceneParams.forEach(function (item) {
          if (item.indexOf('seckill_id') != -1) _this.seckill_id = item.split('-')[1];
          if (item.indexOf('source_member') != -1) uni.setStorageSync('source_member', item.split('-')[1]);
        });
      }
    }
    // this.getService();
  },
  onShow: function onShow() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {return _regeneratorRuntime().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              _this2.$store.dispatch('getAddonIsexit').then( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                          data.seckill) {_context.next = 5;break;}
                          _this2.$util.showToast({
                            title: '秒杀未开启',
                            mask: true });

                          setTimeout(function () {
                            _this2.$util.redirectTo('/pages/index/index/index', {}, 'redirectTo');
                          }, 1000);_context.next = 13;break;case 5:

                          // 刷新多语言
                          _this2.$langConfig.refresh();

                          if (uni.getStorageSync('token')) {
                            _this2.getCartCount();
                            _this2.getMemberId();
                          }
                          _this2.canGoConnect();
                          _this2.getKekuConfig();
                          //同步获取商品详情
                          _context.next = 11;return _this2.getGoodsSkuDetail();case 11:

                          //修改商品信息
                          _this2.modifyGoodsInfo();

                          // 评价设置
                          _this2.getEvaluateConfig();case 13:case "end":return _context.stop();}}}, _callee);}));return function (_x) {return _ref.apply(this, arguments);};}());case 1:case "end":return _context2.stop();}}}, _callee2);}))();



  },
  methods: {
    canGoConnect: function canGoConnect() {var _this3 = this;
      this.$api.sendRequest({
        url: "/api/addon/addonisexit",
        success: function success(res) {
          if (res.code == 0 && res.data) {
            _this3.showKefu = res.data.servicer;
          }
        } });

    },
    //联系客服
    goConnect: function goConnect() {
      if (uni.getStorageSync('token')) {
        var data = {
          site_id: this.shopInfo.site_id,
          sku_id: this.goodsSkuDetail.sku_id,
          type: 'seckill',
          type_id: this.goodsSkuDetail.seckill_id };

        this.$util.redirectTo('/otherpages/chat/room/room', data);
        return false;
      } else {
        this.$refs.login.open('/promotionpages/seckill/detail/detail?seckill_id=' + this.seckill_id);
        return;
      }
    },
    // 获取秒杀商品详情
    getGoodsSkuDetail: function getGoodsSkuDetail() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {var res, data, time, currentTime, goods_attr_format, i, j;return _regeneratorRuntime().wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  _this4.$api.sendRequest({
                    url: '/seckill/api/seckillgoods/detail',
                    async: false,
                    data: {
                      seckill_id: _this4.seckill_id } }));case 2:res = _context3.sent;


                data = res.data;
                if (data.goods_sku_detail != null) {
                  _this4.goodsSkuDetail = data.goods_sku_detail;
                  _this4.shopInfo = data.shop_info;
                  _this4.skuId = _this4.goodsSkuDetail.sku_id;

                  _this4.goodsSkuDetail.goods_service = [];
                  if (_this4.shopInfo.shop_baozh == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '保证服务',
                      desc: '保证服务' });

                  }

                  if (_this4.shopInfo.shop_qtian == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '7天退换',
                      desc: '满足7天无理由退换货申请的前提下，包邮商品需要买家承担退货邮费，非包邮商品需要买家承担发货和退货邮费' });

                  }

                  if (_this4.shopInfo.shop_zhping == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '正品保障',
                      desc: '商品支持正品保障服务' });

                  }

                  if (_this4.shopInfo.shop_erxiaoshi == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '两小时发货',
                      desc: '付款后2小时内发货' });

                  }

                  if (_this4.shopInfo.shop_tuihuo == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '退货承诺',
                      desc: '退货承诺' });

                  }

                  if (_this4.shopInfo.shop_shiyong == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '试用中心',
                      desc: '试用中心' });

                  }

                  if (_this4.shopInfo.shop_shiti == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '实体验证',
                      desc: '实体验证' });

                  }

                  if (_this4.shopInfo.shop_xiaoxie == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '消协保证',
                      desc: '如有商品质量问题、描述不符或未收到货等，您有权申请退款或退货，来回邮费由卖家承担' });

                  }

                  time = new Date(res.timestamp * 1000);
                  currentTime = time.getHours() * 60 * 60 + time.getMinutes() * 60 + time.getSeconds();
                  if (_this4.goodsSkuDetail.seckill_start_time <= currentTime && currentTime < _this4.goodsSkuDetail.seckill_end_time) {
                    _this4.goodsSkuDetail.discountTimeMachine = _this4.$util.countDown(_this4.goodsSkuDetail.seckill_end_time - currentTime);
                  } else if (_this4.goodsSkuDetail.seckill_start_time > currentTime && currentTime < _this4.goodsSkuDetail.seckill_end_time) {
                    _this4.$util.showToast({
                      title: "限时秒杀活动还未开始" });

                    setTimeout(function () {
                      _this4.$util.redirectTo('/pages/goods/detail/detail', {
                        sku_id: _this4.goodsSkuDetail.sku_id },
                      'redirectTo');
                    }, 1000);
                  } else if (currentTime < _this4.goodsSkuDetail.seckill_start_time && currentTime > _this4.goodsSkuDetail.seckill_end_time) {
                    _this4.$util.showToast({
                      title: "限时秒杀活动已结束" });

                    setTimeout(function () {
                      _this4.$util.redirectTo('/pages/goods/detail/detail', {
                        sku_id: _this4.goodsSkuDetail.sku_id },
                      'redirectTo');
                    }, 1000);
                  }

                  _this4.goodsSkuDetail.show_price = _this4.goodsSkuDetail.seckill_price;

                  //媒体
                  if (_this4.goodsSkuDetail.video_url) _this4.switchMedia = "video";

                  if (_this4.goodsSkuDetail.sku_images) _this4.goodsSkuDetail.sku_images = _this4.goodsSkuDetail.sku_images.split(",");else
                  _this4.goodsSkuDetail.sku_images = [];

                  // 多规格时合并主图
                  if (_this4.goodsSkuDetail.goods_spec_format && _this4.goodsSkuDetail.goods_image) {
                    _this4.goodsSkuDetail.goods_image = _this4.goodsSkuDetail.goods_image.split(",");
                    _this4.goodsSkuDetail.sku_images = _this4.goodsSkuDetail.sku_images.concat(_this4.goodsSkuDetail.goods_image);
                  }

                  _this4.goodsSkuDetail.unit = _this4.goodsSkuDetail.unit || "件";

                  _this4.goodsSkuDetail.save_price = _this4.goodsSkuDetail.price - _this4.goodsSkuDetail.seckill_price > 0 ? (_this4.goodsSkuDetail.
                  price - _this4.goodsSkuDetail.seckill_price).toFixed(2) : 0;

                  // 当前商品SKU规格
                  if (_this4.goodsSkuDetail.sku_spec_format) _this4.goodsSkuDetail.sku_spec_format = JSON.parse(_this4.goodsSkuDetail.sku_spec_format);

                  // 商品属性
                  if (_this4.goodsSkuDetail.goods_attr_format) {
                    goods_attr_format = JSON.parse(_this4.goodsSkuDetail.goods_attr_format);
                    _this4.goodsSkuDetail.goods_attr_format = _this4.$util.unique(goods_attr_format, "attr_id");
                    for (i = 0; i < _this4.goodsSkuDetail.goods_attr_format.length; i++) {
                      for (j = 0; j < goods_attr_format.length; j++) {
                        if (_this4.goodsSkuDetail.goods_attr_format[i].attr_id == goods_attr_format[j].attr_id && _this4.goodsSkuDetail.goods_attr_format[
                        i].attr_value_id != goods_attr_format[j].attr_value_id) {
                          _this4.goodsSkuDetail.goods_attr_format[i].attr_value_name += "、" + goods_attr_format[j].attr_value_name;
                        }
                      }
                    }
                  }

                  // 商品SKU格式
                  if (_this4.goodsSkuDetail.goods_spec_format) _this4.goodsSkuDetail.goods_spec_format = JSON.parse(_this4.goodsSkuDetail.goods_spec_format);

                  _this4.$langConfig.title(_this4.goodsSkuDetail.goods_name);

                  // 商品详情
                  // if (this.goodsSkuDetail.goods_content) this.goodsSkuDetail.goods_content = htmlParser(this.goodsSkuDetail.goods_content);

                  _this4.contactData = {
                    title: _this4.goodsSkuDetail.sku_name,
                    path: '/promotionpages/seckill/detail/detail?seckill_id=' + _this4.seckill_id,
                    img: _this4.$util.img(_this4.goodsSkuDetail.sku_image, {
                      size: 'big' }) };



                  if (uni.getStorageSync('token')) {
                    _this4.getWhetherCollection();
                  }

                  _this4.setWechatShare();

                  // if (this.$refs.goodsPromotion) this.$refs.goodsPromotion.refresh(this.goodsSkuDetail.goods_promotion);

                  if (_this4.$refs.loadingCover) _this4.$refs.loadingCover.hide();


                  _this4.getGoodScircleConfig();

                } else {
                  _this4.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
                }case 5:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    /**
     * 刷新商品详情数据
     * @param {Object} goodsSkuDetail
     */
    refreshGoodsSkuDetail: function refreshGoodsSkuDetail(goodsSkuDetail) {var _this5 = this;
      Object.assign(this.goodsSkuDetail, goodsSkuDetail);
      this.goodsSkuDetail.unit = this.goodsSkuDetail.unit || "件";
      // if (this.$refs.goodsPromotion) this.$refs.goodsPromotion.refresh(this.goodsSkuDetail.goods_promotion);

      // 解决轮播图数量不一致时，切换到第一个
      if (this.swiperCurrent > this.goodsSkuDetail.sku_images.length) {
        this.swiperAutoplay = true;
        this.swiperCurrent = 1;
        setTimeout(function () {
          _this5.swiperAutoplay = false;
        }, 40);
      }
    },
    goHome: function goHome() {
      // this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
      this.$util.redirectTo('/otherpages/shop/index/index', {
        site_id: this.shopInfo.site_id });

    },
    goCart: function goCart() {
      this.$util.redirectTo('/pages/goods/cart/cart', {}, 'reLaunch');
    },
    // 秒杀
    seckill: function seckill() {
      if (!uni.getStorageSync('token')) {
        this.$refs.login.open('/promotionpages/seckill/detail/detail?seckill_id=' + this.seckill_id);
        return;
      }
      this.$refs.goodsSku.show("seckill", function () {});
    },
    swiperChange: function swiperChange(e) {
      this.swiperCurrent = e.detail.current + 1;
    },


    //-------------------------------------服务-------------------------------------

    openMerchantsServicePopup: function openMerchantsServicePopup() {
      this.$refs.merchantsServicePopup.open();
    },
    closeMerchantsServicePopup: function closeMerchantsServicePopup() {
      this.$refs.merchantsServicePopup.close();
    },



    //-------------------------------------属性-------------------------------------

    openAttributePopup: function openAttributePopup() {
      this.$refs.attributePopup.open();
    },
    closeAttributePopup: function closeAttributePopup() {
      this.$refs.attributePopup.close();
    },

    //-------------------------------------属性-------------------------------------



    //-------------------------------------评价-------------------------------------
    //商品评论列表
    getGoodsEvaluate: function getGoodsEvaluate() {var _this6 = this;
      this.$api.sendRequest({
        url: "/api/goodsevaluate/firstinfo",
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          var data = res.data;
          if (data) {
            _this6.goodsEvaluate = data;
            if (_this6.goodsEvaluate.images) _this6.goodsEvaluate.images = _this6.goodsEvaluate.images.split(",");
            if (_this6.goodsEvaluate.is_anonymous == 1) _this6.goodsEvaluate.member_name = _this6.goodsEvaluate.member_name.replace(
            _this6.goodsEvaluate.member_name.substring(1, _this6.goodsEvaluate.member_name.length - 1), '***');
          }
        } });

    },

    // 预览评价图片
    previewEvaluate: function previewEvaluate(index, field) {
      var paths = [];
      for (var i = 0; i < this.goodsEvaluate[field].length; i++) {
        paths.push(this.$util.img(this.goodsEvaluate[field][i]));
      }
      uni.previewImage({
        current: index,
        urls: paths });

    },


    //-------------------------------------关注-------------------------------------

    //获取用户是否关注
    getWhetherCollection: function getWhetherCollection() {var _this7 = this;
      this.$api.sendRequest({
        url: "/api/goodscollect/iscollect",
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          _this7.whetherCollection = res.data;
        } });

    },

    editCollection: function editCollection() {var _this8 = this;
      if (uni.getStorageSync('token')) {

        //未关注添加关注
        if (this.whetherCollection == 0) {
          this.$api.sendRequest({
            url: "/api/goodscollect/add",
            data: {
              sku_id: this.skuId },

            success: function success(res) {
              var data = res.data;
              if (data > 0) {
                _this8.whetherCollection = 1;
              }
            } });

        } else {
          //已关注取消关注
          this.$api.sendRequest({
            url: "/api/goodscollect/delete",
            data: {
              goods_id: this.goodsSkuDetail.goods_id },

            success: function success(res) {
              var data = res.data;
              if (data > 0) {
                _this8.whetherCollection = 0;
              }
            } });

        }
      } else {
        this.$refs.login.open('/promotionpages/seckill/detail/detail?seckill_id=' + this.seckill_id);
      }
    },
    //获取购物车数量
    getCartCount: function getCartCount() {var _this9 = this;
      this.$store.dispatch('getCartNumber').then(function (e) {
        _this9.cartCount = e;
      });
    },
    //更新商品信息
    modifyGoodsInfo: function modifyGoodsInfo() {
      //更新商品点击量
      this.$api.sendRequest({
        url: "/api/goods/modifyclicks",
        data: {
          sku_id: this.skuId,
          site_id: this.goodsSkuDetail.site_id },

        success: function success(res) {} });


      //添加足迹
      this.$api.sendRequest({
        url: "/api/goodsbrowse/add",
        data: {
          sku_id: this.skuId },

        success: function success(res) {} });

    },


    //-------------------------------------分享-------------------------------------
    // 打开分享弹出层
    openSharePopup: function openSharePopup() {
      this.$refs.sharePopup.open();
    },
    // 关闭分享弹出层
    closeSharePopup: function closeSharePopup() {
      this.$refs.sharePopup.close();
    },
    //-------------------------------------海报-------------------------------------

    // 打开海报弹出层
    openPosterPopup: function openPosterPopup() {var _this10 = this;
      this.getGoodsPoster();
      this.$refs.sharePopup.close();
      this.$refs.posterPopup.open();
      if (this.poster != '-1') {
        setTimeout(function () {
          var view = uni.createSelectorQuery().in(_this10).select(".poster-layer .image-wrap");
          view.fields({
            size: true },
          function (data) {
            var posterWhith = data.width;
            var ratio = parseFloat((740 / posterWhith).toFixed(2));
            if (uni.getStorageSync('token')) {
              _this10.posterHeight = parseInt(1240 / ratio);
            } else {
              _this10.posterHeight = parseInt(1100 / ratio);
            }
          }).exec();
        }, 100);
      }
    },
    // 关闭海报弹出层
    closePosterPopup: function closePosterPopup() {
      this.$refs.posterPopup.close();
    },
    //生成海报
    getGoodsPoster: function getGoodsPoster() {var _this11 = this;
      //活动海报信息
      var qrcode_param = {
        id: this.goodsSkuDetail.goods_id };

      if (this.memberId) qrcode_param.source_member = this.memberId;
      this.$api.sendRequest({
        url: "/seckill/api/seckillgoods/poster",
        data: {
          page: '/promotionpages/seckill/detail/detail',
          qrcode_param: JSON.stringify(qrcode_param) },

        success: function success(res) {
          if (res.code == 0) {
            _this11.poster = res.data.path + "?time=" + new Date().getTime();
          } else {
            _this11.posterMsg = res.message;
          }
        } });

    },
    // 预览图片
    previewMedia: function previewMedia(index) {
      var paths = [];
      for (var i = 0; i < this.goodsSkuDetail.sku_images.length; i++) {
        paths.push(this.$util.img(this.goodsSkuDetail.sku_images[i], {
          size: 'big' }));

      }
      uni.previewImage({
        current: index,
        urls: paths });

    },
    swiperImgError: function swiperImgError(index) {
      this.goodsSkuDetail.sku_images[index] = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },

    //小程序中保存海报
    saveGoodsPoster: function saveGoodsPoster() {var _this12 = this;
      var url = this.$util.img(this.poster);
      uni.downloadFile({
        url: url,
        success: function success(res) {
          if (res.statusCode === 200) {
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function success() {
                _this12.$util.showToast({
                  title: "保存成功" });

              },
              fail: function fail() {
                _this12.$util.showToast({
                  title: "保存失败，请稍后重试" });

              } });

          }
        } });

    },

    getMemberId: function getMemberId() {var _this13 = this;
      this.$api.sendRequest({
        url: "/api/member/id",
        success: function success(res) {
          if (res.code >= 0) {
            _this13.memberId = res.data;
          }
        } });

    },
    //售后保障查询
    getService: function getService() {var _this14 = this;
      this.$api.sendRequest({
        url: '/api/goods/aftersale',
        success: function success(res) {
          if (res.code == 0 && res.data) {
            var data = res.data.content;
            if (res.data.content) _this14.service = (0, _htmlParser.default)(res.data.content);
          }
        } });

    },
    /**
     * 设置微信公众号分享
     */
    setWechatShare: function setWechatShare() {
      // 微信公众号分享






























    },

    /**
     *	获取是否开启微信圈子 
     */
    getGoodScircleConfig: function getGoodScircleConfig() {var _this15 = this;
      this.$api.sendRequest({
        url: '/goodscircle/api/config/info',
        success: function success(res) {
          if (res.code == 0) {
            if (res.data.is_use) {
              _this15.goodsSyncToGoodsCircle();
            }
          }
        } });

    },
    /**
     *	将商品同步到微信圈子 
     */
    goodsSyncToGoodsCircle: function goodsSyncToGoodsCircle() {var _this16 = this;
      this.$api.sendRequest({
        url: '/goodscircle/api/goods/sync',
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          if (res.code == 0) {
            _this16.goodsCircle = true;
          }
        } });

    },
    /**
     * 将商品推荐到微信圈子
     */
    openBusinessView: function openBusinessView() {var _this17 = this;
      if (wx.openBusinessView) {
        wx.openBusinessView({
          businessType: 'friendGoodsRecommend',
          extraData: {
            product: {
              item_code: this.goodsSkuDetail.goods_id,
              title: this.goodsSkuDetail.sku_name,
              image_list: this.goodsSkuDetail.sku_images.map(function (ele) {
                return _this17.$util.img(ele);
              }) } },


          success: function success(res) {
            console.log('success', res);
          },
          fail: function fail(res) {
            console.log('fail', res);
          } });

      }
    },

    getEvaluateConfig: function getEvaluateConfig() {var _this18 = this;
      this.$api.sendRequest({
        url: '/api/goodsevaluate/config',
        success: function success(res) {
          if (res.code == 0) {
            var data = res.data;
            _this18.evaluateConfig = data;
            if (_this18.evaluateConfig.evaluate_show == 1) {
              //商品评论
              _this18.getGoodsEvaluate();
            }
          }
        } });

    },
    copyUrl: function copyUrl() {var _this19 = this;
      var text = this.$config.h5Domain + '/promotionpages/seckill/detail/detail?seckill_id=' + this.seckill_id;
      if (this.memberId) text += '&source_member=' + this.memberId;
      this.$util.copy(text, function () {
        _this19.closeSharePopup();
      });
    },
    getKekuConfig: function getKekuConfig() {var _this20 = this;
      this.$api.sendRequest({
        url: '/api/config/servicer',
        success: function success(res) {
          if (res.code == 0) {
            _this20.kefuConfig = res.data;
          }
        } });

    },
    toEvaluateDetail: function toEvaluateDetail(id) {
      this.$util.redirectTo('/otherpages/goods/evaluate/evaluate', {
        goods_id: id });

    },
    navigate: function navigate(href, e) {
      //比如点击a标签，打开某个webview并传输url
      this.$util.redirectTo('/otherpages/webview/webview', {
        link: encodeURIComponent(href) });

    },
    //h5播放视频
    openVideo: function openVideo(url, video_img) {
      // this.$refs.videoPopup.open();
      this.$util.redirectTo('/otherpages/goods/preview-video', {
        video_url: url,
        video_img: video_img });

    },
    errorShopLogo: function errorShopLogo() {
      this.shopInfo.avatar = this.$util.getDefaultImage().default_shop_img;
      this.$forceUpdate();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 425:
/*!*************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/seckill/public/js/payment.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      isIphoneX: false,
      orderCreateData: {
        is_balance: 0,
        pay_password: '' },

      orderPaymentData: {
        member_account: {
          balance: 0,
          is_pay_password: 0 },

        shop_goods_list: {
          site_name: '',
          express_type: [],
          invoice_config: {
            invoice_status: 0 } },


        seckill_info: {
          name: '' } },


      orderInvoice: {
        is_invoice: 0, //是否需要发票
        invoice_type: 1, //发票类型电子、纸质
        invoice_title: '', //发票抬头
        invoice_title_type: 1, // 抬头类型
        invoice_full_address: '', //邮寄地址
        is_tax_invoice: 0, //是否需要增值税发票
        invoice_email: '', // 邮箱
        invoice_content: '', //发票内容
        taxpayer_number: '' //纳税人识别号
      },
      isSub: false,
      tempData: null,
      siteDelivery: {
        site_id: 0,
        data: [] } };


  },
  methods: {
    // 显示弹出层
    openPopup: function openPopup(ref) {
      this.$refs[ref].open();
    },
    // 关闭弹出层
    closePopup: function closePopup(ref) {
      if (this.tempData) {
        Object.assign(this.orderCreateData, this.tempData);
        Object.assign(this.orderPaymentData, this.tempData);
        this.tempData = null;
        this.$forceUpdate();
      }
      this.$refs[ref].close();
    },
    // 选择收货地址，默认有定位
    selectAddress: function selectAddress() {
      var params = {
        back: '/promotionpages/seckill/payment/payment',
        local: 0,
        type: 1 };

      // 外卖配送需要定位地址
      // if (this.orderPaymentData.delivery.delivery_type == 'local') {
      // 	params.local = 1;
      // 	params.type = 2;
      // }
      this.$util.redirectTo('/otherpages/member/address/address', params);
    },
    // 获取订单初始化数据
    getOrderPaymentData: function getOrderPaymentData() {var _this = this;
      this.orderCreateData = uni.getStorageSync('seckillOrderCreateData');
      var pay_flag = uni.getStorageSync("pay_flag"); // 支付中标识，防止返回时，提示,跳转错误
      if (!this.orderCreateData) {
        if (pay_flag == 1) {
          uni.removeStorageSync("pay_flag");
        } else {
          this.$util.showToast({
            title: '未获取到创建订单所需数据！' });

          setTimeout(function () {
            _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }, 1000);
        }
        return;
      }

      // 获取经纬度
      var location = uni.getStorageSync('location');
      if (location) {
        this.orderCreateData = Object.assign(this.orderCreateData, location);
      }

      this.orderCreateData.buyer_message = '';

      this.$api.sendRequest({
        url: '/seckill/api/ordercreate/payment',
        data: this.orderCreateData,
        success: function success(res) {
          if (res.code >= 0) {
            _this.orderPaymentData = res.data;
            _this.orderPaymentData.timestamp = res.timestamp;
            _this.handlePaymentData();
            if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
          } else {
            _this.$util.showToast({
              title: '未获取到创建订单所需数据！' });

            setTimeout(function () {
              _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
            }, 1000);
          }
        },
        fail: function fail(res) {
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        } });

    },
    // 处理结算订单数据
    handlePaymentData: function handlePaymentData() {
      this.orderCreateData.delivery = {};
      this.orderCreateData.invoice = {};
      this.orderCreateData.is_balance = 0;
      this.orderCreateData.pay_password = '';

      var data = this.orderPaymentData;

      var h = new Date().getHours().toString();
      var m = new Date().getMinutes().toString();
      if (h.length == 1) {
        h = '0' + h;
      }
      if (m.length == 1) {
        m = '0' + m;
      }
      var nowTime = h + ':' + m;
      var weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

      // 获取时间，必须是字符串,跟后端一致
      var index_weeks = ['0', '1', '2', '3', '4', '5', '6'];
      var curr_week = index_weeks[new Date().getDay()];

      if (data.shop_goods_list.express_type != undefined && data.shop_goods_list.express_type[0] != undefined) {
        var express_type = data.shop_goods_list.express_type;
        this.orderCreateData.delivery.delivery_type = express_type[0].name;
        this.orderCreateData.delivery.delivery_type_name = express_type[0].title;
        this.orderCreateData.delivery.store_id = 0;

        // 如果默认配送方式是门店配送
        if (express_type[0].name == 'store') {
          if (express_type[0].store_list[0] != undefined) {
            this.orderCreateData.delivery.store_id = express_type[0].store_list[0].store_id;
          }
        }
      }

      if (data.is_virtual == 0 && data.shop_goods_list.local_config) {

        // 是否显示时间选择
        if (data.shop_goods_list.local_config.info && data.shop_goods_list.local_config.info.time_is_open == 1) {
          this.orderCreateData.delivery.showTimeBar = true;
          this.orderCreateData.delivery.buyer_ask_delivery_time = nowTime;
          // 当日是否支持配送
          if (data.shop_goods_list.local_config.info.time_week.length == 0 ||
          data.shop_goods_list.local_config.info.time_week.length == 7 ||
          data.shop_goods_list.local_config.info.time_week.indexOf(curr_week) > -1) {
            this.orderCreateData.delivery.canLocalDelicery = true;
          } else {
            this.orderCreateData.delivery.canLocalDelicery = false;
          }

          if (data.shop_goods_list.local_config.info.time_type == 0) {
            this.orderCreateData.delivery.deliveryWeek = "全天";
          } else if (data.shop_goods_list.local_config.info.time_week.length > 0) {
            if (data.shop_goods_list.local_config.info.time_week.length == 7) {
              this.orderCreateData.delivery.deliveryWeek = "全天";
              this.orderCreateData.delivery.showTime = false;
            } else {
              this.orderCreateData.delivery.showTime = true;
              // 判断配送时间是连续还是间隔
              var timeWeek = data.shop_goods_list.local_config.info.time_week;
              var is_interval = false; // 是否间隔
              for (var i = 0; i < timeWeek.length; i++) {
                if (i + 1 < timeWeek.length) {
                  var difference = timeWeek[i + 1] - timeWeek[i];
                  if (difference > 1) {
                    is_interval = true;
                    break;
                  }
                }
              }

              if (is_interval) {
                var temp = [];
                for (var i = 0; i < timeWeek.length; i++) {
                  temp.push(weeks[timeWeek[i]]);
                }
                this.orderCreateData.delivery.deliveryWeek = temp.join("、");
              } else {
                this.orderCreateData.delivery.deliveryWeek = weeks[timeWeek[0]] + "至" + weeks[timeWeek[timeWeek.length -
                1]];
              }
            }
          } else {
            this.orderCreateData.delivery.deliveryWeek = "店铺未设置配送时间";
          }

          // picker组件时间起始
          var start_time = data.shop_goods_list.local_config.info.start_time;
          this.orderCreateData.delivery.start_time = this.getTimeStr(start_time);

          var end_time = data.shop_goods_list.local_config.info.end_time;
          this.orderCreateData.delivery.end_time = this.getTimeStr(end_time);

          var current_time = new Date(this.$util.timeStampTurnTime(data.timestamp));
          var hour = current_time.getHours();
          var minute = current_time.getMinutes();

          var start_hour = parseInt(this.orderCreateData.delivery.start_time.split(":")[0]);
          var start_minute = parseInt(this.orderCreateData.delivery.start_time.split(":")[1]);

          var end_hour = parseInt(this.orderCreateData.delivery.end_time.split(":")[0]);
          var end_minute = parseInt(this.orderCreateData.delivery.end_time.split(":")[1]);

          // 检测当天是否能够配送，然后判断送达时间。不在配送时间当日不能下单，例：配送时间是周一到周五，那么周末不能下单，周一到周五可以下单
          if (this.orderCreateData.delivery.canLocalDelicery) {

            // 判断是否全天
            if (!(start_hour == end_hour && start_minute == end_minute)) {

              // 当前时间早于配送时间，送达时间：开始时间~结束时间
              if (hour < start_hour || hour == start_hour && minute < start_minute) {
                this.orderCreateData.delivery.buyer_ask_delivery_time = (start_hour.toString().length == 1 ? "0" + start_hour :
                start_hour) + ':' + (
                start_minute.toString().length == 1 ? "0" + start_minute : start_minute);
              }

              // if (((hour > start_hour && hour < end_hour) || (hour == start_hour && minute > start_minute) || (hour ==
              // 		start_hour && minute >= start_minute && hour < end_hour))) {
              // }

              // 当前时间晚于配送时间，送达时间隐藏，不能下单
              if (hour > end_hour || hour == end_hour && minute > end_minute) {
                this.orderCreateData.delivery.canLocalDelicery = false;
              }
            }

          }

        } else {
          this.orderCreateData.delivery.showTimeBar = false;
          this.orderCreateData.delivery.deliveryWeek = "店铺未开启配送时间";
        }

      }

      data.shop_goods_list.goods_list.forEach(function (v) {
        if (typeof v.sku_spec_format == 'string') {
          if (v.sku_spec_format) {
            v.sku_spec_format = JSON.parse(v.sku_spec_format);
          } else {
            v.sku_spec_format = [];
          }
        }
      });

      if (this.orderPaymentData.is_virtual) this.orderCreateData.member_address = {
        mobile: '' };


      Object.assign(data, this.orderCreateData);
      this.orderCalculate();
    },
    // 转化时间字符串
    getTimeStr: function getTimeStr(val) {
      var h = parseInt(val / 3600).toString();
      var m = parseInt(val % 3600 / 60).toString();
      if (m.length == 1) {
        m = '0' + m;
      }
      if (h.length == 1) {
        h = '0' + h;
      }
      return h + ':' + m;
    },
    // 订单计算
    orderCalculate: function orderCalculate() {var _this2 = this;
      var siteId = this.orderPaymentData.shop_goods_list.site_id;

      var deliveryObj = {};
      deliveryObj[siteId] = this.orderCreateData.delivery;

      var messageObj = {};
      messageObj[siteId] = this.orderCreateData.buyer_message;

      //店铺发票
      if (this.orderPaymentData.shop_goods_list.is_invoice) {
        this.orderCreateData.invoice[siteId] = {};
        if (!Array.isArray(this.orderPaymentData.shop_goods_list.invoice_config)) {
          this.orderCreateData.invoice[siteId].is_invoice = this.orderPaymentData.shop_goods_list.is_invoice;
          this.orderCreateData.invoice[siteId].invoice_type = this.orderPaymentData.shop_goods_list.invoice_type;
          this.orderCreateData.invoice[siteId].invoice_title = this.orderPaymentData.shop_goods_list.invoice_title;
          this.orderCreateData.invoice[siteId].taxpayer_number = this.orderPaymentData.shop_goods_list.taxpayer_number;
          this.orderCreateData.invoice[siteId].invoice_content = this.orderPaymentData.shop_goods_list.invoice_content;
          this.orderCreateData.invoice[siteId].invoice_full_address = this.orderPaymentData.shop_goods_list.invoice_full_address;
          this.orderCreateData.invoice[siteId].is_tax_invoice = this.orderPaymentData.shop_goods_list.is_tax_invoice;
          this.orderCreateData.invoice[siteId].invoice_email = this.orderPaymentData.shop_goods_list.invoice_email;
          this.orderCreateData.invoice[siteId].invoice_title_type = this.orderPaymentData.shop_goods_list.invoice_title_type;
        }
      }

      var data = this.$util.deepClone(this.orderCreateData);
      data.delivery = JSON.stringify(deliveryObj);
      data.invoice = JSON.stringify(data.invoice);
      data.member_address = JSON.stringify(data.member_address);
      data.buyer_message = JSON.stringify(messageObj);

      this.$api.sendRequest({
        url: '/seckill/api/ordercreate/calculate',
        data: data,
        success: function success(res) {
          if (res.code >= 0) {
            _this2.orderPaymentData.member_address = res.data.member_address;
            _this2.orderPaymentData.delivery_money = res.data.delivery_money;
            _this2.orderPaymentData.invoice_money = res.data.invoice_money;
            _this2.orderPaymentData.invoice_delivery_money = res.data.invoice_delivery_money;
            _this2.orderPaymentData.promotion_money = res.data.promotion_money;
            _this2.orderPaymentData.order_money = res.data.order_money;
            _this2.orderPaymentData.balance_money = res.data.balance_money;
            _this2.orderPaymentData.pay_money = res.data.pay_money;
            _this2.orderPaymentData.goods_money = res.data.goods_money;
            _this2.$forceUpdate();
          } else {
            _this2.$util.showToast({
              title: res.message });

          }
        } });

    },
    /**
     * 订单创建
     * @param {String} pay_password 支付密码
     */
    orderCreate: function orderCreate(pay_password) {var _this3 = this;
      if (this.verify()) {
        if (this.isSub) return;
        this.isSub = true;

        if (pay_password) this.orderCreateData.pay_password = pay_password;

        var siteId = this.orderPaymentData.shop_goods_list.site_id;

        var deliveryObj = {};
        deliveryObj[siteId] = this.orderCreateData.delivery;

        var messageObj = {};
        messageObj[siteId] = this.orderCreateData.buyer_message;

        var data = this.$util.deepClone(this.orderCreateData);
        data.delivery = JSON.stringify(deliveryObj);
        data.invoice = JSON.stringify(data.invoice);
        data.member_address = JSON.stringify(data.member_address);
        data.buyer_message = JSON.stringify(messageObj);

        this.$api.sendRequest({
          url: '/seckill/api/ordercreate/create',
          data: data,
          success: function success(res) {
            uni.hideLoading();
            if (res.code >= 0) {
              if (_this3.orderPaymentData.pay_money == 0) {
                _this3.$util.redirectTo('/pages/pay/result/result', {
                  code: res.data },
                'redirectTo');
              } else {
                _this3.$refs.choosePaymentPopup.getPayInfo(res.data);
                _this3.isSub = false;
              }
              // uni.removeStorage({
              // 	key: 'seckillOrderCreateData',
              // 	success: () => {}
              // });
            } else {
              _this3.isSub = false;
              if (res.data.error_code == 10 || res.data.error_code == 12) {
                uni.showModal({
                  title: '订单未创建',
                  content: res.message,
                  confirmText: '去设置',
                  success: function success(res) {
                    if (res.confirm) {
                      _this3.selectAddress();
                    }
                  } });

              } else {
                _this3.$util.showToast({
                  title: res.message });

              }
            }
          },
          fail: function fail(res) {
            uni.hideLoading();
            _this3.isSub = false;
          } });

      }
    },
    // 订单验证
    verify: function verify() {
      if (this.orderPaymentData.is_virtual == 1) {
        if (!this.orderCreateData.member_address.mobile.length) {
          this.$util.showToast({
            title: '请输入您的手机号码' });

          return false;
        }
        var reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
        if (!reg.test(this.orderCreateData.member_address.mobile)) {
          this.$util.showToast({
            title: '请输入正确的手机号码' });

          return false;
        }
      }

      if (this.orderPaymentData.is_virtual == 0) {

        var expressTypeVerify = true;

        for (var key in this.orderPaymentData.shop_goods_list) {
          if (this.orderPaymentData.shop_goods_list.express_type.length == 0) {
            expressTypeVerify = false;
            this.$util.showToast({
              title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】未设置配送方式' });

            break;
          }
        }

        if (!expressTypeVerify) return false;

        if (!this.orderPaymentData.member_address) {
          this.$util.showToast({
            title: '请先选择您的收货地址' });

          return false;
        }

        if (JSON.stringify(this.orderCreateData.delivery) == "{}") {
          this.$util.showToast({
            title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】未设置配送方式' });

          return false;
        }

        if (this.orderCreateData.delivery.delivery_type == 'store' && this.orderCreateData.delivery.store_id == 0) {
          this.$util.showToast({
            title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】没有可提货的门店,请选择其他配送方式' });

          return false;
        }

        if (this.orderCreateData.delivery.delivery_type == 'local') {

          if (this.orderCreateData.delivery.canLocalDelicery) {

            var hour = parseInt(this.orderCreateData.delivery.buyer_ask_delivery_time.split(":")[0]);
            var minute = parseInt(this.orderCreateData.delivery.buyer_ask_delivery_time.split(":")[1]);

            var start_hour = parseInt(this.orderCreateData.delivery.start_time.split(":")[0]);
            var start_minute = parseInt(this.orderCreateData.delivery.start_time.split(":")[1]);

            var end_hour = parseInt(this.orderCreateData.delivery.end_time.split(":")[0]);
            var end_minute = parseInt(this.orderCreateData.delivery.end_time.split(":")[1]);

            // 判断是否全天
            if (!(start_hour == end_hour && start_minute == end_minute)) {

              // 当前时间早于配送时间
              if (hour < start_hour || hour == start_hour && minute < start_minute) {
                this.$util.showToast({
                  title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】送达时间不能小于配送开始时间' });

                return false;
              }

              // 当前时间在配送时间内，送达时间：开始时间~结束时间
              if (!(hour > start_hour && hour < end_hour || hour == start_hour && minute > start_minute || hour ==
              start_hour && minute >= start_minute && hour < end_hour)) {
                this.$util.showToast({
                  title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】送达时间范围：开始时间~结束时间' });

                return false;
              }
            }
          } else {
            this.$util.showToast({
              title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】已休息' });

            return false;
          }

        }

      }

      return true;
    },
    // 显示店铺优惠信息
    openSitePromotion: function openSitePromotion() {
      this.$refs.sitePromotionPopup.open();
    },
    // 显示店铺配送信息
    openSiteDelivery: function openSiteDelivery() {
      this.tempData = {
        delivery: this.$util.deepClone(this.orderPaymentData.delivery) };

      this.$refs.deliveryPopup.open();
    },
    // 选择配送方式
    selectDeliveryType: function selectDeliveryType(data) {
      this.orderCreateData.delivery.delivery_type = data.name;
      this.orderCreateData.delivery.delivery_type_name = data.title;
      this.tempData = {
        delivery: this.$util.deepClone(this.orderPaymentData.delivery) };

      // 如果是门店配送
      if (data.name == 'store') {
        if (data.store_list[0] != undefined) {
          this.orderCreateData.delivery.store_id = data.store_list[0].store_id;
          this.tempData.delivery.store_id = data.store_list[0].store_id;
        }
      }
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.orderCalculate();
      this.$forceUpdate();
    },
    // 选择自提点
    selectPickupPoint: function selectPickupPoint(store_id) {
      this.orderCreateData.delivery.store_id = store_id;
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.orderCalculate();
      this.$forceUpdate();
      this.$refs['deliveryPopup'].close();
    },
    // 使用余额
    useBalance: function useBalance() {
      if (this.orderCreateData.is_balance) this.orderCreateData.is_balance = 0;else
      this.orderCreateData.is_balance = 1;
      this.orderCalculate();
      this.$forceUpdate();
    },
    imgError: function imgError(goodsIndex) {
      this.orderPaymentData.shop_goods_list.goods_list[goodsIndex].sku_image = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },
    //打开发票弹窗
    openInvoicePopup: function openInvoicePopup(val) {
      this.orderInvoice = this.$util.deepClone(val);
      this.orderInvoice.invoice_type = this.orderInvoice.invoice_type == undefined ? 1 : this.orderInvoice.invoice_type;
      this.orderInvoice.invoice_title_type = this.orderInvoice.invoice_title_type == undefined ? 1 : this.orderInvoice.invoice_title_type;
      this.orderInvoice.invoice_content = this.orderInvoice.invoice_content ? this.orderInvoice.invoice_content : '';
      this.orderInvoice.invoice_title = this.orderInvoice.invoice_title ? this.orderInvoice.invoice_title : '';
      this.orderInvoice.invoice_full_address = this.orderInvoice.invoice_full_address ? this.orderInvoice.invoice_full_address :
      ''; //邮寄地址
      this.orderInvoice.is_tax_invoice = this.orderInvoice.is_tax_invoice ? this.orderInvoice.is_tax_invoice : 0; //是否需要增值税发票
      this.orderInvoice.invoice_email = this.orderInvoice.invoice_email ? this.orderInvoice.invoice_email : ''; // 邮箱
      this.orderInvoice.taxpayer_number = this.orderInvoice.taxpayer_number ? this.orderInvoice.taxpayer_number : ''; //纳税人识别号
      this.openPopup('invoicePopup');
    },
    // 切换发票开关
    changeIsInvoice: function changeIsInvoice() {
      if (this.orderInvoice.is_invoice == 0) {
        this.orderInvoice.is_invoice = 1;
      } else {
        this.orderInvoice.is_invoice = 0;
      }
      this.$forceUpdate();
    },
    // 切换发票类型
    changeInvoiceType: function changeInvoiceType(invoice_type) {
      this.orderInvoice.invoice_type = invoice_type;
      this.$forceUpdate();
    },
    // 切换发票个人还是企业
    changeInvoiceTitleType: function changeInvoiceTitleType(invoice_title_type) {
      this.orderInvoice.invoice_title_type = invoice_title_type;
      this.$forceUpdate();
    },
    // 选择发票内容
    changeInvoiceContent: function changeInvoiceContent(invoice_content) {
      this.orderInvoice.invoice_content = invoice_content;
      this.$forceUpdate();
    },
    //关闭发票弹窗
    closeInvoicePopup: function closeInvoicePopup() {
      this.orderInvoice.invoice_type = 1; // 发票类型  1 纸质 2 电子
      this.orderInvoice.invoice_title_type = 1; // 抬头类型  1 个人 2 企业
      this.orderInvoice.invoice_content = ''; // 发票内容
      this.orderInvoice.invoice_title = ''; // 发票抬头
      this.orderInvoice.invoice_full_address = ''; // 发票邮寄地址
      this.orderInvoice.is_tax_invoice = 0; // 是否需要增值税专用发票  0 不需要 1 需要
      this.orderInvoice.invoice_email = ''; //发票邮箱
      this.orderInvoice.taxpayer_number = ''; //纳税人识别号
      this.orderCalculate();
      this.$forceUpdate();
      this.$refs.invoicePopup.close();
    },
    // 发票验证
    invoiceVerify: function invoiceVerify() {
      if (this.orderInvoice.is_invoice == 1) {
        if (this.orderInvoice.invoice_title == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写发票抬头" });

          return false;
        }
        if (this.orderInvoice.invoice_title_type == 2 && this.orderInvoice.taxpayer_number == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写纳税人识别号" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 1 && this.orderInvoice.invoice_full_address == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写发票邮寄地址" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 2 && this.orderInvoice.invoice_email == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写邮箱" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 2 && this.orderInvoice.invoice_email != '') {
          var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
          if (!reg.test(this.orderInvoice.invoice_email)) {
            this.$refs.invoicePopup.open();
            this.$util.showToast({
              title: "请填写正确的邮箱地址" });

            return false;
          }
        }
        if (this.orderInvoice.invoice_content == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请选择发票内容" });

          return false;
        }

      }
      return true;
    },
    // 保存发票信息
    saveInvoice: function saveInvoice() {
      if (this.invoiceVerify()) {
        this.orderPaymentData.shop_goods_list = this.orderInvoice;
        this.orderCalculate();
        this.closePopup('invoicePopup');
      }
    },
    bindTimeChange: function bindTimeChange(e) {
      var time = e.target.value;
      this.orderCreateData.delivery[e.currentTarget.dataset.siteid].buyer_ask_delivery_time = time;
      this.orderCalculate();
      this.$forceUpdate();
    },
    toShopDetail: function toShopDetail(e) {
      this.$util.redirectTo('/otherpages/shop/index/index', {
        site_id: e });

    },
    navigateTo: function navigateTo(sku_id) {
      this.$util.redirectTo('/pages/goods/detail/detail', {
        sku_id: sku_id });

    },
    // 显示选择支付方式弹框
    openChoosePayment: function openChoosePayment() {
      uni.setStorageSync('paySource', '');
      if (this.verify()) this.$refs.choosePaymentPopup.open();
    } },

  onShow: function onShow() {
    // 刷新多语言
    this.$langConfig.refresh();

    if (uni.getStorageSync('addressBack')) {
      uni.removeStorageSync('addressBack');
    }

    // 判断登录
    if (!uni.getStorageSync('token')) {
      this.$util.redirectTo('/pages/login/login/login');
    } else {
      this.getOrderPaymentData();
    }

    this.isIphoneX = this.$util.uniappIsIPhoneX();
  },
  onHide: function onHide() {
    if (this.$refs.loadingCover) this.$refs.loadingCover.show();
  },
  computed: {
    // 余额抵扣
    balanceDeduct: function balanceDeduct() {
      if (this.orderPaymentData.member_account.balance_total <= parseFloat(this.orderPaymentData.order_money).toFixed(2)) {
        return parseFloat(this.orderPaymentData.member_account.balance_total).toFixed(2);
      } else {
        return parseFloat(this.orderPaymentData.order_money).toFixed(2);
      }
    } },

  filters: {
    // 金额格式化输出
    moneyFormat: function moneyFormat(money) {
      return parseFloat(money).toFixed(2);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 460:
/*!************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/pintuan/public/js/detail.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _htmlParser = _interopRequireDefault(__webpack_require__(/*! @/common/js/html-parser */ 206));
var _wxJssdk = __webpack_require__(/*! @/common/js/wx-jssdk.js */ 151);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _regeneratorRuntime() {"use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return exports;};var exports = {},Op = Object.prototype,hasOwn = Op.hasOwnProperty,$Symbol = "function" == typeof Symbol ? Symbol : {},iteratorSymbol = $Symbol.iterator || "@@iterator",asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];}try {define({}, "");} catch (err) {define = function define(obj, key, value) {return obj[key] = value;};}function wrap(innerFn, outerFn, self, tryLocsList) {var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,generator = Object.create(protoGenerator.prototype),context = new Context(tryLocsList || []);return generator._invoke = function (innerFn, self, context) {var state = "suspendedStart";return function (method, arg) {if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {if ("throw" === method) throw arg;return doneResult();}for (context.method = method, context.arg = arg;;) {var delegate = context.delegate;if (delegate) {var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {if (delegateResult === ContinueSentinel) continue;return delegateResult;}}if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);} else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };}"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);}};}(innerFn, self, context), generator;}function tryCatch(fn, obj, arg) {try {return { type: "normal", arg: fn.call(obj, arg) };} catch (err) {return { type: "throw", arg: err };}}exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {return this;});var getProto = Object.getPrototypeOf,NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {["next", "throw", "return"].forEach(function (method) {define(prototype, method, function (arg) {return this._invoke(method, arg);});});}function AsyncIterator(generator, PromiseImpl) {function invoke(method, arg, resolve, reject) {var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {var result = record.arg,value = result.value;return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {invoke("next", value, resolve, reject);}, function (err) {invoke("throw", err, resolve, reject);}) : PromiseImpl.resolve(value).then(function (unwrapped) {result.value = unwrapped, resolve(result);}, function (error) {return invoke("throw", error, resolve, reject);});}reject(record.arg);}var previousPromise;this._invoke = function (method, arg) {function callInvokeWithMethodAndArg() {return new PromiseImpl(function (resolve, reject) {invoke(method, arg, resolve, reject);});}return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();};}function maybeInvokeDelegate(delegate, context) {var method = delegate.iterator[context.method];if (undefined === method) {if (context.delegate = null, "throw" === context.method) {if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);}function pushTryEntry(locs) {var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);}function resetTryEntry(entry) {var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;}function Context(tryLocsList) {this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);}function values(iterable) {if (iterable) {var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {var i = -1,next = function next() {for (; ++i < iterable.length;) {if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;}return next.value = undefined, next.done = !0, next;};return next.next = next;}}return { next: doneResult };}function doneResult() {return { value: undefined, done: !0 };}return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));}, exports.mark = function (genFun) {return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;}, exports.awrap = function (arg) {return { __await: arg };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {return this;}), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {return result.done ? result.value : iter.next();});}, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {return this;}), define(Gp, "toString", function () {return "[object Generator]";}), exports.keys = function (object) {var keys = [];for (var key in object) {keys.push(key);}return keys.reverse(), function next() {for (; keys.length;) {var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;}return next.done = !0, next;};}, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);}}, stop: function stop() {this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;}, dispatchException: function dispatchException(exception) {if (this.done) throw exception;var context = this;function handle(loc, caught) {return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;}for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i],record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {var hasCatch = hasOwn.call(entry, "catchLoc"),hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);} else if (hasCatch) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);} else {if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);}}}}, abrupt: function abrupt(type, arg) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {var finallyEntry = entry;break;}}finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);}, complete: function complete(record, afterLoc) {if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;}, finish: function finish(finallyLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;}}, catch: function _catch(tryLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {var record = entry.completion;if ("throw" === record.type) {var thrown = record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield: function delegateYield(iterable, resultName, nextLoc) {return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;} }, exports;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =



{
  data: function data() {
    return {
      skuId: 0,
      groupId: 0,
      pintuan_id: 0,

      // 商品详情
      goodsSkuDetail: {
        goods_id: 0,
        goods_service: [] },

      // 店铺详情
      shopInfo: {
        logo: '',
        shop_baozh: 0,
        shop_qtian: 0,
        shop_zhping: 0,
        shop_erxiaoshi: 0,
        shop_tuihuo: 0,
        shop_shiyong: 0,
        shop_shiti: 0,
        shop_xiaoxie: 0 },


      cartCount: 0, // 购物车商品数量
      whetherCollection: 0,

      // 媒体,图片,视频

      // 解决每个商品SKU图片数量不同时，无法切换到第一个，导致轮播图显示不出来
      swiperInterval: 1,
      swiperAutoplay: false,
      swiperCurrent: 1,
      switchMedia: 'img',

      isIphoneX: false, //判断手机是否是iphoneX以上

      poster: "-1", //海报
      posterMsg: "", //海报错误信息
      posterHeight: 0,

      //评价
      goodsEvaluate: {
        member_headimg: '',
        member_name: '',
        content: '',
        images: [],
        create_time: 0,
        sku_name: '' },

      pintuanList: [],
      currentPintuan: {
        headimg: '',
        timeMachine: {} },

      openPopup: false,
      memberId: 0,
      contactData: {
        title: '',
        path: '',
        img: '' },

      detailTab: 0,
      service: null,
      showKefu: 0,
      // 是否可分享到好物圈
      goodsCircle: false,
      timestamp: '',
      newList: [],
      evaluateConfig: {
        evaluate_audit: 1,
        evaluate_show: 0,
        evaluate_status: 1 } };


  },
  onLoad: function onLoad(data) {var _this = this;
    this.pintuan_id = data.pintuan_id || 0;
    this.groupId = data.group_id || 0;
    this.isIphoneX = this.$util.uniappIsIPhoneX();
    if (data.source_member) uni.setStorageSync('source_member', data.source_member);
    // 小程序扫码进入
    if (data.scene) {
      var sceneParams = decodeURIComponent(data.scene);
      sceneParams = sceneParams.split('&');
      if (sceneParams.length) {
        sceneParams.forEach(function (item) {
          if (item.indexOf('pintuan_id') != -1) _this.pintuan_id = item.split('-')[1];
          if (item.indexOf('group_id') != -1) _this.group_id = item.split('-')[1];
          if (item.indexOf('source_member') != -1) uni.setStorageSync('source_member', item.split('-')[1]);
        });
      }
    }
    // this.getService();
  },
  onShow: function onShow() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {return _regeneratorRuntime().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:

              // 刷新多语言
              _this2.$langConfig.refresh();
              _this2.$store.dispatch('getAddonIsexit').then( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                          data.pintuan) {_context.next = 5;break;}
                          _this2.$util.showToast({
                            title: '拼团未开启',
                            mask: true });

                          setTimeout(function () {
                            _this2.$util.redirectTo('/pages/index/index/index', {}, 'redirectTo');
                          }, 1000);_context.next = 13;break;case 5:

                          if (uni.getStorageSync('token')) {
                            _this2.getCartCount();
                            _this2.getMemberId();
                          }
                          _this2.canGoConnect();
                          _this2.getKekuConfig();
                          //同步获取商品详情
                          _context.next = 10;return _this2.getGoodsSkuDetail();case 10:

                          //修改商品信息
                          _this2.modifyGoodsInfo();

                          // 评价设置
                          _this2.getEvaluateConfig();

                          _this2.getPintuanGroupList();case 13:case "end":return _context.stop();}}}, _callee);}));return function (_x) {return _ref.apply(this, arguments);};}());case 2:case "end":return _context2.stop();}}}, _callee2);}))();



  },
  methods: {
    canGoConnect: function canGoConnect() {var _this3 = this;
      this.$api.sendRequest({
        url: "/api/addon/addonisexit",
        success: function success(res) {
          if (res.code == 0 && res.data) {
            _this3.showKefu = res.data.servicer;
          }
        } });

    },
    //联系客服
    goConnect: function goConnect() {
      if (uni.getStorageSync('token')) {
        var data = {
          site_id: this.shopInfo.site_id,
          sku_id: this.goodsSkuDetail.sku_id,
          type: 'pintuan',
          type_id: this.goodsSkuDetail.pintuan_id };

        this.$util.redirectTo('/otherpages/chat/room/room', data);
        return false;
      } else {
        this.$refs.login.open('/pages/goods/detail/detail?sku_id=' + this.goodsSkuDetail.sku_id);
        return;
      }
    },
    // 获取拼团商品详情
    getGoodsSkuDetail: function getGoodsSkuDetail() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {var res, data, goods_attr_format, i, j;return _regeneratorRuntime().wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  _this4.$api.sendRequest({
                    url: '/pintuan/api/goods/detail',
                    async: false,
                    data: {
                      pintuan_id: _this4.pintuan_id } }));case 2:res = _context3.sent;


                data = res.data;
                if (data.goods_sku_detail != null) {
                  _this4.goodsSkuDetail = data.goods_sku_detail;
                  _this4.shopInfo = data.shop_info;
                  _this4.goodsSkuDetail.group_id = _this4.groupId;
                  _this4.skuId = _this4.goodsSkuDetail.sku_id;

                  _this4.goodsSkuDetail.goods_service = [];
                  if (_this4.shopInfo.shop_baozh == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '保证服务',
                      desc: '保证服务' });

                  }

                  if (_this4.shopInfo.shop_qtian == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '7天退换',
                      desc: '满足7天无理由退换货申请的前提下，包邮商品需要买家承担退货邮费，非包邮商品需要买家承担发货和退货邮费' });

                  }

                  if (_this4.shopInfo.shop_zhping == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '正品保障',
                      desc: '商品支持正品保障服务' });

                  }

                  if (_this4.shopInfo.shop_erxiaoshi == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '两小时发货',
                      desc: '付款后2小时内发货' });

                  }

                  if (_this4.shopInfo.shop_tuihuo == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '退货承诺',
                      desc: '退货承诺' });

                  }

                  if (_this4.shopInfo.shop_shiyong == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '试用中心',
                      desc: '试用中心' });

                  }

                  if (_this4.shopInfo.shop_shiti == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '实体验证',
                      desc: '实体验证' });

                  }

                  if (_this4.shopInfo.shop_xiaoxie == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '消协保证',
                      desc: '如有商品质量问题、描述不符或未收到货等，您有权申请退款或退货，来回邮费由卖家承担' });

                  }

                  //砍价倒计时
                  if (_this4.goodsSkuDetail.end_time - res.timestamp > 0) {
                    _this4.goodsSkuDetail.timeMachine = _this4.$util.countDown(_this4.goodsSkuDetail.end_time - res.timestamp);
                  } else {
                    _this4.$util.showToast({
                      title: "活动已结束" });

                    setTimeout(function () {
                      _this4.$util.redirectTo('/pages/goods/detail/detail', {
                        sku_id: _this4.goodsSkuDetail.sku_id },
                      'redirectTo');
                    }, 1000);
                  }

                  //拼团倒计时
                  if (_this4.goodsSkuDetail.end_time - res.timestamp > 0) {
                    _this4.goodsSkuDetail.timeMachine = _this4.$util.countDown(_this4.goodsSkuDetail.end_time - res.timestamp);
                  } else {
                    _this4.$util.showToast({
                      title: "活动已结束" });

                    setTimeout(function () {
                      _this4.$util.redirectTo('/pages/goods/detail/detail', {
                        sku_id: _this4.goodsSkuDetail.sku_id },
                      'redirectTo');
                    }, 1000);
                  }

                  //媒体
                  if (_this4.goodsSkuDetail.video_url) _this4.switchMedia = "video";

                  if (_this4.goodsSkuDetail.sku_images) _this4.goodsSkuDetail.sku_images = _this4.goodsSkuDetail.sku_images.split(",");else
                  _this4.goodsSkuDetail.sku_images = [];

                  // 多规格时合并主图
                  if (_this4.goodsSkuDetail.goods_spec_format && _this4.goodsSkuDetail.goods_image) {
                    _this4.goodsSkuDetail.goods_image = _this4.goodsSkuDetail.goods_image.split(",");
                    _this4.goodsSkuDetail.sku_images = _this4.goodsSkuDetail.sku_images.concat(_this4.goodsSkuDetail.goods_image);
                  }

                  _this4.goodsSkuDetail.unit = _this4.goodsSkuDetail.unit || "件";

                  _this4.goodsSkuDetail.show_price = _this4.goodsSkuDetail.group_id == 0 ? _this4.goodsSkuDetail.promotion_price : _this4.goodsSkuDetail.
                  pintuan_price;

                  _this4.goodsSkuDetail.save_price = _this4.goodsSkuDetail.price - _this4.goodsSkuDetail.show_price > 0 ? (_this4.goodsSkuDetail.
                  price - _this4.goodsSkuDetail.show_price).toFixed(2) : 0;

                  // 当前商品SKU规格
                  if (_this4.goodsSkuDetail.sku_spec_format) _this4.goodsSkuDetail.sku_spec_format = JSON.parse(_this4.goodsSkuDetail.sku_spec_format);

                  // 商品属性
                  if (_this4.goodsSkuDetail.goods_attr_format) {
                    goods_attr_format = JSON.parse(_this4.goodsSkuDetail.goods_attr_format);
                    _this4.goodsSkuDetail.goods_attr_format = _this4.$util.unique(goods_attr_format, "attr_id");
                    for (i = 0; i < _this4.goodsSkuDetail.goods_attr_format.length; i++) {
                      for (j = 0; j < goods_attr_format.length; j++) {
                        if (_this4.goodsSkuDetail.goods_attr_format[i].attr_id == goods_attr_format[j].attr_id && _this4.goodsSkuDetail.goods_attr_format[
                        i].attr_value_id != goods_attr_format[j].attr_value_id) {
                          _this4.goodsSkuDetail.goods_attr_format[i].attr_value_name += "、" + goods_attr_format[j].attr_value_name;
                        }
                      }
                    }
                  }

                  // 商品SKU格式
                  if (_this4.goodsSkuDetail.goods_spec_format) _this4.goodsSkuDetail.goods_spec_format = JSON.parse(_this4.goodsSkuDetail.goods_spec_format);

                  _this4.$langConfig.title(_this4.goodsSkuDetail.goods_name);

                  // 商品详情
                  // if (this.goodsSkuDetail.goods_content) this.goodsSkuDetail.goods_content = htmlParser(this.goodsSkuDetail.goods_content);

                  _this4.contactData = {
                    title: _this4.goodsSkuDetail.sku_name,
                    path: '/promotionpages/pintuan/detail/detail?pintuan_id=' + _this4.pintuan_id,
                    img: _this4.$util.img(_this4.goodsSkuDetail.sku_image, {
                      size: 'big' }) };



                  if (uni.getStorageSync('token')) {
                    _this4.getWhetherCollection();
                  }

                  _this4.setWechatShare();

                  // if (this.$refs.goodsPromotion) this.$refs.goodsPromotion.refresh(this.goodsSkuDetail.goods_promotion);

                  if (_this4.$refs.loadingCover) _this4.$refs.loadingCover.hide();


                  _this4.getGoodScircleConfig();

                } else {
                  _this4.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
                }case 5:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    /**
     * 刷新商品详情数据
     * @param {Object} goodsSkuDetail
     */
    refreshGoodsSkuDetail: function refreshGoodsSkuDetail(goodsSkuDetail) {var _this5 = this;
      Object.assign(this.goodsSkuDetail, goodsSkuDetail);
      this.goodsSkuDetail.unit = this.goodsSkuDetail.unit || "件";
      // if (this.$refs.goodsPromotion) this.$refs.goodsPromotion.refresh(this.goodsSkuDetail.goods_promotion);

      // 解决轮播图数量不一致时，切换到第一个
      if (this.swiperCurrent > this.goodsSkuDetail.sku_images.length) {
        this.swiperAutoplay = true;
        this.swiperCurrent = 1;
        setTimeout(function () {
          _this5.swiperAutoplay = false;
        }, 40);
      }
    },
    goHome: function goHome() {
      // this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
      this.$util.redirectTo('/otherpages/shop/index/index', {
        site_id: this.shopInfo.site_id });

    },
    goCart: function goCart() {
      this.$util.redirectTo('/pages/goods/cart/cart', {}, 'reLaunch');
    },
    // 发起拼团
    pintuan: function pintuan() {var _this6 = this;var isPromotion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!uni.getStorageSync('token')) {
        this.$refs.login.open('/promotionpages/pintuan/detail/detail?pintuan_id=' + this.pintuan_id);
        return;
      }
      if (isPromotion) {
        this.resetPrice();
      }
      this.$refs.goodsSku.show("pintuan", function () {
        _this6.resetPrice();
      });
    },
    // 立即购买
    buyNow: function buyNow() {
      if (!uni.getStorageSync('token')) {
        this.$refs.login.open('/promotionpages/pintuan/detail/detail?pintuan_id=' + this.pintuan_id);
        return;
      }
      this.$refs.goodsSku.show("buy_now", function () {});
    },
    swiperChange: function swiperChange(e) {
      this.swiperCurrent = e.detail.current + 1;
    },


    //-------------------------------------服务-------------------------------------

    openMerchantsServicePopup: function openMerchantsServicePopup() {
      this.$refs.merchantsServicePopup.open();
    },
    closeMerchantsServicePopup: function closeMerchantsServicePopup() {
      this.$refs.merchantsServicePopup.close();
    },



    //-------------------------------------属性-------------------------------------

    openAttributePopup: function openAttributePopup() {
      this.$refs.attributePopup.open();
    },
    closeAttributePopup: function closeAttributePopup() {
      this.$refs.attributePopup.close();
    },

    //-------------------------------------属性-------------------------------------



    //-------------------------------------评价-------------------------------------
    //商品评论列表
    getGoodsEvaluate: function getGoodsEvaluate() {var _this7 = this;
      this.$api.sendRequest({
        url: "/api/goodsevaluate/firstinfo",
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          var data = res.data;
          if (data) {
            _this7.goodsEvaluate = data;
            if (_this7.goodsEvaluate.images) _this7.goodsEvaluate.images = _this7.goodsEvaluate.images.split(",");
            if (_this7.goodsEvaluate.is_anonymous == 1) _this7.goodsEvaluate.member_name = _this7.goodsEvaluate.member_name.replace(
            _this7.goodsEvaluate.member_name.substring(1, _this7.goodsEvaluate.member_name.length - 1), '***');
          }
        } });

    },

    // 预览评价图片
    previewEvaluate: function previewEvaluate(index, field) {
      var paths = [];
      for (var i = 0; i < this.goodsEvaluate[field].length; i++) {
        paths.push(this.$util.img(this.goodsEvaluate[field][i]));
      }
      uni.previewImage({
        current: index,
        urls: paths });

    },


    //-------------------------------------关注-------------------------------------

    //获取用户是否关注
    getWhetherCollection: function getWhetherCollection() {var _this8 = this;
      this.$api.sendRequest({
        url: "/api/goodscollect/iscollect",
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          _this8.whetherCollection = res.data;
        } });

    },

    editCollection: function editCollection() {var _this9 = this;
      if (uni.getStorageSync('token')) {

        //未关注添加关注
        if (this.whetherCollection == 0) {
          this.$api.sendRequest({
            url: "/api/goodscollect/add",
            data: {
              sku_id: this.skuId },

            success: function success(res) {
              var data = res.data;
              if (data > 0) {
                _this9.whetherCollection = 1;
              }
            } });

        } else {
          //已关注取消关注
          this.$api.sendRequest({
            url: "/api/goodscollect/delete",
            data: {
              goods_id: this.goodsSkuDetail.goods_id },

            success: function success(res) {
              var data = res.data;
              if (data > 0) {
                _this9.whetherCollection = 0;
              }
            } });

        }
      } else {
        this.$refs.login.open('/promotionpages/pintuan/detail/detail?pintuan_id=' + this.pintuan_id);
      }
    },
    //获取购物车数量
    getCartCount: function getCartCount() {var _this10 = this;
      this.$store.dispatch('getCartNumber').then(function (e) {
        _this10.cartCount = e;
      });
    },
    //更新商品信息
    modifyGoodsInfo: function modifyGoodsInfo() {
      //更新商品点击量
      this.$api.sendRequest({
        url: "/api/goods/modifyclicks",
        data: {
          sku_id: this.skuId,
          site_id: this.goodsSkuDetail.site_id },

        success: function success(res) {} });


      //添加足迹
      this.$api.sendRequest({
        url: "/api/goodsbrowse/add",
        data: {
          sku_id: this.skuId },

        success: function success(res) {} });

    },


    //-------------------------------------分享-------------------------------------
    // 打开分享弹出层
    openSharePopup: function openSharePopup() {
      this.$refs.sharePopup.open();
    },
    // 关闭分享弹出层
    closeSharePopup: function closeSharePopup() {
      this.$refs.sharePopup.close();
    },
    //-------------------------------------海报-------------------------------------

    // 打开海报弹出层
    openPosterPopup: function openPosterPopup() {var _this11 = this;
      this.getGoodsPoster();
      this.$refs.sharePopup.close();
      this.$refs.posterPopup.open();
      if (this.poster != '-1') {
        setTimeout(function () {
          var view = uni.createSelectorQuery().in(_this11).select(".poster-layer .image-wrap");
          view.fields({
            size: true },
          function (data) {
            var posterWhith = data.width;
            var ratio = parseFloat((740 / posterWhith).toFixed(2));
            if (uni.getStorageSync('token')) {
              _this11.posterHeight = parseInt(1100 / ratio);
            } else {
              _this11.posterHeight = parseInt(1100 / ratio);
            }
          }).exec();
        }, 100);
      }
    },
    // 关闭海报弹出层
    closePosterPopup: function closePosterPopup() {
      this.$refs.posterPopup.close();
    },
    //生成海报
    getGoodsPoster: function getGoodsPoster() {var _this12 = this;
      //活动海报信息
      var qrcode_param = {
        id: this.goodsSkuDetail.id };

      if (this.memberId) qrcode_param.source_member = this.memberId;
      this.$api.sendRequest({
        url: "/pintuan/api/goods/poster",
        data: {
          page: '/promotionpages/pintuan/detail/detail',
          qrcode_param: JSON.stringify(qrcode_param) },

        success: function success(res) {
          if (res.code == 0) {
            _this12.poster = res.data.path + "?time=" + new Date().getTime();
          } else {
            _this12.posterMsg = res.message;
          }
        } });

    },
    // 预览图片
    previewMedia: function previewMedia(index) {
      var paths = [];
      for (var i = 0; i < this.goodsSkuDetail.sku_images.length; i++) {
        paths.push(this.$util.img(this.goodsSkuDetail.sku_images[i], {
          size: 'big' }));

      }
      uni.previewImage({
        current: index,
        urls: paths });

    },
    // 获取拼团组列表
    getPintuanGroupList: function getPintuanGroupList() {var _this13 = this;
      this.$api.sendRequest({
        url: "/pintuan/api/pintuangroup/lists",
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          var data = res.data;
          _this13.timestamp = res.timestamp;
          if (data != null && data.length) {
            _this13.pintuanList = data;
            for (var i = 0; i < _this13.pintuanList.length; i++) {
              if (_this13.pintuanList[i]['end_time'] > res.timestamp) {
                _this13.pintuanList[i].timeMachine = _this13.$util.countDown(_this13.pintuanList[i]['end_time'] - res.timestamp);
                _this13.pintuanList[i].currentTime = res.timestamp;
              } else {
                _this13.pintuanList[i].timeMachine = null;
              }
            }
            _this13.newList = _this13.pintuanList.filter(function (item) {
              return item.end_time > res.timestamp;
            });
            _this13.$forceUpdate();
          }
        } });

    },
    //打开拼团弹出框
    openPinTuan: function openPinTuan(groupId, pintuan_num, time, headimg) {var _this14 = this;
      this.openPopup = true;
      this.currentPintuan = {
        groupId: groupId,
        pintuan_num: pintuan_num,
        timeMachine: this.$util.countDown(time),
        headimg: headimg };

      this.$refs.pintuanPopup.open(function () {
        _this14.goodsSkuDetail.group_id = 0;
        _this14.openPopup = false;
      });
    },
    closePinTuanPopup: function closePinTuanPopup() {
      this.$refs.pintuanPopup.close();
    },
    //参与拼团
    joinPintuan: function joinPintuan() {
      this.closePinTuanPopup();
      this.goodsSkuDetail.group_id = this.currentPintuan.groupId;
      this.goodsSkuDetail.show_price = this.goodsSkuDetail.pintuan_price;
      this.goodsSkuDetail.save_price = this.goodsSkuDetail.price - this.goodsSkuDetail.show_price > 0 ? (this.goodsSkuDetail.
      price - this.goodsSkuDetail.show_price).toFixed(2) : 0;
      this.$forceUpdate();
      this.pintuan(false);
    },
    swiperImgError: function swiperImgError(index) {
      this.goodsSkuDetail.sku_images[index] = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },
    pintuanImgError: function pintuanImgError(index) {
      this.pintuanList[index].headimg = this.$util.getDefaultImage().default_headimg;
      this.$forceUpdate();
    },

    //小程序中保存海报
    saveGoodsPoster: function saveGoodsPoster() {var _this15 = this;
      var url = this.$util.img(this.poster);
      uni.downloadFile({
        url: url,
        success: function success(res) {
          if (res.statusCode === 200) {
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function success() {
                _this15.$util.showToast({
                  title: "保存成功" });

              },
              fail: function fail() {
                _this15.$util.showToast({
                  title: "保存失败，请稍后重试" });

              } });

          }
        } });

    },

    getMemberId: function getMemberId() {var _this16 = this;
      this.$api.sendRequest({
        url: "/api/member/id",
        success: function success(res) {
          if (res.code >= 0) {
            _this16.memberId = res.data;
          }
        } });

    },
    //售后保障查询
    getService: function getService() {var _this17 = this;
      this.$api.sendRequest({
        url: '/api/goods/aftersale',
        success: function success(res) {
          if (res.code == 0 && res.data) {
            var data = res.data.content;
            if (res.data.content) _this17.service = (0, _htmlParser.default)(res.data.content);
          }
        } });

    },
    /**
     * 设置微信公众号分享
     */
    setWechatShare: function setWechatShare() {
      // 微信公众号分享































    },

    /**
     *	获取是否开启微信圈子 
     */
    getGoodScircleConfig: function getGoodScircleConfig() {var _this18 = this;
      this.$api.sendRequest({
        url: '/goodscircle/api/config/info',
        success: function success(res) {
          if (res.code == 0) {
            if (res.data.is_use) {
              _this18.goodsSyncToGoodsCircle();
            }
          }
        } });

    },
    /**
     *	将商品同步到微信圈子 
     */
    goodsSyncToGoodsCircle: function goodsSyncToGoodsCircle() {var _this19 = this;
      this.$api.sendRequest({
        url: '/goodscircle/api/goods/sync',
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          if (res.code == 0) {
            _this19.goodsCircle = true;
          }
        } });

    },
    /**
     * 将商品推荐到微信圈子
     */
    openBusinessView: function openBusinessView() {var _this20 = this;
      if (wx.openBusinessView) {
        wx.openBusinessView({
          businessType: 'friendGoodsRecommend',
          extraData: {
            product: {
              item_code: this.goodsSkuDetail.goods_id,
              title: this.goodsSkuDetail.sku_name,
              image_list: this.goodsSkuDetail.sku_images.map(function (ele) {
                return _this20.$util.img(ele);
              }) } },


          success: function success(res) {
            console.log('success', res);
          },
          fail: function fail(res) {
            console.log('fail', res);
          } });

      }
    },

    getEvaluateConfig: function getEvaluateConfig() {var _this21 = this;
      this.$api.sendRequest({
        url: '/api/goodsevaluate/config',
        success: function success(res) {
          if (res.code == 0) {
            var data = res.data;
            _this21.evaluateConfig = data;
            if (_this21.evaluateConfig.evaluate_show == 1) {
              //商品评论
              _this21.getGoodsEvaluate();
            }
          }
        } });

    },
    copyUrl: function copyUrl() {var _this22 = this;
      var text = this.$config.h5Domain + '/promotionpages/pintuan/detail/detail?pintuan_id=' + this.pintuan_id +
      '&group_id=' + this.groupId;
      if (this.memberId) text += '&source_member=' + this.memberId;
      this.$util.copy(text, function () {
        _this22.closeSharePopup();
      });
    },
    getKekuConfig: function getKekuConfig() {var _this23 = this;
      this.$api.sendRequest({
        url: '/api/config/servicer',
        success: function success(res) {
          if (res.code == 0) {
            _this23.kefuConfig = res.data;
          }
        } });

    },
    toEvaluateDetail: function toEvaluateDetail(id) {
      this.$util.redirectTo('/otherpages/goods/evaluate/evaluate', {
        goods_id: id });

    },
    navigate: function navigate(href, e) {
      //比如点击a标签，打开某个webview并传输url
      this.$util.redirectTo('/otherpages/webview/webview', {
        link: encodeURIComponent(href) });

    },
    //h5播放视频
    openVideo: function openVideo(url, video_img) {
      // this.$refs.videoPopup.open();
      this.$util.redirectTo('/otherpages/goods/preview-video', {
        video_url: url,
        video_img: video_img });

    },
    errorShopLogo: function errorShopLogo() {
      this.shopInfo.avatar = this.$util.getDefaultImage().default_shop_img;
      this.$forceUpdate();
    },
    // 重置价格
    resetPrice: function resetPrice() {
      this.goodsSkuDetail.group_id = 0;
      this.goodsSkuDetail.show_price = this.goodsSkuDetail.promotion_price;
      this.goodsSkuDetail.save_price = this.goodsSkuDetail.price - this.goodsSkuDetail.show_price > 0 ? (this.goodsSkuDetail.
      price - this.goodsSkuDetail.show_price).toFixed(2) : 0;
      this.$forceUpdate();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 489:
/*!*************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/pintuan/public/js/payment.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      isIphoneX: false,
      orderCreateData: {
        is_balance: 0,
        pay_password: '' },

      orderPaymentData: {
        member_account: {
          balance: 0,
          is_pay_password: 0 },

        shop_goods_list: {
          site_name: '',
          express_type: [],
          invoice_config: {
            invoice_status: 0 } },


        pintuan_info: {},
        pintuan_group_info: {} },

      orderInvoice: {
        is_invoice: 0, //是否需要发票
        invoice_type: 1, //发票类型电子、纸质
        invoice_title: '', //发票抬头
        invoice_title_type: 1, // 抬头类型
        invoice_full_address: '', //邮寄地址
        is_tax_invoice: 0, //是否需要增值税发票
        invoice_email: '', // 邮箱
        invoice_content: '', //发票内容
        taxpayer_number: '' //纳税人识别号
      },
      isSub: false,
      tempData: null,
      siteDelivery: {
        site_id: 0,
        data: [] } };



  },
  methods: {
    // 显示弹出层
    openPopup: function openPopup(ref) {
      this.$refs[ref].open();
    },
    // 关闭弹出层
    closePopup: function closePopup(ref) {
      if (this.tempData) {
        Object.assign(this.orderCreateData, this.tempData);
        Object.assign(this.orderPaymentData, this.tempData);
        this.tempData = null;
        this.$forceUpdate();
      }
      this.$refs[ref].close();
    },
    // 选择收货地址，默认有定位
    selectAddress: function selectAddress() {
      var params = {
        back: '/promotionpages/pintuan/payment/payment',
        local: 0,
        type: 1 };

      // 外卖配送需要定位地址
      // if (this.orderPaymentData.delivery.delivery_type == 'local') {
      // 	params.local = 1;
      // 	params.type = 2;
      // }
      this.$util.redirectTo('/otherpages/member/address/address', params);
    },
    // 获取订单初始化数据
    getOrderPaymentData: function getOrderPaymentData() {var _this = this;
      this.orderCreateData = uni.getStorageSync('pintuanOrderCreateData');
      var pay_flag = uni.getStorageSync("pay_flag"); // 支付中标识，防止返回时，提示,跳转错误
      if (!this.orderCreateData) {
        if (pay_flag == 1) {
          uni.removeStorageSync("pay_flag");
        } else {
          this.$util.showToast({
            title: '未获取到创建订单所需数据！' });

          setTimeout(function () {
            _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }, 1000);
        }
        return;
      }

      // 获取经纬度
      var location = uni.getStorageSync('location');
      if (location) {
        this.orderCreateData = Object.assign(this.orderCreateData, location);
      }

      this.orderCreateData.buyer_message = '';

      this.$api.sendRequest({
        url: '/pintuan/api/ordercreate/payment',
        data: this.orderCreateData,
        success: function success(res) {
          if (res.code >= 0) {
            _this.orderPaymentData = res.data;
            _this.orderPaymentData.timestamp = res.timestamp;
            _this.handlePaymentData();
            if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
          } else {
            _this.$util.showToast({
              title: '未获取到创建订单所需数据！' });

            setTimeout(function () {
              _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
            }, 1000);
          }
        },
        fail: function fail(res) {
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        } });

    },
    // 处理结算订单数据
    handlePaymentData: function handlePaymentData() {
      this.orderCreateData.delivery = {};
      this.orderCreateData.invoice = {};
      this.orderCreateData.is_balance = 0;
      this.orderCreateData.pay_password = '';

      for (var i = 0; i < this.orderPaymentData.shop_goods_list.goods_list.length; i++) {
        this.orderPaymentData.shop_goods_list.goods_list[i].goods_image = this.orderPaymentData.shop_goods_list.goods_list[
        i].goods_image ? this.orderPaymentData.shop_goods_list.goods_list[i].goods_image.split(",")[0] : '';
      }

      var data = this.orderPaymentData;

      var h = new Date().getHours().toString();
      var m = new Date().getMinutes().toString();
      if (h.length == 1) {
        h = '0' + h;
      }
      if (m.length == 1) {
        m = '0' + m;
      }
      var nowTime = h + ':' + m;
      var weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

      // 获取时间，必须是字符串,跟后端一致
      var index_weeks = ['0', '1', '2', '3', '4', '5', '6'];
      var curr_week = index_weeks[new Date().getDay()];

      if (data.shop_goods_list.express_type != undefined && data.shop_goods_list.express_type[0] != undefined) {
        var express_type = data.shop_goods_list.express_type;
        this.orderCreateData.delivery.delivery_type = express_type[0].name;
        this.orderCreateData.delivery.delivery_type_name = express_type[0].title;
        this.orderCreateData.delivery.store_id = 0;

        // 如果默认配送方式是门店配送
        if (express_type[0].name == 'store') {
          if (express_type[0].store_list[0] != undefined) {
            this.orderCreateData.delivery.store_id = express_type[0].store_list[0].store_id;
          }
        }
      }

      if (data.is_virtual == 0 && data.shop_goods_list.local_config) {

        // 是否显示时间选择
        if (data.shop_goods_list.local_config.info && data.shop_goods_list.local_config.info.time_is_open == 1) {
          this.orderCreateData.delivery.showTimeBar = true;
          this.orderCreateData.delivery.buyer_ask_delivery_time = nowTime;
          // 当日是否支持配送
          if (data.shop_goods_list.local_config.info.time_week.length == 0 ||
          data.shop_goods_list.local_config.info.time_week.length == 7 ||
          data.shop_goods_list.local_config.info.time_week.indexOf(curr_week) > -1) {
            this.orderCreateData.delivery.canLocalDelicery = true;
          } else {
            this.orderCreateData.delivery.canLocalDelicery = false;
          }

          if (data.shop_goods_list.local_config.info.time_type == 0) {
            this.orderCreateData.delivery.deliveryWeek = "全天";
          } else if (data.shop_goods_list.local_config.info.time_week.length > 0) {
            if (data.shop_goods_list.local_config.info.time_week.length == 7) {
              this.orderCreateData.delivery.deliveryWeek = "全天";
              this.orderCreateData.delivery.showTime = false;
            } else {
              this.orderCreateData.delivery.showTime = true;
              // 判断配送时间是连续还是间隔
              var timeWeek = data.shop_goods_list.local_config.info.time_week;
              var is_interval = false; // 是否间隔
              for (var i = 0; i < timeWeek.length; i++) {
                if (i + 1 < timeWeek.length) {
                  var difference = timeWeek[i + 1] - timeWeek[i];
                  if (difference > 1) {
                    is_interval = true;
                    break;
                  }
                }
              }

              if (is_interval) {
                var temp = [];
                for (var i = 0; i < timeWeek.length; i++) {
                  temp.push(weeks[timeWeek[i]]);
                }
                this.orderCreateData.delivery.deliveryWeek = temp.join("、");
              } else {
                this.orderCreateData.delivery.deliveryWeek = weeks[timeWeek[0]] + "至" + weeks[timeWeek[timeWeek.length -
                1]];
              }
            }
          } else {
            this.orderCreateData.delivery.deliveryWeek = "店铺未设置配送时间";
          }

          // picker组件时间起始
          var start_time = data.shop_goods_list.local_config.info.start_time;
          this.orderCreateData.delivery.start_time = this.getTimeStr(start_time);

          var end_time = data.shop_goods_list.local_config.info.end_time;
          this.orderCreateData.delivery.end_time = this.getTimeStr(end_time);

          var current_time = new Date(this.$util.timeStampTurnTime(data.timestamp));
          var hour = current_time.getHours();
          var minute = current_time.getMinutes();

          var start_hour = parseInt(this.orderCreateData.delivery.start_time.split(":")[0]);
          var start_minute = parseInt(this.orderCreateData.delivery.start_time.split(":")[1]);

          var end_hour = parseInt(this.orderCreateData.delivery.end_time.split(":")[0]);
          var end_minute = parseInt(this.orderCreateData.delivery.end_time.split(":")[1]);

          // 检测当天是否能够配送，然后判断送达时间。不在配送时间当日不能下单，例：配送时间是周一到周五，那么周末不能下单，周一到周五可以下单
          if (this.orderCreateData.delivery.canLocalDelicery) {

            // 判断是否全天
            if (!(start_hour == end_hour && start_minute == end_minute)) {

              // 当前时间早于配送时间，送达时间：开始时间~结束时间
              if (hour < start_hour || hour == start_hour && minute < start_minute) {
                this.orderCreateData.delivery.buyer_ask_delivery_time = (start_hour.toString().length == 1 ? "0" + start_hour :
                start_hour) + ':' + (
                start_minute.toString().length == 1 ? "0" + start_minute : start_minute);
              }

              // if (((hour > start_hour && hour < end_hour) || (hour == start_hour && minute > start_minute) || (hour ==
              // 		start_hour && minute >= start_minute && hour < end_hour))) {
              // }

              // 当前时间晚于配送时间，送达时间隐藏，不能下单
              if (hour > end_hour || hour == end_hour && minute > end_minute) {
                this.orderCreateData.delivery.canLocalDelicery = false;
              }
            }

          }

        } else {
          this.orderCreateData.delivery.showTimeBar = false;
          this.orderCreateData.delivery.deliveryWeek = "店铺未开启配送时间";
        }

      }

      data.shop_goods_list.goods_list.forEach(function (v) {
        if (typeof v.sku_spec_format == 'string') {
          if (v.sku_spec_format) {
            v.sku_spec_format = JSON.parse(v.sku_spec_format);
          } else {
            v.sku_spec_format = [];
          }
        }
      });

      if (this.orderPaymentData.is_virtual) this.orderCreateData.member_address = {
        mobile: '' };


      Object.assign(data, this.orderCreateData);
      this.orderCalculate();
    },
    // 转化时间字符串
    getTimeStr: function getTimeStr(val) {
      var h = parseInt(val / 3600).toString();
      var m = parseInt(val % 3600 / 60).toString();
      if (m.length == 1) {
        m = '0' + m;
      }
      if (h.length == 1) {
        h = '0' + h;
      }
      return h + ':' + m;
    },
    // 订单计算
    orderCalculate: function orderCalculate() {var _this2 = this;
      var siteId = this.orderPaymentData.shop_goods_list.site_id;

      var deliveryObj = {};
      deliveryObj[siteId] = this.orderCreateData.delivery;

      var messageObj = {};
      messageObj[siteId] = this.orderCreateData.buyer_message;

      //店铺发票
      if (this.orderPaymentData.shop_goods_list.is_invoice) {
        this.orderCreateData.invoice[siteId] = {};
        if (!Array.isArray(this.orderPaymentData.shop_goods_list.invoice_config)) {
          this.orderCreateData.invoice[siteId].is_invoice = this.orderPaymentData.shop_goods_list.is_invoice;
          this.orderCreateData.invoice[siteId].invoice_type = this.orderPaymentData.shop_goods_list.invoice_type;
          this.orderCreateData.invoice[siteId].invoice_title = this.orderPaymentData.shop_goods_list.invoice_title;
          this.orderCreateData.invoice[siteId].taxpayer_number = this.orderPaymentData.shop_goods_list.taxpayer_number;
          this.orderCreateData.invoice[siteId].invoice_content = this.orderPaymentData.shop_goods_list.invoice_content;
          this.orderCreateData.invoice[siteId].invoice_full_address = this.orderPaymentData.shop_goods_list.invoice_full_address;
          this.orderCreateData.invoice[siteId].is_tax_invoice = this.orderPaymentData.shop_goods_list.is_tax_invoice;
          this.orderCreateData.invoice[siteId].invoice_email = this.orderPaymentData.shop_goods_list.invoice_email;
          this.orderCreateData.invoice[siteId].invoice_title_type = this.orderPaymentData.shop_goods_list.invoice_title_type;
        }
      }

      var data = this.$util.deepClone(this.orderCreateData);
      data.delivery = JSON.stringify(deliveryObj);
      data.invoice = JSON.stringify(data.invoice);
      data.member_address = JSON.stringify(data.member_address);
      data.buyer_message = JSON.stringify(messageObj);

      this.$api.sendRequest({
        url: '/pintuan/api/ordercreate/calculate',
        data: data,
        success: function success(res) {
          if (res.code >= 0) {
            _this2.orderPaymentData.member_address = res.data.member_address;
            _this2.orderPaymentData.delivery_money = res.data.delivery_money;
            _this2.orderPaymentData.invoice_money = res.data.invoice_money;
            _this2.orderPaymentData.invoice_delivery_money = res.data.invoice_delivery_money;
            _this2.orderPaymentData.promotion_money = res.data.promotion_money;
            _this2.orderPaymentData.order_money = res.data.order_money;
            _this2.orderPaymentData.balance_money = res.data.balance_money;
            _this2.orderPaymentData.pay_money = res.data.pay_money;
            _this2.orderPaymentData.goods_money = res.data.goods_money;
            _this2.$forceUpdate();
          } else {
            _this2.$util.showToast({
              title: res.message });

          }
        } });

    },
    /**
     * 订单创建
     * @param {String} pay_password 支付密码
     */
    orderCreate: function orderCreate(pay_password) {var _this3 = this;
      if (this.verify()) {
        if (this.isSub) return;
        this.isSub = true;

        if (pay_password) this.orderCreateData.pay_password = pay_password;

        var siteId = this.orderPaymentData.shop_goods_list.site_id;

        var deliveryObj = {};
        deliveryObj[siteId] = this.orderCreateData.delivery;

        var messageObj = {};
        messageObj[siteId] = this.orderCreateData.buyer_message;

        var data = this.$util.deepClone(this.orderCreateData);
        data.delivery = JSON.stringify(deliveryObj);
        data.invoice = JSON.stringify(data.invoice);
        data.member_address = JSON.stringify(data.member_address);
        data.buyer_message = JSON.stringify(messageObj);

        this.$api.sendRequest({
          url: '/pintuan/api/ordercreate/create',
          data: data,
          success: function success(res) {
            uni.hideLoading();
            if (res.code >= 0) {
              if (_this3.orderPaymentData.pay_money == 0) {
                _this3.$util.redirectTo('/pages/pay/result/result', {
                  code: res.data },
                'redirectTo');
              } else {
                _this3.$refs.choosePaymentPopup.getPayInfo(res.data);
                _this3.isSub = false;
              }
              // uni.removeStorage({
              // 	key: 'pintuanOrderCreateData',
              // 	success: () => {}
              // });
            } else {
              _this3.isSub = false;
              if (res.data.error_code == 10 || res.data.error_code == 12) {
                uni.showModal({
                  title: '订单未创建',
                  content: res.message,
                  confirmText: '去设置',
                  success: function success(res) {
                    if (res.confirm) {
                      _this3.selectAddress();
                    }
                  } });

              } else {
                _this3.$util.showToast({
                  title: res.message });

              }
            }
          },
          fail: function fail(res) {
            uni.hideLoading();
            _this3.isSub = false;
          } });

      }
    },
    // 订单验证
    verify: function verify() {
      if (this.orderPaymentData.is_virtual == 1) {
        if (!this.orderCreateData.member_address.mobile.length) {
          this.$util.showToast({
            title: '请输入您的手机号码' });

          return false;
        }
        var reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
        if (!reg.test(this.orderCreateData.member_address.mobile)) {
          this.$util.showToast({
            title: '请输入正确的手机号码' });

          return false;
        }
      }

      if (this.orderPaymentData.is_virtual == 0) {

        var expressTypeVerify = true;

        for (var key in this.orderPaymentData.shop_goods_list) {
          if (this.orderPaymentData.shop_goods_list.express_type.length == 0) {
            expressTypeVerify = false;
            this.$util.showToast({
              title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】未设置配送方式' });

            break;
          }
        }

        if (!expressTypeVerify) return false;

        if (!this.orderPaymentData.member_address) {
          this.$util.showToast({
            title: '请先选择您的收货地址' });

          return false;
        }

        if (JSON.stringify(this.orderCreateData.delivery) == "{}") {
          this.$util.showToast({
            title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】未设置配送方式' });

          return false;
        }

        if (this.orderCreateData.delivery.delivery_type == 'store' && this.orderCreateData.delivery.store_id == 0) {
          this.$util.showToast({
            title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】没有可提货的门店,请选择其他配送方式' });

          return false;
        }

        if (this.orderCreateData.delivery.delivery_type == 'local') {

          if (this.orderCreateData.delivery.canLocalDelicery) {

            var hour = parseInt(this.orderCreateData.delivery.buyer_ask_delivery_time.split(":")[0]);
            var minute = parseInt(this.orderCreateData.delivery.buyer_ask_delivery_time.split(":")[1]);

            var start_hour = parseInt(this.orderCreateData.delivery.start_time.split(":")[0]);
            var start_minute = parseInt(this.orderCreateData.delivery.start_time.split(":")[1]);

            var end_hour = parseInt(this.orderCreateData.delivery.end_time.split(":")[0]);
            var end_minute = parseInt(this.orderCreateData.delivery.end_time.split(":")[1]);

            // 判断是否全天
            if (!(start_hour == end_hour && start_minute == end_minute)) {

              // 当前时间早于配送时间
              if (hour < start_hour || hour == start_hour && minute < start_minute) {
                this.$util.showToast({
                  title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】送达时间不能小于配送开始时间' });

                return false;
              }

              // 当前时间在配送时间内，送达时间：开始时间~结束时间
              if (!(hour > start_hour && hour < end_hour || hour == start_hour && minute > start_minute || hour ==
              start_hour && minute >= start_minute && hour < end_hour)) {
                this.$util.showToast({
                  title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】送达时间范围：开始时间~结束时间' });

                return false;
              }
            }
          } else {
            this.$util.showToast({
              title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】已休息' });

            return false;
          }

        }

      }

      return true;
    },
    // 显示店铺优惠信息
    openSitePromotion: function openSitePromotion() {
      this.$refs.sitePromotionPopup.open();
    },
    // 显示店铺配送信息
    openSiteDelivery: function openSiteDelivery() {
      this.tempData = {
        delivery: this.$util.deepClone(this.orderPaymentData.delivery) };

      this.$refs.deliveryPopup.open();
    },
    // 选择配送方式
    selectDeliveryType: function selectDeliveryType(data) {
      this.orderCreateData.delivery.delivery_type = data.name;
      this.orderCreateData.delivery.delivery_type_name = data.title;
      this.tempData = {
        delivery: this.$util.deepClone(this.orderPaymentData.delivery) };

      // 如果是门店配送
      if (data.name == 'store') {
        if (data.store_list[0] != undefined) {
          this.orderCreateData.delivery.store_id = data.store_list[0].store_id;
          this.tempData.delivery.store_id = data.store_list[0].store_id;
        }
      }
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.orderCalculate();
      this.$forceUpdate();
    },
    // 选择自提点
    selectPickupPoint: function selectPickupPoint(store_id) {
      this.orderCreateData.delivery.store_id = store_id;
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.orderCalculate();
      this.$forceUpdate();
      this.$refs['deliveryPopup'].close();
    },
    // 使用余额
    useBalance: function useBalance() {
      if (this.orderCreateData.is_balance) this.orderCreateData.is_balance = 0;else
      this.orderCreateData.is_balance = 1;
      this.orderCalculate();
      this.$forceUpdate();
    },
    imgError: function imgError(goodsIndex) {
      this.orderPaymentData.shop_goods_list.goods_list[goodsIndex].goods_image = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },
    //打开发票弹窗
    openInvoicePopup: function openInvoicePopup(val) {
      this.orderInvoice = this.$util.deepClone(val);
      this.orderInvoice.invoice_type = this.orderInvoice.invoice_type == undefined ? 1 : this.orderInvoice.invoice_type;
      this.orderInvoice.invoice_title_type = this.orderInvoice.invoice_title_type == undefined ? 1 : this.orderInvoice.invoice_title_type;
      this.orderInvoice.invoice_content = this.orderInvoice.invoice_content ? this.orderInvoice.invoice_content : '';
      this.orderInvoice.invoice_title = this.orderInvoice.invoice_title ? this.orderInvoice.invoice_title : '';
      this.orderInvoice.invoice_full_address = this.orderInvoice.invoice_full_address ? this.orderInvoice.invoice_full_address :
      ''; //邮寄地址
      this.orderInvoice.is_tax_invoice = this.orderInvoice.is_tax_invoice ? this.orderInvoice.is_tax_invoice : 0; //是否需要增值税发票
      this.orderInvoice.invoice_email = this.orderInvoice.invoice_email ? this.orderInvoice.invoice_email : ''; // 邮箱
      this.orderInvoice.taxpayer_number = this.orderInvoice.taxpayer_number ? this.orderInvoice.taxpayer_number : ''; //纳税人识别号
      this.openPopup('invoicePopup');
    },
    // 切换发票开关
    changeIsInvoice: function changeIsInvoice() {
      if (this.orderInvoice.is_invoice == 0) {
        this.orderInvoice.is_invoice = 1;
      } else {
        this.orderInvoice.is_invoice = 0;
      }
      this.$forceUpdate();
    },
    // 切换发票类型
    changeInvoiceType: function changeInvoiceType(invoice_type) {
      this.orderInvoice.invoice_type = invoice_type;
      this.$forceUpdate();
    },
    // 切换发票个人还是企业
    changeInvoiceTitleType: function changeInvoiceTitleType(invoice_title_type) {
      this.orderInvoice.invoice_title_type = invoice_title_type;
      this.$forceUpdate();
    },
    // 选择发票内容
    changeInvoiceContent: function changeInvoiceContent(invoice_content) {
      this.orderInvoice.invoice_content = invoice_content;
      this.$forceUpdate();
    },
    //关闭发票弹窗
    closeInvoicePopup: function closeInvoicePopup() {
      this.orderInvoice.invoice_type = 1; // 发票类型  1 纸质 2 电子
      this.orderInvoice.invoice_title_type = 1; // 抬头类型  1 个人 2 企业
      this.orderInvoice.invoice_content = ''; // 发票内容
      this.orderInvoice.invoice_title = ''; // 发票抬头
      this.orderInvoice.invoice_full_address = ''; // 发票邮寄地址
      this.orderInvoice.is_tax_invoice = 0; // 是否需要增值税专用发票  0 不需要 1 需要
      this.orderInvoice.invoice_email = ''; //发票邮箱
      this.orderInvoice.taxpayer_number = ''; //纳税人识别号
      this.orderCalculate();
      this.$forceUpdate();
      this.$refs.invoicePopup.close();
    },
    // 发票验证
    invoiceVerify: function invoiceVerify() {
      if (this.orderInvoice.is_invoice == 1) {
        if (this.orderInvoice.invoice_title == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写发票抬头" });

          return false;
        }
        if (this.orderInvoice.invoice_title_type == 2 && this.orderInvoice.taxpayer_number == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写纳税人识别号" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 1 && this.orderInvoice.invoice_full_address == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写发票邮寄地址" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 2 && this.orderInvoice.invoice_email == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写邮箱" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 2 && this.orderInvoice.invoice_email != '') {
          var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
          if (!reg.test(this.orderInvoice.invoice_email)) {
            this.$refs.invoicePopup.open();
            this.$util.showToast({
              title: "请填写正确的邮箱地址" });

            return false;
          }
        }
        if (this.orderInvoice.invoice_content == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请选择发票内容" });

          return false;
        }

      }
      return true;
    },
    // 保存发票信息
    saveInvoice: function saveInvoice() {
      if (this.invoiceVerify()) {
        this.orderPaymentData.shop_goods_list = this.orderInvoice;
        this.orderCalculate();
        this.closePopup('invoicePopup');
      }
    },
    bindTimeChange: function bindTimeChange(e) {
      var time = e.target.value;
      this.orderCreateData.delivery[e.currentTarget.dataset.siteid].buyer_ask_delivery_time = time;
      this.orderCalculate();
      this.$forceUpdate();
    },
    toShopDetail: function toShopDetail(e) {
      this.$util.redirectTo('/otherpages/shop/index/index', {
        site_id: e });

    },
    navigateTo: function navigateTo(sku_id) {
      this.$util.redirectTo('/pages/goods/detail/detail', {
        sku_id: sku_id });

    },
    // 显示选择支付方式弹框
    openChoosePayment: function openChoosePayment() {
      uni.setStorageSync('paySource', '');
      if (this.verify()) this.$refs.choosePaymentPopup.open();
    } },

  onShow: function onShow() {
    // 刷新多语言
    this.$langConfig.refresh();

    if (uni.getStorageSync('addressBack')) {
      uni.removeStorageSync('addressBack');
    }

    // 判断登录
    if (!uni.getStorageSync('token')) {
      this.$util.redirectTo('/pages/login/login/login');
    } else {
      this.getOrderPaymentData();
    }

    this.isIphoneX = this.$util.uniappIsIPhoneX();
  },
  onHide: function onHide() {
    if (this.$refs.loadingCover) this.$refs.loadingCover.show();
  },
  computed: {
    // 余额抵扣
    balanceDeduct: function balanceDeduct() {
      if (this.orderPaymentData.member_account.balance_total <= parseFloat(this.orderPaymentData.order_money).toFixed(2)) {
        return parseFloat(this.orderPaymentData.member_account.balance_total).toFixed(2);
      } else {
        return parseFloat(this.orderPaymentData.order_money).toFixed(2);
      }
    } },

  filters: {
    // 金额格式化输出
    moneyFormat: function moneyFormat(money) {
      return parseFloat(money).toFixed(2);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 510:
/*!************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/bargain/public/js/detail.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _htmlParser = _interopRequireDefault(__webpack_require__(/*! @/common/js/html-parser */ 206));
var _wxJssdk = __webpack_require__(/*! @/common/js/wx-jssdk.js */ 151);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _regeneratorRuntime() {"use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return exports;};var exports = {},Op = Object.prototype,hasOwn = Op.hasOwnProperty,$Symbol = "function" == typeof Symbol ? Symbol : {},iteratorSymbol = $Symbol.iterator || "@@iterator",asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];}try {define({}, "");} catch (err) {define = function define(obj, key, value) {return obj[key] = value;};}function wrap(innerFn, outerFn, self, tryLocsList) {var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,generator = Object.create(protoGenerator.prototype),context = new Context(tryLocsList || []);return generator._invoke = function (innerFn, self, context) {var state = "suspendedStart";return function (method, arg) {if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {if ("throw" === method) throw arg;return doneResult();}for (context.method = method, context.arg = arg;;) {var delegate = context.delegate;if (delegate) {var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {if (delegateResult === ContinueSentinel) continue;return delegateResult;}}if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);} else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };}"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);}};}(innerFn, self, context), generator;}function tryCatch(fn, obj, arg) {try {return { type: "normal", arg: fn.call(obj, arg) };} catch (err) {return { type: "throw", arg: err };}}exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {return this;});var getProto = Object.getPrototypeOf,NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {["next", "throw", "return"].forEach(function (method) {define(prototype, method, function (arg) {return this._invoke(method, arg);});});}function AsyncIterator(generator, PromiseImpl) {function invoke(method, arg, resolve, reject) {var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {var result = record.arg,value = result.value;return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {invoke("next", value, resolve, reject);}, function (err) {invoke("throw", err, resolve, reject);}) : PromiseImpl.resolve(value).then(function (unwrapped) {result.value = unwrapped, resolve(result);}, function (error) {return invoke("throw", error, resolve, reject);});}reject(record.arg);}var previousPromise;this._invoke = function (method, arg) {function callInvokeWithMethodAndArg() {return new PromiseImpl(function (resolve, reject) {invoke(method, arg, resolve, reject);});}return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();};}function maybeInvokeDelegate(delegate, context) {var method = delegate.iterator[context.method];if (undefined === method) {if (context.delegate = null, "throw" === context.method) {if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);}function pushTryEntry(locs) {var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);}function resetTryEntry(entry) {var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;}function Context(tryLocsList) {this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);}function values(iterable) {if (iterable) {var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {var i = -1,next = function next() {for (; ++i < iterable.length;) {if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;}return next.value = undefined, next.done = !0, next;};return next.next = next;}}return { next: doneResult };}function doneResult() {return { value: undefined, done: !0 };}return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));}, exports.mark = function (genFun) {return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;}, exports.awrap = function (arg) {return { __await: arg };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {return this;}), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {return result.done ? result.value : iter.next();});}, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {return this;}), define(Gp, "toString", function () {return "[object Generator]";}), exports.keys = function (object) {var keys = [];for (var key in object) {keys.push(key);}return keys.reverse(), function next() {for (; keys.length;) {var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;}return next.done = !0, next;};}, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);}}, stop: function stop() {this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;}, dispatchException: function dispatchException(exception) {if (this.done) throw exception;var context = this;function handle(loc, caught) {return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;}for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i],record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {var hasCatch = hasOwn.call(entry, "catchLoc"),hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);} else if (hasCatch) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);} else {if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);}}}}, abrupt: function abrupt(type, arg) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {var finallyEntry = entry;break;}}finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);}, complete: function complete(record, afterLoc) {if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;}, finish: function finish(finallyLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;}}, catch: function _catch(tryLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {var record = entry.completion;if ("throw" === record.type) {var thrown = record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield: function delegateYield(iterable, resultName, nextLoc) {return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;} }, exports;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =



{
  data: function data() {
    return {
      bargain_id: 0,
      skuId: 0,

      // 商品详情
      goodsSkuDetail: {
        goods_id: 0,
        goods_service: [] },

      // 店铺详情
      shopInfo: {
        logo: '',
        shop_baozh: 0,
        shop_qtian: 0,
        shop_zhping: 0,
        shop_erxiaoshi: 0,
        shop_tuihuo: 0,
        shop_shiyong: 0,
        shop_shiti: 0,
        shop_xiaoxie: 0 },


      cartCount: 0, // 购物车商品数量
      whetherCollection: 0,

      // 媒体,图片,视频

      // 解决每个商品SKU图片数量不同时，无法切换到第一个，导致轮播图显示不出来
      swiperInterval: 1,
      swiperAutoplay: false,
      swiperCurrent: 1,
      switchMedia: 'img',

      isIphoneX: false, //判断手机是否是iphoneX以上

      poster: "-1", //海报
      posterMsg: "", //海报错误信息
      posterHeight: 0,

      //评价
      goodsEvaluate: {
        member_headimg: '',
        member_name: '',
        content: '',
        images: [],
        create_time: 0,
        sku_name: '' },

      memberId: 0,
      contactData: {
        title: '',
        path: '',
        img: '' },

      detailTab: 0,
      service: null,
      showKefu: 0,
      // 是否可分享到好物圈
      goodsCircle: false,
      evaluateConfig: {
        evaluate_audit: 1,
        evaluate_show: 0,
        evaluate_status: 1 } };


  },
  onLoad: function onLoad(data) {var _this = this;
    this.bargain_id = data.bargain_id || 0;
    this.isIphoneX = this.$util.uniappIsIPhoneX();
    if (data.source_member) uni.setStorageSync('source_member', data.source_member);
    // 小程序扫码进入
    if (data.scene) {
      var sceneParams = decodeURIComponent(data.scene);
      sceneParams = sceneParams.split('&');
      if (sceneParams.length) {
        sceneParams.forEach(function (item) {
          if (item.indexOf('bargain_id') != -1) _this.bargain_id = item.split('-')[1];
          if (item.indexOf('source_member') != -1) uni.setStorageSync('source_member', item.split('-')[1]);
        });
      }
    }
    // this.getService();
  },
  onShow: function onShow() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {return _regeneratorRuntime().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:

              // 刷新多语言
              _this2.$langConfig.refresh();

              _this2.$store.dispatch('getAddonIsexit').then( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                          data.bargain) {_context.next = 5;break;}
                          _this2.$util.showToast({
                            title: '砍价未开启',
                            mask: true });

                          setTimeout(function () {
                            _this2.$util.redirectTo('/pages/index/index/index', {}, 'redirectTo');
                          }, 1000);_context.next = 12;break;case 5:

                          if (uni.getStorageSync('token')) {
                            _this2.getCartCount();
                            _this2.getMemberId();
                          }
                          _this2.canGoConnect();
                          _this2.getKekuConfig();
                          //同步获取商品详情
                          _context.next = 10;return _this2.getGoodsSkuDetail();case 10:

                          //修改商品信息
                          _this2.modifyGoodsInfo();

                          // 评价设置
                          _this2.getEvaluateConfig();case 12:case "end":return _context.stop();}}}, _callee);}));return function (_x) {return _ref.apply(this, arguments);};}());case 2:case "end":return _context2.stop();}}}, _callee2);}))();


  },
  methods: {
    canGoConnect: function canGoConnect() {var _this3 = this;
      this.$api.sendRequest({
        url: "/api/addon/addonisexit",
        success: function success(res) {
          if (res.code == 0 && res.data) {
            _this3.showKefu = res.data.servicer;
          }
        } });

    },
    //联系客服
    goConnect: function goConnect() {
      if (uni.getStorageSync('token')) {
        var data = {
          site_id: this.shopInfo.site_id,
          sku_id: this.goodsSkuDetail.sku_id,
          type: 'bargain',
          type_id: this.goodsSkuDetail.bargain_id };

        this.$util.redirectTo('/otherpages/chat/room/room', data);
        return false;
      } else {
        this.$refs.login.open('/pages/goods/detail/detail?sku_id=' + this.goodsSkuDetail.sku_id);
        return;
      }
    },
    // 获取砍价商品详情
    getGoodsSkuDetail: function getGoodsSkuDetail() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {var res, data, goods_attr_format, i, j;return _regeneratorRuntime().wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  _this4.$api.sendRequest({
                    url: '/bargain/api/goods/detail',
                    async: false,
                    data: {
                      bargain_id: _this4.bargain_id } }));case 2:res = _context3.sent;


                data = res.data;
                if (data.goods_sku_detail != null) {
                  _this4.goodsSkuDetail = data.goods_sku_detail;
                  _this4.shopInfo = data.shop_info;
                  _this4.goodsSkuDetail.stock = _this4.goodsSkuDetail.bargain_stock;

                  _this4.skuId = _this4.goodsSkuDetail.sku_id;

                  _this4.goodsSkuDetail.goods_service = [];
                  if (_this4.shopInfo.shop_baozh == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '保证服务',
                      desc: '保证服务' });

                  }

                  if (_this4.shopInfo.shop_qtian == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '7天退换',
                      desc: '满足7天无理由退换货申请的前提下，包邮商品需要买家承担退货邮费，非包邮商品需要买家承担发货和退货邮费' });

                  }

                  if (_this4.shopInfo.shop_zhping == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '正品保障',
                      desc: '商品支持正品保障服务' });

                  }

                  if (_this4.shopInfo.shop_erxiaoshi == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '两小时发货',
                      desc: '付款后2小时内发货' });

                  }

                  if (_this4.shopInfo.shop_tuihuo == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '退货承诺',
                      desc: '退货承诺' });

                  }

                  if (_this4.shopInfo.shop_shiyong == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '试用中心',
                      desc: '试用中心' });

                  }

                  if (_this4.shopInfo.shop_shiti == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '实体验证',
                      desc: '实体验证' });

                  }

                  if (_this4.shopInfo.shop_xiaoxie == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '消协保证',
                      desc: '如有商品质量问题、描述不符或未收到货等，您有权申请退款或退货，来回邮费由卖家承担' });

                  }

                  //砍价倒计时
                  if (_this4.goodsSkuDetail.end_time - res.timestamp > 0) {
                    _this4.goodsSkuDetail.timeMachine = _this4.$util.countDown(_this4.goodsSkuDetail.end_time - res.timestamp);
                  } else {
                    _this4.$util.showToast({
                      title: "活动已结束" });

                    setTimeout(function () {
                      _this4.$util.redirectTo('/pages/goods/detail/detail', {
                        sku_id: _this4.goodsSkuDetail.sku_id },
                      'redirectTo');
                    }, 1000);
                  }

                  //媒体
                  if (_this4.goodsSkuDetail.video_url) _this4.switchMedia = "video";

                  if (_this4.goodsSkuDetail.sku_images) _this4.goodsSkuDetail.sku_images = _this4.goodsSkuDetail.sku_images.split(",");else
                  _this4.goodsSkuDetail.sku_images = [];

                  // 多规格时合并主图
                  if (_this4.goodsSkuDetail.goods_spec_format && _this4.goodsSkuDetail.goods_image) {
                    _this4.goodsSkuDetail.goods_image = _this4.goodsSkuDetail.goods_image.split(",");
                    _this4.goodsSkuDetail.sku_images = _this4.goodsSkuDetail.sku_images.concat(_this4.goodsSkuDetail.goods_image);
                  }

                  _this4.goodsSkuDetail.unit = _this4.goodsSkuDetail.unit || "件";

                  _this4.goodsSkuDetail.show_price = _this4.goodsSkuDetail.floor_price;

                  _this4.goodsSkuDetail.save_price = _this4.goodsSkuDetail.price - _this4.goodsSkuDetail.show_price > 0 ? (_this4.goodsSkuDetail.
                  price - _this4.goodsSkuDetail.show_price).toFixed(2) : 0;

                  // 当前商品SKU规格
                  if (_this4.goodsSkuDetail.sku_spec_format) _this4.goodsSkuDetail.sku_spec_format = JSON.parse(_this4.goodsSkuDetail.sku_spec_format);

                  // 商品属性
                  if (_this4.goodsSkuDetail.goods_attr_format) {
                    goods_attr_format = JSON.parse(_this4.goodsSkuDetail.goods_attr_format);
                    _this4.goodsSkuDetail.goods_attr_format = _this4.$util.unique(goods_attr_format, "attr_id");
                    for (i = 0; i < _this4.goodsSkuDetail.goods_attr_format.length; i++) {
                      for (j = 0; j < goods_attr_format.length; j++) {
                        if (_this4.goodsSkuDetail.goods_attr_format[i].attr_id == goods_attr_format[j].attr_id && _this4.goodsSkuDetail.goods_attr_format[
                        i].attr_value_id != goods_attr_format[j].attr_value_id) {
                          _this4.goodsSkuDetail.goods_attr_format[i].attr_value_name += "、" + goods_attr_format[j].attr_value_name;
                        }
                      }
                    }
                  }

                  // 商品SKU格式
                  if (_this4.goodsSkuDetail.goods_spec_format) _this4.goodsSkuDetail.goods_spec_format = JSON.parse(_this4.goodsSkuDetail.goods_spec_format);

                  _this4.$langConfig.title(_this4.goodsSkuDetail.goods_name);

                  // 商品详情
                  // if (this.goodsSkuDetail.goods_content) this.goodsSkuDetail.goods_content = htmlParser(this.goodsSkuDetail.goods_content);

                  _this4.contactData = {
                    title: _this4.goodsSkuDetail.sku_name,
                    path: '/promotionpages/bargain/detail/detail?bargain_id=' + _this4.bargain_id,
                    img: _this4.$util.img(_this4.goodsSkuDetail.sku_image, {
                      size: 'big' }) };



                  if (uni.getStorageSync('token')) {
                    _this4.getWhetherCollection();
                  }

                  _this4.setWechatShare();

                  // if (this.$refs.goodsPromotion) this.$refs.goodsPromotion.refresh(this.goodsSkuDetail.goods_promotion);

                  if (_this4.$refs.loadingCover) _this4.$refs.loadingCover.hide();


                  _this4.getGoodScircleConfig();

                } else {
                  _this4.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
                }case 5:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    /**
     * 刷新商品详情数据
     * @param {Object} goodsSkuDetail
     */
    refreshGoodsSkuDetail: function refreshGoodsSkuDetail(goodsSkuDetail) {var _this5 = this;
      Object.assign(this.goodsSkuDetail, goodsSkuDetail);
      this.goodsSkuDetail.unit = this.goodsSkuDetail.unit || "件";
      // if (this.$refs.goodsPromotion) this.$refs.goodsPromotion.refresh(this.goodsSkuDetail.goods_promotion);

      // 解决轮播图数量不一致时，切换到第一个
      if (this.swiperCurrent > this.goodsSkuDetail.sku_images.length) {
        this.swiperAutoplay = true;
        this.swiperCurrent = 1;
        setTimeout(function () {
          _this5.swiperAutoplay = false;
        }, 40);
      }
    },
    goHome: function goHome() {
      // this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
      this.$util.redirectTo('/otherpages/shop/index/index', {
        site_id: this.shopInfo.site_id });

    },
    goCart: function goCart() {
      this.$util.redirectTo('/pages/goods/cart/cart', {}, 'reLaunch');
    },
    // 发起砍价
    bargain: function bargain() {var _this6 = this;
      if (!uni.getStorageSync('token')) {
        this.$refs.login.open('/promotionpages/bargain/detail/detail?bargain_id=' + this.bargain_id);
        return;
      }
      if (this.goodsSkuDetail.sku_spec_format) {
        this.$refs.goodsSku.show("bargain", function () {});
      } else {
        this.$api.sendRequest({
          url: "/bargain/api/bargain/launch",
          data: {
            id: this.goodsSkuDetail.id },

          success: function success(res) {
            if (res.code == 0) {
              _this6.$util.redirectTo('/promotionpages/bargain/launch/launch', {
                id: res.data },
              'redirectTo');
            } else {
              _this6.$util.showToast({
                title: res.message });

            }
          } });

      }
    },
    swiperChange: function swiperChange(e) {
      this.swiperCurrent = e.detail.current + 1;
    },


    //-------------------------------------服务-------------------------------------

    openMerchantsServicePopup: function openMerchantsServicePopup() {
      this.$refs.merchantsServicePopup.open();
    },
    closeMerchantsServicePopup: function closeMerchantsServicePopup() {
      this.$refs.merchantsServicePopup.close();
    },



    //-------------------------------------属性-------------------------------------

    openAttributePopup: function openAttributePopup() {
      this.$refs.attributePopup.open();
    },
    closeAttributePopup: function closeAttributePopup() {
      this.$refs.attributePopup.close();
    },

    //-------------------------------------属性-------------------------------------



    //-------------------------------------评价-------------------------------------
    //商品评论列表
    getGoodsEvaluate: function getGoodsEvaluate() {var _this7 = this;
      this.$api.sendRequest({
        url: "/api/goodsevaluate/firstinfo",
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          var data = res.data;
          if (data) {
            _this7.goodsEvaluate = data;
            if (_this7.goodsEvaluate.images) _this7.goodsEvaluate.images = _this7.goodsEvaluate.images.split(",");
            if (_this7.goodsEvaluate.is_anonymous == 1) _this7.goodsEvaluate.member_name = _this7.goodsEvaluate.member_name.replace(
            _this7.goodsEvaluate.member_name.substring(1, _this7.goodsEvaluate.member_name.length - 1), '***');
          }
        } });

    },

    // 预览评价图片
    previewEvaluate: function previewEvaluate(index, field) {
      var paths = [];
      for (var i = 0; i < this.goodsEvaluate[field].length; i++) {
        paths.push(this.$util.img(this.goodsEvaluate[field][i]));
      }
      uni.previewImage({
        current: index,
        urls: paths });

    },


    //-------------------------------------关注-------------------------------------

    //获取用户是否关注
    getWhetherCollection: function getWhetherCollection() {var _this8 = this;
      this.$api.sendRequest({
        url: "/api/goodscollect/iscollect",
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          _this8.whetherCollection = res.data;
        } });

    },

    editCollection: function editCollection() {var _this9 = this;
      if (uni.getStorageSync('token')) {

        //未关注添加关注
        if (this.whetherCollection == 0) {
          this.$api.sendRequest({
            url: "/api/goodscollect/add",
            data: {
              sku_id: this.skuId },

            success: function success(res) {
              var data = res.data;
              if (data > 0) {
                _this9.whetherCollection = 1;
              }
            } });

        } else {
          //已关注取消关注
          this.$api.sendRequest({
            url: "/api/goodscollect/delete",
            data: {
              goods_id: this.goodsSkuDetail.goods_id },

            success: function success(res) {
              var data = res.data;
              if (data > 0) {
                _this9.whetherCollection = 0;
              }
            } });

        }
      } else {
        this.$refs.login.open('/promotionpages/bargain/detail/detail?bargain_id=' + this.bargain_id);
      }
    },
    //获取购物车数量
    getCartCount: function getCartCount() {var _this10 = this;
      this.$store.dispatch('getCartNumber').then(function (e) {
        _this10.cartCount = e;
      });
    },
    //更新商品信息
    modifyGoodsInfo: function modifyGoodsInfo() {
      //更新商品点击量
      this.$api.sendRequest({
        url: "/api/goods/modifyclicks",
        data: {
          sku_id: this.skuId,
          site_id: this.goodsSkuDetail.site_id },

        success: function success(res) {} });


      //添加足迹
      this.$api.sendRequest({
        url: "/api/goodsbrowse/add",
        data: {
          sku_id: this.skuId },

        success: function success(res) {} });

    },


    //-------------------------------------分享-------------------------------------
    // 打开分享弹出层
    openSharePopup: function openSharePopup() {
      this.$refs.sharePopup.open();
    },
    // 关闭分享弹出层
    closeSharePopup: function closeSharePopup() {
      this.$refs.sharePopup.close();
    },
    //-------------------------------------海报-------------------------------------

    // 打开海报弹出层
    openPosterPopup: function openPosterPopup() {var _this11 = this;
      this.getGoodsPoster();
      this.$refs.sharePopup.close();
      this.$refs.posterPopup.open();
      if (this.poster != '-1') {
        setTimeout(function () {
          var view = uni.createSelectorQuery().in(_this11).select(".poster-layer .image-wrap");
          view.fields({
            size: true },
          function (data) {
            var posterWhith = data.width;
            var ratio = parseFloat((740 / posterWhith).toFixed(2));
            if (uni.getStorageSync('token')) {
              _this11.posterHeight = parseInt(1120 / ratio);
            } else {
              _this11.posterHeight = parseInt(1100 / ratio);
            }
          }).exec();
        }, 100);
      }
    },
    // 关闭海报弹出层
    closePosterPopup: function closePosterPopup() {
      this.$refs.posterPopup.close();
    },
    //生成海报
    getGoodsPoster: function getGoodsPoster() {var _this12 = this;
      //活动海报信息
      var qrcode_param = {
        sku_id: this.skuId,
        id: this.goodsSkuDetail.id };

      if (this.memberId) qrcode_param.source_member = this.memberId;
      this.$api.sendRequest({
        url: "/bargain/api/goods/poster",
        data: {
          page: '/promotionpages/bargain/detail/detail',
          qrcode_param: JSON.stringify(qrcode_param) },

        success: function success(res) {
          if (res.code == 0) {
            _this12.poster = res.data.path + "?time=" + new Date().getTime();
          } else {
            _this12.posterMsg = res.message;
          }
        } });

    },
    // 预览图片
    previewMedia: function previewMedia(index) {
      var paths = [];
      for (var i = 0; i < this.goodsSkuDetail.sku_images.length; i++) {
        paths.push(this.$util.img(this.goodsSkuDetail.sku_images[i], {
          size: 'big' }));

      }
      uni.previewImage({
        current: index,
        urls: paths });

    },
    swiperImgError: function swiperImgError(index) {
      this.goodsSkuDetail.sku_images[index] = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },

    //小程序中保存海报
    saveGoodsPoster: function saveGoodsPoster() {var _this13 = this;
      var url = this.$util.img(this.poster);
      uni.downloadFile({
        url: url,
        success: function success(res) {
          if (res.statusCode === 200) {
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function success() {
                _this13.$util.showToast({
                  title: "保存成功" });

              },
              fail: function fail() {
                _this13.$util.showToast({
                  title: "保存失败，请稍后重试" });

              } });

          }
        } });

    },

    getMemberId: function getMemberId() {var _this14 = this;
      this.$api.sendRequest({
        url: "/api/member/id",
        success: function success(res) {
          if (res.code >= 0) {
            _this14.memberId = res.data;
          }
        } });

    },
    //售后保障查询
    getService: function getService() {var _this15 = this;
      this.$api.sendRequest({
        url: '/api/goods/aftersale',
        success: function success(res) {
          if (res.code == 0 && res.data) {
            var data = res.data.content;
            if (res.data.content) _this15.service = (0, _htmlParser.default)(res.data.content);
          }
        } });

    },
    /**
     * 设置微信公众号分享
     */
    setWechatShare: function setWechatShare() {
      // 微信公众号分享






























    },

    /**
     *	获取是否开启微信圈子 
     */
    getGoodScircleConfig: function getGoodScircleConfig() {var _this16 = this;
      this.$api.sendRequest({
        url: '/goodscircle/api/config/info',
        success: function success(res) {
          if (res.code == 0) {
            if (res.data.is_use) {
              _this16.goodsSyncToGoodsCircle();
            }
          }
        } });

    },
    /**
     *	将商品同步到微信圈子 
     */
    goodsSyncToGoodsCircle: function goodsSyncToGoodsCircle() {var _this17 = this;
      this.$api.sendRequest({
        url: '/goodscircle/api/goods/sync',
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          if (res.code == 0) {
            _this17.goodsCircle = true;
          }
        } });

    },
    /**
     * 将商品推荐到微信圈子
     */
    openBusinessView: function openBusinessView() {var _this18 = this;
      if (wx.openBusinessView) {
        wx.openBusinessView({
          businessType: 'friendGoodsRecommend',
          extraData: {
            product: {
              item_code: this.goodsSkuDetail.goods_id,
              title: this.goodsSkuDetail.sku_name,
              image_list: this.goodsSkuDetail.sku_images.map(function (ele) {
                return _this18.$util.img(ele);
              }) } },


          success: function success(res) {
            console.log('success', res);
          },
          fail: function fail(res) {
            console.log('fail', res);
          } });

      }
    },

    getEvaluateConfig: function getEvaluateConfig() {var _this19 = this;
      this.$api.sendRequest({
        url: '/api/goodsevaluate/config',
        success: function success(res) {
          if (res.code == 0) {
            var data = res.data;
            _this19.evaluateConfig = data;
            if (_this19.evaluateConfig.evaluate_show == 1) {
              //商品评论
              _this19.getGoodsEvaluate();
            }
          }
        } });

    },
    copyUrl: function copyUrl() {var _this20 = this;
      var text = this.$config.h5Domain + '/promotionpages/bargain/detail/detail?bargain_id=' + this.bargain_id;
      if (this.memberId) text += '&source_member=' + this.memberId;
      this.$util.copy(text, function () {
        _this20.closeSharePopup();
      });
    },
    getKekuConfig: function getKekuConfig() {var _this21 = this;
      this.$api.sendRequest({
        url: '/api/config/servicer',
        success: function success(res) {
          if (res.code == 0) {
            _this21.kefuConfig = res.data;
          }
        } });

    },
    toEvaluateDetail: function toEvaluateDetail(id) {
      this.$util.redirectTo('/otherpages/goods/evaluate/evaluate', {
        goods_id: id });

    },
    navigate: function navigate(href, e) {
      //比如点击a标签，打开某个webview并传输url
      this.$util.redirectTo('/otherpages/webview/webview', {
        link: encodeURIComponent(href) });

    },
    //h5播放视频
    openVideo: function openVideo(url, video_img) {
      // this.$refs.videoPopup.open();
      this.$util.redirectTo('/otherpages/goods/preview-video', {
        video_url: url,
        video_img: video_img });

    },
    errorShopLogo: function errorShopLogo() {
      this.shopInfo.avatar = this.$util.getDefaultImage().default_shop_img;
      this.$forceUpdate();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 541:
/*!*************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/bargain/public/js/payment.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      isIphoneX: false,
      orderCreateData: {
        is_balance: 0,
        pay_password: '' },

      orderPaymentData: {
        member_account: {
          balance: 0,
          is_pay_password: 0 },

        shop_goods_list: {
          site_name: '',
          express_type: [],
          invoice_config: {
            invoice_status: 0 } } },



      orderInvoice: {
        is_invoice: 0, //是否需要发票
        invoice_type: 1, //发票类型电子、纸质
        invoice_title: '', //发票抬头
        invoice_title_type: 1, // 抬头类型
        invoice_full_address: '', //邮寄地址
        is_tax_invoice: 0, //是否需要增值税发票
        invoice_email: '', // 邮箱
        invoice_content: '', //发票内容
        taxpayer_number: '' //纳税人识别号
      },
      isSub: false,
      tempData: null,
      siteDelivery: {
        site_id: 0,
        data: [] } };


  },
  methods: {
    // 显示弹出层
    openPopup: function openPopup(ref) {
      this.$refs[ref].open();
    },
    // 关闭弹出层
    closePopup: function closePopup(ref) {
      if (this.tempData) {
        Object.assign(this.orderCreateData, this.tempData);
        Object.assign(this.orderPaymentData, this.tempData);
        this.tempData = null;
        this.$forceUpdate();
      }
      this.$refs[ref].close();
    },
    // 选择收货地址，默认有定位
    selectAddress: function selectAddress() {
      var params = {
        back: '/promotionpages/bargain/payment/payment',
        local: 0,
        type: 1 };

      // 外卖配送需要定位地址
      // if (this.orderPaymentData.delivery.delivery_type == 'local') {
      // 	params.local = 1;
      // 	params.type = 2;
      // }
      this.$util.redirectTo('/otherpages/member/address/address', params);
    },
    // 获取订单初始化数据
    getOrderPaymentData: function getOrderPaymentData() {var _this = this;
      this.orderCreateData = uni.getStorageSync('bargainOrderCreateData');
      var pay_flag = uni.getStorageSync("pay_flag"); // 支付中标识，防止返回时，提示,跳转错误
      if (!this.orderCreateData) {
        if (pay_flag == 1) {
          uni.removeStorageSync("pay_flag");
        } else {
          this.$util.showToast({
            title: '未获取到创建订单所需数据！' });

          setTimeout(function () {
            _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }, 1000);
        }
        return;
      }

      // 获取经纬度
      var location = uni.getStorageSync('location');
      if (location) {
        this.orderCreateData = Object.assign(this.orderCreateData, location);
      }

      this.orderCreateData.buyer_message = '';

      this.$api.sendRequest({
        url: '/bargain/api/ordercreate/payment',
        data: this.orderCreateData,
        success: function success(res) {
          if (res.code >= 0) {
            _this.orderPaymentData = res.data;
            _this.orderPaymentData.timestamp = res.timestamp;
            _this.handlePaymentData();
            if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
          } else {
            _this.$util.showToast({
              title: '未获取到创建订单所需数据！' });

            setTimeout(function () {
              _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
            }, 1000);
          }
        },
        fail: function fail(res) {
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        } });

    },
    // 处理结算订单数据
    handlePaymentData: function handlePaymentData() {
      this.orderCreateData.delivery = {};
      this.orderCreateData.invoice = {};
      this.orderCreateData.is_balance = 0;
      this.orderCreateData.pay_password = '';

      var data = this.orderPaymentData;

      var h = new Date().getHours().toString();
      var m = new Date().getMinutes().toString();
      if (h.length == 1) {
        h = '0' + h;
      }
      if (m.length == 1) {
        m = '0' + m;
      }
      var nowTime = h + ':' + m;
      var weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

      // 获取时间，必须是字符串,跟后端一致
      var index_weeks = ['0', '1', '2', '3', '4', '5', '6'];
      var curr_week = index_weeks[new Date().getDay()];

      if (data.shop_goods_list.express_type != undefined && data.shop_goods_list.express_type[0] != undefined) {
        var express_type = data.shop_goods_list.express_type;
        this.orderCreateData.delivery.delivery_type = express_type[0].name;
        this.orderCreateData.delivery.delivery_type_name = express_type[0].title;
        this.orderCreateData.delivery.store_id = 0;

        // 如果默认配送方式是门店配送
        if (express_type[0].name == 'store') {
          if (express_type[0].store_list[0] != undefined) {
            this.orderCreateData.delivery.store_id = express_type[0].store_list[0].store_id;
          }
        }
      }

      if (data.is_virtual == 0 && data.shop_goods_list.local_config) {

        // 是否显示时间选择
        if (data.shop_goods_list.local_config.info && data.shop_goods_list.local_config.info.time_is_open == 1) {
          this.orderCreateData.delivery.showTimeBar = true;
          this.orderCreateData.delivery.buyer_ask_delivery_time = nowTime;
          // 当日是否支持配送
          if (data.shop_goods_list.local_config.info.time_week.length == 0 ||
          data.shop_goods_list.local_config.info.time_week.length == 7 ||
          data.shop_goods_list.local_config.info.time_week.indexOf(curr_week) > -1) {
            this.orderCreateData.delivery.canLocalDelicery = true;
          } else {
            this.orderCreateData.delivery.canLocalDelicery = false;
          }

          if (data.shop_goods_list.local_config.info.time_type == 0) {
            this.orderCreateData.delivery.deliveryWeek = "全天";
          } else if (data.shop_goods_list.local_config.info.time_week.length > 0) {
            if (data.shop_goods_list.local_config.info.time_week.length == 7) {
              this.orderCreateData.delivery.deliveryWeek = "全天";
              this.orderCreateData.delivery.showTime = false;
            } else {
              this.orderCreateData.delivery.showTime = true;
              // 判断配送时间是连续还是间隔
              var timeWeek = data.shop_goods_list.local_config.info.time_week;
              var is_interval = false; // 是否间隔
              for (var i = 0; i < timeWeek.length; i++) {
                if (i + 1 < timeWeek.length) {
                  var difference = timeWeek[i + 1] - timeWeek[i];
                  if (difference > 1) {
                    is_interval = true;
                    break;
                  }
                }
              }

              if (is_interval) {
                var temp = [];
                for (var i = 0; i < timeWeek.length; i++) {
                  temp.push(weeks[timeWeek[i]]);
                }
                this.orderCreateData.delivery.deliveryWeek = temp.join("、");
              } else {
                this.orderCreateData.delivery.deliveryWeek = weeks[timeWeek[0]] + "至" + weeks[timeWeek[timeWeek.length -
                1]];
              }
            }
          } else {
            this.orderCreateData.delivery.deliveryWeek = "店铺未设置配送时间";
          }

          // picker组件时间起始
          var start_time = data.shop_goods_list.local_config.info.start_time;
          this.orderCreateData.delivery.start_time = this.getTimeStr(start_time);

          var end_time = data.shop_goods_list.local_config.info.end_time;
          this.orderCreateData.delivery.end_time = this.getTimeStr(end_time);

          var current_time = new Date(this.$util.timeStampTurnTime(data.timestamp));
          var hour = current_time.getHours();
          var minute = current_time.getMinutes();

          var start_hour = parseInt(this.orderCreateData.delivery.start_time.split(":")[0]);
          var start_minute = parseInt(this.orderCreateData.delivery.start_time.split(":")[1]);

          var end_hour = parseInt(this.orderCreateData.delivery.end_time.split(":")[0]);
          var end_minute = parseInt(this.orderCreateData.delivery.end_time.split(":")[1]);

          // 检测当天是否能够配送，然后判断送达时间。不在配送时间当日不能下单，例：配送时间是周一到周五，那么周末不能下单，周一到周五可以下单
          if (this.orderCreateData.delivery.canLocalDelicery) {

            // 判断是否全天
            if (!(start_hour == end_hour && start_minute == end_minute)) {

              // 当前时间早于配送时间，送达时间：开始时间~结束时间
              if (hour < start_hour || hour == start_hour && minute < start_minute) {
                this.orderCreateData.delivery.buyer_ask_delivery_time = (start_hour.toString().length == 1 ? "0" + start_hour :
                start_hour) + ':' + (
                start_minute.toString().length == 1 ? "0" + start_minute : start_minute);
              }

              // if (((hour > start_hour && hour < end_hour) || (hour == start_hour && minute > start_minute) || (hour ==
              // 		start_hour && minute >= start_minute && hour < end_hour))) {
              // }

              // 当前时间晚于配送时间，送达时间隐藏，不能下单
              if (hour > end_hour || hour == end_hour && minute > end_minute) {
                this.orderCreateData.delivery.canLocalDelicery = false;
              }
            }

          }

        } else {
          this.orderCreateData.delivery.showTimeBar = false;
          this.orderCreateData.delivery.deliveryWeek = "店铺未开启配送时间";
        }

      }

      data.shop_goods_list.goods_list.forEach(function (v) {
        if (typeof v.sku_spec_format == 'string') {
          if (v.sku_spec_format) {
            v.sku_spec_format = JSON.parse(v.sku_spec_format);
          } else {
            v.sku_spec_format = [];
          }
        }
      });

      if (this.orderPaymentData.is_virtual) this.orderCreateData.member_address = {
        mobile: '' };


      Object.assign(data, this.orderCreateData);
      this.orderCalculate();
    },
    // 转化时间字符串
    getTimeStr: function getTimeStr(val) {
      var h = parseInt(val / 3600).toString();
      var m = parseInt(val % 3600 / 60).toString();
      if (m.length == 1) {
        m = '0' + m;
      }
      if (h.length == 1) {
        h = '0' + h;
      }
      return h + ':' + m;
    },
    // 订单计算
    orderCalculate: function orderCalculate() {var _this2 = this;
      var siteId = this.orderPaymentData.shop_goods_list.site_id;

      var deliveryObj = {};
      deliveryObj[siteId] = this.orderCreateData.delivery;

      var messageObj = {};
      messageObj[siteId] = this.orderCreateData.buyer_message;

      //店铺发票
      if (this.orderPaymentData.shop_goods_list.is_invoice) {
        this.orderCreateData.invoice[siteId] = {};
        if (!Array.isArray(this.orderPaymentData.shop_goods_list.invoice_config)) {
          this.orderCreateData.invoice[siteId].is_invoice = this.orderPaymentData.shop_goods_list.is_invoice;
          this.orderCreateData.invoice[siteId].invoice_type = this.orderPaymentData.shop_goods_list.invoice_type;
          this.orderCreateData.invoice[siteId].invoice_title = this.orderPaymentData.shop_goods_list.invoice_title;
          this.orderCreateData.invoice[siteId].taxpayer_number = this.orderPaymentData.shop_goods_list.taxpayer_number;
          this.orderCreateData.invoice[siteId].invoice_content = this.orderPaymentData.shop_goods_list.invoice_content;
          this.orderCreateData.invoice[siteId].invoice_full_address = this.orderPaymentData.shop_goods_list.invoice_full_address;
          this.orderCreateData.invoice[siteId].is_tax_invoice = this.orderPaymentData.shop_goods_list.is_tax_invoice;
          this.orderCreateData.invoice[siteId].invoice_email = this.orderPaymentData.shop_goods_list.invoice_email;
          this.orderCreateData.invoice[siteId].invoice_title_type = this.orderPaymentData.shop_goods_list.invoice_title_type;
        }
      }

      var data = this.$util.deepClone(this.orderCreateData);
      data.delivery = JSON.stringify(deliveryObj);
      data.invoice = JSON.stringify(data.invoice);
      data.member_address = JSON.stringify(data.member_address);
      data.buyer_message = JSON.stringify(messageObj);

      this.$api.sendRequest({
        url: '/bargain/api/ordercreate/calculate',
        data: data,
        success: function success(res) {
          if (res.code >= 0) {
            _this2.orderPaymentData.member_address = res.data.member_address;
            _this2.orderPaymentData.delivery_money = res.data.delivery_money;
            _this2.orderPaymentData.invoice_money = res.data.invoice_money;
            _this2.orderPaymentData.invoice_delivery_money = res.data.invoice_delivery_money;
            _this2.orderPaymentData.promotion_money = res.data.promotion_money;
            _this2.orderPaymentData.order_money = res.data.order_money;
            _this2.orderPaymentData.balance_money = res.data.balance_money;
            _this2.orderPaymentData.pay_money = res.data.pay_money;
            _this2.orderPaymentData.goods_money = res.data.goods_money;
            _this2.$forceUpdate();
          } else {
            _this2.$util.showToast({
              title: res.message });

          }
        } });

    },
    /**
     * 订单创建
     * @param {String} pay_password 支付密码
     */
    orderCreate: function orderCreate(pay_password) {var _this3 = this;
      if (this.verify()) {
        if (this.isSub) return;
        this.isSub = true;

        if (pay_password) this.orderCreateData.pay_password = pay_password;

        var siteId = this.orderPaymentData.shop_goods_list.site_id;

        var deliveryObj = {};
        deliveryObj[siteId] = this.orderCreateData.delivery;

        var messageObj = {};
        messageObj[siteId] = this.orderCreateData.buyer_message;

        var data = this.$util.deepClone(this.orderCreateData);
        data.delivery = JSON.stringify(deliveryObj);
        data.invoice = JSON.stringify(data.invoice);
        data.member_address = JSON.stringify(data.member_address);
        data.buyer_message = JSON.stringify(messageObj);

        this.$api.sendRequest({
          url: '/bargain/api/ordercreate/create',
          data: data,
          success: function success(res) {
            uni.hideLoading();
            if (res.code >= 0) {
              if (_this3.orderPaymentData.pay_money == 0) {
                _this3.$util.redirectTo('/pages/pay/result/result', {
                  code: res.data },
                'redirectTo');
              } else {
                _this3.$refs.choosePaymentPopup.getPayInfo(res.data);
                _this3.isSub = false;
              }
              // uni.removeStorage({
              // 	key: 'bargainOrderCreateData',
              // 	success: () => {}
              // });
            } else {
              _this3.isSub = false;
              if (res.data.error_code == 10 || res.data.error_code == 12) {
                uni.showModal({
                  title: '订单未创建',
                  content: res.message,
                  confirmText: '去设置',
                  success: function success(res) {
                    if (res.confirm) {
                      _this3.selectAddress();
                    }
                  } });

              } else {
                _this3.$util.showToast({
                  title: res.message });

              }
            }
          },
          fail: function fail(res) {
            uni.hideLoading();
            _this3.isSub = false;
          } });

      }
    },
    // 订单验证
    verify: function verify() {
      if (this.orderPaymentData.is_virtual == 1) {
        if (!this.orderCreateData.member_address.mobile.length) {
          this.$util.showToast({
            title: '请输入您的手机号码' });

          return false;
        }
        var reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
        if (!reg.test(this.orderCreateData.member_address.mobile)) {
          this.$util.showToast({
            title: '请输入正确的手机号码' });

          return false;
        }
      }

      if (this.orderPaymentData.is_virtual == 0) {

        var expressTypeVerify = true;

        for (var key in this.orderPaymentData.shop_goods_list) {
          if (this.orderPaymentData.shop_goods_list.express_type.length == 0) {
            expressTypeVerify = false;
            this.$util.showToast({
              title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】未设置配送方式' });

            break;
          }
        }

        if (!expressTypeVerify) return false;

        if (!this.orderPaymentData.member_address) {
          this.$util.showToast({
            title: '请先选择您的收货地址' });

          return false;
        }

        if (JSON.stringify(this.orderCreateData.delivery) == "{}") {
          this.$util.showToast({
            title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】未设置配送方式' });

          return false;
        }

        if (this.orderCreateData.delivery.delivery_type == 'store' && this.orderCreateData.delivery.store_id == 0) {
          this.$util.showToast({
            title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】没有可提货的门店,请选择其他配送方式' });

          return false;
        }

        if (this.orderCreateData.delivery.delivery_type == 'local') {

          if (this.orderCreateData.delivery.canLocalDelicery) {

            var hour = parseInt(this.orderCreateData.delivery.buyer_ask_delivery_time.split(":")[0]);
            var minute = parseInt(this.orderCreateData.delivery.buyer_ask_delivery_time.split(":")[1]);

            var start_hour = parseInt(this.orderCreateData.delivery.start_time.split(":")[0]);
            var start_minute = parseInt(this.orderCreateData.delivery.start_time.split(":")[1]);

            var end_hour = parseInt(this.orderCreateData.delivery.end_time.split(":")[0]);
            var end_minute = parseInt(this.orderCreateData.delivery.end_time.split(":")[1]);

            // 判断是否全天
            if (!(start_hour == end_hour && start_minute == end_minute)) {

              // 当前时间早于配送时间
              if (hour < start_hour || hour == start_hour && minute < start_minute) {
                this.$util.showToast({
                  title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】送达时间不能小于配送开始时间' });

                return false;
              }

              // 当前时间在配送时间内，送达时间：开始时间~结束时间
              if (!(hour > start_hour && hour < end_hour || hour == start_hour && minute > start_minute || hour ==
              start_hour && minute >= start_minute && hour < end_hour)) {
                this.$util.showToast({
                  title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】送达时间范围：开始时间~结束时间' });

                return false;
              }
            }
          } else {
            this.$util.showToast({
              title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】已休息' });

            return false;
          }

        }

      }

      return true;
    },
    // 显示店铺优惠信息
    openSitePromotion: function openSitePromotion() {
      this.$refs.sitePromotionPopup.open();
    },
    // 显示店铺配送信息
    openSiteDelivery: function openSiteDelivery() {
      this.tempData = {
        delivery: this.$util.deepClone(this.orderPaymentData.delivery) };

      this.$refs.deliveryPopup.open();
    },
    // 选择配送方式
    selectDeliveryType: function selectDeliveryType(data) {
      this.orderCreateData.delivery.delivery_type = data.name;
      this.orderCreateData.delivery.delivery_type_name = data.title;
      this.tempData = {
        delivery: this.$util.deepClone(this.orderPaymentData.delivery) };

      // 如果是门店配送
      if (data.name == 'store') {
        if (data.store_list[0] != undefined) {
          this.orderCreateData.delivery.store_id = data.store_list[0].store_id;
          this.tempData.delivery.store_id = data.store_list[0].store_id;
        }
      }
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.orderCalculate();
      this.$forceUpdate();
    },
    // 选择自提点
    selectPickupPoint: function selectPickupPoint(store_id) {
      this.orderCreateData.delivery.store_id = store_id;
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.orderCalculate();
      this.$forceUpdate();
      this.$refs['deliveryPopup'].close();
    },
    // 使用余额
    useBalance: function useBalance() {
      if (this.orderCreateData.is_balance) this.orderCreateData.is_balance = 0;else
      this.orderCreateData.is_balance = 1;
      this.orderCalculate();
      this.$forceUpdate();
    },
    imgError: function imgError(goodsIndex) {
      this.orderPaymentData.shop_goods_list.goods_list[goodsIndex].sku_image = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },
    //打开发票弹窗
    openInvoicePopup: function openInvoicePopup(val) {
      this.orderInvoice = this.$util.deepClone(val);
      this.orderInvoice.invoice_type = this.orderInvoice.invoice_type == undefined ? 1 : this.orderInvoice.invoice_type;
      this.orderInvoice.invoice_title_type = this.orderInvoice.invoice_title_type == undefined ? 1 : this.orderInvoice.invoice_title_type;
      this.orderInvoice.invoice_content = this.orderInvoice.invoice_content ? this.orderInvoice.invoice_content : '';
      this.orderInvoice.invoice_title = this.orderInvoice.invoice_title ? this.orderInvoice.invoice_title : '';
      this.orderInvoice.invoice_full_address = this.orderInvoice.invoice_full_address ? this.orderInvoice.invoice_full_address :
      ''; //邮寄地址
      this.orderInvoice.is_tax_invoice = this.orderInvoice.is_tax_invoice ? this.orderInvoice.is_tax_invoice : 0; //是否需要增值税发票
      this.orderInvoice.invoice_email = this.orderInvoice.invoice_email ? this.orderInvoice.invoice_email : ''; // 邮箱
      this.orderInvoice.taxpayer_number = this.orderInvoice.taxpayer_number ? this.orderInvoice.taxpayer_number : ''; //纳税人识别号
      this.openPopup('invoicePopup');
    },
    // 切换发票开关
    changeIsInvoice: function changeIsInvoice() {
      if (this.orderInvoice.is_invoice == 0) {
        this.orderInvoice.is_invoice = 1;
      } else {
        this.orderInvoice.is_invoice = 0;
      }
      this.$forceUpdate();
    },
    // 切换发票类型
    changeInvoiceType: function changeInvoiceType(invoice_type) {
      this.orderInvoice.invoice_type = invoice_type;
      this.$forceUpdate();
    },
    // 切换发票个人还是企业
    changeInvoiceTitleType: function changeInvoiceTitleType(invoice_title_type) {
      this.orderInvoice.invoice_title_type = invoice_title_type;
      this.$forceUpdate();
    },
    // 选择发票内容
    changeInvoiceContent: function changeInvoiceContent(invoice_content) {
      this.orderInvoice.invoice_content = invoice_content;
      this.$forceUpdate();
    },
    //关闭发票弹窗
    closeInvoicePopup: function closeInvoicePopup() {
      this.orderInvoice.invoice_type = 1; // 发票类型  1 纸质 2 电子
      this.orderInvoice.invoice_title_type = 1; // 抬头类型  1 个人 2 企业
      this.orderInvoice.invoice_content = ''; // 发票内容
      this.orderInvoice.invoice_title = ''; // 发票抬头
      this.orderInvoice.invoice_full_address = ''; // 发票邮寄地址
      this.orderInvoice.is_tax_invoice = 0; // 是否需要增值税专用发票  0 不需要 1 需要
      this.orderInvoice.invoice_email = ''; //发票邮箱
      this.orderInvoice.taxpayer_number = ''; //纳税人识别号
      this.orderCalculate();
      this.$forceUpdate();
      this.$refs.invoicePopup.close();
    },
    // 发票验证
    invoiceVerify: function invoiceVerify() {
      if (this.orderInvoice.is_invoice == 1) {
        if (this.orderInvoice.invoice_title == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写发票抬头" });

          return false;
        }
        if (this.orderInvoice.invoice_title_type == 2 && this.orderInvoice.taxpayer_number == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写纳税人识别号" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 1 && this.orderInvoice.invoice_full_address == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写发票邮寄地址" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 2 && this.orderInvoice.invoice_email == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写邮箱" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 2 && this.orderInvoice.invoice_email != '') {
          var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
          if (!reg.test(this.orderInvoice.invoice_email)) {
            this.$refs.invoicePopup.open();
            this.$util.showToast({
              title: "请填写正确的邮箱地址" });

            return false;
          }
        }
        if (this.orderInvoice.invoice_content == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请选择发票内容" });

          return false;
        }

      }
      return true;
    },
    // 保存发票信息
    saveInvoice: function saveInvoice() {
      if (this.invoiceVerify()) {
        this.orderPaymentData.shop_goods_list = this.orderInvoice;
        this.orderCalculate();
        this.closePopup('invoicePopup');
      }
    },
    bindTimeChange: function bindTimeChange(e) {
      var time = e.target.value;
      this.orderCreateData.delivery[e.currentTarget.dataset.siteid].buyer_ask_delivery_time = time;
      this.orderCalculate();
      this.$forceUpdate();
    },
    toShopDetail: function toShopDetail(e) {
      this.$util.redirectTo('/otherpages/shop/index/index', {
        site_id: e });

    },
    navigateTo: function navigateTo(sku_id) {
      this.$util.redirectTo('/pages/goods/detail/detail', {
        sku_id: sku_id });

    },
    // 显示选择支付方式弹框
    openChoosePayment: function openChoosePayment() {
      uni.setStorageSync('paySource', '');
      if (this.verify()) this.$refs.choosePaymentPopup.open();
    } },

  onShow: function onShow() {
    // 刷新多语言
    this.$langConfig.refresh();

    if (uni.getStorageSync('addressBack')) {
      uni.removeStorageSync('addressBack');
    }

    // 判断登录
    if (!uni.getStorageSync('token')) {
      this.$util.redirectTo('/pages/login/login/login');
    } else {
      this.getOrderPaymentData();
    }

    this.isIphoneX = this.$util.uniappIsIPhoneX();
  },
  onHide: function onHide() {
    if (this.$refs.loadingCover) this.$refs.loadingCover.show();
  },
  computed: {
    // 余额抵扣
    balanceDeduct: function balanceDeduct() {
      if (this.orderPaymentData.member_account.balance_total <= parseFloat(this.orderPaymentData.order_money).toFixed(2)) {
        return parseFloat(this.orderPaymentData.member_account.balance_total).toFixed(2);
      } else {
        return parseFloat(this.orderPaymentData.order_money).toFixed(2);
      }
    },
    bargainPrice: function bargainPrice() {
      if (this.orderPaymentData && this.orderPaymentData.bargain_info) {
        return (Number(this.orderPaymentData.bargain_info.price) - Number(this.orderPaymentData.bargain_info.curr_price)).toFixed(
        2);
      } else {
        return 0;
      }
    } },

  filters: {
    // 金额格式化输出
    moneyFormat: function moneyFormat(money) {
      return parseFloat(money).toFixed(2);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 560:
/*!*************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/groupbuy/public/js/detail.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _htmlParser = _interopRequireDefault(__webpack_require__(/*! @/common/js/html-parser */ 206));
var _wxJssdk = __webpack_require__(/*! @/common/js/wx-jssdk.js */ 151);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _regeneratorRuntime() {"use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return exports;};var exports = {},Op = Object.prototype,hasOwn = Op.hasOwnProperty,$Symbol = "function" == typeof Symbol ? Symbol : {},iteratorSymbol = $Symbol.iterator || "@@iterator",asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];}try {define({}, "");} catch (err) {define = function define(obj, key, value) {return obj[key] = value;};}function wrap(innerFn, outerFn, self, tryLocsList) {var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,generator = Object.create(protoGenerator.prototype),context = new Context(tryLocsList || []);return generator._invoke = function (innerFn, self, context) {var state = "suspendedStart";return function (method, arg) {if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {if ("throw" === method) throw arg;return doneResult();}for (context.method = method, context.arg = arg;;) {var delegate = context.delegate;if (delegate) {var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {if (delegateResult === ContinueSentinel) continue;return delegateResult;}}if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);} else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };}"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);}};}(innerFn, self, context), generator;}function tryCatch(fn, obj, arg) {try {return { type: "normal", arg: fn.call(obj, arg) };} catch (err) {return { type: "throw", arg: err };}}exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {return this;});var getProto = Object.getPrototypeOf,NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {["next", "throw", "return"].forEach(function (method) {define(prototype, method, function (arg) {return this._invoke(method, arg);});});}function AsyncIterator(generator, PromiseImpl) {function invoke(method, arg, resolve, reject) {var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {var result = record.arg,value = result.value;return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {invoke("next", value, resolve, reject);}, function (err) {invoke("throw", err, resolve, reject);}) : PromiseImpl.resolve(value).then(function (unwrapped) {result.value = unwrapped, resolve(result);}, function (error) {return invoke("throw", error, resolve, reject);});}reject(record.arg);}var previousPromise;this._invoke = function (method, arg) {function callInvokeWithMethodAndArg() {return new PromiseImpl(function (resolve, reject) {invoke(method, arg, resolve, reject);});}return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();};}function maybeInvokeDelegate(delegate, context) {var method = delegate.iterator[context.method];if (undefined === method) {if (context.delegate = null, "throw" === context.method) {if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);}function pushTryEntry(locs) {var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);}function resetTryEntry(entry) {var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;}function Context(tryLocsList) {this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);}function values(iterable) {if (iterable) {var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {var i = -1,next = function next() {for (; ++i < iterable.length;) {if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;}return next.value = undefined, next.done = !0, next;};return next.next = next;}}return { next: doneResult };}function doneResult() {return { value: undefined, done: !0 };}return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));}, exports.mark = function (genFun) {return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;}, exports.awrap = function (arg) {return { __await: arg };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {return this;}), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {return result.done ? result.value : iter.next();});}, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {return this;}), define(Gp, "toString", function () {return "[object Generator]";}), exports.keys = function (object) {var keys = [];for (var key in object) {keys.push(key);}return keys.reverse(), function next() {for (; keys.length;) {var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;}return next.done = !0, next;};}, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);}}, stop: function stop() {this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;}, dispatchException: function dispatchException(exception) {if (this.done) throw exception;var context = this;function handle(loc, caught) {return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;}for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i],record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {var hasCatch = hasOwn.call(entry, "catchLoc"),hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);} else if (hasCatch) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);} else {if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);}}}}, abrupt: function abrupt(type, arg) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {var finallyEntry = entry;break;}}finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);}, complete: function complete(record, afterLoc) {if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;}, finish: function finish(finallyLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;}}, catch: function _catch(tryLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {var record = entry.completion;if ("throw" === record.type) {var thrown = record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield: function delegateYield(iterable, resultName, nextLoc) {return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;} }, exports;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =



{
  data: function data() {
    return {
      groupbuy_id: 0,
      skuId: 0,

      // 商品详情
      goodsSkuDetail: {
        goods_id: 0,
        goods_service: [] },

      // 店铺详情
      shopInfo: {
        logo: '',
        shop_baozh: 0,
        shop_qtian: 0,
        shop_zhping: 0,
        shop_erxiaoshi: 0,
        shop_tuihuo: 0,
        shop_shiyong: 0,
        shop_shiti: 0,
        shop_xiaoxie: 0 },


      cartCount: 0, // 购物车商品数量
      whetherCollection: 0,

      // 媒体,图片,视频

      // 解决每个商品SKU图片数量不同时，无法切换到第一个，导致轮播图显示不出来
      swiperInterval: 1,
      swiperAutoplay: false,
      swiperCurrent: 1,
      switchMedia: 'img',

      isIphoneX: false, //判断手机是否是iphoneX以上

      poster: "-1", //海报
      posterMsg: "", //海报错误信息
      posterHeight: 0,

      //评价
      goodsEvaluate: {
        member_headimg: '',
        member_name: '',
        content: '',
        images: [],
        create_time: 0,
        sku_name: '' },

      memberId: 0,
      contactData: {
        title: '',
        path: '',
        img: '' },

      detailTab: 0,
      service: null,
      showKefu: 0,
      // 是否可分享到好物圈
      goodsCircle: false,
      evaluateConfig: {
        evaluate_audit: 1,
        evaluate_show: 0,
        evaluate_status: 1 } };


  },
  onLoad: function onLoad(data) {var _this = this;
    this.groupbuy_id = data.groupbuy_id || 0;
    this.skuId = data.sku_id || 0;
    this.isIphoneX = this.$util.uniappIsIPhoneX();
    if (data.source_member) uni.setStorageSync('source_member', data.source_member);
    // 小程序扫码进入
    if (data.scene) {
      var sceneParams = decodeURIComponent(data.scene);
      sceneParams = sceneParams.split('&');
      if (sceneParams.length) {
        sceneParams.forEach(function (item) {
          if (item.indexOf('groupbuy_id') != -1) _this.groupbuy_id = item.split('-')[1];
          if (item.indexOf('sku_id') != -1) _this.skuId = item.split('-')[1];
          if (item.indexOf('source_member') != -1) uni.setStorageSync('source_member', item.split('-')[1]);
        });
      }
    }
    // this.getService();
  },
  onShow: function onShow() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {return _regeneratorRuntime().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:

              // 刷新多语言
              _this2.$langConfig.refresh();
              _this2.$store.dispatch('getAddonIsexit').then( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                          data.groupbuy) {_context.next = 5;break;}
                          _this2.$util.showToast({
                            title: '团购未开启',
                            mask: true });

                          setTimeout(function () {
                            _this2.$util.redirectTo('/pages/index/index/index', {}, 'redirectTo');
                          }, 1000);_context.next = 12;break;case 5:

                          if (uni.getStorageSync('token')) {
                            _this2.getCartCount();
                            _this2.getMemberId();
                          }
                          _this2.canGoConnect();
                          _this2.getKekuConfig();
                          //同步获取商品详情
                          _context.next = 10;return _this2.getGoodsSkuDetail();case 10:

                          //修改商品信息
                          _this2.modifyGoodsInfo();

                          // 评价设置
                          _this2.getEvaluateConfig();case 12:case "end":return _context.stop();}}}, _callee);}));return function (_x) {return _ref.apply(this, arguments);};}());case 2:case "end":return _context2.stop();}}}, _callee2);}))();


  },
  methods: {
    canGoConnect: function canGoConnect() {var _this3 = this;
      this.$api.sendRequest({
        url: "/api/addon/addonisexit",
        success: function success(res) {
          if (res.code == 0 && res.data) {
            _this3.showKefu = res.data.servicer;
          }
        } });

    },
    //联系客服
    goConnect: function goConnect() {
      if (uni.getStorageSync('token')) {
        var data = {
          site_id: this.shopInfo.site_id,
          sku_id: this.goodsSkuDetail.sku_id,
          type: 'groupbuy',
          type_id: this.goodsSkuDetail.groupbuy_id };

        this.$util.redirectTo('/otherpages/chat/room/room', data);
        return false;
      } else {
        this.$refs.login.open('/pages/goods/detail/detail?sku_id=' + this.goodsSkuDetail.sku_id);
        return;
      }
    },
    // 获取团购商品详情
    getGoodsSkuDetail: function getGoodsSkuDetail() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {var res, data, goods_attr_format, i, j;return _regeneratorRuntime().wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  _this4.$api.sendRequest({
                    url: '/groupbuy/api/goods/detail',
                    async: false,
                    data: {
                      groupbuy_id: _this4.groupbuy_id } }));case 2:res = _context3.sent;


                data = res.data;
                if (data.goods_sku_detail != null) {
                  _this4.goodsSkuDetail = data.goods_sku_detail;
                  _this4.shopInfo = data.shop_info;
                  _this4.skuId = _this4.goodsSkuDetail.sku_id;

                  _this4.goodsSkuDetail.goods_service = [];
                  if (_this4.shopInfo.shop_baozh == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '保证服务',
                      desc: '保证服务' });

                  }

                  if (_this4.shopInfo.shop_qtian == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '7天退换',
                      desc: '满足7天无理由退换货申请的前提下，包邮商品需要买家承担退货邮费，非包邮商品需要买家承担发货和退货邮费' });

                  }

                  if (_this4.shopInfo.shop_zhping == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '正品保障',
                      desc: '商品支持正品保障服务' });

                  }

                  if (_this4.shopInfo.shop_erxiaoshi == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '两小时发货',
                      desc: '付款后2小时内发货' });

                  }

                  if (_this4.shopInfo.shop_tuihuo == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '退货承诺',
                      desc: '退货承诺' });

                  }

                  if (_this4.shopInfo.shop_shiyong == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '试用中心',
                      desc: '试用中心' });

                  }

                  if (_this4.shopInfo.shop_shiti == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '实体验证',
                      desc: '实体验证' });

                  }

                  if (_this4.shopInfo.shop_xiaoxie == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '消协保证',
                      desc: '如有商品质量问题、描述不符或未收到货等，您有权申请退款或退货，来回邮费由卖家承担' });

                  }

                  //砍价倒计时
                  if (_this4.goodsSkuDetail.end_time - res.timestamp > 0) {
                    _this4.goodsSkuDetail.timeMachine = _this4.$util.countDown(_this4.goodsSkuDetail.end_time - res.timestamp);
                  } else {
                    _this4.$util.showToast({
                      title: "活动已结束" });

                    setTimeout(function () {
                      _this4.$util.redirectTo('/pages/goods/detail/detail', {
                        sku_id: _this4.goodsSkuDetail.sku_id },
                      'redirectTo');
                    }, 1000);
                  }

                  //团购倒计时
                  if (_this4.goodsSkuDetail.end_time - res.timestamp > 0) {
                    _this4.goodsSkuDetail.timeMachine = _this4.$util.countDown(_this4.goodsSkuDetail.end_time - res.timestamp);
                  } else {
                    _this4.$util.showToast({
                      title: "活动已结束" });

                    setTimeout(function () {
                      _this4.$util.redirectTo('/pages/goods/detail/detail', {
                        sku_id: _this4.goodsSkuDetail.sku_id },
                      'redirectTo');
                    }, 1000);
                  }

                  //媒体
                  if (_this4.goodsSkuDetail.video_url) _this4.switchMedia = "video";

                  if (_this4.goodsSkuDetail.sku_images) _this4.goodsSkuDetail.sku_images = _this4.goodsSkuDetail.sku_images.split(",");else
                  _this4.goodsSkuDetail.sku_images = [];

                  // 多规格时合并主图
                  if (_this4.goodsSkuDetail.goods_spec_format && _this4.goodsSkuDetail.goods_image) {
                    _this4.goodsSkuDetail.goods_image = _this4.goodsSkuDetail.goods_image.split(",");
                    _this4.goodsSkuDetail.sku_images = _this4.goodsSkuDetail.sku_images.concat(_this4.goodsSkuDetail.goods_image);
                  }

                  _this4.goodsSkuDetail.unit = _this4.goodsSkuDetail.unit || "件";

                  _this4.goodsSkuDetail.show_price = _this4.goodsSkuDetail.groupbuy_price;

                  _this4.goodsSkuDetail.save_price = _this4.goodsSkuDetail.price - _this4.goodsSkuDetail.show_price > 0 ? (_this4.goodsSkuDetail.
                  price - _this4.goodsSkuDetail.show_price).toFixed(2) : 0;

                  // 当前商品SKU规格
                  if (_this4.goodsSkuDetail.sku_spec_format) _this4.goodsSkuDetail.sku_spec_format = JSON.parse(_this4.goodsSkuDetail.sku_spec_format);

                  // 商品属性
                  if (_this4.goodsSkuDetail.goods_attr_format) {
                    goods_attr_format = JSON.parse(_this4.goodsSkuDetail.goods_attr_format);
                    _this4.goodsSkuDetail.goods_attr_format = _this4.$util.unique(goods_attr_format, "attr_id");
                    for (i = 0; i < _this4.goodsSkuDetail.goods_attr_format.length; i++) {
                      for (j = 0; j < goods_attr_format.length; j++) {
                        if (_this4.goodsSkuDetail.goods_attr_format[i].attr_id == goods_attr_format[j].attr_id && _this4.goodsSkuDetail.goods_attr_format[
                        i].attr_value_id != goods_attr_format[j].attr_value_id) {
                          _this4.goodsSkuDetail.goods_attr_format[i].attr_value_name += "、" + goods_attr_format[j].attr_value_name;
                        }
                      }
                    }
                  }

                  // 商品SKU格式
                  if (_this4.goodsSkuDetail.goods_spec_format) _this4.goodsSkuDetail.goods_spec_format = JSON.parse(_this4.goodsSkuDetail.goods_spec_format);

                  _this4.$langConfig.title(_this4.goodsSkuDetail.goods_name);

                  // 商品详情
                  // if (this.goodsSkuDetail.goods_content) this.goodsSkuDetail.goods_content = htmlParser(this.goodsSkuDetail.goods_content);

                  _this4.contactData = {
                    title: _this4.goodsSkuDetail.sku_name,
                    path: '/promotionpages/groupbuy/detail/detail?groupbuy_id=' + _this4.groupbuy_id,
                    img: _this4.$util.img(_this4.goodsSkuDetail.sku_image, {
                      size: 'big' }) };



                  if (uni.getStorageSync('token')) {
                    _this4.getWhetherCollection();
                  }

                  _this4.setWechatShare();

                  // if (this.$refs.goodsPromotion) this.$refs.goodsPromotion.refresh(this.goodsSkuDetail.goods_promotion);

                  if (_this4.$refs.loadingCover) _this4.$refs.loadingCover.hide();


                  _this4.getGoodScircleConfig();

                } else {
                  _this4.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
                }case 5:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    /**
     * 刷新商品详情数据
     * @param {Object} goodsSkuDetail
     */
    refreshGoodsSkuDetail: function refreshGoodsSkuDetail(goodsSkuDetail) {var _this5 = this;
      Object.assign(this.goodsSkuDetail, goodsSkuDetail);
      this.goodsSkuDetail.unit = this.goodsSkuDetail.unit || "件";
      // if (this.$refs.goodsPromotion) this.$refs.goodsPromotion.refresh(this.goodsSkuDetail.goods_promotion);

      // 解决轮播图数量不一致时，切换到第一个
      if (this.swiperCurrent > this.goodsSkuDetail.sku_images.length) {
        this.swiperAutoplay = true;
        this.swiperCurrent = 1;
        setTimeout(function () {
          _this5.swiperAutoplay = false;
        }, 40);
      }
    },
    goHome: function goHome() {
      // this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
      this.$util.redirectTo('/otherpages/shop/index/index', {
        site_id: this.shopInfo.site_id });

    },
    goCart: function goCart() {
      this.$util.redirectTo('/pages/goods/cart/cart', {}, 'reLaunch');
    },
    // 团购
    groupbuy: function groupbuy() {
      if (!uni.getStorageSync('token')) {
        this.$refs.login.open('/promotionpages/groupbuy/detail/detail?groupbuy_id=' + this.groupbuy_id + '&sku_id=' + this.skuId);
        return;
      }
      this.$refs.goodsSku.show("groupbuy", function () {});
    },
    swiperChange: function swiperChange(e) {
      this.swiperCurrent = e.detail.current + 1;
    },


    //-------------------------------------服务-------------------------------------

    openMerchantsServicePopup: function openMerchantsServicePopup() {
      this.$refs.merchantsServicePopup.open();
    },
    closeMerchantsServicePopup: function closeMerchantsServicePopup() {
      this.$refs.merchantsServicePopup.close();
    },



    //-------------------------------------属性-------------------------------------

    openAttributePopup: function openAttributePopup() {
      this.$refs.attributePopup.open();
    },
    closeAttributePopup: function closeAttributePopup() {
      this.$refs.attributePopup.close();
    },

    //-------------------------------------属性-------------------------------------



    //-------------------------------------评价-------------------------------------
    //商品评论列表
    getGoodsEvaluate: function getGoodsEvaluate() {var _this6 = this;
      this.$api.sendRequest({
        url: "/api/goodsevaluate/firstinfo",
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          var data = res.data;
          if (data) {
            _this6.goodsEvaluate = data;
            if (_this6.goodsEvaluate.images) _this6.goodsEvaluate.images = _this6.goodsEvaluate.images.split(",");
            if (_this6.goodsEvaluate.is_anonymous == 1) _this6.goodsEvaluate.member_name = _this6.goodsEvaluate.member_name.replace(
            _this6.goodsEvaluate.member_name.substring(1, _this6.goodsEvaluate.member_name.length - 1), '***');
          }
        } });

    },

    // 预览评价图片
    previewEvaluate: function previewEvaluate(index, field) {
      var paths = [];
      for (var i = 0; i < this.goodsEvaluate[field].length; i++) {
        paths.push(this.$util.img(this.goodsEvaluate[field][i]));
      }
      uni.previewImage({
        current: index,
        urls: paths });

    },


    //-------------------------------------关注-------------------------------------

    //获取用户是否关注
    getWhetherCollection: function getWhetherCollection() {var _this7 = this;
      this.$api.sendRequest({
        url: "/api/goodscollect/iscollect",
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          _this7.whetherCollection = res.data;
        } });

    },

    editCollection: function editCollection() {var _this8 = this;
      if (uni.getStorageSync('token')) {

        //未关注添加关注
        if (this.whetherCollection == 0) {
          this.$api.sendRequest({
            url: "/api/goodscollect/add",
            data: {
              sku_id: this.skuId },

            success: function success(res) {
              var data = res.data;
              if (data > 0) {
                _this8.whetherCollection = 1;
              }
            } });

        } else {
          //已关注取消关注
          this.$api.sendRequest({
            url: "/api/goodscollect/delete",
            data: {
              goods_id: this.goodsSkuDetail.goods_id },

            success: function success(res) {
              var data = res.data;
              if (data > 0) {
                _this8.whetherCollection = 0;
              }
            } });

        }
      } else {
        this.$refs.login.open('/promotionpages/groupbuy/detail/detail?groupbuy_id=' + this.groupbuy_id + '&sku_id=' + this.skuId);
      }
    },
    //获取购物车数量
    getCartCount: function getCartCount() {var _this9 = this;
      this.$store.dispatch('getCartNumber').then(function (e) {
        _this9.cartCount = e;
      });
    },
    //更新商品信息
    modifyGoodsInfo: function modifyGoodsInfo() {
      //更新商品点击量
      this.$api.sendRequest({
        url: "/api/goods/modifyclicks",
        data: {
          sku_id: this.skuId,
          site_id: this.goodsSkuDetail.site_id },

        success: function success(res) {} });


      //添加足迹
      this.$api.sendRequest({
        url: "/api/goodsbrowse/add",
        data: {
          sku_id: this.skuId },

        success: function success(res) {} });

    },


    //-------------------------------------分享-------------------------------------
    // 打开分享弹出层
    openSharePopup: function openSharePopup() {
      this.$refs.sharePopup.open();
    },
    // 关闭分享弹出层
    closeSharePopup: function closeSharePopup() {
      this.$refs.sharePopup.close();
    },
    //-------------------------------------海报-------------------------------------

    // 打开海报弹出层
    openPosterPopup: function openPosterPopup() {var _this10 = this;
      this.getGoodsPoster();
      this.$refs.sharePopup.close();
      this.$refs.posterPopup.open();
      if (this.poster != '-1') {
        setTimeout(function () {
          var view = uni.createSelectorQuery().in(_this10).select(".poster-layer .image-wrap");
          view.fields({
            size: true },
          function (data) {
            var posterWhith = data.width;
            var ratio = parseFloat((740 / posterWhith).toFixed(2));
            if (uni.getStorageSync('token')) {
              _this10.posterHeight = parseInt(1240 / ratio);
            } else {
              _this10.posterHeight = parseInt(1100 / ratio);
            }
          }).exec();
        }, 100);
      }
    },
    // 关闭海报弹出层
    closePosterPopup: function closePosterPopup() {
      this.$refs.posterPopup.close();
    },
    //生成海报
    getGoodsPoster: function getGoodsPoster() {var _this11 = this;
      //活动海报信息
      var qrcode_param = {
        groupbuy_id: this.groupbuy_id };

      if (this.memberId) qrcode_param.source_member = this.memberId;
      this.$api.sendRequest({
        url: "/groupbuy/api/goods/poster",
        data: {
          page: '/promotionpages/groupbuy/detail/detail',
          qrcode_param: JSON.stringify(qrcode_param) },

        success: function success(res) {
          if (res.code == 0) {
            _this11.poster = res.data.path + "?time=" + new Date().getTime();
          } else {
            _this11.posterMsg = res.message;
          }
        } });

    },
    // 预览图片
    previewMedia: function previewMedia(index) {
      var paths = [];
      for (var i = 0; i < this.goodsSkuDetail.sku_images.length; i++) {
        paths.push(this.$util.img(this.goodsSkuDetail.sku_images[i], {
          size: 'big' }));

      }
      uni.previewImage({
        current: index,
        urls: paths });

    },
    swiperImgError: function swiperImgError(index) {
      this.goodsSkuDetail.sku_images[index] = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },

    //小程序中保存海报
    saveGoodsPoster: function saveGoodsPoster() {var _this12 = this;
      var url = this.$util.img(this.poster);
      uni.downloadFile({
        url: url,
        success: function success(res) {
          if (res.statusCode === 200) {
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function success() {
                _this12.$util.showToast({
                  title: "保存成功" });

              },
              fail: function fail() {
                _this12.$util.showToast({
                  title: "保存失败，请稍后重试" });

              } });

          }
        } });

    },

    getMemberId: function getMemberId() {var _this13 = this;
      this.$api.sendRequest({
        url: "/api/member/id",
        success: function success(res) {
          if (res.code >= 0) {
            _this13.memberId = res.data;
          }
        } });

    },
    //售后保障查询
    getService: function getService() {var _this14 = this;
      this.$api.sendRequest({
        url: '/api/goods/aftersale',
        success: function success(res) {
          if (res.code == 0 && res.data) {
            var data = res.data.content;
            if (res.data.content) _this14.service = (0, _htmlParser.default)(res.data.content);
          }
        } });

    },
    /**
     * 设置微信公众号分享
     */
    setWechatShare: function setWechatShare() {
      // 微信公众号分享






























    },

    /**
     *	获取是否开启微信圈子 
     */
    getGoodScircleConfig: function getGoodScircleConfig() {var _this15 = this;
      this.$api.sendRequest({
        url: '/goodscircle/api/config/info',
        success: function success(res) {
          if (res.code == 0) {
            if (res.data.is_use) {
              _this15.goodsSyncToGoodsCircle();
            }
          }
        } });

    },
    /**
     *	将商品同步到微信圈子 
     */
    goodsSyncToGoodsCircle: function goodsSyncToGoodsCircle() {var _this16 = this;
      this.$api.sendRequest({
        url: '/goodscircle/api/goods/sync',
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          if (res.code == 0) {
            _this16.goodsCircle = true;
          }
        } });

    },
    /**
     * 将商品推荐到微信圈子
     */
    openBusinessView: function openBusinessView() {var _this17 = this;
      if (wx.openBusinessView) {
        wx.openBusinessView({
          businessType: 'friendGoodsRecommend',
          extraData: {
            product: {
              item_code: this.goodsSkuDetail.goods_id,
              title: this.goodsSkuDetail.sku_name,
              image_list: this.goodsSkuDetail.sku_images.map(function (ele) {
                return _this17.$util.img(ele);
              }) } },


          success: function success(res) {
            console.log('success', res);
          },
          fail: function fail(res) {
            console.log('fail', res);
          } });

      }
    },

    getEvaluateConfig: function getEvaluateConfig() {var _this18 = this;
      this.$api.sendRequest({
        url: '/api/goodsevaluate/config',
        success: function success(res) {
          if (res.code == 0) {
            var data = res.data;
            _this18.evaluateConfig = data;
            if (_this18.evaluateConfig.evaluate_show == 1) {
              //商品评论
              _this18.getGoodsEvaluate();
            }
          }
        } });

    },
    copyUrl: function copyUrl() {var _this19 = this;
      var text = this.$config.h5Domain + '/promotionpages/groupbuy/detail/detail?groupbuy_id=' + this.groupbuy_id;
      if (this.memberId) text += '&source_member=' + this.memberId;
      this.$util.copy(text, function () {
        _this19.closeSharePopup();
      });
    },
    getKekuConfig: function getKekuConfig() {var _this20 = this;
      this.$api.sendRequest({
        url: '/api/config/servicer',
        success: function success(res) {
          if (res.code == 0) {
            _this20.kefuConfig = res.data;
          }
        } });

    },
    toEvaluateDetail: function toEvaluateDetail(id) {
      this.$util.redirectTo('/otherpages/goods/evaluate/evaluate', {
        goods_id: id });

    },
    navigate: function navigate(href, e) {
      //比如点击a标签，打开某个webview并传输url
      this.$util.redirectTo('/otherpages/webview/webview', {
        link: encodeURIComponent(href) });

    },
    //h5播放视频
    openVideo: function openVideo(url, video_img) {
      // this.$refs.videoPopup.open();
      this.$util.redirectTo('/otherpages/goods/preview-video', {
        video_url: url,
        video_img: video_img });

    },
    errorShopLogo: function errorShopLogo() {
      this.shopInfo.avatar = this.$util.getDefaultImage().default_shop_img;
      this.$forceUpdate();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 578:
/*!**************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/groupbuy/public/js/payment.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      isIphoneX: false,
      orderCreateData: {
        is_balance: 0,
        pay_password: '' },

      orderPaymentData: {
        member_account: {
          balance: 0,
          is_pay_password: 0 },

        shop_goods_list: {
          site_name: '',
          express_type: [],
          invoice_config: {
            invoice_status: 0 } },


        groupbuy_info: {
          name: '' } },


      orderInvoice: {
        is_invoice: 0, //是否需要发票
        invoice_type: 1, //发票类型电子、纸质
        invoice_title: '', //发票抬头
        invoice_title_type: 1, // 抬头类型
        invoice_full_address: '', //邮寄地址
        is_tax_invoice: 0, //是否需要增值税发票
        invoice_email: '', // 邮箱
        invoice_content: '', //发票内容
        taxpayer_number: '' //纳税人识别号
      },
      isSub: false,
      tempData: null,
      siteDelivery: {
        site_id: 0,
        data: [] } };


  },
  methods: {
    // 显示弹出层
    openPopup: function openPopup(ref) {
      this.$refs[ref].open();
    },
    // 关闭弹出层
    closePopup: function closePopup(ref) {
      if (this.tempData) {
        Object.assign(this.orderCreateData, this.tempData);
        Object.assign(this.orderPaymentData, this.tempData);
        this.tempData = null;
        this.$forceUpdate();
      }
      this.$refs[ref].close();
    },
    // 选择收货地址，默认有定位
    selectAddress: function selectAddress() {
      var params = {
        back: '/promotionpages/groupbuy/payment/payment',
        local: 0,
        type: 1 };

      // 外卖配送需要定位地址
      // if (this.orderPaymentData.delivery.delivery_type == 'local') {
      // 	params.local = 1;
      // 	params.type = 2;
      // }
      this.$util.redirectTo('/otherpages/member/address/address', params);
    },
    // 获取订单初始化数据
    getOrderPaymentData: function getOrderPaymentData() {var _this = this;
      this.orderCreateData = uni.getStorageSync('groupbuyOrderCreateData');
      var pay_flag = uni.getStorageSync("pay_flag"); // 支付中标识，防止返回时，提示,跳转错误
      if (!this.orderCreateData) {
        if (pay_flag == 1) {
          uni.removeStorageSync("pay_flag");
        } else {
          this.$util.showToast({
            title: '未获取到创建订单所需数据！' });

          setTimeout(function () {
            _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }, 1000);
        }
        return;
      }

      // 获取经纬度
      var location = uni.getStorageSync('location');
      if (location) {
        this.orderCreateData = Object.assign(this.orderCreateData, location);
      }

      this.orderCreateData.buyer_message = '';

      this.$api.sendRequest({
        url: '/groupbuy/api/ordercreate/payment',
        data: this.orderCreateData,
        success: function success(res) {
          if (res.code >= 0) {
            _this.orderPaymentData = res.data;
            _this.orderPaymentData.timestamp = res.timestamp;
            _this.handlePaymentData();
            if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
          } else {
            _this.$util.showToast({
              title: '未获取到创建订单所需数据！' });

            setTimeout(function () {
              _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
            }, 1000);
          }
        },
        fail: function fail(res) {
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        } });

    },
    // 处理结算订单数据
    handlePaymentData: function handlePaymentData() {
      this.orderCreateData.delivery = {};
      this.orderCreateData.invoice = {};
      this.orderCreateData.is_balance = 0;
      this.orderCreateData.pay_password = '';

      for (var i = 0; i < this.orderPaymentData.shop_goods_list.goods_list.length; i++) {
        this.orderPaymentData.shop_goods_list.goods_list[i].goods_image = this.orderPaymentData.shop_goods_list.goods_list[
        i].goods_image ? this.orderPaymentData.shop_goods_list.goods_list[i].goods_image.split(",")[0] : '';
      }

      var data = this.orderPaymentData;

      var h = new Date().getHours().toString();
      var m = new Date().getMinutes().toString();
      if (h.length == 1) {
        h = '0' + h;
      }
      if (m.length == 1) {
        m = '0' + m;
      }
      var nowTime = h + ':' + m;
      var weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

      // 获取时间，必须是字符串,跟后端一致
      var index_weeks = ['0', '1', '2', '3', '4', '5', '6'];
      var curr_week = index_weeks[new Date().getDay()];

      if (data.shop_goods_list.express_type != undefined && data.shop_goods_list.express_type[0] != undefined) {
        var express_type = data.shop_goods_list.express_type;
        this.orderCreateData.delivery.delivery_type = express_type[0].name;
        this.orderCreateData.delivery.delivery_type_name = express_type[0].title;
        this.orderCreateData.delivery.store_id = 0;

        // 如果默认配送方式是门店配送
        if (express_type[0].name == 'store') {
          if (express_type[0].store_list[0] != undefined) {
            this.orderCreateData.delivery.store_id = express_type[0].store_list[0].store_id;
          }
        }
      }

      if (data.is_virtual == 0 && data.shop_goods_list.local_config) {

        // 是否显示时间选择
        if (data.shop_goods_list.local_config.info && data.shop_goods_list.local_config.info.time_is_open == 1) {
          this.orderCreateData.delivery.showTimeBar = true;
          this.orderCreateData.delivery.buyer_ask_delivery_time = nowTime;
          // 当日是否支持配送
          if (data.shop_goods_list.local_config.info.time_week.length == 0 ||
          data.shop_goods_list.local_config.info.time_week.length == 7 ||
          data.shop_goods_list.local_config.info.time_week.indexOf(curr_week) > -1) {
            this.orderCreateData.delivery.canLocalDelicery = true;
          } else {
            this.orderCreateData.delivery.canLocalDelicery = false;
          }

          if (data.shop_goods_list.local_config.info.time_type == 0) {
            this.orderCreateData.delivery.deliveryWeek = "全天";
          } else if (data.shop_goods_list.local_config.info.time_week.length > 0) {
            if (data.shop_goods_list.local_config.info.time_week.length == 7) {
              this.orderCreateData.delivery.deliveryWeek = "全天";
              this.orderCreateData.delivery.showTime = false;
            } else {
              this.orderCreateData.delivery.showTime = true;
              // 判断配送时间是连续还是间隔
              var timeWeek = data.shop_goods_list.local_config.info.time_week;
              var is_interval = false; // 是否间隔
              for (var i = 0; i < timeWeek.length; i++) {
                if (i + 1 < timeWeek.length) {
                  var difference = timeWeek[i + 1] - timeWeek[i];
                  if (difference > 1) {
                    is_interval = true;
                    break;
                  }
                }
              }

              if (is_interval) {
                var temp = [];
                for (var i = 0; i < timeWeek.length; i++) {
                  temp.push(weeks[timeWeek[i]]);
                }
                this.orderCreateData.delivery.deliveryWeek = temp.join("、");
              } else {
                this.orderCreateData.delivery.deliveryWeek = weeks[timeWeek[0]] + "至" + weeks[timeWeek[timeWeek.length -
                1]];
              }
            }
          } else {
            this.orderCreateData.delivery.deliveryWeek = "店铺未设置配送时间";
          }

          // picker组件时间起始
          var start_time = data.shop_goods_list.local_config.info.start_time;
          this.orderCreateData.delivery.start_time = this.getTimeStr(start_time);

          var end_time = data.shop_goods_list.local_config.info.end_time;
          this.orderCreateData.delivery.end_time = this.getTimeStr(end_time);

          var current_time = new Date(this.$util.timeStampTurnTime(data.timestamp));
          var hour = current_time.getHours();
          var minute = current_time.getMinutes();

          var start_hour = parseInt(this.orderCreateData.delivery.start_time.split(":")[0]);
          var start_minute = parseInt(this.orderCreateData.delivery.start_time.split(":")[1]);

          var end_hour = parseInt(this.orderCreateData.delivery.end_time.split(":")[0]);
          var end_minute = parseInt(this.orderCreateData.delivery.end_time.split(":")[1]);

          // 检测当天是否能够配送，然后判断送达时间。不在配送时间当日不能下单，例：配送时间是周一到周五，那么周末不能下单，周一到周五可以下单
          if (this.orderCreateData.delivery.canLocalDelicery) {

            // 判断是否全天
            if (!(start_hour == end_hour && start_minute == end_minute)) {

              // 当前时间早于配送时间，送达时间：开始时间~结束时间
              if (hour < start_hour || hour == start_hour && minute < start_minute) {
                this.orderCreateData.delivery.buyer_ask_delivery_time = (start_hour.toString().length == 1 ? "0" + start_hour :
                start_hour) + ':' + (
                start_minute.toString().length == 1 ? "0" + start_minute : start_minute);
              }

              // if (((hour > start_hour && hour < end_hour) || (hour == start_hour && minute > start_minute) || (hour ==
              // 		start_hour && minute >= start_minute && hour < end_hour))) {
              // }

              // 当前时间晚于配送时间，送达时间隐藏，不能下单
              if (hour > end_hour || hour == end_hour && minute > end_minute) {
                this.orderCreateData.delivery.canLocalDelicery = false;
              }
            }

          }

        } else {
          this.orderCreateData.delivery.showTimeBar = false;
          this.orderCreateData.delivery.deliveryWeek = "店铺未开启配送时间";
        }

      }

      data.shop_goods_list.goods_list.forEach(function (v) {
        if (typeof v.sku_spec_format == 'string') {
          if (v.sku_spec_format) {
            v.sku_spec_format = JSON.parse(v.sku_spec_format);
          } else {
            v.sku_spec_format = [];
          }
        }
      });

      if (this.orderPaymentData.is_virtual) this.orderCreateData.member_address = {
        mobile: '' };


      Object.assign(data, this.orderCreateData);
      this.orderCalculate();
    },
    // 转化时间字符串
    getTimeStr: function getTimeStr(val) {
      var h = parseInt(val / 3600).toString();
      var m = parseInt(val % 3600 / 60).toString();
      if (m.length == 1) {
        m = '0' + m;
      }
      if (h.length == 1) {
        h = '0' + h;
      }
      return h + ':' + m;
    },
    // 订单计算
    orderCalculate: function orderCalculate() {var _this2 = this;
      var siteId = this.orderPaymentData.shop_goods_list.site_id;

      var deliveryObj = {};
      deliveryObj[siteId] = this.orderCreateData.delivery;

      var messageObj = {};
      messageObj[siteId] = this.orderCreateData.buyer_message;

      //店铺发票
      if (this.orderPaymentData.shop_goods_list.is_invoice) {
        this.orderCreateData.invoice[siteId] = {};
        if (!Array.isArray(this.orderPaymentData.shop_goods_list.invoice_config)) {
          this.orderCreateData.invoice[siteId].is_invoice = this.orderPaymentData.shop_goods_list.is_invoice;
          this.orderCreateData.invoice[siteId].invoice_type = this.orderPaymentData.shop_goods_list.invoice_type;
          this.orderCreateData.invoice[siteId].invoice_title = this.orderPaymentData.shop_goods_list.invoice_title;
          this.orderCreateData.invoice[siteId].taxpayer_number = this.orderPaymentData.shop_goods_list.taxpayer_number;
          this.orderCreateData.invoice[siteId].invoice_content = this.orderPaymentData.shop_goods_list.invoice_content;
          this.orderCreateData.invoice[siteId].invoice_full_address = this.orderPaymentData.shop_goods_list.invoice_full_address;
          this.orderCreateData.invoice[siteId].is_tax_invoice = this.orderPaymentData.shop_goods_list.is_tax_invoice;
          this.orderCreateData.invoice[siteId].invoice_email = this.orderPaymentData.shop_goods_list.invoice_email;
          this.orderCreateData.invoice[siteId].invoice_title_type = this.orderPaymentData.shop_goods_list.invoice_title_type;
        }
      }

      var data = this.$util.deepClone(this.orderCreateData);
      data.delivery = JSON.stringify(deliveryObj);
      data.invoice = JSON.stringify(data.invoice);
      data.member_address = JSON.stringify(data.member_address);
      data.buyer_message = JSON.stringify(messageObj);

      this.$api.sendRequest({
        url: '/groupbuy/api/ordercreate/calculate',
        data: data,
        success: function success(res) {
          if (res.code >= 0) {
            _this2.orderPaymentData.member_address = res.data.member_address;
            _this2.orderPaymentData.delivery_money = res.data.delivery_money;
            _this2.orderPaymentData.invoice_money = res.data.invoice_money;
            _this2.orderPaymentData.invoice_delivery_money = res.data.invoice_delivery_money;
            _this2.orderPaymentData.promotion_money = res.data.promotion_money;
            _this2.orderPaymentData.order_money = res.data.order_money;
            _this2.orderPaymentData.balance_money = res.data.balance_money;
            _this2.orderPaymentData.pay_money = res.data.pay_money;
            _this2.orderPaymentData.goods_money = res.data.goods_money;
            _this2.$forceUpdate();
          } else {
            _this2.$util.showToast({
              title: res.message });

          }
        } });

    },
    /**
     * 订单创建
     * @param {String} pay_password 支付密码
     */
    orderCreate: function orderCreate(pay_password) {var _this3 = this;
      if (this.verify()) {
        if (this.isSub) return;
        this.isSub = true;

        if (pay_password) this.orderCreateData.pay_password = pay_password;

        var siteId = this.orderPaymentData.shop_goods_list.site_id;

        var deliveryObj = {};
        deliveryObj[siteId] = this.orderCreateData.delivery;

        var messageObj = {};
        messageObj[siteId] = this.orderCreateData.buyer_message;

        var data = this.$util.deepClone(this.orderCreateData);
        data.delivery = JSON.stringify(deliveryObj);
        data.invoice = JSON.stringify(data.invoice);
        data.member_address = JSON.stringify(data.member_address);
        data.buyer_message = JSON.stringify(messageObj);

        this.$api.sendRequest({
          url: '/groupbuy/api/ordercreate/create',
          data: data,
          success: function success(res) {
            uni.hideLoading();
            if (res.code >= 0) {
              if (_this3.orderPaymentData.pay_money == 0) {
                _this3.$util.redirectTo('/pages/pay/result/result', {
                  code: res.data },
                'redirectTo');
              } else {
                _this3.$refs.choosePaymentPopup.getPayInfo(res.data);
                _this3.isSub = false;
              }
              // uni.removeStorage({
              // 	key: 'groupbuyOrderCreateData',
              // 	success: () => {}
              // });
            } else {
              _this3.isSub = false;
              if (res.data.error_code == 10 || res.data.error_code == 12) {
                uni.showModal({
                  title: '订单未创建',
                  content: res.message,
                  confirmText: '去设置',
                  success: function success(res) {
                    if (res.confirm) {
                      _this3.selectAddress();
                    }
                  } });

              } else {
                _this3.$util.showToast({
                  title: res.message });

              }
            }
          },
          fail: function fail(res) {
            uni.hideLoading();
            _this3.isSub = false;
          } });

      }
    },
    // 订单验证
    verify: function verify() {
      if (this.orderPaymentData.is_virtual == 1) {
        if (!this.orderCreateData.member_address.mobile.length) {
          this.$util.showToast({
            title: '请输入您的手机号码' });

          return false;
        }
        var reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
        if (!reg.test(this.orderCreateData.member_address.mobile)) {
          this.$util.showToast({
            title: '请输入正确的手机号码' });

          return false;
        }
      }

      if (this.orderPaymentData.is_virtual == 0) {

        var expressTypeVerify = true;

        for (var key in this.orderPaymentData.shop_goods_list) {
          if (this.orderPaymentData.shop_goods_list.express_type.length == 0) {
            expressTypeVerify = false;
            this.$util.showToast({
              title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】未设置配送方式' });

            break;
          }
        }

        if (!expressTypeVerify) return false;

        if (!this.orderPaymentData.member_address) {
          this.$util.showToast({
            title: '请先选择您的收货地址' });

          return false;
        }

        if (JSON.stringify(this.orderCreateData.delivery) == "{}") {
          this.$util.showToast({
            title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】未设置配送方式' });

          return false;
        }

        if (this.orderCreateData.delivery.delivery_type == 'store' && this.orderCreateData.delivery.store_id == 0) {
          this.$util.showToast({
            title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】没有可提货的门店,请选择其他配送方式' });

          return false;
        }

        if (this.orderCreateData.delivery.delivery_type == 'local') {

          if (this.orderCreateData.delivery.canLocalDelicery) {

            var hour = parseInt(this.orderCreateData.delivery.buyer_ask_delivery_time.split(":")[0]);
            var minute = parseInt(this.orderCreateData.delivery.buyer_ask_delivery_time.split(":")[1]);

            var start_hour = parseInt(this.orderCreateData.delivery.start_time.split(":")[0]);
            var start_minute = parseInt(this.orderCreateData.delivery.start_time.split(":")[1]);

            var end_hour = parseInt(this.orderCreateData.delivery.end_time.split(":")[0]);
            var end_minute = parseInt(this.orderCreateData.delivery.end_time.split(":")[1]);

            // 判断是否全天
            if (!(start_hour == end_hour && start_minute == end_minute)) {

              // 当前时间早于配送时间
              if (hour < start_hour || hour == start_hour && minute < start_minute) {
                this.$util.showToast({
                  title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】送达时间不能小于配送开始时间' });

                return false;
              }

              // 当前时间在配送时间内，送达时间：开始时间~结束时间
              if (!(hour > start_hour && hour < end_hour || hour == start_hour && minute > start_minute || hour ==
              start_hour && minute >= start_minute && hour < end_hour)) {
                this.$util.showToast({
                  title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】送达时间范围：开始时间~结束时间' });

                return false;
              }
            }
          } else {
            this.$util.showToast({
              title: '店铺【"' + this.orderPaymentData.shop_goods_list.site_name + '】已休息' });

            return false;
          }

        }

      }

      return true;
    },
    // 显示店铺优惠信息
    openSitePromotion: function openSitePromotion() {
      this.$refs.sitePromotionPopup.open();
    },
    // 显示店铺配送信息
    openSiteDelivery: function openSiteDelivery() {
      this.tempData = {
        delivery: this.$util.deepClone(this.orderPaymentData.delivery) };

      this.$refs.deliveryPopup.open();
    },
    // 选择配送方式
    selectDeliveryType: function selectDeliveryType(data) {
      this.orderCreateData.delivery.delivery_type = data.name;
      this.orderCreateData.delivery.delivery_type_name = data.title;
      this.tempData = {
        delivery: this.$util.deepClone(this.orderPaymentData.delivery) };

      // 如果是门店配送
      if (data.name == 'store') {
        if (data.store_list[0] != undefined) {
          this.orderCreateData.delivery.store_id = data.store_list[0].store_id;
          this.tempData.delivery.store_id = data.store_list[0].store_id;
        }
      }
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.orderCalculate();
      this.$forceUpdate();
    },
    // 选择自提点
    selectPickupPoint: function selectPickupPoint(store_id) {
      this.orderCreateData.delivery.store_id = store_id;
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.orderCalculate();
      this.$forceUpdate();
      this.$refs['deliveryPopup'].close();
    },
    // 使用余额
    useBalance: function useBalance() {
      if (this.orderCreateData.is_balance) this.orderCreateData.is_balance = 0;else
      this.orderCreateData.is_balance = 1;
      this.orderCalculate();
      this.$forceUpdate();
    },
    imgError: function imgError(goodsIndex) {
      this.orderPaymentData.shop_goods_list.goods_list[goodsIndex].goods_image = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },
    //打开发票弹窗
    openInvoicePopup: function openInvoicePopup(val) {
      this.orderInvoice = this.$util.deepClone(val);
      this.orderInvoice.invoice_type = this.orderInvoice.invoice_type == undefined ? 1 : this.orderInvoice.invoice_type;
      this.orderInvoice.invoice_title_type = this.orderInvoice.invoice_title_type == undefined ? 1 : this.orderInvoice.invoice_title_type;
      this.orderInvoice.invoice_content = this.orderInvoice.invoice_content ? this.orderInvoice.invoice_content : '';
      this.orderInvoice.invoice_title = this.orderInvoice.invoice_title ? this.orderInvoice.invoice_title : '';
      this.orderInvoice.invoice_full_address = this.orderInvoice.invoice_full_address ? this.orderInvoice.invoice_full_address :
      ''; //邮寄地址
      this.orderInvoice.is_tax_invoice = this.orderInvoice.is_tax_invoice ? this.orderInvoice.is_tax_invoice : 0; //是否需要增值税发票
      this.orderInvoice.invoice_email = this.orderInvoice.invoice_email ? this.orderInvoice.invoice_email : ''; // 邮箱
      this.orderInvoice.taxpayer_number = this.orderInvoice.taxpayer_number ? this.orderInvoice.taxpayer_number : ''; //纳税人识别号
      this.openPopup('invoicePopup');
    },
    // 切换发票开关
    changeIsInvoice: function changeIsInvoice() {
      if (this.orderInvoice.is_invoice == 0) {
        this.orderInvoice.is_invoice = 1;
      } else {
        this.orderInvoice.is_invoice = 0;
      }
      this.$forceUpdate();
    },
    // 切换发票类型
    changeInvoiceType: function changeInvoiceType(invoice_type) {
      this.orderInvoice.invoice_type = invoice_type;
      this.$forceUpdate();
    },
    // 切换发票个人还是企业
    changeInvoiceTitleType: function changeInvoiceTitleType(invoice_title_type) {
      this.orderInvoice.invoice_title_type = invoice_title_type;
      this.$forceUpdate();
    },
    // 选择发票内容
    changeInvoiceContent: function changeInvoiceContent(invoice_content) {
      this.orderInvoice.invoice_content = invoice_content;
      this.$forceUpdate();
    },
    //关闭发票弹窗
    closeInvoicePopup: function closeInvoicePopup() {
      this.orderInvoice.invoice_type = 1; // 发票类型  1 纸质 2 电子
      this.orderInvoice.invoice_title_type = 1; // 抬头类型  1 个人 2 企业
      this.orderInvoice.invoice_content = ''; // 发票内容
      this.orderInvoice.invoice_title = ''; // 发票抬头
      this.orderInvoice.invoice_full_address = ''; // 发票邮寄地址
      this.orderInvoice.is_tax_invoice = 0; // 是否需要增值税专用发票  0 不需要 1 需要
      this.orderInvoice.invoice_email = ''; //发票邮箱
      this.orderInvoice.taxpayer_number = ''; //纳税人识别号
      this.orderCalculate();
      this.$forceUpdate();
      this.$refs.invoicePopup.close();
    },
    // 发票验证
    invoiceVerify: function invoiceVerify() {
      if (this.orderInvoice.is_invoice == 1) {
        if (this.orderInvoice.invoice_title == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写发票抬头" });

          return false;
        }
        if (this.orderInvoice.invoice_title_type == 2 && this.orderInvoice.taxpayer_number == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写纳税人识别号" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 1 && this.orderInvoice.invoice_full_address == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写发票邮寄地址" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 2 && this.orderInvoice.invoice_email == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写邮箱" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 2 && this.orderInvoice.invoice_email != '') {
          var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
          if (!reg.test(this.orderInvoice.invoice_email)) {
            this.$refs.invoicePopup.open();
            this.$util.showToast({
              title: "请填写正确的邮箱地址" });

            return false;
          }
        }
        if (this.orderInvoice.invoice_content == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请选择发票内容" });

          return false;
        }

      }
      return true;
    },
    // 保存发票信息
    saveInvoice: function saveInvoice() {
      if (this.invoiceVerify()) {
        this.orderPaymentData.shop_goods_list = this.orderInvoice;
        this.orderCalculate();
        this.closePopup('invoicePopup');
      }
    },
    bindTimeChange: function bindTimeChange(e) {
      var time = e.target.value;
      this.orderCreateData.delivery[e.currentTarget.dataset.siteid].buyer_ask_delivery_time = time;
      this.orderCalculate();
      this.$forceUpdate();
    },
    toShopDetail: function toShopDetail(e) {
      this.$util.redirectTo('/otherpages/shop/index/index', {
        site_id: e });

    },
    navigateTo: function navigateTo(sku_id) {
      this.$util.redirectTo('/pages/goods/detail/detail', {
        sku_id: sku_id });

    },
    // 显示选择支付方式弹框
    openChoosePayment: function openChoosePayment() {
      uni.setStorageSync('paySource', '');
      if (this.verify()) this.$refs.choosePaymentPopup.open();
    } },

  onShow: function onShow() {
    // 刷新多语言
    this.$langConfig.refresh();

    if (uni.getStorageSync('addressBack')) {
      uni.removeStorageSync('addressBack');
    }

    // 判断登录
    if (!uni.getStorageSync('token')) {
      this.$util.redirectTo('/pages/login/login/login');
    } else {
      this.getOrderPaymentData();
    }

    this.isIphoneX = this.$util.uniappIsIPhoneX();
  },
  onHide: function onHide() {
    if (this.$refs.loadingCover) this.$refs.loadingCover.show();
  },
  computed: {
    // 余额抵扣
    balanceDeduct: function balanceDeduct() {
      if (this.orderPaymentData.member_account.balance_total <= parseFloat(this.orderPaymentData.order_money).toFixed(2)) {
        return parseFloat(this.orderPaymentData.member_account.balance_total).toFixed(2);
      } else {
        return parseFloat(this.orderPaymentData.order_money).toFixed(2);
      }
    } },

  filters: {
    // 金额格式化输出
    moneyFormat: function moneyFormat(money) {
      return parseFloat(money).toFixed(2);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 607:
/*!***********************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/point/public/js/payment.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      isIphoneX: false,
      orderCreateData: {},
      orderPaymentData: {
        exchange_info: {
          type: 0 } },


      type: 1,
      isSub: false };

  },
  methods: {
    // 显示弹出层
    openPopup: function openPopup(ref) {
      this.$refs[ref].open();
    },
    // 关闭弹出层
    closePopup: function closePopup(ref) {
      this.$refs[ref].close();
    },
    // 选择收货地址，默认有定位
    selectAddress: function selectAddress() {
      var params = {
        back: '/promotionpages/point/payment/payment',
        local: 0,
        type: 1 };

      // 外卖配送需要定位地址
      // if (this.orderPaymentData.delivery.delivery_type == 'local') {
      // 	params.local = 1;
      // 	params.type = 2;
      // }
      this.$util.redirectTo('/otherpages/member/address/address', params);
    },
    // 获取订单初始化数据
    getOrderPaymentData: function getOrderPaymentData() {var _this = this;
      this.orderCreateData = uni.getStorageSync('exchangeOrderCreateData');
      var pay_flag = uni.getStorageSync("pay_flag"); // 支付中标识，防止返回时，提示,跳转错误
      if (!this.orderCreateData) {
        if (pay_flag == 1) {
          uni.removeStorageSync("pay_flag");
        } else {
          this.$util.showToast({
            title: '未获取到创建订单所需数据！' });

          setTimeout(function () {
            _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }, 1000);
        }
        return;
      }

      this.orderCreateData.buyer_message = '';

      this.$api.sendRequest({
        url: '/pointexchange/api/ordercreate/payment',
        data: this.orderCreateData,
        success: function success(res) {
          if (res.code >= 0) {
            _this.orderPaymentData = res.data;
            _this.orderPaymentData.timestamp = res.timestamp;
            if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
          } else {
            _this.$util.showToast({
              title: '未获取到创建订单所需数据！' });

            setTimeout(function () {
              _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
            }, 1000);
          }
        },
        fail: function fail(res) {
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        } });

    },
    // 订单创建
    orderCreate: function orderCreate() {var _this2 = this;
      if (this.verify()) {
        if (this.isSub) return;
        this.isSub = true;

        var data = this.$util.deepClone(this.orderCreateData);
        data.delivery = JSON.stringify(data.delivery);
        data.member_address = JSON.stringify(data.member_address);

        this.$api.sendRequest({
          url: '/pointexchange/api/ordercreate/create',
          data: data,
          success: function success(res) {
            if (res.code >= 0) {
              if (_this2.orderPaymentData.exchange_info.pay_type == 1 && _this2.orderPaymentData.exchange_info.price !=
              '0.00') {
                _this2.$refs.choosePaymentPopup.getPayInfo(res.data);
                _this2.isSub = false;
              } else {
                _this2.$util.redirectTo('/promotionpages/point/result/result', {}, 'redirectTo');
              }
              // uni.removeStorage({
              // 	key: 'exchangeOrderCreateData',
              // 	success: () => {}
              // });
            } else {
              _this2.isSub = false;
              if (res.data.error_code == 10 || res.data.error_code == 12) {
                uni.showModal({
                  title: '订单未创建',
                  content: res.message,
                  confirmText: '去设置',
                  success: function success(res) {
                    if (res.confirm) {
                      _this2.selectAddress();
                    }
                  } });

              } else {
                _this2.$util.showToast({
                  title: res.message });

              }
            }
          },
          fail: function fail(res) {
            uni.hideLoading();
            _this2.isSub = false;
          } });

      }
    },
    // 订单验证
    verify: function verify() {
      if (this.orderPaymentData.exchange_info.type == 1) {
        if (!this.orderPaymentData.member_address) {
          this.$util.showToast({
            title: '请先选择您的收货地址' });

          return false;
        }
      }
      return true;
    },
    imgError: function imgError() {
      var imageUrl = '';
      if (this.orderPaymentData.exchange_info.type == 1) {
        imageUrl = this.$util.img('upload/uniapp/point/gift.png');
      } else if (this.orderPaymentData.exchange_info.type == 2) {
        imageUrl = this.$util.img('upload/uniapp/point/coupon.png');
      } else if (this.orderPaymentData.exchange_info.type == 3) {
        imageUrl = this.$util.img('upload/uniapp/point/hongbao.png');
      } else {
        imageUrl = this.$util.getDefaultImage().default_goods_img;
      }
      this.orderPaymentData.exchange_info.image = imageUrl;
      this.$forceUpdate();
    },
    // 显示选择支付方式弹框
    openChoosePayment: function openChoosePayment() {
      if (this.verify() && this.orderPaymentData.exchange_info.pay_type == 1 && this.orderPaymentData.exchange_info.price !=
      '0.00') this.$refs.choosePaymentPopup.open();else
      this.orderCreate();
    } },

  onShow: function onShow() {
    // 刷新多语言
    this.$langConfig.refresh();

    if (uni.getStorageSync('addressBack')) {
      uni.removeStorageSync('addressBack');
    }

    // 判断登录
    if (!uni.getStorageSync('token')) {
      this.$util.redirectTo('/pages/login/login/login');
    } else {
      this.getOrderPaymentData();
    }

    this.isIphoneX = this.$util.uniappIsIPhoneX();
  },
  filters: {
    // 金额格式化输出
    moneyFormat: function moneyFormat(money) {
      return parseFloat(money).toFixed(2);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 651:
/*!**************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/wholesale/public/js/detail.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _htmlParser = _interopRequireDefault(__webpack_require__(/*! @/common/js/html-parser */ 206));
var _wxJssdk = __webpack_require__(/*! @/common/js/wx-jssdk.js */ 151);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _regeneratorRuntime() {"use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return exports;};var exports = {},Op = Object.prototype,hasOwn = Op.hasOwnProperty,$Symbol = "function" == typeof Symbol ? Symbol : {},iteratorSymbol = $Symbol.iterator || "@@iterator",asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];}try {define({}, "");} catch (err) {define = function define(obj, key, value) {return obj[key] = value;};}function wrap(innerFn, outerFn, self, tryLocsList) {var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,generator = Object.create(protoGenerator.prototype),context = new Context(tryLocsList || []);return generator._invoke = function (innerFn, self, context) {var state = "suspendedStart";return function (method, arg) {if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {if ("throw" === method) throw arg;return doneResult();}for (context.method = method, context.arg = arg;;) {var delegate = context.delegate;if (delegate) {var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {if (delegateResult === ContinueSentinel) continue;return delegateResult;}}if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);} else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };}"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);}};}(innerFn, self, context), generator;}function tryCatch(fn, obj, arg) {try {return { type: "normal", arg: fn.call(obj, arg) };} catch (err) {return { type: "throw", arg: err };}}exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {return this;});var getProto = Object.getPrototypeOf,NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {["next", "throw", "return"].forEach(function (method) {define(prototype, method, function (arg) {return this._invoke(method, arg);});});}function AsyncIterator(generator, PromiseImpl) {function invoke(method, arg, resolve, reject) {var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {var result = record.arg,value = result.value;return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {invoke("next", value, resolve, reject);}, function (err) {invoke("throw", err, resolve, reject);}) : PromiseImpl.resolve(value).then(function (unwrapped) {result.value = unwrapped, resolve(result);}, function (error) {return invoke("throw", error, resolve, reject);});}reject(record.arg);}var previousPromise;this._invoke = function (method, arg) {function callInvokeWithMethodAndArg() {return new PromiseImpl(function (resolve, reject) {invoke(method, arg, resolve, reject);});}return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();};}function maybeInvokeDelegate(delegate, context) {var method = delegate.iterator[context.method];if (undefined === method) {if (context.delegate = null, "throw" === context.method) {if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);}function pushTryEntry(locs) {var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);}function resetTryEntry(entry) {var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;}function Context(tryLocsList) {this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);}function values(iterable) {if (iterable) {var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {var i = -1,next = function next() {for (; ++i < iterable.length;) {if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;}return next.value = undefined, next.done = !0, next;};return next.next = next;}}return { next: doneResult };}function doneResult() {return { value: undefined, done: !0 };}return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));}, exports.mark = function (genFun) {return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;}, exports.awrap = function (arg) {return { __await: arg };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {return this;}), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {return result.done ? result.value : iter.next();});}, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {return this;}), define(Gp, "toString", function () {return "[object Generator]";}), exports.keys = function (object) {var keys = [];for (var key in object) {keys.push(key);}return keys.reverse(), function next() {for (; keys.length;) {var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;}return next.done = !0, next;};}, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);}}, stop: function stop() {this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;}, dispatchException: function dispatchException(exception) {if (this.done) throw exception;var context = this;function handle(loc, caught) {return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;}for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i],record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {var hasCatch = hasOwn.call(entry, "catchLoc"),hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);} else if (hasCatch) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);} else {if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);}}}}, abrupt: function abrupt(type, arg) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {var finallyEntry = entry;break;}}finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);}, complete: function complete(record, afterLoc) {if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;}, finish: function finish(finallyLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;}}, catch: function _catch(tryLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {var record = entry.completion;if ("throw" === record.type) {var thrown = record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield: function delegateYield(iterable, resultName, nextLoc) {return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;} }, exports;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =



{
  data: function data() {
    return {
      skuId: 0,
      goodsId: 0,

      // 商品详情
      goodsSkuDetail: {
        goods_id: 0,
        goods_service: [] },

      // 店铺详情
      shopInfo: {
        logo: '',
        shop_baozh: 0,
        shop_qtian: 0,
        shop_zhping: 0,
        shop_erxiaoshi: 0,
        shop_tuihuo: 0,
        shop_shiyong: 0,
        shop_shiti: 0,
        shop_xiaoxie: 0 },


      cartCount: 0, // 购物车商品数量
      whetherCollection: 0,

      // 媒体,图片,视频

      // 解决每个商品SKU图片数量不同时，无法切换到第一个，导致轮播图显示不出来
      swiperInterval: 1,
      swiperAutoplay: false,
      swiperCurrent: 1,
      switchMedia: 'img',

      isIphoneX: false, //判断手机是否是iphoneX以上

      poster: "-1", //海报
      posterMsg: "", //海报错误信息
      posterHeight: 0,

      //评价
      goodsEvaluate: {
        member_headimg: '',
        member_name: '',
        content: '',
        images: [],
        create_time: 0,
        sku_name: '' },

      memberId: 0,
      contactData: {
        title: '',
        path: '',
        img: '' },

      detailTab: 0,
      service: null,
      showKefu: 0,
      // 是否可分享到好物圈
      goodsCircle: false,
      evaluateConfig: {
        evaluate_audit: 1,
        evaluate_show: 0,
        evaluate_status: 1 } };


  },
  onLoad: function onLoad(data) {var _this = this;
    this.skuId = data.sku_id || 0;
    this.goodsId = data.goods_id || 0;
    this.isIphoneX = this.$util.uniappIsIPhoneX();
    if (data.source_member) uni.setStorageSync('source_member', data.source_member);
    // 小程序扫码进入
    if (data.scene) {
      var sceneParams = decodeURIComponent(data.scene);
      sceneParams = sceneParams.split('&');
      if (sceneParams.length) {
        sceneParams.forEach(function (item) {
          if (item.indexOf('sku_id') != -1) _this.skuId = item.split('-')[1];
          if (item.indexOf('source_member') != -1) uni.setStorageSync('source_member', item.split('-')[1]);
        });
      }
    }
    // this.getService();
  },
  onShow: function onShow() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {return _regeneratorRuntime().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              _this2.$store.dispatch('getAddonIsexit').then( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                          data.wholesale) {_context.next = 5;break;}
                          _this2.$util.showToast({
                            title: '批发活动未开启',
                            mask: true });

                          setTimeout(function () {
                            _this2.$util.redirectTo('/pages/index/index/index', {}, 'redirectTo');
                          }, 1000);_context.next = 13;break;case 5:

                          // 刷新多语言
                          _this2.$langConfig.refresh();

                          if (uni.getStorageSync('token')) {
                            _this2.getCartCount();
                            _this2.getMemberId();
                          }
                          _this2.canGoConnect();
                          _this2.getKekuConfig();
                          //同步获取商品详情
                          _context.next = 11;return _this2.getGoodsSkuDetail();case 11:

                          //修改商品信息
                          _this2.modifyGoodsInfo();

                          // 评价设置
                          _this2.getEvaluateConfig();case 13:case "end":return _context.stop();}}}, _callee);}));return function (_x) {return _ref.apply(this, arguments);};}());case 1:case "end":return _context2.stop();}}}, _callee2);}))();



  },
  methods: {
    canGoConnect: function canGoConnect() {var _this3 = this;
      this.$api.sendRequest({
        url: "/api/addon/addonisexit",
        success: function success(res) {
          if (res.code == 0 && res.data) {
            _this3.showKefu = res.data.servicer;
          }
        } });

    },
    //联系客服
    goConnect: function goConnect() {
      if (uni.getStorageSync('token')) {
        var data = {
          site_id: this.shopInfo.site_id,
          sku_id: this.goodsSkuDetail.sku_id };

        this.$util.redirectTo('/otherpages/chat/room/room', data);
        return false;
      } else {
        this.$refs.login.open('/pages/goods/detail/detail?sku_id=' + this.goodsSkuDetail.sku_id);
        return;
      }
    },
    // 获取商品详情
    getGoodsSkuDetail: function getGoodsSkuDetail(skuId) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {var res, data, goods_attr_format, i, j;return _regeneratorRuntime().wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                _this4.skuId = skuId || _this4.skuId;_context3.next = 3;return (
                  _this4.$api.sendRequest({
                    url: '/wholesale/api/goods/detail',
                    async: false,
                    data: {
                      goods_id: _this4.goodsId } }));case 3:res = _context3.sent;


                data = res.data;
                if (data.goods_sku_detail != null) {
                  _this4.goodsSkuDetail = data.goods_sku_detail;
                  _this4.shopInfo = data.shop_info;
                  _this4.skuId = _this4.goodsSkuDetail.sku_id;

                  _this4.goodsSkuDetail.goods_service = [];
                  if (_this4.shopInfo.shop_baozh == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '保证服务',
                      desc: '保证服务' });

                  }

                  if (_this4.shopInfo.shop_qtian == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '7天退换',
                      desc: '满足7天无理由退换货申请的前提下，包邮商品需要买家承担退货邮费，非包邮商品需要买家承担发货和退货邮费' });

                  }

                  if (_this4.shopInfo.shop_zhping == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '正品保障',
                      desc: '商品支持正品保障服务' });

                  }

                  if (_this4.shopInfo.shop_erxiaoshi == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '两小时发货',
                      desc: '付款后2小时内发货' });

                  }

                  if (_this4.shopInfo.shop_tuihuo == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '退货承诺',
                      desc: '退货承诺' });

                  }

                  if (_this4.shopInfo.shop_shiyong == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '试用中心',
                      desc: '试用中心' });

                  }

                  if (_this4.shopInfo.shop_shiti == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '实体验证',
                      desc: '实体验证' });

                  }

                  if (_this4.shopInfo.shop_xiaoxie == 1) {
                    _this4.goodsSkuDetail.goods_service.push({
                      service_name: '消协保证',
                      desc: '如有商品质量问题、描述不符或未收到货等，您有权申请退款或退货，来回邮费由卖家承担' });

                  }

                  //媒体
                  if (_this4.goodsSkuDetail.video_url) _this4.switchMedia = "video";

                  if (_this4.goodsSkuDetail.sku_images) _this4.goodsSkuDetail.sku_images = _this4.goodsSkuDetail.sku_images.split(",");else
                  _this4.goodsSkuDetail.sku_images = [];

                  // 多规格时合并主图
                  if (_this4.goodsSkuDetail.goods_spec_format && _this4.goodsSkuDetail.goods_image) {
                    _this4.goodsSkuDetail.goods_image = _this4.goodsSkuDetail.goods_image.split(",");
                    _this4.goodsSkuDetail.sku_images = _this4.goodsSkuDetail.sku_images.concat(_this4.goodsSkuDetail.goods_image);
                  }

                  _this4.goodsSkuDetail.unit = _this4.goodsSkuDetail.unit || "件";

                  // 当前商品SKU规格
                  if (_this4.goodsSkuDetail.sku_spec_format) _this4.goodsSkuDetail.sku_spec_format = JSON.parse(_this4.goodsSkuDetail.sku_spec_format);

                  // 商品属性
                  if (_this4.goodsSkuDetail.goods_attr_format) {
                    goods_attr_format = JSON.parse(_this4.goodsSkuDetail.goods_attr_format);
                    _this4.goodsSkuDetail.goods_attr_format = _this4.$util.unique(goods_attr_format, "attr_id");
                    for (i = 0; i < _this4.goodsSkuDetail.goods_attr_format.length; i++) {
                      for (j = 0; j < goods_attr_format.length; j++) {
                        if (_this4.goodsSkuDetail.goods_attr_format[i].attr_id == goods_attr_format[j].attr_id && _this4.goodsSkuDetail.goods_attr_format[
                        i].attr_value_id != goods_attr_format[j].attr_value_id) {
                          _this4.goodsSkuDetail.goods_attr_format[i].attr_value_name += "、" + goods_attr_format[j].attr_value_name;
                        }
                      }
                    }
                  }

                  // 商品SKU格式
                  if (_this4.goodsSkuDetail.goods_spec_format) _this4.goodsSkuDetail.goods_spec_format = JSON.parse(_this4.goodsSkuDetail.goods_spec_format);

                  _this4.$langConfig.title(_this4.goodsSkuDetail.goods_name);

                  // 商品详情
                  // if (this.goodsSkuDetail.goods_content) this.goodsSkuDetail.goods_content = htmlParser(this.goodsSkuDetail.goods_content);

                  _this4.contactData = {
                    title: _this4.goodsSkuDetail.sku_name,
                    path: '/promotionpages/wholesale/detail/detail?sku_id=' + _this4.skuId,
                    img: _this4.$util.img(_this4.goodsSkuDetail.sku_image, {
                      size: 'big' }) };



                  if (uni.getStorageSync('token')) {
                    _this4.getWhetherCollection();
                  }

                  _this4.setWechatShare();

                  // if (this.$refs.goodsPromotion) this.$refs.goodsPromotion.refresh(this.goodsSkuDetail.goods_promotion);

                  if (_this4.$refs.loadingCover) _this4.$refs.loadingCover.hide();


                  _this4.getGoodScircleConfig();

                } else {
                  _this4.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
                }case 6:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    /**
     * 刷新商品详情数据
     * @param {Object} goodsSkuDetail
     */
    refreshGoodsSkuDetail: function refreshGoodsSkuDetail(goodsSkuDetail) {var _this5 = this;
      Object.assign(this.goodsSkuDetail, goodsSkuDetail);
      this.goodsSkuDetail.unit = this.goodsSkuDetail.unit || "件";
      // if (this.$refs.goodsPromotion) this.$refs.goodsPromotion.refresh(this.goodsSkuDetail.goods_promotion);

      // 解决轮播图数量不一致时，切换到第一个
      if (this.swiperCurrent > this.goodsSkuDetail.sku_images.length) {
        this.swiperAutoplay = true;
        this.swiperCurrent = 1;
        setTimeout(function () {
          _this5.swiperAutoplay = false;
        }, 40);
      }
    },
    goHome: function goHome() {
      // this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
      this.$util.redirectTo('/otherpages/shop/index/index', {
        site_id: this.shopInfo.site_id });

    },
    goCart: function goCart() {
      this.$util.redirectTo('/promotionpages/wholesale/cartList/cartList');
    },
    // 加入购物车
    wholesaleJoinCart: function wholesaleJoinCart() {var _this6 = this;
      if (!uni.getStorageSync('token')) {
        this.$refs.login.open('/promotionpages/wholesale/detail/detail?sku_id=' + this.skuId);
        return;
      }
      this.$refs.goodsSku.show("wholesale_join_cart", function () {
        _this6.getCartCount();
      });
    },
    // 立即购买
    wholesaleBuyNow: function wholesaleBuyNow() {var _this7 = this;
      if (!uni.getStorageSync('token')) {
        this.$refs.login.open('/promotionpages/wholesale/detail/detail?sku_id=' + this.skuId);
        return;
      }
      this.$refs.goodsSku.show("wholesale_buy_now", function () {
        _this7.getCartCount();
      });
    },
    swiperChange: function swiperChange(e) {
      this.swiperCurrent = e.detail.current + 1;
    },


    //-------------------------------------服务-------------------------------------

    openMerchantsServicePopup: function openMerchantsServicePopup() {
      this.$refs.merchantsServicePopup.open();
    },
    closeMerchantsServicePopup: function closeMerchantsServicePopup() {
      this.$refs.merchantsServicePopup.close();
    },



    //-------------------------------------属性-------------------------------------

    openAttributePopup: function openAttributePopup() {
      this.$refs.attributePopup.open();
    },
    closeAttributePopup: function closeAttributePopup() {
      this.$refs.attributePopup.close();
    },

    //-------------------------------------属性-------------------------------------



    //-------------------------------------评价-------------------------------------
    //商品评论列表
    getGoodsEvaluate: function getGoodsEvaluate() {var _this8 = this;
      this.$api.sendRequest({
        url: "/api/goodsevaluate/firstinfo",
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          var data = res.data;
          if (data) {
            _this8.goodsEvaluate = data;
            if (_this8.goodsEvaluate.images) _this8.goodsEvaluate.images = _this8.goodsEvaluate.images.split(",");
            if (_this8.goodsEvaluate.is_anonymous == 1) _this8.goodsEvaluate.member_name = _this8.goodsEvaluate.member_name.replace(
            _this8.goodsEvaluate.member_name.substring(1, _this8.goodsEvaluate.member_name.length - 1), '***');
          }
        } });

    },

    // 预览评价图片
    previewEvaluate: function previewEvaluate(index, field) {
      var paths = [];
      for (var i = 0; i < this.goodsEvaluate[field].length; i++) {
        paths.push(this.$util.img(this.goodsEvaluate[field][i]));
      }
      uni.previewImage({
        current: index,
        urls: paths });

    },


    //-------------------------------------关注-------------------------------------

    //获取用户是否关注
    getWhetherCollection: function getWhetherCollection() {var _this9 = this;
      this.$api.sendRequest({
        url: "/api/goodscollect/iscollect",
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          _this9.whetherCollection = res.data;
        } });

    },

    editCollection: function editCollection() {var _this10 = this;
      if (uni.getStorageSync('token')) {

        //未关注添加关注
        if (this.whetherCollection == 0) {
          this.$api.sendRequest({
            url: "/api/goodscollect/add",
            data: {
              sku_id: this.skuId },

            success: function success(res) {
              var data = res.data;
              if (data > 0) {
                _this10.whetherCollection = 1;
              }
            } });

        } else {
          //已关注取消关注
          this.$api.sendRequest({
            url: "/api/goodscollect/delete",
            data: {
              goods_id: this.goodsSkuDetail.goods_id },

            success: function success(res) {
              var data = res.data;
              if (data > 0) {
                _this10.whetherCollection = 0;
              }
            } });

        }
      } else {
        this.$refs.login.open('/promotionpages/wholesale/detail/detail?sku_id=' + this.skuId);
      }
    },
    //获取购物车数量
    getCartCount: function getCartCount() {var _this11 = this;
      this.$store.dispatch('getWholeSaleNumber').then(function (e) {
        _this11.cartCount = e;
      });
    },
    //更新商品信息
    modifyGoodsInfo: function modifyGoodsInfo() {
      //更新商品点击量
      this.$api.sendRequest({
        url: "/api/goods/modifyclicks",
        data: {
          sku_id: this.skuId,
          site_id: this.goodsSkuDetail.site_id },

        success: function success(res) {} });


      //添加足迹
      this.$api.sendRequest({
        url: "/api/goodsbrowse/add",
        data: {
          sku_id: this.skuId },

        success: function success(res) {} });

    },


    //-------------------------------------分享-------------------------------------
    // 打开分享弹出层
    openSharePopup: function openSharePopup() {
      this.$refs.sharePopup.open();
    },
    // 关闭分享弹出层
    closeSharePopup: function closeSharePopup() {
      this.$refs.sharePopup.close();
    },
    //-------------------------------------海报-------------------------------------

    // 打开海报弹出层
    openPosterPopup: function openPosterPopup() {var _this12 = this;
      this.getGoodsPoster();
      this.$refs.sharePopup.close();
      this.$refs.posterPopup.open();
      if (this.poster != '-1') {
        setTimeout(function () {
          var view = uni.createSelectorQuery().in(_this12).select(".poster-layer .image-wrap");
          view.fields({
            size: true },
          function (data) {
            var posterWhith = data.width;
            var ratio = parseFloat((740 / posterWhith).toFixed(2));
            if (uni.getStorageSync('token')) {
              _this12.posterHeight = parseInt(1120 / ratio);
            } else {
              _this12.posterHeight = parseInt(1100 / ratio);
            }
          }).exec();
        }, 100);
      }
    },
    // 关闭海报弹出层
    closePosterPopup: function closePosterPopup() {
      this.$refs.posterPopup.close();
    },
    //生成海报
    getGoodsPoster: function getGoodsPoster() {var _this13 = this;
      //活动海报信息
      var qrcode_param = {
        goods_id: this.goodsId };

      if (this.memberId) qrcode_param.source_member = this.memberId;
      this.$api.sendRequest({
        url: "/wholesale/api/goods/poster",
        data: {
          page: '/promotionpages/wholesale/detail/detail',
          qrcode_param: JSON.stringify(qrcode_param) },

        success: function success(res) {
          if (res.code == 0) {
            _this13.poster = res.data.path + "?time=" + new Date().getTime();
          } else {
            _this13.posterMsg = res.message;
          }
        } });

    },
    // 预览图片
    previewMedia: function previewMedia(index) {
      var paths = [];
      for (var i = 0; i < this.goodsSkuDetail.sku_images.length; i++) {
        paths.push(this.$util.img(this.goodsSkuDetail.sku_images[i], {
          size: 'big' }));

      }
      uni.previewImage({
        current: index,
        urls: paths });

    },
    swiperImgError: function swiperImgError(index) {
      this.goodsSkuDetail.sku_images[index] = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },

    //小程序中保存海报
    saveGoodsPoster: function saveGoodsPoster() {var _this14 = this;
      var url = this.$util.img(this.poster);
      uni.downloadFile({
        url: url,
        success: function success(res) {
          if (res.statusCode === 200) {
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function success() {
                _this14.$util.showToast({
                  title: "保存成功" });

              },
              fail: function fail() {
                _this14.$util.showToast({
                  title: "保存失败，请稍后重试" });

              } });

          }
        } });

    },

    getMemberId: function getMemberId() {var _this15 = this;
      this.$api.sendRequest({
        url: "/api/member/id",
        success: function success(res) {
          if (res.code >= 0) {
            _this15.memberId = res.data;
          }
        } });

    },
    //售后保障查询
    getService: function getService() {var _this16 = this;
      this.$api.sendRequest({
        url: '/api/goods/aftersale',
        success: function success(res) {
          if (res.code == 0 && res.data) {
            var data = res.data.content;
            if (res.data.content) _this16.service = (0, _htmlParser.default)(res.data.content);
          }
        } });

    },
    /**
     * 设置微信公众号分享
     */
    setWechatShare: function setWechatShare() {
      // 微信公众号分享






























    },

    /**
     *	获取是否开启微信圈子 
     */
    getGoodScircleConfig: function getGoodScircleConfig() {var _this17 = this;
      this.$api.sendRequest({
        url: '/goodscircle/api/config/info',
        success: function success(res) {
          if (res.code == 0) {
            if (res.data.is_use) {
              _this17.goodsSyncToGoodsCircle();
            }
          }
        } });

    },
    /**
     *	将商品同步到微信圈子 
     */
    goodsSyncToGoodsCircle: function goodsSyncToGoodsCircle() {var _this18 = this;
      this.$api.sendRequest({
        url: '/goodscircle/api/goods/sync',
        data: {
          goods_id: this.goodsSkuDetail.goods_id },

        success: function success(res) {
          if (res.code == 0) {
            _this18.goodsCircle = true;
          }
        } });

    },
    /**
     * 将商品推荐到微信圈子
     */
    openBusinessView: function openBusinessView() {var _this19 = this;
      if (wx.openBusinessView) {
        wx.openBusinessView({
          businessType: 'friendGoodsRecommend',
          extraData: {
            product: {
              item_code: this.goodsSkuDetail.goods_id,
              title: this.goodsSkuDetail.sku_name,
              image_list: this.goodsSkuDetail.sku_images.map(function (ele) {
                return _this19.$util.img(ele);
              }) } },


          success: function success(res) {
            console.log('success', res);
          },
          fail: function fail(res) {
            console.log('fail', res);
          } });

      }
    },

    getEvaluateConfig: function getEvaluateConfig() {var _this20 = this;
      this.$api.sendRequest({
        url: '/api/goodsevaluate/config',
        success: function success(res) {
          if (res.code == 0) {
            var data = res.data;
            _this20.evaluateConfig = data;
            if (_this20.evaluateConfig.evaluate_show == 1) {
              //商品评论
              _this20.getGoodsEvaluate();
            }
          }
        } });

    },
    copyUrl: function copyUrl() {var _this21 = this;
      var text = '【' + this.goodsSkuDetail.sku_name + '】发现好物，一起来看看吧。' + this.$config.h5Domain +
      '/promotionpages/wholesale/detail/detail?goods_id=' + this.goodsId;
      if (this.memberId) text += '&source_member=' + this.memberId;
      this.$util.copy(text, function () {
        _this21.closeSharePopup();
      });
    },
    getKekuConfig: function getKekuConfig() {var _this22 = this;
      this.$api.sendRequest({
        url: '/api/config/servicer',
        success: function success(res) {
          if (res.code == 0) {
            _this22.kefuConfig = res.data;
          }
        } });

    },
    toEvaluateDetail: function toEvaluateDetail(id) {
      this.$util.redirectTo('/otherpages/goods/evaluate/evaluate', {
        goods_id: id });

    },
    navigate: function navigate(href, e) {
      //比如点击a标签，打开某个webview并传输url
      this.$util.redirectTo('/otherpages/webview/webview', {
        link: encodeURIComponent(href) });

    },
    //h5播放视频
    openVideo: function openVideo(url, video_img) {
      // this.$refs.videoPopup.open();
      this.$util.redirectTo('/otherpages/goods/preview-video', {
        video_url: url,
        video_img: video_img });

    },
    errorShopLogo: function errorShopLogo() {
      this.shopInfo.avatar = this.$util.getDefaultImage().default_shop_img;
      this.$forceUpdate();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 662:
/*!***************************************************************************************!*\
  !*** /Users/longchu/Documents/接单/改客服源码/promotionpages/wholesale/public/js/payment.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      isIphoneX: false,
      orderCreateData: {
        is_balance: 0,
        pay_password: '' },

      orderPaymentData: {
        member_account: {
          balance: 0,
          is_pay_password: 0 } },


      orderInvoice: {
        is_invoice: 0, //是否需要发票
        invoice_type: 1, //发票类型电子、纸质
        invoice_title: '', //发票抬头
        invoice_title_type: 1, // 抬头类型
        invoice_full_address: '', //邮寄地址
        is_tax_invoice: 0, //是否需要增值税发票
        invoice_email: '', // 邮箱
        invoice_content: '', //发票内容
        taxpayer_number: '' //纳税人识别号
      },
      isSub: false,
      tempData: null,
      siteDelivery: {
        site_id: 0,
        data: [] } };



  },
  methods: {
    // 显示弹出层
    openPopup: function openPopup(ref) {
      this.$refs[ref].open();
    },
    // 关闭弹出层
    closePopup: function closePopup(ref) {
      if (this.tempData) {
        Object.assign(this.orderCreateData, this.tempData);
        Object.assign(this.orderPaymentData, this.tempData);
        this.tempData = null;
        this.$forceUpdate();
      }
      this.$refs[ref].close();
    },
    // 选择收货地址，默认有定位
    selectAddress: function selectAddress() {
      var params = {
        back: '/promotionpages/wholesale/payment/payment',
        local: 0,
        type: 1 };

      // 外卖配送需要定位地址
      // if (this.orderPaymentData.delivery.delivery_type == 'local') {
      // 	params.local = 1;
      // 	params.type = 2;
      // }
      this.$util.redirectTo('/otherpages/member/address/address', params);
    },
    // 获取订单初始化数据
    getOrderPaymentData: function getOrderPaymentData() {var _this = this;
      this.orderCreateData = uni.getStorageSync('wholesaleOrderCreateData');
      var pay_flag = uni.getStorageSync("pay_flag"); // 支付中标识，防止返回时，提示,跳转错误
      if (!this.orderCreateData) {
        if (pay_flag == 1) {
          uni.removeStorageSync("pay_flag");
        } else {
          this.$util.showToast({
            title: '未获取到创建订单所需数据！' });

          setTimeout(function () {
            _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }, 1000);
        }
        return;
      }

      // 获取经纬度
      var location = uni.getStorageSync('location');
      if (location) {
        this.orderCreateData = Object.assign(this.orderCreateData, location);
      }

      this.$api.sendRequest({
        url: '/wholesale/api/ordercreate/payment',
        data: this.orderCreateData,
        success: function success(res) {
          if (res.code >= 0) {
            _this.orderPaymentData = res.data;
            _this.orderPaymentData.timestamp = res.timestamp;
            _this.handlePaymentData();
            if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
          } else {
            _this.$util.showToast({
              title: '未获取到创建订单所需数据！' });

            setTimeout(function () {
              _this.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
            }, 1000);
          }
        },
        fail: function fail(res) {
          if (_this.$refs.loadingCover) _this.$refs.loadingCover.hide();
        } });

    },
    // 处理结算订单数据
    handlePaymentData: function handlePaymentData() {var _this2 = this;
      this.orderCreateData.delivery = {};
      this.orderCreateData.invoice = {};
      this.orderCreateData.coupon = {};
      this.orderCreateData.buyer_message = {};
      this.orderCreateData.is_balance = 0;
      this.orderCreateData.pay_password = '';

      var data = this.orderPaymentData;

      var h = new Date().getHours().toString();
      var m = new Date().getMinutes().toString();
      if (h.length == 1) {
        h = '0' + h;
      }
      if (m.length == 1) {
        m = '0' + m;
      }
      var nowTime = h + ':' + m;
      var weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

      // 获取时间，必须是字符串,跟后端一致
      var index_weeks = ['0', '1', '2', '3', '4', '5', '6'];
      var curr_week = index_weeks[new Date().getDay()];

      Object.keys(data.shop_goods_list).forEach(function (key, index) {
        var siteItem = data.shop_goods_list[key];

        // 店铺配送方式
        _this2.orderCreateData.delivery[key] = {};

        if (siteItem.express_type[0] != undefined) {
          _this2.orderCreateData.delivery[key].delivery_type = siteItem.express_type[0].name;
          _this2.orderCreateData.delivery[key].delivery_type_name = siteItem.express_type[0].title;
          _this2.orderCreateData.delivery[key].store_id = 0;

          // 如果默认配送方式是门店配送模拟点击门店tab选项
          if (siteItem.express_type[0].name == 'store') {
            if (siteItem.express_type[0].store_list[0] != undefined) {
              _this2.orderCreateData.delivery[key].store_id = siteItem.express_type[0].store_list[0].store_id;
            }
          }
        }

        if (data.is_virtual == 0 && siteItem.local_config) {

          // 是否显示时间选择
          if (siteItem.local_config.info && siteItem.local_config.info.time_is_open == 1) {
            _this2.orderCreateData.delivery[key].showTimeBar = true;
            _this2.orderCreateData.delivery[key].buyer_ask_delivery_time = nowTime;
            // 当日是否支持配送
            if (siteItem.local_config.info.time_week.length == 0 ||
            siteItem.local_config.info.time_week.length == 7 ||
            siteItem.local_config.info.time_week.indexOf(curr_week) > -1) {
              _this2.orderCreateData.delivery[key].canLocalDelicery = true;
            } else {
              _this2.orderCreateData.delivery[key].canLocalDelicery = false;
            }

            if (siteItem.local_config.info.time_type == 0) {
              _this2.orderCreateData.delivery[key].deliveryWeek = "全天";
            } else if (siteItem.local_config.info.time_week.length > 0) {
              if (siteItem.local_config.info.time_week.length == 7) {
                _this2.orderCreateData.delivery[key].deliveryWeek = "全天";
                _this2.orderCreateData.delivery[key].showTime = false;
              } else {
                _this2.orderCreateData.delivery[key].showTime = true;
                // 判断配送时间是连续还是间隔
                var timeWeek = siteItem.local_config.info.time_week;
                var is_interval = false; // 是否间隔
                for (var i = 0; i < timeWeek.length; i++) {
                  if (i + 1 < timeWeek.length) {
                    var difference = timeWeek[i + 1] - timeWeek[i];
                    if (difference > 1) {
                      is_interval = true;
                      break;
                    }
                  }
                }

                if (is_interval) {
                  var temp = [];
                  for (var i = 0; i < timeWeek.length; i++) {
                    temp.push(weeks[timeWeek[i]]);
                  }
                  _this2.orderCreateData.delivery[key].deliveryWeek = temp.join("、");
                } else {
                  _this2.orderCreateData.delivery[key].deliveryWeek = weeks[timeWeek[0]] + "至" + weeks[timeWeek[timeWeek.length -
                  1]];
                }
              }
            } else {
              _this2.orderCreateData.delivery[key].deliveryWeek = "店铺未设置配送时间";
            }

            // picker组件时间起始
            var start_time = siteItem.local_config.info.start_time;
            _this2.orderCreateData.delivery[key].start_time = _this2.getTimeStr(start_time);

            var end_time = siteItem.local_config.info.end_time;
            _this2.orderCreateData.delivery[key].end_time = _this2.getTimeStr(end_time);

            var current_time = new Date(_this2.$util.timeStampTurnTime(data.timestamp));
            var hour = current_time.getHours();
            var minute = current_time.getMinutes();

            var start_hour = parseInt(_this2.orderCreateData.delivery[key].start_time.split(":")[0]);
            var start_minute = parseInt(_this2.orderCreateData.delivery[key].start_time.split(":")[1]);

            var end_hour = parseInt(_this2.orderCreateData.delivery[key].end_time.split(":")[0]);
            var end_minute = parseInt(_this2.orderCreateData.delivery[key].end_time.split(":")[1]);

            // 检测当天是否能够配送，然后判断送达时间。不在配送时间当日不能下单，例：配送时间是周一到周五，那么周末不能下单，周一到周五可以下单
            if (_this2.orderCreateData.delivery[key].canLocalDelicery) {

              // 判断是否全天
              if (!(start_hour == end_hour && start_minute == end_minute)) {

                // 当前时间早于配送时间，送达时间：开始时间~结束时间
                if (hour < start_hour || hour == start_hour && minute < start_minute) {
                  _this2.orderCreateData.delivery[key].buyer_ask_delivery_time = (start_hour.toString().length == 1 ? "0" +
                  start_hour :
                  start_hour) + ':' + (
                  start_minute.toString().length == 1 ? "0" + start_minute : start_minute);
                }

                // if (((hour > start_hour && hour < end_hour) || (hour == start_hour && minute > start_minute) || (hour ==
                // 		start_hour && minute >= start_minute && hour < end_hour))) {
                // }

                // 当前时间晚于配送时间，送达时间隐藏，不能下单
                if (hour > end_hour || hour == end_hour && minute > end_minute) {
                  _this2.orderCreateData.delivery[key].canLocalDelicery = false;
                }
              }

            }

          } else {
            _this2.orderCreateData.delivery[key].showTimeBar = false;
            _this2.orderCreateData.delivery[key].deliveryWeek = "店铺未开启配送时间";
          }

        }

        siteItem.goods_list.forEach(function (v) {
          if (typeof v.sku_spec_format == 'string') {
            if (v.sku_spec_format) {
              v.sku_spec_format = JSON.parse(v.sku_spec_format);
            } else {
              v.sku_spec_format = [];
            }
          }
        });

        _this2.orderCreateData.buyer_message[key] = '';
      });

      if (data.is_virtual) this.orderCreateData.member_address = {
        mobile: '' };


      Object.assign(data, this.orderCreateData);
      this.orderCalculate();
    },
    // 转化时间字符串
    getTimeStr: function getTimeStr(val) {
      var h = parseInt(val / 3600).toString();
      var m = parseInt(val % 3600 / 60).toString();
      if (m.length == 1) {
        m = '0' + m;
      }
      if (h.length == 1) {
        h = '0' + h;
      }
      return h + ':' + m;
    },
    // 订单计算
    orderCalculate: function orderCalculate() {var _this3 = this;
      Object.keys(this.orderPaymentData.shop_goods_list).forEach(function (key, index) {
        var siteItem = _this3.orderPaymentData.shop_goods_list[key];

        //店铺发票
        if (siteItem.is_invoice) {
          _this3.orderCreateData.invoice[key] = {};
          if (!Array.isArray(siteItem.invoice_config)) {
            _this3.orderCreateData.invoice[key].is_invoice = siteItem.is_invoice;
            _this3.orderCreateData.invoice[key].invoice_type = siteItem.invoice_type;
            _this3.orderCreateData.invoice[key].invoice_title = siteItem.invoice_title;
            _this3.orderCreateData.invoice[key].taxpayer_number = siteItem.taxpayer_number;
            _this3.orderCreateData.invoice[key].invoice_content = siteItem.invoice_content;
            _this3.orderCreateData.invoice[key].invoice_full_address = siteItem.invoice_full_address;
            _this3.orderCreateData.invoice[key].is_tax_invoice = siteItem.is_tax_invoice;
            _this3.orderCreateData.invoice[key].invoice_email = siteItem.invoice_email;
            _this3.orderCreateData.invoice[key].invoice_title_type = siteItem.invoice_title_type;
          }
        }
      });

      var data = this.$util.deepClone(this.orderCreateData);
      data.delivery = JSON.stringify(data.delivery);
      data.invoice = JSON.stringify(data.invoice);
      data.member_address = JSON.stringify(data.member_address);

      this.$api.sendRequest({
        url: '/wholesale/api/ordercreate/calculate',
        data: data,
        success: function success(res) {
          if (res.code >= 0) {
            _this3.orderPaymentData.member_address = res.data.member_address;
            _this3.orderPaymentData.delivery_money = res.data.delivery_money;
            _this3.orderPaymentData.invoice_money = res.data.invoice_money;
            _this3.orderPaymentData.invoice_delivery_money = res.data.invoice_delivery_money;
            _this3.orderPaymentData.promotion_money = res.data.promotion_money;
            _this3.orderPaymentData.order_money = res.data.order_money;
            _this3.orderPaymentData.balance_money = res.data.balance_money;
            _this3.orderPaymentData.pay_money = res.data.pay_money;
            _this3.orderPaymentData.goods_money = res.data.goods_money;
            Object.keys(res.data.shop_goods_list).forEach(function (key, index) {
              var siteItem = res.data.shop_goods_list[key];
              _this3.orderPaymentData.shop_goods_list[key].order_money = siteItem.order_money;
              _this3.orderPaymentData.shop_goods_list[key].pay_money = siteItem.pay_money;
              _this3.orderPaymentData.shop_goods_list[key].invoice_money = siteItem.invoice_money;
              _this3.orderPaymentData.shop_goods_list[key].invoice_delivery_money = siteItem.invoice_delivery_money;
            });
            _this3.$forceUpdate();
          } else {
            _this3.$util.showToast({
              title: res.message });

          }
        } });

    },
    /**
     * 订单创建
     * @param {String} pay_password 支付密码
     */
    orderCreate: function orderCreate(pay_password) {var _this4 = this;
      if (this.verify()) {
        if (this.isSub) return;
        this.isSub = true;

        if (pay_password) this.orderCreateData.pay_password = pay_password;

        var data = this.$util.deepClone(this.orderCreateData);
        data.delivery = JSON.stringify(data.delivery);
        data.coupon = JSON.stringify(data.coupon);
        data.invoice = JSON.stringify(data.invoice);
        data.member_address = JSON.stringify(data.member_address);
        data.buyer_message = JSON.stringify(data.buyer_message);

        this.$api.sendRequest({
          url: '/wholesale/api/ordercreate/create',
          data: data,
          success: function success(res) {
            uni.hideLoading();
            if (res.code >= 0) {
              if (_this4.orderPaymentData.pay_money == 0) {
                _this4.$util.redirectTo('/pages/pay/result/result', {
                  code: res.data },
                'redirectTo');
              } else {
                _this4.$refs.choosePaymentPopup.getPayInfo(res.data);
                _this4.isSub = false;
              }
              // uni.removeStorage({
              // 	key: 'wholesaleOrderCreateData',
              // 	success: () => {}
              // });
            } else {
              _this4.isSub = false;
              if (res.data.error_code == 10 || res.data.error_code == 12) {
                uni.showModal({
                  title: '订单未创建',
                  content: res.message,
                  confirmText: '去设置',
                  success: function success(res) {
                    if (res.confirm) {
                      _this4.selectAddress();
                    }
                  } });

              } else {
                _this4.$util.showToast({
                  title: res.message });

              }
            }
            _this4.$store.dispatch('getWholeSaleNumber');
          },
          fail: function fail(res) {
            uni.hideLoading();
            _this4.isSub = false;
          } });

      }
    },
    // 订单验证
    verify: function verify() {
      if (this.orderPaymentData.is_virtual == 1) {
        if (!this.orderCreateData.member_address.mobile.length) {
          this.$util.showToast({
            title: '请输入您的手机号码' });

          return false;
        }
        var reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
        if (!reg.test(this.orderCreateData.member_address.mobile)) {
          this.$util.showToast({
            title: '请输入正确的手机号码' });

          return false;
        }
      }

      if (this.orderPaymentData.is_virtual == 0) {

        var expressTypeVerify = true;

        for (var key in this.orderPaymentData.shop_goods_list) {
          if (this.orderPaymentData.shop_goods_list[key].express_type.length == 0) {
            expressTypeVerify = false;
            this.$util.showToast({
              title: '店铺【"' + this.orderPaymentData.shop_goods_list[key].site_name + '】未设置配送方式' });

            break;
          }
        }

        if (!expressTypeVerify) return false;

        if (!this.orderPaymentData.member_address) {
          this.$util.showToast({
            title: '请先选择您的收货地址' });

          return false;
        }

        var deliveryVerify = true;
        for (var _key in this.orderCreateData.delivery) {
          if (JSON.stringify(this.orderCreateData.delivery[_key]) == "{}") {
            deliveryVerify = false;
            this.$util.showToast({
              title: '店铺【"' + this.orderPaymentData.shop_goods_list[_key].site_name + '】未设置配送方式' });

            break;
          }
          if (this.orderCreateData.delivery[_key].delivery_type == 'store' && this.orderCreateData.delivery[_key].store_id ==
          0) {
            deliveryVerify = false;
            this.$util.showToast({
              title: '店铺【"' + this.orderPaymentData.shop_goods_list[_key].site_name + '】没有可提货的门店,请选择其他配送方式' });

            break;
          }

          if (this.orderCreateData.delivery[_key].delivery_type == 'local') {

            if (this.orderCreateData.delivery[_key].canLocalDelicery) {

              var hour = parseInt(this.orderCreateData.delivery[_key].buyer_ask_delivery_time.split(":")[0]);
              var minute = parseInt(this.orderCreateData.delivery[_key].buyer_ask_delivery_time.split(":")[1]);

              var start_hour = parseInt(this.orderCreateData.delivery[_key].start_time.split(":")[0]);
              var start_minute = parseInt(this.orderCreateData.delivery[_key].start_time.split(":")[1]);

              var end_hour = parseInt(this.orderCreateData.delivery[_key].end_time.split(":")[0]);
              var end_minute = parseInt(this.orderCreateData.delivery[_key].end_time.split(":")[1]);

              // 判断是否全天
              if (!(start_hour == end_hour && start_minute == end_minute)) {

                // 当前时间早于配送时间
                if (hour < start_hour || hour == start_hour && minute < start_minute) {
                  this.$util.showToast({
                    title: '店铺【"' + this.orderPaymentData.shop_goods_list[_key].site_name + '】送达时间不能小于配送开始时间' });

                  deliveryVerify = false;
                  break;
                }

                // 当前时间在配送时间内，送达时间：开始时间~结束时间
                if (!(hour > start_hour && hour < end_hour || hour == start_hour && minute > start_minute || hour ==
                start_hour && minute >= start_minute && hour < end_hour)) {
                  this.$util.showToast({
                    title: '店铺【"' + this.orderPaymentData.shop_goods_list[_key].site_name + '】送达时间范围：开始时间~结束时间' });

                  deliveryVerify = false;
                  break;
                }
              }
            } else {
              this.$util.showToast({
                title: '店铺【"' + this.orderPaymentData.shop_goods_list[_key].site_name + '】已休息' });

              deliveryVerify = false;
              break;
            }

          }

        }

        if (!deliveryVerify) return false;

      }

      return true;
    },
    // 显示店铺配送信息
    openSiteDelivery: function openSiteDelivery(siteId, deliveryData) {
      this.tempData = {
        delivery: this.$util.deepClone(this.orderPaymentData.delivery) };

      this.siteDelivery.site_id = siteId;
      this.siteDelivery.data = deliveryData;
      this.$refs.deliveryPopup.open();
    },
    // 选择配送方式
    selectDeliveryType: function selectDeliveryType(data) {
      this.orderCreateData.delivery[this.siteDelivery.site_id].delivery_type = data.name;
      this.orderCreateData.delivery[this.siteDelivery.site_id].delivery_type_name = data.title;
      this.tempData = {
        delivery: this.$util.deepClone(this.orderPaymentData.delivery) };

      // 如果是门店配送
      if (data.name == 'store') {
        if (data.store_list[0] != undefined) {
          this.orderCreateData.delivery[this.siteDelivery.site_id].store_id = data.store_list[0].store_id;
          this.tempData.delivery[this.siteDelivery.site_id].store_id = data.store_list[0].store_id;
        }
      }
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.orderCalculate();
      this.$forceUpdate();
    },
    // 选择自提点
    selectPickupPoint: function selectPickupPoint(store_id) {
      this.orderCreateData.delivery[this.siteDelivery.site_id].store_id = store_id;
      Object.assign(this.orderPaymentData, this.orderCreateData);
      this.orderCalculate();
      this.$forceUpdate();
      this.$refs['deliveryPopup'].close();
    },
    // 使用余额
    useBalance: function useBalance() {
      if (this.orderCreateData.is_balance) this.orderCreateData.is_balance = 0;else
      this.orderCreateData.is_balance = 1;
      this.orderCalculate();
      this.$forceUpdate();
    },
    imgError: function imgError(siteIndex, goodsIndex) {
      this.orderPaymentData.shop_goods_list[siteIndex].goods_list[goodsIndex].sku_image = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },
    //打开发票弹窗
    openInvoicePopup: function openInvoicePopup(val) {
      this.orderInvoice = this.$util.deepClone(val);
      this.orderInvoice.invoice_type = this.orderInvoice.invoice_type == undefined ? 1 : this.orderInvoice.invoice_type;
      this.orderInvoice.invoice_title_type = this.orderInvoice.invoice_title_type == undefined ? 1 : this.orderInvoice.invoice_title_type;
      this.orderInvoice.invoice_content = this.orderInvoice.invoice_content ? this.orderInvoice.invoice_content : '';
      this.orderInvoice.invoice_title = this.orderInvoice.invoice_title ? this.orderInvoice.invoice_title : '';
      this.orderInvoice.invoice_full_address = this.orderInvoice.invoice_full_address ? this.orderInvoice.invoice_full_address :
      ''; //邮寄地址
      this.orderInvoice.is_tax_invoice = this.orderInvoice.is_tax_invoice ? this.orderInvoice.is_tax_invoice : 0; //是否需要增值税发票
      this.orderInvoice.invoice_email = this.orderInvoice.invoice_email ? this.orderInvoice.invoice_email : ''; // 邮箱
      this.orderInvoice.taxpayer_number = this.orderInvoice.taxpayer_number ? this.orderInvoice.taxpayer_number : ''; //纳税人识别号
      this.openPopup('invoicePopup');
    },
    // 切换发票开关
    changeIsInvoice: function changeIsInvoice() {
      if (this.orderInvoice.is_invoice == 0) {
        this.orderInvoice.is_invoice = 1;
      } else {
        this.orderInvoice.is_invoice = 0;
      }
      this.$forceUpdate();
    },
    // 切换发票类型
    changeInvoiceType: function changeInvoiceType(invoice_type) {
      this.orderInvoice.invoice_type = invoice_type;
      this.$forceUpdate();
    },
    // 切换发票个人还是企业
    changeInvoiceTitleType: function changeInvoiceTitleType(invoice_title_type) {
      this.orderInvoice.invoice_title_type = invoice_title_type;
      this.$forceUpdate();
    },
    // 选择发票内容
    changeInvoiceContent: function changeInvoiceContent(invoice_content) {
      this.orderInvoice.invoice_content = invoice_content;
      this.$forceUpdate();
    },
    //关闭发票弹窗
    closeInvoicePopup: function closeInvoicePopup() {
      this.orderInvoice.invoice_type = 1; // 发票类型  1 纸质 2 电子
      this.orderInvoice.invoice_title_type = 1; // 抬头类型  1 个人 2 企业
      this.orderInvoice.invoice_content = ''; // 发票内容
      this.orderInvoice.invoice_title = ''; // 发票抬头
      this.orderInvoice.invoice_full_address = ''; // 发票邮寄地址
      this.orderInvoice.is_tax_invoice = 0; // 是否需要增值税专用发票  0 不需要 1 需要
      this.orderInvoice.invoice_email = ''; //发票邮箱
      this.orderInvoice.taxpayer_number = ''; //纳税人识别号
      this.orderCalculate();
      this.$forceUpdate();
      this.$refs.invoicePopup.close();
    },
    // 发票验证
    invoiceVerify: function invoiceVerify() {
      if (this.orderInvoice.is_invoice == 1) {
        if (this.orderInvoice.invoice_title == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写发票抬头" });

          return false;
        }
        if (this.orderInvoice.invoice_title_type == 2 && this.orderInvoice.taxpayer_number == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写纳税人识别号" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 1 && this.orderInvoice.invoice_full_address == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写发票邮寄地址" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 2 && this.orderInvoice.invoice_email == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请填写邮箱" });

          return false;
        }
        if (this.orderInvoice.invoice_type == 2 && this.orderInvoice.invoice_email != '') {
          var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
          if (!reg.test(this.orderInvoice.invoice_email)) {
            this.$refs.invoicePopup.open();
            this.$util.showToast({
              title: "请填写正确的邮箱地址" });

            return false;
          }
        }
        if (this.orderInvoice.invoice_content == '') {
          this.$refs.invoicePopup.open();
          this.$util.showToast({
            title: "请选择发票内容" });

          return false;
        }

      }
      return true;
    },
    // 保存发票信息
    saveInvoice: function saveInvoice() {
      if (this.invoiceVerify()) {
        this.orderPaymentData.shop_goods_list[this.orderInvoice.site_id] = this.orderInvoice;
        this.orderCalculate();
        this.closePopup('invoicePopup');
      }
    },
    bindTimeChange: function bindTimeChange(e) {
      var time = e.target.value;
      this.orderCreateData.delivery[e.currentTarget.dataset.siteid].buyer_ask_delivery_time = time;
      this.orderCalculate();
      this.$forceUpdate();
    },
    toShopDetail: function toShopDetail(e) {
      this.$util.redirectTo('/otherpages/shop/index/index', {
        site_id: e });

    },
    navigateTo: function navigateTo(sku_id) {
      this.$util.redirectTo('/promotionpages/wholesale/detail/detail', {
        sku_id: sku_id });

    },
    // 显示选择支付方式弹框
    openChoosePayment: function openChoosePayment() {
      uni.setStorageSync('paySource', '');
      if (this.verify()) this.$refs.choosePaymentPopup.open();
    } },

  onShow: function onShow() {
    // 刷新多语言
    this.$langConfig.refresh();

    if (uni.getStorageSync('addressBack')) {
      uni.removeStorageSync('addressBack');
    }

    // 判断登录
    if (!uni.getStorageSync('token')) {
      this.$util.redirectTo('/pages/login/login/login');
    } else {
      this.getOrderPaymentData();
    }

    this.isIphoneX = this.$util.uniappIsIPhoneX();
  },
  onHide: function onHide() {
    if (this.$refs.loadingCover) this.$refs.loadingCover.show();
  },
  computed: {
    // 余额抵扣
    balanceDeduct: function balanceDeduct() {
      if (this.orderPaymentData.member_account.balance_total <= parseFloat(this.orderPaymentData.order_money).toFixed(2)) {
        return parseFloat(this.orderPaymentData.member_account.balance_total).toFixed(2);
      } else {
        return parseFloat(this.orderPaymentData.order_money).toFixed(2);
      }
    } },

  filters: {
    // 金额格式化输出
    moneyFormat: function moneyFormat(money) {
      return parseFloat(money).toFixed(2);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/promotionpages/common/vendor.js.map