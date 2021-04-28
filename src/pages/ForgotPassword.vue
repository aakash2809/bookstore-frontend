<template>
  <v-app>
    <v-main>
      <div class="display-card">
        <v-flex>
          <v-row>
            <BaseAppBar ref="baseAppbar" />
          </v-row>

          <v-row>
            <h1>Forgot Your Password ?</h1>
            <v-card class="main-card mx-auto mt-9 pl-5 pr-5">
              <ForgotPasswordForm ref="forgotPassword" />
            </v-card>
          </v-row>
        </v-flex>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import BaseAppBar from "../components/BaseAppBar";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
export default {
  name: "ForgotPassword",
  components: {
    BaseAppBar,
    ForgotPasswordForm,
  },
};
</script>

<style lang= "scss" scoped>
@import "../scss/forgotPassword.scss";
</style>