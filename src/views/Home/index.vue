<template>
  <div class="home">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <div class="bander">
        <van-swipe :autoplay="3000" indicator-color="red">
          <van-swipe-item v-for="(image, index) in imageList" :key="index">
  
            <van-image
              fit="cover"
              lazy-load
              :src="image"
            />
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="homegroup-1">
        <fork></fork>
        <van-grid
          class="home-block"
          direction="horizontal"
          :column-num="6"
          :gutter="10"
        >
          <van-grid-item v-for="(image, index) in imageList" :key="index">
             <van-image
              fit="cover"
              lazy-load
              :src="image"
            />
          </van-grid-item>
        </van-grid>

        <van-grid
          class="home-block activity"
          direction="horizontal"
          :column-num="3"
          :gutter="1"
        >
          <van-grid-item v-for="(image, index) in activityList" :key="index">
            <defual></defual>
          </van-grid-item>
        </van-grid>

        <van-swipe
          class="home-block coupon"
          :autoplay="3000"
          indicator-color="white"
        >
          <van-swipe-item v-for="(image, index) in imageList" :key="index">
             <van-image
              fit="cover"
              lazy-load
              :src="image"
            />
          </van-swipe-item>
        </van-swipe>

        <van-swipe
          class="home-block activity"
          :loop="false"
          :width="240"
          indicator-color="white"
        >
          <van-swipe-item v-for="(image, index) in imageList" :key="index">
             <van-image
              fit="cover"
              lazy-load
              :src="image"
            />
          </van-swipe-item>
        </van-swipe>

        <van-tabs
          class="home-block"
          :before-change="tabBeforeChange"
          scrollspy
          sticky
        >
          <van-tab v-for="index in 4" :key="index" :title="'选项 ' + index">
            <div class="van-tab-title">内容 {{ index }}</div>
            <van-grid direction="horizontal" :column-num="2" :gutter="2">
              <van-grid-item v-for="(image, index) in imageList" :key="index">
                <defual class="tab-item-defual"></defual>
              </van-grid-item>
            </van-grid>
          </van-tab>
        </van-tabs>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import fork from "./components/fork";
import defual from "./components/defual";

export default {
  name: "Home",
  components: {
    fork,
    defual,
  },
  data() {
    return {
      count: 0,
      current: 0,
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
      activityList: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-1.jpg",
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
.bander {
  background-color: white;
  height: 200px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 100px 5px;
}
.bander .van-swipe__indicators {
  position: absolute;
  top: 155px;
  padding: auto 5px;
  font-size: 12px;
}

.bander i {
  background-color: aqua;
}

.homegroup-1 {
  position: relative;
  top: -40px;
  margin: 10px 10px;
}

.home-block {
  border-radius: 8pt;
  background-color: white;
  margin: 4px 0px;
  padding: 4px 0px;
}

.van-swipe {
  background-size: cover;
  background-position: center;
}

.van-grid-item__content {
  padding: 1px;
}
.van-grid-item__content--surround {
  background-color: rgba(0, 0, 0, 0.01);
  border-radius: 8px;
}
.van-grid-item__content--surround::after {
  border: none;
}

.tips {
  border-radius: 8pt;
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
.tab-item-defual {
  height: 160px;
}
</style>