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
.hero {
  height: 50vh;
  margin-top: 65px;
  background-size: cover !important;
  background-position: center;
  text-align: center;
  overflow: hidden;
  position: relative;
  &.is-medium {
    height: 40vh;
    background-color: #333C4D;
  }
  &.is-large {
    background-color: #333C4D;
    height: 60vh;
  }
  &.hero:after {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: rgba(0, 0, 0, 0.25);
    position: absolute;
  }

  .hero-bg-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .hero-body {
    margin-top: 8%;
    font-size: 2.2rem;
  }
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

