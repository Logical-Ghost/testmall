<!--  -->
<template>
  <div class="tab-control">
    <div 
    v-for="(item, index) in titles" 
    :key="index" class="item"
    :class="{'currentClass':currentIndex==index}" 
    @click="btnClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      currentIndex:0,
    }
  },
  methods: {
    btnClick(index){
      this.currentIndex=index;
      this.$emit("itemClick",index);
    }
  },
  
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.tab-control {
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: flex;
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.tab-control .item {
  font-size: 14px;
  flex: auto;
}
/* 设置类 */
.currentClass{
  color: var(--color-high-text);
}
.currentClass span{
  padding-bottom: 4px;
  border-bottom:var(--color-tint) 3px solid ;
}
/* @import url(); 引入css类 */
</style>