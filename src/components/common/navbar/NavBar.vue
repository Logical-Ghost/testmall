<!--  -->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>
<style scoped>
/* 导航样式 */
.nav-bar {
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow: 0 1px 10px rgba(100, 100, 100, .1);

}
/* 弹性元素的样式 */
.left,.right{
  width: 60px;
}
.center{
  flex: auto;
}

/* @import url(); 引入css类 */
</style>