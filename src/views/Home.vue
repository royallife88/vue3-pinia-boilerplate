<template>
  <div class="col-md-12 text-center mt-4">
    <h2>Search Book title</h2>
    <Search />
  </div>
</template>

<script>
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  components: {
    Search,
  },
};
</script>

<style scoped></style>
