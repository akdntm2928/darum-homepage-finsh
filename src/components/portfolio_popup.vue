<template>
  <!-- <div class="darum-popup pop-portfolio"> -->
  <div v-if="testData">
    <button class="btn-popup-close close-pop-inside">
      <img src="../assets/images/pc/btn/btn-popup-close.svg" alt="닫기" />
    </button>
    <!-- [Start] renewal13 -->
    <div class="port-view-wrap" :id="testData.id">
      <!-- <div :class="`port-view-visual ${testData.id}-visual`" id="subBody"> -->
      <div :class="`port-view-visual ${testData.id}-visual`" id="subBody">
        <div class="port-view-title">
          <p>
            <span v-html="testData.title" />
          </p>
        </div>
        <p class="port-view-sub">{{ testData.viewSub }}</p>
        <a
          :href="`#${testData.id}`"
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
      <div class="port-view-content-wrap" :id="`${testData.id}-start`">
        <div :class="`port-view-content-innerwrap ${testData.id}-inner`">
          <div class="content-info">
            <p>다름의 시선</p>
            <div class="content-info-box">
              <div class="info-left">
                <span v-html="testData.infoboxText" />
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
                      <td>{{ testData.tbodyClient }}</td>
                    </tr>
                    <tr>
                      <th>Date</th>
                      <td>{{ testData.tbodyDate }}</td>
                    </tr>
                    <tr>
                      <th>Service</th>
                      <td>{{ testData.tbodyService }}</td>
                    </tr>
                    <tr>
                      <th>Launch</th>
                      <td>{{ testData.tbodyLaunch }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="port-view-content">
            <p>Responsive Web</p>
            <img :src="testData.responsiveWebImg" />
            <div :class="`${testData.id}-innerbg01`">
              <p>PC Design</p>
              <img :src="testData.pcDesignImg" class="fullSize" />
            </div>
            <div :class="`${testData.id}-innerbg02`">
              <p>Color System</p>
              <img :src="testData.colorSystemImg1" />
            </div>
            <img :src="testData.colorSystemImg2" class="fullSize" />
            <div :class="`${testData.id}-innerbg03`">
              <p>Icon Style</p>
              <img :src="testData.iconStyleImg" class="fullSize" />
            </div>
          </div>
        </div>
      </div>
      <div class="port-view-footer">
        <div class="port-view-footer-wrap">
          <button class="btn-port prev" :data-target="testData.prevId">
            PREV
            <span></span>
          </button>
          <div class="port-view-util">
            <button>공유하기</button>
            <button class="port-request-open">프로젝트 의뢰</button>
            <button class="port-pop-close">목록으로</button>
          </div>
          <button class="btn-port next last-page-btn">
            NEXT
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  /*   props: {
    data: {
      type: Object,
      required: true,
    },
  }, */
  data() {
    return {
      testData: null
    };
  },
  mounted() {
    if (this.popupList) {
      this.testData = this.popupList[0];
      let testValue = this.popupList.find(v => v.id === "renewal12");
      // console.log("testValue ? ", testValue);
    }
  },
  computed: {
    ...mapState({
      popupList: state => state.portfolio.portsPopupList
    })
  },
  methods: {}
};
</script>

<style scoped></style>
