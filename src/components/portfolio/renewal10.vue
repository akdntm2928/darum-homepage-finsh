<template>
  <div class="port-view-wrap" id="renewal10">
    <div class="port-view-visual renewal10-visual">
      <div class="port-view-title">
        <p>
          Seoulbeltway Disaster Information
          <br />System
        </p>
      </div>
      <p class="port-view-sub">서울고속도로 재난 정보 시스템</p>
      <a
        href="#renewal10-start"
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
    <div class="port-view-content-wrap" id="renewal10-start">
      <div class="port-view-content-innerwrap renewal10-inner">
        <div class="content-info">
          <p>다름의 시선</p>
          <div class="content-info-box">
            <div class="info-left">
              기상청의 오픈 API수집을 통해 각 지역의 특보 및 예보 발생 시 PUSH
              알림으로
              <br />기상 특보에 대비할 수 있는 효과적인 기능을 구현하였으며 자료
              및 정보를 한눈에 <br />쉽게 볼 수 있는 깔끔한 디자인으로
              구성하였습니다.
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
                    <td>Seoulbeltway</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>2019. 10</td>
                  </tr>
                  <tr>
                    <th>Service</th>
                    <td>Web / Mobile</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="port-view-content">
          <p>App Design</p>
          <img src="../../assets/images/pc/renewal10-01.png" class="fullSize" />
          <img src="../../assets/images/pc/renewal10-02.jpg" class="fullSize" />
          <p>Color System</p>
          <img src="../../assets/images/pc/renewal10-03.png" />
        </div>
      </div>
    </div>
    <div class="port-view-footer">
      <div class="port-view-footer-wrap">
        <button class="btn-port prev" data-target="renewal09" @click="toPrev()">
          PREV
          <span></span>
        </button>
        <div class="port-view-util">
          <button>공유하기</button>
          <button class="port-request-open">프로젝트 의뢰</button>
          <button class="port-pop-close" @click="toList()">목록으로</button>
        </div>
        <button class="btn-port next" data-target="renewal11" @click="toNext()">
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
      pageId: "renewal10"
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
