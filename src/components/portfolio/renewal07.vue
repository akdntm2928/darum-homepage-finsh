<template>
  <div class="port-view-wrap" id="renewal07">
    <div class="port-view-visual renewal07-visual">
      <div class="port-view-title">
        <p>
          Geumseong
          <br />Purunet Website renewal
        </p>
      </div>
      <p class="port-view-sub">금성출판사 푸르넷 구축</p>
      <a
        href="#renewal07-start"
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
          <path d="M47 0L24.52 22.52 25 23h-3l.48-.48L0 0h2.04L23.5 21.5 44.96 0H47z" />
        </svg>
      </a>
    </div>
    <div class="port-view-content-wrap" id="renewal07-start">
      <div class="port-view-content-innerwrap renewal07-inner">
        <div class="content-info">
          <p>다름의 시선</p>
          <div class="content-info-box">
            <div class="info-left">
              온라인 학습에 맞추어 편리한 UI 구성으로 개선하였습니다.
              미래지향적이고 디지털적인 시작적
              <br />자료를 활용하여 사용자들에게 전문적인 학습 사이트로서 다가갈
              수 있습니다.
              <br />
              <br />신뢰도를 높일 수 있는 인터랙션을 가미하여 트렌디함을
              표현하고 브랜드 아이덴티티 통일로
              <br />인지도를 높였습니다.
            </div>
            <div class="info-right">
              <table>
                <caption>프로젝트 정보</caption>
                <colgroup>
                  <col style="width: 64px;" />
                  <col style="width: auto;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>Client</th>
                    <td>geumseong</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>2019.09</td>
                  </tr>
                  <tr>
                    <th>Service</th>
                    <td>Web / Mobile</td>
                  </tr>
                  <tr>
                    <th>Launch</th>
                    <td>
                      www.purunet-ischool.co.kr/main.ks
                      <br />www.purunet-edu.co.kr/main.ks
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="port-view-content">
          <p>Responsive Web</p>
          <img src="../../assets/images/pc/renewal07-01.jpg" />
          <div class="renewal07-innerbg01">
            <p class="fontWhite">PC Design</p>
            <img src="../../assets/images/pc/renewal07-02.png" />
          </div>
          <img src="../../assets/images/pc/renewal07-03.jpg" />
          <p>Color System</p>
          <img src="../../assets/images/pc/renewal07-04.png" />
        </div>
      </div>
    </div>
    <div class="port-view-footer">
      <div class="port-view-footer-wrap">
        <button class="btn-port prev" data-target="renewal06" @click="toPrev()">
          PREV
          <span></span>
        </button>
        <div class="port-view-util">
          <button>공유하기</button>
          <button class="port-request-open">프로젝트 의뢰</button>
          <button class="port-pop-close" @click="toList()">목록으로</button>
        </div>
        <button class="btn-port next" data-target="renewal08" @click="toNext()">
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
      pageId: "renewal07"
    };
  },
  mounted() {
    // console.log("renewal07 is rendering");
  },
  mounted() {
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
