/** @format */

import { onUnmounted, onMounted, ref } from "vue";

export function useGeolocation() {
  const coords = ref({ latitude: 0, longitude: 0 });
  const isSupported = "navigator" in window && "geolocation" in navigator;

  let watcher = null;
  onMounted(() => {
    if (isSupported) {
      watcher = navigator.geolocation.watchPosition(
        (position) => (coords.value = position.coords)
      );
      console.log("its in if" + coords.value);
    }
  });
  onUnmounted(() => {
    if (watcher) {
      navigator.geolocation.clearWatch(watcher);
      console.log("its in unMOunted");
    }
  });

  return { coords, isSupported };
}
