<template>
  <div class="port-view-wrap" id="renewal13">
    <div class="port-view-visual renewal13-visual" id="subBody">
      <div class="port-view-title">
        <p>
          Raonsecure
          <br />website renewal
        </p>
      </div>
      <p class="port-view-sub">라온시큐어 리뉴얼</p>
      <a
        href="#renewal13-start"
        class="btn-arrow-down smooth"
        title="내용 보기"
        v-scroll-to="{
          element: '#renewal13-start',
        }"
        @click.prevent="moveToContent($event)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="23"
          viewBox="0 0 47 23"
          class="injected-svg inject-svg white-arrow"
        >
          <path
            d="M47 0L24.52 22.52 25 23h-3l.48-.48L0 0h2.04L23.5 21.5 44.96 0H47z"
          />
        </svg>
      </a>
    </div>
    <div class="port-view-content-wrap" id="renewal13-start">
      <div class="port-view-content-innerwrap renewal13-inner">
        <div class="content-info">
          <p>다름의 시선</p>
          <div class="content-info-box">
            <div class="info-left">
              메인에 페럴랙스 스크롤을 사용하여 내용을 직관적이고 효과적으로
              전달할 수있도록 구성하였습니다.
              <br />
              <br />또한 브랜드 아이덴티티를 강화한 디자인 개선과 보안솔루션에
              특화된 제품 및 사양을 <br />파악하기 편리하도록 사이트를
              구현하였습니다.
            </div>
            <div class="info-right">
              <table>
                <caption>
                  프로젝트 정보
                </caption>
                <colgroup>
                  <col style="width: 64px;" />
                  <col style="width: auto;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>Client</th>
                    <td>Raonsecure</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>2019.11</td>
                  </tr>
                  <tr>
                    <th>Service</th>
                    <td>Web / Mobile</td>
                  </tr>
                  <tr>
                    <th>Launch</th>
                    <td>www.raoncorp.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="port-view-content">
          <p>Responsive Web</p>
          <img src="../../assets/images/pc/renewal13-01.jpg" />
          <div class="renewal13-innerbg01">
            <p>PC Design</p>
            <img
              src="../../assets/images/pc/renewal13-02.jpg"
              class="fullSize"
            />
          </div>
          <div class="renewal13-innerbg02">
            <p>Color System</p>
            <img src="../../assets/images/pc/renewal13-03.png" />
          </div>
          <img src="../../assets/images/pc/renewal13-04.jpg" class="fullSize" />
          <div class="renewal13-innerbg03">
            <p>Icon Style</p>
            <img
              src="../../assets/images/pc/renewal13-05.jpg"
              class="fullSize"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="port-view-footer">
      <div class="port-view-footer-wrap">
        <button class="btn-port prev" data-target="renewal12" @click="toPrev()">
          PREV
          <span></span>
        </button>
        <div class="port-view-util">
          <button>공유하기</button>
          <button class="port-request-open">프로젝트 의뢰</button>
          <button class="port-pop-close" @click="toList()">목록으로</button>
        </div>
        <button class="last" @click.prevent="lastMessage()">
          NEXT
          <span></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageId: "renewal13",
    };
  },
  mounted(){
    $(".pop-portfolio").scrollTop(0, 0);
  },
  methods: {
    toList() {
      this.$emit("list", this.pageId);
    },
    toPrev() {
      this.$emit("prevId", this.pageId);
    },
    toNext() {
      this.$emit("nextId", this.pageId);
    },
    lastMessage() {
      alert("마지막 페이지입니다.");
      return false;
    },
    moveToContent() {
      $(".darum-popup").animate({ scrollTop: $(".darum-popup").height() }, 400);
    },
  },
};
</script>

<style scoped>
.port-view-wrap .port-view-footer .port-view-footer-wrap > button.last {
  right: 0;
}
.port-view-wrap .port-view-footer .port-view-footer-wrap > button.last span {
  content: "";
  display: inline-block;
  position: absolute;
  top: -2px;
  right: -40px;
  width: 34px;
  height: 20px;
  background: url("../../assets/images/pc/btn/btn-next.svg") center center
    no-repeat;
}
</style>
