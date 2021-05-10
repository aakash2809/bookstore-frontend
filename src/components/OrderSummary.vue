<template>
  <v-card class="mx-auto summary-card mt-10 mb-5" id="mySummary" outlined>
    <v-card-title>Order Summary</v-card-title>
    <v-card-text>
      <v-layout class="mb-5">
        <v-flex md2>
          <v-img class="cart-image ml-5 mt-2" :src="image"></v-img>
        </v-flex>
        <v-flex md10>
          <v-row class="ml-5 mt-1">
            <v-list-item>{{ title }}</v-list-item>
            <v-list-item>{{ author }}</v-list-item>
            <v-list-item>{{ "Rs." + price }}</v-list-item>
            <v-list-item>{{ "Quantity: " + bookCount }}</v-list-item>
          </v-row>
          <v-row class="d-flex place-order">
            <v-btn class="check-out-btn" @click="checkoutOrder">Checkout</v-btn>
          </v-row>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script >
export default {
  name: "OrderSummary",

  data: () => ({
    image: "",
    author: "",
    price: 0,
    title: "",
    showDetails: false,
    book: "",
    orderedBooks: "",
    bookCount: 0,
  }),

  components: {},

  methods: {
    setBook(book) {
      console.log("book detail", book);
      this.title = book.title;
      this.image = book.image;
      this.price = book.price;
      this.author = book.author;
      this.showDetails = !this.showDetails;
      this.bookCount = book.quantity;
      this.book = book;
    },

    checkoutOrder() {
      this.orderedBooks = this.book;
      this.$emit("onCheckOut", this.orderedBooks);
    },
  },

  beforeMount() {
    console.log("summry", this.$route.query);
    if (this.$route.query.orderedBooks != undefined)
      this.orderedBooks = this.$route.query.orderedBooks;
    else this.orderedBooks = [];
  },
};
</script>


<style lang="scss" scoped >
@import "../scss/orderSummary.scss";
</style>