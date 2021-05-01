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
              <v-row class="mt-10 book-route-links">
                <v-col class="mt-5">
                  <router-link :to="{ path: '/dashboard' }">Home </router-link>
                  /
                  <router-link :to="{ path: '/myCart' }">My Cart</router-link>
                </v-col>
              </v-row>
              <v-row>
                <v-flex row class="mt-2">
                  <v-card class="mx-auto mycart-card" outlined>
                    <!-- <v-card-title>{{
                      "My cart (" + allBooks.length + ")"
                    }}</v-card-title> -->

                    <v-card-title>{{
                      "My cart (" + this.cartItemQuantity + ")"
                    }}</v-card-title>

                    <v-flex
                      v-for="item in allBooks"
                      :key="item.title"
                      class="mt-2"
                    >
                      <v-layout class="mb-5">
                        <v-flex md2>
                          <v-img
                            class="cart-image ml-5 mt-2"
                            :src="item.image"
                          ></v-img>
                        </v-flex>
                        <v-flex md10>
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
                              v-model="item.counter"
                              class="counter-field"
                            ></v-text-field>
                            <v-icon
                              class="counter-plus"
                              @click="incrementCounter(item)"
                              >mdi-plus-circle-outline</v-icon
                            >
                            <v-btn @click="removeItemFromCart(item)">
                              Remove
                            </v-btn>
                          </v-row>
                          <v-row class="d-flex place-order">
                            <v-btn
                              class="place-order-btn mr-5"
                              @click="placeOrder(item)"
                              >Place order</v-btn
                            >
                          </v-row>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-card>
                </v-flex>
              </v-row>
            </v-flex>
            <v-flex md2>
              <v-row>
                <!-- <v-card> </v-card>
              <v-card class="address-form" outlined> -->
                <v-form ref="addressForm" v-show="true" class="address-form">
                  <AddressDetails ref="addressdetails" />
                </v-form>
                <!-- </v-card> -->
              </v-row>

              <v-row>
                <v-form class="address-form1">
                  <OrderSummary ref="orderSummary" @onCheckOut="checkOut" />
                  <BookDetail ref="addToBag" />
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
import BookDetail from "./BookDetail.vue";
import Snackbar from "../components/SnackBarNotify";

export default {
  name: "Mycart",

  data: () => ({
    counter_value: Number,
    orderList: [],
  }),

  allBooks: [],
  cartItemQuantity: Number,
  timeout: 3500,

  components: {
    AppBar,
    AddressDetails,
    OrderSummary,
    BookDetail,
    Snackbar,
  },

  methods: {
    incrementCounter(item) {
      item.counter = item.counter + 1;
    },

    decrementCounter(item) {
      item.counter = item.counter - 1;
      if (item.counter <= 0) item.counter = 1;
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
          console.log("Success", result.data.data);
          this.allBooks = result.data.data.filter(
            (book) => book.isAddedToBag == true
          );
          this.cartItemQuantity = this.allBooks.length;
          console.log("length ", this.allBooks.length);
          console.log("filtered books ", this.allBooks);
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
      console.log("remove from cart", item);
      //const child = this.$refs.snack;
      try {
        if (item.isAddedToBag == true)
          return user
            .removeFroCart(item._id)
            .then((result) => {
              result = result.data.data;
              console.log("updated bag", result);
              /* const snackbarData = {
                text: "Book added to cart",
                timeout: this.timeout,
              }; */
              //this.$refs.snack.setSnackbar(snackbarData);
              //this.$refs.books.displayAllBooks();
              //this.$refs.myCart.displayAllBooks();
              this.displayAllBooks();
            })
            .catch((error) => {
              const snackbarData = {
                text: error,
                timeout: this.timeout,
              };
              this.$refs.snack.setSnackbar(snackbarData);
            });
      } catch (error) {
        const snackbarData = {
          text: error,
          timeout: this.timeout,
        };
        this.$refs.snack.setSnackbar(snackbarData);
      }
    },

    checkOut(book) {
      if ((this.$refs.addressForm & { validate: () => {} }).validate()) {
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

  mounted() {
    // console.log("before mount");
    this.displayAllBooks();
  },
};
</script>

<style lang="scss" >
@import "../scss/myCart.scss";
</style>