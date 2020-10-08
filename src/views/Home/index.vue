<template>
  <div class="home">

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">

        <van-swipe class="bander home-block" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(image, index) in imageList" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>

        <van-grid class="home-block" direction="horizontal" :column-num="6" :gutter="2">
          <van-grid-item v-for="(image, index) in imageList" :key="index">
            <img v-lazy="image" />
          </van-grid-item>
        </van-grid>

        <van-grid
          class="home-block" 
          direction="horizontal"
          :column-num="4"
          :gutter="2"
        >
          <van-grid-item icon="home-o" text="邀请有礼" dot />
          <van-grid-item icon="home-o" text="邀请有礼" dot />
          <van-grid-item icon="home-o" text="文字" />
          <van-grid-item icon="search" text="文字" />
        </van-grid>

        <van-swipe class="home-block coupon"  :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(image, index) in imageList" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>

        <van-swipe
          class="home-block activity" 
          :loop="false"
          :width="240"
          indicator-color="white"
        >
          <van-swipe-item v-for="(image, index) in imageList" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>

        <van-tabs
          class="home-block" 
          :before-change="tabBeforeChange"
          scrollspy
          sticky
        >
          <van-tab v-for="index in 4" :key="index" :title="'选项 ' + index">
            内容 {{ index }}

            <van-grid direction="horizontal" :column-num="2" :gutter="2">
              <van-grid-item v-for="(image, index) in imageList" :key="index">
                <img v-lazy="image" />
              </van-grid-item>
            </van-grid>
          </van-tab>
        </van-tabs>

    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      count: 0,
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      imageList: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
      index: 0,
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
        this.count++;
      }, 1000);
    },
    tabBeforeChange(index) {
      console.log(index);
      return true;
    },

    onRefresh() {
      // 清空列表数据
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>

<style>

/* .home{
  margin: 10pt;
} */

.home-block{
  margin: 10pt;
  border-radius: 8pt;
  background-color: clear;
  overflow: auto;
}
img{

  width: 100%;
  height: 100%;
  object-fit:cover;
}

.bander {
  background-color: white;
  height: 120pt;
}

.van-swipe-item {
}
.tips {

  border-radius: 8pt;
  /* background-color: white; */
  background-color: clear;
}
.tabs {
  border-radius: 8pt;
  background-color: clear;
  margin: 10pt;
}

.coupon {
  height: 40pt;
}

.coupon-item {
  background-color: white;
}

.activity {

  height: 40pt;
}

.activity2 {
  height: 80pt;
  margin: 10pt;
  border-radius: 8pt;
}
</style>