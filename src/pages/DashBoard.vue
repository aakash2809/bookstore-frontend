<template>
  <v-flex>
    <div id="app">
      <v-app id="inspire">
        <Appbar ref="appbar" />
      </v-app>
    </div>
  </v-flex>
</template>

<script>
import Appbar from "../components/AppBar";
export default {
  name: "SnackBar",
  components: {
    Appbar,
  },
};
</script>