<template>
  <div class="landingPage">
    <div class="navBar">
      <NavBarCmt />
    </div>
    <div class="mapComponent">
      <MapComponent />
    </div>
    <div class="landingPageInfo">
      <LandingPageInfoComponent v-if="$store.state.usernotLoggedIn" />
      <AccountPage v-else />
    </div>
    <div v-if="$store.state.showLogin" class="login-component">
      <LoginComponent />
    </div>
  </div>
</template>
<script>
import MapComponent from "@/components/MapComponent.vue";
import LandingPageInfoComponent from "@/components/LandingPageInfoComponent.vue";
import LoginComponent from "@/components/LoginComponent";
import NavBarCmt from "@/components/NavBarCmt";
import AccountPage from "@/views/AccountPage";
export default {
  components: {
    MapComponent,
    LandingPageInfoComponent,
    LoginComponent,
    NavBarCmt,
    AccountPage,
  },
};
</script>
<style>
:root {
  --nice-color: rgba(42, 50, 75, 0.87);
}
.landingPage {
  overflow: hidden;
  height: 100vh;
}
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
  top: -100vh;
  background-color: rgba(42, 50, 75, 0.87);
  width: 100vw;
  height: 100vh;
  position: relative;
}
.login-component {
  top: -100vh;
  position: relative;
  /* z-index: 0; */
  /* overflow: hidden; */
}
</style>
