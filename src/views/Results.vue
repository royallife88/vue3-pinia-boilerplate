<template>
  <div class="col-md-12 text-center mt-4">
    <h3>Search Results</h3>
  </div>

  <div class="col-md-12 text-center">
    <div class="row">
      <div
        class="card m-2"
        style="width: 18rem"
        v-for="book in books"
        :key="book.title"
      >
        <div class="card-body">
          <h5 class="card-title">{{ book }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { bookStore } from "@/stores/index.js";

export default {
  name: "Results",
  computed: {
    ...mapState(bookStore, ["books"]),
  },
};
</script>
