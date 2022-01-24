<template>
  <div class="fullPage">
    <div class="mapComponent">
      <Map />
    </div>
    <div class="landingPageInfo">abc</div>
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
<style>
.fullPage {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.mapComponent {
  z-index: 1;
  position: relative;
}
.landingPageInfo {
  z-index: 2;
  top: -100vh;
  background-color: rgba(42, 50, 75, 0.87);
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
