<template>
  <div>
    <div class="swiper-container-main">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <!-- [Start] 메인 첫 화면 (동영상)-->
          <div class="video-wrap">
            <!-- <video
              id="myVideo"
              onended="swNext()"
              preload
              class="bg-video"
              playsinline=""
              autoplay=""
              muted=""
                    >-->
            <video
              id="myVideo"
              @ended="swNext()"
              preload
              class="bg-video"
              playsinline
              autoplay
              muted
            >
              <source
                src="../../../src/assets/images/darum-bg-movie.mp4"
                type="video/mp4"
              />
            </video>
            <div class="text-wrap">
              <div class="slogan">
                <p
                  class="ani"
                  swiper-animate-effect="fadeInUp"
                  swiper-animate-duration="0.5s"
                  swiper-animate-delay="0.2s"
                >
                  우 리 는
                </p>
                <p
                  class="ani"
                  swiper-animate-effect="fadeInUp"
                  swiper-animate-duration="0.5s"
                  swiper-animate-delay="0.4s"
                >
                  남 다 른 생 각 으 로
                </p>
                <p
                  class="ani"
                  swiper-animate-effect="fadeInUp"
                  swiper-animate-duration="0.5s"
                  swiper-animate-delay="0.6s"
                >
                  남 다 르 게
                </p>
                <p
                  class="ani"
                  swiper-animate-effect="fadeInUp"
                  swiper-animate-duration="0.5s"
                  swiper-animate-delay="0.8s"
                >
                  소 통 하 며
                </p>
                <p
                  class="ani"
                  swiper-animate-effect="fadeInUp"
                  swiper-animate-duration="0.5s"
                  swiper-animate-delay="1s"
                >
                  남 들 과 다 른
                </p>
                <p
                  class="ani"
                  swiper-animate-effect="fadeInUp"
                  swiper-animate-duration="0.5s"
                  swiper-animate-delay="1.2s"
                >
                  길 을 갑 니 다
                </p>
              </div>
            </div>
          </div>
          <!-- [End] 메인 첫 화면 (동영상)-->
        </div>
        <div class="swiper-slide">
          <!-- [Start] 메인 두번째 화면 -->
          <div class="main-second">
            <span
              class="main-second-bg main-second-bg01 ani"
              swiper-animate-effect="fadeInLeft"
              swiper-animate-duration="0.5s"
              swiper-animate-delay="0.4s"
            >
              <img
                src="../../../src/assets/images/pc/bg/bg-main-01.svg"
                width="198"
                height="113"
                alt
              />
            </span>
            <span
              class="main-second-bg main-second-bg02 ani"
              swiper-animate-effect="fadeInUp"
              swiper-animate-duration="0.5s"
              swiper-animate-delay="0.4s"
            >
              <img
                src="../../../src/assets/images/pc/bg/bg-main-02.svg"
                width="198"
                height="71"
                alt
              />
            </span>
            <div
              class="second-text-wrap ani"
              swiper-animate-effect="fadeInUp"
              swiper-animate-duration="0.5s"
              swiper-animate-delay="0.2s"
            >
              <p class="slogan-text-7">
                <span>다</span>
                <span>름</span>
                <span>과</span>
              </p>
              <p class="slogan-text-8">
                <span>함</span>
                <span>께</span>
                <span>다</span>
                <span>르</span>
                <span>게</span>
              </p>
              <p class="slogan-text-9">
                <span>커</span>
                <span>뮤</span>
                <span>니</span>
                <span>케</span>
                <span>이</span>
                <span>션</span>
              </p>
            </div>
            <div class="main-second-menu">
              <ul>
                <li
                  class="main-second-menu-about ani"
                  swiper-animate-effect="fadeInUp"
                  swiper-animate-duration="0.5s"
                  swiper-animate-delay="0.4s"
                >
                  <router-link :to="{ name: 'PcAbout' }"
                    >다름을 소개합니다.</router-link
                  >
                </li>
                <li
                  class="main-second-menu-port ani"
                  swiper-animate-effect="fadeInUp"
                  swiper-animate-duration="0.5s"
                  swiper-animate-delay="0.4s"
                >
                  <router-link :to="{ name: 'PcPortfolio' }"
                    >다름을 경험하세요.</router-link
                  >
                </li>
              </ul>
              <span
                class="seperator ani"
                swiper-animate-effect="fadeInUp"
                swiper-animate-duration="0.5s"
                swiper-animate-delay="0.5s"
              >
                <img src="../../../src/assets/images/pc/img_reg.png" alt />
              </span>
            </div>
          </div>
          <div class="bg_canvas"></div>
          <!-- 배경 -->
          <!-- [End] 메인 두번째 화면 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import * as PIXI from "pixi.js";
/* pixi 시작 */
// 메인화면02 bg 효과
function Pixi(options) {
  //console.log("pixi's options : ", options);
  this.defaults = {};
  this.options = options;
  this.container = options.container;
  this.imgWidth = options.image ? options.image.width : 1000;
  this.imgHeight = options.image ? options.image.height : 800;
  this.imgRatio = this.imgHeight / this.imgWidth;
  this.winWidth = window.innerWidth;
  this.image = "../../assets/images/pc/bg/bg-main_m.jpg";
  this.renderer = PIXI.autoDetectRenderer(
    this.winWidth,
    this.winWidth * this.imgRatio
  );

  this.stage = new PIXI.Container();
  //console.log("this.stage = ", this.stage);
  this.imgContainer = new PIXI.Container();
  this.imageCounter = 0;
  this.displacementSprite = PIXI.Sprite.fromImage(
    "../../assets/images/pc/bg/dmap-clouds-01.jpg"
  );
  this.displacementFilter = new PIXI.filters.DisplacementFilter(
    this.displacementSprite
  );
  this.animateFilters = this.animateFilters.bind(this);
  this.rAF = undefined;

  this.now = null;
  this.last = null;

  this.isDistorted = true;
  this.isTransitioning = false;
}

