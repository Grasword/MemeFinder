<template>
  <div>
    <div v-for="meme in memes" :key="meme.id">
      {{meme.name}}
      <img :src="meme.url">
    </div>
  </div>
</template>

<script>
import { memeStorage } from "../memeStorage.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      memes: memeStorage.filter(meme =>
        this.$store.getters.getFavorites.some(
          favoriteId => favoriteId === meme.id
        )
      )
    };
  },
  computed: {
    ...mapGetters({
      getFavorites: "getFavorites"
    })
  }
};
</script>

