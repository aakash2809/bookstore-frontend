<template>
  <v-app class="full-layout">
    <v-content>
      <v-row>
        <AppBar ref="appbar" :cartItemQuantity="cartItemQuantity" />
      </v-row>
      <v-flex>
        <v-row>
          <v-layout row wrap class="mt-5">
            <v-flex xs24 md12>
              <v-row class="mt-15">
                <v-col class="mt-5 book-route-links">
                  <router-link
                    :to="{ path: '/dashboard' }"
                    style="text-decoration: none; color: inherit"
                    >Home
                  </router-link>
                  /
                  <router-link
                    :to="{ path: '/myCart' }"
                    style="text-decoration: none; color: inherit"
                    >My Cart</router-link
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-flex row class="mt-2">
                  <v-card class="mx-auto mycart-card" outlined>
                    <v-card-title>{{
                      "My cart (" + this.cartItemQuantity + ")"
                    }}</v-card-title>

                    <v-flex
                      v-for="item in allBooks"
                      :key="item._id"
                      class="mt-2"
                    >
                      <v-layout class="mb-5">
                        <v-flex md2>
                          <v-img
                            class="cart-image ml-5 mt-2"
                            :src="item.image"
                            @click="placeOrder(item)"
                          ></v-img>
                        </v-flex>
                        <v-flex md8>
                          <v-row class="ml-5 mt-1">
                            <v-list-item id="title">{{
                              item.title
                            }}</v-list-item>
                            <v-list-item id="author">{{
                              item.author
                            }}</v-list-item>
                            <v-list-item id="price">{{
                              "Rs." + item.price
                            }}</v-list-item>
                          </v-row>
                          <v-row class="counter">
                            <v-icon
                              class="counter-minus"
                              @click="decrementCounter(item)"
                              >mdi-minus-circle-outline</v-icon
                            >
                            <v-text-field
                              dense
                              outlined
                              v-model="item.quantity"
                              class="counter-field"
                            ></v-text-field>
                            <v-icon
                              class="counter-plus"
                              @click="incrementCounter(item)"
                              >mdi-plus-circle-outline</v-icon
                            >
                          </v-row>
                        </v-flex>
                        <v-flex class="remove-book-btn mr-5">
                          <br /><br /><br /><br />
                          <v-btn class="" @click="removeItemFromCart(item)">
                            Remove
                          </v-btn></v-flex
                        >
                      </v-layout>
                    </v-flex>
                  </v-card>
                </v-flex>
              </v-row>
            </v-flex>

            <v-flex md3>
              <br /><br />
              <v-row>
                <v-form ref="addressForm" v-show="true" class="address-form">
                  <AddressDetails ref="addressdetails" />
                </v-form>
              </v-row>
              <v-row>
                <v-form class="address-form1">
                  <OrderSummary ref="orderSummary" @onCheckOut="checkOut" />
                </v-form>
              </v-row>
            </v-flex>
          </v-layout>
          <Snackbar ref="snack" />
        </v-row>
      </v-flex>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar";
import user from "../services/user";
import AddressDetails from "../components/AddressDetails";
import OrderSummary from "../components/OrderSummary";
import Snackbar from "../components/SnackBarNotify";

export default {
  name: "Mycart",

  data: () => ({
    counter_value: 0,
    orderList: [],
    allBooks: [],
    cartItemQuantity: 0,
    timeout: 3500,
  }),

  components: {
    AppBar,
    AddressDetails,
    OrderSummary,
    Snackbar,
  },

  methods: {
    incrementCounter(item) {
      item.quantity = item.quantity + 1;
    },

    decrementCounter(item) {
      item.quantity = item.quantity - 1;
      if (item.quantity <= 0) item.quantity = 1;
    },

    placeOrder(item) {
      const orderSummary = this.$refs.orderSummary;
      orderSummary.setBook(item);
      const addressdetails = this.$refs.addressdetails;
      addressdetails.showDetails();
    },

    displayAllBooks() {
      user
        .fetchAllBooks()
        .then((result) => {
          this.allBooks = result.data.data.filter(
            (book) => book.isAddedToBag == true
          );
          this.cartItemQuantity = this.allBooks.length;
          this.$refs.appbar.setAddedToCartItems(this.cartItemQuantity);
        })
        .catch(() => {
          var snack = {
            text: "error , try again!",
            timeout: this.timeout,
          };
          this.$refs.snack.setSnackbar(snack);
        });
    },

    removeItemFromCart(item) {
      try {
        user.removeItemFromCart(item._id).then((result) => {
          const snackbarData = {
            text: `${result.data.message}`,
            timeout: this.timeout,
          };

          this.$refs.snack.setSnackbar(snackbarData);
          this.displayAllBooks();
        });
      } catch (error) {
        const snackbarData = {
          text: error,
          timeout: this.timeout,
        };
        this.$refs.snack.setSnackbar(snackbarData);
      }
    },

    checkOut(book, testData) {
      console.log("checkout called", testData);

      if (this.$refs.addressForm.validate()) {
        console.log("this.$refs.addressForm", this.$refs.addressForm);
        console.log("ordrelist", this.orderList);
        this.orderList.push(book);
        console.log("ordrelist1", this.orderList);
        this.$router.push({
          path: "/confirmOrder",
        });
      }
    },
  },

  beforeMount() {
    this.displayAllBooks();
  },
};
</script>

<style lang="scss" >
@import "../scss/myCart.scss";
</style>