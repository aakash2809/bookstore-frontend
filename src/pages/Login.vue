<template>
  <v-form ref="form" @submit.prevent="validate" lazy-validation>
    <br />
    <br />
    <v-text-field
      outlined
      dense
      label="E-mail"
      :rules="[emailRules.required, emailRules.email_validation]"
      required
      autocomplete="off"
      v-model="form.email"
    ></v-text-field>
    <v-text-field
      outlined
      dense
      label="password"
      :rules="[passwordRules.required, passwordRules.minLength]"
      v-model="form.password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="() => (showPassword = !showPassword)"
      :type="showPassword ? 'text' : 'password'"
      required
    ></v-text-field>
    <span>
      <router-link
        to="/forgotPassword"
        class="route-link1"
        id="move-to-forgotPassword"
        >forgot password ?</router-link
      >
    </span>
    <br /><br />
    <button x-large block class="button">Login</button>
    <SnackbarNotify ref="snackbar" />
  </v-form>
</template>

<script>
import userServices from "../services/user";
import router from "../router";
import SnackbarNotify from "../components/SnackBarNotify";

export default {
  name: "Login",

  data: () => ({
    form: {
      email: null,
      password: null,
    },
    showPassword: false,
    sending: false,

    emailRules: {
      required: (v) => !!v || "E-mail is required",
      email_validation: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
    passwordRules: {
      required: (v) => !!v || "Name is required",
      minLength: (v) => (v && v.length > 7) || "password must be 8 characters",
    },
  }),
  components: {
    SnackbarNotify,
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.login();
      }
    },

    clearForm(redirectKey) {
      this.$refs.form.reset();
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
