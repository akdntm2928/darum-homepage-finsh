<template>
  <div class="port-view-wrap" id="renewal11">
    <div class="port-view-visual renewal11-visual">
      <div class="port-view-title">
        <p>
          KB financial group inc.
          <br />website renewal
        </p>
      </div>
      <p class="port-view-sub">KB금융 경영연구소</p>
      <a
        href="#renewal11-start"
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
    <div class="port-view-content-wrap" id="renewal11-start">
      <div class="port-view-content-innerwrap renewal11-inner">
        <div class="content-info">
          <p>다름의 시선</p>
          <div class="content-info-box">
            <div class="info-left">
              asis 사이트의 개선점을 보완하여 연구보고서를 한눈에 파악하고, 정보
              검색이 편리한
              <br />UI개선으로 사용자 편의성을 증대하였습니다. 또한, 기업
              아이덴티티에 벗어나지 않는 <br />깔끔한 디자인으로 사이트를
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
                    <td>KB금융지주</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>2019.10~2019.12</td>
                  </tr>
                  <tr>
                    <th>Service</th>
                    <td>Web / Mobile / APP</td>
                  </tr>
                  <tr>
                    <th>Launch</th>
                    <td>www.kbfg.com/kbresearch/index.do</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="port-view-content">
          <img src="../../assets/images/pc/renewal11-01.jpg" />
          <div class="renewal11-innerbg01">
            <p class="fontWhite">PC Design</p>
            <img
              src="../../assets/images/pc/renewal11-02.jpg"
              class="fullSize"
            />
          </div>
          <div class="renewal11-innerbg02">
            <p>Mobile Design</p>
            <img
              src="../../assets/images/pc/renewal11-03.jpg"
              class="fullSize"
            />
          </div>
          <p>Color System</p>
          <img src="../../assets/images/pc/renewal11-04.png" />
        </div>
      </div>
    </div>
    <div class="port-view-footer">
      <div class="port-view-footer-wrap">
        <button class="btn-port prev" data-target="renewal10" @click="toPrev()">
          PREV
          <span></span>
        </button>
        <div class="port-view-util">
          <button>공유하기</button>
          <button class="port-request-open">프로젝트 의뢰</button>
          <button class="port-pop-close" @click="toList()">목록으로</button>
        </div>
        <button class="btn-port next" data-target="renewal12" @click="toNext()">
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
      pageId: "renewal11"
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
