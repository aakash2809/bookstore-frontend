<template>
  <v-form @submit.prevent="login">
    <br />
    <br />
    <v-text-field
      outlined
      dense
      label="E-mail"
      required
      autocomplete="off"
      v-model="form.email"
    ></v-text-field>
    <v-text-field
      outlined
      dense
      label="password"
      v-model="form.password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="() => (showPassword = !showPassword)"
      :type="showPassword ? 'text' : 'password'"
      required
    ></v-text-field>
    <br />
    <button x-large block class="button">Login</button>
    <SnackbarNotify ref="snackbar" />
  </v-form>
</template>
<script>
import userServices from "../services/user";
import router from "../router";
import SnackbarNotify from "../components/SnackBarNotify";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "Login",
  mixins: [validationMixin],
  data: () => ({
    form: {
      email: null,
      password: null,
    },
    showPassword: false,
    sending: false,
  }),
  components: {
    SnackbarNotify,
  },

  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },

  methods: {
    clearForm(redirectKey) {
      this.form.email = null;
      this.form.password = null;
      if (redirectKey) {
        router.push({
          path: "/dashBoard",
        });
      }
    },

    login() {
      this.sending = true;
      let data = {
        email: this.form.email,
        password: this.form.password,
      };
      console.log("Login details: ", data);
      userServices
        .loginUser(data)
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("firstName", res.data.user[0].firstName);
            localStorage.setItem("lastName", res.data.user[0].lastName);
            localStorage.setItem("email", res.data.user[0].email);
            this.$refs.snackbar._data.text = `${res.data.message}`;
            this.$refs.snackbar._data.show = true;
            console.log(`response ${res.data.message}`);
            console.log("snack bar  ", this.$refs.snackbar._data.text);

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
          this.clearForm(false);
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
@import url("../scss/registerOrLogin.scss");
</style>
