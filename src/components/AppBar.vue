<template>
  <div>
    <v-card class="mx-auto overflow-hidden topBar">
      <v-row>
        <v-app-bar color="#A03037" class="main-bar" fixed elevation="1">
          <div class="book-icon">
            <v-img
              class="mx-2 book-icon"
              contain
              :src="require('../assets/images/education.svg')"
            ></v-img>
          </div>
          <v-card-title class="white--text headline"> BookStore </v-card-title>
          <div id="top-search-bar">
            <v-text-field
              label="Search"
              prepend-inner-icon="mdi-magnify"
              autocomplete="off"
              dense
              collaps
              solo
            ></v-text-field>
          </div>
          <ul>
            <div class="avatar">
              <v-icon class="white--text mr-8 account-icon"
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
              <v-img
                class="mx-2 supermarket-icon white--text headline"
                contain
                :src="require('../assets/images/supermarket.svg')"
              >
                {{ cartItemQuantity }}</v-img
              >
              <span id="bottom-name-cart">Cart</span>
            </ul>
          </router-link>
          <v-badge
            id="counter"
            color="#A03037"
            :content="this.cartItemCounter"
          ></v-badge>
        </v-app-bar>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    cartItemQuantity: "",
    cartItemCounter: 0,
  }),

  methods: {
    setAddedToCartItems(cartItemQuantity) {
      this.cartItemCounter = cartItemQuantity;
      console.log("cartItemCounter", this.cartItemCounter);
    },
  },

  mounted() {
    console.log("cartItemCounter in mount", this.setAddedToCartItems());
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/appBar.scss";
</style>
