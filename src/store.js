import Vue from "vue";
import Vuex from "vuex";
import { memeStorage } from "./memeStorage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [""],
    memes: memeStorage
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
    },
    getMemes: state => {
      return state.memes;
    }
  }
});
