import axios from "axios";
import { defineStore } from "pinia";
var _ = require("lodash");

export const bookStore = defineStore("main", {
  state: () => ({
    results: [],
  }),
  getters: {
    books: (state) => state.results,
  },
  actions: {
    async searchBooks(title) {
      try {
        let response = await axios.get("/search.json?q=" + title);
        if (response.status == 200) {
          let docs = response.data.docs;

          let topTen = _.chain(docs)
            .countBy("title")
            .entries()
            .orderBy(1, "desc")
            .take(10)
            .fromPairs()
            .value();
          let topTenBooks = Object.keys(topTen);

          this.results = topTenBooks;

          return true;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});
