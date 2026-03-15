<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('route', route.query);
// No complex logic needed for a static thanks page!
// Get the names from the URL, fallback to 'friend' if missing
const firstName = route.query.firstname || 'friend';
const lastName = route.query.lastname || '';
</script>
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12" md="4" sm="8">
        <v-icon class="mb-4" color="cyan-darken-3" icon="mdi-check-circle-outline" size="100"></v-icon>

        <h1 class="text-h4 font-weight-bold mb-2">Message Sent!</h1>
        <p class="text-body-1 text-medium-emphasis mb-6">
          Thanks for reaching out, <strong>{{ firstName }} {{ lastName }}</strong
          >. We've received your inquiry and will get back to you shortly.
        </p>

        <v-btn color="cyan-darken-3" prepend-icon="mdi-arrow-left" size="large" to="/" variant="elevated">
          Back to Home
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
