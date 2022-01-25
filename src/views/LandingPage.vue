<template>
  <div class="LandingPage">
    <!-- <div class="mapComponent">
      <MapComponent />
    </div>-->
    <div class="landingPageInfo">
      <LandingPageInfoComponent />
    </div>
  </div>
</template>
<script>
// import MapComponent from "@/components/MapComponent.vue";
import LandingPageInfoComponent from "@/components/LandingPageInfoComponent.vue";
export default {
  components: {
    // MapComponent,
    LandingPageInfoComponent,
  },
};
</script>
<style>
.mapPage {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.mapComponent {
  z-index: -1;
  position: relative;
}
.landingPageInfo {
  /* z-index: 2; */
  /* top: -100vh; */
  background-color: rgba(42, 50, 75, 0.87);
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
