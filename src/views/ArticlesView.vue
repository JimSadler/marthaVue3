<script setup>

import {recentArticles, allArticles} from "@/services/articles.constants.js";
</script>
<template>
  <section
    :class="`hero is-large`"
  >
    <img

      alt
      class="hero-bg-img animate__animated animate__fadeIn animate__fast"
      src="@/assets/articles/lotus-4800281_1920.jpg"
    />
    <div class="hero-body">
      <div class="container text-right pr-15">
        <h1 class="title animate__animated animate__fadeInUp text-white font-weight-light">
          Articles
        </h1>
      </div>
    </div>
  </section>
  <v-container>
    <div class="d-flex justify-start flex-wrap">
      <div v-for="(article, index) in allArticles" :key="index">
        <router-link :to="`articles/${article.id}`" class="text-decoration-none">
        <v-card class="my-5 mx-3" elevation="2"
                style="width: 500px;">
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
          <v-card-text class="grey-lighten-1">
            <p class="text-grey-darken-1 font-weight-light">Author: {{ article.params.author }} | Published on:
              {{ article.params.date }}</p>
          </v-card-text>
        </v-card>
      </router-link></div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
     .articles-grid {
       justify-content: space-evenly;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
</style>
