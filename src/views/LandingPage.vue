<template>
  <div class="myContainer">
    <NavBarCmpt />
    <MapCmpt />
    <LandingPageInfoCmpt v-if="$store.state.usernotLoggedIn" />
    <AccountPage v-else />
    iv v-if="$store.state.showLogin" class="login-cmpt">
    <LoginCmpt />
  </div>
</template>
<script>
import MapCmpt from "@/components/MapCmpt.vue";
import LandingPageInfoCmpt from "@/components/LandingPageInfoCmpt.vue";
import LoginCmpt from "@/components/LoginCmpt";
import NavBarCmpt from "@/components/NavBarCmpt";
import AccountPage from "@/views/AccountPage";
export default {
  components: {
    MapCmpt,
    LandingPageInfoCmpt,
    LoginCmpt,
    NavBarCmpt,
    AccountPage,
  },
};
</script>
<style>
:root {
  --nice-color: rgba(42, 50, 75, 0.87);
}
.myContainer {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
}
</style>
