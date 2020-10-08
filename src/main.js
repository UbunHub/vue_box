import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';

// vant
Vue.use(Vant)
Vue.use(Lazyload, {
  lazyComponent: true,
});



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
