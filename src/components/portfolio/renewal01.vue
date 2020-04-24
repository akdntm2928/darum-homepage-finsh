<template>
  <div class="port-view-wrap" id="renewal01">
    <div class="port-view-visual renewal01-visual">
      <div class="port-view-title">
        <p>
          Suprema
          <br />responsive website renewal
        </p>
      </div>
      <p class="port-view-sub">슈프리마 반응형 구축</p>
      <a
        href="#renewal01-start"
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
    <div class="port-view-content-wrap" id="renewal01-start">
      <div class="port-view-content-innerwrap renewal01-inner">
        <div class="content-info">
          <p>다름의 시선</p>
          <div class="content-info-box">
            <div class="info-left">
              세계 최고 성능의 생체 인식 장치를 만드는 슈프리마 기업의 가치를
              전할 수 있는 웹사이트로 개선하였습니다.
              <br />
              <br />세계적인 기업에 걸맞는 트렌디한 UI&UX와 모바일 환경에서도
              슈프리마의 다양한 제품을 <br />비교&검색할 수 있도록 플랫한
              디자인, 반응형 웹사이트로 구현하여 모바일 접근성을 높였습니다.
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
                    <td>SUPREMA</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>2018.07</td>
                  </tr>
                  <tr>
                    <th>Service</th>
                    <td>Web / Mobile</td>
                  </tr>
                  <tr>
                    <th>Launch</th>
                    <td>www.supremainc.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="port-view-content">
          <p>Responsive Web</p>
          <img src="../../assets/images/pc/renewal01-01.jpg" />
          <div class="renewal01-innerbg01">
            <p class="fontWhite">PC Design</p>
            <img src="../../assets/images/pc/renewal01-02.png" />
          </div>
          <div class="renewal01-innerbg02">
            <img
              src="../../assets/images/pc/renewal01-03.png"
              class="fullSize"
            />
          </div>
          <p>Color System</p>
          <img src="../../assets/images/pc/renewal01-04.png" />
        </div>
      </div>
    </div>
    <div class="port-view-footer">
      <div class="port-view-footer-wrap">
        <button class="btn-port prev" data-target="keit" @click="toPrev()">
          PREV
          <span></span>
        </button>
        <div class="port-view-util">
          <button>공유하기</button>
          <button class="port-request-open">프로젝트 의뢰</button>
          <button class="port-pop-close" @click="toList()">목록으로</button>
        </div>
        <button class="btn-port next" data-target="renewal02" @click="toNext()">
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
      pageId: "renewal01"
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