Pixi.prototype.init = function() {
  this.defaults = {
    transition: 1,
    speed: 0.4,
    dispScale: 250,
    dispX: true,
    dispY: true,
    count: 0,
  };

  this.update();
  this.backgroundFill();
  this.buildStage();
  this.createBackgrounds();
  this.createFilters();
  this.animateFilters();

  this.container.appendChild(this.renderer.view);
};

Pixi.prototype.animateFilters = function() {
  this.displacementFilter.scale.x = this.settings.dispX
    ? this.settings.transition * this.settings.dispScale
    : 0;
  this.displacementFilter.scale.y = this.settings.dispY
    ? this.settings.transition * (this.settings.dispScale + 10)
    : 0;

  this.displacementSprite.x = Math.sin(this.settings.count * 0.15) * 200;
  this.displacementSprite.y = Math.cos(this.settings.count * 0.13) * 200;

  this.displacementSprite.rotation = this.settings.count * 0.06;

  this.settings.count += 0.05 * this.settings.speed;

  this.renderer.render(this.stage);

  this.last = this.now;
  this.rAF = requestAnimationFrame(this.animateFilters);
};

Pixi.prototype.backgroundFill = function() {
  this.renderer.view.setAttribute(
    "style",
    "min-height:100%;min-width:100%;width:auto;height:auto;"
  );
};

// main container for animation
Pixi.prototype.buildStage = function() {
  this.imgContainer.position.x = this.imgWidth / 2;
  this.imgContainer.position.y = this.imgHeight / 2;

  this.stage.scale.x = this.stage.scale.y = this.winWidth / this.imgWidth;
  this.stage.interactive = true;
  this.stage.addChild(this.imgContainer);
};

// preload all backgrounds for quick transitions
Pixi.prototype.createBackgrounds = function() {
  var bg = PIXI.Sprite.fromImage(this.image);

  // Set image anchor to the center of the image
  bg.anchor.x = 0.5;
  bg.anchor.y = 0.5;

  // bg.width = window.innerWidth;
  // bg.height = window.innerHeight;

  bg.alpha = 1;

  this.imgContainer.addChild(bg);
};

// distortion filters added to stage
Pixi.prototype.createFilters = function() {
  this.stage.addChild(this.displacementSprite);

  this.displacementFilter.scale.x = this.displacementFilter.scale.y =
    this.winWidth / this.imgWidth;

  this.imgContainer.filters = [this.displacementFilter];
};

// Object.assign overwrites defaults with options to create settings
Pixi.prototype.update = function() {
  this.settings = Object.assign({}, this.defaults, this.options);
};

Pixi.prototype.resize = function() {};

Pixi.prototype.destroy = function() {
  cancelAnimationFrame(this.rAF);
  this.settings = {};
  this.bgArray = [];
};
/* pixi 종료 */

import { mapMutations } from "vuex";
export default {
  data() {
    return {
      swipeVar: null,
    };
  },
  mounted() {
    //this.setCloseHeaderBtn("main");
    this.initCanvas();
    this._swiper();
    this.jqueryCodes();
    // this.$router.push("/portfolio");
  },
  updated() {
    this.jqueryCodes();
  },
  methods: {
    ...mapMutations({
      setCloseHeaderBtn: "common/setCloseHeaderBtn",
    }),

    jqueryCodes() {
      // 의뢰하기 팝업 오픈
      $(".request-open, .port-request-open").click(function() {
        $(".pop-request").fadeIn();
        $("body").addClass("of-hidden");
      });

      // 인사이브 뷰, 포트폴리오 뷰, 지도 팝업 닫기
      $(".close-pop-inside, .close-pop-map, .port-pop-close").click(function() {
        $(".pop-inside, .pop-map, .pop-portfolio").fadeOut();
        $("body").removeClass("of-hidden");
      });
      // 의뢰하기 팝업 닫기
      $(".request-pop-close").click(function() {
        $(".pop-request").fadeOut();
        $("body").removeClass("of-hidden");
      });
    },
    _swiper() {
      const mySwiper = new Swiper(".swiper-container-main", {
        effect: "fade",
        fade: {
          crossFade: true,
        },
        mousewheelControl: true,
        onInit: function(swiper) {
          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
        },
        onSlideChangeEnd: function(swiper) {
          swiperAnimate(swiper);
        },
      });
      this.swipeVar = mySwiper;
    },
    swNext() {
      //메인화면 동영상 재생종료시
      this.swipeVar.slideNext();
    },
    initCanvas() {
      this.canvas = new Pixi({ container: $(".bg_canvas")[0] });
      this.canvas.init();
    },
    /*     goPortfolio() {
      this.$router.replace({ name: "pcPortfolio" });
    }, */
    pageRefresh() {
      window.location.reload();
    },
  },
};
</script>

<style scoped></style>
