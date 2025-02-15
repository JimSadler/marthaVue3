<script setup>
import AppBook from "@/components/AppBook.vue";
import {books} from '@/services/constants.js'
</script>
<template>
  <section
    :class="`hero is-medium`"
  >
    <img

      alt
      class="hero-bg-img animate__animated animate__fadeIn animate__fast"
      src="@/assets/books/open-book-with-pages-flying-away.jpg"
    />
    <div class="hero-body">
      <div class="container text-right pr-15">
        <h1 class="title animate__animated animate__fadeInUp text-white font-weight-light">
          Books
        </h1>
      </div>
    </div>

  </section>
  <div class="books-container">
    <app-book :book="books.blood_mountain"/>
    <app-book :book="books.the_life_you_want"/>
    <app-book :book="books.teacup_prophecies"/>
  </div>
  <div class="recent-articles">
    <app-recent-articles layout="landscape"/>
  </div></template>

<style lang="scss" scoped>

</style>
