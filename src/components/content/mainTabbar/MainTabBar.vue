<!--  -->
<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/Home">
        <template v-slot:item-img>
          <img src="@/assets/img/tabbar/home.svg" alt="" />
        </template>
        <template v-slot:item-img-active>
          <img src="@/assets/img/tabbar/home_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>主页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/Category" currentColor="red">
        <template v-slot:item-img>
          <img src="@/assets/img/tabbar/category.svg" alt="" />
        </template>
        <template v-slot:item-img-active>
          <img src="@/assets/img/tabbar/category_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/Profile">
        <template v-slot:item-img>
          <img src="@/assets/img/tabbar/profile.svg" alt="" />
        </template>
        <template v-slot:item-img-active>
          <img src="@/assets/img/tabbar/profile_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/Shopcart">
        <template v-slot:item-img>
          <img src="@/assets/img/tabbar/shopcart.svg" alt="" />
        </template>
        <template v-slot:item-img-active>
          <img src="@/assets/img/tabbar/shopcart_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar.vue";
import TabBarItem from "@/components/common/tabbar/TabBarItem.vue";
export default {
  name: "",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>