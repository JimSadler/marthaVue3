<script setup>
import AppNavigation from "@/components/AppNavigation.vue";
import HomeView from "@/views/HomeView.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>
<template>
  <v-app>
    <app-navigation />
    <!--<transition name="slide">-->
    <!--  <div> element you are apply the transition to</div>-->
    <!--</transition>-->
    <router-view v-slot="{Component}">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>

    <AppFooter />
  </v-app>
</template>
<style lang="scss" >
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.quarter-header {
  width: 100%;
  height: 40vh;
  background-size: cover;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}
.three-quarter-page {
  width: 100%;
  //height: 60vh;
  padding: 1rem;
}
.two-to-one-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
}
</style>

