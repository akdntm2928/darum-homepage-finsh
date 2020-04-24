import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import browserDetect from "vue-browser-detect-plugin";
import Meta from "vue-meta";
import "expose-loader?$!expose-loader?jQuery!jquery";

Vue.config.productionTip = false;

Vue.use(Meta);
Vue.use(browserDetect);

const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

router.beforeResolve((to, from, next) => {
  vm.$store.state.common.closeHeaderBtn = to;
  next();
});
