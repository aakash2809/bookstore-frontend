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
    <SnackbarNotify ref="snackbar" />
  </v-form>
</template>

<script>
import userServices from "../services/user";
import SnackbarNotify from "../components/SnackBarNotify";

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

  components: {
    SnackbarNotify,
  },

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
          console.log("resiponse", `${res.data.message}`);
          if (res.data.success) {
            this.$refs.snackbar._data.text = `${res.data.message}`;
            this.$refs.snackbar._data.show = true;
            this.clearForm(res.data.success);
          } else {
            this.$refs.snackbar._data.text = `${res.data.message}`;
            this.$refs.snackbar._data.show = true;
            this.clearForm(res.data.success);
          }
        })
        .catch((error) => {
          this.$refs.snackbar._data.text = `internal server error`;
          this.$refs.snackbar._data.show = true;
          console.log("resiponse", error);
          this.clearForm();
        });
    },
  },
};
</script>
<style scoped>
@import url("../scss/register.scss");
</style>