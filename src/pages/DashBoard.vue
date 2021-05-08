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
import Books from "../components/AllBooks";

export default {
  name: "DashBoard",

  components: {
    Appbar,
    Books,
  },
};
</script>

<style lang ="scss" scoped>
@import "../scss/dashboard.scss";
</style>