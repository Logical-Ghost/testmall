<!--  -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-img"></slot>
    <slot v-else name="item-img-active"></slot>
    <div :style="currentStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      // isActive:true,
    };
  },
  computed: {
    isActive() {
      return this.$route.path === this.path;
    },
    currentStyle() {
      return this.isActive ? { color: this.currentColor } : {};
    },
  },
  props: {
    path: String,
    currentColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    itemClick() {
      // console.log(this.path)
      this.$router.push(this.path).catch((err) => {});
      // console.log(this.$route.path)
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: auto;
  font-size: 14px;
}
.tab-bar-item img {
  margin-top: 5px;
  vertical-align: top;
  width: 20px;
  height: 20px;
}
/* @import url(); 引入css类 */
</style>