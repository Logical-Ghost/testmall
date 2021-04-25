import VueRouter from 'vue-router'
import Vue from 'vue'

const home=()=>import('@/views/home/home.vue');
const category=()=>import('@/views/category/category.vue');
const profile=()=>import('@/views/profile/profile.vue');
const shopcart=()=>import('@/views/shopcart/shopcart.vue');

//1.安装插件
Vue.use(VueRouter);

//2.创建VueRouter对象
const routes=[
  {
    path:'',
    redirect:'Home',
  },
  {
    path:'/Home',
    component:home,
  },
  {
    path:'/Category',
    component:category,
  },
  {
    path:'/Profile',
    component:profile,
  },
  {
    path:'/Shopcart',
    component:shopcart,
  }
]
const router=new VueRouter({
  routes,
  mode:'history',
})

export default router;