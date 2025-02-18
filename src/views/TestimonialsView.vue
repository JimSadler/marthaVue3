<script setup>
 import {testimonials} from '@/services/constants.js'
 import AppRecentArticles from "@/components/AppRecentArticles.vue";

 function notLast (index) {

 return   index !== testimonials.length - 1

 }
</script>
<template>
	<div>
    <section
      :class="`hero is-medium`"
    >
      <img
        alt
        class="hero-bg-img"
        src="@/assets/testimonials/cap-de-formentor-4788731_1920.jpg"
      />
      <div class="hero-body">
        <div class="container">
          <h1 class="title animate__animated animate__fadeInUp text-white font-weight-light">
            Testimonials
          </h1>
        </div>
      </div>
    </section>
    <div class="three-quarter-page py-5">
      <div class="two-to-one-grid px-15">
        <div class="border-b-sm">
          <v-card v-for="(testimonial, t ) in testimonials" :key="t" class="my-3" elevation="0">
            <v-card-title class="text-h6 font-weight-regular">{{testimonial.name}}</v-card-title>
            <v-card-text>
              <p class="my-3 font-weight-light">{{testimonial.text}}</p>
            </v-card-text>
            <v-divider v-if="notLast(t)"></v-divider>
          </v-card>
        </div>
        <div class="border-s-sm pl-10">
          <app-recent-articles />
        </div>
      </div>
    </div>
	</div>
</template>

<style lang="scss" scoped>

</style>
