<template>
  <div class="nav-containerH">
    <div class="navbarH">
      <div class="navbarH-logo">
        <button href="#"><h3>projectHexGreen</h3></button>
      </div>
      <div class="navbarH-account">
        <button
          data-bs-toggle="tooltip"
          v-bind:title="name"
          @click="showAccountPage()"
        >
          <i class="bi bi-person-circle"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: this.$store.state.user.displayName,
    };
  },
  methods: { showAccountPage() {} },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
.nav-containerH {
  margin: 10px;
  padding: 5px;
  background-color: rgb(42, 50, 75);
  box-shadow: 0px 3px 10px var(--nice-color);
}
.navbarH {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.navbarH-logo {
  margin: 0px 20px;
  font-family: "Fredoka One", cursive;
  font-size: 30px;
  cursor: pointer;
  color: white;
  font-style: normal;
}
.navbarH-account {
  margin: 0px 20px;
}
button {
  border: none;
  cursor: pointer;
  background-color: var(--nice-color);
  color: white;
  font-size: 30px;
}
button :hover {
  color: var(--green-color);
}
</style>
