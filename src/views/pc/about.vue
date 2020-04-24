<template>
  <div class="main-wrap">
    <div class="about">
      <!-- [Start] 다름은 -->
      <div class="darum-is section" data-anchor="다름은">
        <div class="about-logo">
          <div class="about-text-wrap">
            <p class="about-text1">다 름 과</p>
            <p class="about-text2">함 께</p>
            <p class="about-text3">다 르 게</p>
            <p class="about-text4">커 뮤 니 케 이 션</p>
          </div>
        </div>

        <p class="about-desc">
          참신함은 본질을 추구 하는 것으로부터 나옵니다.
          <br />다름은 브랜드의
          본질을 이해함으로 시작합니다.
          <br />빠르게 진화하는 기술, 소비자,
          트렌드를 연구하고 통찰하여
          <br />당신에게 명확한 길을 제시합니다.
        </p>
        <p class="about-green">다름과 함께 소통하며 가치 있는 브랜드를 경험해보세요.</p>
        <a @click="scrollToService()" class="btn-arrow-down" title="남다른 서비스">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="23"
            viewBox="0 0 47 23"
            class="injected-svg inject-svg green-arrow"
          >
            <path d="M47 0L24.52 22.52 25 23h-3l.48-.48L0 0h2.04L23.5 21.5 44.96 0H47z" />
          </svg>
        </a>
      </div>
      <!-- [End] 다름은 -->
      <!-- [Start] 남다른 서비스 -->
      <div id="goto" class="darum-service section" data-anchor="남다른 서비스">
        <h2>남다른서비스</h2>
        <p class="about-desc">
          각 부문의 전문가들의 실무경험을 바탕으로
          <br />온라인 기반의 시스템
          통합 구축 사업에 최적화된 Total DX Service를 제공합니다.
          <br />우리는
          브랜드의 가능성을 발견하고 그것을 현실화합니다.
        </p>
        <p class="about-green">가치있는 브랜드를 만드는 것. 우리는 이미 그 답을 알고 있습니다.</p>
        <ul class="service-list">
          <li class="strategy">
            Strategy
            <ul>
              <li>e-Biz Strategy Consulting</li>
              <li>On-Line Promotion</li>
              <li>User Experience Strategy</li>
              <li>Social Strategy</li>
            </ul>
          </li>
          <li class="creative">
            Creative
            <ul>
              <li>Brand Identity</li>
              <li>UI/UX Design</li>
              <li>Graphic Design</li>
            </ul>
          </li>
          <li class="maintenance">
            Maintenance
            <ul>
              <li>Professional Maintenancepaintance Operations</li>
              <li>System Administration</li>
              <li>Operational Consulting and Operations agency</li>
            </ul>
          </li>
          <li class="development">
            Development
            <ul>
              <li>Web Standard Publishing</li>
              <li>Web Applications</li>
              <li>Native App Development</li>
            </ul>
          </li>
        </ul>
        <a
          href="#darumMembers"
          class="btn-arrow-down"
          title="다른 사람들"
          @click.prevent="moveToMembers()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="23"
            viewBox="0 0 47 23"
            class="injected-svg inject-svg green-arrow"
          >
            <path d="M47 0L24.52 22.52 25 23h-3l.48-.48L0 0h2.04L23.5 21.5 44.96 0H47z" />
          </svg>
        </a>
      </div>
      <!-- [End] 남다른 서비스 -->
      <!-- [Start] 다른 사람들 -->
      <div class="darum-members section" data-anchor="다른 사람들">
        <h2>
          다른사람들
          <br />
          <span>:P</span>
        </h2>
        <ul class="membersWrap">
          <li
            v-for="(item, i) in sortingMember"
            :key="`list-${i}`"
            :class="item.classColor"
            :style="{backgroundImage:'url('+item.characterImage+')'}"
          >
            <span class="membersName">
              <span v-html="item.memberName" />
            </span>
            <span class="membersDuty">
              <span v-html="item.memberTeam" />
            </span>
          </li>
        </ul>
      </div>
      <!-- [End] 다른 사람들 -->
    </div>
    <a href="#darumIs" class="btn-top" @click.prevent="movingTop()">TOP</a>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import confirmModal from "../../components/confirmModal.vue";

export default {
  components: {
    confirmModal
  },
  data() {
    return {
      modal: false
    };
  },
  mounted() {
    this.sortingMember;
    this.aboutJquery();
  },
  updated() {
    this.aboutJquery();
  },
  beforeDestroy() {
    this.fullpageDestory();
  },
  computed: {
    ...mapGetters({
      sortingMember: "about/sortingMember"
    })
  },
  methods: {
    sideMenuClose() {
      $(".gnb-wrap").css("display", "none");
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    fullpageDestory() {
      $.fn.fullpage.destroy("all");
    },
    scrollToService() {
      $.fn.fullpage.moveTo("darumService");
    },
    movingTop() {
      $.fn.fullpage.moveTo("darumIs");
    },
    moveToMembers() {
      $.fn.fullpage.moveTo("darumMembers");
    },
    btnToggle() {
      if (!$(".btn-gnb").hasClass("active")) {
        $(".gnb-wrap").show();
        $(".btn-gnb").addClass("active");
        $(".gnb-wrap")
          .stop()
          .animate({ right: "0" }, 600);
      } else {
        $(".btn-gnb").removeClass("active");
        $(".gnb-wrap")
          .stop()
          .animate({ right: "-50%" }, 500, function() {
            $(".gnb-wrap").hide();
          });
      }
    },
    aboutJquery() {
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
      // 지도 팝업 오픈
      $(".btn-map").click(function() {
        $(".pop-map").fadeIn();
        $("body").addClass("of-hidden");
      });

      //지원하기  딤드처리
      if (!$("input[name='sup-field']").is(":checked")) {
        $(".info-input input[name='sup-info']").attr("disabled", "disabled");
        $(".info-input input[name='filename']").attr("disabled", "disabled");
      }
      $("input[name='sup-field']").change(function() {
        if (!$("input[name='sup-field']").is(":checked")) {
          $(".info-input input[name='sup-info']").attr("disabled", "disabled");
          $(".info-input input[name='filename']").attr("disabled", "disabled");
        } else {
          $(".info-input input[name='sup-info']").removeAttr(
            "disabled",
            "disabled"
          );
          $(".info-input input[name='filename']").removeAttr(
            "disabled",
            "disabled"
          );
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

      $(".members-wrap li").hover(
        function() {
          $(this)
            .find(".members-info")
            .hide();
          $(this)
            .find(".members-info")
            .stop()
            .animate({ height: "100%" }, 300);
        },
        function() {
          $(this)
            .find(".members-info")
            .show();
          $(this)
            .find(".members-info")
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

      // 인사이드 포스트 마우스오버 액션
      $(".inside-post").hover(function() {
        $(this)
          .find("a")
          .stop()
          .slideToggle("fast");
      });
    }
  },
  metaInfo: {
    script: [
      /* 제이쿼리는 인덱스에서 한번 로딩하고 끝낸다. */
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.6/vendors/scrolloverflow.min.js",

        async: true,
        defer: true
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.6/jquery.fullpage.min.js",
        async: true,
        defer: true
      },
      {
        src: "../../assets/js/lib-pc.js",
        async: true,
        defer: true
      }
    ]
  }
};
</script>

<style scoped>
</style>
