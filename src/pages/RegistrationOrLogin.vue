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
import SignUp from "./Register";
import Login from "./Login";
export default {
  components: {
    SignUp,
    Login,
  },
};
</script>
<style scoped>
body {
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  font-family: Arial, Helvetica, sans-serif;
}

.v-card__title {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.0125em;
  line-height: 1rem;
  margin-left: -7px;
}
.display-card {
  top: 0px;
  left: 0px;
  height: 102%;
  background-color: #878787;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

.main-card {
  top: 100px;
  right: 260px;
  width: 389px;
  height: 475px;
}

.shopping-card {
  top: 167px;
  left: 170px;
  width: 400px;
  height: 415px;
}

.book-image1 {
  height: 220px;
  width: 180px;
  margin-top: 30px;
  margin-left: 40px;
  justify-self: center;
}
.button {
  background: brown 0% 0% no-repeat padding-box;
  width: 352px;
  height: 37px;
  left: 727px;
  color: white;
  font-size: 18px;
}
</style>