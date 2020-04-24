<template>
  <div class="port-view-wrap" id="renewal03">
    <div class="port-view-visual renewal03-visual">
      <div class="port-view-title">
        <p>
          Pizza Alvolo
          <br />Website Renewal
        </p>
      </div>
      <p class="port-view-sub">피자알볼로 웹사이트 리뉴얼</p>
      <a
        href="#renewal03-start"
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
    <div class="port-view-content-wrap" id="renewal03-start">
      <div class="port-view-content-innerwrap renewal03-inner">
        <div class="content-info">
          <p>다름의 시선</p>
          <div class="content-info-box">
            <div class="info-left">
              피자알볼로 브랜드 및 주문 사이트 전면 리뉴얼로 브랜드의 가치를
              증대시켜 소비자의 유입을 유도하였습니다.
              <br />브랜드의 CI를 세련되게 표현하여 브랜드 이미지를
              제고하였으며, 온라인으로 간편하게 주문할 수 있도록 UI&UX <br />를
              개선하고 서비스의 편의성을 위해 심플한 UI 로 구성하였습니다.
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
                    <td>피자알볼로</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>2018.09</td>
                  </tr>
                  <tr>
                    <th>Service</th>
                    <td>Web / Mobile</td>
                  </tr>
                  <tr>
                    <th>Launch</th>
                    <td>www.pizzaalvolo.co.kr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="port-view-content">
          <p>Responsive Web</p>
          <img src="../../assets/images/pc/renewal03-01.jpg" />
          <div class="renewal03-innerbg01">
            <p class="fontWhite">PC Design</p>
            <img
              src="../../assets/images/pc/renewal03-02.jpg"
              class="fullSize"
            />
          </div>
          <img src="../../assets/images/pc/renewal03-03.jpg" />
          <div class="renewal03-innerbg02">
            <p>Mobile Design</p>
            <img
              src="../../assets/images/pc/renewal03-04.jpg"
              class="fullSize"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="port-view-footer">
      <div class="port-view-footer-wrap">
        <button class="btn-port prev" data-target="renewal02" @click="toPrev()">
          PREV
          <span></span>
        </button>
        <div class="port-view-util">
          <button>공유하기</button>
          <button class="port-request-open">프로젝트 의뢰</button>
          <button class="port-pop-close" @click="toList()">목록으로</button>
        </div>
        <button class="btn-port next" data-target="renewal04" @click="toNext()">
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
      pageId: "renewal03"
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
