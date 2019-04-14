<template>
  <div class="signup-form">
    <form action="submit" @submit.prevent="onSubmit">
      <div class="input">
        <label for="name">Name</label>
        <input type="text" class="name" v-model="form.name" required>
      </div>
      <div class="input">
        <label for="url">Url</label>
        <input type="text" class="url" v-model="form.url" required>
      </div>
      <div>
        <label for="tags">Tags</label>
        <vue-tags-input
          class="tags"
          v-model="form.tag"
          :tags="form.tags"
          :add-on-key="[13, ',', ';']"
          @tags-changed="newTags => form.tags = newTags"
        />
      </div>
      <div class="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import VueTagsInput from "@johmun/vue-tags-input";
import db from "../../db.js";

export default {
  data() {
    const defaultForm = {
      name: "",
      url: "",
      tag: "",
      tags: []
    };

    return {
      form: Object.assign({}, defaultForm),
      defaultForm: Object.assign({}, defaultForm)
    };
  },
  methods: {
    onSubmit() {
      db.collection("memes")
        .add({
          name: this.form.name,
          url: this.form.url,
          tags: this.form.tags.map(tag => tag.text)
        })
        .then(() => {
          this.form = this.defaultForm;
        });
    }
  },
  components: {
    VueTagsInput
  }
};
</script>

<style scoped>
.signup-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #1b1752;
  background-color: #eee;
}

.input.invalid label {
  color: red;
}

.input.invalid input {
  border: 1px solid red;
  background-color: pink;
}

.submit button {
  border: 1px solid #521751;
  color: #201752;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #171852;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
.invalid {
  color: red;
}
.tags {
  font: inherit;
  width: 100%;
  padding-top: -6px;
  padding-bottom: 6px;
  box-sizing: border-box;
  font-size: 18px;
  margin-bottom: 12px;
}
</style>
