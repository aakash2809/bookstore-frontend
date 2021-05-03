<template>
  <v-card class="mx-auto address-card mt-5" v-show="this.isShow" outlined>
    <v-card-title> Address Details </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Full Name"
            v-model="fullName"
            dense
            outlined
            class="ml-10"
            :rules="[validationRule.required]"
          ></v-text-field
        ></v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Mobile Number"
            v-model="mobileNumber"
            dense
            outlined
            class=""
            :rules="[validationRule.required]"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="ml-4">1.WORK</v-row>
      <v-row class="mt-5">
        <v-textarea
          label="Address"
          v-model="address"
          dense
          outlined
          rows="2"
          row-height="20"
          class="mr-5 ml-10"
          :rules="[validationRule.required]"
        ></v-textarea>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="city/town"
            v-model="city"
            dense
            outlined
            class="ml-7"
            :rules="[validationRule.required]"
          ></v-text-field
        ></v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="state"
            v-model="state"
            dense
            outlined
            class="mr-5 mob-state-field"
            :rules="[validationRule.required]"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "Books",

  data: () => ({
    fullName: "Aakash",
    mobileNumber: "8819792656",
    address: "vallabh Nagar ward",
    city: "sagar",
    state: "M.p.",
    isShow: false,

    validationRule: {
      required: (v) => !!v || "This field is required",
    },
  }),
  components: {},

  methods: {
    showDetails() {
      this.isShow = true;
    },
  },
};
</script>

<style lang="scss" scoped >
@import "../scss/addressDetail.scss";
</style>