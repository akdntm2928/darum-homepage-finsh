<template>
  <div>
    <darum-header v-if="!hideHeader" />
    <!-- 공통되는 header클래스를 컴포넌트로 -->
    <router-view />
    <!-- 여기서부터 라우팅이 시작된다. -->
  </div>
</template>

<script>
import darumHeader from "@/components/darum-header.vue";
export default {
  components: {
    "darum-header": darumHeader,
  },
  mounted() {},
  computed: {
    hideHeader() {
      return this.$route.meta.hideHeader;
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style></style>
