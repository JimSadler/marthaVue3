<script setup>
import {infiniteInsights} from '@/services/constants.js';

import AppRecentArticles from "@/components/AppRecentArticles.vue";
</script>
<template>
  <section
    :class="`hero is-medium`"
  >
    <img
      alt
      class="hero-bg-img"
      src="@/assets/whatWeDo/sunset-1373171_1920.jpg"
    />
    <div class="hero-body">
      <div class="container">
        <h1 class="title animate__animated animate__fadeInUp text-white font-weight-light">
          What We Do
        </h1>
        <!--<h2 class="subtitle animated fadeInUp slower">-->
        <!--  {{ subtitle }}-->
        <!--</h2>-->
        <!--<br />-->
      </div>
    </div>
  </section>
  <div class="three-quarter-page py-5">
    <div class="two-to-one-grid px-15 ml-10">
      <div class="text-left ml-15">
        <div class="insights-intro border-b-sm py-3"><p class="text-body-1 font-weight-light">
          Infinite Insight is the correction of false assumptions. We spend
          all our lives trying to be loved. But our journey is not about
          being loved, it is about Being Love. This is what our company
          facilitates. We invite you to listen to our audio clips, hear
          Martha Novak in person, and participate in her group healing
          sessions that she does in her hometown Atlanta and in cities
          around the world.
        </p>
          <br/>
          <p class="text-body-1 font-weight-light">
            Martha is the real thing, a true motivator and inspirational
            leader as well as a great teacher who cares deeply about people
            and about their journey into Wholeness. Her abilities are
            astounding and she continues to offer deep and life-altering
            insights the likes of which you will never hear anywhere else.
          </p>
          <br/>
          <p class="text-body-1 font-weight-light">
            We invite you to work with Martha and the people she has trained.
            All go through a long, rigorous process to be certified. This
            group of facilitators are top-notch professionals who have worked
            with Martha and with Infinite Insight for years.
          </p></div>
        <div class="insights mt-10">
          <v-expansion-panels>
            <v-expansion-panel v-for="(insight, index) in infiniteInsights" :key="index">
              <v-expansion-panel-title>
                {{ insight.title }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p class="font-weight-light my-3" v-for="(description,d) in insight.descriptions" :key="d">{{description}} <br /></p>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
      <div class="border-s-sm recent-articles py-5 text-left px-5">
        <app-recent-articles />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//.hero {
//  height: 40vh;
//  margin-top: 65px;
//  background-size: cover !important;
//  background-position: center;
//  text-align: center;
//  overflow: hidden;
//  position: relative;
//  &.hero:after {
//    content: '';
//    top: 0;
//    left: 0;
//    right: 0;
//    bottom: 0;
//    // background: rgba(0, 0, 0, 0.25);
//    position: absolute;
//  }
//
//  .hero-bg-img {
//    position: absolute;
//    top: 0;
//    left: 0;
//    right: 0;
//    bottom: 0;
//    object-fit: cover;
//    width: 100%;
//    height: 100%;
//  }
//  .hero-body {
//    margin-top: 8%;
//    font-size: 2.2rem;
//  }
//}
</style>
