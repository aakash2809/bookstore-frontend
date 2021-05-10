<template>
  <v-app>
    <v-main>
      <div class="display-card">
        <v-flex>
          <v-row>
            <v-card class="mx-auto rounded-lg shopping-card">
              <v-row class="book-image1">
                <v-img
                  class="mt-4 mb-4 rounded-circle"
                  :src="require('../assets/images/shopping-trolly.png')"
                ></v-img>
                <br />
                <v-card-title class="text"> ONLINE BOOK SHOPPING </v-card-title>
              </v-row>
            </v-card>
            <v-card class="main-card mx-auto mt-9 pl-5 pr-5">
              <v-tabs centered>
                <v-tab>Login</v-tab>
                <v-tab-item key="login">
                  <Login />
                </v-tab-item>
                <v-tab>Sign up</v-tab>
                <v-tab-item key="signUp">
                  <SignUp />
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-row>
        </v-flex>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import SignUp from "../components/AdminRegister";
import Login from "../components/AadminLogin";

export default {
  components: {
    SignUp,
    Login,
  },
};
</script>

<style lang ="scss" scoped>
@import "../scss/registerOrLogin.scss";
</style>