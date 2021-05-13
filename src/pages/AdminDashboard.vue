
<template>
  <v-data-table :headers="headers" :items="books" sort-by="" class="a">
    <template v-slot:top>
      <v-toolbar flat color="#A03037">
        <v-toolbar-title> <h3>BookStore</h3> </v-toolbar-title>
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
              <span class="headline" justify="center">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-form ref="form">
                  <!--    <v-row>
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
                </v-row> -->

                  <v-row>
                    <v-text-field
                      v-model="editedItem.author"
                      label="Autor"
                      cols="12"
                      sm="6"
                      md="4"
                      class="b"
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
                    ><v-text-field
                      v-model="editedItem.image"
                      label="Image"
                      cols="12"
                      sm="6"
                      md="4"
                      :rules="[imageRules.required]"
                    ></v-text-field
                  ></v-row>
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
import user from "../services/user";
//import Snackbar from "../components/SnackBarNotify";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    Components: {},
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

<style lang ="scss" scoped>
h3 {
  font-size: 20px !important;
  color: white;
}

.headline {
  margin-left: 160px;
  /* justify-content: center; */
}
/* * {
  font-size: 15px !important;
} */
.v-data-table td {
  background-color: cornflowerblue;
}

/* .theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  color: #f5f5f5 !important;
} */

/* {
  font-size: 2px !important;
  font-weight: 600;
} */
/* .v-data-table td {
  border-bottom: none !important;
}


.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  color: white;
  font-size: 17px;
  background-color: rgb(52, 112, 224) !important;
} */
.v-data-table td {
  background-color: blue !important;
}
</style>