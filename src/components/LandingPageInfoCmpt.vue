<template>
  <div class="container">
    <div class="row info-logo">
      <div class="col info-data-button">
        <div class="row info-text">
          NGO platform is website for NGOs who are in need of helping hand and
          for the common people who want to help other for the betterment of
          society. This platform will provide a medium to communicate between
          these two communities. The website will allow NGO to provide volunteer
          Work to people and a opportunity for the people to find these
          volunteer work with ease and have a chance to give a helping hand.
        </div>
        <div class="row info-2-button">
          <div class="col give-helping-hand">
            <button type="button" class="btn btn-primary">
              Give Helping Hand
            </button>
          </div>
          <div class="col get-helping-hand">
            <button
              type="button"
              class="btn btn-primary"
              @click="showLoginCmt()"
            >
              Get Helping Hand
            </button>
          </div>
        </div>
      </div>
      <div class="col logo-img">
        <div class="logo-png">
          <img src="../assets/projectHexGreen_Logo.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    showLoginCmt() {
      this.$store.commit("setLoginCmt", true);
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  color: white;
}
.logo-png img {
  width: 35vw;
}
.info-logo {
  align-items: center;
}
.info-2-button {
  margin: 10px;
  padding: 5px 10px;
}
</style>
