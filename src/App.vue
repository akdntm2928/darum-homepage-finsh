<template>
  <div>
    <darum-header v-if="!hideHeader" />
    <router-view />
  </div>
</template>

<script>
import darumHeader from "./components/darum-header.vue";
const _isMobile = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
};
export default {
  components: {
    "darum-header": darumHeader,
  },
  computed: {
    hideHeader() {
      return this.$route.meta.hideHeader;
    },
  },
  data() {
    return {};
  },
  created() {
    this.switchMobile();
  },
  beforeMount() {},
  mounted() {},
  updated() {},
  methods: {
    switchMobile() {
      if (_isMobile(this.$browserDetect.meta.ua)) {
        this.$router.replace({ name: "MobileMain" });
      }
    },
  },
  metaInfo: {
    /* link: [
      {
        rel: "stylesheet",
        href: "./assets/css/lib-fonts.css"
      },
      {
        rel: "stylesheet",
        href: "./assets/css/lib-darum.css"
      },
      {
        rel: "stylesheet",
        href: "./assets/css/jeh-pc-style.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css"
      },
      {
        rel: "stylesheet",
        href: "./assets/css/animate.min.css"
      }
    ], */
    /*     script: [
      {
        src: "./assets/js/lib-javascript.js",
        async: true,
        defer: true
      },
      {
        src: "./assets/js/lib-pc.js",
        async: true,
        defer: true
      },
    ] */
    /*  script:[
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js",
        async:true,
        defer:true,
      },
      {
        src: "./assets/js/swiper.animate1.0.3.min.js",
        async:true,
        defer:true,
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js",
        async:true,
        defer:true,
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.6/vendors/scrolloverflow.min.js",
        async:true,
        defer:true,
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.6/jquery.fullpage.min.js",
        async:true,
        defer:true,
      },
      {
        src: "./assets/js/lib-javascript.js",
        async:true,
        defer:true,
      },
      {
        src: "./assets/js/lib-darum.js",
        async:true,
        defer:true,
      },
      {
        src: "./assets/js/lib-pc.js",
        async:true,
        defer:true,
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.5.1/pixi.js",
        async:true,
        defer:true,
      }, */
  },
};
</script>
<style></style>
