<template>
  <v-app>
    <app-navigation />
    <v-main>
      <!--<HelloWorld />-->
      <home-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
  //
import AppNavigation from "@/components/AppNavigation.vue";
  import HomeView from "@/views/HomeView.vue";
  import AppFooter from "@/components/AppFooter.vue";
</script>
