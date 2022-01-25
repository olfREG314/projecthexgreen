  /* eslint-disable */
<template>
  <div class="flex-container">
    <div class="flex-item info col">
      <div class="row info-lines">
        Lorem afa ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus
        id ex, a assumenda nobis nam deserunt dolorum sint aut laudantium
        doloribus, nesciunt aliquid sed, rationfafe sunt iste officia eum?
      </div>
      <div class="row nav-button">
        <div class="col p-2 m-2">
          <button type="button" class="btn btn-primary m-4">
            <router-link to="/LoginPage">Become Helping Hand</router-link>
          </button>
          <button
            type="button"
            class="btn btn-primary m-4"
            @click="callLoginForm()"
          >Find Helping Hand</button>
        </div>
      </div>
    </div>
    <div class="flex-item logo col">
      <img
        id="projectHexGreen_Logo"
        src="@/assets/projectHexGreen_Logo.png"
        alt="projectHexGreen_Logo"
        srcset
      />
    </div>
  </div>
</template>
<script>
// import LoginPage from "@/views/LoginPage.vue";
export default {
  setup() {},
  methods: {
    callLoginForm() {},
  },
};
</script>
<style scoped>
#projectHexGreen_Logo {
  width: 500px;
}
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  height: inherit;
}
.flex-item {
  flex-grow: 1;
  justify-content: center;
}
.info {
  color: white;
  margin-left: 35px;
  text-align: center;
}
.info-lines {
  text-align: center;
}
.nav-button {
  text-align: center;
}
</style>
