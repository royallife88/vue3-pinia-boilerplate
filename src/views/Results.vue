<template>
  <div class="col-md-12 text-center mt-4">
    <h2>Search Book title</h2>
    <Search />
  </div>

  <div class="col-md-12 text-center" v-if="!loading">
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
import Search from "@/components/Search.vue";

export default {
  name: "Results",
  computed: {
    ...mapState(bookStore, ["books", "loading"]),
  },
  components: {
    Search,
  },
};
</script>
