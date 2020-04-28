<template>
  <div class="main-wrap">
    <div class="sub-header sub-port">
      <div class="darum-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="271"
          viewBox="0 0 200 271"
          class="injected-svg inject-svg logo-purple logo-bottom logo-opacity"
        >
          <path d="M199.88 200.969L129.811 271v-70.031H0V0h200v200.969h-.12z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="271"
          viewBox="0 0 200 271"
          class="injected-svg inject-svg logo-green logo-top"
        >
          <path d="M199.88 200.969L129.811 271v-70.031H0V0h200v200.969h-.12z" />
        </svg>
        <path d="M199.88 200.969L129.811 271v-70.031H0V0h200v200.969h-.12z"></path>
        <h2>
          <span class="port-title">경험</span>
        </h2>
      </div>
      <p class="sub-header-basic">우리는 유연하게 사고하고</p>
      <p class="sub-header-bold">유연하게 행동합니다.</p>
      <a
        @click="scrolltoDiv()"
        class="btn-arrow-down smooth"
        data-scroll
        data-target="#port-list-start"
        title="리스트 보기"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="23"
          viewBox="0 0 47 23"
          class="injected-svg inject-svg white-arrow"
        >
          <path d="M47 0L24.52 22.52 25 23h-3l.48-.48L0 0h2.04L23.5 21.5 44.96 0H47z" />
        </svg>
      </a>
    </div>
    <div class="port-list-wrap" id="port-list-start" name="port-list-start">
      <!-- [Start] 리스트 -->
      <!--컴포넌트로 빼지 말고 mapGetters에서 버튼을 누를 때마다 필요한 만큼 연산해서 가져오기 -->
      <ul class="port-list">
        <li
          v-for="(item, i) in showingData"
          :key="`list-${i}`"
          :class="item.renewalNumber"
          :value="item.innerValue"
        >
          <a
            :data-target="item.target"
            @click="activatePopup(item.renewalNumber)"
            v-if="item.target"
          >
            <p class="port-cover-desc">
              <span v-html="item.ment1"></span>
            </p>
            <p class="port-cover-title">{{ item.ment2 }}</p>
            <p class="port-cover-sub">{{ item.ment3 }}</p>
          </a>
        </li>
      </ul>

      <!-- 스몰사이즈 포트폴리오 시작-->
      <!-- 여기는 v-if만 걸도록 한다. 한꺼번에 전부 불러온다.-->
      <ul class="port-list-more" v-if="smallListToggle == true">
        <li v-for="(item, i) in smallData" :key="`list-${i}`" :class="item.className">
          <a href="#none" :data-target="item.target">
            <div>
              <p class="port-cover-title-more">
                <span v-html="item.ment1"></span>
              </p>
              <p class="port-cover-sub-more">{{ item.ment2 }}</p>
            </div>
          </a>
        </li>
      </ul>
      <!-- 스몰사이즈 포트폴리오 종료-->

      <!-- 이곳에 더보기 버튼을 넣도록 한다, 이 버튼은 자주 렌더링 되므로 v-show처리한다. -->
      <button class="btn-more" @click="showMore()" v-show="btnHide == false">
        더보기
        <span>
          <img src="../../assets/images/pc/btn/btn-more.svg" class="btn-more-bg" />
        </span>
      </button>

      <!-- [Start] 더보기 리스트 -->
      <!-- [End] 더보기 리스트 -->
    </div>

    <div class="port-footer">
      <div class="port-footer-wrap">
        <p>프로젝트를 준비중이신가요?</p>
        <p>다름과 함께 다르게 커뮤니케이션 해보세요.</p>
        <button class="request-open">
          행동하기
          <span></span>
        </button>
      </div>
    </div>

    <!-- 포트폴리오 뷰 팝업을 컴포넌트로 추출-->
    <!-- <port-popup :transName="toName" /> -->

    <div class="darum-popup pop-portfolio">
      <button class="btn-popup-close close-pop-inside" @click="restoreCss()">
        <img src="../../assets/images/pc/btn/btn-popup-close.svg" alt="닫기" />
      </button>
      <!-- 3.component import renew은 해당 임포트된 컴포넌트을 component태그에 is속성으로 넣어서 각 화면을 볼수있게한다. -->
      <component :is="renew" v-on:prevId="toPrev" v-on:nextId="toNext" v-on:list="restoreCss"></component>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

import confirmModal from "../../components/confirmModal.vue";
import { mapState, mapGetters, mapMutations } from "vuex";
// import portPopup from "@/components/portfolio/port-popup.vue";

