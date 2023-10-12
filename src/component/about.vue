<template>
  <view class="container">
    <uni-card :is-shadow="false" is-full>
      <text class="uni-h6"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        mollitia similique, animi quia placeat voluptate recusandae magnam ipsum
        debitis id quis sint, voluptatibus quibusdam omnis officiis doloremque
        modi voluptates. Facilis?</text
      >
    </uni-card>
    <uni-section title="基础卡片" type="line">
      <uni-card :is-shadow="false">
        <text class="uni-body"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut debitis
          at beatae ex, 。</text
        >
      </uni-card>
    </uni-section>
    <uni-section title="卡片标题+额外信息" type="line">
      <uni-card title="基础卡片" extra="额外信息">
        <text class="uni-body"
          >veniam culpa est similique error maiores? Reiciendis necessitatibus
          minus, possimus commodi vitae corrupti nemo animi quasi
          consectetur!。</text
        >
      </uni-card>
    </uni-section>

    <uni-section title="双标题卡片" type="line">
      <uni-card
        title="基础卡片"
        sub-title="副标题"
        extra="额外信息"
        :thumbnail="avatar"
        @click="onClick"
      >
        <text class="uni-body"
          >veniam culpa est similique error maiores? Reiciendis necessitatibus
          minus, possimus commodi vitae corrupti nemo animi quasi
          consectetur!。</text
        >
      </uni-card>
    </uni-section>

    <uni-section title="通栏卡片" type="line">
      <uni-card
        title="基础卡片"
        :isFull="true"
        sub-title="副标题"
        extra="额外信息"
        :thumbnail="avatar"
      >
        <text class="uni-body"
          >veniam culpa est similique error maiores? Reiciendis necessitatibus
          minus, possimus commodi vitae corrupti nemo animi quasi
          consectetur!。</text
        >
      </uni-card>
    </uni-section>

    <uni-section title="卡片封面图+操作栏" type="line">
      <uni-card :cover="cover" @click="onClick">
        <!-- <image slot='cover' style="width: 100%;" :src="cover"></image> -->
        <text class="uni-body"
          >veniam culpa est similique error maiores? Reiciendis necessitatibus
          minus, possimus commodi vitae corrupti nemo animi quasi
          consectetur!。</text
        >
        <view slot="actions" class="card-actions">
          <view class="card-actions-item" @click="actionsClick('分享')">
            <uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">分享</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('点赞')">
            <uni-icons type="heart" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">点赞</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('评论')">
            <uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">评论</text>
          </view>
        </view>
      </uni-card>
    </uni-section>

    <uni-section title="自定义卡片内容" type="line">
      <uni-card
        title="基础卡片"
        sub-title="副标题"
        extra="额外信息"
        padding="10px 0"
        :thumbnail="avatar"
      >
        <template v-slot:title>
          <uni-list>
            <uni-list-item :show-switch="true" title="自定义标题" />
          </uni-list>
        </template>
        <image style="width: 100%" :src="cover"></image>
        <text class="uni-body uni-mt-5"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          iure eaque cupiditate expedita incidunt quisquam laborum! Esse quidem
          quod quis beatae, ab sed quibusdam ut architecto tempora cupiditate
          odio provident!。</text
        >
        <view slot="actions" class="card-actions">
          <view class="card-actions-item" @click="actionsClick('分享')">
            <uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">分享</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('点赞')">
            <uni-icons type="heart" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">点赞</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('评论')">
            <uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">评论</text>
          </view>
        </view>
      </uni-card>
    </uni-section>

    <uni-section title="卡片+列表" type="line">
      <uni-card padding="0" spacing="0">
        <template v-slot:cover>
          <view class="custom-cover">
            <image class="cover-image" mode="aspectFill" :src="cover"> </image>
            <view class="cover-content">
              <text class="uni-subtitle uni-white">今日新闻热点</text>
            </view>
          </view>
        </template>
        <uni-list>
          <uni-list-item title="今日新闻" showArrow></uni-list-item>
          <uni-list-item title="今日新闻" showArrow></uni-list-item>
        </uni-list>
        <view slot="actions" class="card-actions no-border">
          <view class="card-actions-item" @click="actionsClick('分享')">
            <uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">分享</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('点赞')">
            <uni-icons type="heart" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">点赞</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('评论')">
            <uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">评论</text>
          </view>
        </view>
      </uni-card>
    </uni-section>
  </view>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cover: "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg",
      avatar:
        "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
      extraIcon: {
        color: "#4cd964",
        size: "22",
        type: "gear-filled",
      },
    };
  },
  methods: {
    onClick(e) {
      console.log(e);
    },
    actionsClick(text) {
      uni.showToast({
        title: text,
        icon: "none",
      });
    },
  },
};
</script>

