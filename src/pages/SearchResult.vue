<template>
  <v-flex>
    <div id="app">
      <v-app id="inspire">
        <Appbar ref="appbar" @BOOKS="getFilteredBooks" />
        <v-row>
          <Books ref="book" />
        </v-row>
      </v-app>
    </div>
  </v-flex>
</template>

<script>
import Appbar from "../components/AppBar";
import Books from "../components/FilteredBooksForSearch";
//import { EventBus } from "@/event-bus";

export default {
  name: "DashBoard",
  data: () => ({
    data: [],
  }),

  components: {
    Appbar,
    Books,
  },

  methods: {
    getFilteredBooks(books) {
      console.log("data in transbook", this.$refs.book.allBooks);
      console.log("book caaled", this.$refs.appbar.search);
      this.$refs.book.allBooks = books;
      console.log("data in transbook", this.$refs.book.allBooks);
      this.$refs.book.pageCount();
    },
  },
};
</script>