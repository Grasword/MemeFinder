<template>
  <div class="signup-form">
    <form action="submit" @submit.prevent="onSubmit">
      <div class="input">
        <label for="name">Name</label>
        <input type="text" class="name" v-model="name" required>
      </div>
      <div class="input">
        <label for="url">Url</label>
        <input type="text" class="url" v-model="url" required>
      </div>
      <div class="input">
        <label for="tags">tags</label>
        <input type="text" class="tags" v-model="tags" required>
      </div>
      <div class="submit">
        <button type="submit">Submit</button>
      </div>
      {{tagsArr}}
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            url: '',
            tags: ''
        }
    },
    computed: {
        tagsArr() {
            return this.tags.split(',')
        }
    },
    methods: {
        onSubmit() {
            db.collection("memes").add({
                name: this.name,
                url: this.url,
                tags: this.tags
            })
            form.name.value = ''
            form.ulr.value = ''
            form.tags.value = ''
        }
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
</style>
