<template>
  <div>
    <header class="top-section">
      <div class="logo-wrap">
        <img
          class="logo"
          src="../../assets/images/mobile/btn-mobile-ci.svg"
          alt="다름 에이전시"
        />
      </div>
      <div class="slogan">
        <p class="animation-row-1">
          <span>다</span><span>름</span><span>과</span>
        </p>
        <p class="animation-row-2"><span>함</span><span>께</span></p>
        <p class="animation-row-3">
          <span>다</span><span>르</span><span>게</span>
        </p>
        <p class="animation-row-4">
          <span>커</span><span>뮤</span><span>니</span><span>케</span
          ><span>이</span><span>션</span>
        </p>
      </div>
      <a href="javascript:;" class="btn-open-popup" @click="activateComponent()"
        >다름을 경험해보세요</a
      >
    </header>
    <div class="bg_canvas"></div>
    <main class="mobile-wrap">
      <div class="map-section" id="mapview"></div>
      <div class="infor-section">
        <div class="infor-wrap">
          <p>
            서울 금천구 가산디지털 1로 128 STX-V타워 1310-1호<br />
            주식회사 다름
          </p>
          <p lang="en">
            #1310-1, 128, Gasan Digital 1-ro,<br />
            Geumcheon-Gu, Seoul, Korea
          </p>
          <p lang="en">
            Tel. <a href="tal:02-6959-6547">02 6959 6547</a><br />
            Fax. <a href="tal:02-6956-6549">02 6956 6549</a><br />
            E-mail. <a href="mailto:darum@da-rum.com">contact@da-rum.com</a>
          </p>
        </div>
      </div>
    </main>
    <mobile-popup-main
      :imageLists="this.imageLists"
      :list="this.list"
      v-on:event="popupClose()"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import mobilePopupMain from "@/components/mobilePopup/mobile-popup-main.vue";

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
    mobilePopupMain,
  },
  data() {
    return {
      showCompo: false,
    };
  },
  created() {
    this.switchPc();
  },
  mounted() {
    //console.log("모바일 페이지가 로딩됐습니다!")
  },
  methods: {
    switchPc() {
      if (!_isMobile(this.$browserDetect.meta.ua)) {
        this.$router.replace({ name: "PcMain" });
      }
    },
    activateComponent() {
      this.showCompo = true;
    },
    popupClose() {
      this.showCompo = false;
    },
  },
  computed: {
    ...mapState({
      imageLists: (state) => state.mobilePortfolio.imageList,
      list: (state) => state.mobilePortfolio.list,
    }),
  },
  metaInfo: {
    link: [
      {
        rel: "stylesheet",
        href: "../../assets/css/kbs-mobile-style.css",
      },
    ],
    script: [
      /*       {
        src:
          "https://maps.google.com/maps/api/js?sensor=true&language=ko®ion=kr&key=AIzaSyATg19GzPi0AGOSRi0wTT-MGr8gHIDv_oc",
        async: true,
        defer: true
      },
      {
        src: "../../assets/js/lib-javascript.js",
        async: true,
        defer: true
      },
      {
        src: "../../assets/js/lib-darum.js",
        async: true,
        defer: true
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js",
        async: true,
        defer: true
      },
      {
        src: "https://d157l7jdn8e5sf.cloudfront.net/release/pixi.js",
        async: true,
        defer: true
      }, */
      {
        src: "../../assets/js/lib-mobile.js",
        async: true,
        defer: true,
      },
    ],
  },
};
</script>

<style></style>
