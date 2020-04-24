<template>
  <div class="port-view-wrap" id="renewal12">
    <div class="port-view-visual renewal12-visual">
      <div class="port-view-title">
        <p>
          Sungjoofoundation
          <br />wesite renewal
        </p>
      </div>
      <p class="port-view-sub">성주재단 리뉴얼</p>
      <a
        href="#renewal12-start"
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
    <div class="port-view-content-wrap" id="renewal12-start">
      <div class="port-view-content-innerwrap renewal12-inner">
        <div class="content-info">
          <p>다름의 시선</p>
          <div class="content-info-box">
            <div class="info-left">
              기업의 다양한 컨텐츠를 직관적으로 나타낼 수 있는 UI구성과 깔끔한
              디자인으로 쉽게 컨텐츠를
              <br />파악할 수 있도록 구현하였습니다. 또한 디바이스에 구애받지
              않는 반응형 사이트로 어느 기기에서나 <br />쉽게 진입할 수 있도록
              접근성을 높였습니다.
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
                    <td>성주재단</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>2019.10 ~ 2019.12</td>
                  </tr>
                  <tr>
                    <th>Service</th>
                    <td>Web / Mobile</td>
                  </tr>
                  <tr>
                    <th>Launch</th>
                    <td>www.sungjoofoundation.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="port-view-content">
          <p>Responsive Web</p>
          <img src="../../assets/images/pc/renewal12-01.jpg" />
          <div class="renewal12-innerbg01">
            <p class="fontWhite">PC Design</p>
            <img
              src="../../assets/images/pc/renewal12-02.jpg"
              class="fullSize"
            />
          </div>
          <div class="renewal12-innerbg02">
            <p class="fontWhite">Mobile Design</p>
            <img
              src="../../assets/images/pc/renewal12-03.jpg"
              class="fullSize"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="port-view-footer">
      <div class="port-view-footer-wrap">
        <button class="btn-port prev" data-target="renewal11" @click="toPrev()">
          PREV
          <span></span>
        </button>
        <div class="port-view-util">
          <button>공유하기</button>
          <button class="port-request-open">프로젝트 의뢰</button>
          <button class="port-pop-close" @click="toList()">목록으로</button>
        </div>
        <button class="btn-port next" data-target="renewal13" @click="toNext()">
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
      pageId: "renewal12"
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
