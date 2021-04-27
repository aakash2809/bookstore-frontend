<template>
  <div>
    <v-flex>
      <v-row class="book-size">
        <v-layout row wrap class="book-layout">
          <v-flex
            v-for="item in allBooks"
            :key="item.title"
            md3
            xs2
            class="mb-5 mr--25 mt-2"
          >
            <v-card class="mx-auto b-card" outlined>
              <v-row class="book-image">
                <v-img class="mx-auto mt-4 mb-4" :src="item.image"></v-img>
              </v-row>
              <v-row class="book-content mt-5">
                <v-list-item class="book-title">{{ item.title }}</v-list-item>
                <v-list-item class="book-author">{{ item.author }}</v-list-item>
                <v-list-item class="book-price mb-5">{{
                  "Rs." + item.price
                }}</v-list-item>
              </v-row>
            </v-card>
          </v-flex>
        </v-layout>
      </v-row>
    </v-flex>
  </div>
</template>

<script >
import userServices from "../services/user";

export default {
  name: "Books",
  data: () => ({
    allBooks: [],
  }),
  components: {},

  methods: {
    getAllNotes() {
      userServices
        .fetchAllBooks()
        .then((result) => {
          console.log("response : ", result.data.data);
          this.allBooks = result.data.data;
          console.log("response books: ", this.allBooks);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAllNotes();
  },
};
</script>

<style lang="scss" scoped>
@import url("../scss/books.scss");
</style>