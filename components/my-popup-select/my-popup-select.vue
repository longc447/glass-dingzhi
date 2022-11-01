<template>
  <view class="my_popup_select">
    <uni-popup ref="mypopup" type="bottom">
      <scroll-view scroll-y="true" class="">
        <view class="popup_view">
          <view class="title">{{ title }}</view>
          <view class="itemBox">
            <view :class="['item', chooseIndex == index ? 'active' : '']" v-for="(item, index) in list" :key="index" @click="chooseIndex = index">{{ item }}</view>
          </view>
          <view class="btnBox">
            <view class="btnCancel" @click="cancel()">取消</view>
            <view class="btnSubmit" @click="submit()">确定</view>
          </view>
        </view>
      </scroll-view>
    </uni-popup>
  </view>
</template>

<script>
export default {
  name: 'my-popup-select',
  props: {
    title: {
      type: String,
      default: '默认标题',
    },
    range: [],
    value: {
      type: String / Number,
      default: 0,
    },
  },
  data() {
    return {
      chooseIndex: -1,
      list: [],
    };
  },
  mounted() {
    this.list = this.range;
  },
  methods: {
    cancel() {
      this.chooseIndex = -1;
      this.$refs.mypopup.close();
    },
    submit() {
      console.log(this.list[this.chooseIndex], 'this.values');
      if (this.chooseIndex == undefined) {
        uni.showToast({
          title: '没有选择内容',
          icon: 'none',
        });
        return;
      }
      const result = {
        target: {
          value: this.chooseIndex, //this.range[this.chooseIndex]
        },
      };
      this.$emit('change', result);
      this.cancel();
    },
    open() {
      this.$refs.mypopup.open();
    },
  },
};
</script>

<style lang="scss">
.my_popup_select {
  .popup_view {
    width: 100%;
    // height: 500rpx;
    max-height: 80vh;
    min-height: 50vh;
    border-radius: 0;
    // overflow-y: scroll;
    // height: 300rpx;
    .itemBox {
      margin-top: 100rpx;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 100rpx;
      .item {
        flex-grow: 0;
        margin: 10rpx;
        width: 100rpx;
        height: 50rpx;
        text-align: center;
        background: #f0eff5;
      }
      .item.active {
        background: red;
        color: #ffffff;
      }
    }
    .title {
      text-align: center;
      font-weight: bold;
      line-height: 80rpx;
      font-size: 30rpx;
      width: 100%;
      height: 80rpx;
      position: fixed;
      top: 0;
      background-color: #ffffff;
      border-bottom: 1px solid #e5e5e5;
      color: #333333;
    }

    .btnBox {
      position: fixed;
      width: 100%;
      bottom: 0;
      left: 0;
      display: flex;
      height: 80rpx;
      justify-content: center;

      .btnCancel {
        line-height: 80rpx;
        text-align: center;
        flex: 1;
        background: #ffb644;
        color: #ffffff;
      }

      .btnSubmit {
        line-height: 80rpx;
        text-align: center;
        flex: 1;
        background: red;
        color: #ffffff;
      }
    }
  }
}
</style>
