<template>
  <v-form>
    <br />
    <v-text-field
      outlined
      dense
      label="firstName"
      required
      autocomplete="off"
    ></v-text-field>
    <v-text-field
      outlined
      dense
      label="lastName"
      required
      autocomplete="off"
    ></v-text-field>
    <v-text-field
      outlined
      dense
      label="E-mail"
      required
      autocomplete="off"
    ></v-text-field>

    <v-text-field
      outlined
      dense
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      label="password"
      required
    ></v-text-field>
    <v-text-field
      outlined
      dense
      label="confirm Password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      required
    ></v-text-field>
    <button x-large block class="button">SignUp</button>
    <SnackbarNotify ref="snack" />
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