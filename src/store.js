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
      db.collection("memes")
        .get()
        .then(snapshot => {
          let memes = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          commit("INIT_MEMES", memes);
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
