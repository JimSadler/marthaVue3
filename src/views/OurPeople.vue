<script setup>
import {recentArticles, masterFacilitators} from '@/services/constants.js';
import AppRecentArticles from "@/components/AppRecentArticles.vue";
</script>
<template>
	<div class="py-10 mt-15 text-center align-center quarter-header">
        <h1 class="mt-15">Our People</h1>
	</div>
  <div class="three-quarter-page py-5">
    <div class="two-to-one-grid px-15">
      <div>
        <!--martha-->
        <div class="d-flex justify-end py-5 martha border-b-sm">
            <div class="mr-5">
              <v-img
                class="animate__animated animate__fadeIn"

                src="@/assets/people/martha0.jpg"
                height="250px"
                width="250px"
                style="border-radius: 8px;"
              ></v-img>
            </div>
            <div>
              <h2 class="font-weight-regular">Martha</h2>
              <p class="my-3">
                Martha Novak has a unique roadmap which takes you from awareness
                to consciousness to the enlightened life that is yours for the
                choosing. It is unlike any healing journey you have ever
                experienced. By releasing you once and for all from habitual
                emotional clutter and circular thinking, you are freed from the
                hold of the past to move fully into your dynamic present. Here you
                find deep levels of peace, compassion and forgiveness for yourself
                and others. Here you begin to live the powerful and
                ever-expanding, abundant life that is yours in the fullness of
                God.
              </p>
              <p class="my-3">
                It is here in the fullness of God, where you live your life in
                complete authenticity. In advanced stages of consciousness, you
                experience the enlightened life, free from anxiety and fear.
                Instead, your life is filled with ever increasing joy, passion and
                potential. You live your truth, you know that you are limited by
                nothing, you know that you are pure, creative potential as your
                mind is sharply focused to create the life you want.
              </p>
              <p class="my-3">
                If this sounds too good to be true, you do not know Martha. She is
                a powerful spiritual teacher, healer, and emotional intuitive who,
                over her lifetime, has developed a life-changing system of
                training, not only for business, but also for spirituality in
                every aspect of daily life. It is called The Burgess Process and
                it teaches that everything is the spiritual journey.
              </p>
            </div>
          </div>
      <!--  master facilitators-->
        <div>
          <h2 class="font-weight-regular text-center mt-5"> Certified Master Facilitators</h2>
        <!--  facilitator-->
          <div v-for="(facilitator, index) in masterFacilitators" :key="index">

            <div class="d-flex mt-5 px-15">
              <v-img
                class="animate__animated animate__fadeInLeft animate__delay-1s"
                :src="facilitator.image"
                height="209px"
                width="209px"
                style="border-radius: 8px;"
              />
              <div class="px-16 ml-5">
                <h3 class="font-weight-regular">{{ facilitator.name }}</h3>
                <div>{{ facilitator.bio }}</div>
                <v-list class="">
                  <v-list-item v-for="(link,key,j) in facilitator.links" :key="j" class="d-inline-block">
                    <!--<a :href="link" target="_blank">-->
                    <!--  <v-icon>mdi-{{key}}</v-icon>-->
                    <!--</a>-->
                    <v-btn :icon="`mdi-${key}`"  :href="link" target="_blank" variant="text"></v-btn>
                    <!--<v-fab :icon="`mdi-${key}`" variant="text" :href="link" target="_blank"></v-fab>-->
                    <!--<v-icon>mdi-{{key}}</v-icon>-->
                  </v-list-item>
                </v-list>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="border-s-sm recent-articles py-5 text-left px-5">
        <app-recent-articles />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
   .quarter-header {
     width: 100%;
     height: 40vh;
    background-image: url('@/assets/people/footprints-1145883_1920.jpg');
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
    .recent-articles {
      //height: 54vh;
    }
</style>
