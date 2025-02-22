<script setup>
import {storeVideoData, storeAudioData} from '@/services/store.constants.js';

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
                 <span :data-fsc-item-path="video.store_path" data-fsc-item-display="data-fsc-item-display">

                </span>
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
                :data-fsc-item-path="video.store_path"
                :data-fsc-item-path-value="video.store_path"
                data-fsc-action="Add, Checkout"
                @click="reserve"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
      <div class="mt-3 border-b-sm">
        <h2 class="text-center font-weight-light">Audio Downloads</h2>
        <div class="d-flex justify-center">
          <v-card
            v-for="(audio, index) in storeAudioData"
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
              :src="audio.image"
              cover
            ></v-img>

            <v-card-item>
              <v-card-title class="d-flex justify-space-between" >
                <span :data-fsc-item-path="audio.store_path" data-fsc-item-display="data-fsc-item-display">

                </span>
                {{ audio.title }}

                <span class="text-teal" data-fsc-item-price="data-fsc-item-price">${{audio.price}}</span>
              </v-card-title>
              <v-tooltip width="15%" location="top" :text="audio.description" :aria-label="audio.description">
                <template v-slot:activator="{ props }">
                  <v-card-text v-bind="props" class="text-overflow-ellipsis px-1 py-0" >
                    <span class="">{{ audio.description }}</span>
                  </v-card-text>
                </template>
              </v-tooltip>

            </v-card-item>
            <v-card-actions>
              <v-btn
                :class="audio.id === 'intimacy'"
                color="deep-purple-lighten-2"
                text="Purchase"
                block
                border
                :data-fsc-item-path="audio.store_path"
                :data-fsc-item-path-value="audio.store_path"
                data-fsc-action="Add, Checkout"
                @click="reserve"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </div>

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
