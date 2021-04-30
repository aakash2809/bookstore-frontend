<template>
  <v-app class="full-layout">
    <v-row>
      <AppBar ref="appbar" />
    </v-row>
    <v-content class="display-layout">
      <v-col>
        <v-row class="book-route-links mb-2">
          <a @click="goToHome">Home</a> /
          <router-link :to="{ path: '/addToBag', query: { book: item } }"
            >Book</router-link
          >
        </v-row>
        <v-row>
          <v-layout row wrap class="mt-5">
            <v-flex xs12 sm6 md6>
              <v-row>
                <v-card class="mx-auto book-wishlist-card" outlined>
                  <v-img
                    class="mx-auto book-item-image mt-4"
                    :src="item.image"
                  ></v-img>
                </v-card>
              </v-row>
              <v-row class="d-flex">
                <v-btn
                  class="add-to-bag white--text mt-5"
                  @click="addToCart(item)"
                  :disabled="isAddedToCart"
                  >{{ addToBagText }}</v-btn
                >
                <v-btn
                  class="wish-list-btn white--text mt-5"
                  @click="addToWishlist"
                  :disabled="isWishlisted"
                  ><v-icon class="mr-2">mdi-heart</v-icon
                  >{{ wishlistText }}</v-btn
                >
              </v-row>
            </v-flex>
            <v-flex xs12 sm6 md6 class="book-description">
              <v-row class="book-details">
                <v-list-item class="add-bag-book-title">{{
                  item.title
                }}</v-list-item>
                <v-list-item class="add-bag-book-author">{{
                  item.author
                }}</v-list-item>
              </v-row>
              <v-row>
                <v-list-item class="add-bag-book-price">{{
                  "Rs. " + item.price
                }}</v-list-item>
              </v-row>
              <v-divider class="divider mt-5" />
              <v-row>
                <v-list-item class="add-bag-book-description mt-5"
                  >Book Detail</v-list-item
                >

                <v-list-item class="description">{{
                  item.description
                }}</v-list-item>
              </v-row>
              <v-divider class="divider mt-5" />
              <v-row class="cust-feedback mb-5">
                <v-list-item id="break" class="mt-5"
                  >Customer Feedback</v-list-item
                >
                <br />
                <v-card class="mx-auto feedback-card ml-3" outlined>
                  <h5 class="ml-5 mt-2 mb-2">Overall rating</h5>

                  <v-textarea
                    autocomplete="off"
                    placeholder="write Your review"
                    flat
                    solo
                    dense
                    auto-grow
                    rows="1"
                    row-height="10"
                    required
                  />
                </v-card>
              </v-row>
              <v-row>
                <v-col cols="12" md="8"></v-col>
                <v-col cols="12" md="4">
                  <v-btn class="feedback-submit-button mb-5">Submit</v-btn>
                </v-col>
              </v-row>

              <br />
            </v-flex>
            <!-- <MyCart ref="mycart" v-show="false" /> -->
          </v-layout>
        </v-row>
      </v-col>

      <Snackbar ref="snackbar" />
      <!--  <MyCart v-show="false" ref="myCart" /> -->
      <Books v-show="false" ref="books" />
    </v-content>
  </v-app>
</template>

<script >
import AppBar from "../components/AppBar";
import Books from "../components/AllBooks";
//import MyCart from "./myCart.vue";
import Snackbar from "../components/SnackBarNotify";
import user from "../services/user";

export default {
  name: "BookDetail",

  data: () => ({
    item: {},
    book: "",
    addedToCartItems: [],
    addedToWishlistItems: [],
    wishlistText: "WISHLST",
    addToBagText: "ADD TO BAG",
    isWishlisted: false,
    newItem: "",
    isAddedToCart: false,
  }),

  components: {
    AppBar,
    //MyCart,
    Snackbar,
    Books,
  },

  methods: {
    goToHome() {
      this.$router.push("/dashboard");
    },

    addToCart(item) {
      console.log("adding to cart", item._id);
      try {
        if (item.isAddedToBag == false)
          return user
            .addToBag(item._id)
            .then((result) => {
              let res = result.data;
              result = result.data.data;
              setTimeout(() => {
                this.isAddedToCart = true;
                this.addToBagText = "ADDED TO BAG";
              }, 1000);

              //this.$refs.books.displayAllBooks();
              console.log(`response ${res.message}`);
              console.log(`snackbar text ${this.$refs.snackbar._data.text}`);
              console.log(`snackbar show ${this.$refs.snackbar._data.show}`);
              this.$refs.snackbar._data.text = `${res.message}`;
              this.$refs.snackbar._data.show = true;
              //   this.$refs.myCart.displayAllBooks();
            })
            .catch(() => {
              this.$refs.snackbar._data.text = `internal server error`;
              this.$refs.snackbar._data.show = true;
            });
      } catch (error) {
        this.$refs.snackbar._data.text = `internal server error`;
        this.$refs.snackbar._data.show = true;
      }
    },

    addToWishlist() {
      try {
        if (this.isWishlisted == true) {
          this.wishlistText = "WISHLIST";
        } else {
          this.addedToWishlistItems.push(this.item);
          this.$refs.snackbar._data.text = `added to wishlist`;
          this.$refs.snackbar._data.show = true;

          setTimeout(() => {
            this.isWishlisted = true;
            this.wishlistText = "WISHLISTED";
          }, 800);
        }
      } catch (error) {
        this.$refs.snackbar._data.text = `error`;
        this.$refs.snackbar._data.show = true;
      }
    },
  },

  beforeMount() {
    this.item = this.$route.query.book;
  },
};
</script>

<style lang="scss" >
@import "../scss/bookDetail.scss";
</style>