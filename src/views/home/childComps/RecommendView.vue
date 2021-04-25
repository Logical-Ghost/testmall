<!--  -->
<template>
  <div class="recommend">
    <div v-for="(value,key) in recommend" :key="key" class="item">
      <a :href="value.link">
        <img :src="value.image" alt="">
        <div>{{value.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props:{
    recommend:{
      type:Array,
      default(){
        return [];
      }
    }
  }
};
</script>
<style scoped>
.recommend{
  padding: 10px 0 20px 0;
  border-bottom: 10px solid #eee;
  display: flex;
  text-align: center;
}
.item{
  flex: auto;
}
/* 图片 */
.item img{
  width: 65px;
  margin-bottom: 5px;
}
/* @import url(); 引入css类 */
</style>