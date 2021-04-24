<template>
  <v-form>
    <br />
    <br />
    <v-text-field
      outlined
      dense
      label="E-mail"
      required
      autocomplete="off"
    ></v-text-field>

    <v-text-field outlined dense label="password" required></v-text-field>
    <br />
    <button x-large block class="button">Login</button>
  </v-form>
</template>

<style scoped>
.button {
  background: brown 0% 0% no-repeat padding-box;
  width: 352px;
  height: 37px;
  left: 727px;
  color: white;
  font-size: 18px;
}
</style>
