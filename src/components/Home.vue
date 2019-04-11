<template>
  <div id="main" class="container">
    <div v-if="isLoading" class="loading">
      <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <app-meme-component v-if="!isLoading"></app-meme-component>
  </div>
</template>

<script>
import MemeComponent from "./memes/MemeComponent.vue";

export default {
  data() {
    return {};
  },
  components: {
    appMemeComponent: MemeComponent
  },
  computed: {
    isLoading() {
      return this.$store.getters.loadingState;
    }
  }
};
</script>


<style scoped>
#main {
  width: 80%;
  margin: auto;
  text-align: center;
}
.loading {
  margin-top: 100px
}
</style>