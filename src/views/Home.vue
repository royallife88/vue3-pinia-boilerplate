<template>
  <div class="col-md-12 text-center mt-4">
    <h2>Search Book title</h2>
    <div class="input-group input-group-lg">
      <input
        v-model="title"
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        placeholder="Search Book title"
      />
      <span class="input-group-text" id="inputGroup-sizing-lg" @click="search"
        >Search</span
      >
    </div>
  </div>
</template>

<script>
import { bookStore } from "@/stores/index.js";
import { mapActions } from "pinia";

export default {
  name: "Home",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(bookStore, ["searchBooks"]),
    async search() {
      let response = await this.searchBooks(this.title);

      if (response) {
        this.$router.push("/results");
      } else {
        alert("Someting went wrong!");
      }
    },
  },
};
</script>

<style scoped></style>
