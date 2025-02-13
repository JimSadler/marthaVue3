<script setup>

import {recentArticles} from "@/services/constants.js";
</script>
<template>
  <h2 class="font-weight-regular">Recent Articles</h2>
  <div>
    <v-card class="mb-5 w-50 mt-5" elevation="0" v-for="(article, index) in recentArticles" :key="index">
      <v-img
        class="animate__animated animate__flipInX animate__delay-1s"
        :src="article.image"
        height="150px"
        width="300px"
        cover
      ></v-img>
      <v-card-title class="">
        <h3 class="text-subtitle-1 font-weight-light">{{ article.title }}</h3>
      </v-card-title>
      <v-card-text class="grey-lighten-1 ">
        <p class="text-grey-darken-1 font-weight-light">Author: {{ article.params.author }} | Published on: {{ article.params.date }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>

</style>
