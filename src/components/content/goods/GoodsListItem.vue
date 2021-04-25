<!--  -->
<template>

  <div class="good-item">
    <a :href="message.link" class="item">
      <img :src="message.show.img" alt="" />
      <div class="title">{{ message.title }}</div>
      <span class="price">{{ message.price }}</span>
      <!-- <span class="iconfont icon-shoucang"></span> -->
      <!-- <span class="iconfont icon-shoucang"></span> -->
      <img src="@/assets/img/common/collect.svg" alt="" class="collect">
      <span>{{ message.cfav }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    message: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
/* @import '@/assets/icon/iconfont.js'; */
.good-item {
  display: inline-block;
  width: 150px;
  /* margin: 0 4px; */
}

/* 图片 */
.item img {
  border-radius: 10px;
  width: 47vw;
  height: 225px;
}
/* 标题 */
.item .title {
  white-space: nowrap;
  overflow: hidden;
  width: 150px;
  text-overflow: ellipsis;
}
/* 价格 */
.item .price {
  color: var(--color-tint);
}
/* 收藏 */
.good-item .collect{
  margin-left: 3px;
  display: inline-block;
  width: 13px;
  height: 13px;
}
/* @import url(); 引入css类 */
</style>