<script setup>
import { ref } from 'vue';
import AppRecentArticles from '@/components/AppRecentArticles.vue';
import { useRouter } from 'vue-router'; // 1. Import the router
const router = useRouter(); // 2. Initialize router

const valid = ref(false);
const firstname = ref('');
const lastname = ref('');
const email = ref('');
const message = ref('');

const nameRules = [
  value => {
    if (value?.length > 0) return true;
    return 'Name is required.';
  },
  value => {
    if (value?.length <= 10) return true;
    return 'Name must be less than 10 characters.';
  },
];

const emailRules = [
  value => {
    if (value?.length > 0) return true;
    return 'E-mail is required.';
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true;
    return 'E-mail must be valid.';
  },
];

const messageRules = [
  value => {
    if (value?.length > 0) return true;
    return 'Please enter a message.';
  },
];
const handleSubmit = async () => {
  // If you're using Vuetify's validation, you'd check 'valid' here

  const body = new URLSearchParams({
    'form-name': 'contact',
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    message: message.value,
  }).toString();

  try {
    // This sends the data to Netlify in the background
    await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body,
    });

    // Once sent, navigate to your Thank You page
    await router.push({
      path: '/thanks',
      query: {
        firstname: firstname.value,
        lastname: lastname.value,
      },
    });
  } catch (error) {
    console.error('Form submission error:', error);
    alert('There was an issue sending your message.');
  }
};
</script>
<template>
  <div>
    <section :class="`hero is-medium`">
      <img
        alt
        class="hero-bg-img animate__animated animate__fadeIn animate__fast"
        src="@/assets/contact/wood-3046186_1920.jpg"
      />
      <div class="hero-body">
        <div class="container text-right pr-15">
          <h1 class="title animate__animated animate__fadeInUp text-white font-weight-light">
            Contact
          </h1>
        </div>
      </div>
    </section>
    <div class="three-quarter-page">
      <div class="two-to-one-grid px-15">
        <div>
          <h2 class="text-center mb-5 font-weight-light text-h4 text-grey-darken-3">Contact Us</h2>
          <div class="contact-grid ml-5 mr-3 mt-3 ">
            <v-card class="animate__animated animate__fadeInUp">
              <v-card-title class="text-h4 font-weight-regular">Hello!</v-card-title>
              <v-card-subtitle class="text-h6">How can we help?</v-card-subtitle>
              <v-card-text>
                <v-img class="rounded-lg" src="@/assets/people/martha0.jpg" width="80%"></v-img>
              </v-card-text>
            </v-card>
            <v-card class="pa-5 animate__animated animate__slideInRight" elevation="2">
              <v-form
                action="/thanks"
                class="py-3 px-3"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                method="POST"
                name="contact"
                netlify
                @submit.prevent="handleSubmit"
              >
                <!-- eslint-disable -->
                <input name="form-name" type="hidden" value="contact" />
                <!-- Name -->
                <v-text-field
                  v-model="firstname"
                  :counter="10"
                  :rules="nameRules"
                  label="First name"
                  name="firstname"
                  prepend-inner-icon="mdi-account"
                  required
                  variant="filled"
                />
                <v-text-field
                  v-model="lastname"
                  :counter="10"
                  :rules="nameRules"
                  label="Last name"
                  name="lastname"
                  prepend-inner-icon="mdi-account"
                  required
                  variant="filled"
                />
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  name="email"
                  prepend-inner-icon="mdi-email"
                  required
                  variant="filled"
                />

                <v-textarea
                  v-model="message"
                  :rules="messageRules"
                  label="Message"
                  name="message"
                  prepend-inner-icon="mdi-message"
                  required
                  variant="filled"
                />
                <div class="text-end">
                  <v-btn color="green-lighten-1" density="comfortable" size="large" type="submit">Contact Us</v-btn>
                </div>
              </v-form>
            </v-card>
          </div>
        </div>
        <div class="border-s-sm pl-10">
          <app-recent-articles />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 1rem;
}
</style>
