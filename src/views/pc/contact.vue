<template>
  <div class="main-wrap">
    <!-- [Start] 의뢰하기 팝업 -->
    <!-- <div class="darum-popup pop-map">
  <button class="btn-popup-close close-pop-map"><img src="../../assets/images/pc/btn/btn-popup-close.svg" alt="닫기" /></button>
  <div class="map-view" id="mapview">

  </div>
    <div class="map-address">
      <div class="map-address-box">
        <img src="../../assets/images/pc/btn/btn-ci.svg" alt="다름 로고" />
        <p class="map-address-title ">다름과 함께 다르게 커뮤니케이션</p>
        <p class="map-address-kor ">서울 금천구 가산디지털1로 128<br/>STX-V타워 1307호<br/>주식회사 다름</p>
        <p class="map-address-eng ">#1307, 128, Gasan Digital 1-ro, Geumcheon-Gu<br/>Seoul, Korea</p>
        <p class="map-address-tel ">Tel. 02 6959 6547<br/>Fax. 02 6956 6549</p>
      </div>
    </div>
    </div>
    <div class="darum-popup pop-request">
      <button class="btn-popup-close request-pop-close">
        <img src="../../assets/images/pc/btn/btn-popup-close.svg" alt="닫기" />
      </button>
      <div class="popup-wrap">
        <p class="popup-title">당신의 프로젝트가 궁금합니다.</p>
        <img
          class="icon-request"
          src="../../assets/images/pc/icon/icon-request.svg"
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

      </div>
    </div>-->
    <!-- [End] 의뢰하기 팝업 -->
    <!-- [End] Header -->
    <div id="sub-header-start" class="sub-header sub-contact">
      <div class="darum-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="271"
          viewBox="0 0 200 271"
          class="injected-svg inject-svg logo-green logo-bottom logo-opacity"
        >
          <path d="M199.88 200.969L129.811 271v-70.031H0V0h200v200.969h-.12z" />
        </svg>
        <img
          src="../../assets/images/pc/bg/bg-darum-logo.svg"
          class="inject-svg logo-black logo-top"
          alt
        />

        <h2>
          <span class="contact-title">
            다름을
            <br />만나요
          </span>
        </h2>
      </div>
      <p class="sub-header-basic">우리 만났을때 그때처럼</p>
      <p class="sub-header-bold">언제나 그렇게 수수하게</p>
      <a
        @click="scrolltoDiv()"
        class="btn-arrow-down smooth"
        data-scroll
        data-target="#contact-here-start"
        title="우리는 여기에"
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
    <div id="contact-here-start" class="contact-here">
      <div class="contact-here-wrap">
        <h3>우리는 여기에</h3>
        <div class="contact-here-box">
          <div>
            <p class="here-box-title email-box">e-Mail</p>
            <p class="here-box-text">contact@da-rum.com</p>
            <p class="here-box-text-sm">
              Planning Team
              <span>plan@da-rum.com</span>
              <br />Design Team
              <span>design@da-rum.com</span>
              <br />Developer Team
              <span>develop@da-rum.com</span>
            </p>
          </div>
          <div>
            <p class="here-box-title phone-box">Phone</p>
            <p class="here-box-text">
              Tel. 02.6959.6547
              <br />Fax. 02.6956.6549
            </p>
          </div>
          <div>
            <p class="here-box-title address-box">Address</p>
            <p class="here-box-text">
              서울 금천구 가산디지털1로 128
              <br />STX-V타워 1307호
              <br />주식회사 다름
            </p>
            <p class="here-box-text-sm">
              #1307, 128, Gasan Digital 1-ro, Geumcheon-Gu,
              <br />Seoul, Korea
            </p>
            <button class="btn-map" @click="mapOn()">지도보기</button>
          </div>
        </div>
        <!--         <div class="sns-box">
          <p>우리와 소통하세요.</p>
          <button class="btn-sns btn-first"><img src="../../assets/images/pc/btn/btn-insta.png" alt="인스타그램"></button>
          <button class="btn-sns"><img src="../../assets/images/pc/btn/btn-facebook.png" alt="페이스북"></button>
        </div>-->
      </div>
    </div>
    <div id="contact-culture-start" class="contact-culture">
      <h3>우리의 사고</h3>
      <p>
        [
        <span>다름</span>답다 ]
      </p>
      <p class="culture-text-sm">
        다른
        <span>시선</span> + 다른
        <span>생각</span> + 다른
        <span>경험</span> =
        <span>다름다운 우리들</span>
      </p>
      <h3>문화</h3>
      <div class="culture-box">
        <div>
          화내지
          <br />않아요
        </div>
        <div>
          강요하지
          <br />않아요
        </div>
        <div>
          말리지
          <br />않아요
        </div>
        <div>
          때리지
          <br />않아요
        </div>
      </div>
    </div>
    <!-- [Start] 지원하기 -->
    <div id="support-start" class="contact-support">
      <div class="popup-wrap">
        <p class="popup-title">당신의 열정을 우리는 기다립니다.</p>
        <img class="icon-request" src="../../assets/images/pc/icon/icon-support.svg" alt="하트 그림" />
        <div class="request-service">
          <div class="req-left">
            <p>01. 지원분야를 선택해주세요.</p>
          </div>
          <div class="req-right service-check">
            <input type="checkbox" name="sup-field" id="sup-planner" value="기획자" />
            <label for="sup-planner">기획자</label>
            <input type="checkbox" name="sup-field" id="sup-designer" value="디자이너" />
            <label for="sup-designer">디자이너</label>
            <input type="checkbox" name="sup-field" id="sup-publisher" value="퍼블리셔" />
            <label for="sup-publisher">퍼블리셔</label>
            <input type="checkbox" name="sup-field" id="sup-developer" value="개발자" />
            <label for="sup-developer">개발자</label>
          </div>
        </div>
        <div class="request-info">
          <div class="req-left">
            <p>02. 당신의 정보를 입력해주세요.</p>
          </div>
          <div class="req-right info-input">
            <input type="text" name="sup-info" id="sup-name" aria-label="이름" placeholder="이름" />
            <input type="text" name="sup-info" id="sup-phone" aria-label="연락처" placeholder="연락처" />
            <input type="text" name="sup-info" id="sup-email" aria-label="이메일" placeholder="이메일" />
            <input
              type="text"
              name="sup-info"
              id="sup-gotowork"
              aria-label="출근 가능일"
              placeholder="출근 가능일"
            />
            <div class="filebox">
              <input
                type="text"
                name="filename"
                id="filename"
                readonly="readonly"
                placeholder="첨부파일"
              />
              <label for="attach-file" class="file-browse">파일찾기</label>
              <input type="file" name="sup-info" id="attach-file" />
            </div>
            <p>
              이력서와 자기소개서, 디자이너는 포트폴리오 필수입니다. 파일은
              압축해서 200MB이하의 ZIP파일만 올려주세요
            </p>
          </div>
        </div>
        <button class="btn-submit" @click="openModal()">지원하기</button>
      </div>
    </div>

    <!-- 모달 컴포넌트 -->
    <confirm-modal @close="closeModal" v-if="modal" v-on:letClose="closeModal" />

    <!-- [End] 지원하기 -->
    <div class="darum-popup pop-map">
      <button class="btn-popup-close close-pop-map">
        <img src="../../assets/images/pc/btn/btn-popup-close.svg" alt="닫기" />
      </button>
      <div class="map-view" id="mapview"></div>
      <div class="map-address">
        <div class="map-address-box">
          <img src="../../assets/images/pc/btn/btn-ci.svg" alt="다름 로고" />
          <p class="map-address-title">다름과 함께 다르게 커뮤니케이션</p>
          <p class="map-address-kor">
            서울 금천구 가산디지털1로 128
            <br />STX-V타워 1307호
            <br />주식회사
            다름
          </p>
          <p class="map-address-eng">
            #1307, 128, Gasan Digital 1-ro, Geumcheon-Gu
            <br />Seoul, Korea
          </p>
          <p class="map-address-tel">
            Tel. 02 6959 6547
            <br />Fax. 02 6956 6549
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- [Start] 지도 팝업  왜 에러나는지 몰라서 임시로 주석처리-->
</template>

