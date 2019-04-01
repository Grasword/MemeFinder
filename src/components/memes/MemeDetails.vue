<template>
  <div>
    <div>
      <div>
        <h2>{{meme.name}}</h2>
        <img :src="meme.url">
      </div>
    </div>
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
  }
};
</script>

<style>
</style>
