<template>
  <div class="port-view-wrap" id="renewal04">
    <div class="port-view-visual renewal04-visual">
      <div class="port-view-title">
        <p>
          LGU+ Global Roaming Service
          <br />Mobile APP Project
        </p>
      </div>
      <p class="port-view-sub">LGU+ 글로벌 로밍 인∙아웃 바운드 모바일 구축</p>
      <a
        href="#renewal04-start"
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
    <div class="port-view-content-wrap" id="renewal04-start">
      <div class="port-view-content-innerwrap renewal04-inner">
        <div class="content-info">
          <p>다름의 시선</p>
          <div class="content-info-box">
            <div class="info-left">
              LGU+ 글로벌 로밍 사이트를 모바일에서도 최적화된 UI로 이용할 수
              있도록 모바일 웹사이트를 구축하였습니다.
              <br />LGU+의 브랜드 아이덴티티를 적절하게 활용하여 디자인하였고,
              다양한 요금제를 쉽고 빠르게 확인할 수 있도록 <br />콘텐츠를
              유연하게 배치하였습니다.
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
                    <td>미디어 로그</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>2018.08</td>
                  </tr>
                  <tr>
                    <th>Service</th>
                    <td>Mobile</td>
                  </tr>
                  <tr>
                    <th>Launch</th>
                    <td>m.roaming.uplus.co.kr/mrom/Index.roam</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="port-view-content">
          <p>App Design</p>
          <div class="renewal04-innerbg01">
            <img
              src="../../assets/images/pc/renewal04-01.jpg"
              class="fullSize"
            />
          </div>
          <img src="../../assets/images/pc/renewal04-02.jpg" class="fullSize" />
        </div>
      </div>
    </div>
    <div class="port-view-footer">
      <div class="port-view-footer-wrap">
        <button class="btn-port prev" data-target="renewal03" @click="toPrev()">
          PREV
          <span></span>
        </button>
        <div class="port-view-util">
          <button>공유하기</button>
          <button class="port-request-open">프로젝트 의뢰</button>
          <button class="port-pop-close" @click="toList()">목록으로</button>
        </div>
        <button class="btn-port next" data-target="renewal05" @click="toNext()">
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
      pageId: "renewal04"
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
