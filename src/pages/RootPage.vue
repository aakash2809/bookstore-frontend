<template>
  <v-app>
    <v-content class="all-content">
      <div>
        <BaseAppBar />
      </div>

      <br />
      <div class="userOptions">
        <v-row><h3>Click to Proceecd</h3></v-row>
        <v-row class="options">
          <v-col>
            <v-btn class="admin ml-8" @click="goToAdminLoginOrRegistration()">
              Admin
            </v-btn>
          </v-col>
          <v-col>
            <v-btn class="user" @click="goToUserLoginOrRegistration()">
              User
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import BaseAppBar from "../components/BaseAppBar";
import router from "../router";

export default {
  components: {
    BaseAppBar,
  },

  methods: {
    goToUserLoginOrRegistration() {
      router.push({
        path: "/registrationOrLogin",
      });
    },
    goToAdminLoginOrRegistration() {
      router.push({
        path: "/admin",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/rootPage.scss";
</style>