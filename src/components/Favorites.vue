<template>
  <div class="wrapper">
    <div class="memes">
      <div v-if="!memes.length" class="noFavorites">Избранных еще нет:(</div>
      <div v-for="meme in memes" :key="meme.id" class="memes__item">
        <p>{{meme.name}}</p>
        <img :src="meme.url">
      </div>
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

<style scoped>
.wrapper {
  width: 80%;
  margin: auto;
  text-align: center;
}
img {
  max-width: 400px;
}
.memes {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.memes__item {
  margin: 5px;
  flex: 1 1 32%;
}
.noFavorites {
  margin-top: 50px;  
  font-size: 26px;
}
</style>


