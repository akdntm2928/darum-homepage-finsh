import Vue from "vue";
import Router from "vue-router";
// import PortPopup from "@/components/portfolio_popup.vue";

Vue.use(Router);

const Main = () => import(/* webpackChunkName: "pc" */ "./views/pc/main.vue");
const PcMain = () =>
  import(/* webpackChunkName: "pc" */ "./views/pc/main-pc.vue");
const PcPortfolio = () =>
  import(/* webpackChunkName: "pc" */ "./views/pc/portfolio.vue");
const PcAbout = () =>
  import(/* webpackChunkName: "pc" */ "./views/pc/about.vue");
const PcContact = () =>
  import(/* webpackChunkName: "pc" */ "./views/pc/contact.vue");
const MobileMain = () =>
  import(/* webpackChunkName: "mobile" */ "./views/mobile/main-mobile.vue");

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "PcMain",
      component: PcMain,
    },
    {
      path: "/portfolio",
      name: "PcPortfolio",
      component: PcPortfolio,
    },
    {
      path: "/about",
      name: "PcAbout",
      component: PcAbout,
    },
    {
      path: "/darumIs",
      name: "PcAbout",
      component: PcAbout,
    },
    {
      path: "/darumService",
      name: "PcAbout",
      component: PcAbout,
    },
    {
      path: "/darumMembers",
      name: "PcAbout",
      component: PcAbout,
    },
    {
      path: "/contact",
      name: "PcContact",
      component: PcContact,
    },

    {
      path: "/mobile",
      name: "MobileMain",
      component: MobileMain,
      meta: { hideHeader: true, Mobile: true },
    },
    // {
    //   path: "/pc/port-popup",
    //   name: "portPopup",
    //   component: PortPopup,
    // },
  ],
});
