<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  document.title = '404 - Page Not Found';
});
</script>

<template>
  <div class="not-found-wrapper">
    <div class="content">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <router-link class="home-button" to="/">
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found-wrapper {
  /* This calculates the height: 100vh minus the header and footer height */
  /* If you don't know the exact heights, min-height: 70vh is a safe bet */
  min-height: 75vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
}

h1 {
  font-size: clamp(4rem, 10vw, 8rem);
  margin: 0;
  color: #42b983;
}

h2 {
  font-size: 1.8rem;
  color: #35495e;
  margin-bottom: 1rem;
}

p {
  color: #666;
  max-width: 450px;
  margin-bottom: 2rem;
}

.home-button {
  padding: 12px 24px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
}
</style>
