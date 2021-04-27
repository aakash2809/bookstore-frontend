<template>
  <v-flex>
    <div id="app">
      <v-app id="inspire">
        <Appbar ref="appbar" />
        <v-row>
          <Books ref="books" :allBooks="allBooks" />
        </v-row>
      </v-app>
    </div>
  </v-flex>
</template>

<script>
import Appbar from "../components/AppBar";
import Books from "../components/books";
export default {
  name: "SnackBar",
  components: {
    Appbar,
    Books,
  },
};
</script>