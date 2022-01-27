<template>
  <div class="container justify-content-center">
    <div v-if="notRegistered" class="row">
      <div class="col justify-content-center abc">
        <button class="btn btn-primary" @click="showRegisterForm()">
          Register Your NGO
        </button>
      </div>
    </div>
    <div v-else class="row">
      <div class="row">
        <div class="col h5">{{ $store.state.user.displayName }}</div>
      </div>
      <div class="row">$store.state.user.</div>
    </div>
    <div class="registerForm" v-if="$store.state.showRegisterCmt">
      <RegisterForm />
    </div>
  </div>
</template>
<script>
import RegisterForm from "@/components/RegisterForm";
export default {
  components: {
    RegisterForm,
  },
  data() {
    return {
      orgDescription: "",
    };
  },
  methods: {
    showRegisterForm() {
      this.$store.commit("showRegister", true);
    },
  },
};
</script>
<style scoped>
.container {
  position: relative;
  display: flex;
  color: white;
  width: 100vw;
  height: 100vh;
}
.abc {
  display: flex;
  align-items: center;
}
.registerForm {
  position: relative;
  display: flex;
  top: 10vh;
}
</style>
