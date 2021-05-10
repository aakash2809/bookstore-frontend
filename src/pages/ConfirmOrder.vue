<template>
  <v-app class="full-layout1">
    <v-content>
      <v-row>
        <AppBar ref="appBar" />
      </v-row>
      <v-row>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap class="mt-9">
            <v-col class="content">
              <v-row
                class="mt-10 ml-10 confirmation-image"
                align="center"
                justify="center"
              >
                <v-img
                  class="orderConfirmImage mt-10"
                  :src="require('../assets/images/order-confirm.png')"
                ></v-img>
              </v-row>
              <v-row
                row
                wrap
                class="mt-2 ml-10"
                align="center"
                justify="center"
              >
                <h3 class="confirmation-msg">Order Placed Successfully</h3>
              </v-row>
              <v-row
                row
                wrap
                class="desc-confirmation-msg mt-5 ml-12"
                align="center"
                justify="center"
              >
                <pre class="desc-confirmation-msg">
         hurray!!your order is confirmed
     the order id is #094523 save the order id for
            further communication..</pre
                >
              </v-row>
              <v-row class="mt-15 ml-10" align="center" justify="center">
                <table>
                  <tbody>
                    <tr>
                      <th>Email us</th>
                      <th>Contact us</th>
                      <th>Address</th>
                    </tr>

                    <tr>
                      <td>admin@bookstore.com</td>
                      <td>+91 2222222222</td>
                      <td>new layout, Pune</td>
                    </tr>
                  </tbody>
                </table>
              </v-row>
              <v-row class="mt-15 ml-10" align="center" justify="center">
                <v-btn class="continue-shopping" @click="goToHome"
                  >Continue Shopping</v-btn
                >
              </v-row>
            </v-col>
          </v-layout>
        </v-container>
      </v-row>
    </v-content>
  </v-app>
</template>
            
<script>
import AppBar from "../components/AppBar";

export default {
  name: "ConfirmOrder",

  data: () => ({
    orderList: "",
    wishlist: "",
    items: "",
  }),

  components: {
    AppBar,
  },

  methods: {
    goToHome() {
      this.$router.push({
        path: "/dashboard",
        query: {
          books: this.items,
          wishlistBooks: this.wishlist,
          orderedBooks: this.orderList,
        },
      });
    },
  },

  mounted() {},
};
</script>

<style lang="scss">
@import "../scss/confirmOrder.scss";
</style>