<script setup>
import { onMounted, ref } from 'vue';
import { TeacupQuotes } from '@/services/teacupProph.js';

const props = defineProps({
  book: Object,
  teacup: Boolean,
  bloodMountain: Boolean,
});
const randomQuote = ref('');
const windowFeatures = ref({});
const shareOptions = ref({
  facebook: {
    href: 'https://www.facebook.com/',
    text: randomQuote.value,
    hashtag: '#TeacupProphecies',
  },
  twitter: {
    href: 'https://www.x.com/',
    text: randomQuote.value,
    hashtag: '#TeacupProphecies',
  },

});
const networks = ref([
  {
    network: 'twitter',
    name: 'Twitter',
    icon: 'mdi-twitter',
    color: '#1da1f2',
    shareOptions: {
      url: 'https://twitter.com/',
      title: randomQuote.value,
      quote: randomQuote.value,
      description: randomQuote.value,
      hashtags: 'TeacupProphecies,MarthaNovak',
    },
  },
  {
    network: 'facebook',
    name: 'Facebook',
    icon: 'mdi-facebook',
    color: '#1877f2',
    shareOptions: {
      url: 'https://www.facebook.com/',
      title: randomQuote.value,
      quote: randomQuote.value,
      description: randomQuote.value,
      hashtags: 'TeacupProphecies,MarthaNovak',
    },
  },
]);
const sharingInfo = {
  facebook: {
    href: 'https://www.facebook.com/',

    quote: randomQuote.value,
    hashtag: '#TeacupProphecies',
  },
  x: {
    href: 'https://twitter.com/',
    quote: randomQuote.value,
    hashtag: '#TeacupProphecies',
  },
};
const useNativeBehavior = ref(false);

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
              <!--<v-menu>-->
              <!--  <template v-slot:activator="{ props }">-->
              <!--    <v-btn-->
              <!--      color="#8db0b3"-->
              <!--      prepend-icon="mdi-share"-->
              <!--      v-bind="props"-->
              <!--    >-->
              <!--      Share quote-->
              <!--    </v-btn>-->
              <!--  </template>-->
              <!--  <v-list>-->
              <!--    <v-list-item v-for="network in networks"-->
              <!--                 :key="network.network">-->
              <!--      <share-network-->

              <!--        v-slot="{ share }"-->
              <!--        :description="network.shareOptions.description"-->
              <!--        :hashtags="network.shareOptions.hashtags"-->
              <!--        :media="network.shareOptions.media"-->
              <!--        :network="network.network"-->
              <!--        :quote="network.shareOptions.quote"-->
              <!--        :title="network.shareOptions.title"-->
              <!--        :twitterUser="network.shareOptions.twitterUser"-->
              <!--        :url="network.shareOptions.url"-->
              <!--      >-->
              <!--        <div-->

              <!--          class="social-network"-->
              <!--          @click="share"-->
              <!--        >-->
              <!--          <v-icon :color="network.color">{{ network.icon }}</v-icon>-->
              <!--          <span>{{ network.name }}</span>-->
              <!--        </div>-->
              <!--      </share-network>-->


              <!--    </v-list-item>-->
              <!--    <v-list-item>-->
              <!--      <s-facebook-->
              <!--        :share-options="shareOptions.facebook"-->
              <!--        :use-native-behavior="useNativeBehavior"-->
              <!--        :window-features="windowFeatures"-->
              <!--        @popup-close="onClose"-->
              <!--        @popup-open="onOpen"-->
              <!--        @popup-block="onBlock"-->
              <!--        @popup-focus="onFocus"-->
              <!--      >-->
              <!--        <v-icon color="#0966FF">mdi-facebook</v-icon>-->
              <!--      </s-facebook>-->
              <!--      <s-twitter :use-native-behavior="useNativeBehavior"-->
              <!--                 :window-features="windowFeatures"-->
              <!--                 share-options="shareOptions.twitter">-->
              <!--        <v-icon color="#1da1f2">mdi-twitter</v-icon>-->
              <!--      </s-twitter>-->
              <!--    </v-list-item>-->
              <!--  </v-list>-->
              <!--</v-menu>-->

            </div>
          </div>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<style lang="scss" scoped>

</style>
