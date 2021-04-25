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
      required
    ></v-text-field>
    <br />
    <button x-large block class="button">Login</button>
  </v-form>
</template>
<script>
import userServices from "../services/user";
import router from "../router";
export default {
  data: () => ({
    form: {
      email: null,
      password: null,
    },
    sending: false,
  }),

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
            console.log("if response: ");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("firstName", res.data.user[0].name);
            localStorage.setItem("lastName", res.data.user[0].lastName);
            localStorage.setItem("email", res.data.user[0].email);

            this.clearForm(res.data.success);
          } else {
            this.clearForm(res.data.success);
          }
        })
        .catch((error) => {
          this.clearForm(false);
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
