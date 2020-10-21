<template>
  <div class="menu">
    <div class="menu-bander">
      <van-swipe :autoplay="3000" indicator-color="red">
        <van-swipe-item v-for="(image, index) in imageList" :key="index">
          <van-image fit="cover" lazy-load :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="menu-address">
      
      <van-icon class="address-icon" name="location-o" />
      <div class="address-name">
        <h4 class="address-title">阳光科创大厦点</h4>
        <p class="address-distances">距你189m</p>
      </div>
 
      <van-switch 
      class="address-isself" 
      v-model="checked" 
      size="18"
      />
    </div>
  

    <div
      :class="
        !tabscroller ? 'menu-product' : 'menu-product menu-product-scroller'
      "
      ref="menu_product"
    >
    <div class="priduct-sidebar">
      <van-sidebar  v-model="activeKey" sticky>
        <van-sidebar-item title="ee" dot v-for="index in 16" :key="index" />
      </van-sidebar>
    </div>
      <div class="priduct-list">

        <van-tabs v-model="activeKey" 
        :before-change="beforeChange"
        scrollspy sticky>
          <van-tab v-for="index in 16" :key="index" 
          type="card"
          :title="'选项_' + index"
         
          >
            <van-card
              num="2"
              price="2.00"
              desc="eeee"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
              v-for="index2 in 4"
              :key="index2"
            >
            </van-card>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      tabscroller: false,
      checked: true,
      imageList: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, false);
    // this.timer = setInterval(this.get, 3000);
  },
  methods: {
    onChange(index) {
      this.$notify({ type: "primary", message: index });
    },
    beforeChange(index) {
      this.$notify({ type: "primary", message: index });
      // 返回 false 表示阻止此次切换
      if (index === 1) {
        return false;
      }

      // 返回 Promise 来执行异步逻辑
      return new Promise((resolve) => {
        // 在 resolve 函数中返回 true 或 false
        resolve(true);
      });
    },
    // 滚动监听 · 动画播放
    handleScroll: function () {},
  },
};
</script>

<style>
.menu {
  position: absolute;
  top: 10px;
  bottom: -200px;
  width: 100%;
  overflow: hidden;
  background-color: rebeccapurple;
}
.menu-bander {
  height: 120px;
  top: 40px;
  background-color: white;
  border-radius: 8px;
  margin: 8px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 100px 5px;
}
.menu-address {
  height: 50px;
  background-color: white;
  border-radius: 8px;
  margin: 8px;
  display: flex;
  justify-content: baseline;
  align-self: center;
}


.address-icon {
  width: 20px;
  height: 20px;
  align-self: center;
  margin-left: 10px;
}
.address-name{
  align-self: center;
}
.address-title {
  margin: auto;
  font-size: 14px;
}
.address-distances {
  margin: auto;
  font-size: 12px;
  align-self: center;
}
.address-isself {
  align-self: center;
  flex-basis: auto;
  margin-left: auto;
  margin-right:10px;
}

.menu-product {
  display: grid;
  grid-template-columns: 3fr 8fr;
  background-color: aquamarine;
  height: 100%;
  overflow: scroll;
  position:absolute;

}

.priduct-sidebar {
  
  position:relative;
  top: 10px;
  bottom: 180px;
  background-color: yellow;
  overflow: scroll;
  
}

.priduct-list {
  position:relative;
  top: 10px;
  bottom: 180px;
  background-color: yellow;
  overflow: scroll;
} 



.van-sticky--fixed {
  position: sticky;
  top: 240px;
  z-index: 199;
}
.van-tabs {
  /* max-height: 100zf; */
  /* overflow: hidden; */
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  /* top: 40px; */
  bottom: 160px;
  z-index: 199;
}
</style>