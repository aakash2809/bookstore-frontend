
<template>
  <v-data-table :headers="headers" :items="books" sort-by="" class="a">
    <template v-slot:top>
      <v-toolbar flat color="#A03037">
        <v-toolbar-title> <h3>BookStore</h3> </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="add_book_btn mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Add Book
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="headline" justify="center">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-form ref="form">
                  <v-row>
                    <v-text-field
                      v-model="editedItem.author"
                      label="Autor"
                      cols="12"
                      sm="6"
                      md="4"
                      class="author_name"
                      :rules="[authorRules.required]"
                    ></v-text-field
                  ></v-row>
                  <v-row
                    ><v-text-field
                      v-model="editedItem.title"
                      label="Title"
                      cols="12"
                      sm="6"
                      md="4"
                      class="book_title"
                      :rules="[titleRules.required]"
                    ></v-text-field
                  ></v-row>
                  <v-row>
                    <v-text-field
                      v-model="editedItem.quantity"
                      label="Quantity"
                      cols="12"
                      sm="6"
                      md="4"
                      class="book_quantity"
                      :rules="[quantityRules.required, quantityRules.regex]"
                    ></v-text-field
                  ></v-row>
                  <v-row>
                    <v-text-field
                      v-model="editedItem.price"
                      label="Price"
                      cols="12"
                      sm="6"
                      md="4"
                      class="book_price"
                      :rules="[priceRules.required, priceRules.regex]"
                    ></v-text-field
                  ></v-row>
                  <v-row>
                    <v-text-field
                      v-model="editedItem.description"
                      label="Description"
                      cols="12"
                      sm="6"
                      md="4"
                      :rules="[descriptionRules.required]"
                    ></v-text-field
                  ></v-row>
                  <v-row
                    ><!-- <v-text-field
                      v-model="editedItem.image"
                      label="Image"
                      cols="12"
                      sm="6"
                      md="4"
                      class="book_image"
                      :rules="[imageRules.required]"
                    ></v-text-field
                  > -->
                    <template>
                      <v-file-input
                        accept="image/*"
                        label="FileInput"
                        enctype="multipart/form-data"
                        class="book_image"
                        v-model="editedItem.image"
                      ></v-file-input>
                    </template>
                  </v-row>
                  <Snackbar ref="snack"> </Snackbar>
                </v-form>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="validate"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline1"
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
import user from "../services/user";
import Snackbar from "../components/SnackBarNotify";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    Components: { Snackbar },
    timeout: 3500,
    authorRules: {
      required: (v) => !!v || "Author is required",
    },
    titleRules: {
      required: (v) => !!v || "Title is required",
    },
    quantityRules: {
      required: (v) => !!v || "Quantity is required",
      regex: (v) => /^[0-9]/.test(v) || "Quantity must be a number",
    },
    priceRules: {
      required: (v) => !!v || "Price is required",
      regex: (v) => /^[0-9]/.test(v) || "Price must be a number",
    },
    descriptionRules: {
      required: (v) => !!v || "Description is required",
    },
    imageRules: {
      required: (v) => !!v || "Image is required",
    },

    headers: [
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
    validate() {
      console.log("validate called", this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        this.save();
      }
    },

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
      this.editedIndex = this.books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
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
      try {
        console.log("check for image data", this.editedItem.image);
        const data = {
          author: this.editedItem.author,
          title: this.editedItem.title,
          price: this.editedItem.price,
          quantity: this.editedItem.quantity,
          description: this.editedItem.description,
          image: this.editedItem.image,
        };
        user.addBook(data).then((result) => {
          const snackbarData = {
            text: `${result.data.message}`,
            timeout: this.timeout,
          };
          console.log("s", snackbarData);

          console.log("t", result.data);
          //this.$refs.snackbar.setSnackbar(snackbarData);
          if (this.editedIndex > -1) {
            Object.assign(this.books[this.editedIndex], this.editedItem);
          } else {
            this.books.push(this.editedItem);
          }
          this.close();
        });
      } catch (error) {
        const snackbarData = {
          text: error,
          timeout: this.timeout,
        };
        this.$refs.snack.setSnackbar(snackbarData);
      }
    },
  },
};
</script>

<style lang ="scss" scoped>
@import "../scss/adminDashboard.scss";
</style>