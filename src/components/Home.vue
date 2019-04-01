<template>
  <div id="main">
    <app-meme-component></app-meme-component>
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
  }
};
</script>


<style scoped>
#main {
  width: 80%;
  margin: auto;
  text-align: center;
}
</style>