<template>
  <div class="pop-container">
    <a href="javascript:;" class="btn-close-pop" @click="transClose()"
      ><img
        class="inject-svg"
        src="../../assets/images/mobile/btn-close.svg"
        alt="포트폴리오 팝업 닫기"
    /></a>
    <div>
      <div
        class="img-box"
        v-for="imageList in imageLists"
        :key="imageList.index"
      >
        <img :src="imageList.imageSrc" :alt="imageList.altData" />
      </div>
      <div class="img-box">
        <a class="btn-more-info" href="javascript:;"><span>더보기</span></a>
      </div>
    </div>
    <div class="info-box">
      <ul>
        <li v-for="list in list" :key="list.index">
          <div v-html="list.text"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["imageLists", "list"],
  methods: {
    transClose() {
        this.$emit("event","letClose");
    },
  },
};
</script>
