import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scroll: {
      x: 0,
      y: 0,
    },
  },
  mutations: {
    storeScroll: (state, { scroll }) => {
      state.scroll = scroll;
    },
  },
  actions: {},
  modules: {},
  getters: {
    scroll: (state) => state.scroll,
  },
});
