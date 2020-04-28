<template>
  <div>
    <header class="main-header">
      <h1>
        <a title="홈으로 이동" @click="toMain()">
          <img src="../../src/assets/images/pc/btn/btn-ci.svg" alt="다름 로고"
        /></a>
      </h1>
      <button class="btn-gnb" @click="btnToggle()">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="gnb-wrap">
        <div class="gnb">
          <ul>
            <li>
              <a title="홈으로" @click="toMain()"
                ><img src="../../src/assets/images/pc/btn/btn-gnb-home.svg"
              /></a>
            </li>
            <li><router-link :to="{ name: 'PcAbout' }">다름</router-link></li>
            <li>
              <router-link :to="{ name: 'PcPortfolio' }">경험</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'PcContact' }">만나요</router-link>
            </li>
          </ul>
          <div class="gnb-util">
            <span>다름에</span>
            <ul>
              <li>
                <a
                  href="#none"
                  class="request-open"
                  @click.prevent="requestOpen()"
                  >의뢰하기</a
                >
              </li>
              <!-- 라우터 파람으로 값을 보내서 컨택 뷰에서 마운티드 시 검사해서 페이지 이동시킨다. -->
              <li>
                <!-- <router-link
                  :to="{ name: 'PcContact', params: { id: 'support-start' } }"
                  >지원하기</router-link
                > -->
                <a @click="toSupport()">지원하기</a>
              </li>
              <!-- <li><a href="#none" class="eng-util">Blog</a></li>
          <li><a href="#none" class="eng-util">Instagram</a></li> -->
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div class="darum-popup pop-request">
      <button class="btn-popup-close request-pop-close">
        <img
          src="../../src/assets/images/pc/btn/btn-popup-close.svg"
          alt="닫기"
        />
      </button>
      <div class="popup-wrap">
        <p class="popup-title">당신의 프로젝트가 궁금합니다.</p>
        <img
          class="icon-request"
          src="../../src/assets/images/pc/icon/icon-request.svg"
          alt="노트 그림"
        />
        <div class="request-service">
          <div class="req-left">
            <p>01. 어떤 서비스가 필요하신가요?</p>
          </div>
          <div class="req-right service-check">
            <input
              type="checkbox"
              name="service"
              id="req-homepage"
              value="홈페이지 제작"
            />
            <label for="req-homepage">홈페이지 제작</label>
            <input
              type="checkbox"
              name="service"
              id="req-promo"
              value="프로모션"
            />
            <label for="req-promo">프로모션</label>
            <input type="checkbox" name="service" id="req-uiux" value="uiux" />
            <label for="req-uiux">UI&nbsp;/&nbsp;UX</label>
            <input
              type="checkbox"
              name="service"
              id="req-mobile"
              value="모바일 앱"
            />
            <label for="req-mobile">모바일 앱</label>
            <input
              type="checkbox"
              name="service"
              id="req-manage"
              value="연간운영"
            />
            <label for="req-manage">연간운영</label>
            <input
              type="checkbox"
              name="service"
              id="req-viral"
              value="바이럴 마케팅"
            />
            <label for="req-viral">바이럴 마케팅</label>
            <input
              type="checkbox"
              name="service"
              id="req-system"
              value="시스템 관리"
            />
            <label for="req-system">시스템 관리</label>
            <input type="checkbox" name="service" id="req-etc" value="기타" />
            <label for="req-etc">기타</label>
          </div>
        </div>
        <div class="request-info">
          <div class="req-left">
            <p>02. 정보를 입력해주세요.</p>
          </div>
          <div class="req-right info-input">
            <input
              type="text"
              name="req-info"
              id="company"
              aria-label="회사명"
              placeholder="회사명"
            />
            <input
              type="text"
              name="req-info"
              id="manager"
              aria-label="담당자명"
              placeholder="담당자명"
            />
            <input
              type="text"
              name="req-info"
              id="phone"
              aria-label="연락처"
              placeholder="연락처"
            />
            <input
              type="text"
              name="req-info"
              id="email"
              aria-label="이메일"
              placeholder="이메일"
            />
            <textarea
              class="detail-info"
              aria-label="상세내용 입력"
              placeholder="상세내용 입력"
            ></textarea>
            <input
              type="checkbox"
              name="agree"
              id="agree"
              value="동의"
              class="privacy-agree"
            />
            <label for="agree">개인정보보호 정책에 동의합니다.</label>
          </div>
        </div>
        <button class="btn-submit" @click="openModal()">
          프로젝트 의뢰하기
        </button>
        <!-- <a href="../../assets/company_introduction.pdf" target="_blank" class="btn-download">회사소개서 다운로드</a> -->
      </div>
    </div>
    <!-- 모달 컴포넌트 -->
    <confirm-modal
      @close="closeModal"
      v-if="modal"
      v-on:letClose="closeModal"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import confirmModal from "@/components/confirmModal.vue";
export default {
  components: {
    confirmModal,
  },
  data() {
    return {
      modal: false,
      watchRoute: null,
    };
  },
  watch: {
    closeHeaderBtn() {
      this.btnClose();
    },
  },
  computed: {
    ...mapState({
      closeHeaderBtn: (state) => state.common.closeHeaderBtn,
    }),
  },
  mounted() {},
  methods: {
    //1 pcContact로 route하여 param값을 보내줌.
    toSupport() {
      if (this.$route.name != "PcContact") {
        this.$router.push({
          name: "PcContact",
          params: { id: "support-start" },
        });
      } else {
        $(".btn-gnb").removeClass("active");
        $(".gnb-wrap").css("display", "none");
        let offset = $("#support-start").offset();
        $("html").animate({ scrollTop: offset.top }, 400);
      }
    },
    closeHamburger() {
      this.watchRoute = this.$route.name;
    },
    openModal() {
      //console.log("openModal activated")
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    toMain() {
      if (this.$route.name == "PcMain") {
        window.location.reload();
      } else {
        this.$router.push({ name: "PcMain" });
      }
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
    btnClose() {
      //this.$forceUpdate();
      //console.log("헤더의 btnClose가 실행됐다.");
      $(".btn-gnb").removeClass("active");
      $(".gnb-wrap")
        .stop()
        .animate({ right: "-50%" }, 500, function() {
          $(".gnb-wrap").hide();
        });
    },
    requestOpen() {
      $(".request-open, .port-request-open").click(function() {
        $(".pop-request").fadeIn();
        $("body").addClass("of-hidden");
      });
    },
  },
};
</script>

<style></style>
