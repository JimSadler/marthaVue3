<script setup>
import { defineProps, computed } from 'vue';
 const props = defineProps({
  title: String,
  subtitle: String,
  theme: String,
  image: String,

});
 const setImage = computed(() => {
  return new URL(`${props.image}`, import.meta.url).href
 })
</script>
<template>
  <section
    :class="`hero is-medium`"
  >
    <img
      class="hero-bg-img"
      :src="setImage"
    />
    <div class="hero-body">
      <div class="container">
        <h1 class="title animate__animated animate__fadeInUp">
          {{ title }}
        </h1>
        <h2 class="subtitle animated fadeInUp slower">
          {{ subtitle }}
        </h2>
        <br />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  margin-top: 65px;
  background-size: cover !important;
  background-position: center;
  text-align: center;
  overflow: hidden;
  position: relative;
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
}
</style>
