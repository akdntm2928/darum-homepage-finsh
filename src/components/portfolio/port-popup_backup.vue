<template>
  <!-- [Start] 포트폴리오 뷰 팝업 -->
  <div class="darum-popup pop-portfolio">
    <button class="btn-popup-close close-pop-inside" @click="restoreCss()">
      <img src="../../assets/images/pc/btn/btn-popup-close.svg" alt="닫기" />
    </button>

    <renewal13-compo
      v-if="renewalName == 'renewal13'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <renewal12Compo
      v-if="renewalName == 'renewal12'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <renewal11Compo
      v-if="renewalName == 'renewal11'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <renewal10Compo
      v-if="renewalName == 'renewal10'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <renewal09Compo
      v-if="renewalName == 'renewal09'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <renewal08Compo
      v-if="renewalName == 'renewal08'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <renewal07Compo
      v-if="renewalName == 'renewal07'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <renewal06Compo
      v-if="renewalName == 'renewal06'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <renewal05Compo
      v-if="renewalName == 'renewal05'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <renewal04Compo
      v-if="renewalName == 'renewal04'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <renewal03Compo
      v-if="renewalName == 'renewal03'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <renewal02Compo
      v-if="renewalName == 'renewal02'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <renewal01Compo
      v-if="renewalName == 'renewal01'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <port-keit-compo
      v-if="renewalName == 'port-keit'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <port-teachinghub-compo
      v-if="renewalName == 'port-teachinghub'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <port-koreacorp-compo
      v-if="renewalName == 'port-koreacorp'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <port-mykids-compo
      v-if="renewalName == 'port-mykids'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <port-nugu-compo
      v-if="renewalName == 'port-nugu'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <port-purunet-compo
      v-if="renewalName == 'port-purunet'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <port-posco-compo
      v-if="renewalName == 'port-posco'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <port-esellers-compo
      v-if="renewalName == 'port-esellers'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <port-middleeast-compo
      v-if="renewalName == 'port-middleeast'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <port-hyosung-compo
      v-if="renewalName == 'port-hyosung'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <port-samsungpop-compo
      v-if="renewalName == 'port-samsungpop'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
    <port-tworld-compo
      v-if="renewalName == 'port-tworld'"
      v-on:prevId="toPrev"
      v-on:nextId="toNext"
      v-on:list="restoreCss"
    />
  </div>
</template>

