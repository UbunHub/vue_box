<template>
  <div class="menu">
    <div class="menu-bander" ref="menu_bander">
      <van-swipe :autoplay="3000" indicator-color="red">
        <van-swipe-item v-for="(image, index) in imageList" :key="index">
          <van-image fit="cover" lazy-load :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="menu-content">
      <div class="menu-address">
        <van-icon class="address-icon" name="location-o" />
        <div class="address-name">
          <h4 class="address-title">阳光科创大厦点</h4>
          <p class="address-distances">距你189m</p>
        </div>

        <van-switch class="address-isself" v-model="checked" size="18" />
      </div>

      <div
        :class="
          !tabscroller ? 'menu-product' : 'menu-product menu-product-scroller'
        "
        
        ref="menu_product"
      >
        <div class="priduct-sidebar">
          <van-sidebar v-model="activeKey" @change="sidebarChange">
            <van-sidebar-item
              dot
              v-for="index in 16"
              :key="index"
              :title="'选项 ' + index"
              @click="onSidebarClick"
            >
            </van-sidebar-item>
          </van-sidebar>
        </div>
        <div class="priduct-list">
          <div v-for="index in 16" :key="index" :id="'priduct-group-' + index">
            <div class="priduct-group">{{ "选项 " + index }}</div>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      scrollTimer: 0,
      tabscroller: false,
      checked: true,
      isclick: false, // 侧边栏点击
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
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    sidebarChange(index) {
      // if (this.isclick) {
      //   return;
      // }
      // let selement = document.getElementsByClassName(
      //   "van-sidebar-item--select"
      // )[0];
      // if (selement != undefined) {
      //   selement.scrollIntoView({
      //     behavior: "smooth",
      //     block: "start",
      //     inline: "start",
      //   });
      // }
    },
    onSidebarClick(index) {
      this.isclick = true;

      let element = document.getElementById("priduct-group-" + (index + 1));
      if (element != undefined) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "end",
        });
      }
      var that = this;
      setTimeout(() => {
        that.isclick = false;
      }, 3000);
    },

    // 滚动监听 · 动画播放
    handleScroll: function () {
      if (this.isclick) {
        return;
      }
      clearTimeout(this.scrollTimer);
      var that = this;
      this.scrollTimer = setTimeout(() => {
        let tags = document.getElementsByClassName("priduct-group");
        let i = 0;
        while (tags[i] && tags[i].getBoundingClientRect().y <= 10) {
          i++;
        }
        console.log("handleScroll i:" + i + " activeKey " + this.activeKey);
        if (this.activeKey != i) {
          console.log("handleScroll change" + this.activeKey);
          that.activeKey = i;
        }
      }, 300);
    },
  },
};
</script>

<style>
.menu-bander {
  height: 120px;
  top: 40px;
  background-color: white;
  border-radius: 8px;
  margin: 8px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 100px 5px;

  animation: rotate 1s linear infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -1s);
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
.menu-content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow:-moz-hidden-unscrollable;
  background-color: rebeccapurple;
}
.menu-address {
  display: flex;
  height: 50px;
  background-color: white;
  border-radius: 8px;
  margin: 8px;
  justify-content: baseline;
  align-self: center;
}

.address-icon {
  width: 20px;
  height: 20px;
  align-self: center;
  margin-left: 10px;
}
.address-name {
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
  margin-right: 10px;
}

.menu-product {
  display: grid;
  grid-template-columns: 120px 1fr;
  height: calc(100% - 66px);
  overflow: scroll;
  background-color: #f0f3f5;
}

.priduct-sidebar {
  height: 100%;
  overflow: scroll;
  margin-bottom: 10px;
  margin-top: 8px;
}
.van-sidebar {
  width: 100%;
}
.van-sidebar-item {
  padding: 12px 6px;
  margin: 2px 0;
  background-color: rgba(0, 0, 0, 0);
}
.van-sidebar-item--select {
  margin: 6px 8px 6px 0px;
  border-radius: 8px;
  background-color: white;
}

.van-sidebar-item--select::before {
  position: absolute;
  top: 30%;
  left: -7px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: rebeccapurple;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  animation-duration: 1.5s;
  -webkit-animation-duration: 1.5s;
  content: "";
}

.priduct-list {
  position: relative;
  background-color: white;
  overflow: scroll;
  top: 8px;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 8px;
  margin: 2px;
}

.priduct-group {
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  z-index: 99;
  background-color: white;
  width: 100%;
  height: 60px;
}

@keyframes rotate {
  to {
    opacity: 0;
  }
}
</style>