<template>
  <div class="content">
    <router-view class="tabba-router-view" />
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">首页 </van-tabbar-item>
      <van-tabbar-item replace to="/menu" icon="home-o">菜单 </van-tabbar-item>
      <van-tabbar-item replace to="/hot" icon="home-o">潮品 </van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="home-o"
        >购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="search">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss">
.content {
  position: fixed;
  top: 0;
  bottom: 55px;
  left: 0;
  right: 0;
  
}
.tabba-router-view {

  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: rebeccapurple;
  
}
</style>