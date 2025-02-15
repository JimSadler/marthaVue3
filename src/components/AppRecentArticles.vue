<script setup>

import {recentArticles} from "@/services/constants.js";
const props = defineProps({
  layout: String
});
</script>
<template>
  <div>
    <h2 class="font-weight-regular" :class="layout === 'landscape' ? 'text-center':'' ">Recent Articles</h2>
    <div :class="layout === 'landscape' ? 'd-flex justify-center flex-grow-0':'' ">
      <v-card class="my-5" :class="layout === 'landscape' ? 'd-inline mx-3':'mr-15' " elevation="2" v-for="(article, index) in recentArticles" :key="index">
        <v-img
          class="animate__animated animate__flipInX animate__delay-1s"
          :src="article.image"
          height="200"
          width="100%"
          cover
        ></v-img>
        <v-card-title class="">
          <h3 class="text-subtitle-1 font-weight-light">{{ article.title }}</h3>
        </v-card-title>
        <v-card-text class="grey-lighten-1 ">
          <p class="text-grey-darken-1 font-weight-light">Author: {{ article.params.author }} | Published on:
            {{ article.params.date }}</p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
