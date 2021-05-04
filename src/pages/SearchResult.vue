<template>
  <v-flex>
    <div id="app">
      <v-app id="inspire">
        <Appbar ref="appbar" @BOOKS="getFilteredBooks" />
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
      this.refs.books.allBooks = books;
    },
  },

  created() {
    // console.log(EventBus.$on("BOOKS"));
    //this.abc();
  },
};
</script>