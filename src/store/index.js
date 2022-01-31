/** @format */

import { createStore } from "vuex";
//succint meaning clearly stated
export default createStore({
  state: {
    showLogin: false,
    usernotLoggedIn: true,
    user: [],
    showAccountPage: false,
    showRegisterCmt: true,
  },
  mutations: {
    setLoginCmt(state, value) {
      state.showLogin = value;
    },
    setUserLoggedIn(state, value) {
      state.usernotLoggedIn = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    showAccountPage(state, value) {
      state.showAccountPage = value;
    },
    showRegister(state, value) {
      state.showRegisterCmt = value;
    },
  },
  actions: {},
  modules: {},
});
