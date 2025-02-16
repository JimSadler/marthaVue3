<script setup>
import { ref, computed } from 'vue';
import {TeacupQuotes} from '@/services/teacupProph.js';
const props = defineProps({
  book: Object,
  teacup: Boolean
});
const randomquote = ref('')
const randomQuote = computed(() => {
  const rand = Math.floor(Math.random() * TeacupQuotes.length);
  console.log('rand',rand)
  // return this.teacupDataList[rand] ? this.teacupDataList[rand].quote : "";
  return rand?.quote
})
 function getRandomQuote() {
  let quoteId = Math.floor(Math.random() * TeacupQuotes.length);
   randomquote.value = TeacupQuotes[quoteId]?.quote
   return randomquote.value
 }
function getTeacupData() {
  axios.get("/teacupProph.json").then((response) => {
    this.teacupDataList = response.data;
    console.log('teacupDataList', teacupDataList)
  });
  // onMounted(() => {
  //   getRandomQuote()
  // })
}
</script>
<template>
	<div class="py-3 my-5 mx-15 px-15">
    <h2 class="text-center font-weight-light mb-3 text-h4 justify-end animate__animated animate__fadeInDown">{{book.title}}</h2>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col align="center">
              <v-img width="35%" class="justify-end animate__animated animate__zoomIn " :src="book.image"></v-img>
        </v-col>
        <v-col>
          <p class="font-weight-regular text-body-1 py-2 animate__animated animate__zoomIn" v-for="(text,d) in book.description">
            {{text}}
          </p>
          <div v-if="teacup">
            <div v-if="randomquote" class="mt-5">
              <div class="d-flex">
                <v-divider></v-divider>
                <v-icon class="mt-n3" size="large">mdi-format-quote-close</v-icon>
                <v-divider></v-divider>
              </div>
              <p class="font-weight-light font-italic text-h6 text-center pb-3 animate__animated animate__zoomIn"
                 v-if="randomquote">
                {{ randomquote }}
              </p>
              <p class="font-weight-light text-body-1 text-center">~ Martha Novak ~</p>
              <v-divider></v-divider>
            </div>
            <div class="text-center">
              <v-btn
                class="mt-5 text-black mx-auto"
                color="#8db0b3"
                @click="getRandomQuote"
                prepend-icon="mdi-tea"
                size="large"
              >
                get quote
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>

    </v-container>
	</div>
</template>

<style lang="scss" scoped>

</style>
