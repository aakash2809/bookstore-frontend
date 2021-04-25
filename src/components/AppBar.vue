<template>
  <div>
    <v-card class="mx-auto overflow-hidden topBar">
      <v-row>
        <v-app-bar color="#A03037" class="main-bar" fixed elevation="1">
          <div class="book-icon">
            <v-img class="mx-2 book-icon" contain></v-img>
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
          <div class="avatar">
            <v-icon class="white--text mr-8 account-icon"
              >mdi-account-outline</v-icon
            >
          </div>
          <v-img
            class="mx-2 supermarket-icon white--text headline"
            max-height="25"
            max-width="25"
            contain
          ></v-img>
          <div class="phone-viewport">
            <md-bottom-bar class="md-accent" md-sync-route>
              <md-bottom-bar-item
                to="/components/bottom-bar/posts/1"
                md-label="Post 1"
                md-icon="/assets/icon-whatshot.svg"
              ></md-bottom-bar-item>
            </md-bottom-bar>
          </div>
        </v-app-bar>
      </v-row>
    </v-card>
  </div>
</template>