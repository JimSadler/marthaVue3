<script setup>
import { ref } from "vue";
import AppRecentArticles from "@/components/AppRecentArticles.vue";
const valid = ref(false);
const firstname = ref('');
const lastname = ref('');
const email = ref('');
</script>
<template>
	<div>
    <section
      :class="`hero is-medium`"
    >
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
        <v-form v-model="valid"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="contact"
          action="thankYou"
        >
          <!-- eslint-disable -->
          <!-- Name -->
          <v-text-field
            prepend-icon="mdi-account"
            v-model="firstname"
            :counter="10"
            :rules="nameRules"
            label="First name"
            required
          />
          <v-text-field
            prepend-icon="mdi-account"
            v-model="lastname"
            :counter="10"
            :rules="nameRules"
            label="Last name"
            required
          />
          <v-text-field
          prepend-icon="mdi-email"
          v-model="email"
          label="Email"
          required
          :rules="emailRules"
          />

          <v-textarea
          prepend-icon="mdi-message"
          v-model="message"
          label="Message"
          required
          />
          <div class="text-end">
            <v-btn size="large" density="comfortable" color="green-lighten-1">Contact Us</v-btn>
          </div>

        </v-form>
      </div>
      <div>
        <app-recent-articles />
      </div>
    </div>
    </div>
	</div>
</template>

<style lang="scss" scoped>

</style>
