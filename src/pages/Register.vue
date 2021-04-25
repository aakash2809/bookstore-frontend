<template>
  <v-form @submit.prevent="saveUser">
    <br />
    <v-text-field
      outlined
      dense
      id="first-name"
      v-model="form.firstName"
      label="firstName"
      required
      autocomplete="off"
    ></v-text-field>
    <v-text-field
      outlined
      dense
      id="last-name"
      v-model="form.lastName"
      label="lastName"
      required
      autocomplete="off"
    ></v-text-field>
    <v-text-field
      outlined
      dense
      label="E-mail"
      required
      id="email"
      v-model="form.email"
      autocomplete="off"
    ></v-text-field>

    <v-text-field
      outlined
      dense
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="() => (showPassword = !showPassword)"
      :type="showPassword ? 'text' : 'password'"
      id="password"
      v-model="form.password"
      label="password"
      required
    ></v-text-field>
    <v-text-field
      outlined
      dense
      label="confirm Password"
      :append-icon="showCPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="() => (showCPassword = !showCPassword)"
      :type="showCPassword ? 'text' : 'password'"
      required
      id="cpassword"
      v-model="form.cpassword"
    ></v-text-field>
    <button x-large block class="button">SignUp</button>
  </v-form>
</template>

<script>
import userServices from "../services/user";

export default {
  data: () => ({
    form: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      cpassword: null,
    },
    showPassword: false,
    showCPassword: false,
    sending: false,
  }),

  methods: {
    clearForm() {
      this.$v.$reset();
      this.form.firstName = null;
      this.form.lastName = null;
      this.form.email = null;
      this.form.password = null;
      this.form.cpassword = null;
    },

    saveUser() {
      this.sending = true;
      let data = {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        password: this.form.password,
        confirmPassword: this.form.cpassword,
      };

      console.log("signup details: ", data);

      userServices
        .registerUser(data)
        .then((res) => {
          console.log("resiponse", res);
          this.clearForm();
        })
        .catch((error) => {
          console.log("resiponse", error);
          this.clearForm();
          console.log(error);
        });
    },
  },
};
</script>
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