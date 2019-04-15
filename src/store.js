import Vue from "vue";
import Vuex from "vuex";
import db from "./db";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [],
    memes: [],
    isLoading: true
  },
  mutations: {
    ADD_FAVORITE(state, meme) {
      if (!state.favorites.some(favorite => favorite.id === meme.id)) {
        state.favorites.push(meme);
      }
    },
    INIT_MEMES(state, memes) {
      state.memes = memes;
      state.isLoading = false;
    }
  },
  actions: {
    addFavorite: ({ commit }, meme) => {
      commit("ADD_FAVORITE", meme);
    },
    initMemes: ({ commit }) => {
      return db
        .collection("memes")
        .get()
        .then(snapshot => {
          let memes = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          commit("INIT_MEMES", memes);
        });
    }
  },
  getters: {
    getFavorites: state => {
      return state.favorites;
    },
    getMemes: state => {
      return state.memes;
    },
    loadingState: state => {
      return state.isLoading;
    }
  }
});
