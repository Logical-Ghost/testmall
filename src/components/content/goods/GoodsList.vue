<!--  -->
<template>
  <div class="goods-list">
    <goods-list-item 
    v-for="(item,index) in goodslist" :key=index
    :message="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: "",
  components:{
    GoodsListItem,
  },
  props: {
    goodslist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.goods-list{
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  text-align:center;
}
/* @import url(); 引入css类 */
</style>