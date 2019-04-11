import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [],
    memes: [],
    isLoading: true
  },
  mutations: {
    ADD_FAVORITE(state, meme) {
      state.favorites.push(meme);
    },
    SET_MEMES(state, memes) {
      state.memes = memes;
    }
  },
  actions: {
    addFavorite: ({ commit }, meme) => {
      commit("ADD_FAVORITE", meme);
    },
    setMemes: ({ commit }) => {
      db.collection("memes")
        .get()
        .then(snapshot => {
          let memes = [];
          snapshot.docs.forEach(doc => {
            const meme = {
              id: doc.id,
              name: doc.data().name,
              url: doc.data().url
            };
            memes.push(meme);
          });
          commit("SET_MEMES", memes);
        });
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
