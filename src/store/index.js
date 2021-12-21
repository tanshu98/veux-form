/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    namelist: [],
  },
  mutations: {
    ADD_ITEM: (state, name) => {
      state.namelist.push(name)
    },
    REMOVE_ITEM: (state, name) => {
      state.namelist.pop(name)
    },
    SUBMIT_ITEM: (state,name) => {
      state.namelist(state,name)
    }
  },
  actions: {},
  modules: {},
});
