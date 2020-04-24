<template>
  <div class="port-view-wrap" id="esellers">
    <div class="port-view-visual esellers-visual">
      <div class="port-view-title">
        <p>
          Shopping mall
          <br />management service
        </p>
      </div>
      <p class="port-view-sub">이셀러스</p>
      <a
        href="#esellers-start"
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
    <div class="port-view-content-wrap" id="esellers-start">
      <div class="port-view-content-innerwrap">
        <div class="content-info">
          <p>다름의 시선</p>
          <div class="content-info-box">
            <div class="info-left">
              단순한 그리드의 면 분할을 활용하므로서 컨텐츠를 깔끔하고
              심플하면서 접근이 용이하도록 디자인 하였습니다.
              <br />최소의 컬러로 최적의 컬러감과 선명도를 확보하고자 하였으며,
              사용자를 고려하여 편리한 UI를 사용함으로써 <br />사용자들이
              서비스를 쉽게 이용할 수 있도록 하는 부분에 초점을 맞추어 디자인
              하였습니다.
              <br />
              <br />사용자가 디자인 및 인터렉션을 통해 편리하고 즐거운 경험을 할
              수 있도록 하였습니다.
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
                    <td>esellers</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>2016.10</td>
                  </tr>
                  <tr>
                    <th>Service</th>
                    <td>Web</td>
                  </tr>
                  <tr>
                    <th>Launch</th>
                    <td>www.esellers.co.kr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="port-view-content">
          <p>Responsive Web</p>
          <img src="../../assets/images/pc/esellers-01.jpg" />
        </div>
      </div>
    </div>
    <div class="port-view-footer">
      <div class="port-view-footer-wrap">
        <button
          class="btn-port prev"
          data-target="middleeast"
          @click="toPrev()"
        >
          PREV
          <span></span>
        </button>
        <div class="port-view-util">
          <button>공유하기</button>
          <button class="port-request-open">프로젝트 의뢰</button>
          <button class="port-pop-close" @click="toList()">목록으로</button>
        </div>
        <button class="btn-port next" data-target="posco" @click="toNext()">
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
      pageId: "port-esellers"
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
