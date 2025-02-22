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
        <div class="contact-grid ml-5 mr-3 mt-3 ">
          <v-card class="animate__animated animate__fadeInUp">
            <v-card-title class="text-h4 font-weight-regular">Hello!</v-card-title>
            <v-card-subtitle class="text-h6">How can we help?</v-card-subtitle>
            <v-card-text>
              <v-img class="rounded-lg" width="80%" src="@/assets/people/martha0.jpg"></v-img>
            </v-card-text>
          </v-card>
          <v-card  elevation="2" class="pa-5 animate__animated animate__slideInRight">
            <v-form v-model="valid"
                    method="post"
                    netlify
                    name="contact"
                    class="py-3 px-3"
            >
              <!-- eslint-disable -->
              <!-- Name -->
              <v-text-field
                prepend-inner-icon="mdi-account"
                v-model="firstname"
                :counter="10"
                :rules="nameRules"
                label="First name"
                required
                variant="filled"
              />
              <v-text-field
                prepend-inner-icon="mdi-account"
                v-model="lastname"
                :counter="10"
                :rules="nameRules"
                label="Last name"
                required
                variant="filled"
              />
              <v-text-field
                prepend-inner-icon="mdi-email"
                v-model="email"
                label="Email"
                required
                variant="filled"
                :rules="emailRules"
              />

              <v-textarea
                prepend-inner-icon="mdi-message"
                v-model="message"
                label="Message"
                required
                variant="filled"
              />
              <div class="text-end">
                <v-btn type="submit" size="large" density="comfortable" color="green-lighten-1">Contact Us</v-btn>
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
    grid-template-columns: .5fr 1fr;
    gap: 1rem;
  }
</style>
