<template>
  <div name="snackbar">
    <v-snackbar v-model="show" :timeout="timeout">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="show = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "SnackBar",

  data() {
    return {
      show: false,
      text: "",
      timeout: 0,
    };
  },
};
</script>