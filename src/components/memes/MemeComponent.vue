<template>
  <div class="col-xl-4">
    <router-link :to="`/meme/${meme.id}`">
      <img :src="meme.url">
      <p>{{meme.name}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["meme"],
  data() {
    return {
      memes: []
    };
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
}
.mainInput {
  width: 50%;
  margin: 30px 0;
  padding: 5px;
}
</style>
