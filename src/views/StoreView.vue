<script setup>
import {storeVideoData} from '@/services/store.constants.js';

function extraBottomMargin (item) {
  if (item.id === 'intimacy' || item.id === 'true-freedom') {
    return 'mb-5'
  }

}
</script>
<template>
	<div>
    <section
      :class="`hero is-medium`"
    >
      <img

        alt
        class="hero-bg-img animate__animated animate__fadeIn animate__fast"
        src="@/assets/store/frog-540812_1920.jpg"
      />
      <div class="hero-body">
        <div class="container text-right pr-15">
          <h1 class="title animate__animated animate__fadeInUp text-white font-weight-light">
            Store
          </h1>
        </div>
      </div>

    </section>
    <div>
      <div class="my-3 border-b-sm">
        <h2 class="text-center font-weight-light">Video Downloads</h2>
        <div class="d-flex justify-center">
          <v-card
            v-for="(video, index) in storeVideoData"
            :disabled="loading"
            :loading="loading"
            class="my-12 mx-3"
            width="300"
          >
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="250"
              :src="video.image"
              cover
            ></v-img>

            <v-card-item>
              <v-card-title class="d-flex justify-space-between" >
                {{ video.title }}
                <span class="text-teal">${{video.price}}</span>
              </v-card-title>
              <v-tooltip width="15%" location="top" :text="video.description" :aria-label="video.description">
                <template v-slot:activator="{ props }">
                  <v-card-text v-bind="props" class="text-overflow-ellipsis px-1 py-0" :class="extraBottomMargin(video)">
                    <span class="">{{ video.description }}</span>
                  </v-card-text>
                </template>
              </v-tooltip>

            </v-card-item>
            <v-card-actions>
              <v-btn
                :class="video.id === 'intimacy'"
                color="deep-purple-lighten-2"
                text="Purchase"
                block
                border
                @click="reserve"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
      <div class="mt-3 border-b-sm">
        <h2 class="text-center font-weight-light">Audio Downloads</h2>
        <v-card
          :disabled="loading"
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
        >
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <div class="zoom-img">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              cover
            ></v-img>
          </div>

          <v-card-item>
            <v-card-title>Cafe Badilico</v-card-title>

            <v-card-subtitle>
              <span class="me-1">Local Favorite</span>

            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
            </v-row>


          </v-card-text>
          <v-card-actions>
            <v-btn
              color="deep-purple-lighten-2"
              text="Reserve"
              block
              border
              @click="reserve"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.zoom-img img :hover {
  zoom: 1.2;
}
.text-overflow-ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
