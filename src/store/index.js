/** @format */

import { createStore } from "vuex";
//succint meaning clearly stated
export default createStore({
  state: {
    showLogin: false,
  },
  mutations: {
    setLoginCmt(state, value) {
      state.showLogin = value;
    },
  },
  actions: {},
  modules: {},
});
