import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [""] //id
  },
  mutations: {
    ADD_FAVORITE(state, id) {
      state.favorites.push(id);
    }
  },
  actions: {
    addFavorite: ({ commit }, id) => {
      commit("ADD_FAVORITE", id);
    }
  },
  getters: {
    getFavorites: state => {
      return state.favorites;
    }
  }
});
