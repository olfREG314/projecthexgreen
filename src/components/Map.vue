<template>
  <div id="anc" class="map" style="height: 100vh; width: 100vw" v-cloak></div>
</template>
<script>
// /* eslint-disable no-undef */
import { Loader } from "@googlemaps/js-api-loader";
import { onMounted } from "vue";
import window from "window";
//window is a global var
const google = window.google;
// import { useGeolocation } from "@/components/useGeolocation";

const GOOGLE_MAPS_API_KEY = "AIzaSyBFBMZrSA1l0h6rUR5ywIt6zlxLBBuD0ag";
export default {
  data() {
    return {};
  },
  setup() {
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });

    //getting my location
    // const { coords } = useGeolocation();
    // const currPos = computed(() => ({
    //   lat: coords.value.latitude,
    //   lng: coords.value.longitude,
    // }));
    // console.log(currPos.value);
    //load map
    onMounted(async () => {
      await loader.load().then(() => {
        new google.maps.Map(document.getElementById("anc"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      });
    });
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
