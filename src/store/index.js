import Vue from "vue";
import Vuex from "vuex";
import common from "./modules/common.js";
import about from "./modules/about.js";
import portfolio from "./modules/portfolio.js";
import mobilePortfolio from "./modules/mobilePortfolio.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    portfolio,
    about,
    mobilePortfolio,
  },
});
