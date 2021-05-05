<template>
  <v-flex>
    <div id="app">
      <v-app id="inspire">
        <Appbar ref="appbar" v-on:BOOKS="getFilteredBooks($event)" />
        <v-row>
          <Books ref="books" />
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
      console.log("book caaled", books);
      this.refs.books.allBooks = books;
    },
  },
  mounted() {
    console.log("app bar", this.$refs.appbar);
  },
};
</script>