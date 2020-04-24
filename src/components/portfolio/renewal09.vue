<template>
  <div class="port-view-wrap" id="renewal09">
    <div class="port-view-visual renewal09-visual">
      <div class="port-view-title">
        <p>LG U+</p>
      </div>
      <p class="port-view-sub">LG U+ 알뜰모바일 선불충전 APP</p>
      <a
        href="#renewal09-start"
        class="btn-arrow-down smooth"
        title="내용 보기"
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
    <div class="port-view-content-wrap" id="renewal09-start">
      <div class="port-view-content-innerwrap renewal09-inner">
        <div class="content-info">
          <p>다름의 시선</p>
          <div class="content-info-box">
            <div class="info-left">
              선불요금제 가입회원을 대상으로 하여 편의점 결제 등 모바일에서
              간편한 충전 수단 제공과 여러 사용자를
              <br />배려한 다국어(10개)지원으로 편의성을 높였으며, 접근성이
              편리한 UI로 고객만족도를 향상시켰습니다.
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
                    <td>LG U+</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>2019.10~2020.01</td>
                  </tr>
                  <tr>
                    <th>Service</th>
                    <td>APP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="port-view-content">
          <img src="../../assets/images/pc/renewal09-01.jpg" class="fullSize" />
          <p>Color System</p>
          <img src="../../assets/images/pc/renewal09-02.png" />
        </div>
      </div>
    </div>
    <div class="port-view-footer">
      <div class="port-view-footer-wrap">
        <button class="btn-port prev" data-target="renewal08" @click="toPrev()">
          PREV
          <span></span>
        </button>
        <div class="port-view-util">
          <button>공유하기</button>
          <button class="port-request-open">프로젝트 의뢰</button>
          <button class="port-pop-close" @click="toList()">목록으로</button>
        </div>
        <button class="btn-port next" data-target="renewal10" @click="toNext()">
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
      pageId: "renewal09"
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
    moveToContent() {
      $(".darum-popup").animate({ scrollTop: $(".darum-popup").height() }, 400);
    }
  }
};
</script>

<style></style>
