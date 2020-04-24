<template>
  <div class="port-view-wrap" id="renewal02">
    <div class="port-view-visual renewal02-visual">
      <div class="port-view-title">
        <p>
          Logen
          <br />Homepage Renewal
        </p>
      </div>
      <p class="port-view-sub">로젠택배 대표 홈페이지 개편</p>
      <a
        href="#renewal02-start"
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
    <div class="port-view-content-wrap" id="renewal02-start">
      <div class="port-view-content-innerwrap renewal02-inner">
        <div class="content-info">
          <p>다름의 시선</p>
          <div class="content-info-box">
            <div class="info-left">
              로젠택배의 메인 슬로건인 미소로 전하는 명품서비스에 맞게 메인
              비주얼 및 전체적인 룩에 “미소”라는 메타포로
              <br />응용하여 로젠의 아이덴티티를 강화하였습니다. 세련된 컬러로
              녹여내 한층 더 감성적인 느낌으로 <br />연출하였습니다.
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
                    <td>로젠택배</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>2018.12</td>
                  </tr>
                  <tr>
                    <th>Service</th>
                    <td>Web / Mobile</td>
                  </tr>
                  <tr>
                    <th>Launch</th>
                    <td>www.ilogen.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="port-view-content">
          <p>Responsive Web</p>
          <img src="../../assets/images/pc/renewal02-01.jpg" />
          <div class="renewal02-innerbg01">
            <p>PC Design</p>
            <img src="../../assets/images/pc/renewal02-02.jpg" />
            <img
              src="../../assets/images/pc/renewal02-02-01.png"
              style="width: 1903px;"
            />
          </div>
          <p>Color System</p>
          <img src="../../assets/images/pc/renewal02-03.png" />
          <div class="renewal02-innerbg02">
            <p class="fontWhite">Mobile Design</p>
            <img
              src="../../assets/images/pc/renewal02-04.png"
              class="fullSize"
            />
          </div>
          <div class="renewal02-innerbg03">
            <p>Icon Style</p>
            <img src="../../assets/images/pc/renewal02-05.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="port-view-footer">
      <div class="port-view-footer-wrap">
        <button class="btn-port prev" data-target="renewal01" @click="toPrev()">
          PREV
          <span></span>
        </button>
        <div class="port-view-util">
          <button>공유하기</button>
          <button class="port-request-open">프로젝트 의뢰</button>
          <button class="port-pop-close" @click="toList()">목록으로</button>
        </div>
        <button class="btn-port next" data-target="renewal03" @click="toNext()">
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
      pageId: "renewal02"
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
