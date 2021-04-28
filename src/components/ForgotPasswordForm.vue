<template>
  <v-form ref="form" @submit.prevent="validate" lazy-validation>
    <br />
    <span
      >Enter your email address and we'll send you a link to reset your
      password</span
    >
    <br />
    <br />
    <v-text-field
      outlined
      dense
      label="E-mail"
      :rules="[emailRules.required, emailRules.email_validation]"
      autocomplete="off"
      v-model="form.email"
    ></v-text-field>

    <button x-large block class="button">Reset Password</button>
    <br />
    <br />
    <button x-large block class="button1" v-on:click="goToRegister()">
      CREATE ACCOUNT
    </button>
    <SnackbarNotify ref="snackbar" />
  </v-form>
</template>

<script>
import SnackbarNotify from "./SnackBarNotify";
import userServices from "../services/user";
import router from "../router";

export default {
  name: "ForgotPassword",
  data: () => ({
    form: {
      email: null,
    },
    emailRules: {
      required: (v) => !!v || "E-mail is required",
      email_validation: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
  }),
  components: {
    SnackbarNotify,
  },

  methods: {
    goToRegister() {
      router.push({
        path: "/registrationOrLogin",
      });
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.forgotPassword();
      }
    },

    clearForm(redirectKey) {
      this.$refs.form.reset();
      if (redirectKey) {
        router.push({});
      }
    },

    forgotPassword() {
      this.sending = true;
      let data = {
        email: this.form.email,
      };
      console.log("forgot details: ", data);
      userServices
        .forgotPassword(data)
        .then((res) => {
          console.log("response", res.data);
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
          this.clearForm(false);
          console.log(error);
        });
    },
  },
};
</script>

<style lang = "scss" scoped>
@import "../scss/forgotPasswordForm.scss";
</style>