<script>
import confirmModal from "../../components/confirmModal.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    confirmModal
  },
  data() {
    return {
      modal: false,
      sideMenu: false
    };
  },
  mounted() {
    //this.setCloseHeaderBtn("contact");
    /*다른화면에서 지원하기 링크로 넘어온 경우 */
    if (this.$route.params.id == "support-start") {
      $(".gnb-wrap").css("display", "none");
      let offset = $("#support-start").offset();
      $("html").animate({ scrollTop: offset.top }, 400);
    }
    this.jqueryCodes();
    //this.mapOn();
  },
  updated() {
    this.jqueryCodes();
  },
  methods: {
    ...mapMutations({
      setCloseHeaderBtn: "common/setCloseHeaderBtn"
    }),
    showPopup(event) {
      $(".darum-popup.pop-request").css("display", "block");
    },
    openModal() {
      //console.log("openModal activated")
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    moveToBottom(event) {
      $(this).toggleClass("active");
      $(".gnb-wrap").animate({ width: "toggle" });
      $(document).scrollTop($(document).height());
    },
    mapOn() {
      $(".pop-map").fadeIn();
      $("body").addClass("of-hidden");
      setTimeout(() => {
        var myLatlng = new google.maps.LatLng(37.477133, 126.883643);
        var mapOptions = {
          zoom: 17,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        // console.log('asdd',mapOptions)
        var map = new google.maps.Map(
          document.getElementById("mapview"),
          mapOptions
        );
        var iconBase = "../../assets/images/pc/icon/";
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          icon: iconBase + "icon-map-pin.svg"
        });

        google.maps.event.addListener(marker, "click", function() {
          infowindow.open(map, marker);
        });
      }, 50);
    },
    /* pseudoSubmit() {
      console.log("asdfasdfasdf");
      $("body").append(
        '<div class="alert"><div class="alert_box"><p>저희 다름을 찾아주셔서 대단히 감사합니다.<br />확인후 빠른 시일내에 연락드리겠습니다.</p><a href="#none" class="pop_close" onclick="subPopClose()">확인</a></div></div>'
      );
    }, */
    scrolltoDiv() {
      let offset = $("#contact-here-start").offset();
      $("html").animate({ scrollTop: offset.top }, 400);
    },
    jqueryCodes() {
      $(".btn-map").click(function() {
        $(".pop-map").fadeIn();
        // console.log("1");
        $("body").addClass("of-hidden");
      });

      $(".close-pop-inside, .close-pop-map, .port-pop-close").click(function() {
        $(".pop-inside, .pop-map, .pop-portfolio").fadeOut();
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
    }
  }
};
</script>

<style scoped>
.darum-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  display: none;
  overflow-y: auto;
}

.darum-popup.pop-request {
  background-color: rgba(114, 64, 246, 0.97);
  z-index: 200;
}

.darum-popup.pop-inside {
  background-color: #fff;
}

.darum-popup.pop-map {
  background-color: rgba(114, 64, 246, 0.97);
}

.darum-popup .btn-popup-close {
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 100;
}

.darum-popup .btn-popup-close > img {
  width: 25px;
  height: 25px;
}

.darum-popup .btn-popup-close.close-pop-inside {
  position: absolute;
  top: 0;
  left: 50%;
  width: 82px;
  height: 150px;
  background-color: rgba(110, 58, 246, 0.9);
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
}

.darum-popup .btn-download {
  float: right;
  font-weight: 700;
  font-size: 16px;
  font-size: 1.6rem;
  color: #fff;
  padding: 3px 26px 0 0;
  margin-top: 30px;
  background: url("../../assets/images/pc/btn/btn-download.svg") right center
    no-repeat;
}
</style>
