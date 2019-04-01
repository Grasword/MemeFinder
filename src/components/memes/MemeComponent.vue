<template>
  <div>
    <input class="mainInput" type="text" v-model="filterText">
    <div class="memes">
      <div v-for="meme in filteredMemes" :key="meme.id" class="memes__item">
        <router-link :to="`/meme/${meme.id}`">
          <img :src="meme.url">
          <p>{{meme.name}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { memeStorage } from "../../memeStorage.js";

export default {
  data() {
    return {
      memes: memeStorage,
      filterText: ""
    };
  },
  computed: {
    filteredMemes() {
      return this.memes.filter(element => {
        const regex = new RegExp(this.filterText, "i");
        return regex.test(element.name);
      });
    }
  }
};
</script>

<style scoped>
img {
  max-width: 400px;
}
.memes {
  display: flex;
  flex-flow: row wrap;
}
.memes__item {
  margin: 5px;
  flex: 1 1 32%;
}
.mainInput {
  width: 50%;
  margin: 30px 0;
  padding: 5px;
}
</style>
