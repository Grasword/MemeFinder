<template>
  <div class="main">
    <div class="meme">
      <h2>{{meme.name}}</h2>
      <img :src="meme.url">
    </div>
    <button @click="addFavorite" class="addFavorite">Add to favorites</button>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  data() {
    return {
      meme: this.$store.getters.getMemes.find(meme => meme.id === this.id)
    };
  },
  methods: {
    addFavorite() {
      this.$store.dispatch("addFavorite", this.meme);
      console.log(this.$store.state);
    }
  }
};
</script>

<style scoped>
.main {
  text-align: center;
}
img {
  max-width: 600px;
}
.meme {
  width: 80%;
  margin: auto;
  text-align: center;
}
.addFavorite {
  margin: 15px auto;
  padding: 9px;
  background-color: blue;
  border: none;
  color: white;
  border-radius: 5%;
}
</style>
