<template>  
    <div>
      <input class="mainInput" type="text" v-model="filterText">
      <div class="row">
        <div v-for="meme in filteredMemes" :key="meme.id" class="col-xl-4">
          <router-link :to="`/meme/${meme.id}`">
            <img :src="meme.url">
            <p>{{meme.name}}</p>
          </router-link>
        </div>
      </div>
    </div>  
</template>

<script>
export default {
  data() {
    return {
      memes: [],
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
  },
  created() {
    this.memes = this.$store.getters.getMemes;
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
