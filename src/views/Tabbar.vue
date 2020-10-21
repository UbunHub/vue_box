<template>
  <div class="hello">
    <router-view  class="tabba-router-view"/>
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">首页 </van-tabbar-item>
      <van-tabbar-item replace to="/menu" icon="home-o">菜单 </van-tabbar-item>
      <van-tabbar-item replace to="/hot" icon="home-o">潮品 </van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="home-o">购物车 </van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="search"> 我的 </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
  data(){
    return{
      active: 0,
    }
  }
};
</script>

<style lang="scss">
.hello{
  height: 100%;
}
.tabba-router-view{
  padding-bottom: 44px;
}
</style>