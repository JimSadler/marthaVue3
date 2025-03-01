<script setup>
import { onMounted, ref } from 'vue';
import { TeacupQuotes } from '@/services/teacupProph.js';

const props = defineProps({
  book: Object,
  teacup: Boolean,
  bloodMountain: Boolean,
});
const randomQuote = ref('');

function getRandomQuote() {
  console.log('getRandomQuote', TeacupQuotes);
  let quoteId = Math.floor(Math.random() * TeacupQuotes.length);
  randomQuote.value = TeacupQuotes[quoteId]?.quote;
  return randomQuote.value;
}

onMounted(() => {
  randomQuote.value = getRandomQuote();
});
</script>
<template>
  <div class="py-3 my-5 mx-15 px-15">
    <v-divider v-if="!bloodMountain" class="mb-5"></v-divider>
    <h2 class="text-center font-weight-light mb-3 text-h4 justify-end animate__animated animate__fadeInDown">
      {{ book.title }}</h2>

    <v-container>
      <v-row>
        <v-col align="center">
          <v-img :src="book.image" class="justify-end animate__animated animate__zoomIn " width="35%"></v-img>
        </v-col>
        <v-col>
          <p v-for="(text,d) in book.description"
             class="font-weight-regular text-body-1 py-2 animate__animated animate__zoomIn">
            {{ text }}
          </p>
          <div v-if="teacup">
            <div v-if="randomQuote" class="mt-5">
              <div class="d-flex">
                <v-divider></v-divider>
                <v-icon class="mt-n3" size="large">mdi-format-quote-close</v-icon>
                <v-divider></v-divider>
              </div>
              <p v-if="randomQuote"
                 class="font-weight-light font-italic text-h6 text-center pb-3 animate__animated animate__zoomIn">
                {{ randomQuote }}
              </p>
              <p class="font-weight-light text-body-1 text-center">~ Martha Novak ~</p>
              <v-divider></v-divider>
            </div>
            <div class="text-center">
              <v-btn
                class="mt-5 text-black mr-3"
                color="#8db0b3"
                prepend-icon="mdi-tea"
                @click="getRandomQuote"
              >
                get new quote
              </v-btn>
              <!--<v-btn-->

              <!--  class="mt-5 text-black mx-auto"-->
              <!--  color="#8db0b3"-->
              <!--  disabled-->
              <!--  prepend-icon="mdi-share"-->
              <!--  @click=""-->
              <!--&gt;-->
              <!--  Share quote-->
              <!--</v-btn>-->
            </div>
          </div>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<style lang="scss" scoped>

</style>
