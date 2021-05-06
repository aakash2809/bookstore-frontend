<template>
  <div class="book-size">
    <v-flex>
      <v-row
        ><v-title class="books-title"
          >Books ({{ booksQuantity }})</v-title
        ></v-row
      >
      <v-row>
        <v-layout row wrap class="book-layout">
          <v-flex
            v-for="item in allBooks"
            :key="item.title"
            md3
            xs3
            class="mb-5 mr--25 mt-8"
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
        <a @click="prevPage"> Previous Page </a>
        <a @click="nextPage" class="ml-5 mr-5"> Next Page</a>
        {{ current_page }}/{{ page_Count }}
      </v-row>
    </v-flex>
  </div>
</template>
 
<script >
//import user from "../services/user";
//import EventBus from "../eventBus";

export default {
  name: "Books",

  data: () => ({
    pageNumber: 1,
    pageSize: 6,
    current_page: 1,
    current: 1,
    size: 6,
    allBooks: [],
    booksQuantity: 0,
    page_Count: 1,
    paginated_Data: [],
  }),

  methods: {
    nextPage() {
      this.pageNumber++;
      this.current_page++;
      this.paginatedData();
    },

    prevPage() {
      this.pageNumber--;
      this.current_page--;
      this.paginatedData();
    },

    paginatedData() {
      //this.paginated_Data = this.allBooks;
      const start = this.pageNumber * this.size,
        end = start + this.size;
      this.paginated_Data = this.allBooks.slice(start, end);
      console.log("PAGINATED CALLED", this.paginated_Data);
    },

    pageCount() {
      this.paginated_Data = this.allBooks;
      console.log("PAGINATED CALLED", this.paginated_Data);
      this.booksQuantity = this.allBooks.length;
      console.log("page count", this.allBooks);

      let length = this.allBooks.length,
        size = this.size;
      this.page_Count = Math.ceil(length / size);

      this.paginatedData();
    },
  },

  computed() {
    this.pageCount();
  },
};
</script>

<style lang="scss">
//@import "../scss/books.scss";
</style>