<!--  -->
<template>
  <swiper>
    <swiper-item v-for="(value, key) in banners" :key="key">
      <a :href="value.link">
        <img :src="value.image" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index.js";
export default {
  name: "",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>