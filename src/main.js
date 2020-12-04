import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BScroll from 'better-scroll'
import ElementUI, { MessageBox } from "element-ui";
import Bus from "@/components/bus";


Vue.prototype.$bus = Bus;
Vue.use(ElementUI, {
	size: "small",
});
import "element-ui/lib/theme-chalk/index.css";
window.BScroll = BScroll

import KeyBoard from "@/components/wc-keyboard";
Vue.use(KeyBoard);

import Notify from 'vue-notifyjs'
Vue.use(Notify)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
