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
  import HomeView from "@/components/HomeView.vue";
</script>
