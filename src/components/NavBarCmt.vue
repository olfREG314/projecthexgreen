<template>
  <div class="navbar">
    <div class="container-fluid justify-content-end">
      <span href="#" class="navbar-brand m-0 p-0 h1">projectHexGreen</span>
      <button
        class="btn"
        data-bs-toggle="tooltip"
        v-bind:title="name"
        @click="showAccountPage()"
      >
        <i class="bi bi-person-circle"></i>
      </button>
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
<style>
.navbar {
  color: white;
  background-color: rgb(42, 50, 75);
  box-shadow: 0px 3px 10px var(--nice-color);
  justify-content: end;
}
.bi-person-circle {
  color: white;
  font-size: 30px;
}
</style>