<script>
import renewal13Compo from "@/components/portfolio/renewal13.vue";
import renewal11Compo from "@/components/portfolio/renewal11.vue";
import renewal10Compo from "@/components/portfolio/renewal10.vue";
import renewal09Compo from "@/components/portfolio/renewal09.vue";
import renewal08Compo from "@/components/portfolio/renewal08.vue";
import renewal07Compo from "@/components/portfolio/renewal07.vue";
import renewal06Compo from "@/components/portfolio/renewal06.vue";
import renewal05Compo from "@/components/portfolio/renewal05.vue";
import renewal04Compo from "@/components/portfolio/renewal04.vue";
import renewal03Compo from "@/components/portfolio/renewal03.vue";
import renewal02Compo from "@/components/portfolio/renewal02.vue";
import renewal01Compo from "@/components/portfolio/renewal01.vue";
import portKeitCompo from "@/components/portfolio/port-keit.vue";
import portTeachinghubCompo from "@/components/portfolio/port-teachinghub.vue";
import portKoreacorpCompo from "@/components/portfolio/port-koreacorp.vue";
import portMykidsCompo from "@/components/portfolio/port-mykids.vue";
import portNuguCompo from "@/components/portfolio/port-nugu.vue";
import portPurunetCompo from "@/components/portfolio/port-purunet.vue";
import portPoscoCompo from "@/components/portfolio/port-posco.vue";
import portEsellersCompo from "@/components/portfolio/port-esellers.vue";
import portMiddleeastCompo from "@/components/portfolio/port-middleeast.vue";
import portHyosungCompo from "@/components/portfolio/port-hyosung.vue";
import portSamsungpopCompo from "@/components/portfolio/port-samsungpop.vue";
import portTworldCompo from "@/components/portfolio/port-tworld.vue";
import { mapState } from "vuex";
export default {
  components: {
    renewal13Compo,
    renewal11Compo,
    renewal10Compo,
    renewal10Compo,
    renewal09Compo,
    renewal08Compo,
    renewal07Compo,
    renewal06Compo,
    renewal05Compo,
    renewal04Compo,
    renewal03Compo,
    renewal02Compo,
    renewal01Compo,
    "port-keit-compo": portKeitCompo,
    "port-teachinghub-compo": portTeachinghubCompo,
    "port-koreacorp-compo": portKoreacorpCompo,
    "port-mykids-compo": portMykidsCompo,
    "port-nugu-compo": portNuguCompo,
    "port-purunet-compo": portPurunetCompo,
    "port-posco-compo": portPoscoCompo,
    "port-esellers-compo": portEsellersCompo,
    "port-middleeast-compo": portMiddleeastCompo,
    "port-hyosung-compo": portHyosungCompo,
    "port-samsungpop-compo": portSamsungpopCompo,
    "port-tworld-compo": portTworldCompo
  },
  props: {
    transName: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      receivedName: state => state.portfolio.toName
    })
  },
  data() {
    return {
      renewalName: "",
      nameArray: [
        "renewal13",
        "renewal12",
        "renewal11",
        "renewal10",
        "renewal09",
        "renewal08",
        "renewal07",
        "renewal06",
        "renewal05",
        "renewal04",
        "renewal03",
        "renewal02",
        "renewal01",
        "port-keit",
        "port-teachinghub",
        "port-koreacorp",
        "port-mykids",
        "port-nugu",
        "port-purunet",
        "port-posco",
        "port-esellers",
        "port-middleeast",
        "port-hyosung",
        "port-samsungpop",
        "port-tworld"
      ]
    };
  },
  watch: {
    transName() {
      this.renewalName = this.transName;
      // console.log("하위컴포넌트에서 transName을 받았다. ", this.renewalName);
    }
  },
  mounted() {
    this.portfolioJquery();
  },
  updated() {
    this.portfolioJquery();
  },
  methods: {
    restoreCss() {
      document.querySelector(".sub-header").style.height = "100%";
      document.querySelector(".sub-header").style.overflow = "auto";
    },
    toPrev(id) {
      const findIndexNumber = e => e == id;
      let v = this.nameArray.findIndex(findIndexNumber);
      if (this.nameArray[v + 1]) {
        this.renewalName = this.nameArray[v + 1];
      } else {
        this.renewalName = id;
        alert("처음 페이지입니다.");
        return false;
      }
    },
    toNext(id) {
      const findIndexNumber = e => e == id;
      let v = this.nameArray.findIndex(findIndexNumber);
      if (this.nameArray[v - 1]) {
        this.renewalName = this.nameArray[v - 1];
      } else {
        alert("마지막 페이지입니다.");
        return false;
      }
    },
    portfolioJquery() {
      // 포트폴리오 뷰 팝업 닫기
      $(".close-pop-inside, .port-pop-close").click(function() {
        $(".pop-portfolio").fadeOut();
        $("body").removeClass("of-hidden");
      });

      // 의뢰하기 팝업 오픈
      $(".request-open, .port-request-open").click(function() {
        $(".pop-request").fadeIn();
        $("body").addClass("of-hidden");
      });

      // 의뢰하기 팝업 닫기
      $(".request-pop-close").click(function() {
        $(".pop-request").fadeOut();
        $("body").removeClass("of-hidden");
      });

      // 포트폴리오 뷰 팝업 열기
      $(".port-list li a").click(function() {
        var activeView = $(this).attr("data-target");
        $(".pop-portfolio")
          .fadeIn()
          .scrollTop(0, 0);
        $(".port-view-wrap").hide();
        $("#" + activeView).show();
        $("body").addClass("of-hidden");
      });

      // 포트폴리오 뷰 페이지 이동
      $(".prev, .next").click(function() {
        if ($(this).hasClass("last-page-btn")) {
          alert("마지막 페이지입니다.");
          return false;
        } else {
          var moveTo = $(this).attr("data-target");
          $(".pop-portfolio").scrollTop(0, 0);
          $(".port-view-wrap").hide();
          $("#" + moveTo).fadeIn("fast");
        }
      });

      // arrow down 버튼 hover 액션
      $(".btn-arrow-down").hover(
        function() {
          TweenMax.to($(this), 0.5, { y: "10", repeat: -1, yoyo: true });
        },
        function() {
          TweenMax.to($(this), 0.5, { y: "0" });
        }
      );

      // 포트폴리오 리스트 마우스오버 액션
      $(".port-list li, .port-list-more li").hover(
        function() {
          if ($(this)[0].className != "renewal00") {
            //채우기 위해 나오는 것에선 실행되지 않도록 한다.
            $(this)
              .find("a")
              .show();
            $(this)
              .find("a")
              .stop()
              .animate({ height: "100%" }, 300);
          }
        },
        function() {
          $(this)
            .find("a")
            .hide();
          $(this)
            .find("a")
            .stop()
            .animate({ height: "0" }, 300);
        }
      );

      // 더보기 버튼 hover 액션
      $(".btn-more").hover(
        function() {
          TweenMax.to(".btn-more-bg", 0.5, { rotation: 180 });
        },
        function() {
          TweenMax.to(".btn-more-bg", 0.5, { rotation: 0 });
        }
      );

      // arrow down 버튼 hover 액션
      $(".request-open").hover(
        function() {
          TweenMax.to(".request-open span", 0.5, {
            x: "10",
            repeat: -1,
            yoyo: true
          });
        },
        function() {
          TweenMax.to(".request-open span", 0.5, { x: "0" });
        }
      );

      // 포트폴리오 뷰 prev 버튼 hover 액션
      $(".prev").hover(
        function() {
          TweenMax.to(".prev span", 0.5, { x: "-10", repeat: -1, yoyo: true });
        },
        function() {
          TweenMax.to(".prev span", 0.5, { x: "0" });
        }
      );

      // 포트폴리오 뷰 next 버튼 hover 액션
      $(".next").hover(
        function() {
          TweenMax.to(".next span", 0.5, { x: "10", repeat: -1, yoyo: true });
        },
        function() {
          TweenMax.to(".next span", 0.5, { x: "0" });
        }
      );
    }
  }
};
</script>

<style scoped></style>
