<!--
 * @Author: ’楚峡云归‘ longc447@gmail.com
 * @Date: 2022-09-28 23:08:00
 * @LastEditors: ’楚峡云归‘ longc447@gmail.com
 * @LastEditTime: 2022-10-26 20:33:24
 * @FilePath: /改客服源码/components/icon-kf/icon-kf.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view :class="[t == 'block' ? 'kf-component' : 'kf-line']">
    <!-- 客服 -->
    <button class="vkefu" open-type="contact" bindcontact="handleContact" session-from="sessionFrom"><text>客服</text></button>

    <view class="kf-style" v-if="t == 'block'"><image :src="kfIcon" mode="scaleToFill"></image></view>
  </view>
</template>

<script>
import config from '@/common/js/config.js';
const { baseUrl } = config;
console.log(baseUrl, 'base');
export default {
  name: 'icon-kf',
  data() {
    return {
      kfIcon: baseUrl + '/h5/static/img/kf.png',
    };
  },
  props: {
    t: {
      type: String,
      default: 'block',
    },
  },
};
</script>

<style lang="scss">
.kf-line {
  background-color: red;
}
.kf-component {
  .vkefu {
    z-index: 11;
    position: fixed;
    width: 80rpx;
    height: 80rpx;
    border-radius: 80rpx;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    bottom: 250rpx;
    right: 20rpx;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24rpx;
    opacity: 0;
  }
  .kf-style {
    z-index: 10;
    position: fixed;
    width: 80rpx;
    height: 80rpx;
    border-radius: 80rpx;
    color: #fff;
    bottom: 250rpx;
    right: 20rpx;
    // background: url('./kf.png');
    image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
