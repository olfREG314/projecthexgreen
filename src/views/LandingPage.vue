<template>
  <div class="fullPage">
    <Map />
  </div>
</template>
<script>
import Map from "@/components/Map.vue";
export default {
  components: {
    Map,
  },
};
</script>
<style scoped>
.fullPage {
  padding: 0;
  margin: 0;
  width: 100vh;
  height: 100vh;
}
</style>
