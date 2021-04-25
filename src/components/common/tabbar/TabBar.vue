<!--  -->
<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>
<style scoped>
.tabbar{
  box-shadow: 0 -1px 5px rgba(100, 100, 100, 0.1);
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  display: flex;
  text-align: center;
}
/* @import url(); 引入css类 */
</style>