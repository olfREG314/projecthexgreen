<template>
  <div class="justForCenter">
    <div class="blur-container"></div>
    <div class="container">
      <div class="row p-5 info-login">
        <div class="col info">
          <div class="row info-title">
            <h3>Find Helping Hand</h3>
          </div>
          <div class="row info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis
            dolore voluptates at natus soluta modi, vero quis iure consectetur
            deserunt facilis alias eaque explicabo!
          </div>
        </div>
        <div class="col login">
          <div class="row justify-content-center title">SignUp</div>
          <div class="row login-Input p-4">
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col form-label">Email</label>
                <input type="email" class="form-control" />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col form-label">Password</label>
                <input type="password" class="form-control" />
                <div id="emailHelp" class="form-text">
                  Provide strong password
                </div>
              </div>
            </form>
          </div>
          <div class="row createAccount-btn justify-content-center">
            <button class="btn btn-primary">Create Account</button>
          </div>
          <div class="row nice-OR-line">
            <span>-------- or --------</span>
          </div>
          <div class="autoGoogleLogin">
            <button class="btn" @click="googleAuthLogin()">
              <img
                src="@/assets/googleLogo.png"
                alt=""
                srcset=""
                style="width: 30px"
                class="m-2"
              />
            </button>
          </div>
        </div>
        <div class="col-1 cancel-btn" style="">
          <button class="btn btn-outline-danger" @click="hideLoginCmt()">
            <i class="bi bi-x-circle"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
  methods: {
    hideLoginCmt() {
      this.$store.commit("setLoginCmt", false);
    },
    //-----------google auth login-----------------
    googleAuthLogin() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((result) => {
        this.$store.commit("setUser", result.user);
        this.$store.commit("setUserLoggedIn", false);
        alert("you are logged in");
        this.$store.commit("setLoginCmt", false);
      });
    },
  },
};
</script>
<style scoped>
.justForCenter {
  display: flex;
  position: relative;
  justify-content: center;
  top: -50vh;
  align-items: center;
}

.container {
  /* border: 2px solid black; */
  border-radius: 10px;
  background-color: var(--nice-color);
  display: flex;
  position: absolute;
  height: 90vh;
  color: white;
  align-items: center;
  backdrop-filter: blur(4px);
  box-shadow: 0px 0px 10px var(--nice-color);
  max-height: 550px;
}
.login-input {
  display: flex;
  position: relative;
}
.createAccount-btn .btn {
  width: 200px;
}

.cancel-btn {
  width: 30px;
  color: red;
}
</style>
