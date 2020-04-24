<template>
  <div class="port-view-wrap" id="renewal08">
    <div class="port-view-visual renewal08-visual">
      <div class="port-view-title">
        <p>
          SUPREMA
          <br />Microwebsite <br />SGPP 2019
        </p>
      </div>
      <p class="port-view-sub">슈프리마 Microwebsite SGPP 2019</p>
      <a
        href="#renewal08-start"
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
    <div class="port-view-content-wrap" id="renewal08-start">
      <div class="port-view-content-innerwrap renewal08-inner">
        <div class="content-info">
          <p>다름의 시선</p>
          <div class="content-info-box">
            <div class="info-left">
              슈프리마 브랜드 사이트의 컨셉을 벗어나지 않는 통일성 있는 컨셉 및
              컬러로
              <br />디자인을 구성하였으며, 반응형 사이트로 어느 기기에서나 쉽게
              <br />진입할 수 있도록 접근성을 높였습니다.
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
                    <td>슈프리마</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>2019.08 ~ 2019.09</td>
                  </tr>
                  <tr>
                    <th>Service</th>
                    <td>Web / Mobile</td>
                  </tr>
                  <tr>
                    <th>Launch</th>
                    <td>http://www.supremadev.com/sgpp2019/index.asp</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="port-view-content">
          <p>Responsive Web</p>
          <img src="../../assets/images/pc/renewal08-01.jpg" />
          <div class="renewal08-innerbg01">
            <p class="fontWhite">
              PC·Mobile
              <br />Design
            </p>
            <img
              src="../../assets/images/pc/renewal08-02.jpg"
              class="fullSize"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="port-view-footer">
      <div class="port-view-footer-wrap">
        <button class="btn-port prev" data-target="renewal07" @click="toPrev()">
          PREV
          <span></span>
        </button>
        <div class="port-view-util">
          <button>공유하기</button>
          <button class="port-request-open">프로젝트 의뢰</button>
          <button class="port-pop-close" @click="toList()">목록으로</button>
        </div>
        <button class="btn-port next" data-target="renewal09" @click="toNext()">
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
      pageId: "renewal08"
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
