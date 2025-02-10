<template>
  <v-app>
    <app-navigation />
    <router-view />

    <AppFooter />
  </v-app>
</template>

<script setup>
  //
import AppNavigation from "@/components/AppNavigation.vue";
  import HomeView from "@/views/HomeView.vue";
  import AppFooter from "@/components/AppFooter.vue";
</script>
