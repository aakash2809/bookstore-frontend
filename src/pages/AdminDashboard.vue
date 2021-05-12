
<template>
  <v-data-table
    :headers="headers"
    :items="books"
    sort-by="calories"
    class="elevation-1"
  >
    <!--  <BaseAppBar></BaseAppBar> -->
    <template v-slot:top>
      <v-toolbar flat color="#A03037">
        <v-toolbar-title>BookStore</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Add Book
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.author"
                      label="autor"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.title"
                      label="title"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.quantity"
                      label="quantity"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.price"
                      label="price"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.description"
                      label="description"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.image"
                      label="image"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
//import BaseAppBar from "../components/BaseAppBar";
import user from "../services/user";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    Components: {},
    headers: [
      {
        text: "BookId",
        align: "start",
        sortable: false,
        value: "_id",
      },
      { text: "Autor", value: "author" },
      { text: "Title", value: "title" },
      { text: "Quantity", value: "quantity" },
      { text: "Price", value: "price" },
      { text: "Description", value: "description" },
      { text: "Image", value: "image" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    books: [],
    editedIndex: -1,
    editedItem: {
      author: "",
      title: "",
      quantity: null,
      price: null,
      description: "",
      image: "",
    },
    defaultItem: {
      author: "",
      title: "",
      quantity: null,
      price: null,
      description: "",
      image: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Book" : "Edit Book Detail";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      user
        .fetchAllBooks()
        .then((result) => {
          console.log("Success", result.data.data);
          this.books = result.data.data;
        })
        .catch(() => {
          var snack = {
            text: "error , try again!",
            timeout: 3500,
          };
          this.$refs.snack.setSnackbar(snack);
        });
    },

    editItem(item) {
      this.editedIndex = this.books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      console.log("data to be deleted", item);
      this.editedIndex = this.books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      console.log("data to deleted", this.books[this.editedIndex]._id);
    },

    deleteItemConfirm() {
      user
        .deleteBook(this.books[this.editedIndex]._id)
        .then((response) => {
          console.log("delete", response);
          this.books.splice(this.editedIndex, 1);
          this.closeDelete();
        })
        .catch(() => {
          console.log("got error");
        });
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      user
        .addBook(this.editedItem)
        .then((response) => {
          console.log("data save", response);
          if (this.editedIndex > -1) {
            Object.assign(this.books[this.editedIndex], this.editedItem);
          } else {
            this.books.push(this.editedItem);
          }
          this.close();
        })
        .catch(() => {
          console.log("got error");
        });
    },
  },
};
</script>