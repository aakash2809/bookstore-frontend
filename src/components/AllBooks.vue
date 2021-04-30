<template>
  <div class="book-size">
    <v-flex>
      <v-row>
        <v-title class="books-title mb-8"
          >Books ({{ this.booksQuantity }})</v-title
        >
        <v-layout row wrap class="book-layout">
          <v-flex
            v-for="item in paginated_Data"
            :key="item.title"
            md3
            xs2
            class="mb-5 mr--25 mt-2"
          >
            <router-link
              class="router-link"
              :to="{ path: '/bookDetail', query: { book: item } }"
            >
              <v-card class="mx-auto b-card" outlined>
                <v-row class="book-image">
                  <v-img class="mx-auto mt-4 mb-4" :src="item.image"></v-img>
                </v-row>
                <v-row class="book-content mt-5">
                  <v-list-item class="book-title">{{ item.title }}</v-list-item>

                  <v-list-item class="book-author">{{
                    item.author
                  }}</v-list-item>
                  <v-list-item
                    class="book-price mb-5"
                    style="text-decoration: none"
                    >{{ "Rs." + item.price }}</v-list-item
                  >
                </v-row>
              </v-card>
            </router-link>
          </v-flex>
        </v-layout>
      </v-row>

      <v-row align="center" justify="center">
        <a @click="prevPage"> Previous Page </a> <span> >> </span>
        <a @click="nextPage" class="mr-5"> Next Page</a> >>
      </v-row>
    </v-flex>
  </div>
</template>

<script >
import user from "../services/user";

export default {
  name: "Books",

  data: () => ({
    pageNumber: 1,
    pageSize: 10,
    current_page: 1,
    current: 1,
    size: 10,
    allBooks: [],
    booksQuantity: Number,
    page_Count: 0,
    paginated_Data: [],
  }),

  methods: {
    nextPage() {
      this.pageNumber++;
      this.current_page++;
      this.paginatedData();
    },

    prevPage() {
      console.log("this", this.pageNumber);
      this.pageNumber--;
      this.current_page--;
      this.paginatedData();
    },

    paginatedData() {
      console.log("PAGINATED CALLED");
      const start = this.pageNumber * this.size,
        end = start + this.size;
      this.paginated_Data = this.allBooks;
      console.log("PAGINATED DATA", this.paginated_Data);
      console.log("START", start, "  END", end);
    },

    pageCount() {
      let length = this.allBooks.length,
        size = this.size;
      this.page_Count = Math.ceil(length / size);
      this.paginatedData();
    },

    displayAllBooks() {
      user
        .fetchAllBooks()
        .then((result) => {
          console.log("Success", result.data.data);
          this.allBooks = result.data.data.filter(
            (book) => book.isAddedToBag == false
          );
          this.booksQuantity = this.allBooks.length;
          this.paginatedData();
        })
        .catch(() => {
          var snack = {
            text: "error , try again!",
            timeout: 3500,
          };
          this.$refs.snack.setSnackbar(snack);
        });
    },
  },
  beforeMount() {
    console.log("before mount");
    this.displayAllBooks();
  },
};
</script>

<style lang="scss">
@import "../scss/books.scss";
</style>