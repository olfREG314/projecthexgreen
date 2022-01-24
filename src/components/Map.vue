<template>
  <div ref="mapDiv" class="map" style="height: 100vh; width: 100vw"></div>
  <div>abc</div>
</template>
<script>
/* eslint-disable no-undef */
import { Loader } from "@googlemaps/js-api-loader";
import { onMounted, ref, computed } from "vue";
//window is a global var

import { useGeolocation } from "@/components/useGeolocation";

const GOOGLE_MAPS_API_KEY = "AIzaSyBFBMZrSA1l0h6rUR5ywIt6zlxLBBuD0ag";
export default {
  data() {
    return {};
  },
  setup() {
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);
    //getting my location
    const { coords } = useGeolocation();
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));
    console.log(currPos.value.lng);
    //load map
    onMounted(() => {
      loader.load().then(
        () =>
          new google.maps.Map(mapDiv.value, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          })
      );
    });
    return { mapDiv };
  },
};
</script>
<style>
[v-cloak] {
  display: none;
}
/* .map {
  width: 100%;
  height: 100%;
} */
</style>
