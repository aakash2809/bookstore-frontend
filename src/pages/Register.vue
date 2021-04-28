<template>
  <v-form @submit.prevent="validate">
    <br />
    <v-text-field
      outlined
      dense
      id="first-name"
      v-model="form.firstName"
      label="firstName"
      autocomplete="off"
      :rules="[nameRules.required, nameRules.name_length]"
    ></v-text-field>
    <v-text-field
      outlined
      dense
      id="last-name"
      v-model="form.lastName"
      label="lastName"
      required
      autocomplete="off"
      :rules="[nameRules.required, nameRules.name_length]"
    ></v-text-field>
    <v-text-field
      outlined
      dense
      label="E-mail"
      id="email"
      v-model="form.email"
      autocomplete="off"
      :rules="[emailRules.required, emailRules.email_validation]"
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
      :rules="[passwordRules.required, passwordRules.minLength]"
    ></v-text-field>
    <v-text-field
      outlined
      dense
      label="confirm Password"
      :append-icon="showCPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="() => (showCPassword = !showCPassword)"
      :type="showCPassword ? 'text' : 'password'"
      id="cpassword"
      v-model="form.cpassword"
      :rules="[passwordRules.required, passwordRules.minLength]"
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

    nameRules: {
      required: (v) => !!v || "field is required",
      name_length: (v) =>
        (v && v.length <= 10) || "field must be less than 10 characters",
    },

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
        this.saveUser();
      }
    },

    clearForm() {
      this.$refs.form.reset();
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

      userServices
        .registerUser(data)
        .then((res) => {
          if (res.data.success) {
            this.$refs.snackbar._data.text = `${res.data.message}`;
            this.$refs.snackbar._data.show = true;
            this.clearForm();
          } else {
            this.$refs.snackbar._data.text = `${res.data.message}`;
            this.$refs.snackbar._data.show = true;
            this.clearForm();
          }
        })
        .catch(() => {
          this.$refs.snackbar._data.text = `internal server error`;
          this.$refs.snackbar._data.show = true;
          this.clearForm();
        });
    },
  },
};
</script>
<style lang = "scss" scoped>
@import "../scss/register.scss";
</style>