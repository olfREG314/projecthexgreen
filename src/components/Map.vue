<template>
  abc
  <div id="map"></div>
</template>
<script>
export default {};
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
initMap;
</script>
<style scoped></style>
