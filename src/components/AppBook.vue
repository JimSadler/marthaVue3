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
      {{ book.title }}
    </h2>

    <v-container>
      <v-row>
        <v-col align="center">
          <v-img :src="book.image" class="justify-end animate__animated animate__zoomIn " width="35%"></v-img>
        </v-col>
        <v-col>
          <p
            v-for="(text, d) in book.description"
            class="font-weight-regular text-body-1 py-2 animate__animated animate__zoomIn"
          >
            {{ text }}
          </p>
          <div v-if="bloodMountain" class="btn-container text-center mt-15">
            <div class="position-absolute mt-10" style="z-index: 1000 !important; bottom: 32%; right: 5%;">
              <v-btn
                aria-label="Buy Blood Mountain on Audible"
                class="button btn is-medium animated-button victoria-three animated flipInX px-15 mx-1"
                href="https://www.audible.com/pd/Blood-Mountain-Audiobook/B0FMYQXW3N?source_code=ASSGB149080119000H&share_location=pdp"
                size="x-large"
                target="_blank"
              >
                <v-img alt class="mt-n8 custom-audible-svg" src="/audible-logo-png_seeklogo-298112.png" width="85" />
              </v-btn>
              <v-btn
                aria-label="Buy Blood Mountain on Amazon"
                class="button btn is-medium animated-button victoria-three animated flipInX px-15 mx-1"
                href="https://www.amazon.com/BLOOD-MOUNTAIN-Martha-Novak/dp/B0G3X7MV1Z/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.GXQgo3w6O_2o1wtjkGJCHhFgY3hMxVUE_CGwFJQD3Zr1dFQyp2k0CyCAO0Dt2LzmH16QoHKoHwOjmUgITQ98ZlmKrj5A3SyRuOWQQj9UCJlSxdIyowRsabWlTXYLqNBPkAEnwhk2KLAk-BDVQGLO3iINActpmFOwzf9i-JxdT4ZMyZ2eEFdi9zWf5yORuccQ9IckUla3DXLbZlfFQ36h7XLRQkuPoMKnuksmOyN9_zY.1DMfdAiqLImI5N3PxAKzJchc-lxAXlzvE4pa22g0MQY&qid=1765729320&sr=1-1"
                size="x-large"
                target="_blank"
              >
                <v-img alt class="mt-n8 custom-amazon-svg" src="/294695_amazon_icon.svg" width="100" />
              </v-btn>
            </div>
          </div>

          <div v-if="teacup">
            <div v-if="randomQuote" class="mt-5">
              <div class="d-flex">
                <v-divider></v-divider>
                <v-icon class="mt-n3" size="large">mdi-format-quote-close</v-icon>
                <v-divider></v-divider>
              </div>
              <p
                v-if="randomQuote"
                class="font-weight-light font-italic text-h6 text-center pb-3 animate__animated animate__zoomIn"
              >
                {{ randomQuote }}
              </p>
              <p class="font-weight-light text-body-1 text-center">~ Martha Novak ~</p>
              <v-divider></v-divider>
            </div>
            <div class="text-center">
              <v-btn class="mt-5 text-black mr-3" color="#8db0b3" prepend-icon="mdi-tea" @click="getRandomQuote">
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
.btn-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 6.25%;
  padding-top: 2px;
}
/* Animated Buttons */
a.animated-button,
a.animated-button:visited,
button.animated-button,
button.animated-button:visited {
  position: relative;
  /*display: block;*/
  margin: 20px auto 0;
  padding: 14px 15px !important;
  color: black;
  font-size: 14px;
  /*font-weight: bold;*/
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  letter-spacing: 0.08em;
  border-radius: 7px;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;

  .custom-amazon-svg,
  .custom-audible-svg {
    transition: all 1s ease;
    filter: invert(0);
  }
}

a.animated-button:after,
a.animated-button:visited:after,
button.animated-button:after,
button.animated-button:visited:after {
  content: '';
  position: absolute;
  height: 0%;
  left: 50%;
  top: 50%;
  width: 99%;
  z-index: -1;
  -webkit-transition: all 0.75s ease 0s;
  -moz-transition: all 0.75s ease 0s;
  -o-transition: all 0.75s ease 0s;
  transition: all 0.75s ease 0s;
}

a.animated-button:hover,
a.animated-button:visited:hover,
button.animated-button:visited:hover,
button.animated-button:hover {
  color: #fff;
  text-shadow: none;
  background-color: #0e7283;
  border: 0.5px solid;
  border-color: #fff !important;

  .custom-amazon-svg,
  .custom-audible-svg {
    filter: invert(100%) hue-rotate(90deg);
  }
}

a.animated-button:hover:after,
a.animated-button:visited:hover:after,
button.animated-button:hover:after,
button.animated-button:visited:hover:after {
  height: 450% !important;
  width: 450% !important;
  opacity: 1;
}

/* Sandy Buttons */
a.animated-button.victoria-three,
button.animated-button.victoria-three {
  //border: 0.5px solid whitesmoke;
  width: 17.5em;
  background-color: transparent;
  color: whitesmoke;
}

a.animated-button.victoria-three:after,
button.animated-button.victoria-three:after {
  background: #0e7283;
  opacity: 0.5;
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

a.animated-button.victoria-three:hover:after,
button.animated-button.victoria-three:hover:after {
  height: 128% !important;
  width: 128%;
  opacity: 1;
}
a.animated-button.victoria-three:not(:hover):after,
button.animated-button.victoria-three:not(:hover):after {
  color: white;
}
</style>