export default {
  components: {
    confirmModal
  },
  data() {
    return {
      viewWrap: false,
      initPorts: 6,
      showingData: null,
      confirmLast: false,
      smallListToggle: false, // 최하단에 나오는 스몰리스트 토글
      btnHide: false,
      modal: false,
      renewalName: "",
      renewalArray: [
        "renewal13",
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
      ],
      toName: ""
    };
  },
  beforeMount() {
    this.showingData = this.initData; //초기에 보이는 데이터6개 세팅
  },
  mounted() {
    //this.setCloseHeaderBtn("portfolio");
    this.portfolioJquery();
  },
  updated() {
    this.portfolioJquery();
  },
  watch: {
    confirmLastLarge() {
      this.confirmLast = true;
    },
    stateRenewalNumber() {
      //vuex renewalNumber값이 변하면
      this.detailPorts;
    },
    stateOriginNumber() {
      this.togglePrev;
    }
  },
  computed: {
    ...mapState({
      portFolioList: state => state.portfolio.list,
      confirmLastLarge: state => state.portfolio.confirmLastLarge,
      smallData: state => state.portfolio.smallList,
      toggleSmallList: state => state.portfolio.toggleSmallList,
      stateRenewalNumber: state => state.portfolio.renewalNumber,
      stateOriginNumber: state => state.portfolio.originNumber,
      renewalNameArray: state => state.portfolio.renewalNameArray
    }),
    ...mapMutations({
      setRenewalName: "portfolio/setRenewalName"
    }),
    ...mapGetters({
      initData: "portfolio/initData",
      moreData: "portfolio/moreData",
      totalPorts: "portfolio/totalPorts",
      detailPorts: "portfolio/detailPorts",
      togglePrev: "portfolio/togglePrev"
    }),
    renew() {
      // .2 component import renewalName값에 바뀌는 순가 computed의 속성으로 종속된값을 바뀌 해당 컴포넌을 불를수있게한다.
      return this.renewalName
        ? () => import(`@/components/portfolio/${this.renewalName}`)
        : null;
    }
  },
  methods: {
    ...mapMutations({
      fetch_list: "portfolio/fetch_list",
      setMoreData: "portfolio/setMoreData",
      setRenewalNumber: "portfolio/setRenewalNumber",
      setOriginNumber: "portfolio/setOriginNumber",
      setCloseHeaderBtn: "common/setCloseHeaderBtn"
    }),
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    restoreCss() {
      document.querySelector(".sub-header").style.height = "100%";
      document.querySelector(".sub-header").style.overflow = "auto";
    },
    activatePopup(renewalValue) {
      // 1. component import renwalname을 종속성있게 하기위해 data에 넣어 값을 넣어준다.
      if (this.renewalName == null || this.renewalName != renewalValue) {
        this.renewalName = renewalValue;
      } else if (this.renewalName === renewalValue) {
        this.renewalName = null;
      }
      document.querySelector(".sub-header").style.height = "100vh";
      document.querySelector(".sub-header").style.overflow = "hidden";
    },
    moveToContent(data) {
      let hashValue = data.srcElement.ownerDocument.activeElement.hash;
      let offsetPosition = $(hashValue).offset().top;
      $(".darum-popup").animate({ scrollTop: "950px" }, 400);
    },
    showMore() {
      if (this.confirmLast == false) {
        if (this.showingData.length < this.totalPorts) {
          let trans = this.showingData.length;
          this.setMoreData(trans);
          //이 부분에서 map을 써보는 것을 고려해보도록 한다.
          let adding = this.moreData;
          let concatData = this.showingData.concat(adding);
          this.showingData = concatData;
        }
      } else {
        //confirmLast == true, largeList가 최종적으로 로딩되고, smallList가 불려오는 시점
        this.smallListToggle = true;
        //더보기 버튼 v-show false 처리
        this.btnHide = true;
      }
    },
    toPrev(id) {
      const findIndexNumber = e => e == id;
      let v = this.renewalArray.findIndex(findIndexNumber);
      if (this.renewalArray[v + 1]) {
        this.renewalName = this.renewalArray[v + 1];
      } else {
        this.renewalName = id;
        alert("처음 페이지입니다.");
        return false;
      }
    },
    toNext(id) {
      const findIndexNumber = e => e == id;
      let v = this.renewalArray.findIndex(findIndexNumber);
      if (this.renewalArray[v - 1]) {
        this.renewalName = this.renewalArray[v - 1];
      } else {
        alert("마지막 페이지입니다.");
        return false;
      }
    },
    scrolltoDiv() {
      let offset = $("#port-list-start").offset();
      $("html").animate({ scrollTop: offset.top }, 400);
    },
    portfolioJquery() {
      // 포트폴리오 뷰 팝업 닫기
      $(".close-pop-inside, .port-pop-close").click(function() {
        $(".pop-portfolio").fadeOut();
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
<!-- <link rel="stylesheet" href="../../assets/css/jeh-pc-style.css" /> -->
<style scoped>
/* src/assets/css/jeh-pc-style.css 에서 제어가 된다. */
</style>
