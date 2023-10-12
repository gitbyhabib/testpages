<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="uni-margin-wrap">
        <swiper
          class="swiper"
          circular
          :indicator-dots="indicatorDots"
          :autoplay="autoplay"
          :interval="interval"
          :duration="duration"
        >
          <swiper-item>
            <view class="swiper-item uni-bg-red">
              <image
                src="https://wowslider.com/sliders/demo-7/data/images/barpark.jpg"
              ></image
            ></view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item uni-bg-green">
              <image
                class="logo"
                src="https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg"
              ></image
            ></view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item uni-bg-blue">
              <image class="logo" src="/static/logo.png"></image
            ></view>
          </swiper-item>
        </swiper>
      </view>
      <view class="swiper-list">
        <view class="uni-list-cell uni-list-cell-pd">
          <view class="uni-list-cell-db">指示点</view>
          <switch :checked="indicatorDots" @change="changeIndicatorDots" />
        </view>
        <view class="uni-list-cell uni-list-cell-pd">
          <view class="uni-list-cell-db">自动播放</view>
          <switch :checked="autoplay" @change="changeAutoplay" />
        </view>
      </view>

      <view class="uni-padding-wrap">
        <view class="uni-common-mt">
          <text>幻灯片切换时长(ms)</text>
          <text class="info">{{ duration }}</text>
        </view>
        <slider
          @change="durationChange"
          :value="duration"
          min="500"
          max="2000"
        />
        <view class="uni-common-mt">
          <text>自动播放间隔时长(ms)</text>
          <text class="info">{{ interval }}</text>
        </view>
        <slider
          @change="intervalChange"
          :value="interval"
          min="2000"
          max="10000"
        />
      </view>

      <view class="uni-hello-text">
        Flex is Flexible The abbreviation of Box means "elastic layout" and is
        used to provide maximum flexibility for box-shaped models. When setting
        display: After flex, continue to set flex-direction for container
        components such as view: row or column, you can arrange subcomponents by
        row or column within the container. uni-app recommends using flex
        layout. Because flex layout is conducive to crossing more platforms,
        especially platforms that use native rendering.
      </view>

      <view class="uni-title uni-common-mt">
        flex-direction: row
        <text>\n横向布局</text>
      </view>
      <view class="uni-flex uni-row">
        <view class="flex-item uni-bg-red">A</view>
        <view class="flex-item uni-bg-green">B</view>
        <view class="flex-item uni-bg-blue">C</view>
      </view>

      <view class="uni-title uni-common-mt">
        flex-direction: column
        <text>\n纵向布局</text>
      </view>
      <view class="uni-flex uni-column">
        <view class="flex-item flex-item-V uni-bg-red">A</view>
        <view class="flex-item flex-item-V uni-bg-green">B</view>
        <view class="flex-item flex-item-V uni-bg-blue">C</view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
    };
  },
  methods: {
    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots;
    },
    changeAutoplay(e) {
      this.autoplay = !this.autoplay;
    },
    intervalChange(e) {
      this.interval = e.detail.value;
    },
    durationChange(e) {
      this.duration = e.detail.value;
    },
  },
};
</script>

<style>
.flex-item {
  width: 33.3%;
  height: 200rpx;
  text-align: center;
  line-height: 200rpx;
}

.flex-item-V {
  width: 100%;
  height: 150rpx;
  text-align: center;
  line-height: 150rpx;
}

.text {
  margin: 15rpx 10rpx;
  padding: 0 20rpx;
  background-color: #ebebeb;
  height: 70rpx;
  line-height: 70rpx;
  text-align: center;
  color: #777;
  font-size: 26rpx;
}

.desc {
  /* text-indent: 40rpx; */
}

.flex-pc {
  display: flex;
  justify-content: center;
}

.uni-margin-wrap {
  width: 690rpx;
  width: 100%;
}

.swiper {
  height: 500rpx;
}

.swiper-item {
  display: block;
  height: 500rpx;
  line-height: 500rpx;
  text-align: center;
}

.swiper-list {
  margin-top: 40rpx;
  margin-bottom: 0;
}

.uni-common-mt {
  margin-top: 60rpx;
  position: relative;
}

.info {
  position: absolute;
  right: 20rpx;
}

.uni-padding-wrap {
  min-width: 550rpx;
  padding: 0 100rpx;
}
</style>
