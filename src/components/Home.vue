<template>
  <div id="main" class="container">
    <input class="mainInput" type="text" v-model="filterText" placeholder="Find your meme">
    <div v-if="isLoading" class="loading">
      <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="row" v-if="!isLoading">
      <app-meme-component v-for="meme in filteredMemes" :meme="meme" :key="meme.id"></app-meme-component>
    </div>
  </div>
</template>

<script>
import MemeComponent from "./memes/MemeComponent.vue";
export default {
  data() {
    return {
      filterText: ""
    };
  },
  created() {
    this.$store.dispatch("initMemes");
  },
  computed: {
    memes() {
      return this.$store.getters.getMemes;
    },
    filteredMemes() {
      return this.memes.filter(element => {
        const regex = new RegExp(this.filterText, "i");
        return regex.test(element.name);
      });
    },
    isLoading() {
      return this.$store.getters.loadingState;
    }
  },
  components: {
    appMemeComponent: MemeComponent
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
#main {
  width: 80%;
  margin: auto;
  text-align: center;
}
.loading {
  margin-top: 100px;
}
</style>
