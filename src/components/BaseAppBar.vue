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
        </v-app-bar>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("../scss/appBar.scss");
</style>