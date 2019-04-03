<template>
  <div class="meme">
    <h2>{{meme.name}}</h2>
    <img :src="meme.url">
  </div>
</template>

<script>
import { memeStorage } from "../../memeStorage.js";

export default {
  props: {
    id: String
  },
  data() {
    return {
      meme: memeStorage.find(meme => meme.id === this.id)
    };
  },
  methods: {
    addFavorite() {
      this.$store.dispatch("addFavorite", this.meme.id);
      console.log(this.$store.state);
    }
  }
};
</script>

<style scoped>
img {
  max-width: 600px;
}
.meme {
  width: 80%;
  margin: auto;
  text-align: center;
}
</style>
