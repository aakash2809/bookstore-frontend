<template>
  <div>
    <v-card class="mx-auto overflow-hidden topBar">
      <v-app-bar color="#A03037" class="main-bar" fixed>
        <div class="book-icon">
          <v-img
            class="book-icon"
            contain
            :src="require('../assets/images/education.svg')"
          ></v-img>
        </div>

        <!-- <v-card-title class="white--text row wrap"> BookStore </v-card-title> -->
        <v-toolbar-title class="row wrap white--text ml-5"
          >BookStore</v-toolbar-title
        >

        <div id="top-search-bar" v-on:keyup.enter="displayAllBooks">
          <v-text-field
            class="mt-5 appBar"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            autocomplete="off"
            dense
            collaps
            solo
            v-model="search"
          ></v-text-field>
        </div>
        <!--   <v-spacer></v-spacer> -->
        <ul>
          <div class="white--text avatar">
            <v-icon class="white--text account-icon"
              >mdi-account-outline</v-icon
            >
            <p id="bottom-name">Aakash</p>
          </div>
        </ul>
        <router-link
          :to="{ path: '/myCart' }"
          style="text-decoration: none; color: inherit"
        >
          {{ cartItemQuantity }}
          <ul>
            <div class="white--text avatar">
              <v-img
                class="mt-4 mx-2 supermarket-icon white--text headline"
                contain
                :src="require('../assets/images/supermarket.svg')"
              >
                {{ cartItemQuantity }}</v-img
              >
              <span id="bottom-name-cart">Cart</span>
            </div>
          </ul>
        </router-link>
        <v-badge
          id="counter"
          color="#A03037"
          :content="this.cartItemCounter"
        ></v-badge>
      </v-app-bar>
      <!-- </v-row> -->
      <Snackbar ref="snackbar" />
      <!-- <Books ref="book" /> -->
    </v-card>
  </div>
</template>

<script>
import user from "../services/user";
import router from "../router";
import Snackbar from "./SnackBarNotify";
// import Books from "../components/FilteredBooksForSearch";

export default {
  name: "AppBar",

  data: () => ({
    cartItemQuantity: "",
    cartItemCounter: 0,
    search: "",
    allBooks: [],
    filteredBooks: [],
    timeout: 3500,
  }),
  components: {
    Snackbar,
    // Books,
  },

  methods: {
    setAddedToCartItems(cartItemQuantity) {
      this.cartItemCounter = cartItemQuantity;
    },

    displayAllBooks() {
      console.log(this.search);
      user
        .fetchAllBooks()
        .then((result) => {
          this.allBooks = result.data.data.filter(
            (book) => book.isAddedToBag == false
          );
          this.filteredBooks = this.allBooks.filter(
            (book) => book.title == this.search
          );
          if (this.filteredBooks.length > 0) {
            console.log("Book tranform", this.filteredBooks);

            //this.$refs.book.allBooks = this.filteredBooks;
            // console.log("Book tranform1", this.refs.book.allBooks);
            //this.$refs.book.pageCount();
            this.$emit("BOOKS", this.filteredBooks);

            router.push({
              path: "/searchResult",
            });
          } else {
            const snackbarData = {
              text: `books not found with this title`,
              timeout: this.timeout,
            };
            this.$refs.snackbar.setSnackbar(snackbarData);
          }
        })
        .catch(() => {
          const snackbarData = {
            text: `got some error try again!`,
            timeout: this.timeout,
          };
          this.$refs.snackbar.setSnackbar(snackbarData);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/appBar.scss";
</style>
