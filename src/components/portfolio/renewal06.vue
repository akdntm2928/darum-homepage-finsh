<template>
  <div class="port-view-wrap" id="renewal06">
    <div class="port-view-visual renewal06-visual">
      <div class="port-view-title">
        <p>
          Envision
          <br />Website Renewal
        </p>
      </div>
      <p class="port-view-sub">앤비젼 국문/영문 홈페이지 리뉴얼</p>
      <a
        href="#renewal06-start"
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
    <div class="port-view-content-wrap" id="renewal06-start">
      <div class="port-view-content-innerwrap renewal06-inner">
        <div class="content-info">
          <p>다름의 시선</p>
          <div class="content-info-box">
            <div class="info-left">
              앤비젼 브랜드의 경쟁력을 강화하고 기능 중심의 명료한 디자인으로
              누구나 쉽고 편리하게 사용할 수 있도록
              <br />개선하였습니다. 원페이지 디자인의 단점을 보완하기 위해 우측
              퀵 버튼을 배치해 목적에 맞는 서비스를 한눈에 <br />확인할 수
              있습니다. 또한 해상도에 맞추어 반응하는 반응형 홈페이지는
              사용자에게 흥미를 유발합니다.
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
                    <td>㈜앤비젼</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>2019.05</td>
                  </tr>
                  <tr>
                    <th>Service</th>
                    <td>Web / Mobile</td>
                  </tr>
                  <tr>
                    <th>Launch</th>
                    <td>www.envision.co.kr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="port-view-content">
          <p>Responsive Web</p>
          <img src="../../assets/images/pc/renewal06-01.jpg" />
          <p>PC Design</p>
          <img src="../../assets/images/pc/renewal06-02.jpg" class="fullSize" />
          <div class="renewal06-innerbg01">
            <p class="fontWhite">Mobile Design</p>
            <img
              src="../../assets/images/pc/renewal06-03.jpg"
              class="fullSize"
            />
          </div>
          <p>Color Style</p>
          <img src="../../assets/images/pc/renewal06-04.png" />
        </div>
      </div>
    </div>
    <div class="port-view-footer">
      <div class="port-view-footer-wrap">
        <button class="btn-port prev" data-target="renewal05" @click="toPrev()">
          PREV
          <span></span>
        </button>
        <div class="port-view-util">
          <button>공유하기</button>
          <button class="port-request-open">프로젝트 의뢰</button>
          <button class="port-pop-close" @click="toList()">목록으로</button>
        </div>
        <button class="btn-port next" data-target="renewal07" @click="toNext()">
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
      pageId: "renewal06"
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
