/** @format */

import { createStore } from "vuex";
//succint meaning clearly stated
export default createStore({
  state: {
    showLogin: false,
    userLoggedIn: false,
    user: [],
  },
  mutations: {
    setLoginCmt(state, value) {
      state.showLogin = value;
    },
    setUserLoggedIn(state, value) {
      state.userLoggedIn = value;
    },
    setUser(state, value) {
      state.user = value;
    },
  },
  actions: {},
  modules: {},
});
